<template lang="pug">
w-app(:colors="colors")
  .toolbar
    | Wave UI
    .spacer
    router-link(to="/") Home
    router-link(to="/about") About
  header
  .content-wrap
    router-view
</template>

<script>
import WApp from '@/wave-ui/w-app'

export default {
  components: { WApp },
  data: () => ({
    colors: {
      primary: '#234781',
      secondary: '#d4e9ed'
    }
  })
}
</script>
