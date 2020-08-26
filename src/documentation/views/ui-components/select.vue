<template lang="pug">
div
  title-link.mt4(h1 slug="w-select")
    .code w-select
    w-tag.ml3(bg-color="orange" lg color="white") In Progress

  w-select(:items="[{ label: 'Item 1' }, { label: 'Item 2' }]")
</template>

<script>
export default {

}
</script>
