<template lang="pug">
  .w-card(:class="classes" :style="styles")
    .w-card__title(v-if="cardTitle" :class="titleClass || false" v-html="cardTitle")
    .w-card__title(
      v-else-if="$slots.title"
      :class="{ 'w-card__title--has-toolbar': titleHasToolbar, [titleClass]: titleClass || false }")
      slot(name="title")
    .w-card__content(:class="contentClass || false")
      slot
    .w-card__actions(
      v-if="$slots.actions"
      :class="{ 'w-card__actions--has-toolbar': actionsHasToolbar }")
      slot(name="actions")
</template>

<script>
export default {
  name: 'w-card',
  props: {
    color: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    cardTitle: { type: String, default: '' },
    shadow: { type: Boolean },
    noBorder: { type: Boolean },
    tile: { type: Boolean },
    titleClass: { type: String, default: '' },
    contentClass: { type: String, default: '' },
  },

  computed: {
    titleHasToolbar () {
      const { title } = this.$slots
      return title && title.map(vnode => vnode.tag).join('').includes('w-toolbar')
    },
    actionsHasToolbar () {
      const { actions } = this.$slots
      return actions && actions.map(vnode => vnode.tag).join('').includes('w-toolbar')
    },
    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
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
  border-radius: $border-radius;

  &--tile {border-radius: 0;}
  &--shadow {box-shadow: $box-shadow;}
  &:not(&--no-border):not(&--shadow) {border: $border;}

  &__title {
    display: flex;
    align-items: center;
    padding: (2 * $base-increment) (3 * $base-increment);
    font-size: 1.3em;
    border-bottom: $border;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    &--has-toolbar {padding: 0;border-bottom: none;}
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 3 * $base-increment;
  }

  &__actions {
    display: flex;
    padding: (2 * $base-increment) (3 * $base-increment) (3 * $base-increment);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    &--has-toolbar {padding: 0;}
  }
}
</style>
