import{A as e,G as t,P as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{R as l}from"./index-CsKLTiYy.js";var u={class:`w-flex wrap align-center`},d={class:`w-flex wrap align-center`},f={class:`w-flex align-center wrap`},p={class:`w-flex grow`},m={class:`xs10`};function h(c,l,h,g,_,v){let y=n(`title-link`),b=n(`w-icon`),x=n(`w-button`),S=n(`w-badge`),C=n(`example`),w=n(`w-flex`);return e(),i(`div`,null,[a(y,{h2:``},{default:t(()=>[...l[13]||=[o(`Default`,-1)]]),_:1}),l[159]||=r(`p`,null,`The default badge background color is primary.`,-1),a(C,{"content-class":`mt2`},{pug:t(()=>[...l[17]||=[o(`w-badge
  template(#badge) 3
  w-button.primary(text)
    w-icon.mr1 mdi mdi-email
    | Emails`,-1)]]),html:t(()=>[...l[18]||=[o(`<w-badge>
  <template #badge>3</template>
  <w-button color="primary">
    <w-icon class="mr1">mdi mdi-email</w-icon>
    Emails
  </w-button>
</w-badge>
`,-1)]]),default:t(()=>[a(S,null,{badge:t(()=>[...l[14]||=[o(`3`,-1)]]),default:t(()=>[a(x,{class:`primary`,text:``},{default:t(()=>[a(b,{class:`mr1`},{default:t(()=>[...l[15]||=[o(`mdi mdi-email`,-1)]]),_:1}),l[16]||=o(`Emails`,-1)]),_:1})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[19]||=[o(`V-model`,-1)]]),_:1}),l[160]||=s(`<p>The badge appears if one of these conditions is fulfilled:</p><ul><li>No <code>v-model</code> or <code>model-value</code> is provided but a badge slot is.</li><li>A <code>v-model</code> or a <code>model-value</code> is given and is not <code>null</code>, <code>false</code> or <code>0</code>.<br>
If you want to display one of these values, you can cast it to a string and it will show up
(e.g. <code>&#39;0&#39;</code> instead of <code>0</code>).</li></ul>`,2),a(C,{"content-class":`mt1`},{pug:t(()=>[...l[21]||=[o(`w-flex(align-center)
  w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)
  w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
    w-icon(color="grey-light1" size="2.4em") mdi mdi-email
  w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)`,-1)]]),html:t(()=>[...l[22]||=[o(`<w-flex align-center>
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
</w-flex>`,-1)]]),js:t(()=>[...l[23]||=[o(`data: () => ({
  showBadge: 0
})
`,-1)]]),default:t(()=>[a(w,{"align-center":``},{default:t(()=>[a(x,{onClick:l[0]||=e=>c.showBadge--,icon:`wi-minus`,"bg-color":`success`,sm:``}),a(S,{class:`mx6`,modelValue:c.showBadge,"onUpdate:modelValue":l[1]||=e=>c.showBadge=e,"bg-color":`error`,overlap:``},{default:t(()=>[a(b,{color:`grey-light1`,size:`2.4em`},{default:t(()=>[...l[20]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1},8,[`modelValue`]),a(x,{onClick:l[2]||=e=>c.showBadge++,icon:`wi-plus`,"bg-color":`success`,sm:``})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[24]||=[o(`Positions`,-1)]]),_:1}),l[161]||=r(`p`,null,`The default position is top right.`,-1),a(C,null,{pug:t(()=>[...l[33]||=[o(`.title4.mb2 Top
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
  w-icon.grey-light1(size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[34]||=[o(`<div class="title4 mb2">Top</div>
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
`,-1)]]),default:t(()=>[l[35]||=r(`div`,{class:`title4 mb2`},`Top`,-1),a(S,{class:`ml4 mr10`,top:``,left:``},{badge:t(()=>[...l[25]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[26]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{top:``,right:``},{badge:t(()=>[...l[27]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[28]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),l[36]||=r(`div`,{class:`title4 mt6 mb2`},`Bottom`,-1),a(S,{class:`ml4 mr10`,bottom:``,left:``},{badge:t(()=>[...l[29]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[30]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{bottom:``,right:``},{badge:t(()=>[...l[31]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[32]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[37]||=[o(`Color and background color`,-1)]]),_:1}),l[162]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the text and a `),r(`code`,null,`bg-color`),o(` for the
background.`)],-1),a(C,{"content-class":`mt1`},{pug:t(()=>[...l[44]||=[o(`w-badge.mr10(bg-color="error")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge.mr10(color="yellow")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge(bg-color="lime-light1" color="green-dark2")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[45]||=[o(`<w-badge class="mr10" bg-color="error">
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
`,-1)]]),default:t(()=>[a(S,{class:`mr10`,"bg-color":`error`},{badge:t(()=>[...l[38]||=[o(`3`,-1)]]),default:t(()=>[a(b,{color:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[39]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,color:`yellow`},{badge:t(()=>[...l[40]||=[o(`3`,-1)]]),default:t(()=>[a(b,{color:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[41]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{"bg-color":`lime-light1`,color:`green-dark2`},{badge:t(()=>[...l[42]||=[o(`3`,-1)]]),default:t(()=>[a(b,{color:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[43]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[46]||=[o(`Dot`,-1)]]),_:1}),a(C,{"content-class":`mt1`},{pug:t(()=>[...l[49]||=[o(`w-badge.mr10(dot bg-color="red")
  w-icon(size="2.5em") mdi mdi-account
w-badge(dot bottom bg-color="red")
  w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[50]||=[o(`<w-badge class="mr10" dot bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-badge dot bottom bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>
`,-1)]]),default:t(()=>[a(S,{class:`mr10`,dot:``,"bg-color":`red`},{default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[47]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{dot:``,bottom:``,"bg-color":`red`},{default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[48]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[51]||=[o(`Sizes`,-1)]]),_:1}),l[163]||=s(`<p>The badge size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>size</code> prop (sets the font-size).</p>`,1),a(C,null,{pug:t(()=>[...l[77]||=[o(`.title3.mb2 Dots
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
    w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[78]||=[o(`<div class="title3 mb2">Dots</div>
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
`,-1)]]),default:t(()=>[l[79]||=r(`div`,{class:`title3 mb2`},`Dots`,-1),a(w,{wrap:``},{default:t(()=>[a(S,{class:`mr10`,dot:``,"bg-color":`red`,xs:``},{default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[52]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,dot:``,"bg-color":`red`,sm:``},{default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[53]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,dot:``,"bg-color":`red`,md:``},{default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[54]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,dot:``,"bg-color":`red`,lg:``},{default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[55]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,dot:``,"bg-color":`red`,xl:``},{default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[56]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),l[80]||=r(`div`,{class:`title3 mt6 mb2`},`Text content`,-1),a(w,{wrap:``},{default:t(()=>[a(S,{class:`mr10`,"bg-color":`error`,xs:``},{badge:t(()=>[...l[57]||=[o(`busy`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[58]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,"bg-color":`error`,sm:``},{badge:t(()=>[...l[59]||=[o(`busy`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[60]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,"bg-color":`error`,md:``},{badge:t(()=>[...l[61]||=[o(`busy`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[62]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,"bg-color":`error`,lg:``},{badge:t(()=>[...l[63]||=[o(`busy`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[64]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,"bg-color":`error`,xl:``},{badge:t(()=>[...l[65]||=[o(`busy`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[66]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),l[81]||=r(`div`,{class:`title3 mt6 mb2`},`Numeric content`,-1),a(w,{wrap:``},{default:t(()=>[a(S,{class:`mr10`,"bg-color":`error`,xs:``},{badge:t(()=>[...l[67]||=[o(`3`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[68]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,"bg-color":`error`,sm:``},{badge:t(()=>[...l[69]||=[o(`3`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[70]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,"bg-color":`error`,md:``},{badge:t(()=>[...l[71]||=[o(`3`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[72]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,"bg-color":`error`,lg:``},{badge:t(()=>[...l[73]||=[o(`3`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[74]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,"bg-color":`error`,xl:``},{badge:t(()=>[...l[75]||=[o(`3`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[76]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[82]||=[o(`Overlap`,-1)]]),_:1}),a(C,null,{pug:t(()=>[...l[101]||=[o(`.title4.mb3 Top
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[102]||=[o(`<div class="title4 mb3">Top</div>
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
`,-1)]]),default:t(()=>[l[103]||=r(`div`,{class:`title4 mb3`},`Top`,-1),r(`div`,u,[a(S,{class:`ml4 mr10`,top:``,left:``},{badge:t(()=>[...l[83]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[84]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{top:``,right:``},{badge:t(()=>[...l[85]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[86]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(b,{class:`mx12 grey-light3`,size:`2.5em`},{default:t(()=>[...l[87]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(S,{class:`mr10`,top:``,left:``,overlap:``},{badge:t(()=>[...l[88]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[89]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{top:``,right:``,overlap:``},{badge:t(()=>[...l[90]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[91]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1})]),l[104]||=r(`div`,{class:`title4 mt8 mb3`},`Bottom`,-1),r(`div`,d,[a(S,{class:`ml4 mr10`,bottom:``,left:``},{badge:t(()=>[...l[92]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[93]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{bottom:``,right:``},{badge:t(()=>[...l[94]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[95]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(b,{class:`mx12 grey-light3`,size:`2.5em`},{default:t(()=>[...l[96]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(S,{class:`mr10`,bottom:``,left:``,overlap:``},{badge:t(()=>[...l[97]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[98]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{bottom:``,right:``,overlap:``},{badge:t(()=>[...l[99]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[100]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1})])]),_:1}),l[164]||=r(`div`,{class:`title3 mt8 mb3`},`Overlaps with different sizes`,-1),a(C,{"content-class":`mt1`},{pug:t(()=>[...l[115]||=[o(`w-flex(wrap align-center)
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[116]||=[o(`<w-flex wrap align-center>
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
`,-1)]]),default:t(()=>[a(w,{wrap:``,"align-center":``},{default:t(()=>[a(S,{class:`mr10`,overlap:``,xs:``},{badge:t(()=>[...l[105]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[106]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,overlap:``,sm:``},{badge:t(()=>[...l[107]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[108]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,overlap:``,md:``},{badge:t(()=>[...l[109]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[110]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,overlap:``,lg:``},{badge:t(()=>[...l[111]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[112]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1}),a(S,{overlap:``,xl:``},{badge:t(()=>[...l[113]||=[o(`3`,-1)]]),default:t(()=>[a(b,{class:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[114]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[117]||=[o(`Force round badge`,-1)]]),_:1}),l[165]||=r(`p`,null,[o(`For instance, if you increase the font size of the badge like in this example, the natural behavior
of the badge is to increase its width to adapt to its content.`),r(`br`),o(`
With the option `),r(`code`,null,`round`),o(` you can force it to be round.`)],-1),a(C,{"content-class":`mt1 w-flex align-center`},{pug:t(()=>[...l[123]||=[o(`w-badge(bg-color="error")
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" round)
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[124]||=[o(`<w-badge bg-color="error">
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
`,-1)]]),default:t(()=>[a(S,{"bg-color":`error`},{badge:t(()=>[...l[118]||=[r(`span`,{class:`size--sm`},`11`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[119]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(b,{class:`ml12 mr6 grey-light3`,size:`2.5em`},{default:t(()=>[...l[120]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(S,{"bg-color":`error`,round:``},{badge:t(()=>[...l[121]||=[r(`span`,{class:`size--sm`},`11`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[122]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[125]||=[o(`Icons`,-1)]]),_:1}),a(C,{"content-class":`mt2`},{pug:t(()=>[...l[132]||=[o(`w-badge.mr10(bg-color="success" overlap round)
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
  w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[133]||=[o(`<w-badge class="mr10" bg-color="success" overlap round>
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
`,-1)]]),default:t(()=>[a(S,{class:`mr10`,"bg-color":`success`,overlap:``,round:``},{badge:t(()=>[a(b,null,{default:t(()=>[...l[126]||=[o(`mdi mdi-check`,-1)]]),_:1})]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[127]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{class:`mr10`,"bg-color":`error`,overlap:``,round:``},{badge:t(()=>[a(b,null,{default:t(()=>[...l[128]||=[o(`mdi mdi-close`,-1)]]),_:1})]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[129]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(S,{"bg-color":`transparent`,overlap:``,round:``},{badge:t(()=>[a(b,{color:`pink-light1`,md:``},{default:t(()=>[...l[130]||=[o(`mdi mdi-heart`,-1)]]),_:1})]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[131]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[134]||=[o(`Override badge padding`,-1)]]),_:1}),a(C,{"content-class":`w-flex wrap align-center`},{pug:t(()=>[...l[140]||=[o(`w-badge(bg-color="error" badge-class="px1")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" badge-class="px4")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account`,-1)]]),html:t(()=>[...l[141]||=[o(`<w-badge bg-color="error" badge-class="px1">
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
`,-1)]]),default:t(()=>[a(S,{"bg-color":`error`,"badge-class":`px1`},{badge:t(()=>[...l[135]||=[o(`busy`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[136]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1}),a(b,{class:`ml12 mr6 grey-light3`,size:`2.5em`},{default:t(()=>[...l[137]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1}),a(S,{"bg-color":`error`,"badge-class":`px4`},{badge:t(()=>[...l[138]||=[o(`busy`,-1)]]),default:t(()=>[a(b,{size:`2.5em`},{default:t(()=>[...l[139]||=[o(`mdi mdi-account`,-1)]]),_:1})]),_:1})]),_:1}),a(y,{h2:``},{default:t(()=>[...l[142]||=[o(`Transitions`,-1)]]),_:1}),l[166]||=r(`p`,null,[o(`The default transition is `),r(`code`,null,`fade`),o(`.`)],-1),a(C,null,{pug:t(()=>[...l[156]||=[o(`.w-flex.align-center.wrap
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
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email`,-1)]]),html:t(()=>[...l[157]||=[o(`<div class="w-flex align-center wrap">
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
</div>`,-1)]]),js:t(()=>[...l[158]||=[o(`data: () => ({
  showBadge: false,
  transition: 'fade'
})`,-1)]]),default:t(()=>[r(`div`,f,[a(w,{column:``,"no-grow":``,"align-end":``},{default:t(()=>[l[152]||=r(`span`,{class:`mb2`},`Toggle with this transition effect:`,-1),a(x,{class:`code ma1`,onClick:l[3]||=e=>{c.transition=`fade`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[143]||=[o(`fade`,-1)]]),_:1}),a(x,{class:`code ma1`,onClick:l[4]||=e=>{c.transition=`bounce`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[144]||=[o(`bounce`,-1)]]),_:1}),a(x,{class:`code ma1`,onClick:l[5]||=e=>{c.transition=`twist`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[145]||=[o(`twist`,-1)]]),_:1}),a(x,{class:`code ma1`,onClick:l[6]||=e=>{c.transition=`scale`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[146]||=[o(`scale`,-1)]]),_:1}),a(x,{class:`code ma1`,onClick:l[7]||=e=>{c.transition=`scale-fade`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[147]||=[o(`scale-fade`,-1)]]),_:1}),a(x,{class:`code ma1`,onClick:l[8]||=e=>{c.transition=`slide-fade-left`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[148]||=[o(`slide-fade-left`,-1)]]),_:1}),a(x,{class:`code ma1`,onClick:l[9]||=e=>{c.transition=`slide-fade-right`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[149]||=[o(`slide-fade-right`,-1)]]),_:1}),a(x,{class:`code ma1`,onClick:l[10]||=e=>{c.transition=`slide-fade-up`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[150]||=[o(`slide-fade-up`,-1)]]),_:1}),a(x,{class:`code ma1`,onClick:l[11]||=e=>{c.transition=`slide-fade-down`,c.showBadge2=!c.showBadge2},"bg-color":`primary`,xs:``},{default:t(()=>[...l[151]||=[o(`slide-fade-down`,-1)]]),_:1})]),_:1}),r(`div`,p,[l[155]||=r(`div`,{class:`xs2`},null,-1),r(`div`,m,[a(S,{class:`ma4`,modelValue:c.showBadge2,"onUpdate:modelValue":l[12]||=e=>c.showBadge2=e,transition:c.transition,"bg-color":`error`,overlap:``,round:``},{badge:t(()=>[...l[153]||=[o(`5`,-1)]]),default:t(()=>[a(b,{color:`grey-light1`,size:`2.5em`},{default:t(()=>[...l[154]||=[o(`mdi mdi-email`,-1)]]),_:1})]),_:1},8,[`modelValue`,`transition`])])])])]),_:1})])}var g=c({data:()=>({showBadge:0,showBadge2:!1,transition:`fade`})},[[`render`,h]]);function _(s,c,l,u,d,f){let p=n(`title-link`),m=n(`component-api`);return e(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:s.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var v={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the badge. Any truthy value will show the badge whereas any falsy value will hide it.`,xs:`Sets the size (font-size) of the badge to extra small.`,sm:`Sets the size (font-size) of the badge to small.`,md:`Sets the size (font-size) of the badge to medium.`,lg:`Sets the size (font-size) of the badge to large.`,xl:`Sets the size (font-size) of the badge to extra large.`,top:`Places the badge at the top of its activator, either on the left or right (right by default).`,left:`Places the badge at the left of its activator, either at the top or bottom (top by default).`,right:`Places the badge at the right of its activator, either at the top or bottom (top by default).`,bottom:`Places the badge at the bottom of its activator, either on the left or right (right by default).`,overlap:`Overlaps the activator element narrowing the distance between the activator and the badge.`,inline:`Displays the badge inline, in a <code>static</code> position instead of <code>absolute</code> by default.`,color:`Applies a color to the badge's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the badge's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:`Sets the font-size of the badge.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,dark:`When set to true, the text color will be set to white.`,badgeClass:`Applies a custom CSS class to the badge element.`,outline:`The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.`,shadow:`Applies a drop shadow to the badge.`,dot:`Displays a much smaller dot with no content in it.`,round:`Forces the badge to be round, when the content is too wide and causes a natural increase of the badge width.`,transition:`Applies a particular transition to the badge when showing and hiding.<br>Check all the transitions that apply to the badge component in the <a href="#transitions">Transitions</a> example.`},y={default:{description:`The element receiving the badge. Can be any visible DOM element or mounted component.`},badge:{description:`The badge content.`}},b={},x=c({data:()=>({propsDescs:v,slots:y}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:b[t]||``},e),{})}}},[[`render`,_]]);function S(r,s,c,l,u,d){let f=n(`ui-component-title`),p=n(`examples`),m=n(`api`);return e(),i(`main`,null,[a(f,null,{default:t(()=>[...s[0]||=[o(`w-badge`,-1)]]),_:1}),a(p),a(m)])}var C=c({components:{Examples:g,Api:x}},[[`render`,S]]);export{C as default};