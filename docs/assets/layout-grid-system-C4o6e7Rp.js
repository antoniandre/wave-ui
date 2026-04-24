import{N as e,U as t,c as n,d as r,g as i,gt as a,h as o,j as s,k as c,m as l,r as u,u as d,yt as f}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as p}from"./_plugin-vue_export-helper-S3RvzygF.js";var m={class:`xs12 pa1`},h={class:`xs4 pa1`},g={class:`xs3 pa1`},_={class:`xs2 pa1`},v={class:`title2 mt0`},y={class:`xs12 md6 lg4 xl2 pa1`},b={class:`primary--bg py3`},x={class:`xs12 md6 lg4 xl2 pa1`},S={class:`primary--bg py3`},C={class:`xs12 md6 lg4 xl2 pa1`},w={class:`primary--bg py3`},T={class:`xs12 md6 lg4 xl2 pa1`},E={class:`primary--bg py3`},D={class:`xs12 md6 lg4 xl2 pa1`},O={class:`primary--bg py3`},k={class:`xs12 md6 lg4 xl2 pa1`},A={class:`primary--bg py3`};function j(p,j){let M=e(`title-link`),N=e(`ssh-pre`),P=e(`alert`),F=e(`example`),I=e(`w-card`),L=e(`w-flex`),R=e(`router-link`);return c(),r(`main`,null,[i(M,{class:`mt4`,h1:``},{default:t(()=>[...j[0]||=[o(`Grid system (flexbox)`,-1)]]),_:1}),j[33]||=n(`div`,{class:`title3`},`The grid system (using flexbox) is 12-cell based by default.`,-1),j[34]||=n(`p`,null,[o(`Its purpose is to divide the available width (in percentage)
of a container in 12 cells to easily let you create the design that you want.`),n(`br`),o(`
You can then assign this created layout to a particular breakpoint.
`)],-1),i(P,{info:``},{default:t(()=>[j[2]||=o(`The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
or whatever you want via the global Wave UI options:`,-1),i(N,{class:`mb0`,language:`js`,dark:p.$store.state.darkMode},{default:t(()=>[...j[1]||=[o(`new WaveUI({
  css: {
    grid: 24
  }
})
`,-1)]]),_:1},8,[`dark`])]),_:1}),i(M,{h2:``},{default:t(()=>[...j[3]||=[o(`How to use`,-1)]]),_:1}),i(P,{info:``},{default:t(()=>[...j[4]||=[o(`For this flexbox layout, you need to:`,-1),n(`ol`,null,[n(`li`,null,[o(`Use the `),n(`strong`,{class:`code`},`w-flex`),o(` component or class on the parent in order to set the
`),n(`strong`,null,`flex`),o(` context (`),n(`code`,null,`display: flex`),o(`).`)]),n(`li`,null,`Use the predefined classes on the children in order to divide the available width
according to the class in use.
`)],-1)]]),_:1}),j[35]||=l(`<fieldset class="w-flex pa4 pt3 amber-light5--bg" style="position:relative;"><legend class="px1 round"><strong class="code amber-dark3">&lt;w-flex&gt;</strong></legend><fieldset class="xs3 light-blue-light5--bg pa3 code"><legend class="light-blue-dark2 px1">div.xs3</legend></fieldset><fieldset class="xs9 light-blue-light5--bg pa3 code ml1"><legend class="light-blue-dark2 px1">div.xs9</legend></fieldset></fieldset><p class="mt6">In this case:</p><ul><li>xs3 represents 3 units of the 12-cell-based grid, which equals to: (100% total width ÷ 12 cells) x 3 = 25%</li><li>xs9 represents 9 units of the 12-cell-based grid, which equals to: (100% total width ÷ 12 cells) x 9 = 75%</li></ul>`,3),i(M,{h2:``},{default:t(()=>[...j[5]||=[o(`Basic grid`,-1)]]),_:1}),j[36]||=n(`p`,null,[o(`Let's start with a basic example. The following splitting is applied on the `),n(`span`,{class:`code`},`xs`),o(`
breakpoint and will thus be applied on all the breakpoints.`)],-1),i(P,{tip:``},{default:t(()=>[...j[6]||=[o(`The grid cells must be in a flex context to display inline, you can wrap them in a
`,-1),n(`strong`,{class:`code`},`w-flex`,-1),o(` component or `,-1),n(`code`,null,`.w-flex`,-1),o(` CSS class.
`,-1)]]),_:1}),i(F,null,{pug:t(()=>[...j[13]||=[o(`w-flex.text-center(wrap)
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
    .primary-light5--bg.black.py3 xs1`,-1)]]),html:t(()=>[...j[14]||=[o(`<w-flex wrap class="text-center">
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
`,-1)]]),default:t(()=>[n(`div`,{class:a([`w-flex wrap text-center`,p.$store.state.darkMode?`black`:`white`])},[n(`div`,m,[n(`div`,{class:a([`primary-dark1--bg py3`,{white:!p.$store.state.darkMode}])},`xs12`,2)]),j[11]||=n(`div`,{class:`xs6 pa1`},[n(`div`,{class:`primary--bg py3`},`xs6`)],-1),j[12]||=n(`div`,{class:`xs6 pa1`},[n(`div`,{class:`primary--bg py3`},`xs6`)],-1),(c(),r(u,null,s(3,e=>n(`div`,h,[...j[7]||=[n(`div`,{class:`primary-light1--bg py3`},`xs4`,-1)]])),64)),(c(),r(u,null,s(4,e=>n(`div`,g,[...j[8]||=[n(`div`,{class:`primary-light2--bg py3`},`xs3`,-1)]])),64)),(c(),r(u,null,s(6,e=>n(`div`,_,[...j[9]||=[n(`div`,{class:`primary-light3--bg py3 black`},`xs2`,-1)]])),64)),(c(),r(u,null,s(12,e=>n(`div`,{class:`xs1 pa1`,key:e},[...j[10]||=[n(`div`,{class:`primary-light5--bg py3 black`},`xs1`,-1)]])),64))],2)]),_:1}),i(F,{class:`mt8`},{pug:t(()=>[...j[16]||=[o(`w-flex.text-center(wrap)
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
    .primary-light3--bg.py3 xs7`,-1)]]),html:t(()=>[...j[17]||=[o(`<w-flex wrap class="text-center">
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
`,-1)]]),default:t(()=>[n(`div`,{class:a([`w-flex wrap text-center`,p.$store.state.darkMode?`black`:`white`])},[...j[15]||=[n(`div`,{class:`xs1 pa1`},[n(`div`,{class:`primary-dark1--bg py3`},`xs1`)],-1),n(`div`,{class:`xs11 pa1`},[n(`div`,{class:`primary-dark1--bg py3`},`xs11`)],-1),n(`div`,{class:`xs2 pa1`},[n(`div`,{class:`primary--bg py3`},`xs2`)],-1),n(`div`,{class:`xs10 pa1`},[n(`div`,{class:`primary--bg py3`},`xs10`)],-1),n(`div`,{class:`xs3 pa1`},[n(`div`,{class:`primary-light1--bg py3`},`xs3`)],-1),n(`div`,{class:`xs9 pa1`},[n(`div`,{class:`primary-light1--bg py3`},`xs9`)],-1),n(`div`,{class:`xs4 pa1`},[n(`div`,{class:`primary-light2--bg py3`},`xs4`)],-1),n(`div`,{class:`xs8 pa1`},[n(`div`,{class:`primary-light2--bg py3`},`xs8`)],-1),n(`div`,{class:`xs5 pa1`},[n(`div`,{class:`primary-light3--bg py3`},`xs5`)],-1),n(`div`,{class:`xs7 pa1`},[n(`div`,{class:`primary-light3--bg py3`},`xs7`)],-1)]],2)]),_:1}),i(M,{h2:``},{default:t(()=>[...j[18]||=[o(`Operating with breakpoints`,-1)]]),_:1}),i(F,null,{pug:t(()=>[...j[21]||=[o(`w-card.blue-light5--bg
  .title2.black
    | Current breakpoint:
    code `+f(`{{ $waveui.breakpoint.name }}`)+`
  em.grey.mt1 Resizing your browser will update the current breakpoint.`,-1)]]),html:t(()=>[...j[22]||=[o(`<w-card class="blue-light5--bg">
  <div class="title2 mt0 black">
    Current breakpoint:
    <code>`+f(`{{ $waveui.breakpoint.name }}`)+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`,-1)]]),default:t(()=>[i(I,{class:a(p.$store.state.darkMode?`grey-dark4--bg`:`blue-light5--bg`)},{default:t(()=>[n(`div`,v,[j[19]||=o(`Current breakpoint: `,-1),n(`code`,null,f(p.$waveui.breakpoint.name),1)]),j[20]||=n(`em`,{class:`grey mt1`},`Resizing your browser will update the current breakpoint.`,-1)]),_:1},8,[`class`])]),_:1}),j[37]||=n(`p`,null,`For this example, resize your browser and observe the different layout when crossing a breakpoint.`,-1),i(F,null,{pug:t(()=>[...j[23]||=[o(`w-flex.text-center(wrap)
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
      template(v-else-if="$waveui.breakpoint.xl") xl2`,-1)]]),html:t(()=>[...j[24]||=[o(`<w-flex wrap class="text-center">
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
`,-1)]]),default:t(()=>[i(L,{class:`text-center`,wrap:``},{default:t(()=>[n(`div`,y,[n(`div`,b,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(c(),r(u,{key:0},[o(`xs12`)],64)):p.$waveui.breakpoint.md?(c(),r(u,{key:1},[o(`md6`)],64)):p.$waveui.breakpoint.lg?(c(),r(u,{key:2},[o(`lg4`)],64)):p.$waveui.breakpoint.xl?(c(),r(u,{key:3},[o(`xl2`)],64)):d(``,!0)])]),n(`div`,x,[n(`div`,S,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(c(),r(u,{key:0},[o(`xs12`)],64)):p.$waveui.breakpoint.md?(c(),r(u,{key:1},[o(`md6`)],64)):p.$waveui.breakpoint.lg?(c(),r(u,{key:2},[o(`lg4`)],64)):p.$waveui.breakpoint.xl?(c(),r(u,{key:3},[o(`xl2`)],64)):d(``,!0)])]),n(`div`,C,[n(`div`,w,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(c(),r(u,{key:0},[o(`xs12`)],64)):p.$waveui.breakpoint.md?(c(),r(u,{key:1},[o(`md6`)],64)):p.$waveui.breakpoint.lg?(c(),r(u,{key:2},[o(`lg4`)],64)):p.$waveui.breakpoint.xl?(c(),r(u,{key:3},[o(`xl2`)],64)):d(``,!0)])]),n(`div`,T,[n(`div`,E,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(c(),r(u,{key:0},[o(`xs12`)],64)):p.$waveui.breakpoint.md?(c(),r(u,{key:1},[o(`md6`)],64)):p.$waveui.breakpoint.lg?(c(),r(u,{key:2},[o(`lg4`)],64)):p.$waveui.breakpoint.xl?(c(),r(u,{key:3},[o(`xl2`)],64)):d(``,!0)])]),n(`div`,D,[n(`div`,O,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(c(),r(u,{key:0},[o(`xs12`)],64)):p.$waveui.breakpoint.md?(c(),r(u,{key:1},[o(`md6`)],64)):p.$waveui.breakpoint.lg?(c(),r(u,{key:2},[o(`lg4`)],64)):p.$waveui.breakpoint.xl?(c(),r(u,{key:3},[o(`xl2`)],64)):d(``,!0)])]),n(`div`,k,[n(`div`,A,[p.$waveui.breakpoint.xs||p.$waveui.breakpoint.sm?(c(),r(u,{key:0},[o(`xs12`)],64)):p.$waveui.breakpoint.md?(c(),r(u,{key:1},[o(`md6`)],64)):p.$waveui.breakpoint.lg?(c(),r(u,{key:2},[o(`lg4`)],64)):p.$waveui.breakpoint.xl?(c(),r(u,{key:3},[o(`xl2`)],64)):d(``,!0)])])]),_:1})]),_:1}),i(M,{h2:``},{default:t(()=>[...j[25]||=[o(`Using the gap option with the grid system`,-1)]]),_:1}),n(`p`,null,[j[28]||=o(`The `,-1),j[29]||=n(`strong`,{class:`code inherit`},`w-flex`,-1),j[30]||=o(` component has a`,-1),i(R,{class:`ml1`,to:`/layout--flex#gap`},{default:t(()=>[...j[26]||=[n(`span`,{class:`code inherit`},`gap`,-1),o(` option`,-1)]]),_:1}),j[31]||=o(`, as well as `,-1),i(R,{class:`ml1`,to:`/layout--flex#caveat`},{default:t(()=>[...j[27]||=[o(`a caveat`,-1)]]),_:1}),j[32]||=o(` when used with flex wrap.`,-1)])])}var M=p({},[[`render`,j]]);export{M as default};