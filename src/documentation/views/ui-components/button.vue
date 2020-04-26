<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-button]

  p.
    Setting colors on buttons is quite straightforword:
    a text color is set via the attribute #[code color], and
    a background color is set via the attribute #[code bg-color].#[br]
    This allows you to easily mix a background color with a different
    text color of your choice.

  h2 Default
  w-button.ma-1(bg-color="secondary" x-small) x-small
  w-button.ma-1(bg-color="secondary" small) small
  w-button.ma-1(bg-color="secondary" medium) medium
  w-button.ma-1(bg-color="secondary" large) large
  w-button.ma-1(bg-color="secondary" x-large) x-large
  w-button.ma-1(bg-color="secondary" disabled) disabled
  h2 Dark
  w-button.ma-1(bg-color="primary" color="white" x-small) x-small
  w-button.ma-1(bg-color="primary" color="white" small) small
  w-button.ma-1(bg-color="primary" color="white" medium) medium
  w-button.ma-1(bg-color="primary" color="white" large) large
  w-button.ma-1(bg-color="primary" color="white" x-large) x-large
  w-button.ma-1(bg-color="primary" color="white" disabled) disabled
  h3 Mix background and text colors
  w-button.ma-1(bg-color="primary" color="yellow" x-small) x-small
  w-button.ma-1(bg-color="primary" color="yellow" small) small
  w-button.ma-1(bg-color="primary" color="yellow" medium) medium
  w-button.ma-1(bg-color="primary" color="yellow" large) large
  w-button.ma-1(bg-color="primary" color="yellow" x-large) x-large
  w-button.ma-1(bg-color="primary" color="yellow" disabled) disabled
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
  w-button.ma-1(bg-color="success" shadow) success
  w-button.ma-1(bg-color="error" shadow) error
  w-button.ma-1(bg-color="warning" shadow) warning
  w-button.ma-1(bg-color="info" shadow) info
  h2 Round &amp; tile
  w-button.ma-1(bg-color="primary" dark round) round
  w-button.ma-1.mr-6(bg-color="secondary" round) round
  w-button.ma-1(bg-color="primary" dark tile) tile
  w-button.ma-1.mr-6(bg-color="secondary" tile) tile
  h2 Icons &amp; mixed content
  w-button.ma-1(bg-color="error" round icon="ion-md-close")
  w-button.ma-1.mr-6(bg-color="success" round icon="ion-md-checkmark")
  w-button.ma-1(bg-color="error")
    w-icon.mr-1 ion-md-close
    | Cancel
  w-button.ma-1(bg-color="success")
    w-icon.mr-1 ion-md-checkmark
    | Save
  h2 Loading
  w-button.ma-1(bg-color="primary" dark :loading="buttonLoading" @click="buttonDoLoading")
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