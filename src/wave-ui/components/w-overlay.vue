<template lang="pug">
  transition(name="fade" mode="out-in" appear)
    .w-overlay(
      v-if="value"
      :style="(value && styles) || false"
      @keydown.escape.stop="onClick"
      @click="onClick"
      v-focus
      tabindex="0"
      :class="classes")
      .w-overlay__content(v-if="persistent")
        slot
      slot(v-else)
</template>

<script>
export default {
  name: 'w-overlay',
  props: {
    value: { type: Boolean, default: false },
    opacity: { type: [Number, String, Boolean], default: false },
    bgColor: { type: [String, Boolean], default: false },
    zIndex: { type: [Number, String, Boolean], default: false },
    persistent: { type: Boolean, default: false },
    persistentNoAnimation: { type: Boolean, default: false }
  },

  data: () => ({
    persistentAnimate: false
  }),

  computed: {
    backgroundColor () {
      return this.bgColor || (this.opacity && `rgba(0, 0, 0, ${this.opacity})`) || false
    },
    classes () {
      return {
        'w-overlay--persistent': this.persistent,
        'w-overlay--no-animation': this.persistentNoAnimation,
        'w-overlay--persistent-animate': this.persistentAnimate
      }
    },
    styles () {
      return {
        backgroundColor: this.backgroundColor,
        zIndex: this.zIndex || this.zIndex === 0 ? this.zIndex : false
      }
    }
  },

  methods: {
    onClick () {
      // Quickly add the animation class and remove it.
      if (this.persistent && !this.persistentNoAnimation) {
        this.persistentAnimate = true
        setTimeout(() => (this.persistentAnimate = false), 120)
      }
      else if (!this.persistent) this.$emit('input', false)

      this.$emit('click')
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

  &--persistent-animate .w-overlay__content {animation: 0.12s w-overlay-pop cubic-bezier(0.6, -0.28, 0.74, 0.05);}
}

@keyframes w-overlay-pop {
  0%, 100% {transform: scale(1);}
  50% {transform: scale(1.06);}
}
</style>
