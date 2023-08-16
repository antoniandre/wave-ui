import{n as o,E as a,F as d}from"./index.e31dd236.js";var p=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("alert",{attrs:{info:""}},[e._v("The "),t("span",{staticClass:"code"},[e._v("w-select")]),e._v(` component can be placed in a hidden overflow container and the dropdown
menu will still be fully visible when open.`),t("br"),e._v(`
This is because the select dropdown menu is placed at the `),t("span",{staticClass:"code"},[e._v(".w-app")]),e._v(` level in the DOM,
just so you don't have to worry about this annoying case.
`)]),t("title-link",{attrs:{h2:""}},[e._v("Basic")]),e._m(0),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-select :items="items"></w-select>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1}})],1),t("title-link",{attrs:{h2:""}},[e._v("Label and / or placeholder")]),e._m(1),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-select(:items="items" label="Label")
w-select.mt4(:items="items" placeholder="Placeholder")
w-select.mt4(:items="items" label="Label" placeholder="Placeholder")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-select
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
`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1,label:"Label"}}),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,placeholder:"Placeholder"}}),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Label",placeholder:"Placeholder"}})],1),t("alert",{attrs:{tip:""}},[e._v(`The items of the select list should have a label, which is by default expected in each item
object under the `),t("code",[e._v("label")]),e._v(" name."),t("br"),e._v(`
If this is a constraint, you can use the option `),t("code",[e._v("item-label-key")]),e._v(` to specify the name of another
attribute to be used instead.
`)]),t("title-link",{attrs:{h2:""}},[e._v("Outline")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" outline) Label')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-select :items="items" outline>Label</w-select>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1,outline:""}},[e._v("Label")])],1),t("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(2),t("title-link",{attrs:{h3:"",slug:"default-style"}},[e._v("Default style (Underline)")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-select(:items="items" color="blue") Label
w-select.mt4(:items="items" bg-color="blue-light5" color="blue-dark3") Label`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-select
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
</w-select>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1,color:"blue"}},[e._v("Label")]),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,"bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Label")])],1),t("title-link",{attrs:{h3:""}},[e._v("Outline style")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-select(:items="items" outline color="blue") Label
w-select.mt4(:items="items" outline bg-color="blue-light5" color="blue-dark3") Label`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-select
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
</w-select>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1,outline:"",color:"blue"}},[e._v("Label")]),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,outline:"","bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Label")])],1),t("title-link",{attrs:{h3:""}},[e._v("List items colors")]),e._m(3),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items") Pick a color')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-select :items="items">
  Pick a color
</w-select>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Amber', color: 'amber' },
    { label: 'Warning', color: 'warning' },
    { label: 'Error', color: 'error' },
    { label: 'Pink', color: 'pink' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items4}},[e._v("Pick a color")])],1),t("title-link",{attrs:{h2:""}},[e._v("Shadow")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.title4.mb2 Default style (Underline)
w-select(:items="items" shadow) Label

.title4.mt6.mb2 Outline style
w-select(:items="items" outline shadow) Label`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="title4 mb2">
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
</w-select>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("div",{staticClass:"title4"},[e._v("Default style (Underline)")]),t("w-select",{attrs:{items:e.items1,shadow:""}},[e._v("Label")]),t("div",{staticClass:"title4 mt6"},[e._v("Outline style")]),t("w-select",{attrs:{items:e.items1,outline:"",shadow:""}},[e._v("Label")])],1),t("title-link",{attrs:{h2:""}},[e._v("Tile & round")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.title4 Default style (Underline)
w-select.mt3(:items="items" bg-color="purple-light5" tile) Tile
w-select.mt4(:items="items" bg-color="purple-light5" round) Round

.title4.mt6 Outline style
w-select.mt3(:items="items" outline tile) Tile
w-select.mt4(:items="items" outline round) Round`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="title4">
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
`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("div",{staticClass:"title4"},[e._v("Default style (Underline)")]),t("w-select",{attrs:{items:e.items1,"bg-color":"purple-light5",tile:""}},[e._v("Tile")]),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,"bg-color":"purple-light5",round:""}},[e._v("Round")]),t("div",{staticClass:"title4 mt6"},[e._v("Outline style")]),t("w-select",{attrs:{items:e.items1,outline:"",tile:""}},[e._v("Tile")]),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,outline:"",round:""}},[e._v("Round")])],1),t("title-link",{attrs:{h2:""}},[e._v("Fit to content")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-select(
  :items="items"
  placeholder="Select an item"
  fit-to-content) Fit to content`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-select
  :items="items"
  placeholder="Select an item"
  fit-to-content>
  Fit to content
</w-select>
`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: '1st item' },
    { label: 'Second item' },
    { label: 'Third & longest item' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items5,placeholder:"Select an item","fit-to-content":""}},[e._v("Fit to content")])],1),t("title-link",{attrs:{h2:""}},[e._v("Multiple selection")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" multiple)')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-select :items="items" multiple></w-select>')]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1,multiple:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("V-model")]),t("alert",{attrs:{tip:""}},[e._v("By default, the "),t("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component expects the items to have a "),t("code",[e._v("value")]),e._v(" attribute."),t("br"),e._v(`
If this is a constraint, you can use the option `),t("code",[e._v("item-value-key")]),e._v(` to specify the name of another
attribute to be used instead (must have a unique value), like an id for instance.`)]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+e._s("{{ selection }}")+`</code>
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items3,multiple:""},model:{value:e.vModelSelect1,callback:function(n){e.vModelSelect1=n},expression:"vModelSelect1"}}),t("w-flex",{staticClass:"align-center mt4"},[t("span",[e._v("v-model:")]),t("code",{staticClass:"ml2"},[e._v(e._s(e.vModelSelect1))])])],1),t("title-link",{attrs:{h3:""}},[e._v("Without values (using labels)")]),t("p",[e._v("If no values are provided in the items objects, the labels will be used to identify the selected items.")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-select(v-model="selection" :items="items" multiple)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+e._s("{{ selection }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-select
  v-model="selection"
  :items="items"
  multiple>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+e._s("{{ selection }}")+`</code>
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: ['Item 1', 'Item 3']
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1,multiple:""},model:{value:e.vModelSelect2,callback:function(n){e.vModelSelect2=n},expression:"vModelSelect2"}}),t("w-flex",{staticClass:"align-center mt4"},[t("span",[e._v("v-model:")]),t("code",{staticClass:"ml2"},[e._v(e._s(e.vModelSelect2))])])],1),t("title-link",{attrs:{h3:""}},[e._v("Using full objects in v-model")]),e._m(4),t("p"),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-select(v-model="selection" :items="items" multiple return-object)
w-flex.align-center.mt4
  span v-model:
  code.ml2 `+e._s("{{ selection }}"))]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-select
  v-model="selection"
  :items="items"
  multiple
  return-object>
</w-select>

<w-flex class="align-center mt4">
  <span>v-model:</span>
  <code class="ml2">`+e._s("{{ selection }}")+`</code>
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ],
  selection: [{ label: 'Item 3' }]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1,multiple:"","return-object":""},model:{value:e.vModelSelect3,callback:function(n){e.vModelSelect3=n},expression:"vModelSelect3"}}),t("w-flex",{staticClass:"align-center mt4"},[t("span",[e._v("v-model:")]),t("code",{staticClass:"ml2"},[e._v(e._s(e.vModelSelect3))])])],1),t("title-link",{attrs:{h2:""}},[e._v("Label position")]),t("p",[e._v(`By default the label is positioned inside, you can also place it on the left or right outside of
the select list.`)]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-select(:items="items" label="Select an item")
w-select.mt4(:items="items" label="Select an item" label-position="left")
w-select.mt4(:items="items" label="Select an item" label-position="right")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-select
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
</w-select>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1,label:"Select an item"}}),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select an item","label-position":"left"}}),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select an item","label-position":"right"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Custom label")]),e._m(5),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-select
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
`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items1,"label-position":"inside",outline:""}},[t("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")]),t("span",{staticClass:"purple mx1"},[e._v("Inside")]),t("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")])],1),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,"label-position":"left",outline:""}},[t("span",{staticClass:"green mr1"},[e._v("Left")]),t("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")])],1),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,"label-position":"right",outline:""}},[t("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")]),t("span",{staticClass:"red ml1"},[e._v("Right")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Custom selection string")]),e._m(6),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-select :items="items" v-model="selection" multiple>
  <template #selection="{ item }">
    <w-tag
      class="mr2"
      v-for="(item, i) in item"
      :key="i"
      bg-color="grey-light4">
      `+e._s("{{ item.label }}")+`
    </w-tag>
  </template>
</w-select>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ],
  selection: [1, 3]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items3,multiple:""},scopedSlots:e._u([{key:"selection",fn:function(n){var s=n.item;return e._l(s,function(i,u){return t("w-tag",{key:u,staticClass:"mr2",attrs:{"bg-color":"grey-light4"}},[e._v(e._s(i.label))])})}}]),model:{value:e.customSelection,callback:function(n){e.customSelection=n},expression:"customSelection"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Custom list items")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-select :items="items">
  <template #item="{ item, selected }">
    <w-icon v-if="selected" class="primary">wi-check</w-icon>
    <span v-else class="px2"></span>

    <span class="ml1">`+e._s("{{ item.label }}")+`</span>

    <w-tag class="ml2" bg-color="grey-light4" xs>
      `+e._s("{{ item.value }}")+`
    </w-tag>
  </template>
</w-select>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ]
})
`)]},proxy:!0}])},[t("w-select",{attrs:{items:e.items3},scopedSlots:e._u([{key:"item",fn:function(n){var s=n.item,i=n.selected;return[i?t("w-icon",{staticClass:"primary"},[e._v("wi-check")]):t("span",{staticClass:"px2"}),t("span",{staticClass:"ml1"},[e._v(e._s(s.label))]),t("w-tag",{staticClass:"ml2",attrs:{"bg-color":"grey-light4",xs:""}},[e._v(e._s(s.value))])]}}])})],1),t("title-link",{attrs:{h2:""}},[e._v("Inner icons")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<div class="title4 mb2">
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
</w-select>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb2"},[e._v("Label outside")]),t("w-select",{attrs:{items:e.items1,label:"Select","label-position":"left",outline:"","inner-icon-left":"mdi mdi-star"}}),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select","label-position":"right",outline:"","inner-icon-right":"mdi mdi-arrow-down"}}),t("div",{staticClass:"title4 mt6 mb2"},[e._v("Label inside")]),t("w-select",{attrs:{items:e.items1,label:"Select","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-star"}}),t("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-arrow-down"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),t("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v(`<w-select
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
`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  items: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})`)]},proxy:!0}])},[t("w-select",{staticClass:"mb4",attrs:{items:e.items1,label:"Disabled & empty",outline:"",disabled:""}}),t("w-select",{staticClass:"mb4",attrs:{items:e.items1,label:"Disabled & filled",value:"Item 1",outline:"",disabled:""}}),t("w-select",{staticClass:"mb4",attrs:{items:e.items1,label:"Readonly & empty",outline:"",readonly:""}}),t("w-select",{attrs:{items:e.items1,value:"Item 1",label:"Readonly & filled",outline:"",readonly:""}})],1)],1)},v=[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("This is the most basic use of the "),t("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component. No label, no v-model, only items.")])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("The select list can have a label or not and a placeholder or not."),t("br")])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",{staticClass:"mb4"},[e._v("Like in most components, you can set a "),t("code",[e._v("color")]),e._v(" for the text and a "),t("code",[e._v("bg-color")]),e._v(` for the
background.`),t("br"),e._v(`
By default, the text has the "`),t("span",{staticClass:"code"},[e._v("primary")]),e._v('" color.')])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("If an item object contains the key "),t("code",[e._v("color")]),e._v(`, it will naturally be used by the
`),t("strong",{staticClass:"code"},[e._v("w-select")]),e._v(" component to display this list item in this color."),t("br"),e._v(`
To disable this you can set the `),t("code",[e._v("item-color-key")]),e._v(" prop to an empty string.")])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("If it's more convenient for you, you can ask the "),t("span",{staticClass:"code"},[e._v("w-select")]),e._v(` component to return the
full items objects in the selection.`),t("br"),e._v(`
You then have the choice to provide an array of either values or full objects in the v-model,
if you want to prefill the select list.`)])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("It is convenient to have the label inside the "),t("span",{staticClass:"code"},[e._v("w-select")]),e._v(` component to let it handle
the field focus event on label click.`),t("br"),e._v(`
The `),t("span",{staticClass:"code"},[e._v("label")]),e._v(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)])},function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p",[e._v("The selection string is customizable through the "),t("code",[e._v("selection")]),e._v(" slot."),t("br"),e._v(`
For consistency, the name of the provided parameter containing the selected item(s) is `),t("code",[e._v("item")]),e._v(`,
whether you use a multiple or single select list.`)])}];const h={data:()=>({items1:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],items2:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],items3:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3}],items4:[{label:"Amber",color:"amber"},{label:"Warning",color:"warning"},{label:"Error",color:"error"},{label:"Pink",color:"pink"}],items5:[{label:"1st item"},{label:"Second item"},{label:"Third & longest item"}],vModelSelect1:[1,3],customSelection:[1,3],vModelSelect2:["Item 1","Item 3"],vModelSelect3:[{label:"Item 3"}]})},c={};var b=o(h,p,v,!1,f,null,null,null);function f(e){for(let l in c)this[l]=c[l]}var _=function(){return b.exports}(),w=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},y=[];const g={items:"Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.",value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The current selection of the select field.<br>Gets updated on selection change.',multiple:"Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.",placeholder:"Provide a placeholder for the select field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",label:"Sets a visible label for the select field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the select field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the select field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",itemLabelKey:'The property name (aka "key") in each item object where to find the label of the item.',itemColorKey:'The property name (aka "key") in each item object where to find the color of the item.<br>By default, the <code>color</code> key of the current item will be used to render this item in this color.<br>You can also provide an empty string to disable this feature.',itemValueKey:'The property name (aka "key") in each item object where to find the value of the item.',itemClass:"Applies a custom CSS class to each select list item.",menuClass:"Applies a custom CSS class to the select list's floating menu element.",menuProps:`Internally, the <strong class="code">w-select</strong> component uses the <strong class="code">w-menu</strong> component.<br>This option allows you to pass down to the menu all the props that the <strong class="code">w-menu</strong> component can accept.<br>For instance, you could set <code>:menu-props="{ appendTo: '.my-scrolling-container' }"</code>, in order to move the select list floating menu to a particular DOM node, and allowing it to scroll with its container.`,noUnselect:"When set to <code>true</code>, forces the select list to always have at least one selected item.<br>For single select lists, it prevents unselecting the selected item but still allows switching selection.<br>For multiple select lists, it will only prevent unselecting the item when it's the only remaining selection. ",color:`Applies a color to the select's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the select's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the select's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the select field, giving it a round look.",shadow:"Applies a drop shadow to the select field.",tile:"Removes the default border-radius and sets sharp edges on the select field.",fitToContent:"Fits the select list width to its selected content.",dark:!1,returnObject:"The current selection is returned via the <code>value</code> prop or <code>v-model</code> as an array of full objects or a single full object (returning the original as given) when <code>multiple</code> is set to false.",name:"Provide a native HTML <code>name</code> attribute to the select field. If not provided, a unique name will be computed.",disabled:"Disables the select field making it unreactive to user interactions.",readonly:"The select field will still look like an interactive select field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the select field.",validators:'<span class="deep-orange">Only for validation, when the select field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the select field. Each function will be executed on select field validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the select field.'},k={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},selection:{description:"Provide a custom template for the selection string.",params:{item:"The selected item(s) object(s). May be an array if <code>multiple</code> is <code>true</code>, or a single object otherwise."}},item:{description:"Provide a common custom template for all the select list items.",params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single select list item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",selected:"A Boolean representing the selected state of the list item.",index:"The index of the list item."}}},x={input:{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},"update:modelValue":{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array, Object, Mixed value]":"The new selected value(s). Array if <code>multiple</code> is set to <code>true</code>, single value otherwise."}},focus:{description:"Emitted on select focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on select blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"item-click":{description:"Emitted on select list item click.",params:{"[Object]":"The clicked item object."}},"item-select":{description:"Emitted on list item select (click or <kbd>enter</kbd> keydown).",params:{"[Object]":"The selected item object."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},I={data:()=>({propsDescs:g,slots:k}),computed:{props(){return{...a.props,...d.props}},events(){return a.emits.reduce((e,l)=>(e[l]=x[l]||{})&&e,{})}}},r={};var S=o(I,w,y,!1,C,null,null,null);function C(e){for(let l in r)this[l]=r[l]}var j=function(){return S.exports}(),L=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("main",[t("ui-component-title",[e._v("w-select")]),t("examples"),t("api")],1)},T=[];const M={components:{Examples:_,Api:j}},m={};var E=o(M,L,T,!1,A,null,null,null);function A(e){for(let l in m)this[l]=m[l]}var P=function(){return E.exports}();export{P as default};
