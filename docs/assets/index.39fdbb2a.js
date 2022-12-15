import{r as a,o as u,f as p,a as t,w as o,b as n,d as e,i as k,_ as h,E as _}from"./index.65420a29.js";const A=e("ul",null,[e("li",{class:"title4"},[n("The purpose of the "),e("strong",{class:"code"},"w-confirm"),n(` component is to quickly set up a
confirmation prompt to confirm a critical action.`)]),e("li",null,[n("The "),e("strong",{class:"code"},"w-confirm"),n(" component uses the "),e("strong",{class:"code"},"w-menu"),n(` and
`),e("strong",{class:"code"},"w-button"),n(` components.
`)])],-1),x=e("p",null,[n("We often need a tooltip on a button. Especially on the ones that only have an icons."),e("br"),n(`
That's why from version 2.45.0, the `),e("strong",{class:"code"},"w-button"),n(" & "),e("strong",{class:"code"},"w-confirm"),n(`
components ship with an integrated w-tooltip, if you need it.
`)],-1),v={class:"w-flex wrap"},C=k(`<p>The <code>bg-color</code> &amp; <code>color</code> props apply to the button you first see.<br>
To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:</p><ul><li><code>menu</code> <small class="grey">E.g. <code class="grey">:menu=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>cancel</code> <small class="grey">E.g. <code class="grey">:cancel=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>confirm</code> <small class="grey">E.g. <code class="grey">:confirm=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li></ul>`,2),T=e("p",null,"A click outside of the menu will not close it.",-1),B=e("p",null,"Displays the question inline with the buttons inside the menu.",-1),q=e("p",null,[n('By default the question is "Are you sure?". But both the '),e("code",null,"question"),n(` prop and the
`),e("code",null,"#question"),n(` slot allow you to specify your own question. The slot is more
customizable as you can add components in it but more verbose to write.`),e("br"),n(`
If both a slot and a prop are given, the slot takes precedence.
`)],-1),D=e("code",null,"question",-1),$=e("code",null,"#question",-1),j=e("p",null,[n("The cancel & confirm buttons can be customized through the "),e("code",null,"cancel"),n(` &
`),e("code",null,"confirm"),n(" props. These props accept either a "),e("span",{class:"code"},"String"),n(` for the button
label, or an `),e("span",{class:"code"},"Object"),n(" in order to define w-button props."),e("br"),n(`
The cancel button can also be set to `),e("code",null,"false"),n(" in order to remove it.")],-1),S=e("p",null,[n("You can use the "),e("code",null,"cancel"),n(" & "),e("code",null,"confirm"),n(),e("strong",null,"props or slots"),n(` to override the
cancel & confirm buttons labels.`)],-1),R=e("p",null,[n("The cancel and confirm buttons can be customized as much as a standard "),e("strong",{class:"code"},"w-button"),n(`
via the `),e("code",null,"cancel"),n(" & "),e("code",null,"confirm"),n(` props which accept an object of
props to pass down to the `),e("strong",{class:"code"},"w-button"),n(".")],-1),N=e("span",{class:"code"},"Object",-1),P=e("p",null,[n(`If you're using the object form, you can define a custom label in it
(or you could also use the `),e("code",null,"#cancel"),n(" & "),e("code",null,"#confirm"),n(` slots
for more flexibility).`)],-1),L=e("p",null,[n(`By default, the w-confirm component displays an arrow on the edge of the menu to designate
which action you have clicked requiring a confirmation.`),e("br"),n(`
You can disable the arrow via the `),e("code",null,"no-arrow"),n(" option.")],-1),I=e("p",null,[n("2 events are emitted from the "),e("strong",{class:"code"},"w-confirm"),n(" component:")],-1),z=e("ul",null,[e("li",null,[e("code",null,"cancel"),n(" on cancel button click.")]),e("li",null,[e("code",null,"confirm"),n(" on confirm button click.")])],-1),E=e("p",null,[n("You can listen to them to trigger an action."),e("br"),n(`
In this example, a notification is displayed when clicking on the cancel or confirm button.`)],-1);function Y(s,r,g,w,b,f){const m=a("alert"),l=a("title-link"),i=a("w-confirm"),c=a("example"),d=a("w-flex");return u(),p("div",null,[t(m,{info:""},{default:o(()=>[A]),_:1}),t(l,{h2:""},{default:o(()=>[n("Integrated tooltip")]),_:1}),x,t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-flex(wrap)
  w-confirm.ma4(tooltip="Delete this?") Delete

  w-confirm.ma4(
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }")
    | Delete`)]),html:o(()=>[n(`<w-flex wrap>
  <w-confirm class="ma4" tooltip="Delete this?">
    Delete
  </w-confirm>

  <w-confirm
    class="ma4"
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }">
    Delete
  </w-confirm>
</w-flex>
`)]),default:o(()=>[e("div",v,[t(i,{class:"ma4",tooltip:"Delete this?"},{default:o(()=>[n("Delete")]),_:1}),t(i,{class:"ma4",tooltip:{label:"Delete this?",bgColor:"error",top:!0,transition:"twist"}},{default:o(()=>[n("Delete")]),_:1})])]),_:1}),t(l,{h2:""},{default:o(()=>[n("Basic")]),_:1}),t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n("w-confirm Delete")]),html:o(()=>[n(`<w-confirm>Delete</w-confirm>
`)]),default:o(()=>[t(i,null,{default:o(()=>[n("Delete")]),_:1})]),_:1}),t(l,{h2:""},{default:o(()=>[n("Icon button")]),_:1}),t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n('w-confirm(icon="mdi mdi-delete")')]),html:o(()=>[n(`<w-confirm icon="mdi mdi-delete">
  Delete
</w-confirm>
`)]),default:o(()=>[t(i,{icon:"mdi mdi-delete"})]),_:1}),t(l,{h2:""},{default:o(()=>[n("Colors")]),_:1}),C,t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-confirm.mb2(bg-color="success") Ask for confirm
w-confirm.mb2(bg-color="info" color="yellow") Ask for confirm
w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm`)]),html:o(()=>[n(`<w-confirm bg-color="success" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm bg-color="info" color="yellow" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }">
  Ask for confirm
</w-confirm>
`)]),default:o(()=>[t(i,{class:"mb2","bg-color":"success"},{default:o(()=>[n("Ask for confirm")]),_:1}),t(i,{class:"mb2","bg-color":"info",color:"yellow"},{default:o(()=>[n("Ask for confirm")]),_:1}),t(i,{menu:{bgColor:"indigo-light1",color:"white"}},{default:o(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(l,{h2:""},{default:o(()=>[n("Positions & alignments")]),_:1}),t(l,{h3:""},{default:o(()=>[n("Positions")]),_:1}),t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-confirm.my5(top) Top
w-confirm.my5(right) Right
w-confirm.my5(bottom) Bottom
w-confirm.my5(left) Left`)]),html:o(()=>[n(`<w-confirm top class="my5">
  Top
</w-confirm>

<w-confirm right class="my5">
  Right
</w-confirm>

<w-confirm bottom class="my5">
  Bottom
</w-confirm>

<w-confirm left class="my5">
  Left
</w-confirm>
`)]),default:o(()=>[t(i,{class:"my5",top:""},{default:o(()=>[n("Top")]),_:1}),t(i,{class:"my5",right:""},{default:o(()=>[n("Right")]),_:1}),t(i,{class:"my5",bottom:""},{default:o(()=>[n("Bottom")]),_:1}),t(i,{class:"my5",left:""},{default:o(()=>[n("Left")]),_:1})]),_:1}),t(l,{h3:""},{default:o(()=>[n("Alignments")]),_:1}),t(l,{h4:""},{default:o(()=>[n("Horizontal")]),_:1}),t(c,null,{pug:o(()=>[n(`w-flex(justify-center)
  w-confirm.ma2(top align-left) Top, align left
  w-confirm.ma2(top) Top, align center
  w-confirm.ma2(top align-right) Top, align right

w-flex(justify-center)
  w-confirm.ma2(bottom align-left) Bottom, align left
  w-confirm.ma2(bottom) Bottom, align center
  w-confirm.ma2(bottom align-right) Bottom, align right`)]),html:o(()=>[n(`<w-flex justify-center>
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
`)]),default:o(()=>[t(d,{class:"mt12","justify-center":""},{default:o(()=>[t(i,{class:"ma2",top:"","align-left":""},{default:o(()=>[n("Top, align left")]),_:1}),t(i,{class:"ma2",top:""},{default:o(()=>[n("Top, align center")]),_:1}),t(i,{class:"ma2",top:"","align-right":""},{default:o(()=>[n("Top, align right")]),_:1})]),_:1}),t(d,{"justify-center":""},{default:o(()=>[t(i,{class:"ma2",bottom:"","align-left":""},{default:o(()=>[n("Bottom, align left")]),_:1}),t(i,{class:"ma2",bottom:""},{default:o(()=>[n("Bottom, align center")]),_:1}),t(i,{class:"ma2",bottom:"","align-right":""},{default:o(()=>[n("Bottom, align right")]),_:1})]),_:1})]),_:1}),t(l,{h4:""},{default:o(()=>[n("Vertical")]),_:1}),t(c,null,{pug:o(()=>[n(`w-flex.text-center(justify-center)
  div
    w-confirm.ma2(left align-top) Left, align top
    w-confirm.ma2(left) Left, align center
    w-confirm.ma2(left align-bottom) Left, align bottom

  div
    w-confirm.ma2(right align-top) Right, align top
    w-confirm.ma2(right) Right, align center
    w-confirm.ma2(right align-bottom) Right, align bottom`)]),html:o(()=>[n(`<w-flex justify-center class="text-center">
  <div>
    <w-confirm left align-top class="ma2">
      Left, align top
    </w-confirm>

    <w-confirm left class="ma2">
      Left, align center
    </w-confirm>

    <w-confirm left align-bottom class="ma2">
      Left, align bottom
    </w-confirm>
  </div>

  <div>
    <w-confirm right align-top class="ma2">
      Right, align top
    </w-confirm>

    <w-confirm right class="ma2">
      Right, align center
    </w-confirm>

    <w-confirm right align-bottom class="ma2">
      Right, align bottom
    </w-confirm>
  </div>
</w-flex>
`)]),default:o(()=>[t(d,{class:"text-center","justify-center":""},{default:o(()=>[e("div",null,[t(i,{class:"ma2",left:"","align-top":""},{default:o(()=>[n("Left, align top")]),_:1}),t(i,{class:"ma2",left:""},{default:o(()=>[n("Left, align center")]),_:1}),t(i,{class:"ma2",left:"","align-bottom":""},{default:o(()=>[n("Left, align bottom")]),_:1})]),e("div",null,[t(i,{class:"ma2",right:"","align-top":""},{default:o(()=>[n("Right, align top")]),_:1}),t(i,{class:"ma2",right:""},{default:o(()=>[n("Right, align center")]),_:1}),t(i,{class:"ma2",right:"","align-bottom":""},{default:o(()=>[n("Right, align bottom")]),_:1})])]),_:1})]),_:1}),t(l,{h2:""},{default:o(()=>[n("Persistent")]),_:1}),T,t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n("w-confirm(persistent) Ask for confirm")]),html:o(()=>[n(`<w-confirm persistent>
  Ask for confirm
</w-confirm>
`)]),default:o(()=>[t(i,{persistent:""},{default:o(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(l,{h2:""},{default:o(()=>[n("Inline question")]),_:1}),B,t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n("w-confirm(inline) Ask for confirm")]),html:o(()=>[n(`<w-confirm inline>
  Ask for confirm
</w-confirm>
`)]),default:o(()=>[t(i,{inline:""},{default:o(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(l,{h2:""},{default:o(()=>[n("Custom question")]),_:1}),q,t(l,{h3:"",slug:"using-question-prop"},{default:o(()=>[n("Using the "),D,n(" prop")]),_:1}),t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-confirm(question="Are you sure you want to delete this?").
  Ask for confirm`)]),html:o(()=>[n(`<w-confirm question="Are you sure you want to delete this?">
  Ask for confirm
</w-confirm>
`)]),default:o(()=>[t(i,{question:"Are you sure you want to delete this?"},{default:o(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(l,{h3:"",slug:"using-question-slot"},{default:o(()=>[n("Using the "),$,n(" slot")]),_:1}),t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-confirm
  | Ask for confirm
  template(#question) Are you sure you want to delete this?`)]),html:o(()=>[n(`<w-confirm>
  Ask for confirm
  <template #question>
    Are you sure you want to delete this?
  </template>
</w-confirm>
`)]),default:o(()=>[t(i,null,{question:o(()=>[n("Are you sure you want to delete this?")]),default:o(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(l,{h2:""},{default:o(()=>[n("Cancel & confirm buttons")]),_:1}),j,t(l,{h3:""},{default:o(()=>[n("Custom buttons labels")]),_:1}),S,t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-confirm(cancel="No" confirm="Yes").
  Ask for confirm`)]),html:o(()=>[n(`<w-confirm cancel="No" confirm="Yes">
  Ask for confirm
</w-confirm>
`)]),default:o(()=>[t(i,{cancel:"No",confirm:"Yes"},{default:o(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(l,{h3:""},{default:o(()=>[n("No cancel button")]),_:1}),t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n('w-confirm(:cancel="false") Ask for confirm')]),html:o(()=>[n(`<w-confirm :cancel="false">
  Ask for confirm
</w-confirm>
`)]),default:o(()=>[t(i,{cancel:!1},{default:o(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(l,{h3:""},{default:o(()=>[n("Full custom buttons")]),_:1}),R,t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
  | Ask for confirm`)]),html:o(()=>[n(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }">
  Ask for confirm
</w-confirm>
`)]),default:o(()=>[t(i,{inline:"",cancel:{bgColor:"error-dark1",color:"white",icon:"mdi mdi-close"},confirm:{bgColor:"green-dark1",color:"white",icon:"mdi mdi-check"}},{default:o(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(l,{h3:"",slug:"custom-label-in-object"},{default:o(()=>[n("Custom button label in the "),N,n(" form")]),_:1}),P,t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }")
  | Ask for confirm`)]),html:o(()=>[n(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }">
  Ask for confirm
</w-confirm>
`)]),default:o(()=>[t(i,{inline:"",cancel:{bgColor:"error-dark1",color:"white",label:"No"},confirm:{bgColor:"green-dark1",color:"white",label:"Yes"}},{default:o(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(l,{h2:""},{default:o(()=>[n("No arrow")]),_:1}),L,t(c,{class:"example--no-arrow","content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
w-confirm.ma2(no-arrow right) Right
w-confirm.ma2.mb12(:menu="{ noPosition: true }") No position`)]),html:o(()=>[n(`<w-confirm
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
`)]),default:o(()=>[t(i,{class:"ma2","no-arrow":"",menu:{bgColor:"blue-light5"}},{default:o(()=>[n("Bottom")]),_:1}),t(i,{class:"ma2","no-arrow":"",right:""},{default:o(()=>[n("Right")]),_:1}),t(i,{class:"ma2 mb12",menu:{noPosition:!0,appendTo:".example--no-arrow"}},{default:o(()=>[n("No position")]),_:1},8,["menu"])]),_:1}),t(l,{h2:""},{default:o(()=>[n("Transitions")]),_:1}),t(c,null,{pug:o(()=>[n(`w-flex(wrap)
  w-confirm.ma1 Default (scale-fade)
  w-confirm.ma1(transition="fade") Fade
  w-confirm.ma1(transition="slide-fade-up") Slide fade up
  w-confirm.ma1(transition="slide-fade-right") Slide fade right
  w-confirm.ma1(transition="slide-fade-down") Slide fade down
  w-confirm.ma1(transition="slide-fade-left") Slide fade left
  w-confirm.ma1(transition="scale") Scale
  w-confirm.ma1(transition="bounce") Bounce
  w-confirm.ma1(transition="twist") Twist`)]),html:o(()=>[n(`<w-confirm class="ma1">
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
`)]),default:o(()=>[t(d,{wrap:""},{default:o(()=>[t(i,{class:"ma1"},{default:o(()=>[n("Default (scale-fade)")]),_:1}),t(i,{class:"ma1",transition:"fade"},{default:o(()=>[n("Fade")]),_:1}),t(i,{class:"ma1",transition:"slide-fade-up"},{default:o(()=>[n("Slide fade up")]),_:1}),t(i,{class:"ma1",transition:"slide-fade-right"},{default:o(()=>[n("Slide fade right")]),_:1}),t(i,{class:"ma1",transition:"slide-fade-down"},{default:o(()=>[n("Slide fade down")]),_:1}),t(i,{class:"ma1",transition:"slide-fade-left"},{default:o(()=>[n("Slide fade left")]),_:1}),t(i,{class:"ma1",transition:"scale"},{default:o(()=>[n("Scale")]),_:1}),t(i,{class:"ma1",transition:"bounce"},{default:o(()=>[n("Bounce")]),_:1}),t(i,{class:"ma1",transition:"twist"},{default:o(()=>[n("Twist")]),_:1})]),_:1})]),_:1}),t(l,{h2:""},{default:o(()=>[n("Events")]),_:1}),I,z,E,t(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:o(()=>[n(`w-confirm(
  @cancel="$waveui.notify&#40;'Canceled.', 'error'&#41;"
  @confirm="$waveui.notify&#40;'Confirmed!', 'success'&#41;") Ask for confirm`)]),html:o(()=>[n(`<w-confirm
  @cancel="$waveui.notify('Canceled.', 'error')"
  @confirm="$waveui.notify('Confirmed!', 'success')">
  Ask for confirm
</w-confirm>`)]),default:o(()=>[t(i,{onCancel:r[0]||(r[0]=y=>s.$waveui.notify("Canceled.","error")),onConfirm:r[1]||(r[1]=y=>s.$waveui.notify("Confirmed!","success"))},{default:o(()=>[n("Ask for confirm")]),_:1})]),_:1})])}const F={data:()=>({bgColor:"green"}),mounted(){setTimeout(()=>{this.bgColor="amber"},5e3)}},O=h(F,[["render",Y]]),V=e("div",{class:"w-divider my12"},null,-1);function W(s,r,g,w,b,f){const m=a("title-link"),l=a("component-api");return u(),p("div",null,[V,t(m,{class:"title1",h2:""},{default:o(()=>[n("API")]),_:1}),t(l,{class:"mt0",items:f.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(l,{items:s.slots,title:"Slots"},null,8,["items"]),t(l,{items:f.events,title:"Events"},null,8,["items"])])}const U={color:`Applies a color to the main button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the main button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:"Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",mainButton:'For more customization, this prop accepts an object of props to pass down to the main button (all the options that the <strong class="code">w-button</strong> component can handle).',cancel:'Accept either <code>false</code> to remove the button, a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Cancel".',confirm:'Accept either a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Confirm".',inline:"Displays the question inline with the buttons, inside the menu.",menu:'For more customization, this prop accepts an object of props to pass down to the menu (all the options that the <strong class="code">w-menu</strong> component can handle).',tooltip:'Accept either <code>false</code> for no tooltip (by default), a <span class="code">String</span> to display as a tooltip on the main button, or an <span class="code">Object</span> in order to define <strong class="code">w-tooltip</strong> props to further customize the tooltip (all the options that the <strong class="code">w-tooltip</strong> component can handle).<br>In addition to all the <strong class="code">w-tooltip</strong> props, the object also accepts a <code>label</code> key to provide the tooltip string in the object.<br>By default, the tooltip shows on hover, and at the bottom.',noArrow:"By default the confirmation menu displays an arrow pointing toward the main button.<br>The arrow can simply be removed with this prop.",top:"Places the menu above the main button.",bottom:"Places the below the main button.",left:"Places the menu on the left of the main button.",right:"Places the menu at the right of the main button.",alignTop:"Aligns the top of the menu with the top of the main button.",alignBottom:"Aligns the bottom of the menu with the bottom of the main button.",alignLeft:"Aligns the left side of the menu with the left side of the main button.",alignRight:"Aligns the right side of the menu with the right side of the main button.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',persistent:"When set to <code>true</code>, clicking outside of the menu will not close the menu."},H={default:{description:"The main button contents."},question:{description:"The question to ask for confirmation in the menu."},cancel:{description:"The cancel button contents, in the menu."},confirm:{description:"The confirm button contents, in the menu."}},G={cancel:"Emitted on cancel button click. The menu will also close.",confirm:"Emitted on confirm button click. The menu will also close."},J={data:()=>({propsDescs:U,slots:H}),computed:{props(){return _.props},events(){return _.emits.reduce((s,r)=>(s[r]={description:G[r]||""})&&s,{})}}},K=h(J,[["render",W]]);function M(s,r,g,w,b,f){const m=a("ui-component-title"),l=a("examples"),i=a("api");return u(),p("main",null,[t(m,null,{default:o(()=>[n("w-confirm")]),_:1}),t(l),t(i)])}const Q={components:{Examples:O,Api:K}},Z=h(Q,[["render",M]]);export{Z as default};
