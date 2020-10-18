<template lang="pug">
ul.w-timeline
  li.w-timeline-item(v-for="(item, i) in items" :key="i")
    .w-timeline-item__bullet(
      :is="item[itemIconKey] || icon ? 'w-icon' : 'div'"
      :class="{ [item[itemColorKey] || color]: item[itemColorKey] || color }")
      | {{ item[itemIconKey] || icon }}
    slot(name="item" v-if="!$slots[`item.${i + 1}`]" :item="item" :index="i + 1")
      .w-timeline-item__title(
        :class="{ [item[itemColorKey] || color]: item[itemColorKey] || color }"
        v-html="item[itemTitleKey]")
      .w-timeline-item__content(v-html="item[itemContentKey]")
    slot(:name="`item.${i + 1}`" v-else :item="item" :index="i + 1")
</template>

<script>
export default {
  name: 'w-timeline',
  props: {
    items: { type: [Array, Number], required: true },
    color: { type: String },
    icon: { type: String },
    itemTitleKey: { type: String, default: 'title' },
    itemContentKey: { type: String, default: 'content' },
    itemIconKey: { type: String, default: 'icon' },
    itemColorKey: { type: String, default: 'color' }
  },

  emits: []
}
</script>

<style lang="scss">
.w-timeline {
  margin-left: $base-increment;
}

.w-timeline-item {
  padding-left: 5 * $base-increment;
  padding-bottom: 3 * $base-increment;
  list-style-type: none;
  position: relative;

  &:last-child {padding-bottom: 0;}

  // Bullet.
  &__bullet {
    position: absolute;
    top: 2px;
    left: 0;
    background-color: #fff;
    border-radius: 1em;
    border: 1px solid currentColor;
    width: $base-font-size;
    height: $base-font-size;
    transform: translateX(-50%);
    z-index: 1;
  }
  &__bullet.w-icon {border: none;}

  &:last-child:after {display: none;}
  // Left border.
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    bottom: -2px;
    left: -1px;
    border-left: 2px solid #ddd;
  }
}
</style>
