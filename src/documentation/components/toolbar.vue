<template lang="pug">
w-toolbar.main-toolbar(fixed)
  router-link.w-flex.no-grow.fill-height.align-center.home-link(to="/" @click.native="scrollTop(false)")
    w-icon.wave-logo.mr3(size="3em") wi-wave
    span.grey-dark1 Wave UI
  .spacer
  w-menu(
    align-right
    arrow
    shadow
    transition="slide-fade-down"
    menu-class="dark-theme-preview bdrs2 ml1"
    content-class="pa0"
    bg-color="grey-dark6"
    color="grey-light6"
    append-to=".main-toolbar")
    template(#activator="{ on }")
      w-button.w-icon.mr2(
        v-on="on"
        bg-color="white"
        color="warning"
        outline
        width="2.2rem"
        height="2.2rem") 🔥
    .title2.px6.pb1 Wave UI 3.0 is around the corner!
    .img-wrap
      img(src="@/assets/wave-ui--dark-theme.png")
    .px6.py6
      w-flex.title3.align-center
        | Announcing Wave UI
        w-tag.ml1.code.text-bold(round bg-color="blue-dark4" color="white") 3.0
        | , planed for #[span.amber-dark5--bg.bdrs1.px1.mx1 release in a few more days]!
      p.my4.text-bold.
        We are working super-hard to pack amazing features in this new release!
        If you love Wave UI, you can #[a(href="https://github.com/sponsors/antoniandre") sponsor it]!
      p In Wave UI 3.0 release:
      w-list(:items="7" icon="wi-check")
        template(#item.1) New sexy dark theme for all the components.
        template(#item.2) Automatic detection of the user preferred theme.
        template(#item.3) New Vue 3 more intuitive installation method.
        template(#item.4) No more #[strong.code.inherit.mx1 w-app] component required.
        template(#item.5) Redefined components color defaults, now using CSS3 variables.
        template(#item.6) More granular control on all the components default colors via SCSS variables.
        template(#item.7) And more great improvements shipping in.
  strong.version.size--xs(v-html="`Version <code>${version}</code>`")
  w-tooltip(z-index="20" append-to=".main-toolbar")
    template(#activator="{ on }")
      div.ml1(v-on="on")
        router-link(to="/release-notes" @click.native="scrollTop(true)")
          w-icon(lg) mdi mdi-update
    | Release notes
  w-tooltip(z-index="20" append-to=".main-toolbar")
    template(#activator="{ on }")
      a.grey-dark3.ml2(v-on="on" href="https://github.com/antoniandre/wave-ui" target="_blank")
        w-icon(lg) mdi mdi-github
    .text-center View the project#[br]on Github
  w-tooltip(z-index="20" align-right append-to=".main-toolbar")
    template(#activator="{ on }")
      div.ml2.mr1(v-on="on")
        router-link.pink-light1(to="/backers" @click.native="scrollTop(true)")
          w-icon(lg) mdi mdi-heart-multiple-outline
    | Backers
  w-button.mr-1.hamburger-menu(
    v-if="$waveui.breakpoint.xs"
    @click="$emit('update:drawerOpen', !drawerOpen)"
    lg
    text
    round
    :icon="drawerOpen ? 'wi-cross' : 'mdi mdi-menu'")
</template>

<script>
export default {
  props: {
    drawerOpen: { type: Boolean, default: false }
  },

  emits: ['update:drawerOpen'],

  computed: {
    version () {
      return process.env.VITE_APP_VERSION.replace(
        /-(\w)(\w+)\.(\d+)/,
        (m0, m1, m2, m3) => ` <strong>${m1.toUpperCase()}${m2} ${m3}</strong>`
      )
    }
  },

  methods: {
    async scrollTop (toContent = false) {
      await this.$nextTick()
      document.documentElement.scrollTop = toContent
        ? document.querySelector('.content-wrap').offsetTop - 42
        : 0
    }
  }
}
</script>

<style lang="scss">
div.main-toolbar {
  background-color: rgba(255, 255, 255, 0.9);
  height: 42px;
  padding-top: 0;
  padding-bottom: 0;
  z-index: 190;

  .home-link {
    @include default-transition;
    &:hover {transform: scale(1.05);}
    &:focus {transform: scale(1.1);}

    span {font: 22px 'title font', helvetica, arial;}
  }

  .version {
    color: #aaa;

    code {
      letter-spacing: -0.5px;
      background: none;
      border: none;
      color: inherit;
      padding: 0;
    }
  }
  .github-link .w-icon, .wave-logo {color: #1670b4;}

  .hamburger-menu {margin-left: 8px;}
  .hamburger-menu .w-icon {width: 26px;}
}

.dark-theme-preview {
  width: 100%;
  max-width: 600px;

  .img-wrap {
    position: relative;
    overflow: hidden;
    aspect-ratio: 3.8;
  }
  img {
    transform-origin: 20% 70%;
    transform: scale(1.1);
    width: 100%;
  }
  .w-tag {
    font-size: 0.9em;
    padding: 1px 5px;
  }
}

@media screen and (max-width: 410px) {
  div.main-toolbar {
    .version {display: none;}
    .hamburger-menu {margin-left: 0;}
  }
}
</style>
