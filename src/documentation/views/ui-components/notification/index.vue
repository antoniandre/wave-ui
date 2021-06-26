<template lang="pug">
main
  ui-component-title(:code="false" slug="notification-manager-and-w-notification")
    | Built-in notification manager &amp; #[span.code w-notification]
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
