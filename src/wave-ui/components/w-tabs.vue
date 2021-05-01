<template lang="pug">
.w-tabs(:class="tabsClasses")
  .w-tabs__bar(ref="tabs-bar" :class="tabsBarClasses")
    .w-tabs__bar-item(
      v-for="(item, i) in tabsItems"
      :key="i"
      :class="barItemClasses(item)"
      @click="!item._disabled && openTab(item)"
      @focus="$emit('focus', getOriginalTab(item))"
      :tabindex="!item._disabled && 0"
      @keypress.enter="!item._disabled && openTab(item)"
      :aria-selected="item._index === activeTabIndex ? 'true' : 'false'"
      role="tab")
        slot(
          v-if="$slots[`item-title.${item.id || i + 1}`]"
          :name="`item-title.${item.id || i + 1}`"
          :item="getOriginalTab(item)"
          :index="i + 1"
          :active="item._index === activeTabIndex")
        slot(
          v-else
          name="item-title"
          :item="getOriginalTab(item)"
          :index="i + 1"
          :active="item._index === activeTabIndex")
          div(v-html="item[itemTitleKey]")
    .w-tabs__bar-extra(v-if="$slots['tabs-bar-extra']")
      slot(name="tabs-bar-extra")
    .w-tabs__slider(v-if="!noSlider && !card" :class="sliderColor" :style="sliderStyles")
  .w-tabs__content-wrap(v-if="tabsItems.length")
    transition(:name="transitionName" :mode="transitionMode")
      .w-tabs__content(v-if="activeTab" :key="activeTab._index" :class="contentClass")
        slot(
          v-if="$slots[`item-content.${activeTab.id || activeTab._index + 1}`]"
          :name="`item-content.${activeTab.id || activeTab._index + 1}`"
          :item="getOriginalTab(activeTab)"
          :index="activeTab._index + 1"
          :active="activeTab._index === activeTabIndex")
        slot(
          v-else
          name="item-content"
          :item="getOriginalTab(activeTab)"
          :index="activeTab._index + 1"
          :active="activeTab._index === activeTabIndex")
          div(v-html="activeTab[itemContentKey]")
</template>

<script>
import { reactive } from 'vue'

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
    sliderColor: { type: String, default: 'primary' },
    contentClass: { type: String },
    transition: { type: [String, Boolean], default: '' },
    fillBar: { type: Boolean },
    center: { type: Boolean },
    right: { type: Boolean },
    card: { type: Boolean }
  },

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
        'w-tabs--fill-bar': this.fillBar,
        'w-tabs--init': this.init
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
        this.activeTabEl = this.$refs['tabs-bar'].querySelector('.w-tabs__bar-item--active')
      }

      if (!this.fillBar && this.activeTabEl) {
        const { left, width } = this.activeTabEl.getBoundingClientRect()
        const { left: parentLeft } = this.activeTabEl.parentNode.getBoundingClientRect()
        this.slider.left = `${left - parentLeft + this.activeTabEl.parentNode.scrollLeft}px`
        this.slider.width = `${width}px`
      }
      else {
        this.slider.left = `${this.activeTab._index * 100 / this.tabsItems.length}%`,
        this.slider.width = `${100 / this.tabsItems.length}%`
      }
    },

    updateActiveTab (index) {
      if (typeof index === 'string') index = ~~index
      else if (isNaN(index) || index < 0) index = 0
      this.activeTabIndex = index
    },

    // Return the original tab item (so there is no `_index`, etc.).
    getOriginalTab (tab) {
      return this.items[tab._index]
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

  &--tile {border-radius: 0;}
  &--card {border: none;}
  &--no-border, &--shadow {border: none;}

  &__bar {
    position: relative;
    display: flex;
    // align-items: center;
    overflow-x: auto;

    &--center {justify-content: center;}
    &--right {justify-content: flex-end;}

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

  // Bar Extra.
  // ------------------------------------------------------
  &__bar-extra {
    margin-left: auto;
    align-self: center;

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
  &--init &__slider {transition: none;}

  // Content.
  // ------------------------------------------------------
  &__content-wrap {
    position: relative;

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
