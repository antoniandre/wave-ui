<template lang="pug">
div.ovh
  title-link.mt4.code(h1) w-overlay

  p.
    By default the overlay has a #[span.code 0.3] opacity with a black color and a z-index
    of #[span.code 500].#[br]
    It is very easy to overrides these defaults via CSS, but you can also pass them as
    parameters to the #[span.code w-overlay].

  title-link(h2) Overlay with custom opacity and control on #[span.code persistent]
  P When the overlay is persistent, it will not close on click and on escape key.
  p When persistent is set to false and by default, the escape key will also close the overlay.
  example
    w-flex(wrap)
      w-button(bg-color="primary" dark @click="showOverlay = true") Show overlay

      w-divider.mx6(vertical color="grey-light4")
      div
        .title4 Options
        w-button.mr2(
          bg-color="primary-light1"
          :class="persistent ? 'pr4' : ''"
          @click="persistent = !persistent"
          sm
          dark)
          .code.white :persistent="{{ persistent }}"
        w-button(
          bg-color="primary-light1"
          @click="persistentNoAnimation = !persistentNoAnimation"
          :disabled="!persistent"
          sm
          dark)
          .code.white :persistent-no-animation="{{ persistentNoAnimation }}"
        w-input.mt2.d-block(
          v-model="opacity"
          outline
          type="number"
          label="Overlay opacity"
          label-position="left"
          step="0.1"
          min="0"
          max="1")
    w-overlay(
      v-model="showOverlay"
      :persistent="persistent"
      :persistent-no-animation="persistentNoAnimation"
      :opacity="opacity")
      w-button(bg-color="primary" lg dark @click="showOverlay = false")
        w-icon.mr2 wi-cross
        | Hide overlay
    template(#pug).
      w-flex(wrap)
        w-button(bg-color="primary" dark @click="showOverlay = true") Show overlay

        w-divider.mx6(vertical color="grey-light4")
        div
          .title4 Options
          w-button.mr2(
            bg-color="primary-light1"
            :class="persistent ? 'pr4' : ''"
            @click="persistent = !persistent"
            sm
            dark)
            .code.white :persistent="{{ persistent }}"
          w-button(
            bg-color="primary-light1"
            @click="persistentNoAnimation = !persistentNoAnimation"
            :disabled="!persistent"
            sm
            dark)
            .code.white :persistent-no-animation="{{ persistentNoAnimation }}"
          w-input.mt2.d-block(
            v-model="opacity"
            outline
            type="number"
            label="Overlay opacity"
            label-position="left"
            step="0.1"
            min="0"
            max="1")
      w-overlay(
        v-model="showOverlay"
        :persistent="persistent"
        :persistent-no-animation="persistentNoAnimation"
        :opacity="opacity")
        w-button(bg-color="primary" lg dark @click="showOverlay = false")
          w-icon.mr2 wi-cross
          | Hide overlay
    template(#js).
      data: () => ({
        showOverlay: false,
        opacity: 0.3,
        persistent: false,
        persistentNoAnimation: false
      })

  title-link(h2) Overlay with custom background color
  example(content-class="w-flex align-center")
    w-button(bg-color="primary" dark @click="showBlueOverlay = true") Show a blue overlay

    w-overlay(v-model="showBlueOverlay" bg-color="rgba(35, 71, 129, 0.4)")
      w-button(bg-color="primary" lg dark @click="showBlueOverlay = false")
        w-icon.mr2 wi-cross
        | Hide overlay
    template(#pug).
      w-button(bg-color="primary" dark @click="showBlueOverlay = true") Show a blue overlay

      w-overlay(v-model="showBlueOverlay" bg-color="rgba(35, 71, 129, 0.4)")
        w-button(bg-color="primary" lg dark @click="showBlueOverlay = false")
          w-icon.mr2 wi-cross
          | Hide overlay
    template(#js).
      data: () => ({
        showBlueOverlay: false
      })
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
