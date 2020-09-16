<template lang="pug">
  component(
    :is="formRegister ? 'w-form-element' : 'div'"
    v-bind="formRegister && { validators, inputValue: checkedItems.length, disabled }"
    :valid.sync="valid"
    @reset="reset"
    :column="!inline"
    :class="classes")
    w-checkbox(
      v-for="(item, i) in checkboxItems"
      :key="i"
      :name="`${name || `w-checkboxes--${_uid}`}[]`"
      :label="item.label"
      :label-on-left="labelOnLeft"
      :value="item.isChecked"
      :color="color"
      :round="round"
      @input="toggleCheck(item)"
      :class="{ mt1: !inline && i }")
      slot(name="item" v-if="$scopedSlots.item" :item="item" v-html="item.label")
</template>

<script>
import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-checkboxes',
  mixins: [FormElementMixin],
  props: {
    items: { type: Array, required: true }, // All the possible options.
    value: { type: Array }, // v-model on selected option.
    name: { type: String, default: null },
    labelOnLeft: { type: Boolean },
    itemLabel: { type: String, default: 'label' },
    itemValue: { type: String, default: 'value' },
    inline: { type: Boolean },
    round: { type: Boolean },
    color: { type: String, default: 'primary' }
  },

  data: () => ({
    checkedItems: []
  }),

  provide () {
    // Disable w-form-el wrapping in each w-checkbox when inside a w-checkboxes component that already
    // does it.
    // Don't do a simple prop that can be turned on and off by user.
    return { wCheckboxes: true }
  },

  computed: {
    checkboxItems () {
      return this.items.map((item, i) => {
        const itemValue = item[this.itemValue] === undefined ? (item[this.itemLabel] || i) : item[this.itemValue]

        return {
          ...item,
          label: item[this.itemLabel],
          // If no value is set then add one to prevent error.
          value: itemValue,
          isChecked: this.value && this.value.includes(itemValue)
        }
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
      this.checkboxItems.forEach(item => (item.isChecked = false))
      this.checkedItems = []
      this.$emit('input', [])
      this.$emit('change', [])
    },

    toggleCheck (checkbox) {
      checkbox.isChecked = !checkbox.isChecked

      this.$set(this, 'checkedItems', this.checkboxItems.filter(item => item.isChecked).map(item => item.value))
      this.$emit('input', this.checkedItems)
      this.$emit('change', this.checkedItems)
    }
  },

  created () {
    this.checkedItems = this.checkboxItems.filter(item => item.isChecked).map(item => item.value)
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
