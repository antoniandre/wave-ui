<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-menu")
    | w-menu
    w-tag.ml3(bg-color="orange" color="white" lg) In progress

  title-link(h2) Show on click or on hover
  w-menu
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show menu on click
    | Menu content

  w-menu(show-on-hover)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show menu on hover
    | Menu content

  title-link(h2 slug="appending-to-a-dom-node") Appending to a particular DOM node
  w-alert.alert--info(info icon-outside).
    This step is important for absolute positionning (default): if you don't append
    the menu to the correct DOM node, you will most likely end up with a menu not
    following its activator on scroll.#[br]
    The DOM element that will receive the menu must have a position (fixed, absolute or
    relative).

  title-link(h2) Color &amp; background color
  w-menu(color="blue-dark2" bg-color="blue-light5")
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show menu on hover
    | Menu content

  title-link(h2) Tile, round and shadow
  w-menu(tile)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show a tile menu
    | Menu content
  w-menu(round)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show a round menu
    | Menu content
  w-menu(shadow)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show a shadow menu
    | Menu content

</template>

<script>
export default {

}
</script>
