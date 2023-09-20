import{r as i,o as v,g as w,a as o,w as n,b as s,t as p,d as r,n as B,_ as h,S as _}from"./index.bf2cfd71.js";const V=r("p",null,[s("By default the overlay has a "),r("span",{class:"code"},"0.3"),s(` opacity with a black color and a z-index
of `),r("span",{class:"code"},"500"),s("."),r("br"),s(`
It is very easy to overrides these defaults via CSS, but you can also pass them as
parameters to the `),r("span",{class:"code"},"w-overlay"),s(`.
`)],-1),N=r("span",{class:"code"},"persistent",-1),S=r("p",null,"When the overlay is persistent, it will not close on click and on escape key.",-1),C=r("p",null,"When persistent is set to false and by default, the escape key will also close the overlay.",-1),E=r("div",{class:"title4"},"Options",-1),H={class:"code inherit"},x={class:"code inherit"},U=r("p",null,[s(`The backdrop filter is very recently
`),r("a",{href:"https://caniuse.com/css-backdrop-filter",target:"_blank"},"supported on all the major browsers"),s(`
and very nice.`)],-1);function W(e,t,b,f,k,d){const c=i("title-link"),a=i("w-button"),u=i("w-divider"),O=i("w-input"),$=i("w-flex"),m=i("w-icon"),y=i("w-overlay"),g=i("example"),A=i("ssh-pre");return v(),w("div",null,[V,o(c,{h2:""},{default:n(()=>[s("Overlay with custom opacity and control on "),N]),_:1}),S,C,o(g,null,{pug:n(()=>[s(`w-flex(wrap)
  w-button(bg-color="primary" dark @click="showOverlay = true") Show overlay

  w-divider.mx6(vertical color="grey-light4")
  div
    .title4 Options
    w-button.mr2(
      bg-color="primary-light1"
      color="contrast-color"
      :class="persistent ? 'pr4' : ''"
      @click="persistent = !persistent"
      sm
      dark)
      .code.inherit :persistent="`+p("{{ persistent }}")+`"
    w-button(
      bg-color="primary-light1"
      color="contrast-color"
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent"
      sm
      dark)
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
  w-button(bg-color="primary" lg dark @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`)]),html:n(()=>[s(`<w-flex wrap>
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
      color="contrast-color"
      :class="persistent ? 'pr4' : ''"
      @click="persistent = !persistent"
      sm
      dark>
      :persistent="`+p("{{ persistent }}")+`"
    </w-button>

    <w-button
      bg-color="primary-light1"
      color="contrast-color"
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent"
      sm
      dark>
      :persistent-no-animation="`+p("{{ persistentNoAnimation }}")+`"
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
</w-overlay>`)]),js:n(()=>[s(`data: () => ({
  showOverlay: false,
  opacity: 0.3,
  persistent: false,
  persistentNoAnimation: false
})
`)]),default:n(()=>[o($,{wrap:""},{default:n(()=>[o(a,{class:"my2","bg-color":"primary",dark:"",onClick:t[0]||(t[0]=l=>e.showOverlay=!0)},{default:n(()=>[s("Show overlay")]),_:1}),o(u,{class:"mx6",vertical:"",color:"grey-light4"}),r("div",null,[E,o(a,{class:B(["d-block mr2",e.persistent?"pr4":""]),"bg-color":"primary-light1",color:"contrast-color",onClick:t[1]||(t[1]=l=>e.persistent=!e.persistent),sm:"",dark:""},{default:n(()=>[r("div",H,':persistent="'+p(e.persistent)+'"',1)]),_:1},8,["class"]),o(a,{class:"d-block mt2","bg-color":"primary-light1",color:"contrast-color",onClick:t[2]||(t[2]=l=>e.persistentNoAnimation=!e.persistentNoAnimation),disabled:!e.persistent,sm:"",dark:""},{default:n(()=>[r("div",x,':persistent-no-animation="'+p(e.persistentNoAnimation)+'"',1)]),_:1},8,["disabled"]),o(O,{class:"mt2 d-block",modelValue:e.opacity,"onUpdate:modelValue":t[3]||(t[3]=l=>e.opacity=l),outline:"",type:"number",label:"Overlay opacity","label-position":"left",step:"0.1",min:"0",max:"1"},null,8,["modelValue"])])]),_:1}),o(y,{modelValue:e.showOverlay,"onUpdate:modelValue":t[5]||(t[5]=l=>e.showOverlay=l),persistent:e.persistent,"persistent-no-animation":e.persistentNoAnimation,opacity:e.opacity},{default:n(()=>[o(a,{"bg-color":"primary",lg:"",dark:"",onClick:t[4]||(t[4]=l=>e.showOverlay=!1)},{default:n(()=>[o(m,{class:"mr2"},{default:n(()=>[s("wi-cross")]),_:1}),s("Hide overlay")]),_:1})]),_:1},8,["modelValue","persistent","persistent-no-animation","opacity"])]),_:1}),o(c,{h2:""},{default:n(()=>[s("Overlay with custom background color")]),_:1}),o(g,{"content-class":"w-flex align-center"},{pug:n(()=>[s(`w-button(bg-color="primary" dark @click="showOverlay = true") Show a blue overlay

w-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")
  w-button(bg-color="primary" lg dark @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`)]),html:n(()=>[s(`<w-button
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
</w-overlay>`)]),js:n(()=>[s(`data: () => ({
  showOverlay: false
})
`)]),default:n(()=>[o(a,{"bg-color":"primary",dark:"",onClick:t[6]||(t[6]=l=>e.showBlueOverlay=!0)},{default:n(()=>[s("Show a blue overlay")]),_:1}),o(y,{modelValue:e.showBlueOverlay,"onUpdate:modelValue":t[8]||(t[8]=l=>e.showBlueOverlay=l),"bg-color":"rgba(35, 71, 129, 0.4)"},{default:n(()=>[o(a,{"bg-color":"primary",lg:"",dark:"",onClick:t[7]||(t[7]=l=>e.showBlueOverlay=!1)},{default:n(()=>[o(m,{class:"mr2"},{default:n(()=>[s("wi-cross")]),_:1}),s("Hide overlay")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(c,{h2:""},{default:n(()=>[s("CSS backdrop filter")]),_:1}),U,o(A,{language:"css",dark:e.$store.state.darkMode},{default:n(()=>[s(".w-overlay {backdrop-filter: blur(10px);}")]),_:1},8,["dark"]),o(a,{"bg-color":"primary",dark:"",onClick:t[9]||(t[9]=l=>e.showBlurBackdropOverlay=!0)},{default:n(()=>[s("Show a blur backdrop")]),_:1}),o(y,{class:"blur-backdrop",modelValue:e.showBlurBackdropOverlay,"onUpdate:modelValue":t[11]||(t[11]=l=>e.showBlurBackdropOverlay=l)},{default:n(()=>[o(a,{"bg-color":"primary",lg:"",dark:"",onClick:t[10]||(t[10]=l=>e.showBlurBackdropOverlay=!1)},{default:n(()=>[o(m,{class:"mr2"},{default:n(()=>[s("wi-cross")]),_:1}),s("Hide overlay")]),_:1})]),_:1},8,["modelValue"])])}const D={data:()=>({showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1})},T=h(D,[["render",W]]),z=r("div",{class:"w-divider my12"},null,-1);function j(e,t,b,f,k,d){const c=i("title-link"),a=i("component-api");return v(),w("div",null,[z,o(c,{class:"title1",h2:""},{default:n(()=>[s("API")]),_:1}),o(a,{class:"mt0",items:d.props,descriptions:e.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(a,{items:e.slots,title:"Slots"},null,8,["items"]),o(a,{items:d.events,title:"Events"},null,8,["items"])])}const I={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',absolute:"Sets the CSS position of the overlay to <code>absolute</code>. By default it is set to <code>fixed</code>.",opacity:"Sets a custom opacity on the overlay.",bgColor:`Applies a color to the overlay's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,zIndex:"Applies a z-index (positive or negative integer) to the overlay.",persistent:"When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user)."},M={default:{description:"The overlay content, if any."}},P={input:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},"update:modelValue":{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},close:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>)."},closed:{description:"Emitted after the overlay is completely closed (after the closing animation)."},click:{description:"Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.",params:{"[DOM event object]":"The associated click DOM event."}}},R={data:()=>({propsDescs:I,slots:M}),computed:{props(){return _.props},events(){return _.emits.reduce((e,t)=>(e[t]=P[t]||{})&&e,{})}}},q=h(R,[["render",j]]);function F(e,t,b,f,k,d){const c=i("ui-component-title"),a=i("examples"),u=i("api");return v(),w("main",null,[o(c,null,{default:n(()=>[s("w-overlay")]),_:1}),o(a),o(u)])}const G={components:{Examples:T,Api:q}},K=h(G,[["render",F]]);export{K as default};
