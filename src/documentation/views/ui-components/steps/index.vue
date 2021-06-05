<template lang="pug">
main
  ui-component-title(slug="w-steps" in-progress) w-steps
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
