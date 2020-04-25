<template lang="pug">
div(style="overflow: hidden")
  h1.headline.mt-4 Colors
  .layout.wrap.mb-12.ma-n2
    .color.success.subtitle.text-center.flex.py-4.ma-2 success
    .color.error.subtitle.text-center.flex.py-4.ma-2 error
    .color.warning.subtitle.text-center.flex.py-4.ma-2 warning
    .color.info.subtitle.text-center.flex.py-4.ma-2 info

  h2.my-4.layout.align-center
    | Color Palette
    w-button.ml-6(
      color="primary"
      small
      dark
      @click="horizontal = !horizontal")
      | {{ horizontal ? 'Vertical' : 'Horizontal' }} display

  .text-center(:class="`${horizontal ? 'horizontal' : 'vertical'}`")
    .layout.flex.wrap.ma-n2
      .color-palette.ma-2(
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
            small {{ tone.color }}

      .color-palette.ma-2
        .layout.ma-n2(:class="{ column: !horizontal }")
          .color.color--top.ma-2.black
            span black
            small #000
          .color.color--top.ma-2.white.black--text
            span white
            small #fff
          .color.color--top.ma-2.transparent.black--text
            span transparent
            small transparent
</template>

<script>
import { colors } from './colors'

export default {
  data: () => ({
    colors,
    horizontal: false
  })
}
</script>

<style lang="scss">
.page--colors {
  .horizontal {overflow: auto hidden;}
}

.color-palette {
  .vertical & {min-width: 250px;flex-grow: 1;}
  .horizontal & {
    display: flex;
    flex-direction: row;
    height: 100px;
  }

  .color {
    display: flex;
    .horizontal & {
      flex-direction: column;
      justify-content: center;
    }
  }

  .color--top {
    font-size: 2.4em;
    color: #fff;

    .vertical & {
      height: 90px;
      flex-direction: column;
      justify-content: center;
    }
    .horizontal & {min-width: 220px;}

    span {padding-bottom: 4px;letter-spacing: 1px;}
    small {
      font-size: 0.5em;
      font-family: monospace;
      letter-spacing: -1px;
    }

    &.black--text {text-shadow: none;color: #000;}
    &.black {text-shadow: none;color: #fff;}
    &.white, &.transparent {border: 1px solid #999;}
  }

  .color--tone {
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.9);
    text-shadow: none;
    flex-direction: row;

    .vertical & {
      justify-content: space-between;
      align-items: center;
      height: 45px;
      padding-left: 2 * $base-increment;
      padding-right: 2 * $base-increment;
    }
    .horizontal & {min-width: 140px;}

    &.color--darken {color: #fff;}
    span {padding-bottom: 2px;font-size: 1.2em;}
    small {
      font-size: 1.1em;
      font-family: monospace;
      letter-spacing: -0.5px;
    }
  }
}
</style>
