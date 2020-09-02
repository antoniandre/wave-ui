<template lang="pug">
div
  title-link.mt4.code(h1) w-tabs

  title-link(h2) Basic
  example
    w-tabs(:items="tabs1")

  title-link(h2) Fill bar &amp; disabled items
  example
    w-switch.mb3(v-model="tabs2.fillBar") Fill bar
    w-tabs(:items="tabs2.items" :fill-bar="tabs2.fillBar")

  title-link(h2) Colors
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background. You can also set a #[code slider-color] and an #[code active-class].

  .title3 Color &amp; bg-color
  example
    w-tabs(:items="tabs2.items" color="blue" bg-color="indigo-light5")

  .title3.mt4 Slider color
  example
    w-tabs(:items="tabs2.items" slider-color="blue-light2")

  .title3 Active class
  example
    w-tabs(
      :items="tabs2.items"
      color="blue"
      active-class="pink"
      slider-color="pink")

  title-link(h2) No slider
  example
    w-switch.mb3(v-model="tabs2.slider") Slider
    w-tabs(:items="tabs2.items" :no-slider="!tabs2.slider" active-class="pink")

  title-link(h2) Content transitions
  example
    w-radios.mb3(:items="transitions" v-model="tabs4.transition")
    w-tabs(:items="tabs4.items" :transition="tabs4.transition")

  title-link(h2) Add / remove tabs
  example
    w-flex.mb3(align-center)
      | Number of tabs:
      w-button.mx2(icon="wi-minus" sm @click="tabs3.tabsCount -= tabs3.tabsCount < 1 ? 0 : 1")
      code {{ tabs3.tabsCount }}
      w-button.mx2(icon="wi-plus" sm @click="tabs3.tabsCount++")
    w-tabs(:items="tabs3.tabsCount")
      template(#item-title="{ index }") Tab {{ index }}
      template(#item-content) Content

  title-link(h2) Card style tabs
  example
    w-tabs(:items="tabs1" card)
</template>

<script>
export default {
  data: () => ({
    tabs1: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
    ],
    tabs2: {
      items: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' },
        { title: 'Tab 4', content: 'Tab 4 content.' },
        { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }
      ],
      fillBar: true,
      slider: false
    },
    tabs3: {
      tabsCount: 3
    },
    tabs4: {
      items: [
        { title: 'Tab 1', content: 'Tab 1 content.' },
        { title: 'Tab 2', content: 'Tab 2 content.' },
        { title: 'Tab 3', content: 'Tab 3 content.' }
      ],
      transition: 'fade'
    },
    tabs5: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3', content: 'Tab 3 content.' }
    ],
    tabs6: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3', content: 'Tab 3 content.' }
    ],
    transitions: [
      { label: 'fade' },
      { label: 'slide-fade-up' },
      { label: 'slide-fade-down' },
      { label: 'slide-fade-left' },
      { label: 'slide-fade-right' },
      { label: 'slide-up' },
      { label: 'slide-down' },
      { label: 'slide-left' },
      { label: 'slide-right' },
      { label: 'scale' },
      { label: 'scale-fade' },
      { label: 'bounce' },
      { label: 'none', value: '' }
    ]
  })
}
</script>
