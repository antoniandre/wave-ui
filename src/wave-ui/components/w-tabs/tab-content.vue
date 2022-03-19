<template lang="pug">
.w-tabs__content
  slot(:item="item")
</template>

<script>
// Keep-alive only works with components, not with DOM nodes.
export default {
  props: { item: Object }
}
</script>
