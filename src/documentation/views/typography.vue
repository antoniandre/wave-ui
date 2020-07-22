<template lang="pug">
div
  title-link.mt4(h1) Typography
  p Here is a list of classes that will help you structure and emphasize your content.

  title-link(h2) Content architecture
  div.ml8
    .headline.mt6 Headline using the #[code .headline] class or #[code .title-1].
    .title-2.mt4 Title using the #[code .title-2] class.
    .title-3.mt4 Subtitle using the #[code .title-3] class.
    .title-4.mt4 Heading using the #[code .title-4] class.
    .title-5.mt4 Subheading using the #[code .title-5] class.
    .body.mt4 Body text using the #[code .body] class.
    .caption.mt4 Caption text using the #[code .caption] class.

  title-link(h2) Text style
  div.ml8
    .text-up.mt4 Uppercase text using the #[code .text-up] class.
    .text-low.mt4 Lowercase text using the #[code .text-low] class.
    .text-bold.mt4 Bold text using the #[code .text-bold] class.
    .text-light.mt4 Normal (not bold) text using the #[code .text-light] class.
    .text-italic.mt4 Italic text using the #[code .text-italic] class.

  title-link(h2) Text alignment
  div.ml8
    .text-left.mt4 Left aligned text using the #[code .text-left] class.
    .text-center Center aligned text using the #[code .text-center] class.
    .text-right Right aligned text using the #[code .text-right] class.
</template>

<script>
export default {
}
</script>

<style lang="scss">
.page--typography {
  code {
    font-weight: normal;
    font-style: normal;
    text-transform: initial;
  }
}
</style>