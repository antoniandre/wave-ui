import{a as S}from"./axios.b29be18e.js";import{r,o as g,g as y,a as t,w as n,b as e,d as l,t as u,h as v,_,P as F,C as L}from"./index.bf2cfd71.js";const R=l("p",null,[e("By default the "),l("span",{class:"code"},"w-input"),e(` component has a label inside the input field, that moves up
above the field on focus or when the field has some content or a placeholder.`),l("br")],-1),O=l("p",null,[e(`By default the label is positioned inside and on field focus, it will move up above the field
and shrink.`),l("br"),e(`
It is possible to keep it inside and disable the animation with the `),l("code",null,"static-label"),e(" option.")],-1),$=l("p",{class:"mt4"},[l("strong",null,"Note:"),e(` If this option is set to true and the label is positioned inside when a placeholder is set,
only the placeholder will be displayed.
`)],-1),A={class:"grow mb4",style:{"min-width":"200px"}},U=l("div",{class:"title4 mb2"},"Underline style (default)",-1),D={class:"grow mb4",style:{"min-width":"200px"}},M=l("div",{class:"title4 mb2"},"Outline style",-1),j=l("p",{class:"mb4"},[e("Like in most components, you can set a "),l("code",null,"color"),e(" for the text and a "),l("code",null,"bg-color"),e(` for the
background.`),l("br"),e(`
By default, the text has the "`),l("span",{class:"code"},"primary"),e('" color.')],-1),V={class:"grow mb4",style:{"min-width":"200px"}},q=l("div",{class:"title4 mb2"},"Underline style (default)",-1),H={class:"grow mb4",style:{"min-width":"200px"}},E=l("div",{class:"title4 mb2"},"Outline style",-1),C=l("p",null,[e('The default label position is "'),l("span",{class:"code"},"inside"),e('", but it can also be "'),l("span",{class:"code"},"left"),e('" or "'),l("span",{class:"code"},"right"),e('".')],-1),B=l("span",{class:"code"},"w-input",-1),N=l("span",{class:"code"},"w-input",-1),W=l("br",null,null,-1),Y=l("span",{class:"code"},"label",-1),z=l("p",null,[e("It is convenient to have the label inside the "),l("span",{class:"code"},"w-input"),e(` component to let it handle
the field focus event on label click.`),l("br"),e(`
The `),l("span",{class:"code"},"label"),e(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),J=l("span",{class:"purple mx1"},"Inside",-1),G=l("span",{class:"green mr1"},"Left",-1),X=l("span",{class:"red ml1"},"Right",-1),K=l("div",{class:"title4 mb2"},"Label outside",-1),Q=l("div",{class:"title4 mt6 mb2"},"Label inside",-1),Z=l("strong",{class:"code mx1"},"w-input",-1),ee=l("code",null,'type="file"',-1),ne=l("p",null,[e("By default, the file input will show a preview of the image you are uploading."),l("br"),e(`
If the file can't be previewed a file icon will show up to the right of the field instead of
a preview.`)],-1),te=l("p",null,`When uploading a larger file, a spinner will show up to the right of the field until
the file is completely transferred.`,-1),le=l("p",null,[e("The file preview can be disabled if not needed by setting the "),l("code",null,"preview"),e(` prop to
`),l("code",null,"false"),e(".")],-1),ie=l("p",null,[e("By default, when the file is not an image, the preview will be a generic file icon."),l("br"),e(`
It is possible to set a custom icon instead.`)],-1),oe=l("p",null,"You could even compute a variable to show a different icon per detected file type.",-1),se=l("p",null,[e(`On the frontend, you can read all the file details and contents on input when the user selects
a file, or you can provide a v-model that Wave UI will fill up with a single file or array if `),l("code",null,"multiple"),e(" is set to "),l("code",null,"true"),e(".")],-1),ae={class:"mt3"},de=l("p",null,[e("The v-model can be used to access the files added by the user."),l("br")],-1),re=l("strong",null,"Important",-1),ue=l("br",null,null,-1),ce=l("br",null,null,-1),pe=l("code",null,"null",-1),me={class:"mt3"},he=v(`<p>There are different ways you can do this. The 2 most common ways would be to:</p><ul><li>Use Axios or other AJAX library to send the file on <strong class="code">w-form</strong> <code>@success</code> (emitted upon successful validation).</li><li>Use the <code>allow-submit</code> option on the <strong class="code">w-form</strong> as well as
<code>enctype=&quot;multipart/form-data&quot;</code>, <code>method</code> and <code>action</code> fields
in order to submit the file in a full HTML built-in process (But this will reload
the page).
</li></ul><p class="mt3">The first option is recommended for a more modern approach. Here are two examples how to
set this up.</p>`,3),be=l("p",null,[e("In this example, the file is uploaded to "),l("a",{href:"https://filebin.net",target:"_blank"},"Filebin"),e(`.
The file is transferred as `),l("code",null,"application/x-www-form-urlencoded"),e(` similar to
`),l("code",null,"application/octet-stream"),e(` with the file in the body of the request as per the
expectation of the Filebin API.`),l("br"),e(`
Note: you need to disable any ad blocker and refresh the page before trying this example.`)],-1),fe=l("p",null,[e("In this example (more common case) the file is transferred as "),l("code",null,"multipart/form-data"),e(` with
the use of `),l("code",null,"FormData"),e(" and using the same HTML as the previous example.")],-1),we=l("p",null,`Here is an example of a very minimalist way to receive and display the file on server side
with PHP. Of course you should add more checks, and move the temporary uploaded file when all
the checks are passed.`,-1),ge=l("p",null,"When multiple files are allowed, the v-model will contain an array even if there is a single file.",-1),ye=l("p",null,[e(`If you try to upload a very large file, you will see the progress value of the file transfer will
be updated as the transfer goes on (e.g. :loading="overallProgress").`),l("br"),e(`
You can also show a self-updated progress bar with the `),l("code",null,"show-progress"),e(" prop."),l("br"),e(`
Using a `),l("code",null,"v-model:overall-progress"),e(`, you will also receive the total percentage of completion
of all the files being uploaded.
`)],-1),ve={class:"my4"},_e={class:"ml2"},xe=l("p",null,[e("Resetting the "),l("code",null,'input type="file"'),e(" is as easy as setting its value to null (native HTML way).")],-1),Pe=l("p",null,[e('The default type is "'),l("span",{class:"code"},"text"),e('" but the types below are also supported.')],-1),ke=l("p",null,[e("On desktop you will not notice the difference between the fields "),l("span",{class:"code"},"email"),e(", "),l("span",{class:"code"},"tel"),e(`,
`),l("span",{class:"code"},"url"),e(`, and the default text type. But on touch devices, the keyboard is adapted to the
type of input.`)],-1),Se=l("h3",null,"Textual inputs",-1),Fe={class:"input-types"},Ie=l("div",{class:"code mb1"},'type="date"',-1),Te={class:"mt4"},Le=l("div",{class:"code mb1"},'type="email"',-1),Re={class:"mt4"},Oe=l("div",{class:"code mb1"},'type="number"',-1),$e={class:"mt4"},Ae=l("div",{class:"code mb1"},'type="password"',-1),Ue={class:"mt4"},De=l("div",{class:"code mb1"},'type="search"',-1),Me={class:"mt4"},je=l("div",{class:"code mb1"},'type="tel"',-1),Ve={class:"mt4"},qe=l("div",{class:"code mb1"},'type="text"',-1),He={class:"mt4"},Ee=l("div",{class:"code mb1"},'type="time"',-1),Ce={class:"mt4"},Be=l("div",{class:"code mb1"},'type="url"',-1),Ne={class:"mt4"},We=l("span",{class:"code mb1 mr2"},'type="hidden"',-1),Ye=l("span",{class:"code"},"w-input",-1),ze=l("h3",null,"Other types of inputs",-1),Je=l("p",null,"For all the other types of input listed below, a specific Wave UI component should be used instead:",-1),Ge={class:"other-input-types"},Xe=v('<li class="mt1"><span class="code mr2">type=&quot;button&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;checkbox&quot;</span><span class="grey">use <code>w-checkbox</code> instead</span></li>',2),Ke={class:"mt1"},Qe=l("span",{class:"code mr2"},'type="color"',-1),Ze=l("span",{class:"grey"},[e("use "),l("code",null,"w-color-picker"),e(" instead")],-1),en=v('<li class="mt1"><span class="code mr2">type=&quot;image&quot;</span><span class="grey">use the <code>img</code> HTML tag instead</span></li><li class="mt1"><span class="code mr2">type=&quot;radio&quot;</span><span class="grey">use <code>w-radio</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;range&quot;</span><span class="grey">use <code>w-slider</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;reset&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;submit&quot;</span><span class="grey">use <code>w-button</code> instead</span></li>',5),nn={class:"mt1"},tn=l("span",{class:"code mr2"},'type="time"',-1),ln=l("span",{class:"grey"},[e("use "),l("code",null,"w-time-picker"),e(" instead")],-1);function on(o,d,m,h,x,p){const s=r("title-link"),i=r("w-input"),a=r("example"),f=r("w-flex"),w=r("alert"),b=r("w-icon"),I=r("w-button"),T=r("w-form"),P=r("ssh-pre"),k=r("w-tag");return g(),y("div",null,[t(s,{h2:""},{default:n(()=>[e("Default")]),_:1}),R,t(a,null,{pug:n(()=>[e("w-input Label")]),html:n(()=>[e(`<w-input>Label</w-input>
`)]),default:n(()=>[t(i,null,{default:n(()=>[e("Label")]),_:1})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Label and / or placeholder")]),_:1}),t(a,null,{pug:n(()=>[e(`w-input.mb4(label="Label")
w-input.mb4(placeholder="Placeholder")
w-input.mb4(label="Label" placeholder="Placeholder")`)]),html:n(()=>[e(`<w-input
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
`)]),default:n(()=>[t(i,{class:"mb4",label:"Label"}),t(i,{class:"mb4",placeholder:"Placeholder"}),t(i,{class:"mb4",label:"Label",placeholder:"Placeholder"})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Static label")]),_:1}),O,$,t(a,null,{pug:n(()=>[e('w-input(label="Label" static-label)')]),html:n(()=>[e(`<w-input
  label="Label"
  static-label>
</w-input>
`)]),default:n(()=>[t(i,{label:"Label","static-label":""})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Outline")]),_:1}),t(a,null,{pug:n(()=>[e(`w-input.mb6(label="Outline" outline)
w-input.mb3(placeholder="Outline" outline)
w-input.mb3(label="Outline" color="info" outline)
w-input.mb3(label="Outline" bg-color="blue-light5" outline)`)]),html:n(()=>[e(`<w-input
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
`)]),default:n(()=>[t(i,{class:"mb6",label:"Outline",outline:""}),t(i,{class:"mb3",placeholder:"Outline",outline:""}),t(i,{class:"mb3",label:"Outline",color:"info",outline:""}),t(i,{class:"mb3",label:"Outline","bg-color":"blue-light5",outline:""})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Shadow")]),_:1}),t(a,null,{pug:n(()=>[e(`w-input.mb4(label="Shadow" shadow)
w-input(label="Outline with shadow" shadow outline)`)]),html:n(()=>[e(`<w-input
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
`)]),default:n(()=>[t(i,{class:"mb4",label:"Shadow",shadow:""}),t(i,{label:"Outline with shadow",shadow:"",outline:""})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Round & Tile")]),_:1}),t(a,null,{pug:n(()=>[e(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(label="Round" round)
    w-input.mb1(label="Round and shadow" round shadow)
    w-input.mb1(label="Tile" tile)

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(label="Round" round outline)
    w-input.mb1(label="Round and shadow" round outline shadow)
    w-input.mb1(label="Tile" tile outline)`)]),html:n(()=>[e(`<w-flex wrap :gap="2">
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
`)]),default:n(()=>[t(f,{wrap:"",gap:2},{default:n(()=>[l("div",A,[U,t(i,{class:"mb1",label:"Round",round:""}),t(i,{class:"mb1",label:"Round and shadow",round:"",shadow:""}),t(i,{label:"Tile",tile:""})]),l("div",D,[M,t(i,{class:"mb1",label:"Round",round:"",outline:""}),t(i,{class:"mb1",label:"Round and shadow",round:"",outline:"",shadow:""}),t(i,{class:"mb1",label:"Tile",tile:"",outline:""})])]),_:1})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Colors")]),_:1}),j,t(a,null,{pug:n(()=>[e(`w-flex(wrap :gap="2")
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
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" model-value="Some content" outline)`)]),html:n(()=>[e(`<w-flex wrap :gap="2">
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
`)]),default:n(()=>[t(f,{wrap:"",gap:2},{default:n(()=>[l("div",V,[q,t(i,{class:"mb1","model-value":"Some content"}),t(i,{class:"mb1",color:"red","model-value":"Some content"}),t(i,{class:"mb1","bg-color":"red-light5","model-value":"Some content"}),t(i,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content"}),t(i,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content"})]),l("div",H,[E,t(i,{class:"mb1","model-value":"Some content",outline:""}),t(i,{class:"mb1",color:"red","model-value":"Some content",outline:""}),t(i,{class:"mb1","bg-color":"red-light5","model-value":"Some content",outline:""}),t(i,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content",outline:""}),t(i,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content",outline:""})])]),_:1})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Label position")]),_:1}),C,t(w,{tip:""},{default:n(()=>[e("You could also set a label outside of the "),B,e(` and display it nicely with flex.
But it is convenient to let the `),N,e(` component handle the field focus event on
label click.`),W,e(`
The `),Y,e(` prop is here for this purpose and accepts any HTML.
`)]),_:1}),t(a,null,{pug:n(()=>[e(`w-input.mb3(label="Inside" label-position="inside" outline)
w-input.mb3(label="Left" label-position="left" outline)
w-input.mb3(label="Right" label-position="right" outline)`)]),html:n(()=>[e(`<w-input
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
`)]),default:n(()=>[t(i,{class:"mb3",label:"Inside","label-position":"inside",outline:""}),t(i,{class:"mb3",label:"Left","label-position":"left",outline:""}),t(i,{class:"mb3",label:"Right","label-position":"right",outline:""})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Custom label via default slot")]),_:1}),z,t(a,null,{pug:n(()=>[e(`w-input.mb3(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-input.mb3(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-input.mb3(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`)]),html:n(()=>[e(`<w-input
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
`)]),default:n(()=>[t(i,{class:"mb3","label-position":"inside",outline:""},{default:n(()=>[t(b,{class:"orange"},{default:n(()=>[e("mdi mdi-arrow-right")]),_:1}),J,t(b,{class:"orange"},{default:n(()=>[e("mdi mdi-arrow-left")]),_:1})]),_:1}),t(i,{class:"mb3","label-position":"left",outline:""},{default:n(()=>[G,t(b,{class:"orange"},{default:n(()=>[e("mdi mdi-arrow-right")]),_:1})]),_:1}),t(i,{class:"mb3","label-position":"right",outline:""},{default:n(()=>[t(b,{class:"orange"},{default:n(()=>[e("mdi mdi-arrow-left")]),_:1}),X]),_:1})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Inner icons")]),_:1}),t(a,null,{pug:n(()=>[e(`.title4.mb2 Label outside
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
w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")`)]),html:n(()=>[e(`<div class="title4 mb2">
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
</w-input>`)]),js:n(()=>[e(`data: () => ({
  isPassword: true
})
`)]),default:n(()=>[K,t(i,{class:"mb2",label:"Username","label-position":"left",outline:"","inner-icon-left":"mdi mdi-account"}),t(i,{class:"mb2",label:"Password",type:o.isPassword?"password":"text","inner-icon-left":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","inner-icon-right":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":d[0]||(d[0]=c=>o.isPassword=!o.isPassword)},null,8,["type","inner-icon-left","inner-icon-right"]),t(i,{class:"mb2",label:"Password",type:o.isPassword?"password":"text","label-position":"left",outline:"","inner-icon-right":o.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":d[1]||(d[1]=c=>o.isPassword=!o.isPassword)},null,8,["type","inner-icon-right"]),t(i,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-left":"wi-check"}),t(i,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-right":"wi-check"}),Q,t(i,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-left":"wi-search"}),t(i,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-right":"wi-search"})]),_:1}),t(s,{h2:""},{default:n(()=>[e("Disabled & readonly")]),_:1}),t(a,null,{pug:n(()=>[e(`w-input.mb3(label="Disabled & empty" outline disabled)
w-input.mb3(label="Disabled & filled" model-value="Some content" outline disabled)
w-input.mb3(label="Readonly & empty" outline readonly)
w-input.mb3(label="Readonly & filled" model-value="Some content" outline readonly)`)]),html:n(()=>[e(`<w-input
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
`)]),default:n(()=>[t(i,{class:"mb3",label:"Disabled & empty",outline:"",disabled:""}),t(i,{class:"mb3",label:"Disabled & filled","model-value":"Some content",outline:"",disabled:""}),t(i,{class:"mb3",label:"Readonly & empty",outline:"",readonly:""}),t(i,{class:"mb3",label:"Readonly & filled","model-value":"Some content",outline:"",readonly:""})]),_:1}),t(s,{h2:"",slug:"file-input"},{default:n(()=>[e("File input")]),_:1}),t(w,{success:""},{default:n(()=>[e("A "),Z,e(" field only needs a "),ee,e(" to become a file input.")]),_:1}),ne,te,t(a,null,{pug:n(()=>[e('w-input(type="file") File')]),html:n(()=>[e(`<w-input type="file">File</w-input>
`)]),default:n(()=>[t(i,{type:"file"},{default:n(()=>[e("File")]),_:1})]),_:1}),t(s,{h3:""},{default:n(()=>[e("Disabled preview")]),_:1}),le,t(a,null,{pug:n(()=>[e('w-input(type="file" :preview="false") File')]),html:n(()=>[e(`<w-input type="file" :preview="false">File</w-input>
`)]),default:n(()=>[t(i,{type:"file",preview:!1},{default:n(()=>[e("File")]),_:1})]),_:1}),t(s,{h3:""},{default:n(()=>[e("Custom preview icon")]),_:1}),ie,t(a,null,{pug:n(()=>[e('w-input(type="file" preview="mdi mdi-star") File')]),html:n(()=>[e(`<w-input type="file" preview="mdi mdi-star">File</w-input>
`)]),default:n(()=>[t(i,{type:"file",preview:"mdi mdi-star"},{default:n(()=>[e("File")]),_:1})]),_:1}),oe,t(a,null,{pug:n(()=>[e(`w-input(
  type="file"
  v-model="file"
  :preview="file && filePreviewIcon") File`)]),html:n(()=>[e(`<w-input
  type="file"
  v-model="file"
  :preview="file && filePreviewIcon">
  File
</w-input>`)]),js:n(()=>[e(`data: () => ({
  file: null
}),

computed: {
  filePreviewIcon () {
    const { extension } = this.file
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
`)]),default:n(()=>[t(i,{type:"file",modelValue:o.file3,"onUpdate:modelValue":d[2]||(d[2]=c=>o.file3=c),preview:o.file3&&p.filePreviewIcon},{default:n(()=>[e("File")]),_:1},8,["modelValue","preview"])]),_:1}),t(s,{h3:""},{default:n(()=>[e("Reading the files")]),_:1}),se,t(s,{class:"mt6",h4:""},{default:n(()=>[e("Via @input")]),_:1}),t(a,null,{pug:n(()=>[e(`w-input(type="file" @input="onFileInput") File

pre.mt3 `+u("{{ file }}"))]),html:n(()=>[e(`<w-input type="file" @input="onFileInput>File</w-input>

<pre class="mt3">`+u("{{ files }}")+"</pre>")]),js:n(()=>[e(`data: () => ({
  file: null
}),

methods: {
  onFileInput (file) {
    this.file = file
  }
}
`)]),default:n(()=>[t(i,{type:"file",onInput:p.onFileInput},{default:n(()=>[e("File")]),_:1},8,["onInput"]),l("pre",ae,u(o.file1),1)]),_:1}),t(s,{class:"mt6 mb2",h4:""},{default:n(()=>[e("Via v-model")]),_:1}),de,t(w,{warning:""},{default:n(()=>[re,ue,e(`Even if a v-model is allowing a two-way binding,
there is no way to prefill an input type file:
that would be a security breach and is therefore not allowed in HTML.`),ce,e("However you can still set the v-model to "),pe,e(" to reset the field.")]),_:1}),t(a,null,{pug:n(()=>[e(`w-input(type="file" v-model="file") File

pre.mt3 `+u("{{ file }}"))]),html:n(()=>[e(`<w-input type="file" v-model="file">File</w-input>

<pre class="mt3">`+u("{{ file }}")+"</pre>")]),js:n(()=>[e(`data: () => ({
  file: null
})
`)]),default:n(()=>[t(i,{type:"file",modelValue:o.file2,"onUpdate:modelValue":d[3]||(d[3]=c=>o.file2=c)},{default:n(()=>[e("File")]),_:1},8,["modelValue"]),l("pre",me,u(o.file2),1)]),_:1}),t(s,{h3:""},{default:n(()=>[e("Uploading the file to a backend server")]),_:1}),he,t(s,{class:"mt8",h4:""},{default:n(()=>[e("1st example")]),_:1}),be,t(a,{reactive:"","external-js":"https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js"},{pug:n(()=>[e(`w-form(@success="onFormSuccess")
  w-input(
    type="file"
    v-model="file"
    :validators="[() => file || 'Please add a file']") File
  w-button.d-flex.mla.mt4(type="submit" :loading="loading") Send`)]),html:n(()=>[e(`<w-form @success="onFormSuccess">
  <w-input
    type="file"
    v-model="file"
    :validators="[() => file || 'Please add a file']">
    File
  </w-input>

  <w-button
    type="submit"
    :loading="loading"
    class="d-flex mla mt4">
    Send
  </w-button>
</w-form>`)]),js:n(()=>[e(`methods: {
  // This method uses the Axios library.
  // import axios from 'axios' // If you use NPM.
  async onFormSuccess () {
    this.loading = true

    const binURL = 'https://filebin.net/waveui-`+u(o.todayFormatted)+u(o.userIP)+`'
    const { name: filename, file } = this.file

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
`,1)]),default:n(()=>[t(T,{onSuccess:p.onFormSuccess},{default:n(()=>[t(i,{type:"file",modelValue:o.file5,"onUpdate:modelValue":d[4]||(d[4]=c=>o.file5=c),validators:[()=>o.file5||"Please add a file"]},{default:n(()=>[e("File")]),_:1},8,["modelValue","validators"]),t(I,{class:"d-flex mla mt4",type:"submit",loading:o.loading},{default:n(()=>[e("Send")]),_:1},8,["loading"])]),_:1},8,["onSuccess"])]),_:1}),t(s,{class:"mt8",h4:""},{default:n(()=>[e("2nd example")]),_:1}),fe,t(P,{language:"js",label:"JavaScript",dark:o.$store.state.darkMode},{default:n(()=>[e(`import axios from 'axios'

export default {
  data: () => ({
    file: null
  }),

  methods: {
    onFormSuccess () {
      const formData = new FormData()
      formData.append('file', this.file.file)

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
`)]),_:1},8,["dark"]),we,t(P,{language:"php",label:"PHP",dark:o.$store.state.darkMode},{default:n(()=>[e(`<?php
// You can check the structure of the file upload.
// print_r($_FILES);die;

// Set the content type to the file type for output.
header('Content-Type: ' . $_FILES['file']['type']);

// Read and output the uploaded file.
die(file_get_contents($_FILES['file']['tmp_name']));
?>
`)]),_:1},8,["dark"]),t(s,{h3:""},{default:n(()=>[e("Accepting specific file extensions")]),_:1}),t(a,null,{pug:n(()=>[e('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg, .webp")')]),html:n(()=>[e(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg, .webp">
</w-input>
`)]),default:n(()=>[t(i,{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg, .webp"})]),_:1}),t(s,{h3:""},{default:n(()=>[e("Multiple files upload")]),_:1}),ge,t(a,null,{pug:n(()=>[e('w-input(type="file" label="File" multiple)')]),html:n(()=>[e(`<w-input
  type="file"
  label="File"
  multiple>
</w-input>
`)]),default:n(()=>[t(i,{type:"file",label:"File",multiple:""})]),_:1}),t(s,{h3:""},{default:n(()=>[e("Loading state")]),_:1}),ye,t(a,null,{pug:n(()=>[e(`w-input(type="file"
  v-model="files"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green") File

.my4 Overall progress: `+u("{{ overallProgress }}")+`

w-flex
  | Files:
  pre.ml2 `+u("{{ files }}"))]),html:n(()=>[e(`<w-input type="file"
  v-model="files4"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green">
  File
</w-input>

<div class="my4">
  Overall progress: `+u("{{ overallProgress }}")+`
</div>

<w-flex>
  Files:
  <pre class="ml2">`+u("{{ files }}")+`</pre>
</w-flex>`)]),js:n(()=>[e(`data: () => ({
  files: [],
  overallProgress: 0
})
`)]),default:n(()=>[t(i,{type:"file",modelValue:o.files4,"onUpdate:modelValue":d[5]||(d[5]=c=>o.files4=c),"overall-progress":o.overallProgress,"onUpdate:overallProgress":d[6]||(d[6]=c=>o.overallProgress=c),multiple:"","show-progress":"","progress-color":"green"},{default:n(()=>[e("File")]),_:1},8,["modelValue","overall-progress"]),l("div",ve,"Overall progress: "+u(o.overallProgress),1),t(f,null,{default:n(()=>[e("Files:"),l("pre",_e,u(o.files4),1)]),_:1})]),_:1}),t(s,{h3:""},{default:n(()=>[e("Clearing the field")]),_:1}),xe,t(s,{h2:""},{default:n(()=>[e("Types")]),_:1}),Pe,ke,Se,t(a,null,{pug:n(()=>[e(`<ul.input-types>
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
    <w-input(type="hidden")<`)]),html:n(()=>[e(`<ul class="input-types">
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
`)]),default:n(()=>[l("ul",Fe,[l("li",null,[Ie,t(i,{type:"date"},{default:n(()=>[e("date")]),_:1})]),l("li",Te,[Le,t(i,{type:"email"},{default:n(()=>[e("Email address")]),_:1})]),l("li",Re,[Oe,t(i,{type:"number",min:"0",max:"100"},{default:n(()=>[e("Age")]),_:1})]),l("li",$e,[Ae,t(i,{type:"password"},{default:n(()=>[e("Password")]),_:1})]),l("li",Ue,[De,t(i,{type:"search"},{default:n(()=>[e("Search")]),_:1})]),l("li",Me,[je,t(i,{type:"tel"},{default:n(()=>[e("Tel")]),_:1})]),l("li",Ve,[qe,t(i,{type:"text"},{default:n(()=>[e("Text")]),_:1})]),l("li",He,[Ee,t(i,{type:"time"},{default:n(()=>[e("time")]),_:1})]),l("li",Ce,[Be,t(i,{type:"url"},{default:n(()=>[e("Url")]),_:1})]),l("li",Ne,[We,e("The hidden type is also accepted - but you don't need a "),Ye,e(" for that!"),t(i,{type:"hidden"})])])]),_:1}),ze,Je,l("ul",Ge,[Xe,l("li",Ke,[Qe,Ze,t(k,{class:"px1 ml1",color:"red",outline:""},{default:n(()=>[e("coming soon")]),_:1})]),en,l("li",nn,[tn,ln,t(k,{class:"px1 ml1",color:"red",outline:""},{default:n(()=>[e("coming soon")]),_:1})])])])}const sn={data:()=>({isPassword:!0,file1:null,file2:null,file3:null,files4:[],file5:null,loading:!1,overallProgress:void 0,todayFormatted:"",userIP:""}),computed:{filePreviewIcon(){const{extension:o}=this.file3;switch(console.log(o,this.file3),o){case"jpg":case"png":case"gif":case"pdf":return`mdi mdi-file-${o}-box`;case"jpeg":return"mdi mdi-file-jpg-box";case"svg":case"webp":return"mdi mdi-image";case"mov":return"mdi mdi-filmstrip";case"zip":return"mdi mdi-folder-zip";default:return"mdi mdi-file"}}},methods:{onFileInput(o){this.file1=o},getTodaysDate(){const o=new Date,d=o.getDate().toString().padStart(2,0),m=(o.getMonth()+1).toString().padStart(2,0),h=o.getFullYear();this.todayFormatted=`${h}${m}${d}`},async getUserIP(){await S.get("https://api.ipify.org").then(o=>{this.userIP=o.data.replace(/\./g,"")})},async onFormSuccess(){this.loading=!0;const o=`https://filebin.net/waveui-${this.userIP}${this.todayFormatted}`,{name:d,file:m}=this.file5;S.post(`${o}/${d}`,m).then(h=>{this.loading=!1,this.$waveui.notify(`<div>
              File transferred successfully.<br>Now check your
              <a href="${o}" target="_blank">
                Filebin <i class="w-icon mdi mdi-open-in-new"></i></a>.
              </div>`,"success",0)},()=>{this.$waveui.notify("<div>An error occurred.<br>Is Filebin down?<br>Or is there a problem with the file?</div>","error",0),this.loading=!1})}},created(){this.getTodaysDate(),this.getUserIP()}},an=_(sn,[["render",on]]),dn=l("div",{class:"w-divider my12"},null,-1);function rn(o,d,m,h,x,p){const s=r("title-link"),i=r("component-api");return g(),y("div",null,[dn,t(s,{class:"title1",h2:""},{default:n(()=>[e("API")]),_:1}),t(i,{class:"mt0",items:p.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(i,{items:o.slots,title:"Slots"},null,8,["items"]),t(i,{items:p.events,title:"Events"},null,8,["items"])])}const un={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the input field.<br>Gets updated on text input.',type:"Applies a native HTML <code>type</code> attribute.",label:"Sets a visible label for the input field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",color:`Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the input field's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,minlength:"Applies the native HTML <code>minlength</code> attribute.",maxlength:"Applies the native HTML <code>maxlength</code> attribute which prevents typing more than this amount of characters.",step:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>step</code> attribute which sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>.',min:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>min</code> attribute which sets an integer or floating minimum number.',max:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>max</code> attribute which sets an integer or floating maximum number.',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the input field, giving it a round look.",shadow:"Applies a drop shadow to the input field.",tile:"Removes the default border-radius and sets sharp edges on the input field.",name:"Provide a native HTML <code>name</code> attribute to the input field. If not provided, a unique name will be computed.",disabled:"Disables the input field making it unreactive to user interactions.",readonly:"The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the input field.",validators:'<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.',loading:"When set to <code>true</code>, displays an indefinite-value progress bar below the input field. If a number is given, it will be the value of the progress."},cn={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},pn={input:{description:"Emitted each time the input text (or file) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textual input value."}},"update:modelValue":{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textual input value."}},"update:overallProgress":{description:"Emitted continuously while uploading a file. When using the <code>multiple</code> option, this is the overall progress of all the files together.<br>You can use it with <code>:overall-progress.sync</code> in Vue 2, or <code>v-model:overall-progress</code> in Vue 3."},focus:{description:"Emitted on input focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on input blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},mn={data:()=>({propsDescs:un,slots:cn}),computed:{props(){return{...F.props,...L.props}},events(){return F.emits.reduce((o,d)=>(o[d]=pn[d]||{})&&o,{})}}},hn=_(mn,[["render",rn]]);function bn(o,d,m,h,x,p){const s=r("ui-component-title"),i=r("examples"),a=r("api");return g(),y("main",null,[t(s,null,{default:n(()=>[e("w-input")]),_:1}),t(i),t(a)])}const fn={components:{Examples:an,Api:hn}},yn=_(fn,[["render",bn]]);export{yn as default};
