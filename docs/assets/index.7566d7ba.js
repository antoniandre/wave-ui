import{n as s,d as n}from"./index.e31dd236.js";var c=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),e._m(1),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-breadcrumbs(:items="items")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" />')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]},proxy:!0}])},[t("w-breadcrumbs",{attrs:{items:e.items}})],1),t("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(2),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-breadcrumbs(:items="items" color="orange")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" color="orange" />')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]},proxy:!0}])},[t("w-breadcrumbs",{attrs:{items:e.items,color:"orange"}})],1),t("title-link",{attrs:{h3:""}},[e._v("Separator color")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-breadcrumbs(:items="items" separator-color="orange")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" separator-color="orange" />')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]},proxy:!0}])},[t("w-breadcrumbs",{attrs:{items:e.items,"separator-color":"orange"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Custom separator")]),e._m(3),t("title-link",{attrs:{h3:""}},[e._v("Icon")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-breadcrumbs(:items="items" icon="mdi mdi-arrow-right")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" icon="mdi mdi-arrow-right" />')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]},proxy:!0}])},[t("w-breadcrumbs",{attrs:{items:e.items,icon:"mdi mdi-arrow-right"}})],1),t("title-link",{attrs:{h3:""}},[e._v("Slot")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-breadcrumbs(:items="items")
  template(#separator) //`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-breadcrumbs :items="items">
  <template #separator>//</template>
</w-breadcrumbs>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]},proxy:!0}])},[t("w-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"separator",fn:function(){return[e._v("//")]},proxy:!0}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Custom item template")]),e._m(4),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-breadcrumbs(:items="items")
  template(#item="{ item, isLast }")
    w-tag(
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-breadcrumbs :items="items">
  <template #item="{ item, isLast }">
    <w-tag
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label">
    </w-tag>
  </template>
</w-breadcrumbs>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]},proxy:!0}])},[t("w-breadcrumbs",{attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function(a){var l=a.item,u=a.isLast;return[t("w-tag",{attrs:{color:u?"grey":"green",round:"",outline:""},domProps:{innerHTML:e._s(l.label)}})]}}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Link on the last item")]),e._m(5),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-breadcrumbs(:items="items" link-last-item)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-breadcrumbs :items="items" link-last-item />')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]},proxy:!0}])},[t("w-breadcrumbs",{attrs:{items:e.items,"link-last-item":""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Sizes")]),e._m(6),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-breadcrumbs.my4(:items="items" xs)
w-breadcrumbs.my4(:items="items" sm)
w-breadcrumbs.my4(:items="items" md)
w-breadcrumbs.my4(:items="items" lg)
w-breadcrumbs.my4(:items="items" xl)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-breadcrumbs class="my4" :items="items" xs></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" sm></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" md></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" lg></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" xl></w-breadcrumbs>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})`)]},proxy:!0}])},[t("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,xs:""}}),t("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,sm:""}}),t("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,md:""}}),t("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,lg:""}}),t("w-breadcrumbs",{staticClass:"my4",attrs:{items:e.items,xl:""}})],1)],1)},p=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v(`By default, each item except the last one will be a link providing that a route attribute is found
in the item (you can use the `),t("code",[e._v("item-route-key")]),e._v(" prop to name another attribute)."),t("br"),e._v(`
If you are using Vue Router, all the links will automatically be `),t("strong",{staticClass:"code"},[e._v("router-link")]),e._v("s.")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("The items should have a "),t("code",[e._v("label")]),e._v(` attribute or otherwise nominated attribute via the
`),t("code",[e._v("item-label-key")]),e._v(` prop.
`)])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("Like in most components, you can set a "),t("code",[e._v("color")]),e._v(` for the component texts.
This applies to all the links only.`),t("br"),e._v(`
You can use the `),t("code",[e._v("separator-color")]),e._v(` prop to specifically change the color of the separators.
`)])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("You can customize the separator simply by providing a different icon, or using the "),t("code",[e._v("separator")]),e._v(`
slot.`)])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("You can provide a custom template for the items via the "),t("code",[e._v("item")]),e._v(" slot.")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("The last item is usually the current page, therefore it's not useful to have a link on it."),t("br"),e._v(`
If it makes sense in your application, you can use the `),t("code",[e._v("link-last-item")]),e._v(" prop.")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("The breadcrumbs size can be controlled via the preset sizes "),t("code",[e._v("xs")]),e._v(", "),t("code",[e._v("sm")]),e._v(", "),t("code",[e._v("md")]),e._v(`,
`),t("code",[e._v("lg")]),e._v(", "),t("code",[e._v("xl")]),e._v(" or via CSS override.")])}];const b={data:()=>({items:[{label:"Sitemap",route:"/sitemap"},{label:"Home",route:"/"},{label:"Current page",route:"/w-breadcrumbs"}]})},o={};var _=s(b,c,p,!1,d,null,null,null);function d(e){for(let r in o)this[r]=o[r]}var v=function(){return _.exports}(),h=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},f=[];const y={color:`Applies a text color to the breadcrumb's links.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,separatorColor:`Applies a text color (also applies to icons) to the breadcrumb's separators.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:"Provide a custom icon for the separators.",items:"An array of items to display in the breadcrumbs. Each item must be an object containing a <code>label</code> and a <code>route</code>.<br>If no route is found the item will be wrapped in a span instead of a link.",linkLastItem:"When set to true, and if the last item has a provided route, the last item will be a link.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemRouteKey:'The property name (aka "key") in each item object where to find the link of the item.',xs:"Sets the font size of the items.",sm:"Sets the font size of the items.",md:"Sets the font size of the items.",lg:"Sets the font size of the items.",xl:"Sets the font size of the items."},w={separator:{description:"Provide a custom template for the breadcrumbs' separator.",params:{index:"The separator index in the array of items. Starts at 1."}},item:{description:"Provide a custom template for the breadcrumbs' item.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1.",isLast:"A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page."}}},k={},x={data:()=>({propsDescs:y,slots:w}),computed:{props(){return n.props},events(){return n.emits.reduce((e,r)=>(e[r]={description:k[r]||""})&&e,{})}}},i={};var g=s(x,h,f,!1,S,null,null,null);function S(e){for(let r in i)this[r]=i[r]}var C=function(){return g.exports}(),$=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("main",[t("ui-component-title",{attrs:{slug:"w-breadcrumbs"}},[e._v("w-breadcrumbs")]),t("examples"),t("api")],1)},j=[];const E={components:{Examples:v,Api:C}},m={};var L=s(E,$,j,!1,z,null,null,null);function z(e){for(let r in m)this[r]=m[r]}var T=function(){return L.exports}();export{T as default};
