<template lang="pug">
  w-overlay.w-dialog(
    v-if="showWrapper"
    :value="showWrapper"
    :persistent="persistent"
    :persistent-no-animation="persistentNoAnimation"
    @click="onOutsideClick"
    :bg-color="overlayColor"
    :opacity="overlayOpacity"
    :class="classes")
    transition(:name="transition" appear @after-leave="onClose")
      w-card.w-dialog__content(v-if="showContent" no-border :style="contentStyles")
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
    maxWidth: { type: Number, default: 0 },
    fullscreen: { type: Boolean, default: false },
    persistent: { type: Boolean, default: false },
    persistentNoAnimation: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
    transition: { type: String, default: 'fade' },
    overlayColor: { type: [String, Boolean], default: false },
    overlayOpacity: { type: [Number, String, Boolean], default: false }
  },

  data () {
    return {
      showWrapper: this.value,
      showContent: this.value,
      persistentAnimate: false
    }
  },

  computed: {
    classes () {
      return {
        'w-dialog--fullscreen': this.fullscreen,
        'w-dialog--persistent': this.persistent,
        'w-dialog--no-animation': this.persistentNoAnimation,
        'w-dialog--persistent-animate': this.persistentAnimate
      }
    },
    contentStyles () {
      return {
        maxWidth: !this.fullscreen && this.maxWidth ? `${this.maxWidth}px` : null
      }
    }
  },

  methods: {
    onOutsideClick () {
      if (!this.persistent) {
        this.showContent = false
        // If fade transition close both dialog and overlay at the same time
        // (don't need to wait for the end of the dialog transition).
        if (this.transition === 'fade') this.onClose()
      }
    },
    onClose () {
      this.showWrapper = false
      this.$emit('input', false)
      this.$emit('close', false)
    }
  },

  watch: {
    value (value) {
      // If value is true, mount the wrapper in DOM and open the drawer.
      // If value is false, keep the wrapper in DOM and close the drawer;
      // At the end of the drawer transition the value is updated and wrapper
      // removed from the DOM.
      if (value) this.showWrapper = value
      this.showContent = value
    }
  }
}
</script>

<style lang="scss">
.w-dialog {
  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 95%;
    overflow: auto;
    background-color: #fff;

    .w-dialog--fullscreen & {
      flex: 1 1 auto;
      height: 100%;
      max-width: none;
    }
  }
}
</style>
