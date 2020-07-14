<template lang="pug">
div.tooltips-demo
  title-link.mt-4.code(h1) w-tooltip

  title-link(h2) Tooltip position
  .w-flex.wrap.py-6
    w-tooltip(attach-to=".tooltips-demo" left)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="primary-lighter-2") mdi mdi-home
      | Home

    w-tooltip(attach-to=".tooltips-demo" top)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="primary-lighter-2") mdi mdi-home
      | Home

    w-tooltip
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="primary-lighter-2") mdi mdi-home
      | Home

    w-tooltip(attach-to=".tooltips-demo" right)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="primary-lighter-2") mdi mdi-home
      | Home

  title-link(h2) Toggle on click
  .w-flex.wrap.align-center.py-6
    w-tooltip(attach-to=".tooltips-demo" show-on-click left)
      template(v-slot:activator="{ on }")
        w-button.ma-2(v-on="on" bg-color="info")
          w-icon.mr-1 wi-star
          | Star
      | Star

    w-tooltip(attach-to=".tooltips-demo" show-on-click right)
      template(v-slot:activator="{ on }")
        w-button.ma-2(v-on="on" bg-color="info-darker-2" dark)
          w-icon.mr-1 wi-star
          | Star
      | Star

  title-link(h2) Toggle with v-model
  .w-flex.wrap.py-6
    w-button.mr-12(
      @click="showTooltip = !showTooltip"
      bg-color="primary"
      dark
      width="6em")
      | {{ showTooltip ? 'Hide' : 'Show' }} tooltip

    w-tooltip(attach-to=".tooltips-demo" v-model="showTooltip" show-on-click left)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(attach-to=".tooltips-demo" v-model="showTooltip" show-on-click top)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(attach-to=".tooltips-demo" v-model="showTooltip" show-on-click)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(attach-to=".tooltips-demo" v-model="showTooltip" show-on-click right)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

  title-link(h2 slug="appending-to-a-dom-node") Appending to a particular DOM node
  w-alert.text-light(type="info").
    This step is important for absolute positionning (default): if you don't append
    the tooltip to the correct DOM node, you will most likely end up with a tooltip not
    following its activator on scroll.#[br]
    The DOM element that will receive the tooltip must have a position (fixed, absolute or
    relative).

  title-link(h2) Background color &amp; text color
  .w-flex.wrap.py-6
    w-tooltip(attach-to=".tooltips-demo" color="white" bg-color="blue")
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="blue") wi-star
      | Star

    w-tooltip(attach-to=".tooltips-demo" color="white" bg-color="purple")
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="purple") wi-star
      | Star

    w-tooltip(attach-to=".tooltips-demo" color="orange-darker-1" bg-color="yellow-lighter-3")
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="amber") wi-star
      | Star

    w-tooltip(attach-to=".tooltips-demo" color="orange" no-border)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl) wi-star
      | Star

  title-link(h2) Tile, round and shadow
  .w-flex.wrap.py-6
    w-tooltip(attach-to=".tooltips-demo" color="red-lighter-2" tile)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="red-lighter-2") mdi mdi-square
      | Tile
    w-tooltip(attach-to=".tooltips-demo" color="amber-darker-1" round)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="amber") mdi mdi-circle
      | Round
    w-tooltip(attach-to=".tooltips-demo" color="pink-lighter-1" shadow)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="pink-lighter-1") mdi mdi-heart
      | Shadow

  title-link(h2) Different contents
  .w-flex.wrap.py-6
    w-tooltip(attach-to=".tooltips-demo" color="primary" no-border)
      template(v-slot:activator="{ on }")
        span.ma-2.mr-8(v-on="on") Content with icon
      w-icon.mr-1 wi-star
      | Star

    w-tooltip(attach-to=".tooltips-demo" color="primary" no-border)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on" ref="truc") Very long content
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      br
      | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
      br
      br
      | Recusandae distinctio perferendis expedita pariatur fuga.

  title-link(h2) Transitions
  w-radios.my-4(inline v-model="transition" :items="transitions")
  .w-flex.wrap.py-6
    w-tooltip(attach-to=".tooltips-demo" :transition="transition" left)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
    w-tooltip(attach-to=".tooltips-demo" :transition="transition")
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
    w-tooltip(attach-to=".tooltips-demo" :transition="transition" top)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
    w-tooltip(attach-to=".tooltips-demo" :transition="transition" right)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
</template>

<script>
export default {
  data: () => ({
    showTooltip: false,
    transition: 'bounce',
    transitions: [
      { label: 'Default', value: '' },
      { label: 'Bounce', value: 'bounce' },
      { label: 'Scale', value: 'scale' },
      { label: 'Twist', value: 'twist' },
      { label: 'Fade', value: 'fade' },
      { label: 'Scale-fade', value: 'scale-fade' }
    ]
  })
}
</script>

<style lang="scss">
.tooltips-demo {position: relative;}
</style>
