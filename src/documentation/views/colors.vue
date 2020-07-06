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
  .w-flex.wrap.mb-12.ma-n2
    .color.success--bg.subtitle.text-center.grow.py-3.ma-2 success
    .color.error--bg.subtitle.text-center.grow.py-3.ma-2 error
    .color.warning--bg.subtitle.text-center.grow.py-3.ma-2 warning
    .color.info--bg.subtitle.text-center.grow.py-3.ma-2 info

  h3 Status colors shades
  .w-flex.wrap.mb-12.ma-n2
    .w-flex.column
      .color.success-lighter-3--bg.subtitle.text-center.grow.py-3.ma-2.body success-lighter-3
      .color.success-lighter-2--bg.subtitle.text-center.grow.py-3.ma-2.body success-lighter-2
      .color.success-lighter-1--bg.subtitle.text-center.grow.py-3.ma-2.body success-lighter-1
      .color.success-darker-1--bg.subtitle.text-center.grow.py-3.ma-2.white.body success-darker-1
      .color.success-darker-2--bg.subtitle.text-center.grow.py-3.ma-2.white.body success-darker-2
      .color.success-darker-3--bg.subtitle.text-center.grow.py-3.ma-2.white.body success-darker-3
    .w-flex.column
      .color.error-lighter-3--bg.subtitle.text-center.grow.py-3.ma-2.body error-lighter-3
      .color.error-lighter-2--bg.subtitle.text-center.grow.py-3.ma-2.body error-lighter-2
      .color.error-lighter-1--bg.subtitle.text-center.grow.py-3.ma-2.body error-lighter-1
      .color.error-darker-1--bg.subtitle.text-center.grow.py-3.ma-2.white.body error-darker-1
      .color.error-darker-2--bg.subtitle.text-center.grow.py-3.ma-2.white.body error-darker-2
      .color.error-darker-3--bg.subtitle.text-center.grow.py-3.ma-2.white.body error-darker-3
    .w-flex.column
      .color.warning-lighter-3--bg.subtitle.text-center.grow.py-3.ma-2.body warning-lighter-3
      .color.warning-lighter-2--bg.subtitle.text-center.grow.py-3.ma-2.body warning-lighter-2
      .color.warning-lighter-1--bg.subtitle.text-center.grow.py-3.ma-2.body warning-lighter-1
      .color.warning-darker-1--bg.subtitle.text-center.grow.py-3.ma-2.white.body warning-darker-1
      .color.warning-darker-2--bg.subtitle.text-center.grow.py-3.ma-2.white.body warning-darker-2
      .color.warning-darker-3--bg.subtitle.text-center.grow.py-3.ma-2.white.body warning-darker-3
    .w-flex.column
      .color.info-lighter-3--bg.subtitle.text-center.grow.py-3.ma-2.body info-lighter-3
      .color.info-lighter-2--bg.subtitle.text-center.grow.py-3.ma-2.body info-lighter-2
      .color.info-lighter-1--bg.subtitle.text-center.grow.py-3.ma-2.body info-lighter-1
      .color.info-darker-1--bg.subtitle.text-center.grow.py-3.ma-2.white.body info-darker-1
      .color.info-darker-2--bg.subtitle.text-center.grow.py-3.ma-2.white.body info-darker-2
      .color.info-darker-3--bg.subtitle.text-center.grow.py-3.ma-2.white.body info-darker-3

  h2 #[span.code primary] &amp; #[span.code secondary] colors and shades
  p.
    The primary color, and whichever color you add, will also have 6 different shades.
    More shades would most likely be redundant with the bellow color palette.

  p.
    Also note that the primary color is considered as dark by default, and will render,
    as well as its 3 darker shades, with a white text when used as a background.

  .w-flex
    .color.primary-lighter-3--bg.subtitle.text-center.grow.py-3.ma-2.body primary-lighter-3
    .color.primary-lighter-2--bg.subtitle.text-center.grow.py-3.ma-2.white.body primary-lighter-2
    .color.primary-lighter-1--bg.subtitle.text-center.grow.py-3.ma-2.white.body primary-lighter-1
    .color.primary--bg.subtitle.text-center.grow.py-3.ma-2.white primary
    .color.primary-darker-1--bg.subtitle.text-center.grow.py-3.ma-2.white.body primary-darker-1
    .color.primary-darker-2--bg.subtitle.text-center.grow.py-3.ma-2.white.body primary-darker-2
    .color.primary-darker-3--bg.subtitle.text-center.grow.py-3.ma-2.white.body primary-darker-3

  h2.mt-12.mb-4.w-flex.align-center
    | Color Palette
    w-button.ml-6(
      bg-color="primary"
      sm
      dark
      @click="horizontal = !horizontal")
      | {{ horizontal ? 'Vertical' : 'Horizontal' }} display

  .text-center(:class="`${horizontal ? 'horizontal' : 'vertical'}`")
    .w-flex.wrap.ma-n2
      .color-palette.ma-2(
        v-for="({ color, label, shades }, i) in colors"
        :key="i")
        template(v-for="(shade, i) in shades")
          //- top color.
          .color.color--top(v-if="i === 5" :class="`${label}--bg`")
            span {{ label }}
            small {{ color }}
          //- shades colors.
          .color.color--shade(
            :key="i"
            :class="[`${shade.label}--bg`, i >= 5 ? 'color--darker' : '']")
            span {{ shade.label }}
            small {{ shade.color }}

      .color-palette.ma-2
        .w-flex.ma-n2(:class="{ column: !horizontal }")
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
import colors from '@/wave-ui/utils/colors'

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
    flex-grow: 1;
    height: 100px;
  }

  .color {
    display: flex;
    .horizontal & {
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
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

  .color--shade {
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

    &.color--darker {color: #fff;}
    span {padding-bottom: 2px;font-size: 1.2em;}
    small {
      font-size: 1.1em;
      font-family: monospace;
      letter-spacing: -0.5px;
    }
  }
}
</style>
