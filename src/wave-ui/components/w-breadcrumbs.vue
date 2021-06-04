<template lang="pug">
.w-breadcrumbs(:class="classes")
  template(v-for="(item, i) in items")
    //- Separator.
    span.w-breadcrumbs__separator(
      v-if="i && $scopedSlots.separator"
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
        v-if="$scopedSlots.item"
        :key="`${i}c`"
        :is="hasRouter ? 'router-link' : 'a'"
        :to="hasRouter && item[itemRouteKey]"
        :href="item[itemRouteKey]"
        :class="color || null")
        slot(name="item" :item="item" :index="i + 1" :is-last="i === items.length - 1")
      component.w-breadcrumbs__item(
        v-else
        :key="`${i}d`"
        :is="hasRouter ? 'router-link' : 'a'"
        :to="hasRouter && item[itemRouteKey]"
        :href="item[itemRouteKey]"
        v-html="item[itemLabelKey]"
        :class="color || null")

    //- Current page when linkLastItem is false.
    slot(
      v-else-if="$scopedSlots.item"
      name="item"
      :item="item"
      :index="i + 1"
      :is-last="i === items.length - 1")
    span(v-else :key="`${i}f`" v-html="item[itemLabelKey]")
</template>

<script>
export default {
  name: 'w-breadcrumbs',
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

  &.size--xs {font-size: round(0.8 * $base-font-size);}
  &.size--sm {font-size: round(0.9 * $base-font-size);}
  &.size--md {font-size: round(1.05 * $base-font-size);}
  &.size--lg {font-size: round(1.2 * $base-font-size);}
  &.size--xl {font-size: round(1.4 * $base-font-size);}

  &__separator {
    margin-left: $base-increment;
    margin-right: $base-increment;
  }
}
</style>
