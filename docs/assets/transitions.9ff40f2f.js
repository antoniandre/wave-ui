import{n as o}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("main",[t("title-link",{staticClass:"mt4",attrs:{h1:""}},[n._v("Transitions")]),t("p",[n._v("Here is a list of all the available transition components.")]),n._m(0),t("alert",{attrs:{info:""}},[n._v(`The transitions (based on
`),t("a",{attrs:{href:"https://vuejs.org/v2/guide/transitions.html",target:"_blank"}},[n._v("Vue native transitions")]),n._v(`)
work with element toggling using `),t("code",[n._v("v-if")]),n._v(" or "),t("code",[n._v("v-show")]),n._v("."),t("br"),n._v("Simple example (with "),t("code",[n._v("show")]),n._v(" a boolean variable):"),t("div",{staticClass:"w-flex"},[t("ssh-pre",{directives:[{name:"show",rawName:"v-show",value:n.$store.state.usePug,expression:"$store.state.usePug"}],staticClass:"mb0",attrs:{language:"pug",label:"Pug"}},[n._v(`w-transition-fade
  span(v-if="show") Hello!
</w-transition-fade>`)]),t("ssh-pre",{directives:[{name:"show",rawName:"v-show",value:!n.$store.state.usePug,expression:"!$store.state.usePug"}],staticClass:"mb0",attrs:{language:"html-vue"}},[n._v(`<w-transition-fade>
  <span v-if="show">Hello!</span>
</w-transition-fade>
`)])],1)]),t("title-link",{attrs:{h2:""}},[n._v("Transitions showcase")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleFade = !toggleFade"
    color="primary"
    outline) Fade `+n._s("{{ toggleFade ? 'out' : 'in' }}")+`
  w-transition-fade
    .transition-box(v-if="toggleFade") Fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScale = !toggleScale"
    color="primary"
    outline) Scale `+n._s("{{ toggleScale ? 'out' : 'in' }}")+`
  w-transition-scale
    .transition-box(v-if="toggleScale") Scaling transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScaleFade = !toggleScaleFade"
    color="primary"
    outline) Scale fade `+n._s("{{ toggleScaleFade ? 'out' : 'in' }}")+`
  w-transition-scale-fade
    .transition-box(v-if="toggleScaleFade") Scaling & fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleBounce = !toggleBounce"
    color="primary"
    outline) Bounce `+n._s("{{ toggleBounce ? 'out' : 'in' }}")+`
  w-transition-bounce
    .transition-box(v-if="toggleBounce") Bouncing transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleTwist = !toggleTwist"
    color="primary"
    outline) Twist `+n._s("{{ toggleTwist ? 'out' : 'in' }}")+`
  w-transition-twist
    .transition-box(v-if="toggleTwist") Twisting transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandX = !toggleExpandX"
    color="primary"
    outline) `+n._s("{{ toggleExpandX ? 'Collapse' : 'Expand' }}")+` X
  w-transition-expand(x)
    .transition-box.text-nowrap(v-if="toggleExpandX") X-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandY = !toggleExpandY"
    color="primary"
    outline) `+n._s("{{ toggleExpandY ? 'Collapse' : 'Expand' }}")+` Y
  w-transition-expand(y)
    .transition-box(v-if="toggleExpandY") Y-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline) `+n._s("{{ toggleExpandXY ? 'Collapse' : 'Expand' }}")+` X & Y
  w-transition-expand
    .transition-box.text-nowrap(v-if="toggleExpandXY") X & Y expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeDown = !toggleSlideFadeDown"
    color="primary"
    outline) Slide fade `+n._s("{{ toggleSlideFadeDown ? 'up' : 'down' }}")+`
  w-transition-slide-fade
    .transition-box.text-nowrap(v-if="toggleSlideFadeDown") Slide fade down transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeRight = !toggleSlideFadeRight"
    color="primary"
    outline) Slide fade `+n._s("{{ toggleSlideFadeRight ? 'left' : 'right' }}")+`
  w-transition-slide-fade(right)
    .transition-box.text-nowrap(v-if="toggleSlideFadeRight") Slide fade right transition
`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleFade = !toggleFade"
    color="primary"
    outline>
    Fade `+n._s("{{ toggleFade ? 'out' : 'in' }}")+`
  </w-button>
  <w-transition-fade>
    <div class="transition-box" v-if="toggleFade">Fading transition</div>
  </w-transition-fade>
</w-flex>

<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleScale = !toggleScale"
    color="primary"
    outline>
    Scale `+n._s("{{ toggleScale ? 'out' : 'in' }}")+`
  </w-button>
  <w-transition-scale>
    <div class="transition-box" v-if="toggleScale">Scaling transition</div>
  </w-transition-scale>
</w-flex>

<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleScaleFade = !toggleScaleFade"
    color="primary"
    outline>
    Scale fade `+n._s("{{ toggleScaleFade ? 'out' : 'in' }}")+`
  </w-button>
  <w-transition-scale-fade>
    <div class="transition-box" v-if="toggleScaleFade">Scaling & fading transition</div>
  </w-transition-scale-fade>
</w-flex>

<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleBounce = !toggleBounce"
    color="primary"
    outline>
    Bounce `+n._s("{{ toggleBounce ? 'out' : 'in' }}")+`
  </w-button>
  <w-transition-bounce>
    <div class="transition-box" v-if="toggleBounce">Bouncing transition</div>
  </w-transition-bounce>
</w-flex>

<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleTwist = !toggleTwist"
    color="primary"
    outline>
    Twist `+n._s("{{ toggleTwist ? 'out' : 'in' }}")+`
  </w-button>
  <w-transition-twist>
    <div class="transition-box" v-if="toggleTwist">Twisting transition</div>
  </w-transition-twist>
</w-flex>

<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandX = !toggleExpandX"
    color="primary"
    outline>
    `+n._s("{{ toggleExpandX ? 'Collapse' : 'Expand' }}")+` X
  </w-button>
  <w-transition-expand x>
    <div class="transition-box text-nowrap" v-if="toggleExpandX">X-expanding transition</div>
  </w-transition-expand>
</w-flex>

<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandY = !toggleExpandY"
    color="primary"
    outline>
    `+n._s("{{ toggleExpandY ? 'Collapse' : 'Expand' }}")+` Y
  </w-button>
  <w-transition-expand y>
    <div class="transition-box" v-if="toggleExpandY">Y-expanding transition</div>
  </w-transition-expand>
</w-flex>

<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline>
    `+n._s("{{ toggleExpandXY ? 'Collapse' : 'Expand' }}")+` X & Y
  </w-button>
  <w-transition-expand>
    <div class="transition-box text-nowrap" v-if="toggleExpandXY">X & Y expanding transition</div>
  </w-transition-expand>
</w-flex>

<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleSlideFadeDown = !toggleSlideFadeDown"
    color="primary"
    outline>
    Slide fade `+n._s("{{ toggleSlideFadeDown ? 'up' : 'down' }}")+`
  </w-button>
  <w-transition-slide-fade>
    <div class="transition-box text-nowrap" v-if="toggleSlideFadeDown">Slide fade down transition</div>
  </w-transition-slide-fade>
</w-flex>

<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleSlideFadeRight = !toggleSlideFadeRight"
    color="primary"
    outline>
    Slide fade `+n._s("{{ toggleSlideFadeRight ? 'left' : 'right' }}")+`
  </w-button>
  <w-transition-slide-fade right>
    <div class="transition-box text-nowrap" v-if="toggleSlideFadeRight">Slide fade down transition</div>
  </w-transition-slide-fade>
</w-flex>
`)]},proxy:!0},{key:"js",fn:function(){return[n._v(`data: () => ({
  toggleFade: false,
  toggleScale: false,
  toggleScaleFade: false,
  toggleBounce: false,
  toggleTwist: false,
  toggleExpandX: false,
  toggleExpandY: false,
  toggleExpandXY: false,
  toggleSlideFadeDown: false,
  toggleSlideFadeRight: false
})
`)]},proxy:!0},{key:"css",fn:function(){return[n._v(`.transition-toggle {
  margin: 12px 24px 12px 0;
  width: 7.7em;
}

.transition-box {
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 1em;
  width: 14em;
  text-align: center;
}
`)]},proxy:!0}])},[t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleFade=!n.toggleFade}}},[n._v("Fade "+n._s(n.toggleFade?"out":"in"))]),t("w-transition-fade",[n.toggleFade?t("div",{staticClass:"transition-box"},[n._v("Fading transition")]):n._e()])],1),t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleScale=!n.toggleScale}}},[n._v("Scale "+n._s(n.toggleScale?"out":"in"))]),t("w-transition-scale",[n.toggleScale?t("div",{staticClass:"transition-box"},[n._v("Scaling transition")]):n._e()])],1),t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleScaleFade=!n.toggleScaleFade}}},[n._v("Scale fade "+n._s(n.toggleScaleFade?"out":"in"))]),t("w-transition-scale-fade",[n.toggleScaleFade?t("div",{staticClass:"transition-box"},[n._v("Scaling & fading transition")]):n._e()])],1),t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleBounce=!n.toggleBounce}}},[n._v("Bounce "+n._s(n.toggleBounce?"out":"in"))]),t("w-transition-bounce",[n.toggleBounce?t("div",{staticClass:"transition-box"},[n._v("Bouncing transition")]):n._e()])],1),t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleTwist=!n.toggleTwist}}},[n._v("Twist "+n._s(n.toggleTwist?"out":"in"))]),t("w-transition-twist",[n.toggleTwist?t("div",{staticClass:"transition-box"},[n._v("Twisting transition")]):n._e()])],1),t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleExpandX=!n.toggleExpandX}}},[n._v(n._s(n.toggleExpandX?"Collapse":"Expand")+" X")]),t("w-transition-expand",{attrs:{x:""}},[n.toggleExpandX?t("div",{staticClass:"transition-box text-nowrap"},[n._v("X-expanding transition")]):n._e()])],1),t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleExpandY=!n.toggleExpandY}}},[n._v(n._s(n.toggleExpandY?"Collapse":"Expand")+" Y")]),t("w-transition-expand",{attrs:{y:""}},[n.toggleExpandY?t("div",{staticClass:"transition-box"},[n._v("Y-expanding transition")]):n._e()])],1),t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleExpandXY=!n.toggleExpandXY}}},[n._v(n._s(n.toggleExpandXY?"Collapse":"Expand")+" X & Y")]),t("w-transition-expand",[n.toggleExpandXY?t("div",{staticClass:"transition-box text-nowrap"},[n._v("X & Y expanding transition")]):n._e()])],1),t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleSlideFadeDown=!n.toggleSlideFadeDown}}},[n._v("Slide fade "+n._s(n.toggleSlideFadeDown?"up":"down"))]),t("w-transition-slide-fade",[n.toggleSlideFadeDown?t("div",{staticClass:"transition-box text-nowrap"},[n._v("Slide fade down transition")]):n._e()])],1),t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){n.toggleSlideFadeRight=!n.toggleSlideFadeRight}}},[n._v("Slide fade "+n._s(n.toggleSlideFadeRight?"left":"right"))]),t("w-transition-slide-fade",{attrs:{right:""}},[n.toggleSlideFadeRight?t("div",{staticClass:"transition-box text-nowrap"},[n._v("Slide fade right transition")]):n._e()])],1)],1),n._m(1),t("title-link",{attrs:{h2:"",slug:"the-expand-transition"}},[n._v("The "),t("span",{staticClass:"code"},[n._v("expand")]),n._v(" transition")]),t("p",[n._v(`The great thing with Wave UI's expand transition is that it also animates any margin or padding on the
transitioning element! Look at this one:`)]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY2 = !toggleExpandXY2"
    color="primary"
    outline
    width="7.3em") `+n._s(n.toggleExpandXY2?"Collapse":"Expand")+` X & Y
  w-transition-expand(:duration="2000")
    .transition-box.pa6.ma10.yellow-light5--bg(
      v-if="toggleExpandXY2"
      style="width: auto")
      .amber-light4--bg.pa2(style="overflow: hidden;white-space: nowrap;width: 200px")
        | X & Y expanding transition`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline
    width="7.3em">
    `+n._s(n.toggleExpandXY?"Collapse":"Expand")+` X & Y
  </w-button>
  <w-transition-expand :duration="2000">
    <div
      v-if="toggleExpandXY"
      class="transition-box pa6 ma10 yellow-light5--bg"
      style="width: auto">
      <div class="amber-light4--bg pa2">
        X & Y expanding transition
      </div>
    </div>
  </w-transition-expand>
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[n._v(`data: () => ({
  toggleExpandXY: false
})`)]},proxy:!0},{key:"css",fn:function(){return[n._v(`.transition-toggle {margin: 12px 24px 12px 0;}

.transition-box {
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 1em;
  width: 14em;
  text-align: center;
}

.transition-box div {
  overflow: hidden;
  white-space: nowrap;
  width: 200px;
}
`)]},proxy:!0}])},[t("w-flex",{attrs:{"align-center":""}},[t("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:"",width:"7.3em"},on:{click:function(i){n.toggleExpandXY2=!n.toggleExpandXY2}}},[n._v(n._s(n.toggleExpandXY2?"Collapse":"Expand")+" X & Y")]),t("w-transition-expand",{attrs:{duration:2e3}},[n.toggleExpandXY2?t("div",{staticClass:"transition-box pa6 ma10 yellow-light5--bg",staticStyle:{width:"auto"}},[t("div",{staticClass:"amber-light4--bg pa2",staticStyle:{overflow:"hidden","white-space":"nowrap",width:"200px"}},[n._v("X & Y expanding transition")])]):n._e()])],1)],1),t("alert",{attrs:{tip:""}},[n._v(`When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while
the animation, like in the above example.
To do so, you can add the `),t("span",{staticClass:"code"},[n._v("text-nowrap")]),n._v(` class on the element being transitioned.
`)]),t("title-link",{attrs:{h2:"",slug:"the-slide-transition"}},[n._v("The "),t("span",{staticClass:"code"},[n._v("slide")]),n._v(" transition")]),n._m(2),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`div(style="height: 90px;overflow: hidden;padding: 4px")
  w-button.mb2(@click="showCard = !showCard").
    `+n._s("{{ showCard ? 'Hide' : 'Show' }}")+` Card
  w-transition-slide(left)
    w-card.primary-light3--bg.white(v-if="showCard")
      .title3.mb0 A sliding card.`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<div style="height: 90px;overflow: hidden;padding: 4px">
  <w-button class="mb2" @click="showCard = !showCard">
    `+n._s("{{ showCard ? 'Hide' : 'Show' }}")+` Card
  </w-button>
  <w-transition-slide left>
    <w-card v-if="showCard" class="primary-light3--bg white">
      <div class="title3">A sliding card.</div>
    </w-card>
  </w-transition-slide>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[n._v(`data: () => ({
  showCard: false
})
`)]},proxy:!0}])},[t("div",{staticStyle:{height:"90px",overflow:"hidden",padding:"4px"}},[t("w-button",{staticClass:"mb2",on:{click:function(i){n.showCard=!n.showCard}}},[n._v(n._s(n.showCard?"Hide":"Show")+" Card")]),t("w-transition-slide",{attrs:{left:""}},[n.showCard?t("w-card",{staticClass:"primary-light3--bg white"},[t("div",{staticClass:"title3 mb0"},[n._v("A sliding card.")])]):n._e()],1)],1)]),t("title-link",{attrs:{h2:""}},[n._v("Transition duration")]),n._m(3),t("p",[n._v(`The expand transition being fully Javascript driven, it accepts a duration parameter in milliseconds.
So you don't need to override the duration from a CSS rule.`)])],1)},s=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ul",[t("li",[t("code",[n._v("w-transition-fade")])]),t("li",{staticClass:"mt1"},[t("code",[n._v("w-transition-scale")])]),t("li",{staticClass:"mt1"},[t("code",[n._v("w-transition-scale-fade")])]),t("li",{staticClass:"mt1"},[t("code",[n._v("w-transition-bounce")])]),t("li",{staticClass:"mt1"},[t("code",[n._v("w-transition-twist")])]),t("li",{staticClass:"mt1"},[t("code",[n._v("w-transition-expand")])]),t("li",{staticClass:"mt1"},[t("code",[n._v("w-transition-slide")])]),t("li",{staticClass:"mt1"},[t("code",[n._v("w-transition-slide-fade")])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[t("strong",{staticClass:"mr1"},[n._v("Note:")]),n._v("the "),t("span",{staticClass:"code"},[n._v("slide-fade")]),n._v(" transition take the direction in parameter, e.g. "),t("span",{staticClass:"code"},[n._v("left")]),n._v(`,
`),t("span",{staticClass:"code"},[n._v("right")]),n._v(", "),t("span",{staticClass:"code"},[n._v("up")]),n._v(", "),t("span",{staticClass:"code"},[n._v("down")]),n._v(" and defaults to "),t("span",{staticClass:"code"},[n._v("down")]),n._v(".")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v(`The slide transition is only designed for elements sliding from outside the view into the view or
vice-versa, they will slide from 0% visibility to 100% visibility.`),t("br"),n._v(`
It works well for full screen elements or elements that are in a hidden-overflow container like
in this example.`)])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v(`You can easily override the default transition/animation duration by setting an explicit
CSS transition/animation duration on the element being transitioned:
`),t("span",{staticClass:"code"},[n._v('style="animation-duration: 3s"')]),n._v(".")])}];const r={data:()=>({toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1})},a={};var g=o(r,l,s,!1,d,null,null,null);function d(n){for(let e in a)this[e]=a[e]}var p=function(){return g.exports}();export{p as default};
