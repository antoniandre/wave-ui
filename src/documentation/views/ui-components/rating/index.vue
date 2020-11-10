<template lang="pug">
main
  ui-component-title(slug="w-rating") w-rating
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
