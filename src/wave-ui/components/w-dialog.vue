<template lang="pug">
w-overlay.w-dialog(
  :model-value="showWrapper"
  :persistent="persistent"
  :persistent-no-animation="persistentNoAnimation"
  @click="onOutsideClick"
  @close="onClose"
  :bg-color="overlayColor"
  :opacity="overlayOpacity"
  :class="classes")
  transition(:name="transition" appear @after-leave="onBeforeClose")
    w-card.w-dialog__content(
      v-show="showContent"
      ref="dialog"
      no-border
      :color="color"
      :bg-color="bgColor"
      :class="dialogClass"
      :title-class="titleClass"
      :content-class="contentClass"
      :title="title || undefined"
      :style="contentStyles")
      template(#title v-if="$slots.title")
        slot(name="title")
      slot
      template(#actions v-if="$slots.actions")
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
    overlayOpacity: { type: [Number, String, Boolean] },
    dark: { type: Boolean },
    light: { type: Boolean }
  },

  provide () {
    return {
      // If a detachable is used inside a w-drawer without an appendTo, default to the drawer element
      // instead of the w-app.
      detachableDefaultRoot: () => this.$refs.dialog.$el || null
    }
  },

  emits: ['input', 'update:modelValue', 'before-close', 'close'],

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
        'w-dialog--fullscreen': this.fullscreen,
        'w-dialog--dark': this.dark,
        'w-dialog--light': this.light
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
        if (this.transition === 'fade') this.onBeforeClose()
      }
    },
    onBeforeClose () {
      this.showWrapper = false
      this.$emit('before-close')
    },
    onClose () {
      this.$emit('update:modelValue', false)
      this.$emit('input', false)
      this.$emit('close')
    }
  },

  watch: {
    modelValue (value) {
      this.showWrapper = value
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
    background-color: $dialog-bg-color;

    @include themeable;

    .w-dialog--fullscreen > & {
      flex: 1 1 auto;
      height: 100%;
      max-width: none;
    }
  }
}
</style>
