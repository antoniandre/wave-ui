import{a as F}from"./axios-BimPEqV4.js";import{r,o as v,g as h,a as t,w as l,b as n,d as i,t as u,h as y,_ as x,Q as I,D as R}from"./index-Bw-2NxhK.js";const O={class:"grow mb4",style:{"min-width":"200px"}},$={class:"grow mb4",style:{"min-width":"200px"}},A={class:"grow mb4",style:{"min-width":"200px"}},D={class:"grow mb4",style:{"min-width":"200px"}},U={class:"mt3"},M={class:"mt3"},j={class:"my4"},V={class:"ml2"},q={class:"input-types"},H={class:"mt4"},E={class:"mt4"},C={class:"mt4"},B={class:"mt4"},N={class:"mt4"},W={class:"mt4"},Y={class:"mt4"},z={class:"mt4"},J={class:"mt4"},G={class:"other-input-types"},Q={class:"mt1"},X={class:"mt1"};function K(s,e,b,f,P,m){const a=r("title-link"),o=r("w-input"),d=r("example"),g=r("w-flex"),c=r("alert"),w=r("w-icon"),T=r("w-button"),L=r("w-form"),k=r("ssh-pre"),S=r("w-tag");return v(),h("div",null,[t(a,{h2:""},{default:l(()=>e[7]||(e[7]=[n("Default")])),_:1}),e[140]||(e[140]=i("p",null,[n("By default the "),i("span",{class:"code"},"w-input"),n(` component has a label inside the input field, that moves up
above the field on focus or when the field has some content or a placeholder.`),i("br")],-1)),t(d,null,{pug:l(()=>e[9]||(e[9]=[n("w-input Label")])),html:l(()=>e[10]||(e[10]=[n(`<w-input>Label</w-input>
`)])),default:l(()=>[t(o,null,{default:l(()=>e[8]||(e[8]=[n("Label")])),_:1})]),_:1}),t(a,{h2:""},{default:l(()=>e[11]||(e[11]=[n("Label and / or placeholder")])),_:1}),t(d,null,{pug:l(()=>e[12]||(e[12]=[n(`w-input.mb4(label="Label")
w-input.mb4(placeholder="Placeholder")
w-input.mb4(label="Label" placeholder="Placeholder")`)])),html:l(()=>e[13]||(e[13]=[n(`<w-input
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
`)])),default:l(()=>[t(o,{class:"mb4",label:"Label"}),t(o,{class:"mb4",placeholder:"Placeholder"}),t(o,{class:"mb4",label:"Label",placeholder:"Placeholder"})]),_:1}),t(a,{h2:""},{default:l(()=>e[14]||(e[14]=[n("Static label")])),_:1}),e[141]||(e[141]=i("p",null,[n(`By default the label is positioned inside and on field focus, it will move up above the field
and shrink.`),i("br"),n(`
It is possible to keep it inside and disable the animation with the `),i("code",null,"static-label"),n(" option.")],-1)),e[142]||(e[142]=i("p",{class:"mt4"},[i("strong",null,"Note:"),n(` If this option is set to true and the label is positioned inside when a placeholder is set,
only the placeholder will be displayed.
`)],-1)),t(d,null,{pug:l(()=>e[15]||(e[15]=[n('w-input(label="Label" static-label)')])),html:l(()=>e[16]||(e[16]=[n(`<w-input
  label="Label"
  static-label>
</w-input>
`)])),default:l(()=>[t(o,{label:"Label","static-label":""})]),_:1}),t(a,{h2:""},{default:l(()=>e[17]||(e[17]=[n("Outline")])),_:1}),t(d,null,{pug:l(()=>e[18]||(e[18]=[n(`w-input.mb6(label="Outline" outline)
w-input.mb3(placeholder="Outline" outline)
w-input.mb3(label="Outline" color="info" outline)
w-input.mb3(label="Outline" bg-color="blue-light5" outline)`)])),html:l(()=>e[19]||(e[19]=[n(`<w-input
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
`)])),default:l(()=>[t(o,{class:"mb6",label:"Outline",outline:""}),t(o,{class:"mb3",placeholder:"Outline",outline:""}),t(o,{class:"mb3",label:"Outline",color:"info",outline:""}),t(o,{class:"mb3",label:"Outline","bg-color":"blue-light5",outline:""})]),_:1}),t(a,{h2:""},{default:l(()=>e[20]||(e[20]=[n("Shadow")])),_:1}),t(d,null,{pug:l(()=>e[21]||(e[21]=[n(`w-input.mb4(label="Shadow" shadow)
w-input(label="Outline with shadow" shadow outline)`)])),html:l(()=>e[22]||(e[22]=[n(`<w-input
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
`)])),default:l(()=>[t(o,{class:"mb4",label:"Shadow",shadow:""}),t(o,{label:"Outline with shadow",shadow:"",outline:""})]),_:1}),t(a,{h2:""},{default:l(()=>e[23]||(e[23]=[n("Round & Tile")])),_:1}),t(d,null,{pug:l(()=>e[26]||(e[26]=[n(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(label="Round" round)
    w-input.mb1(label="Round and shadow" round shadow)
    w-input.mb1(label="Tile" tile)

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(label="Round" round outline)
    w-input.mb1(label="Round and shadow" round outline shadow)
    w-input.mb1(label="Tile" tile outline)`)])),html:l(()=>e[27]||(e[27]=[n(`<w-flex wrap :gap="2">
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
`)])),default:l(()=>[t(g,{wrap:"",gap:2},{default:l(()=>[i("div",O,[e[24]||(e[24]=i("div",{class:"title4 mb2"},"Underline style (default)",-1)),t(o,{class:"mb1",label:"Round",round:""}),t(o,{class:"mb1",label:"Round and shadow",round:"",shadow:""}),t(o,{label:"Tile",tile:""})]),i("div",$,[e[25]||(e[25]=i("div",{class:"title4 mb2"},"Outline style",-1)),t(o,{class:"mb1",label:"Round",round:"",outline:""}),t(o,{class:"mb1",label:"Round and shadow",round:"",outline:"",shadow:""}),t(o,{class:"mb1",label:"Tile",tile:"",outline:""})])]),_:1})]),_:1}),t(a,{h2:""},{default:l(()=>e[28]||(e[28]=[n("Colors")])),_:1}),e[143]||(e[143]=i("p",{class:"mb4"},[n("Like in most components, you can set a "),i("code",null,"color"),n(" for the text and a "),i("code",null,"bg-color"),n(` for the
background.`),i("br"),n(`
By default, the text has the "`),i("span",{class:"code"},"primary"),n('" color.')],-1)),t(d,null,{pug:l(()=>e[31]||(e[31]=[n(`w-flex(wrap :gap="2")
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
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" model-value="Some content" outline)`)])),html:l(()=>e[32]||(e[32]=[n(`<w-flex wrap :gap="2">
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
`)])),default:l(()=>[t(g,{wrap:"",gap:2},{default:l(()=>[i("div",A,[e[29]||(e[29]=i("div",{class:"title4 mb2"},"Underline style (default)",-1)),t(o,{class:"mb1","model-value":"Some content"}),t(o,{class:"mb1",color:"red","model-value":"Some content"}),t(o,{class:"mb1","bg-color":"red-light5","model-value":"Some content"}),t(o,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content"}),t(o,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content"})]),i("div",D,[e[30]||(e[30]=i("div",{class:"title4 mb2"},"Outline style",-1)),t(o,{class:"mb1","model-value":"Some content",outline:""}),t(o,{class:"mb1",color:"red","model-value":"Some content",outline:""}),t(o,{class:"mb1","bg-color":"red-light5","model-value":"Some content",outline:""}),t(o,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content",outline:""}),t(o,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content",outline:""})])]),_:1})]),_:1}),t(a,{h2:""},{default:l(()=>e[33]||(e[33]=[n("Label position")])),_:1}),e[144]||(e[144]=i("p",null,[n('The default label position is "'),i("span",{class:"code"},"inside"),n('", but it can also be "'),i("span",{class:"code"},"left"),n('" or "'),i("span",{class:"code"},"right"),n('".')],-1)),t(c,{tip:""},{default:l(()=>e[34]||(e[34]=[n("You could also set a label outside of the "),i("span",{class:"code"},"w-input",-1),n(` and display it nicely with flex.
But it is convenient to let the `),i("span",{class:"code"},"w-input",-1),n(` component handle the field focus event on
label click.`),i("br",null,null,-1),n(`
The `),i("span",{class:"code"},"label",-1),n(` prop is here for this purpose and accepts any HTML.
`)])),_:1}),t(d,null,{pug:l(()=>e[35]||(e[35]=[n(`w-input.mb3(label="Inside" label-position="inside" outline)
w-input.mb3(label="Left" label-position="left" outline)
w-input.mb3(label="Right" label-position="right" outline)`)])),html:l(()=>e[36]||(e[36]=[n(`<w-input
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
`)])),default:l(()=>[t(o,{class:"mb3",label:"Inside","label-position":"inside",outline:""}),t(o,{class:"mb3",label:"Left","label-position":"left",outline:""}),t(o,{class:"mb3",label:"Right","label-position":"right",outline:""})]),_:1}),t(a,{h2:""},{default:l(()=>e[37]||(e[37]=[n("Custom label via default slot")])),_:1}),e[145]||(e[145]=i("p",null,[n("It is convenient to have the label inside the "),i("span",{class:"code"},"w-input"),n(` component to let it handle
the field focus event on label click.`),i("br"),n(`
The `),i("span",{class:"code"},"label"),n(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1)),t(d,null,{pug:l(()=>e[45]||(e[45]=[n(`w-input.mb3(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-input.mb3(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-input.mb3(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`)])),html:l(()=>e[46]||(e[46]=[n(`<w-input
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
`)])),default:l(()=>[t(o,{class:"mb3","label-position":"inside",outline:""},{default:l(()=>[t(w,{class:"orange"},{default:l(()=>e[38]||(e[38]=[n("mdi mdi-arrow-right")])),_:1}),e[40]||(e[40]=i("span",{class:"purple mx1"},"Inside",-1)),t(w,{class:"orange"},{default:l(()=>e[39]||(e[39]=[n("mdi mdi-arrow-left")])),_:1})]),_:1}),t(o,{class:"mb3","label-position":"left",outline:""},{default:l(()=>[e[42]||(e[42]=i("span",{class:"green mr1"},"Left",-1)),t(w,{class:"orange"},{default:l(()=>e[41]||(e[41]=[n("mdi mdi-arrow-right")])),_:1})]),_:1}),t(o,{class:"mb3","label-position":"right",outline:""},{default:l(()=>[t(w,{class:"orange"},{default:l(()=>e[43]||(e[43]=[n("mdi mdi-arrow-left")])),_:1}),e[44]||(e[44]=i("span",{class:"red ml1"},"Right",-1))]),_:1})]),_:1}),t(a,{h2:""},{default:l(()=>e[47]||(e[47]=[n("Inner icons")])),_:1}),t(d,null,{pug:l(()=>e[48]||(e[48]=[n(`.title4.mb2 Label outside
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
w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")`)])),html:l(()=>e[49]||(e[49]=[n(`<div class="title4 mb2">
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
</w-input>`)])),js:l(()=>e[50]||(e[50]=[n(`data: () => ({
  isPassword: true
})
`)])),default:l(()=>[e[51]||(e[51]=i("div",{class:"title4 mb2"},"Label outside",-1)),t(o,{class:"mb2",label:"Username","label-position":"left",outline:"","inner-icon-left":"mdi mdi-account"}),t(o,{class:"mb2",label:"Password",type:s.isPassword?"password":"text","inner-icon-left":s.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","inner-icon-right":s.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":e[0]||(e[0]=p=>s.isPassword=!s.isPassword)},null,8,["type","inner-icon-left","inner-icon-right"]),t(o,{class:"mb2",label:"Password",type:s.isPassword?"password":"text","label-position":"left",outline:"","inner-icon-right":s.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":e[1]||(e[1]=p=>s.isPassword=!s.isPassword)},null,8,["type","inner-icon-right"]),t(o,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-left":"wi-check"}),t(o,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-right":"wi-check"}),e[52]||(e[52]=i("div",{class:"title4 mt6 mb2"},"Label inside",-1)),t(o,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-left":"wi-search"}),t(o,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-right":"wi-search"})]),_:1}),t(a,{h2:""},{default:l(()=>e[53]||(e[53]=[n("Disabled & readonly")])),_:1}),t(d,null,{pug:l(()=>e[54]||(e[54]=[n(`w-input.mb3(label="Disabled & empty" outline disabled)
w-input.mb3(label="Disabled & filled" model-value="Some content" outline disabled)
w-input.mb3(label="Readonly & empty" outline readonly)
w-input.mb3(label="Readonly & filled" model-value="Some content" outline readonly)`)])),html:l(()=>e[55]||(e[55]=[n(`<w-input
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
`)])),default:l(()=>[t(o,{class:"mb3",label:"Disabled & empty",outline:"",disabled:""}),t(o,{class:"mb3",label:"Disabled & filled","model-value":"Some content",outline:"",disabled:""}),t(o,{class:"mb3",label:"Readonly & empty",outline:"",readonly:""}),t(o,{class:"mb3",label:"Readonly & filled","model-value":"Some content",outline:"",readonly:""})]),_:1}),t(a,{h2:"",slug:"file-input"},{default:l(()=>e[56]||(e[56]=[n("File input")])),_:1}),t(c,{success:""},{default:l(()=>e[57]||(e[57]=[n("A "),i("strong",{class:"code mx1"},"w-input",-1),n(" field only needs a "),i("code",null,'type="file"',-1),n(" to become a file input.")])),_:1}),e[146]||(e[146]=i("p",null,[n("By default, the file input will show a preview of the image you are uploading."),i("br"),n(`
If the file can't be previewed a file icon will show up to the right of the field instead of
a preview.`)],-1)),e[147]||(e[147]=i("p",null,`When uploading a larger file, a spinner will show up to the right of the field until
the file is completely transferred.`,-1)),t(d,null,{pug:l(()=>e[59]||(e[59]=[n('w-input(type="file") File')])),html:l(()=>e[60]||(e[60]=[n(`<w-input type="file">File</w-input>
`)])),default:l(()=>[t(o,{type:"file"},{default:l(()=>e[58]||(e[58]=[n("File")])),_:1})]),_:1}),t(a,{h3:""},{default:l(()=>e[61]||(e[61]=[n("Disabled preview")])),_:1}),e[148]||(e[148]=i("p",null,[n("The file preview can be disabled if not needed by setting the "),i("code",null,"preview"),n(` prop to
`),i("code",null,"false"),n(".")],-1)),t(d,null,{pug:l(()=>e[63]||(e[63]=[n('w-input(type="file" :preview="false") File')])),html:l(()=>e[64]||(e[64]=[n(`<w-input type="file" :preview="false">File</w-input>
`)])),default:l(()=>[t(o,{type:"file",preview:!1},{default:l(()=>e[62]||(e[62]=[n("File")])),_:1})]),_:1}),t(a,{h3:""},{default:l(()=>e[65]||(e[65]=[n("Custom preview icon")])),_:1}),e[149]||(e[149]=i("p",null,[n("By default, when the file is not an image, the preview will be a generic file icon."),i("br"),n(`
It is possible to set a custom icon instead.`)],-1)),t(d,null,{pug:l(()=>e[67]||(e[67]=[n('w-input(type="file" preview="mdi mdi-star") File')])),html:l(()=>e[68]||(e[68]=[n(`<w-input type="file" preview="mdi mdi-star">File</w-input>
`)])),default:l(()=>[t(o,{type:"file",preview:"mdi mdi-star"},{default:l(()=>e[66]||(e[66]=[n("File")])),_:1})]),_:1}),e[150]||(e[150]=i("p",null,"You could even compute a variable to show a different icon per detected file type.",-1)),t(d,null,{pug:l(()=>e[70]||(e[70]=[n(`w-input(
  type="file"
  v-model="file"
  :preview="file && filePreviewIcon") File`)])),html:l(()=>e[71]||(e[71]=[n(`<w-input
  type="file"
  v-model="file"
  :preview="file && filePreviewIcon">
  File
</w-input>`)])),js:l(()=>e[72]||(e[72]=[n(`data: () => ({
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
`)])),default:l(()=>[t(o,{type:"file",modelValue:s.file3,"onUpdate:modelValue":e[2]||(e[2]=p=>s.file3=p),preview:s.file3&&m.filePreviewIcon},{default:l(()=>e[69]||(e[69]=[n("File")])),_:1},8,["modelValue","preview"])]),_:1}),t(a,{h3:""},{default:l(()=>e[73]||(e[73]=[n("Reading the files")])),_:1}),e[151]||(e[151]=i("p",null,[n(`On the frontend, you can read all the file details and contents on input when the user selects
a file, or you can provide a v-model that Wave UI will fill up with a single file or array if `),i("code",null,"multiple"),n(" is set to "),i("code",null,"true"),n(".")],-1)),t(a,{class:"mt6",h4:""},{default:l(()=>e[74]||(e[74]=[n("Via @input")])),_:1}),t(d,null,{pug:l(()=>e[76]||(e[76]=[n(`w-input(type="file" @input="onFileInput") File

pre.mt3 `+u("{{ file }}"))])),html:l(()=>e[77]||(e[77]=[n(`<w-input type="file" @input="onFileInput>File</w-input>

<pre class="mt3">`+u("{{ files }}")+"</pre>")])),js:l(()=>e[78]||(e[78]=[n(`data: () => ({
  file: null
}),

methods: {
  onFileInput (file) {
    this.file = file
  }
}
`)])),default:l(()=>[t(o,{type:"file",onInput:m.onFileInput},{default:l(()=>e[75]||(e[75]=[n("File")])),_:1},8,["onInput"]),i("pre",U,u(s.file1),1)]),_:1}),t(a,{class:"mt6 mb2",h4:""},{default:l(()=>e[79]||(e[79]=[n("Via v-model")])),_:1}),e[152]||(e[152]=i("p",null,[n("The v-model can be used to access the files added by the user."),i("br")],-1)),t(c,{warning:""},{default:l(()=>e[80]||(e[80]=[i("strong",null,"Important",-1),i("br",null,null,-1),n(`Even if a v-model is allowing a two-way binding,
there is no way to prefill an input type file:
that would be a security breach and is therefore not allowed in HTML.`),i("br",null,null,-1),n("However you can still set the v-model to "),i("code",null,"null",-1),n(" to reset the field.")])),_:1}),t(d,null,{pug:l(()=>e[82]||(e[82]=[n(`w-input(type="file" v-model="file") File

pre.mt3 `+u("{{ file }}"))])),html:l(()=>e[83]||(e[83]=[n(`<w-input type="file" v-model="file">File</w-input>

<pre class="mt3">`+u("{{ file }}")+"</pre>")])),js:l(()=>e[84]||(e[84]=[n(`data: () => ({
  file: null
})
`)])),default:l(()=>[t(o,{type:"file",modelValue:s.file2,"onUpdate:modelValue":e[3]||(e[3]=p=>s.file2=p)},{default:l(()=>e[81]||(e[81]=[n("File")])),_:1},8,["modelValue"]),i("pre",M,u(s.file2),1)]),_:1}),t(a,{h3:""},{default:l(()=>e[85]||(e[85]=[n("Uploading the file to a backend server")])),_:1}),e[153]||(e[153]=y(`<p>There are different ways you can do this. The 2 most common ways would be to:</p><ul><li>Use Axios or other AJAX library to send the file on <strong class="code">w-form</strong> <code>@success</code> (emitted upon successful validation).</li><li>Use the <code>allow-submit</code> option on the <strong class="code">w-form</strong> as well as
<code>enctype=&quot;multipart/form-data&quot;</code>, <code>method</code> and <code>action</code> fields
in order to submit the file in a full HTML built-in process (But this will reload
the page).
</li></ul><p class="mt3">The first option is recommended for a more modern approach. Here are two examples how to
set this up.</p>`,3)),t(a,{class:"mt8",h4:""},{default:l(()=>e[86]||(e[86]=[n("1st example")])),_:1}),e[154]||(e[154]=i("p",null,[n("In this example, the file is uploaded to "),i("a",{href:"https://filebin.net",target:"_blank"},"Filebin"),n(`.
The file is transferred as `),i("code",null,"application/x-www-form-urlencoded"),n(` similar to
`),i("code",null,"application/octet-stream"),n(` with the file in the body of the request as per the
expectation of the Filebin API.`),i("br"),n(`
Note: you need to disable any ad blocker and refresh the page before trying this example.`)],-1)),t(d,{reactive:"","external-js":"https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js"},{pug:l(()=>e[89]||(e[89]=[n(`w-form(@success="onFormSuccess")
  w-input(
    type="file"
    v-model="file"
    :validators="[() => file || 'Please add a file']") File
  w-button.d-flex.mla.mt4(type="submit" :loading="loading") Send`)])),html:l(()=>e[90]||(e[90]=[n(`<w-form @success="onFormSuccess">
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
</w-form>`)])),js:l(()=>[n(`methods: {
  // This method uses the Axios library.
  // import axios from 'axios' // If you use NPM.
  async onFormSuccess () {
    this.loading = true

    const binURL = 'https://filebin.net/waveui-`+u(s.todayFormatted)+u(s.userIP)+`'
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
`,1)]),default:l(()=>[t(L,{onSuccess:m.onFormSuccess},{default:l(()=>[t(o,{type:"file",modelValue:s.file5,"onUpdate:modelValue":e[4]||(e[4]=p=>s.file5=p),validators:[()=>s.file5||"Please add a file"]},{default:l(()=>e[87]||(e[87]=[n("File")])),_:1},8,["modelValue","validators"]),t(T,{class:"d-flex mla mt4",type:"submit",loading:s.loading},{default:l(()=>e[88]||(e[88]=[n("Send")])),_:1},8,["loading"])]),_:1},8,["onSuccess"])]),_:1}),t(a,{class:"mt8",h4:""},{default:l(()=>e[91]||(e[91]=[n("2nd example")])),_:1}),e[155]||(e[155]=i("p",null,[n("In this example (more common case) the file is transferred as "),i("code",null,"multipart/form-data"),n(` with
the use of `),i("code",null,"FormData"),n(" and using the same HTML as the previous example.")],-1)),t(k,{language:"js",label:"JavaScript",dark:s.$store.state.darkMode},{default:l(()=>e[92]||(e[92]=[n(`import axios from 'axios'

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
`)])),_:1},8,["dark"]),e[156]||(e[156]=i("p",null,`Here is an example of a very minimalist way to receive and display the file on server side
with PHP. Of course you should add more checks, and move the temporary uploaded file when all
the checks are passed.`,-1)),t(k,{language:"php",label:"PHP",dark:s.$store.state.darkMode},{default:l(()=>e[93]||(e[93]=[n(`<?php
// You can check the structure of the file upload.
// print_r($_FILES);die;

// Set the content type to the file type for output.
header('Content-Type: ' . $_FILES['file']['type']);

// Read and output the uploaded file.
die(file_get_contents($_FILES['file']['tmp_name']));
?>
`)])),_:1},8,["dark"]),t(a,{h3:""},{default:l(()=>e[94]||(e[94]=[n("Accepting specific file extensions")])),_:1}),t(d,null,{pug:l(()=>e[95]||(e[95]=[n('w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg, .webp")')])),html:l(()=>e[96]||(e[96]=[n(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg, .webp">
</w-input>
`)])),default:l(()=>[t(o,{type:"file",label:"File",accept:".jpg, .jpeg, .png, .gif, .svg, .webp"})]),_:1}),t(a,{h3:""},{default:l(()=>e[97]||(e[97]=[n("Multiple files upload")])),_:1}),e[157]||(e[157]=i("p",null,"When multiple files are allowed, the v-model will contain an array even if there is a single file.",-1)),t(d,null,{pug:l(()=>e[98]||(e[98]=[n('w-input(type="file" label="File" multiple)')])),html:l(()=>e[99]||(e[99]=[n(`<w-input
  type="file"
  label="File"
  multiple>
</w-input>
`)])),default:l(()=>[t(o,{type:"file",label:"File",multiple:""})]),_:1}),t(a,{h3:""},{default:l(()=>e[100]||(e[100]=[n("Loading state")])),_:1}),e[158]||(e[158]=i("p",null,[n(`If you try to upload a very large file, you will see the progress value of the file transfer will
be updated as the transfer goes on (e.g. :loading="overallProgress").`),i("br"),n(`
You can also show a self-updated progress bar with the `),i("code",null,"show-progress"),n(" prop."),i("br"),n(`
Using a `),i("code",null,"v-model:overall-progress"),n(`, you will also receive the total percentage of completion
of all the files being uploaded.
`)],-1)),t(d,null,{pug:l(()=>e[103]||(e[103]=[n(`w-input(type="file"
  v-model="files"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green") File

.my4 Overall progress: `+u("{{ overallProgress }}")+`

w-flex
  | Files:
  pre.ml2 `+u("{{ files }}"))])),html:l(()=>e[104]||(e[104]=[n(`<w-input type="file"
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
</w-flex>`)])),js:l(()=>e[105]||(e[105]=[n(`data: () => ({
  files: [],
  overallProgress: 0
})
`)])),default:l(()=>[t(o,{type:"file",modelValue:s.files4,"onUpdate:modelValue":e[5]||(e[5]=p=>s.files4=p),"overall-progress":s.overallProgress,"onUpdate:overallProgress":e[6]||(e[6]=p=>s.overallProgress=p),multiple:"","show-progress":"","progress-color":"green"},{default:l(()=>e[101]||(e[101]=[n("File")])),_:1},8,["modelValue","overall-progress"]),i("div",j,"Overall progress: "+u(s.overallProgress),1),t(g,null,{default:l(()=>[e[102]||(e[102]=n("Files:")),i("pre",V,u(s.files4),1)]),_:1})]),_:1}),t(a,{h3:""},{default:l(()=>e[106]||(e[106]=[n("Clearing the field")])),_:1}),e[159]||(e[159]=i("p",null,[n("Resetting the "),i("code",null,'input type="file"'),n(" is as easy as setting its value to null (native HTML way).")],-1)),t(a,{h2:""},{default:l(()=>e[107]||(e[107]=[n("Types")])),_:1}),e[160]||(e[160]=i("p",null,[n('The default type is "'),i("span",{class:"code"},"text"),n('" but the types below are also supported.')],-1)),e[161]||(e[161]=i("p",null,[n("On desktop you will not notice the difference between the fields "),i("span",{class:"code"},"email"),n(", "),i("span",{class:"code"},"tel"),n(`,
`),i("span",{class:"code"},"url"),n(`, and the default text type. But on touch devices, the keyboard is adapted to the
type of input.`)],-1)),e[162]||(e[162]=i("h3",null,"Textual inputs",-1)),t(d,null,{pug:l(()=>e[130]||(e[130]=[n(`<ul.input-types>
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
    <w-input(type="hidden")<`)])),html:l(()=>e[131]||(e[131]=[n(`<ul class="input-types">
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
`)])),default:l(()=>[i("ul",q,[i("li",null,[e[109]||(e[109]=i("div",{class:"code mb1"},'type="date"',-1)),t(o,{type:"date"},{default:l(()=>e[108]||(e[108]=[n("date")])),_:1})]),i("li",H,[e[111]||(e[111]=i("div",{class:"code mb1"},'type="email"',-1)),t(o,{type:"email"},{default:l(()=>e[110]||(e[110]=[n("Email address")])),_:1})]),i("li",E,[e[113]||(e[113]=i("div",{class:"code mb1"},'type="number"',-1)),t(o,{type:"number",min:"0",max:"100"},{default:l(()=>e[112]||(e[112]=[n("Age")])),_:1})]),i("li",C,[e[115]||(e[115]=i("div",{class:"code mb1"},'type="password"',-1)),t(o,{type:"password"},{default:l(()=>e[114]||(e[114]=[n("Password")])),_:1})]),i("li",B,[e[117]||(e[117]=i("div",{class:"code mb1"},'type="search"',-1)),t(o,{type:"search"},{default:l(()=>e[116]||(e[116]=[n("Search")])),_:1})]),i("li",N,[e[119]||(e[119]=i("div",{class:"code mb1"},'type="tel"',-1)),t(o,{type:"tel"},{default:l(()=>e[118]||(e[118]=[n("Tel")])),_:1})]),i("li",W,[e[121]||(e[121]=i("div",{class:"code mb1"},'type="text"',-1)),t(o,{type:"text"},{default:l(()=>e[120]||(e[120]=[n("Text")])),_:1})]),i("li",Y,[e[123]||(e[123]=i("div",{class:"code mb1"},'type="time"',-1)),t(o,{type:"time"},{default:l(()=>e[122]||(e[122]=[n("time")])),_:1})]),i("li",z,[e[125]||(e[125]=i("div",{class:"code mb1"},'type="url"',-1)),t(o,{type:"url"},{default:l(()=>e[124]||(e[124]=[n("Url")])),_:1})]),i("li",J,[e[126]||(e[126]=i("span",{class:"code mb1 mr2"},'type="hidden"',-1)),e[127]||(e[127]=n("The hidden type is also accepted - but you don't need a ")),e[128]||(e[128]=i("span",{class:"code"},"w-input",-1)),e[129]||(e[129]=n(" for that!")),t(o,{type:"hidden"})])])]),_:1}),e[163]||(e[163]=i("h3",null,"Other types of inputs",-1)),e[164]||(e[164]=i("p",null,"For all the other types of input listed below, a specific Wave UI component should be used instead:",-1)),i("ul",G,[e[138]||(e[138]=y('<li class="mt1"><span class="code mr2">type=&quot;button&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;checkbox&quot;</span><span class="grey">use <code>w-checkbox</code> instead</span></li>',2)),i("li",Q,[e[133]||(e[133]=i("span",{class:"code mr2"},'type="color"',-1)),e[134]||(e[134]=i("span",{class:"grey"},[n("use "),i("code",null,"w-color-picker"),n(" instead")],-1)),t(S,{class:"px1 ml1",color:"red",outline:""},{default:l(()=>e[132]||(e[132]=[n("coming soon")])),_:1})]),e[139]||(e[139]=y('<li class="mt1"><span class="code mr2">type=&quot;image&quot;</span><span class="grey">use the <code>img</code> HTML tag instead</span></li><li class="mt1"><span class="code mr2">type=&quot;radio&quot;</span><span class="grey">use <code>w-radio</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;range&quot;</span><span class="grey">use <code>w-slider</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;reset&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;submit&quot;</span><span class="grey">use <code>w-button</code> instead</span></li>',5)),i("li",X,[e[136]||(e[136]=i("span",{class:"code mr2"},'type="time"',-1)),e[137]||(e[137]=i("span",{class:"grey"},[n("use "),i("code",null,"w-time-picker"),n(" instead")],-1)),t(S,{class:"px1 ml1",color:"red",outline:""},{default:l(()=>e[135]||(e[135]=[n("coming soon")])),_:1})])])])}const Z={data:()=>({isPassword:!0,file1:null,file2:null,file3:null,files4:[],file5:null,loading:!1,overallProgress:void 0,todayFormatted:"",userIP:""}),computed:{filePreviewIcon(){const{extension:s}=this.file3;switch(console.log(s,this.file3),s){case"jpg":case"png":case"gif":case"pdf":return`mdi mdi-file-${s}-box`;case"jpeg":return"mdi mdi-file-jpg-box";case"svg":case"webp":return"mdi mdi-image";case"mov":return"mdi mdi-filmstrip";case"zip":return"mdi mdi-folder-zip";default:return"mdi mdi-file"}}},methods:{onFileInput(s){this.file1=s},getTodaysDate(){const s=new Date,e=s.getDate().toString().padStart(2,0),b=(s.getMonth()+1).toString().padStart(2,0),f=s.getFullYear();this.todayFormatted=`${f}${b}${e}`},async getUserIP(){await F.get("https://api.ipify.org").then(s=>{this.userIP=s.data.replace(/\./g,"")})},async onFormSuccess(){this.loading=!0;const s=`https://filebin.net/waveui-${this.userIP}${this.todayFormatted}`,{name:e,file:b}=this.file5;F.post(`${s}/${e}`,b).then(f=>{this.loading=!1,this.$waveui.notify(`<div>
              File transferred successfully.<br>Now check your
              <a href="${s}" target="_blank">
                Filebin <i class="w-icon mdi mdi-open-in-new"></i></a>.
              </div>`,"success",0)},()=>{this.$waveui.notify("<div>An error occurred.<br>Is Filebin down?<br>Or is there a problem with the file?</div>","error",0),this.loading=!1})}},created(){this.getTodaysDate(),this.getUserIP()}},_=x(Z,[["render",K]]);function ee(s,e,b,f,P,m){const a=r("title-link"),o=r("component-api");return v(),h("div",null,[e[1]||(e[1]=i("div",{class:"w-divider my12"},null,-1)),t(a,{class:"title1",h2:""},{default:l(()=>e[0]||(e[0]=[n("API")])),_:1}),t(o,{class:"mt0",items:m.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(o,{items:s.slots,title:"Slots"},null,8,["items"]),t(o,{items:m.events,title:"Events"},null,8,["items"])])}const ne={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the input field.<br>Gets updated on text input.',type:"Applies a native HTML <code>type</code> attribute.",label:"Sets a visible label for the input field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",color:`Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the input field's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,minlength:"Applies the native HTML <code>minlength</code> attribute.",maxlength:"Applies the native HTML <code>maxlength</code> attribute which prevents typing more than this amount of characters.",step:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>step</code> attribute which sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>.',min:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>min</code> attribute which sets an integer or floating minimum number.',max:'For <code>type="number"</code> inputs.<br>Applies the native HTML <code>max</code> attribute which sets an integer or floating maximum number.',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the input field, giving it a round look.",shadow:"Applies a drop shadow to the input field.",tile:"Removes the default border-radius and sets sharp edges on the input field.",name:"Provide a native HTML <code>name</code> attribute to the input field. If not provided, a unique name will be computed.",disabled:"Disables the input field making it unreactive to user interactions.",readonly:"The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the input field.",validators:'<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.',loading:"When set to <code>true</code>, displays an indefinite-value progress bar below the input field. If a number is given, it will be the value of the progress."},le={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},"icon-left":{description:"The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>",params:{inputId:'The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>'}},"icon-right":{description:"The right icon, if the <code>innerIconRight</code> prop is not flexible enough.",params:{inputId:'The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>'}}},te={input:{description:"Emitted each time the input text (or file) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textual input value."}},"update:modelValue":{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textual input value."}},"update:overallProgress":{description:"Emitted continuously while uploading a file. When using the <code>multiple</code> option, this is the overall progress of all the files together.<br>You can use it with <code>:overall-progress.sync</code> in Vue 2, or <code>v-model:overall-progress</code> in Vue 3."},focus:{description:"Emitted on input focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on input blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},ie={data:()=>({propsDescs:ne,slots:le}),computed:{props(){return{...I.props,...R.props}},events(){return I.emits.reduce((s,e)=>(s[e]=te[e]||{})&&s,{})}}},oe=x(ie,[["render",ee]]);function se(s,e,b,f,P,m){const a=r("ui-component-title"),o=r("examples"),d=r("api");return v(),h("main",null,[t(a,null,{default:l(()=>e[0]||(e[0]=[n("w-input")])),_:1}),t(o),t(d)])}const ae={components:{Examples:_,Api:oe}},ue=x(ae,[["render",se]]);export{ue as default};
