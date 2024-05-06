<template lang="pug">
.w-tabs(:class="tabsClasses")
  .w-tabs__bar(ref="tabs-bar" :class="tabsBarClasses")
    .w-tabs__bar-item(
      v-for="(item, i) in tabs"
      :key="i"
      :class="barItemClasses(item)"
      @click="!item._disabled && item._uid !== activeTabUid && openTab(item._uid)"
      @focus="$emit('focus', getOriginalItem(item))"
      :tabindex="!item._disabled && 0"
      @keypress.enter="!item._disabled && openTab(item._uid)"
      :aria-selected="item._uid === activeTabUid ? 'true' : 'false'"
      role="tab")
        slot(
          v-if="$slots[`item-title.${item.id || i + 1}`]"
          :name="`item-title.${item.id || i + 1}`"
          :item="getOriginalItem(item)"
          :index="i + 1"
          :active="item._uid === activeTabUid")
        slot(
          v-else
          name="item-title"
          :item="getOriginalItem(item)"
          :index="i + 1"
          :active="item._uid === activeTabUid")
          div(v-html="item[itemTitleKey]")
    .w-tabs__bar-extra(v-if="$slots['tabs-bar-extra']")
      slot(name="tabs-bar-extra")
    .w-tabs__slider(v-if="!noSlider && !card" :class="sliderColor" :style="sliderStyles")

  .w-tabs__content-wrap(v-if="tabs.length")
    transition-group(v-if="keepInDom" :name="transitionName")
      tab-content(
        v-for="(tab, i) in tabs"
        :key="tab._uid"
        :item="tab"
        v-show="tab._uid === activeTab._uid"
        :class="contentClass")
        slot(
          v-if="$slots[`item-content.${tab._index + 1}`]"
          :name="`item-content.${tab._index + 1}`"
          :item="getOriginalItem(tab)"
          :index="tab._index + 1"
          :active="tab._index === activeTab._index")
        slot(
          v-else
          name="item-content"
          :item="getOriginalItem(tab)"
          :index="tab._index + 1"
          :active="tab._index === activeTab._index")
          div(v-if="tab[itemContentKey]" v-html="tab[itemContentKey]")
    transition(v-else :name="transitionName" :mode="transitionMode")
      keep-alive(:exclude="keepAlive ? '' : 'tab-content'")
        //- Keep-alive only works with components, not with DOM nodes.
        tab-content(:key="activeTabUid" :item="activeTab" :class="contentClass")
          template(#default="{ item }")
            template(v-if="item")
              slot(
                v-if="$slots[`item-content.${item._index + 1}`]"
                :name="`item-content.${item._index + 1}`"
                :item="getOriginalItem(item)"
                :index="item._index + 1"
                :active="item._uid === activeTabUid")
              slot(
                v-else
                name="item-content"
                :item="getOriginalItem(item)"
                :index="item._index + 1"
                :active="item._uid === activeTabUid")
                div(v-if="item[itemContentKey]" v-html="item[itemContentKey]")
</template>

<script>
import TabContent from './tab-content.vue'

let uid = 0

export default {
  name: 'w-tabs',

  props: {
    modelValue: { type: [Number, String] },
    color: { type: String },
    bgColor: { type: String },
    items: { type: [Array, Number] },
    itemIdKey: { type: String, default: 'id' },
    itemTitleKey: { type: String, default: 'title' },
    itemContentKey: { type: String, default: 'content' },
    titleClass: { type: String },
    activeClass: { type: String, default: 'primary' },
    noSlider: { type: Boolean },
    pillSlider: { type: Boolean },
    sliderColor: { type: String, default: 'primary' },
    contentClass: { type: String },
    transition: { type: [String, Boolean], default: '' },
    fillBar: { type: Boolean },
    center: { type: Boolean },
    right: { type: Boolean },
    card: { type: Boolean },
    dark: { type: Boolean },
    light: { type: Boolean },
    keepAlive: { type: Boolean, default: true },
    keepInDom: { type: Boolean, default: false }
  },

  components: { TabContent },

  emits: ['input', 'update:modelValue', 'focus'],

  data: () => ({
    tabs: [],
    activeTabEl: null,
    activeTabUid: null,
    activeTabIndex: 0,
    prevTabIndex: -1, // To detect transition direction.
    slider: {
      left: 0,
      width: 0
    },
    init: true
  }),

  computed: {
    transitionName () {
      if (this.transition === false) return ''
      return this.transition || `w-tabs-slide-${this.direction}`
    },

    transitionMode () {
      return ['w-tabs-slide-left', 'w-tabs-slide-right'].includes(this.transitionName) ? '' : 'out-in'
    },

    direction () {
      return this.activeTab._index < this.prevTabIndex ? 'right' : 'left'
    },

    activeTab () {
      return this.tabsByUid[this.activeTabUid] || this.tabs[0] || {}
    },

    // An object indexing the tabs by their uid.
    tabsByUid () {
      return this.tabs.reduce((obj, tab) => ((obj[tab._uid] = tab) && obj), {})
    },

    tabsClasses () {
      return {
        'w-tabs--card': this.card,
        'w-tabs--no-slider': this.noSlider,
        'w-tabs--pill-slider': this.pillSlider,
        'w-tabs--fill-bar': this.fillBar,
        'w-tabs--init': this.init,
        'w-tabs--dark': this.dark,
        'w-tabs--light': this.light
      }
    },

    tabsBarClasses () {
      return {
        'w-tabs__bar--right': this.right,
        'w-tabs__bar--center': this.center
      }
    },

    sliderStyles () {
      return {
        left: this.slider.left,
        width: this.slider.width
      }
    }
  },

  methods: {
    // Adding a tab in the list.
    addTab (item) {
      // If there is no unique ID provided, inject one in each tab.
      // This will cause a single other update from watching the tabs items and stop there.
      if (!(item[this.itemIdKey] ?? item._uid ?? false)) item._uid = +`${this._.uid}${++uid}`

      this.tabs.push({
        _uid: item[this.itemIdKey] ?? item._uid,
        _index: this.tabs.length,
        ...item,
        _disabled: !!item.disabled
      })
    },

    refreshTabs () {
      let items = this.items
      if (typeof items === 'number') items = Array(items).fill().map((_, i) => this.tabs[i] || {})

      this.tabs = items.map((item, _index) => {
        // If there is no unique ID provided, inject one in each tab.
        // This will cause a single other update from watching the tabs items and stop there.
        if (!(item[this.itemIdKey] ?? item._uid ?? false)) item._uid = +`${this._.uid}${++uid}`

        return {
          ...item,
          _uid: item[this.itemIdKey] ?? item._uid,
          _index,
          _disabled: !!item.disabled
        }
      })
    },

    reopenTheActiveTab () {
      // If there is only 1 tab left open it.
      if (this.tabs.length === 1) return this.openTab(this.tabs[0]._uid)

      // First try to find the same uid in remaining tabs.
      let uid = this.tabsByUid[this.activeTabUid]?._uid

      // If not found, try to open the tab with the same index.
      if (!uid) uid = this.tabs[this.activeTabIndex]?._uid

      // If not found (no  tab to the right), try to open the next tab to the left.
      if (!uid) uid = this.tabs[Math.max(this.activeTabIndex - 1, this.tabs.length - 1)]?._uid

      if (uid) this.openTab(uid)
    },

    onResize () {
      this.updateSlider(false)
    },

    barItemClasses (item) {
      const isActive = item._index === this.activeTabIndex

      return {
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.color]: this.color && !item._disabled && !(this.activeClass && isActive),
        [`w-tabs__bar-item--active ${this.activeClass}`]: isActive,
        'w-tabs__bar-item--disabled': item._disabled,
        [this.titleClass]: this.titleClass
      }
    },

    // Switching tabs.
    openTab (uid) {
      this.prevTabIndex = this.activeTabIndex // To resolve the transition direction.
      const tab = this.tabsByUid[uid]
      this.activeTabIndex = tab._index
      this.activeTabUid = tab._uid
      this.$emit('update:modelValue', tab._index)
      this.$emit('input', tab._index)

      if (!this.noSlider) this.$nextTick(this.updateSlider)
    },

    // Updates the slider position.
    updateSlider (domLookup = true) {
      if (domLookup) {
        const ref = this.$refs['tabs-bar']
        this.activeTabEl = ref && ref.querySelector('.w-tabs__bar-item--active')
      }

      if (!this.fillBar && this.activeTabEl) {
        const { left, width } = this.activeTabEl.getBoundingClientRect()
        const tabsBar = this.activeTabEl.parentNode
        const { left: parentLeft } = tabsBar.getBoundingClientRect()
        const { borderLeftWidth } = getComputedStyle(tabsBar)
        this.slider.left = `${left - parentLeft - parseInt(borderLeftWidth) + tabsBar.scrollLeft}px`
        this.slider.width = `${width}px`
      }
      else {
        this.slider.left = `${this.activeTab._index * 100 / this.tabs.length}%`
        this.slider.width = `${100 / this.tabs.length}%`
      }
    },

    updateActiveTab (index) {
      if (typeof index === 'string') index = ~~index
      else if (isNaN(index) || index < 0) index = 0

      // Only open the tab if it is found.
      if (this.tabs[index]?._uid) {
        this.openTab(this.tabs[index]?._uid)

        // Scroll the new active tab item title into view if needed.
        this.$nextTick(() => {
          const ref = this.$refs['tabs-bar']
          this.activeTabEl = ref && ref.querySelector(`.w-tabs__bar-item:nth-child(${index + 1})`)
          if (this.activeTabEl) {
            this.activeTabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
          }
        })
      }
    },

    // Return the original item (so there is no `_index`, etc.).
    getOriginalItem (item) {
      return this.items[item._index] || {}
    }
  },

  beforeMount () {
    this.tabs = [] // Reset for hot-reloading.
    const items = typeof this.items === 'number' ? Array(this.items).fill().map(Object) : this.items
    items.forEach(this.addTab)

    if (this.modelValue ?? false) this.updateActiveTab(this.modelValue)

    this.$nextTick(() => {
      this.updateSlider()
      // Disable the slider transition while loading.
      setTimeout(() => (this.init = false), 0) // Next tick is not sufficient here.
    })

    if (!this.noSlider) window.addEventListener('resize', this.onResize)
  },

  beforeUnmount () {
    window.removeEventListener('resize', this.onResize)
  },

  watch: {
    modelValue (index) {
      if (index !== this.activeTabIndex) this.updateActiveTab(index)
    },
    items: {
      handler () {
        this.refreshTabs()

        if (this.tabs.length) this.reopenTheActiveTab()

        if (!this.noSlider) this.$nextTick(this.updateSlider)
      },
      deep: true
    },
    fillBar () {
      if (!this.noSlider) this.$nextTick(this.updateSlider)
    },
    noSlider (value) {
      if (!value) {
        this.updateSlider()
        window.addEventListener('resize', this.onResize)
      }
      else window.removeEventListener('resize', this.onResize)
    }
  }
}
</script>

<style lang="scss">
.w-tabs {
  z-index: 1;
  border-radius: $border-radius;
  border: $border;
  overflow: hidden;

  @include themeable;

  &--tile {border-radius: 0;}
  &--card {border: none;}
  &--no-border, &--shadow {border: none;}

  &__bar {
    position: relative;
    display: flex;
    overflow-x: auto;

    &--center {justify-content: center;}
    &--right {justify-content: flex-end;}
    .w-tabs--pill-slider & {padding-left: $base-increment;}

    .w-tabs--card &:after {
      content: '';
      display: flex;
      flex-grow: 1;
      border-bottom: $border;
      align-self: flex-end;
    }
  }

  // Bar item.
  // ------------------------------------------------------
  &__bar-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: (2 * $base-increment) (3 * $base-increment);
    justify-content: center;
    font-size: round(1.2 * $base-font-size);
    transition: $transition-duration ease-in-out, flex-grow 0s, flex 0s; // `flex` for Safari.
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    .w-tabs--fill-bar & {flex-grow: 1;flex-basis: 0;}
    .w-tabs--card & {
      border: $border;
      border-radius: $border-radius $border-radius 0 0;
      margin-right: -1px;
    }
    .w-tabs--card &--active {border-bottom-color: transparent;}

    &--disabled {
      cursor: not-allowed;
      opacity: 0.6;
      -webkit-tap-highlight-color: transparent;
    }

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: currentColor;
      opacity: 0;
      transition: $fast-transition-duration;
    }

    &--active:before, &:focus:before, &:hover:before {opacity: 0.05;}
    &:active:before {opacity: 0.08;}
    &--disabled:before {display: none;}
  }
  &--pill-slider &__bar-item:before {display: none;}

  // Bar Extra.
  // ------------------------------------------------------
  &__bar-extra {
    margin-left: auto;
    align-self: center;
    position: sticky;
    right: 0;

    .w-tabs__bar--right &,
    .w-tabs__bar--center & {margin-left: 0;}
  }

  // Slider.
  // ------------------------------------------------------
  &__slider {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: currentColor;
    transition: $transition-duration ease-in-out;
  }
  &--pill-slider &__slider {
    opacity: 0.1;
    bottom: 15%;
    height: 70%;
    border-radius: 99em;
  }

  &--init &__slider {transition: none;}

  // Content.
  // ------------------------------------------------------
  &__content-wrap {
    position: relative;
    flex-grow: 1;

    .w-tabs--card & {
      border: $border;
      border-top: none;
      border-radius: 0 0 $border-radius $border-radius;
    }
  }
  &__content {padding: 3 * $base-increment;}
}

.w-tabs-slide-left-leave-active,
.w-tabs-slide-right-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-tabs-slide-left-enter-active {animation: w-tabs-slide-left-enter $transition-duration + 0.15s;}
.w-tabs-slide-left-leave-active {animation: w-tabs-slide-left-leave $transition-duration + 0.15s;}
@keyframes w-tabs-slide-left-enter {
  0% {transform: translateX(100%);}
  100% {transform: translateX(0);}
}
@keyframes w-tabs-slide-left-leave {
  0% {transform: translateX(0);}
  100% {transform: translateX(-100%);}
}

.w-tabs-slide-right-enter-active {animation: w-tabs-slide-right-enter $transition-duration + 0.15s;}
.w-tabs-slide-right-leave-active {animation: w-tabs-slide-right-leave $transition-duration + 0.15s;}
@keyframes w-tabs-slide-right-enter {
  0% {transform: translateX(-100%);}
  100% {transform: translateX(0);}
}
@keyframes w-tabs-slide-right-leave {
  0% {transform: translateX(0);}
  100% {transform: translateX(100%);}
}
</style>
