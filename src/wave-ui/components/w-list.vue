<template lang="pug">
ul.w-list(:class="classes")
  li.w-list__item(
    v-for="(li, i) in listItems"
    :key="i"
    :class="{ 'w-list__item--parent': (li.children || []).length }")
    w-icon.w-list__item-bullet(v-if="icon") {{ icon }}

    component.w-list__item-label(
      v-if="$slots[`item.${i + 1}`] || $slots.item || $slots.default"
      :is="checklist ? 'w-checkbox' : (nav && !li.disabled && li.route ? (hasRouter ? 'router-link' : 'a') : 'div')"
      v-bind="liLabelProps(li, i, li._selected)")
      slot(v-if="$slots[`item.${i + 1}`]" :name="`item.${i + 1}`" :item="cleanLi(li)" :index="i" :selected="li._selected")
      slot(v-else-if="$slots.item" name="item" :item="cleanLi(li)" :index="i" :selected="li._selected")
      slot(v-else :item="cleanLi(li)" :index="i" :selected="li._selected") {{ li._label }}
    component.w-list__item-label(
      v-else
      :is="checklist ? 'w-checkbox' : (nav && !li.disabled && li.route ? (hasRouter ? 'router-link' : 'a') : 'div')"
      v-bind="liLabelProps(li, i, li._selected)"
      v-html="li._label")

    //- Children.
    w-list(
      v-if="(li.children || []).length"
      v-bind="$props"
      :items="li.children"
      :depth="depth + 1"
      @update:model-value="$emit('update:modelValue', $event)",
      @input="$emit('input', $event)",
      @change="$emit('change', $event)",
      @item-click="$emit('item-click', $event)")
      //- template(#item.x="{ item, index, selected }")
        slot(v-if="$slots[`item.${i + 1}`]" :name="`item.${i + 1}`" :item="cleanLi(item)" :index="index" :selected="selected")
      template(v-if="$slots.item" #item="{ item, index, selected }")
        slot(name="item" :item="cleanLi(item)" :index="index" :selected="selected")
      template(v-else #default="{ item, index, selected }")
        slot(:item="cleanLi(item)" :index="index" :selected="selected") {{ item[itemLabel] }}
</template>

<script>
export default {
  name: 'w-list',

  props: {
    items: { type: [Array, Number], required: true }, // All the possible options.
    modelValue: {}, // v-model on selected item if any.
    checklist: { type: Boolean },
    roundCheckboxes: { type: Boolean }, // Checklist option.
    // If selectable (if value !== false), this allows multiple selections.
    multiple: { type: Boolean },
    // When true, will add an id on the list and on all the list items.
    // Useful for a11y aria fields (e.g. use with w-select).
    addIds: { type: [Boolean, String] },
    hover: { type: Boolean },
    color: { type: String },
    bgColor: { type: String },
    // Navigation type adds a router-link on items with `route`.
    nav: { type: Boolean },
    icon: { type: String, default: '' },
    itemLabel: { type: String, default: 'label' }, // Name of the label field.
    itemValue: { type: String, default: 'value' }, // Name of the value field.
    itemColor: { type: String, default: 'color' }, // Support a different color per item.
    itemClass: { type: String },
    depth: { type: Number, default: 0 }, // For recursive call.
    returnObject: { type: Boolean },
    arrowsNavigation: { type: Boolean }
  },

  emits: ['input', 'update:modelValue', 'change', 'item-click', 'keydown:escape'],

  data: () => ({
    // The selected items are given in the modelValue prop.
    // But if no modelValue prop is set for checklist for instance, it has to still
    // keep track of the selected items.
    selectedItems: []
  }),

  computed: {
    hasRouter () {
      return '$router' in this
    },

    listId () {
      return this.addIds ? (typeof this.addIds === 'string' ? this.addIds : `w-list--${this._.uid}`) : null
    },

    listItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items || []
      return items.map((item, i) => {
        item = { ...item } // Don't modify the original.
        // If no value is set on the item, add one from its label, or from its index. the result is
        // store in a _value attribute.
        item._value = item[this.itemValue] === undefined ? item[this.itemLabel] || i : item[this.itemValue],
        item._selected = this.selectedItems.map(obj => obj._value !== undefined ? obj._value : obj).includes(item._value),
        item._label = item[this.itemLabel] || ''

        return item
      })
    },

    // Faster cached enabled items lookup.
    enabledItemsIndexes () {
      return this.listItems.filter(item => !item.disabled).map(item => item.index)
    },

    isMultipleSelect () {
      return this.multiple || this.checklist // Checklist is always multiple select.
    },

    isSelectable () {
      return this.modelValue !== undefined || this.checklist || this.nav
    },

    classes () {
      return {
        [this.color]: this.color || null,
        [`${this.bgColor}--bg`]: this.bgColor || null,
        'w-list--checklist': this.checklist,
        'w-list--navigation': this.nav,
        'w-list--icon': this.icon,
        [`w-list--child w-list--depth-${this.depth}`]: this.depth
      }
    }
  },

  methods: {
    // If object, get the item value, if none, get the item label, if none get the id.
    // If simple value, return as is.
    getItemValue (item) {
      if (item && typeof item === 'object') {
        if (item[this.itemValue] !== undefined) return item[this.itemValue]
        else return item[this.itemLabel] !== undefined ? item[this.itemLabel] : item.index
      }
      else return item
    },

    // Action of selecting 1 item.
    selectItem (item, forcedValue) {
      // Select or unselect the item.
      item._selected = forcedValue !== undefined ? forcedValue : !item._selected

      // Set the `selection` computed that emits the value to the outside world.
      if (this.isMultipleSelect) {
        const filteredItems = this.listItems.filter(item => item._selected)
        this.selectedItems = filteredItems
      }
      else this.selectedItems = item._selected ? [item] : []
      this.emitSelection()
    },

    liLabelClasses (item) {
      return {
        'w-list__item-label--disabled': item.disabled || (this.nav && !item.route && !item.children),
        'w-list__item-label--active': this.isSelectable && item._selected || null,
        'w-list__item-label--hoverable': this.hover,
        'w-list__item-label--selectable': this.isSelectable,
        [item.color]: !!item.color,
        [this.itemClass]: !!this.itemClass
      }
    },

    liLabelProps (li, index, selected) {
      // Event handlers.
      // ------------------------------------------------------
      const click = () => {
        if (!li.disabled) this.$emit('item-click', this.cleanLi(li))
      }
      // If selectable list, on mousedown select the item.
      const mousedown = this.isSelectable && (e => {
        e.stopPropagation()
        !li.disabled && this.selectItem(li)
      })
      // If selectable list, on enter key press select item.
      const keydown = this.isSelectable && (e => {
        if (!li.disabled && e.keyCode === 13) this.selectItem(li)
        // eslint-disable-next-line vue/custom-event-name-casing
        else if (e.keyCode === 27) this.$emit('keydown:escape')
        else if (this.arrowsNavigation) {
          e.preventDefault()
          if (e.keyCode === 38) this.focusPrevItem(li.index)
          if (e.keyCode === 40) this.focusNextItem(li.index)
        }
      })
      // ------------------------------------------------------

      const props = {
        class: { 'w-list__item-label': true, ...this.liLabelClasses(li) },
        tabindex: li.disabled ? null : '0',
        'aria-selected': selected ? 'true' : 'false',
        id: this.listId ? `${this.listId}_item-${index + 1}` : null,
        role: 'option'
      }

      // Checklist.
      // ------------------------------------------------------
      if (this.checklist) {
        props.modelValue = li._selected
        props.color = li[this.itemColor] || this.color
        props.round = this.roundCheckboxes
        props.disabled = li.disabled

        // if (!hasSlot) props.label = li[this.itemLabel] || false

        // The checkbox component is not fully covering the list-item-label, when clicking on list
        // item label, toggle the checkbox.
        props.onClick = e => {
          if (e.target.classList.contains('w-checkbox')) {
            this.selectItem(li)
            props.modelValue = li._selected
          }
        }
        props.onInput = value => this.selectItem(li, value)
        // @todo: on checkbox focus, focus the list item.
        // props.onFocus: e => console.log(this, e, 'on checkbox focus')
      }
      // ------------------------------------------------------

      // Navigation list.
      // Note: on enter key press, a click event is fired => this is default HTML behavior.
      // ------------------------------------------------------
      else if (this.nav) {
        const isLink = this.nav && !li.disabled && li.route
        if (isLink) {
          if (this.$router) {
            props.to = li.route
            props.onKeydown = keydown
            props.onMousedown = mousedown
            // In HTML5 history mode, Vue 3 router-link will intercept the click event so that the browser
            // doesn't try to reload the page.
            // (in Vue 2, the click event was on `nativeOn`, since in Vue 3 the component options/props
            // definitions are flattened the issue appears)
            // So in Vue 3, we can either use the custom prop and pass a default slot and create the
            // `a` link ourselves, or call preventDefault & `$router.push` directly which is done
            // internally by vue-router.
            props.onClick = e => {
              e.preventDefault()
              this.$router.push(li.route)
              click(e)
            }
          }
          else {
            props.href = li.route
            props.onClick = click
            props.onKeydown = keydown
            props.onMousedown = mousedown
          }
        }
      }
      // ------------------------------------------------------

      // Selectable simple div.
      // ------------------------------------------------------
      else if (this.isSelectable) {
        // Links are naturally tabable, add tabindex on other elements.
        if (!li.disabled) props.tabindex = 0
        props.onClick = click
        props.onKeydown = keydown
        props.onMousedown = mousedown
      }
      // ------------------------------------------------------

      return props
    },

    // Convert the received items selection to array if it is a unique value.
    // Also accept objects if returnObject is true and convert to the object's value.
    // In any case, always end up with an array of objects.
    // The values given can be (in this order) a value, a label or the index of the item.
    checkSelection (items) {
      items = Array.isArray(items) ? items : (items ? [items] : [])
      if (this.returnObject) items = items.map(this.getItemValue)

      return items
    },

    // Emit the cleaned-up selection to the v-model.
    emitSelection () {
      const items = this.selectedItems.map(item => {
        if (!this.returnObject) return item._value
        // eslint-disable-next-line no-unused-vars
        const { _value, _selected, ...Item } = item
        return Item
      })

      // `selectedItems` is always an array of items, but on set, it emits a single value if not `multiple`.
      const selection = this.isMultipleSelect ? items : (items[0] !== undefined ? items[0] : null)
      this.$emit('update:modelValue', selection)
      this.$emit('input', selection)
      this.$emit('change', selection)
    },

    focusPrevItem (index) {
      // The index of the previous item in the array of enabled items.
      index = this.enabledItemsIndexes[this.enabledItemsIndexes.indexOf(index) - 1]
      if (index === undefined) index = this.enabledItemsIndexes[this.enabledItemsIndexes.length - 1]

      this.$el.querySelector(`#${this.listId}_item-${index + 1}`).focus()
    },

    focusNextItem (index) {
      // The index of the next item in the array of enabled items.
      index = this.enabledItemsIndexes[this.enabledItemsIndexes.indexOf(index) + 1]
      if (index === undefined) index = this.enabledItemsIndexes[0]

      this.$el.querySelector(`#${this.listId}_item-${index + 1}`).focus()
    },

    cleanLi (li) {
      // eslint-disable-next-line no-unused-vars
      const { _value, _selected, _label, ...cleanLi } = li
      return cleanLi
    }
  },

  created () {
    this.selectedItems = this.checkSelection(this.modelValue)
  },

  watch: {
    modelValue (items) {
      this.selectedItems = this.checkSelection(items)
    },

    multiple (boolean) {
      // If more than 1 selection and going back to single select,
      // just keep the first selected item.
      if (!boolean) {
        const firstSelected = this.listItems.find(item => item._selected)
        this.selectedItems = firstSelected ? [firstSelected] : []
        this.emitSelection()
      }
    }
  }
}
</script>

<style lang="scss">
.w-list {
  list-style-type: none;
  margin-left: 0;
  font-size: $base-font-size;

  &--child {margin-left: 6 * $base-increment;}
  &--icon {padding-left: 8 * $base-increment;}

  &__item {margin-top: 1px;}
  &__item:first-child {margin-top: 0;}
  &--icon &__item {position: relative;}

  &__item--parent {
    flex-direction: column;
    align-items: stretch;
  }

  // List item bullet, if any.
  // --------------------------------------------
  &__item-bullet {
    position: absolute;
    right: 100%;
    margin-right: 3 * $base-increment;
    top: 0.05em;

    @-moz-document url-prefix() {
      & {top: -0.05em;}
    }

    .w-list--hoverable &,
    .w-list--selectable &,
    .w-list--checklist & {margin-top: 3 * $base-increment;}
  }

  // List item Label.
  // --------------------------------------------
  &__item-label {
    position: relative;
    padding-top: 1px;
    padding-bottom: 1px;
    display: block;

    .w-list--navigation &,
    .w-list--checklist & {
      display: flex;
      align-items: center;
    }
    &--selectable {cursor: pointer;}
    &--disabled {
      cursor: default;
      opacity: 0.3;
      user-select: none;
    }

    &--hoverable,
    &--selectable {
      padding: 2 * $base-increment;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: currentColor;
        opacity: 0;
        transition: 0.2s;
        pointer-events: none;
      }
    }

    // Hover & focus states.
    &--hoverable:hover:before,
    &--selectable:focus:before,
    &--selectable:hover:before {opacity: 0.08;}

    // Active class (when item is selected).
    &--active:before, &--active:focus:before, &--active:hover:before,
    .w-list--navigation &.router-link-exact-active:before {opacity: 0.15;}

    // Active state (while pressing key or mouse).
    &--active.w-list__item-label--hoverable:hover:before,
    &--active.w-list__item-label--selectable:focus:before,
    &--active.w-list__item-label--selectable:hover:before,
    &--selectable:active:before {opacity: 0.2;}

    // Disabled.
    &--disabled:before {display: none;}
  }
  // --------------------------------------------

  // Checklist.
  // --------------------------------------------
  &--checklist .w-checkbox__label {flex-grow: 1;}
  // &--checklist .w-checkbox * {pointer-events: none;}
  // --------------------------------------------

  // Navigation link.
  // --------------------------------------------
  &--navigation a {color: inherit;}
  &--navigation .router-link-exact-active {font-weight: bold;}
  // --------------------------------------------
}
</style>
