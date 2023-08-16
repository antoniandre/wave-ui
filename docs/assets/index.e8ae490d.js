import{n as l,k as a}from"./index.e31dd236.js";var d=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Global demo")]),t("p",[e._v("This dialog contains some basic options for the w-dialog.")]),t("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false") Close`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  dialog: {
    show: false,
    fullscreen: false,
    persistent: false,
    persistentNoAnimation: false,
    width: 300
  }
})
`)]},proxy:!0}])},[t("w-button",{staticClass:"px4",on:{click:function(i){e.dialog1.show=!0}}},[e._v("Open dialog")]),t("w-dialog",{attrs:{fullscreen:e.dialog1.fullscreen,width:e.dialog1.width,persistent:e.dialog1.persistent,"persistent-no-animation":e.dialog1.persistentNoAnimation,"title-class":"primary-light1--bg white"},scopedSlots:e._u([{key:"title",fn:function(){return[t("w-icon",{staticClass:"mr2"},[e._v("mdi mdi-tune")]),e._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[t("div",{staticClass:"spacer"}),t("w-button",{on:{click:function(i){e.dialog1.show=!1}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.dialog1.show,callback:function(i){e.$set(e.dialog1,"show",i)},expression:"dialog1.show"}},[t("w-checkbox",{staticClass:"d-flex mt2",attrs:{label:"Fullscreen"},model:{value:e.dialog1.fullscreen,callback:function(i){e.$set(e.dialog1,"fullscreen",i)},expression:"dialog1.fullscreen"}}),t("w-checkbox",{staticClass:"d-flex mt2",attrs:{label:"Persistent (try to click outside)"},model:{value:e.dialog1.persistent,callback:function(i){e.$set(e.dialog1,"persistent",i)},expression:"dialog1.persistent"}}),t("w-checkbox",{staticClass:"d-flex mt2",attrs:{disabled:!e.dialog1.persistent,label:"Persistent with no animation"},model:{value:e.dialog1.persistentNoAnimation,callback:function(i){e.$set(e.dialog1,"persistentNoAnimation",i)},expression:"dialog1.persistentNoAnimation"}}),t("div",{staticClass:"w-flex mt6 no-grow"},[t("span",{staticClass:"mr2"},[e._v("Width:")]),t("w-radios",{attrs:{items:[{value:300,label:"300px"},{value:500,label:"500px"}],inline:""},model:{value:e.dialog1.width,callback:function(i){e.$set(e.dialog1,"width",i)},expression:"dialog1.width"}})],1),t("div",{staticClass:"mt4 mb-2 grey-light1"},[e._v("The "),t("span",{staticClass:"code grey-light1"},[e._v("width")]),e._v(` prop is called so for simplicity, but it internally translates to
a `),t("span",{staticClass:"code grey-light1"},[e._v("max-width")]),e._v(` to fit on small screens.
`)])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Basic")]),t("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button.px4(@click="showDialog = true") Open dialog

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
  perspiciatis repellendus. Sunt!`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button class="px4" @click="showDialog = true">
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
<w-dialog>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  showDialog: false
})
`)]},proxy:!0}])},[t("w-button",{staticClass:"px4",on:{click:function(i){e.dialog0.show=!0}}},[e._v("Open dialog")]),t("w-dialog",{attrs:{title:"Dialog title"},model:{value:e.dialog0.show,callback:function(i){e.$set(e.dialog0,"show",i)},expression:"dialog0.show"}},[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit."),t("br"),e._v(`
Unde eum non necessitatibus quia corporis odio numquam sequi iusto
voluptatum delectus? Excepturi minus iste, provident non totam itaque
sed ut labore?`),t("br"),t("br"),e._v(`
Nihil delectus distinctio eveniet quis qui tempora sit,
illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
beatae ex nihil.`),t("br"),e._v(`
Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
perspiciatis repellendus. Sunt!`)])],1),t("title-link",{attrs:{h2:""}},[e._v("Persistent prompt dialog")]),t("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button.px4(@click="dialog.show = true") Open dialog

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
    w-button(@click="dialog.show = false" bg-color="success") I agree`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button class="px4" @click="dialog.show = true">
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
</w-dialog>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  dialog: { show: false }
})
`)]},proxy:!0}])},[t("w-button",{staticClass:"px4",on:{click:function(i){e.dialog2.show=!0}}},[e._v("Open dialog")]),t("w-dialog",{attrs:{title:"Terms and conditions",persistent:"",width:550},scopedSlots:e._u([{key:"actions",fn:function(){return[t("div",{staticClass:"spacer"}),t("w-button",{staticClass:"mr2",attrs:{"bg-color":"error"},on:{click:function(i){e.dialog2.show=!1}}},[e._v("I disagree")]),t("w-button",{attrs:{"bg-color":"success"},on:{click:function(i){e.dialog2.show=!1}}},[e._v("I agree")])]},proxy:!0}]),model:{value:e.dialog2.show,callback:function(i){e.$set(e.dialog2,"show",i)},expression:"dialog2.show"}},[e._v(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),t("br"),t("br"),e._v(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)])],1),t("title-link",{attrs:{h2:""}},[e._v("Nesting")]),t("p",[e._v("It is possible to open a dialog inside a dialog.")]),t("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button.px4(@click="dialog1.show = true") Open dialog

w-dialog(v-model="dialog1.show" :width="600" title="Dialog 1" content-class="text-center")
  p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
  w-button.mt6(@click="dialog2.show = true") Open second dialog

  template(#actions)
    .spacer
    w-button(@click="dialog1.show = false" bg-color="error") Close

w-dialog(v-model="dialog2.show" :width="250" title="Dialog 2" content-class="text-center")
  w-button.my6(@click="dialog2.show = false" bg-color="error") Close`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button
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
</w-dialog>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  dialog1: { show: false },
  dialog2: { show: false }
})
`)]},proxy:!0}])},[t("w-button",{staticClass:"px4",on:{click:function(i){e.dialog3.show=!0}}},[e._v("Open dialog")]),t("w-dialog",{attrs:{width:600,title:"Dialog 1","content-class":"text-center"},scopedSlots:e._u([{key:"actions",fn:function(){return[t("div",{staticClass:"spacer"}),t("w-button",{attrs:{"bg-color":"error"},on:{click:function(i){e.dialog3.show=!1}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.dialog3.show,callback:function(i){e.$set(e.dialog3,"show",i)},expression:"dialog3.show"}},[t("p",[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit...")]),t("w-button",{staticClass:"mt6",on:{click:function(i){e.dialog4.show=!0}}},[e._v("Open second dialog")])],1),t("w-dialog",{attrs:{width:250,title:"Dialog 2","content-class":"text-center"},model:{value:e.dialog4.show,callback:function(i){e.$set(e.dialog4,"show",i)},expression:"dialog4.show"}},[t("w-button",{staticClass:"my6",attrs:{"bg-color":"error"},on:{click:function(i){e.dialog4.show=!1}}},[e._v("Close")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Transitions")]),e._m(0),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`.w-flex
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
          code `+e._s("{{ item.label }}")+`

    div.ma2
      .title3.mb2 Slide transitions for fullscreen
      w-radios(
        v-model="dialog.transition"
        :items="transitionsForFullscreen"
        item-value-key="label"
        @input="dialog.fullscreen = null")
        template(#label="{ item }")
          code `+e._s("{{ item.label }}")+`
      w-checkbox.mt2(
        :value="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
        @input="dialog.fullscreen = $event"
        label="Fullscreen dialog")

w-dialog(
  v-model="dialog.show"
  :width="&#40;dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen&#41; ? 0 : 400"
  :fullscreen="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
  :transition="dialog.transition"
  title="Dialog with custom transition"
  content-class="w-flex align-center justify-center")
  w-button.my6(@click="dialog.show = false" bg-color="error") Close`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<div class="w-flex">
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
          <code>`+e._s("{{ item.label }}")+`</code>
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
          <code>`+e._s("{{ item.label }}")+`</code>
        </template>
      </w-radios>
      <w-checkbox
        class="mt2"
        :value="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
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
</w-dialog>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
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
`)]},proxy:!0}])},[t("div",{staticClass:"w-flex"},[t("w-button",{staticClass:"px4 mr6",on:{click:function(i){e.dialog5.show=!0}}},[e._v("Open dialog")]),t("div",{staticClass:"w-flex wrap"},[t("div",{staticClass:"ma2"},[t("div",{staticClass:"title3 mb2"},[e._v("Transition names")]),t("w-radios",{attrs:{items:e.transitions,"item-value-key":"label"},on:{input:function(i){e.dialog5.fullscreen=null}},scopedSlots:e._u([{key:"label",fn:function(i){var n=i.item;return[t("code",[e._v(e._s(n.label))])]}}]),model:{value:e.dialog5.transition,callback:function(i){e.$set(e.dialog5,"transition",i)},expression:"dialog5.transition"}})],1),t("div",{staticClass:"ma2"},[t("div",{staticClass:"title3 mb2"},[e._v("Slide transitions for fullscreen")]),t("w-radios",{attrs:{items:e.transitionsForFullscreen,"item-value-key":"label"},on:{input:function(i){e.dialog5.fullscreen=null}},scopedSlots:e._u([{key:"label",fn:function(i){var n=i.item;return[t("code",[e._v(e._s(n.label))])]}}]),model:{value:e.dialog5.transition,callback:function(i){e.$set(e.dialog5,"transition",i)},expression:"dialog5.transition"}}),t("w-checkbox",{staticClass:"mt2",attrs:{value:e.dialog5.fullscreen===null?e.fullscreenTransition:e.dialog5.fullscreen,label:"Fullscreen dialog"},on:{input:function(i){e.dialog5.fullscreen=i}}})],1)])],1),t("w-dialog",{attrs:{width:(e.dialog5.fullscreen===null?e.fullscreenTransition:e.dialog5.fullscreen)?0:400,fullscreen:e.dialog5.fullscreen===null?e.fullscreenTransition:e.dialog5.fullscreen,transition:e.dialog5.transition,title:"Dialog with custom transition","content-class":"w-flex align-center justify-center"},model:{value:e.dialog5.show,callback:function(i){e.$set(e.dialog5,"show",i)},expression:"dialog5.show"}},[t("w-button",{staticClass:"my6",attrs:{"bg-color":"error"},on:{click:function(i){e.dialog5.show=!1}}},[e._v("Close")])],1)],1),t("title-link",{attrs:{h2:""}},[e._v("Overlay opacity and color")]),e._m(1),t("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-button.px4(@click="dialog.show = true") Open control panel

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
    w-button(@click="dialog.show = false" bg-color="error") Close`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-button
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
</w-dialog>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  dialog: {
    show: false,
    overlayOpacity: 0.3,
    overlayChoice: 'opacity'
  }
})`)]},proxy:!0}])},[t("w-button",{staticClass:"px4",on:{click:function(i){e.dialog6.show=!0}}},[e._v("Open control panel")]),t("w-dialog",{attrs:{width:500,"overlay-opacity":e.dialog6.overlayChoice==="opacity"&&e.dialog6.overlayOpacity,"overlay-color":e.dialog6.overlayChoice!=="opacity"&&e.dialog6.overlayChoice||""},scopedSlots:e._u([{key:"title",fn:function(){return[t("w-icon",{staticClass:"mr2"},[e._v("mdi mdi-tune")]),e._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[t("div",{staticClass:"spacer"}),t("w-button",{attrs:{"bg-color":"error"},on:{click:function(i){e.dialog6.show=!1}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.dialog6.show,callback:function(i){e.$set(e.dialog6,"show",i)},expression:"dialog6.show"}},[t("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"opacity"},model:{value:e.dialog6.overlayChoice,callback:function(i){e.$set(e.dialog6,"overlayChoice",i)},expression:"dialog6.overlayChoice"}},[e._v("Overlay opacity"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.dialog6.overlayOpacity,expression:"dialog6.overlayOpacity"}],staticClass:"ml2",attrs:{type:"number",step:"0.1",min:"0",max:"1"},domProps:{value:e.dialog6.overlayOpacity},on:{input:function(i){i.target.composing||e.$set(e.dialog6,"overlayOpacity",i.target.value)}}})]),t("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"rgba(35, 71, 129, 0.5)"},model:{value:e.dialog6.overlayChoice,callback:function(i){e.$set(e.dialog6,"overlayChoice",i)},expression:"dialog6.overlayChoice"}},[e._v("Custom color: transparent blue")]),t("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"#e91e63"},model:{value:e.dialog6.overlayChoice,callback:function(i){e.$set(e.dialog6,"overlayChoice",i)},expression:"dialog6.overlayChoice"}},[e._v("Custom color: opaque pink")]),t("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"transparent"},model:{value:e.dialog6.overlayChoice,callback:function(i){e.$set(e.dialog6,"overlayChoice",i)},expression:"dialog6.overlayChoice"}},[e._v("Custom color: transparent")])],1)],1)],1)},u=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("To change the default transition you can use the "),t("code",[e._v("transition")]),e._v(` prop and provide one of
the following transition name.`)])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[e._v("The overlay can be customized via the "),t("code",[e._v("overlay-opacity")]),e._v(` - if you use the default color
- and `),t("code",[e._v("overlay-color")]),e._v(" props.")])}];const p={data:()=>({dialog0:{show:!1},dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,width:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:"fade"},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:"opacity"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],transitionsForFullscreen:[{label:"slide-up"},{label:"slide-down"},{label:"slide-left"},{label:"slide-right"}]}),computed:{fullscreenTransition(){return this.transitionsForFullscreen.map(e=>e.label).includes(this.dialog5.transition)}}},s={};var m=l(p,d,u,!1,g,null,null,null);function g(e){for(let o in s)this[o]=s[o]}var v=function(){return m.exports}(),h=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},f=[];const w={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the dialog. Any truthy value will show the dialog whereas any falsy value will hide it.',width:"Sets a max-width on the dialog.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",fullscreen:"Sets the dialog to full-screen.",persistent:"When set to true, clicking outside of the dialog or pressing the escape key will not close the dialog.<br>A bounce animation will give the user a feedback that the dialog needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the dialog or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",tile:"Removes the default border-radius and sets sharp edges on the dialog.",title:"Provide a dialog title.",transition:'Applies a particular transition to this component when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.<br>Test all the transitions in the <a href="#transitions">Transitions</a> example.',titleClass:"Applies a custom CSS class to the dialog's title.",contentClass:"Applies a custom CSS class to the dialog's content.",dialogClass:"Applies a custom CSS class to the dialog container.",overlayColor:'Provide a custom background color for the dialog background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',color:'Applies a text color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on the dialog. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the dialog background overlay."},b={title:{description:'The dialog uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The dialog content."},actions:{description:'The dialog uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},y={input:"Emitted on dialog close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on dialog close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on dialog close.",closed:"Emitted after the dialog is completely closed (after the closing animation)."},x={data:()=>({propsDescs:w,slots:b}),computed:{props(){return a.props},events(){return a.emits.reduce((e,o)=>(e[o]={description:y[o]||""})&&e,{})}}},r={};var _=l(x,h,f,!1,k,null,null,null);function k(e){for(let o in r)this[o]=r[o]}var C=function(){return _.exports}(),q=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("main",[t("ui-component-title",[e._v("w-dialog")]),t("examples"),t("api")],1)},$=[];const O={components:{Examples:v,Api:C}},c={};var S=l(O,q,$,!1,T,null,null,null);function T(e){for(let o in c)this[o]=c[o]}var F=function(){return S.exports}();export{F as default};
