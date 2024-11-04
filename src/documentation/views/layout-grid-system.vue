<template lang="pug">
main
  title-link.mt4(h1) Grid system (flexbox)

  .title3 The grid system (using flexbox) is 12-cell based by default.
  p.
    Its purpose is to divide the available width (in percentage)
    of a container in 12 cells to easily let you create the design that you want.#[br]
    You can then assign this created layout to a particular breakpoint.

  alert(info)
    | The grid is 12-cell based by default, but you can override it to make it a 24-cell grid,
    | or whatever you want via the global Wave UI options:
    ssh-pre(language="js" :dark="$store.state.darkMode").mb0.
      new WaveUI({
        css: {
          grid: 24
        }
      })

  title-link(h2) How to use
  alert(info)
    | For this flexbox layout, you need to:
    ol
      li.
        Use the #[strong.code w-flex] component or class on the parent in order to set the
        #[strong flex] context (#[code display: flex]).
      li.
        Use the predefined classes on the children in order to divide the available width
        according to the class in use.

  fieldset.w-flex.pa4.pt3.amber-light5--bg(style="position: relative")
    legend.px1.round #[strong.code.amber-dark3 &lt;w-flex&gt;]
    fieldset.xs3.light-blue-light5--bg.pa3.code
      legend.light-blue-dark2.px1 div.xs3
    fieldset.xs9.light-blue-light5--bg.pa3.code.ml1
      legend.light-blue-dark2.px1 div.xs9
  p.mt6 In this case:
  ul
    li xs3 represents 3 units of the 12-cell-based grid, which equals to: (100% total width ÷ 12 cells) x 3 = 25%
    li xs9 represents 9 units of the 12-cell-based grid, which equals to: (100% total width ÷ 12 cells) x 9 = 75%

  title-link(h2) Basic grid
  p.
    Let's start with a basic example. The following splitting is applied on the #[span.code xs]
    breakpoint and will thus be applied on all the breakpoints.
  alert(tip).
    The grid cells must be in a flex context to display inline, you can wrap them in a
    #[strong.code w-flex] component or #[code .w-flex] CSS class.

  example
    .w-flex.wrap.text-center(:class="$store.state.darkMode ? 'black' : 'white'")
      .xs12.pa1
        .primary-dark1--bg.py3(:class="{ white: !$store.state.darkMode }") xs12
      .xs6.pa1
        .primary--bg.py3 xs6
      .xs6.pa1
        .primary--bg.py3 xs6
      .xs4.pa1(v-for="i in 3")
        .primary-light1--bg.py3 xs4
      .xs3.pa1(v-for="i in 4")
        .primary-light2--bg.py3 xs3
      .xs2.pa1(v-for="i in 6")
        .primary-light3--bg.py3.black xs2
      .xs1.pa1(v-for="i in 12" :key="i")
        .primary-light5--bg.py3.black xs1
    template(#pug).
      w-flex.text-center(wrap)
        .xs12.pa1
          .primary-dark1--bg.py3 xs12
        .xs6.pa1
          .primary--bg.py3 xs6
        .xs6.pa1
          .primary--bg.py3 xs6
        .xs4.pa1(v-for="i in 3")
          .primary-light1--bg.py3 xs4
        .xs3.pa1(v-for="i in 4")
          .primary-light2--bg.py3 xs3
        .xs2.pa1(v-for="i in 6")
          .primary-light3--bg.black.py3 xs2
        .xs1.pa1(v-for="i in 12" :key="i")
          .primary-light5--bg.black.py3 xs1
    template(#html).
      &lt;w-flex wrap class="text-center"&gt;
        &lt;div class="xs12 pa1"&gt;
          &lt;div class="primary-dark1--bg py3"&gt;xs12&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs6 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;xs6&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="xs6 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;xs6&lt;/div&gt;
        &lt;/div&gt;

        &lt;div v-for="i in 3" class="xs4 pa1"&gt;
          &lt;div class="primary-light1--bg white py3"&gt;xs4&lt;/div&gt;
        &lt;/div&gt;

        &lt;div v-for="i in 4" class="xs3 pa1"&gt;
          &lt;div class="primary-light2--bg white py3"&gt;xs3&lt;/div&gt;
        &lt;/div&gt;

        &lt;div v-for="i in 6" class="xs2 pa1"&gt;
          &lt;div class="primary-light3--bg py3"&gt;xs2&lt;/div&gt;
        &lt;/div&gt;

        &lt;div v-for="i in 12" :key="i" class="xs1 pa1"&gt;
          &lt;div class="primary-light5--bg py3"&gt;xs1&lt;/div&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;

  example.mt8
    .w-flex.wrap.text-center(:class="$store.state.darkMode ? 'black' : 'white'")
      .xs1.pa1
        .primary-dark1--bg.py3 xs1
      .xs11.pa1
        .primary-dark1--bg.py3 xs11
      .xs2.pa1
        .primary--bg.py3 xs2
      .xs10.pa1
        .primary--bg.py3 xs10
      .xs3.pa1
        .primary-light1--bg.py3 xs3
      .xs9.pa1
        .primary-light1--bg.py3 xs9
      .xs4.pa1
        .primary-light2--bg.py3 xs4
      .xs8.pa1
        .primary-light2--bg.py3 xs8
      .xs5.pa1
        .primary-light3--bg.py3 xs5
      .xs7.pa1
        .primary-light3--bg.py3 xs7
    template(#pug).
      w-flex.text-center(wrap)
        .xs1.pa1
          .primary-dark1--bg.py3 xs1
        .xs11.pa1
          .primary-dark1--bg.py3 xs11
        .xs2.pa1
          .primary--bg.py3 xs2
        .xs10.pa1
          .primary--bg.py3 xs10
        .xs3.pa1
          .primary-light1--bg.py3 xs3
        .xs9.pa1
          .primary-light1--bg.py3 xs9
        .xs4.pa1
          .primary-light2--bg.py3 xs4
        .xs8.pa1
          .primary-light2--bg.py3 xs8
        .xs5.pa1
          .primary-light3--bg.py3 xs5
        .xs7.pa1
          .primary-light3--bg.py3 xs7
    template(#html).
      &lt;w-flex wrap class="text-center"&gt;
        &lt;div class="xs1 pa1"&gt;
          &lt;div class="primary-dark1--bg py3"&gt;xs1&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="xs11 pa1"&gt;
          &lt;div class="primary-dark1--bg py3"&gt;xs11&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs2 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;xs2&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="xs10 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;xs10&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs3 pa1"&gt;
          &lt;div class="primary-light1--bg white py3"&gt;xs3&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="xs9 pa1"&gt;
          &lt;div class="primary-light1--bg white py3"&gt;xs9&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs4 pa1"&gt;
          &lt;div class="primary-light2--bg white py3"&gt;xs4&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="xs8 pa1"&gt;
          &lt;div class="primary-light2--bg white py3"&gt;xs8&lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs5 pa1"&gt;
          &lt;div class="primary-light3--bg py3"&gt;xs5&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="xs7 pa1"&gt;
          &lt;div class="primary-light3--bg py3"&gt;xs7&lt;/div&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;

  title-link(h2) Operating with breakpoints
  example
    w-card(:class="$store.state.darkMode ? 'grey-dark4--bg' : 'blue-light5--bg'")
      .title2.mt0 Current breakpoint: #[code {{ $waveui.breakpoint.name }}]
      em.grey.mt1 Resizing your browser will update the current breakpoint.
    template(#pug).
      w-card.blue-light5--bg
        .title2.black
          | Current breakpoint:
          code {{ '\{\{ $waveui.breakpoint.name \}\}' }}
        em.grey.mt1 Resizing your browser will update the current breakpoint.
    template(#html).
      &lt;w-card class="blue-light5--bg"&gt;
        &lt;div class="title2 mt0 black"&gt;
          Current breakpoint:
          &lt;code&gt;{{ '\{\{ $waveui.breakpoint.name \}\}' }}&lt;/code&gt;
        &lt;/div&gt;
        &lt;em class="grey mt1"&gt;
          Resizing your browser will update the current breakpoint.
        &lt;/em&gt;
      &lt;/w-card&gt;

  p For this example, resize your browser and observe the different layout when crossing a breakpoint.
  example
    w-flex.text-center(wrap)
      .xs12.md6.lg4.xl2.pa1
        .primary--bg.py3
          template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
          template(v-else-if="$waveui.breakpoint.md") md6
          template(v-else-if="$waveui.breakpoint.lg") lg4
          template(v-else-if="$waveui.breakpoint.xl") xl2
      .xs12.md6.lg4.xl2.pa1
        .primary--bg.py3
          template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
          template(v-else-if="$waveui.breakpoint.md") md6
          template(v-else-if="$waveui.breakpoint.lg") lg4
          template(v-else-if="$waveui.breakpoint.xl") xl2
      .xs12.md6.lg4.xl2.pa1
        .primary--bg.py3
          template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
          template(v-else-if="$waveui.breakpoint.md") md6
          template(v-else-if="$waveui.breakpoint.lg") lg4
          template(v-else-if="$waveui.breakpoint.xl") xl2
      .xs12.md6.lg4.xl2.pa1
        .primary--bg.py3
          template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
          template(v-else-if="$waveui.breakpoint.md") md6
          template(v-else-if="$waveui.breakpoint.lg") lg4
          template(v-else-if="$waveui.breakpoint.xl") xl2
      .xs12.md6.lg4.xl2.pa1
        .primary--bg.py3
          template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
          template(v-else-if="$waveui.breakpoint.md") md6
          template(v-else-if="$waveui.breakpoint.lg") lg4
          template(v-else-if="$waveui.breakpoint.xl") xl2
      .xs12.md6.lg4.xl2.pa1
        .primary--bg.py3
          template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
          template(v-else-if="$waveui.breakpoint.md") md6
          template(v-else-if="$waveui.breakpoint.lg") lg4
          template(v-else-if="$waveui.breakpoint.xl") xl2
    template(#pug).
      w-flex.text-center(wrap)
        .xs12.md6.lg4.xl2.pa1
          .primary--bg.py3
            template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
            template(v-else-if="$waveui.breakpoint.md") md6
            template(v-else-if="$waveui.breakpoint.lg") lg4
            template(v-else-if="$waveui.breakpoint.xl") xl2

        .xs12.md6.lg4.xl2.pa1
          .primary--bg.py3
            template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
            template(v-else-if="$waveui.breakpoint.md") md6
            template(v-else-if="$waveui.breakpoint.lg") lg4
            template(v-else-if="$waveui.breakpoint.xl") xl2

        .xs12.md6.lg4.xl2.pa1
          .primary--bg.py3
            template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
            template(v-else-if="$waveui.breakpoint.md") md6
            template(v-else-if="$waveui.breakpoint.lg") lg4
            template(v-else-if="$waveui.breakpoint.xl") xl2

        .xs12.md6.lg4.xl2.pa1
          .primary--bg.py3
            template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
            template(v-else-if="$waveui.breakpoint.md") md6
            template(v-else-if="$waveui.breakpoint.lg") lg4
            template(v-else-if="$waveui.breakpoint.xl") xl2

        .xs12.md6.lg4.xl2.pa1
          .primary--bg.py3
            template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
            template(v-else-if="$waveui.breakpoint.md") md6
            template(v-else-if="$waveui.breakpoint.lg") lg4
            template(v-else-if="$waveui.breakpoint.xl") xl2

        .xs12.md6.lg4.xl2.pa1
          .primary--bg.py3
            template(v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm") xs12
            template(v-else-if="$waveui.breakpoint.md") md6
            template(v-else-if="$waveui.breakpoint.lg") lg4
            template(v-else-if="$waveui.breakpoint.xl") xl2
    template(#html).
      &lt;w-flex wrap class="text-center"&gt;
        &lt;div class="xs12 md6 lg4 xl2 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;
            &lt;template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm"&gt;xs12&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.md"&gt;md6&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.lg"&gt;lg4&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.xl"&gt;xl2&lt;/template&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs12 md6 lg4 xl2 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;
            &lt;template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm"&gt;xs12&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.md"&gt;md6&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.lg"&gt;lg4&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.xl"&gt;xl2&lt;/template&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs12 md6 lg4 xl2 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;
            &lt;template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm"&gt;xs12&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.md"&gt;md6&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.lg"&gt;lg4&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.xl"&gt;xl2&lt;/template&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs12 md6 lg4 xl2 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;
            &lt;template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm"&gt;xs12&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.md"&gt;md6&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.lg"&gt;lg4&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.xl"&gt;xl2&lt;/template&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs12 md6 lg4 xl2 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;
            &lt;template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm"&gt;xs12&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.md"&gt;md6&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.lg"&gt;lg4&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.xl"&gt;xl2&lt;/template&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="xs12 md6 lg4 xl2 pa1"&gt;
          &lt;div class="primary--bg py3"&gt;
            &lt;template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm"&gt;xs12&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.md"&gt;md6&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.lg"&gt;lg4&lt;/template&gt;
            &lt;template v-else-if="$waveui.breakpoint.xl"&gt;xl2&lt;/template&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;

  title-link(h2) Using the gap option with the grid system
  p
    | The #[strong.code.inherit w-flex] component has a
    router-link.ml1(to="/layout--flex#gap") #[span.code.inherit gap] option
    | , as well as #[router-link.ml1(to="/layout--flex#caveat") a caveat] when used with flex wrap.
</template>

<style lang="scss">
.main--layout-grid-system {
  .xs1 {overflow: hidden;}
  .xs1 div {display: flex;justify-content: center;}

  fieldset {border: 2px solid rgba(#ca4, 0.8);}
  fieldset fieldset {border: 1px solid rgba(#6cf, 0.8);}
}
</style>
