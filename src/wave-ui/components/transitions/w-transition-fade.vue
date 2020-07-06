<template lang="pug">
  transition(name="fade" v-bind="$props")
    slot
</template>

<script>
export default {
  name: 'w-transition-fade'
}
</script>
