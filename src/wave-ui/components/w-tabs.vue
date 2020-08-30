<template lang="pug">
  .w-tabs(:class="tabsClasses")
    .w-tabs__bar
      .w-tabs__bar-item(
        v-for="(item, i) in tabsItems"
        :key="i"
        :class="{ 'w-tabs__bar-item--active': item.active, 'w-tabs__bar-item--disabled': item.disabled, [titleClass]: titleClass }"
        @click="!item.disabled && openTab(item)"
        :tabindex="!item.disabled && 0"
        @keypress.enter="!item.disabled && openTab(item)")
          slot(
            v-if="$scopedSlots[`item-title.${item.id || i + 1}`]"
            :name="`item-title.${item.id || i + 1}`"
            :item="item")
          slot(v-else name="item-title" :item="item")
            div(v-html="item.title")
      .w-tabs__slider
    transition(:name="transition")
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
    contentClass: { type: String },
    transition: { type: String, default: 'fade' },
    shadow: { type: Boolean }
  },

  data: () => ({
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
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-tabs--shadow': this.shadow
      }
    }
  },

  methods: {
    openTab (item) {
      item.active = true
      this.tabsItems.forEach(obj => obj.index !== item.index && (obj.active = false))
      this.$emit('input', this.tabsItems.map(item => item.active))
    }
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

  &--tile {border-radius: 0;}
  &--shadow {box-shadow: $box-shadow;}
  &:not(&--no-border):not(&--shadow) {border: $border;}

  &__bar {
    display: flex;
    align-items: center;
    padding: 0 (2 * $base-increment);
  }

  &__bar-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: (2 * $base-increment) 0;
    text-align: center;
    font-size: round(1.2 * $base-font-size);
    padding: 1 * $base-increment;
    user-select: none;
    cursor: pointer;

    .w-tabs__item--disabled & {
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

    &:focus:before, &:hover:before {opacity: 0.03;}
    &--active:before, &:active:before {opacity: 0.05;}
    .w-tabs__item--disabled &:before {display: none;}
  }

  &__content {
    position: relative;
    padding: 2 * $base-increment;
  }
}
</style>
