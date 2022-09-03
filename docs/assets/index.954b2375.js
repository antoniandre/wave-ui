import{r as a,o as _,f,a as t,w as n,b as e,e as o,_ as m,y as g}from"./index.7c0b9523.js";const w=e("p",null,[o("This tag is required in your app for Wave UI proper functioning."),e("br"),o(`
You should place it `),e("strong",null,"at the root of your app"),o(".")],-1),b=e("div",{class:"caption grey-light1"},`There should only be one <w-app> in your whole app.
`,-1),y=o(`<w-app>
  <!-- All your app's content goes here. -->
</w-app>
`),x=o("By default, the "),v=e("span",{class:"code"},"w-app",-1),k=o(` wrapper will have a flex layout with a column direction,
and a height of 100% of the full HTML document.`),S=e("br",null,null,-1),A=e("p",null,[o(`That will help a faster design in most cases, allowing a footer to always stick at the bottom
of the screen without hiding any content.`),e("br"),o(`
If you prefer to have a display: block layout, you can set the `),e("span",{class:"code"},"block"),o(` prop to true.
`)],-1),C=o("Examples of common layouts"),F=e("p",null,[o("You can explore the different examples source code and use one of them as a starter kit for your app."),e("br"),o(`
It can also be helpful to open it in a Codepen to quickly tweak it before you integrate it in your app. :)`)],-1),H=e("fieldset",{class:"app w-flex column"},[e("legend",null,"w-app"),e("section",{class:"header"},"Header"),e("div",{class:"w-flex grow"},[e("section",{class:"nav-menu block"},"Nav menu"),e("section",{class:"content block grow"},"Main content")]),e("section",{class:"footer"},"Footer")],-1),M=o(`#app
  w-app
    header Header
    w-flex(grow)
      aside Nav menu
      main.grow Main content
    footer Footer`),$=o(`<div id="app">
  <w-app>
    <header>Header</header>
    <w-flex grow>
      <aside>Nav menu</aside>
      <main class="grow">Main content</main>
    </w-flex>
    <footer>Footer</footer>
  </w-app>
</div>`),N=o(`/* Demo styles - can be discarded. */
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
`),j=e("fieldset",{class:"app w-flex column"},[e("legend",null,"w-app"),e("div",{class:"w-flex"},[e("section",{class:"nav-menu block"},"Nav menu"),e("div",{class:"w-flex column"},[e("section",{class:"header"},"Header"),e("section",{class:"content block grow"},"Main content"),e("section",{class:"footer"},"Footer")])])],-1),I=o(`#app
  w-app(row)
    aside Nav menu
    w-flex(column)
      header Header
      main.grow Main content
      footer Footer`),D=o(`<w-app id="app" row>
  <aside>Nav menu</aside>
  <w-flex column>
    <header>Header</header>
    <main class="grow">Main content</main>
    <footer>Footer</footer>
  </w-flex>
</w-app>`),B=o(`/* Demo styles - can be discarded. */
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
`),E=e("fieldset",{class:"app w-flex column"},[e("legend",null,"w-app"),e("section",{class:"header"},"Header"),e("section",{class:"content block grow"},"Main content"),e("section",{class:"footer"},"Footer")],-1),T=o(`#app
  w-app
    header Header
    main.grow Main content
    footer Footer`),q=o(`<div id="app">
  <w-app>
    <header>Header</header>
    <main class="grow">Main content</main>
    <footer>Footer</footer>
  </w-app>
</div>`),V=o(`/* Demo styles - can be discarded. */
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
`),Y=e("fieldset",{class:"app grow"},[e("legend",null,"w-app"),e("section",{class:"header"},"Header"),e("div",{class:"w-flex"},[e("section",{class:"content block grow"},"Main content"),e("section",{class:"nav-menu block"},"Nav menu")])],-1),z=o(`#app
  w-app(block)
    header Header
    w-flex
      main.grow.py12 Main content
      aside Nav menu
    footer Footer`),L=o(`<div id="app">
  <w-app block>
    <header>Header</header>
    <w-flex>
      <main class="grow py12">Main content</main>
      <aside>Nav menu</aside>
    </w-flex>
    <footer>Footer</footer>
  </w-app>
</div>`),P=o(`/* Demo styles - can be discarded. */
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
`),W={class:"mt6"},R=o(`In the above cases
`),U=o(`,
`),G=o(`,
`),J=o(`,
you always want the footer to stick to the bottom of the screen.`),K=e("br",null,null,-1),O=o(`
But if possible without covering the main content (so not `),Q=e("code",null,"position: absolute",-1),X=o(")."),Z=e("br",null,null,-1),ee=o(`
Also you don't know the exact height of the footer since it may change if the screen is too
small and the content flows onto multiple lines.`),oe=e("br",null,null,-1),ne=o(`
For all these reasons, the best layout is to have a `),te=e("code",null,"display: flex",-1),se=o(` with a
`),ae=e("code",null,"flex-direction: column",-1),le=o(" and "),ce=e("code",null,"flex-grow: 1",-1),ie=o(` on the main content
(and on the nav-menu in case 1 and 2).
`),re={class:"mt2"},de=o("In "),pe=o(`, you may also want to have
a flex column layout in the case your nav menu must remain in the screen while the main content
is scrolled, for instance.`),he=e("br",null,null,-1),ue=o(`
If there was a footer in this layout, it would start where the content stops and it would not be
pushed at the bottom of the container.
`),_e={class:"mt2"},fe=o("In "),me=o(`, if you don't need to have the
footer always at the bottom of the page, a simple block layout would suffice. For that you can add
the `),ge=e("code",null,"block",-1),we=o(" prop on the "),be=e("code",null,"w-app",-1),ye=o(` component.
`),xe=o("In all the layouts above, and in your app, the "),ve=e("code",null,"w-flex",-1),ke=o(` component will be very helpful to
quickly switch to a flex layout. You can pass it props such as `),Se=e("code",null,"column",-1),Ae=o(", "),Ce=e("code",null,"wrap",-1),Fe=o(`,
`),He=e("code",null,"basis-zero",-1),Me=o(` and more. Discover all the options in the
`),$e=o("Layout > Flex"),Ne=o(" knowledge base page.");function je(c,r){const p=a("ssh-pre"),d=a("alert"),h=a("title-link"),l=a("example"),s=a("w-badge"),i=a("w-flex"),u=a("router-link");return _(),f("div",null,[w,b,t(p,{language:"html-vue"},{default:n(()=>[y]),_:1}),t(d,{class:"mt8 mb2",info:""},{default:n(()=>[x,v,k,S]),_:1}),A,t(h,{h2:""},{default:n(()=>[C]),_:1}),F,t(i,{class:"common-layouts mt6",gap:6,wrap:"","basis-zero":""},{default:n(()=>[t(s,{"bg-color":"orange",color:"white",overlap:"","model-value":1},{default:n(()=>[t(l,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:n(()=>[M]),html:n(()=>[$]),css:n(()=>[N]),default:n(()=>[H]),_:1})]),_:1}),t(s,{"bg-color":"orange",color:"white",overlap:"","model-value":2},{default:n(()=>[t(l,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:n(()=>[I]),html:n(()=>[D]),css:n(()=>[B]),default:n(()=>[j]),_:1})]),_:1}),t(s,{"bg-color":"orange",color:"white",overlap:"","model-value":3},{default:n(()=>[t(l,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:n(()=>[T]),html:n(()=>[q]),css:n(()=>[V]),default:n(()=>[E]),_:1})]),_:1}),t(s,{"bg-color":"orange",color:"white",overlap:"","model-value":4},{default:n(()=>[t(l,{class:"ma0 grow","content-class":"pa0","blank-codepen":["html","pug","css"]},{pug:n(()=>[z]),html:n(()=>[L]),css:n(()=>[P]),default:n(()=>[Y]),_:1})]),_:1})]),_:1}),e("ul",W,[e("li",null,[R,t(s,{inline:"","bg-color":"orange",color:"white","model-value":1}),U,t(s,{inline:"","bg-color":"orange",color:"white","model-value":2}),G,t(s,{inline:"","bg-color":"orange",color:"white","model-value":3}),J,K,O,Q,X,Z,ee,oe,ne,te,se,ae,le,ce,ie]),e("li",re,[de,t(s,{inline:"","bg-color":"orange",color:"white","model-value":4}),pe,he,ue]),e("li",_e,[fe,t(s,{inline:"","bg-color":"orange",color:"white","model-value":3}),me,ge,we,be,ye]),t(d,{tip:""},{default:n(()=>[xe,ve,ke,Se,Ae,Ce,Fe,He,Me,t(u,{class:"mx1",to:"/layout--flex"},{default:n(()=>[$e]),_:1}),Ne]),_:1})])])}const Ie={};var De=m(Ie,[["render",je]]);const Be=e("div",{class:"w-divider my12"},null,-1),Ee=o("API");function Te(c,r,p,d,h,l){const s=a("title-link"),i=a("component-api");return _(),f("div",null,[Be,t(s,{class:"title1",h2:""},{default:n(()=>[Ee]),_:1}),t(i,{class:"mt0",items:l.props,descriptions:c.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(i,{items:c.slots,title:"Slots"},null,8,["items"]),t(i,{items:l.events,title:"Events"},null,8,["items"])])}const qe={block:"Sets the layout to <code>display: block</code>. By default the layout is: <code>display: flex</code>, <code>flex-direction: column</code>.",row:"Sets the layout to display in a row when using the default flex layout (column by default).",alignCenter:"Applies the CSS property: <code>align-items: center;</code>.",alignEnd:"Applies the CSS property: <code>align-items: flex-end;</code>.",justifyCenter:"Applies the CSS property: <code>justify-content: center;</code>.",justifyEnd:"Applies the CSS property: <code>justify-content: end;</code>.",justifySpaceBetween:"Applies the CSS property: <code>justify-content: space-between;</code>.",justifySpaceAround:"Applies the CSS property: <code>justify-content: space-around;</code>.",justifySpaceEvenly:"Applies the CSS property: <code>justify-content: space-evenly;</code>.",textCenter:"Applies the CSS property: <code>text-align: center;</code>.",textRight:"Applies the CSS property: <code>text-align: right;</code>.",dark:!1},Ve={default:{description:"The content of the app."}},Ye={},ze={data:()=>({propsDescs:qe,slots:Ve}),computed:{props(){return g.props},events(){return(g.emits||[]).reduce((c,r)=>(c[r]={description:Ye[r]||""})&&c,{})}}};var Le=m(ze,[["render",Te]]);const Pe=o("w-app");function We(c,r,p,d,h,l){const s=a("ui-component-title"),i=a("examples"),u=a("api");return _(),f("main",null,[t(s,null,{default:n(()=>[Pe]),_:1}),t(i),t(u)])}const Re={components:{Examples:De,Api:Le}};var Ge=m(Re,[["render",We]]);export{Ge as default};
