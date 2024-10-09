import{r,o as g,g as w,d as o,b as n,a as l,w as t,_ as b,u as c}from"./index-GCsNrMay.js";const x={class:"title2 red"},v={class:"mt6"},k={class:"mt2"},S={class:"mt2"};function A(a,e){const p=r("w-tag"),f=r("ssh-pre"),u=r("alert"),d=r("title-link"),i=r("example"),s=r("w-badge"),m=r("w-flex"),y=r("router-link");return g(),w("div",null,[o("div",x,[e[2]||(e[2]=n("Required in Wave UI ")),l(p,{class:"error--bg",round:""},{default:t(()=>e[0]||(e[0]=[n("< 3.0")])),_:1}),e[3]||(e[3]=n(", removed in ")),l(p,{class:"error--bg",round:""},{default:t(()=>e[1]||(e[1]=[n("3.0")])),_:1}),e[4]||(e[4]=n("."))]),e[63]||(e[63]=o("p",{class:"mt6"},[n("This tag is required in your app for Wave UI proper functioning."),o("br"),n(`
You should place it `),o("strong",null,"at the root of your app"),n(".")],-1)),e[64]||(e[64]=o("div",{class:"caption grey-light1"},`There should only be one <w-app> in your whole app.
`,-1)),l(f,{language:"html-vue",dark:a.$store.state.darkMode},{default:t(()=>e[5]||(e[5]=[n(`<w-app>
  <!-- All your app's content goes here. -->
</w-app>
`)])),_:1},8,["dark"]),l(u,{class:"mt8 mb2",info:""},{default:t(()=>e[6]||(e[6]=[n("By default, the "),o("span",{class:"code"},"w-app",-1),n(` wrapper will have a flex layout with a column direction,
and a height of 100% of the full HTML document.`),o("br",null,null,-1)])),_:1}),e[65]||(e[65]=o("p",null,[n(`That will help a faster design in most cases, allowing a footer to always stick at the bottom
of the screen without hiding any content.`),o("br"),n(`
If you prefer to have a display: block layout, you can set the `),o("span",{class:"code"},"block"),n(` prop to true.
`)],-1)),l(d,{h2:""},{default:t(()=>e[7]||(e[7]=[n("Examples of common layouts")])),_:1}),e[66]||(e[66]=o("p",null,[n("You can explore the different examples source code and use one of them as a starter kit for your app."),o("br"),n(`
It can also be helpful to open it in a Codepen to quickly tweak it before you integrate it in your app. :)`)],-1)),l(m,{class:"common-layouts mt6",gap:6,wrap:"","basis-zero":""},{default:t(()=>[l(s,{"bg-color":"orange",color:"white",overlap:"","model-value":1},{default:t(()=>[l(i,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:t(()=>e[8]||(e[8]=[n(`#app
  header Header
  w-flex(grow)
    aside Nav menu
    main.grow Main content
  footer Footer`)])),html:t(()=>e[9]||(e[9]=[n(`<div id="app">
  <header>Header</header>
  <w-flex grow>
    <aside>Nav menu</aside>
    <main class="grow">Main content</main>
  </w-flex>
  <footer>Footer</footer>
</div>`)])),css:t(()=>e[10]||(e[10]=[n(`/* Demo styles - can be discarded. */
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
`)])),default:t(()=>[e[11]||(e[11]=o("fieldset",{class:"app w-flex column"},[o("legend",null,"w-app"),o("section",{class:"header"},"Header"),o("div",{class:"w-flex grow"},[o("section",{class:"nav-menu block"},"Nav menu"),o("section",{class:"content block grow"},"Main content")]),o("section",{class:"footer"},"Footer")],-1))]),_:1})]),_:1}),l(s,{"bg-color":"orange",color:"white",overlap:"","model-value":2},{default:t(()=>[l(i,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:t(()=>e[12]||(e[12]=[n(`#app.row
  aside Nav menu
  w-flex(column)
    header Header
    main.grow Main content
    footer Footer`)])),html:t(()=>e[13]||(e[13]=[n(`<div id="app" class="row">
  <aside>Nav menu</aside>
  <w-flex column>
    <header>Header</header>
    <main class="grow">Main content</main>
    <footer>Footer</footer>
  </w-flex>
</div>`)])),css:t(()=>e[14]||(e[14]=[n(`/* Demo styles - can be discarded. */
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
`)])),default:t(()=>[e[15]||(e[15]=o("fieldset",{class:"app w-flex column"},[o("legend",null,"w-app"),o("div",{class:"w-flex"},[o("section",{class:"nav-menu block"},"Nav menu"),o("div",{class:"w-flex column"},[o("section",{class:"header"},"Header"),o("section",{class:"content block grow"},"Main content"),o("section",{class:"footer"},"Footer")])])],-1))]),_:1})]),_:1}),l(s,{"bg-color":"orange",color:"white",overlap:"","model-value":3},{default:t(()=>[l(i,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:t(()=>e[16]||(e[16]=[n(`#app
  header Header
  main.grow Main content
  footer Footer`)])),html:t(()=>e[17]||(e[17]=[n(`<div id="app">
  <header>Header</header>
  <main class="grow">Main content</main>
  <footer>Footer</footer>
</div>`)])),css:t(()=>e[18]||(e[18]=[n(`/* Demo styles - can be discarded. */
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
`)])),default:t(()=>[e[19]||(e[19]=o("fieldset",{class:"app w-flex column"},[o("legend",null,"w-app"),o("section",{class:"header"},"Header"),o("section",{class:"content block grow"},"Main content"),o("section",{class:"footer"},"Footer")],-1))]),_:1})]),_:1}),l(s,{"bg-color":"orange",color:"white",overlap:"","model-value":4},{default:t(()=>[l(i,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:t(()=>e[20]||(e[20]=[n(`#app.d-block
  header Header
  w-flex
    main.grow.py12 Main content
    aside Nav menu
  footer Footer`)])),html:t(()=>e[21]||(e[21]=[n(`<div id="app" class="d-block">
  <header>Header</header>
  <w-flex>
    <main class="grow py12">Main content</main>
    <aside>Nav menu</aside>
  </w-flex>
  <footer>Footer</footer>
</div>`)])),css:t(()=>e[22]||(e[22]=[n(`/* Demo styles - can be discarded. */
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
`)])),default:t(()=>[e[23]||(e[23]=o("fieldset",{class:"app grow"},[o("legend",null,"w-app"),o("section",{class:"header"},"Header"),o("div",{class:"w-flex"},[o("section",{class:"content block grow"},"Main content"),o("section",{class:"nav-menu block"},"Nav menu")])],-1))]),_:1})]),_:1})]),_:1}),o("ul",v,[o("li",null,[e[24]||(e[24]=n(`In the above cases
`)),l(s,{inline:"","bg-color":"orange",color:"white","model-value":1}),e[25]||(e[25]=n(`,
`)),l(s,{inline:"","bg-color":"orange",color:"white","model-value":2}),e[26]||(e[26]=n(`,
`)),l(s,{inline:"","bg-color":"orange",color:"white","model-value":3}),e[27]||(e[27]=n(`,
you always want the footer to stick to the bottom of the screen.`)),e[28]||(e[28]=o("br",null,null,-1)),e[29]||(e[29]=n(`
But if possible without covering the main content (so not `)),e[30]||(e[30]=o("code",null,"position: absolute",-1)),e[31]||(e[31]=n(").")),e[32]||(e[32]=o("br",null,null,-1)),e[33]||(e[33]=n(`
Also you don't know the exact height of the footer since it may change if the screen is too
small and the content flows onto multiple lines.`)),e[34]||(e[34]=o("br",null,null,-1)),e[35]||(e[35]=n(`
For all these reasons, the best layout is to have a `)),e[36]||(e[36]=o("code",null,"display: flex",-1)),e[37]||(e[37]=n(` with a
`)),e[38]||(e[38]=o("code",null,"flex-direction: column",-1)),e[39]||(e[39]=n(" and ")),e[40]||(e[40]=o("code",null,"flex-grow: 1",-1)),e[41]||(e[41]=n(` on the main content
(and on the nav-menu in case 1 and 2).
`))]),o("li",k,[e[42]||(e[42]=n("In ")),l(s,{inline:"","bg-color":"orange",color:"white","model-value":4}),e[43]||(e[43]=n(`, you may also want to have
a flex column layout in the case your nav menu must remain in the screen while the main content
is scrolled, for instance.`)),e[44]||(e[44]=o("br",null,null,-1)),e[45]||(e[45]=n(`
If there was a footer in this layout, it would start where the content stops and it would not be
pushed at the bottom of the container.
`))]),o("li",S,[e[46]||(e[46]=n("In ")),l(s,{inline:"","bg-color":"orange",color:"white","model-value":3}),e[47]||(e[47]=n(`, if you don't need to have the
footer always at the bottom of the page, a simple block layout would suffice. For that you can add
the `)),e[48]||(e[48]=o("code",null,"block",-1)),e[49]||(e[49]=n(" prop on the ")),e[50]||(e[50]=o("code",null,"w-app",-1)),e[51]||(e[51]=n(` component.
`))]),l(u,{tip:""},{default:t(()=>[e[53]||(e[53]=n("In all the layouts above, and in your app, the ")),e[54]||(e[54]=o("code",null,"w-flex",-1)),e[55]||(e[55]=n(` component will be very helpful to
quickly switch to a flex layout. You can pass it props such as `)),e[56]||(e[56]=o("code",null,"column",-1)),e[57]||(e[57]=n(", ")),e[58]||(e[58]=o("code",null,"wrap",-1)),e[59]||(e[59]=n(`,
`)),e[60]||(e[60]=o("code",null,"basis-zero",-1)),e[61]||(e[61]=n(` and more. Discover all the options in the
`)),l(y,{class:"mx1",to:"/layout--flex"},{default:t(()=>e[52]||(e[52]=[n("Layout > Flex")])),_:1}),e[62]||(e[62]=n(" knowledge base page."))]),_:1})])])}const C={},F=b(C,[["render",A]]);function M(a,e,p,f,u,d){const i=r("title-link"),s=r("component-api");return g(),w("div",null,[e[1]||(e[1]=o("div",{class:"w-divider my12"},null,-1)),l(i,{class:"title1",h2:""},{default:t(()=>e[0]||(e[0]=[n("API")])),_:1}),l(s,{class:"mt0",items:d.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(s,{items:a.slots,title:"Slots"},null,8,["items"]),l(s,{items:d.events,title:"Events"},null,8,["items"])])}const H={block:"Sets the layout to <code>display: block</code>. By default the layout is: <code>display: flex</code>, <code>flex-direction: column</code>.",row:"Sets the layout to display in a row when using the default flex layout (column by default).",alignCenter:"Applies the CSS property: <code>align-items: center;</code>.",alignEnd:"Applies the CSS property: <code>align-items: flex-end;</code>.",justifyCenter:"Applies the CSS property: <code>justify-content: center;</code>.",justifyEnd:"Applies the CSS property: <code>justify-content: end;</code>.",justifySpaceBetween:"Applies the CSS property: <code>justify-content: space-between;</code>.",justifySpaceAround:"Applies the CSS property: <code>justify-content: space-around;</code>.",justifySpaceEvenly:"Applies the CSS property: <code>justify-content: space-evenly;</code>.",textCenter:"Applies the CSS property: <code>text-align: center;</code>.",textRight:"Applies the CSS property: <code>text-align: right;</code>."},N={default:{description:"The content of the app."}},$={},h={data:()=>({propsDescs:H,slots:N}),computed:{props(){return c.props},events(){return(c.emits||[]).reduce((a,e)=>(a[e]={description:$[e]||""})&&a,{})}}},I=b(h,[["render",M]]);function j(a,e,p,f,u,d){const i=r("ui-component-title"),s=r("examples"),m=r("api");return g(),w("main",null,[l(i,{slug:"w-app",deprecated:""},{default:t(()=>e[0]||(e[0]=[n("w-app")])),_:1}),l(s),l(m)])}const D={components:{Examples:F,Api:I}},E=b(D,[["render",j]]);export{E as default};
