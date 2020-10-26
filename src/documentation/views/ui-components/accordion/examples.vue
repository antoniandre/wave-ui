<template lang="pug">
div
  title-link(h2) Basic
  w-accordion.white--bg(:items="items")
  p.grey-light2.my4.
    Now that you've seen the default accordion in real context, all the examples of this page will have a
    light blue background and accordions a white background to help visualize where they end.

  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(v-model="accordion1" :items="items")
    div.mt3
      | v-model:
      code.ml1 {{ accordion1 }}
    template(#pug).
      w-accordion(v-model="accordion" :items="items")
      div.mt3
        | v-model:
        code.ml1 {{ '\{\{ accordion \}\}' }}
    template(#js).
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
        ],
        accordion: []
      })

  title-link(h2) Expanded by default
  p.
    You can expand one or multiple panes by default by providing a v-model array of booleans:
    #[span.code true] to expand, #[span.code false] to collapse the item.
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(v-model="accordion2" :items="items")
    div.mt3
      | v-model:
      code.ml1 {{ accordion2 }}
    template(#pug).
      w-accordion(v-model="accordion" :items="items")
      div.mt3
        | v-model:
        code.ml1 {{ '\{\{ accordion \}\}' }}
    template(#js).
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
        ],
        accordion: [false, true, false]
      })

  title-link(h2) Disabled pane
  p.
    Specify which pane should be disabled - expanded or collapsed - by adding the #[span.code disabled] property
    directly in the object.
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(v-model="accordion3" :items="itemsDisabled")
    template(#pug).
      w-accordion(v-model="accordion" :items="items")
    template(#js).
      data: () => ({
        items: [
          { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },
          { title: 'Item 2 - disabled expanded', content: 'You can\'t collapse this pane.', disabled: true },
          { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }
        ],
        accordion: [false, true, true]
      })

  title-link(h2) Shadow
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(:items="items" shadow)
    template(#pug).
      w-accordion(:items="items" shadow)
    template(#js).
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

  title-link(h2) Color &amp; background color
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.#[br]
    No background color is set by default and the text color is inherited.
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(:items="items" color="amber-dark1")
    w-accordion.mt6(:items="items" bg-color="yellow-light5")
    template(#pug).
      w-accordion(:items="items" color="amber-dark1")
      w-accordion.mt6(:items="items" bg-color="yellow-light5")
    template(#js).
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

  title-link(h3) Different color per item
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(:items="items2")
    template(#pug).
      w-accordion(:items="items")
    template(#js).
      data: () => ({
        items: [
          { title: 'Item 1', content: 'Content 1', color: 'amber' },
          { title: 'Item 2', content: 'Content 2', color: 'warning' },
          { title: 'Item 3', content: 'Content 3', color: 'error' }
        ]
      })

  title-link(h2) Expand a single item at a time
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(v-model="accordion4" :items="items" expand-single)
    div.mt3
      | v-model:
      code.ml1 {{ accordion4 }}
    template(#pug).
      w-accordion(v-model="accordion" :items="items" expand-single)
      div.mt3
        | v-model:
        code.ml1 {{ '\{\{ accordion \}\}' }}
    template(#js).
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
        ],
        accordion: []
      })

  title-link(h2) External control
  example(content-class="pa4 aliceblue")
    w-button.mr2(@click="accordion5 = Array(3).fill(true)" bg-color="primary" sm) Expand all
    w-button(@click="accordion5 = Array(3).fill(false)" bg-color="primary" sm) Collapse all
    w-accordion.mt4.white--bg(v-model="accordion5" :items="items")
    div.mt3
      | v-model:
      code.ml1 {{ accordion5 }}
    template(#pug).
      w-button.mr2(@click="accordion = Array&amp;#40;3&amp;#41;.fill&amp;#40;true&amp;#41;" bg-color="primary" sm) Expand all
      w-button(@click="accordion = Array&amp;#40;3&amp;#41;.fill&amp;#40;false&amp;#41;" bg-color="primary" sm) Collapse all

      w-accordion.mt4(v-model="accordion" :items="items")
      div.mt3
        | v-model:
        code.ml1 {{ '\{\{ accordion \}\}' }}
    template(#js).
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
        ],
        accordion: []
      })

  title-link(h2) Custom rendering
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(:items="items" content-class="pa0")
      template(#item-title="{ item }")
        w-icon(lg :color="item.itemColor") {{ item.icon }}
        .title3.my0.ml2(:class="item.itemColor") {{ item.title }}
      template(#item-content="{ item }")
        w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")
    template(#pug).
      w-accordion(:items="items" content-class="pa0")
        template(#item-title="{ item }")
          w-icon(lg :color="item.itemColor") {{ '\{\{ item.icon \}\}' }}
          .title3.ml2(:class="item.itemColor") {{ '\{\{ item.title \}\}' }}
        template(#item-content="{ item }")
          w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")
    template(#js).
      data: () => ({
        items: [
          {
            title: 'Item 1',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.',
            icon: 'mdi mdi-home',
            itemColor: 'blue'
          },
          {
            title: 'Item 2',
            content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!',
            icon: 'mdi mdi-github',
            itemColor: 'green'
          },
          {
            title: 'Item 3',
            content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.',
            icon: 'mdi mdi-codepen',
            itemColor: 'orange'
          }
        ]
      })

  title-link(h2) Do you (really) need even more flexibility?
  p.
    No problem, Wave UI's got you covered.#[br]
    If you don't need data objects at all, you can simply define a number of items: #[code :items="3"].

  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(:items="3")
      template(#item-title.1) Item title 1
      template(#item-content.1) Item content 1

      template(#item-title.2) Item title 2
      template(#item-content.2) Item content 2

      template(#item-title.3) Item title 3
      template(#item-content.3) Item content 3
    template(#pug).
      w-accordion(:items="3")
        template(#item-title.1="") Item title 1
        template(#item-content.1="") Item content 1

        template(#item-title.2="") Item title 2
        template(#item-content.2="") Item content 2

        template(#item-title.3="") Item title 3
        template(#item-content.3="") Item content 3

  p.
    Here is an example of 3 totally diferent pane titles and contents using more lines of code.#[br]
    This time, an array of object is defined to show you can also do a mix of contents coming from the
    the component's data or directly in the template.
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(:items="itemsCustom")
      template(#item-title.item1)
        | This is the 1st item
        w-tag.ml2(color="red" sm outline) HOT
      template(#item-content.item1)
        p This content has a checklist.
        .title4 To do
        w-list(checklist color="primary" :items="[{ label: 'do this' }, { label: 'do that next' }]")

      template(#item-title.item2)
        w-icon.mr1(md color="amber") mdi mdi-emoticon-excited-outline
        em This is the 2nd item
      template(#item-content.item2="{ item }")
        p The full content here is custom and completely distinct and independent from the other items.
        p
          | You also have access to the item's data if you need:
          code.ml1 {{ item }}

      template(#item-title.item3)
        strong This is the 3rd item
        w-icon.ml1(md color="pink") mdi mdi-emoticon-kiss-outline
      template(#item-content.item3)
        p Do you want to check the project on Github?
        w-button(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
          | Github
          w-icon.ml2(sm) mdi mdi-open-in-new
    template(#pug).
      w-accordion(:items="items")
        template(#item-title.item1="")
          | This is the 1st item
          w-tag.ml2(color="red" sm outline) HOT
        template(#item-content.item1="")
          p This content has a checklist.
          .title4.my3 To do
          w-list(checklist color="primary" :items="[{ label: 'do this' }, { label: 'do that next' }]")

        template(#item-title.item2="")
          w-icon.mr1(md color="amber") mdi mdi-emoticon-excited-outline
          em This is the 2nd item
        template(#item-content.item2="{ item }")
          p The full content here is custom and completely distinct and independent from the other items.
          p
            | You also have access to the item's data if you need:
            code.ml1 {{ '\{\{ item \}\}' }}

        template(#item-title.item3="")
          strong This is the 3rd item
          w-icon.ml1(md color="pink") mdi mdi-emoticon-kiss-outline
        template(#item-content.item3="")
          p Do you want to check the project on Github?
          w-button.mt2(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
            | Github
            w-icon.ml2(sm) mdi mdi-open-in-new
    template(#js).
      data: () => ({
        items: [
          { id: 'item1' },
          { id: 'item2' },
          { id: 'item3' }
        ]
      })

  title-link(h2) Toggle icon options
  example(content-class="pa4 aliceblue")
    .title4 1 custom icon (only expand)
    w-accordion.white--bg(:items="items" expand-icon="wi-chevron-down")
    .title4.mt6 2 custom icons (expand &amp; collapse)
    w-accordion.white--bg(:items="items" expand-icon="wi-plus" collapse-icon="wi-minus")
    .title4.mt6 No icon
    w-accordion.white--bg(:items="items" :expand-icon="false" title-class="py2")
    .title4.mt6 Icon on the right
    w-accordion.white--bg(:items="items" expand-icon-right)
    template(#pug).
      .title4.mb2 1 custom icon (only expand)
      w-accordion(:items="items" expand-icon="wi-chevron-down")

      .title4.mt8.mb2 2 custom icons (expand &amp; collapse)
      w-accordion(:items="items" expand-icon="wi-plus" collapse-icon="wi-minus")

      .title4.mt8.mb2 No icon
      w-accordion(:items="items" :expand-icon="false" title-class="py2")

      .title4.mt8.mb2 Icon on the right
      w-accordion(:items="items" expand-icon-right)
    template(#js).
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
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Item 1',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.',
        icon: 'mdi mdi-home',
        itemColor: 'blue'
      },
      {
        title: 'Item 2',
        content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!',
        icon: 'mdi mdi-github',
        itemColor: 'green'
      },
      {
        title: 'Item 3',
        content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.',
        icon: 'mdi mdi-codepen',
        itemColor: 'orange'
      }
    ],
    items2: [
      {
        title: 'Item 1',
        content: 'content 1',
        color: 'amber'
      },
      {
        title: 'Item 2',
        content: 'content 2',
        color: 'warning'
      },
      {
        title: 'Item 3',
        content: 'content 3',
        color: 'error'
      }
    ],
    itemsDisabled: [
      { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },
      { title: 'Item 2 - disabled expanded', content: 'You can\'t collapse this pane.', disabled: true },
      { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }
    ],
    itemsCustom: [
      { id: 'item1' },
      { id: 'item2' },
      { id: 'item3' }
    ],
    accordion1: [],
    accordion2: [false, true, false],
    accordion3: [false, true, true],
    accordion4: [],
    accordion5: []
  })
}
</script>

<style lang="scss">
.aliceblue {background-color: #f6fbff;}
</style>
