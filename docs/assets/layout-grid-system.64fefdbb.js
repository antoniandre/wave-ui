import{r,o as t,e as a,f as p,w as n,F as l,z as m,i as s,t as h,g as e,j as d,N as y}from"./vendor.e64646cc.js";import{_ as w}from"./index.90e40c3f.js";const k=s("Grid system (flexbox)"),f=e("div",{class:"title3"},"The grid system (using flexbox) is 12-cell based by default.",-1),$=e("p",null,[s(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),e("br"),s(`
You can then assign this created layout to a particular breakpoint.
`)],-1),C=s(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`),N=s(`new WaveUI({
  css: {
    grid: 24
  }
})
`),S=s("How to use"),T=s("For this flexbox layout, you need to:"),z=e("ol",null,[e("li",null,[s("Use the "),e("strong",{class:"code"},"w-flex"),s(` component or class on the parent in order to set the
`),e("strong",null,"flex"),s(" context ("),e("code",null,"display: flex"),s(").")]),e("li",null,`Use the predefined classes on the children in order to divide the available width
according to the class in use.
`)],-1),U=y('<fieldset class="w-flex pa4 pt3 amber-light5--bg por" style="position:relative;"><legend class="px1"><strong class="code amber-dark3">&lt;w-flex&gt;</strong></legend><fieldset class="por xs3 light-blue-light5--bg pa3 code"><legend class="light-blue-dark2 px1">div.xs3</legend></fieldset><fieldset class="por xs9 light-blue-light5--bg pa3 code ml1"><legend class="light-blue-dark2 px1">div.xs9</legend></fieldset></fieldset><p class="mt6">In this case:</p><ul><li>xs3 represents 3 units of the 12-cell-based grid, which equals to: (100% total width \xF7 12 cells) x 3 = 25%</li><li>xs9 represents 9 units of the 12-cell-based grid, which equals to: (100% total width \xF7 12 cells) x 9 = 75%</li></ul>',3),V=s("Basic grid"),j=e("p",null,[s("Let's start with a basic example. The following splitting is applied on the "),e("span",{class:"code"},"xs"),s(`
breakpoint and will thus be applied on all the breakpoints.`)],-1),B=s(`The grid cells must be in a flex context to display inline, you can wrap them in a
`),F=e("strong",{class:"code"},"w-flex",-1),I=s(" component or "),G=e("code",null,".w-flex",-1),R=s(` CSS class.
`),q=e("div",{class:"xs12 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs12")],-1),L=e("div",{class:"xs6 pa1"},[e("div",{class:"primary--bg py3"},"xs6")],-1),W=e("div",{class:"xs6 pa1"},[e("div",{class:"primary--bg py3"},"xs6")],-1),D=e("div",{class:"primary-light1--bg white py3"},"xs4",-1),E=[D],H=e("div",{class:"primary-light2--bg white py3"},"xs3",-1),O=[H],Y=e("div",{class:"primary-light3--bg py3"},"xs2",-1),A=[Y],J=e("div",{class:"blue-light4--bg py3"},"xs1",-1),K=[J],M=s(`w-flex.text-center(wrap)
  .xs12.pa1
    .primary-dark1--bg.py3 xs12
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs4.pa1(v-for="i in 3" :key="i")
    .primary-light1--bg.white.py3 xs4
  .xs3.pa1(v-for="i in 4" :key="i")
    .primary-light2--bg.white.py3 xs3
  .xs2.pa1(v-for="i in 6" :key="i")
    .primary-light3--bg.py3 xs2
  .xs1.pa1(v-for="i in 12" :key="i")
    .blue-light4--bg.py3 xs1`),P=s(`<w-flex wrap class="text-center">
  <div class="xs12 pa1">
    <div class="primary-dark1--bg py3">xs12</div>
  </div>

  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>
  <div class="xs6 pa1">
    <div class="primary--bg py3">xs6</div>
  </div>

  <div v-for="i in 3" :key="i" class="xs4 pa1">
    <div class="primary-light1--bg white py3">xs4</div>
  </div>

  <div v-for="i in 4" :key="i" class="xs3 pa1">
    <div class="primary-light2--bg white py3">xs3</div>
  </div>

  <div v-for="i in 6" :key="i" class="xs2 pa1">
    <div class="primary-light3--bg py3">xs2</div>
  </div>

  <div v-for="i in 12" :key="i" class="xs1 pa1">
    <div class="blue-light4--bg py3">xs1</div>
  </div>
</w-flex>
`),Q=e("div",{class:"xs1 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs1")],-1),X=e("div",{class:"xs11 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs11")],-1),Z=e("div",{class:"xs2 pa1"},[e("div",{class:"primary--bg py3"},"xs2")],-1),ee=e("div",{class:"xs10 pa1"},[e("div",{class:"primary--bg py3"},"xs10")],-1),se=e("div",{class:"xs3 pa1"},[e("div",{class:"primary-light1--bg white py3"},"xs3")],-1),ie=e("div",{class:"xs9 pa1"},[e("div",{class:"primary-light1--bg white py3"},"xs9")],-1),te=e("div",{class:"xs4 pa1"},[e("div",{class:"primary-light2--bg white py3"},"xs4")],-1),ae=e("div",{class:"xs8 pa1"},[e("div",{class:"primary-light2--bg white py3"},"xs8")],-1),le=e("div",{class:"xs5 pa1"},[e("div",{class:"primary-light3--bg py3"},"xs5")],-1),ne=e("div",{class:"xs7 pa1"},[e("div",{class:"primary-light3--bg py3"},"xs7")],-1),pe=s(`w-flex.text-center(wrap)
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
    .primary-light3--bg.py3 xs7`),oe=s(`<w-flex wrap class="text-center">
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
`),re=s("Operating with breakpoints"),de={class:"title2 mt0"},ve=s("Current breakpoint: "),ce=e("em",{class:"grey mt1"},"Resizing your browser will update the current breakpoint.",-1),me=e("p",null,"For this example, resize your browser and observe the different layout when crossing a breakpoint.",-1),xe={class:"xs12 md6 lg4 xl2 pa1"},ge={class:"primary-light3--bg py3"},he=s("xs12"),be=s("md6"),ue=s("lg4"),_e=s("xl2"),ye={class:"xs12 md6 lg4 xl2 pa1"},we={class:"primary-light3--bg py3"},ke=s("xs12"),fe=s("md6"),$e=s("lg4"),Ce=s("xl2"),Ne={class:"xs12 md6 lg4 xl2 pa1"},Se={class:"primary-light3--bg py3"},Te=s("xs12"),ze=s("md6"),Ue=s("lg4"),Ve=s("xl2"),je={class:"xs12 md6 lg4 xl2 pa1"},Be={class:"primary-light3--bg py3"},Fe=s("xs12"),Ie=s("md6"),Ge=s("lg4"),Re=s("xl2"),qe={class:"xs12 md6 lg4 xl2 pa1"},Le={class:"primary-light3--bg py3"},We=s("xs12"),De=s("md6"),Ee=s("lg4"),He=s("xl2"),Oe={class:"xs12 md6 lg4 xl2 pa1"},Ye={class:"primary-light3--bg py3"},Ae=s("xs12"),Je=s("md6"),Ke=s("lg4"),Me=s("xl2"),Pe=s(`w-flex.text-center(wrap)
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
      template(v-else-if="$waveui.breakpoint.xl") xl2`),Qe=s(`<w-flex wrap class="text-center">
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
`),Xe=s("Using the gap option with the grid system"),Ze=s("The "),es=e("strong",{class:"code inherit"},"w-flex",-1),ss=s(" component has a"),is=e("span",{class:"code inherit"},"gap",-1),ts=s(" option"),as=s(", as well as "),ls=s("a caveat"),ns=s(" when used with flex wrap.");function ps(i,rs){const v=r("title-link"),u=r("ssh-pre"),x=r("alert"),g=r("w-flex"),c=r("example"),_=r("w-card"),b=r("router-link");return t(),a("main",null,[p(v,{class:"mt4",h1:""},{default:n(()=>[k]),_:1}),f,$,p(x,{info:""},{default:n(()=>[C,p(u,{class:"mb0",language:"js"},{default:n(()=>[N]),_:1})]),_:1}),p(v,{h2:""},{default:n(()=>[S]),_:1}),p(x,{info:""},{default:n(()=>[T,z]),_:1}),U,p(v,{h2:""},{default:n(()=>[V]),_:1}),j,p(x,{tip:""},{default:n(()=>[B,F,I,G,R]),_:1}),p(c,null,{pug:n(()=>[M]),html:n(()=>[P]),default:n(()=>[p(g,{class:"text-center",wrap:""},{default:n(()=>[q,L,W,(t(),a(l,null,m(3,o=>e("div",{class:"xs4 pa1",key:o},E)),64)),(t(),a(l,null,m(4,o=>e("div",{class:"xs3 pa1",key:o},O)),64)),(t(),a(l,null,m(6,o=>e("div",{class:"xs2 pa1",key:o},A)),64)),(t(),a(l,null,m(12,o=>e("div",{class:"xs1 pa1",key:o},K)),64))]),_:1})]),_:1}),p(c,{class:"mt8"},{pug:n(()=>[pe]),html:n(()=>[oe]),default:n(()=>[p(g,{class:"text-center",wrap:""},{default:n(()=>[Q,X,Z,ee,se,ie,te,ae,le,ne]),_:1})]),_:1}),p(v,{h2:""},{default:n(()=>[re]),_:1}),p(c,null,{pug:n(()=>[s(`w-card.blue-light5--bg
  .title2
    | Current breakpoint:
    code `+h("{{ $waveui.breakpoint.name }}")+`
  em.grey.mt1 Resizing your browser will update the current breakpoint.`,1)]),html:n(()=>[s(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+h("{{ $waveui.breakpoint.name }}")+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`,1)]),default:n(()=>[p(_,{class:"blue-light5--bg"},{default:n(()=>[e("div",de,[ve,e("code",null,h(i.$waveui.breakpoint.name),1)]),ce]),_:1})]),_:1}),me,p(c,null,{pug:n(()=>[Pe]),html:n(()=>[Qe]),default:n(()=>[p(g,{class:"text-center",wrap:""},{default:n(()=>[e("div",xe,[e("div",ge,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[he],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[be],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[ue],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[_e],64)):d("",!0)])]),e("div",ye,[e("div",we,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[ke],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[fe],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[$e],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[Ce],64)):d("",!0)])]),e("div",Ne,[e("div",Se,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[Te],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[ze],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[Ue],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[Ve],64)):d("",!0)])]),e("div",je,[e("div",Be,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[Fe],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[Ie],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[Ge],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[Re],64)):d("",!0)])]),e("div",qe,[e("div",Le,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[We],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[De],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[Ee],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[He],64)):d("",!0)])]),e("div",Oe,[e("div",Ye,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[Ae],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[Je],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[Ke],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[Me],64)):d("",!0)])])]),_:1})]),_:1}),p(v,{h2:""},{default:n(()=>[Xe]),_:1}),e("p",null,[Ze,es,ss,p(b,{class:"ml1",to:"/layout--flex#gap"},{default:n(()=>[is,ts]),_:1}),as,p(b,{class:"ml1",to:"/layout--flex#caveat"},{default:n(()=>[ls]),_:1}),ns])])}const os={};var cs=w(os,[["render",ps]]);export{cs as default};
