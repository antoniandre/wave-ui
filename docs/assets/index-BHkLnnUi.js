import{r as m,g as w,o as g,a as e,b as l,h as D,w as o,e as t,d as E,n as S,t as u,_ as b,H as x}from"./index-a7oKtucQ.js";const B={class:"w-flex wrap"},j={class:"w-flex align-center my4"},q={class:"w-flex justify-end align-center"};function N(a,n,h,y,k,f){const c=m("alert"),s=m("title-link"),i=m("w-confirm"),r=m("example"),d=m("w-flex"),v=m("w-icon"),A=m("w-input"),C=m("w-transition-slide-fade"),T=m("w-card");return g(),w("div",null,[e(c,{info:""},{default:o(()=>n[5]||(n[5]=[l("ul",null,[l("li",null,[t("The purpose of the "),l("strong",{class:"code"},"w-confirm"),t(` component is to quickly set up a
confirmation prompt to confirm a critical action.`)]),l("li",null,[t("The "),l("strong",{class:"code"},"w-confirm"),t(" component uses the "),l("strong",{class:"code"},"w-menu"),t(` and
`),l("strong",{class:"code"},"w-button"),t(` components.
`)])],-1)])),_:1}),e(s,{h2:""},{default:o(()=>n[6]||(n[6]=[t("Basic")])),_:1}),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[8]||(n[8]=[t("w-confirm Delete")])),html:o(()=>n[9]||(n[9]=[t(`<w-confirm>Delete</w-confirm>
`)])),default:o(()=>[e(i,null,{default:o(()=>n[7]||(n[7]=[t("Delete")])),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[10]||(n[10]=[t("Icon button")])),_:1}),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[11]||(n[11]=[t('w-confirm(icon="mdi mdi-delete")')])),html:o(()=>n[12]||(n[12]=[t(`<w-confirm icon="mdi mdi-delete">
  Delete
</w-confirm>
`)])),default:o(()=>[e(i,{icon:"mdi mdi-delete"})]),_:1}),e(s,{h2:""},{default:o(()=>n[13]||(n[13]=[t("Integrated tooltip")])),_:1}),n[115]||(n[115]=l("p",null,[t("We often need a tooltip on a button. Especially on the ones that only have an icons."),l("br"),t(`
That's why from version 2.45.0, the `),l("strong",{class:"code"},"w-button"),t(" & "),l("strong",{class:"code"},"w-confirm"),t(`
components ship with an integrated w-tooltip, if you need it.
`)],-1)),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[16]||(n[16]=[t(`w-flex(wrap)
  w-confirm.ma4(tooltip="Delete this?") Delete

  w-confirm.ma4(
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }")
    | Delete`)])),html:o(()=>n[17]||(n[17]=[t(`<w-flex wrap>
  <w-confirm class="ma4" tooltip="Delete this?">
    Delete
  </w-confirm>

  <w-confirm
    class="ma4"
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }">
    Delete
  </w-confirm>
</w-flex>
`)])),default:o(()=>[l("div",B,[e(i,{class:"ma4",tooltip:"Delete this?"},{default:o(()=>n[14]||(n[14]=[t("Delete")])),_:1}),e(i,{class:"ma4",tooltip:{label:"Delete this?",bgColor:"error",top:!0,transition:"twist"}},{default:o(()=>n[15]||(n[15]=[t("Delete")])),_:1})])]),_:1}),e(s,{h2:""},{default:o(()=>n[18]||(n[18]=[t("Colors")])),_:1}),n[116]||(n[116]=D(`<p>The <code>bg-color</code> &amp; <code>color</code> props apply to the button you first see.<br>
To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:</p><ul><li><code>menu</code> <small class="grey">E.g. <code class="grey">:menu=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>cancel</code> <small class="grey">E.g. <code class="grey">:cancel=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>confirm</code> <small class="grey">E.g. <code class="grey">:confirm=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li></ul>`,2)),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[22]||(n[22]=[t(`w-confirm.ma2(bg-color="success") Ask for confirm
w-confirm.ma2(bg-color="info" color="yellow") Ask for confirm
w-confirm.ma2(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm`)])),html:o(()=>n[23]||(n[23]=[t(`<w-confirm bg-color="success" class="ma2">
  Ask for confirm
</w-confirm>

<w-confirm bg-color="info" color="yellow" class="ma2">
  Ask for confirm
</w-confirm>

<w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }" class="ma2">
  Ask for confirm
</w-confirm>
`)])),default:o(()=>[e(i,{class:"ma2","bg-color":"success"},{default:o(()=>n[19]||(n[19]=[t("Ask for confirm")])),_:1}),e(i,{class:"ma2","bg-color":"info",color:"yellow"},{default:o(()=>n[20]||(n[20]=[t("Ask for confirm")])),_:1}),e(i,{class:"ma2",menu:{bgColor:"indigo-light1",color:"white"}},{default:o(()=>n[21]||(n[21]=[t("Ask for confirm")])),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[24]||(n[24]=[t("Positions & alignments")])),_:1}),e(s,{h3:""},{default:o(()=>n[25]||(n[25]=[t("Positions")])),_:1}),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[30]||(n[30]=[t(`w-confirm.ma5(top) Top
w-confirm.ma5(right) Right
w-confirm.ma5(bottom) Bottom
w-confirm.ma5(left) Left`)])),html:o(()=>n[31]||(n[31]=[t(`<w-confirm top class="ma5">
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
`)])),default:o(()=>[e(i,{class:"ma5",top:""},{default:o(()=>n[26]||(n[26]=[t("Top")])),_:1}),e(i,{class:"ma5",right:""},{default:o(()=>n[27]||(n[27]=[t("Right")])),_:1}),e(i,{class:"ma5",bottom:""},{default:o(()=>n[28]||(n[28]=[t("Bottom")])),_:1}),e(i,{class:"ma5",left:""},{default:o(()=>n[29]||(n[29]=[t("Left")])),_:1})]),_:1}),e(s,{h3:""},{default:o(()=>n[32]||(n[32]=[t("Alignments")])),_:1}),e(s,{h4:""},{default:o(()=>n[33]||(n[33]=[t("Horizontal")])),_:1}),e(r,null,{pug:o(()=>n[40]||(n[40]=[t(`w-flex(justify-center)
  w-confirm.ma2(top align-left) Top, align left
  w-confirm.ma2(top) Top, align center
  w-confirm.ma2(top align-right) Top, align right

w-flex(justify-center)
  w-confirm.ma2(bottom align-left) Bottom, align left
  w-confirm.ma2(bottom) Bottom, align center
  w-confirm.ma2(bottom align-right) Bottom, align right`)])),html:o(()=>n[41]||(n[41]=[t(`<w-flex justify-center>
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
`)])),default:o(()=>[e(d,{class:"mt12","justify-center":""},{default:o(()=>[e(i,{class:"ma2",top:"","align-left":""},{default:o(()=>n[34]||(n[34]=[t("Top, align left")])),_:1}),e(i,{class:"ma2",top:""},{default:o(()=>n[35]||(n[35]=[t("Top, align center")])),_:1}),e(i,{class:"ma2",top:"","align-right":""},{default:o(()=>n[36]||(n[36]=[t("Top, align right")])),_:1})]),_:1}),e(d,{"justify-center":""},{default:o(()=>[e(i,{class:"ma2",bottom:"","align-left":""},{default:o(()=>n[37]||(n[37]=[t("Bottom, align left")])),_:1}),e(i,{class:"ma2",bottom:""},{default:o(()=>n[38]||(n[38]=[t("Bottom, align center")])),_:1}),e(i,{class:"ma2",bottom:"","align-right":""},{default:o(()=>n[39]||(n[39]=[t("Bottom, align right")])),_:1})]),_:1})]),_:1}),e(s,{h4:""},{default:o(()=>n[42]||(n[42]=[t("Vertical")])),_:1}),e(r,null,{pug:o(()=>n[49]||(n[49]=[t(`w-flex(justify-center)
  w-flex.no-grow(column)
    w-confirm.ma2(left align-top) Left, align top
    w-confirm.ma2(left) Left, align center
    w-confirm.ma2(left align-bottom) Left, align bottom

  w-flex.no-grow(column)
    w-confirm.ma2(right align-top) Right, align top
    w-confirm.ma2(right) Right, align center
    w-confirm.ma2(right align-bottom) Right, align bottom`)])),html:o(()=>n[50]||(n[50]=[t(`<w-flex justify-center class="text-center">
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
`)])),default:o(()=>[e(d,{"justify-center":""},{default:o(()=>[e(d,{class:"no-grow",column:""},{default:o(()=>[e(i,{class:"ma2",left:"","align-top":""},{default:o(()=>n[43]||(n[43]=[t("Left, align top")])),_:1}),e(i,{class:"ma2",left:""},{default:o(()=>n[44]||(n[44]=[t("Left, align center")])),_:1}),e(i,{class:"ma2",left:"","align-bottom":""},{default:o(()=>n[45]||(n[45]=[t("Left, align bottom")])),_:1})]),_:1}),e(d,{class:"no-grow",column:""},{default:o(()=>[e(i,{class:"ma2",right:"","align-top":""},{default:o(()=>n[46]||(n[46]=[t("Right, align top")])),_:1}),e(i,{class:"ma2",right:""},{default:o(()=>n[47]||(n[47]=[t("Right, align center")])),_:1}),e(i,{class:"ma2",right:"","align-bottom":""},{default:o(()=>n[48]||(n[48]=[t("Right, align bottom")])),_:1})]),_:1})]),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[51]||(n[51]=[t("Persistent")])),_:1}),n[117]||(n[117]=l("p",null,"A click outside of the menu will not close it.",-1)),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[53]||(n[53]=[t("w-confirm(persistent) Ask for confirm")])),html:o(()=>n[54]||(n[54]=[t(`<w-confirm persistent>
  Ask for confirm
</w-confirm>
`)])),default:o(()=>[e(i,{persistent:""},{default:o(()=>n[52]||(n[52]=[t("Ask for confirm")])),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[55]||(n[55]=[t("Inline question")])),_:1}),n[118]||(n[118]=l("p",null,"Displays the question inline with the buttons inside the menu.",-1)),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[57]||(n[57]=[t("w-confirm(inline) Ask for confirm")])),html:o(()=>n[58]||(n[58]=[t(`<w-confirm inline>
  Ask for confirm
</w-confirm>
`)])),default:o(()=>[e(i,{inline:""},{default:o(()=>n[56]||(n[56]=[t("Ask for confirm")])),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[59]||(n[59]=[t("Custom question")])),_:1}),n[119]||(n[119]=l("p",null,[t('By default the question is "Are you sure?". But both the '),l("code",null,"question"),t(` prop and the
`),l("code",null,"#question"),t(` slot allow you to specify your own question. The slot is more
customizable as you can add components in it but more verbose to write.`),l("br"),t(`
If both a slot and a prop are given, the slot takes precedence.
`)],-1)),e(s,{h3:"",slug:"using-question-prop"},{default:o(()=>n[60]||(n[60]=[t("Using the "),l("code",null,"question",-1),t(" prop")])),_:1}),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[62]||(n[62]=[t(`w-confirm(question="Are you sure you want to delete this?").
  Ask for confirm`)])),html:o(()=>n[63]||(n[63]=[t(`<w-confirm question="Are you sure you want to delete this?">
  Ask for confirm
</w-confirm>
`)])),default:o(()=>[e(i,{question:"Are you sure you want to delete this?"},{default:o(()=>n[61]||(n[61]=[t("Ask for confirm")])),_:1})]),_:1}),e(s,{h3:"",slug:"using-question-slot"},{default:o(()=>n[64]||(n[64]=[t("Using the "),l("code",null,"#question",-1),t(" slot")])),_:1}),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[67]||(n[67]=[t(`w-confirm
  | Ask for confirm
  template(#question) Are you sure you want to delete this?`)])),html:o(()=>n[68]||(n[68]=[t(`<w-confirm>
  Ask for confirm
  <template #question>
    Are you sure you want to delete this?
  </template>
</w-confirm>
`)])),default:o(()=>[e(i,null,{question:o(()=>n[65]||(n[65]=[t("Are you sure you want to delete this?")])),default:o(()=>[n[66]||(n[66]=t("Ask for confirm"))]),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[69]||(n[69]=[t("Cancel & confirm buttons")])),_:1}),n[120]||(n[120]=l("p",null,[t("The cancel & confirm buttons can be customized through the "),l("code",null,"cancel"),t(` &
`),l("code",null,"confirm"),t(" props. These props accept either a "),l("span",{class:"code"},"String"),t(` for the button
label, or an `),l("span",{class:"code"},"Object"),t(" in order to define w-button props."),l("br"),t(`
The cancel button can also be set to `),l("code",null,"false"),t(" in order to remove it.")],-1)),e(s,{h3:""},{default:o(()=>n[70]||(n[70]=[t("Custom buttons labels")])),_:1}),n[121]||(n[121]=l("p",null,[t("You can use the "),l("code",null,"cancel"),t(" & "),l("code",null,"confirm"),t(),l("strong",null,"props or slots"),t(` to override the
cancel & confirm buttons labels.`)],-1)),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[72]||(n[72]=[t(`w-confirm(cancel="No" confirm="Yes").
  Ask for confirm`)])),html:o(()=>n[73]||(n[73]=[t(`<w-confirm cancel="No" confirm="Yes">
  Ask for confirm
</w-confirm>
`)])),default:o(()=>[e(i,{cancel:"No",confirm:"Yes"},{default:o(()=>n[71]||(n[71]=[t("Ask for confirm")])),_:1})]),_:1}),e(s,{h3:""},{default:o(()=>n[74]||(n[74]=[t("No cancel button")])),_:1}),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[76]||(n[76]=[t('w-confirm(:cancel="false") Ask for confirm')])),html:o(()=>n[77]||(n[77]=[t(`<w-confirm :cancel="false">
  Ask for confirm
</w-confirm>
`)])),default:o(()=>[e(i,{cancel:!1},{default:o(()=>n[75]||(n[75]=[t("Ask for confirm")])),_:1})]),_:1}),e(s,{h3:""},{default:o(()=>n[78]||(n[78]=[t("Full custom buttons")])),_:1}),n[122]||(n[122]=l("p",null,[t("The cancel and confirm buttons can be customized as much as a standard "),l("strong",{class:"code"},"w-button"),t(`
via the `),l("code",null,"cancel"),t(" & "),l("code",null,"confirm"),t(` props which accept an object of
props to pass down to the `),l("strong",{class:"code"},"w-button"),t(".")],-1)),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[80]||(n[80]=[t(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
  | Ask for confirm`)])),html:o(()=>n[81]||(n[81]=[t(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }">
  Ask for confirm
</w-confirm>
`)])),default:o(()=>[e(i,{inline:"",cancel:{bgColor:"error-dark1",color:"white",icon:"mdi mdi-close"},confirm:{bgColor:"green-dark1",color:"white",icon:"mdi mdi-check"}},{default:o(()=>n[79]||(n[79]=[t("Ask for confirm")])),_:1})]),_:1}),e(s,{h3:"",slug:"custom-label-in-object"},{default:o(()=>n[82]||(n[82]=[t("Custom button label in the "),l("span",{class:"code"},"Object",-1),t(" form")])),_:1}),n[123]||(n[123]=l("p",null,[t(`If you're using the object form, you can define a custom label in it
(or you could also use the `),l("code",null,"#cancel"),t(" & "),l("code",null,"#confirm"),t(` slots
for more flexibility).`)],-1)),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[84]||(n[84]=[t(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }")
  | Ask for confirm`)])),html:o(()=>n[85]||(n[85]=[t(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }">
  Ask for confirm
</w-confirm>
`)])),default:o(()=>[e(i,{inline:"",cancel:{bgColor:"error-dark1",color:"white",label:"No"},confirm:{bgColor:"green-dark1",color:"white",label:"Yes"}},{default:o(()=>n[83]||(n[83]=[t("Ask for confirm")])),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[86]||(n[86]=[t("No arrow")])),_:1}),n[124]||(n[124]=l("p",null,[t(`By default, the w-confirm component displays an arrow on the edge of the menu to designate
which action you have clicked requiring a confirmation.`),l("br"),t(`
You can disable the arrow via the `),l("code",null,"no-arrow"),t(" option.")],-1)),e(r,{class:"example--no-arrow","content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[90]||(n[90]=[t(`w-flex(column align-center)
  w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
  w-confirm.ma2(no-arrow right) Right
  w-confirm.ma2(:menu="{ noPosition: true }") No position`)])),html:o(()=>n[91]||(n[91]=[t(`<w-flex column align-center>
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
`)])),default:o(()=>[e(d,{class:"mb12",column:"","align-center":""},{default:o(()=>[e(i,{class:"ma2","no-arrow":"",menu:{bgColor:"blue-light5"}},{default:o(()=>n[87]||(n[87]=[t("Bottom")])),_:1}),e(i,{class:"ma2","no-arrow":"",right:""},{default:o(()=>n[88]||(n[88]=[t("Right")])),_:1}),e(i,{class:"ma2",menu:{noPosition:!0,appendTo:".example--no-arrow"}},{default:o(()=>n[89]||(n[89]=[t("No position")])),_:1})]),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[92]||(n[92]=[t("Transitions")])),_:1}),e(r,null,{pug:o(()=>n[102]||(n[102]=[t(`w-flex(wrap)
  w-confirm.ma1 Default (scale-fade)
  w-confirm.ma1(transition="fade") Fade
  w-confirm.ma1(transition="slide-fade-up") Slide fade up
  w-confirm.ma1(transition="slide-fade-right") Slide fade right
  w-confirm.ma1(transition="slide-fade-down") Slide fade down
  w-confirm.ma1(transition="slide-fade-left") Slide fade left
  w-confirm.ma1(transition="scale") Scale
  w-confirm.ma1(transition="bounce") Bounce
  w-confirm.ma1(transition="twist") Twist`)])),html:o(()=>n[103]||(n[103]=[t(`<w-confirm class="ma1">
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
`)])),default:o(()=>[e(d,{wrap:""},{default:o(()=>[e(i,{class:"ma1"},{default:o(()=>n[93]||(n[93]=[t("Default (scale-fade)")])),_:1}),e(i,{class:"ma1",transition:"fade"},{default:o(()=>n[94]||(n[94]=[t("Fade")])),_:1}),e(i,{class:"ma1",transition:"slide-fade-up"},{default:o(()=>n[95]||(n[95]=[t("Slide fade up")])),_:1}),e(i,{class:"ma1",transition:"slide-fade-right"},{default:o(()=>n[96]||(n[96]=[t("Slide fade right")])),_:1}),e(i,{class:"ma1",transition:"slide-fade-down"},{default:o(()=>n[97]||(n[97]=[t("Slide fade down")])),_:1}),e(i,{class:"ma1",transition:"slide-fade-left"},{default:o(()=>n[98]||(n[98]=[t("Slide fade left")])),_:1}),e(i,{class:"ma1",transition:"scale"},{default:o(()=>n[99]||(n[99]=[t("Scale")])),_:1}),e(i,{class:"ma1",transition:"bounce"},{default:o(()=>n[100]||(n[100]=[t("Bounce")])),_:1}),e(i,{class:"ma1",transition:"twist"},{default:o(()=>n[101]||(n[101]=[t("Twist")])),_:1})]),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[104]||(n[104]=[t("Events")])),_:1}),n[125]||(n[125]=l("p",null,[t("2 events are emitted from the "),l("strong",{class:"code"},"w-confirm"),t(" component:")],-1)),n[126]||(n[126]=l("ul",null,[l("li",null,[l("code",null,"cancel"),t(" on cancel button click.")]),l("li",null,[l("code",null,"confirm"),t(" on confirm button click.")])],-1)),n[127]||(n[127]=l("p",null,[t("You can listen to them to trigger an action."),l("br"),t(`
In this example, a notification is displayed when clicking on the cancel or confirm button.`)],-1)),e(r,{"content-class":"text-center","app-classes-string":"align-center"},{pug:o(()=>n[106]||(n[106]=[t(`w-confirm(
  @cancel="$waveui.notify&#40;'Canceled.', 'error'&#41;"
  @confirm="$waveui.notify&#40;'Confirmed!', 'success'&#41;") Ask for confirm`)])),html:o(()=>n[107]||(n[107]=[t(`<w-confirm
  @cancel="$waveui.notify('Canceled.', 'error')"
  @confirm="$waveui.notify('Confirmed!', 'success')">
  Ask for confirm
</w-confirm>
`)])),default:o(()=>[e(i,{onCancel:n[0]||(n[0]=p=>a.$waveui.notify("Canceled.","error")),onConfirm:n[1]||(n[1]=p=>a.$waveui.notify("Confirmed!","success"))},{default:o(()=>n[105]||(n[105]=[t("Ask for confirm")])),_:1})]),_:1}),e(s,{h2:""},{default:o(()=>n[108]||(n[108]=[t("Disable prompt")])),_:1}),n[128]||(n[128]=l("p",null,[t(`Sometimes it is convenient to disable the prompt according to a condition. For instance,
you only want to ask for confirmation if the user has edited some fields and not if the
values stay untouched. For that, you can use the `),l("code",null,"disable-prompt"),t(" option.")],-1)),e(r,{"content-class":"w-flex justify-center","app-classes-string":"justify-center align-center"},{pug:o(()=>n[112]||(n[112]=[t(`w-card(title="My user details" style="max-width: 300px")
  .w-flex.align-center.my4
    w-icon.pa6.bd1(xl bg-color="grey-light6" color="blue-dark1") wi-wave
    w-input.ml4(v-model="newUsername") Username
  .w-flex.justify-end.align-center
    w-transition-slide-fade(left)
      strong.mr3(v-if="saved" :class="hasEdits ? 'green' : 'grey'") `+u("{{ hasEdits ? 'Saved!' : 'No changes.' }}")+`
    w-confirm(
      :main-button="{ width: '5.5rem', 'bg-color': hasEdits ? 'success' : 'primary' }"
      :disable-prompt="!hasEdits"
      @click="!hasEdits && saveDetails&#40;&#41;"
      @confirm="saveDetails"
      @cancel="newUsername = username")
      w-icon.mr1 wi-check
      | `+u("{{ hasEdits ? 'Save' : 'OK' }}"))])),html:o(()=>n[113]||(n[113]=[t(`<w-card title="My user details" style="max-width: 300px">
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
        `+u("{{ hasEdits ? 'Saved!' : 'No changes.' }}")+`
      </strong>
    </w-transition-slide-fade>
    <w-confirm
      :main-button="{ width: '5.5rem', 'bg-color': hasEdits ? 'success' : 'primary' }"
      :disable-prompt="!hasEdits"
      @click="!hasEdits && saveDetails()"
      @confirm="saveDetails"
      @cancel="newUsername = username">
      <w-icon class="mr1">wi-check</w-icon>
      `+u("{{ hasEdits ? 'Save' : 'OK' }}")+`
    </w-confirm>
  </div>
</w-card>`)])),js:o(()=>n[114]||(n[114]=[t(`data: () => ({
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
},`)])),default:o(()=>[e(T,{title:"My user details",style:{"max-width":"300px"}},{default:o(()=>[l("div",j,[e(v,{class:"pa6 bd1",xl:"","bg-color":"grey-light6",color:"blue-dark1"},{default:o(()=>n[109]||(n[109]=[t("wi-wave")])),_:1}),e(A,{class:"ml4",modelValue:a.newUsername,"onUpdate:modelValue":n[2]||(n[2]=p=>a.newUsername=p)},{default:o(()=>n[110]||(n[110]=[t("Username")])),_:1},8,["modelValue"])]),l("div",q,[e(C,{left:""},{default:o(()=>[a.saved?(g(),w("strong",{key:0,class:S(["mr3",f.hasEdits?"green":"grey"])},u(f.hasEdits?"Saved!":"No changes."),3)):E("",!0)]),_:1}),e(i,{"main-button":{width:"5.5rem","bg-color":f.hasEdits?"success":"primary"},"disable-prompt":!f.hasEdits,onClick:n[3]||(n[3]=p=>!f.hasEdits&&f.saveDetails()),onConfirm:f.saveDetails,onCancel:n[4]||(n[4]=p=>a.newUsername=a.username)},{default:o(()=>[e(v,{class:"mr1"},{default:o(()=>n[111]||(n[111]=[t("wi-check")])),_:1}),t(u(f.hasEdits?"Save":"OK"),1)]),_:1},8,["main-button","disable-prompt","onConfirm"])])]),_:1})]),_:1})])}const U={data:()=>({bgColor:"green",disablePrompt:!0,username:"waveui",newUsername:"waveui",saved:!1}),computed:{hasEdits(){return this.newUsername!==this.username}},methods:{async saveDetails(){this.saved=!0,await new Promise(a=>setTimeout(a,2e3)),this.username=this.newUsername,this.saved=!1}},mounted(){setTimeout(()=>{this.bgColor="amber"},5e3)}},P=b(U,[["render",N]]);function R(a,n,h,y,k,f){const c=m("title-link"),s=m("component-api");return g(),w("div",null,[n[1]||(n[1]=l("div",{class:"w-divider my12"},null,-1)),e(c,{class:"title1",h2:""},{default:o(()=>n[0]||(n[0]=[t("API")])),_:1}),e(s,{class:"mt0",items:f.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(s,{items:a.slots,title:"Slots"},null,8,["items"]),e(s,{items:f.events,title:"Events"},null,8,["items"])])}const $={color:`Applies a color to the main button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the main button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:"Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",mainButton:'For more customization, this prop accepts an object of props to pass down to the main button (all the options that the <strong class="code">w-button</strong> component can handle).',cancel:'Accept either <code>false</code> to remove the button, a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Cancel".',confirm:'Accept either a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Confirm".',inline:"Displays the question inline with the buttons, inside the menu.",menu:'For more customization, this prop accepts an object of props to pass down to the menu (all the options that the <strong class="code">w-menu</strong> component can handle).',tooltip:'Accept either <code>false</code> for no tooltip (by default), a <span class="code">String</span> to display as a tooltip on the main button, or an <span class="code">Object</span> in order to define <strong class="code">w-tooltip</strong> props to further customize the tooltip (all the options that the <strong class="code">w-tooltip</strong> component can handle).<br>In addition to all the <strong class="code">w-tooltip</strong> props, the object also accepts a <code>label</code> key to provide the tooltip string in the object.<br>By default, the tooltip shows on hover, and at the bottom.',noArrow:"By default the confirmation menu displays an arrow pointing toward the main button.<br>The arrow can simply be removed with this prop.",top:"Places the menu above the main button.",bottom:"Places the below the main button.",left:"Places the menu on the left of the main button.",right:"Places the menu at the right of the main button.",alignTop:"Aligns the top of the menu with the top of the main button.",alignBottom:"Aligns the bottom of the menu with the bottom of the main button.",alignLeft:"Aligns the left side of the menu with the left side of the main button.",alignRight:"Aligns the right side of the menu with the right side of the main button.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',persistent:"When set to <code>true</code>, clicking outside of the menu will not close the menu."},L={default:{description:"The main button contents."},question:{description:"The question to ask for confirmation in the menu."},cancel:{description:"The cancel button contents, in the menu."},confirm:{description:"The confirm button contents, in the menu."}},z={cancel:"Emitted on cancel button click. The menu will also close.",confirm:"Emitted on confirm button click. The menu will also close."},I={data:()=>({propsDescs:$,slots:L}),computed:{props(){return x.props},events(){return x.emits.reduce((a,n)=>(a[n]={description:z[n]||""})&&a,{})}}},Y=b(I,[["render",R]]);function V(a,n,h,y,k,f){const c=m("ui-component-title"),s=m("examples"),i=m("api");return g(),w("main",null,[e(c,null,{default:o(()=>n[0]||(n[0]=[t("w-confirm")])),_:1}),e(s),e(i)])}const F={components:{Examples:P,Api:Y}},K=b(F,[["render",V]]);export{K as default};
