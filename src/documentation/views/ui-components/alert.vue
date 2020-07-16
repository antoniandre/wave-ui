<template lang="pug">
div(style="max-width: 900px")
  title-link.mt-4.code(h1) w-alert

  title-link(h2 slug="show-and-hide-with-v-model") Show / hide with v-model
  p.
    By default alerts are visible, but if a value or v-model is provided,
    it will show or hide according to it.
  w-button(@click="showAlert = !showAlert" color="primary" outline) {{ showAlert ? 'Hide' : 'Show' }} alert
  w-transition-expand(y)
    w-alert(v-if="showAlert" color="success") The alert is now visible.

  title-link(h2) Colors
  p.
    You can apply a color to the text with the #[code color] attribute,
    and color to the background with the #[code bg-color] attribute.
  w-alert(color="primary") This is an alert with a primary color.
  w-alert(bg-color="primary" color="white") This is an alert with a primary background color.
  w-alert(color="pink") This is an alert with a pink color.
  w-alert(bg-color="pink" color="white") This is an alert with a pink background color.
  p You can even mix different colors and background colors.
  w-alert(bg-color="purple" color="cyan-lighter-4") This is an alert with a purple background and cyan color.
  w-alert(bg-color="cyan-lighter-4" color="purple") This is an alert with a cyan background and purple color.

  title-link(h2 slug="types") Types (adds an icon)
  h3 Normal
  w-alert(type="success") This is a success alert.
  w-alert(type="warning") This is a warning alert.
  w-alert(type="error") This is an error alert.
  w-alert(type="info") This is an info alert.

  h3 Plain
  w-alert(type="success" plain) This is a success alert.
  w-alert(type="warning" plain) This is an alert.
  w-alert(type="error" plain) This is an error alert.
  w-alert(type="info" plain) This is an info alert.

  title-link(h2) Outline
  w-alert(color="primary" outline) This is a normal alert with a primary color.
  w-alert(type="success" outline) This is a success alert.
  w-alert(type="warning" outline) This is an alert.
  w-alert(type="error" outline) This is an error alert.
  w-alert(type="info" outline) This is an info alert.

  title-link(h2) Borders
    w-alert(type="success" light no-border) This is a success alert with no border.
    w-alert(color="primary" no-border) This is a normal alert with no border.
    w-alert(bg-color="cyan-lighter-4" color="purple" no-border) This is an alert with a cyan background, purple color and no border.
  .w-flex.wrap.ma-n2
    w-alert.grow.ma-2(color="primary" border-left) This is a normal alert with a left border.
    w-alert.grow.ma-2(color="primary" border-right) This is a normal alert with a right border.
  .w-flex.wrap.mx-n2.mt-2
    w-alert.grow.ma-2(color="primary" border-top) This is a normal alert with a top border.
    w-alert.grow.ma-2(color="primary" border-bottom) This is a normal alert with a left border.

  title-link(h2) Tile, round &amp; shadow
  w-alert(color="primary" tile) This is a tile alert.
  w-alert(color="primary" round) This is a round alert.
  w-alert(color="primary" shadow) This is a normal alert with a shadow.

  title-link(h2) Sizes
  .w-flex
    .grow
      w-alert.size--xs(color="info" type="success") This is an extra small alert.
      w-alert.size--sm(color="info" type="success") This is a small alert.
      w-alert.size--md(color="info" type="success") This is a medium alert.
      w-alert.size--lg(color="info" type="success") This is a large alert.
      w-alert.size--xl(color="info" type="success") This is an extra large alert.
    .spacer(v-if="!$waveUI.breakpoint.xs")
</template>

<script>
export default {
  data: () => ({
    showAlert: false
  })
}
</script>
