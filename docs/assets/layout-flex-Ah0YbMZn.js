import{r as a,o as r,g as x,a as i,w as n,b as e,d as l,h as g,F as p,k as f,_ as m}from"./index-CyDhd-Z0.js";const y={class:"grow mx1"},j={class:"grow mx1"},k={class:"grow mx1"},S={class:"grow mx1"},A={class:"grow mx1 xs12 sm4"},C={class:"grow mx1 xs12 sm4"},z={class:"grow mx1 xs12 sm4"},T={class:"grow mx1 xs12 sm4"},D={class:"grow mx1 xs12 sm4"},B={class:"grow mx1 xs12 sm4"},F={class:"grow mx1"},N={class:"grow mx1"},W={class:"black ml1",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox",target:"_blank"},V={class:"box grow"},q={class:"box grow"},E={class:"grow"},I={class:"yellow-light5--bg bd1"},L={class:"box xs6 code"},R={class:"grow"},U={class:"yellow-light5--bg bd1"},G={class:"box xs6 code"},J={class:"yellow-light5--bg bd1"},Y={class:"xs6 pa2"},H={class:"yellow-light5--bg bd1"};function K(O,s){const d=a("title-link"),o=a("example"),t=a("w-flex"),c=a("router-link"),u=a("alert"),v=a("w-icon"),w=a("w-grid");return r(),x("main",null,[i(d,{class:"mt4",h1:""},{default:n(()=>s[0]||(s[0]=[e("Flex layout classes")])),_:1}),i(d,{h2:"",slug:"w-flex-component-and-helper-classes"},{default:n(()=>s[1]||(s[1]=[l("span",{class:"code"},"w-flex",-1),e(" component & helper classes")])),_:1}),s[116]||(s[116]=g(`<p>the <code>w-flex</code> component and the <code>.w-flex</code> class both allow a flex layout that you can
easily control with the following classes or attributes on the component.</p><ul class="mt4"><li><code class="mr2">.row</code>By default. Displays in row (<span class="code">flex-direction: row</span>).</li><li><code class="mr2">.column</code>Displays in column (<span class="code">flex-direction: column</span>).</li><li class="mt1"><code class="mr2">.wrap</code>Wraps the flex content when it does not fit (<span class="code">flex-wrap: wrap</span>).</li><li class="mt1"><code class="mr2">.grow</code>Tells the element to occupy the available space (<span class="code">flex-grow: 1</span>).</li><li class="mt1"><code class="mr2">.no-grow</code>Tells the element to <strong>not</strong> occupy the available space (<span class="code">flex-grow: 0</span>).</li><li class="mt1"><code class="mr2">.shrink</code>Tells the element to shrink if there is not enough space (<span class="code">flex-shrink: 1</span>).</li><li class="mt1"><code class="mr2">.no-shrink</code>Tells the element to <strong>not</strong> shrink if there is not enough space (<span class="code">flex-shrink: 0</span>).</li><li class="mt1"><code class="mr2">.basis-zero</code>Distribute the children elements with equal space (<span class="code">flex-basis: 0</span>).<br>
By default, flex containers will distribute children elements according to their content width.</li><li class="mt1"><code class="mr2">.fill-width</code>Sets a width of 100%.</li><li class="mt1"><code class="mr2">.fill-height</code>Sets a height of 100%.</li></ul>`,2)),i(d,{h2:""},{default:n(()=>s[2]||(s[2]=[e("Alignments")])),_:1}),s[117]||(s[117]=g(`<p>Align children with these classes on the parent container:</p><ul><li class="mt1"><code class="mr2">.align-start</code>Applies this CSS rule: <span class="code">align: flex-start</span>.</li><li class="mt1"><code class="mr2">.align-center</code>Applies this CSS rule: <span class="code">align: center</span>.</li><li class="mt1"><code class="mr2">.align-end</code>Applies this CSS rule: <span class="code">align: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-start</code>Applies this CSS rule: <span class="code">justify: flex-start</span>.</li><li class="mt1"><code class="mr2">.justify-center</code>Applies this CSS rule: <span class="code">justify: center</span>.</li><li class="mt1"><code class="mr2">.justify-end</code>Applies this CSS rule: <span class="code">justify: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-space-around</code>Applies this CSS rule: <span class="code">justify: space-around</span>.</li><li class="mt1"><code class="mr2">.justify-space-between</code>Applies this CSS rule: <span class="code">justify: space-between</span>.</li><li class="mt1"><code class="mr2">.justify-space-evenly</code>Applies this CSS rule: <span class="code">justify: space-evenly</span>.</li></ul><p class="mt4">Align a child with these classes directly on the child element:</p><ul><li class="mt1"><code class="mr2">.align-self-start</code>Applies this CSS rule: <span class="code">align-self: flex-start</span>.</li><li class="mt1"><code class="mr2">.align-self-center</code>Applies this CSS rule: <span class="code">align-self: center</span>.</li><li class="mt1"><code class="mr2">.align-self-end</code>Applies this CSS rule: <span class="code">align-self: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-self-start</code>Applies this CSS rule: <span class="code">justify-self: flex-start</span>.</li><li class="mt1"><code class="mr2">.justify-self-center</code>Applies this CSS rule: <span class="code">justify-self: center</span>.</li><li class="mt1"><code class="mr2">.justify-self-end</code>Applies this CSS rule: <span class="code">justify-self: flex-end</span>.</li><li class="mt1"><code class="mr2">.basis-zero</code>Applies this CSS rule directly on the element: <span class="code">flex-basis: 0</span>.</li></ul><p class="mt6">The <code class="mx1">.spacer</code> class is also very helpful to separate 2 elements as it will occupy the full
available space and push the elements on each side.
</p><div class="w-divider my12"></div>`,6)),i(d,{class:"mt12 headline",h2:""},{default:n(()=>s[3]||(s[3]=[e("Examples")])),_:1}),i(d,{class:"mt8 title2",h3:""},{default:n(()=>s[4]||(s[4]=[e("Justify")])),_:1}),s[118]||(s[118]=l("div",{class:"title3 mt6"},"w-flex, row direction (default)",-1)),i(o,null,{pug:n(()=>s[5]||(s[5]=[e(`p.mb1 .justify-start (default)
w-flex.pa3.blue-light5--bg(justify-start)
  .box
  .box
  .box

p.mt4.mb1 .justify-center
w-flex.pa3.blue-light5--bg(justify-center)
  .box
  .box
  .box

p.mt4.mb1 .justify-end
w-flex.pa3.blue-light5--bg(justify-end)
  .box
  .box
  .box

p.mt4.mb1 .justify-space-between
w-flex.pa3.blue-light5--bg(justify-space-between)
  .box
  .box
  .box

p.mt4.mb1 .justify-space-evenly
w-flex.pa3.blue-light5--bg(justify-space-evenly)
  .box
  .box
  .box`)])),html:n(()=>s[6]||(s[6]=[e(`<p>.justify-start (default)</p>
<w-flex justify-start class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>

<p>.justify-center</p>
<w-flex justify-center class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>

<p>.justify-end</p>
<w-flex justify-end class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>

<p>.justify-space-between</p>
<w-flex justify-space-between class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>

<p>.justify-space-evenly</p>
<w-flex justify-space-evenly class="blue-light5--bg pa3">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</w-flex>`)])),css:n(()=>s[7]||(s[7]=[e(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}
`)])),default:n(()=>[s[8]||(s[8]=l("p",{class:"code mb1"},".justify-start (default)",-1)),s[9]||(s[9]=l("div",{class:"w-flex pa3 blue-light5--bg justify-start"},[l("div",{class:"box"}),l("div",{class:"box"}),l("div",{class:"box"})],-1)),s[10]||(s[10]=l("p",{class:"code mt4 mb1"},".justify-center",-1)),s[11]||(s[11]=l("div",{class:"w-flex pa3 blue-light5--bg justify-center"},[l("div",{class:"box"}),l("div",{class:"box"}),l("div",{class:"box"})],-1)),s[12]||(s[12]=l("p",{class:"code mt4 mb1"},".justify-end",-1)),s[13]||(s[13]=l("div",{class:"w-flex pa3 blue-light5--bg justify-end"},[l("div",{class:"box"}),l("div",{class:"box"}),l("div",{class:"box"})],-1)),s[14]||(s[14]=l("p",{class:"code mt4 mb1"},".justify-space-between",-1)),s[15]||(s[15]=l("div",{class:"w-flex pa3 blue-light5--bg justify-space-between"},[l("div",{class:"box"}),l("div",{class:"box"}),l("div",{class:"box"})],-1)),s[16]||(s[16]=l("p",{class:"code mt4 mb1"},".justify-space-evenly",-1)),s[17]||(s[17]=l("div",{class:"w-flex pa3 blue-light5--bg justify-space-evenly"},[l("div",{class:"box"}),l("div",{class:"box"}),l("div",{class:"box"})],-1))]),_:1}),s[119]||(s[119]=l("div",{class:"title3"},"w-flex, column direction",-1)),i(o,null,{pug:n(()=>s[26]||(s[26]=[e(`w-flex(basis-zero wrap)
  .grow.mx1
    p.mb1 .justify-start (default)
    w-flex.wrapper(column align-center justify-start)
      .box
      .box
      .box

  .grow.mx1
    p.mb1 .justify-center
    w-flex.wrapper(column align-center justify-center)
      .box
      .box
      .box

  .grow.mx1
    p.mb1 .justify-space-between
    w-flex.wrapper(column align-center justify-space-between)
      .box
      .box
      .box

  .grow.mx1
    p.mb1 .justify-end
    w-flex.wrapper(column align-center justify-end)
      .box
      .box
      .box`)])),html:n(()=>s[27]||(s[27]=[e(`<w-flex basis-zero wrap>
  <div class="grow mx1">
    <p>.justify-start (default)</p>
    <w-flex column align-center justify-start class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>.justify-center</p>
    <w-flex column align-center justify-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>.justify-space-between</p>
    <w-flex column align-center justify-space-between class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>.justify-end</p>
    <w-flex column align-center justify-end class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>
</w-flex>`)])),css:n(()=>s[28]||(s[28]=[e(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)])),default:n(()=>[i(t,{"basis-zero":"",wrap:""},{default:n(()=>[l("div",y,[s[19]||(s[19]=l("p",{class:"code mb1"},".justify-start (default)",-1)),i(t,{class:"wrapper",column:"","align-center":"","justify-start":""},{default:n(()=>s[18]||(s[18]=[l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1)])),_:1})]),l("div",j,[s[21]||(s[21]=l("p",{class:"code mb1"},".justify-center",-1)),i(t,{class:"wrapper",column:"","align-center":"","justify-center":""},{default:n(()=>s[20]||(s[20]=[l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1)])),_:1})]),l("div",k,[s[23]||(s[23]=l("p",{class:"code mb1"},".justify-space-between",-1)),i(t,{class:"wrapper",column:"","align-center":"","justify-space-between":""},{default:n(()=>s[22]||(s[22]=[l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1)])),_:1})]),l("div",S,[s[25]||(s[25]=l("p",{class:"code mb1"},".justify-end",-1)),i(t,{class:"wrapper",column:"","align-center":"","justify-end":""},{default:n(()=>s[24]||(s[24]=[l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1)])),_:1})])]),_:1})]),_:1}),i(d,{class:"mt12 title2",h3:""},{default:n(()=>s[29]||(s[29]=[e("Align")])),_:1}),s[120]||(s[120]=l("p",null,[e("By default if you don't set an alignment on the "),l("span",{class:"code"},"w-flex"),e(` component, the content will
be stretched vertically.`),l("br"),e(`
If it is not what you want, you can either add an alignment on the `),l("span",{class:"code"},"w-flex"),e(` component
(case 2), or a self align on the children (case 3).
`)],-1)),s[121]||(s[121]=l("div",{class:"title3 mt6"},"w-flex, row direction (default)",-1)),i(o,null,{pug:n(()=>s[36]||(s[36]=[e(`w-flex(basis-zero wrap)
  .grow.mx1.xs12.sm4
    p 1. Default
    w-flex.wrapper(justify-center)
      .box
      .box
      .box

  .grow.mx1.xs12.sm4
    p 2. Align center
    w-flex.wrapper(justify-center align-center)
      .box
      .box
      .box

  .grow.mx1.xs12.sm4
    p 3. Align self start, center, end
    w-flex.wrapper(justify-center)
      .box.align-self-start
      .box.align-self-center
      .box.align-self-end`)])),html:n(()=>s[37]||(s[37]=[e(`<w-flex basis-zero>
  <div class="grow mx1">
    <p>1. Default</p>
    <w-flex justify-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>2. Align center</p>
    <w-flex justify-center align-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>3. Align self start, center, end</p>
    <w-flex justify-center class="wrapper">
      <div class="box align-self-start"></div>
      <div class="box align-self-center"></div>
      <div class="box align-self-end"></div>
    </w-flex>
  </div>
</w-flex>`)])),css:n(()=>s[38]||(s[38]=[e(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)])),default:n(()=>[i(t,{"basis-zero":"",wrap:""},{default:n(()=>[l("div",A,[s[31]||(s[31]=l("p",null,"1. Default",-1)),i(t,{class:"wrapper2","justify-center":""},{default:n(()=>s[30]||(s[30]=[l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1)])),_:1})]),l("div",C,[s[33]||(s[33]=l("p",null,"2. Align center",-1)),i(t,{class:"wrapper2","justify-center":"","align-center":""},{default:n(()=>s[32]||(s[32]=[l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1)])),_:1})]),l("div",z,[s[35]||(s[35]=l("p",null,"3. Align self start, center, end",-1)),i(t,{class:"wrapper2","justify-center":""},{default:n(()=>s[34]||(s[34]=[l("div",{class:"box align-self-start"},null,-1),l("div",{class:"box align-self-center"},null,-1),l("div",{class:"box align-self-end"},null,-1)])),_:1})])]),_:1})]),_:1}),s[122]||(s[122]=l("div",{class:"title3 mt6"},"Align-self, column direction",-1)),i(o,null,{pug:n(()=>s[45]||(s[45]=[e(`w-flex(basis-zero wrap)
  .grow.mx1.xs12.sm4
    p 1. Default
    w-flex.wrapper(column justify-center)
      .box
      .box
      .box

  .grow.mx1.xs12.sm4
    p 2. Align-center
    w-flex.wrapper(column justify-center align-center)
      .box
      .box
      .box

  .grow.mx1.xs12.sm4
    p 3. Align self start, center, end
    w-flex.wrapper(column justify-center)
      .box.align-self-start
      .box.align-self-center
      .box.align-self-end`)])),html:n(()=>s[46]||(s[46]=[e(`<w-flex basis-zero>
  <div class="grow mx1">
    <p>1. Default</p>
    <w-flex column justify-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>2. Align-center</p>
    <w-flex column justify-center align-center class="wrapper">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>3. Align self start, center, end</p>
    <w-flex column justify-center class="wrapper">
      <div class="box align-self-start"></div>
      <div class="box align-self-center"></div>
      <div class="box align-self-end"></div>
    </w-flex>
  </div>
</w-flex>`)])),css:n(()=>s[47]||(s[47]=[e(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)])),default:n(()=>[i(t,{"basis-zero":"",wrap:""},{default:n(()=>[l("div",T,[s[40]||(s[40]=l("p",null,"1. Default",-1)),i(t,{class:"wrapper2",column:"","justify-center":""},{default:n(()=>s[39]||(s[39]=[l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1)])),_:1})]),l("div",D,[s[42]||(s[42]=l("p",null,"2. Align-center",-1)),i(t,{class:"wrapper2",column:"","justify-center":"","align-center":""},{default:n(()=>s[41]||(s[41]=[l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1)])),_:1})]),l("div",B,[s[44]||(s[44]=l("p",null,"3. Align self start, center, end",-1)),i(t,{class:"wrapper2",column:"","justify-center":""},{default:n(()=>s[43]||(s[43]=[l("div",{class:"box align-self-start"},null,-1),l("div",{class:"box align-self-center"},null,-1),l("div",{class:"box align-self-end"},null,-1)])),_:1})])]),_:1})]),_:1}),i(d,{class:"mt12 title2",h3:""},{default:n(()=>s[48]||(s[48]=[e("Using margin in flex context")])),_:1}),i(u,{warning:""},{default:n(()=>[s[50]||(s[50]=e(`It's important to note that setting a margin on an element in a flex content will override its
default positioning.`)),s[51]||(s[51]=l("br",null,null,-1)),s[52]||(s[52]=e(`
Look at the following examples where the boxes have different margins applied.`)),s[53]||(s[53]=l("br",null,null,-1)),s[54]||(s[54]=e()),s[55]||(s[55]=l("code",null,"maa",-1)),s[56]||(s[56]=e(" = ")),s[57]||(s[57]=l("span",{class:"code"},"margin: auto",-1)),s[58]||(s[58]=e(", ")),s[59]||(s[59]=l("code",null,"mxa",-1)),s[60]||(s[60]=e(" = ")),s[61]||(s[61]=l("span",{class:"code"},"margin-left: auto;margin-right: auto;",-1)),s[62]||(s[62]=e(`
(read more in `)),i(c,{to:"layout--spaces"},{default:n(()=>s[49]||(s[49]=[e("Layout - spaces")])),_:1}),s[63]||(s[63]=e(")"))]),_:1}),i(o,null,{pug:n(()=>s[68]||(s[68]=[e(`w-flex(basis-zero)
  .grow.mx1
    p 1. Row direction
    w-flex.wrapper(justify-center align-center)
      .box.maa
      .box.maa
      .box.maa

  .grow.mx1
    p 2. Column direction
    w-flex.wrapper(column justify-center)
      .box
      .box.mxa
      .box`)])),html:n(()=>s[69]||(s[69]=[e(`<w-flex basis-zero>
  <div class="grow mx1">
    <p>1. Row direction</p>
    <w-flex justify-center align-center class="wrapper">
      <div class="box maa"></div>
      <div class="box maa"></div>
      <div class="box maa"></div>
    </w-flex>
  </div>

  <div class="grow mx1">
    <p>2. Column direction</p>
    <w-flex column justify-center class="wrapper">
      <div class="box"></div>
      <div class="box mxa"></div>
      <div class="box"></div>
    </w-flex>
  </div>
</w-flex>`)])),css:n(()=>s[70]||(s[70]=[e(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)])),default:n(()=>[i(t,{"basis-zero":""},{default:n(()=>[l("div",F,[s[65]||(s[65]=l("p",null,"1. Row direction",-1)),i(t,{class:"wrapper2","justify-center":"","align-center":""},{default:n(()=>s[64]||(s[64]=[l("div",{class:"box maa"},null,-1),l("div",{class:"box maa"},null,-1),l("div",{class:"box maa"},null,-1)])),_:1})]),l("div",N,[s[67]||(s[67]=l("p",null,"2. Column direction",-1)),i(t,{class:"wrapper2",column:"","justify-center":""},{default:n(()=>s[66]||(s[66]=[l("div",{class:"box"},null,-1),l("div",{class:"box mxa"},null,-1),l("div",{class:"box"},null,-1)])),_:1})])]),_:1})]),_:1}),i(d,{class:"mt12 title3",h3:"",slug:"not-justify-self"},{default:n(()=>s[71]||(s[71]=[l("em",null,[e("Not "),l("span",{class:"code"},"justify-self")],-1)])),_:1}),i(u,{warning:""},{default:n(()=>[l("a",W,[s[73]||(s[73]=e("There is no justify-self in Flexbox.")),i(v,{class:"ml2",sm:""},{default:n(()=>s[72]||(s[72]=[e("mdi mdi-open-in-new")])),_:1})])]),_:1}),i(d,{class:"mt12 title3",h3:"",slug:"spacer"},{default:n(()=>s[74]||(s[74]=[e("Spacer ("),l("code",null,".spacer",-1),e(")")])),_:1}),s[123]||(s[123]=l("p",null,"In a flex context, the spacer will push the elements to the sides.",-1)),i(t,{class:"xs-column",wrap:"","basis-zero":""},{default:n(()=>[i(o,{class:"grow","content-class":"fill-height"},{pug:n(()=>s[76]||(s[76]=[e(`w-flex.wrapper(align-center)
  .box
  .box
  .spacer
  .box`)])),html:n(()=>s[77]||(s[77]=[e(`<w-flex align-center class="wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="spacer"></div>
  <div class="box"></div>
</w-flex>`)])),css:n(()=>s[78]||(s[78]=[e(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}`)])),default:n(()=>[i(t,{class:"wrapper","align-center":""},{default:n(()=>s[75]||(s[75]=[l("div",{class:"box"},null,-1),l("div",{class:"box"},null,-1),l("div",{class:"spacer"},null,-1),l("div",{class:"box"},null,-1)])),_:1})]),_:1}),s[83]||(s[83]=l("div",{class:"shrink mx2 xs-hide"},null,-1)),i(o,{class:"grow"},{pug:n(()=>s[80]||(s[80]=[e(`w-flex.wrapper(column)
  .box.shrink
  .box.shrink
  .spacer
  .box.shrink`)])),html:n(()=>s[81]||(s[81]=[e(`<w-flex column class="wrapper">
  <div class="box shrink"></div>
  <div class="box shrink"></div>
  <div class="spacer"></div>
  <div class="box shrink"></div>
</w-flex>`)])),css:n(()=>s[82]||(s[82]=[e(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)])),default:n(()=>[i(t,{class:"wrapper",column:""},{default:n(()=>s[79]||(s[79]=[l("div",{class:"box shrink"},null,-1),l("div",{class:"box shrink"},null,-1),l("div",{class:"spacer"},null,-1),l("div",{class:"box shrink"},null,-1)])),_:1})]),_:1})]),_:1}),i(d,{h2:""},{default:n(()=>s[84]||(s[84]=[e("Gap")])),_:1}),s[124]||(s[124]=l("p",null,[e("The "),l("strong",{class:"code"},"w-flex"),e(" component accepts a "),l("code",null,"gap"),e(` option to equally space out the children
inside the flex container.`)],-1)),i(o,null,{pug:n(()=>s[85]||(s[85]=[e(`w-flex(gap="6")
  .box.grow(v-for="i in 4")

w-flex.mt12(gap="2")
  .box.grow(v-for="i in 6")`)])),html:n(()=>s[86]||(s[86]=[e(`<w-flex gap="3">
  <div v-for="i in 4" class="box grow"></div>
</w-flex>

<w-flex gap="6" class="mt12">
  <div v-for="i in 6" class="box grow"></div>
</w-flex>`)])),css:n(()=>s[87]||(s[87]=[e(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}`)])),default:n(()=>[i(t,{gap:"6"},{default:n(()=>[(r(),x(p,null,f(4,b=>l("div",V)),64))]),_:1}),i(t,{class:"mt12",gap:"2"},{default:n(()=>[(r(),x(p,null,f(6,b=>l("div",q)),64))]),_:1})]),_:1}),i(u,{success:""},{default:n(()=>[s[92]||(s[92]=e("You can also use the ")),s[93]||(s[93]=l("code",null,"gap",-1)),s[94]||(s[94]=e(` option with the breakpoint-based grid classes
(E.g. `)),s[95]||(s[95]=l("code",null,".xs6",-1)),s[96]||(s[96]=e(", etc.) when the boxes stay on a single line.")),i(o,{class:"lighter"},{pug:n(()=>s[89]||(s[89]=[e(`w-flex(gap="3")
  .box.xs3 .xs3
  .box.xs3 .xs3
  .box.xs6 .xs6`)])),html:n(()=>s[90]||(s[90]=[e(`<w-flex gap="3">
  <div class="box xs3"></div>
  <div class="box xs3"></div>
  <div class="box xs6"></div>
</w-flex>`)])),css:n(()=>s[91]||(s[91]=[e(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}`)])),default:n(()=>[i(t,{gap:"3"},{default:n(()=>s[88]||(s[88]=[l("div",{class:"box xs3 code"},".xs3",-1),l("div",{class:"box xs3 code"},".xs3",-1),l("div",{class:"box xs6 code"},".xs6",-1)])),_:1})]),_:1})]),_:1}),i(d,{h3:""},{default:n(()=>s[97]||(s[97]=[e("Caveat")])),_:1}),i(u,{warning:""},{default:n(()=>s[98]||(s[98]=[e("The "),l("code",null,"gap",-1),e(" option will not work with both wrap ("),l("code",null,"flex-wrap: wrap",-1),e(`) and the
breakpoint-based grid system. The gap would overflow from the 100% total width distributed
among the children of the `),l("strong",{class:"code"},"w-flex",-1),e(", like illustrated in the following examples.")])),_:1}),i(t,{class:"smd-column",wrap:""},{default:n(()=>[l("div",E,[s[102]||(s[102]=e("Without gap")),i(o,{class:"lighter mt2 grow"},{pug:n(()=>s[99]||(s[99]=[e(`.yellow-light5--bg.bd1
  w-flex(wrap)
    .box.xs6(v-for="i in 4") .xs6`)])),html:n(()=>s[100]||(s[100]=[e(`<div class="yellow-light5--bg bd1">
  <w-flex wrap>
    <div v-for="i in 4" class="box xs6">.xs6</div>
  </w-flex>
</div>`)])),css:n(()=>s[101]||(s[101]=[e(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`)])),default:n(()=>[l("div",I,[i(t,{wrap:""},{default:n(()=>[(r(),x(p,null,f(4,b=>l("div",L,".xs6")),64))]),_:1})])]),_:1})]),s[107]||(s[107]=l("div",{class:"mx2"},null,-1)),l("div",R,[s[106]||(s[106]=e("With gap")),i(o,{class:"lighter mt2 grow"},{pug:n(()=>s[103]||(s[103]=[e(`.yellow-light5--bg.bd1
  w-flex(wrap gap="4")
    .box.xs6.code(v-for="i in 4") .xs6`)])),html:n(()=>s[104]||(s[104]=[e(`<div class="yellow-light5--bg bd1">
  <w-flex wrap gap="4">
    <div v-for="i in 4" class="box xs6">.xs6</div>
  </w-flex>
</div>`)])),css:n(()=>s[105]||(s[105]=[e(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`)])),default:n(()=>[l("div",U,[i(t,{wrap:"",gap:"4"},{default:n(()=>[(r(),x(p,null,f(4,b=>l("div",G,".xs6")),64))]),_:1})])]),_:1})])]),_:1}),s[125]||(s[125]=l("p",{class:"mt4"},[l("strong",null,"Solution:"),e(" there are a couple of ways to bypass this limitation.")],-1)),s[126]||(s[126]=l("h4",null,"1. Wrap children in padded boxes & apply equivalent negative margin on parent",-1)),i(o,{class:"lighter"},{pug:n(()=>s[109]||(s[109]=[e(`.yellow-light5--bg.bd1
  w-flex.ma-2(wrap)
    .xs6.pa2(v-for="i in 4")
      .box .xs6`)])),html:n(()=>s[110]||(s[110]=[e(`<div class="yellow-light5--bg bd1">
  <w-flex wrap class="ma-2">
    <div v-for="i in 4" class="xs6 pa2">
      <div class="box">.xs6</div>
    </div>
  </w-flex>
</div>`)])),css:n(()=>s[111]||(s[111]=[e(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`)])),default:n(()=>[l("div",J,[i(t,{class:"ma-2",wrap:""},{default:n(()=>[(r(),x(p,null,f(4,b=>l("div",Y,s[108]||(s[108]=[l("div",{class:"box d-flex justify-center code"},".xs6",-1)]))),64))]),_:1})])]),_:1}),s[127]||(s[127]=l("h4",null,[e("2. Use the "),l("strong",{class:"code"},"w-grid"),e(" component instead")],-1)),i(o,{class:"lighter"},{pug:n(()=>s[113]||(s[113]=[e(`.yellow-light5--bg.bd1
  w-grid(columns="2" gap="4")
    .box <div>
    .box <div>
    .box <div>
    .box <div>`)])),html:n(()=>s[114]||(s[114]=[e(`<div class="yellow-light5--bg bd1">
  <w-grid columns="2" gap="4">
    <div v-for="i in 4" class="box">
      &amp;lt;div&amp;gt;
    </div>
  </w-grid>
</div>`)])),css:n(()=>s[115]||(s[115]=[e(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}`)])),default:n(()=>[l("div",H,[i(w,{columns:"2",gap:"4"},{default:n(()=>s[112]||(s[112]=[l("div",{class:"box code"},"<div>",-1),l("div",{class:"box code"},"<div>",-1),l("div",{class:"box code"},"<div>",-1),l("div",{class:"box code"},"<div>",-1)])),_:1})])]),_:1})])}const M={},Q=m(M,[["render",K]]);export{Q as default};
