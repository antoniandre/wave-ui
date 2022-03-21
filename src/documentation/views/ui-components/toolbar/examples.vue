<template lang="pug">
div
  title-link(h2) Simple toolbar with shadow
  example(content-class="pa4")
    w-toolbar(shadow)
      .title2.my0 Title
      .spacer
      span.ml2 Item 1
      span.ml2 Item 2
      span.ml2 Item 3
    w-toolbar.mt6.py1(shadow)
      w-icon.mr3(size="2.5em" style="color: #497ca2") wi-wave
      .title3.my0 Wave UI
      .spacer
      w-button.ml3(icon="mdi mdi-home" text lg)
      w-button.ml3(icon="mdi mdi-chat" text lg)
      w-button.ml3(icon="mdi mdi-email" text lg)
    template(#pug).
      w-toolbar(shadow)
        .title2 Title
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3

      w-toolbar.mt6.py1(shadow)
        w-icon.mr3(color="light-blue-dark3" size="2.5em") wi-wave
        .title3 Wave UI
        .spacer
        w-button.ml3(icon="mdi mdi-home" text lg)
        w-button.ml3(icon="mdi mdi-chat" text lg)
        w-button.ml3(icon="mdi mdi-email" text lg)
    template(#html).
      &lt;w-toolbar shadow&gt;
        &lt;div class="title2"&gt;Title&lt;/div&gt;
        &lt;div class="spacer"&gt;&lt;/div&gt;
        &lt;span class="ml2"&gt;Item 1&lt;/span&gt;
        &lt;span class="ml2"&gt;Item 2&lt;/span&gt;
        &lt;span class="ml2"&gt;Item 3&lt;/span&gt;
      &lt;/w-toolbar&gt;

      &lt;w-toolbar shadow class="mt6 py1"&gt;
        &lt;w-icon color="light-blue-dark3" size="2.5em"&gt;wi-wave&lt;/w-icon&gt;
        &lt;div class="title3 mr3"&gt;Wave UI&lt;/div&gt;
        &lt;div class="spacer"&gt;&lt;/div&gt;
        &lt;w-button icon="mdi mdi-home" text lg class="ml3"&gt;&lt;/w-button&gt;
        &lt;w-button icon="mdi mdi-chat" text lg class="ml3"&gt;&lt;/w-button&gt;
        &lt;w-button icon="mdi mdi-email" text lg class="ml3"&gt;&lt;/w-button&gt;
      &lt;/w-toolbar&gt;

  title-link(h2) Background color &amp; text color
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.
  example(content-class="pa4")
    w-toolbar(bg-color="blue-light5" color="blue-dark3")
      .title2.my0 Title
      .spacer
      span.ml2 Item 1
      span.ml2 Item 2
      span.ml2 Item 3
    template(#pug).
      w-toolbar(bg-color="blue-light5" color="blue-dark3")
        .title2.my0 Title
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3
    template(#html).
      &lt;w-toolbar bg-color="blue-light5" color="blue-dark3"&gt;
        &lt;div class="title2"&gt;Title&lt;/div&gt;
        &lt;div class="spacer"&gt;&lt;/div&gt;
        &lt;span class="ml2"&gt;Item 1&lt;/span&gt;
        &lt;span class="ml2"&gt;Item 2&lt;/span&gt;
        &lt;span class="ml2"&gt;Item 3&lt;/span&gt;
      &lt;/w-toolbar&gt;

  title-link(h2) Toolbars inside w-card
  p.
    The w-card component will detect if there is a toolbar in the title slot or in the actions
    slot and will remove the default padding and border on this slot if there is.

  example
    w-flex.mt4(wrap :gap="4")
      w-card
        template(#title)
          w-toolbar
            .title2.my0 Top Bar
            .spacer
            span.ml2 Item 1
            span.ml2 Item 2
            span.ml2 Item 3
      w-card
        template(#actions)
          w-toolbar(bottom)
            .title2.my0 Bottom Bar
            .spacer
            span.ml2 Item 1
            span.ml2 Item 2
            span.ml2 Item 3
    template(#pug).
      w-flex.mt4(wrap :gap="4")
        w-card
          template(#title)
            w-toolbar
              .title2.my0 Top Bar
              .spacer
              span.ml2 Item 1
              span.ml2 Item 2
              span.ml2 Item 3

        w-card
          template(#actions)
            w-toolbar(bottom)
              .title2.my0 Bottom Bar
              .spacer
              span.ml2 Item 1
              span.ml2 Item 2
              span.ml2 Item 3
    template(#html).
      &lt;w-flex wrap :gap="4" class="mt4"&gt;
        &lt;w-card&gt;
          &lt;template #title&gt;
            &lt;w-toolbar&gt;
              &lt;div class="title2"&gt;Top Bar&lt;/div&gt;
              &lt;div class="spacer"&gt;&lt;/div&gt;
              &lt;span class="ml2"&gt;Item 1&lt;/span&gt;
              &lt;span class="ml2"&gt;Item 2&lt;/span&gt;
              &lt;span class="ml2"&gt;Item 3&lt;/span&gt;
            &lt;/w-toolbar&gt;
          &lt;/template&gt;
        &lt;/w-card&gt;

        &lt;w-card&gt;
          &lt;template #actions&gt;
            &lt;w-toolbar bottom&gt;
              &lt;div class="title2"&gt;Bottom Bar&lt;/div&gt;
              &lt;div class="spacer"&gt;&lt;/div&gt;
              &lt;span class="ml2"&gt;Item 1&lt;/span&gt;
              &lt;span class="ml2"&gt;Item 2&lt;/span&gt;
              &lt;span class="ml2"&gt;Item 3&lt;/span&gt;
            &lt;/w-toolbar&gt;
          &lt;/template&gt;
        &lt;/w-card&gt;
      &lt;/w-flex&gt;
    template(#css).
      .w-card {
        flex-grow: 1;
        max-width: 550px;
        height: 200px;
      }

  title-link(h3) With shadow
  example
    w-flex.mt4(wrap :gap="4")
      w-card
        template(#title)
          w-toolbar(shadow)
            .title2.my0 Top Bar
            .spacer
            span.ml2 Item 1
            span.ml2 Item 2
            span.ml2 Item 3
      w-card
        template(#actions)
          w-toolbar(bottom shadow)
            .title2.my0 Bottom Bar
            .spacer
            span.ml2 Item 1
            span.ml2 Item 2
            span.ml2 Item 3
    template(#pug).
      w-flex.mt4(wrap :gap="4")
        w-card
          template(#title)
            w-toolbar(shadow)
              .title2.my0 Top Bar
              .spacer
              span.ml2 Item 1
              span.ml2 Item 2
              span.ml2 Item 3
        w-card
          template(#actions)
            w-toolbar(bottom shadow)
              .title2.my0 Bottom Bar
              .spacer
              span.ml2 Item 1
              span.ml2 Item 2
              span.ml2 Item 3
    template(#html).
      &lt;w-flex wrap :gap="4" class="mt4"&gt;
        &lt;w-card&gt;
          &lt;template #title&gt;
            &lt;w-toolbar shadow&gt;
              &lt;div class="title2"&gt;Top Bar&lt;/div&gt;
              &lt;div class="spacer"&gt;&lt;/div&gt;
              &lt;span class="ml2"&gt;Item 1&lt;/span&gt;
              &lt;span class="ml2"&gt;Item 2&lt;/span&gt;
              &lt;span class="ml2"&gt;Item 3&lt;/span&gt;
            &lt;/w-toolbar&gt;
          &lt;/template&gt;
        &lt;/w-card&gt;

        &lt;w-card&gt;
          &lt;template #actions&gt;
            &lt;w-toolbar bottom shadow&gt;
              &lt;div class="title2"&gt;Bottom Bar&lt;/div&gt;
              &lt;div class="spacer"&gt;&lt;/div&gt;
              &lt;span class="ml2"&gt;Item 1&lt;/span&gt;
              &lt;span class="ml2"&gt;Item 2&lt;/span&gt;
              &lt;span class="ml2"&gt;Item 3&lt;/span&gt;
            &lt;/w-toolbar&gt;
          &lt;/template&gt;
        &lt;/w-card&gt;
      &lt;/w-flex&gt;
    template(#css).
      .w-card {
        flex-grow: 1;
        max-width: 550px;
        height: 200px;
      }

  title-link(h2) Custom toolbar height
  p.
    The #[code w-toolbar] component also accepts a height. It can be set as a string with units
    or a number of pixels (without unit).

  example(content-class="pa0")
    w-toolbar.py0(bg-color="blue-light5" color="blue-dark3" height="5em")
      .title2.my0 Title
      .spacer
      span.mx1 Item 1
      span.mx1 Item 2
      w-divider.mx2(vertical)
      span.mx1 Item 3
      span.mx1 Item 4
      w-divider.mx2(vertical)
      span.mx1 Item 5
      span.mx1 Item 6
    template(#pug).
      w-toolbar.py0(bg-color="blue-light5" color="blue-dark3" height="5em")
        .title2.my0 Title
        .spacer
        span.mx1 Item 1
        span.mx1 Item 2
        w-divider.mx2(vertical)
        span.mx1 Item 3
        span.mx1 Item 4
        w-divider.mx2(vertical)
        span.mx1 Item 5
        span.mx1 Item 6
    template(#html).
      &lt;w-toolbar bg-color="blue-light5" color="blue-dark3" height="5em" class="py0"&gt;
        &lt;div class="title2"&gt;Title&lt;/div&gt;
        &lt;div class="spacer"&gt;&lt;/div&gt;
        &lt;span class="mx1"&gt;Item 1&lt;/span&gt;
        &lt;span class="mx1"&gt;Item 2&lt;/span&gt;
        &lt;w-divider vertical class="mx2"&gt;&lt;/w-divider&gt;
        &lt;span class="mx1"&gt;Item 3&lt;/span&gt;
        &lt;span class="mx1"&gt;Item 4&lt;/span&gt;
        &lt;w-divider vertical class="mx2"&gt;&lt;/w-divider&gt;
        &lt;span class="mx1"&gt;Item 5&lt;/span&gt;
        &lt;span class="mx1"&gt;Item 6&lt;/span&gt;
      &lt;/w-toolbar&gt;

  //- @todo.
  //- title-link(h2) Vertical toolbar with absolute position
  //- example(content-class="py12")
    w-toolbar(vertical absolute left)
      w-icon(size="2.2em" color="primary") wi-wave
      .spacer
      w-button.pa4(icon="mdi mdi-home" text lg)
      w-button.pa4(icon="mdi mdi-chat" text lg)
      w-button.pa4(icon="mdi mdi-email" text lg)

  title-link(h2) Vertical toolbar
  example(content-class="justify-center")
    w-card.mxa(content-class="pa0 w-flex" style="max-width: 550px;height: 200px")
      w-toolbar(vertical)
        w-icon(size="2.2em" color="primary") wi-wave
        w-divider.mya
        w-button.pa4(icon="mdi mdi-cart" text lg)
        w-button.pa4(icon="mdi mdi-email" text lg)
        w-button.pa4(icon="mdi mdi-chat" text lg)
      w-flex(align-center justify-center) Some content.
    template(#pug).
      w-card(content-class="pa0 w-flex" style="height: 200px")
        w-toolbar(vertical)
          w-icon(size="2.2em" color="primary") wi-wave

          //- You could also add a .spacer before &amp; after instead of the `mya` class.
          w-divider.mya

          w-button.pa4(icon="mdi mdi-cart" text lg)
          w-button.pa4(icon="mdi mdi-email" text lg)
          w-button.pa4(icon="mdi mdi-chat" text lg)

        w-flex(align-center justify-center) Some content.
    template(#html).
      &lt;w-card content-class="pa0 w-flex" style="height: 200px"&gt;
        &lt;w-toolbar vertical&gt;
          &lt;w-icon color="primary" size="2.2em"&gt;wi-wave&lt;/w-icon&gt;

          &lt;!-- You could also add a .spacer before &amp; after instead of the `mya` class. --&gt;
          &lt;w-divider class="mya"&gt;&lt;/w-divider&gt;

          &lt;w-button icon="mdi mdi-cart" text lg class="pa4"&gt;&lt;/w-button&gt;
          &lt;w-button icon="mdi mdi-email" text lg class="pa4"&gt;&lt;/w-button&gt;
          &lt;w-button icon="mdi mdi-chat" text lg class="pa4"&gt;&lt;/w-button&gt;
        &lt;/w-toolbar&gt;

        &lt;w-flex align-center justify-center&gt;
          Some content.
        &lt;/w-flex&gt;
      &lt;/w-card&gt;
</template>

<style lang="scss">
.main--toolbar {
  .w-card {
    flex-grow: 1;
    max-width: 550px;
    height: 200px;
  }
}

@media screen and (max-width: 400px) {
  .main--toolbar .w-toolbar {
    button {margin: 0;}
    .ml2 {margin-left:4px;}
    .title2 {font-size: 19px;}
    .title3 {font-size: 16px;}
  }
}
</style>
