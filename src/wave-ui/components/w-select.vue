<template lang="pug">
  component(
    :is="formRegister ? 'w-form-element' : 'div'"
    v-bind="formRegister && { validators, inputValue, disabled, readonly }"
    :valid.sync="valid"
    @reset="onChange([])"
    :class="classes")
    template(v-if="labelPosition === 'left'")
      label.w-select__label.w-select__label--left.w-form-el-shakable(v-if="$slots.default" :for="`w-select--${_uid}`")
        slot
      label.w-select__label.w-select__label--left.w-form-el-shakable(v-else-if="label" :for="`w-select--${_uid}`" v-html="label")

    w-menu(
      v-model="showMenu"
      :menu-class="`w-select__menu ${menuClass || ''}`"
      transition="slide-fade-down"
      detach-to=".w-app"
      align-left
      custom
      min-width="activator")
      template(#activator="{ on }")
        //- Input wrapper.
        .w-select__selection-wrap(
          ref="selection-wrap"
          :class="inputWrapClasses")
          w-icon.w-select__icon.w-select__icon--inner-left(
            v-if="innerIconLeft"
            tag="label"
            :for="`w-select--${_uid}`"
            @click="$emit('click:inner-icon-left')") {{ innerIconLeft }}
          input.w-select__selection(
            type="text"
            :value="selectionString"
            @click="!disabled && !readonly && (showMenu = true)"
            @focus="!disabled && !readonly && onFocus($event)"
            @blur="onBlur"
            @keyup.escape="!disabled && !readonly && (showMenu = false)"
            @keydown.enter.prevent
            @keyup.enter="!disabled && !readonly && (showMenu = true)"
            :id="`w-select--${_uid}`"
            :placeholder="placeholder || null"
            :disabled="disabled"
            readonly
            :required="required"
            autocomplete="off")
          //- For standard HTML form submission.
          input(
            v-for="(val, i) in (inputValue.length ? inputValue : [{}])"
            :key="i"
            type="hidden"
            :value="val.value || ''"
            :name="inputName + (multiple ? '[]' : '')")
          template(v-if="labelPosition === 'inside' && showLabelInside")
            label.w-select__label.w-select__label--inside.w-form-el-shakable(
              v-if="$slots.default"
              :for="`w-select--${_uid}`"
              :class="isFocused && { [valid === false ? 'error' : color]: color || valid === false }")
              slot
            label.w-select__label.w-select__label--inside.w-form-el-shakable(
              v-else-if="label"
              :for="`w-select--${_uid}`"
              v-html="label"
              :class="isFocused && { [valid === false ? 'error' : color]: color || valid === false }")
          w-icon.w-select__icon.w-select__icon--inner-right.w-form-el-shakable(
            v-if="innerIconRight"
            tag="label"
            :for="`w-select--${_uid}`"
            @click="$emit('click:inner-icon-right')") {{ innerIconRight }}
      w-list(
        :value="inputValue"
        @input="onChange"
        :multiple="multiple"
        return-object
        :items="selectItems"
        :color="color"
        @item-click="!multiple && (showMenu = false)")
        template(#item="{ item, selected, index }")
          slot(name="item" :item="item" :selected="selected" :index="index") {{ item[itemLabel] }}

    template(v-if="labelPosition === 'right'")
      label.w-select__label.w-select__label--right.w-form-el-shakable(v-if="$slots.default" :for="`w-select--${_uid}`")
        slot
      label.w-select__label.w-select__label--right.w-form-el-shakable(v-else-if="label" :for="`w-select--${_uid}`" v-html="label")
</template>

<script>
/**
 * @todo Share the common parts between w-input, w-textarea & w-select.
 **/

import FormElementMixin from '../mixins/form-elements'

export default {
  name: 'w-select',
  mixins: [FormElementMixin],
  props: {
    items: { type: Array, required: true },
    value: {}, // v-model on selected item if any.
    multiple: { type: Boolean },
    placeholder: { type: String },
    label: { type: String },
    labelPosition: { type: String, default: 'inside' },
    innerIconLeft: { type: String },
    innerIconRight: { type: String, default: 'wi-triangle-down' },
    // When label is inside, allows to move the label above on focus or when filled.
    staticLabel: { type: Boolean },
    itemLabel: { type: String, default: 'label' }, // Name of the label field.
    itemValue: { type: String, default: 'value' }, // Name of the value field.
    itemClass: { type: String },
    menuClass: { type: String },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    returnObject: { type: Boolean }
    // Also name, disabled, readonly, required and validators in the mixin.
  },

  data: () => ({
    // Selection is always an array (internally), but emits a single value if not multiple.
    // inputValue is always an array of objects that have a `value`.
    inputValue: [],
    showMenu: false,
    menuMinWidth: 0,
    isFocused: false
  }),

  computed: {
    // Check all the items and add a `value` if missing, containing either: value, label or index
    // in this order.
    selectItems () {
      return this.items.map((item, i) => {
        const obj = { ...item } // Don't modify the original.

        // If no value is set on the item, add one from its label, or from its index. the result is
        // store in the value attribute for easy use in the w-list component (which tries the same logic).
        obj.value = obj[this.itemValue] === undefined ? obj[this.itemLabel] || i : obj[this.itemValue]
        obj.index = i
        return obj
      })
    },
    hasValue () {
      return Array.isArray(this.inputValue) ? this.inputValue.length : (this.inputValue !== null)
    },
    hasLabel () {
      return this.label || this.$slots.default
    },
    showLabelInside () {
      return !this.staticLabel || (!this.hasValue && !this.placeholder)
    },
    selectionString () {
      return this.inputValue && this.inputValue.map(
        item => item[this.itemValue] !== undefined ? item[this.itemLabel] : (item[this.itemLabel] !== undefined ? item[this.itemLabel] : item)
      ).join(', ')
    },
    classes () {
      return {
        'w-select': true,
        'w-select--disabled': this.disabled,
        'w-select--readonly': this.readonly,
        [`w-select--${this.hasValue ? 'filled' : 'empty'}`]: true,
        'w-select--focused': this.isFocused,
        'w-select--dark': this.dark,
        'w-select--floating-label': this.hasLabel && this.labelPosition === 'inside' &&
                                    !this.staticLabel && !(this.readonly && !this.hasValue),
        'w-select--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round,
        'w-select--has-placeholder': this.placeholder,
        'w-select--inner-icon-left': this.innerIconLeft,
        'w-select--inner-icon-right': this.innerIconRight,
        'w-select--open': this.showMenu
      }
    },
    inputWrapClasses () {
      return {
        [this.valid === false ? 'error' : this.color]: this.color || this.valid === false,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-select__selection-wrap--round': this.round,
        'w-select__selection-wrap--tile': this.tile,
        // Box adds a padding on input. If there is a bgColor or shadow, a padding is needed.
        'w-select__selection-wrap--box': this.outline || this.bgColor || this.shadow,
        'w-select__selection-wrap--underline': !this.outline,
        'w-select__selection-wrap--shadow': this.shadow,
        'w-select__selection-wrap--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round
      }
    }
  },

  methods: {
    onFocus (e) {
      this.showMenu = true
      this.isFocused = true
      this.$emit('focus', e)
    },
    onBlur (e) {
      this.isFocused = false
      this.$emit('blur', e)
    },
    // The items are given by the w-list component.
    onChange (items) {
      this.inputValue = items === null ? [] : (this.multiple ? items : [items])
      // Return the original items when returnObject is true (no `value` if there wasn't),
      // or the the item value otherwise.
      items = this.inputValue.map(item => this.returnObject ? this.items[item.index] : item.value)

      // Emit the selection to the v-model.
      // Note: this.inputValue is always an array of objects that have a `value`.
      this.$emit('input', this.multiple ? items : items[0])
    },
    // Convert the received items selection to array if it is a unique value.
    // Also accept objects if returnObject is true.
    // In any case, always end up with an array.
    checkSelection (items) {
      items = Array.isArray(items) ? items : (items ? [items] : [])
      // `selectItems` items always have a value.
      const allValues = this.selectItems.map(item => item.value)

      return items.map(item => {
        let value = item
        if (typeof item === 'object') {
          value = item[this.itemValue] !== undefined ? item[this.itemValue] : (item[this.itemLabel] !== undefined ? item[this.itemLabel] : item)
        }

        return this.selectItems[allValues.indexOf(value)]
      }).filter(item => item !== undefined)
    }
  },

  created () {
    this.inputValue = this.checkSelection(this.value)
  },

  watch: {
    value (value) {
      if (value !== this.inputValue) this.inputValue = this.checkSelection(value)
    }
  }
}
</script>

<style lang="scss">
.w-select {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  font-size: $base-font-size;

  &--disabled {
    color: $disabled-color;
    cursor: not-allowed;
    -webkit-tap-highlight-color: transparent;
  }

  // Selection wrapper.
  // ------------------------------------------------------
  &__selection-wrap {
    position: relative;
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    height: $form-field-height;
    border-radius: $border-radius;
    border: $border;
    transition: border $transition-duration;
    &--tile {border-radius: initial;}
    &--shadow {box-shadow: $box-shadow;}

    .w-select--floating-label & {
      margin-top: 3 * $base-increment;
    }

    &--underline {
      border-bottom-left-radius: initial;
      border-bottom-right-radius: initial;
      border-width: 0 0 1px;
    }

    &--round {border-radius: 9em;}

    .w-select--focused & {border-color: currentColor;}

    // Underline.
    &--underline:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      width: 0;
      height: 0;
      border-bottom: 2px solid currentColor;
      transition: $transition-duration;
      transform: translateX(-50%);
      pointer-events: none;
    }

    .w-select--focused &--underline:after {width: 100%;}
    &--round.w-select__selection-wrap--underline:after {
      border-radius: 9em;
      transition: $transition-duration, height 0.035s;
    }
    .w-select--focused &--round.w-select__selection-wrap--underline:after {
      height: 100%;
      transition: $transition-duration, height 0s ($transition-duration - 0.035s);
    }
  }

  // selection (input) field.
  // ------------------------------------------------------
  &__selection {
    width: 100%;
    height: 100%;
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
    padding-left: 2 * $base-increment;
    padding-right: 2 * $base-increment;
    cursor: pointer;
  }

  &--no-padding &__selection {
    padding-left: 0;
    padding-right: 0;
  }

  &__selection-wrap--round &__selection {
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }

  &--inner-icon-left &__selection {padding-left: 27px;}
  &--inner-icon-right &__selection {padding-right: 27px;}

  &--disabled &__selection {
    color: $disabled-color;
    cursor: not-allowed;
    -webkit-tap-highlight-color: transparent;
  }

  &--disabled input::placeholder {color: inherit;}

  &--readonly.w-select--empty &__selection {cursor: auto;}

  // Icons inside.
  // ------------------------------------------------------
  &__icon {
    position: absolute;
    font-size: 1.4em;

    .w-select--focused & {color: currentColor;}

    .w-select--disabled & {
      color: $disabled-color;
      cursor: not-allowed;
      -webkit-tap-highlight-color: transparent;
    }

    &--inner-left {left: 6px;}
    &--inner-right {
      right: 6px;
      @include default-transition;
    }
    .w-select--no-padding &--inner-left {left: 1px;}
    .w-select--no-padding &--inner-right {right: 1px;}

    .w-select--open &--inner-right {transform: rotate(180deg);}
  }

  // Label.
  // ------------------------------------------------------
  &__label {
    display: flex;
    align-items: center;
    transition: color $transition-duration;
    cursor: pointer;

    &--left {margin-right: 2 * $base-increment;}
    &--right {margin-left: 2 * $base-increment;}

    .w-select--disabled & {
      color: $disabled-color;
      cursor: not-allowed;
      -webkit-tap-highlight-color: transparent;
    }
    .w-select--readonly.w-select--empty & {
      opacity: 0.5;
      cursor: auto;
    }
  }

  &__label--inside {
    position: absolute;
    top: 50%;
    left: 0;
    // Use margin instead of padding as the scale transformation bellow decreases the real padding
    // size and misaligns the label.
    margin-left: 2 * $base-increment;
    transform: translateY(-50%);
    pointer-events: none;

    .w-select--no-padding & {
      left: 0;
      margin-left: 0;
    }
    .w-select__selection-wrap--round & {
      margin-left: round(3 * $base-increment);
    }
    .w-select--inner-icon-left & {left: 18px;}
    .w-select--no-padding.w-select--inner-icon-left & {left: 26px;}

    .w-select--floating-label & {
      transform-origin: 0 0;
      transition: $transition-duration ease;
    }

    // move label with underline style.
    .w-select--focused.w-select--floating-label &,
    .w-select--filled.w-select--floating-label &,
    .w-select--has-placeholder.w-select--floating-label & {
      transform: translateY(-160%) scale(0.85);
    }
    // Chrome & Safari - Must remain in a separated rule as Firefox discard the whole rule seeing -webkit-.
    .w-select--floating-label .w-select__select:-webkit-autofill & {
      transform: translateY(-160%) scale(0.85);
    }
    // Move label with outline style or with shadow.
    .w-select--focused.w-select--floating-label .w-select__selection-wrap--box &,
    .w-select--filled.w-select--floating-label .w-select__selection-wrap--box &,
    .w-select--has-placeholder.w-select--floating-label .w-select__selection-wrap--box & {
      transform: translateY(-180%) scale(0.85);
    }
    .w-select--focused.w-select--floating-label.w-select--inner-icon-left &,
    .w-select--filled.w-select--floating-label.w-select--inner-icon-left & {left: 0;}
    // Chrome & Safari - Must remain in a separated rule as Firefox discard the whole rule seeing -webkit-.
    .w-select--floating-label.w-select--inner-icon-left .w-select__select:-webkit-autofill & {left: 0;}

    .w-select--focused & {color: currentColor;}
  }

  // Menu.
  // ------------------------------------------------------
  &__menu {
    margin: 0;
    max-height: 300px;
    overflow: auto;
    background-color: #fff;
    border: $border;
    border-radius: $border-radius;
  }
}
</style>
