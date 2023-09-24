import{r as t,o as i,g as r,a as d,w as n,b as s,d as e,F as h,k as u,n as x,t as a,h as y,_ as j}from"./index.bf2cfd71.js";const k=e("p",null,[s("Wave UI offers a few CSS helper classes to control the drop shadow, borders and border radii."),e("br"),s(`
You can use these classes on any component and any DOM element, even if the element is not part of
Wave UI.`),e("br")],-1),Y=e("br",null,null,-1),S=e("p",null,[s("Element shadows range from "),e("code",null,"-6"),s(" to "),e("code",null,"6"),s(`. Negative values will produce an inset shadow,
whereas positive values will produce an outer drop shadow. `),e("code",null,".sh0"),s(" will remove any shadow.")],-1),C={class:"w-flex wrap"},$={class:"code"},I=e("p",null,[s("Element borders range from "),e("code",null,"0"),s(" to "),e("code",null,"6"),s(`, corresponding to the same number of pixels (for
the `),e("span",{class:"code"},"border-width"),s(") on all the sides. "),e("code",null,".bd0"),s(" will remove any border.")],-1),U={class:"w-flex wrap"},B={class:"code"},N=y(`<p>The border radii range from <code>0</code> to <code>6</code>, and are incremented by the <code>$base-increment</code>
(SCSS variable) which is equal to 4px by default.<br> <code>.bdrs0</code> will remove any border radius, <code>.bdrsr</code> will produce a <strong>round</strong> border
radius, <code>.bdrsm</code> will produce a <strong>max</strong> border radius (<span class="code">100%</span>).</p>`,1),E=e("code",null,".bdrsr",-1),T=e("code",null,".bdrsm",-1),V=e("div",{class:"w-flex"},[e("div",{class:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[e("span",{class:"code"},".bdrsr")]),e("div",{class:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[e("span",{class:"code"},".bdrsm")])],-1),A={class:"w-flex wrap"},q={class:"code"},D=e("div",{class:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[e("span",{class:"code"},".bdrsr")],-1),F=e("div",{class:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[e("span",{class:"code"},".bdrsm")],-1),R=e("p",null,"Below are a few examples of components which accept the presented classes.",-1),W=e("span",{class:"caption mt3"},[e("strong",{class:"code"},"w-image"),s(" with "),e("code",{class:"mx1"},".bd1"),s(", "),e("code",{class:"mx1"},".bdrsr"),s(" and "),e("code",{class:"mx1"},".sh1"),s(" classes.")],-1),z=e("strong",{class:"code mx1"},"w-switch",-1),H=e("code",{class:"mx1"},".bdrs1",-1),L=e("div",{class:"caption"},[s("a "),e("strong",{class:"code mx1"},"w-card"),s(" with "),e("code",{class:"mx1"},".bd0"),s(", "),e("code",{class:"mx1"},".bdrs4"),s(" and "),e("code",{class:"mx1"},".sh2"),s(" classes.")],-1),M=e("div",{class:"title5 mb0"},[s("Accordion with "),e("code",{class:"mx1"},".bd1"),s(" and "),e("code",{class:"mx1"},".bdrs2"),s(" classes.")],-1),O=e("strong",{class:"code mx1"},"w-card",-1),G=e("code",{class:"mx1"},".bd0",-1),J=e("code",{class:"mx1"},".bdrs4",-1),K=e("code",{class:"mx1"},".sh2",-1),P=e("code",{class:"mx1"},".bd1",-1),Q=e("code",{class:"mx1"},".bdrs2",-1);function X(w,ss,es,ns,ds,os){const l=t("title-link"),b=t("alert"),c=t("example"),p=t("w-divider"),_=t("w-image"),m=t("w-flex"),f=t("w-switch"),g=t("w-card"),v=t("w-accordion");return i(),r("main",null,[d(l,{class:"mt4",h1:""},{default:n(()=>[s("shadows, borders & border radii")]),_:1}),k,d(b,{tip:""},{default:n(()=>[s(`The following offered classes are targeting the common use cases: there isn't a CSS class for
anything you want to accomplish. It's of course a trade-off to keep the library lean.`),Y,s(`
That being said, it's very easy to add your own classes based on the same principle in your CSS!
`)]),_:1}),d(l,{h2:""},{default:n(()=>[s("Shadows")]),_:1}),S,d(c,null,{pug:n(()=>[s(`.w-flex.wrap
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
  .box.sh6 .sh6`)]),html:n(()=>[s(`<w-flex wrap>
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
</w-flex>`)]),css:n(()=>[s(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n")]),default:n(()=>[e("div",C,[(i(),r(h,null,u(13,o=>e("div",{class:x(["box blue-light5--bg ma4 d-flex align-center justify-center",`sh${o-7}`]),key:o},[e("span",$,".sh"+a(o-7),1)],2)),64))])]),_:1}),d(l,{h2:""},{default:n(()=>[s("Borders")]),_:1}),I,d(c,null,{pug:n(()=>[s(`.w-flex.wrap
  .box.bd0 .bd0
  .box.bd1 .bd1
  .box.bd2 .bd2
  .box.bd3 .bd3
  .box.bd4 .bd4
  .box.bd5 .bd5
  .box.bd6 .bd6`)]),html:n(()=>[s(`<w-flex wrap>
  <div class="box bd0">.bd0</div>
  <div class="box bd1">.bd1</div>
  <div class="box bd2">.bd2</div>
  <div class="box bd3">.bd3</div>
  <div class="box bd4">.bd4</div>
  <div class="box bd5">.bd5</div>
  <div class="box bd6">.bd6</div>
</w-flex>`)]),css:n(()=>[s(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n")]),default:n(()=>[e("div",U,[(i(),r(h,null,u(7,o=>e("div",{class:x(["box blue-light5--bg ma4 d-flex align-center justify-center",`bd${o-1}`]),key:o},[e("span",B,".bd"+a(o-1),1)],2)),64))])]),_:1}),d(l,{h2:""},{default:n(()=>[s("Border radii")]),_:1}),N,d(b,{tip:""},{default:n(()=>[s("Here is the difference between "),E,s(" and "),T,s(" (only visible on non-square elements):"),V]),_:1}),d(c,null,{pug:n(()=>[s(`.w-flex.wrap
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
    span.code .bdrsm`)]),html:n(()=>[s(`<w-flex wrap>
  <div class="box bdrs0">.bdrs0</div>
  <div class="box bdrs1">.bdrs1</div>
  <div class="box bdrs2">.bdrs2</div>
  <div class="box bdrs3">.bdrs3</div>
  <div class="box bdrs4">.bdrs4</div>
  <div class="box bdrs5">.bdrs5</div>
  <div class="box bdrs6">.bdrs6</div>
  <div class="box bdrsr">.bdrsr</div>
  <div class="box bdrsm">.bdrsm</div>
</w-flex>`)]),css:n(()=>[s(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n")]),default:n(()=>[e("div",A,[(i(),r(h,null,u(7,o=>e("div",{class:x(["box blue-light5--bg ma4 d-flex align-center justify-center",`bdrs${o-1}`]),key:o},[e("span",q,".bdrs"+a(o-1),1)],2)),64)),D,F])]),_:1}),d(p,{class:"my12"}),d(l,{h2:""},{default:n(()=>[s("Examples of use on UI components")]),_:1}),R,d(c,null,{pug:n(()=>[s('w-flex(align-center justify-space-around wrap)\n  w-flex.no-grow(column align-center justify-center)\n    w-image.bd1.sh1.bdrsr.d-block(\n      :src="`${baseUrl}images/japanese-wave.png`"\n      :width="100"\n      :height="100")\n    span.mt3 w-image with `.bd1`, `.bdrsr` and `.sh1` classes.\n  w-switch.bdrs1.my4(:model-value="true") a w-switch with a `.bdrs1` class.')]),html:n(()=>[s(`<w-flex align-center justify-space-around wrap>
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
</w-flex>`)]),js:n(()=>[s(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:n(()=>[d(m,{"align-center":"","justify-space-around":"",wrap:""},{default:n(()=>[d(m,{class:"no-grow",column:"","align-center":"","justify-center":""},{default:n(()=>[d(_,{class:"bd1 sh1 bdrsr d-block",src:`${w.baseUrl}images/japanese-wave.png`,width:100,height:100},null,8,["src"]),W]),_:1}),d(f,{class:"bdrs1 my4 caption","model-value":!0},{default:n(()=>[s("a "),z,s(" with a "),H,s(" class.")]),_:1})]),_:1})]),_:1}),d(c,{class:"mt8"},{pug:n(()=>[s(`w-card.bdrs4.bd0.sh2(bg-color="orange-light5")
  .caption a `),O,s(" with "),G,s(", "),J,s(" and "),K,s(` classes.

w-accordion.mt8.bdrs2.bd1(:items="2")
  template(#item-title="{ index }")
    .title5 Accordion with `),P,s(" and "),Q,s(` classes.
  template(#item-title.2="{ index }") Item `+a("{{ index }}")+`
  template(#item-content="{ index }") Content `+a("{{ index }}"))]),html:n(()=>[s(`<w-card bg-color="orange-light5" class="bdrs4 bd0 sh2">
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
`)]),default:n(()=>[d(g,{class:"bdrs4 bd0 sh2","bg-color":"orange-light5"},{default:n(()=>[L]),_:1}),d(v,{class:"mt8 bdrs2 bd1",items:2},{"item-title":n(({index:o})=>[M]),"item-title.2":n(({index:o})=>[s("Item "+a(o),1)]),"item-content":n(({index:o})=>[s("Content "+a(o),1)]),_:1})]),_:1}),d(b,{info:""},{default:n(()=>[s(`Some of the UI components that have wrappers won't work nicely with the border and shadow classes.
In this case you need to style them from your CSS.`)]),_:1})])}const Z={data:()=>({baseUrl:"/wave-ui/"})},as=j(Z,[["render",X]]);export{as as default};
