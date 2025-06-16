import{r as i,g as k,o as b,a as l,b as o,w as a,e as t,t as d,h as y,p as w,v as g,_ as $}from"./index-zBoFSzBL.js";const S={class:"title2"},T={class:"title2"},I={class:"title2"},M={class:"mt6"},W={class:"mt6"},c={class:"w-flex align-center"},C={class:"mt6"},U={class:"w-flex align-center"},j={class:"mt6"};function A(n,e,D,N,Y,P){const s=i("title-link"),r=i("ssh-pre"),u=i("w-icon"),f=i("w-flex"),m=i("example"),h=i("w-button"),p=i("alert");return b(),k("main",null,[l(s,{class:"mt4",h1:""},{default:a(()=>e[2]||(e[2]=[t("Themes")])),_:1,__:[2]}),e[43]||(e[43]=o("p",null,"Wave UI offers a light theme (by default) and a dark theme.",-1)),l(s,{h2:""},{default:a(()=>e[3]||(e[3]=[t("Setting an initial theme")])),_:1,__:[3]}),e[44]||(e[44]=o("p",null,"You can set a theme at Wave UI's initialization, with:",-1)),l(r,{language:"js",dark:n.$store.state.darkMode},{default:a(()=>e[4]||(e[4]=[t(`app.use(WaveUI, {
  theme: 'dark' // Or 'light' or 'auto'.
})
`)])),_:1,__:[4]},8,["dark"]),l(s,{h2:""},{default:a(()=>e[5]||(e[5]=[t("Accessing the current theme")])),_:1,__:[5]}),e[45]||(e[45]=o("p",null,[t("You can always read the currently applied theme from: "),o("code",null,"$waveui.theme"),t("."),o("br"),t(`
This means you can render or style elements conditionally based on the current theme.`)],-1)),l(m,null,{default:a(()=>[l(f,{class:"title1 align-center"},{default:a(()=>[t("The theme is: "+d(n.$waveui.theme),1),l(u,{class:"ml2 mt1",color:"yellow"},{default:a(()=>[t("mdi mdi-"+d(n.$waveui.theme==="dark"?"weather-night":"white-balance-sunny"),1)]),_:1})]),_:1})]),_:1}),l(s,{h2:""},{default:a(()=>e[6]||(e[6]=[t("Switching theme")])),_:1,__:[6]}),e[46]||(e[46]=o("p",null,[t("While running, you can still switch the theme very easily with: "),o("code",null,"$waveui.switchTheme('dark')"),t(".")],-1)),l(m,null,{pug:a(()=>e[11]||(e[11]=[t(`w-button(@click="$waveui.switchTheme('light')") Switch theme
`)])),default:a(()=>[l(h,{class:"ma1",onClick:e[0]||(e[0]=v=>(n.$waveui.switchTheme("light"),n.$store.commit("setDarkMode",!1)))},{default:a(()=>[l(u,{class:"mr1",color:"yellow"},{default:a(()=>e[7]||(e[7]=[t("mdi mdi-white-balance-sunny")])),_:1,__:[7]}),e[8]||(e[8]=t("Light theme"))]),_:1,__:[8]}),l(h,{class:"ma1",onClick:e[1]||(e[1]=v=>(n.$waveui.switchTheme("dark"),n.$store.commit("setDarkMode",!0)))},{default:a(()=>[l(u,{class:"mr1",color:"yellow"},{default:a(()=>e[9]||(e[9]=[t("mdi mdi-weather-night")])),_:1,__:[9]}),e[10]||(e[10]=t("Dark theme"))]),_:1,__:[10]})]),_:1}),l(s,{h2:""},{default:a(()=>e[12]||(e[12]=[t("Auto theme")])),_:1,__:[12]}),e[47]||(e[47]=o("p",null,`Wave UI can detect the user preferred theme and apply it without you to need to do anything else
than:`,-1)),l(r,{language:"js",dark:n.$store.state.darkMode},{default:a(()=>e[13]||(e[13]=[t(`app.use(WaveUI, {
  theme: 'auto'
})`)])),_:1,__:[13]},8,["dark"]),e[48]||(e[48]=o("p",{class:"mt6"},[t(`When the theme is automatic, you can access the current detected theme name in
`),o("code",null,"$waveui.preferredTheme"),t(".")],-1)),l(m,null,{pug:a(()=>e[15]||(e[15]=[t("div Preferred theme: "),o("strong",null,d("{{ $waveui.preferredTheme }}"),-1)])),default:a(()=>[o("div",S,[e[14]||(e[14]=t("Preferred theme: ")),o("strong",null,d(n.$waveui.preferredTheme),1)])]),_:1}),e[49]||(e[49]=o("p",{class:"mt6"},[t(`It is also possible to start with the automatic theme, and offer the user the option to switch
theme like in this documentation.`),o("br"),t(`
In this case, the `),o("code",null,"$waveui.preferredTheme"),t(` will always be set to the user favorite theme,
But once the user changes the theme from a user action (like a button, a switch) the
`),o("code",null,"$waveui.theme"),t(" value will be updated with the new user theme choice.")],-1)),l(m,null,{default:a(()=>[o("div",T,[e[16]||(e[16]=o("code",null,"$waveui.preferredTheme",-1)),t(": "+d(n.$waveui.preferredTheme),1)]),o("div",I,[e[17]||(e[17]=o("code",null,"$waveui.theme",-1)),t(": "+d(n.$waveui.theme),1)])]),_:1}),l(p,{tip:""},{default:a(()=>e[18]||(e[18]=[t(`If you are using 2 themes, you should use CSS3 variables for all of your styling and not SCSS
variables.`)])),_:1,__:[18]}),l(s,{h3:""},{default:a(()=>e[19]||(e[19]=[t("Triggering an action on theme change")])),_:1,__:[19]}),e[50]||(e[50]=o("p",null,`triggering an action when the user changes the theme is easy because they will do it from one
of the components in your app. But if you want to trigger an action when Wave UI detects a change
of preferred theme, this is also easy!`,-1)),e[51]||(e[51]=o("p",null,[t("You can watch the value of "),o("code",null,"$waveui.preferredTheme"),t(`, but since it's reactive you may also
just use it in your template with `),o("code",null,"v-if"),t(".")],-1)),l(r,{language:"js",dark:n.$store.state.darkMode},{default:a(()=>e[20]||(e[20]=[t(`watch: {
  '$waveui.preferredTheme' (theme) {
    // Trigger an action.
  }
}
`)])),_:1,__:[20]},8,["dark"]),l(s,{h2:"",slug:"adding-themes-in-your-wave-ui-app"},{default:a(()=>e[21]||(e[21]=[t("Adding themes in your Wave UI app that never had themes")])),_:1,__:[21]}),e[52]||(e[52]=o("p",null,[t(`If you never had 2 themes, you most likely have added colors in your CSS that will not look nice
with the other theme. You're gonna have to locate the elements that look ugly and replace their
colors with ones that look better.`),o("br"),t(`
This checklist should guide you a little.`)],-1)),o("ol",null,[e[40]||(e[40]=o("li",{class:"mt6"},[t("Add "),o("code",null,"theme: 'auto'"),t(" to the Wave UI configuration.")],-1)),e[41]||(e[41]=o("li",{class:"mt6"},[t(`Switch your operating system preference to dark theme, or light if you were in dark.
That should already change the background color from the Wave UI defaults.`),o("br"),t(`
If it doesn't, you probably have an overriding style that applies a background with a higher CSS
priority.`)],-1)),o("li",M,[e[23]||(e[23]=t("Optionally, you can override these Wave UI defaults if you don't like them.")),e[24]||(e[24]=o("br",null,null,-1)),e[25]||(e[25]=t(`
Note that you can apply a transparency on these CSS3 color variables thanks to the CSS3
color-mix function.
(e.g. `)),e[26]||(e[26]=o("code",null,"color-mix(in srgb, var(--w-base-bg-color) 30%, transparent)",-1)),e[27]||(e[27]=t(")! 😉")),e[28]||(e[28]=o("br",null,null,-1)),l(r,{language:"css",dark:n.$store.state.darkMode},{default:a(()=>e[22]||(e[22]=[t(`:root[data-theme=light] {
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
}`)])),_:1,__:[22]},8,["dark"])]),o("li",W,[e[32]||(e[32]=t("If you have defined colors in the Wave UI configuration, define their best equivalent for the other theme:")),o("div",c,[l(r,{language:"js",label:"before",dark:n.$store.state.darkMode},{default:a(()=>e[29]||(e[29]=[t(`colors: {
  primary: '#0e9d39' // A dark green.
}`)])),_:1,__:[29]},8,["dark"]),l(u,{class:"grey ma2",xl:""},{default:a(()=>e[30]||(e[30]=[t("mdi mdi-arrow-right")])),_:1,__:[30]}),l(r,{language:"js",label:"after",dark:n.$store.state.darkMode},{default:a(()=>e[31]||(e[31]=[t(`colors: {
  light: {
    primary: '#0e9d39' // A dark green.
  },
  dark: {
    primary: '#82c295' // A lighter green.
  }
}`)])),_:1,__:[31]},8,["dark"])])]),o("li",C,[e[36]||(e[36]=t(`If you were using SCSS variables for colors, just use the CSS3 variables that Wave UI
generates so it will be updated when switching theme.`)),o("div",U,[l(r,{language:"css",label:"before",dark:n.$store.state.darkMode},{default:a(()=>e[33]||(e[33]=[t(`$primary: #1b4;
$secondary: #666;`)])),_:1,__:[33]},8,["dark"]),l(u,{class:"grey ma2",xl:""},{default:a(()=>e[34]||(e[34]=[t("mdi mdi-arrow-right")])),_:1,__:[34]}),l(r,{language:"css",label:"after",dark:n.$store.state.darkMode},{default:a(()=>e[35]||(e[35]=[t(`$primary: var(--w-primary-color);
$secondary: var(--w-secondary-color);`)])),_:1,__:[35]},8,["dark"])])]),e[42]||(e[42]=y(`<li class="mt6">Locate the ugly elements using the dev tools and replace their color/background-color with
colors that work for both themes, or with one of the following Wave UI defaults:<ul><li>color: <code class="text-bold">var(--w-base-color)</code>;</li><li>background-color: <code class="text-bold">var(--w-base-bg-color)</code>;</li><li>color: <code class="text-bold">var(--w-contrast-color)</code>;</li><li>background-color: <code class="text-bold">var(--w-contrast-bg-color)</code>;</li></ul><p>Read more about their signification in the
<a href="/colors#colors-and-themes">Colors and themes section of the colors page</a>.</p></li>`,1)),o("li",j,[e[39]||(e[39]=t("You may want to add a button to let the user switch theme:")),w(l(r,{language:"pug",dark:n.$store.state.darkMode},{default:a(()=>e[37]||(e[37]=[t(`w-button(
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')")`)])),_:1,__:[37]},8,["dark"]),[[g,n.$store.state.usePug]]),w(l(r,{language:"html-vue",dark:n.$store.state.darkMode},{default:a(()=>e[38]||(e[38]=[t(`<w-button
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')">
</w-button>`)])),_:1,__:[38]},8,["dark"]),[[g,!n.$store.state.usePug]])])])])}const B={methods:{switchTheme(){this.$store.state.darkMode=!this.$store.state.darkMode,this.$waveui.switchTheme(this.$store.state.darkMode?"dark":"light")}}},L=$(B,[["render",A]]);export{L as default};
