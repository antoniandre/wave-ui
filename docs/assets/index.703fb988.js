import{r as l,o as h,f as d,a as n,w as e,e as t,h as p,b as i,_,c1 as b}from"./index.d8ad3dc7.js";const y=t("Basic"),k=t('w-timeline(:items="items")'),v=t('<w-timeline :items="items"></w-timeline>'),x=t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`),T=t("Color"),$=i("p",null,[t("When setting a color through the "),i("code",null,"color"),t(` prop, the color will be applied to both the item
bullet or icon, and the item title, on each item.`)],-1),j=t('w-timeline(:items="items" color="green")'),D=t('<w-timeline :items="items" color="green"></w-timeline>'),A=t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`),P=t("Different color per item"),B=i("p",null,[t("It is possible to set a different color per item (and override the global "),i("code",null,"color"),t(` prop)
by providing a `),i("code",null,"color"),t(" attribute in the item object."),i("br"),t(`
The name of this attribute can be changed via the `),i("code",null,"item-color-key"),t(" prop.")],-1),E=t('w-timeline(:items="items")'),K=t('<w-timeline :items="items"></w-timeline>'),S=t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'pink' },
    { title: 'Item 2', content: 'Content 2', color: 'error' },
    { title: 'Item 3', content: 'Content 3', color: 'amber' },
    { title: 'Item 4', content: 'Content 4', color: 'success' }
  ]
})
`),M=t("Icons"),N=i("p",null,[t("The icon provided through the "),i("code",null,"icon"),t(" prop will apply to all the items.")],-1),V=t('w-timeline(:items="items" icon="wi-check" color="green")'),W=t('<w-timeline :items="items" icon="wi-check" color="green"></w-timeline>'),U=t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`),q=t("Different icon per item"),z=i("p",null,[t("It is possible to set a different icon per item (and override the global "),i("code",null,"icon"),t(` prop)
by providing an `),i("code",null,"icon"),t(" attribute in the item object."),i("br"),t(`
The name of this attribute can be changed via the `),i("code",null,"item-icon-key"),t(" prop.")],-1),F=t('w-timeline(:items="items" color="primary")'),G=t('<w-timeline :items="items" color="primary"></w-timeline>'),H=t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },
    { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },
    { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },
    { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' }
  ]
})
`),J=t("Custom item template"),L=t("wi-check"),O=i("span",{class:"mx2"},"This is the custom item",-1),Q=t(`w-timeline(:items="items")
  template(#item="{ item, index }")
    w-icon wi-check
    span.mx2 This is the custom item
    w-tag.white.grey-light2--bg `+p("{{ index }}")),R=t(`<w-timeline :items="items">
  <template #item="{ item, index }">
    <w-icon>wi-check</w-icon>

    <span class="mx2">
      This is the custom item
    </span>

    <w-tag class="white grey-light2--bg">
      `+p("{{ index }}")+`
    </w-tag>
  </template>
</w-timeline>`),X=t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`),Y=t("Different custom template per item"),Z=i("span",{class:"pink mr1"},"My favorite item: 3",-1),tt=t("mdi mdi-heart"),et=t(`w-timeline(:items="items")
  template(#item.3)
    .pink My favorite item: 3
    w-icon.pink mdi mdi-heart`),nt=t(`<w-timeline :items="items">
  <template #item.3>
    <div class="pink">
      My favorite item: 3
    </div>

    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>
  </template>
</w-timeline>`),it=t(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})`);function ot(o,a,u,w,f,r){const c=l("title-link"),s=l("w-timeline"),m=l("example"),g=l("w-icon"),C=l("w-tag");return h(),d("div",null,[n(c,{h2:""},{default:e(()=>[y]),_:1}),n(m,null,{pug:e(()=>[k]),html:e(()=>[v]),js:e(()=>[x]),default:e(()=>[n(s,{items:o.items1},null,8,["items"])]),_:1}),n(c,{h2:""},{default:e(()=>[T]),_:1}),$,n(m,null,{pug:e(()=>[j]),html:e(()=>[D]),js:e(()=>[A]),default:e(()=>[n(s,{items:o.items1,color:"green"},null,8,["items"])]),_:1}),n(c,{h3:""},{default:e(()=>[P]),_:1}),B,n(m,null,{pug:e(()=>[E]),html:e(()=>[K]),js:e(()=>[S]),default:e(()=>[n(s,{items:o.items2},null,8,["items"])]),_:1}),n(c,{h2:""},{default:e(()=>[M]),_:1}),N,n(m,null,{pug:e(()=>[V]),html:e(()=>[W]),js:e(()=>[U]),default:e(()=>[n(s,{items:o.items1,icon:"wi-check",color:"green"},null,8,["items"])]),_:1}),n(c,{h3:""},{default:e(()=>[q]),_:1}),z,n(m,null,{pug:e(()=>[F]),html:e(()=>[G]),js:e(()=>[H]),default:e(()=>[n(s,{items:o.items3,color:"primary"},null,8,["items"])]),_:1}),n(c,{h2:""},{default:e(()=>[J]),_:1}),n(m,null,{pug:e(()=>[Q]),html:e(()=>[R]),js:e(()=>[X]),default:e(()=>[n(s,{items:o.items1},{item:e(({item:gt,index:I})=>[n(g,null,{default:e(()=>[L]),_:1}),O,n(C,{class:"white grey-light2--bg"},{default:e(()=>[t(p(I),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),n(c,{h3:""},{default:e(()=>[Y]),_:1}),n(m,null,{pug:e(()=>[et]),html:e(()=>[nt]),js:e(()=>[it]),default:e(()=>[n(s,{items:o.items1},{"item.3":e(()=>[Z,n(g,{class:"pink"},{default:e(()=>[tt]),_:1})]),_:1},8,["items"])]),_:1})])}const st={data:()=>({items1:[{title:"Item 1",content:"Content 1"},{title:"Item 2",content:"Content 2"},{title:"Item 3",content:"Content 3"},{title:"Item 4",content:"Content 4"}],items2:[{title:"Item 1",content:"Content 1",color:"pink"},{title:"Item 2",content:"Content 2",color:"error"},{title:"Item 3",content:"Content 3",color:"amber"},{title:"Item 4",content:"Content 4",color:"success"}],items3:[{title:"Item 1",content:"Content 1",icon:"wi-check-circle"},{title:"Item 2",content:"Content 2",icon:"wi-cross-circle"},{title:"Item 3",content:"Content 3",icon:"wi-warning-circle"},{title:"Item 4",content:"Content 4",icon:"wi-info-circle"}]})};var ct=_(st,[["render",ot]]);const lt=i("div",{class:"w-divider my12"},null,-1),mt=t("API");function at(o,a,u,w,f,r){const c=l("title-link"),s=l("component-api");return h(),d("div",null,[lt,n(c,{class:"title1",h2:""},{default:e(()=>[mt]),_:1}),n(s,{class:"mt0",items:r.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(s,{items:o.slots,title:"Slots"},null,8,["items"]),n(s,{items:r.events,title:"Events"},null,8,["items"])])}const rt={items:"The items to display in the timeline. Usually an array of objects containing at least a <code>title</code>.<br>In some cases you may also provide an integer (items count) to loop through. Each item can then be defined in the template using the <code>item.x</code> slot for each iteration of this integer.",color:'Applies a color to both the item bullet or icon, and the item title, on each item.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',icon:"A global icon string to apply to all the items.",itemTitleKey:'The property name (aka "key") in each item object where to find the title of the item.',itemContentKey:'The property name (aka "key") in each item object where to find the content of the item.',itemIconKey:'The property name (aka "key") in each item object where to find the icon of the item.',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item.'},ht={item:{description:"Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}}},dt={},pt={data:()=>({propsDescs:rt,slots:ht}),computed:{props(){return b.props},events(){return b.emits.reduce((o,a)=>(o[a]={description:dt[a]||""})&&o,{})}}};var _t=_(pt,[["render",at]]);const ut=t("w-timeline");function wt(o,a,u,w,f,r){const c=l("ui-component-title"),s=l("examples"),m=l("api");return h(),d("main",null,[n(c,null,{default:e(()=>[ut]),_:1}),n(s),n(m)])}const ft={components:{Examples:ct,Api:_t}};var Ct=_(ft,[["render",wt]]);export{Ct as default};
