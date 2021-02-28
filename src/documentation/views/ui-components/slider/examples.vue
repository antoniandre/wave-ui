<template lang="pug">
div
  title-link(h2) Default
  p By default the range will have the #[code primary] color.
  example(content-class="mt5 px6")
    w-slider(:model-value="50")
    template(#html).
      &lt;w-slider :model-value="50"&gt;&lt;/w-slider&gt;

  title-link(h2) V-model &amp; external controls
  example(content-class="px6")
    w-flex(align-center)
      w-button(@click="sliderValue -= 5" icon="wi-minus" bg-color="success" sm)
      w-slider.mx3.grow(v-model="sliderValue" color="green")
      w-button(@click="sliderValue += 5" icon="wi-plus" bg-color="success" sm)
    div.mt4
      | v-model:
      code.ml1 {{ sliderValue }}
    template(#html).
      &lt;w-flex align-center&gt;
        &lt;w-button
          @click="sliderValue -= 5"
          icon="wi-minus"
          bg-color="success"
          sm&gt;
        &lt;/w-button&gt;

        &lt;w-slider
          class="mx3 grow"
          v-model="sliderValue"
          color="green"&gt;
        &lt;/w-slider&gt;

        &lt;w-button
          @click="sliderValue += 5"
          icon="wi-plus"
          bg-color="success"
          sm&gt;
        &lt;/w-button&gt;
      &lt;/w-flex&gt;

      &lt;div class="mt4"&gt;
        v-model:
        &lt;code class="ml1"&gt;{{ '\{\{ sliderValue \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        sliderValue: 50
      })

  title-link(h2) Min &amp; max
  example(content-class="px6")
    .title4.mb4 From 4 to 5
    w-slider(v-model="minMaxValue" :min="4" :max="5")
    div.mt4
      | v-model:
      code.ml1 {{ minMaxValue }}
    .title4.mt8.mb4 From -10 to 10
    w-slider(v-model="minMaxValue2" :min="-10" :max="10")
    div.mt4
      | v-model:
      code.ml1 {{ minMaxValue2 }}
    template(#html).
      &lt;div class="title4 mb4"&gt;From 4 to 5&lt;/div&gt;
      &lt;w-slider
        v-model="sliderValue"
        :min="4"
        :max="5"&gt;
      &lt;/w-slider&gt;

      &lt;div class="mt4"&gt;
        v-model:
        &lt;code class="ml1"&gt;{{ '\{\{ sliderValue \}\}' }}&lt;/code&gt;
      &lt;/div&gt;

      &lt;div class="title4 mt8 mb4"&gt;From -10 to 10&lt;/div&gt;
      &lt;w-slider
        v-model="slider2Value"
        :min="-10"
        :max="10"&gt;
      &lt;/w-slider&gt;

      &lt;div class="mt4"&gt;
        v-model:
        &lt;code class="ml1"&gt;{{ '\{\{ slider2Value \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        sliderValue: 4.5,
        slider2Value: 0
      })

  title-link(h2) Disabled &amp; readonly
  example(content-class="px6")
    w-slider.mt2(:model-value="50" disabled)
    w-slider.mt8(:model-value="50" readonly)
    template(#html).
      &lt;w-slider class="mt2" :model-value="50" disabled&gt;&lt;/w-slider&gt;
      &lt;w-slider class="mt8" :model-value="50" readonly&gt;&lt;/w-slider&gt;

  title-link(h2) Labels on the left &amp; right
  example(content-class="px6")
    w-slider.mt2(:model-value="50" label-left="0" label-right="100")
    w-slider.mt6(:model-value="50" label-left="Left")
    w-slider.mt6(:model-value="50" label-right="Right")
    w-slider.mt12(:model-value="50")
      template(#label-left)
        span Weight
        w-icon.ml2.green mdi mdi-feather
      template(#label-right)
        w-icon.red mdi mdi-weight
        w-icon.red mdi mdi-weight
    template(#html).
      &lt;w-slider
        class="mt2"
        :model-value="50"
        label-left="0"
        label-right="100"&gt;
      &lt;/w-slider&gt;

      &lt;w-slider
        class="mt6"
        :model-value="50"
        label-left="Left"&gt;
      &lt;/w-slider&gt;

      &lt;w-slider
        class="mt6"
        :model-value="50"
        label-right="Right"&gt;
      &lt;/w-slider&gt;

      &lt;w-slider
        class="mt12"
        :model-value="50"&gt;
        &lt;template #label-left&gt;
          &lt;span&gt;Weight&lt;/span&gt;
          &lt;w-icon class="ml2 green"&gt;mdi mdi-feather&lt;/w-icon&gt;
        &lt;/template&gt;
        &lt;template #label-right&gt;
          &lt;w-icon class="red"&gt;mdi mdi-weight&lt;/w-icon&gt;
          &lt;w-icon class="red"&gt;mdi mdi-weight&lt;/w-icon&gt;
        &lt;/template&gt;
      &lt;/w-slider&gt;

  title-link(h2) Thumb label
  example(content-class="pt12 px8")
    w-slider.mb4(:model-value="24" thumb-label color="primary-light3")
    template(#html).
      &lt;w-slider
        class="mt12"
        :model-value="24"
        thumb-label
        color="primary-light3"&gt;
      &lt;/w-slider&gt;

  title-link(h3 slug="custom-label-with-label-slot") Customize the label with the #[span.code label] slot
  example(content-class="pt12 pb8 px8")
    w-slider(:model-value="46.3" thumb-label color="primary-light3")
      template(#label="{ value }") {{ ~~(value * 10) / 10 }}%
    template(#html).
      &lt;w-slider
        class="ma12"
        :model-value="46.3"
        thumb-label
        color="primary-light3"&gt;
        &lt;template #label="{ value }"&gt;
          {{ '\{\{ parseInt(value * 10) / 10 \}\}' }}%
        &lt;/template&gt;
      &lt;/w-slider&gt;

  title-link(h3) Droplet style label
  p With this option you can have a more modern look, but the drawback is that it can't contain long texts.
  p
    | It is a breeze to override the droplet label size via CSS, this will suffice:
    code .w-slider {font-size: 1.4em}
  p
    | If you need you can also adjust the content font-size with:
    code .w-slider__thumb-label div {font-size: 2em;}

  p.
    It is also possible to add classes to the thumb label through the #[code thumb-label-class] option
    to add a color for instance.
  example(content-class="pt12 pl10 pr12")
    w-slider.mt2.mb12(:model-value="30" thumb-label="droplet")
    w-slider.big-label.mt12.mb4(:model-value="60" thumb-label="droplet" thumb-label-class="info--bg")
    template(#html).
      &lt;w-slider
        class="ma12"
        :model-value="30"
        thumb-label="droplet"&gt;
      &lt;/w-slider&gt;

      &lt;w-slider
        class="big-label.ma12"
        :model-value="60"
        thumb-label="droplet"
        thumb-label-class="info--bg"&gt;
      &lt;/w-slider&gt;
    template(#css).
      .big-label {font-size: 1.4em;}

  title-link(h2) Steps
  p.
    There is no step by default to ensure a very smooth movement while dragging. This also means that
    the v-model will contain decimals.#[br]
    If you don't want to deal with decimals you can use the #[code step] option to make the slider only
    stop on integer values.
  example(content-class="px6")
    .title4.mb4 Step = 1
    w-slider(v-model="sliderStepsValue1" :step="1")
    div.mt4
      | v-model:
      code.ml1 {{ sliderStepsValue1 }}
    .title4.mt8.mb4 Step = 10
    w-slider(v-model="sliderStepsValue2" :step="10")
    div.mt4
      | v-model:
      code.ml1 {{ sliderStepsValue2 }}
    template(#html).
      &lt;div class="title4 mb4"&gt;Step = 1&lt;/div&gt;
      &lt;w-slider v-model="sliderValue" :step="1"&gt;&lt;/w-slider&gt;
      &lt;div class="mt4"&gt;
        v-model:
        &lt;code class="ml1"&gt;{{ '\{\{ sliderValue \}\}' }}&lt;/code&gt;
      &lt;/div&gt;

      &lt;div class="title4 mt8 mb4"&gt;Step = 10&lt;/div&gt;
      &lt;w-slider v-model="slider2Value" :step="10"&gt;&lt;/w-slider&gt;
      &lt;div class="mt4"&gt;
        v-model:
        &lt;code class="ml1"&gt;{{ '\{\{ slider2Value \}\}' }}&lt;/code&gt;
      &lt;/div&gt;
    template(#js).
      data: () => ({
        sliderValue: 50,
        slider2Value: 50
      })

  title-link(h2) Step labels
  example(content-class="px6")
    .title4.mb4 Default step labels
    w-slider(v-model="sliderStepsValue3" color="primary-light2" :step="20" step-labels)
    //- .title4.mt8.mb4 Custom step labels
    //- w-slider(v-model="sliderStepsValue4" color="primary-light2" :min="20" :max="30" :step="3" step-labels)
    //- w-slider(v-model="sliderStepsValue5" color="primary-light2" :min="20" :max="30" :step="3" step-labels)
    template(#html).
      &lt;div class="title4 mb4"&gt;Default step labels&lt;/div&gt;
      &lt;w-slider
        v-model="sliderValue"
        color="primary-light2"
        :step="20"
        step-labels&gt;
      &lt;/w-slider&gt;
    template(#js).
      data: () => ({
        sliderValue: 40
      })
</template>

<script>
export default {
  data: () => ({
    sliderValue: 50,
    minMaxValue: 4.5,
    minMaxValue2: 0,
    sliderStepsValue1: 50,
    sliderStepsValue2: 50,
    sliderStepsValue3: 40,
    sliderStepsValue4: 40,
    sliderStepsValue5: 40
  })
}
</script>

<style lang="scss">
.big-label {font-size: 1.4em;}
</style>
