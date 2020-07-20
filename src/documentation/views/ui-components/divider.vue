<template lang="pug">
div
  title-link.mt-4.code(h1) w-divider

  title-link(h2) Horizontal
  p This horizontal line bellow is a divider.
  w-divider.ma-10

  h3 Divider in a #[code w-card]
  w-card
    p.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae et eos
      el neque quas consequuntur nisi soluta, voluptate cumque placeat rerum? Quisquam
      emporibus mollitia quia soluta adipisci totam quibusdam? Perferendis officia quae
      olestias assumenda est obcaecati quaerat ullam corporis voluptatibus ratione, eum
      rovident iste possimus explicabo saepe laborum. Beatae perspiciatis at enim eaque?

    w-divider.my-6.mx-n4
    pre.mb-4 w-divider.my-6.mx-n4

    p.
      Et possimus corporis ducimus rem tenetur. Deleniti, culpa magni repellendus adipisci
      impedit cum eum explicabo alias natus modi asperiores ratione dignissimos qui eligendi?
      Quia rem ut ab nesciunt dignissimos natus. Eum corporis officiis natus velit illum.

    w-divider.ma-6(color="amber")
    pre.mb-4 w-divider.ma-6.amber

    p.
      Quisquam soluta distinctio qui vel alias molestiae, doloremque totam eius sequi delectus
      optio quam magnam, eaque, voluptatum maxime excepturi perspiciatis saepe provident dicta
      sapiente similique quibusdam. Mollitia, vel quam. Laudantium!

  title-link(h2) Vertical
  h3 Divider in a #[code w-toolbar]
  w-toolbar(bg-color="grey-light-5")
    .title.my-0 Toolbar
    .spacer
    span.mx-1 Item 1
    span.mx-1 Item 2
    w-divider.mx-1(vertical)
    span.mx-1 Item 3
    span.mx-1 Item 4
    w-divider.mx-1(vertical)
    span.mx-1 Item 5
    span.mx-1 Item 6

  title-link(h2) Color
  w-divider.ma-10.ml-0(color="green")
</template>
