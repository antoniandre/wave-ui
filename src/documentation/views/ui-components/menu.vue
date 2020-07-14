<template lang="pug">
div
  title-link.mt-4.code(h1) w-menu

  w-menu
    template(#activator="{ on }")
      w-button(v-on="on" primary) Show menu
    | Menu content
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
