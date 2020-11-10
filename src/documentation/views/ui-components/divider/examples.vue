<template lang="pug">
div
  title-link(h2) Horizontal
  p.
    This horizontal line bellow is a divider.#[br]
    You can set margins on a divider space out or reduce the width/height of the divider.
  w-divider.ma10

  h3 Divider in a #[code w-card]
  w-card
    p.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae et eos
      el neque quas consequuntur nisi soluta, voluptate cumque placeat rerum? Quisquam
      emporibus mollitia quia soluta adipisci totam quibusdam? Perferendis officia quae
      olestias assumenda est obcaecati quaerat ullam corporis voluptatibus ratione, eum
      rovident iste possimus explicabo saepe laborum. Beatae perspiciatis at enim eaque?

    w-divider.my6.mx-3
    ssh-pre.mb4(language="html-vue") &lt;w-divider class="my6 mx-3"&gt;&lt;/w-divider&gt;

    p.
      Et possimus corporis ducimus rem tenetur. Deleniti, culpa magni repellendus adipisci
      impedit cum eum explicabo alias natus modi asperiores ratione dignissimos qui eligendi?
      Quia rem ut ab nesciunt dignissimos natus. Eum corporis officiis natus velit illum.

    w-divider.ma6(color="amber")
    ssh-pre.mb4(language="html-vue") &lt;w-divider color="amber" class="ma6"&gt;&lt;/w-divider&gt;

    p.
      Quisquam soluta distinctio qui vel alias molestiae, doloremque totam eius sequi delectus
      optio quam magnam, eaque, voluptatum maxime excepturi perspiciatis saepe provident dicta
      sapiente similique quibusdam. Mollitia, vel quam. Laudantium!

  title-link(h2) Vertical
  h3 Divider in a #[code w-toolbar]
  example
    w-toolbar.py0(bg-color="grey-light5")
      .title2.my2 Toolbar
      .spacer
      span.mx1 Item 1
      span.mx1 Item 2
      w-divider.mx1(vertical)
      span.mx1 Item 3
      span.mx1 Item 4
      w-divider.mx1(vertical)
      span.mx1 Item 5
      span.mx1 Item 6
    template(#pug).
      w-toolbar.py0(bg-color="grey-light5")
        .title2.my2 Toolbar
        .spacer
        span.mx1 Item 1
        span.mx1 Item 2
        w-divider.mx1(vertical)
        span.mx1 Item 3
        span.mx1 Item 4
        w-divider.mx1(vertical)
        span.mx1 Item 5
        span.mx1 Item 6

  title-link(h2) Color
  example
    w-divider.ma6(color="green")
    template(#pug).
      w-divider.ma6(color="green")

  title-link(h2) With content
  p.
    A default slot is available to provide some content to display in the middle of the divider.
    This is often use with a OR keyword to offer an alternative.
  example
    .w-flex.align-center.justify-center
      w-button.my6 Log in
      w-divider.mx6(vertical color="pink") OR
      w-button.my6 Sign in
    template(#pug).
      .w-flex.align-center.justify-center
        w-button.my6 Log in
        w-divider.mx6(vertical color="pink") OR
        w-button.my6 Sign in
  example
    w-card.md6.maa.text-center
      w-button.my12 Log in
      w-divider.mx6(color="pink") OR
      w-button.my12 Sign in
    template(#pug).
      w-card.md6.maa.text-center
        w-button.my12 Log in
        w-divider.mx6(color="pink") OR
        w-button.my12 Sign in
</template>
