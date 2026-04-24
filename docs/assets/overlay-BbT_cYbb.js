import{N as e,U as t,c as n,d as r,g as i,gt as a,h as o,k as s,yt as c}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as l}from"./_plugin-vue_export-helper-S3RvzygF.js";import{b as u}from"./index-BJr8b_n6.js";var d={class:`code inherit`},f={class:`code inherit`};function p(l,u,p,m,h,g){let _=e(`title-link`),v=e(`w-button`),y=e(`w-divider`),b=e(`w-switch`),x=e(`w-input`),S=e(`w-flex`),C=e(`w-icon`),w=e(`w-overlay`),T=e(`example`),E=e(`ssh-pre`);return s(),r(`div`,null,[u[32]||=n(`p`,null,[o(`By default the overlay has a `),n(`span`,{class:`code`},`0.3`),o(` opacity with a black color and a z-index
of `),n(`span`,{class:`code`},`500`),o(`.`),n(`br`),o(`
It is very easy to overrides these defaults via CSS, but you can also pass them as
parameters to the `),n(`span`,{class:`code`},`w-overlay`),o(`.
`)],-1),i(_,{h2:``},{default:t(()=>[...u[12]||=[o(`Overlay with custom opacity and control on `,-1),n(`span`,{class:`code`},`persistent`,-1)]]),_:1}),u[33]||=n(`p`,null,`When the overlay is persistent, it will not close on click and on escape key.`,-1),u[34]||=n(`p`,null,`When persistent is set to false and by default, the escape key will also close the overlay.`,-1),i(T,null,{pug:t(()=>[...u[17]||=[o(`w-flex(wrap)
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
`,-1)]]),default:t(()=>[i(S,{wrap:``},{default:t(()=>[i(v,{class:`my2`,onClick:u[0]||=e=>l.showOverlay=!0},{default:t(()=>[...u[13]||=[o(`Show overlay`,-1)]]),_:1}),i(y,{class:`mx6`,vertical:``}),n(`div`,null,[u[14]||=n(`div`,{class:`title4`},`Options`,-1),i(b,{class:a([`d-flex mr2`,l.persistent?`pr4`:``]),onClick:u[1]||=e=>l.persistent=!l.persistent},{default:t(()=>[n(`div`,d,`:persistent="`+c(l.persistent)+`"`,1)]),_:1},8,[`class`]),i(b,{class:`d-flex mt2`,onClick:u[2]||=e=>l.persistentNoAnimation=!l.persistentNoAnimation,disabled:!l.persistent},{default:t(()=>[n(`div`,f,`:persistent-no-animation="`+c(l.persistentNoAnimation)+`"`,1)]),_:1},8,[`disabled`]),i(x,{class:`mt2 d-block`,modelValue:l.opacity,"onUpdate:modelValue":u[3]||=e=>l.opacity=e,outline:``,type:`number`,label:`Overlay opacity`,"label-position":`left`,step:`0.1`,min:`0`,max:`1`},null,8,[`modelValue`])])]),_:1}),i(w,{modelValue:l.showOverlay,"onUpdate:modelValue":u[5]||=e=>l.showOverlay=e,persistent:l.persistent,"persistent-no-animation":l.persistentNoAnimation,opacity:l.opacity},{default:t(()=>[i(v,{lg:``,onClick:u[4]||=e=>l.showOverlay=!1},{default:t(()=>[i(C,{class:`mr2`},{default:t(()=>[...u[15]||=[o(`wi-cross`,-1)]]),_:1}),u[16]||=o(`Hide overlay`,-1)]),_:1})]),_:1},8,[`modelValue`,`persistent`,`persistent-no-animation`,`opacity`])]),_:1}),i(_,{h2:``},{default:t(()=>[...u[20]||=[o(`Overlay with custom background color`,-1)]]),_:1}),i(T,{"content-class":`w-flex align-center`},{pug:t(()=>[...u[24]||=[o(`w-button(@click="showOverlay = true") Show a blue overlay

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
`,-1)]]),default:t(()=>[i(v,{onClick:u[6]||=e=>l.showBlueOverlay=!0},{default:t(()=>[...u[21]||=[o(`Show a blue overlay`,-1)]]),_:1}),i(w,{modelValue:l.showBlueOverlay,"onUpdate:modelValue":u[8]||=e=>l.showBlueOverlay=e,"bg-color":`rgba(35, 71, 129, 0.4)`},{default:t(()=>[i(v,{lg:``,onClick:u[7]||=e=>l.showBlueOverlay=!1},{default:t(()=>[i(C,{class:`mr2`},{default:t(()=>[...u[22]||=[o(`wi-cross`,-1)]]),_:1}),u[23]||=o(`Hide overlay`,-1)]),_:1})]),_:1},8,[`modelValue`])]),_:1}),i(_,{h2:``},{default:t(()=>[...u[27]||=[o(`CSS backdrop filter`,-1)]]),_:1}),u[35]||=n(`p`,null,[o(`The backdrop filter is very recently
`),n(`a`,{href:`https://caniuse.com/css-backdrop-filter`,target:`_blank`},`supported on all the major browsers`),o(`
and very nice.`)],-1),i(E,{language:`css`,dark:l.$store.state.darkMode},{default:t(()=>[...u[28]||=[o(`.w-overlay {backdrop-filter: blur(10px);}`,-1)]]),_:1},8,[`dark`]),i(v,{onClick:u[9]||=e=>l.showBlurBackdropOverlay=!0},{default:t(()=>[...u[29]||=[o(`Show a blur backdrop`,-1)]]),_:1}),i(w,{class:`blur-backdrop`,modelValue:l.showBlurBackdropOverlay,"onUpdate:modelValue":u[11]||=e=>l.showBlurBackdropOverlay=e},{default:t(()=>[i(v,{lg:``,onClick:u[10]||=e=>l.showBlurBackdropOverlay=!1},{default:t(()=>[i(C,{class:`mr2`},{default:t(()=>[...u[30]||=[o(`wi-cross`,-1)]]),_:1}),u[31]||=o(`Hide overlay`,-1)]),_:1})]),_:1},8,[`modelValue`])])}var m=l({data:()=>({showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1})},[[`render`,p]]);function h(a,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:a.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:a.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.`,absolute:`Sets the CSS position of the overlay to <code>absolute</code>. By default it is set to <code>fixed</code>.`,opacity:`Sets a custom opacity on the overlay.`,bgColor:`Applies a color to the overlay's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,zIndex:`Applies a z-index (positive or negative integer) to the overlay.`,persistent:`When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.`,persistentNoAnimation:`When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).`},_={default:{description:`The overlay content, if any.`}},v={input:{description:`Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.`,params:{"[Boolean]":`Represents the open state of the overlay: false on overlay close.`}},"update:modelValue":{description:`Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.`,params:{"[Boolean]":`Represents the open state of the overlay: false on overlay close.`}},close:{description:`Emitted on overlay close (a click on overlay doesn't trigger this event if <code>persistent</code>).`},closed:{description:`Emitted after the overlay is completely closed (after the closing animation).`},click:{description:`Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.`,params:{"[DOM event object]":`The associated click DOM event.`}}},y=l({data:()=>({propsDescs:g,slots:_}),computed:{props(){return u.props},events(){return u.emits.reduce((e,t)=>(e[t]=v[t]||{})&&e,{})}}},[[`render`,h]]);function b(n,a,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),r(`main`,null,[i(f,null,{default:t(()=>[...a[0]||=[o(`w-overlay`,-1)]]),_:1}),i(p),i(m)])}var x=l({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};