<template lang="pug">
.nav-menu.pa-3
  w-btn.close(small @click="$emit('update:drawerOpen', false)" outline round color="primary" icon="ion-md-close")
  .title Component
  ul
    li Buttons
    li Drawers
    li Icons
    li Loaders / spinners
</template>

<script>
import WBtn from '@/wave-ui/components/w-btn'
import WIcon from '@/wave-ui/components/w-icon'

export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  },
  components: { WBtn, WIcon }
}
</script>

<style lang="scss">
.nav-menu {
  .close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>