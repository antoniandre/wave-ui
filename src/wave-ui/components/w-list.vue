<template lang="pug">
  ul.w-list(:class="classes" :style="styles")
    li.w-list__item(v-for="(item, index) in items")
      slot(name="item" :item="item" :index="index")
        router-link(v-if="nav && item.route" :to="item.route" v-html="item[itemLabel]")
        span(v-else v-html="item[itemLabel]")
</template>

<script>
export default {
  name: 'w-list',
  props: {
    items: { type: Array, required: true },
    nav: { type: Boolean, default: false },
    itemLabel: { type: String, default: 'label' },
  },

  computed: {
    classes () {
      return {
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">
.w-list {
  list-style-type: none;
  margin-left: 0;

  &__item {
    padding: $base-increment;
  }
}
</style>
