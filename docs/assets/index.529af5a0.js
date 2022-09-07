import{r as d,o as b,f as v,a as t,w as l,b as s,e as n,h as p,k as V,J as x,_ as y,K as C}from"./index.6a386ae5.js";const O=n("Global demo"),T=s("p",null,"This dialog contains some basic options for the w-dialog.",-1),$=n("Open dialog"),A=n("mdi mdi-tune"),D=n("Control panel"),F={class:"w-flex mt6 no-grow"},U=s("span",{class:"mr2"},"Width:",-1),S=s("div",{class:"mt4 mb-2 grey-light1"},[n("The "),s("span",{class:"code grey-light1"},"width"),n(` prop is called so for simplicity, but it internally translates to
a `),s("span",{class:"code grey-light1"},"max-width"),n(` to fit on small screens.
`)],-1),I=s("div",{class:"spacer"},null,-1),N=n("Close"),P=n(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false") Close`),E=n(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`),L=n(`data: () => ({
  dialog: {
    show: false,
    fullscreen: false,
    persistent: false,
    persistentNoAnimation: false,
    width: 300
  }
})
`),j=n("Basic"),W=n("Open dialog"),B=n("Lorem ipsum dolor sit amet consectetur adipisicing elit."),M=s("br",null,null,-1),R=n(`
Unde eum non necessitatibus quia corporis odio numquam sequi iusto
voluptatum delectus? Excepturi minus iste, provident non totam itaque
sed ut labore?`),z=s("br",null,null,-1),G=s("br",null,null,-1),J=n(`
Nihil delectus distinctio eveniet quis qui tempora sit,
illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
beatae ex nihil.`),K=s("br",null,null,-1),Y=n(`
Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
perspiciatis repellendus. Sunt!`),H=n(`w-button.px4(@click="showDialog = true") Open dialog

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
  perspiciatis repellendus. Sunt!`),Q=n(`<w-button class="px4" @click="showDialog = true">
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
<w-dialog>`),X=n(`data: () => ({
  showDialog: false
})
`),Z=n("Persistent prompt dialog"),ee=n("Open dialog"),oe=n(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),le=s("br",null,null,-1),ne=s("br",null,null,-1),ie=n(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`),te=s("div",{class:"spacer"},null,-1),se=n("I disagree"),ae=n("I agree"),de=n(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false" bg-color="success") I agree`),re=n(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`),ue=n(`data: () => ({
  dialog: { show: false }
})
`),ce=n("Nesting"),me=s("p",null,"It is possible to open a dialog inside a dialog.",-1),pe=n("Open dialog"),ge=s("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit...",-1),he=n("Open second dialog"),we=s("div",{class:"spacer"},null,-1),fe=n("Close"),be=n("Close"),ve=n(`w-button.px4(@click="dialog1.show = true") Open dialog

w-dialog(v-model="dialog1.show" :width="600" title="Dialog 1" content-class="text-center")
  p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
  w-button.mt6(@click="dialog2.show = true") Open second dialog

  template(#actions)
    .spacer
    w-button(@click="dialog1.show = false" bg-color="error") Close

w-dialog(v-model="dialog2.show" :width="250" title="Dialog 2" content-class="text-center")
  w-button.my6(@click="dialog2.show = false" bg-color="error") Close`),ye=n(`<w-button
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
</w-dialog>`),_e=n(`data: () => ({
  dialog1: { show: false },
  dialog2: { show: false }
})
`),qe=n("Transitions"),ke=s("p",null,[n("To change the default transition you can use the "),s("code",null,"transition"),n(` prop and provide one of
the following transition name.`)],-1),Ce={class:"w-flex"},Ve=n("Open dialog"),xe={class:"w-flex wrap"},Oe={class:"ma2"},Te=s("div",{class:"title3 mb2"},"Transition names",-1),$e={class:"ma2"},Ae=s("div",{class:"title3 mb2"},"Slide transitions for fullscreen",-1),De=n("Close"),Fe=n(`data: () => ({
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
`),Ue=n("Overlay opacity and color"),Se=s("p",null,[n("The overlay can be customized via the "),s("code",null,"overlay-opacity"),n(` - if you use the default color
- and `),s("code",null,"overlay-color"),n(" props.")],-1),Ie=n("Open control panel"),Ne=n("mdi mdi-tune"),Pe=n("Control panel"),Ee=n("Overlay opacity"),Le=n("Custom color: transparent blue"),je=n("Custom color: opaque pink"),We=n("Custom color: transparent"),Be=s("div",{class:"spacer"},null,-1),Me=n("Close"),Re=n(`w-button.px4(@click="dialog.show = true") Open control panel

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
    w-button(@click="dialog.show = false" bg-color="error") Close`),ze=n(`<w-button
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
</w-dialog>`),Ge=n(`data: () => ({
  dialog: {
    show: false,
    overlayOpacity: 0.3,
    overlayChoice: 'opacity'
  }
})`);function Je(e,o,_,q,k,u){const r=d("title-link"),a=d("w-button"),g=d("w-icon"),h=d("w-checkbox"),f=d("w-radios"),c=d("w-dialog"),m=d("example"),w=d("w-radio");return b(),v("div",null,[t(r,{h2:""},{default:l(()=>[O]),_:1}),T,t(m,{"content-class":"pt5"},{pug:l(()=>[P]),html:l(()=>[E]),js:l(()=>[L]),default:l(()=>[t(a,{class:"px4",onClick:o[0]||(o[0]=i=>e.dialog1.show=!0)},{default:l(()=>[$]),_:1}),t(c,{modelValue:e.dialog1.show,"onUpdate:modelValue":o[6]||(o[6]=i=>e.dialog1.show=i),fullscreen:e.dialog1.fullscreen,width:e.dialog1.width,persistent:e.dialog1.persistent,"persistent-no-animation":e.dialog1.persistentNoAnimation,"title-class":"primary-light1--bg white"},{title:l(()=>[t(g,{class:"mr2"},{default:l(()=>[A]),_:1}),D]),actions:l(()=>[I,t(a,{onClick:o[5]||(o[5]=i=>e.dialog1.show=!1)},{default:l(()=>[N]),_:1})]),default:l(()=>[t(h,{class:"d-flex mt2",modelValue:e.dialog1.fullscreen,"onUpdate:modelValue":o[1]||(o[1]=i=>e.dialog1.fullscreen=i),label:"Fullscreen"},null,8,["modelValue"]),t(h,{class:"d-flex mt2",modelValue:e.dialog1.persistent,"onUpdate:modelValue":o[2]||(o[2]=i=>e.dialog1.persistent=i),label:"Persistent (try to click outside)"},null,8,["modelValue"]),t(h,{class:"d-flex mt2",modelValue:e.dialog1.persistentNoAnimation,"onUpdate:modelValue":o[3]||(o[3]=i=>e.dialog1.persistentNoAnimation=i),disabled:!e.dialog1.persistent,label:"Persistent with no animation"},null,8,["modelValue","disabled"]),s("div",F,[U,t(f,{modelValue:e.dialog1.width,"onUpdate:modelValue":o[4]||(o[4]=i=>e.dialog1.width=i),items:[{value:300,label:"300px"},{value:500,label:"500px"}],inline:""},null,8,["modelValue"])]),S]),_:1},8,["modelValue","fullscreen","width","persistent","persistent-no-animation"])]),_:1}),t(r,{h2:""},{default:l(()=>[j]),_:1}),t(m,{"content-class":"pt5"},{pug:l(()=>[H]),html:l(()=>[Q]),js:l(()=>[X]),default:l(()=>[t(a,{class:"px4",onClick:o[7]||(o[7]=i=>e.dialog0.show=!0)},{default:l(()=>[W]),_:1}),t(c,{modelValue:e.dialog0.show,"onUpdate:modelValue":o[8]||(o[8]=i=>e.dialog0.show=i),title:"Dialog title"},{default:l(()=>[B,M,R,z,G,J,K,Y]),_:1},8,["modelValue"])]),_:1}),t(r,{h2:""},{default:l(()=>[Z]),_:1}),t(m,{"content-class":"pt5"},{pug:l(()=>[de]),html:l(()=>[re]),js:l(()=>[ue]),default:l(()=>[t(a,{class:"px4",onClick:o[9]||(o[9]=i=>e.dialog2.show=!0)},{default:l(()=>[ee]),_:1}),t(c,{modelValue:e.dialog2.show,"onUpdate:modelValue":o[12]||(o[12]=i=>e.dialog2.show=i),title:"Terms and conditions",persistent:"",width:550},{actions:l(()=>[te,t(a,{class:"mr2",onClick:o[10]||(o[10]=i=>e.dialog2.show=!1),"bg-color":"error"},{default:l(()=>[se]),_:1}),t(a,{onClick:o[11]||(o[11]=i=>e.dialog2.show=!1),"bg-color":"success"},{default:l(()=>[ae]),_:1})]),default:l(()=>[oe,le,ne,ie]),_:1},8,["modelValue"])]),_:1}),t(r,{h2:""},{default:l(()=>[ce]),_:1}),me,t(m,{"content-class":"pt5"},{pug:l(()=>[ve]),html:l(()=>[ye]),js:l(()=>[_e]),default:l(()=>[t(a,{class:"px4",onClick:o[13]||(o[13]=i=>e.dialog3.show=!0)},{default:l(()=>[pe]),_:1}),t(c,{modelValue:e.dialog3.show,"onUpdate:modelValue":o[16]||(o[16]=i=>e.dialog3.show=i),width:600,title:"Dialog 1","content-class":"text-center"},{actions:l(()=>[we,t(a,{onClick:o[15]||(o[15]=i=>e.dialog3.show=!1),"bg-color":"error"},{default:l(()=>[fe]),_:1})]),default:l(()=>[ge,t(a,{class:"mt6",onClick:o[14]||(o[14]=i=>e.dialog4.show=!0)},{default:l(()=>[he]),_:1})]),_:1},8,["modelValue"]),t(c,{modelValue:e.dialog4.show,"onUpdate:modelValue":o[18]||(o[18]=i=>e.dialog4.show=i),width:250,title:"Dialog 2","content-class":"text-center"},{default:l(()=>[t(a,{class:"my6",onClick:o[17]||(o[17]=i=>e.dialog4.show=!1),"bg-color":"error"},{default:l(()=>[be]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(r,{h2:""},{default:l(()=>[qe]),_:1}),ke,t(m,null,{pug:l(()=>[n(`.w-flex
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
          code `+p("{{ item.label }}")+`

    div.ma2
      .title3.mb2 Slide transitions for fullscreen
      w-radios(
        v-model="dialog.transition"
        :items="transitionsForFullscreen"
        item-value-key="label"
        @input="dialog.fullscreen = null")
        template(#label="{ item }")
          code `+p("{{ item.label }}")+`
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
  w-button.my6(@click="dialog.show = false" bg-color="error") Close`,1)]),html:l(()=>[n(`<div class="w-flex">
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
          <code>`+p("{{ item.label }}")+`</code>
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
          <code>`+p("{{ item.label }}")+`</code>
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
</w-dialog>`,1)]),js:l(()=>[Fe]),default:l(()=>[s("div",Ce,[t(a,{class:"px4 mr6",onClick:o[19]||(o[19]=i=>e.dialog5.show=!0)},{default:l(()=>[Ve]),_:1}),s("div",xe,[s("div",Oe,[Te,t(f,{modelValue:e.dialog5.transition,"onUpdate:modelValue":o[20]||(o[20]=i=>e.dialog5.transition=i),items:e.transitions,"item-value-key":"label",onInput:o[21]||(o[21]=i=>e.dialog5.fullscreen=null)},{label:l(({item:i})=>[s("code",null,p(i.label),1)]),_:1},8,["modelValue","items"])]),s("div",$e,[Ae,t(f,{modelValue:e.dialog5.transition,"onUpdate:modelValue":o[22]||(o[22]=i=>e.dialog5.transition=i),items:e.transitionsForFullscreen,"item-value-key":"label",onInput:o[23]||(o[23]=i=>e.dialog5.fullscreen=null)},{label:l(({item:i})=>[s("code",null,p(i.label),1)]),_:1},8,["modelValue","items"]),t(h,{class:"mt2","model-value":e.dialog5.fullscreen===null?u.fullscreenTransition:e.dialog5.fullscreen,onInput:o[24]||(o[24]=i=>e.dialog5.fullscreen=i),label:"Fullscreen dialog"},null,8,["model-value"])])])]),t(c,{modelValue:e.dialog5.show,"onUpdate:modelValue":o[26]||(o[26]=i=>e.dialog5.show=i),width:(e.dialog5.fullscreen===null?u.fullscreenTransition:e.dialog5.fullscreen)?0:400,fullscreen:e.dialog5.fullscreen===null?u.fullscreenTransition:e.dialog5.fullscreen,transition:e.dialog5.transition,title:"Dialog with custom transition","content-class":"w-flex align-center justify-center"},{default:l(()=>[t(a,{class:"my6",onClick:o[25]||(o[25]=i=>e.dialog5.show=!1),"bg-color":"error"},{default:l(()=>[De]),_:1})]),_:1},8,["modelValue","width","fullscreen","transition"])]),_:1}),t(r,{h2:""},{default:l(()=>[Ue]),_:1}),Se,t(m,{"content-class":"pt5"},{pug:l(()=>[Re]),html:l(()=>[ze]),js:l(()=>[Ge]),default:l(()=>[t(a,{class:"px4",onClick:o[27]||(o[27]=i=>e.dialog6.show=!0)},{default:l(()=>[Ie]),_:1}),t(c,{modelValue:e.dialog6.show,"onUpdate:modelValue":o[34]||(o[34]=i=>e.dialog6.show=i),width:500,"overlay-opacity":e.dialog6.overlayChoice==="opacity"&&e.dialog6.overlayOpacity,"overlay-color":e.dialog6.overlayChoice!=="opacity"&&e.dialog6.overlayChoice||""},{title:l(()=>[t(g,{class:"mr2"},{default:l(()=>[Ne]),_:1}),Pe]),actions:l(()=>[Be,t(a,{onClick:o[33]||(o[33]=i=>e.dialog6.show=!1),"bg-color":"error"},{default:l(()=>[Me]),_:1})]),default:l(()=>[t(w,{class:"d-flex mt1",modelValue:e.dialog6.overlayChoice,"onUpdate:modelValue":o[29]||(o[29]=i=>e.dialog6.overlayChoice=i),"return-value":"opacity"},{default:l(()=>[Ee,V(s("input",{class:"ml2","onUpdate:modelValue":o[28]||(o[28]=i=>e.dialog6.overlayOpacity=i),type:"number",step:"0.1",min:"0",max:"1"},null,512),[[x,e.dialog6.overlayOpacity]])]),_:1},8,["modelValue"]),t(w,{class:"d-flex mt1",modelValue:e.dialog6.overlayChoice,"onUpdate:modelValue":o[30]||(o[30]=i=>e.dialog6.overlayChoice=i),"return-value":"rgba(35, 71, 129, 0.5)"},{default:l(()=>[Le]),_:1},8,["modelValue"]),t(w,{class:"d-flex mt1",modelValue:e.dialog6.overlayChoice,"onUpdate:modelValue":o[31]||(o[31]=i=>e.dialog6.overlayChoice=i),"return-value":"#e91e63"},{default:l(()=>[je]),_:1},8,["modelValue"]),t(w,{class:"d-flex mt1",modelValue:e.dialog6.overlayChoice,"onUpdate:modelValue":o[32]||(o[32]=i=>e.dialog6.overlayChoice=i),"return-value":"transparent"},{default:l(()=>[We]),_:1},8,["modelValue"])]),_:1},8,["modelValue","overlay-opacity","overlay-color"])]),_:1})])}const Ke={data:()=>({dialog0:{show:!1},dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,width:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:"fade"},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:"opacity"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],transitionsForFullscreen:[{label:"slide-up"},{label:"slide-down"},{label:"slide-left"},{label:"slide-right"}]}),computed:{fullscreenTransition(){return this.transitionsForFullscreen.map(e=>e.label).includes(this.dialog5.transition)}}};var Ye=y(Ke,[["render",Je]]);const He=s("div",{class:"w-divider my12"},null,-1),Qe=n("API");function Xe(e,o,_,q,k,u){const r=d("title-link"),a=d("component-api");return b(),v("div",null,[He,t(r,{class:"title1",h2:""},{default:l(()=>[Qe]),_:1}),t(a,{class:"mt0",items:u.props,descriptions:e.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(a,{items:e.slots,title:"Slots"},null,8,["items"]),t(a,{items:u.events,title:"Events"},null,8,["items"])])}const Ze={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the dialog. Any truthy value will show the dialog whereas any falsy value will hide it.',width:"Sets a max-width on the dialog.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",fullscreen:"Sets the dialog to full-screen.",persistent:"When set to true, clicking outside of the dialog or pressing the escape key will not close the dialog.<br>A bounce animation will give the user a feedback that the dialog needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the dialog or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",tile:"Removes the default border-radius and sets sharp edges on the dialog.",title:"Provide a dialog title.",transition:'Applies a particular transition to this component when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.<br>Test all the transitions in the <a href="#transitions">Transitions</a> example.',titleClass:"Applies a custom CSS class to the dialog's title.",contentClass:"Applies a custom CSS class to the dialog's content.",dialogClass:"Applies a custom CSS class to the dialog container.",overlayColor:'Provide a custom background color for the dialog background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',color:'Applies a text color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the dialog background overlay."},eo={title:{description:'The dialog uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The dialog content."},actions:{description:'The dialog uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},oo={input:"Emitted on dialog close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on dialog close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on dialog close.",closed:"Emitted after the dialog is completely closed (after the closing animation)."},lo={data:()=>({propsDescs:Ze,slots:eo}),computed:{props(){return C.props},events(){return C.emits.reduce((e,o)=>(e[o]={description:oo[o]||""})&&e,{})}}};var no=y(lo,[["render",Xe]]);const io=n("w-dialog");function to(e,o,_,q,k,u){const r=d("ui-component-title"),a=d("examples"),g=d("api");return b(),v("main",null,[t(r,null,{default:l(()=>[io]),_:1}),t(a),t(g)])}const so={components:{Examples:Ye,Api:no}};var ro=y(so,[["render",to]]);export{ro as default};
