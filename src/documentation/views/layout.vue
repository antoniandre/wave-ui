<template lang="pug">
div
  h1 Layout

  h2 Layout classes
  ul
    li
      code .layout
    li
      code .flex
    li
      code .spacer

  h2 Content spacing
  p.
    Margins and paddings are incrementable from 1 to 12 using this syntax: #[span.code ma-12], #[span.code pa-7].#[br]
    You can also set a space on a single side with #[span.code l], #[span.code r], #[span.code t], #[span.code b] for left, right, top, bottom.#[br]
    #[span.code x] and #[span.code y] will set both left and right or top and bottom.
  p ma mx my ml mr mt mb
  p pa px py pl pr pt pb
</template>

<script>
export default {
}
</script>
