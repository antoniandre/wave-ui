import{t as e}from"./axios-BBlTQRQc.js";import{N as t,W as n,bt as r,c as i,d as a,g as o,h as s,k as c,m as l}from"./runtime-core.esm-bundler-BG9XLJHT.js";import{V as u,Y as d,w as f}from"./index-ByX3j1Uf.js";var p={class:`grow mb4`,style:{"min-width":`200px`}},m={class:`grow mb4`,style:{"min-width":`200px`}},h={class:`grow mb4`,style:{"min-width":`200px`}},g={class:`grow mb4`,style:{"min-width":`200px`}},_={class:`mt3`},v={class:`mt3`},y={class:`my4`},b={class:`ml2`},x={class:`input-types`},S={class:`mt4`},C={class:`mt4`},w={class:`mt4`},T={class:`mt4`},E={class:`mt4`},D={class:`mt4`},O={class:`mt4`},k={class:`mt4`},A={class:`mt4`},j={class:`other-input-types`},M={class:`mt1`},N={class:`mt1`};function P(e,u,d,f,P,F){let I=t(`title-link`),L=t(`w-input`),R=t(`example`),z=t(`w-flex`),B=t(`alert`),V=t(`w-icon`),H=t(`w-button`),U=t(`w-form`),W=t(`ssh-pre`),G=t(`w-tag`);return c(),a(`div`,null,[o(I,{h2:``},{default:n(()=>[...u[7]||=[s(`Default`,-1)]]),_:1}),u[145]||=i(`p`,null,[s(`By default the `),i(`span`,{class:`code`},`w-input`),s(` component has a label inside the input field, that moves up
above the field on focus or when the field has some content or a placeholder.`),i(`br`)],-1),o(R,null,{pug:n(()=>[...u[9]||=[s(`w-input Label`,-1)]]),html:n(()=>[...u[10]||=[s(`<w-input>Label</w-input>
`,-1)]]),default:n(()=>[o(L,null,{default:n(()=>[...u[8]||=[s(`Label`,-1)]]),_:1})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[11]||=[s(`Label and / or placeholder`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[12]||=[s(`w-input.mb4(label="Label")
w-input.mb4(placeholder="Placeholder")
w-input.mb4(label="Label" placeholder="Placeholder")`,-1)]]),html:n(()=>[...u[13]||=[s(`<w-input
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
`,-1)]]),default:n(()=>[o(L,{class:`mb4`,label:`Label`}),o(L,{class:`mb4`,placeholder:`Placeholder`}),o(L,{class:`mb4`,label:`Label`,placeholder:`Placeholder`})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[14]||=[s(`Static label`,-1)]]),_:1}),u[146]||=i(`p`,null,[s(`By default the label is positioned inside and on field focus, it will move up above the field
and shrink.`),i(`br`),s(`
It is possible to keep it inside and disable the animation with the `),i(`code`,null,`static-label`),s(` option.`)],-1),u[147]||=i(`p`,{class:`mt4`},[i(`strong`,null,`Note:`),s(` If this option is set to true and the label is positioned inside when a placeholder is set,
only the placeholder will be displayed.
`)],-1),o(R,null,{pug:n(()=>[...u[15]||=[s(`w-input(label="Label" static-label)`,-1)]]),html:n(()=>[...u[16]||=[s(`<w-input
  label="Label"
  static-label>
</w-input>
`,-1)]]),default:n(()=>[o(L,{label:`Label`,"static-label":``})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[17]||=[s(`Outline`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[18]||=[s(`w-input.mb6(label="Outline" outline)
w-input.mb3(placeholder="Outline" outline)
w-input.mb3(label="Outline" color="info" outline)
w-input.mb3(label="Outline" bg-color="blue-light5" outline)`,-1)]]),html:n(()=>[...u[19]||=[s(`<w-input
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
`,-1)]]),default:n(()=>[o(L,{class:`mb6`,label:`Outline`,outline:``}),o(L,{class:`mb3`,placeholder:`Outline`,outline:``}),o(L,{class:`mb3`,label:`Outline`,color:`info`,outline:``}),o(L,{class:`mb3`,label:`Outline`,"bg-color":`blue-light5`,outline:``})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[20]||=[s(`Shadow`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[21]||=[s(`w-input.mb4(label="Shadow" shadow)
w-input(label="Outline with shadow" shadow outline)`,-1)]]),html:n(()=>[...u[22]||=[s(`<w-input
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
`,-1)]]),default:n(()=>[o(L,{class:`mb4`,label:`Shadow`,shadow:``}),o(L,{label:`Outline with shadow`,shadow:``,outline:``})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[23]||=[s(`Round & Tile`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[26]||=[s(`w-flex(wrap :gap="2")
  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Underline style (default)
    w-input.mb1(label="Round" round)
    w-input.mb1(label="Round and shadow" round shadow)
    w-input.mb1(label="Tile" tile)

  .grow.mb4(style="min-width: 200px")
    .title4.mb2 Outline style
    w-input.mb1(label="Round" round outline)
    w-input.mb1(label="Round and shadow" round outline shadow)
    w-input.mb1(label="Tile" tile outline)`,-1)]]),html:n(()=>[...u[27]||=[s(`<w-flex wrap :gap="2">
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
`,-1)]]),default:n(()=>[o(z,{wrap:``,gap:2},{default:n(()=>[i(`div`,p,[u[24]||=i(`div`,{class:`title4 mb2`},`Underline style (default)`,-1),o(L,{class:`mb1`,label:`Round`,round:``}),o(L,{class:`mb1`,label:`Round and shadow`,round:``,shadow:``}),o(L,{label:`Tile`,tile:``})]),i(`div`,m,[u[25]||=i(`div`,{class:`title4 mb2`},`Outline style`,-1),o(L,{class:`mb1`,label:`Round`,round:``,outline:``}),o(L,{class:`mb1`,label:`Round and shadow`,round:``,outline:``,shadow:``}),o(L,{class:`mb1`,label:`Tile`,tile:``,outline:``})])]),_:1})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[28]||=[s(`Colors`,-1)]]),_:1}),u[148]||=i(`p`,{class:`mb4`},[s(`Like in most components, you can set a `),i(`code`,null,`color`),s(` for the text and a `),i(`code`,null,`bg-color`),s(` for the
background.`),i(`br`),s(`
By default, the text has the "`),i(`span`,{class:`code`},`primary`),s(`" color.`)],-1),o(R,null,{pug:n(()=>[...u[31]||=[s(`w-flex(wrap :gap="2")
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
    w-input.mb1(color="orange-dark1" bg-color="orange-light5" model-value="Some content" outline)`,-1)]]),html:n(()=>[...u[32]||=[s(`<w-flex wrap :gap="2">
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
`,-1)]]),default:n(()=>[o(z,{wrap:``,gap:2},{default:n(()=>[i(`div`,h,[u[29]||=i(`div`,{class:`title4 mb2`},`Underline style (default)`,-1),o(L,{class:`mb1`,"model-value":`Some content`}),o(L,{class:`mb1`,color:`red`,"model-value":`Some content`}),o(L,{class:`mb1`,"bg-color":`red-light5`,"model-value":`Some content`}),o(L,{class:`mb1`,color:`red-dark1`,"bg-color":`red-light5`,"model-value":`Some content`}),o(L,{class:`mb1`,color:`orange-dark1`,"bg-color":`orange-light5`,"model-value":`Some content`})]),i(`div`,g,[u[30]||=i(`div`,{class:`title4 mb2`},`Outline style`,-1),o(L,{class:`mb1`,"model-value":`Some content`,outline:``}),o(L,{class:`mb1`,color:`red`,"model-value":`Some content`,outline:``}),o(L,{class:`mb1`,"bg-color":`red-light5`,"model-value":`Some content`,outline:``}),o(L,{class:`mb1`,color:`red-dark1`,"bg-color":`red-light5`,"model-value":`Some content`,outline:``}),o(L,{class:`mb1`,color:`orange-dark1`,"bg-color":`orange-light5`,"model-value":`Some content`,outline:``})])]),_:1})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[33]||=[s(`Label position`,-1)]]),_:1}),u[149]||=i(`p`,null,[s(`The default label position is "`),i(`span`,{class:`code`},`inside`),s(`", but it can also be "`),i(`span`,{class:`code`},`left`),s(`" or "`),i(`span`,{class:`code`},`right`),s(`".`)],-1),o(B,{tip:``},{default:n(()=>[...u[34]||=[s(`You could also set a label outside of the `,-1),i(`span`,{class:`code`},`w-input`,-1),s(` and display it nicely with flex.
But it is convenient to let the `,-1),i(`span`,{class:`code`},`w-input`,-1),s(` component handle the field focus event on
label click.`,-1),i(`br`,null,null,-1),s(`
The `,-1),i(`span`,{class:`code`},`label`,-1),s(` prop is here for this purpose and accepts any HTML.
`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[35]||=[s(`w-input.mb3(label="Inside" label-position="inside" outline)
w-input.mb3(label="Left" label-position="left" outline)
w-input.mb3(label="Right" label-position="right" outline)`,-1)]]),html:n(()=>[...u[36]||=[s(`<w-input
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
`,-1)]]),default:n(()=>[o(L,{class:`mb3`,label:`Inside`,"label-position":`inside`,outline:``}),o(L,{class:`mb3`,label:`Left`,"label-position":`left`,outline:``}),o(L,{class:`mb3`,label:`Right`,"label-position":`right`,outline:``})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[37]||=[s(`Custom label via default slot`,-1)]]),_:1}),u[150]||=i(`p`,null,[s(`It is convenient to have the label inside the `),i(`span`,{class:`code`},`w-input`),s(` component to let it handle
the field focus event on label click.`),i(`br`),s(`
The `),i(`span`,{class:`code`},`label`),s(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),o(R,null,{pug:n(()=>[...u[45]||=[s(`w-input.mb3(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-input.mb3(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-input.mb3(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`,-1)]]),html:n(()=>[...u[46]||=[s(`<w-input
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
`,-1)]]),default:n(()=>[o(L,{class:`mb3`,"label-position":`inside`,outline:``},{default:n(()=>[o(V,{class:`orange`},{default:n(()=>[...u[38]||=[s(`mdi mdi-arrow-right`,-1)]]),_:1}),u[40]||=i(`span`,{class:`purple mx1`},`Inside`,-1),o(V,{class:`orange`},{default:n(()=>[...u[39]||=[s(`mdi mdi-arrow-left`,-1)]]),_:1})]),_:1}),o(L,{class:`mb3`,"label-position":`left`,outline:``},{default:n(()=>[u[42]||=i(`span`,{class:`green mr1`},`Left`,-1),o(V,{class:`orange`},{default:n(()=>[...u[41]||=[s(`mdi mdi-arrow-right`,-1)]]),_:1})]),_:1}),o(L,{class:`mb3`,"label-position":`right`,outline:``},{default:n(()=>[o(V,{class:`orange`},{default:n(()=>[...u[43]||=[s(`mdi mdi-arrow-left`,-1)]]),_:1}),u[44]||=i(`span`,{class:`red ml1`},`Right`,-1)]),_:1})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[47]||=[s(`Inner icons`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[48]||=[s(`.title4.mb2 Label outside
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
w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")`,-1)]]),html:n(()=>[...u[49]||=[s(`<div class="title4 mb2">
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
</w-input>`,-1)]]),js:n(()=>[...u[50]||=[s(`data: () => ({
  isPassword: true
})
`,-1)]]),default:n(()=>[u[51]||=i(`div`,{class:`title4 mb2`},`Label outside`,-1),o(L,{class:`mb2`,label:`Username`,"label-position":`left`,outline:``,"inner-icon-left":`mdi mdi-account`}),o(L,{class:`mb2`,label:`Password`,type:e.isPassword?`password`:`text`,"inner-icon-left":e.isPassword?`mdi mdi-eye-off`:`mdi mdi-eye`,"inner-icon-right":e.isPassword?`mdi mdi-eye-off`:`mdi mdi-eye`,"onClick:innerIconRight":u[0]||=t=>e.isPassword=!e.isPassword},null,8,[`type`,`inner-icon-left`,`inner-icon-right`]),o(L,{class:`mb2`,label:`Password`,type:e.isPassword?`password`:`text`,"label-position":`left`,outline:``,"inner-icon-right":e.isPassword?`mdi mdi-eye-off`:`mdi mdi-eye`,"onClick:innerIconRight":u[1]||=t=>e.isPassword=!e.isPassword},null,8,[`type`,`inner-icon-right`]),o(L,{class:`mb2`,label:`Right`,"label-position":`right`,outline:``,"inner-icon-left":`wi-check`}),o(L,{class:`mb2`,label:`Right`,"label-position":`right`,outline:``,"inner-icon-right":`wi-check`}),u[52]||=i(`div`,{class:`title4 mt6 mb2`},`Label inside`,-1),o(L,{class:`mb2`,label:`Inside`,"label-position":`inside`,outline:``,"inner-icon-left":`wi-search`}),o(L,{class:`mb2`,label:`Inside`,"label-position":`inside`,outline:``,"inner-icon-right":`wi-search`})]),_:1}),o(I,{h2:``},{default:n(()=>[...u[53]||=[s(`Disabled & readonly`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[54]||=[s(`w-input.mb3(label="Disabled & empty" outline disabled)
w-input.mb3(label="Disabled & filled" model-value="Some content" outline disabled)
w-input.mb3(label="Readonly & empty" outline readonly)
w-input.mb3(label="Readonly & filled" model-value="Some content" outline readonly)`,-1)]]),html:n(()=>[...u[55]||=[s(`<w-input
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
`,-1)]]),default:n(()=>[o(L,{class:`mb3`,label:`Disabled & empty`,outline:``,disabled:``}),o(L,{class:`mb3`,label:`Disabled & filled`,"model-value":`Some content`,outline:``,disabled:``}),o(L,{class:`mb3`,label:`Readonly & empty`,outline:``,readonly:``}),o(L,{class:`mb3`,label:`Readonly & filled`,"model-value":`Some content`,outline:``,readonly:``})]),_:1}),o(I,{h2:``,slug:`file-input`},{default:n(()=>[...u[56]||=[s(`File input`,-1)]]),_:1}),o(B,{success:``},{default:n(()=>[...u[57]||=[s(`A `,-1),i(`strong`,{class:`code mx1`},`w-input`,-1),s(` field only needs a `,-1),i(`code`,null,`type="file"`,-1),s(` to become a file input.`,-1)]]),_:1}),u[151]||=i(`p`,null,[s(`By default, the file input will show a preview of the image you are uploading.`),i(`br`),s(`
If the file can't be previewed a file icon will show up to the right of the field instead of
a preview.`)],-1),u[152]||=i(`p`,null,`When uploading a larger file, a spinner will show up to the right of the field until
the file is completely transferred.`,-1),o(R,null,{pug:n(()=>[...u[59]||=[s(`w-input(type="file") File`,-1)]]),html:n(()=>[...u[60]||=[s(`<w-input type="file">File</w-input>
`,-1)]]),default:n(()=>[o(L,{type:`file`},{default:n(()=>[...u[58]||=[s(`File`,-1)]]),_:1})]),_:1}),o(I,{h3:``},{default:n(()=>[...u[61]||=[s(`Disabled preview`,-1)]]),_:1}),u[153]||=i(`p`,null,[s(`The file preview can be disabled if not needed by setting the `),i(`code`,null,`preview`),s(` prop to
`),i(`code`,null,`false`),s(`.`)],-1),o(R,null,{pug:n(()=>[...u[63]||=[s(`w-input(type="file" :preview="false") File`,-1)]]),html:n(()=>[...u[64]||=[s(`<w-input type="file" :preview="false">File</w-input>
`,-1)]]),default:n(()=>[o(L,{type:`file`,preview:!1},{default:n(()=>[...u[62]||=[s(`File`,-1)]]),_:1})]),_:1}),o(I,{h3:``},{default:n(()=>[...u[65]||=[s(`Custom preview icon`,-1)]]),_:1}),u[154]||=i(`p`,null,[s(`By default, when the file is not an image, the preview will be a generic file icon.`),i(`br`),s(`
It is possible to set a custom icon instead.`)],-1),o(R,null,{pug:n(()=>[...u[67]||=[s(`w-input(type="file" preview="mdi mdi-star") File`,-1)]]),html:n(()=>[...u[68]||=[s(`<w-input type="file" preview="mdi mdi-star">File</w-input>
`,-1)]]),default:n(()=>[o(L,{type:`file`,preview:`mdi mdi-star`},{default:n(()=>[...u[66]||=[s(`File`,-1)]]),_:1})]),_:1}),u[155]||=i(`p`,null,`You could even compute a variable to show a different icon per detected file type.`,-1),o(R,null,{pug:n(()=>[...u[70]||=[s(`w-input(
  type="file"
  v-model="file"
  :preview="file && filePreviewIcon") File`,-1)]]),html:n(()=>[...u[71]||=[s(`<w-input
  type="file"
  v-model="file"
  :preview="file && filePreviewIcon">
  File
</w-input>`,-1)]]),js:n(()=>[...u[72]||=[s(`data: () => ({
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
`,-1)]]),default:n(()=>[o(L,{type:`file`,modelValue:e.file3,"onUpdate:modelValue":u[2]||=t=>e.file3=t,preview:e.file3&&F.filePreviewIcon},{default:n(()=>[...u[69]||=[s(`File`,-1)]]),_:1},8,[`modelValue`,`preview`])]),_:1}),o(I,{h3:``},{default:n(()=>[...u[73]||=[s(`Reading the files`,-1)]]),_:1}),u[156]||=i(`p`,null,[s(`On the frontend, you can read all the file details and contents on input when the user selects
a file, or you can provide a v-model that Wave UI will fill up with a single file or array if `),i(`code`,null,`multiple`),s(` is set to `),i(`code`,null,`true`),s(`.`)],-1),o(I,{class:`mt6`,h4:``},{default:n(()=>[...u[74]||=[s(`Via @input`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[76]||=[s(`w-input(type="file" @input="onFileInput") File

pre.mt3 `+r(`{{ file }}`),-1)]]),html:n(()=>[...u[77]||=[s(`<w-input type="file" @input="onFileInput>File</w-input>

<pre class="mt3">`+r(`{{ files }}`)+`</pre>`,-1)]]),js:n(()=>[...u[78]||=[s(`data: () => ({
  file: null
}),

methods: {
  onFileInput (file) {
    this.file = file
  }
}
`,-1)]]),default:n(()=>[o(L,{type:`file`,onInput:F.onFileInput},{default:n(()=>[...u[75]||=[s(`File`,-1)]]),_:1},8,[`onInput`]),i(`pre`,_,r(e.file1),1)]),_:1}),o(I,{class:`mt6 mb2`,h4:``},{default:n(()=>[...u[79]||=[s(`Via v-model`,-1)]]),_:1}),u[157]||=i(`p`,null,[s(`The v-model can be used to access the files added by the user.`),i(`br`)],-1),o(B,{warning:``},{default:n(()=>[...u[80]||=[i(`strong`,null,`Important`,-1),i(`br`,null,null,-1),s(`Even if a v-model is allowing a two-way binding,
there is no way to prefill an input type file:
that would be a security breach and is therefore not allowed in HTML.`,-1),i(`br`,null,null,-1),s(`However you can still set the v-model to `,-1),i(`code`,null,`null`,-1),s(` to reset the field.`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[82]||=[s(`w-input(type="file" v-model="file") File

pre.mt3 `+r(`{{ file }}`),-1)]]),html:n(()=>[...u[83]||=[s(`<w-input type="file" v-model="file">File</w-input>

<pre class="mt3">`+r(`{{ file }}`)+`</pre>`,-1)]]),js:n(()=>[...u[84]||=[s(`data: () => ({
  file: null
})
`,-1)]]),default:n(()=>[o(L,{type:`file`,modelValue:e.file2,"onUpdate:modelValue":u[3]||=t=>e.file2=t},{default:n(()=>[...u[81]||=[s(`File`,-1)]]),_:1},8,[`modelValue`]),i(`pre`,v,r(e.file2),1)]),_:1}),o(I,{h3:``},{default:n(()=>[...u[85]||=[s(`Uploading the file to a backend server`,-1)]]),_:1}),u[158]||=l(`<p>There are different ways you can do this. The 2 most common ways would be to:</p><ul><li>Use Axios or other AJAX library to send the file on <strong class="code">w-form</strong> <code>@success</code> (emitted upon successful validation).</li><li>Use the <code>allow-submit</code> option on the <strong class="code">w-form</strong> as well as
<code>enctype=&quot;multipart/form-data&quot;</code>, <code>method</code> and <code>action</code> fields
in order to submit the file in a full HTML built-in process (But this will reload
the page).
</li></ul><p class="mt3">The first option is recommended for a more modern approach. Here are two examples how to
set this up.</p>`,3),o(I,{class:`mt8`,h4:``},{default:n(()=>[...u[86]||=[s(`1st example`,-1)]]),_:1}),u[159]||=i(`p`,null,[s(`In this example, the file is uploaded to `),i(`a`,{href:`https://filebin.net`,target:`_blank`},`Filebin`),s(`.
The file is transferred as `),i(`code`,null,`application/x-www-form-urlencoded`),s(` similar to
`),i(`code`,null,`application/octet-stream`),s(` with the file in the body of the request as per the
expectation of the Filebin API.`),i(`br`),s(`
Note: you need to disable any ad blocker and refresh the page before trying this example.`)],-1),o(R,{reactive:``,"external-js":`https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js`},{pug:n(()=>[...u[89]||=[s(`w-form(@success="onFormSuccess")
  w-input(
    type="file"
    v-model="file"
    :validators="[() => file || 'Please add a file']") File
  w-button.d-flex.mla.mt4(type="submit" :loading="loading") Send`,-1)]]),html:n(()=>[...u[90]||=[s(`<w-form @success="onFormSuccess">
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
</w-form>`,-1)]]),js:n(()=>[s(`methods: {
  // This method uses the Axios library.
  // import axios from 'axios' // If you use NPM.
  async onFormSuccess () {
    this.loading = true

    const binURL = 'https://filebin.net/waveui-`+r(e.todayFormatted)+r(e.userIP)+`'
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
`,1)]),default:n(()=>[o(U,{onSuccess:F.onFormSuccess},{default:n(()=>[o(L,{type:`file`,modelValue:e.file5,"onUpdate:modelValue":u[4]||=t=>e.file5=t,validators:[()=>e.file5||`Please add a file`]},{default:n(()=>[...u[87]||=[s(`File`,-1)]]),_:1},8,[`modelValue`,`validators`]),o(H,{class:`d-flex mla mt4`,type:`submit`,loading:e.loading},{default:n(()=>[...u[88]||=[s(`Send`,-1)]]),_:1},8,[`loading`])]),_:1},8,[`onSuccess`])]),_:1}),o(I,{class:`mt8`,h4:``},{default:n(()=>[...u[91]||=[s(`2nd example`,-1)]]),_:1}),u[160]||=i(`p`,null,[s(`In this example (more common case) the file is transferred as `),i(`code`,null,`multipart/form-data`),s(` with
the use of `),i(`code`,null,`FormData`),s(` and using the same HTML as the previous example.`)],-1),o(W,{language:`js`,label:`JavaScript`,dark:e.$store.state.darkMode},{default:n(()=>[...u[92]||=[s(`import axios from 'axios'

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
`,-1)]]),_:1},8,[`dark`]),u[161]||=i(`p`,null,`Here is an example of a very minimalist way to receive and display the file on server side
with PHP. Of course you should add more checks, and move the temporary uploaded file when all
the checks are passed.`,-1),o(W,{language:`php`,label:`PHP`,dark:e.$store.state.darkMode},{default:n(()=>[...u[93]||=[s(`<?php
// You can check the structure of the file upload.
// print_r($_FILES);die;

// Set the content type to the file type for output.
header('Content-Type: ' . $_FILES['file']['type']);

// Read and output the uploaded file.
die(file_get_contents($_FILES['file']['tmp_name']));
?>
`,-1)]]),_:1},8,[`dark`]),o(I,{h3:``},{default:n(()=>[...u[94]||=[s(`Accepting specific file extensions`,-1)]]),_:1}),o(R,null,{pug:n(()=>[...u[95]||=[s(`w-input(type="file" label="File" accept=".jpg, .jpeg, .png, .gif, .svg, .webp")`,-1)]]),html:n(()=>[...u[96]||=[s(`<w-input
  type="file"
  label="File"
  accept=".jpg, .jpeg, .png, .gif, .svg, .webp">
</w-input>
`,-1)]]),default:n(()=>[o(L,{type:`file`,label:`File`,accept:`.jpg, .jpeg, .png, .gif, .svg, .webp`})]),_:1}),o(I,{h3:``},{default:n(()=>[...u[97]||=[s(`Multiple files upload`,-1)]]),_:1}),u[162]||=i(`p`,null,`When multiple files are allowed, the v-model will contain an array even if there is a single file.`,-1),o(R,null,{pug:n(()=>[...u[98]||=[s(`w-input(type="file" label="File" multiple)`,-1)]]),html:n(()=>[...u[99]||=[s(`<w-input
  type="file"
  label="File"
  multiple>
</w-input>
`,-1)]]),default:n(()=>[o(L,{type:`file`,label:`File`,multiple:``})]),_:1}),o(I,{h3:``},{default:n(()=>[...u[100]||=[s(`Loading state`,-1)]]),_:1}),u[163]||=i(`p`,null,[s(`If you try to upload a very large file, you will see the progress value of the file transfer will
be updated as the transfer goes on (e.g. :loading="overallProgress").`),i(`br`),s(`
You can also show a self-updated progress bar with the `),i(`code`,null,`show-progress`),s(` prop.`),i(`br`),s(`
Using a `),i(`code`,null,`v-model:overall-progress`),s(`, you will also receive the total percentage of completion
of all the files being uploaded.
`)],-1),o(R,null,{pug:n(()=>[...u[103]||=[s(`w-input(type="file"
  v-model="files"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green") File

.my4 Overall progress: `+r(`{{ overallProgress }}`)+`

w-flex
  | Files:
  pre.ml2 `+r(`{{ files }}`),-1)]]),html:n(()=>[...u[104]||=[s(`<w-input type="file"
  v-model="files4"
  v-model:overall-progress="overallProgress"
  show-progress
  progress-color="green">
  File
</w-input>

<div class="my4">
  Overall progress: `+r(`{{ overallProgress }}`)+`
</div>

<w-flex>
  Files:
  <pre class="ml2">`+r(`{{ files }}`)+`</pre>
</w-flex>`,-1)]]),js:n(()=>[...u[105]||=[s(`data: () => ({
  files: [],
  overallProgress: 0
})
`,-1)]]),default:n(()=>[o(L,{type:`file`,modelValue:e.files4,"onUpdate:modelValue":u[5]||=t=>e.files4=t,"overall-progress":e.overallProgress,"onUpdate:overallProgress":u[6]||=t=>e.overallProgress=t,multiple:``,"show-progress":``,"progress-color":`green`},{default:n(()=>[...u[101]||=[s(`File`,-1)]]),_:1},8,[`modelValue`,`overall-progress`]),i(`div`,y,`Overall progress: `+r(e.overallProgress),1),o(z,null,{default:n(()=>[u[102]||=s(`Files:`,-1),i(`pre`,b,r(e.files4),1)]),_:1})]),_:1}),o(I,{h3:``},{default:n(()=>[...u[106]||=[s(`Clearing the field`,-1)]]),_:1}),u[164]||=i(`p`,null,[s(`Resetting the `),i(`code`,null,`input type="file"`),s(` is as easy as setting its value to null (native HTML way).`)],-1),o(I,{h2:``},{default:n(()=>[...u[107]||=[s(`Types`,-1)]]),_:1}),u[165]||=i(`p`,null,[s(`The default type is "`),i(`span`,{class:`code`},`text`),s(`" but the types below are also supported.`)],-1),u[166]||=i(`p`,null,[s(`On desktop you will not notice the difference between the fields `),i(`span`,{class:`code`},`email`),s(`, `),i(`span`,{class:`code`},`tel`),s(`,
`),i(`span`,{class:`code`},`url`),s(`, and the default text type. But on touch devices, the keyboard is adapted to the
type of input.`)],-1),u[167]||=i(`h3`,null,`Textual inputs`,-1),o(R,null,{pug:n(()=>[...u[130]||=[s(`<ul.input-types>
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
    <w-input(type="hidden")<`,-1)]]),html:n(()=>[...u[131]||=[s(`<ul class="input-types">
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
`,-1)]]),default:n(()=>[i(`ul`,x,[i(`li`,null,[u[109]||=i(`div`,{class:`code mb1`},`type="date"`,-1),o(L,{type:`date`},{default:n(()=>[...u[108]||=[s(`date`,-1)]]),_:1})]),i(`li`,S,[u[111]||=i(`div`,{class:`code mb1`},`type="email"`,-1),o(L,{type:`email`},{default:n(()=>[...u[110]||=[s(`Email address`,-1)]]),_:1})]),i(`li`,C,[u[113]||=i(`div`,{class:`code mb1`},`type="number"`,-1),o(L,{type:`number`,min:`0`,max:`100`},{default:n(()=>[...u[112]||=[s(`Age`,-1)]]),_:1})]),i(`li`,w,[u[115]||=i(`div`,{class:`code mb1`},`type="password"`,-1),o(L,{type:`password`},{default:n(()=>[...u[114]||=[s(`Password`,-1)]]),_:1})]),i(`li`,T,[u[117]||=i(`div`,{class:`code mb1`},`type="search"`,-1),o(L,{type:`search`},{default:n(()=>[...u[116]||=[s(`Search`,-1)]]),_:1})]),i(`li`,E,[u[119]||=i(`div`,{class:`code mb1`},`type="tel"`,-1),o(L,{type:`tel`},{default:n(()=>[...u[118]||=[s(`Tel`,-1)]]),_:1})]),i(`li`,D,[u[121]||=i(`div`,{class:`code mb1`},`type="text"`,-1),o(L,{type:`text`},{default:n(()=>[...u[120]||=[s(`Text`,-1)]]),_:1})]),i(`li`,O,[u[123]||=i(`div`,{class:`code mb1`},`type="time"`,-1),o(L,{type:`time`},{default:n(()=>[...u[122]||=[s(`time`,-1)]]),_:1})]),i(`li`,k,[u[125]||=i(`div`,{class:`code mb1`},`type="url"`,-1),o(L,{type:`url`},{default:n(()=>[...u[124]||=[s(`Url`,-1)]]),_:1})]),i(`li`,A,[u[126]||=i(`span`,{class:`code mb1 mr2`},`type="hidden"`,-1),u[127]||=s(`The hidden type is also accepted - but you don't need a `,-1),u[128]||=i(`span`,{class:`code`},`w-input`,-1),u[129]||=s(` for that!`,-1),o(L,{type:`hidden`})])])]),_:1}),u[168]||=i(`h3`,null,`Other types of inputs`,-1),u[169]||=i(`p`,null,`For all the other types of input listed below, a specific Wave UI component should be used instead:`,-1),i(`ul`,j,[u[138]||=l(`<li class="mt1"><span class="code mr2">type=&quot;button&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;checkbox&quot;</span><span class="grey">use <code>w-checkbox</code> instead</span></li>`,2),i(`li`,M,[u[133]||=i(`span`,{class:`code mr2`},`type="color"`,-1),u[134]||=i(`span`,{class:`grey`},[s(`use `),i(`code`,null,`w-color-picker`),s(` instead`)],-1),o(G,{class:`px1 ml1`,color:`red`,outline:``},{default:n(()=>[...u[132]||=[s(`coming soon`,-1)]]),_:1})]),u[139]||=l(`<li class="mt1"><span class="code mr2">type=&quot;image&quot;</span><span class="grey">use the <code>img</code> HTML tag instead</span></li><li class="mt1"><span class="code mr2">type=&quot;radio&quot;</span><span class="grey">use <code>w-radio</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;range&quot;</span><span class="grey">use <code>w-slider</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;reset&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;submit&quot;</span><span class="grey">use <code>w-button</code> instead</span></li>`,5),i(`li`,N,[u[136]||=i(`span`,{class:`code mr2`},`type="time"`,-1),u[137]||=i(`span`,{class:`grey`},[s(`use `),i(`code`,null,`w-time-picker`),s(` instead`)],-1),o(G,{class:`px1 ml1`,color:`red`,outline:``},{default:n(()=>[...u[135]||=[s(`coming soon`,-1)]]),_:1})])]),o(I,{h2:``},{default:n(()=>[...u[140]||=[s(`Sizes`,-1)]]),_:1}),u[170]||=l(`<p>The field height can be controlled with the preset size props <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code> and <code>xl</code>, or directly via the CSS variable <code>--w-size</code>.</p>`,1),o(R,null,{pug:n(()=>[...u[141]||=[s(`w-input.mb3(xs label="Extra small" outline)
w-input.mb3(sm label="Small" outline)
w-input.mb3(md label="Medium (default)" outline)
w-input.mb3(lg label="Large" outline)
w-input(xl label="Extra large" outline)`,-1)]]),html:n(()=>[...u[142]||=[s(`<w-input class="mb3" xs label="Extra small" outline></w-input>
<w-input class="mb3" sm label="Small" outline></w-input>
<w-input class="mb3" md label="Medium (default)" outline></w-input>
<w-input class="mb3" lg label="Large" outline></w-input>
<w-input xl label="Extra large" outline></w-input>
`,-1)]]),default:n(()=>[o(L,{class:`mb3`,xs:``,label:`Extra small`,outline:``}),o(L,{class:`mb3`,sm:``,label:`Small`,outline:``}),o(L,{class:`mb3`,md:``,label:`Medium (default)`,outline:``}),o(L,{class:`mb3`,lg:``,label:`Large`,outline:``}),o(L,{xl:``,label:`Extra large`,outline:``})]),_:1}),u[171]||=i(`p`,null,`Using the CSS variable for a custom size:`,-1),o(R,null,{pug:n(()=>[...u[143]||=[s(`w-input(label="Custom 36px height" outline style="--w-size: 36px")`,-1)]]),html:n(()=>[...u[144]||=[s(`<w-input label="Custom 36px height" outline style="--w-size: 36px"></w-input>`,-1)]]),default:n(()=>[o(L,{label:`Custom 36px height`,outline:``,style:{"--w-size":`36px`}})]),_:1})])}var F=d({data:()=>({isPassword:!0,file1:null,file2:null,file3:null,files4:[],file5:null,loading:!1,overallProgress:void 0,todayFormatted:``,userIP:``}),computed:{filePreviewIcon(){let{extension:e}=this.file3;switch(e){case`jpg`:case`png`:case`gif`:case`pdf`:return`mdi mdi-file-${e}-box`;case`jpeg`:return`mdi mdi-file-jpg-box`;case`svg`:case`webp`:return`mdi mdi-image`;case`mov`:return`mdi mdi-filmstrip`;case`zip`:return`mdi mdi-folder-zip`;default:return`mdi mdi-file`}}},methods:{onFileInput(e){this.file1=e},getTodaysDate(){let e=new Date,t=e.getDate().toString().padStart(2,0),n=(e.getMonth()+1).toString().padStart(2,0),r=e.getFullYear();this.todayFormatted=`${r}${n}${t}`},async getUserIP(){await e.get(`https://api.ipify.org`).then(e=>{this.userIP=e.data.replace(/\./g,``)})},async onFormSuccess(){this.loading=!0;let t=`https://filebin.net/waveui-${this.userIP}${this.todayFormatted}`,{name:n,file:r}=this.file5;e.post(`${t}/${n}`,r).then(()=>{this.loading=!1,this.$waveui.notify(`<div>
              File transferred successfully.<br>Now check your
              <a href="${t}" target="_blank">
                Filebin <i class="w-icon mdi mdi-open-in-new"></i></a>.
              </div>`,`success`,0)},()=>{this.$waveui.notify(`<div>An error occurred.<br>Is Filebin down?<br>Or is there a problem with the file?</div>`,`error`,0),this.loading=!1})}},created(){this.getTodaysDate(),this.getUserIP()}},[[`render`,P]]);function I(e,r,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return c(),a(`div`,null,[r[1]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:n(()=>[...r[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:e.slots,title:`Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`]),o(m,{items:e.methods,title:`Methods`},null,8,[`items`])])}var L={id:`Sets the native HTML <code>id</code> and ties it to adjacent <code>&lt;label for&gt;</code> bindings. If omitted, Wave UI generates a stable id.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the input field.<br>Gets updated on text input.`,type:`Applies a native HTML <code>type</code> attribute.`,label:`Sets a visible label for the input field.`,labelPosition:`Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.`,innerIconLeft:`Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,innerIconRight:`Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,staticLabel:`Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.`,placeholder:`Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.`,color:`Applies a color to the input field's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the input field's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the input field's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,minlength:`Applies the native HTML <code>minlength</code> attribute.`,maxlength:`Applies the native HTML <code>maxlength</code> attribute which prevents typing more than this amount of characters.`,step:`For <code>type="number"</code> inputs.<br>Applies the native HTML <code>step</code> attribute which sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>.`,min:`For <code>type="number"</code> inputs.<br>Applies the native HTML <code>min</code> attribute which sets an integer or floating minimum number.`,max:`For <code>type="number"</code> inputs.<br>Applies the native HTML <code>max</code> attribute which sets an integer or floating maximum number.`,dark:!1,outline:`The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.`,round:`Sets a maximum border-radius on the corners of the input field, giving it a round look.`,shadow:`Applies a drop shadow to the input field.`,tile:`Removes the default border-radius and sets sharp edges on the input field.`,name:`Provide a native HTML <code>name</code> attribute to the input field. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the input field making it unreactive to user interactions.`,readonly:`The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the input field.`,validators:`<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.`,noBlurValidation:`<span class="deep-orange">Only when the input is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`,loading:`When set to <code>true</code>, displays an indefinite-value progress bar below the input field. If a number is given, it will be the value of the progress.`,xs:`Sets the height of the input field to extra small (~20 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,sm:`Sets the height of the input field to small (~24 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,md:`Sets the height of the input field to medium, which is the same as the default height (~28 px at 14 px base font size).`,lg:`Sets the height of the input field to large (~32 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`,xl:`Sets the height of the input field to extra large (~38 px at 14 px base font size).<br>Equivalent to setting the CSS variable <code>--w-size</code> to the corresponding value.`},R={default:{description:`The label content, if the <code>label</code> prop is not flexible enough.`},"icon-left":{description:`The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>`,params:{inputId:`The effective <code>id</code> string of the native input (your <code>id</code> prop or Wave UI’s stable default). Use with <code>&lt;label :for="inputId"&gt;</code> in custom slot markup.`}},"icon-right":{description:`The right icon, if the <code>innerIconRight</code> prop is not flexible enough.`,params:{inputId:`The effective <code>id</code> string of the native input (your <code>id</code> prop or Wave UI’s stable default). Use with <code>&lt;label :for="inputId"&gt;</code> in custom slot markup.`}}},z={input:{description:`Emitted each time the input text (or file) changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[String]":`The new textual input value.`}},"update:modelValue":{description:`Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[String]":`The new textual input value.`}},"update:overallProgress":{description:`Emitted continuously while uploading a file. When using the <code>multiple</code> option, this is the overall progress of all the files together.<br>You can use it with <code>:overall-progress.sync</code> in Vue 2, or <code>v-model:overall-progress</code> in Vue 3.`},focus:{description:`Emitted on input focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}},blur:{description:`Emitted on input blur.`,params:{"[DOM event object]":`The associated blur DOM event.`}},"click:inner-icon-left":{description:`Emitted on click of the left inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}},"click:inner-icon-right":{description:`Emitted on click of the right inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}}},B={focus:{description:`Focuses the inner native control. Also runs when the <code>v-focus</code> directive is used. Callable via <code>this.$refs.field.focus()</code>. No-op when <code>disabled</code> or <code>readonly</code>.`}},V=d({data:()=>({propsDescs:L,slots:R,methods:B}),computed:{props(){return{...f.props,...u.props}},events(){return f.emits.reduce((e,t)=>(e[t]=z[t]||{})&&e,{})}}},[[`render`,I]]);function H(e,r,i,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return c(),a(`main`,null,[o(f,null,{default:n(()=>[...r[0]||=[s(`w-input`,-1)]]),_:1}),o(p),o(m)])}var U=d({components:{Examples:F,Api:V}},[[`render`,H]]);export{U as default};