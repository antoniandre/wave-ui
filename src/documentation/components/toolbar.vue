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
      w-button.mr2(
        v-on="on"
        icon="mdi mdi-weather-night"
        color="white"
        bg-color="blue-dark5"
        shadow)
    .title2.px6.pb1 Wave UI Dark is around the corner!
    .img-wrap
      img(src="@/assets/wave-ui--dark-theme.png")
    .px6.py4
      w-flex.title3.align-center
        | Announcing Wave UI
        w-tag.ml1.code.text-bold(round bg-color="blue-dark4" color="white") 3.0
        | , planed for #[span.amber-dark5--bg.bdrs1.px1.mx1 release this month]!
      p.
        In Wave UI 3.0, you can work with 2 themes. The UI components will adapt automatically.
      w-list(:items="3" icon="wi-check")
        template(#item.1) Redefined components color defaults, now using CSS3 variables.
        template(#item.2) More granular control on all the components default colors via SCSS variables.
        template(#item.3) More great improvements shipping in, stay tuned.
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
    aspect-ratio: 2.4;
  }
  img {
    transform-origin: 20% 10%;
    transform: rotate(-2deg) scale(1.1);
    width: 100%;
  }
}

@media screen and (max-width: 410px) {
  div.main-toolbar {
    .version {display: none;}
    .hamburger-menu {margin-left: 0;}
  }
}
</style>
