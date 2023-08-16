import{n as o}from"./index.e31dd236.js";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",[t("title-link",{staticClass:"mt4",attrs:{h1:""}},[e._v("Themes")]),t("p",[e._v("Wave UI offers a light theme (by default) and a dark theme.")]),t("title-link",{attrs:{h2:""}},[e._v("Setting an initial theme")]),t("p",[e._v("You can set a theme at Wave UI's initialization, with:")]),t("ssh-pre",{attrs:{language:"js",dark:e.$store.state.darkMode}},[e._v(`app.use(WaveUI, {
  theme: 'dark' // Or 'light' or 'auto'.
})
`)]),t("title-link",{attrs:{h2:""}},[e._v("Accessing the current theme")]),e._m(0),t("example",[t("w-flex",{staticClass:"title1 align-center"},[e._v("The theme is: "+e._s(e.$waveui.theme)),t("w-icon",{staticClass:"ml2 mt1",attrs:{color:"yellow"}},[e._v("mdi mdi-"+e._s(e.$waveui.theme==="dark"?"weather-night":"white-balance-sunny"))])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Switching theme")]),e._m(1),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button(@click="$waveui.switchTheme('light')") Switch theme
`)]},proxy:!0}])},[t("w-button",{staticClass:"ma1",on:{click:function(s){e.$waveui.switchTheme("light"),e.$store.commit("setDarkMode",!1)}}},[t("w-icon",{staticClass:"mr1",attrs:{color:"yellow"}},[e._v("mdi mdi-white-balance-sunny")]),e._v("Light theme")],1),t("w-button",{staticClass:"ma1",on:{click:function(s){e.$waveui.switchTheme("dark"),e.$store.commit("setDarkMode",!0)}}},[t("w-icon",{staticClass:"mr1",attrs:{color:"yellow"}},[e._v("mdi mdi-weather-night")]),e._v("Dark theme")],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Auto theme")]),t("p",[e._v(`Wave UI can detect the user preferred theme and apply it without you to need to do anything else
than:`)]),t("ssh-pre",{attrs:{language:"js",dark:e.$store.state.darkMode}},[e._v(`app.use(WaveUI, {
  theme: 'auto'
})`)]),e._m(2),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v("div Preferred theme: "),t("strong",[e._v(e._s("{{ $waveui.preferredTheme }}"))])]},proxy:!0}])},[t("div",{staticClass:"title2"},[e._v("Preferred theme: "),t("strong",[e._v(e._s(e.$waveui.preferredTheme))])])]),e._m(3),t("example",[t("div",{staticClass:"title2"},[t("code",[e._v("$waveui.preferredTheme")]),e._v(": "+e._s(e.$waveui.preferredTheme))]),t("div",{staticClass:"title2"},[t("code",[e._v("$waveui.theme")]),e._v(": "+e._s(e.$waveui.theme))])]),t("alert",{attrs:{tip:""}},[e._v(`If you are using 2 themes, you should use CSS3 variables for all of your styling and not SCSS
variables.`)]),t("title-link",{attrs:{h3:""}},[e._v("Triggering an action on theme change")]),t("p",[e._v(`triggering an action when the user changes the theme is easy because they will do it from one
of the components in your app. But if you want to trigger an action when Wave UI detects a change
of preferred theme, this is also easy!`)]),e._m(4),t("ssh-pre",{attrs:{language:"js",dark:e.$store.state.darkMode}},[e._v(`watch: {
  '$waveui.preferredTheme' (theme) {
    // Trigger an action.
  }
}
`)]),t("title-link",{attrs:{h2:"",slug:"adding-themes-in-your-wave-ui-app"}},[e._v("Adding themes in your Wave UI app that never had themes")]),e._m(5),t("ol",[e._m(6),e._m(7),t("li",{staticClass:"mt6"},[e._v("Optionally, you can override these Wave UI defaults if you don't like them."),t("br"),e._v(`
Note that each of these variables is not containing a color but only its RGB channels.
This allows us to apply an alpha channel on that color if we need
(e.g. `),t("code",[e._v("rgba(var(--w-base-bg-color-rgb), 0.3)")]),e._v(")! \u{1F609}"),t("br"),t("ssh-pre",{attrs:{language:"css",dark:e.$store.state.darkMode}},[e._v(`:root[data-theme=light] {
  --w-base-bg-color-rgb: 255, 255, 255; /* white */
  --w-base-color-rgb: 0, 0, 0; /* black */
  --w-contrast-bg-color-rgb: 0, 0, 0; /* black */
  --w-contrast-color-rgb: 255, 255, 255; /* white */
  --w-disabled-color-rgb: 204, 204, 204; /* #ccc */
}

:root[data-theme=dark] {
  --w-base-bg-color-rgb: 34, 34, 34; /* #222 */
  --w-base-color-rgb: 255, 255, 255; /* white */
  --w-contrast-bg-color-rgb: 255, 255, 255; /* white */
  --w-contrast-color-rgb: 0, 0, 0; /* black */
  --w-disabled-color-rgb: 74, 74, 74; /* #4a4a4a */
}`)])],1),t("li",{staticClass:"mt6"},[e._v("If you have defined colors in the Wave UI configuration, define their best equivalent for the other theme:"),t("div",{staticClass:"w-flex align-center"},[t("ssh-pre",{attrs:{language:"js",label:"before",dark:e.$store.state.darkMode}},[e._v(`colors: {
  primary: '#0e9d39' // A dark green.
}`)]),t("w-icon",{staticClass:"grey ma2",attrs:{xl:""}},[e._v("mdi mdi-arrow-right")]),t("ssh-pre",{attrs:{language:"js",label:"after",dark:e.$store.state.darkMode}},[e._v(`colors: {
  light: {
    primary: '#0e9d39' // A dark green.
  },
  dark: {
    primary: '#82c295' // A lighter green.
  }
}`)])],1)]),t("li",{staticClass:"mt6"},[e._v(`If you were using SCSS variables for colors, just use the CSS3 variables that Wave UI
generates so it will be updated when switching theme.`),t("div",{staticClass:"w-flex align-center"},[t("ssh-pre",{attrs:{language:"css",label:"before",dark:e.$store.state.darkMode}},[e._v(`$primary: #1b4;
$secondary: #666;`)]),t("w-icon",{staticClass:"grey ma2",attrs:{xl:""}},[e._v("mdi mdi-arrow-right")]),t("ssh-pre",{attrs:{language:"css",label:"after",dark:e.$store.state.darkMode}},[e._v(`$primary: var(--w-primary-color);
$secondary: var(--w-secondary-color);`)])],1)]),e._m(8),t("li",{staticClass:"mt6"},[e._v("You may want to add a button to let the user switch theme:"),t("ssh-pre",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.usePug,expression:"$store.state.usePug"}],attrs:{language:"pug",dark:e.$store.state.darkMode}},[e._v(`w-button(
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')")`)]),t("ssh-pre",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.usePug,expression:"!$store.state.usePug"}],attrs:{language:"vue-html",dark:e.$store.state.darkMode}},[e._v(`<w-button
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')">
</w-button>`)])],1)])],1)},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You can always read the currently applied theme from: "),t("code",[e._v("$waveui.theme")]),e._v("."),t("br"),e._v(`
This means you can render or style elements conditionally based on the current theme.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("While running, you can still switch the theme very easily with: "),t("code",[e._v("$waveui.switchTheme('dark')")]),e._v(".")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"mt6"},[e._v(`When the theme is automatic, you can access the current detected theme name in
`),t("code",[e._v("$waveui.preferredTheme")]),e._v(".")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"mt6"},[e._v(`It is also possible to start with the automatic theme, and offer the user the option to switch
theme like in this documentation.`),t("br"),e._v(`
In this case, the `),t("code",[e._v("$waveui.preferredTheme")]),e._v(` will always be set to the user favorite theme,
But once the user changes the theme from a user action (like a button, a switch) the
`),t("code",[e._v("$waveui.theme")]),e._v(" value will be updated with the new user theme choice.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You can watch the value of "),t("code",[e._v("$waveui.preferredTheme")]),e._v(`, but since it's reactive you may also
just use it in your template with `),t("code",[e._v("v-if")]),e._v(".")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`If you never had 2 styles, you most likely have added colors in your CSS that will not look nice
with the other theme. You're gonna have to locate the elements that look ugly and replace their
colors with ones that look better.`),t("br"),e._v(`
This list should guide you a little.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("li",{staticClass:"mt6"},[e._v("Add "),t("code",[e._v("theme: 'auto'")]),e._v(" to the Wave UI configuration.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("li",{staticClass:"mt6"},[e._v(`Switch your operating system preference to dark theme, or light if you were in dark.
That should already change the background color from the Wave UI defaults.`),t("br"),e._v(`
If it doesn't, you probably have a style that applies a background with a higher priority.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("li",{staticClass:"mt6"},[e._v(`Locate the ugly elements using the dev tools and replace their color/background-color with
colors that work for both themes, or with one of the following Wave UI defaults:`),t("ul",[t("li",[e._v("color: "),t("code",{staticClass:"text-bold"},[e._v("rgb(var(--w-base-color-rgb))")]),e._v(";")]),t("li",[e._v("background-color: "),t("code",{staticClass:"text-bold"},[e._v("rgb(var(--w-base-bg-color-rgb))")]),e._v(";")]),t("li",[e._v("color: "),t("code",{staticClass:"text-bold"},[e._v("rgb(var(--w-contrast-color-rgb))")]),e._v(";")]),t("li",[e._v("background-color: "),t("code",{staticClass:"text-bold"},[e._v("rgb(var(--w-contrast-bg-color-rgb))")]),e._v(";")])]),t("p",[e._v(`Read more about their signification in the
`),t("a",{attrs:{href:"/colors#colors-and-themes"}},[e._v("Colors and themes section of the colors page")]),e._v(".")])])}];const l={methods:{switchTheme(){this.$store.state.darkMode=!this.$store.state.darkMode,this.$waveui.switchTheme(this.$store.state.darkMode?"dark":"light")}}},r={};var h=o(l,i,n,!1,c,null,null,null);function c(e){for(let a in r)this[a]=r[a]}var u=function(){return h.exports}();export{u as default};
