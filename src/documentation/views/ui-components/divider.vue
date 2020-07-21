<template lang="pug">
div
  title-link.mt4.code(h1) w-divider

  title-link(h2) Horizontal
  p This horizontal line bellow is a divider.
  w-divider.ma10

  h3 Divider in a #[code w-card]
  w-card
    p.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae et eos
      el neque quas consequuntur nisi soluta, voluptate cumque placeat rerum? Quisquam
      emporibus mollitia quia soluta adipisci totam quibusdam? Perferendis officia quae
      olestias assumenda est obcaecati quaerat ullam corporis voluptatibus ratione, eum
      rovident iste possimus explicabo saepe laborum. Beatae perspiciatis at enim eaque?

    w-divider.my6.mx-4
    pre.mb4 w-divider.my6.mx-4

    p.
      Et possimus corporis ducimus rem tenetur. Deleniti, culpa magni repellendus adipisci
      impedit cum eum explicabo alias natus modi asperiores ratione dignissimos qui eligendi?
      Quia rem ut ab nesciunt dignissimos natus. Eum corporis officiis natus velit illum.

    w-divider.ma6(color="amber")
    pre.mb4 w-divider.ma6.amber

    p.
      Quisquam soluta distinctio qui vel alias molestiae, doloremque totam eius sequi delectus
      optio quam magnam, eaque, voluptatum maxime excepturi perspiciatis saepe provident dicta
      sapiente similique quibusdam. Mollitia, vel quam. Laudantium!

  title-link(h2) Vertical
  h3 Divider in a #[code w-toolbar]
  w-toolbar(bg-color="grey-light-5")
    .title.my0 Toolbar
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
  w-divider.ma10.ml0(color="green")
</template>
