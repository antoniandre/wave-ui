<template lang="pug">
  .w-alert(:class="classes" :style="styles")
    w-icon.mr-1(v-if="type") ion-{{ icon }}
    slot
</template>

<script>
export default {
  name: 'w-alert',
  props: {
    type: { type: [String, Boolean], default: false },
    color: { type: [String, Boolean], default: false },
    shadow: { type: Boolean, default: false },
    noBorder: { type: Boolean, default: false },
    borderLeft: { type: [String, Boolean], default: false },
    borderRight: { type: [String, Boolean], default: false },
    borderTop: { type: [String, Boolean], default: false },
    borderBottom: { type: [String, Boolean], default: false },
    tile: { type: Boolean, default: false },
    light: { type: Boolean, default: false }
  },

  computed: {
    icon () {
      return (
        (this.type === 'success' && 'md-checkmark-circle') ||
        (this.type === 'warning' && 'md-alert') ||
        (this.type === 'error' && 'md-close-circle') ||
        (this.type === 'info' && 'md-information-circle')
      )
    },
    hasBorder () {
      return this.borderLeft || this.borderRight ||
        this.borderTop || this.borderBottom
    },
    classes () {
      return {
        [this.type]: this.type && !this.light,
        [`${(this.light && this.type) || this.color}--text`]: (this.type && this.light) || this.color,
        [`w-alert--type w-alert--${this.type}`]: this.type && !this.light,
        'w-alert--no-border': this.noBorder || this.hasBorder,
        'w-alert--border-left': !this.noBorder && this.borderLeft,
        'w-alert--border-right': !this.noBorder && this.borderRight,
        'w-alert--border-top': !this.noBorder && this.borderTop,
        'w-alert--border-bottom': !this.noBorder && this.borderBottom,
        'w-alert--tile': this.tile,
        'w-alert--light': this.light,
        'w-alert--shadow': this.shadow
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">
.w-alert {
  position: relative;
  display: flex;
  margin-top: 4 * $base-increment;
  margin-bottom: 4 * $base-increment;
  padding: 2 * $base-increment;
  font-size: round(1.1 * $base-font-size);
  font-weight: 700;
  border-radius: $border-radius;
  border: 1px solid currentColor;

  &--tile {border-radius: 0;}
  &--shadow {box-shadow: $box-shadow;}
  &--no-border, &--shadow, &--type {border: none;}

  &--border-left {border-left: 2px solid currentColor;}
  &--border-right {border-right: 2px solid currentColor;}
  &--border-top {border-top: 2px solid currentColor;}
  &--border-bottom {border-bottom: 2px solid currentColor;}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0.15;
  }
  &--type:before {opacity: 0.1;}

  &--type .w-icon {color: rgba(255, 255, 255, 0.9);}
}
</style>
