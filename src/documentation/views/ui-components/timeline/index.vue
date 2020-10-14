<template lang="pug">
div
  ui-component-title(slug="w-timeline" :code="false")
    .code w-timeline
    w-tag.orange.ml2.text-upper.text-bold(outline) in progress
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
