import{r as l,o as u,e as d,f as s,w as t,i as e,g as o}from"./vendor.e64646cc.js";import{_ as p,d as f}from"./index.f3654a4f.js";const k=e("Default"),v=o("p",null,[e(`By default, each item except the last one will be a link providing that a route attribute is found
in the item (you can use the `),o("code",null,"item-route-key"),e(" prop to name another attribute)."),o("br"),e(`
If you are using Vue Router, all the links will automatically be `),o("strong",{class:"code"},"router-link"),e("s.")],-1),S=o("p",null,[e("The items should have a "),o("code",null,"label"),e(` attribute or otherwise nominated attribute via the
`),o("code",null,"item-label-key"),e(` prop.
`)],-1),x=e('w-breadcrumbs(:items="items")'),$=e('<w-breadcrumbs :items="items" />'),C=e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`),j=e("Colors"),T=o("p",null,[e("Like in most components, you can set a "),o("code",null,"color"),e(` for the component texts.
This applies to all the links only.`),o("br"),e(`
You can use the `),o("code",null,"separator-color"),e(` prop to specifically change the color of the separators.
`)],-1),H=e('w-breadcrumbs(:items="items" color="orange")'),L=e('<w-breadcrumbs :items="items" color="orange" />'),z=e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`),A=e("Separator color"),P=e('w-breadcrumbs(:items="items" separator-color="orange")'),I=e('<w-breadcrumbs :items="items" separator-color="orange" />'),B=e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`),D=e("Custom separator"),E=o("p",null,[e("You can customize the separator simply by providing a different icon, or using the "),o("code",null,"separator"),e(`
slot.`)],-1),V=e("Icon"),M=e('w-breadcrumbs(:items="items" icon="mdi mdi-arrow-right")'),N=e('<w-breadcrumbs :items="items" icon="mdi mdi-arrow-right" />'),Y=e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`),K=e("Slot"),R=e("//"),W=e(`w-breadcrumbs(:items="items")
  template(#separator) //`),q=e(`<w-breadcrumbs :items="items">
  <template #separator>//</template>
</w-breadcrumbs>`),F=e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`),G=e("Custom item template"),J=o("p",null,[e("You can provide a custom template for the items via the "),o("code",null,"item"),e(" slot.")],-1),O=e(`w-breadcrumbs(:items="items")
  template(#item="{ item, isLast }")
    w-tag(
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label")`),Q=e(`<w-breadcrumbs :items="items">
  <template #item="{ item, isLast }">
    <w-tag
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label">
    </w-tag>
  </template>
</w-breadcrumbs>`),U=e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`),X=e("Link on the last item"),Z=o("p",null,[e("The last item is usually the current page, therefore it's not useful to have a link on it."),o("br"),e(`
If it makes sense in your application, you can use the `),o("code",null,"link-last-item"),e(" prop.")],-1),ee=e('w-breadcrumbs(:items="items" link-last-item)'),te=e('<w-breadcrumbs :items="items" link-last-item />'),se=e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`),oe=e("Sizes"),ae=o("p",null,[e("The breadcrumbs size can be controlled via the preset sizes "),o("code",null,"xs"),e(", "),o("code",null,"sm"),e(", "),o("code",null,"md"),e(`,
`),o("code",null,"lg"),e(", "),o("code",null,"xl"),e(" or via CSS override.")],-1),ne=e(`w-breadcrumbs.my4(:items="items" xs)
w-breadcrumbs.my4(:items="items" sm)
w-breadcrumbs.my4(:items="items" md)
w-breadcrumbs.my4(:items="items" lg)
w-breadcrumbs.my4(:items="items" xl)`),re=e(`<w-breadcrumbs class="my4" :items="items" xs></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" sm></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" md></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" lg></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" xl></w-breadcrumbs>`),ie=e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})`);function le(a,m,b,h,_,c){const r=l("title-link"),n=l("w-breadcrumbs"),i=l("example"),w=l("w-tag");return u(),d("div",null,[s(r,{h2:""},{default:t(()=>[k]),_:1}),v,S,s(i,null,{pug:t(()=>[x]),html:t(()=>[$]),js:t(()=>[C]),default:t(()=>[s(n,{items:a.items},null,8,["items"])]),_:1}),s(r,{h2:""},{default:t(()=>[j]),_:1}),T,s(i,null,{pug:t(()=>[H]),html:t(()=>[L]),js:t(()=>[z]),default:t(()=>[s(n,{items:a.items,color:"orange"},null,8,["items"])]),_:1}),s(r,{h3:""},{default:t(()=>[A]),_:1}),s(i,null,{pug:t(()=>[P]),html:t(()=>[I]),js:t(()=>[B]),default:t(()=>[s(n,{items:a.items,"separator-color":"orange"},null,8,["items"])]),_:1}),s(r,{h2:""},{default:t(()=>[D]),_:1}),E,s(r,{h3:""},{default:t(()=>[V]),_:1}),s(i,null,{pug:t(()=>[M]),html:t(()=>[N]),js:t(()=>[Y]),default:t(()=>[s(n,{items:a.items,icon:"mdi mdi-arrow-right"},null,8,["items"])]),_:1}),s(r,{h3:""},{default:t(()=>[K]),_:1}),s(i,null,{pug:t(()=>[W]),html:t(()=>[q]),js:t(()=>[F]),default:t(()=>[s(n,{items:a.items},{separator:t(()=>[R]),_:1},8,["items"])]),_:1}),s(r,{h2:""},{default:t(()=>[G]),_:1}),J,s(i,null,{pug:t(()=>[O]),html:t(()=>[Q]),js:t(()=>[U]),default:t(()=>[s(n,{items:a.items},{item:t(({item:g,isLast:y})=>[s(w,{color:y?"grey":"green",round:"",outline:"",innerHTML:g.label},null,8,["color","innerHTML"])]),_:1},8,["items"])]),_:1}),s(r,{h2:""},{default:t(()=>[X]),_:1}),Z,s(i,null,{pug:t(()=>[ee]),html:t(()=>[te]),js:t(()=>[se]),default:t(()=>[s(n,{items:a.items,"link-last-item":""},null,8,["items"])]),_:1}),s(r,{h2:""},{default:t(()=>[oe]),_:1}),ae,s(i,null,{pug:t(()=>[ne]),html:t(()=>[re]),js:t(()=>[ie]),default:t(()=>[s(n,{class:"my4",items:a.items,xs:""},null,8,["items"]),s(n,{class:"my4",items:a.items,sm:""},null,8,["items"]),s(n,{class:"my4",items:a.items,md:""},null,8,["items"]),s(n,{class:"my4",items:a.items,lg:""},null,8,["items"]),s(n,{class:"my4",items:a.items,xl:""},null,8,["items"])]),_:1})])}const me={data:()=>({items:[{label:"Sitemap",route:"/sitemap"},{label:"Home",route:"/"},{label:"Current page",route:"/w-breadcrumbs"}]})};var ce=p(me,[["render",le]]);const ue=o("div",{class:"w-divider my12"},null,-1),de=e("API");function pe(a,m,b,h,_,c){const r=l("title-link"),n=l("component-api");return u(),d("div",null,[ue,s(r,{class:"title1",h2:""},{default:t(()=>[de]),_:1}),s(n,{class:"mt0",items:c.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),s(n,{items:a.slots,title:"Slots"},null,8,["items"]),s(n,{items:c.events,title:"Events"},null,8,["items"])])}const be={color:`Applies a text color to the breadcrumb's links.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,separatorColor:`Applies a text color (also applies to icons) to the breadcrumb's separators.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:"Provide a custom icon for the separators.",items:"An array of items to display in the breadcrumbs. Each item must be an object containing a <code>label</code> and a <code>route</code>.<br>If no route is found the item will be wrapped in a span instead of a link.",linkLastItem:"When set to true, and if the last item has a provided route, the last item will be a link.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemRouteKey:'The property name (aka "key") in each item object where to find the link of the item.',xs:"Sets the font size of the items.",sm:"Sets the font size of the items.",md:"Sets the font size of the items.",lg:"Sets the font size of the items.",xl:"Sets the font size of the items."},he={separator:{description:"Provide a custom template for the breadcrumbs' separator.",params:{index:"The separator index in the array of items. Starts at 1."}},item:{description:"Provide a custom template for the breadcrumbs' item.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1.",isLast:"A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page."}}},_e={},fe={data:()=>({propsDescs:be,slots:he}),computed:{props(){return f.props},events(){return f.emits.reduce((a,m)=>(a[m]={description:_e[m]||""})&&a,{})}}};var we=p(fe,[["render",pe]]);const ge=e("w-breadcrumbs");function ye(a,m,b,h,_,c){const r=l("ui-component-title"),n=l("examples"),i=l("api");return u(),d("main",null,[s(r,{slug:"w-breadcrumbs"},{default:t(()=>[ge]),_:1}),s(n),s(i)])}const ke={components:{Examples:ce,Api:we}};var xe=p(ke,[["render",ye]]);export{xe as default};
