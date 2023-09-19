import{r,o as s,g as t,a as p,w as n,b as i,F as l,k as c,d as e,t as b,n as w,f as d,h as k,_ as f}from"./index.bf2cfd71.js";const _=e("div",{class:"title3"},"The grid system (using flexbox) is 12-cell based by default.",-1),$=e("p",null,[i(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),e("br"),i(`
You can then assign this created layout to a particular breakpoint.
`)],-1),C=e("ol",null,[e("li",null,[i("Use the "),e("strong",{class:"code"},"w-flex"),i(` component or class on the parent in order to set the
`),e("strong",null,"flex"),i(" context ("),e("code",null,"display: flex"),i(").")]),e("li",null,`Use the predefined classes on the children in order to divide the available width
according to the class in use.
`)],-1),S=k('<fieldset class="w-flex pa4 pt3 amber-light5--bg" style="position:relative;"><legend class="px1 round"><strong class="code amber-dark3">&lt;w-flex&gt;</strong></legend><fieldset class="xs3 light-blue-light5--bg pa3 code"><legend class="light-blue-dark2 px1">div.xs3</legend></fieldset><fieldset class="xs9 light-blue-light5--bg pa3 code ml1"><legend class="light-blue-dark2 px1">div.xs9</legend></fieldset></fieldset><p class="mt6">In this case:</p><ul><li>xs3 represents 3 units of the 12-cell-based grid, which equals to: (100% total width \xF7 12 cells) x 3 = 25%</li><li>xs9 represents 9 units of the 12-cell-based grid, which equals to: (100% total width \xF7 12 cells) x 9 = 75%</li></ul>',3),T=e("p",null,[i("Let's start with a basic example. The following splitting is applied on the "),e("span",{class:"code"},"xs"),i(`
breakpoint and will thus be applied on all the breakpoints.`)],-1),z=e("strong",{class:"code"},"w-flex",-1),N=e("code",null,".w-flex",-1),U=e("div",{class:"xs12 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs12")],-1),V=e("div",{class:"xs6 pa1"},[e("div",{class:"primary--bg py3"},"xs6")],-1),B=e("div",{class:"xs6 pa1"},[e("div",{class:"primary--bg py3"},"xs6")],-1),F={class:"xs4 pa1"},I=e("div",{class:"primary-light1--bg white py3"},"xs4",-1),G=[I],R={class:"xs3 pa1"},q=e("div",{class:"primary-light2--bg white py3"},"xs3",-1),L=[q],M={class:"xs2 pa1"},W=e("div",{class:"primary-light3--bg py3"},"xs2",-1),j=[W],D=e("div",{class:"blue-light4--bg py3"},"xs1",-1),E=[D],H=e("div",{class:"xs1 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs1")],-1),O=e("div",{class:"xs11 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs11")],-1),Y=e("div",{class:"xs2 pa1"},[e("div",{class:"primary--bg py3"},"xs2")],-1),A=e("div",{class:"xs10 pa1"},[e("div",{class:"primary--bg py3"},"xs10")],-1),J=e("div",{class:"xs3 pa1"},[e("div",{class:"primary-light1--bg white py3"},"xs3")],-1),K=e("div",{class:"xs9 pa1"},[e("div",{class:"primary-light1--bg white py3"},"xs9")],-1),P=e("div",{class:"xs4 pa1"},[e("div",{class:"primary-light2--bg white py3"},"xs4")],-1),Q=e("div",{class:"xs8 pa1"},[e("div",{class:"primary-light2--bg white py3"},"xs8")],-1),X=e("div",{class:"xs5 pa1"},[e("div",{class:"primary-light3--bg py3"},"xs5")],-1),Z=e("div",{class:"xs7 pa1"},[e("div",{class:"primary-light3--bg py3"},"xs7")],-1),ee={class:"title2 mt0"},ie=e("em",{class:"grey mt1"},"Resizing your browser will update the current breakpoint.",-1),ae=e("p",null,"For this example, resize your browser and observe the different layout when crossing a breakpoint.",-1),se={class:"xs12 md6 lg4 xl2 pa1"},te={class:"primary-light3--bg py3"},le={class:"xs12 md6 lg4 xl2 pa1"},ne={class:"primary-light3--bg py3"},pe={class:"xs12 md6 lg4 xl2 pa1"},re={class:"primary-light3--bg py3"},de={class:"xs12 md6 lg4 xl2 pa1"},oe={class:"primary-light3--bg py3"},ve={class:"xs12 md6 lg4 xl2 pa1"},me={class:"primary-light3--bg py3"},ce={class:"xs12 md6 lg4 xl2 pa1"},ge={class:"primary-light3--bg py3"},xe=e("strong",{class:"code inherit"},"w-flex",-1),be=e("span",{class:"code inherit"},"gap",-1);function ue(a,he){const o=r("title-link"),y=r("ssh-pre"),g=r("alert"),x=r("w-flex"),v=r("example"),h=r("w-card"),u=r("router-link");return s(),t("main",null,[p(o,{class:"mt4",h1:""},{default:n(()=>[i("Grid system (flexbox)")]),_:1}),_,$,p(g,{info:""},{default:n(()=>[i(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`),p(y,{class:"mb0",language:"js",dark:a.$store.state.darkMode},{default:n(()=>[i(`new WaveUI({
  css: {
    grid: 24
  }
})
`)]),_:1},8,["dark"])]),_:1}),p(o,{h2:""},{default:n(()=>[i("How to use")]),_:1}),p(g,{info:""},{default:n(()=>[i("For this flexbox layout, you need to:"),C]),_:1}),S,p(o,{h2:""},{default:n(()=>[i("Basic grid")]),_:1}),T,p(g,{tip:""},{default:n(()=>[i(`The grid cells must be in a flex context to display inline, you can wrap them in a
`),z,i(" component or "),N,i(` CSS class.
`)]),_:1}),p(v,{class:"hue-on-dark"},{pug:n(()=>[i(`w-flex.text-center(wrap)
  .xs12.pa1
    .primary-dark1--bg.py3 xs12
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs4.pa1(v-for="i in 3")
    .primary-light1--bg.white.py3 xs4
  .xs3.pa1(v-for="i in 4")
    .primary-light2--bg.white.py3 xs3
  .xs2.pa1(v-for="i in 6")
    .primary-light3--bg.py3 xs2
  .xs1.pa1(v-for="i in 12" :key="i")
    .blue-light4--bg.py3 xs1`)]),html:n(()=>[i(`<w-flex wrap class="text-center">
  <div class="xs12 pa1">
    <div class="primary-dark1--bg py3">xs12</div>
  </div>

  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>
  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>

  <div v-for="i in 3" class="xs4 pa1">
    <div class="primary-light1--bg white py3">xs4</div>
  </div>

  <div v-for="i in 4" class="xs3 pa1">
    <div class="primary-light2--bg white py3">xs3</div>
  </div>

  <div v-for="i in 6" class="xs2 pa1">
    <div class="primary-light3--bg py3">xs2</div>
  </div>

  <div v-for="i in 12" :key="i" class="xs1 pa1">
    <div class="blue-light4--bg py3">xs1</div>
  </div>
</w-flex>
`)]),default:n(()=>[p(x,{class:"text-center",wrap:""},{default:n(()=>[U,V,B,(s(),t(l,null,c(3,m=>e("div",F,G)),64)),(s(),t(l,null,c(4,m=>e("div",R,L)),64)),(s(),t(l,null,c(6,m=>e("div",M,j)),64)),(s(),t(l,null,c(12,m=>e("div",{class:"xs1 pa1",key:m},E)),64))]),_:1})]),_:1}),p(v,{class:"mt8 hue-on-dark"},{pug:n(()=>[i(`w-flex.text-center(wrap)
  .xs1.pa1
    .primary-dark1--bg.py3 xs1
  .xs11.pa1
    .primary-dark1--bg.py3 xs11
  .xs2.pa1
    .primary--bg.py3 xs2
  .xs10.pa1
    .primary--bg.py3 xs10
  .xs3.pa1
    .primary-light1--bg.white.py3 xs3
  .xs9.pa1
    .primary-light1--bg.white.py3 xs9
  .xs4.pa1
    .primary-light2--bg.white.py3 xs4
  .xs8.pa1
    .primary-light2--bg.white.py3 xs8
  .xs5.pa1
    .primary-light3--bg.py3 xs5
  .xs7.pa1
    .primary-light3--bg.py3 xs7`)]),html:n(()=>[i(`<w-flex wrap class="text-center">
  <div class="xs1 pa1">
    <div class="primary-dark1--bg py3">xs1</div>
  </div>
  <div class="xs11 pa1">
    <div class="primary-dark1--bg py3">xs11</div>
  </div>

  <div class="xs2 pa1">
    <div class="primary--bg py3">xs2</div>
  </div>
  <div class="xs10 pa1">
    <div class="primary--bg py3">xs10</div>
  </div>

  <div class="xs3 pa1">
    <div class="primary-light1--bg white py3">xs3</div>
  </div>
  <div class="xs9 pa1">
    <div class="primary-light1--bg white py3">xs9</div>
  </div>

  <div class="xs4 pa1">
    <div class="primary-light2--bg white py3">xs4</div>
  </div>
  <div class="xs8 pa1">
    <div class="primary-light2--bg white py3">xs8</div>
  </div>

  <div class="xs5 pa1">
    <div class="primary-light3--bg py3">xs5</div>
  </div>
  <div class="xs7 pa1">
    <div class="primary-light3--bg py3">xs7</div>
  </div>
</w-flex>
`)]),default:n(()=>[p(x,{class:"text-center",wrap:""},{default:n(()=>[H,O,Y,A,J,K,P,Q,X,Z]),_:1})]),_:1}),p(o,{h2:""},{default:n(()=>[i("Operating with breakpoints")]),_:1}),p(v,null,{pug:n(()=>[i(`w-card.blue-light5--bg
  .title2
    | Current breakpoint:
    code `+b("{{ $waveui.breakpoint.name }}")+`
  em.grey.mt1 Resizing your browser will update the current breakpoint.`,1)]),html:n(()=>[i(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+b("{{ $waveui.breakpoint.name }}")+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`,1)]),default:n(()=>[p(h,{class:w(a.$store.state.darkMode?"grey-dark4--bg":"blue-light5--bg")},{default:n(()=>[e("div",ee,[i("Current breakpoint: "),e("code",null,b(a.$waveui.breakpoint.name),1)]),ie]),_:1},8,["class"])]),_:1}),ae,p(v,{class:"hue-on-dark"},{pug:n(()=>[i(`w-flex.text-center(wrap)
  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary-light3--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2`)]),html:n(()=>[i(`<w-flex wrap class="text-center">
  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary-light3--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>
</w-flex>
`)]),default:n(()=>[p(x,{class:"text-center",wrap:""},{default:n(()=>[e("div",se,[e("div",te,[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?(s(),t(l,{key:0},[i("xs12")],64)):a.$waveui.breakpoint.md?(s(),t(l,{key:1},[i("md6")],64)):a.$waveui.breakpoint.lg?(s(),t(l,{key:2},[i("lg4")],64)):a.$waveui.breakpoint.xl?(s(),t(l,{key:3},[i("xl2")],64)):d("",!0)])]),e("div",le,[e("div",ne,[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?(s(),t(l,{key:0},[i("xs12")],64)):a.$waveui.breakpoint.md?(s(),t(l,{key:1},[i("md6")],64)):a.$waveui.breakpoint.lg?(s(),t(l,{key:2},[i("lg4")],64)):a.$waveui.breakpoint.xl?(s(),t(l,{key:3},[i("xl2")],64)):d("",!0)])]),e("div",pe,[e("div",re,[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?(s(),t(l,{key:0},[i("xs12")],64)):a.$waveui.breakpoint.md?(s(),t(l,{key:1},[i("md6")],64)):a.$waveui.breakpoint.lg?(s(),t(l,{key:2},[i("lg4")],64)):a.$waveui.breakpoint.xl?(s(),t(l,{key:3},[i("xl2")],64)):d("",!0)])]),e("div",de,[e("div",oe,[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?(s(),t(l,{key:0},[i("xs12")],64)):a.$waveui.breakpoint.md?(s(),t(l,{key:1},[i("md6")],64)):a.$waveui.breakpoint.lg?(s(),t(l,{key:2},[i("lg4")],64)):a.$waveui.breakpoint.xl?(s(),t(l,{key:3},[i("xl2")],64)):d("",!0)])]),e("div",ve,[e("div",me,[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?(s(),t(l,{key:0},[i("xs12")],64)):a.$waveui.breakpoint.md?(s(),t(l,{key:1},[i("md6")],64)):a.$waveui.breakpoint.lg?(s(),t(l,{key:2},[i("lg4")],64)):a.$waveui.breakpoint.xl?(s(),t(l,{key:3},[i("xl2")],64)):d("",!0)])]),e("div",ce,[e("div",ge,[a.$waveui.breakpoint.xs||a.$waveui.breakpoint.sm?(s(),t(l,{key:0},[i("xs12")],64)):a.$waveui.breakpoint.md?(s(),t(l,{key:1},[i("md6")],64)):a.$waveui.breakpoint.lg?(s(),t(l,{key:2},[i("lg4")],64)):a.$waveui.breakpoint.xl?(s(),t(l,{key:3},[i("xl2")],64)):d("",!0)])])]),_:1})]),_:1}),p(o,{h2:""},{default:n(()=>[i("Using the gap option with the grid system")]),_:1}),e("p",null,[i("The "),xe,i(" component has a"),p(u,{class:"ml1",to:"/layout--flex#gap"},{default:n(()=>[be,i(" option")]),_:1}),i(", as well as "),p(u,{class:"ml1",to:"/layout--flex#caveat"},{default:n(()=>[i("a caveat")]),_:1}),i(" when used with flex wrap.")])])}const ye={},ke=f(ye,[["render",ue]]);export{ke as default};
