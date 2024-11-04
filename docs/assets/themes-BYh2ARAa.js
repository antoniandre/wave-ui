import{r as i,o as k,g as v,a as r,w as l,b as t,d as o,t as d,h as y,l as g,v as w,_ as $}from"./index-DM46aIYM.js";const T={class:"title2"},I={class:"title2"},S={class:"title2"},M={class:"mt6"},W={class:"mt6"},U={class:"w-flex align-center"},c={class:"mt6"},C={class:"w-flex align-center"},j={class:"mt6"};function A(a,e,D,N,Y,P){const s=i("title-link"),n=i("ssh-pre"),u=i("w-icon"),f=i("w-flex"),m=i("example"),h=i("w-button"),b=i("alert");return k(),v("main",null,[r(s,{class:"mt4",h1:""},{default:l(()=>e[2]||(e[2]=[t("Themes")])),_:1}),e[43]||(e[43]=o("p",null,"Wave UI offers a light theme (by default) and a dark theme.",-1)),r(s,{h2:""},{default:l(()=>e[3]||(e[3]=[t("Setting an initial theme")])),_:1}),e[44]||(e[44]=o("p",null,"You can set a theme at Wave UI's initialization, with:",-1)),r(n,{language:"js",dark:a.$store.state.darkMode},{default:l(()=>e[4]||(e[4]=[t(`app.use(WaveUI, {
  theme: 'dark' // Or 'light' or 'auto'.
})
`)])),_:1},8,["dark"]),r(s,{h2:""},{default:l(()=>e[5]||(e[5]=[t("Accessing the current theme")])),_:1}),e[45]||(e[45]=o("p",null,[t("You can always read the currently applied theme from: "),o("code",null,"$waveui.theme"),t("."),o("br"),t(`
This means you can render or style elements conditionally based on the current theme.`)],-1)),r(m,null,{default:l(()=>[r(f,{class:"title1 align-center"},{default:l(()=>[t("The theme is: "+d(a.$waveui.theme),1),r(u,{class:"ml2 mt1",color:"yellow"},{default:l(()=>[t("mdi mdi-"+d(a.$waveui.theme==="dark"?"weather-night":"white-balance-sunny"),1)]),_:1})]),_:1})]),_:1}),r(s,{h2:""},{default:l(()=>e[6]||(e[6]=[t("Switching theme")])),_:1}),e[46]||(e[46]=o("p",null,[t("While running, you can still switch the theme very easily with: "),o("code",null,"$waveui.switchTheme('dark')"),t(".")],-1)),r(m,null,{pug:l(()=>e[11]||(e[11]=[t(`w-button(@click="$waveui.switchTheme('light')") Switch theme
`)])),default:l(()=>[r(h,{class:"ma1",onClick:e[0]||(e[0]=p=>(a.$waveui.switchTheme("light"),a.$store.commit("setDarkMode",!1)))},{default:l(()=>[r(u,{class:"mr1",color:"yellow"},{default:l(()=>e[7]||(e[7]=[t("mdi mdi-white-balance-sunny")])),_:1}),e[8]||(e[8]=t("Light theme"))]),_:1}),r(h,{class:"ma1",onClick:e[1]||(e[1]=p=>(a.$waveui.switchTheme("dark"),a.$store.commit("setDarkMode",!0)))},{default:l(()=>[r(u,{class:"mr1",color:"yellow"},{default:l(()=>e[9]||(e[9]=[t("mdi mdi-weather-night")])),_:1}),e[10]||(e[10]=t("Dark theme"))]),_:1})]),_:1}),r(s,{h2:""},{default:l(()=>e[12]||(e[12]=[t("Auto theme")])),_:1}),e[47]||(e[47]=o("p",null,`Wave UI can detect the user preferred theme and apply it without you to need to do anything else
than:`,-1)),r(n,{language:"js",dark:a.$store.state.darkMode},{default:l(()=>e[13]||(e[13]=[t(`app.use(WaveUI, {
  theme: 'auto'
})`)])),_:1},8,["dark"]),e[48]||(e[48]=o("p",{class:"mt6"},[t(`When the theme is automatic, you can access the current detected theme name in
`),o("code",null,"$waveui.preferredTheme"),t(".")],-1)),r(m,null,{pug:l(()=>e[15]||(e[15]=[t("div Preferred theme: "),o("strong",null,d("{{ $waveui.preferredTheme }}"),-1)])),default:l(()=>[o("div",T,[e[14]||(e[14]=t("Preferred theme: ")),o("strong",null,d(a.$waveui.preferredTheme),1)])]),_:1}),e[49]||(e[49]=o("p",{class:"mt6"},[t(`It is also possible to start with the automatic theme, and offer the user the option to switch
theme like in this documentation.`),o("br"),t(`
In this case, the `),o("code",null,"$waveui.preferredTheme"),t(` will always be set to the user favorite theme,
But once the user changes the theme from a user action (like a button, a switch) the
`),o("code",null,"$waveui.theme"),t(" value will be updated with the new user theme choice.")],-1)),r(m,null,{default:l(()=>[o("div",I,[e[16]||(e[16]=o("code",null,"$waveui.preferredTheme",-1)),t(": "+d(a.$waveui.preferredTheme),1)]),o("div",S,[e[17]||(e[17]=o("code",null,"$waveui.theme",-1)),t(": "+d(a.$waveui.theme),1)])]),_:1}),r(b,{tip:""},{default:l(()=>e[18]||(e[18]=[t(`If you are using 2 themes, you should use CSS3 variables for all of your styling and not SCSS
variables.`)])),_:1}),r(s,{h3:""},{default:l(()=>e[19]||(e[19]=[t("Triggering an action on theme change")])),_:1}),e[50]||(e[50]=o("p",null,`triggering an action when the user changes the theme is easy because they will do it from one
of the components in your app. But if you want to trigger an action when Wave UI detects a change
of preferred theme, this is also easy!`,-1)),e[51]||(e[51]=o("p",null,[t("You can watch the value of "),o("code",null,"$waveui.preferredTheme"),t(`, but since it's reactive you may also
just use it in your template with `),o("code",null,"v-if"),t(".")],-1)),r(n,{language:"js",dark:a.$store.state.darkMode},{default:l(()=>e[20]||(e[20]=[t(`watch: {
  '$waveui.preferredTheme' (theme) {
    // Trigger an action.
  }
}
`)])),_:1},8,["dark"]),r(s,{h2:"",slug:"adding-themes-in-your-wave-ui-app"},{default:l(()=>e[21]||(e[21]=[t("Adding themes in your Wave UI app that never had themes")])),_:1}),e[52]||(e[52]=o("p",null,[t(`If you never had 2 styles, you most likely have added colors in your CSS that will not look nice
with the other theme. You're gonna have to locate the elements that look ugly and replace their
colors with ones that look better.`),o("br"),t(`
This list should guide you a little.`)],-1)),o("ol",null,[e[40]||(e[40]=o("li",{class:"mt6"},[t("Add "),o("code",null,"theme: 'auto'"),t(" to the Wave UI configuration.")],-1)),e[41]||(e[41]=o("li",{class:"mt6"},[t(`Switch your operating system preference to dark theme, or light if you were in dark.
That should already change the background color from the Wave UI defaults.`),o("br"),t(`
If it doesn't, you probably have a style that applies a background with a higher priority.`)],-1)),o("li",M,[e[23]||(e[23]=t("Optionally, you can override these Wave UI defaults if you don't like them.")),e[24]||(e[24]=o("br",null,null,-1)),e[25]||(e[25]=t(`
Note that each of these variables is not containing a color but only its RGB channels.
This allows us to apply an alpha channel on that color if we need
(e.g. `)),e[26]||(e[26]=o("code",null,"rgba(var(--w-base-bg-color-rgb), 0.3)",-1)),e[27]||(e[27]=t(")! 😉")),e[28]||(e[28]=o("br",null,null,-1)),r(n,{language:"css",dark:a.$store.state.darkMode},{default:l(()=>e[22]||(e[22]=[t(`:root[data-theme=light] {
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
}`)])),_:1},8,["dark"])]),o("li",W,[e[32]||(e[32]=t("If you have defined colors in the Wave UI configuration, define their best equivalent for the other theme:")),o("div",U,[r(n,{language:"js",label:"before",dark:a.$store.state.darkMode},{default:l(()=>e[29]||(e[29]=[t(`colors: {
  primary: '#0e9d39' // A dark green.
}`)])),_:1},8,["dark"]),r(u,{class:"grey ma2",xl:""},{default:l(()=>e[30]||(e[30]=[t("mdi mdi-arrow-right")])),_:1}),r(n,{language:"js",label:"after",dark:a.$store.state.darkMode},{default:l(()=>e[31]||(e[31]=[t(`colors: {
  light: {
    primary: '#0e9d39' // A dark green.
  },
  dark: {
    primary: '#82c295' // A lighter green.
  }
}`)])),_:1},8,["dark"])])]),o("li",c,[e[36]||(e[36]=t(`If you were using SCSS variables for colors, just use the CSS3 variables that Wave UI
generates so it will be updated when switching theme.`)),o("div",C,[r(n,{language:"css",label:"before",dark:a.$store.state.darkMode},{default:l(()=>e[33]||(e[33]=[t(`$primary: #1b4;
$secondary: #666;`)])),_:1},8,["dark"]),r(u,{class:"grey ma2",xl:""},{default:l(()=>e[34]||(e[34]=[t("mdi mdi-arrow-right")])),_:1}),r(n,{language:"css",label:"after",dark:a.$store.state.darkMode},{default:l(()=>e[35]||(e[35]=[t(`$primary: var(--w-primary-color);
$secondary: var(--w-secondary-color);`)])),_:1},8,["dark"])])]),e[42]||(e[42]=y(`<li class="mt6">Locate the ugly elements using the dev tools and replace their color/background-color with
colors that work for both themes, or with one of the following Wave UI defaults:<ul><li>color: <code class="text-bold">rgb(var(--w-base-color-rgb))</code>;</li><li>background-color: <code class="text-bold">rgb(var(--w-base-bg-color-rgb))</code>;</li><li>color: <code class="text-bold">rgb(var(--w-contrast-color-rgb))</code>;</li><li>background-color: <code class="text-bold">rgb(var(--w-contrast-bg-color-rgb))</code>;</li></ul><p>Read more about their signification in the
<a href="/colors#colors-and-themes">Colors and themes section of the colors page</a>.</p></li>`,1)),o("li",j,[e[39]||(e[39]=t("You may want to add a button to let the user switch theme:")),g(r(n,{language:"pug",dark:a.$store.state.darkMode},{default:l(()=>e[37]||(e[37]=[t(`w-button(
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')")`)])),_:1},8,["dark"]),[[w,a.$store.state.usePug]]),g(r(n,{language:"html-vue",dark:a.$store.state.darkMode},{default:l(()=>e[38]||(e[38]=[t(`<w-button
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')">
</w-button>`)])),_:1},8,["dark"]),[[w,!a.$store.state.usePug]])])])])}const B={methods:{switchTheme(){this.$store.state.darkMode=!this.$store.state.darkMode,this.$waveui.switchTheme(this.$store.state.darkMode?"dark":"light")}}},L=$(B,[["render",A]]);export{L as default};
