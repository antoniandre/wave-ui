<template lang="pug">
.w-tabs(:class="tabsClasses")
  .w-tabs__bar(ref="tabs-bar" :class="tabsBarClasses")
    .w-tabs__bar-item(
      v-for="(item, i) in tabsItems"
      :key="i"
      :class="barItemClasses(item)"
      @click="!item._disabled && openTab(item)"
      @focus="$emit('focus', getOriginalItem(item))"
      :tabindex="!item._disabled && 0"
      @keypress.enter="!item._disabled && openTab(item)"
      :aria-selected="item._index === activeTabIndex ? 'true' : 'false'"
      role="tab")
        slot(
          v-if="$slots[`item-title.${item.id || i + 1}`]"
          :name="`item-title.${item.id || i + 1}`"
          :item="getOriginalItem(item)"
          :index="i + 1"
          :active="item._index === activeTabIndex")
        slot(
          v-else
          name="item-title"
          :item="getOriginalItem(item)"
          :index="i + 1"
          :active="item._index === activeTabIndex")
          div(v-html="item[itemTitleKey]")
    .w-tabs__bar-extra(v-if="$slots['tabs-bar-extra']")
      slot(name="tabs-bar-extra")
    .w-tabs__slider(v-if="!noSlider && !card" :class="sliderColor" :style="sliderStyles")

  .w-tabs__content-wrap(v-if="tabsItems.length")
    transition(:name="transitionName" :mode="transitionMode")
      keep-alive
        //- Keep-alive only works with components, not with DOM nodes.
        tab-content(:key="activeTab._index" :item="activeTab" :class="contentClass")
          template(#default="{ item }")
            slot(
              v-if="$slots[`item-content.${item._index + 1}`]"
              :name="`item-content.${item._index + 1}`"
              :item="getOriginalItem(item)"
              :index="item._index + 1"
              :active="item._index === activeTab._index")
            slot(
              v-else
              name="item-content"
              :item="getOriginalItem(item)"
              :index="item._index + 1"
              :active="item._index === activeTab._index")
              div(v-if="item[itemContentKey]" v-html="item[itemContentKey]")
</template>

<script>
import { reactive } from 'vue'
import TabContent from './tab-content.vue'

export default {
  name: 'w-tabs',

  props: {
    modelValue: { type: [Number, String] },
    color: { type: String },
    bgColor: { type: String },
    items: { type: [Array, Number] },
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
    light: { type: Boolean }
  },

  components: { TabContent },

  emits: ['input', 'update:modelValue', 'focus'],

  data: () => ({
    activeTabEl: null,
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

    tabsItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items

      return items.map((item, _index) => reactive({
        ...item,
        _index,
        _disabled: !!item.disabled
      }))
    },

    activeTab () {
      return this.tabsItems[this.activeTabIndex] || this.tabsItems[0] || {}
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

    openTab (item) {
      this.prevTabIndex = this.activeTabIndex // To resolve the transition direction.
      this.activeTabIndex = item._index
      this.$emit('update:modelValue', item._index)
      this.$emit('input', item._index)

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
        this.slider.left = `${this.activeTab._index * 100 / this.tabsItems.length}%`
        this.slider.width = `${100 / this.tabsItems.length}%`
      }
    },

    updateActiveTab (index) {
      if (typeof index === 'string') index = ~~index
      else if (isNaN(index) || index < 0) index = 0
      this.activeTabIndex = index

      // Scroll the new active tab item title into view if needed.
      this.$nextTick(() => {
        const ref = this.$refs['tabs-bar']
        this.activeTabEl = ref && ref.querySelector(`.w-tabs__bar-item:nth-child(${index + 1})`)
        if (this.activeTabEl) {
          this.activeTabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
        }
      })
    },

    // Return the original item (so there is no `_index`, etc.).
    getOriginalItem (item) {
      return this.items[item._index]
    }
  },

  beforeMount () {
    this.updateActiveTab(this.modelValue)

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
      this.updateActiveTab(index)
    },
    items () {
      // When deleting a tab, activate the previous one.
      while (this.activeTabIndex > 0 && !this.tabsItems[this.activeTabIndex]) this.activeTabIndex--

      if (!this.noSlider) this.$nextTick(this.updateSlider)
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
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
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
  left: 0;
  right: 0;
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
