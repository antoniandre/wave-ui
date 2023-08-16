import{n as l}from"./index.e31dd236.js";var n=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("main",[a("title-link",{staticClass:"mt4",attrs:{h1:""}},[e._v("Grid system (flexbox)")]),a("div",{staticClass:"title3"},[e._v("The grid system (using flexbox) is 12-cell based by default.")]),e._m(0),a("alert",{attrs:{info:""}},[e._v(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`),a("ssh-pre",{staticClass:"mb0",attrs:{language:"js"}},[e._v(`new WaveUI({
  css: {
    grid: 24
  }
})
`)])],1),a("title-link",{attrs:{h2:""}},[e._v("How to use")]),a("alert",{attrs:{info:""}},[e._v("For this flexbox layout, you need to:"),a("ol",[a("li",[e._v("Use the "),a("strong",{staticClass:"code"},[e._v("w-flex")]),e._v(` component or class on the parent in order to set the
`),a("strong",[e._v("flex")]),e._v(" context ("),a("code",[e._v("display: flex")]),e._v(").")]),a("li",[e._v(`Use the predefined classes on the children in order to divide the available width
according to the class in use.
`)])])]),e._m(1),a("p",{staticClass:"mt6"},[e._v("In this case:")]),e._m(2),a("title-link",{attrs:{h2:""}},[e._v("Basic grid")]),e._m(3),a("alert",{attrs:{tip:""}},[e._v(`The grid cells must be in a flex context to display inline, you can wrap them in a
`),a("strong",{staticClass:"code"},[e._v("w-flex")]),e._v(" component or "),a("code",[e._v(".w-flex")]),e._v(` CSS class.
`)]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex.text-center(wrap)
  .xs12.pa1
    .primary-dark1--bg.py3 xs12
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs4.pa1(v-for="i in 3")
    .primary-light1--bg.white.py3 xs4
  .xs3.pa1(v-for="i in 4")
    .primary-light2--bg.white.py3 xs3
  .xs2.pa1(v-for="i in 6")
    .primary-light3--bg.py3 xs2
  .xs1.pa1(v-for="i in 12")
    .blue-light4--bg.py3 xs1`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap class="text-center">
  <div class="xs12 pa1">
    <div class="primary-dark1--bg py3">xs12</div>
  </div>

  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>
  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>

  <div v-for="i in 3" class="xs4 pa1">
    <div class="primary-light1--bg white py3">xs4</div>
  </div>

  <div v-for="i in 4" class="xs3 pa1">
    <div class="primary-light2--bg white py3">xs3</div>
  </div>

  <div v-for="i in 6" class="xs2 pa1">
    <div class="primary-light3--bg py3">xs2</div>
  </div>

  <div v-for="i in 12" class="xs1 pa1">
    <div class="blue-light4--bg py3">xs1</div>
  </div>
</w-flex>
`)]},proxy:!0}])},[a("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[a("div",{staticClass:"xs12 pa1"},[a("div",{staticClass:"primary-dark1--bg py3"},[e._v("xs12")])]),a("div",{staticClass:"xs6 pa1"},[a("div",{staticClass:"primary--bg py3"},[e._v("xs6")])]),a("div",{staticClass:"xs6 pa1"},[a("div",{staticClass:"primary--bg py3"},[e._v("xs6")])]),e._l(3,function(t){return a("div",{staticClass:"xs4 pa1"},[a("div",{staticClass:"primary-light1--bg white py3"},[e._v("xs4")])])}),e._l(4,function(t){return a("div",{staticClass:"xs3 pa1"},[a("div",{staticClass:"primary-light2--bg white py3"},[e._v("xs3")])])}),e._l(6,function(t){return a("div",{staticClass:"xs2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[e._v("xs2")])])}),e._l(12,function(t){return a("div",{staticClass:"xs1 pa1"},[a("div",{staticClass:"blue-light4--bg py3"},[e._v("xs1")])])})],2)],1),a("example",{staticClass:"mt8",scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex.text-center(wrap)
  .xs1.pa1
    .primary-dark1--bg.py3 xs1
  .xs11.pa1
    .primary-dark1--bg.py3 xs11
  .xs2.pa1
    .primary--bg.py3 xs2
  .xs10.pa1
    .primary--bg.py3 xs10
  .xs3.pa1
    .primary-light1--bg.white.py3 xs3
  .xs9.pa1
    .primary-light1--bg.white.py3 xs9
  .xs4.pa1
    .primary-light2--bg.white.py3 xs4
  .xs8.pa1
    .primary-light2--bg.white.py3 xs8
  .xs5.pa1
    .primary-light3--bg.py3 xs5
  .xs7.pa1
    .primary-light3--bg.py3 xs7`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap class="text-center">
  <div class="xs1 pa1">
    <div class="primary-dark1--bg py3">xs1</div>
  </div>
  <div class="xs11 pa1">
    <div class="primary-dark1--bg py3">xs11</div>
  </div>

  <div class="xs2 pa1">
    <div class="primary--bg py3">xs2</div>
  </div>
  <div class="xs10 pa1">
    <div class="primary--bg py3">xs10</div>
  </div>

  <div class="xs3 pa1">
    <div class="primary-light1--bg white py3">xs3</div>
  </div>
  <div class="xs9 pa1">
    <div class="primary-light1--bg white py3">xs9</div>
  </div>

  <div class="xs4 pa1">
    <div class="primary-light2--bg white py3">xs4</div>
  </div>
  <div class="xs8 pa1">
    <div class="primary-light2--bg white py3">xs8</div>
  </div>

  <div class="xs5 pa1">
    <div class="primary-light3--bg py3">xs5</div>
  </div>
  <div class="xs7 pa1">
    <div class="primary-light3--bg py3">xs7</div>
  </div>
</w-flex>
`)]},proxy:!0}])},[a("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[a("div",{staticClass:"xs1 pa1"},[a("div",{staticClass:"primary-dark1--bg py3"},[e._v("xs1")])]),a("div",{staticClass:"xs11 pa1"},[a("div",{staticClass:"primary-dark1--bg py3"},[e._v("xs11")])]),a("div",{staticClass:"xs2 pa1"},[a("div",{staticClass:"primary--bg py3"},[e._v("xs2")])]),a("div",{staticClass:"xs10 pa1"},[a("div",{staticClass:"primary--bg py3"},[e._v("xs10")])]),a("div",{staticClass:"xs3 pa1"},[a("div",{staticClass:"primary-light1--bg white py3"},[e._v("xs3")])]),a("div",{staticClass:"xs9 pa1"},[a("div",{staticClass:"primary-light1--bg white py3"},[e._v("xs9")])]),a("div",{staticClass:"xs4 pa1"},[a("div",{staticClass:"primary-light2--bg white py3"},[e._v("xs4")])]),a("div",{staticClass:"xs8 pa1"},[a("div",{staticClass:"primary-light2--bg white py3"},[e._v("xs8")])]),a("div",{staticClass:"xs5 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[e._v("xs5")])]),a("div",{staticClass:"xs7 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[e._v("xs7")])])])],1),a("title-link",{attrs:{h2:""}},[e._v("Operating with breakpoints")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-card.blue-light5--bg
  .title2
    | Current breakpoint:
    code `+e._s("{{ $waveui.breakpoint.name }}")+`
  em.grey.mt1 Resizing your browser will update the current breakpoint.`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+e._s("{{ $waveui.breakpoint.name }}")+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`)]},proxy:!0}])},[a("w-card",{staticClass:"blue-light5--bg"},[a("div",{staticClass:"title2 mt0"},[e._v("Current breakpoint: "),a("code",[e._v(e._s(e.$waveui.breakpoint.name))])]),a("em",{staticClass:"grey mt1"},[e._v("Resizing your browser will update the current breakpoint.")])])],1),a("p",[e._v("For this example, resize your browser and observe the different layout when crossing a breakpoint.")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex.text-center(wrap)
  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap class="text-center">
  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>
</w-flex>
`)]},proxy:!0}])},[a("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[e.$waveui.breakpoint.xs||e.$waveui.breakpoint.sm?[e._v("xs12")]:e.$waveui.breakpoint.md?[e._v("md6")]:e.$waveui.breakpoint.lg?[e._v("lg4")]:e.$waveui.breakpoint.xl?[e._v("xl2")]:e._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[e.$waveui.breakpoint.xs||e.$waveui.breakpoint.sm?[e._v("xs12")]:e.$waveui.breakpoint.md?[e._v("md6")]:e.$waveui.breakpoint.lg?[e._v("lg4")]:e.$waveui.breakpoint.xl?[e._v("xl2")]:e._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[e.$waveui.breakpoint.xs||e.$waveui.breakpoint.sm?[e._v("xs12")]:e.$waveui.breakpoint.md?[e._v("md6")]:e.$waveui.breakpoint.lg?[e._v("lg4")]:e.$waveui.breakpoint.xl?[e._v("xl2")]:e._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[e.$waveui.breakpoint.xs||e.$waveui.breakpoint.sm?[e._v("xs12")]:e.$waveui.breakpoint.md?[e._v("md6")]:e.$waveui.breakpoint.lg?[e._v("lg4")]:e.$waveui.breakpoint.xl?[e._v("xl2")]:e._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[e.$waveui.breakpoint.xs||e.$waveui.breakpoint.sm?[e._v("xs12")]:e.$waveui.breakpoint.md?[e._v("md6")]:e.$waveui.breakpoint.lg?[e._v("lg4")]:e.$waveui.breakpoint.xl?[e._v("xl2")]:e._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[e.$waveui.breakpoint.xs||e.$waveui.breakpoint.sm?[e._v("xs12")]:e.$waveui.breakpoint.md?[e._v("md6")]:e.$waveui.breakpoint.lg?[e._v("lg4")]:e.$waveui.breakpoint.xl?[e._v("xl2")]:e._e()],2)])])],1),a("title-link",{attrs:{h2:""}},[e._v("Using the gap option with the grid system")]),a("p",[e._v("The "),a("strong",{staticClass:"code inherit"},[e._v("w-flex")]),e._v(" component has a"),a("router-link",{staticClass:"ml1",attrs:{to:"/layout--flex#gap"}},[a("span",{staticClass:"code inherit"},[e._v("gap")]),e._v(" option")]),e._v(", as well as "),a("router-link",{staticClass:"ml1",attrs:{to:"/layout--flex#caveat"}},[e._v("a caveat")]),e._v(" when used with flex wrap.")],1)],1)},r=[function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("p",[e._v(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),a("br"),e._v(`
You can then assign this created layout to a particular breakpoint.
`)])},function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("fieldset",{staticClass:"w-flex pa4 pt3 amber-light5--bg",staticStyle:{position:"relative"}},[a("legend",{staticClass:"px1 round"},[a("strong",{staticClass:"code amber-dark3"},[e._v("<w-flex>")])]),a("fieldset",{staticClass:"xs3 light-blue-light5--bg pa3 code"},[a("legend",{staticClass:"light-blue-dark2 px1"},[e._v("div.xs3")])]),a("fieldset",{staticClass:"xs9 light-blue-light5--bg pa3 code ml1"},[a("legend",{staticClass:"light-blue-dark2 px1"},[e._v("div.xs9")])])])},function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("ul",[a("li",[e._v("xs3 represents 3 units of the 12-cell-based grid, which equals to: (100% total width \xF7 12 cells) x 3 = 25%")]),a("li",[e._v("xs9 represents 9 units of the 12-cell-based grid, which equals to: (100% total width \xF7 12 cells) x 9 = 75%")])])},function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("p",[e._v("Let's start with a basic example. The following splitting is applied on the "),a("span",{staticClass:"code"},[e._v("xs")]),e._v(`
breakpoint and will thus be applied on all the breakpoints.`)])}];const p={},s={};var v=l(p,n,r,!1,d,null,null,null);function d(e){for(let i in s)this[i]=s[i]}var m=function(){return v.exports}();export{m as default};
