<template lang="pug">
main
  ui-component-title(slug="w-date-picker" in-progress) w-date-picker
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
