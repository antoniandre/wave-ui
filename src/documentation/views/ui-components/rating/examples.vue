<template lang="pug">
div
  title-link(h2) Default
  example
    w-rating
    //- template(#pug).
      w-rating
    template(#html).
      &lt;w-rating&gt;&lt;/w-rating&gt;

  title-link(h2) V-model
  example
    w-rating(v-model="rating1")
    div.mt2
      strong.mr2 v-model:
      code {{ rating1 }}
    w-rating.mt4(v-model="rating2")
    div.mt2
      strong.mr2 v-model:
      code {{ rating2 }}
    //- template(#pug).
      w-rating(v-model="rating1")
      div.mt2
        strong.mr2 v-model:
        code {{ '\{\{ rating1 \}\}' }}

      w-rating.mt4(v-model="rating2")
      div.mt2
        strong.mr2 v-model:
        code {{ '\{\{ rating2 \}\}' }}
    template(#html).
      &lt;w-rating v-model="rating1"&gt;&lt;/w-rating&gt;
      &lt;div class="mt2"&gt;
        &lt;strong class="mr2"&gt;v-model:&lt;/strong&gt;
        &lt;code&gt;{{ '\{\{ rating1 \}\}' }}&lt;/code&gt;
      &lt;/div&gt;

      &lt;w-rating class="mt4" v-model="rating2"&gt;&lt;/w-rating&gt;
      &lt;div class="mt2"&gt;
        &lt;strong class="mr2"&gt;v-model:&lt;/strong&gt;
        &lt;code&gt;{{ '\{\{ rating2 \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        rating1: 3,
        rating2: 3.42
      })

  title-link(h2) Color
  p.
    Like in most components, you can set a #[code color] for the foreground icons (when on) and a #[code bg-color] for the
    background icons when off.#[br]
    The default background color is grey and the default active color is #[code primary].
  example
    w-rating.my2(color="green")
    br
    w-rating.my2(bg-color="light-green" color="yellow")

    //- template(#pug).
      w-rating.my2(color="green")
      br
      w-rating.my2(bg-color="light-green" color="yellow")
    template(#html).
      &lt;w-rating
        class="my2"
        color="green"&gt;
      &lt;/w-rating&gt;

      &lt;br /&gt;

      &lt;w-rating
        class="my2"
        bg-color="light-green"
        color="yellow"&gt;
      &lt;/w-rating&gt;

  title-link(h2) Custom Icons
  example
    w-rating.my2(icon="mdi mdi-heart" :value="3.4")
    br
    w-rating.my2(icon="mdi mdi-heart-outline" :value="3.4")
    //- template(#pug).
      w-rating.my2(icon="mdi mdi-heart" :value="3")
      br
      w-rating.my2(icon="mdi mdi-heart-outline" :value="3")
    template(#html).
      &lt;w-rating
        class="my2"
        icon="mdi mdi-heart"
        :value="3"&gt;
      &lt;/w-rating&gt;

      &lt;br /&gt;

      &lt;w-rating
        class="my2"
        icon="mdi mdi-heart-outline"
        :value="3"&gt;
      &lt;/w-rating&gt;

  title-link(h2 slug="max") Max (number of buttons)
  p.
    The number of buttons is set via the #[code max] prop.#[br]
    As expected, the #[code max] prop also sets the maximum number you can set or display via the
    #[span.code w-rating] component.#[br]
    When setting a rating, the component will always return an integer between 1 and #[code max] included.
  example
    w-rating.my2(:value="2" :max="3")
    br
    w-rating.my2(:value="6" :max="10")
    //- template(#pug).
      w-rating.my2(:value="2" :max="3")
      br
      w-rating.my2(:value="6" :max="10")
    template(#html).
      &lt;w-rating class="my2" :value="2" :max="3"&gt;&lt;/w-rating&gt;
      &lt;br /&gt;
      &lt;w-rating class="my2" :value="6" :max="10"&gt;&lt;/w-rating&gt;

  title-link(h2) Sizes
  p.
    The rating component's size can be controlled via the preset sizes #[code xs], #[code sm],
    #[code md], #[code lg], #[code xl] or via CSS override.

  example
    w-rating.my2(xs)
    br
    w-rating.my2(sm)
    br
    w-rating.my2(md)
    br
    w-rating.my2(lg)
    br
    w-rating.my2(xl)

    //- template(#pug).
      w-rating.my2(xs)
      br
      w-rating.my2(sm)
      br
      w-rating.my2(md)
      br
      w-rating.my2(lg)
      br
      w-rating.my2(xl)
    template(#html).
      &lt;w-rating class="my2" xs&gt;&lt;/w-rating&gt;
      &lt;br /&gt;
      &lt;w-rating class="my2" sm&gt;&lt;/w-rating&gt;
      &lt;br /&gt;
      &lt;w-rating class="my2" md&gt;&lt;/w-rating&gt;
      &lt;br /&gt;
      &lt;w-rating class="my2" lg&gt;&lt;/w-rating&gt;
      &lt;br /&gt;
      &lt;w-rating class="my2" xl&gt;&lt;/w-rating&gt;

  title-link(h2) Disabled &amp; readonly
  p Use the disabled or readonly options to display a rating but prevent user votes.
  example
    w-rating.my2(:value="3" disabled)
    br
    w-rating.my2(:value="3" readonly)
    //- template(#pug).
      w-rating.my2(:value="3" disabled)
      br
      w-rating.my2(:value="3" readonly)
    template(#html).
      &lt;w-rating class="my2" :value="3" disabled&gt;&lt;/w-rating&gt;
      &lt;br /&gt;
      &lt;w-rating class="my2" :value="3" readonly&gt;&lt;/w-rating&gt;
</template>

<script>
export default {
  data: () => ({
    rating1: 3,
    rating2: 3.42
  })
}
</script>
