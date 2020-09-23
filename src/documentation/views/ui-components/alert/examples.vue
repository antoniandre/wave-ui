<template lang="pug">
div(style="max-width: 1000px")
  title-link(h2 slug="show-and-hide-with-v-model") Show / hide with v-model
  p.
    By default alerts are visible, but if a value or v-model is provided,
    it will show or hide according to it.#[br]
    Like in this example you can add a transition to animate its apparition.
  example(content-class="pt5")
    w-button(@click="showAlert = !showAlert" color="primary" outline) {{ showAlert ? 'Hide' : 'Show' }} alert
    w-transition-expand(y)
      w-alert(v-if="showAlert" color="success") The alert is now visible.
    template(#pug).
      w-button(@click="showAlert = !showAlert" color="primary" outline) {{ showAlert ? 'Hide' : 'Show' }} alert
      w-transition-expand(y)
        w-alert(v-if="showAlert" color="success") The alert is now visible.
    template(#js).
      data: () => ({
        showAlert: false
      })

  title-link(h2) Colors
  p.
    Like in most components, you can apply a color to the text with the #[code color] attribute,
    and a color to the background with the #[code bg-color] attribute.
  example(content-class="py0")
    w-alert(color="primary") This is an alert with a primary color.
    w-alert(bg-color="primary" color="white") This is an alert with a primary background color.
    w-alert(color="pink") This is an alert with a pink color.
    w-alert(bg-color="pink" color="white") This is an alert with a pink background color.
    p You can even mix different colors and background colors.
    w-alert(bg-color="purple" color="cyan-light4") This is an alert with a purple background and cyan color.
    w-alert(bg-color="cyan-light4" color="purple") This is an alert with a cyan background and purple color.
    template(#pug).
      w-alert(color="primary") This is an alert with a primary color.
      w-alert(bg-color="primary" color="white") This is an alert with a primary background color.
      w-alert(color="pink") This is an alert with a pink color.
      w-alert(bg-color="pink" color="white") This is an alert with a pink background color.
      p You can even mix different colors and background colors.
      w-alert(bg-color="purple" color="cyan-light4") This is an alert with a purple background and cyan color.
      w-alert(bg-color="cyan-light4" color="purple") This is an alert with a cyan background and purple color.

  title-link(h2 slug="types") Types (adds an icon)
  h3 Normal
  example(content-class="py0")
    w-alert(success) This is a success alert.
    w-alert(warning) This is a warning alert.
    w-alert(error) This is an error alert.
    w-alert(info) This is an info alert.
    template(#pug).
      w-alert(success) This is a success alert.
      w-alert(warning) This is a warning alert.
      w-alert(error) This is an error alert.
      w-alert(info) This is an info alert.

  h3 Plain
  example(content-class="py0")
    w-alert(success plain) This is a success alert.
    w-alert(warning plain) This is a warning alert.
    w-alert(error plain) This is an error alert.
    w-alert(info plain) This is an info alert.
    template(#pug).
      w-alert(success plain) This is a success alert.
      w-alert(warning plain) This is a warning alert.
      w-alert(error plain) This is an error alert.
      w-alert(info plain) This is an info alert.

  title-link(h2) Custom icon
  example(content-class="py0")
    w-alert(bg-color="yellow-light5" color="amber" icon="wi-star") This is an alert with a custom icon.
    template(#pug).
      w-alert(bg-color="yellow-light5" color="amber" icon="wi-star") This is an alert with a custom icon.

  title-link(h2) Icon outside
  example(content-class="py0")
    w-alert(success icon-outside) This is a success alert.
    w-alert(warning icon-outside) This is a warning alert.
    w-alert(error icon-outside) This is an error alert.
    w-alert(info icon-outside) This is an info alert.
    w-alert(bg-color="yellow-light5" color="amber" icon="mdi mdi-star-circle" icon-outside)
      | This is an alert with a custom icon.
    template(#pug).
      w-alert(success icon-outside) This is a success alert.
      w-alert(warning icon-outside) This is a warning alert.
      w-alert(error icon-outside) This is an error alert.
      w-alert(info icon-outside) This is an info alert.
      w-alert(bg-color="yellow-light5" color="amber" icon="mdi mdi-star-circle" icon-outside)
        | This is an alert with a custom icon.

  title-link(h2) Outline
  example(content-class="py0")
    w-alert(color="primary" outline) This is a normal alert with a primary color.
    w-alert(success outline) This is a success alert.
    w-alert(warning outline) This is a warning alert.
    w-alert(error outline) This is an error alert.
    w-alert(info outline) This is an info alert.
    template(#pug).
      w-alert(color="primary" outline) This is a normal alert with a primary color.
      w-alert(success outline) This is a success alert.
      w-alert(warning outline) This is a warning alert.
      w-alert(error outline) This is an error alert.
      w-alert(info outline) This is an info alert.

  title-link(h2) Borders
  example(content-class="py0")
    w-alert(success light no-border) This is a success alert with no border.
    w-alert(color="primary" no-border) This is a normal alert with no border.
    w-alert(bg-color="cyan-light4" color="purple" no-border) This is an alert with a cyan background, purple color and no border.
    .w-flex.wrap.ma-2
      w-alert.grow.ma2(color="primary" border-left) This is a normal alert with a left border.
      w-alert.grow.ma2(color="primary" border-right) This is a normal alert with a right border.
    .w-flex.wrap.mx-2.mt2
      w-alert.grow.ma2(color="primary" border-top) This is a normal alert with a top border.
      w-alert.grow.ma2(color="primary" border-bottom) This is a normal alert with a left border.
    template(#pug).
      w-alert(success light no-border) This is a success alert with no border.
      w-alert(color="primary" no-border) This is a normal alert with no border.
      w-alert(bg-color="cyan-light4" color="purple" no-border) This is an alert with a cyan background, purple color and no border.
      .w-flex.wrap.ma-2
        w-alert.grow.ma2(color="primary" border-left) This is a normal alert with a left border.
        w-alert.grow.ma2(color="primary" border-right) This is a normal alert with a right border.
      .w-flex.wrap.mx-2.mt2
        w-alert.grow.ma2(color="primary" border-top) This is a normal alert with a top border.
        w-alert.grow.ma2(color="primary" border-bottom) This is a normal alert with a left border.

  title-link(h2) Tile, round &amp; shadow
  example(content-class="py0")
    w-alert(color="primary" tile) This is a tile alert.
    w-alert(color="primary" round) This is a round alert.
    w-alert(color="primary" shadow) This is a normal alert with a shadow.
    template(#pug).
      w-alert(color="primary" tile) This is a tile alert.
      w-alert(color="primary" round) This is a round alert.
      w-alert(color="primary" shadow) This is a normal alert with a shadow.

  title-link(h2) Dismiss
  example
    w-alert.mt0.mb2(v-model="dismissible1" color="primary" dismiss) This is a dismissible alert.
    w-alert.my2(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
    w-alert.my2(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
    w-button.mt2(
      bg-color="primary"
      @click="dismissible1 = dismissible2 = dismissible3 = true"
      :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts
    template(#pug).
      w-alert(v-model="dismissible1" color="primary" dismiss) This is a dismissible alert.
      w-alert(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
      w-alert(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
      w-button(
        bg-color="primary"
        @click="dismissible1 = dismissible2 = dismissible3 = true"
        :disabled="dismissible1 &amp;&amp; dismissible2 &amp;&amp; dismissible3") Reset alerts
    template(#js).
      data: () => ({
        dismissible1: true,
        dismissible2: true,
        dismissible3: true
      })

  title-link(h2) Sizes
  example(content-class="py0")
    w-alert.size--xs(color="info" success) This is an extra small alert.
    w-alert.size--sm(color="info" success) This is a small alert.
    w-alert.size--md(color="info" success) This is a medium alert.
    w-alert.size--lg(color="info" success) This is a large alert.
    w-alert.size--xl(color="info" success) This is an extra large alert.
    template(#pug).
      w-alert.size--xs(color="info" success) This is an extra small alert.
      w-alert.size--sm(color="info" success) This is a small alert.
      w-alert.size--md(color="info" success) This is a medium alert.
      w-alert.size--lg(color="info" success) This is a large alert.
      w-alert.size--xl(color="info" success) This is an extra large alert.
</template>

<script>
export default {
  data: () => ({
    showAlert: false,
    dismissible1: true,
    dismissible2: true,
    dismissible3: true
  })
}
</script>
