<template lang="pug">
w-app(:colors="colors" :icons="['fa', 'ion']")
  toolbar(:drawerOpen.sync="drawerOpen")
  w-drawer(v-model="drawerOpen" left)
  header
  .content-wrap
    router-view
</template>

<script>
import WApp from '@/wave-ui/w-app'
import WDrawer from '@/wave-ui/w-drawer'
import Toolbar from '@/documentation/components/toolbar'
import '@/documentation/scss/index.scss'

export default {
  components: { WApp, WDrawer, Toolbar },
  data: () => ({
    drawerOpen: false,
    colors: {
      primary: '#234781',
      secondary: '#d4e9ed'
    }
  })
}
</script>

<style lang="scss">
header {
  margin-top: 3rem;
  position: relative;
  background: url('~@/assets/japanese-wave.png') left top;
  background-size: contain;
  margin-bottom: 1rem;
  padding-bottom: 20%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('~@/assets/wave-pattern.svg') bottom;
    background-size: 45%;
    z-index: -1;
  }
}
</style>
