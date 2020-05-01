<template lang="pug">
div(style="max-width: 900px")
  h1.headline.mt-4 #[span.code w-progress]

  w-radios(v-model="circular" :items="linearOrCircular" inline)

  h2 Default indeterminate progress &amp; colors
  w-progress(:circle="circular")
  w-progress.mt-4(:circle="circular" color="blue")
  w-progress.mt-4(:circle="circular" color="green")
  h3 Mixing colors
  w-progress.mt-4(:circle="circular" color="yellow" bg-color="cyan")

  template(v-if="circular")
    h2 Size &amp; width
    w-progress.mt-4(circle value="38" size="5em" color="blue")
    w-progress.mt-4(circle value="38" size="8em" color="blue")
    w-progress.mt-4(circle value="38" size="5em" :width="4" color="blue")
    w-progress.mt-4(circle value="38" size="8em" :width="40" color="blue")

  template(v-else)
    h2 Size
    w-progress.mt-4(value="38" :size="circular ? '5em' : '1em'" color="blue")
    w-progress.mt-4(value="38" :size="circular ? '8em' : '2.5em'" color="blue")

    h2 Tile &amp; round
    w-progress.mt-4(
      :circle="circular"
      value="38"
      size="1.4em"
      tile
      color="light-blue")
    w-progress.mt-4(
      :circle="circular"
      value="38"
      size="1.4em"
      round
      color="light-blue")

    h2 Outline &amp; shadow
    w-progress.mt-4(
      :circle="circular"
      value="38"
      size="1em"
      outline
      round
      color="light-blue")
    w-progress.mt-4(
      :circle="circular"
      value="38"
      size="1em"
      shadow
      color="light-blue")

    h2 Stripes (only if determinate)
    w-progress.mt-4(
      :circle="circular"
      value="38"
      size="1em"
      outline
      round
      color="light-blue"
      stripes)
    w-progress.mt-4(
      :circle="circular"
      value="38"
      size="1.4em"
      outline
      round
      color="primary"
      stripes)

  h2 Progress value with label
  h3 Default label
  w-progress.mt-4(
    :circle="circular"
    v-model="progress1"
    :size="circular ? '5em' : '1.3em'"
    round color="primary" label)
  w-progress.mt-4(
    :circle="circular"
    v-model="progress1"
    :size="circular ? '5em' : '1.3em'"
    outline
    round
    color="primary"
    label)

  h3 Custom label
  w-progress.mt-4(
    :circle="circular"
    v-model="progress1"
    :size="circular ? '5em' : '1.5em'"
    outline
    round
    color="primary")
    strong {{ progress1 }}% done

  h3 Providing a color for the custom label
  p.
    The color of the label should be readable on both the progress and the background.#[br]
    So you are free to decide what is the best color.
  w-progress.mt-4(
    :circle="circular"
    value="50.3"
    :size="circular ? '5em' : '2em'"
    outline
    round
    color="primary"
    label
    label-color="indigo-lighten-4")

  h3 Round linecap &amp; default flat line cap
  w-progress.mt-4(
    :circle="circular"
    value="50.3"
    :size="circular ? '5em' : '2em'"
    round
    round-cap
    color="primary")
  w-progress.mt-4(
    :circle="circular"
    value="50.3"
    :size="circular ? '5em' : '2em'"
    round
    color="primary")
</template>

<script>
export default {
  data: () => ({
    progress1: 37.76,
    linearOrCircular: [
      { label: 'Linear', value: false },
      { label: 'Circular', value: true }
    ],
    circular: false
  })
}
</script>

<style lang="scss">
.page--progress {
  .w-progress--circular {margin-right: 1em;}
}
</style>