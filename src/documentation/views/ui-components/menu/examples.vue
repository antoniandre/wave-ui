<template lang="pug">
div
  title-link(h2) Show on click or on hover
  example.example1(content-class="pt5")
    w-menu(detach-to=".example1")
      template(#activator="{ on }")
        w-button.mb2.mr3(v-on="on" outline color="primary") Show menu on click
      | Menu content

    w-menu(detach-to=".example1" show-on-hover)
      template(#activator="{ on }")
        w-button.mb2(v-on="on" outline color="primary") Show menu on hover
      | Menu content
    template(#pug).
      w-menu
        template(#activator="{ on }")
          w-button.mr3(v-on="on" outline color="primary") Show menu on click
        | Menu content

      w-menu(show-on-hover)
        template(#activator="{ on }")
          w-button(v-on="on" outline color="primary") Show menu on hover
        | Menu content

  title-link(h2) Position
  example.example2(content-class="py12")
    w-flex(:gap="3" wrap)
      w-menu(detach-to=".example2" left)
        template(#activator="{ on }")
          w-button(v-on="on" outline color="primary") Show menu on left
        | Menu content
      w-menu(detach-to=".example2")
        template(#activator="{ on }")
          w-button(v-on="on" outline color="primary") Show menu on bottom
        | Menu content
      w-menu(detach-to=".example2" top)
        template(#activator="{ on }")
          w-button(v-on="on" outline color="primary") Show menu on top
        | Menu content
      w-menu(detach-to=".example2" right)
        template(#activator="{ on }")
          w-button(v-on="on" outline color="primary") Show menu on right
        | Menu content
    template(#pug).
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

  title-link(h2) Alignments
  p In addition to positions, you can align the menu with its activator.
  example.example2
    .title4.mb2 top position
    w-menu(detach-to=".example2" top align-left)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Align left
      | Menu content
    w-menu(detach-to=".example2" top)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Centered
      | Menu content
    w-menu(detach-to=".example2" top align-right)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Align right
      | Menu content

    .title4.mt6.mb2 Bottom position
    w-menu(detach-to=".example2" align-left)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Align left
      | Menu content
    w-menu(detach-to=".example2")
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Centered
      | Menu content
    w-menu(detach-to=".example2" align-right)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Align right
      | Menu content

    .title4.mt6.mb2 Right position
    w-menu(detach-to=".example2" right align-top)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Align top
      | Menu content
    w-menu(detach-to=".example2" right)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Centered
      | Menu content
    w-menu(detach-to=".example2" right align-bottom)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Align bottom
      | Menu content

    .title4.mt6.mb2 Left position
    w-menu(detach-to=".example2" left align-top)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Align top
      | Menu content
    w-menu(detach-to=".example2" left)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Centered
      | Menu content
    w-menu(detach-to=".example2" left align-bottom)
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Align bottom
      | Menu content

  title-link(h2) Color &amp; background color
  p Like in most components, you can define a #[code color] and a  #[code bg-color].
  example.example3(content-class="pb12")
    w-menu(detach-to=".example3" color="blue-dark2" bg-color="blue-light5")
      template(#activator="{ on }")
        w-button.ma1(v-on="on" outline color="primary") Show a blue menu
      | Menu content
    template(#pug).
      w-menu(color="blue-dark2" bg-color="blue-light5")
        template(#activator="{ on }")
          w-button(v-on="on" outline color="primary") Show a blue menu
        | Menu content

  title-link(h2) Tile, round and shadow
  example.example4(content-class="pb12")
    w-flex(wrap :gap="3")
      w-menu(detach-to=".example4" tile)
        template(#activator="{ on }")
          w-button.mt1(v-on="on" outline color="primary") Show a tile menu
        | Menu content
      w-menu(detach-to=".example4" round)
        template(#activator="{ on }")
          w-button.mt1(v-on="on" outline color="primary") Show a round menu
        | Menu content
      w-menu(detach-to=".example4" shadow)
        template(#activator="{ on }")
          w-button.mt1(v-on="on" outline color="primary") Show a shadow menu
        | Menu content
    template(#pug).
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
  example.example5(content-class="mb12 pb12")
    w-menu(detach-to=".example5" shadow v-model="showMenu")
      template(#activator)
        w-button.mr3.mb2(@click="showMenu = true" outline color="primary") Show a w-card menu
      .title4 How much do you like Wave UI?
      p Pick a serious answer.
      w-flex.pl10.mt4(wrap justify-end)
        w-button.mr1(text color="green" @click="showMenu = false") Love it!
        w-button.mr1(text color="green" @click="showMenu = false") Love it!
        w-button(text color="green" @click="showMenu = false") Love it!
    w-menu(detach-to=".example5" shadow custom)
      template(#activator="{ on }")
        w-button.mb2(v-on="on" outline color="primary") Show a list menu
      w-card.white--bg(content-class="pa0")
        w-toolbar
          .title3.ma0 Menu Title
          .spacer
          span.ml1 Item 1
          span.ml1 Item 2
        .pa3 This is some content in a w-card component.
    template(#pug).
      w-menu(shadow v-model="showMenu")
        template(#activator="")
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
    template(#js).
      data: () => ({
        showMenu: false
      })

  title-link(h2) Custom content: List menu
  p.
    By default the menu is a w-card but if you need more flexibility, you can set the custom prop and put
    whatever you want in it, free of style.
  example.example6(content-class="mb12 pb12")
    w-menu(detach-to=".example6" v-model="showListMenu1" shadow custom)
      template(#activator="{ on }")
        w-button(v-on="on" outline color="primary") Show a list menu
      w-list.white--bg(
        v-model="list"
        :items="[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]"
        item-class="px8"
        @item-select="showListMenu1 = false")
    template(#pug).
      w-menu(v-model="showMenu" shadow custom)
        template(#activator="{ on }")
          w-button(v-on="on" outline color="primary") Show a list menu
        w-list.white--bg(
          v-model="listSelection"
          :items="listItems"
          item-class="px8"
          @item-select="showMenu = false")
    template(#js).
      data: () => ({
        showMenu: false,
        listSelection: null,
        listItems: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) Menu with overlay
  example.example7(content-class="mb12 pb12")
    w-menu(detach-to=".example7" v-model="showListMenu2" shadow custom overlay)
      template(#activator="{ on }")
        w-button(v-on="on" outline color="primary") Show a menu &amp; overlay
      w-list.white--bg(
        nav
        :items="[{ label: 'Item 1', route: '#item1' }, { label: 'Item 2', route: '#item2' }, { label: 'Item 3', route: '#item3' }]"
        item-class="px8"
        @item-select="showListMenu2 = false")
    template(#pug).
      w-menu(v-model="showMenu" shadow custom overlay)
        template(#activator="{ on }")
          w-button(v-on="on" outline color="primary") Show a menu &amp; overlay
        w-list.white--bg(
          nav
          :items="listItems"
          item-class="px8"
          @item-select="showMenu = false")
    template(#js).
      data: () => ({
        showMenu: false,
        listItems: [
          { label: 'Item 1', route: '#item1' },
          { label: 'Item 2', route: '#item2' },
          { label: 'Item 3', route: '#item3' }
        ]
      })
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

<style lang="scss">
.main--menu {
  .example {
    display: flex;
    flex-direction: column;
    overflow: visible;
  }
}
</style>
