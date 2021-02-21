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
    template(#html).
      &lt;w-accordion v-model="accordion" :items="items" /&gt;
      &lt;div class="mt3"&gt;
        v-model:
        &lt;code class="ml1"&gt;{{ '\{\{ accordion \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
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
    template(#html).
      &lt;w-accordion v-model="accordion" :items="items" /&gt;
      &lt;div class="mt3"&gt;
        v-model:
        &lt;code class="ml1"&gt;{{ '\{\{ accordion \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
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
    template(#html).
      &lt;w-accordion v-model="accordion" :items="items" /&gt;
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
    template(#html).
      &lt;w-accordion :items="items" shadow /&gt;
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
    template(#html).
      &lt;w-accordion :items="items" color="amber-dark1"&gt;&lt;/w-accordion&gt;
      &lt;w-accordion class="mt6" :items="items" bg-color="yellow-light5"&gt;&lt;/w-accordion&gt;
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
    template(#html).
      &lt;w-accordion :items="items" /&gt;
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
    template(#html).
      &lt;w-accordion v-model="accordion" :items="items" expand-single /&gt;
      &lt;div class="mt3"&gt;
        v-model:
        &lt;code class="ml1"&gt;{{ '\{\{ accordion \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
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
    template(#html).
      &lt;w-button
        class="mr2"
        @click="accordion = Array&amp;#40;3&amp;#41;.fill&amp;#40;true&amp;#41;"
        bg-color="primary"
        sm&gt;
        Expand all
      &lt;/w-button&gt;
      &lt;w-button
        @click="accordion = Array&amp;#40;3&amp;#41;.fill&amp;#40;false&amp;#41;"
        bg-color="primary"
        sm&gt;
        Collapse all
      &lt;/w-button&gt;

      &lt;w-accordion class="mt4" v-model="accordion" :items="items" /&gt;
      &lt;div class="mt3"&gt;
        v-model:
        &lt;code class="ml1"&gt;{{ '\{\{ accordion \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
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

  title-link(h2 slug="custom-rendering") Custom rendering (via slots)
  p.
    Customize all the tab items titles and/or content via the single slot #[code item-title], and/or
    all the tab items content via the single slot #[code item-content].
  example(content-class="pa4 aliceblue")
    w-accordion.white--bg(:items="items" content-class="pa0")
      template(#item-title="{ item }")
        w-icon(lg :color="item.itemColor") {{ item.icon }}
        .title3.my0.ml2(:class="item.itemColor") {{ item.title }}
      template(#item-content="{ item }")
        w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")
    template(#html).
      &lt;w-accordion :items="items" content-class="pa0"&gt;
        &lt;template #item-title="{ item }"&gt;
          &lt;w-icon lg :color="item.itemColor"&gt;
            {{ '\{\{ item.icon \}\}' }}
          &lt;/w-icon&gt;
          &lt;div class="title3 ml2" :class="item.itemColor"&gt;
            {{ '\{\{ item.title \}\}' }}
          &lt;/div&gt;
        &lt;/template&gt;
        &lt;template #item-content="{ item }") /&gt;
          &lt;w-alert
            class="my0 pb3"
            border-left
            tile
            :color="item.itemColor"
            v-html="item.content" /&gt;
        &lt;/template&gt;
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
    template(#html).
      &lt;w-accordion :items="3"&gt;
        &lt;template #item-title.1&gt;Item title 1&lt;/template&gt;
        &lt;template #item-content.1&gt;Item content 1&lt;/template&gt;

        &lt;template #item-title.2&gt;Item title 2&lt;/template&gt;
        &lt;template #item-content.2&gt;Item content 2&lt;/template&gt;

        &lt;template #item-title.3&gt;Item title 3&lt;/template&gt;
        &lt;template #item-content.3&gt;Item content 3&lt;/template&gt;
      &lt;/w-accordion&gt;

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
    template(#html).
      &lt;w-accordion :items="items"&gt;
        &lt;template #item-title.item1&gt;
          This is the 1st item
          &lt;w-tag class="ml2" color="red" sm outline&gt;HOT&lt;/w-tag&gt;
        &lt;/template&gt;
        &lt;template #item-content.item1&gt;
          &lt;p&gt;This content has a checklist.&lt;/p&gt;
          &lt;div class="title4 my3"&gt;To do&lt;/div&gt;
          &lt;w-list
            checklist
            color="primary"
            :items="[{ label: 'do this' }, { label: 'do that next' }]" /&gt;
        &lt;/template&gt;

        &lt;template #item-title.item2&gt;
          &lt;w-icon class="mr1" md color="amber"&gt;
            mdi mdi-emoticon-excited-outline
          &lt;/w-icon&gt;
          &lt;em&gt;This is the 2nd item&lt;/em&gt;
        &lt;/template&gt;
        &lt;template #item-content.item2="{ item }"&gt;
          &lt;p&gt;
            The full content here is custom and completely distinct and independent from the other items.
          &lt;/p&gt;
          &lt;p&gt;
            You also have access to the item's data if you need:
            &lt;code class="ml1"&gt;{{ '\{\{ item \}\}' }}&lt;/code&gt;
          &lt;/p&gt;
        &lt;/template&gt;

        &lt;template #item-title.item3=""&gt;
          &lt;strong&gt; This is the 3rd item&lt;/strong&gt;
          &lt;w-icon class="ml1" md color="pink"&gt;
            mdi mdi-emoticon-kiss-outline
          &lt;/w-icon&gt;
        &lt;/template&gt;
        &lt;template #item-content.item3&gt;
          &lt;p&gt;Do you want to check the project on Github?&lt;/p&gt;
          &lt;w-button
            class="mt2"
            bg-color="primary"
            route="https://github.com/antoniandre/wave-ui"&gt;
            Github
            &lt;w-icon class="ml2" sm&gt;mdi mdi-open-in-new&lt;/w-icon&gt;
          &lt;/w-button&gt;
        &lt;/template&gt;
      &lt;/w-accordion&gt;
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
    template(#html).
      &lt;div class="title4 mb2"&gt;
        1 custom icon (only expand)
      &lt;/div&gt;
      &lt;w-accordion
        :items="items"
        expand-icon="wi-chevron-down"&gt;
      &lt;/w-accordion&gt;

      &lt;div class="title4 mt8 mb2"&gt;
        2 custom icons (expand &amp; collapse)
      &lt;/div&gt;
      &lt;w-accordion
        :items="items"
        expand-icon="wi-plus"
        collapse-icon="wi-minus"&gt;
      &lt;/w-accordion&gt;

      &lt;div class="title4 mt8 mb2"&gt;
        No icon
      &lt;/div&gt;
      &lt;w-accordion
        :items="items"
        :expand-icon="false"
        title-class="py2"&gt;
      &lt;/w-accordion&gt;

      &lt;div class="title4 mt8 mb2"&gt;
        Icon on the right
      &lt;/div&gt;
      &lt;w-accordion
        :items="items"
        expand-icon-right&gt;
      &lt;/w-accordion&gt;
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
