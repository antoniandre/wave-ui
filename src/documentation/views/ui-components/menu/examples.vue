<template lang="pug">
div
  title-link(h2) Basic
  example.example1(content-class="text-center pt5" app-classes-string="align-center")
    w-menu(append-to=".example1")
      template(#activator="{ on }")
        w-button(v-on="on") Show menu
      | Menu content
    template(#pug).
      w-menu
        template(#activator="{ on }")
          w-button(v-on="on") Show menu
        | Menu content
    template(#html).
      &lt;w-menu&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on" class="mr3"&gt;
            Show menu on click
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

  title-link(h2) Show on click or on hover
  example.example2(content-class="pt5")
    | Show menu:
    w-menu(append-to=".example2")
      template(#activator="{ on }")
        w-button.mx3(v-on="on") On click
      | Menu content

    w-menu(append-to=".example2" show-on-hover)
      template(#activator="{ on }")
        w-button(v-on="on") On hover
      | Menu content
    template(#pug).
      | Show menu

      w-menu
        template(#activator="{ on }")
          w-button.mx3(v-on="on") On click
        | Menu content

      w-menu(show-on-hover)
        template(#activator="{ on }")
          w-button(v-on="on") On hover
        | Menu content
    template(#html).
      Show menu:

      &lt;w-menu&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on" class="mx3"&gt;
            On click
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;w-menu show-on-hover&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on"&gt;
            On hover
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

  title-link(h2) Persistent menu
  p.
    A persistent menu can only be closed by clicking on the activator again, or programmatically.#[br]
    Clicking outside the menu will not close it.#[br]
    Of course you can also add a button inside the menu to close it.
  example.example3(content-class="text-center pt5" app-classes-string="align-center")
    w-menu(append-to=".example3" persistent)
      template(#activator="{ on }")
        w-button.mb2.mr3(v-on="on") Show persistent menu
      | Click on the button again to close
    template(#pug).
      w-menu(persistent)
        template(#activator="{ on }")
          w-button.mb2.mr3(v-on="on") Show persistent menu
        | Click on the button again to close
    template(#html).
      &lt;w-menu persistent&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on" class="mr3"&gt;
            Show persistent menu
          &lt;/w-button&gt;
        &lt;/template&gt;
        Click on the button again to close
      &lt;/w-menu&gt;

  title-link(h2) Hide menu on click inside
  p A click inside the menu will close it.
  example.example4(content-class="text-center pt5" app-classes-string="align-center")
    w-menu(append-to=".example4" hide-on-menu-click)
      template(#activator="{ on }")
        w-button(v-on="on") Show menu
      | A click here will close the menu.
    template(#pug).
      w-menu(hide-on-menu-click)
        template(#activator="{ on }")
          w-button(v-on="on") Show menu
        | A click here will close the menu.
    template(#html).
      &lt;w-menu hide-on-menu-click&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on"&gt;
            Show menu
          &lt;/w-button&gt;
        &lt;/template&gt;
        A click here will close the menu.
      &lt;/w-menu&gt;

  title-link(h2) Position
  example.example5
    w-flex.my6(:gap="3" align-center wrap)
      | Show menu on:
      w-menu(append-to=".example5" left)
        template(#activator="{ on }")
          w-button.mx2(v-on="on") Left
        | Menu content
      w-menu(append-to=".example5" top)
        template(#activator="{ on }")
          w-button.mx2(v-on="on") Top
        | Menu content
      w-menu(append-to=".example5")
        template(#activator="{ on }")
          w-button.mx2(v-on="on") Bottom
        | Menu content
      w-menu(append-to=".example5" right)
        template(#activator="{ on }")
          w-button(v-on="on") Right
        | Menu content
    template(#pug).
      w-flex.my12(:gap="3" align-center wrap)
        | Show menu on:

        w-menu(left)
          template(#activator="{ on }")
            w-button.mx2(v-on="on") Left
          | Menu content
        w-menu(top)
          template(#activator="{ on }")
            w-button.mx2(v-on="on") Top
          | Menu content
        w-menu
          template(#activator="{ on }")
            w-button.mx2(v-on="on") Bottom
          | Menu content
        w-menu(right)
          template(#activator="{ on }")
            w-button(v-on="on") Right
          | Menu content
    template(#html).
      &lt;w-flex :gap="3" align-center wrap class="my12"&gt;
        Show menu on:

        &lt;w-menu left&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button v-on="on" class="mx2"&gt;
              Left
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;

        &lt;w-menu top&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button v-on="on" class="mx2"&gt;
              Top
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;

        &lt;w-menu&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button v-on="on" class="mx2"&gt;
              Bottom
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;

        &lt;w-menu right&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button v-on="on"&gt;
              Right
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;
      &lt;/w-flex&gt;

  title-link(h2) Alignments
  p In addition to positions, you can align the menu with its activator.
  example.example6
    .title4.mb2 Top position
    w-menu(append-to=".example6" top align-left)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Align left
      | Menu content
    w-menu(append-to=".example6" top)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Centered
      | Menu content
    w-menu(append-to=".example6" top align-right)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Align right
      | Menu content

    .title4.mt6.mb2 Bottom position
    w-menu(append-to=".example6" align-left)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Align left
      | Menu content
    w-menu(append-to=".example6")
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Centered
      | Menu content
    w-menu(append-to=".example6" align-right)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Align right
      | Menu content

    .title4.mt6.mb2 Right position
    w-menu(append-to=".example6" right align-top)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Align top
      | Menu content
    w-menu(append-to=".example6" right)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Centered
      | Menu content
    w-menu(append-to=".example6" right align-bottom)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Align bottom
      | Menu content

    .title4.mt6.mb2 Left position
    w-menu(append-to=".example6" left align-top)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Align top
      | Menu content
    w-menu(append-to=".example6" left)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Centered
      | Menu content
    w-menu(append-to=".example6" left align-bottom)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Align bottom
      | Menu content
    template(#pug).
      .title4.mb2 top position
      w-menu(top align-left)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Align left
        | Menu content
      w-menu(top)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Centered
        | Menu content
      w-menu(top align-right)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Align right
        | Menu content

      .title4.mt6.mb2 Bottom position
      w-menu(align-left)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Align left
        | Menu content
      w-menu
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Centered
        | Menu content
      w-menu(align-right)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Align right
        | Menu content

      .title4.mt6.mb2 Right position
      w-menu(right align-top)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Align top
        | Menu content
      w-menu(right)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Centered
        | Menu content
      w-menu(right align-bottom)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Align bottom
        | Menu content

      .title4.mt6.mb2 Left position
      w-menu(left align-top)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Align top
        | Menu content
      w-menu(left)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Centered
        | Menu content
      w-menu(left align-bottom)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Align bottom
        | Menu content
    template(#html).
      &lt;div class="title4 mb2"&gt;Top position&lt;/div&gt;
      &lt;w-menu top align-left&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Align left
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;w-menu top&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Centered
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;w-menu top align-right&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Align right
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;div class="title4 mt6 mb2"&gt;Bottom position&lt;/div&gt;
      &lt;w-menu align-left&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Align left
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;w-menu&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Centered
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;w-menu align-right&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Align right
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;div class="title4 mt6 mb2"&gt;Right position&lt;/div&gt;
      &lt;w-menu right align-top&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Align top
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;w-menu right&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Centered
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;w-menu right align-bottom&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;Alig
            n bottom
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;div class="title4 mt6 mb2"&gt;Left position&lt;/div&gt;
      &lt;w-menu left align-top&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;A
            lign top
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;w-menu left&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Centered
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

      &lt;w-menu left align-bottom&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Align bottom
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

  title-link(h2) No position
  p.
    By default, the menu is position at the bottom of the activator.
    If you prefer to position the menu yourself via CSS, you can skip the position calculation via the
    #[code no-position] prop.
  example.example7(content-class="pb12")
    w-menu(append-to=".example7 .example__render" no-position)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Show menu
      | Menu content
    template(#pug).
      w-menu(no-position)
        template(#activator="{ on }")
          w-button.ma1(v-on="on") Show menu
        | Menu content
    template(#html).
      &lt;w-menu no-position&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button class="ma1" v-on="on"&gt;
            Show menu
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;
    template(#css) .w-menu {top: 10px;right: 20px;}

  title-link(h2) Arrow (Tooltip style)
  p Applies a tooltip style with the #[code arrow] option.
  example.example13(content-class="text-center my4" app-classes-string="align-center")
    w-menu(append-to=".example13" arrow)
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Show menu
      | Menu content
    template(#pug).
      w-menu(arrow)
        template(#activator="{ on }")
          w-button(v-on="on") Show menu
        | Menu content
    template(#html).
      &lt;w-menu arrow&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on"&gt;
            Show menu
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
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
        template(#activator="{ on }")
          w-button.ma2(v-on="on") Top, align left
        | Menu content
      w-menu(arrow top)
        template(#activator="{ on }")
          w-button.ma2(v-on="on") Top, align center
        | Menu content
      w-menu(arrow top align-right)
        template(#activator="{ on }")
          w-button.ma2(v-on="on") Top, align right
        | Menu content
    w-flex(justify-center)
      w-menu(arrow align-left)
        template(#activator="{ on }")
          w-button.ma2(v-on="on") Bottom, align left
        | Menu content
      w-menu(arrow)
        template(#activator="{ on }")
          w-button.ma2(v-on="on") Bottom, align center
        | Menu content
      w-menu(arrow align-right)
        template(#activator="{ on }")
          w-button.ma2(v-on="on") Bottom, align right
        | Menu content
    template(#pug).
      w-flex(justify-center)
        w-menu(arrow top align-left)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Top, align left
          | Menu content
        w-menu(arrow top)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Top, align center
          | Menu content
        w-menu(arrow top align-right)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Top, align right
          | Menu content
      w-flex(justify-center)
        w-menu(arrow align-left)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Bottom, align left
          | Menu content
        w-menu(arrow)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Bottom, align center
          | Menu content
        w-menu(arrow align-right)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Bottom, align right
          | Menu content
    template(#html).
      &lt;w-flex justify-center&gt;
        &lt;div class="title4 mb2"&gt;Top position&lt;/div&gt;
        &lt;w-menu arrow top align-left&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button class="ma1" v-on="on"&gt;
              Top, align left
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;

        &lt;w-menu arrow top&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button class="ma1" v-on="on"&gt;
              Top, align center
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;

        &lt;w-menu arrow top align-right&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button class="ma1" v-on="on"&gt;
              Top, align right
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;
      &lt;/w-flex&gt;

      &lt;w-flex justify-center&gt;
        &lt;div class="title4 mt6 mb2"&gt;Bottom position&lt;/div&gt;
        &lt;w-menu arrow align-left&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button class="ma1" v-on="on"&gt;
              Bottom, align left
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;

        &lt;w-menu arrow&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button class="ma1" v-on="on"&gt;
              Bottom, align center
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;

        &lt;w-menu arrow align-right&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button class="ma1" v-on="on"&gt;
              Bottom, align right
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
        &lt;/w-menu&gt;
      &lt;/w-flex&gt;

  title-link(h4) Vertical
  example
    w-flex.text-center(justify-center)
      w-flex(column no-grow)
        w-menu(arrow left align-top)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Left, align top
          | Menu content
        w-menu(arrow left)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Left, align center
          | Menu content
        w-menu(arrow left align-bottom)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Left, align bottom
          | Menu content
      w-flex(column no-grow)
        w-menu(arrow right align-top)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Right, align top
          | Menu content
        w-menu(arrow right)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Right, align center
          | Menu content
        w-menu(arrow right align-bottom)
          template(#activator="{ on }")
            w-button.ma2(v-on="on") Right, align bottom
          | Menu content
    template(#pug).
      w-flex.text-center(justify-center)
        w-flex(column no-grow)
          w-menu(arrow left align-top)
            template(#activator="{ on }")
              w-button.ma2(v-on="on") Left, align top
            | Menu content
          w-menu(arrow left)
            template(#activator="{ on }")
              w-button.ma2(v-on="on") Left, align center
            | Menu content
          w-menu(arrow left align-bottom)
            template(#activator="{ on }")
              w-button.ma2(v-on="on") Left, align bottom
            | Menu content
        w-flex(column no-grow)
          w-menu(arrow right align-top)
            template(#activator="{ on }")
              w-button.ma2(v-on="on") Right, align top
            | Menu content
          w-menu(arrow right)
            template(#activator="{ on }")
              w-button.ma2(v-on="on") Right, align center
            | Menu content
          w-menu(arrow right align-bottom)
            template(#activator="{ on }")
              w-button.ma2(v-on="on") Right, align bottom
            | Menu content
    template(#html).
      &lt;w-flex text-center justify-center&gt;
        &lt;w-flex column no-grow&gt;
          &lt;div class="title4 mb2"&gt;Top position&lt;/div&gt;
          &lt;w-menu arrow left align-top&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-button class="ma1" v-on="on"&gt;
                Left, align top
              &lt;/w-button&gt;
            &lt;/template&gt;
            Menu content
          &lt;/w-menu&gt;

          &lt;w-menu arrow left&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-button class="ma1" v-on="on"&gt;
                Left, align center
              &lt;/w-button&gt;
            &lt;/template&gt;
            Menu content
          &lt;/w-menu&gt;

          &lt;w-menu arrow left align-bottom&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-button class="ma1" v-on="on"&gt;
                Left, align bottom
              &lt;/w-button&gt;
            &lt;/template&gt;
            Menu content
          &lt;/w-menu&gt;
        &lt;/w-flex&gt;

        &lt;w-flex column no-grow&gt;
          &lt;div class="title4 mt6 mb2"&gt;Bottom position&lt;/div&gt;
          &lt;w-menu arrow right align-top&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-button class="ma1" v-on="on"&gt;
                Right, align top
              &lt;/w-button&gt;
            &lt;/template&gt;
            Menu content
          &lt;/w-menu&gt;

          &lt;w-menu arrow right&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-button class="ma1" v-on="on"&gt;
                Right, align center
              &lt;/w-button&gt;
            &lt;/template&gt;
            Menu content
          &lt;/w-menu&gt;

          &lt;w-menu arrow right align-bottom&gt;
            &lt;template #activator="{ on }"&gt;
              &lt;w-button class="ma1" v-on="on"&gt;
                Right, align bottom
              &lt;/w-button&gt;
            &lt;/template&gt;
            Menu content
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
      template(#activator="{ on }")
        w-button.ma1(v-on="on") Show a blue menu
      | Menu content
    template(#pug).
      w-menu(color="{{ $store.state.darkMode ? 'blue-light4' : 'blue-dark2' }}" bg-color="{{ $store.state.darkMode ? 'indigo-dark6' : 'blue-light5' }}")
        template(#activator="{ on }")
          w-button(v-on="on") Show a blue menu
        | Menu content
    template(#html).
      &lt;w-menu color="{{ $store.state.darkMode ? 'blue-light4' : 'blue-dark2' }}" bg-color="{{ $store.state.darkMode ? 'indigo-dark6' : 'blue-light5' }}"&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on"&gt;
            Show a blue menu
          &lt;/w-button&gt;
        &lt;/template&gt;
        Menu content
      &lt;/w-menu&gt;

  title-link(h2) Tile, round and shadow
  example.example9
    w-flex.my6(wrap justify-center :gap="3")
      w-menu(append-to=".example9" tile)
        template(#activator="{ on }")
          w-button.mt1(v-on="on") Show a tile menu
        | Menu content
      w-menu(append-to=".example9" round)
        template(#activator="{ on }")
          w-button.mt1(v-on="on") Show a round menu
        | Menu content
      w-menu(append-to=".example9" shadow)
        template(#activator="{ on }")
          w-button.mt1(v-on="on") Show a shadow menu
        | Menu content
    template(#pug).
      w-flex.my6(wrap :gap="3" justify-center)
        w-menu(tile)
          template(#activator="{ on }")
            w-button(v-on="on") Show a tile menu
          | Menu content
        w-menu(round)
          template(#activator="{ on }")
            w-button(v-on="on") Show a round menu
          | Menu content
        w-menu(shadow)
          template(#activator="{ on }")
            w-button(v-on="on") Show a shadow menu
          | Menu content
    template(#html).
      &lt;w-flex wrap :gap="3"  justify-center class="my6"&gt;
        &lt;w-menu tile&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button v-on="on"&gt;
              Show a tile menu
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu round&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button v-on="on"&gt;
              Show a round menu
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;

        &lt;w-menu shadow&gt;
          &lt;template #activator="{ on }"&gt;
            &lt;w-button v-on="on"&gt;
              Show a shadow menu
            &lt;/w-button&gt;
          &lt;/template&gt;
          Menu content
          &lt;/template&gt;
        &lt;/w-menu&gt;
      &lt;/w-flex&gt;

  title-link(h2) Menu content: w-card
  p By default the menu is a w-card, so it accepts all the props of a w-card.
  example.example10(content-class="text-center my4" app-classes-string="align-center")
    w-menu(append-to=".example10" shadow v-model="showMenu")
      template(#activator)
        w-button.mr3.mb2(@click="showMenu = true") Show a w-card menu
      .title4 How much do you like Wave UI?
      p Pick a serious answer.
      w-flex.pl10.mt4(wrap justify-end)
        w-button.mr1(text color="green" @click="showMenu = false") Love it!
        w-button.mr1(text color="green" @click="showMenu = false") Love it!
        w-button(text color="green" @click="showMenu = false") Love it!
    w-menu(append-to=".example10" shadow custom)
      template(#activator="{ on }")
        w-button.mb2(v-on="on") Show a custom menu
      w-card.base-color--bg(content-class="pa0")
        w-toolbar
          .title3.ma0 Menu Title
          .spacer
          span.ml1 Item 1
          span.ml1 Item 2
        .pa3 This is some content in a w-card component.
    template(#pug).
      w-menu(shadow v-model="showMenu")
        template(#activator)
          w-button.mr3(@click="showMenu = true") Show a w-card menu
        .title4 How much do you like Wave UI?
        p Pick a serious answer.
        w-flex.pl10.mt4(wrap justify-end)
          w-button.mr1(text color="green" @click="showMenu = false") Love it!
          w-button.mr1(text color="green" @click="showMenu = false") Love it!
          w-button(text color="green" @click="showMenu = false") Love it!
      w-menu(shadow custom)
        template(#activator="{ on }")
          w-button(v-on="on") Show a custom menu
        w-card(content-class="pa0")
          w-toolbar
            .title3.ma0 Menu Title
            .spacer
            span.ml1 Item 1
            span.ml1 Item 2
          .pa3 This is some content in a w-card component.
    template(#html).
      &lt;w-menu shadow v-model="showMenu"&gt;
        &lt;template #activator&gt;
          &lt;w-button
            class="mr3"
            @click="showMenu = true"&gt;
            Show a w-card menu
          &lt;/w-button&gt;
        &lt;/template&gt;

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
      &lt;/w-menu&gt;

      &lt;w-menu shadow custom&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on"&gt;
            Show a custom menu
          &lt;/w-button&gt;
        &lt;/template&gt;

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
      template(#activator="{ on }")
        w-button(v-on="on") Show a list menu
      w-list.white--bg(
        v-model="list"
        :items="[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]"
        item-class="px8")
    div.mt4
      strong Current selection:
      code.ml1 {{ list || 'none' }}
    template(#pug).
      w-menu(custom hide-on-menu-click persistent shadow)
        template(#activator="{ on }")
          w-button(v-on="on") Show a list menu
        w-list.white--bg(
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
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on"&gt;
            Show a list menu
          &lt;/w-button&gt;
        &lt;/template&gt;

        &lt;w-list
          class="white--bg"
          v-model="listSelection"
          :items="listItems"
          item-class="px8"&gt;
        &lt;/w-list&gt;
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
      template(#activator="{ on }")
        w-button(v-on="on") Show a menu &amp; overlay
      w-list.white--bg(
        nav
        :items="[{ label: 'Item 1', route: '#item1' }, { label: 'Item 2', route: '#item2' }, { label: 'Item 3', route: '#item3' }]"
        item-class="px8"
        @item-select="showListMenu2 = false")
    template(#pug).
      w-menu(v-model="showMenu" shadow custom overlay)
        template(#activator="{ on }")
          w-button(v-on="on") Show a menu &amp; overlay
        w-list.white--bg(
          nav
          :items="listItems"
          item-class="px8"
          @item-select="showMenu = false")
    template(#html).
      &lt;w-menu v-model="showMenu" shadow custom overlay&gt;
        &lt;template #activator="{ on }"&gt;
          &lt;w-button v-on="on"&gt;
            Show a menu &amp; overlay
          &lt;/w-button&gt;
        &lt;/template&gt;

        &lt;w-list
          class="white--bg"
          nav
          :items="listItems"
          item-class="px8"
          @item-select="showMenu = false"&gt;
        &lt;/w-list&gt;
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
    w-menu(append-to=".example14" activator=".cat-button" arrow) Meow!
    template(#pug).
      w-button.cat-button(icon="mdi mdi-cat" xl)

      w-menu(activator=".cat-button" arrow) Meow!
    template(#html).
      &lt;w-button
        icon="mdi mdi-cat"
        xl
        class="cat-button"&gt;
      &lt;/w-button&gt;

      &lt;w-menu activator=".cat-button" arrow&gt;
        Meow!
      &lt;/w-menu&gt;

  title-link(h3 slug="external-activator--2-activators").
    Trigger the same menu from 2 different external activators
  p.text-italic But do you really need that? ;)
  example.example15(content-class="text-center my4" app-classes-string="d-block text-center")
    w-button.pet-button.cat-button2.ma4(icon="mdi mdi-cat" xl @click="activator1 = '.cat-button2'")
    w-button.pet-button.dog-button2.ma4(icon="mdi mdi-dog" xl @click="activator1 = '.dog-button2'")
    w-menu(append-to=".example15" :activator="activator1" arrow)
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
        {{ "\{\{ activator.includes('dog') ? 'Woof!' : 'Meow!' \}\}" }}
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
        {{ '\{\{ menuContent \}\}' }}
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
