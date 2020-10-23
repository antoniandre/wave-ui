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
    template(#pug).
      w-rating(v-model="rating")
      div.mt2
        strong.mr2 v-model:
        code {{ '\{\{ rating \}\}' }}

  title-link(h2) Color
  example
    w-rating.d-block.my4(color="green")
    w-rating.d-block.my4(bg-color="light-green" color="yellow")
    template(#pug).
      w-rating.d-block.my4(color="green")
      w-rating.d-block.my4(bg-color="light-green")

  title-link(h2) Custom Icons
  example
    w-rating.d-block.my4(icon="mdi mdi-heart")
    template(#pug).
      w-rating.d-block.my4(icon="mdi mdi-heart")

  title-link(h2) Sizes
  example
    w-rating.d-block.my4(xs)
    w-rating.d-block.my4(sm)
    w-rating.d-block.my4(md)
    w-rating.d-block.my4(lg)
    w-rating.d-block.my4(xl)
    template(#pug).
      w-rating.d-block.my4(xs)
      w-rating.d-block.my4(sm)
      w-rating.d-block.my4(md)
      w-rating.d-block.my4(lg)
      w-rating.d-block.my4(xl)
</template>

<script>
export default {
  data: () => ({
    rating1: 3
  })
}
</script>