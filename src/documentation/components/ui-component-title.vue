<template lang="pug">
.w-flex.wrap.align-center
  title-link.mt4.mb3(h1 :class="{ code }" :slug="slug")
    slot
  w-button.mla.mb3(route="#api" outline force-link)
    w-icon.ml-1.mr1(lg) wi-chevron-down
    | Jump to the API
</template>

<script>
export default {
  props: {
    code: { type: Boolean, default: true },
    slug: String
  }
}
</script>
