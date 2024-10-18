import{r,o as d,g as u,a as i,w as n,b as e,d as o,t as c,_ as w,ab as C}from"./index-Bw-2NxhK.js";function k(l,t,f,g,b,p){const s=r("title-link"),m=r("w-timeline"),a=r("example"),h=r("w-icon"),I=r("w-tag");return d(),u("div",null,[i(s,{h2:""},{default:n(()=>t[0]||(t[0]=[e("Basic")])),_:1}),i(a,null,{pug:n(()=>t[1]||(t[1]=[e('w-timeline(:items="items")')])),html:n(()=>t[2]||(t[2]=[e('<w-timeline :items="items"></w-timeline>')])),js:n(()=>t[3]||(t[3]=[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)])),default:n(()=>[i(m,{items:l.items1},null,8,["items"])]),_:1}),i(s,{h2:""},{default:n(()=>t[4]||(t[4]=[e("Color")])),_:1}),t[32]||(t[32]=o("p",null,[e("When setting a color through the "),o("code",null,"color"),e(` prop, the color will be applied to both the item
bullet or icon, and the item title, on each item.`)],-1)),i(a,null,{pug:n(()=>t[5]||(t[5]=[e('w-timeline(:items="items" color="green")')])),html:n(()=>t[6]||(t[6]=[e('<w-timeline :items="items" color="green"></w-timeline>')])),js:n(()=>t[7]||(t[7]=[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)])),default:n(()=>[i(m,{items:l.items1,color:"green"},null,8,["items"])]),_:1}),i(s,{h3:""},{default:n(()=>t[8]||(t[8]=[e("Different color per item")])),_:1}),t[33]||(t[33]=o("p",null,[e("It is possible to set a different color per item (and override the global "),o("code",null,"color"),e(` prop)
by providing a `),o("code",null,"color"),e(" attribute in the item object."),o("br"),e(`
The name of this attribute can be changed via the `),o("code",null,"item-color-key"),e(" prop.")],-1)),i(a,null,{pug:n(()=>t[9]||(t[9]=[e('w-timeline(:items="items")')])),html:n(()=>t[10]||(t[10]=[e('<w-timeline :items="items"></w-timeline>')])),js:n(()=>t[11]||(t[11]=[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'pink' },
    { title: 'Item 2', content: 'Content 2', color: 'error' },
    { title: 'Item 3', content: 'Content 3', color: 'amber' },
    { title: 'Item 4', content: 'Content 4', color: 'success' }
  ]
})
`)])),default:n(()=>[i(m,{items:l.items2},null,8,["items"])]),_:1}),i(s,{h2:""},{default:n(()=>t[12]||(t[12]=[e("Icons")])),_:1}),t[34]||(t[34]=o("p",null,[e("The icon provided through the "),o("code",null,"icon"),e(" prop will apply to all the items.")],-1)),i(a,null,{pug:n(()=>t[13]||(t[13]=[e('w-timeline(:items="items" icon="wi-check" color="green")')])),html:n(()=>t[14]||(t[14]=[e('<w-timeline :items="items" icon="wi-check" color="green"></w-timeline>')])),js:n(()=>t[15]||(t[15]=[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)])),default:n(()=>[i(m,{items:l.items1,icon:"wi-check",color:"green"},null,8,["items"])]),_:1}),i(s,{h3:""},{default:n(()=>t[16]||(t[16]=[e("Different icon per item")])),_:1}),t[35]||(t[35]=o("p",null,[e("It is possible to set a different icon per item (and override the global "),o("code",null,"icon"),e(` prop)
by providing an `),o("code",null,"icon"),e(" attribute in the item object."),o("br"),e(`
The name of this attribute can be changed via the `),o("code",null,"item-icon-key"),e(" prop.")],-1)),i(a,null,{pug:n(()=>t[17]||(t[17]=[e('w-timeline(:items="items" color="primary")')])),html:n(()=>t[18]||(t[18]=[e('<w-timeline :items="items" color="primary"></w-timeline>')])),js:n(()=>t[19]||(t[19]=[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },
    { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },
    { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },
    { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' }
  ]
})
`)])),default:n(()=>[i(m,{items:l.items3,color:"primary"},null,8,["items"])]),_:1}),i(s,{h2:""},{default:n(()=>t[20]||(t[20]=[e("Custom item template")])),_:1}),i(a,null,{pug:n(()=>t[23]||(t[23]=[e(`w-timeline(:items="items")
  template(#item="{ item, index }")
    w-icon wi-check
    span.mx2 This is the custom item
    w-tag.white.grey-light2--bg `+c("{{ index }}"))])),html:n(()=>t[24]||(t[24]=[e(`<w-timeline :items="items">
  <template #item="{ item, index }">
    <w-icon>wi-check</w-icon>

    <span class="mx2">
      This is the custom item
    </span>

    <w-tag class="white grey-light2--bg">
      `+c("{{ index }}")+`
    </w-tag>
  </template>
</w-timeline>`)])),js:n(()=>t[25]||(t[25]=[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)])),default:n(()=>[i(m,{items:l.items1},{item:n(({item:K,index:y})=>[i(h,null,{default:n(()=>t[21]||(t[21]=[e("wi-check")])),_:1}),t[22]||(t[22]=o("span",{class:"mx2"},"This is the custom item",-1)),i(I,{class:"white grey-light2--bg"},{default:n(()=>[e(c(y),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),i(s,{h3:""},{default:n(()=>t[26]||(t[26]=[e("Different custom template per item")])),_:1}),i(a,null,{pug:n(()=>t[29]||(t[29]=[e(`w-timeline(:items="items")
  template(#item.3)
    .pink My favorite item: 3
    w-icon.pink mdi mdi-heart`)])),html:n(()=>t[30]||(t[30]=[e(`<w-timeline :items="items">
  <template #item.3>
    <div class="pink">
      My favorite item: 3
    </div>

    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>
  </template>
</w-timeline>`)])),js:n(()=>t[31]||(t[31]=[e(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})`)])),default:n(()=>[i(m,{items:l.items1},{"item.3":n(()=>[t[28]||(t[28]=o("span",{class:"pink mr1"},"My favorite item: 3",-1)),i(h,{class:"pink"},{default:n(()=>t[27]||(t[27]=[e("mdi mdi-heart")])),_:1})]),_:1},8,["items"])]),_:1})])}const v={data:()=>({items1:[{title:"Item 1",content:"Content 1"},{title:"Item 2",content:"Content 2"},{title:"Item 3",content:"Content 3"},{title:"Item 4",content:"Content 4"}],items2:[{title:"Item 1",content:"Content 1",color:"pink"},{title:"Item 2",content:"Content 2",color:"error"},{title:"Item 3",content:"Content 3",color:"amber"},{title:"Item 4",content:"Content 4",color:"success"}],items3:[{title:"Item 1",content:"Content 1",icon:"wi-check-circle"},{title:"Item 2",content:"Content 2",icon:"wi-cross-circle"},{title:"Item 3",content:"Content 3",icon:"wi-warning-circle"},{title:"Item 4",content:"Content 4",icon:"wi-info-circle"}]})},x=w(v,[["render",k]]);function T(l,t,f,g,b,p){const s=r("title-link"),m=r("component-api");return d(),u("div",null,[t[1]||(t[1]=o("div",{class:"w-divider my12"},null,-1)),i(s,{class:"title1",h2:""},{default:n(()=>t[0]||(t[0]=[e("API")])),_:1}),i(m,{class:"mt0",items:p.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),i(m,{items:l.slots,title:"Slots"},null,8,["items"]),i(m,{items:p.events,title:"Events"},null,8,["items"])])}const j={items:"The items to display in the timeline. Usually an array of objects containing at least a <code>title</code>.<br>In some cases you may also provide an integer (items count) to loop through. Each item can then be defined in the template using the <code>item.x</code> slot for each iteration of this integer.",color:'Applies a color to both the item bullet or icon, and the item title, on each item.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',icon:"A global icon string to apply to all the items.",itemTitleKey:'The property name (aka "key") in each item object where to find the title of the item.',itemContentKey:'The property name (aka "key") in each item object where to find the content of the item.',itemIconKey:'The property name (aka "key") in each item object where to find the icon of the item.',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item.'},$={item:{description:"Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}}},D={},A={data:()=>({propsDescs:j,slots:$}),computed:{props(){return C.props},events(){return C.emits.reduce((l,t)=>(l[t]={description:D[t]||""})&&l,{})}}},P=w(A,[["render",T]]);function B(l,t,f,g,b,p){const s=r("ui-component-title"),m=r("examples"),a=r("api");return d(),u("main",null,[i(s,null,{default:n(()=>t[0]||(t[0]=[e("w-timeline")])),_:1}),i(m),i(a)])}const E={components:{Examples:x,Api:P}},M=w(E,[["render",B]]);export{M as default};
