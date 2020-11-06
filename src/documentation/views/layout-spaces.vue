<template lang="pug">
main
  title-link.mt4(h1) Spaces

  title-link(h2) Content spacing
  p.
    Margins and paddings are incrementable from 0 to 12 using this syntax: #[code="ma[number]"],
    #[code="pa[number]"] where number is a number in this interval #[span.code="[0, 12]"] for paddings
    and #[span.code="[-12, 12]"] for margins.#[br]
    You can also set a space on a single side with #[code l], #[code r], #[code t],
    #[code b] for left, right, top, bottom like so: #[code="m[side][number]"],
    #[code="p[side][number]"].#[br]#[br]
    #[code x] and #[code y] will set both left and right or top and bottom together:
    #[code="mx[number]"], #[code="px[number]"]. And #[code a] is for all the sides.

  example
    .orange-light4--bg.pa12
      .yellow-light5--bg.pa3.
        The orange container has a #[span.code pa12] class which results in a padding of: 12 x 4 x
        base-font-size pixels.#[br]
        The default base font size is 14px but it's easy to override it in your SCSS, as well as the
        increment for #[span.code pax] and #[span.code max] classes. Read on in the
        #[router-link(to="customization") customization] page.#[br]

      .green-light4--bg.mt8.pa3.
        This green container has a #[span.code mt8] class which results in a top margin of: 8 x 4 x
        base-font-size pixels.
    template(#html).
      &lt;div class="orange-light4--bg pa12"&gt;
        &lt;div class="yellow-light5--bg pa3"&gt;
          The orange container has a `pa12` class which results in a padding of: 12 x 4 x base-font-size pixels.
          The default base font size is 14px but it's easy to override it in your SCSS, as well as the
          increment for `pax` and `max` classes.
        &lt;/div&gt;

        &lt;div class="green-light4--bg mt8 pa3"&gt;
          This green container has an `mt8` class which results in a top margin of: 8 x 4 x base-font-size pixels.
        &lt;/div&gt;
      &lt;/div&gt;

  title-link(h3) Negative margin
  p.
    Sometimes you may need negative margins, Wave UI also provides 12 negative increments for this
    purpose.#[br]
    The syntax for it is #[code="m[side]-[number]"] with a minus for negative - more like the famous
    Emmet plugin that came along with Sublime Text!#[br]
    In this example, the green container is moved up whereas its top should touch the bottom of the
    orange container.
  example
    .orange-light4--bg.pa8
    .green-light4--bg.mt-8.mx8.pa3.
      This green container has a #[span.code mt-8] class which results in a negative top margin of: -8 x 4 x
      base-font-size pixels.
    template(#html).
      &lt;div class="orange-light4--bg pa8"&gt;
        &lt;div class="green-light4--bg mt-8 mx8 pa3"&gt;
          This green container has a `mt-8` class which results in a negative top margin of: 8 x 4 x
          base-font-size pixels.
        &lt;/div&gt;
      &lt;/div&gt;

  title-link(h3) Margin auto
  p.
    Last but not least, margin: auto is also possible with the #[code a] modifier.#[br]
    The syntax for it is #[code="m[side]a"]
  example
    .orange-light4--bg.pa8
      .green-light4--bg.mxa.pa3(style="max-width: 240px").
        This green container has a #[span.code mxa] class which results in a margin auto on the left &amp; right.
    template(#html).
      &lt;div class="orange-light4--bg pa8"&gt;
        &lt;div class="green-light4--bg mxa pa3" style="max-width: 240px"&gt;
          This green container has a `mxa` class which results in a margin auto on the left &amp; right.
        &lt;/div&gt;
      &lt;/div&gt;
</template>
