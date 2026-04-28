import{G as e,N as t,W as n,bt as r,c as i,d as a,g as o,h as s,k as c}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as l}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{A as u,J as d}from"./index-DH7838aH.js";var f={class:`w-flex mt6 no-grow`},p={class:`w-flex`},m={class:`w-flex wrap`},h={class:`ma2`},g={class:`ma2`};function _(l,u,_,v,y,b){let x=t(`title-link`),S=t(`w-button`),C=t(`w-icon`),w=t(`w-checkbox`),T=t(`w-radios`),E=t(`w-dialog`),D=t(`example`),O=t(`w-radio`);return c(),a(`div`,null,[o(x,{h2:``},{default:n(()=>[...u[35]||=[s(`Global demo`,-1)]]),_:1}),u[95]||=i(`p`,null,`This dialog contains some basic options for the w-dialog.`,-1),o(D,{"content-class":`pt5`},{pug:n(()=>[...u[43]||=[s(`w-button.px4(@click="dialog.show = true") Open dialog

w-dialog(
  v-model="dialog.show"
  :fullscreen="dialog.fullscreen"
  :width="dialog.width"
  :persistent="dialog.persistent"
  :persistent-no-animation="dialog.persistentNoAnimation"
  title-class="primary-light1--bg white")
  template(#title)
    w-icon.mr2 mdi mdi-tune
    | Control panel
  w-checkbox.d-flex.mt2(v-model="dialog.fullscreen" label="Fullscreen")
  w-checkbox.d-flex.mt2(v-model="dialog.persistent" label="Persistent (try to click outside)")
  w-checkbox.d-flex.mt2(
    v-model="dialog.persistentNoAnimation"
    :disabled="!dialog.persistent"
    label="Persistent with no animation")
  .w-flex.mt6.no-grow
    span.mr2 Width:
    w-radios(
      v-model="dialog.width"
      :items="[{ value: 300, label: '300px' }, { value: 500, label: '500px' }]"
      inline)
  .mt4.mb-2.grey-light1
    | The #[code width] prop is called so for simplicity, but it internally translates to
    | a #[code max-width] to fit on small screens.

  template(#actions)
    .spacer
    w-button(@click="dialog.show = false") Close`,-1)]]),html:n(()=>[...u[44]||=[s(`<w-button class="px4" @click="dialog.show = true">
  Open dialog
</w-button>

<w-dialog
  v-model="dialog.show"
  :fullscreen="dialog.fullscreen"
  :width="dialog.width"
  :persistent="dialog.persistent"
  :persistent-no-animation="dialog.persistentNoAnimation"
  title-class="primary-light1--bg white">
  <template #title>
    <w-icon class="mr2">mdi mdi-tune</w-icon>
    Control panel
  </template>

  <w-checkbox
    class="d-flex mt2"
    v-model="dialog.fullscreen"
    label="Fullscreen">
  </w-checkbox>
  <w-checkbox
    class="d-flex mt2"
    v-model="dialog.persistent"
    label="Persistent (try to click outside)">
  </w-checkbox>
  <w-checkbox
    class="d-flex mt2"
    v-model="dialog.persistentNoAnimation"
    :disabled="!dialog.persistent"
    label="Persistent with no animation">
  </w-checkbox>

  <div class="w-flex mt6 no-grow">
    <span class="mr2">Width:</span>
    <w-radios
      v-model="dialog.width"
      :items="[{ value: 300, label: '300px' }, { value: 500, label: '500px' }]"
      inline />
  </div>

  <template #actions>
    <div class="spacer" />
    <w-button @click="dialog.show = false">Close</w-button>
  </template>
</w-dialog>`,-1)]]),js:n(()=>[...u[45]||=[s(`data: () => ({
  dialog: {
    show: false,
    fullscreen: false,
    persistent: false,
    persistentNoAnimation: false,
    width: 300
  }
})
`,-1)]]),default:n(()=>[o(S,{class:`px4`,onClick:u[0]||=e=>l.dialog1.show=!0},{default:n(()=>[...u[36]||=[s(`Open dialog`,-1)]]),_:1}),o(E,{modelValue:l.dialog1.show,"onUpdate:modelValue":u[6]||=e=>l.dialog1.show=e,fullscreen:l.dialog1.fullscreen,width:l.dialog1.width,persistent:l.dialog1.persistent,"persistent-no-animation":l.dialog1.persistentNoAnimation,"title-class":`primary-light1--bg white`},{title:n(()=>[o(C,{class:`mr2`},{default:n(()=>[...u[37]||=[s(`mdi mdi-tune`,-1)]]),_:1}),u[38]||=s(`Control panel`,-1)]),actions:n(()=>[u[41]||=i(`div`,{class:`spacer`},null,-1),o(S,{onClick:u[5]||=e=>l.dialog1.show=!1},{default:n(()=>[...u[40]||=[s(`Close`,-1)]]),_:1})]),default:n(()=>[o(w,{class:`d-flex mt2`,modelValue:l.dialog1.fullscreen,"onUpdate:modelValue":u[1]||=e=>l.dialog1.fullscreen=e,label:`Fullscreen`},null,8,[`modelValue`]),o(w,{class:`d-flex mt2`,modelValue:l.dialog1.persistent,"onUpdate:modelValue":u[2]||=e=>l.dialog1.persistent=e,label:`Persistent (try to click outside)`},null,8,[`modelValue`]),o(w,{class:`d-flex mt2`,modelValue:l.dialog1.persistentNoAnimation,"onUpdate:modelValue":u[3]||=e=>l.dialog1.persistentNoAnimation=e,disabled:!l.dialog1.persistent,label:`Persistent with no animation`},null,8,[`modelValue`,`disabled`]),i(`div`,f,[u[39]||=i(`span`,{class:`mr2`},`Width:`,-1),o(T,{modelValue:l.dialog1.width,"onUpdate:modelValue":u[4]||=e=>l.dialog1.width=e,items:[{value:300,label:`300px`},{value:500,label:`500px`}],inline:``},null,8,[`modelValue`])]),u[42]||=i(`div`,{class:`mt4 mb-2 grey-light1`},[s(`The `),i(`span`,{class:`code grey-light1`},`width`),s(` prop is called so for simplicity, but it internally translates to
a `),i(`span`,{class:`code grey-light1`},`max-width`),s(` to fit on small screens.
`)],-1)]),_:1},8,[`modelValue`,`fullscreen`,`width`,`persistent`,`persistent-no-animation`])]),_:1}),o(x,{h2:``},{default:n(()=>[...u[46]||=[s(`Basic`,-1)]]),_:1}),o(D,{"content-class":`pt5`},{pug:n(()=>[...u[49]||=[s(`w-button.px4(@click="showDialog = true") Open dialog

w-dialog(v-model="showDialog" title="Dialog title").
  Lorem ipsum dolor sit amet consectetur adipisicing elit.#[br]
  Unde eum non necessitatibus quia corporis odio numquam sequi iusto
  voluptatum delectus? Excepturi minus iste, provident non totam itaque
  sed ut labore?#[br]#[br]
  Nihil delectus distinctio eveniet quis qui tempora sit,
  illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
  cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
  sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
  dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
  impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
  beatae ex nihil.#[br]
  Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
  labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
  porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
  perspiciatis repellendus. Sunt!`,-1)]]),html:n(()=>[...u[50]||=[s(`<w-button class="px4" @click="showDialog = true">
  Open dialog
</w-button>

<w-dialog
  v-model="showDialog"
  title="Dialog title">
  Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
  Unde eum non necessitatibus quia corporis odio numquam sequi iusto
  voluptatum delectus? Excepturi minus iste, provident non totam itaque
  sed ut labore?<br /><br />
  Nihil delectus distinctio eveniet quis qui tempora sit,
  illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
  cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
  sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
  dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
  impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
  beatae ex nihil.<br />
  Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
  labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
  porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
  perspiciatis repellendus. Sunt!
<w-dialog>`,-1)]]),js:n(()=>[...u[51]||=[s(`data: () => ({
  showDialog: false
})
`,-1)]]),default:n(()=>[o(S,{class:`px4`,onClick:u[7]||=e=>l.dialog0.show=!0},{default:n(()=>[...u[47]||=[s(`Open dialog`,-1)]]),_:1}),o(E,{modelValue:l.dialog0.show,"onUpdate:modelValue":u[8]||=e=>l.dialog0.show=e,title:`Dialog title`},{default:n(()=>[...u[48]||=[s(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,-1),i(`br`,null,null,-1),s(`
Unde eum non necessitatibus quia corporis odio numquam sequi iusto
voluptatum delectus? Excepturi minus iste, provident non totam itaque
sed ut labore?`,-1),i(`br`,null,null,-1),i(`br`,null,null,-1),s(`
Nihil delectus distinctio eveniet quis qui tempora sit,
illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
beatae ex nihil.`,-1),i(`br`,null,null,-1),s(`
Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
perspiciatis repellendus. Sunt!`,-1)]]),_:1},8,[`modelValue`])]),_:1}),o(x,{h2:``},{default:n(()=>[...u[52]||=[s(`Persistent prompt dialog`,-1)]]),_:1}),o(D,{"content-class":`pt5`},{pug:n(()=>[...u[61]||=[s(`w-button.px4(@click="dialog.show = true") Open dialog

w-dialog(
  v-model="dialog.show"
  title="Terms and conditions"
  persistent
  :width="550")
  | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  | odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
  | Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
  | dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
  | aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
  template(#actions)
    .spacer
    w-button.mr2(@click="dialog.show = false" bg-color="error") I disagree
    w-button(@click="dialog.show = false" bg-color="success") I agree`,-1)]]),html:n(()=>[...u[62]||=[s(`<w-button class="px4" @click="dialog.show = true">
  Open dialog
</w-button>

<w-dialog
  v-model="dialog.show"
  title="Terms and conditions"
  persistent
  :width="550">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.<br /><br />
  Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
  dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
  aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

  <template #actions>
    <div class="spacer" />
    <w-button
      class="mr2"
      @click="dialog.show = false"
      bg-color="error">
      I disagree
    </w-button>
    <w-button
      @click="dialog.show = false"
      bg-color="success">
      I agree
    </w-button>
  </template>
</w-dialog>`,-1)]]),js:n(()=>[...u[63]||=[s(`data: () => ({
  dialog: { show: false }
})
`,-1)]]),default:n(()=>[o(S,{class:`px4`,onClick:u[9]||=e=>l.dialog2.show=!0},{default:n(()=>[...u[53]||=[s(`Open dialog`,-1)]]),_:1}),o(E,{modelValue:l.dialog2.show,"onUpdate:modelValue":u[12]||=e=>l.dialog2.show=e,title:`Terms and conditions`,persistent:``,width:550},{actions:n(()=>[u[56]||=i(`div`,{class:`spacer`},null,-1),o(S,{class:`mr2`,onClick:u[10]||=e=>l.dialog2.show=!1,"bg-color":`error`},{default:n(()=>[...u[54]||=[s(`I disagree`,-1)]]),_:1}),o(S,{onClick:u[11]||=e=>l.dialog2.show=!1,"bg-color":`success`},{default:n(()=>[...u[55]||=[s(`I agree`,-1)]]),_:1})]),default:n(()=>[u[57]||=s(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`,-1),u[58]||=i(`br`,null,null,-1),u[59]||=i(`br`,null,null,-1),u[60]||=s(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`,-1)]),_:1},8,[`modelValue`])]),_:1}),o(x,{h2:``},{default:n(()=>[...u[64]||=[s(`Nesting`,-1)]]),_:1}),u[96]||=i(`p`,null,`It is possible to open a dialog inside a dialog.`,-1),o(D,{"content-class":`pt5`},{pug:n(()=>[...u[71]||=[s(`w-button.px4(@click="dialog1.show = true") Open dialog

w-dialog(v-model="dialog1.show" :width="600" title="Dialog 1" content-class="text-center")
  p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
  w-button.mt6(@click="dialog2.show = true") Open second dialog

  template(#actions)
    .spacer
    w-button(@click="dialog1.show = false" bg-color="error") Close

w-dialog(v-model="dialog2.show" :width="250" title="Dialog 2" content-class="text-center")
  w-button.my6(@click="dialog2.show = false" bg-color="error") Close`,-1)]]),html:n(()=>[...u[72]||=[s(`<w-button
  class="px4"
  @click="dialog1.show = true">
  Open dialog
</w-button>

<w-dialog
  v-model="dialog1.show"
  :width="600"
  title="Dialog 1">
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
  <w-button
    class="mt6"
    @click="dialog2.show = true">
    Open second dialog
  </w-button>

  <template #actions>
    <div class="spacer" />
    <w-button
      @click="dialog1.show = false"
      bg-color="error">
      Close
    </w-button>
  </template>
</w-dialog>

<w-dialog
  v-model="dialog2.show"
  :width="250"
  title="Dialog 2">
  <w-button class="my6"
    @click="dialog2.show = false"
    bg-color="error">
    Close
  </w-button>
</w-dialog>`,-1)]]),js:n(()=>[...u[73]||=[s(`data: () => ({
  dialog1: { show: false },
  dialog2: { show: false }
})
`,-1)]]),default:n(()=>[o(S,{class:`px4`,onClick:u[13]||=e=>l.dialog3.show=!0},{default:n(()=>[...u[65]||=[s(`Open dialog`,-1)]]),_:1}),o(E,{modelValue:l.dialog3.show,"onUpdate:modelValue":u[16]||=e=>l.dialog3.show=e,width:600,title:`Dialog 1`,"content-class":`text-center`},{actions:n(()=>[u[68]||=i(`div`,{class:`spacer`},null,-1),o(S,{onClick:u[15]||=e=>l.dialog3.show=!1,"bg-color":`error`},{default:n(()=>[...u[67]||=[s(`Close`,-1)]]),_:1})]),default:n(()=>[u[69]||=i(`p`,null,`Lorem ipsum, dolor sit amet consectetur adipisicing elit...`,-1),o(S,{class:`mt6`,onClick:u[14]||=e=>l.dialog4.show=!0},{default:n(()=>[...u[66]||=[s(`Open second dialog`,-1)]]),_:1})]),_:1},8,[`modelValue`]),o(E,{modelValue:l.dialog4.show,"onUpdate:modelValue":u[18]||=e=>l.dialog4.show=e,width:250,title:`Dialog 2`,"content-class":`text-center`},{default:n(()=>[o(S,{class:`my6`,onClick:u[17]||=e=>l.dialog4.show=!1,"bg-color":`error`},{default:n(()=>[...u[70]||=[s(`Close`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),_:1}),o(x,{h2:``},{default:n(()=>[...u[74]||=[s(`Transitions`,-1)]]),_:1}),u[97]||=i(`p`,null,[s(`To change the default transition you can use the `),i(`code`,null,`transition`),s(` prop and provide one of
the following transition name.`)],-1),o(D,null,{pug:n(()=>[...u[79]||=[s(`.w-flex
  w-button.px4.mr6(@click="dialog.show = true") Open dialog

  .w-flex.wrap
    div.ma2
      .title3.mb2 Transition names
      w-radios(
        v-model="dialog.transition"
        :items="transitions"
        item-value-key="label"
        @input="dialog.fullscreen = null")
        template(#label="{ item }")
          code `+r(`{{ item.label }}`)+`

    div.ma2
      .title3.mb2 Slide transitions for fullscreen
      w-radios(
        v-model="dialog.transition"
        :items="transitionsForFullscreen"
        item-value-key="label"
        @input="dialog.fullscreen = null")
        template(#label="{ item }")
          code `+r(`{{ item.label }}`)+`
      w-checkbox.mt2(
        :model-value="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
        @input="dialog.fullscreen = $event"
        label="Fullscreen dialog")

w-dialog(
  v-model="dialog.show"
  :width="&#40;dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen&#41; ? 0 : 400"
  :fullscreen="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
  :transition="dialog.transition"
  title="Dialog with custom transition"
  content-class="w-flex align-center justify-center")
  w-button.my6(@click="dialog.show = false" bg-color="error") Close`,-1)]]),html:n(()=>[...u[80]||=[s(`<div class="w-flex">
  <w-button
    class="px4 mr6"
    @click="dialog.show = true">
    Open dialog
  </w-button>

  <div class="w-flex wrap">
    <div class="ma2">
      <div class="title3 mb2">Transition names</div>
      <w-radios
        v-model="dialog.transition"
        :items="transitions"
        item-value-key="label"
        @input="dialog.fullscreen = null">
        <template #label="{ item }">
          <code>`+r(`{{ item.label }}`)+`</code>
        </template>
      </w-radios>
    </div>

    <div class="ma2">
      <div class="title3 mb2">
        Slide transitions for fullscreen
      </div>
      <w-radios
        v-model="dialog.transition"
        :items="transitionsForFullscreen"
        item-value-key="label"
        @input="dialog.fullscreen = null">
        <template #label="{ item }">
          <code>`+r(`{{ item.label }}`)+`</code>
        </template>
      </w-radios>
      <w-checkbox
        class="mt2"
        :model-value="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
        @input="dialog.fullscreen = $event"
        label="Fullscreen dialog">
      </w-checkbox>
    </div>
  </div>
</div>

<w-dialog
  v-model="dialog.show"
  :width="(dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen) ? 0 : 400"
  :fullscreen="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
  :transition="dialog.transition"
  title="Dialog with custom transition"
  content-class="w-flex align-center justify-center">
  <w-button class="my6"
    @click="dialog.show = false"
    bg-color="error">
    Close
  </w-button>
</w-dialog>`,-1)]]),js:n(()=>[...u[81]||=[s(`data: () => ({
  dialog: {
    show: false,
    fullscreen: false,
    transition: 'fade'
  },
  transitions: [
    { label: 'fade' },
    { label: 'slide-fade-up' },
    { label: 'slide-fade-down' },
    { label: 'slide-fade-left' },
    { label: 'slide-fade-right' },
    { label: 'scale' },
    { label: 'scale-fade' },
    { label: 'bounce' },
    { label: 'twist' },
    { label: 'none', value: '' }
  ],
  transitionsForFullscreen: [
    { label: 'slide-up' },
    { label: 'slide-down' },
    { label: 'slide-left' },
    { label: 'slide-right' }
  ]
}),

computed: {
  fullscreenTransition () {
    return this.transitionsForFullscreen.map(item => item.label).includes(this.dialog.transition)
  }
}
`,-1)]]),default:n(()=>[i(`div`,p,[o(S,{class:`px4 mr6`,onClick:u[19]||=e=>l.dialog5.show=!0},{default:n(()=>[...u[75]||=[s(`Open dialog`,-1)]]),_:1}),i(`div`,m,[i(`div`,h,[u[76]||=i(`div`,{class:`title3 mb2`},`Transition names`,-1),o(T,{modelValue:l.dialog5.transition,"onUpdate:modelValue":u[20]||=e=>l.dialog5.transition=e,items:l.transitions,"item-value-key":`label`,onInput:u[21]||=e=>l.dialog5.fullscreen=null},{label:n(({item:e})=>[i(`code`,null,r(e.label),1)]),_:1},8,[`modelValue`,`items`])]),i(`div`,g,[u[77]||=i(`div`,{class:`title3 mb2`},`Slide transitions for fullscreen`,-1),o(T,{modelValue:l.dialog5.transition,"onUpdate:modelValue":u[22]||=e=>l.dialog5.transition=e,items:l.transitionsForFullscreen,"item-value-key":`label`,onInput:u[23]||=e=>l.dialog5.fullscreen=null},{label:n(({item:e})=>[i(`code`,null,r(e.label),1)]),_:1},8,[`modelValue`,`items`]),o(w,{class:`mt2`,"model-value":l.dialog5.fullscreen===null?b.fullscreenTransition:l.dialog5.fullscreen,onInput:u[24]||=e=>l.dialog5.fullscreen=e,label:`Fullscreen dialog`},null,8,[`model-value`])])])]),o(E,{modelValue:l.dialog5.show,"onUpdate:modelValue":u[26]||=e=>l.dialog5.show=e,width:(l.dialog5.fullscreen===null?b.fullscreenTransition:l.dialog5.fullscreen)?0:400,fullscreen:l.dialog5.fullscreen===null?b.fullscreenTransition:l.dialog5.fullscreen,transition:l.dialog5.transition,title:`Dialog with custom transition`,"content-class":`w-flex align-center justify-center`},{default:n(()=>[o(S,{class:`my6`,onClick:u[25]||=e=>l.dialog5.show=!1,"bg-color":`error`},{default:n(()=>[...u[78]||=[s(`Close`,-1)]]),_:1})]),_:1},8,[`modelValue`,`width`,`fullscreen`,`transition`])]),_:1}),o(x,{h2:``},{default:n(()=>[...u[82]||=[s(`Overlay opacity and color`,-1)]]),_:1}),u[98]||=i(`p`,null,[s(`The overlay can be customized via the `),i(`code`,null,`overlay-opacity`),s(` - if you use the default color
- and `),i(`code`,null,`overlay-color`),s(` props.`)],-1),o(D,{"content-class":`pt5`},{pug:n(()=>[...u[92]||=[s(`w-button.px4(@click="dialog.show = true") Open control panel

w-dialog(
  v-model="dialog.show"
  :width="500"
  :overlay-opacity="dialog.overlayChoice === 'opacity' && dialog.overlayOpacity"
  :overlay-color="&#40;dialog.overlayChoice !== 'opacity' && dialog.overlayChoice&#41; || ''")
  template(#title)
    w-icon.mr2 mdi mdi-tune
    | Control panel

  w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="opacity")
    | Overlay opacity
    input.ml2(v-model="dialog.overlayOpacity" type="number" step="0.1" min="0" max="1")
  w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="rgba&#40;35, 71, 129, 0.5&#41;") Custom color: transparent blue
  w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="#e91e63") Custom color: opaque pink
  w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="transparent") Custom color: transparent

  template(#actions)
    .spacer
    w-button(@click="dialog.show = false" bg-color="error") Close`,-1)]]),html:n(()=>[...u[93]||=[s(`<w-button
  class="px4"
  @click="dialog.show = true">
  Open control panel
</w-button>

<w-dialog
  v-model="dialog.show"
  :width="500"
  :overlay-opacity="dialog.overlayChoice === 'opacity' && dialog.overlayOpacity"
  :overlay-color="(dialog.overlayChoice !== 'opacity' && dialog.overlayChoice) || ''">
  <template #title>
    <w-icon class="mr2">mdi mdi-tune</w-icon>
    Control panel
  </template>

  <w-radio
    class="d-flex mt1"
    v-model="dialog.overlayChoice"
    return-value="opacity">
    Overlay opacity
    <input
      class="ml2"
      v-model="dialog.overlayOpacity"
      type="number"
      step="0.1" min="0"
      max="1" />
  </w-radio>
  <w-radio
    class="d-flex mt1"
    v-model="dialog.overlayChoice"
    return-value="rgba(35, 71, 129, 0.5)">
    Custom color: transparent blue
  </w-radio>
  <w-radio
    class="d-flex mt1"
    v-model="dialog.overlayChoice"
    return-value="#e91e63">
    Custom color: opaque pink
  </w-radio>
  <w-radio
    class="d-flex mt1"
    v-model="dialog.overlayChoice"
    return-value="transparent">
    Custom color: transparent
  </w-radio>

  <template #actions>
    <div class="spacer" />
    <w-button
      @click="dialog.show = false"
      bg-color="error">
      Close
    </w-button>
  </template>
</w-dialog>`,-1)]]),js:n(()=>[...u[94]||=[s(`data: () => ({
  dialog: {
    show: false,
    overlayOpacity: 0.3,
    overlayChoice: 'opacity'
  }
})`,-1)]]),default:n(()=>[o(S,{class:`px4`,onClick:u[27]||=e=>l.dialog6.show=!0},{default:n(()=>[...u[83]||=[s(`Open control panel`,-1)]]),_:1}),o(E,{modelValue:l.dialog6.show,"onUpdate:modelValue":u[34]||=e=>l.dialog6.show=e,width:500,"overlay-opacity":l.dialog6.overlayChoice===`opacity`&&l.dialog6.overlayOpacity,"overlay-color":l.dialog6.overlayChoice!==`opacity`&&l.dialog6.overlayChoice||``},{title:n(()=>[o(C,{class:`mr2`},{default:n(()=>[...u[84]||=[s(`mdi mdi-tune`,-1)]]),_:1}),u[85]||=s(`Control panel`,-1)]),actions:n(()=>[u[91]||=i(`div`,{class:`spacer`},null,-1),o(S,{onClick:u[33]||=e=>l.dialog6.show=!1,"bg-color":`error`},{default:n(()=>[...u[90]||=[s(`Close`,-1)]]),_:1})]),default:n(()=>[o(O,{class:`d-flex mt1`,modelValue:l.dialog6.overlayChoice,"onUpdate:modelValue":u[29]||=e=>l.dialog6.overlayChoice=e,"return-value":`opacity`},{default:n(()=>[u[86]||=s(`Overlay opacity`,-1),e(i(`input`,{class:`ml2`,"onUpdate:modelValue":u[28]||=e=>l.dialog6.overlayOpacity=e,type:`number`,step:`0.1`,min:`0`,max:`1`},null,512),[[d,l.dialog6.overlayOpacity]])]),_:1},8,[`modelValue`]),o(O,{class:`d-flex mt1`,modelValue:l.dialog6.overlayChoice,"onUpdate:modelValue":u[30]||=e=>l.dialog6.overlayChoice=e,"return-value":`rgba(35, 71, 129, 0.5)`},{default:n(()=>[...u[87]||=[s(`Custom color: transparent blue`,-1)]]),_:1},8,[`modelValue`]),o(O,{class:`d-flex mt1`,modelValue:l.dialog6.overlayChoice,"onUpdate:modelValue":u[31]||=e=>l.dialog6.overlayChoice=e,"return-value":`#e91e63`},{default:n(()=>[...u[88]||=[s(`Custom color: opaque pink`,-1)]]),_:1},8,[`modelValue`]),o(O,{class:`d-flex mt1`,modelValue:l.dialog6.overlayChoice,"onUpdate:modelValue":u[32]||=e=>l.dialog6.overlayChoice=e,"return-value":`transparent`},{default:n(()=>[...u[89]||=[s(`Custom color: transparent`,-1)]]),_:1},8,[`modelValue`])]),_:1},8,[`modelValue`,`overlay-opacity`,`overlay-color`])]),_:1})])}var v=l({data:()=>({dialog0:{show:!1},dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,width:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:`fade`},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:`opacity`},transitions:[{label:`fade`},{label:`slide-fade-up`},{label:`slide-fade-down`},{label:`slide-fade-left`},{label:`slide-fade-right`},{label:`scale`},{label:`scale-fade`},{label:`bounce`},{label:`twist`},{label:`none`,value:``}],transitionsForFullscreen:[{label:`slide-up`},{label:`slide-down`},{label:`slide-left`},{label:`slide-right`}]}),computed:{fullscreenTransition(){return this.transitionsForFullscreen.map(e=>e.label).includes(this.dialog5.transition)}}},[[`render`,_]]);function y(e,r,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return c(),a(`div`,null,[r[1]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:n(()=>[...r[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:e.slots,title:`Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`])])}var b={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the dialog. Any truthy value will show the dialog whereas any falsy value will hide it.`,width:`Sets a max-width on the dialog.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,fullscreen:`Sets the dialog to full-screen.`,persistent:`When set to true, clicking outside of the dialog or pressing the escape key will not close the dialog.<br>A bounce animation will give the user a feedback that the dialog needs attention and cannot be closed.`,persistentNoAnimation:`When this and the <code>persistent</code> props are set to true, clicking outside of the dialog or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).`,tile:`Removes the default border-radius and sets sharp edges on the dialog.`,title:`Provide a dialog title.`,transition:`Applies a particular transition to this component when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.<br>Test all the transitions in the <a href="#transitions">Transitions</a> example.`,titleClass:`Applies a custom CSS class to the dialog's title.`,contentClass:`Applies a custom CSS class to the dialog's content.`,dialogClass:`Applies a custom CSS class to the dialog container.`,overlayColor:`Provide a custom background color for the dialog background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,color:`Applies a text color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a background color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,overlayOpacity:`Provide a custom opacity for the dialog background overlay.`},x={title:{description:`The dialog uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.`},default:{description:`The dialog content.`},actions:{description:`The dialog uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.`}},S={input:`Emitted on dialog close.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on dialog close.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on dialog close.`,closed:`Emitted after the dialog is completely closed (after the closing animation).`},C=l({data:()=>({propsDescs:b,slots:x}),computed:{props(){return u.props},events(){return u.emits.reduce((e,t)=>(e[t]={description:S[t]||``},e),{})}}},[[`render`,y]]);function w(e,r,i,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return c(),a(`main`,null,[o(f,null,{default:n(()=>[...r[0]||=[s(`w-dialog`,-1)]]),_:1}),o(p),o(m)])}var T=l({components:{Examples:v,Api:C}},[[`render`,w]]);export{T as default};