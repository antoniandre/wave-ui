<template lang="pug">
div
  title-link.mt4(h1 slug="w-select")
    .code w-select
    w-tag.ml3(bg-color="orange" lg color="white") In Progress

  title-link(h2) Basic
  example
    w-select(:items="items1")
    template(#pug).

  title-link(h2) Label and / or placeholder
  example
    w-select(:items="items1" label="Label")
    w-select.mt4(:items="items1" placeholder="Placeholder")
    w-select.mt4(:items="items1" label="Label" placeholder="Placeholder")
    template(#pug).

  title-link(h2) Outline
  example
    w-select(:items="items1" outline) Select label
    template(#pug).
      w-select(:items="items" outline) Select label

  title-link(h2) Shadow
  example
    w-select(:items="items1" shadow) Select label
    w-select.mt4(:items="items1" outline shadow) Select label
    template(#pug).
      w-select(:items="items" shadow) Select label
      w-select.mt4(:items="items" outline shadow) Select label

  title-link(h2) Tile
  example
    w-select(:items="items1" tile) Select label
    w-select.mt4(:items="items1" outline tile) Select label
    template(#pug).
      w-select(:items="items" tile) Select label
      w-select.mt4(:items="items" outline tile) Select label

  title-link(h2) Colors
  p.mb4.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.#[br]
    By default, the text has the "#[span.code primary]" color.
  example
    w-select(:items="items1" color="blue") Select label
    w-select.mt4(:items="items1" outline color="blue") Select label
    w-select.mt4(:items="items1" bg-color="blue-light5" color="blue-dark3") Select label
    w-select.mt4(:items="items1" outline bg-color="blue-light5" color="blue-dark3") Select label
    template(#pug).

  title-link(h2) Multiple selection
  example
    w-select(:items="items1" multiple)
    template(#pug).

  title-link(h2) Label position
  p.
    By default the label is positioned inside, you can also place it on the left or right outside of
    the select list.
  example
    w-select(:items="items1" label="Select an item")
    w-select.mt4(:items="items1" label="Select an item" label-position="left")
    w-select.mt4(:items="items1" label="Select an item" label-position="right")
    template(#pug).

  title-link(h2) Custom label via default slot
  p.
    It is convenient to have the label inside the #[span.code w-select] component to let it handle
    the field focus event on label click.#[br]
    The #[span.code label] prop accepts any HTML, but because passing complex html via a prop is not fun,
    there is also a prop for setting the label wish will grant more freedom.

  example
    w-select(:items="items1" label-position="inside" outline)
      w-icon.orange mdi mdi-arrow-right
      span.purple.mx1 Inside
      w-icon.orange mdi mdi-arrow-left
    w-select.mt4(:items="items1" label-position="left" outline)
      span.green.mr1 Left
      w-icon.orange mdi mdi-arrow-right
    w-select.mt4(:items="items1" label-position="right" outline)
      w-icon.orange mdi mdi-arrow-left
      span.red.ml1 Right
    template(#pug).
      w-select(:items="items" label-position="inside" outline)
        w-icon.orange mdi mdi-arrow-right
        span.purple.mx1 Inside
        w-icon.orange mdi mdi-arrow-left
      w-select.mt4(:items="items" label-position="left" outline)
        span.green.mr1 Left
        w-icon.orange mdi mdi-arrow-right
      w-select.mt4(:items="items" label-position="right" outline)
        w-icon.orange mdi mdi-arrow-left
        span.red.ml1 Right

  title-link(h2) Inner icons
  example
    .title4.mb2 Label outside
    w-select(:items="items1" label="Select" label-position="left" outline inner-icon-left="mdi mdi-star")
    w-select.mt4(:items="items1" label="Select" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")

    .title4.mt6.mb2 Label inside
    w-select(:items="items1" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")
    w-select.mt4(:items="items1" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")
    template(#pug).
      .title4.mb2 Label outside
      w-select(:items="items" label="Left" label-position="left" outline inner-icon-left="mdi mdi-star")
      w-select.mt4(:items="items" label="Right" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")

      .title4.mt6.mb2 Label inside
      w-select(:items="items" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")
      w-select.mt4(:items="items" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")

  title-link(h2) Disabled &amp; readonly
  example
    w-select.mb4(
      :items="items1"
      label="Disabled & empty"
      outline
      disabled)
    w-select.mb4(
      :items="items1"
      label="Disabled & filled"
      value="Item 1"
      outline
      disabled)
    w-select.mb4(
      :items="items1"
      label="Readonly & empty"
      outline
      readonly)
    w-select(
      :items="items1"
      value="Item 1"
      label="Readonly & filled"
      outline
      readonly)
    template(#pug).
      w-select.mb4(
        :items="items"
        label="Disabled &amp; empty"
        outline
        disabled)
      w-select.mb4(
        :items="items"
        value="Item 1"
        label="Disabled &amp; filled"
        outline
        disabled)
      w-select.mb4(
        :items="items"
        label="Readonly &amp; empty"
        outline
        readonly)
      w-select(
        :items="items"
        value="Item 1"
        label="Readonly &amp; filled"
        outline
        readonly)
</template>

<script>
export default {
  data: () => ({
    items1: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' }
    ],
    items2: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 5', disabled: true }
    ]
  })
}
</script>
