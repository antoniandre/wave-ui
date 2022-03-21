import{n as i,M as r}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Basic")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)]},proxy:!0}])},[e("w-timeline",{attrs:{items:t.items1}})],1),e("title-link",{attrs:{h2:""}},[t._v("Color")]),t._m(0),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items" color="green"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)]},proxy:!0}])},[e("w-timeline",{attrs:{items:t.items1,color:"green"}})],1),e("title-link",{attrs:{h3:""}},[t._v("Different color per item")]),t._m(1),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', color: 'pink' },
    { title: 'Item 2', content: 'Content 2', color: 'error' },
    { title: 'Item 3', content: 'Content 3', color: 'amber' },
    { title: 'Item 4', content: 'Content 4', color: 'success' }
  ]
})
`)]},proxy:!0}])},[e("w-timeline",{attrs:{items:t.items2}})],1),e("title-link",{attrs:{h2:""}},[t._v("Icons")]),t._m(2),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items" icon="wi-check" color="green"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)]},proxy:!0}])},[e("w-timeline",{attrs:{items:t.items1,icon:"wi-check",color:"green"}})],1),e("title-link",{attrs:{h3:""}},[t._v("Different icon per item")]),t._m(3),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-timeline :items="items" color="primary"></w-timeline>')]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },
    { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },
    { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },
    { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' }
  ]
})
`)]},proxy:!0}])},[e("w-timeline",{attrs:{items:t.items3,color:"primary"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Custom item template")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-timeline :items="items">
  <template #item="{ item, index }">
    <w-icon>wi-check</w-icon>

    <span class="mx2">
      This is the custom item
    </span>

    <w-tag class="white grey-light2--bg">
      `+t._s("{{ index }}")+`
    </w-tag>
  </template>
</w-timeline>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})
`)]},proxy:!0}])},[e("w-timeline",{attrs:{items:t.items1},scopedSlots:t._u([{key:"item",fn:function(o){o.item;var m=o.index;return[e("w-icon",[t._v("wi-check")]),e("span",{staticClass:"mx2"},[t._v("This is the custom item")]),e("w-tag",{staticClass:"white grey-light2--bg"},[t._v(t._s(m))])]}}])})],1),e("title-link",{attrs:{h3:""}},[t._v("Different custom template per item")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-timeline :items="items">
  <template #item.3>
    <div class="pink">
      My favorite item: 3
    </div>

    <w-icon class="pink">
      mdi mdi-heart
    </w-icon>
  </template>
</w-timeline>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  items: [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
    { title: 'Item 4', content: 'Content 4' }
  ]
})`)]},proxy:!0}])},[e("w-timeline",{attrs:{items:t.items1},scopedSlots:t._u([{key:"item.3",fn:function(){return[e("span",{staticClass:"pink mr1"},[t._v("My favorite item: 3")]),e("w-icon",{staticClass:"pink"},[t._v("mdi mdi-heart")])]},proxy:!0}])})],1)],1)},p=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("When setting a color through the "),e("code",[t._v("color")]),t._v(` prop, the color will be applied to both the item
bullet or icon, and the item title, on each item.`)])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("It is possible to set a different color per item (and override the global "),e("code",[t._v("color")]),t._v(` prop)
by providing a `),e("code",[t._v("color")]),t._v(" attribute in the item object."),e("br"),t._v(`
The name of this attribute can be changed via the `),e("code",[t._v("item-color-key")]),t._v(" prop.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("The icon provided through the "),e("code",[t._v("icon")]),t._v(" prop will apply to all the items.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("It is possible to set a different icon per item (and override the global "),e("code",[t._v("icon")]),t._v(` prop)
by providing an `),e("code",[t._v("icon")]),t._v(" attribute in the item object."),e("br"),t._v(`
The name of this attribute can be changed via the `),e("code",[t._v("item-icon-key")]),t._v(" prop.")])}];const _={data:()=>({items1:[{title:"Item 1",content:"Content 1"},{title:"Item 2",content:"Content 2"},{title:"Item 3",content:"Content 3"},{title:"Item 4",content:"Content 4"}],items2:[{title:"Item 1",content:"Content 1",color:"pink"},{title:"Item 2",content:"Content 2",color:"error"},{title:"Item 3",content:"Content 3",color:"amber"},{title:"Item 4",content:"Content 4",color:"success"}],items3:[{title:"Item 1",content:"Content 1",icon:"wi-check-circle"},{title:"Item 2",content:"Content 2",icon:"wi-cross-circle"},{title:"Item 3",content:"Content 3",icon:"wi-warning-circle"},{title:"Item 4",content:"Content 4",icon:"wi-info-circle"}]})},c={};var h=i(_,a,p,!1,u,null,null,null);function u(t){for(let n in c)this[n]=c[n]}var v=function(){return h.exports}(),d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)},f=[];const y={items:"The items to display in the timeline. Usually an array of objects containing at least a <code>title</code>.<br>In some cases you may also provide an integer (items count) to loop through. Each item can then be defined in the template using the <code>item.x</code> slot for each iteration of this integer.",color:'Applies a color to both the item bullet or icon, and the item title, on each item.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',icon:"A global icon string to apply to all the items.",itemTitleKey:'The property name (aka "key") in each item object where to find the title of the item.',itemContentKey:'The property name (aka "key") in each item object where to find the content of the item.',itemIconKey:'The property name (aka "key") in each item object where to find the icon of the item.',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item.'},w={item:{description:"Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}}},x={},C={data:()=>({propsDescs:y,slots:w}),computed:{props(){return r.props},events(){return r.emits.reduce((t,n)=>(t[n]={description:x[n]||""})&&t,{})}}},s={};var k=i(C,d,f,!1,I,null,null,null);function I(t){for(let n in s)this[n]=s[n]}var b=function(){return k.exports}(),g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("ui-component-title",[t._v("w-timeline")]),e("examples"),e("api")],1)},j=[];const $={components:{Examples:v,Api:b}},l={};var T=i($,g,j,!1,S,null,null,null);function S(t){for(let n in l)this[n]=l[n]}var D=function(){return T.exports}();export{D as default};
