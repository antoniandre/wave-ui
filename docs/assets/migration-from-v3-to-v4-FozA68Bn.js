import{N as e,W as t,_t as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";var l={class:`mt6`},u={class:`mt4`},d={class:`w-flex align-center wrap`},f={class:`mt4`},p={class:`w-flex align-center wrap`},m={class:`mt4`},h={class:`mt4`},g={class:`mt4`},_={class:`mt8`},v={class:`w-flex align-center wrap`},y={class:`w-flex align-center wrap`},b={class:`mt6`},x={class:`mt4`},S={class:`w-flex align-center wrap`},C={class:`mt4`},w={class:`w-flex align-center wrap`},T={class:`mt4`},E={class:`w-flex align-center wrap`},D={class:`w-flex justify-center mt12 pt12`},O={class:`sponsor-card text-center lh1 mt10 ovh`},k={class:`mt2`};function A(c,A,j,M,N,P){let F=e(`title-link`),I=e(`alert`),L=e(`w-icon`),R=e(`ssh-pre`),z=e(`router-link`),B=e(`w-accordion-item`),V=e(`w-accordion`),H=e(`w-button`);return s(),i(`main`,null,[a(F,{class:`mt4`,h1:``},{default:t(()=>[...A[0]||=[o(`Migration strategy from version 3.x to version 4.x`,-1)]]),_:1}),A[56]||=r(`p`,{class:`caption size--lg`},`Two steps to migrate from version 3.x to version 4.x`,-1),a(V,{class:`mt6`,"title-class":`py3`,"expand-icon-rotate90":``,"expand-single":``},{default:t(()=>[a(B,null,{title:t(()=>[a(F,{class:`my0`,h2:``,slug:`css-variable-overrides`},{default:t(()=>[...A[1]||=[o(`1. Replaced SCSS Variables with CSS variables`,-1)]]),_:1})]),content:t(()=>[a(I,{class:`alert--info px5`},{default:t(()=>[...A[2]||=[r(`div`,{class:`title4 text-bold`},`Wave UI 4 moves public style customization from SCSS variables to CSS custom
properties for better runtime customization:`,-1),r(`p`,null,`Themes, component surfaces, spacing, borders, radii,
shadows and transitions can now be changed with CSS variables without compiling Wave UI
source SCSS in your app.`,-1)]]),_:1}),A[27]||=r(`p`,null,[o(`If you were not overriding Wave UI SCSS variables, there's no migration needed.
If you did, replace those overrides with `),r(`code`,null,`--w-*`),o(`
CSS custom properties in a CSS file loaded after Wave UI.
`)],-1),r(`ol`,l,[r(`li`,u,[A[6]||=r(`div`,{class:`title3`},`Replace SCSS variable overrides with CSS custom properties.`,-1),A[7]||=r(`p`,null,[o(`Most former SCSS variables now have a matching `),r(`code`,null,`--w-*`),o(` custom
property. Move your overrides from a Sass variables file to regular CSS.`)],-1),r(`div`,d,[r(`div`,{class:n([`ssh-pre`,c.$store.state.darkMode?`ssh-pre--dark`:`ssh-pre--light`]),"data-type":`css`,"data-label":`SCSS before`,style:{"min-width":`290px`}},[...A[3]||=[r(`pre`,{class:`ssh-pre__content`},[r(`span`,{class:`keyword mr1`},`@use`),r(`span`,{class:`quote`},`"wave-ui/src/wave-ui/scss/variables"`),r(`span`,{class:`keyword mx1`},`with`),r(`span`,{class:`punctuation`},[o(`(`),r(`br`)]),r(`span`,{class:`variable ml4`},`$base-increment`),r(`span`,{class:`punctuation mr1`},`:`),r(`span`,{class:`number`},`5`),r(`span`,{class:`unit`},`px`),r(`span`,{class:`punctuation`},[o(`,`),r(`br`)]),r(`span`,{class:`variable ml4`},`$border-radius`),r(`span`,{class:`punctuation mr1`},`:`),r(`span`,{class:`number`},`6`),r(`span`,{class:`unit`},`px`),r(`span`,{class:`punctuation`},[o(`,`),r(`br`)]),r(`span`,{class:`variable ml4`},`$transition-duration`),r(`span`,{class:`punctuation mr1`},`:`),r(`span`,{class:`number`},`0.2`),r(`span`,{class:`unit`},`s`),r(`span`,{class:`punctuation`},[o(`,`),r(`br`)]),r(`span`,{class:`variable ml4`},`$drawer-max-size`),r(`span`,{class:`punctuation mr1`},`:`),r(`span`,{class:`number`},`420`),r(`span`,{class:`unit`},[o(`px`),r(`br`)]),r(`span`,{class:`punctuation`},`);`)],-1)]],2),a(L,{class:`ma2 grey`,xl:``},{default:t(()=>[...A[4]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(R,{language:`css`,label:`CSS after`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[5]||=[o(`:root {
  --w-base-increment: 5px;
  --w-border-radius: 6px;
  --w-transition-duration: 0.2s;
  --w-drawer-max-size: 420px;
}
`,-1)]]),_:1},8,[`dark`])])]),r(`li`,f,[A[11]||=r(`div`,{class:`title3`},[o(`Move theme color overrides to `),r(`code`,null,`:root[data-theme]`),o(`.`)],-1),A[12]||=r(`p`,null,[o(`Theme colors are now normal CSS variables. Override them per theme, or
continue defining dynamic app colors through the Wave UI `),r(`code`,null,`colors`),o(`
config when you prefer JavaScript configuration.`)],-1),r(`div`,p,[r(`div`,{class:n([`ssh-pre`,c.$store.state.darkMode?`ssh-pre--dark`:`ssh-pre--light`]),"data-type":`css`,"data-label":`SCSS before`,style:{"min-width":`290px`}},[...A[8]||=[r(`pre`,{class:`ssh-pre__content`},[r(`span`,{class:`variable`},`$theme-light:`),r(`span`,{class:`punctuation ml1`},[o(`(`),r(`br`),r(`span`,{class:`keyword ml4`},`base-bg-color:`),r(`span`,{class:`color color--light`,style:{"background-color":`#fff`}},`#fff`),r(`span`,{class:`punctuation mr1`},[o(`,`),r(`br`)]),r(`span`,{class:`keyword ml4`},`base-color`),r(`span`,{class:`punctuation mr1`},`:`),r(`span`,{class:`color color--dark`,style:{"background-color":`#111`}},`#111`),r(`span`,{class:`punctuation mr1`},[o(`,`),r(`br`)]),r(`span`,{class:`keyword ml4`},`primary:`),r(`span`,{class:`color color--dark`,style:{"background-color":`#234781`}},[o(`#234781`),r(`br`)])]),r(`span`,{class:`punctuation ml1`},`);`)],-1)]],2),a(L,{class:`ma2 grey`,xl:``},{default:t(()=>[...A[9]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(R,{language:`css`,label:`CSS after`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[10]||=[o(`:root[data-theme="light"] {
  --w-base-bg-color: #fff;
  --w-base-color: #111;
  --w-primary-color: #234781;
}
`,-1)]]),_:1},8,[`dark`])])]),r(`li`,m,[A[14]||=r(`div`,{class:`title3`},`Update spacing, padding and radius customizations.`,-1),A[15]||=r(`p`,null,[o(`Utility classes and component default spacing now calculate from
`),r(`code`,null,`--w-base-increment`),o(`. Border radii use `),r(`code`,null,`--w-border-radius`),o(`.
Override these base variables instead of overriding each generated class.`)],-1),a(R,{language:`css`,label:`wave-ui-overrides.css`,dark:c.$store.state.darkMode},{default:t(()=>[...A[13]||=[o(`:root {
  --w-base-increment: 4px; /* ma3, px2, gap4 and component padding use this. */
  --w-border-radius: 4px;  /* Buttons, cards, form fields, tabs, etc. use this. */
}
`,-1)]]),_:1},8,[`dark`])]),r(`li`,h,[A[17]||=r(`div`,{class:`title3`},`Keep two build-time SCSS options if you were using them.`,-1),A[18]||=r(`p`,null,[o(`Two powerful options are still build-time only, same as in Wave UI 3:
`),r(`code`,null,`$css-scope`),o(` and `),r(`code`,null,`$use-layout-classes`),o(`. They control generated
selector specificity and whether layout utility classes exist at all, so
CSS variables cannot replace them.`)],-1),r(`div`,{class:n([`ssh-pre`,c.$store.state.darkMode?`ssh-pre--dark`:`ssh-pre--light`]),"data-type":`scss`,"data-label":`still build-time`,style:{"min-width":`290px`}},[...A[16]||=[r(`pre`,{class:`ssh-pre__content`},[r(`span`,{class:`keyword`},`@use`),r(`span`,{class:`quote mx1`},`"wave-ui/src/wave-ui/scss/variables"`),r(`span`,{class:`keyword`},`with`),r(`span`,{class:`punctuation mx1`},[o(`(`),r(`br`)]),r(`span`,{class:`variable ml4`},`$css-scope`),r(`span`,{class:`punctuation mr1`},`:`),r(`span`,{class:`quote`},`".my-app.w-app"`),r(`span`,{class:`punctuation mr1`},`,`),r(`span`,{class:`comment ml1`},[o(`// Only if you need.`),r(`br`)]),r(`span`,{class:`variable ml4`},`$use-layout-classes`),r(`span`,{class:`punctuation mr1`},`:`),r(`span`,{class:`boolean mr1`},`false`),r(`span`,{class:`comment ml1`},[o(`// Only if you need.`),r(`br`)]),r(`span`,{class:`punctuation`},`);`)],-1)]],2)]),r(`li`,g,[A[20]||=r(`div`,{class:`title3`},`Remove unnecessary Sass plumbing.`,-1),A[21]||=r(`p`,null,[o(`If you only used SCSS to override visual tokens, you can remove Wave UI
Sass `),r(`code`,null,`additionalData`),o(`, custom `),r(`code`,null,`_variables.scss`),o(` imports, and
source-package imports that existed only for styling overrides.`)],-1),a(R,{language:`js`,label:`main.js`,dark:c.$store.state.darkMode},{default:t(()=>[...A[19]||=[o(`import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import '@/wave-ui-overrides.css'
`,-1)]]),_:1},8,[`dark`])])]),r(`p`,_,[A[24]||=o(`For the full list of public CSS variables, see the
`,-1),a(z,{to:`/customization`},{default:t(()=>[...A[22]||=[o(`customization`,-1)]]),_:1}),A[25]||=o(` and
`,-1),a(z,{to:`/colors`},{default:t(()=>[...A[23]||=[o(`colors`,-1)]]),_:1}),A[26]||=o(` pages.
`,-1)])]),_:1}),a(B,null,{title:t(()=>[a(F,{class:`my0`,h2:``,slug:`simplified-w-tooltip-and-w-menu-usage`},{default:t(()=>[...A[28]||=[o(`2. Simplified w-tooltip and w-menu usage`,-1)]]),_:1})]),content:t(()=>[a(I,{class:`alert--info px5`},{default:t(()=>[...A[29]||=[r(`div`,{class:`title4 text-bold`},[o(`Activator slot no longer needs `),r(`code`,null,`v-on="on"`)],-1),r(`p`,null,[o(`In Wave UI 4, the `),r(`code`,null,`w-menu`),o(` and `),r(`code`,null,`w-tooltip`),o(` components auto-attach their event
listeners to the first element placed in the `),r(`code`,null,`#activator`),o(` slot. You no longer need to
destructure `),r(`code`,null,`{ on }`),o(` from the slot or bind `),r(`code`,null,`v-on="on"`),o(` to your activator element.
`)],-1)]]),_:1}),A[50]||=r(`div`,{class:`title3`},[o(`Remove `),r(`code`,null,`{ on }`),o(` and `),r(`code`,null,`v-on="on"`),o(` from the activator slot on both `),r(`code`,null,`w-menu`),o(` and `),r(`code`,null,`w-tooltip`),o(`.`)],-1),r(`div`,v,[a(R,{language:`html`,label:`Before (v3)`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[30]||=[o(`<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on">Open</w-button>
  </template>
  Menu content
</w-menu>`,-1)]]),_:1},8,[`dark`]),a(L,{class:`ma2 grey`,xl:``},{default:t(()=>[...A[31]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(R,{language:`html`,label:`After (v4)`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[32]||=[o(`<w-menu>
  <template #activator>
    <w-button>Open</w-button>
  </template>
  Menu content
</w-menu>`,-1)]]),_:1},8,[`dark`])]),r(`div`,y,[a(R,{language:`html`,label:`Before (v3)`,dark:c.$store.state.darkMode},{default:t(()=>[...A[33]||=[o(`<w-tooltip>
  <template #activator="{ on }">
    <span v-on="on">Hover me</span>
  </template>
  Tooltip text
</w-tooltip>`,-1)]]),_:1},8,[`dark`]),a(L,{class:`ma2 grey`,xl:``},{default:t(()=>[...A[34]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(R,{language:`html`,label:`After (v4)`,dark:c.$store.state.darkMode},{default:t(()=>[...A[35]||=[o(`<w-tooltip>
  <template #activator>
    <span>Hover me</span>
  </template>
  Tooltip text
</w-tooltip>
`,-1)]]),_:1},8,[`dark`])]),a(I,{class:`alert--info px5 mt8`},{default:t(()=>[...A[36]||=[r(`div`,{class:`title4 text-bold`},[o(`The activator is now the default slot; no `),r(`code`,null,`template(#activator)`),o(` needed`)],-1),r(`p`,null,[o(`In Wave UI 4, both `),r(`code`,null,`w-menu`),o(` and `),r(`code`,null,`w-tooltip`),o(` have been further simplified.
The element you want to trigger the popup on is now placed directly as the `),r(`strong`,null,`default slot`),o(`
— no `),r(`code`,null,`template(#activator)`),o(` wrapper required.
Tooltip/menu content is provided via a dedicated named slot (`),r(`code`,null,`#tooltip`),o(` / `),r(`code`,null,`#content`),o(`)
or, for simple strings, via a new `),r(`code`,null,`tooltip`),o(` prop.
`)],-1)]]),_:1}),A[51]||=r(`p`,{class:`mt2`},[o(`The old `),r(`code`,null,`#activator`),o(` slot still works (backward compatible) — cleanup is encouraged but not required.
`)],-1),r(`ol`,b,[r(`li`,x,[A[40]||=r(`div`,{class:`title3`},[r(`code`,null,`w-tooltip`),o(` with a simple string tooltip: best benefit`)],-1),r(`div`,S,[a(R,{language:`html`,label:`Before (v4 old)`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[37]||=[o(`<w-tooltip top>
  <template #activator="{ on }">
    <w-icon v-on="on">mdi mdi-heart</w-icon>
  </template>
  Hover text
</w-tooltip>`,-1)]]),_:1},8,[`dark`]),a(L,{class:`ma2 grey`,xl:``},{default:t(()=>[...A[38]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(R,{language:`html`,label:`After (v4 new)`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[39]||=[o(`<w-tooltip top tooltip="Hover text">
  <w-icon>mdi mdi-heart</w-icon>
</w-tooltip>
`,-1)]]),_:1},8,[`dark`])])]),r(`li`,C,[A[44]||=r(`div`,{class:`title3`},[r(`code`,null,`w-tooltip`),o(` with complex/rich tooltip content`)],-1),r(`div`,w,[a(R,{language:`html`,label:`Before (v4 old)`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[41]||=[o(`<w-tooltip top>
  <template #activator="{ on }">
    <w-icon v-on="on">mdi mdi-heart</w-icon>
  </template>
  Line 1<br>Line 2
</w-tooltip>`,-1)]]),_:1},8,[`dark`]),a(L,{class:`ma2 grey`,xl:``},{default:t(()=>[...A[42]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(R,{language:`html`,label:`After (v4 new)`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[43]||=[o(`<w-tooltip top>
  <w-icon>mdi mdi-heart</w-icon>
  <template #tooltip>
    Line 1<br>Line 2
  </template>
</w-tooltip>
`,-1)]]),_:1},8,[`dark`])])]),r(`li`,T,[A[48]||=r(`div`,{class:`title3`},[r(`code`,null,`w-menu`),o(` gets the same change for consistency`)],-1),r(`div`,E,[a(R,{language:`html`,label:`Before (v4 old)`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[45]||=[o(`<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on">Open</w-button>
  </template>
  Menu content
</w-menu>`,-1)]]),_:1},8,[`dark`]),a(L,{class:`ma2 grey`,xl:``},{default:t(()=>[...A[46]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(R,{language:`html`,label:`After (v4 new)`,dark:c.$store.state.darkMode,style:{"min-width":`290px`}},{default:t(()=>[...A[47]||=[o(`<w-menu>
  <w-button>Open</w-button>
  <template #content>
    Menu content
  </template>
</w-menu>`,-1)]]),_:1},8,[`dark`])])])]),a(I,{tip:``},{default:t(()=>[...A[49]||=[o(`The old code will still work, but it's recommended to clean it up to avoid confusion and be forward-compatible with future changes.`,-1)]]),_:1})]),_:1})]),_:1}),r(`div`,D,[r(`div`,O,[A[55]||=r(`strong`,{class:`size--lg`},`Thanks for using Wave UI!`,-1),r(`div`,k,[A[53]||=r(`span`,{class:`op7`},[o(`This major release includes 20+ improvements.`),r(`br`),o(`
Help us keep building by sponsoring the project.`)],-1),a(L,{class:`op2 ml1`},{default:t(()=>[...A[52]||=[o(`mdi mdi-heart`,-1)]]),_:1})]),a(H,{class:`bd1 pa4 mt2`,route:`https://github.com/sponsors/antoniandre`,target:`_blank`,text:``,round:``},{default:t(()=>[...A[54]||=[o(`⭐ Become a Sponsor`,-1)]]),_:1})])])])}var j=c({},[[`render`,A]]);export{j as default};