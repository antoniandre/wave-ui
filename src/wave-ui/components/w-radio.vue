<template lang="pug">
  component.w-radio(:is="hasLabel ? 'label' : 'span'" :class="classes")
    input(
      type="radio"
      :name="name"
      :class="{ 'mr-2': hasLabel }"
      :checked="isChecked"
      @change="isChecked = !isChecked")
    template(v-if="hasLabel")
      slot {{ label }}
</template>

<script>
export default {
  name: 'w-radio',
  props: {
    value: { type: Boolean, default: false }, // v-model to check or uncheck.
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    color: { type: String, default: null }
  },

  computed: {
    hasLabel () {
      return (this.$slots.default && this.$slots.default.length) || this.label
    },
    isChecked: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    classes () {
      return {
        [this.color]: this.color
      }
    }
  }
}
</script>

<style lang="scss">
.w-radio {
}
</style>
