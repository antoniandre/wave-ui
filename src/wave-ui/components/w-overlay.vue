<template lang="pug">
transition(name="fade" appear @after-leave="onClose")
  .w-overlay(
    v-if="modelValue"
    v-show="showOverlay"
    ref="overlay"
    :style="(modelValue && styles) || null"
    @click="onClick"
    tabindex="0"
    :class="classes")
    slot
</template>

<script>
import { focusElement } from '../utils/focus'

export default {
  name: 'w-overlay',
  expose: ['focus'],

  props: {
    modelValue: {},
    opacity: { type: [Number, String, Boolean] },
    bgColor: { type: String },
    absolute: { type: Boolean },
    zIndex: { type: [Number, String, Boolean] },
    persistent: { type: Boolean },
    persistentNoAnimation: { type: Boolean }
  },

  emits: ['input', 'update:modelValue', 'click', 'before-close', 'close'],

  provide () {
    return {
      // If a detachable is used inside a w-overlay without an appendTo, default to the overlay element
      // instead of the w-app.
      detachableDefaultRoot: () => this.$refs.overlay || null
    }
  },

  data: () => ({
    persistentAnimate: false,
    showOverlay: false,
    documentEscapeBound: false
  }),

  computed: {
    backgroundColor () {
      return this.bgColor || (this.opacity && `rgba(0, 0, 0, ${this.opacity})`) || false
    },
    classes () {
      return {
        'w-overlay--persistent-animate': this.persistentAnimate,
        'w-overlay--absolute': this.absolute
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
    focus () {
      focusElement(this.$refs.overlay)
    },

    bindDocumentEscape () {
      if (this.documentEscapeBound) return
      document.addEventListener('keydown', this.onDocumentEscape)
      this.documentEscapeBound = true
    },

    unbindDocumentEscape () {
      if (!this.documentEscapeBound) return
      document.removeEventListener('keydown', this.onDocumentEscape)
      this.documentEscapeBound = false
    },

    onDocumentEscape (e) {
      if (e.key !== 'Escape') return
      if (!this.showOverlay || !this.modelValue) return
      this.dismiss(e)
    },

    dismiss (e) {
      if (this.persistent && !this.persistentNoAnimation) {
        this.persistentAnimate = true
        setTimeout(() => (this.persistentAnimate = false), 150) // Must match CSS animation duration.
      }
      else if (!this.persistent) {
        this.showOverlay = false
        this.$emit('before-close')
      }

      this.$emit('click', e)
    },

    onClick (e) {
      // Don't react to a click inside the content (event bubbling).
      if (!e.target.classList.contains('w-overlay')) return
      this.dismiss(e)
    },

    // Wait until the end of the closing transition (v-show) to completely unmount (v-if).
    // The onClose method is called twice from the transition: once for the v-show, and once for the v-if.
    onClose () {
      this.unbindDocumentEscape()
      this.$emit('update:modelValue', false)
      this.$emit('input', false)
      if (!this.modelValue) this.$emit('close') // Only emit once.
    }
  },

  created () {
    this.showOverlay = this.modelValue
    if (this.modelValue) this.bindDocumentEscape()
  },

  unmounted () {
    this.unbindDocumentEscape()
  },

  watch: {
    modelValue (bool) {
      if (bool) {
        this.showOverlay = true
        this.bindDocumentEscape()
      }
      else this.unbindDocumentEscape()
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

  &--absolute {position: absolute;}
  &--persistent-animate {animation: 0.15s w-overlay-pop cubic-bezier(0.6, -0.28, 0.74, 0.05);}
  &--no-pointer-event {pointer-events: none;}
}

@keyframes w-overlay-pop {
  0%, 100% {transform: scale(1);}
  50% {transform: scale(1.04);}
}
</style>
