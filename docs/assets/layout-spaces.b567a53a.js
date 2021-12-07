import{n as s}from"./index.6aae8cd4.js";import"./vendor.4f8da9ec.js";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("title-link",{staticClass:"mt4",attrs:{h1:""}},[e._v("Spaces")]),a("title-link",{attrs:{h2:""}},[e._v("Content spacing")]),e._m(0),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.orange-light4--bg.pa12
  .yellow-light5--bg.pa3.
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x
    base-font-size pixels.`),a("br"),e._v("\n    The default base font size is 14px but it's easy to override it in your SCSS, as well as the\n    increment for `pax` and `max` classes.\n\n  .green-light4--bg.mt8.pa3.\n    This green container has a `mt8` class which results in a top margin of: 8 x 4 x\n    base-font-size pixels.")]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="orange-light4--bg pa12">
  <div class="yellow-light5--bg pa3">
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x base-font-size pixels.
    The default base font size is 14px but it's easy to override it in your SCSS, as well as the
    increment for \`pax\` and \`max\` classes.
  </div>

  <div class="green-light4--bg mt8 pa3">
    This green container has an \`mt8\` class which results in a top margin of: 8 x 4 x base-font-size pixels.
  </div>
</div>
`)]},proxy:!0}])},[a("div",{staticClass:"orange-light4--bg pa12"},[a("div",{staticClass:"yellow-light5--bg pa3"},[e._v("The orange container has a "),a("span",{staticClass:"code"},[e._v("pa12")]),e._v(` class which results in a padding of: 12 x 4 x
base-font-size pixels.`),a("br"),e._v(`
The default base font size is 14px but it's easy to override it in your SCSS, as well as the
increment for `),a("span",{staticClass:"code"},[e._v("pax")]),e._v(" and "),a("span",{staticClass:"code"},[e._v("max")]),e._v(` classes. Read on in the
`),a("router-link",{attrs:{to:"customization"}},[e._v("customization")]),e._v(" page."),a("br")],1),a("div",{staticClass:"green-light4--bg mt8 pa3"},[e._v("This green container has a "),a("span",{staticClass:"code"},[e._v("mt8")]),e._v(` class which results in a top margin of: 8 x 4 x
base-font-size pixels.`)])])]),a("title-link",{attrs:{h3:""}},[e._v("Negative margin")]),e._m(1),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.orange-light4--bg.pa8
.green-light4--bg.mt-8.mx8.pa3.
  This green container has a \`mt-8\` class which results in a negative top margin of: -8 x 4 x
  base-font-size pixels.`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mt-8 mx8 pa3">
    This green container has a \`mt-8\` class which results in a negative top margin of: 8 x 4 x
    base-font-size pixels.
  </div>
</div>
`)]},proxy:!0}])},[a("div",{staticClass:"orange-light4--bg pa8"}),a("div",{staticClass:"green-light4--bg mt-8 mx8 pa3"},[e._v("This green container has a "),a("span",{staticClass:"code"},[e._v("mt-8")]),e._v(` class which results in a negative top margin of: -8 x 4 x
base-font-size pixels.`)])]),a("title-link",{attrs:{h3:""}},[e._v("Margin auto")]),e._m(2),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.orange-light4--bg.pa8\n  .green-light4--bg.mxa.pa3(style="max-width: 240px").\n    This green container has a `mxa` class which results in a margin auto on the left & right.')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mxa pa3" style="max-width: 240px">
    This green container has a \`mxa\` class which results in a margin auto on the left & right.
  </div>
</div>`)]},proxy:!0}])},[a("div",{staticClass:"orange-light4--bg pa8"},[a("div",{staticClass:"green-light4--bg mxa pa3",staticStyle:{"max-width":"240px"}},[e._v("This green container has a "),a("span",{staticClass:"code"},[e._v("mxa")]),e._v(" class which results in a margin auto on the left & right.")])])])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Margins and paddings are incrementable from 0 to 12 using this syntax: "),a("code",[e._v("ma[number]")]),e._v(`,
`),a("code",[e._v("pa[number]")]),e._v(" where number is a number in this interval "),a("span",{staticClass:"code"},[e._v("[0, 12]")]),e._v(` for paddings
and `),a("span",{staticClass:"code"},[e._v("[-12, 12]")]),e._v(" for margins."),a("br"),e._v(`
You can also set a space on a single side with `),a("code",[e._v("l")]),e._v(", "),a("code",[e._v("r")]),e._v(", "),a("code",[e._v("t")]),e._v(`,
`),a("code",[e._v("b")]),e._v(" for left, right, top, bottom like so: "),a("code",[e._v("m[side][number]")]),e._v(`,
`),a("code",[e._v("p[side][number]")]),e._v("."),a("br"),a("br"),e._v(" "),a("code",[e._v("x")]),e._v(" and "),a("code",[e._v("y")]),e._v(` will set both left and right or top and bottom together:
`),a("code",[e._v("mx[number]")]),e._v(", "),a("code",[e._v("px[number]")]),e._v(". And "),a("code",[e._v("a")]),e._v(` is for all the sides.
`)])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(`Sometimes you may need negative margins, Wave UI also provides 12 negative increments for this
purpose.`),a("br"),e._v(`
The syntax for it is `),a("code",[e._v("m[side]-[number]")]),e._v(` with a minus for negative - more like the famous
Emmet plugin that came along with Sublime Text!`),a("br"),e._v(`
In this example, the green container is moved up whereas its top should touch the bottom of the
orange container.`)])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Last but not least, margin: auto is also possible with the "),a("code",[e._v("a")]),e._v(" modifier."),a("br"),e._v(`
The syntax for it is `),a("code",[e._v("m[side]a")])])}];const o={},n={};var l=s(o,i,r,!1,c,null,null,null);function c(e){for(let t in n)this[t]=n[t]}var g=function(){return l.exports}();export{g as default};
