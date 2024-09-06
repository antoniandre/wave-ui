<template lang="pug">
div
  title-link(h2) Why using w-image and not a simple &lt;img&gt;
  .w-card.w-flex.mdu-row.basis-zero.pa4.gap4
    div
      .title3 A simple &lt;img&gt;
      p.
        will display when loaded, and will take the dimensions of the actual image.#[br]
        When the image has a large file size, it will be loaded in chunks, and the image will be displayed
        truncated until completely loaded.#[br]#[br]
        If ever it fails to load, a broken image icon will display instead (different on every browser).#[br]#[br]
        Setting both a width and height could stretch the image and loose the aspect ratio.
        Which is IMHO, in most cases crappy except for repeated patterns.
    w-divider.no-grow.primary(:vertical="!$waveui.breakpoint.xs && !$waveui.breakpoint.sm") VS
    div
      .title3 The w-image
      p.
        can show a spinner while the image is loading, and display the image all at once with a nice
        animation (like fade-in) when the image is ready.#[br]#[br]
        If ever it fails to load, #[strong.code w-image] will handle the error gracefully, will emit a
        #[code @error] event containing the error, and a blank transparent image will be displayed in place of the
        image itself, so nothing looks broken.#[br]
        Or, you can also provide a fallback image for cases when the main image has a chance not to be found (like with
        dynamic src).#[br]#[br]
        Setting both a width and height will never loose the aspect ratio: it will auto-crop if needed.

  alert(tip)
    .title2.mt0.lh1 The #[strong.code w-image] in a nutshell
    ul
      li You can set a width or a height or both. That's all you need.
      li The width and height may be fixed (e.g. in pixel) or adaptive (e.g. in percentage).
      li The ratio is not needed, but can be provided to override the intrinsic ratio and crop the image (keeping it responsive if it was).
      li You can choose a tag to use for the image, but don't need to. It can be a &lt;span&gt; (default) or &lt;img&gt;.
      li Providing a caption, will use the native HTML &lt;figure&gt; and &lt;figcaption&gt; tags.

  w-divider.ma12
  p.size--lg Now here comes a ton of concrete examples.

  title-link(h2) Default
  p.
    With no given width, height or ratio, the image will be responsive, up to its full-size.#[br]
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
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })
  alert(info)
    p.
      In the #[code src] attribute, it's a good idea to use the #[code BASE_URL] environment variable to point to the
      public root path of your app if your image is in the #[code public/] folder.#[br]
      For instance, this documentation public root path is #[code https://antoniandre.github.io/wave-ui/], which is different
      from just #[code /] which would point to #[code https://antoniandre.github.io/].#[br]
    ul
      li With Vite, you can use #[code {{ 'import' }}.meta.env.BASE_URL] to refer to your public app root URL.
      li With Vue CLI or Webpack, you can also use #[code {{ 'process' }}.env.BASE_URL].

  title-link(h2) Given dimensions
  p
    strong You can set a width, a height, or both.#[br]
    | If the actual image is bigger than the given width or height, it will be cropped.#[br]
    | But if you prefer it to be resized maintaining the ratio, then you can set a ratio.

  title-link(h3) Given both fixed width and height
  p.
    In both examples the image will always have the same fixed size regardless of the viewport or
    constraints.#[br]
    The first example forces the width and height to 150x150, which is smaller than the actual picture
    size so it is cropping it (you can inspect with the dev tools).#[br]
    The second example sets a width and height of 500x150, which is also cropping it.
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
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h3) Given fixed width only
  p.
    If the width is all you provide, the real ratio of the image will be computed and used.
    In result, the image will have the given fixed width and will display in full: it will not be cropped
    and will not grow or shrink with constraints.
  example(content-class="text-center w-flex column")
    div
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="200")
      .caption.text-center Real size: 1900x443. Given size: width=200.
    div
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="400")
      .caption.text-center Real size: 1900x443. Given size: width=400.
    template(#pug).
      w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="200")

      w-image(:src="`${baseUrl}images/japanese-wave.png`" :width="400")
    template(#html).
      &lt;w-image
        class="mr5"
        :src="`${baseUrl}images/japanese-wave.png`"
        :width="200"&gt;
      &lt;/w-image&gt;

      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :width="400"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h3) Given fixed height only
  p.
    If the height is all you provide, the real ratio of the image will be computed and used.
    In result, the image will have the given fixed height and will display in full: it will not be cropped
    and will not grow or shrink with constraints.
  example(content-class="text-center w-flex column")
    div
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :height="70")
      .caption.text-center Real size: 1900x443. Given size: height=70.
    div
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :height="120")
      .caption.text-center Real size: 1900x443. Given size: height=120.
    template(#pug).
      w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :height="70")

      w-image(:src="`${baseUrl}images/japanese-wave.png`" :height="120")
    template(#html).
      &lt;w-image
        class="mr5"
        :src="`${baseUrl}images/japanese-wave.png`"
        :height="70"&gt;
      &lt;/w-image&gt;

      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :height="120"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h3) Relative width and/or height
  p.grey.mb0 When the width and/or height is adaptive to its container.
  div
    | The only thing needed is width or a height, and #[strong Wave UI] will compute the ratio so it
    | can grow or shrink with the container.
    ul
      li The first case is setting a width of 100% of the example container, so it will adapt. Very classic.
      li The second case is setting a height of 100% in a #[strong.code w-card] that is fixed to 100px height.
      li.
        The third case is setting a width of 30vw and a height of 10vh which will constrain the image
        in many possible ways which will likely crop horizontally or vertically when needed. Try
        resizing your browser width and height to observe the rendering!
  example(content-class="text-center w-flex column gap5")
    div
      w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%")
      .caption.text-center Real size: 1900x443. Given size: width=100%.

    div
      w-card(content-class="pa0" style="height: 100px")
        w-image(:src="`${baseUrl}images/japanese-wave.png`" height="100%")
      .caption.text-center Real size: 1900x443. Given size: height=100%.

    div
      w-image(:src="`${baseUrl}images/japanese-wave.png`" width="30vw" height="10vh")
      .caption.text-center Real size: 1900x443. Given size: width=30vw, height=10vh.
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%")

      w-card(content-class="pa0" style="height: 100px")
        w-image(:src="`${baseUrl}images/japanese-wave.png`" height="100%")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        width="100%"&gt;
      &lt;/w-image&gt;

      &lt;w-card content-class="pa0" style="height: 100px"&gt;
        &lt;w-image
          :src="`${baseUrl}images/japanese-wave.png`"
          height="100%"&gt;
        &lt;/w-image&gt;
      &lt;/w-card&gt;

      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        width="30vw"
        height="10vh"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Image ratio
  p.grey The ratio prop purpose is to maintain a specific image ratio while resizing with constraints.
  p.
    Usually you don't need to set a ratio since Wave UI computes the original image ratio and already
    applies it to the image.#[br]
    But you may want to apply a different ratio than the image natural ratio, like in the second example.

  title-link(h3) Intrinsic image ratio
  p.grey Image ratio equal to the exact width and height of the image (width / height).
  p.
    This is the most common case: the image is visible in full, and scales with its container with
    preserved ratio.#[br]
    Note that Wave UI will add a width of 100% if neither of width and height are provided.
  alert.mt2(tip) In this case, you can obtain the same result by just setting a width of 100%.
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
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h3) Custom ratio
  p.grey Setting a different ratio than the actual image one.
  p.mb0.
    In this case, the image will be cropped on purpose, but still scaling with its container with
    preserved ratio. 👍
  .caption A drop shadow is added around the images to help visualizing the edges of the image.
  example(content-class="text-center")
    div
      w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")
      .caption.text-center Real size: 1900x443. Given ratio: 1000 / 443.
    div
      w-image.sh1.mt6(:src="`${baseUrl}images/japanese-wave.png`" :ratio="3000 / 443")
      .caption.text-center Real size: 1900x443. Given ratio: 3000 / 443.
    template(#pug).
      w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")

      w-image.sh1.mt6(:src="`${baseUrl}images/japanese-wave.png`" :ratio="3000 / 443")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="1000 / 443"
        class="sh1"&gt;
      &lt;/w-image&gt;

      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="3000 / 443"
        class="sh1 mt6"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h3) Ratio combined with a set width or height
  p.
    If the ratio is the original, setting it is not necessary. But if you provide a different one
    the image will be cropped.#[br]
    Setting both a width and a height in addition to a ratio, would be pointless: it would be the same
    outcome with just a width + height, or just a ratio + width, or ratio + height.
  example(content-class="text-center")
    p Ratio + width
    w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="50%")
    .caption.text-center Real size: 1900x443. Given ratio: 1, given width: 50%.

    p.mt4 Ratio + height
    w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443" height="100")
    .caption.text-center Real size: 1900x443. Given ratio: 1900 / 443, given height: 100.

    p.mt4 Ratio + width + height (pointless)
    w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="400" height="100")
    .caption.text-center Real size: 1900x443. Given ratio: 1, given width: 400, given height: 100.
    template(#pug).
      p Ratio + width
      w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="50%")

      p.mt4 Ratio + height
      w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443" height="100")

      p.mt4 Ratio + width + height (pointless)
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="400" height="100")
    template(#html).
      &lt;p&gt;Ratio + width&lt;/p&gt;
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="1"
        width="50%"&gt;
      &lt;/w-image&gt;

      &lt;p class="mt4"&gt;Ratio + height&lt;/p&gt;
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="1900 / 443"
        height="100"&gt;
      &lt;/w-image&gt;

      &lt;p class="mt4"&gt;Ratio + width + height (pointless)&lt;/p&gt;
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="1"
        width="400"
        height="100"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2 slug="using-the-img-tag") Using the &lt;img&gt; tag
  p.
    You can choose whether the #[strong.code w-image] component should use the default &lt;span&gt;
    tag or an &lt;img&gt;.#[br]
  ul
    li The default &lt;span&gt; tag will allow cropping in particular which is very advantageous.
    li.
      The &lt;img&gt; tag will allow stretching the image, (not usually what we want, but you know, sometimes).
      Or it could also be used for more semantics.
    li.
      Also note that when sending to the printer, the &lt;img&gt; images will show up by default whereas
      the background graphics will only show up if you choose this option. You can make the decision
      according to the need.

  alert(info)
    p.
      Note that by design, setting both a width and height with the &lt;img&gt; tag, will still allow you
      to achieve image stretching, loosing the aspect ratio. This may be a desired effect or not.
    example(content-class="text-center w-flex justify-space-around wrap")
      w-image(:src="`${baseUrl}images/japanese-wave.png`" tag="img" width="100%" height="100px")
      .caption.text-center Real size: 1900x443, given width: 100%, given height: 100px.

  example(content-class="text-center")
    w-image(:src="`${baseUrl}images/japanese-wave.png`" tag="img" width="100%" max-width="700px")
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" tag="img" width="100%" max-width="700px")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        tag="img"
        width="100%"
        max-width="700px"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Figure with or without caption
  p.
    If you provide a caption, the w-image tag will be using a native HTML #[span.code &lt;figure&gt;]
    tag along with #[span.code &lt;figcaption&gt;].
  example(content-class="text-center")
    w-image(
      :src="`${baseUrl}images/japanese-wave.png`"
      caption="The Great Wave Off Kanagawa - Hokusai"
      max-width="700")

    p.mt4 With some quick styles adding these classes: #[code .pa2.sh2.base-color--bg]:
    w-image.pa2.sh2.base-color--bg(
      :src="`${baseUrl}images/japanese-wave.png`"
      caption="The Great Wave Off Kanagawa - Hokusai"
      max-width="700")
    .caption.mt3 Real size: 1900x443. Given max-width: 700.
    template(#pug).
      w-image(
        :src="`${baseUrl}images/japanese-wave.png`"
        caption="The Great Wave Off Kanagawa - Hokusai"
        max-width="700")

      w-image.pa2.sh2.base-color--bg(
        :src="`${baseUrl}images/japanese-wave.png`"
        caption="The Great Wave Off Kanagawa - Hokusai"
        max-width="700")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        caption="The Great Wave Off Kanagawa - Hokusai"
        max-width="700"&gt;
      &lt;/w-image&gt;

      &lt;w-image
        class="sh2 base-color--bg pa2"
        :src="`${baseUrl}images/japanese-wave.png`"
        caption="The Great Wave Off Kanagawa - Hokusai"
        max-width="700"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2) Loading spinner
  p.
    This image is very big, so that you have time to see the spinner while loading.
    Refresh the page if you haven't seen it (or enable dev tools throttling if your connection is too fast)!
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

  title-link(h2) Error handling &amp; Fallback
  .w-flex.gap6
    example.mt0.no-grow(content-class="text-center px6")
      w-image.bd1(src="/images/broken.png" width="100" height="100")
      .caption Given size: 100x100.#[br]Border added for visualization.
      template(#pug).
        w-image.bd1(src="/images/broken.png" width="100" height="100")
      template(#html).
        &lt;w-image
          class="bd1"
          src="/images/broken.png"
          width="100"
          height="100"&gt;
        &lt;/w-image&gt;
    p.
      If for some reason the image would not load, the default fallback is a blank 1x1 transparent gif
      (invisible, ultra light), like so.#[br]#[br]
      So if the image can't load, a transparent background will be there instead preventing the
      browser's broken image icon.#[br]#[br]
      But you can of course provide a custom fallback image to display if the image cannot load.

  title-link(h3) Fallback &amp; Error handling
  ul
    li.
      For instance, in a e-boutique you may try to load the image of an item without knowing if this item
      has an available image or not. In that case you can plan to have a fallback image, in case, like
      following.
    li.
      Thanks to the #[code error] emitted event, you can also trigger a specific action, such as displaying an
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
    w-image(:src="`${baseUrl}images/spirit-island--alberta.png?v1`" lazy :ratio="5098 / 2550")
    .caption Real size: 5098x2550.
    template(#pug).
      w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="5098 / 2550")
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/spirit-island--alberta.png`"
        lazy
        :ratio="5098 / 2550"&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h2 slug="content") Content - via default slot
  p.
    In some cases, it can be convenient to have some content on top of the image.#[br]
    By default the content will be horizontally and vertically centered, but you could easily align it
    at the bottom left for instance, with the #[code content-class] prop:
    #[code content-class="align-end justify-start pa2"].
  example
    w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="5098 / 2550")
      span.title1.pink Wave UI
    template(#pug).
      w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="5098 / 2550")
        span.title1.pink Wave UI
    template(#html).
      &lt;w-image
        :src="`${baseUrl}images/japanese-wave.png`"
        :ratio="5098 / 2550"&gt;
        &lt;span class="title1 pink"&gt;Wave UI&lt;/span&gt;
      &lt;/w-image&gt;
    template(#js).
      data: () => ({
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
