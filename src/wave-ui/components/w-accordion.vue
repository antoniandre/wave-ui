<template lang="pug">
.w-accordion(:class="accordionClasses")
  .w-accordion__item(
    v-for="(item, i) in accordionItems"
    :key="i"
    :class="{ ...itemClasses, 'w-accordion__item--expanded': item.expanded, 'w-accordion__item--disabled': item.disabled, [item[itemColor]]: item[itemColor] }")
    .w-accordion__item-title(
      @click="!item.disabled && toggleItem(item)"
      @focus="$emit('focus', item)"
      :tabindex="!item.disabled && 0"
      @keypress.enter="!item.disabled && toggleItem(item)"
      :class="titleClass")
      //- Expand icon on left.
      w-button.w-accordion__expand-icon(
        v-if="expandIcon && !expandIconRight"
        :icon="(item.expanded && collapseIcon) || expandIcon"
        :disabled="item.disabled || null"
        :tabindex="-1"
        text
        @keypress.stop
        @click.stop="!item.disabled && toggleItem(item)")
      //- Title.
      slot(
        v-if="$scopedSlots[`item-title.${item.id || i + 1}`]"
        :name="`item-title.${item.id || i + 1}`"
        :item="item"
        :expanded="item.expanded")
      slot(v-else name="item-title" :item="item" :expanded="item.expanded")
        div.grow(v-html="item[itemTitle]")
      //- Expand icon on right.
      w-button.w-accordion__expand-icon(
        v-if="expandIcon && expandIconRight"
        :icon="(item.expanded && collapseIcon) || expandIcon"
        text
        @keypress.stop
        @click.stop="!item.disabled && toggleItem(item)")
    //- Content.
    w-transition-expand(y)
      .w-accordion__item-content(v-if="item.expanded" :class="contentClass")
        slot(
          v-if="$scopedSlots[`item-content.${item.id || i + 1}`]"
          :name="`item-content.${item.id || i + 1}`"
          :item="item"
          :expanded="item.expanded")
        slot(v-else name="item-content" :item="item" :expanded="item.expanded")
          div(v-html="item[itemContent]")
</template>

<script>
import Vue from 'vue'

export default {
  name: 'w-accordion',

  props: {
    value: { type: Array },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    items: { type: [Array, Number], required: true },
    itemColor: { type: String, default: 'color' }, // Support a different color per item.
    itemTitle: { type: String, default: 'title' },
    itemContent: { type: String, default: 'content' },
    itemClass: { type: String },
    titleClass: { type: String },
    contentClass: { type: String },
    expandIcon: { type: [String, Boolean], default: 'wi-triangle-down' },
    expandIconRight: { type: Boolean },
    expandSingle: { type: Boolean },
    collapseIcon: { type: String },
    shadow: { type: Boolean }
  },

  emits: ['input', 'update:modelValue', 'focus'],

  computed: {
    accordionItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items || []
      return items.map((item, index) => new Vue.observable({
        ...item,
        index,
        expanded: this.value && this.value[index],
        disabled: !!item.disabled
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
    },

    itemClasses () {
      return {
        [this.itemClass]: this.itemClass || null
      }
    }
  },

  methods: {
    toggleItem (item) {
      item.expanded = !item.expanded
      if (this.expandSingle) this.accordionItems.forEach(obj => obj.index !== item.index && (obj.expanded = false))
      const expandedItems = this.accordionItems.map(item => item.expanded)
      this.$emit('update:modelValue', expandedItems)
      this.$emit('input', expandedItems)
    }
  },

  watch: {
    value (array) {
      this.accordionItems.forEach((item, i) => {
        this.$set(item, 'expanded', (Array.isArray(array) && array[i]) || false)
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
