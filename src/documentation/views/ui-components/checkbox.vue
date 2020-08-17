<template lang="pug">
div.ovh
  title-link.mt4(h1 slug="w-checkbox-and-w-checkboxes")
    | #[span.code w-checkbox] &amp; #[span.code w-checkboxes]

  w-card(bg-color="blue-light5")
    p.mb3 What it looks like:
    w-checkboxes(:items="checkboxes1" inline)

    .title4.mt4 States
    .w-flex.wrap
      w-checkbox.mr3.mb1(:value="true" label="Checked")
      w-checkbox.mr3.mb1(:value="false" label="Unchecked")
      w-checkbox.mr3.mb1(:value="true" indeterminate label="Indeterminate")
      w-checkbox.mr3.mb1(:value="true" disabled label="Checked &amp; disabled")
      w-checkbox.mr3.mb1(:value="false" disabled label="Unchecked &amp; disabled")
      w-checkbox.mr3.mb1(:value="true" disabled indeterminate label="Indeterminate &amp; disabled")

  p.mt12.
    There are 2 components: #[span.code w-checkbox] &amp; #[span.code w-checkboxes].
    The later is a group of checkboxes for convenience.

  p.
    In most cases what you need is the #[span.code w-checkboxes] component bellow, but let's start with the
    basic component as it might be useful in single checkboxes and edge cases.

  //- W-checkbox.
  //-------------------------------------------------------
  title-link.title1.mt8(h2 slug="understanding-w-checkbox") Understanding &lt;w-checkbox&gt;
  .w-divider.grey-light5.mt1

  w-alert.alert--info(info icon-outside).
    Unlike the radio buttons, checkboxes don't need the #[code name] prop in addition to the #[code v-model]
    to work together and control with arrow keys since the default HTML behavior does not include control from
    the keyboard arrows (you can navigate with #[kbd tab] and toggle with #[kbd space] or #[kbd enter]).#[br]
    When you use a group of checkboxes via &lt;w-checkboxes&gt;, Wave UI will add the name attributes for you.
  example
    .title4.mb2 Basic use
    w-checkbox Single option
    .title4.mt8.mb2 Using v-model on a single checkbox
    w-flex.align-center
      w-checkbox(v-model="selectedCheckbox1") Single option
      span.ml6
        | v-model:
        code.ml1 {{ selectedCheckbox1 }}
    .title4.mt8.mb2 Using an array of v-model for multiple checkboxes
    w-flex.align-center
      w-checkbox.mr2(v-model="selectedCheckboxes2[0]") Option 1
      w-checkbox.mr2(v-model="selectedCheckboxes2[1]") Option 2
      w-checkbox(v-model="selectedCheckboxes2[2]") Option 3
      span.ml6
        | v-model:
        code.ml1 {{ selectedCheckboxes2 }}
    template(#pug).
      .title4.mb2 Basic use
      w-checkbox Single option
      .title4.mt8.mb2 Using v-model on a single checkbox
      w-flex.align-center
        w-checkbox(v-model="selectedCheckbox1") Single option
        span.ml6
          | v-model:
          code.ml1 {{ '\{\{ selectedCheckbox1 \}\}' }}
      .title4.mt8.mb2 Using an array of v-model for multiple checkboxes
      w-flex.align-center
        w-checkbox.mr2(v-model="selectedCheckboxes2[0]") Option 1
        w-checkbox.mr2(v-model="selectedCheckboxes2[1]") Option 2
        w-checkbox(v-model="selectedCheckboxes2[2]") Option 3
        span.ml6
          | v-model:
          code.ml1 {{ '\{\{ selectedCheckboxes2 \}\}' }}
    template(#js).
      data: () => ({
        selectedCheckbox1: false,
        selectedCheckboxes2: [false, false, false]
      })

  title-link(h2) Custom label in w-checkbox
  p #[code w-checkbox] provides a default slot to customize the content.
  example(content-class="mt3")
    w-checkbox.mr5(name="checkbox4")
      span.pr1 Choice 1 has an icon
      w-icon(md) mdi mdi-star
    w-checkbox(name="checkbox4")
      w-tag(bg-color="green-light5" color="green-dark2")
        | Choice 2 is a tag
        w-icon.ml1 mdi mdi-heart
    template(#pug).
      w-checkbox.mr5(name="checkbox1")
        span.pr1 Choice 1 has an icon
        w-icon(md) mdi mdi-star
      w-checkbox(name="checkbox1")
        w-tag(bg-color="green-light5" color="green-dark2")
          | Choice 2 is a tag
          w-icon.ml1 mdi mdi-heart

  w-alert.alert--tip.mt8(icon-outside icon="mdi mdi-lightbulb-on").
    As seen in this example, the #[span.code w-checkbox] component allows you to have complete freedom
    regarding your checkboxes content, style and layout.#[br]
    But because in most cases you won't need that, the #[span.code w-checkboxes] component will make you go
    much faster.

  //- W-checkboxes.
  //-------------------------------------------------------
  title-link.title1.mt8(h2 slug="understanding-w-checkboxes") Understanding &lt;w-checkboxes&gt;
  .w-divider.grey-light5.mt1

  p.
    The #[code w-checkboxes] component allows a fast and easy rendering of
    multiple checkboxes by passing the items through a prop.#[br]
    It accepts an inline parameter to display the checkboxes inline,
    and allows you to customize the label of each checkbox through slot.

  h3 V-model
  p.
    If a value is set in the choice's data, it will be returned through the v-model when selected.#[br]
    If no value is set, the choice's label will be returned instead.
  example
    .w-flex.align-center
      w-checkboxes(v-model="selectedCheckboxes1" :items="checkboxes1")
      div.title3.ml8
        | Selected choices:
        code.ml1 {{ selectedCheckboxes1 || '[]' }}
    template(#pug).
      .w-flex.align-center
        w-checkboxes(v-model="selectedCheckboxes" :items="checkboxesItems")
        .title3.ml10 Selected choice: {{ "\{\{ selectedCheckboxes || '[]' \}\}" }}
    template(#js).
      data: () => ({
        selectedCheckboxes: [],
        checkboxesItems: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ]
      })

  title-link(h2) Layout
  example
    .title4.mb2 Default column layout
    w-checkboxes(:items="checkboxes1")

    .title4.mt6.mb2 Inline layout
    w-checkboxes(:items="checkboxes1" inline)
    template(#pug).
      .title4.mb2 Default column layout
      w-checkboxes(:items="checkboxesItems")

      .title4.mt6.mb2 Inline layout
      w-checkboxes(:items="checkboxesItems" inline)
    template(#js).
      data: () => ({
        checkboxesItems: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ]
      })

  title-link(h2) Custom label content
  p #[code w-checkboxes] provides a #[code label] slot to customize the label of each checkbox button.
  example
    w-checkboxes(:items="checkboxes3" color="green")
      template(#item="{ item }")
        span.pr2 {{ item.label }}
        w-icon.deep-purple {{ item.icon }}
    template(#pug).
      w-checkboxes(:items="checkboxesItems" color="green")
        template(#item="{ item }")
          span.pr2 {{ '\{\{ item.label \}\}' }}
          w-icon.deep-purple {{ '\{\{ item.icon \}\}' }}
    template(#js).
      data: () => ({
        checkboxesItems: [
          { label: 'Square', icon: 'mdi mdi-square' },
          { label: 'Circle', icon: 'mdi mdi-circle' },
          { label: 'Triangle', icon: 'mdi mdi-triangle' }
        ]
      })

  .w-divider.grey-light5.my12

  //- Other examples.
  //-------------------------------------------------------
  title-link(h2) Round checkboxes
  example(content-class="mt3")
    w-checkboxes(:items="checkboxes1" round inline)
    template(#pug).
      w-checkboxes(:items="checkboxesItems" round inline)
    template(#js).
      data: () => ({
        checkboxesItems: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ]
      })

  title-link(h2) Color
  p By default the #[code w-checkbox] &amp; #[code w-checkboxes] components will use the primary color.
  w-alert.alert--info(info icon-outside).
    One thing that the #[span.code w-checkboxes] component does not do is mixing colors: you can do it with
    #[span.code w-checkbox] like in this example.

  example
    .title4.mb2 Colors using #[span.code w-checkboxes]
    w-checkboxes(v-model="selectedCheckboxes4" :items="checkboxes1" color="purple")

    .title4.mt8.mb2 Colors using #[span.code w-checkbox]
    w-checkbox.mr2(v-model="selectedCheckboxes5[0]" color="teal-light1") Option 1
    w-checkbox(v-model="selectedCheckboxes5[1]" color="teal-light1") Option 2

    .title4.mt8.mb2 Mixing colors using #[span.code w-checkbox]
    w-checkbox.mr2(v-model="selectedCheckboxes6[0]" color="pink-light3") Option 1
    w-checkbox(v-model="selectedCheckboxes6[1]" color="blue-light1") Option 2
    template(#pug).
      .title4.mb2 Colors using w-checkboxes
      w-checkboxes(v-model="selectedCheckboxes1" :items="checkboxes" color="purple")

      .title4.mt8.mb2 Colors using w-checkbox
      w-checkbox.mr2(v-model="selectedCheckboxes2[0]" color="teal-light1") Option 1
      w-checkbox(v-model="selectedCheckboxes2[1]" color="teal-light1") Option 2

      .title4.mt8.mb2 Mixing colors using w-checkbox
      w-checkbox.mr2(v-model="selectedCheckboxes3[0]" color="pink-light3") Option 1
      w-checkbox(v-model="selectedCheckboxes3[1]" color="blue-light1") Option 2
    template(#js).
      data: () => ({
        selectedCheckboxes1: [1, 3],
        selectedCheckboxes2: [true, true],
        selectedCheckboxes3: [true, true],
        checkboxes: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ]
      })
</template>

<script>
export default {
  data: () => ({
    selectedCheckbox1: false,
    selectedCheckboxes1: [],
    selectedCheckboxes2: [false, false, false],
    selectedCheckboxes4: [1, 3],
    selectedCheckboxes5: [true, true],
    selectedCheckboxes6: [true, true],
    checkboxes1: [
      { label: 'Choice 1', value: 1 },
      { label: 'Choice 2', value: 2 },
      { label: 'Choice 3', value: 3 }
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
