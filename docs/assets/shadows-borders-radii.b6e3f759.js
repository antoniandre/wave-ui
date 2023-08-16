import{n as d}from"./index.e31dd236.js";var i=function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("main",[e("title-link",{staticClass:"mt4",attrs:{h1:""}},[s._v("shadows, borders & border radii")]),s._m(0),e("alert",{attrs:{tip:""}},[s._v(`The following offered classes are targeting the common use cases: there isn't a CSS class for
anything you want to accomplish. It's of course a trade-off to keep the library lean.`),e("br"),s._v(`
That being said, it's very easy to add your own classes based on the same principle in your CSS!
`)]),e("title-link",{attrs:{h2:""}},[s._v("Shadows")]),s._m(1),e("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`.w-flex.wrap
  .box.sh-6 .sh-6
  .box.sh-5 .sh-5
  .box.sh-4 .sh-4
  .box.sh-3 .sh-3
  .box.sh-2 .sh-2
  .box.sh-1 .sh-1
  .box.sh0 .sh0
  .box.sh1 .sh1
  .box.sh2 .sh2
  .box.sh3 .sh3
  .box.sh4 .sh4
  .box.sh5 .sh5
  .box.sh6 .sh6`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex wrap>
  <div class="box sh-6">.sh-6</div>
  <div class="box sh-5">.sh-5</div>
  <div class="box sh-4">.sh-4</div>
  <div class="box sh-3">.sh-3</div>
  <div class="box sh-2">.sh-2</div>
  <div class="box sh-1">.sh-1</div>
  <div class="box sh0">.sh0</div>
  <div class="box sh1">.sh1</div>
  <div class="box sh2">.sh2</div>
  <div class="box sh3">.sh3</div>
  <div class="box sh4">.sh4</div>
  <div class="box sh5">.sh5</div>
  <div class="box sh6">.sh6</div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n")]},proxy:!0}])},[e("div",{staticClass:"w-flex wrap"},s._l(13,function(t){return e("div",{key:t,staticClass:"box blue-light5--bg ma4 d-flex align-center justify-center",class:"sh"+(t-7)},[e("span",{staticClass:"code"},[s._v(".sh"+s._s(t-7))])])}),0)]),e("title-link",{attrs:{h2:""}},[s._v("Borders")]),s._m(2),e("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`.w-flex.wrap
  .box.bd0 .bd0
  .box.bd1 .bd1
  .box.bd2 .bd2
  .box.bd3 .bd3
  .box.bd4 .bd4
  .box.bd5 .bd5
  .box.bd6 .bd6`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex wrap>
  <div class="box bd0">.bd0</div>
  <div class="box bd1">.bd1</div>
  <div class="box bd2">.bd2</div>
  <div class="box bd3">.bd3</div>
  <div class="box bd4">.bd4</div>
  <div class="box bd5">.bd5</div>
  <div class="box bd6">.bd6</div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n")]},proxy:!0}])},[e("div",{staticClass:"w-flex wrap"},s._l(7,function(t){return e("div",{key:t,staticClass:"box blue-light5--bg ma4 d-flex align-center justify-center",class:"bd"+(t-1)},[e("span",{staticClass:"code"},[s._v(".bd"+s._s(t-1))])])}),0)]),e("title-link",{attrs:{h2:""}},[s._v("Border radii")]),s._m(3),e("alert",{attrs:{tip:""}},[s._v("Here is the difference between "),e("code",[s._v(".bdrsr")]),s._v(" and "),e("code",[s._v(".bdrsm")]),s._v(" (only visible on non-square elements):"),e("div",{staticClass:"w-flex"},[e("div",{staticClass:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[e("span",{staticClass:"code"},[s._v(".bdrsr")])]),e("div",{staticClass:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[e("span",{staticClass:"code"},[s._v(".bdrsm")])])])]),e("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`.w-flex.wrap
  .box.bdrs0 .bdrs0
  .box.bdrs1 .bdrs1
  .box.bdrs2 .bdrs2
  .box.bdrs3 .bdrs3
  .box.bdrs4 .bdrs4
  .box.bdrs5 .bdrs5
  .box.bdrs6 .bdrs6
  .box.bdrsr
    span.code .bdrsr
  .box.bdrsm
    span.code .bdrsm`)]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex wrap>
  <div class="box bdrs0">.bdrs0</div>
  <div class="box bdrs1">.bdrs1</div>
  <div class="box bdrs2">.bdrs2</div>
  <div class="box bdrs3">.bdrs3</div>
  <div class="box bdrs4">.bdrs4</div>
  <div class="box bdrs5">.bdrs5</div>
  <div class="box bdrs6">.bdrs6</div>
  <div class="box bdrsr">.bdrsr</div>
  <div class="box bdrsm">.bdrsm</div>
</w-flex>`)]},proxy:!0},{key:"css",fn:function(){return[s._v(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n")]},proxy:!0}])},[e("div",{staticClass:"w-flex wrap"},[s._l(7,function(t){return e("div",{key:t,staticClass:"box blue-light5--bg ma4 d-flex align-center justify-center",class:"bdrs"+(t-1)},[e("span",{staticClass:"code"},[s._v(".bdrs"+s._s(t-1))])])}),e("div",{staticClass:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[e("span",{staticClass:"code"},[s._v(".bdrsr")])]),e("div",{staticClass:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[e("span",{staticClass:"code"},[s._v(".bdrsm")])])],2)]),e("w-divider",{staticClass:"my12"}),e("title-link",{attrs:{h2:""}},[s._v("Examples of use on UI components")]),e("p",[s._v("Below are a few examples of components which accept the presented classes.")]),e("example",{scopedSlots:s._u([{key:"pug",fn:function(){return[s._v('w-flex(align-center justify-space-around wrap)\n  w-flex.no-grow(column align-center justify-center)\n    w-image.bd1.sh1.bdrsr.d-block(\n      :src="`${baseUrl}images/japanese-wave.png`"\n      :width="100"\n      :height="100")\n    span.mt3 w-image with `.bd1`, `.bdrsr` and `.sh1` classes.\n  w-switch.bdrs1.my4(:value="true") a w-switch with a `.bdrs1` class.')]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-flex align-center justify-space-around wrap>
  <w-flex column align-center justify-center class="no-grow">
    <w-image
      class="bd1 sh1 bdrsr d-block"
      :src="\`\${baseUrl}images/japanese-wave.png\`"
      :width="100"
      :height="100">
    </w-image>
    <span class="mt3">
      w-image with \`.bd1\`, \`.bdrsr\` and \`.sh1\` classes.
    </span>
  </w-flex>

  <w-switch :value="true" class="bdrs1 my4">
    a w-switch with a \`.bdrs1\` class.
  </w-switch>
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[s._v(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]},proxy:!0}])},[e("w-flex",{attrs:{"align-center":"","justify-space-around":"",wrap:""}},[e("w-flex",{staticClass:"no-grow",attrs:{column:"","align-center":"","justify-center":""}},[e("w-image",{staticClass:"bd1 sh1 bdrsr d-block",attrs:{src:s.baseUrl+"images/japanese-wave.png",width:100,height:100}}),e("span",{staticClass:"caption mt3"},[e("strong",{staticClass:"code"},[s._v("w-image")]),s._v(" with "),e("code",{staticClass:"mx1"},[s._v(".bd1")]),s._v(", "),e("code",{staticClass:"mx1"},[s._v(".bdrsr")]),s._v(" and "),e("code",{staticClass:"mx1"},[s._v(".sh1")]),s._v(" classes.")])],1),e("w-switch",{staticClass:"bdrs1 my4 caption",attrs:{value:!0}},[s._v("a "),e("strong",{staticClass:"code mx1"},[s._v("w-switch")]),s._v(" with a "),e("code",{staticClass:"mx1"},[s._v(".bdrs1")]),s._v(" class.")])],1)],1),e("example",{staticClass:"mt8",scopedSlots:s._u([{key:"pug",fn:function(){return[s._v(`w-card.bdrs4.bd0.sh2(bg-color="orange-light5")
  .caption a `),e("strong",{staticClass:"code mx1"},[s._v("w-card")]),s._v(" with "),e("code",{staticClass:"mx1"},[s._v(".bd0")]),s._v(", "),e("code",{staticClass:"mx1"},[s._v(".bdrs4")]),s._v(" and "),e("code",{staticClass:"mx1"},[s._v(".sh2")]),s._v(` classes.

w-accordion.mt8.bdrs2.bd1(:items="2")
  template(#item-title="{ index }")
    .title5 Accordion with `),e("code",{staticClass:"mx1"},[s._v(".bd1")]),s._v(" and "),e("code",{staticClass:"mx1"},[s._v(".bdrs2")]),s._v(` classes.
  template(#item-title.2="{ index }") Item `+s._s("{{ index }}")+`
  template(#item-content="{ index }") Content `+s._s("{{ index }}"))]},proxy:!0},{key:"html",fn:function(){return[s._v(`<w-card bg-color="orange-light5" class="bdrs4 bd0 sh2">
  <div class="caption">
    a w-card with \`.bd0\`, \`.bdrs4\` and \`.sh2\` classes.
  </div>
</w-card>

<w-accordion :items="2" class="mt8 bdrs2 bd1">
  <template #item-title="{ index }">
    <div class="title5">
      Accordion with \`.bd1\` and \`.bdrs2\` classes.
    </div>
  </template>

  <template #item-title.2="{ index }">
    Item `+s._s("{{ index }}")+`
  </template>
  <template #item-content="{ index }">
    Content `+s._s("{{ index }}")+`
  </template>
</w-accordion>
`)]},proxy:!0}])},[e("w-card",{staticClass:"bdrs4 bd0 sh2",attrs:{"bg-color":"orange-light5"}},[e("div",{staticClass:"caption"},[s._v("a "),e("strong",{staticClass:"code mx1"},[s._v("w-card")]),s._v(" with "),e("code",{staticClass:"mx1"},[s._v(".bd0")]),s._v(", "),e("code",{staticClass:"mx1"},[s._v(".bdrs4")]),s._v(" and "),e("code",{staticClass:"mx1"},[s._v(".sh2")]),s._v(" classes.")])]),e("w-accordion",{staticClass:"mt8 bdrs2 bd1",attrs:{items:2},scopedSlots:s._u([{key:"item-title",fn:function(t){return t.index,[e("div",{staticClass:"title5 mb0"},[s._v("Accordion with "),e("code",{staticClass:"mx1"},[s._v(".bd1")]),s._v(" and "),e("code",{staticClass:"mx1"},[s._v(".bdrs2")]),s._v(" classes.")])]}},{key:"item-title.2",fn:function(t){var a=t.index;return[s._v("Item "+s._s(a))]}},{key:"item-content",fn:function(t){var a=t.index;return[s._v("Content "+s._s(a))]}}])})],1),e("alert",{attrs:{info:""}},[s._v(`Some of the UI components that have wrappers won't work nicely with the border and shadow classes.
In this case you need to style them from your CSS.`)])],1)},o=[function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("p",[s._v("Wave UI offers a few CSS helper classes to control the drop shadow, borders and border radii."),e("br"),s._v(`
You can use these classes on any component and any DOM element, even if the element is not part of
Wave UI.`),e("br")])},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("p",[s._v("Element shadows range from "),e("code",[s._v("-6")]),s._v(" to "),e("code",[s._v("6")]),s._v(`. Negative values will produce an inset shadow,
whereas positive values will produce an outer drop shadow. `),e("code",[s._v(".sh0")]),s._v(" will remove any shadow.")])},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("p",[s._v("Element borders range from "),e("code",[s._v("0")]),s._v(" to "),e("code",[s._v("6")]),s._v(`, corresponding to the same number of pixels (for
the `),e("span",{staticClass:"code"},[s._v("border-width")]),s._v(") on all the sides. "),e("code",[s._v(".bd0")]),s._v(" will remove any border.")])},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("p",[s._v("The border radii range from "),e("code",[s._v("0")]),s._v(" to "),e("code",[s._v("6")]),s._v(", and are incremented by the "),e("code",[s._v("$base-increment")]),s._v(`
(SCSS variable) which is equal to 4px by default.`),e("br"),s._v(" "),e("code",[s._v(".bdrs0")]),s._v(" will remove any border radius, "),e("code",[s._v(".bdrsr")]),s._v(" will produce a "),e("strong",[s._v("round")]),s._v(` border
radius, `),e("code",[s._v(".bdrsm")]),s._v(" will produce a "),e("strong",[s._v("max")]),s._v(" border radius ("),e("span",{staticClass:"code"},[s._v("100%")]),s._v(").")])}];const c={data:()=>({baseUrl:"/wave-ui/"})},r={};var l=d(c,i,o,!1,b,null,null,null);function b(s){for(let n in r)this[n]=r[n]}var u=function(){return l.exports}();export{u as default};
