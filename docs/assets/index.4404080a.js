import{r as g,o as h,f as _,a as o,w as e,b as d,e as t,i as v,_ as u,bu as y}from"./index.5f89106b.js";const x=t("Default"),B=d("p",null,"The default badge background color is primary.",-1),k=t("3"),$=t("mdi mdi-email"),T=t("Emails"),C=t(`w-badge
  template(#badge) 3
  w-button.primary(text)
    w-icon.mr1 mdi mdi-email
    | Emails`),V=t(`<w-badge>
  <template #badge>3</template>
  <w-button color="primary">
    <w-icon class="mr1">mdi mdi-email</w-icon>
    Emails
  </w-button>
</w-badge>
`),A=t("V-model"),D=v(`<p>The badge appears if one of these conditions is fulfilled:</p><ul><li>No <code>v-model</code> or <code>model-value</code> is provided but a badge slot is.</li><li>A <code>v-model</code> or a <code>model-value</code> is given and is not <code>null</code>, <code>false</code> or <code>0</code>.<br>
If you want to display one of these values, you can cast it to a string and it will show up
(e.g. <code>&#39;0&#39;</code> instead of <code>0</code>).</li></ul>`,2),S=t("mdi mdi-email"),P=t(`w-flex(align-center)
  w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)
  w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
    w-icon(color="grey-light1" size="2.4em") mdi mdi-email
  w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)`),N=t(`<w-flex align-center>
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
</w-flex>`),E=t(`data: () => ({
  showBadge: 0
})
`),O=t("Positions"),F=d("p",null,"The default position is top right.",-1),I=d("div",{class:"title4 mb2"},"Top",-1),W=t("3"),U=t("mdi mdi-email"),j=t("3"),L=t("mdi mdi-email"),M=d("div",{class:"title4 mt6 mb2"},"Bottom",-1),q=t("3"),G=t("mdi mdi-email"),H=t("3"),J=t("mdi mdi-email"),K=t(`.title4.mb2 Top
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
  w-icon.grey-light1(size="2.5em") mdi mdi-email`),Q=t(`<div class="title4 mb2">Top</div>
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
`),R=t("Color and background color"),X=d("p",null,[t("Like in most components, you can set a "),d("code",null,"color"),t(" for the text and a "),d("code",null,"bg-color"),t(` for the
background.`)],-1),Y=t("3"),Z=t("mdi mdi-email"),ee=t("3"),oe=t("mdi mdi-email"),te=t("3"),ie=t("mdi mdi-email"),ne=t(`w-badge.mr10(bg-color="error")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge.mr10(color="yellow")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge(bg-color="lime-light1" color="green-dark2")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email`),ae=t(`<w-badge class="mr10" bg-color="error">
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
`),se=t("Dot"),de=t("mdi mdi-account"),le=t("mdi mdi-account"),me=t(`w-badge.mr10(dot bg-color="red")
  w-icon(size="2.5em") mdi mdi-account
w-badge(dot bottom bg-color="red")
  w-icon(size="2.5em") mdi mdi-account`),ce=t(`<w-badge class="mr10" dot bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-badge dot bottom bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>
`),re=t("Sizes"),ge=v(`<p>The badge size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>size</code> prop (sets the font-size).</p>`,1),be=d("div",{class:"title3 mb2"},"Dots",-1),we=t("mdi mdi-account"),he=t("mdi mdi-account"),_e=t("mdi mdi-account"),ue=t("mdi mdi-account"),pe=t("mdi mdi-account"),fe=d("div",{class:"title3 mt6 mb2"},"Text content",-1),ze=t("busy"),ye=t("mdi mdi-account"),ve=t("busy"),xe=t("mdi mdi-account"),Be=t("busy"),ke=t("mdi mdi-account"),$e=t("busy"),Te=t("mdi mdi-account"),Ce=t("busy"),Ve=t("mdi mdi-account"),Ae=d("div",{class:"title3 mt6 mb2"},"Numeric content",-1),De=t("3"),Se=t("mdi mdi-account"),Pe=t("3"),Ne=t("mdi mdi-account"),Ee=t("3"),Oe=t("mdi mdi-account"),Fe=t("3"),Ie=t("mdi mdi-account"),We=t("3"),Ue=t("mdi mdi-account"),je=t(`.title3.mb2 Dots
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
    w-icon(size="2.5em") mdi mdi-account`),Le=t(`<div class="title3 mb2">Dots</div>
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
`),Me=t("Overlap"),qe=d("div",{class:"title4 mb3"},"Top",-1),Ge={class:"w-flex wrap align-center"},He=t("3"),Je=t("mdi mdi-email"),Ke=t("3"),Qe=t("mdi mdi-email"),Re=t("mdi mdi-arrow-right"),Xe=t("3"),Ye=t("mdi mdi-email"),Ze=t("3"),eo=t("mdi mdi-email"),oo=d("div",{class:"title4 mt8 mb3"},"Bottom",-1),to={class:"w-flex wrap align-center"},io=t("3"),no=t("mdi mdi-email"),ao=t("3"),so=t("mdi mdi-email"),lo=t("mdi mdi-arrow-right"),mo=t("3"),co=t("mdi mdi-email"),ro=t("3"),go=t("mdi mdi-email"),bo=t(`.title4.mb3 Top
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`),wo=t(`<div class="title4 mb3">Top</div>
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
`),ho=d("div",{class:"title3 mt8 mb3"},"Overlaps with different sizes",-1),_o=t("3"),uo=t("mdi mdi-email"),po=t("3"),fo=t("mdi mdi-email"),zo=t("3"),yo=t("mdi mdi-email"),vo=t("3"),xo=t("mdi mdi-email"),Bo=t("3"),ko=t("mdi mdi-email"),$o=t(`w-flex(wrap align-center)
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`),To=t(`<w-flex wrap align-center>
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
`),Co=t("Force round badge"),Vo=d("p",null,[t(`For instance, if you increase the font size of the badge like in this example, the natural behavior
of the badge is to increase its width to adapt to its content.`),d("br"),t(`
With the option `),d("code",null,"round"),t(" you can force it to be round.")],-1),Ao=d("span",{class:"size--sm"},"11",-1),Do=t("mdi mdi-account"),So=t("mdi mdi-arrow-right"),Po=d("span",{class:"size--sm"},"11",-1),No=t("mdi mdi-account"),Eo=t(`w-badge(bg-color="error")
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" round)
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account`),Oo=t(`<w-badge bg-color="error">
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
`),Fo=t("Icons"),Io=t("mdi mdi-check"),Wo=t("mdi mdi-account"),Uo=t("mdi mdi-close"),jo=t("mdi mdi-account"),Lo=t("mdi mdi-heart"),Mo=t("mdi mdi-account"),qo=t(`w-badge.mr10(bg-color="success" overlap round)
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
  w-icon(size="2.5em") mdi mdi-account`),Go=t(`<w-badge class="mr10" bg-color="success" overlap round>
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
`),Ho=t("Override badge padding"),Jo=t("busy"),Ko=t("mdi mdi-account"),Qo=t("mdi mdi-arrow-right"),Ro=t("busy"),Xo=t("mdi mdi-account"),Yo=t(`w-badge(bg-color="error" badge-class="px1")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" badge-class="px4")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account`),Zo=t(`<w-badge bg-color="error" badge-class="px1">
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
`),et=t("Transitions"),ot=d("p",null,[t("The default transition is "),d("code",null,"fade"),t(".")],-1),tt={class:"w-flex align-center wrap"},it=d("span",{class:"mb2"},"Toggle with this transition effect:",-1),nt=t("fade"),at=t("bounce"),st=t("twist"),dt=t("scale"),lt=t("scale-fade"),mt=t("slide-fade-left"),ct=t("slide-fade-right"),rt=t("slide-fade-up"),gt=t("slide-fade-down"),bt={class:"w-flex grow"},wt=d("div",{class:"xs2"},null,-1),ht={class:"xs10"},_t=t("5"),ut=t("mdi mdi-email"),pt=t(`.w-flex.align-center.wrap
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
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email`),ft=t(`<div class="w-flex align-center wrap">
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
</div>`),zt=t(`data: () => ({
  showBadge: false,
  transition: 'fade'
})`);function yt(a,s,p,f,z,w){const l=g("title-link"),i=g("w-icon"),m=g("w-button"),n=g("w-badge"),r=g("example"),b=g("w-flex");return h(),_("div",null,[o(l,{h2:""},{default:e(()=>[x]),_:1}),B,o(r,{"content-class":"mt2"},{pug:e(()=>[C]),html:e(()=>[V]),default:e(()=>[o(n,null,{badge:e(()=>[k]),default:e(()=>[o(m,{class:"primary",text:""},{default:e(()=>[o(i,{class:"mr1"},{default:e(()=>[$]),_:1}),T]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[A]),_:1}),D,o(r,{"content-class":"mt1"},{pug:e(()=>[P]),html:e(()=>[N]),js:e(()=>[E]),default:e(()=>[o(b,{"align-center":""},{default:e(()=>[o(m,{onClick:s[0]||(s[0]=c=>a.showBadge--),icon:"wi-minus","bg-color":"success",sm:""}),o(n,{class:"mx6",modelValue:a.showBadge,"onUpdate:modelValue":s[1]||(s[1]=c=>a.showBadge=c),"bg-color":"error",overlap:""},{default:e(()=>[o(i,{color:"grey-light1",size:"2.4em"},{default:e(()=>[S]),_:1})]),_:1},8,["modelValue"]),o(m,{onClick:s[2]||(s[2]=c=>a.showBadge++),icon:"wi-plus","bg-color":"success",sm:""})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[O]),_:1}),F,o(r,null,{pug:e(()=>[K]),html:e(()=>[Q]),default:e(()=>[I,o(n,{class:"ml4 mr10",top:"",left:""},{badge:e(()=>[W]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[U]),_:1})]),_:1}),o(n,{top:"",right:""},{badge:e(()=>[j]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[L]),_:1})]),_:1}),M,o(n,{class:"ml4 mr10",bottom:"",left:""},{badge:e(()=>[q]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[G]),_:1})]),_:1}),o(n,{bottom:"",right:""},{badge:e(()=>[H]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[J]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[R]),_:1}),X,o(r,{"content-class":"mt1"},{pug:e(()=>[ne]),html:e(()=>[ae]),default:e(()=>[o(n,{class:"mr10","bg-color":"error"},{badge:e(()=>[Y]),default:e(()=>[o(i,{color:"grey-light1",size:"2.5em"},{default:e(()=>[Z]),_:1})]),_:1}),o(n,{class:"mr10",color:"yellow"},{badge:e(()=>[ee]),default:e(()=>[o(i,{color:"grey-light1",size:"2.5em"},{default:e(()=>[oe]),_:1})]),_:1}),o(n,{"bg-color":"lime-light1",color:"green-dark2"},{badge:e(()=>[te]),default:e(()=>[o(i,{color:"grey-light1",size:"2.5em"},{default:e(()=>[ie]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[se]),_:1}),o(r,{"content-class":"mt1"},{pug:e(()=>[me]),html:e(()=>[ce]),default:e(()=>[o(n,{class:"mr10",dot:"","bg-color":"red"},{default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[de]),_:1})]),_:1}),o(n,{dot:"",bottom:"","bg-color":"red"},{default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[le]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[re]),_:1}),ge,o(r,null,{pug:e(()=>[je]),html:e(()=>[Le]),default:e(()=>[be,o(b,{wrap:""},{default:e(()=>[o(n,{class:"mr10",dot:"","bg-color":"red",xs:""},{default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[we]),_:1})]),_:1}),o(n,{class:"mr10",dot:"","bg-color":"red",sm:""},{default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[he]),_:1})]),_:1}),o(n,{class:"mr10",dot:"","bg-color":"red",md:""},{default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[_e]),_:1})]),_:1}),o(n,{class:"mr10",dot:"","bg-color":"red",lg:""},{default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[ue]),_:1})]),_:1}),o(n,{class:"mr10",dot:"","bg-color":"red",xl:""},{default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[pe]),_:1})]),_:1})]),_:1}),fe,o(b,{wrap:""},{default:e(()=>[o(n,{class:"mr10","bg-color":"error",xs:""},{badge:e(()=>[ze]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[ye]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",sm:""},{badge:e(()=>[ve]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[xe]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",md:""},{badge:e(()=>[Be]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[ke]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",lg:""},{badge:e(()=>[$e]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Te]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",xl:""},{badge:e(()=>[Ce]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Ve]),_:1})]),_:1})]),_:1}),Ae,o(b,{wrap:""},{default:e(()=>[o(n,{class:"mr10","bg-color":"error",xs:""},{badge:e(()=>[De]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Se]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",sm:""},{badge:e(()=>[Pe]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Ne]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",md:""},{badge:e(()=>[Ee]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Oe]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",lg:""},{badge:e(()=>[Fe]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Ie]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",xl:""},{badge:e(()=>[We]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Ue]),_:1})]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[Me]),_:1}),o(r,null,{pug:e(()=>[bo]),html:e(()=>[wo]),default:e(()=>[qe,d("div",Ge,[o(n,{class:"ml4 mr10",top:"",left:""},{badge:e(()=>[He]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[Je]),_:1})]),_:1}),o(n,{top:"",right:""},{badge:e(()=>[Ke]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[Qe]),_:1})]),_:1}),o(i,{class:"mx12 grey-light3",size:"2.5em"},{default:e(()=>[Re]),_:1}),o(n,{class:"mr10",top:"",left:"",overlap:""},{badge:e(()=>[Xe]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[Ye]),_:1})]),_:1}),o(n,{top:"",right:"",overlap:""},{badge:e(()=>[Ze]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[eo]),_:1})]),_:1})]),oo,d("div",to,[o(n,{class:"ml4 mr10",bottom:"",left:""},{badge:e(()=>[io]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[no]),_:1})]),_:1}),o(n,{bottom:"",right:""},{badge:e(()=>[ao]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[so]),_:1})]),_:1}),o(i,{class:"mx12 grey-light3",size:"2.5em"},{default:e(()=>[lo]),_:1}),o(n,{class:"mr10",bottom:"",left:"",overlap:""},{badge:e(()=>[mo]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[co]),_:1})]),_:1}),o(n,{bottom:"",right:"",overlap:""},{badge:e(()=>[ro]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[go]),_:1})]),_:1})])]),_:1}),ho,o(r,{"content-class":"mt1"},{pug:e(()=>[$o]),html:e(()=>[To]),default:e(()=>[o(b,{wrap:"","align-center":""},{default:e(()=>[o(n,{class:"mr10",overlap:"",xs:""},{badge:e(()=>[_o]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[uo]),_:1})]),_:1}),o(n,{class:"mr10",overlap:"",sm:""},{badge:e(()=>[po]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[fo]),_:1})]),_:1}),o(n,{class:"mr10",overlap:"",md:""},{badge:e(()=>[zo]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[yo]),_:1})]),_:1}),o(n,{class:"mr10",overlap:"",lg:""},{badge:e(()=>[vo]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[xo]),_:1})]),_:1}),o(n,{overlap:"",xl:""},{badge:e(()=>[Bo]),default:e(()=>[o(i,{class:"grey-light1",size:"2.5em"},{default:e(()=>[ko]),_:1})]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[Co]),_:1}),Vo,o(r,{"content-class":"mt1"},{pug:e(()=>[Eo]),html:e(()=>[Oo]),default:e(()=>[o(n,{"bg-color":"error"},{badge:e(()=>[Ao]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Do]),_:1})]),_:1}),o(i,{class:"ml12 mr6 grey-light3",size:"2.5em"},{default:e(()=>[So]),_:1}),o(n,{"bg-color":"error",round:""},{badge:e(()=>[Po]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[No]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[Fo]),_:1}),o(r,{"content-class":"mt2"},{pug:e(()=>[qo]),html:e(()=>[Go]),default:e(()=>[o(n,{class:"mr10","bg-color":"success",overlap:"",round:""},{badge:e(()=>[o(i,null,{default:e(()=>[Io]),_:1})]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Wo]),_:1})]),_:1}),o(n,{class:"mr10","bg-color":"error",overlap:"",round:""},{badge:e(()=>[o(i,null,{default:e(()=>[Uo]),_:1})]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[jo]),_:1})]),_:1}),o(n,{"bg-color":"transparent",overlap:"",round:""},{badge:e(()=>[o(i,{color:"pink-light1",md:""},{default:e(()=>[Lo]),_:1})]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Mo]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[Ho]),_:1}),o(r,{"content-class":"w-flex wrap align-center"},{pug:e(()=>[Yo]),html:e(()=>[Zo]),default:e(()=>[o(n,{"bg-color":"error","badge-class":"px1"},{badge:e(()=>[Jo]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Ko]),_:1})]),_:1}),o(i,{class:"ml12 mr6 grey-light3",size:"2.5em"},{default:e(()=>[Qo]),_:1}),o(n,{"bg-color":"error","badge-class":"px4"},{badge:e(()=>[Ro]),default:e(()=>[o(i,{size:"2.5em"},{default:e(()=>[Xo]),_:1})]),_:1})]),_:1}),o(l,{h2:""},{default:e(()=>[et]),_:1}),ot,o(r,null,{pug:e(()=>[pt]),html:e(()=>[ft]),js:e(()=>[zt]),default:e(()=>[d("div",tt,[o(b,{column:"","no-grow":"","align-end":""},{default:e(()=>[it,o(m,{class:"code ma1",onClick:s[3]||(s[3]=c=>{a.transition="fade",a.showBadge2=!a.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[nt]),_:1}),o(m,{class:"code ma1",onClick:s[4]||(s[4]=c=>{a.transition="bounce",a.showBadge2=!a.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[at]),_:1}),o(m,{class:"code ma1",onClick:s[5]||(s[5]=c=>{a.transition="twist",a.showBadge2=!a.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[st]),_:1}),o(m,{class:"code ma1",onClick:s[6]||(s[6]=c=>{a.transition="scale",a.showBadge2=!a.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[dt]),_:1}),o(m,{class:"code ma1",onClick:s[7]||(s[7]=c=>{a.transition="scale-fade",a.showBadge2=!a.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[lt]),_:1}),o(m,{class:"code ma1",onClick:s[8]||(s[8]=c=>{a.transition="slide-fade-left",a.showBadge2=!a.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[mt]),_:1}),o(m,{class:"code ma1",onClick:s[9]||(s[9]=c=>{a.transition="slide-fade-right",a.showBadge2=!a.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[ct]),_:1}),o(m,{class:"code ma1",onClick:s[10]||(s[10]=c=>{a.transition="slide-fade-up",a.showBadge2=!a.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[rt]),_:1}),o(m,{class:"code ma1",onClick:s[11]||(s[11]=c=>{a.transition="slide-fade-down",a.showBadge2=!a.showBadge2}),"bg-color":"primary",xs:""},{default:e(()=>[gt]),_:1})]),_:1}),d("div",bt,[wt,d("div",ht,[o(n,{class:"ma4",modelValue:a.showBadge2,"onUpdate:modelValue":s[12]||(s[12]=c=>a.showBadge2=c),transition:a.transition,"bg-color":"error",overlap:"",round:""},{badge:e(()=>[_t]),default:e(()=>[o(i,{color:"grey-light1",size:"2.5em"},{default:e(()=>[ut]),_:1})]),_:1},8,["modelValue","transition"])])])])]),_:1})])}const vt={data:()=>({showBadge:0,showBadge2:!1,transition:"fade"})};var xt=u(vt,[["render",yt]]);const Bt=d("div",{class:"w-divider my12"},null,-1),kt=t("API");function $t(a,s,p,f,z,w){const l=g("title-link"),i=g("component-api");return h(),_("div",null,[Bt,o(l,{class:"title1",h2:""},{default:e(()=>[kt]),_:1}),o(i,{class:"mt0",items:w.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(i,{items:a.slots,title:"Slots"},null,8,["items"]),o(i,{items:w.events,title:"Events"},null,8,["items"])])}const Tt={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the badge. Any truthy value will show the badge whereas any falsy value will hide it.',xs:"Sets the size of the badge (font-size).",sm:"Sets the size of the badge (font-size).",md:"Sets the size of the badge (font-size).",lg:"Sets the size of the badge (font-size).",xl:"Sets the size of the badge (font-size).",top:"Places the badge at the top of its activator, either on the left or right (right by default).",left:"Places the badge at the left of its activator, either at the top or bottom (top by default).",right:"Places the badge at the right of its activator, either at the top or bottom (top by default).",bottom:"Places the badge at the bottom of its activator, either on the left or right (right by default).",overlap:"Overlaps the activator element narrowing the distance between the activator and the badge.",inline:"Displays the badge inline, in a <code>static</code> position instead of <code>absolute</code> by default.",color:`Applies a color to the badge's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the badge's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:"Sets the font-size of the badge.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",dark:"When set to true, the text color will be set to white.",badgeClass:"Applies a custom CSS class to the badge element.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the badge.",dot:"Displays a much smaller dot with no content in it.",round:"Forces the badge to be round, when the content is too wide and causes a natural increase of the badge width.",transition:'Applies a particular transition to the badge when showing and hiding.<br>Check all the transitions that apply to the badge component in the <a href="#transitions">Transitions</a> example.'},Ct={default:{description:"The element receiving the badge. Can be any visible DOM element or mounted component."},badge:{description:"The badge content."}},Vt={},At={data:()=>({propsDescs:Tt,slots:Ct}),computed:{props(){return y.props},events(){return y.emits.reduce((a,s)=>(a[s]={description:Vt[s]||""})&&a,{})}}};var Dt=u(At,[["render",$t]]);const St=t("w-badge");function Pt(a,s,p,f,z,w){const l=g("ui-component-title"),i=g("examples"),m=g("api");return h(),_("main",null,[o(l,null,{default:e(()=>[St]),_:1}),o(i),o(m)])}const Nt={components:{Examples:xt,Api:Dt}};var Ot=u(Nt,[["render",Pt]]);export{Ot as default};
