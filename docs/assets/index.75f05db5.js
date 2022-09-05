import{r,o as h,f as p,a as l,w as t,b as s,h as m,e,F as L,s as M,c as j,_ as g,a4 as T,E as A}from"./index.f302d8ad.js";const D=e("The "),O=s("span",{class:"code"},"w-select",-1),P=e(` component can be placed in a hidden overflow container and the dropdown
menu will still be fully visible when open.`),V=s("br",null,null,-1),E=e(`
This is because the select dropdown menu is placed at the `),$=s("span",{class:"code"},".w-app",-1),C=e(` level in the DOM,
just so you don't have to worry about this annoying case.
`),R=e("Basic"),U=s("p",null,[e("This is the most basic use of the "),s("span",{class:"code"},"w-select"),e(" component. No label, no v-model, only items.")],-1),B=e('<w-select :items="items"></w-select>'),W=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),F=e("Label and / or placeholder"),x=s("p",null,[e("The select list can have a label or not and a placeholder or not."),s("br")],-1),q=e(`<w-select
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
`),N=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),H=e(`The items of the select list should have a label, which is by default expected in each item
object under the `),K=s("code",null,"label",-1),Y=e(" name."),z=s("br",null,null,-1),G=e(`
If this is a constraint, you can use the option `),J=s("code",null,"item-label-key",-1),Q=e(` to specify the name of another
attribute to be used instead.
`),X=e("Outline"),Z=e("Label"),ee=e('<w-select :items="items" outline>Label</w-select>'),te=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),le=e("Colors"),se=s("p",{class:"mb4"},[e("Like in most components, you can set a "),s("code",null,"color"),e(" for the text and a "),s("code",null,"bg-color"),e(` for the
background.`),s("br"),e(`
By default, the text has the "`),s("span",{class:"code"},"primary"),e('" color.')],-1),ne=e("Default style (Underline)"),oe=e("Label"),ie=e("Label"),ae=e(`<w-select
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
</w-select>`),ce=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),de=e("Outline style"),me=e("Label"),re=e("Label"),ue=e(`<w-select
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
</w-select>`),he=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),be=e("List items colors"),pe=s("p",null,[e("If an item object contains the key "),s("code",null,"color"),e(`, it will naturally be used by the
`),s("strong",{class:"code"},"w-select"),e(" component to display this list item in this color."),s("br"),e(`
To disable this you can set the `),s("code",null,"item-color-key"),e(" prop to an empty string.")],-1),_e=e("Pick a color"),fe=e(`<w-select :items="items">
  Pick a color
</w-select>`),we=e(`data: () => ({
  items: [
    { label: 'Amber', color: 'amber' },
    { label: 'Warning', color: 'warning' },
    { label: 'Error', color: 'error' },
    { label: 'Pink', color: 'pink' }
  ]
})
`),ge=e("Shadow"),ve=s("div",{class:"title4"},"Default style (Underline)",-1),ye=e("Label"),Ie=s("div",{class:"title4 mt6"},"Outline style",-1),ke=e("Label"),je=e(`<div class="title4 mb2">
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
</w-select>`),Te=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),Se=e("Tile & round"),Le=s("div",{class:"title4"},"Default style (Underline)",-1),Me=e("Tile"),Ae=e("Round"),De=s("div",{class:"title4 mt6"},"Outline style",-1),Oe=e("Tile"),Pe=e("Round"),Ve=e(`<div class="title4">
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
`),Ee=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),$e=e("Multiple selection"),Ce=e('<w-select :items="items" multiple></w-select>'),Re=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),Ue=e("V-model"),Be=e("By default, the "),We=s("span",{class:"code"},"w-select",-1),Fe=e(" component expects the items to have a "),xe=s("code",null,"model-value",-1),qe=e(" attribute."),Ne=s("br",null,null,-1),He=e(`
If this is a constraint, you can use the option `),Ke=s("code",null,"item-value-key",-1),Ye=e(` to specify the name of another
attribute to be used instead (must have a unique value), like an id for instance.`),ze=s("span",null,"v-model:",-1),Ge={class:"ml2"},Je=e(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+m("{{ selection }}")+`</code>
</w-flex>`),Qe=e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`),Xe=e("Without values (using labels)"),Ze=s("p",null,"If no values are provided in the items objects, the labels will be used to identify the selected items.",-1),et=s("span",null,"v-model:",-1),tt={class:"ml2"},lt=e(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+m("{{ selection }}")+`</code>
</w-flex>`),st=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: ['Item 1', 'Item 3']
})
`),nt=e("Using full objects in v-model"),ot=s("p",null,[e("If it's more convenient for you, you can ask the "),s("span",{class:"code"},"w-select"),e(` component to return the
full items objects in the selection.`),s("br"),e(`
You then have the choice to provide an array of either values or full objects in the v-model,
if you want to prefill the select list.`)],-1),it=s("p",null,null,-1),at=s("span",null,"v-model:",-1),ct={class:"ml2"},dt=e(`<w-select
  v-model="selection"
  :items="items"
  multiple
  return-object>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+m("{{ selection }}")+`</code>
</w-flex>`),mt=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: [{ label: 'Item 3' }]
})
`),rt=e("Label position"),ut=s("p",null,`By default the label is positioned inside, you can also place it on the left or right outside of
the select list.`,-1),ht=e(`<w-select
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
</w-select>`),bt=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),pt=e("Custom label"),_t=s("p",null,[e("It is convenient to have the label inside the "),s("span",{class:"code"},"w-select"),e(` component to let it handle
the field focus event on label click.`),s("br"),e(`
The `),s("span",{class:"code"},"label"),e(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),ft=e("mdi mdi-arrow-right"),wt=s("span",{class:"purple mx1"},"Inside",-1),gt=e("mdi mdi-arrow-left"),vt=s("span",{class:"green mr1"},"Left",-1),yt=e("mdi mdi-arrow-right"),It=e("mdi mdi-arrow-left"),kt=s("span",{class:"red ml1"},"Right",-1),jt=e(`<w-select
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
`),Tt=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),St=e("Custom selection string"),Lt=s("p",null,[e("The selection string is customizable through the "),s("code",null,"selection"),e(" slot."),s("br"),e(`
For consistency, the name of the provided parameter containing the selected item(s) is `),s("code",null,"item"),e(`,
whether you use a multiple or single select list.`)],-1),Mt=e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`),At=e("Custom list items"),Dt=e("wi-check"),Ot={key:1,class:"px2"},Pt={class:"ml1"},Vt=e(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ]
})
`),Et=e("Inner icons"),$t=s("div",{class:"title4 mb2"},"Label outside",-1),Ct=s("div",{class:"title4 mt6 mb2"},"Label inside",-1),Rt=e(`<div class="title4 mb2">
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
</w-select>`),Ut=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),Bt=e("Disabled & readonly"),Wt=e(`<w-select
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
`),Ft=e(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})`);function xt(n,c,v,y,I,_){const u=r("alert"),i=r("title-link"),o=r("w-select"),a=r("example"),f=r("w-flex"),b=r("w-icon"),k=r("w-tag");return h(),p("div",null,[l(u,{info:""},{default:t(()=>[D,O,P,V,E,$,C]),_:1}),l(i,{h2:""},{default:t(()=>[R]),_:1}),U,l(a,null,{html:t(()=>[B]),js:t(()=>[W]),default:t(()=>[l(o,{items:n.items1},null,8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[F]),_:1}),x,l(a,null,{html:t(()=>[q]),js:t(()=>[N]),default:t(()=>[l(o,{items:n.items1,label:"Label"},null,8,["items"]),l(o,{class:"mt4",items:n.items1,placeholder:"Placeholder"},null,8,["items"]),l(o,{class:"mt4",items:n.items1,label:"Label",placeholder:"Placeholder"},null,8,["items"])]),_:1}),l(u,{tip:""},{default:t(()=>[H,K,Y,z,G,J,Q]),_:1}),l(i,{h2:""},{default:t(()=>[X]),_:1}),l(a,null,{html:t(()=>[ee]),js:t(()=>[te]),default:t(()=>[l(o,{items:n.items1,outline:""},{default:t(()=>[Z]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[le]),_:1}),se,l(i,{h3:"",slug:"default-style"},{default:t(()=>[ne]),_:1}),l(a,null,{html:t(()=>[ae]),js:t(()=>[ce]),default:t(()=>[l(o,{items:n.items1,color:"blue"},{default:t(()=>[oe]),_:1},8,["items"]),l(o,{class:"mt4",items:n.items1,"bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[ie]),_:1},8,["items"])]),_:1}),l(i,{h3:""},{default:t(()=>[de]),_:1}),l(a,null,{html:t(()=>[ue]),js:t(()=>[he]),default:t(()=>[l(o,{items:n.items1,outline:"",color:"blue"},{default:t(()=>[me]),_:1},8,["items"]),l(o,{class:"mt4",items:n.items1,outline:"","bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[re]),_:1},8,["items"])]),_:1}),l(i,{h3:""},{default:t(()=>[be]),_:1}),pe,l(a,null,{html:t(()=>[fe]),js:t(()=>[we]),default:t(()=>[l(o,{items:n.items4},{default:t(()=>[_e]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[ge]),_:1}),l(a,null,{html:t(()=>[je]),js:t(()=>[Te]),default:t(()=>[ve,l(o,{items:n.items1,shadow:""},{default:t(()=>[ye]),_:1},8,["items"]),Ie,l(o,{items:n.items1,outline:"",shadow:""},{default:t(()=>[ke]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Se]),_:1}),l(a,null,{html:t(()=>[Ve]),js:t(()=>[Ee]),default:t(()=>[Le,l(o,{items:n.items1,"bg-color":"purple-light5",tile:""},{default:t(()=>[Me]),_:1},8,["items"]),l(o,{class:"mt4",items:n.items1,"bg-color":"purple-light5",round:""},{default:t(()=>[Ae]),_:1},8,["items"]),De,l(o,{items:n.items1,outline:"",tile:""},{default:t(()=>[Oe]),_:1},8,["items"]),l(o,{class:"mt4",items:n.items1,outline:"",round:""},{default:t(()=>[Pe]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[$e]),_:1}),l(a,null,{html:t(()=>[Ce]),js:t(()=>[Re]),default:t(()=>[l(o,{items:n.items1,multiple:""},null,8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Ue]),_:1}),l(u,{tip:""},{default:t(()=>[Be,We,Fe,xe,qe,Ne,He,Ke,Ye]),_:1}),l(a,null,{html:t(()=>[Je]),js:t(()=>[Qe]),default:t(()=>[l(o,{modelValue:n.vModelSelect1,"onUpdate:modelValue":c[0]||(c[0]=d=>n.vModelSelect1=d),items:n.items3,multiple:""},null,8,["modelValue","items"]),l(f,{class:"align-center mt4"},{default:t(()=>[ze,s("code",Ge,m(n.vModelSelect1),1)]),_:1})]),_:1}),l(i,{h3:""},{default:t(()=>[Xe]),_:1}),Ze,l(a,null,{html:t(()=>[lt]),js:t(()=>[st]),default:t(()=>[l(o,{modelValue:n.vModelSelect2,"onUpdate:modelValue":c[1]||(c[1]=d=>n.vModelSelect2=d),items:n.items1,multiple:""},null,8,["modelValue","items"]),l(f,{class:"align-center mt4"},{default:t(()=>[et,s("code",tt,m(n.vModelSelect2),1)]),_:1})]),_:1}),l(i,{h3:""},{default:t(()=>[nt]),_:1}),ot,it,l(a,null,{html:t(()=>[dt]),js:t(()=>[mt]),default:t(()=>[l(o,{modelValue:n.vModelSelect3,"onUpdate:modelValue":c[2]||(c[2]=d=>n.vModelSelect3=d),items:n.items1,multiple:"","return-object":""},null,8,["modelValue","items"]),l(f,{class:"align-center mt4"},{default:t(()=>[at,s("code",ct,m(n.vModelSelect3),1)]),_:1})]),_:1}),l(i,{h2:""},{default:t(()=>[rt]),_:1}),ut,l(a,null,{html:t(()=>[ht]),js:t(()=>[bt]),default:t(()=>[l(o,{items:n.items1,label:"Select an item"},null,8,["items"]),l(o,{class:"mt4",items:n.items1,label:"Select an item","label-position":"left"},null,8,["items"]),l(o,{class:"mt4",items:n.items1,label:"Select an item","label-position":"right"},null,8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[pt]),_:1}),_t,l(a,null,{html:t(()=>[jt]),js:t(()=>[Tt]),default:t(()=>[l(o,{items:n.items1,"label-position":"inside",outline:""},{default:t(()=>[l(b,{class:"orange"},{default:t(()=>[ft]),_:1}),wt,l(b,{class:"orange"},{default:t(()=>[gt]),_:1})]),_:1},8,["items"]),l(o,{class:"mt4",items:n.items1,"label-position":"left",outline:""},{default:t(()=>[vt,l(b,{class:"orange"},{default:t(()=>[yt]),_:1})]),_:1},8,["items"]),l(o,{class:"mt4",items:n.items1,"label-position":"right",outline:""},{default:t(()=>[l(b,{class:"orange"},{default:t(()=>[It]),_:1}),kt]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[St]),_:1}),Lt,l(a,null,{html:t(()=>[e(`<w-select :items="items" v-model="selection" multiple>
  <template #selection="{ item }">
    <w-tag
      class="mr2"
      v-for="(item, i) in item"
      :key="i"
      bg-color="grey-light4">
      `+m("{{ item.label }}")+`
    </w-tag>
  </template>
</w-select>`,1)]),js:t(()=>[Mt]),default:t(()=>[l(o,{items:n.items3,modelValue:n.customSelection,"onUpdate:modelValue":c[3]||(c[3]=d=>n.customSelection=d),multiple:""},{selection:t(({item:d})=>[(h(!0),p(L,null,M(d,(w,S)=>(h(),j(k,{class:"mr2",key:S,"bg-color":"grey-light4"},{default:t(()=>[e(m(w.label),1)]),_:2},1024))),128))]),_:1},8,["items","modelValue"])]),_:1}),l(i,{h2:""},{default:t(()=>[At]),_:1}),l(a,null,{html:t(()=>[e(`<w-select :items="items">
  <template #item="{ item, selected }">
    <w-icon v-if="selected" class="primary">wi-check</w-icon>
    <span v-else class="px2"></span>

    <span class="ml1">`+m("{{ item.label }}")+`</span>

    <w-tag class="ml2" bg-color="grey-light4" xs>
      `+m("{{ item.value }}")+`
    </w-tag>
  </template>
</w-select>`,1)]),js:t(()=>[Vt]),default:t(()=>[l(o,{items:n.items3},{item:t(({item:d,selected:w})=>[w?(h(),j(b,{key:0,class:"primary"},{default:t(()=>[Dt]),_:1})):(h(),p("span",Ot)),s("span",Pt,m(d.label),1),l(k,{class:"ml2","bg-color":"grey-light4",xs:""},{default:t(()=>[e(m(d.value),1)]),_:2},1024)]),_:1},8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Et]),_:1}),l(a,null,{html:t(()=>[Rt]),js:t(()=>[Ut]),default:t(()=>[$t,l(o,{items:n.items1,label:"Select","label-position":"left",outline:"","inner-icon-left":"mdi mdi-star"},null,8,["items"]),l(o,{class:"mt4",items:n.items1,label:"Select","label-position":"right",outline:"","inner-icon-right":"mdi mdi-arrow-down"},null,8,["items"]),Ct,l(o,{items:n.items1,label:"Select","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-star"},null,8,["items"]),l(o,{class:"mt4",items:n.items1,label:"Select","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-arrow-down"},null,8,["items"])]),_:1}),l(i,{h2:""},{default:t(()=>[Bt]),_:1}),l(a,null,{html:t(()=>[Wt]),js:t(()=>[Ft]),default:t(()=>[l(o,{class:"mb4",items:n.items1,label:"Disabled & empty",outline:"",disabled:""},null,8,["items"]),l(o,{class:"mb4",items:n.items1,label:"Disabled & filled","model-value":"Item 1",outline:"",disabled:""},null,8,["items"]),l(o,{class:"mb4",items:n.items1,label:"Readonly & empty",outline:"",readonly:""},null,8,["items"]),l(o,{items:n.items1,"model-value":"Item 1",label:"Readonly & filled",outline:"",readonly:""},null,8,["items"])]),_:1})])}const qt={data:()=>({items1:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],items2:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],items3:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3}],items4:[{label:"Amber",color:"amber"},{label:"Warning",color:"warning"},{label:"Error",color:"error"},{label:"Pink",color:"pink"}],vModelSelect1:[1,3],customSelection:[1,3],vModelSelect2:["Item 1","Item 3"],vModelSelect3:[{label:"Item 3"}]})};var Nt=g(qt,[["render",xt]]);const Ht=s("div",{class:"w-divider my12"},null,-1),Kt=e("API");function Yt(n,c,v,y,I,_){const u=r("title-link"),i=r("component-api");return h(),p("div",null,[Ht,l(u,{class:"title1",h2:""},{default:t(()=>[Kt]),_:1}),l(i,{class:"mt0",items:_.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(i,{items:n.slots,title:"Slots"},null,8,["items"]),l(i,{items:_.events,title:"Events"},null,8,["items"])])}const zt={items:"Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the select field.<br>Gets updated on selection change.',multiple:"Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.",placeholder:"Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",label:"Sets a visible label for the select field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the select field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item.<br>By default, the <code>color</code> key of the current item will be used to render this item in this color.<br>You can also provide an empty string to disable this feature.',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item.',itemClass:"Applies a custom CSS class to each select list item.",menuClass:"Applies a custom CSS class to the select list's floating menu element.",menuProps:`Internally, the <strong class="code">w-select</strong> component uses the <strong class="code">w-menu</strong> component.<br>This option allows you to pass down to the menu all the props that the <strong class="code">w-menu</strong> component can accept.<br>For instance, you could set <code>:menu-props="{ appendTo: '.my-scrolling-container' }"</code>, in order to move the select list floating menu to a particular DOM node, and allowing it to scroll with its container.`,noUnselect:"When set to <code>true</code>, forces the select list to always have at least one selected item.<br>For single select lists, it prevents unselecting the selected item but still allows switching selection.<br>For multiple select lists, it will only prevent unselecting the item when it's the only remaining selection. ",color:`Applies a color to the select's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the select's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the select's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the select field, giving it a round look.",shadow:"Applies a drop shadow to the select field.",tile:"Removes the default border-radius and sets sharp edges on the select field.",dark:!1,returnObject:"The current selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",name:"Provide a native HTML <code>name</code> attribute to the select field. If not provided, a unique name will be computed.",disabled:"Disables the select field making it unreactive to user interactions.",readonly:"The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the select field.",validators:'<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.'},Gt={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},selection:{description:"Provide a custom template for the selection string.",params:{item:"The selected item(s) object(s). May be an array if <code>multiple</code> is <code>true</code>, or a single object otherwise."}},item:{description:"Provide a common custom template for all the select list items.",params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single select list item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}}},Jt={input:{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},"update:modelValue":{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},focus:{description:"Emitted on select focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on select blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"item-click":{description:"Emitted on select list item click.",params:{"[Object]":"The clicked item object."}},"item-select":{description:"Emitted on list item select (click or <kbd>enter</kbd> keydown).",params:{"[Object]":"The selected item object."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},Qt={data:()=>({propsDescs:zt,slots:Gt}),computed:{props(){return{...T.props,...A.props}},events(){return T.emits.reduce((n,c)=>(n[c]=Jt[c]||{})&&n,{})}}};var Xt=g(Qt,[["render",Yt]]);const Zt=e("w-select");function el(n,c,v,y,I,_){const u=r("ui-component-title"),i=r("examples"),o=r("api");return h(),p("main",null,[l(u,null,{default:t(()=>[Zt]),_:1}),l(i),l(o)])}const tl={components:{Examples:Nt,Api:Xt}};var sl=g(tl,[["render",el]]);export{sl as default};
