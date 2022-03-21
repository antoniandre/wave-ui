import{n as o,b as a}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("div",{staticClass:"caption grey-light1"},[e._v(`There should only be one <w-app> in your whole app.
`)]),t("ssh-pre",{attrs:{language:"html-vue"}},[e._v(`<w-app>
  <!-- All your app's content goes here. -->
</w-app>
`)]),t("alert",{staticClass:"mt8 mb2",attrs:{info:""}},[e._v("By default, the "),t("span",{staticClass:"code"},[e._v("w-app")]),e._v(` wrapper will have a flex layout with a column direction,
and a height of 100% of the full HTML document.`),t("br")]),e._m(1),t("title-link",{attrs:{h2:""}},[e._v("Examples of common layouts")]),e._m(2),t("w-flex",{staticClass:"common-layouts mt6",attrs:{gap:6,wrap:"","basis-zero":""}},[t("w-badge",{attrs:{"bg-color":"orange",color:"white",overlap:"",value:1}},[t("example",{staticClass:"ma0 grow",attrs:{"content-class":"pa0","blank-codepen":["html","pug","css"]},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-app#app
  header Header
  w-flex(grow)
    aside Nav menu
    main.grow Main content
  footer Footer`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-app id="app">
  <header>Header</header>
  <w-flex grow>
    <aside>Nav menu</aside>
    <main class="grow">Main content</main>
  </w-flex>
  <footer>Footer</footer>
</w-app>`)]},proxy:!0},{key:"css",fn:function(){return[e._v(`/* Demo styles - can be discarded. */
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
`)]},proxy:!0}])},[t("fieldset",{staticClass:"app w-flex column"},[t("legend",[e._v("w-app")]),t("section",{staticClass:"header"},[e._v("Header")]),t("div",{staticClass:"w-flex grow"},[t("section",{staticClass:"nav-menu block"},[e._v("Nav menu")]),t("section",{staticClass:"content block grow"},[e._v("Main content")])]),t("section",{staticClass:"footer"},[e._v("Footer")])])])],1),t("w-badge",{attrs:{"bg-color":"orange",color:"white",overlap:"",value:2}},[t("example",{staticClass:"ma0 grow",attrs:{"content-class":"pa0","blank-codepen":["html","pug","css"]},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-app#app(row)
  aside Nav menu
  w-flex(grow)
    header Header
    main.grow Main content
    footer Footer`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-app id="app" row>
  <aside>Nav menu</aside>
  <w-flex column>
    <header>Header</header>
    <main class="grow">Main content</main>
    <footer>Footer</footer>
  </w-flex>
</w-app>`)]},proxy:!0},{key:"css",fn:function(){return[e._v(`/* Demo styles - can be discarded. */
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
`)]},proxy:!0}])},[t("fieldset",{staticClass:"app w-flex column"},[t("legend",[e._v("w-app")]),t("div",{staticClass:"w-flex"},[t("section",{staticClass:"nav-menu block"},[e._v("Nav menu")]),t("div",{staticClass:"w-flex column grow"},[t("section",{staticClass:"header"},[e._v("Header")]),t("section",{staticClass:"content block grow"},[e._v("Main content")]),t("section",{staticClass:"footer"},[e._v("Footer")])])])])])],1),t("w-badge",{attrs:{"bg-color":"orange",color:"white",overlap:"",value:3}},[t("example",{staticClass:"ma0 grow",attrs:{"content-class":"pa0","blank-codepen":["html","pug","css"]},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-app#app
  header Header
  main.grow Main content
  footer Footer`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-app id="app">
  <header>Header</header>
  <main class="grow">Main content</main>
  <footer>Footer</footer>
</w-app>`)]},proxy:!0},{key:"css",fn:function(){return[e._v(`/* Demo styles - can be discarded. */
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
`)]},proxy:!0}])},[t("fieldset",{staticClass:"app w-flex column"},[t("legend",[e._v("w-app")]),t("section",{staticClass:"header"},[e._v("Header")]),t("section",{staticClass:"content block grow"},[e._v("Main content")]),t("section",{staticClass:"footer"},[e._v("Footer")])])])],1),t("w-badge",{attrs:{"bg-color":"orange",color:"white",overlap:"",value:4}},[t("example",{staticClass:"ma0 grow",attrs:{"content-class":"pa0","blank-codepen":["html","pug","css"]},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-app#app(block)
  header Header
  w-flex
    main.grow.py12 Main content
    aside Nav menu
  footer Footer`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-app id="app" block>
  <header>Header</header>
  <w-flex>
    <main class="grow py12">Main content</main>
    <aside>Nav menu</aside>
  </w-flex>
  <footer>Footer</footer>
</w-app>`)]},proxy:!0},{key:"css",fn:function(){return[e._v(`/* Demo styles - can be discarded. */
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
`)]},proxy:!0}])},[t("fieldset",{staticClass:"app grow"},[t("legend",[e._v("w-app")]),t("section",{staticClass:"header"},[e._v("Header")]),t("div",{staticClass:"w-flex"},[t("section",{staticClass:"content block grow"},[e._v("Main content")]),t("section",{staticClass:"nav-menu block"},[e._v("Nav menu")])])])])],1)],1),t("ul",{staticClass:"mt6"},[t("li",[e._v(`In the above cases
`),t("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:1}}),e._v(`,
`),t("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:2}}),e._v(`,
`),t("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:3}}),e._v(`,
you always want the footer to stick to the bottom of the screen.`),t("br"),e._v(`
But if possible without covering the main content (so not `),t("code",[e._v("position: absolute")]),e._v(")."),t("br"),e._v(`
Also you don't know the exact height of the footer since it may change if the screen is too
small and the content flows onto multiple lines.`),t("br"),e._v(`
For all these reasons, the best layout is to have a `),t("code",[e._v("display: flex")]),e._v(` with a
`),t("code",[e._v("flex-direction: column")]),e._v(" and "),t("code",[e._v("flex-grow: 1")]),e._v(` on the main content
(and on the nav-menu in case 1 and 2).
`)],1),t("li",{staticClass:"mt2"},[e._v("In "),t("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:4}}),e._v(`, you may also want to have
a flex column layout in the case your nav menu must remain in the screen while the main content
is scrolled, for instance.`),t("br"),e._v(`
If there was a footer in this layout, it would start where the content stops and it would not be
pushed at the bottom of the container.
`)],1),t("li",{staticClass:"mt2"},[e._v("In "),t("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:3}}),e._v(`, if you don't need to have the
footer always at the bottom of the page, a simple block layout would suffice. For that you can add
the `),t("code",[e._v("block")]),e._v(" prop on the "),t("code",[e._v("w-app")]),e._v(` component.
`)],1),t("alert",{attrs:{tip:""}},[e._v("In all the layouts above, and in your app, the "),t("code",[e._v("w-flex")]),e._v(` component will be very helpful to
quickly switch to a flex layout. You can pass it props such as `),t("code",[e._v("column")]),e._v(", "),t("code",[e._v("wrap")]),e._v(`,
`),t("code",[e._v("basis-zero")]),e._v(` and more. Discover all the options in the
`),t("router-link",{staticClass:"mx1",attrs:{to:"/layout--flex"}},[e._v("Layout > Flex")]),e._v(" knowledge base page.")],1)],1)],1)},l=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("This tag is required in your app for Wave UI proper functioning."),t("br"),e._v(`
You should place it `),t("strong",[e._v("at the root of your app")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(`That will help a faster design in most cases, allowing a footer to always stick at the bottom
of the screen without hiding any content.`),t("br"),e._v(`
If you prefer to have a display: block layout, you can set the `),t("span",{staticClass:"code"},[e._v("block")]),e._v(` prop to true.
`)])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("You can explore the different examples source code and use one of them as a starter kit for your app."),t("br"),e._v(`
It can also be helpful to open it in a Codepen to quickly tweak it before you integrate it in your app. :)`)])}];const p={},r={};var d=o(p,i,l,!1,u,null,null,null);function u(e){for(let n in r)this[n]=r[n]}var f=function(){return d.exports}(),v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},_=[];const h={block:"Sets the layout to <code>display: block</code>. By default the layout is: <code>display: flex</code>, <code>flex-direction: column</code>.",row:"Sets the layout to display in a row when using the default flex layout (column by default).",alignCenter:"Applies the CSS property: <code>align-items: center;</code>.",alignEnd:"Applies the CSS property: <code>align-items: flex-end;</code>.",justifyCenter:"Applies the CSS property: <code>justify-content: center;</code>.",justifyEnd:"Applies the CSS property: <code>justify-content: end;</code>.",justifySpaceBetween:"Applies the CSS property: <code>justify-content: space-between;</code>.",justifySpaceAround:"Applies the CSS property: <code>justify-content: space-around;</code>.",justifySpaceEvenly:"Applies the CSS property: <code>justify-content: space-evenly;</code>.",textCenter:"Applies the CSS property: <code>text-align: center;</code>.",textRight:"Applies the CSS property: <code>text-align: right;</code>.",dark:!1},m={default:{description:"The content of the app."}},g={},w={data:()=>({propsDescs:h,slots:m}),computed:{props(){return a.props},events(){return(a.emits||[]).reduce((e,n)=>(e[n]={description:g[n]||""})&&e,{})}}},s={};var y=o(w,v,_,!1,b,null,null,null);function b(e){for(let n in s)this[n]=s[n]}var x=function(){return y.exports}(),k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("ui-component-title",[e._v("w-app")]),t("examples"),t("api")],1)},C=[];const S={components:{Examples:f,Api:x}},c={};var $=o(S,k,C,!1,F,null,null,null);function F(e){for(let n in c)this[n]=c[n]}var j=function(){return $.exports}();export{j as default};
