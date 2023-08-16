import{n as s}from"./index.e31dd236.js";var i=function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("main",[e("title-link",{staticClass:"mt4",attrs:{h1:""}},[n._v("Simplified grid system (CSS grids)")]),e("alert",{attrs:{info:""}},[n._v(`The 12-cell based flexbox grid system works well and for most cases, but it has
`),e("router-link",{attrs:{to:"/layout--flex#caveat"}},[n._v("a caveat")]),n._v(" when used with both "),e("code",[n._v("gap")]),n._v(` and flex
`),e("code",[n._v("wrap")]),n._v(`.
`),e("br"),e("br"),n._v(`
The `),e("strong",{staticClass:"code"},[n._v("w-grid")]),n._v(` component offers a solution to this caveat, but has less built-in
features and options than the `),e("strong",{staticClass:"code"},[n._v("w-flex")]),n._v(` component (too much CSS would need to be
generated to cover all the possibilities that the CSS grid system offer).`),e("br"),e("br"),n._v(`

However, if `),e("strong",{staticClass:"code"},[n._v("w-flex")]),n._v(` does not provide a solution for your case, or if you simply prefer
to work with CSS grids, you can and should add more CSS rules on top of Wave UI's basic grid setup
to obtain the perfect custom layout you need.
`)],1),e("title-link",{attrs:{h2:""}},[n._v("How to use")]),n._m(0),e("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-grid.wrapper(columns="6")
  .box(v-for="i in 12" :key="i")`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-grid columns="6" class="wrapper">
  <div v-for="i in 12" :key="i" class="box"></div>
</w-grid>`)]},proxy:!0},{key:"css",fn:function(){return[n._v(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`)]},proxy:!0}])},[e("w-grid",{staticClass:"wrapper",attrs:{columns:"6"}},n._l(12,function(t){return e("div",{key:t,staticClass:"box"})}),0)],1),e("title-link",{attrs:{h2:""}},[n._v("Gap")]),e("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-grid.wrapper(columns="6" gap="3")
  .box(v-for="i in 12" :key="i")`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-grid columns="6" gap="3" class="wrapper">
  <div v-for="i in 12" :key="i" class="box"></div>
</w-grid>`)]},proxy:!0},{key:"css",fn:function(){return[n._v(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`)]},proxy:!0}])},[e("w-grid",{staticClass:"wrapper",attrs:{columns:"6",gap:"3"}},n._l(12,function(t){return e("div",{key:t,staticClass:"box"})}),0)],1),e("title-link",{attrs:{h2:""}},[n._v("Different columns number per breakpoint")]),n._m(1),e("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-grid.wrapper(
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3")
  .box(v-for="i in 12" :key="i")`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-grid
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3"
  class="wrapper">
  <div v-for="i in 12" :key="i" class="box"></div>
</w-grid>`)]},proxy:!0},{key:"css",fn:function(){return[n._v(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}`)]},proxy:!0}])},[e("w-grid",{staticClass:"wrapper",attrs:{columns:{xs:1,sm:2,md:3,lg:4,xl:6},gap:"3"}},n._l(12,function(t){return e("div",{key:t,staticClass:"box"})}),0)],1)],1)},a=[function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("p",[n._v("The "),e("strong",{staticClass:"code"},[n._v("w-grid")]),n._v(` component is very straightforward, you need to define a number of column
from 1 to 12.`)])},function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("p",[n._v("The "),e("code",[n._v("columns")]),n._v(` option also accepts an object in which you can define a number of columns
per breakpoint.`)])}];const c={},o={};var l=s(c,i,a,!1,u,null,null,null);function u(n){for(let r in o)this[r]=o[r]}var p=function(){return l.exports}();export{p as default};
