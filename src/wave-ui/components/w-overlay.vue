<template lang="pug">
  transition(name="fade" mode="out-in" appear)
    .w-overlay(
      v-if="value"
      :style="(value && styles) || false"
      @keydown.escape.stop="onClose"
      @click="onClose"
      v-focus
      tabindex="0")
      slot
</template>

<script>
export default {
  name: 'w-overlay',
  props: {
    value: { type: Boolean, default: false },
    opacity: { type: [Number, String, Boolean], default: false },
    bgColor: { type: [String, Boolean], default: false },
    zIndex: { type: [Number, String, Boolean], default: false },
    closeOnClick: { type: Boolean, default: true }
  },

  computed: {
    backgroundColor () {
      return this.bgColor || (this.opacity && `rgba(0, 0, 0, ${this.opacity})`) || false
    },
    styles () {
      return {
        backgroundColor: this.backgroundColor,
        zIndex: this.zIndex || this.zIndex === 0 ? this.zIndex : false
      }
    }
  },

  methods: {
    onClose (e) {
      this.closeOnClick && e.target.classList.contains('w-overlay') && this.$emit('input', false)
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
