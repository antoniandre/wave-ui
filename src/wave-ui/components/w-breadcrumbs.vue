<template lang="pug">
.w-breadcrumbs
  template(v-for="(item, i) in items")
    //- Separator.
    span.w-breadcrumbs__separator(
      v-if="i && $slots.separator"
      :key="`${i}s`"
      :class="separatorColor")
      slot(name="separator")
    w-icon.w-breadcrumbs__separator(
      v-else-if="i"
      :key="`${i}s`"
      :class="separatorColor") {{ icon }}

    //- Link to parent pages.
    component.w-breadcrumbs__item(
      v-if="item[itemRouteKey] && (i < items.length - 1 || linkLastItem)"
      :key="i"
      :is="hasRouter ? 'router-link' : 'a'"
      :to="hasRouter && item[itemRouteKey]"
      :href="item[itemRouteKey]"
      v-html="item[itemLabelKey]"
      :class="color || null")

    //- Current page when linkLastItem is false.
    span(v-else :key="i" v-html="item[itemLabelKey]")
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

  data: () => ({

  }),

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
    }
  }
}
</script>

<style lang="scss">
.w-breadcrumbs {
  display: flex;
  align-items: center;

  &__item {}

  &__separator {
    margin-left: $base-increment;
    margin-right: $base-increment;
  }
}
</style>
