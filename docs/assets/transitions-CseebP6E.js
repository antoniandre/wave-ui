import{G as e,N as t,W as n,bt as r,c as i,d as a,g as o,h as s,k as c,l,m as u,u as d}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as f}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{X as p}from"./index-DQ7e6RHF.js";var m={class:`w-flex`},h={key:0,class:`transition-box`},g={key:0,class:`transition-box`},_={key:0,class:`transition-box`},v={key:0,class:`transition-box`},y={key:0,class:`transition-box`},b={key:0,class:`transition-box text-nowrap`},x={key:0,class:`transition-box`},S={key:0,class:`transition-box text-nowrap`},C={key:0,class:`transition-box text-nowrap`},w={key:0,class:`transition-box text-nowrap`},T={class:`transition-box comp-a`,key:`a`},E={class:`transition-box comp-b`,key:`b`},D={class:`transition-box comp-a`,key:`a`},O={class:`transition-box comp-b`,key:`b`},k={key:0,class:`transition-box pa6 ma10 yellow-light5--bg`,style:{width:`auto`}},A={style:{height:`90px`,overflow:`hidden`,padding:`4px`}},j={class:`ml1`,href:`https://github.com/vuejs/core/issues/994`};function M(f,M,N,P,F,I){let L=t(`title-link`),R=t(`ssh-pre`),z=t(`alert`),B=t(`w-button`),V=t(`w-transition-fade`),H=t(`w-flex`),U=t(`w-transition-scale`),W=t(`w-transition-scale-fade`),G=t(`w-transition-bounce`),K=t(`w-transition-twist`),q=t(`w-transition-expand`),J=t(`w-transition-slide-fade`),Y=t(`example`),X=t(`w-card`),Z=t(`w-transition-slide`),Q=t(`w-icon`);return c(),a(`main`,null,[o(L,{class:`mt4`,h1:``},{default:n(()=>[...M[14]||=[s(`Transitions`,-1)]]),_:1}),M[70]||=u(`<p>Here is a list of all the available transition components.</p><ul><li><code>w-transition-fade</code></li><li class="mt1"><code>w-transition-scale</code></li><li class="mt1"><code>w-transition-scale-fade</code></li><li class="mt1"><code>w-transition-bounce</code></li><li class="mt1"><code>w-transition-twist</code></li><li class="mt1"><code>w-transition-expand</code></li><li class="mt1"><code>w-transition-slide</code></li><li class="mt1"><code>w-transition-slide-fade</code></li></ul>`,2),o(z,{info:``},{default:n(()=>[M[17]||=s(`The transitions (based on
`,-1),M[18]||=i(`a`,{href:`https://vuejs.org/guide/built-ins/transition.html`,target:`_blank`},`Vue native transitions`,-1),M[19]||=s(`)
work with element toggling using `,-1),M[20]||=i(`code`,null,`v-if`,-1),M[21]||=s(` or `,-1),M[22]||=i(`code`,null,`v-show`,-1),M[23]||=s(`.`,-1),M[24]||=i(`br`,null,null,-1),M[25]||=s(`Simple example (with `,-1),M[26]||=i(`code`,null,`show`,-1),M[27]||=s(` a boolean variable):`,-1),i(`div`,m,[e(o(R,{class:`mb0`,dark:f.$store.state.darkMode,language:`pug`},{default:n(()=>[...M[15]||=[s(`w-transition-fade
  span(v-if="show") Hello!`,-1)]]),_:1},8,[`dark`]),[[p,f.$store.state.usePug]]),e(o(R,{class:`mb0`,dark:f.$store.state.darkMode,language:`html-vue`},{default:n(()=>[...M[16]||=[s(`<w-transition-fade>
  <span v-if="show">Hello!</span>
</w-transition-fade>
`,-1)]]),_:1},8,[`dark`]),[[p,!f.$store.state.usePug]])])]),_:1}),o(L,{h2:``},{default:n(()=>[...M[28]||=[s(`Transitions showcase`,-1)]]),_:1}),o(Y,null,{pug:n(()=>[...M[29]||=[s(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleFade = !toggleFade"
    color="primary"
    outline) Fade `+r(`{{ toggleFade ? 'out' : 'in' }}`)+`
  w-transition-fade
    .transition-box(v-if="toggleFade") Fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScale = !toggleScale"
    color="primary"
    outline) Scale `+r(`{{ toggleScale ? 'out' : 'in' }}`)+`
  w-transition-scale
    .transition-box(v-if="toggleScale") Scaling transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScaleFade = !toggleScaleFade"
    color="primary"
    outline) Scale fade `+r(`{{ toggleScaleFade ? 'out' : 'in' }}`)+`
  w-transition-scale-fade
    .transition-box(v-if="toggleScaleFade") Scaling & fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleBounce = !toggleBounce"
    color="primary"
    outline) Bounce `+r(`{{ toggleBounce ? 'out' : 'in' }}`)+`
  w-transition-bounce
    .transition-box(v-if="toggleBounce") Bouncing transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleTwist = !toggleTwist"
    color="primary"
    outline) Twist `+r(`{{ toggleTwist ? 'out' : 'in' }}`)+`
  w-transition-twist
    .transition-box(v-if="toggleTwist") Twisting transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandX = !toggleExpandX"
    color="primary"
    outline) `+r(`{{ toggleExpandX ? 'Collapse' : 'Expand' }}`)+` X
  w-transition-expand(x)
    .transition-box.text-nowrap(v-if="toggleExpandX") X-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandY = !toggleExpandY"
    color="primary"
    outline) `+r(`{{ toggleExpandY ? 'Collapse' : 'Expand' }}`)+` Y
  w-transition-expand(y)
    .transition-box(v-if="toggleExpandY") Y-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline) `+r(`{{ toggleExpandXY ? 'Collapse' : 'Expand' }}`)+` X & Y
  w-transition-expand
    .transition-box.text-nowrap(v-if="toggleExpandXY") X & Y expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeDown = !toggleSlideFadeDown"
    color="primary"
    outline) Slide fade `+r(`{{ toggleSlideFadeDown ? 'up' : 'down' }}`)+`
  w-transition-slide-fade
    .transition-box.text-nowrap(v-if="toggleSlideFadeDown") Slide fade down transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeRight = !toggleSlideFadeRight"
    color="primary"
    outline) Slide fade `+r(`{{ toggleSlideFadeRight ? 'left' : 'right' }}`)+`
  w-transition-slide-fade(right)
    .transition-box.text-nowrap(v-if="toggleSlideFadeRight") Slide fade right transition
`,-1)]]),html:n(()=>[...M[30]||=[s(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleFade = !toggleFade"
    color="primary"
    outline>
    Fade `+r(`{{ toggleFade ? 'out' : 'in' }}`)+`
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
    Scale `+r(`{{ toggleScale ? 'out' : 'in' }}`)+`
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
    Scale fade `+r(`{{ toggleScaleFade ? 'out' : 'in' }}`)+`
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
    Bounce `+r(`{{ toggleBounce ? 'out' : 'in' }}`)+`
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
    Twist `+r(`{{ toggleTwist ? 'out' : 'in' }}`)+`
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
    `+r(`{{ toggleExpandX ? 'Collapse' : 'Expand' }}`)+` X
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
    `+r(`{{ toggleExpandY ? 'Collapse' : 'Expand' }}`)+` Y
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
    `+r(`{{ toggleExpandXY ? 'Collapse' : 'Expand' }}`)+` X & Y
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
    Slide fade `+r(`{{ toggleSlideFadeDown ? 'up' : 'down' }}`)+`
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
    Slide fade `+r(`{{ toggleSlideFadeRight ? 'left' : 'right' }}`)+`
  </w-button>
  <w-transition-slide-fade right>
    <div class="transition-box text-nowrap" v-if="toggleSlideFadeRight">Slide fade down transition</div>
  </w-transition-slide-fade>
</w-flex>
`,-1)]]),js:n(()=>[...M[31]||=[s(`data: () => ({
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
`,-1)]]),css:n(()=>[...M[32]||=[s(`.transition-toggle {
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
`,-1)]]),default:n(()=>[o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[0]||=e=>f.toggleFade=!f.toggleFade,color:`primary`,outline:``},{default:n(()=>[s(`Fade `+r(f.toggleFade?`out`:`in`),1)]),_:1}),o(V,null,{default:n(()=>[f.toggleFade?(c(),a(`div`,h,`Fading transition`)):d(``,!0)]),_:1})]),_:1}),o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[1]||=e=>f.toggleScale=!f.toggleScale,color:`primary`,outline:``},{default:n(()=>[s(`Scale `+r(f.toggleScale?`out`:`in`),1)]),_:1}),o(U,null,{default:n(()=>[f.toggleScale?(c(),a(`div`,g,`Scaling transition`)):d(``,!0)]),_:1})]),_:1}),o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[2]||=e=>f.toggleScaleFade=!f.toggleScaleFade,color:`primary`,outline:``},{default:n(()=>[s(`Scale fade `+r(f.toggleScaleFade?`out`:`in`),1)]),_:1}),o(W,null,{default:n(()=>[f.toggleScaleFade?(c(),a(`div`,_,`Scaling & fading transition`)):d(``,!0)]),_:1})]),_:1}),o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[3]||=e=>f.toggleBounce=!f.toggleBounce,color:`primary`,outline:``},{default:n(()=>[s(`Bounce `+r(f.toggleBounce?`out`:`in`),1)]),_:1}),o(G,null,{default:n(()=>[f.toggleBounce?(c(),a(`div`,v,`Bouncing transition`)):d(``,!0)]),_:1})]),_:1}),o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[4]||=e=>f.toggleTwist=!f.toggleTwist,color:`primary`,outline:``},{default:n(()=>[s(`Twist `+r(f.toggleTwist?`out`:`in`),1)]),_:1}),o(K,null,{default:n(()=>[f.toggleTwist?(c(),a(`div`,y,`Twisting transition`)):d(``,!0)]),_:1})]),_:1}),o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[5]||=e=>f.toggleExpandX=!f.toggleExpandX,color:`primary`,outline:``},{default:n(()=>[s(r(f.toggleExpandX?`Collapse`:`Expand`)+` X`,1)]),_:1}),o(q,{x:``},{default:n(()=>[f.toggleExpandX?(c(),a(`div`,b,`X-expanding transition`)):d(``,!0)]),_:1})]),_:1}),o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[6]||=e=>f.toggleExpandY=!f.toggleExpandY,color:`primary`,outline:``},{default:n(()=>[s(r(f.toggleExpandY?`Collapse`:`Expand`)+` Y`,1)]),_:1}),o(q,{y:``},{default:n(()=>[f.toggleExpandY?(c(),a(`div`,x,`Y-expanding transition`)):d(``,!0)]),_:1})]),_:1}),o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[7]||=e=>f.toggleExpandXY=!f.toggleExpandXY,color:`primary`,outline:``},{default:n(()=>[s(r(f.toggleExpandXY?`Collapse`:`Expand`)+` X & Y`,1)]),_:1}),o(q,null,{default:n(()=>[f.toggleExpandXY?(c(),a(`div`,S,`X & Y expanding transition`)):d(``,!0)]),_:1})]),_:1}),o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[8]||=e=>f.toggleSlideFadeDown=!f.toggleSlideFadeDown,color:`primary`,outline:``},{default:n(()=>[s(`Slide fade `+r(f.toggleSlideFadeDown?`up`:`down`),1)]),_:1}),o(J,null,{default:n(()=>[f.toggleSlideFadeDown?(c(),a(`div`,C,`Slide fade down transition`)):d(``,!0)]),_:1})]),_:1}),o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[9]||=e=>f.toggleSlideFadeRight=!f.toggleSlideFadeRight,color:`primary`,outline:``},{default:n(()=>[s(`Slide fade `+r(f.toggleSlideFadeRight?`left`:`right`),1)]),_:1}),o(J,{right:``},{default:n(()=>[f.toggleSlideFadeRight?(c(),a(`div`,w,`Slide fade right transition`)):d(``,!0)]),_:1})]),_:1})]),_:1}),M[71]||=u(`<p><strong class="mr1">Note:</strong>the <span class="code">slide-fade</span> transition take the direction in parameter, e.g. <span class="code">left</span>,
<span class="code">right</span>, <span class="code">up</span>, <span class="code">down</span> and defaults to <span class="code">down</span>.</p>`,1),o(L,{h2:``,slug:`component-to-component`},{default:n(()=>[...M[33]||=[s(`Component-to-component transitions`,-1)]]),_:1}),M[72]||=u(`<p>All Wave UI transitions support a <code>mode</code> prop (<code>&#39;out-in&#39;</code> or <code>&#39;in-out&#39;</code>) to transition
smoothly between two elements or components.<br>
With <code>mode=&quot;out-in&quot;</code> the current element leaves first, then the new one enters — preventing any
overlap. Use <code>v-if</code> / <code>v-else</code> with unique <code>key</code> attributes on the children.</p>`,1),o(Y,null,{pug:n(()=>[...M[37]||=[s(`w-flex(align-center wrap gap="4")
  w-button(
    @click="componentToggle = !componentToggle"
    color="primary"
    outline) Switch component
  w-transition-fade(mode="out-in")
    .transition-box.comp-a(v-if="componentToggle" key="a")
      strong Component A
    .transition-box.comp-b(v-else key="b")
      strong Component B`,-1)]]),html:n(()=>[...M[38]||=[s(`<w-flex align-center wrap gap4>
  <w-button
    @click="componentToggle = !componentToggle"
    color="primary"
    outline>
    Switch component
  </w-button>
  <w-transition-fade mode="out-in">
    <div class="transition-box comp-a" v-if="componentToggle" key="a">
      <strong>Component A</strong>
    </div>
    <div class="transition-box comp-b" v-else key="b">
      <strong>Component B</strong>
    </div>
  </w-transition-fade>
</w-flex>`,-1)]]),js:n(()=>[...M[39]||=[s(`data: () => ({
  componentToggle: true
})`,-1)]]),css:n(()=>[...M[40]||=[s(`.transition-box {
  border-radius: 3px;
  padding: 1em;
  width: 14em;
  text-align: center;
}

.comp-a {
  background-color: #e3f0ff;
  border: 1px solid #aad4fb;
}

.comp-b {
  background-color: #e8f7e8;
  border: 1px solid #a4d9a4;
}
`,-1)]]),default:n(()=>[o(H,{"align-center":``,wrap:``,gap:`4`},{default:n(()=>[o(B,{onClick:M[10]||=e=>f.componentToggle=!f.componentToggle,color:`primary`,outline:``},{default:n(()=>[...M[34]||=[s(`Switch component`,-1)]]),_:1}),o(V,{mode:`out-in`},{default:n(()=>[f.componentToggle?(c(),a(`div`,T,[...M[35]||=[i(`strong`,null,`Component A`,-1)]])):(c(),a(`div`,E,[...M[36]||=[i(`strong`,null,`Component B`,-1)]]))]),_:1})]),_:1})]),_:1}),M[73]||=i(`p`,null,[s(`The same `),i(`code`,null,`mode`),s(` prop is available on every Wave UI transition. Here is the same A → B switch
using `),i(`code`,null,`w-transition-twist`),s(`:`)],-1),o(Y,null,{pug:n(()=>[...M[44]||=[s(`w-flex(align-center wrap gap="4")
  w-button(
    @click="componentToggle2 = !componentToggle2"
    color="primary"
    outline) Switch component
  w-transition-twist(mode="out-in")
    .transition-box.comp-a(v-if="componentToggle2" key="a")
      strong Component A
    .transition-box.comp-b(v-else key="b")
      strong Component B`,-1)]]),html:n(()=>[...M[45]||=[s(`<w-flex align-center wrap gap4>
  <w-button
    @click="componentToggle2 = !componentToggle2"
    color="primary"
    outline>
    Switch component
  </w-button>
  <w-transition-twist mode="out-in">
    <div class="transition-box comp-a" v-if="componentToggle2" key="a">
      <strong>Component A</strong>
    </div>
    <div class="transition-box comp-b" v-else key="b">
      <strong>Component B</strong>
    </div>
  </w-transition-twist>
</w-flex>`,-1)]]),js:n(()=>[...M[46]||=[s(`data: () => ({
  componentToggle2: true
})`,-1)]]),css:n(()=>[...M[47]||=[s(`.transition-box {
  border-radius: 3px;
  padding: 1em;
  width: 14em;
  text-align: center;
}

.comp-a {
  background-color: #e3f0ff;
  border: 1px solid #aad4fb;
}

.comp-b {
  background-color: #e8f7e8;
  border: 1px solid #a4d9a4;
}
`,-1)]]),default:n(()=>[o(H,{"align-center":``,wrap:``,gap:`4`},{default:n(()=>[o(B,{onClick:M[11]||=e=>f.componentToggle2=!f.componentToggle2,color:`primary`,outline:``},{default:n(()=>[...M[41]||=[s(`Switch component`,-1)]]),_:1}),o(K,{mode:`out-in`},{default:n(()=>[f.componentToggle2?(c(),a(`div`,D,[...M[42]||=[i(`strong`,null,`Component A`,-1)]])):(c(),a(`div`,O,[...M[43]||=[i(`strong`,null,`Component B`,-1)]]))]),_:1})]),_:1})]),_:1}),o(L,{h2:``,slug:`the-expand-transition`},{default:n(()=>[...M[48]||=[s(`The `,-1),i(`span`,{class:`code`},`expand`,-1),s(` transition`,-1)]]),_:1}),M[74]||=i(`p`,null,`The great thing with Wave UI's expand transition is that it also animates any margin or padding on the
transitioning element! Look at this one:`,-1),o(Y,null,{pug:n(()=>[s(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY2 = !toggleExpandXY2"
    color="primary"
    outline
    width="7.3em") `+r(f.toggleExpandXY2?`Collapse`:`Expand`)+` X & Y
  w-transition-expand(:duration="2000")
    .transition-box.pa6.ma10.yellow-light5--bg(
      v-if="toggleExpandXY2"
      style="width: auto")
      .amber-light4--bg.black.pa2(style="overflow: hidden;white-space: nowrap;width: 200px")
        | X & Y expanding transition`,1)]),html:n(()=>[s(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline
    width="7.3em">
    `+r(f.toggleExpandXY?`Collapse`:`Expand`)+` X & Y
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
</w-flex>`,1)]),js:n(()=>[...M[50]||=[s(`data: () => ({
  toggleExpandXY: false
})`,-1)]]),css:n(()=>[...M[51]||=[s(`.transition-toggle {margin: 12px 24px 12px 0;}

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
`,-1)]]),default:n(()=>[o(H,{"align-center":``},{default:n(()=>[o(B,{class:`transition-toggle`,onClick:M[12]||=e=>f.toggleExpandXY2=!f.toggleExpandXY2,color:`primary`,outline:``,width:`7.3em`},{default:n(()=>[s(r(f.toggleExpandXY2?`Collapse`:`Expand`)+` X & Y`,1)]),_:1}),o(q,{duration:2e3},{default:n(()=>[f.toggleExpandXY2?(c(),a(`div`,k,[...M[49]||=[i(`div`,{class:`amber-light4--bg black pa2`,style:{overflow:`hidden`,"white-space":`nowrap`,width:`200px`}},`X & Y expanding transition`,-1)]])):d(``,!0)]),_:1})]),_:1})]),_:1}),o(z,{tip:``},{default:n(()=>[...M[52]||=[s(`When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while
the animation, like in the above example.
To do so, you can add the `,-1),i(`span`,{class:`code`},`text-nowrap`,-1),s(` class on the element being transitioned.
`,-1)]]),_:1}),o(L,{h2:``,slug:`the-slide-transition`},{default:n(()=>[...M[53]||=[s(`The `,-1),i(`span`,{class:`code`},`slide`,-1),s(` transition`,-1)]]),_:1}),M[75]||=i(`p`,null,[s(`The slide transition is only designed for elements sliding from outside the view into the view or
vice-versa, they will slide from 0% visibility to 100% visibility.`),i(`br`),s(`
It works well for full screen elements or elements that are in a hidden-overflow container like
in this example.`)],-1),o(Y,null,{pug:n(()=>[...M[55]||=[s(`div(style="height: 90px;overflow: hidden;padding: 4px")
  w-button.mb2(@click="showCard = !showCard").
    `+r(`{{ showCard ? 'Hide' : 'Show' }}`)+` Card
  w-transition-slide(left)
    w-card.primary-light3--bg.white(v-if="showCard")
      .title3.mb0 A sliding card.`,-1)]]),html:n(()=>[...M[56]||=[s(`<div style="height: 90px;overflow: hidden;padding: 4px">
  <w-button class="mb2" @click="showCard = !showCard">
    `+r(`{{ showCard ? 'Hide' : 'Show' }}`)+` Card
  </w-button>
  <w-transition-slide left>
    <w-card v-if="showCard" class="primary-light3--bg white">
      <div class="title3">A sliding card.</div>
    </w-card>
  </w-transition-slide>
</div>`,-1)]]),js:n(()=>[...M[57]||=[s(`data: () => ({
  showCard: false
})
`,-1)]]),default:n(()=>[i(`div`,A,[o(B,{class:`mb2`,onClick:M[13]||=e=>f.showCard=!f.showCard},{default:n(()=>[s(r(f.showCard?`Hide`:`Show`)+` Card`,1)]),_:1}),o(Z,{left:``},{default:n(()=>[f.showCard?(c(),l(X,{key:0,class:`primary-light3--bg white sliding-card`},{default:n(()=>[...M[54]||=[i(`div`,{class:`title3 mb0`},`A sliding card.`,-1)]]),_:1})):d(``,!0)]),_:1})])]),_:1}),o(L,{h2:``},{default:n(()=>[...M[58]||=[s(`Transition duration`,-1)]]),_:1}),M[76]||=i(`p`,null,[s(`You can easily override the default transition/animation duration by setting an explicit
CSS transition/animation duration on the element being transitioned:
`),i(`code`,null,`style="animation-duration: 3s"`),s(`.`)],-1),M[77]||=i(`p`,null,[s(`The expand transition is JavaScript driven: it accepts a `),i(`code`,null,`duration`),s(` parameter in milliseconds.
So you don't need to override the duration from a CSS rule.
`)],-1),o(z,{class:`mt12`,warning:``},{default:n(()=>[M[61]||=s(`Be aware that when using `,-1),M[62]||=i(`code`,null,`v-if`,-1),M[63]||=s(`, the transitions unmount components as soon as the
transition starts the leave phase (`,-1),M[64]||=i(`code`,null,`@before-leave`,-1),M[65]||=s(` and not `,-1),M[66]||=i(`code`,null,`@after-leave`,-1),M[67]||=s(`).
`,-1),M[68]||=i(`br`,null,null,-1),M[69]||=s(`This is by design in Vue:`,-1),i(`a`,j,[M[60]||=s(`Unmounted hooks should run with afterLeave (#994)`,-1),o(Q,{class:`ml1`},{default:n(()=>[...M[59]||=[s(`mdi mdi-open-in-new`,-1)]]),_:1})])]),_:1})])}var N=f({data:()=>({toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1,componentToggle:!0,componentToggle2:!0})},[[`render`,M]]);export{N as default};