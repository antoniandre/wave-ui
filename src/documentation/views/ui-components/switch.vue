<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-switch]

  .w-flex.wrap.align-center
    w-switch.mr-4.mb-1(:value="true" label="On")
    w-switch.mr-4.mb-1(:value="false" label="Off")
    w-switch.mr-4.mb-1(:value="true" disabled label="On disabled")
    w-switch(:value="false" disabled label="Off disabled")

  h2 V-model
  w-flex.wrap.align-center
    w-switch.mr-3.mb-1(v-model="value")
    span.subtitle
      | v-model value:
      code {{ value }}

  h2 Colors
  w-switch.mr-3.mb-1(:value="true" color="pink")
  w-switch.mr-3.mb-1(:value="true" color="error")
  w-switch.mr-3.mb-1(:value="true" color="warning")
  w-switch.mr-3.mb-1(:value="true" color="success")
  w-switch.mr-3.mb-1(:value="true" color="info")

  h2 Thin version
  .w-flex.wrap.align-center
    w-switch.mr-4.mb-1(:value="true" thin label="On")
    w-switch.mr-4.mb-1(:value="false" thin label="Off")
    w-switch.mr-4.mb-1(:value="true" disabled thin label="On disabled")
    w-switch(:value="false" disabled thin label="Off disabled")
</template>

<script>
export default {
  data: () => ({
    value: true
  })
}
</script>
