<template lang="pug">
  .w-accordion
    .w-accordion__item(
      v-for="(item, i) in accordionItems"
      :key="i"
      tabindex="0"
      @keypress.enter="item.open = true"
      :class="{ ...itemClasses, 'w-accordion__item--open': item.open }")
      .w-accordion__item-title(@click="item.open = !item.open")
        w-button.w-accordion__expand-icon(:icon="expandIcon" text @click.stop="item.open = !item.open")
        slot(name="item-title" :item="item")
          div(v-html="item.title")
      w-transition-expand(y)
        .w-accordion__item-content(v-if="item.open")
          slot(name="item-content" :item="item")
            div(v-html="item.content")
</template>

<script>
export default {
  name: 'w-accordion',
  props: {
    value: { type: Array },
    items: { type: Array },
    itemClass: { type: String },
    expandIcon: { type: String, default: 'wi-triangle-down' },
    collapseIcon: { type: String },
  },

  data: () => ({
    open: []
  }),

  computed: {
    accordionItems () {
      return this.items.slice(0).map(item => {
        this.$set(item, 'open', false)
        return item
      })
    },

    itemClasses () {
      return {
        [this.itemClass]: this.itemClass || null
      }
    }
  }
}
</script>

<style lang="scss">
.w-accordion {
  z-index: 1;

  &__item {
    position: relative;
  }

  button.w-accordion__expand-icon {
    color: #999;
    .w-icon:before {font-size: 1.2em;}
  }

  &__item-title {
    position: relative;
    display: flex;
    align-items: center;
    font-size: round(1.5 * $base-font-size);
    padding-top: 2 * $base-increment;
    padding-bottom: 2 * $base-increment;
    user-select: none;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: currentColor;
      opacity: 0;
      @include default-fast-transition;
    }
    &:hover:before {
      opacity: 0.05;
    }
  }

  &__item-content {
  }
}
</style>
