<template lang="pug">
  transition(name="twist" v-bind="$props")
    slot
</template>

<script>
export default {
  name: 'w-transition-twist'
}
</script>
