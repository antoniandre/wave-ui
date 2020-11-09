<template lang="pug">
main
  ui-component-title w-dialog
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
