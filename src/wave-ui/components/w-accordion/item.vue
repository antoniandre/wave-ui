<template lang="pug">
.w-accordion__item(:class="itemClasses" :aria-expanded="item._expanded ? 'true' : 'false'")
  .w-accordion__item-title(
    @click="!item._disabled && toggleItem(item, $event)"
    @focus="$emit('focus', getOriginalItem(item))"
    @keypress.enter="!item._disabled && toggleItem(item, $event)"
    :tabindex="!item._disabled && 0"
    :class="titleClasses")
    //- Expand icon on left.
    w-button.w-accordion__expand-icon(
      v-if="options.expandIcon && !options.expandIconRight"
      :icon="(item._expanded && options.collapseIcon) || options.expandIcon"
      :icon-props="options.expandIconProps"
      :disabled="item._disabled || null"
      :tabindex="-1"
      text
      @keypress.stop
      @click.stop="!item._disabled && toggleItem(item, $event)"
      :class="{ 'w-accordion__expand-icon--expanded': item._expanded, 'w-accordion__expand-icon--rotate90': options.expandIconRotate90 }")
    //- Title.
    slot(
      v-if="$slots[`item-title.${item.id || item._index + 1}`]"
      :name="`item-title.${item.id || item._index + 1}`"
      :item="getOriginalItem(item)"
      :expanded="item._expanded"
      :index="item._index + 1")
    slot(
      v-else
      name="item-title"
      :item="getOriginalItem(item)"
      :expanded="item._expanded"
      :index="item._index + 1")
      div.grow(v-html="item[options.itemTitleKey]")
    //- Expand icon on right.
    w-button.w-accordion__expand-icon(
      v-if="options.expandIcon && options.expandIconRight"
      :icon="(item._expanded && options.collapseIcon) || options.expandIcon"
      text
      @keypress.stop
      @click.stop="!item._disabled && toggleItem(item, $event)"
      :class="{ 'w-accordion__expand-icon--expanded': item._expanded, 'w-accordion__expand-icon--rotate90': options.expandIconRotate90 }")
  //- Content.
  w-transition-expand(y @after-leave="onEndOfCollapse(item)" :duration="options.duration")
    .w-accordion__item-content(v-if="item._expanded" :class="contentClasses")
      slot(
        v-if="$slots[`item-content.${item.id || item._index + 1}`]"
        :name="`item-content.${item.id || item._index + 1}`"
        :item="getOriginalItem(item)"
        :expanded="item._expanded"
        :index="item._index + 1")
      slot(
        v-else
        name="item-content"
        :item="getOriginalItem(item)"
        :expanded="item._expanded"
        :index="item._index + 1")
        div(v-html="item[options.itemContentKey]")
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
    'getOriginalItem'
  ],

  emits: ['focus'],

  computed: {
    itemClass () {
      return {
        'w-accordion__item--expanded': this.item._expanded,
        'w-accordion__item--disabled': this.item._disabled,
        [this.item[this.options.itemColorKey]]: this.item[this.options.itemColorKey],
        ...this.itemClasses
      }
    }
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
