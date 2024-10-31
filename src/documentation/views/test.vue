<template lang="pug">
.test.ma12.pa12.bd1.bdrs2
  h1.mt0.mb8 Testing playground
  //- w-select.mt3(
    :items="items"
    label="Select an item"
    autocomplete)
  //- p.my12.mb4 multiple
  //- w-select.mt3(
    :items="items"
    label="Select an item"
    autocomplete
    multiple)

  p V-models:
  p {{ accordion1ModelValue }}
  p {{ accordion2ModelValue }}
  p {{ accordion3ModelValue }}
  p {{ accordion4ModelValue }}
  .title2.mt12 Accordion 1
  w-accordion(v-model="accordion1ModelValue")
    w-accordion-item.primary-dark4--bg
      template(#title) item 1
      template(#content) content 1
    w-accordion-item.primary-dark5--bg
      template(#title) item 2
      template(#content) content 2
    w-accordion-item.primary-dark6--bg
      template(#title) Item 3 title. Reactive counter {{ count }}
      template(#content) Item 3 content!

  .title2.mt12 Accordion 2
  w-accordion(
    v-model="accordion2ModelValue"
    :items="accordionItems")

  .title2.mt12 Accordion 3
  w-accordion(
    v-model="accordion3ModelValue"
    :items="accordionItems")
    template(#item-title="{ item, expanded, index }") {{ item.title }}!
    template(#item-title.2="{ item, expanded, index }") {{ item.title }}, yeah!
    template(#item-content="{ item }")
      .primary {{ item.content }}: {{ item.list }}.
    template(#item-content.2="{ item }")
      .success {{ item.content }}.

  .title2.mt12 Accordion 4
  w-accordion(v-model="accordion4ModelValue")
    //- w-accordion-item(:title="Title") Content.
    w-accordion-item
      template(#title="{ index }") Item {{ index }}
      template(#content="{ index }") Some content {{ index }}.
    w-accordion-item
      template(#title="{ index }") Item {{ index }}
      template(#content="{ index }") Some content {{ index }}.
</template>

<script>
export default {
  data: () => ({
    items: [
      { label: 'hey', value: -5 },
      { label: '/', value: -4 },
      { label: '\'', value: -3 },
      { label: '.3', value: -2 },
      { label: '-1', value: -1 },
      { label: '0', value: 0 },
      { label: 'Super Item 1', value: 1, disabled: true },
      { label: 'Another Item 2', value: 2 },
      { label: 'Item 3 is the third', value: 3 },
      { label: 'The fourth Item is item 4', value: 4, disabled: true },
      { label: 'Item 5', value: 5, disabled: true },
      { label: 'Item 6', value: 6, disabled: true },
      { label: 'Item 7', value: 7 },
      { label: 'Item 8', value: 8 },
      { label: 'Item-9', value: 9 }
    ],

    accordionItems: [
      { title: 'item 1', content: 'content 1', list: [1, 2, 3, { label: 'subitem4' }] },
      { title: 'item 2', content: 'content 2', list: [1, 2, 3, 4] }
    ],
    accordion1ModelValue: [true, true, true],
    accordion2ModelValue: [true, true, true],
    accordion3ModelValue: [true, true, true],
    accordion4ModelValue: [true, true, true],
    accordion1Item1: { title: 'item 1', content: 'content 1' },
    count: 0
  }),

  mounted () {
    // Test w-accordion depth reactivity.
    setTimeout(() => {
      this.count++
      this.accordion1ModelValue = [false, false, true]
      this.accordion2ModelValue = [false, false, true]
      this.accordion3ModelValue = [false, false, true]
      this.accordion4ModelValue = [false, false, true]
      this.accordionItems[0].title = 'New item 1 title'
    }, 2000)
    setTimeout(() => {
      this.count++
      this.accordion1Item1.title = 'super nice item 1!'
      this.accordionItems[1].content = 'New item 2 content'
    }, 3000)
    setTimeout(() => {
      this.count++
      this.accordionItems[0].list[3].label = 'shiny new label'
    }, 4000)
  }
}
</script>

<style lang="scss">

</style>
