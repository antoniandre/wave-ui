import{N as e,U as t,c as n,d as r,g as i,h as a,k as o,m as s}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as c}from"./_plugin-vue_export-helper-S3RvzygF.js";import{R as l}from"./index-DJwFRA2S.js";var u={class:`w-flex wrap align-center`},d={class:`w-flex wrap align-center`},f={class:`w-flex align-center wrap`},p={class:`w-flex grow`},m={class:`xs10`};function h(c,l,h,g,_,v){let y=e(`title-link`),b=e(`w-icon`),x=e(`w-button`),S=e(`w-badge`),C=e(`example`),w=e(`w-flex`);return o(),r(`div`,null,[i(y,{h2:``},{default:t(()=>[...l[13]||=[a(`Default`,-1)]]),_:1}),l[159]||=n(`p`,null,`The default badge background color is primary.`,-1),i(C,{"content-class":`mt2`},{pug:t(()=>[...l[17]||=[a(`w-badge
  template(#badge) 3
  w-button.primary(text)
    w-icon.mr1 mdi mdi-email
    | Emails`,-1)]]),html:t(()=>[...l[18]||=[a(`<w-badge>
  <template #badge>3</template>
  <w-button color="primary">
    <w-icon class="mr1">mdi mdi-email</w-icon>
    Emails
  </w-button>
</w-badge>
`,-1)]]),default:t(()=>[i(S,null,{badge:t(()=>[...l[14]||=[a(`3`,-1)]]),default:t(()=>[i(x,{class:`primary`,text:``},{default:t(()=>[i(b,{class:`mr1`},{default:t(()=>[...l[15]||=[a(`mdi mdi-email`,-1)]]),_:1}),l[16]||=a(`Emails`,-1)]),_:1})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[19]||=[a(`V-model`,-1)]]),_:1}),l[160]||=s(`<p>The badge appears if one of these conditions is fulfilled:</p><ul><li>No <code>v-model</code> or <code>model-value</code> is provided but a badge slot is.</li><li>A <code>v-model</code> or a <code>model-value</code> is given and is not <code>null</code>, <code>false</code> or <code>0</code>.<br>
If you want to display one of these values, you can cast it to a string and it will show up
(e.g. <code>&#39;0&#39;</code> instead of <code>0</code>).</li></ul>`,2),i(C,{"content-class":`mt1`},{pug:t(()=>[...l[21]||=[a(`w-flex(align-center)
  w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)
  w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
    w-icon(color="grey-light1" size="2.4em") mdi mdi-email
  w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)`,-1)]]),html:t(()=>[...l[22]||=[a(`<w-flex align-center>
  <w-button
    @click="showBadge--"
    icon="wi-minus"
    bg-color="success"
    sm>
  </w-button>

  <w-badge
    class="mx6"
    v-model="showBadge"
    bg-color="error"
    overlap>
    <w-icon color="grey-light1" size="2.4em">
      mdi mdi-email
    </w-icon>
  </w-badge>

  <w-button
    @click="showBadge++"
    icon="wi-plus"
    bg-color="success"
    sm>
  </w-button>
</w-flex>`,-1)]]),js:t(()=>[...l[23]||=[a(`data: () => ({
  showBadge: 0
})
`,-1)]]),default:t(()=>[i(w,{"align-center":``},{default:t(()=>[i(x,{onClick:l[0]||=e=>c.showBadge--,icon:`wi-minus`,"bg-color":`success`,sm:``}),i(S,{class:`mx6`,modelValue:c.showBadge,"onUpdate:modelValue":l[1]||=e=>c.showBadge=e,"bg-color":`error`,overlap:``},{default:t(()=>[i(b,{color:`grey-light1`,size:`2.4em`},{default:t(()=>[...l[20]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1},8,[`modelValue`]),i(x,{onClick:l[2]||=e=>c.showBadge++,icon:`wi-plus`,"bg-color":`success`,sm:``})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[24]||=[a(`Positions`,-1)]]),_:1}),l[161]||=n(`p`,null,`The default position is top right.`,-1),i(C,null,{pug:t(()=>[...l[33]||=[a(`.title4.mb2 Top
w-badge.ml4.mr10(top left)
  template(#badge) 3
  w-icon.grey-light1(size="2.5em") mdi mdi-email
w-badge(top right)
  template(#badge) 3
  w-icon.grey-light1(size="2.5em") mdi mdi-email

.title4.mt6.mb2 Bottom
w-badge.ml4.mr10(bottom left)
  template(#badge) 3
  w-icon.grey-light1(size="2.5em") mdi mdi-email
w-badge(bottom right)
  template(#badge) 3
  w-icon.grey-light1(size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[34]||=[a(`<div class="title4 mb2">Top</div>
<w-badge class="ml4 mr10" top left>
  <template #badge>3</template>
  <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>
</w-badge>
<w-badge top right>
  <template #badge>3</template>
  <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>
</w-badge>

<div class="title4 mt6 mb2">Bottom</div>
<w-badge class="ml4 mr10" bottom left>
  <template #badge>3</template>
  <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>
</w-badge>
<w-badge bottom right>
  <template #badge>3</template>
  <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>
</w-badge>
`,-1)]]),default:t(()=>[l[35]||=n(`div`,{class:`title4 mb2`},`Top`,-1),i(S,{class:`ml4 mr10`,top:``,left:``},{badge:t(()=>[...l[25]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[26]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{top:``,right:``},{badge:t(()=>[...l[27]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[28]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),l[36]||=n(`div`,{class:`title4 mt6 mb2`},`Bottom`,-1),i(S,{class:`ml4 mr10`,bottom:``,left:``},{badge:t(()=>[...l[29]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[30]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{bottom:``,right:``},{badge:t(()=>[...l[31]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[32]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[37]||=[a(`Color and background color`,-1)]]),_:1}),l[162]||=n(`p`,null,[a(`Like in most components, you can set a `),n(`code`,null,`color`),a(` for the text and a `),n(`code`,null,`bg-color`),a(` for the
background.`)],-1),i(C,{"content-class":`mt1`},{pug:t(()=>[...l[44]||=[a(`w-badge.mr10(bg-color="error")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge.mr10(color="yellow")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge(bg-color="lime-light1" color="green-dark2")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[45]||=[a(`<w-badge class="mr10" bg-color="error">
  <template #badge>3</template>
  <w-icon color="grey-light1" size="2.5em">mdi mdi-email</w-icon>
</w-badge>

<w-badge class="mr10" color="yellow">
  <template #badge>3</template>
  <w-icon color="grey-light1" size="2.5em">mdi mdi-email</w-icon>
</w-badge>

<w-badge bg-color="lime-light1" color="green-dark2">
  <template #badge>3</template>
  <w-icon color="grey-light1" size="2.5em">mdi mdi-email</w-icon>
</w-badge>
`,-1)]]),default:t(()=>[i(S,{class:`mr10`,"bg-color":`error`},{badge:t(()=>[...l[38]||=[a(`3`,-1)]]),default:t(()=>[i(b,{color:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[39]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,color:`yellow`},{badge:t(()=>[...l[40]||=[a(`3`,-1)]]),default:t(()=>[i(b,{color:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[41]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{"bg-color":`lime-light1`,color:`green-dark2`},{badge:t(()=>[...l[42]||=[a(`3`,-1)]]),default:t(()=>[i(b,{color:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[43]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[46]||=[a(`Dot`,-1)]]),_:1}),i(C,{"content-class":`mt1`},{pug:t(()=>[...l[49]||=[a(`w-badge.mr10(dot bg-color="red")
  w-icon(size="2.5em") mdi mdi-account
w-badge(dot bottom bg-color="red")
  w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[50]||=[a(`<w-badge class="mr10" dot bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-badge dot bottom bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>
`,-1)]]),default:t(()=>[i(S,{class:`mr10`,dot:``,"bg-color":`red`},{default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[47]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{dot:``,bottom:``,"bg-color":`red`},{default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[48]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[51]||=[a(`Sizes`,-1)]]),_:1}),l[163]||=s(`<p>The badge size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>size</code> prop (sets the font-size).</p>`,1),i(C,null,{pug:t(()=>[...l[77]||=[a(`.title3.mb2 Dots
w-flex(wrap)
  w-badge.mr10(dot bg-color="red" xs)
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(dot bg-color="red" sm)
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(dot bg-color="red" md)
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(dot bg-color="red" lg)
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(dot bg-color="red" xl)
    w-icon(size="2.5em") mdi mdi-account
.title3.mt6.mb2 Text content
w-flex(wrap)
  w-badge.mr10(bg-color="error" xs)
    template(#badge) busy
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(bg-color="error" sm)
    template(#badge) busy
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(bg-color="error" md)
    template(#badge) busy
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(bg-color="error" lg)
    template(#badge) busy
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(bg-color="error" xl)
    template(#badge) busy
    w-icon(size="2.5em") mdi mdi-account
.title3.mt6.mb2 Numeric content
w-flex(wrap)
  w-badge.mr10(bg-color="error" xs)
    template(#badge) 3
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(bg-color="error" sm)
    template(#badge) 3
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(bg-color="error" md)
    template(#badge) 3
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(bg-color="error" lg)
    template(#badge) 3
    w-icon(size="2.5em") mdi mdi-account
  w-badge.mr10(bg-color="error" xl)
    template(#badge) 3
    w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[78]||=[a(`<div class="title3 mb2">Dots</div>
<w-flex wrap>
  <w-badge class="mr10" dot bg-color="red" xs>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" dot bg-color="red" sm>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" dot bg-color="red" md>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" dot bg-color="red" lg>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" dot bg-color="red" xl>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
</w-flex>

<div class="title3 mt6 mb2">Text content</div>
<w-flex wrap>
  <w-badge class="mr10" bg-color="error" xs>
    <template #badge>busy</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" bg-color="error" sm>
    <template #badge>busy</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" bg-color="error" md>
    <template #badge>busy</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" bg-color="error" lg>
    <template #badge>busy</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" bg-color="error" xl>
    <template #badge>busy</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
</w-flex>

<div class="title3 mt6 mb2">Numeric content</div>
<w-flex wrap>
  <w-badge class="mr10" bg-color="error" xs>
    <template #badge>3</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" bg-color="error" sm>
    <template #badge>3</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" bg-color="error" md>
    <template #badge>3</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" bg-color="error" lg>
    <template #badge>3</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
  <w-badge class="mr10" bg-color="error" xl>
    <template #badge>3</template>
    <w-icon size="2.5em">mdi mdi-account</w-icon>
  </w-badge>
</w-flex>
`,-1)]]),default:t(()=>[l[79]||=n(`div`,{class:`title3 mb2`},`Dots`,-1),i(w,{wrap:``},{default:t(()=>[i(S,{class:`mr10`,dot:``,"bg-color":`red`,xs:``},{default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[52]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,dot:``,"bg-color":`red`,sm:``},{default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[53]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,dot:``,"bg-color":`red`,md:``},{default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[54]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,dot:``,"bg-color":`red`,lg:``},{default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[55]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,dot:``,"bg-color":`red`,xl:``},{default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[56]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),l[80]||=n(`div`,{class:`title3 mt6 mb2`},`Text content`,-1),i(w,{wrap:``},{default:t(()=>[i(S,{class:`mr10`,"bg-color":`error`,xs:``},{badge:t(()=>[...l[57]||=[a(`busy`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[58]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,"bg-color":`error`,sm:``},{badge:t(()=>[...l[59]||=[a(`busy`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[60]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,"bg-color":`error`,md:``},{badge:t(()=>[...l[61]||=[a(`busy`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[62]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,"bg-color":`error`,lg:``},{badge:t(()=>[...l[63]||=[a(`busy`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[64]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,"bg-color":`error`,xl:``},{badge:t(()=>[...l[65]||=[a(`busy`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[66]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),l[81]||=n(`div`,{class:`title3 mt6 mb2`},`Numeric content`,-1),i(w,{wrap:``},{default:t(()=>[i(S,{class:`mr10`,"bg-color":`error`,xs:``},{badge:t(()=>[...l[67]||=[a(`3`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[68]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,"bg-color":`error`,sm:``},{badge:t(()=>[...l[69]||=[a(`3`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[70]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,"bg-color":`error`,md:``},{badge:t(()=>[...l[71]||=[a(`3`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[72]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,"bg-color":`error`,lg:``},{badge:t(()=>[...l[73]||=[a(`3`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[74]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,"bg-color":`error`,xl:``},{badge:t(()=>[...l[75]||=[a(`3`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[76]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[82]||=[a(`Overlap`,-1)]]),_:1}),i(C,null,{pug:t(()=>[...l[101]||=[a(`.title4.mb3 Top
.w-flex.wrap.align-center
  w-badge.ml4.mr10(top left)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email

  w-badge(top right)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email

  w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right

  w-badge.mr10(top left overlap)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email

  w-badge(top right overlap)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email

.title4.mt8.mb3 Bottom
.w-flex.wrap.align-center
  w-badge.ml4.mr10(bottom left)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email

  w-badge(bottom right)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email

  w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right

  w-badge.mr10(bottom left overlap)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email

  w-badge(bottom right overlap)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[102]||=[a(`<div class="title4 mb3">Top</div>
<div class="w-flex wrap align-center">
  <w-badge class="ml4 mr10" top left>
    <template #badge>3</template>
    <w-icon
      class="grey-light1"
      size="2.5em">
      mdi mdi-email
    </w-icon>
  </w-badge>

  <w-badge top right>
    <template #badge>3</template>
    <w-icon
      class="grey-light1"
      size="2.5em">
      mdi mdi-email
    </w-icon>
  </w-badge>

  <w-icon
    class="mx12
    grey-light3"
    size="2.5em">
    mdi mdi-arrow-right
  </w-icon>

  <w-badge class="mr10" top left overlap>
    <template #badge>3</template>
    <w-icon
      class="grey-light1"
      size="2.5em">
      mdi mdi-email
    </w-icon>
  </w-badge>

  <w-badge top right overlap>
    <template #badge>3</template>
    <w-icon
      class="grey-light1"
      size="2.5em">
      mdi mdi-email
    </w-icon>
  </w-badge>
</div>

<div class="title4 mt8 mb3">Bottom</div>
<div class="w-flex wrap align-center">
  <w-badge class="ml4 mr10" bottom left>
    <template #badge>3</template>
    <w-icon
      class="grey-light1"
      size="2.5em">
      mdi mdi-email
    </w-icon>
  </w-badge>

  <w-badge bottom right>
    <template #badge>3</template>
    <w-icon
      class="grey-light1"
      size="2.5em">
      mdi mdi-email
    </w-icon>
  </w-badge>

  <w-icon
    class="mx12
    grey-light3"
    size="2.5em">
    mdi mdi-arrow-right
  </w-icon>

  <w-badge class="mr10" bottom left overlap>
    <template #badge>3</template>
    <w-icon
      class="grey-light1"
      size="2.5em">
      mdi mdi-email
    </w-icon>
  </w-badge>

  <w-badge bottom right overlap>
    <template #badge>3</template>
    <w-icon
      class="grey-light1"
      size="2.5em">
      mdi mdi-email
    </w-icon>
  </w-badge>
</div>
`,-1)]]),default:t(()=>[l[103]||=n(`div`,{class:`title4 mb3`},`Top`,-1),n(`div`,u,[i(S,{class:`ml4 mr10`,top:``,left:``},{badge:t(()=>[...l[83]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[84]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{top:``,right:``},{badge:t(()=>[...l[85]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[86]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(b,{class:`mx12 grey-light3`,size:`2.5em`},{default:t(()=>[...l[87]||=[a(`mdi mdi-arrow-right`,-1)]]),_:1}),i(S,{class:`mr10`,top:``,left:``,overlap:``},{badge:t(()=>[...l[88]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[89]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{top:``,right:``,overlap:``},{badge:t(()=>[...l[90]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[91]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1})]),l[104]||=n(`div`,{class:`title4 mt8 mb3`},`Bottom`,-1),n(`div`,d,[i(S,{class:`ml4 mr10`,bottom:``,left:``},{badge:t(()=>[...l[92]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[93]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{bottom:``,right:``},{badge:t(()=>[...l[94]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[95]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(b,{class:`mx12 grey-light3`,size:`2.5em`},{default:t(()=>[...l[96]||=[a(`mdi mdi-arrow-right`,-1)]]),_:1}),i(S,{class:`mr10`,bottom:``,left:``,overlap:``},{badge:t(()=>[...l[97]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[98]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{bottom:``,right:``,overlap:``},{badge:t(()=>[...l[99]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[100]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1})])]),_:1}),l[164]||=n(`div`,{class:`title3 mt8 mb3`},`Overlaps with different sizes`,-1),i(C,{"content-class":`mt1`},{pug:t(()=>[...l[115]||=[a(`w-flex(wrap align-center)
  w-badge.mr10(overlap xs)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email
  w-badge.mr10(overlap sm)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email
  w-badge.mr10(overlap md)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email
  w-badge.mr10(overlap lg)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email
  w-badge(overlap xl)
    template(#badge) 3
    w-icon.grey-light1(size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[116]||=[a(`<w-flex wrap align-center>
  <w-badge class="mr10" overlap xs>
    <template #badge>3</template>
    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>
  </w-badge>

  <w-badge class="mr10" overlap sm>
    <template #badge>3</template>
    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>
  </w-badge>

  <w-badge class="mr10" overlap md>
    <template #badge>3</template>
    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>
  </w-badge>

  <w-badge class="mr10" overlap lg>
    <template #badge>3</template>
    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>
  </w-badge>

  <w-badge overlap xl>
    <template #badge>3</template>
    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>
  </w-badge>
</w-flex>
`,-1)]]),default:t(()=>[i(w,{wrap:``,"align-center":``},{default:t(()=>[i(S,{class:`mr10`,overlap:``,xs:``},{badge:t(()=>[...l[105]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[106]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,overlap:``,sm:``},{badge:t(()=>[...l[107]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[108]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,overlap:``,md:``},{badge:t(()=>[...l[109]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[110]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,overlap:``,lg:``},{badge:t(()=>[...l[111]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[112]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1}),i(S,{overlap:``,xl:``},{badge:t(()=>[...l[113]||=[a(`3`,-1)]]),default:t(()=>[i(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[114]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[117]||=[a(`Force round badge`,-1)]]),_:1}),l[165]||=n(`p`,null,[a(`For instance, if you increase the font size of the badge like in this example, the natural behavior
of the badge is to increase its width to adapt to its content.`),n(`br`),a(`
With the option `),n(`code`,null,`round`),a(` you can force it to be round.`)],-1),i(C,{"content-class":`mt1 w-flex align-center`},{pug:t(()=>[...l[123]||=[a(`w-badge(bg-color="error")
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" round)
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[124]||=[a(`<w-badge bg-color="error">
  <template #badge="">
    <span class="size--sm">11</span>
  </template>
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-icon
  class="ml12 mr6 grey-light3"
  size="2.5em">
  mdi mdi-arrow-right
</w-icon>

<w-badge bg-color="error" round>
  <template #badge="">
    <span class="size--sm">11</span>
  </template>
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>
`,-1)]]),default:t(()=>[i(S,{"bg-color":`error`},{badge:t(()=>[...l[118]||=[n(`span`,{class:`size--sm`},`11`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[119]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(b,{class:`ml12 mr6 grey-light3`,size:`2.5em`},{default:t(()=>[...l[120]||=[a(`mdi mdi-arrow-right`,-1)]]),_:1}),i(S,{"bg-color":`error`,round:``},{badge:t(()=>[...l[121]||=[n(`span`,{class:`size--sm`},`11`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[122]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[125]||=[a(`Icons`,-1)]]),_:1}),i(C,{"content-class":`mt2`},{pug:t(()=>[...l[132]||=[a(`w-badge.mr10(bg-color="success" overlap round)
  template(#badge)
    w-icon mdi mdi-check
  w-icon(size="2.5em") mdi mdi-account
w-badge.mr10(bg-color="error" overlap round)
  template(#badge)
    w-icon mdi mdi-close
  w-icon(size="2.5em") mdi mdi-account
w-badge(bg-color="transparent" overlap round)
  template(#badge)
    w-icon(color="pink-light1" md) mdi mdi-heart
  w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[133]||=[a(`<w-badge class="mr10" bg-color="success" overlap round>
  <template #badge>
    <w-icon>mdi mdi-check</w-icon>
  </template>
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-badge class="mr10" bg-color="error" overlap round>
  <template #badge>
    <w-icon>mdi mdi-close</w-icon>
  </template>
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-badge bg-color="transparent" overlap round>
  <template #badge>
    <w-icon color="pink-light1" md>mdi mdi-heart</w-icon>
  </template>
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>
`,-1)]]),default:t(()=>[i(S,{class:`mr10`,"bg-color":`success`,overlap:``,round:``},{badge:t(()=>[i(b,null,{default:t(()=>[...l[126]||=[a(`mdi mdi-check`,-1)]]),_:1})]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[127]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{class:`mr10`,"bg-color":`error`,overlap:``,round:``},{badge:t(()=>[i(b,null,{default:t(()=>[...l[128]||=[a(`mdi mdi-close`,-1)]]),_:1})]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[129]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(S,{"bg-color":`transparent`,overlap:``,round:``},{badge:t(()=>[i(b,{color:`pink-light1`,md:``},{default:t(()=>[...l[130]||=[a(`mdi mdi-heart`,-1)]]),_:1})]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[131]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[134]||=[a(`Override badge padding`,-1)]]),_:1}),i(C,{"content-class":`w-flex wrap align-center`},{pug:t(()=>[...l[140]||=[a(`w-badge(bg-color="error" badge-class="px1")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" badge-class="px4")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[141]||=[a(`<w-badge bg-color="error" badge-class="px1">
  <template #badge>busy</template>
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-icon
  class="ml12 mr6 grey-light3"
  size="2.5em">
  mdi mdi-arrow-right
</w-icon>

<w-badge bg-color="error" badge-class="px4">
  <template #badge>busy</template>
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>
`,-1)]]),default:t(()=>[i(S,{"bg-color":`error`,"badge-class":`px1`},{badge:t(()=>[...l[135]||=[a(`busy`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[136]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1}),i(b,{class:`ml12 mr6 grey-light3`,size:`2.5em`},{default:t(()=>[...l[137]||=[a(`mdi mdi-arrow-right`,-1)]]),_:1}),i(S,{"bg-color":`error`,"badge-class":`px4`},{badge:t(()=>[...l[138]||=[a(`busy`,-1)]]),default:t(()=>[i(b,{size:`2.5em`},{default:t(()=>[...l[139]||=[a(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),i(y,{h2:``},{default:t(()=>[...l[142]||=[a(`Transitions`,-1)]]),_:1}),l[166]||=n(`p`,null,[a(`The default transition is `),n(`code`,null,`fade`),a(`.`)],-1),i(C,null,{pug:t(()=>[...l[156]||=[a(`.w-flex.align-center.wrap
  w-flex(column no-grow align-end)
    span.mb2 Toggle with this transition effect:
    w-button.code.ma1(@click="transition = 'fade';showBadge = !showBadge" bg-color="primary" xs) fade
    w-button.code.ma1(@click="transition = 'bounce';showBadge = !showBadge" bg-color="primary" xs) bounce
    w-button.code.ma1(@click="transition = 'twist';showBadge = !showBadge" bg-color="primary" xs) twist
    w-button.code.ma1(@click="transition = 'scale';showBadge = !showBadge" bg-color="primary" xs) scale
    w-button.code.ma1(@click="transition = 'scale-fade';showBadge = !showBadge" bg-color="primary" xs) scale-fade
    w-button.code.ma1(@click="transition = 'slide-fade-left';showBadge = !showBadge" bg-color="primary" xs) slide-fade-left
    w-button.code.ma1(@click="transition = 'slide-fade-right';showBadge = !showBadge" bg-color="primary" xs) slide-fade-right
    w-button.code.ma1(@click="transition = 'slide-fade-up';showBadge = !showBadge" bg-color="primary" xs) slide-fade-up
    w-button.code.ma1(@click="transition = 'slide-fade-down';showBadge = !showBadge" bg-color="primary" xs) slide-fade-down
  .w-flex.grow
    .xs2
    .xs10
      w-badge.ma4(v-model="showBadge" :transition="transition" bg-color="error" overlap round)
        template(#badge) 5
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[157]||=[a(`<div class="w-flex align-center wrap">
  <w-flex column no-grow align-end>
    <span class="mb2">Toggle with this transition effect:</span>
    <w-button
      class="code ma1"
      @click="transition = 'fade';showBadge = !showBadge"
      bg-color="primary"
      xs>
      fade
    </w-button>
    <w-button
      class="code ma1"
      @click="transition = 'bounce';showBadge = !showBadge"
      bg-color="primary"
      xs>
      bounce
    </w-button>
    <w-button
      class="code ma1"
      @click="transition = 'twist';showBadge = !showBadge"
      bg-color="primary"
      xs>
      twist
    </w-button>
    <w-button
      class="code ma1"
      @click="transition = 'scale';showBadge = !showBadge"
      bg-color="primary"
      xs>
      scale
    </w-button>
    <w-button
      class="code ma1"
      @click="transition = 'scale-fade';showBadge = !showBadge"
      bg-color="primary"
      xs>
      scale-fade
    </w-button>
    <w-button
      class="code ma1"
      @click="transition = 'slide-fade-left';showBadge = !showBadge"
      bg-color="primary"
      xs>
      slide-fade-left
    </w-button>
    <w-button
      class="code ma1"
      @click="transition = 'slide-fade-right';showBadge = !showBadge"
      bg-color="primary"
      xs>
      slide-fade-right
    </w-button>
    <w-button
      class="code ma1"
      @click="transition = 'slide-fade-up';showBadge = !showBadge"
      bg-color="primary"
      xs>
      slide-fade-up
    </w-button>
    <w-button
      class="code ma1"
      @click="transition = 'slide-fade-down';showBadge = !showBadge"
      bg-color="primary"
      xs>
      slide-fade-down
    </w-button>
  </w-flex>

  <div class="w-flex grow">
    <div class="xs2"></div>
    <div class="xs10">
      <w-badge
        class="ma4"
        v-model="showBadge"
        :transition="transition"
        bg-color="error"
        overlap
        round>
        <template #badge>5</template>
        <w-icon color="grey-light1" size="2.5em">mdi mdi-email</w-icon>
      </w-badge>
    </div>
  </w-flex>
</div>`,-1)]]),js:t(()=>[...l[158]||=[a(`data: () => ({
  showBadge: false,
  transition: 'fade'
})`,-1)]]),default:t(()=>[n(`div`,f,[i(w,{column:``,"no-grow":``,"align-end":``},{default:t(()=>[l[152]||=n(`span`,{class:`mb2`},`Toggle with this transition effect:`,-1),i(x,{class:`code ma1`,onClick:l[3]||=e=>{c.transition=`fade`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[143]||=[a(`fade`,-1)]]),_:1}),i(x,{class:`code ma1`,onClick:l[4]||=e=>{c.transition=`bounce`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[144]||=[a(`bounce`,-1)]]),_:1}),i(x,{class:`code ma1`,onClick:l[5]||=e=>{c.transition=`twist`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[145]||=[a(`twist`,-1)]]),_:1}),i(x,{class:`code ma1`,onClick:l[6]||=e=>{c.transition=`scale`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[146]||=[a(`scale`,-1)]]),_:1}),i(x,{class:`code ma1`,onClick:l[7]||=e=>{c.transition=`scale-fade`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[147]||=[a(`scale-fade`,-1)]]),_:1}),i(x,{class:`code ma1`,onClick:l[8]||=e=>{c.transition=`slide-fade-left`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[148]||=[a(`slide-fade-left`,-1)]]),_:1}),i(x,{class:`code ma1`,onClick:l[9]||=e=>{c.transition=`slide-fade-right`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[149]||=[a(`slide-fade-right`,-1)]]),_:1}),i(x,{class:`code ma1`,onClick:l[10]||=e=>{c.transition=`slide-fade-up`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[150]||=[a(`slide-fade-up`,-1)]]),_:1}),i(x,{class:`code ma1`,onClick:l[11]||=e=>{c.transition=`slide-fade-down`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[151]||=[a(`slide-fade-down`,-1)]]),_:1})]),_:1}),n(`div`,p,[l[155]||=n(`div`,{class:`xs2`},null,-1),n(`div`,m,[i(S,{class:`ma4`,modelValue:c.showBadge2,"onUpdate:modelValue":l[12]||=e=>c.showBadge2=e,transition:c.transition,"bg-color":`error`,overlap:``,round:``},{badge:t(()=>[...l[153]||=[a(`5`,-1)]]),default:t(()=>[i(b,{color:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[154]||=[a(`mdi mdi-email`,-1)]]),_:1})]),_:1},8,[`modelValue`,`transition`])])])])]),_:1})])}var g=c({data:()=>({showBadge:0,showBadge2:!1,transition:`fade`})},[[`render`,h]]);function _(s,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var v={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the badge. Any truthy value will show the badge whereas any falsy value will hide it.`,xs:`Sets the size (font-size) of the badge to extra small.`,sm:`Sets the size (font-size) of the badge to small.`,md:`Sets the size (font-size) of the badge to medium.`,lg:`Sets the size (font-size) of the badge to large.`,xl:`Sets the size (font-size) of the badge to extra large.`,top:`Places the badge at the top of its activator, either on the left or right (right by default).`,left:`Places the badge at the left of its activator, either at the top or bottom (top by default).`,right:`Places the badge at the right of its activator, either at the top or bottom (top by default).`,bottom:`Places the badge at the bottom of its activator, either on the left or right (right by default).`,overlap:`Overlaps the activator element narrowing the distance between the activator and the badge.`,inline:`Displays the badge inline, in a <code>static</code> position instead of <code>absolute</code> by default.`,color:`Applies a color to the badge's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the badge's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:`Sets the font-size of the badge.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,dark:`When set to true, the text color will be set to white.`,badgeClass:`Applies a custom CSS class to the badge element.`,outline:`The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.`,shadow:`Applies a drop shadow to the badge.`,dot:`Displays a much smaller dot with no content in it.`,round:`Forces the badge to be round, when the content is too wide and causes a natural increase of the badge width.`,transition:`Applies a particular transition to the badge when showing and hiding.<br>Check all the transitions that apply to the badge component in the <a href="#transitions">Transitions</a> example.`},y={default:{description:`The element receiving the badge. Can be any visible DOM element or mounted component.`},badge:{description:`The badge content.`}},b={},x=c({data:()=>({propsDescs:v,slots:y}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:b[t]||``},e),{})}}},[[`render`,_]]);function S(n,s,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return o(),r(`main`,null,[i(f,null,{default:t(()=>[...s[0]||=[a(`w-badge`,-1)]]),_:1}),i(p),i(m)])}var C=c({components:{Examples:g,Api:x}},[[`render`,S]]);export{C as default};