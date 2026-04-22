import{H as e,N as t,c as n,d as r,g as i,h as a,ht as o,j as s,k as c,m as l,r as u,vt as d}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as f}from"./_plugin-vue_export-helper-S3RvzygF.js";var p={class:`w-flex wrap`},m={class:`code`},h={class:`w-flex wrap`},g={class:`code`},_={class:`w-flex wrap`},v={class:`code`};function y(f,y,b,x,S,C){let w=t(`title-link`),T=t(`alert`),E=t(`example`),D=t(`w-divider`),O=t(`w-image`),k=t(`w-flex`),A=t(`w-switch`),j=t(`w-card`),M=t(`w-accordion-item`),N=t(`w-accordion`);return c(),r(`main`,null,[i(w,{class:`mt4`,h1:``},{default:e(()=>[...y[0]||=[a(`shadows, borders & border radii`,-1)]]),_:1}),y[31]||=n(`p`,null,[a(`Wave UI offers a few CSS helper classes to control the drop shadow, borders and border radii.`),n(`br`),a(`
You can use these classes on any component and any DOM element, even if the element is not part of
Wave UI.`),n(`br`)],-1),i(T,{tip:``},{default:e(()=>[...y[1]||=[a(`The following offered classes are targeting the common use cases: there isn't a CSS class for
anything you want to accomplish. It's of course a trade-off to keep the library lean.`,-1),n(`br`,null,null,-1),a(`
That being said, it's very easy to add your own classes based on the same principle in your CSS!
`,-1)]]),_:1}),i(w,{h2:``},{default:e(()=>[...y[2]||=[a(`Shadows`,-1)]]),_:1}),y[32]||=n(`p`,null,[a(`Element shadows range from `),n(`code`,null,`-6`),a(` to `),n(`code`,null,`6`),a(`. Negative values will produce an inset shadow,
whereas positive values will produce an outer drop shadow. `),n(`code`,null,`.sh0`),a(` will remove any shadow.`)],-1),i(E,null,{pug:e(()=>[...y[3]||=[a(`.w-flex.wrap
  .box.sh-6 .sh-6
  .box.sh-5 .sh-5
  .box.sh-4 .sh-4
  .box.sh-3 .sh-3
  .box.sh-2 .sh-2
  .box.sh-1 .sh-1
  .box.sh0 .sh0
  .box.sh1 .sh1
  .box.sh2 .sh2
  .box.sh3 .sh3
  .box.sh4 .sh4
  .box.sh5 .sh5
  .box.sh6 .sh6`,-1)]]),html:e(()=>[...y[4]||=[a(`<w-flex wrap>
  <div class="box sh-6">.sh-6</div>
  <div class="box sh-5">.sh-5</div>
  <div class="box sh-4">.sh-4</div>
  <div class="box sh-3">.sh-3</div>
  <div class="box sh-2">.sh-2</div>
  <div class="box sh-1">.sh-1</div>
  <div class="box sh0">.sh0</div>
  <div class="box sh1">.sh1</div>
  <div class="box sh2">.sh2</div>
  <div class="box sh3">.sh3</div>
  <div class="box sh4">.sh4</div>
  <div class="box sh5">.sh5</div>
  <div class="box sh6">.sh6</div>
</w-flex>`,-1)]]),css:e(()=>[...y[5]||=[a(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n",-1)]]),default:e(()=>[n(`div`,p,[(c(),r(u,null,s(13,e=>n(`div`,{class:o([`box blue-light5--bg ma4 d-flex align-center justify-center`,`sh${e-7}`]),key:e},[n(`span`,m,`.sh`+d(e-7),1)],2)),64))])]),_:1}),i(w,{h2:``},{default:e(()=>[...y[6]||=[a(`Borders`,-1)]]),_:1}),y[33]||=n(`p`,null,[a(`Element borders range from `),n(`code`,null,`0`),a(` to `),n(`code`,null,`6`),a(`, corresponding to the same number of pixels (for
the `),n(`span`,{class:`code`},`border-width`),a(`) on all the sides. `),n(`code`,null,`.bd0`),a(` will remove any border.`)],-1),i(E,null,{pug:e(()=>[...y[7]||=[a(`.w-flex.wrap
  .box.bd0 .bd0
  .box.bd1 .bd1
  .box.bd2 .bd2
  .box.bd3 .bd3
  .box.bd4 .bd4
  .box.bd5 .bd5
  .box.bd6 .bd6`,-1)]]),html:e(()=>[...y[8]||=[a(`<w-flex wrap>
  <div class="box bd0">.bd0</div>
  <div class="box bd1">.bd1</div>
  <div class="box bd2">.bd2</div>
  <div class="box bd3">.bd3</div>
  <div class="box bd4">.bd4</div>
  <div class="box bd5">.bd5</div>
  <div class="box bd6">.bd6</div>
</w-flex>`,-1)]]),css:e(()=>[...y[9]||=[a(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n",-1)]]),default:e(()=>[n(`div`,h,[(c(),r(u,null,s(7,e=>n(`div`,{class:o([`box blue-light5--bg ma4 d-flex align-center justify-center`,`bd${e-1}`]),key:e},[n(`span`,g,`.bd`+d(e-1),1)],2)),64))])]),_:1}),i(w,{h2:``},{default:e(()=>[...y[10]||=[a(`Border radii`,-1)]]),_:1}),y[34]||=l(`<p>The border radii range from <code>0</code> to <code>6</code>, and are incremented by the <code>$base-increment</code>
(SCSS variable) which is equal to 4px by default.<br> <code>.bdrs0</code> will remove any border radius, <code>.bdrsr</code> will produce a <strong>round</strong> border
radius, <code>.bdrsm</code> will produce a <strong>max</strong> border radius (<span class="code">100%</span>).</p>`,1),i(T,{tip:``},{default:e(()=>[...y[11]||=[a(`Here is the difference between `,-1),n(`code`,null,`.bdrsr`,-1),a(` and `,-1),n(`code`,null,`.bdrsm`,-1),a(` (only visible on non-square elements):`,-1),n(`div`,{class:`w-flex`},[n(`div`,{class:`box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsr`},[n(`span`,{class:`code`},`.bdrsr`)]),n(`div`,{class:`box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsm`},[n(`span`,{class:`code`},`.bdrsm`)])],-1)]]),_:1}),i(E,null,{pug:e(()=>[...y[14]||=[a(`.w-flex.wrap
  .box.bdrs0 .bdrs0
  .box.bdrs1 .bdrs1
  .box.bdrs2 .bdrs2
  .box.bdrs3 .bdrs3
  .box.bdrs4 .bdrs4
  .box.bdrs5 .bdrs5
  .box.bdrs6 .bdrs6
  .box.bdrsr
    span.code .bdrsr
  .box.bdrsm
    span.code .bdrsm`,-1)]]),html:e(()=>[...y[15]||=[a(`<w-flex wrap>
  <div class="box bdrs0">.bdrs0</div>
  <div class="box bdrs1">.bdrs1</div>
  <div class="box bdrs2">.bdrs2</div>
  <div class="box bdrs3">.bdrs3</div>
  <div class="box bdrs4">.bdrs4</div>
  <div class="box bdrs5">.bdrs5</div>
  <div class="box bdrs6">.bdrs6</div>
  <div class="box bdrsr">.bdrsr</div>
  <div class="box bdrsm">.bdrsm</div>
</w-flex>`,-1)]]),css:e(()=>[...y[16]||=[a(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n",-1)]]),default:e(()=>[n(`div`,_,[(c(),r(u,null,s(7,e=>n(`div`,{class:o([`box blue-light5--bg ma4 d-flex align-center justify-center`,`bdrs${e-1}`]),key:e},[n(`span`,v,`.bdrs`+d(e-1),1)],2)),64)),y[12]||=n(`div`,{class:`box blue-light5--bg ma4 d-flex align-center justify-center bdrsr`},[n(`span`,{class:`code`},`.bdrsr`)],-1),y[13]||=n(`div`,{class:`box blue-light5--bg ma4 d-flex align-center justify-center bdrsm`},[n(`span`,{class:`code`},`.bdrsm`)],-1)])]),_:1}),i(D,{class:`my12`}),i(w,{h2:``},{default:e(()=>[...y[17]||=[a(`Examples of use on UI components`,-1)]]),_:1}),y[35]||=n(`p`,null,`Below are a few examples of components which accept the presented classes.`,-1),i(E,null,{pug:e(()=>[...y[20]||=[a('w-flex(align-center justify-space-around wrap)\n  w-flex.no-grow(column align-center justify-center)\n    w-image.bd1.sh1.bdrsr.d-block(\n      :src="`${baseUrl}images/japanese-wave.png`"\n      :width="100"\n      :height="100")\n    span.mt3 w-image with `.bd1`, `.bdrsr` and `.sh1` classes.\n  w-switch.bdrs1.my4(:model-value="true") a w-switch with a `.bdrs1` class.',-1)]]),html:e(()=>[...y[21]||=[a(`<w-flex align-center justify-space-around wrap>
  <w-flex column align-center justify-center class="no-grow">
    <w-image
      class="bd1 sh1 bdrsr d-block"
      :src="\`\${baseUrl}images/japanese-wave.png\`"
      :width="100"
      :height="100">
    </w-image>
    <span class="mt3">
      w-image with \`.bd1\`, \`.bdrsr\` and \`.sh1\` classes.
    </span>
  </w-flex>

  <w-switch :model-value="true" class="bdrs1 my4">
    a w-switch with a \`.bdrs1\` class.
  </w-switch>
</w-flex>`,-1)]]),js:e(()=>[...y[22]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[i(k,{"align-center":``,"justify-space-around":``,wrap:``},{default:e(()=>[i(k,{class:`no-grow`,column:``,"align-center":``,"justify-center":``},{default:e(()=>[i(O,{class:`bd1 sh1 bdrsr d-block`,src:`${f.baseUrl}images/japanese-wave.png`,width:100,height:100},null,8,[`src`]),y[18]||=n(`span`,{class:`caption mt3`},[n(`strong`,{class:`code`},`w-image`),a(` with `),n(`code`,{class:`mx1`},`.bd1`),a(`, `),n(`code`,{class:`mx1`},`.bdrsr`),a(` and `),n(`code`,{class:`mx1`},`.sh1`),a(` classes.`)],-1)]),_:1}),i(A,{class:`bdrs1 my4 caption`,"model-value":!0},{default:e(()=>[...y[19]||=[a(`a `,-1),n(`strong`,{class:`code mx1`},`w-switch`,-1),a(` with a `,-1),n(`code`,{class:`mx1`},`.bdrs1`,-1),a(` class.`,-1)]]),_:1})]),_:1})]),_:1}),i(E,{class:`mt8`},{pug:e(()=>[...y[28]||=[a(`w-card.bdrs4.bd0.sh2(bg-color="orange-light5")
  .caption a `,-1),n(`strong`,{class:`code mx1`},`w-card`,-1),a(` with `,-1),n(`code`,{class:`mx1`},`.bd0`,-1),a(`, `,-1),n(`code`,{class:`mx1`},`.bdrs4`,-1),a(` and `,-1),n(`code`,{class:`mx1`},`.sh2`,-1),a(` classes.

w-accordion.mt8.bdrs2.bd1
  w-accordion-item
    template(#title)
      .title5.mb0 Accordion with `,-1),n(`code`,{class:`mx1`},`.bd1`,-1),a(` and `,-1),n(`code`,{class:`mx1`},`.bdrs2`,-1),a(` classes.
    template(#content) Content 1
  w-accordion-item
    template(#title) Item 2
    template(#content) Content 2`,-1)]]),html:e(()=>[...y[29]||=[a(`<w-card bg-color="orange-light5" class="bdrs4 bd0 sh2">
  <div class="caption">
    a w-card with \`.bd0\`, \`.bdrs4\` and \`.sh2\` classes.
  </div>
</w-card>

<w-accordion class="mt8 bdrs2 bd1">
  <w-accordion-item>
    <template #title>
      <div class="title5">
        Accordion with \`.bd1\` and \`.bdrs2\` classes.
      </div>
    </template>
    <template #content>
      Content 1
    </template>
  </w-accordion-item>

  <w-accordion-item>
    <template #title.2>
      Item 2
    </template>
    <template #content>
      Content 2
    </template>
  </w-accordion-item>
</w-accordion>
`,-1)]]),default:e(()=>[i(j,{class:`bdrs4 bd0 sh2`,"bg-color":`orange-light5`},{default:e(()=>[...y[23]||=[n(`div`,{class:`caption`},[a(`a `),n(`strong`,{class:`code mx1`},`w-card`),a(` with `),n(`code`,{class:`mx1`},`.bd0`),a(`, `),n(`code`,{class:`mx1`},`.bdrs4`),a(` and `),n(`code`,{class:`mx1`},`.sh2`),a(` classes.`)],-1)]]),_:1}),i(N,{class:`mt8 bdrs2 bd1`},{default:e(()=>[i(M,null,{title:e(()=>[...y[24]||=[n(`div`,{class:`title5 mb0`},[a(`Accordion with `),n(`code`,{class:`mx1`},`.bd1`),a(` and `),n(`code`,{class:`mx1`},`.bdrs2`),a(` classes.`)],-1)]]),content:e(()=>[...y[25]||=[a(`Content 1`,-1)]]),_:1}),i(M,null,{title:e(()=>[...y[26]||=[a(`Item 2`,-1)]]),content:e(()=>[...y[27]||=[a(`Content 2`,-1)]]),_:1})]),_:1})]),_:1}),i(T,{info:``},{default:e(()=>[...y[30]||=[a(`Some of the UI components that have wrappers won't work nicely with the border and shadow classes.
In this case you need to style them from your CSS.`,-1)]]),_:1})])}var b=f({data:()=>({baseUrl:`/wave-ui/`})},[[`render`,y]]);export{b as default};