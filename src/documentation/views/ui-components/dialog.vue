<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-dialog]
  .layout
    w-button.px-4.mr-6.shrink(@click="showDialog = !showDialog" bg-color="primary" dark) Open dialog
    .layout.column
      .subtitle.mb-2 Options
      w-checkbox.mr-3(v-model="fullscreen" label="Fullscreen")
      w-checkbox.mr-3(v-model="persistent" label="Persistent")
      w-checkbox(v-model="persistentNoAnimation" label="Persistent with no animation")
      w-radios(
        v-model="maxWidth"
        :items="[{ value: 200, label: 'max-width: 200px' }, { value: 400, label: 'max-width: 400px' }]"
        inline)

  w-dialog(
    v-model="showDialog"
    :fullscreen="fullscreen"
    :max-width="!fullscreen && maxWidth || 0"
    :persistent="persistent"
    :persistent-no-animation="persistentNoAnimation")
    template(v-slot:title) Title
    div Content
    template(v-slot:actions)
      .spacer
      w-button(@click="showDialog = false") Close

  h2 Persistent prompt dialog

  w-button.px-4(@click="showDialog2 = !showDialog2" bg-color="primary" dark) Open dialog
  w-dialog(v-model="showDialog2" persistent :max-width="550")
    template(v-slot:title) Terms and conditions
    p.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
      Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
      dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
      aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
    template(v-slot:actions)
      .spacer
      w-button.mr-2(@click="showDialog2 = false" bg-color="error") I disagree
      w-button(@click="showDialog2 = false" bg-color="success") I agree

  h2 Nesting

  w-button.px-4(@click="showDialog3 = !showDialog3" bg-color="primary" dark) Open dialog
  w-dialog(v-model="showDialog3" :max-width="600")
    template(v-slot:title) Dialog 1
    p Lorem ipsum, dolor sit amet consectetur adipisicing elit...
    w-button.mt-6(@click="showDialog4 = !showDialog4" bg-color="indigo-lighten-1" dark) Open dialog 2

    template(v-slot:actions)
      .spacer
      w-button(@click="showDialog3 = false" bg-color="error" dark) Close

  w-dialog(v-model="showDialog4" :max-width="250")
    template(v-slot:title) Dialog 2
    w-button.my-6(@click="showDialog4 = false" bg-color="error" dark) Close

  h2 Animations

  w-button(@click="showDialog5 = !showDialog5" bg-color="primary" dark) Open dialog from bottom
  w-dialog(v-model="showDialog5" :max-width="400")
    template(v-slot:title) Dialog opening from the bottom
    w-button.my-6(@click="showDialog5 = false" bg-color="error" dark) Close
</template>

<script>
export default {
  data: () => ({
    showDialog: false,
    showDialog2: false,
    showDialog3: false,
    showDialog4: false,
    showDialog5: false,
    fullscreen: false,
    persistent: false,
    persistentNoAnimation: false,
    maxWidth: 200
  })
}
</script>
