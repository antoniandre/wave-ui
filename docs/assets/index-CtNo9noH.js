import{r,o as v,g as y,a as t,w as o,b as n,d as a,t as g,l as x,I as O,_ as h,J as V}from"./index-M5C_kbMe.js";const T={class:"w-flex mt6 no-grow"},$={class:"w-flex"},A={class:"w-flex wrap"},D={class:"ma2"},F={class:"ma2"};function U(l,e,q,k,C,u){const d=r("title-link"),s=r("w-button"),w=r("w-icon"),c=r("w-checkbox"),b=r("w-radios"),m=r("w-dialog"),p=r("example"),f=r("w-radio");return v(),y("div",null,[t(d,{h2:""},{default:o(()=>e[35]||(e[35]=[n("Global demo")])),_:1}),e[95]||(e[95]=a("p",null,"This dialog contains some basic options for the w-dialog.",-1)),t(p,{"content-class":"pt5"},{pug:o(()=>e[43]||(e[43]=[n(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false") Close`)])),html:o(()=>e[44]||(e[44]=[n(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`)])),js:o(()=>e[45]||(e[45]=[n(`data: () => ({
  dialog: {
    show: false,
    fullscreen: false,
    persistent: false,
    persistentNoAnimation: false,
    width: 300
  }
})
`)])),default:o(()=>[t(s,{class:"px4",onClick:e[0]||(e[0]=i=>l.dialog1.show=!0)},{default:o(()=>e[36]||(e[36]=[n("Open dialog")])),_:1}),t(m,{modelValue:l.dialog1.show,"onUpdate:modelValue":e[6]||(e[6]=i=>l.dialog1.show=i),fullscreen:l.dialog1.fullscreen,width:l.dialog1.width,persistent:l.dialog1.persistent,"persistent-no-animation":l.dialog1.persistentNoAnimation,"title-class":"primary-light1--bg white"},{title:o(()=>[t(w,{class:"mr2"},{default:o(()=>e[37]||(e[37]=[n("mdi mdi-tune")])),_:1}),e[38]||(e[38]=n("Control panel"))]),actions:o(()=>[e[41]||(e[41]=a("div",{class:"spacer"},null,-1)),t(s,{onClick:e[5]||(e[5]=i=>l.dialog1.show=!1)},{default:o(()=>e[40]||(e[40]=[n("Close")])),_:1})]),default:o(()=>[t(c,{class:"d-flex mt2",modelValue:l.dialog1.fullscreen,"onUpdate:modelValue":e[1]||(e[1]=i=>l.dialog1.fullscreen=i),label:"Fullscreen"},null,8,["modelValue"]),t(c,{class:"d-flex mt2",modelValue:l.dialog1.persistent,"onUpdate:modelValue":e[2]||(e[2]=i=>l.dialog1.persistent=i),label:"Persistent (try to click outside)"},null,8,["modelValue"]),t(c,{class:"d-flex mt2",modelValue:l.dialog1.persistentNoAnimation,"onUpdate:modelValue":e[3]||(e[3]=i=>l.dialog1.persistentNoAnimation=i),disabled:!l.dialog1.persistent,label:"Persistent with no animation"},null,8,["modelValue","disabled"]),a("div",T,[e[39]||(e[39]=a("span",{class:"mr2"},"Width:",-1)),t(b,{modelValue:l.dialog1.width,"onUpdate:modelValue":e[4]||(e[4]=i=>l.dialog1.width=i),items:[{value:300,label:"300px"},{value:500,label:"500px"}],inline:""},null,8,["modelValue"])]),e[42]||(e[42]=a("div",{class:"mt4 mb-2 grey-light1"},[n("The "),a("span",{class:"code grey-light1"},"width"),n(` prop is called so for simplicity, but it internally translates to
a `),a("span",{class:"code grey-light1"},"max-width"),n(` to fit on small screens.
`)],-1))]),_:1},8,["modelValue","fullscreen","width","persistent","persistent-no-animation"])]),_:1}),t(d,{h2:""},{default:o(()=>e[46]||(e[46]=[n("Basic")])),_:1}),t(p,{"content-class":"pt5"},{pug:o(()=>e[49]||(e[49]=[n(`w-button.px4(@click="showDialog = true") Open dialog

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
  perspiciatis repellendus. Sunt!`)])),html:o(()=>e[50]||(e[50]=[n(`<w-button class="px4" @click="showDialog = true">
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
<w-dialog>`)])),js:o(()=>e[51]||(e[51]=[n(`data: () => ({
  showDialog: false
})
`)])),default:o(()=>[t(s,{class:"px4",onClick:e[7]||(e[7]=i=>l.dialog0.show=!0)},{default:o(()=>e[47]||(e[47]=[n("Open dialog")])),_:1}),t(m,{modelValue:l.dialog0.show,"onUpdate:modelValue":e[8]||(e[8]=i=>l.dialog0.show=i),title:"Dialog title"},{default:o(()=>e[48]||(e[48]=[n("Lorem ipsum dolor sit amet consectetur adipisicing elit."),a("br",null,null,-1),n(`
Unde eum non necessitatibus quia corporis odio numquam sequi iusto
voluptatum delectus? Excepturi minus iste, provident non totam itaque
sed ut labore?`),a("br",null,null,-1),a("br",null,null,-1),n(`
Nihil delectus distinctio eveniet quis qui tempora sit,
illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
beatae ex nihil.`),a("br",null,null,-1),n(`
Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
perspiciatis repellendus. Sunt!`)])),_:1},8,["modelValue"])]),_:1}),t(d,{h2:""},{default:o(()=>e[52]||(e[52]=[n("Persistent prompt dialog")])),_:1}),t(p,{"content-class":"pt5"},{pug:o(()=>e[61]||(e[61]=[n(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false" bg-color="success") I agree`)])),html:o(()=>e[62]||(e[62]=[n(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`)])),js:o(()=>e[63]||(e[63]=[n(`data: () => ({
  dialog: { show: false }
})
`)])),default:o(()=>[t(s,{class:"px4",onClick:e[9]||(e[9]=i=>l.dialog2.show=!0)},{default:o(()=>e[53]||(e[53]=[n("Open dialog")])),_:1}),t(m,{modelValue:l.dialog2.show,"onUpdate:modelValue":e[12]||(e[12]=i=>l.dialog2.show=i),title:"Terms and conditions",persistent:"",width:550},{actions:o(()=>[e[56]||(e[56]=a("div",{class:"spacer"},null,-1)),t(s,{class:"mr2",onClick:e[10]||(e[10]=i=>l.dialog2.show=!1),"bg-color":"error"},{default:o(()=>e[54]||(e[54]=[n("I disagree")])),_:1}),t(s,{onClick:e[11]||(e[11]=i=>l.dialog2.show=!1),"bg-color":"success"},{default:o(()=>e[55]||(e[55]=[n("I agree")])),_:1})]),default:o(()=>[e[57]||(e[57]=n(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`)),e[58]||(e[58]=a("br",null,null,-1)),e[59]||(e[59]=a("br",null,null,-1)),e[60]||(e[60]=n(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`))]),_:1},8,["modelValue"])]),_:1}),t(d,{h2:""},{default:o(()=>e[64]||(e[64]=[n("Nesting")])),_:1}),e[96]||(e[96]=a("p",null,"It is possible to open a dialog inside a dialog.",-1)),t(p,{"content-class":"pt5"},{pug:o(()=>e[71]||(e[71]=[n(`w-button.px4(@click="dialog1.show = true") Open dialog

w-dialog(v-model="dialog1.show" :width="600" title="Dialog 1" content-class="text-center")
  p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
  w-button.mt6(@click="dialog2.show = true") Open second dialog

  template(#actions)
    .spacer
    w-button(@click="dialog1.show = false" bg-color="error") Close

w-dialog(v-model="dialog2.show" :width="250" title="Dialog 2" content-class="text-center")
  w-button.my6(@click="dialog2.show = false" bg-color="error") Close`)])),html:o(()=>e[72]||(e[72]=[n(`<w-button
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
</w-dialog>`)])),js:o(()=>e[73]||(e[73]=[n(`data: () => ({
  dialog1: { show: false },
  dialog2: { show: false }
})
`)])),default:o(()=>[t(s,{class:"px4",onClick:e[13]||(e[13]=i=>l.dialog3.show=!0)},{default:o(()=>e[65]||(e[65]=[n("Open dialog")])),_:1}),t(m,{modelValue:l.dialog3.show,"onUpdate:modelValue":e[16]||(e[16]=i=>l.dialog3.show=i),width:600,title:"Dialog 1","content-class":"text-center"},{actions:o(()=>[e[68]||(e[68]=a("div",{class:"spacer"},null,-1)),t(s,{onClick:e[15]||(e[15]=i=>l.dialog3.show=!1),"bg-color":"error"},{default:o(()=>e[67]||(e[67]=[n("Close")])),_:1})]),default:o(()=>[e[69]||(e[69]=a("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit...",-1)),t(s,{class:"mt6",onClick:e[14]||(e[14]=i=>l.dialog4.show=!0)},{default:o(()=>e[66]||(e[66]=[n("Open second dialog")])),_:1})]),_:1},8,["modelValue"]),t(m,{modelValue:l.dialog4.show,"onUpdate:modelValue":e[18]||(e[18]=i=>l.dialog4.show=i),width:250,title:"Dialog 2","content-class":"text-center"},{default:o(()=>[t(s,{class:"my6",onClick:e[17]||(e[17]=i=>l.dialog4.show=!1),"bg-color":"error"},{default:o(()=>e[70]||(e[70]=[n("Close")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(d,{h2:""},{default:o(()=>e[74]||(e[74]=[n("Transitions")])),_:1}),e[97]||(e[97]=a("p",null,[n("To change the default transition you can use the "),a("code",null,"transition"),n(` prop and provide one of
the following transition name.`)],-1)),t(p,null,{pug:o(()=>e[79]||(e[79]=[n(`.w-flex
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
          code `+g("{{ item.label }}")+`

    div.ma2
      .title3.mb2 Slide transitions for fullscreen
      w-radios(
        v-model="dialog.transition"
        :items="transitionsForFullscreen"
        item-value-key="label"
        @input="dialog.fullscreen = null")
        template(#label="{ item }")
          code `+g("{{ item.label }}")+`
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
  w-button.my6(@click="dialog.show = false" bg-color="error") Close`)])),html:o(()=>e[80]||(e[80]=[n(`<div class="w-flex">
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
          <code>`+g("{{ item.label }}")+`</code>
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
          <code>`+g("{{ item.label }}")+`</code>
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
</w-dialog>`)])),js:o(()=>e[81]||(e[81]=[n(`data: () => ({
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
`)])),default:o(()=>[a("div",$,[t(s,{class:"px4 mr6",onClick:e[19]||(e[19]=i=>l.dialog5.show=!0)},{default:o(()=>e[75]||(e[75]=[n("Open dialog")])),_:1}),a("div",A,[a("div",D,[e[76]||(e[76]=a("div",{class:"title3 mb2"},"Transition names",-1)),t(b,{modelValue:l.dialog5.transition,"onUpdate:modelValue":e[20]||(e[20]=i=>l.dialog5.transition=i),items:l.transitions,"item-value-key":"label",onInput:e[21]||(e[21]=i=>l.dialog5.fullscreen=null)},{label:o(({item:i})=>[a("code",null,g(i.label),1)]),_:1},8,["modelValue","items"])]),a("div",F,[e[77]||(e[77]=a("div",{class:"title3 mb2"},"Slide transitions for fullscreen",-1)),t(b,{modelValue:l.dialog5.transition,"onUpdate:modelValue":e[22]||(e[22]=i=>l.dialog5.transition=i),items:l.transitionsForFullscreen,"item-value-key":"label",onInput:e[23]||(e[23]=i=>l.dialog5.fullscreen=null)},{label:o(({item:i})=>[a("code",null,g(i.label),1)]),_:1},8,["modelValue","items"]),t(c,{class:"mt2","model-value":l.dialog5.fullscreen===null?u.fullscreenTransition:l.dialog5.fullscreen,onInput:e[24]||(e[24]=i=>l.dialog5.fullscreen=i),label:"Fullscreen dialog"},null,8,["model-value"])])])]),t(m,{modelValue:l.dialog5.show,"onUpdate:modelValue":e[26]||(e[26]=i=>l.dialog5.show=i),width:(l.dialog5.fullscreen===null?u.fullscreenTransition:l.dialog5.fullscreen)?0:400,fullscreen:l.dialog5.fullscreen===null?u.fullscreenTransition:l.dialog5.fullscreen,transition:l.dialog5.transition,title:"Dialog with custom transition","content-class":"w-flex align-center justify-center"},{default:o(()=>[t(s,{class:"my6",onClick:e[25]||(e[25]=i=>l.dialog5.show=!1),"bg-color":"error"},{default:o(()=>e[78]||(e[78]=[n("Close")])),_:1})]),_:1},8,["modelValue","width","fullscreen","transition"])]),_:1}),t(d,{h2:""},{default:o(()=>e[82]||(e[82]=[n("Overlay opacity and color")])),_:1}),e[98]||(e[98]=a("p",null,[n("The overlay can be customized via the "),a("code",null,"overlay-opacity"),n(` - if you use the default color
- and `),a("code",null,"overlay-color"),n(" props.")],-1)),t(p,{"content-class":"pt5"},{pug:o(()=>e[92]||(e[92]=[n(`w-button.px4(@click="dialog.show = true") Open control panel

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
    w-button(@click="dialog.show = false" bg-color="error") Close`)])),html:o(()=>e[93]||(e[93]=[n(`<w-button
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
</w-dialog>`)])),js:o(()=>e[94]||(e[94]=[n(`data: () => ({
  dialog: {
    show: false,
    overlayOpacity: 0.3,
    overlayChoice: 'opacity'
  }
})`)])),default:o(()=>[t(s,{class:"px4",onClick:e[27]||(e[27]=i=>l.dialog6.show=!0)},{default:o(()=>e[83]||(e[83]=[n("Open control panel")])),_:1}),t(m,{modelValue:l.dialog6.show,"onUpdate:modelValue":e[34]||(e[34]=i=>l.dialog6.show=i),width:500,"overlay-opacity":l.dialog6.overlayChoice==="opacity"&&l.dialog6.overlayOpacity,"overlay-color":l.dialog6.overlayChoice!=="opacity"&&l.dialog6.overlayChoice||""},{title:o(()=>[t(w,{class:"mr2"},{default:o(()=>e[84]||(e[84]=[n("mdi mdi-tune")])),_:1}),e[85]||(e[85]=n("Control panel"))]),actions:o(()=>[e[91]||(e[91]=a("div",{class:"spacer"},null,-1)),t(s,{onClick:e[33]||(e[33]=i=>l.dialog6.show=!1),"bg-color":"error"},{default:o(()=>e[90]||(e[90]=[n("Close")])),_:1})]),default:o(()=>[t(f,{class:"d-flex mt1",modelValue:l.dialog6.overlayChoice,"onUpdate:modelValue":e[29]||(e[29]=i=>l.dialog6.overlayChoice=i),"return-value":"opacity"},{default:o(()=>[e[86]||(e[86]=n("Overlay opacity")),x(a("input",{class:"ml2","onUpdate:modelValue":e[28]||(e[28]=i=>l.dialog6.overlayOpacity=i),type:"number",step:"0.1",min:"0",max:"1"},null,512),[[O,l.dialog6.overlayOpacity]])]),_:1},8,["modelValue"]),t(f,{class:"d-flex mt1",modelValue:l.dialog6.overlayChoice,"onUpdate:modelValue":e[30]||(e[30]=i=>l.dialog6.overlayChoice=i),"return-value":"rgba(35, 71, 129, 0.5)"},{default:o(()=>e[87]||(e[87]=[n("Custom color: transparent blue")])),_:1},8,["modelValue"]),t(f,{class:"d-flex mt1",modelValue:l.dialog6.overlayChoice,"onUpdate:modelValue":e[31]||(e[31]=i=>l.dialog6.overlayChoice=i),"return-value":"#e91e63"},{default:o(()=>e[88]||(e[88]=[n("Custom color: opaque pink")])),_:1},8,["modelValue"]),t(f,{class:"d-flex mt1",modelValue:l.dialog6.overlayChoice,"onUpdate:modelValue":e[32]||(e[32]=i=>l.dialog6.overlayChoice=i),"return-value":"transparent"},{default:o(()=>e[89]||(e[89]=[n("Custom color: transparent")])),_:1},8,["modelValue"])]),_:1},8,["modelValue","overlay-opacity","overlay-color"])]),_:1})])}const S={data:()=>({dialog0:{show:!1},dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,width:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:"fade"},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:"opacity"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],transitionsForFullscreen:[{label:"slide-up"},{label:"slide-down"},{label:"slide-left"},{label:"slide-right"}]}),computed:{fullscreenTransition(){return this.transitionsForFullscreen.map(l=>l.label).includes(this.dialog5.transition)}}},I=h(S,[["render",U]]);function N(l,e,q,k,C,u){const d=r("title-link"),s=r("component-api");return v(),y("div",null,[e[1]||(e[1]=a("div",{class:"w-divider my12"},null,-1)),t(d,{class:"title1",h2:""},{default:o(()=>e[0]||(e[0]=[n("API")])),_:1}),t(s,{class:"mt0",items:u.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(s,{items:l.slots,title:"Slots"},null,8,["items"]),t(s,{items:u.events,title:"Events"},null,8,["items"])])}const P={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the dialog. Any truthy value will show the dialog whereas any falsy value will hide it.',width:"Sets a max-width on the dialog.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",fullscreen:"Sets the dialog to full-screen.",persistent:"When set to true, clicking outside of the dialog or pressing the escape key will not close the dialog.<br>A bounce animation will give the user a feedback that the dialog needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the dialog or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",tile:"Removes the default border-radius and sets sharp edges on the dialog.",title:"Provide a dialog title.",transition:'Applies a particular transition to this component when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.<br>Test all the transitions in the <a href="#transitions">Transitions</a> example.',titleClass:"Applies a custom CSS class to the dialog's title.",contentClass:"Applies a custom CSS class to the dialog's content.",dialogClass:"Applies a custom CSS class to the dialog container.",overlayColor:'Provide a custom background color for the dialog background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',color:'Applies a text color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the dialog background overlay."},E={title:{description:'The dialog uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The dialog content."},actions:{description:'The dialog uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},L={input:"Emitted on dialog close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on dialog close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on dialog close.",closed:"Emitted after the dialog is completely closed (after the closing animation)."},j={data:()=>({propsDescs:P,slots:E}),computed:{props(){return V.props},events(){return V.emits.reduce((l,e)=>(l[e]={description:L[e]||""})&&l,{})}}},W=h(j,[["render",N]]);function B(l,e,q,k,C,u){const d=r("ui-component-title"),s=r("examples"),w=r("api");return v(),y("main",null,[t(d,null,{default:o(()=>e[0]||(e[0]=[n("w-dialog")])),_:1}),t(s),t(w)])}const M={components:{Examples:I,Api:W}},z=h(M,[["render",B]]);export{z as default};
