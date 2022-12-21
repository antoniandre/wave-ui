<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: checkboxItems.some(item => item._isChecked), disabled: isDisabled }"
  v-model:valid="valid"
  @reset="reset"
  :column="!inline"
  :wrap="inline"
  :class="classes")
  w-checkbox(
    v-for="(item, i) in checkboxItems"
    :key="i"
    :model-value="item._isChecked"
    @update:model-value="toggleCheck(item, $event)"
    @focus="$emit('focus', $event)"
    :name="`${inputName}[]`"
    v-bind="{ label: item.label, color: item.color, labelOnLeft, labelColor, round }"
    :disabled="isDisabled || null"
    :readonly="isReadonly || null"
    :class="{ mt1: !inline && i }")
    slot(
      v-if="$slots[`item.${i + 1}`] || $slots.item"
      :name="$slots[`item.${i + 1}`] ? `item.${i + 1}` : 'item'"
      :item="getOriginalItem(item)"
      :checked="!!item._isChecked"
      :index="i + 1"
      v-html="item.label")
    div(v-else-if="item.label" v-html="item.label")
</template>

<script>
import { reactive } from 'vue'
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-checkboxes',
  mixins: [FormElementMixin],

  props: {
    items: { type: Array, required: true }, // All the possible options.
    modelValue: { type: Array }, // v-model on selected option.
    labelOnLeft: { type: Boolean },
    itemLabelKey: { type: String, default: 'label' },
    itemValueKey: { type: String, default: 'value' },
    itemColorKey: { type: String, default: 'color' }, // Support a different color per item.
    inline: { type: Boolean },
    round: { type: Boolean },
    color: { type: String, default: 'primary' },
    labelColor: { type: String, default: 'primary' }
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },

  emits: ['input', 'update:modelValue', 'focus'],

  provide () {
    // Disable w-form-el wrapping in each w-checkbox when inside a w-checkboxes component that already
    // does it.
    // Don't do a simple prop that can be turned on and off by user.
    return { wCheckboxes: true }
  },

  computed: {
    checkboxItems () {
      return (this.items || []).map((item, i) => {
        const itemValue = item[this.itemValueKey] === undefined ? (item[this.itemLabelKey] || i) : item[this.itemValueKey]

        return reactive({
          ...item,
          label: item[this.itemLabelKey],
          _index: i,
          value: itemValue, // If no value is set then add one to prevent error.
          color: item[this.itemColorKey] || this.color,
          _isChecked: this.modelValue && this.modelValue.includes(itemValue)
        })
      })
    },

    classes () {
      return [
        'w-checkboxes',
        `w-checkboxes--${this.inline ? 'inline' : 'column'}`
      ]
    }
  },

  methods: {
    reset () {
      this.checkboxItems.forEach(item => (item._isChecked = null))
      this.$emit('update:modelValue', [])
      this.$emit('input', [])
    },

    toggleCheck (checkbox, isChecked) {
      checkbox._isChecked = isChecked
      const selection = this.checkboxItems.filter(item => item._isChecked).map(item => item.value)

      this.$emit('update:modelValue', selection)
      this.$emit('input', selection)
    },

    // Return the original item (so there is no `_index`, etc.).
    getOriginalItem (item) {
      return this.items[item._index]
    }
  }
}
</script>

<style lang="scss">
.w-checkboxes {
  &--column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &--inline {
    display: inline-flex;
    flex-wrap: wrap;
    vertical-align: middle;

    .w-checkbox {margin-right: 3 * $base-increment;}
    .w-checkbox:last-child {margin-right: 0;}
  }
}
</style>
