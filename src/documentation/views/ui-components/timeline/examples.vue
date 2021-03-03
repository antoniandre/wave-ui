<template lang="pug">
div
  title-link(h2) Basic
  example
    w-timeline(:items="items1")
    //- template(#pug).
      w-timeline(:items="items")
    template(#html).
      &lt;w-timeline :items="items"&gt;&lt;/w-timeline&gt;
    template(#js).
      data: () => ({
        items: [
          { title: 'Item 1', content: 'Content 1' },
          { title: 'Item 2', content: 'Content 2' },
          { title: 'Item 3', content: 'Content 3' },
          { title: 'Item 4', content: 'Content 4' }
        ]
      })

  title-link(h2) Color
  p.
    When setting a color through the #[code color] prop, the color will be applied to both the item
    bullet or icon, and the item title, on each item.
  example
    w-timeline(:items="items1" color="green")
    //- template(#pug).
      w-timeline(:items="items" color="green")
    template(#html).
      &lt;w-timeline :items="items" color="green"&gt;&lt;/w-timeline&gt;
    template(#js).
      data: () => ({
        items: [
          { title: 'Item 1', content: 'Content 1' },
          { title: 'Item 2', content: 'Content 2' },
          { title: 'Item 3', content: 'Content 3' },
          { title: 'Item 4', content: 'Content 4' }
        ]
      })

  title-link(h3) Different color per item
  p.
    It is possible to set a different color per item (and override the global #[code color] prop)
    by providing a #[code color] attribute in the item object.#[br]
    The name of this attribute can be changed via the #[code item-color-key] prop.
  example
    w-timeline(:items="items2")
    //- template(#pug).
      w-timeline(:items="items")
    template(#html).
      &lt;w-timeline :items="items"&gt;&lt;/w-timeline&gt;
    template(#js).
      data: () => ({
        items: [
          { title: 'Item 1', content: 'Content 1', color: 'pink' },
          { title: 'Item 2', content: 'Content 2', color: 'error' },
          { title: 'Item 3', content: 'Content 3', color: 'amber' },
          { title: 'Item 4', content: 'Content 4', color: 'success' }
        ]
      })

  title-link(h2) Icons
  p The icon provided through the #[code icon] prop will apply to all the items.
  example
    w-timeline(:items="items1" icon="wi-check" color="green")
    //- template(#pug).
      w-timeline(:items="items" icon="wi-check" color="green")
    template(#html).
      &lt;w-timeline :items="items" icon="wi-check" color="green"&gt;&lt;/w-timeline&gt;
    template(#js).
      data: () => ({
        items: [
          { title: 'Item 1', content: 'Content 1' },
          { title: 'Item 2', content: 'Content 2' },
          { title: 'Item 3', content: 'Content 3' },
          { title: 'Item 4', content: 'Content 4' }
        ]
      })

  title-link(h3) Different icon per item
  p.
    It is possible to set a different icon per item (and override the global #[code icon] prop)
    by providing an #[code icon] attribute in the item object.#[br]
    The name of this attribute can be changed via the #[code item-icon-key] prop.
  example
    w-timeline(:items="items3" color="primary")
    //- template(#pug).
      w-timeline(:items="items" color="primary")
    template(#html).
      &lt;w-timeline :items="items" color="primary"&gt;&lt;/w-timeline&gt;
    template(#js).
      data: () => ({
        items: [
          { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },
          { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },
          { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },
          { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' }
        ]
      })

  title-link(h2) Custom item template
  example
    w-timeline(:items="items1")
      template(#item="{ item, index }")
        w-icon wi-check
        span.mx2 This is the custom item
        w-tag.white.grey-light2--bg {{ index }}
    //- template(#pug).
      w-timeline(:items="items")
        template(#item="{ item, index }")
          w-icon wi-check
          span.mx2 This is the custom item
          w-tag.white.grey-light2--bg {{ '\{\{ index \}\}' }}
    template(#html).
      &lt;w-timeline :items="items"&gt;
        &lt;template #item="{ item, index }"&gt;
          &lt;w-icon&gt;wi-check&lt;/w-icon&gt;

          &lt;span class="mx2"&gt;
            This is the custom item
          &lt;/span&gt;

          &lt;w-tag class="white grey-light2--bg"&gt;
            {{ '\{\{ index \}\}' }}
          &lt;/w-tag&gt;
        &lt;/template&gt;
      &lt;/w-timeline&gt;
    template(#js).
      data: () => ({
        items: [
          { title: 'Item 1', content: 'Content 1' },
          { title: 'Item 2', content: 'Content 2' },
          { title: 'Item 3', content: 'Content 3' },
          { title: 'Item 4', content: 'Content 4' }
        ]
      })

  title-link(h3) Different custom template per item
  example
    w-timeline(:items="items1")
      template(#item.3)
        span.pink.mr1 My favorite item: 3
        w-icon.pink mdi mdi-heart
    //- template(#pug).
      w-timeline(:items="items")
        template(#item.3="")
          .pink My favorite item: 3
          w-icon.pink mdi mdi-heart
    template(#html).
      &lt;w-timeline :items="items"&gt;
        &lt;template #item.3&gt;
          &lt;div class="pink"&gt;
            My favorite item: 3
          &lt;/div&gt;

          &lt;w-icon class="pink"&gt;
            mdi mdi-heart
          &lt;/w-icon&gt;
        &lt;/template&gt;
      &lt;/w-timeline&gt;
    template(#js).
      data: () => ({
        items: [
          { title: 'Item 1', content: 'Content 1' },
          { title: 'Item 2', content: 'Content 2' },
          { title: 'Item 3', content: 'Content 3' },
          { title: 'Item 4', content: 'Content 4' }
        ]
      })
</template>

<script>
export default {
  data: () => ({
    items1: [
      { title: 'Item 1', content: 'Content 1' },
      { title: 'Item 2', content: 'Content 2' },
      { title: 'Item 3', content: 'Content 3' },
      { title: 'Item 4', content: 'Content 4' }
    ],
    items2: [
      { title: 'Item 1', content: 'Content 1', color: 'pink' },
      { title: 'Item 2', content: 'Content 2', color: 'error' },
      { title: 'Item 3', content: 'Content 3', color: 'amber' },
      { title: 'Item 4', content: 'Content 4', color: 'success' }
    ],
    items3: [
      { title: 'Item 1', content: 'Content 1', icon: 'wi-check-circle' },
      { title: 'Item 2', content: 'Content 2', icon: 'wi-cross-circle' },
      { title: 'Item 3', content: 'Content 3', icon: 'wi-warning-circle' },
      { title: 'Item 4', content: 'Content 4', icon: 'wi-info-circle' }
    ]
  })
}
</script>
