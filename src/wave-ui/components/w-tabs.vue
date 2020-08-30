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
            :item="item")
          slot(v-else name="item-title" :item="item")
            div(v-html="item.title")
      .w-tabs__slider(:class="sliderColor" :style="sliderStyles")
    transition(:name="transition" mode="out-in")
      .w-tabs__content(v-if="activeTab" :class="contentClass")
        slot(
          v-if="$scopedSlots[`item-content.${activeTab.id || activeTab.index + 1}`]"
          :name="`item-content.${activeTab.id || activeTab.index + 1}`"
          :item="activeTab")
        slot(v-else name="item-content" :item="activeTab")
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
    sliderColor: { type: String, default: 'primary' },
    contentClass: { type: String },
    transition: { type: String, default: 'fade' },
    fillBar: { type: Boolean },
    shadow: { type: Boolean }
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
        activeTab.active = true
      }
      return activeTab
    },

    tabsClasses () {
      return {
        'w-tabs--shadow': this.shadow,
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
      this.$nextTick(() => {
        this.activeTabEl = this.$refs['tabs-bar'].querySelector('.w-tabs__bar-item--active')
        this.updateSlider()
      })

      // Unset active on other tabs.
      this.tabsItems.forEach(obj => obj.index !== item.index && (obj.active = false))
      this.$emit('input', this.tabsItems.map(item => item.active))
    },

    updateSlider () {
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
      this.activeTabEl = this.$refs['tabs-bar'].querySelector('.w-tabs__bar-item--active')
      this.updateSlider()
      // Disable the slider transition while loading.
      setTimeout(() => (this.init = false), 0) // Next tick is not sufficient here.
    })
  },

  watch: {
    value (array) {
      this.tabsItems.forEach((item, i) => {
        this.$set(item, 'active', (Array.isArray(array) && array[i]) || false)
      })
    }
  }
}
</script>

<style lang="scss">
.w-tabs {
  z-index: 1;
  border-radius: $border-radius;
  border: $border;

  &--tile {border-radius: 0;}
  &--shadow {box-shadow: $box-shadow;}
  &--no-border, &--shadow {border: none;}

  &__bar {
    position: relative;
    display: flex;
    align-items: center;
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
    transition: $transition-duration ease-in-out;
    user-select: none;
    cursor: pointer;

    .w-tabs--fill-bar & {flex-grow: 1;flex-basis: 0;}

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
  }
}
</style>
