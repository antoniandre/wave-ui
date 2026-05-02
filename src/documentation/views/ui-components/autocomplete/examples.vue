<template lang="pug">
div
  alert(tip).
    The #[span.code w-autocomplete] component renders its dropdown via #[span.code w-menu],
    so the list is teleported outside the DOM tree and will never be clipped by an
    #[span.code overflow: hidden] parent.

  title-link(h2) Default
  p.
    The most basic use. Provide an array of items — each item must have at least a
    #[code label] property. The user can type to filter the list and click (or press
    #[kbd Enter]) to select an option.
  p.
    One great advantage of the Wave UI #[strong.code w-autocomplete] is the fact that
    you can supply a separate #[code searchable] string per item that is different
    from the displayed label. This lets users search by symbol, code, or other invisible
    metadata.
  p.
    For instance, in this example you can look for a chemical element by its name,
    like literally "Sodium", but you can also type its atomic number or symbol to find it.
  p you can try these interesting matches (for their symbol is not found in their name string):
  .w-flex.gap3
    .text-center.bdrs2.bd1.pa2(style="width: 110px")
      .element
        .title1.mt4.symbol.code Na
        .number.code 11
      .primary.mt2 Sodium
    .text-center.bdrs2.bd1.pa2(style="width: 110px")
      .element
        .title1.mt4.symbol.code Mg
        .number.code 12
      .primary.mt2 Magnesium
    .text-center.bdrs2.bd1.pa2(style="width: 110px")
      .element
        .title1.mt4.symbol.code Cr
        .number.code 24
      .primary.mt2 Chromium

  example(content-class="py12" :blank-codepen="['js']")
    w-autocomplete.mb12(:items="chemicalElements")
    template(#pug).
      w-autocomplete(:items="items")
    template(#html).
      &lt;w-autocomplete :items="items"&gt;&lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'H',  label: 'Hydrogen',  searchable: 'H, Hydrogen, 1' },
          { value: 'He', label: 'Helium',    searchable: 'He, Helium, 2' },
          { value: 'Li', label: 'Lithium',   searchable: 'Li, Lithium, 3' },
          { value: 'Na', label: 'Sodium',    searchable: 'Na, Sodium, 11' },
          { value: 'Mg', label: 'Magnesium', searchable: 'Mg, Magnesium, 12' },
        ]
      })

  title-link(h2) Label and placeholder
  p.
    The #[span.code label] prop adds a floating label inside the field (default position).
    The #[span.code placeholder] prop sets faint helper text visible when the field is empty
    and the label has already floated up.
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Country")
    w-autocomplete.mb4(:items="items1" placeholder="Pick a country…")
    w-autocomplete.mb4(:items="items1" label="Country" placeholder="Pick a country…")
    template(#pug).
      w-autocomplete.mb4(:items="items" label="Country")
      w-autocomplete.mb4(:items="items" placeholder="Pick a country…")
      w-autocomplete.mb4(:items="items" label="Country" placeholder="Pick a country…")
    template(#html).
      &lt;w-autocomplete class="mb4" :items="items" label="Country"&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" placeholder="Pick a country…"&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Country" placeholder="Pick a country…"&gt;&lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' },
          { value: 'es', label: 'Spain' },
          { value: 'pt', label: 'Portugal' }
        ]
      })

  title-link(h2) Label position
  p.
    Use #[span.code label-position] to place the label #[span.code inside] (default, floating),
    #[span.code left], or #[span.code right].
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Inside (default)" label-position="inside")
    w-autocomplete.mb4(:items="items1" label="Left" label-position="left")
    w-autocomplete.mb4(:items="items1" label="Right" label-position="right")
    template(#pug).
      w-autocomplete.mb4(:items="items" label="Inside (default)" label-position="inside")
      w-autocomplete.mb4(:items="items" label="Left" label-position="left")
      w-autocomplete.mb4(:items="items" label="Right" label-position="right")
    template(#html).
      &lt;w-autocomplete class="mb4" :items="items" label="Inside (default)" label-position="inside"&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Left" label-position="left"&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Right" label-position="right"&gt;&lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' }
        ]
      })

  title-link(h2) Outline, round &amp; shadow
  p.
    The same styling props available on #[span.code w-input] and #[span.code w-select] are
    supported here.
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Outline" outline)
    w-autocomplete.mb4(:items="items1" label="Round" round)
    w-autocomplete.mb4(:items="items1" label="Shadow" shadow)
    w-autocomplete.mb4(:items="items1" label="Tile" tile)
    template(#pug).
      w-autocomplete.mb4(:items="items" label="Outline" outline)
      w-autocomplete.mb4(:items="items" label="Round" round)
      w-autocomplete.mb4(:items="items" label="Shadow" shadow)
      w-autocomplete.mb4(:items="items" label="Tile" tile)
    template(#html).
      &lt;w-autocomplete class="mb4" :items="items" label="Outline" outline&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Round" round&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Shadow" shadow&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Tile" tile&gt;&lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' }
        ]
      })

  title-link(h2) Colors
  p.
    Use #[span.code color], #[span.code bg-color], and #[span.code label-color] to theme
    the field. All Wave UI color names are accepted.
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Success color" color="success")
    w-autocomplete.mb4(:items="items1" label="Warning + bg" color="warning" bg-color="yellow-light5")
    w-autocomplete.mb4(:items="items1" label="Pink label" label-color="pink")
    template(#pug).
      w-autocomplete.mb4(:items="items" label="Success color" color="success")
      w-autocomplete.mb4(:items="items" label="Warning + bg" color="warning" bg-color="yellow-light5")
      w-autocomplete.mb4(:items="items" label="Pink label" label-color="pink")
    template(#html).
      &lt;w-autocomplete class="mb4" :items="items" label="Success color" color="success"&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Warning + bg" color="warning" bg-color="yellow-light5"&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Pink label" label-color="pink"&gt;&lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' }
        ]
      })

  title-link(h2) Sizes
  p Use the size props #[span.code xs], #[span.code sm], #[span.code md] (default), #[span.code lg], #[span.code xl].
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Extra small" xs)
    w-autocomplete.mb4(:items="items1" label="Small" sm)
    w-autocomplete.mb4(:items="items1" label="Medium (default)")
    w-autocomplete.mb4(:items="items1" label="Large" lg)
    w-autocomplete.mb4(:items="items1" label="Extra large" xl)
    template(#pug).
      w-autocomplete.mb4(:items="items" label="Extra small" xs)
      w-autocomplete.mb4(:items="items" label="Small" sm)
      w-autocomplete.mb4(:items="items" label="Medium (default)")
      w-autocomplete.mb4(:items="items" label="Large" lg)
      w-autocomplete.mb4(:items="items" label="Extra large" xl)
    template(#html).
      &lt;w-autocomplete class="mb4" :items="items" label="Extra small" xs&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Small" sm&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Medium (default)"&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Large" lg&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Extra large" xl&gt;&lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' }
        ]
      })

  title-link(h2) Icons
  p.
    Use #[span.code inner-icon-left] and/or #[span.code inner-icon-right] to add icons inside
    the field. Click events on each icon are exposed via #[span.code @click:inner-icon-left] and
    #[span.code @click:inner-icon-right].
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Search" inner-icon-left="wi-search")
    w-autocomplete.mb4(:items="items1" label="With both icons" inner-icon-left="wi-search" inner-icon-right="wi-cross" @click:inner-icon-right="iconRightClick")
    template(#pug).
      w-autocomplete.mb4(:items="items" label="Search" inner-icon-left="wi-search")
      w-autocomplete.mb4(
        :items="items"
        label="With both icons"
        inner-icon-left="wi-search"
        inner-icon-right="wi-cross"
        @click:inner-icon-right="onClear")
    template(#html).
      &lt;w-autocomplete class="mb4" :items="items" label="Search" inner-icon-left="wi-search"&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete
        class="mb4"
        :items="items"
        label="With both icons"
        inner-icon-left="wi-search"
        inner-icon-right="wi-cross"
        @click:inner-icon-right="onClear"&gt;
      &lt;/w-autocomplete&gt;
    template(#js).
      methods: {
        onClear () { /* clear handler */ }
      }

  title-link(h2) Multiple selection
  p.
    When #[span.code multiple] is set, the user can select several items. Each selection is
    shown as a removable chip. Pressing #[kbd Backspace] on an empty input removes the last chip.
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Countries" multiple v-model="multipleVal")
    .mt2 Selected: {{ multipleVal || '—' }}
    template(#pug).
      w-autocomplete(:items="items" label="Countries" multiple v-model="value")
      .mt2 Selected: {{ '\{\{ value \}\}' }}
    template(#html).
      &lt;w-autocomplete :items="items" label="Countries" multiple v-model="value"&gt;&lt;/w-autocomplete&gt;
      &lt;div class="mt2"&gt;Selected: {{ '\{\{ value \}\}' }}&lt;/div&gt;
    template(#js).
      data: () => ({
        value: null,
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' },
          { value: 'es', label: 'Spain' },
          { value: 'pt', label: 'Portugal' }
        ]
      })

  title-link(h2) v-model
  p.
    Use #[span.code v-model] to read and write the current selection. Single selections emit a
    scalar value; #[span.code multiple] selections emit an array.
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Country" v-model="singleVal")
    .mt2 v-model value: {{ singleVal || '—' }}
    template(#pug).
      w-autocomplete(:items="items" label="Country" v-model="value")
      .mt2 v-model value: {{ '\{\{ value \}\}' }}
    template(#html).
      &lt;w-autocomplete :items="items" label="Country" v-model="value"&gt;&lt;/w-autocomplete&gt;
      &lt;div class="mt2"&gt;v-model value: {{ '\{\{ value \}\}' }}&lt;/div&gt;
    template(#js).
      data: () => ({
        value: null,
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' }
        ]
      })

  title-link(h2) Disabled &amp; readonly
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Disabled" disabled v-model="singleVal")
    w-autocomplete.mb4(:items="items1" label="Readonly" readonly v-model="singleVal")
    template(#pug).
      w-autocomplete.mb4(:items="items" label="Disabled" disabled v-model="value")
      w-autocomplete.mb4(:items="items" label="Readonly" readonly v-model="value")
    template(#html).
      &lt;w-autocomplete class="mb4" :items="items" label="Disabled" disabled v-model="value"&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Readonly" readonly v-model="value"&gt;&lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        value: 'fr',
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' }
        ]
      })

  title-link(h2) Open on keydown
  p.
    By default the dropdown opens immediately on focus. Setting #[span.code open-on-keydown]
    delays the opening until the user starts typing.
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Open on keydown" open-on-keydown)
    template(#pug).
      w-autocomplete(:items="items" label="Open on keydown" open-on-keydown)
    template(#html).
      &lt;w-autocomplete :items="items" label="Open on keydown" open-on-keydown&gt;&lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' }
        ]
      })

  title-link(h2) No-match message
  p.
    Customize the message shown when no item matches the search keyword with the
    #[span.code no-match] prop or the #[span.code no-match] slot.
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="Prop message" no-match="Nothing found.")
    w-autocomplete.mb4(:items="items1" label="Slot message")
      template(#no-match)
        .orange.pa1 🔍 No results — try a different search!
    template(#pug).
      w-autocomplete.mb4(:items="items" label="Prop message" no-match="Nothing found.")
      w-autocomplete.mb4(:items="items" label="Slot message")
        template(#no-match)
          .orange.pa1 🔍 No results — try a different search!
    template(#html).
      &lt;w-autocomplete class="mb4" :items="items" label="Prop message" no-match="Nothing found."&gt;&lt;/w-autocomplete&gt;
      &lt;w-autocomplete class="mb4" :items="items" label="Slot message"&gt;
        &lt;template #no-match&gt;
          &lt;div class="orange pa1"&gt;🔍 No results — try a different search!&lt;/div&gt;
        &lt;/template&gt;
      &lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' }
        ]
      })

  title-link(h2) Custom item slot
  p Use the #[span.code item] slot to fully customize each dropdown entry.
  example(content-class="py12")
    w-autocomplete.mb4(:items="colorItems" label="Color")
      template(#item="{ item }")
        w-icon.mr2(:style="{ color: item.hex }") wi-check-circle
        | {{ item.label }}
    template(#pug).
      w-autocomplete(:items="items" label="Color")
        template(#item="{ item }")
          w-icon.mr2(:style="{ color: item.hex }") wi-check-circle
          | {{ '\{\{ item.label \}\}' }}
    template(#html).
      &lt;w-autocomplete :items="items" label="Color"&gt;
        &lt;template #item="{ item }"&gt;
          &lt;w-icon class="mr2" :style="{ color: item.hex }"&gt;wi-check-circle&lt;/w-icon&gt;
          {{ '\{\{ item.label \}\}' }}
        &lt;/template&gt;
      &lt;/w-autocomplete&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'red',   label: 'Red',   hex: '#f44336' },
          { value: 'green', label: 'Green', hex: '#4caf50' },
          { value: 'blue',  label: 'Blue',  hex: '#2196f3' }
        ]
      })

  title-link(h2) Extra item slot
  p.
    Append a persistent extra entry at the bottom of the list with the #[span.code extra-item] slot.
    This is useful for an "Add new…" or "Create…" action.
  example(content-class="py12")
    w-autocomplete.mb4(:items="items1" label="With extra item" @extra-item-select="onExtraItem")
      template(#extra-item)
        w-icon.mr2 wi-plus
        | Add new country…
    template(#pug).
      w-autocomplete(:items="items" label="With extra item" @extra-item-select="onExtraItem")
        template(#extra-item)
          w-icon.mr2 wi-plus
          | Add new country…
    template(#html).
      &lt;w-autocomplete :items="items" label="With extra item" @extra-item-select="onExtraItem"&gt;
        &lt;template #extra-item&gt;
          &lt;w-icon class="mr2"&gt;wi-plus&lt;/w-icon&gt;
          Add new country…
        &lt;/template&gt;
      &lt;/w-autocomplete&gt;
    template(#js).
      methods: {
        onExtraItem () { /* open a dialog or push to the list */ }
      }

  title-link(h2) Form validation
  p.
    When used inside a #[span.code w-form], the #[span.code validators] prop accepts an array of
    functions. Each function receives the current value and must return #[span.code true] when
    valid or an error string otherwise.
  example(content-class="py12")
    w-form(@submit.prevent="submitted = true")
      w-autocomplete.mb4(
        :items="items1"
        label="Required country"
        :validators="[v => !!v || 'Please select a country.']")
      w-button.mt4(type="submit" bg-color="primary") Submit
    template(#pug).
      w-form(@submit.prevent="onSubmit")
        w-autocomplete.mb4(
          :items="items"
          label="Required country"
          :validators="[v => !!v || 'Please select a country.']")
        w-button.mt4(type="submit" bg-color="primary") Submit
    template(#html).
      &lt;w-form @submit.prevent="onSubmit"&gt;
        &lt;w-autocomplete
          class="mb4"
          :items="items"
          label="Required country"
          :validators="[v =&gt; !!v || 'Please select a country.']"&gt;
        &lt;/w-autocomplete&gt;
        &lt;w-button class="mt4" type="submit" bg-color="primary"&gt;Submit&lt;/w-button&gt;
      &lt;/w-form&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' }
        ]
      }),
      methods: {
        onSubmit () { /* handle form */ }
      }

  title-link(h2) Inside a hidden-overflow container
  p.
    Because the dropdown is rendered via #[span.code w-menu], it escapes any
    #[span.code overflow: hidden] parent. The example below places the autocomplete inside a
    short, clipped card — the dropdown still appears in full.
  example
    .overflow-hidden-demo
      w-card(content-class="pa4" style="overflow:hidden;max-height:80px")
        w-autocomplete(:items="items1" label="Country (clipped parent)")
    template(#pug).
      w-card(content-class="pa4" style="overflow:hidden;max-height:80px")
        w-autocomplete(:items="items" label="Country (clipped parent)")
    template(#html).
      &lt;w-card content-class="pa4" style="overflow:hidden;max-height:80px"&gt;
        &lt;w-autocomplete :items="items" label="Country (clipped parent)"&gt;&lt;/w-autocomplete&gt;
      &lt;/w-card&gt;
    template(#js).
      data: () => ({
        items: [
          { value: 'fr', label: 'France' },
          { value: 'de', label: 'Germany' },
          { value: 'it', label: 'Italy' },
          { value: 'es', label: 'Spain' }
        ]
      })
</template>

<script>
import { faker } from '@faker-js/faker'

export default {
  data: () => ({
    singleVal: null,
    multipleVal: null,

    chemicalElements: faker.definitions.science.chemical_element.map(element => ({
      value: element.symbol,
      label: element.name,
      searchable: `${element.symbol}, ${element.name}, ${element.atomicNumber}`
    })),

    items1: [
      { value: 'fr', label: 'France' },
      { value: 'de', label: 'Germany' },
      { value: 'it', label: 'Italy' },
      { value: 'es', label: 'Spain' },
      { value: 'pt', label: 'Portugal' },
      { value: 'nl', label: 'Netherlands' },
      { value: 'be', label: 'Belgium' },
      { value: 'ch', label: 'Switzerland' },
      { value: 'at', label: 'Austria' },
      { value: 'pl', label: 'Poland' }
    ],

    colorItems: [
      { value: 'red',   label: 'Red',   hex: '#f44336' },
      { value: 'green', label: 'Green', hex: '#4caf50' },
      { value: 'blue',  label: 'Blue',  hex: '#2196f3' },
      { value: 'orange', label: 'Orange', hex: '#ff9800' },
      { value: 'purple', label: 'Purple', hex: '#9c27b0' }
    ]
  }),

  methods: {
    iconRightClick () {},
    onExtraItem () {}
  }
}
</script>
