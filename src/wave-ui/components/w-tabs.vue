<template lang="pug">
.w-tabs(:class="tabsClasses")
  .w-tabs__bar(ref="tabs-bar" :class="tabsBarClasses")
    .w-tabs__bar-item(
      v-for="(item, i) in tabsItems"
      :key="i"
      :class="barItemClasses(item)"
      @click="!item.disabled && openTab(item)"
      :tabindex="!item.disabled && 0"
      @keypress.enter="!item.disabled && openTab(item)")
        slot(
          v-if="$slots[`item-title.${item.id || i + 1}`]"
          :name="`item-title.${item.id || i + 1}`"
          :item="item"
          :index="item.index")
        slot(v-else name="item-title" :item="item" :index="item.index")
          div(v-html="item.title")
    .w-tabs__slider(v-if="!noSlider && !card" :class="sliderColor" :style="sliderStyles")
  .w-tabs__content-wrap(v-if="tabsItems.length" :class="contentClass")
    transition(:name="transitionName" :mode="transitionMode")
      .w-tabs__content(v-if="activeTab" :key="activeTab.index")
        slot(
          v-if="$slots[`item-content.${activeTab.id || activeTab.index + 1}`]"
          :name="`item-content.${activeTab.id || activeTab.index + 1}`"
          :item="activeTab"
          :index="activeTab.index")
        slot(v-else name="item-content" :item="activeTab" :index="activeTab.index")
          div(v-html="activeTab.content")
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'w-tabs',
  props: {
    value: { type: Array },
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    items: { type: [Array, Number] },
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

  data: () => ({
    activeTabEl: null,
    prevTabIndex: -1, // To detect transition direction.
    activeTabIndex: -1,
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
      return this.activeTab.index < this.prevTabIndex ? 'right' : 'left'
    },

    tabsItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items
      if (typeof this.items === 'number' && this.activeTabIndex > -1) {
        // Array.fill({}) copies the same object by reference, make sure to modify only 1 by
        // giving a full object override (item = {}).
        if (items[this.activeTabIndex]) items[this.activeTabIndex] = { active: true }
      }

      return items.map((item, index) => reactive({
        ...item,
        index,
        active: item.active || (this.value && this.value[index]),
        disabled: !!item.disabled
      }))
    },

    activeTab () {
      let activeTab = this.tabsItems.find(item => item.active)
      if (!activeTab) {
        // If no active tab, open the first not disabled tab.
        if (!activeTab) activeTab = this.tabsItems.find(item => !item.disabled)
        if (activeTab) {
          activeTab.active = true
          this.$nextTick(this.updateSlider)
        }
        else activeTab = {}
      }
      return activeTab
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
        'justify-end': this.right,
        'justify-center': this.center
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
      return {
        [`${this.bgColor}--bg`]: this.bgColor,
        [this.color]: this.color && !item.disabled && !(this.activeClass && item.active),
        [`w-tabs__bar-item--active ${this.activeClass}`]: item.active,
        'w-tabs__bar-item--disabled': item.disabled,
        [this.titleClass]: this.titleClass
      }
    },
    openTab (item) {
      this.prevTabIndex = this.activeTab.index
      this.activeTabIndex = item.index

      item.active = true
      // Unset active on other tabs.
      this.tabsItems.forEach(obj => obj.index !== item.index && (obj.active = false))
      this.$emit('input', this.tabsItems.map(item => item.active))

      if (!this.noSlider) this.$nextTick(this.updateSlider)
    },

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
        this.slider.left = `${this.activeTab.index * 100 / this.tabsItems.length}%`,
        this.slider.width = `${100 / this.tabsItems.length}%`
      }
    }
  },

  beforeMount () {
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
    value (array) {
      this.tabsItems.forEach((item, i) => {
        this.$set(item, 'active', (Array.isArray(array) && array[i]) || false)
      })
    },
    items () {
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
    align-items: center;

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
    transition: $transition-duration ease-in-out, flex-grow 0s;
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
