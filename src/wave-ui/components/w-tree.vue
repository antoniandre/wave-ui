<template lang="pug">
ul.w-tree(:class="classes")
  li.w-tree__item(
    v-for="(item, i) in currentDepthItems"
    :key="i"
    :class="item.children ? 'w-tree__item--branch' : 'w-tree__item--leaf'")
    .w-tree__item-label(@click="expandDepth(item)")
      w-button(
        v-if="item.children && expandIcon"
        color="inherit"
        icon="wi-triangle-down"
        :icon-props="{ rotate90a: !item.open }"
        text
        sm)
      span {{ item.label }}
    component(:is="noTransition ? 'div' : 'w-transition-expand'" :y="!noTransition")
      w-tree(
        v-if="item.children && item.open"
        v-bind="$props"
        :depth="depth + 1"
        :data="item.children")
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
    noTransition: { type: Boolean }
  },

  emits: [],

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
          _uid: i + 1,
          open: false
        })
      })
    },

    expandDepth (item) {
      item.open = !item.open
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
