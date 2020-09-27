<template lang="pug">
div
  ui-component-title w-divider
  examples
  api
</template>

<script>
export default {
  components: { Examples: () => import('./examples'), Api: () => import('./api') }
}
</script>
