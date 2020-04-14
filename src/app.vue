<template lang="pug">
w-app(:colors="colors")
  .toolbar
    | Wave UI
    .spacer
    router-link.ml-2(to="/") Home
    router-link.ml-2(to="/about") About
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
