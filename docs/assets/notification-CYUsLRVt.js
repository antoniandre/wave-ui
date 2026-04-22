import{C as e,H as t,N as n,U as r,c as i,d as a,g as o,h as s,k as c,u as l,vt as u}from"./runtime-core.esm-bundler-DPe36P4s.js";import{s as d}from"./runtime-dom.esm-bundler-Dtklx5Fk.js";import{t as f}from"./_plugin-vue_export-helper-S3RvzygF.js";import{W as p,x as m}from"./index-CmUoOmTq.js";var h={class:`w-flex align-center`},g={class:`xs6 md4 lg3`},_={class:`ml2`},v={key:0,class:`ml2`},y={class:`mt4`},b={class:`ml1`,href:`https://vuejs.org/guide/built-ins/transition.html`},x={class:`ml2`};function S(f,p,m,S,C,w){let T=n(`alert`),E=n(`w-list`),D=n(`title-link`),O=n(`ssh-pre`),k=n(`w-button`),A=n(`example`),j=n(`w-radios`),M=n(`w-icon`),N=n(`w-notification`),P=n(`w-input`),F=n(`w-flex`),I=n(`w-tabs`);return c(),a(`div`,null,[p[86]||=i(`div`,{class:`title3 my6`},`You have the choice to use one or the other, or both.`,-1),o(I,{class:`mt4`,items:2,"content-class":`pl4`,"model-value":`0`},{"item-title.1":t(()=>[...p[16]||=[s(`Notification manager`,-1)]]),"item-content.1":t(()=>[p[54]||=i(`p`,null,[s(`The built-in notification manager can be used via `),i(`code`,null,`$waveui.notify()`),s(` from any component.`),i(`br`)],-1),o(T,{tip:``},{default:t(()=>[...p[17]||=[s(`Note that you can access the `,-1),i(`code`,null,`$waveui`,-1),s(` object with `,-1),i(`code`,null,`const $waveui = inject('$waveui')`,-1),s(` in composition API, or from `,-1),i(`code`,null,`this`,-1),s(` if not using the composition API.`,-1)]]),_:1}),p[55]||=i(`div`,{class:`title3`},`Pros`,-1),o(E,{icon:`wi-check`,items:2},{"item.1":t(()=>[...p[18]||=[s(`Very convenient and fast to use`,-1)]]),"item.2":t(()=>[...p[19]||=[s(`Handles the stacking of simultaneous notifications`,-1)]]),_:1}),p[56]||=i(`div`,{class:`title3 mt4`},`Cons`,-1),o(E,{icon:`wi-minus`,items:1},{"item.1":t(()=>[...p[20]||=[s(`Less flexible than `,-1),i(`strong`,{class:`code mx1`},`w-notification`,-1),s(` in terms of layout (no slot available)
`,-1)]]),_:1}),o(D,{h2:``},{default:t(()=>[...p[21]||=[s(`Simple use of the notify method`,-1)]]),_:1}),p[57]||=i(`p`,null,`The notify method takes up to 3 parameters, here is the syntax:`,-1),o(O,{language:`js`,dark:f.$store.state.darkMode},{default:t(()=>[...p[22]||=[s(`$waveui.notify({String} message, {String} type?, {Number} timeout?)`,-1)]]),_:1},8,[`dark`]),p[58]||=i(`p`,null,[s(`Access `),i(`code`,null,`$waveui`),s(` in composition API, or from `),i(`code`,null,`this`),s(` if not using the composition API.`)],-1),o(O,{language:`js`,dark:f.$store.state.darkMode},{default:t(()=>[...p[23]||=[s(`import { inject } from 'vue'
const $waveui = inject('$waveui')`,-1)]]),_:1},8,[`dark`]),p[59]||=i(`p`,null,[s(`The default type is `),i(`code`,null,`info`),s(` and the default timeout is `),i(`code`,null,`4000`),s(`.`),i(`br`),s(`
A timeout of `),i(`code`,null,`0`),s(` will keep the notification visible permanently (until dismissed).`)],-1),o(A,null,{pug:t(()=>[...p[28]||=[s(`w-button.ma1(@click="$waveui.notify&#40;'Information.'&#41;" bg-color="info") Notify info
w-button.ma1(@click="$waveui.notify&#40;'Success!', 'success'&#41;" bg-color="success") Notify success
w-button.ma1(@click="$waveui.notify&#40;'Warning!', 'warning'&#41;" bg-color="warning") Notify warning
w-button.ma1(@click="$waveui.notify&#40;'Error :(', 'error', 0&#41;" bg-color="error") Permanent error`,-1)]]),html:t(()=>[...p[29]||=[s(`<w-button @click="$waveui.notify('Information.')" bg-color="info">
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
`,-1)]]),default:t(()=>[o(k,{class:`ma1`,onClick:p[0]||=e=>f.$waveui.notify(`Information.`),"bg-color":`info`},{default:t(()=>[...p[24]||=[s(`Notify info`,-1)]]),_:1}),o(k,{class:`ma1`,onClick:p[1]||=e=>f.$waveui.notify(`Success!`,`success`),"bg-color":`success`},{default:t(()=>[...p[25]||=[s(`Notify success`,-1)]]),_:1}),o(k,{class:`ma1`,onClick:p[2]||=e=>f.$waveui.notify(`Warning!`,`warning`),"bg-color":`warning`},{default:t(()=>[...p[26]||=[s(`Notify warning`,-1)]]),_:1}),o(k,{class:`ma1`,onClick:p[3]||=e=>f.$waveui.notify(`Error :(`,`error`,0),"bg-color":`error`},{default:t(()=>[...p[27]||=[s(`Permanent error`,-1)]]),_:1})]),_:1}),o(D,{h2:``},{default:t(()=>[...p[30]||=[s(`If you need more control`,-1)]]),_:1}),p[60]||=i(`p`,null,[s(`The `),i(`code`,null,`notify`),s(` method also accepts a single Object parameter which will accept all the options
of the `),i(`strong`,{class:`code`},`w-alert`),s(` component, plus the `),i(`code`,null,`message`),s(` and `),i(`code`,null,`timeout`),s(` options.`),i(`br`),s(`
E.g.`)],-1),o(O,{language:`js`,dark:f.$store.state.darkMode},{default:t(()=>[...p[31]||=[s(`$waveui.notify({
  message: 'Message.',
  timeout: 3000, // ms.
  ... // Other options from w-alert.
})
`,-1)]]),_:1},8,[`dark`]),p[61]||=i(`p`,null,[s(`Here is an example of a custom notification using a few different `),i(`strong`,{class:`code`},`w-alert`),s(` options.
`)],-1),o(A,null,{pug:t(()=>[...p[33]||=[s(`w-button(@click="notify" bg-color="info") Notify custom`,-1)]]),html:t(()=>[...p[34]||=[s(`<w-button @click="notify" bg-color="info">
  Notify custom
</w-button>`,-1)]]),js:t(()=>[...p[35]||=[s(`methods: {
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
`,-1)]]),default:t(()=>[o(k,{onClick:w.notify,"bg-color":`info`},{default:t(()=>[...p[32]||=[s(`Notify custom`,-1)]]),_:1},8,[`onClick`])]),_:1}),o(T,{class:`mt12`,warning:``},{default:t(()=>[...p[36]||=[i(`div`,{class:`title4`},[i(`strong`,null,`Caution:`),s(` You could easily cause an `),i(`strong`,{class:`black`},`infinite loop`),s(` by triggering a
notification from the template using this code for instance:`)],-1),i(`p`,null,[i(`code`,null,u(`{{ $waveui.notify('test') }}`))],-1),i(`p`,{class:`mt4`},`Indeed, if you write the above expression directly in a component's template without condition
around it, the notification will be triggered, which will trigger the Vue re-rendering which
will re-read and execute this expression and so on.
`,-1)]]),_:1}),o(D,{h2:``},{default:t(()=>[...p[37]||=[s(`Notification manager tweaking`,-1)]]),_:1}),p[62]||=i(`p`,null,`The global configuration allows you to override the default side and transition of the
notification manager.`,-1),o(O,{language:`js`,dark:f.$store.state.darkMode},{default:t(()=>[...p[38]||=[s(`new WaveUI({
  notificationManager: {
    align: 'right', // Or 'left'.
    transition: 'default' // Sliding from the side by default.
  }
})
`,-1)]]),_:1},8,[`dark`]),o(D,{h3:``},{default:t(()=>[...p[39]||=[s(`Align to the left or right`,-1)]]),_:1}),p[63]||=i(`p`,null,[s(`Change the value of the `),i(`strong`,{class:`code`},`align`),s(` option, in the above global config, to `),i(`code`,null,`left`),s(`
or `),i(`code`,null,`right`),s(`.`)],-1),o(k,{onClick:w.switchNotificationManagerSide},{default:t(()=>[...p[40]||=[s(`Change side & notify`,-1)]]),_:1},8,[`onClick`]),o(T,{tip:``},{default:t(()=>[...p[41]||=[s(`After switching side, you can also test the different notifications from the above examples.
`,-1)]]),_:1}),o(D,{h3:``},{default:t(()=>[...p[42]||=[s(`Different transitions`,-1)]]),_:1}),p[64]||=i(`p`,null,[s(`The default transition is `),i(`code`,null,`slide-left`),s(` when the notification manager is on the right and
`),i(`code`,null,`slide-right`),s(` when it's on the left.
`)],-1),p[65]||=i(`div`,{class:`title4`},`Pick a transition`,-1),i(`div`,h,[i(`div`,g,[o(j,{class:`ma1`,modelValue:f.notifManagerTransition,"onUpdate:modelValue":p[4]||=e=>f.notifManagerTransition=e,items:f.transitionsForManager,onInput:w.switchNotifMgrTransition},{item:t(({item:e})=>[i(`code`,_,u(e.value||(e.value===!1?`false`:`''`)),1),e.value?l(``,!0):(c(),a(`span`,v,`(`+u(e.label)+`)`,1))]),_:1},8,[`modelValue`,`items`,`onInput`])]),o(k,{class:`ma1`,onClick:p[5]||=e=>f.$waveui.notify(`Test`)},{default:t(()=>[...p[43]||=[s(`Notify`,-1)]]),_:1})]),i(`p`,y,[p[44]||=s(`Change the value of the `,-1),p[45]||=i(`strong`,{class:`code`},`transition`,-1),p[46]||=s(` option, in the above global config,
to `,-1),i(`code`,null,u(f.notifManagerTransition?`'${f.notifManagerTransition}'`:f.notifManagerTransition),1),p[47]||=s(`.`,-1)]),o(T,{tip:``},{default:t(()=>[p[50]||=s(`You could even`,-1),i(`a`,b,[p[49]||=s(`create your own transition`,-1),o(M,{class:`ml1`,md:``},{default:t(()=>[...p[48]||=[s(`mdi mdi-open-in-new`,-1)]]),_:1})]),p[51]||=s(`.`,-1)]),_:1}),o(D,{h3:``},{default:t(()=>[...p[52]||=[s(`Styling`,-1)]]),_:1}),p[66]||=i(`p`,null,[s(`By default, the notification manager is 280px-wide and all the notifications will inherit this width.`),i(`br`),s(`
You can override this via CSS. For instance:`)],-1),o(O,{language:`css`,dark:f.$store.state.darkMode},{default:t(()=>[...p[53]||=[s(`.w-notification-manager {width: 100%;max-width: 500px;}
`,-1)]]),_:1},8,[`dark`])]),"item-title.2":t(()=>[...p[67]||=[i(`span`,{class:`code`},`w-notification`,-1)]]),"item-content.2":t(()=>[o(T,{info:``},{default:t(()=>[...p[68]||=[s(`The `,-1),i(`span`,{class:`code`},`w-notification`,-1),s(` component is pretty much a wrapper around the `,-1),i(`span`,{class:`code`},`w-alert`,-1),s(`
component with added functionalities.`,-1),i(`br`,null,null,-1),s(`
it accepts all the parameters of the `,-1),i(`span`,{class:`code`},`w-alert`,-1),s(` component, plus positioning,
transitioning & timeout options.
`,-1)]]),_:1}),o(D,{h2:``},{default:t(()=>[...p[69]||=[s(`Notification position`,-1)]]),_:1}),p[83]||=i(`p`,null,`Notifications have a fixed position by default (positioned relative to the viewport).`,-1),o(A,{"content-class":`mt2`},{pug:t(()=>[...p[70]||=[s(`w-button.mr6(
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em")
  | `+u(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification

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
  | The alert is fixed on `+u(`{{ notification.position[0] }}`)+` `+u(`{{ notification.position[1] }}`)+`.`,-1)]]),html:t(()=>[...p[71]||=[s(`<w-button
  class="mr6"
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em">
  `+u(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification
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
  The alert is fixed on `+u(`{{ notification.position[0] }}`)+` `+u(`{{ notification.position[1] }}`)+`.
</w-notification>`,-1)]]),js:t(()=>[...p[72]||=[s(`data: () => ({
  notification: {
    show: false,
    position: ['bottom', 'right']
  }
})
`,-1)]]),default:t(()=>[o(k,{class:`mr6`,onClick:p[6]||=e=>f.notification.show=!f.notification.show,color:`primary`,outline:``,width:`8.5em`},{default:t(()=>[s(u(f.notification.show?`Hide`:`Show`)+` notification`,1)]),_:1}),o(j,{class:`my1 mr6`,modelValue:f.notification.position[0],"onUpdate:modelValue":p[7]||=e=>f.notification.position[0]=e,items:[{label:`top`},{label:`bottom`}],inline:``},null,8,[`modelValue`]),o(j,{class:`my1`,modelValue:f.notification.position[1],"onUpdate:modelValue":p[8]||=e=>f.notification.position[1]=e,items:[{label:`left`},{label:`center`},{label:`right`}],inline:``},null,8,[`modelValue`]),r(o(N,e({success:``,plain:``,round:``,shadow:``,transition:`bounce`},{[f.notification.position[0]]:!0,[f.notification.position[1]]:!0}),{default:t(()=>[s(`The alert is fixed on `+u(f.notification.position[0])+` `+u(f.notification.position[1])+`.`,1)]),_:1},16),[[d,f.notification.show]])]),_:1}),o(D,{h2:``},{default:t(()=>[...p[73]||=[s(`Notification timeout`,-1)]]),_:1}),p[84]||=i(`p`,null,`Notifications have no timeout by default. But you can add one to hide the notification by itself after some time.`,-1),p[85]||=i(`p`,null,[s(`Setting the timeout to `),i(`code`,null,`0`),s(` as a number or a string will cancel the timeout and the notification will stay visible.`)],-1),o(A,{"content-class":`mt2 relative ovh`},{pug:t(()=>[...p[74]||=[s(`w-button.mr6(
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em")
  | `+u(`{{ showNotification ? 'Hide' : 'Show' }}`)+` notification
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
  | `+u("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+`.`,-1)]]),html:t(()=>[...p[75]||=[s(`<w-button
  class="mr6"
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em">
  `+u(`{{ showNotification ? 'Hide' : 'Show' }}`)+` notification
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
  `+u("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+`.
</w-notification>`,-1)]]),js:t(()=>[...p[76]||=[s(`data: () => ({
  showNotification: false,
  timeout: 2000
})
`,-1)]]),default:t(()=>[o(k,{class:`mr6`,onClick:p[9]||=e=>f.notification2.show=!f.notification2.show,color:`primary`,outline:``,width:`8.5em`},{default:t(()=>[s(u(f.notification2.show?`Hide`:`Show`)+` notification`,1)]),_:1}),o(P,{class:`d-iflex no-wrap`,modelValue:f.notification2.timeout,"onUpdate:modelValue":p[10]||=e=>f.notification2.timeout=e,type:`number`,step:`500`,min:`0`,label:`Timeout:`,"label-position":`left`,style:{"max-width":`110px`}},null,8,[`modelValue`]),p[77]||=i(`span`,{class:`ml2`},`ms`,-1),o(N,{modelValue:f.notification2.show,"onUpdate:modelValue":p[11]||=e=>f.notification2.show=e,timeout:f.notification2.timeout,warning:``,plain:``,round:``,shadow:``,dismiss:``,absolute:``},{default:t(()=>[s(`This alert is
`+u(~~f.notification2.timeout?`auto-hiding after ${f.notification2.timeout} ms`:`not auto-hiding`)+`.`,1)]),_:1},8,[`modelValue`,`timeout`])]),_:1}),o(D,{h2:``},{default:t(()=>[...p[78]||=[s(`Transitions`,-1)]]),_:1}),o(A,null,{pug:t(()=>[...p[79]||=[s(`w-flex(wrap align-center)
  w-button.mr3(
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em")
    | `+u(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification
  w-radios.my4(v-model="transition" :items="transitions")
    template(#item="{ item }")
      | `+u(`{{ item.label }}`)+`
      code.ml2 `+u(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  | The alert is fixed on `+u(`{{ notification.position[0] }}`)+` `+u(`{{ notification.position[1] }}`)+`.`,-1)]]),html:t(()=>[...p[80]||=[s(`<w-flex wrap align-center>
  <w-button
    class="mr3"
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em">
    `+u(`{{ notification.show ? 'Hide' : 'Show' }}`)+` notification
  </w-button>

  <w-radios
    class="my4"
    v-model="transition"
    :items="transitions">
    <template #item="{ item }">
      `+u(`{{ item.label }}`)+`
      <code class="ml2">
        `+u(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  The alert is fixed on `+u(`{{ notification.position[0] }}`)+` `+u(`{{ notification.position[1] }}`)+`.
</w-notification>`,-1)]]),js:t(()=>[...p[81]||=[s(`data: () => ({
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
})`,-1)]]),default:t(()=>[o(F,{wrap:``,"align-center":``},{default:t(()=>[o(k,{class:`mr3`,onClick:p[12]||=e=>f.notification3.show=!f.notification3.show,color:`primary`,outline:``,width:`8.5em`},{default:t(()=>[s(u(f.notification3.show?`Hide`:`Show`)+` notification`,1)]),_:1}),o(j,{class:`my4`,modelValue:f.transition,"onUpdate:modelValue":p[13]||=e=>f.transition=e,items:f.transitions},{item:t(({item:e})=>[s(u(e.label),1),i(`code`,x,u(e.value||(e.value===!1?`false`:`''`)),1)]),_:1},8,[`modelValue`,`items`])]),_:1}),p[82]||=i(`div`,{class:`title4 mt3`},`Notification position`,-1),o(j,{class:`my1 mr6`,modelValue:f.notification3.position[0],"onUpdate:modelValue":p[14]||=e=>f.notification3.position[0]=e,items:[{label:`top`},{label:`bottom`}],inline:``},null,8,[`modelValue`]),o(j,{class:`my1`,modelValue:f.notification3.position[1],"onUpdate:modelValue":p[15]||=e=>f.notification3.position[1]=e,items:[{label:`left`},{label:`center`},{label:`right`}],inline:``},null,8,[`modelValue`]),r(o(N,e({info:``,color:`primary`,round:``,shadow:``,transition:f.transition},{[f.notification3.position[0]]:!0,[f.notification3.position[1]]:!0}),{default:t(()=>[s(`The alert is fixed on `+u(f.notification3.position[0])+` `+u(f.notification3.position[1])+`.`,1)]),_:1},16,[`transition`]),[[d,f.notification3.show]])]),_:1})]),_:1})])}var C=f({data:()=>({config:p,notification:{show:!1,position:[`bottom`,`right`]},notification2:{show:!1,timeout:2e3},notification3:{show:!1,position:[`bottom`,`right`]},transition:``,notifManagerTransition:`default`,transitions:[{label:`Default`,value:``},{label:`Bounce`,value:`bounce`},{label:`Scale`,value:`scale`},{label:`Twist`,value:`twist`},{label:`Fade`,value:`fade`},{label:`Slide fade left`,value:`slide-fade-left`},{label:`Slide fade right`,value:`slide-fade-right`},{label:`Slide fade up`,value:`slide-fade-up`},{label:`Slide fade down`,value:`slide-fade-down`},{label:`Scale fade`,value:`scale-fade`},{label:`None`,value:!1}],transitionsForManager:[{label:`Default`,value:`default`},{label:`Bounce`,value:`bounce`},{label:`Scale`,value:`scale`},{label:`Twist`,value:`twist`},{label:`Fade`,value:`fade`},{label:`Slide fade left`,value:`slide-fade-left`},{label:`Slide fade right`,value:`slide-fade-right`},{label:`Slide fade up`,value:`slide-fade-up`},{label:`Slide fade down`,value:`slide-fade-down`},{label:`Scale fade`,value:`scale-fade`},{label:`None`,value:!1}]}),methods:{switchNotificationManagerSide(){let{align:e}=p.notificationManager;p.notificationManager.align=e===`left`?`right`:`left`,this.$nextTick(()=>this.$waveui.notify(`Information.`))},switchNotifMgrTransition(){p.notificationManager.transition=this.notifManagerTransition,this.$nextTick(()=>this.$waveui.notify(`Information.`))},notify(){this.$waveui.notify({message:`Warning`,timeout:6e3,bgColor:`orange-light5`,color:`warning`,dismiss:!1,shadow:!0,round:!0,sm:!0,icon:`wi-star`})}}},[[`render`,S]]),w={class:`mt12 pt6`};function T(e,r,l,u,d,f){let p=n(`title-link`),m=n(`component-api`);return c(),a(`div`,w,[o(p,{class:`title1`,h2:``,slug:`api`},{default:t(()=>[...r[0]||=[i(`span`,{class:`code`},`<w-notification>`,-1),s(` API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:e.slots,title:`Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`])])}var E={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.`,transition:`Applies a particular transition to the notification when showing and hiding.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example.`,timeout:`Sets a timer to hide a visible notification after a certain amount of milliseconds. E.g. <code>2000</code> will hide the notification after 2 seconds. A value of <code>0</code> or empty string will keep the notification persistent (no timeout).`,absolute:`Sets the CSS position of the notification to <code>absolute</code> (fixed by default).`,top:`Places the notification at the top of the screen or at the top of its container if the <code>absolute</code> prop is set to true.`,bottom:`Places the notification at the bottom of the screen or at the bottom of its container if the <code>absolute</code> prop is set to true.`,left:`Places the notification at the left of the screen or at the left of its container if the <code>absolute</code> prop is set to true.`,right:`Places the notification at the right of the screen or at the right of its container if the <code>absolute</code> prop is set to true.`,zIndex:`Applies a z-index (positive or negative integer) to the notification.`,success:`Sets the type of the notification, applying the <code>success</code> class (green color) and adding a success icon on the left in the notification.`,info:`Sets the type of the notification, applying the <code>info</code> class (blue color) and adding an info icon on the left in the notification.`,warning:`Sets the type of the notification, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the notification.`,error:`Sets the type of the notification, applying the <code>error</code> class (red color) and adding an error icon on the left in the notification.`,color:`Applies a color to the notification's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the notification's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the notification.`,tile:`Removes the default border-radius and sets sharp edges on the notification.`,round:`Sets a maximum border-radius on the corners of the notification, giving it a round look.`,plain:`Emphasizes a "typed" notification (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.`,dismiss:`Adds a close button (cross icon) on the right in the notification. Clicking on this button hides the notification.`,noBorder:`Removes the default border from the notification container.`,borderLeft:`Adds a left border on the notification. Only one side-border can be applied at the same time.`,borderRight:`Adds a right border on the notification. Only one side-border can be applied at the same time.`,borderTop:`Adds a top border on the notification. Only one side-border can be applied at the same time.`,borderBottom:`Adds a bottom border on the notification. Only one side-border can be applied at the same time.`,outline:`The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.`,xs:`Sets the size of the notification to extra small.`,sm:`Sets the size of the notification to small.`,md:`Sets the size of the notification to medium.`,lg:`Sets the size of the notification to large.`,xl:`Sets the size of the notification to extra large.`},D={default:{description:`The notification content.`}},O={input:`Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on notification dismiss/hide.`},k=f({data:()=>({propsDescs:E,slots:D}),computed:{props(){return m.props},events(){return m.emits.reduce((e,t)=>(e[t]={description:O[t]||``})&&e,{})}}},[[`render`,T]]);function A(e,r,l,u,d,f){let p=n(`ui-component-title`),m=n(`examples`),h=n(`api`);return c(),a(`main`,null,[o(p,{code:!1,slug:`notification-manager-and-w-notification`},{default:t(()=>[...r[0]||=[s(`Built-in notification manager & `,-1),i(`span`,{class:`code`},`w-notification`,-1)]]),_:1}),o(m),o(h)])}var j=f({components:{Examples:C,Api:k}},[[`render`,A]]);export{j as default};