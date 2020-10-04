<template lang="pug">
w-card(bg-color="blue-light5" title="Nested &lt;router-view&gt;" title-class="title3")
  .title1 Selected list item: {{ item }}
</template>

<script>
export default {
  props: ['item']
}
</script>
