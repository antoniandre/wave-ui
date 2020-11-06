<template lang="pug">
main
  ui-component-title(slug="w-checkbox-and-w-checkboxes" :code="false")
    | #[span.code w-checkbox] &amp; #[span.code w-checkboxes]

  examples
  api
</template>

<script>
import Examples from './examples'
import Api from './api'

export default {
  components: { Examples, Api }
}
</script>
