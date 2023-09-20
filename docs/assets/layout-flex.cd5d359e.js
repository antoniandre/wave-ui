import{r as a,o as c,g as d,a as l,w as e,b as n,d as s,F as r,k as x,h as u,_ as g}from"./index.bf2cfd71.js";const v=s("span",{class:"code"},"w-flex",-1),w=u(`<p>the <code>w-flex</code> component and the <code>.w-flex</code> class both allow a flex layout that you can
easily control with the following classes or attributes on the component.</p><ul class="mt4"><li><code class="mr2">.row</code>By default. Displays in row (<span class="code">flex-direction: row</span>).</li><li><code class="mr2">.column</code>Displays in column (<span class="code">flex-direction: column</span>).</li><li class="mt1"><code class="mr2">.wrap</code>Wraps the flex content when it does not fit (<span class="code">flex-wrap: wrap</span>).</li><li class="mt1"><code class="mr2">.grow</code>Tells the element to occupy the available space (<span class="code">flex-grow: 1</span>).</li><li class="mt1"><code class="mr2">.no-grow</code>Tells the element to <strong>not</strong> occupy the available space (<span class="code">flex-grow: 0</span>).</li><li class="mt1"><code class="mr2">.shrink</code>Tells the element to shrink if there is not enough space (<span class="code">flex-shrink: 1</span>).</li><li class="mt1"><code class="mr2">.no-shrink</code>Tells the element to <strong>not</strong> shrink if there is not enough space (<span class="code">flex-shrink: 0</span>).</li><li class="mt1"><code class="mr2">.basis-zero</code>Distribute the children elements with equal space (<span class="code">flex-basis: 0</span>).<br>
By default, flex containers will distribute children elements according to their content width.</li><li class="mt1"><code class="mr2">.fill-width</code>Sets a width of 100%.</li><li class="mt1"><code class="mr2">.fill-height</code>Sets a height of 100%.</li></ul>`,2),m=u(`<p>Align children with these classes on the parent container:</p><ul><li class="mt1"><code class="mr2">.align-start</code>Applies this CSS rule: <span class="code">align: flex-start</span>.</li><li class="mt1"><code class="mr2">.align-center</code>Applies this CSS rule: <span class="code">align: center</span>.</li><li class="mt1"><code class="mr2">.align-end</code>Applies this CSS rule: <span class="code">align: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-start</code>Applies this CSS rule: <span class="code">justify: flex-start</span>.</li><li class="mt1"><code class="mr2">.justify-center</code>Applies this CSS rule: <span class="code">justify: center</span>.</li><li class="mt1"><code class="mr2">.justify-end</code>Applies this CSS rule: <span class="code">justify: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-space-around</code>Applies this CSS rule: <span class="code">justify: space-around</span>.</li><li class="mt1"><code class="mr2">.justify-space-between</code>Applies this CSS rule: <span class="code">justify: space-between</span>.</li><li class="mt1"><code class="mr2">.justify-space-evenly</code>Applies this CSS rule: <span class="code">justify: space-evenly</span>.</li></ul><p class="mt4">Align a child with these classes directly on the child element:</p><ul><li class="mt1"><code class="mr2">.align-self-start</code>Applies this CSS rule: <span class="code">align-self: flex-start</span>.</li><li class="mt1"><code class="mr2">.align-self-center</code>Applies this CSS rule: <span class="code">align-self: center</span>.</li><li class="mt1"><code class="mr2">.align-self-end</code>Applies this CSS rule: <span class="code">align-self: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-self-start</code>Applies this CSS rule: <span class="code">justify-self: flex-start</span>.</li><li class="mt1"><code class="mr2">.justify-self-center</code>Applies this CSS rule: <span class="code">justify-self: center</span>.</li><li class="mt1"><code class="mr2">.justify-self-end</code>Applies this CSS rule: <span class="code">justify-self: flex-end</span>.</li><li class="mt1"><code class="mr2">.basis-zero</code>Applies this CSS rule directly on the element: <span class="code">flex-basis: 0</span>.</li></ul><p class="mt6">The <code class="mx1">.spacer</code> class is also very helpful to separate 2 elements as it will occupy the full
available space and push the elements on each side.
</p><div class="w-divider my12"></div>`,6),y=s("div",{class:"title3 mt6"},"w-flex, row direction (default)",-1),j=s("p",{class:"code mb1"},".justify-start (default)",-1),k=s("div",{class:"w-flex pa3 blue-light5--bg justify-start"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),S=s("p",{class:"code mt4 mb1"},".justify-center",-1),A=s("div",{class:"w-flex pa3 blue-light5--bg justify-center"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),C=s("p",{class:"code mt4 mb1"},".justify-end",-1),z=s("div",{class:"w-flex pa3 blue-light5--bg justify-end"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),T=s("p",{class:"code mt4 mb1"},".justify-space-between",-1),D=s("div",{class:"w-flex pa3 blue-light5--bg justify-space-between"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),B=s("p",{class:"code mt4 mb1"},".justify-space-evenly",-1),F=s("div",{class:"w-flex pa3 blue-light5--bg justify-space-evenly"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),N=s("div",{class:"title3"},"w-flex, column direction",-1),W={class:"grow mx1"},V=s("p",{class:"code mb1"},".justify-start (default)",-1),q=s("div",{class:"box"},null,-1),E=s("div",{class:"box"},null,-1),I=s("div",{class:"box"},null,-1),L={class:"grow mx1"},R=s("p",{class:"code mb1"},".justify-center",-1),U=s("div",{class:"box"},null,-1),G=s("div",{class:"box"},null,-1),J=s("div",{class:"box"},null,-1),Y={class:"grow mx1"},H=s("p",{class:"code mb1"},".justify-space-between",-1),K=s("div",{class:"box"},null,-1),M=s("div",{class:"box"},null,-1),O=s("div",{class:"box"},null,-1),P={class:"grow mx1"},Q=s("p",{class:"code mb1"},".justify-end",-1),X=s("div",{class:"box"},null,-1),Z=s("div",{class:"box"},null,-1),$=s("div",{class:"box"},null,-1),ss=s("p",null,[n("By default if you don't set an alignment on the "),s("span",{class:"code"},"w-flex"),n(` component, the content will
be stretched vertically.`),s("br"),n(`
If it is not what you want, you can either add an alignment on the `),s("span",{class:"code"},"w-flex"),n(` component
(case 2), or a self align on the children (case 3).
`)],-1),es=s("div",{class:"title3 mt6"},"w-flex, row direction (default)",-1),ns={class:"grow mx1 xs12 sm4"},ls=s("p",null,"1. Default",-1),ts=s("div",{class:"box"},null,-1),os=s("div",{class:"box"},null,-1),is=s("div",{class:"box"},null,-1),as={class:"grow mx1 xs12 sm4"},cs=s("p",null,"2. Align center",-1),ds=s("div",{class:"box"},null,-1),rs=s("div",{class:"box"},null,-1),xs=s("div",{class:"box"},null,-1),ps={class:"grow mx1 xs12 sm4"},fs=s("p",null,"3. Align self start, center, end",-1),us=s("div",{class:"box align-self-start"},null,-1),bs=s("div",{class:"box align-self-center"},null,-1),_s=s("div",{class:"box align-self-end"},null,-1),hs=s("div",{class:"title3 mt6"},"Align-self, column direction",-1),gs={class:"grow mx1 xs12 sm4"},vs=s("p",null,"1. Default",-1),ws=s("div",{class:"box"},null,-1),ms=s("div",{class:"box"},null,-1),ys=s("div",{class:"box"},null,-1),js={class:"grow mx1 xs12 sm4"},ks=s("p",null,"2. Align-center",-1),Ss=s("div",{class:"box"},null,-1),As=s("div",{class:"box"},null,-1),Cs=s("div",{class:"box"},null,-1),zs={class:"grow mx1 xs12 sm4"},Ts=s("p",null,"3. Align self start, center, end",-1),Ds=s("div",{class:"box align-self-start"},null,-1),Bs=s("div",{class:"box align-self-center"},null,-1),Fs=s("div",{class:"box align-self-end"},null,-1),Ns=s("br",null,null,-1),Ws=s("br",null,null,-1),Vs=s("code",null,"maa",-1),qs=s("span",{class:"code"},"margin: auto",-1),Es=s("code",null,"mxa",-1),Is=s("span",{class:"code"},"margin-left: auto;margin-right: auto;",-1),Ls={class:"grow mx1"},Rs=s("p",null,"1. Row direction",-1),Us=s("div",{class:"box maa"},null,-1),Gs=s("div",{class:"box maa"},null,-1),Js=s("div",{class:"box maa"},null,-1),Ys={class:"grow mx1"},Hs=s("p",null,"2. Column direction",-1),Ks=s("div",{class:"box"},null,-1),Ms=s("div",{class:"box mxa"},null,-1),Os=s("div",{class:"box"},null,-1),Ps=s("em",null,[n("Not "),s("span",{class:"code"},"justify-self")],-1),Qs={class:"black ml1",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox",target:"_blank"},Xs=s("code",null,".spacer",-1),Zs=s("p",null,"In a flex context, the spacer will push the elements to the sides.",-1),$s=s("div",{class:"box"},null,-1),se=s("div",{class:"box"},null,-1),ee=s("div",{class:"spacer"},null,-1),ne=s("div",{class:"box"},null,-1),le=s("div",{class:"shrink mx2 xs-hide"},null,-1),te=s("div",{class:"box shrink"},null,-1),oe=s("div",{class:"box shrink"},null,-1),ie=s("div",{class:"spacer"},null,-1),ae=s("div",{class:"box shrink"},null,-1),ce=s("p",null,[n("The "),s("strong",{class:"code"},"w-flex"),n(" component accepts a "),s("code",null,"gap"),n(` option to equally space out the children
inside the flex container.`)],-1),de={class:"box grow"},re={class:"box grow"},xe=s("code",null,"gap",-1),pe=s("code",null,".xs6",-1),fe=s("div",{class:"box xs3 code"},".xs3",-1),ue=s("div",{class:"box xs3 code"},".xs3",-1),be=s("div",{class:"box xs6 code"},".xs6",-1),_e=s("code",null,"gap",-1),he=s("code",null,"flex-wrap: wrap",-1),ge=s("strong",{class:"code"},"w-flex",-1),ve={class:"grow"},we={class:"yellow-light5--bg bd1"},me={class:"box xs6 code"},ye=s("div",{class:"mx2"},null,-1),je={class:"grow"},ke={class:"yellow-light5--bg bd1"},Se={class:"box xs6 code"},Ae=s("p",{class:"mt4"},[s("strong",null,"Solution:"),n(" there are a couple of ways to bypass this limitation.")],-1),Ce=s("h4",null,"1. Wrap children in padded boxes & apply equivalent negative margin on parent",-1),ze={class:"yellow-light5--bg bd1"},Te={class:"xs6 pa2"},De=s("div",{class:"box d-flex justify-center code"},".xs6",-1),Be=[De],Fe=s("h4",null,[n("2. Use the "),s("strong",{class:"code"},"w-grid"),n(" component instead")],-1),Ne={class:"yellow-light5--bg bd1"},We=s("div",{class:"box code"},"<div>",-1),Ve=s("div",{class:"box code"},"<div>",-1),qe=s("div",{class:"box code"},"<div>",-1),Ee=s("div",{class:"box code"},"<div>",-1);function Ie(Re,Ue){const i=a("title-link"),o=a("example"),t=a("w-flex"),b=a("router-link"),p=a("alert"),_=a("w-icon"),h=a("w-grid");return c(),d("main",null,[l(i,{class:"mt4",h1:""},{default:e(()=>[n("Flex layout classes")]),_:1}),l(i,{h2:"",slug:"w-flex-component-and-helper-classes"},{default:e(()=>[v,n(" component & helper classes")]),_:1}),w,l(i,{h2:""},{default:e(()=>[n("Alignments")]),_:1}),m,l(i,{class:"mt12 headline",h2:""},{default:e(()=>[n("Examples")]),_:1}),l(i,{class:"mt8 title2",h3:""},{default:e(()=>[n("Justify")]),_:1}),y,l(o,null,{pug:e(()=>[n(`p.mb1 .justify-start (default)
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
  .box`)]),html:e(()=>[n(`<p>.justify-start (default)</p>
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
</w-flex>`)]),css:e(()=>[n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}
`)]),default:e(()=>[j,k,S,A,C,z,T,D,B,F]),_:1}),N,l(o,null,{pug:e(()=>[n(`w-flex(basis-zero wrap)
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
      .box`)]),html:e(()=>[n(`<w-flex basis-zero wrap>
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
</w-flex>`)]),css:e(()=>[n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]),default:e(()=>[l(t,{"basis-zero":"",wrap:""},{default:e(()=>[s("div",W,[V,l(t,{class:"wrapper",column:"","align-center":"","justify-start":""},{default:e(()=>[q,E,I]),_:1})]),s("div",L,[R,l(t,{class:"wrapper",column:"","align-center":"","justify-center":""},{default:e(()=>[U,G,J]),_:1})]),s("div",Y,[H,l(t,{class:"wrapper",column:"","align-center":"","justify-space-between":""},{default:e(()=>[K,M,O]),_:1})]),s("div",P,[Q,l(t,{class:"wrapper",column:"","align-center":"","justify-end":""},{default:e(()=>[X,Z,$]),_:1})])]),_:1})]),_:1}),l(i,{class:"mt12 title2",h3:""},{default:e(()=>[n("Align")]),_:1}),ss,es,l(o,null,{pug:e(()=>[n(`w-flex(basis-zero wrap)
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
      .box.align-self-end`)]),html:e(()=>[n(`<w-flex basis-zero>
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
</w-flex>`)]),css:e(()=>[n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]),default:e(()=>[l(t,{"basis-zero":"",wrap:""},{default:e(()=>[s("div",ns,[ls,l(t,{class:"wrapper2","justify-center":""},{default:e(()=>[ts,os,is]),_:1})]),s("div",as,[cs,l(t,{class:"wrapper2","justify-center":"","align-center":""},{default:e(()=>[ds,rs,xs]),_:1})]),s("div",ps,[fs,l(t,{class:"wrapper2","justify-center":""},{default:e(()=>[us,bs,_s]),_:1})])]),_:1})]),_:1}),hs,l(o,null,{pug:e(()=>[n(`w-flex(basis-zero wrap)
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
      .box.align-self-end`)]),html:e(()=>[n(`<w-flex basis-zero>
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
</w-flex>`)]),css:e(()=>[n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]),default:e(()=>[l(t,{"basis-zero":"",wrap:""},{default:e(()=>[s("div",gs,[vs,l(t,{class:"wrapper2",column:"","justify-center":""},{default:e(()=>[ws,ms,ys]),_:1})]),s("div",js,[ks,l(t,{class:"wrapper2",column:"","justify-center":"","align-center":""},{default:e(()=>[Ss,As,Cs]),_:1})]),s("div",zs,[Ts,l(t,{class:"wrapper2",column:"","justify-center":""},{default:e(()=>[Ds,Bs,Fs]),_:1})])]),_:1})]),_:1}),l(i,{class:"mt12 title2",h3:""},{default:e(()=>[n("Using margin in flex context")]),_:1}),l(p,{warning:""},{default:e(()=>[n(`It's important to note that setting a margin on an element in a flex content will override its
default positioning.`),Ns,n(`
Look at the following examples where the boxes have different margins applied.`),Ws,n(),Vs,n(" = "),qs,n(", "),Es,n(" = "),Is,n(`
(read more in `),l(b,{to:"layout--spaces"},{default:e(()=>[n("Layout - spaces")]),_:1}),n(")")]),_:1}),l(o,null,{pug:e(()=>[n(`w-flex(basis-zero)
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
      .box`)]),html:e(()=>[n(`<w-flex basis-zero>
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
</w-flex>`)]),css:e(()=>[n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]),default:e(()=>[l(t,{"basis-zero":""},{default:e(()=>[s("div",Ls,[Rs,l(t,{class:"wrapper2","justify-center":"","align-center":""},{default:e(()=>[Us,Gs,Js]),_:1})]),s("div",Ys,[Hs,l(t,{class:"wrapper2",column:"","justify-center":""},{default:e(()=>[Ks,Ms,Os]),_:1})])]),_:1})]),_:1}),l(i,{class:"mt12 title3",h3:"",slug:"not-justify-self"},{default:e(()=>[Ps]),_:1}),l(p,{warning:""},{default:e(()=>[s("a",Qs,[n("There is no justify-self in Flexbox."),l(_,{class:"ml2",sm:""},{default:e(()=>[n("mdi mdi-open-in-new")]),_:1})])]),_:1}),l(i,{class:"mt12 title3",h3:"",slug:"spacer"},{default:e(()=>[n("Spacer ("),Xs,n(")")]),_:1}),Zs,l(t,{class:"xs-column",wrap:"","basis-zero":""},{default:e(()=>[l(o,{class:"grow","content-class":"fill-height"},{pug:e(()=>[n(`w-flex.wrapper(align-center)
  .box
  .box
  .spacer
  .box`)]),html:e(()=>[n(`<w-flex align-center class="wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="spacer"></div>
  <div class="box"></div>
</w-flex>`)]),css:e(()=>[n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}`)]),default:e(()=>[l(t,{class:"wrapper","align-center":""},{default:e(()=>[$s,se,ee,ne]),_:1})]),_:1}),le,l(o,{class:"grow"},{pug:e(()=>[n(`w-flex.wrapper(column)
  .box.shrink
  .box.shrink
  .spacer
  .box.shrink`)]),html:e(()=>[n(`<w-flex column class="wrapper">
  <div class="box shrink"></div>
  <div class="box shrink"></div>
  <div class="spacer"></div>
  <div class="box shrink"></div>
</w-flex>`)]),css:e(()=>[n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`)]),default:e(()=>[l(t,{class:"wrapper",column:""},{default:e(()=>[te,oe,ie,ae]),_:1})]),_:1})]),_:1}),l(i,{h2:""},{default:e(()=>[n("Gap")]),_:1}),ce,l(o,null,{pug:e(()=>[n(`w-flex(gap="6")
  .box.grow(v-for="i in 4")

w-flex.mt12(gap="2")
  .box.grow(v-for="i in 6")`)]),html:e(()=>[n(`<w-flex gap="3">
  <div v-for="i in 4" class="box grow"></div>
</w-flex>

<w-flex gap="6" class="mt12">
  <div v-for="i in 6" class="box grow"></div>
</w-flex>`)]),css:e(()=>[n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}`)]),default:e(()=>[l(t,{gap:"6"},{default:e(()=>[(c(),d(r,null,x(4,f=>s("div",de)),64))]),_:1}),l(t,{class:"mt12",gap:"2"},{default:e(()=>[(c(),d(r,null,x(6,f=>s("div",re)),64))]),_:1})]),_:1}),l(p,{success:""},{default:e(()=>[n("You can also use the "),xe,n(` option with the breakpoint-based grid classes
(E.g. `),pe,n(", etc.) when the boxes stay on a single line."),l(o,{class:"lighter"},{pug:e(()=>[n(`w-flex(gap="3")
  .box.xs3 .xs3
  .box.xs3 .xs3
  .box.xs6 .xs6`)]),html:e(()=>[n(`<w-flex gap="3">
  <div class="box xs3"></div>
  <div class="box xs3"></div>
  <div class="box xs6"></div>
</w-flex>`)]),css:e(()=>[n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}`)]),default:e(()=>[l(t,{gap:"3"},{default:e(()=>[fe,ue,be]),_:1})]),_:1})]),_:1}),l(i,{h3:""},{default:e(()=>[n("Caveat")]),_:1}),l(p,{warning:""},{default:e(()=>[n("The "),_e,n(" option will not work with both wrap ("),he,n(`) and the
breakpoint-based grid system. The gap would overflow from the 100% total width distributed
among the children of the `),ge,n(", like illustrated in the following examples.")]),_:1}),l(t,{class:"smd-column",wrap:""},{default:e(()=>[s("div",ve,[n("Without gap"),l(o,{class:"lighter mt2 grow"},{pug:e(()=>[n(`.yellow-light5--bg.bd1
  w-flex(wrap)
    .box.xs6(v-for="i in 4") .xs6`)]),html:e(()=>[n(`<div class="yellow-light5--bg bd1">
  <w-flex wrap>
    <div v-for="i in 4" class="box xs6">.xs6</div>
  </w-flex>
</div>`)]),css:e(()=>[n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`)]),default:e(()=>[s("div",we,[l(t,{wrap:""},{default:e(()=>[(c(),d(r,null,x(4,f=>s("div",me,".xs6")),64))]),_:1})])]),_:1})]),ye,s("div",je,[n("With gap"),l(o,{class:"lighter mt2 grow"},{pug:e(()=>[n(`.yellow-light5--bg.bd1
  w-flex(wrap gap="4")
    .box.xs6.code(v-for="i in 4") .xs6`)]),html:e(()=>[n(`<div class="yellow-light5--bg bd1">
  <w-flex wrap gap="4">
    <div v-for="i in 4" class="box xs6">.xs6</div>
  </w-flex>
</div>`)]),css:e(()=>[n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`)]),default:e(()=>[s("div",ke,[l(t,{wrap:"",gap:"4"},{default:e(()=>[(c(),d(r,null,x(4,f=>s("div",Se,".xs6")),64))]),_:1})])]),_:1})])]),_:1}),Ae,Ce,l(o,{class:"lighter"},{pug:e(()=>[n(`.yellow-light5--bg.bd1
  w-flex.ma-2(wrap)
    .xs6.pa2(v-for="i in 4")
      .box .xs6`)]),html:e(()=>[n(`<div class="yellow-light5--bg bd1">
  <w-flex wrap class="ma-2">
    <div v-for="i in 4" class="xs6 pa2">
      <div class="box">.xs6</div>
    </div>
  </w-flex>
</div>`)]),css:e(()=>[n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`)]),default:e(()=>[s("div",ze,[l(t,{class:"ma-2",wrap:""},{default:e(()=>[(c(),d(r,null,x(4,f=>s("div",Te,Be)),64))]),_:1})])]),_:1}),Fe,l(o,{class:"lighter"},{pug:e(()=>[n(`.yellow-light5--bg.bd1
  w-grid(columns="2" gap="4")
    .box <div>
    .box <div>
    .box <div>
    .box <div>`)]),html:e(()=>[n(`<div class="yellow-light5--bg bd1">
  <w-grid columns="2" gap="4">
    <div v-for="i in 4" class="box">
      &amp;lt;div&amp;gt;
    </div>
  </w-grid>
</div>`)]),css:e(()=>[n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}`)]),default:e(()=>[s("div",Ne,[l(h,{columns:"2",gap:"4"},{default:e(()=>[We,Ve,qe,Ee]),_:1})])]),_:1})])}const Le={},Je=g(Le,[["render",Ie]]);export{Je as default};
