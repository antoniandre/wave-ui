<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-checkbox] &amp; #[span.code w-checkboxes]

  h2 Multiple checkboxes using the #[code w-checkboxes] tag
  p.
    The #[code w-checkboxes] component allows a fast and easy rendering of
    multiple checkboxes by passing the items through a prop.#[br]
    It accepts an inline parameter to display the checkboxes inline,
    and allows you to customize the label of each checkbox through slot.

  h3 States
  .w-flex.wrap
    w-checkbox.mr-3.mb-1(:value="true" label="Checked")
    w-checkbox.mr-3.mb-1(:value="false" label="Unchecked")
    w-checkbox.mr-3.mb-1(:value="true" indeterminate label="Checked")
    w-checkbox.mr-3.mb-1(:value="true" disabled label="Checked &amp; disabled")
    w-checkbox.mr-3.mb-1(:value="false" disabled label="Unchecked &amp; disabled")

  h3 V-model
  p.
    If a value is set in the choice's data, it will be returned through the v-model when selected.#[br]
    If no value is set, the choice's label will be returned instead.
  .w-flex
    w-checkboxes(v-model="selectedCheckbox1" :items="checkboxes1")
    div.subtitle.ml-8
      | Selected choices:
      code {{ selectedCheckbox1 || '[]' }}

  h3 Default column layout
  w-checkboxes(:items="checkboxes2")

  h3 Inline layout
  w-checkboxes(:items="checkboxes2" inline)

  h3 Round
  w-checkboxes(:items="checkboxes2" round inline)

  h3 Color
  p.
    By default the #[code w-checkboxes] &amp; #[code w-checkbox] components will
    use the primary color.
  w-checkboxes(:items="checkboxes2" color="purple")

  h3 Custom label content
  p.
    #[code w-checkboxes] provides a #[code label] slot to customize the label of each checkbox
    button.
  w-checkboxes(:items="checkboxes3" color="green")
    template(v-slot:label="{ item }")
      span.pr-2 {{ item.label }}
      w-icon.deep-purple {{ item.icon }}

  w-divider.ma-10.ml-0

  h2 Individual checkbox
  p.
    It is possible to use the #[code w-checkbox] component to render a single checkbox
    at once.#[br]
    A set of checkboxes will only work together if they have the same v-model,
    or the same #[code name] attribute (standard HTML).

  w-checkbox.mr-2(label="Choice 1" name="checkboxes2" color="success")
  w-checkbox.mr-2(label="Choice 2" name="checkboxes2" color="warning")
  w-checkbox(label="Choice 3" name="checkboxes2" color="error")

  h3 Custom label content
  p.
    #[code w-checkbox] provides a default slot to customize the content.
  w-checkbox.mr-2(name="checkboxes2" color="success")
    span.pr-2 Choice 1
    w-icon.primary wi-star


</template>

<script>
export default {
  data: () => ({
    selectedCheckbox1: null,
    checkboxes1: [
      { label: 'Choice 1', value: 1 },
      { label: 'Choice 2', value: 2 },
      { label: 'Choice 3', value: 3 },
    ],
    checkboxes2: [
      { label: 'Choice 1' },
      { label: 'Choice 2' },
      { label: 'Choice 3' },
      { label: 'Choice 4' }
    ],
    checkboxes3: [
      { label: 'Square', icon: 'mdi mdi-square' },
      { label: 'Circle', icon: 'mdi mdi-circle' },
      { label: 'Triangle', icon: 'mdi mdi-triangle' }
    ]
  })
}
</script>
