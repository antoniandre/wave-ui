<template lang="pug">
div
  title-link.mt4.code(h1) w-accordion

  title-link(h2) Basic
  w-accordion.white--bg(:items="items")
  p.grey-light2.my4.
    Now that you've seen the default accordion in real context, all the examples of this page will have a
    light blue background and the accordions have a white background to help vizualize where it ends.

  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(v-model="accordion1" :items="items")
    div.mt3
      | v-model:
      code.ml1 {{ accordion1 }}
    template(#pug).

  title-link(h2) Color &amp; background color
  p No background color is set by default and the text color is inherited.
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(v-model="accordion2" color="amber-dark1" :items="items")
    w-accordion.mt6(v-model="accordion3" bg-color="yellow-light5" :items="items")
    template(#pug).

  title-link(h2) Expand single item at a time
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(v-model="accordion4" :items="items" expand-single)
    div
      | v-model:
      code.ml1 {{ accordion4 }}
    template(#pug).

  title-link(h2) External control
  example(content-class="pa4 aliceblue")
    w-button.mr2(@click="accordion5 = Array(3).fill(true)" bg-color="primary" sm) Expand all
    w-button(@click="accordion5 = Array(3).fill(false)" bg-color="primary" sm) Collapse all
    w-accordion.mt4.white--bg(v-model="accordion5" :items="items")
    div
      | v-model:
      code.ml1 {{ accordion5 }}
    template(#pug).

  title-link(h2) Custom rendering
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(:items="items" content-class="pa0")
      template(#item-title="{ item }")
        w-icon(lg :color="item.color") {{ item.icon }}
        .title3.my0.ml2(:class="item.color") {{ item.title }}
      template(#item-content="{ item }")
        w-alert.my0.pb3(border-left tile :color="`${item.color}`" v-html="item.content")
    template(#pug).

  title-link(h2) Custom toggle icon, or no icon
  example(content-class="pa4 aliceblue")
    .title4 2 icons (expand &amp; collapse)
    w-accordion.white--bg(:items="items" expand-icon="wi-chevron-down" collapse-icon="wi-chevron-up")
    .title4.mt6 1 icon (only expand)
    w-accordion.white--bg(:items="items" expand-icon="wi-chevron-down")
    .title4.mt6 No icon
    w-accordion.white--bg(:items="items" expand-icon="")
    template(#pug).

</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Item 1',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.',
        icon: 'mdi mdi-home',
        color: 'blue'
      },
      {
        title: 'Item 2',
        content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!',
        icon: 'mdi mdi-github',
        color: 'green'
      },
      {
        title: 'Item 3',
        content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.',
        icon: 'mdi mdi-codepen',
        color: 'orange'
      }
    ],
    accordion1: [],
    accordion2: [],
    accordion3: [],
    accordion4: [],
    accordion5: []
  })
}
</script>

<style lang="scss">
.aliceblue {background-color: #f6fbff;}
</style>
