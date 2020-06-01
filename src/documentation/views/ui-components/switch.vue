<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-switch]

  w-switch.mr-3.mb-1(:value="true" label="Checked")
  w-switch.mr-3.mb-1(:value="false" label="Unchecked")

  w-switch.mr-3.mb-1(:value="true" disabled label="Checked disabled")
  w-switch.mr-3.mb-1(:value="false" disabled label="Unchecked disabled")

  h2 color
  w-switch.mr-3.mb-1(:value="true" color="pink")
  w-switch.mr-3.mb-1(:value="true" color="error")
  w-switch.mr-3.mb-1(:value="true" color="warning")
  w-switch.mr-3.mb-1(:value="true" color="success")
  w-switch.mr-3.mb-1(:value="true" color="info")
  br


  h2 v-model
  w-flex.wrap.align-center
    w-switch.mr-3.mb-1(v-model="value")
    span.subtitle
      | v-model value:
      code {{ value }}
</template>

<script>
export default {
  data: () => ({
    value: true
  })
}
</script>

<style lang="scss">

</style>
