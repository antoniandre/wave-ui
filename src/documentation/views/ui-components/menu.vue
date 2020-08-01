<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-menu")
    | w-menu
    w-tag.ml3(bg-color="orange" color="white" lg) In progress

  title-link(h2) Show on click or on hover
  w-menu
    template(#activator="{ on }")
      w-button.mr4(v-on="on" outline color="primary") Show menu on click
    | Menu content

  w-menu(show-on-hover)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show menu on hover
    | Menu content

  title-link(h2) Position
  w-flex(:gap="4" wrap)
    w-menu(left)
      template(#activator="{ on }")
        w-button(v-on="on" outline color="primary") Show menu on left
      | Menu content
    w-menu
      template(#activator="{ on }")
        w-button(v-on="on" outline color="primary") Show menu on bottom
      | Menu content
    w-menu(top)
      template(#activator="{ on }")
        w-button(v-on="on" outline color="primary") Show menu on top
      | Menu content
    w-menu(right)
      template(#activator="{ on }")
        w-button(v-on="on" outline color="primary") Show menu on right
      | Menu content

  title-link(h2) Color &amp; background color
  w-menu(color="blue-dark2" bg-color="blue-light5")
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show menu on hover
    | Menu content

  title-link(h2) Tile, round and shadow
  w-flex(wrap :gap="4")
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

  title-link(h2) Menu content: w-card
  p By default the menu is a w-card, so it accepts all the props of a w-card.
  w-menu(shadow)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show a list menu
    p How much do you like Wave UI?
    p Pick a serious answer.
    w-flex.pl6.mt4(wrap justify-end)
      w-button.mr2(text color="green") Love it!
      w-button.mr2(text color="green") Love it!
      w-button(text color="green") Love it!
  //- w-menu(shadow)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show a list menu
    w-toolbar.pa0(top)
     .title3 Menu Title
     span Item 1
     span Item 2

  title-link(h2) Custom content: List menu
  p.
    By default the menu is a w-card but if you need more flexibility, you can set the custom prop and put
    whatever you want in it, free of style.
  w-menu(shadow custom)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show a list menu
    w-list.px2.white--bg(
      hover
      nav
      :items="[{ label: 'Item 1', route: '#item1' }, { label: 'Item 2', route: '#item2' }, { label: 'Item 3', route: '#item3' }]")

</template>

<script>
export default {

}
</script>
