<template lang="pug">
div
  title-link.mt-4(h1 slug="w-input") #[span.code w-input]

  w-input.mb-1(label="First name" required)
  w-input.mb-1 First name
  w-input.mb-1(placeholder="First name")

  title-link(h2) Outline
  w-input.mb-1(label="Outline" outline)
  w-input.mb-1(placeholder="Outline" outline)
  w-input.mb-1(label="Outline" color="info" outline)
  w-input.mb-1(label="Outline" bg-color="blue-lighter-5" outline)
  w-input.mb-1(label="Outline" bg-color="blue-darker-5" color="white" outline)

  title-link(h2) Shadow
  w-input.mb-1(label="Shadow" shadow)
  w-input.mb-1(label="outline style with Shadow" shadow outline)

  title-link(h2) Round &amp; Tile
  w-flex(wrap :gap="2")
    .grow.mb-4(style="min-width: 200px")
      .mb-2 Default style
      w-input.mb-1(label="Round" round)
      w-input.mb-1(label="Round and shadow" round shadow)
      w-input.mb-1(label="Tile" tile)
    .grow.mb-4(style="min-width: 200px")
      .mb-2 Outline
      w-input.mb-1(label="Round" round outline)
      w-input.mb-1(label="Round" round outline shadow)
      w-input.mb-1(label="Tile" tile outline)

  title-link(h2) Color
  p.mb-4.
    You can set the background color and the text color.#[br]
    By default, the text has the "#[span.code primary]" color.
  w-flex(wrap :gap="2")
    .grow.mb-4(style="min-width: 200px")
      .mb-2 Default style
      w-input.mb-1(value="Some content")
      w-input.mb-1(color="red" value="Some content")
      w-input.mb-1(bg-color="red-lighter-5" value="Some content")
      w-input.mb-1(color="red-darker-1" bg-color="red-lighter-5" value="Some content")
      w-input.mb-1(color="orange-darker-1" bg-color="orange-lighter-5" value="Some content")
    .grow.mb-4(style="min-width: 200px")
      .mb-2 Outline
      w-input.mb-1(value="Some content" outline)
      w-input.mb-1(color="red" value="Some content" outline)
      w-input.mb-1(bg-color="red-lighter-5" value="Some content" outline)
      w-input.mb-1(color="red-darker-1" bg-color="red-lighter-5" value="Some content" outline)
      w-input.mb-1(color="orange-darker-1" bg-color="orange-lighter-5" value="Some content" outline)

  title-link(h2) Label position
  p The default label position is "#[span.code inside]", but it can also be "#[span.code left]" or "#[span.code right]".
  w-input.mb-1(label="Left" label-position="left" outline)
  w-input.mb-1(label="Inside" label-position="inside" outline)
  w-input.mb-1(label="Right" label-position="right" outline)
  p.mt-4.
    #[strong Notes:] when the label is positioned inside and a placeholder is set,
    the label will be hidden and the placeholder will be displayed.

  title-link(h2) Disabled &amp; readonly
  w-input.mb-1(label="Disabled" outline disabled)
  w-input.mb-1(label="Disabled and filled" value="Some content" outline disabled)
  w-input.mb-1(label="Readonly" outline readonly)
  w-input.mb-1(label="Readonly and filled" value="Some content" outline readonly)

  title-link(h2) Types
  p The default type is "#[span.code text]".
  h3 Textual inputs
  ul.input-types
    li
      .code.mb-1 type="email"
      w-input(type="email") Email address
    li
      .code.mb-1 type="number"
      w-input(type="number" min="0" max="100") Age
    li
      .code.mb-1 type="password"
      w-input(type="password") Password
    li
      .code.mb-1 type="search"
      w-input(type="search") Search
    li
      .code.mb-1 type="tel"
      w-input(type="tel") Tel
    li
      .code.mb-1 type="text"
      w-input Text
    li
      .code.mb-1 type="url"
      w-input(type="url") Url
    li
      span.code.mb-1.mr-2 type="hidden"
      | The hidden type is also accepted.
      w-input(type="hidden")

  h3 Other types of inputs
  p For all the other types of input listed bellow, a specific Wave UI component should be used instead:
  ul.other-input-types
    li
      span.code.mr-2 type="button"
      span.grey use #[code w-button] instead
    li
      span.code.mr-2 type="checkoutline"
      span.grey use #[code w-checkoutline] instead
    li
      span.code.mr-2 type="color"
      span.grey use #[code w-color-picker] instead
    li
      span.code.mr-2 type="date"
      span.grey use #[code w-date-picker] instead
    li
      span.code.mr-2 type="file"
      span.grey use #[code w-file-input] instead
    li
      span.code.mr-2 type="image"
      span.grey use #[code w-image] instead
    li
      span.code.mr-2 type="radio"
      span.grey use #[code w-radio] instead
    li
      span.code.mr-2 type="range"
      span.grey use #[code w-slider] instead
    li
      span.code.mr-2 type="reset"
      span.grey use #[code w-button] instead
    li
      span.code.mr-2 type="submit"
      span.grey use #[code w-button] instead
    li
      span.code.mr-2 type="time"
      span.grey use #[code w-time-picker] instead
</template>

<script>
export default {

}
</script>

<style lang="scss">
ul.input-types li {margin-bottom: 8px;}
</style>
