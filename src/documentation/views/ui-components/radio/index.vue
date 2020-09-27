<template lang="pug">
div
  ui-component-title(slug="w-radio-and-w-radios" :code="false")
    | #[span.code w-radio] &amp; #[span.code w-radios]
  examples
  api
</template>

<script>
export default {
  components: { Examples: () => import('./examples'), Api: () => import('./api') }
}
</script>
