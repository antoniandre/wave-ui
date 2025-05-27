/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type {
  ComputedGetter,
  ComputedOptions,
  DefineComponent,
  EmitsOptions,
  ExtractDefaultPropTypes,
  MethodOptions,
  SlotsType
} from 'vue'

import type {
  PublicProps,
  ResolveProps
} from '../extra-vue-types'

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveTreeProps {
  /**
   * ``value` in Vue 2.`
   * This value gets updated with the tree selected item when using a `v-model` and when `selectable` is set to `true`.
   * @property {{}|Array<any>} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  modelValue?: {}|Array<any>

  /**
   * TODO: Add Description
   * @property {{}|Array<any>} [data]
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  data: {}|Array<any>

  /**
   * TODO: Add Description
   * @property {number} depth - Default: 0
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  depth?: number

  /**
   * TODO: Add Description
   * @property {{}} parent - Default: null
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  parent?: {}

  /**
   * TODO: Add Description
   * @property {string} branchClass
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  branchClass?: string

  /**
   * TODO: Add Description
   * @property {string} leafClass
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  leafClass?: string

  /**
   * TODO: Add Description
   * @property {string} branchIcon
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  branchIcon?: string

  /**
   * TODO: Add Description
   * @property {string} branchOpenIcon
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  branchOpenIcon?: string

  /**
   * TODO: Add Description
   * @property {string} leafIcon
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  leafIcon?: string

  /**
   * TODO: Add Description
   * @property {boolean|string} expandIcon - Default: 'wi-triangle-down'
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  expandIcon?: boolean|string

  /**
   * TODO: Add Description
   * @property {boolean|string} expandOpenIcon
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  expandOpenIcon?: boolean|string

  /**
   * TODO: Add Description
   * @property {boolean} expandAll
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  expandAll?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} unexpandableEmpty
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  unexpandableEmpty?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} disabled
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  disabled?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} noTransition
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  noTransition?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} selectable
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  selectable?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} deepReactivity
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  deepReactivity?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} counts
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  counts?: boolean

  /**
   * TODO: Add Description
   * @property {string} itemIconKey - Default: 'icon'
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  itemIconKey?: string

  /**
   * TODO: Add Description
   * @property {string} iconColor
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  iconColor?: string

  /**
   * TODO: Add Description
   * @property {string} itemLabelKey - Default: 'label'
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  itemLabelKey?: string

  /**
   * TODO: Add Description
   * @property {string} itemIconColorKey - Default: 'iconColor'
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  itemIconColorKey?: string

  /**
   * TODO: Add Description
   * @property {string} itemRouteKey - Default: 'route'
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  itemRouteKey?: string

  /**
   * TODO: Add Description
   * @property {string} itemDisabledKey - Default: 'disabled'
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  itemDisabledKey?: string

  /**
   * TODO: Add Description
   * @property {string} itemOpenKey - Default: 'open'
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  itemOpenKey?: string
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveTreeEmits {
  /**
   * test
   * @param {any} renameMe1 - The current tree item object.
   * @param {any} renameMe2 - An integer representing the item's depth in the tree. Starts at 0 for the root.
   * @param {any} renameMe3 - When applicable, a boolean representing the open state of the tree branch item.
   * @param {any} renameMe4 - An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  'onUpdate:modelValue'?: (renameMe1: any, renameMe2: any, renameMe3: any, renameMe4: any) => void

  /**
   * Fired right before opening a tree branch item and exposes the following parameters:
   * @param {any} renameMe1 - The current tree item object.
   * @param {any} renameMe2 - An integer representing the item's depth in the tree. Starts at 0 for the root.
   * @param {any} renameMe3 - When applicable, a boolean representing the open state of the tree branch item.
   * @param {any} renameMe4 - An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  'onBeforeOpen'?: (renameMe1: any, renameMe2: any, renameMe3: any, renameMe4: any) => void

  /**
   * Fired after opening a tree branch item and exposes the following parameters:
   * @param {any} renameMe1 - The current tree item object.
   * @param {any} renameMe2 - An integer representing the item's depth in the tree. Starts at 0 for the root.
   * @param {any} renameMe3 - When applicable, a boolean representing the open state of the tree branch item.
   * @param {any} renameMe4 - An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  'onOpen'?: (renameMe1: any, renameMe2: any, renameMe3: any, renameMe4: any) => void

  /**
   * Fired right before closing a tree branch item and exposes the following parameters:
   * @param {any} renameMe1 - The current tree item object.
   * @param {any} renameMe2 - An integer representing the item's depth in the tree. Starts at 0 for the root.
   * @param {any} renameMe3 - When applicable, a boolean representing the open state of the tree branch item.
   * @param {any} renameMe4 - An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  'onBeforeClose'?: (renameMe1: any, renameMe2: any, renameMe3: any, renameMe4: any) => void

  /**
   * Fired after closing a tree branch item and exposes the following parameters:
   * @param {any} renameMe1 - The current tree item object.
   * @param {any} renameMe2 - An integer representing the item's depth in the tree. Starts at 0 for the root.
   * @param {any} renameMe3 - When applicable, a boolean representing the open state of the tree branch item.
   * @param {any} renameMe4 - An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  'onClose'?: (renameMe1: any, renameMe2: any, renameMe3: any, renameMe4: any) => void

  /**
   * Fired on tree item click and exposes the following parameters:
   * @param {any} renameMe1 - The current tree item object.
   * @param {any} renameMe2 - An integer representing the item's depth in the tree. Starts at 0 for the root.
   * @param {any} renameMe3 - When applicable, a boolean representing the open state of the tree branch item.
   * @param {any} renameMe4 - An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.
   * @param {any} renameMe5 - The associated native click event.
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  'onClick'?: (renameMe1: any, renameMe2: any, renameMe3: any, renameMe4: any, renameMe5: any) => void

  /**
   * test
   * @param {any} renameMe1 - The current tree item object.
   * @param {any} renameMe2 - An integer representing the item's depth in the tree. Starts at 0 for the root.
   * @param {any} renameMe3 - When applicable, a boolean representing the open state of the tree branch item.
   * @param {any} renameMe4 - A boolean representing the selected state of the tree item.
   * @param {any} renameMe5 - An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.<br>All items of the array are the original tree items as they have been provided to the <strong class="code">w-tree</strong> component.
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  'onSelect'?: (renameMe1: any, renameMe2: any, renameMe3: any, renameMe4: any, renameMe5: any) => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveTreeComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  classes: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveTreeMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} items
   * @param {any} [oldItems] - []
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  updateCurrentDepthTree(items: any, oldItems?: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  getTreeItemComponent(item: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  getTreeItemTabindex(item: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  getTreeItemPath(item: any): void

  /**
   * TODO: Add Description
   * @param {any} ancestor
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  while(ancestor: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  getTreeItemPathForOutput(item: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @param {any} open
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  expandDepth(item: any, open: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  onLabelClick(item: any, e: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  onLabelKeydown(item: any, e: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  emitItemSelection(item: any, e: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @param {any} e
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  emitPayload(item: any, e: any): void

  /**
   * TODO: Add Description
   * @param {any} node
   * @param {any} selector
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  getPreviousSibling(node: any, selector: any): void

  /**
   * TODO: Add Description
   * @param {any} node
   * @param {any} selector
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  getNextSibling(node: any, selector: any): void

  /**
   * TODO: Add Description
   * @param {any} liNode
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  focusTreeItem(liNode: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  itemIcon(item: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  hasExternalLink(item: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  itemClasses(item: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveTreeSlots = SlotsType<{
  /**
   * Provide a custom template for all the items (includes the item icon if any, label, and count if active).
   * @param {any} item The current tree item object.
   * @param {any} depth An integer representing the item's depth in the tree. Starts at 0 for the root.
   * @param {any} open When applicable, a boolean representing the open state of the tree branch item.
   * @param {any} path An array containing the item's ancestors path, from the root to the leaf, including itself at the last position.
   * All items of the array are the original tree items as they have been provided to the `w-tree` component.
   * @see https://antoniandre.github.io/wave-ui/w-tree
   */
  'item': (_: { item: any, depth: any, open: any, path: any }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WTree = DefineComponent<
  WaveTreeProps,
  {},
  {},
  WaveTreeComputeds,
  WaveTreeMethods,
  {},
  {},
  WaveTreeEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveTreeProps & WaveTreeEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveTreeProps>,
  WaveTreeSlots
>
