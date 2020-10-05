<template lang="pug">
component(
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue, disabled }"
  v-model:valid="valid"
  @reset="$emit('update:modelValue', inputValue = null);$emit('input', null)"
  :column="!inline"
  :class="classes")
  w-radio(
    v-for="(item, i) in radioItems"
    :key="i"
    :model-value="item.value === modelValue"
    @update:model-value="onInput(item)"
    @focus="$emit('focus', $event)"
    :name="inputName"
    :label="item.label"
    :label-on-left="labelOnLeft"
    :color="item.color"
    :class="{ mt1: !inline && i }")
    slot(v-if="$slots.item" name="item" :item="item")
    div(v-else-if="item.label" v-html="item.label")
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-radios',
  mixins: [FormElementMixin],

  props: {
    items: { type: Array, required: true }, // All the possible options.
    modelValue: { type: [String, Number, Boolean] }, // v-model on selected option.
    name: { type: String },
    labelOnLeft: { type: Boolean },
    itemLabel: { type: String, default: 'label' },
    itemValue: { type: String, default: 'value' },
    itemColor: { type: String, default: 'color' }, // Support a different color per item.
    inline: { type: Boolean },
    color: { type: String, default: 'primary' }
  },

  emits: ['input', 'update:modelValue', 'focus'],

  provide () {
    // Disable w-form-el wrapping in each w-radio when inside a w-radios component that already does it.
    // Don't do a simple prop that can be turned on and off by user.
    return { wRadios: true }
  },

  data: () => ({
    inputValue: null
  }),

  computed: {
    radioItems () {
      return (this.items || []).map((item, i) => ({
        ...item,
        label: item[this.itemLabel],
        // If no value is set then add one to prevent error.
        value: item[this.itemValue] === undefined ? (item[this.itemLabel] || i) : item[this.itemValue],
        color: item[this.itemColor] || this.color
      }))
    },
    classes () {
      return [
        'w-radios',
        `w-radios--${this.inline ? 'inline' : 'column'}`
      ]
    }
  },

  methods: {
    onInput (item) {
      this.inputValue = true
      this.$emit('update:modelValue', item.value)
      this.$emit('input', item.value)
    }
  }
}
</script>

<style lang="scss">
.w-radios {
  &--column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &--inline {
    display: inline-flex;
    flex-wrap: wrap;
    vertical-align: middle;

    .w-radio {margin-right: 3 * $base-increment;}
    .w-radio:last-child {margin-right: 0;}
  }
}
</style>
