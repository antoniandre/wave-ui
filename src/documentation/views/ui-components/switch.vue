<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-switch]

  w-switch.mr-3.mb-1(:value="true" label="Checked")
  w-switch.mr-3.mb-1(:value="false" label="Unchecked")

  w-switch.mr-3.mb-1(:value="true" disabled label="Checked disabled")
  w-switch.mr-3.mb-1(:value="false" disabled label="Unchecked disabled")
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
