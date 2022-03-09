var L=Object.defineProperty;var k=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var S=(o,s,c)=>s in o?L(o,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[s]=c,_=(o,s)=>{for(var c in s||(s={}))F.call(s,c)&&S(o,c,s[c]);if(k)for(var c of k(s))O.call(s,c)&&S(o,c,s[c]);return o};import{r as p,o as f,f as g,a as n,w as t,b as l,h as r,e,M as T}from"./vendor.c30f2c6c.js";import{_ as y,r as I,F as R}from"./index.76d51146.js";const j=e("Default"),A=l("p",null,[e("By default the "),l("span",{class:"code"},"w-input"),e(` component has a label inside the input field, that moves up
above the field on focus or when the field has some content or a placeholder.`),l("br")],-1),M=e("Label"),V=e("w-input Label"),D=e(`<w-input>Label</w-input>
`),U=e("Label and / or placeholder"),$=e(`w-input.mb4(label="Label")
w-input.mb4(placeholder="Placeholder")
w-input.mb4(label="Label" placeholder="Placeholder")`),q=e(`<w-input
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
`),E=e("Static label"),H=l("p",null,[e(`By default the label is positioned inside and on field focus, it will move up above the field
and shrink.`),l("br"),e(`
It is possible to keep it inside and disable the animation with the `),l("code",null,"static-label"),e(" option.")],-1),B=l("p",{class:"mt4"},[l("strong",null,"Note:"),e(` If this option is set to true and the label is positioned inside when a placeholder is set,
only the placeholder will be displayed.
`)],-1),C=e('w-input(label="Label" static-label)'),W=e(`<w-input
  label="Label"
  static-label>
</w-input>
`),N=e("Outline"),z=e(`w-input.mb6(label="Outline" outline)
w-input.mb3(placeholder="Outline" outline)
w-input.mb3(label="Outline" color="info" outline)
w-input.mb3(label="Outline" bg-color="blue-light5" outline)`),Y=e(`<w-input
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
`),G=e("Shadow"),J=e(`w-input.mb4(label="Shadow" shadow)
w-input(label="Outline with shadow" shadow outline)`),K=e(`<w-input
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
`),Q=e("Round & Tile"),X={class:"grow mb4",style:{"min-width":"200px"}},Z=l("div",{class:"title4 mb2"},"Underline style (default)",-1),ee={class:"grow mb4",style:{"min-width":"200px"}},ne=l("div",{class:"title4 mb2"},"Outline style",-1),te=e(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(label="Round" round)
    w-input.mb1(label="Round and shadow" round shadow)
    w-input.mb1(label="Tile" tile)

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(label="Round" round outline)
    w-input.mb1(label="Round and shadow" round outline shadow)
    w-input.mb1(label="Tile" tile outline)`),le=e(`<w-flex wrap :gap="2">
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
`),ie=e("Colors"),oe=l("p",{class:"mb4"},[e("Like in most components, you can set a "),l("code",null,"color"),e(" for the text and a "),l("code",null,"bg-color"),e(` for the
background.`),l("br"),e(`
By default, the text has the "`),l("span",{class:"code"},"primary"),e('" color.')],-1),se={class:"grow mb4",style:{"min-width":"200px"}},ae=l("div",{class:"title4 mb2"},"Underline style (default)",-1),de={class:"grow mb4",style:{"min-width":"200px"}},ce=l("div",{class:"title4 mb2"},"Outline style",-1),pe=e(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(model-value="Some content")
    w-input.mb1(color="red" model-value="Some content")
    w-input.mb1(bg-color="red-light5" model-value="Some content")
    w-input.mb1(color="red-dark1" bg-color="red-light5" model-value="Some content")
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" model-value="Some content")

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(model-value="Some content" outline)
    w-input.mb1(color="red" model-value="Some content" outline)
    w-input.mb1(bg-color="red-light5" model-value="Some content" outline)
    w-input.mb1(color="red-dark1" bg-color="red-light5" model-value="Some content" outline)
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" model-value="Some content" outline)`),re=e(`<w-flex wrap :gap="2">
  <div class="grow mb4" style="min-width: 200px">
    <div class="title4 mb2">
      Underline style (default)
    </div>

    <w-input
      class="mb1"
      model-value="Some content">
    </w-input>

    <w-input
      class="mb1"
      color="red"
      model-value="Some
      content">
    </w-input>

    <w-input
      class="mb1"
      bg-color="red-light5"
      model-value="Some
      content">
    </w-input>

    <w-input
      class="mb1"
      color="red-dark1"
      bg-color="red-light5"
      model-value="Some content">
    </w-input>

    <w-input
      class="mb1"
      color="orange-dark1"
      bg-color="orange-light5"
      model-value="Some content">
    </w-input>
  </div>

  <div class="grow mb4" style="min-width: 200px">
    <div class="title4 mb2">
      Outline style
    </div>

    <w-input
      class="mb1"
      model-value="Some content"
      outline>
    </w-input>

    <w-input
      class="mb1"
      color="red"
      model-value="Some content"
      outline>
    </w-input>

    <w-input
      class="mb1"
      bg-color="red-light5"
      model-value="Some content"
      outline>
    </w-input>

    <w-input
      class="mb1"
      color="red-dark1"
      bg-color="red-light5"
      model-value="Some content"
      outline>
    </w-input>

    <w-input
      class="mb1"
      color="orange-dark1"
      bg-color="orange-light5"
      model-value="Some content"
      outline>
    </w-input>
  </div>
</w-flex>
`),ue=e("Label position"),me=l("p",null,[e('The default label position is "'),l("span",{class:"code"},"inside"),e('", but it can also be "'),l("span",{class:"code"},"left"),e('" or "'),l("span",{class:"code"},"right"),e('".')],-1),he=e("You could also set a label outside of the "),be=l("span",{class:"code"},"w-input",-1),we=e(` and display it nicely with flex.
But it is convenient to let the `),_e=l("span",{class:"code"},"w-input",-1),fe=e(` component handle the field focus event on
label click.`),ge=l("br",null,null,-1),ye=e(`
The `),ve=l("span",{class:"code"},"label",-1),xe=e(` prop is here for this purpose and accepts any HTML.
`),Pe=e(`w-input.mb3(label="Inside" label-position="inside" outline)
w-input.mb3(label="Left" label-position="left" outline)
w-input.mb3(label="Right" label-position="right" outline)`),ke=e(`<w-input
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
`),Se=e("Custom label via default slot"),Te=l("p",null,[e("It is convenient to have the label inside the "),l("span",{class:"code"},"w-input"),e(` component to let it handle
the field focus event on label click.`),l("br"),e(`
The `),l("span",{class:"code"},"label"),e(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),Ie=e("mdi mdi-arrow-right"),Le=l("span",{class:"purple mx1"},"Inside",-1),Fe=e("mdi mdi-arrow-left"),Oe=l("span",{class:"green mr1"},"Left",-1),Re=e("mdi mdi-arrow-right"),je=e("mdi mdi-arrow-left"),Ae=l("span",{class:"red ml1"},"Right",-1),Me=e(`w-input.mb3(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-input.mb3(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-input.mb3(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`),Ve=e(`<w-input
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
`),De=e("Inner icons"),Ue=l("div",{class:"title4 mb2"},"Label outside",-1),$e=l("div",{class:"title4 mt6 mb2"},"Label inside",-1),qe=e(`.title4.mb2 Label outside
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
w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")`),Ee=e(`<div class="title4 mb2">
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
</w-input>`),He=e(`data: () => ({
  isPassword: true
})
`),Be=e("Disabled & readonly"),Ce=e(`w-input.mb3(label="Disabled & empty" outline disabled)
w-input.mb3(label="Disabled & filled" model-value="Some content" outline disabled)
w-input.mb3(label="Readonly & empty" outline readonly)
w-input.mb3(label="Readonly & filled" model-value="Some content" outline readonly)`),We=e(`<w-input
  class="mb3"
  label="Disabled & empty"
  outline
  disabled>
</w-input>

<w-input
  class="mb3"
  label="Disabled & filled"
  model-value="Some content"
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
  model-value="Some content"
  outline
  readonly>
</w-input>
`),Ne=e("File input"),ze=e("A "),Ye=l("strong",{class:"code mx1"},"w-input",-1),Ge=e(" field only needs a "),Je=l("code",null,'type="file"',-1),Ke=e(" to become a file input."),Qe=l("p",null,[e("By default, the file input will show a preview of the image you are uploading."),l("br"),e(`
If the file can't be previewed a file icon will show up to the right of the field instead of
a preview.`)],-1),Xe=l("p",null,`When uploading a larger file, a spinner will show up to the right of the field until
the file is completely transferred.`,-1),Ze=e("File"),en=e('w-input(type="file") File'),nn=e(`<w-input type="file">File</w-input>
`),tn=e("Disabled preview"),ln=l("p",null,[e("The file preview can be disabled if not needed by setting the "),l("code",null,"preview"),e(` prop to
`),l("code",null,"false"),e(".")],-1),on=e("File"),sn=e('w-input(type="file" :preview="false") File'),an=e(`<w-input type="file" :preview="false">File</w-input>
`),dn=e("Custom preview icon"),cn=l("p",null,[e("By default, when the file is not an image, the preview will be a generic file icon."),l("br"),e(`
It is possible to set a custom icon instead.`)],-1),pn=e("File"),rn=e('w-input(type="file" preview="mdi mdi-star") File'),un=e(`<w-input type="file" preview="mdi mdi-star">File</w-input>
`),mn=l("p",null,"You could even compute a variable to show a different icon per detected file type.",-1),hn=e("File"),bn=e(`w-input(
  type="file"
  v-model="files"
  :preview="!!files.length && filePreviewIcon") File`),wn=e(`<w-input
  type="file"
  v-model="files"
  :preview="!!files.length && filePreviewIcon">
  File
</w-input>`),_n=e(`data: () => ({
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
`),fn=e("Reading the files"),gn=l("p",null,`On the frontend, you can read all the file details and contents on input when the user selects
a file, or you can provide a files array that you keep in sync with Wave UI.`,-1),yn=e("Via @input"),vn=e("File"),xn={class:"mt3"},Pn=e(`w-input(type="file" @input="onFileInput") File

pre.mt3 `+r("{{ files }}")),kn=e(`<w-input type="file" @input="onFileInput>File</w-input>

<pre class="mt3">`+r("{{ files }}")+"</pre>"),Sn=e(`data: () => ({
  files: []
}),

methods: {
  onFileInput (files) {
    this.files = files
  }
}
`),Tn=e("Via v-model"),In=l("p",null,[e("The v-model can be used to access the files added by the user."),l("br")],-1),Ln=l("strong",null,"Important",-1),Fn=l("br",null,null,-1),On=e(`Even if a v-model is allowing a two-way binding,
there is no way to prefill an input type file:
that would be a security breach and is therefore not allowed in HTML.`),Rn=e("File"),jn={class:"mt3"},An=e(`w-input(type="file" v-model="files") File

pre.mt3 `+r("{{ files }}")),Mn=e(`<w-input type="file" v-model="files">File</w-input>

<pre class="mt3">`+r("{{ files }}")+"</pre>"),Vn=e(`data: () => ({
  files: []
})
`),Dn=e("Loading state"),Un=l("p",null,[e(`If you try to upload a very large file, you will see the progress value of the file transfer will
be updated as the transfer goes on (e.g. :loading="overallProgress").`),l("br"),e(`
You can also show a self-updated progress bar with the `),l("code",null,"show-progress"),e(" prop.")],-1),$n=e("File"),qn={class:"my4"},En=e("Files:"),Hn={class:"ml2"},Bn=e(`w-input(type="file"
  v-model="files"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green") File

.my4 Overall progress: `+r("{{ overallProgress }}")+`

w-flex
  | Files:
  pre.ml2 `+r("{{ files }}")),Cn=e(`<w-input type="file"
  v-model="files4"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green">
  File
</w-input>

<div class="my4">
  Overall progress: `+r("{{ overallProgress }}")+`
</div>

<w-flex>
  Files:
  <pre class="ml2">`+r("{{ files }}")+`</pre>
</w-flex>`),Wn=e(`data: () => ({
  files: [],
  overallProgress: 0
})
`),Nn=e("Accepting specific file extensions"),zn=e('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg")'),Yn=e(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg">
</w-input>
`),Gn=e("Multiple files upload"),Jn=e('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg" multiple)'),Kn=e(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg"
  multiple>
</w-input>
`),Qn=e("Types"),Xn=l("p",null,[e('The default type is "'),l("span",{class:"code"},"text"),e('" but the types bellow are also supported.')],-1),Zn=l("p",null,[e("On desktop you will not notice the difference between the fields "),l("span",{class:"code"},"email"),e(", "),l("span",{class:"code"},"tel"),e(`,
`),l("span",{class:"code"},"url"),e(`, and the default text type. But on touch devices, the keyboard is adapted to the
type of input.`)],-1),et=l("h3",null,"Textual inputs",-1),nt={class:"input-types"},tt=l("div",{class:"code mb1"},'type="date"',-1),lt=e("date"),it={class:"mt4"},ot=l("div",{class:"code mb1"},'type="email"',-1),st=e("Email address"),at={class:"mt4"},dt=l("div",{class:"code mb1"},'type="number"',-1),ct=e("Age"),pt={class:"mt4"},rt=l("div",{class:"code mb1"},'type="password"',-1),ut=e("Password"),mt={class:"mt4"},ht=l("div",{class:"code mb1"},'type="search"',-1),bt=e("Search"),wt={class:"mt4"},_t=l("div",{class:"code mb1"},'type="tel"',-1),ft=e("Tel"),gt={class:"mt4"},yt=l("div",{class:"code mb1"},'type="text"',-1),vt=e("Text"),xt={class:"mt4"},Pt=l("div",{class:"code mb1"},'type="time"',-1),kt=e("time"),St={class:"mt4"},Tt=l("div",{class:"code mb1"},'type="url"',-1),It=e("Url"),Lt={class:"mt4"},Ft=l("span",{class:"code mb1 mr2"},'type="hidden"',-1),Ot=e("The hidden type is also accepted - but you don't need a "),Rt=l("span",{class:"code"},"w-input",-1),jt=e(" for that!"),At=e(`<ul.input-types>
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
    <w-input(type="hidden")<`),Mt=e(`<ul class="input-types">
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
`),Vt=l("h3",null,"Other types of inputs",-1),Dt=l("p",null,"For all the other types of input listed bellow, a specific Wave UI component should be used instead:",-1),Ut={class:"other-input-types"},$t=T('<li class="mt1"><span class="code mr2">type=&quot;button&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;checkbox&quot;</span><span class="grey">use <code>w-checkbox</code> instead</span></li>',2),qt={class:"mt1"},Et=l("span",{class:"code mr2"},'type="color"',-1),Ht=l("span",{class:"grey"},[e("use "),l("code",null,"w-color-picker"),e(" instead")],-1),Bt=e("coming soon"),Ct=T('<li class="mt1"><span class="code mr2">type=&quot;image&quot;</span><span class="grey">use the <code>img</code> HTML tag instead</span></li><li class="mt1"><span class="code mr2">type=&quot;radio&quot;</span><span class="grey">use <code>w-radio</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;range&quot;</span><span class="grey">use <code>w-slider</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;reset&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;submit&quot;</span><span class="grey">use <code>w-button</code> instead</span></li>',5),Wt={class:"mt1"},Nt=l("span",{class:"code mr2"},'type="time"',-1),zt=l("span",{class:"grey"},[e("use "),l("code",null,"w-time-picker"),e(" instead")],-1),Yt=e("coming soon");function Gt(o,s,c,v,x,m){const a=p("title-link"),i=p("w-input"),d=p("example"),b=p("w-flex"),w=p("alert"),h=p("w-icon"),P=p("w-tag");return f(),g("div",null,[n(a,{h2:""},{default:t(()=>[j]),_:1}),A,n(d,null,{pug:t(()=>[V]),html:t(()=>[D]),default:t(()=>[n(i,null,{default:t(()=>[M]),_:1})]),_:1}),n(a,{h2:""},{default:t(()=>[U]),_:1}),n(d,null,{pug:t(()=>[$]),html:t(()=>[q]),default:t(()=>[n(i,{class:"mb4",label:"Label"}),n(i,{class:"mb4",placeholder:"Placeholder"}),n(i,{class:"mb4",label:"Label",placeholder:"Placeholder"})]),_:1}),n(a,{h2:""},{default:t(()=>[E]),_:1}),H,B,n(d,null,{pug:t(()=>[C]),html:t(()=>[W]),default:t(()=>[n(i,{label:"Label","static-label":""})]),_:1}),n(a,{h2:""},{default:t(()=>[N]),_:1}),n(d,null,{pug:t(()=>[z]),html:t(()=>[Y]),default:t(()=>[n(i,{class:"mb6",label:"Outline",outline:""}),n(i,{class:"mb3",placeholder:"Outline",outline:""}),n(i,{class:"mb3",label:"Outline",color:"info",outline:""}),n(i,{class:"mb3",label:"Outline","bg-color":"blue-light5",outline:""})]),_:1}),n(a,{h2:""},{default:t(()=>[G]),_:1}),n(d,null,{pug:t(()=>[J]),html:t(()=>[K]),default:t(()=>[n(i,{class:"mb4",label:"Shadow",shadow:""}),n(i,{label:"Outline with shadow",shadow:"",outline:""})]),_:1}),n(a,{h2:""},{default:t(()=>[Q]),_:1}),n(d,null,{pug:t(()=>[te]),html:t(()=>[le]),default:t(()=>[n(b,{wrap:"",gap:2},{default:t(()=>[l("div",X,[Z,n(i,{class:"mb1",label:"Round",round:""}),n(i,{class:"mb1",label:"Round and shadow",round:"",shadow:""}),n(i,{label:"Tile",tile:""})]),l("div",ee,[ne,n(i,{class:"mb1",label:"Round",round:"",outline:""}),n(i,{class:"mb1",label:"Round and shadow",round:"",outline:"",shadow:""}),n(i,{class:"mb1",label:"Tile",tile:"",outline:""})])]),_:1})]),_:1}),n(a,{h2:""},{default:t(()=>[ie]),_:1}),oe,n(d,null,{pug:t(()=>[pe]),html:t(()=>[re]),default:t(()=>[n(b,{wrap:"",gap:2},{default:t(()=>[l("div",se,[ae,n(i,{class:"mb1","model-value":"Some content"}),n(i,{class:"mb1",color:"red","model-value":"Some content"}),n(i,{class:"mb1","bg-color":"red-light5","model-value":"Some content"}),n(i,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content"}),n(i,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content"})]),l("div",de,[ce,n(i,{class:"mb1","model-value":"Some content",outline:""}),n(i,{class:"mb1",color:"red","model-value":"Some content",outline:""}),n(i,{class:"mb1","bg-color":"red-light5","model-value":"Some content",outline:""}),n(i,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content",outline:""}),n(i,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content",outline:""})])]),_:1})]),_:1}),n(a,{h2:""},{default:t(()=>[ue]),_:1}),me,n(w,{tip:""},{default:t(()=>[he,be,we,_e,fe,ge,ye,ve,xe]),_:1}),n(d,null,{pug:t(()=>[Pe]),html:t(()=>[ke]),default:t(()=>[n(i,{class:"mb3",label:"Inside","label-position":"inside",outline:""}),n(i,{class:"mb3",label:"Left","label-position":"left",outline:""}),n(i,{class:"mb3",label:"Right","label-position":"right",outline:""})]),_:1}),n(a,{h2:""},{default:t(()=>[Se]),_:1}),Te,n(d,null,{pug:t(()=>[Me]),html:t(()=>[Ve]),default:t(()=>[n(i,{class:"mb3","label-position":"inside",outline:""},{default:t(()=>[n(h,{class:"orange"},{default:t(()=>[Ie]),_:1}),Le,n(h,{class:"orange"},{default:t(()=>[Fe]),_:1})]),_:1}),n(i,{class:"mb3","label-position":"left",outline:""},{default:t(()=>[Oe,n(h,{class:"orange"},{default:t(()=>[Re]),_:1})]),_:1}),n(i,{class:"mb3","label-position":"right",outline:""},{default:t(()=>[n(h,{class:"orange"},{default:t(()=>[je]),_:1}),Ae]),_:1})]),_:1}),n(a,{h2:""},{default:t(()=>[De]),_:1}),n(d,null,{pug:t(()=>[qe]),html:t(()=>[Ee]),js:t(()=>[He]),default:t(()=>[Ue,n(i,{class:"mb2",label:"Username","label-position":"left",outline:"","inner-icon-left":"mdi mdi-account"}),n(i,{class:"mb2",label:"Password",type:o.isPassword?"password":"text","inner-icon-left":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","inner-icon-right":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":s[0]||(s[0]=u=>o.isPassword=!o.isPassword)},null,8,["type","inner-icon-left","inner-icon-right"]),n(i,{class:"mb2",label:"Password",type:o.isPassword?"password":"text","label-position":"left",outline:"","inner-icon-right":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":s[1]||(s[1]=u=>o.isPassword=!o.isPassword)},null,8,["type","inner-icon-right"]),n(i,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-left":"wi-check"}),n(i,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-right":"wi-check"}),$e,n(i,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-left":"wi-search"}),n(i,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-right":"wi-search"})]),_:1}),n(a,{h2:""},{default:t(()=>[Be]),_:1}),n(d,null,{pug:t(()=>[Ce]),html:t(()=>[We]),default:t(()=>[n(i,{class:"mb3",label:"Disabled & empty",outline:"",disabled:""}),n(i,{class:"mb3",label:"Disabled & filled","model-value":"Some content",outline:"",disabled:""}),n(i,{class:"mb3",label:"Readonly & empty",outline:"",readonly:""}),n(i,{class:"mb3",label:"Readonly & filled","model-value":"Some content",outline:"",readonly:""})]),_:1}),n(a,{h2:"",slug:"file-input"},{default:t(()=>[Ne]),_:1}),n(w,{success:""},{default:t(()=>[ze,Ye,Ge,Je,Ke]),_:1}),Qe,Xe,n(d,null,{pug:t(()=>[en]),html:t(()=>[nn]),default:t(()=>[n(i,{type:"file"},{default:t(()=>[Ze]),_:1})]),_:1}),n(a,{h3:""},{default:t(()=>[tn]),_:1}),ln,n(d,null,{pug:t(()=>[sn]),html:t(()=>[an]),default:t(()=>[n(i,{type:"file",preview:!1},{default:t(()=>[on]),_:1})]),_:1}),n(a,{h3:""},{default:t(()=>[dn]),_:1}),cn,n(d,null,{pug:t(()=>[rn]),html:t(()=>[un]),default:t(()=>[n(i,{type:"file",preview:"mdi mdi-star"},{default:t(()=>[pn]),_:1})]),_:1}),mn,n(d,null,{pug:t(()=>[bn]),html:t(()=>[wn]),js:t(()=>[_n]),default:t(()=>[n(i,{type:"file",modelValue:o.files3,"onUpdate:modelValue":s[2]||(s[2]=u=>o.files3=u),preview:!!o.files3.length&&m.filePreviewIcon},{default:t(()=>[hn]),_:1},8,["modelValue","preview"])]),_:1}),n(a,{h3:""},{default:t(()=>[fn]),_:1}),gn,n(a,{class:"mt6",h4:""},{default:t(()=>[yn]),_:1}),n(d,null,{pug:t(()=>[Pn]),html:t(()=>[kn]),js:t(()=>[Sn]),default:t(()=>[n(i,{type:"file",onInput:m.onFileInput},{default:t(()=>[vn]),_:1},8,["onInput"]),l("pre",xn,r(o.files1),1)]),_:1}),n(a,{class:"mt6 mb2",h4:""},{default:t(()=>[Tn]),_:1}),In,n(w,{warning:""},{default:t(()=>[Ln,Fn,On]),_:1}),n(d,null,{pug:t(()=>[An]),html:t(()=>[Mn]),js:t(()=>[Vn]),default:t(()=>[n(i,{type:"file",modelValue:o.files2,"onUpdate:modelValue":s[3]||(s[3]=u=>o.files2=u)},{default:t(()=>[Rn]),_:1},8,["modelValue"]),l("pre",jn,r(o.files2),1)]),_:1}),n(a,{h3:""},{default:t(()=>[Dn]),_:1}),Un,n(d,null,{pug:t(()=>[Bn]),html:t(()=>[Cn]),js:t(()=>[Wn]),default:t(()=>[n(i,{type:"file",modelValue:o.files4,"onUpdate:modelValue":s[4]||(s[4]=u=>o.files4=u),"overall-progress":o.overallProgress,"onUpdate:overall-progress":s[5]||(s[5]=u=>o.overallProgress=u),"show-progress":"","progress-color":"green"},{default:t(()=>[$n]),_:1},8,["modelValue","overall-progress"]),l("div",qn,"Overall progress: "+r(o.overallProgress),1),n(b,null,{default:t(()=>[En,l("pre",Hn,r(o.files4),1)]),_:1})]),_:1}),n(a,{h3:""},{default:t(()=>[Nn]),_:1}),n(d,null,{pug:t(()=>[zn]),html:t(()=>[Yn]),default:t(()=>[n(i,{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg"})]),_:1}),n(a,{h3:""},{default:t(()=>[Gn]),_:1}),n(d,null,{pug:t(()=>[Jn]),html:t(()=>[Kn]),default:t(()=>[n(i,{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg",multiple:""})]),_:1}),n(a,{h2:""},{default:t(()=>[Qn]),_:1}),Xn,Zn,et,n(d,null,{pug:t(()=>[At]),html:t(()=>[Mt]),default:t(()=>[l("ul",nt,[l("li",null,[tt,n(i,{type:"date"},{default:t(()=>[lt]),_:1})]),l("li",it,[ot,n(i,{type:"email"},{default:t(()=>[st]),_:1})]),l("li",at,[dt,n(i,{type:"number",min:"0",max:"100"},{default:t(()=>[ct]),_:1})]),l("li",pt,[rt,n(i,{type:"password"},{default:t(()=>[ut]),_:1})]),l("li",mt,[ht,n(i,{type:"search"},{default:t(()=>[bt]),_:1})]),l("li",wt,[_t,n(i,{type:"tel"},{default:t(()=>[ft]),_:1})]),l("li",gt,[yt,n(i,{type:"text"},{default:t(()=>[vt]),_:1})]),l("li",xt,[Pt,n(i,{type:"time"},{default:t(()=>[kt]),_:1})]),l("li",St,[Tt,n(i,{type:"url"},{default:t(()=>[It]),_:1})]),l("li",Lt,[Ft,Ot,Rt,jt,n(i,{type:"hidden"})])])]),_:1}),Vt,Dt,l("ul",Ut,[$t,l("li",qt,[Et,Ht,n(P,{class:"px1 ml1",color:"red",outline:""},{default:t(()=>[Bt]),_:1})]),Ct,l("li",Wt,[Nt,zt,n(P,{class:"px1 ml1",color:"red",outline:""},{default:t(()=>[Yt]),_:1})])])])}const Jt={data:()=>({isPassword:!0,files1:[],files2:[],files3:[],files4:[],overallProgress:void 0}),computed:{filePreviewIcon(){const{extension:o}=this.files3[0];switch(o){case"jpg":case"png":case"gif":case"pdf":return`mdi mdi-file-${o}-box`;case"jpeg":return"mdi mdi-file-jpg-box";case"svg":case"webp":return"mdi mdi-image";case"mov":return"mdi mdi-filmstrip";case"zip":return"mdi mdi-folder-zip";default:return"mdi mdi-file"}}},methods:{onFileInput(o){this.files1=o}}};var Kt=y(Jt,[["render",Gt]]);const Qt=l("div",{class:"w-divider my12"},null,-1),Xt=e("API");function Zt(o,s,c,v,x,m){const a=p("title-link"),i=p("component-api");return f(),g("div",null,[Qt,n(a,{class:"title1",h2:""},{default:t(()=>[Xt]),_:1}),n(i,{class:"mt0",items:m.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(i,{items:o.slots,title:"Slots"},null,8,["items"]),n(i,{items:m.events,title:"Events"},null,8,["items"])])}const el={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the input field.<br>Gets updated on text input.',type:"Applies a native HTML <code>type</code> attribute.",label:"Sets a visible label for the input field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",color:`Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,minlength:"Applies the native HTML <code>minlength</code> attribute.",maxlength:"Applies the native HTML <code>maxlength</code> attribute (prevents typing more than this amount of characters).",step:'Applies the native HTML <code>step</code> attribute used for the <code>type="number"</code> inputs (sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>).',min:'Applies the native HTML <code>min</code> attribute used for the <code>type="number"</code> inputs (sets an integer or floating minimum number).',max:'Applies the native HTML <code>max</code> attribute used for the <code>type="number"</code> inputs (sets an integer or floating maximum number).',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the input field, giving it a round look.",shadow:"Applies a drop shadow to the input field.",tile:"Removes the default border-radius and sets sharp edges on the input field.",name:"Provide a native HTML <code>name</code> attribute to the input field. If not provided, a unique name will be computed.",disabled:"Disables the input field making it unreactive to user interactions.",readonly:"The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the input field.",validators:'<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.'},nl={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},tl={input:{description:"Emitted each time the input text (or file) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textual input value."}},"update:modelValue":{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textual input value."}},"update:overallProgress":{description:"Emitted continuously while uploading a file. When using the <code>multiple</code> option, this is the overall progress of all the files together.<br>You can use it with <code>:overall-progress.sync</code> in Vue 2, or <code>v-model:overall-progress</code> in Vue 3."},focus:{description:"Emitted on input focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on input blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},ll={data:()=>({propsDescs:el,slots:nl}),computed:{props(){return _(_({},I.props),R.props)},events(){return I.emits.reduce((o,s)=>(o[s]=tl[s]||{})&&o,{})}}};var il=y(ll,[["render",Zt]]);const ol=e("w-input");function sl(o,s,c,v,x,m){const a=p("ui-component-title"),i=p("examples"),d=p("api");return f(),g("main",null,[n(a,null,{default:t(()=>[ol]),_:1}),n(i),n(d)])}const al={components:{Examples:Kt,Api:il}};var rl=y(al,[["render",sl]]);export{rl as default};
