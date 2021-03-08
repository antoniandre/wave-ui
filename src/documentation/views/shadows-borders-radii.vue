<template lang="pug">
main
  title-link.mt4(h1) shadows, borders &amp; border radii
  p.
    Wave UI offers a few CSS helper classes to control the drop shadow, borders and border radii.#[br]
    You can use these classes on any component and any DOM element, even if the element is not part of
    Wave UI.#[br]
  alert(tip).
    The following offered classes are targetting the common use cases: there isn't a CSS class for
    anything you want to accomplish. It's of course a trade-off to keep the library lean.#[br]
    That being said, it's very easy to add your own classes based on the same principle in your CSS!

  title-link(h2) Shadows
  p.
    Element shadows range from #[code -6] to #[code 6]. Negative values will produce an inset shadow,
    whereas positive values will produce an outter drop shodow. #[code .sh0] will remove any shadow.
  example
    .w-flex.wrap
      .box.blue-light5--bg.ma4.d-flex.align-center.justify-center(
        v-for="i in 13"
        :key="i"
        :class="`sh${i - 7}`")
        span.code .sh{{ i - 7 }}
    //- template(#pug).
      .w-flex.wrap
        .box.sh-6 .sh-6
        .box.sh-5 .sh-5
        .box.sh-4 .sh-4
        .box.sh-3 .sh-3
        .box.sh-2 .sh-2
        .box.sh-1 .sh-1
        .box.sh0 .sh0
        .box.sh1 .sh1
        .box.sh2 .sh2
        .box.sh3 .sh3
        .box.sh4 .sh4
        .box.sh5 .sh5
        .box.sh6 .sh6
    template(#html).
      &lt;w-flex wrap&gt;
        &lt;div class="box sh-6"&gt;.sh-6&lt;/div&gt;
        &lt;div class="box sh-5"&gt;.sh-5&lt;/div&gt;
        &lt;div class="box sh-4"&gt;.sh-4&lt;/div&gt;
        &lt;div class="box sh-3"&gt;.sh-3&lt;/div&gt;
        &lt;div class="box sh-2"&gt;.sh-2&lt;/div&gt;
        &lt;div class="box sh-1"&gt;.sh-1&lt;/div&gt;
        &lt;div class="box sh0"&gt;.sh0&lt;/div&gt;
        &lt;div class="box sh1"&gt;.sh1&lt;/div&gt;
        &lt;div class="box sh2"&gt;.sh2&lt;/div&gt;
        &lt;div class="box sh3"&gt;.sh3&lt;/div&gt;
        &lt;div class="box sh4"&gt;.sh4&lt;/div&gt;
        &lt;div class="box sh5"&gt;.sh5&lt;/div&gt;
        &lt;div class="box sh6"&gt;.sh6&lt;/div&gt;
      &lt;/w-flex&gt;
    template(#css).
      .box {
        width: 80px;
        height: 80px;
        margin: 4px; /* You could use the class `ma1`. */
        background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */
        display: flex; /* You could use the class `d-flex`. */
        align-items: center; /* You could use the class `align-center`. */
        justify-content: center; /* You could use the class `justify-center`. */
      }


  title-link(h2) Borders
  p.
    Element borders range from #[code 0] to #[code 6], corresponding to the same number of pixels (for
    the #[span.code border-width]) on all the sides. #[code .bd0] will remove any border.
  example
    .w-flex.wrap
      .box.blue-light5--bg.ma4.d-flex.align-center.justify-center(
        v-for="i in 7"
        :key="i"
        :class="`bd${i - 1}`")
        span.code .bd{{ i - 1 }}
    //- template(#pug).
      .w-flex.wrap
        .box.bd0 .bd0
        .box.bd1 .bd1
        .box.bd2 .bd2
        .box.bd3 .bd3
        .box.bd4 .bd4
        .box.bd5 .bd5
        .box.bd6 .bd6
    template(#html).
      &lt;w-flex wrap&gt;
        &lt;div class="box bd0"&gt;.bd0&lt;/div&gt;
        &lt;div class="box bd1"&gt;.bd1&lt;/div&gt;
        &lt;div class="box bd2"&gt;.bd2&lt;/div&gt;
        &lt;div class="box bd3"&gt;.bd3&lt;/div&gt;
        &lt;div class="box bd4"&gt;.bd4&lt;/div&gt;
        &lt;div class="box bd5"&gt;.bd5&lt;/div&gt;
        &lt;div class="box bd6"&gt;.bd6&lt;/div&gt;
      &lt;/w-flex&gt;
    template(#css).
      .box {
        width: 80px;
        height: 80px;
        margin: 4px; /* You could use the class `ma1`. */
        background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */
        display: flex; /* You could use the class `d-flex`. */
        align-items: center; /* You could use the class `align-center`. */
        justify-content: center; /* You could use the class `justify-center`. */
      }


  title-link(h2) Border radii
  p.
    The border radii range from #[code 0] to #[code 6], and are incremented by the #[code $base-increment]
    (SCSS variable) which is equal to 4px by default.#[br]
    #[code .bdrs0] will remove any border radius, #[code .bdrsr] will produce a #[strong round] border
    radius, #[code .bdrsm] will produce a #[strong max] border radius (#[span.code 100%]).
  alert(tip)
    | Here is difference between #[code .bdrsr] and #[code .bdrsm] (only visible on non-square elements):
    .w-flex
      .box.box--rect.blue-light5--bg.ma4.d-flex.align-center.justify-center.bdrsr
        span.code .bdrsr
      .box.box--rect.blue-light5--bg.ma4.d-flex.align-center.justify-center.bdrsm
        span.code .bdrsm
  example
    .w-flex.wrap
      .box.blue-light5--bg.ma4.d-flex.align-center.justify-center(
        v-for="i in 7"
        :key="i"
        :class="`bdrs${i - 1}`")
        span.code .bdrs{{ i - 1 }}
      .box.blue-light5--bg.ma4.d-flex.align-center.justify-center.bdrsr
        span.code .bdrsr
      .box.blue-light5--bg.ma4.d-flex.align-center.justify-center.bdrsm
        span.code .bdrsm
    //- template(#pug).
      .w-flex.wrap
        .box.bdrs0 .bdrs0
        .box.bdrs1 .bdrs1
        .box.bdrs2 .bdrs2
        .box.bdrs3 .bdrs3
        .box.bdrs4 .bdrs4
        .box.bdrs5 .bdrs5
        .box.bdrs6 .bdrs6
        .box.bdrsr
          span.code .bdrsr
        .box.bdrsm
          span.code .bdrsm
    template(#html).
      &lt;w-flex wrap&gt;
        &lt;div class="box bdrs0"&gt;.bdrs0&lt;/div&gt;
        &lt;div class="box bdrs1"&gt;.bdrs1&lt;/div&gt;
        &lt;div class="box bdrs2"&gt;.bdrs2&lt;/div&gt;
        &lt;div class="box bdrs3"&gt;.bdrs3&lt;/div&gt;
        &lt;div class="box bdrs4"&gt;.bdrs4&lt;/div&gt;
        &lt;div class="box bdrs5"&gt;.bdrs5&lt;/div&gt;
        &lt;div class="box bdrs6"&gt;.bdrs6&lt;/div&gt;
        &lt;div class="box bdrsr"&gt;.bdrsr&lt;/div&gt;
        &lt;div class="box bdrsm"&gt;.bdrsm&lt;/div&gt;
      &lt;/w-flex&gt;
    template(#css).
      .box {
        width: 80px;
        height: 80px;
        margin: 4px; /* You could use the class `ma1`. */
        background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */
        display: flex; /* You could use the class `d-flex`. */
        align-items: center; /* You could use the class `align-center`. */
        justify-content: center; /* You could use the class `justify-center`. */
      }


  w-divider.my12

  title-link(h2) Examples of use on UI components
  p.
    Bellow are a few examples of components which accept the presented classes.
  example
    w-flex(align-center justify-space-around wrap)
      w-flex.no-grow(column align-center justify-center)
        w-image.bd1.sh1.bdrsr.d-block(
          :src="`${baseUrl}images/japanese-wave.png`"
          :width="100"
          :height="100")
        span.caption.mt3.
          #[strong.code w-image] with #[code.mx1 .bd1], #[code.mx1 .bdrsr] and #[code.mx1 .sh1] classes.
      w-switch.bdrs1.my4(:value="true")
        span.caption a #[strong.code.mx1 w-switch] with a #[code.mx1 .bdrs1] class.
    //- template(#pug).
      w-flex(align-center justify-space-around wrap)
        w-flex.no-grow(column align-center justify-center)
          w-image.bd1.sh1.bdrsr.d-block(
            :src="`${baseUrl}images/japanese-wave.png`"
            :width="100"
            :height="100")
          span.caption.mt3 w-image with #[code.mx1 .bd1], #[code.mx1 .bdrsr] and #[code.mx1 .sh1] classes.
        w-switch.bdrs1.my4(:value="true")
          span.caption a #[strong.code.mx1 w-switch] with a #[code.mx1 .bdrs1] class.
    template(#html).
      &lt;w-flex align-center justify-space-around wrap&gt;
        &lt;w-flex column align-center justify-center class="no-grow"&gt;
          &lt;w-image
            class="bd1 sh1 bdrsr d-block"
            :src="`${baseUrl}images/japanese-wave.png`"
            :width="100"
            :height="100"&gt;
          &lt;/w-image&gt;
          &lt;span class="caption mt3"&gt;
            w-image with `.bd1`, `.bdrsr` and `.sh1` classes.
          &lt;/span&gt;
        &lt;/w-flex&gt;

        &lt;w-switch :value="true" class="bdrs1 my4"&gt;
          &lt;span class="caption"&gt;
            a w-switch with a `.bdrs1` class.
          &lt;/span&gt;
        &lt;/w-switch&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  example.mt8
    w-card.bdrs4.bd0.sh2(bg-color="orange-light5")
      .caption a #[strong.code.mx1 w-card] with #[code.mx1 .bd0], #[code.mx1 .bdrs4] and #[code.mx1 .sh2] classes.

    w-accordion.mt8.bdrs2.bd1(:items="2")
      template(#item-title="{ index }")
        .title5 Accordion with #[code.mx1 .bd1] and #[code.mx1 .bdrs2] classes.
      template(#item-title.2="{ index }") Item {{ index }}
      template(#item-content="{ index }") Content {{ index }}
    //- template(#pug).
      w-card.bdrs4.bd0.sh2(bg-color="orange-light5")
        .caption a #[strong.code.mx1 w-card] with #[code.mx1 .bd0], #[code.mx1 .bdrs4] and #[code.mx1 .sh2] classes.

      w-accordion.mt8.bdrs2.bd1(:items="2")
        template(#item-title="{ index }")
          .title5 Accordion with #[code.mx1 .bd1] and #[code.mx1 .bdrs2] classes.
        template(#item-title.2="{ index }") Item {{ '\{\{ index \}\}' }}
        template(#item-content="{ index }") Content {{ '\{\{ index \}\}' }}
    template(#html).
      &lt;w-card bg-color="orange-light5" class="bdrs4 bd0 sh2"&gt;
        &lt;div class="caption"&gt;
          a w-card with `.bd0`, `.bdrs4` and `.sh2` classes.
        &lt;/div&gt;
      &lt;/w-card&gt;

      &lt;w-accordion :items="2" class="mt8 bdrs2 bd1"&gt;
        &lt;template #item-title="{ index }"&gt;
          &lt;div class="title5"&gt;
            Accordion with `.bd1` and `.bdrs2` classes.
          &lt;/div&gt;
        &lt;/template&gt;

        &lt;template #item-title.2="{ index }"&gt;
          Item {{ '\{\{ index \}\}' }}
        &lt;/template&gt;
        &lt;template #item-content="{ index }"&gt;
          Content {{ '\{\{ index \}\}' }}
        &lt;/template&gt;
      &lt;/w-accordion&gt;

  alert(info).
    Some of the UI components that have wrappers won't work nicely with the border and shadow classes.
    In this case you need to style them from your CSS.
</template>

<script>
import colors from '@/wave-ui/utils/colors'

export default {
  data: () => ({
    colors,
    horizontal: false,
    baseUrl: process.env.BASE_URL
  })
}
</script>

<style lang="scss">
.main--shadows-borders-radii {
  .box {
    width: 80px;
    height: 80px;

    &--rect {width: 120px;height: 40px;}
  }
}
</style>
