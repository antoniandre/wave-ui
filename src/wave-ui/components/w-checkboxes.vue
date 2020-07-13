<template lang="pug">
  .w-checkboxes(:class="classes")
    w-checkbox(
      v-for="(item, i) in checkboxItems"
      :key="i"
      :name="`${name || `checkboxes-${_uid}`}[]`"
      :label="item.label"
      :label-position="labelPosition"
      :value="item.isChecked"
      :color="color"
      :round="round"
      @input="toggleCheck(item)"
      :class="{ 'ml-3': inline && i, 'mt-1': !inline && i }")
      slot(name="item" v-if="$scopedSlots.item" :item="item" v-html="item.label")
</template>

<script>
export default {
  name: 'w-checkboxes',
  props: {
    items: { type: Array, required: true }, // All the possible options.
    value: { type: Array }, // v-model on selected option.
    name: { type: String, default: null },
    labelPosition: { type: String, default: '' }, // @todo: add a validator (left or right).
    itemLabel: { type: String, default: 'label' },
    itemValue: { type: String, default: 'value' },
    inline: { type: Boolean },
    round: { type: Boolean },
    color: { type: String, default: 'primary' }
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
      return {
        [`w-checkboxes--${this.inline ? 'inline' : 'column'}`]: true
      }
    }
  },

  methods: {
    toggleCheck (checkbox) {
      checkbox.isChecked = !checkbox.isChecked
      const checkedItems = this.checkboxItems.filter(item => item.isChecked).map(item => item.value)
      this.$emit('input', checkedItems)
      this.$emit('change', checkedItems)
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

  &--inline {display: inline-flex;}
}
</style>
