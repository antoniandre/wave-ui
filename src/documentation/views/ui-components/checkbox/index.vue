<template lang="pug">
div
  ui-component-title(slug="w-checkbox-and-w-checkboxes" :code="false")
    | #[span.code w-checkbox] &amp; #[span.code w-checkboxes]

  examples
  api
</template>

<script>
export default {
  components: { Examples: () => import('./examples'), Api: () => import('./api') }
}
</script>
