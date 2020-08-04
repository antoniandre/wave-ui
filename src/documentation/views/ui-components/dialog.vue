<template lang="pug">
div
  title-link.mt4.code(h1) w-dialog
  p This dialog contains some basic options to toggle on and off.

  example(content-class="pt5")
    w-button.px4.mr6.shrink(@click="dialog1.show = true" bg-color="primary" dark) Open dialog
    w-dialog(
      v-model="dialog1.show"
      :fullscreen="dialog1.fullscreen"
      :max-width="dialog1.maxWidth"
      :persistent="dialog1.persistent"
      :persistent-no-animation="dialog1.persistentNoAnimation"
      title-class="primary-light1--bg white")
      template(#title)
        w-icon.mr2 mdi mdi-tune
        | Control panel
      w-checkbox.mt2(v-model="dialog1.fullscreen" label="Fullscreen")
      w-checkbox.mt2(v-model="dialog1.persistent" label="Persistent (try to click outside)")
      w-checkbox.mt2(
        v-model="dialog1.persistentNoAnimation"
        :disabled="!dialog1.persistent"
        label="Persistent with no animation")
      .w-flex.mt6.no-grow
        span.mr2 Max width:
        w-radios(
          v-model="dialog1.maxWidth"
          :items="[{ value: 300, label: '300px' }, { value: 500, label: '500px' }]"
          inline)
      template(#actions)
        .spacer
        w-button(@click="dialog1.show = false") Close
    template(#pug).
      w-button.px4.mr6.shrink(@click="dialog.show = true" bg-color="primary" dark) Open dialog
      w-dialog(
        v-model="dialog.show"
        :fullscreen="dialog.fullscreen"
        :max-width="dialog.maxWidth"
        :persistent="dialog.persistent"
        :persistent-no-animation="dialog.persistentNoAnimation"
        title-class="primary-light1--bg white")
        template(#title="")
          w-icon.mr2 mdi mdi-tune
          | Control panel
        w-checkbox.mt2(v-model="dialog.fullscreen" label="Fullscreen")
        w-checkbox.mt2(v-model="dialog.persistent" label="Persistent (try to click outside)")
        w-checkbox.mt2(
          v-model="dialog.persistentNoAnimation"
          :disabled="!dialog.persistent"
          label="Persistent with no animation")
        .w-flex.mt6.no-grow
          span.mr2 Max width:
          w-radios(
            v-model="dialog.maxWidth"
            :items="[{ value: 300, label: '300px' }, { value: 500, label: '500px' }]"
            inline)
        template(#actions="")
          .spacer
          w-button(@click="dialog.show = false") Close
    template(#js).
      data: () => ({
        dialog: {
          show: false,
          fullscreen: false,
          persistent: false,
          persistentNoAnimation: false,
          maxWidth: 300
        }
      })

  title-link(h2) Persistent prompt dialog
  example(content-class="pt5")
    w-button.px4(@click="dialog2.show = true" bg-color="primary" dark) Open dialog
    w-dialog(v-model="dialog2.show" persistent :max-width="550")
      template(#title) Terms and conditions
      p.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
        Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
        dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
        aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
      template(#actions)
        .spacer
        w-button.mr2(@click="dialog2.show = false" bg-color="error") I disagree
        w-button(@click="dialog2.show = false" bg-color="success") I agree
    template(#pug).
      w-button.px4(@click="dialog.show = true" bg-color="primary" dark) Open dialog
      w-dialog(v-model="dialog.show" persistent :max-width="550")
        template(#title="") Terms and conditions
        p.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.#[="#[br]#[br]"]
          Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
          dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
          aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
        template(#actions="")
          .spacer
          w-button.mr2(@click="dialog.show = false" bg-color="error") I disagree
          w-button(@click="dialog.show = false" bg-color="success") I agree
    template(#js).
      data: () => ({
        dialog: { show: false }
      })

  title-link(h2) Nesting
  example(content-class="pt5")
    w-button.px4(@click="dialog3.show = true" bg-color="primary" dark) Open dialog
    w-dialog(v-model="dialog3.show" :max-width="600")
      template(#title) Dialog 1
      p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
      w-button.mt6(@click="dialog4.show = true" bg-color="indigo-light1" dark) Open dialog 2

      template(#actions)
        .spacer
        w-button(@click="dialog3.show = false" bg-color="error" dark) Close

    w-dialog(v-model="dialog4.show" :max-width="250")
      template(#title) Dialog 2
      w-button.my6(@click="dialog4.show = false" bg-color="error" dark) Close
    template(#pug).
      w-button.px4(@click="dialog1.show = true" bg-color="primary" dark) Open dialog
      w-dialog(v-model="dialog1.show" :max-width="600")
        template(#title="") Dialog 1
        p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
        w-button.mt6(@click="dialog2.show = true" bg-color="indigo-light1" dark) Open dialog 2

        template(#actions="")
          .spacer
          w-button(@click="dialog1.show = false" bg-color="error" dark) Close

      w-dialog(v-model="dialog2.show" :max-width="250")
        template(#title="") Dialog 2
        w-button.my6(@click="dialog2.show = false" bg-color="error" dark) Close
    template(#js).
      data: () => ({
        dialog1: { show: false },
        dialog2: { show: false }
      })

  title-link(h2) Transitions
  example
    .w-flex
      w-button.px4.mr6(@click="dialog5.show = true" bg-color="primary" dark) Open dialog
      .w-flex.wrap
        div.ma2
          .title3.mb2 Transition names
          w-radios(
            v-model="dialog5.transition"
            :items="transitions"
            item-value="label"
            @change="dialog5.fullscreen = null")
            template(#label="{ item }")
              code {{ item.label }}
        div.ma2
          .title3.mb2 Slide transitions for fullscreen
          w-radios(
            v-model="dialog5.transition"
            :items="transitionsForFullscreen"
            item-value="label"
            @change="dialog5.fullscreen = null")
            template(#label="{ item }")
              code {{ item.label }}
          w-checkbox.mt2(
            :value="dialog5.fullscreen === null ? fullscreenTransition : dialog5.fullscreen"
            @change="dialog5.fullscreen = $event"
            label="Fullscreen dialog")
    w-dialog(
      v-model="dialog5.show"
      :max-width="(dialog5.fullscreen === null ? fullscreenTransition : dialog5.fullscreen) ? 0 : 400"
      :fullscreen="dialog5.fullscreen === null ? fullscreenTransition : dialog5.fullscreen"
      :transition="dialog5.transition")
      template(#title) Dialog with custom transition
      .w-flex.fill-height.align-center.justify-center
        w-button.my6(@click="dialog5.show = false" bg-color="error" dark) Close
    template(#pug).
      .w-flex
        w-button.px4.mr6(@click="dialog.show = true" bg-color="primary" dark) Open dialog
        .w-flex.wrap
          div.ma2
            .title3.mb2 Transition names
            w-radios(
              v-model="dialog.transition"
              :items="transitions"
              item-value="label"
              @change="dialog.fullscreen = null")
              template(#label="{ item }")
                code {{ '\{\{ item.label \}\}' }}
          div.ma2
            .title3.mb2 Slide transitions for fullscreen
            w-radios(
              v-model="dialog.transition"
              :items="transitionsForFullscreen"
              item-value="label"
              @change="dialog.fullscreen = null")
              template(#label="{ item }")
                code {{ '\{\{ item.label \}\}' }}
            w-checkbox.mt2(
              :value="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
              @change="dialog.fullscreen = $event"
              label="Fullscreen dialog")
      w-dialog(
        v-model="dialog.show"
        :max-width="(dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen) ? 0 : 400"
        :fullscreen="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
        :transition="dialog.transition")
        template(#title="") Dialog with custom transition
        .w-flex.fill-height.align-center.justify-center
          w-button.my6(@click="dialog.show = false" bg-color="error" dark) Close
    template(#js).
      data: () => ({
        dialog: {
          show: false,
          fullscreen: false,
          transition: 'fade'
        },
        transitions: [
          { label: 'fade' },
          { label: 'slide-fade-top' },
          { label: 'slide-fade-bottom' },
          { label: 'slide-fade-left' },
          { label: 'slide-fade-right' },
          { label: 'scale' },
          { label: 'scale-fade' },
          { label: 'bounce' }
        ],
        transitionsForFullscreen: [
          { label: 'slide-top' },
          { label: 'slide-bottom' },
          { label: 'slide-left' },
          { label: 'slide-right' }
        ]
      }),

      computed: {
        fullscreenTransition () {
          return this.transitionsForFullscreen.map(item => item.label).includes(this.dialog.transition)
        }
      }

  title-link(h2) Overlay opacity and color
  example(content-class="pt5")
    w-button.px4(@click="dialog6.show = true" bg-color="primary" dark) Open control panel
    w-dialog(
      v-model="dialog6.show"
      :max-width="500"
      :overlay-opacity="dialog6.overlayChoice === 'opacity' && dialog6.overlayOpacity"
      :overlay-color="dialog6.overlayChoice !== 'opacity' && dialog6.overlayChoice")
      template(#title)
        w-icon.mr2 mdi mdi-tune
        | Control panel
      w-radio.mt1(v-model="dialog6.overlayChoice" return-value="opacity")
        | Overlay opacity
        input.ml2(v-model="dialog6.overlayOpacity" type="number" step="0.1" min="0" max="1")
      w-radio.mt1(v-model="dialog6.overlayChoice" return-value="rgba(35, 71, 129, 0.5)") Custom color: transparent blue
      w-radio.mt1(v-model="dialog6.overlayChoice" return-value="#e91e63") Custom color: opaque pink
      w-radio.mt1(v-model="dialog6.overlayChoice" return-value="transparent") Custom color: transparent
      template(#actions)
        .spacer
        w-button(@click="dialog6.show = false" bg-color="error" dark) Close
    template(#pug).
      w-button.px4(@click="dialog.show = true" bg-color="primary" dark) Open control panel
      w-dialog(
        v-model="dialog.show"
        :max-width="500"
        :overlay-opacity="dialog.overlayChoice === 'opacity' &amp;&amp; dialog.overlayOpacity"
        :overlay-color="dialog.overlayChoice !== 'opacity' &amp;&amp; dialog.overlayChoice")
        template(#title="")
          w-icon.mr2 mdi mdi-tune
          | Control panel
        w-radio.mt1(v-model="dialog.overlayChoice" return-value="opacity")
          | Overlay opacity
          input.ml2(v-model="dialog.overlayOpacity" type="number" step="0.1" min="0" max="1")
        w-radio.mt1(v-model="dialog.overlayChoice" return-value="rgba(35, 71, 129, 0.5)") Custom color: transparent blue
        w-radio.mt1(v-model="dialog.overlayChoice" return-value="#e91e63") Custom color: opaque pink
        w-radio.mt1(v-model="dialog.overlayChoice" return-value="transparent") Custom color: transparent
        template(#actions="")
          .spacer
          w-button(@click="dialog.show = false" bg-color="error" dark) Close
    template(#js).
      data: () => ({
        dialog: {
          show: false,
          overlayOpacity: 0.3,
          overlayChoice: 'opacity'
        }
      })
</template>

<script>
export default {
  data: () => ({
    dialog1: {
      show: false,
      fullscreen: false,
      persistent: false,
      persistentNoAnimation: false,
      maxWidth: 300
    },
    dialog2: { show: false },
    dialog3: { show: false },
    dialog4: { show: false },
    dialog5: {
      show: false,
      fullscreen: false,
      transition: 'fade'
    },
    dialog6: {
      show: false,
      overlayOpacity: 0.3,
      overlayChoice: 'opacity'
    },
    transitions: [
      { label: 'fade' },
      { label: 'slide-fade-top' },
      { label: 'slide-fade-bottom' },
      { label: 'slide-fade-left' },
      { label: 'slide-fade-right' },
      { label: 'scale' },
      { label: 'scale-fade' },
      { label: 'bounce' }
    ],
    transitionsForFullscreen: [
      { label: 'slide-top' },
      { label: 'slide-bottom' },
      { label: 'slide-left' },
      { label: 'slide-right' }
    ]
  }),

  computed: {
    fullscreenTransition () {
      return this.transitionsForFullscreen.map(item => item.label).includes(this.dialog5.transition)
    }
  }
}
</script>
