import{n as e,i as r}from"./index.23f9e77e.js";import"./vendor.4f8da9ec.js";var l=function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",[t("alert",{attrs:{info:""}},[t("ul",[t("li",{staticClass:"title4"},[n._v("The purpose of the "),t("strong",{staticClass:"code"},[n._v("w-confirm")]),n._v(` component is to quickly set up a
confirmation prompt to confirm a critical action.`)]),t("li",[n._v("The "),t("strong",{staticClass:"code"},[n._v("w-confirm")]),n._v(" component uses "),t("strong",{staticClass:"code"},[n._v("w-menu")]),n._v(`, and
`),t("strong",{staticClass:"code"},[n._v("w-buttons")]),n._v(` components.
`)])])]),t("title-link",{attrs:{h2:""}},[n._v("Basic")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v("w-confirm Delete")]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm>Delete</w-confirm>
`)]},proxy:!0}])},[t("w-confirm",[n._v("Delete")])],1),t("title-link",{attrs:{h2:""}},[n._v("Icon button")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v('w-confirm(icon="mdi mdi-delete")')]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm icon="mdi mdi-delete">
  Delete
</w-confirm>
`)]},proxy:!0}])},[t("w-confirm",{attrs:{icon:"mdi mdi-delete"}})],1),t("title-link",{attrs:{h2:""}},[n._v("Colors")]),n._m(0),n._m(1),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-confirm.mb2(bg-color="success") Ask for confirm
w-confirm.mb2(bg-color="info" color="yellow") Ask for confirm
w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm bg-color="success" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm bg-color="info" color="yellow" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[t("w-confirm",{staticClass:"mb2",attrs:{"bg-color":"success"}},[n._v("Ask for confirm")]),t("w-confirm",{staticClass:"mb2",attrs:{"bg-color":"info",color:"yellow"}},[n._v("Ask for confirm")]),t("w-confirm",{attrs:{menu:{bgColor:"indigo-light1",color:"white"}}},[n._v("Ask for confirm")])],1),t("title-link",{attrs:{h2:""}},[n._v("Positions & alignments")]),t("title-link",{attrs:{h3:""}},[n._v("Positions")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-confirm.my5(top) Top
w-confirm.my5(right) Right
w-confirm.my5(bottom) Bottom
w-confirm.my5(left) Left`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm top class="my5">
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
`)]},proxy:!0}])},[t("w-confirm",{staticClass:"my5",attrs:{top:""}},[n._v("Top")]),t("w-confirm",{staticClass:"my5",attrs:{right:""}},[n._v("Right")]),t("w-confirm",{staticClass:"my5",attrs:{bottom:""}},[n._v("Bottom")]),t("w-confirm",{staticClass:"my5",attrs:{left:""}},[n._v("Left")])],1),t("title-link",{attrs:{h3:""}},[n._v("Alignments")]),t("title-link",{attrs:{h4:""}},[n._v("Horizontal")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-flex(justify-center)
  w-confirm.ma2(top align-left) Top, align left
  w-confirm.ma2(top) Top, align center
  w-confirm.ma2(top align-right) Top, align right

w-flex(justify-center)
  w-confirm.ma2(bottom align-left) Bottom, align left
  w-confirm.ma2(bottom) Bottom, align center
  w-confirm.ma2(bottom align-right) Bottom, align right`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-flex justify-center>
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
`)]},proxy:!0}])},[t("w-flex",{staticClass:"mt12",attrs:{"justify-center":""}},[t("w-confirm",{staticClass:"ma2",attrs:{top:"","align-left":""}},[n._v("Top, align left")]),t("w-confirm",{staticClass:"ma2",attrs:{top:""}},[n._v("Top, align center")]),t("w-confirm",{staticClass:"ma2",attrs:{top:"","align-right":""}},[n._v("Top, align right")])],1),t("w-flex",{attrs:{"justify-center":""}},[t("w-confirm",{staticClass:"ma2",attrs:{bottom:"","align-left":""}},[n._v("Bottom, align left")]),t("w-confirm",{staticClass:"ma2",attrs:{bottom:""}},[n._v("Bottom, align center")]),t("w-confirm",{staticClass:"ma2",attrs:{bottom:"","align-right":""}},[n._v("Bottom, align right")])],1)],1),t("title-link",{attrs:{h4:""}},[n._v("Vertical")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-flex.text-center(justify-center)
  div
    w-confirm.ma2(left align-top) Left, align top
    w-confirm.ma2(left) Left, align center
    w-confirm.ma2(left align-bottom) Left, align bottom

  div
    w-confirm.ma2(right align-top) Right, align top
    w-confirm.ma2(right) Right, align center
    w-confirm.ma2(right align-bottom) Right, align bottom`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-flex justify-center class="text-center">
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
`)]},proxy:!0}])},[t("w-flex",{staticClass:"text-center",attrs:{"justify-center":""}},[t("div",[t("w-confirm",{staticClass:"ma2",attrs:{left:"","align-top":""}},[n._v("Left, align top")]),t("w-confirm",{staticClass:"ma2",attrs:{left:""}},[n._v("Left, align center")]),t("w-confirm",{staticClass:"ma2",attrs:{left:"","align-bottom":""}},[n._v("Left, align bottom")])],1),t("div",[t("w-confirm",{staticClass:"ma2",attrs:{right:"","align-top":""}},[n._v("Right, align top")]),t("w-confirm",{staticClass:"ma2",attrs:{right:""}},[n._v("Right, align center")]),t("w-confirm",{staticClass:"ma2",attrs:{right:"","align-bottom":""}},[n._v("Right, align bottom")])],1)])],1),t("title-link",{attrs:{h2:""}},[n._v("Persistent")]),t("p",[n._v("A click outside of the menu will not close it.")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v("w-confirm(persistent) Ask for confirm")]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm persistent>
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[t("w-confirm",{attrs:{persistent:""}},[n._v("Ask for confirm")])],1),t("title-link",{attrs:{h2:""}},[n._v("Inline question")]),t("p",[n._v("Displays the question inline with the buttons inside the menu.")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v("w-confirm(inline) Ask for confirm")]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm inline>
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[t("w-confirm",{attrs:{inline:""}},[n._v("Ask for confirm")])],1),t("title-link",{attrs:{h2:""}},[n._v("Custom question")]),n._m(2),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-confirm
  strong Delete
  template(#question) Are you sure you want to delete this?`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm>
  <strong>Delete</strong>
  <template #question>
    Are you sure you want to delete this?
  </template>
</w-confirm>
`)]},proxy:!0}])},[t("w-confirm",{scopedSlots:n._u([{key:"question",fn:function(){return[n._v("Are you sure you want to delete this?")]},proxy:!0}])},[t("strong",[n._v("Delete")])])],1),t("title-link",{attrs:{h2:""}},[n._v("Cancel & confirm buttons")]),t("title-link",{attrs:{h3:""}},[n._v("Custom buttons contents")]),n._m(3),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-confirm
  | Ask for confirm
  template(#cancel) No
  template(#confirm) Yes`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm>
  Ask for confirm
  <template #cancel>No</template>
  <template #confirm>Yes</template>
</w-confirm>
`)]},proxy:!0}])},[t("w-confirm",{scopedSlots:n._u([{key:"cancel",fn:function(){return[n._v("No")]},proxy:!0},{key:"confirm",fn:function(){return[n._v("Yes")]},proxy:!0}])},[n._v("Ask for confirm")])],1),t("title-link",{attrs:{h3:""}},[n._v("No cancel button")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v("w-confirm(no-cancel) Ask for confirm")]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm no-cancel>
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[t("w-confirm",{attrs:{"no-cancel":""}},[n._v("Ask for confirm")])],1),t("title-link",{attrs:{h3:""}},[n._v("Full custom buttons")]),n._m(4),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-confirm(
  inline
  :cancel-button="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm-button="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
  | Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm
  inline
  :cancel-button="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm-button="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[t("w-confirm",{attrs:{inline:"","cancel-button":{bgColor:"error-dark1",color:"white",icon:"mdi mdi-close"},"confirm-button":{bgColor:"green-dark1",color:"white",icon:"mdi mdi-check"}}},[n._v("Ask for confirm")])],1),t("title-link",{attrs:{h2:""}},[n._v("No arrow")]),n._m(5),t("example",{staticClass:"example--no-arrow",scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
w-confirm.ma2(no-arrow right) Right
w-confirm.ma2.mb12(:menu="{ noPosition: true }") No position`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm
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
`)]},proxy:!0}])},[t("w-confirm",{staticClass:"ma2",attrs:{"no-arrow":"",menu:{bgColor:"blue-light5"}}},[n._v("Bottom")]),t("w-confirm",{staticClass:"ma2",attrs:{"no-arrow":"",right:""}},[n._v("Right")]),t("w-confirm",{staticClass:"ma2 mb12",attrs:{menu:{noPosition:!0,detachTo:".example--no-arrow"}}},[n._v("No position")])],1),t("title-link",{attrs:{h2:""}},[n._v("Transitions")]),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-flex(wrap)
  w-confirm.ma1 Default (scale-fade)
  w-confirm.ma1(transition="fade") Fade
  w-confirm.ma1(transition="slide-fade-up") Slide fade up
  w-confirm.ma1(transition="slide-fade-right") Slide fade right
  w-confirm.ma1(transition="slide-fade-down") Slide fade down
  w-confirm.ma1(transition="slide-fade-left") Slide fade left
  w-confirm.ma1(transition="scale") Scale
  w-confirm.ma1(transition="bounce") Bounce
  w-confirm.ma1(transition="twist") Twist`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm class="ma1">
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
`)]},proxy:!0}])},[t("w-flex",{attrs:{wrap:""}},[t("w-confirm",{staticClass:"ma1"},[n._v("Default (scale-fade)")]),t("w-confirm",{staticClass:"ma1",attrs:{transition:"fade"}},[n._v("Fade")]),t("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-up"}},[n._v("Slide fade up")]),t("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-right"}},[n._v("Slide fade right")]),t("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-down"}},[n._v("Slide fade down")]),t("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-left"}},[n._v("Slide fade left")]),t("w-confirm",{staticClass:"ma1",attrs:{transition:"scale"}},[n._v("Scale")]),t("w-confirm",{staticClass:"ma1",attrs:{transition:"bounce"}},[n._v("Bounce")]),t("w-confirm",{staticClass:"ma1",attrs:{transition:"twist"}},[n._v("Twist")])],1)],1),t("title-link",{attrs:{h2:""}},[n._v("Events")]),n._m(6),n._m(7),n._m(8),t("example",{scopedSlots:n._u([{key:"pug",fn:function(){return[n._v(`w-confirm(
  @cancel="$waveui.notify&#40;'Canceled.', 'error'&#41;"
  @confirm="$waveui.notify&#40;'Confirmed!', 'success'&#41;") Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[n._v(`<w-confirm
  @cancel="$waveui.notify('Canceled.', 'error')"
  @confirm="$waveui.notify('Confirmed!', 'success')">
  Ask for confirm
</w-confirm>`)]},proxy:!0}])},[t("w-confirm",{on:{cancel:function(a){return n.$waveui.notify("Canceled.","error")},confirm:function(a){return n.$waveui.notify("Confirmed!","success")}}},[n._v("Ask for confirm")])],1)],1)},m=[function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("The "),t("code",[n._v("bg-color")]),n._v(" & "),t("code",[n._v("color")]),n._v(" props apply to the button you first see."),t("br"),n._v(`
To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:`)])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("ul",[t("li",[t("code",[n._v("menu")]),n._v(" "),t("small",{staticClass:"grey"},[n._v("E.g. "),t("code",{staticClass:"grey"},[n._v(`:menu="{ bgColor: 'green' }"`)])])]),t("li",[t("code",[n._v("cancel-button")]),n._v(" "),t("small",{staticClass:"grey"},[n._v("E.g. "),t("code",{staticClass:"grey"},[n._v(`:cancel-button="{ bgColor: 'green' }"`)])])]),t("li",[t("code",[n._v("confirm-button")]),n._v(" "),t("small",{staticClass:"grey"},[n._v("E.g. "),t("code",{staticClass:"grey"},[n._v(`:confirm-button="{ bgColor: 'green' }"`)])])])])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("The "),t("code",[n._v("question")]),n._v(" slot allows you to specify your own question.")])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("You can use the "),t("code",[n._v("cancel")]),n._v(" & "),t("code",[n._v("confirm")]),n._v(` slots to override the cancel & confirm
buttons contents.`)])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("The cancel and confirm buttons can be customized as much as a standard "),t("strong",{staticClass:"code"},[n._v("w-button")]),n._v(`
via the `),t("code",[n._v("cancel-button")]),n._v(" & "),t("code",[n._v("confirm-button")]),n._v(` props which accept an object of
`),t("strong",{staticClass:"code"},[n._v("w-button")]),n._v(" props to pass down to the buttons.")])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v(`By default, the w-confirm component displays an arrow on the edge of the menu to designate
which action you have clicked requiring a confirmation.`),t("br"),n._v(`
You can disable the arrow via the `),t("code",[n._v("no-arrow")]),n._v(" option.")])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("2 events are emitted from the "),t("strong",{staticClass:"code"},[n._v("w-confirm")]),n._v(" component:")])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("ul",[t("li",[t("code",[n._v("cancel")]),n._v(" on cancel button click.")]),t("li",[t("code",[n._v("confirm")]),n._v(" on confirm button click.")])])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("p",[n._v("You can listen to them to trigger an action."),t("br"),n._v(`
In this example, a notification is displayed when clicking on the cancel or confirm button.`)])}];const f={data:()=>({bgColor:"green"}),mounted(){setTimeout(()=>{this.bgColor="amber"},5e3)}},i={};var u=e(f,l,m,!1,_,null,null,null);function _(n){for(let o in i)this[o]=i[o]}var v=function(){return u.exports}(),w=function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[n._v("API")]),t("alert",{staticClass:"mb6",attrs:{info:""}},[n._v("The missing props descriptions will be added shortly (all the props are already listed).")]),t("component-api",{staticClass:"mt0",attrs:{items:n.props,descriptions:n.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:n.slots,title:"Slots"}}),t("component-api",{attrs:{items:n.events,title:"Events"}})],1)},p=[];const d={},g={},h={},y={data:()=>({propsDescs:d,slots:g}),computed:{props(){return r.props},events(){return r.emits.reduce((n,o)=>(n[o]=h[o]||{})&&n,{})}}},c={};var b=e(y,w,p,!1,k,null,null,null);function k(n){for(let o in c)this[o]=c[o]}var C=function(){return b.exports}(),x=function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("main",[t("ui-component-title",{attrs:{"in-progress":""}},[n._v("w-confirm")]),t("examples"),t("api")],1)},S=[];const A={components:{Examples:v,Api:C}},s={};var $=e(A,x,S,!1,T,null,null,null);function T(n){for(let o in s)this[o]=s[o]}var R=function(){return $.exports}();export{R as default};
