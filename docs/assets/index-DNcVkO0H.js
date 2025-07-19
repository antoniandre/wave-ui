import{r,g as w,o as c,b as i,a as o,e as s,w as n,n as N,t as d,_ as f,X as $}from"./index-CrSk8JxI.js";const S={class:"code inherit"},C={class:"code inherit"};function _(t,e,b,k,h,u){const p=r("title-link"),a=r("w-button"),v=r("w-divider"),g=r("w-switch"),A=r("w-input"),B=r("w-flex"),m=r("w-icon"),y=r("w-overlay"),O=r("example"),V=r("ssh-pre");return c(),w("div",null,[e[32]||(e[32]=i("p",null,[s("By default the overlay has a "),i("span",{class:"code"},"0.3"),s(` opacity with a black color and a z-index
of `),i("span",{class:"code"},"500"),s("."),i("br"),s(`
It is very easy to overrides these defaults via CSS, but you can also pass them as
parameters to the `),i("span",{class:"code"},"w-overlay"),s(`.
`)],-1)),o(p,{h2:""},{default:n(()=>e[12]||(e[12]=[s("Overlay with custom opacity and control on "),i("span",{class:"code"},"persistent",-1)])),_:1,__:[12]}),e[33]||(e[33]=i("p",null,"When the overlay is persistent, it will not close on click and on escape key.",-1)),e[34]||(e[34]=i("p",null,"When persistent is set to false and by default, the escape key will also close the overlay.",-1)),o(O,null,{pug:n(()=>e[17]||(e[17]=[s(`w-flex(wrap)
  w-button(@click="showOverlay = true") Show overlay

  w-divider.mx6(vertical)
  div
    .title4 Options
    w-switch.d-flex.mr2(
      :class="persistent ? 'pr4' : ''"
      @click="persistent = !persistent")
      .code.inherit :persistent="`+d("{{ persistent }}")+`"
    w-switch.d-flex(
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent")
      .code.inherit :persistent-no-animation="`+d("{{ persistentNoAnimation }}")+`"
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
    | Hide overlay`)])),html:n(()=>e[18]||(e[18]=[s(`<w-flex wrap>
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
      :persistent="`+d("{{ persistent }}")+`"
    </w-switch>

    <w-switch
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent"
      sm>
      :persistent-no-animation="`+d("{{ persistentNoAnimation }}")+`"
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
</w-overlay>`)])),js:n(()=>e[19]||(e[19]=[s(`data: () => ({
  showOverlay: false,
  opacity: 0.3,
  persistent: false,
  persistentNoAnimation: false
})
`)])),default:n(()=>[o(B,{wrap:""},{default:n(()=>[o(a,{class:"my2",onClick:e[0]||(e[0]=l=>t.showOverlay=!0)},{default:n(()=>e[13]||(e[13]=[s("Show overlay")])),_:1,__:[13]}),o(v,{class:"mx6",vertical:""}),i("div",null,[e[14]||(e[14]=i("div",{class:"title4"},"Options",-1)),o(g,{class:N(["d-flex mr2",t.persistent?"pr4":""]),onClick:e[1]||(e[1]=l=>t.persistent=!t.persistent)},{default:n(()=>[i("div",S,':persistent="'+d(t.persistent)+'"',1)]),_:1},8,["class"]),o(g,{class:"d-flex mt2",onClick:e[2]||(e[2]=l=>t.persistentNoAnimation=!t.persistentNoAnimation),disabled:!t.persistent},{default:n(()=>[i("div",C,':persistent-no-animation="'+d(t.persistentNoAnimation)+'"',1)]),_:1},8,["disabled"]),o(A,{class:"mt2 d-block",modelValue:t.opacity,"onUpdate:modelValue":e[3]||(e[3]=l=>t.opacity=l),outline:"",type:"number",label:"Overlay opacity","label-position":"left",step:"0.1",min:"0",max:"1"},null,8,["modelValue"])])]),_:1}),o(y,{modelValue:t.showOverlay,"onUpdate:modelValue":e[5]||(e[5]=l=>t.showOverlay=l),persistent:t.persistent,"persistent-no-animation":t.persistentNoAnimation,opacity:t.opacity},{default:n(()=>[o(a,{lg:"",onClick:e[4]||(e[4]=l=>t.showOverlay=!1)},{default:n(()=>[o(m,{class:"mr2"},{default:n(()=>e[15]||(e[15]=[s("wi-cross")])),_:1,__:[15]}),e[16]||(e[16]=s("Hide overlay"))]),_:1,__:[16]})]),_:1},8,["modelValue","persistent","persistent-no-animation","opacity"])]),_:1}),o(p,{h2:""},{default:n(()=>e[20]||(e[20]=[s("Overlay with custom background color")])),_:1,__:[20]}),o(O,{"content-class":"w-flex align-center"},{pug:n(()=>e[24]||(e[24]=[s(`w-button(@click="showOverlay = true") Show a blue overlay

w-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")
  w-button(lg @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`)])),html:n(()=>e[25]||(e[25]=[s(`<w-button @click="showOverlay = true">
  Show a blue overlay
</w-button>

<w-overlay
  v-model="showOverlay"
  bg-color="rgba(35, 71, 129, 0.4)">
  <w-button lg @click="showOverlay = false">
    <w-icon class="mr2">wi-cross</w-icon>
    Hide overlay
  </w-button>
</w-overlay>`)])),js:n(()=>e[26]||(e[26]=[s(`data: () => ({
  showOverlay: false
})
`)])),default:n(()=>[o(a,{onClick:e[6]||(e[6]=l=>t.showBlueOverlay=!0)},{default:n(()=>e[21]||(e[21]=[s("Show a blue overlay")])),_:1,__:[21]}),o(y,{modelValue:t.showBlueOverlay,"onUpdate:modelValue":e[8]||(e[8]=l=>t.showBlueOverlay=l),"bg-color":"rgba(35, 71, 129, 0.4)"},{default:n(()=>[o(a,{lg:"",onClick:e[7]||(e[7]=l=>t.showBlueOverlay=!1)},{default:n(()=>[o(m,{class:"mr2"},{default:n(()=>e[22]||(e[22]=[s("wi-cross")])),_:1,__:[22]}),e[23]||(e[23]=s("Hide overlay"))]),_:1,__:[23]})]),_:1},8,["modelValue"])]),_:1}),o(p,{h2:""},{default:n(()=>e[27]||(e[27]=[s("CSS backdrop filter")])),_:1,__:[27]}),e[35]||(e[35]=i("p",null,[s(`The backdrop filter is very recently
`),i("a",{href:"https://caniuse.com/css-backdrop-filter",target:"_blank"},"supported on all the major browsers"),s(`
and very nice.`)],-1)),o(V,{language:"css",dark:t.$store.state.darkMode},{default:n(()=>e[28]||(e[28]=[s(".w-overlay {backdrop-filter: blur(10px);}")])),_:1,__:[28]},8,["dark"]),o(a,{onClick:e[9]||(e[9]=l=>t.showBlurBackdropOverlay=!0)},{default:n(()=>e[29]||(e[29]=[s("Show a blur backdrop")])),_:1,__:[29]}),o(y,{class:"blur-backdrop",modelValue:t.showBlurBackdropOverlay,"onUpdate:modelValue":e[11]||(e[11]=l=>t.showBlurBackdropOverlay=l)},{default:n(()=>[o(a,{lg:"",onClick:e[10]||(e[10]=l=>t.showBlurBackdropOverlay=!1)},{default:n(()=>[o(m,{class:"mr2"},{default:n(()=>e[30]||(e[30]=[s("wi-cross")])),_:1,__:[30]}),e[31]||(e[31]=s("Hide overlay"))]),_:1,__:[31]})]),_:1},8,["modelValue"])])}const x={data:()=>({showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1})},E=f(x,[["render",_]]);function H(t,e,b,k,h,u){const p=r("title-link"),a=r("component-api");return c(),w("div",null,[e[1]||(e[1]=i("div",{class:"w-divider my12"},null,-1)),o(p,{class:"title1",h2:""},{default:n(()=>e[0]||(e[0]=[s("API")])),_:1,__:[0]}),o(a,{class:"mt0",items:u.props,descriptions:t.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(a,{items:t.slots,title:"Slots"},null,8,["items"]),o(a,{items:u.events,title:"Events"},null,8,["items"])])}const U={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',absolute:"Sets the CSS position of the overlay to <code>absolute</code>. By default it is set to <code>fixed</code>.",opacity:"Sets a custom opacity on the overlay.",bgColor:`Applies a color to the overlay's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,zIndex:"Applies a z-index (positive or negative integer) to the overlay.",persistent:"When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user)."},W={default:{description:"The overlay content, if any."}},D={input:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},"update:modelValue":{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},close:{description:"Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>)."},closed:{description:"Emitted after the overlay is completely closed (after the closing animation)."},click:{description:"Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.",params:{"[DOM event object]":"The associated click DOM event."}}},T={data:()=>({propsDescs:U,slots:W}),computed:{props(){return $.props},events(){return $.emits.reduce((t,e)=>(t[e]=D[e]||{})&&t,{})}}},z=f(T,[["render",H]]);function j(t,e,b,k,h,u){const p=r("ui-component-title"),a=r("examples"),v=r("api");return c(),w("main",null,[o(p,null,{default:n(()=>e[0]||(e[0]=[s("w-overlay")])),_:1,__:[0]}),o(a),o(v)])}const I={components:{Examples:E,Api:z}},P=f(I,[["render",j]]);export{P as default};
