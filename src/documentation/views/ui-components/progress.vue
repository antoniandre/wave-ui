<template lang="pug">
div(style="max-width: 900px")
  h1.headline.mt-4 #[span.code w-progress]

  h2 Default indeterminate progress &amp; colors
  w-progress
  w-progress.mt-4(color="blue")
  w-progress.mt-4(color="green")
  h3 Mixing colors
  w-progress.mt-4(color="yellow" bg-color="cyan")

  h2 Size
  w-progress.mt-4(value="38" size="1em" color="blue")
  w-progress.mt-4(value="38" size="2.5em" color="blue")

  h2 Tile &amp; round
  w-progress.mt-4(value="38" size="1.4em" tile color="light-blue")
  w-progress.mt-4(value="38" size="1.4em" round color="light-blue")

  h2 Outline &amp; shadow
  w-progress.mt-4(value="38" size="1em" outline round color="light-blue")
  w-progress.mt-4(value="38" size="1em" shadow color="light-blue")

  h2 Stripes (only if determinate)
  w-progress.mt-4(value="38" size="1em" outline round color="light-blue" stripes)
  w-progress.mt-4(value="38" size="1.4em" outline round color="primary" stripes)

  //- h2 Indeterminate (can't have stripes)
  //- w-progress.mt-4(size="1em" outline round color="primary")
  //- w-progress.mt-4(size="1em" round color="primary")

  h2 Progress value with label
  h3 Default label
  w-progress.mt-4(v-model="progress1" size="1.3em" round color="primary" label)
  w-progress.mt-4(v-model="progress1" size="1.3em" outline round color="primary" label)

  h3 Custom label
  w-progress.mt-4(v-model="progress1" size="1.5em" outline round color="primary")
    strong {{ progress1 }}% done

  h3 Providing a color for the custom label
  p.
    The color of the label should be readable on both the progress and the background.#[br]
    So you are free to decide what is the best color.
  w-progress.mt-4(value="50.3" size="2em" outline round color="primary" label label-color="indigo-lighten-4")
</template>

<script>
export default {
  data: () => ({
    progress1: 37.76
  })
}
</script>

<style lang="scss">

</style>