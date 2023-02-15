<template lang="pug">
main
  ui-component-title(slug="w-scrollbar" in-progress) w-scrollbar
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
