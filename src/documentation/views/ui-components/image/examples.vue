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
    let you put a spinner while the image is loading, and display the image all at once with an
    animation (like fade-in) when ready.#[br]
    It allows you to set a fallback image in case the provided image might be unfound (convenient with
    dynamic sources).#[br]
    If ever the no image is found in the end, w-image will handle the error gracefully and will emit a
    #[code @error] event containing the error.

  title-link(h2) Default
  p The image is loaded full-size.
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/favicon.png`")
    template(#pug).

  title-link(h2) Given dimensions
  example(content-class="text-center w-flex justify-space-around")
    w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")
    w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")
    template(#pug).

  title-link(h2) Loading spinner
  p.
    This image is quite big, so that you have time to see the spinner while loading.
    Refresh the page if you haven't seen it!
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :width="500" :height="250")
    template(#pug).

  title-link(h2) Fallback
  p.
    The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent
    background will be there instead preventing the browser's broken image logo.#[br]
    You can also provide a custom fallback image to display if the image cannot load.#[br]
    For instance, in a e-boutique you may try to load the image of an item without knowing if this item
    has an available image or not.
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/broken.png`" :fallback="`${baseUrl}images/not-found.jpg`")
    template(#pug).
</template>

<script>
export default {
  data: () => ({
    baseUrl: process.env.BASE_URL
  }),

  methods: {
    // loadImage (img) {
    //   setTimeout(() => img.src = this.src, 3000)
    // }
  }
}
</script>
