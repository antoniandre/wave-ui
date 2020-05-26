<template lang="pug">
  .w-divider(:class="classes")
</template>

<script>
export default {
  name: 'w-divider',
  props: {
    vertical: { type: Boolean, default: false },
    color: { type: String, default: null }
  },

  computed: {
    classes () {
      return {
        [this.color]: this.color,
        'w-divider--default': !this.color,
        'w-divider--vertical': this.vertical
      }
    }
  }
}
</script>

<style lang="scss">
.w-divider {
  border: 0 solid currentColor;

  &--default {border-color: rgba(0, 0, 0, 0.15);}

  &--vertical {
    display: flex;
    border-left-width: 1px;
    height: 100%;
  }
  &:not(.w-divider--vertical) {border-top-width: 1px;}
}
</style>
