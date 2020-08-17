<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-input")
    | w-input
    w-tag.ml3(bg-color="orange" color="white" lg) In progress

  title-link(h2) Label and / or placeholder
  example
    w-input.mb1(label="First name" required)
    //- w-input.mb1 First name
    w-input.mb1(placeholder="First name")
    w-input.mb1(label="First name" placeholder="First name")
    template(#pug).
      w-input.mb1(label="First name" required)
      w-input.mb1(placeholder="First name")
      w-input.mb1(label="First name" placeholder="First name")

  title-link(h2) Outline
  example
    w-input.mb1(label="Outline" outline)
    w-input.mb1(placeholder="Outline" outline)
    w-input.mb1(label="Outline" color="info" outline)
    w-input.mb1(label="Outline" bg-color="blue-light5" outline)
    w-input.mb1(label="Outline" bg-color="blue-dark5" color="blue-light4" outline)
    template(#pug).
      w-input.mb1(label="Outline" outline)
      w-input.mb1(placeholder="Outline" outline)
      w-input.mb1(label="Outline" color="info" outline)
      w-input.mb1(label="Outline" bg-color="blue-light5" outline)
      w-input.mb1(label="Outline" bg-color="blue-dark5" color="blue-light4" outline)

  title-link(h2) Shadow
  example
    w-input.mb4(label="Shadow" shadow)
    w-input.mb2(label="Outline with shadow" shadow outline)
    template(#pug).
      w-input.mb4(label="Shadow" shadow)
      w-input.mb2(label="Outline with shadow" shadow outline)

  title-link(h2) Round &amp; Tile
  example
    w-flex(wrap :gap="2")
      .grow.mb4(style="min-width: 200px")
        .title4.mb2 Underline style (default)
        w-input.mb1(label="Round" round)
        w-input.mb1(label="Round and shadow" round shadow)
        w-input.mb1(label="Tile" tile)
      .grow.mb4(style="min-width: 200px")
        .title4.mb2 Outline style
        w-input.mb1(label="Round" round outline)
        w-input.mb1(label="Round and shadow" round outline shadow)
        w-input.mb1(label="Tile" tile outline)
    template(#pug).
      w-flex(wrap :gap="2")
        .grow.mb4(style="min-width: 200px")
          .title4.mb2 Underline style (default)
          w-input.mb1(label="Round" round)
          w-input.mb1(label="Round and shadow" round shadow)
          w-input.mb1(label="Tile" tile)

        .grow.mb4(style="min-width: 200px")
          .title4.mb2 Outline style
          w-input.mb1(label="Round" round outline)
          w-input.mb1(label="Round and shadow" round outline shadow)
          w-input.mb1(label="Tile" tile outline)

  title-link(h2) Color
  p.mb4.
    You can set the background color and the text color.#[br]
    By default, the text has the "#[span.code primary]" color.
  example
    w-flex(wrap :gap="2")
      .grow.mb4(style="min-width: 200px")
        .title4.mb2 Underline style (default)
        w-input.mb1(value="Some content")
        w-input.mb1(color="red" value="Some content")
        w-input.mb1(bg-color="red-light5" value="Some content")
        w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content")
        w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content")
      .grow.mb4(style="min-width: 200px")
        .title4.mb2 Outline style
        w-input.mb1(value="Some content" outline)
        w-input.mb1(color="red" value="Some content" outline)
        w-input.mb1(bg-color="red-light5" value="Some content" outline)
        w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content" outline)
        w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content" outline)
    template(#pug).
      w-flex(wrap :gap="2")
        .grow.mb4(style="min-width: 200px")
          .title4.mb2 Underline style (default)
          w-input.mb1(value="Some content")
          w-input.mb1(color="red" value="Some content")
          w-input.mb1(bg-color="red-light5" value="Some content")
          w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content")
          w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content")

        .grow.mb4(style="min-width: 200px")
          .title4.mb2 Outline style
          w-input.mb1(value="Some content" outline)
          w-input.mb1(color="red" value="Some content" outline)
          w-input.mb1(bg-color="red-light5" value="Some content" outline)
          w-input.mb1(color="red-dark1" bg-color="red-light5" value="Some content" outline)
          w-input.mb1(color="orange-dark1" bg-color="orange-light5" value="Some content" outline)

  title-link(h2) Label position
  p The default label position is "#[span.code inside]", but it can also be "#[span.code left]" or "#[span.code right]".
  example
    w-input.mb2(label="Inside" label-position="inside" outline)
    w-input.mb2(label="Left" label-position="left" outline)
    w-input.mb2(label="Right" label-position="right" outline)
    template(#pug).
      w-input.mb2(label="Inside" label-position="inside" outline)
      w-input.mb2(label="Left" label-position="left" outline)
      w-input.mb2(label="Right" label-position="right" outline)
  p.mt4.
    #[strong Notes:] when the label is positioned inside and a placeholder is set,
    the label will be hidden and the placeholder will be displayed.

  title-link(h2) Icons inside
  example
    .title4.mb2 Label outside
    w-input.mb2(label="Left" label-position="left" outline icon-inside-left="wi-check")
    w-input.mb2(label="Right" label-position="right" outline icon-inside-left="wi-check")
    w-input.mb2(label="Right" label-position="right" outline icon-inside-right="wi-check")
    .title4.mt6.mb2 Label inside
    w-input.mb2(label="Inside" label-position="inside" outline icon-inside-left="wi-search")
    w-input.mb2(label="Inside" label-position="inside" outline icon-inside-right="wi-search")
    template(#pug).
      .title4.mb2 Label outside
      w-input.mb2(label="Left" label-position="left" outline icon-inside-left="wi-check")
      w-input.mb2(label="Right" label-position="right" outline icon-inside-left="wi-check")
      w-input.mb2(label="Right" label-position="right" outline icon-inside-right="wi-check")

      .title4.mt6.mb2 Label inside
      w-input.mb2(label="Inside" label-position="inside" outline icon-inside-left="wi-search")
      w-input.mb2(label="Inside" label-position="inside" outline icon-inside-right="wi-search")

  title-link(h2) Disabled &amp; readonly
  example
    w-input.mb3(label="Disabled" outline disabled)
    w-input.mb3(label="Disabled and filled" value="Some content" outline disabled)
    w-input.mb3(label="Readonly" outline readonly)
    w-input.mb3(label="Readonly and filled" value="Some content" outline readonly)
    template(#pug).

  title-link(h2) Types
  p The default type is "#[span.code text]".
  h3 Textual inputs
  example
    ul.input-types
      li
        .code.mb1 type="email"
        w-input(type="email") Email address
      li
        .code.mb1 type="number"
        w-input(type="number" min="0" max="100") Age
      li
        .code.mb1 type="password"
        w-input(type="password") Password
      li
        .code.mb1 type="search"
        w-input(type="search") Search
      li
        .code.mb1 type="tel"
        w-input(type="tel") Tel
      li
        .code.mb1 type="text"
        w-input Text
      li
        .code.mb1 type="url"
        w-input(type="url") Url
      li
        span.code.mb1.mr2 type="hidden"
        | The hidden type is also accepted.
        w-input(type="hidden")
    template(#pug).
      ul.input-types
        li
          .code.mb1 type="email"
          w-input(type="email") Email address
        li
          .code.mb1 type="number"
          w-input(type="number" min="0" max="100") Age
        li
          .code.mb1 type="password"
          w-input(type="password") Password
        li
          .code.mb1 type="search"
          w-input(type="search") Search
        li
          .code.mb1 type="tel"
          w-input(type="tel") Tel
        li
          .code.mb1 type="text"
          w-input Text
        li
          .code.mb1 type="url"
          w-input(type="url") Url
        li
          span.code.mb1.mr2 type="hidden"
          | The hidden type is also accepted.
          w-input(type="hidden")

  h3 Other types of inputs
  p For all the other types of input listed bellow, a specific Wave UI component should be used instead:
  ul.other-input-types
    li
      span.code.mr2 type="button"
      span.grey use #[code w-button] instead
    li
      span.code.mr2 type="checkoutline"
      span.grey use #[code w-checkoutline] instead
    li
      span.code.mr2 type="color"
      span.grey use #[code w-color-picker] instead
    li
      span.code.mr2 type="date"
      span.grey use #[code w-date-picker] instead
    li
      span.code.mr2 type="file"
      span.grey use #[code w-file-input] instead
    li
      span.code.mr2 type="image"
      span.grey use #[code w-image] instead
    li
      span.code.mr2 type="radio"
      span.grey use #[code w-radio] instead
    li
      span.code.mr2 type="range"
      span.grey use #[code w-slider] instead
    li
      span.code.mr2 type="reset"
      span.grey use #[code w-button] instead
    li
      span.code.mr2 type="submit"
      span.grey use #[code w-button] instead
    li
      span.code.mr2 type="time"
      span.grey use #[code w-time-picker] instead
</template>

<script>
export default {

}
</script>

<style lang="scss">
ul.input-types li {margin-bottom: 8px;}
</style>
