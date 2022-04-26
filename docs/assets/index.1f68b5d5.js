import{r as l,o as u,f as h,a as n,w as t,b as e,e as o,i as k,_,bB as b}from"./index.f54f7550.js";const A=e("ul",null,[e("li",{class:"title4"},[o("The purpose of the "),e("strong",{class:"code"},"w-confirm"),o(` component is to quickly set up a
confirmation prompt to confirm a critical action.`)]),e("li",null,[o("The "),e("strong",{class:"code"},"w-confirm"),o(" component uses "),e("strong",{class:"code"},"w-menu"),o(`, and
`),e("strong",{class:"code"},"w-buttons"),o(` components.
`)])],-1),x=o("Basic"),v=o("Delete"),C=o("w-confirm Delete"),T=o(`<w-confirm>Delete</w-confirm>
`),B=o("Icon button"),q=o('w-confirm(icon="mdi mdi-delete")'),$=o(`<w-confirm icon="mdi mdi-delete">
  Delete
</w-confirm>
`),S=o("Colors"),j=k(`<p>The <code>bg-color</code> &amp; <code>color</code> props apply to the button you first see.<br>
To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:</p><ul><li><code>menu</code> <small class="grey">E.g. <code class="grey">:menu=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>cancel</code> <small class="grey">E.g. <code class="grey">:cancel=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>confirm</code> <small class="grey">E.g. <code class="grey">:confirm=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li></ul>`,2),R=o("Ask for confirm"),N=o("Ask for confirm"),P=o("Ask for confirm"),L=o(`w-confirm.mb2(bg-color="success") Ask for confirm
w-confirm.mb2(bg-color="info" color="yellow") Ask for confirm
w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm`),D=o(`<w-confirm bg-color="success" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm bg-color="info" color="yellow" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }">
  Ask for confirm
</w-confirm>
`),z=o("Positions & alignments"),I=o("Positions"),Y=o("Top"),E=o("Right"),F=o("Bottom"),V=o("Left"),O=o(`w-confirm.my5(top) Top
w-confirm.my5(right) Right
w-confirm.my5(bottom) Bottom
w-confirm.my5(left) Left`),U=o(`<w-confirm top class="my5">
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
`),W=o("Alignments"),H=o("Horizontal"),G=o("Top, align left"),J=o("Top, align center"),K=o("Top, align right"),M=o("Bottom, align left"),Q=o("Bottom, align center"),X=o("Bottom, align right"),Z=o(`w-flex(justify-center)
  w-confirm.ma2(top align-left) Top, align left
  w-confirm.ma2(top) Top, align center
  w-confirm.ma2(top align-right) Top, align right

w-flex(justify-center)
  w-confirm.ma2(bottom align-left) Bottom, align left
  w-confirm.ma2(bottom) Bottom, align center
  w-confirm.ma2(bottom align-right) Bottom, align right`),oo=o(`<w-flex justify-center>
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
`),to=o("Vertical"),no=o("Left, align top"),eo=o("Left, align center"),io=o("Left, align bottom"),so=o("Right, align top"),co=o("Right, align center"),lo=o("Right, align bottom"),ao=o(`w-flex.text-center(justify-center)
  div
    w-confirm.ma2(left align-top) Left, align top
    w-confirm.ma2(left) Left, align center
    w-confirm.ma2(left align-bottom) Left, align bottom

  div
    w-confirm.ma2(right align-top) Right, align top
    w-confirm.ma2(right) Right, align center
    w-confirm.ma2(right align-bottom) Right, align bottom`),ro=o(`<w-flex justify-center class="text-center">
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
`),mo=o("Persistent"),fo=e("p",null,"A click outside of the menu will not close it.",-1),uo=o("Ask for confirm"),ho=o("w-confirm(persistent) Ask for confirm"),_o=o(`<w-confirm persistent>
  Ask for confirm
</w-confirm>
`),po=o("Inline question"),go=e("p",null,"Displays the question inline with the buttons inside the menu.",-1),wo=o("Ask for confirm"),bo=o("w-confirm(inline) Ask for confirm"),yo=o(`<w-confirm inline>
  Ask for confirm
</w-confirm>
`),ko=o("Custom question"),Ao=e("p",null,[o('By default the question is "Are you sure?". But both the '),e("code",null,"question"),o(` prop and the
`),e("code",null,"#question"),o(` slot allow you to specify your own question. The slot is more
customizable as you can add components in it but more verbose to write.`),e("br"),o(`
If both a slot and a prop are given, the slot takes precedence.
`)],-1),xo=o("Using the "),vo=e("code",null,"question",-1),Co=o(" prop"),To=o("Ask for confirm"),Bo=o(`w-confirm(question="Are you sure you want to delete this?").
  Ask for confirm`),qo=o(`<w-confirm question="Are you sure you want to delete this?">
  Ask for confirm
</w-confirm>
`),$o=o("Using the "),So=e("code",null,"#question",-1),jo=o(" slot"),Ro=o("Ask for confirm"),No=o("Are you sure you want to delete this?"),Po=o(`w-confirm
  | Ask for confirm
  template(#question) Are you sure you want to delete this?`),Lo=o(`<w-confirm>
  Ask for confirm
  <template #question>
    Are you sure you want to delete this?
  </template>
</w-confirm>
`),Do=o("Cancel & confirm buttons"),zo=e("p",null,[o("The cancel & confirm buttons can be customized through the "),e("code",null,"cancel"),o(` &
`),e("code",null,"confirm"),o(" props. These props accept either a "),e("span",{class:"code"},"String"),o(` for the button
label, or an `),e("span",{class:"code"},"Object"),o(" in order to define w-button props."),e("br"),o(`
The cancel button can also be set to `),e("code",null,"false"),o(" in order to remove it.")],-1),Io=o("Custom buttons labels"),Yo=e("p",null,[o("You can use the "),e("code",null,"cancel"),o(" & "),e("code",null,"confirm"),o(),e("strong",null,"props or slots"),o(` to override the
cancel & confirm buttons labels.`)],-1),Eo=o("Ask for confirm"),Fo=o(`w-confirm(cancel="No" confirm="Yes").
  Ask for confirm`),Vo=o(`<w-confirm cancel="No" confirm="Yes">
  Ask for confirm
</w-confirm>
`),Oo=o("No cancel button"),Uo=o("Ask for confirm"),Wo=o('w-confirm(:cancel="false") Ask for confirm'),Ho=o(`<w-confirm :cancel="false">
  Ask for confirm
</w-confirm>
`),Go=o("Full custom buttons"),Jo=e("p",null,[o("The cancel and confirm buttons can be customized as much as a standard "),e("strong",{class:"code"},"w-button"),o(`
via the `),e("code",null,"cancel"),o(" & "),e("code",null,"confirm"),o(` props which accept an object of
props to pass down to the `),e("strong",{class:"code"},"w-button"),o(".")],-1),Ko=o("Ask for confirm"),Mo=o(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
  | Ask for confirm`),Qo=o(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }">
  Ask for confirm
</w-confirm>
`),Xo=o("Custom button label in the "),Zo=e("span",{class:"code"},"Object",-1),ot=o(" form"),tt=e("p",null,[o(`If you're using the object form, you can define a custom label in it
(or you could also use the `),e("code",null,"#cancel"),o(" & "),e("code",null,"#confirm"),o(` slots
for more flexibility).`)],-1),nt=o("Ask for confirm"),et=o(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }")
  | Ask for confirm`),it=o(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }">
  Ask for confirm
</w-confirm>
`),st=o("No arrow"),ct=e("p",null,[o(`By default, the w-confirm component displays an arrow on the edge of the menu to designate
which action you have clicked requiring a confirmation.`),e("br"),o(`
You can disable the arrow via the `),e("code",null,"no-arrow"),o(" option.")],-1),lt=o("Bottom"),at=o("Right"),rt=o("No position"),mt=o(`w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
w-confirm.ma2(no-arrow right) Right
w-confirm.ma2.mb12(:menu="{ noPosition: true }") No position`),dt=o(`<w-confirm
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
`),ft=o("Transitions"),ut=o("Default (scale-fade)"),ht=o("Fade"),_t=o("Slide fade up"),pt=o("Slide fade right"),gt=o("Slide fade down"),wt=o("Slide fade left"),bt=o("Scale"),yt=o("Bounce"),kt=o("Twist"),At=o(`w-flex(wrap)
  w-confirm.ma1 Default (scale-fade)
  w-confirm.ma1(transition="fade") Fade
  w-confirm.ma1(transition="slide-fade-up") Slide fade up
  w-confirm.ma1(transition="slide-fade-right") Slide fade right
  w-confirm.ma1(transition="slide-fade-down") Slide fade down
  w-confirm.ma1(transition="slide-fade-left") Slide fade left
  w-confirm.ma1(transition="scale") Scale
  w-confirm.ma1(transition="bounce") Bounce
  w-confirm.ma1(transition="twist") Twist`),xt=o(`<w-confirm class="ma1">
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
`),vt=o("Events"),Ct=e("p",null,[o("2 events are emitted from the "),e("strong",{class:"code"},"w-confirm"),o(" component:")],-1),Tt=e("ul",null,[e("li",null,[e("code",null,"cancel"),o(" on cancel button click.")]),e("li",null,[e("code",null,"confirm"),o(" on confirm button click.")])],-1),Bt=e("p",null,[o("You can listen to them to trigger an action."),e("br"),o(`
In this example, a notification is displayed when clicking on the cancel or confirm button.`)],-1),qt=o("Ask for confirm"),$t=o(`w-confirm(
  @cancel="$waveui.notify&#40;'Canceled.', 'error'&#41;"
  @confirm="$waveui.notify&#40;'Confirmed!', 'success'&#41;") Ask for confirm`),St=o(`<w-confirm
  @cancel="$waveui.notify('Canceled.', 'error')"
  @confirm="$waveui.notify('Confirmed!', 'success')">
  Ask for confirm
</w-confirm>`);function jt(a,r,p,g,w,d){const m=l("alert"),s=l("title-link"),i=l("w-confirm"),c=l("example"),f=l("w-flex");return u(),h("div",null,[n(m,{info:""},{default:t(()=>[A]),_:1}),n(s,{h2:""},{default:t(()=>[x]),_:1}),n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[C]),html:t(()=>[T]),default:t(()=>[n(i,null,{default:t(()=>[v]),_:1})]),_:1}),n(s,{h2:""},{default:t(()=>[B]),_:1}),n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[q]),html:t(()=>[$]),default:t(()=>[n(i,{icon:"mdi mdi-delete"})]),_:1}),n(s,{h2:""},{default:t(()=>[S]),_:1}),j,n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[L]),html:t(()=>[D]),default:t(()=>[n(i,{class:"mb2","bg-color":"success"},{default:t(()=>[R]),_:1}),n(i,{class:"mb2","bg-color":"info",color:"yellow"},{default:t(()=>[N]),_:1}),n(i,{menu:{bgColor:"indigo-light1",color:"white"}},{default:t(()=>[P]),_:1})]),_:1}),n(s,{h2:""},{default:t(()=>[z]),_:1}),n(s,{h3:""},{default:t(()=>[I]),_:1}),n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[O]),html:t(()=>[U]),default:t(()=>[n(i,{class:"my5",top:""},{default:t(()=>[Y]),_:1}),n(i,{class:"my5",right:""},{default:t(()=>[E]),_:1}),n(i,{class:"my5",bottom:""},{default:t(()=>[F]),_:1}),n(i,{class:"my5",left:""},{default:t(()=>[V]),_:1})]),_:1}),n(s,{h3:""},{default:t(()=>[W]),_:1}),n(s,{h4:""},{default:t(()=>[H]),_:1}),n(c,null,{pug:t(()=>[Z]),html:t(()=>[oo]),default:t(()=>[n(f,{class:"mt12","justify-center":""},{default:t(()=>[n(i,{class:"ma2",top:"","align-left":""},{default:t(()=>[G]),_:1}),n(i,{class:"ma2",top:""},{default:t(()=>[J]),_:1}),n(i,{class:"ma2",top:"","align-right":""},{default:t(()=>[K]),_:1})]),_:1}),n(f,{"justify-center":""},{default:t(()=>[n(i,{class:"ma2",bottom:"","align-left":""},{default:t(()=>[M]),_:1}),n(i,{class:"ma2",bottom:""},{default:t(()=>[Q]),_:1}),n(i,{class:"ma2",bottom:"","align-right":""},{default:t(()=>[X]),_:1})]),_:1})]),_:1}),n(s,{h4:""},{default:t(()=>[to]),_:1}),n(c,null,{pug:t(()=>[ao]),html:t(()=>[ro]),default:t(()=>[n(f,{class:"text-center","justify-center":""},{default:t(()=>[e("div",null,[n(i,{class:"ma2",left:"","align-top":""},{default:t(()=>[no]),_:1}),n(i,{class:"ma2",left:""},{default:t(()=>[eo]),_:1}),n(i,{class:"ma2",left:"","align-bottom":""},{default:t(()=>[io]),_:1})]),e("div",null,[n(i,{class:"ma2",right:"","align-top":""},{default:t(()=>[so]),_:1}),n(i,{class:"ma2",right:""},{default:t(()=>[co]),_:1}),n(i,{class:"ma2",right:"","align-bottom":""},{default:t(()=>[lo]),_:1})])]),_:1})]),_:1}),n(s,{h2:""},{default:t(()=>[mo]),_:1}),fo,n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[ho]),html:t(()=>[_o]),default:t(()=>[n(i,{persistent:""},{default:t(()=>[uo]),_:1})]),_:1}),n(s,{h2:""},{default:t(()=>[po]),_:1}),go,n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[bo]),html:t(()=>[yo]),default:t(()=>[n(i,{inline:""},{default:t(()=>[wo]),_:1})]),_:1}),n(s,{h2:""},{default:t(()=>[ko]),_:1}),Ao,n(s,{h3:"",slug:"using-question-prop"},{default:t(()=>[xo,vo,Co]),_:1}),n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[Bo]),html:t(()=>[qo]),default:t(()=>[n(i,{question:"Are you sure you want to delete this?"},{default:t(()=>[To]),_:1})]),_:1}),n(s,{h3:"",slug:"using-question-slot"},{default:t(()=>[$o,So,jo]),_:1}),n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[Po]),html:t(()=>[Lo]),default:t(()=>[n(i,null,{question:t(()=>[No]),default:t(()=>[Ro]),_:1})]),_:1}),n(s,{h2:""},{default:t(()=>[Do]),_:1}),zo,n(s,{h3:""},{default:t(()=>[Io]),_:1}),Yo,n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[Fo]),html:t(()=>[Vo]),default:t(()=>[n(i,{cancel:"No",confirm:"Yes"},{default:t(()=>[Eo]),_:1})]),_:1}),n(s,{h3:""},{default:t(()=>[Oo]),_:1}),n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[Wo]),html:t(()=>[Ho]),default:t(()=>[n(i,{cancel:!1},{default:t(()=>[Uo]),_:1})]),_:1}),n(s,{h3:""},{default:t(()=>[Go]),_:1}),Jo,n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[Mo]),html:t(()=>[Qo]),default:t(()=>[n(i,{inline:"",cancel:{bgColor:"error-dark1",color:"white",icon:"mdi mdi-close"},confirm:{bgColor:"green-dark1",color:"white",icon:"mdi mdi-check"}},{default:t(()=>[Ko]),_:1})]),_:1}),n(s,{h3:"",slug:"custom-label-in-object"},{default:t(()=>[Xo,Zo,ot]),_:1}),tt,n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[et]),html:t(()=>[it]),default:t(()=>[n(i,{inline:"",cancel:{bgColor:"error-dark1",color:"white",label:"No"},confirm:{bgColor:"green-dark1",color:"white",label:"Yes"}},{default:t(()=>[nt]),_:1})]),_:1}),n(s,{h2:""},{default:t(()=>[st]),_:1}),ct,n(c,{class:"example--no-arrow","content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[mt]),html:t(()=>[dt]),default:t(()=>[n(i,{class:"ma2","no-arrow":"",menu:{bgColor:"blue-light5"}},{default:t(()=>[lt]),_:1}),n(i,{class:"ma2","no-arrow":"",right:""},{default:t(()=>[at]),_:1}),n(i,{class:"ma2 mb12",menu:{noPosition:!0,appendTo:".example--no-arrow"}},{default:t(()=>[rt]),_:1},8,["menu"])]),_:1}),n(s,{h2:""},{default:t(()=>[ft]),_:1}),n(c,null,{pug:t(()=>[At]),html:t(()=>[xt]),default:t(()=>[n(f,{wrap:""},{default:t(()=>[n(i,{class:"ma1"},{default:t(()=>[ut]),_:1}),n(i,{class:"ma1",transition:"fade"},{default:t(()=>[ht]),_:1}),n(i,{class:"ma1",transition:"slide-fade-up"},{default:t(()=>[_t]),_:1}),n(i,{class:"ma1",transition:"slide-fade-right"},{default:t(()=>[pt]),_:1}),n(i,{class:"ma1",transition:"slide-fade-down"},{default:t(()=>[gt]),_:1}),n(i,{class:"ma1",transition:"slide-fade-left"},{default:t(()=>[wt]),_:1}),n(i,{class:"ma1",transition:"scale"},{default:t(()=>[bt]),_:1}),n(i,{class:"ma1",transition:"bounce"},{default:t(()=>[yt]),_:1}),n(i,{class:"ma1",transition:"twist"},{default:t(()=>[kt]),_:1})]),_:1})]),_:1}),n(s,{h2:""},{default:t(()=>[vt]),_:1}),Ct,Tt,Bt,n(c,{"content-class":"text-center","app-props-string":"align-center"},{pug:t(()=>[$t]),html:t(()=>[St]),default:t(()=>[n(i,{onCancel:r[0]||(r[0]=y=>a.$waveui.notify("Canceled.","error")),onConfirm:r[1]||(r[1]=y=>a.$waveui.notify("Confirmed!","success"))},{default:t(()=>[qt]),_:1})]),_:1})])}const Rt={data:()=>({bgColor:"green"}),mounted(){setTimeout(()=>{this.bgColor="amber"},5e3)}};var Nt=_(Rt,[["render",jt]]);const Pt=e("div",{class:"w-divider my12"},null,-1),Lt=o("API");function Dt(a,r,p,g,w,d){const m=l("title-link"),s=l("component-api");return u(),h("div",null,[Pt,n(m,{class:"title1",h2:""},{default:t(()=>[Lt]),_:1}),n(s,{class:"mt0",items:d.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(s,{items:a.slots,title:"Slots"},null,8,["items"]),n(s,{items:d.events,title:"Events"},null,8,["items"])])}const zt={color:`Applies a color to the main button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the main button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:"Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",mainButton:'For more customization, this prop accepts an object of props to pass down to the main button (all the options that the <strong class="code">w-button</strong> component can handle).',cancel:'Accept either <code>false</code> to remove the button, a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Cancel".',confirm:'Accept either a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Confirm".',inline:"Displays the question inline with the buttons, inside the menu.",menu:'For more customization, this prop accepts an object of props to pass down to the menu (all the options that the <strong class="code">w-menu</strong> component can handle).',noArrow:"By default the confirmation menu displays an arrow pointing toward the main button.<br>The arrow can simply be removed with this prop.",top:"Places the menu above the main button.",bottom:"Places the below the main button.",left:"Places the menu on the left of the main button.",right:"Places the menu at the right of the main button.",alignTop:"Aligns the top of the menu with the top of the main button.",alignBottom:"Aligns the bottom of the menu with the bottom of the main button.",alignLeft:"Aligns the left side of the menu with the left side of the main button.",alignRight:"Aligns the right side of the menu with the right side of the main button.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',persistent:"When set to <code>true</code>, clicking outside of the menu will not close the menu."},It={default:{description:"The main button contents."},question:{description:"The question to ask for confirmation in the menu."},cancel:{description:"The cancel button contents, in the menu."},confirm:{description:"The confirm button contents, in the menu."}},Yt={cancel:"Emitted on cancel button click. The menu will also close.",confirm:"Emitted on confirm button click. The menu will also close."},Et={data:()=>({propsDescs:zt,slots:It}),computed:{props(){return b.props},events(){return b.emits.reduce((a,r)=>(a[r]={description:Yt[r]||""})&&a,{})}}};var Ft=_(Et,[["render",Dt]]);const Vt=o("w-confirm");function Ot(a,r,p,g,w,d){const m=l("ui-component-title"),s=l("examples"),i=l("api");return u(),h("main",null,[n(m,null,{default:t(()=>[Vt]),_:1}),n(s),n(i)])}const Ut={components:{Examples:Nt,Api:Ft}};var Ht=_(Ut,[["render",Ot]]);export{Ht as default};
