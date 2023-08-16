import{n as a}from"./index.e31dd236.js";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("title-link",{staticClass:"mt4",attrs:{h1:""}},[e._v("Breakpoints")]),t("title-link",{attrs:{h2:""}},[e._v("What is this for?")]),e._m(0),t("ul",[t("li",[e._v("Access the current breakpoint in JavaScript")]),t("li",[e._v("Use responsive grids with breakpoint-specific classes. Read more in"),t("router-link",{staticClass:"ml1",attrs:{to:"/layout--grid-system"}},[e._v("Layout > Grid system")]),e._v(".")],1),t("li",[e._v("Use breakpoint-specific layout classes like "),t("code",[e._v("sm-hide")]),e._v(" or "),t("code",[e._v("lgu-text-center")]),e._v(" and many other."),t("br"),e._v(`
All the layout classes presented in: `),t("router-link",{staticClass:"ml1",attrs:{to:"/layout--flex"}},[e._v("Layout > Flex")])],1)]),t("title-link",{attrs:{h2:""}},[e._v("Default breakpoints")]),t("p",{staticClass:"mt6"},[e._v("By default, 5 breakpoints are set:")]),e._m(1),t("title-link",{attrs:{h2:"",slug:"the-wave-ui-breakpoint-object"}},[e._v("The "),t("code",[e._v("$waveui.breakpoint")]),e._v(" object")]),e._m(2),e._m(3),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-card.blue-light5--bg
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
`)]},proxy:!0}])},[t("w-card",{staticClass:"blue-light5--bg"},[t("div",{staticClass:"title2 mt0"},[e._v("Current breakpoint: "),t("code",[e._v(e._s(e.$waveui.breakpoint.name))])]),t("em",{staticClass:"grey mt1"},[e._v("Resizing your browser will update the current breakpoint.")])])],1),t("title-link",{attrs:{h2:""}},[e._v("breakpoint-specific layout classes")]),t("p",[e._v("All the following CSS classes can be used complementarily on the same DOM node for different breakpoints.")]),t("ssh-pre",{attrs:{language:"css"}},[e._v(`.show {display: block;}
.hide {display: none;}

.d-flex {display: flex;}
.d-iflex {display: inline-flex;}
.d-block {display: block;}
.d-iblock {display: inline-block;}

.text-left {text-align: left;}
.text-center {text-align: center;}
.text-right {text-align: right;}

.row {flex-direction: row;}
.column {flex-direction: column;}
.grow {flex-grow: 1;flex-basis: auto;}
.no-grow {flex-grow: 0;}
.shrink {flex-shrink: 1;margin-left: auto;margin-right: auto;}
.no-shrink {flex-shrink: 0;}
.fill-width {width: 100%;}
.fill-height {height: 100%;}
.basis-zero {flex-basis: 0;}

.align-start {align-items: flex-start;}
.align-center {align-items: center;}
.align-end {align-items: flex-end;}
.align-self-start {align-self: flex-start;}
.align-self-center {align-self: center;}
.align-self-end {align-self: flex-end;}
.align-self-stretch {align-self: stretch;}
.justify-start {justify-content: flex-start;}
.justify-center {justify-content: center;}
.justify-end {justify-content: flex-end;}
.justify-space-between {justify-content: space-between;}
.justify-space-around {justify-content: space-around;}
.justify-space-evenly {justify-content: space-evenly;}
`)]),e._m(4),e._m(5),t("alert",{attrs:{info:""}},[e._v("Note that "),t("code",[e._v(".xsd-[class]")]),e._v(" and "),t("code",[e._v(".xlu-[class]")]),e._v(" don't exist since they are the same as "),t("code",[e._v(".xs-[class]")]),e._v(" and "),t("code",[e._v(".xl-[class]")]),e._v(".")]),e._m(6),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.text-left.smd-text-center Some text on the left.
.text-center.smd-hide Some text in the center.
.text-right.smd-text-center Some text on the right.`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="text-left smd-text-center">Some text on the left.</div>
<div class="text-center smd-hide">Some text in the center.</div>
<div class="text-right smd-text-center">Some text on the right.</div>`)]},proxy:!0}])},[t("div",{staticClass:"text-left smd-text-center"},[e._v("Some text on the left.")]),t("div",{staticClass:"text-center smd-hide"},[e._v("Some text in the center.")]),t("div",{staticClass:"text-right smd-text-center"},[e._v("Some text on the right.")])]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.w-flex.justify-space-between.smd-column
  span Some text on the left.
  span Some text in the center.
  span Some text on the right.`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="w-flex justify-space-between smd-column">
  <span>Some text on the left.</span>
  <span>Some text in the center.</span>
  <span>Some text on the right.</span>
</div>
`)]},proxy:!0}])},[t("div",{staticClass:"w-flex justify-space-between smd-column"},[t("span",[e._v("Some text on the left.")]),t("span",[e._v("Some text in the center.")]),t("span",[e._v("Some text on the right.")])])]),t("alert",{attrs:{tip:""}},[e._v(`If you'd rather not have these CSS layout classes, you can disable them via the
`),t("code",[e._v("breakpointLayoutClasses")]),e._v(" option in the global configuration."),t("ssh-pre",{staticClass:"mb0",attrs:{language:"js"}},[e._v(`const waveui = new WaveUI({
  css: {
    breakpointLayoutClasses: false
  }
})
`)])],1),t("title-link",{attrs:{h2:""}},[e._v("Setting custom breakpoints")]),t("p",{staticClass:"mt4"},[e._v("You can override the default breakpoints values with:")]),t("ssh-pre",{attrs:{language:"js"}},[e._v(`const waveui = new WaveUI({
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700
    // Xl doesn't need to be overridden:
    // it always starts from lg & goes to infinity.
  }
})`)])],1)},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("If you are not familiar with breakpoints, you should first read about it."),t("br"),e._v(`
The breakpoints are usually useful when you want to change the layout for a particular viewport width.`),t("br"),e._v(`
In Wave UI, you can use them in different ways:`)])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",{staticClass:"mb1"},[t("code",{staticClass:"mr2"},[e._v("xs")]),t("span",[e._v("from 0 to 600px")])]),t("li",{staticClass:"mb1"},[t("code",{staticClass:"mr2"},[e._v("sm")]),t("span",[e._v("from 601px to 900px")])]),t("li",{staticClass:"mb1"},[t("code",{staticClass:"mr2"},[e._v("md")]),t("span",[e._v("from 901px to 1200px")])]),t("li",{staticClass:"mb1"},[t("code",{staticClass:"mr2"},[e._v("lg")]),t("span",[e._v("from 1201px to 1700px")])]),t("li",{staticClass:"mb1"},[t("code",{staticClass:"mr2"},[e._v("xl")]),t("span",[e._v("from 1701px and more")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"mt4"},[e._v(`You can access the current breakpoint from anywhere using
`),t("code",[e._v("this.$waveui.breakpoint.name")]),e._v(`, or one of these quick booleans from
the same `),t("code",[e._v("this.$waveui.breakpoint")]),e._v(" object:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",{staticClass:"mb1"},[t("code",[e._v("xs")])]),t("li",{staticClass:"mb1"},[t("code",[e._v("sm")])]),t("li",{staticClass:"mb1"},[t("code",[e._v("md")])]),t("li",{staticClass:"mb1"},[t("code",[e._v("lg")])]),t("li",{staticClass:"mb1"},[t("code",[e._v("xl")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"mt6"},[e._v("To use them on a particular breakpoint, the syntax is: "),t("code",[e._v(".[breakpoint][extend]-[class]")]),e._v(", with:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[t("strong",{staticClass:"code"},[e._v("[breakpoint]")]),e._v(" one of: "),t("code",[e._v("xs")]),e._v(", "),t("code",[e._v("sm")]),e._v(", "),t("code",[e._v("md")]),e._v(", "),t("code",[e._v("lg")]),e._v(", "),t("code",[e._v("xl")]),e._v(".")]),t("li",[t("strong",{staticClass:"code"},[e._v("[extend]")]),e._v(" one of "),t("code",[e._v("u")]),e._v(" (and up), "),t("code",[e._v("d")]),e._v(` (and down) and
`),t("strong",[e._v("no character")]),e._v(" to target only this breakpoint.")]),t("li",[t("strong",{staticClass:"code"},[e._v("[class]")]),e._v(" one of the above CSS class name.")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"mt6"},[e._v("In these two examples, resize your browser to less than 900px (default "),t("code",[e._v("md")]),e._v(`) to see see the
layout changed.`)])}];const o={},s={};var l=a(o,i,r,!1,c,null,null,null);function c(e){for(let n in s)this[n]=s[n]}var _=function(){return l.exports}();export{_ as default};
