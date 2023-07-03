<template lang="pug">
.w-scrollable(
  ref="scrollable"
  @mouseenter="onMouseEnter"
  @mouseleave="onMouseLeave"
  @mousewheel="onMouseWheel"
  :class="scrollableClasses")
  slot
.w-scrollbar(ref="track" @mousedown="onTrackMouseDown" :class="scrollbarClasses")
  .w-scrollbar__thumb(ref="thumb" :style="thumbStyles")
</template>

<script>
export default {
  name: 'w-scrollable',
  props: {
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    width: { type: [Number, String] },
    height: { type: [Number, String] }
  },

  emits: [],

  data: () => ({
    mounted: false,
    scrollable: {
      top: null,
      left: null,
      hovered: false
    },
    scrollValuePercent: 0
  }),

  computed: {
    isHorizontal () {
      return this.width && !this.height
    },

    scrollableClasses () {
      return {
        [`w-scrollable--${this.isHorizontal ? 'horizontal' : 'vertical'}`]: true
      }
    },

    scrollbarClasses () {
      return {
        [`w-scrollbar--${this.isHorizontal ? 'horizontal' : 'vertical'}`]: true
      }
    },

    thumbSizePercent () {
      if (!this.mounted) return 0
      const widthOrHeight = this.isHorizontal ? 'width' : 'height'
      const scrollWidthOrHeight = this.isHorizontal ? 'scrollWidth' : 'scrollHeight'
      return (this[widthOrHeight] * 100 / this.$refs.scrollable?.[scrollWidthOrHeight]) || 0
    },

    thumbStyles () {
      const widthOrHeight = this.isHorizontal ? 'width' : 'height'
      const topOrLeft = this.isHorizontal ? 'left' : 'top'
      let topOrLeftValue = this.scrollValuePercent
      topOrLeftValue = Math.max(0, Math.min(topOrLeftValue, 100 - this.thumbSizePercent))
      return {
        [widthOrHeight]: `${this.thumbSizePercent || 0}%`,
        [topOrLeft]: `${topOrLeftValue}%`
      }
    }
  },

  methods: {
    onTrackMouseDown (e) {
      if (this.isDisabled || this.isReadonly) return
      // On touch screen don't listen for both touchstart & mousedown.
      if ('ontouchstart' in window && e.type === 'mousedown') return

      const { top, left, width, height } = this.$refs.track.getBoundingClientRect()
      if (this.isHorizontal) {
        this.$refs.track.width = width
        this.$refs.track.left = left
      }
      else {
        this.$refs.track.height = height
        this.$refs.track.top = top
      }
      this.dragging = true

      const xOrY = this.isHorizontal ? 'clientX' : 'clientY'
      this.computeScroll(e.type === 'touchstart' ? e.touches[0][xOrY] : e[xOrY])
      this.scroll()

      document.addEventListener(e.type === 'touchstart' ? 'touchmove' : 'mousemove', this.onDrag)
      document.addEventListener(e.type === 'touchstart' ? 'touchend' : 'mouseup', this.onMouseUp, { once: true })
    },

    onDrag (e) {
      const xOrY = this.isHorizontal ? 'clientX' : 'clientY'
      this.computeScroll((e.type === 'touchmove' ? e.touches[0][xOrY] : e[xOrY]))
      this.scroll()
    },

    onMouseUp (e) {
      this.dragging = false
      document.removeEventListener(e.type === 'touchend' ? 'touchmove' : 'mousemove', this.onDrag)
      if (this.$refs.thumb) this.$refs.thumb.focus()
    },

    onMouseEnter () {
      this.scrollable.hovered = true
    },

    onMouseLeave () {
      this.scrollable.hovered = false
    },

    onMouseWheel (e) {
      if (!this.scrollable.hovered) return // Only scroll a w-scrollable element that is being hovered.

      const deltaXorY = this.isHorizontal ? 'deltaX' : 'deltaY'

      // When scrolling beyond limits, release the mousewheel and scroll the parent.
      if (this.scrollValuePercent <= 0 && e[deltaXorY] < 0) return
      else if (this.scrollValuePercent >= 100 - this.thumbSizePercent && e[deltaXorY] > 0) return

      e.preventDefault() // Hold the scroll in the hovered w-scrollable element.

      this.scrollValuePercent += e[deltaXorY] * 0.05
      this.scrollValuePercent = Math.max(0, Math.min(this.scrollValuePercent, 100))
      this.scroll()
    },

    computeScroll (cursorPositionXorY) {
      const { top, left, width, height } = this.$refs.scrollable.getBoundingClientRect()
      const topOrLeft = this.isHorizontal ? left : top
      const widthOrHeight = this.isHorizontal ? width : height
      this.scrollValuePercent = Math.max(0, Math.min(((cursorPositionXorY - topOrLeft) / widthOrHeight) * 100, 100))
    },

    scroll () {
      const scrollTopOrLeft = this.isHorizontal ? 'scrollLeft' : 'scrollTop'
      const scrollWidthOrHeight = this.isHorizontal ? 'scrollWidth' : 'scrollHeight'
      this.$refs.scrollable[scrollTopOrLeft] = this.scrollValuePercent * this.$refs.scrollable?.[scrollWidthOrHeight] / 100
      this.updateThumbPosition()
    },

    updateThumbPosition () {
      this.$refs.thumb.style.top = this.scrollValuePercent
    }
  },

  mounted () {
    this.mounted = true
    const { top, left } = this.$refs.scrollable.getBoundingClientRect()
    this.scrollable.top = top
    this.scrollable.left = left
  }
}
</script>

<style lang="scss">
.w-scrollable {
  position: relative;
  overflow: hidden;
  max-height: 200px;
}

.w-scrollbar {
  position: absolute;
  background: #000;
  user-select: none;

  &--horizontal {
    left: 0;
    right: 0;
    bottom: 0;
    height: 8px;
  }
  &--vertical {
    top: 0;
    bottom: 0;
    right: 0;
    width: 8px;
  }

  &__thumb {
    position: absolute;
    background: #333;
    border-radius: $border-radius;
    z-index: 1;
    transition: $fast-transition-duration ease-in-out;

    &:hover {background: #444;}
  }
  &--horizontal &__thumb {
    height: 6px;
    left: 0;
    right: 0;
    margin-top: 1px;
    margin-bottom: 1px;
  }
  &--vertical &__thumb {
    width: 6px;
    top: 0;
    bottom: 0;
    margin-left: 1px;
    margin-right: 1px;
  }
}
</style>
