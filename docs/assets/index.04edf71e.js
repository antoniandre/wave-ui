var u=Object.defineProperty;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var a=(t,n,e)=>n in t?u(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,i=(t,n)=>{for(var e in n||(n={}))m.call(n,e)&&a(t,e,n[e]);if(l)for(var e of l(n))v.call(n,e)&&a(t,e,n[e]);return t};import{n as s,s as o,F as h}from"./index.601dd7c5.js";import"./vendor.4f8da9ec.js";var b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Default")]),t._m(0),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input>Label</w-input>
`)]},proxy:!0}])},[e("w-input",[t._v("Label")])],1),e("title-link",{attrs:{h2:""}},[t._v("Label and / or placeholder")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input
  class="mb4"
  label="Label">
</w-input>

<w-input
  class="mb3"
  placeholder="Placeholder">
</w-input>

<w-input
  class="mb3"
  label="Label"
  placeholder="Placeholder">
</w-input>
`)]},proxy:!0}])},[e("w-input",{staticClass:"mb4",attrs:{label:"Label"}}),e("w-input",{staticClass:"mb3",attrs:{placeholder:"Placeholder"}}),e("w-input",{staticClass:"mb3",attrs:{label:"Label",placeholder:"Placeholder"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Static label")]),t._m(1),t._m(2),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input
  class="mb4"
  label="Label"
  static-label>
</w-input>
`)]},proxy:!0}])},[e("w-input",{staticClass:"mb3",attrs:{label:"Label","static-label":""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Outline")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input
  class="mb2"
  label="Outline"
  outline>
</w-input>

<w-input
  class="mb2"
  placeholder="Outline"
  outline>
</w-input>

<w-input
  class="mb2"
  label="Outline"
  color="info"
  outline>
</w-input>

<w-input
  class="mb2"
  label="Outline"
  bg-color="blue-light5"
  outline>
</w-input>
`)]},proxy:!0}])},[e("w-input",{staticClass:"mb4",attrs:{label:"Outline",outline:""}}),e("w-input",{staticClass:"mb2",attrs:{placeholder:"Outline",outline:""}}),e("w-input",{staticClass:"mb2",attrs:{label:"Outline",color:"info",outline:""}}),e("w-input",{staticClass:"mb2",attrs:{label:"Outline","bg-color":"blue-light5",outline:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Shadow")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input
  class="mb4"
  label="Shadow"
  shadow>
</w-input>

<w-input
  class="mb2"
  label="Outline
  with shadow"
  shadow
  outline>
</w-input>
`)]},proxy:!0}])},[e("w-input",{staticClass:"mb4",attrs:{label:"Shadow",shadow:""}}),e("w-input",{staticClass:"mb2",attrs:{label:"Outline with shadow",shadow:"",outline:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Round & Tile")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-flex wrap :gap="2">
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
`)]},proxy:!0}])},[e("w-flex",{attrs:{wrap:"",gap:2}},[e("div",{staticClass:"grow mb4",staticStyle:{"min-width":"200px"}},[e("div",{staticClass:"title4 mb2"},[t._v("Underline style (default)")]),e("w-input",{staticClass:"mb1",attrs:{label:"Round",round:""}}),e("w-input",{staticClass:"mb1",attrs:{label:"Round and shadow",round:"",shadow:""}}),e("w-input",{staticClass:"mb1",attrs:{label:"Tile",tile:""}})],1),e("div",{staticClass:"grow mb4",staticStyle:{"min-width":"200px"}},[e("div",{staticClass:"title4 mb2"},[t._v("Outline style")]),e("w-input",{staticClass:"mb1",attrs:{label:"Round",round:"",outline:""}}),e("w-input",{staticClass:"mb1",attrs:{label:"Round and shadow",round:"",outline:"",shadow:""}}),e("w-input",{staticClass:"mb1",attrs:{label:"Tile",tile:"",outline:""}})],1)])],1),e("title-link",{attrs:{h2:""}},[t._v("Colors")]),t._m(3),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-flex wrap :gap="2">
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
`)]},proxy:!0}])},[e("w-flex",{attrs:{wrap:"",gap:2}},[e("div",{staticClass:"grow mb4",staticStyle:{"min-width":"200px"}},[e("div",{staticClass:"title4 mb2"},[t._v("Underline style (default)")]),e("w-input",{staticClass:"mb1",attrs:{value:"Some content"}}),e("w-input",{staticClass:"mb1",attrs:{color:"red",value:"Some content"}}),e("w-input",{staticClass:"mb1",attrs:{"bg-color":"red-light5",value:"Some content"}}),e("w-input",{staticClass:"mb1",attrs:{color:"red-dark1","bg-color":"red-light5",value:"Some content"}}),e("w-input",{staticClass:"mb1",attrs:{color:"orange-dark1","bg-color":"orange-light5",value:"Some content"}})],1),e("div",{staticClass:"grow mb4",staticStyle:{"min-width":"200px"}},[e("div",{staticClass:"title4 mb2"},[t._v("Outline style")]),e("w-input",{staticClass:"mb1",attrs:{value:"Some content",outline:""}}),e("w-input",{staticClass:"mb1",attrs:{color:"red",value:"Some content",outline:""}}),e("w-input",{staticClass:"mb1",attrs:{"bg-color":"red-light5",value:"Some content",outline:""}}),e("w-input",{staticClass:"mb1",attrs:{color:"red-dark1","bg-color":"red-light5",value:"Some content",outline:""}}),e("w-input",{staticClass:"mb1",attrs:{color:"orange-dark1","bg-color":"orange-light5",value:"Some content",outline:""}})],1)])],1),e("title-link",{attrs:{h2:""}},[t._v("Label position")]),t._m(4),e("alert",{attrs:{tip:""}},[t._v("You could also set a label outside of the "),e("span",{staticClass:"code"},[t._v("w-input")]),t._v(` and display it nicely with flex.
But it is convenient to let the `),e("span",{staticClass:"code"},[t._v("w-input")]),t._v(` component handle the field focus event on
label click.`),e("br"),t._v(`
The `),e("span",{staticClass:"code"},[t._v("label")]),t._v(` prop is here for this purpose and accepts any HTML.
`)]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input
  class="mb2"
  label="Inside"
  label-position="inside"
  outline>
</w-input>

<w-input
  class="mb2"
  label="Left"
  label-position="left"
  outline>
</w-input>

<w-input
  class="mb2"
  label="Right"
  label-position="right"
  outline>
</w-input>
`)]},proxy:!0}])},[e("w-input",{staticClass:"mb2",attrs:{label:"Inside","label-position":"inside",outline:""}}),e("w-input",{staticClass:"mb2",attrs:{label:"Left","label-position":"left",outline:""}}),e("w-input",{staticClass:"mb2",attrs:{label:"Right","label-position":"right",outline:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Custom label via default slot")]),t._m(5),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input
  class="mb2"
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
  class="mb2"
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
  class="mb2"
  label-position="right"
  outline>
  <w-icon class="orange">
    mdi mdi-arrow-left
  </w-icon>

  <span class="red ml1">
    Right
  </span>
</w-input>
`)]},proxy:!0}])},[e("w-input",{staticClass:"mb2",attrs:{"label-position":"inside",outline:""}},[e("w-icon",{staticClass:"orange"},[t._v("mdi mdi-arrow-right")]),e("span",{staticClass:"purple mx1"},[t._v("Inside")]),e("w-icon",{staticClass:"orange"},[t._v("mdi mdi-arrow-left")])],1),e("w-input",{staticClass:"mb2",attrs:{"label-position":"left",outline:""}},[e("span",{staticClass:"green mr1"},[t._v("Left")]),e("w-icon",{staticClass:"orange"},[t._v("mdi mdi-arrow-right")])],1),e("w-input",{staticClass:"mb2",attrs:{"label-position":"right",outline:""}},[e("w-icon",{staticClass:"orange"},[t._v("mdi mdi-arrow-left")]),e("span",{staticClass:"red ml1"},[t._v("Right")])],1)],1),e("title-link",{attrs:{h2:""}},[t._v("Inner icons")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="title4 mb2">
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
</w-input>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  isPassword: true
})
`)]},proxy:!0}])},[e("div",{staticClass:"title4 mb2"},[t._v("Label outside")]),e("w-input",{staticClass:"mb2",attrs:{label:"Username","label-position":"left",outline:"","inner-icon-left":"mdi mdi-account"}}),e("w-input",{staticClass:"mb2",attrs:{label:"Password",type:t.isPassword?"password":"text","inner-icon-left":t.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","inner-icon-right":t.isPassword?"mdi mdi-eye-off":"mdi mdi-eye"},on:{"click:inner-icon-right":function(d){t.isPassword=!t.isPassword}}}),e("w-input",{staticClass:"mb2",attrs:{label:"Password",type:t.isPassword?"password":"text","label-position":"left",outline:"","inner-icon-right":t.isPassword?"mdi mdi-eye-off":"mdi mdi-eye"},on:{"click:inner-icon-right":function(d){t.isPassword=!t.isPassword}}}),e("w-input",{staticClass:"mb2",attrs:{label:"Right","label-position":"right",outline:"","inner-icon-left":"wi-check"}}),e("w-input",{staticClass:"mb2",attrs:{label:"Right","label-position":"right",outline:"","inner-icon-right":"wi-check"}}),e("div",{staticClass:"title4 mt6 mb2"},[t._v("Label inside")]),e("w-input",{staticClass:"mb2",attrs:{label:"Inside","label-position":"inside",outline:"","inner-icon-left":"wi-search"}}),e("w-input",{staticClass:"mb2",attrs:{label:"Inside","label-position":"inside",outline:"","inner-icon-right":"wi-search"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Disabled & readonly")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input
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
`)]},proxy:!0}])},[e("w-input",{staticClass:"mb3",attrs:{label:"Disabled & empty",outline:"",disabled:""}}),e("w-input",{staticClass:"mb3",attrs:{label:"Disabled & filled",value:"Some content",outline:"",disabled:""}}),e("w-input",{staticClass:"mb3",attrs:{label:"Readonly & empty",outline:"",readonly:""}}),e("w-input",{staticClass:"mb3",attrs:{label:"Readonly & filled",value:"Some content",outline:"",readonly:""}})],1),e("title-link",{attrs:{h2:"",slug:"file-input"}},[t._v("File input")]),t._m(6),e("p",[t._v(`When uploading a larger file, a spinner will show up to the right of the field until
the file is completely transfered.`)]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input type="file">File</w-input>
`)]},proxy:!0}])},[e("w-input",{attrs:{type:"file"}},[t._v("File")])],1),e("title-link",{attrs:{h3:""}},[t._v("Specific file extensions")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg">
</w-input>
`)]},proxy:!0}])},[e("w-input",{attrs:{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg"}})],1),e("title-link",{attrs:{h3:""}},[t._v("Multiple")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg"
  multiple>
</w-input>
`)]},proxy:!0}])},[e("w-input",{attrs:{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg",multiple:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Types")]),t._m(7),t._m(8),e("h3",[t._v("Textual inputs")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<ul class="input-types">
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
`)]},proxy:!0}])},[e("ul",{staticClass:"input-types"},[e("li",[e("div",{staticClass:"code mb1"},[t._v('type="date"')]),e("w-input",{attrs:{type:"date"}},[t._v("date")])],1),e("li",{staticClass:"mt4"},[e("div",{staticClass:"code mb1"},[t._v('type="email"')]),e("w-input",{attrs:{type:"email"}},[t._v("Email address")])],1),e("li",{staticClass:"mt4"},[e("div",{staticClass:"code mb1"},[t._v('type="number"')]),e("w-input",{attrs:{type:"number",min:"0",max:"100"}},[t._v("Age")])],1),e("li",{staticClass:"mt4"},[e("div",{staticClass:"code mb1"},[t._v('type="password"')]),e("w-input",{attrs:{type:"password"}},[t._v("Password")])],1),e("li",{staticClass:"mt4"},[e("div",{staticClass:"code mb1"},[t._v('type="search"')]),e("w-input",{attrs:{type:"search"}},[t._v("Search")])],1),e("li",{staticClass:"mt4"},[e("div",{staticClass:"code mb1"},[t._v('type="tel"')]),e("w-input",{attrs:{type:"tel"}},[t._v("Tel")])],1),e("li",{staticClass:"mt4"},[e("div",{staticClass:"code mb1"},[t._v('type="text"')]),e("w-input",{attrs:{type:"text"}},[t._v("Text")])],1),e("li",{staticClass:"mt4"},[e("div",{staticClass:"code mb1"},[t._v('type="time"')]),e("w-input",{attrs:{type:"time"}},[t._v("time")])],1),e("li",{staticClass:"mt4"},[e("div",{staticClass:"code mb1"},[t._v('type="url"')]),e("w-input",{attrs:{type:"url"}},[t._v("Url")])],1),e("li",{staticClass:"mt4"},[e("span",{staticClass:"code mb1 mr2"},[t._v('type="hidden"')]),t._v("The hidden type is also accepted - but you don't need a "),e("span",{staticClass:"code"},[t._v("w-input")]),t._v(" for that!"),e("w-input",{attrs:{type:"hidden"}})],1)])]),e("h3",[t._v("Other types of inputs")]),e("p",[t._v("For all the other types of input listed bellow, a specific Wave UI component should be used instead:")]),e("ul",{staticClass:"other-input-types"},[t._m(9),t._m(10),e("li",{staticClass:"mt1"},[e("span",{staticClass:"code mr2"},[t._v('type="color"')]),t._m(11),e("w-tag",{staticClass:"px1 ml1",attrs:{color:"red",outline:""}},[t._v("coming soon")])],1),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),e("li",{staticClass:"mt1"},[e("span",{staticClass:"code mr2"},[t._v('type="time"')]),t._m(17),e("w-tag",{staticClass:"px1 ml1",attrs:{color:"red",outline:""}},[t._v("coming soon")])],1)])],1)},_=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("By default the "),e("span",{staticClass:"code"},[t._v("w-input")]),t._v(` component has a label inside the input field, that moves up
above the field on focus or when the field has some content or a placeholder.`),e("br")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v(`By default the label is positioned inside and on field focus, it will move up above the field
and shrink.`),e("br"),t._v(`
It is possible to keep it inside and disable the animation with the `),e("code",[t._v("static-label")]),t._v(" option.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"mt4"},[e("strong",[t._v("Note:")]),t._v(` If this option is set to true and the label is positioned inside when a placeholder is set,
only the placeholder will be displayed.
`)])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"mb4"},[t._v("Like in most components, you can set a "),e("code",[t._v("color")]),t._v(" for the text and a "),e("code",[t._v("bg-color")]),t._v(` for the
background.`),e("br"),t._v(`
By default, the text has the "`),e("span",{staticClass:"code"},[t._v("primary")]),t._v('" color.')])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v('The default label position is "'),e("span",{staticClass:"code"},[t._v("inside")]),t._v('", but it can also be "'),e("span",{staticClass:"code"},[t._v("left")]),t._v('" or "'),e("span",{staticClass:"code"},[t._v("right")]),t._v('".')])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("It is convenient to have the label inside the "),e("span",{staticClass:"code"},[t._v("w-input")]),t._v(` component to let it handle
the field focus event on label click.`),e("br"),t._v(`
The `),e("span",{staticClass:"code"},[t._v("label")]),t._v(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("By default, the file input will show a preview of the image you are uploading."),e("br"),t._v(`
If the file can't be previewed a file icon will show up to the right of the field instead of a preview.`)])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v('The default type is "'),e("span",{staticClass:"code"},[t._v("text")]),t._v('" but the types bellow are also supported.')])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("On desktop you will not notice the difference between the fields "),e("span",{staticClass:"code"},[t._v("email")]),t._v(", "),e("span",{staticClass:"code"},[t._v("tel")]),t._v(`,
`),e("span",{staticClass:"code"},[t._v("url")]),t._v(`, and the default text type. But on touch devices, the keyboard is adapted to the
type of input.`)])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"mt1"},[e("span",{staticClass:"code mr2"},[t._v('type="button"')]),e("span",{staticClass:"grey"},[t._v("use "),e("code",[t._v("w-button")]),t._v(" instead")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"mt1"},[e("span",{staticClass:"code mr2"},[t._v('type="checkbox"')]),e("span",{staticClass:"grey"},[t._v("use "),e("code",[t._v("w-checkbox")]),t._v(" instead")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"grey"},[t._v("use "),e("code",[t._v("w-color-picker")]),t._v(" instead")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"mt1"},[e("span",{staticClass:"code mr2"},[t._v('type="image"')]),e("span",{staticClass:"grey"},[t._v("use the "),e("code",[t._v("img")]),t._v(" HTML tag instead")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"mt1"},[e("span",{staticClass:"code mr2"},[t._v('type="radio"')]),e("span",{staticClass:"grey"},[t._v("use "),e("code",[t._v("w-radio")]),t._v(" instead")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"mt1"},[e("span",{staticClass:"code mr2"},[t._v('type="range"')]),e("span",{staticClass:"grey"},[t._v("use "),e("code",[t._v("w-slider")]),t._v(" instead")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"mt1"},[e("span",{staticClass:"code mr2"},[t._v('type="reset"')]),e("span",{staticClass:"grey"},[t._v("use "),e("code",[t._v("w-button")]),t._v(" instead")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"mt1"},[e("span",{staticClass:"code mr2"},[t._v('type="submit"')]),e("span",{staticClass:"grey"},[t._v("use "),e("code",[t._v("w-button")]),t._v(" instead")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"grey"},[t._v("use "),e("code",[t._v("w-time-picker")]),t._v(" instead")])}];const w={data:()=>({isPassword:!0})},r={};var f=s(w,b,_,!1,y,null,null,null);function y(t){for(let n in r)this[n]=r[n]}var g=function(){return f.exports}(),C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)},x=[];const k={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The text content of the input field.<br>Gets updated on text input.',type:"Applies a native HTML <code>type</code> attribute.",label:"Sets a visible label for the input field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",color:`Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,minlength:"Applies the native HTML <code>minlength</code> attribute.",maxlength:"Applies the native HTML <code>maxlength</code> attribute (prevents typing more than this amount of characters).",step:'Applies the native HTML <code>step</code> attribute used for the <code>type="number"</code> inputs (sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>).',min:'Applies the native HTML <code>min</code> attribute used for the <code>type="number"</code> inputs (sets an integer or floating minimum number).',max:'Applies the native HTML <code>max</code> attribute used for the <code>type="number"</code> inputs (sets an integer or floating maximum number).',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the input field, giving it a round look.",shadow:"Applies a drop shadow to the input field.",tile:"Removes the default border-radius and sets sharp edges on the input field.",name:"Provide a native HTML <code>name</code> attribute to the input field. If not provided, a unique name will be computed.",disabled:"Disables the input field making it unreactive to user interactions.",readonly:"The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the input field.",validators:'<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.'},S={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},P={input:{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textual input value."}},"update:modelValue":{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textual input value."}},focus:{description:"Emitted on input focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on input blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},T={data:()=>({propsDescs:k,slots:S}),computed:{props(){return i(i({},o.props),h.props)},events(){return o.emits.reduce((t,n)=>(t[n]=P[n]||{})&&t,{})}}},c={};var $=s(T,C,x,!1,E,null,null,null);function E(t){for(let n in c)this[n]=c[n]}var L=function(){return $.exports}(),O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("ui-component-title",[t._v("w-input")]),e("examples"),e("api")],1)},R=[];const M={components:{Examples:g,Api:L}},p={};var A=s(M,O,R,!1,I,null,null,null);function I(t){for(let n in p)this[n]=p[n]}var H=function(){return A.exports}();export{H as default};
