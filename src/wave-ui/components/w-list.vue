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
        { props: { ...this.$props, items: li.children, depth: this.depth + 1 } }
      ))
    }

    return createEl(
      'li',
      { class: { 'w-list__item': true, 'w-list__item--parent': (li.children || []).length } },
      vnodes)
  })
}

const renderListItemLabel = function (createEl, li, index) {
  const hasSlot = this.$scopedSlots.item
  const mousedown = e => {
    e.stopPropagation()
    this.isSelectable && !li.disabled && this.selectItem(li)
  }
  const component = {
    name: 'div',
    class: { 'w-list__item-label': true, ...this.liLabelClasses(li) },
    props: {},
    attributes: {}, // HTML attributes.
    on: {},
    // nativeOn: {}, // Don't even define it if div, or Vue will raise a warning.
    domProps: {}
  }
  const vnodes = []

  // Navigation list.
  // ------------------------------------------------------
  const isLink = this.nav && !li.disabled && li.route
  if (isLink) {
    component.name = this.$router ? 'router-link' : 'a'
    component.attributes.href = li.route
    if (this.$router) component.props.to = li.route
  }
  // ------------------------------------------------------

  // Links are naturally tabbable, add tabindex on other elements.
  else if (this.isSelectable) component.attributes.tabindex = 0

  // Checklist.
  // ------------------------------------------------------
  if (this.checklist) {
    component.name = 'w-checkbox'
    component.props = {
      value: li.selected,
      color: this.color,
      round: this.roundCheckboxes,
      disabled: li.disabled
    }
    if (!hasSlot) component.props.label = li[this.itemLabel] || false

    // Prevent double check action resulting in no change of state.
    component.nativeOn = { click: e => e.preventDefault() }
    component.on = {
      input: e => {
        li.selected = e.target.value
        this.$emit('input', e.target.value)
      }
    }
  }
  // ------------------------------------------------------

  if (!hasSlot && !vnodes.length) component.domProps = { innerHTML: li[this.itemLabel] }
  else if (hasSlot) {
    vnodes.push(this.$scopedSlots.item({ item: li, selected: li.selected, index }))
  }

  if (component.name === 'div') component.on.mousedown = mousedown
  else {
    if (!component.nativeOn) component.nativeOn = {}
    component.nativeOn.mousedown = mousedown
  }

  return createEl(component.name, component, vnodes)
}

export default {
  name: 'w-list',
  props: {
    items: { type: Array, required: true }, // All the possible options.
    value: {}, // v-model on selected item if any.
    checklist: { type: Boolean, default: false },
    roundCheckboxes: { type: Boolean, default: false }, // Checklist option.
    // If selectable (if value !== false), this allows multiple selections.
    multiple: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    color: { type: String, default: null },
    // Navigation type adds a router-link on items with `route`.
    nav: { type: Boolean, default: false },
    icon: { type: String, default: '' },
    itemLabel: { type: String, default: 'label' }, // Name of the label field.
    itemValue: { type: String, default: 'value' }, // Name of the value field.
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
      return this.items.map((item, i) => {
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
        [this.color]: this.color,
        'w-list--checklist': this.checklist,
        'w-list--navigation': this.nav,
        'w-list--icon': this.icon,
        [`w-list--child w-list--depth-${this.depth}`]: this.depth
      }
    }
  },

  methods: {
    selectItem (item) {
      item.selected = !item.selected
      if (!this.isMultipleSelect) this.selection = item.selected ? [item[this.itemValue]] : []
      else this.selection = this.listItems.filter(item => item.selected).map(item => item[this.itemValue])
    },
    liLabelClasses (item) {
      return {
        'w-list__item-label--disabled': item.disabled || (this.nav && !item.route && !item.children),
        'w-list__item-label--active': this.isSelectable && item.selected || null,
        'w-list__item-label--hoverable': this.hover,
        'w-list__item-label--selectable': this.isSelectable
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

    .w-list--hoverable &,
    .w-list--selectable &,
    .w-list--checklist & {margin-top: 3 * $base-increment;}
  }

  // List item Label.
  // --------------------------------------------
  &__item-label {
    position: relative;
    display: flex;
    align-items: center;
    font-size: round(1 * $base-font-size);
    padding-top: 1px;
    padding-bottom: 1px;

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
        z-index: -1;
        background-color: currentColor;
        opacity: 0;
        transition: 0.2s;
      }
    }

    // Hover state.
    &--hoverable:hover:before,
    &--selectable:hover:before {opacity: 0.08;}

    // Focus state and active class.
    &--selectable:focus:before,
    &--active:before, &--active:hover:before,
    .w-list--navigation &.router-link-exact-active:before {opacity: 0.15;}

    // Active state.
    &--selectable:active:before {opacity: 0.2;}

    // Disabled.
    &--disabled:before {display: none;}
  }
  // --------------------------------------------

  // Checklist.
  // --------------------------------------------
  &--checklist .w-checkbox__label {flex-grow: 1;}
  // --------------------------------------------

  // Navigation link.
  // --------------------------------------------
  &--navigation a {color: inherit;}
  &--navigation .router-link-exact-active {font-weight: bold;}
  // --------------------------------------------
}
</style>
