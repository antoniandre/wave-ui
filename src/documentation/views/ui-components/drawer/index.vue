<template lang="pug">
div
  ui-component-title w-drawer
  examples
  api
</template>

<script>
export default {
  components: { Examples: () => import('./examples'), Api: () => import('./api') }
}
</script>
