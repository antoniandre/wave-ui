<template lang="pug">
  .w-tabs(:class="tabsClasses")
    .w-tabs__bar(ref="tabs-bar")
      .w-tabs__bar-item(
        v-for="(item, i) in tabsItems"
        :key="i"
        :class="barItemClasses(item)"
        @click="!item.disabled && openTab(item)"
        :tabindex="!item.disabled && 0"
        @keypress.enter="!item.disabled && openTab(item)")
          slot(
            v-if="$scopedSlots[`item-title.${item.id || i + 1}`]"
            :name="`item-title.${item.id || i + 1}`"
            :item="item"
            :index="item.index")
          slot(v-else name="item-title" :item="item" :index="item.index")
            div(v-html="item.title")
      .w-tabs__slider(v-if="!noSlider && !card" :class="sliderColor" :style="sliderStyles")
    .w-tabs__content(:class="contentClass")
      transition(:name="transition" mode="out-in")
        div(v-if="activeTab" :key="activeTab.index")
          slot(
            v-if="$scopedSlots[`item-content.${activeTab.id || activeTab.index + 1}`]"
            :name="`item-content.${activeTab.id || activeTab.index + 1}`"
            :item="activeTab"
            :index="activeTab.index")
          slot(v-else name="item-content" :item="activeTab" :index="activeTab.index")
            div(v-html="activeTab.content")
</template>

<script>
import Vue from 'vue'

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
    transition: { type: String, default: 'fade' },
    fillBar: { type: Boolean },
    card: { type: Boolean }
  },

  data: () => ({
    activeTabEl: null,
    slider: {
      left: 0,
      width: 0
    },
    init: true
  }),

  computed: {
    tabsItems () {
      const items = typeof this.items === 'number' ? Array(this.items).fill({}) : this.items
      return items.map((item, index) => new Vue.observable({
        ...item,
        index,
        active: this.value && this.value[index],
        disabled: !!item.disabled
      }))
    },

    activeTab () {
      let activeTab = this.tabsItems.find(item => item.active)
      if (!activeTab) {
        activeTab = this.tabsItems.find(item => !item.disabled)
        if (activeTab) activeTab.active = true
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

  beforeDestroy () {
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

    // .w-tabs--card & {border-bottom: $border;}
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
  &__content {
    position: relative;
    padding: 3 * $base-increment;

    .w-tabs--card & {
      border: $border;
      border-top: none;
      border-radius: 0 0 $border-radius $border-radius;
    }
  }
}
</style>
