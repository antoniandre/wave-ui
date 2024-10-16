<template lang="pug">
.w-accordion__item(:class="itemClasses" :aria-expanded="accordionItem._expanded ? 'true' : 'false'")
  .w-accordion__item-title(
    @click="!accordionItem._disabled && toggleItem(accordionItem, $event)"
    @focus="$emit('focus', getOriginalItem(accordionItem))"
    @keypress.enter="!accordionItem._disabled && toggleItem(accordionItem, $event)"
    :tabindex="!accordionItem._disabled && 0"
    :class="titleClasses")
    //- Expand icon on left.
    w-button.w-accordion__expand-icon(
      v-if="options.expandIcon && !options.expandIconRight"
      :icon="(accordionItem._expanded && options.collapseIcon) || options.expandIcon"
      :icon-props="options.expandIconProps"
      :disabled="accordionItem._disabled || null"
      :tabindex="-1"
      text
      @keypress.stop
      @click.stop="!accordionItem._disabled && toggleItem(accordionItem, $event)"
      :class="{ 'w-accordion__expand-icon--expanded': accordionItem._expanded, 'w-accordion__expand-icon--rotate90': options.expandIconRotate90 }")
    //- Title.
    slot(
      name="title"
      :item="getOriginalItem(accordionItem)"
      :expanded="accordionItem._expanded"
      :index="accordionItem._index + 1")
      .grow(v-html="accordionItem[options.itemTitleKey]")
    //- Expand icon on right.
    w-button.w-accordion__expand-icon(
      v-if="options.expandIcon && options.expandIconRight"
      :icon="(accordionItem._expanded && options.collapseIcon) || options.expandIcon"
      text
      @keypress.stop
      @click.stop="!accordionItem._disabled && toggleItem(accordionItem, $event)"
      :class="{ 'w-accordion__expand-icon--expanded': accordionItem._expanded, 'w-accordion__expand-icon--rotate90': options.expandIconRotate90 }")
  //- Content.
  w-transition-expand(y @after-leave="onEndOfCollapse(accordionItem)" :duration="options.duration")
    .w-accordion__item-content(v-if="accordionItem._expanded" :class="contentClasses")
      slot(
        name="content"
        :item="getOriginalItem(accordionItem)"
        :expanded="accordionItem._expanded"
        :index="accordionItem._index + 1")
        div(v-html="accordionItem[options.itemContentKey]")
</template>

<script>
export default {
  name: 'w-accordion-item',

  props: {
    item: { type: Object }
  },

  inject: [
    'options',
    'itemClasses',
    'titleClasses',
    'contentClasses',
    'toggleItem',
    'onEndOfCollapse',
    'getOriginalItem',
    'registerItem'
  ],

  emits: ['focus'],

  data () {
    return {
      accordionItem: {
        ...(this.item || {}),
        _index: this.item?._index ?? 0,
        _expanded: this.item?._expanded ?? false,
        _disabled: this.item?._disabled ?? false
      }
    }
  },

  computed: {
    itemClass () {
      return {
        'w-accordion__item--expanded': this.accordionItem._expanded,
        'w-accordion__item--disabled': this.accordionItem._disabled,
        [this.accordionItem[this.options.itemColorKey]]: this.accordionItem[this.options.itemColorKey],
        ...this.accordionItemClasses
      }
    }
  },

  created () {
    // Register this item to the w-accordion component.
    this.registerItem(this.accordionItem)
  }
}
</script>

<style lang="scss">
  .w-accordion__item {position: relative;}

  button.w-accordion__expand-icon {color: rgba(var(--w-base-color-rgb), 0.4);}
  .w-accordion__expand-icon {
    margin-right: $base-increment;

    .w-accordion--rotate-icon & {@include default-transition;}
    &--rotate90 {transform: rotate(-90deg);}
    &--expanded {transform: rotate(-180deg);}
    &--expanded.w-accordion__expand-icon--rotate90 {transform: rotate(0deg);}

    .w-icon:before {font-size: 1.1em;}
  }

.w-accordion__item-title {
  position: relative;
  display: flex;
  align-items: center;
  font-size: round(1.2 * $base-font-size);
  padding: 1 * $base-increment;
  user-select: none;
  cursor: pointer;
  border-top: $border;
  -webkit-tap-highlight-color: transparent;

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
    inset: 0;
    background-color: currentColor;
    opacity: 0;
    transition: $fast-transition-duration;
  }

  &:focus:before, &:hover:before {opacity: 0.03;}
  &:active:before {opacity: 0.05;}
  .w-accordion__item--disabled &:before {display: none;}
}

.w-accordion__item-content {
  padding: (2 * $base-increment) (3 * $base-increment);
}

</style>
