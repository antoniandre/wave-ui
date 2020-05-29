<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-tooltip]

  h2 Default
  .w-flex.wrap.py-6
    w-tooltip(left)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Home
      | Home

    w-tooltip(top)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Home
      | Home

    w-tooltip
      template(v-slot:activator="{ on }")
        //- w-icon(xl v-on="on") mdi mdi-home
        span.ma-2(v-on="on") Home
      | Home

    w-tooltip(right)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Home
      | Home

  h2 Toggle on click
  .w-flex.wrap.py-6
    w-tooltip(show-on-click left)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(show-on-click top)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
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
  w-button(bg-color="primary" dark @click="showTooltip = !showTooltip")
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

  h2 Background color &amp; color
  .w-flex.wrap.py-6
    w-tooltip(color="white" bg-color="blue")
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(color="white" bg-color="purple")
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(color="orange" bg-color="yellow-lighten-3")
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
      | Star

    w-tooltip(color="orange" no-border)
      template(v-slot:activator="{ on }")
        span.ma-2(v-on="on") Star
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
        span.ma-2(v-on="on") Very long content
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      br
      | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
      br
      br
      | Recusandae distinctio perferendis expedita pariatur fuga.
</template>

<script>
export default {
  data: () => ({
    showTooltip: false
  })
}
</script>
