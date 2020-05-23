<template lang="pug">
  .w-checkboxes(:class="classes")
    w-checkbox(
      v-for="(item, i) in checkboxItems"
      :key="i"
      type="checkbox"
      :name="`${name || `checkboxes-${_uid}`}[]`"
      :label="item.label"
      :value="value === item.value"
      :color="color"
      @input="$emit('input', item.value);$emit('change', item.value)"
      :class="{ 'ml-3': inline && i, 'mt-1': !inline && i }")
      slot(name="label" :item="item") {{ item.label }}
</template>

<script>
export default {
  name: 'w-checkboxes',
  props: {
    items: { type: Array, required: true }, // All the possible options.
    value: { type: [String, Number, Boolean] }, // v-model on selected option.
    name: { type: String, default: null },
    itemLabel: { type: String, default: 'label' },
    itemValue: { type: String, default: 'value' },
    inline: { type: Boolean, default: false },
    color: { type: String, default: 'primary' }
  },

  computed: {
    checkboxItems () {
      return this.items.map((item, i) => ({
        ...item,
        label: item[this.itemLabel],
        // If no value is set then add one to prevent error.
        value: item[this.itemValue] === undefined ? (item[this.itemLabel] || i) : item[this.itemValue]
      }))
    },
    classes () {
      return {
        [`w-checkboxes--${this.inline ? 'inline' : 'column'}`]: true
      }
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
