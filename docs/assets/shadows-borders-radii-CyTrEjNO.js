import{r as t,o as b,g as c,a as o,w as d,b as e,d as n,F as x,k as m,n as w,t as a,h as k,_ as Y}from"./index-DJW-wguP.js";const S={class:"w-flex wrap"},C={class:"code"},$={class:"w-flex wrap"},I={class:"code"},U={class:"w-flex wrap"},B={class:"code"};function N(p,s,T,V,A,q){const r=t("title-link"),u=t("alert"),i=t("example"),f=t("w-divider"),g=t("w-image"),h=t("w-flex"),v=t("w-switch"),y=t("w-card"),j=t("w-accordion");return b(),c("main",null,[o(r,{class:"mt4",h1:""},{default:d(()=>s[0]||(s[0]=[e("shadows, borders & border radii")])),_:1}),s[28]||(s[28]=n("p",null,[e("Wave UI offers a few CSS helper classes to control the drop shadow, borders and border radii."),n("br"),e(`
You can use these classes on any component and any DOM element, even if the element is not part of
Wave UI.`),n("br")],-1)),o(u,{tip:""},{default:d(()=>s[1]||(s[1]=[e(`The following offered classes are targeting the common use cases: there isn't a CSS class for
anything you want to accomplish. It's of course a trade-off to keep the library lean.`),n("br",null,null,-1),e(`
That being said, it's very easy to add your own classes based on the same principle in your CSS!
`)])),_:1}),o(r,{h2:""},{default:d(()=>s[2]||(s[2]=[e("Shadows")])),_:1}),s[29]||(s[29]=n("p",null,[e("Element shadows range from "),n("code",null,"-6"),e(" to "),n("code",null,"6"),e(`. Negative values will produce an inset shadow,
whereas positive values will produce an outer drop shadow. `),n("code",null,".sh0"),e(" will remove any shadow.")],-1)),o(i,null,{pug:d(()=>s[3]||(s[3]=[e(`.w-flex.wrap
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
  .box.sh6 .sh6`)])),html:d(()=>s[4]||(s[4]=[e(`<w-flex wrap>
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
</w-flex>`)])),css:d(()=>s[5]||(s[5]=[e(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n")])),default:d(()=>[n("div",S,[(b(),c(x,null,m(13,l=>n("div",{class:w(["box blue-light5--bg ma4 d-flex align-center justify-center",`sh${l-7}`]),key:l},[n("span",C,".sh"+a(l-7),1)],2)),64))])]),_:1}),o(r,{h2:""},{default:d(()=>s[6]||(s[6]=[e("Borders")])),_:1}),s[30]||(s[30]=n("p",null,[e("Element borders range from "),n("code",null,"0"),e(" to "),n("code",null,"6"),e(`, corresponding to the same number of pixels (for
the `),n("span",{class:"code"},"border-width"),e(") on all the sides. "),n("code",null,".bd0"),e(" will remove any border.")],-1)),o(i,null,{pug:d(()=>s[7]||(s[7]=[e(`.w-flex.wrap
  .box.bd0 .bd0
  .box.bd1 .bd1
  .box.bd2 .bd2
  .box.bd3 .bd3
  .box.bd4 .bd4
  .box.bd5 .bd5
  .box.bd6 .bd6`)])),html:d(()=>s[8]||(s[8]=[e(`<w-flex wrap>
  <div class="box bd0">.bd0</div>
  <div class="box bd1">.bd1</div>
  <div class="box bd2">.bd2</div>
  <div class="box bd3">.bd3</div>
  <div class="box bd4">.bd4</div>
  <div class="box bd5">.bd5</div>
  <div class="box bd6">.bd6</div>
</w-flex>`)])),css:d(()=>s[9]||(s[9]=[e(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n")])),default:d(()=>[n("div",$,[(b(),c(x,null,m(7,l=>n("div",{class:w(["box blue-light5--bg ma4 d-flex align-center justify-center",`bd${l-1}`]),key:l},[n("span",I,".bd"+a(l-1),1)],2)),64))])]),_:1}),o(r,{h2:""},{default:d(()=>s[10]||(s[10]=[e("Border radii")])),_:1}),s[31]||(s[31]=k(`<p>The border radii range from <code>0</code> to <code>6</code>, and are incremented by the <code>$base-increment</code>
(SCSS variable) which is equal to 4px by default.<br> <code>.bdrs0</code> will remove any border radius, <code>.bdrsr</code> will produce a <strong>round</strong> border
radius, <code>.bdrsm</code> will produce a <strong>max</strong> border radius (<span class="code">100%</span>).</p>`,1)),o(u,{tip:""},{default:d(()=>s[11]||(s[11]=[e("Here is the difference between "),n("code",null,".bdrsr",-1),e(" and "),n("code",null,".bdrsm",-1),e(" (only visible on non-square elements):"),n("div",{class:"w-flex"},[n("div",{class:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[n("span",{class:"code"},".bdrsr")]),n("div",{class:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[n("span",{class:"code"},".bdrsm")])],-1)])),_:1}),o(i,null,{pug:d(()=>s[14]||(s[14]=[e(`.w-flex.wrap
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
    span.code .bdrsm`)])),html:d(()=>s[15]||(s[15]=[e(`<w-flex wrap>
  <div class="box bdrs0">.bdrs0</div>
  <div class="box bdrs1">.bdrs1</div>
  <div class="box bdrs2">.bdrs2</div>
  <div class="box bdrs3">.bdrs3</div>
  <div class="box bdrs4">.bdrs4</div>
  <div class="box bdrs5">.bdrs5</div>
  <div class="box bdrs6">.bdrs6</div>
  <div class="box bdrsr">.bdrsr</div>
  <div class="box bdrsm">.bdrsm</div>
</w-flex>`)])),css:d(()=>s[16]||(s[16]=[e(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n")])),default:d(()=>[n("div",U,[(b(),c(x,null,m(7,l=>n("div",{class:w(["box blue-light5--bg ma4 d-flex align-center justify-center",`bdrs${l-1}`]),key:l},[n("span",B,".bdrs"+a(l-1),1)],2)),64)),s[12]||(s[12]=n("div",{class:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[n("span",{class:"code"},".bdrsr")],-1)),s[13]||(s[13]=n("div",{class:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[n("span",{class:"code"},".bdrsm")],-1))])]),_:1}),o(f,{class:"my12"}),o(r,{h2:""},{default:d(()=>s[17]||(s[17]=[e("Examples of use on UI components")])),_:1}),s[32]||(s[32]=n("p",null,"Below are a few examples of components which accept the presented classes.",-1)),o(i,null,{pug:d(()=>s[20]||(s[20]=[e('w-flex(align-center justify-space-around wrap)\n  w-flex.no-grow(column align-center justify-center)\n    w-image.bd1.sh1.bdrsr.d-block(\n      :src="`${baseUrl}images/japanese-wave.png`"\n      :width="100"\n      :height="100")\n    span.mt3 w-image with `.bd1`, `.bdrsr` and `.sh1` classes.\n  w-switch.bdrs1.my4(:model-value="true") a w-switch with a `.bdrs1` class.')])),html:d(()=>s[21]||(s[21]=[e(`<w-flex align-center justify-space-around wrap>
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
</w-flex>`)])),js:d(()=>s[22]||(s[22]=[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:d(()=>[o(h,{"align-center":"","justify-space-around":"",wrap:""},{default:d(()=>[o(h,{class:"no-grow",column:"","align-center":"","justify-center":""},{default:d(()=>[o(g,{class:"bd1 sh1 bdrsr d-block",src:`${p.baseUrl}images/japanese-wave.png`,width:100,height:100},null,8,["src"]),s[18]||(s[18]=n("span",{class:"caption mt3"},[n("strong",{class:"code"},"w-image"),e(" with "),n("code",{class:"mx1"},".bd1"),e(", "),n("code",{class:"mx1"},".bdrsr"),e(" and "),n("code",{class:"mx1"},".sh1"),e(" classes.")],-1))]),_:1}),o(v,{class:"bdrs1 my4 caption","model-value":!0},{default:d(()=>s[19]||(s[19]=[e("a "),n("strong",{class:"code mx1"},"w-switch",-1),e(" with a "),n("code",{class:"mx1"},".bdrs1",-1),e(" class.")])),_:1})]),_:1})]),_:1}),o(i,{class:"mt8"},{pug:d(()=>s[25]||(s[25]=[e(`w-card.bdrs4.bd0.sh2(bg-color="orange-light5")
  .caption a `),n("strong",{class:"code mx1"},"w-card",-1),e(" with "),n("code",{class:"mx1"},".bd0",-1),e(", "),n("code",{class:"mx1"},".bdrs4",-1),e(" and "),n("code",{class:"mx1"},".sh2",-1),e(` classes.

w-accordion.mt8.bdrs2.bd1(:items="2")
  template(#item-title="{ index }")
    .title5 Accordion with `),n("code",{class:"mx1"},".bd1",-1),e(" and "),n("code",{class:"mx1"},".bdrs2",-1),e(` classes.
  template(#item-title.2="{ index }") Item `+a("{{ index }}")+`
  template(#item-content="{ index }") Content `+a("{{ index }}"))])),html:d(()=>s[26]||(s[26]=[e(`<w-card bg-color="orange-light5" class="bdrs4 bd0 sh2">
  <div class="caption">
    a w-card with \`.bd0\`, \`.bdrs4\` and \`.sh2\` classes.
  </div>
</w-card>

<w-accordion :items="2" class="mt8 bdrs2 bd1">
  <template #item-title="{ index }">
    <div class="title5">
      Accordion with \`.bd1\` and \`.bdrs2\` classes.
    </div>
  </template>

  <template #item-title.2="{ index }">
    Item `+a("{{ index }}")+`
  </template>
  <template #item-content="{ index }">
    Content `+a("{{ index }}")+`
  </template>
</w-accordion>
`)])),default:d(()=>[o(y,{class:"bdrs4 bd0 sh2","bg-color":"orange-light5"},{default:d(()=>s[23]||(s[23]=[n("div",{class:"caption"},[e("a "),n("strong",{class:"code mx1"},"w-card"),e(" with "),n("code",{class:"mx1"},".bd0"),e(", "),n("code",{class:"mx1"},".bdrs4"),e(" and "),n("code",{class:"mx1"},".sh2"),e(" classes.")],-1)])),_:1}),o(j,{class:"mt8 bdrs2 bd1",items:2},{"item-title":d(({index:l})=>s[24]||(s[24]=[n("div",{class:"title5 mb0"},[e("Accordion with "),n("code",{class:"mx1"},".bd1"),e(" and "),n("code",{class:"mx1"},".bdrs2"),e(" classes.")],-1)])),"item-title.2":d(({index:l})=>[e("Item "+a(l),1)]),"item-content":d(({index:l})=>[e("Content "+a(l),1)]),_:1})]),_:1}),o(u,{info:""},{default:d(()=>s[27]||(s[27]=[e(`Some of the UI components that have wrappers won't work nicely with the border and shadow classes.
In this case you need to style them from your CSS.`)])),_:1})])}const E={data:()=>({baseUrl:"/wave-ui/"})},F=Y(E,[["render",N]]);export{F as default};