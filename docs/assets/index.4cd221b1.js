import{_ as y,o as b,u as N}from"./index.76d51146.js";import{r as c,o as g,f as _,a as e,w as o,b as n,h as s,d as P,e as t,j as T,v as V,m as C}from"./vendor.c30f2c6c.js";const E=t("Notification manager"),j=n("p",null,[t("The built-in notification manager can be used via "),n("code",null,"this.$waveui.notify()"),t(" from any component.")],-1),B=n("div",{class:"title3"},"Pros",-1),H=t("Very convenient and fast to use"),U=t("Handles the stacking of simultaneous notifications"),D=n("div",{class:"title3 mt4"},"Cons",-1),z=t("Less flexible than "),O=n("strong",{class:"code mx1"},"w-notification",-1),W=t(` in terms of layout (no slot available)
`),F=t("Simple use of the notify method"),R=n("p",null,"The notify method takes up to 3 parameters, here is the syntax:",-1),Y=t("this.$waveui.notify({String} message, {String} type?, {Number} timeout?)"),L=n("p",null,[t("The default type is "),n("code",null,"info"),t(" and the default timeout is "),n("code",null,"4000"),t("."),n("br"),t(`
A timeout of `),n("code",null,"0"),t(" will keep the notification visible permanently (until dismissed).")],-1),q=t("Notify info"),G=t("Notify success"),J=t("Notify warning"),K=t("Permanent error"),Q=t(`w-button.ma1(@click="$waveui.notify&#40;'Information.'&#41;" bg-color="info") Notify info
w-button.ma1(@click="$waveui.notify&#40;'Success!', 'success'&#41;" bg-color="success") Notify success
w-button.ma1(@click="$waveui.notify&#40;'Warning!', 'warning'&#41;" bg-color="warning") Notify warning
w-button.ma1(@click="$waveui.notify&#40;'Error :(', 'error', 0&#41;" bg-color="error") Permanent error`),X=t(`<w-button @click="$waveui.notify('Information.')" bg-color="info">
  Notify info
</w-button>

<w-button @click="$waveui.notify('Success!', 'success')" bg-color="success">
  Notify success
</w-button>

<w-button @click="$waveui.notify('Warning!', 'warning')" bg-color="warning">
  Notify warning
</w-button>

<w-button @click="$waveui.notify('Error :(', 'error', 0)" bg-color="error">
  Permanent error
</w-button>
`),Z=t("If you need more control"),tt=n("p",null,[t("The "),n("code",null,"notify"),t(` method also accepts a single Object parameter which will accept all the options
of the `),n("strong",{class:"code"},"w-alert"),t(" component, plus the "),n("code",null,"message"),t(" and "),n("code",null,"timeout"),t(" options."),n("br"),t(`
E.g.`)],-1),ot=t(`this.$waveui.notify({
  message: 'Message.',
  timeout: 3000, // ms.
  ... // Other options from w-alert.
})
`),it=n("p",null,[t("Here is an example of a custom notification using a few different "),n("strong",{class:"code"},"w-alert"),t(` options.
`)],-1),nt=t("Notify custom"),et=t('w-button(@click="notify" bg-color="info") Notify custom'),at=t(`<w-button @click="notify" bg-color="info">
  Notify custom
</w-button>`),st=t(`methods: {
  notify () {
    this.$waveui.notify({
      message: 'Warning',
      timeout: 6000,
      bgColor: 'orange-light5',
      color: 'warning',
      dismiss: false,
      shadow: true,
      round: true,
      sm: true,
      icon: 'wi-star'
    })
  }
}
`),lt=n("div",{class:"title4"},[n("strong",null,"Caution:"),t(" You could easily cause an "),n("strong",{class:"black"},"infinite loop"),t(` by triggering a
notification from the template using this code for instance:`)],-1),ct=n("p",{class:"mt4"},`Indeed, if you write the above expression directly in a component's template without condition
around it, the notification will be triggered, which will trigger the Vue re-rendering which
will re-read and execute this expression and so on.
`,-1),rt=t("Notification manager tweaking"),dt=n("p",null,`The global configuration allows you to override the default side and transition of the
notification manager.`,-1),ft=t(`new WaveUI({
  notificationManager: {
    align: 'right', // Or 'left'.
    transition: 'default' // Sliding from the side by default.
  }
})
`),ut=t("Align to the left or right"),ht=n("p",null,[t("Change the value of the "),n("strong",{class:"code"},"align"),t(" option, in the above global config, to "),n("code",null,"left"),t(`
or `),n("code",null,"right"),t(".")],-1),mt=t("Change side & notify"),pt=t(`After switching side, you can also test the different notifications from the above examples.
`),wt=t("Different transitions"),bt=n("p",null,[t("The default transition is "),n("code",null,"slide-left"),t(` when the notification manager is on the right and
`),n("code",null,"slide-right"),t(` when it's on the left.
`)],-1),gt=n("div",{class:"title4"},"Pick a transition",-1),_t={class:"w-flex align-center"},vt={class:"xs6 md4 lg3"},yt={class:"ml2"},St={key:0,class:"ml2"},kt=t("Notify"),$t={class:"mt4"},Nt=t("Change the value of the "),Tt=n("strong",{class:"code"},"transition",-1),Vt=t(` option, in the above global config,
to `),Ct=t("."),At=t("You could even"),Mt={class:"ml1",href:"https://vuejs.org/v2/guide/transitions.html"},xt=t("create your own transition"),It=t("mdi mdi-open-in-new"),Pt=t("."),Et=t("Styling"),jt=n("p",null,[t("By default, the notification manager is 280px-wide and all the notifications will inherit this width."),n("br"),t(`
You can override this via CSS. For instance:`)],-1),Bt=t(`.w-notification-manager {width: 100%;max-width: 500px;}
`),Ht=n("span",{class:"code"},"w-notification",-1),Ut=t("The "),Dt=n("span",{class:"code"},"w-notification",-1),zt=t(" component is pretty much a wrapper around the "),Ot=n("span",{class:"code"},"w-alert",-1),Wt=t(`
component with added functionalities.`),Ft=n("br",null,null,-1),Rt=t(`
it accepts all the parameters of the `),Yt=n("span",{class:"code"},"w-alert",-1),Lt=t(` component, plus positioning,
transitioning & timeout options.
`),qt=t("Notification position"),Gt=n("p",null,"Notifications have a fixed position by default (positioned relative to the viewport).",-1),Jt=t(`data: () => ({
  notification: {
    show: false,
    position: ['bottom', 'right']
  }
})
`),Kt=t("Notification timeout"),Qt=n("p",null,"Notifications have no timeout by default. But you can add one to hide the notification by itself after some time.",-1),Xt=n("p",null,[t("Setting the timeout to "),n("code",null,"0"),t(" as a number or a string will cancel the timeout and the notification will stay visible.")],-1),Zt=n("span",{class:"ml2"},"ms",-1),to=t(`data: () => ({
  showNotification: false,
  timeout: 2000
})
`),oo=t("Transitions"),io={class:"ml2"},no=n("div",{class:"title4 mt3"},"Notification position",-1),eo=t(`data: () => ({
  notification: {
    show: false,
    position: ['bottom', 'right']
  },
  transition: '',
  transitions: [
    { label: 'Default', value: '' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'Scale', value: 'scale' },
    { label: 'Twist', value: 'twist' },
    { label: 'Fade', value: 'fade' },
    { label: 'Slide fade left', value: 'slide-fade-left' },
    { label: 'Slide fade right', value: 'slide-fade-right' },
    { label: 'Slide fade top', value: 'slide-fade-up' },
    { label: 'Slide fade bottom', value: 'slide-fade-down' },
    { label: 'Scale fade', value: 'scale-fade' },
    { label: 'None', value: false }
  ]
})`);function ao(i,a,S,k,$,f){const u=c("w-list"),r=c("title-link"),h=c("ssh-pre"),d=c("w-button"),p=c("example"),w=c("alert"),m=c("w-radios"),A=c("w-icon"),v=c("w-notification"),M=c("w-input"),x=c("w-flex"),I=c("w-tabs");return g(),_("div",null,[e(I,{class:"mt4",items:2,"content-class":"pl4"},{"item-title.1":o(()=>[E]),"item-content.1":o(()=>[j,B,e(u,{icon:"wi-check",items:2},{"item.1":o(()=>[H]),"item.2":o(()=>[U]),_:1}),D,e(u,{icon:"wi-minus",items:1},{"item.1":o(()=>[z,O,W]),_:1}),e(r,{h2:""},{default:o(()=>[F]),_:1}),R,e(h,{language:"js"},{default:o(()=>[Y]),_:1}),L,e(p,null,{pug:o(()=>[Q]),html:o(()=>[X]),default:o(()=>[e(d,{class:"ma1",onClick:a[0]||(a[0]=l=>i.$waveui.notify("Information.")),"bg-color":"info"},{default:o(()=>[q]),_:1}),e(d,{class:"ma1",onClick:a[1]||(a[1]=l=>i.$waveui.notify("Success!","success")),"bg-color":"success"},{default:o(()=>[G]),_:1}),e(d,{class:"ma1",onClick:a[2]||(a[2]=l=>i.$waveui.notify("Warning!","warning")),"bg-color":"warning"},{default:o(()=>[J]),_:1}),e(d,{class:"ma1",onClick:a[3]||(a[3]=l=>i.$waveui.notify("Error :(","error",0)),"bg-color":"error"},{default:o(()=>[K]),_:1})]),_:1}),e(r,{h2:""},{default:o(()=>[Z]),_:1}),tt,e(h,{language:"js"},{default:o(()=>[ot]),_:1}),it,e(p,null,{pug:o(()=>[et]),html:o(()=>[at]),js:o(()=>[st]),default:o(()=>[e(d,{onClick:f.notify,"bg-color":"info"},{default:o(()=>[nt]),_:1},8,["onClick"])]),_:1}),e(w,{class:"mt12",warning:""},{default:o(()=>[lt,n("p",null,[n("code",null,s("{{ $waveui.notify('test') }}"),1)]),ct]),_:1}),e(r,{h2:""},{default:o(()=>[rt]),_:1}),dt,e(h,{language:"js"},{default:o(()=>[ft]),_:1}),e(r,{h3:""},{default:o(()=>[ut]),_:1}),ht,e(d,{onClick:f.switchNotificationManagerSide},{default:o(()=>[mt]),_:1},8,["onClick"]),e(w,{tip:""},{default:o(()=>[pt]),_:1}),e(r,{h3:""},{default:o(()=>[wt]),_:1}),bt,gt,n("div",_t,[n("div",vt,[e(m,{class:"ma1",modelValue:i.notifManagerTransition,"onUpdate:modelValue":a[4]||(a[4]=l=>i.notifManagerTransition=l),items:i.transitionsForManager,onInput:f.switchNotifMgrTransition},{item:o(({item:l})=>[n("code",yt,s(l.value||(l.value===!1?"false":"''")),1),l.value?P("",!0):(g(),_("span",St,"("+s(l.label)+")",1))]),_:1},8,["modelValue","items","onInput"])]),e(d,{class:"ma1",onClick:a[5]||(a[5]=l=>i.$waveui.notify("Test"))},{default:o(()=>[kt]),_:1})]),n("p",$t,[Nt,Tt,Vt,n("code",null,s(i.notifManagerTransition?`'${i.notifManagerTransition}'`:i.notifManagerTransition),1),Ct]),e(w,{tip:""},{default:o(()=>[At,n("a",Mt,[xt,e(A,{class:"ml1",md:""},{default:o(()=>[It]),_:1})]),Pt]),_:1}),e(r,{h3:""},{default:o(()=>[Et]),_:1}),jt,e(h,{language:"css"},{default:o(()=>[Bt]),_:1})]),"item-title.2":o(()=>[Ht]),"item-content.2":o(()=>[e(w,{info:""},{default:o(()=>[Ut,Dt,zt,Ot,Wt,Ft,Rt,Yt,Lt]),_:1}),e(r,{h2:""},{default:o(()=>[qt]),_:1}),Gt,e(p,{"content-class":"mt2"},{pug:o(()=>[t(`w-button.mr6(
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em")
  | `+s("{{ notification.show ? 'Hide' : 'Show' }}")+` notification

w-radios.mr6(
  v-model="notification.position[0]"
  :items="[{ label: 'top' }, { label: 'bottom' }]"
  inline)

w-radios(
  v-model="notification.position[1]"
  :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
  inline)

w-notification(
  v-show="notification.show"
  success
  plain
  round
  shadow
  transition="bounce"
  :[notification.position[0]]="true"
  :[notification.position[1]]="true")
  | The alert is fixed on `+s("{{ notification.position[0] }}")+" "+s("{{ notification.position[1] }}")+".",1)]),html:o(()=>[t(`<w-button
  class="mr6"
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em">
  `+s("{{ notification.show ? 'Hide' : 'Show' }}")+` notification
</w-button>

<w-radios
  class="mr6"
  v-model="notification.position[0]"
  :items="[{ label: 'top' }, { label: 'bottom' }]"
  inline>
</w-radios>

<w-radios
  v-model="notification.position[1]"
  :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
  inline>
</w-radios>

<w-notification
  v-show="notification.show"
  success
  plain
  round
  shadow
  transition="bounce"
  :[notification.position[0]]="true"
  :[notification.position[1]]="true">
  The alert is fixed on `+s("{{ notification.position[0] }}")+" "+s("{{ notification.position[1] }}")+`.
</w-notification>`,1)]),js:o(()=>[Jt]),default:o(()=>[e(d,{class:"mr6",onClick:a[6]||(a[6]=l=>i.notification.show=!i.notification.show),color:"primary",outline:"",width:"8.5em"},{default:o(()=>[t(s(i.notification.show?"Hide":"Show")+" notification",1)]),_:1}),e(m,{class:"my1 mr6",modelValue:i.notification.position[0],"onUpdate:modelValue":a[7]||(a[7]=l=>i.notification.position[0]=l),items:[{label:"top"},{label:"bottom"}],inline:""},null,8,["modelValue"]),e(m,{class:"my1",modelValue:i.notification.position[1],"onUpdate:modelValue":a[8]||(a[8]=l=>i.notification.position[1]=l),items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},null,8,["modelValue"]),T(e(v,C({success:"",plain:"",round:"",shadow:"",transition:"bounce"},{[i.notification.position[0]]:!0,[i.notification.position[1]]:!0}),{default:o(()=>[t("The alert is fixed on "+s(i.notification.position[0])+" "+s(i.notification.position[1])+".",1)]),_:1},16),[[V,i.notification.show]])]),_:1}),e(r,{h2:""},{default:o(()=>[Kt]),_:1}),Qt,Xt,e(p,{"content-class":"mt2 pos-relative ovh"},{pug:o(()=>[t(`w-button.mr6(
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em")
  | `+s("{{ showNotification ? 'Hide' : 'Show' }}")+` notification
w-input.d-iflex(
  v-model="timeout"
  type="number"
  step="500"
  min="0"
  label="Timeout:"
  label-position="left"
  style="max-width: 110px")
span.ml2 ms

w-notification(
  v-model="showNotification"
  :timeout="timeout"
  warning
  plain
  round
  shadow
  absolute)
  | This alert is
  | `+s("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+".",1)]),html:o(()=>[t(`<w-button
  class="mr6"
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em">
  `+s("{{ showNotification ? 'Hide' : 'Show' }}")+` notification
</w-button>

<w-input
  class="d-iflex"
  v-model="timeout"
  type="number"
  step="500"
  min="0"
  label="Timeout:"
  label-position="left"
  style="max-width: 110px">
</w-input>

<span class="ml2">ms</span>

<w-notification
  v-model="showNotification"
  :timeout="timeout"
  warning
  plain
  round
  shadow
  absolute>
  This alert is
  `+s("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+`.
</w-notification>`,1)]),js:o(()=>[to]),default:o(()=>[e(d,{class:"mr6",onClick:a[9]||(a[9]=l=>i.notification2.show=!i.notification2.show),color:"primary",outline:"",width:"8.5em"},{default:o(()=>[t(s(i.notification2.show?"Hide":"Show")+" notification",1)]),_:1}),e(M,{class:"d-iflex",modelValue:i.notification2.timeout,"onUpdate:modelValue":a[10]||(a[10]=l=>i.notification2.timeout=l),type:"number",step:"500",min:"0",label:"Timeout:","label-position":"left",style:{"max-width":"110px"}},null,8,["modelValue"]),Zt,e(v,{modelValue:i.notification2.show,"onUpdate:modelValue":a[11]||(a[11]=l=>i.notification2.show=l),timeout:i.notification2.timeout,warning:"",plain:"",round:"",shadow:"",dismiss:"",absolute:""},{default:o(()=>[t(`This alert is
`+s(~~i.notification2.timeout?`auto-hiding after ${i.notification2.timeout} ms`:"not auto-hiding")+".",1)]),_:1},8,["modelValue","timeout"])]),_:1}),e(r,{h2:""},{default:o(()=>[oo]),_:1}),e(p,null,{pug:o(()=>[t(`w-flex(wrap align-center)
  w-button.mr3(
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em")
    | `+s("{{ notification.show ? 'Hide' : 'Show' }}")+` notification
  w-radios.my4(v-model="transition" :items="transitions")
    template(#item="{ item }")
      | `+s("{{ item.label }}")+`
      code.ml2 `+s(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
.title4.mt3 Notification position

w-radios.mr6(
  v-model="notification.position[0]"
  :items="[{ label: 'top' }, { label: 'bottom' }]"
  inline)

w-radios(
  v-model="notification.position[1]"
  :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
  inline)

w-notification(
  v-show="notification.show"
  info
  color="primary"
  round
  shadow
  :transition="transition"
  :[notification.position[0]]="true"
  :[notification.position[1]]="true")
  | The alert is fixed on `+s("{{ notification.position[0] }}")+" "+s("{{ notification.position[1] }}")+".",1)]),html:o(()=>[t(`<w-flex wrap align-center>
  <w-button
    class="mr3"
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em">
    `+s("{{ notification.show ? 'Hide' : 'Show' }}")+` notification
  </w-button>

  <w-radios
    class="my4"
    v-model="transition"
    :items="transitions">
    <template #item="{ item }">
      `+s("{{ item.label }}")+`
      <code class="ml2">
        `+s(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
      </code>
    </template>
  </w-radios>
</w-flex>

<div class="title4 mt3">
  Notification position
</div>

<w-radios class="mr6">
  v-model="notification.position[0]"
  :items="[{ label: 'top' }, { label: 'bottom' }]"
  inline>
</w-radios>

<w-radios
  v-model="notification.position[1]"
  :items="[{ label: 'left' }, { label: 'center' }, { label: 'right' }]"
  inline>
</w-radios>

<w-notification
  v-show="notification.show"
  info
  color="primary"
  round
  shadow
  :transition="transition"
  :[notification.position[0]]="true"
  :[notification.position[1]]="true">
  The alert is fixed on `+s("{{ notification.position[0] }}")+" "+s("{{ notification.position[1] }}")+`.
</w-notification>`,1)]),js:o(()=>[eo]),default:o(()=>[e(x,{wrap:"","align-center":""},{default:o(()=>[e(d,{class:"mr3",onClick:a[12]||(a[12]=l=>i.notification3.show=!i.notification3.show),color:"primary",outline:"",width:"8.5em"},{default:o(()=>[t(s(i.notification3.show?"Hide":"Show")+" notification",1)]),_:1}),e(m,{class:"my4",modelValue:i.transition,"onUpdate:modelValue":a[13]||(a[13]=l=>i.transition=l),items:i.transitions},{item:o(({item:l})=>[t(s(l.label),1),n("code",io,s(l.value||(l.value===!1?"false":"''")),1)]),_:1},8,["modelValue","items"])]),_:1}),no,e(m,{class:"my1 mr6",modelValue:i.notification3.position[0],"onUpdate:modelValue":a[14]||(a[14]=l=>i.notification3.position[0]=l),items:[{label:"top"},{label:"bottom"}],inline:""},null,8,["modelValue"]),e(m,{class:"my1",modelValue:i.notification3.position[1],"onUpdate:modelValue":a[15]||(a[15]=l=>i.notification3.position[1]=l),items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},null,8,["modelValue"]),T(e(v,C({info:"",color:"primary",round:"",shadow:"",transition:i.transition},{[i.notification3.position[0]]:!0,[i.notification3.position[1]]:!0}),{default:o(()=>[t("The alert is fixed on "+s(i.notification3.position[0])+" "+s(i.notification3.position[1])+".",1)]),_:1},16,["transition"]),[[V,i.notification3.show]])]),_:1})]),_:1})])}const so={data:()=>({config:b,notification:{show:!1,position:["bottom","right"]},notification2:{show:!1,timeout:2e3},notification3:{show:!1,position:["bottom","right"]},transition:"",notifManagerTransition:"default",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Slide fade left",value:"slide-fade-left"},{label:"Slide fade right",value:"slide-fade-right"},{label:"Slide fade up",value:"slide-fade-up"},{label:"Slide fade down",value:"slide-fade-down"},{label:"Scale fade",value:"scale-fade"},{label:"None",value:!1}],transitionsForManager:[{label:"Default",value:"default"},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Slide fade left",value:"slide-fade-left"},{label:"Slide fade right",value:"slide-fade-right"},{label:"Slide fade up",value:"slide-fade-up"},{label:"Slide fade down",value:"slide-fade-down"},{label:"Scale fade",value:"scale-fade"},{label:"None",value:!1}]}),methods:{switchNotificationManagerSide(){const{align:i}=b.notificationManager;b.notificationManager.align=i==="left"?"right":"left",this.$nextTick(()=>this.$waveui.notify("Information."))},switchNotifMgrTransition(){b.notificationManager.transition=this.notifManagerTransition,this.$nextTick(()=>this.$waveui.notify("Information."))},notify(){this.$waveui.notify({message:"Warning",timeout:6e3,bgColor:"orange-light5",color:"warning",dismiss:!1,shadow:!0,round:!0,sm:!0,icon:"wi-star"})}}};var lo=y(so,[["render",ao]]);const co={class:"mt12 pt6"},ro=n("span",{class:"code"},"<w-notification>",-1),fo=t(" API");function uo(i,a,S,k,$,f){const u=c("title-link"),r=c("component-api");return g(),_("div",co,[e(u,{class:"title1",h2:"",slug:"api"},{default:o(()=>[ro,fo]),_:1}),e(r,{class:"mt0",items:f.props,descriptions:i.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(r,{items:i.slots,title:"Slots"},null,8,["items"]),e(r,{items:f.events,title:"Events"},null,8,["items"])])}const ho={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.',transition:'Applies a particular transition to the notification when showing and hiding.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example.',timeout:"Sets a timer to hide a visible notification after a certain amount of milliseconds. E.g. <code>2000</code> will hide the notification after 2 seconds. A value of <code>0</code> or empty string will keep the notification persistent (no timeout).",absolute:"Sets the CSS position of the notification to <code>absolute</code> (fixed by default).",top:"Places the notification at the top of the screen or at the top of its container if the <code>absolute</code> prop is set to true.",bottom:"Places the notification at the bottom of the screen or at the bottom of its container if the <code>absolute</code> prop is set to true.",left:"Places the notification at the left of the screen or at the left of its container if the <code>absolute</code> prop is set to true.",right:"Places the notification at the right of the screen or at the right of its container if the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the notification.",success:"Sets the type of the notification, applying the <code>success</code> class (green color) and adding a success icon on the left in the notification.",info:"Sets the type of the notification, applying the <code>info</code> class (blue color) and adding an info icon on the left in the notification.",warning:"Sets the type of the notification, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the notification.",error:"Sets the type of the notification, applying the <code>error</code> class (red color) and adding an error icon on the left in the notification.",color:`Applies a color to the notification's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the notification's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the notification.",tile:"Removes the default border-radius and sets sharp edges on the notification.",round:"Sets a maximum border-radius on the corners of the notification, giving it a round look.",plain:'Emphasizes a "typed" notification (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',dismiss:"Adds a close button (cross icon) on the right in the notification. Clicking on this button hides the notification.",noBorder:"Removes the default border from the notification container.",borderLeft:"Adds a left border on the notification. Only one side-border can be applied at the same time.",borderRight:"Adds a right border on the notification. Only one side-border can be applied at the same time.",borderTop:"Adds a top border on the notification. Only one side-border can be applied at the same time.",borderBottom:"Adds a bottom border on the notification. Only one side-border can be applied at the same time.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",xs:"Sets the size of the notification.",sm:"Sets the size of the notification.",md:"Sets the size of the notification.",lg:"Sets the size of the notification.",xl:"Sets the size of the notification."},mo={default:{description:"The notification content."}},po={input:"Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on notification dismiss/hide."},wo={data:()=>({propsDescs:ho,slots:mo}),computed:{props(){return N.props},events(){return N.emits.reduce((i,a)=>(i[a]={description:po[a]||""})&&i,{})}}};var bo=y(wo,[["render",uo]]);const go=t("Built-in notification manager & "),_o=n("span",{class:"code"},"w-notification",-1);function vo(i,a,S,k,$,f){const u=c("ui-component-title"),r=c("examples"),h=c("api");return g(),_("main",null,[e(u,{code:!1,slug:"notification-manager-and-w-notification"},{default:o(()=>[go,_o]),_:1}),e(r),e(h)])}const yo={components:{Examples:lo,Api:bo}};var $o=y(yo,[["render",vo]]);export{$o as default};
