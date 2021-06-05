<template lang="pug">
main
  ui-component-title(slug="w-checkbox-and-w-checkboxes" :code="false")
    | #[span.code w-checkbox] &amp; #[span.code w-checkboxes]

  examples
  api
</template>

<script>
import Examples from './examples.vue'
import Api from './api.vue'

export default {
  components: { Examples, Api }
}
</script>
