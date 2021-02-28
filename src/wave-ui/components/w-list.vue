<template lang="pug">
ul.w-list(:class="classes")
  li.w-list__item(
    v-for="(li, i) in listItems"
    :key="i"
    :class="{ 'w-list__item--parent': (li.children || []).length }")
    w-icon.w-list__item-bullet(v-if="icon") {{ icon }}

    //- List items.
    component.w-list__item-label(
      v-if="$slots[`item.${i + 1}`] || $slots.item || $slots.default"
      :is="checklist ? 'w-checkbox' : (nav && !li.disabled && li.route ? (hasRouter ? 'router-link' : 'a') : 'div')"
      v-bind="liLabelProps(li, i, li._selected)")
      slot(v-if="$slots[`item.${i + 1}`]" :name="`item.${i + 1}`" :item="cleanLi(li)" :index="i + 1" :selected="li._selected")
      slot(v-else-if="$slots.item" name="item" :item="cleanLi(li)" :index="i + 1" :selected="li._selected")
      slot(v-else :item="cleanLi(li)" :index="i + 1" :selected="li._selected") {{ li._label }}
    component.w-list__item-label(
      v-else
      :is="checklist ? 'w-checkbox' : (nav && !li.disabled && li.route ? (hasRouter ? 'router-link' : 'a') : 'div')"
      v-bind="liLabelProps(li, i, li._selected)")

    //- Vue 2.x only. Keep this comment to simplify the master branch merge into next.
    //-----------------------------------------------------
    //- When there are slots.
    //- template(v-if="$scopedSlots[`item.${i + 1}`] || $scopedSlots.item || $scopedSlots.default")
      //- Checklist items. (separated case cz it needs a @click.native, can't be in v-on)
      w-checkbox.w-list__item-label(
        v-if="checklist"
        v-bind="liLabelProps(li, i, li._selected)"
        v-on="liLabelEvents(li)"
        @click.native="onCheckboxWrapperClick")
        slot(v-if="$scopedSlots[`item.${i + 1}`]" :name="`item.${i + 1}`" :item="cleanLi(li)" :index="i + 1" :selected="li._selected")
        slot(v-else-if="$scopedSlots.item" name="item" :item="cleanLi(li)" :index="i + 1" :selected="li._selected")
        slot(v-else :item="cleanLi(li)" :index="i + 1" :selected="li._selected") {{ li._label }}
      //- Router link list items. (separated case cz it needs a @click.native, can't be in v-on)
      router-link.w-list__item-label(
        v-else-if="nav && !li.disabled && li.route && hasRouter"
        v-bind="liLabelProps(li, i, li._selected)"
        v-on="liLabelEvents(li)"
        @click.native="$emit('item-select', cleanLi(li))")
        slot(v-if="$scopedSlots[`item.${i + 1}`]" :name="`item.${i + 1}`" :item="cleanLi(li)" :index="i + 1" :selected="li._selected")
        slot(v-else-if="$scopedSlots.item" name="item" :item="cleanLi(li)" :index="i + 1" :selected="li._selected")
        slot(v-else :item="cleanLi(li)" :index="i + 1" :selected="li._selected") {{ li._label }}
      //- Nav & simple list items.
      component.w-list__item-label(
        v-else
        :is="nav && !li.disabled && li.route ? 'a' : 'div'"
        v-bind="liLabelProps(li, i, li._selected)"
        v-on="liLabelEvents(li)")
        slot(v-if="$scopedSlots[`item.${i + 1}`]" :name="`item.${i + 1}`" :item="cleanLi(li)" :index="i + 1" :selected="li._selected")
        slot(v-else-if="$scopedSlots.item" name="item" :item="cleanLi(li)" :index="i + 1" :selected="li._selected")
        slot(v-else :item="cleanLi(li)" :index="i + 1" :selected="li._selected") {{ li._label }}

    //- When there are no slots.
    //- template(v-else)
      //- Checklist items. (separated case cz it needs a @click.native, can't be in v-on)
      w-checkbox.w-list__item-label(
        v-if="checklist"
        v-bind="liLabelProps(li, i, li._selected)"
        v-on="liLabelEvents(li)"
        @click.native="onCheckboxWrapperClick")
      //- Router link list items. (separated case cz it needs a @click.native, can't be in v-on)
      router-link.w-list__item-label(
        v-else-if="nav && !li.disabled && li.route && hasRouter"
        v-bind="liLabelProps(li, i, li._selected)"
        v-on="liLabelEvents(li)"
        @click.native="$emit('item-select', cleanLi(li))"
        v-html="li._label")
      //- Nav & simple list items.
      component.w-list__item-label(
        v-else
        :is="nav && !li.disabled && li.route ? 'a' : 'div'"
        v-bind="liLabelProps(li, i, li._selected)"
        v-on="liLabelEvents(li)"
        v-html="li._label")
    //-----------------------------------------------------

    //- Children lists.
    w-list(
      v-if="(li.children || []).length"
      v-bind="$props"
      :items="li.children"
      :depth="depth + 1"
      @update:model-value="$emit('update:modelValue', $event)"
      @input="$emit('input', $event)"
      @item-click="$emit('item-click', $event)"
      @item-select="$emit('item-select', $event)")
      //- template(#item.x="{ item, index, selected }")
        slot(v-if="$slots[`item.${i + 1}`]" :name="`item.${i + 1}`" :item="cleanLi(item)" :index="index" :selected="selected")
      template(v-if="$slots.item" #item="{ item, index, selected }")
        slot(name="item" :item="cleanLi(item)" :index="index" :selected="selected")
      template(v-else #default="{ item, index, selected }")
        slot(:item="cleanLi(item)" :index="index" :selected="selected") {{ item[itemLabelKey] }}
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
    color: { type: String }, // Applies to all the items.
    selectionColor: { type: String }, // Applies to the selected items only.
    bgColor: { type: String }, // Applies to all the items.
    // Navigation type adds a router-link on items with `route`.
    nav: { type: Boolean },
    icon: { type: String, default: '' },
    itemLabelKey: { type: String, default: 'label' }, // Name of the label field.
    itemValueKey: { type: String, default: 'value' }, // Name of the value field.
    itemColorKey: { type: String, default: 'color' }, // Support a different color per item.
    itemClass: { type: String },
    depth: { type: Number, default: 0 }, // For recursive call.
    returnObject: { type: Boolean },
    // By default you can unselect a list item by re-selecting it.
    // Allow preventing that on single selection lists only.
    noUnselect: { type: Boolean },
    arrowsNavigation: { type: Boolean }
  },

  emits: ['input', 'update:modelValue', 'item-click', 'item-select', 'keydown:escape', 'keydown:enter'],

  data: () => ({
    listItems: []
  }),

  computed: {
    hasRouter () {
      return '$router' in this
    },

    listId () {
      return this.addIds ? (typeof this.addIds === 'string' ? this.addIds : `w-list--${this._.uid}`) : null
    },

    selectedItems () {
      return this.listItems.filter(item => item._selected)
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

    SelectionColor () {
      // Only if no color & no selectionColor is set, set the selectionColor to primary.
      const selectionColor = this.selectionColor === undefined ? (!this.color && 'primary') : this.selectionColor
      return this.isSelectable && selectionColor
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
        if (item[this.itemValueKey] !== undefined) return item[this.itemValueKey]
        else return item[this.itemLabelKey] !== undefined ? item[this.itemLabelKey] : item.index
      }
      else return item
    },

    // Action of selecting 1 item.
    selectItem (item, forcedValue) {
      // Prevent unselecting a selected item if noUnselect is true in single selection list.
      if (item._selected && !this.multiple && this.noUnselect) return

      // Select or unselect the item.
      item._selected = forcedValue !== undefined ? forcedValue : !item._selected

      // If not multiple selection and just selected an item, unselect any other.
      if (item._selected && !this.isMultipleSelect) {
        this.listItems.forEach(i => i._index !== item._index && (i._selected = false))
      }
      this.emitSelection()
    },

    liLabelClasses (item) {
      return {
        'w-list__item-label--disabled': item.disabled || (this.nav && !item.route && !item.children),
        'w-list__item-label--active': this.isSelectable && item._selected || null,
        'w-list__item-label--focused': item._focused,
        'w-list__item-label--hoverable': this.hover,
        'w-list__item-label--selectable': this.isSelectable,
        [item.color]: !!item.color,
        [this.SelectionColor]: item._selected && !item.color && this.SelectionColor,
        [this.itemClass]: !!this.itemClass
      }
    },

    liLabelProps (li, index, selected) {
      const hasSlot = this.$slots[`item.${index + 1}`] || this.$slots.item

      // Event handlers.
      // ------------------------------------------------------
      const click = () => {
        if (!li.disabled) {
          const cleanLi = this.cleanLi(li)
          this.$emit('item-click', cleanLi)
          this.$emit('item-select', cleanLi)
        }
      }
      // If selectable list, on mousedown select the item.
      const mousedown = this.isSelectable && (e => {
        e.stopPropagation()
        !li.disabled && this.selectItem(li)
      })
      // If selectable list, on enter key press select item.
      const keydown = this.isSelectable && (e => {
        if (!li.disabled && e.keyCode === 13) {
          this.selectItem(li)
          // eslint-disable-next-line vue/custom-event-name-casing
          this.$emit('keydown:enter')
          this.$emit('item-select', this.cleanLi(li))
        }
        // eslint-disable-next-line vue/custom-event-name-casing
        else if (e.keyCode === 27) this.$emit('keydown:escape')
        // On arrow keys press, navigate to prev/next item.
        else if (this.arrowsNavigation) {
          e.preventDefault()
          if (e.keyCode === 38) this.focusPrevNextItem(li._index, false)
          if (e.keyCode === 40) this.focusPrevNextItem(li._index, true)
        }
      })
      // ------------------------------------------------------

      const props = {
        class: this.liLabelClasses(li),
        tabindex: li.disabled || this.checklist ? null : '0',
        'aria-selected': selected ? 'true' : 'false',
        id: this.listId ? `${this.listId}_item-${index + 1}` : null,
        role: 'option'
      }

      // Checklist.
      // ------------------------------------------------------
      if (this.checklist) {
        props.modelValue = li._selected
        props.color = li[this.itemColorKey] || this.color
        props.round = this.roundCheckboxes
        props.disabled = li.disabled

        if (!hasSlot) props.label = li._label || null

        props.onFocus = () => (li._focused = true)
        props.onBlur = () => (li._focused = false)
        props.onInput = value => this.selectItem(li, value)
        // When clicking on the checkbox component wrapper, trigger a focus & click on the checkbox.
        props.onClick = e => {
          const checkbox = e.target.querySelector('input[type="checkbox"]')
          if (checkbox) {
            checkbox.focus()
            checkbox.click()
          }

          click() // Emit the `item-click` & `item-select` events.
        }
      }
      // ------------------------------------------------------

      // Navigation list.
      // Note: on enter key press, a click event is fired => this is default HTML behavior.
      // ------------------------------------------------------
      else if (this.nav) {
        if (!li.disabled && li.route) {
          props.onKeydown = keydown
          props.onMousedown = mousedown

          if (this.$router) {
            props.to = li.route
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
              click() // Emit the `item-click` & `item-select` events.
            }
          }
          else {
            props.href = li.route
            props.onClick = click
          }
        }

        if (!hasSlot) props.innerHTML = li._label
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
        if (!hasSlot) props.innerHTML = li._label
      }
      // ------------------------------------------------------

      else if (!hasSlot) props.innerHTML = li._label

      return props
    },

    // Convert the received items selection to array if it is a unique value.
    // Also accept objects if returnObject is true and convert to the object's value.
    // In any case, always end up with an array of values.
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
    },

    focusPrevNextItem (index, next = true) {
      // The index of the previous or next item in the array of enabled items.
      index = this.enabledItemsIndexes[this.enabledItemsIndexes.indexOf(index) + (next ? 1 : -1)]
      const firstOrLastIndex = next ? 0 : this.enabledItemsIndexes.length - 1
      if (index === undefined) index = this.enabledItemsIndexes[firstOrLastIndex]

      this.$el.querySelector(`#${this.listId}_item-${index + 1}`).focus()
    },

    cleanLi (li) {
      // eslint-disable-next-line no-unused-vars
      const { _index, _value, _label, _selected, _focused, ...cleanLi } = li
      return cleanLi
    },

    refreshListItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items || []
      this.listItems = items.map((item, i) => ({
        ...item,
        _index: i,
        // If no value is set on the item, add one from its label, or from its index.
        // The result is store in a _value attribute.
        _value: item[this.itemValueKey] === undefined ? item[this.itemLabelKey] || i : item[this.itemValueKey],
        _selected: item._selected || false,
        _label: item[this.itemLabelKey] || '',
        _focused: false
      }))
    },

    applySelectionOnItems (selection) {
      // Reset the selections when single selection allowed for w-select.
      if (!this.isMultipleSelect) this.listItems.forEach(item => item._selected = false)

      this.checkSelection(selection) // Create an array with the selected values.
        .forEach(val => this.listItems.find(item => item._value === val)._selected = true)
    }
  },

  created () {
    this.refreshListItems()
    this.applySelectionOnItems(this.modelValue)
  },

  watch: {
    items () {
      this.refreshListItems()
      this.applySelectionOnItems(this.modelValue)
    },

    modelValue (items) {
      this.applySelectionOnItems(items)
    },

    multiple (boolean) {
      // If more than 1 selection and going back to single select,
      // just keep the first selected item.
      if (!boolean) {
        let firstSelected = null
        this.listItems.forEach(item => {
          if (item._selected && !firstSelected) firstSelected = item
          else if (item._selected) item._selected = false
        })
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
    top: 0.06em;

    @-moz-document url-prefix() {
      & {top: -0.06em;}
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
    display: flex;

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
    &--focused:before,
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
