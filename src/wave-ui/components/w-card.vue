<template lang="pug">
.w-card(:class="classes" :style="styles")
  .w-card__title(
    v-if="$slots.title"
    :class="{ 'w-card__title--has-toolbar': titleHasToolbar, [titleClass]: titleClass || false }")
    slot(name="title")
  .w-card__title(v-else-if="title" :class="titleClass || false" v-html="title")
  w-image.w-card__image(v-if="image" :src="image" v-bind="imgProps")
    slot(name="image-content")
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
    color: { type: String },
    bgColor: { type: String },
    shadow: { type: Boolean },
    noBorder: { type: Boolean },
    tile: { type: Boolean },
    title: { type: String },
    image: { type: String },
    imageProps: { type: Object },
    titleClass: { type: String },
    contentClass: { type: String }
  },

  emits: [],

  computed: {
    titleHasToolbar () {
      const { title } = this.$slots
      return title && title().map(vnode => vnode.type.name).join('').includes('w-toolbar')
    },
    actionsHasToolbar () {
      const { actions } = this.$slots
      return actions && actions().map(vnode => vnode.type.name).join('').includes('w-toolbar')
    },
    imgProps () {
      return {
        tag: 'div',
        ratio: 1 / 2,
        ...this.imageProps
      }
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
  border: $border;

  &--tile {border-radius: 0;}
  &--shadow {box-shadow: $box-shadow;}
  &--no-border, &--shadow {border: none;}

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
    padding: 3 * $base-increment;
    flex-grow: 1;
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
