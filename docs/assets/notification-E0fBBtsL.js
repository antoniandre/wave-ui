import{K as e,Q as t,Y as n,x as r}from"./index-ByX3j1Uf.js";import{C as i,G as a,N as o,W as s,bt as c,c as l,d as u,g as d,h as f,k as p,u as m}from"./runtime-core.esm-bundler-BG9XLJHT.js";var h={class:`w-flex align-center`},g={class:`xs6 md4 lg3`},_={class:`ml2`},v={key:0,class:`ml2`},y={class:`mt4`},b={class:`ml1`,href:`https://vuejs.org/guide/built-ins/transition.html`},x={class:`ml2`};function S(e,n,r,S,C,w){let T=o(`alert`),E=o(`w-list`),D=o(`title-link`),O=o(`ssh-pre`),k=o(`w-button`),A=o(`example`),j=o(`w-radios`),M=o(`w-icon`),N=o(`w-notification`),P=o(`w-input`),F=o(`w-flex`),I=o(`w-tabs`);return p(),u(`div`,null,[n[86]||=l(`div`,{class:`title3 my6`},`You have the choice to use one or the other, or both.`,-1),d(I,{class:`mt4`,items:2,"content-class":`pl4`,"model-value":`0`},{"item-title.1":s(()=>[...n[16]||=[f(`Notification manager`,-1)]]),"item-content.1":s(()=>[n[54]||=l(`p`,null,[f(`The built-in notification manager can be used via `),l(`code`,null,`$waveui.notify()`),f(` from any component.`),l(`br`)],-1),d(T,{tip:``},{default:s(()=>[...n[17]||=[f(`Note that you can access the `,-1),l(`code`,null,`$waveui`,-1),f(` object with `,-1),l(`code`,null,`const $waveui = inject('$waveui')`,-1),f(` in composition API, or from `,-1),l(`code`,null,`this`,-1),f(` if not using the composition API.`,-1)]]),_:1}),n[55]||=l(`div`,{class:`title3`},`Pros`,-1),d(E,{icon:`wi-check`,items:2},{"item.1":s(()=>[...n[18]||=[f(`Very convenient and fast to use`,-1)]]),"item.2":s(()=>[...n[19]||=[f(`Handles the stacking of simultaneous notifications`,-1)]]),_:1}),n[56]||=l(`div`,{class:`title3 mt4`},`Cons`,-1),d(E,{icon:`wi-minus`,items:1},{"item.1":s(()=>[...n[20]||=[f(`Less flexible than `,-1),l(`strong`,{class:`code mx1`},`w-notification`,-1),f(` in terms of layout (no slot available)
`,-1)]]),_:1}),d(D,{h2:``},{default:s(()=>[...n[21]||=[f(`Simple use of the notify method`,-1)]]),_:1}),n[57]||=l(`p`,null,`The notify method takes up to 3 parameters, here is the syntax:`,-1),d(O,{language:`js`,dark:e.$store.state.darkMode},{default:s(()=>[...n[22]||=[f(`$waveui.notify({String} message, {String} type?, {Number} timeout?)`,-1)]]),_:1},8,[`dark`]),n[58]||=l(`p`,null,[f(`Access `),l(`code`,null,`$waveui`),f(` in composition API, or from `),l(`code`,null,`this`),f(` if not using the composition API.`)],-1),d(O,{language:`js`,dark:e.$store.state.darkMode},{default:s(()=>[...n[23]||=[f(`import { inject } from 'vue'
const $waveui = inject('$waveui')`,-1)]]),_:1},8,[`dark`]),n[59]||=l(`p`,null,[f(`The default type is `),l(`code`,null,`info`),f(` and the default timeout is `),l(`code`,null,`4000`),f(`.`),l(`br`),f(`
A timeout of `),l(`code`,null,`0`),f(` will keep the notification visible permanently (until dismissed).`)],-1),d(A,null,{pug:s(()=>[...n[28]||=[f(`w-button.ma1(@click="$waveui.notify&#40;'Information.'&#41;" bg-color="info") Notify info
w-button.ma1(@click="$waveui.notify&#40;'Success!', 'success'&#41;" bg-color="success") Notify success
w-button.ma1(@click="$waveui.notify&#40;'Warning!', 'warning'&#41;" bg-color="warning") Notify warning
w-button.ma1(@click="$waveui.notify&#40;'Error :(', 'error', 0&#41;" bg-color="error") Permanent error`,-1)]]),html:s(()=>[...n[29]||=[f(`<w-button @click="$waveui.notify('Information.')" bg-color="info">
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
`,-1)]]),default:s(()=>[d(k,{class:`ma1`,onClick:n[0]||=t=>e.$waveui.notify(`Information.`),"bg-color":`info`},{default:s(()=>[...n[24]||=[f(`Notify info`,-1)]]),_:1}),d(k,{class:`ma1`,onClick:n[1]||=t=>e.$waveui.notify(`Success!`,`success`),"bg-color":`success`},{default:s(()=>[...n[25]||=[f(`Notify success`,-1)]]),_:1}),d(k,{class:`ma1`,onClick:n[2]||=t=>e.$waveui.notify(`Warning!`,`warning`),"bg-color":`warning`},{default:s(()=>[...n[26]||=[f(`Notify warning`,-1)]]),_:1}),d(k,{class:`ma1`,onClick:n[3]||=t=>e.$waveui.notify(`Error :(`,`error`,0),"bg-color":`error`},{default:s(()=>[...n[27]||=[f(`Permanent error`,-1)]]),_:1})]),_:1}),d(D,{h2:``},{default:s(()=>[...n[30]||=[f(`If you need more control`,-1)]]),_:1}),n[60]||=l(`p`,null,[f(`The `),l(`code`,null,`notify`),f(` method also accepts a single Object parameter which will accept all the options
of the `),l(`strong`,{class:`code`},`w-alert`),f(` component, plus the `),l(`code`,null,`message`),f(` and `),l(`code`,null,`timeout`),f(` options.`),l(`br`),f(`
E.g.`)],-1),d(O,{language:`js`,dark:e.$store.state.darkMode},{default:s(()=>[...n[31]||=[f(`$waveui.notify({
  message: 'Message.',
  timeout: 3000, // ms.
  ... // Other options from w-alert.
})
`,-1)]]),_:1},8,[`dark`]),n[61]||=l(`p`,null,[f(`Here is an example of a custom notification using a few different `),l(`strong`,{class:`code`},`w-alert`),f(` options.
`)],-1),d(A,null,{pug:s(()=>[...n[33]||=[f(`w-button(@click="notify" bg-color="info") Notify custom`,-1)]]),html:s(()=>[...n[34]||=[f(`<w-button @click="notify" bg-color="info">
  Notify custom
</w-button>`,-1)]]),js:s(()=>[...n[35]||=[f(`methods: {
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
`,-1)]]),default:s(()=>[d(k,{onClick:w.notify,"bg-color":`info`},{default:s(()=>[...n[32]||=[f(`Notify custom`,-1)]]),_:1},8,[`onClick`])]),_:1}),d(T,{class:`mt12`,warning:``},{default:s(()=>[...n[36]||=[l(`div`,{class:`title4`},[l(`strong`,null,`Caution:`),f(` You could easily cause an `),l(`strong`,{class:`black`},`infinite loop`),f(` by triggering a
notification from the template using this code for instance:`)],-1),l(`p`,null,[l(`code`,null,c(`{{ $waveui.notify('test') }}`))],-1),l(`p`,{class:`mt4`},`Indeed, if you write the above expression directly in a component's template without condition
around it, the notification will be triggered, which will trigger the Vue re-rendering which
will re-read and execute this expression and so on.
`,-1)]]),_:1}),d(D,{h2:``},{default:s(()=>[...n[37]||=[f(`Notification manager tweaking`,-1)]]),_:1}),n[62]||=l(`p`,null,`The global configuration allows you to override the default side and transition of the
notification manager.`,-1),d(O,{language:`js`,dark:e.$store.state.darkMode},{default:s(()=>[...n[38]||=[f(`new WaveUI({
  notificationManager: {
    align: 'right', // Or 'left'.
    transition: 'default' // Sliding from the side by default.
  }
})
`,-1)]]),_:1},8,[`dark`]),d(D,{h3:``},{default:s(()=>[...n[39]||=[f(`Align to the left or right`,-1)]]),_:1}),n[63]||=l(`p`,null,[f(`Change the value of the `),l(`strong`,{class:`code`},`align`),f(` option, in the above global config, to `),l(`code`,null,`left`),f(`
or `),l(`code`,null,`right`),f(`.`)],-1),d(k,{onClick:w.switchNotificationManagerSide},{default:s(()=>[...n[40]||=[f(`Change side & notify`,-1)]]),_:1},8,[`onClick`]),d(T,{tip:``},{default:s(()=>[...n[41]||=[f(`After switching side, you can also test the different notifications from the above examples.
`,-1)]]),_:1}),d(D,{h3:``},{default:s(()=>[...n[42]||=[f(`Different transitions`,-1)]]),_:1}),n[64]||=l(`p`,null,[f(`The default transition is `),l(`code`,null,`slide-left`),f(` when the notification manager is on the right and
`),l(`code`,null,`slide-right`),f(` when it's on the left.
`)],-1),n[65]||=l(`div`,{class:`title4`},`Pick a transition`,-1),l(`div`,h,[l(`div`,g,[d(j,{class:`ma1`,modelValue:e.notifManagerTransition,"onUpdate:modelValue":n[4]||=t=>e.notifManagerTransition=t,items:e.transitionsForManager,onInput:w.switchNotifMgrTransition},{item:s(({item:e})=>[l(`code`,_,c(e.value||(e.value===!1?`false`:`''`)),1),e.value?m(``,!0):(p(),u(`span`,v,`(`+c(e.label)+`)`,1))]),_:1},8,[`modelValue`,`items`,`onInput`])]),d(k,{class:`ma1`,onClick:n[5]||=t=>e.$waveui.notify(`Test`)},{default:s(()=>[...n[43]||=[f(`Notify`,-1)]]),_:1})]),l(`p`,y,[n[44]||=f(`Change the value of the `,-1),n[45]||=l(`strong`,{class:`code`},`transition`,-1),n[46]||=f(` option, in the above global config,
to `,-1),l(`code`,null,c(e.notifManagerTransition?`'${e.notifManagerTransition}'`:e.notifManagerTransition),1),n[47]||=f(`.`,-1)]),d(T,{tip:``},{default:s(()=>[n[50]||=f(`You could even`,-1),l(`a`,b,[n[49]||=f(`create your own transition`,-1),d(M,{class:`ml1`,md:``},{default:s(()=>[...n[48]||=[f(`mdi mdi-open-in-new`,-1)]]),_:1})]),n[51]||=f(`.`,-1)]),_:1}),d(D,{h3:``},{default:s(()=>[...n[52]||=[f(`Styling`,-1)]]),_:1}),n[66]||=l(`p`,null,[f(`By default, the notification manager is 280px-wide and all the notifications will inherit this width.`),l(`br`),f(`
You can override this via CSS. For instance:`)],-1),d(O,{language:`css`,dark:e.$store.state.darkMode},{default:s(()=>[...n[53]||=[f(`.w-notification-manager {width: 100%;max-width: 500px;}
`,-1)]]),_:1},8,[`dark`])]),"item-title.2":s(()=>[...n[67]||=[l(`span`,{class:`code`},`w-notification`,-1)]]),"item-content.2":s(()=>[d(T,{info:``},{default:s(()=>[...n[68]||=[f(`The `,-1),l(`span`,{class:`code`},`w-notification`,-1),f(` component is pretty much a wrapper around the `,-1),l(`span`,{class:`code`},`w-alert`,-1),f(`
component with added functionalities.`,-1),l(`br`,null,null,-1),f(`
it accepts all the parameters of the `,-1),l(`span`,{class:`code`},`w-alert`,-1),f(` component, plus positioning,
transitioning & timeout options.
`,-1)]]),_:1}),d(D,{h2:``},{default:s(()=>[...n[69]||=[f(`Notification position`,-1)]]),_:1}),n[83]||=l(`p`,null,`Notifications have a fixed position by default (positioned relative to the viewport).`,-1),d(A,{"content-class":`mt2`},{pug:s(()=>[...n[70]||=[f(`w-button.mr6(
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em")
  | `+c(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification

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
  | The alert is fixed on `+c(`{{ notification.position[0] }}`)+` `+c(`{{ notification.position[1] }}`)+`.`,-1)]]),html:s(()=>[...n[71]||=[f(`<w-button
  class="mr6"
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em">
  `+c(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification
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
  The alert is fixed on `+c(`{{ notification.position[0] }}`)+` `+c(`{{ notification.position[1] }}`)+`.
</w-notification>`,-1)]]),js:s(()=>[...n[72]||=[f(`data: () => ({
  notification: {
    show: false,
    position: ['bottom', 'right']
  }
})
`,-1)]]),default:s(()=>[d(k,{class:`mr6`,onClick:n[6]||=t=>e.notification.show=!e.notification.show,color:`primary`,outline:``,width:`8.5em`},{default:s(()=>[f(c(e.notification.show?`Hide`:`Show`)+` notification`,1)]),_:1}),d(j,{class:`my1 mr6`,modelValue:e.notification.position[0],"onUpdate:modelValue":n[7]||=t=>e.notification.position[0]=t,items:[{label:`top`},{label:`bottom`}],inline:``},null,8,[`modelValue`]),d(j,{class:`my1`,modelValue:e.notification.position[1],"onUpdate:modelValue":n[8]||=t=>e.notification.position[1]=t,items:[{label:`left`},{label:`center`},{label:`right`}],inline:``},null,8,[`modelValue`]),a(d(N,i({success:``,plain:``,round:``,shadow:``,transition:`bounce`},{[e.notification.position[0]]:!0,[e.notification.position[1]]:!0}),{default:s(()=>[f(`The alert is fixed on `+c(e.notification.position[0])+` `+c(e.notification.position[1])+`.`,1)]),_:1},16),[[t,e.notification.show]])]),_:1}),d(D,{h2:``},{default:s(()=>[...n[73]||=[f(`Notification timeout`,-1)]]),_:1}),n[84]||=l(`p`,null,`Notifications have no timeout by default. But you can add one to hide the notification by itself after some time.`,-1),n[85]||=l(`p`,null,[f(`Setting the timeout to `),l(`code`,null,`0`),f(` as a number or a string will cancel the timeout and the notification will stay visible.`)],-1),d(A,{"content-class":`mt2 relative ovh`},{pug:s(()=>[...n[74]||=[f(`w-button.mr6(
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em")
  | `+c(`{{ showNotification ? 'Hide' : 'Show' }}`)+` notification
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
  | `+c("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+`.`,-1)]]),html:s(()=>[...n[75]||=[f(`<w-button
  class="mr6"
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em">
  `+c(`{{ showNotification ? 'Hide' : 'Show' }}`)+` notification
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
  `+c("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+`.
</w-notification>`,-1)]]),js:s(()=>[...n[76]||=[f(`data: () => ({
  showNotification: false,
  timeout: 2000
})
`,-1)]]),default:s(()=>[d(k,{class:`mr6`,onClick:n[9]||=t=>e.notification2.show=!e.notification2.show,color:`primary`,outline:``,width:`8.5em`},{default:s(()=>[f(c(e.notification2.show?`Hide`:`Show`)+` notification`,1)]),_:1}),d(P,{class:`d-iflex no-wrap`,modelValue:e.notification2.timeout,"onUpdate:modelValue":n[10]||=t=>e.notification2.timeout=t,type:`number`,step:`500`,min:`0`,label:`Timeout:`,"label-position":`left`,style:{"max-width":`110px`}},null,8,[`modelValue`]),n[77]||=l(`span`,{class:`ml2`},`ms`,-1),d(N,{modelValue:e.notification2.show,"onUpdate:modelValue":n[11]||=t=>e.notification2.show=t,timeout:e.notification2.timeout,warning:``,plain:``,round:``,shadow:``,dismiss:``,absolute:``},{default:s(()=>[f(`This alert is
`+c(~~e.notification2.timeout?`auto-hiding after ${e.notification2.timeout} ms`:`not auto-hiding`)+`.`,1)]),_:1},8,[`modelValue`,`timeout`])]),_:1}),d(D,{h2:``},{default:s(()=>[...n[78]||=[f(`Transitions`,-1)]]),_:1}),d(A,null,{pug:s(()=>[...n[79]||=[f(`w-flex(wrap align-center)
  w-button.mr3(
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em")
    | `+c(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification
  w-radios.my4(v-model="transition" :items="transitions")
    template(#item="{ item }")
      | `+c(`{{ item.label }}`)+`
      code.ml2 `+c(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  | The alert is fixed on `+c(`{{ notification.position[0] }}`)+` `+c(`{{ notification.position[1] }}`)+`.`,-1)]]),html:s(()=>[...n[80]||=[f(`<w-flex wrap align-center>
  <w-button
    class="mr3"
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em">
    `+c(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification
  </w-button>

  <w-radios
    class="my4"
    v-model="transition"
    :items="transitions">
    <template #item="{ item }">
      `+c(`{{ item.label }}`)+`
      <code class="ml2">
        `+c(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  The alert is fixed on `+c(`{{ notification.position[0] }}`)+` `+c(`{{ notification.position[1] }}`)+`.
</w-notification>`,-1)]]),js:s(()=>[...n[81]||=[f(`data: () => ({
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
})`,-1)]]),default:s(()=>[d(F,{wrap:``,"align-center":``},{default:s(()=>[d(k,{class:`mr3`,onClick:n[12]||=t=>e.notification3.show=!e.notification3.show,color:`primary`,outline:``,width:`8.5em`},{default:s(()=>[f(c(e.notification3.show?`Hide`:`Show`)+` notification`,1)]),_:1}),d(j,{class:`my4`,modelValue:e.transition,"onUpdate:modelValue":n[13]||=t=>e.transition=t,items:e.transitions},{item:s(({item:e})=>[f(c(e.label),1),l(`code`,x,c(e.value||(e.value===!1?`false`:`''`)),1)]),_:1},8,[`modelValue`,`items`])]),_:1}),n[82]||=l(`div`,{class:`title4 mt3`},`Notification position`,-1),d(j,{class:`my1 mr6`,modelValue:e.notification3.position[0],"onUpdate:modelValue":n[14]||=t=>e.notification3.position[0]=t,items:[{label:`top`},{label:`bottom`}],inline:``},null,8,[`modelValue`]),d(j,{class:`my1`,modelValue:e.notification3.position[1],"onUpdate:modelValue":n[15]||=t=>e.notification3.position[1]=t,items:[{label:`left`},{label:`center`},{label:`right`}],inline:``},null,8,[`modelValue`]),a(d(N,i({info:``,color:`primary`,round:``,shadow:``,transition:e.transition},{[e.notification3.position[0]]:!0,[e.notification3.position[1]]:!0}),{default:s(()=>[f(`The alert is fixed on `+c(e.notification3.position[0])+` `+c(e.notification3.position[1])+`.`,1)]),_:1},16,[`transition`]),[[t,e.notification3.show]])]),_:1})]),_:1})])}var C=n({data:()=>({config:e,notification:{show:!1,position:[`bottom`,`right`]},notification2:{show:!1,timeout:2e3},notification3:{show:!1,position:[`bottom`,`right`]},transition:``,notifManagerTransition:`default`,transitions:[{label:`Default`,value:``},{label:`Bounce`,value:`bounce`},{label:`Scale`,value:`scale`},{label:`Twist`,value:`twist`},{label:`Fade`,value:`fade`},{label:`Slide fade left`,value:`slide-fade-left`},{label:`Slide fade right`,value:`slide-fade-right`},{label:`Slide fade up`,value:`slide-fade-up`},{label:`Slide fade down`,value:`slide-fade-down`},{label:`Scale fade`,value:`scale-fade`},{label:`None`,value:!1}],transitionsForManager:[{label:`Default`,value:`default`},{label:`Bounce`,value:`bounce`},{label:`Scale`,value:`scale`},{label:`Twist`,value:`twist`},{label:`Fade`,value:`fade`},{label:`Slide fade left`,value:`slide-fade-left`},{label:`Slide fade right`,value:`slide-fade-right`},{label:`Slide fade up`,value:`slide-fade-up`},{label:`Slide fade down`,value:`slide-fade-down`},{label:`Scale fade`,value:`scale-fade`},{label:`None`,value:!1}]}),methods:{switchNotificationManagerSide(){let{align:t}=e.notificationManager;e.notificationManager.align=t===`left`?`right`:`left`,this.$nextTick(()=>this.$waveui.notify(`Information.`))},switchNotifMgrTransition(){e.notificationManager.transition=this.notifManagerTransition,this.$nextTick(()=>this.$waveui.notify(`Information.`))},notify(){this.$waveui.notify({message:`Warning`,timeout:6e3,bgColor:`orange-light5`,color:`warning`,dismiss:!1,shadow:!0,round:!0,sm:!0,icon:`wi-star`})}}},[[`render`,S]]),w={class:`mt12 pt6`};function T(e,t,n,r,i,a){let c=o(`title-link`),m=o(`component-api`);return p(),u(`div`,w,[d(c,{class:`title1`,h2:``,slug:`api`},{default:s(()=>[...t[0]||=[l(`span`,{class:`code`},`<w-notification>`,-1),f(` API`,-1)]]),_:1}),d(m,{class:`mt0`,items:a.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),d(m,{items:e.slots,title:`Slots`},null,8,[`items`]),d(m,{items:a.events,title:`Events`},null,8,[`items`])])}var E={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.`,transition:`Applies a particular transition to the notification when showing and hiding.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example.`,timeout:`Sets a timer to hide a visible notification after a certain amount of milliseconds. E.g. <code>2000</code> will hide the notification after 2 seconds. A value of <code>0</code> or empty string will keep the notification persistent (no timeout).`,absolute:`Sets the CSS position of the notification to <code>absolute</code> (fixed by default).`,top:`Places the notification at the top of the screen or at the top of its container if the <code>absolute</code> prop is set to true.`,bottom:`Places the notification at the bottom of the screen or at the bottom of its container if the <code>absolute</code> prop is set to true.`,left:`Places the notification at the left of the screen or at the left of its container if the <code>absolute</code> prop is set to true.`,right:`Places the notification at the right of the screen or at the right of its container if the <code>absolute</code> prop is set to true.`,zIndex:`Applies a z-index (positive or negative integer) to the notification.`,success:`Sets the type of the notification, applying the <code>success</code> class (green color) and adding a success icon on the left in the notification.`,info:`Sets the type of the notification, applying the <code>info</code> class (blue color) and adding an info icon on the left in the notification.`,warning:`Sets the type of the notification, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the notification.`,error:`Sets the type of the notification, applying the <code>error</code> class (red color) and adding an error icon on the left in the notification.`,color:`Applies a color to the notification's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the notification's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the notification.`,tile:`Removes the default border-radius and sets sharp edges on the notification.`,round:`Sets a maximum border-radius on the corners of the notification, giving it a round look.`,plain:`Emphasizes a "typed" notification (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.`,dismiss:`Adds a close button (cross icon) on the right in the notification. Clicking on this button hides the notification.`,noBorder:`Removes the default border from the notification container.`,borderLeft:`Adds a left border on the notification. Only one side-border can be applied at the same time.`,borderRight:`Adds a right border on the notification. Only one side-border can be applied at the same time.`,borderTop:`Adds a top border on the notification. Only one side-border can be applied at the same time.`,borderBottom:`Adds a bottom border on the notification. Only one side-border can be applied at the same time.`,outline:`The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.`,xs:`Sets the size of the notification to extra small.`,sm:`Sets the size of the notification to small.`,md:`Sets the size of the notification to medium.`,lg:`Sets the size of the notification to large.`,xl:`Sets the size of the notification to extra large.`},D={default:{description:`The notification content.`}},O={input:`Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on notification dismiss/hide.`},k=n({data:()=>({propsDescs:E,slots:D}),computed:{props(){return r.props},events(){return r.emits.reduce((e,t)=>(e[t]={description:O[t]||``})&&e,{})}}},[[`render`,T]]);function A(e,t,n,r,i,a){let c=o(`ui-component-title`),m=o(`examples`),h=o(`api`);return p(),u(`main`,null,[d(c,{code:!1,slug:`notification-manager-and-w-notification`},{default:s(()=>[...t[0]||=[f(`Built-in notification manager & `,-1),l(`span`,{class:`code`},`w-notification`,-1)]]),_:1}),d(m),d(h)])}var j=n({components:{Examples:C,Api:k}},[[`render`,A]]);export{j as default};