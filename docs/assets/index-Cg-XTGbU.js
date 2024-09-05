import{r as a,o as y,g as w,a as t,w as n,b as s,t as p,d as i,n as V,_ as h,X as O}from"./index-DmbSWeYz.js";const N=i("p",null,[s("By default the overlay has a "),i("span",{class:"code"},"0.3"),s(` opacity with a black color and a z-index
of `),i("span",{class:"code"},"500"),s("."),i("br"),s(`
It is very easy to overrides these defaults via CSS, but you can also pass them as
parameters to the `),i("span",{class:"code"},"w-overlay"),s(`.
`)],-1),S=i("span",{class:"code"},"persistent",-1),C=i("p",null,"When the overlay is persistent, it will not close on click and on escape key.",-1),x=i("p",null,"When persistent is set to false and by default, the escape key will also close the overlay.",-1),E=i("div",{class:"title4"},"Options",-1),H={class:"code inherit"},U={class:"code inherit"},W=i("p",null,[s(`The backdrop filter is very recently
`),i("a",{href:"https://caniuse.com/css-backdrop-filter",target:"_blank"},"supported on all the major browsers"),s(`
and very nice.`)],-1);function D(e,o,f,b,k,d){const c=a("title-link"),r=a("w-button"),u=a("w-divider"),_=a("w-switch"),$=a("w-input"),A=a("w-flex"),v=a("w-icon"),m=a("w-overlay"),g=a("example"),B=a("ssh-pre");return y(),w("div",null,[N,t(c,{h2:""},{default:n(()=>[s("Overlay with custom opacity and control on "),S]),_:1}),C,x,t(g,null,{pug:n(()=>[s(`w-flex(wrap)
  w-button(@click="showOverlay = true") Show overlay

  w-divider.mx6(vertical)
  div
    .title4 Options
    w-switch.d-flex.mr2(
      :class="persistent ? 'pr4' : ''"
      @click="persistent = !persistent")
      .code.inherit :persistent="`+p("{{ persistent }}")+`"
    w-switch.d-flex(
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent")
      .code.inherit :persistent-no-animation="`+p("{{ persistentNoAnimation }}")+`"
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
  w-button(lg @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`)]),html:n(()=>[s(`<w-flex wrap>
  <w-button @click="showOverlay = true">
    Show overlay
  </w-button>

  <w-divider
    class="mx6"
    vertical>
  </w-divider>

  <div>
    <div class="title4">Options</div>
    <w-switch
      class="mr2"
      :class="persistent ? 'pr4' : ''"
      @click="persistent = !persistent"
      sm>
      :persistent="`+p("{{ persistent }}")+`"
    </w-switch>

    <w-switch
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent"
      sm>
      :persistent-no-animation="`+p("{{ persistentNoAnimation }}")+`"
    </w-switch>

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
  <w-button lg @click="showOverlay = false">
    <w-icon class="mr2">wi-cross</w-icon>
    Hide overlay
  </w-button>
</w-overlay>`)]),js:n(()=>[s(`data: () => ({
  showOverlay: false,
  opacity: 0.3,
  persistent: false,
  persistentNoAnimation: false
})
`)]),default:n(()=>[t(A,{wrap:""},{default:n(()=>[t(r,{class:"my2",onClick:o[0]||(o[0]=l=>e.showOverlay=!0)},{default:n(()=>[s("Show overlay")]),_:1}),t(u,{class:"mx6",vertical:""}),i("div",null,[E,t(_,{class:V(["d-flex mr2",e.persistent?"pr4":""]),onClick:o[1]||(o[1]=l=>e.persistent=!e.persistent)},{default:n(()=>[i("div",H,':persistent="'+p(e.persistent)+'"',1)]),_:1},8,["class"]),t(_,{class:"d-flex mt2",onClick:o[2]||(o[2]=l=>e.persistentNoAnimation=!e.persistentNoAnimation),disabled:!e.persistent},{default:n(()=>[i("div",U,':persistent-no-animation="'+p(e.persistentNoAnimation)+'"',1)]),_:1},8,["disabled"]),t($,{class:"mt2 d-block",modelValue:e.opacity,"onUpdate:modelValue":o[3]||(o[3]=l=>e.opacity=l),outline:"",type:"number",label:"Overlay opacity","label-position":"left",step:"0.1",min:"0",max:"1"},null,8,["modelValue"])])]),_:1}),t(m,{modelValue:e.showOverlay,"onUpdate:modelValue":o[5]||(o[5]=l=>e.showOverlay=l),persistent:e.persistent,"persistent-no-animation":e.persistentNoAnimation,opacity:e.opacity},{default:n(()=>[t(r,{lg:"",onClick:o[4]||(o[4]=l=>e.showOverlay=!1)},{default:n(()=>[t(v,{class:"mr2"},{default:n(()=>[s("wi-cross")]),_:1}),s("Hide overlay")]),_:1})]),_:1},8,["modelValue","persistent","persistent-no-animation","opacity"])]),_:1}),t(c,{h2:""},{default:n(()=>[s("Overlay with custom background color")]),_:1}),t(g,{"content-class":"w-flex align-center"},{pug:n(()=>[s(`w-button(@click="showOverlay = true") Show a blue overlay

w-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")
  w-button(lg @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`)]),html:n(()=>[s(`<w-button @click="showOverlay = true">
  Show a blue overlay
</w-button>

<w-overlay
  v-model="showOverlay"
  bg-color="rgba(35, 71, 129, 0.4)">
  <w-button lg @click="showOverlay = false">
    <w-icon class="mr2">wi-cross</w-icon>
    Hide overlay
  </w-button>
</w-overlay>`)]),js:n(()=>[s(`data: () => ({
  showOverlay: false
})
`)]),default:n(()=>[t(r,{onClick:o[6]||(o[6]=l=>e.showBlueOverlay=!0)},{default:n(()=>[s("Show a blue overlay")]),_:1}),t(m,{modelValue:e.showBlueOverlay,"onUpdate:modelValue":o[8]||(o[8]=l=>e.showBlueOverlay=l),"bg-color":"rgba(35, 71, 129, 0.4)"},{default:n(()=>[t(r,{lg:"",onClick:o[7]||(o[7]=l=>e.showBlueOverlay=!1)},{default:n(()=>[t(v,{class:"mr2"},{default:n(()=>[s("wi-cross")]),_:1}),s("Hide overlay")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(c,{h2:""},{default:n(()=>[s("CSS backdrop filter")]),_:1}),W,t(B,{language:"css",dark:e.$store.state.darkMode},{default:n(()=>[s(".w-overlay {backdrop-filter: blur(10px);}")]),_:1},8,["dark"]),t(r,{onClick:o[9]||(o[9]=l=>e.showBlurBackdropOverlay=!0)},{default:n(()=>[s("Show a blur backdrop")]),_:1}),t(m,{class:"blur-backdrop",modelValue:e.showBlurBackdropOverlay,"onUpdate:modelValue":o[11]||(o[11]=l=>e.showBlurBackdropOverlay=l)},{default:n(()=>[t(r,{lg:"",onClick:o[10]||(o[10]=l=>e.showBlurBackdropOverlay=!1)},{default:n(()=>[t(v,{class:"mr2"},{default:n(()=>[s("wi-cross")]),_:1}),s("Hide overlay")]),_:1})]),_:1},8,["modelValue"])])}const T={data:()=>({showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1})},z=h(T,[["render",D]]),j=i("div",{class:"w-divider my12"},null,-1);function I(e,o,f,b,k,d){const c=a("title-link"),r=a("component-api");return y(),w("div",null,[j,t(c,{class:"title1",h2:""},{default:n(()=>[s("API")]),_:1}),t(r,{class:"mt0",items:d.props,descriptions:e.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(r,{items:e.slots,title:"Slots"},null,8,["items"]),t(r,{items:d.events,title:"Events"},null,8,["items"])])}const M={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',absolute:"Sets the CSS position of the overlay to <code>absolute</code>. By default it is set to <code>fixed</code>.",opacity:"Sets a custom opacity on the overlay.",bgColor:`Applies a color to the overlay's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,zIndex:"Applies a z-index (positive or negative integer) to the overlay.",persistent:"When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user)."},P={default:{description:"The overlay content, if any."}},R={input:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},"update:modelValue":{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},close:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>)."},closed:{description:"Emitted after the overlay is completely closed (after the closing animation)."},click:{description:"Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.",params:{"[DOM event object]":"The associated click DOM event."}}},X={data:()=>({propsDescs:M,slots:P}),computed:{props(){return O.props},events(){return O.emits.reduce((e,o)=>(e[o]=R[o]||{})&&e,{})}}},q=h(X,[["render",I]]);function F(e,o,f,b,k,d){const c=a("ui-component-title"),r=a("examples"),u=a("api");return y(),w("main",null,[t(c,null,{default:n(()=>[s("w-overlay")]),_:1}),t(r),t(u)])}const G={components:{Examples:z,Api:q}},K=h(G,[["render",F]]);export{K as default};
