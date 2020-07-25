<template lang="pug">
div
  title-link.mt4.code(h1) w-switch

  .w-flex.wrap.align-center
    w-switch.mr4.mb1(:value="true" label="On")
    w-switch.mr4.mb1(:value="false" label="Off")
    w-switch.mr4.mb1(:value="true" disabled label="On disabled")
    w-switch(:value="false" disabled label="Off disabled")

  title-link(h2) V-model
  w-flex.wrap.align-center
    w-switch.mr3.mb1(v-model="value")
    span.title3
      | v-model value:
      code.ml2 {{ value }}

  title-link(h2) Colors
  w-switch.mr3.mb1(:value="true" color="pink")
  w-switch.mr3.mb1(:value="true" color="error")
  w-switch.mr3.mb1(:value="true" color="warning")
  w-switch.mr3.mb1(:value="true" color="success")
  w-switch.mr3.mb1(:value="true" color="info")

  title-link(h2) Thin version
  .w-flex.wrap.align-center
    w-switch.mr4.mb1(:value="true" thin label="On")
    w-switch.mr4.mb1(:value="false" thin label="Off")
    w-switch.mr4.mb1(:value="true" disabled thin label="On disabled")
    w-switch(:value="false" disabled thin label="Off disabled")
</template>

<script>
export default {
  data: () => ({
    value: true
  })
}
</script>
