<template lang="pug">
div
  title-link.mt4.code(h1) w-accordion

  w-accordion(:items="items")

  w-accordion.mt6(:items="items")
    template(#item-title="{ item }")
      w-icon(md) wi-star
      .title2.my0.ml2 {{ item.title }}
    template(#item-content="{ item }")
      p(v-html="item.content")

</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Item 1',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'
      },
      {
        title: 'Item 2',
        content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
      },
      {
        title: 'Item 3',
        content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
      }
    ]
  })
}
</script>
