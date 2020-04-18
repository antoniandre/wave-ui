<template lang="pug">
div
  w-drawer(v-model="showLeftDrawer" left)
    w-btn.close(
      small
      @click="showLeftDrawer = !showLeftDrawer"
      outline
      round
      color="primary"
      icon="ion-md-close")

  w-drawer(v-model="showRightDrawer")
    w-btn.close(
      small
      @click="showRightDrawer = !showRightDrawer"
      outline
      round
      color="primary"
      icon="ion-md-close")

  w-drawer(v-model="showTopDrawer" top)
    w-btn.close(
      small
      @click="showTopDrawer = !showTopDrawer"
      outline
      round
      color="primary"
      icon="ion-md-close")

  w-drawer(v-model="showBottomDrawer" bottom)
    w-btn.close(
      small
      @click="showBottomDrawer = !showBottomDrawer"
      outline
      round
      color="primary"
      icon="ion-md-close")
</template>

<script>
export default {
  data: () => ({
    showLeftDrawer: false,
    showRightDrawer: false,
    showTopDrawer: false,
    showBottomDrawer: false
  })
}
</script>

<style lang="scss">

</style>