import{a as S}from"./index.a0a717ed.js";import{r as c,o as _,f as g,a as t,w as n,b as i,h as r,e,i as y,_ as v,R as F,E as L}from"./index.8deb2544.js";const R=e("Default"),O=i("p",null,[e("By default the "),i("span",{class:"code"},"w-input"),e(` component has a label inside the input field, that moves up
above the field on focus or when the field has some content or a placeholder.`),i("br")],-1),$=e("Label"),A=e("w-input Label"),j=e(`<w-input>Label</w-input>
`),D=e("Label and / or placeholder"),U=e(`w-input.mb4(label="Label")
w-input.mb4(placeholder="Placeholder")
w-input.mb4(label="Label" placeholder="Placeholder")`),M=e(`<w-input
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
`),V=e("Static label"),q=i("p",null,[e(`By default the label is positioned inside and on field focus, it will move up above the field
and shrink.`),i("br"),e(`
It is possible to keep it inside and disable the animation with the `),i("code",null,"static-label"),e(" option.")],-1),E=i("p",{class:"mt4"},[i("strong",null,"Note:"),e(` If this option is set to true and the label is positioned inside when a placeholder is set,
only the placeholder will be displayed.
`)],-1),H=e('w-input(label="Label" static-label)'),B=e(`<w-input
  label="Label"
  static-label>
</w-input>
`),C=e("Outline"),N=e(`w-input.mb6(label="Outline" outline)
w-input.mb3(placeholder="Outline" outline)
w-input.mb3(label="Outline" color="info" outline)
w-input.mb3(label="Outline" bg-color="blue-light5" outline)`),W=e(`<w-input
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
`),Y=e("Shadow"),z=e(`w-input.mb4(label="Shadow" shadow)
w-input(label="Outline with shadow" shadow outline)`),J=e(`<w-input
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
`),G=e("Round & Tile"),X={class:"grow mb4",style:{"min-width":"200px"}},K=i("div",{class:"title4 mb2"},"Underline style (default)",-1),Q={class:"grow mb4",style:{"min-width":"200px"}},Z=i("div",{class:"title4 mb2"},"Outline style",-1),ee=e(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(label="Round" round)
    w-input.mb1(label="Round and shadow" round shadow)
    w-input.mb1(label="Tile" tile)

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(label="Round" round outline)
    w-input.mb1(label="Round and shadow" round outline shadow)
    w-input.mb1(label="Tile" tile outline)`),ne=e(`<w-flex wrap :gap="2">
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
`),te=e("Colors"),ie=i("p",{class:"mb4"},[e("Like in most components, you can set a "),i("code",null,"color"),e(" for the text and a "),i("code",null,"bg-color"),e(` for the
background.`),i("br"),e(`
By default, the text has the "`),i("span",{class:"code"},"primary"),e('" color.')],-1),le={class:"grow mb4",style:{"min-width":"200px"}},oe=i("div",{class:"title4 mb2"},"Underline style (default)",-1),se={class:"grow mb4",style:{"min-width":"200px"}},ae=i("div",{class:"title4 mb2"},"Outline style",-1),de=e(`w-flex(wrap :gap="2")
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
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" model-value="Some content" outline)`),ce=e(`<w-flex wrap :gap="2">
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
`),re=e("Label position"),pe=i("p",null,[e('The default label position is "'),i("span",{class:"code"},"inside"),e('", but it can also be "'),i("span",{class:"code"},"left"),e('" or "'),i("span",{class:"code"},"right"),e('".')],-1),ue=e("You could also set a label outside of the "),me=i("span",{class:"code"},"w-input",-1),he=e(` and display it nicely with flex.
But it is convenient to let the `),be=i("span",{class:"code"},"w-input",-1),fe=e(` component handle the field focus event on
label click.`),we=i("br",null,null,-1),_e=e(`
The `),ge=i("span",{class:"code"},"label",-1),ye=e(` prop is here for this purpose and accepts any HTML.
`),ve=e(`w-input.mb3(label="Inside" label-position="inside" outline)
w-input.mb3(label="Left" label-position="left" outline)
w-input.mb3(label="Right" label-position="right" outline)`),xe=e(`<w-input
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
`),Pe=e("Custom label via default slot"),ke=i("p",null,[e("It is convenient to have the label inside the "),i("span",{class:"code"},"w-input"),e(` component to let it handle
the field focus event on label click.`),i("br"),e(`
The `),i("span",{class:"code"},"label"),e(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),Se=e("mdi mdi-arrow-right"),Fe=i("span",{class:"purple mx1"},"Inside",-1),Ie=e("mdi mdi-arrow-left"),Te=i("span",{class:"green mr1"},"Left",-1),Le=e("mdi mdi-arrow-right"),Re=e("mdi mdi-arrow-left"),Oe=i("span",{class:"red ml1"},"Right",-1),$e=e(`w-input.mb3(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-input.mb3(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-input.mb3(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`),Ae=e(`<w-input
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
`),je=e("Inner icons"),De=i("div",{class:"title4 mb2"},"Label outside",-1),Ue=i("div",{class:"title4 mt6 mb2"},"Label inside",-1),Me=e(`.title4.mb2 Label outside
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
w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")`),Ve=e(`<div class="title4 mb2">
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
</w-input>`),qe=e(`data: () => ({
  isPassword: true
})
`),Ee=e("Disabled & readonly"),He=e(`w-input.mb3(label="Disabled & empty" outline disabled)
w-input.mb3(label="Disabled & filled" model-value="Some content" outline disabled)
w-input.mb3(label="Readonly & empty" outline readonly)
w-input.mb3(label="Readonly & filled" model-value="Some content" outline readonly)`),Be=e(`<w-input
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
`),Ce=e("File input"),Ne=e("A "),We=i("strong",{class:"code mx1"},"w-input",-1),Ye=e(" field only needs a "),ze=i("code",null,'type="file"',-1),Je=e(" to become a file input."),Ge=i("p",null,[e("By default, the file input will show a preview of the image you are uploading."),i("br"),e(`
If the file can't be previewed a file icon will show up to the right of the field instead of
a preview.`)],-1),Xe=i("p",null,`When uploading a larger file, a spinner will show up to the right of the field until
the file is completely transferred.`,-1),Ke=e("File"),Qe=e('w-input(type="file") File'),Ze=e(`<w-input type="file">File</w-input>
`),en=e("Disabled preview"),nn=i("p",null,[e("The file preview can be disabled if not needed by setting the "),i("code",null,"preview"),e(` prop to
`),i("code",null,"false"),e(".")],-1),tn=e("File"),ln=e('w-input(type="file" :preview="false") File'),on=e(`<w-input type="file" :preview="false">File</w-input>
`),sn=e("Custom preview icon"),an=i("p",null,[e("By default, when the file is not an image, the preview will be a generic file icon."),i("br"),e(`
It is possible to set a custom icon instead.`)],-1),dn=e("File"),cn=e('w-input(type="file" preview="mdi mdi-star") File'),rn=e(`<w-input type="file" preview="mdi mdi-star">File</w-input>
`),pn=i("p",null,"You could even compute a variable to show a different icon per detected file type.",-1),un=e("File"),mn=e(`w-input(
  type="file"
  v-model="files"
  :preview="!!files.length && filePreviewIcon") File`),hn=e(`<w-input
  type="file"
  v-model="files"
  :preview="!!files.length && filePreviewIcon">
  File
</w-input>`),bn=e(`data: () => ({
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
`),fn=e("Reading the files"),wn=i("p",null,`On the frontend, you can read all the file details and contents on input when the user selects
a file, or you can provide a files array that you keep in sync with Wave UI.`,-1),_n=e("Via @input"),gn=e("File"),yn={class:"mt3"},vn=e(`w-input(type="file" @input="onFileInput") File

pre.mt3 `+r("{{ files }}")),xn=e(`<w-input type="file" @input="onFileInput>File</w-input>

<pre class="mt3">`+r("{{ files }}")+"</pre>"),Pn=e(`data: () => ({
  files: []
}),

methods: {
  onFileInput (files) {
    this.files = files
  }
}
`),kn=e("Via v-model"),Sn=i("p",null,[e("The v-model can be used to access the files added by the user."),i("br")],-1),Fn=i("strong",null,"Important",-1),In=i("br",null,null,-1),Tn=e(`Even if a v-model is allowing a two-way binding,
there is no way to prefill an input type file:
that would be a security breach and is therefore not allowed in HTML.`),Ln=e("File"),Rn={class:"mt3"},On=e(`w-input(type="file" v-model="files") File

pre.mt3 `+r("{{ files }}")),$n=e(`<w-input type="file" v-model="files">File</w-input>

<pre class="mt3">`+r("{{ files }}")+"</pre>"),An=e(`data: () => ({
  files: []
})
`),jn=e("Uploading the file to a backend server"),Dn=y(`<p>There are different ways you can do this. The 2 most common ways would be to:</p><ul><li>Use Axios or other AJAX library to send the file on <strong class="code">w-form</strong> <code>@success</code> (emitted upon successful validation).</li><li>Use the <code>allow-submit</code> option on the <strong class="code">w-form</strong> as well as
<code>enctype=&quot;multipart/form-data&quot;</code>, <code>method</code> and <code>action</code> fields
in order to submit the file in a full HTML built-in process (But this will reload
the page).
</li></ul><p class="mt3">The first option is recommended for a more modern approach. Here are two examples how to
set this up.</p>`,3),Un=e("1st example"),Mn=i("p",null,[e("In this example, the file is uploaded to "),i("a",{href:"https://filebin.net",target:"_blank"},"Filebin"),e(`.
The file is transferred as `),i("code",null,"application/x-www-form-urlencoded"),e(` similar to
`),i("code",null,"application/octet-stream"),e(` with the file in the body of the request as per the
expectation of the Filebin API.`)],-1),Vn=e("File"),qn=e("Send"),En=e(`w-form(@success="onFormSuccess")
  w-input(
    type="file"
    v-model="files"
    :validators="[() => files.length || 'Please add a file']") File
  w-button.d-flex.mla.mt4(type="submit" :loading="loading") Send`),Hn=e(`<w-form @success="onFormSuccess">
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
</w-form>`),Bn=e("2nd example"),Cn=i("p",null,[e("In this example (more common case) the file is transferred as "),i("code",null,"multipart/form-data"),e(` with
the use of `),i("code",null,"FormData"),e(" and using the same HTML as the previous example.")],-1),Nn=e(`import axios from 'axios'

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
`),Wn=i("p",null,`Here is an example of a very minimalist way to receive and display the file on server side
with PHP. Of course you should add more checks, and move the temporary uploaded file when all
the checks are passed.`,-1),Yn=e(`<?php
// You can check the structure of the file upload.
// print_r($_FILES);die;

// Set the content type to the file type for output.
header('Content-Type: ' . $_FILES['file']['type']);

// Read and output the uploaded file.
die(file_get_contents($_FILES['file']['tmp_name']));
?>
`),zn=e("Loading state"),Jn=i("p",null,[e(`If you try to upload a very large file, you will see the progress value of the file transfer will
be updated as the transfer goes on (e.g. :loading="overallProgress").`),i("br"),e(`
You can also show a self-updated progress bar with the `),i("code",null,"show-progress"),e(" prop.")],-1),Gn=e("File"),Xn={class:"my4"},Kn=e("Files:"),Qn={class:"ml2"},Zn=e(`w-input(type="file"
  v-model="files"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green") File

.my4 Overall progress: `+r("{{ overallProgress }}")+`

w-flex
  | Files:
  pre.ml2 `+r("{{ files }}")),et=e(`<w-input type="file"
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
</w-flex>`),nt=e(`data: () => ({
  files: [],
  overallProgress: 0
})
`),tt=e("Accepting specific file extensions"),it=e('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg")'),lt=e(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg">
</w-input>
`),ot=e("Multiple files upload"),st=e('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg" multiple)'),at=e(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg"
  multiple>
</w-input>
`),dt=e("Types"),ct=i("p",null,[e('The default type is "'),i("span",{class:"code"},"text"),e('" but the types bellow are also supported.')],-1),rt=i("p",null,[e("On desktop you will not notice the difference between the fields "),i("span",{class:"code"},"email"),e(", "),i("span",{class:"code"},"tel"),e(`,
`),i("span",{class:"code"},"url"),e(`, and the default text type. But on touch devices, the keyboard is adapted to the
type of input.`)],-1),pt=i("h3",null,"Textual inputs",-1),ut={class:"input-types"},mt=i("div",{class:"code mb1"},'type="date"',-1),ht=e("date"),bt={class:"mt4"},ft=i("div",{class:"code mb1"},'type="email"',-1),wt=e("Email address"),_t={class:"mt4"},gt=i("div",{class:"code mb1"},'type="number"',-1),yt=e("Age"),vt={class:"mt4"},xt=i("div",{class:"code mb1"},'type="password"',-1),Pt=e("Password"),kt={class:"mt4"},St=i("div",{class:"code mb1"},'type="search"',-1),Ft=e("Search"),It={class:"mt4"},Tt=i("div",{class:"code mb1"},'type="tel"',-1),Lt=e("Tel"),Rt={class:"mt4"},Ot=i("div",{class:"code mb1"},'type="text"',-1),$t=e("Text"),At={class:"mt4"},jt=i("div",{class:"code mb1"},'type="time"',-1),Dt=e("time"),Ut={class:"mt4"},Mt=i("div",{class:"code mb1"},'type="url"',-1),Vt=e("Url"),qt={class:"mt4"},Et=i("span",{class:"code mb1 mr2"},'type="hidden"',-1),Ht=e("The hidden type is also accepted - but you don't need a "),Bt=i("span",{class:"code"},"w-input",-1),Ct=e(" for that!"),Nt=e(`<ul.input-types>
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
    <w-input(type="hidden")<`),Wt=e(`<ul class="input-types">
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
`),Yt=i("h3",null,"Other types of inputs",-1),zt=i("p",null,"For all the other types of input listed bellow, a specific Wave UI component should be used instead:",-1),Jt={class:"other-input-types"},Gt=y('<li class="mt1"><span class="code mr2">type=&quot;button&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;checkbox&quot;</span><span class="grey">use <code>w-checkbox</code> instead</span></li>',2),Xt={class:"mt1"},Kt=i("span",{class:"code mr2"},'type="color"',-1),Qt=i("span",{class:"grey"},[e("use "),i("code",null,"w-color-picker"),e(" instead")],-1),Zt=e("coming soon"),ei=y('<li class="mt1"><span class="code mr2">type=&quot;image&quot;</span><span class="grey">use the <code>img</code> HTML tag instead</span></li><li class="mt1"><span class="code mr2">type=&quot;radio&quot;</span><span class="grey">use <code>w-radio</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;range&quot;</span><span class="grey">use <code>w-slider</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;reset&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;submit&quot;</span><span class="grey">use <code>w-button</code> instead</span></li>',5),ni={class:"mt1"},ti=i("span",{class:"code mr2"},'type="time"',-1),ii=i("span",{class:"grey"},[e("use "),i("code",null,"w-time-picker"),e(" instead")],-1),li=e("coming soon");function oi(o,d,m,h,x,u){const s=c("title-link"),l=c("w-input"),a=c("example"),f=c("w-flex"),w=c("alert"),b=c("w-icon"),I=c("w-button"),T=c("w-form"),P=c("ssh-pre"),k=c("w-tag");return _(),g("div",null,[t(s,{h2:""},{default:n(()=>[R]),_:1}),O,t(a,null,{pug:n(()=>[A]),html:n(()=>[j]),default:n(()=>[t(l,null,{default:n(()=>[$]),_:1})]),_:1}),t(s,{h2:""},{default:n(()=>[D]),_:1}),t(a,null,{pug:n(()=>[U]),html:n(()=>[M]),default:n(()=>[t(l,{class:"mb4",label:"Label"}),t(l,{class:"mb4",placeholder:"Placeholder"}),t(l,{class:"mb4",label:"Label",placeholder:"Placeholder"})]),_:1}),t(s,{h2:""},{default:n(()=>[V]),_:1}),q,E,t(a,null,{pug:n(()=>[H]),html:n(()=>[B]),default:n(()=>[t(l,{label:"Label","static-label":""})]),_:1}),t(s,{h2:""},{default:n(()=>[C]),_:1}),t(a,null,{pug:n(()=>[N]),html:n(()=>[W]),default:n(()=>[t(l,{class:"mb6",label:"Outline",outline:""}),t(l,{class:"mb3",placeholder:"Outline",outline:""}),t(l,{class:"mb3",label:"Outline",color:"info",outline:""}),t(l,{class:"mb3",label:"Outline","bg-color":"blue-light5",outline:""})]),_:1}),t(s,{h2:""},{default:n(()=>[Y]),_:1}),t(a,null,{pug:n(()=>[z]),html:n(()=>[J]),default:n(()=>[t(l,{class:"mb4",label:"Shadow",shadow:""}),t(l,{label:"Outline with shadow",shadow:"",outline:""})]),_:1}),t(s,{h2:""},{default:n(()=>[G]),_:1}),t(a,null,{pug:n(()=>[ee]),html:n(()=>[ne]),default:n(()=>[t(f,{wrap:"",gap:2},{default:n(()=>[i("div",X,[K,t(l,{class:"mb1",label:"Round",round:""}),t(l,{class:"mb1",label:"Round and shadow",round:"",shadow:""}),t(l,{label:"Tile",tile:""})]),i("div",Q,[Z,t(l,{class:"mb1",label:"Round",round:"",outline:""}),t(l,{class:"mb1",label:"Round and shadow",round:"",outline:"",shadow:""}),t(l,{class:"mb1",label:"Tile",tile:"",outline:""})])]),_:1})]),_:1}),t(s,{h2:""},{default:n(()=>[te]),_:1}),ie,t(a,null,{pug:n(()=>[de]),html:n(()=>[ce]),default:n(()=>[t(f,{wrap:"",gap:2},{default:n(()=>[i("div",le,[oe,t(l,{class:"mb1","model-value":"Some content"}),t(l,{class:"mb1",color:"red","model-value":"Some content"}),t(l,{class:"mb1","bg-color":"red-light5","model-value":"Some content"}),t(l,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content"}),t(l,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content"})]),i("div",se,[ae,t(l,{class:"mb1","model-value":"Some content",outline:""}),t(l,{class:"mb1",color:"red","model-value":"Some content",outline:""}),t(l,{class:"mb1","bg-color":"red-light5","model-value":"Some content",outline:""}),t(l,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content",outline:""}),t(l,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content",outline:""})])]),_:1})]),_:1}),t(s,{h2:""},{default:n(()=>[re]),_:1}),pe,t(w,{tip:""},{default:n(()=>[ue,me,he,be,fe,we,_e,ge,ye]),_:1}),t(a,null,{pug:n(()=>[ve]),html:n(()=>[xe]),default:n(()=>[t(l,{class:"mb3",label:"Inside","label-position":"inside",outline:""}),t(l,{class:"mb3",label:"Left","label-position":"left",outline:""}),t(l,{class:"mb3",label:"Right","label-position":"right",outline:""})]),_:1}),t(s,{h2:""},{default:n(()=>[Pe]),_:1}),ke,t(a,null,{pug:n(()=>[$e]),html:n(()=>[Ae]),default:n(()=>[t(l,{class:"mb3","label-position":"inside",outline:""},{default:n(()=>[t(b,{class:"orange"},{default:n(()=>[Se]),_:1}),Fe,t(b,{class:"orange"},{default:n(()=>[Ie]),_:1})]),_:1}),t(l,{class:"mb3","label-position":"left",outline:""},{default:n(()=>[Te,t(b,{class:"orange"},{default:n(()=>[Le]),_:1})]),_:1}),t(l,{class:"mb3","label-position":"right",outline:""},{default:n(()=>[t(b,{class:"orange"},{default:n(()=>[Re]),_:1}),Oe]),_:1})]),_:1}),t(s,{h2:""},{default:n(()=>[je]),_:1}),t(a,null,{pug:n(()=>[Me]),html:n(()=>[Ve]),js:n(()=>[qe]),default:n(()=>[De,t(l,{class:"mb2",label:"Username","label-position":"left",outline:"","inner-icon-left":"mdi mdi-account"}),t(l,{class:"mb2",label:"Password",type:o.isPassword?"password":"text","inner-icon-left":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","inner-icon-right":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":d[0]||(d[0]=p=>o.isPassword=!o.isPassword)},null,8,["type","inner-icon-left","inner-icon-right"]),t(l,{class:"mb2",label:"Password",type:o.isPassword?"password":"text","label-position":"left",outline:"","inner-icon-right":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":d[1]||(d[1]=p=>o.isPassword=!o.isPassword)},null,8,["type","inner-icon-right"]),t(l,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-left":"wi-check"}),t(l,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-right":"wi-check"}),Ue,t(l,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-left":"wi-search"}),t(l,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-right":"wi-search"})]),_:1}),t(s,{h2:""},{default:n(()=>[Ee]),_:1}),t(a,null,{pug:n(()=>[He]),html:n(()=>[Be]),default:n(()=>[t(l,{class:"mb3",label:"Disabled & empty",outline:"",disabled:""}),t(l,{class:"mb3",label:"Disabled & filled","model-value":"Some content",outline:"",disabled:""}),t(l,{class:"mb3",label:"Readonly & empty",outline:"",readonly:""}),t(l,{class:"mb3",label:"Readonly & filled","model-value":"Some content",outline:"",readonly:""})]),_:1}),t(s,{h2:"",slug:"file-input"},{default:n(()=>[Ce]),_:1}),t(w,{success:""},{default:n(()=>[Ne,We,Ye,ze,Je]),_:1}),Ge,Xe,t(a,null,{pug:n(()=>[Qe]),html:n(()=>[Ze]),default:n(()=>[t(l,{type:"file"},{default:n(()=>[Ke]),_:1})]),_:1}),t(s,{h3:""},{default:n(()=>[en]),_:1}),nn,t(a,null,{pug:n(()=>[ln]),html:n(()=>[on]),default:n(()=>[t(l,{type:"file",preview:!1},{default:n(()=>[tn]),_:1})]),_:1}),t(s,{h3:""},{default:n(()=>[sn]),_:1}),an,t(a,null,{pug:n(()=>[cn]),html:n(()=>[rn]),default:n(()=>[t(l,{type:"file",preview:"mdi mdi-star"},{default:n(()=>[dn]),_:1})]),_:1}),pn,t(a,null,{pug:n(()=>[mn]),html:n(()=>[hn]),js:n(()=>[bn]),default:n(()=>[t(l,{type:"file",modelValue:o.files3,"onUpdate:modelValue":d[2]||(d[2]=p=>o.files3=p),preview:!!o.files3.length&&u.filePreviewIcon},{default:n(()=>[un]),_:1},8,["modelValue","preview"])]),_:1}),t(s,{h3:""},{default:n(()=>[fn]),_:1}),wn,t(s,{class:"mt6",h4:""},{default:n(()=>[_n]),_:1}),t(a,null,{pug:n(()=>[vn]),html:n(()=>[xn]),js:n(()=>[Pn]),default:n(()=>[t(l,{type:"file",onInput:u.onFileInput},{default:n(()=>[gn]),_:1},8,["onInput"]),i("pre",yn,r(o.files1),1)]),_:1}),t(s,{class:"mt6 mb2",h4:""},{default:n(()=>[kn]),_:1}),Sn,t(w,{warning:""},{default:n(()=>[Fn,In,Tn]),_:1}),t(a,null,{pug:n(()=>[On]),html:n(()=>[$n]),js:n(()=>[An]),default:n(()=>[t(l,{type:"file",modelValue:o.files2,"onUpdate:modelValue":d[3]||(d[3]=p=>o.files2=p)},{default:n(()=>[Ln]),_:1},8,["modelValue"]),i("pre",Rn,r(o.files2),1)]),_:1}),t(s,{h3:""},{default:n(()=>[jn]),_:1}),Dn,t(s,{class:"mt8",h4:""},{default:n(()=>[Un]),_:1}),Mn,t(a,{reactive:"","external-js":"https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js"},{pug:n(()=>[En]),html:n(()=>[Hn]),js:n(()=>[e(`methods: {
  // This method uses the Axios library.
  // import axios from 'axios' // If you use NPM.
  async onFormSuccess () {
    this.loading = true

    const binURL = 'https://filebin.net/waveui-`+r(o.todayFormatted)+r(o.userIP)+`'
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
`,1)]),default:n(()=>[t(T,{onSuccess:u.onFormSuccess},{default:n(()=>[t(l,{type:"file",modelValue:o.files5,"onUpdate:modelValue":d[4]||(d[4]=p=>o.files5=p),validators:[()=>o.files5.length||"Please add a file"]},{default:n(()=>[Vn]),_:1},8,["modelValue","validators"]),t(I,{class:"d-flex mla mt4",type:"submit",loading:o.loading},{default:n(()=>[qn]),_:1},8,["loading"])]),_:1},8,["onSuccess"])]),_:1}),t(s,{class:"mt8",h4:""},{default:n(()=>[Bn]),_:1}),Cn,t(P,{language:"js",label:"JavaScript"},{default:n(()=>[Nn]),_:1}),Wn,t(P,{language:"php",label:"PHP"},{default:n(()=>[Yn]),_:1}),t(s,{h3:""},{default:n(()=>[zn]),_:1}),Jn,t(a,null,{pug:n(()=>[Zn]),html:n(()=>[et]),js:n(()=>[nt]),default:n(()=>[t(l,{type:"file",modelValue:o.files4,"onUpdate:modelValue":d[5]||(d[5]=p=>o.files4=p),"overall-progress":o.overallProgress,"onUpdate:overall-progress":d[6]||(d[6]=p=>o.overallProgress=p),"show-progress":"","progress-color":"green"},{default:n(()=>[Gn]),_:1},8,["modelValue","overall-progress"]),i("div",Xn,"Overall progress: "+r(o.overallProgress),1),t(f,null,{default:n(()=>[Kn,i("pre",Qn,r(o.files4),1)]),_:1})]),_:1}),t(s,{h3:""},{default:n(()=>[tt]),_:1}),t(a,null,{pug:n(()=>[it]),html:n(()=>[lt]),default:n(()=>[t(l,{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg"})]),_:1}),t(s,{h3:""},{default:n(()=>[ot]),_:1}),t(a,null,{pug:n(()=>[st]),html:n(()=>[at]),default:n(()=>[t(l,{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg",multiple:""})]),_:1}),t(s,{h2:""},{default:n(()=>[dt]),_:1}),ct,rt,pt,t(a,null,{pug:n(()=>[Nt]),html:n(()=>[Wt]),default:n(()=>[i("ul",ut,[i("li",null,[mt,t(l,{type:"date"},{default:n(()=>[ht]),_:1})]),i("li",bt,[ft,t(l,{type:"email"},{default:n(()=>[wt]),_:1})]),i("li",_t,[gt,t(l,{type:"number",min:"0",max:"100"},{default:n(()=>[yt]),_:1})]),i("li",vt,[xt,t(l,{type:"password"},{default:n(()=>[Pt]),_:1})]),i("li",kt,[St,t(l,{type:"search"},{default:n(()=>[Ft]),_:1})]),i("li",It,[Tt,t(l,{type:"tel"},{default:n(()=>[Lt]),_:1})]),i("li",Rt,[Ot,t(l,{type:"text"},{default:n(()=>[$t]),_:1})]),i("li",At,[jt,t(l,{type:"time"},{default:n(()=>[Dt]),_:1})]),i("li",Ut,[Mt,t(l,{type:"url"},{default:n(()=>[Vt]),_:1})]),i("li",qt,[Et,Ht,Bt,Ct,t(l,{type:"hidden"})])])]),_:1}),Yt,zt,i("ul",Jt,[Gt,i("li",Xt,[Kt,Qt,t(k,{class:"px1 ml1",color:"red",outline:""},{default:n(()=>[Zt]),_:1})]),ei,i("li",ni,[ti,ii,t(k,{class:"px1 ml1",color:"red",outline:""},{default:n(()=>[li]),_:1})])])])}const si={data:()=>({isPassword:!0,files1:[],files2:[],files3:[],files4:[],files5:[],loading:!1,overallProgress:void 0,todayFormatted:"",userIP:""}),computed:{filePreviewIcon(){const{extension:o}=this.files3[0];switch(o){case"jpg":case"png":case"gif":case"pdf":return`mdi mdi-file-${o}-box`;case"jpeg":return"mdi mdi-file-jpg-box";case"svg":case"webp":return"mdi mdi-image";case"mov":return"mdi mdi-filmstrip";case"zip":return"mdi mdi-folder-zip";default:return"mdi mdi-file"}}},methods:{onFileInput(o){this.files1=o},getTodaysDate(){const o=new Date,d=o.getDate().toString().padStart(2,0),m=(o.getMonth()+1).toString().padStart(2,0),h=o.getFullYear();this.todayFormatted=`${h}${m}${d}`},async getUserIP(){await S.get("https://api.ipify.org").then(o=>{this.userIP=o.data.replace(/\./g,"")})},async onFormSuccess(){this.loading=!0;const o=`https://filebin.net/waveui-${this.userIP}${this.todayFormatted}`,{name:d,file:m}=this.files5[0];S.post(`${o}/${d}`,m).then(h=>{this.loading=!1,this.$waveui.notify(`<div>
              File transferred successfully.<br>Now check your
              <a href="${o}" target="_blank">
                Filebin <i class="w-icon mdi mdi-open-in-new"></i></a>.
              </div>`,"success",0)},()=>{this.$waveui.notify("<div>An error occurred.<br>Is Filebin down?<br>Or is there a problem with the file?</div>","error",0),this.loading=!1})}},created(){this.getTodaysDate(),this.getUserIP()}};var ai=v(si,[["render",oi]]);const di=i("div",{class:"w-divider my12"},null,-1),ci=e("API");function ri(o,d,m,h,x,u){const s=c("title-link"),l=c("component-api");return _(),g("div",null,[di,t(s,{class:"title1",h2:""},{default:n(()=>[ci]),_:1}),t(l,{class:"mt0",items:u.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(l,{items:o.slots,title:"Slots"},null,8,["items"]),t(l,{items:u.events,title:"Events"},null,8,["items"])])}const pi={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the input field.<br>Gets updated on text input.',type:"Applies a native HTML <code>type</code> attribute.",label:"Sets a visible label for the input field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",color:`Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the input field's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,minlength:"Applies the native HTML <code>minlength</code> attribute.",maxlength:"Applies the native HTML <code>maxlength</code> attribute which prevents typing more than this amount of characters.",step:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>step</code> attribute which sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>.',min:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>min</code> attribute which sets an integer or floating minimum number.',max:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>max</code> attribute which sets an integer or floating maximum number.',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the input field, giving it a round look.",shadow:"Applies a drop shadow to the input field.",tile:"Removes the default border-radius and sets sharp edges on the input field.",name:"Provide a native HTML <code>name</code> attribute to the input field. If not provided, a unique name will be computed.",disabled:"Disables the input field making it unreactive to user interactions.",readonly:"The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the input field.",validators:'<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.'},ui={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},mi={input:{description:"Emitted each time the input text (or file) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textual input value."}},"update:modelValue":{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textual input value."}},"update:overallProgress":{description:"Emitted continuously while uploading a file. When using the <code>multiple</code> option, this is the overall progress of all the files together.<br>You can use it with <code>:overall-progress.sync</code> in Vue 2, or <code>v-model:overall-progress</code> in Vue 3."},focus:{description:"Emitted on input focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on input blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},hi={data:()=>({propsDescs:pi,slots:ui}),computed:{props(){return{...F.props,...L.props}},events(){return F.emits.reduce((o,d)=>(o[d]=mi[d]||{})&&o,{})}}};var bi=v(hi,[["render",ri]]);const fi=e("w-input");function wi(o,d,m,h,x,u){const s=c("ui-component-title"),l=c("examples"),a=c("api");return _(),g("main",null,[t(s,null,{default:n(()=>[fi]),_:1}),t(l),t(a)])}const _i={components:{Examples:ai,Api:bi}};var vi=v(_i,[["render",wi]]);export{vi as default};
