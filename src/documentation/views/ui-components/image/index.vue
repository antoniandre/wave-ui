<template lang="pug">
main
  ui-component-title(slug="w-image" in-progress) w-image
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
