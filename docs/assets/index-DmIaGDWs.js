import{r as a,g as p,o as d,a as r,b as o,w as s,e as t,_ as b,A as y}from"./index-C780IYji.js";function h(l,e,f,w,g,u){const i=a("title-link"),n=a("w-breadcrumbs"),m=a("example"),c=a("w-tag");return d(),p("div",null,[r(i,{h2:""},{default:s(()=>e[0]||(e[0]=[t("Default")])),_:1,__:[0]}),e[34]||(e[34]=o("p",null,[t(`By default, each item except the last one will be a link providing that a route attribute is found
in the item (you can use the `),o("code",null,"item-route-key"),t(" prop to name another attribute)."),o("br"),t(`
If you are using Vue Router, all the links will automatically be `),o("strong",{class:"code"},"router-link"),t("s.")],-1)),e[35]||(e[35]=o("p",null,[t("The items should have a "),o("code",null,"label"),t(` attribute or otherwise nominated attribute via the
`),o("code",null,"item-label-key"),t(` prop.
`)],-1)),r(m,null,{pug:s(()=>e[1]||(e[1]=[t('w-breadcrumbs(:items="items")')])),html:s(()=>e[2]||(e[2]=[t('<w-breadcrumbs :items="items" />')])),js:s(()=>e[3]||(e[3]=[t(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)])),default:s(()=>[r(n,{items:l.items},null,8,["items"])]),_:1}),r(i,{h2:""},{default:s(()=>e[4]||(e[4]=[t("Colors")])),_:1,__:[4]}),e[36]||(e[36]=o("p",null,[t("Like in most components, you can set a "),o("code",null,"color"),t(` for the component texts.
This applies to all the links only.`),o("br"),t(`
You can use the `),o("code",null,"separator-color"),t(` prop to specifically change the color of the separators.
`)],-1)),r(m,null,{pug:s(()=>e[5]||(e[5]=[t('w-breadcrumbs(:items="items" color="orange")')])),html:s(()=>e[6]||(e[6]=[t('<w-breadcrumbs :items="items" color="orange" />')])),js:s(()=>e[7]||(e[7]=[t(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)])),default:s(()=>[r(n,{items:l.items,color:"orange"},null,8,["items"])]),_:1}),r(i,{h3:""},{default:s(()=>e[8]||(e[8]=[t("Separator color")])),_:1,__:[8]}),r(m,null,{pug:s(()=>e[9]||(e[9]=[t('w-breadcrumbs(:items="items" separator-color="orange")')])),html:s(()=>e[10]||(e[10]=[t('<w-breadcrumbs :items="items" separator-color="orange" />')])),js:s(()=>e[11]||(e[11]=[t(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)])),default:s(()=>[r(n,{items:l.items,"separator-color":"orange"},null,8,["items"])]),_:1}),r(i,{h2:""},{default:s(()=>e[12]||(e[12]=[t("Custom separator")])),_:1,__:[12]}),e[37]||(e[37]=o("p",null,[t("You can customize the separator simply by providing a different icon, or using the "),o("code",null,"separator"),t(`
slot.`)],-1)),r(i,{h3:""},{default:s(()=>e[13]||(e[13]=[t("Icon")])),_:1,__:[13]}),r(m,null,{pug:s(()=>e[14]||(e[14]=[t('w-breadcrumbs(:items="items" icon="mdi mdi-arrow-right")')])),html:s(()=>e[15]||(e[15]=[t('<w-breadcrumbs :items="items" icon="mdi mdi-arrow-right" />')])),js:s(()=>e[16]||(e[16]=[t(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)])),default:s(()=>[r(n,{items:l.items,icon:"mdi mdi-arrow-right"},null,8,["items"])]),_:1}),r(i,{h3:""},{default:s(()=>e[17]||(e[17]=[t("Slot")])),_:1,__:[17]}),r(m,null,{pug:s(()=>e[19]||(e[19]=[t(`w-breadcrumbs(:items="items")
  template(#separator) //`)])),html:s(()=>e[20]||(e[20]=[t(`<w-breadcrumbs :items="items">
  <template #separator>//</template>
</w-breadcrumbs>`)])),js:s(()=>e[21]||(e[21]=[t(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)])),default:s(()=>[r(n,{items:l.items},{separator:s(()=>e[18]||(e[18]=[t("//")])),_:1},8,["items"])]),_:1}),r(i,{h2:""},{default:s(()=>e[22]||(e[22]=[t("Custom item template")])),_:1,__:[22]}),e[38]||(e[38]=o("p",null,[t("You can provide a custom template for the items via the "),o("code",null,"item"),t(" slot.")],-1)),r(m,null,{pug:s(()=>e[23]||(e[23]=[t(`w-breadcrumbs(:items="items")
  template(#item="{ item, isLast }")
    w-tag(
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label")`)])),html:s(()=>e[24]||(e[24]=[t(`<w-breadcrumbs :items="items">
  <template #item="{ item, isLast }">
    <w-tag
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label">
    </w-tag>
  </template>
</w-breadcrumbs>`)])),js:s(()=>e[25]||(e[25]=[t(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)])),default:s(()=>[r(n,{items:l.items},{item:s(({item:k,isLast:v})=>[r(c,{color:v?"grey":"green",round:"",outline:"",innerHTML:k.label},null,8,["color","innerHTML"])]),_:1},8,["items"])]),_:1}),r(i,{h2:""},{default:s(()=>e[26]||(e[26]=[t("Link on the last item")])),_:1,__:[26]}),e[39]||(e[39]=o("p",null,[t("The last item is usually the current page, therefore it's not useful to have a link on it."),o("br"),t(`
If it makes sense in your application, you can use the `),o("code",null,"link-last-item"),t(" prop.")],-1)),r(m,null,{pug:s(()=>e[27]||(e[27]=[t('w-breadcrumbs(:items="items" link-last-item)')])),html:s(()=>e[28]||(e[28]=[t('<w-breadcrumbs :items="items" link-last-item />')])),js:s(()=>e[29]||(e[29]=[t(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`)])),default:s(()=>[r(n,{items:l.items,"link-last-item":""},null,8,["items"])]),_:1}),r(i,{h2:""},{default:s(()=>e[30]||(e[30]=[t("Sizes")])),_:1,__:[30]}),e[40]||(e[40]=o("p",null,[t("The breadcrumbs size can be controlled via the preset sizes "),o("code",null,"xs"),t(", "),o("code",null,"sm"),t(", "),o("code",null,"md"),t(`,
`),o("code",null,"lg"),t(", "),o("code",null,"xl"),t(" or via CSS override.")],-1)),r(m,null,{pug:s(()=>e[31]||(e[31]=[t(`w-breadcrumbs.my4(:items="items" xs)
w-breadcrumbs.my4(:items="items" sm)
w-breadcrumbs.my4(:items="items" md)
w-breadcrumbs.my4(:items="items" lg)
w-breadcrumbs.my4(:items="items" xl)`)])),html:s(()=>e[32]||(e[32]=[t(`<w-breadcrumbs class="my4" :items="items" xs></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" sm></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" md></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" lg></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" xl></w-breadcrumbs>`)])),js:s(()=>e[33]||(e[33]=[t(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})`)])),default:s(()=>[r(n,{class:"my4",items:l.items,xs:""},null,8,["items"]),r(n,{class:"my4",items:l.items,sm:""},null,8,["items"]),r(n,{class:"my4",items:l.items,md:""},null,8,["items"]),r(n,{class:"my4",items:l.items,lg:""},null,8,["items"]),r(n,{class:"my4",items:l.items,xl:""},null,8,["items"])]),_:1})])}const S={data:()=>({items:[{label:"Sitemap",route:"/sitemap"},{label:"Home",route:"/"},{label:"Current page",route:"/w-breadcrumbs"}]})},x=b(S,[["render",h]]);function C(l,e,f,w,g,u){const i=a("title-link"),n=a("component-api");return d(),p("div",null,[e[1]||(e[1]=o("div",{class:"w-divider my12"},null,-1)),r(i,{class:"title1",h2:""},{default:s(()=>e[0]||(e[0]=[t("API")])),_:1,__:[0]}),r(n,{class:"mt0",items:u.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),r(n,{items:l.slots,title:"Slots"},null,8,["items"]),r(n,{items:u.events,title:"Events"},null,8,["items"])])}const $={color:`Applies a text color to the breadcrumb's links.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,separatorColor:`Applies a text color (also applies to icons) to the breadcrumb's separators.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:"Provide a custom icon for the separators.",items:"An array of items to display in the breadcrumbs. Each item must be an object containing a <code>label</code> and a <code>route</code>.<br>If no route is found the item will be wrapped in a span instead of a link.",linkLastItem:"When set to true, and if the last item has a provided route, the last item will be a link.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemRouteKey:'The property name (aka "key") in each item object where to find the link of the item.',xs:"Sets the font size of the items.",sm:"Sets the font size of the items.",md:"Sets the font size of the items.",lg:"Sets the font size of the items.",xl:"Sets the font size of the items."},T={separator:{description:"Provide a custom template for the breadcrumbs' separator.",params:{index:"The separator index in the array of items. Starts at 1."}},item:{description:"Provide a custom template for the breadcrumbs' item.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1.",isLast:"A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page."}}},j={},H={data:()=>({propsDescs:$,slots:T}),computed:{props(){return y.props},events(){return y.emits.reduce((l,e)=>(l[e]={description:j[e]||""},l),{})}}},L=b(H,[["render",C]]);function z(l,e,f,w,g,u){const i=a("ui-component-title"),n=a("examples"),m=a("api");return d(),p("main",null,[r(i,{slug:"w-breadcrumbs"},{default:s(()=>e[0]||(e[0]=[t("w-breadcrumbs")])),_:1,__:[0]}),r(n),r(m)])}const A={components:{Examples:x,Api:L}},I=b(A,[["render",z]]);export{I as default};
