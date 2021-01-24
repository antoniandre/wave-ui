<template lang="pug">
div
  title-link(h2) Simple card with a title
  p.
    When the title is simple you can pass it directly as a prop like in this example.#[br]
    You can also use the #[code title] slot to pass more complex data and benefit from the Vue template
    compilation.
  example
    w-card(title="Card title" title-class="blue-light5--bg")
      p.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
        Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
        dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
        aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
    template(#html).
      &lt;w-card title="Card title" title-class="blue-light5--bg"&gt;
        &lt;p&gt;
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.&lt;br&gt;&lt;br&gt;
          Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
          dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
          aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
        &lt;/p&gt;
      &lt;/w-card&gt;

  title-link(h2) Colored card with no title and no border
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.

  example
    w-card(bg-color="secondary" no-border)
      p.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
        Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
        dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
        aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
    template(#html).
      &lt;w-card bg-color="secondary" no-border&gt;
        &lt;p&gt;
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.&lt;br&gt;&lt;br&gt;
          Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
          dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
          aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
        &lt;/p&gt;
      &lt;/w-card&gt;

  title-link(h2) Tiled card with a top toolbar
  p.
    The #[span.code w-card] component will detect if there is a toolbar in the title slot or in the
    actions slot and will remove the default padding and border on this slot if there is.
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
    template(#html).
      &lt;w-card tile&gt;
        &lt;template #title&gt;
          &lt;w-toolbar&gt;
            &lt;div class="title3"&gt;Card title&lt;/div&gt;
            &lt;div class="spacer"&gt;&lt;/div&gt;
            &lt;span class="ml2"&gt;Item 1&lt;/span&gt;
            &lt;span class="ml2"&gt;Item 2&lt;/span&gt;
            &lt;span class="ml2"&gt;Item 3&lt;/span&gt;
          &lt;/w-toolbar&gt;
        &lt;/template&gt;

        &lt;p&gt;
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.&lt;br&gt;&lt;br&gt;
          Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
          dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
          aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
        &lt;/p&gt;
      &lt;/w-card&gt;

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
    template(#html).
      &lt;w-card shadow&gt;
        &lt;p&gt;
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
          quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
          odit dolor labore eveniet at vel sequi nostrum.&lt;br&gt;&lt;br&gt;
          Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
          dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
          aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
        &lt;/p&gt;
      &lt;/w-card&gt;

  title-link(h2) Card with actions
  p The actions slot is optional but facilitates the addition of action buttons in a flex layout.
  example
    w-card(title="Terms and conditions")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      | odit dolor labore eveniet at vel sequi nostrum.
      template(#actions)
        .spacer
        w-button.mr2(bg-color="error") I disagree
        w-button(bg-color="success") I agree
    template(#html).
      &lt;w-card title="Terms and conditions"&gt;
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.

        &lt;template #actions&gt;
          &lt;div class="spacer"&gt;&lt;/div&gt;
          &lt;w-button bg-color="error" class="mr2"&gt;I disagree&lt;/w-button&gt;
          &lt;w-button bg-color="success"&gt;I agree&lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-card&gt;

  title-link(h2) Card with image
  p.
    Providing a card main image is as simple as #[code image="your-image-source"].
  title-link(h3) Standard use
  example
    w-card(:image="`${baseUrl}images/japanese-wave.png`")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      | odit dolor labore eveniet at vel sequi nostrum.
      template(#actions)
        .spacer
        w-button Read more
    template(#html).
      &lt;w-card :image="`${baseUrl}images/japanese-wave.png`"&gt;
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.

        &lt;template #actions&gt;
          &lt;div class="spacer"&gt;&lt;/div&gt;
          &lt;w-button&gt;Read more&lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-card&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use `process.env.BASE_URL`
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })

  title-link(h3) Content on top of the image
  p.
    It is possible to add some content on top of the image using the #[code image-content] slot.#[br]
    Using the #[code image-props] prop, you can tailor the #[strong.code w-image] use to your needs,
    like adding CSS classes to the content wrapper or change the default image ratio.
  example
    w-card(
      :image="`${baseUrl}images/japanese-wave.png`"
      :image-props="{ contentClass: 'align-start pa1', ratio: 1 / 4 }")
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
      | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
      | odit dolor labore eveniet at vel sequi nostrum.
      template(#image-content)
        .title1.pink Wave UI
      template(#actions)
        .spacer
        w-button Read more
    template(#html).
      &lt;w-card :image="`${baseUrl}images/japanese-wave.png`"&gt;
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
        quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
        odit dolor labore eveniet at vel sequi nostrum.

        &lt;template #actions&gt;
          &lt;div class="spacer"&gt;&lt;/div&gt;
          &lt;w-button&gt;Read more&lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-card&gt;
    template(#js).
      data: () => ({
        // With Webpack or Vue CLI, you can also use process.env.BASE_URL
        // if the image is in the public/ folder.
        baseUrl: 'https://antoniandre.github.io/wave-ui/'
      })
</template>

<script>
export default {
  data: () => ({
    baseUrl: process.env.BASE_URL
  })
}
</script>

<style lang="scss">

</style>
