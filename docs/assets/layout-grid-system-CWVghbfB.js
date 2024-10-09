import{r as d,o as l,g as t,a as r,w as p,b as a,d as i,h as $,F as n,k as x,t as y,n as h,f as v,_ as c}from"./index-GCsNrMay.js";const C={class:"xs4 pa1"},T={class:"xs3 pa1"},z={class:"xs2 pa1"},N={class:"title2 mt0"},S={class:"xs12 md6 lg4 xl2 pa1"},U={class:"primary-light3--bg py3"},V={class:"xs12 md6 lg4 xl2 pa1"},B={class:"primary-light3--bg py3"},F={class:"xs12 md6 lg4 xl2 pa1"},I={class:"primary-light3--bg py3"},R={class:"xs12 md6 lg4 xl2 pa1"},q={class:"primary-light3--bg py3"},G={class:"xs12 md6 lg4 xl2 pa1"},L={class:"primary-light3--bg py3"},M={class:"xs12 md6 lg4 xl2 pa1"},W={class:"primary-light3--bg py3"};function j(s,e){const o=d("title-link"),k=d("ssh-pre"),b=d("alert"),u=d("w-flex"),m=d("example"),f=d("w-card"),w=d("router-link");return l(),t("main",null,[r(o,{class:"mt4",h1:""},{default:p(()=>e[0]||(e[0]=[a("Grid system (flexbox)")])),_:1}),e[34]||(e[34]=i("div",{class:"title3"},"The grid system (using flexbox) is 12-cell based by default.",-1)),e[35]||(e[35]=i("p",null,[a(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),i("br"),a(`
You can then assign this created layout to a particular breakpoint.
`)],-1)),r(b,{info:""},{default:p(()=>[e[2]||(e[2]=a(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`)),r(k,{class:"mb0",language:"js",dark:s.$store.state.darkMode},{default:p(()=>e[1]||(e[1]=[a(`new WaveUI({
  css: {
    grid: 24
  }
})
`)])),_:1},8,["dark"])]),_:1}),r(o,{h2:""},{default:p(()=>e[3]||(e[3]=[a("How to use")])),_:1}),r(b,{info:""},{default:p(()=>e[4]||(e[4]=[a("For this flexbox layout, you need to:"),i("ol",null,[i("li",null,[a("Use the "),i("strong",{class:"code"},"w-flex"),a(` component or class on the parent in order to set the
`),i("strong",null,"flex"),a(" context ("),i("code",null,"display: flex"),a(").")]),i("li",null,`Use the predefined classes on the children in order to divide the available width
according to the class in use.
`)],-1)])),_:1}),e[36]||(e[36]=$('<fieldset class="w-flex pa4 pt3 amber-light5--bg" style="position:relative;"><legend class="px1 round"><strong class="code amber-dark3">&lt;w-flex&gt;</strong></legend><fieldset class="xs3 light-blue-light5--bg pa3 code"><legend class="light-blue-dark2 px1">div.xs3</legend></fieldset><fieldset class="xs9 light-blue-light5--bg pa3 code ml1"><legend class="light-blue-dark2 px1">div.xs9</legend></fieldset></fieldset><p class="mt6">In this case:</p><ul><li>xs3 represents 3 units of the 12-cell-based grid, which equals to: (100% total width ÷ 12 cells) x 3 = 25%</li><li>xs9 represents 9 units of the 12-cell-based grid, which equals to: (100% total width ÷ 12 cells) x 9 = 75%</li></ul>',3)),r(o,{h2:""},{default:p(()=>e[5]||(e[5]=[a("Basic grid")])),_:1}),e[37]||(e[37]=i("p",null,[a("Let's start with a basic example. The following splitting is applied on the "),i("span",{class:"code"},"xs"),a(`
breakpoint and will thus be applied on all the breakpoints.`)],-1)),r(b,{tip:""},{default:p(()=>e[6]||(e[6]=[a(`The grid cells must be in a flex context to display inline, you can wrap them in a
`),i("strong",{class:"code"},"w-flex",-1),a(" component or "),i("code",null,".w-flex",-1),a(` CSS class.
`)])),_:1}),r(m,{class:"hue-on-dark"},{pug:p(()=>e[14]||(e[14]=[a(`w-flex.text-center(wrap)
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
    .blue-light4--bg.py3 xs1`)])),html:p(()=>e[15]||(e[15]=[a(`<w-flex wrap class="text-center">
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
`)])),default:p(()=>[r(u,{class:"text-center",wrap:""},{default:p(()=>[e[11]||(e[11]=i("div",{class:"xs12 pa1"},[i("div",{class:"primary-dark1--bg py3"},"xs12")],-1)),e[12]||(e[12]=i("div",{class:"xs6 pa1"},[i("div",{class:"primary--bg py3"},"xs6")],-1)),e[13]||(e[13]=i("div",{class:"xs6 pa1"},[i("div",{class:"primary--bg py3"},"xs6")],-1)),(l(),t(n,null,x(3,g=>i("div",C,e[7]||(e[7]=[i("div",{class:"primary-light1--bg white py3"},"xs4",-1)]))),64)),(l(),t(n,null,x(4,g=>i("div",T,e[8]||(e[8]=[i("div",{class:"primary-light2--bg white py3"},"xs3",-1)]))),64)),(l(),t(n,null,x(6,g=>i("div",z,e[9]||(e[9]=[i("div",{class:"primary-light3--bg py3"},"xs2",-1)]))),64)),(l(),t(n,null,x(12,g=>i("div",{class:"xs1 pa1",key:g},e[10]||(e[10]=[i("div",{class:"blue-light4--bg py3"},"xs1",-1)]))),64))]),_:1})]),_:1}),r(m,{class:"mt8 hue-on-dark"},{pug:p(()=>e[17]||(e[17]=[a(`w-flex.text-center(wrap)
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
    .primary-light3--bg.py3 xs7`)])),html:p(()=>e[18]||(e[18]=[a(`<w-flex wrap class="text-center">
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
`)])),default:p(()=>[r(u,{class:"text-center",wrap:""},{default:p(()=>e[16]||(e[16]=[i("div",{class:"xs1 pa1"},[i("div",{class:"primary-dark1--bg py3"},"xs1")],-1),i("div",{class:"xs11 pa1"},[i("div",{class:"primary-dark1--bg py3"},"xs11")],-1),i("div",{class:"xs2 pa1"},[i("div",{class:"primary--bg py3"},"xs2")],-1),i("div",{class:"xs10 pa1"},[i("div",{class:"primary--bg py3"},"xs10")],-1),i("div",{class:"xs3 pa1"},[i("div",{class:"primary-light1--bg white py3"},"xs3")],-1),i("div",{class:"xs9 pa1"},[i("div",{class:"primary-light1--bg white py3"},"xs9")],-1),i("div",{class:"xs4 pa1"},[i("div",{class:"primary-light2--bg white py3"},"xs4")],-1),i("div",{class:"xs8 pa1"},[i("div",{class:"primary-light2--bg white py3"},"xs8")],-1),i("div",{class:"xs5 pa1"},[i("div",{class:"primary-light3--bg py3"},"xs5")],-1),i("div",{class:"xs7 pa1"},[i("div",{class:"primary-light3--bg py3"},"xs7")],-1)])),_:1})]),_:1}),r(o,{h2:""},{default:p(()=>e[19]||(e[19]=[a("Operating with breakpoints")])),_:1}),r(m,null,{pug:p(()=>e[22]||(e[22]=[a(`w-card.blue-light5--bg
  .title2
    | Current breakpoint:
    code `+y("{{ $waveui.breakpoint.name }}")+`
  em.grey.mt1 Resizing your browser will update the current breakpoint.`)])),html:p(()=>e[23]||(e[23]=[a(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+y("{{ $waveui.breakpoint.name }}")+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`)])),default:p(()=>[r(f,{class:h(s.$store.state.darkMode?"grey-dark4--bg":"blue-light5--bg")},{default:p(()=>[i("div",N,[e[20]||(e[20]=a("Current breakpoint: ")),i("code",null,y(s.$waveui.breakpoint.name),1)]),e[21]||(e[21]=i("em",{class:"grey mt1"},"Resizing your browser will update the current breakpoint.",-1))]),_:1},8,["class"])]),_:1}),e[38]||(e[38]=i("p",null,"For this example, resize your browser and observe the different layout when crossing a breakpoint.",-1)),r(m,{class:"hue-on-dark"},{pug:p(()=>e[24]||(e[24]=[a(`w-flex.text-center(wrap)
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
      template(v-else-if="$waveui.breakpoint.xl") xl2`)])),html:p(()=>e[25]||(e[25]=[a(`<w-flex wrap class="text-center">
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
`)])),default:p(()=>[r(u,{class:"text-center",wrap:""},{default:p(()=>[i("div",S,[i("div",U,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(l(),t(n,{key:0},[a("xs12")],64)):s.$waveui.breakpoint.md?(l(),t(n,{key:1},[a("md6")],64)):s.$waveui.breakpoint.lg?(l(),t(n,{key:2},[a("lg4")],64)):s.$waveui.breakpoint.xl?(l(),t(n,{key:3},[a("xl2")],64)):v("",!0)])]),i("div",V,[i("div",B,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(l(),t(n,{key:0},[a("xs12")],64)):s.$waveui.breakpoint.md?(l(),t(n,{key:1},[a("md6")],64)):s.$waveui.breakpoint.lg?(l(),t(n,{key:2},[a("lg4")],64)):s.$waveui.breakpoint.xl?(l(),t(n,{key:3},[a("xl2")],64)):v("",!0)])]),i("div",F,[i("div",I,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(l(),t(n,{key:0},[a("xs12")],64)):s.$waveui.breakpoint.md?(l(),t(n,{key:1},[a("md6")],64)):s.$waveui.breakpoint.lg?(l(),t(n,{key:2},[a("lg4")],64)):s.$waveui.breakpoint.xl?(l(),t(n,{key:3},[a("xl2")],64)):v("",!0)])]),i("div",R,[i("div",q,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(l(),t(n,{key:0},[a("xs12")],64)):s.$waveui.breakpoint.md?(l(),t(n,{key:1},[a("md6")],64)):s.$waveui.breakpoint.lg?(l(),t(n,{key:2},[a("lg4")],64)):s.$waveui.breakpoint.xl?(l(),t(n,{key:3},[a("xl2")],64)):v("",!0)])]),i("div",G,[i("div",L,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(l(),t(n,{key:0},[a("xs12")],64)):s.$waveui.breakpoint.md?(l(),t(n,{key:1},[a("md6")],64)):s.$waveui.breakpoint.lg?(l(),t(n,{key:2},[a("lg4")],64)):s.$waveui.breakpoint.xl?(l(),t(n,{key:3},[a("xl2")],64)):v("",!0)])]),i("div",M,[i("div",W,[s.$waveui.breakpoint.xs||s.$waveui.breakpoint.sm?(l(),t(n,{key:0},[a("xs12")],64)):s.$waveui.breakpoint.md?(l(),t(n,{key:1},[a("md6")],64)):s.$waveui.breakpoint.lg?(l(),t(n,{key:2},[a("lg4")],64)):s.$waveui.breakpoint.xl?(l(),t(n,{key:3},[a("xl2")],64)):v("",!0)])])]),_:1})]),_:1}),r(o,{h2:""},{default:p(()=>e[26]||(e[26]=[a("Using the gap option with the grid system")])),_:1}),i("p",null,[e[29]||(e[29]=a("The ")),e[30]||(e[30]=i("strong",{class:"code inherit"},"w-flex",-1)),e[31]||(e[31]=a(" component has a")),r(w,{class:"ml1",to:"/layout--flex#gap"},{default:p(()=>e[27]||(e[27]=[i("span",{class:"code inherit"},"gap",-1),a(" option")])),_:1}),e[32]||(e[32]=a(", as well as ")),r(w,{class:"ml1",to:"/layout--flex#caveat"},{default:p(()=>e[28]||(e[28]=[a("a caveat")])),_:1}),e[33]||(e[33]=a(" when used with flex wrap."))])])}const D={},H=c(D,[["render",j]]);export{H as default};
