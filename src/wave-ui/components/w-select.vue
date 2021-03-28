<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: selectionString, disabled: isDisabled, readonly: isReadonly }"
  v-model:valid="valid"
  @reset="onReset"
  :class="classes")
  template(v-if="labelPosition === 'left'")
    label.w-select__label.w-select__label--left.w-form-el-shakable(v-if="$slots.default" :for="`w-select--${_.uid}`")
      slot
    label.w-select__label.w-select__label--left.w-form-el-shakable(v-else-if="label" :for="`w-select--${_.uid}`" v-html="label")

  w-menu(
    v-model="showMenu"
    :menu-class="`w-select__menu ${menuClass || ''}`"
    transition="slide-fade-down"
    :detach-to="(menuProps || {}).detachTo !== undefined ? (menuProps || {}).detachTo : '.w-app'"
    align-left
    custom
    min-width="activator"
    v-bind="menuProps || {}")
    template(#activator="{ on }")
      //- Input wrapper.
      .w-select__selection-wrap(
        ref="selection-wrap"
        @click="!isDisabled && !isReadonly && openMenu()"
        role="button"
        aria-haspopup="listbox"
        :aria-expanded="showMenu ? 'true' : 'false'"
        :aria-owns="`w-select-menu--${_.uid}`"
        :aria-activedescendant="`w-select-menu--${_.uid}_item-1`"
        :class="inputWrapClasses")
        w-icon.w-select__icon.w-select__icon--inner-left(
          v-if="innerIconLeft"
          tag="label"
          :for="`w-select--${_.uid}`"
          @click="$emit('click:inner-icon-left', $event)") {{ innerIconLeft }}
        .w-select__selection-slot(v-if="$slots.selection")
          //- inputValue is always an array.
          slot(name="selection" :item="multiple ? inputValue : inputValue[0]")
        input.w-select__selection(
          ref="selection-input"
          type="text"
          :value="$slots.selection ? '' : selectionString"
          @focus="!isDisabled && !isReadonly && onFocus($event)"
          @blur="onBlur"
          @keydown="!isDisabled && !isReadonly && onKeydown($event)"
          :id="`w-select--${_.uid}`"
          :placeholder="(!$slots.selection && placeholder) || null"
          :disabled="isDisabled || null"
          readonly
          aria-readonly="true"
          :required="required || null"
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
            :for="`w-select--${_.uid}`"
            :class="isFocused && { [valid === false ? 'error' : color]: color || valid === false }")
            slot
          label.w-select__label.w-select__label--inside.w-form-el-shakable(
            v-else-if="label"
            :for="`w-select--${_.uid}`"
            v-html="label"
            :class="isFocused && { [valid === false ? 'error' : color]: color || valid === false }")
        w-icon.w-select__icon.w-select__icon--inner-right(
          v-if="innerIconRight"
          tag="label"
          :for="`w-select--${_.uid}`"
          @click="$emit('click:inner-icon-right', $event)") {{ innerIconRight }}
    w-list(
      ref="w-list"
      :model-value="inputValue"
      @update:model-value="onInput"
      @item-click="$emit('item-click', $event)"
      @item-select="onListItemSelect"
      @keydown:enter="noUnselect && !multiple && closeMenu()"
      @keydown:escape="closeMenu"
      :items="selectItems"
      :multiple="multiple"
      arrows-navigation
      return-object
      :add-ids="`w-select-menu--${_.uid}`"
      :no-unselect="noUnselect"
      :selection-color="selectionColor"
      role="listbox"
      tabindex="-1")
      template(#item="{ item, selected, index }")
        slot(name="item" :item="item" :selected="selected" :index="index") {{ item[itemLabelKey] }}

  template(v-if="labelPosition === 'right'")
    label.w-select__label.w-select__label--right.w-form-el-shakable(v-if="$slots.default" :for="`w-select--${_.uid}`")
      slot
    label.w-select__label.w-select__label--right.w-form-el-shakable(v-else-if="label" :for="`w-select--${_.uid}`" v-html="label")
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
    modelValue: {}, // v-model on selected item if any.
    multiple: { type: Boolean },
    placeholder: { type: String },
    label: { type: String },
    labelPosition: { type: String, default: 'inside' },
    innerIconLeft: { type: String },
    innerIconRight: { type: String, default: 'wi-triangle-down' },
    // When label is inside, allows to move the label above on focus or when filled.
    staticLabel: { type: Boolean },
    itemLabelKey: { type: String, default: 'label' }, // Name of the label field.
    itemValueKey: { type: String, default: 'value' }, // Name of the value field.
    itemClass: { type: String },
    menuClass: { type: String },
    color: { type: String, default: 'primary' }, // Applies to all the items.
    selectionColor: { type: String, default: 'primary' }, // Applies to the selected items only.
    bgColor: { type: String }, // Applies to all the items.
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    dark: { type: Boolean },
    returnObject: { type: Boolean },
    // By default you can unselect a list item by re-selecting it.
    // Allow preventing that on single selection lists only.
    noUnselect: { type: Boolean },
    menuProps: { type: Object }
    // Props from mixin: name, disabled, readonly, required, validators.
    // Computed from mixin: inputName, isDisabled & isReadonly.
  },

  emits: ['input', 'update:modelValue', 'focus', 'blur', 'item-click', 'item-select', 'click:inner-icon-left', 'click:inner-icon-right'],

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
        obj.value = obj[this.itemValueKey] === undefined ? obj[this.itemLabelKey] || i : obj[this.itemValueKey]
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
        item => item[this.itemValueKey] !== undefined ? item[this.itemLabelKey] : (item[this.itemLabelKey] !== undefined ? item[this.itemLabelKey] : item)
      ).join(', ')
    },
    classes () {
      return {
        'w-select': true,
        'w-select--disabled': this.isDisabled,
        'w-select--readonly': this.isReadonly,
        [`w-select--${this.hasValue ? 'filled' : 'empty'}`]: true,
        'w-select--focused': this.isFocused,
        'w-select--dark': this.dark,
        'w-select--floating-label': this.hasLabel && this.labelPosition === 'inside' && !this.staticLabel,
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
      this.isFocused = true
      this.$emit('focus', e)
    },

    onBlur (e) {
      this.isFocused = false
      this.$emit('blur', e)
    },

    onKeydown (e) {
      if ([13, 27, 38, 40].includes(e.keyCode)) e.preventDefault()

      if (e.keyCode === 27) this.closeMenu() // Escape.
      else if (e.keyCode === 13) this.openMenu() // Enter.

      // Up & down arrows.
      else if ([38, 40].includes(e.keyCode)) {
        if (this.multiple) this.openMenu()
        else {
          // Get the first selected item index.
          let { index } = this.inputValue[0] || {} // Always an object containing index & value.
          const items = this.selectItems

          // If no selection, select the first or last item (down or up arrow).
          if (index === undefined) index = e.keyCode === 38 ? items.length - 1 : 0

          // Otherwise select the previous or next item.
          else {
            const direction = e.keyCode === 38 ? -1 : 1 // Prev or next.
            // Circle through the array of items (prev/next), and reloop when out of range.
            index = (index + items.length + direction) % items.length
          }

          this.onInput(items[index])
        }
      }
    },

    // The items are given by the w-list component.
    onInput (items) {
      this.inputValue = items === null ? [] : (this.multiple ? items : [items])
      // Return the original items when returnObject is true (no `value` if there wasn't),
      // or the the item value otherwise.
      items = this.inputValue.map(item => this.returnObject ? this.items[item.index] : item.value)

      // If single selection, close the menu after selecting a value (keyboard selection).
      if (!this.multiple) this.closeMenu()

      // Emit the selection to the v-model.
      // Note: this.inputValue is always an array of objects that have a `value`.
      const selection = this.multiple ? items : items[0]
      this.$emit('update:modelValue', selection)
      this.$emit('input', selection)
    },

    onListItemSelect (e) {
      this.$emit('item-select', e)
      // Close menu when clicking a selected item.
      if (this.noUnselect && !this.multiple) this.closeMenu()
    },

    onReset () {
      this.inputValue = []
      // Emit the selection to the v-model.
      // Note: this.inputValue is always an array of objects that have a `value`.
      const selection = this.multiple ? [] : null
      this.$emit('update:modelValue', selection)
      this.$emit('input', selection)
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
          value = item[this.itemValueKey] !== undefined ? item[this.itemValueKey] : (item[this.itemLabelKey] !== undefined ? item[this.itemLabelKey] : item)
        }

        return this.selectItems[allValues.indexOf(value)]
      }).filter(item => item !== undefined)
    },

    // Open the dropdown selection list.
    openMenu () {
      this.showMenu = true
      // Set the focus on the first option.
      setTimeout(() => {
        const itemIndex = this.inputValue.length ? this.inputValue[0].index : 0 // Real index starts at 0.
        // User visible index starts at 1.
        this.$refs['w-list'].$el.querySelector(`#w-select-menu--${this._.uid}_item-${itemIndex + 1}`).focus()
      }, 100)
    },

    // Close the dropdown selection list.
    closeMenu () {
      if ((this.menuProps || {}).hideOnMenuClick === false) return

      this.showMenu = false
      // Set the focus back on the main w-select input.
      setTimeout(() => this.$refs['selection-input'].focus(), 50)
    }
  },

  created () {
    this.inputValue = this.checkSelection(this.modelValue)
  },

  watch: {
    modelValue (value) {
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
    min-height: $form-field-height; // Min-height to allow multiple lines.
    border-radius: $border-radius;
    border: $border;
    transition: border $transition-duration;

    &--tile {border-radius: initial;}
    &--shadow {box-shadow: $box-shadow;}
    .w-select[class^="bdrs"] &, .w-select[class*=" bdrs"] & {border-radius: inherit;}

    .w-select--floating-label & {margin-top: 3 * $base-increment;}

    &--underline {
      border-bottom-left-radius: initial;
      border-bottom-right-radius: initial;
      border-width: 0 0 1px;
    }

    &--round {border-radius: 9em;}

    .w-select--focused &, .w-select--open & {border-color: currentColor;}

    // Underline.
    &--underline:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 0;
      border-bottom: 2px solid currentColor;
      transition: $transition-duration;
      transform: scaleX(0);
      pointer-events: none;
    }

    .w-select--focused &--underline:after,
    .w-select--open &--underline:after {transform: scaleX(1);}
    &--round.w-select__selection-wrap--underline:after {
      border-radius: 9em;
      transition: $transition-duration, height 0.035s;
    }
    .w-select--focused &--round.w-select__selection-wrap--underline:after,
    .w-select--open &--round.w-select__selection-wrap--underline:after {
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

    .w-select__selection-slot + & {
      position: absolute;
      top: 0;
      left: 0;
    }
    .w-select--no-padding & {
      padding-left: 0;
      padding-right: 0;
    }

    .w-select__selection-wrap--round & {
      padding-left: 3 * $base-increment;
      padding-right: 3 * $base-increment;
    }

    .w-select--inner-icon-left & {padding-left: 27px;}
    &-slot, .w-select--inner-icon-right & {padding-right: 22px;}

    .w-select--disabled & {
      color: $disabled-color;
      cursor: not-allowed;
      -webkit-tap-highlight-color: transparent;
    }

    .w-select--disabled input::placeholder {color: inherit;}

    .w-select--readonly & {cursor: auto;}
  }

  &__selection-slot {
    z-index: 1;
    pointer-events: none;
  }

  // Icons inside.
  // ------------------------------------------------------
  &__icon {
    position: absolute;
    font-size: 1.4em;

    .w-select--focused &, .w-select--open & {color: currentColor;}

    .w-select--disabled &,
    .w-select--readonly & {
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
    .w-select--open.w-select--floating-label &,
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
    .w-select--open.w-select--floating-label .w-select__selection-wrap--box &,
    .w-select--filled.w-select--floating-label .w-select__selection-wrap--box &,
    .w-select--has-placeholder.w-select--floating-label .w-select__selection-wrap--box & {
      transform: translateY(-180%) scale(0.85);
    }
    .w-select--focused.w-select--floating-label.w-select--inner-icon-left &,
    .w-select--open.w-select--floating-label.w-select--inner-icon-left &,
    .w-select--filled.w-select--floating-label.w-select--inner-icon-left & {left: 0;}
    // Chrome & Safari - Must remain in a separated rule as Firefox discard the whole rule seeing -webkit-.
    .w-select--floating-label.w-select--inner-icon-left .w-select__select:-webkit-autofill & {left: 0;}

    .w-select--focused &, .w-select--open & {color: currentColor;}
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

    .w-list {width: 100%;}
  }
}
</style>
