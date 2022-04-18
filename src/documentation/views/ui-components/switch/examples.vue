<template lang="pug">
div
  title-link(h2 slug="on-off-and-disabled") On, off &amp; disabled
  example(content-class="pt4")
    w-switch.ma2(:model-value="true" label="On")
    w-switch.ma2(:model-value="false" label="Off")
    w-switch.ma2(:model-value="true" disabled label="On disabled")
    w-switch.ma2(:model-value="false" disabled label="Off disabled")
    template(#pug).
    template(#html).
      &lt;w-switch
        class="ma2"
        :model-value="true"
        label="On"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="false"
        label="Off"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="true"
        disabled
        label="On disabled"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="false"
        disabled
        label="Off disabled"&gt;
      &lt;/w-switch&gt;

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
    template(#html).
      &lt;w-switch
        class="ma2"
        :model-value="true"
        color="pink"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="true"
        color="error"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="true"
        color="warning"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="true"
        color="success"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="true"
        color="info"&gt;
      &lt;/w-switch&gt;

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
    template(#html).
      &lt;w-switch
        class="ma2"
        :model-value="true"
        thin label="On"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="false"
        thin label="Off"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="true"
        disabled
        thin
        label="On disabled"&gt;
      &lt;/w-switch&gt;

      &lt;w-switch
        class="ma2"
        :model-value="false"
        disabled
        thin
        label="Off disabled"&gt;
      &lt;/w-switch&gt;

  title-link(h2) Track slot
  p.
    You can easily add some custom content in the switch track via the #[code #track] slot.#[br]
  alert(tip)
    | If the #[strong.code w-switch] width is too small for your custom content, it's very easy to
    | increase its width with CSS like in this example, and the component elements will adapt:
    ssh-pre(language="css")
      .w-switch--custom-track .w-switch--custom-track .w-switch__input {width: 55px;}
  example(content-class="pt5")
    w-switch.ma4(v-model="value2")
      template(#track)
        small {{ value2 ? 'on' : 'off' }}

    w-switch.w-switch--wide.ma4(v-model="value2")
      template(#track)
        strong {{ value2 ? 'on' : 'off' }}
    template(#pug).
      w-switch.ma4(v-model="value")
        template(#track)
          small {{ "\{\{ value ? 'on' : 'off' \}\}" }}

      w-switch.w-switch--wide.ma4(v-model="value")
        template(#track)
          strong {{ "\{\{ value ? 'on' : 'off' \}\}" }}
    template(#html).
      &lt;w-switch v-model="value" class="ma4"&gt;
        &lt;template #track&gt;
          &lt;small&gt;{{ "\{\{ value ? 'on' : 'off' \}\}" }}&lt;/small&gt;
        &lt;/template&gt;
      &lt;/w-switch&gt;

      &lt;w-switch v-model="value" class="ma4 w-switch--wide"&gt;
        &lt;template #track&gt;
          &lt;strong&gt;{{ "\{\{ value ? 'on' : 'off' \}\}" }}&lt;/strong&gt;
        &lt;/template&gt;
      &lt;/w-switch&gt;
    template(#js).
      data: () => ({
        value: true
      })
    template(#css).
      /* Adapt text color according to the background color. */
      .w-switch__track {color: #666;}
      .w-switch--on .w-switch__track {color: #fff;}

      /* Wider switch. */
      .w-switch--wide .w-switch__input {width: 55px;}
      .w-switch--wide .w-switch__track {width: 35px;text-align: center;}

  title-link(h2) Thumb slot
  p.
    It is possible to add an icon or any kind of content in the switch thumb via the #[code #thumb]
    slot.#[br]
    You can also fit and style the element with minimum CSS.
  example(content-class="pt5")
    w-switch.ma4(v-model="value3")
      template(#thumb)
        small {{ value3 ? 'on' : 'off' }}
    w-switch.ma4(v-model="value3" label="Dark theme")
      template(#thumb)
        w-icon {{ value3 ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' }}
    template(#pug).
      w-switch.ma4(v-model="value" label="On")
        template(#thumb)
          small {{ "\{\{ value ? 'on' : 'off' \}\}" }}

      w-switch.ma4(v-model="value" label="Dark theme")
        template(#thumb)
          w-icon {{ "\{\{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' \}\}" }}
    template(#html).
      &lt;w-switch v-model="value" class="ma4"&gt;
        &lt;template #thumb&gt;
          &lt;small&gt;{{ "\{\{ value ? 'on' : 'off' \}\}" }}&lt;/small&gt;
        &lt;/template&gt;
      &lt;/w-switch&gt;

      &lt;w-switch v-model="value" class="ma4"&gt;
        &lt;template #thumb&gt;
          &lt;w-icon&gt;
            {{ "\{\{ value ? 'mdi mdi-weather-night' : 'mdi mdi-white-balance-sunny' \}\}" }}
          &lt;/w-icon&gt;
        &lt;/template&gt;
      &lt;/w-switch&gt;
    template(#js).
      data: () => ({
        value: true
      })
</template>

<script>
export default {
  data: () => ({
    value: true,
    value2: true,
    value3: true
  })
}
</script>

<style lang="scss">
.w-switch--wide .w-switch__input {width: 55px;}
.w-switch--wide .w-switch__track {width: 35px;text-align: center;}
.w-switch--custom-track .w-switch__track {color: #666;}
.w-switch--custom-track.w-switch--on .w-switch__track {color: #fff;}
</style>
