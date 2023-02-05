<template lang="pug">
main
  title-link.mt4(h1) Themes
  p Wave UI offers a light theme (by default) and a dark theme.

  title-link(h2) Setting an initial theme
  p You can set a theme at Wave UI's initialization, with:
  ssh-pre(language="js" :dark="$store.state.darkMode").
    app.use(WaveUI, {
      theme: 'dark' // Or 'light' or 'auto'.
    })

  title-link(h2) Accessing the current theme
  p.
    You can always read the currently applied theme from: #[code $waveui.theme].#[br]
    This means you can render or style elements conditionally based on the current theme.
  example
    w-flex.title1.align-center
      | The theme is: {{ $waveui.theme }}
      w-icon.ml2.mt1(color="yellow") mdi mdi-{{ $waveui.theme === 'dark' ? 'weather-night' : 'white-balance-sunny' }}

  title-link(h2) Switching theme
  p While running, you can still switch the theme very easily with: #[code $waveui.switchTheme('dark')].
  example
    w-button.ma1(@click="$waveui.switchTheme('light')")
      w-icon.mr1(color="yellow") mdi mdi-white-balance-sunny
      | Light theme
    w-button.ma1(@click="$waveui.switchTheme('dark')")
      w-icon.mr1(color="yellow") mdi mdi-weather-night
      | Dark theme
    template(#pug).
      w-button(@click="$waveui.switchTheme('light')") Switch theme

  title-link(h2) Auto theme
  p.
    Wave UI can detect the user preferred theme and apply it without you to need to do anything else
    than:
  ssh-pre(language="js" :dark="$store.state.darkMode").
    app.use(WaveUI, {
      theme: 'auto'
    })
  p.mt6.
    When the theme is automatic, you can access the current detected theme name in
    #[code $waveui.preferredTheme].
  example
    .title2 Preferred theme: #[strong {{ $waveui.preferredTheme }}].
    template(#pug).
      div Preferred theme: #[strong {{ '\{\{ $waveui.preferredTheme \}\}' }}].
  p.mt6.
    It is also possible to start with the automatic theme, and offer the user the option to switch
    theme like in this documentation.#[br]
    In this case, the #[code $waveui.preferredTheme] will always be set to the user favorite theme,
    But once the user changes the theme from a user action (like a button, a switch) the
    #[code $waveui.theme] value will be updated with the new user theme choice.
  example
    .title2
      code $waveui.preferredTheme
      | : {{ $waveui.preferredTheme }}.
    .title2
      code $waveui.theme
      | : {{ $waveui.theme }}.

  alert(tip) If you are using 2 themes, you should use CSS variables for all of your styling.
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
  methods: {
    switchTheme () {
      this.$store.state.darkMode = !this.$store.state.darkMode
      this.$waveui.switchTheme(this.$store.state.darkMode ? 'dark' : 'light')
    }
  }
}
</script>

<style lang="scss">

</style>
