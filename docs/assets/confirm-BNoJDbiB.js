import{N as e,W as t,_t as n,bt as r,c as i,d as a,g as o,h as s,k as c,m as l,u}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as d}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{M as f}from"./index-BhRaCC4I.js";var p={class:`w-flex wrap`},m={class:`w-flex align-center my4`},h={class:`w-flex justify-end align-center`};function g(d,f,g,_,v,y){let b=e(`alert`),x=e(`title-link`),S=e(`w-confirm`),C=e(`example`),w=e(`w-flex`),T=e(`w-icon`),E=e(`w-input`),D=e(`w-transition-slide-fade`),O=e(`w-card`);return c(),a(`div`,null,[o(b,{info:``},{default:t(()=>[...f[5]||=[i(`ul`,null,[i(`li`,null,[s(`The purpose of the `),i(`strong`,{class:`code`},`w-confirm`),s(` component is to quickly set up a
confirmation prompt to confirm a critical action.`)]),i(`li`,null,[s(`The `),i(`strong`,{class:`code`},`w-confirm`),s(` component uses the `),i(`strong`,{class:`code`},`w-menu`),s(` and
`),i(`strong`,{class:`code`},`w-button`),s(` components.
`)])],-1)]]),_:1}),o(x,{h2:``},{default:t(()=>[...f[6]||=[s(`Basic`,-1)]]),_:1}),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[8]||=[s(`w-confirm Delete`,-1)]]),html:t(()=>[...f[9]||=[s(`<w-confirm>Delete</w-confirm>
`,-1)]]),default:t(()=>[o(S,null,{default:t(()=>[...f[7]||=[s(`Delete`,-1)]]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[10]||=[s(`Icon button`,-1)]]),_:1}),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[11]||=[s(`w-confirm(icon="mdi mdi-delete")`,-1)]]),html:t(()=>[...f[12]||=[s(`<w-confirm icon="mdi mdi-delete">
  Delete
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{icon:`mdi mdi-delete`})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[13]||=[s(`Integrated tooltip`,-1)]]),_:1}),f[115]||=i(`p`,null,[s(`We often need a tooltip on a button. Especially on the ones that only have an icons.`),i(`br`),s(`
That's why from version 2.45.0, the `),i(`strong`,{class:`code`},`w-button`),s(` & `),i(`strong`,{class:`code`},`w-confirm`),s(`
components ship with an integrated w-tooltip, if you need it.
`)],-1),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[16]||=[s(`w-flex(wrap)
  w-confirm.ma4(tooltip="Delete this?") Delete

  w-confirm.ma4(
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }")
    | Delete`,-1)]]),html:t(()=>[...f[17]||=[s(`<w-flex wrap>
  <w-confirm class="ma4" tooltip="Delete this?">
    Delete
  </w-confirm>

  <w-confirm
    class="ma4"
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }">
    Delete
  </w-confirm>
</w-flex>
`,-1)]]),default:t(()=>[i(`div`,p,[o(S,{class:`ma4`,tooltip:`Delete this?`},{default:t(()=>[...f[14]||=[s(`Delete`,-1)]]),_:1}),o(S,{class:`ma4`,tooltip:{label:`Delete this?`,bgColor:`error`,top:!0,transition:`twist`}},{default:t(()=>[...f[15]||=[s(`Delete`,-1)]]),_:1})])]),_:1}),o(x,{h2:``},{default:t(()=>[...f[18]||=[s(`Colors`,-1)]]),_:1}),f[116]||=l(`<p>The <code>bg-color</code> &amp; <code>color</code> props apply to the button you first see.<br>
To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:</p><ul><li><code>menu</code> <small class="grey">E.g. <code class="grey">:menu=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>cancel</code> <small class="grey">E.g. <code class="grey">:cancel=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>confirm</code> <small class="grey">E.g. <code class="grey">:confirm=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li></ul>`,2),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[22]||=[s(`w-confirm.ma2(bg-color="success") Ask for confirm
w-confirm.ma2(bg-color="info" color="yellow") Ask for confirm
w-confirm.ma2(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm`,-1)]]),html:t(()=>[...f[23]||=[s(`<w-confirm bg-color="success" class="ma2">
  Ask for confirm
</w-confirm>

<w-confirm bg-color="info" color="yellow" class="ma2">
  Ask for confirm
</w-confirm>

<w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }" class="ma2">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{class:`ma2`,"bg-color":`success`},{default:t(()=>[...f[19]||=[s(`Ask for confirm`,-1)]]),_:1}),o(S,{class:`ma2`,"bg-color":`info`,color:`yellow`},{default:t(()=>[...f[20]||=[s(`Ask for confirm`,-1)]]),_:1}),o(S,{class:`ma2`,menu:{bgColor:`indigo-light1`,color:`white`}},{default:t(()=>[...f[21]||=[s(`Ask for confirm`,-1)]]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[24]||=[s(`Positions & alignments`,-1)]]),_:1}),o(x,{h3:``},{default:t(()=>[...f[25]||=[s(`Positions`,-1)]]),_:1}),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[30]||=[s(`w-confirm.ma5(top) Top
w-confirm.ma5(right) Right
w-confirm.ma5(bottom) Bottom
w-confirm.ma5(left) Left`,-1)]]),html:t(()=>[...f[31]||=[s(`<w-confirm top class="ma5">
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
`,-1)]]),default:t(()=>[o(S,{class:`ma5`,top:``},{default:t(()=>[...f[26]||=[s(`Top`,-1)]]),_:1}),o(S,{class:`ma5`,right:``},{default:t(()=>[...f[27]||=[s(`Right`,-1)]]),_:1}),o(S,{class:`ma5`,bottom:``},{default:t(()=>[...f[28]||=[s(`Bottom`,-1)]]),_:1}),o(S,{class:`ma5`,left:``},{default:t(()=>[...f[29]||=[s(`Left`,-1)]]),_:1})]),_:1}),o(x,{h3:``},{default:t(()=>[...f[32]||=[s(`Alignments`,-1)]]),_:1}),o(x,{h4:``},{default:t(()=>[...f[33]||=[s(`Horizontal`,-1)]]),_:1}),o(C,null,{pug:t(()=>[...f[40]||=[s(`w-flex(justify-center)
  w-confirm.ma2(top align-left) Top, align left
  w-confirm.ma2(top) Top, align center
  w-confirm.ma2(top align-right) Top, align right

w-flex(justify-center)
  w-confirm.ma2(bottom align-left) Bottom, align left
  w-confirm.ma2(bottom) Bottom, align center
  w-confirm.ma2(bottom align-right) Bottom, align right`,-1)]]),html:t(()=>[...f[41]||=[s(`<w-flex justify-center>
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
`,-1)]]),default:t(()=>[o(w,{class:`mt12`,"justify-center":``},{default:t(()=>[o(S,{class:`ma2`,top:``,"align-left":``},{default:t(()=>[...f[34]||=[s(`Top, align left`,-1)]]),_:1}),o(S,{class:`ma2`,top:``},{default:t(()=>[...f[35]||=[s(`Top, align center`,-1)]]),_:1}),o(S,{class:`ma2`,top:``,"align-right":``},{default:t(()=>[...f[36]||=[s(`Top, align right`,-1)]]),_:1})]),_:1}),o(w,{"justify-center":``},{default:t(()=>[o(S,{class:`ma2`,bottom:``,"align-left":``},{default:t(()=>[...f[37]||=[s(`Bottom, align left`,-1)]]),_:1}),o(S,{class:`ma2`,bottom:``},{default:t(()=>[...f[38]||=[s(`Bottom, align center`,-1)]]),_:1}),o(S,{class:`ma2`,bottom:``,"align-right":``},{default:t(()=>[...f[39]||=[s(`Bottom, align right`,-1)]]),_:1})]),_:1})]),_:1}),o(x,{h4:``},{default:t(()=>[...f[42]||=[s(`Vertical`,-1)]]),_:1}),o(C,null,{pug:t(()=>[...f[49]||=[s(`w-flex(justify-center)
  w-flex.no-grow(column)
    w-confirm.ma2(left align-top) Left, align top
    w-confirm.ma2(left) Left, align center
    w-confirm.ma2(left align-bottom) Left, align bottom

  w-flex.no-grow(column)
    w-confirm.ma2(right align-top) Right, align top
    w-confirm.ma2(right) Right, align center
    w-confirm.ma2(right align-bottom) Right, align bottom`,-1)]]),html:t(()=>[...f[50]||=[s(`<w-flex justify-center class="text-center">
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
`,-1)]]),default:t(()=>[o(w,{"justify-center":``},{default:t(()=>[o(w,{class:`no-grow`,column:``},{default:t(()=>[o(S,{class:`ma2`,left:``,"align-top":``},{default:t(()=>[...f[43]||=[s(`Left, align top`,-1)]]),_:1}),o(S,{class:`ma2`,left:``},{default:t(()=>[...f[44]||=[s(`Left, align center`,-1)]]),_:1}),o(S,{class:`ma2`,left:``,"align-bottom":``},{default:t(()=>[...f[45]||=[s(`Left, align bottom`,-1)]]),_:1})]),_:1}),o(w,{class:`no-grow`,column:``},{default:t(()=>[o(S,{class:`ma2`,right:``,"align-top":``},{default:t(()=>[...f[46]||=[s(`Right, align top`,-1)]]),_:1}),o(S,{class:`ma2`,right:``},{default:t(()=>[...f[47]||=[s(`Right, align center`,-1)]]),_:1}),o(S,{class:`ma2`,right:``,"align-bottom":``},{default:t(()=>[...f[48]||=[s(`Right, align bottom`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[51]||=[s(`Persistent`,-1)]]),_:1}),f[117]||=i(`p`,null,`A click outside of the menu will not close it.`,-1),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[53]||=[s(`w-confirm(persistent) Ask for confirm`,-1)]]),html:t(()=>[...f[54]||=[s(`<w-confirm persistent>
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{persistent:``},{default:t(()=>[...f[52]||=[s(`Ask for confirm`,-1)]]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[55]||=[s(`Inline question`,-1)]]),_:1}),f[118]||=i(`p`,null,`Displays the question inline with the buttons inside the menu.`,-1),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[57]||=[s(`w-confirm(inline) Ask for confirm`,-1)]]),html:t(()=>[...f[58]||=[s(`<w-confirm inline>
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{inline:``},{default:t(()=>[...f[56]||=[s(`Ask for confirm`,-1)]]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[59]||=[s(`Custom question`,-1)]]),_:1}),f[119]||=i(`p`,null,[s(`By default the question is "Are you sure?". But both the `),i(`code`,null,`question`),s(` prop and the
`),i(`code`,null,`#question`),s(` slot allow you to specify your own question. The slot is more
customizable as you can add components in it but more verbose to write.`),i(`br`),s(`
If both a slot and a prop are given, the slot takes precedence.
`)],-1),o(x,{h3:``,slug:`using-question-prop`},{default:t(()=>[...f[60]||=[s(`Using the `,-1),i(`code`,null,`question`,-1),s(` prop`,-1)]]),_:1}),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[62]||=[s(`w-confirm(question="Are you sure you want to delete this?").
  Ask for confirm`,-1)]]),html:t(()=>[...f[63]||=[s(`<w-confirm question="Are you sure you want to delete this?">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{question:`Are you sure you want to delete this?`},{default:t(()=>[...f[61]||=[s(`Ask for confirm`,-1)]]),_:1})]),_:1}),o(x,{h3:``,slug:`using-question-slot`},{default:t(()=>[...f[64]||=[s(`Using the `,-1),i(`code`,null,`#question`,-1),s(` slot`,-1)]]),_:1}),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[67]||=[s(`w-confirm
  | Ask for confirm
  template(#question) Are you sure you want to delete this?`,-1)]]),html:t(()=>[...f[68]||=[s(`<w-confirm>
  Ask for confirm
  <template #question>
    Are you sure you want to delete this?
  </template>
</w-confirm>
`,-1)]]),default:t(()=>[o(S,null,{question:t(()=>[...f[65]||=[s(`Are you sure you want to delete this?`,-1)]]),default:t(()=>[f[66]||=s(`Ask for confirm`,-1)]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[69]||=[s(`Cancel & confirm buttons`,-1)]]),_:1}),f[120]||=i(`p`,null,[s(`The cancel & confirm buttons can be customized through the `),i(`code`,null,`cancel`),s(` &
`),i(`code`,null,`confirm`),s(` props. These props accept either a `),i(`span`,{class:`code`},`String`),s(` for the button
label, or an `),i(`span`,{class:`code`},`Object`),s(` in order to define w-button props.`),i(`br`),s(`
The cancel button can also be set to `),i(`code`,null,`false`),s(` in order to remove it.`)],-1),o(x,{h3:``},{default:t(()=>[...f[70]||=[s(`Custom buttons labels`,-1)]]),_:1}),f[121]||=i(`p`,null,[s(`You can use the `),i(`code`,null,`cancel`),s(` & `),i(`code`,null,`confirm`),s(),i(`strong`,null,`props or slots`),s(` to override the
cancel & confirm buttons labels.`)],-1),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[72]||=[s(`w-confirm(cancel="No" confirm="Yes").
  Ask for confirm`,-1)]]),html:t(()=>[...f[73]||=[s(`<w-confirm cancel="No" confirm="Yes">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{cancel:`No`,confirm:`Yes`},{default:t(()=>[...f[71]||=[s(`Ask for confirm`,-1)]]),_:1})]),_:1}),o(x,{h3:``},{default:t(()=>[...f[74]||=[s(`No cancel button`,-1)]]),_:1}),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[76]||=[s(`w-confirm(:cancel="false") Ask for confirm`,-1)]]),html:t(()=>[...f[77]||=[s(`<w-confirm :cancel="false">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{cancel:!1},{default:t(()=>[...f[75]||=[s(`Ask for confirm`,-1)]]),_:1})]),_:1}),o(x,{h3:``},{default:t(()=>[...f[78]||=[s(`Full custom buttons`,-1)]]),_:1}),f[122]||=i(`p`,null,[s(`The cancel and confirm buttons can be customized as much as a standard `),i(`strong`,{class:`code`},`w-button`),s(`
via the `),i(`code`,null,`cancel`),s(` & `),i(`code`,null,`confirm`),s(` props which accept an object of
props to pass down to the `),i(`strong`,{class:`code`},`w-button`),s(`.`)],-1),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[80]||=[s(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
  | Ask for confirm`,-1)]]),html:t(()=>[...f[81]||=[s(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{inline:``,cancel:{bgColor:`error-dark1`,color:`white`,icon:`mdi mdi-close`},confirm:{bgColor:`green-dark1`,color:`white`,icon:`mdi mdi-check`}},{default:t(()=>[...f[79]||=[s(`Ask for confirm`,-1)]]),_:1})]),_:1}),o(x,{h3:``,slug:`custom-label-in-object`},{default:t(()=>[...f[82]||=[s(`Custom button label in the `,-1),i(`span`,{class:`code`},`Object`,-1),s(` form`,-1)]]),_:1}),f[123]||=i(`p`,null,[s(`If you're using the object form, you can define a custom label in it
(or you could also use the `),i(`code`,null,`#cancel`),s(` & `),i(`code`,null,`#confirm`),s(` slots
for more flexibility).`)],-1),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[84]||=[s(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }")
  | Ask for confirm`,-1)]]),html:t(()=>[...f[85]||=[s(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{inline:``,cancel:{bgColor:`error-dark1`,color:`white`,label:`No`},confirm:{bgColor:`green-dark1`,color:`white`,label:`Yes`}},{default:t(()=>[...f[83]||=[s(`Ask for confirm`,-1)]]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[86]||=[s(`No arrow`,-1)]]),_:1}),f[124]||=i(`p`,null,[s(`By default, the w-confirm component displays an arrow on the edge of the menu to designate
which action you have clicked requiring a confirmation.`),i(`br`),s(`
You can disable the arrow via the `),i(`code`,null,`no-arrow`),s(` option.`)],-1),o(C,{class:`example--no-arrow`,"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[90]||=[s(`w-flex(column align-center)
  w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
  w-confirm.ma2(no-arrow right) Right
  w-confirm.ma2(:menu="{ noPosition: true }") No position`,-1)]]),html:t(()=>[...f[91]||=[s(`<w-flex column align-center>
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
`,-1)]]),default:t(()=>[o(w,{class:`mb12`,column:``,"align-center":``},{default:t(()=>[o(S,{class:`ma2`,"no-arrow":``,menu:{bgColor:`blue-light5`}},{default:t(()=>[...f[87]||=[s(`Bottom`,-1)]]),_:1}),o(S,{class:`ma2`,"no-arrow":``,right:``},{default:t(()=>[...f[88]||=[s(`Right`,-1)]]),_:1}),o(S,{class:`ma2`,menu:{noPosition:!0,appendTo:`.example--no-arrow`}},{default:t(()=>[...f[89]||=[s(`No position`,-1)]]),_:1})]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[92]||=[s(`Transitions`,-1)]]),_:1}),o(C,null,{pug:t(()=>[...f[102]||=[s(`w-flex(wrap)
  w-confirm.ma1 Default (scale-fade)
  w-confirm.ma1(transition="fade") Fade
  w-confirm.ma1(transition="slide-fade-up") Slide fade up
  w-confirm.ma1(transition="slide-fade-right") Slide fade right
  w-confirm.ma1(transition="slide-fade-down") Slide fade down
  w-confirm.ma1(transition="slide-fade-left") Slide fade left
  w-confirm.ma1(transition="scale") Scale
  w-confirm.ma1(transition="bounce") Bounce
  w-confirm.ma1(transition="twist") Twist`,-1)]]),html:t(()=>[...f[103]||=[s(`<w-confirm class="ma1">
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
`,-1)]]),default:t(()=>[o(w,{wrap:``},{default:t(()=>[o(S,{class:`ma1`},{default:t(()=>[...f[93]||=[s(`Default (scale-fade)`,-1)]]),_:1}),o(S,{class:`ma1`,transition:`fade`},{default:t(()=>[...f[94]||=[s(`Fade`,-1)]]),_:1}),o(S,{class:`ma1`,transition:`slide-fade-up`},{default:t(()=>[...f[95]||=[s(`Slide fade up`,-1)]]),_:1}),o(S,{class:`ma1`,transition:`slide-fade-right`},{default:t(()=>[...f[96]||=[s(`Slide fade right`,-1)]]),_:1}),o(S,{class:`ma1`,transition:`slide-fade-down`},{default:t(()=>[...f[97]||=[s(`Slide fade down`,-1)]]),_:1}),o(S,{class:`ma1`,transition:`slide-fade-left`},{default:t(()=>[...f[98]||=[s(`Slide fade left`,-1)]]),_:1}),o(S,{class:`ma1`,transition:`scale`},{default:t(()=>[...f[99]||=[s(`Scale`,-1)]]),_:1}),o(S,{class:`ma1`,transition:`bounce`},{default:t(()=>[...f[100]||=[s(`Bounce`,-1)]]),_:1}),o(S,{class:`ma1`,transition:`twist`},{default:t(()=>[...f[101]||=[s(`Twist`,-1)]]),_:1})]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[104]||=[s(`Events`,-1)]]),_:1}),f[125]||=i(`p`,null,[s(`2 events are emitted from the `),i(`strong`,{class:`code`},`w-confirm`),s(` component:`)],-1),f[126]||=i(`ul`,null,[i(`li`,null,[i(`code`,null,`cancel`),s(` on cancel button click.`)]),i(`li`,null,[i(`code`,null,`confirm`),s(` on confirm button click.`)])],-1),f[127]||=i(`p`,null,[s(`You can listen to them to trigger an action.`),i(`br`),s(`
In this example, a notification is displayed when clicking on the cancel or confirm button.`)],-1),o(C,{"content-class":`text-center`,"app-classes-string":`align-center`},{pug:t(()=>[...f[106]||=[s(`w-confirm(
  @cancel="$waveui.notify&#40;'Canceled.', 'error'&#41;"
  @confirm="$waveui.notify&#40;'Confirmed!', 'success'&#41;") Ask for confirm`,-1)]]),html:t(()=>[...f[107]||=[s(`<w-confirm
  @cancel="$waveui.notify('Canceled.', 'error')"
  @confirm="$waveui.notify('Confirmed!', 'success')">
  Ask for confirm
</w-confirm>
`,-1)]]),default:t(()=>[o(S,{onCancel:f[0]||=e=>d.$waveui.notify(`Canceled.`,`error`),onConfirm:f[1]||=e=>d.$waveui.notify(`Confirmed!`,`success`)},{default:t(()=>[...f[105]||=[s(`Ask for confirm`,-1)]]),_:1})]),_:1}),o(x,{h2:``},{default:t(()=>[...f[108]||=[s(`Disable prompt`,-1)]]),_:1}),f[128]||=i(`p`,null,[s(`Sometimes it is convenient to disable the prompt according to a condition. For instance,
you only want to ask for confirmation if the user has edited some fields and not if the
values stay untouched. For that, you can use the `),i(`code`,null,`disable-prompt`),s(` option.`)],-1),o(C,{"content-class":`w-flex justify-center`,"app-classes-string":`justify-center align-center`},{pug:t(()=>[...f[112]||=[s(`w-card(title="My user details" style="max-width: 300px")
  .w-flex.align-center.my4
    w-icon.pa6.bd1(xl bg-color="grey-light6" color="blue-dark1") wi-wave
    w-input.ml4(v-model="newUsername") Username
  .w-flex.justify-end.align-center
    w-transition-slide-fade(left)
      strong.mr3(v-if="saved" :class="hasEdits ? 'green' : 'grey'") `+r(`{{ hasEdits ? 'Saved!' : 'No changes.' }}`)+`
    w-confirm(
      :main-button="{ width: '5.5rem', 'bg-color': hasEdits ? 'success' : 'primary' }"
      :disable-prompt="!hasEdits"
      @click="!hasEdits && saveDetails&#40;&#41;"
      @confirm="saveDetails"
      @cancel="newUsername = username")
      w-icon.mr1 wi-check
      | `+r(`{{ hasEdits ? 'Save' : 'OK' }}`),-1)]]),html:t(()=>[...f[113]||=[s(`<w-card title="My user details" style="max-width: 300px">
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
        `+r(`{{ hasEdits ? 'Saved!' : 'No changes.' }}`)+`
      </strong>
    </w-transition-slide-fade>
    <w-confirm
      :main-button="{ width: '5.5rem', 'bg-color': hasEdits ? 'success' : 'primary' }"
      :disable-prompt="!hasEdits"
      @click="!hasEdits && saveDetails()"
      @confirm="saveDetails"
      @cancel="newUsername = username">
      <w-icon class="mr1">wi-check</w-icon>
      `+r(`{{ hasEdits ? 'Save' : 'OK' }}`)+`
    </w-confirm>
  </div>
</w-card>`,-1)]]),js:t(()=>[...f[114]||=[s(`data: () => ({
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
},`,-1)]]),default:t(()=>[o(O,{title:`My user details`,style:{"max-width":`300px`}},{default:t(()=>[i(`div`,m,[o(T,{class:`pa6 bd1`,xl:``,"bg-color":`grey-light6`,color:`blue-dark1`},{default:t(()=>[...f[109]||=[s(`wi-wave`,-1)]]),_:1}),o(E,{class:`ml4`,modelValue:d.newUsername,"onUpdate:modelValue":f[2]||=e=>d.newUsername=e},{default:t(()=>[...f[110]||=[s(`Username`,-1)]]),_:1},8,[`modelValue`])]),i(`div`,h,[o(D,{left:``},{default:t(()=>[d.saved?(c(),a(`strong`,{key:0,class:n([`mr3`,y.hasEdits?`green`:`grey`])},r(y.hasEdits?`Saved!`:`No changes.`),3)):u(``,!0)]),_:1}),o(S,{"main-button":{width:`5.5rem`,"bg-color":y.hasEdits?`success`:`primary`},"disable-prompt":!y.hasEdits,onClick:f[3]||=e=>!y.hasEdits&&y.saveDetails(),onConfirm:y.saveDetails,onCancel:f[4]||=e=>d.newUsername=d.username},{default:t(()=>[o(T,{class:`mr1`},{default:t(()=>[...f[111]||=[s(`wi-check`,-1)]]),_:1}),s(r(y.hasEdits?`Save`:`OK`),1)]),_:1},8,[`main-button`,`disable-prompt`,`onConfirm`])])]),_:1})]),_:1})])}var _=d({data:()=>({bgColor:`green`,disablePrompt:!0,username:`waveui`,newUsername:`waveui`,saved:!1}),computed:{hasEdits(){return this.newUsername!==this.username}},methods:{async saveDetails(){this.saved=!0,await new Promise(e=>setTimeout(e,2e3)),this.username=this.newUsername,this.saved=!1}},mounted(){setTimeout(()=>{this.bgColor=`amber`},5e3)}},[[`render`,g]]);function v(n,r,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return c(),a(`div`,null,[r[1]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:t(()=>[...r[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:n.slots,title:`Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`])])}var y={color:`Applies a color to the main button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the main button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:`Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.`,mainButton:`For more customization, this prop accepts an object of props to pass down to the main button (all the options that the <strong class="code">w-button</strong> component can handle).`,cancel:`Accept either <code>false</code> to remove the button, a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Cancel".`,confirm:`Accept either a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Confirm".`,inline:`Displays the question inline with the buttons, inside the menu.`,menu:`For more customization, this prop accepts an object of props to pass down to the menu (all the options that the <strong class="code">w-menu</strong> component can handle).`,tooltip:`Accept either <code>false</code> for no tooltip (by default), a <span class="code">String</span> to display as a tooltip on the main button, or an <span class="code">Object</span> in order to define <strong class="code">w-tooltip</strong> props to further customize the tooltip (all the options that the <strong class="code">w-tooltip</strong> component can handle).<br>In addition to all the <strong class="code">w-tooltip</strong> props, the object also accepts a <code>label</code> key to provide the tooltip string in the object.<br>By default, the tooltip shows on hover, and at the bottom.`,noArrow:`By default the confirmation menu displays an arrow pointing toward the main button.<br>The arrow can simply be removed with this prop.`,top:`Places the menu above the main button.`,bottom:`Places the below the main button.`,left:`Places the menu on the left of the main button.`,right:`Places the menu at the right of the main button.`,alignTop:`Aligns the top of the menu with the top of the main button.`,alignBottom:`Aligns the bottom of the menu with the bottom of the main button.`,alignLeft:`Aligns the left side of the menu with the left side of the main button.`,alignRight:`Aligns the right side of the menu with the right side of the main button.`,transition:`Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.`,persistent:`When set to <code>true</code>, clicking outside of the menu will not close the menu.`},b={default:{description:`The main button contents.`},question:{description:`The question to ask for confirmation in the menu.`},cancel:{description:`The cancel button contents, in the menu.`},confirm:{description:`The confirm button contents, in the menu.`}},x={cancel:`Emitted on cancel button click. The menu will also close.`,confirm:`Emitted on confirm button click. The menu will also close.`},S=d({data:()=>({propsDescs:y,slots:b}),computed:{props(){return f.props},events(){return f.emits.reduce((e,t)=>(e[t]={description:x[t]||``})&&e,{})}}},[[`render`,v]]);function C(n,r,i,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return c(),a(`main`,null,[o(f,null,{default:t(()=>[...r[0]||=[s(`w-confirm`,-1)]]),_:1}),o(p),o(m)])}var w=d({components:{Examples:_,Api:S}},[[`render`,C]]);export{w as default};