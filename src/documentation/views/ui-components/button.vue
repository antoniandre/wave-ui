<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-button]

  h2 Default
  w-button.ma-1(color="secondary" x-small) x-small
  w-button.ma-1(color="secondary" small) small
  w-button.ma-1(color="secondary" medium) medium
  w-button.ma-1(color="secondary" large) large
  w-button.ma-1(color="secondary" x-large) x-large
  w-button.ma-1(color="secondary" disabled) disabled
  h2 Dark
  w-button.ma-1(color="primary" dark x-small) x-small
  w-button.ma-1(color="primary" dark small) small
  w-button.ma-1(color="primary" dark medium) medium
  w-button.ma-1(color="primary" dark large) large
  w-button.ma-1(color="primary" dark x-large) x-large
  w-button.ma-1(color="primary" dark disabled) disabled
  h2 Outline
  w-button.ma-1(color="primary" outline x-small) x-small
  w-button.ma-1(color="primary" outline small) small
  w-button.ma-1(color="primary" outline medium) medium
  w-button.ma-1(color="primary" outline large) large
  w-button.ma-1(color="primary" outline x-large) x-large
  w-button.ma-1(color="primary" outline disabled) disabled
  h2 Text
  w-button.ma-1(color="primary" text x-small) x-small
  w-button.ma-1(color="primary" text small) small
  w-button.ma-1(color="primary" text medium) medium
  w-button.ma-1(color="primary" text large) large
  w-button.ma-1(color="primary" text x-large) x-large
  w-button.ma-1(color="primary" text disabled) disabled
  h2 Shadow &amp; colors
  w-button.ma-1(color="success" shadow) success
  w-button.ma-1(color="error" shadow) error
  w-button.ma-1(color="warning" shadow) warning
  w-button.ma-1(color="info" shadow) info
  h2 Round &amp; tile
  w-button.ma-1(color="primary" dark round) round
  w-button.ma-1.mr-6(color="secondary" round) round
  w-button.ma-1(color="primary" dark tile) tile
  w-button.ma-1.mr-6(color="secondary" tile) tile
  h2 Icons &amp; mixed content
  w-button.ma-1(color="error" round icon="ion-md-close")
  w-button.ma-1.mr-6(color="success" round icon="ion-md-checkmark")
  w-button.ma-1(color="error")
    w-icon.mr-1 ion-md-close
    | Cancel
  w-button.ma-1(color="success")
    w-icon.mr-1 ion-md-checkmark
    | Save
  h2 Loading
  w-button.ma-1(color="primary" dark :loading="buttonLoading" @click="buttonDoLoading")
    w-icon.mr-1 ion-md-checkmark
    | Save
</template>

<script>
export default {
  data: () => ({
    buttonLoading: false
  }),
  methods: {
    buttonDoLoading () {
      this.buttonLoading = true
      setTimeout(() => (this.buttonLoading = false), 3000)
    }
  }
}
</script>

<style lang="scss">

</style>