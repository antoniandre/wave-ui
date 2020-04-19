<template lang="pug">
div
  h1 Buttons
  h2 Default
  w-btn.ma-1(color="secondary" x-small) x-small
  w-btn.ma-1(color="secondary" small) small
  w-btn.ma-1(color="secondary" medium) medium
  w-btn.ma-1(color="secondary" large) large
  w-btn.ma-1(color="secondary" x-large) x-large
  w-btn.ma-1(color="secondary" disabled) disabled
  h2 Dark
  w-btn.ma-1(color="primary" dark x-small) x-small
  w-btn.ma-1(color="primary" dark small) small
  w-btn.ma-1(color="primary" dark medium) medium
  w-btn.ma-1(color="primary" dark large) large
  w-btn.ma-1(color="primary" dark x-large) x-large
  w-btn.ma-1(color="primary" dark disabled) disabled
  h2 Outline
  w-btn.ma-1(color="primary" outline x-small) x-small
  w-btn.ma-1(color="primary" outline small) small
  w-btn.ma-1(color="primary" outline medium) medium
  w-btn.ma-1(color="primary" outline large) large
  w-btn.ma-1(color="primary" outline x-large) x-large
  w-btn.ma-1(color="primary" outline disabled) disabled
  h2 Text
  w-btn.ma-1(color="primary" text x-small) x-small
  w-btn.ma-1(color="primary" text small) small
  w-btn.ma-1(color="primary" text medium) medium
  w-btn.ma-1(color="primary" text large) large
  w-btn.ma-1(color="primary" text x-large) x-large
  w-btn.ma-1(color="primary" text disabled) disabled
  h2 Shadow &amp; colors
  w-btn.ma-1(color="success" shadow) success
  w-btn.ma-1(color="error" shadow) error
  w-btn.ma-1(color="warning" shadow) warning
  w-btn.ma-1(color="info" shadow) info
  h2 Round &amp; tile
  w-btn.ma-1(color="primary" dark round) round
  w-btn.ma-1.mr-6(color="secondary" round) round
  w-btn.ma-1(color="primary" dark tile) tile
  w-btn.ma-1.mr-6(color="secondary" tile) tile
  h2 Icons &amp; mixed content
  w-btn.ma-1(color="error" round icon="ion-md-close")
  w-btn.ma-1.mr-6(color="success" round icon="ion-md-checkmark")
  w-btn.ma-1(color="error")
    w-icon.mr-1 ion-md-close
    | Cancel
  w-btn.ma-1(color="success")
    w-icon.mr-1 ion-md-checkmark
    | Save
  h2 Loading
  w-btn.ma-1(color="primary" dark :loading="buttonLoading" @click="buttonDoLoading")
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