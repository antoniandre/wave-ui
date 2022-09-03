import{r as c,o as a,f as d,a as l,w as e,b as s,F as r,s as x,e as n,i as f,_ as g}from"./index.d4c88c2a.js";const v=n("Flex layout classes"),w=s("span",{class:"code"},"w-flex",-1),m=n(" component & helper classes"),y=f(`<p>the <code>w-flex</code> component and the <code>.w-flex</code> class both allow a flex layout that you can
easily control with the following classes or attributes on the component.</p><ul class="mt4"><li><code class="mr2">.row</code>By default. Displays in row (<span class="code">flex-direction: row</span>).</li><li><code class="mr2">.column</code>Displays in column (<span class="code">flex-direction: column</span>).</li><li class="mt1"><code class="mr2">.wrap</code>Wraps the flex content when it does not fit (<span class="code">flex-wrap: wrap</span>).</li><li class="mt1"><code class="mr2">.grow</code>Tells the element to occupy the available space (<span class="code">flex-grow: 1</span>).</li><li class="mt1"><code class="mr2">.no-grow</code>Tells the element to <strong>not</strong> occupy the available space (<span class="code">flex-grow: 0</span>).</li><li class="mt1"><code class="mr2">.shrink</code>Tells the element to shrink if there is not enough space (<span class="code">flex-shrink: 1</span>).</li><li class="mt1"><code class="mr2">.no-shrink</code>Tells the element to <strong>not</strong> shrink if there is not enough space (<span class="code">flex-shrink: 0</span>).</li><li class="mt1"><code class="mr2">.basis-zero</code>Distribute the children elements with equal space (<span class="code">flex-basis: 0</span>).<br>
By default, flex containers will distribute children elements according to their content width.</li><li class="mt1"><code class="mr2">.fill-width</code>Sets a width of 100%.</li><li class="mt1"><code class="mr2">.fill-height</code>Sets a height of 100%.</li></ul>`,2),j=n("Alignments"),k=f(`<p>Align children with these classes on the parent container:</p><ul><li class="mt1"><code class="mr2">.align-start</code>Applies this CSS rule: <span class="code">align: flex-start</span>.</li><li class="mt1"><code class="mr2">.align-center</code>Applies this CSS rule: <span class="code">align: center</span>.</li><li class="mt1"><code class="mr2">.align-end</code>Applies this CSS rule: <span class="code">align: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-start</code>Applies this CSS rule: <span class="code">justify: flex-start</span>.</li><li class="mt1"><code class="mr2">.justify-center</code>Applies this CSS rule: <span class="code">justify: center</span>.</li><li class="mt1"><code class="mr2">.justify-end</code>Applies this CSS rule: <span class="code">justify: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-space-around</code>Applies this CSS rule: <span class="code">justify: space-around</span>.</li><li class="mt1"><code class="mr2">.justify-space-between</code>Applies this CSS rule: <span class="code">justify: space-between</span>.</li><li class="mt1"><code class="mr2">.justify-space-evenly</code>Applies this CSS rule: <span class="code">justify: space-evenly</span>.</li></ul><p class="mt4">Align a child with these classes directly on the child element:</p><ul><li class="mt1"><code class="mr2">.align-self-start</code>Applies this CSS rule: <span class="code">align-self: flex-start</span>.</li><li class="mt1"><code class="mr2">.align-self-center</code>Applies this CSS rule: <span class="code">align-self: center</span>.</li><li class="mt1"><code class="mr2">.align-self-end</code>Applies this CSS rule: <span class="code">align-self: flex-end</span>.</li><li class="mt1"><code class="mr2">.justify-self-start</code>Applies this CSS rule: <span class="code">justify-self: flex-start</span>.</li><li class="mt1"><code class="mr2">.justify-self-center</code>Applies this CSS rule: <span class="code">justify-self: center</span>.</li><li class="mt1"><code class="mr2">.justify-self-end</code>Applies this CSS rule: <span class="code">justify-self: flex-end</span>.</li><li class="mt1"><code class="mr2">.basis-zero</code>Applies this CSS rule directly on the element: <span class="code">flex-basis: 0</span>.</li></ul><p class="mt6">The <code class="mx1">.spacer</code> class is also very helpful to separate 2 elements as it will occupy the full
available space and push the elements on each side.
</p><div class="w-divider my12"></div>`,6),S=n("Examples"),A=n("Justify"),C=s("div",{class:"title3 mt6"},"w-flex, row direction (default)",-1),z=s("p",{class:"code mb1"},".justify-start (default)",-1),T=s("div",{class:"w-flex pa3 blue-light5--bg justify-start"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),D=s("p",{class:"code mt4 mb1"},".justify-center",-1),B=s("div",{class:"w-flex pa3 blue-light5--bg justify-center"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),F=s("p",{class:"code mt4 mb1"},".justify-end",-1),N=s("div",{class:"w-flex pa3 blue-light5--bg justify-end"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),W=s("p",{class:"code mt4 mb1"},".justify-space-between",-1),V=s("div",{class:"w-flex pa3 blue-light5--bg justify-space-between"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),q=s("p",{class:"code mt4 mb1"},".justify-space-evenly",-1),E=s("div",{class:"w-flex pa3 blue-light5--bg justify-space-evenly"},[s("div",{class:"box"}),s("div",{class:"box"}),s("div",{class:"box"})],-1),I=n(`p.mb1 .justify-start (default)
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
  .box`),L=n(`<p>.justify-start (default)</p>
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
`),U=s("div",{class:"title3"},"w-flex, column direction",-1),G={class:"grow mx1"},J=s("p",{class:"code mb1"},".justify-start (default)",-1),Y=s("div",{class:"box"},null,-1),H=s("div",{class:"box"},null,-1),K=s("div",{class:"box"},null,-1),M={class:"grow mx1"},O=s("p",{class:"code mb1"},".justify-center",-1),P=s("div",{class:"box"},null,-1),Q=s("div",{class:"box"},null,-1),X=s("div",{class:"box"},null,-1),Z={class:"grow mx1"},$=s("p",{class:"code mb1"},".justify-space-between",-1),ss=s("div",{class:"box"},null,-1),es=s("div",{class:"box"},null,-1),ns=s("div",{class:"box"},null,-1),ls={class:"grow mx1"},ts=s("p",{class:"code mb1"},".justify-end",-1),os=s("div",{class:"box"},null,-1),is=s("div",{class:"box"},null,-1),cs=s("div",{class:"box"},null,-1),as=n(`w-flex(basis-zero wrap)
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
      .box`),ds=n(`<w-flex basis-zero wrap>
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
</w-flex>`),rs=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`),xs=n("Align"),ps=s("p",null,[n("By default if you don't set an alignment on the "),s("span",{class:"code"},"w-flex"),n(` component, the content will
be stretched vertically.`),s("br"),n(`
If it is not what you want, you can either add an alignment on the `),s("span",{class:"code"},"w-flex"),n(` component
(case 2), or a self align on the children (case 3).
`)],-1),_s=s("div",{class:"title3 mt6"},"w-flex, row direction (default)",-1),fs={class:"grow mx1 xs12 sm4"},us=s("p",null,"1. Default",-1),bs=s("div",{class:"box"},null,-1),hs=s("div",{class:"box"},null,-1),gs=s("div",{class:"box"},null,-1),vs={class:"grow mx1 xs12 sm4"},ws=s("p",null,"2. Align center",-1),ms=s("div",{class:"box"},null,-1),ys=s("div",{class:"box"},null,-1),js=s("div",{class:"box"},null,-1),ks={class:"grow mx1 xs12 sm4"},Ss=s("p",null,"3. Align self start, center, end",-1),As=s("div",{class:"box align-self-start"},null,-1),Cs=s("div",{class:"box align-self-center"},null,-1),zs=s("div",{class:"box align-self-end"},null,-1),Ts=n(`w-flex(basis-zero wrap)
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
      .box.align-self-end`),Ds=n(`<w-flex basis-zero>
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
</w-flex>`),Bs=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`),Fs=s("div",{class:"title3 mt6"},"Align-self, column direction",-1),Ns={class:"grow mx1 xs12 sm4"},Ws=s("p",null,"1. Default",-1),Vs=s("div",{class:"box"},null,-1),qs=s("div",{class:"box"},null,-1),Es=s("div",{class:"box"},null,-1),Is={class:"grow mx1 xs12 sm4"},Ls=s("p",null,"2. Align-center",-1),Rs=s("div",{class:"box"},null,-1),Us=s("div",{class:"box"},null,-1),Gs=s("div",{class:"box"},null,-1),Js={class:"grow mx1 xs12 sm4"},Ys=s("p",null,"3. Align self start, center, end",-1),Hs=s("div",{class:"box align-self-start"},null,-1),Ks=s("div",{class:"box align-self-center"},null,-1),Ms=s("div",{class:"box align-self-end"},null,-1),Os=n(`w-flex(basis-zero wrap)
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
      .box.align-self-end`),Ps=n(`<w-flex basis-zero>
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
</w-flex>`),Qs=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`),Xs=n("Using margin in flex context"),Zs=n(`It's important to note that setting a margin on an element in a flex content will override its
default positioning.`),$s=s("br",null,null,-1),se=n(`
Look at the following examples where the boxes have different margins applied.`),ee=s("br",null,null,-1),ne=n(),le=s("code",null,"maa",-1),te=n(" = "),oe=s("span",{class:"code"},"margin: auto",-1),ie=n(", "),ce=s("code",null,"mxa",-1),ae=n(" = "),de=s("span",{class:"code"},"margin-left: auto;margin-right: auto;",-1),re=n(`
(read more in `),xe=n("Layout - spaces"),pe=n(")"),_e={class:"grow mx1"},fe=s("p",null,"1. Row direction",-1),ue=s("div",{class:"box maa"},null,-1),be=s("div",{class:"box maa"},null,-1),he=s("div",{class:"box maa"},null,-1),ge={class:"grow mx1"},ve=s("p",null,"2. Column direction",-1),we=s("div",{class:"box"},null,-1),me=s("div",{class:"box mxa"},null,-1),ye=s("div",{class:"box"},null,-1),je=n(`w-flex(basis-zero)
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
      .box`),ke=n(`<w-flex basis-zero>
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
</w-flex>`),Se=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`),Ae=s("em",null,[n("Not "),s("span",{class:"code"},"justify-self")],-1),Ce={class:"black ml1",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox",target:"_blank"},ze=n("There is no justify-self in Flexbox."),Te=n("mdi mdi-open-in-new"),De=n("Spacer ("),Be=s("code",null,".spacer",-1),Fe=n(")"),Ne=s("p",null,"In a flex context, the spacer will push the elements to the sides.",-1),We=s("div",{class:"box"},null,-1),Ve=s("div",{class:"box"},null,-1),qe=s("div",{class:"spacer"},null,-1),Ee=s("div",{class:"box"},null,-1),Ie=n(`w-flex.wrapper(align-center)
  .box
  .box
  .spacer
  .box`),Le=n(`<w-flex align-center class="wrapper">
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
}`),Ue=s("div",{class:"shrink mx2 xs-hide"},null,-1),Ge=s("div",{class:"box shrink"},null,-1),Je=s("div",{class:"box shrink"},null,-1),Ye=s("div",{class:"spacer"},null,-1),He=s("div",{class:"box shrink"},null,-1),Ke=n(`w-flex.wrapper(column)
  .box.shrink
  .box.shrink
  .spacer
  .box.shrink`),Me=n(`<w-flex column class="wrapper">
  <div class="box shrink"></div>
  <div class="box shrink"></div>
  <div class="spacer"></div>
  <div class="box shrink"></div>
</w-flex>`),Oe=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
`),Pe=n("Gap"),Qe=s("p",null,[n("The "),s("strong",{class:"code"},"w-flex"),n(" component accepts a "),s("code",null,"gap"),n(` option to equally space out the children
inside the flex container.`)],-1),Xe={class:"box grow"},Ze={class:"box grow"},$e=n(`w-flex(gap="6")
  .box.grow(v-for="i in 4")

w-flex.mt12(gap="2")
  .box.grow(v-for="i in 6")`),sn=n(`<w-flex gap="3">
  <div v-for="i in 4" class="box grow"></div>
</w-flex>

<w-flex gap="6" class="mt12">
  <div v-for="i in 6" class="box grow"></div>
</w-flex>`),en=n(`.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}`),nn=n("You can also use the "),ln=s("code",null,"gap",-1),tn=n(` option with the breakpoint-based grid classes
(E.g. `),on=s("code",null,".xs6",-1),cn=n(", etc.) when the boxes stay on a single line."),an=s("div",{class:"box xs3 code"},".xs3",-1),dn=s("div",{class:"box xs3 code"},".xs3",-1),rn=s("div",{class:"box xs6 code"},".xs6",-1),xn=n(`w-flex(gap="3")
  .box.xs3 .xs3
  .box.xs3 .xs3
  .box.xs6 .xs6`),pn=n(`<w-flex gap="3">
  <div class="box xs3"></div>
  <div class="box xs3"></div>
  <div class="box xs6"></div>
</w-flex>`),_n=n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}`),fn=n("Caveat"),un=n("The "),bn=s("code",null,"gap",-1),hn=n(" option will not work with both wrap ("),gn=s("code",null,"flex-wrap: wrap",-1),vn=n(`) and the
breakpoint-based grid system. The gap would overflow from the 100% total width distributed
among the children of the `),wn=s("strong",{class:"code"},"w-flex",-1),mn=n(", like illustrated in the following examples."),yn={class:"grow"},jn=n("Without gap"),kn={class:"yellow-light5--bg bd1"},Sn={class:"box xs6 code"},An=n(`.yellow-light5--bg.bd1
  w-flex(wrap)
    .box.xs6(v-for="i in 4") .xs6`),Cn=n(`<div class="yellow-light5--bg bd1">
  <w-flex wrap>
    <div v-for="i in 4" class="box xs6">.xs6</div>
  </w-flex>
</div>`),zn=n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`),Tn=s("div",{class:"mx2"},null,-1),Dn={class:"grow"},Bn=n("With gap"),Fn={class:"yellow-light5--bg bd1"},Nn={class:"box xs6 code"},Wn=n(`.yellow-light5--bg.bd1
  w-flex(wrap gap="4")
    .box.xs6.code(v-for="i in 4") .xs6`),Vn=n(`<div class="yellow-light5--bg bd1">
  <w-flex wrap gap="4">
    <div v-for="i in 4" class="box xs6">.xs6</div>
  </w-flex>
</div>`),qn=n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`),En=s("p",{class:"mt4"},[s("strong",null,"Solution:"),n(" there are a couple of ways to bypass this limitation.")],-1),In=s("h4",null,"1. Wrap children in padded boxes & apply equivalent negative margin on parent",-1),Ln={class:"yellow-light5--bg bd1"},Rn={class:"xs6 pa2"},Un=s("div",{class:"box d-flex justify-center code"},".xs6",-1),Gn=[Un],Jn=n(`.yellow-light5--bg.bd1
  w-flex.ma-2(wrap)
    .xs6.pa2(v-for="i in 4")
      .box .xs6`),Yn=n(`<div class="yellow-light5--bg bd1">
  <w-flex wrap class="ma-2">
    <div v-for="i in 4" class="xs6 pa2">
      <div class="box">.xs6</div>
    </div>
  </w-flex>
</div>`),Hn=n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}
`),Kn=s("h4",null,[n("2. Use the "),s("strong",{class:"code"},"w-grid"),n(" component instead")],-1),Mn={class:"yellow-light5--bg bd1"},On=s("div",{class:"box code"},"<div>",-1),Pn=s("div",{class:"box code"},"<div>",-1),Qn=s("div",{class:"box code"},"<div>",-1),Xn=s("div",{class:"box code"},"<div>",-1),Zn=n(`.yellow-light5--bg.bd1
  w-grid(columns="2" gap="4")
    .box <div>
    .box <div>
    .box <div>
    .box <div>`),$n=n(`<div class="yellow-light5--bg bd1">
  <w-grid columns="2" gap="4">
    <div v-for="i in 4" class="box">
      &amp;lt;div&amp;gt;
    </div>
  </w-grid>
</div>`),sl=n(`.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px 0;
  text-align: center;
}`);function el(ll,tl){const i=c("title-link"),o=c("example"),t=c("w-flex"),u=c("router-link"),p=c("alert"),b=c("w-icon"),h=c("w-grid");return a(),d("main",null,[l(i,{class:"mt4",h1:""},{default:e(()=>[v]),_:1}),l(i,{h2:"",slug:"w-flex-component-and-helper-classes"},{default:e(()=>[w,m]),_:1}),y,l(i,{h2:""},{default:e(()=>[j]),_:1}),k,l(i,{class:"mt12 headline",h2:""},{default:e(()=>[S]),_:1}),l(i,{class:"mt8 title2",h3:""},{default:e(()=>[A]),_:1}),C,l(o,null,{pug:e(()=>[I]),html:e(()=>[L]),css:e(()=>[R]),default:e(()=>[z,T,D,B,F,N,W,V,q,E]),_:1}),U,l(o,null,{pug:e(()=>[as]),html:e(()=>[ds]),css:e(()=>[rs]),default:e(()=>[l(t,{"basis-zero":"",wrap:""},{default:e(()=>[s("div",G,[J,l(t,{class:"wrapper",column:"","align-center":"","justify-start":""},{default:e(()=>[Y,H,K]),_:1})]),s("div",M,[O,l(t,{class:"wrapper",column:"","align-center":"","justify-center":""},{default:e(()=>[P,Q,X]),_:1})]),s("div",Z,[$,l(t,{class:"wrapper",column:"","align-center":"","justify-space-between":""},{default:e(()=>[ss,es,ns]),_:1})]),s("div",ls,[ts,l(t,{class:"wrapper",column:"","align-center":"","justify-end":""},{default:e(()=>[os,is,cs]),_:1})])]),_:1})]),_:1}),l(i,{class:"mt12 title2",h3:""},{default:e(()=>[xs]),_:1}),ps,_s,l(o,null,{pug:e(()=>[Ts]),html:e(()=>[Ds]),css:e(()=>[Bs]),default:e(()=>[l(t,{"basis-zero":"",wrap:""},{default:e(()=>[s("div",fs,[us,l(t,{class:"wrapper2","justify-center":""},{default:e(()=>[bs,hs,gs]),_:1})]),s("div",vs,[ws,l(t,{class:"wrapper2","justify-center":"","align-center":""},{default:e(()=>[ms,ys,js]),_:1})]),s("div",ks,[Ss,l(t,{class:"wrapper2","justify-center":""},{default:e(()=>[As,Cs,zs]),_:1})])]),_:1})]),_:1}),Fs,l(o,null,{pug:e(()=>[Os]),html:e(()=>[Ps]),css:e(()=>[Qs]),default:e(()=>[l(t,{"basis-zero":"",wrap:""},{default:e(()=>[s("div",Ns,[Ws,l(t,{class:"wrapper2",column:"","justify-center":""},{default:e(()=>[Vs,qs,Es]),_:1})]),s("div",Is,[Ls,l(t,{class:"wrapper2",column:"","justify-center":"","align-center":""},{default:e(()=>[Rs,Us,Gs]),_:1})]),s("div",Js,[Ys,l(t,{class:"wrapper2",column:"","justify-center":""},{default:e(()=>[Hs,Ks,Ms]),_:1})])]),_:1})]),_:1}),l(i,{class:"mt12 title2",h3:""},{default:e(()=>[Xs]),_:1}),l(p,{warning:""},{default:e(()=>[Zs,$s,se,ee,ne,le,te,oe,ie,ce,ae,de,re,l(u,{to:"layout--spaces"},{default:e(()=>[xe]),_:1}),pe]),_:1}),l(o,null,{pug:e(()=>[je]),html:e(()=>[ke]),css:e(()=>[Se]),default:e(()=>[l(t,{"basis-zero":""},{default:e(()=>[s("div",_e,[fe,l(t,{class:"wrapper2","justify-center":"","align-center":""},{default:e(()=>[ue,be,he]),_:1})]),s("div",ge,[ve,l(t,{class:"wrapper2",column:"","justify-center":""},{default:e(()=>[we,me,ye]),_:1})])]),_:1})]),_:1}),l(i,{class:"mt12 title3",h3:"",slug:"not-justify-self"},{default:e(()=>[Ae]),_:1}),l(p,{warning:""},{default:e(()=>[s("a",Ce,[ze,l(b,{class:"ml2",sm:""},{default:e(()=>[Te]),_:1})])]),_:1}),l(i,{class:"mt12 title3",h3:"",slug:"spacer"},{default:e(()=>[De,Be,Fe]),_:1}),Ne,l(t,{class:"xs-column",wrap:"","basis-zero":""},{default:e(()=>[l(o,{class:"grow","content-class":"fill-height"},{pug:e(()=>[Ie]),html:e(()=>[Le]),css:e(()=>[Re]),default:e(()=>[l(t,{class:"wrapper","align-center":""},{default:e(()=>[We,Ve,qe,Ee]),_:1})]),_:1}),Ue,l(o,{class:"grow"},{pug:e(()=>[Ke]),html:e(()=>[Me]),css:e(()=>[Oe]),default:e(()=>[l(t,{class:"wrapper",column:""},{default:e(()=>[Ge,Je,Ye,He]),_:1})]),_:1})]),_:1}),l(i,{h2:""},{default:e(()=>[Pe]),_:1}),Qe,l(o,null,{pug:e(()=>[$e]),html:e(()=>[sn]),css:e(()=>[en]),default:e(()=>[l(t,{gap:"6"},{default:e(()=>[(a(),d(r,null,x(4,_=>s("div",Xe)),64))]),_:1}),l(t,{class:"mt12",gap:"2"},{default:e(()=>[(a(),d(r,null,x(6,_=>s("div",Ze)),64))]),_:1})]),_:1}),l(p,{success:""},{default:e(()=>[nn,ln,tn,on,cn,l(o,{class:"lighter"},{pug:e(()=>[xn]),html:e(()=>[pn]),css:e(()=>[_n]),default:e(()=>[l(t,{gap:"3"},{default:e(()=>[an,dn,rn]),_:1})]),_:1})]),_:1}),l(i,{h3:""},{default:e(()=>[fn]),_:1}),l(p,{warning:""},{default:e(()=>[un,bn,hn,gn,vn,wn,mn]),_:1}),l(t,{class:"smd-column",wrap:""},{default:e(()=>[s("div",yn,[jn,l(o,{class:"lighter mt2 grow"},{pug:e(()=>[An]),html:e(()=>[Cn]),css:e(()=>[zn]),default:e(()=>[s("div",kn,[l(t,{wrap:""},{default:e(()=>[(a(),d(r,null,x(4,_=>s("div",Sn,".xs6")),64))]),_:1})])]),_:1})]),Tn,s("div",Dn,[Bn,l(o,{class:"lighter mt2 grow"},{pug:e(()=>[Wn]),html:e(()=>[Vn]),css:e(()=>[qn]),default:e(()=>[s("div",Fn,[l(t,{wrap:"",gap:"4"},{default:e(()=>[(a(),d(r,null,x(4,_=>s("div",Nn,".xs6")),64))]),_:1})])]),_:1})])]),_:1}),En,In,l(o,{class:"lighter"},{pug:e(()=>[Jn]),html:e(()=>[Yn]),css:e(()=>[Hn]),default:e(()=>[s("div",Ln,[l(t,{class:"ma-2",wrap:""},{default:e(()=>[(a(),d(r,null,x(4,_=>s("div",Rn,Gn)),64))]),_:1})])]),_:1}),Kn,l(o,{class:"lighter"},{pug:e(()=>[Zn]),html:e(()=>[$n]),css:e(()=>[sl]),default:e(()=>[s("div",Mn,[l(h,{columns:"2",gap:"4"},{default:e(()=>[On,Pn,Qn,Xn]),_:1})])]),_:1})])}const nl={};var il=g(nl,[["render",el]]);export{il as default};
