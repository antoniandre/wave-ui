<template lang="pug">
div
  alert(info).
    The #[span.code w-select] component can be placed in a hidden overflow container and the dropdown
    menu will still be fully visible when open.#[br]
    This is because the select dropdown menu is placed at the #[span.code .w-app] level in the DOM,
    just so you don't have to worry about this annoying case.

  title-link(h2) Basic
  p This is the most basic use of the #[span.code w-select] component. No label, no v-model only items.
  example
    w-select(:items="items1")
    //- template(#pug).
      w-select(:items="items")
    template(#html).
      &lt;w-select :items="items"&gt;&lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) Label and / or placeholder
  p.
    The select list can have a label or not and a placeholder or not.#[br]

  example
    w-select(:items="items1" label="Label")
    w-select.mt4(:items="items1" placeholder="Placeholder")
    w-select.mt4(:items="items1" label="Label" placeholder="Placeholder")
    //- template(#pug).
      w-select(:items="items" label="Label")
      w-select.mt4(:items="items" placeholder="Placeholder")
      w-select.mt4(:items="items" label="Label" placeholder="Placeholder")
    template(#html).
      &lt;w-select
        :items="items"
        label="Label"&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        placeholder="Placeholder"&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        label="Label"
        placeholder="Placeholder"&gt;
      &lt;/w-select&gt;

    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  alert(tip).
    The items of the select list should have a label, which is by default expected in each item
    object under the #[code label] name.#[br]
    If this is a constraint, you can use the option #[code item-label-key] to specify the name of another
    attribute to be used instead.

  title-link(h2) Outline
  example
    w-select(:items="items1" outline) Label
    //- template(#pug).
      w-select(:items="items" outline) Label
    template(#html).
      &lt;w-select :items="items" outline&gt;Label&lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) Colors
  p.mb4.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.#[br]
    By default, the text has the "#[span.code primary]" color.
  .title3 Default style (Underline)
  example
    w-select(:items="items1" color="blue") Label
    w-select.mt4(:items="items1" bg-color="blue-light5" color="blue-dark3") Label
    //- template(#pug).
      w-select(:items="items" color="blue") Label
      w-select.mt4(:items="items" bg-color="blue-light5" color="blue-dark3") Label
    template(#html).
      &lt;w-select
        :items="items"
        color="blue"&gt;
        Label
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        bg-color="blue-light5"
        color="blue-dark3"&gt;
        Label
      &lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  .title3 Outline style
  example
    w-select(:items="items1" outline color="blue") Label
    w-select.mt4(:items="items1" outline bg-color="blue-light5" color="blue-dark3") Label
    //- template(#pug).
      w-select(:items="items" outline color="blue") Label
      w-select.mt4(:items="items" outline bg-color="blue-light5" color="blue-dark3") Label
    template(#html).
      &lt;w-select
        :items="items"
        outline
        color="blue"&gt;
        Label
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        outline
        bg-color="blue-light5"
        color="blue-dark3"&gt;
        Label
      &lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) Shadow
  example
    .title4 Default style (Underline)
    w-select(:items="items1" shadow) Label
    .title4.mt6 Outline style
    w-select(:items="items1" outline shadow) Label
    //- template(#pug).
      .title4.mb2 Default style (Underline)
      w-select(:items="items" shadow) Label

      .title4.mt6.mb2 Outline style
      w-select(:items="items" outline shadow) Label
    template(#html).
      &lt;div class="title4 mb2"&gt;
        Default style (Underline)
      &lt;/div&gt;

      &lt;w-select :items="items" shadow&gt;
        Label
      &lt;/w-select&gt;

      &lt;div class="title4 mt6 mb2"&gt;
        Outline style
      &lt;/div&gt;

      &lt;w-select :items="items" outline shadow&gt;
        Label
      &lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) Tile &amp; round
  example
    .title4 Default style (Underline)
    w-select(:items="items1" bg-color="purple-light5" tile) Tile
    w-select.mt4(:items="items1" bg-color="purple-light5" round) Round
    .title4.mt6 Outline style
    w-select(:items="items1" outline tile) Tile
    w-select.mt4(:items="items1" outline round) Round
    //- template(#pug).
      .title4 Default style (Underline)
      w-select.mt3(:items="items" bg-color="purple-light5" tile) Tile
      w-select.mt4(:items="items" bg-color="purple-light5" round) Round

      .title4.mt6 Outline style
      w-select.mt3(:items="items" outline tile) Tile
      w-select.mt4(:items="items" outline round) Round
    template(#html).
      &lt;div class="title4"&gt;
        Default style (Underline)
      &lt;/div&gt;

      &lt;w-select
        class="mt3"
        :items="items"
        bg-color="purple-light5"
        tile&gt;
        Tile
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        bg-color="purple-light5"
        round&gt;
        Round
      &lt;/w-select&gt;


      &lt;div class="title4 mt6"&gt;
        Outline style
      &lt;/div&gt;

      &lt;w-select
        class="mt3"
        :items="items"
        outline
        tile&gt;
        Tile
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        outline
        round&gt;
        Round
      &lt;/w-select&gt;

    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) Multiple selection
  example
    w-select(:items="items1" multiple)
    //- template(#pug).
      w-select(:items="items" multiple)
    template(#html).
      &lt;w-select :items="items" multiple&gt;&lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) V-model
  alert(tip).
    By default, the #[span.code w-select] component expects the items to have a #[code value] attribute.#[br]
    If this is a constraint, you can use the option #[code item-value-key] to specify the name of another
    attribute to be used instead (must have a unique value), like an id for instance.
  example
    w-select(v-model="vModelSelect1" :items="items3" multiple)
    w-flex.align-center.mt4
      span v-model:
      code.ml2 {{ vModelSelect1 }}
    //- template(#pug).
      w-select(v-model="selection" :items="items" multiple)
      w-flex.align-center.mt4
        span v-model:
        code.ml2 {{ '\{\{ selection \}\}' }}
    template(#html).
      &lt;w-select
        v-model="selection"
        :items="items"
        multiple&gt;
      &lt;/w-select&gt;

      &lt;w-flex class="align-center mt4"&gt;
        &lt;span&gt;v-model:&lt;/span&gt;
        &lt;code class="ml2"&gt;{{ '\{\{ selection \}\}' }}&lt;/code&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 },
          { label: 'Item 3', value: 3 }
        ],
        selection: [1, 3]
      })

  title-link(h3) Without values (using labels)
  p If no values are provided in the items objects, the labels will be used to identify the selected items.
  example
    w-select(v-model="vModelSelect2" :items="items1" multiple)
    w-flex.align-center.mt4
      span v-model:
      code.ml2 {{ vModelSelect2 }}
    //- template(#pug).
      w-select(v-model="selection" :items="items" multiple)
      w-flex.align-center.mt4
        span v-model:
        code.ml2 {{ '\{\{ selection \}\}' }}
    template(#html).
      &lt;w-select
        v-model="selection"
        :items="items"
        multiple&gt;
      &lt;/w-select&gt;

      &lt;w-flex class="align-center mt4"&gt;
        &lt;span&gt;v-model:&lt;/span&gt;
        &lt;code class="ml2"&gt;{{ '\{\{ selection \}\}' }}&lt;/code&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ],
        selection: ['Item 1', 'Item 3']
      })

  title-link(h3) Using full objects in v-model
  p.
    If it's more convenient for you, you can ask the #[span.code w-select] component to return the
    full items objects in the selection.#[br]
    You then have the choice to provide an array of either values or full objects in the v-model,
    if you want to prefill the select list.
  p
  example
    w-select(v-model="vModelSelect3" :items="items1" multiple return-object)
    w-flex.align-center.mt4
      span v-model:
      code.ml2 {{ vModelSelect3 }}
    //- template(#pug).
      w-select(v-model="selection" :items="items" multiple return-object)
      w-flex.align-center.mt4
        span v-model:
        code.ml2 {{ '\{\{ selection \}\}' }}
    template(#html).
      &lt;w-select
        v-model="selection"
        :items="items"
        multiple
        return-object&gt;
      &lt;/w-select&gt;

      &lt;w-flex class="align-center mt4"&gt;
        &lt;span&gt;v-model:&lt;/span&gt;
        &lt;code class="ml2"&gt;{{ '\{\{ selection \}\}' }}&lt;/code&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ],
        selection: [{ label: 'Item 3' }]
      })

  title-link(h2) Label position
  p.
    By default the label is positioned inside, you can also place it on the left or right outside of
    the select list.
  example
    w-select(:items="items1" label="Select an item")
    w-select.mt4(:items="items1" label="Select an item" label-position="left")
    w-select.mt4(:items="items1" label="Select an item" label-position="right")
    //- template(#pug).
      w-select(:items="items" label="Select an item")
      w-select.mt4(:items="items" label="Select an item" label-position="left")
      w-select.mt4(:items="items" label="Select an item" label-position="right")
    template(#html).
      &lt;w-select
        :items="items"
        label="Select an item"&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        label="Select an item"
        label-position="left"&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        label="Select an item"
        label-position="right"&gt;
      &lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) Custom label
  p.
    It is convenient to have the label inside the #[span.code w-select] component to let it handle
    the field focus event on label click.#[br]
    The #[span.code label] prop accepts any HTML, but because passing complex html via a prop is not fun,
    there is also a prop for setting the label wish will grant more freedom.

  example
    w-select(:items="items1" label-position="inside" outline)
      w-icon.orange mdi mdi-arrow-right
      span.purple.mx1 Inside
      w-icon.orange mdi mdi-arrow-left
    w-select.mt4(:items="items1" label-position="left" outline)
      span.green.mr1 Left
      w-icon.orange mdi mdi-arrow-right
    w-select.mt4(:items="items1" label-position="right" outline)
      w-icon.orange mdi mdi-arrow-left
      span.red.ml1 Right
    //- template(#pug).
      w-select(:items="items" label-position="inside" outline)
        w-icon.orange mdi mdi-arrow-right
        span.purple.mx1 Inside
        w-icon.orange mdi mdi-arrow-left
      w-select.mt4(:items="items" label-position="left" outline)
        span.green.mr1 Left
        w-icon.orange mdi mdi-arrow-right
      w-select.mt4(:items="items" label-position="right" outline)
        w-icon.orange mdi mdi-arrow-left
        span.red.ml1 Right
    template(#html).
      &lt;w-select
        :items="items"
        label-position="inside"
        outline&gt;
        &lt;w-icon class="orange"&gt;mdi mdi-arrow-right&lt;/w-icon&gt;
        &lt;span class="purple mx1"&gt;Inside&lt;/span&gt;
        &lt;w-icon class="orange"&gt;mdi mdi-arrow-left&lt;/w-icon&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        label-position="left"
        outline&gt;
        &lt;span class="green mr1"&gt;Left&lt;/span&gt;
        &lt;w-icon class="orange"&gt;mdi mdi-arrow-right&lt;/w-icon&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        label-position="right"
        outline&gt;
        &lt;w-icon class="orange"&gt;mdi mdi-arrow-left&lt;/w-icon&gt;
        &lt;span class="red ml1"&gt;Right&lt;/span&gt;
      &lt;/w-select&gt;

    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) Custom selection string
  p.
    The selection string is customizable through the #[code selection] slot.#[br]
    For consistency, the name of the provided parameter containing the selected item(s) is #[code item],
    whether you use a multiple or single select list.
  example
    w-select(:items="items3" v-model="customSelection" multiple)
      template(#selection="{ item }")
        w-tag.mr2(v-for="(item, i) in item" :key="i" bg-color="grey-light4")
          | {{ item.label }}
    //- template(#pug).
      w-select(:items="items" v-model="selection" multiple)
        template(#selection="{ item }")
          w-tag.mr2(v-for="(item, i) in item" :key="i" bg-color="grey-light4")
            | {{ '\{\{ item.label \}\}' }}
    template(#html).
      &lt;w-select :items="items" v-model="selection" multiple&gt;
        &lt;template #selection="{ item }"&gt;
          &lt;w-tag
            class="mr2"
            v-for="(item, i) in item"
            :key="i"
            bg-color="grey-light4"&gt;
            {{ '\{\{ item.label \}\}' }}
          &lt;/w-tag&gt;
        &lt;/template&gt;
      &lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 },
          { label: 'Item 3', value: 3 }
        ],
        selection: [1, 3]
      })

  title-link(h2) Custom list items
  example
    w-select(:items="items3")
      template(#item="{ item, selected }")
        w-icon.primary(v-if="selected") wi-check
        span.px2(v-else)
        span.ml1 {{ item.label }}
        w-tag.ml2(bg-color="grey-light4" xs) {{ item.value }}
    //- template(#pug).
      w-select(:items="items")
        template(#item="{ item, selected }")
          w-icon.primary(v-if="selected") wi-check
          span.px2(v-else)
          span.ml1 {{ '\{\{ item.label \}\}' }}
          w-tag.ml2(bg-color="grey-light4" xs) {{ '\{\{ item.value \}\}' }}
    template(#html).
      &lt;w-select :items="items"&gt;
        &lt;template #item="{ item, selected }"&gt;
          &lt;w-icon v-if="selected" class="primary"&gt;wi-check&lt;/w-icon&gt;
          &lt;span v-else class="px2"&gt;&lt;/span&gt;

          &lt;span class="ml1"&gt;{{ '\{\{ item.label \}\}' }}&lt;/span&gt;

          &lt;w-tag class="ml2" bg-color="grey-light4" xs&gt;
            {{ '\{\{ item.value \}\}' }}
          &lt;/w-tag&gt;
        &lt;/template&gt;
      &lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 },
          { label: 'Item 3', value: 3 }
        ]
      })

  title-link(h2) Inner icons
  example
    .title4.mb2 Label outside
    w-select(:items="items1" label="Select" label-position="left" outline inner-icon-left="mdi mdi-star")
    w-select.mt4(:items="items1" label="Select" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")

    .title4.mt6.mb2 Label inside
    w-select(:items="items1" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")
    w-select.mt4(:items="items1" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")
    //- template(#pug).
      .title4.mb2 Label outside
      w-select(:items="items" label="Left" label-position="left" outline inner-icon-left="mdi mdi-star")
      w-select.mt4(:items="items" label="Right" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")

      .title4.mt6.mb2 Label inside
      w-select(:items="items" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")
      w-select.mt4(:items="items" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")
    template(#html).
      &lt;div class="title4 mb2"&gt;
        Label outside
      &lt;/div&gt;

      &lt;w-select
        :items="items"
        label="Left"
        label-position="left"
        outline
        inner-icon-left="mdi mdi-star"&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        label="Right"
        label-position="right"
        outline
        inner-icon-right="mdi mdi-arrow-down"&gt;
      &lt;/w-select&gt;

      &lt;div class="title4 mt6 mb2"&gt;
        Label inside
      &lt;/div&gt;

      &lt;w-select
        :items="items"
        label="Select"
        label-position="inside"
        outline
        inner-icon-left="mdi mdi-star"&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mt4"
        :items="items"
        label="Select"
        label-position="inside"
        outline
        inner-icon-right="mdi mdi-arrow-down"&gt;
      &lt;/w-select&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })

  title-link(h2) Disabled &amp; readonly
  example
    w-select.mb4(
      :items="items1"
      label="Disabled & empty"
      outline
      disabled)
    w-select.mb4(
      :items="items1"
      label="Disabled & filled"
      value="Item 1"
      outline
      disabled)
    w-select.mb4(
      :items="items1"
      label="Readonly & empty"
      outline
      readonly)
    w-select(
      :items="items1"
      value="Item 1"
      label="Readonly & filled"
      outline
      readonly)
    //- template(#pug).
      w-select.mb4(
        :items="items"
        label="Disabled &amp; empty"
        outline
        disabled)
      w-select.mb4(
        :items="items"
        value="Item 1"
        label="Disabled &amp; filled"
        outline
        disabled)
      w-select.mb4(
        :items="items"
        label="Readonly &amp; empty"
        outline
        readonly)
      w-select(
        :items="items"
        value="Item 1"
        label="Readonly &amp; filled"
        outline
        readonly)
    template(#html).
      &lt;w-select
        class="mb4"
        :items="items"
        label="Disabled &amp; empty"
        outline
        disabled&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mb4"
        :items="items"
        value="Item 1"
        label="Disabled &amp; filled"
        outline
        disabled&gt;
      &lt;/w-select&gt;

      &lt;w-select
        class="mb4"
        :items="items"
        label="Readonly &amp; empty"
        outline
        readonly&gt;
      &lt;/w-select&gt;

      &lt;w-select
        :items="items"
        value="Item 1"
        label="Readonly &amp; filled"
        outline
        readonly&gt;
      &lt;/w-select&gt;

    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' }
        ]
      })
</template>

<script>
export default {
  data: () => ({
    items1: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' }
    ],
    items2: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 5', disabled: true }
    ],
    items3: [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 }
    ],
    vModelSelect1: [1, 3],
    customSelection: [1, 3],
    vModelSelect2: ['Item 1', 'Item 3'],
    vModelSelect3: [{ label: 'Item 3' }]
  })
}
</script>
