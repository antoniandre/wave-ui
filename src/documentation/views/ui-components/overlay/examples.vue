<template lang="pug">
div
  p.
    By default the overlay has a #[span.code 0.3] opacity with a black color and a z-index
    of #[span.code 500].#[br]
    It is very easy to overrides these defaults via CSS, but you can also pass them as
    parameters to the #[span.code w-overlay].

  title-link(h2) Overlay with custom opacity and control on #[span.code persistent]
  p When the overlay is persistent, it will not close on click and on escape key.
  p When persistent is set to false and by default, the escape key will also close the overlay.
  example
    w-flex(wrap)
      w-button.my2(bg-color="primary" dark @click="showOverlay = true") Show overlay

      w-divider.mx6(vertical color="grey-light4")
      div
        .title4 Options
        w-button.d-block.mr2(
          bg-color="primary-light1"
          :class="persistent ? 'pr4' : ''"
          @click="persistent = !persistent"
          sm
          dark)
          .code.white :persistent="{{ persistent }}"
        w-button.d-block.mt2(
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
    //- template(#pug).
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
    template(#html).
      &lt;w-flex wrap&gt;
        &lt;w-button bg-color="primary" dark @click="showOverlay = true"&gt;
          Show overlay
        &lt;/w-button&gt;

        &lt;w-divider
          class="mx6"
          vertical
          color="grey-light4"&gt;
        &lt;/w-divider&gt;

        &lt;div&gt;
          &lt;div class="title4"&gt;Options&lt;/div&gt;
          &lt;w-button
            class="mr2"
            bg-color="primary-light1"
            :class="persistent ? 'pr4' : ''"
            @click="persistent = !persistent"
            sm
            dark&gt;
            :persistent="{{ persistent }}"
          &lt;/w-button&gt;

          &lt;w-button
            bg-color="primary-light1"
            @click="persistentNoAnimation = !persistentNoAnimation"
            :disabled="!persistent"
            sm
            dark&gt;
            :persistent-no-animation="{{ persistentNoAnimation }}"
          &lt;/w-button&gt;

          &lt;w-input
            class="mt2 d-block"
            v-model="opacity"
            outline
            type="number"
            label="Overlay opacity"
            label-position="left"
            step="0.1"
            min="0"
            max="1"&gt;
          &lt;/w-input&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;w-overlay
        v-model="showOverlay"
        :persistent="persistent"
        :persistent-no-animation="persistentNoAnimation"
        :opacity="opacity"&gt;
        &lt;w-button
          bg-color="primary"
          lg
          dark
          @click="showOverlay = false"&gt;
          &lt;w-icon class="mr2"&gt;wi-cross&lt;/w-icon&gt;
          Hide overlay
        &lt;/w-button&gt;
      &lt;/w-overlay&gt;
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
    //- template(#pug).
      w-button(bg-color="primary" dark @click="showOverlay = true") Show a blue overlay

      w-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")
        w-button(bg-color="primary" lg dark @click="showOverlay = false")
          w-icon.mr2 wi-cross
          | Hide overlay
    template(#html).
      &lt;w-button
        bg-color="primary"
        dark
        @click="showOverlay = true"&gt;
        Show a blue overlay
      &lt;/w-button&gt;

      &lt;w-overlay
        v-model="showOverlay"
        bg-color="rgba(35, 71, 129, 0.4)"&gt;
        &lt;w-button
          bg-color="primary"
          lg
          dark
          @click="showOverlay = false"&gt;
          &lt;w-icon class="mr2"&gt;wi-cross&lt;/w-icon&gt;
          Hide overlay
        &lt;/w-button&gt;
      &lt;/w-overlay&gt;
    template(#js).
      data: () => ({
        showOverlay: false
      })

  title-link(h2) CSS backdrop filter
  p.
    The backdrop filter is
    #[a(href="https://caniuse.com/css-backdrop-filter" target="_blank") not supported on all the browsers]
    yet but very nice.
  ssh-pre(language="css").
    .w-overlay {backdrop-filter: blur(10px);}
  w-button(bg-color="primary" dark @click="showBlurBackdropOverlay = true") Show a blur backdrop

  w-overlay.blur-backdrop(v-model="showBlurBackdropOverlay")
    w-button(bg-color="primary" lg dark @click="showBlurBackdropOverlay = false")
      w-icon.mr2 wi-cross
      | Hide overlay
</template>

<script>
export default {
  data: () => ({
    showOverlay: false,
    showBlueOverlay: false,
    showBlurBackdropOverlay: false,
    opacity: 0.3,
    persistent: false,
    persistentNoAnimation: false
  })
}
</script>

<style lang="scss">
.blur-backdrop {backdrop-filter: blur(10px);}
</style>
