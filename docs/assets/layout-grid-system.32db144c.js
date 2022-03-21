import{n as l}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var n=function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("main",[a("title-link",{staticClass:"mt4",attrs:{h1:""}},[i._v("Grid system")]),a("div",{staticClass:"title3"},[i._v("The grid system (using flexbox) is 12-cell based by default.")]),i._m(0),a("alert",{attrs:{info:""}},[i._v(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`),a("ssh-pre",{staticClass:"mb0",attrs:{language:"js"}},[i._v(`new WaveUI({
  css: {
    grid: 24
  }
})
`)])],1),a("title-link",{attrs:{h2:""}},[i._v("Basic grid")]),i._m(1),a("alert",{attrs:{tip:""}},[i._v(`The grid cells must be in a flex context to display inline, you can wrap them in a
`),a("strong",{staticClass:"code"},[i._v("w-flex")]),i._v(" component or "),a("code",[i._v(".w-flex")]),i._v(` CSS class.
`)]),a("example",{scopedSlots:i._u([{key:"pug",fn:function(){return[i._v(`w-flex.text-center(wrap)
  .xs12.pa1
    .primary-dark1--bg.py3 xs12
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs4.pa1(v-for="i in 3" :key="i")
    .primary-light1--bg.white.py3 xs4
  .xs3.pa1(v-for="i in 4" :key="i")
    .primary-light2--bg.white.py3 xs3
  .xs2.pa1(v-for="i in 6" :key="i")
    .primary-light3--bg.py3 xs2
  .xs1.pa1(v-for="i in 12" :key="i")
    .blue-light4--bg.pa3 xs1`)]},proxy:!0},{key:"html",fn:function(){return[i._v(`<w-flex wrap class="text-center">
  <div class="xs12 pa1">
    <div class="primary-dark1--bg py3">xs12</div>
  </div>

  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>
  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>

  <div v-for="i in 3" :key="i" class="xs4 pa1">
    <div class="primary-light1--bg white py3">xs4</div>
  </div>

  <div v-for="i in 4" :key="i" class="xs3 pa1">
    <div class="primary-light2--bg white py3">xs3</div>
  </div>

  <div v-for="i in 6" :key="i" class="xs2 pa1">
    <div class="primary-light3--bg py3">xs2</div>
  </div>

  <div v-for="i in 12" :key="i" class="xs1 pa1">
    <div class="blue-light4--bg pa3">xs1</div>
  </div>
</w-flex>
`)]},proxy:!0}])},[a("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[a("div",{staticClass:"xs12 pa1"},[a("div",{staticClass:"primary-dark1--bg py3"},[i._v("xs12")])]),a("div",{staticClass:"xs6 pa1"},[a("div",{staticClass:"primary--bg py3"},[i._v("xs6")])]),a("div",{staticClass:"xs6 pa1"},[a("div",{staticClass:"primary--bg py3"},[i._v("xs6")])]),i._l(3,function(t){return a("div",{key:t,staticClass:"xs4 pa1"},[a("div",{staticClass:"primary-light1--bg white py3"},[i._v("xs4")])])}),i._l(4,function(t){return a("div",{key:t,staticClass:"xs3 pa1"},[a("div",{staticClass:"primary-light2--bg white py3"},[i._v("xs3")])])}),i._l(6,function(t){return a("div",{key:t,staticClass:"xs2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[i._v("xs2")])])}),i._l(12,function(t){return a("div",{key:t,staticClass:"xs1 pa1"},[a("div",{staticClass:"blue-light4--bg pa3"},[i._v("xs1")])])})],2)],1),a("example",{staticClass:"mt8",scopedSlots:i._u([{key:"pug",fn:function(){return[i._v(`w-flex.text-center(wrap)
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
    .primary-light3--bg.py3 xs7`)]},proxy:!0},{key:"html",fn:function(){return[i._v(`<w-flex wrap class="text-center">
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
`)]},proxy:!0}])},[a("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[a("div",{staticClass:"xs1 pa1"},[a("div",{staticClass:"primary-dark1--bg py3"},[i._v("xs1")])]),a("div",{staticClass:"xs11 pa1"},[a("div",{staticClass:"primary-dark1--bg py3"},[i._v("xs11")])]),a("div",{staticClass:"xs2 pa1"},[a("div",{staticClass:"primary--bg py3"},[i._v("xs2")])]),a("div",{staticClass:"xs10 pa1"},[a("div",{staticClass:"primary--bg py3"},[i._v("xs10")])]),a("div",{staticClass:"xs3 pa1"},[a("div",{staticClass:"primary-light1--bg white py3"},[i._v("xs3")])]),a("div",{staticClass:"xs9 pa1"},[a("div",{staticClass:"primary-light1--bg white py3"},[i._v("xs9")])]),a("div",{staticClass:"xs4 pa1"},[a("div",{staticClass:"primary-light2--bg white py3"},[i._v("xs4")])]),a("div",{staticClass:"xs8 pa1"},[a("div",{staticClass:"primary-light2--bg white py3"},[i._v("xs8")])]),a("div",{staticClass:"xs5 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[i._v("xs5")])]),a("div",{staticClass:"xs7 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[i._v("xs7")])])])],1),a("title-link",{attrs:{h2:""}},[i._v("Operating with breakpoints")]),a("p",[i._v("For this example, resize your browser and observe the different layout when crossing a breakpoint.")]),a("example",{scopedSlots:i._u([{key:"pug",fn:function(){return[i._v(`w-flex.text-center(wrap)
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
      template(v-else-if="$waveui.breakpoint.xl") xl2`)]},proxy:!0},{key:"html",fn:function(){return[i._v(`<w-flex wrap class="text-center">
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
</w-flex>`)]},proxy:!0}])},[a("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),a("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[a("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)])])],1)],1)},p=[function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("p",[i._v(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),a("br"),i._v(`
You can then assign this created layout to a particular breakpoint.
`)])},function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("p",[i._v("Let's start with a basic example. The following splitting is applied on the "),a("span",{staticClass:"code"},[i._v("xs")]),i._v(`
breakpoint and will thus be applied on all the breakpoints.`)])}];const v={},s={};var r=l(v,n,p,!1,x,null,null,null);function x(i){for(let e in s)this[e]=s[e]}var g=function(){return r.exports}();export{g as default};
