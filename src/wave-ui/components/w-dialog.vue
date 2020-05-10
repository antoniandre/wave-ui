<template lang="pug">
  w-overlay.w-dialog(
    v-if="value"
    :value="value"
    @input="onOutsideClick"
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
    persistent: { type: Boolean, default: false },
    persistentNoAnimation: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
  },

  data: () => ({
    persistentAnimate: false
  }),

  computed: {
    classes () {
      return {
        'w-dialog--fullscreen': this.fullscreen,
        'w-dialog--persistent': this.persistent,
        'w-dialog--no-animation': this.persistentNoAnimation,
        'w-dialog--persistent-animate': this.persistentAnimate
      }
    },
    styles () {
      return false
    }
  },

  methods: {
    onOutsideClick (value) {
      if (!this.persistent) this.$emit('input', value)
      if (this.persistent && !this.persistentNoAnimation) {
        this.persistentAnimate = true
        setTimeout(() => (this.persistentAnimate = false), 100)
      }
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

  &--persistent &__content {
    transition: 0.1s transform cubic-bezier(0.6, -0.28, 0.74, 0.05);
  }
  &--persistent-animate &__content {transform: scale(1.075);}

  &__content {
    background-color: #fff;
  }
}
</style>
