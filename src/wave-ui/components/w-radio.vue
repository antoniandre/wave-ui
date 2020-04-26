<template lang="pug">
  component.w-radio(:is="label ? 'label' : 'span'" :class="classes")
    input(
      type="radio"
      :name="name"
      :class="{'mr-2': label }"
      :checked="isChecked")
    template(v-if="label") {{ label }}
</template>

<script>
export default {
  name: 'w-radio',
  props: {
    value: { type: Boolean, default: false }, // v-model to check or uncheck.
    name: { type: String, default: '' },
    label: { type: String, default: '' },
    checked: { type: Boolean, default: false },
    color: { type: String, default: null }
  },

  computed: {
    isChecked: {
      get () {
        return this.checked
      },
      set (value) {
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
