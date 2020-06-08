<template lang="pug">
  .w-input(:class="classes" :style="styles")
    input(:id="`input--${_uid}`" :type="type" :name="name" :disabled="disabled")
    label.w-input__label(v-if="$slots.default" :for="`input--${_uid}`")
      slot
    label.w-input__label(v-else-if="label" :for="`input--${_uid}`" v-html="label")
</template>

<script>
export default {
  name: 'w-input',
  props: {
    value: { default: false },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    bgColor: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    dark: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    tile: { type: Boolean, default: false }
  },

  computed: {
    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-text-input--dark': this.dark && !this.outline,
        'w-input--outline': this.outline,
        'w-input--round': this.round,
        'w-input--tile': this.tile,
        'w-input--shadow': this.shadow
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">
.w-input {
}
</style>
