<template lang="pug">
.w-accordion(:class="accordionClasses")
  //- When externally using the WAccordionItem component.
  slot(v-if="accordionItemsProvided")

  //- Else, when providing the items array or number through the items prop.
  template(v-else-if="!isNaN(items) || (items || []).length")
    w-accordion-item(
      v-for="(accordionItem, i) in state.accordionItems"
      :key="i"
      :class="itemClass"
      :item="accordionItem"
      @focus="$emit('focus', $event)")
      //- Title.
      template(#title="{ item, expanded, index }")
        slot(
          v-if="$slots[`item-title.${accordionItem.id || (accordionItem._index + 1)}`]"
          :name="`item-title.${accordionItem.id || (accordionItem._index + 1)}`"
          :item="item"
          :expanded="expanded"
          :index="index")
        slot(
          v-else
          name="item-title"
          :item="item"
          :expanded="expanded"
          :index="index")
      //- Content.
      template(#content="{ item, expanded, index }")
        slot(
          v-if="$slots[`item-content.${accordionItem.id || (accordionItem._index + 1)}`]"
          :name="`item-content.${accordionItem.id || (accordionItem._index + 1)}`"
          :item="item"
          :expanded="expanded"
          :index="index")
        slot(
          v-else
          name="item-content"
          :item="item"
          :expanded="expanded"
          :index="index")
</template>

<script>
import { objectifyClasses } from '../../utils/index'
import WAccordionItem from './item.vue'

export default {
  name: 'w-accordion',

  props: {
    modelValue: { type: Array },
    color: { type: String },
    bgColor: { type: String },
    items: { type: [Array, Number] }, // Required unless externally using WAccordionItem.
    itemColorKey: { type: String, default: 'color' }, // Support a different color per item.
    itemTitleKey: { type: String, default: 'title' },
    itemContentKey: { type: String, default: 'content' },
    itemClass: { type: [String, Array, Object] },
    titleClass: { type: [String, Array, Object] },
    contentClass: { type: [String, Array, Object] },
    expandIcon: { type: [String, Boolean], default: 'wi-triangle-down' },
    expandIconRight: { type: Boolean },
    expandIconRotate90: { type: Boolean },
    expandIconProps: { type: Object, default: () => ({}) },
    expandSingle: { type: Boolean },
    collapseIcon: { type: String },
    shadow: { type: Boolean },
    duration: { type: Number, default: 250 },
    dark: { type: Boolean },
    light: { type: Boolean }
  },

  components: { WAccordionItem },

  emits: ['input', 'update:modelValue', 'focus', 'item-expand', 'item-collapsed'],

  // All provided to the WAccordionItem, not passed as prop since it could be used externally.
  provide () {
    return {
      itemClasses: objectifyClasses(this.itemClasses),
      titleClasses: this.titleClasses,
      contentClasses: this.contentClasses,
      onItemToggle: this.onItemToggle,
      onEndOfCollapse: this.onEndOfCollapse,
      getOriginalItem: this.getOriginalItem,
      options: this.$props,
      registerItem: this.registerItem,
      state: this.state
    }
  },

  data: () => ({
    state: {
      accordionItems: []
    }
  }),

  computed: {
    // Detect if the accordion items are directly provided through slot using WAccordionItem.
    accordionItemsProvided () {
      return this.$slots.default?.()?.some(item => item?.type?.name)
    },

    accordionClasses () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-accordion--dark': this.dark,
        'w-accordion--light': this.light,
        'w-accordion--shadow': this.shadow,
        'w-accordion--no-icon': !this.expandIcon && !this.collapseIcon,
        'w-accordion--icon-right': this.expandIcon && this.expandIconRight,
        'w-accordion--rotate-icon': this.expandIcon && !this.collapseIcon
      }
    },

    itemClasses () {
      return objectifyClasses(this.itemClass)
    },

    titleClasses () {
      return objectifyClasses(this.titleClass)
    },

    contentClasses () {
      return objectifyClasses(this.contentClass)
    }
  },

  methods: {
    onItemToggle (item) {
      if (this.expandSingle) this.state.accordionItems.forEach(obj => obj._index !== item._index && (obj._expanded = false))
      const expandedItems = this.state.accordionItems.map(item => item._expanded || false)
      this.$emit('update:modelValue', expandedItems)
      this.$emit('input', expandedItems)
      this.$emit('item-expand', { item, expanded: item._expanded })
    },

    onEndOfCollapse (item) {
      this.$emit('item-collapsed', { item, expanded: item._expanded })
    },

    // Return the original accordion item (so there is no `_index`, etc.).
    getOriginalItem (item) {
      return this.items[item._index]
    },

    updateItems () {
      let items = this.state.accordionItems
      if (!this.accordionItemsProvided && this.items) {
        items = (typeof this.items === 'number' ? Array(this.items).fill({}) : this.items) || []
      }

      this.state.accordionItems = items.map((item, _index) => ({
        ...item,
        _index,
        _expanded: this.modelValue?.[_index] ?? false,
        _disabled: !!item.disabled
      }))
    },

    // Provide-injected in and used from w-accordion-item.
    // Only when w-accordion-item is directly used outside of Wave UI.
    registerItem (item) {
      if (this.accordionItemsProvided) {
        item._index = this.state.accordionItems.length
        item._expanded = this.modelValue?.[item._index] ?? false
        item._disabled = !!item.disabled

        this.state.accordionItems.push(item)
      }

      return item._index
    }
  },

  created () {
    if (!this.accordionItemsProvided && this.items) this.updateItems()
  },

  watch: {
    modelValue () {
      this.updateItems()
    },
    items () {
      // this.updateItems()
    }
  }
}
</script>

<style lang="scss">
.w-accordion {
  z-index: 1;

  @include themeable;

  &--shadow {box-shadow: $box-shadow;}
}
</style>
