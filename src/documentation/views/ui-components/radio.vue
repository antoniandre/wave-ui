<template lang="pug">
div
  title-link.mt4(h1 slug="w-radio-and-w-radios")
    | #[span.code w-radio] &amp; #[span.code w-radios]

  title-link(h2 slug="multiple-radio-buttons")
    | Multiple radio buttons using the #[code w-radios] tag
  p.
    The #[code w-radios] component allows a fast and easy rendering of
    multiple radio buttons by passing the items through a prop.#[br]
    It accepts an inline parameter to display the radio buttons inline,
    and allows you to customize the label of each radio button through slot.

  h3 States
  .w-flex.wrap
    w-radio.mr3.mb1(:value="true" label="Checked")
    w-radio.mr3.mb1(:value="false" label="Unchecked")
    w-radio.mr3.mb1(:value="true" disabled label="Checked &amp; disabled")
    w-radio.mr3.mb1(:value="false" disabled label="Unchecked &amp; disabled")

  h3 V-model
  p.
    If a value is set in the choice's data, it will be returned through the v-model when selected.#[br]
    If no value is set, the choice's label will be returned instead.
  .w-flex
    w-radios(v-model="selectedRadio1" :items="radios1")
    div.title-3.ml8 Selected choice: #[code {{ selectedRadio1 || 'null' }}]


  h3 Default column layout
  w-radios(:items="radios2")

  h3 Inline layout
  w-radios(:items="radios2" inline)

  h3 Color
  p.
    By default the #[code w-radios] &amp; #[code w-radio] components will
    use the primary color.
  w-radios(:items="radios2" color="purple")

  h3 Custom label content
  p.
    #[code w-radios] provides a #[code label] slot to customize the label of each radio
    button.
  w-radios(:items="radios3" color="green")
    template(v-slot:item="{ item }")
      span.pr2 {{ item.label }}
      w-icon.deep-purple {{ item.icon }}

  w-divider.ma10.ml0

  title-link(h2) Individual radio buttons
  p.
    It is possible to use the #[code w-radio] component to render a single radio button
    at once.#[br]
    A set of radio buttons will only work together if they have the same v-model,
    or the same #[code name] attribute (standard HTML).

  w-radio.mr2(label="Choice 1" name="radios2" color="success")
  w-radio.mr2(label="Choice 2" name="radios2" color="warning")
  w-radio(label="Choice 3" name="radios2" color="error")

  h3 Custom label content
  p.
    #[code w-radio] provides a default slot to customize the content.
  w-radio.mr2(name="radios2" color="success")
    span.pr2 Choice 1
    w-icon.primary wi-star


</template>

<script>
export default {
  data: () => ({
    selectedRadio1: null,
    radios1: [
      { label: 'Choice 1', value: 1 },
      { label: 'Choice 2', value: 2 },
      { label: 'Choice 3', value: 3 },
    ],
    radios2: [
      { label: 'Choice 1' },
      { label: 'Choice 2' },
      { label: 'Choice 3' },
      { label: 'Choice 4' }
    ],
    radios3: [
      { label: 'Square', icon: 'mdi mdi-square' },
      { label: 'Circle', icon: 'mdi mdi-circle' },
      { label: 'Triangle', icon: 'mdi mdi-triangle' }
    ]
  })
}
</script>
