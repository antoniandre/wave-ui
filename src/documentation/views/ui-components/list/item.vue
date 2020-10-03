<template lang="pug">
w-card(bg-color="blue-light5" title="Selected nested router view")
  .title1 List item: {{ item }}
</template>

<script>
export default {
  props: ['item']
}
</script>
