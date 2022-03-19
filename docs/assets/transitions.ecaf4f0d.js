import{r as s,o as d,e as r,f as e,w as n,g as l,h as b,v,i as o,t as i,j as c,c as T,N as S}from"./vendor.e64646cc.js";import{_ as B}from"./index.cb32932c.js";const $=o("Transitions"),D=S('<p>Here is a list of all the available transition components.</p><ul><li><code>w-transition-fade</code></li><li class="mt1"><code>w-transition-scale</code></li><li class="mt1"><code>w-transition-scale-fade</code></li><li class="mt1"><code>w-transition-bounce</code></li><li class="mt1"><code>w-transition-twist</code></li><li class="mt1"><code>w-transition-expand</code></li><li class="mt1"><code>w-transition-slide</code></li><li class="mt1"><code>w-transition-slide-fade</code></li></ul>',2),R=o(`The transitions (based on
`),j=l("a",{href:"https://vuejs.org/v2/guide/transitions.html",target:"_blank"},"Vue native transitions",-1),N=o(`)
work with element toggling using `),H=l("code",null,"v-if",-1),V=o(" or "),A=l("code",null,"v-show",-1),P=o("."),I=l("br",null,null,-1),W=o("Simple example (with "),J=l("code",null,"show",-1),L=o(" a boolean variable):"),U={class:"w-flex"},q=o(`w-transition-fade
  span(v-if="show") Hello!`),z=o(`<w-transition-fade>
  <span v-if="show">Hello!</span>
</w-transition-fade>
`),G=o("Transitions showcase"),K={key:0,class:"transition-box"},M={key:0,class:"transition-box"},O={key:0,class:"transition-box"},Q={key:0,class:"transition-box"},Z={key:0,class:"transition-box"},nn={key:0,class:"transition-box text-nowrap"},tn={key:0,class:"transition-box"},en={key:0,class:"transition-box text-nowrap"},on={key:0,class:"transition-box text-nowrap"},an={key:0,class:"transition-box text-nowrap"},ln=o(`w-flex(align-center)
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
`),sn=o(`<w-flex align-center>
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
`),dn=o(`data: () => ({
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
`),gn=o(`.transition-toggle {
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
`),rn=S(`<p><strong class="mr1">Note:</strong>the <span class="code">slide-fade</span> transition take the direction in parameter, e.g. <span class="code">left</span>,
<span class="code">right</span>, <span class="code">up</span>, <span class="code">down</span> and defaults to <span class="code">down</span>.</p>`,1),cn=o("The "),pn=l("span",{class:"code"},"expand",-1),wn=o(" transition"),un=l("p",null,`The great thing with Wave UI's expand transition is that it also animates any margin or padding on the
transitioning element! Look at this one:`,-1),fn={key:0,class:"transition-box pa6 ma10 yellow-light5--bg",style:{width:"auto"}},xn=l("div",{class:"amber-light4--bg pa2",style:{overflow:"hidden","white-space":"nowrap",width:"200px"}},"X & Y expanding transition",-1),hn=[xn],_n=o(`data: () => ({
  toggleExpandXY: false
})`),mn=o(`.transition-toggle {margin: 12px 24px 12px 0;}

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
`),bn=o(`When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while
the animation, like in the above example.
To do so, you can add the `),vn=l("span",{class:"code"},"text-nowrap",-1),Sn=o(` class on the element being transitioned.
`),yn=o("The "),En=l("span",{class:"code"},"slide",-1),kn=o(" transition"),Fn=l("p",null,[o(`The slide transition is only designed for elements sliding from outside the view into the view or
vice-versa, they will slide from 0% visibility to 100% visibility.`),l("br"),o(`
It works well for full screen elements or elements that are in a hidden-overflow container like
in this example.`)],-1),Yn={style:{height:"90px",overflow:"hidden",padding:"4px"}},Xn=l("div",{class:"title3 mb0"},"A sliding card.",-1),Cn=o(`div(style="height: 90px;overflow: hidden;padding: 4px")
  w-button.mb2(@click="showCard = !showCard").
    `+i("{{ showCard ? 'Hide' : 'Show' }}")+` Card
  w-transition-slide(left)
    w-card.primary-light3--bg.white(v-if="showCard")
      .title3.mb0 A sliding card.`),Tn=o(`<div style="height: 90px;overflow: hidden;padding: 4px">
  <w-button class="mb2" @click="showCard = !showCard">
    `+i("{{ showCard ? 'Hide' : 'Show' }}")+` Card
  </w-button>
  <w-transition-slide left>
    <w-card v-if="showCard" class="primary-light3--bg white">
      <div class="title3">A sliding card.</div>
    </w-card>
  </w-transition-slide>
</div>`),Bn=o(`data: () => ({
  showCard: false
})
`),$n=o("Transition duration"),Dn=l("p",null,[o(`You can easily override the default transition/animation duration by setting an explicit
CSS transition/animation duration on the element being transitioned:
`),l("span",{class:"code"},'style="animation-duration: 3s"'),o(".")],-1),Rn=l("p",null,`The expand transition being fully Javascript driven, it accepts a duration parameter in milliseconds.
So you don't need to override the duration from a CSS rule.`,-1);function jn(t,a,Hn,Vn,An,Pn){const u=s("title-link"),h=s("ssh-pre"),_=s("alert"),g=s("w-button"),y=s("w-transition-fade"),p=s("w-flex"),E=s("w-transition-scale"),k=s("w-transition-scale-fade"),F=s("w-transition-bounce"),Y=s("w-transition-twist"),f=s("w-transition-expand"),m=s("w-transition-slide-fade"),x=s("example"),X=s("w-card"),C=s("w-transition-slide");return d(),r("main",null,[e(u,{class:"mt4",h1:""},{default:n(()=>[$]),_:1}),D,e(_,{info:""},{default:n(()=>[R,j,N,H,V,A,P,I,W,J,L,l("div",U,[b(e(h,{class:"mb0",language:"pug",label:"Pug"},{default:n(()=>[q]),_:1},512),[[v,t.$store.state.usePug]]),b(e(h,{class:"mb0",language:"html-vue"},{default:n(()=>[z]),_:1},512),[[v,!t.$store.state.usePug]])])]),_:1}),e(u,{h2:""},{default:n(()=>[G]),_:1}),e(x,null,{pug:n(()=>[ln]),html:n(()=>[sn]),js:n(()=>[dn]),css:n(()=>[gn]),default:n(()=>[e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[0]||(a[0]=w=>t.toggleFade=!t.toggleFade),color:"primary",outline:""},{default:n(()=>[o("Fade "+i(t.toggleFade?"out":"in"),1)]),_:1}),e(y,null,{default:n(()=>[t.toggleFade?(d(),r("div",K,"Fading transition")):c("",!0)]),_:1})]),_:1}),e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[1]||(a[1]=w=>t.toggleScale=!t.toggleScale),color:"primary",outline:""},{default:n(()=>[o("Scale "+i(t.toggleScale?"out":"in"),1)]),_:1}),e(E,null,{default:n(()=>[t.toggleScale?(d(),r("div",M,"Scaling transition")):c("",!0)]),_:1})]),_:1}),e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[2]||(a[2]=w=>t.toggleScaleFade=!t.toggleScaleFade),color:"primary",outline:""},{default:n(()=>[o("Scale fade "+i(t.toggleScaleFade?"out":"in"),1)]),_:1}),e(k,null,{default:n(()=>[t.toggleScaleFade?(d(),r("div",O,"Scaling & fading transition")):c("",!0)]),_:1})]),_:1}),e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[3]||(a[3]=w=>t.toggleBounce=!t.toggleBounce),color:"primary",outline:""},{default:n(()=>[o("Bounce "+i(t.toggleBounce?"out":"in"),1)]),_:1}),e(F,null,{default:n(()=>[t.toggleBounce?(d(),r("div",Q,"Bouncing transition")):c("",!0)]),_:1})]),_:1}),e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[4]||(a[4]=w=>t.toggleTwist=!t.toggleTwist),color:"primary",outline:""},{default:n(()=>[o("Twist "+i(t.toggleTwist?"out":"in"),1)]),_:1}),e(Y,null,{default:n(()=>[t.toggleTwist?(d(),r("div",Z,"Twisting transition")):c("",!0)]),_:1})]),_:1}),e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[5]||(a[5]=w=>t.toggleExpandX=!t.toggleExpandX),color:"primary",outline:""},{default:n(()=>[o(i(t.toggleExpandX?"Collapse":"Expand")+" X",1)]),_:1}),e(f,{x:""},{default:n(()=>[t.toggleExpandX?(d(),r("div",nn,"X-expanding transition")):c("",!0)]),_:1})]),_:1}),e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[6]||(a[6]=w=>t.toggleExpandY=!t.toggleExpandY),color:"primary",outline:""},{default:n(()=>[o(i(t.toggleExpandY?"Collapse":"Expand")+" Y",1)]),_:1}),e(f,{y:""},{default:n(()=>[t.toggleExpandY?(d(),r("div",tn,"Y-expanding transition")):c("",!0)]),_:1})]),_:1}),e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[7]||(a[7]=w=>t.toggleExpandXY=!t.toggleExpandXY),color:"primary",outline:""},{default:n(()=>[o(i(t.toggleExpandXY?"Collapse":"Expand")+" X & Y",1)]),_:1}),e(f,null,{default:n(()=>[t.toggleExpandXY?(d(),r("div",en,"X & Y expanding transition")):c("",!0)]),_:1})]),_:1}),e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[8]||(a[8]=w=>t.toggleSlideFadeDown=!t.toggleSlideFadeDown),color:"primary",outline:""},{default:n(()=>[o("Slide fade "+i(t.toggleSlideFadeDown?"up":"down"),1)]),_:1}),e(m,null,{default:n(()=>[t.toggleSlideFadeDown?(d(),r("div",on,"Slide fade down transition")):c("",!0)]),_:1})]),_:1}),e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[9]||(a[9]=w=>t.toggleSlideFadeRight=!t.toggleSlideFadeRight),color:"primary",outline:""},{default:n(()=>[o("Slide fade "+i(t.toggleSlideFadeRight?"left":"right"),1)]),_:1}),e(m,{right:""},{default:n(()=>[t.toggleSlideFadeRight?(d(),r("div",an,"Slide fade right transition")):c("",!0)]),_:1})]),_:1})]),_:1}),rn,e(u,{h2:"",slug:"the-expand-transition"},{default:n(()=>[cn,pn,wn]),_:1}),un,e(x,null,{pug:n(()=>[o(`w-flex(align-center)
  w-button.transition-toggle(
    @click="toggleExpandXY2 = !toggleExpandXY2"
    color="primary"
    outline
    width="7.3em") `+i(t.toggleExpandXY2?"Collapse":"Expand")+` X & Y
  w-transition-expand(:duration="2000")
    .transition-box.pa6.ma10.yellow-light5--bg(
      v-if="toggleExpandXY2"
      style="width: auto")
      .amber-light4--bg.pa2(style="overflow: hidden;white-space: nowrap;width: 200px")
        | X & Y expanding transition`,1)]),html:n(()=>[o(`<w-flex align-center>
  <w-button
    class="transition-toggle"
    @click="toggleExpandXY = !toggleExpandXY"
    color="primary"
    outline
    width="7.3em">
    `+i(t.toggleExpandXY?"Collapse":"Expand")+` X & Y
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
</w-flex>`,1)]),js:n(()=>[_n]),css:n(()=>[mn]),default:n(()=>[e(p,{"align-center":""},{default:n(()=>[e(g,{class:"transition-toggle",onClick:a[10]||(a[10]=w=>t.toggleExpandXY2=!t.toggleExpandXY2),color:"primary",outline:"",width:"7.3em"},{default:n(()=>[o(i(t.toggleExpandXY2?"Collapse":"Expand")+" X & Y",1)]),_:1}),e(f,{duration:2e3},{default:n(()=>[t.toggleExpandXY2?(d(),r("div",fn,hn)):c("",!0)]),_:1})]),_:1})]),_:1}),e(_,{tip:""},{default:n(()=>[bn,vn,Sn]),_:1}),e(u,{h2:"",slug:"the-slide-transition"},{default:n(()=>[yn,En,kn]),_:1}),Fn,e(x,null,{pug:n(()=>[Cn]),html:n(()=>[Tn]),js:n(()=>[Bn]),default:n(()=>[l("div",Yn,[e(g,{class:"mb2",onClick:a[11]||(a[11]=w=>t.showCard=!t.showCard)},{default:n(()=>[o(i(t.showCard?"Hide":"Show")+" Card",1)]),_:1}),e(C,{left:""},{default:n(()=>[t.showCard?(d(),T(X,{key:0,class:"primary-light3--bg white"},{default:n(()=>[Xn]),_:1})):c("",!0)]),_:1})])]),_:1}),e(u,{h2:""},{default:n(()=>[$n]),_:1}),Dn,Rn])}const Nn={data:()=>({toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1})};var Jn=B(Nn,[["render",jn]]);export{Jn as default};
