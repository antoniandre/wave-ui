<template lang="pug">
main
  title-link.mt4(h1) Colors
  p.
    Wave UI colors work in a very simple way: for instance the class #[code pink]
    (or any color listed below) can be applied to any element's text, and the class
    #[code pink--bg] can be applied to any element's background.

  p.
    All the components that accept colors, will accept the #[code color] prop for
    the text color, and #[code bg-color] for the background (when applicable).

  p This way, it is possible to mix a background color with a different text color of your choice.

  title-link(h2) Status colors
  p The status colors are useful to express the result of an action or for calls to action.
  .w-flex.wrap.ma-2.text-center.basis-zero
    .color.success--bg.title3.grow.py3.ma2 success
    .color.error--bg.title3.grow.py3.ma2 error
    .color.warning--bg.title3.grow.py3.ma2 warning
    .color.info--bg.title3.grow.py3.ma2 info

  w-flex.wrap.align-center.mt4
    p.my0 Example of use:
    ssh-pre.my0.mx2(
      v-show="$store.state.usePug"
      language="pug"
      :dark="$store.state.darkMode").
      w-button(bg-color="success") OK
    ssh-pre.my0.mx2(
      language="html-vue"
      v-show="!$store.state.usePug"
      :dark="$store.state.darkMode").
      &lt;w-button bg-color="success"&gt;OK&lt;w-button&gt;
    w-button(bg-color="success") OK

  alert(info).mb8
    ul
      li.
        It is possible to redefine these four status colors in the
        #[router-link(to="/options-presets-and-waveui") Wave UI global options].
      li.
        The four status colors always have a #[strong white text color by default] when they are used
        as a background color. You can easily override the text color via CSS.
      li
        | By default the status colors always have priority over other Wave UI defined colors.#[br]
        p.error.purple For instance this sentence has the classes #[code purple] and #[code error].

  h3 Status colors shades
  p.
    You may want a different shade of the status color, for interactive elements' hover effect for
    instance, for different levels of the same status, or just because it works better in your app.
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
      .color.info-light3--bg.title3.py3.ma2.body.xs12 info-light3
      .color.info-light2--bg.title3.py3.ma2.body.xs12 info-light2
      .color.info-light1--bg.title3.py3.ma2.body.xs12 info-light1
      .color.info-dark1--bg.title3.py3.ma2.white.body.xs12 info-dark1
      .color.info-dark2--bg.title3.py3.ma2.white.body.xs12 info-dark2
      .color.info-dark3--bg.title3.py3.ma2.white.body.xs12 info-dark3

  title-link(h2 slug="primary-secondary-and-your-own-colors-and-shades")
    | #[span.code.inherit primary], #[span.code.inherit secondary] and your own colors &amp; shades
  p.
    In addition to the built-in status colors and color palette below, you can define a set
    of custom colors.#[br]
    The primary color, and whichever color you add, will also be computed to 6 different shades:
    3 lighter ones and 3 darker ones.#[br]
    More shades would most likely be redundant with the color palette.

  w-flex.text-center(wrap :gap="4")
    .color.primary-light3--bg.title3.grow.basis-zero.py3.white.body primary-light3
    .color.primary-light2--bg.title3.grow.basis-zero.py3.white.body primary-light2
    .color.primary-light1--bg.title3.grow.basis-zero.py3.white.body primary-light1
    .color.primary--bg.title3.grow.basis-zero.py3.white primary
    .color.primary-dark1--bg.title3.grow.basis-zero.py3.white.body primary-dark1
    .color.primary-dark2--bg.title3.grow.basis-zero.py3.white.body primary-dark2
    .color.primary-dark3--bg.title3.grow.basis-zero.py3.white.body primary-dark3

  alert(warning).
    The primary color is considered dark by default, and will render,
    as well as its 3 darker shades, with a white text when used as a background color.

  p.mt6.title3 To start defining your own colors add them to the WaveUI options:
  ssh-pre(language="js").
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
        v-for="({ color, label, shades }, j) in colorPalette"
        :key="j")
        template(v-for="(shade, i) in shades")
          //- top color.
          .color.color--top(v-if="i === 6" :class="`${label}--bg`")
            span {{ label }}
            small {{ color }}
          //- shades colors.
          .color.color--shade(
            :key="i"
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

  title-link(h2 slug="primary-secondary-and-your-own-colors-and-shades")
    | #[span.code.inherit primary], #[span.code.inherit secondary] and your own colors &amp; shades
  p.
    In addition to the built-in status colors and the color palette, you can define your own set
    of custom colors.#[br]
    If you do it from the Wave UI global configuration, 6 shades will also be automatically generated
    for each color you add (as well as the primary and secondary color): 3 lighter and 3 darker
    ones.#[br]
    #[small More shades would most likely be redundant with the color palette.]

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

  title-link(h3) Defining your own CSS colors in the Wave UI configuration
  w-flex
    div
      .title4 Theme-specific (light or dark) colors.
      ssh-pre(language="js" :dark="$store.state.darkMode").
        colors: {
          light: {
            primary: '#9ac332',
            secondary: '#5d9a26',
            // Custom color names should be kebab-case.
            'mint-green': '#bff8db'
          }
        }
    w-divider.ma4(vertical) Or
    div
      .title4 If you don't care about themes.
      ssh-pre(language="js" :dark="$store.state.darkMode").
        colors: {
          primary: '#9ac332',
          secondary: '#5d9a26',
          // Custom color names should be kebab-case.
          'mint-green': '#bff8db'
        }

  alert(success).
    You can access all the colors with their hex code in your JavaScript via the
    #[code $waveui.colors] object.#[br]
    Read more about the #[code $waveui] object in the #[router-link(to="/options-presets-and-waveui#the-waveui-helper") Options, presets &amp; $waveui] page.

  alert(tip).
    If you don't need the 6 shades per color, you can disable them by adding
    #[code css: { colorShades: false }] to the Wave UI configuration.

  title-link(h3) Defining your own CSS colors in your CSS
  p.
    The predefined colors will make you go faster, but you also can define CSS classes in your
    CSS to associate a color to a class.#[br]
    For instance, you can define:
  ssh-pre(language="css" :dark="$store.state.darkMode").
    .mint-green {color: #acebd7;}
    .navy-blue--bg {background-color: #345276;}

  p.mt6 ...and use it on a component like this:
  w-flex(gap="6")
    ssh-pre.ml3(
      v-show="$store.state.usePug"
      :dark="$store.state.darkMode"
      language="pug").
      w-tag(color="mint-green" bg-color="navy-blue" lg)
    ssh-pre.ml3(
      v-show="!$store.state.usePug"
      :dark="$store.state.darkMode"
      language="html-vue").
      &lt;w-tag color="mint-green" bg-color="navy-blue" lg&gt;tag&lt;/w-tag&gt;
    w-tag.mb4.align-self-end(color="mint-green" bg-color="navy-blue" lg) Tag

  title-link(h2) Colors and themes
  p.
    If you use both dark and light themes, you should always use colors that are adapted to the
    app background color.#[br]
    Since it is not easy to find a color that will work for both themes, we recommend that you use
    a light and dark version of the same color.#[br]
    Wave UI provides these 5 CSS classes which carry colors that will automatically change when
    switching theme.
  w-table(:headers="tableHeaders" :items="tableItems" :mobile-breakpoint="700")
    template(#item-cell="{ label, header }")
      p(v-if="header.key === 'desc'") {{ label }}
      code(v-else) {{ label }}
  p.
    If you define theme-specific colors in the Wave UI config, they will also generate a CSS3
    variable that you can use anywhere.

</template>

<script>
import { colorPalette } from '@/wave-ui/utils/colors'

export default {
  data: () => ({
    colorPalette: colorPalette.filter(color => !['black', 'white', 'inherit', 'transparent'].includes(color.label)),
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

    &:not(.white--bg):not(.transparent--bg):not(.inherit--bg) {color: #fff;}

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
