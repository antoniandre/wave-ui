<template lang="pug">
.w-tabs__content
  slot(:item="item")
</template>

<script>
// Keep-alive only works with components, not with DOM nodes.

export default {
  name: 'tab-content', // Keep-alive include/exclude mechanism is component-name-based.

  props: { item: Object }
}
</script>
