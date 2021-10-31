<template lang="pug">
main
  ui-component-title(in-progress) w-confirm
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
