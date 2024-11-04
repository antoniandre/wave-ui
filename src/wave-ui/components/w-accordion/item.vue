<template lang="pug">
.w-accordion__item(:class="itemClasses" :aria-expanded="accordionItem._expanded ? 'true' : 'false'")
  .w-accordion__item-title(
    @click="!accordionItem._disabled && toggleItem(accordionItem, $event)"
    @focus="$emit('focus', (accordionItem))"
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
    title: { type: String },
    content: { type: String },
    expanded: { type: Boolean },
    disabled: { type: Boolean }
  },

  inject: [
    'options',
    'titleClasses',
    'contentClasses',
    'onItemToggle',
    'onEndOfCollapse',
    'getOriginalItem',
    'getAccordionItem',
    'registerItem',
    'unregisterItem'
  ],

  emits: ['focus'],

  computed: {
    accordionItem: {
      get () {
        return this.getAccordionItem(this._.uid)
      },
      set () {}
    },
    itemClasses () {
      return {
        'w-accordion__item--expanded': this.accordionItem._expanded,
        'w-accordion__item--disabled': this.accordionItem._disabled,
        [this.accordionItem[this.options.itemColorKey]]: this.accordionItem[this.options.itemColorKey]
      }
    }
  },

  methods: {
    toggleItem (item, e) {
      item._expanded = !item._expanded

      this.onItemToggle(item)

      // When a focused item moves in the page, the scrollTop is naturally updated by the browser.
      // So if expandSingle is set to true, clicking on the next title of an open pane would shift the
      // scrollTop unless unfocused while transitioning. Issue #3.
      e.target.blur()
      setTimeout(() => e.target.focus(), 300)
    }
  },

  created () {
    // Register this item to the w-accordion component.
    this.registerItem({
      _cuid: this._.uid,
      _index: 0,
      _expanded: this.expanded,
      _disabled: this.disabled,
      title: this.title,
      content: this.content
    })
  },

  beforeUnmount () {
    this.unregisterItem(this._.uid)
  }
}
</script>

<style lang="scss">
.w-accordion__item {position: relative;}

button.w-accordion__expand-icon {color: color-mix(in srgb, var(--w-base-color) 40%, transparent);}
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
