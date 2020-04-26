<template lang="pug">
div(style="overflow: hidden")
  h1.headline.mt-4 Colors
  p.
    Wave UI colors work in a very simple way: for instance the class
    #[code pink] (or any color listed bellow) can be applied to any
    element's text, and the class #[code pink--bg] can be applied to
    any element's background.

  p.
    All the components that accept colors, will accept the #[code color]
    prop for the text color, and #[code bg-color] for the background.

  p.
    This way, it is possible to mix a background color with a different
    text color of your choice.

  h2 Status colors
  .layout.wrap.mb-12.ma-n2
    .color.success--bg.subtitle.text-center.flex.py-4.ma-2 success
    .color.error--bg.subtitle.text-center.flex.py-4.ma-2 error
    .color.warning--bg.subtitle.text-center.flex.py-4.ma-2 warning
    .color.info--bg.subtitle.text-center.flex.py-4.ma-2 info

  h2.my-4.layout.align-center
    | Color Palette
    w-button.ml-6(
      bg-color="primary"
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
          .color.color--top(v-if="i === 5" :class="`${label}--bg`")
            span {{ label }}
            small {{ color }}
          //- tones colors.
          .color.color--tone(
            :key="i"
            :class="[`${tone.label}--bg`, i >= 5 ? 'color--darken' : '']")
            span {{ tone.label }}
            small {{ tone.color }}

      .color-palette.ma-2
        .layout.ma-n2(:class="{ column: !horizontal }")
          .color.color--top.ma-2.black--bg
            span black
            small #000
          .color.color--top.ma-2.white--bg.black
            span white
            small #fff
          .color.color--top.ma-2.transparent--bg.black
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

    &.black {text-shadow: none;color: #000;}
    &.black--bg {text-shadow: none;color: #fff;}
    &.white--bg, &.transparent--bg {border: 1px solid #999;}
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
