import{N as e,W as t,c as n,d as r,g as i,h as a,k as o}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as s}from"./_plugin-vue_export-helper-B80Cc4Ui.js";var c={class:`mt6`},l={class:`mt2`},u={class:`mt2`};function d(s,d){let f=e(`title-link`),p=e(`alert`),m=e(`ssh-pre`),h=e(`w-accordion-item`),g=e(`w-accordion`),_=e(`example`),v=e(`w-badge`),y=e(`w-flex`),b=e(`router-link`);return o(),r(`main`,null,[i(f,{class:`mt4`,h1:``},{default:t(()=>[...d[0]||=[a(`Common app layouts`,-1)]]),_:1}),d[63]||=n(`p`,null,[a(`Wave UI places a `),n(`span`,{class:`code`},`.w-app`),a(` wrapping class at the root of your app.
`)],-1),i(p,{class:`mt8 mb2`,info:``},{default:t(()=>[...d[1]||=[a(`By default, the `,-1),n(`span`,{class:`code`},`w-app`,-1),a(` wrapper will have a flex layout with a column direction,
and a height equal to 100% of the viewport.`,-1),n(`br`,null,null,-1)]]),_:1}),d[64]||=n(`p`,null,[a(`That will help a faster design in most cases, allowing a footer to always stick at the bottom
of the screen without hiding any content.`),n(`br`),a(`
If you prefer to have a display: block layout, you can set the `),n(`span`,{class:`code`},`d-block`),a(` class on the .w-app.
`)],-1),i(f,{h2:``,slug:`setting-app-classes`},{default:t(()=>[...d[2]||=[a(`Setting app classes`,-1)]]),_:1}),d[65]||=n(`p`,null,[a(`You can add custom classes to the `),n(`span`,{class:`code`},`.w-app`),a(` element using either the Wave UI config
or the `),n(`span`,{class:`code`},`$waveui.setAppClasses()`),a(` method.
`)],-1),i(g,{"expand-icon-rotate90":``,"title-class":`pl0`},{default:t(()=>[i(h,{title:`Via Wave UI config`},{default:t(()=>[d[4]||=n(`p`,null,`You can set custom classes via the Wave UI configuration on app initialization:`,-1),i(m,{class:`mt4`,language:`js`,label:`Javascript`,dark:s.$store.state.darkMode},{default:t(()=>[...d[3]||=[a(`import WaveUI from 'wave-ui'

app.use(WaveUI, {
  css: {
    appClasses: 'row' // or ['row', 'my-custom-class']
  }
})`,-1)]]),_:1},8,[`dark`])]),_:1}),i(h,{title:`Via $waveui.setAppClasses()`},{default:t(()=>[d[6]||=n(`p`,null,`You can also dynamically set app classes at any time during your app's lifecycle:`,-1),i(m,{class:`mt4`,language:`js`,label:`Javascript`,dark:s.$store.state.darkMode},{default:t(()=>[...d[5]||=[a(`// Add classes
$waveui.setAppClasses('row')
$waveui.setAppClasses('row', 'my-custom-class')

// Remove all custom classes
$waveui.setAppClasses()
`,-1)]]),_:1},8,[`dark`])]),_:1})]),_:1}),i(f,{h2:``},{default:t(()=>[...d[7]||=[a(`Examples of common layouts`,-1)]]),_:1}),d[66]||=n(`p`,null,[a(`You can explore the different examples source code and use one of them as a starter kit for your app.`),n(`br`),a(`
It can also be helpful to open it in a Codepen to quickly tweak it before you integrate it in your app. :)`)],-1),i(y,{class:`common-layouts mt6`,gap:6,wrap:``,"basis-zero":``},{default:t(()=>[i(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":1},{default:t(()=>[i(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...d[8]||=[a(`//- Directly at the root.
header Header
w-flex(grow)
  aside Nav menu
  main.grow Main content
footer Footer`,-1)]]),html:t(()=>[...d[9]||=[a(`<!-- Directly at the root. -->
<header>Header</header>
<w-flex grow>
  <aside>Nav menu</aside>
  <main class="grow">Main content</main>
</w-flex>
<footer>Footer</footer>`,-1)]]),css:t(()=>[...d[10]||=[a(`/* Demo styles - can be discarded. */
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
`,-1)]]),default:t(()=>[d[11]||=n(`fieldset`,{class:`app w-flex column`},[n(`legend`,null,`w-app`),n(`section`,{class:`header`},`Header`),n(`div`,{class:`w-flex grow`},[n(`section`,{class:`nav-menu block`},`Nav menu`),n(`section`,{class:`content block grow`},`Main content`)]),n(`section`,{class:`footer`},`Footer`)],-1)]),_:1})]),_:1}),i(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":2},{default:t(()=>[i(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...d[12]||=[a(`//- Set the .row class on the .w-app.
aside Nav menu
w-flex(column)
  header Header
  main.grow Main content
  footer Footer`,-1)]]),html:t(()=>[...d[13]||=[a(`<!-- Set the .row class on the .w-app. -->
<aside>Nav menu</aside>
<w-flex column>
  <header>Header</header>
  <main class="grow">Main content</main>
  <footer>Footer</footer>
</w-flex>`,-1)]]),css:t(()=>[...d[14]||=[a(`/* Demo styles - can be discarded. */
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
`,-1)]]),default:t(()=>[d[15]||=n(`fieldset`,{class:`app w-flex column`},[n(`legend`,null,`w-app`),n(`div`,{class:`w-flex`},[n(`section`,{class:`nav-menu block`},`Nav menu`),n(`div`,{class:`w-flex column`},[n(`section`,{class:`header`},`Header`),n(`section`,{class:`content block grow`},`Main content`),n(`section`,{class:`footer`},`Footer`)])])],-1)]),_:1})]),_:1}),i(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":3},{default:t(()=>[i(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...d[16]||=[a(`//- Directly at the root.
header Header
main.grow Main content
footer Footer`,-1)]]),html:t(()=>[...d[17]||=[a(`<!-- Directly at the root. -->
<header>Header</header>
<main class="grow">Main content</main>
<footer>Footer</footer>`,-1)]]),css:t(()=>[...d[18]||=[a(`/* Demo styles - can be discarded. */
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
`,-1)]]),default:t(()=>[d[19]||=n(`fieldset`,{class:`app w-flex column`},[n(`legend`,null,`w-app`),n(`section`,{class:`header`},`Header`),n(`section`,{class:`content block grow`},`Main content`),n(`section`,{class:`footer`},`Footer`)],-1)]),_:1})]),_:1}),i(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":4},{default:t(()=>[i(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...d[20]||=[a(`//- Set the .d-block class on the .w-app.
header Header
w-flex
  main.grow.py12 Main content
  aside Nav menu
footer Footer`,-1)]]),html:t(()=>[...d[21]||=[a(`<!-- Set the .d-block class on the .w-app. -->
<header>Header</header>
<w-flex>
  <main class="grow py12">Main content</main>
  <aside>Nav menu</aside>
</w-flex>
<footer>Footer</footer>`,-1)]]),css:t(()=>[...d[22]||=[a(`/* Demo styles - can be discarded. */
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
`,-1)]]),default:t(()=>[d[23]||=n(`fieldset`,{class:`app grow`},[n(`legend`,null,`w-app`),n(`section`,{class:`header`},`Header`),n(`div`,{class:`w-flex`},[n(`section`,{class:`content block grow`},`Main content`),n(`section`,{class:`nav-menu block`},`Nav menu`)])],-1)]),_:1})]),_:1})]),_:1}),n(`ul`,c,[n(`li`,null,[d[24]||=a(`In the above cases
`,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":1}),d[25]||=a(`,
`,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":2}),d[26]||=a(`,
`,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":3}),d[27]||=a(`,
you always want the footer to stick to the bottom of the screen.`,-1),d[28]||=n(`br`,null,null,-1),d[29]||=a(`
But if possible without covering the main content (so not `,-1),d[30]||=n(`code`,null,`position: absolute`,-1),d[31]||=a(`).`,-1),d[32]||=n(`br`,null,null,-1),d[33]||=a(`
Also you don't know the exact height of the footer since it may change if the screen is too
small and the content flows onto multiple lines.`,-1),d[34]||=n(`br`,null,null,-1),d[35]||=a(`
For all these reasons, the best layout is to have a `,-1),d[36]||=n(`code`,null,`display: flex`,-1),d[37]||=a(` with a
`,-1),d[38]||=n(`code`,null,`flex-direction: column`,-1),d[39]||=a(` and `,-1),d[40]||=n(`code`,null,`flex-grow: 1`,-1),d[41]||=a(` on the main content
(and on the nav-menu in case 1 and 2).
`,-1)]),n(`li`,l,[d[42]||=a(`In `,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":4}),d[43]||=a(`, you may also want to have
a flex column layout in the case your nav menu must remain in the screen while the main content
is scrolled, for instance.`,-1),d[44]||=n(`br`,null,null,-1),d[45]||=a(`
If there was a footer in this layout, it would start where the content stops and it would not be
pushed at the bottom of the container.
`,-1)]),n(`li`,u,[d[46]||=a(`In `,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":3}),d[47]||=a(`, if you don't need to have the
footer always at the bottom of the page, a simple block layout would suffice. For that you can add
the `,-1),d[48]||=n(`code`,null,`block`,-1),d[49]||=a(` prop on the `,-1),d[50]||=n(`code`,null,`w-app`,-1),d[51]||=a(` component.
`,-1)]),i(p,{tip:``},{default:t(()=>[d[53]||=a(`In all the layouts above, and in your app, the `,-1),d[54]||=n(`code`,null,`w-flex`,-1),d[55]||=a(` component will be very helpful to
quickly switch to a flex layout. You can pass it props such as `,-1),d[56]||=n(`code`,null,`column`,-1),d[57]||=a(`, `,-1),d[58]||=n(`code`,null,`wrap`,-1),d[59]||=a(`,
`,-1),d[60]||=n(`code`,null,`basis-zero`,-1),d[61]||=a(` and more. Discover all the options in the
`,-1),i(b,{class:`mx1`,to:`/layout--flex`},{default:t(()=>[...d[52]||=[a(`Layout > Flex`,-1)]]),_:1}),d[62]||=a(` knowledge base page.`,-1)]),_:1})])])}var f=s({},[[`render`,d]]);export{f as default};