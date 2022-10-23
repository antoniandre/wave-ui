import{r as l,o as h,f as m,a as t,w as n,b as o,d as e,_,u as g}from"./index.ffdea089.js";const w=e("p",null,[o("This tag is required in your app for Wave UI proper functioning."),e("br"),o(`
You should place it `),e("strong",null,"at the root of your app"),o(".")],-1),b=e("div",{class:"caption grey-light1"},`There should only be one <w-app> in your whole app.
`,-1),y=e("span",{class:"code"},"w-app",-1),x=e("br",null,null,-1),v=e("p",null,[o(`That will help a faster design in most cases, allowing a footer to always stick at the bottom
of the screen without hiding any content.`),e("br"),o(`
If you prefer to have a display: block layout, you can set the `),e("span",{class:"code"},"block"),o(` prop to true.
`)],-1),k=e("p",null,[o("You can explore the different examples source code and use one of them as a starter kit for your app."),e("br"),o(`
It can also be helpful to open it in a Codepen to quickly tweak it before you integrate it in your app. :)`)],-1),S=e("fieldset",{class:"app w-flex column"},[e("legend",null,"w-app"),e("section",{class:"header"},"Header"),e("div",{class:"w-flex grow"},[e("section",{class:"nav-menu block"},"Nav menu"),e("section",{class:"content block grow"},"Main content")]),e("section",{class:"footer"},"Footer")],-1),A=e("fieldset",{class:"app w-flex column"},[e("legend",null,"w-app"),e("div",{class:"w-flex"},[e("section",{class:"nav-menu block"},"Nav menu"),e("div",{class:"w-flex column"},[e("section",{class:"header"},"Header"),e("section",{class:"content block grow"},"Main content"),e("section",{class:"footer"},"Footer")])])],-1),C=e("fieldset",{class:"app w-flex column"},[e("legend",null,"w-app"),e("section",{class:"header"},"Header"),e("section",{class:"content block grow"},"Main content"),e("section",{class:"footer"},"Footer")],-1),F=e("fieldset",{class:"app grow"},[e("legend",null,"w-app"),e("section",{class:"header"},"Header"),e("div",{class:"w-flex"},[e("section",{class:"content block grow"},"Main content"),e("section",{class:"nav-menu block"},"Nav menu")])],-1),H={class:"mt6"},M=e("br",null,null,-1),N=e("code",null,"position: absolute",-1),$=e("br",null,null,-1),j=e("br",null,null,-1),I=e("code",null,"display: flex",-1),D=e("code",null,"flex-direction: column",-1),B=e("code",null,"flex-grow: 1",-1),E={class:"mt2"},T=e("br",null,null,-1),q={class:"mt2"},V=e("code",null,"block",-1),Y=e("code",null,"w-app",-1),z=e("code",null,"w-flex",-1),L=e("code",null,"column",-1),P=e("code",null,"wrap",-1),W=e("code",null,"basis-zero",-1);function R(c,i){const p=l("ssh-pre"),d=l("alert"),u=l("title-link"),s=l("example"),a=l("w-badge"),r=l("w-flex"),f=l("router-link");return h(),m("div",null,[w,b,t(p,{language:"html-vue"},{default:n(()=>[o(`<w-app>
  <!-- All your app's content goes here. -->
</w-app>
`)]),_:1}),t(d,{class:"mt8 mb2",info:""},{default:n(()=>[o("By default, the "),y,o(` wrapper will have a flex layout with a column direction,
and a height of 100% of the full HTML document.`),x]),_:1}),v,t(u,{h2:""},{default:n(()=>[o("Examples of common layouts")]),_:1}),k,t(r,{class:"common-layouts mt6",gap:6,wrap:"","basis-zero":""},{default:n(()=>[t(a,{"bg-color":"orange",color:"white",overlap:"","model-value":1},{default:n(()=>[t(s,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:n(()=>[o(`#app
  w-app
    header Header
    w-flex(grow)
      aside Nav menu
      main.grow Main content
    footer Footer`)]),html:n(()=>[o(`<div id="app">
  <w-app>
    <header>Header</header>
    <w-flex grow>
      <aside>Nav menu</aside>
      <main class="grow">Main content</main>
    </w-flex>
    <footer>Footer</footer>
  </w-app>
</div>`)]),css:n(()=>[o(`/* Demo styles - can be discarded. */
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
`)]),default:n(()=>[S]),_:1})]),_:1}),t(a,{"bg-color":"orange",color:"white",overlap:"","model-value":2},{default:n(()=>[t(s,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:n(()=>[o(`#app
  w-app(row)
    aside Nav menu
    w-flex(column)
      header Header
      main.grow Main content
      footer Footer`)]),html:n(()=>[o(`<w-app id="app" row>
  <aside>Nav menu</aside>
  <w-flex column>
    <header>Header</header>
    <main class="grow">Main content</main>
    <footer>Footer</footer>
  </w-flex>
</w-app>`)]),css:n(()=>[o(`/* Demo styles - can be discarded. */
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
`)]),default:n(()=>[A]),_:1})]),_:1}),t(a,{"bg-color":"orange",color:"white",overlap:"","model-value":3},{default:n(()=>[t(s,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:n(()=>[o(`#app
  w-app
    header Header
    main.grow Main content
    footer Footer`)]),html:n(()=>[o(`<div id="app">
  <w-app>
    <header>Header</header>
    <main class="grow">Main content</main>
    <footer>Footer</footer>
  </w-app>
</div>`)]),css:n(()=>[o(`/* Demo styles - can be discarded. */
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
`)]),default:n(()=>[C]),_:1})]),_:1}),t(a,{"bg-color":"orange",color:"white",overlap:"","model-value":4},{default:n(()=>[t(s,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:n(()=>[o(`#app
  w-app(block)
    header Header
    w-flex
      main.grow.py12 Main content
      aside Nav menu
    footer Footer`)]),html:n(()=>[o(`<div id="app">
  <w-app block>
    <header>Header</header>
    <w-flex>
      <main class="grow py12">Main content</main>
      <aside>Nav menu</aside>
    </w-flex>
    <footer>Footer</footer>
  </w-app>
</div>`)]),css:n(()=>[o(`/* Demo styles - can be discarded. */
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
`)]),default:n(()=>[F]),_:1})]),_:1})]),_:1}),e("ul",H,[e("li",null,[o(`In the above cases
`),t(a,{inline:"","bg-color":"orange",color:"white","model-value":1}),o(`,
`),t(a,{inline:"","bg-color":"orange",color:"white","model-value":2}),o(`,
`),t(a,{inline:"","bg-color":"orange",color:"white","model-value":3}),o(`,
you always want the footer to stick to the bottom of the screen.`),M,o(`
But if possible without covering the main content (so not `),N,o(")."),$,o(`
Also you don't know the exact height of the footer since it may change if the screen is too
small and the content flows onto multiple lines.`),j,o(`
For all these reasons, the best layout is to have a `),I,o(` with a
`),D,o(" and "),B,o(` on the main content
(and on the nav-menu in case 1 and 2).
`)]),e("li",E,[o("In "),t(a,{inline:"","bg-color":"orange",color:"white","model-value":4}),o(`, you may also want to have
a flex column layout in the case your nav menu must remain in the screen while the main content
is scrolled, for instance.`),T,o(`
If there was a footer in this layout, it would start where the content stops and it would not be
pushed at the bottom of the container.
`)]),e("li",q,[o("In "),t(a,{inline:"","bg-color":"orange",color:"white","model-value":3}),o(`, if you don't need to have the
footer always at the bottom of the page, a simple block layout would suffice. For that you can add
the `),V,o(" prop on the "),Y,o(` component.
`)]),t(d,{tip:""},{default:n(()=>[o("In all the layouts above, and in your app, the "),z,o(` component will be very helpful to
quickly switch to a flex layout. You can pass it props such as `),L,o(", "),P,o(`,
`),W,o(` and more. Discover all the options in the
`),t(f,{class:"mx1",to:"/layout--flex"},{default:n(()=>[o("Layout > Flex")]),_:1}),o(" knowledge base page.")]),_:1})])])}const U={},G=_(U,[["render",R]]),J=e("div",{class:"w-divider my12"},null,-1);function K(c,i,p,d,u,s){const a=l("title-link"),r=l("component-api");return h(),m("div",null,[J,t(a,{class:"title1",h2:""},{default:n(()=>[o("API")]),_:1}),t(r,{class:"mt0",items:s.props,descriptions:c.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(r,{items:c.slots,title:"Slots"},null,8,["items"]),t(r,{items:s.events,title:"Events"},null,8,["items"])])}const O={block:"Sets the layout to <code>display: block</code>. By default the layout is: <code>display: flex</code>, <code>flex-direction: column</code>.",row:"Sets the layout to display in a row when using the default flex layout (column by default).",alignCenter:"Applies the CSS property: <code>align-items: center;</code>.",alignEnd:"Applies the CSS property: <code>align-items: flex-end;</code>.",justifyCenter:"Applies the CSS property: <code>justify-content: center;</code>.",justifyEnd:"Applies the CSS property: <code>justify-content: end;</code>.",justifySpaceBetween:"Applies the CSS property: <code>justify-content: space-between;</code>.",justifySpaceAround:"Applies the CSS property: <code>justify-content: space-around;</code>.",justifySpaceEvenly:"Applies the CSS property: <code>justify-content: space-evenly;</code>.",textCenter:"Applies the CSS property: <code>text-align: center;</code>.",textRight:"Applies the CSS property: <code>text-align: right;</code>.",dark:!1},Q={default:{description:"The content of the app."}},X={},Z={data:()=>({propsDescs:O,slots:Q}),computed:{props(){return g.props},events(){return(g.emits||[]).reduce((c,i)=>(c[i]={description:X[i]||""})&&c,{})}}},ee=_(Z,[["render",K]]);function oe(c,i,p,d,u,s){const a=l("ui-component-title"),r=l("examples"),f=l("api");return h(),m("main",null,[t(a,null,{default:n(()=>[o("w-app")]),_:1}),t(r),t(f)])}const ne={components:{Examples:G,Api:ee}},ae=_(ne,[["render",oe]]);export{ae as default};
