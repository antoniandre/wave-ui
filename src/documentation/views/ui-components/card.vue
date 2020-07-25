<template lang="pug">
div
  title-link.mt4.code(h1) w-card

  title-link(h2) Card with a title and no color
  example
    w-card(card-title="Card title")
      p.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
        Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
        dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
        aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
    template(#pug).
      w-card(card-title="Card title")
        p.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.#[="#[br]#[br]"]
          Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
          dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
          aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

  title-link(h2) Colored card with no title and no border
  example
    w-card(bg-color="secondary" no-border)
      p.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
        Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
        dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
        aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
    template(#pug).
      w-card(bg-color="secondary" no-border)
        p.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.#[="#[br]#[br]"]
          Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
          dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
          aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

  title-link(h2) Tiled card with a top toolbar
  p.
    The w-card component will detect if there is a toolbar in the title slot or in the actions
    slot and will remove the default padding and border on this slot if there is.
  example
    w-card(tile)
      template(#title)
        w-toolbar
          .title3.my0 Card title
          .spacer
          span.ml2 Item 1
          span.ml2 Item 2
          span.ml2 Item 3
      p.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
        Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
        dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
        aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
    template(#pug).
      w-card(tile)
        template(#title="")
          w-toolbar
            .title3.my0 Card title
            .spacer
            span.ml2 Item 1
            span.ml2 Item 2
            span.ml2 Item 3
        p.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.#[="#[br]#[br]"]
          Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
          dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
          aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

  title-link(h2) Card with shadow
  example
    w-card(shadow)
      p.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
        Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
        dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
        aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
    template(#pug).
      w-card(shadow)
        p.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.#[="#[br]#[br]"]
          Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
          dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
          aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.

  title-link(h2) Card with actions
  p The actions slot is optional but facilitates the addition of action buttons in a flex layout.
  example
    w-card
      template(#title) Terms and conditions
      p.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.
      template(#actions)
        .spacer
        w-button.mr2(bg-color="error") I disagree
        w-button(bg-color="success") I agree
    template(#pug).
      w-card
        template(#title="") Terms and conditions
        p.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.
        template(#actions="")
          .spacer
          w-button.mr2(bg-color="error") I disagree
          w-button(bg-color="success") I agree
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
