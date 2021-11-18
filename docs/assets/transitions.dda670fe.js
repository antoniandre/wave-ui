import{n as o}from"./index.6f80fb47.js";import"./vendor.4f8da9ec.js";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("title-link",{staticClass:"mt4",attrs:{h1:""}},[t._v("Transitions")]),n("p",[t._v("Here is a list of all the available transition components.")]),t._m(0),n("alert",{attrs:{info:""}},[t._v(`The transitions (based on
`),n("a",{attrs:{href:"https://vuejs.org/v2/guide/transitions.html",target:"_blank"}},[t._v("Vue native transitions")]),t._v(`)
work with element toggling using `),n("code",[t._v("v-if")]),t._v(" or "),n("code",[t._v("v-show")]),t._v("."),n("br"),t._v("Simple example (with "),n("code",[t._v("show")]),t._v(" a boolean variable):"),n("div",{staticClass:"w-flex"},[n("ssh-pre",{staticClass:"mb0",attrs:{language:"html-vue"}},[t._v(`<w-transition-fade>
  <span v-if="show">Hello!</span>
</w-transition-fade>
`)])],1)]),n("title-link",{attrs:{h2:""}},[t._v("Transitions showcase")]),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleFade = !toggleFade"
    color="primary"
    outline>
    Fade `+t._s("{{ toggleFade ? 'out' : 'in' }}")+`
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
    Scale `+t._s("{{ toggleScale ? 'out' : 'in' }}")+`
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
    Scale fade `+t._s("{{ toggleScaleFade ? 'out' : 'in' }}")+`
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
    Bounce `+t._s("{{ toggleBounce ? 'out' : 'in' }}")+`
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
    Twist `+t._s("{{ toggleTwist ? 'out' : 'in' }}")+`
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
    `+t._s("{{ toggleExpandX ? 'Collapse' : 'Expand' }}")+` X
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
    `+t._s("{{ toggleExpandY ? 'Collapse' : 'Expand' }}")+` Y
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
    `+t._s("{{ toggleExpandXY ? 'Collapse' : 'Expand' }}")+` X & Y
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
    Slide fade `+t._s("{{ toggleSlideFadeDown ? 'up' : 'down' }}")+`
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
    Slide fade `+t._s("{{ toggleSlideFadeRight ? 'left' : 'right' }}")+`
  </w-button>
  <w-transition-slide-fade right>
    <div class="transition-box text-nowrap" v-if="toggleSlideFadeRight">Slide fade down transition</div>
  </w-transition-slide-fade>
</w-flex>
`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.transition-toggle {
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
`)]},proxy:!0}])},[n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleFade=!t.toggleFade}}},[t._v("Fade "+t._s(t.toggleFade?"out":"in"))]),n("w-transition-fade",[t.toggleFade?n("div",{staticClass:"transition-box"},[t._v("Fading transition")]):t._e()])],1),n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleScale=!t.toggleScale}}},[t._v("Scale "+t._s(t.toggleScale?"out":"in"))]),n("w-transition-scale",[t.toggleScale?n("div",{staticClass:"transition-box"},[t._v("Scaling transition")]):t._e()])],1),n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleScaleFade=!t.toggleScaleFade}}},[t._v("Scale fade "+t._s(t.toggleScaleFade?"out":"in"))]),n("w-transition-scale-fade",[t.toggleScaleFade?n("div",{staticClass:"transition-box"},[t._v("Scaling & fading transition")]):t._e()])],1),n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleBounce=!t.toggleBounce}}},[t._v("Bounce "+t._s(t.toggleBounce?"out":"in"))]),n("w-transition-bounce",[t.toggleBounce?n("div",{staticClass:"transition-box"},[t._v("Bouncing transition")]):t._e()])],1),n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleTwist=!t.toggleTwist}}},[t._v("Twist "+t._s(t.toggleTwist?"out":"in"))]),n("w-transition-twist",[t.toggleTwist?n("div",{staticClass:"transition-box"},[t._v("Twisting transition")]):t._e()])],1),n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleExpandX=!t.toggleExpandX}}},[t._v(t._s(t.toggleExpandX?"Collapse":"Expand")+" X")]),n("w-transition-expand",{attrs:{x:""}},[t.toggleExpandX?n("div",{staticClass:"transition-box text-nowrap"},[t._v("X-expanding transition")]):t._e()])],1),n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleExpandY=!t.toggleExpandY}}},[t._v(t._s(t.toggleExpandY?"Collapse":"Expand")+" Y")]),n("w-transition-expand",{attrs:{y:""}},[t.toggleExpandY?n("div",{staticClass:"transition-box"},[t._v("Y-expanding transition")]):t._e()])],1),n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleExpandXY=!t.toggleExpandXY}}},[t._v(t._s(t.toggleExpandXY?"Collapse":"Expand")+" X & Y")]),n("w-transition-expand",[t.toggleExpandXY?n("div",{staticClass:"transition-box text-nowrap"},[t._v("X & Y expanding transition")]):t._e()])],1),n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleSlideFadeDown=!t.toggleSlideFadeDown}}},[t._v("Slide fade "+t._s(t.toggleSlideFadeDown?"up":"down"))]),n("w-transition-slide-fade",[t.toggleSlideFadeDown?n("div",{staticClass:"transition-box text-nowrap"},[t._v("Slide fade down transition")]):t._e()])],1),n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(i){t.toggleSlideFadeRight=!t.toggleSlideFadeRight}}},[t._v("Slide fade "+t._s(t.toggleSlideFadeRight?"left":"right"))]),n("w-transition-slide-fade",{attrs:{right:""}},[t.toggleSlideFadeRight?n("div",{staticClass:"transition-box text-nowrap"},[t._v("Slide fade right transition")]):t._e()])],1)],1),t._m(1),n("title-link",{attrs:{h2:"",slug:"the-expand-transition"}},[t._v("The "),n("span",{staticClass:"code"},[t._v("expand")]),t._v(" transition")]),n("p",[t._v(`The great thing with Wave UI's expand transition is that it also animates any margin or padding on the
transitioning element! Look at this one:`)]),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline
    width="7.3em">
    `+t._s(t.toggleExpandXY?"Collapse":"Expand")+` X & Y
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
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  toggleExpandXY: false
})`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.transition-toggle {margin: 12px 24px 12px 0;}

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
`)]},proxy:!0}])},[n("w-flex",{attrs:{"align-center":""}},[n("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:"",width:"7.3em"},on:{click:function(i){t.toggleExpandXY2=!t.toggleExpandXY2}}},[t._v(t._s(t.toggleExpandXY2?"Collapse":"Expand")+" X & Y")]),n("w-transition-expand",{attrs:{duration:2e3}},[t.toggleExpandXY2?n("div",{staticClass:"transition-box pa6 ma10 yellow-light5--bg",staticStyle:{width:"auto"}},[n("div",{staticClass:"amber-light4--bg pa2",staticStyle:{overflow:"hidden","white-space":"nowrap",width:"200px"}},[t._v("X & Y expanding transition")])]):t._e()])],1)],1),n("alert",{attrs:{tip:""}},[t._v(`When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while
the animation, like in the above example.
To do so, you can add the `),n("span",{staticClass:"code"},[t._v("text-nowrap")]),t._v(` class on the element being transitioned.
`)]),n("title-link",{attrs:{h2:"",slug:"the-slide-transition"}},[t._v("The "),n("span",{staticClass:"code"},[t._v("slide")]),t._v(" transition")]),t._m(2),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div style="height: 90px;overflow: hidden;padding: 4px">
  <w-button class="mb2" @click="showCard = !showCard">
    `+t._s("{{ showCard ? 'Hide' : 'Show' }}")+` Card
  </w-button>
  <w-transition-slide left>
    <w-card v-if="showCard" class="primary-light3--bg white">
      <div class="title3">A sliding card.</div>
    </w-card>
  </w-transition-slide>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showCard: false
})
`)]},proxy:!0}])},[n("div",{staticStyle:{height:"90px",overflow:"hidden",padding:"4px"}},[n("w-button",{staticClass:"mb2",on:{click:function(i){t.showCard=!t.showCard}}},[t._v(t._s(t.showCard?"Hide":"Show")+" Card")]),n("w-transition-slide",{attrs:{left:""}},[t.showCard?n("w-card",{staticClass:"primary-light3--bg white"},[n("div",{staticClass:"title3 mb0"},[t._v("A sliding card.")])]):t._e()],1)],1)]),n("title-link",{attrs:{h2:""}},[t._v("Transition duration")]),t._m(3),n("p",[t._v(`The expand transition being fully Javascript driven, it accepts a duration parameter in milliseconds.
So you don't need to override the duration from a CSS rule.`)])],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("code",[t._v("w-transition-fade")])]),n("li",{staticClass:"mt1"},[n("code",[t._v("w-transition-scale")])]),n("li",{staticClass:"mt1"},[n("code",[t._v("w-transition-scale-fade")])]),n("li",{staticClass:"mt1"},[n("code",[t._v("w-transition-bounce")])]),n("li",{staticClass:"mt1"},[n("code",[t._v("w-transition-twist")])]),n("li",{staticClass:"mt1"},[n("code",[t._v("w-transition-expand")])]),n("li",{staticClass:"mt1"},[n("code",[t._v("w-transition-slide")])]),n("li",{staticClass:"mt1"},[n("code",[t._v("w-transition-slide-fade")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",{staticClass:"mr1"},[t._v("Note:")]),t._v("the "),n("span",{staticClass:"code"},[t._v("slide-fade")]),t._v(" transition take the direction in parameter, e.g. "),n("span",{staticClass:"code"},[t._v("left")]),t._v(`,
`),n("span",{staticClass:"code"},[t._v("right")]),t._v(", "),n("span",{staticClass:"code"},[t._v("up")]),t._v(", "),n("span",{staticClass:"code"},[t._v("down")]),t._v(" and defaults to "),n("span",{staticClass:"code"},[t._v("down")]),t._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(`The slide transition is only designed for elements sliding from outside the view into the view or
vice-versa, they will slide from 0% visibility to 100% visibility.`),n("br"),t._v(`
It works well for full screen elements or elements that are in a hidden-overflow container like
in this example.`)])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(`You can easily override the default transition/animation duration by setting an explicit
CSS transition/animation duration on the element being transitioned:
`),n("span",{staticClass:"code"},[t._v('style="animation-duration: 3s"')]),t._v(".")])}];const r={data:()=>({toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1})},a={};var g=o(r,s,l,!1,d,null,null,null);function d(t){for(let e in a)this[e]=a[e]}var v=function(){return g.exports}();export{v as default};
