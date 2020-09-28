<template lang="pug">
transition(name="scale" v-bind="$props")
  slot
</template>

<script>
export default {
  name: 'w-transition-scale',
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}
</script>
