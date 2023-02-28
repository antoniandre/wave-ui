<template lang="pug">
ul.w-tree(:class="classes")
  li.w-tree__item(
    v-for="(item, i) in currentDepthItems"
    :key="i"
    :class="itemClasses(item)")
    //- The keys `route` & `disabled` are always present in any currentDepthItems.
    component.w-tree__item-label(
      :is="!disabled && !item.disabled && item.route ? (!$router || hasExternalLink(item) ? 'a' : 'router-link') : 'div'"
      v-bind="item.route && { [!$router || hasExternalLink(item) ? 'href' : 'to']: item.route }"
      @click="!disabled && !item.disabled && onLabelClick(item, $event)"
      @keydown="!disabled && !item.disabled && onLabelKeydown(item, $event)"
      :tabindex="!disabled && !item.disabled && (item.children || item.branch || selectable) && !(unexpandableEmpty && !item.children) ? 0 : null")
      //- @click.stop to not follow link if item is a link.
      w-button.w-tree__item-expand(
        v-if="(item.children || item.branch) && ((expandOpenIcon && item.open) || expandIcon) && !(unexpandableEmpty && !item.children)"
        @click.stop="!disabled && !item.disabled && onLabelClick(item, $event)"
        color="inherit"
        :icon="(item.open && expandOpenIcon) || expandIcon"
        :icon-props="{ rotate90a: !item.open }"
        :tabindex="-1"
        :disabled="disabled || item.disabled"
        text
        sm)
      slot(name="item" :item="item.originalItem" :depth="depth" :open="item.open")
        w-icon(v-if="itemIcon(item)" class="w-tree__item-icon" :color="item.originalItem[itemIconColorKey] || iconColor") {{ itemIcon(item) }}
        span(v-html="item.label")
        span.ml1(v-if="counts && (item.children || item.branch)").
          ({{ item.originalItem.children?.length || 0 }})
    component(
      :is="noTransition ? 'div' : 'w-transition-expand'"
      :y="!noTransition || null"
      @after-enter="$emit('open', { item: item.originalItem, open: item.open, depth })"
      @after-leave="$emit('close', { item: item.originalItem, open: item.open, depth })")
      w-tree(
        v-if="item.children && item.open"
        v-bind="$props"
        :depth="depth + 1"
        :data="item.originalItem.children"
        @before-open="$emit('before-open', $event)"
        @open="$emit('open', $event)"
        @before-close="$emit('before-close', $event)"
        @close="$emit('close', $event)"
        @click="$emit('click', $event)"
        @select="$emit('select', $event)"
        @update:model-value="$emit('update:model-value', $event)")
        template(#item="{ item, depth, open }")
          slot(name="item" :item="item" :depth="depth" :open="open")
</template>

<script>
import { consoleWarn } from '../utils/console'
/**
 * @todo:
 * - option to add a left border.
 **/

export default {
  name: 'w-tree',
  props: {
    modelValue: { type: [Object, Array] },
    data: { type: [Object, Array], required: true },
    depth: { type: Number, default: 0 },
    branchClass: { type: String },
    leafClass: { type: String },
    branchIcon: { type: String },
    branchOpenIcon: { type: String },
    leafIcon: { type: String },
    expandIcon: { type: [Boolean, String], default: 'wi-triangle-down' },
    expandOpenIcon: { type: [Boolean, String] },
    expandAll: { type: Boolean },
    unexpandableEmpty: { type: Boolean },
    disabled: { type: Boolean },
    noTransition: { type: Boolean },
    selectable: { type: Boolean },
    // By default it only reacts to items count change (added or deleted items) not property of items change.
    deepReactivity: { type: Boolean },
    counts: { type: Boolean },
    itemIconKey: { type: String, default: 'icon' }, // Support a different icon per item.
    iconColor: { type: String }, // Applies a color on all the label item icons.
    itemLabelKey: { type: String, default: 'label' }, // Specify a different key for the item label.
    itemIconColorKey: { type: String, default: 'iconColor' }, // Applies a specific color on each label item icons.
    itemRouteKey: { type: String, default: 'route' }, // Uses a router link if the item has the `route` key.
    itemDisabledKey: { type: String, default: 'disabled' }, // Disables the item click and selection.
    itemOpenKey: { type: String, default: 'open' } // Open the item by default.
  },

  emits: ['update:model-value', 'before-open', 'open', 'before-close', 'close', 'click', 'select'],

  data: () => ({
    currentDepthItems: [], // A clone of the data prop with additional info per item.
    dataPropUnwatch: null // Holds the unwatch handler of the data prop.
  }),

  computed: {
    classes () {
      return {
        [`w-tree--depth${this.depth}`]: true,
        'w-tree--expand-icon': this.expandIcon && !this.depth,
        'w-tree--disabled': this.disabled && !this.depth,
        'w-tree--no-expand-button': !this.expandIcon
      }
    }
  },

  methods: {
    //  From data watcher, retain the oldItems open state.
    updateCurrentDepthTree (items, oldItems = []) {
      this.currentDepthItems = []

      if (!Array.isArray(items) && typeof items !== 'object') {
        return consoleWarn(`[w-tree] the tree items must be of type array or object, ${typeof items} received.`, items)
      }

      if (!Array.isArray(items)) items = [items]

      items.forEach((item, i) => {
        this.currentDepthItems.push({
          originalItem: item, // Store the original item to return it on event emits.
          _uid: this.depth.toString() + (i + 1),
          label: item[this.itemLabelKey],
          children: !!item.children, // The children tree remains available in originalItem.
          branch: item.branch,
          route: item[this.itemRouteKey],
          disabled: item[this.itemDisabledKey],
          depth: this.depth,
          open: !!(oldItems[i]?.open || this.expandAll || item[this.itemOpenKey])
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

      const emitParams = { item: item.originalItem, open: item.open, depth: this.depth }

      this.$emit(item.open ? 'before-open' : 'before-close', emitParams)

      if (!this.unexpandableEmpty && !item.children) {
        this.$emit(item.open ? 'open' : 'close', emitParams)
      }

      return true // Just to chain instructions.
    },

    onLabelClick (item, e) {
      const route = item[this.itemRouteKey]
      if (route && this.$router && !this.hasExternalLink(item)) e.preventDefault()

      this.$emit('click', { item: item.originalItem, depth: this.depth, e })
      if (item.children || (item.branch && !this.unexpandableEmpty)) this.expandDepth(item)

      if (this.selectable) this.emitItemSelection(item, e)
    },

    emitItemSelection (item, e) {
      const emitParams = { item: item.originalItem, depth: this.depth, e }
      if (item.children || (item.branch && !this.unexpandableEmpty)) {
        emitParams.open = item.open
      }
      this.$emit('update:model-value', emitParams)
      this.$emit('select', emitParams)
    },

    onLabelKeydown (item, e) {
      // Keys: 13 enter, 32 space, 37 arrow left, 38 arrow up, 39 arrow right, 40 arrow down.
      if (!(e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) && [13, 32, 37, 38, 39, 40].includes(e.which)) {
        if (item.children || item.branch) {
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
            return false
          })
        }
      }

      if (this.selectable) this.emitItemSelection(item, e)
    },

    /**
     * Returns the previous sibling matching the given selector, or false if not found.
     *
     * @param {Object} node the DOM node to find sibling for.
     * @param {String} selector any valid DOM selector to match the siblings.
     */
    getPreviousSibling (node, selector) {
      // eslint-disable-next-line no-unmodified-loop-condition
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
      // eslint-disable-next-line no-unmodified-loop-condition
      while (selector && (node = node.nextElementSibling)) {
        if (node.matches(selector)) return node
      }
      return false
    },

    focusTreeItem (liNode) {
      liNode && liNode.querySelector('.w-tree__item-label').focus()
    },

    itemIcon (item) {
      return (
        item.originalItem[this.itemIconKey] ||
        (!item.children && !item.branch && this.leafIcon) ||
        ((item.children || item.branch) && ((item.open && this.branchOpenIcon) || this.branchIcon))
      )
    },

    hasExternalLink (item) {
      return /^(https?:)?\/\/|mailto:|tel:/.test(item[this.itemRouteKey])
    },

    itemClasses (item) {
      return {
        [item.children || item.branch ? 'w-tree__item--branch' : 'w-tree__item--leaf']: true,
        'w-tree__item--disabled': item[this.itemDisabledKey],
        'w-tree__item--empty': item.branch && !item.children,
        'w-tree__item--unexpandable': item.branch && !item.children && this.unexpandableEmpty
      }
    }
  },

  created () {
    this.updateCurrentDepthTree(this.data)
    this.dataPropUnwatch = this.$watch(
      'data',
      // The open property of each item has to be retained from this.currentDepthItems in order to stay
      // in the same state after DOM repaint.
      items => this.updateCurrentDepthTree(items, this.currentDepthItems),
      { deep: !!this.deepReactivity } // Deep watching is more resource consuming. Only enable on user demand.
    )
  },

  unmounted () {
    this.dataPropUnwatch()
  }
}
</script>

<style lang="scss">
$expand-icon-size: 20px;

.w-tree {
  margin: 0;

  // Tree items.
  // ------------------------------------------------------
  &__item {list-style-type: none;}
  &__item--branch {}
  &__item--leaf {margin-left: $base-increment * 5 + 2px;}
  &--no-expand-button &__item--leaf {margin-left: 0;}

  // Tree item label.
  // ------------------------------------------------------
  &__item-label {
    position: relative;
    display: inline-flex;
    align-items: center;
    user-select: none;

    &:before {
      content: '';
      position: absolute;
      top: -1px;
      bottom: -1px;
      left: - $base-increment + 2px;
      right: - $base-increment - 2px;
      border-radius: $border-radius;
    }
    &:hover:before {background-color: rgba($primary, 0.05);}
    &:focus:before {background-color: rgba($primary, 0.1);}
  }
  &__item--leaf &__item-label:before {
    left: - $base-increment;
    right: - $base-increment;
  }
  &__item--disabled &__item-label {opacity: 0.5;}
  &__item--disabled &__item-label:before {display: none;}

  &__item-expand {margin-right: 2px;}

  &__item--branch > &__item-label {cursor: pointer;}
  &__item--disabled > &__item-label {
    color: $disabled-color;
    cursor: not-allowed;
    -webkit-tap-highlight-color: transparent;
  }
  &__item--unexpandable > &__item-label {
    margin-left: $expand-icon-size + 2px;
    cursor: auto;
  }
  &--disabled &__item-label {cursor: auto;}
  &--disabled &__item--branch > &__item-label {opacity: 0.5;}

  &__item-icon {margin-right: $base-increment;}

  // Recursive children.
  // ------------------------------------------------------
  .w-tree {margin-left: $base-increment * 5;}
}
</style>
