<template lang="pug">
div
  title-link.mt-4(h1) Layout

  title-link(h2) Layout classes
  ul
    li
      code .w-flex
      p column, wrap
    li.mt-1
      code .grow, .no-grow
      p
    li.mt-1
      code .shrink, .no-shrink
      p
    li.mt-1
      code .spacer
    li.mt-1
      code .fill-height

  title-link(h2) Content spacing
  p.
    Margins and paddings are incrementable from 1 to 12 using this syntax: #[span.code ma-12], #[span.code pa-7].#[br]
    You can also set a space on a single side with #[span.code l], #[span.code r], #[span.code t], #[span.code b] for left, right, top, bottom.#[br]
    #[span.code x] and #[span.code y] will set both left and right or top and bottom.
  p ma mx my ml mr mt mb
  p pa px py pl pr pt pb

  title-link(h2) Grid system
  p 12-cell based.
</template>

<script>
export default {
}
</script>
