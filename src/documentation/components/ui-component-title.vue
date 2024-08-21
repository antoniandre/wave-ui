<template lang="pug">
.ui-component-title
  .w-flex.wrap.align-center
    title-link.mt4.mb3(h1 :class="{ code: code && !inProgress }" :slug="slug")
      template(v-if="inProgress")
        .code
          slot
        w-tag.ml2(color="orange" outline round) IN PROGRESS
      template(v-else-if="deprecated")
        .code
          slot
        w-tag.bd2.ml2(
          :bg-color="$waveui.theme === 'dark' ? 'base-color' : 'grey-dark4'"
          :color="$waveui.theme === 'dark' ? 'base-color' : 'white'"
          round) DEPRECATED
      slot(v-else)
    w-button.mla.mb3(outline force-link @click="scrollToApi")
      w-icon.ml-1.mr1.chevron-down(lg) wi-chevron-down
      | Jump to the API

  alert.mt4.mb12(v-if="inProgress" warning).
    While a component is in progress, the props, slots and events may change when you upgrade.#[br]
    Always keep track in the #[router-link(to="/release-notes") release notes].
</template>

<script>
export default {
  props: {
    code: { type: Boolean, default: true },
    inProgress: { type: Boolean },
    deprecated: { type: Boolean },
    slug: String
  },

  methods: {
    scrollToApi () {
      document.getElementById('api').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">
.ui-component-title .chevron-down:before {margin-top: 3px;}
</style>
