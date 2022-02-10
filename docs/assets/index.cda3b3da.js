import{n as r,p as s,v as c}from"./index.6bc87caa.js";import"./vendor.748d1766.js";var h=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",[i("w-tabs",{staticClass:"mt4",attrs:{items:2,"content-class":"pl4"},scopedSlots:t._u([{key:"item-title.1",fn:function(){return[t._v("Notification manager")]},proxy:!0},{key:"item-content.1",fn:function(){return[i("p",[t._v("The built-in notification manager can be used via "),i("code",[t._v("this.$waveui.notify()")]),t._v(" from any component.")]),i("div",{staticClass:"title3"},[t._v("Pros")]),i("w-list",{attrs:{icon:"wi-check",items:2},scopedSlots:t._u([{key:"item.1",fn:function(){return[t._v("Very convenient and fast to use")]},proxy:!0},{key:"item.2",fn:function(){return[t._v("Handles the stacking of simultaneous notifications")]},proxy:!0}])}),i("div",{staticClass:"title3 mt4"},[t._v("Cons")]),i("w-list",{attrs:{icon:"wi-minus",items:1},scopedSlots:t._u([{key:"item.1",fn:function(){return[t._v("Less flexible than "),i("strong",{staticClass:"code mx1"},[t._v("w-notification")]),t._v(` in terms of layout (no slot available)
`)]},proxy:!0}])}),i("title-link",{attrs:{h2:""}},[t._v("Simple use of the notify method")]),i("p",[t._v("The notify method takes up to 3 parameters, here is the syntax:")]),i("ssh-pre",{attrs:{language:"js"}},[t._v("this.$waveui.notify({String} message, {String} type?, {Number} timeout?)")]),i("p",[t._v("The default type is "),i("code",[t._v("info")]),t._v(" and the default timeout is "),i("code",[t._v("4000")]),t._v("."),i("br"),t._v(`
A timeout of `),i("code",[t._v("0")]),t._v(" will keep the notification visible permanently (until dismissed).")]),i("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-button.ma1(@click="$waveui.notify&#40;'Information.'&#41;" bg-color="info") Notify info
w-button.ma1(@click="$waveui.notify&#40;'Success!', 'success'&#41;" bg-color="success") Notify success
w-button.ma1(@click="$waveui.notify&#40;'Warning!', 'warning'&#41;" bg-color="warning") Notify warning
w-button.ma1(@click="$waveui.notify&#40;'Error :(', 'error', 0&#41;" bg-color="error") Permanent error`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button @click="$waveui.notify('Information.')" bg-color="info">
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
`)]},proxy:!0}])},[i("w-button",{staticClass:"ma1",attrs:{"bg-color":"info"},on:{click:function(e){return t.$waveui.notify("Information.")}}},[t._v("Notify info")]),i("w-button",{staticClass:"ma1",attrs:{"bg-color":"success"},on:{click:function(e){return t.$waveui.notify("Success!","success")}}},[t._v("Notify success")]),i("w-button",{staticClass:"ma1",attrs:{"bg-color":"warning"},on:{click:function(e){return t.$waveui.notify("Warning!","warning")}}},[t._v("Notify warning")]),i("w-button",{staticClass:"ma1",attrs:{"bg-color":"error"},on:{click:function(e){return t.$waveui.notify("Error :(","error",0)}}},[t._v("Permanent error")])],1),i("title-link",{attrs:{h2:""}},[t._v("If you need more control")]),i("p",[t._v("The "),i("code",[t._v("notify")]),t._v(` method also accepts a single Object parameter which will accept all the options
of the `),i("strong",{staticClass:"code"},[t._v("w-alert")]),t._v(" component, plus the "),i("code",[t._v("message")]),t._v(" and "),i("code",[t._v("timeout")]),t._v(" options."),i("br"),t._v(`
E.g.`)]),i("ssh-pre",{attrs:{language:"js"}},[t._v(`this.$waveui.notify({
  message: 'Message.',
  timeout: 3000, // ms.
  ... // Other options from w-alert.
})
`)]),i("p",[t._v("Here is an example of a custom notification using a few different "),i("strong",{staticClass:"code"},[t._v("w-alert")]),t._v(` options.
`)]),i("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button(@click="notify" bg-color="info") Notify custom')]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button @click="notify" bg-color="info">
  Notify custom
</w-button>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`methods: {
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
`)]},proxy:!0}])},[i("w-button",{attrs:{"bg-color":"info"},on:{click:t.notify}},[t._v("Notify custom")])],1),i("alert",{staticClass:"mt12",attrs:{warning:""}},[i("div",{staticClass:"title4"},[i("strong",[t._v("Caution:")]),t._v(" You could easily cause an "),i("strong",{staticClass:"black"},[t._v("infinite loop")]),t._v(` by triggering a
notification from the template using this code for instance:`)]),i("p",[i("code",[t._v(t._s("{{ $waveui.notify('test') }}"))])]),i("p",{staticClass:"mt4"},[t._v(`Indeed, if you write the above expression directly in a component's template without condition
around it, the notification will be triggered, which will trigger the Vue re-rendering which
will re-read and execute this expression and so on.
`)])]),i("title-link",{attrs:{h2:""}},[t._v("Notification manager tweaking")]),i("p",[t._v(`The global configuration allows you to override the default side and transition of the
notification manager.`)]),i("ssh-pre",{attrs:{language:"js"}},[t._v(`new WaveUI({
  notificationManager: {
    align: 'right', // Or 'left'.
    transition: 'default' // Sliding from the side by default.
  }
})
`)]),i("title-link",{attrs:{h3:""}},[t._v("Align to the left or right")]),i("p",[t._v("Change the value of the "),i("strong",{staticClass:"code"},[t._v("align")]),t._v(" option, in the above global config, to "),i("code",[t._v("left")]),t._v(`
or `),i("code",[t._v("right")]),t._v(".")]),i("w-button",{on:{click:t.switchNotificationManagerSide}},[t._v("Change side & notify")]),i("alert",{attrs:{tip:""}},[t._v(`After switching side, you can also test the different notifications from the above examples.
`)]),i("title-link",{attrs:{h3:""}},[t._v("Different transitions")]),i("p",[t._v("The default transition is "),i("code",[t._v("slide-left")]),t._v(` when the notification manager is on the right and
`),i("code",[t._v("slide-right")]),t._v(` when it's on the left.
`)]),i("div",{staticClass:"title4"},[t._v("Pick a transition")]),i("div",{staticClass:"w-flex align-center"},[i("div",{staticClass:"xs6 md4 lg3"},[i("w-radios",{staticClass:"ma1",attrs:{items:t.transitionsForManager},on:{input:t.switchNotifMgrTransition},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[i("code",{staticClass:"ml2"},[t._v(t._s(a.value||(a.value===!1?"false":"''")))]),a.value?t._e():i("span",{staticClass:"ml2"},[t._v("("+t._s(a.label)+")")])]}}]),model:{value:t.notifManagerTransition,callback:function(e){t.notifManagerTransition=e},expression:"notifManagerTransition"}})],1),i("w-button",{staticClass:"ma1",on:{click:function(e){return t.$waveui.notify("Test")}}},[t._v("Notify")])],1),i("p",{staticClass:"mt4"},[t._v("Change the value of the "),i("strong",{staticClass:"code"},[t._v("transition")]),t._v(` option, in the above global config,
to `),i("code",[t._v(t._s(t.notifManagerTransition?"'"+t.notifManagerTransition+"'":t.notifManagerTransition))]),t._v(".")]),i("alert",{attrs:{tip:""}},[t._v("You could even"),i("a",{staticClass:"ml1",attrs:{href:"https://vuejs.org/v2/guide/transitions.html"}},[t._v("create your own transition"),i("w-icon",{staticClass:"ml1",attrs:{md:""}},[t._v("mdi mdi-open-in-new")])],1),t._v(".")]),i("title-link",{attrs:{h3:""}},[t._v("Styling")]),i("p",[t._v("By default, the notification manager is 280px-wide and all the notifications will inherit this width."),i("br"),t._v(`
You can override this via CSS. For instance:`)]),i("ssh-pre",{attrs:{language:"css"}},[t._v(`.w-notification-manager {width: 100%;max-width: 500px;}
`)])]},proxy:!0},{key:"item-title.2",fn:function(){return[i("span",{staticClass:"code"},[t._v("w-notification")])]},proxy:!0},{key:"item-content.2",fn:function(){var e,a;return[i("alert",{attrs:{info:""}},[t._v("The "),i("span",{staticClass:"code"},[t._v("w-notification")]),t._v(" component is pretty much a wrapper around the "),i("span",{staticClass:"code"},[t._v("w-alert")]),t._v(`
component with added functionalities.`),i("br"),t._v(`
it accepts all the parameters of the `),i("span",{staticClass:"code"},[t._v("w-alert")]),t._v(` component, plus positioning,
transitioning & timeout options.
`)]),i("title-link",{attrs:{h2:""}},[t._v("Notification position")]),i("p",[t._v("Notifications have a fixed position by default (positioned relative to the viewport).")]),i("example",{attrs:{"content-class":"mt2"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-button.mr6(
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em")
  | `+t._s("{{ notification.show ? 'Hide' : 'Show' }}")+` notification

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
  | The alert is fixed on `+t._s("{{ notification.position[0] }}")+" "+t._s("{{ notification.position[1] }}")+".")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button
  class="mr6"
  @click="notification.show = !notification.show"
  color="primary"
  outline
  width="8.5em">
  `+t._s("{{ notification.show ? 'Hide' : 'Show' }}")+` notification
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
  The alert is fixed on `+t._s("{{ notification.position[0] }}")+" "+t._s("{{ notification.position[1] }}")+`.
</w-notification>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  notification: {
    show: false,
    position: ['bottom', 'right']
  }
})
`)]},proxy:!0}])},[i("w-button",{staticClass:"mr6",attrs:{color:"primary",outline:"",width:"8.5em"},on:{click:function(n){t.notification.show=!t.notification.show}}},[t._v(t._s(t.notification.show?"Hide":"Show")+" notification")]),i("w-radios",{staticClass:"my1 mr6",attrs:{items:[{label:"top"},{label:"bottom"}],inline:""},model:{value:t.notification.position[0],callback:function(n){t.$set(t.notification.position,0,n)},expression:"notification.position[0]"}}),i("w-radios",{staticClass:"my1",attrs:{items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},model:{value:t.notification.position[1],callback:function(n){t.$set(t.notification.position,1,n)},expression:"notification.position[1]"}}),i("w-notification",t._b({directives:[{name:"show",rawName:"v-show",value:t.notification.show,expression:"notification.show"}],attrs:{success:"",plain:"",round:"",shadow:"",transition:"bounce"}},"w-notification",(e={},e[t.notification.position[0]]=!0,e[t.notification.position[1]]=!0,e),!1),[t._v("The alert is fixed on "+t._s(t.notification.position[0])+" "+t._s(t.notification.position[1])+".")])],1),i("title-link",{attrs:{h2:""}},[t._v("Notification timeout")]),i("p",[t._v("Notifications have no timeout by default. But you can add one to hide the notification by itself after some time.")]),i("p",[t._v("Setting the timeout to "),i("code",[t._v("0")]),t._v(" as a number or a string will cancel the timeout and the notification will stay visible.")]),i("example",{attrs:{"content-class":"mt2 pos-relative ovh"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-button.mr6(
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em")
  | `+t._s("{{ showNotification ? 'Hide' : 'Show' }}")+` notification
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
  | `+t._s("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+".")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button
  class="mr6"
  @click="showNotification = !showNotification"
  color="primary"
  outline
  width="8.5em">
  `+t._s("{{ showNotification ? 'Hide' : 'Show' }}")+` notification
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
  `+t._s("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+`.
</w-notification>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showNotification: false,
  timeout: 2000
})
`)]},proxy:!0}])},[i("w-button",{staticClass:"mr6",attrs:{color:"primary",outline:"",width:"8.5em"},on:{click:function(n){t.notification2.show=!t.notification2.show}}},[t._v(t._s(t.notification2.show?"Hide":"Show")+" notification")]),i("w-input",{staticClass:"d-iflex",staticStyle:{"max-width":"110px"},attrs:{type:"number",step:"500",min:"0",label:"Timeout:","label-position":"left"},model:{value:t.notification2.timeout,callback:function(n){t.$set(t.notification2,"timeout",n)},expression:"notification2.timeout"}}),i("span",{staticClass:"ml2"},[t._v("ms")]),i("w-notification",{attrs:{timeout:t.notification2.timeout,warning:"",plain:"",round:"",shadow:"",dismiss:"",absolute:""},model:{value:t.notification2.show,callback:function(n){t.$set(t.notification2,"show",n)},expression:"notification2.show"}},[t._v(`This alert is
`+t._s(~~t.notification2.timeout?"auto-hiding after "+t.notification2.timeout+" ms":"not auto-hiding")+".")])],1),i("title-link",{attrs:{h2:""}},[t._v("Transitions")]),i("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(wrap align-center)
  w-button.mr3(
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em")
    | `+t._s("{{ notification.show ? 'Hide' : 'Show' }}")+` notification
  w-radios.my4(v-model="transition" :items="transitions")
    template(#item="{ item }")
      | `+t._s("{{ item.label }}")+`
      code.ml2 `+t._s(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  | The alert is fixed on `+t._s("{{ notification.position[0] }}")+" "+t._s("{{ notification.position[1] }}")+".")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex wrap align-center>
  <w-button
    class="mr3"
    @click="notification.show = !notification.show"
    color="primary"
    outline
    width="8.5em">
    `+t._s("{{ notification.show ? 'Hide' : 'Show' }}")+` notification
  </w-button>

  <w-radios
    class="my4"
    v-model="transition"
    :items="transitions">
    <template #item="{ item }">
      `+t._s("{{ item.label }}")+`
      <code class="ml2">
        `+t._s(`{{ item.value || (item.value === false ? 'false' : "''") }}`)+`
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
  The alert is fixed on `+t._s("{{ notification.position[0] }}")+" "+t._s("{{ notification.position[1] }}")+`.
</w-notification>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
})`)]},proxy:!0}])},[i("w-flex",{attrs:{wrap:"","align-center":""}},[i("w-button",{staticClass:"mr3",attrs:{color:"primary",outline:"",width:"8.5em"},on:{click:function(n){t.notification3.show=!t.notification3.show}}},[t._v(t._s(t.notification3.show?"Hide":"Show")+" notification")]),i("w-radios",{staticClass:"my4",attrs:{items:t.transitions},scopedSlots:t._u([{key:"item",fn:function(n){var l=n.item;return[t._v(t._s(l.label)),i("code",{staticClass:"ml2"},[t._v(t._s(l.value||(l.value===!1?"false":"''")))])]}}]),model:{value:t.transition,callback:function(n){t.transition=n},expression:"transition"}})],1),i("div",{staticClass:"title4 mt3"},[t._v("Notification position")]),i("w-radios",{staticClass:"my1 mr6",attrs:{items:[{label:"top"},{label:"bottom"}],inline:""},model:{value:t.notification3.position[0],callback:function(n){t.$set(t.notification3.position,0,n)},expression:"notification3.position[0]"}}),i("w-radios",{staticClass:"my1",attrs:{items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},model:{value:t.notification3.position[1],callback:function(n){t.$set(t.notification3.position,1,n)},expression:"notification3.position[1]"}}),i("w-notification",t._b({directives:[{name:"show",rawName:"v-show",value:t.notification3.show,expression:"notification3.show"}],attrs:{info:"",color:"primary",round:"",shadow:"",transition:t.transition}},"w-notification",(a={},a[t.notification3.position[0]]=!0,a[t.notification3.position[1]]=!0,a),!1),[t._v("The alert is fixed on "+t._s(t.notification3.position[0])+" "+t._s(t.notification3.position[1])+".")])],1)]},proxy:!0}])})],1)},m=[];const p={data:()=>({config:s,notification:{show:!1,position:["bottom","right"]},notification2:{show:!1,timeout:2e3},notification3:{show:!1,position:["bottom","right"]},transition:"",notifManagerTransition:"default",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Slide fade left",value:"slide-fade-left"},{label:"Slide fade right",value:"slide-fade-right"},{label:"Slide fade up",value:"slide-fade-up"},{label:"Slide fade down",value:"slide-fade-down"},{label:"Scale fade",value:"scale-fade"},{label:"None",value:!1}],transitionsForManager:[{label:"Default",value:"default"},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Slide fade left",value:"slide-fade-left"},{label:"Slide fade right",value:"slide-fade-right"},{label:"Slide fade up",value:"slide-fade-up"},{label:"Slide fade down",value:"slide-fade-down"},{label:"Scale fade",value:"scale-fade"},{label:"None",value:!1}]}),methods:{switchNotificationManagerSide(){const{align:t}=s.notificationManager;s.notificationManager.align=t==="left"?"right":"left",this.$nextTick(()=>this.$waveui.notify("Information."))},switchNotifMgrTransition(){s.notificationManager.transition=this.notifManagerTransition,this.$nextTick(()=>this.$waveui.notify("Information."))},notify(){this.$waveui.notify({message:"Warning",timeout:6e3,bgColor:"orange-light5",color:"warning",dismiss:!1,shadow:!0,round:!0,sm:!0,icon:"wi-star"})}}},f={};var v=r(p,h,m,!1,w,null,null,null);function w(t){for(let o in f)this[o]=f[o]}var b=function(){return v.exports}(),_=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"mt12 pt6"},[i("title-link",{staticClass:"title1",attrs:{h2:"",slug:"api"}},[i("span",{staticClass:"code"},[t._v("<w-notification>")]),t._v(" API")]),i("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),i("component-api",{attrs:{items:t.slots,title:"Slots"}}),i("component-api",{attrs:{items:t.events,title:"Events"}})],1)},g=[];const y={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.',transition:'Applies a particular transition to the notification when showing and hiding.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example.',timeout:"Sets a timer to hide a visible notification after a certain amount of milliseconds. E.g. <code>2000</code> will hide the notification after 2 seconds. A value of <code>0</code> or empty string will keep the notification persistent (no timeout).",absolute:"Sets the CSS position of the notification to <code>absolute</code> (fixed by default).",top:"Places the notification at the top of the screen or at the top of its container if the <code>absolute</code> prop is set to true.",bottom:"Places the notification at the bottom of the screen or at the bottom of its container if the <code>absolute</code> prop is set to true.",left:"Places the notification at the left of the screen or at the left of its container if the <code>absolute</code> prop is set to true.",right:"Places the notification at the right of the screen or at the right of its container if the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the notification.",success:"Sets the type of the notification, applying the <code>success</code> class (green color) and adding a success icon on the left in the notification.",info:"Sets the type of the notification, applying the <code>info</code> class (blue color) and adding an info icon on the left in the notification.",warning:"Sets the type of the notification, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the notification.",error:"Sets the type of the notification, applying the <code>error</code> class (red color) and adding an error icon on the left in the notification.",color:`Applies a color to the notification's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the notification's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the notification.",tile:"Removes the default border-radius and sets sharp edges on the notification.",round:"Sets a maximum border-radius on the corners of the notification, giving it a round look.",plain:'Emphasizes a "typed" notification (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',dismiss:"Adds a close button (cross icon) on the right in the notification. Clicking on this button hides the notification.",noBorder:"Removes the default border from the notification container.",borderLeft:"Adds a left border on the notification. Only one side-border can be applied at the same time.",borderRight:"Adds a right border on the notification. Only one side-border can be applied at the same time.",borderTop:"Adds a top border on the notification. Only one side-border can be applied at the same time.",borderBottom:"Adds a bottom border on the notification. Only one side-border can be applied at the same time.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",xs:"Sets the size of the notification.",sm:"Sets the size of the notification.",md:"Sets the size of the notification.",lg:"Sets the size of the notification.",xl:"Sets the size of the notification."},x={default:{description:"The notification content."}},k={input:"Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on notification dismiss/hide.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on notification dismiss/hide."},S={data:()=>({propsDescs:y,slots:x}),computed:{props(){return c.props},events(){return c.emits.reduce((t,o)=>(t[o]={description:k[o]||""})&&t,{})}}},u={};var C=r(S,_,g,!1,$,null,null,null);function $(t){for(let o in u)this[o]=u[o]}var N=function(){return C.exports}(),T=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("main",[i("ui-component-title",{attrs:{code:!1,slug:"notification-manager-and-w-notification"}},[t._v("Built-in notification manager & "),i("span",{staticClass:"code"},[t._v("w-notification")])]),i("examples"),i("api")],1)},M=[];const A={components:{Examples:b,Api:N}},d={};var j=r(A,T,M,!1,E,null,null,null);function E(t){for(let o in d)this[o]=d[o]}var H=function(){return j.exports}();export{H as default};
