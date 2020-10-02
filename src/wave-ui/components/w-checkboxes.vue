<template lang="pug">
component(
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: checkboxItems.some(item => item.isChecked), disabled }"
  v-model:valid="valid"
  @reset="reset"
  :column="!inline"
  :class="classes")
  w-checkbox(
    v-for="(item, i) in checkboxItems"
    :key="i"
    :model-value="item.isChecked"
    :name="`${name || `w-checkboxes--${_.uid}`}[]`"
    :label="item.label"
    :label-on-left="labelOnLeft"
    :color="item.color"
    :round="round"
    @update:model-value="toggleCheck(item, $event)"
    @focus="$emit('focus', $event)"
    :class="{ mt1: !inline && i }")
    slot(name="item" v-if="$slots.item" :item="item" v-html="item.label")
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
    name: { type: String, default: null },
    labelOnLeft: { type: Boolean },
    itemLabel: { type: String, default: 'label' },
    itemValue: { type: String, default: 'value' },
    itemColor: { type: String, default: 'color' }, // Support a different color per item.
    inline: { type: Boolean },
    round: { type: Boolean },
    color: { type: String, default: 'primary' }
  },

  emits: ['input', 'update:modelValue', 'focus', 'change'],

  provide () {
    // Disable w-form-el wrapping in each w-checkbox when inside a w-checkboxes component that already
    // does it.
    // Don't do a simple prop that can be turned on and off by user.
    return { wCheckboxes: true }
  },

  computed: {
    checkboxItems () {
      return (this.items || []).map((item, i) => {
        const itemValue = item[this.itemValue] === undefined ? (item[this.itemLabel] || i) : item[this.itemValue]

        return reactive({
          ...item,
          label: item[this.itemLabel],
          index: i,
          value: itemValue, // If no value is set then add one to prevent error.
          color: item[this.itemColor] || this.color,
          isChecked: this.modelValue && this.modelValue.includes(itemValue)
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
      this.checkboxItems.forEach(item => (item.isChecked = null))
      this.$emit('update:modelValue', [])
      this.$emit('input', [])
      this.$emit('change', [])
    },

    toggleCheck (checkbox, isChecked) {
      checkbox.isChecked = isChecked
      const selection = this.checkboxItems.filter(item => item.isChecked).map(item => item.value)

      this.$emit('update:modelValue', selection)
      this.$emit('input', selection)
      this.$emit('change', selection)
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
