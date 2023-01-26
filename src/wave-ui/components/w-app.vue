<template lang="pug">
.w-app
  slot
</template>

<script>
export default {
  name: 'w-app',
  // Keep the props for the API documentation.
  props: {
    block: { type: Boolean },
    row: { type: Boolean },
    alignCenter: { type: Boolean },
    alignEnd: { type: Boolean },
    justifyCenter: { type: Boolean },
    justifyEnd: { type: Boolean },
    justifySpaceBetween: { type: Boolean },
    justifySpaceAround: { type: Boolean },
    justifySpaceEvenly: { type: Boolean },
    textCenter: { type: Boolean },
    textRight: { type: Boolean }
  }
}
</script>
