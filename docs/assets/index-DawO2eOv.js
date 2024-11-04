import{r as b,o as p,g as f,a as t,w as o,b as n,d as a,h as x,_ as c,y as B}from"./index-DM46aIYM.js";const k={class:"w-flex wrap align-center"},$={class:"w-flex wrap align-center"},T={class:"w-flex align-center wrap"},C={class:"w-flex grow"},h={class:"xs10"};function V(d,e,z,y,v,u){const m=b("title-link"),i=b("w-icon"),s=b("w-button"),l=b("w-badge"),g=b("example"),w=b("w-flex");return p(),f("div",null,[t(m,{h2:""},{default:o(()=>e[13]||(e[13]=[n("Default")])),_:1}),e[159]||(e[159]=a("p",null,"The default badge background color is primary.",-1)),t(g,{"content-class":"mt2"},{pug:o(()=>e[17]||(e[17]=[n(`w-badge
  template(#badge) 3
  w-button.primary(text)
    w-icon.mr1 mdi mdi-email
    | Emails`)])),html:o(()=>e[18]||(e[18]=[n(`<w-badge>
  <template #badge>3</template>
  <w-button color="primary">
    <w-icon class="mr1">mdi mdi-email</w-icon>
    Emails
  </w-button>
</w-badge>
`)])),default:o(()=>[t(l,null,{badge:o(()=>e[14]||(e[14]=[n("3")])),default:o(()=>[t(s,{class:"primary",text:""},{default:o(()=>[t(i,{class:"mr1"},{default:o(()=>e[15]||(e[15]=[n("mdi mdi-email")])),_:1}),e[16]||(e[16]=n("Emails"))]),_:1})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[19]||(e[19]=[n("V-model")])),_:1}),e[160]||(e[160]=x(`<p>The badge appears if one of these conditions is fulfilled:</p><ul><li>No <code>v-model</code> or <code>model-value</code> is provided but a badge slot is.</li><li>A <code>v-model</code> or a <code>model-value</code> is given and is not <code>null</code>, <code>false</code> or <code>0</code>.<br>
If you want to display one of these values, you can cast it to a string and it will show up
(e.g. <code>&#39;0&#39;</code> instead of <code>0</code>).</li></ul>`,2)),t(g,{"content-class":"mt1"},{pug:o(()=>e[21]||(e[21]=[n(`w-flex(align-center)
  w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)
  w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
    w-icon(color="grey-light1" size="2.4em") mdi mdi-email
  w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)`)])),html:o(()=>e[22]||(e[22]=[n(`<w-flex align-center>
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
</w-flex>`)])),js:o(()=>e[23]||(e[23]=[n(`data: () => ({
  showBadge: 0
})
`)])),default:o(()=>[t(w,{"align-center":""},{default:o(()=>[t(s,{onClick:e[0]||(e[0]=r=>d.showBadge--),icon:"wi-minus","bg-color":"success",sm:""}),t(l,{class:"mx6",modelValue:d.showBadge,"onUpdate:modelValue":e[1]||(e[1]=r=>d.showBadge=r),"bg-color":"error",overlap:""},{default:o(()=>[t(i,{color:"grey-light1",size:"2.4em"},{default:o(()=>e[20]||(e[20]=[n("mdi mdi-email")])),_:1})]),_:1},8,["modelValue"]),t(s,{onClick:e[2]||(e[2]=r=>d.showBadge++),icon:"wi-plus","bg-color":"success",sm:""})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[24]||(e[24]=[n("Positions")])),_:1}),e[161]||(e[161]=a("p",null,"The default position is top right.",-1)),t(g,null,{pug:o(()=>e[33]||(e[33]=[n(`.title4.mb2 Top
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
  w-icon.grey-light1(size="2.5em") mdi mdi-email`)])),html:o(()=>e[34]||(e[34]=[n(`<div class="title4 mb2">Top</div>
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
`)])),default:o(()=>[e[35]||(e[35]=a("div",{class:"title4 mb2"},"Top",-1)),t(l,{class:"ml4 mr10",top:"",left:""},{badge:o(()=>e[25]||(e[25]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[26]||(e[26]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{top:"",right:""},{badge:o(()=>e[27]||(e[27]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[28]||(e[28]=[n("mdi mdi-email")])),_:1})]),_:1}),e[36]||(e[36]=a("div",{class:"title4 mt6 mb2"},"Bottom",-1)),t(l,{class:"ml4 mr10",bottom:"",left:""},{badge:o(()=>e[29]||(e[29]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[30]||(e[30]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{bottom:"",right:""},{badge:o(()=>e[31]||(e[31]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[32]||(e[32]=[n("mdi mdi-email")])),_:1})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[37]||(e[37]=[n("Color and background color")])),_:1}),e[162]||(e[162]=a("p",null,[n("Like in most components, you can set a "),a("code",null,"color"),n(" for the text and a "),a("code",null,"bg-color"),n(` for the
background.`)],-1)),t(g,{"content-class":"mt1"},{pug:o(()=>e[44]||(e[44]=[n(`w-badge.mr10(bg-color="error")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge.mr10(color="yellow")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge(bg-color="lime-light1" color="green-dark2")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email`)])),html:o(()=>e[45]||(e[45]=[n(`<w-badge class="mr10" bg-color="error">
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
`)])),default:o(()=>[t(l,{class:"mr10","bg-color":"error"},{badge:o(()=>e[38]||(e[38]=[n("3")])),default:o(()=>[t(i,{color:"grey-light1",size:"2.5em"},{default:o(()=>e[39]||(e[39]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{class:"mr10",color:"yellow"},{badge:o(()=>e[40]||(e[40]=[n("3")])),default:o(()=>[t(i,{color:"grey-light1",size:"2.5em"},{default:o(()=>e[41]||(e[41]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{"bg-color":"lime-light1",color:"green-dark2"},{badge:o(()=>e[42]||(e[42]=[n("3")])),default:o(()=>[t(i,{color:"grey-light1",size:"2.5em"},{default:o(()=>e[43]||(e[43]=[n("mdi mdi-email")])),_:1})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[46]||(e[46]=[n("Dot")])),_:1}),t(g,{"content-class":"mt1"},{pug:o(()=>e[49]||(e[49]=[n(`w-badge.mr10(dot bg-color="red")
  w-icon(size="2.5em") mdi mdi-account
w-badge(dot bottom bg-color="red")
  w-icon(size="2.5em") mdi mdi-account`)])),html:o(()=>e[50]||(e[50]=[n(`<w-badge class="mr10" dot bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-badge dot bottom bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>
`)])),default:o(()=>[t(l,{class:"mr10",dot:"","bg-color":"red"},{default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[47]||(e[47]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{dot:"",bottom:"","bg-color":"red"},{default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[48]||(e[48]=[n("mdi mdi-account")])),_:1})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[51]||(e[51]=[n("Sizes")])),_:1}),e[163]||(e[163]=x(`<p>The badge size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>size</code> prop (sets the font-size).</p>`,1)),t(g,null,{pug:o(()=>e[77]||(e[77]=[n(`.title3.mb2 Dots
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
    w-icon(size="2.5em") mdi mdi-account`)])),html:o(()=>e[78]||(e[78]=[n(`<div class="title3 mb2">Dots</div>
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
`)])),default:o(()=>[e[79]||(e[79]=a("div",{class:"title3 mb2"},"Dots",-1)),t(w,{wrap:""},{default:o(()=>[t(l,{class:"mr10",dot:"","bg-color":"red",xs:""},{default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[52]||(e[52]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10",dot:"","bg-color":"red",sm:""},{default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[53]||(e[53]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10",dot:"","bg-color":"red",md:""},{default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[54]||(e[54]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10",dot:"","bg-color":"red",lg:""},{default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[55]||(e[55]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10",dot:"","bg-color":"red",xl:""},{default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[56]||(e[56]=[n("mdi mdi-account")])),_:1})]),_:1})]),_:1}),e[80]||(e[80]=a("div",{class:"title3 mt6 mb2"},"Text content",-1)),t(w,{wrap:""},{default:o(()=>[t(l,{class:"mr10","bg-color":"error",xs:""},{badge:o(()=>e[57]||(e[57]=[n("busy")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[58]||(e[58]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10","bg-color":"error",sm:""},{badge:o(()=>e[59]||(e[59]=[n("busy")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[60]||(e[60]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10","bg-color":"error",md:""},{badge:o(()=>e[61]||(e[61]=[n("busy")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[62]||(e[62]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10","bg-color":"error",lg:""},{badge:o(()=>e[63]||(e[63]=[n("busy")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[64]||(e[64]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10","bg-color":"error",xl:""},{badge:o(()=>e[65]||(e[65]=[n("busy")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[66]||(e[66]=[n("mdi mdi-account")])),_:1})]),_:1})]),_:1}),e[81]||(e[81]=a("div",{class:"title3 mt6 mb2"},"Numeric content",-1)),t(w,{wrap:""},{default:o(()=>[t(l,{class:"mr10","bg-color":"error",xs:""},{badge:o(()=>e[67]||(e[67]=[n("3")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[68]||(e[68]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10","bg-color":"error",sm:""},{badge:o(()=>e[69]||(e[69]=[n("3")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[70]||(e[70]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10","bg-color":"error",md:""},{badge:o(()=>e[71]||(e[71]=[n("3")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[72]||(e[72]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10","bg-color":"error",lg:""},{badge:o(()=>e[73]||(e[73]=[n("3")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[74]||(e[74]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10","bg-color":"error",xl:""},{badge:o(()=>e[75]||(e[75]=[n("3")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[76]||(e[76]=[n("mdi mdi-account")])),_:1})]),_:1})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[82]||(e[82]=[n("Overlap")])),_:1}),t(g,null,{pug:o(()=>e[101]||(e[101]=[n(`.title4.mb3 Top
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`)])),html:o(()=>e[102]||(e[102]=[n(`<div class="title4 mb3">Top</div>
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
`)])),default:o(()=>[e[103]||(e[103]=a("div",{class:"title4 mb3"},"Top",-1)),a("div",k,[t(l,{class:"ml4 mr10",top:"",left:""},{badge:o(()=>e[83]||(e[83]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[84]||(e[84]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{top:"",right:""},{badge:o(()=>e[85]||(e[85]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[86]||(e[86]=[n("mdi mdi-email")])),_:1})]),_:1}),t(i,{class:"mx12 grey-light3",size:"2.5em"},{default:o(()=>e[87]||(e[87]=[n("mdi mdi-arrow-right")])),_:1}),t(l,{class:"mr10",top:"",left:"",overlap:""},{badge:o(()=>e[88]||(e[88]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[89]||(e[89]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{top:"",right:"",overlap:""},{badge:o(()=>e[90]||(e[90]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[91]||(e[91]=[n("mdi mdi-email")])),_:1})]),_:1})]),e[104]||(e[104]=a("div",{class:"title4 mt8 mb3"},"Bottom",-1)),a("div",$,[t(l,{class:"ml4 mr10",bottom:"",left:""},{badge:o(()=>e[92]||(e[92]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[93]||(e[93]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{bottom:"",right:""},{badge:o(()=>e[94]||(e[94]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[95]||(e[95]=[n("mdi mdi-email")])),_:1})]),_:1}),t(i,{class:"mx12 grey-light3",size:"2.5em"},{default:o(()=>e[96]||(e[96]=[n("mdi mdi-arrow-right")])),_:1}),t(l,{class:"mr10",bottom:"",left:"",overlap:""},{badge:o(()=>e[97]||(e[97]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[98]||(e[98]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{bottom:"",right:"",overlap:""},{badge:o(()=>e[99]||(e[99]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[100]||(e[100]=[n("mdi mdi-email")])),_:1})]),_:1})])]),_:1}),e[164]||(e[164]=a("div",{class:"title3 mt8 mb3"},"Overlaps with different sizes",-1)),t(g,{"content-class":"mt1"},{pug:o(()=>e[115]||(e[115]=[n(`w-flex(wrap align-center)
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`)])),html:o(()=>e[116]||(e[116]=[n(`<w-flex wrap align-center>
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
`)])),default:o(()=>[t(w,{wrap:"","align-center":""},{default:o(()=>[t(l,{class:"mr10",overlap:"",xs:""},{badge:o(()=>e[105]||(e[105]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[106]||(e[106]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{class:"mr10",overlap:"",sm:""},{badge:o(()=>e[107]||(e[107]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[108]||(e[108]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{class:"mr10",overlap:"",md:""},{badge:o(()=>e[109]||(e[109]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[110]||(e[110]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{class:"mr10",overlap:"",lg:""},{badge:o(()=>e[111]||(e[111]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[112]||(e[112]=[n("mdi mdi-email")])),_:1})]),_:1}),t(l,{overlap:"",xl:""},{badge:o(()=>e[113]||(e[113]=[n("3")])),default:o(()=>[t(i,{class:"grey-light1",size:"2.5em"},{default:o(()=>e[114]||(e[114]=[n("mdi mdi-email")])),_:1})]),_:1})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[117]||(e[117]=[n("Force round badge")])),_:1}),e[165]||(e[165]=a("p",null,[n(`For instance, if you increase the font size of the badge like in this example, the natural behavior
of the badge is to increase its width to adapt to its content.`),a("br"),n(`
With the option `),a("code",null,"round"),n(" you can force it to be round.")],-1)),t(g,{"content-class":"mt1 w-flex align-center"},{pug:o(()=>e[123]||(e[123]=[n(`w-badge(bg-color="error")
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" round)
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account`)])),html:o(()=>e[124]||(e[124]=[n(`<w-badge bg-color="error">
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
`)])),default:o(()=>[t(l,{"bg-color":"error"},{badge:o(()=>e[118]||(e[118]=[a("span",{class:"size--sm"},"11",-1)])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[119]||(e[119]=[n("mdi mdi-account")])),_:1})]),_:1}),t(i,{class:"ml12 mr6 grey-light3",size:"2.5em"},{default:o(()=>e[120]||(e[120]=[n("mdi mdi-arrow-right")])),_:1}),t(l,{"bg-color":"error",round:""},{badge:o(()=>e[121]||(e[121]=[a("span",{class:"size--sm"},"11",-1)])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[122]||(e[122]=[n("mdi mdi-account")])),_:1})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[125]||(e[125]=[n("Icons")])),_:1}),t(g,{"content-class":"mt2"},{pug:o(()=>e[132]||(e[132]=[n(`w-badge.mr10(bg-color="success" overlap round)
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
  w-icon(size="2.5em") mdi mdi-account`)])),html:o(()=>e[133]||(e[133]=[n(`<w-badge class="mr10" bg-color="success" overlap round>
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
`)])),default:o(()=>[t(l,{class:"mr10","bg-color":"success",overlap:"",round:""},{badge:o(()=>[t(i,null,{default:o(()=>e[126]||(e[126]=[n("mdi mdi-check")])),_:1})]),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[127]||(e[127]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{class:"mr10","bg-color":"error",overlap:"",round:""},{badge:o(()=>[t(i,null,{default:o(()=>e[128]||(e[128]=[n("mdi mdi-close")])),_:1})]),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[129]||(e[129]=[n("mdi mdi-account")])),_:1})]),_:1}),t(l,{"bg-color":"transparent",overlap:"",round:""},{badge:o(()=>[t(i,{color:"pink-light1",md:""},{default:o(()=>e[130]||(e[130]=[n("mdi mdi-heart")])),_:1})]),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[131]||(e[131]=[n("mdi mdi-account")])),_:1})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[134]||(e[134]=[n("Override badge padding")])),_:1}),t(g,{"content-class":"w-flex wrap align-center"},{pug:o(()=>e[140]||(e[140]=[n(`w-badge(bg-color="error" badge-class="px1")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" badge-class="px4")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account`)])),html:o(()=>e[141]||(e[141]=[n(`<w-badge bg-color="error" badge-class="px1">
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
`)])),default:o(()=>[t(l,{"bg-color":"error","badge-class":"px1"},{badge:o(()=>e[135]||(e[135]=[n("busy")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[136]||(e[136]=[n("mdi mdi-account")])),_:1})]),_:1}),t(i,{class:"ml12 mr6 grey-light3",size:"2.5em"},{default:o(()=>e[137]||(e[137]=[n("mdi mdi-arrow-right")])),_:1}),t(l,{"bg-color":"error","badge-class":"px4"},{badge:o(()=>e[138]||(e[138]=[n("busy")])),default:o(()=>[t(i,{size:"2.5em"},{default:o(()=>e[139]||(e[139]=[n("mdi mdi-account")])),_:1})]),_:1})]),_:1}),t(m,{h2:""},{default:o(()=>e[142]||(e[142]=[n("Transitions")])),_:1}),e[166]||(e[166]=a("p",null,[n("The default transition is "),a("code",null,"fade"),n(".")],-1)),t(g,null,{pug:o(()=>e[156]||(e[156]=[n(`.w-flex.align-center.wrap
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
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email`)])),html:o(()=>e[157]||(e[157]=[n(`<div class="w-flex align-center wrap">
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
</div>`)])),js:o(()=>e[158]||(e[158]=[n(`data: () => ({
  showBadge: false,
  transition: 'fade'
})`)])),default:o(()=>[a("div",T,[t(w,{column:"","no-grow":"","align-end":""},{default:o(()=>[e[152]||(e[152]=a("span",{class:"mb2"},"Toggle with this transition effect:",-1)),t(s,{class:"code ma1",onClick:e[3]||(e[3]=r=>{d.transition="fade",d.showBadge2=!d.showBadge2}),"bg-color":"primary",xs:""},{default:o(()=>e[143]||(e[143]=[n("fade")])),_:1}),t(s,{class:"code ma1",onClick:e[4]||(e[4]=r=>{d.transition="bounce",d.showBadge2=!d.showBadge2}),"bg-color":"primary",xs:""},{default:o(()=>e[144]||(e[144]=[n("bounce")])),_:1}),t(s,{class:"code ma1",onClick:e[5]||(e[5]=r=>{d.transition="twist",d.showBadge2=!d.showBadge2}),"bg-color":"primary",xs:""},{default:o(()=>e[145]||(e[145]=[n("twist")])),_:1}),t(s,{class:"code ma1",onClick:e[6]||(e[6]=r=>{d.transition="scale",d.showBadge2=!d.showBadge2}),"bg-color":"primary",xs:""},{default:o(()=>e[146]||(e[146]=[n("scale")])),_:1}),t(s,{class:"code ma1",onClick:e[7]||(e[7]=r=>{d.transition="scale-fade",d.showBadge2=!d.showBadge2}),"bg-color":"primary",xs:""},{default:o(()=>e[147]||(e[147]=[n("scale-fade")])),_:1}),t(s,{class:"code ma1",onClick:e[8]||(e[8]=r=>{d.transition="slide-fade-left",d.showBadge2=!d.showBadge2}),"bg-color":"primary",xs:""},{default:o(()=>e[148]||(e[148]=[n("slide-fade-left")])),_:1}),t(s,{class:"code ma1",onClick:e[9]||(e[9]=r=>{d.transition="slide-fade-right",d.showBadge2=!d.showBadge2}),"bg-color":"primary",xs:""},{default:o(()=>e[149]||(e[149]=[n("slide-fade-right")])),_:1}),t(s,{class:"code ma1",onClick:e[10]||(e[10]=r=>{d.transition="slide-fade-up",d.showBadge2=!d.showBadge2}),"bg-color":"primary",xs:""},{default:o(()=>e[150]||(e[150]=[n("slide-fade-up")])),_:1}),t(s,{class:"code ma1",onClick:e[11]||(e[11]=r=>{d.transition="slide-fade-down",d.showBadge2=!d.showBadge2}),"bg-color":"primary",xs:""},{default:o(()=>e[151]||(e[151]=[n("slide-fade-down")])),_:1})]),_:1}),a("div",C,[e[155]||(e[155]=a("div",{class:"xs2"},null,-1)),a("div",h,[t(l,{class:"ma4",modelValue:d.showBadge2,"onUpdate:modelValue":e[12]||(e[12]=r=>d.showBadge2=r),transition:d.transition,"bg-color":"error",overlap:"",round:""},{badge:o(()=>e[153]||(e[153]=[n("5")])),default:o(()=>[t(i,{color:"grey-light1",size:"2.5em"},{default:o(()=>e[154]||(e[154]=[n("mdi mdi-email")])),_:1})]),_:1},8,["modelValue","transition"])])])])]),_:1})])}const A={data:()=>({showBadge:0,showBadge2:!1,transition:"fade"})},D=c(A,[["render",V]]);function S(d,e,z,y,v,u){const m=b("title-link"),i=b("component-api");return p(),f("div",null,[e[1]||(e[1]=a("div",{class:"w-divider my12"},null,-1)),t(m,{class:"title1",h2:""},{default:o(()=>e[0]||(e[0]=[n("API")])),_:1}),t(i,{class:"mt0",items:u.props,descriptions:d.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(i,{items:d.slots,title:"Slots"},null,8,["items"]),t(i,{items:u.events,title:"Events"},null,8,["items"])])}const P={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the badge. Any truthy value will show the badge whereas any falsy value will hide it.',xs:"Sets the size (font-size) of the badge to extra small.",sm:"Sets the size (font-size) of the badge to small.",md:"Sets the size (font-size) of the badge to medium.",lg:"Sets the size (font-size) of the badge to large.",xl:"Sets the size (font-size) of the badge to extra large.",top:"Places the badge at the top of its activator, either on the left or right (right by default).",left:"Places the badge at the left of its activator, either at the top or bottom (top by default).",right:"Places the badge at the right of its activator, either at the top or bottom (top by default).",bottom:"Places the badge at the bottom of its activator, either on the left or right (right by default).",overlap:"Overlaps the activator element narrowing the distance between the activator and the badge.",inline:"Displays the badge inline, in a <code>static</code> position instead of <code>absolute</code> by default.",color:`Applies a color to the badge's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the badge's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:"Sets the font-size of the badge.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",dark:"When set to true, the text color will be set to white.",badgeClass:"Applies a custom CSS class to the badge element.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the badge.",dot:"Displays a much smaller dot with no content in it.",round:"Forces the badge to be round, when the content is too wide and causes a natural increase of the badge width.",transition:'Applies a particular transition to the badge when showing and hiding.<br>Check all the transitions that apply to the badge component in the <a href="#transitions">Transitions</a> example.'},N={default:{description:"The element receiving the badge. Can be any visible DOM element or mounted component."},badge:{description:"The badge content."}},E={},O={data:()=>({propsDescs:P,slots:N}),computed:{props(){return B.props},events(){return B.emits.reduce((d,e)=>(d[e]={description:E[e]||""})&&d,{})}}},F=c(O,[["render",S]]);function I(d,e,z,y,v,u){const m=b("ui-component-title"),i=b("examples"),s=b("api");return p(),f("main",null,[t(m,null,{default:o(()=>e[0]||(e[0]=[n("w-badge")])),_:1}),t(i),t(s)])}const W={components:{Examples:D,Api:F}},j=c(W,[["render",I]]);export{j as default};
