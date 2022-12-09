<template lang="pug">
ul.w-tree(:class="classes")
  li.w-tree__item(
    v-for="(item, i) in currentDepthItems"
    :key="i"
    :class="item.children ? 'w-tree__item--branch' : 'w-tree__item--leaf'")
    .w-tree__item-label(@click="onLabelClick(item, $event)")
      w-button(
        v-if="item.children && expandIcon"
        color="inherit"
        icon="wi-triangle-down"
        :icon-props="{ rotate90a: !item.open }"
        text
        sm)
      span {{ item.label }}
    component(
      :is="noTransition ? 'div' : 'w-transition-expand'"
      :y="!noTransition"
      @after-enter="$emit('open', { item: item.originalItem, open: item.open, depth })"
      @after-leave="$emit('close', { item: item.originalItem, open: item.open, depth })")
      w-tree(
        v-if="item.children && item.open"
        v-bind="$props"
        :depth="depth + 1"
        :data="item.children"
        @before-open="$emit('before-open', $event)"
        @open="$emit('open', $event)"
        @before-close="$emit('before-close', $event)"
        @close="$emit('close', $event)"
        @click="$emit('click', $event)")
</template>

<script>
export default {
  name: 'w-tree',
  props: {
    data: { type: [Object, Array], required: true },
    depth: { type: Number, default: 0 },
    branchClass: { type: String },
    leafClass: { type: String },
    branchIcon: { type: String },
    leafIcon: { type: String },
    expandIcon: { type: [Boolean, String], default: 'wi-triangle-down' },
    expandAll: { type: Boolean },
    noTransition: { type: Boolean },
    selectable: { type: Boolean }
  },

  emits: ['before-open', 'open', 'before-close', 'close', 'click'],

  data: () => ({
    currentDepthItems: []
  }),

  computed: {
    classes () {
      return {
        [`w-tree--depth${this.depth}`]: true,
        'w-tree--expand-icon': this.expandIcon && !this.depth
      }
    }
  },

  methods: {
    updateCurrentDepthTree (items) {
      this.currentDepthItems = []
      items.forEach((item, i) => {
        this.currentDepthItems.push({
          ...item,
          originalItem: item,
          _uid: this.depth.toString() + (i + 1),
          depth: this.depth,
          open: false
        })
      })
    },

    expandDepth (item) {
      item.open = !item.open
      this.$emit(
        item.open ? 'before-open' : 'before-close',
        { item: item.originalItem, open: item.open, depth: this.depth }
      )
    },

    onLabelClick (item, e) {
      this.$emit('click', { item: item.originalItem, depth: this.depth, e })
      if (item.children) this.expandDepth(item)
    }
  },

  created () {
    this.updateCurrentDepthTree(this.data)
  },

  watch: {
    data (items) {
      updateCurrentDepthTree(items)
    }
  }
}
</script>

<style lang="scss">
.w-tree {
  margin: 0;

  // Tree items.
  // ------------------------------------------------------
  &__item {
    list-style-type: none;
  }
  &__item--branch {}
  &__item--leaf {
    padding-left: $base-increment * 5;
  }

  // Tree item label.
  // ------------------------------------------------------
  &__item-label {
    display: inline-flex;
    align-items: center;
  }
  &__item--branch > &__item-label {
    cursor: pointer;
  }

  // Recursive children.
  // ------------------------------------------------------
  .w-tree {margin-left: $base-increment * 4;}
}
</style>
