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
  w-button.mr-3(@click="showDialog2 = !showDialog2") Open dialog

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
</template>

<script>
export default {
  data: () => ({
    showDialog: false,
    showDialog2: false,
    fullscreen: false,
    persistent: false,
    persistentNoAnimation: false,
    maxWidth: 200
  })
}
</script>

<style lang="scss">

</style>