import{C as e,G as t,N as n,W as r,bt as i,c as a,d as o,g as s,h as c,k as l,u}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as d}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{G as f,Y as p,x as m}from"./index-DH7838aH.js";var h={class:`w-flex align-center`},g={class:`xs6 md4 lg3`},_={class:`ml2`},v={key:0,class:`ml2`},y={class:`mt4`},b={class:`ml1`,href:`https://vuejs.org/guide/built-ins/transition.html`},x={class:`ml2`};function S(d,f,m,S,C,w){let T=n(`alert`),E=n(`w-list`),D=n(`title-link`),O=n(`ssh-pre`),k=n(`w-button`),A=n(`example`),j=n(`w-radios`),M=n(`w-icon`),N=n(`w-notification`),P=n(`w-input`),F=n(`w-flex`),I=n(`w-tabs`);return l(),o(`div`,null,[f[86]||=a(`div`,{class:`title3 my6`},`You have the choice to use one or the other, or both.`,-1),s(I,{class:`mt4`,items:2,"content-class":`pl4`,"model-value":`0`},{"item-title.1":r(()=>[...f[16]||=[c(`Notification manager`,-1)]]),"item-content.1":r(()=>[f[54]||=a(`p`,null,[c(`The built-in notification manager can be used via `),a(`code`,null,`$waveui.notify()`),c(` from any component.`),a(`br`)],-1),s(T,{tip:``},{default:r(()=>[...f[17]||=[c(`Note that you can access the `,-1),a(`code`,null,`$waveui`,-1),c(` object with `,-1),a(`code`,null,`const $waveui = inject('$waveui')`,-1),c(` in composition API, or from `,-1),a(`code`,null,`this`,-1),c(` if not using the composition API.`,-1)]]),_:1}),f[55]||=a(`div`,{class:`title3`},`Pros`,-1),s(E,{icon:`wi-check`,items:2},{"item.1":r(()=>[...f[18]||=[c(`Very convenient and fast to use`,-1)]]),"item.2":r(()=>[...f[19]||=[c(`Handles the stacking of simultaneous notifications`,-1)]]),_:1}),f[56]||=a(`div`,{class:`title3 mt4`},`Cons`,-1),s(E,{icon:`wi-minus`,items:1},{"item.1":r(()=>[...f[20]||=[c(`Less flexible than `,-1),a(`strong`,{class:`code mx1`},`w-notification`,-1),c(` in terms of layout (no slot available)
`,-1)]]),_:1}),s(D,{h2:``},{default:r(()=>[...f[21]||=[c(`Simple use of the notify method`,-1)]]),_:1}),f[57]||=a(`p`,null,`The notify method takes up to 3 parameters, here is the syntax:`,-1),s(O,{language:`js`,dark:d.$store.state.darkMode},{default:r(()=>[...f[22]||=[c(`$waveui.notify({String} message, {String} type?, {Number} timeout?)`,-1)]]),_:1},8,[`dark`]),f[58]||=a(`p`,null,[c(`Access `),a(`code`,null,`$waveui`),c(` in composition API, or from `),a(`code`,null,`this`),c(` if not using the composition API.`)],-1),s(O,{language:`js`,dark:d.$store.state.darkMode},{default:r(()=>[...f[23]||=[c(`import { inject } from 'vue'
const $waveui = inject('$waveui')`,-1)]]),_:1},8,[`dark`]),f[59]||=a(`p`,null,[c(`The default type is `),a(`code`,null,`info`),c(` and the default timeout is `),a(`code`,null,`4000`),c(`.`),a(`br`),c(`
A timeout of `),a(`code`,null,`0`),c(` will keep the notification visible permanently (until dismissed).`)],-1),s(A,null,{pug:r(()=>[...f[28]||=[c(`w-button.ma1(@click="$waveui.notify&#40;'Information.'&#41;" bg-color="info") Notify info
w-button.ma1(@click="$waveui.notify&#40;'Success!', 'success'&#41;" bg-color="success") Notify success
w-button.ma1(@click="$waveui.notify&#40;'Warning!', 'warning'&#41;" bg-color="warning") Notify warning
w-button.ma1(@click="$waveui.notify&#40;'Error :(', 'error', 0&#41;" bg-color="error") Permanent error`,-1)]]),html:r(()=>[...f[29]||=[c(`<w-button @click="$waveui.notify('Information.')" bg-color="info">
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
`,-1)]]),default:r(()=>[s(k,{class:`ma1`,onClick:f[0]||=e=>d.$waveui.notify(`Information.`),"bg-color":`info`},{default:r(()=>[...f[24]||=[c(`Notify info`,-1)]]),_:1}),s(k,{class:`ma1`,onClick:f[1]||=e=>d.$waveui.notify(`Success!`,`success`),"bg-color":`success`},{default:r(()=>[...f[25]||=[c(`Notify success`,-1)]]),_:1}),s(k,{class:`ma1`,onClick:f[2]||=e=>d.$waveui.notify(`Warning!`,`warning`),"bg-color":`warning`},{default:r(()=>[...f[26]||=[c(`Notify warning`,-1)]]),_:1}),s(k,{class:`ma1`,onClick:f[3]||=e=>d.$waveui.notify(`Error :(`,`error`,0),"bg-color":`error`},{default:r(()=>[...f[27]||=[c(`Permanent error`,-1)]]),_:1})]),_:1}),s(D,{h2:``},{default:r(()=>[...f[30]||=[c(`If you need more control`,-1)]]),_:1}),f[60]||=a(`p`,null,[c(`The `),a(`code`,null,`notify`),c(` method also accepts a single Object parameter which will accept all the options
of the `),a(`strong`,{class:`code`},`w-alert`),c(` component, plus the `),a(`code`,null,`message`),c(` and `),a(`code`,null,`timeout`),c(` options.`),a(`br`),c(`
E.g.`)],-1),s(O,{language:`js`,dark:d.$store.state.darkMode},{default:r(()=>[...f[31]||=[c(`$waveui.notify({
  message: 'Message.',
  timeout: 3000, // ms.
  ... // Other options from w-alert.
})
`,-1)]]),_:1},8,[`dark`]),f[61]||=a(`p`,null,[c(`Here is an example of a custom notification using a few different `),a(`strong`,{class:`code`},`w-alert`),c(` options.
`)],-1),s(A,null,{pug:r(()=>[...f[33]||=[c(`w-button(@click="notify" bg-color="info") Notify custom`,-1)]]),html:r(()=>[...f[34]||=[c(`<w-button @click="notify" bg-color="info">
  Notify custom
</w-button>`,-1)]]),js:r(()=>[...f[35]||=[c(`methods: {
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
`,-1)]]),default:r(()=>[s(k,{onClick:w.notify,"bg-color":`info`},{default:r(()=>[...f[32]||=[c(`Notify custom`,-1)]]),_:1},8,[`onClick`])]),_:1}),s(T,{class:`mt12`,warning:``},{default:r(()=>[...f[36]||=[a(`div`,{class:`title4`},[a(`strong`,null,`Caution:`),c(` You could easily cause an `),a(`strong`,{class:`black`},`infinite loop`),c(` by triggering a
notification from the template using this code for instance:`)],-1),a(`p`,null,[a(`code`,null,i(`{{ $waveui.notify('test') }}`))],-1),a(`p`,{class:`mt4`},`Indeed, if you write the above expression directly in a component's template without condition
around it, the notification will be triggered, which will trigger the Vue re-rendering which
will re-read and execute this expression and so on.
`,-1)]]),_:1}),s(D,{h2:``},{default:r(()=>[...f[37]||=[c(`Notification manager tweaking`,-1)]]),_:1}),f[62]||=a(`p`,null,`The global configuration allows you to override the default side and transition of the
notification manager.`,-1),s(O,{language:`js`,dark:d.$store.state.darkMode},{default:r(()=>[...f[38]||=[c(`new WaveUI({
  notificationManager: {
    align: 'right', // Or 'left'.
    transition: 'default' // Sliding from the side by default.
  }
})
`,-1)]]),_:1},8,[`dark`]),s(D,{h3:``},{default:r(()=>[...f[39]||=[c(`Align to the left or right`,-1)]]),_:1}),f[63]||=a(`p`,null,[c(`Change the value of the `),a(`strong`,{class:`code`},`align`),c(` option, in the above global config, to `),a(`code`,null,`left`),c(`
or `),a(`code`,null,`right`),c(`.`)],-1),s(k,{onClick:w.switchNotificationManagerSide},{default:r(()=>[...f[40]||=[c(`Change side & notify`,-1)]]),_:1},8,[`onClick`]),s(T,{tip:``},{default:r(()=>[...f[41]||=[c(`After switching side, you can also test the different notifications from the above examples.
`,-1)]]),_:1}),s(D,{h3:``},{default:r(()=>[...f[42]||=[c(`Different transitions`,-1)]]),_:1}),f[64]||=a(`p`,null,[c(`The default transition is `),a(`code`,null,`slide-left`),c(` when the notification manager is on the right and
`),a(`code`,null,`slide-right`),c(` when it's on the left.
`)],-1),f[65]||=a(`div`,{class:`title4`},`Pick a transition`,-1),a(`div`,h,[a(`div`,g,[s(j,{class:`ma1`,modelValue:d.notifManagerTransition,"onUpdate:modelValue":f[4]||=e=>d.notifManagerTransition=e,items:d.transitionsForManager,onInput:w.switchNotifMgrTransition},{item:r(({item:e})=>[a(`code`,_,i(e.value||(e.value===!1?`false`:`''`)),1),e.value?u(``,!0):(l(),o(`span`,v,`(`+i(e.label)+`)`,1))]),_:1},8,[`modelValue`,`items`,`onInput`])]),s(k,{class:`ma1`,onClick:f[5]||=e=>d.$waveui.notify(`Test`)},{default:r(()=>[...f[43]||=[c(`Notify`,-1)]]),_:1})]),a(`p`,y,[f[44]||=c(`Change the value of the `,-1),f[45]||=a(`strong`,{class:`code`},`transition`,-1),f[46]||=c(` option, in the above global config,
to `,-1),a(`code`,null,i(d.notifManagerTransition?`'${d.notifManagerTransition}'`:d.notifManagerTransition),1),f[47]||=c(`.`,-1)]),s(T,{tip:``},{default:r(()=>[f[50]||=c(`You could even`,-1),a(`a`,b,[f[49]||=c(`create your own transition`,-1),s(M,{class:`ml1`,md:``},{default:r(()=>[...f[48]||=[c(`mdi mdi-open-in-new`,-1)]]),_:1})]),f[51]||=c(`.`,-1)]),_:1}),s(D,{h3:``},{default:r(()=>[...f[52]||=[c(`Styling`,-1)]]),_:1}),f[66]||=a(`p`,null,[c(`By default, the notification manager is 280px-wide and all the notifications will inherit this width.`),a(`br`),c(`
You can override this via CSS. For instance:`)],-1),s(O,{language:`css`,dark:d.$store.state.darkMode},{default:r(()=>[...f[53]||=[c(`.w-notification-manager {width: 100%;max-width: 500px;}
`,-1)]]),_:1},8,[`dark`])]),"item-title.2":r(()=>[...f[67]||=[a(`span`,{class:`code`},`w-notification`,-1)]]),"item-content.2":r(()=>[s(T,{info:``},{default:r(()=>[...f[68]||=[c(`The `,-1),a(`span`,{class:`code`},`w-notification`,-1),c(` component is pretty much a wrapper around the `,-1),a(`span`,{class:`code`},`w-alert`,-1),c(`
component with added functionalities.`,-1),a(`br`,null,null,-1),c(`
it accepts all the parameters of the `,-1),a(`span`,{class:`code`},`w-alert`,-1),c(` component, plus positioning,
transitioning & timeout options.
`,-1)]]),_:1}),s(D,{h2:``},{default:r(()=>[...f[69]||=[c(`Notification position`,-1)]]),_:1}),f[83]||=a(`p`,null,`Notifications have a fixed position by default (positioned relative to the viewport).`,-1),s(A,{"content-class":`mt2`},{pug:r(()=>[...f[70]||=[c(`w-button.mr6(
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em")
  | `+i(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification

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
  | The alert is fixed on `+i(`{{ notification.position[0] }}`)+` `+i(`{{ notification.position[1] }}`)+`.`,-1)]]),html:r(()=>[...f[71]||=[c(`<w-button
  class="mr6"
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em">
  `+i(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification
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
  The alert is fixed on `+i(`{{ notification.position[0] }}`)+` `+i(`{{ notification.position[1] }}`)+`.
</w-notification>`,-1)]]),js:r(()=>[...f[72]||=[c(`data: () => ({
  notification: {
    show: false,
    position: ['bottom', 'right']
  }
})
`,-1)]]),default:r(()=>[s(k,{class:`mr6`,onClick:f[6]||=e=>d.notification.show=!d.notification.show,color:`primary`,outline:``,width:`8.5em`},{default:r(()=>[c(i(d.notification.show?`Hide`:`Show`)+` notification`,1)]),_:1}),s(j,{class:`my1 mr6`,modelValue:d.notification.position[0],"onUpdate:modelValue":f[7]||=e=>d.notification.position[0]=e,items:[{label:`top`},{label:`bottom`}],inline:``},null,8,[`modelValue`]),s(j,{class:`my1`,modelValue:d.notification.position[1],"onUpdate:modelValue":f[8]||=e=>d.notification.position[1]=e,items:[{label:`left`},{label:`center`},{label:`right`}],inline:``},null,8,[`modelValue`]),t(s(N,e({success:``,plain:``,round:``,shadow:``,transition:`bounce`},{[d.notification.position[0]]:!0,[d.notification.position[1]]:!0}),{default:r(()=>[c(`The alert is fixed on `+i(d.notification.position[0])+` `+i(d.notification.position[1])+`.`,1)]),_:1},16),[[p,d.notification.show]])]),_:1}),s(D,{h2:``},{default:r(()=>[...f[73]||=[c(`Notification timeout`,-1)]]),_:1}),f[84]||=a(`p`,null,`Notifications have no timeout by default. But you can add one to hide the notification by itself after some time.`,-1),f[85]||=a(`p`,null,[c(`Setting the timeout to `),a(`code`,null,`0`),c(` as a number or a string will cancel the timeout and the notification will stay visible.`)],-1),s(A,{"content-class":`mt2 relative ovh`},{pug:r(()=>[...f[74]||=[c(`w-button.mr6(
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em")
  | `+i(`{{ showNotification ? 'Hide' : 'Show' }}`)+` notification
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
  | `+i("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+`.`,-1)]]),html:r(()=>[...f[75]||=[c(`<w-button
  class="mr6"
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em">
  `+i(`{{ showNotification ? 'Hide' : 'Show' }}`)+` notification
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
  `+i("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+`.
</w-notification>`,-1)]]),js:r(()=>[...f[76]||=[c(`data: () => ({
  showNotification: false,
  timeout: 2000
})
`,-1)]]),default:r(()=>[s(k,{class:`mr6`,onClick:f[9]||=e=>d.notification2.show=!d.notification2.show,color:`primary`,outline:``,width:`8.5em`},{default:r(()=>[c(i(d.notification2.show?`Hide`:`Show`)+` notification`,1)]),_:1}),s(P,{class:`d-iflex no-wrap`,modelValue:d.notification2.timeout,"onUpdate:modelValue":f[10]||=e=>d.notification2.timeout=e,type:`number`,step:`500`,min:`0`,label:`Timeout:`,"label-position":`left`,style:{"max-width":`110px`}},null,8,[`modelValue`]),f[77]||=a(`span`,{class:`ml2`},`ms`,-1),s(N,{modelValue:d.notification2.show,"onUpdate:modelValue":f[11]||=e=>d.notification2.show=e,timeout:d.notification2.timeout,warning:``,plain:``,round:``,shadow:``,dismiss:``,absolute:``},{default:r(()=>[c(`This alert is
`+i(~~d.notification2.timeout?`auto-hiding after ${d.notification2.timeout} ms`:`not auto-hiding`)+`.`,1)]),_:1},8,[`modelValue`,`timeout`])]),_:1}),s(D,{h2:``},{default:r(()=>[...f[78]||=[c(`Transitions`,-1)]]),_:1}),s(A,null,{pug:r(()=>[...f[79]||=[c(`w-flex(wrap align-center)
  w-button.mr3(
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em")
    | `+i(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification
  w-radios.my4(v-model="transition" :items="transitions")
    template(#item="{ item }")
      | `+i(`{{ item.label }}`)+`
      code.ml2 `+i(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  | The alert is fixed on `+i(`{{ notification.position[0] }}`)+` `+i(`{{ notification.position[1] }}`)+`.`,-1)]]),html:r(()=>[...f[80]||=[c(`<w-flex wrap align-center>
  <w-button
    class="mr3"
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em">
    `+i(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification
  </w-button>

  <w-radios
    class="my4"
    v-model="transition"
    :items="transitions">
    <template #item="{ item }">
      `+i(`{{ item.label }}`)+`
      <code class="ml2">
        `+i(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  The alert is fixed on `+i(`{{ notification.position[0] }}`)+` `+i(`{{ notification.position[1] }}`)+`.
</w-notification>`,-1)]]),js:r(()=>[...f[81]||=[c(`data: () => ({
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
})`,-1)]]),default:r(()=>[s(F,{wrap:``,"align-center":``},{default:r(()=>[s(k,{class:`mr3`,onClick:f[12]||=e=>d.notification3.show=!d.notification3.show,color:`primary`,outline:``,width:`8.5em`},{default:r(()=>[c(i(d.notification3.show?`Hide`:`Show`)+` notification`,1)]),_:1}),s(j,{class:`my4`,modelValue:d.transition,"onUpdate:modelValue":f[13]||=e=>d.transition=e,items:d.transitions},{item:r(({item:e})=>[c(i(e.label),1),a(`code`,x,i(e.value||(e.value===!1?`false`:`''`)),1)]),_:1},8,[`modelValue`,`items`])]),_:1}),f[82]||=a(`div`,{class:`title4 mt3`},`Notification position`,-1),s(j,{class:`my1 mr6`,modelValue:d.notification3.position[0],"onUpdate:modelValue":f[14]||=e=>d.notification3.position[0]=e,items:[{label:`top`},{label:`bottom`}],inline:``},null,8,[`modelValue`]),s(j,{class:`my1`,modelValue:d.notification3.position[1],"onUpdate:modelValue":f[15]||=e=>d.notification3.position[1]=e,items:[{label:`left`},{label:`center`},{label:`right`}],inline:``},null,8,[`modelValue`]),t(s(N,e({info:``,color:`primary`,round:``,shadow:``,transition:d.transition},{[d.notification3.position[0]]:!0,[d.notification3.position[1]]:!0}),{default:r(()=>[c(`The alert is fixed on `+i(d.notification3.position[0])+` `+i(d.notification3.position[1])+`.`,1)]),_:1},16,[`transition`]),[[p,d.notification3.show]])]),_:1})]),_:1})])}var C=d({data:()=>({config:f,notification:{show:!1,position:[`bottom`,`right`]},notification2:{show:!1,timeout:2e3},notification3:{show:!1,position:[`bottom`,`right`]},transition:``,notifManagerTransition:`default`,transitions:[{label:`Default`,value:``},{label:`Bounce`,value:`bounce`},{label:`Scale`,value:`scale`},{label:`Twist`,value:`twist`},{label:`Fade`,value:`fade`},{label:`Slide fade left`,value:`slide-fade-left`},{label:`Slide fade right`,value:`slide-fade-right`},{label:`Slide fade up`,value:`slide-fade-up`},{label:`Slide fade down`,value:`slide-fade-down`},{label:`Scale fade`,value:`scale-fade`},{label:`None`,value:!1}],transitionsForManager:[{label:`Default`,value:`default`},{label:`Bounce`,value:`bounce`},{label:`Scale`,value:`scale`},{label:`Twist`,value:`twist`},{label:`Fade`,value:`fade`},{label:`Slide fade left`,value:`slide-fade-left`},{label:`Slide fade right`,value:`slide-fade-right`},{label:`Slide fade up`,value:`slide-fade-up`},{label:`Slide fade down`,value:`slide-fade-down`},{label:`Scale fade`,value:`scale-fade`},{label:`None`,value:!1}]}),methods:{switchNotificationManagerSide(){let{align:e}=f.notificationManager;f.notificationManager.align=e===`left`?`right`:`left`,this.$nextTick(()=>this.$waveui.notify(`Information.`))},switchNotifMgrTransition(){f.notificationManager.transition=this.notifManagerTransition,this.$nextTick(()=>this.$waveui.notify(`Information.`))},notify(){this.$waveui.notify({message:`Warning`,timeout:6e3,bgColor:`orange-light5`,color:`warning`,dismiss:!1,shadow:!0,round:!0,sm:!0,icon:`wi-star`})}}},[[`render`,S]]),w={class:`mt12 pt6`};function T(e,t,i,u,d,f){let p=n(`title-link`),m=n(`component-api`);return l(),o(`div`,w,[s(p,{class:`title1`,h2:``,slug:`api`},{default:r(()=>[...t[0]||=[a(`span`,{class:`code`},`<w-notification>`,-1),c(` API`,-1)]]),_:1}),s(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),s(m,{items:e.slots,title:`Slots`},null,8,[`items`]),s(m,{items:f.events,title:`Events`},null,8,[`items`])])}var E={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.`,transition:`Applies a particular transition to the notification when showing and hiding.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example.`,timeout:`Sets a timer to hide a visible notification after a certain amount of milliseconds. E.g. <code>2000</code> will hide the notification after 2 seconds. A value of <code>0</code> or empty string will keep the notification persistent (no timeout).`,absolute:`Sets the CSS position of the notification to <code>absolute</code> (fixed by default).`,top:`Places the notification at the top of the screen or at the top of its container if the <code>absolute</code> prop is set to true.`,bottom:`Places the notification at the bottom of the screen or at the bottom of its container if the <code>absolute</code> prop is set to true.`,left:`Places the notification at the left of the screen or at the left of its container if the <code>absolute</code> prop is set to true.`,right:`Places the notification at the right of the screen or at the right of its container if the <code>absolute</code> prop is set to true.`,zIndex:`Applies a z-index (positive or negative integer) to the notification.`,success:`Sets the type of the notification, applying the <code>success</code> class (green color) and adding a success icon on the left in the notification.`,info:`Sets the type of the notification, applying the <code>info</code> class (blue color) and adding an info icon on the left in the notification.`,warning:`Sets the type of the notification, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the notification.`,error:`Sets the type of the notification, applying the <code>error</code> class (red color) and adding an error icon on the left in the notification.`,color:`Applies a color to the notification's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the notification's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the notification.`,tile:`Removes the default border-radius and sets sharp edges on the notification.`,round:`Sets a maximum border-radius on the corners of the notification, giving it a round look.`,plain:`Emphasizes a "typed" notification (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.`,dismiss:`Adds a close button (cross icon) on the right in the notification. Clicking on this button hides the notification.`,noBorder:`Removes the default border from the notification container.`,borderLeft:`Adds a left border on the notification. Only one side-border can be applied at the same time.`,borderRight:`Adds a right border on the notification. Only one side-border can be applied at the same time.`,borderTop:`Adds a top border on the notification. Only one side-border can be applied at the same time.`,borderBottom:`Adds a bottom border on the notification. Only one side-border can be applied at the same time.`,outline:`The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.`,xs:`Sets the size of the notification to extra small.`,sm:`Sets the size of the notification to small.`,md:`Sets the size of the notification to medium.`,lg:`Sets the size of the notification to large.`,xl:`Sets the size of the notification to extra large.`},D={default:{description:`The notification content.`}},O={input:`Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on notification dismiss/hide.`},k=d({data:()=>({propsDescs:E,slots:D}),computed:{props(){return m.props},events(){return m.emits.reduce((e,t)=>(e[t]={description:O[t]||``})&&e,{})}}},[[`render`,T]]);function A(e,t,i,u,d,f){let p=n(`ui-component-title`),m=n(`examples`),h=n(`api`);return l(),o(`main`,null,[s(p,{code:!1,slug:`notification-manager-and-w-notification`},{default:r(()=>[...t[0]||=[c(`Built-in notification manager & `,-1),a(`span`,{class:`code`},`w-notification`,-1)]]),_:1}),s(m),s(h)])}var j=d({components:{Examples:C,Api:k}},[[`render`,A]]);export{j as default};