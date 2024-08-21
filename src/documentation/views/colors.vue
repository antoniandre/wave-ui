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
      .color.success-light6--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") success-light6
      .color.success-light5--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") success-light5
      .color.success-light4--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") success-light4
      .color.success-light3--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") success-light3
      .color.success-light2--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") success-light2
      .color.success-light1--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") success-light1
      .color.success--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") success
      .color.success-dark1--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") success-dark1
      .color.success-dark2--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") success-dark2
      .color.success-dark3--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") success-dark3
      .color.success-dark4--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") success-dark4
      .color.success-dark5--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") success-dark5
      .color.success-dark6--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") success-dark6
    .w-flex.wrap
      .color.error-light6--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") error-light6
      .color.error-light5--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") error-light5
      .color.error-light4--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") error-light4
      .color.error-light3--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") error-light3
      .color.error-light2--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") error-light2
      .color.error-light1--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") error-light1
      .color.error--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") error
      .color.error-dark1--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") error-dark1
      .color.error-dark2--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") error-dark2
      .color.error-dark3--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") error-dark3
      .color.error-dark4--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") error-dark4
      .color.error-dark5--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") error-dark5
      .color.error-dark6--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") error-dark6
    .w-flex.wrap
      .color.warning-light6--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") warning-light6
      .color.warning-light5--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") warning-light5
      .color.warning-light4--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") warning-light4
      .color.warning-light3--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") warning-light3
      .color.warning-light2--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") warning-light2
      .color.warning-light1--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") warning-light1
      .color.warning--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") warning
      .color.warning-dark1--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") warning-dark1
      .color.warning-dark2--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") warning-dark2
      .color.warning-dark3--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") warning-dark3
      .color.warning-dark4--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") warning-dark4
      .color.warning-dark5--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") warning-dark5
      .color.warning-dark6--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") warning-dark6
    .w-flex.wrap
      .color.info-light6--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") info-light6
      .color.info-light5--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") info-light5
      .color.info-light4--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") info-light4
      .color.info-light3--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") info-light3
      .color.info-light2--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") info-light2
      .color.info-light1--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") info-light1
      .color.info--bg.title3.py3.mx2.my0.body.xs12(:class="{ black: $store.state.darkMode }") info
      .color.info-dark1--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") info-dark1
      .color.info-dark2--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") info-dark2
      .color.info-dark3--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") info-dark3
      .color.info-dark4--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") info-dark4
      .color.info-dark5--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") info-dark5
      .color.info-dark6--bg.title3.py3.mx2.my0.body.xs12(:class="{ white: !$store.state.darkMode }") info-dark6

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
        v-for="({ label, color, shades }, j) in colorPalette"
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

  title-link(h2 slug="primary-secondary-and-your-own-colors-and-shades")
    | #[span.code.inherit primary], #[span.code.inherit secondary] and your own colors &amp; shades
  p.
    In addition to the built-in status colors and the color palette, you can define your own set
    of custom colors.#[br]
    If you do it from the Wave UI global configuration, 12 shades will also be automatically generated
    for each color you add (as well as the primary and secondary color): 6 lighter and 6 darker
    ones.#[br]
    #[small More shades would most likely be redundant with the color palette.]

  .w-flex.text-center.smd-column
    .color.primary-light6--bg.grow.basis-zero.py3.size--xs(:class="{ black: $store.state.darkMode }") primary-light6
    .color.primary-light5--bg.grow.basis-zero.py3.size--xs(:class="{ black: $store.state.darkMode }") primary-light5
    .color.primary-light4--bg.grow.basis-zero.py3.size--xs(:class="{ black: $store.state.darkMode }") primary-light4
    .color.primary-light3--bg.grow.basis-zero.py3.size--xs(:class="{ black: $store.state.darkMode }") primary-light3
    .color.primary-light2--bg.grow.basis-zero.py3.size--xs(:class="{ black: $store.state.darkMode }") primary-light2
    .color.primary-light1--bg.grow.basis-zero.py3.size--xs(:class="{ black: $store.state.darkMode }") primary-light1
    .color.primary--bg.title3.my0.grow.basis-zero.py3(:class="{ white: !$store.state.darkMode }") primary
    .color.primary-dark1--bg.grow.basis-zero.py3.size--xs(:class="{ white: !$store.state.darkMode }") primary-dark1
    .color.primary-dark2--bg.grow.basis-zero.py3.size--xs(:class="{ white: !$store.state.darkMode }") primary-dark2
    .color.primary-dark3--bg.grow.basis-zero.py3.size--xs(:class="{ white: !$store.state.darkMode }") primary-dark3
    .color.primary-dark4--bg.grow.basis-zero.py3.size--xs(:class="{ white: !$store.state.darkMode }") primary-dark4
    .color.primary-dark5--bg.grow.basis-zero.py3.size--xs(:class="{ white: !$store.state.darkMode }") primary-dark5
    .color.primary-dark6--bg.grow.basis-zero.py3.size--xs(:class="{ white: !$store.state.darkMode }") primary-dark6

  alert(warning).
    The primary color is considered dark by default, and will render,
    as well as its 6 darker shades, with a white text when used as a background color.

  title-link(h3) Defining your own CSS colors in the Wave UI configuration
  .w-flex.smd-column.gap4
    div
      strong Theme-specific (light or dark) colors.
      ssh-pre(language="js" :dark="$store.state.darkMode").
        colors: {
          light: {
            primary: '#9ac332',
            secondary: '#5d9a26',
            // Custom color names should be kebab-case.
            'mint-green': '#bff8db'
          }
        }
    w-divider(:vertical="!$waveui.breakpoint.sm && !$waveui.breakpoint.xs") Or
    div
      strong If you don't care about themes.
      ssh-pre(language="js" :dark="$store.state.darkMode").
        colors: {
          primary: '#9ac332',
          secondary: '#5d9a26',
          // Custom color names should be kebab-case.
          'mint-green': '#bff8db'
        }
    w-divider(:vertical="!$waveui.breakpoint.sm && !$waveui.breakpoint.xs") Or
    div
      strong If you want more fine grained control.
      ssh-pre(language="js" :dark="$store.state.darkMode").
        colors: {
          primary: {
            color: '#9ac332',
            lightIncrement: 11,
            lightOffset: 0,
            darkIncrement: 8,
            darkOffset: 0,
          },
          secondary: '#5d9a26',
          // Custom color names should be kebab-case.
          'mint-green': '#bff8db'
        }

  alert(success).
    You can access all the colors with their hex code in your JavaScript via the
    #[code $waveui.colors] object.#[br]
    Read more about the #[code $waveui] object in the #[router-link(to="/options-presets-and-waveui#the-waveui-helper") Options, presets &amp; $waveui] page.

  alert(tip).
    If you don't need the 12 shades per color, you can disable them by adding
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

  title-link(h2) Colors and theming
  p.
    If you offer your users both dark and light themes, you should always use colors that are adapted
    to the app background color.#[br]
    Since it is not easy to find a color that will work for both themes, we recommend that you use
    a light and dark version of the same color (using CSS3 variables).#[br]
    Wave UI provides these 5 CSS classes which carry colors that will automatically change when
    switching theme (powered by CSS3 variables).
  alert(tip)
    strong Important Note
    p.
      each of the following CSS3 variable is not containing a color but only its RGB channels.
      This allows us to apply an alpha channel on that color if we need
      (e.g. #[code rgba(var(--w-base-bg-color-rgb), 0.3)])! 😉#[br]
    .body.
      You can investigate what these variables contain directly from the dev tools of your browser,
      in the styles panel:
    ssh-pre.mt1.size--xs.d-iblock(language="css").
      :root[data-theme=dark] {
        --w-base-bg-color-rgb: 34, 34, 34;
        --w-base-color-rgb: 255, 255, 255;
        --w-contrast-bg-color-rgb: 255, 255, 255;
        --w-contrast-color-rgb: 0, 0, 0;
        --w-caption-color-rgb: 110, 110, 110;
        --w-disabled-color-rgb: 74, 74, 74;
      }
  w-table(:headers="tableHeaders" :items="tableItems" :mobile-breakpoint="700")
    template(#item-cell="{ label, header }")
      p(v-if="header.key === 'desc'") {{ label }}
      code(v-else) {{ label }}
  p.
    If you define theme-specific colors in the Wave UI config, they will also generate a CSS3
    variable that you can use anywhere.
</template>

<script>
import { colorPalette } from '@/wave-ui/utils/colors.js'

export default {
  data: () => ({
    colorPalette: colorPalette.filter(color => !['black', 'white', 'inherit', 'transparent'].includes(color.label)),
    horizontal: false,
    tableHeaders: [
      { label: 'CSS class', key: 'cssClass' },
      { label: 'CSS3 variable', key: 'css3Var' },
      { label: 'Light theme default', key: 'lightDefault', width: '10%' },
      { label: 'Dark theme default', key: 'darkDefault', width: '10%' },
      { label: 'Description', key: 'desc', width: '40%' }
    ],
    tableItems: [
      { cssClass: '.base-color', css3Var: '--w-base-color-rgb', lightDefault: '#000', darkDefault: '#fff', desc: 'Base color for texts. For light theme this color should be dark and vice-versa.' },
      { cssClass: '.base-color--bg', css3Var: '--w-base-bg-color-rgb', lightDefault: '#fff', darkDefault: '#222', desc: 'Base background color. For light theme this color should be light and vice-versa.' },
      { cssClass: '.contrast-color', css3Var: '--w-contrast-color-rgb', lightDefault: '#fff', darkDefault: '#000', desc: 'A high contrast color from the current background of the app.' },
      { cssClass: '.contrast-color--bg', css3Var: '--w-contrast-bg-color-rgb', lightDefault: '#000', darkDefault: '#fff', desc: 'A high contrast background color from the current background of the app.' },
      { cssClass: '.disabled-color', css3Var: '--w-disabled-color-rgb', lightDefault: '#ccc', darkDefault: '#4a4a4a', desc: 'When a form element is disabled.' }
    ]
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
