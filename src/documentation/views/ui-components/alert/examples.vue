<template lang="pug">
div(style="max-width: 1000px")
  title-link(h2) Basic
  p.
    The alert is commonly used to emphasize some content.#[br]
    A colorful box is usually enough, but in case of status message, it could need some bold text
    as well.#[br]
    If no color is provided, it will use the primary color by default.
  example
    w-alert This is an emphasized content in a default primary color alert box.
    w-alert(bold) This is an emphasized content in a default primary color alert box using the #[code bold] prop.
    p.caption.mt-2 Note: you could also use the #[code .text-bold] class instead of the #[code bold] prop.
    template(#pug).
      w-alert This is an emphasized content in a default primary color alert box.

      w-alert(bold) This is an emphasized content in a default primary color alert box using the `bold` prop.
    template(#html).
      &lt;w-alert&gt;
        This is an emphasized content in a default primary color alert box.
      &lt;/w-alert&gt;

      &lt;w-alert bold&gt;
      This is an emphasized content in a default primary color alert box using the `bold` prop.
      &lt;/w-alert&gt;
  title-link(h2 slug="show-and-hide-with-v-model") Show / hide with v-model
  p.
    By default alerts are visible, but if a #[code model-value] or #[code v-model] is provided,
    it will show or hide according to it.#[br]
    Like in this example you can add a transition to animate its apparition.
  example(content-class="pt5")
    w-button(@click="showAlert = !showAlert" outline) {{ showAlert ? 'Hide' : 'Show' }} alert
    w-transition-expand(y)
      w-alert(v-if="showAlert" color="success") The alert is now visible.
    template(#pug).
      w-button(@click="showAlert = !showAlert" outline) {{ showAlert ? 'Hide' : 'Show' }} alert

      w-transition-expand(y)
        w-alert(v-if="showAlert" color="success") The alert is now visible.
    template(#html).
      &lt;w-button
        @click="showAlert = !showAlert"
        outline&gt;
        {{ showAlert ? 'Hide' : 'Show' }} alert
      &lt;/w-button&gt;

      &lt;w-transition-expand y&gt;
        &lt;w-alert v-if="showAlert" color="success"&gt;
          The alert is now visible.
        &lt;/w-alert&gt;
      &lt;/w-transition-expand&gt;
    template(#js).
      data: () => ({
        showAlert: false
      })

  title-link(h2) Colors
  p.
    Like in most components, you can apply a color to the text with the #[code color] attribute,
    and a color to the background with the #[code bg-color] attribute.
  example(content-class="py0")
    w-alert(bg-color="primary") This is an alert with a primary background color.
    w-alert(bg-color="secondary") This is an alert with a secondary background color.
    w-alert(color="teal") This is an alert with a teal color.
    p You can mix different colors and background colors.
    w-alert(bg-color="teal" color="white") This is an alert with a teal background and white color.
    w-alert(bg-color="yellow-light6" color="brown") This is an alert with a yellow background and brown color.
    template(#pug).
      w-alert(bg-color="primary") This is an alert with a primary background color.
      w-alert(bg-color="secondary") This is an alert with a secondary background color.
      w-alert(color="teal") This is an alert with a teal color.

      p You can mix different colors and background colors.
      w-alert(bg-color="teal" color="white") This is an alert with a teal background and white color.
      w-alert(bg-color="yellow-light6" color="brown") This is an alert with a yellow background and brown color.
    template(#html).
      &lt;w-alert bg-color="primary"&gt;
        This is an alert with a primary background color.
      &lt;/w-alert&gt;

      &lt;w-alert bg-color="secondary" color="white"&gt;
        This is an alert with a secondary background color.
      &lt;/w-alert&gt;

      &lt;w-alert color="teal"&gt;
        This is an alert with a teal color.
      &lt;/w-alert&gt;

      &lt;p&gt;
        You can mix different colors and background colors.
      &lt;/p&gt;

      &lt;w-alert bg-color="teal" color="white"&gt;
        This is an alert with a teal background and white color.
      &lt;/w-alert&gt;

      &lt;w-alert bg-color="yellow-light6" color="brown"&gt;
        This is an alert with a yellow background and brown color.
      &lt;/w-alert&gt;

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
    template(#html).
      &lt;w-alert success&gt;This is a success alert.&lt;/w-alert&gt;
      &lt;w-alert warning&gt;This is a warning alert.&lt;/w-alert&gt;
      &lt;w-alert error&gt;This is an error alert.&lt;/w-alert&gt;
      &lt;w-alert info&gt;This is an info alert.&lt;/w-alert&gt;

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
    template(#html).
      &lt;w-alert success plain&gt;This is a success alert.&lt;/w-alert&gt;
      &lt;w-alert warning plain&gt;This is a warning alert.&lt;/w-alert&gt;
      &lt;w-alert error plain&gt;This is an error alert.&lt;/w-alert&gt;
      &lt;w-alert info plain&gt;This is an info alert.&lt;/w-alert&gt;

  title-link(h2) Custom icon
  example(content-class="py0")
    w-alert(bg-color="yellow-light6" color="amber" icon="wi-star") This is an alert with a custom icon.
    template(#pug).
      w-alert(bg-color="yellow-light6" color="amber" icon="wi-star") This is an alert with a custom icon.
    template(#html).
      &lt;w-alert
        bg-color="yellow-light6"
        color="amber"
        icon="wi-star"&gt;
        This is an alert with a custom icon.
      &lt;/w-alert&gt;

  title-link(h2) Icon outside
  example(content-class="py0")
    w-alert(success icon-outside) This is a success alert.
    w-alert(warning icon-outside) This is a warning alert.
    w-alert(error icon-outside) This is an error alert.
    w-alert(info icon-outside) This is an info alert.
    w-alert(bg-color="yellow-light6" color="amber" icon="mdi mdi-star-circle" icon-outside)
      | This is an alert with a custom icon.
    template(#pug).
      w-alert(success icon-outside) This is a success alert.
      w-alert(warning icon-outside) This is a warning alert.
      w-alert(error icon-outside) This is an error alert.
      w-alert(info icon-outside) This is an info alert.
      w-alert(bg-color="yellow-light6" color="amber" icon="mdi mdi-star-circle" icon-outside)
        | This is an alert with a custom icon.
    template(#html).
      &lt;w-alert success icon-outside&gt;This is a success alert.&lt;/w-alert&gt;
      &lt;w-alert warning icon-outside&gt;This is a warning alert.&lt;/w-alert&gt;
      &lt;w-alert error icon-outside&gt;This is an error alert.&lt;/w-alert&gt;
      &lt;w-alert info icon-outside&gt;This is an info alert.&lt;/w-alert&gt;
      &lt;w-alert
        bg-color="yellow-light6"
        color="amber"
        icon="mdi mdi-star-circle"
        icon-outside&gt;
        This is an alert with a custom icon.
      &lt;/w-alert&gt;

  title-link(h2) Outline
  example(content-class="py0")
    w-alert(outline) This is a normal alert with a primary color.
    w-alert(success outline) This is a success alert.
    w-alert(warning outline) This is a warning alert.
    w-alert(error outline) This is an error alert.
    w-alert(info outline) This is an info alert.
    template(#pug).
      w-alert(outline) This is a normal alert with a primary color.
      w-alert(success outline) This is a success alert.
      w-alert(warning outline) This is a warning alert.
      w-alert(error outline) This is an error alert.
      w-alert(info outline) This is an info alert.
    template(#html).
      &lt;w-alert outline&gt;This is a normal alert with a primary color.&lt;/w-alert&gt;
      &lt;w-alert success outline&gt;This is a success alert.&lt;/w-alert&gt;
      &lt;w-alert warning outline&gt;This is a warning alert.&lt;/w-alert&gt;
      &lt;w-alert error outline&gt;This is an error alert.&lt;/w-alert&gt;
      &lt;w-alert info outline&gt;This is an info alert.&lt;/w-alert&gt;

  title-link(h2) Borders
  example(content-class="py0")
    w-alert This is a normal alert with no border.
    w-alert(border-left) This is a normal alert with a left border.
    w-alert(border-right) This is a normal alert with a right border.
    w-alert(border-top) This is a normal alert with a top border.
    w-alert(border-bottom) This is a normal alert with a bottom border.
    w-alert(border) This is a normal alert with borders all around.
    w-alert.bd2 This is a normal alert with borders using the #[code .bd2] helper class.
    w-alert(success) This is a success alert with no border.
    w-alert(success border) This is a success alert with borders all around.
    template(#pug).
      w-alert This is a normal alert with no border.
      w-alert(border-left) This is a normal alert with a left border.
      w-alert(border-right) This is a normal alert with a right border.
      w-alert(border-top) This is a normal alert with a top border.
      w-alert(border-bottom) This is a normal alert with a bottom border.
      w-alert(border) This is a normal alert with borders all around.
      w-alert.bd2 This is a normal alert with borders using the #[code .bd2] helper class.
      w-alert(success) This is a success alert with no border.
      w-alert(success border) This is a success alert with borders all around.
    template(#html).
      &lt;w-alert&gt;This is a normal alert with no border.&lt;/w-alert&gt;
      &lt;w-alert border-left&gt;
        This is a normal alert with a left border.
      &lt;/w-alert&gt;
      &lt;w-alert border-right&gt;
        This is a normal alert with a right border.
      &lt;/w-alert&gt;
      &lt;w-alert border-top&gt;
        This is a normal alert with a top border.
      &lt;/w-alert&gt;
      &lt;w-alert border-bottom&gt;
        This is a normal alert with a bottom border.
      &lt;/w-alert&gt;
      &lt;w-alert border&gt;
        This is a normal alert with borders all around.
      &lt;/w-alert&gt;
      &lt;w-alert class="bd2"&gt;
        This is a normal alert with borders using the #[code .bd2] helper class.
      &lt;/w-alert&gt;

      &lt;w-alert success&gt;
        This is a success alert with no border.
      &lt;/w-alert&gt;
      &lt;w-alert success border&gt;
        This is a success alert with borders all around.
      &lt;/w-alert&gt;

  title-link(h2) Tile, round &amp; shadow
  example(content-class="py0")
    w-alert(tile) This is a tile alert.
    w-alert(round) This is a round alert.
    w-alert(shadow) This is a normal alert with a shadow.
    template(#pug).
      w-alert(tile) This is a tile alert.
      w-alert(round) This is a round alert.
      w-alert(shadow) This is a normal alert with a shadow.
    template(#html).
      &lt;w-alert tile&gt;This is a tile alert.&lt;/w-alert&gt;
      &lt;w-alert round&gt;This is a round alert.&lt;/w-alert&gt;
      &lt;w-alert shadow&gt;This is a normal alert with a shadow.&lt;/w-alert&gt;

  title-link(h2) Dismiss
  example
    w-alert.mt0.mb2(v-model="dismissible1" dismiss) This is a dismissible alert.
    w-alert.my2(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
    w-alert.my2(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
    w-button.mt2(
      @click="dismissible1 = dismissible2 = dismissible3 = true"
      :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts
    template(#pug).
      w-alert.mt0.mb2(v-model="dismissible1" dismiss) This is a dismissible alert.
      w-alert.my2(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
      w-alert.my2(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
      w-button.mt2(
        @click="dismissible1 = dismissible2 = dismissible3 = true"
        :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts
    template(#html).
      &lt;w-alert
        v-model="dismissible1"
        dismiss&gt;
        This is a dismissible alert.
      &lt;/w-alert&gt;
      &lt;w-alert
        v-model="dismissible2"
        dismiss
        error&gt;
        This is a dismissible error type alert.
      &lt;/w-alert&gt;
      &lt;w-alert
        v-model="dismissible3"
        color="amber"
        dismiss
        round&gt;
        This is a dismissible round alert.
      &lt;/w-alert&gt;
      &lt;w-button
        @click="dismissible1 = dismissible2 = dismissible3 = true"
        :disabled="dismissible1 &amp;&amp; dismissible2 &amp;&amp; dismissible3"&gt;
        Reset alerts
      &lt;/button&gt;
    template(#js).
      data: () => ({
        dismissible1: true,
        dismissible2: true,
        dismissible3: true
      })

  title-link(h2) Sizes
  example(content-class="py0")
    w-alert(info xs) This is an extra small alert.
    w-alert(info sm) This is a small alert.
    w-alert(info md) This is a medium alert.
    w-alert(info lg) This is a large alert.
    w-alert(info xl) This is an extra large alert.

    template(#pug).
      w-alert(info xs) This is an extra small alert.
      w-alert(info sm) This is a small alert.
      w-alert(info md) This is a medium alert.
      w-alert(info lg) This is a large alert.
      w-alert(info xl) This is an extra large alert.
    template(#html).
      &lt;w-alert info xs&gt;This is an extra small alert.&lt;/w-alert&gt;
      &lt;w-alert info sm&gt;This is a small alert.&lt;/w-alert&gt;
      &lt;w-alert info md&gt;This is a medium alert.&lt;/w-alert&gt;
      &lt;w-alert info lg&gt;This is a large alert.&lt;/w-alert&gt;
      &lt;w-alert info xl&gt;This is an extra large alert.&lt;/w-alert&gt;

  p With some multiline content.
  w-alert(info xs) Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.
  w-alert(info sm) Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.
  w-alert(info md) Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.
  w-alert(info lg) Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.
  w-alert(info xl) Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.
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
