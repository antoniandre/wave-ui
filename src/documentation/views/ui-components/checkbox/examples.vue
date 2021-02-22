<template lang="pug">
div
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
  title-link.title1.mt12(h2 slug="w-checkbox") &lt;w-checkbox&gt;
  .w-divider

  example
    .title4.mb2 Basic use
    w-checkbox Single option
    .title4.mt8.mb2 Using v-model on a single checkbox
    w-flex.align-center
      w-checkbox(v-model="selection1") Single option
      span.ml6
        | v-model:
        code.ml1 {{ selection1 }}
    .title4.mt8.mb2 Using an array of v-model for multiple checkboxes
    w-flex.align-center
      w-checkbox.mr2(v-model="selection2[0]") Option 1
      w-checkbox.mr2(v-model="selection2[1]") Option 2
      w-checkbox(v-model="selection2[2]") Option 3
      span.ml6
        | v-model:
        code.ml1 {{ selection2 }}
    template(#html).
      &lt;div class="title4 mb2"&gt;Basic use&lt;/div&gt;
      &lt;w-checkbox&gt;Single option&lt;/w-checkbox&gt;

      &lt;div class="title4 mt8 mb2"&gt;Using v-model on a single checkbox&lt;/div&gt;
      &lt;w-flex class="align-center"&gt;
        &lt;w-checkbox v-model="selection1"&gt;Single option&lt;/w-checkbox&gt;

        &lt;span class="ml6"&gt;
          v-model:
          &lt;code class="ml1"&gt;{{ '\{\{ selection1 \}\}' }}&lt;/code&gt;
        &lt;/span&gt;
      &lt;/w-flex&gt;

      &lt;div class="title4 mt8 mb2"&gt;Using an array of v-model for multiple checkboxes&lt;/div&gt;
      &lt;w-flex class="align-center"&gt;
        &lt;w-checkbox class="mr2" v-model="selection2[0]"&gt;Option 1&lt;/w-checkbox&gt;
        &lt;w-checkbox class="mr2" v-model="selection2[1]"&gt;Option 2&lt;/w-checkbox&gt;
        &lt;w-checkbox v-model="selection2[2]"&gt;Option 3&lt;/w-checkbox&gt;

        &lt;span class="ml6"&gt;
          v-model:
          &lt;code class="ml1"&gt;{{ '\{\{ selection2 \}\}' }}&lt;/code&gt;
        &lt;/span&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        selection1: false,
        selection2: [false, false, false]
      })

  alert(info).
    Unlike the radio buttons, checkboxes don't need the #[code name] prop in addition to the #[code v-model]
    to work together and control with arrow keys since the default HTML behavior does not include control from
    the keyboard arrows (you can navigate with #[kbd tab] and toggle with #[kbd space] or #[kbd enter]).#[br]
    When you use a group of checkboxes via &lt;w-checkboxes&gt;, Wave UI will add the name attributes for you.

  alert(tip)
    strong.title5 Form validation
    p.
      When a validation is needed on checkboxes, each individual checkbox (#[span.code w-checkbox]) has a
      separate validation message.#[br]
      If you want only one validation for a group of checkboxes you must use the #[span.code w-checkboxes] component.

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
    template(#html).
      &lt;w-checkbox class="mr5" name="checkbox1"&gt;
        &lt;span class="pr1"&gt;Choice 1 has an icon&lt;/span&gt;
        &lt;w-icon md&gt;mdi mdi-star&lt;/w-icon&gt;
      &lt;/w-checkbox&gt;

      &lt;w-checkbox name="checkbox1"&gt;
        &lt;w-tag bg-color="green-light5" color="green-dark2"&gt;
          Choice 2 is a tag
          &lt;w-icon class="ml1"&gt;mdi mdi-heart&lt;/w-icon&gt;
        &lt;/w-tag&gt;
      &lt;/w-checkbox&gt;

  alert.mt8(tip).
    As seen in this example, the #[span.code w-checkbox] component allows you to have complete freedom
    regarding your checkboxes content, style and layout.#[br]
    But because in most cases you won't need that, the #[span.code w-checkboxes] component will make you
    go much faster.

  //- W-checkboxes.
  //-------------------------------------------------------
  title-link.title1.mt12(h2 slug="w-checkboxes") &lt;w-checkboxes&gt;
  .w-divider

  p.my5.
    The #[span.code w-checkboxes] component allows a fast and easy rendering of
    multiple checkboxes by passing the items through a prop.#[br]
    It accepts an inline parameter to display the checkboxes inline,
    and allows you to customize the label of each checkbox through slot.

  title-link.title2.primary(h3) V-model
  alert(info).
    If a value is set in the choice's data, it will be returned through the v-model when selected.#[br]
    If no value is set, the choice's label will be returned instead.
  example
    .w-flex.align-center
      w-checkboxes(v-model="selection1b" :items="checkboxes1")
      div.title3.ml8
        | v-model:
        code.ml1 {{ selection1b || '[]' }}
    template(#html).
      &lt;div class="w-flex align-center"&gt;
        &lt;w-checkboxes v-model="selection" :items="checkboxes"&gt;&lt;/w-checkboxes&gt;
        &lt;div class="title3 ml8"&gt;v-model: {{ "\{\{ selection || '[]' \}\}" }}&lt;/div&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        selection: [],
        checkboxes: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ]
      })

  p The v-model can also be preset, or updated externally.
  example
    .w-flex.align-center
      div
        w-checkboxes(v-model="selection3" :items="checkboxes1")
        w-button.mt2(@click="selection3 = selection3.length ? [] : [2]")
          | Toggle checkbox 2
      div.title3.ml8
        | v-model:
        code.ml1 {{ selection3 || '[]' }}
    template(#html).
      &lt;div class="w-flex align-center"&gt;
        &lt;div&gt;
          &lt;w-checkboxes v-model="selection" :items="checkboxes"&gt;&lt;/w-checkboxes&gt;
          &lt;w-button class="mt2" @click="selection = selection.length ? [] : [2]"&gt;
            Toggle checkbox 2
          &lt;/w-button&gt;
        &lt;/div&gt;

        &lt;div class="title3 ml8"&gt;
          v-model:
          &lt;code class="ml1"&gt;{{ "\{\{ selection || '[]' \}\}" }}&lt;/code&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        selection: [],
        checkboxes: [
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
    template(#html).
      &lt;div class="title4 mb2"&gt;Default column layout&lt;/div&gt;
      &lt;w-checkboxes :items="checkboxes"&gt;&lt;/w-checkboxes&gt;

      &lt;div class="title4 mt6 mb2"&gt;Inline layout&lt;/div&gt;
      &lt;w-checkboxes :items="checkboxes" inline&gt;&lt;/w-checkboxes&gt;
    template(#js).
      data: () => ({
        checkboxes: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ]
      })

  title-link(h2) Custom label content
  p #[span.code w-checkboxes] provides a #[code label] slot to customize the label of each checkbox button.
  example
    w-checkboxes(:items="checkboxes3" color="green")
      template(#item="{ item }")
        span.pr2 {{ item.label }}
        w-icon.deep-purple {{ item.icon }}
    template(#html).
      &lt;w-checkboxes :items="checkboxes" color="green"&gt;
        &lt;template #item="{ item }"&gt;
          &lt;span class="pr2"&gt;{{ '\{\{ item.label \}\}' }}&lt;/span&gt;
          &lt;w-icon class="deep-purple"&gt;{{ '\{\{ item.icon \}\}' }}&lt;/w-icon&gt;
        &lt;/template&gt;
      &lt;/w-checkboxes&gt;
    template(#js).
      data: () => ({
        checkboxes: [
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
    w-checkboxes(v-model="selection8" :items="checkboxes1" round inline)
    template(#html).
      &lt;w-checkboxes
        v-model="selection"
        :items="checkboxes"
        round
        inline&gt;
      &lt;/w-checkboxes&gt;
    template(#js).
      data: () => ({
        selection: [1],
        checkboxes: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ]
      })

  title-link(h2) Color
  p.
    By default the #[span.code w-checkbox] &amp; #[span.code w-checkboxes] components will use the
    primary color.#[br]
    You can provide a different color with the #[code color] option, or you can even set a different
    color per item by providing a #[code color] attribute in each of the item objects.

  title-link(h3 slug="w-checkboxes--colors") #[span.code w-checkboxes] colors
  example
    w-checkboxes(v-model="selection4" :items="checkboxes1" color="purple")

    .title4.mt8.mb2 Different color per item
    w-checkboxes(v-model="selection7" :items="checkboxes4")
    template(#html).
      &lt;w-checkboxes
        v-model="selection1"
        :items="checkboxes1"
        color="purple"&gt;
      &lt;/w-checkboxes&gt;

      &lt;div class="title4 mt8 mb2"&gt;Different color per item&lt;/div&gt;
      &lt;w-checkboxes
        v-model="selection2"
        :items="checkboxes2"&gt;
      &lt;/w-checkboxes&gt;
    template(#js).
      data: () => ({
        selection1: [1, 2, 3],
        checkboxes1: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ],
        selection2: [1, 2, 3],
        checkboxes2: [
          { label: 'Choice 1', value: 1, color: 'amber' },
          { label: 'Choice 2', value: 2, color: 'warning' },
          { label: 'Choice 3', value: 3, color: 'error' }
        ]
      })
  title-link(h3 slug="w-checkbox--colors") #[span.code w-checkbox] colors
  example
    w-checkbox.mr2(v-model="selection5[0]" color="teal-light1") Option 1
    w-checkbox(v-model="selection5[1]" color="teal-light1") Option 2

    .title4.mt8.mb2 Different color per item
    w-checkbox.mr2(v-model="selection6[0]" color="pink-light3") Option 1
    w-checkbox(v-model="selection6[1]" color="blue-light1") Option 2
    template(#html).
      &lt;w-checkbox
        class="mr2"
        v-model="selection1[0]"
        color="teal-light1"&gt;
        Option 1
      &lt;/w-checkbox&gt;
      &lt;w-checkbox
        v-model="selection1[1]"
        color="teal-light1"&gt;
        Option 2
      &lt;/w-checkbox&gt;

      &lt;div class="title4 mt8 mb2"&gt;Different color per item&lt;/div&gt;
      &lt;w-checkbox
        class="mr2"
        v-model="selection2[0]"
        color="pink-light3"&gt;
        Option 1
      &lt;/w-checkbox&gt;
      &lt;w-checkbox
        v-model="selection2[1]"
        color="blue-light1"&gt;
        Option 2
      &lt;/w-checkbox&gt;
    template(#js).
      data: () => ({
        selection1: [true, true],
        selection2: [true, true],
        checkboxes: [
          { label: 'Choice 1' },
          { label: 'Choice 2' },
          { label: 'Choice 3' }
        ]
      })
</template>

<script>
export default {
  data: () => ({
    selection1: false,
    selection1b: [],
    selection2: [false, false, false],
    selection3: [2],
    selection4: [1, 2, 3],
    selection5: [true, true],
    selection6: [true, true],
    selection7: [1, 2, 3],
    selection8: [1],
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
    ],
    checkboxes4: [
      { label: 'Choice 1', value: 1, color: 'amber' },
      { label: 'Choice 2', value: 2, color: 'warning' },
      { label: 'Choice 3', value: 3, color: 'error' }
    ]
  })
}
</script>
