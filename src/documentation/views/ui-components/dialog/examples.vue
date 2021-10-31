<template lang="pug">
div
  title-link(h2) Global demo
  p This dialog contains some basic options for the w-dialog.
  example(content-class="pt5")
    w-button.px4(@click="dialog1.show = true") Open dialog
    w-dialog(
      v-model="dialog1.show"
      :fullscreen="dialog1.fullscreen"
      :width="dialog1.width"
      :persistent="dialog1.persistent"
      :persistent-no-animation="dialog1.persistentNoAnimation"
      title-class="primary-light1--bg white")
      template(#title)
        w-icon.mr2 mdi mdi-tune
        | Control panel
      w-checkbox.d-flex.mt2(v-model="dialog1.fullscreen" label="Fullscreen")
      w-checkbox.d-flex.mt2(v-model="dialog1.persistent" label="Persistent (try to click outside)")
      w-checkbox.d-flex.mt2(
        v-model="dialog1.persistentNoAnimation"
        :disabled="!dialog1.persistent"
        label="Persistent with no animation")
      .w-flex.mt6.no-grow
        span.mr2 Width:
        w-radios(
          v-model="dialog1.width"
          :items="[{ value: 300, label: '300px' }, { value: 500, label: '500px' }]"
          inline)
      .mt4.mb-2.grey-light1.
        The #[span.code.grey-light1 width] prop is called so for simplicity, but it internally translates to
        a #[span.code.grey-light1 max-width] to fit on small screens.

      template(#actions)
        .spacer
        w-button(@click="dialog1.show = false") Close
    template(#pug).
      w-button.px4(@click="dialog.show = true") Open dialog

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
          | The &#35;[code width] prop is called so for simplicity, but it internally translates to
          | a &#35;[code max-width] to fit on small screens.

        template(#actions)
          .spacer
          w-button(@click="dialog.show = false") Close
    template(#html).
      &lt;w-button class="px4" @click="dialog.show = true"&gt;
        Open dialog
      &lt;/w-button&gt;

      &lt;w-dialog
        v-model="dialog.show"
        :fullscreen="dialog.fullscreen"
        :width="dialog.width"
        :persistent="dialog.persistent"
        :persistent-no-animation="dialog.persistentNoAnimation"
        title-class="primary-light1--bg white"&gt;
        &lt;template #title&gt;
          &lt;w-icon class="mr2"&gt;mdi mdi-tune&lt;/w-icon&gt;
          Control panel
        &lt;/template&gt;

        &lt;w-checkbox
          class="d-flex mt2"
          v-model="dialog.fullscreen"
          label="Fullscreen"&gt;
        &lt;/w-checkbox&gt;
        &lt;w-checkbox
          class="d-flex mt2"
          v-model="dialog.persistent"
          label="Persistent (try to click outside)"&gt;
        &lt;/w-checkbox&gt;
        &lt;w-checkbox
          class="d-flex mt2"
          v-model="dialog.persistentNoAnimation"
          :disabled="!dialog.persistent"
          label="Persistent with no animation"&gt;
        &lt;/w-checkbox&gt;

        &lt;div class="w-flex mt6 no-grow"&gt;
          &lt;span class="mr2"&gt;Width:&lt;/span&gt;
          &lt;w-radios
            v-model="dialog.width"
            :items="[{ value: 300, label: '300px' }, { value: 500, label: '500px' }]"
            inline /&gt;
        &lt;/div&gt;

        &lt;template #actions&gt;
          &lt;div class="spacer" /&gt;
          &lt;w-button @click="dialog.show = false"&gt;Close&lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-dialog&gt;
    template(#js).
      data: () => ({
        dialog: {
          show: false,
          fullscreen: false,
          persistent: false,
          persistentNoAnimation: false,
          width: 300
        }
      })

  title-link(h2) Basic
  example(content-class="pt5")
    w-button.px4(@click="dialog0.show = true") Open dialog
    w-dialog(v-model="dialog0.show" title="Dialog title").
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
      perspiciatis repellendus. Sunt!
    template(#pug).
      w-button.px4(@click="showDialog = true") Open dialog

      w-dialog(v-model="showDialog" title="Dialog title").
        Lorem ipsum dolor sit amet consectetur adipisicing elit.&#35;[br]
        Unde eum non necessitatibus quia corporis odio numquam sequi iusto
        voluptatum delectus? Excepturi minus iste, provident non totam itaque
        sed ut labore?&#35;[br]&#35;[br]
        Nihil delectus distinctio eveniet quis qui tempora sit,
        illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
        cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
        sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
        dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
        impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
        beatae ex nihil.&#35;[br]
        Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
        labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
        porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
        perspiciatis repellendus. Sunt!
    template(#html).
      &lt;w-button class="px4" @click="showDialog = true"&gt;
        Open dialog
      &lt;/w-button&gt;

      &lt;w-dialog
        v-model="showDialog"
        title="Dialog title"&gt;
        Lorem ipsum dolor sit amet consectetur adipisicing elit.&lt;br /&gt;
        Unde eum non necessitatibus quia corporis odio numquam sequi iusto
        voluptatum delectus? Excepturi minus iste, provident non totam itaque
        sed ut labore?&lt;br /&gt;&lt;br /&gt;
        Nihil delectus distinctio eveniet quis qui tempora sit,
        illum a reprehenderit esse ex ipsam deleniti optio accusantium saepe
        cupiditate doloremque dignissimos aliquam aperiam earum soluta pariatur
        sapiente, provident sequi? Itaque!Soluta itaque sed, obcaecati ipsum eum
        dolores ratione quis hic adipisci atque dolor laudantium quisquam ea vitae
        impedit fuga reprehenderit pariatur, reiciendis autem blanditiis excepturi
        beatae ex nihil.&lt;br /&gt;
        Incidunt, eos? Magnam quaerat enim eum, non fuga excepturi
        labore nemo voluptates necessitatibus esse amet voluptatibus modi deleniti
        porro officiis ut fugit quidem corporis itaque possimus commodi sint unde
        perspiciatis repellendus. Sunt!
      &lt;w-dialog&gt;
    template(#js).
      data: () => ({
        showDialog: false
      })

  title-link(h2) Persistent prompt dialog
  example(content-class="pt5")
    w-button.px4(@click="dialog2.show = true") Open dialog
    w-dialog(v-model="dialog2.show" title="Terms and conditions" persistent :width="550")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      | odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
      | Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
      | dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
      | aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
      template(#actions)
        .spacer
        w-button.mr2(@click="dialog2.show = false" bg-color="error") I disagree
        w-button(@click="dialog2.show = false" bg-color="success") I agree
    template(#pug).
      w-button.px4(@click="dialog.show = true") Open dialog

      w-dialog(
        v-model="dialog.show"
        title="Terms and conditions"
        persistent
        :width="550")
        | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        | odit dolor labore eveniet at vel sequi nostrum.&#35;[br]&#35;[br]
        | Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
        | dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
        | aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
        template(#actions)
          .spacer
          w-button.mr2(@click="dialog.show = false" bg-color="error") I disagree
          w-button(@click="dialog.show = false" bg-color="success") I agree
    template(#html).
      &lt;w-button class="px4" @click="dialog.show = true"&gt;
        Open dialog
      &lt;/w-button&gt;

      &lt;w-dialog
        v-model="dialog.show"
        title="Terms and conditions"
        persistent
        :width="550"&gt;
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.&lt;br /&gt;&lt;br /&gt;
        Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
        dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
        aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

        &lt;template #actions&gt;
          &lt;div class="spacer" /&gt;
          &lt;w-button
            class="mr2"
            @click="dialog.show = false"
            bg-color="error"&gt;
            I disagree
          &lt;/w-button&gt;
          &lt;w-button
            @click="dialog.show = false"
            bg-color="success"&gt;
            I agree
          &lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-dialog&gt;
    template(#js).
      data: () => ({
        dialog: { show: false }
      })

  title-link(h2) Nesting
  p It is possible to open a dialog inside a dialog.
  example(content-class="pt5")
    w-button.px4(@click="dialog3.show = true") Open dialog
    w-dialog(v-model="dialog3.show" :width="600" title="Dialog 1" content-class="text-center")
      p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
      w-button.mt6(@click="dialog4.show = true") Open second dialog

      template(#actions)
        .spacer
        w-button(@click="dialog3.show = false" bg-color="error") Close

    w-dialog(v-model="dialog4.show" :width="250" title="Dialog 2" content-class="text-center")
      w-button.my6(@click="dialog4.show = false" bg-color="error") Close
    template(#pug).
      w-button.px4(@click="dialog1.show = true") Open dialog

      w-dialog(v-model="dialog1.show" :width="600" title="Dialog 1" content-class="text-center")
        p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
        w-button.mt6(@click="dialog2.show = true") Open second dialog

        template(#actions)
          .spacer
          w-button(@click="dialog1.show = false" bg-color="error") Close

      w-dialog(v-model="dialog2.show" :width="250" title="Dialog 2" content-class="text-center")
        w-button.my6(@click="dialog2.show = false" bg-color="error") Close
    template(#html).
      &lt;w-button
        class="px4"
        @click="dialog1.show = true"&gt;
        Open dialog
      &lt;/w-button&gt;

      &lt;w-dialog
        v-model="dialog1.show"
        :width="600"
        title="Dialog 1"&gt;
        &lt;p&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit...&lt;/p&gt;
        &lt;w-button
          class="mt6"
          @click="dialog2.show = true"&gt;
          Open second dialog
        &lt;/w-button&gt;

        &lt;template #actions&gt;
          &lt;div class="spacer" /&gt;
          &lt;w-button
            @click="dialog1.show = false"
            bg-color="error"&gt;
            Close
          &lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-dialog&gt;

      &lt;w-dialog
        v-model="dialog2.show"
        :width="250"
        title="Dialog 2"&gt;
        &lt;w-button class="my6"
          @click="dialog2.show = false"
          bg-color="error"&gt;
          Close
        &lt;/w-button&gt;
      &lt;/w-dialog&gt;
    template(#js).
      data: () => ({
        dialog1: { show: false },
        dialog2: { show: false }
      })

  title-link(h2) Transitions
  p.
    To change the default transition you can use the #[code transition] prop and provide one of
    the following transition name.
  example
    .w-flex
      w-button.px4.mr6(@click="dialog5.show = true") Open dialog
      .w-flex.wrap
        div.ma2
          .title3.mb2 Transition names
          w-radios(
            v-model="dialog5.transition"
            :items="transitions"
            item-value-key="label"
            @input="dialog5.fullscreen = null")
            template(#label="{ item }")
              code {{ item.label }}
        div.ma2
          .title3.mb2 Slide transitions for fullscreen
          w-radios(
            v-model="dialog5.transition"
            :items="transitionsForFullscreen"
            item-value-key="label"
            @input="dialog5.fullscreen = null")
            template(#label="{ item }")
              code {{ item.label }}
          w-checkbox.mt2(
            :model-value="dialog5.fullscreen === null ? fullscreenTransition : dialog5.fullscreen"
            @input="dialog5.fullscreen = $event"
            label="Fullscreen dialog")
    w-dialog(
      v-model="dialog5.show"
      :width="(dialog5.fullscreen === null ? fullscreenTransition : dialog5.fullscreen) ? 0 : 400"
      :fullscreen="dialog5.fullscreen === null ? fullscreenTransition : dialog5.fullscreen"
      :transition="dialog5.transition"
      title="Dialog with custom transition"
      content-class="w-flex align-center justify-center")
      w-button.my6(@click="dialog5.show = false" bg-color="error") Close
    template(#pug).
      .w-flex
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
                code {{ '\{\{ item.label \}\}' }}

          div.ma2
            .title3.mb2 Slide transitions for fullscreen
            w-radios(
              v-model="dialog.transition"
              :items="transitionsForFullscreen"
              item-value-key="label"
              @input="dialog.fullscreen = null")
              template(#label="{ item }")
                code {{ '\{\{ item.label \}\}' }}
            w-checkbox.mt2(
              :model-value="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
              @input="dialog.fullscreen = $event"
              label="Fullscreen dialog")

      w-dialog(
        v-model="dialog.show"
        :width="&amp;#40;dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen&amp;#41; ? 0 : 400"
        :fullscreen="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
        :transition="dialog.transition"
        title="Dialog with custom transition"
        content-class="w-flex align-center justify-center")
        w-button.my6(@click="dialog.show = false" bg-color="error") Close
    template(#html).
      &lt;div class="w-flex"&gt;
        &lt;w-button
          class="px4 mr6"
          @click="dialog.show = true"&gt;
          Open dialog
        &lt;/w-button&gt;

        &lt;div class="w-flex wrap"&gt;
          &lt;div class="ma2"&gt;
            &lt;div class="title3 mb2"&gt;Transition names&lt;/div&gt;
            &lt;w-radios
              v-model="dialog.transition"
              :items="transitions"
              item-value-key="label"
              @input="dialog.fullscreen = null"&gt;
              &lt;template #label="{ item }"&gt;
                &lt;code&gt;{{ '\{\{ item.label \}\}' }}&lt;/code&gt;
              &lt;/template&gt;
            &lt;/w-radios&gt;
          &lt;/div&gt;

          &lt;div class="ma2"&gt;
            &lt;div class="title3 mb2"&gt;
              Slide transitions for fullscreen
            &lt;/div&gt;
            &lt;w-radios
              v-model="dialog.transition"
              :items="transitionsForFullscreen"
              item-value-key="label"
              @input="dialog.fullscreen = null"&gt;
              &lt;template #label="{ item }"&gt;
                &lt;code&gt;{{ '\{\{ item.label \}\}' }}&lt;/code&gt;
              &lt;/template&gt;
            &lt;/w-radios&gt;
            &lt;w-checkbox
              class="mt2"
              :model-value="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
              @input="dialog.fullscreen = $event"
              label="Fullscreen dialog"&gt;
            &lt;/w-checkbox&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;w-dialog
        v-model="dialog.show"
        :width="(dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen) ? 0 : 400"
        :fullscreen="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"
        :transition="dialog.transition"
        title="Dialog with custom transition"
        content-class="w-flex align-center justify-center"&gt;
        &lt;w-button class="my6"
          @click="dialog.show = false"
          bg-color="error"&gt;
          Close
        &lt;/w-button&gt;
      &lt;/w-dialog&gt;
    template(#js).
      data: () => ({
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

  title-link(h2) Overlay opacity and color
  p.
    The overlay can be customized via the #[code overlay-opacity] - if you use the default color
    - and #[code overlay-color] props.
  example(content-class="pt5")
    w-button.px4(@click="dialog6.show = true") Open control panel
    w-dialog(
      v-model="dialog6.show"
      :width="500"
      :overlay-opacity="dialog6.overlayChoice === 'opacity' && dialog6.overlayOpacity"
      :overlay-color="(dialog6.overlayChoice !== 'opacity' && dialog6.overlayChoice) || ''")
      template(#title)
        w-icon.mr2 mdi mdi-tune
        | Control panel
      w-radio.d-flex.mt1(v-model="dialog6.overlayChoice" return-value="opacity")
        | Overlay opacity
        input.ml2(v-model="dialog6.overlayOpacity" type="number" step="0.1" min="0" max="1")
      w-radio.d-flex.mt1(v-model="dialog6.overlayChoice" return-value="rgba(35, 71, 129, 0.5)") Custom color: transparent blue
      w-radio.d-flex.mt1(v-model="dialog6.overlayChoice" return-value="#e91e63") Custom color: opaque pink
      w-radio.d-flex.mt1(v-model="dialog6.overlayChoice" return-value="transparent") Custom color: transparent
      template(#actions)
        .spacer
        w-button(@click="dialog6.show = false" bg-color="error") Close
    template(#pug).
      w-button.px4(@click="dialog.show = true") Open control panel

      w-dialog(
        v-model="dialog.show"
        :width="500"
        :overlay-opacity="dialog.overlayChoice === 'opacity' && dialog.overlayOpacity"
        :overlay-color="&amp;#40;dialog.overlayChoice !== 'opacity' && dialog.overlayChoice&amp;#41; || ''")
        template(#title)
          w-icon.mr2 mdi mdi-tune
          | Control panel

        w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="opacity")
          | Overlay opacity
          input.ml2(v-model="dialog.overlayOpacity" type="number" step="0.1" min="0" max="1")
        w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="rgba&amp;#40;35, 71, 129, 0.5&amp;#41;") Custom color: transparent blue
        w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="#e91e63") Custom color: opaque pink
        w-radio.d-flex.mt1(v-model="dialog.overlayChoice" return-value="transparent") Custom color: transparent

        template(#actions)
          .spacer
          w-button(@click="dialog.show = false" bg-color="error") Close
    template(#html).
      &lt;w-button
        class="px4"
        @click="dialog.show = true"&gt;
        Open control panel
      &lt;/w-button&gt;

      &lt;w-dialog
        v-model="dialog.show"
        :width="500"
        :overlay-opacity="dialog.overlayChoice === 'opacity' &amp;&amp; dialog.overlayOpacity"
        :overlay-color="(dialog.overlayChoice !== 'opacity' &amp;&amp; dialog.overlayChoice) || ''"&gt;
        &lt;template #title&gt;
          &lt;w-icon class="mr2"&gt;mdi mdi-tune&lt;/w-icon&gt;
          Control panel
        &lt;/template&gt;

        &lt;w-radio
          class="d-flex mt1"
          v-model="dialog.overlayChoice"
          return-value="opacity"&gt;
          Overlay opacity
          &lt;input
            class="ml2"
            v-model="dialog.overlayOpacity"
            type="number"
            step="0.1" min="0"
            max="1" /&gt;
        &lt;/w-radio&gt;
        &lt;w-radio
          class="d-flex mt1"
          v-model="dialog.overlayChoice"
          return-value="rgba(35, 71, 129, 0.5)"&gt;
          Custom color: transparent blue
        &lt;/w-radio&gt;
        &lt;w-radio
          class="d-flex mt1"
          v-model="dialog.overlayChoice"
          return-value="#e91e63"&gt;
          Custom color: opaque pink
        &lt;/w-radio&gt;
        &lt;w-radio
          class="d-flex mt1"
          v-model="dialog.overlayChoice"
          return-value="transparent"&gt;
          Custom color: transparent
        &lt;/w-radio&gt;

        &lt;template #actions&gt;
          &lt;div class="spacer" /&gt;
          &lt;w-button
            @click="dialog.show = false"
            bg-color="error"&gt;
            Close
          &lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-dialog&gt;
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
    dialog0: {
      show: false
    },
    dialog1: {
      show: false,
      fullscreen: false,
      persistent: false,
      persistentNoAnimation: false,
      width: 300
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
      return this.transitionsForFullscreen.map(item => item.label).includes(this.dialog5.transition)
    }
  }
}
</script>
