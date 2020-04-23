<template lang="pug">
div
  h1.headline.mt-4 Colors
  .layout.wrap.text-center.mb-12
    .color.success.text-center.py-4.ma-2 success
    .color.error.text-center.py-4.ma-2 error
    .color.warning.text-center.py-4.ma-2 warning
    .color.info.text-center.py-4.ma-2 info

  h2.mt-4 Color Palette
  .layout.wrap.text-center
    .color.ma-2(
      v-for="({ color, label, tones }, i) in colors"
      :key="i")
      template(v-for="(tone, i) in tones")
        //- top color.
        .color.color--top(v-if="i === 5" :class="label")
          span {{ label }}
          small {{ color }}
        //- tones colors.
        .color.color--tone(
          :key="i"
          :class="[tone.label, i >= 5 ? 'color--darken' : '']")
          span {{ tone.label }}
          | {{ tone.color }}

    .color.ma-1
      .color.color--top.ma-1.black
        span black
        small #000
      .color.color--top.ma-1.white.black--text
        span white
        small #fff
      .color.color--top.ma-1.transparent.black--text
        span transparent
        small transparent
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
    min-width: 250px;
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    small {font-size: 0.5em;}

    &.black--text {text-shadow: none;color: #000;}
    &.black {text-shadow: none;color: #fff;}
    &.white, &.transparent {border: 1px solid #999;}
  }

  .color--top {
    letter-spacing: 1px;
    font-size: 2.5em;
    height: 90px;
    color: #fff;
    span {padding-bottom: 4px;}
  }

  .color--tone {
    height: 40px;
    color: rgba(0, 0, 0, 0.9);
    text-shadow: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;

    &.color--darken {color: #fff;}
    span {padding-bottom: 2px;font-size: 1.2em;}
  }
}
</style>