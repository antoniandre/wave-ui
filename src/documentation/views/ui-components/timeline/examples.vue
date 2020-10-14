<template lang="pug">
div
  title-link(h2) Basic
  example
    w-timeline(:items="items1")

  title-link(h2) Icons
  example
    w-timeline(:items="items1")

  title-link(h2) Custom item template
  example
    w-timeline(:items="items1")
      template(#item="{ item, index }") My custom item {{ index }}

  title-link(h3) Different custom template per item
  example
    w-timeline(:items="items1")
      template(#item.1) My custom item 1
      template(#item.2) My custom item 2
      template(#item.3) My custom item 3
      template(#item.4) My custom item 4
      template(#item.5) My custom item 5
</template>

<script>
export default {
  data: () => ({
    items1: [
      { title: 'Item 1', content: 'Content 1', color: 'orange', icon: '' },
      { title: 'Item 2', content: 'Content 2', color: 'orange', icon: '' },
      { title: 'Item 3', content: 'Content 3', color: 'orange', icon: '' },
      { title: 'Item 4', content: 'Content 4', color: 'orange', icon: '' },
      { title: 'Item 5', content: 'Content 5', color: 'orange', icon: '' }
    ]
  })
}
</script>
