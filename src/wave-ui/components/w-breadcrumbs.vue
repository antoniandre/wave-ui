<template lang="pug">
.w-breadcrumbs(:class="classes")
  template(v-for="(item, i) in items")
    //- Separator.
    span.w-breadcrumbs__separator(
      v-if="i && $slots.separator"
      :key="`${i}a`"
      :class="separatorColor")
      slot(name="separator" :index="i")
    w-icon.w-breadcrumbs__separator(
      v-else-if="i"
      :key="`${i}b`"
      :class="separatorColor") {{ icon }}

    //- Link to parent pages.
    template(v-if="item[itemRouteKey] && (i < items.length - 1 || linkLastItem)")
      component.w-breadcrumbs__item(
        v-if="$slots.item"
        :key="`${i}c`"
        :is="hasRouter ? 'router-link' : 'a'"
        :to="hasRouter && item[itemRouteKey]"
        :href="item[itemRouteKey]"
        :class="breadcrumbLinkClasses"
        @pointerdown="onRipple")
        slot(name="item" :item="item" :index="i + 1" :isLast="i === items.length - 1")
      component.w-breadcrumbs__item(
        v-else
        :key="`${i}d`"
        :is="hasRouter ? 'router-link' : 'a'"
        :to="hasRouter && item[itemRouteKey]"
        :href="item[itemRouteKey]"
        v-html="item[itemLabelKey]"
        :class="breadcrumbLinkClasses"
        @pointerdown="onRipple")

    //- Current page when linkLastItem is false.
    slot(
      v-else-if="$slots.item"
      :key="`${i}e`"
      name="item"
      :item="item"
      :index="i + 1"
      :is-last="i === items.length - 1")
    span(v-else :key="`${i}f`" v-html="item[itemLabelKey]")
</template>

<script>
import RippleMixin from '../mixins/ripple'

export default {
  name: 'w-breadcrumbs',

  mixins: [RippleMixin],

  props: {
    items: { type: Array, required: true },
    linkLastItem: { type: Boolean },
    color: { type: String }, // Applies on links.
    separatorColor: { type: String, default: 'grey-light1' },
    icon: { type: String, default: 'wi-chevron-right' },
    itemRouteKey: { type: String, default: 'route' },
    itemLabelKey: { type: String, default: 'label' },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean }
  },

  emits: [],

  computed: {
    breadcrumbLinkClasses () {
      return [this.color || null, { 'w-ripple': this.rippleActive }]
    },

    hasRouter () {
      return '$router' in this
    },
    size () {
      return (
        (this.xs && 'xs') ||
        (this.sm && 'sm') ||
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        'md'
      )
    },
    classes () {
      return {
        [`size--${this.size}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
.w-breadcrumbs {
  display: flex;
  align-items: center;

  &.size--xs {font-size: round(nearest, calc(0.8 * var(--w-base-font-size)), 1px);}
  &.size--sm {font-size: round(nearest, calc(0.9 * var(--w-base-font-size)), 1px);}
  &.size--md {font-size: round(nearest, calc(1.05 * var(--w-base-font-size)), 1px);}
  &.size--lg {font-size: round(nearest, calc(1.2 * var(--w-base-font-size)), 1px);}
  &.size--xl {font-size: round(nearest, calc(1.4 * var(--w-base-font-size)), 1px);}

  &__separator {
    margin-left: var(--w-base-increment);
    margin-right: var(--w-base-increment);
  }
}
</style>
