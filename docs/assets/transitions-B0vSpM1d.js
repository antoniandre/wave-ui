import{G as e,N as t,W as n,bt as r,c as i,d as a,g as o,h as s,k as c,l,m as u,u as d}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as f}from"./plugin-vue_export-helper-B80Cc4Ui.js";import{Y as p}from"./index-BhRaCC4I.js";var m={class:`w-flex`},h={key:0,class:`transition-box`},g={key:0,class:`transition-box`},_={key:0,class:`transition-box`},v={key:0,class:`transition-box`},y={key:0,class:`transition-box`},b={key:0,class:`transition-box text-nowrap`},x={key:0,class:`transition-box`},S={key:0,class:`transition-box text-nowrap`},C={key:0,class:`transition-box text-nowrap`},w={key:0,class:`transition-box text-nowrap`},T={key:0,class:`transition-box pa6 ma10 yellow-light5--bg`,style:{width:`auto`}},E={style:{height:`90px`,overflow:`hidden`,padding:`4px`}},D={class:`ml1`,href:`https://github.com/vuejs/core/issues/994`};function O(f,O,k,A,j,M){let N=t(`title-link`),P=t(`ssh-pre`),F=t(`alert`),I=t(`w-button`),L=t(`w-transition-fade`),R=t(`w-flex`),z=t(`w-transition-scale`),B=t(`w-transition-scale-fade`),V=t(`w-transition-bounce`),H=t(`w-transition-twist`),U=t(`w-transition-expand`),W=t(`w-transition-slide-fade`),G=t(`example`),K=t(`w-card`),q=t(`w-transition-slide`),J=t(`w-icon`);return c(),a(`main`,null,[o(N,{class:`mt4`,h1:``},{default:n(()=>[...O[12]||=[s(`Transitions`,-1)]]),_:1}),O[53]||=u(`<p>Here is a list of all the available transition components.</p><ul><li><code>w-transition-fade</code></li><li class="mt1"><code>w-transition-scale</code></li><li class="mt1"><code>w-transition-scale-fade</code></li><li class="mt1"><code>w-transition-bounce</code></li><li class="mt1"><code>w-transition-twist</code></li><li class="mt1"><code>w-transition-expand</code></li><li class="mt1"><code>w-transition-slide</code></li><li class="mt1"><code>w-transition-slide-fade</code></li></ul>`,2),o(F,{info:``},{default:n(()=>[O[15]||=s(`The transitions (based on
`,-1),O[16]||=i(`a`,{href:`https://vuejs.org/guide/built-ins/transition.html`,target:`_blank`},`Vue native transitions`,-1),O[17]||=s(`)
work with element toggling using `,-1),O[18]||=i(`code`,null,`v-if`,-1),O[19]||=s(` or `,-1),O[20]||=i(`code`,null,`v-show`,-1),O[21]||=s(`.`,-1),O[22]||=i(`br`,null,null,-1),O[23]||=s(`Simple example (with `,-1),O[24]||=i(`code`,null,`show`,-1),O[25]||=s(` a boolean variable):`,-1),i(`div`,m,[e(o(P,{class:`mb0`,dark:f.$store.state.darkMode,language:`pug`},{default:n(()=>[...O[13]||=[s(`w-transition-fade
  span(v-if="show") Hello!`,-1)]]),_:1},8,[`dark`]),[[p,f.$store.state.usePug]]),e(o(P,{class:`mb0`,dark:f.$store.state.darkMode,language:`html-vue`},{default:n(()=>[...O[14]||=[s(`<w-transition-fade>
  <span v-if="show">Hello!</span>
</w-transition-fade>
`,-1)]]),_:1},8,[`dark`]),[[p,!f.$store.state.usePug]])])]),_:1}),o(N,{h2:``},{default:n(()=>[...O[26]||=[s(`Transitions showcase`,-1)]]),_:1}),o(G,null,{pug:n(()=>[...O[27]||=[s(`w-flex(align-center)
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
`,-1)]]),html:n(()=>[...O[28]||=[s(`<w-flex align-center>
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
`,-1)]]),js:n(()=>[...O[29]||=[s(`data: () => ({
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
`,-1)]]),css:n(()=>[...O[30]||=[s(`.transition-toggle {
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
`,-1)]]),default:n(()=>[o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[0]||=e=>f.toggleFade=!f.toggleFade,color:`primary`,outline:``},{default:n(()=>[s(`Fade `+r(f.toggleFade?`out`:`in`),1)]),_:1}),o(L,null,{default:n(()=>[f.toggleFade?(c(),a(`div`,h,`Fading transition`)):d(``,!0)]),_:1})]),_:1}),o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[1]||=e=>f.toggleScale=!f.toggleScale,color:`primary`,outline:``},{default:n(()=>[s(`Scale `+r(f.toggleScale?`out`:`in`),1)]),_:1}),o(z,null,{default:n(()=>[f.toggleScale?(c(),a(`div`,g,`Scaling transition`)):d(``,!0)]),_:1})]),_:1}),o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[2]||=e=>f.toggleScaleFade=!f.toggleScaleFade,color:`primary`,outline:``},{default:n(()=>[s(`Scale fade `+r(f.toggleScaleFade?`out`:`in`),1)]),_:1}),o(B,null,{default:n(()=>[f.toggleScaleFade?(c(),a(`div`,_,`Scaling & fading transition`)):d(``,!0)]),_:1})]),_:1}),o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[3]||=e=>f.toggleBounce=!f.toggleBounce,color:`primary`,outline:``},{default:n(()=>[s(`Bounce `+r(f.toggleBounce?`out`:`in`),1)]),_:1}),o(V,null,{default:n(()=>[f.toggleBounce?(c(),a(`div`,v,`Bouncing transition`)):d(``,!0)]),_:1})]),_:1}),o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[4]||=e=>f.toggleTwist=!f.toggleTwist,color:`primary`,outline:``},{default:n(()=>[s(`Twist `+r(f.toggleTwist?`out`:`in`),1)]),_:1}),o(H,null,{default:n(()=>[f.toggleTwist?(c(),a(`div`,y,`Twisting transition`)):d(``,!0)]),_:1})]),_:1}),o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[5]||=e=>f.toggleExpandX=!f.toggleExpandX,color:`primary`,outline:``},{default:n(()=>[s(r(f.toggleExpandX?`Collapse`:`Expand`)+` X`,1)]),_:1}),o(U,{x:``},{default:n(()=>[f.toggleExpandX?(c(),a(`div`,b,`X-expanding transition`)):d(``,!0)]),_:1})]),_:1}),o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[6]||=e=>f.toggleExpandY=!f.toggleExpandY,color:`primary`,outline:``},{default:n(()=>[s(r(f.toggleExpandY?`Collapse`:`Expand`)+` Y`,1)]),_:1}),o(U,{y:``},{default:n(()=>[f.toggleExpandY?(c(),a(`div`,x,`Y-expanding transition`)):d(``,!0)]),_:1})]),_:1}),o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[7]||=e=>f.toggleExpandXY=!f.toggleExpandXY,color:`primary`,outline:``},{default:n(()=>[s(r(f.toggleExpandXY?`Collapse`:`Expand`)+` X & Y`,1)]),_:1}),o(U,null,{default:n(()=>[f.toggleExpandXY?(c(),a(`div`,S,`X & Y expanding transition`)):d(``,!0)]),_:1})]),_:1}),o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[8]||=e=>f.toggleSlideFadeDown=!f.toggleSlideFadeDown,color:`primary`,outline:``},{default:n(()=>[s(`Slide fade `+r(f.toggleSlideFadeDown?`up`:`down`),1)]),_:1}),o(W,null,{default:n(()=>[f.toggleSlideFadeDown?(c(),a(`div`,C,`Slide fade down transition`)):d(``,!0)]),_:1})]),_:1}),o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[9]||=e=>f.toggleSlideFadeRight=!f.toggleSlideFadeRight,color:`primary`,outline:``},{default:n(()=>[s(`Slide fade `+r(f.toggleSlideFadeRight?`left`:`right`),1)]),_:1}),o(W,{right:``},{default:n(()=>[f.toggleSlideFadeRight?(c(),a(`div`,w,`Slide fade right transition`)):d(``,!0)]),_:1})]),_:1})]),_:1}),O[54]||=u(`<p><strong class="mr1">Note:</strong>the <span class="code">slide-fade</span> transition take the direction in parameter, e.g. <span class="code">left</span>,
<span class="code">right</span>, <span class="code">up</span>, <span class="code">down</span> and defaults to <span class="code">down</span>.</p>`,1),o(N,{h2:``,slug:`the-expand-transition`},{default:n(()=>[...O[31]||=[s(`The `,-1),i(`span`,{class:`code`},`expand`,-1),s(` transition`,-1)]]),_:1}),O[55]||=i(`p`,null,`The great thing with Wave UI's expand transition is that it also animates any margin or padding on the
transitioning element! Look at this one:`,-1),o(G,null,{pug:n(()=>[s(`w-flex(align-center)
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
</w-flex>`,1)]),js:n(()=>[...O[33]||=[s(`data: () => ({
  toggleExpandXY: false
})`,-1)]]),css:n(()=>[...O[34]||=[s(`.transition-toggle {margin: 12px 24px 12px 0;}

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
`,-1)]]),default:n(()=>[o(R,{"align-center":``},{default:n(()=>[o(I,{class:`transition-toggle`,onClick:O[10]||=e=>f.toggleExpandXY2=!f.toggleExpandXY2,color:`primary`,outline:``,width:`7.3em`},{default:n(()=>[s(r(f.toggleExpandXY2?`Collapse`:`Expand`)+` X & Y`,1)]),_:1}),o(U,{duration:2e3},{default:n(()=>[f.toggleExpandXY2?(c(),a(`div`,T,[...O[32]||=[i(`div`,{class:`amber-light4--bg black pa2`,style:{overflow:`hidden`,"white-space":`nowrap`,width:`200px`}},`X & Y expanding transition`,-1)]])):d(``,!0)]),_:1})]),_:1})]),_:1}),o(F,{tip:``},{default:n(()=>[...O[35]||=[s(`When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while
the animation, like in the above example.
To do so, you can add the `,-1),i(`span`,{class:`code`},`text-nowrap`,-1),s(` class on the element being transitioned.
`,-1)]]),_:1}),o(N,{h2:``,slug:`the-slide-transition`},{default:n(()=>[...O[36]||=[s(`The `,-1),i(`span`,{class:`code`},`slide`,-1),s(` transition`,-1)]]),_:1}),O[56]||=i(`p`,null,[s(`The slide transition is only designed for elements sliding from outside the view into the view or
vice-versa, they will slide from 0% visibility to 100% visibility.`),i(`br`),s(`
It works well for full screen elements or elements that are in a hidden-overflow container like
in this example.`)],-1),o(G,null,{pug:n(()=>[...O[38]||=[s(`div(style="height: 90px;overflow: hidden;padding: 4px")
  w-button.mb2(@click="showCard = !showCard").
    `+r(`{{ showCard ? 'Hide' : 'Show' }}`)+` Card
  w-transition-slide(left)
    w-card.primary-light3--bg.white(v-if="showCard")
      .title3.mb0 A sliding card.`,-1)]]),html:n(()=>[...O[39]||=[s(`<div style="height: 90px;overflow: hidden;padding: 4px">
  <w-button class="mb2" @click="showCard = !showCard">
    `+r(`{{ showCard ? 'Hide' : 'Show' }}`)+` Card
  </w-button>
  <w-transition-slide left>
    <w-card v-if="showCard" class="primary-light3--bg white">
      <div class="title3">A sliding card.</div>
    </w-card>
  </w-transition-slide>
</div>`,-1)]]),js:n(()=>[...O[40]||=[s(`data: () => ({
  showCard: false
})
`,-1)]]),default:n(()=>[i(`div`,E,[o(I,{class:`mb2`,onClick:O[11]||=e=>f.showCard=!f.showCard},{default:n(()=>[s(r(f.showCard?`Hide`:`Show`)+` Card`,1)]),_:1}),o(q,{left:``},{default:n(()=>[f.showCard?(c(),l(K,{key:0,class:`primary-light3--bg white sliding-card`},{default:n(()=>[...O[37]||=[i(`div`,{class:`title3 mb0`},`A sliding card.`,-1)]]),_:1})):d(``,!0)]),_:1})])]),_:1}),o(N,{h2:``},{default:n(()=>[...O[41]||=[s(`Transition duration`,-1)]]),_:1}),O[57]||=i(`p`,null,[s(`You can easily override the default transition/animation duration by setting an explicit
CSS transition/animation duration on the element being transitioned:
`),i(`code`,null,`style="animation-duration: 3s"`),s(`.`)],-1),O[58]||=i(`p`,null,[s(`The expand transition is JavaScript driven: it accepts a `),i(`code`,null,`duration`),s(` parameter in milliseconds.
So you don't need to override the duration from a CSS rule.
`)],-1),o(F,{class:`mt12`,warning:``},{default:n(()=>[O[44]||=s(`Be aware that when using `,-1),O[45]||=i(`code`,null,`v-if`,-1),O[46]||=s(`, the transitions unmount components as soon as the
transition starts the leave phase (`,-1),O[47]||=i(`code`,null,`@before-leave`,-1),O[48]||=s(` and not `,-1),O[49]||=i(`code`,null,`@after-leave`,-1),O[50]||=s(`).
`,-1),O[51]||=i(`br`,null,null,-1),O[52]||=s(`This is by design in Vue:`,-1),i(`a`,D,[O[43]||=s(`Unmounted hooks should run with afterLeave (#994)`,-1),o(J,{class:`ml1`},{default:n(()=>[...O[42]||=[s(`mdi mdi-open-in-new`,-1)]]),_:1})])]),_:1})])}var k=f({data:()=>({toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1})},[[`render`,O]]);export{k as default};
