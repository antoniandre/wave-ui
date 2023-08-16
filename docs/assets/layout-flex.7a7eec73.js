import{n as i}from"./index.e31dd236.js";var l=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("main",[t("title-link",{staticClass:"mt4",attrs:{h1:""}},[s._v("Flex layout classes")]),t("title-link",{attrs:{h2:"",slug:"w-flex-component-and-helper-classes"}},[t("span",{staticClass:"code"},[s._v("w-flex")]),s._v(" component & helper classes")]),s._m(0),s._m(1),t("title-link",{attrs:{h2:""}},[s._v("Alignments")]),t("p",[s._v("Align children with these classes on the parent container:")]),s._m(2),t("p",{staticClass:"mt4"},[s._v("Align a child with these classes directly on the child element:")]),s._m(3),s._m(4),t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"mt12 headline",attrs:{h2:""}},[s._v("Examples")]),t("title-link",{staticClass:"mt8 title2",attrs:{h3:""}},[s._v("Justify")]),t("div",{staticClass:"title3 mt6"},[s._v("w-flex, row direction (default)")]),t("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`p.mb1 .justify-start (default)
w-flex.pa3.blue-light5--bg(justify-start)
  .box
  .box
  .box

p.mt4.mb1 .justify-center
w-flex.pa3.blue-light5--bg(justify-center)
  .box
  .box
  .box

p.mt4.mb1 .justify-end
w-flex.pa3.blue-light5--bg(justify-end)
  .box
  .box
  .box

p.mt4.mb1 .justify-space-between
w-flex.pa3.blue-light5--bg(justify-space-between)
  .box
  .box
  .box

p.mt4.mb1 .justify-space-evenly
w-flex.pa3.blue-light5--bg(justify-space-evenly)
  .box
  .box
  .box`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<p>.justify-start (default)</p>
<w-flex justify-start class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>

<p>.justify-center</p>
<w-flex justify-center class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>

<p>.justify-end</p>
<w-flex justify-end class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>

<p>.justify-space-between</p>
<w-flex justify-space-between class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>

<p>.justify-space-evenly</p>
<w-flex justify-space-evenly class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}
`)]},proxy:!0}])},[t("p",{staticClass:"code mb1"},[s._v(".justify-start (default)")]),t("div",{staticClass:"w-flex pa3 blue-light5--bg justify-start"},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})]),t("p",{staticClass:"code mt4 mb1"},[s._v(".justify-center")]),t("div",{staticClass:"w-flex pa3 blue-light5--bg justify-center"},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})]),t("p",{staticClass:"code mt4 mb1"},[s._v(".justify-end")]),t("div",{staticClass:"w-flex pa3 blue-light5--bg justify-end"},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})]),t("p",{staticClass:"code mt4 mb1"},[s._v(".justify-space-between")]),t("div",{staticClass:"w-flex pa3 blue-light5--bg justify-space-between"},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})]),t("p",{staticClass:"code mt4 mb1"},[s._v(".justify-space-evenly")]),t("div",{staticClass:"w-flex pa3 blue-light5--bg justify-space-evenly"},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})])]),t("div",{staticClass:"title3"},[s._v("w-flex, column direction")]),t("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`w-flex(basis-zero wrap)
  .grow.mx1
    p.mb1 .justify-start (default)
    w-flex.wrapper(column align-center justify-start)
      .box
      .box
      .box

  .grow.mx1
    p.mb1 .justify-center
    w-flex.wrapper(column align-center justify-center)
      .box
      .box
      .box

  .grow.mx1
    p.mb1 .justify-space-between
    w-flex.wrapper(column align-center justify-space-between)
      .box
      .box
      .box

  .grow.mx1
    p.mb1 .justify-end
    w-flex.wrapper(column align-center justify-end)
      .box
      .box
      .box`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex basis-zero wrap>
  <div class="grow mx1">
    <p>.justify-start (default)</p>
    <w-flex column align-center justify-start class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>.justify-center</p>
    <w-flex column align-center justify-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>.justify-space-between</p>
    <w-flex column align-center justify-space-between class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>.justify-end</p>
    <w-flex column align-center justify-end class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]},proxy:!0}])},[t("w-flex",{attrs:{"basis-zero":"",wrap:""}},[t("div",{staticClass:"grow mx1"},[t("p",{staticClass:"code mb1"},[s._v(".justify-start (default)")]),t("w-flex",{staticClass:"wrapper",attrs:{column:"","align-center":"","justify-start":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})])],1),t("div",{staticClass:"grow mx1"},[t("p",{staticClass:"code mb1"},[s._v(".justify-center")]),t("w-flex",{staticClass:"wrapper",attrs:{column:"","align-center":"","justify-center":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})])],1),t("div",{staticClass:"grow mx1"},[t("p",{staticClass:"code mb1"},[s._v(".justify-space-between")]),t("w-flex",{staticClass:"wrapper",attrs:{column:"","align-center":"","justify-space-between":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})])],1),t("div",{staticClass:"grow mx1"},[t("p",{staticClass:"code mb1"},[s._v(".justify-end")]),t("w-flex",{staticClass:"wrapper",attrs:{column:"","align-center":"","justify-end":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})])],1)])],1),t("title-link",{staticClass:"mt12 title2",attrs:{h3:""}},[s._v("Align")]),s._m(5),t("div",{staticClass:"title3 mt6"},[s._v("w-flex, row direction (default)")]),t("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`w-flex(basis-zero wrap)
  .grow.mx1.xs12.sm4
    p 1. Default
    w-flex.wrapper(justify-center)
      .box
      .box
      .box

  .grow.mx1.xs12.sm4
    p 2. Align center
    w-flex.wrapper(justify-center align-center)
      .box
      .box
      .box

  .grow.mx1.xs12.sm4
    p 3. Align self start, center, end
    w-flex.wrapper(justify-center)
      .box.align-self-start
      .box.align-self-center
      .box.align-self-end`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex basis-zero>
  <div class="grow mx1">
    <p>1. Default</p>
    <w-flex justify-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>2. Align center</p>
    <w-flex justify-center align-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>3. Align self start, center, end</p>
    <w-flex justify-center class="wrapper">
      <div class="box align-self-start"></div>
      <div class="box align-self-center"></div>
      <div class="box align-self-end"></div>
    </w-flex>
  </div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]},proxy:!0}])},[t("w-flex",{attrs:{"basis-zero":"",wrap:""}},[t("div",{staticClass:"grow mx1 xs12 sm4"},[t("p",[s._v("1. Default")]),t("w-flex",{staticClass:"wrapper2",attrs:{"justify-center":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})])],1),t("div",{staticClass:"grow mx1 xs12 sm4"},[t("p",[s._v("2. Align center")]),t("w-flex",{staticClass:"wrapper2",attrs:{"justify-center":"","align-center":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})])],1),t("div",{staticClass:"grow mx1 xs12 sm4"},[t("p",[s._v("3. Align self start, center, end")]),t("w-flex",{staticClass:"wrapper2",attrs:{"justify-center":""}},[t("div",{staticClass:"box align-self-start"}),t("div",{staticClass:"box align-self-center"}),t("div",{staticClass:"box align-self-end"})])],1)])],1),t("div",{staticClass:"title3 mt6"},[s._v("Align-self, column direction")]),t("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`w-flex(basis-zero wrap)
  .grow.mx1.xs12.sm4
    p 1. Default
    w-flex.wrapper(column justify-center)
      .box
      .box
      .box

  .grow.mx1.xs12.sm4
    p 2. Align-center
    w-flex.wrapper(column justify-center align-center)
      .box
      .box
      .box

  .grow.mx1.xs12.sm4
    p 3. Align self start, center, end
    w-flex.wrapper(column justify-center)
      .box.align-self-start
      .box.align-self-center
      .box.align-self-end`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex basis-zero>
  <div class="grow mx1">
    <p>1. Default</p>
    <w-flex column justify-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>2. Align-center</p>
    <w-flex column justify-center align-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>3. Align self start, center, end</p>
    <w-flex column justify-center class="wrapper">
      <div class="box align-self-start"></div>
      <div class="box align-self-center"></div>
      <div class="box align-self-end"></div>
    </w-flex>
  </div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]},proxy:!0}])},[t("w-flex",{attrs:{"basis-zero":"",wrap:""}},[t("div",{staticClass:"grow mx1 xs12 sm4"},[t("p",[s._v("1. Default")]),t("w-flex",{staticClass:"wrapper2",attrs:{column:"","justify-center":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})])],1),t("div",{staticClass:"grow mx1 xs12 sm4"},[t("p",[s._v("2. Align-center")]),t("w-flex",{staticClass:"wrapper2",attrs:{column:"","justify-center":"","align-center":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"box"})])],1),t("div",{staticClass:"grow mx1 xs12 sm4"},[t("p",[s._v("3. Align self start, center, end")]),t("w-flex",{staticClass:"wrapper2",attrs:{column:"","justify-center":""}},[t("div",{staticClass:"box align-self-start"}),t("div",{staticClass:"box align-self-center"}),t("div",{staticClass:"box align-self-end"})])],1)])],1),t("title-link",{staticClass:"mt12 title2",attrs:{h3:""}},[s._v("Using margin in flex context")]),t("alert",{attrs:{warning:""}},[s._v(`It's important to note that setting a margin on an element in a flex content will override its
default positioning.`),t("br"),s._v(`
Look at the following examples where the boxes have different margins applied.`),t("br"),s._v(" "),t("code",[s._v("maa")]),s._v(" = "),t("span",{staticClass:"code"},[s._v("margin: auto")]),s._v(", "),t("code",[s._v("mxa")]),s._v(" = "),t("span",{staticClass:"code"},[s._v("margin-left: auto;margin-right: auto;")]),s._v(`
(read more in `),t("router-link",{attrs:{to:"layout--spaces"}},[s._v("Layout - spaces")]),s._v(")")],1),t("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`w-flex(basis-zero)
  .grow.mx1
    p 1. Row direction
    w-flex.wrapper(justify-center align-center)
      .box.maa
      .box.maa
      .box.maa

  .grow.mx1
    p 2. Column direction
    w-flex.wrapper(column justify-center)
      .box
      .box.mxa
      .box`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex basis-zero>
  <div class="grow mx1">
    <p>1. Row direction</p>
    <w-flex justify-center align-center class="wrapper">
      <div class="box maa"></div>
      <div class="box maa"></div>
      <div class="box maa"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>2. Column direction</p>
    <w-flex column justify-center class="wrapper">
      <div class="box"></div>
      <div class="box mxa"></div>
      <div class="box"></div>
    </w-flex>
  </div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]},proxy:!0}])},[t("w-flex",{attrs:{"basis-zero":""}},[t("div",{staticClass:"grow mx1"},[t("p",[s._v("1. Row direction")]),t("w-flex",{staticClass:"wrapper2",attrs:{"justify-center":"","align-center":""}},[t("div",{staticClass:"box maa"}),t("div",{staticClass:"box maa"}),t("div",{staticClass:"box maa"})])],1),t("div",{staticClass:"grow mx1"},[t("p",[s._v("2. Column direction")]),t("w-flex",{staticClass:"wrapper2",attrs:{column:"","justify-center":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box mxa"}),t("div",{staticClass:"box"})])],1)])],1),t("title-link",{staticClass:"mt12 title3",attrs:{h3:"",slug:"not-justify-self"}},[t("em",[s._v("Not "),t("span",{staticClass:"code"},[s._v("justify-self")])])]),t("alert",{attrs:{warning:""}},[t("a",{staticClass:"black ml1",attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox",target:"_blank"}},[s._v("There is no justify-self in Flexbox."),t("w-icon",{staticClass:"ml2",attrs:{sm:""}},[s._v("mdi mdi-open-in-new")])],1)]),t("title-link",{staticClass:"mt12 title3",attrs:{h3:"",slug:"spacer"}},[s._v("Spacer ("),t("code",[s._v(".spacer")]),s._v(")")]),t("p",[s._v("In a flex context, the spacer will push the elements to the sides.")]),t("w-flex",{staticClass:"xs-column",attrs:{wrap:"","basis-zero":""}},[t("example",{staticClass:"grow",attrs:{"content-class":"fill-height"},scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`w-flex.wrapper(align-center)
  .box
  .box
  .spacer
  .box`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex align-center class="wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="spacer"></div>
  <div class="box"></div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}`)]},proxy:!0}])},[t("w-flex",{staticClass:"wrapper",attrs:{"align-center":""}},[t("div",{staticClass:"box"}),t("div",{staticClass:"box"}),t("div",{staticClass:"spacer"}),t("div",{staticClass:"box"})])],1),t("div",{staticClass:"shrink mx2 xs-hide"}),t("example",{staticClass:"grow",scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`w-flex.wrapper(column)
  .box.shrink
  .box.shrink
  .spacer
  .box.shrink`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex column class="wrapper">
  <div class="box shrink"></div>
  <div class="box shrink"></div>
  <div class="spacer"></div>
  <div class="box shrink"></div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]},proxy:!0}])},[t("w-flex",{staticClass:"wrapper",attrs:{column:""}},[t("div",{staticClass:"box shrink"}),t("div",{staticClass:"box shrink"}),t("div",{staticClass:"spacer"}),t("div",{staticClass:"box shrink"})])],1)],1),t("title-link",{attrs:{h2:""}},[s._v("Gap")]),s._m(6),t("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`w-flex(gap="6")
  .box.grow(v-for="i in 4")

w-flex.mt12(gap="2")
  .box.grow(v-for="i in 6")`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex gap="3">
  <div v-for="i in 4" class="box grow"></div>
</w-flex>

<w-flex gap="6" class="mt12">
  <div v-for="i in 6" class="box grow"></div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}`)]},proxy:!0}])},[t("w-flex",{attrs:{gap:"6"}},s._l(4,function(n){return t("div",{staticClass:"box grow"})}),0),t("w-flex",{staticClass:"mt12",attrs:{gap:"2"}},s._l(6,function(n){return t("div",{staticClass:"box grow"})}),0)],1),t("alert",{attrs:{success:""}},[s._v("You can also use the "),t("code",[s._v("gap")]),s._v(` option with the breakpoint-based grid classes
(E.g. `),t("code",[s._v(".xs6")]),s._v(", etc.) when the boxes stay on a single line."),t("example",{staticClass:"lighter",scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`w-flex(gap="3")
  .box.xs3 .xs3
  .box.xs3 .xs3
  .box.xs6 .xs6`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex gap="3">
  <div class="box xs3"></div>
  <div class="box xs3"></div>
  <div class="box xs6"></div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}`)]},proxy:!0}])},[t("w-flex",{attrs:{gap:"3"}},[t("div",{staticClass:"box xs3 code"},[s._v(".xs3")]),t("div",{staticClass:"box xs3 code"},[s._v(".xs3")]),t("div",{staticClass:"box xs6 code"},[s._v(".xs6")])])],1)],1),t("title-link",{attrs:{h3:""}},[s._v("Caveat")]),t("alert",{attrs:{warning:""}},[s._v("The "),t("code",[s._v("gap")]),s._v(" option will not work with both wrap ("),t("code",[s._v("flex-wrap: wrap")]),s._v(`) and the
breakpoint-based grid system. The gap would overflow from the 100% total width distributed
among the children of the `),t("strong",{staticClass:"code"},[s._v("w-flex")]),s._v(", like illustrated in the following examples.")]),t("w-flex",{staticClass:"smd-column",attrs:{wrap:""}},[t("div",{staticClass:"grow"},[s._v("Without gap"),t("example",{staticClass:"lighter mt2 grow",scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`.yellow-light5--bg.bd1
  w-flex(wrap)
    .box.xs6(v-for="i in 4") .xs6`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<div class="yellow-light5--bg bd1">
  <w-flex wrap>
    <div v-for="i in 4" class="box xs6">.xs6</div>
  </w-flex>
</div>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`)]},proxy:!0}])},[t("div",{staticClass:"yellow-light5--bg bd1"},[t("w-flex",{attrs:{wrap:""}},s._l(4,function(n){return t("div",{staticClass:"box xs6 code"},[s._v(".xs6")])}),0)],1)])],1),t("div",{staticClass:"mx2"}),t("div",{staticClass:"grow"},[s._v("With gap"),t("example",{staticClass:"lighter mt2 grow",scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`.yellow-light5--bg.bd1
  w-flex(wrap gap="4")
    .box.xs6.code(v-for="i in 4") .xs6`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<div class="yellow-light5--bg bd1">
  <w-flex wrap gap="4">
    <div v-for="i in 4" class="box xs6">.xs6</div>
  </w-flex>
</div>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`)]},proxy:!0}])},[t("div",{staticClass:"yellow-light5--bg bd1"},[t("w-flex",{attrs:{wrap:"",gap:"4"}},s._l(4,function(n){return t("div",{staticClass:"box xs6 code"},[s._v(".xs6")])}),0)],1)])],1)]),s._m(7),t("h4",[s._v("1. Wrap children in padded boxes & apply equivalent negative margin on parent")]),t("example",{staticClass:"lighter",scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`.yellow-light5--bg.bd1
  w-flex.ma-2(wrap)
    .xs6.pa2(v-for="i in 4")
      .box .xs6`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<div class="yellow-light5--bg bd1">
  <w-flex wrap class="ma-2">
    <div v-for="i in 4" class="xs6 pa2">
      <div class="box">.xs6</div>
    </div>
  </w-flex>
</div>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`)]},proxy:!0}])},[t("div",{staticClass:"yellow-light5--bg bd1"},[t("w-flex",{staticClass:"ma-2",attrs:{wrap:""}},s._l(4,function(n){return t("div",{staticClass:"xs6 pa2"},[t("div",{staticClass:"box d-flex justify-center code"},[s._v(".xs6")])])}),0)],1)]),s._m(8),t("example",{staticClass:"lighter",scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`.yellow-light5--bg.bd1
  w-grid(columns="2" gap="4")
    .box <div>
    .box <div>
    .box <div>
    .box <div>`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<div class="yellow-light5--bg bd1">
  <w-grid columns="2" gap="4">
    <div v-for="i in 4" class="box">
      &amp;lt;div&amp;gt;
    </div>
  </w-grid>
</div>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}`)]},proxy:!0}])},[t("div",{staticClass:"yellow-light5--bg bd1"},[t("w-grid",{attrs:{columns:"2",gap:"4"}},[t("div",{staticClass:"box code"},[s._v("<div>")]),t("div",{staticClass:"box code"},[s._v("<div>")]),t("div",{staticClass:"box code"},[s._v("<div>")]),t("div",{staticClass:"box code"},[s._v("<div>")])])],1)])],1)},r=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",[s._v("the "),t("code",[s._v("w-flex")]),s._v(" component and the "),t("code",[s._v(".w-flex")]),s._v(` class both allow a flex layout that you can
easily control with the following classes or attributes on the component.`)])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ul",{staticClass:"mt4"},[t("li",[t("code",{staticClass:"mr2"},[s._v(".row")]),s._v("By default. Displays in row ("),t("span",{staticClass:"code"},[s._v("flex-direction: row")]),s._v(").")]),t("li",[t("code",{staticClass:"mr2"},[s._v(".column")]),s._v("Displays in column ("),t("span",{staticClass:"code"},[s._v("flex-direction: column")]),s._v(").")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".wrap")]),s._v("Wraps the flex content when it does not fit ("),t("span",{staticClass:"code"},[s._v("flex-wrap: wrap")]),s._v(").")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".grow")]),s._v("Tells the element to occupy the available space ("),t("span",{staticClass:"code"},[s._v("flex-grow: 1")]),s._v(").")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".no-grow")]),s._v("Tells the element to "),t("strong",[s._v("not")]),s._v(" occupy the available space ("),t("span",{staticClass:"code"},[s._v("flex-grow: 0")]),s._v(").")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".shrink")]),s._v("Tells the element to shrink if there is not enough space ("),t("span",{staticClass:"code"},[s._v("flex-shrink: 1")]),s._v(").")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".no-shrink")]),s._v("Tells the element to "),t("strong",[s._v("not")]),s._v(" shrink if there is not enough space ("),t("span",{staticClass:"code"},[s._v("flex-shrink: 0")]),s._v(").")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".basis-zero")]),s._v("Distribute the children elements with equal space ("),t("span",{staticClass:"code"},[s._v("flex-basis: 0")]),s._v(")."),t("br"),s._v(`
By default, flex containers will distribute children elements according to their content width.`)]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".fill-width")]),s._v("Sets a width of 100%.")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".fill-height")]),s._v("Sets a height of 100%.")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ul",[t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".align-start")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("align: flex-start")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".align-center")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("align: center")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".align-end")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("align: flex-end")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".justify-start")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("justify: flex-start")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".justify-center")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("justify: center")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".justify-end")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("justify: flex-end")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".justify-space-around")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("justify: space-around")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".justify-space-between")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("justify: space-between")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".justify-space-evenly")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("justify: space-evenly")]),s._v(".")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ul",[t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".align-self-start")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("align-self: flex-start")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".align-self-center")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("align-self: center")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".align-self-end")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("align-self: flex-end")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".justify-self-start")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("justify-self: flex-start")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".justify-self-center")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("justify-self: center")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".justify-self-end")]),s._v("Applies this CSS rule: "),t("span",{staticClass:"code"},[s._v("justify-self: flex-end")]),s._v(".")]),t("li",{staticClass:"mt1"},[t("code",{staticClass:"mr2"},[s._v(".basis-zero")]),s._v("Applies this CSS rule directly on the element: "),t("span",{staticClass:"code"},[s._v("flex-basis: 0")]),s._v(".")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",{staticClass:"mt6"},[s._v("The "),t("code",{staticClass:"mx1"},[s._v(".spacer")]),s._v(` class is also very helpful to separate 2 elements as it will occupy the full
available space and push the elements on each side.
`)])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",[s._v("By default if you don't set an alignment on the "),t("span",{staticClass:"code"},[s._v("w-flex")]),s._v(` component, the content will
be stretched vertically.`),t("br"),s._v(`
If it is not what you want, you can either add an alignment on the `),t("span",{staticClass:"code"},[s._v("w-flex")]),s._v(` component
(case 2), or a self align on the children (case 3).
`)])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",[s._v("The "),t("strong",{staticClass:"code"},[s._v("w-flex")]),s._v(" component accepts a "),t("code",[s._v("gap")]),s._v(` option to equally space out the children
inside the flex container.`)])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",{staticClass:"mt4"},[t("strong",[s._v("Solution:")]),s._v(" there are a couple of ways to bypass this limitation.")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("h4",[s._v("2. Use the "),t("strong",{staticClass:"code"},[s._v("w-grid")]),s._v(" component instead")])}];const c={},a={};var o=i(c,l,r,!1,v,null,null,null);function v(s){for(let e in a)this[e]=a[e]}var x=function(){return o.exports}();export{x as default};
