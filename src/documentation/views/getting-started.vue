<template lang="pug">
div
  h1.headline
    | Wave UI
  P An emerging new UI framework for Vue.js with only the bright side.
  p Like other UI frameworks, it is very flexible and easy to use. But Wave UI is also:
  ul
    li Lightweight
    li Very easy to override via CSS
    li No #[span.code !important] everywhere
    li No useless DOM wrappers inside UI elements
    li Not written in pixels but in #[span.code rem]

  h2 Presets
  h3 Buttons
  span.code w-btn { small: true, outlined: true, round: true }

  h2 Layout classes
  ul
    li
      code .layout
    li
      code .flex

  h2 Content spacing
  p.
    Margins and paddings are incrementable from 1 to 12 using this syntax: #[span.code ma-12], #[span.code pa-7].#[br]
    You can also set a space on a single side with #[span.code l], #[span.code r], #[span.code t], #[span.code b] for left, right, top, bottom.#[br]
    #[span.code x] and #[span.code y] will set both left and right or top and bottom.
  p ma mx my ml mr mt mb
  p pa px py pl pr pt pb

  h2 Color palette
  p.
    red
    pink
    purple
    deepPurple
    indigo
    blue
    lightBlue
    cyan
    teal
    green
    lightGreen
    lime
    yellow
    amber
    orange
    deepOrange
    brown
    blueGrey
    grey
    white
    black
</template>

<script>
export default {
}
</script>
