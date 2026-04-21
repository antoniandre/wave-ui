<template lang="pug">
.w-accordion__item-content
  slot
</template>

<script>
// Keep-alive only works with components, not with DOM nodes.

export default {
  name: 'accordion-content', // Keep-alive include/exclude mechanism is component-name-based.

  props: { item: { type: Object, default: () => ({}) } }
}
</script>
