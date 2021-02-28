<template lang="pug">
div
  title-link(h2) Positions
  example(content-class="w-flex align-center wrap")
    w-button.ma1(
      @click="showLeftDrawer = !showLeftDrawer"
      outline
      color="primary") Show left drawer
    w-button.ma1(
      @click="showRightDrawer = !showRightDrawer"
      outline
      color="primary") Show right drawer
    w-button.ma1(
      @click="noOverlay = false;showTopDrawer = !showTopDrawer"
      outline
      color="primary") Show top drawer
    w-button.ma1(
      @click="showBottomDrawer = !showBottomDrawer"
      outline
      color="primary") Show bottom drawer
    template(#html).
      &lt;w-button
        class="ma1"
        @click="showDrawer = 'left'"
        outline
        color="primary"&gt;
        Show left drawer
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="showDrawer = 'right'"
        outline
        color="primary"&gt;
        Show right drawer
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="showDrawer = 'top'"
        outline
        color="primary"&gt;
        Show top drawer
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="showDrawer = 'bottom'"
        outline
        color="primary"&gt;
        Show bottom drawer
      &lt;/w-button&gt;

      &lt;w-drawer
        :value="!!showDrawer"
        :[position]="true"
        @close="showDrawer = false"&gt;
        &lt;w-button
          class="button--close"
          @click="showDrawer = false"
          sm
          outline
          round
          absolute
          color="primary"
          icon="wi-cross"&gt;
        &lt;/w-button&gt;
      &lt;/w-drawer&gt;

    template(#js).
      data: () => ({
        showDrawer: false
      }),

      computed: {
        position () {
          return this.showDrawer || 'right'
        }
      }

  title-link(h3) Absolute position
  p.
    The #[span.code w-drawer] component can be placed in a deeper structure than the root of
    the site.#[br]
    When using the #[code absolute] position, don't forget to put an #[code overflow: hidden]
    on the parent to prevent a scrollbar to appear.
  example(content-class="relative")
    w-button.my12(
      @click="showAbsoluteDrawer = !showAbsoluteDrawer"
      outline
      color="primary") Show drawer
    w-drawer(v-model="showAbsoluteDrawer" absolute width="160px")
    template(#html).
      &lt;w-button
        class="my12"
        @click="showDrawer = !showDrawer"
        outline
        color="primary"&gt;
        Show drawer
      &lt;/w-button&gt;

      &lt;w-drawer
        v-model="showDrawer"
        absolute
        width="160px"&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        showDrawer: false
      })

  title-link(h2) Control width or height
  p.
    The #[span.code w-drawer] component accepts a #[span.code width] or #[span.code height] parameter
    depending on its position on screen to override the default one.
  p.grey-light1.
    #[span.code.grey-light1 width] and #[span.code.grey-light1 height] are called so for simplicity but
    they internally translate to #[span.code.grey-light1 max-width] and #[span.code.grey-light1 max-height]
    to fit on small screens.

  example(content-class="w-flex align-center")
    w-button(
      @click="bottomDrawerHeight = '60px';showBottomDrawer = !showBottomDrawer"
      outline
      color="primary") Show a 60px height bottom drawer
    template(#html).
      &lt;w-button
        @click="showDrawer = true"
        outline
        color="primary"&gt;
        Show a 60px height bottom drawer
      &lt;/w-button&gt;

      &lt;w-drawer v-model="showDrawer" bottom height="60px"&gt;
        &lt;w-button
          class="button--close"
          @click="showDrawer = false"
          sm
          outline
          round
          absolute
          color="primary"
          icon="wi-cross"&gt;
        &lt;/w-button&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        showDrawer: false
      })

  title-link(h2) Push content
  p.
    The #[code push-content] prop can be used on #[code left] and #[code right] positions.
    It will allow the drawer to push the content either on the left or right when it's open.#[br]
    To use the push-content layout, an explicit drawer #[code width] is required (don't only set a
    width via CSS). Any valid CSS width will work.#[br]
    The pushable content should be provided via the #[code pushable] slot.
  example(content-class="relative pa0")
    w-drawer(v-model="showPushContentRightDrawer" push-content :overlay-opacity="0.15" width="160px")
      template(#pushable)
        .py12.w-flex.column.align-center.justify-center
          p Pushable content
          w-button(
            @click="showPushContentRightDrawer = !showPushContentRightDrawer"
            outline
            color="primary") Show drawer
      .ma2 Drawer content
    template(#html).
      &lt;w-drawer
        v-model="showDrawer"
        push-content
        :overlay-opacity="0.15"
        width="160px"&gt;

        &lt;template #pushable&gt;
          &lt;div class="py12 w-flex column align-center justify-center"&gt;
            &lt;p&gt;Pushable content&lt;/p&gt;
            &lt;w-button
              @click="showDrawer = !showDrawer"
              outline
              color="primary"&gt;
              Show drawer
            &lt;/w-button&gt;
          &lt;/div&gt;
        &lt;/template&gt;

        &lt;div class="ma2"&gt;Drawer content&lt;/div&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        showDrawer: false
      })

  example(content-class="relative pa0")
    w-drawer(v-model="showPushContentLeftDrawer" push-content :overlay-opacity="0.15" left width="160px")
      template(#pushable)
        .py12.w-flex.column.align-center.justify-center
          p Pushable content
          w-button(
            @click="showPushContentLeftDrawer = !showPushContentLeftDrawer"
            outline
            color="primary") Show drawer
      .ma2 Drawer content
    template(#html).
      &lt;w-drawer
        v-model="showDrawer"
        push-content
        :overlay-opacity="0.15"
        left
        width="160px"&gt;

        &lt;template #pushable&gt;
          &lt;div class="py12 w-flex column align-center justify-center"&gt;
            &lt;p&gt;Pushable content&lt;/p&gt;
            &lt;w-button
              @click="showDrawer = !showDrawer"
              outline
              color="primary"&gt;
              Show drawer
            &lt;/w-button&gt;
          &lt;/div&gt;
        &lt;/template&gt;

        &lt;div class="ma2"&gt;Drawer content&lt;/div&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        showDrawer: false
      })

  title-link(h2) No overlay &amp; custom color overlay
  example(content-class="w-flex align-center wrap")
    span Open top drawer with a:
    w-button.ma1(
      @click="noOverlay = false;overlayColor = 'rgba(35, 71, 129, 0.5)';showTopDrawer = !showTopDrawer"
      outline
      color="primary") Custom color overlay
    w-button.ma1(
      @click="noOverlay = false;overlayColor = 'transparent';showTopDrawer = !showTopDrawer"
      outline
      color="primary") Transparent overlay
    w-button.ma1(
      @click="noOverlay = true;overlayColor = '';showTopDrawer = !showTopDrawer"
      outline
      color="primary") No overlay
    template(#html).
      &lt;span&gt;Open top drawer with a:&lt;/span&gt;
      &lt;w-button
        class="ma1"
        @click="noOverlay = false;overlayColor = 'rgba(35, 71, 129, 0.5&amp;#041;';showDrawer = !showDrawer"
        outline
        color="primary"&gt;
        Custom color overlay
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="noOverlay = false;overlayColor = 'transparent';showDrawer = !showDrawer"
        outline
        color="primary"&gt;
        Transparent overlay
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="noOverlay = true;overlayColor = '';showDrawer = !showDrawer"
        outline
        color="primary"&gt;
        No overlay
      &lt;/w-button&gt;

      &lt;w-drawer
        v-model="showDrawer"
        top
        :no-overlay="noOverlay"
        :overlay-color="overlayColor"&gt;
        &lt;w-button
          class="button--close"
          @click="showDrawer = false"
          sm
          outline
          absolute
          round
          color="primary"
          icon="wi-cross"&gt;
        &lt;/w-button&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        showDrawer: false,
        noOverlay: false,
        overlayColor: ''
      })

  p.mt4.
    #[strong Note:] with no overlay the underneath content will be clickable and the drawer
    will not close.
    To allow closing the drawer when clicking outside of it, you can set a transparent background
    on the overlay.

  title-link(h2) Persistent drawers
  p A persistent drawer stays open when clicking outside or pressing the escape key.
  example(content-class="w-flex align-center")
    w-button(
      @click="persistent = true;showBottomDrawer = !showBottomDrawer"
      outline
      color="primary") Persistent drawer
    template(#html).
      &lt;w-button
        @click="showDrawer = true"
        outline
        color="primary"&gt;
        Persistent drawer
      &lt;/w-button&gt;

      &lt;w-drawer
        v-model="showDrawer"
        bottom
        persistent
        bg-color="blue-light4"&gt;

        &lt;w-button
          class="button--close"
          sm
          @click="showDrawer = false"
          outline
          absolute
          round
          icon="wi-cross"&gt;
        &lt;/w-button&gt;

        &lt;div class="w-flex fill-height align-center justify-center"&gt;
          You can customize the background color as well.
        &lt;/div&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        showDrawer: false
      })

  title-link(h2) Cookie notice example
  p.
    The cookie notice is a good use case of a persistent drawer, it will not let you click
    anything until you accept.
  example(content-class="w-flex align-center")
    w-button(@click="showCookieNotice = true" outline color="primary")
      | Show the cookie notice
    w-drawer(
      v-model="showCookieNotice"
      content-class="cookie-notice"
      overlay-color="transparent"
      persistent
      fit-content
      bottom)
      .w-flex.pa2.align-center.wrap
        .w-flex.align-center.py1
          w-icon.mr3(color="primary" xl) wi-info-circle
          span.grey-dark3.
            Our website uses cookies to give you the best user experience.
            To continue browsing this site you must agree.
        .spacer
        w-button(sm bg-color="primary" dark @click="showCookieNotice = false")
          w-icon.mr2 wi-check
          | I agree
    template(#html).
      &lt;w-button
        @click="showCookieNotice = true"
        outline
        color="primary"&gt;
        Show the cookie notice
      &lt;/w-button&gt;

      &lt;w-drawer
        v-model="showCookieNotice"
        content-class="cookie-notice"
        overlay-color="transparent"
        persistent
        fit-content
        bottom&gt;
        &lt;div class="w-flex pa2 align-center wrap"&gt;
          &lt;div class="w-flex align-center"&gt;
            &lt;w-icon
              class="mr3"
              color="primary"
              xl&gt;
              wi-info-circle
            &lt;/w-icon&gt;

            &lt;span class="grey-dark3"&gt;
              Our website uses cookies to give you the best user experience.
              To continue browsing this site you must agree.
            &lt;/span&gt;
          &lt;/div&gt;

          &lt;div class="spacer"/&gt;

          &lt;w-button
            sm
            bg-color="primary"
            dark
            @click="showCookieNotice = false"&gt;
            &lt;w-icon class="mr2"&gt;wi-check&lt;/w-icon&gt;
            I agree
          &lt;/w-button&gt;
        &lt;/div&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        showCookieNotice: false
      })

  p You can then store the result of the acceptation in the localStorage.
  ssh-pre(language="html-vue" label="Template").
    &lt;w-button
      class="ml-auto"
      sm
      bg-color="primary"
      dark
      absolute
      @click="acceptCookies"&gt;
      &lt;w-icon class="mr2"&gt;wi-check&lt;/w-icon&gt;
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
      absolute
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
      absolute
      round
      color="primary"
      icon="wi-cross")

  w-drawer(v-model="showTopDrawer" top :no-overlay="noOverlay" :overlay-color="overlayColor")
    w-button.button--close(
      @click="showTopDrawer = !showTopDrawer"
      sm
      outline
      absolute
      round
      color="primary"
      icon="wi-cross")

  w-drawer(
    v-model="showBottomDrawer"
    bottom
    :persistent="persistent"
    :height="bottomDrawerHeight"
    bg-color="blue-light4"
    @close="bottomDrawerHeight = null;persistent = false")
    w-button.button--close(
      sm
      @click="showBottomDrawer = !showBottomDrawer"
      outline
      absolute
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
    showAbsoluteDrawer: false,
    showPushContentLeftDrawer: false,
    showPushContentRightDrawer: false,
    noOverlay: false,
    overlayColor: '',
    bottomDrawerHeight: 0,
    persistent: false,
    showCookieNotice: false
  })
}
</script>

<style lang="scss">
.example .relative {position: relative;}
</style>
