<template lang="pug">
main
  ui-component-title(slug="w-table" in-progress) w-table
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
