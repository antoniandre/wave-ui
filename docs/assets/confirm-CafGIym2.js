import{N as e,U as t,c as n,d as r,g as i,gt as a,h as o,k as s,m as c,u as l,yt as u}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as d}from"./_plugin-vue_export-helper-S3RvzygF.js";import{M as f}from"./index-DJwFRA2S.js";var p={class:`w-flex wrap`},m={class:`w-flex align-center my4`},h={class:`w-flex justify-end align-center`};function g(d,f,g,_,v,y){let b=e(`alert`),x=e(`title-link`),S=e(`w-confirm`),C=e(`example`),w=e(`w-flex`),T=e(`w-icon`),E=e(`w-input`),D=e(`w-transition-slide-fade`),O=e(`w-card`);return s(),r(`div`,null,[i(b,{info:``},{default:t(()=>[...f[5]||=[n(`ul`,null,[n(`li`,null,[o(`The purpose of the `),n(`strong`,{class:`code`},`w-confirm`),o(` component is to quickly set up a
confirmation prompt to confirm a critical action.`)]),n(`li`,null,[o(`The `),n(`strong`,{class:`code`},`w-confirm`),o(` component uses the `),n(`strong`,{class:`code`},`w-menu`),o(` and
`),n(`strong`,{class:`code`},`w-button`),o(` components.
`)])],-1)]]),_:1}),i(x,{h2:``},{default:t(()=>[...f[6]||=[o(`Basic`,-1)]]),_:1}),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[8]||=[o(`w-confirm Delete`,-1)]]),html:t(()=>[...f[9]||=[o(`<w-confirm>Delete</w-confirm>
`,-1)]]),default:t(()=>[i(S,null,{default:t(()=>[...f[7]||=[o(`Delete`,-1)]]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[10]||=[o(`Icon button`,-1)]]),_:1}),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[11]||=[o(`w-confirm(icon="mdi mdi-delete")`,-1)]]),html:t(()=>[...f[12]||=[o(`<w-confirm icon="mdi mdi-delete">
  Delete
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{icon:`mdi mdi-delete`})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[13]||=[o(`Integrated tooltip`,-1)]]),_:1}),f[115]||=n(`p`,null,[o(`We often need a tooltip on a button. Especially on the ones that only have an icons.`),n(`br`),o(`
That's why from version 2.45.0, the `),n(`strong`,{class:`code`},`w-button`),o(` & `),n(`strong`,{class:`code`},`w-confirm`),o(`
components ship with an integrated w-tooltip, if you need it.
`)],-1),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[16]||=[o(`w-flex(wrap)
  w-confirm.ma4(tooltip="Delete this?") Delete

  w-confirm.ma4(
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }")
    | Delete`,-1)]]),html:t(()=>[...f[17]||=[o(`<w-flex wrap>
  <w-confirm class="ma4" tooltip="Delete this?">
    Delete
  </w-confirm>

  <w-confirm
    class="ma4"
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }">
    Delete
  </w-confirm>
</w-flex>
`,-1)]]),default:t(()=>[n(`div`,p,[i(S,{class:`ma4`,tooltip:`Delete this?`},{default:t(()=>[...f[14]||=[o(`Delete`,-1)]]),_:1}),i(S,{class:`ma4`,tooltip:{label:`Delete this?`,bgColor:`error`,top:!0,transition:`twist`}},{default:t(()=>[...f[15]||=[o(`Delete`,-1)]]),_:1})])]),_:1}),i(x,{h2:``},{default:t(()=>[...f[18]||=[o(`Colors`,-1)]]),_:1}),f[116]||=c(`<p>The <code>bg-color</code> &amp; <code>color</code> props apply to the button you first see.<br>
To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:</p><ul><li><code>menu</code> <small class="grey">E.g. <code class="grey">:menu=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>cancel</code> <small class="grey">E.g. <code class="grey">:cancel=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>confirm</code> <small class="grey">E.g. <code class="grey">:confirm=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li></ul>`,2),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[22]||=[o(`w-confirm.ma2(bg-color="success") Ask for confirm
w-confirm.ma2(bg-color="info" color="yellow") Ask for confirm
w-confirm.ma2(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm`,-1)]]),html:t(()=>[...f[23]||=[o(`<w-confirm bg-color="success" class="ma2">
  Ask for confirm
</w-confirm>

<w-confirm bg-color="info" color="yellow" class="ma2">
  Ask for confirm
</w-confirm>

<w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }" class="ma2">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{class:`ma2`,"bg-color":`success`},{default:t(()=>[...f[19]||=[o(`Ask for confirm`,-1)]]),_:1}),i(S,{class:`ma2`,"bg-color":`info`,color:`yellow`},{default:t(()=>[...f[20]||=[o(`Ask for confirm`,-1)]]),_:1}),i(S,{class:`ma2`,menu:{bgColor:`indigo-light1`,color:`white`}},{default:t(()=>[...f[21]||=[o(`Ask for confirm`,-1)]]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[24]||=[o(`Positions & alignments`,-1)]]),_:1}),i(x,{h3:``},{default:t(()=>[...f[25]||=[o(`Positions`,-1)]]),_:1}),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[30]||=[o(`w-confirm.ma5(top) Top
w-confirm.ma5(right) Right
w-confirm.ma5(bottom) Bottom
w-confirm.ma5(left) Left`,-1)]]),html:t(()=>[...f[31]||=[o(`<w-confirm top class="ma5">
  Top
</w-confirm>

<w-confirm right class="ma5">
  Right
</w-confirm>

<w-confirm bottom class="ma5">
  Bottom
</w-confirm>

<w-confirm left class="ma5">
  Left
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{class:`ma5`,top:``},{default:t(()=>[...f[26]||=[o(`Top`,-1)]]),_:1}),i(S,{class:`ma5`,right:``},{default:t(()=>[...f[27]||=[o(`Right`,-1)]]),_:1}),i(S,{class:`ma5`,bottom:``},{default:t(()=>[...f[28]||=[o(`Bottom`,-1)]]),_:1}),i(S,{class:`ma5`,left:``},{default:t(()=>[...f[29]||=[o(`Left`,-1)]]),_:1})]),_:1}),i(x,{h3:``},{default:t(()=>[...f[32]||=[o(`Alignments`,-1)]]),_:1}),i(x,{h4:``},{default:t(()=>[...f[33]||=[o(`Horizontal`,-1)]]),_:1}),i(C,null,{pug:t(()=>[...f[40]||=[o(`w-flex(justify-center)
  w-confirm.ma2(top align-left) Top, align left
  w-confirm.ma2(top) Top, align center
  w-confirm.ma2(top align-right) Top, align right

w-flex(justify-center)
  w-confirm.ma2(bottom align-left) Bottom, align left
  w-confirm.ma2(bottom) Bottom, align center
  w-confirm.ma2(bottom align-right) Bottom, align right`,-1)]]),html:t(()=>[...f[41]||=[o(`<w-flex justify-center>
  <w-confirm top align-left class="ma2">
    Top, align left
  </w-confirm>

  <w-confirm top class="ma2">
    Top, align center
  </w-confirm>

  <w-confirm top align-right class="ma2">
    Top, align right
  </w-confirm>
</w-flex>

<w-flex justify-center>
  <w-confirm bottom align-left class="ma2">
    Bottom, align left
  </w-confirm>

  <w-confirm bottom class="ma2">
    Bottom, align center
  </w-confirm>

  <w-confirm bottom align-right class="ma2">
    Bottom, align right
  </w-confirm>
</w-flex>
`,-1)]]),default:t(()=>[i(w,{class:`mt12`,"justify-center":``},{default:t(()=>[i(S,{class:`ma2`,top:``,"align-left":``},{default:t(()=>[...f[34]||=[o(`Top, align left`,-1)]]),_:1}),i(S,{class:`ma2`,top:``},{default:t(()=>[...f[35]||=[o(`Top, align center`,-1)]]),_:1}),i(S,{class:`ma2`,top:``,"align-right":``},{default:t(()=>[...f[36]||=[o(`Top, align right`,-1)]]),_:1})]),_:1}),i(w,{"justify-center":``},{default:t(()=>[i(S,{class:`ma2`,bottom:``,"align-left":``},{default:t(()=>[...f[37]||=[o(`Bottom, align left`,-1)]]),_:1}),i(S,{class:`ma2`,bottom:``},{default:t(()=>[...f[38]||=[o(`Bottom, align center`,-1)]]),_:1}),i(S,{class:`ma2`,bottom:``,"align-right":``},{default:t(()=>[...f[39]||=[o(`Bottom, align right`,-1)]]),_:1})]),_:1})]),_:1}),i(x,{h4:``},{default:t(()=>[...f[42]||=[o(`Vertical`,-1)]]),_:1}),i(C,null,{pug:t(()=>[...f[49]||=[o(`w-flex(justify-center)
  w-flex.no-grow(column)
    w-confirm.ma2(left align-top) Left, align top
    w-confirm.ma2(left) Left, align center
    w-confirm.ma2(left align-bottom) Left, align bottom

  w-flex.no-grow(column)
    w-confirm.ma2(right align-top) Right, align top
    w-confirm.ma2(right) Right, align center
    w-confirm.ma2(right align-bottom) Right, align bottom`,-1)]]),html:t(()=>[...f[50]||=[o(`<w-flex justify-center class="text-center">
  <w-flex column class="no-grow">
    <w-confirm left align-top class="ma2">
      Left, align top
    </w-confirm>

    <w-confirm left class="ma2">
      Left, align center
    </w-confirm>

    <w-confirm left align-bottom class="ma2">
      Left, align bottom
    </w-confirm>
  </w-flex>

  <w-flex column class="no-grow">
    <w-confirm right align-top class="ma2">
      Right, align top
    </w-confirm>

    <w-confirm right class="ma2">
      Right, align center
    </w-confirm>

    <w-confirm right align-bottom class="ma2">
      Right, align bottom
    </w-confirm>
  </w-flex>
</w-flex>
`,-1)]]),default:t(()=>[i(w,{"justify-center":``},{default:t(()=>[i(w,{class:`no-grow`,column:``},{default:t(()=>[i(S,{class:`ma2`,left:``,"align-top":``},{default:t(()=>[...f[43]||=[o(`Left, align top`,-1)]]),_:1}),i(S,{class:`ma2`,left:``},{default:t(()=>[...f[44]||=[o(`Left, align center`,-1)]]),_:1}),i(S,{class:`ma2`,left:``,"align-bottom":``},{default:t(()=>[...f[45]||=[o(`Left, align bottom`,-1)]]),_:1})]),_:1}),i(w,{class:`no-grow`,column:``},{default:t(()=>[i(S,{class:`ma2`,right:``,"align-top":``},{default:t(()=>[...f[46]||=[o(`Right, align top`,-1)]]),_:1}),i(S,{class:`ma2`,right:``},{default:t(()=>[...f[47]||=[o(`Right, align center`,-1)]]),_:1}),i(S,{class:`ma2`,right:``,"align-bottom":``},{default:t(()=>[...f[48]||=[o(`Right, align bottom`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[51]||=[o(`Persistent`,-1)]]),_:1}),f[117]||=n(`p`,null,`A click outside of the menu will not close it.`,-1),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[53]||=[o(`w-confirm(persistent) Ask for confirm`,-1)]]),html:t(()=>[...f[54]||=[o(`<w-confirm persistent>
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{persistent:``},{default:t(()=>[...f[52]||=[o(`Ask for confirm`,-1)]]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[55]||=[o(`Inline question`,-1)]]),_:1}),f[118]||=n(`p`,null,`Displays the question inline with the buttons inside the menu.`,-1),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[57]||=[o(`w-confirm(inline) Ask for confirm`,-1)]]),html:t(()=>[...f[58]||=[o(`<w-confirm inline>
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{inline:``},{default:t(()=>[...f[56]||=[o(`Ask for confirm`,-1)]]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[59]||=[o(`Custom question`,-1)]]),_:1}),f[119]||=n(`p`,null,[o(`By default the question is "Are you sure?". But both the `),n(`code`,null,`question`),o(` prop and the
`),n(`code`,null,`#question`),o(` slot allow you to specify your own question. The slot is more
customizable as you can add components in it but more verbose to write.`),n(`br`),o(`
If both a slot and a prop are given, the slot takes precedence.
`)],-1),i(x,{h3:``,slug:`using-question-prop`},{default:t(()=>[...f[60]||=[o(`Using the `,-1),n(`code`,null,`question`,-1),o(` prop`,-1)]]),_:1}),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[62]||=[o(`w-confirm(question="Are you sure you want to delete this?").
  Ask for confirm`,-1)]]),html:t(()=>[...f[63]||=[o(`<w-confirm question="Are you sure you want to delete this?">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{question:`Are you sure you want to delete this?`},{default:t(()=>[...f[61]||=[o(`Ask for confirm`,-1)]]),_:1})]),_:1}),i(x,{h3:``,slug:`using-question-slot`},{default:t(()=>[...f[64]||=[o(`Using the `,-1),n(`code`,null,`#question`,-1),o(` slot`,-1)]]),_:1}),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[67]||=[o(`w-confirm
  | Ask for confirm
  template(#question) Are you sure you want to delete this?`,-1)]]),html:t(()=>[...f[68]||=[o(`<w-confirm>
  Ask for confirm
  <template #question>
    Are you sure you want to delete this?
  </template>
</w-confirm>
`,-1)]]),default:t(()=>[i(S,null,{question:t(()=>[...f[65]||=[o(`Are you sure you want to delete this?`,-1)]]),default:t(()=>[f[66]||=o(`Ask for confirm`,-1)]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[69]||=[o(`Cancel & confirm buttons`,-1)]]),_:1}),f[120]||=n(`p`,null,[o(`The cancel & confirm buttons can be customized through the `),n(`code`,null,`cancel`),o(` &
`),n(`code`,null,`confirm`),o(` props. These props accept either a `),n(`span`,{class:`code`},`String`),o(` for the button
label, or an `),n(`span`,{class:`code`},`Object`),o(` in order to define w-button props.`),n(`br`),o(`
The cancel button can also be set to `),n(`code`,null,`false`),o(` in order to remove it.`)],-1),i(x,{h3:``},{default:t(()=>[...f[70]||=[o(`Custom buttons labels`,-1)]]),_:1}),f[121]||=n(`p`,null,[o(`You can use the `),n(`code`,null,`cancel`),o(` & `),n(`code`,null,`confirm`),o(),n(`strong`,null,`props or slots`),o(` to override the
cancel & confirm buttons labels.`)],-1),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[72]||=[o(`w-confirm(cancel="No" confirm="Yes").
  Ask for confirm`,-1)]]),html:t(()=>[...f[73]||=[o(`<w-confirm cancel="No" confirm="Yes">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{cancel:`No`,confirm:`Yes`},{default:t(()=>[...f[71]||=[o(`Ask for confirm`,-1)]]),_:1})]),_:1}),i(x,{h3:``},{default:t(()=>[...f[74]||=[o(`No cancel button`,-1)]]),_:1}),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[76]||=[o(`w-confirm(:cancel="false") Ask for confirm`,-1)]]),html:t(()=>[...f[77]||=[o(`<w-confirm :cancel="false">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{cancel:!1},{default:t(()=>[...f[75]||=[o(`Ask for confirm`,-1)]]),_:1})]),_:1}),i(x,{h3:``},{default:t(()=>[...f[78]||=[o(`Full custom buttons`,-1)]]),_:1}),f[122]||=n(`p`,null,[o(`The cancel and confirm buttons can be customized as much as a standard `),n(`strong`,{class:`code`},`w-button`),o(`
via the `),n(`code`,null,`cancel`),o(` & `),n(`code`,null,`confirm`),o(` props which accept an object of
props to pass down to the `),n(`strong`,{class:`code`},`w-button`),o(`.`)],-1),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[80]||=[o(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
  | Ask for confirm`,-1)]]),html:t(()=>[...f[81]||=[o(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{inline:``,cancel:{bgColor:`error-dark1`,color:`white`,icon:`mdi mdi-close`},confirm:{bgColor:`green-dark1`,color:`white`,icon:`mdi mdi-check`}},{default:t(()=>[...f[79]||=[o(`Ask for confirm`,-1)]]),_:1})]),_:1}),i(x,{h3:``,slug:`custom-label-in-object`},{default:t(()=>[...f[82]||=[o(`Custom button label in the `,-1),n(`span`,{class:`code`},`Object`,-1),o(` form`,-1)]]),_:1}),f[123]||=n(`p`,null,[o(`If you're using the object form, you can define a custom label in it
(or you could also use the `),n(`code`,null,`#cancel`),o(` & `),n(`code`,null,`#confirm`),o(` slots
for more flexibility).`)],-1),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[84]||=[o(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }")
  | Ask for confirm`,-1)]]),html:t(()=>[...f[85]||=[o(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{inline:``,cancel:{bgColor:`error-dark1`,color:`white`,label:`No`},confirm:{bgColor:`green-dark1`,color:`white`,label:`Yes`}},{default:t(()=>[...f[83]||=[o(`Ask for confirm`,-1)]]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[86]||=[o(`No arrow`,-1)]]),_:1}),f[124]||=n(`p`,null,[o(`By default, the w-confirm component displays an arrow on the edge of the menu to designate
which action you have clicked requiring a confirmation.`),n(`br`),o(`
You can disable the arrow via the `),n(`code`,null,`no-arrow`),o(` option.`)],-1),i(C,{class:`example--no-arrow`,"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[90]||=[o(`w-flex(column align-center)
  w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
  w-confirm.ma2(no-arrow right) Right
  w-confirm.ma2(:menu="{ noPosition: true }") No position`,-1)]]),html:t(()=>[...f[91]||=[o(`<w-flex column align-center>
  <w-confirm
    no-arrow
    :menu="{ bgColor: 'blue-light5' }"
    class="ma2">
    Bottom
  </w-confirm>

  <w-confirm no-arrow right class="ma2">
    Right
  </w-confirm>

  <w-confirm
    :menu="{ noPosition: true }"
    class="ma2">
    No position
  </w-confirm>
</w-flex>
`,-1)]]),default:t(()=>[i(w,{class:`mb12`,column:``,"align-center":``},{default:t(()=>[i(S,{class:`ma2`,"no-arrow":``,menu:{bgColor:`blue-light5`}},{default:t(()=>[...f[87]||=[o(`Bottom`,-1)]]),_:1}),i(S,{class:`ma2`,"no-arrow":``,right:``},{default:t(()=>[...f[88]||=[o(`Right`,-1)]]),_:1}),i(S,{class:`ma2`,menu:{noPosition:!0,appendTo:`.example--no-arrow`}},{default:t(()=>[...f[89]||=[o(`No position`,-1)]]),_:1})]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[92]||=[o(`Transitions`,-1)]]),_:1}),i(C,null,{pug:t(()=>[...f[102]||=[o(`w-flex(wrap)
  w-confirm.ma1 Default (scale-fade)
  w-confirm.ma1(transition="fade") Fade
  w-confirm.ma1(transition="slide-fade-up") Slide fade up
  w-confirm.ma1(transition="slide-fade-right") Slide fade right
  w-confirm.ma1(transition="slide-fade-down") Slide fade down
  w-confirm.ma1(transition="slide-fade-left") Slide fade left
  w-confirm.ma1(transition="scale") Scale
  w-confirm.ma1(transition="bounce") Bounce
  w-confirm.ma1(transition="twist") Twist`,-1)]]),html:t(()=>[...f[103]||=[o(`<w-confirm class="ma1">
  Default (scale-fade)
</w-confirm>

<w-confirm
  transition="fade"
  class="ma1">
  Fade
</w-confirm>

<w-confirm
  transition="slide-fade-up"
  class="ma1">
  Slide fade up
</w-confirm>

<w-confirm
  transition="slide-fade-right"
  class="ma1">
  Slide fade right
</w-confirm>

<w-confirm
  transition="slide-fade-down"
  class="ma1">
  Slide fade down
</w-confirm>

<w-confirm
  transition="slide-fade-left"
  class="ma1">
  Slide fade left
</w-confirm>

<w-confirm
  transition="scale"
  class="ma1">
  Scale
</w-confirm>

<w-confirm
  transition="bounce"
  class="ma1">
  Bounce
</w-confirm>

<w-confirm
  transition="twist"
  class="ma1">
  Twist
</w-confirm>
`,-1)]]),default:t(()=>[i(w,{wrap:``},{default:t(()=>[i(S,{class:`ma1`},{default:t(()=>[...f[93]||=[o(`Default (scale-fade)`,-1)]]),_:1}),i(S,{class:`ma1`,transition:`fade`},{default:t(()=>[...f[94]||=[o(`Fade`,-1)]]),_:1}),i(S,{class:`ma1`,transition:`slide-fade-up`},{default:t(()=>[...f[95]||=[o(`Slide fade up`,-1)]]),_:1}),i(S,{class:`ma1`,transition:`slide-fade-right`},{default:t(()=>[...f[96]||=[o(`Slide fade right`,-1)]]),_:1}),i(S,{class:`ma1`,transition:`slide-fade-down`},{default:t(()=>[...f[97]||=[o(`Slide fade down`,-1)]]),_:1}),i(S,{class:`ma1`,transition:`slide-fade-left`},{default:t(()=>[...f[98]||=[o(`Slide fade left`,-1)]]),_:1}),i(S,{class:`ma1`,transition:`scale`},{default:t(()=>[...f[99]||=[o(`Scale`,-1)]]),_:1}),i(S,{class:`ma1`,transition:`bounce`},{default:t(()=>[...f[100]||=[o(`Bounce`,-1)]]),_:1}),i(S,{class:`ma1`,transition:`twist`},{default:t(()=>[...f[101]||=[o(`Twist`,-1)]]),_:1})]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[104]||=[o(`Events`,-1)]]),_:1}),f[125]||=n(`p`,null,[o(`2 events are emitted from the `),n(`strong`,{class:`code`},`w-confirm`),o(` component:`)],-1),f[126]||=n(`ul`,null,[n(`li`,null,[n(`code`,null,`cancel`),o(` on cancel button click.`)]),n(`li`,null,[n(`code`,null,`confirm`),o(` on confirm button click.`)])],-1),f[127]||=n(`p`,null,[o(`You can listen to them to trigger an action.`),n(`br`),o(`
In this example, a notification is displayed when clicking on the cancel or confirm button.`)],-1),i(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[106]||=[o(`w-confirm(
  @cancel="$waveui.notify&#40;'Canceled.', 'error'&#41;"
  @confirm="$waveui.notify&#40;'Confirmed!', 'success'&#41;") Ask for confirm`,-1)]]),html:t(()=>[...f[107]||=[o(`<w-confirm
  @cancel="$waveui.notify('Canceled.', 'error')"
  @confirm="$waveui.notify('Confirmed!', 'success')">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[i(S,{onCancel:f[0]||=e=>d.$waveui.notify(`Canceled.`,`error`),onConfirm:f[1]||=e=>d.$waveui.notify(`Confirmed!`,`success`)},{default:t(()=>[...f[105]||=[o(`Ask for confirm`,-1)]]),_:1})]),_:1}),i(x,{h2:``},{default:t(()=>[...f[108]||=[o(`Disable prompt`,-1)]]),_:1}),f[128]||=n(`p`,null,[o(`Sometimes it is convenient to disable the prompt according to a condition. For instance,
you only want to ask for confirmation if the user has edited some fields and not if the
values stay untouched. For that, you can use the `),n(`code`,null,`disable-prompt`),o(` option.`)],-1),i(C,{"content-class":`w-flex justify-center`,"app-classes-string":`justify-center align-center`},{pug:t(()=>[...f[112]||=[o(`w-card(title="My user details" style="max-width: 300px")
  .w-flex.align-center.my4
    w-icon.pa6.bd1(xl bg-color="grey-light6" color="blue-dark1") wi-wave
    w-input.ml4(v-model="newUsername") Username
  .w-flex.justify-end.align-center
    w-transition-slide-fade(left)
      strong.mr3(v-if="saved" :class="hasEdits ? 'green' : 'grey'") `+u(`{{ hasEdits ? 'Saved!' : 'No changes.' }}`)+`
    w-confirm(
      :main-button="{ width: '5.5rem', 'bg-color': hasEdits ? 'success' : 'primary' }"
      :disable-prompt="!hasEdits"
      @click="!hasEdits && saveDetails&#40;&#41;"
      @confirm="saveDetails"
      @cancel="newUsername = username")
      w-icon.mr1 wi-check
      | `+u(`{{ hasEdits ? 'Save' : 'OK' }}`),-1)]]),html:t(()=>[...f[113]||=[o(`<w-card title="My user details" style="max-width: 300px">
  <div class="w-flex align-center my4">
    <w-icon
      xl
      bg-color="grey-light6"
      color="blue-dark1"
      class="pa6 bd1">
      wi-wave
    </w-icon>
    <w-input
      v-model="newUsername"
      class="ml4">
      Username
    </w-input>
  </div>
  <div class="w-flex justify-end align-center">
    <w-transition-slide-fade left>
      <strong
        v-if="saved"
        class="mr3"
        :class="hasEdits ? 'green' : 'grey'">
        `+u(`{{ hasEdits ? 'Saved!' : 'No changes.' }}`)+`
      </strong>
    </w-transition-slide-fade>
    <w-confirm
      :main-button="{ width: '5.5rem', 'bg-color': hasEdits ? 'success' : 'primary' }"
      :disable-prompt="!hasEdits"
      @click="!hasEdits && saveDetails()"
      @confirm="saveDetails"
      @cancel="newUsername = username">
      <w-icon class="mr1">wi-check</w-icon>
      `+u(`{{ hasEdits ? 'Save' : 'OK' }}`)+`
    </w-confirm>
  </div>
</w-card>`,-1)]]),js:t(()=>[...f[114]||=[o(`data: () => ({
  disablePrompt: true,
  username: 'waveui',
  newUsername: 'waveui',
  saved: false
}),

computed: {
  hasEdits () {
    return this.newUsername !== this.username
  }
},

methods: {
  async saveDetails () {
    this.saved = true
    await new Promise(resolve => setTimeout(resolve, 2000))
    this.username = this.newUsername
    this.saved = false
  }
},`,-1)]]),default:t(()=>[i(O,{title:`My user details`,style:{"max-width":`300px`}},{default:t(()=>[n(`div`,m,[i(T,{class:`pa6 bd1`,xl:``,"bg-color":`grey-light6`,color:`blue-dark1`},{default:t(()=>[...f[109]||=[o(`wi-wave`,-1)]]),_:1}),i(E,{class:`ml4`,modelValue:d.newUsername,"onUpdate:modelValue":f[2]||=e=>d.newUsername=e},{default:t(()=>[...f[110]||=[o(`Username`,-1)]]),_:1},8,[`modelValue`])]),n(`div`,h,[i(D,{left:``},{default:t(()=>[d.saved?(s(),r(`strong`,{key:0,class:a([`mr3`,y.hasEdits?`green`:`grey`])},u(y.hasEdits?`Saved!`:`No changes.`),3)):l(``,!0)]),_:1}),i(S,{"main-button":{width:`5.5rem`,"bg-color":y.hasEdits?`success`:`primary`},"disable-prompt":!y.hasEdits,onClick:f[3]||=e=>!y.hasEdits&&y.saveDetails(),onConfirm:y.saveDetails,onCancel:f[4]||=e=>d.newUsername=d.username},{default:t(()=>[i(T,{class:`mr1`},{default:t(()=>[...f[111]||=[o(`wi-check`,-1)]]),_:1}),o(u(y.hasEdits?`Save`:`OK`),1)]),_:1},8,[`main-button`,`disable-prompt`,`onConfirm`])])]),_:1})]),_:1})])}var _=d({data:()=>({bgColor:`green`,disablePrompt:!0,username:`waveui`,newUsername:`waveui`,saved:!1}),computed:{hasEdits(){return this.newUsername!==this.username}},methods:{async saveDetails(){this.saved=!0,await new Promise(e=>setTimeout(e,2e3)),this.username=this.newUsername,this.saved=!1}},mounted(){setTimeout(()=>{this.bgColor=`amber`},5e3)}},[[`render`,g]]);function v(a,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:a.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:a.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var y={color:`Applies a color to the main button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the main button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:`Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.`,mainButton:`For more customization, this prop accepts an object of props to pass down to the main button (all the options that the <strong class="code">w-button</strong> component can handle).`,cancel:`Accept either <code>false</code> to remove the button, a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Cancel".`,confirm:`Accept either a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Confirm".`,inline:`Displays the question inline with the buttons, inside the menu.`,menu:`For more customization, this prop accepts an object of props to pass down to the menu (all the options that the <strong class="code">w-menu</strong> component can handle).`,tooltip:`Accept either <code>false</code> for no tooltip (by default), a <span class="code">String</span> to display as a tooltip on the main button, or an <span class="code">Object</span> in order to define <strong class="code">w-tooltip</strong> props to further customize the tooltip (all the options that the <strong class="code">w-tooltip</strong> component can handle).<br>In addition to all the <strong class="code">w-tooltip</strong> props, the object also accepts a <code>label</code> key to provide the tooltip string in the object.<br>By default, the tooltip shows on hover, and at the bottom.`,noArrow:`By default the confirmation menu displays an arrow pointing toward the main button.<br>The arrow can simply be removed with this prop.`,top:`Places the menu above the main button.`,bottom:`Places the below the main button.`,left:`Places the menu on the left of the main button.`,right:`Places the menu at the right of the main button.`,alignTop:`Aligns the top of the menu with the top of the main button.`,alignBottom:`Aligns the bottom of the menu with the bottom of the main button.`,alignLeft:`Aligns the left side of the menu with the left side of the main button.`,alignRight:`Aligns the right side of the menu with the right side of the main button.`,transition:`Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.`,persistent:`When set to <code>true</code>, clicking outside of the menu will not close the menu.`},b={default:{description:`The main button contents.`},question:{description:`The question to ask for confirmation in the menu.`},cancel:{description:`The cancel button contents, in the menu.`},confirm:{description:`The confirm button contents, in the menu.`}},x={cancel:`Emitted on cancel button click. The menu will also close.`,confirm:`Emitted on confirm button click. The menu will also close.`},S=d({data:()=>({propsDescs:y,slots:b}),computed:{props(){return f.props},events(){return f.emits.reduce((e,t)=>(e[t]={description:x[t]||``})&&e,{})}}},[[`render`,v]]);function C(n,a,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),r(`main`,null,[i(f,null,{default:t(()=>[...a[0]||=[o(`w-confirm`,-1)]]),_:1}),i(p),i(m)])}var w=d({components:{Examples:_,Api:S}},[[`render`,C]]);export{w as default};