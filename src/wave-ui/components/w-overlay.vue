<template lang="pug">
transition(name="fade" appear @after-leave="onClosed")
  .w-overlay(
    v-if="showOverlay"
    v-show="modelValue"
    ref="overlay"
    :style="(modelValue && styles) || null"
    @keydown.escape.stop="onClick"
    @click="onClick"
    v-focus
    tabindex="0"
    :class="classes")
    slot
</template>

<script>
export default {
  name: 'w-overlay',

  props: {
    modelValue: {},
    opacity: { type: [Number, String, Boolean] },
    bgColor: { type: String },
    zIndex: { type: [Number, String, Boolean] },
    persistent: { type: Boolean },
    persistentNoAnimation: { type: Boolean }
  },

  provide () {
    return {
      // If a detachable is used inside a w-overlay without an appendTo, default to the overlay element
      // instead of the w-app.
      detachableDefaultRoot: () => this.$refs.overlay || null
    }
  },

  emits: ['input', 'update:modelValue', 'click', 'close', 'closed'],

  data: () => ({
    persistentAnimate: false,
    showOverlay: false
  }),

  computed: {
    backgroundColor () {
      return this.bgColor || (this.opacity && `rgba(0, 0, 0, ${this.opacity})`) || false
    },
    classes () {
      return {
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
    onClick (e) {
      // Don't react to a click inside the content (event bubbling).
      if (!e.target.classList.contains('w-overlay')) return

      // Quickly add the animation class and remove it.
      if (this.persistent && !this.persistentNoAnimation) {
        this.persistentAnimate = true
        setTimeout(() => (this.persistentAnimate = false), 150) // Must match CSS animation duration.
      }
      else if (!this.persistent) {
        this.$emit('update:modelValue', false)
        this.$emit('input', false)
        this.$emit('close')
      }

      this.$emit('click', e)
    },

    // Wait until the end of the closing transition (v-show) to completely unmount (v-if).
    onClosed () {
      // The onClosed method is called twice from the transition: once for the v-show, and once for the v-if.
      // only emit once everything is closed.
      if (!this.showOverlay) this.$emit('closed')
      this.showOverlay = false
    }
  },

  created () {
    this.showOverlay = this.modelValue
  },

  watch: {
    modelValue (bool) {
      if (bool) this.showOverlay = true
    }
  }
}
</script>

<style lang="scss">
.w-overlay {
  z-index: 500;
  position: fixed;
  // -10px for the `persistent-animate` ease out back animation.
  top: -10px;
  left: -10px;
  bottom: -10px;
  right: -10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);

  &--persistent-animate {animation: 0.15s w-overlay-pop cubic-bezier(0.6, -0.28, 0.74, 0.05);}
  &--no-pointer-event {pointer-events: none;}
}

@keyframes w-overlay-pop {
  0%, 100% {transform: scale(1);}
  50% {transform: scale(1.04);}
}
</style>
