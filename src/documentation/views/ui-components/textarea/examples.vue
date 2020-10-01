<template lang="pug">
div
  title-link(h2) Default
  p.
    By default the #[span.code w-textarea] component has a label inside the textarea that moves up above
    the textarea on focus or when the textarea is filled by some content or a placeholder.#[br]
    The default number of rows is 3, and when adding lines the textarea will adjust its size.
  example
    w-textarea Label
    template(#pug).
      w-textarea Label

  title-link(h2) Label and / or placeholder
  example
    w-textarea Label
    w-textarea.mt4(placeholder="Placeholder")
    w-textarea.mt4(label="Label" placeholder="Placeholder")
    template(#pug).
      w-textarea Label
      w-textarea.mt4(placeholder="Placeholder")
      w-textarea.mt4(label="Label" placeholder="Placeholder")

  title-link(h2) No autogrow &amp; resizable
  example
    w-textarea(no-autogrow rows="6") Textarea label
    w-textarea.mt4(no-autogrow resizable rows="6") Textarea label
    template(#pug).
      w-textarea(no-autogrow rows="6") Textarea label
      w-textarea.mt4(no-autogrow resizable rows="6") Textarea label

  title-link(h2) Outline
  example
    w-textarea(outline) Textarea label
    template(#pug).
      w-textarea(outline) Textarea label

  title-link(h2) Shadow
  example
    w-textarea(shadow) Textarea label
    w-textarea.mt4(outline shadow) Textarea label
    template(#pug).
      w-textarea(shadow) Textarea label
      w-textarea.mt4(outline shadow) Textarea label

  title-link(h2) Tile
  example
    w-textarea(tile) Textarea label
    w-textarea.mt4(outline tile) Textarea label
    template(#pug).
      w-textarea(tile) Textarea label
      w-textarea.mt4(outline tile) Textarea label

  title-link(h2) Colors
  p.mb4.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.#[br]
    By default, the text has the "#[span.code primary]" color.
  example
    w-textarea(color="blue") Textarea label
    w-textarea.mt4(outline color="blue") Textarea label
    w-textarea.mt4(bg-color="blue-light5" color="blue-dark3") Textarea label
    w-textarea.mt4(outline bg-color="blue-light5" color="blue-dark3") Textarea label
    template(#pug).
      w-textarea(color="blue") Textarea label
      w-textarea.mt4(outline color="blue") Textarea label
      w-textarea.mt4(bg-color="blue-light5" color="blue-dark3") Textarea label
      w-textarea.mt4(outline bg-color="blue-light5" color="blue-dark3") Textarea label

  title-link(h2) Label position
  p.
    By default the label is positioned inside, you can also place it on the left or right outside of
    the textarea.
  example
    w-textarea(outline) Label inside
    w-textarea.mt4(outline label-position="left") Label left
    w-textarea.mt4(outline label-position="right") Label right
    template(#pug).
      w-textarea(outline) Label inside
      w-textarea.mt4(outline label-position="left") Label left
      w-textarea.mt4(outline label-position="right") Label right

  title-link(h2) Custom label via default slot
  p.
    It is convenient to have the label inside the #[span.code w-textarea] component to let it handle
    the field focus event on label click.#[br]
    The #[span.code label] prop accepts any HTML, but because passing complex html via a prop is not fun,
    there is also a prop for setting the label wish will grant more freedom.

  example
    w-textarea(label-position="inside" outline)
      w-icon.orange mdi mdi-arrow-right
      span.purple.mx1 Inside
      w-icon.orange mdi mdi-arrow-left
    w-textarea.mt4(label-position="left" outline)
      span.green.mr1 Left
      w-icon.orange mdi mdi-arrow-right
    w-textarea.mt4(label-position="right" outline)
      w-icon.orange mdi mdi-arrow-left
      span.red.ml1 Right
    template(#pug).
      w-textarea(label-position="inside" outline)
        w-icon.orange mdi mdi-arrow-right
        span.purple.mx1 Inside
        w-icon.orange mdi mdi-arrow-left
      w-textarea.mt4(label-position="left" outline)
        span.green.mr1 Left
        w-icon.orange mdi mdi-arrow-right
      w-textarea.mt4(label-position="right" outline)
        w-icon.orange mdi mdi-arrow-left
        span.red.ml1 Right

  title-link(h2) Inner icons
  example
    .title4.mb2 Label outside
    w-textarea(label="Message" label-position="left" outline inner-icon-left="mdi mdi-email")
    w-textarea.mt4(label="Message" label-position="right" outline inner-icon-right="mdi mdi-email")
    .title4.mt6.mb2 Label inside
    w-textarea(label="Message" label-position="inside" outline inner-icon-left="mdi mdi-email")
    w-textarea.mt4(label="Message" label-position="inside" outline inner-icon-right="mdi mdi-email")
    template(#pug).
      .title4.mb2 Label outside
      w-textarea(label="Left" label-position="left" outline inner-icon-left="mdi mdi-email")
      w-textarea.mt4(label="Right" label-position="right" outline inner-icon-right="mdi mdi-email")

      .title4.mt6.mb2 Label inside
      w-textarea(label="Message" label-position="inside" outline inner-icon-left="mdi mdi-email")
      w-textarea.mt4(label="Message" label-position="inside" outline inner-icon-right="mdi mdi-email")

  title-link(h2) Disabled &amp; readonly
  example
    w-textarea.mb4(
      label="Disabled & empty"
      outline
      disabled)
    w-textarea.mb4(
      model-value="Some content"
      label="Disabled & filled"
      outline
      disabled)
    w-textarea.mb4(
      label="Readonly & empty"
      outline
      readonly)
    w-textarea(
      model-value="Some content"
      label="Readonly & filled"
      outline
      readonly)
    template(#pug).
      w-textarea.mb4(
        label="Disabled &amp; empty"
        outline
        disabled)
      w-textarea.mb4(
        model-value="Some content"
        label="Disabled &amp; filled"
        outline
        disabled)
      w-textarea.mb4(
        label="Readonly &amp; empty"
        outline
        readonly)
      w-textarea(
        model-value="Some content"
        label="Readonly &amp; filled"
        outline
        readonly)
</template>
