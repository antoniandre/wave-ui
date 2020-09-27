<template lang="pug">
div
  title-link(h2) Default
  p.
    By default the #[span.code w-input] component has a label inside the input field, that moves up
    above the field on focus or when the field has some content or a placeholder.#[br]
  example
    w-input Label
    template(#pug).
      w-input Label

  title-link(h2) Label and / or placeholder
  example
    w-input.mb4(label="Label" required)
    w-input.mb3(placeholder="Placeholder")
    w-input.mb3(label="Label" placeholder="Placeholder")
    template(#pug).
      w-input.mb4(label="Label" required)
      w-input.mb3(placeholder="Placeholder")
      w-input.mb3(label="Label" placeholder="Placeholder")

  title-link(h2) Static label
  p.
    By default the label is positioned inside and on field focus, it will move up above the field
    and shrink.#[br]
    It is possible to keep it inside and disable the animation with the #[code static-label] option.
  p.mt4.
    #[strong Note:] If this option is set to true and the label is positioned inside when a placeholder is set,
    only the placeholder will be displayed.

  example
    w-input.mb3(label="Label" static-label)
    template(#pug).
      w-input.mb4(label="Label" static-label)

  title-link(h2) Outline
  example
    w-input.mb4(label="Outline" outline)
    w-input.mb2(placeholder="Outline" outline)
    w-input.mb2(label="Outline" color="info" outline)
    w-input.mb2(label="Outline" bg-color="blue-light5" outline)
    template(#pug).
      w-input.mb2(label="Outline" outline)
      w-input.mb2(placeholder="Outline" outline)
      w-input.mb2(label="Outline" color="info" outline)
      w-input.mb2(label="Outline" bg-color="blue-light5" outline)

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

  title-link(h2) Colors
  p.mb4.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.#[br]
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
  alert(tip).
    You could also set a label outside of the #[span.code w-input] and display it nicely with flex.
    But it is convenient to let the #[span.code w-input] component handle the field focus event on
    label click.#[br]
    The #[span.code label] prop is here for this purpose and accepts any HTML.

  example
    w-input.mb2(label="Inside" label-position="inside" outline)
    w-input.mb2(label="Left" label-position="left" outline)
    w-input.mb2(label="Right" label-position="right" outline)
    template(#pug).
      w-input.mb2(label="Inside" label-position="inside" outline)
      w-input.mb2(label="Left" label-position="left" outline)
      w-input.mb2(label="Right" label-position="right" outline)

  title-link(h2) Custom label via default slot
  p.
    It is convenient to have the label inside the #[span.code w-input] component to let it handle
    the field focus event on label click.#[br]
    The #[span.code label] prop accepts any HTML, but because passing complex html via a prop is not fun,
    there is also a prop for setting the label wish will grant more freedom.

  example
    w-input.mb2(label-position="inside" outline)
      w-icon.orange mdi mdi-arrow-right
      span.purple.mx1 Inside
      w-icon.orange mdi mdi-arrow-left
    w-input.mb2(label-position="left" outline)
      span.green.mr1 Left
      w-icon.orange mdi mdi-arrow-right
    w-input.mb2(label-position="right" outline)
      w-icon.orange mdi mdi-arrow-left
      span.red.ml1 Right
    template(#pug).
      w-input.mb2(label-position="inside" outline)
        w-icon.orange mdi mdi-arrow-right
        span.purple.mx1 Inside
        w-icon.orange mdi mdi-arrow-left
      w-input.mb2(label-position="left" outline)
        span.green.mr1 Left
        w-icon.orange mdi mdi-arrow-right
      w-input.mb2(label-position="right" outline)
        w-icon.orange mdi mdi-arrow-left
        span.red.ml1 Right

  title-link(h2) Inner icons
  example
    .title4.mb2 Label outside
    w-input.mb2(label="Username" label-position="left" outline inner-icon-left="mdi mdi-account")
    w-input.mb2(
      label="Password"
      :type="isPassword ? 'password' : 'text'"
      :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
      :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
      @click:inner-icon-right="isPassword = !isPassword")
    w-input.mb2(
      label="Password"
      :type="isPassword ? 'password' : 'text'"
      label-position="left"
      outline
      :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
      @click:inner-icon-right="isPassword = !isPassword")
    w-input.mb2(label="Right" label-position="right" outline inner-icon-left="wi-check")
    w-input.mb2(label="Right" label-position="right" outline inner-icon-right="wi-check")
    .title4.mt6.mb2 Label inside
    w-input.mb2(label="Inside" label-position="inside" outline inner-icon-left="wi-search")
    w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")
    template(#pug).
      .title4.mb2 Label outside
      w-input.mb2(label="Username" label-position="left" outline inner-icon-left="mdi mdi-account")
      w-input.mb2(
        label="Password"
        :type="isPassword ? 'password' : 'text'"
        :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        @click:inner-icon-right="isPassword = !isPassword")
      w-input.mb2(
        label="Password"
        :type="isPassword ? 'password' : 'text'"
        label-position="left"
        outline
        :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        @click:inner-icon-right="isPassword = !isPassword")
      w-input.mb2(label="Right" label-position="right" outline inner-icon-left="wi-check")
      w-input.mb2(label="Right" label-position="right" outline inner-icon-right="wi-check")

      .title4.mt6.mb2 Label inside
      w-input.mb2(label="Inside" label-position="inside" outline inner-icon-left="wi-search")
      w-input.mb2(label="Inside" label-position="inside" outline inner-icon-right="wi-search")
    template(#js).
      data: () => ({
        isPassword: true
      })

  title-link(h2) Disabled &amp; readonly
  example
    w-input.mb3(label="Disabled & empty" outline disabled)
    w-input.mb3(label="Disabled & filled" value="Some content" outline disabled)
    w-input.mb3(label="Readonly & empty" outline readonly)
    w-input.mb3(label="Readonly & filled" value="Some content" outline readonly)
    template(#pug).
      w-input.mb3(label="Disabled &amp; empty" outline disabled)
      w-input.mb3(label="Disabled &amp; filled" value="Some content" outline disabled)
      w-input.mb3(label="Readonly &amp; empty" outline readonly)
      w-input.mb3(label="Readonly &amp; filled" value="Some content" outline readonly)

  title-link(h2) Types
  p The default type is "#[span.code text]" but the types bellow are also supported.
  p.
    On desktop you will not notice the difference between the fields #[span.code email], #[span.code tel],
    #[span.code url], and the default text type. But on touch devices, the keyboard is tailored for the
    type of input.
  h3 Textual inputs
  example
    ul.input-types
      li
        .code.mb1 type="date"
        w-input(type="date") date
      li.mt4
        .code.mb1 type="email"
        w-input(type="email") Email address
      li.mt4
        .code.mb1 type="file"
        w-tag.px1.ml1(color="red" outline) coming soon
        //- w-input(type="file") file
      li.mt4
        .code.mb1 type="number"
        w-input(type="number" min="0" max="100") Age
      li.mt4
        .code.mb1 type="password"
        w-input(type="password") Password
      li.mt4
        .code.mb1 type="search"
        w-input(type="search") Search
      li.mt4
        .code.mb1 type="tel"
        w-input(type="tel") Tel
      li.mt4
        .code.mb1 type="text"
        w-input(type="text") Text
      li.mt4
        .code.mb1 type="time"
        w-input(type="time") time
      li.mt4
        .code.mb1 type="url"
        w-input(type="url") Url
      li.mt4
        span.code.mb1.mr2 type="hidden"
        | The hidden type is also accepted - but you don't need a #[span.code w-input] for that!
        w-input(type="hidden")
    template(#pug).
      ul.input-types
        li
          .code.mb1 type="date"
          w-input(type="date") date
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
          .code.mb1 type="time"
          w-input(type="time") time
        li
          .code.mb1 type="url"
          w-input(type="url") Url
        li
          span.code.mb1.mr2 type="hidden"
          | The hidden type is also accepted - but you don't need a w-input for that!
          w-input(type="hidden")

  h3 Other types of inputs
  p For all the other types of input listed bellow, a specific Wave UI component should be used instead:
  ul.other-input-types
    li.mt1
      span.code.mr2 type="button"
      span.grey use #[code w-button] instead
    li.mt1
      span.code.mr2 type="checkbox"
      span.grey use #[code w-checkbox] instead
    li.mt1
      span.code.mr2 type="color"
      span.grey use #[code w-color-picker] instead
      w-tag.px1.ml1(color="red" outline) coming soon
    //- li.mt1
      span.code.mr2 type="date"
      span.grey use #[code w-date-picker] instead
      w-tag.px1.ml1(color="red" outline) coming soon
    li.mt1
      span.code.mr2 type="image"
      span.grey use the #[code img] HTML tag instead
    li.mt1
      span.code.mr2 type="radio"
      span.grey use #[code w-radio] instead
    li.mt1
      span.code.mr2 type="range"
      span.grey use #[code w-slider] instead
    li.mt1
      span.code.mr2 type="reset"
      span.grey use #[code w-button] instead
    li.mt1
      span.code.mr2 type="submit"
      span.grey use #[code w-button] instead
    li.mt1
      span.code.mr2 type="time"
      span.grey use #[code w-time-picker] instead
      w-tag.px1.ml1(color="red" outline) coming soon
</template>

<script>
export default {
  data: () => ({
    isPassword: true
  })
}
</script>

<style lang="scss">
ul.input-types li {margin-bottom: 8px;}
</style>
