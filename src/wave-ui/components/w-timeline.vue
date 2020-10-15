<template lang="pug">
ul.w-timeline
  li.w-timeline__item(v-for="(item, i) in items" :key="i")
    slot(name="item" v-if="!$slots[`item.${i + 1}`]" :item="item" :index="i")
      .item__title(v-html="item.title")
      .item__content(v-html="item.content")
    slot(:name="`item.${i + 1}`" v-else :item="item" :index="i")
</template>

<script>
export default {
  name: 'w-timeline',
  props: {
    items: { type: [Array, Number], required: true },
    itemIcon: { type: String, default: 'icon' },
    itemColor: { type: String, default: 'color' }
  },

  emits: [],

  data: () => ({

  })
}
</script>

<style lang="scss">
.w-timeline {
  margin-left: $base-increment;

  > li {
    padding-left: 5 * $base-increment;
    padding-bottom: 3 * $base-increment;
  }
  > li:last-child {padding-bottom: 0;}
  li {list-style-type: none;position: relative;}

  // Bullet.
  > li:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    background-color: #fff;
    border-radius: 1em;
    border: 1px solid #ddd;
    width: 1em;
    height: 1em;
    transform: translateX(-50%);
    z-index: 1;
  }
  > li:last-child:after {display: none;}
  // Left border.
  > li:after {
    content: '';
    position: absolute;
    top: 2px;
    bottom: -2px;
    left: -0.5px;
    border-left: 1px solid #ddd;
  }
}
</style>
