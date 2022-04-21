import{r as s,o as d,f as r,a as o,w as n,b as l,b5 as b,bo as v,e as t,h as i,d as c,c as B,i as S,_ as $}from"./index.98731952.js";const D=t("Transitions"),R=S('<p>Here is a list of all the available transition components.</p><ul><li><code>w-transition-fade</code></li><li class="mt1"><code>w-transition-scale</code></li><li class="mt1"><code>w-transition-scale-fade</code></li><li class="mt1"><code>w-transition-bounce</code></li><li class="mt1"><code>w-transition-twist</code></li><li class="mt1"><code>w-transition-expand</code></li><li class="mt1"><code>w-transition-slide</code></li><li class="mt1"><code>w-transition-slide-fade</code></li></ul>',2),H=t(`The transitions (based on
`),N=l("a",{href:"https://vuejs.org/v2/guide/transitions.html",target:"_blank"},"Vue native transitions",-1),V=t(`)
work with element toggling using `),j=l("code",null,"v-if",-1),A=t(" or "),P=l("code",null,"v-show",-1),I=t("."),L=l("br",null,null,-1),U=t("Simple example (with "),W=l("code",null,"show",-1),J=t(" a boolean variable):"),q={class:"w-flex"},z=t(`w-transition-fade
  span(v-if="show") Hello!`),G=t(`<w-transition-fade>
  <span v-if="show">Hello!</span>
</w-transition-fade>
`),K=t("Transitions showcase"),M={key:0,class:"transition-box"},O={key:0,class:"transition-box"},Q={key:0,class:"transition-box"},Z={key:0,class:"transition-box"},nn={key:0,class:"transition-box"},tn={key:0,class:"transition-box text-nowrap"},en={key:0,class:"transition-box"},on={key:0,class:"transition-box text-nowrap"},an={key:0,class:"transition-box text-nowrap"},ln={key:0,class:"transition-box text-nowrap"},sn=t(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleFade = !toggleFade"
    color="primary"
    outline) Fade `+i("{{ toggleFade ? 'out' : 'in' }}")+`
  w-transition-fade
    .transition-box(v-if="toggleFade") Fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScale = !toggleScale"
    color="primary"
    outline) Scale `+i("{{ toggleScale ? 'out' : 'in' }}")+`
  w-transition-scale
    .transition-box(v-if="toggleScale") Scaling transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleScaleFade = !toggleScaleFade"
    color="primary"
    outline) Scale fade `+i("{{ toggleScaleFade ? 'out' : 'in' }}")+`
  w-transition-scale-fade
    .transition-box(v-if="toggleScaleFade") Scaling & fading transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleBounce = !toggleBounce"
    color="primary"
    outline) Bounce `+i("{{ toggleBounce ? 'out' : 'in' }}")+`
  w-transition-bounce
    .transition-box(v-if="toggleBounce") Bouncing transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleTwist = !toggleTwist"
    color="primary"
    outline) Twist `+i("{{ toggleTwist ? 'out' : 'in' }}")+`
  w-transition-twist
    .transition-box(v-if="toggleTwist") Twisting transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandX = !toggleExpandX"
    color="primary"
    outline) `+i("{{ toggleExpandX ? 'Collapse' : 'Expand' }}")+` X
  w-transition-expand(x)
    .transition-box.text-nowrap(v-if="toggleExpandX") X-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandY = !toggleExpandY"
    color="primary"
    outline) `+i("{{ toggleExpandY ? 'Collapse' : 'Expand' }}")+` Y
  w-transition-expand(y)
    .transition-box(v-if="toggleExpandY") Y-expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline) `+i("{{ toggleExpandXY ? 'Collapse' : 'Expand' }}")+` X & Y
  w-transition-expand
    .transition-box.text-nowrap(v-if="toggleExpandXY") X & Y expanding transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeDown = !toggleSlideFadeDown"
    color="primary"
    outline) Slide fade `+i("{{ toggleSlideFadeDown ? 'up' : 'down' }}")+`
  w-transition-slide-fade
    .transition-box.text-nowrap(v-if="toggleSlideFadeDown") Slide fade down transition

w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleSlideFadeRight = !toggleSlideFadeRight"
    color="primary"
    outline) Slide fade `+i("{{ toggleSlideFadeRight ? 'left' : 'right' }}")+`
  w-transition-slide-fade(right)
    .transition-box.text-nowrap(v-if="toggleSlideFadeRight") Slide fade right transition
`),dn=t(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleFade = !toggleFade"
    color="primary"
    outline>
    Fade `+i("{{ toggleFade ? 'out' : 'in' }}")+`
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
    Scale `+i("{{ toggleScale ? 'out' : 'in' }}")+`
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
    Scale fade `+i("{{ toggleScaleFade ? 'out' : 'in' }}")+`
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
    Bounce `+i("{{ toggleBounce ? 'out' : 'in' }}")+`
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
    Twist `+i("{{ toggleTwist ? 'out' : 'in' }}")+`
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
    `+i("{{ toggleExpandX ? 'Collapse' : 'Expand' }}")+` X
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
    `+i("{{ toggleExpandY ? 'Collapse' : 'Expand' }}")+` Y
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
    `+i("{{ toggleExpandXY ? 'Collapse' : 'Expand' }}")+` X & Y
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
    Slide fade `+i("{{ toggleSlideFadeDown ? 'up' : 'down' }}")+`
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
    Slide fade `+i("{{ toggleSlideFadeRight ? 'left' : 'right' }}")+`
  </w-button>
  <w-transition-slide-fade right>
    <div class="transition-box text-nowrap" v-if="toggleSlideFadeRight">Slide fade down transition</div>
  </w-transition-slide-fade>
</w-flex>
`),gn=t(`data: () => ({
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
`),rn=t(`.transition-toggle {
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
`),cn=S(`<p><strong class="mr1">Note:</strong>the <span class="code">slide-fade</span> transition take the direction in parameter, e.g. <span class="code">left</span>,
<span class="code">right</span>, <span class="code">up</span>, <span class="code">down</span> and defaults to <span class="code">down</span>.</p>`,1),pn=t("The "),wn=l("span",{class:"code"},"expand",-1),un=t(" transition"),fn=l("p",null,`The great thing with Wave UI's expand transition is that it also animates any margin or padding on the
transitioning element! Look at this one:`,-1),hn={key:0,class:"transition-box pa6 ma10 yellow-light5--bg",style:{width:"auto"}},_n=l("div",{class:"amber-light4--bg pa2",style:{overflow:"hidden","white-space":"nowrap",width:"200px"}},"X & Y expanding transition",-1),xn=[_n],mn=t(`data: () => ({
  toggleExpandXY: false
})`),bn=t(`.transition-toggle {margin: 12px 24px 12px 0;}

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
`),vn=t(`When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while
the animation, like in the above example.
To do so, you can add the `),Sn=l("span",{class:"code"},"text-nowrap",-1),yn=t(` class on the element being transitioned.
`),En=t("The "),kn=l("span",{class:"code"},"slide",-1),Fn=t(" transition"),Yn=l("p",null,[t(`The slide transition is only designed for elements sliding from outside the view into the view or
vice-versa, they will slide from 0% visibility to 100% visibility.`),l("br"),t(`
It works well for full screen elements or elements that are in a hidden-overflow container like
in this example.`)],-1),Xn={style:{height:"90px",overflow:"hidden",padding:"4px"}},Cn=l("div",{class:"title3 mb0"},"A sliding card.",-1),Tn=t(`div(style="height: 90px;overflow: hidden;padding: 4px")
  w-button.mb2(@click="showCard = !showCard").
    `+i("{{ showCard ? 'Hide' : 'Show' }}")+` Card
  w-transition-slide(left)
    w-card.primary-light3--bg.white(v-if="showCard")
      .title3.mb0 A sliding card.`),Bn=t(`<div style="height: 90px;overflow: hidden;padding: 4px">
  <w-button class="mb2" @click="showCard = !showCard">
    `+i("{{ showCard ? 'Hide' : 'Show' }}")+` Card
  </w-button>
  <w-transition-slide left>
    <w-card v-if="showCard" class="primary-light3--bg white">
      <div class="title3">A sliding card.</div>
    </w-card>
  </w-transition-slide>
</div>`),$n=t(`data: () => ({
  showCard: false
})
`),Dn=t("Transition duration"),Rn=l("p",null,[t(`You can easily override the default transition/animation duration by setting an explicit
CSS transition/animation duration on the element being transitioned:
`),l("code",null,'style="animation-duration: 3s"'),t(".")],-1),Hn=l("p",null,[t("The expand transition is JavaScript driven: it accepts a "),l("code",null,"duration"),t(` parameter in milliseconds.
So you don't need to override the duration from a CSS rule.
`)],-1),Nn=t("Be aware that when using "),Vn=l("code",null,"v-if",-1),jn=t(`, the transitions unmount components as soon as the
transition starts the leave phase (`),An=l("code",null,"@before-leave",-1),Pn=t(" and not "),In=l("code",null,"@after-leave",-1),Ln=t(`).
`),Un=l("br",null,null,-1),Wn=t("This is by design:"),Jn={class:"ml1",href:"https://github.com/vuejs/core/issues/994"},qn=t("Unmounted hooks should run with afterLeave (#994)"),zn=t("mdi mdi-open-in-new");function Gn(e,a,Mn,On,Qn,Zn){const u=s("title-link"),x=s("ssh-pre"),h=s("alert"),g=s("w-button"),y=s("w-transition-fade"),p=s("w-flex"),E=s("w-transition-scale"),k=s("w-transition-scale-fade"),F=s("w-transition-bounce"),Y=s("w-transition-twist"),f=s("w-transition-expand"),m=s("w-transition-slide-fade"),_=s("example"),X=s("w-card"),C=s("w-transition-slide"),T=s("w-icon");return d(),r("main",null,[o(u,{class:"mt4",h1:""},{default:n(()=>[D]),_:1}),R,o(h,{info:""},{default:n(()=>[H,N,V,j,A,P,I,L,U,W,J,l("div",q,[b(o(x,{class:"mb0",language:"pug",label:"Pug"},{default:n(()=>[z]),_:1},512),[[v,e.$store.state.usePug]]),b(o(x,{class:"mb0",language:"html-vue"},{default:n(()=>[G]),_:1},512),[[v,!e.$store.state.usePug]])])]),_:1}),o(u,{h2:""},{default:n(()=>[K]),_:1}),o(_,null,{pug:n(()=>[sn]),html:n(()=>[dn]),js:n(()=>[gn]),css:n(()=>[rn]),default:n(()=>[o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[0]||(a[0]=w=>e.toggleFade=!e.toggleFade),color:"primary",outline:""},{default:n(()=>[t("Fade "+i(e.toggleFade?"out":"in"),1)]),_:1}),o(y,null,{default:n(()=>[e.toggleFade?(d(),r("div",M,"Fading transition")):c("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[1]||(a[1]=w=>e.toggleScale=!e.toggleScale),color:"primary",outline:""},{default:n(()=>[t("Scale "+i(e.toggleScale?"out":"in"),1)]),_:1}),o(E,null,{default:n(()=>[e.toggleScale?(d(),r("div",O,"Scaling transition")):c("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[2]||(a[2]=w=>e.toggleScaleFade=!e.toggleScaleFade),color:"primary",outline:""},{default:n(()=>[t("Scale fade "+i(e.toggleScaleFade?"out":"in"),1)]),_:1}),o(k,null,{default:n(()=>[e.toggleScaleFade?(d(),r("div",Q,"Scaling & fading transition")):c("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[3]||(a[3]=w=>e.toggleBounce=!e.toggleBounce),color:"primary",outline:""},{default:n(()=>[t("Bounce "+i(e.toggleBounce?"out":"in"),1)]),_:1}),o(F,null,{default:n(()=>[e.toggleBounce?(d(),r("div",Z,"Bouncing transition")):c("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[4]||(a[4]=w=>e.toggleTwist=!e.toggleTwist),color:"primary",outline:""},{default:n(()=>[t("Twist "+i(e.toggleTwist?"out":"in"),1)]),_:1}),o(Y,null,{default:n(()=>[e.toggleTwist?(d(),r("div",nn,"Twisting transition")):c("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[5]||(a[5]=w=>e.toggleExpandX=!e.toggleExpandX),color:"primary",outline:""},{default:n(()=>[t(i(e.toggleExpandX?"Collapse":"Expand")+" X",1)]),_:1}),o(f,{x:""},{default:n(()=>[e.toggleExpandX?(d(),r("div",tn,"X-expanding transition")):c("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[6]||(a[6]=w=>e.toggleExpandY=!e.toggleExpandY),color:"primary",outline:""},{default:n(()=>[t(i(e.toggleExpandY?"Collapse":"Expand")+" Y",1)]),_:1}),o(f,{y:""},{default:n(()=>[e.toggleExpandY?(d(),r("div",en,"Y-expanding transition")):c("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[7]||(a[7]=w=>e.toggleExpandXY=!e.toggleExpandXY),color:"primary",outline:""},{default:n(()=>[t(i(e.toggleExpandXY?"Collapse":"Expand")+" X & Y",1)]),_:1}),o(f,null,{default:n(()=>[e.toggleExpandXY?(d(),r("div",on,"X & Y expanding transition")):c("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[8]||(a[8]=w=>e.toggleSlideFadeDown=!e.toggleSlideFadeDown),color:"primary",outline:""},{default:n(()=>[t("Slide fade "+i(e.toggleSlideFadeDown?"up":"down"),1)]),_:1}),o(m,null,{default:n(()=>[e.toggleSlideFadeDown?(d(),r("div",an,"Slide fade down transition")):c("",!0)]),_:1})]),_:1}),o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[9]||(a[9]=w=>e.toggleSlideFadeRight=!e.toggleSlideFadeRight),color:"primary",outline:""},{default:n(()=>[t("Slide fade "+i(e.toggleSlideFadeRight?"left":"right"),1)]),_:1}),o(m,{right:""},{default:n(()=>[e.toggleSlideFadeRight?(d(),r("div",ln,"Slide fade right transition")):c("",!0)]),_:1})]),_:1})]),_:1}),cn,o(u,{h2:"",slug:"the-expand-transition"},{default:n(()=>[pn,wn,un]),_:1}),fn,o(_,null,{pug:n(()=>[t(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY2 = !toggleExpandXY2"
    color="primary"
    outline
    width="7.3em") `+i(e.toggleExpandXY2?"Collapse":"Expand")+` X & Y
  w-transition-expand(:duration="2000")
    .transition-box.pa6.ma10.yellow-light5--bg(
      v-if="toggleExpandXY2"
      style="width: auto")
      .amber-light4--bg.pa2(style="overflow: hidden;white-space: nowrap;width: 200px")
        | X & Y expanding transition`,1)]),html:n(()=>[t(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline
    width="7.3em">
    `+i(e.toggleExpandXY?"Collapse":"Expand")+` X & Y
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
</w-flex>`,1)]),js:n(()=>[mn]),css:n(()=>[bn]),default:n(()=>[o(p,{"align-center":""},{default:n(()=>[o(g,{class:"transition-toggle",onClick:a[10]||(a[10]=w=>e.toggleExpandXY2=!e.toggleExpandXY2),color:"primary",outline:"",width:"7.3em"},{default:n(()=>[t(i(e.toggleExpandXY2?"Collapse":"Expand")+" X & Y",1)]),_:1}),o(f,{duration:2e3},{default:n(()=>[e.toggleExpandXY2?(d(),r("div",hn,xn)):c("",!0)]),_:1})]),_:1})]),_:1}),o(h,{tip:""},{default:n(()=>[vn,Sn,yn]),_:1}),o(u,{h2:"",slug:"the-slide-transition"},{default:n(()=>[En,kn,Fn]),_:1}),Yn,o(_,null,{pug:n(()=>[Tn]),html:n(()=>[Bn]),js:n(()=>[$n]),default:n(()=>[l("div",Xn,[o(g,{class:"mb2",onClick:a[11]||(a[11]=w=>e.showCard=!e.showCard)},{default:n(()=>[t(i(e.showCard?"Hide":"Show")+" Card",1)]),_:1}),o(C,{left:""},{default:n(()=>[e.showCard?(d(),B(X,{key:0,class:"primary-light3--bg white"},{default:n(()=>[Cn]),_:1})):c("",!0)]),_:1})])]),_:1}),o(u,{h2:""},{default:n(()=>[Dn]),_:1}),Rn,Hn,o(h,{class:"mt12",warning:""},{default:n(()=>[Nn,Vn,jn,An,Pn,In,Ln,Un,Wn,l("a",Jn,[qn,o(T,{class:"ml1"},{default:n(()=>[zn]),_:1})])]),_:1})])}const Kn={data:()=>({toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1})};var tt=$(Kn,[["render",Gn]]);export{tt as default};
