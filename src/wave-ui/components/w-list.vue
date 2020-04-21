<template lang="pug">
  ul.w-list(:class="classes")
    li.w-list__item(
      v-for="(item, index) in items"
      @mousedown="isSelectable && selectItem(item)"
      :class="{ 'w-list__item--active': isSelectable && selectedItems.includes(item[itemValue]) }")
      w-checkbox.mr-2(v-if="checklist")
      slot(name="item" :item="item" :index="index" :selected="selectedItems.includes(item[itemValue])")
        template(v-if="nav && item.route")
          component(
            :is="$router ? 'router-link' : 'a'"
            :to="$router && item.route"
            :href="!$router && item.route"
            v-html="item[itemLabel]")
        span(v-else v-html="item[itemLabel]")
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
    itemLabel: { type: String, default: 'label' },
    itemValue: { type: String, default: 'value' }
  },

  data: () => ({
    selectedItems: []
  }),

  computed: {
    isSelectable () {
      return this.value !== undefined || this.checklist || this.nav
    },
    classes () {
      return {
        [`${this.color}--text`]: !!this.color,
        'w-list--checklist': this.checklist,
        'w-list--navigation': this.nav,
        'w-list--hoverable': this.hover,
        'w-list--selectable': this.isSelectable
      }
    }
  },

  methods: {
    selectItem (item) {
      item = item[this.itemValue]
      if (this.multiple) {
        const foundAt = this.selectedItems.indexOf(item)

        if (foundAt > -1) this.selectedItems.splice(foundAt, 1)
        else this.selectedItems.push(item)
      }
      else if (this.selectedItems[0] === item) this.selectedItems[0] = null
      else this.selectedItems[0] = item
      this.emit()
    },
    emit () {
      this.$emit('input', (this.multiple ? this.selectedItems : this.selectedItems[0]) || null)
    }
  },

  watch: {
    multiple () {
      this.selectedItems = []
      this.emit()
    }
  }
}
</script>

<style lang="scss">
.w-list {
  list-style-type: none;
  margin-left: 0;

  &__item {
    position: relative;
    font-size: round(1.1 * $base-font-size);
  }

  &--navigation &__item,
  &--checklist &__item,
  &--hoverable &__item,
  &--selectable &__item {
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
    &:hover:before {opacity: 0.08;}
  }

  // Use less nesting for easier overrides.
  &--navigation &__item {padding: 0;}
  &--navigation a {display: block;padding: 2 * $base-increment;}
  &--navigation .router-link-exact-active {
    font-weight: bold;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      background-color: currentColor;
      opacity: 0.15;
      transition: 0.2s;
    }
  }

  &--selectable &__item {
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -2;
      background-color: currentColor;
      border-top: 1px solid white;
      opacity: 0;
      transition: 0.1s;
    }
    &:active:after, &:focus:after, &--active:after {opacity: 0.15;}
  }
}
</style>
