import{N as e,U as t,W as n,c as r,d as i,g as a,h as o,k as s,l as c,m as l,u,yt as d}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{s as f}from"./runtime-dom.esm-bundler-Cc0sF0om.js";import{t as p}from"./_plugin-vue_export-helper-S3RvzygF.js";var m={class:`w-flex`},h={key:0,class:`transition-box`},g={key:0,class:`transition-box`},_={key:0,class:`transition-box`},v={key:0,class:`transition-box`},y={key:0,class:`transition-box`},b={key:0,class:`transition-box text-nowrap`},x={key:0,class:`transition-box`},S={key:0,class:`transition-box text-nowrap`},C={key:0,class:`transition-box text-nowrap`},w={key:0,class:`transition-box text-nowrap`},T={key:0,class:`transition-box pa6 ma10 yellow-light5--bg`,style:{width:`auto`}},E={style:{height:`90px`,overflow:`hidden`,padding:`4px`}},D={class:`ml1`,href:`https://github.com/vuejs/core/issues/994`};function O(p,O,k,A,j,M){let N=e(`title-link`),P=e(`ssh-pre`),F=e(`alert`),I=e(`w-button`),L=e(`w-transition-fade`),R=e(`w-flex`),z=e(`w-transition-scale`),B=e(`w-transition-scale-fade`),V=e(`w-transition-bounce`),H=e(`w-transition-twist`),U=e(`w-transition-expand`),W=e(`w-transition-slide-fade`),G=e(`example`),K=e(`w-card`),q=e(`w-transition-slide`),J=e(`w-icon`);return s(),i(`main`,null,[a(N,{class:`mt4`,h1:``},{default:t(()=>[...O[12]||=[o(`Transitions`,-1)]]),_:1}),O[53]||=l(`<p>Here is a list of all the available transition components.</p><ul><li><code>w-transition-fade</code></li><li class="mt1"><code>w-transition-scale</code></li><li class="mt1"><code>w-transition-scale-fade</code></li><li class="mt1"><code>w-transition-bounce</code></li><li class="mt1"><code>w-transition-twist</code></li><li class="mt1"><code>w-transition-expand</code></li><li class="mt1"><code>w-transition-slide</code></li><li class="mt1"><code>w-transition-slide-fade</code></li></ul>`,2),a(F,{info:``},{default:t(()=>[O[15]||=o(`The transitions (based on
`,-1),O[16]||=r(`a`,{href:`https://vuejs.org/guide/built-ins/transition.html`,target:`_blank`},`Vue native transitions`,-1),O[17]||=o(`)
work with element toggling using `,-1),O[18]||=r(`code`,null,`v-if`,-1),O[19]||=o(` or `,-1),O[20]||=r(`code`,null,`v-show`,-1),O[21]||=o(`.`,-1),O[22]||=r(`br`,null,null,-1),O[23]||=o(`Simple example (with `,-1),O[24]||=r(`code`,null,`show`,-1),O[25]||=o(` a boolean variable):`,-1),r(`div`,m,[n(a(P,{class:`mb0`,dark:p.$store.state.darkMode,language:`pug`},{default:t(()=>[...O[13]||=[o(`w-transition-fade
  span(v-if="show") Hello!`,-1)]]),_:1},8,[`dark`]),[[f,p.$store.state.usePug]]),n(a(P,{class:`mb0`,dark:p.$store.state.darkMode,language:`html-vue`},{default:t(()=>[...O[14]||=[o(`<w-transition-fade>
  <span v-if="show">Hello!</span>
</w-transition-fade>
`,-1)]]),_:1},8,[`dark`]),[[f,!p.$store.state.usePug]])])]),_:1}),a(N,{h2:``},{default:t(()=>[...O[26]||=[o(`Transitions showcase`,-1)]]),_:1}),a(G,null,{pug:t(()=>[...O[27]||=[o(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleFade = !toggleFade"
    color="primary"
    outline) Fade `+d(`{{ toggleFade ? 'out' : 'in' }}`)+`
  w-transition-fade
    .transition-box(v-if="toggleFade") Fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScale = !toggleScale"
    color="primary"
    outline) Scale `+d(`{{ toggleScale ? 'out' : 'in' }}`)+`
  w-transition-scale
    .transition-box(v-if="toggleScale") Scaling transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScaleFade = !toggleScaleFade"
    color="primary"
    outline) Scale fade `+d(`{{ toggleScaleFade ? 'out' : 'in' }}`)+`
  w-transition-scale-fade
    .transition-box(v-if="toggleScaleFade") Scaling & fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleBounce = !toggleBounce"
    color="primary"
    outline) Bounce `+d(`{{ toggleBounce ? 'out' : 'in' }}`)+`
  w-transition-bounce
    .transition-box(v-if="toggleBounce") Bouncing transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleTwist = !toggleTwist"
    color="primary"
    outline) Twist `+d(`{{ toggleTwist ? 'out' : 'in' }}`)+`
  w-transition-twist
    .transition-box(v-if="toggleTwist") Twisting transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandX = !toggleExpandX"
    color="primary"
    outline) `+d(`{{ toggleExpandX ? 'Collapse' : 'Expand' }}`)+` X
  w-transition-expand(x)
    .transition-box.text-nowrap(v-if="toggleExpandX") X-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandY = !toggleExpandY"
    color="primary"
    outline) `+d(`{{ toggleExpandY ? 'Collapse' : 'Expand' }}`)+` Y
  w-transition-expand(y)
    .transition-box(v-if="toggleExpandY") Y-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline) `+d(`{{ toggleExpandXY ? 'Collapse' : 'Expand' }}`)+` X & Y
  w-transition-expand
    .transition-box.text-nowrap(v-if="toggleExpandXY") X & Y expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeDown = !toggleSlideFadeDown"
    color="primary"
    outline) Slide fade `+d(`{{ toggleSlideFadeDown ? 'up' : 'down' }}`)+`
  w-transition-slide-fade
    .transition-box.text-nowrap(v-if="toggleSlideFadeDown") Slide fade down transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeRight = !toggleSlideFadeRight"
    color="primary"
    outline) Slide fade `+d(`{{ toggleSlideFadeRight ? 'left' : 'right' }}`)+`
  w-transition-slide-fade(right)
    .transition-box.text-nowrap(v-if="toggleSlideFadeRight") Slide fade right transition
`,-1)]]),html:t(()=>[...O[28]||=[o(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleFade = !toggleFade"
    color="primary"
    outline>
    Fade `+d(`{{ toggleFade ? 'out' : 'in' }}`)+`
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
    Scale `+d(`{{ toggleScale ? 'out' : 'in' }}`)+`
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
    Scale fade `+d(`{{ toggleScaleFade ? 'out' : 'in' }}`)+`
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
    Bounce `+d(`{{ toggleBounce ? 'out' : 'in' }}`)+`
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
    Twist `+d(`{{ toggleTwist ? 'out' : 'in' }}`)+`
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
    `+d(`{{ toggleExpandX ? 'Collapse' : 'Expand' }}`)+` X
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
    `+d(`{{ toggleExpandY ? 'Collapse' : 'Expand' }}`)+` Y
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
    `+d(`{{ toggleExpandXY ? 'Collapse' : 'Expand' }}`)+` X & Y
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
    Slide fade `+d(`{{ toggleSlideFadeDown ? 'up' : 'down' }}`)+`
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
    Slide fade `+d(`{{ toggleSlideFadeRight ? 'left' : 'right' }}`)+`
  </w-button>
  <w-transition-slide-fade right>
    <div class="transition-box text-nowrap" v-if="toggleSlideFadeRight">Slide fade down transition</div>
  </w-transition-slide-fade>
</w-flex>
`,-1)]]),js:t(()=>[...O[29]||=[o(`data: () => ({
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
`,-1)]]),css:t(()=>[...O[30]||=[o(`.transition-toggle {
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
`,-1)]]),default:t(()=>[a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[0]||=e=>p.toggleFade=!p.toggleFade,color:`primary`,outline:``},{default:t(()=>[o(`Fade `+d(p.toggleFade?`out`:`in`),1)]),_:1}),a(L,null,{default:t(()=>[p.toggleFade?(s(),i(`div`,h,`Fading transition`)):u(``,!0)]),_:1})]),_:1}),a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[1]||=e=>p.toggleScale=!p.toggleScale,color:`primary`,outline:``},{default:t(()=>[o(`Scale `+d(p.toggleScale?`out`:`in`),1)]),_:1}),a(z,null,{default:t(()=>[p.toggleScale?(s(),i(`div`,g,`Scaling transition`)):u(``,!0)]),_:1})]),_:1}),a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[2]||=e=>p.toggleScaleFade=!p.toggleScaleFade,color:`primary`,outline:``},{default:t(()=>[o(`Scale fade `+d(p.toggleScaleFade?`out`:`in`),1)]),_:1}),a(B,null,{default:t(()=>[p.toggleScaleFade?(s(),i(`div`,_,`Scaling & fading transition`)):u(``,!0)]),_:1})]),_:1}),a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[3]||=e=>p.toggleBounce=!p.toggleBounce,color:`primary`,outline:``},{default:t(()=>[o(`Bounce `+d(p.toggleBounce?`out`:`in`),1)]),_:1}),a(V,null,{default:t(()=>[p.toggleBounce?(s(),i(`div`,v,`Bouncing transition`)):u(``,!0)]),_:1})]),_:1}),a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[4]||=e=>p.toggleTwist=!p.toggleTwist,color:`primary`,outline:``},{default:t(()=>[o(`Twist `+d(p.toggleTwist?`out`:`in`),1)]),_:1}),a(H,null,{default:t(()=>[p.toggleTwist?(s(),i(`div`,y,`Twisting transition`)):u(``,!0)]),_:1})]),_:1}),a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[5]||=e=>p.toggleExpandX=!p.toggleExpandX,color:`primary`,outline:``},{default:t(()=>[o(d(p.toggleExpandX?`Collapse`:`Expand`)+` X`,1)]),_:1}),a(U,{x:``},{default:t(()=>[p.toggleExpandX?(s(),i(`div`,b,`X-expanding transition`)):u(``,!0)]),_:1})]),_:1}),a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[6]||=e=>p.toggleExpandY=!p.toggleExpandY,color:`primary`,outline:``},{default:t(()=>[o(d(p.toggleExpandY?`Collapse`:`Expand`)+` Y`,1)]),_:1}),a(U,{y:``},{default:t(()=>[p.toggleExpandY?(s(),i(`div`,x,`Y-expanding transition`)):u(``,!0)]),_:1})]),_:1}),a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[7]||=e=>p.toggleExpandXY=!p.toggleExpandXY,color:`primary`,outline:``},{default:t(()=>[o(d(p.toggleExpandXY?`Collapse`:`Expand`)+` X & Y`,1)]),_:1}),a(U,null,{default:t(()=>[p.toggleExpandXY?(s(),i(`div`,S,`X & Y expanding transition`)):u(``,!0)]),_:1})]),_:1}),a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[8]||=e=>p.toggleSlideFadeDown=!p.toggleSlideFadeDown,color:`primary`,outline:``},{default:t(()=>[o(`Slide fade `+d(p.toggleSlideFadeDown?`up`:`down`),1)]),_:1}),a(W,null,{default:t(()=>[p.toggleSlideFadeDown?(s(),i(`div`,C,`Slide fade down transition`)):u(``,!0)]),_:1})]),_:1}),a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[9]||=e=>p.toggleSlideFadeRight=!p.toggleSlideFadeRight,color:`primary`,outline:``},{default:t(()=>[o(`Slide fade `+d(p.toggleSlideFadeRight?`left`:`right`),1)]),_:1}),a(W,{right:``},{default:t(()=>[p.toggleSlideFadeRight?(s(),i(`div`,w,`Slide fade right transition`)):u(``,!0)]),_:1})]),_:1})]),_:1}),O[54]||=l(`<p><strong class="mr1">Note:</strong>the <span class="code">slide-fade</span> transition take the direction in parameter, e.g. <span class="code">left</span>,
<span class="code">right</span>, <span class="code">up</span>, <span class="code">down</span> and defaults to <span class="code">down</span>.</p>`,1),a(N,{h2:``,slug:`the-expand-transition`},{default:t(()=>[...O[31]||=[o(`The `,-1),r(`span`,{class:`code`},`expand`,-1),o(` transition`,-1)]]),_:1}),O[55]||=r(`p`,null,`The great thing with Wave UI's expand transition is that it also animates any margin or padding on the
transitioning element! Look at this one:`,-1),a(G,null,{pug:t(()=>[o(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY2 = !toggleExpandXY2"
    color="primary"
    outline
    width="7.3em") `+d(p.toggleExpandXY2?`Collapse`:`Expand`)+` X & Y
  w-transition-expand(:duration="2000")
    .transition-box.pa6.ma10.yellow-light5--bg(
      v-if="toggleExpandXY2"
      style="width: auto")
      .amber-light4--bg.black.pa2(style="overflow: hidden;white-space: nowrap;width: 200px")
        | X & Y expanding transition`,1)]),html:t(()=>[o(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline
    width="7.3em">
    `+d(p.toggleExpandXY?`Collapse`:`Expand`)+` X & Y
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
</w-flex>`,1)]),js:t(()=>[...O[33]||=[o(`data: () => ({
  toggleExpandXY: false
})`,-1)]]),css:t(()=>[...O[34]||=[o(`.transition-toggle {margin: 12px 24px 12px 0;}

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
`,-1)]]),default:t(()=>[a(R,{"align-center":``},{default:t(()=>[a(I,{class:`transition-toggle`,onClick:O[10]||=e=>p.toggleExpandXY2=!p.toggleExpandXY2,color:`primary`,outline:``,width:`7.3em`},{default:t(()=>[o(d(p.toggleExpandXY2?`Collapse`:`Expand`)+` X & Y`,1)]),_:1}),a(U,{duration:2e3},{default:t(()=>[p.toggleExpandXY2?(s(),i(`div`,T,[...O[32]||=[r(`div`,{class:`amber-light4--bg black pa2`,style:{overflow:`hidden`,"white-space":`nowrap`,width:`200px`}},`X & Y expanding transition`,-1)]])):u(``,!0)]),_:1})]),_:1})]),_:1}),a(F,{tip:``},{default:t(()=>[...O[35]||=[o(`When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while
the animation, like in the above example.
To do so, you can add the `,-1),r(`span`,{class:`code`},`text-nowrap`,-1),o(` class on the element being transitioned.
`,-1)]]),_:1}),a(N,{h2:``,slug:`the-slide-transition`},{default:t(()=>[...O[36]||=[o(`The `,-1),r(`span`,{class:`code`},`slide`,-1),o(` transition`,-1)]]),_:1}),O[56]||=r(`p`,null,[o(`The slide transition is only designed for elements sliding from outside the view into the view or
vice-versa, they will slide from 0% visibility to 100% visibility.`),r(`br`),o(`
It works well for full screen elements or elements that are in a hidden-overflow container like
in this example.`)],-1),a(G,null,{pug:t(()=>[...O[38]||=[o(`div(style="height: 90px;overflow: hidden;padding: 4px")
  w-button.mb2(@click="showCard = !showCard").
    `+d(`{{ showCard ? 'Hide' : 'Show' }}`)+` Card
  w-transition-slide(left)
    w-card.primary-light3--bg.white(v-if="showCard")
      .title3.mb0 A sliding card.`,-1)]]),html:t(()=>[...O[39]||=[o(`<div style="height: 90px;overflow: hidden;padding: 4px">
  <w-button class="mb2" @click="showCard = !showCard">
    `+d(`{{ showCard ? 'Hide' : 'Show' }}`)+` Card
  </w-button>
  <w-transition-slide left>
    <w-card v-if="showCard" class="primary-light3--bg white">
      <div class="title3">A sliding card.</div>
    </w-card>
  </w-transition-slide>
</div>`,-1)]]),js:t(()=>[...O[40]||=[o(`data: () => ({
  showCard: false
})
`,-1)]]),default:t(()=>[r(`div`,E,[a(I,{class:`mb2`,onClick:O[11]||=e=>p.showCard=!p.showCard},{default:t(()=>[o(d(p.showCard?`Hide`:`Show`)+` Card`,1)]),_:1}),a(q,{left:``},{default:t(()=>[p.showCard?(s(),c(K,{key:0,class:`primary-light3--bg white sliding-card`},{default:t(()=>[...O[37]||=[r(`div`,{class:`title3 mb0`},`A sliding card.`,-1)]]),_:1})):u(``,!0)]),_:1})])]),_:1}),a(N,{h2:``},{default:t(()=>[...O[41]||=[o(`Transition duration`,-1)]]),_:1}),O[57]||=r(`p`,null,[o(`You can easily override the default transition/animation duration by setting an explicit
CSS transition/animation duration on the element being transitioned:
`),r(`code`,null,`style="animation-duration: 3s"`),o(`.`)],-1),O[58]||=r(`p`,null,[o(`The expand transition is JavaScript driven: it accepts a `),r(`code`,null,`duration`),o(` parameter in milliseconds.
So you don't need to override the duration from a CSS rule.
`)],-1),a(F,{class:`mt12`,warning:``},{default:t(()=>[O[44]||=o(`Be aware that when using `,-1),O[45]||=r(`code`,null,`v-if`,-1),O[46]||=o(`, the transitions unmount components as soon as the
transition starts the leave phase (`,-1),O[47]||=r(`code`,null,`@before-leave`,-1),O[48]||=o(` and not `,-1),O[49]||=r(`code`,null,`@after-leave`,-1),O[50]||=o(`).
`,-1),O[51]||=r(`br`,null,null,-1),O[52]||=o(`This is by design in Vue:`,-1),r(`a`,D,[O[43]||=o(`Unmounted hooks should run with afterLeave (#994)`,-1),a(J,{class:`ml1`},{default:t(()=>[...O[42]||=[o(`mdi mdi-open-in-new`,-1)]]),_:1})])]),_:1})])}var k=p({data:()=>({toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1})},[[`render`,O]]);export{k as default};