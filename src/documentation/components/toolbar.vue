<template lang="pug">
w-toolbar.main-toolbar(fixed)
  router-link.w-flex.no-grow.fill-height.align-center.home-link(to="/" @click.native="scrollTop(false)")
    w-icon.wave-logo.mr3(size="3em") wi-wave
    span.grey-dark1 Wave UI
  .spacer

  w-switch.mr2(
    :model-value="$store.state.darkMode"
    @update:model-value="$store.commit('setDarkMode', $event), $waveui.switchTheme($event ? 'dark' : 'light')"
    bg-color="blue-dark5")
    template(#thumb)
      w-icon mdi {{ $store.state.darkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}

  router-link(to="/release-notes" @click.native="scrollTop(true)")
    strong.version.size--xs(v-html="`v<code>${version}</code>`")

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
        (_m0, m1, m2, m3) => ` <strong>${m1.toUpperCase()}${m2} ${m3}</strong>`
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
  height: 42px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: color-mix(in srgb, var(--w-base-bg-color) 85%, transparent);
  backdrop-filter: blur(4px);
  z-index: 190;
  border-bottom-color: color-mix(in srgb, var(--w-contrast-bg-color) 5%, transparent);

  .home-link {
    @include default-transition;
    &:hover {transform: scale(1.05);}
    &:focus {transform: scale(1.1);}

    span {font: 22px 'title font', helvetica, arial;}
  }

  .v3-is-out {
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 2px 8px;
    background: linear-gradient(110deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
    mix-blend-mode: difference;
    overflow: hidden;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: -120%;
      right: -150%;
      width: 50%;
      height: 300%;
      transform: rotate(30deg);
      background: linear-gradient(to right, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13), rgba(255, 246, 198, 0.8), rgba(255, 255, 255, 0));
    }
    &:hover:before {animation: shine 2s infinite;}
  }

  .version {
    color: color-mix(in srgb, var(--w-base-color) 35%, transparent);

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

@keyframes shine {
  to {right: 300%;}
}

@media screen and (max-width: 410px) {
  div.main-toolbar {
    .version {display: none;}
    .hamburger-menu {margin-left: 0;}
  }
}
</style>
