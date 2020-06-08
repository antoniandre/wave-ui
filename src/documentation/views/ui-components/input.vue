<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-input]

  w-input.mb-1(label="First name" required)
  w-input.mb-1 First name
  w-input.mb-1(placeholder="First name")

  h2 Round &amp; Tile
  w-input.mb-1(label="Round" placeholder="Round" round)
  w-input.mb-1(label="Tile" placeholder="Tile" tile)

  h2 Shadow
  w-input.mb-1(label="Round" placeholder="Round" shadow)

  h2 Underline style
  w-input.mb-1(label="Round" underline)
  w-input.mb-1(label="Round" color="info" underline)

  h2 Color
  p You can set the background color and the text color.
  p By default, the text has the "primary" color.
  w-input.mb-1(value="Some content")
  w-input.mb-1(color="red" value="Some content")
  w-input.mb-1(bg-color="red-lighten-5" value="Some content")
  w-input.mb-1(color="red-darken-1" bg-color="red-lighten-5" value="Some content")
  w-input.mb-1(color="orange-darken-1" bg-color="orange-lighten-5" value="Some content")

  h2 Label position
  p The default label position is "inside", but it can also be "left" or "right".
  w-input.mb-1(label="Left" label-position="left")
  w-input.mb-1(label="Inside" label-position="inside")
  w-input.mb-1(label="Right" label-position="right")
  p.mt-4.
    #[strong Notes:] when the label is positioned inside and a placeholder is set,
    the label will be hidden and the placeholder will be displayed.

  h2 Types
  p The default type is "text".
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
      span.code.mr-2 type="checkbox"
      span.grey use #[code w-checkbox] instead
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
