import{D as e,J as t,N as n,W as r,c as i,d as a,g as o,h as s,k as c}from"./runtime-core.esm-bundler-inBY9EW4.js";import{q as l}from"./index-DQ7e6RHF.js";var u=[`dark`],d={class:`mt5`},f=[`dark`],p={class:`ml2`,href:`https://github.com/antoniandre/wave-ui/blob/master/src/wave-ui/scss/_layout.scss`,target:`_blank`},m=[`dark`],h=[`dark`],g={__name:`customization`,setup(g){let _=t([!0,!1,!1,!1]),v=l(),y=[`css-variable-overrides`,`override-css-scope`,`disable-layout-classes`,`scss-overrides`];return e(()=>{v.hash&&(_.value=[!1,!1,!1,!1],_.value[y.indexOf(v.hash.slice(1))]=!0)}),(e,t)=>{let l=n(`title-link`),g=n(`ssh-pre`),v=n(`w-accordion-item`),y=n(`w-icon`),b=n(`alert`),x=n(`w-accordion`);return c(),a(`main`,null,[o(l,{class:`mt4`,h1:``,slug:`customization`},{default:r(()=>[...t[3]||=[s(`Customization Via CSS Variables`,-1)]]),_:1}),o(x,{modelValue:_.value,"onUpdate:modelValue":t[2]||=e=>_.value=e,"title-class":`pa3 px0`,"content-class":`px8`,"expanded-class":e.$store.state.darkMode?`contrast-o05--bg`:`info-light6--bg`,"expand-icon-rotate90":``,"expand-single":``},{default:r(()=>[o(v,null,{title:r(()=>[o(l,{class:`my0`,h2:``,slug:`css-variable-overrides`},{default:r(()=>[...t[4]||=[s(`Basic CSS variable overrides`,-1)]]),_:1})]),content:r(()=>[t[6]||=i(`p`,null,`Wave UI exposes its design tokens as CSS custom properties. Override them from any stylesheet
loaded after Wave UI, no Sass build step required.`,-1),o(g,{language:`css`,label:`wave-ui-overrides.css`,dark:e.$store.state.darkMode},{default:r(()=>[...t[5]||=[s(`:root {
  --w-base-font-size: 14px;
  --w-base-increment: 5px;
  --w-layout-padding: calc(4 * var(--w-base-increment));
  --w-border-radius: 3px;
  --w-border-color: color-mix(in srgb, var(--w-contrast-bg-color) 15%, transparent);
  --w-transition-duration: 0.25s;
  --w-box-shadow:
    0 3px 1px -2px color-mix(in srgb, #000 20%, transparent),
    0 2px 2px 0 color-mix(in srgb, #000 15%, transparent),
    0 1px 5px 0 color-mix(in srgb, #000 15%, transparent);
}

:root[data-theme="light"] {
  --w-primary-color: #234781;
  --w-base-bg-color: #fff;
  --w-base-color: #000;
}

:root[data-theme="dark"] {
  --w-primary-color: #89b6d2;
  --w-base-bg-color: #222;
  --w-base-color: #fff;
}
`,-1)]]),_:1},8,[`dark`])]),_:1}),o(v,null,{title:r(()=>[o(l,{class:`my0`,h2:``,slug:`override-css-scope`},{default:r(()=>[...t[7]||=[s(`Override the global CSS scope`,-1),i(`small`,{class:`ml2`},`(Give Wave UI more priority)`,-1)]]),_:1})]),content:r(()=>[t[20]||=i(`div`,{class:`title5 mb0`},[s(`You can control all the css rules specificity and their priority by overriding
the default CSS base scope `),i(`strong`,null,`via SCSS`),s(`.`)],-1),i(`p`,null,[t[11]||=s(`For instance if you set the scope to:\xA0`,-1),i(`pre`,{class:`ssh-pre d-iflex`,"data-type":`css`,"data-label":`SCSS`,dark:e.$store.state.darkMode},[...t[8]||=[i(`strong`,{class:`pink`},`$css-scope`,-1),i(`span`,{class:`punctuation mr1`},`:`,-1),i(`span`,{class:`quote`},`'.html > body > '`,-1),i(`span`,{class:`punctuation`},`;`,-1),i(`span`,{class:`comment ml2`},`// Default: '.w-app'`,-1)]],8,u),t[12]||=s(`,`,-1),t[13]||=i(`br`,null,null,-1),t[14]||=s(`the default\xA0`,-1),o(g,{class:`d-iblock my0 mr1 py0 px1 lh3`,language:`css`,dark:e.$store.state.darkMode},{default:r(()=>[...t[9]||=[s(`.w-app .primary {color: #234781;}`,-1)]]),_:1},8,[`dark`]),t[15]||=s(`would become\xA0`,-1),o(g,{class:`d-iblock my0 py0 px1 lh3`,language:`css`,dark:e.$store.state.darkMode},{default:r(()=>[...t[10]||=[s(`html > body > div.w-app .primary {color: #234781;}`,-1)]]),_:1},8,[`dark`]),t[16]||=s(`.`,-1)]),i(`p`,d,[t[19]||=s(`To override the SCSS variable, follow the instructions in the section below:`,-1),i(`a`,{class:`ml1`,href:`#scss-overrides`,onClick:t[0]||=e=>_.value=[!1,!1,!1,!0]},[t[18]||=i(`strong`,null,`SCSS source overrides (advanced).`,-1),o(y,{class:`ml1`,sm:``},{default:r(()=>[...t[17]||=[s(`wi-arrow-down`,-1)]]),_:1})])])]),_:1}),o(v,null,{title:r(()=>[o(l,{class:`my0`,h2:``,slug:`disable-layout-classes`},{default:r(()=>[...t[21]||=[s(`Disable the CSS layout classes (not recommended)`,-1)]]),_:1})]),content:r(()=>[t[32]||=i(`p`,{class:`mb0`},[s(`You may want to use another CSS framework (like Tailwind) instead of the Wave UI's built-in CSS
layout classes.`),i(`br`),s(`
This is not recommended, but it's possible to disable the CSS layout classes of Wave UI so they
don't conflict with the external library.`),i(`br`),s(`
This is a `),i(`strong`,null,`build-time source option only`),s(`. Most apps should keep the built-in layout classes
and customize their scale with `),i(`code`,null,`--w-base-increment`),s(` instead.`)],-1),i(`p`,null,[t[25]||=s(`To disable, set this variable before importing Wave UI in your build config:\xA0`,-1),i(`pre`,{class:`ssh-pre d-iblock my0 py0 px1 lh3`,"data-type":`css`,"data-label":`SCSS`,dark:e.$store.state.darkMode},[...t[22]||=[i(`strong`,{class:`pink`},`$use-layout-classes`,-1),i(`span`,{class:`punctuation mr1`},`:`,-1),i(`span`,{class:`red-light2`},`false`,-1),i(`span`,{class:`punctuation`},`;`,-1),i(`span`,{class:`comment ml2`},`// Default: true`,-1)]],8,f),t[26]||=i(`br`,null,null,-1),i(`a`,{class:`d-block mt-2`,href:`#scss-overrides`,onClick:t[1]||=e=>_.value=[!1,!1,!1,!0]},[t[24]||=s(`See SCSS source overrides below.`,-1),o(y,{class:`ml1`,sm:``},{default:r(()=>[...t[23]||=[s(`wi-arrow-down`,-1)]]),_:1})])]),i(`p`,null,[t[29]||=s(`You can have a look at all the classes that will `,-1),t[30]||=i(`strong`,null,`not`,-1),t[31]||=s(` be generated in this file:`,-1),i(`a`,p,[t[28]||=s(`layout.scss on Github`,-1),o(y,{class:`ml1`,sm:``},{default:r(()=>[...t[27]||=[s(`mdi mdi-open-in-new`,-1)]]),_:1})])])]),_:1}),o(v,null,{title:r(()=>[o(l,{class:`my0`,h2:``,slug:`scss-overrides`},{default:r(()=>[...t[33]||=[s(`SCSS source overrides (advanced)`,-1)]]),_:1})]),content:r(()=>[o(b,{info:``},{default:r(()=>[...t[34]||=[i(`p`,{class:`title3 text-bold`},`Only needed if:`,-1),i(`ul`,null,[i(`li`,{class:`text-bold`},`You want to override the default CSS scope`),i(`li`,null,[i(`strong`,{class:`mr1`},`You want to disable the layout classes`),s(`to use an external CSS framework like Tailwind.`)])],-1)]]),_:1}),t[37]||=i(`p`,{class:`mt3`},[s(`In this case, you need to build Wave UI from source.`),i(`br`),s(`
For all other customization, use CSS variables above.
`)],-1),i(`pre`,{class:`ssh-pre`,"data-type":`css`,"data-label":`SCSS`,dark:e.$store.state.darkMode},[...t[35]||=[i(`span`,{class:`keyword`},`@use`,-1),i(`span`,{class:`quote mx1`},`'wave-ui/src/wave-ui/scss/variables'`,-1),i(`span`,{class:`keyword mx1`},`as *`,-1),i(`span`,{class:`punctuation`},`;`,-1),i(`br`,null,null,-1),i(`span`,{class:`comment`},`// Override before any Wave UI components import.`,-1),i(`br`,null,null,-1),i(`br`,null,null,-1),i(`span`,{class:`comment`},`// Change the CSS scope (nesting prefix for all Wave rules)`,-1),i(`br`,null,null,-1),i(`span`,{class:`variable`},`$css-scope`,-1),i(`span`,{class:`punctuation mr1`},`:`,-1),i(`span`,{class:`red-light2`},`'.my-custom-scope'`,-1),i(`span`,{class:`punctuation`},`;`,-1),i(`span`,{class:`comment ml1`},`// Default: '.w-app'`,-1),i(`br`,null,null,-1),i(`br`,null,null,-1),i(`span`,{class:`comment`},`// Disable layout utility classes (e.g. to use Tailwind)`,-1),i(`br`,null,null,-1),i(`span`,{class:`variable`},`$use-layout-classes`,-1),i(`span`,{class:`punctuation mr1`},`:`,-1),i(`span`,{class:`red-light2`},`false`,-1),i(`span`,{class:`punctuation`},`;`,-1),i(`span`,{class:`comment ml1`},`// Default: true`,-1)]],8,m),t[38]||=i(`p`,{class:`mt4`},`Then only import Wave UI source in your entry point (without the CSS file):
`,-1),i(`pre`,{class:`ssh-pre w-flex align-center gap1`,"data-type":`js`,dark:e.$store.state.darkMode},[...t[36]||=[i(`span`,{class:`keyword`},`import`,-1),i(`span`,{class:`variable`},`WaveUI`,-1),i(`span`,{class:`keyword`},`from`,-1),i(`span`,{class:`quote`},[s(`'wave-ui/`),i(`strong`,{class:`size--sm`},`src/wave-ui`),s(`'`)],-1)]],8,h),t[39]||=i(`p`,{class:`mt4 caption text-italic`},[i(`strong`,null,`Important:`),s(` SCSS variables only affect the `),i(`strong`,null,`build-time`),s(` output (which selectors are
emitted and their nesting scope). They do `),i(`strong`,null,`not`),s(` affect values at runtime. Use CSS custom
properties (above) for all runtime customization.
`)],-1)]),default:r(()=>[t[55]||=i(`div`,{class:`w-divider my12`},null,-1),o(l,{h2:``},{default:r(()=>[...t[40]||=[s(`Nuxt with Wave UI from source`,-1)]]),_:1}),t[56]||=i(`p`,null,[s(`If you're using Nuxt and importing Wave UI from source (via `),i(`code`,null,`wave-ui/src/wave-ui`),s(`),
you can override SCSS variables in your build config:
`)],-1),o(x,{"model-value":[!0,!1],"expand-single":``,"expand-icon-rotate90":``},{default:r(()=>[o(v,null,{title:r(()=>[...t[41]||=[s(`Nuxt 4 / 3`,-1)]]),content:r(()=>[t[45]||=i(`p`,null,[s(`Create an `),i(`code`,null,`app/plugins/wave-ui.js`),s(` (or `),i(`code`,null,`plugins/wave-ui.js`),s(`) and import from source:
`)],-1),o(g,{class:`mt4`,language:`js`,dark:e.$store.state.darkMode},{default:r(()=>[...t[42]||=[s(`import WaveUI from 'wave-ui/src/wave-ui'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(WaveUI, { on: '#__nuxt' })
})
`,-1)]]),_:1},8,[`dark`]),t[46]||=i(`p`,{class:`mt6`},[s(`Then in `),i(`code`,null,`nuxt.config.js`),s(`, add SCSS preprocessor options to set Wave UI variables:
`)],-1),o(g,{class:`mt4`,language:`js`,dark:e.$store.state.darkMode},{default:r(()=>[...t[43]||=[s(`export default defineNuxtConfig({
  // ... other config ...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`
          @use 'wave-ui/src/wave-ui/scss/variables' as *;
          $css-scope: '.w-app';
          $use-layout-classes: true;
        \`
      }
    }
  }
})
`,-1)]]),_:1},8,[`dark`]),t[47]||=i(`p`,{class:`mt6`},[s(`Since you're importing from source, make sure `),i(`code`,null,`node_modules`),s(` is transpiled:
`)],-1),o(g,{class:`mt4`,language:`js`,dark:e.$store.state.darkMode},{default:r(()=>[...t[44]||=[s(`export default defineNuxtConfig({
  build: {
    transpile: ['wave-ui']
  }
})
`,-1)]]),_:1},8,[`dark`])]),_:1}),o(v,null,{title:r(()=>[...t[48]||=[s(`Nuxt 2`,-1)]]),content:r(()=>[t[52]||=i(`p`,null,[s(`The Nuxt 2 Wave UI module (`),i(`code`,null,`@wave-ui/nuxt`),s(`) supports a `),i(`code`,null,`useScss`),s(` option
that points to your SCSS variables file:
`)],-1),o(g,{class:`mt4`,language:`js`,dark:e.$store.state.darkMode},{default:r(()=>[...t[49]||=[s(`buildModules: [
  [
    '@wave-ui/nuxt',
    {
      useScss: '~/scss/_variables.scss'
    }
  ]
]
`,-1)]]),_:1},8,[`dark`]),t[53]||=i(`p`,{class:`mt6`},`That file should import and override Wave UI variables:
`,-1),o(g,{class:`mt4`,language:`scss`,dark:e.$store.state.darkMode},{default:r(()=>[...t[50]||=[s(`@use 'wave-ui/src/wave-ui/scss/variables' as *;

$css-scope: '.w-app';
$use-layout-classes: true;
`,-1)]]),_:1},8,[`dark`]),t[54]||=i(`p`,{class:`mt6`},[s(`And enable transpilation in `),i(`code`,null,`nuxt.config.js`),s(`:
`)],-1),o(g,{class:`mt4`,language:`js`,dark:e.$store.state.darkMode},{default:r(()=>[...t[51]||=[s(`build: {
  transpile: ['wave-ui']
}`,-1)]]),_:1},8,[`dark`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`modelValue`,`expanded-class`])])}}};export{g as default};