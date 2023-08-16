import{n as r,x as s}from"./index.e31dd236.js";var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("title-link",{attrs:{h2:""}},[e._v("Overlay with custom opacity and control on "),t("span",{staticClass:"code"},[e._v("persistent")])]),t("p",[e._v("When the overlay is persistent, it will not close on click and on escape key.")]),t("p",[e._v("When persistent is set to false and by default, the escape key will also close the overlay.")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex(wrap)
  w-button(bg-color="primary" dark @click="showOverlay = true") Show overlay

  w-divider.mx6(vertical color="grey-light4")
  div
    .title4 Options
    w-button.mr2(
      bg-color="primary-light1"
      :class="persistent ? 'pr4' : ''"
      @click="persistent = !persistent"
      sm
      dark)
      .code.white :persistent="`+e._s("{{ persistent }}")+`"
    w-button(
      bg-color="primary-light1"
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent"
      sm
      dark)
      .code.white :persistent-no-animation="`+e._s("{{ persistentNoAnimation }}")+`"
    w-input.mt2.d-block(
      v-model="opacity"
      outline
      type="number"
      label="Overlay opacity"
      label-position="left"
      step="0.1"
      min="0"
      max="1")
w-overlay(
  v-model="showOverlay"
  :persistent="persistent"
  :persistent-no-animation="persistentNoAnimation"
  :opacity="opacity")
  w-button(bg-color="primary" lg dark @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap>
  <w-button bg-color="primary" dark @click="showOverlay = true">
    Show overlay
  </w-button>

  <w-divider
    class="mx6"
    vertical
    color="grey-light4">
  </w-divider>

  <div>
    <div class="title4">Options</div>
    <w-button
      class="mr2"
      bg-color="primary-light1"
      :class="persistent ? 'pr4' : ''"
      @click="persistent = !persistent"
      sm
      dark>
      :persistent="`+e._s("{{ persistent }}")+`"
    </w-button>

    <w-button
      bg-color="primary-light1"
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent"
      sm
      dark>
      :persistent-no-animation="`+e._s("{{ persistentNoAnimation }}")+`"
    </w-button>

    <w-input
      class="mt2 d-block"
      v-model="opacity"
      outline
      type="number"
      label="Overlay opacity"
      label-position="left"
      step="0.1"
      min="0"
      max="1">
    </w-input>
  </div>
</w-flex>

<w-overlay
  v-model="showOverlay"
  :persistent="persistent"
  :persistent-no-animation="persistentNoAnimation"
  :opacity="opacity">
  <w-button
    bg-color="primary"
    lg
    dark
    @click="showOverlay = false">
    <w-icon class="mr2">wi-cross</w-icon>
    Hide overlay
  </w-button>
</w-overlay>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  showOverlay: false,
  opacity: 0.3,
  persistent: false,
  persistentNoAnimation: false
})
`)]},proxy:!0}])},[t("w-flex",{attrs:{wrap:""}},[t("w-button",{staticClass:"my2",attrs:{"bg-color":"primary",dark:""},on:{click:function(o){e.showOverlay=!0}}},[e._v("Show overlay")]),t("w-divider",{staticClass:"mx6",attrs:{vertical:"",color:"grey-light4"}}),t("div",[t("div",{staticClass:"title4"},[e._v("Options")]),t("w-button",{staticClass:"d-block mr2",class:e.persistent?"pr4":"",attrs:{"bg-color":"primary-light1",sm:"",dark:""},on:{click:function(o){e.persistent=!e.persistent}}},[t("div",{staticClass:"code white"},[e._v(':persistent="'+e._s(e.persistent)+'"')])]),t("w-button",{staticClass:"d-block mt2",attrs:{"bg-color":"primary-light1",disabled:!e.persistent,sm:"",dark:""},on:{click:function(o){e.persistentNoAnimation=!e.persistentNoAnimation}}},[t("div",{staticClass:"code white"},[e._v(':persistent-no-animation="'+e._s(e.persistentNoAnimation)+'"')])]),t("w-input",{staticClass:"mt2 d-block",attrs:{outline:"",type:"number",label:"Overlay opacity","label-position":"left",step:"0.1",min:"0",max:"1"},model:{value:e.opacity,callback:function(o){e.opacity=o},expression:"opacity"}})],1)],1),t("w-overlay",{attrs:{persistent:e.persistent,"persistent-no-animation":e.persistentNoAnimation,opacity:e.opacity},model:{value:e.showOverlay,callback:function(o){e.showOverlay=o},expression:"showOverlay"}},[t("w-button",{attrs:{"bg-color":"primary",lg:"",dark:""},on:{click:function(o){e.showOverlay=!1}}},[t("w-icon",{staticClass:"mr2"},[e._v("wi-cross")]),e._v("Hide overlay")],1)],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Overlay with custom background color")]),t("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button(bg-color="primary" dark @click="showOverlay = true") Show a blue overlay

w-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")
  w-button(bg-color="primary" lg dark @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button
  bg-color="primary"
  dark
  @click="showOverlay = true">
  Show a blue overlay
</w-button>

<w-overlay
  v-model="showOverlay"
  bg-color="rgba(35, 71, 129, 0.4)">
  <w-button
    bg-color="primary"
    lg
    dark
    @click="showOverlay = false">
    <w-icon class="mr2">wi-cross</w-icon>
    Hide overlay
  </w-button>
</w-overlay>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  showOverlay: false
})
`)]},proxy:!0}])},[t("w-button",{attrs:{"bg-color":"primary",dark:""},on:{click:function(o){e.showBlueOverlay=!0}}},[e._v("Show a blue overlay")]),t("w-overlay",{attrs:{"bg-color":"rgba(35, 71, 129, 0.4)"},model:{value:e.showBlueOverlay,callback:function(o){e.showBlueOverlay=o},expression:"showBlueOverlay"}},[t("w-button",{attrs:{"bg-color":"primary",lg:"",dark:""},on:{click:function(o){e.showBlueOverlay=!1}}},[t("w-icon",{staticClass:"mr2"},[e._v("wi-cross")]),e._v("Hide overlay")],1)],1)],1),t("title-link",{attrs:{h2:""}},[e._v("CSS backdrop filter")]),e._m(1),t("ssh-pre",{attrs:{language:"css"}},[e._v(".w-overlay {backdrop-filter: blur(10px);}")]),t("w-button",{attrs:{"bg-color":"primary",dark:""},on:{click:function(o){e.showBlurBackdropOverlay=!0}}},[e._v("Show a blur backdrop")]),t("w-overlay",{staticClass:"blur-backdrop",model:{value:e.showBlurBackdropOverlay,callback:function(o){e.showBlurBackdropOverlay=o},expression:"showBlurBackdropOverlay"}},[t("w-button",{attrs:{"bg-color":"primary",lg:"",dark:""},on:{click:function(o){e.showBlurBackdropOverlay=!1}}},[t("w-icon",{staticClass:"mr2"},[e._v("wi-cross")]),e._v("Hide overlay")],1)],1)],1)},p=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("By default the overlay has a "),t("span",{staticClass:"code"},[e._v("0.3")]),e._v(` opacity with a black color and a z-index
of `),t("span",{staticClass:"code"},[e._v("500")]),e._v("."),t("br"),e._v(`
It is very easy to overrides these defaults via CSS, but you can also pass them as
parameters to the `),t("span",{staticClass:"code"},[e._v("w-overlay")]),e._v(`.
`)])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(`The backdrop filter is very recently
`),t("a",{attrs:{href:"https://caniuse.com/css-backdrop-filter",target:"_blank"}},[e._v("supported on all the major browsers")]),e._v(`
and very nice.`)])}];const v={data:()=>({showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1})},a={};var u=r(v,c,p,!1,d,null,null,null);function d(e){for(let n in a)this[n]=a[n]}var y=function(){return u.exports}(),m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},h=[];const w={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',absolute:"Sets the CSS position of the overlay to <code>absolute</code>. By default it is set to <code>fixed</code>.",opacity:"Sets a custom opacity on the overlay.",bgColor:`Applies a color to the overlay's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,zIndex:"Applies a z-index (positive or negative integer) to the overlay.",persistent:"When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user)."},_={default:{description:"The overlay content, if any."}},b={input:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},"update:modelValue":{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},close:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>)."},closed:{description:"Emitted after the overlay is completely closed (after the closing animation)."},click:{description:"Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.",params:{"[DOM event object]":"The associated click DOM event."}}},f={data:()=>({propsDescs:w,slots:_}),computed:{props(){return s.props},events(){return s.emits.reduce((e,n)=>(e[n]=b[n]||{})&&e,{})}}},i={};var k=r(f,m,h,!1,g,null,null,null);function g(e){for(let n in i)this[n]=i[n]}var x=function(){return k.exports}(),O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("ui-component-title",[e._v("w-overlay")]),t("examples"),t("api")],1)},$=[];const C={components:{Examples:y,Api:x}},l={};var A=r(C,O,$,!1,B,null,null,null);function B(e){for(let n in l)this[n]=l[n]}var N=function(){return A.exports}();export{N as default};
