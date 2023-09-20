import{r as g,o as u,g as p,a as o,w as e,b as a,d,h as v,_ as h,x as y}from"./index.bf2cfd71.js";const x=d("p",null,"The default badge background color is primary.",-1),B=v(`<p>The badge appears if one of these conditions is fulfilled:</p><ul><li>No <code>v-model</code> or <code>model-value</code> is provided but a badge slot is.</li><li>A <code>v-model</code> or a <code>model-value</code> is given and is not <code>null</code>, <code>false</code> or <code>0</code>.<br>
If you want to display one of these values, you can cast it to a string and it will show up
(e.g. <code>&#39;0&#39;</code> instead of <code>0</code>).</li></ul>`,2),k=d("p",null,"The default position is top right.",-1),$=d("div",{class:"title4 mb2"},"Top",-1),T=d("div",{class:"title4 mt6 mb2"},"Bottom",-1),C=d("p",null,[a("Like in most components, you can set a "),d("code",null,"color"),a(" for the text and a "),d("code",null,"bg-color"),a(` for the
background.`)],-1),V=v(`<p>The badge size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>size</code> prop (sets the font-size).</p>`,1),A=d("div",{class:"title3 mb2"},"Dots",-1),D=d("div",{class:"title3 mt6 mb2"},"Text content",-1),S=d("div",{class:"title3 mt6 mb2"},"Numeric content",-1),P=d("div",{class:"title4 mb3"},"Top",-1),N={class:"w-flex wrap align-center"},E=d("div",{class:"title4 mt8 mb3"},"Bottom",-1),O={class:"w-flex wrap align-center"},F=d("div",{class:"title3 mt8 mb3"},"Overlaps with different sizes",-1),I=d("p",null,[a(`For instance, if you increase the font size of the badge like in this example, the natural behavior
of the badge is to increase its width to adapt to its content.`),d("br"),a(`
With the option `),d("code",null,"round"),a(" you can force it to be round.")],-1),W=d("span",{class:"size--sm"},"11",-1),U=d("span",{class:"size--sm"},"11",-1),j=d("p",null,[a("The default transition is "),d("code",null,"fade"),a(".")],-1),L={class:"w-flex align-center wrap"},M=d("span",{class:"mb2"},"Toggle with this transition effect:",-1),q={class:"w-flex grow"},G=d("div",{class:"xs2"},null,-1),H={class:"xs10"};function J(i,l,f,_,z,w){const s=g("title-link"),t=g("w-icon"),m=g("w-button"),n=g("w-badge"),c=g("example"),b=g("w-flex");return u(),p("div",null,[o(s,{h2:""},{default:e(()=>[a("Default")]),_:1}),x,o(c,{"content-class":"mt2"},{pug:e(()=>[a(`w-badge
  template(#badge) 3
  w-button.primary(text)
    w-icon.mr1 mdi mdi-email
    | Emails`)]),html:e(()=>[a(`<w-badge>
  <template #badge>3</template>
  <w-button color="primary">
    <w-icon class="mr1">mdi mdi-email</w-icon>
    Emails
  </w-button>
</w-badge>
`)]),default:e(()=>[o(n,null,{badge:e(()=>[a("3")]),default:e(()=>[o(m,{class:"primary",text:""},{default:e(()=>[o(t,{class:"mr1"},{default:e(()=>[a("mdi mdi-email")]),_:1}),a("Emails")]),_:1})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("V-model")]),_:1}),B,o(c,{"content-class":"mt1"},{pug:e(()=>[a(`w-flex(align-center)
  w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)
  w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
    w-icon(color="grey-light1" size="2.4em") mdi mdi-email
  w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)`)]),html:e(()=>[a(`<w-flex align-center>
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
</w-flex>`)]),js:e(()=>[a(`data: () => ({
  showBadge: 0
})
`)]),default:e(()=>[o(b,{"align-center":""},{default:e(()=>[o(m,{onClick:l[0]||(l[0]=r=>i.showBadge--),icon:"wi-minus","bg-color":"success",sm:""}),o(n,{class:"mx6",modelValue:i.showBadge,"onUpdate:modelValue":l[1]||(l[1]=r=>i.showBadge=r),"bg-color":"error",overlap:""},{default:e(()=>[o(t,{color:"grey-light1",size:"2.4em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1},8,["modelValue"]),o(m,{onClick:l[2]||(l[2]=r=>i.showBadge++),icon:"wi-plus","bg-color":"success",sm:""})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("Positions")]),_:1}),k,o(c,null,{pug:e(()=>[a(`.title4.mb2 Top
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
  w-icon.grey-light1(size="2.5em") mdi mdi-email`)]),html:e(()=>[a(`<div class="title4 mb2">Top</div>
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
`)]),default:e(()=>[$,o(n,{class:"ml4 mr10",top:"",left:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{top:"",right:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),T,o(n,{class:"ml4 mr10",bottom:"",left:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{bottom:"",right:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("Color and background color")]),_:1}),C,o(c,{"content-class":"mt1"},{pug:e(()=>[a(`w-badge.mr10(bg-color="error")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge.mr10(color="yellow")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge(bg-color="lime-light1" color="green-dark2")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email`)]),html:e(()=>[a(`<w-badge class="mr10" bg-color="error">
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
`)]),default:e(()=>[o(n,{class:"mr10","bg-color":"error"},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{color:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{class:"mr10",color:"yellow"},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{color:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{"bg-color":"lime-light1",color:"green-dark2"},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{color:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("Dot")]),_:1}),o(c,{"content-class":"mt1"},{pug:e(()=>[a(`w-badge.mr10(dot bg-color="red")
  w-icon(size="2.5em") mdi mdi-account
w-badge(dot bottom bg-color="red")
  w-icon(size="2.5em") mdi mdi-account`)]),html:e(()=>[a(`<w-badge class="mr10" dot bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-badge dot bottom bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>
`)]),default:e(()=>[o(n,{class:"mr10",dot:"","bg-color":"red"},{default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{dot:"",bottom:"","bg-color":"red"},{default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("Sizes")]),_:1}),V,o(c,null,{pug:e(()=>[a(`.title3.mb2 Dots
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
    w-icon(size="2.5em") mdi mdi-account`)]),html:e(()=>[a(`<div class="title3 mb2">Dots</div>
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
`)]),default:e(()=>[A,o(b,{wrap:""},{default:e(()=>[o(n,{class:"mr10",dot:"","bg-color":"red",xs:""},{default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10",dot:"","bg-color":"red",sm:""},{default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10",dot:"","bg-color":"red",md:""},{default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10",dot:"","bg-color":"red",lg:""},{default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10",dot:"","bg-color":"red",xl:""},{default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1})]),_:1}),D,o(b,{wrap:""},{default:e(()=>[o(n,{class:"mr10","bg-color":"error",xs:""},{badge:e(()=>[a("busy")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",sm:""},{badge:e(()=>[a("busy")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",md:""},{badge:e(()=>[a("busy")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",lg:""},{badge:e(()=>[a("busy")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",xl:""},{badge:e(()=>[a("busy")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1})]),_:1}),S,o(b,{wrap:""},{default:e(()=>[o(n,{class:"mr10","bg-color":"error",xs:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",sm:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",md:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",lg:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",xl:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("Overlap")]),_:1}),o(c,null,{pug:e(()=>[a(`.title4.mb3 Top
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`)]),html:e(()=>[a(`<div class="title4 mb3">Top</div>
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
`)]),default:e(()=>[P,d("div",N,[o(n,{class:"ml4 mr10",top:"",left:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{top:"",right:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(t,{class:"mx12 grey-light3",size:"2.5em"},{default:e(()=>[a("mdi mdi-arrow-right")]),_:1}),o(n,{class:"mr10",top:"",left:"",overlap:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{top:"",right:"",overlap:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1})]),E,d("div",O,[o(n,{class:"ml4 mr10",bottom:"",left:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{bottom:"",right:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(t,{class:"mx12 grey-light3",size:"2.5em"},{default:e(()=>[a("mdi mdi-arrow-right")]),_:1}),o(n,{class:"mr10",bottom:"",left:"",overlap:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{bottom:"",right:"",overlap:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1})])]),_:1}),F,o(c,{"content-class":"mt1"},{pug:e(()=>[a(`w-flex(wrap align-center)
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`)]),html:e(()=>[a(`<w-flex wrap align-center>
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
`)]),default:e(()=>[o(b,{wrap:"","align-center":""},{default:e(()=>[o(n,{class:"mr10",overlap:"",xs:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{class:"mr10",overlap:"",sm:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{class:"mr10",overlap:"",md:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{class:"mr10",overlap:"",lg:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1}),o(n,{overlap:"",xl:""},{badge:e(()=>[a("3")]),default:e(()=>[o(t,{class:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("Force round badge")]),_:1}),I,o(c,{"content-class":"mt1 w-flex align-center"},{pug:e(()=>[a(`w-badge(bg-color="error")
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" round)
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account`)]),html:e(()=>[a(`<w-badge bg-color="error">
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
`)]),default:e(()=>[o(n,{"bg-color":"error"},{badge:e(()=>[W]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(t,{class:"ml12 mr6 grey-light3",size:"2.5em"},{default:e(()=>[a("mdi mdi-arrow-right")]),_:1}),o(n,{"bg-color":"error",round:""},{badge:e(()=>[U]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("Icons")]),_:1}),o(c,{"content-class":"mt2"},{pug:e(()=>[a(`w-badge.mr10(bg-color="success" overlap round)
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
  w-icon(size="2.5em") mdi mdi-account`)]),html:e(()=>[a(`<w-badge class="mr10" bg-color="success" overlap round>
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
`)]),default:e(()=>[o(n,{class:"mr10","bg-color":"success",overlap:"",round:""},{badge:e(()=>[o(t,null,{default:e(()=>[a("mdi mdi-check")]),_:1})]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",overlap:"",round:""},{badge:e(()=>[o(t,null,{default:e(()=>[a("mdi mdi-close")]),_:1})]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(n,{"bg-color":"transparent",overlap:"",round:""},{badge:e(()=>[o(t,{color:"pink-light1",md:""},{default:e(()=>[a("mdi mdi-heart")]),_:1})]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("Override badge padding")]),_:1}),o(c,{"content-class":"w-flex wrap align-center"},{pug:e(()=>[a(`w-badge(bg-color="error" badge-class="px1")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" badge-class="px4")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account`)]),html:e(()=>[a(`<w-badge bg-color="error" badge-class="px1">
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
`)]),default:e(()=>[o(n,{"bg-color":"error","badge-class":"px1"},{badge:e(()=>[a("busy")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1}),o(t,{class:"ml12 mr6 grey-light3",size:"2.5em"},{default:e(()=>[a("mdi mdi-arrow-right")]),_:1}),o(n,{"bg-color":"error","badge-class":"px4"},{badge:e(()=>[a("busy")]),default:e(()=>[o(t,{size:"2.5em"},{default:e(()=>[a("mdi mdi-account")]),_:1})]),_:1})]),_:1}),o(s,{h2:""},{default:e(()=>[a("Transitions")]),_:1}),j,o(c,null,{pug:e(()=>[a(`.w-flex.align-center.wrap
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
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email`)]),html:e(()=>[a(`<div class="w-flex align-center wrap">
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
</div>`)]),js:e(()=>[a(`data: () => ({
  showBadge: false,
  transition: 'fade'
})`)]),default:e(()=>[d("div",L,[o(b,{column:"","no-grow":"","align-end":""},{default:e(()=>[M,o(m,{class:"code ma1",onClick:l[3]||(l[3]=r=>{i.transition="fade",i.showBadge2=!i.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[a("fade")]),_:1}),o(m,{class:"code ma1",onClick:l[4]||(l[4]=r=>{i.transition="bounce",i.showBadge2=!i.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[a("bounce")]),_:1}),o(m,{class:"code ma1",onClick:l[5]||(l[5]=r=>{i.transition="twist",i.showBadge2=!i.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[a("twist")]),_:1}),o(m,{class:"code ma1",onClick:l[6]||(l[6]=r=>{i.transition="scale",i.showBadge2=!i.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[a("scale")]),_:1}),o(m,{class:"code ma1",onClick:l[7]||(l[7]=r=>{i.transition="scale-fade",i.showBadge2=!i.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[a("scale-fade")]),_:1}),o(m,{class:"code ma1",onClick:l[8]||(l[8]=r=>{i.transition="slide-fade-left",i.showBadge2=!i.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[a("slide-fade-left")]),_:1}),o(m,{class:"code ma1",onClick:l[9]||(l[9]=r=>{i.transition="slide-fade-right",i.showBadge2=!i.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[a("slide-fade-right")]),_:1}),o(m,{class:"code ma1",onClick:l[10]||(l[10]=r=>{i.transition="slide-fade-up",i.showBadge2=!i.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[a("slide-fade-up")]),_:1}),o(m,{class:"code ma1",onClick:l[11]||(l[11]=r=>{i.transition="slide-fade-down",i.showBadge2=!i.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[a("slide-fade-down")]),_:1})]),_:1}),d("div",q,[G,d("div",H,[o(n,{class:"ma4",modelValue:i.showBadge2,"onUpdate:modelValue":l[12]||(l[12]=r=>i.showBadge2=r),transition:i.transition,"bg-color":"error",overlap:"",round:""},{badge:e(()=>[a("5")]),default:e(()=>[o(t,{color:"grey-light1",size:"2.5em"},{default:e(()=>[a("mdi mdi-email")]),_:1})]),_:1},8,["modelValue","transition"])])])])]),_:1})])}const K={data:()=>({showBadge:0,showBadge2:!1,transition:"fade"})},Q=h(K,[["render",J]]),R=d("div",{class:"w-divider my12"},null,-1);function X(i,l,f,_,z,w){const s=g("title-link"),t=g("component-api");return u(),p("div",null,[R,o(s,{class:"title1",h2:""},{default:e(()=>[a("API")]),_:1}),o(t,{class:"mt0",items:w.props,descriptions:i.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(t,{items:i.slots,title:"Slots"},null,8,["items"]),o(t,{items:w.events,title:"Events"},null,8,["items"])])}const Y={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the badge. Any truthy value will show the badge whereas any falsy value will hide it.',xs:"Sets the size (font-size) of the badge to extra small.",sm:"Sets the size (font-size) of the badge to small.",md:"Sets the size (font-size) of the badge to medium.",lg:"Sets the size (font-size) of the badge to large.",xl:"Sets the size (font-size) of the badge to extra large.",top:"Places the badge at the top of its activator, either on the left or right (right by default).",left:"Places the badge at the left of its activator, either at the top or bottom (top by default).",right:"Places the badge at the right of its activator, either at the top or bottom (top by default).",bottom:"Places the badge at the bottom of its activator, either on the left or right (right by default).",overlap:"Overlaps the activator element narrowing the distance between the activator and the badge.",inline:"Displays the badge inline, in a <code>static</code> position instead of <code>absolute</code> by default.",color:`Applies a color to the badge's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the badge's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:"Sets the font-size of the badge.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",dark:"When set to true, the text color will be set to white.",badgeClass:"Applies a custom CSS class to the badge element.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the badge.",dot:"Displays a much smaller dot with no content in it.",round:"Forces the badge to be round, when the content is too wide and causes a natural increase of the badge width.",transition:'Applies a particular transition to the badge when showing and hiding.<br>Check all the transitions that apply to the badge component in the <a href="#transitions">Transitions</a> example.'},Z={default:{description:"The element receiving the badge. Can be any visible DOM element or mounted component."},badge:{description:"The badge content."}},ee={},oe={data:()=>({propsDescs:Y,slots:Z}),computed:{props(){return y.props},events(){return y.emits.reduce((i,l)=>(i[l]={description:ee[l]||""})&&i,{})}}},ae=h(oe,[["render",X]]);function te(i,l,f,_,z,w){const s=g("ui-component-title"),t=g("examples"),m=g("api");return u(),p("main",null,[o(s,null,{default:e(()=>[a("w-badge")]),_:1}),o(t),o(m)])}const ne={components:{Examples:Q,Api:ae}},le=h(ne,[["render",te]]);export{le as default};
