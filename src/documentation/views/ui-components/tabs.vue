<template lang="pug">
div
  title-link.mt4.code(h1) w-tabs

  title-link(h2) Basic
  example
    w-tabs(:items="tabs1")

  title-link(h2) Fill bar &amp; disabled items
  example
    w-tabs(:items="tabs2" fill-bar)

  title-link(h2) Colors
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background. You can also set a #[code slider-color] and an #[code active-class].

  .title3.mt4 Slider color
  example
    w-tabs(:items="tabs3" fill-bar slider-color="blue-light2")

  .title3 Active class
  example
    w-tabs(
      :items="tabs3"
      fill-bar
      color="blue"
      active-class="pink"
      slider-color="pink")

  .title3 Color &amp; bg-color
  example
    w-tabs(
      :items="tabs3"
      fill-bar
      color="blue"
      bg-color="indigo-light5")
</template>

<script>
export default {
  data: () => ({
    tabs1: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3 has a long title', content: 'Tab 3 content.' },
    ],
    tabs2: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3', content: 'Tab 3 content.', disabled: true },
    ],
    tabs3: [
      { title: 'Tab 1', content: 'Tab 1 content.' },
      { title: 'Tab 2', content: 'Tab 2 content.' },
      { title: 'Tab 3', content: 'Tab 3 content.' },
    ]
  })
}
</script>
