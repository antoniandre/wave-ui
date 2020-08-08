<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-slider")
    | w-slider
    w-tag.ml3(bg-color="orange" color="white" lg) In progress

  title-link(h2) Default
  example(content-class="mt5")
    w-slider(:value="50")
    template(#pug).
      w-slider(:value="50")

  title-link(h2) V-model
  example
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

  title-link(h2) Label
  example(content-class="pt12")
    w-slider.mb4(:value="24" thumb-label)

  title-link(h3) Customize with the label slot
  example(content-class="pt12 pb8")
    w-slider(:value="46.3" color="green" thumb-label)
      template(#label="{ value }") {{ ~~(value * 10) / 10 }}%

  title-link(h3) Droplet style label
  p With this option you can have a more modern look, but the drawback is that it can't contain long text.
  p
    | Of course it is a breeze to override the droplet label size via CSS. This will suffice:
    code .w-slider {font-size: 1.4em}
  p
    | If you need you can also adjust the content font-size with:
    code .w-slider__thumb-label div {font-size: 2em;}

  p.
    It is also possible to add classes to the thumb label through the #[code thumb-label-class] option
    to add a color for instance.
  example(content-class="pt12")
    w-slider.mt2.mb12(:value="30" color="green" thumb-label="droplet")
    w-slider.big-label.mt12.mb4(:value="60" color="green" thumb-label="droplet" thumb-label-class="success--bg")
    template(#pug).
</template>

<script>
export default {
  data: () => ({
    sliderValue: 50
  })
}
</script>

<style lang="scss">
.big-label {font-size: 1.4em;}
</style>