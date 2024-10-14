<template lang="pug">
.w-accordion(:class="accordionClasses")
  w-accordion-item(
    v-for="(item, i) in accordionItems"
    :key="i"
    :class="itemClass"
    :item="item"
    @focus="$emit('focus', $event)")
    //- Title.
    template(
      v-if="$slots[itemsSlot[i]['title']]"
      #[itemsSlot[i]['title']]="{ item, expanded, index }")
      slot(
        :name="itemsSlot[i]['title']"
        :item="item"
        :expanded="expanded"
        :index="index")
    template(v-else #item-title="{ item, expanded, index }")
      slot(
        name="item-title"
        :item="item"
        :expanded="expanded"
        :index="index")
        div.grow(v-html="item[itemTitleKey]")
    //- Content.
    template(
      v-if="$slots[itemsSlot[i]['content']]"
      #[itemsSlot[i]['content']]="{ item, expanded, index }")
      slot(
        :name="itemsSlot[i]['content']"
        :item="item"
        :expanded="expanded"
        :index="index")
    template(v-else #item-content="{ item, expanded, index }")
      slot(
        name="item-content"
        :item="item"
        :expanded="expanded"
        :index="index")
        div(v-html="item[itemContentKey]")
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
    items: { type: [Array, Number], required: true },
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

  provide () {
    return {
      itemClasses: objectifyClasses(this.itemClasses),
      titleClasses: this.titleClasses,
      contentClasses: this.contentClasses,
      toggleItem: this.toggleItem,
      onEndOfCollapse: this.onEndOfCollapse,
      getOriginalItem: this.getOriginalItem,
      options: this.$props
    }
  },

  data: () => ({
    accordionItems: []
  }),

  computed: {
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
    },

    // Bypass Vue’s template limitations when handling dynamic expressions inside named v-slot templates.
    itemsSlot () {
      return this.accordionItems.map(item => ({
        title: `item-title.${item.id || (item._index + 1)}`,
        content: `item-content.${item.id || (item._index + 1)}`
      }))
    }
  },

  methods: {
    toggleItem (item, e) {
      item._expanded = !item._expanded
      if (this.expandSingle) this.accordionItems.forEach(obj => obj._index !== item._index && (obj._expanded = false))
      const expandedItems = this.accordionItems.map(item => item._expanded || false)
      this.$emit('update:modelValue', expandedItems)
      this.$emit('input', expandedItems)
      this.$emit('item-expand', { item, expanded: item._expanded })

      // When a focused item moves in the page, the scrollTop is naturally updated by the browser.
      // So if expandSingle is set to true, clicking on the next title of an open pane would shift the
      // scrollTop unless unfocused while transitioning. #3.
      e.target.blur()
      setTimeout(() => e.target.focus(), 300)
    },
    onEndOfCollapse (item) {
      this.$emit('item-collapsed', { item, expanded: item._expanded })
    },
    // Return the original accordion item (so there is no `_index`, etc.).
    getOriginalItem (item) {
      return this.items[item._index]
    },
    updateItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items || []
      this.accordionItems = items.map((item, _index) => ({
        ...item,
        _index,
        _expanded: this.modelValue && this.modelValue[_index],
        _disabled: !!item.disabled
      }))
    }
  },

  created () {
    this.updateItems()
  },

  watch: {
    modelValue () {
      this.updateItems()
    },
    items: {
      handler () {
        this.updateItems()
      },
      deep: true
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
