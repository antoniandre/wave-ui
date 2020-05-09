<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-dialog]
  w-button(@click="showDialog = !showDialog") Open dialog
  w-checkbox(v-model="fullscreen" label="Fullscreen")
  w-radio(v-model="fullscreen" label="Fullscreen")
  p {{fullscreen}}

  w-dialog(v-model="showDialog" :fullscreen="fullscreen")
    template(v-slot:title) Title
    div Content
    template(v-slot:actions)
      .spacer
      w-button(@click="showDialog = false") Close

</template>

<script>
export default {
  data: () => ({
    showDialog: false,
    fullscreen: false
  })
}
</script>

<style lang="scss">

</style>