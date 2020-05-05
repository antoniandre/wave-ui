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
  w-button.ma-1(bg-color="secondary" xs) extra small
  w-button.ma-1(bg-color="secondary" sm) small
  w-button.ma-1(bg-color="secondary" md) medium
  w-button.ma-1(bg-color="secondary" lg) large
  w-button.ma-1(bg-color="secondary" xl) extra large
  w-button.ma-1(bg-color="secondary" disabled) disabled

  h2 Dark
  w-button.ma-1(bg-color="primary" color="white" xs) extra small
  w-button.ma-1(bg-color="primary" color="white" sm) small
  w-button.ma-1(bg-color="primary" color="white" md) medium
  w-button.ma-1(bg-color="primary" color="white" lg) large
  w-button.ma-1(bg-color="primary" color="white" xl) extra large
  w-button.ma-1(bg-color="primary" color="white" disabled) disabled

  h3 Mix background and text colors
  w-button.ma-1(bg-color="primary" color="yellow" xs) extra small
  w-button.ma-1(bg-color="primary" color="yellow" sm) small
  w-button.ma-1(bg-color="primary" color="yellow" md) medium
  w-button.ma-1(bg-color="primary" color="yellow" lg) large
  w-button.ma-1(bg-color="primary" color="yellow" xl) extra large
  w-button.ma-1(bg-color="primary" color="yellow" disabled) disabled

  h2 Outline
  w-button.ma-1(color="primary" outline xs) extra small
  w-button.ma-1(color="primary" outline sm) small
  w-button.ma-1(color="primary" outline md) medium
  w-button.ma-1(color="primary" outline lg) large
  w-button.ma-1(color="primary" outline xl) extra large
  w-button.ma-1(color="primary" outline disabled) disabled

  h2 Text
  w-button.ma-1(color="primary" text xs) extra small
  w-button.ma-1(color="primary" text sm) small
  w-button.ma-1(color="primary" text md) medium
  w-button.ma-1(color="primary" text lg) large
  w-button.ma-1(color="primary" text xl) extra large
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
  w-button.ma-1(bg-color="error" round icon="wi-cross")
  w-button.ma-1.mr-6(bg-color="success" round icon="wi-check")
  w-button.ma-1(bg-color="error")
    w-icon.mr-1 wi-cross
    | Cancel
  w-button.ma-1(bg-color="success")
    w-icon.mr-1 wi-check
    | Save

  h2 Loading spinner &amp; custom loader
  w-button.ma-1(bg-color="primary" dark :loading="button1loading" @click="buttonDoLoading(1)")
    w-icon.mr-1 wi-check
    | Save
  w-button.ma-1.px-4(bg-color="primary" dark :loading="button2loading" @click="buttonDoLoading(2)")
    w-icon.mr-1 wi-check
    | Save
    template(v-slot:loading) Loading...

  h2 Links
  w-button.ma-1(bg-color="primary" dark to="/")
    | Getting started
    w-icon.ml-1 wi-chevron-right
  w-button.ma-1(bg-color="primary" dark to="https://github.com/antoniandre/wave-ui")
    | Github
    w-icon.ml-1 wi-chevron-right
</template>

<script>
export default {
  data: () => ({
    button1loading: false,
    button2loading: false
  }),
  methods: {
    buttonDoLoading (id) {
      this[`button${id}loading`] = true
      setTimeout(() => (this[`button${id}loading`] = false), 3000)
    }
  }
}
</script>

<style lang="scss">

</style>