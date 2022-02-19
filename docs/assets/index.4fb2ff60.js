var d=Object.defineProperty;var a=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var o=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&o(e,t,n[t]);if(a)for(var t of a(n))v.call(n,t)&&o(e,t,n[t]);return e};import{n as s,s as r,F as b}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Default")]),e._m(0),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v("w-input Label")]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input>Label</w-input>
`)]},proxy:!0}])},[t("w-input",[e._v("Label")])],1),t("title-link",{attrs:{h2:""}},[e._v("Label and / or placeholder")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input.mb4(label="Label")
w-input.mb4(placeholder="Placeholder")
w-input.mb4(label="Label" placeholder="Placeholder")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  class="mb4"
  label="Label">
</w-input>

<w-input
  class="mb4"
  placeholder="Placeholder">
</w-input>

<w-input
  class="mb4"
  label="Label"
  placeholder="Placeholder">
</w-input>
`)]},proxy:!0}])},[t("w-input",{staticClass:"mb4",attrs:{label:"Label"}}),t("w-input",{staticClass:"mb4",attrs:{placeholder:"Placeholder"}}),t("w-input",{staticClass:"mb4",attrs:{label:"Label",placeholder:"Placeholder"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Static label")]),e._m(1),e._m(2),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-input(label="Label" static-label)')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  label="Label"
  static-label>
</w-input>
`)]},proxy:!0}])},[t("w-input",{attrs:{label:"Label","static-label":""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Outline")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input.mb6(label="Outline" outline)
w-input.mb3(placeholder="Outline" outline)
w-input.mb3(label="Outline" color="info" outline)
w-input.mb3(label="Outline" bg-color="blue-light5" outline)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  class="mb6"
  label="Outline"
  outline>
</w-input>

<w-input
  class="mb3"
  placeholder="Outline"
  outline>
</w-input>

<w-input
  class="mb3"
  label="Outline"
  color="info"
  outline>
</w-input>

<w-input
  class="mb3"
  label="Outline"
  bg-color="blue-light5"
  outline>
</w-input>
`)]},proxy:!0}])},[t("w-input",{staticClass:"mb6",attrs:{label:"Outline",outline:""}}),t("w-input",{staticClass:"mb3",attrs:{placeholder:"Outline",outline:""}}),t("w-input",{staticClass:"mb3",attrs:{label:"Outline",color:"info",outline:""}}),t("w-input",{staticClass:"mb3",attrs:{label:"Outline","bg-color":"blue-light5",outline:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Shadow")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input.mb4(label="Shadow" shadow)
w-input(label="Outline with shadow" shadow outline)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  class="mb4"
  label="Shadow"
  shadow>
</w-input>

<w-input
  label="Outline
  with shadow"
  shadow
  outline>
</w-input>
`)]},proxy:!0}])},[t("w-input",{staticClass:"mb4",attrs:{label:"Shadow",shadow:""}}),t("w-input",{attrs:{label:"Outline with shadow",shadow:"",outline:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Round & Tile")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(label="Round" round)
    w-input.mb1(label="Round and shadow" round shadow)
    w-input.mb1(label="Tile" tile)

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(label="Round" round outline)
    w-input.mb1(label="Round and shadow" round outline shadow)
    w-input.mb1(label="Tile" tile outline)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap :gap="2">
  <div
    class="grow mb4"
    style="min-width: 200px">
    <div class="title4 mb2">
      Underline style (default)
    </div>

    <w-input
      class="mb1"
      label="Round"
      round>
    </w-input>

    <w-input
      class="mb1"
      label="Round and shadow"
      round
      shadow>
    </w-input>

    <w-input
      class="mb1"
      label="Tile"
      tile>
    </w-input>
  </div>

  <div
    class="grow mb4"
    style="min-width: 200px">

    <div class="title4 mb2">
      Outline style
    </div>

    <w-input
      class="mb1"
      label="Round"
      round
      outline>
    </w-input>

    <w-input
      class="mb1"
      label="Round and shadow"
      round
      outline
      shadow>
    </w-input>

    <w-input
      class="mb1"
      label="Tile"
      tile
      outline>
    </w-input>
  </div>
</w-flex>
`)]},proxy:!0}])},[t("w-flex",{attrs:{wrap:"",gap:2}},[t("div",{staticClass:"grow mb4",staticStyle:{"min-width":"200px"}},[t("div",{staticClass:"title4 mb2"},[e._v("Underline style (default)")]),t("w-input",{staticClass:"mb1",attrs:{label:"Round",round:""}}),t("w-input",{staticClass:"mb1",attrs:{label:"Round and shadow",round:"",shadow:""}}),t("w-input",{attrs:{label:"Tile",tile:""}})],1),t("div",{staticClass:"grow mb4",staticStyle:{"min-width":"200px"}},[t("div",{staticClass:"title4 mb2"},[e._v("Outline style")]),t("w-input",{staticClass:"mb1",attrs:{label:"Round",round:"",outline:""}}),t("w-input",{staticClass:"mb1",attrs:{label:"Round and shadow",round:"",outline:"",shadow:""}}),t("w-input",{staticClass:"mb1",attrs:{label:"Tile",tile:"",outline:""}})],1)])],1),t("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(3),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(value="Some content")
    w-input.mb1(color="red" value="Some content")
    w-input.mb1(bg-color="red-light5" value="Some content")
    w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content")
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content")

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(value="Some content" outline)
    w-input.mb1(color="red" value="Some content" outline)
    w-input.mb1(bg-color="red-light5" value="Some content" outline)
    w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content" outline)
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content" outline)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap :gap="2">
  <div class="grow mb4" style="min-width: 200px">
    <div class="title4 mb2">
      Underline style (default)
    </div>

    <w-input
      class="mb1"
      value="Some content">
    </w-input>

    <w-input
      class="mb1"
      color="red"
      value="Some
      content">
    </w-input>

    <w-input
      class="mb1"
      bg-color="red-light5"
      value="Some
      content">
    </w-input>

    <w-input
      class="mb1"
      color="red-dark1"
      bg-color="red-light5"
      value="Some content">
    </w-input>

    <w-input
      class="mb1"
      color="orange-dark1"
      bg-color="orange-light5"
      value="Some content">
    </w-input>
  </div>

  <div class="grow mb4" style="min-width: 200px">
    <div class="title4 mb2">
      Outline style
    </div>

    <w-input
      class="mb1"
      value="Some content"
      outline>
    </w-input>

    <w-input
      class="mb1"
      color="red"
      value="Some content"
      outline>
    </w-input>

    <w-input
      class="mb1"
      bg-color="red-light5"
      value="Some content"
      outline>
    </w-input>

    <w-input
      class="mb1"
      color="red-dark1"
      bg-color="red-light5"
      value="Some content"
      outline>
    </w-input>

    <w-input
      class="mb1"
      color="orange-dark1"
      bg-color="orange-light5"
      value="Some content"
      outline>
    </w-input>
  </div>
</w-flex>
`)]},proxy:!0}])},[t("w-flex",{attrs:{wrap:"",gap:2}},[t("div",{staticClass:"grow mb4",staticStyle:{"min-width":"200px"}},[t("div",{staticClass:"title4 mb2"},[e._v("Underline style (default)")]),t("w-input",{staticClass:"mb1",attrs:{value:"Some content"}}),t("w-input",{staticClass:"mb1",attrs:{color:"red",value:"Some content"}}),t("w-input",{staticClass:"mb1",attrs:{"bg-color":"red-light5",value:"Some content"}}),t("w-input",{staticClass:"mb1",attrs:{color:"red-dark1","bg-color":"red-light5",value:"Some content"}}),t("w-input",{staticClass:"mb1",attrs:{color:"orange-dark1","bg-color":"orange-light5",value:"Some content"}})],1),t("div",{staticClass:"grow mb4",staticStyle:{"min-width":"200px"}},[t("div",{staticClass:"title4 mb2"},[e._v("Outline style")]),t("w-input",{staticClass:"mb1",attrs:{value:"Some content",outline:""}}),t("w-input",{staticClass:"mb1",attrs:{color:"red",value:"Some content",outline:""}}),t("w-input",{staticClass:"mb1",attrs:{"bg-color":"red-light5",value:"Some content",outline:""}}),t("w-input",{staticClass:"mb1",attrs:{color:"red-dark1","bg-color":"red-light5",value:"Some content",outline:""}}),t("w-input",{staticClass:"mb1",attrs:{color:"orange-dark1","bg-color":"orange-light5",value:"Some content",outline:""}})],1)])],1),t("title-link",{attrs:{h2:""}},[e._v("Label position")]),e._m(4),t("alert",{attrs:{tip:""}},[e._v("You could also set a label outside of the "),t("span",{staticClass:"code"},[e._v("w-input")]),e._v(` and display it nicely with flex.
But it is convenient to let the `),t("span",{staticClass:"code"},[e._v("w-input")]),e._v(` component handle the field focus event on
label click.`),t("br"),e._v(`
The `),t("span",{staticClass:"code"},[e._v("label")]),e._v(` prop is here for this purpose and accepts any HTML.
`)]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input.mb3(label="Inside" label-position="inside" outline)
w-input.mb3(label="Left" label-position="left" outline)
w-input.mb3(label="Right" label-position="right" outline)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  class="mb3"
  label="Inside"
  label-position="inside"
  outline>
</w-input>

<w-input
  class="mb3"
  label="Left"
  label-position="left"
  outline>
</w-input>

<w-input
  class="mb3"
  label="Right"
  label-position="right"
  outline>
</w-input>
`)]},proxy:!0}])},[t("w-input",{staticClass:"mb3",attrs:{label:"Inside","label-position":"inside",outline:""}}),t("w-input",{staticClass:"mb3",attrs:{label:"Left","label-position":"left",outline:""}}),t("w-input",{staticClass:"mb3",attrs:{label:"Right","label-position":"right",outline:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Custom label via default slot")]),e._m(5),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input.mb3(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-input.mb3(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-input.mb3(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  class="mb3"
  label-position="inside"
  outline>
  <w-icon class="orange">
    mdi mdi-arrow-right
  </w-icon>

  <span class="purple mx1">
    Inside
  </span>

  <w-icon class="orange">
    mdi mdi-arrow-left
  </w-icon>
</w-input>

<w-input
  class="mb3"
  label-position="left"
  outline>
  <span class="green mr1">
    Left
  </span>

  <w-icon class="orange">
    mdi mdi-arrow-right
  </w-icon>
</w-input>

<w-input
  class="mb3"
  label-position="right"
  outline>
  <w-icon class="orange">
    mdi mdi-arrow-left
  </w-icon>

  <span class="red ml1">
    Right
  </span>
</w-input>
`)]},proxy:!0}])},[t("w-input",{staticClass:"mb3",attrs:{"label-position":"inside",outline:""}},[t("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")]),t("span",{staticClass:"purple mx1"},[e._v("Inside")]),t("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")])],1),t("w-input",{staticClass:"mb3",attrs:{"label-position":"left",outline:""}},[t("span",{staticClass:"green mr1"},[e._v("Left")]),t("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")])],1),t("w-input",{staticClass:"mb3",attrs:{"label-position":"right",outline:""}},[t("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")]),t("span",{staticClass:"red ml1"},[e._v("Right")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Inner icons")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.title4.mb2 Label outside
w-input.mb2(label="Username" label-position="left" outline inner-icon-left="mdi mdi-account")
w-input.mb2(
  label="Password"
  :type="isPassword ? 'password' : 'text'"
  :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
  :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
  @click:inner-icon-right="isPassword = !isPassword")
w-input.mb2(
  label="Password"
  :type="isPassword ? 'password' : 'text'"
  label-position="left"
  outline
  :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
  @click:inner-icon-right="isPassword = !isPassword")
w-input.mb2(label="Right" label-position="right" outline inner-icon-left="wi-check")
w-input.mb2(label="Right" label-position="right" outline inner-icon-right="wi-check")
.title4.mt6.mb2 Label inside
w-input.mb2(label="Inside" label-position="inside" outline inner-icon-left="wi-search")
w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="title4 mb2">
  Label outside
</div>

<w-input
  class="mb2"
  label="Username"
  label-position="left"
  outline
  inner-icon-left="mdi mdi-account">
</w-input>

<w-input class="mb2"
  label="Password"
  :type="isPassword ? 'password' : 'text'"
  :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
  :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
  @click:inner-icon-right="isPassword = !isPassword">
</w-input>

<w-input class="mb2"
  label="Password"
  :type="isPassword ? 'password' : 'text'"
  label-position="left"
  outline
  :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
  @click:inner-icon-right="isPassword = !isPassword">
</w-input>

<w-input
  class="mb2"
  label="Right"
  label-position="right"
  outline
  inner-icon-left="wi-check">
</w-input>

<w-input
  class="mb2"
  label="Right"
  label-position="right"
  outline
  inner-icon-right="wi-check">
</w-input>

<div class="title4 mt6 mb2">
  Label inside
</div>

<w-input
  class="mb2"
  label="Inside"
  label-position="inside"
  outline
  inner-icon-left="wi-search">
</w-input>

<w-input
  class="mb2"
  label="Inside"
  label-position="inside"
  outline
  inner-icon-right="wi-search">
</w-input>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  isPassword: true
})
`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb2"},[e._v("Label outside")]),t("w-input",{staticClass:"mb2",attrs:{label:"Username","label-position":"left",outline:"","inner-icon-left":"mdi mdi-account"}}),t("w-input",{staticClass:"mb2",attrs:{label:"Password",type:e.isPassword?"password":"text","inner-icon-left":e.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","inner-icon-right":e.isPassword?"mdi mdi-eye-off":"mdi mdi-eye"},on:{"click:inner-icon-right":function(i){e.isPassword=!e.isPassword}}}),t("w-input",{staticClass:"mb2",attrs:{label:"Password",type:e.isPassword?"password":"text","label-position":"left",outline:"","inner-icon-right":e.isPassword?"mdi mdi-eye-off":"mdi mdi-eye"},on:{"click:inner-icon-right":function(i){e.isPassword=!e.isPassword}}}),t("w-input",{staticClass:"mb2",attrs:{label:"Right","label-position":"right",outline:"","inner-icon-left":"wi-check"}}),t("w-input",{staticClass:"mb2",attrs:{label:"Right","label-position":"right",outline:"","inner-icon-right":"wi-check"}}),t("div",{staticClass:"title4 mt6 mb2"},[e._v("Label inside")]),t("w-input",{staticClass:"mb2",attrs:{label:"Inside","label-position":"inside",outline:"","inner-icon-left":"wi-search"}}),t("w-input",{staticClass:"mb2",attrs:{label:"Inside","label-position":"inside",outline:"","inner-icon-right":"wi-search"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input.mb3(label="Disabled & empty" outline disabled)
w-input.mb3(label="Disabled & filled" value="Some content" outline disabled)
w-input.mb3(label="Readonly & empty" outline readonly)
w-input.mb3(label="Readonly & filled" value="Some content" outline readonly)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  class="mb3"
  label="Disabled & empty"
  outline
  disabled>
</w-input>

<w-input
  class="mb3"
  label="Disabled & filled"
  value="Some content"
  outline
  disabled>
</w-input>

<w-input
  class="mb3"
  label="Readonly & empty"
  outline
  readonly>
</w-input>

<w-input
  class="mb3"
  label="Readonly & filled"
  value="Some content"
  outline
  readonly>
</w-input>
`)]},proxy:!0}])},[t("w-input",{staticClass:"mb3",attrs:{label:"Disabled & empty",outline:"",disabled:""}}),t("w-input",{staticClass:"mb3",attrs:{label:"Disabled & filled",value:"Some content",outline:"",disabled:""}}),t("w-input",{staticClass:"mb3",attrs:{label:"Readonly & empty",outline:"",readonly:""}}),t("w-input",{staticClass:"mb3",attrs:{label:"Readonly & filled",value:"Some content",outline:"",readonly:""}})],1),t("title-link",{attrs:{h2:"",slug:"file-input"}},[e._v("File input")]),t("alert",{attrs:{success:""}},[e._v("A "),t("strong",{staticClass:"code mx1"},[e._v("w-input")]),e._v(" field only needs a "),t("code",[e._v('type="file"')]),e._v(" to become a file input.")]),e._m(6),t("p",[e._v(`When uploading a larger file, a spinner will show up to the right of the field until
the file is completely transferred.`)]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-input(type="file") File')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input type="file">File</w-input>
`)]},proxy:!0}])},[t("w-input",{attrs:{type:"file"}},[e._v("File")])],1),t("title-link",{attrs:{h3:""}},[e._v("Disabled preview")]),e._m(7),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-input(type="file" :preview="false") File')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input type="file" :preview="false">File</w-input>
`)]},proxy:!0}])},[t("w-input",{attrs:{type:"file",preview:!1}},[e._v("File")])],1),t("title-link",{attrs:{h3:""}},[e._v("Custom preview icon")]),e._m(8),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-input(type="file" preview="mdi mdi-star") File')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input type="file" preview="mdi mdi-star">File</w-input>
`)]},proxy:!0}])},[t("w-input",{attrs:{type:"file",preview:"mdi mdi-star"}},[e._v("File")])],1),t("p",[e._v("You could even compute a variable to show a different icon per detected file type.")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input(
  type="file"
  v-model="files"
  :preview="!!files.length && filePreviewIcon") File`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  type="file"
  v-model="files"
  :preview="!!files.length && filePreviewIcon">
  File
</w-input>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  files: []
}),

computed: {
  filePreviewIcon () {
    const { extension } = this.files[0]
    switch (extension) {
      case 'jpg':
      case 'png':
      case 'gif':
      case 'pdf':
        return \`mdi mdi-file-\${extension}-box\`
      case 'jpeg':
        return 'mdi mdi-file-jpg-box'
      case 'svg':
      case 'webp':
        return 'mdi mdi-image'
      case 'mov':
        return 'mdi mdi-filmstrip'
      case 'zip':
        return 'mdi mdi-folder-zip'
      default:
        return 'mdi mdi-file'
    }
  }
},
`)]},proxy:!0}])},[t("w-input",{attrs:{type:"file",preview:!!e.files3.length&&e.filePreviewIcon},model:{value:e.files3,callback:function(i){e.files3=i},expression:"files3"}},[e._v("File")])],1),t("title-link",{attrs:{h3:""}},[e._v("Reading the files")]),t("p",[e._v(`On the frontend, you can read all the file details and contents on input when the user selects
a file, or you can provide a files array that you keep in sync with Wave UI.`)]),t("title-link",{staticClass:"mt6",attrs:{h4:""}},[e._v("Via @input")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input(type="file" @input="onFileInput") File

pre.mt3(v-html="files")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input type="file" @input="onFileInput>File</w-input>

<pre v-html="files" class="mt3" />`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  files: []
}),

methods: {
  onFileInput (files) {
    this.files = files
  }
}
`)]},proxy:!0}])},[t("w-input",{attrs:{type:"file"},on:{input:e.onFileInput}},[e._v("File")]),t("pre",{staticClass:"mt3",domProps:{innerHTML:e._s(e.files1)}})],1),t("title-link",{staticClass:"mt6 mb2",attrs:{h4:""}},[e._v("Via v-model")]),e._m(9),t("alert",{attrs:{warning:""}},[t("strong",[e._v("Important")]),t("br"),e._v(`Even if a v-model is allowing a two-way binding,
there is no way to prefill an input type file:
that would be a security breach and is therefore not allowed in HTML.`)]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input(type="file" v-model="files") File

pre.mt3(v-html="files")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input type="file" v-model="files">File</w-input>

<pre v-html="files" class="mt3" />`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  files: []
})
`)]},proxy:!0}])},[t("w-input",{attrs:{type:"file"},model:{value:e.files2,callback:function(i){e.files2=i},expression:"files2"}},[e._v("File")]),t("pre",{staticClass:"mt3",domProps:{innerHTML:e._s(e.files2)}})],1),t("title-link",{attrs:{h3:""}},[e._v("Loading state")]),e._m(10),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-input(type="file"
  v-model="files"
  :overall-progress.sync="overallProgress"
  show-progress
  progress-color="green") File

.my4 Overall progress: `+e._s("{{ overallProgress }}")+`

w-flex
  | Files:
  pre.ml2(v-html="files")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input type="file"
  v-model="files4"
  :overall-progress.sync="overallProgress"
  show-progress
  progress-color="green">
  File
</w-input>

<div class="my4">
  Overall progress: `+e._s("{{ overallProgress }}")+`
</div>

<w-flex>
  Files:
  <pre v-html="files" class="ml2" />
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  files: [],
  overallProgress: 0
})
`)]},proxy:!0}])},[t("w-input",{attrs:{type:"file","overall-progress":e.overallProgress,"show-progress":"","progress-color":"green"},on:{"update:overallProgress":function(i){e.overallProgress=i},"update:overall-progress":function(i){e.overallProgress=i}},model:{value:e.files4,callback:function(i){e.files4=i},expression:"files4"}},[e._v("File")]),t("div",{staticClass:"my4"},[e._v("Overall progress: "+e._s(e.overallProgress))]),t("w-flex",[e._v("Files:"),t("pre",{staticClass:"ml2",domProps:{innerHTML:e._s(e.files4)}})])],1),t("title-link",{attrs:{h3:""}},[e._v("Accepting specific file extensions")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg")')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg">
</w-input>
`)]},proxy:!0}])},[t("w-input",{attrs:{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg"}})],1),t("title-link",{attrs:{h3:""}},[e._v("Multiple files upload")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg" multiple)')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg"
  multiple>
</w-input>
`)]},proxy:!0}])},[t("w-input",{attrs:{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg",multiple:""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Types")]),e._m(11),e._m(12),t("h3",[e._v("Textual inputs")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`<ul.input-types>
  <li>
    <.code.mb1 type="date"<
    <w-input(type="date") date<
  <li>
    <.code.mb1 type="email"<
    <w-input(type="email") Email address<
  <li>
    <.code.mb1 type="number"<
    <w-input(type="number" min="0" max="100") Age<
  <li>
    <.code.mb1 type="password"<
    <w-input(type="password") Password<
  <li>
    <.code.mb1 type="search"<
    <w-input(type="search") Search<
  <li>
    <.code.mb1 type="tel"<
    <w-input(type="tel") Tel<
  <li>
    <.code.mb1 type="text"<
    <w-input Text<
  <li>
    <.code.mb1 type="time"<
    <w-input(type="time") time<
  <li>
    <.code.mb1 type="url"<
    <w-input(type="url") Url<
  <li>
    <span.code.mb1.mr2 type="hidden"<
    <| The hidden type is also accepted - but you don't need a w-input for that!<
    <w-input(type="hidden")<`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<ul class="input-types">
  <li>
    <div class="code mb1">type="date"</div>
    <w-input type="date">date</w-input>
  </li>

  <li>
    <div class="code mb1">type="email"</div>
    <w-input type="email">Email address</w-input>
  </li>

  <li>
    <div class="code mb1">type="number"</div>
    <w-input type="number" min="0" max="100">Age</w-input>
  </li>

  <li>
    <div class="code mb1">type="password"</div>
    <w-input type="password">Password</w-input>
  </li>

  <li>
    <div class="code mb1">type="search"</div>
    <w-input type="search">Search</w-input>
  </li>

  <li>
    <div class="code mb1">type="tel"</div>
    <w-input type="tel">Tel</w-input>
  </li>

  <li>
    <div class="code mb1">type="text"</div>
    <w-input>Text</w-input>
  </li>

  <li>
    <div class="code mb1">type="time"</div>
    <w-input type="time">time</w-input>
  </li>

  <li>
    <div class="code mb1">type="url"</div>
    <w-input type="url">Url</w-input>
  </li>

  <li>
    <span class="code mb1 mr2" type="hidden">
      The hidden type is also accepted - but you don't need a w-input for that!
    </span>
    <w-input type="hidden">
  </li>
`)]},proxy:!0}])},[t("ul",{staticClass:"input-types"},[t("li",[t("div",{staticClass:"code mb1"},[e._v('type="date"')]),t("w-input",{attrs:{type:"date"}},[e._v("date")])],1),t("li",{staticClass:"mt4"},[t("div",{staticClass:"code mb1"},[e._v('type="email"')]),t("w-input",{attrs:{type:"email"}},[e._v("Email address")])],1),t("li",{staticClass:"mt4"},[t("div",{staticClass:"code mb1"},[e._v('type="number"')]),t("w-input",{attrs:{type:"number",min:"0",max:"100"}},[e._v("Age")])],1),t("li",{staticClass:"mt4"},[t("div",{staticClass:"code mb1"},[e._v('type="password"')]),t("w-input",{attrs:{type:"password"}},[e._v("Password")])],1),t("li",{staticClass:"mt4"},[t("div",{staticClass:"code mb1"},[e._v('type="search"')]),t("w-input",{attrs:{type:"search"}},[e._v("Search")])],1),t("li",{staticClass:"mt4"},[t("div",{staticClass:"code mb1"},[e._v('type="tel"')]),t("w-input",{attrs:{type:"tel"}},[e._v("Tel")])],1),t("li",{staticClass:"mt4"},[t("div",{staticClass:"code mb1"},[e._v('type="text"')]),t("w-input",{attrs:{type:"text"}},[e._v("Text")])],1),t("li",{staticClass:"mt4"},[t("div",{staticClass:"code mb1"},[e._v('type="time"')]),t("w-input",{attrs:{type:"time"}},[e._v("time")])],1),t("li",{staticClass:"mt4"},[t("div",{staticClass:"code mb1"},[e._v('type="url"')]),t("w-input",{attrs:{type:"url"}},[e._v("Url")])],1),t("li",{staticClass:"mt4"},[t("span",{staticClass:"code mb1 mr2"},[e._v('type="hidden"')]),e._v("The hidden type is also accepted - but you don't need a "),t("span",{staticClass:"code"},[e._v("w-input")]),e._v(" for that!"),t("w-input",{attrs:{type:"hidden"}})],1)])]),t("h3",[e._v("Other types of inputs")]),t("p",[e._v("For all the other types of input listed bellow, a specific Wave UI component should be used instead:")]),t("ul",{staticClass:"other-input-types"},[e._m(13),e._m(14),t("li",{staticClass:"mt1"},[t("span",{staticClass:"code mr2"},[e._v('type="color"')]),e._m(15),t("w-tag",{staticClass:"px1 ml1",attrs:{color:"red",outline:""}},[e._v("coming soon")])],1),e._m(16),e._m(17),e._m(18),e._m(19),e._m(20),t("li",{staticClass:"mt1"},[t("span",{staticClass:"code mr2"},[e._v('type="time"')]),e._m(21),t("w-tag",{staticClass:"px1 ml1",attrs:{color:"red",outline:""}},[e._v("coming soon")])],1)])],1)},f=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("By default the "),t("span",{staticClass:"code"},[e._v("w-input")]),e._v(` component has a label inside the input field, that moves up
above the field on focus or when the field has some content or a placeholder.`),t("br")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(`By default the label is positioned inside and on field focus, it will move up above the field
and shrink.`),t("br"),e._v(`
It is possible to keep it inside and disable the animation with the `),t("code",[e._v("static-label")]),e._v(" option.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"mt4"},[t("strong",[e._v("Note:")]),e._v(` If this option is set to true and the label is positioned inside when a placeholder is set,
only the placeholder will be displayed.
`)])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"mb4"},[e._v("Like in most components, you can set a "),t("code",[e._v("color")]),e._v(" for the text and a "),t("code",[e._v("bg-color")]),e._v(` for the
background.`),t("br"),e._v(`
By default, the text has the "`),t("span",{staticClass:"code"},[e._v("primary")]),e._v('" color.')])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v('The default label position is "'),t("span",{staticClass:"code"},[e._v("inside")]),e._v('", but it can also be "'),t("span",{staticClass:"code"},[e._v("left")]),e._v('" or "'),t("span",{staticClass:"code"},[e._v("right")]),e._v('".')])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("It is convenient to have the label inside the "),t("span",{staticClass:"code"},[e._v("w-input")]),e._v(` component to let it handle
the field focus event on label click.`),t("br"),e._v(`
The `),t("span",{staticClass:"code"},[e._v("label")]),e._v(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("By default, the file input will show a preview of the image you are uploading."),t("br"),e._v(`
If the file can't be previewed a file icon will show up to the right of the field instead of
a preview.`)])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("The file preview can be disabled if not needed by setting the "),t("code",[e._v("preview")]),e._v(` prop to
`),t("code",[e._v("false")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("By default, when the file is not an image, the preview will be a generic file icon."),t("br"),e._v(`
It is possible to set a custom icon instead.`)])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("The v-model can be used to access the files added by the user."),t("br")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(`If you try to upload a very large file, you will see the progress value of the file transfer will
be updated as the transfer goes on (e.g. :loading="overallProgress").`),t("br"),e._v(`
You can also show a self-updated progress bar with the `),t("code",[e._v("show-progress")]),e._v(" prop.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v('The default type is "'),t("span",{staticClass:"code"},[e._v("text")]),e._v('" but the types bellow are also supported.')])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("On desktop you will not notice the difference between the fields "),t("span",{staticClass:"code"},[e._v("email")]),e._v(", "),t("span",{staticClass:"code"},[e._v("tel")]),e._v(`,
`),t("span",{staticClass:"code"},[e._v("url")]),e._v(`, and the default text type. But on touch devices, the keyboard is adapted to the
type of input.`)])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"mt1"},[t("span",{staticClass:"code mr2"},[e._v('type="button"')]),t("span",{staticClass:"grey"},[e._v("use "),t("code",[e._v("w-button")]),e._v(" instead")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"mt1"},[t("span",{staticClass:"code mr2"},[e._v('type="checkbox"')]),t("span",{staticClass:"grey"},[e._v("use "),t("code",[e._v("w-checkbox")]),e._v(" instead")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("span",{staticClass:"grey"},[e._v("use "),t("code",[e._v("w-color-picker")]),e._v(" instead")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"mt1"},[t("span",{staticClass:"code mr2"},[e._v('type="image"')]),t("span",{staticClass:"grey"},[e._v("use the "),t("code",[e._v("img")]),e._v(" HTML tag instead")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"mt1"},[t("span",{staticClass:"code mr2"},[e._v('type="radio"')]),t("span",{staticClass:"grey"},[e._v("use "),t("code",[e._v("w-radio")]),e._v(" instead")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"mt1"},[t("span",{staticClass:"code mr2"},[e._v('type="range"')]),t("span",{staticClass:"grey"},[e._v("use "),t("code",[e._v("w-slider")]),e._v(" instead")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"mt1"},[t("span",{staticClass:"code mr2"},[e._v('type="reset"')]),t("span",{staticClass:"grey"},[e._v("use "),t("code",[e._v("w-button")]),e._v(" instead")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"mt1"},[t("span",{staticClass:"code mr2"},[e._v('type="submit"')]),t("span",{staticClass:"grey"},[e._v("use "),t("code",[e._v("w-button")]),e._v(" instead")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("span",{staticClass:"grey"},[e._v("use "),t("code",[e._v("w-time-picker")]),e._v(" instead")])}];const h={data:()=>({isPassword:!0,files1:[],files2:[],files3:[],files4:[],overallProgress:void 0}),computed:{filePreviewIcon(){const{extension:e}=this.files3[0];switch(e){case"jpg":case"png":case"gif":case"pdf":return`mdi mdi-file-${e}-box`;case"jpeg":return"mdi mdi-file-jpg-box";case"svg":case"webp":return"mdi mdi-image";case"mov":return"mdi mdi-filmstrip";case"zip":return"mdi mdi-folder-zip";default:return"mdi mdi-file"}}},methods:{onFileInput(e){this.files1=e}}},p={};var _=s(h,w,f,!1,y,null,null,null);function y(e){for(let n in p)this[n]=p[n]}var g=function(){return _.exports}(),x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},C=[];const k={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The text content of the input field.<br>Gets updated on text input.',type:"Applies a native HTML <code>type</code> attribute.",label:"Sets a visible label for the input field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",color:`Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,minlength:"Applies the native HTML <code>minlength</code> attribute.",maxlength:"Applies the native HTML <code>maxlength</code> attribute (prevents typing more than this amount of characters).",step:'Applies the native HTML <code>step</code> attribute used for the <code>type="number"</code> inputs (sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>).',min:'Applies the native HTML <code>min</code> attribute used for the <code>type="number"</code> inputs (sets an integer or floating minimum number).',max:'Applies the native HTML <code>max</code> attribute used for the <code>type="number"</code> inputs (sets an integer or floating maximum number).',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the input field, giving it a round look.",shadow:"Applies a drop shadow to the input field.",tile:"Removes the default border-radius and sets sharp edges on the input field.",name:"Provide a native HTML <code>name</code> attribute to the input field. If not provided, a unique name will be computed.",disabled:"Disables the input field making it unreactive to user interactions.",readonly:"The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the input field.",validators:'<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.'},S={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},P={input:{description:"Emitted each time the input text (or file) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textual input value."}},"update:modelValue":{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textual input value."}},"update:overallProgress":{description:"Emitted continuously while uploading a file. When using the <code>multiple</code> option, this is the overall progress of all the files together.<br>You can use it with <code>:overall-progress.sync</code> in Vue 2, or <code>v-model:overall-progress</code> in Vue 3."},focus:{description:"Emitted on input focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on input blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},T={data:()=>({propsDescs:k,slots:S}),computed:{props(){return l(l({},r.props),b.props)},events(){return r.emits.reduce((e,n)=>(e[n]=P[n]||{})&&e,{})}}},u={};var L=s(T,x,C,!1,F,null,null,null);function F(e){for(let n in u)this[n]=u[n]}var $=function(){return L.exports}(),E=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("ui-component-title",[e._v("w-input")]),t("examples"),t("api")],1)},I=[];const O={components:{Examples:g,Api:$}},c={};var R=s(O,E,I,!1,j,null,null,null);function j(e){for(let n in c)this[n]=c[n]}var U=function(){return R.exports}();export{U as default};
