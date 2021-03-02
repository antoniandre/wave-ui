<template lang="pug">
div
  w-card(bg-color="blue-light5")
    p.mb3 What it looks like:
    w-radios(v-model="selection1" :items="radios1" inline)

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
    .title3 Important notes
    strong.title5 Name attribute
    p.mb4.
      With individual radio buttons (using #[span.code &lt;w-radio&gt;]), the #[code name] prop is
      needed for the radios to work together. This is how HTML knows they are part of the same group
      of choices.#[br]
      But when you use a group of radio buttons via #[span.code &lt;w-radios&gt;], Wave UI will add the
      name attributes for you.
    strong.title5 Form validation
    p.
      When a validation is needed on radio buttons, each individual radio button (#[span.code w-radio])
      has a separate validation message.#[br]
      If you want only one validation for a group of radio buttons, you must use the #[span.code w-radios]
      component.

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
    //- template(#pug).
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
    template(#html).
      &lt;div class="title4 mb2"&gt;1. Here is a single radio button&lt;/div&gt;
      &lt;w-radio&gt;I am single - not very useful&lt;/w-radio&gt;

      &lt;div class="title4 mt8 mb2"&gt;2. Here is a duo&lt;/div&gt;
      &lt;w-radio class="mr2" name="radio1"&gt;Option 1&lt;/w-radio&gt;
      &lt;w-radio name="radio1"&gt;Option 2&lt;/w-radio&gt;

      &lt;div class="title4 mt8 mb2"&gt;3. A trio using v-model&lt;/div&gt;
      &lt;w-radio
        class="mr2"
        v-model="radio2"
        return-value="option 1"&gt;
        Option 1
      &lt;/w-radio&gt;
      &lt;w-radio
        class="mr2"
        v-model="radio2"
        return-value="option 2"&gt;
        Option 2
      &lt;/w-radio&gt;
      &lt;w-radio
        v-model="radio2"
        return-value="option 3"&gt;
        Option 3
      &lt;/w-radio&gt;

      &lt;div class="title4 mt8 mb2"&gt;
        4. A trio using v-model and a set name
      &lt;/div&gt;
      &lt;w-radio
        class="mr2"
        v-model="radio3"
        name="radio3"
        return-value="option 1"&gt;
        Option 1
      &lt;/w-radio&gt;
      &lt;w-radio
        class="mr2"
        v-model="radio3"
        name="radio3"
        return-value="option 2"&gt;
        Option 2
      &lt;/w-radio&gt;
      &lt;w-radio
        v-model="radio3"
        name="radio3"
        return-value="option 3"&gt;
        Option 3
      &lt;/w-radio&gt;
    template(#js).
      data: () => ({
        radio2: false,
        radio3: false
      })

  p
    | The above example (case 3 &amp; 4) shows that the radio buttons work without the name attribute,
    | using a v-model, but the navigation using the keyboard arrows will not work as the names are not
    | provided.#[br]
    | Case 4 is fully operational. #[span.code :tada:]
    | (Keyboard arrows navigation is a browser choice, Safari doesn't have it)#[br]
    strong.
      Note that when you use the #[span.code w-radios] component, a unique name is set by default so you don't
      have to worry about it if you don't need it.

  title-link(h2) Custom label in w-radio
  p #[span.code w-radio] provides a default slot to customize the content.
  example(content-class="mt3")
    w-radio.mr5(name="radio4")
      span.pr1 Choice 1 has an icon
      w-icon(md) mdi mdi-star
    w-radio(name="radio4")
      w-tag(bg-color="green-light5" color="green-dark2")
        | Choice 2 is a tag
        w-icon.ml1 mdi mdi-heart
    //- template(#pug).
      w-radio.mr5(name="radio1")
        span.pr1 Choice 1 has an icon
        w-icon(md) mdi mdi-star
      w-radio(name="radio1")
        w-tag(bg-color="green-light5" color="green-dark2")
          | Choice 2 is a tag
          w-icon.ml1 mdi mdi-heart
    template(#html).
      &lt;w-radio class="mr5" name="radio1"&gt;
        &lt;span class="pr1"&gt;Choice 1 has an icon&lt;/span&gt;
        &lt;w-icon md&gt;mdi mdi-star&lt;/w-icon&gt;
      &lt;/w-radio&gt;

      &lt;w-radio name="radio1"&gt;
        &lt;w-tag bg-color="green-light5" color="green-dark2"&gt;
          Choice 2 is a tag
          &lt;w-icon class="ml1"&gt;mdi mdi-heart&lt;/w-icon&gt;
        &lt;/w-tag&gt;
      &lt;/w-radio&gt;
  alert(tip).
    As seen in this example, the #[span.code w-radio] component allows you to have complete freedom
    in your radio buttons.#[br]
    But because in most cases you won't need that, the #[span.code w-radios] component will make you go
    much faster.

  //- W-radios.
  //-------------------------------------------------------
  title-link.title1.mt12(h2 slug="w-radios") &lt;w-radios&gt;
  .w-divider

  p.my5.
    The #[span.code w-radios] component allows a fast and easy rendering of
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
      w-radios(v-model="selection1" :items="radios1")
      div.title3.ml10 v-model: #[code {{ selection1 || 'null' }}]
    //- template(#pug).
    //-   .w-flex.align-center
    //-     w-radios(v-model="selection" :items="radioItems")
    //-     div.title3.ml10 v-model: {{ "\{\{ selection || 'null' \}\}" }}
    template(#html).
      &lt;div class="w-flex align-center"&gt;
        &lt;w-radios
          v-model="selection"
          :items="radioItems"&gt;
        &lt;/w-radios&gt;

        &lt;div class="title3 ml10"&gt;
          v-model: {{ "\{\{ selection || 'null' \}\}" }}
        &lt;/div&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        selection: 1,
        radioItems: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ]
      })

  title-link(h2) Inline layout
  example(content-class="mt3")
    w-radios(:items="radios2" inline)
    //- template(#pug).
      w-radios(:items="radioItems" inline)
    template(#html).
      &lt;w-radios :items="radioItems" inline&gt;&lt;/w-radios&gt;
    template(#js).
      data: () => ({
        radioItems: [
          { label: 'Choice 1' },
          { label: 'Choice 2' },
          { label: 'Choice 3' }
        ]
      })

  title-link(h2) Custom label content
  p #[span.code w-radios] also provides a slot to customize the label of each radio button: #[code item].
  p The great thing is that you can access any custom data from this slot!
  example
    w-radios(v-model="selection5" :items="radios3" color="green")
      template(#item="{ item }")
        span.pr2 {{ item.label }}
        w-icon.success {{ item.icon }}
    //- template(#pug).
      w-radios(v-model="selection" :items="radioItems" color="green")
        template(#item="{ item }")
          span.pr2 {{ '\{\{ item.label \}\}' }}
          w-icon.success {{ '\{\{ item.icon \}\}' }}
    template(#html).
      &lt;w-radios
        v-model="selection"
        :items="radioItems"
        color="green"&gt;
        &lt;template #item="{ item }"&gt;
          &lt;span class="pr2"&gt;{{ '\{\{ item.label \}\}' }}&lt;/span&gt;
          &lt;w-icon class="success"&gt;{{ '\{\{ item.icon \}\}' }}&lt;/w-icon&gt;
        &lt;/template&gt;
      &lt;/w-radios&gt;
    template(#js).
      data: () => ({
        selection: 'Square',
        radioItems: [
          { label: 'Square', icon: 'mdi mdi-square' },
          { label: 'Circle', icon: 'mdi mdi-circle' },
          { label: 'Triangle', icon: 'mdi mdi-triangle' }
        ],
      })

  .w-divider.grey-light5.my12

  //- Other examples.
  //-------------------------------------------------------
  title-link(h2) Color
  p.
    By default the #[span.code w-radio] &amp; #[span.code w-radios] components will use the
    primary color.#[br]
    You can provide a different color with the #[code color] option, or you can even set a different
    color per item by providing a #[code color] attribute in each of the item objects.

  title-link(h3 slug="w-radios--colors") #[span.code w-radios] colors
  example
    w-radios.mr2(v-model="selection6" :items="radios1" color="purple") Option 1

    .title4.mt8.mb2 Different color per item
    w-radios(v-model="selection7" :items="radios4") Option 2
    //- template(#pug).
      w-radios.mr2(v-model="selection1" :items="radios1" color="purple") Option 1

      .title4.mt8.mb2 Different color per item
      w-radios(v-model="selection2" :items="radios2") Option 2
    template(#html).
      &lt;w-radios
        class="mr2"
        v-model="selection1"
        :items="radios1"
        color="purple"&gt;
        Option 1
      &lt;/w-radios&gt;

      &lt;div class="title4 mt8 mb2"&gt;
        Different color per item
      &lt;/div&gt;

      &lt;w-radios
        v-model="selection2"
        :items="radios2"&gt;
        Option 2
      &lt;/w-radios&gt;
    template(#js).
      data: () => ({
        selection1: 1,
        radios1: [
          { label: 'Choice 1', value: 1 },
          { label: 'Choice 2', value: 2 },
          { label: 'Choice 3', value: 3 }
        ],
        selection2: 1,
        radios2: [
          { label: 'Choice 1', value: 1, color: 'amber' },
          { label: 'Choice 2', value: 2, color: 'warning' },
          { label: 'Choice 3', value: 3, color: 'error' }
        ]
      })

  title-link(h3 slug="w-radio--colors") #[span.code w-radio] colors
  example
    w-radio.mr2(v-model="selection3" name="radio5" color="teal-light1" :return-value="1") Option 1
    w-radio(v-model="selection3" name="radio5" color="teal-light1" :return-value="2") Option 2

    .title4.mt8.mb2 Different color per item
    w-radio.mr2(v-model="selection4" name="radio6" color="pink-light3" :return-value="1") Option 1
    w-radio(v-model="selection4" name="radio6" color="blue-light1" :return-value="2") Option 2
    //- template(#pug).
      w-radio.mr2(v-model="selection1" name="radio1" color="teal-light1" :return-value="1") Option 1
      w-radio(v-model="selection1" name="radio1" color="teal-light1" :return-value="2") Option 2

      .title4.mt8.mb2 Different color per item
      w-radio.mr2(v-model="selection2" name="radio2" color="pink-light3" :return-value="1") Option 1
      w-radio(v-model="selection2" name="radio2" color="blue-light1" :return-value="2") Option 2
    template(#html).
      &lt;w-radio
        class="mr2"
        v-model="selection1"
        name="radio1"
        color="teal-light1"
        :return-value="1"&gt;
        Option 1
      &lt;/w-radio&gt;

      &lt;w-radio
        v-model="selection1"
        name="radio1"
        color="teal-light1"
        :return-value="2"&gt;
        Option 2
      &lt;/w-radio&gt;

      &lt;div class="title4 mt8 mb2"&gt;
        Different color per item
      &lt;/div&gt;

      &lt;w-radio
        class="mr2"
        v-model="selection2"
        name="radio2"
        color="pink-light3"
        :return-value="1"&gt;
        Option 1
      &lt;/w-radio&gt;

      &lt;w-radio
        v-model="selection2"
        name="radio2"
        color="blue-light1"
        :return-value="2"&gt;
        Option 2
      &lt;/w-radio&gt;

    template(#js).
      data: () => ({
        selection1: 1,
        selection2: 1
      })
</template>

<script>
export default {
  data: () => ({
    selection1: 1,
    selection2: 1,
    selection3: 1,
    selection4: 1,
    selection5: 'Square',
    selection6: 1,
    selection7: 1,
    radio2: false,
    radio3: false,
    radios1: [
      { label: 'Choice 1', value: 1 },
      { label: 'Choice 2', value: 2 },
      { label: 'Choice 3', value: 3 }
    ],
    radios2: [
      { label: 'Choice 1' },
      { label: 'Choice 2' },
      { label: 'Choice 3' }
    ],
    radios3: [
      { label: 'Square', icon: 'mdi mdi-square' },
      { label: 'Circle', icon: 'mdi mdi-circle' },
      { label: 'Triangle', icon: 'mdi mdi-triangle' }
    ],
    radios4: [
      { label: 'Choice 1', value: 1, color: 'amber' },
      { label: 'Choice 2', value: 2, color: 'warning' },
      { label: 'Choice 3', value: 3, color: 'error' }
    ]
  })
}
</script>
