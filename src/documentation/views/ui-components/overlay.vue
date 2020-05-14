<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-overlay]

  p.
    By default the overlay has a #[span.code 0.3] opacity with a black color and a z-index
    of #[span.code 500].#[br]
    It is very easy to overrides these defaults via CSS, but you can also pass them as
    parameters to the #[span.code w-overlay].

  h2 Overlay with custom opacity and control on #[span.code closeOnClick]
  p When closing on overlay click is allowed, the escape key will also close the overlay.
  .layout.wrap.align-center.mb-2
    w-button.mr-2(bg-color="primary" dark @click="showOverlay = true") Show overlay
    w-button.mr-2(
      :bg-color="closeOnClick ? 'green' : 'red'"
      :class="closeOnClick ? 'px-4' : 'px-1'"
      dark
      @click="closeOnClick = !closeOnClick") {{ closeOnClick ? 'Closing' : 'Not closing' }} on overlay click
    | Overlay opacity
    input.ml-2(v-model="opacity" type="number" step="0.1" min="0" max="1")

  h2 Overlay with custom background color
  w-button.mr-2(bg-color="primary" dark @click="showBlueOverlay = true") Show a blue overlay

  w-overlay.layout.align-center.justify-center(
    v-model="showOverlay"
    :close-on-click="closeOnClick"
    :opacity="opacity")
    w-button(bg-color="primary" lg dark @click="showOverlay = false")
      w-icon.mr-2 wi-cross
      | Hide overlay
  w-overlay.layout.align-center.justify-center(v-model="showBlueOverlay" bg-color="rgba(35, 71, 129, 0.4)")
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
    closeOnClick: true
  })
}
</script>

<style lang="scss">

</style>
