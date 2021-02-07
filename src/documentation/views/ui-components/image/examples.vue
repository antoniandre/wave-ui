<template lang="pug">
div
  title-link(h2) Why using w-image and not a simple &lt;img&gt;
  .title3 A simple &lt;img&gt;
  p.
    will display when loaded, and will take the dimensions of the actual image.#[br]
    When the image has a large file size, it will be loaded in chunks, and the image will be displayed
    truncated until completely loaded.#[br]#[br]
    If ever it fails to load a broken image icon will display instead (different on every browser).#[br]
  .title3 The w-image
  p.
    can show a spinner while the image is loading, and display the image all at once with a nice
    animation (like fade-in) when the iamge is ready.#[br]
    It also allows you to set a fallback image in case the provided image might be unfound (convenient with
    dynamic sources).#[br]
    If ever no image is found, #[strong.code w-image] will handle the error gracefully and will emit a
    #[code @error] event containing the error. A blank transparent image will be displayed in place of the
    image itself. So that, nothing looks broken.

  title-link(h2) Default
  p With no given width, height or ratio, the image is loaded full-size.
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/favicon.png`")
    template(#pug).
      w-image(:src="`${baseUrl}images/favicon.png`")
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use process.env.BASE_URL
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Given dimensions
  example(content-class="text-center w-flex justify-space-around")
    w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")
    w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")
    template(#pug).
      w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use process.env.BASE_URL
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Image ratio
  p.
    You may want to have a responsive image. By setting an image ratio (height / width) and a width
    to 100% the image will always keep the ratio while resizing.#[br]
    If no #[code width] or #[code height] is set but a #[code ratio] is given, the #[code width] will
    be set to 100%.
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="233 / 1000")
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="233 / 1000")
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use process.env.BASE_URL
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2 slug="using-the-img-tag") Using the &lt;img&gt; tag
  p.
    You can choose which tag the #[strong.code w-image] should use.#[br]
    If you use an #[code img] tag, the image will behave exactly like a standard image.
    The biggest benefit of that, is that you can set a #[code width] or #[code height] only, keep a ratio,
    and apply a #[code max-width] or #[code max-height] on top of that so if the image would be bigger
    than the container it would still apply the ratio on the constrained image.

  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="650" tag="img" style="max-width: 100%")
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="650" tag="img" style="max-width: 100%")
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use process.env.BASE_URL
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Loading spinner
  p.
    This image is very big, so that you have time to see the spinner while loading.
    Refresh the page if you haven't seen it!
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :width="500" :height="250")
    template(#pug).
      w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :width="500" :height="250")
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use process.env.BASE_URL
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })
  alert(tip).
    #[strong Dev notes:] disabling the browser cache will prevent you from seeing the transition.#[br]
    The reason for it is that the image first loads in the #[strong.code w-image] component, then
    once it's fully loaded, the image src is filled (or background url) and the image would load again
    if you disable the cache. On big images, you would then see a truncated image until completely
    loaded, just like a standard &lt;img&gt;.

  title-link(h2) Transitions
  p.
    Once the image is fully loaded, it will display in one piece with a fade transition by default.
    You can customize the transition.
  example
    .w-flex.wrap.justify-center.align-center
      div.mr4.my2
        .title3.mb2 Transition names
        w-radios(
          v-model="img.transition"
          :items="transitions"
          item-value-key="label")
          template(#label="{ item }")
            code {{ item.label }}
        w-button.mt2(@click="reload") Reload image
      w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")
    template(#pug).
      .w-flex.wrap.justify-center.align-center
        div.mr4.my2
          .title3.mb2 Transition names
          w-radios(
            v-model="img.transition"
            :items="transitions"
            item-value-key="label")
            template(#label="{ item }")
              code {{ '\{\{ item.label \}\}' }}
          w-button.mt2(@click="reload") Reload image
        w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")
    template(#js).
      data: () => ({
        img: {
          src: `https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png`,
          transition: 'fade'
        },
        transitions: [
          { label: 'fade' },
          { label: 'slide-fade-up' },
          { label: 'slide-fade-down' },
          { label: 'slide-fade-left' },
          { label: 'slide-fade-right' },
          { label: 'scale' },
          { label: 'scale-fade' },
          { label: 'bounce' },
          { label: 'twist' },
          { label: 'none', value: '' }
        ]
      }),
      methods: {
        reload () {
          this.img.src = ''
          setTimeout(() => this.img.src = this.img.initialSrc, 500)
        }
      }
  alert(tip).
    #[strong Dev notes:] disabling the browser cache will prevent you from seeing the transition.#[br]
    The reason for it is that the image first loads in the #[strong.code w-image] component, then
    once it's fully loaded, the image src is filled (or background url) and the image would load again
    if you disable the cache. On big images, you would then see a truncated image until completely
    loaded, just like a standard &lt;img&gt;.

  title-link(h2) Fallback
  p.
    The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent
    background will be there instead preventing the browser's broken image logo.#[br]
    You can also provide a custom fallback image to display if the image cannot load.#[br]
    For instance, in a e-boutique you may try to load the image of an item without knowing if this item
    has an available image or not.#[br]#[br]
    Thanks to the #[code error] emitted event, you can trigger a specific action, such as displaying an
    error message like in this example. But this is optional, and without the custom alert nothing would
    look broken when you provide a valid fallback image!
  example(content-class="text-center")
    w-image(
      :src="`${baseUrl}images/broken.png`"
      :fallback="`${baseUrl}images/not-found.jpg`"
      @error="showError = true")
    w-alert(v-if="showError" error) Oops. The image could not load!
    template(#pug).
      w-image(:src="`${baseUrl}images/broken.png`" :fallback="`${baseUrl}images/not-found.jpg`")
      w-alert(v-if="showError" error) Oops. The image could not load!
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use process.env.BASE_URL
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/',
        showError: false
      })

  title-link(h2) Lazy
  p.
    By using the lazy attribute, it is possible to load the image only when it is in the viewport.#[br]
    Wave UI internally uses an IntersectionObserver and will only start loading the image when it is
    visible.
  example
    //- ?v1 to prevent cache from reloading the image without request.
    w-image(:src="`${baseUrl}images/spirit-island--alberta.png?v1`" lazy :ratio="2550 / 5098")
    template(#pug).
      w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="2550 / 5098")
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use process.env.BASE_URL
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2 slug="content") Content - via default slot
  p.
    In some cases, it can be convenient to have some content on top of the image.#[br]
    By default the content will be horizontally and vertically centered, but you could easily align it
    at the bottom left for instance, with the attribute #[code content-class="align-end justify-start pa2"].
  example
    w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="2550 / 5098")
      span.title1.pink Wave UI
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="2550 / 5098")
        span.title1.pink Wave UI
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use process.env.BASE_URL
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })
</template>

<script>
export default {
  data: () => ({
    baseUrl: process.env.BASE_URL,
    img: {
      initialSrc: `${process.env.BASE_URL}images/spirit-island--alberta.png`,
      src: `${process.env.BASE_URL}images/spirit-island--alberta.png`,
      transition: 'fade'
    },
    transitions: [
      { label: 'fade' },
      { label: 'slide-fade-up' },
      { label: 'slide-fade-down' },
      { label: 'slide-fade-left' },
      { label: 'slide-fade-right' },
      { label: 'scale' },
      { label: 'scale-fade' },
      { label: 'bounce' },
      { label: 'twist' },
      { label: 'none', value: '' }
    ],
    showError: false
  }),

  methods: {
    reload () {
      this.img.src = ''
      setTimeout(() => (this.img.src = this.img.initialSrc), 500)
    }
  }
}
</script>
