import{N as e,U as t,c as n,d as r,g as i,h as a,k as o,yt as s}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as c}from"./_plugin-vue_export-helper-S3RvzygF.js";import{i as l}from"./index-CKcZQ2YR.js";function u(c,l,u,d,f,p){let m=e(`title-link`),h=e(`w-timeline`),g=e(`example`),_=e(`w-icon`),v=e(`w-tag`);return o(),r(`div`,null,[i(m,{h2:``},{default:t(()=>[...l[0]||=[a(`Basic`,-1)]]),_:1}),i(g,null,{pug:t(()=>[...l[1]||=[a(`w-timeline(:items="items")`,-1)]]),html:t(()=>[...l[2]||=[a(`<w-timeline :items="items"></w-timeline>`,-1)]]),js:t(()=>[...l[3]||=[a(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`,-1)]]),default:t(()=>[i(h,{items:c.items1},null,8,[`items`])]),_:1}),i(m,{h2:``},{default:t(()=>[...l[4]||=[a(`Color`,-1)]]),_:1}),l[32]||=n(`p`,null,[a(`When setting a color through the `),n(`code`,null,`color`),a(` prop, the color will be applied to both the item
bullet or icon, and the item title, on each item.`)],-1),i(g,null,{pug:t(()=>[...l[5]||=[a(`w-timeline(:items="items" color="green")`,-1)]]),html:t(()=>[...l[6]||=[a(`<w-timeline :items="items" color="green"></w-timeline>`,-1)]]),js:t(()=>[...l[7]||=[a(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`,-1)]]),default:t(()=>[i(h,{items:c.items1,color:`green`},null,8,[`items`])]),_:1}),i(m,{h3:``},{default:t(()=>[...l[8]||=[a(`Different color per item`,-1)]]),_:1}),l[33]||=n(`p`,null,[a(`It is possible to set a different color per item (and override the global `),n(`code`,null,`color`),a(` prop)
by providing a `),n(`code`,null,`color`),a(` attribute in the item object.`),n(`br`),a(`
The name of this attribute can be changed via the `),n(`code`,null,`item-color-key`),a(` prop.`)],-1),i(g,null,{pug:t(()=>[...l[9]||=[a(`w-timeline(:items="items")`,-1)]]),html:t(()=>[...l[10]||=[a(`<w-timeline :items="items"></w-timeline>`,-1)]]),js:t(()=>[...l[11]||=[a(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'pink' },
    { title: 'Item 2', content: 'Content 2', color: 'error' },
    { title: 'Item 3', content: 'Content 3', color: 'amber' },
    { title: 'Item 4', content: 'Content 4', color: 'success' }
  ]
})
`,-1)]]),default:t(()=>[i(h,{items:c.items2},null,8,[`items`])]),_:1}),i(m,{h2:``},{default:t(()=>[...l[12]||=[a(`Icons`,-1)]]),_:1}),l[34]||=n(`p`,null,[a(`The icon provided through the `),n(`code`,null,`icon`),a(` prop will apply to all the items.`)],-1),i(g,null,{pug:t(()=>[...l[13]||=[a(`w-timeline(:items="items" icon="wi-check" color="green")`,-1)]]),html:t(()=>[...l[14]||=[a(`<w-timeline :items="items" icon="wi-check" color="green"></w-timeline>`,-1)]]),js:t(()=>[...l[15]||=[a(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`,-1)]]),default:t(()=>[i(h,{items:c.items1,icon:`wi-check`,color:`green`},null,8,[`items`])]),_:1}),i(m,{h3:``},{default:t(()=>[...l[16]||=[a(`Different icon per item`,-1)]]),_:1}),l[35]||=n(`p`,null,[a(`It is possible to set a different icon per item (and override the global `),n(`code`,null,`icon`),a(` prop)
by providing an `),n(`code`,null,`icon`),a(` attribute in the item object.`),n(`br`),a(`
The name of this attribute can be changed via the `),n(`code`,null,`item-icon-key`),a(` prop.`)],-1),i(g,null,{pug:t(()=>[...l[17]||=[a(`w-timeline(:items="items" color="primary")`,-1)]]),html:t(()=>[...l[18]||=[a(`<w-timeline :items="items" color="primary"></w-timeline>`,-1)]]),js:t(()=>[...l[19]||=[a(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },
    { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },
    { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },
    { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' }
  ]
})
`,-1)]]),default:t(()=>[i(h,{items:c.items3,color:`primary`},null,8,[`items`])]),_:1}),i(m,{h2:``},{default:t(()=>[...l[20]||=[a(`Custom item template`,-1)]]),_:1}),i(g,null,{pug:t(()=>[...l[23]||=[a(`w-timeline(:items="items")
  template(#item="{ item, index }")
    w-icon wi-check
    span.mx2 This is the custom item
    w-tag.white.grey-light2--bg `+s(`{{ index }}`),-1)]]),html:t(()=>[...l[24]||=[a(`<w-timeline :items="items">
  <template #item="{ item, index }">
    <w-icon>wi-check</w-icon>

    <span class="mx2">
      This is the custom item
    </span>

    <w-tag class="white grey-light2--bg">
      `+s(`{{ index }}`)+`
    </w-tag>
  </template>
</w-timeline>`,-1)]]),js:t(()=>[...l[25]||=[a(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`,-1)]]),default:t(()=>[i(h,{items:c.items1},{item:t(({item:e,index:r})=>[i(_,null,{default:t(()=>[...l[21]||=[a(`wi-check`,-1)]]),_:1}),l[22]||=n(`span`,{class:`mx2`},`This is the custom item`,-1),i(v,{class:`white grey-light2--bg`},{default:t(()=>[a(s(r),1)]),_:2},1024)]),_:1},8,[`items`])]),_:1}),i(m,{h3:``},{default:t(()=>[...l[26]||=[a(`Different custom template per item`,-1)]]),_:1}),i(g,null,{pug:t(()=>[...l[29]||=[a(`w-timeline(:items="items")
  template(#item.3)
    .pink My favorite item: 3
    w-icon.pink mdi mdi-heart`,-1)]]),html:t(()=>[...l[30]||=[a(`<w-timeline :items="items">
  <template #item.3>
    <div class="pink">
      My favorite item: 3
    </div>

    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>
  </template>
</w-timeline>`,-1)]]),js:t(()=>[...l[31]||=[a(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})`,-1)]]),default:t(()=>[i(h,{items:c.items1},{"item.3":t(()=>[l[28]||=n(`span`,{class:`pink mr1`},`My favorite item: 3`,-1),i(_,{class:`pink`},{default:t(()=>[...l[27]||=[a(`mdi mdi-heart`,-1)]]),_:1})]),_:1},8,[`items`])]),_:1})])}var d=c({data:()=>({items1:[{title:`Item 1`,content:`Content 1`},{title:`Item 2`,content:`Content 2`},{title:`Item 3`,content:`Content 3`},{title:`Item 4`,content:`Content 4`}],items2:[{title:`Item 1`,content:`Content 1`,color:`pink`},{title:`Item 2`,content:`Content 2`,color:`error`},{title:`Item 3`,content:`Content 3`,color:`amber`},{title:`Item 4`,content:`Content 4`,color:`success`}],items3:[{title:`Item 1`,content:`Content 1`,icon:`wi-check-circle`},{title:`Item 2`,content:`Content 2`,icon:`wi-cross-circle`},{title:`Item 3`,content:`Content 3`,icon:`wi-warning-circle`},{title:`Item 4`,content:`Content 4`,icon:`wi-info-circle`}]})},[[`render`,u]]);function f(s,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var p={items:`The items to display in the timeline. Usually an array of objects containing at least a <code>title</code>.<br>In some cases you may also provide an integer (items count) to loop through. Each item can then be defined in the template using the <code>item.x</code> slot for each iteration of this integer.`,color:`Applies a color to both the item bullet or icon, and the item title, on each item.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:`A global icon string to apply to all the items.`,itemTitleKey:`The property name (aka "key") in each item object where to find the title of the item.`,itemContentKey:`The property name (aka "key") in each item object where to find the content of the item.`,itemIconKey:`The property name (aka "key") in each item object where to find the icon of the item.`,itemColorKey:`The property name (aka "key") in each item object where to find the color of the item.`},m={item:{description:`Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`}},"item.x":{description:`<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.`,params:{item:`The current item object.`,index:`The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.`}}},h={},g=c({data:()=>({propsDescs:p,slots:m}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:h[t]||``},e),{})}}},[[`render`,f]]);function _(n,s,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return o(),r(`main`,null,[i(f,null,{default:t(()=>[...s[0]||=[a(`w-timeline`,-1)]]),_:1}),i(p),i(m)])}var v=c({components:{Examples:d,Api:g}},[[`render`,_]]);export{v as default};