<template lang="pug">
  .w-overlay(
    @click="$event.target.classList.contains('w-overlay') && $emit('input', false)"
    :class="{ 'w-overlay--show': value }"
    :style="(value && styles) || false")
    slot()
</template>

<script>
export default {
  name: 'w-overlay',
  props: {
    value: { type: Boolean, default: false },
    opacity: { type: Number, default: null },
    zIndex: { type: Number, default: null }
  },

  computed: {
    styles () {
      return {
        backgroundColor: this.opacity ? `rgba(0, 0, 0, ${this.opacity})` : false,
        zIndex: this.zIndex || false
      }
    }
  }
}
</script>

<style lang="scss">
.w-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  z-index: 499;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s, width 0s 0.3s;

  &--show {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s;
  }
}
</style>
