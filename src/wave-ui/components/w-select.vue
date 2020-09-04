<template lang="pug">
  component(
    :is="formRegister ? 'w-form-element' : 'div'"
    v-bind="formRegister && { validators, inputValue, disabled, readonly }"
    :valid.sync="valid"
    @reset="$emit('input', inputValue = '')"
    :class="classes")
    template(v-if="hasLabel && labelOnLeft")
      label.w-select__label.w-form-el-shakable(v-if="$slots.default" :for="`w-select--${_uid}`")
        slot
      label.w-select__label.w-form-el-shakable(v-else-if="label" :for="`w-select--${_uid}`" v-html="label")

    w-menu(
      v-model="showMenu"
      menu-class="pa0 mt0"
      content-class="pa0"
      transition="slide-fade-down"
      detach-to=".w-app"
      min-width="activator")
      template(#activator="{ on }")
        //- Input wrapper.
        .w-select__selection-wrap(
          v-on="on"
          ref="selection-wrap"
          :class="inputWrapClasses"
          tabindex="0"
          @focus="showMenu = !showMenu")
          w-icon.w-select__icon.w-select__icon--inner-left(
            v-if="innerIconLeft"
            tag="label"
            :for="`w-select--${_uid}`"
            @click="$emit('click:inner-icon-left')") {{ innerIconLeft }}
          div {{ inputValue }}
          input.w-select__selection(
            type="hidden"
            :id="`w-select--${_uid}`"
            :name="inputName"
            :placeholder="placeholder || null"
            v-model="inputValue"
            v-on="$listeners"
            :disabled="disabled"
            :required="required")
          template(v-if="labelPosition === 'inside' && showLabelInside")
            label.w-select__label.w-select__label--inside.w-form-el-shakable(
              v-if="$slots.default"
              :for="`w-select--${_uid}`"
              :class="isFocused && { [valid === false ? 'error' : this.color ]: this.color || valid === false }")
              slot
            label.w-select__label.w-select__label--inside.w-form-el-shakable(
              v-else-if="label"
              :for="`w-select--${_uid}`"
              v-html="label"
              :class="isFocused && { [valid === false ? 'error' : this.color ]: this.color || valid === false }")
          w-icon.w-select__icon.w-select__icon--inner-right.w-form-el-shakable(
            v-if="innerIconRight"
            tag="label"
            :for="`w-select--${_uid}`"
            @click="$emit('click:inner-icon-right')") {{ innerIconRight }}
      w-list.white--bg(
        v-model="inputValue"
        :multiple="multiple"
        :items="items"
        @item-click="showMenu = false")

    //- select(
      :id="`w-select--${_uid}`"
      :name="inputName"
      :multiple="multiple"
      :required="required")
      option(v-for="(item, i) in items" :key="i" :value="item[itemValue]" v-html="item[itemLabel]")
    template(v-if="hasLabel && !labelOnLeft")
      label.w-select__label.w-form-el-shakable(v-if="$slots.default" :for="`w-select--${_uid}`")
        slot
      label.w-select__label.w-form-el-shakable(v-else-if="label" :for="`w-select--${_uid}`" v-html="label")
</template>

<script>
/**
 * @todo combine this element and w-select.
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
    innerIconRight: { type: String },
    // When label is inside, allows to move the label above on focus or when filled.
    moveLabel: { type: Boolean, default: true },
    itemLabel: { type: String, default: 'label' }, // Name of the label field.
    itemValue: { type: String, default: 'value' }, // Name of the value field.
    itemClass: { type: String },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean }
    // Also name, disabled, readonly, required and validators in the mixin.
  },

  data: () => ({
    inputValue: [],
    showMenu: false,
    menuMinWidth: 0
  }),

  computed: {
    hasValue () {
      return this.inputValue.length || (this.type === 'number' && this.inputNumberError)
    },
    hasLabel () {
      return this.label || this.$slots.default
    },
    showLabelInside () {
      return this.moveLabel || (!this.hasValue && !this.placeholder)
    },
    classes () {
      return {
        'w-select': true,
        'w-select--disabled': this.disabled,
        'w-select--filled': this.hasValue,
        'w-select--focused': this.isFocused,
        'w-select--dark': this.dark,
        'w-select--floatting-label': this.hasLabel && this.labelPosition === 'inside' && this.moveLabel && !(this.readonly && !this.hasValue),
        'w-select--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round,
        'w-select--has-placeholder': this.placeholder,
        'w-select--inner-icon-left': this.innerIconLeft,
        'w-select--inner-icon-right': this.innerIconRight
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
    },
    menuClasses () {
      return {
      }
    }
  },

  methods: {
  },

  watch: {
    value (value) {
      this.inputValue = Array.isArray(value) ? value : [value]
    }
  }
}
</script>

<style lang="scss">
$size: round(2 * $base-font-size);

.w-select {
  display: flex;
  position: relative;

  &--disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }

  &__selection-wrap--round {
    border-radius: 9em;
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }
  &__selection-wrap--tile {border-radius: initial;}
  &__selection-wrap--shadow {box-shadow: $box-shadow;}

  // Selection wrapper.
  // ------------------------------------------------------
  &__selection-wrap {
    position: relative;
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    height: $size;
    border-radius: $border-radius;
    border: $border;
    transition: border $transition-duration;
  }

  &--floatting-label &__selection-wrap {
    margin-top: 3 * $base-increment;
  }

  &__selection-wrap--underline {
    border-bottom-left-radius: initial;
    border-bottom-right-radius: initial;
    border-width: 0 0 1px;
  }

  // &__selection-wrap--box {}

  &__selection-wrap--round {border-radius: 9em;}
  &__selection-wrap--tile {border-radius: initial;}
  &__selection-wrap--shadow {box-shadow: $box-shadow;}

  &--focused &__selection-wrap {border-color: currentColor;}

  // Underline.
  &__selection-wrap--underline:after {
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

  &--focused &__selection-wrap--underline:after {width: 100%;}
  &__selection-wrap--round.w-selection__selection-wrap--underline:after {
    border-radius: 9em;
    transition: $transition-duration, height 0.035s;
  }
  &--focused &__selection-wrap--round.w-selection__selection-wrap--underline:after {
    height: 100%;
    transition: $transition-duration, height 0s ($transition-duration - 0.035s);
  }

  // selection field.
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

    // For type="search" on Safari.
    -webkit-appearance: none;
    &::-webkit-search-decoration {-webkit-appearance: none;}
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
  }

  &--disabled input::placeholder {color: inherit;}

  // Icons inside.
  // ------------------------------------------------------
  &__icon {position: absolute;}
  &__icon--inner-left {left: 6px;}
  &__icon--inner-right {right: 6px;}
  &--no-padding &__icon--inner-left {left: 1px;}
  &--no-padding &__icon--inner-right {right: 1px;}

  .w-selection--focused &__icon {color: currentColor;}

  &--disabled &__icon {
    color: $disabled-color;
    cursor: not-allowed;
  }

  // Label.
  // ------------------------------------------------------
  &__label {
    transition: color $transition-duration;
    cursor: pointer;

    &--left {margin-right: 2 * $base-increment;}
    &--right {margin-left: 2 * $base-increment;}
    .w-selection--disabled & {color: $disabled-color;cursor: not-allowed;}
  }

  &__label--inside {
    position: absolute;
    top: 50%;
    left: 0;
    padding-left: 2 * $base-increment;
    transform: translateY(-50%);
    pointer-events: none;

    .w-selection--no-padding & {
      left: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .w-selection__selection-wrap--round & {
      padding-left: round(3 * $base-increment);
      padding-right: round(3 * $base-increment);
    }
    .w-selection--inner-icon-left & {left: 18px;}
    .w-selection--no-padding.w-selection--inner-icon-left & {left: 26px;}

    .w-selection--floatting-label & {
      transform-origin: 0 0;
      transition: $transition-duration ease;
    }

    // move label with underline style.
    .w-selection--focused.w-selection--floatting-label &,
    .w-selection--filled.w-selection--floatting-label &,
    .w-selection--has-placeholder.w-selection--floatting-label & {
      transform: translateY(-160%) scale(0.85);
    }
    // Chrome & Safari - Must remain in a separated rule as Firefox discard the whole rule seeing -webkit-.
    .w-selection--floatting-label .w-selection__selection:-webkit-autofill & {
      transform: translateY(-160%) scale(0.85);
    }
    // Move label with outline style or with shadow.
    .w-selection--focused.w-selection--floatting-label .w-selection__selection-wrap--box &,
    .w-selection--filled.w-selection--floatting-label .w-selection__selection-wrap--box &,
    .w-selection--has-placeholder.w-selection--floatting-label .w-selection__selection-wrap--box & {
      transform: translateY(-180%) scale(0.85);
    }
    .w-selection--focused.w-selection--floatting-label.w-selection--inner-icon-left &,
    .w-selection--filled.w-selection--floatting-label.w-selection--inner-icon-left & {left: 0;}
    // Chrome & Safari - Must remain in a separated rule as Firefox discard the whole rule seeing -webkit-.
    .w-selection--floatting-label.w-selection--inner-icon-left .w-selection__selection:-webkit-autofill & {left: 0;}

    .w-selection--focused & {color: currentColor;}
  }
}
</style>
