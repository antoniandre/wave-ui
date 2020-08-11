<template lang="pug">
  .w-select(:class="classes" :style="styles")
    select(:name="name || null" :multiple="multiple")
      option(v-for="(item, i) in items" :key="i" :value="item[itemValue]" v-html="item[itemLabel]")
</template>

<script>
export default {
  name: 'w-select',
  props: {
    items: { type: Array, required: true },
    value: {}, // v-model on selected item if any.
    name: { type: String },
    multiple: { type: Boolean },
    placeholder: { type: String },
    itemLabel: { type: String, default: 'label' }, // Name of the label field.
    itemValue: { type: String, default: 'value' }, // Name of the value field.
    itemClass: { type: String },
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean }
  },

  computed: {
    classes () {
      return {
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

  &__input-wrap--round {
    border-radius: 5em;
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }
  &__input-wrap--tile {border-radius: initial;}
  &__input-wrap--shadow {box-shadow: $box-shadow;}
}
</style>
