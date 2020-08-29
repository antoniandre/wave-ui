<script>
const renderListItems = function (createEl) {
  return this.listItems.map((li, index) => {
    // Content nodes.
    const vnodes = []

    if (this.icon) vnodes.push(createEl('w-icon', { class: 'w-list__item-bullet' }, [this.icon]))

    vnodes.push(renderListItemLabel.call(this, createEl, li, index))

    // If children, do a recursive call.
    if (li.children) {
      vnodes.push(createEl(
        'w-list',
        {
          props: { ...this.$props, items: li.children, depth: this.depth + 1 },
          scopedSlots: {
            item: this.$scopedSlots.item, // Accepts `template(#item)`.
             // Accepts `template(#item.2)`.
            [`item.${li.id || index + 1}`]: this.$scopedSlots[`item.${li.id || index + 1}`]
          },
          on: {
            'input': value => this.$emit('input', value),
            'item-click': value => this.$emit('item-click', value)
          }
        }
      ))
    }

    return createEl(
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
const renderListItemLabel = function (createEl, li, index) {
  // Init the final vnode, can be a div, a router-link/a or a w-checkbox.
  const component = {
    name: 'div',
    class: { 'w-list__item-label': true, ...this.liLabelClasses(li) },
    props: {},
    attrs: {}, // HTML attributes.
    domProps: {},
    on: {}, // Events handlers are added bellow.
    // nativeOn: {} // Don't even define it if div, or Vue will raise a warning.
  }

  // Event handlers - will be appended in `on` or `nativeOn` according to the vnode type.
  // ------------------------------------------------------
  const click = () => !li.disabled && this.$emit('item-click', li)
  // If selectable list, on mousedown select the item.
  const mousedown = this.isSelectable && (e => {
    e.stopPropagation()
    !li.disabled && this.selectItem(li)
  })
  // If selectable list, on enter key press select item.
  const keydown = this.isSelectable && (e => (!li.disabled && e.keyCode === 13 && this.selectItem(li)))
  // ------------------------------------------------------

  const hasSlot = this.$scopedSlots.item
  const hasSingleItemSlot = this.$scopedSlots[`item.${li.id || index + 1}`]

  // Navigation list.
  // Note: on enter key press, a click event is fired => this is default HTML behavior.
  // ------------------------------------------------------
  const isLink = this.nav && !li.disabled && li.route
  if (isLink) {
    component.name = this.$router ? 'router-link' : 'a'
    if (this.$router) {
      component.props.to = li.route
      component.nativeOn = { click, keydown, mousedown }
    }
    else {
      component.attrs.href = li.route
      component.on = { click, keydown, mousedown }
    }
  }
  // ------------------------------------------------------

  // Checklist.
  // ------------------------------------------------------
  else if (this.checklist) {
    component.name = 'w-checkbox'
    component.props = {
      value: li.selected,
      color: this.color,
      round: this.roundCheckboxes,
      disabled: li.disabled
    }

    if (!hasSlot) component.props.label = li[this.itemLabel] || false

    component.nativeOn = {
      // The checkbox component is not fully covering the list-item-label, when clicking on list
      // item label, toggle the checkbox.
      click: e => {
        if (e.target.classList.contains('w-checkbox')) {
          this.selectItem(li)
          component.props.value = li.selected
        }
      }
    }
    component.on = {
      input: value => this.selectItem(li, value),
      // @todo: on checkbox focus, focus the liste item.
      // focus: e => console.log(this, e, 'on checkbox focus')

    }
  }
  // ------------------------------------------------------

  // Selectable simple div.
  // ------------------------------------------------------
  else if (this.isSelectable) {
    // Links are naturally tabable, add tabindex on other elements.
    if (!li.disabled) component.attrs.tabindex = 0
    component.on = { click, keydown, mousedown }
  }
  // ------------------------------------------------------

  const vnodes = []
  // Allow overriding the common slot using `template(#item.2)` where to is the index of the item.
  if (hasSingleItemSlot) {
    vnodes.push(this.$scopedSlots[`item.${li.id || index + 1}`]({ item: li, selected: li.selected, index }))
  }
  else if (hasSlot) vnodes.push(this.$scopedSlots.item({ item: li, selected: li.selected, index }))
  else if (!this.checklist) component.domProps = { innerHTML: li[this.itemLabel] }
  return createEl(component.name, component, vnodes)
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
    hover: { type: Boolean },
    color: { type: String },
    bgColor: { type: String },
    // Navigation type adds a router-link on items with `route`.
    nav: { type: Boolean },
    icon: { type: String, default: '' },
    itemLabel: { type: String, default: 'label' }, // Name of the label field.
    itemValue: { type: String, default: 'value' }, // Name of the value field.
    itemClass: { type: String },
    depth: { type: Number, default: 0 } // For recursive call.
  },

  data: () => ({
    // The selected items are given in the value prop.
    // But if no value prop is set for checklist for instance, it has to still
    // keep track of the selected items.
    selectedItems: []
  }),

  computed: {
    listItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items
      return items.map((item, i) => {
        item = { ...item } // Don't modify the original.

        // If no value is set then add one to prevent error.
        if (item[this.itemValue] === undefined) item[this.itemValue] = i

        item.selected = this.selection.includes(item[this.itemValue])
        return item
      })
    },

    // Selection is always an array, but emits a single value if not multiple.
    selection: {
      get () {
        if (!this.isSelectable) return []
        return this.selectedItems || []
      },
      set (items) {
        this.selectedItems = items
        this.$emit('input', this.isMultipleSelect ? items : (items[0] || null))
      }
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
    selectItem (item, forcedValue) {
      item.selected = forcedValue !== undefined ? forcedValue : !item.selected
      if (!this.isMultipleSelect) this.selection = item.selected ? [item[this.itemValue]] : []
      else this.selection = this.listItems.filter(item => item.selected).map(item => item[this.itemValue])
    },

    liLabelClasses (item) {
      return {
        'w-list__item-label--disabled': item.disabled || (this.nav && !item.route && !item.children),
        'w-list__item-label--active': this.isSelectable && item.selected || null,
        'w-list__item-label--hoverable': this.hover,
        'w-list__item-label--selectable': this.isSelectable,
        [this.itemClass]: !!this.itemClass
      }
    },
    // Make sure the items selection is always an array.
    checkSelection (items) {
      return Array.isArray(items) ? items : (items ? [items] : [])
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
        this.selection = firstSelected ? [firstSelected[this.itemValue]] : []
      }
    }
  },

  render (createEl) {
    // Render list wrapper.
    return createEl(
      'ul',
      { class: { 'w-list': true, ...this.classes } },
      renderListItems.call(this, createEl)
    )
  }
}
</script>

<style lang="scss">
.w-list {
  list-style-type: none;
  margin-left: 0;

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
    font-size: $base-font-size;
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
