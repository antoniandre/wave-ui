<script>
import { h, resolveComponent } from 'vue'

const renderListItems = function () {
  return this.listItems.map((li, index) => {
    // Content nodes.
    const vnodes = []

    if (this.icon) {
      vnodes.push(h(resolveComponent('w-icon'), { class: 'w-list__item-bullet' }, { default: () => this.icon }))
    }

    vnodes.push(renderListItemLabel.call(this, li, index))

    // If children, do a recursive call.
    if (li.children) {
      vnodes.push(h(
        resolveComponent('w-list'),
        {
          ...this.$props,
          items: li.children,
          depth: this.depth + 1,
          slots: {
            item: props => this.$slots.item(...props), // Accepts `template(#item)`.
             // Accepts `template(#item.2)`.
            [`item.${li.id || index + 1}`]: props => this.$slots[`item.${li.id || index + 1}`](...props)
          },
          onInput: value => this.$emit('input', value),
          onChange: value => this.$emit('change', value),
          onItemClick: value => this.$emit('item-click', value)
        }
      ))
    }

    return h(
      'li',
      {
        class: {
          'w-list__item': true,
          'w-list__item--parent': (li.children || []).length
        }
      },
      vnodes)
  })
}

// Responsible for item selection if selectable list.
const renderListItemLabel = function (li, index) {
  // Init the final vnode, can be a div, a router-link/a or a w-checkbox.
  const component = {
    is: 'div',
    class: { 'w-list__item-label': true, ...this.liLabelClasses(li) },
    tabindex: '0',
    'aria-selected': li.selected ? 'true' : 'false',
    id: this.listId ? `${this.listId}_item-${index + 1}` : null,
    role: 'option'
  }
  let vnodes = []

  // Event handlers - will be appended in `on` or `nativeOn` according to the vnode type.
  // ------------------------------------------------------
  const click = () => !li.disabled && this.$emit('item-click', li)
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

  const hasSlot = this.$slots.item
  const hasSingleItemSlot = this.$slots[`item.${li.id || index + 1}`]

  // Navigation list.
  // Note: on enter key press, a click event is fired => this is default HTML behavior.
  // ------------------------------------------------------
  const isLink = this.nav && !li.disabled && li.route
  if (isLink) {
    component.is = this.$router ? resolveComponent('router-link') : 'a'
    if (this.$router) {
      component.to = li.route
      component.nativeOn = { click, keydown, mousedown }
    }
    else {
      component.href = li.route
      component.onClick = click
      component.onKeydown = keydown
      component.onMousedown = mousedown
    }
  }
  // ------------------------------------------------------

  // Checklist.
  // ------------------------------------------------------
  else if (this.checklist) {
    component.is = resolveComponent('w-checkbox')
    component.value = li.selected
    component.color = li[this.itemColor] || this.color
    component.round = this.roundCheckboxes
    component.disabled = li.disabled

    if (!hasSlot) component.label = li[this.itemLabel] || false

    component.nativeOn = {
      // The checkbox component is not fully covering the list-item-label, when clicking on list
      // item label, toggle the checkbox.
      click: e => {
        if (e.target.classList.contains('w-checkbox')) {
          this.selectItem(li)
          component.value = li.selected
        }
      }
    }
    component.onInput = value => this.selectItem(li, value)
    // @todo: on checkbox focus, focus the list item.
    // component.onFocus: e => console.log(this, e, 'on checkbox focus')
  }
  // ------------------------------------------------------

  // Selectable simple div.
  // ------------------------------------------------------
  else if (this.isSelectable) {
    // Links are naturally tabable, add tabindex on other elements.
    if (!li.disabled) component.tabindex = 0
    component.onClick = click
    component.onKeydown = keydown
    component.onMousedown = mousedown
  }
  // ------------------------------------------------------

  // Allow overriding the common slot using `template(#item.2)` where to is the index of the item.
  if (hasSingleItemSlot) {
    vnodes.push(this.$slots[`item.${li.id || index + 1}`]({ item: li, selected: li.selected, index }))
  }
  else if (hasSlot) vnodes.push(this.$slots.item({ item: li, selected: li.selected, index }))
  else {
    if (isLink) vnodes = {} // Prevents Vue warning about slot not being a function.
    if (!this.checklist) component.innerHTML = li[this.itemLabel]
  }
  return h(component.is, component, vnodes)
}

export default {
  name: 'w-list',

  props: {
    items: { type: [Array, Number], required: true }, // All the possible options.
    value: {}, // v-model on selected item if any.
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

  emits: ['input', 'item-click', 'keydown:escape'],

  data: () => ({
    // The selected items are given in the value prop.
    // But if no value prop is set for checklist for instance, it has to still
    // keep track of the selected items.
    selectedItems: []
  }),

  computed: {
    listId () {
      return this.addIds ? (typeof this.addIds === 'string' ? this.addIds : `w-list--${this._.uid}`) : null
    },

    listItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items || []
      return items.map((item, i) => {
        item = { ...item } // Don't modify the original.

        // If no value is set on the item, add one from its label, or from its index. the result is
        // store in a _value attribute.
        item._value = item[this.itemValue] === undefined ? item[this.itemLabel] || i : item[this.itemValue]

        item.selected = this.selectedItems.map(obj => obj._value !== undefined ? obj._value : obj).includes(item._value)
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
      return this.value !== undefined || this.checklist || this.nav
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
      item.selected = forcedValue !== undefined ? forcedValue : !item.selected

      // Set the `selection` computed that emits the value to the outside world.
      if (this.isMultipleSelect) {
        const filteredItems = this.listItems.filter(item => item.selected)
        this.selectedItems = filteredItems
      }
      else this.selectedItems = item.selected ? [item] : []
      this.emitSelection()
    },

    liLabelClasses (item) {
      return {
        'w-list__item-label--disabled': item.disabled || (this.nav && !item.route && !item.children),
        'w-list__item-label--active': this.isSelectable && item.selected || null,
        'w-list__item-label--hoverable': this.hover,
        'w-list__item-label--selectable': this.isSelectable,
        [item.color]: !!item.color,
        [this.itemClass]: !!this.itemClass
      }
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
        const { _value, selected, ...Item } = item
        return Item
      })

      // `selectedItems` is always an array of items, but on set, it emits a single value if not `multiple`.
      const selection = this.isMultipleSelect ? items : (items[0] !== undefined ? items[0] : null)
      this.$emit('input', selection)
      this.$emit('change', selection)
    },

    focusPrevItem (index) {
      // The index of the previous item in the array of enabled items.
      index = this.enabledItemsIndexes[this.enabledItemsIndexes.indexOf(index) - 1]
      if (index === undefined) index = this.enabledItemsIndexes[this.enabledItemsIndexes.length - 1]

      this.$refs['w-list'].querySelector(`#${this.listId}_item-${index + 1}`).focus()
    },

    focusNextItem (index) {
      // The index of the next item in the array of enabled items.
      index = this.enabledItemsIndexes[this.enabledItemsIndexes.indexOf(index) + 1]
      if (index === undefined) index = this.enabledItemsIndexes[0]

      this.$refs['w-list'].querySelector(`#${this.listId}_item-${index + 1}`).focus()
    }
  },

  created () {
    this.selectedItems = this.checkSelection(this.value)
  },

  watch: {
    value (items) {
      this.selectedItems = this.checkSelection(items)
    },

    multiple (boolean) {
      // If more than 1 selection and going back to single select,
      // just keep the first selected item.
      if (!boolean) {
        const firstSelected = this.listItems.find(item => item.selected)
        this.selectedItems = firstSelected ? [firstSelected] : []
        this.emitSelection()
      }
    }
  },

  render () {
    // Render list wrapper.
    return h(
      'ul',
      {
        ref: 'w-list',
        class: { 'w-list': true, ...this.classes },
        id: this.listId
      },
      renderListItems.call(this)
    )
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
