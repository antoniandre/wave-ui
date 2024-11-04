import{r,o as h,g as v,d as i,a,w as n,b as o,t as l,f as E,l as T,v as V,m as C,_ as k,N as g,S as A}from"./index-DM46aIYM.js";const B={class:"w-flex align-center"},H={class:"xs6 md4 lg3"},U={class:"ml2"},D={key:0,class:"ml2"},x={class:"mt4"},z={class:"ml1",href:"https://vuejs.org/guide/built-ins/transition.html"},O={class:"ml2"};function W(e,t,S,$,N,p){const u=r("alert"),m=r("w-list"),d=r("title-link"),w=r("ssh-pre"),f=r("w-button"),b=r("example"),c=r("w-radios"),M=r("w-icon"),y=r("w-notification"),I=r("w-input"),P=r("w-flex"),j=r("w-tabs");return h(),v("div",null,[t[86]||(t[86]=i("div",{class:"title3 my6"},"You have the choice to use one or the other, or both.",-1)),a(j,{class:"mt4",items:2,"content-class":"pl4","model-value":"0"},{"item-title.1":n(()=>t[16]||(t[16]=[o("Notification manager")])),"item-content.1":n(()=>[t[54]||(t[54]=i("p",null,[o("The built-in notification manager can be used via "),i("code",null,"$waveui.notify()"),o(" from any component."),i("br")],-1)),a(u,{tip:""},{default:n(()=>t[17]||(t[17]=[o("Note that you can access the "),i("code",null,"$waveui",-1),o(" object with "),i("code",null,"const $waveui = inject('$waveui')",-1),o(" in composition API, or from "),i("code",null,"this",-1),o(" if not using the composition API.")])),_:1}),t[55]||(t[55]=i("div",{class:"title3"},"Pros",-1)),a(m,{icon:"wi-check",items:2},{"item.1":n(()=>t[18]||(t[18]=[o("Very convenient and fast to use")])),"item.2":n(()=>t[19]||(t[19]=[o("Handles the stacking of simultaneous notifications")])),_:1}),t[56]||(t[56]=i("div",{class:"title3 mt4"},"Cons",-1)),a(m,{icon:"wi-minus",items:1},{"item.1":n(()=>t[20]||(t[20]=[o("Less flexible than "),i("strong",{class:"code mx1"},"w-notification",-1),o(` in terms of layout (no slot available)
`)])),_:1}),a(d,{h2:""},{default:n(()=>t[21]||(t[21]=[o("Simple use of the notify method")])),_:1}),t[57]||(t[57]=i("p",null,"The notify method takes up to 3 parameters, here is the syntax:",-1)),a(w,{language:"js",dark:e.$store.state.darkMode},{default:n(()=>t[22]||(t[22]=[o("$waveui.notify({String} message, {String} type?, {Number} timeout?)")])),_:1},8,["dark"]),t[58]||(t[58]=i("p",null,[o("Access "),i("code",null,"$waveui"),o(" in composition API, or from "),i("code",null,"this"),o(" if not using the composition API.")],-1)),a(w,{language:"js",dark:e.$store.state.darkMode},{default:n(()=>t[23]||(t[23]=[o(`import { inject } from 'vue'
const $waveui = inject('$waveui')`)])),_:1},8,["dark"]),t[59]||(t[59]=i("p",null,[o("The default type is "),i("code",null,"info"),o(" and the default timeout is "),i("code",null,"4000"),o("."),i("br"),o(`
A timeout of `),i("code",null,"0"),o(" will keep the notification visible permanently (until dismissed).")],-1)),a(b,null,{pug:n(()=>t[28]||(t[28]=[o(`w-button.ma1(@click="$waveui.notify&#40;'Information.'&#41;" bg-color="info") Notify info
w-button.ma1(@click="$waveui.notify&#40;'Success!', 'success'&#41;" bg-color="success") Notify success
w-button.ma1(@click="$waveui.notify&#40;'Warning!', 'warning'&#41;" bg-color="warning") Notify warning
w-button.ma1(@click="$waveui.notify&#40;'Error :(', 'error', 0&#41;" bg-color="error") Permanent error`)])),html:n(()=>t[29]||(t[29]=[o(`<w-button @click="$waveui.notify('Information.')" bg-color="info">
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
`)])),default:n(()=>[a(f,{class:"ma1",onClick:t[0]||(t[0]=s=>e.$waveui.notify("Information.")),"bg-color":"info"},{default:n(()=>t[24]||(t[24]=[o("Notify info")])),_:1}),a(f,{class:"ma1",onClick:t[1]||(t[1]=s=>e.$waveui.notify("Success!","success")),"bg-color":"success"},{default:n(()=>t[25]||(t[25]=[o("Notify success")])),_:1}),a(f,{class:"ma1",onClick:t[2]||(t[2]=s=>e.$waveui.notify("Warning!","warning")),"bg-color":"warning"},{default:n(()=>t[26]||(t[26]=[o("Notify warning")])),_:1}),a(f,{class:"ma1",onClick:t[3]||(t[3]=s=>e.$waveui.notify("Error :(","error",0)),"bg-color":"error"},{default:n(()=>t[27]||(t[27]=[o("Permanent error")])),_:1})]),_:1}),a(d,{h2:""},{default:n(()=>t[30]||(t[30]=[o("If you need more control")])),_:1}),t[60]||(t[60]=i("p",null,[o("The "),i("code",null,"notify"),o(` method also accepts a single Object parameter which will accept all the options
of the `),i("strong",{class:"code"},"w-alert"),o(" component, plus the "),i("code",null,"message"),o(" and "),i("code",null,"timeout"),o(" options."),i("br"),o(`
E.g.`)],-1)),a(w,{language:"js",dark:e.$store.state.darkMode},{default:n(()=>t[31]||(t[31]=[o(`$waveui.notify({
  message: 'Message.',
  timeout: 3000, // ms.
  ... // Other options from w-alert.
})
`)])),_:1},8,["dark"]),t[61]||(t[61]=i("p",null,[o("Here is an example of a custom notification using a few different "),i("strong",{class:"code"},"w-alert"),o(` options.
`)],-1)),a(b,null,{pug:n(()=>t[33]||(t[33]=[o('w-button(@click="notify" bg-color="info") Notify custom')])),html:n(()=>t[34]||(t[34]=[o(`<w-button @click="notify" bg-color="info">
  Notify custom
</w-button>`)])),js:n(()=>t[35]||(t[35]=[o(`methods: {
  notify () {
    $waveui.notify({
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
`)])),default:n(()=>[a(f,{onClick:p.notify,"bg-color":"info"},{default:n(()=>t[32]||(t[32]=[o("Notify custom")])),_:1},8,["onClick"])]),_:1}),a(u,{class:"mt12",warning:""},{default:n(()=>t[36]||(t[36]=[i("div",{class:"title4"},[i("strong",null,"Caution:"),o(" You could easily cause an "),i("strong",{class:"black"},"infinite loop"),o(` by triggering a
notification from the template using this code for instance:`)],-1),i("p",null,[i("code",null,l("{{ $waveui.notify('test') }}"))],-1),i("p",{class:"mt4"},`Indeed, if you write the above expression directly in a component's template without condition
around it, the notification will be triggered, which will trigger the Vue re-rendering which
will re-read and execute this expression and so on.
`,-1)])),_:1}),a(d,{h2:""},{default:n(()=>t[37]||(t[37]=[o("Notification manager tweaking")])),_:1}),t[62]||(t[62]=i("p",null,`The global configuration allows you to override the default side and transition of the
notification manager.`,-1)),a(w,{language:"js",dark:e.$store.state.darkMode},{default:n(()=>t[38]||(t[38]=[o(`new WaveUI({
  notificationManager: {
    align: 'right', // Or 'left'.
    transition: 'default' // Sliding from the side by default.
  }
})
`)])),_:1},8,["dark"]),a(d,{h3:""},{default:n(()=>t[39]||(t[39]=[o("Align to the left or right")])),_:1}),t[63]||(t[63]=i("p",null,[o("Change the value of the "),i("strong",{class:"code"},"align"),o(" option, in the above global config, to "),i("code",null,"left"),o(`
or `),i("code",null,"right"),o(".")],-1)),a(f,{onClick:p.switchNotificationManagerSide},{default:n(()=>t[40]||(t[40]=[o("Change side & notify")])),_:1},8,["onClick"]),a(u,{tip:""},{default:n(()=>t[41]||(t[41]=[o(`After switching side, you can also test the different notifications from the above examples.
`)])),_:1}),a(d,{h3:""},{default:n(()=>t[42]||(t[42]=[o("Different transitions")])),_:1}),t[64]||(t[64]=i("p",null,[o("The default transition is "),i("code",null,"slide-left"),o(` when the notification manager is on the right and
`),i("code",null,"slide-right"),o(` when it's on the left.
`)],-1)),t[65]||(t[65]=i("div",{class:"title4"},"Pick a transition",-1)),i("div",B,[i("div",H,[a(c,{class:"ma1",modelValue:e.notifManagerTransition,"onUpdate:modelValue":t[4]||(t[4]=s=>e.notifManagerTransition=s),items:e.transitionsForManager,onInput:p.switchNotifMgrTransition},{item:n(({item:s})=>[i("code",U,l(s.value||(s.value===!1?"false":"''")),1),s.value?E("",!0):(h(),v("span",D,"("+l(s.label)+")",1))]),_:1},8,["modelValue","items","onInput"])]),a(f,{class:"ma1",onClick:t[5]||(t[5]=s=>e.$waveui.notify("Test"))},{default:n(()=>t[43]||(t[43]=[o("Notify")])),_:1})]),i("p",x,[t[44]||(t[44]=o("Change the value of the ")),t[45]||(t[45]=i("strong",{class:"code"},"transition",-1)),t[46]||(t[46]=o(` option, in the above global config,
to `)),i("code",null,l(e.notifManagerTransition?`'${e.notifManagerTransition}'`:e.notifManagerTransition),1),t[47]||(t[47]=o("."))]),a(u,{tip:""},{default:n(()=>[t[50]||(t[50]=o("You could even")),i("a",z,[t[49]||(t[49]=o("create your own transition")),a(M,{class:"ml1",md:""},{default:n(()=>t[48]||(t[48]=[o("mdi mdi-open-in-new")])),_:1})]),t[51]||(t[51]=o("."))]),_:1}),a(d,{h3:""},{default:n(()=>t[52]||(t[52]=[o("Styling")])),_:1}),t[66]||(t[66]=i("p",null,[o("By default, the notification manager is 280px-wide and all the notifications will inherit this width."),i("br"),o(`
You can override this via CSS. For instance:`)],-1)),a(w,{language:"css",dark:e.$store.state.darkMode},{default:n(()=>t[53]||(t[53]=[o(`.w-notification-manager {width: 100%;max-width: 500px;}
`)])),_:1},8,["dark"])]),"item-title.2":n(()=>t[67]||(t[67]=[i("span",{class:"code"},"w-notification",-1)])),"item-content.2":n(()=>[a(u,{info:""},{default:n(()=>t[68]||(t[68]=[o("The "),i("span",{class:"code"},"w-notification",-1),o(" component is pretty much a wrapper around the "),i("span",{class:"code"},"w-alert",-1),o(`
component with added functionalities.`),i("br",null,null,-1),o(`
it accepts all the parameters of the `),i("span",{class:"code"},"w-alert",-1),o(` component, plus positioning,
transitioning & timeout options.
`)])),_:1}),a(d,{h2:""},{default:n(()=>t[69]||(t[69]=[o("Notification position")])),_:1}),t[83]||(t[83]=i("p",null,"Notifications have a fixed position by default (positioned relative to the viewport).",-1)),a(b,{"content-class":"mt2"},{pug:n(()=>t[70]||(t[70]=[o(`w-button.mr6(
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em")
  | `+l("{{ notification.show ? 'Hide' : 'Show' }}")+` notification

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
  | The alert is fixed on `+l("{{ notification.position[0] }}")+" "+l("{{ notification.position[1] }}")+".")])),html:n(()=>t[71]||(t[71]=[o(`<w-button
  class="mr6"
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em">
  `+l("{{ notification.show ? 'Hide' : 'Show' }}")+` notification
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
  The alert is fixed on `+l("{{ notification.position[0] }}")+" "+l("{{ notification.position[1] }}")+`.
</w-notification>`)])),js:n(()=>t[72]||(t[72]=[o(`data: () => ({
  notification: {
    show: false,
    position: ['bottom', 'right']
  }
})
`)])),default:n(()=>[a(f,{class:"mr6",onClick:t[6]||(t[6]=s=>e.notification.show=!e.notification.show),color:"primary",outline:"",width:"8.5em"},{default:n(()=>[o(l(e.notification.show?"Hide":"Show")+" notification",1)]),_:1}),a(c,{class:"my1 mr6",modelValue:e.notification.position[0],"onUpdate:modelValue":t[7]||(t[7]=s=>e.notification.position[0]=s),items:[{label:"top"},{label:"bottom"}],inline:""},null,8,["modelValue"]),a(c,{class:"my1",modelValue:e.notification.position[1],"onUpdate:modelValue":t[8]||(t[8]=s=>e.notification.position[1]=s),items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},null,8,["modelValue"]),T(a(y,C({success:"",plain:"",round:"",shadow:"",transition:"bounce"},{[e.notification.position[0]]:!0,[e.notification.position[1]]:!0}),{default:n(()=>[o("The alert is fixed on "+l(e.notification.position[0])+" "+l(e.notification.position[1])+".",1)]),_:1},16),[[V,e.notification.show]])]),_:1}),a(d,{h2:""},{default:n(()=>t[73]||(t[73]=[o("Notification timeout")])),_:1}),t[84]||(t[84]=i("p",null,"Notifications have no timeout by default. But you can add one to hide the notification by itself after some time.",-1)),t[85]||(t[85]=i("p",null,[o("Setting the timeout to "),i("code",null,"0"),o(" as a number or a string will cancel the timeout and the notification will stay visible.")],-1)),a(b,{"content-class":"mt2 pos-relative ovh"},{pug:n(()=>t[74]||(t[74]=[o(`w-button.mr6(
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em")
  | `+l("{{ showNotification ? 'Hide' : 'Show' }}")+` notification
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
  | `+l("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+".")])),html:n(()=>t[75]||(t[75]=[o(`<w-button
  class="mr6"
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em">
  `+l("{{ showNotification ? 'Hide' : 'Show' }}")+` notification
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
  `+l("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+`.
</w-notification>`)])),js:n(()=>t[76]||(t[76]=[o(`data: () => ({
  showNotification: false,
  timeout: 2000
})
`)])),default:n(()=>[a(f,{class:"mr6",onClick:t[9]||(t[9]=s=>e.notification2.show=!e.notification2.show),color:"primary",outline:"",width:"8.5em"},{default:n(()=>[o(l(e.notification2.show?"Hide":"Show")+" notification",1)]),_:1}),a(I,{class:"d-iflex no-wrap",modelValue:e.notification2.timeout,"onUpdate:modelValue":t[10]||(t[10]=s=>e.notification2.timeout=s),type:"number",step:"500",min:"0",label:"Timeout:","label-position":"left",style:{"max-width":"110px"}},null,8,["modelValue"]),t[77]||(t[77]=i("span",{class:"ml2"},"ms",-1)),a(y,{modelValue:e.notification2.show,"onUpdate:modelValue":t[11]||(t[11]=s=>e.notification2.show=s),timeout:e.notification2.timeout,warning:"",plain:"",round:"",shadow:"",dismiss:"",absolute:""},{default:n(()=>[o(`This alert is
`+l(~~e.notification2.timeout?`auto-hiding after ${e.notification2.timeout} ms`:"not auto-hiding")+".",1)]),_:1},8,["modelValue","timeout"])]),_:1}),a(d,{h2:""},{default:n(()=>t[78]||(t[78]=[o("Transitions")])),_:1}),a(b,null,{pug:n(()=>t[79]||(t[79]=[o(`w-flex(wrap align-center)
  w-button.mr3(
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em")
    | `+l("{{ notification.show ? 'Hide' : 'Show' }}")+` notification
  w-radios.my4(v-model="transition" :items="transitions")
    template(#item="{ item }")
      | `+l("{{ item.label }}")+`
      code.ml2 `+l(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  | The alert is fixed on `+l("{{ notification.position[0] }}")+" "+l("{{ notification.position[1] }}")+".")])),html:n(()=>t[80]||(t[80]=[o(`<w-flex wrap align-center>
  <w-button
    class="mr3"
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em">
    `+l("{{ notification.show ? 'Hide' : 'Show' }}")+` notification
  </w-button>

  <w-radios
    class="my4"
    v-model="transition"
    :items="transitions">
    <template #item="{ item }">
      `+l("{{ item.label }}")+`
      <code class="ml2">
        `+l(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  The alert is fixed on `+l("{{ notification.position[0] }}")+" "+l("{{ notification.position[1] }}")+`.
</w-notification>`)])),js:n(()=>t[81]||(t[81]=[o(`data: () => ({
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
})`)])),default:n(()=>[a(P,{wrap:"","align-center":""},{default:n(()=>[a(f,{class:"mr3",onClick:t[12]||(t[12]=s=>e.notification3.show=!e.notification3.show),color:"primary",outline:"",width:"8.5em"},{default:n(()=>[o(l(e.notification3.show?"Hide":"Show")+" notification",1)]),_:1}),a(c,{class:"my4",modelValue:e.transition,"onUpdate:modelValue":t[13]||(t[13]=s=>e.transition=s),items:e.transitions},{item:n(({item:s})=>[o(l(s.label),1),i("code",O,l(s.value||(s.value===!1?"false":"''")),1)]),_:1},8,["modelValue","items"])]),_:1}),t[82]||(t[82]=i("div",{class:"title4 mt3"},"Notification position",-1)),a(c,{class:"my1 mr6",modelValue:e.notification3.position[0],"onUpdate:modelValue":t[14]||(t[14]=s=>e.notification3.position[0]=s),items:[{label:"top"},{label:"bottom"}],inline:""},null,8,["modelValue"]),a(c,{class:"my1",modelValue:e.notification3.position[1],"onUpdate:modelValue":t[15]||(t[15]=s=>e.notification3.position[1]=s),items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},null,8,["modelValue"]),T(a(y,C({info:"",color:"primary",round:"",shadow:"",transition:e.transition},{[e.notification3.position[0]]:!0,[e.notification3.position[1]]:!0}),{default:n(()=>[o("The alert is fixed on "+l(e.notification3.position[0])+" "+l(e.notification3.position[1])+".",1)]),_:1},16,["transition"]),[[V,e.notification3.show]])]),_:1})]),_:1})])}const F={data:()=>({config:g,notification:{show:!1,position:["bottom","right"]},notification2:{show:!1,timeout:2e3},notification3:{show:!1,position:["bottom","right"]},transition:"",notifManagerTransition:"default",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Slide fade left",value:"slide-fade-left"},{label:"Slide fade right",value:"slide-fade-right"},{label:"Slide fade up",value:"slide-fade-up"},{label:"Slide fade down",value:"slide-fade-down"},{label:"Scale fade",value:"scale-fade"},{label:"None",value:!1}],transitionsForManager:[{label:"Default",value:"default"},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Slide fade left",value:"slide-fade-left"},{label:"Slide fade right",value:"slide-fade-right"},{label:"Slide fade up",value:"slide-fade-up"},{label:"Slide fade down",value:"slide-fade-down"},{label:"Scale fade",value:"scale-fade"},{label:"None",value:!1}]}),methods:{switchNotificationManagerSide(){const{align:e}=g.notificationManager;g.notificationManager.align=e==="left"?"right":"left",this.$nextTick(()=>this.$waveui.notify("Information."))},switchNotifMgrTransition(){g.notificationManager.transition=this.notifManagerTransition,this.$nextTick(()=>this.$waveui.notify("Information."))},notify(){this.$waveui.notify({message:"Warning",timeout:6e3,bgColor:"orange-light5",color:"warning",dismiss:!1,shadow:!0,round:!0,sm:!0,icon:"wi-star"})}}},Y=k(F,[["render",W]]),R={class:"mt12 pt6"};function L(e,t,S,$,N,p){const u=r("title-link"),m=r("component-api");return h(),v("div",R,[a(u,{class:"title1",h2:"",slug:"api"},{default:n(()=>t[0]||(t[0]=[i("span",{class:"code"},"<w-notification>",-1),o(" API")])),_:1}),a(m,{class:"mt0",items:p.props,descriptions:e.propsDescs,title:"Props"},null,8,["items","descriptions"]),a(m,{items:e.slots,title:"Slots"},null,8,["items"]),a(m,{items:p.events,title:"Events"},null,8,["items"])])}const q={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.',transition:'Applies a particular transition to the notification when showing and hiding.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example.',timeout:"Sets a timer to hide a visible notification after a certain amount of milliseconds. E.g. <code>2000</code> will hide the notification after 2 seconds. A value of <code>0</code> or empty string will keep the notification persistent (no timeout).",absolute:"Sets the CSS position of the notification to <code>absolute</code> (fixed by default).",top:"Places the notification at the top of the screen or at the top of its container if the <code>absolute</code> prop is set to true.",bottom:"Places the notification at the bottom of the screen or at the bottom of its container if the <code>absolute</code> prop is set to true.",left:"Places the notification at the left of the screen or at the left of its container if the <code>absolute</code> prop is set to true.",right:"Places the notification at the right of the screen or at the right of its container if the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the notification.",success:"Sets the type of the notification, applying the <code>success</code> class (green color) and adding a success icon on the left in the notification.",info:"Sets the type of the notification, applying the <code>info</code> class (blue color) and adding an info icon on the left in the notification.",warning:"Sets the type of the notification, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the notification.",error:"Sets the type of the notification, applying the <code>error</code> class (red color) and adding an error icon on the left in the notification.",color:`Applies a color to the notification's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the notification's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the notification.",tile:"Removes the default border-radius and sets sharp edges on the notification.",round:"Sets a maximum border-radius on the corners of the notification, giving it a round look.",plain:'Emphasizes a "typed" notification (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',dismiss:"Adds a close button (cross icon) on the right in the notification. Clicking on this button hides the notification.",noBorder:"Removes the default border from the notification container.",borderLeft:"Adds a left border on the notification. Only one side-border can be applied at the same time.",borderRight:"Adds a right border on the notification. Only one side-border can be applied at the same time.",borderTop:"Adds a top border on the notification. Only one side-border can be applied at the same time.",borderBottom:"Adds a bottom border on the notification. Only one side-border can be applied at the same time.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",xs:"Sets the size of the notification to extra small.",sm:"Sets the size of the notification to small.",md:"Sets the size of the notification to medium.",lg:"Sets the size of the notification to large.",xl:"Sets the size of the notification to extra large."},G={default:{description:"The notification content."}},J={input:"Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on notification dismiss/hide."},K={data:()=>({propsDescs:q,slots:G}),computed:{props(){return A.props},events(){return A.emits.reduce((e,t)=>(e[t]={description:J[t]||""})&&e,{})}}},Q=k(K,[["render",L]]);function X(e,t,S,$,N,p){const u=r("ui-component-title"),m=r("examples"),d=r("api");return h(),v("main",null,[a(u,{code:!1,slug:"notification-manager-and-w-notification"},{default:n(()=>t[0]||(t[0]=[o("Built-in notification manager & "),i("span",{class:"code"},"w-notification",-1)])),_:1}),a(m),a(d)])}const Z={components:{Examples:Y,Api:Q}},tt=k(Z,[["render",X]]);export{tt as default};
