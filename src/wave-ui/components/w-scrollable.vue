<template lang="pug">
.w-scrollable(ref="scrollable")
  slot
.w-scrollbar(ref="track" @mousedown="onTrackMouseDown")
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
      left: null
    },
    scrollValuePercent: 0
  }),

  computed: {
    isHorizontal () {
      return this.width && !this.height
    },

    thumbSizePercent () {
      if (!this.mounted) return 0
      const widthOrHeight = this.isHorizontal ? 'width' : 'height'
      const scrollWidthOrHeight = this.isHorizontal ? 'scrollWidth' : 'scrollHeight'
      return this[widthOrHeight] * 100 / this.$refs.scrollable?.[scrollWidthOrHeight]
    },

    thumbStyles () {
      const widthOrHeight = this.isHorizontal ? 'width' : 'height'
      return {
        [widthOrHeight]: `${this.thumbSizePercent || 0}%`
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
      this.scroll(e.type === 'touchstart' ? e.touches[0][xOrY] : e[xOrY])

      document.addEventListener(e.type === 'touchstart' ? 'touchmove' : 'mousemove', this.onDrag)
      document.addEventListener(e.type === 'touchstart' ? 'touchend' : 'mouseup', this.onMouseUp, { once: true })
    },

    onDrag (e) {
      const xOrY = this.isHorizontal ? 'clientX' : 'clientY'
      this.scroll((e.type === 'touchmove' ? e.touches[0][xOrY] : e[xOrY]))
    },

    onMouseUp (e) {
      this.dragging = false
      document.removeEventListener(e.type === 'touchend' ? 'touchmove' : 'mousemove', this.onDrag)
      if (this.$refs.thumb) this.$refs.thumb.focus()
    },

    scroll (cursorPositionXorY) {
      const { top, left, width, height } = this.$refs.scrollable.getBoundingClientRect()
      const topOrLeft = this.isHorizontal ? left : top
      const widthOrHeight = this.isHorizontal ? width : height
      this.scrollValuePercent = Math.max(0, Math.min(((cursorPositionXorY - topOrLeft) / widthOrHeight) * 100, 100))

      const scrollTopOrLeft = this.isHorizontal ? 'scrollLeft' : 'scrollTop'
      const scrollWidthOrHeight = this.isHorizontal ? 'scrollWidth' : 'scrollHeight'
      this.$refs.scrollable[scrollTopOrLeft] = this.scrollValuePercent * this.$refs.scrollable?.[scrollWidthOrHeight] / 100
    },

    refreshScrollbar () {
    }
  },

  mounted () {
    this.mounted = true
    console.log('😗', this.$refs.scrollable)
    const { top, left } = this.$refs.scrollable.getBoundingClientRect()
    this.scrollable.top = top
    this.scrollable.left = left
    this.refreshScrollbar()
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
  top: 0;
  bottom: 0;
  right: 0;
  width: 8px;
  background: #000;
  user-select: none;

  &__thumb {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1px;
    width: 6px;
    background: #333;
    z-index: 1;
  }
}
</style>
