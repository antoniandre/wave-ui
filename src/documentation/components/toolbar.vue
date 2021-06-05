<template lang="pug">
w-toolbar.main-toolbar(fixed)
  router-link.w-flex.no-grow.fill-height.align-center.home-link(to="/")
    w-icon.wave-logo.mr3(size="3em") wi-wave
    span.grey-dark1 Wave UI
  .spacer
  strong.version.grey.size--xs(v-html="`Version ${version}`")
  w-tooltip(z-index="20")
    template(#activator="{ on }")
      div.ml1(v-on="on")
        router-link(to="/release-notes")
          w-icon(lg) mdi mdi-update
    | Release notes
  w-tooltip(z-index="20")
    template(#activator="{ on }")
      a.grey-dark3.ml2(v-on="on" href="https://github.com/antoniandre/wave-ui" target="_blank")
        w-icon(lg) mdi mdi-github
    .text-center View the project#[br]on Github
  w-tooltip(z-index="20")
    template(#activator="{ on }")
      div.ml2.mr1(v-on="on")
        router-link.pink-light1(to="/backers")
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

  .github-link .w-icon, .wave-logo {color: #1670b4;}

  .hamburger-menu {margin-left: 8px;}
  .hamburger-menu .w-icon {width: 26px;height: 26px;}
}

@media screen and (max-width: 410px) {
  div.main-toolbar {
    .version {display: none;}
    .hamburger-menu {margin-left: 0;}
  }
}
</style>
