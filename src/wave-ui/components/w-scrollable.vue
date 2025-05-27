<template lang="pug">
.w-scrollable(
  @mouseenter="onMouseEnter"
  @mouseleave="onMouseLeave"
  @mousewheel="onMouseWheel"
  :class="scrollableClasses"
  v-bind="$attrs"
  :style="scrollableStyles")
  .w-scrollable__content(ref="scrollableEl")
    slot
  .w-scrollable__scrollbar(ref="trackEl" @mousedown="onTrackMouseDown" :class="scrollbarClasses")
    .w-scrollable__scrollbar-thumb(ref="thumbEl" :style="thumbStyles")
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

defineOptions({ name: 'WScrollable' })

const props = defineProps({
  color: { type: String, default: 'primary' },
  bgColor: { type: String },
  width: { type: [Number, String] },
  height: { type: [Number, String] }
})

const emit = defineEmits([])

const domProps = {
  h: {
    direction: 'horizontal',
    topOrLeft: 'left',
    size: 'width',
    offsetSize: 'offsetWidth',
    maxSize: 'max-width',
    scrollSize: 'scrollWidth',
    clientXorY: 'clientX',
    deltaXorY: 'deltaX',
    scrollTopOrLeft: 'scrollLeft'
  },
  v: {
    direction: 'vertical',
    topOrLeft: 'top',
    size: 'height',
    offsetSize: 'offsetHeight',
    maxSize: 'max-height',
    scrollSize: 'scrollHeight',
    clientXorY: 'clientY',
    deltaXorY: 'deltaY',
    scrollTopOrLeft: 'scrollTop'
  }
}

// Refs used in template and functions.
const mounted = ref(false)
const scrollableEl = ref(null)
const trackEl = ref(null)
const thumbEl = ref(null)
const scrollableState = ref({
  top: null,
  left: null,
  hovered: false
})
const scrollValuePercent = ref(0)
const dragging = ref(false)

const isHorizontal = computed(() => {
  if (!mounted.value) return false
  console.log('💂‍♂️', scrollableEl.value?.scrollWidth, scrollableEl.value?.offsetWidth)
  return (props.width && !props.height) || (scrollableEl.value?.scrollWidth > scrollableEl.value?.offsetWidth)
})

const m = computed(() => domProps[isHorizontal.value ? 'h' : 'v'])

const scrollableClasses = computed(() => ({
  [`w-scrollable--${m.value.direction}`]: true
}))

const scrollbarClasses = computed(() => ({
  [`w-scrollable__scrollbar--${m.value.direction}`]: true
}))

const refreshThumb = ref(0)

const thumbSizePercent = computed(() => {
  refreshThumb.value // Dependency to force re-evaluation.
  if (!mounted.value) return 0
  const size = props[m.value.size] ?? scrollableEl.value?.[m.value.offsetSize]
  return (size * 100 / scrollableEl.value?.[m.value.scrollSize]) || 0
})

function forceRefreshThumb () {
  refreshThumb.value++
}

const scrollableStyles = computed(() => ({
  [m.value.maxSize]: props[m.value.size] ? `${props[m.value.size]}px` : undefined
}))

const thumbStyles = computed(() => {
  let topOrLeftValue = scrollValuePercent.value
  topOrLeftValue = Math.max(0, Math.min(topOrLeftValue, 100 - thumbSizePercent.value))
  return {
    [m.value.size]: `${thumbSizePercent.value}%`,
    [m.value.topOrLeft]: `${topOrLeftValue}%`
  }
})

function onTrackMouseDown (e) {
  if (props.isDisabled || props.isReadonly) return
  // On touch screen don't listen for both touchstart & mousedown.
  if ('ontouchstart' in window && e.type === 'mousedown') return

  const { top, left, width, height } = trackEl.value.getBoundingClientRect()
  if (isHorizontal.value) {
    trackEl.value.width = width
    trackEl.value.left = left
  }
  else {
    trackEl.value.height = height
    trackEl.value.top = top
  }
  dragging.value = true

  computeScroll(e.type === 'touchstart' ? e.touches[0][m.value.clientXorY] : e[m.value.clientXorY])
  scroll()

  document.addEventListener(e.type === 'touchstart' ? 'touchmove' : 'mousemove', onDrag)
  document.addEventListener(e.type === 'touchstart' ? 'touchend' : 'mouseup', onMouseUp, { once: true })
}

function onDrag (e) {
  computeScroll((e.type === 'touchmove' ? e.touches[0][m.value.clientXorY] : e[m.value.clientXorY]))
  scroll()
}

function onMouseUp (e) {
  dragging.value = false
  document.removeEventListener(e.type === 'touchend' ? 'touchmove' : 'mousemove', onDrag)
  if (thumbEl.value) thumbEl.value.focus()
}

function onMouseEnter () {
  scrollableState.value.hovered = true
}

function onMouseLeave () {
  scrollableState.value.hovered = false
}

function onMouseWheel (e) {
  if (!scrollableState.value.hovered) return // Only scroll a w-scrollable element that is being hovered.

  // When scrolling beyond limits, release the mousewheel and scroll the parent.
  if (scrollValuePercent.value <= 0 && e[m.value.deltaXorY] < 0) return
  if (scrollValuePercent.value >= 100 - thumbSizePercent.value && e[m.value.deltaXorY] > 0) return

  e.preventDefault() // Hold the scroll in the hovered w-scrollable element.

  scrollValuePercent.value += e[m.value.deltaXorY] * 0.05
  scrollValuePercent.value = Math.max(0, Math.min(scrollValuePercent.value, 100))
  scroll()
}

function computeScroll (cursorPositionXorY) {
  const { top, left, width, height } = scrollableEl.value.getBoundingClientRect()
  const topOrLeft = isHorizontal.value ? left : top
  const size = isHorizontal.value ? width : height
  scrollValuePercent.value = Math.max(0, Math.min(((cursorPositionXorY - topOrLeft) / size) * 100, 100))
}

function scroll () {
  scrollableEl.value[m.value.scrollTopOrLeft] = scrollValuePercent.value * scrollableEl.value?.[m.value.scrollSize] / 100
  updateThumbPosition()
}

function updateThumbPosition () {
  thumbEl.value.style[m.value.topOrLeft] = scrollValuePercent.value
}

onMounted(() => {
  mounted.value = true
  const { top, left } = scrollableEl.value.getBoundingClientRect()
  scrollableState.value.top = top
  scrollableState.value.left = left

  window.addEventListener('resize', forceRefreshThumb)
})

// Clean up event listener.
onBeforeUnmount(() => {
  window.removeEventListener('resize', forceRefreshThumb)
})

defineExpose({ scroll })
</script>

<style lang="scss">
.w-scrollable {
  display: flex;
  border-radius: inherit;

  &__content {
    padding: 0;
    flex: 1 1 auto;
    overflow: hidden;
  }

  &__scrollbar {
    position: relative;
    flex: 0 0 auto;
    background: $scrollbar-bg-color;
    user-select: none;

    &--horizontal {
      inset: auto 0 0;
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
  }

  &__scrollbar-thumb {
    position: absolute;
    background: $scrollbar-thumb-color;
    border-radius: $border-radius;
    z-index: 1;
    will-change: top left;

    &:hover {background: $scrollbar-thumb-color;}
  }
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
}
</style>
