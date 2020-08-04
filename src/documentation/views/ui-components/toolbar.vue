<template lang="pug">
div
  title-link.mt4.code(h1) w-toolbar

  title-link(h2) Simple toolbar with shadow
  example(content-class="pa4")
    w-toolbar(shadow)
      .title2.my0 Title
      .spacer
      span.ml2 Item 1
      span.ml2 Item 2
      span.ml2 Item 3
    w-toolbar.mt6.py1(shadow)
      svg.wave.mr2(viewBox="0 0 725 477" style="height: 24px;fill: #497ca2")
        path(d="M449 0c-78 5-152 39-217 82-19 13-37 26-54 40-39 1-77 15-110 34-34 21-53 60-61 99-11 52-8 108 6 159 7 23 16 46 33 63 4-4 13-4 13-11-1-5-7-8-9-14-27-48-32-108-11-159 13-32 36-63 68-77 19-9 42-7 58 6 6 7 18 4 24-2 6-4 11-10 19-10-24 25-39 60-38 95 1 15 3 31 8 45 16 36 41 69 76 89 5 2 10 6 16 7 5-2 14-5 14-12-4-9-14-12-21-18-27-23-56-48-67-82-9-29-1-60 8-88 7-15 21-32 39-29 15 1 28 13 43 8 11-5 13-17 16-27 5-17 3-38-10-51-16-18-40-23-62-25l-11-2c23-19 53-26 81-31 21-3 43-5 64-2 18 3 28 21 42 31-33 47-57 102-56 159a170 170 0 0086 149c6-1 13-7 10-14-5-11-17-16-25-25-33-30-52-75-50-121 1-29 11-58 24-84 12-25 25-52 47-71 9-8 22-13 33-7 20 8 42 14 63 13-35 27-55 70-64 113-9 44-7 91 12 133 15 37 45 68 81 85 32 16 67 24 101 27 18 1 36 2 53-4 4-1 6-7 2-9-13-6-28-4-42-6-45-5-92-16-127-45-34-28-54-71-60-114-5-47 7-97 34-137 11-15 26-31 45-34 14-1 25 12 31 23 6 12 16 24 29 28 20-10 40-26 43-50 2-17-6-34-14-49-15-25-40-43-69-48-20-5-41-2-61-6-22-21-54-24-83-24zm6 21c22 0 48 5 62 25 4 7 8 16 8 24-1 10-10 22-21 19-9-7-18-14-30-16-14-4-31-1-43 8-6 6-17 8-24 2-9-6-17-15-28-17-27-7-54 1-81 6a364 364 0 01157-51zm117 29c33 0 66 25 72 58 3 12 3 28-8 35-3 2-6 4-8 1-8-12-12-27-23-37-3-7-12-8-19-9-13-2-26 0-39-4 7-7 6-17 4-25l-3-16 24-3zm-372 92l46 2c18 2 33 16 34 34 1 7 1 17-6 21-6 0-12-4-18-6-21-8-46-14-67-3-6 2-11 9-17 5-10-4-18-14-30-12-30 1-56 21-77 42-16 17-30 37-43 56 0-39 17-80 49-104 26-22 61-30 94-34l35-1z")
      .title3.my0 Wave UI
      .spacer
      w-button.ml3(icon="mdi mdi-home" color="primary" text lg)
      w-button.ml3(icon="mdi mdi-chat" color="primary" text lg)
      w-button.ml3(icon="mdi mdi-email" color="primary" text lg)
    template(#html).
      &lt;w-toolbar shadow&gt;
        &lt;div class="title2"&gt;Title&lt;/div&gt;
        &lt;div class="spacer"&gt;&lt;/div&gt;
        &lt;span class="ml2"&gt;Item 1&lt;/span&gt;
        &lt;span class="ml2"&gt;Item 2&lt;/span&gt;
        &lt;span class="ml2"&gt;Item 3&lt;/span&gt;
      &lt;/w-toolbar&gt;

      &lt;w-toolbar shadow class="mt6 py1"&gt;
        &lt;w-icon lg class="mr2 primary"&gt;mdi mdi-star&lt;/w-icon&gt;
        &lt;div class="title3"&gt;Wave UI&lt;/div&gt;
        &lt;div class="spacer"&gt;&lt;/div&gt;
        &lt;w-button icon="mdi mdi-home" text lg class="ml3 primary"&gt;&lt;/w-button&gt;
        &lt;w-button icon="mdi mdi-chat" text lg class="ml3 primary"&gt;&lt;/w-button&gt;
        &lt;w-button icon="mdi mdi-email" text lg class="ml3 primary"&gt;&lt;/w-button&gt;
      &lt;/w-toolbar&gt;

  title-link(h2) Background color &amp; text color
  example(content-class="pa4")
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

    h3 With shadow
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

      &lt;h3&gt;With shadow&lt;/h3&gt;

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
</template>

<style lang="scss">
.page--toolbar {
  .w-card {
    flex-grow: 1;
    max-width: 550px;
    height: 200px;
  }
}
</style>
