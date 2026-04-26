import{G as e,N as t,W as n,bt as r,c as i,d as a,g as o,h as s,k as c,m as l}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as u}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{X as d}from"./index-D3Rumh9E.js";var f={class:`title2`},p={class:`title2`},m={class:`title2`},h={class:`mt6`},g={class:`mt6`},_={class:`w-flex align-center`},v={class:`mt6`},y={class:`w-flex align-center`},b={class:`mt6`};function x(u,x,S,C,w,T){let E=t(`title-link`),D=t(`ssh-pre`),O=t(`w-icon`),k=t(`w-flex`),A=t(`example`),j=t(`w-button`),M=t(`alert`);return c(),a(`main`,null,[o(E,{class:`mt4`,h1:``},{default:n(()=>[...x[2]||=[s(`Themes`,-1)]]),_:1}),x[43]||=i(`p`,null,`Wave UI offers a light theme (by default) and a dark theme.`,-1),o(E,{h2:``},{default:n(()=>[...x[3]||=[s(`Setting an initial theme`,-1)]]),_:1}),x[44]||=i(`p`,null,`You can set a theme at Wave UI's initialization, with:`,-1),o(D,{language:`js`,dark:u.$store.state.darkMode},{default:n(()=>[...x[4]||=[s(`app.use(WaveUI, {
  theme: 'dark' // Or 'light' or 'auto'.
})
`,-1)]]),_:1},8,[`dark`]),o(E,{h2:``},{default:n(()=>[...x[5]||=[s(`Accessing the current theme`,-1)]]),_:1}),x[45]||=i(`p`,null,[s(`You can always read the currently applied theme from: `),i(`code`,null,`$waveui.theme`),s(`.`),i(`br`),s(`
This means you can render or style elements conditionally based on the current theme.`)],-1),o(A,null,{default:n(()=>[o(k,{class:`title1 align-center`},{default:n(()=>[s(`The theme is: `+r(u.$waveui.theme),1),o(O,{class:`ml2 mt1`,color:`yellow`},{default:n(()=>[s(`mdi mdi-`+r(u.$waveui.theme===`dark`?`weather-night`:`white-balance-sunny`),1)]),_:1})]),_:1})]),_:1}),o(E,{h2:``},{default:n(()=>[...x[6]||=[s(`Switching theme`,-1)]]),_:1}),x[46]||=i(`p`,null,[s(`While running, you can still switch the theme very easily with: `),i(`code`,null,`$waveui.switchTheme('dark')`),s(`.`)],-1),o(A,null,{pug:n(()=>[...x[11]||=[s(`w-button(@click="$waveui.switchTheme('light')") Switch theme
`,-1)]]),default:n(()=>[o(j,{class:`ma1`,onClick:x[0]||=e=>(u.$waveui.switchTheme(`light`),u.$store.commit(`setDarkMode`,!1))},{default:n(()=>[o(O,{class:`mr1`,color:`yellow`},{default:n(()=>[...x[7]||=[s(`mdi mdi-white-balance-sunny`,-1)]]),_:1}),x[8]||=s(`Light theme`,-1)]),_:1}),o(j,{class:`ma1`,onClick:x[1]||=e=>(u.$waveui.switchTheme(`dark`),u.$store.commit(`setDarkMode`,!0))},{default:n(()=>[o(O,{class:`mr1`,color:`yellow`},{default:n(()=>[...x[9]||=[s(`mdi mdi-weather-night`,-1)]]),_:1}),x[10]||=s(`Dark theme`,-1)]),_:1})]),_:1}),o(E,{h2:``},{default:n(()=>[...x[12]||=[s(`Auto theme`,-1)]]),_:1}),x[47]||=i(`p`,null,`Wave UI can detect the user preferred theme and apply it without you to need to do anything else
than:`,-1),o(D,{language:`js`,dark:u.$store.state.darkMode},{default:n(()=>[...x[13]||=[s(`app.use(WaveUI, {
  theme: 'auto'
})`,-1)]]),_:1},8,[`dark`]),x[48]||=i(`p`,{class:`mt6`},[s(`When the theme is automatic, you can access the current detected theme name in
`),i(`code`,null,`$waveui.preferredTheme`),s(`.`)],-1),o(A,null,{pug:n(()=>[...x[15]||=[s(`div Preferred theme: `,-1),i(`strong`,null,r(`{{ $waveui.preferredTheme }}`),-1)]]),default:n(()=>[i(`div`,f,[x[14]||=s(`Preferred theme: `,-1),i(`strong`,null,r(u.$waveui.preferredTheme),1)])]),_:1}),x[49]||=i(`p`,{class:`mt6`},[s(`It is also possible to start with the automatic theme, and offer the user the option to switch
theme like in this documentation.`),i(`br`),s(`
In this case, the `),i(`code`,null,`$waveui.preferredTheme`),s(` will always be set to the user favorite theme,
But once the user changes the theme from a user action (like a button, a switch) the
`),i(`code`,null,`$waveui.theme`),s(` value will be updated with the new user theme choice.`)],-1),o(A,null,{default:n(()=>[i(`div`,p,[x[16]||=i(`code`,null,`$waveui.preferredTheme`,-1),s(`: `+r(u.$waveui.preferredTheme),1)]),i(`div`,m,[x[17]||=i(`code`,null,`$waveui.theme`,-1),s(`: `+r(u.$waveui.theme),1)])]),_:1}),o(M,{tip:``},{default:n(()=>[...x[18]||=[s(`If you are using 2 themes, you should use CSS3 variables for all of your styling and not SCSS
variables.`,-1)]]),_:1}),o(E,{h3:``},{default:n(()=>[...x[19]||=[s(`Triggering an action on theme change`,-1)]]),_:1}),x[50]||=i(`p`,null,`triggering an action when the user changes the theme is easy because they will do it from one
of the components in your app. But if you want to trigger an action when Wave UI detects a change
of preferred theme, this is also easy!`,-1),x[51]||=i(`p`,null,[s(`You can watch the value of `),i(`code`,null,`$waveui.preferredTheme`),s(`, but since it's reactive you may also
just use it in your template with `),i(`code`,null,`v-if`),s(`.`)],-1),o(D,{language:`js`,dark:u.$store.state.darkMode},{default:n(()=>[...x[20]||=[s(`watch: {
  '$waveui.preferredTheme' (theme) {
    // Trigger an action.
  }
}
`,-1)]]),_:1},8,[`dark`]),o(E,{h2:``,slug:`adding-themes-in-your-wave-ui-app`},{default:n(()=>[...x[21]||=[s(`Adding themes in your Wave UI app that never had themes`,-1)]]),_:1}),x[52]||=i(`p`,null,[s(`If you never had 2 themes, you most likely have added colors in your CSS that will not look nice
with the other theme. You're gonna have to locate the elements that look ugly and replace their
colors with ones that look better.`),i(`br`),s(`
This checklist should guide you a little.`)],-1),i(`ol`,null,[x[40]||=i(`li`,{class:`mt6`},[s(`Add `),i(`code`,null,`theme: 'auto'`),s(` to the Wave UI configuration.`)],-1),x[41]||=i(`li`,{class:`mt6`},[s(`Switch your operating system preference to dark theme, or light if you were in dark.
That should already change the background color from the Wave UI defaults.`),i(`br`),s(`
If it doesn't, you probably have an overriding style that applies a background with a higher CSS
priority.`)],-1),i(`li`,h,[x[23]||=s(`Optionally, you can override these Wave UI defaults if you don't like them.`,-1),x[24]||=i(`br`,null,null,-1),x[25]||=s(`
Note that you can apply a transparency on these CSS3 color variables thanks to the CSS3
color-mix function.
(e.g. `,-1),x[26]||=i(`code`,null,`color-mix(in srgb, var(--w-base-bg-color) 30%, transparent)`,-1),x[27]||=s(`)! 😉`,-1),x[28]||=i(`br`,null,null,-1),o(D,{language:`css`,dark:u.$store.state.darkMode},{default:n(()=>[...x[22]||=[s(`:root[data-theme=light] {
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
}`,-1)]]),_:1},8,[`dark`])]),i(`li`,g,[x[32]||=s(`If you have defined colors in the Wave UI configuration, define their best equivalent for the other theme:`,-1),i(`div`,_,[o(D,{language:`js`,label:`before`,dark:u.$store.state.darkMode},{default:n(()=>[...x[29]||=[s(`colors: {
  primary: '#0e9d39' // A dark green.
}`,-1)]]),_:1},8,[`dark`]),o(O,{class:`grey ma2`,xl:``},{default:n(()=>[...x[30]||=[s(`mdi mdi-arrow-right`,-1)]]),_:1}),o(D,{language:`js`,label:`after`,dark:u.$store.state.darkMode},{default:n(()=>[...x[31]||=[s(`colors: {
  light: {
    primary: '#0e9d39' // A dark green.
  },
  dark: {
    primary: '#82c295' // A lighter green.
  }
}`,-1)]]),_:1},8,[`dark`])])]),i(`li`,v,[x[36]||=s(`If you were using SCSS variables for colors, just use the CSS3 variables that Wave UI
generates so it will be updated when switching theme.`,-1),i(`div`,y,[o(D,{language:`css`,label:`before`,dark:u.$store.state.darkMode},{default:n(()=>[...x[33]||=[s(`$primary: #1b4;
$secondary: #666;`,-1)]]),_:1},8,[`dark`]),o(O,{class:`grey ma2`,xl:``},{default:n(()=>[...x[34]||=[s(`mdi mdi-arrow-right`,-1)]]),_:1}),o(D,{language:`css`,label:`after`,dark:u.$store.state.darkMode},{default:n(()=>[...x[35]||=[s(`$primary: var(--w-primary-color);
$secondary: var(--w-secondary-color);`,-1)]]),_:1},8,[`dark`])])]),x[42]||=l(`<li class="mt6">Locate the ugly elements using the dev tools and replace their color/background-color with
colors that work for both themes, or with one of the following Wave UI defaults:<ul><li>color: <code class="text-bold">var(--w-base-color)</code>;</li><li>background-color: <code class="text-bold">var(--w-base-bg-color)</code>;</li><li>color: <code class="text-bold">var(--w-contrast-color)</code>;</li><li>background-color: <code class="text-bold">var(--w-contrast-bg-color)</code>;</li></ul><p>Read more about their signification in the
<a href="/colors#colors-and-themes">Colors and themes section of the colors page</a>.</p></li>`,1),i(`li`,b,[x[39]||=s(`You may want to add a button to let the user switch theme:`,-1),e(o(D,{language:`pug`,dark:u.$store.state.darkMode},{default:n(()=>[...x[37]||=[s(`w-button(
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')")`,-1)]]),_:1},8,[`dark`]),[[d,u.$store.state.usePug]]),e(o(D,{language:`html-vue`,dark:u.$store.state.darkMode},{default:n(()=>[...x[38]||=[s(`<w-button
  fixed
  top
  right
  :icon="\`material-icons \${$waveui.theme === 'dark' ? 'light_mode' : 'dark_mode'}\`"
  @click="$waveui.switchTheme($waveui.theme === 'light' ? 'dark' : 'light')">
</w-button>`,-1)]]),_:1},8,[`dark`]),[[d,!u.$store.state.usePug]])])])])}var S=u({methods:{switchTheme(){this.$store.state.darkMode=!this.$store.state.darkMode,this.$waveui.switchTheme(this.$store.state.darkMode?`dark`:`light`)}}},[[`render`,x]]);export{S as default};