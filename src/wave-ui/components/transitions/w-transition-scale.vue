<template lang="pug">
  transition(name="scale" v-bind="$props")
    slot
</template>

<script>
export default {
  name: 'w-transition-scale'
}
</script>
