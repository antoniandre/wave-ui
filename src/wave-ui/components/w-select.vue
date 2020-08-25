<template lang="pug">
  component(
    :is="formRegister ? 'w-form-element' : 'div'"
    v-bind="formRegister && { validators, inputValue, disabled, readonly }"
    :valid.sync="valid"
    @reset="$emit('input', inputValue = '')"
    :class="classes"
    :style="styles")
    template(v-if="hasLabel && labelOnLeft")
      label.w-select__label.w-form-el-shakable(v-if="$slots.default" :for="`w-select--${_uid}`")
        slot
      label.w-select__label.w-form-el-shakable(v-else-if="label" :for="`w-select--${_uid}`" v-html="label")
    select(
      :id="`w-select--${_uid}`"
      :name="inputName"
      :multiple="multiple"
      :required="required")
      option(v-for="(item, i) in items" :key="i" :value="item[itemValue]" v-html="item[itemLabel]")
    template(v-if="hasLabel && !labelOnLeft")
      label.w-select__label.w-form-el-shakable(v-if="$slots.default" :for="`w-select--${_uid}`")
        slot
      label.w-select__label.w-form-el-shakable(v-else-if="label" :for="`w-select--${_uid}`" v-html="label")
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-select',
  mixins: [FormElementMixin],
  props: {
    items: { type: Array, required: true },
    value: {}, // v-model on selected item if any.
    multiple: { type: Boolean },
    placeholder: { type: String },
    label: { type: String },
    labelOnLeft: { type: Boolean },
    itemLabel: { type: String, default: 'label' }, // Name of the label field.
    itemValue: { type: String, default: 'value' }, // Name of the value field.
    itemClass: { type: String },
    color: { type: String, default: 'primary' },
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean }
    // Also name, disabled, readonly, required and validators in the mixin.
  },

  data: () => ({
    inputValue: null
  }),

  computed: {
    hasLabel () {
      return (this.$slots.default && this.$slots.default.length) || this.label
    },
    classes () {
      return {
        'w-select': true
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">
.w-select {
  display: inline-flex;
  position: relative;

  &--disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }

  &__input-wrap--round {
    border-radius: 5em;
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }
  &__input-wrap--tile {border-radius: initial;}
  &__input-wrap--shadow {box-shadow: $box-shadow;}
}
</style>
