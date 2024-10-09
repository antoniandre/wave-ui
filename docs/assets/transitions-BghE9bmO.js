import{r as s,o as d,g as r,a as o,w as t,b as i,h as S,d as a,l as y,v as k,t as l,f as w,c as $,_ as D}from"./index-GCsNrMay.js";const R={class:"w-flex"},V={key:0,class:"transition-box"},H={key:0,class:"transition-box"},N={key:0,class:"transition-box"},j={key:0,class:"transition-box"},A={key:0,class:"transition-box"},P={key:0,class:"transition-box text-nowrap"},I={key:0,class:"transition-box"},L={key:0,class:"transition-box text-nowrap"},M={key:0,class:"transition-box text-nowrap"},U={key:0,class:"transition-box text-nowrap"},W={key:0,class:"transition-box pa6 ma10 yellow-light5--bg",style:{width:"auto"}},J={style:{height:"90px",overflow:"hidden",padding:"4px"}},q={class:"ml1",href:"https://github.com/vuejs/core/issues/994"};function z(e,n,K,O,Q,Z){const f=s("title-link"),b=s("ssh-pre"),m=s("alert"),g=s("w-button"),E=s("w-transition-fade"),p=s("w-flex"),F=s("w-transition-scale"),Y=s("w-transition-scale-fade"),X=s("w-transition-bounce"),h=s("w-transition-twist"),x=s("w-transition-expand"),v=s("w-transition-slide-fade"),c=s("example"),C=s("w-card"),T=s("w-transition-slide"),B=s("w-icon");return d(),r("main",null,[o(f,{class:"mt4",h1:""},{default:t(()=>n[12]||(n[12]=[i("Transitions")])),_:1}),n[53]||(n[53]=S('<p>Here is a list of all the available transition components.</p><ul><li><code>w-transition-fade</code></li><li class="mt1"><code>w-transition-scale</code></li><li class="mt1"><code>w-transition-scale-fade</code></li><li class="mt1"><code>w-transition-bounce</code></li><li class="mt1"><code>w-transition-twist</code></li><li class="mt1"><code>w-transition-expand</code></li><li class="mt1"><code>w-transition-slide</code></li><li class="mt1"><code>w-transition-slide-fade</code></li></ul>',2)),o(m,{info:""},{default:t(()=>[n[15]||(n[15]=i(`The transitions (based on
`)),n[16]||(n[16]=a("a",{href:"https://vuejs.org/v2/guide/transitions.html",target:"_blank"},"Vue native transitions",-1)),n[17]||(n[17]=i(`)
work with element toggling using `)),n[18]||(n[18]=a("code",null,"v-if",-1)),n[19]||(n[19]=i(" or ")),n[20]||(n[20]=a("code",null,"v-show",-1)),n[21]||(n[21]=i(".")),n[22]||(n[22]=a("br",null,null,-1)),n[23]||(n[23]=i("Simple example (with ")),n[24]||(n[24]=a("code",null,"show",-1)),n[25]||(n[25]=i(" a boolean variable):")),a("div",R,[y(o(b,{class:"mb0",dark:e.$store.state.darkMode,language:"pug",label:"Pug"},{default:t(()=>n[13]||(n[13]=[i(`w-transition-fade
  span(v-if="show") Hello!`)])),_:1},8,["dark"]),[[k,e.$store.state.usePug]]),y(o(b,{class:"mb0",dark:e.$store.state.darkMode,language:"html-vue"},{default:t(()=>n[14]||(n[14]=[i(`<w-transition-fade>
  <span v-if="show">Hello!</span>
</w-transition-fade>
`)])),_:1},8,["dark"]),[[k,!e.$store.state.usePug]])])]),_:1}),o(f,{h2:""},{default:t(()=>n[26]||(n[26]=[i("Transitions showcase")])),_:1}),o(c,null,{pug:t(()=>n[27]||(n[27]=[i(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleFade = !toggleFade"
    color="primary"
    outline) Fade `+l("{{ toggleFade ? 'out' : 'in' }}")+`
  w-transition-fade
    .transition-box(v-if="toggleFade") Fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScale = !toggleScale"
    color="primary"
    outline) Scale `+l("{{ toggleScale ? 'out' : 'in' }}")+`
  w-transition-scale
    .transition-box(v-if="toggleScale") Scaling transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScaleFade = !toggleScaleFade"
    color="primary"
    outline) Scale fade `+l("{{ toggleScaleFade ? 'out' : 'in' }}")+`
  w-transition-scale-fade
    .transition-box(v-if="toggleScaleFade") Scaling & fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleBounce = !toggleBounce"
    color="primary"
    outline) Bounce `+l("{{ toggleBounce ? 'out' : 'in' }}")+`
  w-transition-bounce
    .transition-box(v-if="toggleBounce") Bouncing transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleTwist = !toggleTwist"
    color="primary"
    outline) Twist `+l("{{ toggleTwist ? 'out' : 'in' }}")+`
  w-transition-twist
    .transition-box(v-if="toggleTwist") Twisting transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandX = !toggleExpandX"
    color="primary"
    outline) `+l("{{ toggleExpandX ? 'Collapse' : 'Expand' }}")+` X
  w-transition-expand(x)
    .transition-box.text-nowrap(v-if="toggleExpandX") X-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandY = !toggleExpandY"
    color="primary"
    outline) `+l("{{ toggleExpandY ? 'Collapse' : 'Expand' }}")+` Y
  w-transition-expand(y)
    .transition-box(v-if="toggleExpandY") Y-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline) `+l("{{ toggleExpandXY ? 'Collapse' : 'Expand' }}")+` X & Y
  w-transition-expand
    .transition-box.text-nowrap(v-if="toggleExpandXY") X & Y expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeDown = !toggleSlideFadeDown"
    color="primary"
    outline) Slide fade `+l("{{ toggleSlideFadeDown ? 'up' : 'down' }}")+`
  w-transition-slide-fade
    .transition-box.text-nowrap(v-if="toggleSlideFadeDown") Slide fade down transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeRight = !toggleSlideFadeRight"
    color="primary"
    outline) Slide fade `+l("{{ toggleSlideFadeRight ? 'left' : 'right' }}")+`
  w-transition-slide-fade(right)
    .transition-box.text-nowrap(v-if="toggleSlideFadeRight") Slide fade right transition
`)])),html:t(()=>n[28]||(n[28]=[i(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleFade = !toggleFade"
    color="primary"
    outline>
    Fade `+l("{{ toggleFade ? 'out' : 'in' }}")+`
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
    Scale `+l("{{ toggleScale ? 'out' : 'in' }}")+`
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
    Scale fade `+l("{{ toggleScaleFade ? 'out' : 'in' }}")+`
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
    Bounce `+l("{{ toggleBounce ? 'out' : 'in' }}")+`
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
    Twist `+l("{{ toggleTwist ? 'out' : 'in' }}")+`
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
    `+l("{{ toggleExpandX ? 'Collapse' : 'Expand' }}")+` X
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
    `+l("{{ toggleExpandY ? 'Collapse' : 'Expand' }}")+` Y
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
    `+l("{{ toggleExpandXY ? 'Collapse' : 'Expand' }}")+` X & Y
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
    Slide fade `+l("{{ toggleSlideFadeDown ? 'up' : 'down' }}")+`
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
    Slide fade `+l("{{ toggleSlideFadeRight ? 'left' : 'right' }}")+`
  </w-button>
  <w-transition-slide-fade right>
    <div class="transition-box text-nowrap" v-if="toggleSlideFadeRight">Slide fade down transition</div>
  </w-transition-slide-fade>
</w-flex>
`)])),js:t(()=>n[29]||(n[29]=[i(`data: () => ({
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
`)])),css:t(()=>n[30]||(n[30]=[i(`.transition-toggle {
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
`)])),default:t(()=>[o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[0]||(n[0]=u=>e.toggleFade=!e.toggleFade),color:"primary",outline:""},{default:t(()=>[i("Fade "+l(e.toggleFade?"out":"in"),1)]),_:1}),o(E,null,{default:t(()=>[e.toggleFade?(d(),r("div",V,"Fading transition")):w("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[1]||(n[1]=u=>e.toggleScale=!e.toggleScale),color:"primary",outline:""},{default:t(()=>[i("Scale "+l(e.toggleScale?"out":"in"),1)]),_:1}),o(F,null,{default:t(()=>[e.toggleScale?(d(),r("div",H,"Scaling transition")):w("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[2]||(n[2]=u=>e.toggleScaleFade=!e.toggleScaleFade),color:"primary",outline:""},{default:t(()=>[i("Scale fade "+l(e.toggleScaleFade?"out":"in"),1)]),_:1}),o(Y,null,{default:t(()=>[e.toggleScaleFade?(d(),r("div",N,"Scaling & fading transition")):w("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[3]||(n[3]=u=>e.toggleBounce=!e.toggleBounce),color:"primary",outline:""},{default:t(()=>[i("Bounce "+l(e.toggleBounce?"out":"in"),1)]),_:1}),o(X,null,{default:t(()=>[e.toggleBounce?(d(),r("div",j,"Bouncing transition")):w("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[4]||(n[4]=u=>e.toggleTwist=!e.toggleTwist),color:"primary",outline:""},{default:t(()=>[i("Twist "+l(e.toggleTwist?"out":"in"),1)]),_:1}),o(h,null,{default:t(()=>[e.toggleTwist?(d(),r("div",A,"Twisting transition")):w("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[5]||(n[5]=u=>e.toggleExpandX=!e.toggleExpandX),color:"primary",outline:""},{default:t(()=>[i(l(e.toggleExpandX?"Collapse":"Expand")+" X",1)]),_:1}),o(x,{x:""},{default:t(()=>[e.toggleExpandX?(d(),r("div",P,"X-expanding transition")):w("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[6]||(n[6]=u=>e.toggleExpandY=!e.toggleExpandY),color:"primary",outline:""},{default:t(()=>[i(l(e.toggleExpandY?"Collapse":"Expand")+" Y",1)]),_:1}),o(x,{y:""},{default:t(()=>[e.toggleExpandY?(d(),r("div",I,"Y-expanding transition")):w("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[7]||(n[7]=u=>e.toggleExpandXY=!e.toggleExpandXY),color:"primary",outline:""},{default:t(()=>[i(l(e.toggleExpandXY?"Collapse":"Expand")+" X & Y",1)]),_:1}),o(x,null,{default:t(()=>[e.toggleExpandXY?(d(),r("div",L,"X & Y expanding transition")):w("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[8]||(n[8]=u=>e.toggleSlideFadeDown=!e.toggleSlideFadeDown),color:"primary",outline:""},{default:t(()=>[i("Slide fade "+l(e.toggleSlideFadeDown?"up":"down"),1)]),_:1}),o(v,null,{default:t(()=>[e.toggleSlideFadeDown?(d(),r("div",M,"Slide fade down transition")):w("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[9]||(n[9]=u=>e.toggleSlideFadeRight=!e.toggleSlideFadeRight),color:"primary",outline:""},{default:t(()=>[i("Slide fade "+l(e.toggleSlideFadeRight?"left":"right"),1)]),_:1}),o(v,{right:""},{default:t(()=>[e.toggleSlideFadeRight?(d(),r("div",U,"Slide fade right transition")):w("",!0)]),_:1})]),_:1})]),_:1}),n[54]||(n[54]=S(`<p><strong class="mr1">Note:</strong>the <span class="code">slide-fade</span> transition take the direction in parameter, e.g. <span class="code">left</span>,
<span class="code">right</span>, <span class="code">up</span>, <span class="code">down</span> and defaults to <span class="code">down</span>.</p>`,1)),o(f,{h2:"",slug:"the-expand-transition"},{default:t(()=>n[31]||(n[31]=[i("The "),a("span",{class:"code"},"expand",-1),i(" transition")])),_:1}),n[55]||(n[55]=a("p",null,`The great thing with Wave UI's expand transition is that it also animates any margin or padding on the
transitioning element! Look at this one:`,-1)),o(c,null,{pug:t(()=>[i(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY2 = !toggleExpandXY2"
    color="primary"
    outline
    width="7.3em") `+l(e.toggleExpandXY2?"Collapse":"Expand")+` X & Y
  w-transition-expand(:duration="2000")
    .transition-box.pa6.ma10.yellow-light5--bg(
      v-if="toggleExpandXY2"
      style="width: auto")
      .amber-light4--bg.black.pa2(style="overflow: hidden;white-space: nowrap;width: 200px")
        | X & Y expanding transition`,1)]),html:t(()=>[i(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline
    width="7.3em">
    `+l(e.toggleExpandXY?"Collapse":"Expand")+` X & Y
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
</w-flex>`,1)]),js:t(()=>n[33]||(n[33]=[i(`data: () => ({
  toggleExpandXY: false
})`)])),css:t(()=>n[34]||(n[34]=[i(`.transition-toggle {margin: 12px 24px 12px 0;}

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
`)])),default:t(()=>[o(p,{"align-center":""},{default:t(()=>[o(g,{class:"transition-toggle",onClick:n[10]||(n[10]=u=>e.toggleExpandXY2=!e.toggleExpandXY2),color:"primary",outline:"",width:"7.3em"},{default:t(()=>[i(l(e.toggleExpandXY2?"Collapse":"Expand")+" X & Y",1)]),_:1}),o(x,{duration:2e3},{default:t(()=>[e.toggleExpandXY2?(d(),r("div",W,n[32]||(n[32]=[a("div",{class:"amber-light4--bg black pa2",style:{overflow:"hidden","white-space":"nowrap",width:"200px"}},"X & Y expanding transition",-1)]))):w("",!0)]),_:1})]),_:1})]),_:1}),o(m,{tip:""},{default:t(()=>n[35]||(n[35]=[i(`When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while
the animation, like in the above example.
To do so, you can add the `),a("span",{class:"code"},"text-nowrap",-1),i(` class on the element being transitioned.
`)])),_:1}),o(f,{h2:"",slug:"the-slide-transition"},{default:t(()=>n[36]||(n[36]=[i("The "),a("span",{class:"code"},"slide",-1),i(" transition")])),_:1}),n[56]||(n[56]=a("p",null,[i(`The slide transition is only designed for elements sliding from outside the view into the view or
vice-versa, they will slide from 0% visibility to 100% visibility.`),a("br"),i(`
It works well for full screen elements or elements that are in a hidden-overflow container like
in this example.`)],-1)),o(c,null,{pug:t(()=>n[38]||(n[38]=[i(`div(style="height: 90px;overflow: hidden;padding: 4px")
  w-button.mb2(@click="showCard = !showCard").
    `+l("{{ showCard ? 'Hide' : 'Show' }}")+` Card
  w-transition-slide(left)
    w-card.primary-light3--bg.white(v-if="showCard")
      .title3.mb0 A sliding card.`)])),html:t(()=>n[39]||(n[39]=[i(`<div style="height: 90px;overflow: hidden;padding: 4px">
  <w-button class="mb2" @click="showCard = !showCard">
    `+l("{{ showCard ? 'Hide' : 'Show' }}")+` Card
  </w-button>
  <w-transition-slide left>
    <w-card v-if="showCard" class="primary-light3--bg white">
      <div class="title3">A sliding card.</div>
    </w-card>
  </w-transition-slide>
</div>`)])),js:t(()=>n[40]||(n[40]=[i(`data: () => ({
  showCard: false
})
`)])),default:t(()=>[a("div",J,[o(g,{class:"mb2",onClick:n[11]||(n[11]=u=>e.showCard=!e.showCard)},{default:t(()=>[i(l(e.showCard?"Hide":"Show")+" Card",1)]),_:1}),o(T,{left:""},{default:t(()=>[e.showCard?(d(),$(C,{key:0,class:"primary-light3--bg white sliding-card"},{default:t(()=>n[37]||(n[37]=[a("div",{class:"title3 mb0"},"A sliding card.",-1)])),_:1})):w("",!0)]),_:1})])]),_:1}),o(f,{h2:""},{default:t(()=>n[41]||(n[41]=[i("Transition duration")])),_:1}),n[57]||(n[57]=a("p",null,[i(`You can easily override the default transition/animation duration by setting an explicit
CSS transition/animation duration on the element being transitioned:
`),a("code",null,'style="animation-duration: 3s"'),i(".")],-1)),n[58]||(n[58]=a("p",null,[i("The expand transition is JavaScript driven: it accepts a "),a("code",null,"duration"),i(` parameter in milliseconds.
So you don't need to override the duration from a CSS rule.
`)],-1)),o(m,{class:"mt12",warning:""},{default:t(()=>[n[44]||(n[44]=i("Be aware that when using ")),n[45]||(n[45]=a("code",null,"v-if",-1)),n[46]||(n[46]=i(`, the transitions unmount components as soon as the
transition starts the leave phase (`)),n[47]||(n[47]=a("code",null,"@before-leave",-1)),n[48]||(n[48]=i(" and not ")),n[49]||(n[49]=a("code",null,"@after-leave",-1)),n[50]||(n[50]=i(`).
`)),n[51]||(n[51]=a("br",null,null,-1)),n[52]||(n[52]=i("This is by design in Vue:")),a("a",q,[n[43]||(n[43]=i("Unmounted hooks should run with afterLeave (#994)")),o(B,{class:"ml1"},{default:t(()=>n[42]||(n[42]=[i("mdi mdi-open-in-new")])),_:1})])]),_:1})])}const G={data:()=>({toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1})},nn=D(G,[["render",z]]);export{nn as default};
