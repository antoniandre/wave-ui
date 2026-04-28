import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./plugin-vue_export-helper-B80Cc4Ui.js";import{i as l}from"./index-BhRaCC4I.js";function u(c,l,u,d,f,p){let m=e(`title-link`),h=e(`w-timeline`),g=e(`example`),_=e(`w-icon`),v=e(`w-tag`);return s(),i(`div`,null,[a(m,{h2:``},{default:t(()=>[...l[0]||=[o(`Basic`,-1)]]),_:1}),a(g,null,{pug:t(()=>[...l[1]||=[o(`w-timeline(:items="items")`,-1)]]),html:t(()=>[...l[2]||=[o(`<w-timeline :items="items"></w-timeline>`,-1)]]),js:t(()=>[...l[3]||=[o(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`,-1)]]),default:t(()=>[a(h,{items:c.items1},null,8,[`items`])]),_:1}),a(m,{h2:``},{default:t(()=>[...l[4]||=[o(`Color`,-1)]]),_:1}),l[32]||=r(`p`,null,[o(`When setting a color through the `),r(`code`,null,`color`),o(` prop, the color will be applied to both the item
bullet or icon, and the item title, on each item.`)],-1),a(g,null,{pug:t(()=>[...l[5]||=[o(`w-timeline(:items="items" color="green")`,-1)]]),html:t(()=>[...l[6]||=[o(`<w-timeline :items="items" color="green"></w-timeline>`,-1)]]),js:t(()=>[...l[7]||=[o(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`,-1)]]),default:t(()=>[a(h,{items:c.items1,color:`green`},null,8,[`items`])]),_:1}),a(m,{h3:``},{default:t(()=>[...l[8]||=[o(`Different color per item`,-1)]]),_:1}),l[33]||=r(`p`,null,[o(`It is possible to set a different color per item (and override the global `),r(`code`,null,`color`),o(` prop)
by providing a `),r(`code`,null,`color`),o(` attribute in the item object.`),r(`br`),o(`
The name of this attribute can be changed via the `),r(`code`,null,`item-color-key`),o(` prop.`)],-1),a(g,null,{pug:t(()=>[...l[9]||=[o(`w-timeline(:items="items")`,-1)]]),html:t(()=>[...l[10]||=[o(`<w-timeline :items="items"></w-timeline>`,-1)]]),js:t(()=>[...l[11]||=[o(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'pink' },
    { title: 'Item 2', content: 'Content 2', color: 'error' },
    { title: 'Item 3', content: 'Content 3', color: 'amber' },
    { title: 'Item 4', content: 'Content 4', color: 'success' }
  ]
})
`,-1)]]),default:t(()=>[a(h,{items:c.items2},null,8,[`items`])]),_:1}),a(m,{h2:``},{default:t(()=>[...l[12]||=[o(`Icons`,-1)]]),_:1}),l[34]||=r(`p`,null,[o(`The icon provided through the `),r(`code`,null,`icon`),o(` prop will apply to all the items.`)],-1),a(g,null,{pug:t(()=>[...l[13]||=[o(`w-timeline(:items="items" icon="wi-check" color="green")`,-1)]]),html:t(()=>[...l[14]||=[o(`<w-timeline :items="items" icon="wi-check" color="green"></w-timeline>`,-1)]]),js:t(()=>[...l[15]||=[o(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`,-1)]]),default:t(()=>[a(h,{items:c.items1,icon:`wi-check`,color:`green`},null,8,[`items`])]),_:1}),a(m,{h3:``},{default:t(()=>[...l[16]||=[o(`Different icon per item`,-1)]]),_:1}),l[35]||=r(`p`,null,[o(`It is possible to set a different icon per item (and override the global `),r(`code`,null,`icon`),o(` prop)
by providing an `),r(`code`,null,`icon`),o(` attribute in the item object.`),r(`br`),o(`
The name of this attribute can be changed via the `),r(`code`,null,`item-icon-key`),o(` prop.`)],-1),a(g,null,{pug:t(()=>[...l[17]||=[o(`w-timeline(:items="items" color="primary")`,-1)]]),html:t(()=>[...l[18]||=[o(`<w-timeline :items="items" color="primary"></w-timeline>`,-1)]]),js:t(()=>[...l[19]||=[o(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },
    { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },
    { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },
    { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' }
  ]
})
`,-1)]]),default:t(()=>[a(h,{items:c.items3,color:`primary`},null,8,[`items`])]),_:1}),a(m,{h2:``},{default:t(()=>[...l[20]||=[o(`Custom item template`,-1)]]),_:1}),a(g,null,{pug:t(()=>[...l[23]||=[o(`w-timeline(:items="items")
  template(#item="{ item, index }")
    w-icon wi-check
    span.mx2 This is the custom item
    w-tag.white.grey-light2--bg `+n(`{{ index }}`),-1)]]),html:t(()=>[...l[24]||=[o(`<w-timeline :items="items">
  <template #item="{ item, index }">
    <w-icon>wi-check</w-icon>

    <span class="mx2">
      This is the custom item
    </span>

    <w-tag class="white grey-light2--bg">
      `+n(`{{ index }}`)+`
    </w-tag>
  </template>
</w-timeline>`,-1)]]),js:t(()=>[...l[25]||=[o(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`,-1)]]),default:t(()=>[a(h,{items:c.items1},{item:t(({item:e,index:i})=>[a(_,null,{default:t(()=>[...l[21]||=[o(`wi-check`,-1)]]),_:1}),l[22]||=r(`span`,{class:`mx2`},`This is the custom item`,-1),a(v,{class:`white grey-light2--bg`},{default:t(()=>[o(n(i),1)]),_:2},1024)]),_:1},8,[`items`])]),_:1}),a(m,{h3:``},{default:t(()=>[...l[26]||=[o(`Different custom template per item`,-1)]]),_:1}),a(g,null,{pug:t(()=>[...l[29]||=[o(`w-timeline(:items="items")
  template(#item.3)
    .pink My favorite item: 3
    w-icon.pink mdi mdi-heart`,-1)]]),html:t(()=>[...l[30]||=[o(`<w-timeline :items="items">
  <template #item.3>
    <div class="pink">
      My favorite item: 3
    </div>

    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>
  </template>
</w-timeline>`,-1)]]),js:t(()=>[...l[31]||=[o(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})`,-1)]]),default:t(()=>[a(h,{items:c.items1},{"item.3":t(()=>[l[28]||=r(`span`,{class:`pink mr1`},`My favorite item: 3`,-1),a(_,{class:`pink`},{default:t(()=>[...l[27]||=[o(`mdi mdi-heart`,-1)]]),_:1})]),_:1},8,[`items`])]),_:1})])}var d=c({data:()=>({items1:[{title:`Item 1`,content:`Content 1`},{title:`Item 2`,content:`Content 2`},{title:`Item 3`,content:`Content 3`},{title:`Item 4`,content:`Content 4`}],items2:[{title:`Item 1`,content:`Content 1`,color:`pink`},{title:`Item 2`,content:`Content 2`,color:`error`},{title:`Item 3`,content:`Content 3`,color:`amber`},{title:`Item 4`,content:`Content 4`,color:`success`}],items3:[{title:`Item 1`,content:`Content 1`,icon:`wi-check-circle`},{title:`Item 2`,content:`Content 2`,icon:`wi-cross-circle`},{title:`Item 3`,content:`Content 3`,icon:`wi-warning-circle`},{title:`Item 4`,content:`Content 4`,icon:`wi-info-circle`}]})},[[`render`,u]]);function f(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var p={items:`The items to display in the timeline. Usually an array of objects containing at least a <code>title</code>.<br>In some cases you may also provide an integer (items count) to loop through. Each item can then be defined in the template using the <code>item.x</code> slot for each iteration of this integer.`,color:`Applies a color to both the item bullet or icon, and the item title, on each item.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:`A global icon string to apply to all the items.`,itemTitleKey:`The property name (aka "key") in each item object where to find the title of the item.`,itemContentKey:`The property name (aka "key") in each item object where to find the content of the item.`,itemIconKey:`The property name (aka "key") in each item object where to find the icon of the item.`,itemColorKey:`The property name (aka "key") in each item object where to find the color of the item.`},m={item:{description:`Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`}},"item.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`}}},h={},g=c({data:()=>({propsDescs:p,slots:m}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:h[t]||``},e),{})}}},[[`render`,f]]);function _(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-timeline`,-1)]]),_:1}),a(p),a(m)])}var v=c({components:{Examples:d,Api:g}},[[`render`,_]]);export{v as default};
