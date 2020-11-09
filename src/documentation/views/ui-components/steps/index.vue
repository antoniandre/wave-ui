<template lang="pug">
main
  ui-component-title(slug="w-steps" in-progress) w-steps
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
