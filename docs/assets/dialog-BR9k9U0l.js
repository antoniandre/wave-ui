import{H as e,N as t,U as n,c as r,d as i,g as a,h as o,k as s,vt as c}from"./runtime-core.esm-bundler-DPe36P4s.js";import{o as l}from"./runtime-dom.esm-bundler-Dtklx5Fk.js";import{t as u}from"./_plugin-vue_export-helper-S3RvzygF.js";import{A as d}from"./index-D1jKshrg.js";var f={class:`w-flex mt6 no-grow`},p={class:`w-flex`},m={class:`w-flex wrap`},h={class:`ma2`},g={class:`ma2`};function _(u,d,_,v,y,b){let x=t(`title-link`),S=t(`w-button`),C=t(`w-icon`),w=t(`w-checkbox`),T=t(`w-radios`),E=t(`w-dialog`),D=t(`example`),O=t(`w-radio`);return s(),i(`div`,null,[a(x,{h2:``},{default:e(()=>[...d[35]||=[o(`Global demo`,-1)]]),_:1}),d[95]||=r(`p`,null,`This dialog contains some basic options for the w-dialog.`,-1),a(D,{"content-class":`pt5`},{pug:e(()=>[...d[43]||=[o(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false") Close`,-1)]]),html:e(()=>[...d[44]||=[o(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`,-1)]]),js:e(()=>[...d[45]||=[o(`data: () => ({
  dialog: {
    show: false,
    fullscreen: false,
    persistent: false,
    persistentNoAnimation: false,
    width: 300
  }
})
`,-1)]]),default:e(()=>[a(S,{class:`px4`,onClick:d[0]||=e=>u.dialog1.show=!0},{default:e(()=>[...d[36]||=[o(`Open dialog`,-1)]]),_:1}),a(E,{modelValue:u.dialog1.show,"onUpdate:modelValue":d[6]||=e=>u.dialog1.show=e,fullscreen:u.dialog1.fullscreen,width:u.dialog1.width,persistent:u.dialog1.persistent,"persistent-no-animation":u.dialog1.persistentNoAnimation,"title-class":`primary-light1--bg white`},{title:e(()=>[a(C,{class:`mr2`},{default:e(()=>[...d[37]||=[o(`mdi mdi-tune`,-1)]]),_:1}),d[38]||=o(`Control panel`,-1)]),actions:e(()=>[d[41]||=r(`div`,{class:`spacer`},null,-1),a(S,{onClick:d[5]||=e=>u.dialog1.show=!1},{default:e(()=>[...d[40]||=[o(`Close`,-1)]]),_:1})]),default:e(()=>[a(w,{class:`d-flex mt2`,modelValue:u.dialog1.fullscreen,"onUpdate:modelValue":d[1]||=e=>u.dialog1.fullscreen=e,label:`Fullscreen`},null,8,[`modelValue`]),a(w,{class:`d-flex mt2`,modelValue:u.dialog1.persistent,"onUpdate:modelValue":d[2]||=e=>u.dialog1.persistent=e,label:`Persistent (try to click outside)`},null,8,[`modelValue`]),a(w,{class:`d-flex mt2`,modelValue:u.dialog1.persistentNoAnimation,"onUpdate:modelValue":d[3]||=e=>u.dialog1.persistentNoAnimation=e,disabled:!u.dialog1.persistent,label:`Persistent with no animation`},null,8,[`modelValue`,`disabled`]),r(`div`,f,[d[39]||=r(`span`,{class:`mr2`},`Width:`,-1),a(T,{modelValue:u.dialog1.width,"onUpdate:modelValue":d[4]||=e=>u.dialog1.width=e,items:[{value:300,label:`300px`},{value:500,label:`500px`}],inline:``},null,8,[`modelValue`])]),d[42]||=r(`div`,{class:`mt4 mb-2 grey-light1`},[o(`The `),r(`span`,{class:`code grey-light1`},`width`),o(` prop is called so for simplicity, but it internally translates to
a `),r(`span`,{class:`code grey-light1`},`max-width`),o(` to fit on small screens.
`)],-1)]),_:1},8,[`modelValue`,`fullscreen`,`width`,`persistent`,`persistent-no-animation`])]),_:1}),a(x,{h2:``},{default:e(()=>[...d[46]||=[o(`Basic`,-1)]]),_:1}),a(D,{"content-class":`pt5`},{pug:e(()=>[...d[49]||=[o(`w-button.px4(@click="showDialog = true") Open dialog

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
  perspiciatis repellendus. Sunt!`,-1)]]),html:e(()=>[...d[50]||=[o(`<w-button class="px4" @click="showDialog = true">
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
<w-dialog>`,-1)]]),js:e(()=>[...d[51]||=[o(`data: () => ({
  showDialog: false
})
`,-1)]]),default:e(()=>[a(S,{class:`px4`,onClick:d[7]||=e=>u.dialog0.show=!0},{default:e(()=>[...d[47]||=[o(`Open dialog`,-1)]]),_:1}),a(E,{modelValue:u.dialog0.show,"onUpdate:modelValue":d[8]||=e=>u.dialog0.show=e,title:`Dialog title`},{default:e(()=>[...d[48]||=[o(`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,-1),r(`br`,null,null,-1),o(`
Unde eum non necessitatibus quia corporis odio numquam sequi iusto
voluptatum delectus? Excepturi minus iste, provident non totam itaque
sed ut labore?`,-1),r(`br`,null,null,-1),r(`br`,null,null,-1),o(`
Nihil delectus distinctio eveniet quis qui tempora sit,
illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
beatae ex nihil.`,-1),r(`br`,null,null,-1),o(`
Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
perspiciatis repellendus. Sunt!`,-1)]]),_:1},8,[`modelValue`])]),_:1}),a(x,{h2:``},{default:e(()=>[...d[52]||=[o(`Persistent prompt dialog`,-1)]]),_:1}),a(D,{"content-class":`pt5`},{pug:e(()=>[...d[61]||=[o(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false" bg-color="success") I agree`,-1)]]),html:e(()=>[...d[62]||=[o(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`,-1)]]),js:e(()=>[...d[63]||=[o(`data: () => ({
  dialog: { show: false }
})
`,-1)]]),default:e(()=>[a(S,{class:`px4`,onClick:d[9]||=e=>u.dialog2.show=!0},{default:e(()=>[...d[53]||=[o(`Open dialog`,-1)]]),_:1}),a(E,{modelValue:u.dialog2.show,"onUpdate:modelValue":d[12]||=e=>u.dialog2.show=e,title:`Terms and conditions`,persistent:``,width:550},{actions:e(()=>[d[56]||=r(`div`,{class:`spacer`},null,-1),a(S,{class:`mr2`,onClick:d[10]||=e=>u.dialog2.show=!1,"bg-color":`error`},{default:e(()=>[...d[54]||=[o(`I disagree`,-1)]]),_:1}),a(S,{onClick:d[11]||=e=>u.dialog2.show=!1,"bg-color":`success`},{default:e(()=>[...d[55]||=[o(`I agree`,-1)]]),_:1})]),default:e(()=>[d[57]||=o(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`,-1),d[58]||=r(`br`,null,null,-1),d[59]||=r(`br`,null,null,-1),d[60]||=o(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`,-1)]),_:1},8,[`modelValue`])]),_:1}),a(x,{h2:``},{default:e(()=>[...d[64]||=[o(`Nesting`,-1)]]),_:1}),d[96]||=r(`p`,null,`It is possible to open a dialog inside a dialog.`,-1),a(D,{"content-class":`pt5`},{pug:e(()=>[...d[71]||=[o(`w-button.px4(@click="dialog1.show = true") Open dialog

w-dialog(v-model="dialog1.show" :width="600" title="Dialog 1" content-class="text-center")
  p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
  w-button.mt6(@click="dialog2.show = true") Open second dialog

  template(#actions)
    .spacer
    w-button(@click="dialog1.show = false" bg-color="error") Close

w-dialog(v-model="dialog2.show" :width="250" title="Dialog 2" content-class="text-center")
  w-button.my6(@click="dialog2.show = false" bg-color="error") Close`,-1)]]),html:e(()=>[...d[72]||=[o(`<w-button
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
</w-dialog>`,-1)]]),js:e(()=>[...d[73]||=[o(`data: () => ({
  dialog1: { show: false },
  dialog2: { show: false }
})
`,-1)]]),default:e(()=>[a(S,{class:`px4`,onClick:d[13]||=e=>u.dialog3.show=!0},{default:e(()=>[...d[65]||=[o(`Open dialog`,-1)]]),_:1}),a(E,{modelValue:u.dialog3.show,"onUpdate:modelValue":d[16]||=e=>u.dialog3.show=e,width:600,title:`Dialog 1`,"content-class":`text-center`},{actions:e(()=>[d[68]||=r(`div`,{class:`spacer`},null,-1),a(S,{onClick:d[15]||=e=>u.dialog3.show=!1,"bg-color":`error`},{default:e(()=>[...d[67]||=[o(`Close`,-1)]]),_:1})]),default:e(()=>[d[69]||=r(`p`,null,`Lorem ipsum, dolor sit amet consectetur adipisicing elit...`,-1),a(S,{class:`mt6`,onClick:d[14]||=e=>u.dialog4.show=!0},{default:e(()=>[...d[66]||=[o(`Open second dialog`,-1)]]),_:1})]),_:1},8,[`modelValue`]),a(E,{modelValue:u.dialog4.show,"onUpdate:modelValue":d[18]||=e=>u.dialog4.show=e,width:250,title:`Dialog 2`,"content-class":`text-center`},{default:e(()=>[a(S,{class:`my6`,onClick:d[17]||=e=>u.dialog4.show=!1,"bg-color":`error`},{default:e(()=>[...d[70]||=[o(`Close`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),_:1}),a(x,{h2:``},{default:e(()=>[...d[74]||=[o(`Transitions`,-1)]]),_:1}),d[97]||=r(`p`,null,[o(`To change the default transition you can use the `),r(`code`,null,`transition`),o(` prop and provide one of
the following transition name.`)],-1),a(D,null,{pug:e(()=>[...d[79]||=[o(`.w-flex
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
          code `+c(`{{ item.label }}`)+`

    div.ma2
      .title3.mb2 Slide transitions for fullscreen
      w-radios(
        v-model="dialog.transition"
        :items="transitionsForFullscreen"
        item-value-key="label"
        @input="dialog.fullscreen = null")
        template(#label="{ item }")
          code `+c(`{{ item.label }}`)+`
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
  w-button.my6(@click="dialog.show = false" bg-color="error") Close`,-1)]]),html:e(()=>[...d[80]||=[o(`<div class="w-flex">
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
          <code>`+c(`{{ item.label }}`)+`</code>
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
          <code>`+c(`{{ item.label }}`)+`</code>
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
</w-dialog>`,-1)]]),js:e(()=>[...d[81]||=[o(`data: () => ({
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
`,-1)]]),default:e(()=>[r(`div`,p,[a(S,{class:`px4 mr6`,onClick:d[19]||=e=>u.dialog5.show=!0},{default:e(()=>[...d[75]||=[o(`Open dialog`,-1)]]),_:1}),r(`div`,m,[r(`div`,h,[d[76]||=r(`div`,{class:`title3 mb2`},`Transition names`,-1),a(T,{modelValue:u.dialog5.transition,"onUpdate:modelValue":d[20]||=e=>u.dialog5.transition=e,items:u.transitions,"item-value-key":`label`,onInput:d[21]||=e=>u.dialog5.fullscreen=null},{label:e(({item:e})=>[r(`code`,null,c(e.label),1)]),_:1},8,[`modelValue`,`items`])]),r(`div`,g,[d[77]||=r(`div`,{class:`title3 mb2`},`Slide transitions for fullscreen`,-1),a(T,{modelValue:u.dialog5.transition,"onUpdate:modelValue":d[22]||=e=>u.dialog5.transition=e,items:u.transitionsForFullscreen,"item-value-key":`label`,onInput:d[23]||=e=>u.dialog5.fullscreen=null},{label:e(({item:e})=>[r(`code`,null,c(e.label),1)]),_:1},8,[`modelValue`,`items`]),a(w,{class:`mt2`,"model-value":u.dialog5.fullscreen===null?b.fullscreenTransition:u.dialog5.fullscreen,onInput:d[24]||=e=>u.dialog5.fullscreen=e,label:`Fullscreen dialog`},null,8,[`model-value`])])])]),a(E,{modelValue:u.dialog5.show,"onUpdate:modelValue":d[26]||=e=>u.dialog5.show=e,width:(u.dialog5.fullscreen===null?b.fullscreenTransition:u.dialog5.fullscreen)?0:400,fullscreen:u.dialog5.fullscreen===null?b.fullscreenTransition:u.dialog5.fullscreen,transition:u.dialog5.transition,title:`Dialog with custom transition`,"content-class":`w-flex align-center justify-center`},{default:e(()=>[a(S,{class:`my6`,onClick:d[25]||=e=>u.dialog5.show=!1,"bg-color":`error`},{default:e(()=>[...d[78]||=[o(`Close`,-1)]]),_:1})]),_:1},8,[`modelValue`,`width`,`fullscreen`,`transition`])]),_:1}),a(x,{h2:``},{default:e(()=>[...d[82]||=[o(`Overlay opacity and color`,-1)]]),_:1}),d[98]||=r(`p`,null,[o(`The overlay can be customized via the `),r(`code`,null,`overlay-opacity`),o(` - if you use the default color
- and `),r(`code`,null,`overlay-color`),o(` props.`)],-1),a(D,{"content-class":`pt5`},{pug:e(()=>[...d[92]||=[o(`w-button.px4(@click="dialog.show = true") Open control panel

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
    w-button(@click="dialog.show = false" bg-color="error") Close`,-1)]]),html:e(()=>[...d[93]||=[o(`<w-button
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
</w-dialog>`,-1)]]),js:e(()=>[...d[94]||=[o(`data: () => ({
  dialog: {
    show: false,
    overlayOpacity: 0.3,
    overlayChoice: 'opacity'
  }
})`,-1)]]),default:e(()=>[a(S,{class:`px4`,onClick:d[27]||=e=>u.dialog6.show=!0},{default:e(()=>[...d[83]||=[o(`Open control panel`,-1)]]),_:1}),a(E,{modelValue:u.dialog6.show,"onUpdate:modelValue":d[34]||=e=>u.dialog6.show=e,width:500,"overlay-opacity":u.dialog6.overlayChoice===`opacity`&&u.dialog6.overlayOpacity,"overlay-color":u.dialog6.overlayChoice!==`opacity`&&u.dialog6.overlayChoice||``},{title:e(()=>[a(C,{class:`mr2`},{default:e(()=>[...d[84]||=[o(`mdi mdi-tune`,-1)]]),_:1}),d[85]||=o(`Control panel`,-1)]),actions:e(()=>[d[91]||=r(`div`,{class:`spacer`},null,-1),a(S,{onClick:d[33]||=e=>u.dialog6.show=!1,"bg-color":`error`},{default:e(()=>[...d[90]||=[o(`Close`,-1)]]),_:1})]),default:e(()=>[a(O,{class:`d-flex mt1`,modelValue:u.dialog6.overlayChoice,"onUpdate:modelValue":d[29]||=e=>u.dialog6.overlayChoice=e,"return-value":`opacity`},{default:e(()=>[d[86]||=o(`Overlay opacity`,-1),n(r(`input`,{class:`ml2`,"onUpdate:modelValue":d[28]||=e=>u.dialog6.overlayOpacity=e,type:`number`,step:`0.1`,min:`0`,max:`1`},null,512),[[l,u.dialog6.overlayOpacity]])]),_:1},8,[`modelValue`]),a(O,{class:`d-flex mt1`,modelValue:u.dialog6.overlayChoice,"onUpdate:modelValue":d[30]||=e=>u.dialog6.overlayChoice=e,"return-value":`rgba(35, 71, 129, 0.5)`},{default:e(()=>[...d[87]||=[o(`Custom color: transparent blue`,-1)]]),_:1},8,[`modelValue`]),a(O,{class:`d-flex mt1`,modelValue:u.dialog6.overlayChoice,"onUpdate:modelValue":d[31]||=e=>u.dialog6.overlayChoice=e,"return-value":`#e91e63`},{default:e(()=>[...d[88]||=[o(`Custom color: opaque pink`,-1)]]),_:1},8,[`modelValue`]),a(O,{class:`d-flex mt1`,modelValue:u.dialog6.overlayChoice,"onUpdate:modelValue":d[32]||=e=>u.dialog6.overlayChoice=e,"return-value":`transparent`},{default:e(()=>[...d[89]||=[o(`Custom color: transparent`,-1)]]),_:1},8,[`modelValue`])]),_:1},8,[`modelValue`,`overlay-opacity`,`overlay-color`])]),_:1})])}var v=u({data:()=>({dialog0:{show:!1},dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,width:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:`fade`},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:`opacity`},transitions:[{label:`fade`},{label:`slide-fade-up`},{label:`slide-fade-down`},{label:`slide-fade-left`},{label:`slide-fade-right`},{label:`scale`},{label:`scale-fade`},{label:`bounce`},{label:`twist`},{label:`none`,value:``}],transitionsForFullscreen:[{label:`slide-up`},{label:`slide-down`},{label:`slide-left`},{label:`slide-right`}]}),computed:{fullscreenTransition(){return this.transitionsForFullscreen.map(e=>e.label).includes(this.dialog5.transition)}}},[[`render`,_]]);function y(n,c,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:e(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var b={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the dialog. Any truthy value will show the dialog whereas any falsy value will hide it.`,width:`Sets a max-width on the dialog.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,fullscreen:`Sets the dialog to full-screen.`,persistent:`When set to true, clicking outside of the dialog or pressing the escape key will not close the dialog.<br>A bounce animation will give the user a feedback that the dialog needs attention and cannot be closed.`,persistentNoAnimation:`When this and the <code>persistent</code> props are set to true, clicking outside of the dialog or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).`,tile:`Removes the default border-radius and sets sharp edges on the dialog.`,title:`Provide a dialog title.`,transition:`Applies a particular transition to this component when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.<br>Test all the transitions in the <a href="#transitions">Transitions</a> example.`,titleClass:`Applies a custom CSS class to the dialog's title.`,contentClass:`Applies a custom CSS class to the dialog's content.`,dialogClass:`Applies a custom CSS class to the dialog container.`,overlayColor:`Provide a custom background color for the dialog background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,color:`Applies a text color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a background color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,overlayOpacity:`Provide a custom opacity for the dialog background overlay.`},x={title:{description:`The dialog uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.`},default:{description:`The dialog content.`},actions:{description:`The dialog uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.`}},S={input:`Emitted on dialog close.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on dialog close.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on dialog close.`,closed:`Emitted after the dialog is completely closed (after the closing animation).`},C=u({data:()=>({propsDescs:b,slots:x}),computed:{props(){return d.props},events(){return d.emits.reduce((e,t)=>(e[t]={description:S[t]||``},e),{})}}},[[`render`,y]]);function w(n,r,c,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return s(),i(`main`,null,[a(f,null,{default:e(()=>[...r[0]||=[o(`w-dialog`,-1)]]),_:1}),a(p),a(m)])}var T=u({components:{Examples:v,Api:C}},[[`render`,w]]);export{T as default};