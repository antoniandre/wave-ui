<template lang="pug">
div
  ui-component-title w-breadcrumbs
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
