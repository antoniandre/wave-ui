<template lang="pug">
  .w-card(:class="classes" :style="styles")
    .w-card__title(v-if="cardTitle" v-html="cardTitle" :class="titleClass || false")
    .w-card__title(v-else-if="$slots.title" :class="titleClass || false")
      slot(name="title")
    .w-card__content(:class="contentClass || false")
      slot
    .w-card__actions
      slot(name="actions")
</template>

<script>
export default {
  name: 'w-card',
  props: {
    color: { type: String, default: '' },
    cardTitle: { type: String, default: '' },
    shadow: { type: Boolean, default: false },
    noBorder: { type: Boolean, default: false },
    tile: { type: Boolean, default: false },
    titleClass: { type: String, default: '' },
    contentClass: { type: String, default: '' },
  },

  computed: {
    classes () {
      return {
        [this.color]: !!this.color,
        'w-card--no-border': this.noBorder,
        'w-card--tile': this.tile,
        'w-card--shadow': this.shadow
      }
    },
    styles () {
      return false
    }
  }
}
</script>

<style lang="scss">
.w-card {
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(&--tile) {border-radius: $border-radius;}
  &--shadow {box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);}
  &:not(&--no-border):not(&--shadow) {border: $border;}

  &__title {
    padding: (2 * $base-increment) (4 * $base-increment);
    font-size: 1.3em;
    border-bottom: $border;
  }
  &__content {
    display: flex;
    flex: 1 1 auto;
    padding: 4 * $base-increment;
  }
}
</style>
