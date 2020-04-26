<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-card]

  h2 Card with a title and no color
  w-card.mt-4(card-title="Card title")
    p.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
      Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
      dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
      aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

  h2 Colored card with no title and no border
  w-card.mt-4(bg-color="secondary" no-border)
    p.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
      Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
      dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
      aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

  h2 Tiled card with a top toolbar
  w-card.mt-4(tile title-class="pa-0")
    template(v-slot:title)
      w-toolbar.px-n2(no-border)
        .subtitle.my-0 Card title
        .spacer
        span.ml-2 Item 1
        span.ml-2 Item 2
        span.ml-2 Item 3
    p.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
      Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
      dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
      aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

  h2 Card with shadow
  w-card.mt-4(shadow)
    p.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
      Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
      dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
      aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
    //- template(v-slot:actions)
    //- template(v-slot:title)
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>