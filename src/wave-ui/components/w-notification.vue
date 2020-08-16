<template lang="pug">
  transition(:name="transitionName" appear)
    .w-notification(v-if="show" :class="classes" :style="styles")
      w-alert(v-bind="alertProps")
        slot
</template>

<script>
export default {
  name: 'w-notification',
  props: {
    // Notification props.
    value: { default: true }, // Show or hide.
    transition: { type: [String, Boolean], default: '' },
    timeout: { type: [Number, String], default: 0 },
    absolute: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] },
    // Alert props.
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    error: { type: Boolean },
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    plain: { type: Boolean },
    noBorder: { type: Boolean },
    borderLeft: { type: Boolean },
    borderRight: { type: Boolean },
    borderTop: { type: Boolean },
    borderBottom: { type: Boolean },
    outline: { type: Boolean }
  },

  data () {
    return {
      show: this.value,
      timeoutId: null
    }
  },

  computed: {
    transitionName () {
      if (this.transition === false) return ''
      if (!this.transition) {
        const opposites = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }
        return `slide-${opposites[this.position[this.position[1] === 'center' ? 0 : 1]]}`
      }

      return this.transition
    },

    position () {
      let position = []
      if (!this.top && !this.bottom && !this.left && !this.right) position = ['top', 'right']
      else position = [
        (this.top && 'top') || (this.bottom && 'bottom') || 'top',
        (this.left && 'left') || (this.right && 'right') || 'center'
      ]
      return position
    },

    alertProps () {
      return {
        xs: this.xs,
        sm: this.sm,
        md: this.md,
        lg: this.lg,
        xl: this.xl,
        success: this.success,
        info: this.info,
        warning: this.warning,
        error: this.error,
        color: this.color,
        bgColor: this.bgColor,
        shadow: this.shadow,
        tile: this.tile,
        round: this.round,
        plain: this.plain,
        noBorder: this.noBorder,
        borderLeft: this.borderLeft,
        borderRight: this.borderRight,
        borderTop: this.borderTop,
        borderBottom: this.borderBottom,
        outline: this.outline
      }
    },

    classes () {
      return {
        'w-notification--absolute': this.absolute,
        [`w-notification--${this.position.join(' w-notification--')}`]: true
      }
    },

    styles () {
      return {
        zIndex: this.zIndex || this.zIndex === 0 || null
      }
    },

    timeoutVal () {
      return parseInt(this.timeout)
    }
  },

  watch: {
    value (value) {
      clearTimeout(this.timeoutId)
      this.show = value

      if (value && this.timeoutVal) {
        this.timeoutId = setTimeout(() => this.$emit('input', this.show = false), this.timeoutVal)
      }
    }
  }
}
</script>

<style lang="scss">
.w-notification {
  display: flex;
  justify-content: center;
  left: 2 * $base-increment;
  right: 2 * $base-increment;
  position: fixed;
  z-index: 300;
  pointer-events: none;

  // Position.
  &--absolute {position: absolute;z-index: 400;}
  &--top {top: 0;padding-top: 2 * $base-increment;}
  &--bottom {bottom: 0;padding-bottom: 2 * $base-increment;}
  &--left {justify-content: flex-start;right: auto;}
  &--right {justify-content: flex-end;left: auto;}

  .w-alert {
    margin: 0;
    background-color: #fff;
    pointer-events: all;
  }
}
</style>
