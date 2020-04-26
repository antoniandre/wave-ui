<template lang="pug">
  .w-radios(:class="classes")
    w-radio(
      v-for="(item, i) in items"
      :key="i"
      type="radio"
      :name="name || `checkboxes-${_uid}`"
      :label="item[itemLabel]"
      :checked="value === item[itemValue]"
      @change.native="$emit('input', item[itemValue])"
      :class="{ 'ml-3': inline && i }")
</template>

<script>
export default {
  name: 'w-radios',
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
        'w-radios--inline': this.inline
      }
    }
  }
}
</script>

<style lang="scss">
.w-radios {
  &:not(.w-radios--inline) .w-radio {display: block;}
}
</style>
