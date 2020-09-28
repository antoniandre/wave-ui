<template lang="pug">
transition(name="scale-fade" v-bind="$props")
  slot
</template>

<script>
export default {
  name: 'w-transition-scale-fade',
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}
</script>
