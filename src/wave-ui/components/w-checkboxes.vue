<template lang="pug">
  .w-checkboxes(:class="classes")
    w-checkbox(
      v-for="(item, i) in items"
      :key="i"
      type="checkbox"
      :name="name || `checkboxes-${_uid}`"
      :label="item[itemLabel]"
      :value="value === item[itemValue]"
      @input="$emit('input', item[itemValue]);$emit('change', item[itemValue])"
      :class="{ 'ml-3': inline && i, 'mt-1': !inline && i }")
      slot(v-if="item[itemLabel]" name="label" :item="item") {{ item[itemLabel] }}
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
    color: { type: String, default: null }
  },

  computed: {
    classes () {
      return {
        [this.color]: this.color,
        'w-checkboxes--inline': this.inline
      }
    }
  }
}
</script>

<style lang="scss">
.w-checkboxes {
  &--inline {display: inline-flex;}

  &:not(.w-checkboxes--inline) .w-checkbox {display: block;}
}
</style>
