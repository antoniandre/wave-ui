<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-tag]

  h2 Default tag
  w-tag Test

  h2 Colors
  w-tag.mr-2(color="primary") Test
  w-tag.mr-2(bg-color="primary" dark) Test
  w-tag.mr-2(bg-color="primary" color="white") Test
  h3 Mixing colors
  w-tag.mr-2(bg-color="primary" color="yellow") Test

  h2 Closable tag
  w-tag(v-model="tagOn" close color="primary") Test
</template>

<script>
export default {
  data: () => ({
    tagOn: true
  })
}
</script>
