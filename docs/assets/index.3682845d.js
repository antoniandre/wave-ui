var $=Object.defineProperty;var F=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var I=(o,s,c)=>s in o?$(o,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[s]=c,_=(o,s)=>{for(var c in s||(s={}))A.call(s,c)&&I(o,c,s[c]);if(F)for(var c of F(s))j.call(s,c)&&I(o,c,s[c]);return o};import{a as T}from"./index.a0a717ed.js";import{r,o as g,f as y,a as t,w as n,b as i,h as p,e,i as v,_ as x,bK as L,bz as D}from"./index.60a2b3d1.js";const U=e("Default"),M=i("p",null,[e("By default the "),i("span",{class:"code"},"w-input"),e(` component has a label inside the input field, that moves up
above the field on focus or when the field has some content or a placeholder.`),i("br")],-1),V=e("Label"),q=e("w-input Label"),E=e(`<w-input>Label</w-input>
`),H=e("Label and / or placeholder"),B=e(`w-input.mb4(label="Label")
w-input.mb4(placeholder="Placeholder")
w-input.mb4(label="Label" placeholder="Placeholder")`),C=e(`<w-input
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
`),N=e("Static label"),W=i("p",null,[e(`By default the label is positioned inside and on field focus, it will move up above the field
and shrink.`),i("br"),e(`
It is possible to keep it inside and disable the animation with the `),i("code",null,"static-label"),e(" option.")],-1),Y=i("p",{class:"mt4"},[i("strong",null,"Note:"),e(` If this option is set to true and the label is positioned inside when a placeholder is set,
only the placeholder will be displayed.
`)],-1),z=e('w-input(label="Label" static-label)'),J=e(`<w-input
  label="Label"
  static-label>
</w-input>
`),G=e("Outline"),K=e(`w-input.mb6(label="Outline" outline)
w-input.mb3(placeholder="Outline" outline)
w-input.mb3(label="Outline" color="info" outline)
w-input.mb3(label="Outline" bg-color="blue-light5" outline)`),X=e(`<w-input
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
`),Q=e("Shadow"),Z=e(`w-input.mb4(label="Shadow" shadow)
w-input(label="Outline with shadow" shadow outline)`),ee=e(`<w-input
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
`),ne=e("Round & Tile"),te={class:"grow mb4",style:{"min-width":"200px"}},ie=i("div",{class:"title4 mb2"},"Underline style (default)",-1),le={class:"grow mb4",style:{"min-width":"200px"}},oe=i("div",{class:"title4 mb2"},"Outline style",-1),se=e(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(label="Round" round)
    w-input.mb1(label="Round and shadow" round shadow)
    w-input.mb1(label="Tile" tile)

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(label="Round" round outline)
    w-input.mb1(label="Round and shadow" round outline shadow)
    w-input.mb1(label="Tile" tile outline)`),ae=e(`<w-flex wrap :gap="2">
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
`),de=e("Colors"),ce=i("p",{class:"mb4"},[e("Like in most components, you can set a "),i("code",null,"color"),e(" for the text and a "),i("code",null,"bg-color"),e(` for the
background.`),i("br"),e(`
By default, the text has the "`),i("span",{class:"code"},"primary"),e('" color.')],-1),re={class:"grow mb4",style:{"min-width":"200px"}},pe=i("div",{class:"title4 mb2"},"Underline style (default)",-1),ue={class:"grow mb4",style:{"min-width":"200px"}},me=i("div",{class:"title4 mb2"},"Outline style",-1),he=e(`w-flex(wrap :gap="2")
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
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" model-value="Some content" outline)`),be=e(`<w-flex wrap :gap="2">
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
`),fe=e("Label position"),we=i("p",null,[e('The default label position is "'),i("span",{class:"code"},"inside"),e('", but it can also be "'),i("span",{class:"code"},"left"),e('" or "'),i("span",{class:"code"},"right"),e('".')],-1),_e=e("You could also set a label outside of the "),ge=i("span",{class:"code"},"w-input",-1),ye=e(` and display it nicely with flex.
But it is convenient to let the `),ve=i("span",{class:"code"},"w-input",-1),xe=e(` component handle the field focus event on
label click.`),Pe=i("br",null,null,-1),ke=e(`
The `),Se=i("span",{class:"code"},"label",-1),Fe=e(` prop is here for this purpose and accepts any HTML.
`),Ie=e(`w-input.mb3(label="Inside" label-position="inside" outline)
w-input.mb3(label="Left" label-position="left" outline)
w-input.mb3(label="Right" label-position="right" outline)`),Te=e(`<w-input
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
`),Le=e("Custom label via default slot"),Re=i("p",null,[e("It is convenient to have the label inside the "),i("span",{class:"code"},"w-input"),e(` component to let it handle
the field focus event on label click.`),i("br"),e(`
The `),i("span",{class:"code"},"label"),e(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),Oe=e("mdi mdi-arrow-right"),$e=i("span",{class:"purple mx1"},"Inside",-1),Ae=e("mdi mdi-arrow-left"),je=i("span",{class:"green mr1"},"Left",-1),De=e("mdi mdi-arrow-right"),Ue=e("mdi mdi-arrow-left"),Me=i("span",{class:"red ml1"},"Right",-1),Ve=e(`w-input.mb3(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-input.mb3(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-input.mb3(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`),qe=e(`<w-input
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
`),Ee=e("Inner icons"),He=i("div",{class:"title4 mb2"},"Label outside",-1),Be=i("div",{class:"title4 mt6 mb2"},"Label inside",-1),Ce=e(`.title4.mb2 Label outside
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
w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")`),Ne=e(`<div class="title4 mb2">
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
</w-input>`),We=e(`data: () => ({
  isPassword: true
})
`),Ye=e("Disabled & readonly"),ze=e(`w-input.mb3(label="Disabled & empty" outline disabled)
w-input.mb3(label="Disabled & filled" model-value="Some content" outline disabled)
w-input.mb3(label="Readonly & empty" outline readonly)
w-input.mb3(label="Readonly & filled" model-value="Some content" outline readonly)`),Je=e(`<w-input
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
`),Ge=e("File input"),Ke=e("A "),Xe=i("strong",{class:"code mx1"},"w-input",-1),Qe=e(" field only needs a "),Ze=i("code",null,'type="file"',-1),en=e(" to become a file input."),nn=i("p",null,[e("By default, the file input will show a preview of the image you are uploading."),i("br"),e(`
If the file can't be previewed a file icon will show up to the right of the field instead of
a preview.`)],-1),tn=i("p",null,`When uploading a larger file, a spinner will show up to the right of the field until
the file is completely transferred.`,-1),ln=e("File"),on=e('w-input(type="file") File'),sn=e(`<w-input type="file">File</w-input>
`),an=e("Disabled preview"),dn=i("p",null,[e("The file preview can be disabled if not needed by setting the "),i("code",null,"preview"),e(` prop to
`),i("code",null,"false"),e(".")],-1),cn=e("File"),rn=e('w-input(type="file" :preview="false") File'),pn=e(`<w-input type="file" :preview="false">File</w-input>
`),un=e("Custom preview icon"),mn=i("p",null,[e("By default, when the file is not an image, the preview will be a generic file icon."),i("br"),e(`
It is possible to set a custom icon instead.`)],-1),hn=e("File"),bn=e('w-input(type="file" preview="mdi mdi-star") File'),fn=e(`<w-input type="file" preview="mdi mdi-star">File</w-input>
`),wn=i("p",null,"You could even compute a variable to show a different icon per detected file type.",-1),_n=e("File"),gn=e(`w-input(
  type="file"
  v-model="files"
  :preview="!!files.length && filePreviewIcon") File`),yn=e(`<w-input
  type="file"
  v-model="files"
  :preview="!!files.length && filePreviewIcon">
  File
</w-input>`),vn=e(`data: () => ({
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
`),xn=e("Reading the files"),Pn=i("p",null,`On the frontend, you can read all the file details and contents on input when the user selects
a file, or you can provide a files array that you keep in sync with Wave UI.`,-1),kn=e("Via @input"),Sn=e("File"),Fn={class:"mt3"},In=e(`w-input(type="file" @input="onFileInput") File

pre.mt3 `+p("{{ files }}")),Tn=e(`<w-input type="file" @input="onFileInput>File</w-input>

<pre class="mt3">`+p("{{ files }}")+"</pre>"),Ln=e(`data: () => ({
  files: []
}),

methods: {
  onFileInput (files) {
    this.files = files
  }
}
`),Rn=e("Via v-model"),On=i("p",null,[e("The v-model can be used to access the files added by the user."),i("br")],-1),$n=i("strong",null,"Important",-1),An=i("br",null,null,-1),jn=e(`Even if a v-model is allowing a two-way binding,
there is no way to prefill an input type file:
that would be a security breach and is therefore not allowed in HTML.`),Dn=e("File"),Un={class:"mt3"},Mn=e(`w-input(type="file" v-model="files") File

pre.mt3 `+p("{{ files }}")),Vn=e(`<w-input type="file" v-model="files">File</w-input>

<pre class="mt3">`+p("{{ files }}")+"</pre>"),qn=e(`data: () => ({
  files: []
})
`),En=e("Uploading the file to a backend server"),Hn=v(`<p>There are different ways you can do this. The 2 most common ways would be to:</p><ul><li>Use Axios or other AJAX library to send the file on <strong class="code">w-form</strong> <code>@success</code> (emitted upon successful validation).</li><li>Use the <code>allow-submit</code> option on the <strong class="code">w-form</strong> as well as
<code>enctype=&quot;multipart/form-data&quot;</code>, <code>method</code> and <code>action</code> fields
in order to submit the file in a full HTML built-in process (But this will reload
the page).
</li></ul><p class="mt3">The first option is recommended for a more modern approach. Here are two examples how to
set this up.</p>`,3),Bn=e("1st example"),Cn=i("p",null,[e("In this example, the file is uploaded to "),i("a",{href:"https://filebin.net",target:"_blank"},"Filebin"),e(`.
The file is transferred as `),i("code",null,"application/x-www-form-urlencoded"),e(` similar to
`),i("code",null,"application/octet-stream"),e(` with the file in the body of the request as per the
expectation of the Filebin API.`)],-1),Nn=e("File"),Wn=e("Send"),Yn=e(`w-form(@success="onFormSuccess")
  w-input(
    type="file"
    v-model="files"
    :validators="[() => files.length || 'Please add a file']") File
  w-button.d-flex.mla.mt4(type="submit" :loading="loading") Send`),zn=e(`<w-form @success="onFormSuccess">
  <w-input
    type="file"
    v-model="files"
    :validators="[() => files.length || 'Please add a file']">
    File
  </w-input>

  <w-button
    type="submit"
    :loading="loading"
    class="d-flex mla mt4">
    Send
  </w-button>
</w-form>`),Jn=e("2nd example"),Gn=i("p",null,[e("In this example (more common case) the file is transferred as "),i("code",null,"multipart/form-data"),e(` with
the use of `),i("code",null,"FormData"),e(" and using the same HTML as the previous example.")],-1),Kn=e(`import axios from 'axios'

export default {
  data: () => ({
    files: []
  }),

  methods: {
    onFormSuccess () {
      const formData = new FormData()
      formData.append('file', this.files[0].file)

      axios.post(
        '/api/your-backend-script',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      ).then(
        data => console.log('Success!', data),
        error => console.log('Failure!', error)
      )
    }
  }
}
`),Xn=i("p",null,`Here is an example of a very minimalist way to receive and display the file on server side
with PHP. Of course you should add more checks, and move the temporary uploaded file when all
the checks are passed.`,-1),Qn=e(`<?php
// You can check the structure of the file upload.
// print_r($_FILES);die;

// Set the content type to the file type for output.
header('Content-Type: ' . $_FILES['file']['type']);

// Read and output the uploaded file.
die(file_get_contents($_FILES['file']['tmp_name']));
?>
`),Zn=e("Loading state"),et=i("p",null,[e(`If you try to upload a very large file, you will see the progress value of the file transfer will
be updated as the transfer goes on (e.g. :loading="overallProgress").`),i("br"),e(`
You can also show a self-updated progress bar with the `),i("code",null,"show-progress"),e(" prop.")],-1),nt=e("File"),tt={class:"my4"},it=e("Files:"),lt={class:"ml2"},ot=e(`w-input(type="file"
  v-model="files"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green") File

.my4 Overall progress: `+p("{{ overallProgress }}")+`

w-flex
  | Files:
  pre.ml2 `+p("{{ files }}")),st=e(`<w-input type="file"
  v-model="files4"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green">
  File
</w-input>

<div class="my4">
  Overall progress: `+p("{{ overallProgress }}")+`
</div>

<w-flex>
  Files:
  <pre class="ml2">`+p("{{ files }}")+`</pre>
</w-flex>`),at=e(`data: () => ({
  files: [],
  overallProgress: 0
})
`),dt=e("Accepting specific file extensions"),ct=e('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg")'),rt=e(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg">
</w-input>
`),pt=e("Multiple files upload"),ut=e('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg" multiple)'),mt=e(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg"
  multiple>
</w-input>
`),ht=e("Types"),bt=i("p",null,[e('The default type is "'),i("span",{class:"code"},"text"),e('" but the types bellow are also supported.')],-1),ft=i("p",null,[e("On desktop you will not notice the difference between the fields "),i("span",{class:"code"},"email"),e(", "),i("span",{class:"code"},"tel"),e(`,
`),i("span",{class:"code"},"url"),e(`, and the default text type. But on touch devices, the keyboard is adapted to the
type of input.`)],-1),wt=i("h3",null,"Textual inputs",-1),_t={class:"input-types"},gt=i("div",{class:"code mb1"},'type="date"',-1),yt=e("date"),vt={class:"mt4"},xt=i("div",{class:"code mb1"},'type="email"',-1),Pt=e("Email address"),kt={class:"mt4"},St=i("div",{class:"code mb1"},'type="number"',-1),Ft=e("Age"),It={class:"mt4"},Tt=i("div",{class:"code mb1"},'type="password"',-1),Lt=e("Password"),Rt={class:"mt4"},Ot=i("div",{class:"code mb1"},'type="search"',-1),$t=e("Search"),At={class:"mt4"},jt=i("div",{class:"code mb1"},'type="tel"',-1),Dt=e("Tel"),Ut={class:"mt4"},Mt=i("div",{class:"code mb1"},'type="text"',-1),Vt=e("Text"),qt={class:"mt4"},Et=i("div",{class:"code mb1"},'type="time"',-1),Ht=e("time"),Bt={class:"mt4"},Ct=i("div",{class:"code mb1"},'type="url"',-1),Nt=e("Url"),Wt={class:"mt4"},Yt=i("span",{class:"code mb1 mr2"},'type="hidden"',-1),zt=e("The hidden type is also accepted - but you don't need a "),Jt=i("span",{class:"code"},"w-input",-1),Gt=e(" for that!"),Kt=e(`<ul.input-types>
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
    <w-input(type="hidden")<`),Xt=e(`<ul class="input-types">
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
`),Qt=i("h3",null,"Other types of inputs",-1),Zt=i("p",null,"For all the other types of input listed bellow, a specific Wave UI component should be used instead:",-1),ei={class:"other-input-types"},ni=v('<li class="mt1"><span class="code mr2">type=&quot;button&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;checkbox&quot;</span><span class="grey">use <code>w-checkbox</code> instead</span></li>',2),ti={class:"mt1"},ii=i("span",{class:"code mr2"},'type="color"',-1),li=i("span",{class:"grey"},[e("use "),i("code",null,"w-color-picker"),e(" instead")],-1),oi=e("coming soon"),si=v('<li class="mt1"><span class="code mr2">type=&quot;image&quot;</span><span class="grey">use the <code>img</code> HTML tag instead</span></li><li class="mt1"><span class="code mr2">type=&quot;radio&quot;</span><span class="grey">use <code>w-radio</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;range&quot;</span><span class="grey">use <code>w-slider</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;reset&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;submit&quot;</span><span class="grey">use <code>w-button</code> instead</span></li>',5),ai={class:"mt1"},di=i("span",{class:"code mr2"},'type="time"',-1),ci=i("span",{class:"grey"},[e("use "),i("code",null,"w-time-picker"),e(" instead")],-1),ri=e("coming soon");function pi(o,s,c,h,P,m){const a=r("title-link"),l=r("w-input"),d=r("example"),f=r("w-flex"),w=r("alert"),b=r("w-icon"),R=r("w-button"),O=r("w-form"),k=r("ssh-pre"),S=r("w-tag");return g(),y("div",null,[t(a,{h2:""},{default:n(()=>[U]),_:1}),M,t(d,null,{pug:n(()=>[q]),html:n(()=>[E]),default:n(()=>[t(l,null,{default:n(()=>[V]),_:1})]),_:1}),t(a,{h2:""},{default:n(()=>[H]),_:1}),t(d,null,{pug:n(()=>[B]),html:n(()=>[C]),default:n(()=>[t(l,{class:"mb4",label:"Label"}),t(l,{class:"mb4",placeholder:"Placeholder"}),t(l,{class:"mb4",label:"Label",placeholder:"Placeholder"})]),_:1}),t(a,{h2:""},{default:n(()=>[N]),_:1}),W,Y,t(d,null,{pug:n(()=>[z]),html:n(()=>[J]),default:n(()=>[t(l,{label:"Label","static-label":""})]),_:1}),t(a,{h2:""},{default:n(()=>[G]),_:1}),t(d,null,{pug:n(()=>[K]),html:n(()=>[X]),default:n(()=>[t(l,{class:"mb6",label:"Outline",outline:""}),t(l,{class:"mb3",placeholder:"Outline",outline:""}),t(l,{class:"mb3",label:"Outline",color:"info",outline:""}),t(l,{class:"mb3",label:"Outline","bg-color":"blue-light5",outline:""})]),_:1}),t(a,{h2:""},{default:n(()=>[Q]),_:1}),t(d,null,{pug:n(()=>[Z]),html:n(()=>[ee]),default:n(()=>[t(l,{class:"mb4",label:"Shadow",shadow:""}),t(l,{label:"Outline with shadow",shadow:"",outline:""})]),_:1}),t(a,{h2:""},{default:n(()=>[ne]),_:1}),t(d,null,{pug:n(()=>[se]),html:n(()=>[ae]),default:n(()=>[t(f,{wrap:"",gap:2},{default:n(()=>[i("div",te,[ie,t(l,{class:"mb1",label:"Round",round:""}),t(l,{class:"mb1",label:"Round and shadow",round:"",shadow:""}),t(l,{label:"Tile",tile:""})]),i("div",le,[oe,t(l,{class:"mb1",label:"Round",round:"",outline:""}),t(l,{class:"mb1",label:"Round and shadow",round:"",outline:"",shadow:""}),t(l,{class:"mb1",label:"Tile",tile:"",outline:""})])]),_:1})]),_:1}),t(a,{h2:""},{default:n(()=>[de]),_:1}),ce,t(d,null,{pug:n(()=>[he]),html:n(()=>[be]),default:n(()=>[t(f,{wrap:"",gap:2},{default:n(()=>[i("div",re,[pe,t(l,{class:"mb1","model-value":"Some content"}),t(l,{class:"mb1",color:"red","model-value":"Some content"}),t(l,{class:"mb1","bg-color":"red-light5","model-value":"Some content"}),t(l,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content"}),t(l,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content"})]),i("div",ue,[me,t(l,{class:"mb1","model-value":"Some content",outline:""}),t(l,{class:"mb1",color:"red","model-value":"Some content",outline:""}),t(l,{class:"mb1","bg-color":"red-light5","model-value":"Some content",outline:""}),t(l,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content",outline:""}),t(l,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content",outline:""})])]),_:1})]),_:1}),t(a,{h2:""},{default:n(()=>[fe]),_:1}),we,t(w,{tip:""},{default:n(()=>[_e,ge,ye,ve,xe,Pe,ke,Se,Fe]),_:1}),t(d,null,{pug:n(()=>[Ie]),html:n(()=>[Te]),default:n(()=>[t(l,{class:"mb3",label:"Inside","label-position":"inside",outline:""}),t(l,{class:"mb3",label:"Left","label-position":"left",outline:""}),t(l,{class:"mb3",label:"Right","label-position":"right",outline:""})]),_:1}),t(a,{h2:""},{default:n(()=>[Le]),_:1}),Re,t(d,null,{pug:n(()=>[Ve]),html:n(()=>[qe]),default:n(()=>[t(l,{class:"mb3","label-position":"inside",outline:""},{default:n(()=>[t(b,{class:"orange"},{default:n(()=>[Oe]),_:1}),$e,t(b,{class:"orange"},{default:n(()=>[Ae]),_:1})]),_:1}),t(l,{class:"mb3","label-position":"left",outline:""},{default:n(()=>[je,t(b,{class:"orange"},{default:n(()=>[De]),_:1})]),_:1}),t(l,{class:"mb3","label-position":"right",outline:""},{default:n(()=>[t(b,{class:"orange"},{default:n(()=>[Ue]),_:1}),Me]),_:1})]),_:1}),t(a,{h2:""},{default:n(()=>[Ee]),_:1}),t(d,null,{pug:n(()=>[Ce]),html:n(()=>[Ne]),js:n(()=>[We]),default:n(()=>[He,t(l,{class:"mb2",label:"Username","label-position":"left",outline:"","inner-icon-left":"mdi mdi-account"}),t(l,{class:"mb2",label:"Password",type:o.isPassword?"password":"text","inner-icon-left":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","inner-icon-right":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":s[0]||(s[0]=u=>o.isPassword=!o.isPassword)},null,8,["type","inner-icon-left","inner-icon-right"]),t(l,{class:"mb2",label:"Password",type:o.isPassword?"password":"text","label-position":"left",outline:"","inner-icon-right":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":s[1]||(s[1]=u=>o.isPassword=!o.isPassword)},null,8,["type","inner-icon-right"]),t(l,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-left":"wi-check"}),t(l,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-right":"wi-check"}),Be,t(l,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-left":"wi-search"}),t(l,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-right":"wi-search"})]),_:1}),t(a,{h2:""},{default:n(()=>[Ye]),_:1}),t(d,null,{pug:n(()=>[ze]),html:n(()=>[Je]),default:n(()=>[t(l,{class:"mb3",label:"Disabled & empty",outline:"",disabled:""}),t(l,{class:"mb3",label:"Disabled & filled","model-value":"Some content",outline:"",disabled:""}),t(l,{class:"mb3",label:"Readonly & empty",outline:"",readonly:""}),t(l,{class:"mb3",label:"Readonly & filled","model-value":"Some content",outline:"",readonly:""})]),_:1}),t(a,{h2:"",slug:"file-input"},{default:n(()=>[Ge]),_:1}),t(w,{success:""},{default:n(()=>[Ke,Xe,Qe,Ze,en]),_:1}),nn,tn,t(d,null,{pug:n(()=>[on]),html:n(()=>[sn]),default:n(()=>[t(l,{type:"file"},{default:n(()=>[ln]),_:1})]),_:1}),t(a,{h3:""},{default:n(()=>[an]),_:1}),dn,t(d,null,{pug:n(()=>[rn]),html:n(()=>[pn]),default:n(()=>[t(l,{type:"file",preview:!1},{default:n(()=>[cn]),_:1})]),_:1}),t(a,{h3:""},{default:n(()=>[un]),_:1}),mn,t(d,null,{pug:n(()=>[bn]),html:n(()=>[fn]),default:n(()=>[t(l,{type:"file",preview:"mdi mdi-star"},{default:n(()=>[hn]),_:1})]),_:1}),wn,t(d,null,{pug:n(()=>[gn]),html:n(()=>[yn]),js:n(()=>[vn]),default:n(()=>[t(l,{type:"file",modelValue:o.files3,"onUpdate:modelValue":s[2]||(s[2]=u=>o.files3=u),preview:!!o.files3.length&&m.filePreviewIcon},{default:n(()=>[_n]),_:1},8,["modelValue","preview"])]),_:1}),t(a,{h3:""},{default:n(()=>[xn]),_:1}),Pn,t(a,{class:"mt6",h4:""},{default:n(()=>[kn]),_:1}),t(d,null,{pug:n(()=>[In]),html:n(()=>[Tn]),js:n(()=>[Ln]),default:n(()=>[t(l,{type:"file",onInput:m.onFileInput},{default:n(()=>[Sn]),_:1},8,["onInput"]),i("pre",Fn,p(o.files1),1)]),_:1}),t(a,{class:"mt6 mb2",h4:""},{default:n(()=>[Rn]),_:1}),On,t(w,{warning:""},{default:n(()=>[$n,An,jn]),_:1}),t(d,null,{pug:n(()=>[Mn]),html:n(()=>[Vn]),js:n(()=>[qn]),default:n(()=>[t(l,{type:"file",modelValue:o.files2,"onUpdate:modelValue":s[3]||(s[3]=u=>o.files2=u)},{default:n(()=>[Dn]),_:1},8,["modelValue"]),i("pre",Un,p(o.files2),1)]),_:1}),t(a,{h3:""},{default:n(()=>[En]),_:1}),Hn,t(a,{class:"mt8",h4:""},{default:n(()=>[Bn]),_:1}),Cn,t(d,{reactive:"","external-js":"https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js"},{pug:n(()=>[Yn]),html:n(()=>[zn]),js:n(()=>[e(`methods: {
  // This method uses the Axios library.
  // import axios from 'axios' // If you use NPM.
  async onFormSuccess () {
    this.loading = true

    const binURL = 'https://filebin.net/waveui-`+p(o.todayFormatted)+p(o.userIP)+`'
    const { name: filename, file } = this.files[0]

    axios.post(\`\${binURL}/\${filename}\`, file)
      .then(data => {
        this.loading = false
        this.$waveui.notify(
          \`<div>
          File transferred successfully.<br>Now check your
          <a href="\${binURL}" target="_blank">
            Filebin <i class="w-icon mdi mdi-open-in-new"></i></a>.
          </div>\`,
          'success',
          0)
      })
      .catch(() => {
        this.$waveui.notify(
          '<div>An error occurred.<br>Is Filebin down?<br>Or is there a problem with the file?</div>',
          'error',
          0)
        this.loading = false
      })
  }
}
`,1)]),default:n(()=>[t(O,{onSuccess:m.onFormSuccess},{default:n(()=>[t(l,{type:"file",modelValue:o.files5,"onUpdate:modelValue":s[4]||(s[4]=u=>o.files5=u),validators:[()=>o.files5.length||"Please add a file"]},{default:n(()=>[Nn]),_:1},8,["modelValue","validators"]),t(R,{class:"d-flex mla mt4",type:"submit",loading:o.loading},{default:n(()=>[Wn]),_:1},8,["loading"])]),_:1},8,["onSuccess"])]),_:1}),t(a,{class:"mt8",h4:""},{default:n(()=>[Jn]),_:1}),Gn,t(k,{language:"js",label:"JavaScript"},{default:n(()=>[Kn]),_:1}),Xn,t(k,{language:"php",label:"PHP"},{default:n(()=>[Qn]),_:1}),t(a,{h3:""},{default:n(()=>[Zn]),_:1}),et,t(d,null,{pug:n(()=>[ot]),html:n(()=>[st]),js:n(()=>[at]),default:n(()=>[t(l,{type:"file",modelValue:o.files4,"onUpdate:modelValue":s[5]||(s[5]=u=>o.files4=u),"overall-progress":o.overallProgress,"onUpdate:overall-progress":s[6]||(s[6]=u=>o.overallProgress=u),"show-progress":"","progress-color":"green"},{default:n(()=>[nt]),_:1},8,["modelValue","overall-progress"]),i("div",tt,"Overall progress: "+p(o.overallProgress),1),t(f,null,{default:n(()=>[it,i("pre",lt,p(o.files4),1)]),_:1})]),_:1}),t(a,{h3:""},{default:n(()=>[dt]),_:1}),t(d,null,{pug:n(()=>[ct]),html:n(()=>[rt]),default:n(()=>[t(l,{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg"})]),_:1}),t(a,{h3:""},{default:n(()=>[pt]),_:1}),t(d,null,{pug:n(()=>[ut]),html:n(()=>[mt]),default:n(()=>[t(l,{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg",multiple:""})]),_:1}),t(a,{h2:""},{default:n(()=>[ht]),_:1}),bt,ft,wt,t(d,null,{pug:n(()=>[Kt]),html:n(()=>[Xt]),default:n(()=>[i("ul",_t,[i("li",null,[gt,t(l,{type:"date"},{default:n(()=>[yt]),_:1})]),i("li",vt,[xt,t(l,{type:"email"},{default:n(()=>[Pt]),_:1})]),i("li",kt,[St,t(l,{type:"number",min:"0",max:"100"},{default:n(()=>[Ft]),_:1})]),i("li",It,[Tt,t(l,{type:"password"},{default:n(()=>[Lt]),_:1})]),i("li",Rt,[Ot,t(l,{type:"search"},{default:n(()=>[$t]),_:1})]),i("li",At,[jt,t(l,{type:"tel"},{default:n(()=>[Dt]),_:1})]),i("li",Ut,[Mt,t(l,{type:"text"},{default:n(()=>[Vt]),_:1})]),i("li",qt,[Et,t(l,{type:"time"},{default:n(()=>[Ht]),_:1})]),i("li",Bt,[Ct,t(l,{type:"url"},{default:n(()=>[Nt]),_:1})]),i("li",Wt,[Yt,zt,Jt,Gt,t(l,{type:"hidden"})])])]),_:1}),Qt,Zt,i("ul",ei,[ni,i("li",ti,[ii,li,t(S,{class:"px1 ml1",color:"red",outline:""},{default:n(()=>[oi]),_:1})]),si,i("li",ai,[di,ci,t(S,{class:"px1 ml1",color:"red",outline:""},{default:n(()=>[ri]),_:1})])])])}const ui={data:()=>({isPassword:!0,files1:[],files2:[],files3:[],files4:[],files5:[],loading:!1,overallProgress:void 0,todayFormatted:"",userIP:""}),computed:{filePreviewIcon(){const{extension:o}=this.files3[0];switch(o){case"jpg":case"png":case"gif":case"pdf":return`mdi mdi-file-${o}-box`;case"jpeg":return"mdi mdi-file-jpg-box";case"svg":case"webp":return"mdi mdi-image";case"mov":return"mdi mdi-filmstrip";case"zip":return"mdi mdi-folder-zip";default:return"mdi mdi-file"}}},methods:{onFileInput(o){this.files1=o},getTodaysDate(){const o=new Date,s=o.getDate().toString().padStart(2,0),c=(o.getMonth()+1).toString().padStart(2,0),h=o.getFullYear();this.todayFormatted=`${h}${c}${s}`},async getUserIP(){await T.get("https://api.ipify.org").then(o=>{this.userIP=o.data.replace(/\./g,"")})},async onFormSuccess(){this.loading=!0;const o=`https://filebin.net/waveui-${this.userIP}${this.todayFormatted}`,{name:s,file:c}=this.files5[0];T.post(`${o}/${s}`,c).then(h=>{this.loading=!1,this.$waveui.notify(`<div>
              File transferred successfully.<br>Now check your
              <a href="${o}" target="_blank">
                Filebin <i class="w-icon mdi mdi-open-in-new"></i></a>.
              </div>`,"success",0)},()=>{this.$waveui.notify("<div>An error occurred.<br>Is Filebin down?<br>Or is there a problem with the file?</div>","error",0),this.loading=!1})}},created(){this.getTodaysDate(),this.getUserIP()}};var mi=x(ui,[["render",pi]]);const hi=i("div",{class:"w-divider my12"},null,-1),bi=e("API");function fi(o,s,c,h,P,m){const a=r("title-link"),l=r("component-api");return g(),y("div",null,[hi,t(a,{class:"title1",h2:""},{default:n(()=>[bi]),_:1}),t(l,{class:"mt0",items:m.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(l,{items:o.slots,title:"Slots"},null,8,["items"]),t(l,{items:m.events,title:"Events"},null,8,["items"])])}const wi={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the input field.<br>Gets updated on text input.',type:"Applies a native HTML <code>type</code> attribute.",label:"Sets a visible label for the input field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",color:`Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the input field's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,minlength:"Applies the native HTML <code>minlength</code> attribute.",maxlength:"Applies the native HTML <code>maxlength</code> attribute which prevents typing more than this amount of characters.",step:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>step</code> attribute which sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>.',min:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>min</code> attribute which sets an integer or floating minimum number.',max:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>max</code> attribute which sets an integer or floating maximum number.',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the input field, giving it a round look.",shadow:"Applies a drop shadow to the input field.",tile:"Removes the default border-radius and sets sharp edges on the input field.",name:"Provide a native HTML <code>name</code> attribute to the input field. If not provided, a unique name will be computed.",disabled:"Disables the input field making it unreactive to user interactions.",readonly:"The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the input field.",validators:'<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.'},_i={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},gi={input:{description:"Emitted each time the input text (or file) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textual input value."}},"update:modelValue":{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textual input value."}},"update:overallProgress":{description:"Emitted continuously while uploading a file. When using the <code>multiple</code> option, this is the overall progress of all the files together.<br>You can use it with <code>:overall-progress.sync</code> in Vue 2, or <code>v-model:overall-progress</code> in Vue 3."},focus:{description:"Emitted on input focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on input blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},yi={data:()=>({propsDescs:wi,slots:_i}),computed:{props(){return _(_({},L.props),D.props)},events(){return L.emits.reduce((o,s)=>(o[s]=gi[s]||{})&&o,{})}}};var vi=x(yi,[["render",fi]]);const xi=e("w-input");function Pi(o,s,c,h,P,m){const a=r("ui-component-title"),l=r("examples"),d=r("api");return g(),y("main",null,[t(a,null,{default:n(()=>[xi]),_:1}),t(l),t(d)])}const ki={components:{Examples:mi,Api:vi}};var Ti=x(ki,[["render",Pi]]);export{Ti as default};
