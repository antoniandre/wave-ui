<template lang="pug">
div
  h1.headline.mt-4 Colors

  h2.mt-4 Color Palette
  .layout.wrap.text-center.code
    .color.align-center.ma-1(
      v-for="({ color, label, tones }, i) in colors"
      :key="i"
      :class="label")
      .title.mt-2.mb-0 {{ label }}
      div.mb-2 {{ color }}
      .color.color--tone.layout.column.align-center.px-4(
        v-for="({ color, label }, i) in tones"
        :key="i"
        :class="label")
        strong.pt-2.pb-1 {{ label }}
        | {{ color }}

    .color.align-center.ma-1
      .color.color--tone.layout.column.align-center.px-4.ma-1.black
          strong.pt-2.pb-1 black
          | #000
      .color.color--tone.layout.column.align-center.px-4.ma-1.white.black--text
          strong.pt-2.pb-1 white
          | #fff
      .color.color--tone.layout.column.align-center.px-4.ma-1.transparent.black--text
          strong.pt-2.pb-1 transparent
          | transparent
</template>

<script>
import { colors } from './colors'

export default {
  data: () => ({
    colors
  })
}
</script>

<style lang="scss">
.page--colors {
  .color {
    font-size: 0.9em;
    padding: 2px;
    color: #fff;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.2);

    &--tone {
      min-width: 180px;
      height: 50px;
      color: rgba(0, 0, 0, 0.9);
      text-shadow: none;
    }

    &.lime, &.yellow,
    &.black--text {text-shadow: none;color: black;}
    &.black {text-shadow: none;color: white;}
    &.white, &.transparent {border: 1px solid #999;}
  }
}
</style>