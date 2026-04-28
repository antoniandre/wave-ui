import{N as e,W as t,_t as n,bt as r,c as i,d as a,g as o,h as s,j as c,k as l,m as u,r as d,u as f}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as p}from"./plugin-vue_export-helper-B80Cc4Ui.js";var m={class:`xs12 pa1`},h={class:`xs4 pa1`},g={class:`xs3 pa1`},_={class:`xs2 pa1`},v={class:`title2 mt0`},y={class:`xs12 md6 lg4 xl2 pa1`},b={class:`primary--bg py3`},x={class:`xs12 md6 lg4 xl2 pa1`},S={class:`primary--bg py3`},C={class:`xs12 md6 lg4 xl2 pa1`},w={class:`primary--bg py3`},T={class:`xs12 md6 lg4 xl2 pa1`},E={class:`primary--bg py3`},D={class:`xs12 md6 lg4 xl2 pa1`},O={class:`primary--bg py3`},k={class:`xs12 md6 lg4 xl2 pa1`},A={class:`primary--bg py3`};function j(p,j){let M=e(`title-link`),N=e(`ssh-pre`),P=e(`alert`),F=e(`example`),I=e(`w-card`),L=e(`w-flex`),R=e(`router-link`);return l(),a(`main`,null,[o(M,{class:`mt4`,h1:``},{default:t(()=>[...j[0]||=[s(`Grid system (flexbox)`,-1)]]),_:1}),j[33]||=i(`div`,{class:`title3`},`The grid system (using flexbox) is 12-cell based by default.`,-1),j[34]||=i(`p`,null,[s(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),i(`br`),s(`
You can then assign this created layout to a particular breakpoint.
`)],-1),o(P,{info:``},{default:t(()=>[j[2]||=s(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`,-1),o(N,{class:`mb0`,language:`js`,dark:p.$store.state.darkMode},{default:t(()=>[...j[1]||=[s(`new WaveUI({
  css: {
    grid: 24
  }
})
`,-1)]]),_:1},8,[`dark`])]),_:1}),o(M,{h2:``},{default:t(()=>[...j[3]||=[s(`How to use`,-1)]]),_:1}),o(P,{info:``},{default:t(()=>[...j[4]||=[s(`For this flexbox layout, you need to:`,-1),i(`ol`,null,[i(`li`,null,[s(`Use the `),i(`strong`,{class:`code`},`w-flex`),s(` component or class on the parent in order to set the
`),i(`strong`,null,`flex`),s(` context (`),i(`code`,null,`display: flex`),s(`).`)]),i(`li`,null,`Use the predefined classes on the children in order to divide the available width
according to the class in use.
`)],-1)]]),_:1}),j[35]||=u(`<fieldset class="w-flex pa4 pt3 amber-light5--bg" style="position:relative;"><legend class="px1 round"><strong class="code amber-dark3">&lt;w-flex&gt;</strong></legend><fieldset class="xs3 light-blue-light5--bg pa3 code"><legend class="light-blue-dark2 px1">div.xs3</legend></fieldset><fieldset class="xs9 light-blue-light5--bg pa3 code ml1"><legend class="light-blue-dark2 px1">div.xs9</legend></fieldset></fieldset><p class="mt6">In this case:</p><ul><li>xs3 represents 3 units of the 12-cell-based grid, which equals to: (100% total width ÷ 12 cells) x 3 = 25%</li><li>xs9 represents 9 units of the 12-cell-based grid, which equals to: (100% total width ÷ 12 cells) x 9 = 75%</li></ul>`,3),o(M,{h2:``},{default:t(()=>[...j[5]||=[s(`Basic grid`,-1)]]),_:1}),j[36]||=i(`p`,null,[s(`Let's start with a basic example. The following splitting is applied on the `),i(`span`,{class:`code`},`xs`),s(`
breakpoint and will thus be applied on all the breakpoints.`)],-1),o(P,{tip:``},{default:t(()=>[...j[6]||=[s(`The grid cells must be in a flex context to display inline, you can wrap them in a
`,-1),i(`strong`,{class:`code`},`w-flex`,-1),s(` component or `,-1),i(`code`,null,`.w-flex`,-1),s(` CSS class.
`,-1)]]),_:1}),o(F,null,{pug:t(()=>[...j[13]||=[s(`w-flex.text-center(wrap)
  .xs12.pa1
    .primary-dark1--bg.py3 xs12
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs6.pa1
    .primary--bg.py3 xs6
  .xs4.pa1(v-for="i in 3")
    .primary-light1--bg.py3 xs4
  .xs3.pa1(v-for="i in 4")
    .primary-light2--bg.py3 xs3
  .xs2.pa1(v-for="i in 6")
    .primary-light3--bg.black.py3 xs2
  .xs1.pa1(v-for="i in 12" :key="i")
    .primary-light5--bg.black.py3 xs1`,-1)]]),html:t(()=>[...j[14]||=[s(`<w-flex wrap class="text-center">
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
    <div class="primary-light5--bg py3">xs1</div>
  </div>
</w-flex>
`,-1)]]),default:t(()=>[i(`div`,{class:n([`w-flex wrap text-center`,p.$store.state.darkMode?`black`:`white`])},[i(`div`,m,[i(`div`,{class:n([`primary-dark1--bg py3`,{white:!p.$store.state.darkMode}])},`xs12`,2)]),j[11]||=i(`div`,{class:`xs6 pa1`},[i(`div`,{class:`primary--bg py3`},`xs6`)],-1),j[12]||=i(`div`,{class:`xs6 pa1`},[i(`div`,{class:`primary--bg py3`},`xs6`)],-1),(l(),a(d,null,c(3,e=>i(`div`,h,[...j[7]||=[i(`div`,{class:`primary-light1--bg py3`},`xs4`,-1)]])),64)),(l(),a(d,null,c(4,e=>i(`div`,g,[...j[8]||=[i(`div`,{class:`primary-light2--bg py3`},`xs3`,-1)]])),64)),(l(),a(d,null,c(6,e=>i(`div`,_,[...j[9]||=[i(`div`,{class:`primary-light3--bg py3 black`},`xs2`,-1)]])),64)),(l(),a(d,null,c(12,e=>i(`div`,{class:`xs1 pa1`,key:e},[...j[10]||=[i(`div`,{class:`primary-light5--bg py3 black`},`xs1`,-1)]])),64))],2)]),_:1}),o(F,{class:`mt8`},{pug:t(()=>[...j[16]||=[s(`w-flex.text-center(wrap)
  .xs1.pa1
    .primary-dark1--bg.py3 xs1
  .xs11.pa1
    .primary-dark1--bg.py3 xs11
  .xs2.pa1
    .primary--bg.py3 xs2
  .xs10.pa1
    .primary--bg.py3 xs10
  .xs3.pa1
    .primary-light1--bg.py3 xs3
  .xs9.pa1
    .primary-light1--bg.py3 xs9
  .xs4.pa1
    .primary-light2--bg.py3 xs4
  .xs8.pa1
    .primary-light2--bg.py3 xs8
  .xs5.pa1
    .primary-light3--bg.py3 xs5
  .xs7.pa1
    .primary-light3--bg.py3 xs7`,-1)]]),html:t(()=>[...j[17]||=[s(`<w-flex wrap class="text-center">
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
`,-1)]]),default:t(()=>[i(`div`,{class:n([`w-flex wrap text-center`,p.$store.state.darkMode?`black`:`white`])},[...j[15]||=[i(`div`,{class:`xs1 pa1`},[i(`div`,{class:`primary-dark1--bg py3`},`xs1`)],-1),i(`div`,{class:`xs11 pa1`},[i(`div`,{class:`primary-dark1--bg py3`},`xs11`)],-1),i(`div`,{class:`xs2 pa1`},[i(`div`,{class:`primary--bg py3`},`xs2`)],-1),i(`div`,{class:`xs10 pa1`},[i(`div`,{class:`primary--bg py3`},`xs10`)],-1),i(`div`,{class:`xs3 pa1`},[i(`div`,{class:`primary-light1--bg py3`},`xs3`)],-1),i(`div`,{class:`xs9 pa1`},[i(`div`,{class:`primary-light1--bg py3`},`xs9`)],-1),i(`div`,{class:`xs4 pa1`},[i(`div`,{class:`primary-light2--bg py3`},`xs4`)],-1),i(`div`,{class:`xs8 pa1`},[i(`div`,{class:`primary-light2--bg py3`},`xs8`)],-1),i(`div`,{class:`xs5 pa1`},[i(`div`,{class:`primary-light3--bg py3`},`xs5`)],-1),i(`div`,{class:`xs7 pa1`},[i(`div`,{class:`primary-light3--bg py3`},`xs7`)],-1)]],2)]),_:1}),o(M,{h2:``},{default:t(()=>[...j[18]||=[s(`Operating with breakpoints`,-1)]]),_:1}),o(F,null,{pug:t(()=>[...j[21]||=[s(`w-card.blue-light5--bg
  .title2.black
    | Current breakpoint:
    code `+r(`{{ $waveui.breakpoint.name }}`)+`
  em.grey.mt1 Resizing your browser will update the current breakpoint.`,-1)]]),html:t(()=>[...j[22]||=[s(`<w-card class="blue-light5--bg">
  <div class="title2 mt0 black">
    Current breakpoint:
    <code>`+r(`{{ $waveui.breakpoint.name }}`)+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`,-1)]]),default:t(()=>[o(I,{class:n(p.$store.state.darkMode?`grey-dark4--bg`:`blue-light5--bg`)},{default:t(()=>[i(`div`,v,[j[19]||=s(`Current breakpoint: `,-1),i(`code`,null,r(p.$waveui.breakpoint.name),1)]),j[20]||=i(`em`,{class:`grey mt1`},`Resizing your browser will update the current breakpoint.`,-1)]),_:1},8,[`class`])]),_:1}),j[37]||=i(`p`,null,`For this example, resize your browser and observe the different layout when crossing a breakpoint.`,-1),o(F,null,{pug:t(()=>[...j[23]||=[s(`w-flex.text-center(wrap)
  .xs12.md6.lg4.xl2.pa1
    .primary--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2

  .xs12.md6.lg4.xl2.pa1
    .primary--bg.py3
      template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
      template(v-else-if="$waveui.breakpoint.md") md6
      template(v-else-if="$waveui.breakpoint.lg") lg4
      template(v-else-if="$waveui.breakpoint.xl") xl2`,-1)]]),html:t(()=>[...j[24]||=[s(`<w-flex wrap class="text-center">
  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>

  <div class="xs12 md6 lg4 xl2 pa1">
    <div class="primary--bg py3">
      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>
      <template v-else-if="$waveui.breakpoint.md">md6</template>
      <template v-else-if="$waveui.breakpoint.lg">lg4</template>
      <template v-else-if="$waveui.breakpoint.xl">xl2</template>
    </div>
  </div>
</w-flex>
`,-1)]]),default:t(()=>[o(L,{class:`text-center`,wrap:``},{default:t(()=>[i(`div`,y,[i(`div`,b,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(l(),a(d,{key:0},[s(`xs12`)],64)):p.$waveui.breakpoint.md?(l(),a(d,{key:1},[s(`md6`)],64)):p.$waveui.breakpoint.lg?(l(),a(d,{key:2},[s(`lg4`)],64)):p.$waveui.breakpoint.xl?(l(),a(d,{key:3},[s(`xl2`)],64)):f(``,!0)])]),i(`div`,x,[i(`div`,S,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(l(),a(d,{key:0},[s(`xs12`)],64)):p.$waveui.breakpoint.md?(l(),a(d,{key:1},[s(`md6`)],64)):p.$waveui.breakpoint.lg?(l(),a(d,{key:2},[s(`lg4`)],64)):p.$waveui.breakpoint.xl?(l(),a(d,{key:3},[s(`xl2`)],64)):f(``,!0)])]),i(`div`,C,[i(`div`,w,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(l(),a(d,{key:0},[s(`xs12`)],64)):p.$waveui.breakpoint.md?(l(),a(d,{key:1},[s(`md6`)],64)):p.$waveui.breakpoint.lg?(l(),a(d,{key:2},[s(`lg4`)],64)):p.$waveui.breakpoint.xl?(l(),a(d,{key:3},[s(`xl2`)],64)):f(``,!0)])]),i(`div`,T,[i(`div`,E,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(l(),a(d,{key:0},[s(`xs12`)],64)):p.$waveui.breakpoint.md?(l(),a(d,{key:1},[s(`md6`)],64)):p.$waveui.breakpoint.lg?(l(),a(d,{key:2},[s(`lg4`)],64)):p.$waveui.breakpoint.xl?(l(),a(d,{key:3},[s(`xl2`)],64)):f(``,!0)])]),i(`div`,D,[i(`div`,O,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(l(),a(d,{key:0},[s(`xs12`)],64)):p.$waveui.breakpoint.md?(l(),a(d,{key:1},[s(`md6`)],64)):p.$waveui.breakpoint.lg?(l(),a(d,{key:2},[s(`lg4`)],64)):p.$waveui.breakpoint.xl?(l(),a(d,{key:3},[s(`xl2`)],64)):f(``,!0)])]),i(`div`,k,[i(`div`,A,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(l(),a(d,{key:0},[s(`xs12`)],64)):p.$waveui.breakpoint.md?(l(),a(d,{key:1},[s(`md6`)],64)):p.$waveui.breakpoint.lg?(l(),a(d,{key:2},[s(`lg4`)],64)):p.$waveui.breakpoint.xl?(l(),a(d,{key:3},[s(`xl2`)],64)):f(``,!0)])])]),_:1})]),_:1}),o(M,{h2:``},{default:t(()=>[...j[25]||=[s(`Using the gap option with the grid system`,-1)]]),_:1}),i(`p`,null,[j[28]||=s(`The `,-1),j[29]||=i(`strong`,{class:`code inherit`},`w-flex`,-1),j[30]||=s(` component has a`,-1),o(R,{class:`ml1`,to:`/layout--flex#gap`},{default:t(()=>[...j[26]||=[i(`span`,{class:`code inherit`},`gap`,-1),s(` option`,-1)]]),_:1}),j[31]||=s(`, as well as `,-1),o(R,{class:`ml1`,to:`/layout--flex#caveat`},{default:t(()=>[...j[27]||=[s(`a caveat`,-1)]]),_:1}),j[32]||=s(` when used with flex wrap.`,-1)])])}var M=p({},[[`render`,j]]);export{M as default};
