<template lang="pug">
div
  title-link.mt4(h1 slug="w-radio-and-w-radios")
    | #[span.code w-radio] &amp; #[span.code w-radios]

  w-card(bg-color="blue-light5")
    p.mb3 What it looks like:
    w-radios(v-model="selectedRadio1" :items="radios1" inline)

    .title4.mt4 States
    .w-flex.wrap
      w-radio.mr3.mb1(:value="true" label="Checked")
      w-radio.mr3.mb1(:value="false" label="Unchecked")
      w-radio.mr3.mb1(:value="true" disabled label="Checked &amp; disabled")
      w-radio.mr3.mb1(:value="false" disabled label="Unchecked &amp; disabled")

  p.mt12.
    There are 2 components: #[span.code w-radio] &amp; #[span.code w-radios].
    The later is a group of radio buttons for convenience.
  p Let's start with the basic component.

  //- W-radio.
  //-------------------------------------------------------
  title-link.title1.mt12(h2 slug="w-radio") &lt;w-radio&gt;
  .w-divider

  alert(tip)
    strong Important
    div.
      With single radio buttons (using &lt;w-radio&gt;), the #[code name] prop is needed for the
      radios to work together. This is how HTML knows they are part of the same group of choices.#[br]
      But when you use a group of radio buttons via &lt;w-radios&gt;, Wave UI will add the name
      attributes for you.
  example
    .title4.mb2 1. Here is a single radio button
    w-radio I am single - not very useful

    .title4.mt8.mb2 2. Here is a duo
    w-radio.mr2(name="radio1") Option 1
    w-radio(name="radio1") Option 2

    .title4.mt8.mb2 3. A trio using v-model
    w-radio.mr2(v-model="radio2" return-value="option 1") Option 1
    w-radio.mr2(v-model="radio2" return-value="option 2") Option 2
    w-radio(v-model="radio2" return-value="option 3") Option 3

    .title4.mt8.mb2 4. A trio using v-model and a set name
    w-radio.mr2(v-model="radio3" name="radio3" return-value="option 1") Option 1
    w-radio.mr2(v-model="radio3" name="radio3" return-value="option 2") Option 2
    w-radio(v-model="radio3" name="radio3" return-value="option 3") Option 3
    template(#pug).
      .title4.mb2 1. Here is a single radio button
      w-radio I am single - not very useful

      .title4.mt8.mb2 2. Here is a duo
      w-radio.mr2(name="radio1") Option 1
      w-radio(name="radio1") Option 2

      .title4.mt8.mb2 3. A trio using v-model
      w-radio.mr2(v-model="radio2" return-value="option 1") Option 1
      w-radio.mr2(v-model="radio2" return-value="option 2") Option 2
      w-radio(v-model="radio2" return-value="option 3") Option 3

      .title4.mt8.mb2 4. A trio using v-model and a set name
      w-radio.mr2(v-model="radio3" name="radio3" return-value="option 1") Option 1
      w-radio.mr2(v-model="radio3" name="radio3" return-value="option 2") Option 2
      w-radio(v-model="radio3" name="radio3" return-value="option 3") Option 3
    template(#js).
      data: () => ({
        radio2: false,
        radio3: false
      })

  p
    | The above example (case 3 &amp; 4) shows that the radio buttons work without the name attribute,
    | using a v-model, but the navigation using the keyboard arrows will not work as the names are not
    | provided.#[br]
    | Case 4 is fully operational. #[span.code :tada:]#[br]
    strong.
      Note that when you use the #[span.code w-radios] component, a unique name is set by default so you don't
      have to worry about it if you don't need it.

  title-link(h2) Custom label in w-radio
  p #[code w-radio] provides a default slot to customize the content.
  example(content-class="mt3")
    w-radio.mr5(name="radio4")
      span.pr1 Choice 1 has an icon
      w-icon(md) mdi mdi-star
    w-radio(name="radio4")
      w-tag(bg-color="green-light5" color="green-dark2")
        | Choice 2 is a tag
        w-icon.ml1 mdi mdi-heart
    template(#pug).
      w-radio.mr5(name="radio1")
        span.pr1 Choice 1 has an icon
        w-icon(md) mdi mdi-star
      w-radio(name="radio1")
        w-tag(bg-color="green-light5" color="green-dark2")
          | Choice 2 is a tag
          w-icon.ml1 mdi mdi-heart
  alert(tip).
    As seen in this example, the #[span.code w-radio] component allows you to have complete freedom
    in your radio buttons.#[br]
    But because in most cases you won't need that, the #[span.code w-radios] component will make you go
    much faster.

  title-link(h2) Color
  p By default the #[code w-radio] &amp; #[code w-radios] components will use the primary color.
  alert(info).
    One thing that the #[span.code w-radios] component does not do is mixing colors: you can do it with
    #[span.code w-radio] like in this example.
  example(content-class="mt3")
    w-radio.mr2(v-model="selectedRadio5" name="radio5" color="teal-light1" :return-value="1") Option 1
    w-radio(v-model="selectedRadio5" name="radio5" color="teal-light1" :return-value="2") Option 2

    .title4.mt8.mb2 Mixing colors
    w-radio.mr2(v-model="selectedRadio6" name="radio6" color="pink-light3" :return-value="1") Option 1
    w-radio(v-model="selectedRadio6" name="radio6" color="blue-light1" :return-value="2") Option 2
    template(#pug).
      w-radio.mr2(v-model="selectedRadio1" name="radio1" color="teal-light1" :return-value="1") Option 1
      w-radio(v-model="selectedRadio1" name="radio1" color="teal-light1" :return-value="2") Option 2

      .title4.mt8.mb2 Mixing colors
      w-radio.mr2(v-model="selectedRadio2" name="radio2" color="pink-light3" :return-value="1") Option 1
      w-radio(v-model="selectedRadio2" name="radio2" color="blue-light1" :return-value="2") Option 2
    template(#js).
      data: () => ({
        selectedRadio1: 1,
        selectedRadio2: 1
      })

  //- W-radios.
  //-------------------------------------------------------
  title-link.title1.mt12(h2 slug="w-radios") &lt;w-radios&gt;
  .w-divider

  p.my5.
    The #[code w-radios] component allows a fast and easy rendering of
    multiple radio buttons by passing the items through a prop.#[br]
    It accepts an inline parameter to display the radio buttons inline,
    and allows you to customize the label of each radio button through slot.

  title-link.title2.primary(h3) V-model
  alert(info).
    If a value is set in the choice's data, it will be returned through the v-model when selected.#[br]
    If no value is set, the choice's label will be returned instead.
  p The v-model can also be preset, or updated externally.
  example
    .w-flex.align-center
      w-radios(v-model="selectedRadio1" :items="radios1")
      div.title3.ml10 v-model: #[code {{ selectedRadio1 || 'null' }}]
    template(#pug).
      .w-flex.align-center
        w-radios(v-model="selectedRadio" :items="radioItems")
        div.title3.ml10 v-model: {{ "\{\{ selectedRadio || 'null' \}\}" }}
    template(#js).
      data: () => ({
        selectedRadio: 1,
        radioItems: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ]
      })

  title-link(h2) Inline layout
  example(content-class="mt3")
    w-radios(:items="radios2" inline)
    template(#pug).
      w-radios(:items="radioItems" inline)
    template(#js).
      data: () => ({
        radioItems: [
          { label: 'Choice 1' },
          { label: 'Choice 2' },
          { label: 'Choice 3' },
          { label: 'Choice 4' }
        ]
      })

  title-link(h2) Custom label content
  p #[code w-radios] also provides a slot to customize the label of each radio button: #[code item].
  p The great thing is that you can access any custom data from this slot!
  example
    w-radios(v-model="selectedRadio7" :items="radios3" color="green")
      template(#item="{ item }")
        span.pr2 {{ item.label }}
        w-icon.success {{ item.icon }}
    template(#pug).
      w-radios(v-model="selectedRadio" :items="radioItems" color="green")
        template(#item="{ item }")
          span.pr2 {{ '\{\{ item.label \}\}' }}
          w-icon.success {{ '\{\{ item.icon \}\}' }}
    template(#js).
      data: () => ({
        selectedRadio: 'Square',
        radioItems: [
          { label: 'Square', icon: 'mdi mdi-square' },
          { label: 'Circle', icon: 'mdi mdi-circle' },
          { label: 'Triangle', icon: 'mdi mdi-triangle' }
        ],
      })
</template>

<script>
export default {
  data: () => ({
    selectedRadio1: 1,
    selectedRadio3: 1,
    selectedRadio5: 1,
    selectedRadio6: 1,
    selectedRadio7: 'Square',
    radio2: false,
    radio3: false,
    radio4: 'Choice 1',
    radios1: [
      { label: 'Choice 1', value: 1 },
      { label: 'Choice 2', value: 2 },
      { label: 'Choice 3', value: 3 }
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
