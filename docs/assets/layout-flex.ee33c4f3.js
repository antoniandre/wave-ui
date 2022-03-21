import{n}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("title-link",{staticClass:"mt4",attrs:{h1:""}},[t._v("Flex layout classes")]),s("title-link",{attrs:{h2:"",slug:"w-flex-component-and-helper-classes"}},[s("span",{staticClass:"code"},[t._v("w-flex")]),t._v(" component & helper classes")]),t._m(0),t._m(1),s("title-link",{attrs:{h2:""}},[t._v("Alignments")]),s("p",[t._v("Align children with these classes on the parent container:")]),t._m(2),s("p",{staticClass:"mt4"},[t._v("Align a child with these classes directly on the child element:")]),t._m(3),t._m(4),s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"mt12 headline",attrs:{h2:""}},[t._v("Examples")]),s("title-link",{staticClass:"mt8 title2",attrs:{h3:""}},[t._v("Justify")]),s("div",{staticClass:"title3 mt6"},[t._v("w-flex, row direction (default)")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`p.mb1 .justify-start (default)
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
  .box`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<p>.justify-start (default)</p>
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
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}
`)]},proxy:!0}])},[s("p",{staticClass:"code mb1"},[t._v(".justify-start (default)")]),s("div",{staticClass:"w-flex pa3 blue-light5--bg justify-start"},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})]),s("p",{staticClass:"code mt4 mb1"},[t._v(".justify-center")]),s("div",{staticClass:"w-flex pa3 blue-light5--bg justify-center"},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})]),s("p",{staticClass:"code mt4 mb1"},[t._v(".justify-end")]),s("div",{staticClass:"w-flex pa3 blue-light5--bg justify-end"},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})]),s("p",{staticClass:"code mt4 mb1"},[t._v(".justify-space-between")]),s("div",{staticClass:"w-flex pa3 blue-light5--bg justify-space-between"},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})]),s("p",{staticClass:"code mt4 mb1"},[t._v(".justify-space-evenly")]),s("div",{staticClass:"w-flex pa3 blue-light5--bg justify-space-evenly"},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})])]),s("div",{staticClass:"title3"},[t._v("w-flex, column direction")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(basis-zero wrap)
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
      .box`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex basis-zero wrap>
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
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]},proxy:!0}])},[s("w-flex",{attrs:{"basis-zero":"",wrap:""}},[s("div",{staticClass:"grow mx1"},[s("p",{staticClass:"code mb1"},[t._v(".justify-start (default)")]),s("w-flex",{staticClass:"wrapper",attrs:{column:"","align-center":"","justify-start":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})])],1),s("div",{staticClass:"grow mx1"},[s("p",{staticClass:"code mb1"},[t._v(".justify-center")]),s("w-flex",{staticClass:"wrapper",attrs:{column:"","align-center":"","justify-center":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})])],1),s("div",{staticClass:"grow mx1"},[s("p",{staticClass:"code mb1"},[t._v(".justify-space-between")]),s("w-flex",{staticClass:"wrapper",attrs:{column:"","align-center":"","justify-space-between":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})])],1),s("div",{staticClass:"grow mx1"},[s("p",{staticClass:"code mb1"},[t._v(".justify-end")]),s("w-flex",{staticClass:"wrapper",attrs:{column:"","align-center":"","justify-end":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})])],1)])],1),s("title-link",{staticClass:"mt12 title2",attrs:{h3:""}},[t._v("Align")]),t._m(5),s("div",{staticClass:"title3 mt6"},[t._v("w-flex, row direction (default)")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(basis-zero wrap)
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
      .box.align-self-end`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex basis-zero>
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
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]},proxy:!0}])},[s("w-flex",{attrs:{"basis-zero":"",wrap:""}},[s("div",{staticClass:"grow mx1 xs12 sm4"},[s("p",[t._v("1. Default")]),s("w-flex",{staticClass:"wrapper2",attrs:{"justify-center":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})])],1),s("div",{staticClass:"grow mx1 xs12 sm4"},[s("p",[t._v("2. Align center")]),s("w-flex",{staticClass:"wrapper2",attrs:{"justify-center":"","align-center":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})])],1),s("div",{staticClass:"grow mx1 xs12 sm4"},[s("p",[t._v("3. Align self start, center, end")]),s("w-flex",{staticClass:"wrapper2",attrs:{"justify-center":""}},[s("div",{staticClass:"box align-self-start"}),s("div",{staticClass:"box align-self-center"}),s("div",{staticClass:"box align-self-end"})])],1)])],1),s("div",{staticClass:"title3 mt6"},[t._v("Align-self, column direction")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(basis-zero wrap)
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
      .box.align-self-end`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex basis-zero>
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
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]},proxy:!0}])},[s("w-flex",{attrs:{"basis-zero":"",wrap:""}},[s("div",{staticClass:"grow mx1 xs12 sm4"},[s("p",[t._v("1. Default")]),s("w-flex",{staticClass:"wrapper2",attrs:{column:"","justify-center":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})])],1),s("div",{staticClass:"grow mx1 xs12 sm4"},[s("p",[t._v("2. Align-center")]),s("w-flex",{staticClass:"wrapper2",attrs:{column:"","justify-center":"","align-center":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"box"})])],1),s("div",{staticClass:"grow mx1 xs12 sm4"},[s("p",[t._v("3. Align self start, center, end")]),s("w-flex",{staticClass:"wrapper2",attrs:{column:"","justify-center":""}},[s("div",{staticClass:"box align-self-start"}),s("div",{staticClass:"box align-self-center"}),s("div",{staticClass:"box align-self-end"})])],1)])],1),s("title-link",{staticClass:"mt12 title2",attrs:{h3:""}},[t._v("Using margin in flex context")]),s("alert",{attrs:{warning:""}},[t._v(`It's important to note that setting a margin on an element in a flex content will override its
default positioning.`),s("br"),t._v(`
Look at the following examples where the boxes have different margins applied.`),s("br"),t._v(" "),s("code",[t._v("maa")]),t._v(" = "),s("span",{staticClass:"code"},[t._v("margin: auto")]),t._v(", "),s("code",[t._v("mxa")]),t._v(" = "),s("span",{staticClass:"code"},[t._v("margin-left: auto;margin-right: auto;")]),t._v(`
(read more in `),s("router-link",{attrs:{to:"layout--spaces"}},[t._v("Layout - spaces")]),t._v(")")],1),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(basis-zero)
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
      .box`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex basis-zero>
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
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]},proxy:!0}])},[s("w-flex",{attrs:{"basis-zero":""}},[s("div",{staticClass:"grow mx1"},[s("p",[t._v("1. Row direction")]),s("w-flex",{staticClass:"wrapper2",attrs:{"justify-center":"","align-center":""}},[s("div",{staticClass:"box maa"}),s("div",{staticClass:"box maa"}),s("div",{staticClass:"box maa"})])],1),s("div",{staticClass:"grow mx1"},[s("p",[t._v("2. Column direction")]),s("w-flex",{staticClass:"wrapper2",attrs:{column:"","justify-center":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box mxa"}),s("div",{staticClass:"box"})])],1)])],1),s("title-link",{staticClass:"mt12 title3",attrs:{h3:"",slug:"not-justify-self"}},[s("em",[t._v("Not "),s("span",{staticClass:"code"},[t._v("justify-self")])])]),s("alert",{attrs:{warning:""}},[s("a",{staticClass:"black ml1",attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox",target:"_blank"}},[t._v("There is no justify-self in Flexbox."),s("w-icon",{staticClass:"ml2",attrs:{sm:""}},[t._v("mdi mdi-open-in-new")])],1)]),s("title-link",{staticClass:"mt12 title3",attrs:{h3:"",slug:"spacer"}},[t._v("Spacer ("),s("code",[t._v(".spacer")]),t._v(")")]),s("p",[t._v("In a flex context, the spacer will push the elements to the sides.")]),s("w-flex",{staticClass:"xs-column",attrs:{wrap:"","basis-zero":""}},[s("example",{staticClass:"grow",attrs:{"content-class":"fill-height"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex.wrapper(align-center)
  .box
  .box
  .spacer
  .box`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex align-center class="wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="spacer"></div>
  <div class="box"></div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}`)]},proxy:!0}])},[s("w-flex",{staticClass:"wrapper",attrs:{"align-center":""}},[s("div",{staticClass:"box"}),s("div",{staticClass:"box"}),s("div",{staticClass:"spacer"}),s("div",{staticClass:"box"})])],1),s("div",{staticClass:"shrink mx2 xs-hide"}),s("example",{staticClass:"grow",scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex.wrapper(column)
  .box.shrink
  .box.shrink
  .spacer
  .box.shrink`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex column class="wrapper">
  <div class="box shrink"></div>
  <div class="box shrink"></div>
  <div class="spacer"></div>
  <div class="box shrink"></div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}`)]},proxy:!0}])},[s("w-flex",{staticClass:"wrapper",attrs:{column:""}},[s("div",{staticClass:"box shrink"}),s("div",{staticClass:"box shrink"}),s("div",{staticClass:"spacer"}),s("div",{staticClass:"box shrink"})])],1)],1)],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("the "),s("code",[t._v("w-flex")]),t._v(" component and the "),s("code",[t._v(".w-flex")]),t._v(` class both allow a flex layout that you can
easily control with the following classes or attributes on the component.`)])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"mt4"},[s("li",[s("code",{staticClass:"mr2"},[t._v(".row")]),t._v("By default. Displays in row ("),s("span",{staticClass:"code"},[t._v("flex-direction: row")]),t._v(").")]),s("li",[s("code",{staticClass:"mr2"},[t._v(".column")]),t._v("Displays in column ("),s("span",{staticClass:"code"},[t._v("flex-direction: column")]),t._v(").")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".wrap")]),t._v("Wraps the flex content when it does not fit ("),s("span",{staticClass:"code"},[t._v("flex-wrap: wrap")]),t._v(").")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".grow")]),t._v("Tells the element to occupy the available space ("),s("span",{staticClass:"code"},[t._v("flex-grow: 1")]),t._v(").")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".no-grow")]),t._v("Tells the element to "),s("strong",[t._v("not")]),t._v(" occupy the available space ("),s("span",{staticClass:"code"},[t._v("flex-grow: 0")]),t._v(").")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".shrink")]),t._v("Tells the element to shrink if there is not enough space ("),s("span",{staticClass:"code"},[t._v("flex-shrink: 1")]),t._v(").")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".no-shrink")]),t._v("Tells the element to "),s("strong",[t._v("not")]),t._v(" shrink if there is not enough space ("),s("span",{staticClass:"code"},[t._v("flex-shrink: 0")]),t._v(").")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".basis-zero")]),t._v("Distribute the children elements with equal space ("),s("span",{staticClass:"code"},[t._v("flex-basis: 0")]),t._v(")."),s("br"),t._v(`
By default, flex containers will distribute children elements according to their content width.`)]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".fill-width")]),t._v("Sets a width of 100%.")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".fill-height")]),t._v("Sets a height of 100%.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".align-start")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("align: flex-start")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".align-center")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("align: center")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".align-end")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("align: flex-end")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".justify-start")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("justify: flex-start")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".justify-center")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("justify: center")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".justify-end")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("justify: flex-end")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".justify-space-around")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("justify: space-around")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".justify-space-between")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("justify: space-between")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".justify-space-evenly")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("justify: space-evenly")]),t._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".align-self-start")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("align-self: flex-start")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".align-self-center")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("align-self: center")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".align-self-end")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("align-self: flex-end")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".justify-self-start")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("justify-self: flex-start")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".justify-self-center")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("justify-self: center")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".justify-self-end")]),t._v("Applies this CSS rule: "),s("span",{staticClass:"code"},[t._v("justify-self: flex-end")]),t._v(".")]),s("li",{staticClass:"mt1"},[s("code",{staticClass:"mr2"},[t._v(".basis-zero")]),t._v("Applies this CSS rule directly on the element: "),s("span",{staticClass:"code"},[t._v("flex-basis: 0")]),t._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt6"},[t._v("The "),s("code",{staticClass:"mx1"},[t._v(".spacer")]),t._v(` class is also very helpful to separate 2 elements as it will occupy the full
available space and push the elements on each side.
`)])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("By default if you don't set an alignment on the "),s("span",{staticClass:"code"},[t._v("w-flex")]),t._v(` component, the content will
be stretched vertically.`),s("br"),t._v(`
If it is not what you want, you can either add an alignment on the `),s("span",{staticClass:"code"},[t._v("w-flex")]),t._v(` component
(case 2), or a self align on the children (case 3).
`)])}];const c={},a={};var r=n(c,i,l,!1,o,null,null,null);function o(t){for(let e in a)this[e]=a[e]}var x=function(){return r.exports}();export{x as default};
