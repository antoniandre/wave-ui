<template lang="pug">
  component.title-link(:is="tag" :class="classes")
    a(v-if="label" :href="`#${Slug}`" v-html="label")
      span.hash #
    a(else :href="`#${Slug}`")
      span.hash #
      slot
    a(:id="Slug" :name="Slug")
</template>

<script>
export default {
  name: 'title-link',
  props: {
    h1: Boolean,
    h2: Boolean,
    h3: Boolean,
    h4: Boolean,
    h5: Boolean,
    h6: Boolean,
    label: String,
    slug: String
  },

  computed: {
    tag () {
      return (this.h1 && 'h1') ||
        (this.h2 && 'h2') ||
        (this.h3 && 'h3') ||
        (this.h4 && 'h4') ||
        (this.h5 && 'h5') ||
        (this.h6 && 'h6') ||
        'div'
    },

    Slug () {
      if (this.slug) return this.slug

      const source = this.label || this.$slots.default.map(item => item.text).join(' ')
      return source.toLowerCase().replace(/ /g, '-').replace(/[^\w\d-_]/g, '')
    },

    classes () {
      return {
        'headline primary': this.h1
      }
    }
  }
}
</script>

<style lang="scss">
.title-link {
  position: relative;

  .hash {
    position: absolute;
    right: 100%;
    font-size: 0.8em;
    padding: 0.2em 0.35em;
    line-height: 1;
    color: #e2e2e2;
  }

  &.headline .hash {line-height: 1.3;}

  a {color: inherit;}

  a[name] {
    position: relative;
    top: -3em;
    display: block;
  }
}
</style>