import{A as e,G as t,P as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as s}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{L as c}from"./index-DR7O6uV_.js";function l(s,c,l,u,d,f){let p=n(`title-link`),m=n(`w-breadcrumbs`),h=n(`example`),g=n(`w-tag`);return e(),i(`div`,null,[a(p,{h2:``},{default:t(()=>[...c[0]||=[o(`Default`,-1)]]),_:1}),c[34]||=r(`p`,null,[o(`By default, each item except the last one will be a link providing that a route attribute is found
in the item (you can use the `),r(`code`,null,`item-route-key`),o(` prop to name another attribute).`),r(`br`),o(`
If you are using Vue Router, all the links will automatically be `),r(`strong`,{class:`code`},`router-link`),o(`s.`)],-1),c[35]||=r(`p`,null,[o(`The items should have a `),r(`code`,null,`label`),o(` attribute or otherwise nominated attribute via the
`),r(`code`,null,`item-label-key`),o(` prop.
`)],-1),a(h,null,{pug:t(()=>[...c[1]||=[o(`w-breadcrumbs(:items="items")`,-1)]]),html:t(()=>[...c[2]||=[o(`<w-breadcrumbs :items="items" />`,-1)]]),js:t(()=>[...c[3]||=[o(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[a(m,{items:s.items},null,8,[`items`])]),_:1}),a(p,{h2:``},{default:t(()=>[...c[4]||=[o(`Colors`,-1)]]),_:1}),c[36]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the component texts.
This applies to all the links only.`),r(`br`),o(`
You can use the `),r(`code`,null,`separator-color`),o(` prop to specifically change the color of the separators.
`)],-1),a(h,null,{pug:t(()=>[...c[5]||=[o(`w-breadcrumbs(:items="items" color="orange")`,-1)]]),html:t(()=>[...c[6]||=[o(`<w-breadcrumbs :items="items" color="orange" />`,-1)]]),js:t(()=>[...c[7]||=[o(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[a(m,{items:s.items,color:`orange`},null,8,[`items`])]),_:1}),a(p,{h3:``},{default:t(()=>[...c[8]||=[o(`Separator color`,-1)]]),_:1}),a(h,null,{pug:t(()=>[...c[9]||=[o(`w-breadcrumbs(:items="items" separator-color="orange")`,-1)]]),html:t(()=>[...c[10]||=[o(`<w-breadcrumbs :items="items" separator-color="orange" />`,-1)]]),js:t(()=>[...c[11]||=[o(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[a(m,{items:s.items,"separator-color":`orange`},null,8,[`items`])]),_:1}),a(p,{h2:``},{default:t(()=>[...c[12]||=[o(`Custom separator`,-1)]]),_:1}),c[37]||=r(`p`,null,[o(`You can customize the separator simply by providing a different icon, or using the `),r(`code`,null,`separator`),o(`
slot.`)],-1),a(p,{h3:``},{default:t(()=>[...c[13]||=[o(`Icon`,-1)]]),_:1}),a(h,null,{pug:t(()=>[...c[14]||=[o(`w-breadcrumbs(:items="items" icon="mdi mdi-arrow-right")`,-1)]]),html:t(()=>[...c[15]||=[o(`<w-breadcrumbs :items="items" icon="mdi mdi-arrow-right" />`,-1)]]),js:t(()=>[...c[16]||=[o(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[a(m,{items:s.items,icon:`mdi mdi-arrow-right`},null,8,[`items`])]),_:1}),a(p,{h3:``},{default:t(()=>[...c[17]||=[o(`Slot`,-1)]]),_:1}),a(h,null,{pug:t(()=>[...c[19]||=[o(`w-breadcrumbs(:items="items")
  template(#separator) //`,-1)]]),html:t(()=>[...c[20]||=[o(`<w-breadcrumbs :items="items">
  <template #separator>//</template>
</w-breadcrumbs>`,-1)]]),js:t(()=>[...c[21]||=[o(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[a(m,{items:s.items},{separator:t(()=>[...c[18]||=[o(`//`,-1)]]),_:1},8,[`items`])]),_:1}),a(p,{h2:``},{default:t(()=>[...c[22]||=[o(`Custom item template`,-1)]]),_:1}),c[38]||=r(`p`,null,[o(`You can provide a custom template for the items via the `),r(`code`,null,`item`),o(` slot.`)],-1),a(h,null,{pug:t(()=>[...c[23]||=[o(`w-breadcrumbs(:items="items")
  template(#item="{ item, isLast }")
    w-tag(
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label")`,-1)]]),html:t(()=>[...c[24]||=[o(`<w-breadcrumbs :items="items">
  <template #item="{ item, isLast }">
    <w-tag
      :color="isLast ? 'grey' : 'green'"
      round
      outline
      v-html="item.label">
    </w-tag>
  </template>
</w-breadcrumbs>`,-1)]]),js:t(()=>[...c[25]||=[o(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[a(m,{items:s.items},{item:t(({item:e,isLast:t})=>[a(g,{color:t?`grey`:`green`,round:``,outline:``,innerHTML:e.label},null,8,[`color`,`innerHTML`])]),_:1},8,[`items`])]),_:1}),a(p,{h2:``},{default:t(()=>[...c[26]||=[o(`Link on the last item`,-1)]]),_:1}),c[39]||=r(`p`,null,[o(`The last item is usually the current page, therefore it's not useful to have a link on it.`),r(`br`),o(`
If it makes sense in your application, you can use the `),r(`code`,null,`link-last-item`),o(` prop.`)],-1),a(h,null,{pug:t(()=>[...c[27]||=[o(`w-breadcrumbs(:items="items" link-last-item)`,-1)]]),html:t(()=>[...c[28]||=[o(`<w-breadcrumbs :items="items" link-last-item />`,-1)]]),js:t(()=>[...c[29]||=[o(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})
`,-1)]]),default:t(()=>[a(m,{items:s.items,"link-last-item":``},null,8,[`items`])]),_:1}),a(p,{h2:``},{default:t(()=>[...c[30]||=[o(`Sizes`,-1)]]),_:1}),c[40]||=r(`p`,null,[o(`The breadcrumbs size can be controlled via the preset sizes `),r(`code`,null,`xs`),o(`, `),r(`code`,null,`sm`),o(`, `),r(`code`,null,`md`),o(`,
`),r(`code`,null,`lg`),o(`, `),r(`code`,null,`xl`),o(` or via CSS override.`)],-1),a(h,null,{pug:t(()=>[...c[31]||=[o(`w-breadcrumbs.my4(:items="items" xs)
w-breadcrumbs.my4(:items="items" sm)
w-breadcrumbs.my4(:items="items" md)
w-breadcrumbs.my4(:items="items" lg)
w-breadcrumbs.my4(:items="items" xl)`,-1)]]),html:t(()=>[...c[32]||=[o(`<w-breadcrumbs class="my4" :items="items" xs></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" sm></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" md></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" lg></w-breadcrumbs>
<w-breadcrumbs class="my4" :items="items" xl></w-breadcrumbs>`,-1)]]),js:t(()=>[...c[33]||=[o(`data: () => ({
  items: [
    { label: 'Sitemap', route: '/sitemap' },
    { label: 'Home', route: '/' },
    { label: 'Current page', route: '/w-breadcrumbs' }
  ]
})`,-1)]]),default:t(()=>[a(m,{class:`my4`,items:s.items,xs:``},null,8,[`items`]),a(m,{class:`my4`,items:s.items,sm:``},null,8,[`items`]),a(m,{class:`my4`,items:s.items,md:``},null,8,[`items`]),a(m,{class:`my4`,items:s.items,lg:``},null,8,[`items`]),a(m,{class:`my4`,items:s.items,xl:``},null,8,[`items`])]),_:1})])}var u=s({data:()=>({items:[{label:`Sitemap`,route:`/sitemap`},{label:`Home`,route:`/`},{label:`Current page`,route:`/w-breadcrumbs`}]})},[[`render`,l]]);function d(s,c,l,u,d,f){let p=n(`title-link`),m=n(`component-api`);return e(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:s.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var f={color:`Applies a text color to the breadcrumb's links.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,separatorColor:`Applies a text color (also applies to icons) to the breadcrumb's separators.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:`Provide a custom icon for the separators.`,items:`An array of items to display in the breadcrumbs. Each item must be an object containing a <code>label</code> and a <code>route</code>.<br>If no route is found the item will be wrapped in a span instead of a link.`,linkLastItem:`When set to true, and if the last item has a provided route, the last item will be a link.`,itemLabelKey:`The property name (aka "key") in each item object where to find the label of the item.`,itemRouteKey:`The property name (aka "key") in each item object where to find the link of the item.`,xs:`Sets the font size of the items.`,sm:`Sets the font size of the items.`,md:`Sets the font size of the items.`,lg:`Sets the font size of the items.`,xl:`Sets the font size of the items.`,noRipple:`When <code>true</code>, disables the pointer ripple on breadcrumb links for this instance. By default, ripple follows <code>$waveui.config.ripple</code>.`},p={separator:{description:`Provide a custom template for the breadcrumbs' separator.`,params:{index:`The separator index in the array of items. Starts at 1.`}},item:{description:`Provide a custom template for the breadcrumbs' item.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1.`,isLast:`A boolean indicating if the current item is the last one. May be useful if you want a particular template for the current page.`}}},m={},h=s({data:()=>({propsDescs:f,slots:p}),computed:{props(){return c.props},events(){return c.emits.reduce((e,t)=>(e[t]={description:m[t]||``},e),{})}}},[[`render`,d]]);function g(r,s,c,l,u,d){let f=n(`ui-component-title`),p=n(`examples`),m=n(`api`);return e(),i(`main`,null,[a(f,{slug:`w-breadcrumbs`},{default:t(()=>[...s[0]||=[o(`w-breadcrumbs`,-1)]]),_:1}),a(p),a(m)])}var _=s({components:{Examples:u,Api:h}},[[`render`,g]]);export{_ as default};