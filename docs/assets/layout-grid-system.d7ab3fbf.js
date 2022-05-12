import{r as o,o as t,f as a,a as p,w as n,X as l,aK as m,e as s,h,b as e,d,i as y,_ as w}from"./index.5f89106b.js";const k=s("Grid system (flexbox)"),f=e("div",{class:"title3"},"The grid system (using flexbox) is 12-cell based by default.",-1),$=e("p",null,[s(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),e("br"),s(`
You can then assign this created layout to a particular breakpoint.
`)],-1),C=s(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`),S=s(`new WaveUI({
  css: {
    grid: 24
  }
})
`),T=s("How to use"),N=s("For this flexbox layout, you need to:"),U=e("ol",null,[e("li",null,[s("Use the "),e("strong",{class:"code"},"w-flex"),s(` component or class on the parent in order to set the
`),e("strong",null,"flex"),s(" context ("),e("code",null,"display: flex"),s(").")]),e("li",null,`Use the predefined classes on the children in order to divide the available width
according to the class in use.
`)],-1),V=y('<fieldset class="w-flex pa4 pt3 amber-light5--bg" style="position:relative;"><legend class="px1"><strong class="code amber-dark3">&lt;w-flex&gt;</strong></legend><fieldset class="xs3 light-blue-light5--bg pa3 code"><legend class="light-blue-dark2 px1">div.xs3</legend></fieldset><fieldset class="xs9 light-blue-light5--bg pa3 code ml1"><legend class="light-blue-dark2 px1">div.xs9</legend></fieldset></fieldset><p class="mt6">In this case:</p><ul><li>xs3 represents 3 units of the 12-cell-based grid, which equals to: (100% total width \xF7 12 cells) x 3 = 25%</li><li>xs9 represents 9 units of the 12-cell-based grid, which equals to: (100% total width \xF7 12 cells) x 9 = 75%</li></ul>',3),z=s("Basic grid"),B=e("p",null,[s("Let's start with a basic example. The following splitting is applied on the "),e("span",{class:"code"},"xs"),s(`
breakpoint and will thus be applied on all the breakpoints.`)],-1),I=s(`The grid cells must be in a flex context to display inline, you can wrap them in a
`),F=e("strong",{class:"code"},"w-flex",-1),G=s(" component or "),R=e("code",null,".w-flex",-1),q=s(` CSS class.
`),L=e("div",{class:"xs12 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs12")],-1),W=e("div",{class:"xs6 pa1"},[e("div",{class:"primary--bg py3"},"xs6")],-1),j=e("div",{class:"xs6 pa1"},[e("div",{class:"primary--bg py3"},"xs6")],-1),D={class:"xs4 pa1"},E=e("div",{class:"primary-light1--bg white py3"},"xs4",-1),H=[E],K={class:"xs3 pa1"},O=e("div",{class:"primary-light2--bg white py3"},"xs3",-1),X=[O],Y={class:"xs2 pa1"},A=e("div",{class:"primary-light3--bg py3"},"xs2",-1),J=[A],M=e("div",{class:"blue-light4--bg py3"},"xs1",-1),P=[M],Q=s(`w-flex.text-center(wrap)
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
    .blue-light4--bg.py3 xs1`),Z=s(`<w-flex wrap class="text-center">
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
`),ee=e("div",{class:"xs1 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs1")],-1),se=e("div",{class:"xs11 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs11")],-1),ie=e("div",{class:"xs2 pa1"},[e("div",{class:"primary--bg py3"},"xs2")],-1),te=e("div",{class:"xs10 pa1"},[e("div",{class:"primary--bg py3"},"xs10")],-1),ae=e("div",{class:"xs3 pa1"},[e("div",{class:"primary-light1--bg white py3"},"xs3")],-1),le=e("div",{class:"xs9 pa1"},[e("div",{class:"primary-light1--bg white py3"},"xs9")],-1),ne=e("div",{class:"xs4 pa1"},[e("div",{class:"primary-light2--bg white py3"},"xs4")],-1),pe=e("div",{class:"xs8 pa1"},[e("div",{class:"primary-light2--bg white py3"},"xs8")],-1),oe=e("div",{class:"xs5 pa1"},[e("div",{class:"primary-light3--bg py3"},"xs5")],-1),de=e("div",{class:"xs7 pa1"},[e("div",{class:"primary-light3--bg py3"},"xs7")],-1),re=s(`w-flex.text-center(wrap)
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
    .primary-light3--bg.py3 xs7`),ve=s(`<w-flex wrap class="text-center">
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
`),ce=s("Operating with breakpoints"),me={class:"title2 mt0"},xe=s("Current breakpoint: "),ge=e("em",{class:"grey mt1"},"Resizing your browser will update the current breakpoint.",-1),he=e("p",null,"For this example, resize your browser and observe the different layout when crossing a breakpoint.",-1),be={class:"xs12 md6 lg4 xl2 pa1"},_e={class:"primary-light3--bg py3"},ue=s("xs12"),ye=s("md6"),we=s("lg4"),ke=s("xl2"),fe={class:"xs12 md6 lg4 xl2 pa1"},$e={class:"primary-light3--bg py3"},Ce=s("xs12"),Se=s("md6"),Te=s("lg4"),Ne=s("xl2"),Ue={class:"xs12 md6 lg4 xl2 pa1"},Ve={class:"primary-light3--bg py3"},ze=s("xs12"),Be=s("md6"),Ie=s("lg4"),Fe=s("xl2"),Ge={class:"xs12 md6 lg4 xl2 pa1"},Re={class:"primary-light3--bg py3"},qe=s("xs12"),Le=s("md6"),We=s("lg4"),je=s("xl2"),De={class:"xs12 md6 lg4 xl2 pa1"},Ee={class:"primary-light3--bg py3"},He=s("xs12"),Ke=s("md6"),Oe=s("lg4"),Xe=s("xl2"),Ye={class:"xs12 md6 lg4 xl2 pa1"},Ae={class:"primary-light3--bg py3"},Je=s("xs12"),Me=s("md6"),Pe=s("lg4"),Qe=s("xl2"),Ze=s(`w-flex.text-center(wrap)
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
      template(v-else-if="$waveui.breakpoint.xl") xl2`),es=s(`<w-flex wrap class="text-center">
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
`),ss=s("Using the gap option with the grid system"),is=s("The "),ts=e("strong",{class:"code inherit"},"w-flex",-1),as=s(" component has a"),ls=e("span",{class:"code inherit"},"gap",-1),ns=s(" option"),ps=s(", as well as "),os=s("a caveat"),ds=s(" when used with flex wrap.");function rs(i,cs){const r=o("title-link"),_=o("ssh-pre"),x=o("alert"),g=o("w-flex"),v=o("example"),u=o("w-card"),b=o("router-link");return t(),a("main",null,[p(r,{class:"mt4",h1:""},{default:n(()=>[k]),_:1}),f,$,p(x,{info:""},{default:n(()=>[C,p(_,{class:"mb0",language:"js"},{default:n(()=>[S]),_:1})]),_:1}),p(r,{h2:""},{default:n(()=>[T]),_:1}),p(x,{info:""},{default:n(()=>[N,U]),_:1}),V,p(r,{h2:""},{default:n(()=>[z]),_:1}),B,p(x,{tip:""},{default:n(()=>[I,F,G,R,q]),_:1}),p(v,null,{pug:n(()=>[Q]),html:n(()=>[Z]),default:n(()=>[p(g,{class:"text-center",wrap:""},{default:n(()=>[L,W,j,(t(),a(l,null,m(3,c=>e("div",D,H)),64)),(t(),a(l,null,m(4,c=>e("div",K,X)),64)),(t(),a(l,null,m(6,c=>e("div",Y,J)),64)),(t(),a(l,null,m(12,c=>e("div",{class:"xs1 pa1",key:c},P)),64))]),_:1})]),_:1}),p(v,{class:"mt8"},{pug:n(()=>[re]),html:n(()=>[ve]),default:n(()=>[p(g,{class:"text-center",wrap:""},{default:n(()=>[ee,se,ie,te,ae,le,ne,pe,oe,de]),_:1})]),_:1}),p(r,{h2:""},{default:n(()=>[ce]),_:1}),p(v,null,{pug:n(()=>[s(`w-card.blue-light5--bg
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
`,1)]),default:n(()=>[p(u,{class:"blue-light5--bg"},{default:n(()=>[e("div",me,[xe,e("code",null,h(i.$waveui.breakpoint.name),1)]),ge]),_:1})]),_:1}),he,p(v,null,{pug:n(()=>[Ze]),html:n(()=>[es]),default:n(()=>[p(g,{class:"text-center",wrap:""},{default:n(()=>[e("div",be,[e("div",_e,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[ue],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[ye],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[we],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[ke],64)):d("",!0)])]),e("div",fe,[e("div",$e,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[Ce],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[Se],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[Te],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[Ne],64)):d("",!0)])]),e("div",Ue,[e("div",Ve,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[ze],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[Be],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[Ie],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[Fe],64)):d("",!0)])]),e("div",Ge,[e("div",Re,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[qe],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[Le],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[We],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[je],64)):d("",!0)])]),e("div",De,[e("div",Ee,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[He],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[Ke],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[Oe],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[Xe],64)):d("",!0)])]),e("div",Ye,[e("div",Ae,[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?(t(),a(l,{key:0},[Je],64)):i.$waveui.breakpoint.md?(t(),a(l,{key:1},[Me],64)):i.$waveui.breakpoint.lg?(t(),a(l,{key:2},[Pe],64)):i.$waveui.breakpoint.xl?(t(),a(l,{key:3},[Qe],64)):d("",!0)])])]),_:1})]),_:1}),p(r,{h2:""},{default:n(()=>[ss]),_:1}),e("p",null,[is,ts,as,p(b,{class:"ml1",to:"/layout--flex#gap"},{default:n(()=>[ls,ns]),_:1}),ps,p(b,{class:"ml1",to:"/layout--flex#caveat"},{default:n(()=>[os]),_:1}),ds])])}const vs={};var xs=w(vs,[["render",rs]]);export{xs as default};
