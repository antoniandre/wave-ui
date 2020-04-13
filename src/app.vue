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
      primary: '#234781'
    }
  })
}
</script>

<style lang="scss">
$primary: #234781;

* {margin: 0;padding: 0;}

body {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

a {text-decoration: none;color: $primary;}

.toolbar {
  height: 3rem;
  line-height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
</style>
