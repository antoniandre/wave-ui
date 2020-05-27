<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-tooltip]

  h2 Default
  .w-flex.wrap
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
  .w-flex.wrap

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

</template>
