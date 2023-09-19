import{r,o as p,g as w,a as t,w as e,b as n,d as o,t as d,n as T,f as D,h as E,_ as g,E as v}from"./index.bf2cfd71.js";const S=o("ul",null,[o("li",{class:"title4"},[n("The purpose of the "),o("strong",{class:"code"},"w-confirm"),n(` component is to quickly set up a
confirmation prompt to confirm a critical action.`)]),o("li",null,[n("The "),o("strong",{class:"code"},"w-confirm"),n(" component uses the "),o("strong",{class:"code"},"w-menu"),n(` and
`),o("strong",{class:"code"},"w-button"),n(` components.
`)])],-1),B=o("p",null,[n("We often need a tooltip on a button. Especially on the ones that only have an icons."),o("br"),n(`
That's why from version 2.45.0, the `),o("strong",{class:"code"},"w-button"),n(" & "),o("strong",{class:"code"},"w-confirm"),n(`
components ship with an integrated w-tooltip, if you need it.
`)],-1),j={class:"w-flex wrap"},q=E(`<p>The <code>bg-color</code> &amp; <code>color</code> props apply to the button you first see.<br>
To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:</p><ul><li><code>menu</code> <small class="grey">E.g. <code class="grey">:menu=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>cancel</code> <small class="grey">E.g. <code class="grey">:cancel=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li><li><code>confirm</code> <small class="grey">E.g. <code class="grey">:confirm=&quot;{ bgColor: &#39;green&#39; }&quot;</code></small></li></ul>`,2),N=o("p",null,"A click outside of the menu will not close it.",-1),U=o("p",null,"Displays the question inline with the buttons inside the menu.",-1),P=o("p",null,[n('By default the question is "Are you sure?". But both the '),o("code",null,"question"),n(` prop and the
`),o("code",null,"#question"),n(` slot allow you to specify your own question. The slot is more
customizable as you can add components in it but more verbose to write.`),o("br"),n(`
If both a slot and a prop are given, the slot takes precedence.
`)],-1),$=o("code",null,"question",-1),R=o("code",null,"#question",-1),L=o("p",null,[n("The cancel & confirm buttons can be customized through the "),o("code",null,"cancel"),n(` &
`),o("code",null,"confirm"),n(" props. These props accept either a "),o("span",{class:"code"},"String"),n(` for the button
label, or an `),o("span",{class:"code"},"Object"),n(" in order to define w-button props."),o("br"),n(`
The cancel button can also be set to `),o("code",null,"false"),n(" in order to remove it.")],-1),z=o("p",null,[n("You can use the "),o("code",null,"cancel"),n(" & "),o("code",null,"confirm"),n(),o("strong",null,"props or slots"),n(` to override the
cancel & confirm buttons labels.`)],-1),I=o("p",null,[n("The cancel and confirm buttons can be customized as much as a standard "),o("strong",{class:"code"},"w-button"),n(`
via the `),o("code",null,"cancel"),n(" & "),o("code",null,"confirm"),n(` props which accept an object of
props to pass down to the `),o("strong",{class:"code"},"w-button"),n(".")],-1),Y=o("span",{class:"code"},"Object",-1),V=o("p",null,[n(`If you're using the object form, you can define a custom label in it
(or you could also use the `),o("code",null,"#cancel"),n(" & "),o("code",null,"#confirm"),n(` slots
for more flexibility).`)],-1),F=o("p",null,[n(`By default, the w-confirm component displays an arrow on the edge of the menu to designate
which action you have clicked requiring a confirmation.`),o("br"),n(`
You can disable the arrow via the `),o("code",null,"no-arrow"),n(" option.")],-1),O=o("p",null,[n("2 events are emitted from the "),o("strong",{class:"code"},"w-confirm"),n(" component:")],-1),K=o("ul",null,[o("li",null,[o("code",null,"cancel"),n(" on cancel button click.")]),o("li",null,[o("code",null,"confirm"),n(" on confirm button click.")])],-1),M=o("p",null,[n("You can listen to them to trigger an action."),o("br"),n(`
In this example, a notification is displayed when clicking on the cancel or confirm button.`)],-1),W=o("p",null,[n(`Sometimes it is convenient to disable the prompt according to a condition. For instance,
you only want to ask for confirmation if the user has edited some fields and not if the
values stay untouched. For that, you can use the `),o("code",null,"disable-prompt"),n(" option.")],-1),H={class:"w-flex align-center my4"},G={class:"w-flex justify-end align-center"};function J(l,c,b,_,y,m){const u=r("alert"),i=r("title-link"),s=r("w-confirm"),a=r("example"),f=r("w-flex"),k=r("w-icon"),x=r("w-input"),A=r("w-transition-slide-fade"),C=r("w-card");return p(),w("div",null,[t(u,{info:""},{default:e(()=>[S]),_:1}),t(i,{h2:""},{default:e(()=>[n("Integrated tooltip")]),_:1}),B,t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-flex(wrap)
  w-confirm.ma4(tooltip="Delete this?") Delete

  w-confirm.ma4(
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }")
    | Delete`)]),html:e(()=>[n(`<w-flex wrap>
  <w-confirm class="ma4" tooltip="Delete this?">
    Delete
  </w-confirm>

  <w-confirm
    class="ma4"
    :tooltip="{ label: 'Delete this?', bgColor: 'error', top: true, transition: 'twist' }">
    Delete
  </w-confirm>
</w-flex>
`)]),default:e(()=>[o("div",j,[t(s,{class:"ma4",tooltip:"Delete this?"},{default:e(()=>[n("Delete")]),_:1}),t(s,{class:"ma4",tooltip:{label:"Delete this?",bgColor:"error",top:!0,transition:"twist"}},{default:e(()=>[n("Delete")]),_:1})])]),_:1}),t(i,{h2:""},{default:e(()=>[n("Basic")]),_:1}),t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n("w-confirm Delete")]),html:e(()=>[n(`<w-confirm>Delete</w-confirm>
`)]),default:e(()=>[t(s,null,{default:e(()=>[n("Delete")]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Icon button")]),_:1}),t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n('w-confirm(icon="mdi mdi-delete")')]),html:e(()=>[n(`<w-confirm icon="mdi mdi-delete">
  Delete
</w-confirm>
`)]),default:e(()=>[t(s,{icon:"mdi mdi-delete"})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Colors")]),_:1}),q,t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-confirm.ma2(bg-color="success") Ask for confirm
w-confirm.ma2(bg-color="info" color="yellow") Ask for confirm
w-confirm.ma2(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm`)]),html:e(()=>[n(`<w-confirm bg-color="success" class="ma2">
  Ask for confirm
</w-confirm>

<w-confirm bg-color="info" color="yellow" class="ma2">
  Ask for confirm
</w-confirm>

<w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }" class="ma2">
  Ask for confirm
</w-confirm>
`)]),default:e(()=>[t(s,{class:"ma2","bg-color":"success"},{default:e(()=>[n("Ask for confirm")]),_:1}),t(s,{class:"ma2","bg-color":"info",color:"yellow"},{default:e(()=>[n("Ask for confirm")]),_:1}),t(s,{class:"ma2",menu:{bgColor:"indigo-light1",color:"white"}},{default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Positions & alignments")]),_:1}),t(i,{h3:""},{default:e(()=>[n("Positions")]),_:1}),t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-confirm.ma5(top) Top
w-confirm.ma5(right) Right
w-confirm.ma5(bottom) Bottom
w-confirm.ma5(left) Left`)]),html:e(()=>[n(`<w-confirm top class="ma5">
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
`)]),default:e(()=>[t(s,{class:"ma5",top:""},{default:e(()=>[n("Top")]),_:1}),t(s,{class:"ma5",right:""},{default:e(()=>[n("Right")]),_:1}),t(s,{class:"ma5",bottom:""},{default:e(()=>[n("Bottom")]),_:1}),t(s,{class:"ma5",left:""},{default:e(()=>[n("Left")]),_:1})]),_:1}),t(i,{h3:""},{default:e(()=>[n("Alignments")]),_:1}),t(i,{h4:""},{default:e(()=>[n("Horizontal")]),_:1}),t(a,null,{pug:e(()=>[n(`w-flex(justify-center)
  w-confirm.ma2(top align-left) Top, align left
  w-confirm.ma2(top) Top, align center
  w-confirm.ma2(top align-right) Top, align right

w-flex(justify-center)
  w-confirm.ma2(bottom align-left) Bottom, align left
  w-confirm.ma2(bottom) Bottom, align center
  w-confirm.ma2(bottom align-right) Bottom, align right`)]),html:e(()=>[n(`<w-flex justify-center>
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
`)]),default:e(()=>[t(f,{class:"mt12","justify-center":""},{default:e(()=>[t(s,{class:"ma2",top:"","align-left":""},{default:e(()=>[n("Top, align left")]),_:1}),t(s,{class:"ma2",top:""},{default:e(()=>[n("Top, align center")]),_:1}),t(s,{class:"ma2",top:"","align-right":""},{default:e(()=>[n("Top, align right")]),_:1})]),_:1}),t(f,{"justify-center":""},{default:e(()=>[t(s,{class:"ma2",bottom:"","align-left":""},{default:e(()=>[n("Bottom, align left")]),_:1}),t(s,{class:"ma2",bottom:""},{default:e(()=>[n("Bottom, align center")]),_:1}),t(s,{class:"ma2",bottom:"","align-right":""},{default:e(()=>[n("Bottom, align right")]),_:1})]),_:1})]),_:1}),t(i,{h4:""},{default:e(()=>[n("Vertical")]),_:1}),t(a,null,{pug:e(()=>[n(`w-flex(justify-center)
  w-flex.no-grow(column)
    w-confirm.ma2(left align-top) Left, align top
    w-confirm.ma2(left) Left, align center
    w-confirm.ma2(left align-bottom) Left, align bottom

  w-flex.no-grow(column)
    w-confirm.ma2(right align-top) Right, align top
    w-confirm.ma2(right) Right, align center
    w-confirm.ma2(right align-bottom) Right, align bottom`)]),html:e(()=>[n(`<w-flex justify-center class="text-center">
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
`)]),default:e(()=>[t(f,{"justify-center":""},{default:e(()=>[t(f,{class:"no-grow",column:""},{default:e(()=>[t(s,{class:"ma2",left:"","align-top":""},{default:e(()=>[n("Left, align top")]),_:1}),t(s,{class:"ma2",left:""},{default:e(()=>[n("Left, align center")]),_:1}),t(s,{class:"ma2",left:"","align-bottom":""},{default:e(()=>[n("Left, align bottom")]),_:1})]),_:1}),t(f,{class:"no-grow",column:""},{default:e(()=>[t(s,{class:"ma2",right:"","align-top":""},{default:e(()=>[n("Right, align top")]),_:1}),t(s,{class:"ma2",right:""},{default:e(()=>[n("Right, align center")]),_:1}),t(s,{class:"ma2",right:"","align-bottom":""},{default:e(()=>[n("Right, align bottom")]),_:1})]),_:1})]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Persistent")]),_:1}),N,t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n("w-confirm(persistent) Ask for confirm")]),html:e(()=>[n(`<w-confirm persistent>
  Ask for confirm
</w-confirm>
`)]),default:e(()=>[t(s,{persistent:""},{default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Inline question")]),_:1}),U,t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n("w-confirm(inline) Ask for confirm")]),html:e(()=>[n(`<w-confirm inline>
  Ask for confirm
</w-confirm>
`)]),default:e(()=>[t(s,{inline:""},{default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Custom question")]),_:1}),P,t(i,{h3:"",slug:"using-question-prop"},{default:e(()=>[n("Using the "),$,n(" prop")]),_:1}),t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-confirm(question="Are you sure you want to delete this?").
  Ask for confirm`)]),html:e(()=>[n(`<w-confirm question="Are you sure you want to delete this?">
  Ask for confirm
</w-confirm>
`)]),default:e(()=>[t(s,{question:"Are you sure you want to delete this?"},{default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h3:"",slug:"using-question-slot"},{default:e(()=>[n("Using the "),R,n(" slot")]),_:1}),t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-confirm
  | Ask for confirm
  template(#question) Are you sure you want to delete this?`)]),html:e(()=>[n(`<w-confirm>
  Ask for confirm
  <template #question>
    Are you sure you want to delete this?
  </template>
</w-confirm>
`)]),default:e(()=>[t(s,null,{question:e(()=>[n("Are you sure you want to delete this?")]),default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Cancel & confirm buttons")]),_:1}),L,t(i,{h3:""},{default:e(()=>[n("Custom buttons labels")]),_:1}),z,t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-confirm(cancel="No" confirm="Yes").
  Ask for confirm`)]),html:e(()=>[n(`<w-confirm cancel="No" confirm="Yes">
  Ask for confirm
</w-confirm>
`)]),default:e(()=>[t(s,{cancel:"No",confirm:"Yes"},{default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h3:""},{default:e(()=>[n("No cancel button")]),_:1}),t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n('w-confirm(:cancel="false") Ask for confirm')]),html:e(()=>[n(`<w-confirm :cancel="false">
  Ask for confirm
</w-confirm>
`)]),default:e(()=>[t(s,{cancel:!1},{default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h3:""},{default:e(()=>[n("Full custom buttons")]),_:1}),I,t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
  | Ask for confirm`)]),html:e(()=>[n(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }">
  Ask for confirm
</w-confirm>
`)]),default:e(()=>[t(s,{inline:"",cancel:{bgColor:"error-dark1",color:"white",icon:"mdi mdi-close"},confirm:{bgColor:"green-dark1",color:"white",icon:"mdi mdi-check"}},{default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h3:"",slug:"custom-label-in-object"},{default:e(()=>[n("Custom button label in the "),Y,n(" form")]),_:1}),V,t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-confirm(
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }")
  | Ask for confirm`)]),html:e(()=>[n(`<w-confirm
  inline
  :cancel="{ bgColor: 'error-dark1', color: 'white', label: 'No' }"
  :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }">
  Ask for confirm
</w-confirm>
`)]),default:e(()=>[t(s,{inline:"",cancel:{bgColor:"error-dark1",color:"white",label:"No"},confirm:{bgColor:"green-dark1",color:"white",label:"Yes"}},{default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("No arrow")]),_:1}),F,t(a,{class:"example--no-arrow","content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-flex(column align-center)
  w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
  w-confirm.ma2(no-arrow right) Right
  w-confirm.ma2(:menu="{ noPosition: true }") No position`)]),html:e(()=>[n(`<w-flex column align-center>
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
`)]),default:e(()=>[t(f,{class:"mb12",column:"","align-center":""},{default:e(()=>[t(s,{class:"ma2","no-arrow":"",menu:{bgColor:"blue-light5"}},{default:e(()=>[n("Bottom")]),_:1}),t(s,{class:"ma2","no-arrow":"",right:""},{default:e(()=>[n("Right")]),_:1}),t(s,{class:"ma2",menu:{noPosition:!0,appendTo:".example--no-arrow"}},{default:e(()=>[n("No position")]),_:1},8,["menu"])]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Transitions")]),_:1}),t(a,null,{pug:e(()=>[n(`w-flex(wrap)
  w-confirm.ma1 Default (scale-fade)
  w-confirm.ma1(transition="fade") Fade
  w-confirm.ma1(transition="slide-fade-up") Slide fade up
  w-confirm.ma1(transition="slide-fade-right") Slide fade right
  w-confirm.ma1(transition="slide-fade-down") Slide fade down
  w-confirm.ma1(transition="slide-fade-left") Slide fade left
  w-confirm.ma1(transition="scale") Scale
  w-confirm.ma1(transition="bounce") Bounce
  w-confirm.ma1(transition="twist") Twist`)]),html:e(()=>[n(`<w-confirm class="ma1">
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
`)]),default:e(()=>[t(f,{wrap:""},{default:e(()=>[t(s,{class:"ma1"},{default:e(()=>[n("Default (scale-fade)")]),_:1}),t(s,{class:"ma1",transition:"fade"},{default:e(()=>[n("Fade")]),_:1}),t(s,{class:"ma1",transition:"slide-fade-up"},{default:e(()=>[n("Slide fade up")]),_:1}),t(s,{class:"ma1",transition:"slide-fade-right"},{default:e(()=>[n("Slide fade right")]),_:1}),t(s,{class:"ma1",transition:"slide-fade-down"},{default:e(()=>[n("Slide fade down")]),_:1}),t(s,{class:"ma1",transition:"slide-fade-left"},{default:e(()=>[n("Slide fade left")]),_:1}),t(s,{class:"ma1",transition:"scale"},{default:e(()=>[n("Scale")]),_:1}),t(s,{class:"ma1",transition:"bounce"},{default:e(()=>[n("Bounce")]),_:1}),t(s,{class:"ma1",transition:"twist"},{default:e(()=>[n("Twist")]),_:1})]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Events")]),_:1}),O,K,M,t(a,{"content-class":"text-center","app-classes-string":"align-center"},{pug:e(()=>[n(`w-confirm(
  @cancel="$waveui.notify&#40;'Canceled.', 'error'&#41;"
  @confirm="$waveui.notify&#40;'Confirmed!', 'success'&#41;") Ask for confirm`)]),html:e(()=>[n(`<w-confirm
  @cancel="$waveui.notify('Canceled.', 'error')"
  @confirm="$waveui.notify('Confirmed!', 'success')">
  Ask for confirm
</w-confirm>
`)]),default:e(()=>[t(s,{onCancel:c[0]||(c[0]=h=>l.$waveui.notify("Canceled.","error")),onConfirm:c[1]||(c[1]=h=>l.$waveui.notify("Confirmed!","success"))},{default:e(()=>[n("Ask for confirm")]),_:1})]),_:1}),t(i,{h2:""},{default:e(()=>[n("Disable prompt")]),_:1}),W,t(a,{"content-class":"w-flex justify-center","app-classes-string":"justify-center align-center"},{pug:e(()=>[n(`w-card(title="My user details" style="max-width: 300px")
  .w-flex.align-center.my4
    w-icon.pa6.bd1(xl bg-color="grey-light6" color="blue-dark1") wi-wave
    w-input.ml4(v-model="newUsername") Username
  .w-flex.justify-end.align-center
    w-transition-slide-fade(left)
      strong.mr3(v-if="saved" :class="hasEdits ? 'green' : 'grey'") `+d("{{ hasEdits ? 'Saved!' : 'No changes.' }}")+`
    w-confirm(
      :main-button="{ width: '5.5rem', 'bg-color': hasEdits ? 'success' : 'primary' }"
      :disable-prompt="!hasEdits"
      @click="!hasEdits && saveDetails&#40;&#41;"
      @confirm="saveDetails"
      @cancel="newUsername = username")
      w-icon.mr1 wi-check
      | `+d("{{ hasEdits ? 'Save' : 'OK' }}"),1)]),html:e(()=>[n(`<w-card title="My user details" style="max-width: 300px">
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
        `+d("{{ hasEdits ? 'Saved!' : 'No changes.' }}")+`
      </strong>
    </w-transition-slide-fade>
    <w-confirm
      :main-button="{ width: '5.5rem', 'bg-color': hasEdits ? 'success' : 'primary' }"
      :disable-prompt="!hasEdits"
      @click="!hasEdits && saveDetails()"
      @confirm="saveDetails"
      @cancel="newUsername = username">
      <w-icon class="mr1">wi-check</w-icon>
      `+d("{{ hasEdits ? 'Save' : 'OK' }}")+`
    </w-confirm>
  </div>
</w-card>`,1)]),js:e(()=>[n(`data: () => ({
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
},`)]),default:e(()=>[t(C,{title:"My user details",style:{"max-width":"300px"}},{default:e(()=>[o("div",H,[t(k,{class:"pa6 bd1",xl:"","bg-color":"grey-light6",color:"blue-dark1"},{default:e(()=>[n("wi-wave")]),_:1}),t(x,{class:"ml4",modelValue:l.newUsername,"onUpdate:modelValue":c[2]||(c[2]=h=>l.newUsername=h)},{default:e(()=>[n("Username")]),_:1},8,["modelValue"])]),o("div",G,[t(A,{left:""},{default:e(()=>[l.saved?(p(),w("strong",{key:0,class:T(["mr3",m.hasEdits?"green":"grey"])},d(m.hasEdits?"Saved!":"No changes."),3)):D("",!0)]),_:1}),t(s,{"main-button":{width:"5.5rem","bg-color":m.hasEdits?"success":"primary"},"disable-prompt":!m.hasEdits,onClick:c[3]||(c[3]=h=>!m.hasEdits&&m.saveDetails()),onConfirm:m.saveDetails,onCancel:c[4]||(c[4]=h=>l.newUsername=l.username)},{default:e(()=>[t(k,{class:"mr1"},{default:e(()=>[n("wi-check")]),_:1}),n(d(m.hasEdits?"Save":"OK"),1)]),_:1},8,["main-button","disable-prompt","onConfirm"])])]),_:1})]),_:1})])}const Q={data:()=>({bgColor:"green",disablePrompt:!0,username:"waveui",newUsername:"waveui",saved:!1}),computed:{hasEdits(){return this.newUsername!==this.username}},methods:{async saveDetails(){this.saved=!0,await new Promise(l=>setTimeout(l,2e3)),this.username=this.newUsername,this.saved=!1}},mounted(){setTimeout(()=>{this.bgColor="amber"},5e3)}},X=g(Q,[["render",J]]),Z=o("div",{class:"w-divider my12"},null,-1);function nn(l,c,b,_,y,m){const u=r("title-link"),i=r("component-api");return p(),w("div",null,[Z,t(u,{class:"title1",h2:""},{default:e(()=>[n("API")]),_:1}),t(i,{class:"mt0",items:m.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(i,{items:l.slots,title:"Slots"},null,8,["items"]),t(i,{items:m.events,title:"Events"},null,8,["items"])])}const en={color:`Applies a color to the main button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the main button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,icon:"Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",mainButton:'For more customization, this prop accepts an object of props to pass down to the main button (all the options that the <strong class="code">w-button</strong> component can handle).',cancel:'Accept either <code>false</code> to remove the button, a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Cancel".',confirm:'Accept either a <span class="code">String</span> for the button label, or an <span class="code">Object</span> in order to define <strong class="code">w-button</strong> props to further customize it (all the options that the <strong class="code">w-button</strong> component can handle).<br>In addition to all the <strong class="code">w-button</strong> props, the object also accepts a <code>label</code> key to customize the button label.<br>The default button label is "Confirm".',inline:"Displays the question inline with the buttons, inside the menu.",menu:'For more customization, this prop accepts an object of props to pass down to the menu (all the options that the <strong class="code">w-menu</strong> component can handle).',tooltip:'Accept either <code>false</code> for no tooltip (by default), a <span class="code">String</span> to display as a tooltip on the main button, or an <span class="code">Object</span> in order to define <strong class="code">w-tooltip</strong> props to further customize the tooltip (all the options that the <strong class="code">w-tooltip</strong> component can handle).<br>In addition to all the <strong class="code">w-tooltip</strong> props, the object also accepts a <code>label</code> key to provide the tooltip string in the object.<br>By default, the tooltip shows on hover, and at the bottom.',noArrow:"By default the confirmation menu displays an arrow pointing toward the main button.<br>The arrow can simply be removed with this prop.",top:"Places the menu above the main button.",bottom:"Places the below the main button.",left:"Places the menu on the left of the main button.",right:"Places the menu at the right of the main button.",alignTop:"Aligns the top of the menu with the top of the main button.",alignBottom:"Aligns the bottom of the menu with the bottom of the main button.",alignLeft:"Aligns the left side of the menu with the left side of the main button.",alignRight:"Aligns the right side of the menu with the right side of the main button.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',persistent:"When set to <code>true</code>, clicking outside of the menu will not close the menu."},tn={default:{description:"The main button contents."},question:{description:"The question to ask for confirmation in the menu."},cancel:{description:"The cancel button contents, in the menu."},confirm:{description:"The confirm button contents, in the menu."}},on={cancel:"Emitted on cancel button click. The menu will also close.",confirm:"Emitted on confirm button click. The menu will also close."},sn={data:()=>({propsDescs:en,slots:tn}),computed:{props(){return v.props},events(){return v.emits.reduce((l,c)=>(l[c]={description:on[c]||""})&&l,{})}}},an=g(sn,[["render",nn]]);function ln(l,c,b,_,y,m){const u=r("ui-component-title"),i=r("examples"),s=r("api");return p(),w("main",null,[t(u,null,{default:e(()=>[n("w-confirm")]),_:1}),t(i),t(s)])}const cn={components:{Examples:X,Api:an}},mn=g(cn,[["render",ln]]);export{mn as default};
