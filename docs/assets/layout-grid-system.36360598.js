import{r as o,o as a,f as t,a as p,w as l,F as n,z as m,e as i,h as g,b as e,d}from"./vendor.c30f2c6c.js";import{_ as u}from"./index.ed772a88.js";const _=i("Grid system"),w=e("div",{class:"title3"},"The grid system (using flexbox) is 12-cell based by default.",-1),k=e("p",null,[i(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),e("br"),i(`
You can then assign this created layout to a particular breakpoint.
`)],-1),f=i(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`),$=i(`new WaveUI({
  css: {
    grid: 24
  }
})
`),C=i("Basic grid"),z=e("p",null,[i("Let's start with a basic example. The following splitting is applied on the "),e("span",{class:"code"},"xs"),i(`
breakpoint and will thus be applied on all the breakpoints.`)],-1),S=i(`The grid cells must be in a flex context to display inline, you can wrap them in a
`),T=e("strong",{class:"code"},"w-flex",-1),B=i(" component or "),N=e("code",null,".w-flex",-1),V=i(` CSS class.
`),j=e("div",{class:"xs12 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs12")],-1),F=e("div",{class:"xs6 pa1"},[e("div",{class:"primary--bg py3"},"xs6")],-1),G=e("div",{class:"xs6 pa1"},[e("div",{class:"primary--bg py3"},"xs6")],-1),I=e("div",{class:"primary-light1--bg white py3"},"xs4",-1),R=[I],L=e("div",{class:"primary-light2--bg white py3"},"xs3",-1),U=[L],W=e("div",{class:"primary-light3--bg py3"},"xs2",-1),D=[W],E=e("div",{class:"blue-light4--bg pa3"},"xs1",-1),O=[E],Y=i(`w-flex.text-center(wrap)
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
    .blue-light4--bg.pa3 xs1`),q=i(`<w-flex wrap class="text-center">
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
    <div class="blue-light4--bg pa3">xs1</div>
  </div>
</w-flex>
`),A=e("div",{class:"xs1 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs1")],-1),H=e("div",{class:"xs11 pa1"},[e("div",{class:"primary-dark1--bg py3"},"xs11")],-1),J=e("div",{class:"xs2 pa1"},[e("div",{class:"primary--bg py3"},"xs2")],-1),K=e("div",{class:"xs10 pa1"},[e("div",{class:"primary--bg py3"},"xs10")],-1),M=e("div",{class:"xs3 pa1"},[e("div",{class:"primary-light1--bg white py3"},"xs3")],-1),P=e("div",{class:"xs9 pa1"},[e("div",{class:"primary-light1--bg white py3"},"xs9")],-1),Q=e("div",{class:"xs4 pa1"},[e("div",{class:"primary-light2--bg white py3"},"xs4")],-1),X=e("div",{class:"xs8 pa1"},[e("div",{class:"primary-light2--bg white py3"},"xs8")],-1),Z=e("div",{class:"xs5 pa1"},[e("div",{class:"primary-light3--bg py3"},"xs5")],-1),ee=e("div",{class:"xs7 pa1"},[e("div",{class:"primary-light3--bg py3"},"xs7")],-1),ie=i(`w-flex.text-center(wrap)
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
    .primary-light3--bg.py3 xs7`),se=i(`<w-flex wrap class="text-center">
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
`),ae=i("Operating with breakpoints"),te={class:"title2 mt0"},ne=i("Current breakpoint: "),le=e("em",{class:"grey mt1"},"Resizing your browser will update the current breakpoint.",-1),pe=e("p",null,"For this example, resize your browser and observe the different layout when crossing a breakpoint.",-1),re={class:"xs12 md6 lg4 xl2 pa1"},oe={class:"primary-light3--bg py3"},de=i("xs12"),ve=i("md6"),me=i("lg4"),ce=i("xl2"),xe={class:"xs12 md6 lg4 xl2 pa1"},ge={class:"primary-light3--bg py3"},be=i("xs12"),ye=i("md6"),he=i("lg4"),ue=i("xl2"),_e={class:"xs12 md6 lg4 xl2 pa1"},we={class:"primary-light3--bg py3"},ke=i("xs12"),fe=i("md6"),$e=i("lg4"),Ce=i("xl2"),ze={class:"xs12 md6 lg4 xl2 pa1"},Se={class:"primary-light3--bg py3"},Te=i("xs12"),Be=i("md6"),Ne=i("lg4"),Ve=i("xl2"),je={class:"xs12 md6 lg4 xl2 pa1"},Fe={class:"primary-light3--bg py3"},Ge=i("xs12"),Ie=i("md6"),Re=i("lg4"),Le=i("xl2"),Ue={class:"xs12 md6 lg4 xl2 pa1"},We={class:"primary-light3--bg py3"},De=i("xs12"),Ee=i("md6"),Oe=i("lg4"),Ye=i("xl2"),qe=i(`w-flex.text-center(wrap)
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
      template(v-else-if="$waveui.breakpoint.xl") xl2`),Ae=i(`<w-flex wrap class="text-center">
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
</w-flex>`);function He(s,Ke){const c=o("title-link"),y=o("ssh-pre"),b=o("alert"),x=o("w-flex"),v=o("example"),h=o("w-card");return a(),t("main",null,[p(c,{class:"mt4",h1:""},{default:l(()=>[_]),_:1}),w,k,p(b,{info:""},{default:l(()=>[f,p(y,{class:"mb0",language:"js"},{default:l(()=>[$]),_:1})]),_:1}),p(c,{h2:""},{default:l(()=>[C]),_:1}),z,p(b,{tip:""},{default:l(()=>[S,T,B,N,V]),_:1}),p(v,null,{pug:l(()=>[Y]),html:l(()=>[q]),default:l(()=>[p(x,{class:"text-center",wrap:""},{default:l(()=>[j,F,G,(a(),t(n,null,m(3,r=>e("div",{class:"xs4 pa1",key:r},R)),64)),(a(),t(n,null,m(4,r=>e("div",{class:"xs3 pa1",key:r},U)),64)),(a(),t(n,null,m(6,r=>e("div",{class:"xs2 pa1",key:r},D)),64)),(a(),t(n,null,m(12,r=>e("div",{class:"xs1 pa1",key:r},O)),64))]),_:1})]),_:1}),p(v,{class:"mt8"},{pug:l(()=>[ie]),html:l(()=>[se]),default:l(()=>[p(x,{class:"text-center",wrap:""},{default:l(()=>[A,H,J,K,M,P,Q,X,Z,ee]),_:1})]),_:1}),p(c,{h2:""},{default:l(()=>[ae]),_:1}),p(v,null,{pug:l(()=>[i(`w-card.blue-light5--bg
  .title2
    | Current breakpoint:
    code `+g("{{ $waveui.breakpoint.name }}")+`
  em.grey.mt1 Resizing your browser will update the current breakpoint.`,1)]),html:l(()=>[i(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+g("{{ $waveui.breakpoint.name }}")+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`,1)]),default:l(()=>[p(h,{class:"blue-light5--bg"},{default:l(()=>[e("div",te,[ne,e("code",null,g(s.$waveui.breakpoint.name),1)]),le]),_:1})]),_:1}),pe,p(v,null,{pug:l(()=>[qe]),html:l(()=>[Ae]),default:l(()=>[p(x,{class:"text-center",wrap:""},{default:l(()=>[e("div",re,[e("div",oe,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(a(),t(n,{key:0},[de],64)):s.$waveui.breakpoint.md?(a(),t(n,{key:1},[ve],64)):s.$waveui.breakpoint.lg?(a(),t(n,{key:2},[me],64)):s.$waveui.breakpoint.xl?(a(),t(n,{key:3},[ce],64)):d("",!0)])]),e("div",xe,[e("div",ge,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(a(),t(n,{key:0},[be],64)):s.$waveui.breakpoint.md?(a(),t(n,{key:1},[ye],64)):s.$waveui.breakpoint.lg?(a(),t(n,{key:2},[he],64)):s.$waveui.breakpoint.xl?(a(),t(n,{key:3},[ue],64)):d("",!0)])]),e("div",_e,[e("div",we,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(a(),t(n,{key:0},[ke],64)):s.$waveui.breakpoint.md?(a(),t(n,{key:1},[fe],64)):s.$waveui.breakpoint.lg?(a(),t(n,{key:2},[$e],64)):s.$waveui.breakpoint.xl?(a(),t(n,{key:3},[Ce],64)):d("",!0)])]),e("div",ze,[e("div",Se,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(a(),t(n,{key:0},[Te],64)):s.$waveui.breakpoint.md?(a(),t(n,{key:1},[Be],64)):s.$waveui.breakpoint.lg?(a(),t(n,{key:2},[Ne],64)):s.$waveui.breakpoint.xl?(a(),t(n,{key:3},[Ve],64)):d("",!0)])]),e("div",je,[e("div",Fe,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(a(),t(n,{key:0},[Ge],64)):s.$waveui.breakpoint.md?(a(),t(n,{key:1},[Ie],64)):s.$waveui.breakpoint.lg?(a(),t(n,{key:2},[Re],64)):s.$waveui.breakpoint.xl?(a(),t(n,{key:3},[Le],64)):d("",!0)])]),e("div",Ue,[e("div",We,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(a(),t(n,{key:0},[De],64)):s.$waveui.breakpoint.md?(a(),t(n,{key:1},[Ee],64)):s.$waveui.breakpoint.lg?(a(),t(n,{key:2},[Oe],64)):s.$waveui.breakpoint.xl?(a(),t(n,{key:3},[Ye],64)):d("",!0)])])]),_:1})]),_:1})])}const Je={};var Qe=u(Je,[["render",He]]);export{Qe as default};
