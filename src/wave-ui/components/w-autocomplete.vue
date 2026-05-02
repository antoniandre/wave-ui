<template lang="pug">
component(
  ref="formEl"
  :is="formRegister ? 'w-form-element' : 'div'"
  v-bind="formRegister && { validators, inputValue: selectionValue, disabled: isDisabled, readonly: isReadonly, isFocused, noBlurValidation }"
  v-model:valid="valid"
  @reset="onReset"
  :wrap="hasLabel && labelPosition !== 'inside'"
  :class="classes"
  :style="$attrs.style")
  template(v-if="labelPosition === 'left'")
    label.w-autocomplete__label.w-autocomplete__label--left.w-form-el-shakable(
      v-if="$slots.default || label"
      :for="inputId"
      :class="labelClasses")
      slot {{ label }}

  w-menu(
    v-model="menuOpen"
    @close="onMenuClose"
    :menu-class="`w-autocomplete__menu${menuClass ? ' ' + menuClass : ''}`"
    transition="slide-fade-down"
    :append-to="menuPropsComputed.appendTo"
    align-left
    custom
    min-width="activator"
    v-bind="menuPropsComputed")
    template(#activator)
      .w-autocomplete__input-wrap(
        @click="!isDisabled && !isReadonly && onWrapClick()"
        :class="inputWrapClasses")
        slot(name="icon-left")
          w-icon.w-autocomplete__icon.w-autocomplete__icon--inner-left(
            v-if="innerIconLeft"
            tag="label"
            :for="inputId"
            @click.stop="$emit('click:inner-icon-left', $event)") {{ innerIconLeft }}

        template(v-if="selection.length")
          .w-autocomplete__selection(v-for="(item, i) in selection" :key="item.uid")
            slot(name="selection" :item="item" :unselect="() => unselectItem(i)")
              span(v-html="item[itemLabelKey]")
              w-button(@click.stop="unselectItem(i)" icon="wi-cross" xs text color="currentColor")

        .w-autocomplete__placeholder(
          v-if="!selection.length && !keywords && placeholder && !showFloatingLabel"
          v-html="placeholder")

        input.w-autocomplete__input(
          ref="input"
          :id="inputId"
          :value="keywords"
          :name="inputName"
          :disabled="isDisabled || null"
          :readonly="isReadonly || null"
          :tabindex="tabindex || null"
          v-on="inputEventListeners"
          v-bind="inputAttrs")

        template(v-if="labelPosition === 'inside' && showLabelInside")
          label.w-autocomplete__label.w-autocomplete__label--inside.w-form-el-shakable(
            v-if="$slots.default || label"
            :for="inputId"
            :class="labelClasses")
            slot {{ label }}

        slot(name="icon-right")
          w-icon.w-autocomplete__icon.w-autocomplete__icon--inner-right(
            v-if="innerIconRight"
            tag="label"
            :for="inputId"
            @click.stop="$emit('click:inner-icon-right', $event)") {{ innerIconRight }}

    ul.w-autocomplete__list(
      ref="list"
      @mousedown="menuIsBeingClicked = true"
      @mouseup="setEndOfMenuClick"
      @touchstart="menuIsBeingClicked = true"
      @touchend="setEndOfMenuClick")
      li(
        v-for="(item, i) in filteredItems"
        :key="item.uid"
        @click.stop="onItemClick(item)"
        :class="{ highlighted: highlightedItem === item.uid }")
        slot(name="item" :item="item" :highlighted="highlightedItem === item.uid")
          span(v-html="item[itemLabelKey]")
      li.w-autocomplete__no-match(
        v-if="!filteredItems.length"
        :class="{ 'w-autocomplete__no-match--default': !$slots['no-match'] }")
        slot(name="no-match")
          .caption(v-html="noMatch ?? 'No match.'")
      li.w-autocomplete__extra-item(
        v-if="$slots['extra-item']"
        @click.stop="selectExtraItem"
        :class="{ highlighted: highlightedItem === 'extra-item' }")
        slot(name="extra-item")

  template(v-if="labelPosition === 'right'")
    label.w-autocomplete__label.w-autocomplete__label--right.w-form-el-shakable(
      v-if="$slots.default || label"
      :for="inputId"
      :class="labelClasses")
      slot {{ label }}
</template>

<script>
import { computed } from 'vue'
import FormElementMixin, { useWaveUiFormIds } from '../mixins/form-elements'

export default {
  name: 'w-autocomplete',
  mixins: [FormElementMixin],
  inheritAttrs: false,

  setup () {
    return useWaveUiFormIds()
  },

  props: {
    items: { type: Array, required: true },
    modelValue: { type: [String, Number, Array] },
    placeholder: { type: String },
    label: { type: String },
    labelPosition: { type: String, default: 'inside' },
    staticLabel: { type: Boolean },
    innerIconLeft: { type: String },
    innerIconRight: { type: String },
    openOnKeydown: { type: Boolean },
    multiple: { type: Boolean },
    allowDuplicates: { type: Boolean },
    noMatch: { type: String },
    itemValueKey: { type: String, default: 'value' },
    itemLabelKey: { type: String, default: 'label' },
    itemSearchableKey: { type: String, default: 'searchable' },
    color: { type: String, default: 'primary' },
    bgColor: { type: String },
    labelColor: { type: String, default: 'primary' },
    outline: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean },
    fitToContent: { type: Boolean },
    menuClass: { type: String },
    menuProps: { type: Object }
    // From mixin: id, name, disabled, readonly, required, tabindex, validators, noBlurValidation.
    // Computed from mixin: inputId, inputName, isDisabled, isReadonly, labelClasses.
  },

  emits: [
    'update:modelValue', 'input', 'focus', 'blur', 'keydown',
    'item-click', 'item-select', 'extra-item-select',
    'click:inner-icon-left', 'click:inner-icon-right'
  ],

  data: () => ({
    keywords: '',
    selection: [],
    menuOpen: false,
    highlightedItem: null,
    isFocused: false,
    menuIsBeingClicked: false
  }),

  computed: {
    normalizedKeywords () {
      return this.normalize(this.keywords)
    },

    optimizedItemsForSearch () {
      return this.items.map((item, i) => ({
        ...item,
        uid: i,
        searchable: this.normalize(item[this.itemSearchableKey] || item[this.itemLabelKey] || '')
      }))
    },

    filteredItems () {
      let items = this.optimizedItemsForSearch
      const isItemNotSelected = item => !this.selection.find(s => s.uid === item.uid)

      if (this.keywords) {
        items = items.filter(item => {
          if (!item.searchable.includes(this.normalizedKeywords)) return false
          if (this.multiple && !this.allowDuplicates) return isItemNotSelected(item)
          return true
        })
      }
      else if (this.multiple && !this.allowDuplicates) items = items.filter(isItemNotSelected)

      return items
    },

    highlightedItemIndex () {
      if (this.highlightedItem === null) return -1
      if (this.highlightedItem === 'extra-item') return this.filteredItems.length
      return this.filteredItems.findIndex(item => item.uid === this.highlightedItem)
    },

    hasValue () {
      return this.selection.length > 0 || !!this.keywords
    },

    hasLabel () {
      return !!(this.label || this.$slots.default)
    },

    showFloatingLabel () {
      return this.hasLabel && this.labelPosition === 'inside' && !this.staticLabel
    },

    showLabelInside () {
      return !this.staticLabel || (!this.hasValue && !this.placeholder)
    },

    selectionValue () {
      if (!this.selection.length) return null
      if (this.multiple) return this.selection.map(item => item[this.itemValueKey])
      return this.selection[0][this.itemValueKey]
    },

    presetSize () {
      return (this.xs && 'xs') || (this.sm && 'sm') || (this.md && 'md') || (this.lg && 'lg') || (this.xl && 'xl') || null
    },

    menuPropsComputed () {
      const { appendTo, ...rest } = this.menuProps || {}
      return { appendTo, ...rest }
    },

    classes () {
      return {
        'w-autocomplete': true,
        'w-autocomplete--dark': this.dark,
        'w-autocomplete--light': this.light,
        'w-autocomplete--disabled': this.isDisabled,
        'w-autocomplete--readonly': this.isReadonly,
        'w-autocomplete--fit-to-content': this.fitToContent,
        [`w-autocomplete--${this.hasValue ? 'filled' : 'empty'}`]: true,
        'w-autocomplete--focused': (this.isFocused || this.menuOpen) && !this.isReadonly,
        'w-autocomplete--floating-label': this.showFloatingLabel,
        'w-autocomplete--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round,
        'w-autocomplete--has-placeholder': !!this.placeholder,
        'w-autocomplete--inner-icon-left': !!this.innerIconLeft,
        'w-autocomplete--inner-icon-right': !!this.innerIconRight,
        'w-autocomplete--open': this.menuOpen,
        'w-autocomplete--multiple': this.multiple,
        [`size--${this.presetSize}`]: !!this.presetSize,
        [this.$attrs.class]: !!this.$attrs.class
      }
    },

    inputWrapClasses () {
      return {
        [this.valid === false ? this.validationColor : this.color]: this.color || this.valid === false,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-autocomplete__input-wrap--round': this.round,
        'w-autocomplete__input-wrap--tile': this.tile,
        'w-autocomplete__input-wrap--box': this.outline || this.bgColor || this.shadow,
        'w-autocomplete__input-wrap--underline': !this.outline,
        'w-autocomplete__input-wrap--shadow': this.shadow,
        'w-autocomplete__input-wrap--no-padding': !this.outline && !this.bgColor && !this.shadow && !this.round
      }
    },

    inputAttrs () {
      // eslint-disable-next-line no-unused-vars
      const { style, class: classes, ...attrs } = this.$attrs
      return attrs
    },

    inputEventListeners () {
      return {
        input: e => {
          this.keywords = e.target.value
        },
        focus: e => {
          if (this.menuIsBeingClicked) return
          this.isFocused = true
          if (!this.openOnKeydown) this.openMenu()
          this.$emit('focus', e)
        },
        blur: e => {
          if (this.menuIsBeingClicked) return
          this.isFocused = false
          this.$emit('blur', e)
        },
        keydown: e => {
          this.onKeydown(e)
          this.$emit('keydown', e)
        },
        drop: this.onDrop,
        compositionstart: this.onCompositionStart,
        compositionupdate: this.onCompositionUpdate
      }
    }
  },

  methods: {
    normalize (string) {
      return String(string).toLowerCase().normalize('NFKD').replace(/\p{Diacritic}/gu, '').replace(/œ/g, 'oe')
    },

    findItemByValue (value) {
      return this.optimizedItemsForSearch.find(
        item => item[this.itemValueKey] === value || String(item[this.itemValueKey]) === String(value)
      )
    },

    selectItem (item) {
      if (!this.multiple) this.selection = []
      this.selection.push(item)
      this.highlightedItem = item.uid
      this.keywords = ''
      const emitPayload = this.multiple
        ? this.selection.map(i => i[this.itemValueKey])
        : item[this.itemValueKey]
      this.$emit('item-select', item)
      this.$emit('update:modelValue', emitPayload)
      this.$emit('input', emitPayload)
      this.$nextTick(() => this.$refs.input?.focus())
      if (!this.multiple) this.closeMenu()
    },

    unselectItem (i) {
      this.selection.splice(i ?? this.selection.length - 1, 1)
      this.highlightedItem = null
      const emitPayload = this.multiple
        ? (this.selection.length ? this.selection.map(item => item[this.itemValueKey]) : null)
        : null
      this.$emit('update:modelValue', emitPayload)
      this.$emit('input', emitPayload)
      this.$nextTick(() => this.$refs.input?.focus())
    },

    selectExtraItem () {
      this.keywords = ''
      this.$emit('extra-item-select')
      this.closeMenu()
    },

    onItemClick (item) {
      this.selectItem(item)
      this.$emit('item-click', item)
    },

    setEndOfMenuClick () {
      setTimeout(() => (this.menuIsBeingClicked = false), 100)
    },

    onWrapClick () {
      if (!this.openOnKeydown) this.openMenu()
      this.$refs.input?.focus()
    },

    onKeydown (e) {
      const itemsCount = this.filteredItems.length + (this.$slots['extra-item'] ? 1 : 0)

      if (!this.openOnKeydown || ((this.keywords || e.key.length === 1) && !this.menuOpen)) this.openMenu()

      // Tab key - close menu.
      if (e.keyCode === 9) this.closeMenu()

      // Backspace - unselect last chip when input is empty.
      else if (e.keyCode === 8 && (!this.keywords || (!e.target.selectionStart && !e.target.selectionEnd))) {
        this.unselectItem()
      }

      // Enter key.
      else if (e.keyCode === 13) {
        e.preventDefault()
        if (this.highlightedItem === 'extra-item') this.selectExtraItem()
        else if (this.highlightedItemIndex >= 0) this.selectItem(this.filteredItems[this.highlightedItemIndex])
      }

      // Up & down arrow keys.
      else if ([38, 40].includes(e.keyCode)) {
        e.preventDefault()
        let index = this.highlightedItemIndex
        if (index === -1) index = e.keyCode === 38 ? itemsCount - 1 : 0
        else index = (index + (e.keyCode === 38 ? -1 : 1) + itemsCount) % itemsCount

        if (this.$slots['extra-item'] && index === itemsCount - 1) this.highlightedItem = 'extra-item'
        else this.highlightedItem = this.filteredItems[index]?.uid ?? 0

        // Scroll the menu list if highlighted item is not in view.
        const listEl = this.$refs.list
        if (listEl) {
          if (this.$slots['extra-item'] && index === itemsCount - 1) listEl.scrollTop = listEl.scrollHeight
          else {
            const { offsetHeight: itemElHeight, offsetTop: itemElTop } = listEl.childNodes[index] || {}
            if (listEl.scrollTop + listEl.offsetHeight - itemElHeight < itemElTop) {
              listEl.scrollTop = itemElTop - listEl.offsetHeight + itemElHeight
            }
            else if (listEl.scrollTop > itemElTop) listEl.scrollTop = itemElTop
          }
        }
      }

      // Prevent typing when single selection is already filled.
      else if (!this.multiple && this.selection.length && e.key.length === 1) e.preventDefault()
    },

    onDrop (e) {
      if (!this.multiple && this.selection.length) e.preventDefault()
    },

    onCompositionStart (e) {
      if (!this.multiple && this.selection.length) e.target.setAttribute('readonly', true)
    },

    onCompositionUpdate (e) {
      if (!this.multiple && this.selection.length) setTimeout(() => e.target.removeAttribute('readonly'), 200)
    },

    onReset () {
      this.selection = []
      this.keywords = ''
      this.highlightedItem = null
      const emitPayload = this.multiple ? [] : null
      this.$emit('update:modelValue', emitPayload)
      this.$emit('input', emitPayload)
    },

    openMenu () {
      if (this.menuOpen || this.isDisabled || this.isReadonly) return
      this.menuOpen = true
    },

    closeMenu () {
      if (!this.menuOpen) return
      this.menuOpen = false
      this.highlightedItem = null
    },

    // Called when the w-menu emits @close (outside click or programmatic close).
    onMenuClose () {
      this.menuOpen = false
      this.highlightedItem = null
    }
  },

  created () {
    if (this.modelValue !== null && this.modelValue !== undefined) {
      const arrayOfValues = Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue]
      arrayOfValues.forEach(value => {
        const item = this.findItemByValue(value)
        if (item) this.selection.push(item)
      })
    }
  },

  watch: {
    modelValue (value) {
      this.selection = []
      if (value !== null && value !== undefined) {
        const arrayOfValues = Array.isArray(value) ? value : [value]
        arrayOfValues.forEach(v => {
          const item = this.findItemByValue(v)
          if (item) this.selection.push(item)
        })
      }
    },

    items () {
      // Re-sync selection when items change (e.g. async loading).
      const currentValues = this.selection.map(item => item[this.itemValueKey])
      this.selection = []
      currentValues.forEach(value => {
        const item = this.findItemByValue(value)
        if (item) this.selection.push(item)
      })
    }
  }
}
</script>

<style lang="scss">
.w-autocomplete {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  font-size: var(--w-base-font-size);

  @include themeable;

  &--disabled {
    color: var(--w-disabled-color);
    cursor: not-allowed;
    -webkit-tap-highlight-color: transparent;
  }

  &--fit-to-content {
    display: inline-flex;
    flex-grow: 0;
  }

  // Input field wrapper.
  // ------------------------------------------------------
  &__input-wrap {
    position: relative;
    display: inline-flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    min-height: var(--w-form-field-height);
    padding: 3px calc(var(--w-base-increment) * 2);
    border-radius: var(--w-border-radius);
    border: var(--w-border);
    transition: border var(--w-transition-duration);
    cursor: text;

    &--tile { border-radius: initial; }
    &--shadow { box-shadow: var(--w-box-shadow); }
    .w-autocomplete[class^="bdrs"] &, .w-autocomplete[class*=" bdrs"] & { border-radius: inherit; }

    .w-autocomplete--floating-label & { margin-top: calc(var(--w-base-increment) * 3); }

    &--underline {
      border-bottom-left-radius: initial;
      border-bottom-right-radius: initial;
      border-width: 0 0 1px;
    }

    &--round { border-radius: 99em; }

    .w-autocomplete--focused &,
    .w-autocomplete--open & { border-color: currentColor; }

    // Focus indicator line (underline style).
    &--underline:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 0;
      border-bottom: 2px solid currentColor;
      transition: var(--w-transition-duration);
      transform: scaleX(0);
      pointer-events: none;
    }

    .w-autocomplete--focused &--underline:after,
    .w-autocomplete--open &--underline:after { transform: scaleX(1); }

    &--round.w-autocomplete__input-wrap--underline:after {
      border-radius: 99em;
      transition: var(--w-transition-duration), height 0.035s;
    }

    .w-autocomplete--focused &--round.w-autocomplete__input-wrap--underline:after,
    .w-autocomplete--open &--round.w-autocomplete__input-wrap--underline:after {
      height: 100%;
      transition: var(--w-transition-duration), height 0s calc(var(--w-transition-duration) - 0.035s);
    }

    &--no-padding {
      padding-left: 0;
      padding-right: 0;
    }
  }

  // Selected item chips (multiple mode).
  // ------------------------------------------------------
  &__selection {
    display: inline-flex;
    align-items: center;
    background: color-mix(in srgb, var(--w-contrast-bg-color) 3.5%, transparent);
    border: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 5%, transparent);
    border-radius: var(--w-border-radius);
    padding: 0 2px 0 6px;
    flex-shrink: 0;
    line-height: 1;

    span {
      font-size: 0.875em;
      margin-top: -1px;
    }

    .w-button .w-icon:before {
      font-size: 0.8em;
      line-height: 0;
    }
  }

  // Placeholder.
  // ------------------------------------------------------
  &__placeholder {
    color: color-mix(in srgb, var(--w-base-color) 50%, transparent);
    pointer-events: none;
    white-space: nowrap;
    align-self: center;
  }

  // The text input.
  // ------------------------------------------------------
  &__input {
    flex: 1 1 60px;
    min-width: 0;
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    // Ensure the input takes up a comfortable height in the flex row.
    min-height: calc(var(--w-form-field-height) - 8px);
    align-self: center;

    .w-autocomplete--disabled & {
      color: var(--w-disabled-color);
      cursor: not-allowed;
      -webkit-tap-highlight-color: transparent;
    }

    .w-autocomplete--readonly & { pointer-events: none; }
  }

  // Icons inside.
  // ------------------------------------------------------
  &__icon {
    position: absolute;
    font-size: 1.4em;
    cursor: pointer;
    border-radius: 5em;
    @include default-transition;

    .w-autocomplete--focused &,
    .w-autocomplete--open & { color: currentColor; }

    .w-autocomplete--disabled &,
    .w-autocomplete--readonly & {
      color: var(--w-disabled-color);
      cursor: not-allowed;
      -webkit-tap-highlight-color: transparent;
    }

    &--inner-left { left: var(--w-base-increment); }
    &--inner-right { right: var(--w-base-increment); }

    .w-autocomplete--no-padding &--inner-left { left: 1px; }
    .w-autocomplete--no-padding &--inner-right { right: 1px; }

    &:hover { background: rgba(0, 0, 0, 0.05); }

    .w-autocomplete--disabled &:hover,
    .w-autocomplete--readonly &:hover { background-color: transparent; }
  }

  &--inner-icon-left &__input-wrap { padding-left: 28px; }
  &--inner-icon-right &__input-wrap { padding-right: 28px; }
  &--no-padding.w-autocomplete--inner-icon-left &__input-wrap { padding-left: 22px; }
  &--no-padding.w-autocomplete--inner-icon-right &__input-wrap { padding-right: 22px; }

  // Label.
  // ------------------------------------------------------
  &__label {
    display: flex;
    align-items: center;
    transition: color var(--w-transition-duration);
    cursor: pointer;
    user-select: none;

    &--left { margin-right: calc(var(--w-base-increment) * 2); }
    &--right { margin-left: calc(var(--w-base-increment) * 2); }

    .w-autocomplete--disabled & {
      color: var(--w-disabled-color);
      cursor: not-allowed;
      -webkit-tap-highlight-color: transparent;
    }

    .w-autocomplete--readonly.w-autocomplete--empty & {
      opacity: 0.5;
      cursor: auto;
    }
  }

  &__label--inside {
    position: absolute;
    inset: 0 0 auto;
    min-height: inherit;
    white-space: nowrap;
    margin-left: calc(var(--w-base-increment) * 2);
    display: flex;
    align-items: center;
    pointer-events: none;

    .w-autocomplete--no-padding & {
      left: 0;
      margin-left: 0;
    }

    .w-autocomplete__input-wrap--round & {
      margin-left: calc(var(--w-base-increment) * 3);
    }

    .w-autocomplete--inner-icon-left & { left: 18px; }
    .w-autocomplete--no-padding.w-autocomplete--inner-icon-left & { left: 26px; }
    .w-autocomplete--inner-icon-right & { padding-right: 26px; }

    .w-autocomplete--floating-label & {
      transform-origin: 0 50%;
      transition: var(--w-transition-duration) ease;
    }

    // Float the label up when focused, filled or has placeholder.
    .w-autocomplete--focused.w-autocomplete--floating-label &,
    .w-autocomplete--filled.w-autocomplete--floating-label &,
    .w-autocomplete--has-placeholder.w-autocomplete--floating-label & {
      transform: translateY(-80%) scale(0.85);
    }

    .w-autocomplete--focused.w-autocomplete--floating-label.w-autocomplete--inner-icon-left &,
    .w-autocomplete--filled.w-autocomplete--floating-label.w-autocomplete--inner-icon-left & { left: 0; }
  }

  // Sizes.
  // ------------------------------------------------------
  &.size--xs { --w-form-field-height: round(nearest, calc(1.43 * var(--w-base-font-size)), 1px); }
  &.size--sm { --w-form-field-height: round(nearest, calc(1.71 * var(--w-base-font-size)), 1px); }
  &.size--lg { --w-form-field-height: round(nearest, calc(2.29 * var(--w-base-font-size)), 1px); }
  &.size--xl { --w-form-field-height: round(nearest, calc(2.71 * var(--w-base-font-size)), 1px); }

  // Dropdown menu (rendered via w-menu, outside overflow:hidden parents).
  // ------------------------------------------------------
  &__menu {
    overflow: hidden;
    background-color: var(--w-base-bg-color);
    border: var(--w-border);
    border-radius: var(--w-border-radius);
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 4px 0;
    max-height: 300px;
    overflow: auto;

    li {
      position: relative;
      list-style-type: none;
      margin: 0;
      padding: 6px 12px;
      cursor: pointer;

      &:hover { background-color: color-mix(in srgb, var(--w-primary-color) 10%, transparent); }

      &:before, &:after {
        content: '';
        position: absolute;
        inset: 0;
      }

      &.highlighted:before {
        border-left: 2px solid var(--w-primary-color);
        opacity: 0.3;
      }

      &.highlighted:after {
        background-color: var(--w-primary-color);
        opacity: 0.1;
      }
    }
  }

  &__no-match {
    cursor: default;

    &--default:hover { background-color: transparent !important; }
  }

  &__extra-item {
    border-top: var(--w-border);
  }
}
</style>
