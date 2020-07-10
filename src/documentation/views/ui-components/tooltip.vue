<template lang="pug">
div.tooltips-wrapper
  h1.headline.mt-4 #[span.code w-tooltip]

  h2 Default
  .w-flex.wrap.py-6
    w-tooltip(left)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl) mdi mdi-home
      | Home

    w-tooltip(top)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl) mdi mdi-home
      | Home

    w-tooltip
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl) mdi mdi-home
      | Home

    w-tooltip(right)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl) mdi mdi-home
      | Home

  h2 Toggle on click
  .w-flex.wrap.align-center.py-6
    w-tooltip(show-on-click left)
      template(v-slot:activator="{ on }")
        w-button.ma-2(v-on="on" bg-color="info")
          w-icon.mr-1 wi-star
          | Star
      | Star

    w-tooltip(show-on-click top)
      template(v-slot:activator="{ on }")
        w-button.ma-2(v-on="on" bg-color="info-darker-2" dark)
          w-icon.mr-1 wi-star
          | Star
      | Star

    w-tooltip(show-on-click)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(show-on-click right)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

  h2 Toggle with v-model
  w-button(
    @click="showTooltip = !showTooltip"
    bg-color="primary"
    dark
    width="7em")
    | {{ showTooltip ? 'Hide' : 'Show' }} tooltip

  .w-flex.wrap.py-6
    w-tooltip(v-model="showTooltip" show-on-click left)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click top)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click right)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

  h2 Background color &amp; text color
  .w-flex.wrap.py-6
    w-tooltip(color="white" bg-color="blue")
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="blue") wi-star
      | Star

    w-tooltip(color="white" bg-color="purple")
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="purple") wi-star
      | Star

    w-tooltip(color="orange" bg-color="yellow-lighter-3")
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="amber") wi-star
      | Star

    w-tooltip(color="orange" no-border)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl color="") wi-star
      | Star

  h2 Different contents
  .w-flex.wrap.py-6
    w-tooltip(color="primary" no-border)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Content with icon
      w-icon.mr-1 wi-star
      | Star

    w-tooltip(color="primary" no-border)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on" ref="truc") Very long content
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      br
      | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
      br
      br
      | Recusandae distinctio perferendis expedita pariatur fuga.

  h2 Transitions
    w-tooltip(transition="bounce")
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl) mdi mdi-home
      | Home
    w-tooltip(transition="bounce" top)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl) mdi mdi-home
      | Home
    w-tooltip(transition="bounce" left)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl) mdi mdi-home
      | Home
    w-tooltip(transition="bounce" right)
      template(v-slot:activator="{ on }")
        w-icon.ma-2(v-on="on" xl) mdi mdi-home
      | Home
</template>

<script>
export default {
  data: () => ({
    showTooltip: false
  })
}
</script>

<style lang="scss">
.tooltips-wrapper {position: relative;}
</style>