import{r as c,o as x,f,a as l,w as e,b as s,e as n,M as d}from"./vendor.c30f2c6c.js";import{_ as u}from"./index.ed772a88.js";const _=n("Flex layout classes"),b=s("span",{class:"code"},"w-flex",-1),h=n(" component & helper classes"),m=d(`<p>the <code>w-flex</code> component and the <code>.w-flex</code> class both allow a flex layout that you can
easily control with the following classes or attributes on the component.</p><ul class="mt4"><li><code class="mr2">.row</code>By default. Displays in row (<span class="code">flex-direction: row</span>).</li><li><code class="mr2">.column</code>Displays in column (<span class="code">flex-direction: column</span>).</li><li class="mt1"><code class="mr2">.wrap</code>Wraps the flex content when it does not fit (<span class="code">flex-wrap: wrap</span>).</li><li class="mt1"><code class="mr2">.grow</code>Tells the element to occupy the available space (<span class="code">flex-grow: 1</span>).</li><li class="mt1"><code class="mr2">.no-grow</code>Tells the element to <strong>not</strong> occupy the available space (<span class="code">flex-grow: 0</span>).</li><li class="mt1"><code class="mr2">.shrink</code>Tells the element to shrink if there is not enough space (<span class="code">flex-shrink: 1</span>).</li><li class="mt1"><code class="mr2">.no-shrink</code>Tells the element to <strong>not</strong> shrink if there is not enough space (<span class="code">flex-shrink: 0</span>).</li><li class="mt1"><code class="mr2">.basis-zero</code>Distribute the children elements with equal space (<span class="code">flex-basis: 0</span>).<br>
By default, flex containers will distribute children elements according to their content width.</li><li class="mt1"><code class="mr2">.fill-width</code>Sets a width of 100%.</li><li class="mt1"><code class="mr2">.fill-height</code>Sets a height of 100%.</li></ul>`,2),v=n("Alignments"),w=d(`<p>Align children with these classes on the parent container:</p><ul><li class="mt1"><code class="mr2">.align-start</code>Applies this CSS rule: <span class="code">align: flex-start</span>.</li><li class="mt1"><code class="mr2">.align-center</code>Applies this CSS rule: <span class="code">align: center</span>.</li><li class="mt1"><code class="mr2">.align-end</code>Applies this CSS rule: <span class="code">align: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-start</code>Applies this CSS rule: <span class="code">justify: flex-start</span>.</li><li class="mt1"><code class="mr2">.justify-center</code>Applies this CSS rule: <span class="code">justify: center</span>.</li><li class="mt1"><code class="mr2">.justify-end</code>Applies this CSS rule: <span class="code">justify: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-space-around</code>Applies this CSS rule: <span class="code">justify: space-around</span>.</li><li class="mt1"><code class="mr2">.justify-space-between</code>Applies this CSS rule: <span class="code">justify: space-between</span>.</li><li class="mt1"><code class="mr2">.justify-space-evenly</code>Applies this CSS rule: <span class="code">justify: space-evenly</span>.</li></ul><p class="mt4">Align a child with these classes directly on the child element:</p><ul><li class="mt1"><code class="mr2">.align-self-start</code>Applies this CSS rule: <span class="code">align-self: flex-start</span>.</li><li class="mt1"><code class="mr2">.align-self-center</code>Applies this CSS rule: <span class="code">align-self: center</span>.</li><li class="mt1"><code class="mr2">.align-self-end</code>Applies this CSS rule: <span class="code">align-self: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-self-start</code>Applies this CSS rule: <span class="code">justify-self: flex-start</span>.</li><li class="mt1"><code class="mr2">.justify-self-center</code>Applies this CSS rule: <span class="code">justify-self: center</span>.</li><li class="mt1"><code class="mr2">.justify-self-end</code>Applies this CSS rule: <span class="code">justify-self: flex-end</span>.</li><li class="mt1"><code class="mr2">.basis-zero</code>Applies this CSS rule directly on the element: <span class="code">flex-basis: 0</span>.</li></ul><p class="mt6">The <code class="mx1">.spacer</code> class is also very helpful to separate 2 elements as it will occupy the full
available space and push the elements on each side.
</p><div class="w-divider my12"></div>`,6),g=n("Examples"),y=n("Justify"),j=s("div",{class:"title3 mt6"},"w-flex, row direction (default)",-1),S=s("p",{class:"code mb1"},".justify-start (default)",-1),k=s("div",{class:"w-flex pa3 blue-light5--bg justify-start"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),A=s("p",{class:"code mt4 mb1"},".justify-center",-1),C=s("div",{class:"w-flex pa3 blue-light5--bg justify-center"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),z=s("p",{class:"code mt4 mb1"},".justify-end",-1),D=s("div",{class:"w-flex pa3 blue-light5--bg justify-end"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),B=s("p",{class:"code mt4 mb1"},".justify-space-between",-1),T=s("div",{class:"w-flex pa3 blue-light5--bg justify-space-between"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),F=s("p",{class:"code mt4 mb1"},".justify-space-evenly",-1),N=s("div",{class:"w-flex pa3 blue-light5--bg justify-space-evenly"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),V=n(`p.mb1 .justify-start (default)
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
  .box`),I=n(`<p>.justify-start (default)</p>
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
</w-flex>`),R=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}
`),E=s("div",{class:"title3"},"w-flex, column direction",-1),L={class:"grow mx1"},U=s("p",{class:"code mb1"},".justify-start (default)",-1),W=s("div",{class:"box"},null,-1),q=s("div",{class:"box"},null,-1),J=s("div",{class:"box"},null,-1),M={class:"grow mx1"},G=s("p",{class:"code mb1"},".justify-center",-1),H=s("div",{class:"box"},null,-1),K=s("div",{class:"box"},null,-1),O=s("div",{class:"box"},null,-1),P={class:"grow mx1"},Q=s("p",{class:"code mb1"},".justify-space-between",-1),X=s("div",{class:"box"},null,-1),Y=s("div",{class:"box"},null,-1),Z=s("div",{class:"box"},null,-1),$={class:"grow mx1"},ss=s("p",{class:"code mb1"},".justify-end",-1),es=s("div",{class:"box"},null,-1),ns=s("div",{class:"box"},null,-1),ls=s("div",{class:"box"},null,-1),ts=n(`w-flex(basis-zero wrap)
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
      .box`),os=n(`<w-flex basis-zero wrap>
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
</w-flex>`),is=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`),cs=n("Align"),as=s("p",null,[n("By default if you don't set an alignment on the "),s("span",{class:"code"},"w-flex"),n(` component, the content will
be stretched vertically.`),s("br"),n(`
If it is not what you want, you can either add an alignment on the `),s("span",{class:"code"},"w-flex"),n(` component
(case 2), or a self align on the children (case 3).
`)],-1),ds=s("div",{class:"title3 mt6"},"w-flex, row direction (default)",-1),rs={class:"grow mx1 xs12 sm4"},ps=s("p",null,"1. Default",-1),xs=s("div",{class:"box"},null,-1),fs=s("div",{class:"box"},null,-1),us=s("div",{class:"box"},null,-1),_s={class:"grow mx1 xs12 sm4"},bs=s("p",null,"2. Align center",-1),hs=s("div",{class:"box"},null,-1),ms=s("div",{class:"box"},null,-1),vs=s("div",{class:"box"},null,-1),ws={class:"grow mx1 xs12 sm4"},gs=s("p",null,"3. Align self start, center, end",-1),ys=s("div",{class:"box align-self-start"},null,-1),js=s("div",{class:"box align-self-center"},null,-1),Ss=s("div",{class:"box align-self-end"},null,-1),ks=n(`w-flex(basis-zero wrap)
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
      .box.align-self-end`),As=n(`<w-flex basis-zero>
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
</w-flex>`),Cs=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`),zs=s("div",{class:"title3 mt6"},"Align-self, column direction",-1),Ds={class:"grow mx1 xs12 sm4"},Bs=s("p",null,"1. Default",-1),Ts=s("div",{class:"box"},null,-1),Fs=s("div",{class:"box"},null,-1),Ns=s("div",{class:"box"},null,-1),Vs={class:"grow mx1 xs12 sm4"},Is=s("p",null,"2. Align-center",-1),Rs=s("div",{class:"box"},null,-1),Es=s("div",{class:"box"},null,-1),Ls=s("div",{class:"box"},null,-1),Us={class:"grow mx1 xs12 sm4"},Ws=s("p",null,"3. Align self start, center, end",-1),qs=s("div",{class:"box align-self-start"},null,-1),Js=s("div",{class:"box align-self-center"},null,-1),Ms=s("div",{class:"box align-self-end"},null,-1),Gs=n(`w-flex(basis-zero wrap)
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
      .box.align-self-end`),Hs=n(`<w-flex basis-zero>
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
</w-flex>`),Ks=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`),Os=n("Using margin in flex context"),Ps=n(`It's important to note that setting a margin on an element in a flex content will override its
default positioning.`),Qs=s("br",null,null,-1),Xs=n(`
Look at the following examples where the boxes have different margins applied.`),Ys=s("br",null,null,-1),Zs=n(),$s=s("code",null,"maa",-1),se=n(" = "),ee=s("span",{class:"code"},"margin: auto",-1),ne=n(", "),le=s("code",null,"mxa",-1),te=n(" = "),oe=s("span",{class:"code"},"margin-left: auto;margin-right: auto;",-1),ie=n(`
(read more in `),ce=n("Layout - spaces"),ae=n(")"),de={class:"grow mx1"},re=s("p",null,"1. Row direction",-1),pe=s("div",{class:"box maa"},null,-1),xe=s("div",{class:"box maa"},null,-1),fe=s("div",{class:"box maa"},null,-1),ue={class:"grow mx1"},_e=s("p",null,"2. Column direction",-1),be=s("div",{class:"box"},null,-1),he=s("div",{class:"box mxa"},null,-1),me=s("div",{class:"box"},null,-1),ve=n(`w-flex(basis-zero)
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
      .box`),we=n(`<w-flex basis-zero>
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
</w-flex>`),ge=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`),ye=s("em",null,[n("Not "),s("span",{class:"code"},"justify-self")],-1),je={class:"black ml1",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox",target:"_blank"},Se=n("There is no justify-self in Flexbox."),ke=n("mdi mdi-open-in-new"),Ae=n("Spacer ("),Ce=s("code",null,".spacer",-1),ze=n(")"),De=s("p",null,"In a flex context, the spacer will push the elements to the sides.",-1),Be=s("div",{class:"box"},null,-1),Te=s("div",{class:"box"},null,-1),Fe=s("div",{class:"spacer"},null,-1),Ne=s("div",{class:"box"},null,-1),Ve=n(`w-flex.wrapper(align-center)
  .box
  .box
  .spacer
  .box`),Ie=n(`<w-flex align-center class="wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="spacer"></div>
  <div class="box"></div>
</w-flex>`),Re=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}`),Ee=s("div",{class:"shrink mx2 xs-hide"},null,-1),Le=s("div",{class:"box shrink"},null,-1),Ue=s("div",{class:"box shrink"},null,-1),We=s("div",{class:"spacer"},null,-1),qe=s("div",{class:"box shrink"},null,-1),Je=n(`w-flex.wrapper(column)
  .box.shrink
  .box.shrink
  .spacer
  .box.shrink`),Me=n(`<w-flex column class="wrapper">
  <div class="box shrink"></div>
  <div class="box shrink"></div>
  <div class="spacer"></div>
  <div class="box shrink"></div>
</w-flex>`),Ge=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}`);function He(Oe,Pe){const o=c("title-link"),i=c("example"),t=c("w-flex"),r=c("router-link"),a=c("alert"),p=c("w-icon");return x(),f("main",null,[l(o,{class:"mt4",h1:""},{default:e(()=>[_]),_:1}),l(o,{h2:"",slug:"w-flex-component-and-helper-classes"},{default:e(()=>[b,h]),_:1}),m,l(o,{h2:""},{default:e(()=>[v]),_:1}),w,l(o,{class:"mt12 headline",h2:""},{default:e(()=>[g]),_:1}),l(o,{class:"mt8 title2",h3:""},{default:e(()=>[y]),_:1}),j,l(i,null,{pug:e(()=>[V]),html:e(()=>[I]),css:e(()=>[R]),default:e(()=>[S,k,A,C,z,D,B,T,F,N]),_:1}),E,l(i,null,{pug:e(()=>[ts]),html:e(()=>[os]),css:e(()=>[is]),default:e(()=>[l(t,{"basis-zero":"",wrap:""},{default:e(()=>[s("div",L,[U,l(t,{class:"wrapper",column:"","align-center":"","justify-start":""},{default:e(()=>[W,q,J]),_:1})]),s("div",M,[G,l(t,{class:"wrapper",column:"","align-center":"","justify-center":""},{default:e(()=>[H,K,O]),_:1})]),s("div",P,[Q,l(t,{class:"wrapper",column:"","align-center":"","justify-space-between":""},{default:e(()=>[X,Y,Z]),_:1})]),s("div",$,[ss,l(t,{class:"wrapper",column:"","align-center":"","justify-end":""},{default:e(()=>[es,ns,ls]),_:1})])]),_:1})]),_:1}),l(o,{class:"mt12 title2",h3:""},{default:e(()=>[cs]),_:1}),as,ds,l(i,null,{pug:e(()=>[ks]),html:e(()=>[As]),css:e(()=>[Cs]),default:e(()=>[l(t,{"basis-zero":"",wrap:""},{default:e(()=>[s("div",rs,[ps,l(t,{class:"wrapper2","justify-center":""},{default:e(()=>[xs,fs,us]),_:1})]),s("div",_s,[bs,l(t,{class:"wrapper2","justify-center":"","align-center":""},{default:e(()=>[hs,ms,vs]),_:1})]),s("div",ws,[gs,l(t,{class:"wrapper2","justify-center":""},{default:e(()=>[ys,js,Ss]),_:1})])]),_:1})]),_:1}),zs,l(i,null,{pug:e(()=>[Gs]),html:e(()=>[Hs]),css:e(()=>[Ks]),default:e(()=>[l(t,{"basis-zero":"",wrap:""},{default:e(()=>[s("div",Ds,[Bs,l(t,{class:"wrapper2",column:"","justify-center":""},{default:e(()=>[Ts,Fs,Ns]),_:1})]),s("div",Vs,[Is,l(t,{class:"wrapper2",column:"","justify-center":"","align-center":""},{default:e(()=>[Rs,Es,Ls]),_:1})]),s("div",Us,[Ws,l(t,{class:"wrapper2",column:"","justify-center":""},{default:e(()=>[qs,Js,Ms]),_:1})])]),_:1})]),_:1}),l(o,{class:"mt12 title2",h3:""},{default:e(()=>[Os]),_:1}),l(a,{warning:""},{default:e(()=>[Ps,Qs,Xs,Ys,Zs,$s,se,ee,ne,le,te,oe,ie,l(r,{to:"layout--spaces"},{default:e(()=>[ce]),_:1}),ae]),_:1}),l(i,null,{pug:e(()=>[ve]),html:e(()=>[we]),css:e(()=>[ge]),default:e(()=>[l(t,{"basis-zero":""},{default:e(()=>[s("div",de,[re,l(t,{class:"wrapper2","justify-center":"","align-center":""},{default:e(()=>[pe,xe,fe]),_:1})]),s("div",ue,[_e,l(t,{class:"wrapper2",column:"","justify-center":""},{default:e(()=>[be,he,me]),_:1})])]),_:1})]),_:1}),l(o,{class:"mt12 title3",h3:"",slug:"not-justify-self"},{default:e(()=>[ye]),_:1}),l(a,{warning:""},{default:e(()=>[s("a",je,[Se,l(p,{class:"ml2",sm:""},{default:e(()=>[ke]),_:1})])]),_:1}),l(o,{class:"mt12 title3",h3:"",slug:"spacer"},{default:e(()=>[Ae,Ce,ze]),_:1}),De,l(t,{class:"xs-column",wrap:"","basis-zero":""},{default:e(()=>[l(i,{class:"grow","content-class":"fill-height"},{pug:e(()=>[Ve]),html:e(()=>[Ie]),css:e(()=>[Re]),default:e(()=>[l(t,{class:"wrapper","align-center":""},{default:e(()=>[Be,Te,Fe,Ne]),_:1})]),_:1}),Ee,l(i,{class:"grow"},{pug:e(()=>[Je]),html:e(()=>[Me]),css:e(()=>[Ge]),default:e(()=>[l(t,{class:"wrapper",column:""},{default:e(()=>[Le,Ue,We,qe]),_:1})]),_:1})]),_:1})])}const Ke={};var Ye=u(Ke,[["render",He]]);export{Ye as default};
