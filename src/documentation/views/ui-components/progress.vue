<template lang="pug">
div(style="max-width: 900px")
  title-link.mt-4.code(h1) w-progress

  w-radios.subtitle(v-model="circular" :items="linearOrCircular" inline)

  title-link(h2) Default indeterminate progress &amp; colors
  w-progress(:circle="circular")
  w-progress.mt-4(:circle="circular" color="blue")
  w-progress.mt-4(:circle="circular" color="green")
  h3 Mixing colors
  w-progress.mt-4(:circle="circular" color="yellow" bg-color="cyan")

  template(v-if="circular")
    title-link(h2) Size &amp; stroke thickness
    w-progress.mt-4(circle value="50" color="blue")
    w-progress.mt-4(circle value="50" size="4em" color="blue")
    w-progress.mt-4(circle value="50" size="5em" color="blue")
    w-progress.mt-4(circle value="50" size="6em" :stroke="2" color="blue")
    w-progress.mt-4(circle value="50" size="6em" :stroke="15" color="blue")
    w-progress.mt-4(circle value="50" size="6em" :stroke="40" color="blue")

  template(v-else)
    title-link(h2) Size
    w-progress.mt-4(value="38" size="1em" color="blue")
    w-progress.mt-4(value="38" size="2.5em" color="blue")

    title-link(h2) Tile &amp; round
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

    title-link(h2) Outline &amp; shadow
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

    title-link(h2) Stripes (only if determinate)
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

  title-link(h2) Progress value with label
  h3 Default label
  w-progress.mt-4(
    :circle="circular"
    v-model="progress1"
    :size="circular ? '3em' : '1.3em'"
    round color="primary" label)
  w-progress.mt-4(
    :circle="circular"
    v-model="progress1"
    :size="circular ? '3em' : '1.3em'"
    outline
    round
    label)

  h3 Custom label
  w-progress.mt-4(
    :circle="circular"
    v-model="progress1"
    :size="circular ? '5em' : '1.5em'"
    outline
    round)
    strong {{ progress1 }}%

  h3 Providing a color for the custom label
  p(v-if="!circular").
    The color of the label should be readable on both the progress and the background.#[br]
    So you are free to decide what is the best color.
  w-progress.mt-4(
    :circle="circular"
    value="50.3"
    :size="circular ? '3em' : '2em'"
    outline
    round
    label
    label-color="indigo-lighter-4")

  h3 Round linecap &amp; default flat line cap
  w-progress.mt-4(
    :circle="circular"
    value="50.3"
    :size="circular ? '6em' : '2em'"
    round
    round-cap)
  w-progress.mt-4(
    :circle="circular"
    value="50.3"
    :size="circular ? '6em' : '2em'"
    round)
</template>

<script>
export default {
  data: () => ({
    progress1: 37.86,
    progress: 0,
    linearOrCircular: [
      { label: 'Linear', value: false },
      { label: 'Circular', value: true }
    ],
    circular: true
  }),

  mounted () {
    // Emulating progress.
    // const interval = setInterval(() => {
    //   this.progress += 10
    //   if (this.progress === 100) this.progress = 0
    // }, 700)
  }
}
</script>

<style lang="scss">
.page--progress {
  .w-progress--circular {margin-right: 1em;}
}
</style>