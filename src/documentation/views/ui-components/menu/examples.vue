<template lang="pug">
div
  title-link(h2) Basic
  example.example1(content-class="text-center pt5" app-classes-string="align-center")
    w-menu(append-to=".example1")
      w-button Show menu
      template(#content)
        | Menu content
    template(#pug).
      w-menu
        w-button Show menu
        template(#content)
          | Menu content
    template(#html).
      &lt;w-menu&gt;
        &lt;w-button class="mr3"&gt;
          Show menu on click
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

  title-link(h2) Show on click or on hover
  example.example2(content-class="pt5")
    | Show menu:
    w-menu(append-to=".example2")
      w-button.mx3 On click
      template(#content)
        | Menu content

    w-menu(append-to=".example2" show-on-hover)
      w-button On hover
      template(#content)
        | Menu content
    template(#pug).
      | Show menu

      w-menu
        w-button.mx3 On click
        template(#content)
          | Menu content

      w-menu(show-on-hover)
        w-button On hover
        template(#content)
          | Menu content
    template(#html).
      Show menu:

      &lt;w-menu&gt;
        &lt;w-button class="mx3"&gt;
          On click
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu show-on-hover&gt;
        &lt;w-button&gt;
          On hover
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

  title-link(h2) Disabled
  p.
    Use the #[code disable] prop to keep the activator visible while preventing the menu from opening
    (including when #[code v-model] is #[code true]).
  example.example-disable(content-class="text-center pt5" app-classes-string="align-center")
    w-flex(align-center justify-center wrap :gap="4")
      w-switch.mb2(v-model="menuDisabled" label="Disable menu")
      w-menu(append-to=".example-disable" :disable="menuDisabled")
        w-button Show menu
        template(#content)
          | Menu content
    template(#pug).
      w-flex(align-center justify-center wrap :gap="4")
        w-switch.mb2(v-model="menuDisabled" label="Disable menu")
        w-menu(:disable="menuDisabled")
          w-button Show menu
          template(#content)
            | Menu content
    template(#html).
      &lt;w-flex align-center justify-center wrap :gap="4"&gt;
        &lt;w-switch
          class="mb2"
          v-model="menuDisabled"
          label="Disable menu"&gt;
        &lt;/w-switch&gt;

        &lt;w-menu :disable="menuDisabled"&gt;
          &lt;w-button&gt;
            Show menu
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        menuDisabled: false
      })

  title-link(h2) Persistent menu
  p.
    A persistent menu can only be closed by clicking on the activator again, or programmatically.#[br]
    Clicking outside the menu will not close it.#[br]
    Of course you can also add a button inside the menu to close it.
  example.example3(content-class="text-center pt5" app-classes-string="align-center")
    w-menu(append-to=".example3" persistent)
      w-button.mb2.mr3 Show persistent menu
      template(#content)
        | Click on the button again to close
    template(#pug).
      w-menu(persistent)
        w-button.mb2.mr3 Show persistent menu
        template(#content)
          | Click on the button again to close
    template(#html).
      &lt;w-menu persistent&gt;
        &lt;w-button class="mr3"&gt;
          Show persistent menu
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Click on the button again to close
        &lt;/template&gt;
      &lt;/w-menu&gt;

  title-link(h2) Hide menu on click inside
  p A click inside the menu will close it.
  example.example4(content-class="text-center pt5" app-classes-string="align-center")
    w-menu(append-to=".example4" hide-on-menu-click)
      w-button Show menu
      template(#content)
        | A click here will close the menu.
    template(#pug).
      w-menu(hide-on-menu-click)
        w-button Show menu
        template(#content)
          | A click here will close the menu.
    template(#html).
      &lt;w-menu hide-on-menu-click&gt;
        &lt;w-button&gt;
          Show menu
        &lt;/w-button&gt;
        &lt;template #content&gt;
          A click here will close the menu.
        &lt;/template&gt;
      &lt;/w-menu&gt;

  title-link(h2) Position
  example.example5
    w-flex.my6(:gap="3" align-center wrap)
      | Show menu on:
      w-menu(append-to=".example5" left)
        w-button.mx2 Left
        template(#content)
          | Menu content
      w-menu(append-to=".example5" top)
        w-button.mx2 Top
        template(#content)
          | Menu content
      w-menu(append-to=".example5")
        w-button.mx2 Bottom
        template(#content)
          | Menu content
      w-menu(append-to=".example5" right)
        w-button Right
        template(#content)
          | Menu content
    template(#pug).
      w-flex.my12(:gap="3" align-center wrap)
        | Show menu on:

        w-menu(left)
          w-button.mx2 Left
          template(#content)
            | Menu content
        w-menu(top)
          w-button.mx2 Top
          template(#content)
            | Menu content
        w-menu
          w-button.mx2 Bottom
          template(#content)
            | Menu content
        w-menu(right)
          w-button Right
          template(#content)
            | Menu content
    template(#html).
      &lt;w-flex :gap="3" align-center wrap class="my12"&gt;
        Show menu on:

        &lt;w-menu left&gt;
          &lt;w-button class="mx2"&gt;
            Left
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu top&gt;
          &lt;w-button class="mx2"&gt;
            Top
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu&gt;
          &lt;w-button class="mx2"&gt;
            Bottom
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu right&gt;
          &lt;w-button&gt;
            Right
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;
      &lt;/w-flex&gt;

  title-link(h2) Alignments
  p In addition to positions, you can align the menu with its activator.
  example.example6
    .title4.mb2 Top position
    w-menu(append-to=".example6" top align-left)
      w-button.ma1 Align left
      template(#content)
        | Menu content
    w-menu(append-to=".example6" top)
      w-button.ma1 Centered
      template(#content)
        | Menu content
    w-menu(append-to=".example6" top align-right)
      w-button.ma1 Align right
      template(#content)
        | Menu content

    .title4.mt6.mb2 Bottom position
    w-menu(append-to=".example6" align-left)
      w-button.ma1 Align left
      template(#content)
        | Menu content
    w-menu(append-to=".example6")
      w-button.ma1 Centered
      template(#content)
        | Menu content
    w-menu(append-to=".example6" align-right)
      w-button.ma1 Align right
      template(#content)
        | Menu content

    .title4.mt6.mb2 Right position
    w-menu(append-to=".example6" right align-top)
      w-button.ma1 Align top
      template(#content)
        | Menu content
    w-menu(append-to=".example6" right)
      w-button.ma1 Centered
      template(#content)
        | Menu content
    w-menu(append-to=".example6" right align-bottom)
      w-button.ma1 Align bottom
      template(#content)
        | Menu content

    .title4.mt6.mb2 Left position
    w-menu(append-to=".example6" left align-top)
      w-button.ma1 Align top
      template(#content)
        | Menu content
    w-menu(append-to=".example6" left)
      w-button.ma1 Centered
      template(#content)
        | Menu content
    w-menu(append-to=".example6" left align-bottom)
      w-button.ma1 Align bottom
      template(#content)
        | Menu content
    template(#pug).
      .title4.mb2 top position
      w-menu(top align-left)
        w-button.ma1 Align left
        template(#content)
          | Menu content
      w-menu(top)
        w-button.ma1 Centered
        template(#content)
          | Menu content
      w-menu(top align-right)
        w-button.ma1 Align right
        template(#content)
          | Menu content

      .title4.mt6.mb2 Bottom position
      w-menu(align-left)
        w-button.ma1 Align left
        template(#content)
          | Menu content
      w-menu
        w-button.ma1 Centered
        template(#content)
          | Menu content
      w-menu(align-right)
        w-button.ma1 Align right
        template(#content)
          | Menu content

      .title4.mt6.mb2 Right position
      w-menu(right align-top)
        w-button.ma1 Align top
        template(#content)
          | Menu content
      w-menu(right)
        w-button.ma1 Centered
        template(#content)
          | Menu content
      w-menu(right align-bottom)
        w-button.ma1 Align bottom
        template(#content)
          | Menu content

      .title4.mt6.mb2 Left position
      w-menu(left align-top)
        w-button.ma1 Align top
        template(#content)
          | Menu content
      w-menu(left)
        w-button.ma1 Centered
        template(#content)
          | Menu content
      w-menu(left align-bottom)
        w-button.ma1 Align bottom
        template(#content)
          | Menu content
    template(#html).
      &lt;div class="title4 mb2"&gt;Top position&lt;/div&gt;
      &lt;w-menu top align-left&gt;
        &lt;w-button class="ma1"&gt;
          Align left
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu top&gt;
        &lt;w-button class="ma1"&gt;
          Centered
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu top align-right&gt;
        &lt;w-button class="ma1"&gt;
          Align right
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;div class="title4 mt6 mb2"&gt;Bottom position&lt;/div&gt;
      &lt;w-menu align-left&gt;
        &lt;w-button class="ma1"&gt;
          Align left
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu&gt;
        &lt;w-button class="ma1"&gt;
          Centered
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu align-right&gt;
        &lt;w-button class="ma1"&gt;
          Align right
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;div class="title4 mt6 mb2"&gt;Right position&lt;/div&gt;
      &lt;w-menu right align-top&gt;
        &lt;w-button class="ma1"&gt;
          Align top
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu right&gt;
        &lt;w-button class="ma1"&gt;
          Centered
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu right align-bottom&gt;
        &lt;w-button class="ma1"&gt;
          Align bottom
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;div class="title4 mt6 mb2"&gt;Left position&lt;/div&gt;
      &lt;w-menu left align-top&gt;
        &lt;w-button class="ma1"&gt;
          Align top
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu left&gt;
        &lt;w-button class="ma1"&gt;
          Centered
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu left align-bottom&gt;
        &lt;w-button class="ma1"&gt;
          Align bottom
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

  title-link(h2) No position
  p.
    By default, the menu is position at the bottom of the activator.
    If you prefer to position the menu yourself via CSS, you can skip the position calculation via the
    #[code no-position] prop.
  example.example7(content-class="pb12")
    w-menu(append-to=".example7 .example__render" no-position)
      w-button.ma1 Show menu
      template(#content)
        | Menu content
    template(#pug).
      w-menu(no-position)
        w-button.ma1 Show menu
        template(#content)
          | Menu content
    template(#html).
      &lt;w-menu no-position&gt;
        &lt;w-button class="ma1"&gt;
          Show menu
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;
    template(#css) .w-menu {top: 10px;right: 20px;}

  title-link(h2) Arrow (Tooltip style)
  p Applies a tooltip style with the #[code arrow] option.
  example.example13(content-class="text-center my4" app-classes-string="align-center")
    w-menu(append-to=".example13" arrow)
      w-button.ma1 Show menu
      template(#content)
        | Menu content
    template(#pug).
      w-menu(arrow)
        w-button Show menu
        template(#content)
          | Menu content
    template(#html).
      &lt;w-menu arrow&gt;
        &lt;w-button&gt;
          Show menu
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

  title-link(h3) Automatic arrow position
  p.
    The following examples illustrate how the arrow is positioned on the different sides and
    alignments that are applied.#[br]
    The arrow position can also be overridden via CSS.

  title-link(h4) Horizontal
  example
    w-flex(justify-center)
      w-menu(arrow top align-left)
        w-button.ma2 Top, align left
        template(#content)
          | Menu content
      w-menu(arrow top)
        w-button.ma2 Top, align center
        template(#content)
          | Menu content
      w-menu(arrow top align-right)
        w-button.ma2 Top, align right
        template(#content)
          | Menu content
    w-flex(justify-center)
      w-menu(arrow align-left)
        w-button.ma2 Bottom, align left
        template(#content)
          | Menu content
      w-menu(arrow)
        w-button.ma2 Bottom, align center
        template(#content)
          | Menu content
      w-menu(arrow align-right)
        w-button.ma2 Bottom, align right
        template(#content)
          | Menu content
    template(#pug).
      w-flex(justify-center)
        w-menu(arrow top align-left)
          w-button.ma2 Top, align left
          template(#content)
            | Menu content
        w-menu(arrow top)
          w-button.ma2 Top, align center
          template(#content)
            | Menu content
        w-menu(arrow top align-right)
          w-button.ma2 Top, align right
          template(#content)
            | Menu content
      w-flex(justify-center)
        w-menu(arrow align-left)
          w-button.ma2 Bottom, align left
          template(#content)
            | Menu content
        w-menu(arrow)
          w-button.ma2 Bottom, align center
          template(#content)
            | Menu content
        w-menu(arrow align-right)
          w-button.ma2 Bottom, align right
          template(#content)
            | Menu content
    template(#html).
      &lt;w-flex justify-center&gt;
        &lt;w-menu arrow top align-left&gt;
          &lt;w-button class="ma1"&gt;
            Top, align left
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu arrow top&gt;
          &lt;w-button class="ma1"&gt;
            Top, align center
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu arrow top align-right&gt;
          &lt;w-button class="ma1"&gt;
            Top, align right
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;
      &lt;/w-flex&gt;

      &lt;w-flex justify-center&gt;
        &lt;w-menu arrow align-left&gt;
          &lt;w-button class="ma1"&gt;
            Bottom, align left
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu arrow&gt;
          &lt;w-button class="ma1"&gt;
            Bottom, align center
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu arrow align-right&gt;
          &lt;w-button class="ma1"&gt;
            Bottom, align right
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;
      &lt;/w-flex&gt;

  title-link(h4) Vertical
  example
    w-flex.text-center(justify-center)
      w-flex(column no-grow)
        w-menu(arrow left align-top)
          w-button.ma2 Left, align top
          template(#content)
            | Menu content
        w-menu(arrow left)
          w-button.ma2 Left, align center
          template(#content)
            | Menu content
        w-menu(arrow left align-bottom)
          w-button.ma2 Left, align bottom
          template(#content)
            | Menu content
      w-flex(column no-grow)
        w-menu(arrow right align-top)
          w-button.ma2 Right, align top
          template(#content)
            | Menu content
        w-menu(arrow right)
          w-button.ma2 Right, align center
          template(#content)
            | Menu content
        w-menu(arrow right align-bottom)
          w-button.ma2 Right, align bottom
          template(#content)
            | Menu content
    template(#pug).
      w-flex.text-center(justify-center)
        w-flex(column no-grow)
          w-menu(arrow left align-top)
            w-button.ma2 Left, align top
            template(#content)
              | Menu content
          w-menu(arrow left)
            w-button.ma2 Left, align center
            template(#content)
              | Menu content
          w-menu(arrow left align-bottom)
            w-button.ma2 Left, align bottom
            template(#content)
              | Menu content
        w-flex(column no-grow)
          w-menu(arrow right align-top)
            w-button.ma2 Right, align top
            template(#content)
              | Menu content
          w-menu(arrow right)
            w-button.ma2 Right, align center
            template(#content)
              | Menu content
          w-menu(arrow right align-bottom)
            w-button.ma2 Right, align bottom
            template(#content)
              | Menu content
    template(#html).
      &lt;w-flex text-center justify-center&gt;
        &lt;w-flex column no-grow&gt;
          &lt;w-menu arrow left align-top&gt;
            &lt;w-button class="ma1"&gt;
              Left, align top
            &lt;/w-button&gt;
            &lt;template #content&gt;
              Menu content
            &lt;/template&gt;
          &lt;/w-menu&gt;

          &lt;w-menu arrow left&gt;
            &lt;w-button class="ma1"&gt;
              Left, align center
            &lt;/w-button&gt;
            &lt;template #content&gt;
              Menu content
            &lt;/template&gt;
          &lt;/w-menu&gt;

          &lt;w-menu arrow left align-bottom&gt;
            &lt;w-button class="ma1"&gt;
              Left, align bottom
            &lt;/w-button&gt;
            &lt;template #content&gt;
              Menu content
            &lt;/template&gt;
          &lt;/w-menu&gt;
        &lt;/w-flex&gt;

        &lt;w-flex column no-grow&gt;
          &lt;w-menu arrow right align-top&gt;
            &lt;w-button class="ma1"&gt;
              Right, align top
            &lt;/w-button&gt;
            &lt;template #content&gt;
              Menu content
            &lt;/template&gt;
          &lt;/w-menu&gt;

          &lt;w-menu arrow right&gt;
            &lt;w-button class="ma1"&gt;
              Right, align center
            &lt;/w-button&gt;
            &lt;template #content&gt;
              Menu content
            &lt;/template&gt;
          &lt;/w-menu&gt;

          &lt;w-menu arrow right align-bottom&gt;
            &lt;w-button class="ma1"&gt;
              Right, align bottom
            &lt;/w-button&gt;
            &lt;template #content&gt;
              Menu content
            &lt;/template&gt;
          &lt;/w-menu&gt;
        &lt;/w-flex&gt;
      &lt;/w-flex&gt;

  title-link(h2) Color &amp; background color
  p Like in most components, you can define a #[code color] and a  #[code bg-color].
  example.example8(content-class="text-center my4" app-classes-string="align-center")
    w-menu(
      append-to=".example8"
      :color="$store.state.darkMode ? 'blue-light4' : 'blue-dark2'"
      :bg-color="$store.state.darkMode ? 'indigo-dark6' : 'blue-light5'")
      w-button.ma1 Show a blue menu
      template(#content)
        | Menu content
    template(#pug).
      w-menu(color="{{ $store.state.darkMode ? 'blue-light4' : 'blue-dark2' }}" bg-color="{{ $store.state.darkMode ? 'indigo-dark6' : 'blue-light5' }}")
        w-button Show a blue menu
        template(#content)
          | Menu content
    template(#html).
      &lt;w-menu color="{{ $store.state.darkMode ? 'blue-light4' : 'blue-dark2' }}" bg-color="{{ $store.state.darkMode ? 'indigo-dark6' : 'blue-light5' }}"&gt;
        &lt;w-button&gt;
          Show a blue menu
        &lt;/w-button&gt;
        &lt;template #content&gt;
          Menu content
        &lt;/template&gt;
      &lt;/w-menu&gt;

  title-link(h2) Tile, round and shadow
  example.example9
    w-flex.my6(wrap justify-center :gap="3")
      w-menu(append-to=".example9" tile)
        w-button.mt1 Show a tile menu
        template(#content)
          | Menu content
      w-menu(append-to=".example9" round)
        w-button.mt1 Show a round menu
        template(#content)
          | Menu content
      w-menu(append-to=".example9" shadow)
        w-button.mt1 Show a shadow menu
        template(#content)
          | Menu content
    template(#pug).
      w-flex.my6(wrap :gap="3" justify-center)
        w-menu(tile)
          w-button Show a tile menu
          template(#content)
            | Menu content
        w-menu(round)
          w-button Show a round menu
          template(#content)
            | Menu content
        w-menu(shadow)
          w-button Show a shadow menu
          template(#content)
            | Menu content
    template(#html).
      &lt;w-flex wrap :gap="3"  justify-center class="my6"&gt;
        &lt;w-menu tile&gt;
          &lt;w-button&gt;
            Show a tile menu
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu round&gt;
          &lt;w-button&gt;
            Show a round menu
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu shadow&gt;
          &lt;w-button&gt;
            Show a shadow menu
          &lt;/w-button&gt;
          &lt;template #content&gt;
            Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;
      &lt;/w-flex&gt;

  title-link(h2) Menu content: w-card
  p By default the menu is a w-card, so it accepts all the props of a w-card.
  example.example10(content-class="text-center my4" app-classes-string="align-center")
    w-menu(append-to=".example10" shadow v-model="showMenu")
      w-button.mr3.mb2(@click="showMenu = true") Show a w-card menu
      template(#content)
        .title4 How much do you like Wave UI?
        p Pick a serious answer.
        w-flex.pl10.mt4(wrap justify-end)
          w-button.mr1(text color="green" @click="showMenu = false") Love it!
          w-button.mr1(text color="green" @click="showMenu = false") Love it!
          w-button(text color="green" @click="showMenu = false") Love it!
    w-menu(append-to=".example10" shadow custom)
      w-button.mb2 Show a custom menu
      template(#content)
        w-card.base-color--bg(content-class="pa0")
          w-toolbar
            .title3.ma0 Menu Title
            .spacer
            span.ml1 Item 1
            span.ml1 Item 2
          .pa3 This is some content in a w-card component.
    template(#pug).
      w-menu(shadow v-model="showMenu")
        w-button.mr3(@click="showMenu = true") Show a w-card menu
        template(#content)
          .title4 How much do you like Wave UI?
          p Pick a serious answer.
          w-flex.pl10.mt4(wrap justify-end)
            w-button.mr1(text color="green" @click="showMenu = false") Love it!
            w-button.mr1(text color="green" @click="showMenu = false") Love it!
            w-button(text color="green" @click="showMenu = false") Love it!
      w-menu(shadow custom)
        w-button Show a custom menu
        template(#content)
          w-card(content-class="pa0")
            w-toolbar
              .title3.ma0 Menu Title
              .spacer
              span.ml1 Item 1
              span.ml1 Item 2
            .pa3 This is some content in a w-card component.
    template(#html).
      &lt;w-menu shadow v-model="showMenu"&gt;
        &lt;w-button
          class="mr3"
          @click="showMenu = true"&gt;
          Show a w-card menu
        &lt;/w-button&gt;

        &lt;template #content&gt;
          &lt;div class="title4"&gt;
            How much do you like Wave UI?
          &lt;/div&gt;

          &lt;p&gt;Pick a serious answer.&lt;/p&gt;

          &lt;w-flex class="pl10 mt4" wrap justify-end&gt;
            &lt;w-button
              class="mr1"
              text
              color="green"
              @click="showMenu = false"&gt;
              Love it!
            &lt;/w-button&gt;

            &lt;w-button
              class="mr1"
              text
              color="green"
              @click="showMenu = false"&gt;
              Love it!
            &lt;/w-button&gt;

            &lt;w-button
              text
              color="green"
              @click="showMenu = false"&gt;
              Love it!
            &lt;/w-button&gt;
          &lt;/w-flex&gt;
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;w-menu shadow custom&gt;
        &lt;w-button&gt;
          Show a custom menu
        &lt;/w-button&gt;

        &lt;template #content&gt;
          &lt;w-card content-class="pa0"&gt;
            &lt;w-toolbar&gt;
              &lt;div class="title3 ma0"&gt;Menu Title&lt;/div&gt;
              &lt;div class="spacer"&gt;&lt;/div&gt;
              &lt;span class="ml1"&gt;Item 1&lt;/span&gt;
              &lt;span class="ml1"&gt;Item 2&lt;/span&gt;
            &lt;/w-toolbar&gt;

            &lt;div class="pa3"&gt;
              This is some content in a w-card component.
            &lt;/div&gt;
          &lt;/w-card&gt;
        &lt;/template&gt;
      &lt;/w-menu&gt;
    template(#js).
      data: () => ({
        showMenu: false
      })

  title-link(h2) Custom content: List menu
  p.
    By default the menu is a #[strong.code w-card]. But if you need more flexibility, you can set the
    #[code custom] prop and put whatever you want in the free-of-style menu.#[br]
    In this example, the menu is #[code persistent] so the user is forced to select an option from
    the menu when open. Then on click of an option, the menu will hide thanks to the option
    #[code hide-on-menu-click].
  example.example11(content-class="text-center my4" app-classes-string="align-center")
    w-menu(append-to=".example11" custom hide-on-menu-click persistent shadow)
      w-button Show a list menu
      template(#content)
        w-list.base-color--bg(
          v-model="list"
          :items="[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]"
          item-class="px8")
    div.mt4
      strong Current selection:
      code.ml1 {{ list || 'none' }}
    template(#pug).
      w-menu(custom hide-on-menu-click persistent shadow)
        w-button Show a list menu
        template(#content)
          w-list.base-color--bg(
            v-model="listSelection"
            :items="listItems"
            item-class="px8")
      div.mt4
        strong Current selection:
        code.ml1 {{ "\{\{ listSelection || 'none' \}\}" }}
    template(#html).
      &lt;w-menu
        custom
        hide-on-menu-click
        persistent
        shadow&gt;
        &lt;w-button&gt;
          Show a list menu
        &lt;/w-button&gt;

        &lt;template #content&gt;
          &lt;w-list
            class="base-color--bg"
            v-model="listSelection"
            :items="listItems"
            item-class="px8"&gt;
          &lt;/w-list&gt;
        &lt;/template&gt;
      &lt;/w-menu&gt;

      &lt;div class="mt4"&gt;
        &lt;strong&gt;Current selection:&lt;/strong&gt;
        &lt;code class="ml1"&gt;{{ '\{\{ listSelection || \'none\' \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
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
  example.example12(content-class="text-center my4" app-classes-string="align-center")
    w-menu(append-to=".example12" v-model="showListMenu2" shadow custom overlay)
      w-button Show a menu &amp; overlay
      template(#content)
        w-list.base-color--bg(
          nav
          :items="[{ label: 'Item 1', route: '#item1' }, { label: 'Item 2', route: '#item2' }, { label: 'Item 3', route: '#item3' }]"
          item-class="px8"
          @item-select="showListMenu2 = false")
    template(#pug).
      w-menu(v-model="showMenu" shadow custom overlay)
        w-button Show a menu &amp; overlay
        template(#content)
          w-list.base-color--bg(
            nav
            :items="listItems"
            item-class="px8"
            @item-select="showMenu = false")
    template(#html).
      &lt;w-menu v-model="showMenu" shadow custom overlay&gt;
        &lt;w-button&gt;
          Show a menu &amp; overlay
        &lt;/w-button&gt;

        &lt;template #content&gt;
          &lt;w-list
            class="base-color--bg"
            nav
            :items="listItems"
            item-class="px8"
            @item-select="showMenu = false"&gt;
          &lt;/w-list&gt;
        &lt;/template&gt;
      &lt;/w-menu&gt;
    template(#js).
      data: () => ({
        showMenu: false,
        listItems: [
          { label: 'Item 1', route: '#item1' },
          { label: 'Item 2', route: '#item2' },
          { label: 'Item 3', route: '#item3' }
        ]
      })

  title-link(h2) External activator
  p.
    External activators offer a great flexibility in the code and the advantage of accepting
    multiple activators for the same menu (even elements that are not yet in the DOM).#[br]
    The downside is that the event listeners for the activator(s) will be attached to the document
    and not the activator itself. For that reason, it is not the recommended option if you have
    the choice.
  title-link(h3 slug="external-activator--basic") Trigger a menu on click of an external activator
  example.example14(content-class="text-center my4" app-classes-string="text-center")
    w-button.cat-button(icon="mdi mdi-cat" xl)
    w-menu(append-to=".example14" activator=".cat-button" arrow)
      template(#content)
        | Meow!
    template(#pug).
      w-button.cat-button(icon="mdi mdi-cat" xl)

      w-menu(activator=".cat-button" arrow)
        template(#content)
          | Meow!
    template(#html).
      &lt;w-button
        icon="mdi mdi-cat"
        xl
        class="cat-button"&gt;
      &lt;/w-button&gt;

      &lt;w-menu activator=".cat-button" arrow&gt;
        &lt;template #content&gt;
          Meow!
        &lt;/template&gt;
      &lt;/w-menu&gt;

  title-link(h3 slug="external-activator--2-activators").
    Trigger the same menu from 2 different external activators
  p.text-italic But do you really need that? ;)
  example.example15(content-class="text-center my4" app-classes-string="d-block text-center")
    w-button.pet-button.cat-button2.ma4(icon="mdi mdi-cat" xl @click="activator1 = '.cat-button2'")
    w-button.pet-button.dog-button2.ma4(icon="mdi mdi-dog" xl @click="activator1 = '.dog-button2'")
    w-menu(append-to=".example15" :activator="activator1" arrow)
      template(#content)
        | {{ activator1.includes('dog') ? 'Woof!' : 'Meow!' }}
    template(#pug).
      w-button.pet-button.cat-button.ma4(
        icon="mdi mdi-cat"
        xl
        @click="activator = '.cat-button'")
      w-button.pet-button.dog-button.ma4(
        icon="mdi mdi-dog"
        xl
        @click="activator = '.dog-button'")

      w-menu(:activator="activator" arrow)
        template(#content)
          | {{ "\{\{ activator.includes('dog') ? 'Woof!' : 'Meow!' \}\}" }}
    template(#html).
      &lt;w-button
        icon="mdi mdi-cat"
        xl
        class="pet-button cat-button ma4"
        @click="activator = '.cat-button'"&gt;
      &lt;/w-button&gt;
      &lt;w-button
        icon="mdi mdi-dog"
        xl
        class="pet-button dog-button ma4"
        @click="activator = '.dog-button'"&gt;
      &lt;/w-button&gt;

      &lt;w-menu :activator="activator" arrow&gt;
        &lt;template #content&gt;
          {{ "\{\{ activator.includes('dog') ? 'Woof!' : 'Meow!' \}\}" }}
        &lt;/template&gt;
      &lt;/w-menu&gt;
    template(#js).
      data: () => ({
        activator: '.pet-button'
      })

  title-link(h3 slug="external-activator--2-activators-on-hover").
    Trigger the same menu on hover of 2 different external activators
  p.text-italic But do you really need that too? ;)
  alert(tip).
    Note that like in this example, a tiny delay may help positioning the detachable correctly
    in case of multiple activators with different menu contents.

  example.example16(content-class="text-center my4" app-classes-string="d-block text-center")
    w-button.pet-button2.cat-button3.ma4(
      icon="mdi mdi-cat"
      xl
      @mouseenter="activator2 = '.cat-button3';menuContent = 'Meow!'"
      @mouseleave="activator2 = '.pet-button2'")
    w-button.pet-button2.dog-button3.ma4(
      icon="mdi mdi-dog"
      xl
      @mouseenter="activator2 = '.dog-button3';menuContent = 'Woof!'"
      @mouseleave="activator2 = '.pet-button2'")
    w-menu(append-to=".example16" :activator="activator2" arrow show-on-hover :delay="100")
      template(#content)
        | {{ menuContent }}
    template(#pug).
      w-button.pet-button.cat-button.ma4(
        icon="mdi mdi-cat"
        xl
        @mouseenter="activator = '.cat-button';menuContent = 'Meow!'"
        @mouseleave="activator = '.pet-button'")
      w-button.pet-button.dog-button.ma4(
        icon="mdi mdi-dog"
        xl
        @mouseenter="activator = '.dog-button';menuContent = 'Woof!'"
        @mouseleave="activator = '.pet-button'")

      w-menu(:activator="activator" arrow show-on-hover :delay="100")
        template(#content)
          | {{ '\{\{ menuContent \}\}' }}
    template(#html).
      &lt;w-button
        icon="mdi mdi-cat"
        xl
        class="pet-button cat-button ma4"
        @mouseenter="activator = '.cat-button';menuContent = 'Meow!'"
        @mouseleave="activator = '.pet-button'"&gt;
      &lt;/w-button&gt;
      &lt;w-button
        icon="mdi mdi-dog"
        xl
        class="pet-button dog-button ma4"
        @mouseenter="activator = '.dog-button';menuContent = 'Woof!'"
        @mouseleave="activator = '.pet-button'"&gt;
      &lt;/w-button&gt;

      &lt;w-menu
        :activator="activator"
        arrow
        show-on-hover
        :delay="100"&gt;
        &lt;template #content&gt;
          {{ '\{\{ menuContent \}\}' }}
        &lt;/template&gt;
      &lt;/w-menu&gt;
    template(#js).
      data: () => ({
        activator: '.pet-button',
        menuContent: ''
      })
</template>

<script>
export default {
  data: () => ({
    menuDisabled: false,
    showMenu: false,
    showListMenu1: false,
    showListMenu2: false,
    activator1: '.pet-button',
    activator2: '.pet-button2',
    menuContent: '',
    list: null
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

.example7 .w-menu {top: 10px;right: 20px;}
</style>
