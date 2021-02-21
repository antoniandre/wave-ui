<template lang="pug">
div
  title-link(h2 slug="on-off-and-disabled") On, off &amp; disabled
  example(content-class="pt4")
    w-switch.ma2(:value="true" label="On")
    w-switch.ma2(:value="false" label="Off")
    w-switch.ma2(:value="true" disabled label="On disabled")
    w-switch.ma2(:value="false" disabled label="Off disabled")
    template(#html).
      &lt;w-switch
        class="ma2"
        :value="true"
        label="On"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="false"
        label="Off"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="true"
        disabled
        label="On disabled"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="false"
        disabled
        label="Off disabled"&gt;
      &lt;/w-switch&gt;

  title-link(h2) V-model
  example(content-class="w-flex wrap align-center")
    w-switch.mr6(v-model="value")
    span.title3.mb0
      | v-model value:
      code.ml2 {{ value }}
    template(#html).
      &lt;w-switch class="mr6" v-model="value"&gt;&lt;/w-switch&gt;
      &lt;span class="title3 mb0"&gt;
        v-model value:
        &lt;code class="ml2"&gt;{{ '\{\{ value \}\}' }}&lt;/code&gt;
      &lt;/span&gt;
    template(#js).
      data: () => ({
        value: true
      })

  title-link(h2) Colors
  example(content-class="pt4")
    w-switch.ma2(:value="true" color="pink")
    w-switch.ma2(:value="true" color="error")
    w-switch.ma2(:value="true" color="warning")
    w-switch.ma2(:value="true" color="success")
    w-switch.ma2(:value="true" color="info")
    template(#html).
      &lt;w-switch
        class="ma2"
        :value="true"
        color="pink"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="true"
        color="error"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="true"
        color="warning"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="true"
        color="success"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="true"
        color="info"&gt;
      &lt;/w-switch&gt;

  title-link(h2) Thin version
  example(content-class="pt5")
    w-switch.ma2(:value="true" thin label="On")
    w-switch.ma2(:value="false" thin label="Off")
    w-switch.ma2(:value="true" disabled thin label="On disabled")
    w-switch.ma2(:value="false" disabled thin label="Off disabled")
    template(#html).
      &lt;w-switch
        class="ma2"
        :value="true"
        thin label="On"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="false"
        thin label="Off"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="true"
        disabled
        thin
        label="On disabled"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :value="false"
        disabled
        thin
        label="Off disabled"&gt;
      &lt;/w-switch&gt;
</template>

<script>
export default {
  data: () => ({
    value: true
  })
}
</script>
