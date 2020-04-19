<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-drawer]
  w-button.mr-2(
    @click="showLeftDrawer = !showLeftDrawer"
    outline
    color="primary") Show left drawer
  w-button.mr-2(
    @click="showRightDrawer = !showRightDrawer"
    outline
    color="primary") Show right drawer
  w-button.mr-2(
    @click="showTopDrawer = !showTopDrawer"
    outline
    color="primary") Show top drawer
  w-button.mr-2(
    @click="showBottomDrawer = !showBottomDrawer"
    outline
    color="primary") Show bottom drawer


  w-drawer(v-model="showLeftDrawer" left)
    w-button.button--close(
      small
      @click="showLeftDrawer = !showLeftDrawer"
      outline
      round
      color="primary"
      icon="ion-md-close")

  w-drawer(v-model="showRightDrawer")
    w-button.button--close(
      small
      @click="showRightDrawer = !showRightDrawer"
      outline
      round
      color="primary"
      icon="ion-md-close")

  w-drawer(v-model="showTopDrawer" top)
    w-button.button--close(
      small
      @click="showTopDrawer = !showTopDrawer"
      outline
      round
      color="primary"
      icon="ion-md-close")

  w-drawer(v-model="showBottomDrawer" bottom)
    w-button.button--close(
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
.button--close {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
}
</style>