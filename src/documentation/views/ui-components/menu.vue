<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-menu")
    | w-menu
    w-tag.ml3(bg-color="orange" color="white" lg) In progress

  title-link(h2) Show on click or on hover
  w-menu
    template(#activator="{ on }")
      w-button.mr3(v-on="on" outline color="primary") Show menu on click
    | Menu content

  w-menu(show-on-hover)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show menu on hover
    | Menu content

  title-link(h2) Position
  w-flex(:gap="3" wrap)
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
      w-button(v-on="on" outline color="primary") Show a blue menu
    | Menu content

  title-link(h2) Tile, round and shadow
  w-flex(wrap :gap="3")
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
  w-menu(shadow v-model="showMenu")
    template(#activator)
      w-button.mr3(@click="showMenu = true" outline color="primary") Show a w-card menu
    .title4 How much do you like Wave UI?
    p Pick a serious answer.
    w-flex.pl10.mt4(wrap justify-end)
      w-button.mr1(text color="green" @click="showMenu = false") Love it!
      w-button.mr1(text color="green" @click="showMenu = false") Love it!
      w-button(text color="green" @click="showMenu = false") Love it!
  w-menu(shadow custom)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show a list menu
    w-card.white--bg(content-class="pa0")
      w-toolbar
        .title3.ma0 Menu Title
        .spacer
        span.ml1 Item 1
        span.ml1 Item 2
      .pa3 This is some content in a w-card component.

  title-link(h2) Custom content: List menu
  p.
    By default the menu is a w-card but if you need more flexibility, you can set the custom prop and put
    whatever you want in it, free of style.
  w-menu(v-model="showListMenu1" shadow custom)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show a list menu
    w-list.white--bg(
      v-model="list"
      :items="[{ label: 'Item 1', route: '#item1' }, { label: 'Item 2', route: '#item2' }, { label: 'Item 3', route: '#item3' }]"
      item-class="px8"
      @item-click="showListMenu1 = false")

  title-link(h2) Menu with overlay
  w-menu(v-model="showListMenu2" shadow custom overlay)
    template(#activator="{ on }")
      w-button(v-on="on" outline color="primary") Show a menu &amp; overlay
    w-list.white--bg(
      nav
      :items="[{ label: 'Item 1', route: '#item1' }, { label: 'Item 2', route: '#item2' }, { label: 'Item 3', route: '#item3' }]"
      item-class="px8"
      @item-click="showListMenu2 = false")

</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    showListMenu1: false,
    showListMenu2: false,
    list: []
  })
}
</script>
