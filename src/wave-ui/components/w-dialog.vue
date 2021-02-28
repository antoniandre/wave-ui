<template lang="pug">
w-overlay.w-dialog(
  :model-value="showWrapper"
  :persistent="persistent"
  :persistent-no-animation="persistentNoAnimation"
  @click="onOutsideClick"
  :bg-color="overlayColor"
  :opacity="overlayOpacity"
  :class="classes")
  transition(:name="transition" appear @after-leave="onClose")
    w-card.w-dialog__content(
      v-if="showContent"
      no-border
      :color="color"
      :bg-color="bgColor"
      :class="dialogClass"
      :title-class="titleClass"
      :content-class="contentClass"
      :title="title || undefined"
      :style="contentStyles")
      template(v-if="$slots.title" v-slot:title)
        slot(name="title")
      slot
      template(v-if="$slots.actions" v-slot:actions)
        slot(name="actions")
</template>

<script>
export default {
  name: 'w-dialog',

  props: {
    modelValue: { default: true },
    width: { type: [Number, String], default: 0 },
    fullscreen: { type: Boolean },
    persistent: { type: Boolean },
    persistentNoAnimation: { type: Boolean },
    tile: { type: Boolean },
    title: { type: String },
    transition: { type: String, default: 'fade' }, // @todo: validator.
    titleClass: { type: String },
    contentClass: { type: String },
    dialogClass: { type: String },
    overlayColor: { type: String },
    color: { type: String },
    bgColor: { type: String },
    overlayOpacity: { type: [Number, String, Boolean] }
  },

  emits: ['input', 'update:modelValue', 'close'],

  data () {
    return {
      showWrapper: this.modelValue,
      showContent: this.modelValue
    }
  },

  computed: {
    maxWidth () {
      let width = this.width
      if (width && parseInt(width) == width) width += 'px'
      return width
    },
    classes () {
      return {
        'w-dialog--fullscreen': this.fullscreen
      }
    },
    contentStyles () {
      return {
        maxWidth: !this.fullscreen && this.maxWidth ? this.maxWidth : null
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
      this.$emit('update:modelValue', false)
      this.$emit('input', false)
      this.$emit('close', false)
    }
  },

  watch: {
    modelValue (value) {
      // If value is true, mount the wrapper in DOM and open the dialog.
      // If value is false, keep the wrapper in DOM and close the dialog;
      // At the end of the dialog transition the value is updated and wrapper removed from the DOM.
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
