<template lang="pug">
transition(name="fade" v-bind="$props")
  slot
</template>

<script>
export default {
  name: 'w-transition-fade',
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}
</script>
