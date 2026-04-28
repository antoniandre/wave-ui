import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s,m as c}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as l}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{F as u,w as d}from"./index-BhRaCC4I.js";import{t as f}from"./axios-CwFNjbpr.js";var p={class:`grow mb4`,style:{"min-width":`200px`}},m={class:`grow mb4`,style:{"min-width":`200px`}},h={class:`grow mb4`,style:{"min-width":`200px`}},g={class:`grow mb4`,style:{"min-width":`200px`}},_={class:`mt3`},v={class:`mt3`},y={class:`my4`},b={class:`ml2`},x={class:`input-types`},S={class:`mt4`},C={class:`mt4`},w={class:`mt4`},T={class:`mt4`},E={class:`mt4`},D={class:`mt4`},O={class:`mt4`},k={class:`mt4`},A={class:`mt4`},j={class:`other-input-types`},M={class:`mt1`},N={class:`mt1`};function P(l,u,d,f,P,F){let I=e(`title-link`),L=e(`w-input`),R=e(`example`),z=e(`w-flex`),B=e(`alert`),V=e(`w-icon`),H=e(`w-button`),U=e(`w-form`),W=e(`ssh-pre`),G=e(`w-tag`);return s(),i(`div`,null,[a(I,{h2:``},{default:t(()=>[...u[7]||=[o(`Default`,-1)]]),_:1}),u[140]||=r(`p`,null,[o(`By default the `),r(`span`,{class:`code`},`w-input`),o(` component has a label inside the input field, that moves up
above the field on focus or when the field has some content or a placeholder.`),r(`br`)],-1),a(R,null,{pug:t(()=>[...u[9]||=[o(`w-input Label`,-1)]]),html:t(()=>[...u[10]||=[o(`<w-input>Label</w-input>
`,-1)]]),default:t(()=>[a(L,null,{default:t(()=>[...u[8]||=[o(`Label`,-1)]]),_:1})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[11]||=[o(`Label and / or placeholder`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[12]||=[o(`w-input.mb4(label="Label")
w-input.mb4(placeholder="Placeholder")
w-input.mb4(label="Label" placeholder="Placeholder")`,-1)]]),html:t(()=>[...u[13]||=[o(`<w-input
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
`,-1)]]),default:t(()=>[a(L,{class:`mb4`,label:`Label`}),a(L,{class:`mb4`,placeholder:`Placeholder`}),a(L,{class:`mb4`,label:`Label`,placeholder:`Placeholder`})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[14]||=[o(`Static label`,-1)]]),_:1}),u[141]||=r(`p`,null,[o(`By default the label is positioned inside and on field focus, it will move up above the field
and shrink.`),r(`br`),o(`
It is possible to keep it inside and disable the animation with the `),r(`code`,null,`static-label`),o(` option.`)],-1),u[142]||=r(`p`,{class:`mt4`},[r(`strong`,null,`Note:`),o(` If this option is set to true and the label is positioned inside when a placeholder is set,
only the placeholder will be displayed.
`)],-1),a(R,null,{pug:t(()=>[...u[15]||=[o(`w-input(label="Label" static-label)`,-1)]]),html:t(()=>[...u[16]||=[o(`<w-input
  label="Label"
  static-label>
</w-input>
`,-1)]]),default:t(()=>[a(L,{label:`Label`,"static-label":``})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[17]||=[o(`Outline`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[18]||=[o(`w-input.mb6(label="Outline" outline)
w-input.mb3(placeholder="Outline" outline)
w-input.mb3(label="Outline" color="info" outline)
w-input.mb3(label="Outline" bg-color="blue-light5" outline)`,-1)]]),html:t(()=>[...u[19]||=[o(`<w-input
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
`,-1)]]),default:t(()=>[a(L,{class:`mb6`,label:`Outline`,outline:``}),a(L,{class:`mb3`,placeholder:`Outline`,outline:``}),a(L,{class:`mb3`,label:`Outline`,color:`info`,outline:``}),a(L,{class:`mb3`,label:`Outline`,"bg-color":`blue-light5`,outline:``})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[20]||=[o(`Shadow`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[21]||=[o(`w-input.mb4(label="Shadow" shadow)
w-input(label="Outline with shadow" shadow outline)`,-1)]]),html:t(()=>[...u[22]||=[o(`<w-input
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
`,-1)]]),default:t(()=>[a(L,{class:`mb4`,label:`Shadow`,shadow:``}),a(L,{label:`Outline with shadow`,shadow:``,outline:``})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[23]||=[o(`Round & Tile`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[26]||=[o(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(label="Round" round)
    w-input.mb1(label="Round and shadow" round shadow)
    w-input.mb1(label="Tile" tile)

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(label="Round" round outline)
    w-input.mb1(label="Round and shadow" round outline shadow)
    w-input.mb1(label="Tile" tile outline)`,-1)]]),html:t(()=>[...u[27]||=[o(`<w-flex wrap :gap="2">
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
`,-1)]]),default:t(()=>[a(z,{wrap:``,gap:2},{default:t(()=>[r(`div`,p,[u[24]||=r(`div`,{class:`title4 mb2`},`Underline style (default)`,-1),a(L,{class:`mb1`,label:`Round`,round:``}),a(L,{class:`mb1`,label:`Round and shadow`,round:``,shadow:``}),a(L,{label:`Tile`,tile:``})]),r(`div`,m,[u[25]||=r(`div`,{class:`title4 mb2`},`Outline style`,-1),a(L,{class:`mb1`,label:`Round`,round:``,outline:``}),a(L,{class:`mb1`,label:`Round and shadow`,round:``,outline:``,shadow:``}),a(L,{class:`mb1`,label:`Tile`,tile:``,outline:``})])]),_:1})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[28]||=[o(`Colors`,-1)]]),_:1}),u[143]||=r(`p`,{class:`mb4`},[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the text and a `),r(`code`,null,`bg-color`),o(` for the
background.`),r(`br`),o(`
By default, the text has the "`),r(`span`,{class:`code`},`primary`),o(`" color.`)],-1),a(R,null,{pug:t(()=>[...u[31]||=[o(`w-flex(wrap :gap="2")
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
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" model-value="Some content" outline)`,-1)]]),html:t(()=>[...u[32]||=[o(`<w-flex wrap :gap="2">
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
`,-1)]]),default:t(()=>[a(z,{wrap:``,gap:2},{default:t(()=>[r(`div`,h,[u[29]||=r(`div`,{class:`title4 mb2`},`Underline style (default)`,-1),a(L,{class:`mb1`,"model-value":`Some content`}),a(L,{class:`mb1`,color:`red`,"model-value":`Some content`}),a(L,{class:`mb1`,"bg-color":`red-light5`,"model-value":`Some content`}),a(L,{class:`mb1`,color:`red-dark1`,"bg-color":`red-light5`,"model-value":`Some content`}),a(L,{class:`mb1`,color:`orange-dark1`,"bg-color":`orange-light5`,"model-value":`Some content`})]),r(`div`,g,[u[30]||=r(`div`,{class:`title4 mb2`},`Outline style`,-1),a(L,{class:`mb1`,"model-value":`Some content`,outline:``}),a(L,{class:`mb1`,color:`red`,"model-value":`Some content`,outline:``}),a(L,{class:`mb1`,"bg-color":`red-light5`,"model-value":`Some content`,outline:``}),a(L,{class:`mb1`,color:`red-dark1`,"bg-color":`red-light5`,"model-value":`Some content`,outline:``}),a(L,{class:`mb1`,color:`orange-dark1`,"bg-color":`orange-light5`,"model-value":`Some content`,outline:``})])]),_:1})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[33]||=[o(`Label position`,-1)]]),_:1}),u[144]||=r(`p`,null,[o(`The default label position is "`),r(`span`,{class:`code`},`inside`),o(`", but it can also be "`),r(`span`,{class:`code`},`left`),o(`" or "`),r(`span`,{class:`code`},`right`),o(`".`)],-1),a(B,{tip:``},{default:t(()=>[...u[34]||=[o(`You could also set a label outside of the `,-1),r(`span`,{class:`code`},`w-input`,-1),o(` and display it nicely with flex.
But it is convenient to let the `,-1),r(`span`,{class:`code`},`w-input`,-1),o(` component handle the field focus event on
label click.`,-1),r(`br`,null,null,-1),o(`
The `,-1),r(`span`,{class:`code`},`label`,-1),o(` prop is here for this purpose and accepts any HTML.
`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[35]||=[o(`w-input.mb3(label="Inside" label-position="inside" outline)
w-input.mb3(label="Left" label-position="left" outline)
w-input.mb3(label="Right" label-position="right" outline)`,-1)]]),html:t(()=>[...u[36]||=[o(`<w-input
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
`,-1)]]),default:t(()=>[a(L,{class:`mb3`,label:`Inside`,"label-position":`inside`,outline:``}),a(L,{class:`mb3`,label:`Left`,"label-position":`left`,outline:``}),a(L,{class:`mb3`,label:`Right`,"label-position":`right`,outline:``})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[37]||=[o(`Custom label via default slot`,-1)]]),_:1}),u[145]||=r(`p`,null,[o(`It is convenient to have the label inside the `),r(`span`,{class:`code`},`w-input`),o(` component to let it handle
the field focus event on label click.`),r(`br`),o(`
The `),r(`span`,{class:`code`},`label`),o(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),a(R,null,{pug:t(()=>[...u[45]||=[o(`w-input.mb3(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-input.mb3(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-input.mb3(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`,-1)]]),html:t(()=>[...u[46]||=[o(`<w-input
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
`,-1)]]),default:t(()=>[a(L,{class:`mb3`,"label-position":`inside`,outline:``},{default:t(()=>[a(V,{class:`orange`},{default:t(()=>[...u[38]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),u[40]||=r(`span`,{class:`purple mx1`},`Inside`,-1),a(V,{class:`orange`},{default:t(()=>[...u[39]||=[o(`mdi mdi-arrow-left`,-1)]]),_:1})]),_:1}),a(L,{class:`mb3`,"label-position":`left`,outline:``},{default:t(()=>[u[42]||=r(`span`,{class:`green mr1`},`Left`,-1),a(V,{class:`orange`},{default:t(()=>[...u[41]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1})]),_:1}),a(L,{class:`mb3`,"label-position":`right`,outline:``},{default:t(()=>[a(V,{class:`orange`},{default:t(()=>[...u[43]||=[o(`mdi mdi-arrow-left`,-1)]]),_:1}),u[44]||=r(`span`,{class:`red ml1`},`Right`,-1)]),_:1})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[47]||=[o(`Inner icons`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[48]||=[o(`.title4.mb2 Label outside
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
w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")`,-1)]]),html:t(()=>[...u[49]||=[o(`<div class="title4 mb2">
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
</w-input>`,-1)]]),js:t(()=>[...u[50]||=[o(`data: () => ({
  isPassword: true
})
`,-1)]]),default:t(()=>[u[51]||=r(`div`,{class:`title4 mb2`},`Label outside`,-1),a(L,{class:`mb2`,label:`Username`,"label-position":`left`,outline:``,"inner-icon-left":`mdi mdi-account`}),a(L,{class:`mb2`,label:`Password`,type:l.isPassword?`password`:`text`,"inner-icon-left":l.isPassword?`mdi mdi-eye-off`:`mdi mdi-eye`,"inner-icon-right":l.isPassword?`mdi mdi-eye-off`:`mdi mdi-eye`,"onClick:innerIconRight":u[0]||=e=>l.isPassword=!l.isPassword},null,8,[`type`,`inner-icon-left`,`inner-icon-right`]),a(L,{class:`mb2`,label:`Password`,type:l.isPassword?`password`:`text`,"label-position":`left`,outline:``,"inner-icon-right":l.isPassword?`mdi mdi-eye-off`:`mdi mdi-eye`,"onClick:innerIconRight":u[1]||=e=>l.isPassword=!l.isPassword},null,8,[`type`,`inner-icon-right`]),a(L,{class:`mb2`,label:`Right`,"label-position":`right`,outline:``,"inner-icon-left":`wi-check`}),a(L,{class:`mb2`,label:`Right`,"label-position":`right`,outline:``,"inner-icon-right":`wi-check`}),u[52]||=r(`div`,{class:`title4 mt6 mb2`},`Label inside`,-1),a(L,{class:`mb2`,label:`Inside`,"label-position":`inside`,outline:``,"inner-icon-left":`wi-search`}),a(L,{class:`mb2`,label:`Inside`,"label-position":`inside`,outline:``,"inner-icon-right":`wi-search`})]),_:1}),a(I,{h2:``},{default:t(()=>[...u[53]||=[o(`Disabled & readonly`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[54]||=[o(`w-input.mb3(label="Disabled & empty" outline disabled)
w-input.mb3(label="Disabled & filled" model-value="Some content" outline disabled)
w-input.mb3(label="Readonly & empty" outline readonly)
w-input.mb3(label="Readonly & filled" model-value="Some content" outline readonly)`,-1)]]),html:t(()=>[...u[55]||=[o(`<w-input
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
`,-1)]]),default:t(()=>[a(L,{class:`mb3`,label:`Disabled & empty`,outline:``,disabled:``}),a(L,{class:`mb3`,label:`Disabled & filled`,"model-value":`Some content`,outline:``,disabled:``}),a(L,{class:`mb3`,label:`Readonly & empty`,outline:``,readonly:``}),a(L,{class:`mb3`,label:`Readonly & filled`,"model-value":`Some content`,outline:``,readonly:``})]),_:1}),a(I,{h2:``,slug:`file-input`},{default:t(()=>[...u[56]||=[o(`File input`,-1)]]),_:1}),a(B,{success:``},{default:t(()=>[...u[57]||=[o(`A `,-1),r(`strong`,{class:`code mx1`},`w-input`,-1),o(` field only needs a `,-1),r(`code`,null,`type="file"`,-1),o(` to become a file input.`,-1)]]),_:1}),u[146]||=r(`p`,null,[o(`By default, the file input will show a preview of the image you are uploading.`),r(`br`),o(`
If the file can't be previewed a file icon will show up to the right of the field instead of
a preview.`)],-1),u[147]||=r(`p`,null,`When uploading a larger file, a spinner will show up to the right of the field until
the file is completely transferred.`,-1),a(R,null,{pug:t(()=>[...u[59]||=[o(`w-input(type="file") File`,-1)]]),html:t(()=>[...u[60]||=[o(`<w-input type="file">File</w-input>
`,-1)]]),default:t(()=>[a(L,{type:`file`},{default:t(()=>[...u[58]||=[o(`File`,-1)]]),_:1})]),_:1}),a(I,{h3:``},{default:t(()=>[...u[61]||=[o(`Disabled preview`,-1)]]),_:1}),u[148]||=r(`p`,null,[o(`The file preview can be disabled if not needed by setting the `),r(`code`,null,`preview`),o(` prop to
`),r(`code`,null,`false`),o(`.`)],-1),a(R,null,{pug:t(()=>[...u[63]||=[o(`w-input(type="file" :preview="false") File`,-1)]]),html:t(()=>[...u[64]||=[o(`<w-input type="file" :preview="false">File</w-input>
`,-1)]]),default:t(()=>[a(L,{type:`file`,preview:!1},{default:t(()=>[...u[62]||=[o(`File`,-1)]]),_:1})]),_:1}),a(I,{h3:``},{default:t(()=>[...u[65]||=[o(`Custom preview icon`,-1)]]),_:1}),u[149]||=r(`p`,null,[o(`By default, when the file is not an image, the preview will be a generic file icon.`),r(`br`),o(`
It is possible to set a custom icon instead.`)],-1),a(R,null,{pug:t(()=>[...u[67]||=[o(`w-input(type="file" preview="mdi mdi-star") File`,-1)]]),html:t(()=>[...u[68]||=[o(`<w-input type="file" preview="mdi mdi-star">File</w-input>
`,-1)]]),default:t(()=>[a(L,{type:`file`,preview:`mdi mdi-star`},{default:t(()=>[...u[66]||=[o(`File`,-1)]]),_:1})]),_:1}),u[150]||=r(`p`,null,`You could even compute a variable to show a different icon per detected file type.`,-1),a(R,null,{pug:t(()=>[...u[70]||=[o(`w-input(
  type="file"
  v-model="file"
  :preview="file && filePreviewIcon") File`,-1)]]),html:t(()=>[...u[71]||=[o(`<w-input
  type="file"
  v-model="file"
  :preview="file && filePreviewIcon">
  File
</w-input>`,-1)]]),js:t(()=>[...u[72]||=[o(`data: () => ({
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
`,-1)]]),default:t(()=>[a(L,{type:`file`,modelValue:l.file3,"onUpdate:modelValue":u[2]||=e=>l.file3=e,preview:l.file3&&F.filePreviewIcon},{default:t(()=>[...u[69]||=[o(`File`,-1)]]),_:1},8,[`modelValue`,`preview`])]),_:1}),a(I,{h3:``},{default:t(()=>[...u[73]||=[o(`Reading the files`,-1)]]),_:1}),u[151]||=r(`p`,null,[o(`On the frontend, you can read all the file details and contents on input when the user selects
a file, or you can provide a v-model that Wave UI will fill up with a single file or array if `),r(`code`,null,`multiple`),o(` is set to `),r(`code`,null,`true`),o(`.`)],-1),a(I,{class:`mt6`,h4:``},{default:t(()=>[...u[74]||=[o(`Via @input`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[76]||=[o(`w-input(type="file" @input="onFileInput") File

pre.mt3 `+n(`{{ file }}`),-1)]]),html:t(()=>[...u[77]||=[o(`<w-input type="file" @input="onFileInput>File</w-input>

<pre class="mt3">`+n(`{{ files }}`)+`</pre>`,-1)]]),js:t(()=>[...u[78]||=[o(`data: () => ({
  file: null
}),

methods: {
  onFileInput (file) {
    this.file = file
  }
}
`,-1)]]),default:t(()=>[a(L,{type:`file`,onInput:F.onFileInput},{default:t(()=>[...u[75]||=[o(`File`,-1)]]),_:1},8,[`onInput`]),r(`pre`,_,n(l.file1),1)]),_:1}),a(I,{class:`mt6 mb2`,h4:``},{default:t(()=>[...u[79]||=[o(`Via v-model`,-1)]]),_:1}),u[152]||=r(`p`,null,[o(`The v-model can be used to access the files added by the user.`),r(`br`)],-1),a(B,{warning:``},{default:t(()=>[...u[80]||=[r(`strong`,null,`Important`,-1),r(`br`,null,null,-1),o(`Even if a v-model is allowing a two-way binding,
there is no way to prefill an input type file:
that would be a security breach and is therefore not allowed in HTML.`,-1),r(`br`,null,null,-1),o(`However you can still set the v-model to `,-1),r(`code`,null,`null`,-1),o(` to reset the field.`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[82]||=[o(`w-input(type="file" v-model="file") File

pre.mt3 `+n(`{{ file }}`),-1)]]),html:t(()=>[...u[83]||=[o(`<w-input type="file" v-model="file">File</w-input>

<pre class="mt3">`+n(`{{ file }}`)+`</pre>`,-1)]]),js:t(()=>[...u[84]||=[o(`data: () => ({
  file: null
})
`,-1)]]),default:t(()=>[a(L,{type:`file`,modelValue:l.file2,"onUpdate:modelValue":u[3]||=e=>l.file2=e},{default:t(()=>[...u[81]||=[o(`File`,-1)]]),_:1},8,[`modelValue`]),r(`pre`,v,n(l.file2),1)]),_:1}),a(I,{h3:``},{default:t(()=>[...u[85]||=[o(`Uploading the file to a backend server`,-1)]]),_:1}),u[153]||=c(`<p>There are different ways you can do this. The 2 most common ways would be to:</p><ul><li>Use Axios or other AJAX library to send the file on <strong class="code">w-form</strong> <code>@success</code> (emitted upon successful validation).</li><li>Use the <code>allow-submit</code> option on the <strong class="code">w-form</strong> as well as
<code>enctype=&quot;multipart/form-data&quot;</code>, <code>method</code> and <code>action</code> fields
in order to submit the file in a full HTML built-in process (But this will reload
the page).
</li></ul><p class="mt3">The first option is recommended for a more modern approach. Here are two examples how to
set this up.</p>`,3),a(I,{class:`mt8`,h4:``},{default:t(()=>[...u[86]||=[o(`1st example`,-1)]]),_:1}),u[154]||=r(`p`,null,[o(`In this example, the file is uploaded to `),r(`a`,{href:`https://filebin.net`,target:`_blank`},`Filebin`),o(`.
The file is transferred as `),r(`code`,null,`application/x-www-form-urlencoded`),o(` similar to
`),r(`code`,null,`application/octet-stream`),o(` with the file in the body of the request as per the
expectation of the Filebin API.`),r(`br`),o(`
Note: you need to disable any ad blocker and refresh the page before trying this example.`)],-1),a(R,{reactive:``,"external-js":`https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js`},{pug:t(()=>[...u[89]||=[o(`w-form(@success="onFormSuccess")
  w-input(
    type="file"
    v-model="file"
    :validators="[() => file || 'Please add a file']") File
  w-button.d-flex.mla.mt4(type="submit" :loading="loading") Send`,-1)]]),html:t(()=>[...u[90]||=[o(`<w-form @success="onFormSuccess">
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
</w-form>`,-1)]]),js:t(()=>[o(`methods: {
  // This method uses the Axios library.
  // import axios from 'axios' // If you use NPM.
  async onFormSuccess () {
    this.loading = true

    const binURL = 'https://filebin.net/waveui-`+n(l.todayFormatted)+n(l.userIP)+`'
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
`,1)]),default:t(()=>[a(U,{onSuccess:F.onFormSuccess},{default:t(()=>[a(L,{type:`file`,modelValue:l.file5,"onUpdate:modelValue":u[4]||=e=>l.file5=e,validators:[()=>l.file5||`Please add a file`]},{default:t(()=>[...u[87]||=[o(`File`,-1)]]),_:1},8,[`modelValue`,`validators`]),a(H,{class:`d-flex mla mt4`,type:`submit`,loading:l.loading},{default:t(()=>[...u[88]||=[o(`Send`,-1)]]),_:1},8,[`loading`])]),_:1},8,[`onSuccess`])]),_:1}),a(I,{class:`mt8`,h4:``},{default:t(()=>[...u[91]||=[o(`2nd example`,-1)]]),_:1}),u[155]||=r(`p`,null,[o(`In this example (more common case) the file is transferred as `),r(`code`,null,`multipart/form-data`),o(` with
the use of `),r(`code`,null,`FormData`),o(` and using the same HTML as the previous example.`)],-1),a(W,{language:`js`,label:`JavaScript`,dark:l.$store.state.darkMode},{default:t(()=>[...u[92]||=[o(`import axios from 'axios'

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
`,-1)]]),_:1},8,[`dark`]),u[156]||=r(`p`,null,`Here is an example of a very minimalist way to receive and display the file on server side
with PHP. Of course you should add more checks, and move the temporary uploaded file when all
the checks are passed.`,-1),a(W,{language:`php`,label:`PHP`,dark:l.$store.state.darkMode},{default:t(()=>[...u[93]||=[o(`<?php
// You can check the structure of the file upload.
// print_r($_FILES);die;

// Set the content type to the file type for output.
header('Content-Type: ' . $_FILES['file']['type']);

// Read and output the uploaded file.
die(file_get_contents($_FILES['file']['tmp_name']));
?>
`,-1)]]),_:1},8,[`dark`]),a(I,{h3:``},{default:t(()=>[...u[94]||=[o(`Accepting specific file extensions`,-1)]]),_:1}),a(R,null,{pug:t(()=>[...u[95]||=[o(`w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg, .webp")`,-1)]]),html:t(()=>[...u[96]||=[o(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg, .webp">
</w-input>
`,-1)]]),default:t(()=>[a(L,{type:`file`,label:`File`,accept:`.jpg, .jpeg, .png, .gif, .svg, .webp`})]),_:1}),a(I,{h3:``},{default:t(()=>[...u[97]||=[o(`Multiple files upload`,-1)]]),_:1}),u[157]||=r(`p`,null,`When multiple files are allowed, the v-model will contain an array even if there is a single file.`,-1),a(R,null,{pug:t(()=>[...u[98]||=[o(`w-input(type="file" label="File" multiple)`,-1)]]),html:t(()=>[...u[99]||=[o(`<w-input
  type="file"
  label="File"
  multiple>
</w-input>
`,-1)]]),default:t(()=>[a(L,{type:`file`,label:`File`,multiple:``})]),_:1}),a(I,{h3:``},{default:t(()=>[...u[100]||=[o(`Loading state`,-1)]]),_:1}),u[158]||=r(`p`,null,[o(`If you try to upload a very large file, you will see the progress value of the file transfer will
be updated as the transfer goes on (e.g. :loading="overallProgress").`),r(`br`),o(`
You can also show a self-updated progress bar with the `),r(`code`,null,`show-progress`),o(` prop.`),r(`br`),o(`
Using a `),r(`code`,null,`v-model:overall-progress`),o(`, you will also receive the total percentage of completion
of all the files being uploaded.
`)],-1),a(R,null,{pug:t(()=>[...u[103]||=[o(`w-input(type="file"
  v-model="files"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green") File

.my4 Overall progress: `+n(`{{ overallProgress }}`)+`

w-flex
  | Files:
  pre.ml2 `+n(`{{ files }}`),-1)]]),html:t(()=>[...u[104]||=[o(`<w-input type="file"
  v-model="files4"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green">
  File
</w-input>

<div class="my4">
  Overall progress: `+n(`{{ overallProgress }}`)+`
</div>

<w-flex>
  Files:
  <pre class="ml2">`+n(`{{ files }}`)+`</pre>
</w-flex>`,-1)]]),js:t(()=>[...u[105]||=[o(`data: () => ({
  files: [],
  overallProgress: 0
})
`,-1)]]),default:t(()=>[a(L,{type:`file`,modelValue:l.files4,"onUpdate:modelValue":u[5]||=e=>l.files4=e,"overall-progress":l.overallProgress,"onUpdate:overallProgress":u[6]||=e=>l.overallProgress=e,multiple:``,"show-progress":``,"progress-color":`green`},{default:t(()=>[...u[101]||=[o(`File`,-1)]]),_:1},8,[`modelValue`,`overall-progress`]),r(`div`,y,`Overall progress: `+n(l.overallProgress),1),a(z,null,{default:t(()=>[u[102]||=o(`Files:`,-1),r(`pre`,b,n(l.files4),1)]),_:1})]),_:1}),a(I,{h3:``},{default:t(()=>[...u[106]||=[o(`Clearing the field`,-1)]]),_:1}),u[159]||=r(`p`,null,[o(`Resetting the `),r(`code`,null,`input type="file"`),o(` is as easy as setting its value to null (native HTML way).`)],-1),a(I,{h2:``},{default:t(()=>[...u[107]||=[o(`Types`,-1)]]),_:1}),u[160]||=r(`p`,null,[o(`The default type is "`),r(`span`,{class:`code`},`text`),o(`" but the types below are also supported.`)],-1),u[161]||=r(`p`,null,[o(`On desktop you will not notice the difference between the fields `),r(`span`,{class:`code`},`email`),o(`, `),r(`span`,{class:`code`},`tel`),o(`,
`),r(`span`,{class:`code`},`url`),o(`, and the default text type. But on touch devices, the keyboard is adapted to the
type of input.`)],-1),u[162]||=r(`h3`,null,`Textual inputs`,-1),a(R,null,{pug:t(()=>[...u[130]||=[o(`<ul.input-types>
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
    <w-input(type="hidden")<`,-1)]]),html:t(()=>[...u[131]||=[o(`<ul class="input-types">
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
`,-1)]]),default:t(()=>[r(`ul`,x,[r(`li`,null,[u[109]||=r(`div`,{class:`code mb1`},`type="date"`,-1),a(L,{type:`date`},{default:t(()=>[...u[108]||=[o(`date`,-1)]]),_:1})]),r(`li`,S,[u[111]||=r(`div`,{class:`code mb1`},`type="email"`,-1),a(L,{type:`email`},{default:t(()=>[...u[110]||=[o(`Email address`,-1)]]),_:1})]),r(`li`,C,[u[113]||=r(`div`,{class:`code mb1`},`type="number"`,-1),a(L,{type:`number`,min:`0`,max:`100`},{default:t(()=>[...u[112]||=[o(`Age`,-1)]]),_:1})]),r(`li`,w,[u[115]||=r(`div`,{class:`code mb1`},`type="password"`,-1),a(L,{type:`password`},{default:t(()=>[...u[114]||=[o(`Password`,-1)]]),_:1})]),r(`li`,T,[u[117]||=r(`div`,{class:`code mb1`},`type="search"`,-1),a(L,{type:`search`},{default:t(()=>[...u[116]||=[o(`Search`,-1)]]),_:1})]),r(`li`,E,[u[119]||=r(`div`,{class:`code mb1`},`type="tel"`,-1),a(L,{type:`tel`},{default:t(()=>[...u[118]||=[o(`Tel`,-1)]]),_:1})]),r(`li`,D,[u[121]||=r(`div`,{class:`code mb1`},`type="text"`,-1),a(L,{type:`text`},{default:t(()=>[...u[120]||=[o(`Text`,-1)]]),_:1})]),r(`li`,O,[u[123]||=r(`div`,{class:`code mb1`},`type="time"`,-1),a(L,{type:`time`},{default:t(()=>[...u[122]||=[o(`time`,-1)]]),_:1})]),r(`li`,k,[u[125]||=r(`div`,{class:`code mb1`},`type="url"`,-1),a(L,{type:`url`},{default:t(()=>[...u[124]||=[o(`Url`,-1)]]),_:1})]),r(`li`,A,[u[126]||=r(`span`,{class:`code mb1 mr2`},`type="hidden"`,-1),u[127]||=o(`The hidden type is also accepted - but you don't need a `,-1),u[128]||=r(`span`,{class:`code`},`w-input`,-1),u[129]||=o(` for that!`,-1),a(L,{type:`hidden`})])])]),_:1}),u[163]||=r(`h3`,null,`Other types of inputs`,-1),u[164]||=r(`p`,null,`For all the other types of input listed below, a specific Wave UI component should be used instead:`,-1),r(`ul`,j,[u[138]||=c(`<li class="mt1"><span class="code mr2">type=&quot;button&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;checkbox&quot;</span><span class="grey">use <code>w-checkbox</code> instead</span></li>`,2),r(`li`,M,[u[133]||=r(`span`,{class:`code mr2`},`type="color"`,-1),u[134]||=r(`span`,{class:`grey`},[o(`use `),r(`code`,null,`w-color-picker`),o(` instead`)],-1),a(G,{class:`px1 ml1`,color:`red`,outline:``},{default:t(()=>[...u[132]||=[o(`coming soon`,-1)]]),_:1})]),u[139]||=c(`<li class="mt1"><span class="code mr2">type=&quot;image&quot;</span><span class="grey">use the <code>img</code> HTML tag instead</span></li><li class="mt1"><span class="code mr2">type=&quot;radio&quot;</span><span class="grey">use <code>w-radio</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;range&quot;</span><span class="grey">use <code>w-slider</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;reset&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;submit&quot;</span><span class="grey">use <code>w-button</code> instead</span></li>`,5),r(`li`,N,[u[136]||=r(`span`,{class:`code mr2`},`type="time"`,-1),u[137]||=r(`span`,{class:`grey`},[o(`use `),r(`code`,null,`w-time-picker`),o(` instead`)],-1),a(G,{class:`px1 ml1`,color:`red`,outline:``},{default:t(()=>[...u[135]||=[o(`coming soon`,-1)]]),_:1})])])])}var F=l({data:()=>({isPassword:!0,file1:null,file2:null,file3:null,files4:[],file5:null,loading:!1,overallProgress:void 0,todayFormatted:``,userIP:``}),computed:{filePreviewIcon(){let{extension:e}=this.file3;switch(e){case`jpg`:case`png`:case`gif`:case`pdf`:return`mdi mdi-file-${e}-box`;case`jpeg`:return`mdi mdi-file-jpg-box`;case`svg`:case`webp`:return`mdi mdi-image`;case`mov`:return`mdi mdi-filmstrip`;case`zip`:return`mdi mdi-folder-zip`;default:return`mdi mdi-file`}}},methods:{onFileInput(e){this.file1=e},getTodaysDate(){let e=new Date,t=e.getDate().toString().padStart(2,0),n=(e.getMonth()+1).toString().padStart(2,0),r=e.getFullYear();this.todayFormatted=`${r}${n}${t}`},async getUserIP(){await f.get(`https://api.ipify.org`).then(e=>{this.userIP=e.data.replace(/\./g,``)})},async onFormSuccess(){this.loading=!0;let e=`https://filebin.net/waveui-${this.userIP}${this.todayFormatted}`,{name:t,file:n}=this.file5;f.post(`${e}/${t}`,n).then(()=>{this.loading=!1,this.$waveui.notify(`<div>
              File transferred successfully.<br>Now check your
              <a href="${e}" target="_blank">
                Filebin <i class="w-icon mdi mdi-open-in-new"></i></a>.
              </div>`,`success`,0)},()=>{this.$waveui.notify(`<div>An error occurred.<br>Is Filebin down?<br>Or is there a problem with the file?</div>`,`error`,0),this.loading=!1})}},created(){this.getTodaysDate(),this.getUserIP()}},[[`render`,P]]);function I(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var L={id:`Sets the native HTML <code>id</code> and ties it to adjacent <code>&lt;label for&gt;</code> bindings. If omitted, Wave UI generates a stable id.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the input field.<br>Gets updated on text input.`,type:`Applies a native HTML <code>type</code> attribute.`,label:`Sets a visible label for the input field.`,labelPosition:`Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.`,innerIconLeft:`Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,innerIconRight:`Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,staticLabel:`Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.`,placeholder:`Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.`,color:`Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the input field's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,minlength:`Applies the native HTML <code>minlength</code> attribute.`,maxlength:`Applies the native HTML <code>maxlength</code> attribute which prevents typing more than this amount of characters.`,step:`For <code>type="number"</code> inputs.<br>Applies the native HTML <code>step</code> attribute which sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>.`,min:`For <code>type="number"</code> inputs.<br>Applies the native HTML <code>min</code> attribute which sets an integer or floating minimum number.`,max:`For <code>type="number"</code> inputs.<br>Applies the native HTML <code>max</code> attribute which sets an integer or floating maximum number.`,dark:!1,outline:`The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.`,round:`Sets a maximum border-radius on the corners of the input field, giving it a round look.`,shadow:`Applies a drop shadow to the input field.`,tile:`Removes the default border-radius and sets sharp edges on the input field.`,name:`Provide a native HTML <code>name</code> attribute to the input field. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the input field making it unreactive to user interactions.`,readonly:`The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the input field.`,validators:`<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.`,noBlurValidation:`<span class="deep-orange">Only when the input is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`,loading:`When set to <code>true</code>, displays an indefinite-value progress bar below the input field. If a number is given, it will be the value of the progress.`},R={default:{description:`The label content, if the <code>label</code> prop is not flexible enough.`},"icon-left":{description:`The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>`,params:{inputId:`The effective <code>id</code> string of the native input (your <code>id</code> prop or Wave UI’s stable default). Use with <code>&lt;label :for="inputId"&gt;</code> in custom slot markup.`}},"icon-right":{description:`The right icon, if the <code>innerIconRight</code> prop is not flexible enough.`,params:{inputId:`The effective <code>id</code> string of the native input (your <code>id</code> prop or Wave UI’s stable default). Use with <code>&lt;label :for="inputId"&gt;</code> in custom slot markup.`}}},z={input:{description:`Emitted each time the input text (or file) changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[String]":`The new textual input value.`}},"update:modelValue":{description:`Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[String]":`The new textual input value.`}},"update:overallProgress":{description:`Emitted continuously while uploading a file. When using the <code>multiple</code> option, this is the overall progress of all the files together.<br>You can use it with <code>:overall-progress.sync</code> in Vue 2, or <code>v-model:overall-progress</code> in Vue 3.`},focus:{description:`Emitted on input focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}},blur:{description:`Emitted on input blur.`,params:{"[DOM event object]":`The associated blur DOM event.`}},"click:inner-icon-left":{description:`Emitted on click of the left inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}},"click:inner-icon-right":{description:`Emitted on click of the right inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}}},B=l({data:()=>({propsDescs:L,slots:R}),computed:{props(){return{...d.props,...u.props}},events(){return d.emits.reduce((e,t)=>(e[t]=z[t]||{})&&e,{})}}},[[`render`,I]]);function V(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-input`,-1)]]),_:1}),a(p),a(m)])}var H=l({components:{Examples:F,Api:B}},[[`render`,V]]);export{H as default};