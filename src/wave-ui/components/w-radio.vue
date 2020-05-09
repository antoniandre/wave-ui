<template lang="pug">
  component.w-radio(:is="label ? 'label' : 'span'" :class="classes")
    input(
      type="radio"
      :name="name"
      :class="{'mr-2': label }"
      :checked="isChecked"
      @change="isChecked = !isChecked")
    template(v-if="label") {{ label }}
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
    isChecked: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
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
