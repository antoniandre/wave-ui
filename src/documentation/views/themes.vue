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
    w-button.ma1(@click="$waveui.switchTheme('light'), $store.commit('setDarkMode', false)")
      w-icon.mr1(color="yellow") mdi mdi-white-balance-sunny
      | Light theme
    w-button.ma1(@click="$waveui.switchTheme('dark'), $store.commit('setDarkMode', true)")
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
    .title2 Preferred theme: #[strong {{ $waveui.preferredTheme }}]
    template(#pug).
      div Preferred theme: #[strong {{ '\{\{ $waveui.preferredTheme \}\}' }}]
  p.mt6.
    It is also possible to start with the automatic theme, and offer the user the option to switch
    theme like in this documentation.#[br]
    In this case, the #[code $waveui.preferredTheme] will always be set to the user favorite theme,
    But once the user changes the theme from a user action (like a button, a switch) the
    #[code $waveui.theme] value will be updated with the new user theme choice.
  example
    .title2
      code $waveui.preferredTheme
      | : {{ $waveui.preferredTheme }}
    .title2
      code $waveui.theme
      | : {{ $waveui.theme }}

  alert(tip).
    If you are using 2 themes, you should use CSS3 variables for all of your styling and not SCSS
    variables.
  title-link(h3) Triggering an action on theme change
  p.
    triggering an action when the user changes the theme is easy because they will do it from one
    of the components in your app. But if you want to trigger an action when Wave UI detects a change
    of preferred theme, this is also easy!
  p.
    You can watch the value of #[code $waveui.preferredTheme], but since it's reactive you may also
    just use it in your template with #[code v-if].
  ssh-pre(language="js" :dark="$store.state.darkMode").
    watch: {
      '$waveui.preferredTheme' (theme) {
        // Trigger an action.
      }
    }

  title-link(h2 slug="adding-themes-in-your-wave-ui-app") Adding themes in your Wave UI app that never had themes
  p.
    If you never had 2 themes, you most likely have added colors in your CSS that will not look nice
    with the other theme. You're gonna have to locate the elements that look ugly and replace their
    colors with ones that look better.#[br]
    This checklist should guide you a little.
  ol
    li.mt6 Add #[code theme: 'auto'] to the Wave UI configuration.
    li.mt6.
      Switch your operating system preference to dark theme, or light if you were in dark.
      That should already change the background color from the Wave UI defaults.#[br]
      If it doesn't, you probably have an overriding style that applies a background with a higher CSS
      priority.
    li.mt6
      | Optionally, you can override these Wave UI defaults if you don't like them.#[br]
      | Note that you can apply a transparency on these CSS3 color variables thanks to the CSS3
      | color-mix function.
      | (e.g. #[code color-mix(in srgb, var(--w-base-bg-color) 30%, transparent)])! 😉#[br]
      ssh-pre(language="css" :dark="$store.state.darkMode").
        :root[data-theme=light] {
          --w-base-bg-color: #fff;
          --w-base-color: #000;
          --w-contrast-bg-color: #000;
          --w-contrast-color: #fff;
          --w-caption-color: #a0a0a0;
          --w-disabled-color: #ccc;
        }

        :root[data-theme=dark] {
          --w-base-bg-color: #222;
          --w-base-color: #fff;
          --w-contrast-bg-color: #fff;
          --w-contrast-color: #000;
          --w-caption-color: #6e6e6e;
          --w-disabled-color: #4a4a4a;
        }
    li.mt6
      | If you have defined colors in the Wave UI configuration, define their best equivalent for the other theme:
      .w-flex.align-center
        ssh-pre(language="js" label="before" :dark="$store.state.darkMode").
          colors: {
            primary: '#0e9d39' // A dark green.
          }
        w-icon.grey.ma2(xl) mdi mdi-arrow-right
        ssh-pre(language="js" label="after" :dark="$store.state.darkMode").
          colors: {
            light: {
              primary: '#0e9d39' // A dark green.
            },
            dark: {
              primary: '#82c295' // A lighter green.
            }
          }
    li.mt6
      | If you were using SCSS variables for colors, just use the CSS3 variables that Wave UI
      | generates so it will be updated when switching theme.
      .w-flex.align-center
        ssh-pre(language="css" label="before" :dark="$store.state.darkMode").
          $primary: #1b4;
          $secondary: #666;
        w-icon.grey.ma2(xl) mdi mdi-arrow-right
        ssh-pre(language="css" label="after" :dark="$store.state.darkMode").
          $primary: var(--w-primary-color);
          $secondary: var(--w-secondary-color);
    li.mt6
      | Locate the ugly elements using the dev tools and replace their color/background-color with
      | colors that work for both themes, or with one of the following Wave UI defaults:
      ul
        li color: #[code.text-bold var(--w-base-color)];
        li background-color: #[code.text-bold var(--w-base-bg-color)];
        li color: #[code.text-bold var(--w-contrast-color)];
        li background-color: #[code.text-bold var(--w-contrast-bg-color)];
      p.
        Read more about their signification in the
        #[a(href="/colors#colors-and-themes") Colors and themes section of the colors page].
    li.mt6
      | You may want to add a button to let the user switch theme:
      ssh-pre(
        v-show="$store.state.usePug"
        language="pug"
        :dark="$store.state.darkMode").
        w-button(
          fixed
          top
          right
          :icon="`material-icons ${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}`"
          @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')")
      ssh-pre(
        v-show="!$store.state.usePug"
        language="html-vue"
        :dark="$store.state.darkMode").
        &lt;w-button
          fixed
          top
          right
          :icon="`material-icons ${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}`"
          @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')"&gt;
        &lt;/w-button&gt;
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
