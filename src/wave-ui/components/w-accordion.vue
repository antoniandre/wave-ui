<template lang="pug">
  .w-accordion(:class="accordionClasses")
    .w-accordion__item(
      v-for="(item, i) in accordionItems"
      :key="i"
      :class="{ ...itemClasses, 'w-accordion__item--expanded': item.open }")
      .w-accordion__item-title(
        @click="toggleItem(item)"
        tabindex="0"
        @keypress.enter="toggleItem(item)"
        :class="titleClass")
        //- Expand icon on left.
        w-button.w-accordion__expand-icon(
          v-if="expandIcon && !expandIconRight"
          :icon="(item.open && collapseIcon) || expandIcon"
          text
          @click.stop="toggleItem(item)")
        //- Title.
        slot(v-if="$scopedSlots[`item-title-${item.id}`]" :name="`item-title-${item.id}`" :item="item")
        slot(v-else name="item-title" :item="item")
          div.grow(v-html="item.title")
        //- Expand icon on right.
        w-button.w-accordion__expand-icon(
          v-if="expandIcon && expandIconRight"
          :icon="(item.open && collapseIcon) || expandIcon"
          text
          @click.stop="toggleItem(item)")
      //- Content.
      w-transition-expand(y)
        .w-accordion__item-content(v-if="item.open" :class="contentClass")
          slot(v-if="$scopedSlots[`item-content-${item.id}`]" :name="`item-content-${item.id}`" :item="item")
          slot(v-else name="item-content" :item="item")
            div(v-html="item.content")
</template>

<script>
import Vue from 'vue'

export default {
  name: 'w-accordion',
  props: {
    value: { type: Array },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    items: { type: Array },
    itemClass: { type: String },
    titleClass: { type: String },
    contentClass: { type: String },
    expandIcon: { type: [String, Boolean], default: 'wi-triangle-down' },
    expandIconRight: { type: Boolean },
    expandSingle: { type: Boolean },
    collapseIcon: { type: String },
    shadow: { type: Boolean },
  },

  data: () => ({
  }),

  computed: {
    accordionItems () {
      return this.items.map((item, index) => new Vue.observable({ ...item, index, open: false }))
    },

    accordionClasses () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-accordion--shadow': this.shadow,
        'w-accordion--no-icon': !this.expandIcon && !this.collapseIcon,
        'w-accordion--icon-right': this.expandIcon && this.expandIconRight,
        'w-accordion--rotating-icon': this.expandIcon && !this.collapseIcon
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
      item.open = !item.open
      if (this.expandSingle) this.accordionItems.forEach(obj => obj.index !== item.index && (obj.open = false))
      this.$emit('input', this.accordionItems.map(item => item.open))
    }
  },

  watch: {
    value (array) {
      this.accordionItems.forEach((item, i) => {
        this.$set(item, 'open', (Array.isArray(array) && array[i]) || false)
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

    .w-accordion--rotating-icon & {@include default-transition;}
    .w-accordion--rotating-icon .w-accordion__item--expanded & {transform: rotate(-180deg);}
    .w-accordion--rotating-icon.w-accordion--icon-right .w-accordion__item--expanded & {transform: rotate(180deg);}

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
  }

  &__item-content {
    padding: (2 * $base-increment) (3 * $base-increment);
  }
}
</style>
