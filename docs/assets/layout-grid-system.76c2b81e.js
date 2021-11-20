import{n as l}from"./index.bd0b62cc.js";import"./vendor.4f8da9ec.js";var v=function(){var a=this,s=a.$createElement,i=a._self._c||s;return i("main",[i("title-link",{staticClass:"mt4",attrs:{h1:""}},[a._v("Grid system")]),i("div",{staticClass:"title3"},[a._v("The grid system (using flexbox) is 12-cell based by default.")]),a._m(0),i("alert",{attrs:{info:""}},[a._v(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`),i("ssh-pre",{staticClass:"mb0",attrs:{language:"js"}},[a._v(`new WaveUI({
  css: {
    grid: 24
  }
})
`)])],1),i("title-link",{attrs:{h2:""}},[a._v("Basic grid")]),a._m(1),i("alert",{attrs:{tip:""}},[a._v(`The grid cells must be in a flex context to display inline, you can wrap them in a
`),i("strong",{staticClass:"code"},[a._v("w-flex")]),a._v(" component or "),i("code",[a._v(".w-flex")]),a._v(` CSS class.
`)]),i("example",{scopedSlots:a._u([{key:"html",fn:function(){return[a._v(`<w-flex wrap class="text-center">
  <div class="xs12 pa1">
    <div class="primary-dark1--bg py3">xs12</div>
  </div>

  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>
  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>

  <div v-for="i in 3" :key="\`a\${i}\`" class="xs4 pa1">
    <div class="primary-light1--bg white py3">xs4</div>
  </div>

  <div v-for="i in 4" :key="\`b\${i}\`" class="xs3 pa1">
    <div class="primary-light2--bg white py3">xs3</div>
  </div>

  <div v-for="i in 6" :key="\`c\${i}\`" class="xs2 pa1">
    <div class="primary-light3--bg py3">xs2</div>
  </div>

  <div v-for="i in 12" :key="\`d\${i}\`" class="xs1 pa1">
    <div class="blue-light4--bg pa3">xs1</div>
  </div>
</w-flex>
`)]},proxy:!0}])},[i("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[i("div",{staticClass:"xs12 pa1"},[i("div",{staticClass:"primary-dark1--bg py3"},[a._v("xs12")])]),i("div",{staticClass:"xs6 pa1"},[i("div",{staticClass:"primary--bg py3"},[a._v("xs6")])]),i("div",{staticClass:"xs6 pa1"},[i("div",{staticClass:"primary--bg py3"},[a._v("xs6")])]),a._l(3,function(t){return i("div",{key:"a"+t,staticClass:"xs4 pa1"},[i("div",{staticClass:"primary-light1--bg white py3"},[a._v("xs4")])])}),a._l(4,function(t){return i("div",{key:"b"+t,staticClass:"xs3 pa1"},[i("div",{staticClass:"primary-light2--bg white py3"},[a._v("xs3")])])}),a._l(6,function(t){return i("div",{key:"c"+t,staticClass:"xs2 pa1"},[i("div",{staticClass:"primary-light3--bg py3"},[a._v("xs2")])])}),a._l(12,function(t){return i("div",{key:"d"+t,staticClass:"xs1 pa1"},[i("div",{staticClass:"blue-light4--bg pa3"},[a._v("xs1")])])})],2)],1),i("example",{staticClass:"mt8",scopedSlots:a._u([{key:"html",fn:function(){return[a._v(`<w-flex wrap class="text-center">
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
`)]},proxy:!0}])},[i("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[i("div",{staticClass:"xs1 pa1"},[i("div",{staticClass:"primary-dark1--bg py3"},[a._v("xs1")])]),i("div",{staticClass:"xs11 pa1"},[i("div",{staticClass:"primary-dark1--bg py3"},[a._v("xs11")])]),i("div",{staticClass:"xs2 pa1"},[i("div",{staticClass:"primary--bg py3"},[a._v("xs2")])]),i("div",{staticClass:"xs10 pa1"},[i("div",{staticClass:"primary--bg py3"},[a._v("xs10")])]),i("div",{staticClass:"xs3 pa1"},[i("div",{staticClass:"primary-light1--bg white py3"},[a._v("xs3")])]),i("div",{staticClass:"xs9 pa1"},[i("div",{staticClass:"primary-light1--bg white py3"},[a._v("xs9")])]),i("div",{staticClass:"xs4 pa1"},[i("div",{staticClass:"primary-light2--bg white py3"},[a._v("xs4")])]),i("div",{staticClass:"xs8 pa1"},[i("div",{staticClass:"primary-light2--bg white py3"},[a._v("xs8")])]),i("div",{staticClass:"xs5 pa1"},[i("div",{staticClass:"primary-light3--bg py3"},[a._v("xs5")])]),i("div",{staticClass:"xs7 pa1"},[i("div",{staticClass:"primary-light3--bg py3"},[a._v("xs7")])])])],1),i("title-link",{attrs:{h2:""}},[a._v("Operating with breakpoints")]),i("p",[a._v("For this example, resize your browser and observe the different layout when crossing a breakpoint.")]),i("example",{scopedSlots:a._u([{key:"html",fn:function(){return[a._v(`<w-flex wrap class="text-center">
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
</w-flex>`)]},proxy:!0}])},[i("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[i("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[i("div",{staticClass:"primary-light3--bg py3"},[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?[a._v("xs12")]:a.$waveui.breakpoint.md?[a._v("md6")]:a.$waveui.breakpoint.lg?[a._v("lg4")]:a.$waveui.breakpoint.xl?[a._v("xl2")]:a._e()],2)]),i("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[i("div",{staticClass:"primary-light3--bg py3"},[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?[a._v("xs12")]:a.$waveui.breakpoint.md?[a._v("md6")]:a.$waveui.breakpoint.lg?[a._v("lg4")]:a.$waveui.breakpoint.xl?[a._v("xl2")]:a._e()],2)]),i("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[i("div",{staticClass:"primary-light3--bg py3"},[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?[a._v("xs12")]:a.$waveui.breakpoint.md?[a._v("md6")]:a.$waveui.breakpoint.lg?[a._v("lg4")]:a.$waveui.breakpoint.xl?[a._v("xl2")]:a._e()],2)]),i("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[i("div",{staticClass:"primary-light3--bg py3"},[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?[a._v("xs12")]:a.$waveui.breakpoint.md?[a._v("md6")]:a.$waveui.breakpoint.lg?[a._v("lg4")]:a.$waveui.breakpoint.xl?[a._v("xl2")]:a._e()],2)]),i("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[i("div",{staticClass:"primary-light3--bg py3"},[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?[a._v("xs12")]:a.$waveui.breakpoint.md?[a._v("md6")]:a.$waveui.breakpoint.lg?[a._v("lg4")]:a.$waveui.breakpoint.xl?[a._v("xl2")]:a._e()],2)]),i("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[i("div",{staticClass:"primary-light3--bg py3"},[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?[a._v("xs12")]:a.$waveui.breakpoint.md?[a._v("md6")]:a.$waveui.breakpoint.lg?[a._v("lg4")]:a.$waveui.breakpoint.xl?[a._v("xl2")]:a._e()],2)])])],1)],1)},n=[function(){var a=this,s=a.$createElement,i=a._self._c||s;return i("p",[a._v(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),i("br"),a._v(`
You can then assign this created layout to a particular breakpoint.
`)])},function(){var a=this,s=a.$createElement,i=a._self._c||s;return i("p",[a._v("Let's start with a basic example. The following splitting is applied on the "),i("span",{staticClass:"code"},[a._v("xs")]),a._v(`
breakpoint and will thus be applied on all the breakpoints.`)])}];const p={},e={};var r=l(p,v,n,!1,d,null,null,null);function d(a){for(let s in e)this[s]=e[s]}var c=function(){return r.exports}();export{c as default};
