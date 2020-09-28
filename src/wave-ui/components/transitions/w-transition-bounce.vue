<template lang="pug">
transition(name="bounce" v-bind="$props")
  slot
</template>

<script>
export default {
  name: 'w-transition-bounce',
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}
</script>
