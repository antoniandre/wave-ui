(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["notification-index-vue","notification-api-vue","notification-examples-vue"],{"39bb":function(t,i,o){"use strict";var n=o("e42b"),e=o.n(n);e.a},"62a9":function(t,i,o){"use strict";o.r(i);var n=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("ui-component-title",[t._v("w-notification")]),o("examples"),o("api")],1)},e=[],a=o("b861"),s=o("6de8"),l={components:{Examples:a["default"],Api:s["default"]}},r=l,c=o("2877"),f=Object(c["a"])(r,n,e,!1,null,null,null);i["default"]=f.exports},"6de8":function(t,i,o){"use strict";o.r(i);var n=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),o("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The props will soon be more detailed.")]),o("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),o("api",{attrs:{items:t.slots,title:"Slots"}}),o("api",{attrs:{items:t.events,title:"Events"}})],1)},e=[],a=(o("13d5"),o("5628")),s={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the notification. Any truthy value will show the notification whereas any falsy value will hide it.',transition:'Applies a particular transition to the notification when showing and hiding.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example.',timeout:"",absolute:"Sets the CSS position of the notification to <code>absolute</code> (fixed by default).",top:"Places the notification at the top of the screen or at the top of its container if the <code>absolute</code> prop is set to true.",bottom:"Places the notification at the bottom of the screen or at the bottom of its container if the <code>absolute</code> prop is set to true.",left:"Places the notification at the left of the screen or at the left of its container if the <code>absolute</code> prop is set to true.",right:"Places the notification at the right of the screen or at the right of its container if the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the notification.",success:"",info:"",warning:"",error:"",color:'Applies a color to the notification\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the notification\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',shadow:"Applies a drop shadow to the notification.",tile:"Removes the default border-radius and sets sharp edges on the notification.",round:"Sets a maximum border-radius on the corners of the notification, giving it a round look.",plain:"",noBorder:"Removes the default border from the notification container.",borderLeft:"",borderRight:"",borderTop:"",borderBottom:"",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",dismiss:"",xs:"Sets the size of the notification.",sm:"Sets the size of the notification.",md:"Sets the size of the notification.",lg:"Sets the size of the notification.",xl:"Sets the size of the notification."},l={default:{description:"The notification content."}},r={input:"Emitted on notification dismiss/hide. It updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on notification dismiss/hide. It updates the v-model value in Vue 3 only.",close:"Emitted on notification dismiss/hide."},c={data:function(){return{propsDescs:s,slots:l}},computed:{props:function(){return a["a"].props},events:function(){return a["a"].emits.reduce((function(t,i){return(t[i]={description:r[i]||""})&&t}),{})}}},f=c,u=o("2877"),d=Object(u["a"])(f,n,e,!1,null,null,null);i["default"]=d.exports},b861:function(t,i,o){"use strict";o.r(i);var n=function(){var t,i,o=this,n=o.$createElement,e=o._self._c||n;return e("div",[o._m(0),e("title-link",{attrs:{h2:""}},[o._v("Notification position")]),e("p",[o._v("Notifications have a fixed position by default (positioned relative to the viewport).")]),e("example",{attrs:{"content-class":"mt2"},scopedSlots:o._u([{key:"pug",fn:function(){return[o._v('w-button.mr6(\n  @click="notification.show = !notification.show"\n  color="primary"\n  outline\n  width="8.5em")\n  | '+o._s("{{ notification.show ? 'Hide' : 'Show' }}")+' notification\n\nw-radios.mr6(\n  v-model="notification.position[0]"\n  :items="[{ label: \'top\' }, { label: \'bottom\' }]"\n  inline)\n\nw-radios(\n  v-model="notification.position[1]"\n  :items="[{ label: \'left\' }, { label: \'center\' }, { label: \'right\' }]"\n  inline)\n\nw-notification(\n  v-show="notification.show"\n  success\n  plain\n  round\n  shadow\n  transition="bounce"\n  :[notification.position[0]]="true"\n  :[notification.position[1]]="true")\n  | The alert is fixed on '+o._s("{{ notification.position[0] }}")+" "+o._s("{{ notification.position[1] }}")+".")]},proxy:!0},{key:"js",fn:function(){return[o._v("data: () => ({\n  notification: {\n    show: false,\n    position: ['bottom', 'right']\n  }\n})\n")]},proxy:!0}])},[e("w-button",{staticClass:"mr6",attrs:{color:"primary",outline:"",width:"8.5em"},on:{click:function(t){o.notification.show=!o.notification.show}}},[o._v(o._s(o.notification.show?"Hide":"Show")+" notification")]),e("w-radios",{staticClass:"my1 mr6",attrs:{items:[{label:"top"},{label:"bottom"}],inline:""},model:{value:o.notification.position[0],callback:function(t){o.$set(o.notification.position,0,t)},expression:"notification.position[0]"}}),e("w-radios",{staticClass:"my1",attrs:{items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},model:{value:o.notification.position[1],callback:function(t){o.$set(o.notification.position,1,t)},expression:"notification.position[1]"}}),e("w-notification",o._b({directives:[{name:"show",rawName:"v-show",value:o.notification.show,expression:"notification.show"}],attrs:{success:"",plain:"",round:"",shadow:"",transition:"bounce"}},"w-notification",(t={},t[o.notification.position[0]]=!0,t[o.notification.position[1]]=!0,t),!1),[o._v("The alert is fixed on "+o._s(o.notification.position[0])+" "+o._s(o.notification.position[1])+".")])],1),e("title-link",{attrs:{h2:""}},[o._v("Notification timeout")]),e("p",[o._v("Notifications have no timeout by default. But you can add one to hide the notification by itself after some time.")]),o._m(1),e("example",{attrs:{"content-class":"mt2 pos-relative ovh"},scopedSlots:o._u([{key:"pug",fn:function(){return[o._v('w-button.mr6(\n  @click="showNotification = !showNotification"\n  color="primary"\n  outline\n  width="8.5em")\n  | '+o._s("{{ showNotification ? 'Hide' : 'Show' }}")+' notification\nw-input.d-iflex(\n  v-model="timeout"\n  type="number"\n  step="500"\n  min="0"\n  label="Timeout:"\n  label-position="left"\n  style="max-width: 110px")\nspan.ml2 ms\n\nw-notification(\n  v-model="showNotification"\n  :timeout="timeout"\n  warning\n  plain\n  round\n  shadow\n  absolute)\n  | This alert is\n  | '+o._s("{{ parseInt(timeout) ? `auto-hiding after ${timeout} ms` : 'not auto-hiding'}}")+".")]},proxy:!0},{key:"js",fn:function(){return[o._v("data: () => ({\n  showNotification: false,\n  timeout: 2000\n})\n")]},proxy:!0}])},[e("w-button",{staticClass:"mr6",attrs:{color:"primary",outline:"",width:"8.5em"},on:{click:function(t){o.notification2.show=!o.notification2.show}}},[o._v(o._s(o.notification2.show?"Hide":"Show")+" notification")]),e("w-input",{staticClass:"d-iflex",staticStyle:{"max-width":"110px"},attrs:{type:"number",step:"500",min:"0",label:"Timeout:","label-position":"left"},model:{value:o.notification2.timeout,callback:function(t){o.$set(o.notification2,"timeout",t)},expression:"notification2.timeout"}}),e("span",{staticClass:"ml2"},[o._v("ms")]),e("w-notification",{attrs:{timeout:o.notification2.timeout,warning:"",plain:"",round:"",shadow:"",dismiss:"",absolute:""},model:{value:o.notification2.show,callback:function(t){o.$set(o.notification2,"show",t)},expression:"notification2.show"}},[o._v("This alert is\n"+o._s(~~o.notification2.timeout?"auto-hiding after "+o.notification2.timeout+" ms":"not auto-hiding")+".")])],1),e("title-link",{attrs:{h2:""}},[o._v("Transitions")]),e("example",{scopedSlots:o._u([{key:"pug",fn:function(){return[o._v('w-flex(wrap align-center)\n  w-button.mr3(\n    @click="notification.show = !notification.show"\n    color="primary"\n    outline\n    width="8.5em")\n    | '+o._s("{{ notification.show ? 'Hide' : 'Show' }}")+' notification\n  w-radios.my4(v-model="transition" :items="transitions")\n    template(#item="{ item }")\n      | '+o._s("{{ item.label }}")+"\n      code.ml2 "+o._s("{{ item.value || (item.value === false ? 'false' : \"''\") }}")+'\n.title4.mt3 Notification position\n\nw-radios.mr6(\n  v-model="notification.position[0]"\n  :items="[{ label: \'top\' }, { label: \'bottom\' }]"\n  inline)\n\nw-radios(\n  v-model="notification.position[1]"\n  :items="[{ label: \'left\' }, { label: \'center\' }, { label: \'right\' }]"\n  inline)\n\nw-notification(\n  v-show="notification.show"\n  info\n  color="primary"\n  round\n  shadow\n  :transition="transition"\n  :[notification.position[0]]="true"\n  :[notification.position[1]]="true")\n  | The alert is fixed on '+o._s("{{ notification.position[0] }}")+" "+o._s("{{ notification.position[1] }}")+".")]},proxy:!0},{key:"js",fn:function(){return[o._v("data: () => ({\n  notification: {\n    show: false,\n    position: ['bottom', 'right']\n  },\n  transition: '',\n  transitions: [\n    { label: 'Default', value: '' },\n    { label: 'Bounce', value: 'bounce' },\n    { label: 'Scale', value: 'scale' },\n    { label: 'Twist', value: 'twist' },\n    { label: 'Fade', value: 'fade' },\n    { label: 'Slide fade left', value: 'slide-fade-left' },\n    { label: 'Slide fade right', value: 'slide-fade-right' },\n    { label: 'Slide fade top', value: 'slide-fade-up' },\n    { label: 'Slide fade bottom', value: 'slide-fade-down' },\n    { label: 'Scale fade', value: 'scale-fade' },\n    { label: 'None', value: false }\n  ]\n})")]},proxy:!0}])},[e("w-flex",{attrs:{wrap:"","align-center":""}},[e("w-button",{staticClass:"mr3",attrs:{color:"primary",outline:"",width:"8.5em"},on:{click:function(t){o.notification3.show=!o.notification3.show}}},[o._v(o._s(o.notification3.show?"Hide":"Show")+" notification")]),e("w-radios",{staticClass:"my4",attrs:{items:o.transitions},scopedSlots:o._u([{key:"item",fn:function(t){var i=t.item;return[o._v(o._s(i.label)),e("code",{staticClass:"ml2"},[o._v(o._s(i.value||(!1===i.value?"false":"''")))])]}}]),model:{value:o.transition,callback:function(t){o.transition=t},expression:"transition"}})],1),e("div",{staticClass:"title4 mt3"},[o._v("Notification position")]),e("w-radios",{staticClass:"my1 mr6",attrs:{items:[{label:"top"},{label:"bottom"}],inline:""},model:{value:o.notification3.position[0],callback:function(t){o.$set(o.notification3.position,0,t)},expression:"notification3.position[0]"}}),e("w-radios",{staticClass:"my1",attrs:{items:[{label:"left"},{label:"center"},{label:"right"}],inline:""},model:{value:o.notification3.position[1],callback:function(t){o.$set(o.notification3.position,1,t)},expression:"notification3.position[1]"}}),e("w-notification",o._b({directives:[{name:"show",rawName:"v-show",value:o.notification3.show,expression:"notification3.show"}],attrs:{info:"",color:"primary",round:"",shadow:"",transition:o.transition}},"w-notification",(i={},i[o.notification3.position[0]]=!0,i[o.notification3.position[1]]=!0,i),!1),[o._v("The alert is fixed on "+o._s(o.notification3.position[0])+" "+o._s(o.notification3.position[1])+".")])],1)],1)},e=[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("p",[t._v("The "),o("span",{staticClass:"code"},[t._v("w-notification")]),t._v(" component is pretty much a wrapper around the "),o("span",{staticClass:"code"},[t._v("w-alert")]),t._v("\ncomponent with added functionalities."),o("br"),t._v("\nThey accept all the parameters of the "),o("span",{staticClass:"code"},[t._v("w-alert")]),t._v(" component, plus positioning,\ntransitioning & timeout options.\n")])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("p",[t._v("Setting the timeout to "),o("code",[t._v("0")]),t._v(" as a number or a string will cancel the timeout and the notification will stay visible.")])}],a={data:function(){return{notification:{show:!1,position:["bottom","right"]},notification2:{show:!1,timeout:2e3},notification3:{show:!1,position:["bottom","right"]},transition:"",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Slide fade left",value:"slide-fade-left"},{label:"Slide fade right",value:"slide-fade-right"},{label:"Slide fade top",value:"slide-fade-up"},{label:"Slide fade bottom",value:"slide-fade-down"},{label:"Scale fade",value:"scale-fade"},{label:"None",value:!1}]}}},s=a,l=(o("39bb"),o("2877")),r=Object(l["a"])(s,n,e,!1,null,null,null);i["default"]=r.exports},e42b:function(t,i,o){}}]);
//# sourceMappingURL=notification-index-vue.65c14d8a.js.map