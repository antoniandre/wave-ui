import{N as e,W as t,c as n,d as r,g as i,h as a,k as o}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as s}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{R as c}from"./index-D3Rumh9E.js";function l(s,c,l,u,d,f){let p=e(`title-link`),m=e(`w-breadcrumbs`),h=e(`example`),g=e(`w-tag`);return o(),r(`div`,null,[i(p,{h2:``},{default:t(()=>[...c[0]||=[a(`Default`,-1)]]),_:1}),c[34]||=n(`p`,null,[a(`By default, each item except the last one will be a link providing that a route attribute is found
in the item (you can use the `),n(`code`,null,`item-route-key`),a(` prop to name another attribute).`),n(`br`),a(`
If you are using Vue Router, all the links will automatically be `),n(`strong`,{class:`code`},`router-link`),a(`s.`)],-1),c[35]||=n(`p`,null,[a(`The items should have a `),n(`code`,null,`label`),a(` attribute or otherwise nominated attribute via the
`),n(`code`,null,`item-label-key`),a(` prop.
`)],-1),i(h,null,{pug:t(()=>[...c[1]||=[a(`w-breadcrumbs(:items="items")`,-1)]]),html:t(()=>[...c[2]||=[a(`<w-breadcrumbs :items="items" />`,-1)]]),js:t(()=>[...c[3]||=[a(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[i(m,{items:s.items},null,8,[`items`])]),_:1}),i(p,{h2:``},{default:t(()=>[...c[4]||=[a(`Colors`,-1)]]),_:1}),c[36]||=n(`p`,null,[a(`Like in most components, you can set a `),n(`code`,null,`color`),a(` for the component texts.
This applies to all the links only.`),n(`br`),a(`
You can use the `),n(`code`,null,`separator-color`),a(` prop to specifically change the color of the separators.
`)],-1),i(h,null,{pug:t(()=>[...c[5]||=[a(`w-breadcrumbs(:items="items" color="orange")`,-1)]]),html:t(()=>[...c[6]||=[a(`<w-breadcrumbs :items="items" color="orange" />`,-1)]]),js:t(()=>[...c[7]||=[a(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[i(m,{items:s.items,color:`orange`},null,8,[`items`])]),_:1}),i(p,{h3:``},{default:t(()=>[...c[8]||=[a(`Separator color`,-1)]]),_:1}),i(h,null,{pug:t(()=>[...c[9]||=[a(`w-breadcrumbs(:items="items" separator-color="orange")`,-1)]]),html:t(()=>[...c[10]||=[a(`<w-breadcrumbs :items="items" separator-color="orange" />`,-1)]]),js:t(()=>[...c[11]||=[a(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[i(m,{items:s.items,"separator-color":`orange`},null,8,[`items`])]),_:1}),i(p,{h2:``},{default:t(()=>[...c[12]||=[a(`Custom separator`,-1)]]),_:1}),c[37]||=n(`p`,null,[a(`You can customize the separator simply by providing a different icon, or using the `),n(`code`,null,`separator`),a(`
slot.`)],-1),i(p,{h3:``},{default:t(()=>[...c[13]||=[a(`Icon`,-1)]]),_:1}),i(h,null,{pug:t(()=>[...c[14]||=[a(`w-breadcrumbs(:items="items" icon="mdi mdi-arrow-right")`,-1)]]),html:t(()=>[...c[15]||=[a(`<w-breadcrumbs :items="items" icon="mdi mdi-arrow-right" />`,-1)]]),js:t(()=>[...c[16]||=[a(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[i(m,{items:s.items,icon:`mdi mdi-arrow-right`},null,8,[`items`])]),_:1}),i(p,{h3:``},{default:t(()=>[...c[17]||=[a(`Slot`,-1)]]),_:1}),i(h,null,{pug:t(()=>[...c[19]||=[a(`w-breadcrumbs(:items="items")
  template(#separator) //`,-1)]]),html:t(()=>[...c[20]||=[a(`<w-breadcrumbs :items="items">
  <template #separator>//</template>
</w-breadcrumbs>`,-1)]]),js:t(()=>[...c[21]||=[a(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[i(m,{items:s.items},{separator:t(()=>[...c[18]||=[a(`//`,-1)]]),_:1},8,[`items`])]),_:1}),i(p,{h2:``},{default:t(()=>[...c[22]||=[a(`Custom item template`,-1)]]),_:1}),c[38]||=n(`p`,null,[a(`You can provide a custom template for the items via the `),n(`code`,null,`item`),a(` slot.`)],-1),i(h,null,{pug:t(()=>[...c[23]||=[a(`w-breadcrumbs(:items="items")
  template(#item="{ item, isLast }")
    w-tag(
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label")`,-1)]]),html:t(()=>[...c[24]||=[a(`<w-breadcrumbs :items="items">
  <template #item="{ item, isLast }">
    <w-tag
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label">
    </w-tag>
  </template>
</w-breadcrumbs>`,-1)]]),js:t(()=>[...c[25]||=[a(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[i(m,{items:s.items},{item:t(({item:e,isLast:t})=>[i(g,{color:t?`grey`:`green`,round:``,outline:``,innerHTML:e.label},null,8,[`color`,`innerHTML`])]),_:1},8,[`items`])]),_:1}),i(p,{h2:``},{default:t(()=>[...c[26]||=[a(`Link on the last item`,-1)]]),_:1}),c[39]||=n(`p`,null,[a(`The last item is usually the current page, therefore it's not useful to have a link on it.`),n(`br`),a(`
If it makes sense in your application, you can use the `),n(`code`,null,`link-last-item`),a(` prop.`)],-1),i(h,null,{pug:t(()=>[...c[27]||=[a(`w-breadcrumbs(:items="items" link-last-item)`,-1)]]),html:t(()=>[...c[28]||=[a(`<w-breadcrumbs :items="items" link-last-item />`,-1)]]),js:t(()=>[...c[29]||=[a(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[i(m,{items:s.items,"link-last-item":``},null,8,[`items`])]),_:1}),i(p,{h2:``},{default:t(()=>[...c[30]||=[a(`Sizes`,-1)]]),_:1}),c[40]||=n(`p`,null,[a(`The breadcrumbs size can be controlled via the preset sizes `),n(`code`,null,`xs`),a(`, `),n(`code`,null,`sm`),a(`, `),n(`code`,null,`md`),a(`,
`),n(`code`,null,`lg`),a(`, `),n(`code`,null,`xl`),a(` or via CSS override.`)],-1),i(h,null,{pug:t(()=>[...c[31]||=[a(`w-breadcrumbs.my4(:items="items" xs)
w-breadcrumbs.my4(:items="items" sm)
w-breadcrumbs.my4(:items="items" md)
w-breadcrumbs.my4(:items="items" lg)
w-breadcrumbs.my4(:items="items" xl)`,-1)]]),html:t(()=>[...c[32]||=[a(`<w-breadcrumbs class="my4" :items="items" xs></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" sm></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" md></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" lg></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" xl></w-breadcrumbs>`,-1)]]),js:t(()=>[...c[33]||=[a(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})`,-1)]]),default:t(()=>[i(m,{class:`my4`,items:s.items,xs:``},null,8,[`items`]),i(m,{class:`my4`,items:s.items,sm:``},null,8,[`items`]),i(m,{class:`my4`,items:s.items,md:``},null,8,[`items`]),i(m,{class:`my4`,items:s.items,lg:``},null,8,[`items`]),i(m,{class:`my4`,items:s.items,xl:``},null,8,[`items`])]),_:1})])}var u=s({data:()=>({items:[{label:`Sitemap`,route:`/sitemap`},{label:`Home`,route:`/`},{label:`Current page`,route:`/w-breadcrumbs`}]})},[[`render`,l]]);function d(s,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var f={color:`Applies a text color to the breadcrumb's links.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,separatorColor:`Applies a text color (also applies to icons) to the breadcrumb's separators.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:`Provide a custom icon for the separators.`,items:`An array of items to display in the breadcrumbs. Each item must be an object containing a <code>label</code> and a <code>route</code>.<br>If no route is found the item will be wrapped in a span instead of a link.`,linkLastItem:`When set to true, and if the last item has a provided route, the last item will be a link.`,itemLabelKey:`The property name (aka "key") in each item object where to find the label of the item.`,itemRouteKey:`The property name (aka "key") in each item object where to find the link of the item.`,xs:`Sets the font size of the items.`,sm:`Sets the font size of the items.`,md:`Sets the font size of the items.`,lg:`Sets the font size of the items.`,xl:`Sets the font size of the items.`,noRipple:`When <code>true</code>, disables the pointer ripple on breadcrumb links for this instance. By default, ripple follows <code>$waveui.config.ripple</code>.`},p={separator:{description:`Provide a custom template for the breadcrumbs' separator.`,params:{index:`The separator index in the array of items. Starts at 1.`}},item:{description:`Provide a custom template for the breadcrumbs' item.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1.`,isLast:`A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page.`}}},m={},h=s({data:()=>({propsDescs:f,slots:p}),computed:{props(){return c.props},events(){return c.emits.reduce((e,t)=>(e[t]={description:m[t]||``},e),{})}}},[[`render`,d]]);function g(n,s,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return o(),r(`main`,null,[i(f,{slug:`w-breadcrumbs`},{default:t(()=>[...s[0]||=[a(`w-breadcrumbs`,-1)]]),_:1}),i(p),i(m)])}var _=s({components:{Examples:u,Api:h}},[[`render`,g]]);export{_ as default};