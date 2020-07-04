<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-overlay]

  p.
    By default the overlay has a #[span.code 0.3] opacity with a black color and a z-index
    of #[span.code 500].#[br]
    It is very easy to overrides these defaults via CSS, but you can also pass them as
    parameters to the #[span.code w-overlay].

  h2 Overlay with custom opacity and control on #[span.code persistent]
  P When the overlay is persistent, it will not close on click and on escape key.
  p When persistent is set to false and by default, the escape key will also close the overlay.
  w-flex.mt-4(wrap :gutter="12")
    w-button(bg-color="primary" dark @click="showOverlay = true") Show overlay

    w-divider.my-3(vertical color="grey-lighter-4")
    .w-flex.column.no-grow
      .heading Options
      div
        w-button.mr-2(
          color="primary"
          bg-color="blue-lighter-5"
          :class="persistent ? 'pr-4' : ''"
          @click="persistent = !persistent")
          .code.primary :persistent="{{ persistent }}"
        w-button(
          color="primary"
          bg-color="blue-lighter-5"
          @click="persistentNoAnimation = !persistentNoAnimation"
          :disabled="!persistent")
          .code.primary :persistent-no-animation="{{ persistentNoAnimation }}"
      w-input.mt-2.align-self-start(
        v-model="opacity"
        outline
        type="number"
        label="Overlay opacity"
        label-position="left"
        step="0.1"
        min="0"
        max="1")

  h2 Overlay with custom background color
  w-button.mr-2(bg-color="primary" dark @click="showBlueOverlay = true") Show a blue overlay

  w-overlay.w-flex.align-center.justify-center(
    v-model="showOverlay"
    :persistent="persistent"
    :persistent-no-animation="persistentNoAnimation"
    :opacity="opacity")
    w-button(bg-color="primary" lg dark @click="showOverlay = false")
      w-icon.mr-2 wi-cross
      | Hide overlay
  w-overlay.w-flex.align-center.justify-center(v-model="showBlueOverlay" bg-color="rgba(35, 71, 129, 0.4)")
    w-button(bg-color="primary" lg dark @click="showBlueOverlay = false")
      w-icon.mr-2 wi-cross
      | Hide overlay
</template>

<script>
export default {
  data: () => ({
    showOverlay: false,
    showBlueOverlay: false,
    opacity: 0.3,
    persistent: false,
    persistentNoAnimation: false
  })
}
</script>

<style lang="scss">

</style>
