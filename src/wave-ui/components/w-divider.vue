<template lang="pug">
  .w-divider(:class="classes")
</template>

<script>
export default {
  name: 'w-divider',
  props: {
    vertical: { type: Boolean },
    color: { type: String, default: null }
  },

  computed: {
    classes () {
      return {
        [this.color]: this.color,
        'w-divider--vertical': this.vertical
      }
    }
  }
}
</script>

<style lang="scss">
.w-divider {
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-top-width: 1px;

  &--vertical {
    display: flex;
    border-top-width: 0;
    border-left-width: 1px;
    align-self: stretch;
  }
}
</style>
