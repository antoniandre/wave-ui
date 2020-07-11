<template lang="pug">
div
  title-link.mt-4.code(h1) w-tag

  title-link(h2) Default tag
  w-tag Tag

  title-link(h2) Colors
  w-tag.mr-2(color="primary") Tag
  w-tag.mr-2(bg-color="primary" dark) Tag
  w-tag.mr-2(bg-color="primary" color="white") Tag
  h3 Mixing colors
  w-tag.mr-2(v-model="tagOn3" bg-color="primary" color="yellow") Tag

  title-link(h2) Round &amp; tile
  w-tag.mr-2(color="primary" round) Round
  w-tag(color="primary" tile) Tile

  title-link(h2) Shadow
  w-tag(color="primary" shadow) Round

  title-link(h2) Sizes
  .w-flex.align-center.ma-n1
    w-tag.ma-1(color="primary" xs) Extra small
    w-tag.ma-1(color="primary" sm) Small
    w-tag.ma-1(color="primary" md) Medium
    w-tag.ma-1(color="primary" lg) Large
    w-tag.ma-1(color="primary" xl) Extra large

  title-link(h2) Togglable state &amp; closable
  w-tag(v-model="tagOn1" color="primary" toggle) With v-model

  h3 Closable tag
  w-tag(v-model="tagOn2" close color="primary") v-model &amp; close

  title-link(h2) Custom content
  w-tag(v-model="tagOn3" color="pink-lighter-1" bg-color="pink-lighter-5")
    w-icon.mr-1(sm) mdi mdi-heart
    | Like it
</template>

<script>
export default {
  data: () => ({
    tagOn1: true,
    tagOn2: true,
    tagOn3: true
  })
}
</script>
