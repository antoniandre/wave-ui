import{r as i,o as v,f as h,a as o,w as n,b as r,n as B,h as p,e as s,_ as w,X as g}from"./index.f302d8ad.js";const V=r("p",null,[s("By default the overlay has a "),r("span",{class:"code"},"0.3"),s(` opacity with a black color and a z-index
of `),r("span",{class:"code"},"500"),s("."),r("br"),s(`
It is very easy to overrides these defaults via CSS, but you can also pass them as
parameters to the `),r("span",{class:"code"},"w-overlay"),s(`.
`)],-1),N=s("Overlay with custom opacity and control on "),C=r("span",{class:"code"},"persistent",-1),S=r("p",null,"When the overlay is persistent, it will not close on click and on escape key.",-1),E=r("p",null,"When persistent is set to false and by default, the escape key will also close the overlay.",-1),H=s("Show overlay"),x=r("div",{class:"title4"},"Options",-1),U={class:"code white"},W={class:"code white"},D=s("wi-cross"),T=s("Hide overlay"),z=s(`w-flex(wrap)
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
      .code.white :persistent="`+p("{{ persistent }}")+`"
    w-button(
      bg-color="primary-light1"
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent"
      sm
      dark)
      .code.white :persistent-no-animation="`+p("{{ persistentNoAnimation }}")+`"
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
    | Hide overlay`),I=s(`<w-flex wrap>
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
      :persistent="`+p("{{ persistent }}")+`"
    </w-button>

    <w-button
      bg-color="primary-light1"
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
</w-overlay>`),P=s(`data: () => ({
  showOverlay: false,
  opacity: 0.3,
  persistent: false,
  persistentNoAnimation: false
})
`),j=s("Overlay with custom background color"),M=s("Show a blue overlay"),R=s("wi-cross"),X=s("Hide overlay"),q=s(`w-button(bg-color="primary" dark @click="showOverlay = true") Show a blue overlay

w-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")
  w-button(bg-color="primary" lg dark @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`),F=s(`<w-button
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
</w-overlay>`),G=s(`data: () => ({
  showOverlay: false
})
`),J=s("CSS backdrop filter"),K=r("p",null,[s(`The backdrop filter is
`),r("a",{href:"https://caniuse.com/css-backdrop-filter",target:"_blank"},"not supported on all the browsers"),s(`
yet but very nice.`)],-1),L=s(".w-overlay {backdrop-filter: blur(10px);}"),Q=s("Show a blur backdrop"),Y=s("wi-cross"),Z=s("Hide overlay");function ee(e,t,b,_,f,d){const c=i("title-link"),a=i("w-button"),u=i("w-divider"),O=i("w-input"),$=i("w-flex"),m=i("w-icon"),y=i("w-overlay"),k=i("example"),A=i("ssh-pre");return v(),h("div",null,[V,o(c,{h2:""},{default:n(()=>[N,C]),_:1}),S,E,o(k,null,{pug:n(()=>[z]),html:n(()=>[I]),js:n(()=>[P]),default:n(()=>[o($,{wrap:""},{default:n(()=>[o(a,{class:"my2","bg-color":"primary",dark:"",onClick:t[0]||(t[0]=l=>e.showOverlay=!0)},{default:n(()=>[H]),_:1}),o(u,{class:"mx6",vertical:"",color:"grey-light4"}),r("div",null,[x,o(a,{class:B(["d-block mr2",e.persistent?"pr4":""]),"bg-color":"primary-light1",onClick:t[1]||(t[1]=l=>e.persistent=!e.persistent),sm:"",dark:""},{default:n(()=>[r("div",U,':persistent="'+p(e.persistent)+'"',1)]),_:1},8,["class"]),o(a,{class:"d-block mt2","bg-color":"primary-light1",onClick:t[2]||(t[2]=l=>e.persistentNoAnimation=!e.persistentNoAnimation),disabled:!e.persistent,sm:"",dark:""},{default:n(()=>[r("div",W,':persistent-no-animation="'+p(e.persistentNoAnimation)+'"',1)]),_:1},8,["disabled"]),o(O,{class:"mt2 d-block",modelValue:e.opacity,"onUpdate:modelValue":t[3]||(t[3]=l=>e.opacity=l),outline:"",type:"number",label:"Overlay opacity","label-position":"left",step:"0.1",min:"0",max:"1"},null,8,["modelValue"])])]),_:1}),o(y,{modelValue:e.showOverlay,"onUpdate:modelValue":t[5]||(t[5]=l=>e.showOverlay=l),persistent:e.persistent,"persistent-no-animation":e.persistentNoAnimation,opacity:e.opacity},{default:n(()=>[o(a,{"bg-color":"primary",lg:"",dark:"",onClick:t[4]||(t[4]=l=>e.showOverlay=!1)},{default:n(()=>[o(m,{class:"mr2"},{default:n(()=>[D]),_:1}),T]),_:1})]),_:1},8,["modelValue","persistent","persistent-no-animation","opacity"])]),_:1}),o(c,{h2:""},{default:n(()=>[j]),_:1}),o(k,{"content-class":"w-flex align-center"},{pug:n(()=>[q]),html:n(()=>[F]),js:n(()=>[G]),default:n(()=>[o(a,{"bg-color":"primary",dark:"",onClick:t[6]||(t[6]=l=>e.showBlueOverlay=!0)},{default:n(()=>[M]),_:1}),o(y,{modelValue:e.showBlueOverlay,"onUpdate:modelValue":t[8]||(t[8]=l=>e.showBlueOverlay=l),"bg-color":"rgba(35, 71, 129, 0.4)"},{default:n(()=>[o(a,{"bg-color":"primary",lg:"",dark:"",onClick:t[7]||(t[7]=l=>e.showBlueOverlay=!1)},{default:n(()=>[o(m,{class:"mr2"},{default:n(()=>[R]),_:1}),X]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(c,{h2:""},{default:n(()=>[J]),_:1}),K,o(A,{language:"css"},{default:n(()=>[L]),_:1}),o(a,{"bg-color":"primary",dark:"",onClick:t[9]||(t[9]=l=>e.showBlurBackdropOverlay=!0)},{default:n(()=>[Q]),_:1}),o(y,{class:"blur-backdrop",modelValue:e.showBlurBackdropOverlay,"onUpdate:modelValue":t[11]||(t[11]=l=>e.showBlurBackdropOverlay=l)},{default:n(()=>[o(a,{"bg-color":"primary",lg:"",dark:"",onClick:t[10]||(t[10]=l=>e.showBlurBackdropOverlay=!1)},{default:n(()=>[o(m,{class:"mr2"},{default:n(()=>[Y]),_:1}),Z]),_:1})]),_:1},8,["modelValue"])])}const oe={data:()=>({showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1})};var te=w(oe,[["render",ee]]);const ne=r("div",{class:"w-divider my12"},null,-1),se=s("API");function le(e,t,b,_,f,d){const c=i("title-link"),a=i("component-api");return v(),h("div",null,[ne,o(c,{class:"title1",h2:""},{default:n(()=>[se]),_:1}),o(a,{class:"mt0",items:d.props,descriptions:e.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(a,{items:e.slots,title:"Slots"},null,8,["items"]),o(a,{items:d.events,title:"Events"},null,8,["items"])])}const re={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',opacity:"Sets a custom opacity on the overlay.",bgColor:`Applies a color to the overlay's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,zIndex:"Applies a z-index (positive or negative integer) to the overlay.",persistent:"When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user)."},ae={default:{description:"The overlay content, if any."}},ie={input:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},"update:modelValue":{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},close:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>)."},closed:{description:"Emitted after the overlay is completely closed (after the closing animation)."},click:{description:"Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.",params:{"[DOM event object]":"The associated click DOM event."}}},ce={data:()=>({propsDescs:re,slots:ae}),computed:{props(){return g.props},events(){return g.emits.reduce((e,t)=>(e[t]=ie[t]||{})&&e,{})}}};var pe=w(ce,[["render",le]]);const de=s("w-overlay");function ue(e,t,b,_,f,d){const c=i("ui-component-title"),a=i("examples"),u=i("api");return v(),h("main",null,[o(c,null,{default:n(()=>[de]),_:1}),o(a),o(u)])}const me={components:{Examples:te,Api:pe}};var ve=w(me,[["render",ue]]);export{ve as default};
