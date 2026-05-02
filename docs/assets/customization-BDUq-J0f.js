import{A as e,G as t,O as n,P as r,Y as i,c as a,d as o,g as s,h as c}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{q as l}from"./index-DR7O6uV_.js";var u=[`dark`],d={class:`mt5`},f=[`dark`],p={class:`ml2`,href:`https://github.com/antoniandre/wave-ui/blob/master/src/wave-ui/scss/_layout.scss`,target:`_blank`},m=[`dark`],h=[`dark`],g={__name:`customization`,setup(g){let _=i([!0,!1,!1,!1]),v=l(),y=[`css-variable-overrides`,`override-css-scope`,`disable-layout-classes`,`scss-overrides`];return n(()=>{v.hash&&(_.value=[!1,!1,!1,!1],_.value[y.indexOf(v.hash.slice(1))]=!0)}),(n,i)=>{let l=r(`title-link`),g=r(`ssh-pre`),v=r(`w-accordion-item`),y=r(`w-icon`),b=r(`alert`),x=r(`w-accordion`);return e(),o(`main`,null,[s(l,{class:`mt4`,h1:``,slug:`customization`},{default:t(()=>[...i[3]||=[c(`Customization Via CSS Variables`,-1)]]),_:1}),s(x,{modelValue:_.value,"onUpdate:modelValue":i[2]||=e=>_.value=e,"title-class":`pa3 px0`,"content-class":`px8`,"expanded-class":n.$store.state.darkMode?`contrast-o05--bg`:`info-light6--bg`,"expand-icon-rotate90":``,"expand-single":``},{default:t(()=>[s(v,null,{title:t(()=>[s(l,{class:`my0`,h2:``,slug:`css-variable-overrides`},{default:t(()=>[...i[4]||=[c(`Basic CSS variable overrides`,-1)]]),_:1})]),content:t(()=>[i[6]||=a(`p`,null,`Wave UI exposes its design tokens as CSS custom properties. Override them from any stylesheet
loaded after Wave UI, no Sass build step required.`,-1),s(g,{language:`css`,label:`wave-ui-overrides.css`,dark:n.$store.state.darkMode},{default:t(()=>[...i[5]||=[c(`:root {
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
`,-1)]]),_:1},8,[`dark`])]),_:1}),s(v,null,{title:t(()=>[s(l,{class:`my0`,h2:``,slug:`override-css-scope`},{default:t(()=>[...i[7]||=[c(`Override the global CSS scope`,-1),a(`small`,{class:`ml2`},`(Give Wave UI more priority)`,-1)]]),_:1})]),content:t(()=>[i[20]||=a(`div`,{class:`title5 mb0`},[c(`You can control all the css rules specificity and their priority by overriding
the default CSS base scope `),a(`strong`,null,`via SCSS`),c(`.`)],-1),a(`p`,null,[i[11]||=c(`For instance if you set the scope to:\xA0`,-1),a(`pre`,{class:`ssh-pre d-iflex`,"data-type":`css`,"data-label":`SCSS`,dark:n.$store.state.darkMode},[...i[8]||=[a(`strong`,{class:`pink`},`$css-scope`,-1),a(`span`,{class:`punctuation mr1`},`:`,-1),a(`span`,{class:`quote`},`'.html > body > '`,-1),a(`span`,{class:`punctuation`},`;`,-1),a(`span`,{class:`comment ml2`},`// Default: '.w-app'`,-1)]],8,u),i[12]||=c(`,`,-1),i[13]||=a(`br`,null,null,-1),i[14]||=c(`the default\xA0`,-1),s(g,{class:`d-iblock my0 mr1 py0 px1 lh3`,language:`css`,dark:n.$store.state.darkMode},{default:t(()=>[...i[9]||=[c(`.w-app .primary {color: #234781;}`,-1)]]),_:1},8,[`dark`]),i[15]||=c(`would become\xA0`,-1),s(g,{class:`d-iblock my0 py0 px1 lh3`,language:`css`,dark:n.$store.state.darkMode},{default:t(()=>[...i[10]||=[c(`html > body > div.w-app .primary {color: #234781;}`,-1)]]),_:1},8,[`dark`]),i[16]||=c(`.`,-1)]),a(`p`,d,[i[19]||=c(`To override the SCSS variable, follow the instructions in the section below:`,-1),a(`a`,{class:`ml1`,href:`#scss-overrides`,onClick:i[0]||=e=>_.value=[!1,!1,!1,!0]},[i[18]||=a(`strong`,null,`SCSS source overrides (advanced).`,-1),s(y,{class:`ml1`,sm:``},{default:t(()=>[...i[17]||=[c(`wi-arrow-down`,-1)]]),_:1})])])]),_:1}),s(v,null,{title:t(()=>[s(l,{class:`my0`,h2:``,slug:`disable-layout-classes`},{default:t(()=>[...i[21]||=[c(`Disable the CSS layout classes (not recommended)`,-1)]]),_:1})]),content:t(()=>[i[32]||=a(`p`,{class:`mb0`},[c(`You may want to use another CSS framework (like Tailwind) instead of the Wave UI's built-in CSS
layout classes.`),a(`br`),c(`
This is not recommended, but it's possible to disable the CSS layout classes of Wave UI so they
don't conflict with the external library.`),a(`br`),c(`
This is a `),a(`strong`,null,`build-time source option only`),c(`. Most apps should keep the built-in layout classes
and customize their scale with `),a(`code`,null,`--w-base-increment`),c(` instead.`)],-1),a(`p`,null,[i[25]||=c(`To disable, set this variable before importing Wave UI in your build config:\xA0`,-1),a(`pre`,{class:`ssh-pre d-iblock my0 py0 px1 lh3`,"data-type":`css`,"data-label":`SCSS`,dark:n.$store.state.darkMode},[...i[22]||=[a(`strong`,{class:`pink`},`$use-layout-classes`,-1),a(`span`,{class:`punctuation mr1`},`:`,-1),a(`span`,{class:`red-light2`},`false`,-1),a(`span`,{class:`punctuation`},`;`,-1),a(`span`,{class:`comment ml2`},`// Default: true`,-1)]],8,f),i[26]||=a(`br`,null,null,-1),a(`a`,{class:`d-block mt-2`,href:`#scss-overrides`,onClick:i[1]||=e=>_.value=[!1,!1,!1,!0]},[i[24]||=c(`See SCSS source overrides below.`,-1),s(y,{class:`ml1`,sm:``},{default:t(()=>[...i[23]||=[c(`wi-arrow-down`,-1)]]),_:1})])]),a(`p`,null,[i[29]||=c(`You can have a look at all the classes that will `,-1),i[30]||=a(`strong`,null,`not`,-1),i[31]||=c(` be generated in this file:`,-1),a(`a`,p,[i[28]||=c(`layout.scss on Github`,-1),s(y,{class:`ml1`,sm:``},{default:t(()=>[...i[27]||=[c(`mdi mdi-open-in-new`,-1)]]),_:1})])])]),_:1}),s(v,null,{title:t(()=>[s(l,{class:`my0`,h2:``,slug:`scss-overrides`},{default:t(()=>[...i[33]||=[c(`SCSS source overrides (advanced)`,-1)]]),_:1})]),content:t(()=>[s(b,{info:``},{default:t(()=>[...i[34]||=[a(`p`,{class:`title3 text-bold`},`Only needed if:`,-1),a(`ul`,null,[a(`li`,{class:`text-bold`},`You want to override the default CSS scope`),a(`li`,null,[a(`strong`,{class:`mr1`},`You want to disable the layout classes`),c(`to use an external CSS framework like Tailwind.`)])],-1)]]),_:1}),i[37]||=a(`p`,{class:`mt3`},[c(`In this case, you need to build Wave UI from source.`),a(`br`),c(`
For all other customization, use CSS variables above.
`)],-1),a(`pre`,{class:`ssh-pre`,"data-type":`css`,"data-label":`SCSS`,dark:n.$store.state.darkMode},[...i[35]||=[a(`span`,{class:`keyword`},`@use`,-1),a(`span`,{class:`quote mx1`},`'wave-ui/src/wave-ui/scss/variables'`,-1),a(`span`,{class:`keyword mx1`},`as *`,-1),a(`span`,{class:`punctuation`},`;`,-1),a(`br`,null,null,-1),a(`span`,{class:`comment`},`// Override before any Wave UI components import.`,-1),a(`br`,null,null,-1),a(`br`,null,null,-1),a(`span`,{class:`comment`},`// Change the CSS scope (nesting prefix for all Wave rules)`,-1),a(`br`,null,null,-1),a(`span`,{class:`variable`},`$css-scope`,-1),a(`span`,{class:`punctuation mr1`},`:`,-1),a(`span`,{class:`red-light2`},`'.my-custom-scope'`,-1),a(`span`,{class:`punctuation`},`;`,-1),a(`span`,{class:`comment ml1`},`// Default: '.w-app'`,-1),a(`br`,null,null,-1),a(`br`,null,null,-1),a(`span`,{class:`comment`},`// Disable layout utility classes (e.g. to use Tailwind)`,-1),a(`br`,null,null,-1),a(`span`,{class:`variable`},`$use-layout-classes`,-1),a(`span`,{class:`punctuation mr1`},`:`,-1),a(`span`,{class:`red-light2`},`false`,-1),a(`span`,{class:`punctuation`},`;`,-1),a(`span`,{class:`comment ml1`},`// Default: true`,-1)]],8,m),i[38]||=a(`p`,{class:`mt4`},`Then only import Wave UI source in your entry point (without the CSS file):
`,-1),a(`pre`,{class:`ssh-pre w-flex align-center gap1`,"data-type":`js`,dark:n.$store.state.darkMode},[...i[36]||=[a(`span`,{class:`keyword`},`import`,-1),a(`span`,{class:`variable`},`WaveUI`,-1),a(`span`,{class:`keyword`},`from`,-1),a(`span`,{class:`quote`},[c(`'wave-ui/`),a(`strong`,{class:`size--sm`},`src/wave-ui`),c(`'`)],-1)]],8,h),i[39]||=a(`p`,{class:`mt4 caption text-italic`},[a(`strong`,null,`Important:`),c(` SCSS variables only affect the `),a(`strong`,null,`build-time`),c(` output (which selectors are
emitted and their nesting scope). They do `),a(`strong`,null,`not`),c(` affect values at runtime. Use CSS custom
properties (above) for all runtime customization.
`)],-1)]),default:t(()=>[i[55]||=a(`div`,{class:`w-divider my12`},null,-1),s(l,{h2:``},{default:t(()=>[...i[40]||=[c(`Nuxt with Wave UI from source`,-1)]]),_:1}),i[56]||=a(`p`,null,[c(`If you're using Nuxt and importing Wave UI from source (via `),a(`code`,null,`wave-ui/src/wave-ui`),c(`),
you can override SCSS variables in your build config:
`)],-1),s(x,{"model-value":[!0,!1],"expand-single":``,"expand-icon-rotate90":``},{default:t(()=>[s(v,null,{title:t(()=>[...i[41]||=[c(`Nuxt 4 / 3`,-1)]]),content:t(()=>[i[45]||=a(`p`,null,[c(`Create an `),a(`code`,null,`app/plugins/wave-ui.js`),c(` (or `),a(`code`,null,`plugins/wave-ui.js`),c(`) and import from source:
`)],-1),s(g,{class:`mt4`,language:`js`,dark:n.$store.state.darkMode},{default:t(()=>[...i[42]||=[c(`import WaveUI from 'wave-ui/src/wave-ui'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(WaveUI, { on: '#__nuxt' })
})
`,-1)]]),_:1},8,[`dark`]),i[46]||=a(`p`,{class:`mt6`},[c(`Then in `),a(`code`,null,`nuxt.config.js`),c(`, add SCSS preprocessor options to set Wave UI variables:
`)],-1),s(g,{class:`mt4`,language:`js`,dark:n.$store.state.darkMode},{default:t(()=>[...i[43]||=[c(`export default defineNuxtConfig({
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
`,-1)]]),_:1},8,[`dark`]),i[47]||=a(`p`,{class:`mt6`},[c(`Since you're importing from source, make sure `),a(`code`,null,`node_modules`),c(` is transpiled:
`)],-1),s(g,{class:`mt4`,language:`js`,dark:n.$store.state.darkMode},{default:t(()=>[...i[44]||=[c(`export default defineNuxtConfig({
  build: {
    transpile: ['wave-ui']
  }
})
`,-1)]]),_:1},8,[`dark`])]),_:1}),s(v,null,{title:t(()=>[...i[48]||=[c(`Nuxt 2`,-1)]]),content:t(()=>[i[52]||=a(`p`,null,[c(`The Nuxt 2 Wave UI module (`),a(`code`,null,`@wave-ui/nuxt`),c(`) supports a `),a(`code`,null,`useScss`),c(` option
that points to your SCSS variables file:
`)],-1),s(g,{class:`mt4`,language:`js`,dark:n.$store.state.darkMode},{default:t(()=>[...i[49]||=[c(`buildModules: [
  [
    '@wave-ui/nuxt',
    {
      useScss: '~/scss/_variables.scss'
    }
  ]
]
`,-1)]]),_:1},8,[`dark`]),i[53]||=a(`p`,{class:`mt6`},`That file should import and override Wave UI variables:
`,-1),s(g,{class:`mt4`,language:`scss`,dark:n.$store.state.darkMode},{default:t(()=>[...i[50]||=[c(`@use 'wave-ui/src/wave-ui/scss/variables' as *;

$css-scope: '.w-app';
$use-layout-classes: true;
`,-1)]]),_:1},8,[`dark`]),i[54]||=a(`p`,{class:`mt6`},[c(`And enable transpilation in `),a(`code`,null,`nuxt.config.js`),c(`:
`)],-1),s(g,{class:`mt4`,language:`js`,dark:n.$store.state.darkMode},{default:t(()=>[...i[51]||=[c(`build: {
  transpile: ['wave-ui']
}`,-1)]]),_:1},8,[`dark`])]),_:1})]),_:1})]),_:1})]),_:1},8,[`modelValue`,`expanded-class`])])}}};export{g as default};