import{A as e,G as t,P as n,c as r,d as i,g as a,h as o,vt as s,xt as c}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as l}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{b as u}from"./index-DR7O6uV_.js";var d={class:`code inherit`},f={class:`code inherit`};function p(l,u,p,m,h,g){let _=n(`title-link`),v=n(`w-button`),y=n(`w-divider`),b=n(`w-switch`),x=n(`w-input`),S=n(`w-flex`),C=n(`w-icon`),w=n(`w-overlay`),T=n(`example`),E=n(`ssh-pre`);return e(),i(`div`,null,[u[32]||=r(`p`,null,[o(`By default the overlay has a `),r(`span`,{class:`code`},`0.3`),o(` opacity with a black color and a z-index
of `),r(`span`,{class:`code`},`500`),o(`.`),r(`br`),o(`
It is very easy to overrides these defaults via CSS, but you can also pass them as
parameters to the `),r(`span`,{class:`code`},`w-overlay`),o(`.
`)],-1),a(_,{h2:``},{default:t(()=>[...u[12]||=[o(`Overlay with custom opacity and control on `,-1),r(`span`,{class:`code`},`persistent`,-1)]]),_:1}),u[33]||=r(`p`,null,`When the overlay is persistent, it will not close on click and on escape key.`,-1),u[34]||=r(`p`,null,`When persistent is set to false and by default, the escape key will also close the overlay.`,-1),a(T,null,{pug:t(()=>[...u[17]||=[o(`w-flex(wrap)
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
    | Hide overlay`,-1)]]),html:t(()=>[...u[18]||=[o(`<w-flex wrap>
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
</w-overlay>`,-1)]]),js:t(()=>[...u[19]||=[o(`data: () => ({
  showOverlay: false,
  opacity: 0.3,
  persistent: false,
  persistentNoAnimation: false
})
`,-1)]]),default:t(()=>[a(S,{wrap:``},{default:t(()=>[a(v,{class:`my2`,onClick:u[0]||=e=>l.showOverlay=!0},{default:t(()=>[...u[13]||=[o(`Show overlay`,-1)]]),_:1}),a(y,{class:`mx6`,vertical:``}),r(`div`,null,[u[14]||=r(`div`,{class:`title4`},`Options`,-1),a(b,{class:s([`d-flex mr2`,l.persistent?`pr4`:``]),onClick:u[1]||=e=>l.persistent=!l.persistent},{default:t(()=>[r(`div`,d,`:persistent="`+c(l.persistent)+`"`,1)]),_:1},8,[`class`]),a(b,{class:`d-flex mt2`,onClick:u[2]||=e=>l.persistentNoAnimation=!l.persistentNoAnimation,disabled:!l.persistent},{default:t(()=>[r(`div`,f,`:persistent-no-animation="`+c(l.persistentNoAnimation)+`"`,1)]),_:1},8,[`disabled`]),a(x,{class:`mt2 d-block`,modelValue:l.opacity,"onUpdate:modelValue":u[3]||=e=>l.opacity=e,outline:``,type:`number`,label:`Overlay opacity`,"label-position":`left`,step:`0.1`,min:`0`,max:`1`},null,8,[`modelValue`])])]),_:1}),a(w,{modelValue:l.showOverlay,"onUpdate:modelValue":u[5]||=e=>l.showOverlay=e,persistent:l.persistent,"persistent-no-animation":l.persistentNoAnimation,opacity:l.opacity},{default:t(()=>[a(v,{lg:``,onClick:u[4]||=e=>l.showOverlay=!1},{default:t(()=>[a(C,{class:`mr2`},{default:t(()=>[...u[15]||=[o(`wi-cross`,-1)]]),_:1}),u[16]||=o(`Hide overlay`,-1)]),_:1})]),_:1},8,[`modelValue`,`persistent`,`persistent-no-animation`,`opacity`])]),_:1}),a(_,{h2:``},{default:t(()=>[...u[20]||=[o(`Overlay with custom background color`,-1)]]),_:1}),a(T,{"content-class":`w-flex align-center`},{pug:t(()=>[...u[24]||=[o(`w-button(@click="showOverlay = true") Show a blue overlay

w-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")
  w-button(lg @click="showOverlay = false")
    w-icon.mr2 wi-cross
    | Hide overlay`,-1)]]),html:t(()=>[...u[25]||=[o(`<w-button @click="showOverlay = true">
  Show a blue overlay
</w-button>

<w-overlay
  v-model="showOverlay"
  bg-color="rgba(35, 71, 129, 0.4)">
  <w-button lg @click="showOverlay = false">
    <w-icon class="mr2">wi-cross</w-icon>
    Hide overlay
  </w-button>
</w-overlay>`,-1)]]),js:t(()=>[...u[26]||=[o(`data: () => ({
  showOverlay: false
})
`,-1)]]),default:t(()=>[a(v,{onClick:u[6]||=e=>l.showBlueOverlay=!0},{default:t(()=>[...u[21]||=[o(`Show a blue overlay`,-1)]]),_:1}),a(w,{modelValue:l.showBlueOverlay,"onUpdate:modelValue":u[8]||=e=>l.showBlueOverlay=e,"bg-color":`rgba(35, 71, 129, 0.4)`},{default:t(()=>[a(v,{lg:``,onClick:u[7]||=e=>l.showBlueOverlay=!1},{default:t(()=>[a(C,{class:`mr2`},{default:t(()=>[...u[22]||=[o(`wi-cross`,-1)]]),_:1}),u[23]||=o(`Hide overlay`,-1)]),_:1})]),_:1},8,[`modelValue`])]),_:1}),a(_,{h2:``},{default:t(()=>[...u[27]||=[o(`CSS backdrop filter`,-1)]]),_:1}),u[35]||=r(`p`,null,[o(`The backdrop filter is very recently
`),r(`a`,{href:`https://caniuse.com/css-backdrop-filter`,target:`_blank`},`supported on all the major browsers`),o(`
and very nice.`)],-1),a(E,{language:`css`,dark:l.$store.state.darkMode},{default:t(()=>[...u[28]||=[o(`.w-overlay {backdrop-filter: blur(10px);}`,-1)]]),_:1},8,[`dark`]),a(v,{onClick:u[9]||=e=>l.showBlurBackdropOverlay=!0},{default:t(()=>[...u[29]||=[o(`Show a blur backdrop`,-1)]]),_:1}),a(w,{class:`blur-backdrop`,modelValue:l.showBlurBackdropOverlay,"onUpdate:modelValue":u[11]||=e=>l.showBlurBackdropOverlay=e},{default:t(()=>[a(v,{lg:``,onClick:u[10]||=e=>l.showBlurBackdropOverlay=!1},{default:t(()=>[a(C,{class:`mr2`},{default:t(()=>[...u[30]||=[o(`wi-cross`,-1)]]),_:1}),u[31]||=o(`Hide overlay`,-1)]),_:1})]),_:1},8,[`modelValue`])])}var m=l({data:()=>({showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1})},[[`render`,p]]);function h(s,c,l,u,d,f){let p=n(`title-link`),m=n(`component-api`);return e(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:s.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.`,absolute:`Sets the CSS position of the overlay to <code>absolute</code>. By default it is set to <code>fixed</code>.`,opacity:`Sets a custom opacity on the overlay.`,bgColor:`Applies a color to the overlay's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,zIndex:`Applies a z-index (positive or negative integer) to the overlay.`,persistent:`When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.`,persistentNoAnimation:`When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).`},_={default:{description:`The overlay content, if any.`}},v={input:{description:`Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean]":`Represents the open state of the overlay: false on overlay close.`}},"update:modelValue":{description:`Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean]":`Represents the open state of the overlay: false on overlay close.`}},close:{description:`Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).`},closed:{description:`Emitted after the overlay is completely closed (after the closing animation).`},click:{description:`Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.`,params:{"[DOM event object]":`The associated click DOM event.`}}},y=l({data:()=>({propsDescs:g,slots:_}),computed:{props(){return u.props},events(){return u.emits.reduce((e,t)=>(e[t]=v[t]||{})&&e,{})}}},[[`render`,h]]);function b(r,s,c,l,u,d){let f=n(`ui-component-title`),p=n(`examples`),m=n(`api`);return e(),i(`main`,null,[a(f,null,{default:t(()=>[...s[0]||=[o(`w-overlay`,-1)]]),_:1}),a(p),a(m)])}var x=l({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};