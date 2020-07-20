<template lang="pug">
div
  title-link.mt-4(h1) Layout

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
    .pa-12.orange-light-4--bg
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
      &lt;div class="pa-12 orange-light-4--bg"&gt;
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
  p Sometimes you may need negative margins, Wave UI also provide 12 increments for this purpose.
  example
    .pa-12.orange-light-4--bg
      .yellow-light-5--bg.pa-3.
        The orange container has a #[span.code pa-12] class which results in a padding of: 12 x 4 x
        base-font-size pixels.#[br]
        The default base font size is 14px but it's easy to override it in your SCSS, as well as the
        increment for #[span.code pa-x] and #[span.code ma-x] classes. Read on in the
        #[router-link(to="customization") customization] page.#[br]

      .green-light-4--bg.mt-8.pa-3.
        This green container has a #[span.code mt-8] class which results in a top margin of: 8 x 4 x
        base-font-size pixels.

  title-link(h2) Flex layout classes
  p the #[code .w-flex] class allows a flex layout that you can easily control with the following classes.
  ul
    li
      code.mr-2 .column
      | Displays in column (#[span.code flex-direction: column]).
    li.mt-1
      code.mr-2 .wrap
      | Wraps the flex content when it does not fit (#[span.code flex-wrap: wrap]).
    li.mt-1
      code.mr-2 .grow
      | Tells the element to occupy the available space (#[span.code flex-grow: 1]).
    li.mt-1
      code.mr-2 .no-grow
      | Tells the element to #[strong not] occupy the available space (#[span.code flex-grow: 0]).
    li.mt-1
      code.mr-2 .shrink
      | Tells the element to shrink if there is not enough space (#[span.code flex-shrink: 1]).
    li.mt-1
      code.mr-2 .no-shrink
      | Tells the element to #[strong not] shrink if there is not enough space (#[span.code flex-shrink: 0]).
    li.mt-1
      code.mr-2 .basis-0
      | Distribute the children elements with equal space (#[span.code flex-basis: 0]).#[br]
      | By default, flex containers will distribute children elements according to their content width.
    li.mt-1
      code.mr-2 .fill-height
      | Sets a height of 100%.

  title-link(h3) Alignments
  ul
    li.mt-1
      code.mr-2 .align-start
      | Applies this CSS rule: #[span.code align: flex-start].
    li.mt-1
      code.mr-2 .align-center
      | Applies this CSS rule: #[span.code align: center].
    li.mt-1
      code.mr-2 .align-end
      | Applies this CSS rule: #[span.code align: flex-end].
    li.mt-1
      code.mr-2 .align-self-start
      | Applies this CSS rule: #[span.code align-self: flex-start].
    li.mt-1
      code.mr-2 .align-self-center
      | Applies this CSS rule: #[span.code align-self: center].
    li.mt-1
      code.mr-2 .align-self-end
      | Applies this CSS rule: #[span.code align-self: flex-end].
    li.mt-1
      code.mr-2 .justify-start
      | Applies this CSS rule: #[span.code justify: flex-start].
    li.mt-1
      code.mr-2 .justify-center
      | Applies this CSS rule: #[span.code justify: center].
    li.mt-1
      code.mr-2 .justify-end
      | Applies this CSS rule: #[span.code justify: flex-end].
    li.mt-1
      code.mr-2 .justify-self-start
      | Applies this CSS rule: #[span.code justify-self: flex-start].
    li.mt-1
      code.mr-2 .justify-self-center
      | Applies this CSS rule: #[span.code justify-self: center].
    li.mt-1
      code.mr-2 .justify-self-end
      | Applies this CSS rule: #[span.code justify-self: flex-end].
    li.mt-1
      code.mr-2 .justify-space-between
      | Applies this CSS rule: #[span.code justify: space-between].

  p.mt-6.
    The #[code.mx-1 .spacer] class is also very helpful to separate 2 elements as is will occupy the available
    space and push the elements on each side.

  div.grow.mt-6
    .subtitle w-flex, row direction (default)
    example
      .code.mb-1 .justify-start (default)
      .w-flex.pa-3.blue-light-5--bg.align-center.justify-start
        .box
        .box
        .box
      .code.mt-2.mb-1 .justify-center
      .w-flex.pa-3.blue-light-5--bg.align-center.justify-center
        .box
        .box
        .box
      .code.mt-2.mb-1 .justify-space-between
      .w-flex.pa-3.blue-light-5--bg.align-center.justify-space-between
        .box
        .box
        .box
      .code.mt-2.mb-1 .justify-end
      .w-flex.pa-3.blue-light-5--bg.align-center.justify-end
        .box
        .box
        .box

  div.grow
    .subtitle w-flex, column direction
    example
      .wrapper.w-flex
        .w-flex.column.mx-1.fill-height.basis-0
          p.code.mb-1 .justify-start (default)
          .w-flex.column.fill-height.pa-3.blue-light-5--bg.align-center.justify-start
            .box
            .box
            .box
        .w-flex.column.mx-1.fill-height.basis-0
          p.code.mb-1 .justify-center
          .w-flex.column.fill-height.pa-3.blue-light-5--bg.align-center.justify-center
            .box
            .box
            .box
        .w-flex.column.mx-1.fill-height.basis-0
          p.code.mb-1 .justify-space-between
          .w-flex.column.fill-height.pa-3.blue-light-5--bg.align-center.justify-space-between
            .box
            .box
            .box
        .w-flex.column.mx-1.fill-height.basis-0
          p.code.mb-1 .justify-end
          .w-flex.column.fill-height.pa-3.blue-light-5--bg.align-center.justify-end
            .box
            .box
            .box

  title-link(h2 slug="grid-system")
    | Grid system
    w-tag.ml-3(bg-color="red" color="white") Coming soon

  p 12-cell based.
</template>

<style lang="scss">
.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper {height: 200px;}
</style>
