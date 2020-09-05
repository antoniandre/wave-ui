<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-textarea")
    .code w-textarea
    w-tag.ml3(bg-color="orange" lg color="white") In Progress

  title-link(h2)
  example
    w-textarea textarea
    template(#pug).

  title-link(h2)
  example
    w-textarea(no-autogrow rows="6") textarea
    template(#pug).
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
