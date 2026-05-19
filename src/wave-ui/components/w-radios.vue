<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue, disabled: isDisabled, noBlurValidation }"
  v-model:valid="valid"
  @reset="$emit('update:modelValue', inputValue = null);$emit('input', null)"
  :column="!inline"
  :wrap="inline"
  :class="classes")
  w-radio(
    ref="item"
    v-for="(item, i) in radioItems"
    :key="i"
    :model-value="item.value === modelValue"
    @update:model-value="onInput(item)"
    @focus="$emit('focus', $event)"
    :name="inputName"
    v-bind="{ label: item.label, color: item.color, labelOnLeft, labelColor }"
    :disabled="isDisabled || null"
    :readonly="isReadonly || null"
    :class="{ mt1: !inline && i }")
    slot(
      v-if="$slots[`item.${i + 1}`] || $slots.item"
      :name="$slots[`item.${i + 1}`] ? `item.${i + 1}` : 'item'"
      :item="getOriginalItem(item)"
      :index="i + 1"
      :checked="item.value === modelValue"
      v-html="item.label")
    div(v-else-if="item.label" v-html="item.label")
</template>

<script>
import FormElementMixin, { useWaveUiFormIds } from '../mixins/form-elements'
import { guardFocusable } from '../utils/focus'

export default {
  name: 'w-radios',
  expose: ['focus'],
  mixins: [FormElementMixin],

  setup () {
    return useWaveUiFormIds()
  },

  props: {
    items: { type: Array, required: true }, // All the possible options.
    modelValue: { type: [String, Number, Boolean] }, // v-model on selected option.
    labelOnLeft: { type: Boolean },
    itemLabelKey: { type: String, default: 'label' },
    itemValueKey: { type: String, default: 'value' },
    itemColorKey: { type: String, default: 'color' }, // Support a different color per item.
    inline: { type: Boolean },
    color: { type: String, default: 'primary' },
    labelColor: { type: String, default: 'primary' },
    // Sizes.
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean }
    // Props from mixin: id, name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },

  emits: ['input', 'update:modelValue', 'focus'],

  provide () {
    // Disable w-form-el wrapping in each w-radio when inside a w-radios component that already does it.
    // Don't do a simple prop that can be turned on and off by user.
    return { wRadios: true }
  },

  data: () => ({
    inputValue: null
  }),

  computed: {
    radioItems () {
      return (this.items || []).map((item, i) => ({
        ...item,
        _index: i,
        label: item[this.itemLabelKey],
        // If no value is set then add one to prevent error.
        value: item[this.itemValueKey] === undefined ? (item[this.itemLabelKey] || i) : item[this.itemValueKey],
        color: item[this.itemColorKey] || this.color
      }))
    },
    presetSize () {
      return (this.xs && 'xs') || (this.sm && 'sm') || (this.md && 'md') || (this.lg && 'lg') || (this.xl && 'xl') || null
    },

    classes () {
      return [
        'w-radios',
        `w-radios--${this.inline ? 'inline' : 'column'}`,
        this.presetSize && `size--${this.presetSize}`
      ]
    }
  },

  methods: {
    focus () {
      if (!guardFocusable(this)) return
      const items = [].concat(this.$refs.item || []).filter(Boolean)
      items.find(c => !c.isDisabled && !c.isReadonly)?.focus?.()
    },

    onInput (item) {
      this.inputValue = true
      this.$emit('update:modelValue', item.value)
      this.$emit('input', item.value)
    },

    // Return the original item (so there is no `_index`).
    getOriginalItem (item) {
      return this.items[item._index]
    }
  }
}
</script>

<style lang="scss">
.w-radios {
  &--column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &--inline {
    display: inline-flex;
    flex-wrap: wrap;
    vertical-align: middle;

    .w-radio {margin-right: calc(var(--w-base-increment) * 3);}
    .w-radio:last-child {margin-right: 0;}
  }

  // Sizes (cascades --w-small-form-el-size to child w-radio elements).
  // Also scales the radio bullet border-width proportionally.
  // ------------------------------------------------------
  &.size--xs {--w-size: round(nearest, calc(0.86 * var(--w-base-font-size)), 2px);}
  &.size--xs .w-radio__input {border-width: 1px;}
  &.size--xs :checked ~ .w-radio__input:after {border-width: 3px;}
  &.size--sm {--w-size: round(nearest, calc(1.14 * var(--w-base-font-size)), 2px);}
  &.size--sm .w-radio__input {border-width: 1.5px;}
  &.size--sm :checked ~ .w-radio__input:after {border-width: 4px;}
  &.size--lg {--w-size: round(nearest, calc(1.43 * var(--w-base-font-size)), 2px);}
  &.size--lg :checked ~ .w-radio__input:after {border-width: 5px;}
  &.size--xl {--w-size: round(nearest, calc(1.71 * var(--w-base-font-size)), 2px);}
  &.size--xl :checked ~ .w-radio__input:after {border-width: 7px;}
}
</style>
