<template lang="pug">
div.tooltips-demo
  title-link.mt4.code(h1) w-tooltip

  title-link(h2) Tooltip position
  example(content-class="text-center")
    w-tooltip(left)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
      | Home

    w-tooltip(top)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
      | Home

    w-tooltip
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
      | Home

    w-tooltip(right)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
      | Home
    template(#pug).
      .text-center
        w-tooltip(left)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
          | Home

        w-tooltip(top)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
          | Home

        w-tooltip
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
          | Home

        w-tooltip(right)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
          | Home

  title-link(h2) Toggle on click
  example(content-class="text-center")
    w-tooltip(show-on-click left)
      template(#activator="{ on }")
        w-button.ma2(v-on="on" bg-color="info")
          w-icon.mr1 wi-star
          | Star
      | Star

    w-tooltip(show-on-click right)
      template(#activator="{ on }")
        w-button.ma2(v-on="on" bg-color="info-dark2" dark)
          w-icon.mr1 wi-star
          | Star
      | Star
    template(#pug).
      .text-center
        w-tooltip(show-on-click left)
          template(#activator="{ on }")
            w-button.ma2(v-on="on" bg-color="info")
              w-icon.mr1 wi-star
              | Star
          | Star

        w-tooltip(show-on-click right)
          template(#activator="{ on }")
            w-button.ma2(v-on="on" bg-color="info-dark2" dark)
              w-icon.mr1 wi-star
              | Star
          | Star

  title-link(h2) Toggle with v-model
  example(content-class="text-center my4")
    w-button.my2.mx6(
      @click="showTooltip = !showTooltip"
      bg-color="primary"
      dark
      width="6em")
      | {{ showTooltip ? 'Hide' : 'Show' }} tooltip

    div.d-iblock.my2.mx6
      w-tooltip.ma2(v-model="showTooltip" show-on-click left)
        template(#activator="{ on }")
          span(v-on="on") Star
        | Star

      w-tooltip.ma2(v-model="showTooltip" show-on-click top)
        template(#activator="{ on }")
          span(v-on="on") Star
        | Star

      w-tooltip.ma2(v-model="showTooltip" show-on-click)
        template(#activator="{ on }")
          span(v-on="on") Star
        | Star

      w-tooltip.ma2(v-model="showTooltip" show-on-click right)
        template(#activator="{ on }")
          span(v-on="on") Star
        | Star

    template(#pug).
      .text-center
        w-button.my2.mx6(
          @click="showTooltip = !showTooltip"
          bg-color="primary"
          dark
          width="6em")
          | {{ '\{\{ showTooltip ? \'Hide\' : \'Show\' \}\}' }} tooltip

        div.d-iblock.my2.mx6
          w-tooltip.ma2(v-model="showTooltip" show-on-click left)
            template(#activator="{ on }")
              span(v-on="on") Star
            | Star

          w-tooltip.ma2(v-model="showTooltip" show-on-click top)
            template(#activator="{ on }")
              span(v-on="on") Star
            | Star

          w-tooltip.ma2(v-model="showTooltip" show-on-click)
            template(#activator="{ on }")
              span(v-on="on") Star
            | Star

          w-tooltip.ma2(v-model="showTooltip" show-on-click right)
            template(#activator="{ on }")
              span(v-on="on") Star
            | Star

    template(#js).
      data: () => ({
        showTooltip: false
      })

  title-link(h2) Background color &amp; text color
  example(content-class="text-center pb8")
    w-tooltip(color="white" bg-color="blue")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="blue") wi-star
      | Star

    w-tooltip(color="white" bg-color="purple")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="purple") wi-star
      | Star

    w-tooltip(color="orange-dark1" bg-color="yellow-light3")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="amber") wi-star
      | Star

    w-tooltip(color="orange")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl) wi-star
      | Star
    template(#pug).
      .text-center.pb8
        w-tooltip(color="white" bg-color="blue")
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="blue") wi-star
          | Star

        w-tooltip(color="white" bg-color="purple")
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="purple") wi-star
          | Star

        w-tooltip(color="orange-dark1" bg-color="yellow-light3")
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="amber") wi-star
          | Star

        w-tooltip(color="orange")
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl) wi-star
          | Star

  title-link(h2) Tile, round and shadow
  example(content-class="text-center pb8")
    w-tooltip(color="red-light2" tile)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="red-light2") mdi mdi-square
      | Tile
    w-tooltip(color="amber-dark1" round)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="amber") mdi mdi-circle
      | Round
    w-tooltip(color="pink-light1" shadow)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" xl color="pink-light1") mdi mdi-heart
      | Shadow
    template(#pug).
      .text-center.pb8
        w-tooltip(color="red-light2" tile)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="red-light2") mdi mdi-square
          | Tile
        w-tooltip(color="amber-dark1" round)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="amber") mdi mdi-circle
          | Round
        w-tooltip(color="pink-light1" shadow)
          template(#activator="{ on }")
            w-icon.ma2(v-on="on" xl color="pink-light1") mdi mdi-heart
          | Shadow

  title-link(h2) Different contents
  example(content-class="text-center")
    w-tooltip.ma3(color="primary")
      template(#activator="{ on }")
        span(v-on="on") Content with icon
      w-icon.mr1 wi-star
      | Star

    w-tooltip.ma3(color="primary")
      template(#activator="{ on }")
        span(v-on="on" ref="truc") Very long content
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      br
      | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
      br
      br
      | Recusandae distinctio perferendis expedita pariatur fuga.
    template(#pug).
      .text-center
        w-tooltip.ma3(color="primary")
          template(#activator="{ on }")
            span(v-on="on") Content with icon
          w-icon.mr1 wi-star
          | Star

        w-tooltip.ma3(color="primary")
          template(#activator="{ on }")
            span(v-on="on" ref="truc") Very long content
          | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          br
          | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
          br
          br
          | Recusandae distinctio perferendis expedita pariatur fuga.

  title-link(h2) Transitions
  example(content-class="text-center")
    w-radios.my4(inline v-model="transition" :items="transitions")
    .text-center.py6
      w-tooltip(:transition="transition" left)
        template(#activator="{ on }")
          w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
        | Home
      w-tooltip(:transition="transition")
        template(#activator="{ on }")
          w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
        | Home
      w-tooltip(:transition="transition" top)
        template(#activator="{ on }")
          w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
        | Home
      w-tooltip(:transition="transition" right)
        template(#activator="{ on }")
          w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
        | Home
    template(#pug).
      .text-center
        w-radios.my4(inline v-model="transition" :items="transitions")
        .text-center.py6
          w-tooltip(:transition="transition" left)
            template(#activator="{ on }")
              w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
            | Home
          w-tooltip(:transition="transition")
            template(#activator="{ on }")
              w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
            | Home
          w-tooltip(:transition="transition" top)
            template(#activator="{ on }")
              w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
            | Home
          w-tooltip(:transition="transition" right)
            template(#activator="{ on }")
              w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
            | Home

    template(#js).
      data: () => ({
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

  title-link(h2 slug="appending-to-a-dom-node") Appending to a particular DOM node
  w-alert.text-light(type="info").
    This step is important for absolute positionning (default): if you don't append
    the tooltip to the correct DOM node, you will most likely end up with a tooltip not
    following its activator on scroll.#[br]
    The DOM element that will receive the tooltip must have a position (fixed, absolute or
    relative).
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
.tooltips-demo {
  position: relative;

  .example__render {overflow: visible;}
}
</style>
