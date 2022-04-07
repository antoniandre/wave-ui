import{_ as y,O as j}from"./index.f3654a4f.js";import{r as t,o as i,e as r,f as o,w as n,g as e,F as h,z as _,i as s,t as a,N as Y,A as u}from"./vendor.e64646cc.js";const k=s("shadows, borders & border radii"),S=e("p",null,[s("Wave UI offers a few CSS helper classes to control the drop shadow, borders and border radii."),e("br"),s(`
You can use these classes on any component and any DOM element, even if the element is not part of
Wave UI.`),e("br")],-1),C=s(`The following offered classes are targetting the common use cases: there isn't a CSS class for
anything you want to accomplish. It's of course a trade-off to keep the library lean.`),$=e("br",null,null,-1),I=s(`
That being said, it's very easy to add your own classes based on the same principle in your CSS!
`),U=s("Shadows"),B=e("p",null,[s("Element shadows range from "),e("code",null,"-6"),s(" to "),e("code",null,"6"),s(`. Negative values will produce an inset shadow,
whereas positive values will produce an outter drop shodow. `),e("code",null,".sh0"),s(" will remove any shadow.")],-1),N={class:"w-flex wrap"},A={class:"code"},E=s(`.w-flex.wrap
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
  .box.sh6 .sh6`),T=s(`<w-flex wrap>
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
</w-flex>`),V=s(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n"),z=s("Borders"),q=e("p",null,[s("Element borders range from "),e("code",null,"0"),s(" to "),e("code",null,"6"),s(`, corresponding to the same number of pixels (for
the `),e("span",{class:"code"},"border-width"),s(") on all the sides. "),e("code",null,".bd0"),s(" will remove any border.")],-1),D={class:"w-flex wrap"},F={class:"code"},O=s(`.w-flex.wrap
  .box.bd0 .bd0
  .box.bd1 .bd1
  .box.bd2 .bd2
  .box.bd3 .bd3
  .box.bd4 .bd4
  .box.bd5 .bd5
  .box.bd6 .bd6`),R=s(`<w-flex wrap>
  <div class="box bd0">.bd0</div>
  <div class="box bd1">.bd1</div>
  <div class="box bd2">.bd2</div>
  <div class="box bd3">.bd3</div>
  <div class="box bd4">.bd4</div>
  <div class="box bd5">.bd5</div>
  <div class="box bd6">.bd6</div>
</w-flex>`),W=s(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n"),H=s("Border radii"),L=Y(`<p>The border radii range from <code>0</code> to <code>6</code>, and are incremented by the <code>$base-increment</code>
(SCSS variable) which is equal to 4px by default.<br> <code>.bdrs0</code> will remove any border radius, <code>.bdrsr</code> will produce a <strong>round</strong> border
radius, <code>.bdrsm</code> will produce a <strong>max</strong> border radius (<span class="code">100%</span>).</p>`,1),M=s("Here is the difference between "),G=e("code",null,".bdrsr",-1),J=s(" and "),K=e("code",null,".bdrsm",-1),P=s(" (only visible on non-square elements):"),Q=e("div",{class:"w-flex"},[e("div",{class:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[e("span",{class:"code"},".bdrsr")]),e("div",{class:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[e("span",{class:"code"},".bdrsm")])],-1),X={class:"w-flex wrap"},Z={class:"code"},ss=e("div",{class:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[e("span",{class:"code"},".bdrsr")],-1),es=e("div",{class:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[e("span",{class:"code"},".bdrsm")],-1),ns=s(`.w-flex.wrap
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
    span.code .bdrsm`),os=s(`<w-flex wrap>
  <div class="box bdrs0">.bdrs0</div>
  <div class="box bdrs1">.bdrs1</div>
  <div class="box bdrs2">.bdrs2</div>
  <div class="box bdrs3">.bdrs3</div>
  <div class="box bdrs4">.bdrs4</div>
  <div class="box bdrs5">.bdrs5</div>
  <div class="box bdrs6">.bdrs6</div>
  <div class="box bdrsr">.bdrsr</div>
  <div class="box bdrsm">.bdrsm</div>
</w-flex>`),ds=s(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n"),ts=s("Examples of use on UI components"),as=e("p",null,"Bellow are a few examples of components which accept the presented classes.",-1),cs=e("span",{class:"caption mt3"},[e("strong",{class:"code"},"w-image"),s(" with "),e("code",{class:"mx1"},".bd1"),s(", "),e("code",{class:"mx1"},".bdrsr"),s(" and "),e("code",{class:"mx1"},".sh1"),s(" classes.")],-1),ls=s("a "),is=e("strong",{class:"code mx1"},"w-switch",-1),rs=s(" with a "),bs=e("code",{class:"mx1"},".bdrs1",-1),hs=s(" class."),_s=s('w-flex(align-center justify-space-around wrap)\n  w-flex.no-grow(column align-center justify-center)\n    w-image.bd1.sh1.bdrsr.d-block(\n      :src="`${baseUrl}images/japanese-wave.png`"\n      :width="100"\n      :height="100")\n    span.mt3 w-image with `.bd1`, `.bdrsr` and `.sh1` classes.\n  w-switch.bdrs1.my4(:model-value="true") a w-switch with a `.bdrs1` class.'),us=s(`<w-flex align-center justify-space-around wrap>
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
</w-flex>`),xs=s(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`),ms=e("div",{class:"caption"},[s("a "),e("strong",{class:"code mx1"},"w-card"),s(" with "),e("code",{class:"mx1"},".bd0"),s(", "),e("code",{class:"mx1"},".bdrs4"),s(" and "),e("code",{class:"mx1"},".sh2"),s(" classes.")],-1),ws=e("div",{class:"title5 mb0"},[s("Accordion with "),e("code",{class:"mx1"},".bd1"),s(" and "),e("code",{class:"mx1"},".bdrs2"),s(" classes.")],-1),ps=s(`w-card.bdrs4.bd0.sh2(bg-color="orange-light5")
  .caption a `),fs=e("strong",{class:"code mx1"},"w-card",-1),gs=s(" with "),vs=e("code",{class:"mx1"},".bd0",-1),ys=s(", "),js=e("code",{class:"mx1"},".bdrs4",-1),Ys=s(" and "),ks=e("code",{class:"mx1"},".sh2",-1),Ss=s(` classes.

w-accordion.mt8.bdrs2.bd1(:items="2")
  template(#item-title="{ index }")
    .title5 Accordion with `),Cs=e("code",{class:"mx1"},".bd1",-1),$s=s(" and "),Is=e("code",{class:"mx1"},".bdrs2",-1),Us=s(` classes.
  template(#item-title.2="{ index }") Item `+a("{{ index }}")+`
  template(#item-content="{ index }") Content `+a("{{ index }}")),Bs=s(`<w-card bg-color="orange-light5" class="bdrs4 bd0 sh2">
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
`),Ns=s(`Some of the UI components that have wrappers won't work nicely with the border and shadow classes.
In this case you need to style them from your CSS.`);function As(m,Ts,Vs,zs,qs,Ds){const c=t("title-link"),b=t("alert"),l=t("example"),w=t("w-divider"),p=t("w-image"),x=t("w-flex"),f=t("w-switch"),g=t("w-card"),v=t("w-accordion");return i(),r("main",null,[o(c,{class:"mt4",h1:""},{default:n(()=>[k]),_:1}),S,o(b,{tip:""},{default:n(()=>[C,$,I]),_:1}),o(c,{h2:""},{default:n(()=>[U]),_:1}),B,o(l,null,{pug:n(()=>[E]),html:n(()=>[T]),css:n(()=>[V]),default:n(()=>[e("div",N,[(i(),r(h,null,_(13,d=>e("div",{class:u(["box blue-light5--bg ma4 d-flex align-center justify-center",`sh${d-7}`]),key:d},[e("span",A,".sh"+a(d-7),1)],2)),64))])]),_:1}),o(c,{h2:""},{default:n(()=>[z]),_:1}),q,o(l,null,{pug:n(()=>[O]),html:n(()=>[R]),css:n(()=>[W]),default:n(()=>[e("div",D,[(i(),r(h,null,_(7,d=>e("div",{class:u(["box blue-light5--bg ma4 d-flex align-center justify-center",`bd${d-1}`]),key:d},[e("span",F,".bd"+a(d-1),1)],2)),64))])]),_:1}),o(c,{h2:""},{default:n(()=>[H]),_:1}),L,o(b,{tip:""},{default:n(()=>[M,G,J,K,P,Q]),_:1}),o(l,null,{pug:n(()=>[ns]),html:n(()=>[os]),css:n(()=>[ds]),default:n(()=>[e("div",X,[(i(),r(h,null,_(7,d=>e("div",{class:u(["box blue-light5--bg ma4 d-flex align-center justify-center",`bdrs${d-1}`]),key:d},[e("span",Z,".bdrs"+a(d-1),1)],2)),64)),ss,es])]),_:1}),o(w,{class:"my12"}),o(c,{h2:""},{default:n(()=>[ts]),_:1}),as,o(l,null,{pug:n(()=>[_s]),html:n(()=>[us]),js:n(()=>[xs]),default:n(()=>[o(x,{"align-center":"","justify-space-around":"",wrap:""},{default:n(()=>[o(x,{class:"no-grow",column:"","align-center":"","justify-center":""},{default:n(()=>[o(p,{class:"bd1 sh1 bdrsr d-block",src:`${m.baseUrl}images/japanese-wave.png`,width:100,height:100},null,8,["src"]),cs]),_:1}),o(f,{class:"bdrs1 my4 caption","model-value":!0},{default:n(()=>[ls,is,rs,bs,hs]),_:1})]),_:1})]),_:1}),o(l,{class:"mt8"},{pug:n(()=>[ps,fs,gs,vs,ys,js,Ys,ks,Ss,Cs,$s,Is,Us]),html:n(()=>[Bs]),default:n(()=>[o(g,{class:"bdrs4 bd0 sh2","bg-color":"orange-light5"},{default:n(()=>[ms]),_:1}),o(v,{class:"mt8 bdrs2 bd1",items:2},{"item-title":n(({index:d})=>[ws]),"item-title.2":n(({index:d})=>[s("Item "+a(d),1)]),"item-content":n(({index:d})=>[s("Content "+a(d),1)]),_:1})]),_:1}),o(b,{info:""},{default:n(()=>[Ns]),_:1})])}const Es={data:()=>({colors:j,horizontal:!1,baseUrl:"/wave-ui/"})};var Rs=y(Es,[["render",As]]);export{Rs as default};
