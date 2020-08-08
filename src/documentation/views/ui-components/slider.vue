<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-slider")
    | w-slider
    w-tag.ml3(bg-color="orange" color="white" lg) In progress

  title-link(h2) Default
  example(content-class="mt2")
    w-slider(:value="33")
    w-slider.mt12
</template>

<script>
export default {

}
</script>
