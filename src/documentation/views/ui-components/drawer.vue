<template lang="pug">
div
  title-link.mt-4.code(h1) w-drawer

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
      @click="showBottomDrawer = !showBottomDrawer"
      outline
      color="primary") Show bottom drawer

  title-link(h2) Control width or height
  w-button.mr-2(
    @click="bottomDrawerHeight = '60px';showBottomDrawer = !showBottomDrawer"
    outline
    color="primary") Show a 60px height bottom drawer

  title-link(h2) No overlay &amp; custom color overlay
  span Open top drawer with:
  w-button.mx-2.my-1(
    @click="noOverlay = true;overlayColor = false;showTopDrawer = !showTopDrawer"
    outline
    color="primary") No overlay
  w-button.mr-2.my-1(
    @click="noOverlay = false;overlayColor = 'rgba(35, 71, 129, 0.5)';showTopDrawer = !showTopDrawer"
    outline
    color="primary") Custom color overlay
  w-button.mr-2.my-1(
    @click="noOverlay = false;overlayColor = 'transparent';showTopDrawer = !showTopDrawer"
    outline
    color="primary") Transparent overlay

  p.mt-4.
    #[strong Note:] with no overlay the underneath content will be clickable and the drawer
    will not close.
    To allow closing the drawer when clicking outside of it, you can set a transparent background
    on the overlay.

  title-link(h2) Persistent drawers
  p A persistent drawer stays open when clicking outside or pressing the escape key.
  w-button.mx-2.my-1(
  @click="persistent = true;showBottomDrawer = !showBottomDrawer"
  outline
  color="primary") Persistent drawer

  title-link(h2) Cookie notice example
  p.
    The cookie notice is a good use case of a persistent drawer, it will not let you click
    anything until you accept.
  w-button.mx-2.my-1(@click="showCookieNotice = true" outline color="primary")
    | Show the cookie notice
  w-drawer(
    v-model="showCookieNotice"
    content-class="cookie-notice"
    overlay-color="transparent"
    persistent
    fit-content
    bottom)
    .w-flex.pa-2.align-center.wrap
      .w-flex.align-center
        w-icon.mr-3(color="primary" xl) wi-info-circle
        span.grey-dark-3.
          Our website uses cookies to give you the best user experience.
          To continue browsing this site you must agree.
      w-button.ml-auto(sm bg-color="primary" dark @click="showCookieNotice = false")
        w-icon.mr-2 wi-check
        | I agree
  p You can then store the result of the acceptation in the localStorage.
  ssh-pre(language="html-vue" label="Template").
    &lt;w-button
      class="ml-auto"
      sm
      bg-color="primary"
      dark
      @click="acceptCookies"&gt;
      &lt;w-icon class="mr-2"&gt;wi-check&lt;/w-icon&gt;
      I agree
    &lt;/w-button&gt;

  ssh-pre(language="js" label="Javascript").
    acceptCookies () {
      localStorage.acceptCookies = 'yes'
      this.showCookieNotice = false
    }

  w-drawer(v-model="showLeftDrawer" left)
    w-button.button--close(
      @click="showLeftDrawer = !showLeftDrawer"
      sm
      outline
      round
      color="primary"
      icon="wi-cross")
    .w-flex.align-center.justify-center.fill-height
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
      icon="wi-cross")

  w-drawer(v-model="showTopDrawer" top :no-overlay="noOverlay" :overlay-color="overlayColor")
    w-button.button--close(
      @click="showTopDrawer = !showTopDrawer"
      sm
      outline
      round
      color="primary"
      icon="wi-cross")

  w-drawer(
    v-model="showBottomDrawer"
    bottom
    :persistent="persistent"
    :height="bottomDrawerHeight"
    bg-color="blue-light-4"
    @close="bottomDrawerHeight = null;persistent = false")
    w-button.button--close(
      sm
      @click="showBottomDrawer = !showBottomDrawer"
      outline
      round
      icon="wi-cross")
    .w-flex.fill-height.align-center.justify-center You can customize the background color as well.
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
    bottomDrawerHeight: 0,
    persistent: false,
    showCookieNotice: false
  })
}
</script>

<style lang="scss">
.button--close {
  position: absolute;
  top: 6px;
  right: 6px;
}
</style>
