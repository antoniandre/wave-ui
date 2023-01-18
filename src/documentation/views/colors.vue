<template lang="pug">
main
  title-link.mt4(h1) Colors
  p.
    Wave UI colors work in a very simple way: for instance the class
    #[code pink] (or any color listed below) can be applied to any
    element's text, and the class #[code pink--bg] can be applied to
    any element's background.

  p.
    All the components that accept colors, will accept the #[code color]
    prop for the text color, and #[code bg-color] for the background when applicable.

  p.
    This way, it is possible to mix a background color with a different
    text color of your choice.

  title-link(h2) Status colors
  .w-flex.wrap.ma-2.text-center.basis-zero
    .color.success--bg.title3.grow.py3.ma2 success
    .color.error--bg.title3.grow.py3.ma2 error
    .color.warning--bg.title3.grow.py3.ma2 warning
    .color.info--bg.title3.grow.py3.ma2 info
  alert(warning).mb12.
    The four status colors are considered dark and will therefore have a white text by default when used as a background color.
    You can override this via CSS.

  h3 Status colors shades
  .w-flex.wrap.mb12.ma-2.text-center.basis-zero
    .w-flex.wrap
      .color.success-light3--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") success-light3
      .color.success-light2--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") success-light2
      .color.success-light1--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") success-light1
      .color.success-dark1--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") success-dark1
      .color.success-dark2--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") success-dark2
      .color.success-dark3--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") success-dark3
    .w-flex.wrap
      .color.error-light3--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") error-light3
      .color.error-light2--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") error-light2
      .color.error-light1--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") error-light1
      .color.error-dark1--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") error-dark1
      .color.error-dark2--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") error-dark2
      .color.error-dark3--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") error-dark3
    .w-flex.wrap
      .color.warning-light3--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") warning-light3
      .color.warning-light2--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") warning-light2
      .color.warning-light1--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") warning-light1
      .color.warning-dark1--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") warning-dark1
      .color.warning-dark2--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") warning-dark2
      .color.warning-dark3--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") warning-dark3
    .w-flex.wrap
      .color.info-light3--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") info-light3
      .color.info-light2--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") info-light2
      .color.info-light1--bg.title3.py3.ma2.body.xs12(:class="{ black: $store.state.darkMode }") info-light1
      .color.info-dark1--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") info-dark1
      .color.info-dark2--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") info-dark2
      .color.info-dark3--bg.title3.py3.ma2.body.xs12(:class="{ white: !$store.state.darkMode }") info-dark3

  title-link(h2 slug="primary-secondary-and-your-own-colors-and-shades")
    | #[span.code.inherit primary], #[span.code.inherit secondary] and your own colors &amp; shades
  p.
    In addition to the built-in status colors and color palette below, you can define a set
    of custom colors.#[br]
    The primary color, and whichever color you add, will also be computed to 6 different shades:
    3 lighter ones and 3 darker ones.#[br]
    More shades would most likely be redundant with the color palette.

  w-flex.text-center(wrap :gap="4")
    .color.primary-light3--bg.title3.grow.basis-zero.py3.body(:class="{ black: $store.state.darkMode }") primary-light3
    .color.primary-light2--bg.title3.grow.basis-zero.py3.body(:class="{ black: $store.state.darkMode }") primary-light2
    .color.primary-light1--bg.title3.grow.basis-zero.py3.body(:class="{ black: $store.state.darkMode }") primary-light1
    .color.primary--bg.title3.grow.basis-zero.py3(:class="{ white: !$store.state.darkMode }") primary
    .color.primary-dark1--bg.title3.grow.basis-zero.py3.body(:class="{ white: !$store.state.darkMode }") primary-dark1
    .color.primary-dark2--bg.title3.grow.basis-zero.py3.body(:class="{ white: !$store.state.darkMode }") primary-dark2
    .color.primary-dark3--bg.title3.grow.basis-zero.py3.body(:class="{ white: !$store.state.darkMode }") primary-dark3

  alert(warning).
    The primary color is considered dark by default, and will render,
    as well as its 3 darker shades, with a white text when used as a background color.

  p.mt6.title3 To start defining your own colors add them to the WaveUI options:
  ssh-pre(language="js" :dark="$store.state.darkMode").
    const waveui = new WaveUI({
      colors: {
        primary: '#9ac332',
        secondary: '#5d9a26'
      }
    })

  alert(tip).
    If you don't need it, you can add #[code css: { colorShades: false }] to the Wave UI options to disable
    the color shades computing of the status colors and your custom colors.

  alert(success).
    You can access all the colors with their hex code in your JavaScript as well via the
    #[code $waveui.colors] object.

  title-link.mt12.mb4.w-flex.align-center(h2 slug="color-palette")
    | Color Palette
    w-button.ml6(
      sm
      @click.prevent="horizontal = !horizontal")
      | {{ horizontal ? 'Vertical' : 'Horizontal' }} display
  p.
    This built-in color palette will complete your collection of available colors for fast and easy designs.

  .text-center(:class="`${horizontal ? 'horizontal' : 'vertical'}`")
    .w-flex.wrap.ma-2.basis-zero
      .color-palette.ma2(
        v-for="({ color, label, shades }, j) in colors"
        :key="j")
        template(v-for="(shade, i) in shades" :key="i")
          //- top color.
          .color.color--top(v-if="i === 6" :class="`${label}--bg`")
            span {{ label }}
            small {{ color }}
          //- shades colors.
          .color.color--shade(
            :class="[`${shade.label}--bg`, i >= 6 ? 'color--darker' : '']")
            span {{ shade.label }}
            small {{ shade.color }}
      .color-palette.ma2
        .w-flex.ma-2(:class="{ column: !horizontal }")
          .color.color--top.ma2.black--bg
            span black
            small #000
          .color.color--top.ma2.white--bg.black
            span white
            small #fff
          .color.color--top.ma2.transparent--bg.base-color
            span transparent
            small transparent
          .color.color--top.ma2.inherit--bg.base-color
            span inherit
            small inherit

  title-link(h2) Your own CSS color classes
  p.
    All the presented colors above are here to make you go faster when you need a color.#[br]
    But you are completely free to define CSS classes in your CSS to associate a color to a class.#[br]
    For instance, you can define:
  ssh-pre(language="css" :dark="$store.state.darkMode").
    .mint-green {color: #acebd7;}
    .navy-blue--bg {background-color: #345276;}

  p.mt6 ...and use it on a component like this:
  w-flex(gap="6")
    ssh-pre.ml3(
      v-show="$store.state.usePug"
      :dark="$store.state.darkMode"
      language="pug"
      label="Pug").
      w-tag(color="mint-green" bg-color="navy-blue" lg)
    ssh-pre.ml3(
      v-show="!$store.state.usePug"
      :dark="$store.state.darkMode"
      language="html-vue").
      &lt;w-tag color="mint-green" bg-color="navy-blue" lg&gt;tag&lt;/w-tag&gt;
    w-tag.mb4.align-self-end(color="mint-green" bg-color="navy-blue" lg) Tag
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
.main--colors {
  .horizontal {overflow-x: auto;overflow-y: hidden;}
  .color {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .ssh-pre .color {display: inline-block;}
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
    &.white--bg, &.transparent--bg, &.inherit--bg {border: 1px solid #999;}
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

.mint-green {color: #acebd7;}
.navy-blue--bg {background-color: #345276;}
</style>
