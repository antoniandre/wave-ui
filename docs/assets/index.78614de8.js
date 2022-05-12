var D=Object.defineProperty;var T=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var S=(s,a,d)=>a in s?D(s,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[a]=d,v=(s,a)=>{for(var d in a||(a={}))O.call(a,d)&&S(s,d,a[d]);if(T)for(var d of T(a))P.call(a,d)&&S(s,d,a[d]);return s};import{r as u,o as b,f as _,a as l,w as t,b as n,h as r,e,X as V,aK as E,c as L,_ as y,bU as M,bz as $}from"./index.5f89106b.js";const U=e("The "),C=n("span",{class:"code"},"w-select",-1),R=e(` component can be placed in a hidden overflow container and the dropdown
menu will still be fully visible when open.`),B=n("br",null,null,-1),W=e(`
This is because the select dropdown menu is placed at the `),x=n("span",{class:"code"},".w-app",-1),F=e(` level in the DOM,
just so you don't have to worry about this annoying case.
`),q=e("Basic"),N=n("p",null,[e("This is the most basic use of the "),n("span",{class:"code"},"w-select"),e(" component. No label, no v-model, only items.")],-1),K=e('<w-select :items="items"></w-select>'),H=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),z=e("Label and / or placeholder"),Y=n("p",null,[e("The select list can have a label or not and a placeholder or not."),n("br")],-1),G=e(`<w-select
  :items="items"
  label="Label">
</w-select>

<w-select
  class="mt4"
  :items="items"
  placeholder="Placeholder">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Label"
  placeholder="Placeholder">
</w-select>
`),X=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),J=e(`The items of the select list should have a label, which is by default expected in each item
object under the `),Q=n("code",null,"label",-1),Z=e(" name."),ee=n("br",null,null,-1),te=e(`
If this is a constraint, you can use the option `),le=n("code",null,"item-label-key",-1),se=e(` to specify the name of another
attribute to be used instead.
`),ne=e("Outline"),oe=e("Label"),ie=e('<w-select :items="items" outline>Label</w-select>'),ae=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),ce=e("Colors"),de=n("p",{class:"mb4"},[e("Like in most components, you can set a "),n("code",null,"color"),e(" for the text and a "),n("code",null,"bg-color"),e(` for the
background.`),n("br"),e(`
By default, the text has the "`),n("span",{class:"code"},"primary"),e('" color.')],-1),me=e("Default style (Underline)"),re=e("Label"),ue=e("Label"),he=e(`<w-select
  :items="items"
  color="blue">
  Label
</w-select>

<w-select
  class="mt4"
  :items="items"
  bg-color="blue-light5"
  color="blue-dark3">
  Label
</w-select>`),be=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),pe=e("Outline style"),_e=e("Label"),fe=e("Label"),we=e(`<w-select
  :items="items"
  outline
  color="blue">
  Label
</w-select>

<w-select
  class="mt4"
  :items="items"
  outline
  bg-color="blue-light5"
  color="blue-dark3">
  Label
</w-select>`),ge=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),ve=e("List items colors"),ye=n("p",null,[e("If an item object contains the key "),n("code",null,"color"),e(`, it will naturally be used by the
`),n("strong",{class:"code"},"w-select"),e(" component to display this list item in this color."),n("br"),e(`
To disable this you can set the `),n("code",null,"item-color-key"),e(" prop to an empty string.")],-1),Ie=e("Pick a color"),ke=e(`<w-select :items="items">
  Pick a color
</w-select>`),je=e(`data: () => ({
  items: [
    { label: 'Amber', color: 'amber' },
    { label: 'Warning', color: 'warning' },
    { label: 'Error', color: 'error' },
    { label: 'Pink', color: 'pink' }
  ]
})
`),Te=e("Shadow"),Se=n("div",{class:"title4"},"Default style (Underline)",-1),Le=e("Label"),Me=n("div",{class:"title4 mt6"},"Outline style",-1),Ae=e("Label"),De=e(`<div class="title4 mb2">
  Default style (Underline)
</div>

<w-select :items="items" shadow>
  Label
</w-select>

<div class="title4 mt6 mb2">
  Outline style
</div>

<w-select :items="items" outline shadow>
  Label
</w-select>`),Oe=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),Pe=e("Tile & round"),Ve=n("div",{class:"title4"},"Default style (Underline)",-1),Ee=e("Tile"),$e=e("Round"),Ue=n("div",{class:"title4 mt6"},"Outline style",-1),Ce=e("Tile"),Re=e("Round"),Be=e(`<div class="title4">
  Default style (Underline)
</div>

<w-select
  class="mt3"
  :items="items"
  bg-color="purple-light5"
  tile>
  Tile
</w-select>

<w-select
  class="mt4"
  :items="items"
  bg-color="purple-light5"
  round>
  Round
</w-select>

<div class="title4 mt6">
  Outline style
</div>

<w-select
  class="mt3"
  :items="items"
  outline
  tile>
  Tile
</w-select>

<w-select
  class="mt4"
  :items="items"
  outline
  round>
  Round
</w-select>
`),We=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),xe=e("Multiple selection"),Fe=e('<w-select :items="items" multiple></w-select>'),qe=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),Ne=e("V-model"),Ke=e("By default, the "),He=n("span",{class:"code"},"w-select",-1),ze=e(" component expects the items to have a "),Ye=n("code",null,"model-value",-1),Ge=e(" attribute."),Xe=n("br",null,null,-1),Je=e(`
If this is a constraint, you can use the option `),Qe=n("code",null,"item-value-key",-1),Ze=e(` to specify the name of another
attribute to be used instead (must have a unique value), like an id for instance.`),et=n("span",null,"v-model:",-1),tt={class:"ml2"},lt=e(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+r("{{ selection }}")+`</code>
</w-flex>`),st=e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`),nt=e("Without values (using labels)"),ot=n("p",null,"If no values are provided in the items objects, the labels will be used to identify the selected items.",-1),it=n("span",null,"v-model:",-1),at={class:"ml2"},ct=e(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+r("{{ selection }}")+`</code>
</w-flex>`),dt=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: ['Item 1', 'Item 3']
})
`),mt=e("Using full objects in v-model"),rt=n("p",null,[e("If it's more convenient for you, you can ask the "),n("span",{class:"code"},"w-select"),e(` component to return the
full items objects in the selection.`),n("br"),e(`
You then have the choice to provide an array of either values or full objects in the v-model,
if you want to prefill the select list.`)],-1),ut=n("p",null,null,-1),ht=n("span",null,"v-model:",-1),bt={class:"ml2"},pt=e(`<w-select
  v-model="selection"
  :items="items"
  multiple
  return-object>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+r("{{ selection }}")+`</code>
</w-flex>`),_t=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: [{ label: 'Item 3' }]
})
`),ft=e("Label position"),wt=n("p",null,`By default the label is positioned inside, you can also place it on the left or right outside of
the select list.`,-1),gt=e(`<w-select
  :items="items"
  label="Select an item">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select an item"
  label-position="left">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select an item"
  label-position="right">
</w-select>`),vt=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),yt=e("Custom label"),It=n("p",null,[e("It is convenient to have the label inside the "),n("span",{class:"code"},"w-select"),e(` component to let it handle
the field focus event on label click.`),n("br"),e(`
The `),n("span",{class:"code"},"label"),e(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),kt=e("mdi mdi-arrow-right"),jt=n("span",{class:"purple mx1"},"Inside",-1),Tt=e("mdi mdi-arrow-left"),St=n("span",{class:"green mr1"},"Left",-1),Lt=e("mdi mdi-arrow-right"),Mt=e("mdi mdi-arrow-left"),At=n("span",{class:"red ml1"},"Right",-1),Dt=e(`<w-select
  :items="items"
  label-position="inside"
  outline>
  <w-icon class="orange">mdi mdi-arrow-right</w-icon>
  <span class="purple mx1">Inside</span>
  <w-icon class="orange">mdi mdi-arrow-left</w-icon>
</w-select>

<w-select
  class="mt4"
  :items="items"
  label-position="left"
  outline>
  <span class="green mr1">Left</span>
  <w-icon class="orange">mdi mdi-arrow-right</w-icon>
</w-select>

<w-select
  class="mt4"
  :items="items"
  label-position="right"
  outline>
  <w-icon class="orange">mdi mdi-arrow-left</w-icon>
  <span class="red ml1">Right</span>
</w-select>
`),Ot=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),Pt=e("Custom selection string"),Vt=n("p",null,[e("The selection string is customizable through the "),n("code",null,"selection"),e(" slot."),n("br"),e(`
For consistency, the name of the provided parameter containing the selected item(s) is `),n("code",null,"item"),e(`,
whether you use a multiple or single select list.`)],-1),Et=e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`),$t=e("Custom list items"),Ut=e("wi-check"),Ct={key:1,class:"px2"},Rt={class:"ml1"},Bt=e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ]
})
`),Wt=e("Inner icons"),xt=n("div",{class:"title4 mb2"},"Label outside",-1),Ft=n("div",{class:"title4 mt6 mb2"},"Label inside",-1),qt=e(`<div class="title4 mb2">
  Label outside
</div>

<w-select
  :items="items"
  label="Left"
  label-position="left"
  outline
  inner-icon-left="mdi mdi-star">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Right"
  label-position="right"
  outline
  inner-icon-right="mdi mdi-arrow-down">
</w-select>

<div class="title4 mt6 mb2">
  Label inside
</div>

<w-select
  :items="items"
  label="Select"
  label-position="inside"
  outline
  inner-icon-left="mdi mdi-star">
</w-select>

<w-select
  class="mt4"
  :items="items"
  label="Select"
  label-position="inside"
  outline
  inner-icon-right="mdi mdi-arrow-down">
</w-select>`),Nt=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),Kt=e("Disabled & readonly"),Ht=e(`<w-select
  class="mb4"
  :items="items"
  label="Disabled & empty"
  outline
  disabled>
</w-select>

<w-select
  class="mb4"
  :items="items"
  value="Item 1"
  label="Disabled & filled"
  outline
  disabled>
</w-select>

<w-select
  class="mb4"
  :items="items"
  label="Readonly & empty"
  outline
  readonly>
</w-select>

<w-select
  :items="items"
  value="Item 1"
  label="Readonly & filled"
  outline
  readonly>
</w-select>
`),zt=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})`);function Yt(s,a,d,I,k,f){const h=u("alert"),i=u("title-link"),o=u("w-select"),c=u("example"),w=u("w-flex"),p=u("w-icon"),j=u("w-tag");return b(),_("div",null,[l(h,{info:""},{default:t(()=>[U,C,R,B,W,x,F]),_:1}),l(i,{h2:""},{default:t(()=>[q]),_:1}),N,l(c,null,{html:t(()=>[K]),js:t(()=>[H]),default:t(()=>[l(o,{items:s.items1},null,8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[z]),_:1}),Y,l(c,null,{html:t(()=>[G]),js:t(()=>[X]),default:t(()=>[l(o,{items:s.items1,label:"Label"},null,8,["items"]),l(o,{class:"mt4",items:s.items1,placeholder:"Placeholder"},null,8,["items"]),l(o,{class:"mt4",items:s.items1,label:"Label",placeholder:"Placeholder"},null,8,["items"])]),_:1}),l(h,{tip:""},{default:t(()=>[J,Q,Z,ee,te,le,se]),_:1}),l(i,{h2:""},{default:t(()=>[ne]),_:1}),l(c,null,{html:t(()=>[ie]),js:t(()=>[ae]),default:t(()=>[l(o,{items:s.items1,outline:""},{default:t(()=>[oe]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[ce]),_:1}),de,l(i,{h3:"",slug:"default-style"},{default:t(()=>[me]),_:1}),l(c,null,{html:t(()=>[he]),js:t(()=>[be]),default:t(()=>[l(o,{items:s.items1,color:"blue"},{default:t(()=>[re]),_:1},8,["items"]),l(o,{class:"mt4",items:s.items1,"bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[ue]),_:1},8,["items"])]),_:1}),l(i,{h3:""},{default:t(()=>[pe]),_:1}),l(c,null,{html:t(()=>[we]),js:t(()=>[ge]),default:t(()=>[l(o,{items:s.items1,outline:"",color:"blue"},{default:t(()=>[_e]),_:1},8,["items"]),l(o,{class:"mt4",items:s.items1,outline:"","bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[fe]),_:1},8,["items"])]),_:1}),l(i,{h3:""},{default:t(()=>[ve]),_:1}),ye,l(c,null,{html:t(()=>[ke]),js:t(()=>[je]),default:t(()=>[l(o,{items:s.items4},{default:t(()=>[Ie]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Te]),_:1}),l(c,null,{html:t(()=>[De]),js:t(()=>[Oe]),default:t(()=>[Se,l(o,{items:s.items1,shadow:""},{default:t(()=>[Le]),_:1},8,["items"]),Me,l(o,{items:s.items1,outline:"",shadow:""},{default:t(()=>[Ae]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Pe]),_:1}),l(c,null,{html:t(()=>[Be]),js:t(()=>[We]),default:t(()=>[Ve,l(o,{items:s.items1,"bg-color":"purple-light5",tile:""},{default:t(()=>[Ee]),_:1},8,["items"]),l(o,{class:"mt4",items:s.items1,"bg-color":"purple-light5",round:""},{default:t(()=>[$e]),_:1},8,["items"]),Ue,l(o,{items:s.items1,outline:"",tile:""},{default:t(()=>[Ce]),_:1},8,["items"]),l(o,{class:"mt4",items:s.items1,outline:"",round:""},{default:t(()=>[Re]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[xe]),_:1}),l(c,null,{html:t(()=>[Fe]),js:t(()=>[qe]),default:t(()=>[l(o,{items:s.items1,multiple:""},null,8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Ne]),_:1}),l(h,{tip:""},{default:t(()=>[Ke,He,ze,Ye,Ge,Xe,Je,Qe,Ze]),_:1}),l(c,null,{html:t(()=>[lt]),js:t(()=>[st]),default:t(()=>[l(o,{modelValue:s.vModelSelect1,"onUpdate:modelValue":a[0]||(a[0]=m=>s.vModelSelect1=m),items:s.items3,multiple:""},null,8,["modelValue","items"]),l(w,{class:"align-center mt4"},{default:t(()=>[et,n("code",tt,r(s.vModelSelect1),1)]),_:1})]),_:1}),l(i,{h3:""},{default:t(()=>[nt]),_:1}),ot,l(c,null,{html:t(()=>[ct]),js:t(()=>[dt]),default:t(()=>[l(o,{modelValue:s.vModelSelect2,"onUpdate:modelValue":a[1]||(a[1]=m=>s.vModelSelect2=m),items:s.items1,multiple:""},null,8,["modelValue","items"]),l(w,{class:"align-center mt4"},{default:t(()=>[it,n("code",at,r(s.vModelSelect2),1)]),_:1})]),_:1}),l(i,{h3:""},{default:t(()=>[mt]),_:1}),rt,ut,l(c,null,{html:t(()=>[pt]),js:t(()=>[_t]),default:t(()=>[l(o,{modelValue:s.vModelSelect3,"onUpdate:modelValue":a[2]||(a[2]=m=>s.vModelSelect3=m),items:s.items1,multiple:"","return-object":""},null,8,["modelValue","items"]),l(w,{class:"align-center mt4"},{default:t(()=>[ht,n("code",bt,r(s.vModelSelect3),1)]),_:1})]),_:1}),l(i,{h2:""},{default:t(()=>[ft]),_:1}),wt,l(c,null,{html:t(()=>[gt]),js:t(()=>[vt]),default:t(()=>[l(o,{items:s.items1,label:"Select an item"},null,8,["items"]),l(o,{class:"mt4",items:s.items1,label:"Select an item","label-position":"left"},null,8,["items"]),l(o,{class:"mt4",items:s.items1,label:"Select an item","label-position":"right"},null,8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[yt]),_:1}),It,l(c,null,{html:t(()=>[Dt]),js:t(()=>[Ot]),default:t(()=>[l(o,{items:s.items1,"label-position":"inside",outline:""},{default:t(()=>[l(p,{class:"orange"},{default:t(()=>[kt]),_:1}),jt,l(p,{class:"orange"},{default:t(()=>[Tt]),_:1})]),_:1},8,["items"]),l(o,{class:"mt4",items:s.items1,"label-position":"left",outline:""},{default:t(()=>[St,l(p,{class:"orange"},{default:t(()=>[Lt]),_:1})]),_:1},8,["items"]),l(o,{class:"mt4",items:s.items1,"label-position":"right",outline:""},{default:t(()=>[l(p,{class:"orange"},{default:t(()=>[Mt]),_:1}),At]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Pt]),_:1}),Vt,l(c,null,{html:t(()=>[e(`<w-select :items="items" v-model="selection" multiple>
  <template #selection="{ item }">
    <w-tag
      class="mr2"
      v-for="(item, i) in item"
      :key="i"
      bg-color="grey-light4">
      `+r("{{ item.label }}")+`
    </w-tag>
  </template>
</w-select>`,1)]),js:t(()=>[Et]),default:t(()=>[l(o,{items:s.items3,modelValue:s.customSelection,"onUpdate:modelValue":a[3]||(a[3]=m=>s.customSelection=m),multiple:""},{selection:t(({item:m})=>[(b(!0),_(V,null,E(m,(g,A)=>(b(),L(j,{class:"mr2",key:A,"bg-color":"grey-light4"},{default:t(()=>[e(r(g.label),1)]),_:2},1024))),128))]),_:1},8,["items","modelValue"])]),_:1}),l(i,{h2:""},{default:t(()=>[$t]),_:1}),l(c,null,{html:t(()=>[e(`<w-select :items="items">
  <template #item="{ item, selected }">
    <w-icon v-if="selected" class="primary">wi-check</w-icon>
    <span v-else class="px2"></span>

    <span class="ml1">`+r("{{ item.label }}")+`</span>

    <w-tag class="ml2" bg-color="grey-light4" xs>
      `+r("{{ item.value }}")+`
    </w-tag>
  </template>
</w-select>`,1)]),js:t(()=>[Bt]),default:t(()=>[l(o,{items:s.items3},{item:t(({item:m,selected:g})=>[g?(b(),L(p,{key:0,class:"primary"},{default:t(()=>[Ut]),_:1})):(b(),_("span",Ct)),n("span",Rt,r(m.label),1),l(j,{class:"ml2","bg-color":"grey-light4",xs:""},{default:t(()=>[e(r(m.value),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Wt]),_:1}),l(c,null,{html:t(()=>[qt]),js:t(()=>[Nt]),default:t(()=>[xt,l(o,{items:s.items1,label:"Select","label-position":"left",outline:"","inner-icon-left":"mdi mdi-star"},null,8,["items"]),l(o,{class:"mt4",items:s.items1,label:"Select","label-position":"right",outline:"","inner-icon-right":"mdi mdi-arrow-down"},null,8,["items"]),Ft,l(o,{items:s.items1,label:"Select","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-star"},null,8,["items"]),l(o,{class:"mt4",items:s.items1,label:"Select","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-arrow-down"},null,8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Kt]),_:1}),l(c,null,{html:t(()=>[Ht]),js:t(()=>[zt]),default:t(()=>[l(o,{class:"mb4",items:s.items1,label:"Disabled & empty",outline:"",disabled:""},null,8,["items"]),l(o,{class:"mb4",items:s.items1,label:"Disabled & filled","model-value":"Item 1",outline:"",disabled:""},null,8,["items"]),l(o,{class:"mb4",items:s.items1,label:"Readonly & empty",outline:"",readonly:""},null,8,["items"]),l(o,{items:s.items1,"model-value":"Item 1",label:"Readonly & filled",outline:"",readonly:""},null,8,["items"])]),_:1})])}const Gt={data:()=>({items1:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],items2:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],items3:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3}],items4:[{label:"Amber",color:"amber"},{label:"Warning",color:"warning"},{label:"Error",color:"error"},{label:"Pink",color:"pink"}],vModelSelect1:[1,3],customSelection:[1,3],vModelSelect2:["Item 1","Item 3"],vModelSelect3:[{label:"Item 3"}]})};var Xt=y(Gt,[["render",Yt]]);const Jt=n("div",{class:"w-divider my12"},null,-1),Qt=e("API");function Zt(s,a,d,I,k,f){const h=u("title-link"),i=u("component-api");return b(),_("div",null,[Jt,l(h,{class:"title1",h2:""},{default:t(()=>[Qt]),_:1}),l(i,{class:"mt0",items:f.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(i,{items:s.slots,title:"Slots"},null,8,["items"]),l(i,{items:f.events,title:"Events"},null,8,["items"])])}const el={items:"Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the select field.<br>Gets updated on selection change.',multiple:"Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.",placeholder:"Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",label:"Sets a visible label for the select field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the select field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item.<br>By default, the <code>color</code> key of the current item will be used to render this item in this color.<br>You can also provide an empty string to disable this feature.',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item.',itemClass:"Applies a custom CSS class to each select list item.",menuClass:"Applies a custom CSS class to the select list's floating menu element.",menuProps:`Internally, the <strong class="code">w-select</strong> component uses the <strong class="code">w-menu</strong> component.<br>This option allows you to pass down to the menu all the props that the <strong class="code">w-menu</strong> component can accept.<br>For instance, you could set <code>:menu-props="{ appendTo: '.my-scrolling-container' }"</code>, in order to move the select list floating menu to a particular DOM node, and allowing it to scroll with its container.`,noUnselect:"When set to <code>true</code>, forces the select list to always have at least one selected item.<br>For single select lists, it prevents unselecting the selected item but still allows switching selection.<br>For multiple select lists, it will only prevent unselecting the item when it's the only remaining selection. ",color:`Applies a color to the select's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the select's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the select's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the select field, giving it a round look.",shadow:"Applies a drop shadow to the select field.",tile:"Removes the default border-radius and sets sharp edges on the select field.",dark:!1,returnObject:"The current selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",name:"Provide a native HTML <code>name</code> attribute to the select field. If not provided, a unique name will be computed.",disabled:"Disables the select field making it unreactive to user interactions.",readonly:"The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the select field.",validators:'<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.'},tl={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},selection:{description:"Provide a custom template for the selection string.",params:{item:"The selected item(s) object(s). May be an array if <code>multiple</code> is <code>true</code>, or a single object otherwise."}},item:{description:"Provide a common custom template for all the select list items.",params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single select list item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}}},ll={input:{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},"update:modelValue":{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},focus:{description:"Emitted on select focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on select blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"item-click":{description:"Emitted on select list item click.",params:{"[Object]":"The clicked item object."}},"item-select":{description:"Emitted on list item select (click or <kbd>enter</kbd> keydown).",params:{"[Object]":"The selected item object."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},sl={data:()=>({propsDescs:el,slots:tl}),computed:{props(){return v(v({},M.props),$.props)},events(){return M.emits.reduce((s,a)=>(s[a]=ll[a]||{})&&s,{})}}};var nl=y(sl,[["render",Zt]]);const ol=e("w-select");function il(s,a,d,I,k,f){const h=u("ui-component-title"),i=u("examples"),o=u("api");return b(),_("main",null,[l(h,null,{default:t(()=>[ol]),_:1}),l(i),l(o)])}const al={components:{Examples:Xt,Api:nl}};var ml=y(al,[["render",il]]);export{ml as default};
