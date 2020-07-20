<template lang="pug">
div
  title-link.mt-4(h1) Spaces

  title-link(h2) Content spacing
  p.
    Margins and paddings are incrementable from 1 to 12 using this syntax: #[code="ma-[number]"],
    #[code="pa-[number]"].#[br]
    You can also set a space on a single side with #[span.code l], #[span.code r], #[span.code t],
    #[span.code b] for left, right, top, bottom like so: #[code="m[side]-[number]"],
    #[code="p[side]-[number]"].#[br]#[br]
    #[span.code x] and #[span.code y] will set both left and right or top and bottom together:
    #[code="mx-[number]"], #[code="px-[number]"].

  example
    .orange-light-4--bg.pa-12
      .yellow-light-5--bg.pa-3.
        The orange container has a #[span.code pa-12] class which results in a padding of: 12 x 4 x
        base-font-size pixels.#[br]
        The default base font size is 14px but it's easy to override it in your SCSS, as well as the
        increment for #[span.code pa-x] and #[span.code ma-x] classes. Read on in the
        #[router-link(to="customization") customization] page.#[br]

      .green-light-4--bg.mt-8.pa-3.
        This green container has a #[span.code mt-8] class which results in a top margin of: 8 x 4 x
        base-font-size pixels.
    template(#html).
      &lt;div class="orange-light-4--bg pa-12"&gt;
        &lt;div class="yellow-light-5--bg pa-3"&gt;
          The orange container has a pa-12 class which results in a padding of: 12 x 4 x base-font-size pixels.
          The default base font size is 14px but it's easy to override it in your SCSS, as well as the
          increment for pa-x and ma-x classes.
        &lt;/div&gt;

        &lt;div class="green-light-4--bg mt-8 pa-3"&gt;
          This green container has an mt-8 class which results in a top margin of: 8 x 4 x base-font-size pixels.
        &lt;/div&gt;
      &lt;/div&gt;

  title-link(h3) Negative margin
  p.
    Sometimes you may need negative margins, Wave UI also provides 12 increments for this purpose.#[br]
    In this example, the green container is moved up whereas its top should touch the bottom of the
    orange container.
  example
    .orange-light-4--bg.pa-8
    .green-light-4--bg.mt-n8.mx-8.pa-3.
      This green container has a #[span.code mt-n8] class which results in a negative top margin of: 8 x 4 x
      base-font-size pixels.
    template(#html).
      &lt;div class="orange-light-4--bg pa-8"&gt;
        &lt;div class="green-light-4--bg mt-n8 mx-8 pa-3"&gt;
          This green container has a mt-n8 class which results in a negative top margin of: 8 x 4 x
          base-font-size pixels.
        &lt;/div&gt;
      &lt;/div&gt;
</template>
