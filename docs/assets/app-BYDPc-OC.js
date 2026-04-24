import{N as e,U as t,c as n,d as r,g as i,h as a,k as o}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as s}from"./_plugin-vue_export-helper-S3RvzygF.js";import{z as c}from"./index-CI5qOTMg.js";var l={class:`title2 red`},u={class:`mt6`},d={class:`mt2`},f={class:`mt2`};function p(s,c){let p=e(`w-tag`),m=e(`ssh-pre`),h=e(`alert`),g=e(`title-link`),_=e(`example`),v=e(`w-badge`),y=e(`w-flex`),b=e(`router-link`);return o(),r(`div`,null,[n(`div`,l,[c[2]||=a(`Required in Wave UI `,-1),i(p,{class:`error--bg`,round:``},{default:t(()=>[...c[0]||=[a(`< 3.0`,-1)]]),_:1}),c[3]||=a(`, removed in `,-1),i(p,{class:`error--bg`,round:``},{default:t(()=>[...c[1]||=[a(`3.0`,-1)]]),_:1}),c[4]||=a(`.`,-1)]),c[63]||=n(`p`,{class:`mt6`},[a(`This tag is required in your app for Wave UI proper functioning.`),n(`br`),a(`
You should place it `),n(`strong`,null,`at the root of your app`),a(`.`)],-1),c[64]||=n(`div`,{class:`caption grey-light1`},`There should only be one <w-app> in your whole app.
`,-1),i(m,{language:`html-vue`,dark:s.$store.state.darkMode},{default:t(()=>[...c[5]||=[a(`<w-app>
  <!-- All your app's content goes here. -->
</w-app>
`,-1)]]),_:1},8,[`dark`]),i(h,{class:`mt8 mb2`,info:``},{default:t(()=>[...c[6]||=[a(`By default, the `,-1),n(`span`,{class:`code`},`w-app`,-1),a(` wrapper will have a flex layout with a column direction,
and a height of 100% of the full HTML document.`,-1),n(`br`,null,null,-1)]]),_:1}),c[65]||=n(`p`,null,[a(`That will help a faster design in most cases, allowing a footer to always stick at the bottom
of the screen without hiding any content.`),n(`br`),a(`
If you prefer to have a display: block layout, you can set the `),n(`span`,{class:`code`},`block`),a(` prop to true.
`)],-1),i(g,{h2:``},{default:t(()=>[...c[7]||=[a(`Examples of common layouts`,-1)]]),_:1}),c[66]||=n(`p`,null,[a(`You can explore the different examples source code and use one of them as a starter kit for your app.`),n(`br`),a(`
It can also be helpful to open it in a Codepen to quickly tweak it before you integrate it in your app. :)`)],-1),i(y,{class:`common-layouts mt6`,gap:6,wrap:``,"basis-zero":``},{default:t(()=>[i(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":1},{default:t(()=>[i(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...c[8]||=[a(`#app
  header Header
  w-flex(grow)
    aside Nav menu
    main.grow Main content
  footer Footer`,-1)]]),html:t(()=>[...c[9]||=[a(`<div id="app">
  <header>Header</header>
  <w-flex grow>
    <aside>Nav menu</aside>
    <main class="grow">Main content</main>
  </w-flex>
  <footer>Footer</footer>
</div>`,-1)]]),css:t(()=>[...c[10]||=[a(`/* Demo styles - can be discarded. */
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
`,-1)]]),default:t(()=>[c[11]||=n(`fieldset`,{class:`app w-flex column`},[n(`legend`,null,`w-app`),n(`section`,{class:`header`},`Header`),n(`div`,{class:`w-flex grow`},[n(`section`,{class:`nav-menu block`},`Nav menu`),n(`section`,{class:`content block grow`},`Main content`)]),n(`section`,{class:`footer`},`Footer`)],-1)]),_:1})]),_:1}),i(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":2},{default:t(()=>[i(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...c[12]||=[a(`#app.row
  aside Nav menu
  w-flex(column)
    header Header
    main.grow Main content
    footer Footer`,-1)]]),html:t(()=>[...c[13]||=[a(`<div id="app" class="row">
  <aside>Nav menu</aside>
  <w-flex column>
    <header>Header</header>
    <main class="grow">Main content</main>
    <footer>Footer</footer>
  </w-flex>
</div>`,-1)]]),css:t(()=>[...c[14]||=[a(`/* Demo styles - can be discarded. */
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
`,-1)]]),default:t(()=>[c[15]||=n(`fieldset`,{class:`app w-flex column`},[n(`legend`,null,`w-app`),n(`div`,{class:`w-flex`},[n(`section`,{class:`nav-menu block`},`Nav menu`),n(`div`,{class:`w-flex column`},[n(`section`,{class:`header`},`Header`),n(`section`,{class:`content block grow`},`Main content`),n(`section`,{class:`footer`},`Footer`)])])],-1)]),_:1})]),_:1}),i(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":3},{default:t(()=>[i(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...c[16]||=[a(`#app
  header Header
  main.grow Main content
  footer Footer`,-1)]]),html:t(()=>[...c[17]||=[a(`<div id="app">
  <header>Header</header>
  <main class="grow">Main content</main>
  <footer>Footer</footer>
</div>`,-1)]]),css:t(()=>[...c[18]||=[a(`/* Demo styles - can be discarded. */
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
`,-1)]]),default:t(()=>[c[19]||=n(`fieldset`,{class:`app w-flex column`},[n(`legend`,null,`w-app`),n(`section`,{class:`header`},`Header`),n(`section`,{class:`content block grow`},`Main content`),n(`section`,{class:`footer`},`Footer`)],-1)]),_:1})]),_:1}),i(v,{"bg-color":`orange`,color:`white`,overlap:``,"model-value":4},{default:t(()=>[i(_,{class:`ma0 grow`,"content-class":`pa0`,"blank-codepen":[`html`,`pug`,`css`]},{pug:t(()=>[...c[20]||=[a(`#app.d-block
  header Header
  w-flex
    main.grow.py12 Main content
    aside Nav menu
  footer Footer`,-1)]]),html:t(()=>[...c[21]||=[a(`<div id="app" class="d-block">
  <header>Header</header>
  <w-flex>
    <main class="grow py12">Main content</main>
    <aside>Nav menu</aside>
  </w-flex>
  <footer>Footer</footer>
</div>`,-1)]]),css:t(()=>[...c[22]||=[a(`/* Demo styles - can be discarded. */
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
`,-1)]]),default:t(()=>[c[23]||=n(`fieldset`,{class:`app grow`},[n(`legend`,null,`w-app`),n(`section`,{class:`header`},`Header`),n(`div`,{class:`w-flex`},[n(`section`,{class:`content block grow`},`Main content`),n(`section`,{class:`nav-menu block`},`Nav menu`)])],-1)]),_:1})]),_:1})]),_:1}),n(`ul`,u,[n(`li`,null,[c[24]||=a(`In the above cases
`,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":1}),c[25]||=a(`,
`,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":2}),c[26]||=a(`,
`,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":3}),c[27]||=a(`,
you always want the footer to stick to the bottom of the screen.`,-1),c[28]||=n(`br`,null,null,-1),c[29]||=a(`
But if possible without covering the main content (so not `,-1),c[30]||=n(`code`,null,`position: absolute`,-1),c[31]||=a(`).`,-1),c[32]||=n(`br`,null,null,-1),c[33]||=a(`
Also you don't know the exact height of the footer since it may change if the screen is too
small and the content flows onto multiple lines.`,-1),c[34]||=n(`br`,null,null,-1),c[35]||=a(`
For all these reasons, the best layout is to have a `,-1),c[36]||=n(`code`,null,`display: flex`,-1),c[37]||=a(` with a
`,-1),c[38]||=n(`code`,null,`flex-direction: column`,-1),c[39]||=a(` and `,-1),c[40]||=n(`code`,null,`flex-grow: 1`,-1),c[41]||=a(` on the main content
(and on the nav-menu in case 1 and 2).
`,-1)]),n(`li`,d,[c[42]||=a(`In `,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":4}),c[43]||=a(`, you may also want to have
a flex column layout in the case your nav menu must remain in the screen while the main content
is scrolled, for instance.`,-1),c[44]||=n(`br`,null,null,-1),c[45]||=a(`
If there was a footer in this layout, it would start where the content stops and it would not be
pushed at the bottom of the container.
`,-1)]),n(`li`,f,[c[46]||=a(`In `,-1),i(v,{inline:``,"bg-color":`orange`,color:`white`,"model-value":3}),c[47]||=a(`, if you don't need to have the
footer always at the bottom of the page, a simple block layout would suffice. For that you can add
the `,-1),c[48]||=n(`code`,null,`block`,-1),c[49]||=a(` prop on the `,-1),c[50]||=n(`code`,null,`w-app`,-1),c[51]||=a(` component.
`,-1)]),i(h,{tip:``},{default:t(()=>[c[53]||=a(`In all the layouts above, and in your app, the `,-1),c[54]||=n(`code`,null,`w-flex`,-1),c[55]||=a(` component will be very helpful to
quickly switch to a flex layout. You can pass it props such as `,-1),c[56]||=n(`code`,null,`column`,-1),c[57]||=a(`, `,-1),c[58]||=n(`code`,null,`wrap`,-1),c[59]||=a(`,
`,-1),c[60]||=n(`code`,null,`basis-zero`,-1),c[61]||=a(` and more. Discover all the options in the
`,-1),i(b,{class:`mx1`,to:`/layout--flex`},{default:t(()=>[...c[52]||=[a(`Layout > Flex`,-1)]]),_:1}),c[62]||=a(` knowledge base page.`,-1)]),_:1})])])}var m=s({},[[`render`,p]]);function h(s,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={block:`Sets the layout to <code>display: block</code>. By default the layout is: <code>display: flex</code>, <code>flex-direction: column</code>.`,row:`Sets the layout to display in a row when using the default flex layout (column by default).`,alignCenter:`Applies the CSS property: <code>align-items: center;</code>.`,alignEnd:`Applies the CSS property: <code>align-items: flex-end;</code>.`,justifyCenter:`Applies the CSS property: <code>justify-content: center;</code>.`,justifyEnd:`Applies the CSS property: <code>justify-content: end;</code>.`,justifySpaceBetween:`Applies the CSS property: <code>justify-content: space-between;</code>.`,justifySpaceAround:`Applies the CSS property: <code>justify-content: space-around;</code>.`,justifySpaceEvenly:`Applies the CSS property: <code>justify-content: space-evenly;</code>.`,textCenter:`Applies the CSS property: <code>text-align: center;</code>.`,textRight:`Applies the CSS property: <code>text-align: right;</code>.`},_={default:{description:`The content of the app.`}},v={},y=s({data:()=>({propsDescs:g,slots:_}),computed:{props(){return c.props},events(){return(c.emits||[]).reduce((e,t)=>(e[t]={description:v[t]||``},e),{})}}},[[`render`,h]]);function b(n,s,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return o(),r(`main`,null,[i(f,{slug:`w-app`,deprecated:``},{default:t(()=>[...s[0]||=[a(`w-app`,-1)]]),_:1}),i(p),i(m)])}var x=s({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};