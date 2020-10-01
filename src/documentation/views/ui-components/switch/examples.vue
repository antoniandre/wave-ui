<template lang="pug">
div
  title-link(h2 slug="on-off-and-disabled") On, off &amp; disabled
  example(content-class="pt4")
    w-switch.ma2(:model-value="true" label="On")
    w-switch.ma2(:model-value="false" label="Off")
    w-switch.ma2(:model-value="true" disabled label="On disabled")
    w-switch.ma2(:model-value="false" disabled label="Off disabled")
    template(#pug).
      w-switch.ma2(:model-value="true" label="On")
      w-switch.ma2(:model-value="false" label="Off")
      w-switch.ma2(:model-value="true" disabled label="On disabled")
      w-switch.ma2(:model-value="false" disabled label="Off disabled")

  title-link(h2) V-model
  example(content-class="w-flex wrap align-center")
    w-switch.mr6(v-model="value")
    span.title3.mb0
      | v-model value:
      code.ml2 {{ value }}
    template(#pug).
      w-switch.mr6(v-model="value")
      span.title3.mb0
        | v-model value:
        code.ml2 {{ '\{\{ value \}\}' }}
    template(#js).
      data: () => ({
        value: true
      })

  title-link(h2) Colors
  example(content-class="pt4")
    w-switch.ma2(:model-value="true" color="pink")
    w-switch.ma2(:model-value="true" color="error")
    w-switch.ma2(:model-value="true" color="warning")
    w-switch.ma2(:model-value="true" color="success")
    w-switch.ma2(:model-value="true" color="info")
    template(#pug).
      w-switch.ma2(:model-value="true" color="pink")
      w-switch.ma2(:model-value="true" color="error")
      w-switch.ma2(:model-value="true" color="warning")
      w-switch.ma2(:model-value="true" color="success")
      w-switch.ma2(:model-value="true" color="info")

  title-link(h2) Thin version
  example(content-class="pt5")
    w-switch.ma2(:model-value="true" thin label="On")
    w-switch.ma2(:model-value="false" thin label="Off")
    w-switch.ma2(:model-value="true" disabled thin label="On disabled")
    w-switch.ma2(:model-value="false" disabled thin label="Off disabled")
    template(#pug).
      w-switch.ma2(:model-value="true" thin label="On")
      w-switch.ma2(:model-value="false" thin label="Off")
      w-switch.ma2(:model-value="true" disabled thin label="On disabled")
      w-switch.ma2(:model-value="false" disabled thin label="Off disabled")
</template>

<script>
export default {
  data: () => ({
    value: true
  })
}
</script>
