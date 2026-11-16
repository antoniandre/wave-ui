import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s,m as c}from"./runtime-core.esm-bundler-BG9XLJHT.js";import{I as l,Y as u}from"./index-ByX3j1Uf.js";var d={class:`mt3`},f={class:`mt3`},p={class:`w-flex wrap gap4`},m={class:`w-flex wrap gap4`},h={class:`w-flex column gap3 align-start`};function g(l,u,g,_,v,y){let b=e(`title-link`),x=e(`w-buttons`),S=e(`example`),C=e(`w-icon`),w=e(`w-button`);return s(),i(`div`,null,[a(b,{h2:``},{default:t(()=>[...u[24]||=[o(`Default`,-1)]]),_:1}),u[82]||=r(`p`,null,[o(`By default `),r(`code`,null,`w-buttons`),o(` renders a stuck group of buttons.
The first active button uses the `),r(`code`,null,`primary`),o(` color as background.
Inactive buttons use the transparent (text) style.`)],-1),a(S,null,{pug:t(()=>[...u[25]||=[o(`w-buttons(v-model="active" :items="items")`,-1)]]),html:t(()=>[...u[26]||=[o(`<w-buttons v-model="active" :items="items"></w-buttons>`,-1)]]),js:t(()=>[...u[27]||=[o(`data: () => ({
  active: 1,
  items: [
    { label: '7 days' },
    { label: '30 days' },
    { label: '365 days' }
  ]
})
`,-1)]]),default:t(()=>[a(x,{modelValue:l.ex1,"onUpdate:modelValue":u[0]||=e=>l.ex1=e,items:l.items1},null,8,[`modelValue`,`items`])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[28]||=[o(`Active color`,-1)]]),_:1}),u[83]||=r(`p`,null,[o(`Use `),r(`code`,null,`active-bg-color`),o(` and `),r(`code`,null,`active-color`),o(` to customise the active button appearance.
`),r(`code`,null,`color`),o(` sets the text color of inactive buttons.`)],-1),a(S,{"content-class":`w-flex column gap4`,"app-classes-string":`w-flex gap4`},{pug:t(()=>[...u[29]||=[o(`w-buttons(v-model="active1" :items="items" active-bg-color="success")
w-buttons(v-model="active2" :items="items" active-bg-color="error" color="error")
w-buttons(v-model="active3" :items="items" active-bg-color="info" outline)`,-1)]]),html:t(()=>[...u[30]||=[o(`<w-buttons v-model="active1" :items="items" active-bg-color="success"></w-buttons>
<w-buttons v-model="active2" :items="items" active-bg-color="error" color="error"></w-buttons>
<w-buttons v-model="active3" :items="items" active-bg-color="info" outline></w-buttons>`,-1)]]),js:t(()=>[...u[31]||=[o(`data: () => ({
  active1: 0,
  active2: 1,
  active3: 2,
  items: [
    { label: '7 days' },
    { label: '30 days' },
    { label: '365 days' }
  ]
})
`,-1)]]),default:t(()=>[a(x,{class:`mr6`,modelValue:l.ex2a,"onUpdate:modelValue":u[1]||=e=>l.ex2a=e,items:l.items1,"active-bg-color":`success`},null,8,[`modelValue`,`items`]),a(x,{class:`mr6`,modelValue:l.ex2b,"onUpdate:modelValue":u[2]||=e=>l.ex2b=e,items:l.items1,"active-bg-color":`error`,color:`error`},null,8,[`modelValue`,`items`]),a(x,{modelValue:l.ex2c,"onUpdate:modelValue":u[3]||=e=>l.ex2c=e,items:l.items1,"active-bg-color":`info`,outline:``},null,8,[`modelValue`,`items`])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[32]||=[o(`Outline style`,-1)]]),_:1}),u[84]||=r(`p`,null,[o(`Set `),r(`code`,null,`outline`),o(` to give inactive buttons an outlined look.`)],-1),a(S,null,{pug:t(()=>[...u[33]||=[o(`w-buttons(v-model="active" :items="items" outline)`,-1)]]),html:t(()=>[...u[34]||=[o(`<w-buttons v-model="active" :items="items" outline></w-buttons>`,-1)]]),js:t(()=>[...u[35]||=[o(`data: () => ({
  active: 0,
  items: [
    { label: '7 days' },
    { label: '30 days' },
    { label: '365 days' }
  ]
})
`,-1)]]),default:t(()=>[a(x,{modelValue:l.ex3,"onUpdate:modelValue":u[4]||=e=>l.ex3=e,items:l.items1,outline:``},null,8,[`modelValue`,`items`])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[36]||=[o(`Multiple selection`,-1)]]),_:1}),u[85]||=r(`p`,null,[o(`Set `),r(`code`,null,`multiple`),o(` to allow more than one button to be active at once.
The `),r(`code`,null,`v-model`),o(` becomes an array.`)],-1),a(S,null,{pug:t(()=>[...u[38]||=[o(`w-buttons(v-model="active" :items="items" multiple)
p Active: `+n(`{{ active }}`),-1)]]),html:t(()=>[...u[39]||=[o(`<w-buttons v-model="active" :items="items" multiple></w-buttons>
<p>Active: `+n(`{{ active }}`)+`</p>`,-1)]]),js:t(()=>[...u[40]||=[o(`data: () => ({
  active: [0, 2],
  items: [
    { label: 'Bold' },
    { label: 'Italic' },
    { label: 'Underline' }
  ]
})
`,-1)]]),default:t(()=>[a(x,{modelValue:l.ex4,"onUpdate:modelValue":u[5]||=e=>l.ex4=e,items:l.items4,multiple:``},null,8,[`modelValue`,`items`]),r(`p`,d,[u[37]||=o(`Active: `,-1),r(`strong`,null,n(l.ex4),1)])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[41]||=[o(`Mandatory`,-1)]]),_:1}),u[86]||=r(`p`,null,[o(`Set `),r(`code`,null,`mandatory`),o(` to prevent the group from having no active button.
Clicking the only active button will not deactivate it.`)],-1),a(S,null,{pug:t(()=>[...u[42]||=[o(`w-buttons(v-model="active" :items="items" mandatory)`,-1)]]),html:t(()=>[...u[43]||=[o(`<w-buttons v-model="active" :items="items" mandatory></w-buttons>`,-1)]]),js:t(()=>[...u[44]||=[o(`data: () => ({
  active: 1,
  items: [
    { label: '7 days' },
    { label: '30 days' },
    { label: '365 days' }
  ]
})
`,-1)]]),default:t(()=>[a(x,{modelValue:l.ex5,"onUpdate:modelValue":u[6]||=e=>l.ex5=e,items:l.items1,mandatory:``},null,8,[`modelValue`,`items`])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[45]||=[o(`Item value key`,-1)]]),_:1}),u[87]||=r(`p`,null,[o(`By default the v-model uses the 0-based item index.
If all items have an `),r(`code`,null,`id`),o(` field it is used automatically; likewise for `),r(`code`,null,`value`),o(`.
Use `),r(`code`,null,`item-value-key`),o(` to specify a custom key explicitly.`)],-1),a(S,null,{pug:t(()=>[...u[47]||=[o(`w-buttons(v-model="activeId" :items="items")
p Active id: `+n(`{{ activeId }}`),-1)]]),html:t(()=>[...u[48]||=[o(`<w-buttons v-model="activeId" :items="items"></w-buttons>
<p>Active id: `+n(`{{ activeId }}`)+`</p>`,-1)]]),js:t(()=>[...u[49]||=[o(`data: () => ({
  activeId: 'w',
  items: [
    { id: 'd', label: 'Day' },
    { id: 'w', label: 'Week' },
    { id: 'm', label: 'Month' }
  ]
})
`,-1)]]),default:t(()=>[a(x,{modelValue:l.ex6,"onUpdate:modelValue":u[7]||=e=>l.ex6=e,items:l.items6},null,8,[`modelValue`,`items`]),r(`p`,f,[u[46]||=o(`Active id: `,-1),r(`strong`,null,n(l.ex6),1)])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[50]||=[o(`Gap`,-1)]]),_:1}),u[88]||=r(`p`,null,[o(`Set the `),r(`code`,null,`gap`),o(` prop to separate the buttons. The value is multiplied by the base increment
(like in `),r(`code`,null,`w-flex`),o(`). Each button is fully independent — with its own border, radius, and shadow.`)],-1),a(S,{"content-class":`w-flex column gap4`,"app-classes-string":`w-flex gap4`},{pug:t(()=>[...u[51]||=[o(`w-buttons(v-model="active1" :items="items" :gap="2")
w-buttons(v-model="active2" :items="items" :gap="2" round)`,-1)]]),html:t(()=>[...u[52]||=[o(`<w-buttons v-model="active1" :items="items" :gap="2"></w-buttons>
<w-buttons v-model="active2" :items="items" :gap="2" round></w-buttons>`,-1)]]),js:t(()=>[...u[53]||=[o(`data: () => ({
  active1: 0,
  active2: 1,
  items: [
    { label: '7 days' },
    { label: '30 days' },
    { label: '365 days' }
  ]
})
`,-1)]]),default:t(()=>[a(x,{class:`mr6`,modelValue:l.ex7a,"onUpdate:modelValue":u[8]||=e=>l.ex7a=e,items:l.items1,gap:2},null,8,[`modelValue`,`items`]),a(x,{modelValue:l.ex7b,"onUpdate:modelValue":u[9]||=e=>l.ex7b=e,items:l.items1,gap:2,round:``},null,8,[`modelValue`,`items`])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[54]||=[o(`Round, tile & shadow`,-1)]]),_:1}),u[89]||=r(`p`,null,[r(`code`,null,`round`),o(` makes the outer shape pill-shaped in stuck mode and each button individually round in gap mode.
`),r(`code`,null,`tile`),o(` removes all border radius.
`),r(`code`,null,`shadow`),o(` adds a drop shadow to the wrapper in stuck mode and to each button in gap mode.`)],-1),a(S,{"content-class":`w-flex column gap4`,"app-classes-string":`w-flex gap4`},{pug:t(()=>[...u[60]||=[o(`w-buttons(v-model="active" :items="items" round)
w-buttons(v-model="active" :items="items" :gap="2" round)
w-buttons(v-model="active" :items="items" tile)
w-buttons(v-model="active" :items="items" shadow)
w-buttons(v-model="active" :items="items" :gap="2" shadow)`,-1)]]),html:t(()=>[...u[61]||=[o(`<w-buttons v-model="active" :items="items" round></w-buttons>
<w-buttons v-model="active" :items="items" :gap="2" round></w-buttons>
<w-buttons v-model="active" :items="items" tile></w-buttons>
<w-buttons v-model="active" :items="items" shadow></w-buttons>
<w-buttons v-model="active" :items="items" :gap="2" shadow></w-buttons>`,-1)]]),js:t(()=>[...u[62]||=[o(`data: () => ({
  active: 1,
  items: [
    { label: '7 days' },
    { label: '30 days' },
    { label: '365 days' }
  ]
})
`,-1)]]),default:t(()=>[r(`div`,p,[r(`div`,null,[u[55]||=r(`p`,{class:`caption`},`Round (stuck)`,-1),a(x,{modelValue:l.ex8a,"onUpdate:modelValue":u[10]||=e=>l.ex8a=e,items:l.items1,round:``},null,8,[`modelValue`,`items`])]),r(`div`,null,[u[56]||=r(`p`,{class:`caption`},`Round (gap)`,-1),a(x,{modelValue:l.ex8b,"onUpdate:modelValue":u[11]||=e=>l.ex8b=e,items:l.items1,gap:2,round:``},null,8,[`modelValue`,`items`])])]),r(`div`,null,[u[57]||=r(`p`,{class:`caption`},`Tile`,-1),a(x,{modelValue:l.ex8c,"onUpdate:modelValue":u[12]||=e=>l.ex8c=e,items:l.items1,tile:``},null,8,[`modelValue`,`items`])]),r(`div`,m,[r(`div`,null,[u[58]||=r(`p`,{class:`caption`},`Shadow (stuck)`,-1),a(x,{modelValue:l.ex8d,"onUpdate:modelValue":u[13]||=e=>l.ex8d=e,items:l.items1,shadow:``},null,8,[`modelValue`,`items`])]),r(`div`,null,[u[59]||=r(`p`,{class:`caption`},`Shadow (gap)`,-1),a(x,{modelValue:l.ex8e,"onUpdate:modelValue":u[14]||=e=>l.ex8e=e,items:l.items1,gap:2,shadow:``},null,8,[`modelValue`,`items`])])])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[63]||=[o(`Disabled`,-1)]]),_:1}),u[90]||=r(`p`,null,[o(`Use the global `),r(`code`,null,`disabled`),o(` prop to disable the entire group, or set `),r(`code`,null,`disabled: true`),o(`
on individual items in the `),r(`code`,null,`items`),o(` array.`)],-1),a(S,{"content-class":`w-flex column gap4`,"app-classes-string":`w-flex gap4`},{pug:t(()=>[...u[64]||=[o(`//- Global disabled
w-buttons(v-model="active" :items="items" disabled)
//- Per-item disabled
w-buttons(v-model="active" :items="itemsWithDisabled")`,-1)]]),html:t(()=>[...u[65]||=[o(`<!-- Global disabled -->
<w-buttons v-model="active" :items="items" disabled></w-buttons>
<!-- Per-item disabled -->
<w-buttons v-model="active" :items="itemsWithDisabled"></w-buttons>`,-1)]]),js:t(()=>[...u[66]||=[o(`data: () => ({
  active: 1,
  items: [
    { label: '7 days' },
    { label: '30 days' },
    { label: '365 days' }
  ],
  itemsWithDisabled: [
    { label: '7 days' },
    { label: '30 days' },
    { label: '365 days', disabled: true }
  ]
})
`,-1)]]),default:t(()=>[a(x,{class:`mr6`,modelValue:l.ex9a,"onUpdate:modelValue":u[15]||=e=>l.ex9a=e,items:l.items1,disabled:``},null,8,[`modelValue`,`items`]),a(x,{modelValue:l.ex9b,"onUpdate:modelValue":u[16]||=e=>l.ex9b=e,items:l.items9},null,8,[`modelValue`,`items`])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[67]||=[o(`Custom slot`,-1)]]),_:1}),u[91]||=r(`p`,null,[o(`Use the default slot to customise the content of each button.
The slot receives `),r(`code`,null,`{ item, index, active }`),o(`.`)],-1),a(S,null,{pug:t(()=>[...u[68]||=[o(`w-buttons(v-model="active" :items="items")
  template(#default="{ item, active }")
    w-icon.mr1(:color="active ? 'white' : item.color") `+n(`{{ item.icon }}`)+`
    | `+n(`{{ item.label }}`),-1)]]),html:t(()=>[...u[69]||=[o(`<w-buttons v-model="active" :items="items">
  <template #default="{ item, active }">
    <w-icon class="mr1" :color="active ? 'white' : item.color">`+n(`{{ item.icon }}`)+`</w-icon>
    `+n(`{{ item.label }}`)+`
  </template>
</w-buttons>`,-1)]]),js:t(()=>[...u[70]||=[o(`data: () => ({
  active: 0,
  items: [
    { label: 'Success', icon: 'mdi mdi-check-circle-outline', color: 'success' },
    { label: 'Warning', icon: 'mdi mdi-alert-outline', color: 'warning' },
    { label: 'Error', icon: 'mdi mdi-close-circle-outline', color: 'error' }
  ]
})
`,-1)]]),default:t(()=>[a(x,{modelValue:l.ex10,"onUpdate:modelValue":u[17]||=e=>l.ex10=e,items:l.items10},{default:t(({item:e,active:r})=>[a(C,{class:`mr1`,color:r?`white`:e.color},{default:t(()=>[o(n(e.icon),1)]),_:2},1032,[`color`]),o(n(e.label),1)]),_:1},8,[`modelValue`,`items`])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[71]||=[o(`Slot mode`,-1)]]),_:1}),u[92]||=r(`p`,null,[o(`When no `),r(`code`,null,`items`),o(` prop is provided you can place `),r(`code`,null,`w-button`),o(` elements directly in the
default slot. The `),r(`code`,null,`v-model`),o(` still controls the active state by button index.`)],-1),a(S,null,{pug:t(()=>[...u[75]||=[o(`w-buttons(v-model="active")
  w-button Day
  w-button Week
  w-button Month`,-1)]]),html:t(()=>[...u[76]||=[o(`<w-buttons v-model="active">
  <w-button>Day</w-button>
  <w-button>Week</w-button>
  <w-button>Month</w-button>
</w-buttons>`,-1)]]),js:t(()=>[...u[77]||=[o(`data: () => ({
  active: 0
})
`,-1)]]),default:t(()=>[a(x,{modelValue:l.ex11,"onUpdate:modelValue":u[18]||=e=>l.ex11=e},{default:t(()=>[a(w,null,{default:t(()=>[...u[72]||=[o(`Day`,-1)]]),_:1}),a(w,null,{default:t(()=>[...u[73]||=[o(`Week`,-1)]]),_:1}),a(w,null,{default:t(()=>[...u[74]||=[o(`Month`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),_:1}),a(b,{h2:``},{default:t(()=>[...u[78]||=[o(`Sizes`,-1)]]),_:1}),u[93]||=c(`<p>The same size presets as <code>w-button</code> are available: <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code>.</p>`,1),a(S,null,{pug:t(()=>[...u[79]||=[o(`w-buttons(v-model="active" :items="items" xs)
w-buttons(v-model="active" :items="items" sm)
w-buttons(v-model="active" :items="items")
w-buttons(v-model="active" :items="items" lg)
w-buttons(v-model="active" :items="items" xl)`,-1)]]),html:t(()=>[...u[80]||=[o(`<w-buttons v-model="active" :items="items" xs></w-buttons>
<w-buttons v-model="active" :items="items" sm></w-buttons>
<w-buttons v-model="active" :items="items"></w-buttons>
<w-buttons v-model="active" :items="items" lg></w-buttons>
<w-buttons v-model="active" :items="items" xl></w-buttons>`,-1)]]),js:t(()=>[...u[81]||=[o(`data: () => ({
  active: 1,
  items: [
    { label: '7 days' },
    { label: '30 days' },
    { label: '365 days' }
  ]
})`,-1)]]),default:t(()=>[r(`div`,h,[a(x,{modelValue:l.ex12,"onUpdate:modelValue":u[19]||=e=>l.ex12=e,items:l.items1,xs:``},null,8,[`modelValue`,`items`]),a(x,{modelValue:l.ex12,"onUpdate:modelValue":u[20]||=e=>l.ex12=e,items:l.items1,sm:``},null,8,[`modelValue`,`items`]),a(x,{modelValue:l.ex12,"onUpdate:modelValue":u[21]||=e=>l.ex12=e,items:l.items1},null,8,[`modelValue`,`items`]),a(x,{modelValue:l.ex12,"onUpdate:modelValue":u[22]||=e=>l.ex12=e,items:l.items1,lg:``},null,8,[`modelValue`,`items`]),a(x,{modelValue:l.ex12,"onUpdate:modelValue":u[23]||=e=>l.ex12=e,items:l.items1,xl:``},null,8,[`modelValue`,`items`])])]),_:1})])}var _=u({data:()=>({items1:[{label:`7 days`},{label:`30 days`},{label:`365 days`}],ex1:1,ex2a:0,ex2b:1,ex2c:2,ex3:0,items4:[{label:`Bold`},{label:`Italic`},{label:`Underline`}],ex4:[0,2],ex5:1,items6:[{id:`d`,label:`Day`},{id:`w`,label:`Week`},{id:`m`,label:`Month`}],ex6:`w`,ex7a:0,ex7b:1,ex8a:1,ex8b:1,ex8c:1,ex8d:1,ex8e:1,items9:[{label:`7 days`},{label:`30 days`},{label:`365 days`,disabled:!0}],ex9a:1,ex9b:0,items10:[{label:`Success`,icon:`mdi mdi-check-circle-outline`,color:`success`},{label:`Warning`,icon:`mdi mdi-alert-outline`,color:`warning`},{label:`Error`,icon:`mdi mdi-close-circle-outline`,color:`error`}],ex10:0,ex11:0,ex12:1})},[[`render`,g]]);function v(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var y={items:`An array of button definition objects. Each object can include: <code>label</code>, <code>id</code>, <code>value</code>, <code>active</code>, <code>disabled</code>, <code>icon</code>, <code>iconProps</code>, <code>color</code>, <code>bgColor</code>, <code>class</code>.<br>When omitted, place <code>w-button</code> elements directly in the default slot.`,modelValue:`The active selection, controlled via <code>v-model</code>.<br>In single mode: a single value (index, or the item's <code>id</code>/<code>value</code> key).<br>In multiple mode: an array of values.`,itemValueKey:`The key in each item object used to build the <code>v-model</code> value.<br>Auto-detected when omitted: checks for <code>id</code> first, then <code>value</code>, then falls back to 0-based index.`,multiple:`Allows multiple buttons to be active simultaneously. The <code>v-model</code> becomes an array of values.`,mandatory:`Forces at least one button to remain active at all times. Clicking the only active button will not deactivate it.`,disabled:`Disables all buttons in the group. Individual buttons can also be disabled via the <code>disabled</code> key in the <code>items</code> array.`,gap:`Gap between buttons, in base-increment units (same scale as <code>w-flex</code>). Default <code>0</code> sticks the buttons together. Any non-zero value separates them and each button gets its own full styling (border-radius, shadow, etc.).`,buttonClass:`CSS class(es) applied to every button in the group.`,color:`Applies a text color to all buttons. Inactive buttons inherit this color for their text and border (outline mode).`,bgColor:`Applies a background color to all buttons.`,activeColor:`Text color of the active button. Falls back to <code>color</code> when not set.`,activeBgColor:`Background color of the active button. Defaults to the <code>primary</code> color when not set.`,dark:`Sets white text on all buttons.`,light:`Sets dark text on all buttons.`,outline:`Gives inactive buttons an outlined look (color as border and text, no background).`,text:`Sets inactive buttons to transparent background mode.`,round:`In stuck mode: rounds only the outer two corners, giving the group a pill shape.<br>In gap mode: each button is individually round.`,shadow:`In stuck mode: applies a drop shadow to the wrapper.<br>In gap mode: applies a drop shadow to each button.`,tile:`Removes border-radius from all buttons (and the wrapper in stuck mode).`,type:`Native HTML <code>type</code> attribute forwarded to all buttons.`,noRipple:`Disables the pointer ripple on all buttons.`,xs:`Sets all buttons to extra-small size.`,sm:`Sets all buttons to small size.`,md:`Sets all buttons to medium size (default).`,lg:`Sets all buttons to large size.`,xl:`Sets all buttons to extra-large size.`,width:`Sets a fixed width on all buttons. Accepts a string with unit (e.g. <code>2.5em</code>) or a number (pixels).`,height:`Sets a fixed height on all buttons. Accepts a string with unit (e.g. <code>2.5em</code>) or a number (pixels).`},b={default:{description:`In <strong>items mode</strong>: custom content for each button. Receives <code>{ item, index, active }</code> as slot props.<br>In <strong>slot mode</strong> (no <code>items</code> prop): place <code>w-button</code> elements directly — the group manages their active state via <code>v-model</code>.`,params:{item:`The current item object from the <code>items</code> array (items mode only).`,index:`The 0-based button index.`,active:`Boolean — whether this button is currently active.`}}},x={"update:modelValue":`Emitted when the active selection changes. The payload is the new active value (single mode) or array of values (multiple mode), or <code>null</code> when nothing is active.`,click:`Emitted when any button is clicked. Payload: <code>(item, index, event)</code> where <code>item</code> is the item object (or <code>null</code> in slot mode), <code>index</code> is the 0-based index, and <code>event</code> is the native MouseEvent.`},S=u({data:()=>({propsDescs:y,slots:b}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:x[t]||``},e),{})}}},[[`render`,v]]);function C(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-buttons`,-1)]]),_:1}),a(p),a(m)])}var w=u({components:{Examples:_,Api:S}},[[`render`,C]]);export{w as default};