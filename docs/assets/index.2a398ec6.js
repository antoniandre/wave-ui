import{n as e,i as r}from"./index.d8e54b3b.js";import"./vendor.4f8da9ec.js";var l=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("alert",{attrs:{info:""}},[n("ul",[n("li",{staticClass:"title4"},[t._v("The purpose of the "),n("strong",{staticClass:"code"},[t._v("w-confirm")]),t._v(` component is to quickly set up a
confirmation prompt to confirm a critical action.`)]),n("li",[t._v("The "),n("strong",{staticClass:"code"},[t._v("w-confirm")]),t._v(" component uses "),n("strong",{staticClass:"code"},[t._v("w-menu")]),t._v(`, and
`),n("strong",{staticClass:"code"},[t._v("w-buttons")]),t._v(` components.
`)])])]),n("title-link",{attrs:{h2:""}},[t._v("Basic")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-confirm Delete")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm>Delete</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",[t._v("Delete")])],1),n("title-link",{attrs:{h2:""}},[t._v("Icon button")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-confirm(icon="mdi mdi-delete")')]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm icon="mdi mdi-delete">
  Delete
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{icon:"mdi mdi-delete"}})],1),n("title-link",{attrs:{h2:""}},[t._v("Colors")]),t._m(0),t._m(1),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm.mb2(bg-color="success") Ask for confirm
w-confirm.mb2(bg-color="info" color="yellow") Ask for confirm
w-confirm(:menu="{ bgColor: 'indigo-light1', color: 'white' }") Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm bg-color="success" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm bg-color="info" color="yellow" class="mb2">
  Ask for confirm
</w-confirm>

<w-confirm :menu="{ bgColor: 'indigo-light1', color: 'white' }">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{staticClass:"mb2",attrs:{"bg-color":"success"}},[t._v("Ask for confirm")]),n("w-confirm",{staticClass:"mb2",attrs:{"bg-color":"info",color:"yellow"}},[t._v("Ask for confirm")]),n("w-confirm",{attrs:{menu:{bgColor:"indigo-light1",color:"white"}}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h2:""}},[t._v("Positions & alignments")]),n("title-link",{attrs:{h3:""}},[t._v("Positions")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm.my5(top) Top
w-confirm.my5(right) Right
w-confirm.my5(bottom) Bottom
w-confirm.my5(left) Left`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm top class="my5">
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
`)]},proxy:!0}])},[n("w-confirm",{staticClass:"my5",attrs:{top:""}},[t._v("Top")]),n("w-confirm",{staticClass:"my5",attrs:{right:""}},[t._v("Right")]),n("w-confirm",{staticClass:"my5",attrs:{bottom:""}},[t._v("Bottom")]),n("w-confirm",{staticClass:"my5",attrs:{left:""}},[t._v("Left")])],1),n("title-link",{attrs:{h3:""}},[t._v("Alignments")]),n("title-link",{attrs:{h4:""}},[t._v("Horizontal")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(justify-center)
  w-confirm.ma2(top align-left) Top, align left
  w-confirm.ma2(top) Top, align center
  w-confirm.ma2(top align-right) Top, align right

w-flex(justify-center)
  w-confirm.ma2(bottom align-left) Bottom, align left
  w-confirm.ma2(bottom) Bottom, align center
  w-confirm.ma2(bottom align-right) Bottom, align right`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex justify-center>
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
`)]},proxy:!0}])},[n("w-flex",{staticClass:"mt12",attrs:{"justify-center":""}},[n("w-confirm",{staticClass:"ma2",attrs:{top:"","align-left":""}},[t._v("Top, align left")]),n("w-confirm",{staticClass:"ma2",attrs:{top:""}},[t._v("Top, align center")]),n("w-confirm",{staticClass:"ma2",attrs:{top:"","align-right":""}},[t._v("Top, align right")])],1),n("w-flex",{attrs:{"justify-center":""}},[n("w-confirm",{staticClass:"ma2",attrs:{bottom:"","align-left":""}},[t._v("Bottom, align left")]),n("w-confirm",{staticClass:"ma2",attrs:{bottom:""}},[t._v("Bottom, align center")]),n("w-confirm",{staticClass:"ma2",attrs:{bottom:"","align-right":""}},[t._v("Bottom, align right")])],1)],1),n("title-link",{attrs:{h4:""}},[t._v("Vertical")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex.text-center(justify-center)
  div
    w-confirm.ma2(left align-top) Left, align top
    w-confirm.ma2(left) Left, align center
    w-confirm.ma2(left align-bottom) Left, align bottom

  div
    w-confirm.ma2(right align-top) Right, align top
    w-confirm.ma2(right) Right, align center
    w-confirm.ma2(right align-bottom) Right, align bottom`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex justify-center class="text-center">
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
`)]},proxy:!0}])},[n("w-flex",{staticClass:"text-center",attrs:{"justify-center":""}},[n("div",[n("w-confirm",{staticClass:"ma2",attrs:{left:"","align-top":""}},[t._v("Left, align top")]),n("w-confirm",{staticClass:"ma2",attrs:{left:""}},[t._v("Left, align center")]),n("w-confirm",{staticClass:"ma2",attrs:{left:"","align-bottom":""}},[t._v("Left, align bottom")])],1),n("div",[n("w-confirm",{staticClass:"ma2",attrs:{right:"","align-top":""}},[t._v("Right, align top")]),n("w-confirm",{staticClass:"ma2",attrs:{right:""}},[t._v("Right, align center")]),n("w-confirm",{staticClass:"ma2",attrs:{right:"","align-bottom":""}},[t._v("Right, align bottom")])],1)])],1),n("title-link",{attrs:{h2:""}},[t._v("Persistent")]),n("p",[t._v("A click outside of the menu will not close it.")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-confirm(persistent) Ask for confirm")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm persistent>
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{persistent:""}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h2:""}},[t._v("Inline question")]),n("p",[t._v("Displays the question inline with the buttons inside the menu.")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-confirm(inline) Ask for confirm")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm inline>
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{inline:""}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h2:""}},[t._v("Custom question")]),t._m(2),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm
  strong Delete
  template(#question) Are you sure you want to delete this?`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm>
  <strong>Delete</strong>
  <template #question>
    Are you sure you want to delete this?
  </template>
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{scopedSlots:t._u([{key:"question",fn:function(){return[t._v("Are you sure you want to delete this?")]},proxy:!0}])},[n("strong",[t._v("Delete")])])],1),n("title-link",{attrs:{h2:""}},[t._v("Cancel & confirm buttons")]),n("title-link",{attrs:{h3:""}},[t._v("Custom buttons contents")]),t._m(3),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm
  | Ask for confirm
  template(#cancel) No
  template(#confirm) Yes`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm>
  Ask for confirm
  <template #cancel>No</template>
  <template #confirm>Yes</template>
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{scopedSlots:t._u([{key:"cancel",fn:function(){return[t._v("No")]},proxy:!0},{key:"confirm",fn:function(){return[t._v("Yes")]},proxy:!0}])},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h3:""}},[t._v("No cancel button")]),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-confirm(no-cancel) Ask for confirm")]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm no-cancel>
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{"no-cancel":""}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h3:""}},[t._v("Full custom buttons")]),t._m(4),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm(
  inline
  :cancel-button="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm-button="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }")
  | Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm
  inline
  :cancel-button="{ bgColor: 'error-dark1', color: 'white', icon: 'mdi mdi-close' }"
  :confirm-button="{ bgColor: 'green-dark1', color: 'white', icon: 'mdi mdi-check' }">
  Ask for confirm
</w-confirm>
`)]},proxy:!0}])},[n("w-confirm",{attrs:{inline:"","cancel-button":{bgColor:"error-dark1",color:"white",icon:"mdi mdi-close"},"confirm-button":{bgColor:"green-dark1",color:"white",icon:"mdi mdi-check"}}},[t._v("Ask for confirm")])],1),n("title-link",{attrs:{h2:""}},[t._v("No arrow")]),t._m(5),n("example",{staticClass:"example--no-arrow",attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm.ma2(no-arrow :menu="{ bgColor: 'blue-light5' }") Bottom
w-confirm.ma2(no-arrow right) Right
w-confirm.ma2.mb12(:menu="{ noPosition: true }") No position`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm
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
`)]},proxy:!0}])},[n("w-confirm",{staticClass:"ma2",attrs:{"no-arrow":"",menu:{bgColor:"blue-light5"}}},[t._v("Bottom")]),n("w-confirm",{staticClass:"ma2",attrs:{"no-arrow":"",right:""}},[t._v("Right")]),n("w-confirm",{staticClass:"ma2 mb12",attrs:{menu:{noPosition:!0,detachTo:".example--no-arrow"}}},[t._v("No position")])],1),n("title-link",{attrs:{h2:""}},[t._v("Transitions")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(wrap)
  w-confirm.ma1 Default (scale-fade)
  w-confirm.ma1(transition="fade") Fade
  w-confirm.ma1(transition="slide-fade-up") Slide fade up
  w-confirm.ma1(transition="slide-fade-right") Slide fade right
  w-confirm.ma1(transition="slide-fade-down") Slide fade down
  w-confirm.ma1(transition="slide-fade-left") Slide fade left
  w-confirm.ma1(transition="scale") Scale
  w-confirm.ma1(transition="bounce") Bounce
  w-confirm.ma1(transition="twist") Twist`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm class="ma1">
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
`)]},proxy:!0}])},[n("w-flex",{attrs:{wrap:""}},[n("w-confirm",{staticClass:"ma1"},[t._v("Default (scale-fade)")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"fade"}},[t._v("Fade")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-up"}},[t._v("Slide fade up")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-right"}},[t._v("Slide fade right")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-down"}},[t._v("Slide fade down")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"slide-fade-left"}},[t._v("Slide fade left")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"scale"}},[t._v("Scale")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"bounce"}},[t._v("Bounce")]),n("w-confirm",{staticClass:"ma1",attrs:{transition:"twist"}},[t._v("Twist")])],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Events")]),t._m(6),t._m(7),t._m(8),n("example",{attrs:{"content-class":"text-center","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-confirm(
  @cancel="$waveui.notify&#40;'Canceled.', 'error'&#41;"
  @confirm="$waveui.notify&#40;'Confirmed!', 'success'&#41;") Ask for confirm`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-confirm
  @cancel="$waveui.notify('Canceled.', 'error')"
  @confirm="$waveui.notify('Confirmed!', 'success')">
  Ask for confirm
</w-confirm>`)]},proxy:!0}])},[n("w-confirm",{on:{cancel:function(a){return t.$waveui.notify("Canceled.","error")},confirm:function(a){return t.$waveui.notify("Confirmed!","success")}}},[t._v("Ask for confirm")])],1)],1)},m=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("The "),n("code",[t._v("bg-color")]),t._v(" & "),n("code",[t._v("color")]),t._v(" props apply to the button you first see."),n("br"),t._v(`
To apply colors (or other props) to the menu or the buttons inside the menu, you can do it via:`)])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ul",[n("li",[n("code",[t._v("menu")]),t._v(" "),n("small",{staticClass:"grey"},[t._v("E.g. "),n("code",{staticClass:"grey"},[t._v(`:menu="{ bgColor: 'green' }"`)])])]),n("li",[n("code",[t._v("cancel-button")]),t._v(" "),n("small",{staticClass:"grey"},[t._v("E.g. "),n("code",{staticClass:"grey"},[t._v(`:cancel-button="{ bgColor: 'green' }"`)])])]),n("li",[n("code",[t._v("confirm-button")]),t._v(" "),n("small",{staticClass:"grey"},[t._v("E.g. "),n("code",{staticClass:"grey"},[t._v(`:confirm-button="{ bgColor: 'green' }"`)])])])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("The "),n("code",[t._v("question")]),t._v(" slot allows you to specify your own question.")])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("You can use the "),n("code",[t._v("cancel")]),t._v(" & "),n("code",[t._v("confirm")]),t._v(` slots to override the cancel & confirm
buttons contents.`)])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("The cancel and confirm buttons can be customized as much as a standard "),n("strong",{staticClass:"code"},[t._v("w-button")]),t._v(`
via the `),n("code",[t._v("cancel-button")]),t._v(" & "),n("code",[t._v("confirm-button")]),t._v(` props which accept an object of
`),n("strong",{staticClass:"code"},[t._v("w-button")]),t._v(" props to pass down to the buttons.")])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v(`By default, the w-confirm component displays an arrow on the edge of the menu to designate
which action you have clicked requiring a confirmation.`),n("br"),t._v(`
You can disable the arrow via the `),n("code",[t._v("no-arrow")]),t._v(" option.")])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("2 events are emitted from the "),n("strong",{staticClass:"code"},[t._v("w-confirm")]),t._v(" component:")])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("ul",[n("li",[n("code",[t._v("cancel")]),t._v(" on cancel button click.")]),n("li",[n("code",[t._v("confirm")]),t._v(" on confirm button click.")])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("You can listen to them to trigger an action."),n("br"),t._v(`
In this example, a notification is displayed when clicking on the cancel or confirm button.`)])}];const f={data:()=>({bgColor:"green"}),mounted(){setTimeout(()=>{this.bgColor="amber"},5e3)}},i={};var u=e(f,l,m,!1,_,null,null,null);function _(t){for(let o in i)this[o]=i[o]}var p=function(){return u.exports}(),v=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),n("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The missing props descriptions will be added shortly (all the props are already listed).")]),n("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),n("component-api",{attrs:{items:t.slots,title:"Slots"}}),n("component-api",{attrs:{items:t.events,title:"Events"}})],1)},w=[];const g={},d={},h={},y={data:()=>({propsDescs:g,slots:d}),computed:{props(){return r.props},events(){return r.emits.reduce((t,o)=>(t[o]=h[o]||{})&&t,{})}}},s={};var b=e(y,v,w,!1,k,null,null,null);function k(t){for(let o in s)this[o]=s[o]}var x=function(){return b.exports}(),C=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("main",[n("ui-component-title",{attrs:{"in-progress":""}},[t._v("w-confirm")]),n("examples"),n("api")],1)},S=[];const A={components:{Examples:p,Api:x}},c={};var $=e(A,C,S,!1,T,null,null,null);function T(t){for(let o in c)this[o]=c[o]}var R=function(){return $.exports}();export{R as default};
