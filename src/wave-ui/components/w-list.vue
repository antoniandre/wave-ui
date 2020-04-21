<template lang="pug">
  ul.w-list(:class="classes" :style="styles")
    li.w-list__item(
      v-for="(item, index) in items"
      @click="value !== false && (selectedItem = item[itemValue])"
      :class="{ 'w-list__item--active': value !== false && selectedItem === item[itemValue] }")
      slot(name="item" :item="item" :index="index")
        router-link(v-if="nav && item.route" :to="item.route" v-html="item[itemLabel]")
        span(v-else v-html="item[itemLabel]")
</template>

<script>
export default {
  name: 'w-list',
  props: {
    items: { type: Array, required: true },
    value: { default: false },
    hover: { type: Boolean, default: false },
    color: { type: String, default: null },
    // Navigation type adds a router-link on items with `route`.
    nav: { type: Boolean, default: false },
    itemLabel: { type: String, default: 'label' },
    itemValue: { type: String, default: 'value' }
  },

  data: () => ({
  }),

  computed: {
    selectedItem: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    classes () {
      return {
        [`${this.color}--text`]: !!this.color,
        'w-list--hoverable': this.hover !== false,
        'w-list--selectable': this.value !== false
      }
    },
    styles () {
      return {
      }
    }
  }
}
</script>

<style lang="scss">
.w-list {
  list-style-type: none;
  margin-left: 0;

  &__item {
    position: relative;
  }

  &--hoverable &__item,
  &--selectable &__item {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      background-color: currentColor;
      opacity: 0;
      transition: 0.2s;
    }

    padding: 2 * $base-increment;
    &:hover:before {opacity: 0.08;}
  }

  &--selectable &__item {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -2;
      background-color: currentColor;
      opacity: 0;
      transition: 0.1s;
    }
    cursor: pointer;
    &:active:after, &:focus:after, &--active:after {opacity: 0.2;}
  }
}
</style>
