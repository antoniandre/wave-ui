<template lang="pug">
div.lists-demo
  p The #[span.code w-list] component has multiple uses:
  w-list(:items="4" icon="wi-check")
    template(#item.1) Simple list with or without icons
    template(#item.2) Checklists
    template(#item.3) Navigation menus
    template(#item.4) List of selectable items

  title-link(h2) Basic lists
  example
    .w-flex.wrap
      .grow
        .title3 Most basic
        w-list(:items="listItems1")
      .grow
        .title3 With icons
        w-list(:items="listItems1" icon="wi-check")
    //- template(#pug).
      .w-flex.wrap
        .grow
          .title3 Most basic
          w-list(:items="items")
        .grow
          .title3 With icons
          w-list(:items="items" icon="wi-check")
    template(#html).
      &lt;w-flex wrap&gt;
        &lt;div class="grow"&gt;
          &lt;div class="title3 mb6"&gt;Most basic&lt;/div&gt;
          &lt;w-list :items="items"&gt;&lt;/w-list&gt;
        &lt;/div&gt;

        &lt;div class="grow"&gt;
          &lt;div class="title3 mb6"&gt;With icons&lt;/div&gt;
          &lt;w-list :items="items" icon="wi-check"&gt;&lt;/w-list&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' },
          { label: 'Item 4' },
          { label: 'Item 5', disabled: true }
        ]
      })

  title-link(h2) Color &amp; hoverable
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.
  example
    w-list(:items="listItems4" color="pink" hover)
    br
    w-list(:items="listItems4" bg-color="blue-light5" color="primary" hover)
    //- template(#pug).
      w-list(:items="items" color="pink" hover)
      br
      w-list(:items="items" bg-color="blue-light5" color="primary" hover)
    template(#html).
      &lt;w-list
        :items="items"
        color="pink"
        hover&gt;
      &lt;/w-list&gt;

      &lt;br /&gt;
      &lt;w-list
        :items="items"
        bg-color="blue-light5"
        color="primary"
        hover&gt;
      &lt;/w-list&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' },
          { label: 'Item 4' }
        ]
      })

  title-link(h3) Different color per item
  example
    w-list(:items="listItems5" hover)
    //- template(#pug).
    //-   w-list(:items="items" hover)
    template(#html).
      &lt;w-list :items="items" hover&gt;&lt;/w-list&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1', color: 'amber' },
          { label: 'Item 2', color: 'warning' },
          { label: 'Item 3', color: 'error' },
          { label: 'Item 4', color: 'pink' }
        ]
      })

  title-link(h3) Selection-only color
  p.grey-light1.
    In addition to the hover effect, the items may also be selectable (as per the
    #[a(href="#selectable-list-items") Selectable list items example]),
    but in this example we are only demonstrating the selection color.
  p.
    You may want a default color for all the items, but a different color for the selection only.#[br]
    You can use the #[code selection-color] option for this purpose.
  p.
    If no #[code color] and no #[code selection-color] are set, the #[code selection-color] will be set
    to primary by default.#[br]
    In that case, if you don't want to default to the primary color, you can explicitly set
    #[code selection-color] to a falsy value (false, null, or empty string), or another color.
  example
    w-list(:model-value="[]" :items="listItems4" selection-color="pink" multiple)
    //- template(#pug).
      w-list(:model-value="[]" :items="items" selection-color="pink" multiple)
    template(#html).
      &lt;w-list
        :model-value="[]"
        :items="items"
        selection-color="pink"
        multiple&gt;
      &lt;/w-list&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' },
          { label: 'Item 4' }
        ]
      })

  title-link(h2) Custom rendering
  p.
    In this example, we don't use the component's data at all.#[br]
    You can easily define items directly in the template and have a different custom layout for every
    list item just like in this example.
  example
    w-list(:items="5" hover)
      template(#item="{ index }")
        | Item {{ index }}
      template(#item.3)
        strong This is the great item #3
    //- template(#pug).
      w-list(:items="5" hover)
        template(#item="{ index }")
          | Item {{ index }}
        template(#item.3)
          strong This is the great item #3
    template(#html).
      &lt;w-list :items="5" hover&gt;
        &lt;template #item="{ index }"&gt;{{ '\{\{ index \}\}' }}&lt;/template&gt;
        &lt;template #item.3&gt;
          &lt;strong&gt;This is the great item #3&lt;/strong&gt;
        &lt;/template&gt;
      &lt;/w-list&gt;

  p.
    It's up to you to define your your list contents in the component's data or directly in the template.#[br]
    In this example each item has a different icon stored in the data object.
  example
    w-list(:items="listItems2" hover)
      template(#item="{ item }")
        .w-flex.align-center.justify-space-between
          | {{ item.label }}
          w-icon(md) {{ item.icon }}
    //- template(#pug).
      w-list(:items="items" hover)
        template(#item="{ item }")
          .w-flex.align-center.justify-space-between
            | {{ item.label }}
            w-icon(md) {{ item.icon }}
    template(#html).
      &lt;w-list :items="items" hover&gt;
        &lt;template #item="{ item }"&gt;
          &lt;w-flex align-center justify-space-between&gt;
            {{ '\{\{ item.label \}\}' }}
            &lt;w-icon md&gt;{{ '\{\{ item.icon \}\}' }}&lt;/w-icon&gt;
          &lt;/w-flex&gt;
        &lt;/template&gt;
      &lt;/w-list&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Star', icon: 'mdi mdi-star' },
          { label: 'Check', icon: 'mdi mdi-check' },
          { label: 'Cross', icon: 'mdi mdi-close' },
          { label: 'Info', icon: 'mdi mdi-information' },
          { label: 'Warning', icon: 'mdi mdi-alert' },
          { label: 'Disabled', icon: 'mdi mdi-minus-circle' }
        ]
      })

  title-link(h2) Selectable list items
  p If you provide a #[code v-model] or #[code model-value], the list items become selectable.
  example
    w-radios.mb6(v-model="multiple" :items="radios" inline)
    w-flex(wrap align-center)
      w-list.grow.mr4(
        v-model="selection1"
        :items="listItems1"
        color="deep-purple"
        :multiple="multiple"
        @itemClick="itemClicked = $event")
      div(v-if="itemClicked")
        .title3 clicked item (#[span.code item-click] event):
        br
        span.code {{ itemClicked }}
    .title3.mt2
      | Selected item:
      code.ml2(v-if="!multiple || Array.isArray(selection1)") {{ selection1 || 'null' }}
      code.ml2(v-else-if="multiple") {{ selection1 ? [selection1] : '[]' }}
    //- template(#pug).
      w-radios.mb6(v-model="multiple" :items="radios" inline)
      w-flex(wrap align-center)
        w-list.grow.mr4(
          v-model="selection1"
          :items="items"
          color="deep-purple"
          :multiple="multiple"
          @item-click="itemClicked = $event")
        div(v-if="itemClicked")
          .title3 clicked item (#[span.code item-click] event):
          br
          span.code {{ itemClicked }}
      .title3.mt2
        | Selected item:
        code.ml2(v-if="!multiple || Array.isArray(selection1)") {{ selection1 || 'null' }}
        code.ml2(v-else-if="multiple") {{ selection1 ? [selection1] : '[]' }}
    template(#html).
      &lt;w-radios v-model="multiple" :items="radios" inline&gt;&lt;/w-radios&gt;

      &lt;w-flex wrap align-center&gt;
        &lt;w-list
          v-model="selection"
          :items="items"
          color="deep-purple"
          :multiple="multiple"
          @item-click="itemClicked = $event"
          class="mt6 mr4 grow"&gt;
        &lt;/w-list&gt;

        &lt;div v-if="itemClicked"&gt;
          &lt;div class="title3"&gt;Clicked item:&lt;/div&gt;
          &lt;span&gt;{{ '\{\{ itemClicked \}\}' }}&lt;/span&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;div class="title3 mt2"&gt;
        Selected item:
        &lt;code v-if="!multiple || Array.isArray(selection)" class="ml2"&gt;
          {{ '\{\{ selection || \'null\' \}\}' }}
        &lt;/code&gt;
        &lt;code v-else-if="multiple" class="ml2"&gt;
          {{ '\{\{ selection ? [selection] : \'[]\' \}\}' }}
        &lt;/code&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        radios: [
          { label: 'Single selection', value: false },
          { label: 'Multiple selections', value: true }
        ],
        multiple: false,
        items: [
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 },
          { label: 'Item 3', value: 3 },
          { label: 'Item 4', value: 4 },
          { label: 'Item 5', value: 5, disabled: true }
        ],
        selection: 2,
        itemClicked: null
      })
  p Note: you can get the list selection from the v-model, or by listening to the #[span.code input] event.

  title-link(h2) Checklists
  example
    w-flex(wrap basis-zero :gap="3")
      .grow
        .title3.mb4 Default
        w-list(
          v-model="selection3"
          :items="listItems1"
          checklist
          color="green")
      .grow
        .title3.mb4 Round checkboxes
        w-list(
          v-model="selection4"
          :items="listItems1"
          checklist
          round-checkboxes
          color="green")

    w-flex.mt4(wrap basis-zero :gap="3")
      .grow
        .title3.mb4 Custom rendering, default styles
        w-list(
          :items="listItems2"
          item-value-key="id"
          checklist
          color="primary")
          template(#item="{ item }")
            span {{ item.label }}
            .spacer
            w-icon(md) {{ item.icon }}
      .grow
        .title3.mb4 Custom rendering &amp; styles
        w-list.custom(
          :items="listItems2"
          item-value-key="id"
          checklist
          color="primary")
          template(#item="{ item }")
            span {{ item.label }}
            .spacer
            w-icon(md) {{ item.icon }}
    //- template(#pug).
      w-flex(wrap basis-zero :gap="3")
        .grow
          .title3.mb4 Default
          w-list(
            v-model="selection3"
            :items="listItems1"
            checklist
            color="green")
        .grow
          .title3.mb4 Round checkboxes
          w-list(
            v-model="selection4"
            :items="listItems1"
            checklist
            round-checkboxes
            color="green")

      w-flex.mt4(wrap basis-zero :gap="3")
        .grow
          .title3.mb4 Custom rendering, default styles
          w-list(
            :items="listItems2"
            item-value-key="id"
            checklist
            color="primary")
            template(#item="{ item }")
              span {{ item.label }}
              .spacer
              w-icon(md) {{ item.icon }}
        .grow
          .title3.mb4 Custom rendering &amp; styles
          w-list.custom(
            :items="listItems2"
            item-value-key="id"
            checklist
            color="primary")
            template(#item="{ item }")
              span {{ item.label }}
              .spacer
              w-icon(md) {{ item.icon }}
      template(#html).
      w-flex(wrap basis-zero :gap="3")
        .grow
          .title3.mb4 Default
          w-list(
            v-model="selection3"
            :items="listItems1"
            checklist
            color="green")
        .grow
          .title3.mb4 Round checkboxes
          w-list(
            v-model="selection4"
            :items="listItems1"
            checklist
            round-checkboxes
            color="green")

      w-flex.mt4(wrap basis-zero :gap="3")
        .grow
          .title3.mb4 Custom rendering, default styles
          w-list(
            :items="listItems2"
            item-value-key="id"
            checklist
            color="primary")
            template(#item="{ item }")
              span {{ item.label }}
              .spacer
              w-icon(md) {{ item.icon }}
        .grow
          .title3.mb4 Custom rendering &amp; styles
          w-list.custom(
            :items="listItems2"
            item-value-key="id"
            checklist
            color="primary")
            template(#item="{ item }")
              span {{ item.label }}
              .spacer
              w-icon(md) {{ item.icon }}
      template(#html).
      w-flex(wrap basis-zero :gap="3")
        .grow
          .title3.mb4 Default
          w-list(
            v-model="selection3"
            :items="listItems1"
            checklist
            color="green")
        .grow
          .title3.mb4 Round checkboxes
          w-list(
            v-model="selection4"
            :items="listItems1"
            checklist
            round-checkboxes
            color="green")

      w-flex.mt4(wrap basis-zero :gap="3")
        .grow
          .title3.mb4 Custom rendering, default styles
          w-list(
            :items="listItems2"
            item-value-key="id"
            checklist
            color="primary")
            template(#item="{ item }")
              span {{ item.label }}
              .spacer
              w-icon(md) {{ item.icon }}
        .grow
          .title3.mb4 Custom rendering &amp; styles
          w-list.custom(
            :items="listItems2"
            item-value-key="id"
            checklist
            color="primary")
            template(#item="{ item }")
              span {{ item.label }}
              .spacer
              w-icon(md) {{ item.icon }}
    template(#html).
      &lt;w-flex wrap basis-zero :gap="3"&gt;
        &lt;div class="grow"&gt;
          &lt;p class="title3 mb4"&gt;Default&lt;/p&gt;
          &lt;w-list
            v-model="selection1"
            :items="listItems1"
            checklist
            color="green"&gt;
          &lt;/w-list&gt;
        &lt;/div&gt;
        &lt;div class="grow"&gt;
          &lt;p class="title3 mb4"&gt;Round checkboxes&lt;/p&gt;
          &lt;w-list
            v-model="selection2"
            :items="listItems1"
            checklist
            round-checkboxes
            color="green"&gt;
          &lt;/w-list&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;w-flex wrap basis-zero :gap="3" class="mt4"&gt;
        &lt;div class="grow"&gt;
          &lt;p class="title3 mb4"&gt;Custom rendering, default styles&lt;/p&gt;
          &lt;w-list
            :items="listItems2"
            item-value-key="id"
            checklist
            color="primary"&gt;
            &lt;template #item="{ item }"&gt;
              &lt;span&gt;{{ '\{\{ item.label \}\}' }}&lt;/span&gt;
              &lt;div class="spacer"&gt;&lt;/div&gt;
              &lt;w-icon md&gt;{{ '\{\{ item.icon \}\}' }}&lt;/w-icon&gt;
            &lt;/template&gt;
          &lt;/w-list&gt;
        &lt;/div&gt;
        &lt;div class="grow"&gt;
          &lt;p class="title3 mb4"&gt;Custom rendering &amp; styles&lt;/p&gt;
          &lt;w-list
            :items="listItems2"
            item-value-key="id"
            checklist
            color="primary"
            class="custom"&gt;
            &lt;template #item="{ item }"&gt;
              &lt;span&gt;{{ '\{\{ item.label \}\}' }}&lt;/span&gt;
              &lt;div class="spacer"&gt;&lt;/div&gt;
              &lt;w-icon md&gt;{{ '\{\{ item.icon \}\}' }}&lt;/w-icon&gt;
            &lt;/template&gt;
          &lt;/w-list&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;
    template(#js).
      data: () => ({
        listItems1: [
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 },
          { label: 'Item 3', value: 3 },
          { label: 'Item 4', value: 4 },
          { label: 'Item 5', value: 5, disabled: true }
        ],
        listItems2: [
          { label: 'Star', id: 'star', icon: 'mdi mdi-star' },
          { label: 'Check', id: 'check', icon: 'mdi mdi-check' },
          { label: 'Cross', id: 'cross', icon: 'mdi mdi-close' },
          { label: 'Info', id: 'info', icon: 'mdi mdi-information' },
          { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert' },
          { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', disabled: true }
        ],
        selection1: [1, 3],
        selection2: 1
      })
    template(#css).
      .w-list.custom .w-list__item-label:before {display: none;}
      .w-list.custom .w-list__item-label label {
        position: relative;
        transition: 0.3s ease-in-out;
      }
      .w-list.custom .w-list__item-label--active label {
        opacity: 0.6;
        color: #999;
      }
      .w-list.custom .w-list__item-label label:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 0;
        border-top: 1px solid #999;
        pointer-events: none;
        transition: 0.3s ease-in-out;
      }
      .w-list.custom .w-list__item-label--active label:before {
        width: 100%;
      }

  title-link(h3) Checklist colors
  p A checklist can have all the color options that the normal list can have, even a different color per item.

  example
    w-list(v-model="selection5" :items="listItems5" checklist)
    //- template(#pug).
      w-list(v-model="selection5" :items="items" checklist)
    template(#html).
      &lt;w-list
        v-model="selection"
        :items="items"
        checklist&gt;
      &lt;/w-list&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Item 1', value: 1, color: 'amber' },
          { label: 'Item 2', value: 2, color: 'warning' },
          { label: 'Item 3', value: 3, color: 'error' },
          { label: 'Item 4', value: 4, color: 'pink' }
        ],
        selection: [1, 2, 3, 4]
      })

  title-link(h2) Navigation lists
  p.
    The navigation list expects a #[code route] attribute in the items that are links.#[br]
    If you are using Vue Router, all the links will automatically be #[strong.code router-link]s.#[br]
  p It is possible to disable a link with a #[code disabled: true] attribute in the item.
  example
    w-list(:items="listItems2" nav color="primary")
      template(#item="{ item }")
        span {{ item.label }}
        .spacer
        w-icon(md) {{ item.icon }}
    //- template(#pug).
      w-list(:items="listItems2" nav color="primary")
        template(#item="{ item }")
          span {{ item.label }}
          .spacer
          w-icon(md) {{ item.icon }}
    template(#html).
      &lt;w-list :items="items" nav color="primary"&gt;
        &lt;template #item="{ item }"&gt;
          &lt;span&gt;{{ '\{\{ item.label \}\}' }}&lt;/span&gt;
          &lt;div class="spacer"&gt;&lt;/div&gt;
          &lt;w-icon md&gt;{{ '\{\{ item.icon \}\}' }}&lt;/w-icon&gt;
        &lt;/template&gt;
      &lt;/w-list&gt;
    template(#js).
      data: () => ({
        items: [
          { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' },
          { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '/w-list/check' },
          { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '/w-list/cross' },
          { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '/w-list/info' },
          { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '/w-list/warning' },
          { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '/w-list/disabled', disabled: true }
        ]
      })
  router-view
</template>

<script>
export default {
  data: () => ({
    radios: [
      { label: 'Single selection', value: false },
      { label: 'Multiple selections', value: true }
    ],
    multiple: false,
    listItems1: [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
      { label: 'Item 4', value: 4 },
      { label: 'Item 5', value: 5, disabled: true }
    ],
    listItems2: [
      { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '/w-list/star' },
      { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '/w-list/check' },
      { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '/w-list/cross' },
      { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '/w-list/info' },
      { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '/w-list/warning' },
      { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '/w-list/disabled', disabled: true }
    ],
    listItems3: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' },
      { label: 'Item 5', disabled: true }
    ],
    listItems4: [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
      { label: 'Item 4' }
    ],
    listItems5: [
      { label: 'Item 1', value: 1, color: 'amber' },
      { label: 'Item 2', value: 2, color: 'warning' },
      { label: 'Item 3', value: 3, color: 'error' },
      { label: 'Item 4', value: 4, color: 'pink' }
    ],
    selection1: 2,
    selection2: 'check',
    selection3: [1, 3],
    selection4: 1,
    selection5: [1, 2, 3, 4],
    itemClicked: null
  })
}
</script>

<style lang="scss">
.lists-demo {max-width: 1250px;}
.lists-demo .w-list {
  &.custom .w-list__item-label:before {display: none;}
  &.custom .w-list__item-label label {
    position: relative;
    transition: 0.3s ease-in-out;
  }
  &.custom .w-list__item-label--active label {
    opacity: 0.6;
    color: #999;
  }
  &.custom .w-list__item-label label:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 0;
    border-top: 1px solid #999;
    pointer-events: none;
    transition: 0.3s ease-in-out;
  }
  &.custom .w-list__item-label--active label:before {
    width: 100%;
  }
}
</style>
