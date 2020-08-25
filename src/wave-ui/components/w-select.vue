<template lang="pug">
  component(
    :is="formRegister ? 'w-form-element' : 'div'"
    v-bind="formRegister && { validators, inputValue, disabled, readonly }"
    :valid.sync="valid"
    @reset="$emit('input', inputValue = '')"
    :class="classes"
    :style="styles")
    select(:name="name || null" :multiple="multiple")
      option(v-for="(item, i) in items" :key="i" :value="item[itemValue]" v-html="item[itemLabel]")
</template>

<script>
export default {
  name: 'w-select',
  inject: { formRegister: { default: null } },
  props: {
    items: { type: Array, required: true },
    value: {}, // v-model on selected item if any.
    name: { type: String },
    multiple: { type: Boolean },
    placeholder: { type: String },
    itemLabel: { type: String, default: 'label' }, // Name of the label field.
    itemValue: { type: String, default: 'value' }, // Name of the value field.
    itemClass: { type: String },
    disabled: { type: Boolean },
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    validators: { type: Array }
  },

  data: () => ({
    inputValue: null,
    valid: null // Null is pristine (unknown), can also be true or false.
  }),

  computed: {
    classes () {
      return {
        'w-select': true
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

  &--disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }

  &__input-wrap--round {
    border-radius: 5em;
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }
  &__input-wrap--tile {border-radius: initial;}
  &__input-wrap--shadow {box-shadow: $box-shadow;}
}
</style>
