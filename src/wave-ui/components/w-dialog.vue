<template lang="pug">
  w-overlay.w-dialog(
    v-if="value"
    :value="value"
    @input="$emit('input', $event)"
    :class="classes"
    :style="styles")
    w-card.w-dialog__content(no-border :class="{ 'grow fill-height': fullscreen }")
      template(v-slot:title)
        slot(name="title")
      slot
      template(v-slot:actions)
        slot(name="actions")
</template>

<script>
export default {
  name: 'w-dialog',
  props: {
    value: { type: Boolean, default: false },
    fullscreen: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
  },

  computed: {
    classes () {
      return {
        'w-dialog--fullscreen': this.fullscreen,
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">
.w-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;

  &__content {
    background-color: #fff;
  }
}
</style>
