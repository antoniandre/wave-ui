<template lang="pug">
div
  title-link(h2) Default
  p In this example we can look for a chemical element in the list and select it.
  p.
    One obvious advantage of the Wave UI autocomplete is the fact that you can provide a different
    searchable string than the final label to display.
  p.
    For instance, in this example you can look for elements by their name, like literally "Sodium",
    but you can also type the atomic number or symbol to find it.
  p you can try these interesting matches (for their symbol is not found in their name string):
  .w-flex.gap3
    .text-center
      .element
        .title1.mt7.symbol.code Na
        .number.code 11
      .primary.mt1 Sodium
    .text-center
      .element
        .title1.mt7.symbol.code Mg
        .number.code 12
      .primary.mt1 Magnesium
    .text-center
      .element
        .title1.mt7.symbol.code Cr
        .number.code 24
      .primary.mt1 Chromium

  example(content-class="py12" :blank-codepen="['js']")
    w-autocomplete.mb12(:items="chemicalElement")
    template(#pug).
      w-autocomplete.mb12(:items="chemicalElement")
    template(#html).
      &lt;w-autocomplete :items="chemicalElement" class="mb12"&gt;
      &lt;/w-autocomplete&gt;
    template(#js).
      import { faker } from '@faker-js/faker'

      const app = Vue.createApp({
        data: () => ({
          chemicalElement: faker.definitions.science.chemicalElement.map(element => {
            return {
              value: element.symbol,
              label: element.name,
              searchable: `${element.symbol}, ${element.name}, ${element.atomicNumber}`
            }
          })
        })
      })

      app.use(WaveUI)
      app.mount('#app')

  title-link(h2) Placeholder
  example(content-class="py12" :blank-codepen="['js']")
    w-autocomplete.mb12(:items="chemicalElement" placeholder="select an element")
    template(#pug).
      w-autocomplete.mb12(:items="chemicalElement" placeholder="select an element")
    template(#html).
      &lt;w-autocomplete
        :items="chemicalElement"
        placeholder="select an element"
        class="mb12"&gt;
      &lt;/w-autocomplete&gt;
    template(#js).
      import { faker } from '@faker-js/faker'

      const app = Vue.createApp({
        data: () => ({
          chemicalElement: faker.definitions.science.chemicalElement.map(element => {
            return {
              value: element.symbol,
              label: element.name,
              searchable: `${element.symbol}, ${element.name}, ${element.atomicNumber}`
            }
          })
        })
      })

      app.use(WaveUI)
      app.mount('#app')
</template>

<script>
import { faker } from '@faker-js/faker'

export default {
  data: () => ({
    chemicalElement: faker.definitions.science.chemicalElement.map(element => {
      return {
        value: element.symbol,
        label: element.name,
        searchable: `${element.symbol}, ${element.name}, ${element.atomicNumber}`
      }
    })
  })
}
</script>

<style lang="scss">
.element {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6em;
  height: 5.5em;
  padding-bottom: 8px;
  border-radius: 4px;
  border: 1px solid $border-color;

  .symbol {color: $primary;}
  .number {
    position: absolute;
    top: 4px;
    right: 4px;
  }
}
</style>
