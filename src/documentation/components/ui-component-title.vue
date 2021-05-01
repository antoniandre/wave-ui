<template lang="pug">
.ui-component-title
  .w-flex.wrap.align-center
    title-link.mt4.mb3(h1 :class="{ code: code && !inProgress }" :slug="slug")
      .code(v-if="inProgress")
        slot
      slot(v-else)
      w-tag.ml2.text-bold.text-upper(v-if="inProgress" color="orange" outline round) In progress
    w-button.mla.mb3(route="#api" outline force-link)
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
    slug: String
  }
}
</script>

<style lang="scss">
.ui-component-title .chevron-down:before {margin-top: 3px;}
</style>
