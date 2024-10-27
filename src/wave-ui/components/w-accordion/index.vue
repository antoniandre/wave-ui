<template lang="pug">
.w-accordion(:class="accordionClasses")
  //- When externally using the WAccordionItem component.
  slot(v-if="accordionItemsProvided")

  //- Else, when providing the items array or number through the items prop.
  template(v-else-if="(items || []).length")
    w-accordion-item(
      v-for="(item, i) in (items.length ? items : accordionItems)"
      :key="i"
      :class="itemClasses"
      :title="item.title"
      :content="item.content"
      :expanded="item.expanded || item._expanded"
      :disabled="item.disabled || item._disabled"
      @focus="$emit('focus', $event)")
      //- Title.
      template(#title="{ item, expanded, index }")
        slot(
          v-if="$slots[`item-title.${item.id || index}`]"
          :name="`item-title.${item.id || index}`"
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
          v-if="$slots[`item-content.${item.id || index}`]"
          :name="`item-content.${item.id || index}`"
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
import { consoleError } from '../../utils/console'
import WAccordionItem from './item.vue'

export default {
  name: 'w-accordion',

  props: {
    modelValue: { type: Array },
    color: { type: String },
    bgColor: { type: String },
    // Required unless externally using WAccordionItem.
    // Number deprecated: use WAccordionItem.
    items: { type: [Array, Number] },
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
      titleClasses: this.titleClasses,
      contentClasses: this.contentClasses,
      onItemToggle: this.onItemToggle,
      onEndOfCollapse: this.onEndOfCollapse,
      getOriginalItem: this.getOriginalItem,
      options: this.$props,
      registerItem: this.registerItem,
      unregisterItem: this.unregisterItem,
      getAccordionItem: this.getAccordionItem
    }
  },

  data: () => ({
    accordionItems: []
  }),

  computed: {
    accordionItemsById () {
      return this.accordionItems.reduce((obj, item) => {
        obj[item._cuid] = item
        return obj
      }, {})
    },

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
    getAccordionItem (cuid) {
      return this.accordionItemsById[cuid]
    },

    onItemToggle (item) {
      if (this.expandSingle) this.accordionItems.forEach(obj => obj._index !== item._index && (obj._expanded = false))
      const expandedItems = this.accordionItems.map(item => item._expanded || false)
      this.$emit('update:modelValue', expandedItems)
      this.$emit('input', expandedItems)
      this.$emit('item-expand', { item, expanded: item._expanded })
    },

    onEndOfCollapse (item) {
      this.$emit('item-collapsed', { item, expanded: item._expanded })
    },

    // Return the original accordion item (so there is no `_index`, etc.).
    getOriginalItem (item) {
      return this.items?.[item._index] || item
    },

    // Provide-injected and used from w-accordion-item.
    // Only when w-accordion-item is directly used outside of Wave UI.
    registerItem (item) {
      item = Object.assign(item, this.items?.[item._index])
      item._index = this.accordionItems.length
      item._expanded = this.modelValue?.[item._index] ?? false
      item._disabled = !!item._disabled

      this.accordionItems.push(item)
    },

    // Provide-injected and used from w-accordion-item.
    unregisterItem (cuid) {
      const index = this.getAccordionItem(cuid)?._index
      if (index !== undefined) this.accordionItems.splice(index, 1)
    }
  },

  created () {
    if (!isNaN(this.items)) {
      consoleError(
        `Since version 3.17.3, the w-accordion \`items\` prop can no longer be a Number.
        Please use the new w-accordion-item component instead for advanced custom rendering.
        https://antoniandre.github.io/wave-ui/w-accordion#w-accordion-item`
      )
    }
  },

  unmounted () {
    this.accordionItems = []
  },

  watch: {
    modelValue (array) {
      if (this.expandSingle) {
        const firstExpandedIndex = array.findIndex(bool => !!bool)
        if (firstExpandedIndex > -1) array = array.fill(false, firstExpandedIndex + 1)
      }
      array.forEach((bool, i) => ((this.accordionItems[i] || {})._expanded = bool))
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
