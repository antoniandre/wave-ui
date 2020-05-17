<template lang="pug">
  ul.w-list(:class="classes")
    li.w-list__item(v-for="(item, i) in listItems" :key="i" :class="liClasses(item)")
      //- If navigation list & item is a valid link.
      component.w-list__item-label(
        v-if="nav && !item.disabled && item.route"
        @mousedown.stop="isSelectable && !item.disabled && selectItem(item)"
        :is="$router ? 'router-link' : 'a'"
        :to="$router && item.route"
        :href="item.route")
        slot(name="item" :item="item" :index="i" :selected="item.selected")
          span(v-html="item[itemLabel]")
      //- If checklist or any other type of list.
      .w-list__item-label(
        v-else
        @mousedown.stop="isSelectable && !item.disabled && selectItem(item)"
        :tabindex="isSelectable && !item.disabled ? 0 : false")
        w-checkbox.mr-2(v-if="checklist" @click.native.prevent v-model="item.selected")
        slot(name="item" :item="item" :index="i" :selected="item.selected")
          span(v-html="item[itemLabel]")
      w-list(v-if="item.children" v-bind="$props" :items="item.children" :depth="depth + 1")
</template>

<script>
export default {
  name: 'w-list',
  props: {
    items: { type: Array, required: true }, // All the possible options.
    value: {}, // v-model on selected item if any.
    checklist: { type: Boolean, default: false },
    // If selectable (if value !== false), this allows multiple selections.
    multiple: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    color: { type: String, default: null },
    // Navigation type adds a router-link on items with `route`.
    nav: { type: Boolean, default: false },
    itemLabel: { type: String, default: 'label' }, // Name of the label field.
    itemValue: { type: String, default: 'value' }, // Name of the value field.
    depth: { type: Number, default: 0 }
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
      return this.multiple || this.checklist
    },
    isSelectable () {
      return this.value !== undefined || this.checklist || this.nav
    },
    classes () {
      return {
        [this.color]: this.color,
        'w-list--checklist': this.checklist,
        'w-list--navigation': this.nav,
        'w-list--hoverable': this.hover,
        'w-list--selectable': this.isSelectable,
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
    liClasses (item) {
      return {
        'w-list__item--disabled': item.disabled || (this.nav && !item.route && !item.children),
        'w-list__item--parent': item.children && item.children.length,
        'w-list__item--active': this.isSelectable && item.selected
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
  }
}
</script>

<style lang="scss">
.w-list {
  list-style-type: none;
  margin-left: 0;

  &--child {margin-left: 6 * $base-increment;}

  &__item {margin-top: 1px;}
  &__item:first-child {margin-top: 0;}
  &--selectable &__item {cursor: pointer;}
  & &__item--disabled {
    cursor: default;
    opacity: 0.3;
    user-select: none;
  }

  &__item--parent {
    flex-direction: column;
    align-items: stretch;
  }

  // List item Label.
  // --------------------------------------------
  &__item-label {
    position: relative;
    display: flex;
    align-items: center;
    font-size: round(1.1 * $base-font-size);

    .w-list--navigation &,
    .w-list--checklist &,
    .w-list--hoverable &,
    .w-list--selectable & {
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
  }

  &--navigation .w-list__item-label:hover:before,
  &--checklist .w-list__item-label:hover:before,
  &--hoverable .w-list__item-label:hover:before,
  &--selectable .w-list__item-label:hover:before,
  &__item--active > .w-list__item-label:before {opacity: 0.08;}
  &__item--disabled > .w-list__item-label:before {display: none;}
  // --------------------------------------------

  // Navigation link.
  // --------------------------------------------
  &--navigation a {
    color: inherit;

    &:focus:before {opacity: 0.1;}
  }

  &--navigation .router-link-exact-active {
    font-weight: bold;

    &:before, &:focus:before {opacity: 0.15;}
  }
  // --------------------------------------------

  &--selectable &__item-label {
    &:active:before, &:focus:before, &--active:before {opacity: 0.15;}
  }
}
</style>
