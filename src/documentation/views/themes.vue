<template lang="pug">
main
  title-link.mt4(h1) Themes
  p Wave UI offers a light theme (by default) and a dark theme.

  title-link(h2) Setting an initial theme
  p You can set a theme at Wave UI init, with:
  ssh-pre(language="js" :dark="$store.state.darkMode").
    app.use(WaveUI, {
      theme: 'dark' // Or 'light' or 'auto'.
    })

  title-link(h2) Accessing the current theme
  p You can always read the current theme applied from: #[code $waveui.config.theme].
  example
    w-flex.title1.align-center
      | The theme is: {{ $waveui.config.theme }}
      w-icon.ml2(color="yellow") mdi mdi-{{ $waveui.config.theme === 'dark' ? 'weather-night' : 'white-balance-sunny' }}

  title-link(h2) Switching theme
  p While running, you can still change the theme very easily like in this example with: #[code $waveui.switchTheme('dark')].

  p.
  example
    w-button(@click="$store.state.darkMode = !$store.state.darkMode;$waveui.switchTheme($store.state.darkMode ? 'dark' : 'light')") Switch theme
    template(#pug).
      w-button(@click="$waveui.switchTheme('light')") Switch theme
//-
  - SCSS variables cannot be used for colors: need to use css3 vars
  - showcase the available css3 variables
  - you can write colors with $store.state.darkMode ? 'green-dark5--bg' : 'green-light5--bg', or create a color class that has a css3 var value.

  - recommended to do:
  :root {
    background-color: rgb(var(--w-base-bg-color-rgb));
    color: rgb(var(--w-base-color-rgb));
  }


  this.$waveui.switchTheme(darkMode ? 'dark' : 'light')

  you can watch preferredTheme and trigger an action, or use $waveui.preferredTheme directly everywhere.
  watch: {
    '$waveui.preferredTheme' (theme) {
      this.$store.commit('setDarkMode', theme === 'dark')
    }
  }

  mounted () {
    this.$store.commit('setDarkMode', this.$waveui.preferredTheme === 'dark')
    setTimeout(this.initScrollAnimation, 200)
  },

  Colors are defined this way:
  - User custom colors and shades
  - Color palette (immutable)
  - Status colors

  valid custom color names should be kebab-case. E.g. 'mint-green'

  ----------------

  Using the $waveui object
  <script setup>
  import { inject } from 'vue'
  const waveui = inject('$waveui')

  // import { useWaveUI } from '@/wave-ui/index'
  // const waveui = useWaveUI()
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
