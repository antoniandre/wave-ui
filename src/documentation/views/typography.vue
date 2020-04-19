<template lang="pug">
div
  h1.headline.mt-4 Typography

  p Here is a list of classes that will help you structure and emphasize your content.
  .headline.mt-12 Headline using the #[code .headline] class.
  .title.mt-4 Title using the #[code .title] class.
  .subtitle.mt-4 Subtitle using the #[code .subtitle] class.
  .body.mt-4 Body text using the #[code .body] class.
  .caption.mt-4 Caption text using the #[code .caption] class.

  .uppercase.mt-4 Uppercase text using the #[code .uppercase] class.
  .lowercase.mt-4 Lowercase text using the #[code .lowercase] class.
  .bold.mt-4 Bold text using the #[code .bold] class.
  .italic.mt-4 Italic text using the #[code .italic] class.

  .text-left.mt-4 Left aligned text using the #[code .text-left] class.
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