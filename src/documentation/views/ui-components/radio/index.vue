<template lang="pug">
main
  ui-component-title(slug="w-radio-and-w-radios" :code="false")
    | #[span.code w-radio] &amp; #[span.code w-radios]
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
