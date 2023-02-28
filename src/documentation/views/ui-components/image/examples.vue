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
  p.
    With no given width, height or ratio, the image will be responsive up to its full-size.#[br]
    This means a width of 100% is added, as well as the image computed ratio (to preserve it when
    scaling down), and a max width equal to the real image width.
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/favicon.png`")
    .caption.text-center Real size: 200x200.
    template(#pug).
      w-image(:src="`${baseUrl}images/favicon.png`")
    template(#html).
      &lt;w-image :src="`${baseUrl}images/favicon.png`"&gt;&lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Given dimensions
  example(content-class="text-center w-flex justify-space-around wrap")
    div.mr5
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")
      .caption.text-center Real size: 1900x443. Given size: 150x150.
    div
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")
      .caption.text-center Real size: 1900x443. Given size: 500x150.
    template(#pug).
      w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")
    template(#html).
      &lt;w-image
        class="mr5"
        :src="`${baseUrl}images/japanese-wave.png`"
        :width="150"
        :height="150"&gt;
      &lt;/w-image&gt;
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :width="500"
        :height="150"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Image ratio
  p.
    Similar to the default behavior (when no width, no height and no ratio are given), the image
    will be scaling with its container preserving its aspect ratio. The only difference is that
    it will also scale up beyond its real size.
  p Let's see a few cases:

  title-link(h3) Image ratio equal to the exact width and height of the image
  p Most common case. The image is visible in full, and scales with its container with preserved ratio.
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443")
    .caption.text-center Real size: 1900x443. Given ratio: 1900 / 443.
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="1900 / 443"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h3) Setting a different ratio than the actual image one
  p.mb0.
    In this case the image will be cropped on purpose, but still scaling with its container with
    preserved ratio.
  .caption The border around the images are added to vizualize the edges of the images.
  example(content-class="text-center")
    div
      w-image.bd1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")
      .caption.text-center Real size: 1900x443. Given ratio: 1000 / 443.
    div
      w-image.bd1.mt6(:src="`${baseUrl}images/japanese-wave.png`" :ratio="3000 / 443")
      .caption.text-center Real size: 1900x443. Given ratio: 3000 / 443.
    template(#pug).
      w-image.bd1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")
      w-image.bd1.mt6(:src="`${baseUrl}images/japanese-wave.png`" :ratio="3000 / 443")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="1000 / 443"
        class="bd1"&gt;
      &lt;/w-image&gt;
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="3000 / 443"
        class="bd1 mt6"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h3) Ratio with a set width and/or height
  example(content-class="text-center")
    w-flex(align-center wrap gap="4")
      .grow
        p Set width
        w-image.bd1(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" width="100")
        .caption.text-center Real size: 200x200.#[br]Given ratio: 200 / 200, given width: 100.
      .grow
        p Set height
        w-image.bd1(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" height="100")
        .caption.text-center Real size: 200x200.#[br]Given ratio: 200 / 200, given height: 100.
      .grow
        p Set width and height (pointless)
        w-image.bd1(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" width="100" height="100")
        .caption.text-center Real size: 200x200.#[br]Given ratio: 200 / 200, given size: 100x100.
    template(#pug).
      p Set width
      w-image(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" width="100")
      p Set height
      w-image(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" height="100")
      p p Set width and height (pointless)
      w-image(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" width="100" height="100")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/favicon.png`"
        :ratio="200 / 200"
        width="100"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h3) Ratio with a set max width
  w-image(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" max-width="300")
  title-link(h3) Ratio with a set max height
  w-image(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" max-height="100")
  p In this case the image will be cropped
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200")
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="1000 / 443"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
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
    w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%" tag="img" style="max-width: 700px")
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%" tag="img" style="max-width: 700px")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        width="100%"
        tag="img"
        style="max-width: 700px"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Figure with or without caption
  p.
    If you provide a caption, the w-image tag will be using a native HTML #[span.code &lt;figure&gt;]
    tag along with #[span.code &lt;figcaption&gt;].
  example(content-class="text-center")
    w-image(
      :src="`${baseUrl}images/japanese-wave.png`"
      max-width="700"
      caption="The Great Wave Off Kanagawa - Hokusai")
    .caption Real size: 1900x443. Given max-width: 700.
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%" tag="img" style="max-width: 700px")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        width="100%"
        tag="img"
        style="max-width: 700px"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Loading spinner
  p.
    This image is very big, so that you have time to see the spinner while loading.
    Refresh the page if you haven't seen it!
  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :ratio="5098 / 2550")
    .caption Real size: 5098x2550. Given ratio: 5098 / 2550.
    template(#pug).
      w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :ratio="5098 / 2550")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/spirit-island--alberta.png`"
        :ratio="5098 / 2550"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
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
      div
        w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")
        .caption Real size: 5098x2550. Given size: 500x250.
    template(#pug).
      w-flex(wrap justify-center align-center)
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
    template(#html).
      &lt;w-flex wrap justify-center align-center&gt;
        &lt;div class="mr4 my2"&gt;
          &lt;div class="title3 mb2"&gt;
            Transition names
          &lt;/div&gt;
          &lt;w-radios
            v-model="img.transition"
            :items="transitions"
            item-value-key="label"&gt;
            &lt;template #label="{ item }"&gt;
              &lt;code&gt;
                {{ '\{\{ item.label \}\}' }}
              &lt;/code&gt;
            &lt;/template&gt;
          &lt;/w-radios&gt;
          &lt;w-button
            class="mt2"
            @click="reload"&gt;
            Reload image
          &lt;/w-button&gt;
        &lt;/div&gt;

        &lt;w-image
          :src="img.src"
          :width="500"
          :height="250"
          :transition="img.transition"&gt;
        &lt;/w-image&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        img: {
          initialSrc: 'https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png',
          src: 'https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png',
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
      w-image(
        :src="`${baseUrl}images/broken.png`"
        :fallback="`${baseUrl}images/not-found.jpg`"
        @error="showError = true")

      w-alert(v-if="showError" error) Oops. The image could not load!
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/broken.png`"
        :fallback="`${baseUrl}images/not-found.jpg`"
        @error="showError = true"&gt;
      &lt;/w-image&gt;

      &lt;w-alert
        v-if="showError"
        error&gt;
        Oops. The image could not load!
      &lt;/w-alert&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/',
        showError: false
      })

  title-link(h2) Lazy
  p.
    By using the lazy attribute, it is possible to load the image only when it is in the viewport.#[br]
    Wave UI internally uses an #[span.code IntersectionObserver] and will only start loading the image
    when it is visible.
  example
    //- ?v1 to prevent the image to load from cache for this example (image is used above).
    w-image(:src="`${baseUrl}images/spirit-island--alberta.png?v1`" lazy :ratio="2550 / 5098")
    .caption Real size: 5098x2550.
    template(#pug).
      w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="2550 / 5098")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/spirit-island--alberta.png`"
        lazy
        :ratio="2550 / 5098"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2 slug="content") Content - via default slot
  p.
    In some cases, it can be convenient to have some content on top of the image.#[br]
    By default the content will be horizontally and vertically centered, but you could easily align it
    at the bottom left for instance, with the #[code content-class] prop:
    #[code content-class="align-end justify-start pa2"].
  example
    w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="2550 / 5098")
      span.title1.pink Wave UI
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="2550 / 5098")
        span.title1.pink Wave UI
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="2550 / 5098"&gt;
        &lt;span class="title1 pink"&gt;Wave UI&lt;/span&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `{{ 'process' }}.env.BASE_URL`,
        // or with Vite, `{{ 'import' }}.meta.env.BASE_URL`,
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })
</template>

<script>
export default {
  data: () => ({
    baseUrl: import.meta.env.BASE_URL,
    img: {
      initialSrc: `${import.meta.env.BASE_URL}images/spirit-island--alberta.png`,
      src: `${import.meta.env.BASE_URL}images/spirit-island--alberta.png`,
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

<style>
.main-content--image {
  overflow: auto;
  margin-left: -20px;
  padding-left: 20px;
}
</style>
