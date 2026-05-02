import{A as e,G as t,P as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as s}from"./_plugin-vue_export-helper-B80Cc4Ui.js";var c={class:`mt6`},l={class:`mt2`},u={class:`mt2`};function d(s,d){let f=n(`title-link`),p=n(`alert`),m=n(`ssh-pre`),h=n(`w-accordion-item`),g=n(`w-accordion`),_=n(`example`),v=n(`w-badge`),y=n(`w-flex`),b=n(`router-link`);return e(),i(`main`,null,[a(f,{class:`mt4`,h1:``},{default:t(()=>[...d[0]||=[o(`Common app layouts`,-1)]]),_:1}),d[63]||=r(`p`,null,[o(`Wave UI places a `),r(`span`,{class:`code`},`.w-app`),o(` wrapping class at the root of your app.
`)],-1),a(p,{class:`mt8 mb2`,info:``},{default:t(()=>[...d[1]||=[o(`By default, the `,-1),r(`span`,{class:`code`},`w-app`,-1),o(` wrapper will have a flex layout with a column direction,
and a height equal to 100% of the viewport.`,-1),r(`br`,null,null,-1)]]),_:1}),d[64]||=r(`p`,null,[o(`That will help a faster design in most cases, allowing a footer to always stick at the bottom
of the screen without hiding any content.`),r(`br`),o(`
If you prefer to have a display: block layout, you can set the `),r(`span`,{class:`code`},`d-block`),o(` class on the .w-app.
`)],-1),a(f,{h2:``,slug:`setting-app-classes`},{default:t(()=>[...d[2]||=[o(`Setting app classes`,-1)]]),_:1}),d[65]||=r(`p`,null,[o(`You can add custom classes to the `),r(`span`,{class:`code`},`.w-app`),o(` element using either the Wave UI config
or the `),r(`span`,{class:`code`},`$waveui.setAppClasses()`),o(` method.
`)],-1),a(g,{"expand-icon-rotate90":``,"title-class":`pl0`},{default:t(()=>[a(h,{title:`Via Wave UI config`},{default:t(()=>[d[4]||=r(`p`,null,`You can set custom classes via the Wave UI configuration on app initialization:`,-1),a(m,{class:`mt4`,language:`js`,label:`Javascript`,dark:s.$store.state.darkMode},{default:t(()=>[...d[3]||=[o(`import WaveUI from 'wave-ui'

app.use(WaveUI, {
  css: {
    appClasses: 'row' // or ['row', 'my-custom-class']
  }
})`,-1)]]),_:1},8,[`dark`])]),_:1}),a(h,{title:`Via $waveui.setAppClasses()`},{default:t(()=>[d[6]||=r(`p`,null,`You can also dynamically set app classes at any time during your app's lifecycle:`,-1),a(m,{class:`mt4`,language:`js`,label:`Javascript`,dark:s.$store.state.darkMode},{default:t(()=>[...d[5]||=[o(`// Add classes
$waveui.setAppClasses('row')
$waveui.setAppClasses('row', 'my-custom-class')

// Remove all custom classes
$waveui.setAppClasses()
`,-1)]]),_:1},8,[`dark`])]),_:1})]),_:1}),a(f,{h2:``},{default:t(()=>[...d[7]||=[o(`Examples of common layouts`,-1)]]),_:1}),d[66]||=r(`p`,null,[o(`You can explore the different examples source code and use one of them as a starter kit for your app.`),r(`br`),o(`
It can also be helpful to open it in a Codepen to quickly tweak it before you integrate it in your app. :)`)],-1),a(y,{class:`common-layouts mt6`,gap:6,wrap:``,"basis-zero":``},{default:t(()=>[a(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":1},{default:t(()=>[a(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...d[8]||=[o(`//- Directly at the root.
header Header
w-flex(grow)
  aside Nav menu
  main.grow Main content
footer Footer`,-1)]]),html:t(()=>[...d[9]||=[o(`<!-- Directly at the root. -->
<header>Header</header>
<w-flex grow>
  <aside>Nav menu</aside>
  <main class="grow">Main content</main>
</w-flex>
<footer>Footer</footer>`,-1)]]),css:t(()=>[...d[10]||=[o(`/* Demo styles - can be discarded. */
.w-app {padding: 4px;background-color: #fffeed;}
header, footer, aside, main {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
header, footer {background-color: #e9f8fe;min-height: 60px;}
aside {background-color: #fef2ff;}
main {background-color: #efffed;}
`,-1)]]),default:t(()=>[d[11]||=r(`fieldset`,{class:`app w-flex column`},[r(`legend`,null,`w-app`),r(`section`,{class:`header`},`Header`),r(`div`,{class:`w-flex grow`},[r(`section`,{class:`nav-menu block`},`Nav menu`),r(`section`,{class:`content block grow`},`Main content`)]),r(`section`,{class:`footer`},`Footer`)],-1)]),_:1})]),_:1}),a(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":2},{default:t(()=>[a(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...d[12]||=[o(`//- Set the .row class on the .w-app.
aside Nav menu
w-flex(column)
  header Header
  main.grow Main content
  footer Footer`,-1)]]),html:t(()=>[...d[13]||=[o(`<!-- Set the .row class on the .w-app. -->
<aside>Nav menu</aside>
<w-flex column>
  <header>Header</header>
  <main class="grow">Main content</main>
  <footer>Footer</footer>
</w-flex>`,-1)]]),css:t(()=>[...d[14]||=[o(`/* Demo styles - can be discarded. */
.w-app {padding: 4px;background-color: #fffeed;}
header, footer, aside, main {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
header, footer {background-color: #e9f8fe;min-height: 60px;}
aside {background-color: #fef2ff;}
main {background-color: #efffed;}
`,-1)]]),default:t(()=>[d[15]||=r(`fieldset`,{class:`app w-flex column`},[r(`legend`,null,`w-app`),r(`div`,{class:`w-flex`},[r(`section`,{class:`nav-menu block`},`Nav menu`),r(`div`,{class:`w-flex column`},[r(`section`,{class:`header`},`Header`),r(`section`,{class:`content block grow`},`Main content`),r(`section`,{class:`footer`},`Footer`)])])],-1)]),_:1})]),_:1}),a(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":3},{default:t(()=>[a(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...d[16]||=[o(`//- Directly at the root.
header Header
main.grow Main content
footer Footer`,-1)]]),html:t(()=>[...d[17]||=[o(`<!-- Directly at the root. -->
<header>Header</header>
<main class="grow">Main content</main>
<footer>Footer</footer>`,-1)]]),css:t(()=>[...d[18]||=[o(`/* Demo styles - can be discarded. */
.w-app {padding: 4px;background-color: #fffeed;}
header, footer, aside, main {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
header, footer {background-color: #e9f8fe;min-height: 60px;}
aside {background-color: #fef2ff;}
main {background-color: #efffed;}
`,-1)]]),default:t(()=>[d[19]||=r(`fieldset`,{class:`app w-flex column`},[r(`legend`,null,`w-app`),r(`section`,{class:`header`},`Header`),r(`section`,{class:`content block grow`},`Main content`),r(`section`,{class:`footer`},`Footer`)],-1)]),_:1})]),_:1}),a(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":4},{default:t(()=>[a(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...d[20]||=[o(`//- Set the .d-block class on the .w-app.
header Header
w-flex
  main.grow.py12 Main content
  aside Nav menu
footer Footer`,-1)]]),html:t(()=>[...d[21]||=[o(`<!-- Set the .d-block class on the .w-app. -->
<header>Header</header>
<w-flex>
  <main class="grow py12">Main content</main>
  <aside>Nav menu</aside>
</w-flex>
<footer>Footer</footer>`,-1)]]),css:t(()=>[...d[22]||=[o(`/* Demo styles - can be discarded. */
.w-app {padding: 4px;background-color: #fffeed;}
header, footer, aside, main {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
header, footer {background-color: #e9f8fe;min-height: 60px;}
aside {background-color: #fef2ff;}
main {background-color: #efffed;}
`,-1)]]),default:t(()=>[d[23]||=r(`fieldset`,{class:`app grow`},[r(`legend`,null,`w-app`),r(`section`,{class:`header`},`Header`),r(`div`,{class:`w-flex`},[r(`section`,{class:`content block grow`},`Main content`),r(`section`,{class:`nav-menu block`},`Nav menu`)])],-1)]),_:1})]),_:1})]),_:1}),r(`ul`,c,[r(`li`,null,[d[24]||=o(`In the above cases
`,-1),a(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":1}),d[25]||=o(`,
`,-1),a(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":2}),d[26]||=o(`,
`,-1),a(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":3}),d[27]||=o(`,
you always want the footer to stick to the bottom of the screen.`,-1),d[28]||=r(`br`,null,null,-1),d[29]||=o(`
But if possible without covering the main content (so not `,-1),d[30]||=r(`code`,null,`position: absolute`,-1),d[31]||=o(`).`,-1),d[32]||=r(`br`,null,null,-1),d[33]||=o(`
Also you don't know the exact height of the footer since it may change if the screen is too
small and the content flows onto multiple lines.`,-1),d[34]||=r(`br`,null,null,-1),d[35]||=o(`
For all these reasons, the best layout is to have a `,-1),d[36]||=r(`code`,null,`display: flex`,-1),d[37]||=o(` with a
`,-1),d[38]||=r(`code`,null,`flex-direction: column`,-1),d[39]||=o(` and `,-1),d[40]||=r(`code`,null,`flex-grow: 1`,-1),d[41]||=o(` on the main content
(and on the nav-menu in case 1 and 2).
`,-1)]),r(`li`,l,[d[42]||=o(`In `,-1),a(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":4}),d[43]||=o(`, you may also want to have
a flex column layout in the case your nav menu must remain in the screen while the main content
is scrolled, for instance.`,-1),d[44]||=r(`br`,null,null,-1),d[45]||=o(`
If there was a footer in this layout, it would start where the content stops and it would not be
pushed at the bottom of the container.
`,-1)]),r(`li`,u,[d[46]||=o(`In `,-1),a(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":3}),d[47]||=o(`, if you don't need to have the
footer always at the bottom of the page, a simple block layout would suffice. For that you can add
the `,-1),d[48]||=r(`code`,null,`block`,-1),d[49]||=o(` prop on the `,-1),d[50]||=r(`code`,null,`w-app`,-1),d[51]||=o(` component.
`,-1)]),a(p,{tip:``},{default:t(()=>[d[53]||=o(`In all the layouts above, and in your app, the `,-1),d[54]||=r(`code`,null,`w-flex`,-1),d[55]||=o(` component will be very helpful to
quickly switch to a flex layout. You can pass it props such as `,-1),d[56]||=r(`code`,null,`column`,-1),d[57]||=o(`, `,-1),d[58]||=r(`code`,null,`wrap`,-1),d[59]||=o(`,
`,-1),d[60]||=r(`code`,null,`basis-zero`,-1),d[61]||=o(` and more. Discover all the options in the
`,-1),a(b,{class:`mx1`,to:`/layout--flex`},{default:t(()=>[...d[52]||=[o(`Layout > Flex`,-1)]]),_:1}),d[62]||=o(` knowledge base page.`,-1)]),_:1})])])}var f=s({},[[`render`,d]]);export{f as default};