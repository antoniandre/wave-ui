<template lang="pug">
transition(name="twist" v-bind="$props")
  slot
</template>

<script>
export default {
  name: 'w-transition-twist',
  props: {
    appear: { type: Boolean },
    duration: { type: [Number, String] }
  }
}
</script>
