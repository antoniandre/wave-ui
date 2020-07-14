<template lang="pug">
  .w-menu(:class="classes" :style="styles")
    slot(name="activator")
    .w_menu__content
      slot
</template>

<script>
export default {
  name: 'w-menu',
  props: {
    value: { default: true }, // Show or hide.
    color: { type: [String, Boolean] },
    bgColor: { type: [String, Boolean] },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    round: { type: Boolean },
    // Position.
    fixed: { type: Boolean },
    absolute: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] }
  },

  computed: {
    classes () {
      return {
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.color]: this.color,
        'w-menu__content--tile': this.tile,
        'w-menu__content--round': this.round,
        'w-menu__content--shadow': this.shadow,
        'w-menu__content--fixed': this.fixed,
        'w-menu__content--absolute': !this.fixed && this.absolute,
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">
.w-menu {
  position: relative;

}

.w-menu__content {
  padding: $base-increment;
  &--fixed {position: fixed;}
  &--absolute {position: absolute;}
}
</style>
