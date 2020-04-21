<template lang="pug">
  .w-checkboxes(:class="classes")
    w-checkbox(
      v-for="(item, i) in items"
      :key="i"
      type="checkbox"
      :name="name || `checkboxes-${_uid}`"
      :label="item[itemLabel]"
      :checked="value === item[itemValue]"
      @change.native="$emit('input', item[itemValue])"
      :class="{ 'ml-3': inline && i }")
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
        [`${this.color}--text`]: !!this.color,
        'w-checkboxes--inline': this.inline
      }
    }
  }
}
</script>

<style lang="scss">
.w-checkboxes {
  &:not(.w-checkboxes--inline) .w-checkbox {display: block;}
}
</style>
