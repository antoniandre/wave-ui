<template lang="pug">
div
  title-link.mt4.code(h1) w-alert

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