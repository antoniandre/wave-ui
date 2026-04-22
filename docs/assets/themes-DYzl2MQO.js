import{H as e,N as t,U as n,c as r,d as i,g as a,h as o,k as s,m as c,vt as l}from"./runtime-core.esm-bundler-DPe36P4s.js";import{s as u}from"./runtime-dom.esm-bundler-Dtklx5Fk.js";import{t as d}from"./_plugin-vue_export-helper-S3RvzygF.js";var f={class:`title2`},p={class:`title2`},m={class:`title2`},h={class:`mt6`},g={class:`mt6`},_={class:`w-flex align-center`},v={class:`mt6`},y={class:`w-flex align-center`},b={class:`mt6`};function x(d,x,S,C,w,T){let E=t(`title-link`),D=t(`ssh-pre`),O=t(`w-icon`),k=t(`w-flex`),A=t(`example`),j=t(`w-button`),M=t(`alert`);return s(),i(`main`,null,[a(E,{class:`mt4`,h1:``},{default:e(()=>[...x[2]||=[o(`Themes`,-1)]]),_:1}),x[43]||=r(`p`,null,`Wave UI offers a light theme (by default) and a dark theme.`,-1),a(E,{h2:``},{default:e(()=>[...x[3]||=[o(`Setting an initial theme`,-1)]]),_:1}),x[44]||=r(`p`,null,`You can set a theme at Wave UI's initialization, with:`,-1),a(D,{language:`js`,dark:d.$store.state.darkMode},{default:e(()=>[...x[4]||=[o(`app.use(WaveUI, {
  theme: 'dark' // Or 'light' or 'auto'.
})
`,-1)]]),_:1},8,[`dark`]),a(E,{h2:``},{default:e(()=>[...x[5]||=[o(`Accessing the current theme`,-1)]]),_:1}),x[45]||=r(`p`,null,[o(`You can always read the currently applied theme from: `),r(`code`,null,`$waveui.theme`),o(`.`),r(`br`),o(`
This means you can render or style elements conditionally based on the current theme.`)],-1),a(A,null,{default:e(()=>[a(k,{class:`title1 align-center`},{default:e(()=>[o(`The theme is: `+l(d.$waveui.theme),1),a(O,{class:`ml2 mt1`,color:`yellow`},{default:e(()=>[o(`mdi mdi-`+l(d.$waveui.theme===`dark`?`weather-night`:`white-balance-sunny`),1)]),_:1})]),_:1})]),_:1}),a(E,{h2:``},{default:e(()=>[...x[6]||=[o(`Switching theme`,-1)]]),_:1}),x[46]||=r(`p`,null,[o(`While running, you can still switch the theme very easily with: `),r(`code`,null,`$waveui.switchTheme('dark')`),o(`.`)],-1),a(A,null,{pug:e(()=>[...x[11]||=[o(`w-button(@click="$waveui.switchTheme('light')") Switch theme
`,-1)]]),default:e(()=>[a(j,{class:`ma1`,onClick:x[0]||=e=>(d.$waveui.switchTheme(`light`),d.$store.commit(`setDarkMode`,!1))},{default:e(()=>[a(O,{class:`mr1`,color:`yellow`},{default:e(()=>[...x[7]||=[o(`mdi mdi-white-balance-sunny`,-1)]]),_:1}),x[8]||=o(`Light theme`,-1)]),_:1}),a(j,{class:`ma1`,onClick:x[1]||=e=>(d.$waveui.switchTheme(`dark`),d.$store.commit(`setDarkMode`,!0))},{default:e(()=>[a(O,{class:`mr1`,color:`yellow`},{default:e(()=>[...x[9]||=[o(`mdi mdi-weather-night`,-1)]]),_:1}),x[10]||=o(`Dark theme`,-1)]),_:1})]),_:1}),a(E,{h2:``},{default:e(()=>[...x[12]||=[o(`Auto theme`,-1)]]),_:1}),x[47]||=r(`p`,null,`Wave UI can detect the user preferred theme and apply it without you to need to do anything else
than:`,-1),a(D,{language:`js`,dark:d.$store.state.darkMode},{default:e(()=>[...x[13]||=[o(`app.use(WaveUI, {
  theme: 'auto'
})`,-1)]]),_:1},8,[`dark`]),x[48]||=r(`p`,{class:`mt6`},[o(`When the theme is automatic, you can access the current detected theme name in
`),r(`code`,null,`$waveui.preferredTheme`),o(`.`)],-1),a(A,null,{pug:e(()=>[...x[15]||=[o(`div Preferred theme: `,-1),r(`strong`,null,l(`{{ $waveui.preferredTheme }}`),-1)]]),default:e(()=>[r(`div`,f,[x[14]||=o(`Preferred theme: `,-1),r(`strong`,null,l(d.$waveui.preferredTheme),1)])]),_:1}),x[49]||=r(`p`,{class:`mt6`},[o(`It is also possible to start with the automatic theme, and offer the user the option to switch
theme like in this documentation.`),r(`br`),o(`
In this case, the `),r(`code`,null,`$waveui.preferredTheme`),o(` will always be set to the user favorite theme,
But once the user changes the theme from a user action (like a button, a switch) the
`),r(`code`,null,`$waveui.theme`),o(` value will be updated with the new user theme choice.`)],-1),a(A,null,{default:e(()=>[r(`div`,p,[x[16]||=r(`code`,null,`$waveui.preferredTheme`,-1),o(`: `+l(d.$waveui.preferredTheme),1)]),r(`div`,m,[x[17]||=r(`code`,null,`$waveui.theme`,-1),o(`: `+l(d.$waveui.theme),1)])]),_:1}),a(M,{tip:``},{default:e(()=>[...x[18]||=[o(`If you are using 2 themes, you should use CSS3 variables for all of your styling and not SCSS
variables.`,-1)]]),_:1}),a(E,{h3:``},{default:e(()=>[...x[19]||=[o(`Triggering an action on theme change`,-1)]]),_:1}),x[50]||=r(`p`,null,`triggering an action when the user changes the theme is easy because they will do it from one
of the components in your app. But if you want to trigger an action when Wave UI detects a change
of preferred theme, this is also easy!`,-1),x[51]||=r(`p`,null,[o(`You can watch the value of `),r(`code`,null,`$waveui.preferredTheme`),o(`, but since it's reactive you may also
just use it in your template with `),r(`code`,null,`v-if`),o(`.`)],-1),a(D,{language:`js`,dark:d.$store.state.darkMode},{default:e(()=>[...x[20]||=[o(`watch: {
  '$waveui.preferredTheme' (theme) {
    // Trigger an action.
  }
}
`,-1)]]),_:1},8,[`dark`]),a(E,{h2:``,slug:`adding-themes-in-your-wave-ui-app`},{default:e(()=>[...x[21]||=[o(`Adding themes in your Wave UI app that never had themes`,-1)]]),_:1}),x[52]||=r(`p`,null,[o(`If you never had 2 themes, you most likely have added colors in your CSS that will not look nice
with the other theme. You're gonna have to locate the elements that look ugly and replace their
colors with ones that look better.`),r(`br`),o(`
This checklist should guide you a little.`)],-1),r(`ol`,null,[x[40]||=r(`li`,{class:`mt6`},[o(`Add `),r(`code`,null,`theme: 'auto'`),o(` to the Wave UI configuration.`)],-1),x[41]||=r(`li`,{class:`mt6`},[o(`Switch your operating system preference to dark theme, or light if you were in dark.
That should already change the background color from the Wave UI defaults.`),r(`br`),o(`
If it doesn't, you probably have an overriding style that applies a background with a higher CSS
priority.`)],-1),r(`li`,h,[x[23]||=o(`Optionally, you can override these Wave UI defaults if you don't like them.`,-1),x[24]||=r(`br`,null,null,-1),x[25]||=o(`
Note that you can apply a transparency on these CSS3 color variables thanks to the CSS3
color-mix function.
(e.g. `,-1),x[26]||=r(`code`,null,`color-mix(in srgb, var(--w-base-bg-color) 30%, transparent)`,-1),x[27]||=o(`)! 😉`,-1),x[28]||=r(`br`,null,null,-1),a(D,{language:`css`,dark:d.$store.state.darkMode},{default:e(()=>[...x[22]||=[o(`:root[data-theme=light] {
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
}`,-1)]]),_:1},8,[`dark`])]),r(`li`,g,[x[32]||=o(`If you have defined colors in the Wave UI configuration, define their best equivalent for the other theme:`,-1),r(`div`,_,[a(D,{language:`js`,label:`before`,dark:d.$store.state.darkMode},{default:e(()=>[...x[29]||=[o(`colors: {
  primary: '#0e9d39' // A dark green.
}`,-1)]]),_:1},8,[`dark`]),a(O,{class:`grey ma2`,xl:``},{default:e(()=>[...x[30]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(D,{language:`js`,label:`after`,dark:d.$store.state.darkMode},{default:e(()=>[...x[31]||=[o(`colors: {
  light: {
    primary: '#0e9d39' // A dark green.
  },
  dark: {
    primary: '#82c295' // A lighter green.
  }
}`,-1)]]),_:1},8,[`dark`])])]),r(`li`,v,[x[36]||=o(`If you were using SCSS variables for colors, just use the CSS3 variables that Wave UI
generates so it will be updated when switching theme.`,-1),r(`div`,y,[a(D,{language:`css`,label:`before`,dark:d.$store.state.darkMode},{default:e(()=>[...x[33]||=[o(`$primary: #1b4;
$secondary: #666;`,-1)]]),_:1},8,[`dark`]),a(O,{class:`grey ma2`,xl:``},{default:e(()=>[...x[34]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(D,{language:`css`,label:`after`,dark:d.$store.state.darkMode},{default:e(()=>[...x[35]||=[o(`$primary: var(--w-primary-color);
$secondary: var(--w-secondary-color);`,-1)]]),_:1},8,[`dark`])])]),x[42]||=c(`<li class="mt6">Locate the ugly elements using the dev tools and replace their color/background-color with
colors that work for both themes, or with one of the following Wave UI defaults:<ul><li>color: <code class="text-bold">var(--w-base-color)</code>;</li><li>background-color: <code class="text-bold">var(--w-base-bg-color)</code>;</li><li>color: <code class="text-bold">var(--w-contrast-color)</code>;</li><li>background-color: <code class="text-bold">var(--w-contrast-bg-color)</code>;</li></ul><p>Read more about their signification in the
<a href="/colors#colors-and-themes">Colors and themes section of the colors page</a>.</p></li>`,1),r(`li`,b,[x[39]||=o(`You may want to add a button to let the user switch theme:`,-1),n(a(D,{language:`pug`,dark:d.$store.state.darkMode},{default:e(()=>[...x[37]||=[o(`w-button(
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')")`,-1)]]),_:1},8,[`dark`]),[[u,d.$store.state.usePug]]),n(a(D,{language:`html-vue`,dark:d.$store.state.darkMode},{default:e(()=>[...x[38]||=[o(`<w-button
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')">
</w-button>`,-1)]]),_:1},8,[`dark`]),[[u,!d.$store.state.usePug]])])])])}var S=d({methods:{switchTheme(){this.$store.state.darkMode=!this.$store.state.darkMode,this.$waveui.switchTheme(this.$store.state.darkMode?`dark`:`light`)}}},[[`render`,x]]);export{S as default};