<template lang="pug">
div(style="overflow: hidden")
  title-link.mt-4(h1) Colors
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

  title-link(h2) Status colors
  .w-flex.wrap.mb-12.ma-n2
    .color.success--bg.subtitle.text-center.grow.py-3.ma-2 success
    .color.error--bg.subtitle.text-center.grow.py-3.ma-2 error
    .color.warning--bg.subtitle.text-center.grow.py-3.ma-2 warning
    .color.info--bg.subtitle.text-center.grow.py-3.ma-2 info

  h3 Status colors shades
  .w-flex.wrap.mb-12.ma-n2
    .w-flex.column.basis-0
      .color.success-light-3--bg.subtitle.text-center.py-3.ma-2.body success-light-3
      .color.success-light-2--bg.subtitle.text-center.py-3.ma-2.body success-light-2
      .color.success-light-1--bg.subtitle.text-center.py-3.ma-2.body success-light-1
      .color.success-dark-1--bg.subtitle.text-center.py-3.ma-2.white.body success-dark-1
      .color.success-dark-2--bg.subtitle.text-center.py-3.ma-2.white.body success-dark-2
      .color.success-dark-3--bg.subtitle.text-center.py-3.ma-2.white.body success-dark-3
    .w-flex.column.basis-0
      .color.error-light-3--bg.subtitle.text-center.py-3.ma-2.body error-light-3
      .color.error-light-2--bg.subtitle.text-center.py-3.ma-2.body error-light-2
      .color.error-light-1--bg.subtitle.text-center.py-3.ma-2.body error-light-1
      .color.error-dark-1--bg.subtitle.text-center.py-3.ma-2.white.body error-dark-1
      .color.error-dark-2--bg.subtitle.text-center.py-3.ma-2.white.body error-dark-2
      .color.error-dark-3--bg.subtitle.text-center.py-3.ma-2.white.body error-dark-3
    .w-flex.column.basis-0
      .color.warning-light-3--bg.subtitle.text-center.py-3.ma-2.body warning-light-3
      .color.warning-light-2--bg.subtitle.text-center.py-3.ma-2.body warning-light-2
      .color.warning-light-1--bg.subtitle.text-center.py-3.ma-2.body warning-light-1
      .color.warning-dark-1--bg.subtitle.text-center.py-3.ma-2.white.body warning-dark-1
      .color.warning-dark-2--bg.subtitle.text-center.py-3.ma-2.white.body warning-dark-2
      .color.warning-dark-3--bg.subtitle.text-center.py-3.ma-2.white.body warning-dark-3
    .w-flex.column.basis-0
      .color.info-light-3--bg.subtitle.text-center.py-3.ma-2.body info-light-3
      .color.info-light-2--bg.subtitle.text-center.py-3.ma-2.body info-light-2
      .color.info-light-1--bg.subtitle.text-center.py-3.ma-2.body info-light-1
      .color.info-dark-1--bg.subtitle.text-center.py-3.ma-2.white.body info-dark-1
      .color.info-dark-2--bg.subtitle.text-center.py-3.ma-2.white.body info-dark-2
      .color.info-dark-3--bg.subtitle.text-center.py-3.ma-2.white.body info-dark-3

  title-link(h2 slug="primary-and-secondary-colors-and-shades")
    | #[span.code primary] &amp; #[span.code secondary] colors and shades
  p.
    The primary color, and whichever color you add, will also have 6 different shades.
    More shades would most likely be redundant with the bellow color palette.

  p.
    Also note that the primary color is considered as dark by default, and will render,
    as well as its 3 darker shades, with a white text when used as a background.

  w-flex(wrap :gap="4")
    .color.primary-light-3--bg.subtitle.text-center.grow.py-3.white.body primary-light-3
    .color.primary-light-2--bg.subtitle.text-center.grow.py-3.white.body primary-light-2
    .color.primary-light-1--bg.subtitle.text-center.grow.py-3.white.body primary-light-1
    .color.primary--bg.subtitle.text-center.grow.py-3.white primary
    .color.primary-dark-1--bg.subtitle.text-center.grow.py-3.white.body primary-dark-1
    .color.primary-dark-2--bg.subtitle.text-center.grow.py-3.white.body primary-dark-2
    .color.primary-dark-3--bg.subtitle.text-center.grow.py-3.white.body primary-dark-3

  w-alert.text-light(type="info" bg-color="yellow-light-5" color="orange-dark-1").
    You can add #[code disableColorShades: true] to the Wave UI options to disable the color shades
    computing for the status colors and your custom colors.

  title-link.mt-12.mb-4.w-flex.align-center(h2 slug="color-palette")
    | Color Palette
    w-button.ml-6(
      bg-color="primary"
      sm
      dark
      @click.prevent="horizontal = !horizontal")
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
  .horizontal {overflow-x: auto;overflow-y: hidden;}
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
