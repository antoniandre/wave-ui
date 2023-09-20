import{r as m,o as h,g as d,a as n,w as e,b as t,t as p,d as i,_ as u,ac as b}from"./index.bf2cfd71.js";const y=i("p",null,[t("When setting a color through the "),i("code",null,"color"),t(` prop, the color will be applied to both the item
bullet or icon, and the item title, on each item.`)],-1),k=i("p",null,[t("It is possible to set a different color per item (and override the global "),i("code",null,"color"),t(` prop)
by providing a `),i("code",null,"color"),t(" attribute in the item object."),i("br"),t(`
The name of this attribute can be changed via the `),i("code",null,"item-color-key"),t(" prop.")],-1),v=i("p",null,[t("The icon provided through the "),i("code",null,"icon"),t(" prop will apply to all the items.")],-1),x=i("p",null,[t("It is possible to set a different icon per item (and override the global "),i("code",null,"icon"),t(` prop)
by providing an `),i("code",null,"icon"),t(" attribute in the item object."),i("br"),t(`
The name of this attribute can be changed via the `),i("code",null,"item-icon-key"),t(" prop.")],-1),T=i("span",{class:"mx2"},"This is the custom item",-1),j=i("span",{class:"pink mr1"},"My favorite item: 3",-1);function $(o,a,w,_,f,r){const c=m("title-link"),l=m("w-timeline"),s=m("example"),g=m("w-icon"),C=m("w-tag");return h(),d("div",null,[n(c,{h2:""},{default:e(()=>[t("Basic")]),_:1}),n(s,null,{pug:e(()=>[t('w-timeline(:items="items")')]),html:e(()=>[t('<w-timeline :items="items"></w-timeline>')]),js:e(()=>[t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)]),default:e(()=>[n(l,{items:o.items1},null,8,["items"])]),_:1}),n(c,{h2:""},{default:e(()=>[t("Color")]),_:1}),y,n(s,null,{pug:e(()=>[t('w-timeline(:items="items" color="green")')]),html:e(()=>[t('<w-timeline :items="items" color="green"></w-timeline>')]),js:e(()=>[t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)]),default:e(()=>[n(l,{items:o.items1,color:"green"},null,8,["items"])]),_:1}),n(c,{h3:""},{default:e(()=>[t("Different color per item")]),_:1}),k,n(s,null,{pug:e(()=>[t('w-timeline(:items="items")')]),html:e(()=>[t('<w-timeline :items="items"></w-timeline>')]),js:e(()=>[t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'pink' },
    { title: 'Item 2', content: 'Content 2', color: 'error' },
    { title: 'Item 3', content: 'Content 3', color: 'amber' },
    { title: 'Item 4', content: 'Content 4', color: 'success' }
  ]
})
`)]),default:e(()=>[n(l,{items:o.items2},null,8,["items"])]),_:1}),n(c,{h2:""},{default:e(()=>[t("Icons")]),_:1}),v,n(s,null,{pug:e(()=>[t('w-timeline(:items="items" icon="wi-check" color="green")')]),html:e(()=>[t('<w-timeline :items="items" icon="wi-check" color="green"></w-timeline>')]),js:e(()=>[t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)]),default:e(()=>[n(l,{items:o.items1,icon:"wi-check",color:"green"},null,8,["items"])]),_:1}),n(c,{h3:""},{default:e(()=>[t("Different icon per item")]),_:1}),x,n(s,null,{pug:e(()=>[t('w-timeline(:items="items" color="primary")')]),html:e(()=>[t('<w-timeline :items="items" color="primary"></w-timeline>')]),js:e(()=>[t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },
    { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },
    { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },
    { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' }
  ]
})
`)]),default:e(()=>[n(l,{items:o.items3,color:"primary"},null,8,["items"])]),_:1}),n(c,{h2:""},{default:e(()=>[t("Custom item template")]),_:1}),n(s,null,{pug:e(()=>[t(`w-timeline(:items="items")
  template(#item="{ item, index }")
    w-icon wi-check
    span.mx2 This is the custom item
    w-tag.white.grey-light2--bg `+p("{{ index }}"))]),html:e(()=>[t(`<w-timeline :items="items">
  <template #item="{ item, index }">
    <w-icon>wi-check</w-icon>

    <span class="mx2">
      This is the custom item
    </span>

    <w-tag class="white grey-light2--bg">
      `+p("{{ index }}")+`
    </w-tag>
  </template>
</w-timeline>`)]),js:e(()=>[t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)]),default:e(()=>[n(l,{items:o.items1},{item:e(({item:U,index:I})=>[n(g,null,{default:e(()=>[t("wi-check")]),_:1}),T,n(C,{class:"white grey-light2--bg"},{default:e(()=>[t(p(I),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),n(c,{h3:""},{default:e(()=>[t("Different custom template per item")]),_:1}),n(s,null,{pug:e(()=>[t(`w-timeline(:items="items")
  template(#item.3)
    .pink My favorite item: 3
    w-icon.pink mdi mdi-heart`)]),html:e(()=>[t(`<w-timeline :items="items">
  <template #item.3>
    <div class="pink">
      My favorite item: 3
    </div>

    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>
  </template>
</w-timeline>`)]),js:e(()=>[t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})`)]),default:e(()=>[n(l,{items:o.items1},{"item.3":e(()=>[j,n(g,{class:"pink"},{default:e(()=>[t("mdi mdi-heart")]),_:1})]),_:1},8,["items"])]),_:1})])}const D={data:()=>({items1:[{title:"Item 1",content:"Content 1"},{title:"Item 2",content:"Content 2"},{title:"Item 3",content:"Content 3"},{title:"Item 4",content:"Content 4"}],items2:[{title:"Item 1",content:"Content 1",color:"pink"},{title:"Item 2",content:"Content 2",color:"error"},{title:"Item 3",content:"Content 3",color:"amber"},{title:"Item 4",content:"Content 4",color:"success"}],items3:[{title:"Item 1",content:"Content 1",icon:"wi-check-circle"},{title:"Item 2",content:"Content 2",icon:"wi-cross-circle"},{title:"Item 3",content:"Content 3",icon:"wi-warning-circle"},{title:"Item 4",content:"Content 4",icon:"wi-info-circle"}]})},A=u(D,[["render",$]]),P=i("div",{class:"w-divider my12"},null,-1);function B(o,a,w,_,f,r){const c=m("title-link"),l=m("component-api");return h(),d("div",null,[P,n(c,{class:"title1",h2:""},{default:e(()=>[t("API")]),_:1}),n(l,{class:"mt0",items:r.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(l,{items:o.slots,title:"Slots"},null,8,["items"]),n(l,{items:r.events,title:"Events"},null,8,["items"])])}const E={items:"The items to display in the timeline. Usually an array of objects containing at least a <code>title</code>.<br>In some cases you may also provide an integer (items count) to loop through. Each item can then be defined in the template using the <code>item.x</code> slot for each iteration of this integer.",color:'Applies a color to both the item bullet or icon, and the item title, on each item.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',icon:"A global icon string to apply to all the items.",itemTitleKey:'The property name (aka "key") in each item object where to find the title of the item.',itemContentKey:'The property name (aka "key") in each item object where to find the content of the item.',itemIconKey:'The property name (aka "key") in each item object where to find the icon of the item.',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item.'},K={item:{description:"Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}}},S={},M={data:()=>({propsDescs:E,slots:K}),computed:{props(){return b.props},events(){return b.emits.reduce((o,a)=>(o[a]={description:S[a]||""})&&o,{})}}},N=u(M,[["render",B]]);function V(o,a,w,_,f,r){const c=m("ui-component-title"),l=m("examples"),s=m("api");return h(),d("main",null,[n(c,null,{default:e(()=>[t("w-timeline")]),_:1}),n(l),n(s)])}const W={components:{Examples:A,Api:N}},z=u(W,[["render",V]]);export{z as default};
