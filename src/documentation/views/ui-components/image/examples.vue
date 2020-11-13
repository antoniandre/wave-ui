<template lang="pug">
div
  title-link(h2) Why using w-image and not a simple &lt;img&gt;
  .title3 A simple &lt;img&gt;
  p.
    will display when loaded, and will take the dimensions of the actual image.#[br]
    When the image has a big file size, it will be loaded in chunks, and the image will be displayed
    while loading. The image will be truncated until completely loaded. The image may even be loaded
    by layers of colors: black and white first, then layers of RGB one by one.#[br]#[br]
    If ever it fails to load a broken image icon will display instead (different on every browser).#[br]
  .title3 The w-image
  p.
    let you put a spinner while the image is loading, and display the image all at once with an
    animation (like fade-in) when ready.#[br]
    It allows you to set a fallback image if the image itself might have no source (convenient with
    dynamic sources).

  title-link(h2) Default
  example
    w-image(src="/favicon.png")
    template(#pug).
</template>

<script>
export default {

}
</script>
