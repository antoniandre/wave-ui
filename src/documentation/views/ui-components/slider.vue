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
  example(content-class="mt2")
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
</template>

<script>
export default {
  data: () => ({
    sliderValue: 50
  })
}
</script>
