<template lang="pug">
  transition(name="fade" mode="out-in" appear)
    .w-overlay(
      v-if="value"
      :style="(value && styles) || false"
      @click="closeOnClick && $event.target.classList.contains('w-overlay') && $emit('input', false)")
      slot
</template>

<script>
export default {
  name: 'w-overlay',
  props: {
    value: { type: Boolean, default: false },
    opacity: { type: [Number, String, Boolean], default: false },
    color: { type: [String, Boolean], default: false },
    zIndex: { type: [Number, String, Boolean], default: false },
    closeOnClick: { type: Boolean, default: true }
  },

  computed: {
    backgroundColor () {
      return this.color || (this.opacity && `rgba(0, 0, 0, ${this.opacity})`) || false
    },
    styles () {
      return {
        backgroundColor: this.backgroundColor,
        zIndex: this.zIndex || this.zIndex === 0 || false
      }
    }
  }
}
</script>

<style lang="scss">
.w-overlay {
  z-index: 500;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
