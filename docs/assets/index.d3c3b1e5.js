import{n as a,c as i}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Default")]),t("p",[e._v("The default badge background color is primary.")]),t("example",{attrs:{"content-class":"mt2"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-badge
  template(#badge) 3
  w-button.primary(text)
    w-icon.mr1 mdi mdi-email
    | Emails`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-badge>
  <template #badge>3</template>
  <w-button color="primary">
    <w-icon class="mr1">mdi mdi-email</w-icon>
    Emails
  </w-button>
</w-badge>
`)]},proxy:!0}])},[t("w-badge",{scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-button",{staticClass:"primary",attrs:{text:""}},[t("w-icon",{staticClass:"mr1"},[e._v("mdi mdi-email")]),e._v("Emails")],1)],1)],1),t("title-link",{attrs:{h2:""}},[e._v("V-model")]),t("p",[e._v("The badge appears if one of these conditions is fulfilled:")]),e._m(0),t("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex(align-center)
  w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)
  w-badge.mx6(v-model="showBadge" bg-color="error" overlap)
    w-icon(color="grey-light1" size="2.4em") mdi mdi-email
  w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex align-center>
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
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  showBadge: 0
})
`)]},proxy:!0}])},[t("w-flex",{attrs:{"align-center":""}},[t("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(o){e.showBadge--}}}),t("w-badge",{staticClass:"mx6",attrs:{"bg-color":"error",overlap:""},model:{value:e.showBadge,callback:function(o){e.showBadge=o},expression:"showBadge"}},[t("w-icon",{attrs:{color:"grey-light1",size:"2.4em"}},[e._v("mdi mdi-email")])],1),t("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(o){e.showBadge++}}})],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Positions")]),t("p",[e._v("The default position is top right.")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.title4.mb2 Top
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
  w-icon.grey-light1(size="2.5em") mdi mdi-email`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="title4 mb2">Top</div>
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
`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb2"},[e._v("Top")]),t("w-badge",{staticClass:"ml4 mr10",attrs:{top:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{attrs:{top:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("div",{staticClass:"title4 mt6 mb2"},[e._v("Bottom")]),t("w-badge",{staticClass:"ml4 mr10",attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Color and background color")]),e._m(1),t("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-badge.mr10(bg-color="error")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge.mr10(color="yellow")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email
w-badge(bg-color="lime-light1" color="green-dark2")
  template(#badge) 3
  w-icon(color="grey-light1" size="2.5em") mdi mdi-email`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-badge class="mr10" bg-color="error">
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
`)]},proxy:!0}])},[t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{staticClass:"mr10",attrs:{color:"yellow"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{attrs:{"bg-color":"lime-light1",color:"green-dark2"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Dot")]),t("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-badge.mr10(dot bg-color="red")
  w-icon(size="2.5em") mdi mdi-account
w-badge(dot bottom bg-color="red")
  w-icon(size="2.5em") mdi mdi-account`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-badge class="mr10" dot bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>

<w-badge dot bottom bg-color="red">
  <w-icon size="2.5em">mdi mdi-account</w-icon>
</w-badge>
`)]},proxy:!0}])},[t("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red"}},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{attrs:{dot:"",bottom:"","bg-color":"red"}},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Sizes")]),e._m(2),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.title3.mb2 Dots
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
    w-icon(size="2.5em") mdi mdi-account`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="title3 mb2">Dots</div>
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
`)]},proxy:!0}])},[t("div",{staticClass:"title3 mb2"},[e._v("Dots")]),t("w-flex",{attrs:{wrap:""}},[t("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xs:""}},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",sm:""}},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",md:""}},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",lg:""}},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xl:""}},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),t("div",{staticClass:"title3 mt6 mb2"},[e._v("Text content")]),t("w-flex",{attrs:{wrap:""}},[t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),t("div",{staticClass:"title3 mt6 mb2"},[e._v("Numeric content")]),t("w-flex",{attrs:{wrap:""}},[t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Overlap")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.title4.mb3 Top
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="title4 mb3">Top</div>
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
`)]},proxy:!0}])},[t("div",{staticClass:"title4 mb3"},[e._v("Top")]),t("div",{staticClass:"w-flex wrap align-center"},[t("w-badge",{staticClass:"ml4 mr10",attrs:{top:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{attrs:{top:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-icon",{staticClass:"mx12 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),t("w-badge",{staticClass:"mr10",attrs:{top:"",left:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{attrs:{top:"",right:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1),t("div",{staticClass:"title4 mt8 mb3"},[e._v("Bottom")]),t("div",{staticClass:"w-flex wrap align-center"},[t("w-badge",{staticClass:"ml4 mr10",attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-icon",{staticClass:"mx12 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),t("w-badge",{staticClass:"mr10",attrs:{bottom:"",left:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{attrs:{bottom:"",right:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)]),t("div",{staticClass:"title3 mt8 mb3"},[e._v("Overlaps with different sizes")]),t("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex(wrap align-center)
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
    w-icon.grey-light1(size="2.5em") mdi mdi-email`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap align-center>
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
`)]},proxy:!0}])},[t("w-flex",{attrs:{wrap:"","align-center":""}},[t("w-badge",{staticClass:"mr10",attrs:{overlap:"",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{staticClass:"mr10",attrs:{overlap:"",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{staticClass:"mr10",attrs:{overlap:"",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{staticClass:"mr10",attrs:{overlap:"",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),t("w-badge",{attrs:{overlap:"",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[t("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Force round badge")]),e._m(3),t("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-badge(bg-color="error")
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" round)
  template(#badge)
    span.size--sm 11
  w-icon(size="2.5em") mdi mdi-account`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-badge bg-color="error">
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
`)]},proxy:!0}])},[t("w-badge",{attrs:{"bg-color":"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[t("span",{staticClass:"size--sm"},[e._v("11")])]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),t("w-badge",{attrs:{"bg-color":"error",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[t("span",{staticClass:"size--sm"},[e._v("11")])]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Icons")]),t("example",{attrs:{"content-class":"mt2"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-badge.mr10(bg-color="success" overlap round)
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
  w-icon(size="2.5em") mdi mdi-account`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-badge class="mr10" bg-color="success" overlap round>
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
`)]},proxy:!0}])},[t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"success",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[t("w-icon",[e._v("mdi mdi-check")])]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[t("w-icon",[e._v("mdi mdi-close")])]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-badge",{attrs:{"bg-color":"transparent",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[t("w-icon",{attrs:{color:"pink-light1",md:""}},[e._v("mdi mdi-heart")])]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Override badge padding")]),t("example",{attrs:{"content-class":"w-flex wrap align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-badge(bg-color="error" badge-class="px1")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account

w-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right

w-badge(bg-color="error" badge-class="px4")
  template(#badge) busy
  w-icon(size="2.5em") mdi mdi-account`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-badge bg-color="error" badge-class="px1">
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
`)]},proxy:!0}])},[t("w-badge",{attrs:{"bg-color":"error","badge-class":"px1"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),t("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),t("w-badge",{attrs:{"bg-color":"error","badge-class":"px4"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[t("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Transitions")]),e._m(4),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.w-flex.align-center.wrap
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
        w-icon(color="grey-light1" size="2.5em") mdi mdi-email`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="w-flex align-center wrap">
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
</div>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  showBadge: false,
  transition: 'fade'
})`)]},proxy:!0}])},[t("div",{staticClass:"w-flex align-center wrap"},[t("w-flex",{attrs:{column:"","no-grow":"","align-end":""}},[t("span",{staticClass:"mb2"},[e._v("Toggle with this transition effect:")]),t("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(o){e.transition="fade",e.showBadge2=!e.showBadge2}}},[e._v("fade")]),t("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(o){e.transition="bounce",e.showBadge2=!e.showBadge2}}},[e._v("bounce")]),t("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(o){e.transition="twist",e.showBadge2=!e.showBadge2}}},[e._v("twist")]),t("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(o){e.transition="scale",e.showBadge2=!e.showBadge2}}},[e._v("scale")]),t("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(o){e.transition="scale-fade",e.showBadge2=!e.showBadge2}}},[e._v("scale-fade")]),t("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(o){e.transition="slide-fade-left",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-left")]),t("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(o){e.transition="slide-fade-right",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-right")]),t("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(o){e.transition="slide-fade-up",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-up")]),t("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(o){e.transition="slide-fade-down",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-down")])],1),t("div",{staticClass:"w-flex grow"},[t("div",{staticClass:"xs2"}),t("div",{staticClass:"xs10"},[t("w-badge",{staticClass:"ma4",attrs:{transition:e.transition,"bg-color":"error",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("5")]},proxy:!0}]),model:{value:e.showBadge2,callback:function(o){e.showBadge2=o},expression:"showBadge2"}},[t("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)])],1)])],1)},d=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[e._v("No v-model or value is provided but a badge slot is.")]),t("li",[e._v("A v-model or a value is given and is not "),t("code",[e._v("null")]),e._v(", "),t("code",[e._v("false")]),e._v(" or "),t("code",[e._v("0")]),e._v("."),t("br"),e._v(`
If you want to display one of these values, you can cast it to a string and it will show up
(e.g. `),t("code",[e._v("'0'")]),e._v(" instead of "),t("code",[e._v("0")]),e._v(").")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Like in most components, you can set a "),t("code",[e._v("color")]),e._v(" for the text and a "),t("code",[e._v("bg-color")]),e._v(` for the
background.`)])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("The badge size can be controlled via the preset sizes "),t("code",[e._v("xs")]),e._v(", "),t("code",[e._v("sm")]),e._v(", "),t("code",[e._v("md")]),e._v(`,
`),t("code",[e._v("lg")]),e._v(", "),t("code",[e._v("xl")]),e._v(" or via the "),t("code",[e._v("size")]),e._v(" prop (sets the font-size).")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(`For instance, if you increase the font size of the badge like in this example, the natural behavior
of the badge is to increase its width to adapt to its content.`),t("br"),e._v(`
With the option `),t("code",[e._v("round")]),e._v(" you can force it to be round.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("The default transition is "),t("code",[e._v("fade")]),e._v(".")])}];const m={data:()=>({showBadge:0,showBadge2:!1,transition:"fade"})},r={};var g=a(m,l,d,!1,w,null,null,null);function w(e){for(let n in r)this[n]=r[n]}var b=function(){return g.exports}(),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},p=[];const v={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the badge. Any truthy value will show the badge whereas any falsy value will hide it.',xs:"Sets the size of the badge (font-size).",sm:"Sets the size of the badge (font-size).",md:"Sets the size of the badge (font-size).",lg:"Sets the size of the badge (font-size).",xl:"Sets the size of the badge (font-size).",top:"Places the badge at the top of its activator, either on the left or right (right by default).",left:"Places the badge at the left of its activator, either at the top or bottom (top by default).",right:"Places the badge at the right of its activator, either at the top or bottom (top by default).",bottom:"Places the badge at the bottom of its activator, either on the left or right (right by default).",overlap:"Overlaps the activator element narrowing the distance between the activator and the badge.",inline:"Displays the badge inline, in a <code>static</code> position instead of <code>absolute</code> by default.",color:`Applies a color to the badge's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the badge's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:"Sets the font-size of the badge.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",dark:"When set to true, the text color will be set to white.",badgeClass:"Applies a custom CSS class to the badge element.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the badge.",dot:"Displays a much smaller dot with no content in it.",round:"Forces the badge to be round, when the content is too wide and causes a natural increase of the badge width.",transition:'Applies a particular transition to the badge when showing and hiding.<br>Check all the transitions that apply to the badge component in the <a href="#transitions">Transitions</a> example.'},h={default:{description:"The element receiving the badge. Can be any visible DOM element or mounted component."},badge:{description:"The badge content."}},f={},_={data:()=>({propsDescs:v,slots:h}),computed:{props(){return i.props},events(){return i.emits.reduce((e,n)=>(e[n]={description:f[n]||""})&&e,{})}}},s={};var y=a(_,u,p,!1,x,null,null,null);function x(e){for(let n in s)this[n]=s[n]}var z=function(){return y.exports}(),k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("ui-component-title",[e._v("w-badge")]),t("examples"),t("api")],1)},C=[];const B={components:{Examples:b,Api:z}},c={};var S=a(B,k,C,!1,$,null,null,null);function $(e){for(let n in c)this[n]=c[n]}var A=function(){return S.exports}();export{A as default};
