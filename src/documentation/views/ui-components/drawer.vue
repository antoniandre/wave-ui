<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-drawer]

  .text-center
    w-button.ma-1(
      @click="showLeftDrawer = !showLeftDrawer"
      outline
      color="primary") Show left drawer
    w-button.ma-1(
      @click="showRightDrawer = !showRightDrawer"
      outline
      color="primary") Show right drawer
    w-button.ma-1(
      @click="noOverlay = false;showTopDrawer = !showTopDrawer"
      outline
      color="primary") Show top drawer
    w-button.ma-1(
      @click="bottomDrawerHeight = null;showBottomDrawer = !showBottomDrawer"
      outline
      color="primary") Show bottom drawer

  h2 Control width or height
  w-button.mr-2(
    @click="bottomDrawerHeight = '60px';showBottomDrawer = !showBottomDrawer"
    outline
    color="primary") Show 60px height bottom drawer

  h2 No overlay &amp; custom color overlay
  span Open top drawer with:
  w-button.mx-2(
    @click="noOverlay = true;overlayColor = false;showTopDrawer = !showTopDrawer"
    outline
    color="primary") No overlay
  w-button.mr-2(
    @click="noOverlay = false;overlayColor = 'rgba(35, 71, 129, 0.5)';showTopDrawer = !showTopDrawer"
    outline
    color="primary") Custom color overlay
  w-button.mr-2(
    @click="noOverlay = false;overlayColor = 'transparent';showTopDrawer = !showTopDrawer"
    outline
    color="primary") Transparent overlay

  p.mt-4.
    #[strong Note:] with no overlay the underneath content will be clickable and the drawer will not close.
    To allow closing the drawer when clicking outside of it, you can set a transparent background on the overlay.

  w-drawer(v-model="showLeftDrawer" left)
    w-button.button--close(
      @click="showLeftDrawer = !showLeftDrawer"
      sm
      outline
      round
      color="primary"
      icon="ion-md-close")
    .layout.align-center.justify-center.fill-height
      w-button(
        @click="showLeftDrawer = false;showRightDrawer = true"
        dark
        bg-color="primary") Show right drawer

  w-drawer(v-model="showRightDrawer")
    w-button.button--close(
      @click="showRightDrawer = !showRightDrawer"
      sm
      outline
      round
      color="primary"
      icon="ion-md-close")

  w-drawer(v-model="showTopDrawer" top :no-overlay="noOverlay" :overlay-color="overlayColor")
    w-button.button--close(
      @click="showTopDrawer = !showTopDrawer"
      sm
      outline
      round
      color="primary"
      icon="ion-md-close")

  w-drawer(v-model="showBottomDrawer" bottom :height="bottomDrawerHeight")
    w-button.button--close(
      sm
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
    showBottomDrawer: false,
    noOverlay: false,
    overlayColor: false,
    bottomDrawerHeight: 0
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
