<template lang="pug">
ul.w-tree(:class="classes")
  li.w-tree__item(
    v-for="(item, i) in currentDepthItems"
    :key="i"
    :class="item.children ? 'w-tree__item--branch' : 'w-tree__item--leaf'")
    .w-tree__item-label(
      @click="!disabled && onLabelClick(item, $event)"
      @keydown="!disabled && onLabelKeydown(item, $event)"
      :tabindex="!disabled && (item.children || selectable) ? 0 : null")
      w-button(
        v-if="item.children && ((expandIconOpen && item.open) || expandIcon)"
        color="inherit"
        :icon="(item.open && expandIconOpen) || expandIcon"
        :icon-props="{ rotate90a: !item.open }"
        :tabindex="-1"
        :disabled="disabled"
        text
        sm)
      w-icon(
        v-if="(item.children && (branchIcon || (branchIconOpen && item.open))) || (!item.children && leafIcon)"
        class="w-tree__item-icon").
        {{ item.children && (branchIcon || (branchIconOpen && item.open)) ? (branchIconOpen && item.open ? branchIconOpen : branchIcon) : leafIcon }}
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
/**
 * @todo things to support:
 * - items routes
 * - icon per item
 * - empty branch (by default it's a leaf)
 * - left border?
 **/

export default {
  name: 'w-tree',
  props: {
    data: { type: [Object, Array], required: true },
    depth: { type: Number, default: 0 },
    branchClass: { type: String },
    leafClass: { type: String },
    branchIcon: { type: String },
    branchIconOpen: { type: String },
    leafIcon: { type: String },
    expandIcon: { type: [Boolean, String], default: 'wi-triangle-down' },
    expandIconOpen: { type: [Boolean, String] },
    expandAll: { type: Boolean },
    disabled: { type: Boolean, default: true },
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
        'w-tree--expand-icon': this.expandIcon && !this.depth,
        'w-tree--disabled': this.disabled && !this.depth
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

    /**
     * Expand/collapse the given tree item when possible (not disabled, has children).
     *
     * @param {Object} item the item to expand.
     * @param {Boolean|Undefined} open when a boolean is received, force a state (open or close).
     */
    expandDepth (item, open) {
      if (typeof open === 'boolean') item.open = open
      else item.open = !item.open

      this.$emit(
        item.open ? 'before-open' : 'before-close',
        { item: item.originalItem, open: item.open, depth: this.depth }
      )

      return true // Just to chain instructions.
    },

    onLabelClick (item, e) {
      this.$emit('click', { item: item.originalItem, depth: this.depth, e })
      if (item.children) this.expandDepth(item)
    },

    onLabelKeydown (item, e) {
      // Keys: 13 enter, 32 space, 37 arrow left, 38 arrow up, 39 arrow right, 40 arrow down.
      if (!(e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) && [13, 32, 37, 38, 39, 40].includes(e.which)) {
        if (item.children) {
          if ([13, 32].includes(e.which)) this.expandDepth(item) && e.preventDefault()
          else if (e.which === 37) this.expandDepth(item, false) && e.preventDefault()
          else if (e.which === 39) this.expandDepth(item, true) && e.preventDefault()
        }

        // On arrow up or down, focus the prev or next item.
        if ([38, 40].includes(e.which)) {
          const treeRoot = this.$el.closest('.w-tree--depth0')
          const treeTabbableItems = treeRoot.querySelectorAll('.w-tree__item-label[tabindex="0"]')
          const currLabel = e.target.closest('.w-tree__item-label')
          const indexModifier = e.which === 38 ? -1 : 1;

          ([...treeTabbableItems]).some((item, i) => {
            if (item.isSameNode(currLabel)) {
              treeTabbableItems[i + indexModifier] && treeTabbableItems[i + indexModifier].focus()
              return true // Break the loop.
            }
          })
        }
      }
    },

    /**
     * Returns the previous sibling matching the given selector, or false if not found.
     *
     * @param {Object} node the DOM node to find sibling for.
     * @param {String} selector any valid DOM selector to match the siblings.
     */
    getPreviousSibling (node, selector) {
      while (selector && (node = node.previousElementSibling)) {
        if (node.matches(selector)) return node
      }
      return false
    },

    /**
     * Returns the next sibling matching the given selector, or false if not found.
     *
     * @param {Object} node the DOM node to find sibling for.
     * @param {String} selector any valid DOM selector to match the siblings.
     */
    getNextSibling (node, selector) {
      while (selector && (node = node.nextElementSibling)) {
        if (node.matches(selector)) return node
      }
      return false
    },

    focusTreeItem (liNode) {
      liNode && liNode.querySelector('.w-tree__item-label').focus()
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
  &__item {list-style-type: none;}
  &__item--branch {}
  &__item--leaf {padding-left: $base-increment * 5;}

  // Tree item label.
  // ------------------------------------------------------
  &__item-label {
    display: inline-flex;
    align-items: center;

    &:focus {background-color: rgba($primary, 0.1);}
  }

  &__item-icon {margin-right: $base-increment;}

  &__item--branch > &__item-label {cursor: pointer;}
  &--disabled &__item-label {cursor: auto;}
  &--disabled &__item--branch > &__item-label {opacity: 0.5;}

  // Recursive children.
  // ------------------------------------------------------
  .w-tree {margin-left: $base-increment * 4;}
}
</style>
