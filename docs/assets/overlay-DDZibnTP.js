import{H as e,N as t,c as n,d as r,g as i,h as a,ht as o,k as s,vt as c}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as l}from"./_plugin-vue_export-helper-S3RvzygF.js";import{b as u}from"./index-CmUoOmTq.js";var d={class:`code inherit`},f={class:`code inherit`};function p(l,u,p,m,h,g){let _=t(`title-link`),v=t(`w-button`),y=t(`w-divider`),b=t(`w-switch`),x=t(`w-input`),S=t(`w-flex`),C=t(`w-icon`),w=t(`w-overlay`),T=t(`example`),E=t(`ssh-pre`);return s(),r(`div`,null,[u[32]||=n(`p`,null,[a(`By default the overlay has a `),n(`span`,{class:`code`},`0.3`),a(` opacity with a black color and a z-index
of `),n(`span`,{class:`code`},`500`),a(`.`),n(`br`),a(`
It is very easy to overrides these defaults via CSS, but you can also pass them as
parameters to the `),n(`span`,{class:`code`},`w-overlay`),a(`.
`)],-1),i(_,{h2:``},{default:e(()=>[...u[12]||=[a(`Overlay with custom opacity and control on `,-1),n(`span`,{class:`code`},`persistent`,-1)]]),_:1}),u[33]||=n(`p`,null,`When the overlay is persistent, it will not close on click and on escape key.`,-1),u[34]||=n(`p`,null,`When persistent is set to false and by default, the escape key will also close the overlay.`,-1),i(T,null,{pug:e(()=>[...u[17]||=[a(`w-flex(wrap)
  w-button(@click="showOverlay = true") Show overlay

  w-divider.mx6(vertical)
  div
    .title4 Options
    w-switch.d-flex.mr2(
      :class="persistent ? 'pr4' : ''"
      @click="persistent = !persistent")
      .code.inherit :persistent="`+c(`{{ persistent }}`)+`"
    w-switch.d-flex(
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent")
      .code.inherit :persistent-no-animation="`+c(`{{ persistentNoAnimation }}`)+`"
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
    | Hide overlay`,-1)]]),html:e(()=>[...u[18]||=[a(`<w-flex wrap>
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
      :persistent="`+c(`{{ persistent }}`)+`"
    </w-switch>

    <w-switch
      @click="persistentNoAnimation = !persistentNoAnimation"
      :disabled="!persistent"
      sm>
      :persistent-no-animation="`+c(`{{ persistentNoAnimation }}`)+`"
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
</w-overlay>`,-1)]]),js:e(()=>[...u[19]||=[a(`data: () => ({
  showOverlay: false,
  opacity: 0.3,
  persistent: false,
  persistentNoAnimation: false
})
`,-1)]]),default:e(()=>[i(S,{wrap:``},{default:e(()=>[i(v,{class:`my2`,onClick:u[0]||=e=>l.showOverlay=!0},{default:e(()=>[...u[13]||=[a(`Show overlay`,-1)]]),_:1}),i(y,{class:`mx6`,vertical:``}),n(`div`,null,[u[14]||=n(`div`,{class:`title4`},`Options`,-1),i(b,{class:o([`d-flex mr2`,l.persistent?`pr4`:``]),onClick:u[1]||=e=>l.persistent=!l.persistent},{default:e(()=>[n(`div`,d,`:persistent="`+c(l.persistent)+`"`,1)]),_:1},8,[`class`]),i(b,{class:`d-flex mt2`,onClick:u[2]||=e=>l.persistentNoAnimation=!l.persistentNoAnimation,disabled:!l.persistent},{default:e(()=>[n(`div`,f,`:persistent-no-animation="`+c(l.persistentNoAnimation)+`"`,1)]),_:1},8,[`disabled`]),i(x,{class:`mt2 d-block`,modelValue:l.opacity,"onUpdate:modelValue":u[3]||=e=>l.opacity=e,outline:``,type:`number`,label:`Overlay opacity`,"label-position":`left`,step:`0.1`,min:`0`,max:`1`},null,8,[`modelValue`])])]),_:1}),i(w,{modelValue:l.showOverlay,"onUpdate:modelValue":u[5]||=e=>l.showOverlay=e,persistent:l.persistent,"persistent-no-animation":l.persistentNoAnimation,opacity:l.opacity},{default:e(()=>[i(v,{lg:``,onClick:u[4]||=e=>l.showOverlay=!1},{default:e(()=>[i(C,{class:`mr2`},{default:e(()=>[...u[15]||=[a(`wi-cross`,-1)]]),_:1}),u[16]||=a(`Hide overlay`,-1)]),_:1})]),_:1},8,[`modelValue`,`persistent`,`persistent-no-animation`,`opacity`])]),_:1}),i(_,{h2:``},{default:e(()=>[...u[20]||=[a(`Overlay with custom background color`,-1)]]),_:1}),i(T,{"content-class":`w-flex align-center`},{pug:e(()=>[...u[24]||=[a(`w-button(@click="showOverlay = true") Show a blue overlay

w-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")
  w-button(lg @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`,-1)]]),html:e(()=>[...u[25]||=[a(`<w-button @click="showOverlay = true">
  Show a blue overlay
</w-button>

<w-overlay
  v-model="showOverlay"
  bg-color="rgba(35, 71, 129, 0.4)">
  <w-button lg @click="showOverlay = false">
    <w-icon class="mr2">wi-cross</w-icon>
    Hide overlay
  </w-button>
</w-overlay>`,-1)]]),js:e(()=>[...u[26]||=[a(`data: () => ({
  showOverlay: false
})
`,-1)]]),default:e(()=>[i(v,{onClick:u[6]||=e=>l.showBlueOverlay=!0},{default:e(()=>[...u[21]||=[a(`Show a blue overlay`,-1)]]),_:1}),i(w,{modelValue:l.showBlueOverlay,"onUpdate:modelValue":u[8]||=e=>l.showBlueOverlay=e,"bg-color":`rgba(35, 71, 129, 0.4)`},{default:e(()=>[i(v,{lg:``,onClick:u[7]||=e=>l.showBlueOverlay=!1},{default:e(()=>[i(C,{class:`mr2`},{default:e(()=>[...u[22]||=[a(`wi-cross`,-1)]]),_:1}),u[23]||=a(`Hide overlay`,-1)]),_:1})]),_:1},8,[`modelValue`])]),_:1}),i(_,{h2:``},{default:e(()=>[...u[27]||=[a(`CSS backdrop filter`,-1)]]),_:1}),u[35]||=n(`p`,null,[a(`The backdrop filter is very recently
`),n(`a`,{href:`https://caniuse.com/css-backdrop-filter`,target:`_blank`},`supported on all the major browsers`),a(`
and very nice.`)],-1),i(E,{language:`css`,dark:l.$store.state.darkMode},{default:e(()=>[...u[28]||=[a(`.w-overlay {backdrop-filter: blur(10px);}`,-1)]]),_:1},8,[`dark`]),i(v,{onClick:u[9]||=e=>l.showBlurBackdropOverlay=!0},{default:e(()=>[...u[29]||=[a(`Show a blur backdrop`,-1)]]),_:1}),i(w,{class:`blur-backdrop`,modelValue:l.showBlurBackdropOverlay,"onUpdate:modelValue":u[11]||=e=>l.showBlurBackdropOverlay=e},{default:e(()=>[i(v,{lg:``,onClick:u[10]||=e=>l.showBlurBackdropOverlay=!1},{default:e(()=>[i(C,{class:`mr2`},{default:e(()=>[...u[30]||=[a(`wi-cross`,-1)]]),_:1}),u[31]||=a(`Hide overlay`,-1)]),_:1})]),_:1},8,[`modelValue`])])}var m=l({data:()=>({showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1})},[[`render`,p]]);function h(o,c,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return s(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:e(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:o.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:o.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.`,absolute:`Sets the CSS position of the overlay to <code>absolute</code>. By default it is set to <code>fixed</code>.`,opacity:`Sets a custom opacity on the overlay.`,bgColor:`Applies a color to the overlay's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,zIndex:`Applies a z-index (positive or negative integer) to the overlay.`,persistent:`When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.`,persistentNoAnimation:`When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).`},_={default:{description:`The overlay content, if any.`}},v={input:{description:`Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean]":`Represents the open state of the overlay: false on overlay close.`}},"update:modelValue":{description:`Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean]":`Represents the open state of the overlay: false on overlay close.`}},close:{description:`Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).`},closed:{description:`Emitted after the overlay is completely closed (after the closing animation).`},click:{description:`Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.`,params:{"[DOM event object]":`The associated click DOM event.`}}},y=l({data:()=>({propsDescs:g,slots:_}),computed:{props(){return u.props},events(){return u.emits.reduce((e,t)=>(e[t]=v[t]||{})&&e,{})}}},[[`render`,h]]);function b(n,o,c,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return s(),r(`main`,null,[i(f,null,{default:e(()=>[...o[0]||=[a(`w-overlay`,-1)]]),_:1}),i(p),i(m)])}var x=l({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};