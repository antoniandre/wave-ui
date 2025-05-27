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
// Additional Types
// ----------------------------------------------------------------------------
export interface WTabsItem {
  /**
   * The title of the tab. It will use `v-html` to display it.
   * NOTE: This key can be overridden by the `itemTitleKey` prop.
   * @property {string} [title]
   */
  title?: string;

  /**
   * The content of the tab. It will use `v-html` to display it.
   * NOTE: This key can be overridden by the `itemContentKey` prop.
   * @property {string} [content]
   */
  content?: string;

  /**
   * Any additional content you'd like to pass to the tab, or for custom keys.
   */
  [key: string]: any;
}

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------
export interface WaveTabsProps {
  /**
   * `value` in Vue 2.
   * Provide a tab index (a number starting from 0) to open it. This value gets updated when using a v-model.
   * @property {number|string} modelValue
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  modelValue?: number|string

  /**
   * Applies a color to the each tab title's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} color
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  color?: string

  /**
   * Applies a color to the each tab title's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} bgColor
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  bgColor?: string

  /**
   * Expecting an array of objects. Each object being an tab item, it should include a `title` and `content` attributes.
   * Alternatively, you can provide an integer number (call it `x`), to loop through and create `x` tabs. You can then use the individual slots `item-title.x` & `item-content.x` to define each item title and content.
   * @property {Array<WTabsItem>|number} items
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  items?: Array<WTabsItem>|number

  /**
   * Specifies the name of the attribute in each item object where to find the item's unique ID.
   * Having a unique ID is important when injecting and replacing tabs. If no unique id is provided, Wave UI will generate one and `inject it in each item`.
   * @property {string} itemIdKey - Default: 'id'
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  itemIdKey?: string

  /**
   * Specifies the name of the attribute in each item object where to find the item's title string.
   * @property {string} itemTitleKey - Default: 'title'
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  itemTitleKey?: string

  /**
   * Specifies the name of the attribute in each item object where to find the item's content string.
   * @property {string} itemContentKey - Default: 'content'
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  itemContentKey?: string

  /**
   * Applies a custom CSS class to the tab title.
   * @property {string} titleClass
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  titleClass?: string

  /**
   * Applies a custom CSS class to the active tab title.
   * @property {string} activeClass - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  activeClass?: string

  /**
   * When set to `true`, removes the slider under the active tab title.
   * @property {boolean} noSlider
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  noSlider?: boolean

  /**
   * When set to `true`, places the slider under the active tab title text in a pill shape.
   * @property {boolean} pillSlider
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  pillSlider?: boolean

  /**
   * Provide a custom color for the tabs slider (`primary` by default).
   * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
   * Providing a color hex, rgb(a) or hsl(a) will not work.
   * @property {string} sliderColor - Default: 'primary'
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   * @see https://antoniandre.github.io/wave-ui/colors
   */
  sliderColor?: string

  /**
   * Applies a custom CSS class to the tab content.
   * @property {string} contentClass
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  contentClass?: string

  /**
   * Applies a particular transition to the tab contents when switching tab.
   * Check all the transitions that apply to this component in the `Content transitions` example.
   * @property {string|boolean} transition - Default: ''
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   * @see https://antoniandre.github.io/wave-ui/#content-transitions
   */
  transition?: string|boolean

  /**
   * When set to `true`, the tabs titles will occupy the full available width.
   * @property {boolean} fillBar
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  fillBar?: boolean

  /**
   * Centers the tabs titles.
   * @property {boolean} center
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  center?: boolean

  /**
   * Aligns the tabs titles to the right.
   * @property {boolean} right
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  right?: boolean

  /**
   * Applies the card style on all the tabs titles.
   * @property {boolean} card
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  card?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} dark
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  dark?: boolean

  /**
   * TODO: Add Description
   * @property {boolean} light
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  light?: boolean

  /**
   * When set to `true` and by default, the tabs will be kept alive. Which means that the state of the components in each tab will be maintained when switching tabs and the `mounted` hook will only be run the first time it is open.
   * When explicitly set to `false`, the tab state will be reset upon each reopening, and the `mounted` hook will be run again.
   * The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.
   * You can read more about the keep-alive behavior in the `Vue official documentation for keep-alive <i class="w-icon mdi mdi-open-in-new"></i>`.
   * @property {boolean} keepAlive - Default: true
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   * @see https://antoniandre.github.io/wave-ui/https://vuejs.org/guide/built-ins/keep-alive.html
   */
  keepAlive?: boolean

  /**
   * `Will deactivate the `keep-alive` prop.` When set to `true`, the tabs will always stay in the DOM (even when not the active tab), unless they are deleted in the tabs array.
   * Note that the `mounted` hook will be run once per tab, as soon as they are appended to the DOM.
   * The default behavior is to keep the tabs alive, but unmount any inactive tab from the DOM.
   * @property {boolean} keepInDom - Default: false
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  keepInDom?: boolean
}

// ----------------------------------------------------------------------------
// Emits
// ----------------------------------------------------------------------------
export interface WaveTabsEmits {
  /**
   * Emitted each time the current tab changes.<br>Updates the v-model value in Vue 2.x only.
   * @param {Array<boolean>} tabsOpened - An array of booleans representing the active state of each tab.
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  'onInput'?: (tabsOpened: Array<boolean>) => void

  /**
   * Emitted each time the current tab changes.<br>Updates the v-model value in Vue 3 only.
   * @param {Array<boolean>} tabsOpened - An array of booleans representing the active state of each tab.
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  'onUpdate:modelValue'?: (tabsOpened: Array<boolean>) => void

  /**
   * Emitted on each tab title focus.
   * @param {WTabsItem} tab - The focused tab item object.
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  'onFocus'?: (tab: WTabsItem) => void
}

// ----------------------------------------------------------------------------
// Computeds
// ----------------------------------------------------------------------------
export interface WaveTabsComputeds extends ComputedOptions {
  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  transitionName: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  transitionMode: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  direction: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  activeTab: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  tabsByUid: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  tabsClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  tabsBarClasses: ComputedGetter<any>

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  sliderStyles: ComputedGetter<any>
}

// ----------------------------------------------------------------------------
// Methods
// ----------------------------------------------------------------------------
export interface WaveTabsMethods extends MethodOptions {
  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  addTab(item: any): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  refreshTabs(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  reopenTheActiveTab(): void

  /**
   * TODO: Add Description
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  onResize(): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  barItemClasses(item: any): void

  /**
   * TODO: Add Description
   * @param {any} uid
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  openTab(uid: any): void

  /**
   * TODO: Add Description
   * @param {any} [domLookup] - true
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  updateSlider(domLookup?: any): void

  /**
   * TODO: Add Description
   * @param {any} index
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  updateActiveTab(index: any): void

  /**
   * TODO: Add Description
   * @param {any} item
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  getOriginalItem(item: any): void
}

// ----------------------------------------------------------------------------
// Slots
// ----------------------------------------------------------------------------
export type WaveTabsSlots = SlotsType<{
  /**
   * Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the `item-title.x` slot.
   * @param {WTabsItem} item The current tab object.
   * @param {number} index The tab index in the array of tabs. Starts at 1 to be consistent with the `item.x` slot.
   * @param {boolean} active A boolean representing the active state of the tab.
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  'item-title': (_: { item: WTabsItem, index: number, active: boolean }) => any

  /**
   * Any addition content to be appended to the end of the tabs bar
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  'tabs-bar-extra': () => any

  /**
   * Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the `item-content.x` slot.
   * @param {WTabsItem} item The current tab object.
   * @param {number} index The tab index in the array of tabs. Starts at 1 to be consistent with the `item.x` slot.
   * @param {boolean} active A boolean representing the active state of the tab.
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  'item-content': (_: { item: WTabsItem, index: number, active: boolean }) => any

  /**
   * Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the `item-title.x` slot.
   * @param {WTabsItem} item The current tab object.
   * @param {number} index The tab index in the array of tabs. Starts at 1 to be consistent with the `item.x` slot.
   * @param {boolean} active A boolean representing the active state of the tab.
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  [key: `item-title.${number}`]: (_: { item: WTabsItem, index: number, active: boolean }) => any

  /**
   * Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the `item-content.x` slot.
   * @param {WTabsItem} item The current tab object.
   * @param {number} index The tab index in the array of tabs. Starts at 1 to be consistent with the `item.x` slot.
   * @param {boolean} active A boolean representing the active state of the tab.
   * @see https://antoniandre.github.io/wave-ui/w-tabs
   */
  [key: `item-content.${number}`]: (_: { item: WTabsItem, index: number, active: boolean }) => any
}>

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------
export type WTabs = DefineComponent<
  WaveTabsProps,
  {},
  {},
  WaveTabsComputeds,
  WaveTabsMethods,
  {},
  {},
  WaveTabsEmits & EmitsOptions,
  string,
  PublicProps,
  ResolveProps<WaveTabsProps & WaveTabsEmits, EmitsOptions>,
  ExtractDefaultPropTypes<WaveTabsProps>,
  WaveTabsSlots
>
