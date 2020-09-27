<template lang="pug">
div
  title-link(h2) Default
  p By default the range will have the #[code primary] color.
  example(content-class="mt5 px6")
    w-slider(:value="50")
    template(#pug).
      w-slider(:value="50")

  title-link(h2) V-model &amp; external controls
  example(content-class="px6")
    w-flex(align-center)
      w-button(@click="sliderValue -= 5" icon="wi-minus" bg-color="success" sm)
      w-slider.mx3.grow(v-model="sliderValue" color="green")
      w-button(@click="sliderValue += 5" icon="wi-plus" bg-color="success" sm)
    div.mt4
      | v-model:
      code.ml1 {{ sliderValue }}
    template(#pug).
      w-flex(align-center)
        w-button(@click="sliderValue -= 5" icon="wi-minus" bg-color="success" sm)
        w-slider.mx3.grow(v-model="sliderValue" color="green")
        w-button(@click="sliderValue += 5" icon="wi-plus" bg-color="success" sm)
      div.mt4
        | v-model:
        code.ml1 {{ '\{\{ sliderValue \}\}' }}
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
    template(#pug).
      .title4.mb4 From 4 to 5
      w-slider(v-model="sliderValue" :min="4" :max="5")
      div.mt4
        | v-model:
        code.ml1 {{ '\{\{ sliderValue \}\}' }}

      .title4.mt8.mb4 From -10 to 10
      w-slider(v-model="slider2Value" :min="-10" :max="10")
      div.mt4
        | v-model:
        code.ml1 {{ '\{\{ slider2Value \}\}' }}
    template(#js).
      data: () => ({
        sliderValue: 4.5,
        slider2Value: 0
      })

  title-link(h2) Disabled &amp; readonly
  example(content-class="px6")
    w-slider.mt2(:value="50" disabled)
    w-slider.mt8(:value="50" readonly)
    template(#pug).
      w-slider.mt2(:value="50" disabled)
      w-slider.mt8(:value="50" readonly)

  title-link(h2) Labels on the left &amp; right
  example(content-class="px6")
    w-slider.mt2(:value="50" label-left="0" label-right="100")
    w-slider.mt6(:value="50" label-left="Left")
    w-slider.mt6(:value="50" label-right="Right")
    w-slider.mt12(:value="50")
      template(#label-left)
        span Weight
        w-icon.ml2.green mdi mdi-feather
      template(#label-right)
        w-icon.red mdi mdi-weight
        w-icon.red mdi mdi-weight
    template(#pug).
      w-slider.mt2(:value="50" label-left="0" label-right="100")
      w-slider.mt6(:value="50" label-left="Left")
      w-slider.mt6(:value="50" label-right="Right")
      w-slider.mt12(:value="50")
        template(#label-left="")
          span Weight
          w-icon.ml2.green mdi mdi-feather
        template(#label-right="")
          w-icon.red mdi mdi-weight
          w-icon.red mdi mdi-weight

  title-link(h2) Thumb label
  example(content-class="pt12 px8")
    w-slider.mb4(:value="24" thumb-label color="primary-light3")
    template(#pug).
      w-slider.mt12(:value="24" thumb-label color="primary-light3")

  title-link(h3 slug="custom-label-with-label-slot") Customize the label with the #[span.code label] slot
  example(content-class="pt12 pb8 px8")
    w-slider(:value="46.3" thumb-label color="primary-light3")
      template(#label="{ value }") {{ ~~(value * 10) / 10 }}%
    template(#pug).
      w-slider.ma12(:value="46.3" thumb-label color="primary-light3")
        template(#label="{ value }") {{ '\{\{ parseInt(value * 10) / 10 \}\}' }}%

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
    w-slider.mt2.mb12(:value="30" thumb-label="droplet")
    w-slider.big-label.mt12.mb4(:value="60" thumb-label="droplet" thumb-label-class="info--bg")
    template(#pug).
      w-slider.ma12(:value="30" thumb-label="droplet")
      w-slider.big-label.ma12(:value="60" thumb-label="droplet" thumb-label-class="info--bg")
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
    template(#pug).
      .title4.mb4 Step = 1
      w-slider(v-model="sliderValue" :step="1")
      div.mt4
        | v-model:
        code.ml1 {{ '\{\{ sliderValue \}\}' }}

      .title4.mt8.mb4 Step = 10
      w-slider(v-model="slider2Value" :step="10")
      div.mt4
        | v-model:
        code.ml1 {{ '\{\{ slider2Value \}\}' }}
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
    template(#pug).
      .title4.mb4 Default step labels
      w-slider(v-model="sliderValue" color="primary-light2" :step="20" step-labels)
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