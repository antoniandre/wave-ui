<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-dialog]
  w-button.mr-3(@click="showDialog = !showDialog") Open dialog
  w-checkbox.mr-3(v-model="fullscreen" label="Fullscreen")
  w-checkbox.mr-3(v-model="persistent" label="Persistent")
  w-checkbox(v-model="persistentNoAnimation" label="Persistent no animation")

  w-dialog(
    v-model="showDialog"
    :fullscreen="fullscreen"
    :persistent="persistent"
    :persistent-no-animation="persistentNoAnimation")
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
    fullscreen: false,
    persistent: false,
    persistentNoAnimation: true
  })
}
</script>

<style lang="scss">

</style>