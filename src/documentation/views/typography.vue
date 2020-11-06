<template lang="pug">
main
  title-link.mt4(h1) Typography
  p Here is a list of classes that will help you structure and emphasize your content.

  title-link(h2) Content architecture
  div.ml8
    .headline.mt6 Headline using the #[code .headline] class or #[code .title1].
    .title2.mt4 Title using the #[code .title2] class.
    .title3.mt4 Subtitle using the #[code .title3] class.
    .title4.mt4 Heading using the #[code .title4] class.
    .title5.mt4 Subheading using the #[code .title5] class.
    .body.mt4 Body text using the #[code .body] class.
    .caption.mt4 Caption text using the #[code .caption] class.

  title-link(h2) Text style
  div.ml8
    .text-upper.mt4 Uppercase text using the #[code .text-upper] class.
    .text-lower.mt4 Lowercase text using the #[code .text-lower] class.
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
.main--typography {
  code {
    font-weight: normal;
    font-style: normal;
    text-transform: initial;
  }
}
</style>