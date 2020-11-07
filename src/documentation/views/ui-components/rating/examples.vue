<template lang="pug">
div
  title-link(h2) Default
  example
    w-rating
    template(#pug).
      w-rating

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
    template(#pug).
      w-rating(v-model="rating")
      div.mt2
        strong.mr2 v-model:
        code {{ '\{\{ rating \}\}' }}

      w-rating.mt4(v-model="rating2")
      div.mt2
        strong.mr2 v-model:
        code {{ '\{\{ rating2 \}\}' }}

  title-link(h2) Color
  example
    w-rating.my2(color="green")
    br
    w-rating.my2(bg-color="light-green" color="yellow")

    template(#pug).
      w-rating.my2(color="green")
      br
      w-rating.my2(bg-color="light-green")

  title-link(h2) Custom Icons
  example
    w-rating.my2(icon="mdi mdi-heart")
    template(#pug).
      w-rating.my2(icon="mdi mdi-heart")

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

    template(#pug).
      w-rating.my2(xs)
      br
      w-rating.my2(sm)
      br
      w-rating.my2(md)
      br
      w-rating.my2(lg)
      br
      w-rating.my2(xl)
</template>

<script>
export default {
  data: () => ({
    rating1: 3,
    rating2: 3.42
  })
}
</script>