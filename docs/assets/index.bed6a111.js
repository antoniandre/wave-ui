import{r as d,o as b,g as v,a as t,w as o,b as n,d as a,t as p,l as x,H as O,_ as y,I as V}from"./index.bf2cfd71.js";const T=a("p",null,"This dialog contains some basic options for the w-dialog.",-1),$={class:"w-flex mt6 no-grow"},A=a("span",{class:"mr2"},"Width:",-1),D=a("div",{class:"mt4 mb-2 grey-light1"},[n("The "),a("span",{class:"code grey-light1"},"width"),n(` prop is called so for simplicity, but it internally translates to
a `),a("span",{class:"code grey-light1"},"max-width"),n(` to fit on small screens.
`)],-1),F=a("div",{class:"spacer"},null,-1),U=a("br",null,null,-1),S=a("br",null,null,-1),I=a("br",null,null,-1),N=a("br",null,null,-1),P=a("br",null,null,-1),E=a("br",null,null,-1),L=a("div",{class:"spacer"},null,-1),j=a("p",null,"It is possible to open a dialog inside a dialog.",-1),W=a("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit...",-1),B=a("div",{class:"spacer"},null,-1),M=a("p",null,[n("To change the default transition you can use the "),a("code",null,"transition"),n(` prop and provide one of
the following transition name.`)],-1),R={class:"w-flex"},_={class:"w-flex wrap"},z={class:"ma2"},G=a("div",{class:"title3 mb2"},"Transition names",-1),H={class:"ma2"},Y=a("div",{class:"title3 mb2"},"Slide transitions for fullscreen",-1),J=a("p",null,[n("The overlay can be customized via the "),a("code",null,"overlay-opacity"),n(` - if you use the default color
- and `),a("code",null,"overlay-color"),n(" props.")],-1),K=a("div",{class:"spacer"},null,-1);function Q(e,l,q,k,C,u){const r=d("title-link"),s=d("w-button"),g=d("w-icon"),w=d("w-checkbox"),f=d("w-radios"),c=d("w-dialog"),m=d("example"),h=d("w-radio");return b(),v("div",null,[t(r,{h2:""},{default:o(()=>[n("Global demo")]),_:1}),T,t(m,{"content-class":"pt5"},{pug:o(()=>[n(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false") Close`)]),html:o(()=>[n(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`)]),js:o(()=>[n(`data: () => ({
  dialog: {
    show: false,
    fullscreen: false,
    persistent: false,
    persistentNoAnimation: false,
    width: 300
  }
})
`)]),default:o(()=>[t(s,{class:"px4",onClick:l[0]||(l[0]=i=>e.dialog1.show=!0)},{default:o(()=>[n("Open dialog")]),_:1}),t(c,{modelValue:e.dialog1.show,"onUpdate:modelValue":l[6]||(l[6]=i=>e.dialog1.show=i),fullscreen:e.dialog1.fullscreen,width:e.dialog1.width,persistent:e.dialog1.persistent,"persistent-no-animation":e.dialog1.persistentNoAnimation,"title-class":"primary-light1--bg white"},{title:o(()=>[t(g,{class:"mr2"},{default:o(()=>[n("mdi mdi-tune")]),_:1}),n("Control panel")]),actions:o(()=>[F,t(s,{onClick:l[5]||(l[5]=i=>e.dialog1.show=!1)},{default:o(()=>[n("Close")]),_:1})]),default:o(()=>[t(w,{class:"d-flex mt2",modelValue:e.dialog1.fullscreen,"onUpdate:modelValue":l[1]||(l[1]=i=>e.dialog1.fullscreen=i),label:"Fullscreen"},null,8,["modelValue"]),t(w,{class:"d-flex mt2",modelValue:e.dialog1.persistent,"onUpdate:modelValue":l[2]||(l[2]=i=>e.dialog1.persistent=i),label:"Persistent (try to click outside)"},null,8,["modelValue"]),t(w,{class:"d-flex mt2",modelValue:e.dialog1.persistentNoAnimation,"onUpdate:modelValue":l[3]||(l[3]=i=>e.dialog1.persistentNoAnimation=i),disabled:!e.dialog1.persistent,label:"Persistent with no animation"},null,8,["modelValue","disabled"]),a("div",$,[A,t(f,{modelValue:e.dialog1.width,"onUpdate:modelValue":l[4]||(l[4]=i=>e.dialog1.width=i),items:[{value:300,label:"300px"},{value:500,label:"500px"}],inline:""},null,8,["modelValue"])]),D]),_:1},8,["modelValue","fullscreen","width","persistent","persistent-no-animation"])]),_:1}),t(r,{h2:""},{default:o(()=>[n("Basic")]),_:1}),t(m,{"content-class":"pt5"},{pug:o(()=>[n(`w-button.px4(@click="showDialog = true") Open dialog

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
  perspiciatis repellendus. Sunt!`)]),html:o(()=>[n(`<w-button class="px4" @click="showDialog = true">
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
<w-dialog>`)]),js:o(()=>[n(`data: () => ({
  showDialog: false
})
`)]),default:o(()=>[t(s,{class:"px4",onClick:l[7]||(l[7]=i=>e.dialog0.show=!0)},{default:o(()=>[n("Open dialog")]),_:1}),t(c,{modelValue:e.dialog0.show,"onUpdate:modelValue":l[8]||(l[8]=i=>e.dialog0.show=i),title:"Dialog title"},{default:o(()=>[n("Lorem ipsum dolor sit amet consectetur adipisicing elit."),U,n(`
Unde eum non necessitatibus quia corporis odio numquam sequi iusto
voluptatum delectus? Excepturi minus iste, provident non totam itaque
sed ut labore?`),S,I,n(`
Nihil delectus distinctio eveniet quis qui tempora sit,
illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
beatae ex nihil.`),N,n(`
Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
perspiciatis repellendus. Sunt!`)]),_:1},8,["modelValue"])]),_:1}),t(r,{h2:""},{default:o(()=>[n("Persistent prompt dialog")]),_:1}),t(m,{"content-class":"pt5"},{pug:o(()=>[n(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false" bg-color="success") I agree`)]),html:o(()=>[n(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`)]),js:o(()=>[n(`data: () => ({
  dialog: { show: false }
})
`)]),default:o(()=>[t(s,{class:"px4",onClick:l[9]||(l[9]=i=>e.dialog2.show=!0)},{default:o(()=>[n("Open dialog")]),_:1}),t(c,{modelValue:e.dialog2.show,"onUpdate:modelValue":l[12]||(l[12]=i=>e.dialog2.show=i),title:"Terms and conditions",persistent:"",width:550},{actions:o(()=>[L,t(s,{class:"mr2",onClick:l[10]||(l[10]=i=>e.dialog2.show=!1),"bg-color":"error"},{default:o(()=>[n("I disagree")]),_:1}),t(s,{onClick:l[11]||(l[11]=i=>e.dialog2.show=!1),"bg-color":"success"},{default:o(()=>[n("I agree")]),_:1})]),default:o(()=>[n(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),P,E,n(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)]),_:1},8,["modelValue"])]),_:1}),t(r,{h2:""},{default:o(()=>[n("Nesting")]),_:1}),j,t(m,{"content-class":"pt5"},{pug:o(()=>[n(`w-button.px4(@click="dialog1.show = true") Open dialog

w-dialog(v-model="dialog1.show" :width="600" title="Dialog 1" content-class="text-center")
  p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
  w-button.mt6(@click="dialog2.show = true") Open second dialog

  template(#actions)
    .spacer
    w-button(@click="dialog1.show = false" bg-color="error") Close

w-dialog(v-model="dialog2.show" :width="250" title="Dialog 2" content-class="text-center")
  w-button.my6(@click="dialog2.show = false" bg-color="error") Close`)]),html:o(()=>[n(`<w-button
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
</w-dialog>`)]),js:o(()=>[n(`data: () => ({
  dialog1: { show: false },
  dialog2: { show: false }
})
`)]),default:o(()=>[t(s,{class:"px4",onClick:l[13]||(l[13]=i=>e.dialog3.show=!0)},{default:o(()=>[n("Open dialog")]),_:1}),t(c,{modelValue:e.dialog3.show,"onUpdate:modelValue":l[16]||(l[16]=i=>e.dialog3.show=i),width:600,title:"Dialog 1","content-class":"text-center"},{actions:o(()=>[B,t(s,{onClick:l[15]||(l[15]=i=>e.dialog3.show=!1),"bg-color":"error"},{default:o(()=>[n("Close")]),_:1})]),default:o(()=>[W,t(s,{class:"mt6",onClick:l[14]||(l[14]=i=>e.dialog4.show=!0)},{default:o(()=>[n("Open second dialog")]),_:1})]),_:1},8,["modelValue"]),t(c,{modelValue:e.dialog4.show,"onUpdate:modelValue":l[18]||(l[18]=i=>e.dialog4.show=i),width:250,title:"Dialog 2","content-class":"text-center"},{default:o(()=>[t(s,{class:"my6",onClick:l[17]||(l[17]=i=>e.dialog4.show=!1),"bg-color":"error"},{default:o(()=>[n("Close")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(r,{h2:""},{default:o(()=>[n("Transitions")]),_:1}),M,t(m,null,{pug:o(()=>[n(`.w-flex
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
  w-button.my6(@click="dialog.show = false" bg-color="error") Close`,1)]),html:o(()=>[n(`<div class="w-flex">
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
</w-dialog>`,1)]),js:o(()=>[n(`data: () => ({
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
`)]),default:o(()=>[a("div",R,[t(s,{class:"px4 mr6",onClick:l[19]||(l[19]=i=>e.dialog5.show=!0)},{default:o(()=>[n("Open dialog")]),_:1}),a("div",_,[a("div",z,[G,t(f,{modelValue:e.dialog5.transition,"onUpdate:modelValue":l[20]||(l[20]=i=>e.dialog5.transition=i),items:e.transitions,"item-value-key":"label",onInput:l[21]||(l[21]=i=>e.dialog5.fullscreen=null)},{label:o(({item:i})=>[a("code",null,p(i.label),1)]),_:1},8,["modelValue","items"])]),a("div",H,[Y,t(f,{modelValue:e.dialog5.transition,"onUpdate:modelValue":l[22]||(l[22]=i=>e.dialog5.transition=i),items:e.transitionsForFullscreen,"item-value-key":"label",onInput:l[23]||(l[23]=i=>e.dialog5.fullscreen=null)},{label:o(({item:i})=>[a("code",null,p(i.label),1)]),_:1},8,["modelValue","items"]),t(w,{class:"mt2","model-value":e.dialog5.fullscreen===null?u.fullscreenTransition:e.dialog5.fullscreen,onInput:l[24]||(l[24]=i=>e.dialog5.fullscreen=i),label:"Fullscreen dialog"},null,8,["model-value"])])])]),t(c,{modelValue:e.dialog5.show,"onUpdate:modelValue":l[26]||(l[26]=i=>e.dialog5.show=i),width:(e.dialog5.fullscreen===null?u.fullscreenTransition:e.dialog5.fullscreen)?0:400,fullscreen:e.dialog5.fullscreen===null?u.fullscreenTransition:e.dialog5.fullscreen,transition:e.dialog5.transition,title:"Dialog with custom transition","content-class":"w-flex align-center justify-center"},{default:o(()=>[t(s,{class:"my6",onClick:l[25]||(l[25]=i=>e.dialog5.show=!1),"bg-color":"error"},{default:o(()=>[n("Close")]),_:1})]),_:1},8,["modelValue","width","fullscreen","transition"])]),_:1}),t(r,{h2:""},{default:o(()=>[n("Overlay opacity and color")]),_:1}),J,t(m,{"content-class":"pt5"},{pug:o(()=>[n(`w-button.px4(@click="dialog.show = true") Open control panel

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
    w-button(@click="dialog.show = false" bg-color="error") Close`)]),html:o(()=>[n(`<w-button
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
</w-dialog>`)]),js:o(()=>[n(`data: () => ({
  dialog: {
    show: false,
    overlayOpacity: 0.3,
    overlayChoice: 'opacity'
  }
})`)]),default:o(()=>[t(s,{class:"px4",onClick:l[27]||(l[27]=i=>e.dialog6.show=!0)},{default:o(()=>[n("Open control panel")]),_:1}),t(c,{modelValue:e.dialog6.show,"onUpdate:modelValue":l[34]||(l[34]=i=>e.dialog6.show=i),width:500,"overlay-opacity":e.dialog6.overlayChoice==="opacity"&&e.dialog6.overlayOpacity,"overlay-color":e.dialog6.overlayChoice!=="opacity"&&e.dialog6.overlayChoice||""},{title:o(()=>[t(g,{class:"mr2"},{default:o(()=>[n("mdi mdi-tune")]),_:1}),n("Control panel")]),actions:o(()=>[K,t(s,{onClick:l[33]||(l[33]=i=>e.dialog6.show=!1),"bg-color":"error"},{default:o(()=>[n("Close")]),_:1})]),default:o(()=>[t(h,{class:"d-flex mt1",modelValue:e.dialog6.overlayChoice,"onUpdate:modelValue":l[29]||(l[29]=i=>e.dialog6.overlayChoice=i),"return-value":"opacity"},{default:o(()=>[n("Overlay opacity"),x(a("input",{class:"ml2","onUpdate:modelValue":l[28]||(l[28]=i=>e.dialog6.overlayOpacity=i),type:"number",step:"0.1",min:"0",max:"1"},null,512),[[O,e.dialog6.overlayOpacity]])]),_:1},8,["modelValue"]),t(h,{class:"d-flex mt1",modelValue:e.dialog6.overlayChoice,"onUpdate:modelValue":l[30]||(l[30]=i=>e.dialog6.overlayChoice=i),"return-value":"rgba(35, 71, 129, 0.5)"},{default:o(()=>[n("Custom color: transparent blue")]),_:1},8,["modelValue"]),t(h,{class:"d-flex mt1",modelValue:e.dialog6.overlayChoice,"onUpdate:modelValue":l[31]||(l[31]=i=>e.dialog6.overlayChoice=i),"return-value":"#e91e63"},{default:o(()=>[n("Custom color: opaque pink")]),_:1},8,["modelValue"]),t(h,{class:"d-flex mt1",modelValue:e.dialog6.overlayChoice,"onUpdate:modelValue":l[32]||(l[32]=i=>e.dialog6.overlayChoice=i),"return-value":"transparent"},{default:o(()=>[n("Custom color: transparent")]),_:1},8,["modelValue"])]),_:1},8,["modelValue","overlay-opacity","overlay-color"])]),_:1})])}const X={data:()=>({dialog0:{show:!1},dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,width:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:"fade"},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:"opacity"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],transitionsForFullscreen:[{label:"slide-up"},{label:"slide-down"},{label:"slide-left"},{label:"slide-right"}]}),computed:{fullscreenTransition(){return this.transitionsForFullscreen.map(e=>e.label).includes(this.dialog5.transition)}}},Z=y(X,[["render",Q]]),ee=a("div",{class:"w-divider my12"},null,-1);function le(e,l,q,k,C,u){const r=d("title-link"),s=d("component-api");return b(),v("div",null,[ee,t(r,{class:"title1",h2:""},{default:o(()=>[n("API")]),_:1}),t(s,{class:"mt0",items:u.props,descriptions:e.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(s,{items:e.slots,title:"Slots"},null,8,["items"]),t(s,{items:u.events,title:"Events"},null,8,["items"])])}const oe={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the dialog. Any truthy value will show the dialog whereas any falsy value will hide it.',width:"Sets a max-width on the dialog.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",fullscreen:"Sets the dialog to full-screen.",persistent:"When set to true, clicking outside of the dialog or pressing the escape key will not close the dialog.<br>A bounce animation will give the user a feedback that the dialog needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the dialog or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",tile:"Removes the default border-radius and sets sharp edges on the dialog.",title:"Provide a dialog title.",transition:'Applies a particular transition to this component when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.<br>Test all the transitions in the <a href="#transitions">Transitions</a> example.',titleClass:"Applies a custom CSS class to the dialog's title.",contentClass:"Applies a custom CSS class to the dialog's content.",dialogClass:"Applies a custom CSS class to the dialog container.",overlayColor:'Provide a custom background color for the dialog background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',color:'Applies a text color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the dialog background overlay."},ne={title:{description:'The dialog uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The dialog content."},actions:{description:'The dialog uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},ie={input:"Emitted on dialog close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on dialog close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on dialog close.",closed:"Emitted after the dialog is completely closed (after the closing animation)."},te={data:()=>({propsDescs:oe,slots:ne}),computed:{props(){return V.props},events(){return V.emits.reduce((e,l)=>(e[l]={description:ie[l]||""})&&e,{})}}},ae=y(te,[["render",le]]);function se(e,l,q,k,C,u){const r=d("ui-component-title"),s=d("examples"),g=d("api");return b(),v("main",null,[t(r,null,{default:o(()=>[n("w-dialog")]),_:1}),t(s),t(g)])}const de={components:{Examples:Z,Api:ae}},ue=y(de,[["render",se]]);export{ue as default};
