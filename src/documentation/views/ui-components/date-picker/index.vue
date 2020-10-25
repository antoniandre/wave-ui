<template lang="pug">
div
  ui-component-title(slug="w-date-picker")
    .code w-date-picker
    w-tag.ml2.text-upper(color="orange" outline) In progress
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
