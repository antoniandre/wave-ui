import{r as i,o as c,g as d,a as s,w as t,b as e,d as a,_ as p,y as w}from"./index.bf2cfd71.js";const k=a("p",null,[e(`By default, each item except the last one will be a link providing that a route attribute is found
in the item (you can use the `),a("code",null,"item-route-key"),e(" prop to name another attribute)."),a("br"),e(`
If you are using Vue Router, all the links will automatically be `),a("strong",{class:"code"},"router-link"),e("s.")],-1),v=a("p",null,[e("The items should have a "),a("code",null,"label"),e(` attribute or otherwise nominated attribute via the
`),a("code",null,"item-label-key"),e(` prop.
`)],-1),S=a("p",null,[e("Like in most components, you can set a "),a("code",null,"color"),e(` for the component texts.
This applies to all the links only.`),a("br"),e(`
You can use the `),a("code",null,"separator-color"),e(` prop to specifically change the color of the separators.
`)],-1),x=a("p",null,[e("You can customize the separator simply by providing a different icon, or using the "),a("code",null,"separator"),e(`
slot.`)],-1),C=a("p",null,[e("You can provide a custom template for the items via the "),a("code",null,"item"),e(" slot.")],-1),$=a("p",null,[e("The last item is usually the current page, therefore it's not useful to have a link on it."),a("br"),e(`
If it makes sense in your application, you can use the `),a("code",null,"link-last-item"),e(" prop.")],-1),T=a("p",null,[e("The breadcrumbs size can be controlled via the preset sizes "),a("code",null,"xs"),e(", "),a("code",null,"sm"),e(", "),a("code",null,"md"),e(`,
`),a("code",null,"lg"),e(", "),a("code",null,"xl"),e(" or via CSS override.")],-1);function j(o,m,b,h,f,u){const l=i("title-link"),r=i("w-breadcrumbs"),n=i("example"),_=i("w-tag");return c(),d("div",null,[s(l,{h2:""},{default:t(()=>[e("Default")]),_:1}),k,v,s(n,null,{pug:t(()=>[e('w-breadcrumbs(:items="items")')]),html:t(()=>[e('<w-breadcrumbs :items="items" />')]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]),default:t(()=>[s(r,{items:o.items},null,8,["items"])]),_:1}),s(l,{h2:""},{default:t(()=>[e("Colors")]),_:1}),S,s(n,null,{pug:t(()=>[e('w-breadcrumbs(:items="items" color="orange")')]),html:t(()=>[e('<w-breadcrumbs :items="items" color="orange" />')]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]),default:t(()=>[s(r,{items:o.items,color:"orange"},null,8,["items"])]),_:1}),s(l,{h3:""},{default:t(()=>[e("Separator color")]),_:1}),s(n,null,{pug:t(()=>[e('w-breadcrumbs(:items="items" separator-color="orange")')]),html:t(()=>[e('<w-breadcrumbs :items="items" separator-color="orange" />')]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]),default:t(()=>[s(r,{items:o.items,"separator-color":"orange"},null,8,["items"])]),_:1}),s(l,{h2:""},{default:t(()=>[e("Custom separator")]),_:1}),x,s(l,{h3:""},{default:t(()=>[e("Icon")]),_:1}),s(n,null,{pug:t(()=>[e('w-breadcrumbs(:items="items" icon="mdi mdi-arrow-right")')]),html:t(()=>[e('<w-breadcrumbs :items="items" icon="mdi mdi-arrow-right" />')]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]),default:t(()=>[s(r,{items:o.items,icon:"mdi mdi-arrow-right"},null,8,["items"])]),_:1}),s(l,{h3:""},{default:t(()=>[e("Slot")]),_:1}),s(n,null,{pug:t(()=>[e(`w-breadcrumbs(:items="items")
  template(#separator) //`)]),html:t(()=>[e(`<w-breadcrumbs :items="items">
  <template #separator>//</template>
</w-breadcrumbs>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]),default:t(()=>[s(r,{items:o.items},{separator:t(()=>[e("//")]),_:1},8,["items"])]),_:1}),s(l,{h2:""},{default:t(()=>[e("Custom item template")]),_:1}),C,s(n,null,{pug:t(()=>[e(`w-breadcrumbs(:items="items")
  template(#item="{ item, isLast }")
    w-tag(
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label")`)]),html:t(()=>[e(`<w-breadcrumbs :items="items">
  <template #item="{ item, isLast }">
    <w-tag
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label">
    </w-tag>
  </template>
</w-breadcrumbs>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]),default:t(()=>[s(r,{items:o.items},{item:t(({item:g,isLast:y})=>[s(_,{color:y?"grey":"green",round:"",outline:"",innerHTML:g.label},null,8,["color","innerHTML"])]),_:1},8,["items"])]),_:1}),s(l,{h2:""},{default:t(()=>[e("Link on the last item")]),_:1}),$,s(n,null,{pug:t(()=>[e('w-breadcrumbs(:items="items" link-last-item)')]),html:t(()=>[e('<w-breadcrumbs :items="items" link-last-item />')]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)]),default:t(()=>[s(r,{items:o.items,"link-last-item":""},null,8,["items"])]),_:1}),s(l,{h2:""},{default:t(()=>[e("Sizes")]),_:1}),T,s(n,null,{pug:t(()=>[e(`w-breadcrumbs.my4(:items="items" xs)
w-breadcrumbs.my4(:items="items" sm)
w-breadcrumbs.my4(:items="items" md)
w-breadcrumbs.my4(:items="items" lg)
w-breadcrumbs.my4(:items="items" xl)`)]),html:t(()=>[e(`<w-breadcrumbs class="my4" :items="items" xs></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" sm></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" md></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" lg></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" xl></w-breadcrumbs>`)]),js:t(()=>[e(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})`)]),default:t(()=>[s(r,{class:"my4",items:o.items,xs:""},null,8,["items"]),s(r,{class:"my4",items:o.items,sm:""},null,8,["items"]),s(r,{class:"my4",items:o.items,md:""},null,8,["items"]),s(r,{class:"my4",items:o.items,lg:""},null,8,["items"]),s(r,{class:"my4",items:o.items,xl:""},null,8,["items"])]),_:1})])}const H={data:()=>({items:[{label:"Sitemap",route:"/sitemap"},{label:"Home",route:"/"},{label:"Current page",route:"/w-breadcrumbs"}]})},L=p(H,[["render",j]]),z=a("div",{class:"w-divider my12"},null,-1);function A(o,m,b,h,f,u){const l=i("title-link"),r=i("component-api");return c(),d("div",null,[z,s(l,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),s(r,{class:"mt0",items:u.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),s(r,{items:o.slots,title:"Slots"},null,8,["items"]),s(r,{items:u.events,title:"Events"},null,8,["items"])])}const P={color:`Applies a text color to the breadcrumb's links.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,separatorColor:`Applies a text color (also applies to icons) to the breadcrumb's separators.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:"Provide a custom icon for the separators.",items:"An array of items to display in the breadcrumbs. Each item must be an object containing a <code>label</code> and a <code>route</code>.<br>If no route is found the item will be wrapped in a span instead of a link.",linkLastItem:"When set to true, and if the last item has a provided route, the last item will be a link.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemRouteKey:'The property name (aka "key") in each item object where to find the link of the item.',xs:"Sets the font size of the items.",sm:"Sets the font size of the items.",md:"Sets the font size of the items.",lg:"Sets the font size of the items.",xl:"Sets the font size of the items."},I={separator:{description:"Provide a custom template for the breadcrumbs' separator.",params:{index:"The separator index in the array of items. Starts at 1."}},item:{description:"Provide a custom template for the breadcrumbs' item.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1.",isLast:"A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page."}}},B={},D={data:()=>({propsDescs:P,slots:I}),computed:{props(){return w.props},events(){return w.emits.reduce((o,m)=>(o[m]={description:B[m]||""})&&o,{})}}},E=p(D,[["render",A]]);function V(o,m,b,h,f,u){const l=i("ui-component-title"),r=i("examples"),n=i("api");return c(),d("main",null,[s(l,{slug:"w-breadcrumbs"},{default:t(()=>[e("w-breadcrumbs")]),_:1}),s(r),s(n)])}const M={components:{Examples:L,Api:E}},Y=p(M,[["render",V]]);export{Y as default};
