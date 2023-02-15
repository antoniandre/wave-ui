<template lang="pug">
div
  title-link(h2) Basic
  example(content-class="w-flex align-center wrap")
    w-button(
      @click="openRightDrawer = !openRightDrawer"
      outline) Open drawer
    template(#pug).
      w-button(@click="openDrawer = true" outline) Open drawer

      w-drawer(v-model="openDrawer")
    template(#html).
      &lt;w-button @click="openDrawer = true" outline&gt;
        Open drawer
      &lt;/w-button&gt;

      &lt;w-drawer v-model="openDrawer" /&gt;
    template(#js).
      data: () => ({
        openDrawer: false
      })

  title-link(h2) Positions
  example(content-class="w-flex align-center wrap")
    w-button.ma1(
      @click="openLeftDrawer = !openLeftDrawer"
      outline) Open left drawer
    w-button.ma1(
      @click="openRightDrawer = !openRightDrawer"
      outline) Open right drawer
    w-button.ma1(
      @click="noOverlay = false;openTopDrawer = !openTopDrawer"
      outline) Open top drawer
    w-button.ma1(
      @click="openBottomDrawer = !openBottomDrawer"
      outline) Open bottom drawer
    template(#pug).
      w-button.ma1(
        @click="openDrawer = 'left'"
        outline) Open left drawer

      w-button.ma1(
        @click="openDrawer = 'right'"
        outline) Open right drawer

      w-button.ma1(
        @click="openDrawer = 'top'"
        outline) Open top drawer

      w-button.ma1(
        @click="openDrawer = 'bottom'"
        outline) Open bottom drawer

      w-drawer(v-model="openDrawer" :[position]="true")
        w-button(
          @click="openDrawer = false"
          sm
          outline
          round
          absolute
          icon="wi-cross")

    template(#html).
      &lt;w-button
        class="ma1"
        @click="openDrawer = 'left'"
        outline&gt;
        Open left drawer
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="openDrawer = 'right'"
        outline&gt;
        Open right drawer
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="openDrawer = 'top'"
        outline&gt;
        Open top drawer
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="openDrawer = 'bottom'"
        outline&gt;
        Open bottom drawer
      &lt;/w-button&gt;

      &lt;w-drawer
        v-model="openDrawer"
        :[position]="true"&gt;
        &lt;w-button
          @click="openDrawer = false"
          sm
          outline
          round
          absolute
          icon="wi-cross"&gt;
        &lt;/w-button&gt;
      &lt;/w-drawer&gt;

    template(#js).
      data: () => ({
        openDrawer: false
      }),

      computed: {
        position () {
          return this.openDrawer || 'right'
        }
      }

  title-link(h3) Absolute position
  p.
    The #[strong.code w-drawer] component can be placed in a deeper structure than the root of
    the site.
  example(content-class="relative justify-center d-flex")
    w-card.ma6.grow.text-center(:bg-color="$store.state.darkMode ? 'grey-dark6' : 'amber-light5'" title="w-card")
      w-button.my12(@click="openAbsoluteDrawer = true" text) Open drawer
      w-drawer(v-model="openAbsoluteDrawer" absolute width="160px")
    template(#pug).
      w-card.ma6.grow.text-center(bg-color="{{ $store.state.darkMode ? 'grey-dark6' : 'amber-light5' }}" title="w-card")
        w-button.my12(@click="openDrawer = true" text) Open drawer

        w-drawer(v-model="openDrawer" absolute width="160px")
    template(#html).
      &lt;w-card
        class="ma6 grow text-center"
        bg-color="{{ $store.state.darkMode ? 'grey-dark6' : 'amber-light5' }}"
        title="w-card"&gt;
        &lt;w-button class="my12" @click="openDrawer = true" text&gt;
          Open drawer
        &lt;/w-button&gt;

        &lt;w-drawer
          v-model="openDrawer"
          absolute
          width="160px"&gt;
        &lt;/w-drawer&gt;
      &lt;/w-card&gt;
    template(#js).
      data: () => ({
        openDrawer: false
      })

  title-link(h2) Control width or height
  p.
    The #[strong.code w-drawer] component accepts a #[span.code width] or #[span.code height] parameter
    depending on its position on screen to override the default one.
  p.grey-light1.
    #[span.code.grey-light1 width] and #[span.code.grey-light1 height] are called so for simplicity but
    they internally translate to #[span.code.grey-light1 max-width] and #[span.code.grey-light1 max-height]
    to fit on small screens.

  example
    p.mb4 Open a blue 60px-height bottom drawer
    w-button(
      @click="bottomDrawerHeight = '60px';openBottomDrawer = true"
      outline) Open drawer
    template(#pug).
      p.mb4 Open a blue 60px-height bottom drawer

      w-button(@click="openDrawer = true" outline) Open drawer

      w-drawer(
        v-model="openDrawer"
        bg-color="blue-light4"
        bottom
        height="60px")
    template(#html).
      &lt;p class="mb4"&gt;Open a blue 60px-height bottom drawer&lt;/p&gt;
      &lt;w-button
        @click="openDrawer = true"
        outline&gt;
        Open drawer
      &lt;/w-button&gt;

      &lt;w-drawer
        v-model="openDrawer"
        bg-color="blue-light4"
        bottom
        height="60px"&gt;
        &lt;w-button
          @click="openDrawer = false"
          icon="wi-cross"
          sm
          outline
          round
          absolute&gt;
        &lt;/w-button&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        openDrawer: false
      })

  title-link(h2) Push content
  p.
    The #[code push-content] prop can be used on #[code left] and #[code right] positions.
    It will allow the drawer to push the content either on the left or right when it's open.#[br]
    To use the push-content layout, an explicit drawer #[code width] is required (don't only set a
    width via CSS). Any valid CSS width will work.#[br]
    The pushable content should be provided via the #[code pushable] slot.
  example(content-class="relative pa0" :blank-codepen="['css']")
    w-drawer(
      v-model="openPushContentRightDrawer"
      push-content
      :overlay-opacity="0.15"
      width="160px")
      template(#pushable)
        .py12.w-flex.column.align-center.justify-center
          p.mb3 Pushable content
          w-button(
            @click="openPushContentRightDrawer = true"
            outline) Open drawer
      .ma2 Drawer content
    template(#pug).
      w-drawer(
        v-model="openDrawer"
        push-content
        :overlay-opacity="0.15"
        width="160px")
        template(#pushable)
          w-flex.py12(column align-center justify-center)
            p.mb3 Pushable content
            w-button(@click="openDrawer = true" outline).
              Open drawer
        .ma2 Drawer content
    template(#html).
      &lt;w-drawer
        v-model="openDrawer"
        push-content
        :overlay-opacity="0.15"
        width="160px"&gt;

        &lt;template #pushable&gt;
          &lt;w-flex class="py12" column align-center justify-center&gt;
            &lt;p class="mb3"&gt;Pushable content&lt;/p&gt;
            &lt;w-button @click="openDrawer = true" outline&gt;
              Open drawer
            &lt;/w-button&gt;
          &lt;/w-flex&gt;
        &lt;/template&gt;

        &lt;div class="ma2"&gt;Drawer content&lt;/div&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        openDrawer: false
      })

  example(content-class="relative pa0" :blank-codepen="['css']")
    w-drawer(
      v-model="openPushContentLeftDrawer"
      push-content
      :overlay-opacity="0.15"
      left
      width="160px")
      template(#pushable)
        .py12.w-flex.column.align-center.justify-center
          p.mb3 Pushable content
          w-button(@click="openPushContentLeftDrawer = true" outline) Open drawer
      .ma2 Drawer content
    template(#pug).
      w-drawer(
        v-model="openDrawer"
        push-content
        :overlay-opacity="0.15"
        left
        width="160px")
        template(#pushable)
          w-flex.py12(column align-center justify-center)
            p.mb3 Pushable content
            w-button(@click="openDrawer = true" outline).
              Open drawer
        .ma2 Drawer content
    template(#html).
      &lt;w-drawer
        v-model="openDrawer"
        push-content
        :overlay-opacity="0.15"
        left
        width="160px"&gt;

        &lt;template #pushable&gt;
          &lt;w-flex class="py12" column align-center justify-center&gt;
            &lt;p class="mb3"&gt;Pushable content&lt;/p&gt;
            &lt;w-button @click="openDrawer = true" outline&gt;
              Open drawer
            &lt;/w-button&gt;
          &lt;/w-flex&gt;
        &lt;/template&gt;

        &lt;div class="ma2"&gt;Drawer content&lt;/div&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        openDrawer: false
      })

  title-link(h2) No overlay &amp; custom color overlay
  example(content-class="w-flex align-center wrap")
    span Open top drawer with a:
    w-button.ma1(
      @click="noOverlay = false;overlayColor = 'rgba(35, 71, 129, 0.5)';openTopDrawer = !openTopDrawer"
      outline) Custom color overlay
    w-button.ma1(
      @click="noOverlay = false;overlayColor = 'transparent';openTopDrawer = !openTopDrawer"
      outline) Transparent overlay
    w-button.ma1(
      @click="noOverlay = true;overlayColor = '';openTopDrawer = !openTopDrawer"
      outline) No overlay
    template(#pug).
      span Open top drawer with a:

      w-button.ma1(
        @click="noOverlay = false;overlayColor = 'rgba&amp;#40;35, 71, 129, 0.5&amp;#41;';openDrawer = !openDrawer"
        outline) Custom color overlay

      w-button.ma1(
        @click="noOverlay = false;overlayColor = 'transparent';openDrawer = !openDrawer"
        outline) Transparent overlay

      w-button.ma1(
        @click="noOverlay = true;overlayColor = '';openDrawer = !openDrawer"
        outline) No overlay

      w-drawer(
        v-model="openDrawer"
        top
        :no-overlay="noOverlay"
        :overlay-color="overlayColor")
        w-button(
          @click="openDrawer = false"
          sm
          outline
          absolute
          round
          icon="wi-cross")
    template(#html).
      &lt;span&gt;Open top drawer with a:&lt;/span&gt;
      &lt;w-button
        class="ma1"
        @click="noOverlay = false;overlayColor = 'rgba(35, 71, 129, 0.5&amp;#041;';openDrawer = !openDrawer"
        outline&gt;
        Custom color overlay
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="noOverlay = false;overlayColor = 'transparent';openDrawer = !openDrawer"
        outline&gt;
        Transparent overlay
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        @click="noOverlay = true;overlayColor = '';openDrawer = !openDrawer"
        outline&gt;
        No overlay
      &lt;/w-button&gt;

      &lt;w-drawer
        v-model="openDrawer"
        top
        :no-overlay="noOverlay"
        :overlay-color="overlayColor"&gt;
        &lt;w-button
          @click="openDrawer = false"
          sm
          outline
          absolute
          round
          icon="wi-cross"&gt;
        &lt;/w-button&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        openDrawer: false,
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
      @click="persistent = true;openBottomDrawer = true"
      outline) Persistent drawer
    template(#pug).
      w-button(@click="openDrawer = true" outline).
        Persistent drawer

      w-drawer(
        v-model="openDrawer"
        bottom
        persistent
        bg-color="blue-light4")
        w-button(
          sm
          @click="openDrawer = false"
          outline
          absolute
          round
          icon="wi-cross")
    template(#html).
      &lt;w-button
        @click="openDrawer = true"
        outline&gt;
        Persistent drawer
      &lt;/w-button&gt;

      &lt;w-drawer
        v-model="openDrawer"
        bottom
        persistent
        bg-color="blue-light4"&gt;

        &lt;w-button
          sm
          @click="openDrawer = false"
          outline
          absolute
          round
          icon="wi-cross"&gt;
        &lt;/w-button&gt;

        &lt;div class="w-flex fill-height align-center justify-center black"&gt;
          You can customize the background color as well.
        &lt;/div&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        openDrawer: false
      })

  title-link(h2) Cookie notice example
  p.
    The cookie notice is a good use case of a persistent drawer, it will not let you click
    anything until you accept.
  example(content-class="w-flex align-center")
    w-button(@click="showCookieNotice = true" outline)
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
          w-icon.mr3(xl) mdi mdi-cookie
          span(:class="$store.state.darkMode ? 'grey-light4' : 'grey-dark3'").
            Our website uses cookies to give you the best user experience.
            To continue browsing this site you must agree.
        .spacer
        w-button(sm @click="showCookieNotice = false")
          w-icon.mr2 mdi mdi-check
          | I agree
    template(#pug).
      w-button(@click="showCookieNotice = true" outline).
        Show the cookie notice

      w-drawer(
        v-model="showCookieNotice"
        content-class="cookie-notice"
        overlay-color="transparent"
        persistent
        fit-content
        bottom)
        w-flex.pa2(align-center wrap)
          w-flex.py1(align-center)
            w-icon.mr3(xl) mdi mdi-cookie
            span.{{ $store.state.darkMode ? 'grey-light4' : 'grey-dark3' }}.
              Our website uses cookies to give you the best user experience.
              To continue browsing this site you must agree.
          .spacer
          w-button(sm @click="showCookieNotice = false")
            w-icon.mr2 mdi mdi-check
            | I agree
    template(#html).
      &lt;w-button
        @click="showCookieNotice = true"
        outline&gt;
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
            &lt;w-icon class="mr3" xl&gt;
              mdi mdi-cookie
            &lt;/w-icon&gt;
              &lt;span class="{{ $store.state.darkMode ? 'grey-light4' : 'grey-dark3' }}"&gt;
              Our website uses cookies to give you the best user experience.
              To continue browsing this site you must agree.
            &lt;/span&gt;
          &lt;/div&gt;
          &lt;div class="spacer" /&gt;
          &lt;w-button sm @click="showCookieNotice = false"&gt;
            &lt;w-icon class="mr2"&gt;mdi mdi-check&lt;/w-icon&gt;
            I agree
          &lt;/w-button&gt;
        &lt;/div&gt;
      &lt;/w-drawer&gt;
    template(#js).
      data: () => ({
        showCookieNotice: false
      })

  p.
    You can then store the result of the acceptation in the localStorage when the user clicks
    the button.
  ssh-pre(
    v-show="!$store.state.usePug"
    :dark="$store.state.darkMode"
    language="html-vue"
    label="Template").
    &lt;w-button
      class="ml-auto"
      @click="acceptCookies"
      sm
      absolute&gt;
      &lt;w-icon class="mr2"&gt;wi-check&lt;/w-icon&gt;
      I agree
    &lt;/w-button&gt;

  ssh-pre(
    v-show="$store.state.usePug"
    :dark="$store.state.darkMode"
    language="pug"
    label="Template").
    w-button.ml-auto(@click="acceptCookies" sm absolute)
      w-icon.mr2 wi-check
      | I agree

  ssh-pre(language="js" label="Javascript" :dark="$store.state.darkMode").
    acceptCookies () {
      localStorage.acceptCookies = 'yes'
      this.showCookieNotice = false
    }

  w-drawer(v-model="openLeftDrawer" left)
    w-button.button--close(
      @click="openLeftDrawer = !openLeftDrawer"
      sm
      outline
      absolute
      round
      icon="wi-cross")
    .w-flex.align-center.justify-center.fill-height
      w-button(@click="openLeftDrawer = false;openRightDrawer = true").
        Show right drawer

  w-drawer(v-model="openRightDrawer")
    w-button.button--close(
      @click="openRightDrawer = !openRightDrawer"
      sm
      outline
      absolute
      round
      icon="wi-cross")

  w-drawer(v-model="openTopDrawer" top :no-overlay="noOverlay" :overlay-color="overlayColor")
    w-button.button--close(
      @click="openTopDrawer = !openTopDrawer"
      sm
      outline
      absolute
      round
      icon="wi-cross")

  w-drawer(
    v-model="openBottomDrawer"
    bottom
    :persistent="persistent"
    :height="bottomDrawerHeight"
    bg-color="blue-light4"
    @close="bottomDrawerHeight = null;persistent = false")
    w-button.button--close(
      sm
      @click="openBottomDrawer = !openBottomDrawer"
      outline
      absolute
      round
      icon="wi-cross")
    .w-flex.fill-height.align-center.justify-center.black You can customize the background color as well.
</template>

<script>
export default {
  data: () => ({
    openLeftDrawer: false,
    openRightDrawer: false,
    openTopDrawer: false,
    openBottomDrawer: false,
    openAbsoluteDrawer: false,
    openPushContentLeftDrawer: false,
    openPushContentRightDrawer: false,
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
