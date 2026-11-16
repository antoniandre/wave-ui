<template lang="pug">
div
  title-link(h2) Default
  p.
    By default #[code w-buttons] renders a stuck group of buttons.
    The first active button uses the #[code primary] color as background.
    Inactive buttons use the transparent (text) style.
  example
    w-buttons(v-model="ex1" :items="items1")
    template(#pug).
      w-buttons(v-model="active" :items="items")
    template(#html).
      &lt;w-buttons v-model="active" :items="items"&gt;&lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active: 1,
        items: [
          { label: '7 days' },
          { label: '30 days' },
          { label: '365 days' }
        ]
      })

  title-link(h2) Active color
  p.
    Use #[code active-bg-color] and #[code active-color] to customise the active button appearance.
    #[code color] sets the text color of inactive buttons.
  example
    w-buttons.mr6(v-model="ex2a" :items="items1" active-bg-color="success")
    w-buttons.mr6(v-model="ex2b" :items="items1" active-bg-color="error" color="error")
    w-buttons(v-model="ex2c" :items="items1" active-bg-color="info" outline)
    template(#pug).
      w-buttons(v-model="active1" :items="items" active-bg-color="success")
      w-buttons(v-model="active2" :items="items" active-bg-color="error" color="error")
      w-buttons(v-model="active3" :items="items" active-bg-color="info" outline)
    template(#html).
      &lt;w-buttons v-model="active1" :items="items" active-bg-color="success"&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active2" :items="items" active-bg-color="error" color="error"&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active3" :items="items" active-bg-color="info" outline&gt;&lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active1: 0,
        active2: 1,
        active3: 2,
        items: [
          { label: '7 days' },
          { label: '30 days' },
          { label: '365 days' }
        ]
      })

  title-link(h2) Outline style
  p.
    Set #[code outline] to give inactive buttons an outlined look.
  example
    w-buttons(v-model="ex3" :items="items1" outline)
    template(#pug).
      w-buttons(v-model="active" :items="items" outline)
    template(#html).
      &lt;w-buttons v-model="active" :items="items" outline&gt;&lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active: 0,
        items: [
          { label: '7 days' },
          { label: '30 days' },
          { label: '365 days' }
        ]
      })

  title-link(h2) Multiple selection
  p.
    Set #[code multiple] to allow more than one button to be active at once.
    The #[code v-model] becomes an array.
  example
    w-buttons(v-model="ex4" :items="items4" multiple)
    p.mt3 Active: #[strong {{ ex4 }}]
    template(#pug).
      w-buttons(v-model="active" :items="items" multiple)
      p Active: {{ active }}
    template(#html).
      &lt;w-buttons v-model="active" :items="items" multiple&gt;&lt;/w-buttons&gt;
      &lt;p&gt;Active: {{ active }}&lt;/p&gt;
    template(#js).
      data: () => ({
        active: [0, 2],
        items: [
          { label: 'Bold' },
          { label: 'Italic' },
          { label: 'Underline' }
        ]
      })

  title-link(h2) Mandatory
  p.
    Set #[code mandatory] to prevent the group from having no active button.
    Clicking the only active button will not deactivate it.
  example
    w-buttons(v-model="ex5" :items="items1" mandatory)
    template(#pug).
      w-buttons(v-model="active" :items="items" mandatory)
    template(#html).
      &lt;w-buttons v-model="active" :items="items" mandatory&gt;&lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active: 1,
        items: [
          { label: '7 days' },
          { label: '30 days' },
          { label: '365 days' }
        ]
      })

  title-link(h2) Item value key
  p.
    By default the v-model uses the 0-based item index.
    If all items have an #[code id] field it is used automatically; likewise for #[code value].
    Use #[code item-value-key] to specify a custom key explicitly.
  example
    w-buttons(v-model="ex6" :items="items6")
    p.mt3 Active id: #[strong {{ ex6 }}]
    template(#pug).
      w-buttons(v-model="activeId" :items="items")
      p Active id: {{ activeId }}
    template(#html).
      &lt;w-buttons v-model="activeId" :items="items"&gt;&lt;/w-buttons&gt;
      &lt;p&gt;Active id: {{ activeId }}&lt;/p&gt;
    template(#js).
      data: () => ({
        activeId: 'w',
        items: [
          { id: 'd', label: 'Day' },
          { id: 'w', label: 'Week' },
          { id: 'm', label: 'Month' }
        ]
      })

  title-link(h2) Gap
  p.
    Set the #[code gap] prop to separate the buttons. The value is multiplied by the base increment
    (like in #[code w-flex]). Each button is fully independent — with its own border, radius, and shadow.
  example
    w-buttons.mr6(v-model="ex7a" :items="items1" :gap="2")
    w-buttons(v-model="ex7b" :items="items1" :gap="2" round)
    template(#pug).
      w-buttons(v-model="active1" :items="items" :gap="2")
      w-buttons(v-model="active2" :items="items" :gap="2" round)
    template(#html).
      &lt;w-buttons v-model="active1" :items="items" :gap="2"&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active2" :items="items" :gap="2" round&gt;&lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active1: 0,
        active2: 1,
        items: [
          { label: '7 days' },
          { label: '30 days' },
          { label: '365 days' }
        ]
      })

  title-link(h2) Round, tile &amp; shadow
  p.
    #[code round] makes the outer shape pill-shaped in stuck mode and each button individually round in gap mode.
    #[code tile] removes all border radius.
    #[code shadow] adds a drop shadow to the wrapper in stuck mode and to each button in gap mode.
  example
    .w-flex.wrap.gap4
      div
        p.caption Round (stuck)
        w-buttons(v-model="ex8a" :items="items1" round)
      div
        p.caption Round (gap)
        w-buttons(v-model="ex8b" :items="items1" :gap="2" round)
      div
        p.caption Tile
        w-buttons(v-model="ex8c" :items="items1" tile)
      div
        p.caption Shadow (stuck)
        w-buttons(v-model="ex8d" :items="items1" shadow)
      div
        p.caption Shadow (gap)
        w-buttons(v-model="ex8e" :items="items1" :gap="2" shadow)
    template(#pug).
      w-buttons(v-model="active" :items="items" round)
      w-buttons(v-model="active" :items="items" :gap="2" round)
      w-buttons(v-model="active" :items="items" tile)
      w-buttons(v-model="active" :items="items" shadow)
      w-buttons(v-model="active" :items="items" :gap="2" shadow)
    template(#html).
      &lt;w-buttons v-model="active" :items="items" round&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active" :items="items" :gap="2" round&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active" :items="items" tile&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active" :items="items" shadow&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active" :items="items" :gap="2" shadow&gt;&lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active: 1,
        items: [
          { label: '7 days' },
          { label: '30 days' },
          { label: '365 days' }
        ]
      })

  title-link(h2) Disabled
  p.
    Use the global #[code disabled] prop to disable the entire group, or set #[code disabled: true]
    on individual items in the #[code items] array.
  example
    w-buttons.mr6(v-model="ex9a" :items="items1" disabled)
    w-buttons(v-model="ex9b" :items="items9")
    template(#pug).
      //- Global disabled
      w-buttons(v-model="active" :items="items" disabled)
      //- Per-item disabled
      w-buttons(v-model="active" :items="itemsWithDisabled")
    template(#html).
      &lt;!-- Global disabled --&gt;
      &lt;w-buttons v-model="active" :items="items" disabled&gt;&lt;/w-buttons&gt;
      &lt;!-- Per-item disabled --&gt;
      &lt;w-buttons v-model="active" :items="itemsWithDisabled"&gt;&lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active: 1,
        items: [
          { label: '7 days' },
          { label: '30 days' },
          { label: '365 days' }
        ],
        itemsWithDisabled: [
          { label: '7 days' },
          { label: '30 days' },
          { label: '365 days', disabled: true }
        ]
      })

  title-link(h2) Custom slot
  p.
    Use the default slot to customise the content of each button.
    The slot receives #[code { item, index, active }].
  example
    w-buttons(v-model="ex10" :items="items10")
      template(#default="{ item, active }")
        w-icon.mr1(:color="active ? 'white' : item.color") {{ item.icon }}
        | {{ item.label }}
    template(#pug).
      w-buttons(v-model="active" :items="items")
        template(#default="{ item, active }")
          w-icon.mr1(:color="active ? 'white' : item.color") {{ item.icon }}
          | {{ item.label }}
    template(#html).
      &lt;w-buttons v-model="active" :items="items"&gt;
        &lt;template #default="{ item, active }"&gt;
          &lt;w-icon class="mr1" :color="active ? 'white' : item.color"&gt;{{ item.icon }}&lt;/w-icon&gt;
          {{ item.label }}
        &lt;/template&gt;
      &lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active: 0,
        items: [
          { label: 'Success', icon: 'mdi mdi-check-circle-outline', color: 'success' },
          { label: 'Warning', icon: 'mdi mdi-alert-outline', color: 'warning' },
          { label: 'Error', icon: 'mdi mdi-close-circle-outline', color: 'error' }
        ]
      })

  title-link(h2) Slot mode
  p.
    When no #[code items] prop is provided you can place #[code w-button] elements directly in the
    default slot. The #[code v-model] still controls the active state by button index.
  example
    w-buttons(v-model="ex11")
      w-button Day
      w-button Week
      w-button Month
    template(#pug).
      w-buttons(v-model="active")
        w-button Day
        w-button Week
        w-button Month
    template(#html).
      &lt;w-buttons v-model="active"&gt;
        &lt;w-button&gt;Day&lt;/w-button&gt;
        &lt;w-button&gt;Week&lt;/w-button&gt;
        &lt;w-button&gt;Month&lt;/w-button&gt;
      &lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active: 0
      })

  title-link(h2) Sizes
  p.
    The same size presets as #[code w-button] are available: #[code xs], #[code sm], #[code md],
    #[code lg], #[code xl].
  example
    .w-flex.column.gap3.align-start
      w-buttons(v-model="ex12" :items="items1" xs)
      w-buttons(v-model="ex12" :items="items1" sm)
      w-buttons(v-model="ex12" :items="items1")
      w-buttons(v-model="ex12" :items="items1" lg)
      w-buttons(v-model="ex12" :items="items1" xl)
    template(#pug).
      w-buttons(v-model="active" :items="items" xs)
      w-buttons(v-model="active" :items="items" sm)
      w-buttons(v-model="active" :items="items")
      w-buttons(v-model="active" :items="items" lg)
      w-buttons(v-model="active" :items="items" xl)
    template(#html).
      &lt;w-buttons v-model="active" :items="items" xs&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active" :items="items" sm&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active" :items="items"&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active" :items="items" lg&gt;&lt;/w-buttons&gt;
      &lt;w-buttons v-model="active" :items="items" xl&gt;&lt;/w-buttons&gt;
    template(#js).
      data: () => ({
        active: 1,
        items: [
          { label: '7 days' },
          { label: '30 days' },
          { label: '365 days' }
        ]
      })
</template>

<script>
export default {
  data: () => ({
    items1: [
      { label: '7 days' },
      { label: '30 days' },
      { label: '365 days' }
    ],
    ex1: 1,
    ex2a: 0, ex2b: 1, ex2c: 2,
    ex3: 0,
    items4: [
      { label: 'Bold' },
      { label: 'Italic' },
      { label: 'Underline' }
    ],
    ex4: [0, 2],
    ex5: 1,
    items6: [
      { id: 'd', label: 'Day' },
      { id: 'w', label: 'Week' },
      { id: 'm', label: 'Month' }
    ],
    ex6: 'w',
    ex7a: 0, ex7b: 1,
    ex8a: 1, ex8b: 1, ex8c: 1, ex8d: 1, ex8e: 1,
    items9: [
      { label: '7 days' },
      { label: '30 days' },
      { label: '365 days', disabled: true }
    ],
    ex9a: 1, ex9b: 0,
    items10: [
      { label: 'Success', icon: 'mdi mdi-check-circle-outline', color: 'success' },
      { label: 'Warning', icon: 'mdi mdi-alert-outline', color: 'warning' },
      { label: 'Error', icon: 'mdi mdi-close-circle-outline', color: 'error' }
    ],
    ex10: 0,
    ex11: 0,
    ex12: 1
  })
}
</script>
