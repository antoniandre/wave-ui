<template lang="pug">
.w-accordion(:class="accordionClasses")
  .w-accordion__item(
    v-for="(item, i) in accordionItems"
    :key="i"
    :class="itemClasses(item)"
    :aria-expanded="item._expanded ? 'true' : 'false'")
    .w-accordion__item-title(
      @click="!item._disabled && toggleItem(item, $event)"
      @focus="$emit('focus', getOriginalItem(item))"
      @keypress.enter="!item._disabled && toggleItem(item, $event)"
      :tabindex="!item._disabled && 0"
      :class="titleClass")
      //- Expand icon on left.
      w-button.w-accordion__expand-icon(
        v-if="expandIcon && !expandIconRight"
        :icon="(item._expanded && collapseIcon) || expandIcon"
        :disabled="item._disabled || null"
        :tabindex="-1"
        text
        @keypress.stop
        @click.stop="!item._disabled && toggleItem(item, $event)")
      //- Title.
      slot(
        v-if="$slots[`item-title.${item.id || i + 1}`]"
        :name="`item-title.${item.id || i + 1}`"
        :item="getOriginalItem(item)"
        :expanded="item._expanded" :index="i + 1")
      slot(v-else name="item-title" :item="getOriginalItem(item)" :expanded="item._expanded" :index="i + 1")
        div.grow(v-html="item[itemTitleKey]")
      //- Expand icon on right.
      w-button.w-accordion__expand-icon(
        v-if="expandIcon && expandIconRight"
        :icon="(item._expanded && collapseIcon) || expandIcon"
        text
        @keypress.stop
        @click.stop="!item._disabled && toggleItem(item, $event)")
    //- Content.
    w-transition-expand(y)
      .w-accordion__item-content(v-if="item._expanded" :class="contentClass")
        slot(
          v-if="$slots[`item-content.${item.id || i + 1}`]"
          :name="`item-content.${item.id || i + 1}`"
          :item="getOriginalItem(item)"
          :expanded="item._expanded" :index="i + 1")
        slot(v-else name="item-content" :item="getOriginalItem(item)" :expanded="item._expanded" :index="i + 1")
          div(v-html="item[itemContentKey]")
</template>

<script>
import { reactive } from 'vue'

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
    itemClass: { type: String },
    titleClass: { type: String },
    contentClass: { type: String },
    expandIcon: { type: [String, Boolean], default: 'wi-triangle-down' },
    expandIconRight: { type: Boolean },
    expandSingle: { type: Boolean },
    collapseIcon: { type: String },
    shadow: { type: Boolean }
  },

  emits: ['input', 'update:modelValue', 'focus', 'item-expand'],

  computed: {
    accordionItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items || []
      return items.map((item, _index) => reactive({
        ...item,
        _index,
        _expanded: this.modelValue && this.modelValue[_index],
        _disabled: !!item.disabled
      }))
    },

    accordionClasses () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-accordion--shadow': this.shadow,
        'w-accordion--no-icon': !this.expandIcon && !this.collapseIcon,
        'w-accordion--icon-right': this.expandIcon && this.expandIconRight,
        'w-accordion--rotate-icon': this.expandIcon && !this.collapseIcon
      }
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
    // Return the original accordion item (so there is no `_index`, etc.).
    getOriginalItem (item) {
      return this.items[item._index]
    },
    itemClasses (item) {
      return {
        [this.itemClass]: this.itemClass || null,
        'w-accordion__item--expanded': item._expanded,
        'w-accordion__item--disabled': item._disabled,
        [item[this.itemColorKey]]: item[this.itemColorKey]
      }
    }
  },

  watch: {
    modelValue (array) {
      this.accordionItems.forEach((item, i) => {
        item.expanded = (Array.isArray(array) && array[i]) || false
      })
    }
  }
}
</script>

<style lang="scss">
.w-accordion {
  z-index: 1;

  &--shadow {box-shadow: $box-shadow;}

  &__item {position: relative;}

  button.w-accordion__expand-icon {color: #999;}
  &__expand-icon {
    margin-right: $base-increment;

    .w-accordion--rotate-icon & {@include default-transition;}
    .w-accordion--rotate-icon .w-accordion__item--expanded & {transform: rotate(-180deg);}
    .w-accordion--rotate-icon.w-accordion--icon-right .w-accordion__item--expanded & {transform: rotate(180deg);}

    .w-icon:before {font-size: 1.1em;}
  }

  &__item-title {
    position: relative;
    display: flex;
    align-items: center;
    font-size: round(1.2 * $base-font-size);
    padding: 1 * $base-increment;
    user-select: none;
    cursor: pointer;
    border-top: $border;

    .w-accordion__item--disabled & {
      cursor: not-allowed;
      opacity: 0.6;
      -webkit-tap-highlight-color: transparent;
    }
    .w-accordion--no-icon &, .w-accordion--icon-right & {padding-left: 3 * $base-increment;}

    .w-accordion__item:first-child & {border-top-color: transparent;}

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: currentColor;
      opacity: 0;
      transition: $fast-transition-duration;
    }

    &:focus:before, &:hover:before {opacity: 0.03;}
    &:active:before {opacity: 0.05;}
    .w-accordion__item--disabled &:before {display: none;}
  }

  &__item-content {
    padding: (2 * $base-increment) (3 * $base-increment);
  }
}
</style>
