<template lang="pug">
.w-scrollable(
  ref="rootEl"
  v-bind="$attrs"
  :tabindex="computedTabindex"
  role="region"
  :aria-disabled="props.disabled ? 'true' : undefined"
  @mouseenter="onMouseEnter"
  @mouseleave="onMouseLeave"
  @wheel="onWheel"
  @keydown="onKeydown"
  :class="scrollableClasses"
  :style="scrollableStyles")
  .w-scrollable__content(
    :id="contentId"
    ref="scrollableEl"
    :class="contentClasses"
    @scroll="onNativeScroll")
    slot
  .w-scrollable__scrollbar(
    v-show="hasOverflow && showCustomTrack"
    ref="trackEl"
    :class="scrollbarClasses"
    role="presentation"
    @pointerdown.prevent="onTrackPointerDown")
    .w-scrollable__scrollbar-thumb(
      ref="thumbEl"
      :class="{ [props.color]: !!props.color }"
      :style="thumbStyles"
      role="scrollbar"
      :aria-controls="contentId"
      :aria-orientation="scrollbarOrientation"
      :aria-valuemin="0"
      :aria-valuemax="scrollbarValueMax"
      :aria-valuenow="scrollbarValueNow"
      :aria-disabled="props.disabled ? 'true' : undefined"
      :aria-label="thumbAriaLabel"
      tabindex="-1"
      @pointerdown.stop.prevent="onThumbPointerDown")
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch, useId, useAttrs } from 'vue'
import { objectifyClasses } from '../utils/index'

defineOptions({ name: 'WScrollable' })

const props = defineProps({
  color: { type: String, default: 'primary' },
  bgColor: { type: String },
  width: { type: [Number, String] },
  height: { type: [Number, String] },
  /** Classes for the inner scroll container (`.w-scrollable__content`). */
  contentClass: { type: [String, Object, Array], default: undefined },
  disabled: { type: Boolean, default: false },
  tabindex: { type: [Number, String], default: 0 },
  wheelStep: { type: Number, default: 40 },
  /** When true, scrolls along X (scrollLeft); default false is vertical (scrollTop). */
  horizontal: { type: Boolean, default: false },
  /**
   * Custom scrollbar: `1` default (always when overflow), `0` hide track, `'hover'`, `'interaction'`.
   * String `'0'` / `'1'` from templates are accepted.
   */
  scrollbar: {
    type: [Number, String],
    default: 1,
    validator: value => (
      value === 0 || value === 1 || value === '0' || value === '1'
      || value === 'hover' || value === 'interaction'
    )
  },
  /**
   * Programmatic scroll: a number sets the primary axis offset (top when vertical, left when horizontal),
   * or an object `{ top?, left? }` sets pixel offsets per axis (defined keys only).
   */
  scrollPosition: {
    type: [Number, Object],
    default: null,
    validator: value => (
      value == null
      || (typeof value === 'number' && !Number.isNaN(value))
      || (typeof value === 'object' && value !== null && !Array.isArray(value))
    )
  }
})

const emit = defineEmits(['scroll', 'scroll-start', 'scroll-end'])

const SCROLL_END_DEBOUNCE_MS = 120
const ACTIVE_SCROLL_INDICATOR_MS = 450

const domProps = {
  h: {
    direction: 'horizontal',
    topOrLeft: 'left',
    size: 'width',
    offsetSize: 'offsetWidth',
    scrollSize: 'scrollWidth',
    clientSize: 'clientWidth',
    clientXorY: 'clientX',
    deltaXorY: 'deltaX',
    scrollTopOrLeft: 'scrollLeft'
  },
  v: {
    direction: 'vertical',
    topOrLeft: 'top',
    size: 'height',
    offsetSize: 'offsetHeight',
    scrollSize: 'scrollHeight',
    clientSize: 'clientHeight',
    clientXorY: 'clientY',
    deltaXorY: 'deltaY',
    scrollTopOrLeft: 'scrollTop'
  }
}

const contentId = useId()
const attrs = useAttrs()

const rootEl = ref(null)
const scrollableEl = ref(null)
const trackEl = ref(null)
const thumbEl = ref(null)
const hovered = ref(false)
const isActiveScroll = ref(false)
const isDragging = ref(false)
const scrollValuePercent = ref(0)
const metricsVersion = ref(0)
const scrollSource = ref('native')
const skipNextNativeScrollEvent = ref(false)
const hasScrollStarted = ref(false)
const dragState = ref({ offset: 0, trackStart: 0, trackSize: 0 })
const dragPointerId = ref(null)
let scrollEndTimeout = null
let activeScrollTimeout = null
let resizeObserver = null
let documentCursorBeforeDrag = ''

const isHorizontal = computed(() => props.horizontal)

const m = computed(() => domProps[isHorizontal.value ? 'h' : 'v'])
const computedTabindex = computed(() => (props.disabled ? -1 : props.tabindex))

const scrollbarMode = computed(() => {
  const s = props.scrollbar
  if (s === 0 || s === '0') return 'off'
  if (s === 1 || s === '1') return 'always'
  if (s === 'hover') return 'hover'
  if (s === 'interaction') return 'interaction'
  return 'always'
})

const showCustomTrack = computed(() => scrollbarMode.value !== 'off')

const scrollableClasses = computed(() => ({
  [`w-scrollable--${m.value.direction}`]: true,
  'w-scrollable--disabled': props.disabled,
  'w-scrollable--dragging': isDragging.value,
  'w-scrollable--scrolling': isActiveScroll.value || isDragging.value
}))

const scrollbarClasses = computed(() => ({
  [`w-scrollable__scrollbar--${m.value.direction}`]: true,
  'w-scrollable__scrollbar--hidden': !isScrollbarVisible.value,
  [`${props.bgColor}--bg`]: !!props.bgColor
}))

const contentClasses = computed(() => objectifyClasses(props.contentClass ?? {}))

const hasOverflow = computed(() => {
  metricsVersion.value // Force recompute when manual refresh is called.
  if (!scrollableEl.value) return false
  return scrollableEl.value[m.value.scrollSize] > scrollableEl.value[m.value.clientSize] + 1
})

const maxScrollValue = computed(() => {
  metricsVersion.value // Force recompute when manual refresh is called.
  if (!scrollableEl.value) return 0
  return Math.max(0, scrollableEl.value[m.value.scrollSize] - scrollableEl.value[m.value.clientSize])
})

// WAI-ARIA: role "scrollbar" on the thumb; values are pixels along the scrollable axis
// (0 .. max), matching the native scroll offset on the controlled element.
const scrollbarOrientation = computed(() => (isHorizontal.value ? 'horizontal' : 'vertical'))

const scrollbarValueMax = computed(() => {
  if (!hasOverflow.value) return 0
  return Math.max(0, Math.round(maxScrollValue.value))
})

const scrollbarValueNow = computed(() => {
  if (!scrollableEl.value) return 0
  const raw = Math.round(scrollableEl.value[m.value.scrollTopOrLeft])
  const max = scrollbarValueMax.value
  return max ? Math.min(max, Math.max(0, raw)) : 0
})

const rootAriaName = computed(() => {
  const v = attrs['aria-label'] ?? attrs.ariaLabel
  return typeof v === 'string' && v ? v : ''
})

const thumbAriaLabel = computed(() => {
  if (rootAriaName.value) return `${rootAriaName.value}, scroll position`
  return isHorizontal.value ? 'Horizontal scrollbar' : 'Vertical scrollbar'
})

const thumbSizePercent = computed(() => {
  metricsVersion.value // Force recompute when manual refresh is called.
  if (!scrollableEl.value || !hasOverflow.value) return 100
  const availableSize = scrollableEl.value[m.value.clientSize]
  const fullSize = scrollableEl.value[m.value.scrollSize]
  return Math.max(8, Math.min(100, (availableSize * 100) / fullSize))
})

const isScrollbarVisible = computed(() => {
  const mode = scrollbarMode.value
  if (!hasOverflow.value || mode === 'off') return false
  if (mode === 'always') return true
  if (mode === 'hover') {
    return hovered.value || isDragging.value || isActiveScroll.value
  }
  if (mode === 'interaction') {
    return isDragging.value || isActiveScroll.value
  }
  return true
})

function normalizeDimension (value) {
  if (value === undefined || value === null || value === '') return undefined
  if (typeof value === 'number') return `${value}px`
  if (typeof value === 'string' && /^-?\d+(\.\d+)?$/.test(value.trim())) return `${value.trim()}px`
  return value
}

const scrollableStyles = computed(() => ({
  'max-width': normalizeDimension(props.width),
  'max-height': normalizeDimension(props.height)
}))

const thumbStyles = computed(() => {
  const maxPercent = Math.max(0, 100 - thumbSizePercent.value)
  const topOrLeftValue = clamp((scrollValuePercent.value / 100) * maxPercent, 0, maxPercent)
  return {
    [m.value.size]: `${thumbSizePercent.value}%`,
    [m.value.topOrLeft]: `${topOrLeftValue}%`
  }
})

function clamp (value, min, max) {
  return Math.max(min, Math.min(value, max))
}

function isEditableTarget (target) {
  if (!target || target === rootEl.value) return false
  const tagName = target.tagName
  if (!tagName) return false
  if (target.isContentEditable) return true
  return ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(tagName)
}

function buildPayload (source = 'native') {
  if (!scrollableEl.value) {
    return {
      top: 0,
      left: 0,
      maxTop: 0,
      maxLeft: 0,
      topPercent: 0,
      leftPercent: 0,
      source
    }
  }

  const top = scrollableEl.value.scrollTop
  const left = scrollableEl.value.scrollLeft
  const maxTop = Math.max(0, scrollableEl.value.scrollHeight - scrollableEl.value.clientHeight)
  const maxLeft = Math.max(0, scrollableEl.value.scrollWidth - scrollableEl.value.clientWidth)

  return {
    top,
    left,
    maxTop,
    maxLeft,
    topPercent: maxTop ? (top / maxTop) * 100 : 0,
    leftPercent: maxLeft ? (left / maxLeft) * 100 : 0,
    source
  }
}

function emitScrollLifecycle (source = 'native') {
  const payload = buildPayload(source)
  emit('scroll', payload)

  if (!hasScrollStarted.value) {
    hasScrollStarted.value = true
    emit('scroll-start', payload)
  }

  if (scrollEndTimeout) window.clearTimeout(scrollEndTimeout)
  scrollEndTimeout = window.setTimeout(() => {
    hasScrollStarted.value = false
    emit('scroll-end', buildPayload('native'))
  }, SCROLL_END_DEBOUNCE_MS)
}

function onMouseEnter () {
  hovered.value = true
}

function onMouseLeave () {
  hovered.value = false
}

function syncThumbFromScrollPosition () {
  if (!scrollableEl.value) return
  scrollValuePercent.value = maxScrollValue.value
    ? (scrollableEl.value[m.value.scrollTopOrLeft] * 100) / maxScrollValue.value
    : 0
}

function setScrollPosition (nextValue, source = 'api') {
  if (!scrollableEl.value) return
  const clampedValue = clamp(nextValue, 0, maxScrollValue.value)
  const previousValue = scrollableEl.value[m.value.scrollTopOrLeft]
  scrollSource.value = source

  if (Math.abs(previousValue - clampedValue) < 1) {
    syncThumbFromScrollPosition()
    emitScrollLifecycle(source)
    return
  }

  if (source === 'wheel' || source === 'keyboard') markActiveScroll()
  skipNextNativeScrollEvent.value = true
  scrollableEl.value[m.value.scrollTopOrLeft] = clampedValue
  syncThumbFromScrollPosition()
  emitScrollLifecycle(source)
}

function setScrollPercent (percent, source = 'api') {
  const normalizedPercent = clamp(percent, 0, 100)
  setScrollPosition((normalizedPercent / 100) * maxScrollValue.value, source)
}

function refresh () {
  nextTick(() => {
    metricsVersion.value++
    syncThumbFromScrollPosition()
    // Run a second pass on next frame so show/hide/layout transitions settle.
    requestAnimationFrame(() => {
      metricsVersion.value++
      syncThumbFromScrollPosition()
    })
  })
}

function onNativeScroll () {
  if (skipNextNativeScrollEvent.value) {
    skipNextNativeScrollEvent.value = false
    return
  }

  syncThumbFromScrollPosition()
  emitScrollLifecycle(scrollSource.value)
  scrollSource.value = 'native'
}

function getNormalizedWheelDelta (e) {
  const deltaX = e.deltaX || 0
  const deltaY = e.deltaY || 0
  let rawDelta = 0

  if (isHorizontal.value) {
    // Trackpads often emit horizontal intent on either axis depending on gesture/settings.
    rawDelta = Math.abs(deltaX) >= Math.abs(deltaY) ? deltaX : deltaY
    if (!rawDelta && e.shiftKey) rawDelta = deltaY
  }
  else {
    rawDelta = Math.abs(deltaY) >= Math.abs(deltaX) ? deltaY : deltaX
  }

  if (!scrollableEl.value) return rawDelta
  if (e.deltaMode === 1) return rawDelta * props.wheelStep
  if (e.deltaMode === 2) return rawDelta * scrollableEl.value[m.value.clientSize]
  return rawDelta
}

function markActiveScroll () {
  isActiveScroll.value = true
  if (activeScrollTimeout) window.clearTimeout(activeScrollTimeout)
  activeScrollTimeout = window.setTimeout(() => {
    isActiveScroll.value = false
    activeScrollTimeout = null
  }, ACTIVE_SCROLL_INDICATOR_MS)
}

function applyScrollPositionFromProps () {
  const pos = props.scrollPosition
  if (pos == null || !scrollableEl.value) return

  if (typeof pos === 'number') {
    if (Number.isNaN(pos)) return
    setScrollPosition(pos, 'api')
    return
  }

  if (typeof pos !== 'object' || pos === null) return

  const el = scrollableEl.value
  const maxT = Math.max(0, el.scrollHeight - el.clientHeight)
  const maxL = Math.max(0, el.scrollWidth - el.clientWidth)

  const hasTop = 'top' in pos && pos.top != null && typeof pos.top === 'number' && !Number.isNaN(pos.top)
  const hasLeft = 'left' in pos && pos.left != null && typeof pos.left === 'number' && !Number.isNaN(pos.left)

  if (hasTop || hasLeft) {
    skipNextNativeScrollEvent.value = true
    if (hasTop) el.scrollTop = clamp(pos.top, 0, maxT)
    if (hasLeft) el.scrollLeft = clamp(pos.left, 0, maxL)
    syncThumbFromScrollPosition()
    emitScrollLifecycle('api')
    return
  }

  const target = isHorizontal.value ? (pos.left ?? pos.top) : (pos.top ?? pos.left)
  if (typeof target === 'number' && !Number.isNaN(target)) setScrollPosition(target, 'api')
}

function setDocumentGrabbingCursor (on) {
  if (on) {
    documentCursorBeforeDrag = document.documentElement.style.cursor
    document.documentElement.style.cursor = 'grabbing'
  }
  else {
    document.documentElement.style.cursor = documentCursorBeforeDrag
    documentCursorBeforeDrag = ''
  }
}

function bindDragListeners () {
  document.addEventListener('pointermove', onPointerDrag, true)
  document.addEventListener('pointerup', onPointerUp, true)
  document.addEventListener('pointercancel', onPointerUp, true)
}

function unbindDragListeners () {
  document.removeEventListener('pointermove', onPointerDrag, true)
  document.removeEventListener('pointerup', onPointerUp, true)
  document.removeEventListener('pointercancel', onPointerUp, true)
}

function onWheel (e) {
  if (props.disabled || !hasOverflow.value) return

  // macOS: ⌘+scroll jumps to start/end of the scrollable (like native large-document jumps).
  if (e.metaKey) {
    const jumpDelta = getNormalizedWheelDelta(e)
    if (!jumpDelta) return
    e.preventDefault()
    if (jumpDelta < 0) setScrollPosition(0, 'wheel')
    else setScrollPosition(maxScrollValue.value, 'wheel')
    return
  }

  const wheelDelta = getNormalizedWheelDelta(e)
  if (!wheelDelta) return

  const currentValue = scrollableEl.value[m.value.scrollTopOrLeft]
  const nextValue = clamp(currentValue + wheelDelta, 0, maxScrollValue.value)
  const isAtStart = currentValue <= 0 && wheelDelta < 0
  const isAtEnd = currentValue >= maxScrollValue.value && wheelDelta > 0
  if (isAtStart || isAtEnd) return

  e.preventDefault()
  setScrollPosition(nextValue, 'wheel')
}

function onKeydown (e) {
  if (props.disabled || !hasOverflow.value) return
  if (isEditableTarget(e.target)) return

  const current = scrollableEl.value[m.value.scrollTopOrLeft]
  const step = props.wheelStep
  const page = scrollableEl.value[m.value.clientSize]
  let nextValue = null

  if (e.metaKey) {
    if (e.key === 'ArrowUp' && !isHorizontal.value) {
      e.preventDefault()
      setScrollPosition(0, 'keyboard')
      return
    }
    if (e.key === 'ArrowDown' && !isHorizontal.value) {
      e.preventDefault()
      setScrollPosition(maxScrollValue.value, 'keyboard')
      return
    }
    if (e.key === 'ArrowLeft' && isHorizontal.value) {
      e.preventDefault()
      setScrollPosition(0, 'keyboard')
      return
    }
    if (e.key === 'ArrowRight' && isHorizontal.value) {
      e.preventDefault()
      setScrollPosition(maxScrollValue.value, 'keyboard')
      return
    }
  }

  switch (e.key) {
    case 'ArrowUp':
      if (!isHorizontal.value) nextValue = current - step
      break
    case 'ArrowDown':
      if (!isHorizontal.value) nextValue = current + step
      break
    case 'ArrowLeft':
      if (isHorizontal.value) nextValue = current - step
      break
    case 'ArrowRight':
      if (isHorizontal.value) nextValue = current + step
      break
    case 'PageUp':
      nextValue = current - page
      break
    case 'PageDown':
      nextValue = current + page
      break
    case 'Home':
      nextValue = 0
      break
    case 'End':
      nextValue = maxScrollValue.value
      break
  }

  if (nextValue === null) return
  e.preventDefault()
  setScrollPosition(nextValue, 'keyboard')
}

function startDrag (clientPosition, offset, pointerEvent) {
  if (!trackEl.value) return
  const rect = trackEl.value.getBoundingClientRect()
  dragState.value.trackStart = rect[m.value.topOrLeft]
  dragState.value.trackSize = rect[m.value.size]
  dragState.value.offset = Number.isFinite(offset) ? offset : 0
  isDragging.value = true
  const pid = pointerEvent?.pointerId
  if (pid != null && rootEl.value?.setPointerCapture) {
    try {
      rootEl.value.setPointerCapture(pid)
      dragPointerId.value = pid
    }
    catch {
      dragPointerId.value = null
    }
  }
  setDocumentGrabbingCursor(true)
  updateDragPosition(clientPosition)
  bindDragListeners()
}

function updateDragPosition (clientPosition) {
  if (!isDragging.value || !dragState.value.trackSize) return

  const thumbSizePx = dragState.value.trackSize * (thumbSizePercent.value / 100)
  const availableSize = Math.max(1, dragState.value.trackSize - thumbSizePx)
  const thumbPosition = clamp(clientPosition - dragState.value.trackStart - dragState.value.offset, 0, availableSize)
  const scrollPercent = (thumbPosition / availableSize) * 100
  setScrollPercent(scrollPercent, 'drag')
}

function stopDrag () {
  if (dragPointerId.value != null && rootEl.value?.releasePointerCapture) {
    try {
      rootEl.value.releasePointerCapture(dragPointerId.value)
    }
    catch { /* pointer may already be released */ }
    dragPointerId.value = null
  }
  setDocumentGrabbingCursor(false)
  isDragging.value = false
  unbindDragListeners()
}

function onTrackPointerDown (e) {
  if (props.disabled) return
  if (e.button !== 0 && e.pointerType !== 'touch') return
  stopDrag()
  const thumbRect = thumbEl.value?.getBoundingClientRect()
  const offset = thumbRect ? thumbRect[m.value.size] / 2 : 0
  startDrag(e[m.value.clientXorY], offset, e)
}

function onThumbPointerDown (e) {
  if (props.disabled) return
  if (e.button !== 0 && e.pointerType !== 'touch') return
  stopDrag()
  const thumbRect = thumbEl.value?.getBoundingClientRect()
  const offset = thumbRect ? e[m.value.clientXorY] - thumbRect[m.value.topOrLeft] : 0
  startDrag(e[m.value.clientXorY], offset, e)
}

function onPointerDrag (e) {
  if (!isDragging.value) return
  if (e.cancelable) e.preventDefault()
  updateDragPosition(e[m.value.clientXorY])
}

function onPointerUp () {
  if (!isDragging.value) return
  stopDrag()
}

function scroll (value = scrollValuePercent.value) {
  if (typeof value === 'number') {
    setScrollPercent(value, 'api')
    return
  }

  if (value && typeof value === 'object') {
    scrollTo(value)
  }
}

function scrollTo ({ top, left, behavior = 'auto' } = {}) {
  const targetValue = isHorizontal.value ? (left ?? top) : (top ?? left)
  if (typeof targetValue !== 'number') return
  void behavior
  setScrollPosition(targetValue, 'api')
}

function scrollBy ({ top = 0, left = 0, behavior = 'auto' } = {}) {
  if (!scrollableEl.value) return
  const delta = isHorizontal.value ? left : top
  void behavior
  setScrollPosition(scrollableEl.value[m.value.scrollTopOrLeft] + delta, 'api')
}

function scrollToStart () {
  setScrollPosition(0, 'api')
}

function scrollToEnd () {
  setScrollPosition(maxScrollValue.value, 'api')
}

function focus () {
  rootEl.value?.focus()
}

onMounted(() => {
  refresh()
  window.addEventListener('resize', refresh)

  if (typeof ResizeObserver !== 'undefined' && scrollableEl.value) {
    resizeObserver = new ResizeObserver(() => refresh())
    resizeObserver.observe(scrollableEl.value)
  }

  nextTick(() => {
    requestAnimationFrame(() => {
      applyScrollPositionFromProps()
      syncThumbFromScrollPosition()
    })
  })
})

watch(() => [props.horizontal, props.width, props.height], () => refresh())

watch(
  () => props.scrollPosition,
  () => {
    if (props.scrollPosition == null) return
    nextTick(() => {
      applyScrollPositionFromProps()
      syncThumbFromScrollPosition()
    })
  },
  { deep: true }
)

watch(isHorizontal, () => {
  if (props.scrollPosition == null) return
  nextTick(() => {
    applyScrollPositionFromProps()
    syncThumbFromScrollPosition()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', refresh)
  stopDrag()
  if (scrollEndTimeout) window.clearTimeout(scrollEndTimeout)
  if (activeScrollTimeout) window.clearTimeout(activeScrollTimeout)
  if (resizeObserver && scrollableEl.value) resizeObserver.unobserve(scrollableEl.value)
  resizeObserver = null
})

defineExpose({
  scroll,
  scrollTo,
  scrollBy,
  scrollToStart,
  scrollToEnd,
  focus,
  refresh
})
</script>

<style lang="scss">
.w-scrollable {
  display: flex;
  border-radius: inherit;
  outline: none;

  &:focus-visible .w-scrollable__scrollbar-thumb {
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--w-primary) 35%, transparent);
  }

  &__content {
    padding: 0;
    flex: 1 1 auto;
    min-width: 0;
    min-height: 0;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
  }

  &__scrollbar {
    position: relative;
    flex: 0 0 auto;
    background: color-mix(in srgb, var(--w-contrast-bg-color) 8%, var(--w-base-bg-color));
    user-select: none;
    cursor: pointer;
    touch-action: none;
    opacity: 1;
    transition: opacity $fast-transition-duration ease;

    &--horizontal {
      width: 100%;
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
      height: $scrollbar-size;
    }
    &--vertical {
      inset: 0 0 0 auto;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
      width: $scrollbar-size;
    }

    &--hidden {
      opacity: 0;
      pointer-events: none;
    }
  }

  &__scrollbar-thumb {
    position: absolute;
    color: color-mix(in srgb, var(--w-contrast-bg-color) 8%, var(--w-base-bg-color));
    background: currentColor;

    border-radius: $border-radius;
    z-index: 1;
    transition: box-shadow 0.15s ease;
    cursor: grab;
    touch-action: none;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--w-base-bg-color);
      border-radius: inherit;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.15s ease;
    }
  }
  &--dragging &__scrollbar-thumb:before,
  &__scrollbar-thumb:hover:before {opacity: 0.2;}

  &--horizontal &__scrollbar-thumb {
    height: 6px;
    left: 0;
    right: 0;
    margin-top: 1px;
    margin-bottom: 1px;
  }
  &--vertical &__scrollbar-thumb {
    width: 6px;
    top: 0;
    bottom: 0;
    margin-left: 1px;
    margin-right: 1px;
  }

  &--disabled {
    pointer-events: none;
    opacity: 0.65;
  }

  &--horizontal {flex-direction: column;}

  &--dragging {
    cursor: grabbing;
    user-select: none;

    .w-scrollable__content,
    .w-scrollable__scrollbar,
    .w-scrollable__scrollbar-thumb {
      cursor: grabbing;
    }
  }
}
</style>
