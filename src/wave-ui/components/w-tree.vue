<template lang="pug">
ul(:class="`w-tree w-tree--depth${depth}`")
  li.w-tree__item(
    v-for="(item, i) in data"
    :key="i"
    :class="item.children ? 'w-tree__item--branch' : 'w-tree__item--leaf'")
    .w-tree__item-label
      w-icon(v-if="item.children") wi-triangle-down
      span {{ item.label }}
    w-tree(v-if="item.children" :depth="depth + 1" :data="item.children")
</template>

<script>
export default {
  name: 'w-tree',
  props: {
    data: { type: [Object, Array], required: true },
    depth: { type: Number, default: 0 }
  },

  emits: [],

  data: () => ({
  })
}
</script>

<style lang="scss">
.w-tree {
  margin: 0;

  &__item {
    list-style-type: none;
  }
  &__item--branch {}
  &__item--leaf {
    padding-left: $base-increment * 4;
  }

  &__item--branch > &__item-label {}

  // Recursive children.
  .w-tree {margin-left: $base-increment * 6;}
}
</style>
