import{r,o as _,g as p,a as o,w as a,b as e,t as i,d as t,l as m,v as g,h as k,_ as v}from"./index.bf2cfd71.js";const y=t("p",null,"Wave UI offers a light theme (by default) and a dark theme.",-1),$=t("p",null,"You can set a theme at Wave UI's initialization, with:",-1),T=t("p",null,[e("You can always read the currently applied theme from: "),t("code",null,"$waveui.theme"),e("."),t("br"),e(`
This means you can render or style elements conditionally based on the current theme.`)],-1),I=t("p",null,[e("While running, you can still switch the theme very easily with: "),t("code",null,"$waveui.switchTheme('dark')"),e(".")],-1),S=t("p",null,`Wave UI can detect the user preferred theme and apply it without you to need to do anything else
than:`,-1),M=t("p",{class:"mt6"},[e(`When the theme is automatic, you can access the current detected theme name in
`),t("code",null,"$waveui.preferredTheme"),e(".")],-1),W={class:"title2"},U=t("p",{class:"mt6"},[e(`It is also possible to start with the automatic theme, and offer the user the option to switch
theme like in this documentation.`),t("br"),e(`
In this case, the `),t("code",null,"$waveui.preferredTheme"),e(` will always be set to the user favorite theme,
But once the user changes the theme from a user action (like a button, a switch) the
`),t("code",null,"$waveui.theme"),e(" value will be updated with the new user theme choice.")],-1),C={class:"title2"},j=t("code",null,"$waveui.preferredTheme",-1),A={class:"title2"},B=t("code",null,"$waveui.theme",-1),D=t("p",null,`triggering an action when the user changes the theme is easy because they will do it from one
of the components in your app. But if you want to trigger an action when Wave UI detects a change
of preferred theme, this is also easy!`,-1),N=t("p",null,[e("You can watch the value of "),t("code",null,"$waveui.preferredTheme"),e(`, but since it's reactive you may also
just use it in your template with `),t("code",null,"v-if"),e(".")],-1),Y=t("p",null,[e(`If you never had 2 styles, you most likely have added colors in your CSS that will not look nice
with the other theme. You're gonna have to locate the elements that look ugly and replace their
colors with ones that look better.`),t("br"),e(`
This list should guide you a little.`)],-1),P=t("li",{class:"mt6"},[e("Add "),t("code",null,"theme: 'auto'"),e(" to the Wave UI configuration.")],-1),V=t("li",{class:"mt6"},[e(`Switch your operating system preference to dark theme, or light if you were in dark.
That should already change the background color from the Wave UI defaults.`),t("br"),e(`
If it doesn't, you probably have a style that applies a background with a higher priority.`)],-1),L={class:"mt6"},O=t("br",null,null,-1),R=t("code",null,"rgba(var(--w-base-bg-color-rgb), 0.3)",-1),q=t("br",null,null,-1),z={class:"mt6"},E={class:"w-flex align-center"},G={class:"mt6"},F={class:"w-flex align-center"},H=k(`<li class="mt6">Locate the ugly elements using the dev tools and replace their color/background-color with
colors that work for both themes, or with one of the following Wave UI defaults:<ul><li>color: <code class="text-bold">rgb(var(--w-base-color-rgb))</code>;</li><li>background-color: <code class="text-bold">rgb(var(--w-base-bg-color-rgb))</code>;</li><li>color: <code class="text-bold">rgb(var(--w-contrast-color-rgb))</code>;</li><li>background-color: <code class="text-bold">rgb(var(--w-contrast-bg-color-rgb))</code>;</li></ul><p>Read more about their signification in the
<a href="/colors#colors-and-themes">Colors and themes section of the colors page</a>.</p></li>`,1),J={class:"mt6"};function K(n,d,X,Z,x,ee){const l=r("title-link"),s=r("ssh-pre"),h=r("w-icon"),w=r("w-flex"),c=r("example"),u=r("w-button"),f=r("alert");return _(),p("main",null,[o(l,{class:"mt4",h1:""},{default:a(()=>[e("Themes")]),_:1}),y,o(l,{h2:""},{default:a(()=>[e("Setting an initial theme")]),_:1}),$,o(s,{language:"js",dark:n.$store.state.darkMode},{default:a(()=>[e(`app.use(WaveUI, {
  theme: 'dark' // Or 'light' or 'auto'.
})
`)]),_:1},8,["dark"]),o(l,{h2:""},{default:a(()=>[e("Accessing the current theme")]),_:1}),T,o(c,null,{default:a(()=>[o(w,{class:"title1 align-center"},{default:a(()=>[e("The theme is: "+i(n.$waveui.theme),1),o(h,{class:"ml2 mt1",color:"yellow"},{default:a(()=>[e("mdi mdi-"+i(n.$waveui.theme==="dark"?"weather-night":"white-balance-sunny"),1)]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:a(()=>[e("Switching theme")]),_:1}),I,o(c,null,{pug:a(()=>[e(`w-button(@click="$waveui.switchTheme('light')") Switch theme
`)]),default:a(()=>[o(u,{class:"ma1",onClick:d[0]||(d[0]=b=>(n.$waveui.switchTheme("light"),n.$store.commit("setDarkMode",!1)))},{default:a(()=>[o(h,{class:"mr1",color:"yellow"},{default:a(()=>[e("mdi mdi-white-balance-sunny")]),_:1}),e("Light theme")]),_:1}),o(u,{class:"ma1",onClick:d[1]||(d[1]=b=>(n.$waveui.switchTheme("dark"),n.$store.commit("setDarkMode",!0)))},{default:a(()=>[o(h,{class:"mr1",color:"yellow"},{default:a(()=>[e("mdi mdi-weather-night")]),_:1}),e("Dark theme")]),_:1})]),_:1}),o(l,{h2:""},{default:a(()=>[e("Auto theme")]),_:1}),S,o(s,{language:"js",dark:n.$store.state.darkMode},{default:a(()=>[e(`app.use(WaveUI, {
  theme: 'auto'
})`)]),_:1},8,["dark"]),M,o(c,null,{pug:a(()=>[e("div Preferred theme: "),t("strong",null,i("{{ $waveui.preferredTheme }}"),1)]),default:a(()=>[t("div",W,[e("Preferred theme: "),t("strong",null,i(n.$waveui.preferredTheme),1)])]),_:1}),U,o(c,null,{default:a(()=>[t("div",C,[j,e(": "+i(n.$waveui.preferredTheme),1)]),t("div",A,[B,e(": "+i(n.$waveui.theme),1)])]),_:1}),o(f,{tip:""},{default:a(()=>[e(`If you are using 2 themes, you should use CSS3 variables for all of your styling and not SCSS
variables.`)]),_:1}),o(l,{h3:""},{default:a(()=>[e("Triggering an action on theme change")]),_:1}),D,N,o(s,{language:"js",dark:n.$store.state.darkMode},{default:a(()=>[e(`watch: {
  '$waveui.preferredTheme' (theme) {
    // Trigger an action.
  }
}
`)]),_:1},8,["dark"]),o(l,{h2:"",slug:"adding-themes-in-your-wave-ui-app"},{default:a(()=>[e("Adding themes in your Wave UI app that never had themes")]),_:1}),Y,t("ol",null,[P,V,t("li",L,[e("Optionally, you can override these Wave UI defaults if you don't like them."),O,e(`
Note that each of these variables is not containing a color but only its RGB channels.
This allows us to apply an alpha channel on that color if we need
(e.g. `),R,e(")! \u{1F609}"),q,o(s,{language:"css",dark:n.$store.state.darkMode},{default:a(()=>[e(`:root[data-theme=light] {
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
}`)]),_:1},8,["dark"])]),t("li",z,[e("If you have defined colors in the Wave UI configuration, define their best equivalent for the other theme:"),t("div",E,[o(s,{language:"js",label:"before",dark:n.$store.state.darkMode},{default:a(()=>[e(`colors: {
  primary: '#0e9d39' // A dark green.
}`)]),_:1},8,["dark"]),o(h,{class:"grey ma2",xl:""},{default:a(()=>[e("mdi mdi-arrow-right")]),_:1}),o(s,{language:"js",label:"after",dark:n.$store.state.darkMode},{default:a(()=>[e(`colors: {
  light: {
    primary: '#0e9d39' // A dark green.
  },
  dark: {
    primary: '#82c295' // A lighter green.
  }
}`)]),_:1},8,["dark"])])]),t("li",G,[e(`If you were using SCSS variables for colors, just use the CSS3 variables that Wave UI
generates so it will be updated when switching theme.`),t("div",F,[o(s,{language:"css",label:"before",dark:n.$store.state.darkMode},{default:a(()=>[e(`$primary: #1b4;
$secondary: #666;`)]),_:1},8,["dark"]),o(h,{class:"grey ma2",xl:""},{default:a(()=>[e("mdi mdi-arrow-right")]),_:1}),o(s,{language:"css",label:"after",dark:n.$store.state.darkMode},{default:a(()=>[e(`$primary: var(--w-primary-color);
$secondary: var(--w-secondary-color);`)]),_:1},8,["dark"])])]),H,t("li",J,[e("You may want to add a button to let the user switch theme:"),m(o(s,{language:"pug",dark:n.$store.state.darkMode},{default:a(()=>[e(`w-button(
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')")`)]),_:1},8,["dark"]),[[g,n.$store.state.usePug]]),m(o(s,{language:"vue-html",dark:n.$store.state.darkMode},{default:a(()=>[e(`<w-button
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')">
</w-button>`)]),_:1},8,["dark"]),[[g,!n.$store.state.usePug]])])])])}const Q={methods:{switchTheme(){this.$store.state.darkMode=!this.$store.state.darkMode,this.$waveui.switchTheme(this.$store.state.darkMode?"dark":"light")}}},ae=v(Q,[["render",K]]);export{ae as default};
