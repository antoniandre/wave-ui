<template lang="pug">
main
  title-link.mt4(h1) Flex layout classes

  title-link(h2 slug="w-flex-component-and-helper-classes") #[span.code w-flex] component &amp; helper classes
  p.
    the #[code w-flex] component and the #[code .w-flex] class both allow a flex layout that you can
    easily control with the following classes or attributes on the component.
  ul.mt4
    li
      code.mr2 .row
      | By default. Displays in row (#[span.code flex-direction: row]).
    li
      code.mr2 .column
      | Displays in column (#[span.code flex-direction: column]).
    li.mt1
      code.mr2 .wrap
      | Wraps the flex content when it does not fit (#[span.code flex-wrap: wrap]).
    li.mt1
      code.mr2 .grow
      | Tells the element to occupy the available space (#[span.code flex-grow: 1]).
    li.mt1
      code.mr2 .no-grow
      | Tells the element to #[strong not] occupy the available space (#[span.code flex-grow: 0]).
    li.mt1
      code.mr2 .shrink
      | Tells the element to shrink if there is not enough space (#[span.code flex-shrink: 1]).
    li.mt1
      code.mr2 .no-shrink
      | Tells the element to #[strong not] shrink if there is not enough space (#[span.code flex-shrink: 0]).
    li.mt1
      code.mr2 .basis-zero
      | Distribute the children elements with equal space (#[span.code flex-basis: 0]).#[br]
      | By default, flex containers will distribute children elements according to their content width.
    li.mt1
      code.mr2 .fill-width
      | Sets a width of 100%.
    li.mt1
      code.mr2 .fill-height
      | Sets a height of 100%.

  title-link(h2) Alignments
  p Align children with these classes on the parent container:
  ul
    li.mt1
      code.mr2 .align-start
      | Applies this CSS rule: #[span.code align: flex-start].
    li.mt1
      code.mr2 .align-center
      | Applies this CSS rule: #[span.code align: center].
    li.mt1
      code.mr2 .align-end
      | Applies this CSS rule: #[span.code align: flex-end].
    li.mt1
      code.mr2 .justify-start
      | Applies this CSS rule: #[span.code justify: flex-start].
    li.mt1
      code.mr2 .justify-center
      | Applies this CSS rule: #[span.code justify: center].
    li.mt1
      code.mr2 .justify-end
      | Applies this CSS rule: #[span.code justify: flex-end].
    li.mt1
      code.mr2 .justify-space-around
      | Applies this CSS rule: #[span.code justify: space-around].
    li.mt1
      code.mr2 .justify-space-between
      | Applies this CSS rule: #[span.code justify: space-between].
    li.mt1
      code.mr2 .justify-space-evenly
      | Applies this CSS rule: #[span.code justify: space-evenly].

  p.mt4 Align a child with these classes directly on the child element:
  ul
    li.mt1
      code.mr2 .align-self-start
      | Applies this CSS rule: #[span.code align-self: flex-start].
    li.mt1
      code.mr2 .align-self-center
      | Applies this CSS rule: #[span.code align-self: center].
    li.mt1
      code.mr2 .align-self-end
      | Applies this CSS rule: #[span.code align-self: flex-end].
    li.mt1
      code.mr2 .justify-self-start
      | Applies this CSS rule: #[span.code justify-self: flex-start].
    li.mt1
      code.mr2 .justify-self-center
      | Applies this CSS rule: #[span.code justify-self: center].
    li.mt1
      code.mr2 .justify-self-end
      | Applies this CSS rule: #[span.code justify-self: flex-end].
    li.mt1
      code.mr2 .basis-zero
      | Applies this CSS rule directly on the element: #[span.code flex-basis: 0].

  p.mt6.
    The #[code.mx1 .spacer] class is also very helpful to separate 2 elements as it will occupy the full
    available space and push the elements on each side.

  .w-divider.my12
  title-link.mt12.headline(h2) Examples
  title-link.mt8.title2(h3) Justify
  .title3.mt6 w-flex, row direction (default)
  example
    p.code.mb1 .justify-start (default)
    .w-flex.pa3.blue-light5--bg.justify-start
      .box
      .box
      .box
    p.code.mt4.mb1 .justify-center
    .w-flex.pa3.blue-light5--bg.justify-center
      .box
      .box
      .box
    p.code.mt4.mb1 .justify-end
    .w-flex.pa3.blue-light5--bg.justify-end
      .box
      .box
      .box
    p.code.mt4.mb1 .justify-space-between
    .w-flex.pa3.blue-light5--bg.justify-space-between
      .box
      .box
      .box
    p.code.mt4.mb1 .justify-space-evenly
    .w-flex.pa3.blue-light5--bg.justify-space-evenly
      .box
      .box
      .box
    template(#pug).
      p.mb1 .justify-start (default)
      w-flex.pa3.blue-light5--bg(justify-start)
        .box
        .box
        .box

      p.mt4.mb1 .justify-center
      w-flex.pa3.blue-light5--bg(justify-center)
        .box
        .box
        .box

      p.mt4.mb1 .justify-end
      w-flex.pa3.blue-light5--bg(justify-end)
        .box
        .box
        .box

      p.mt4.mb1 .justify-space-between
      w-flex.pa3.blue-light5--bg(justify-space-between)
        .box
        .box
        .box

      p.mt4.mb1 .justify-space-evenly
      w-flex.pa3.blue-light5--bg(justify-space-evenly)
        .box
        .box
        .box
    template(#html).
      &lt;p&gt;.justify-start (default)&lt;/p&gt;
      &lt;w-flex justify-start class="blue-light5--bg pa3"&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;p&gt;.justify-center&lt;/p&gt;
      &lt;w-flex justify-center class="blue-light5--bg pa3"&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;p&gt;.justify-end&lt;/p&gt;
      &lt;w-flex justify-end class="blue-light5--bg pa3"&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;p&gt;.justify-space-between&lt;/p&gt;
      &lt;w-flex justify-space-between class="blue-light5--bg pa3"&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;p&gt;.justify-space-evenly&lt;/p&gt;
      &lt;w-flex justify-space-evenly class="blue-light5--bg pa3"&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;
    template(#css).
      .box {
        background-color: #9bbff9;
        border: 1px solid #55f;
        padding: 12px;
      }

  .title3 w-flex, column direction
  example
    w-flex(basis-zero wrap)
      .grow.mx1
        p.code.mb1 .justify-start (default)
        w-flex.wrapper(column align-center justify-start)
          .box
          .box
          .box
      .grow.mx1
        p.code.mb1 .justify-center
        w-flex.wrapper(column align-center justify-center)
          .box
          .box
          .box
      .grow.mx1
        p.code.mb1 .justify-space-between
        w-flex.wrapper(column align-center justify-space-between)
          .box
          .box
          .box
      .grow.mx1
        p.code.mb1 .justify-end
        w-flex.wrapper(column align-center justify-end)
          .box
          .box
          .box
    template(#pug).
      w-flex(basis-zero wrap)
        .grow.mx1
          p.mb1 .justify-start (default)
          w-flex.wrapper(column align-center justify-start)
            .box
            .box
            .box

        .grow.mx1
          p.mb1 .justify-center
          w-flex.wrapper(column align-center justify-center)
            .box
            .box
            .box

        .grow.mx1
          p.mb1 .justify-space-between
          w-flex.wrapper(column align-center justify-space-between)
            .box
            .box
            .box

        .grow.mx1
          p.mb1 .justify-end
          w-flex.wrapper(column align-center justify-end)
            .box
            .box
            .box
    template(#html).
      &lt;w-flex basis-zero wrap&gt;
        &lt;div class="grow mx1"&gt;
          &lt;p&gt;.justify-start (default)&lt;/p&gt;
          &lt;w-flex column align-center justify-start class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx1"&gt;
          &lt;p&gt;.justify-center&lt;/p&gt;
          &lt;w-flex column align-center justify-center class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx1"&gt;
          &lt;p&gt;.justify-space-between&lt;/p&gt;
          &lt;w-flex column align-center justify-space-between class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx1"&gt;
          &lt;p&gt;.justify-end&lt;/p&gt;
          &lt;w-flex column align-center justify-end class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;
    template(#css).
      .box {
        background-color: #9bbff9;
        border: 1px solid #55f;
        padding: 12px;
      }

      .wrapper {
        background-color: #eef7ff;
        padding: 12px;
        height: 140px;
      }

  title-link.mt12.title2(h3) Align
  p.
    By default if you don't set an alignment on the #[span.code w-flex] component, the content will
    be stretched vertically.#[br]
    If it is not what you want, you can either add an alignment on the #[span.code w-flex] component
    (case 2), or a self align on the children (case 3).

  .title3.mt6 w-flex, row direction (default)
  example
    w-flex(basis-zero wrap)
      .grow.mx1.xs12.sm4
        p 1. Default
        w-flex.wrapper2(justify-center)
          .box
          .box
          .box
      .grow.mx1.xs12.sm4
        p 2. Align center
        w-flex.wrapper2(justify-center align-center)
          .box
          .box
          .box
      .grow.mx1.xs12.sm4
        p 3. Align self start, center, end
        w-flex.wrapper2(justify-center)
          .box.align-self-start
          .box.align-self-center
          .box.align-self-end
    template(#pug).
      w-flex(basis-zero wrap)
        .grow.mx1.xs12.sm4
          p 1. Default
          w-flex.wrapper(justify-center)
            .box
            .box
            .box

        .grow.mx1.xs12.sm4
          p 2. Align center
          w-flex.wrapper(justify-center align-center)
            .box
            .box
            .box

        .grow.mx1.xs12.sm4
          p 3. Align self start, center, end
          w-flex.wrapper(justify-center)
            .box.align-self-start
            .box.align-self-center
            .box.align-self-end
    template(#html).
      &lt;w-flex basis-zero&gt;
        &lt;div class="grow mx1"&gt;
          &lt;p&gt;1. Default&lt;/p&gt;
          &lt;w-flex justify-center class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx1"&gt;
          &lt;p&gt;2. Align center&lt;/p&gt;
          &lt;w-flex justify-center align-center class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx1"&gt;
          &lt;p&gt;3. Align self start, center, end&lt;/p&gt;
          &lt;w-flex justify-center class="wrapper"&gt;
            &lt;div class="box align-self-start"&gt;&lt;/div&gt;
            &lt;div class="box align-self-center"&gt;&lt;/div&gt;
            &lt;div class="box align-self-end"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;
    template(#css).
      .box {
        background-color: #9bbff9;
        border: 1px solid #55f;
        padding: 12px;
      }

      .wrapper {
        background-color: #eef7ff;
        padding: 12px;
        height: 140px;
      }

  .title3.mt6 Align-self, column direction
  example
    w-flex(basis-zero wrap)
      .grow.mx1.xs12.sm4
        p 1. Default
        w-flex.wrapper2(column justify-center)
          .box
          .box
          .box
      .grow.mx1.xs12.sm4
        p 2. Align-center
        w-flex.wrapper2(column justify-center align-center)
          .box
          .box
          .box
      .grow.mx1.xs12.sm4
        p 3. Align self start, center, end
        w-flex.wrapper2(column justify-center)
          .box.align-self-start
          .box.align-self-center
          .box.align-self-end
    template(#pug).
      w-flex(basis-zero wrap)
        .grow.mx1.xs12.sm4
          p 1. Default
          w-flex.wrapper(column justify-center)
            .box
            .box
            .box

        .grow.mx1.xs12.sm4
          p 2. Align-center
          w-flex.wrapper(column justify-center align-center)
            .box
            .box
            .box

        .grow.mx1.xs12.sm4
          p 3. Align self start, center, end
          w-flex.wrapper(column justify-center)
            .box.align-self-start
            .box.align-self-center
            .box.align-self-end
    template(#html).
      &lt;w-flex basis-zero&gt;
        &lt;div class="grow mx1"&gt;
          &lt;p&gt;1. Default&lt;/p&gt;
          &lt;w-flex column justify-center class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx1"&gt;
          &lt;p&gt;2. Align-center&lt;/p&gt;
          &lt;w-flex column justify-center align-center class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx1"&gt;
          &lt;p&gt;3. Align self start, center, end&lt;/p&gt;
          &lt;w-flex column justify-center class="wrapper"&gt;
            &lt;div class="box align-self-start"&gt;&lt;/div&gt;
            &lt;div class="box align-self-center"&gt;&lt;/div&gt;
            &lt;div class="box align-self-end"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;
    template(#css).
      .box {
        background-color: #9bbff9;
        border: 1px solid #55f;
        padding: 12px;
      }

      .wrapper {
        background-color: #eef7ff;
        padding: 12px;
        height: 140px;
      }

  title-link.mt12.title2(h3) Using margin in flex context
  alert(warning).
    It's important to note that setting a margin on an element in a flex content will override its
    default positioning.#[br]
    Look at the following examples where the boxes have different margins applied.#[br]
    #[code maa] = #[span.code margin: auto], #[code mxa] = #[span.code margin-left: auto;margin-right: auto;]
    (read more in #[router-link(to="layout--spaces") Layout - spaces])
  example
    w-flex(basis-zero)
      .grow.mx1
        p 1. Row direction
        w-flex.wrapper2(justify-center align-center)
          .box.maa
          .box.maa
          .box.maa
      .grow.mx1
        p 2. Column direction
        w-flex.wrapper2(column justify-center)
          .box
          .box.mxa
          .box
    template(#pug).
      w-flex(basis-zero)
        .grow.mx1
          p 1. Row direction
          w-flex.wrapper(justify-center align-center)
            .box.maa
            .box.maa
            .box.maa

        .grow.mx1
          p 2. Column direction
          w-flex.wrapper(column justify-center)
            .box
            .box.mxa
            .box
    template(#html).
      &lt;w-flex basis-zero&gt;
        &lt;div class="grow mx1"&gt;
          &lt;p&gt;1. Row direction&lt;/p&gt;
          &lt;w-flex justify-center align-center class="wrapper"&gt;
            &lt;div class="box maa"&gt;&lt;/div&gt;
            &lt;div class="box maa"&gt;&lt;/div&gt;
            &lt;div class="box maa"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx1"&gt;
          &lt;p&gt;2. Column direction&lt;/p&gt;
          &lt;w-flex column justify-center class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box mxa"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;
      &lt;/w-flex&gt;
    template(#css).
      .box {
        background-color: #9bbff9;
        border: 1px solid #55f;
        padding: 12px;
      }

      .wrapper {
        background-color: #eef7ff;
        padding: 12px;
        height: 140px;
      }

  title-link.mt12.title3(h3 slug="not-justify-self") #[em Not #[span.code justify-self]]

  alert(warning)
    a.black.ml1(
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox"
      target="_blank")
      | There is no justify-self in Flexbox.
      w-icon.ml2(sm) mdi mdi-open-in-new

  title-link.mt12.title3(h3 slug="spacer") Spacer (#[code .spacer])
  p In a flex context, the spacer will push the elements to the sides.
  w-flex.xs-column(wrap basis-zero)
    example.grow(content-class="fill-height")
      w-flex.wrapper(align-center)
        .box
        .box
        .spacer
        .box
      template(#pug).
        w-flex.wrapper(align-center)
          .box
          .box
          .spacer
          .box
      template(#html).
        &lt;w-flex align-center class="wrapper"&gt;
          &lt;div class="box"&gt;&lt;/div&gt;
          &lt;div class="box"&gt;&lt;/div&gt;
          &lt;div class="spacer"&gt;&lt;/div&gt;
          &lt;div class="box"&gt;&lt;/div&gt;
        &lt;/w-flex&gt;
      template(#css).
        .box {
          background-color: #9bbff9;
          border: 1px solid #55f;
          padding: 12px;
        }

        .wrapper {
          background-color: #eef7ff;
          padding: 12px;
          height: 140px;
        }
    .shrink.mx2.xs-hide
    example.grow
      w-flex.wrapper(column)
        .box.shrink
        .box.shrink
        .spacer
        .box.shrink
      template(#pug).
        w-flex.wrapper(column)
          .box.shrink
          .box.shrink
          .spacer
          .box.shrink
      template(#html).
        &lt;w-flex column class="wrapper"&gt;
          &lt;div class="box shrink"&gt;&lt;/div&gt;
          &lt;div class="box shrink"&gt;&lt;/div&gt;
          &lt;div class="spacer"&gt;&lt;/div&gt;
          &lt;div class="box shrink"&gt;&lt;/div&gt;
        &lt;/w-flex&gt;
      template(#css).
        .box {
          background-color: #9bbff9;
          border: 1px solid #55f;
          padding: 12px;
        }

        .wrapper {
          background-color: #eef7ff;
          padding: 12px;
          height: 140px;
        }

  title-link(h2) Gap
  p.
    The #[strong.code w-flex] component accepts a #[code gap] option to equally space out the children
    inside the flex container.
  example
    w-flex(gap="6")
      .box.grow(v-for="i in 4")

    w-flex.mt12(gap="2")
      .box.grow(v-for="i in 6")

    template(#pug).
      w-flex(gap="6")
        .box.grow(v-for="i in 4")

      w-flex.mt12(gap="2")
        .box.grow(v-for="i in 6")
    template(#html).
      &lt;w-flex gap="3"&gt;
        &lt;div v-for="i in 4" class="box grow"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;w-flex gap="6" class="mt12"&gt;
        &lt;div v-for="i in 6" class="box grow"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;
    template(#css).
      .box {
        background-color: #9bbff9;
        border: 1px solid #55f;
        padding: 12px;
      }
  alert(success)
    | You can also use the #[code gap] option with the breakpoint-based grid classes
    | (E.g. #[code .xs6], etc.) when the boxes stay on a single line.
    example.lighter
      w-flex(gap="3")
        .box.xs3.code .xs3
        .box.xs3.code .xs3
        .box.xs6.code .xs6
      template(#pug).
        w-flex(gap="3")
          .box.xs3 .xs3
          .box.xs3 .xs3
          .box.xs6 .xs6
      template(#html).
          &lt;w-flex gap="3"&gt;
            &lt;div class="box xs3"&gt;&lt;/div&gt;
            &lt;div class="box xs3"&gt;&lt;/div&gt;
            &lt;div class="box xs6"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
      template(#css).
        .box {
          background-color: #e2ecfc;
          border: 1px solid #b2c2f0;
          padding: 12px 0;
          text-align: center;
        }
  title-link(h3) Caveat
  alert(warning).
    The #[code gap] option will not work with both wrap (#[code flex-wrap: wrap]) and the
    breakpoint-based grid system. The gap would overflow from the 100% total width distributed
    among the children of the #[strong.code w-flex], like illustrated in the following examples.
  w-flex.smd-column(wrap)
    .grow
      | Without gap
      example.lighter.mt2.grow
        .yellow-light5--bg.bd1
          w-flex(wrap)
            .box.xs6.code(v-for="i in 4") .xs6
        template(#pug).
          .yellow-light5--bg.bd1
            w-flex(wrap)
              .box.xs6(v-for="i in 4") .xs6
        template(#html).
          &lt;div class="yellow-light5--bg bd1"&gt;
            &lt;w-flex wrap&gt;
              &lt;div v-for="i in 4" class="box xs6"&gt;.xs6&lt;/div&gt;
            &lt;/w-flex&gt;
          &lt;/div&gt;
        template(#css).
          .box {
            background-color: #e2ecfc;
            border: 1px solid #b2c2f0;
            padding: 12px 0;
            text-align: center;
          }

    .mx2
    .grow
      | With gap
      example.lighter.mt2.grow
        .yellow-light5--bg.bd1
          w-flex(wrap gap="4")
            .box.xs6.code(v-for="i in 4") .xs6
        template(#pug).
          .yellow-light5--bg.bd1
            w-flex(wrap gap="4")
              .box.xs6.code(v-for="i in 4") .xs6
        template(#html).
          &lt;div class="yellow-light5--bg bd1"&gt;
            &lt;w-flex wrap gap="4"&gt;
              &lt;div v-for="i in 4" class="box xs6"&gt;.xs6&lt;/div&gt;
            &lt;/w-flex&gt;
          &lt;/div&gt;
        template(#css).
          .box {
            background-color: #e2ecfc;
            border: 1px solid #b2c2f0;
            padding: 12px 0;
            text-align: center;
          }

  p.mt4 #[strong Solution:] Here are two ways to bypass this limitation.
  h4 1. Wrap children in padded boxes &amp; apply equivalent negative margin on parent
  example.lighter
    .yellow-light5--bg.bd1
      w-flex.ma-2(wrap)
        .xs6.pa2(v-for="i in 4")
          .box.d-flex.justify-center.code .xs6
    template(#pug).
      .yellow-light5--bg.bd1
        w-flex.ma-2(wrap)
          .xs6.pa2(v-for="i in 4")
            .box .xs6
    template(#html).
      &lt;div class="yellow-light5--bg bd1"&gt;
        &lt;w-flex wrap class="ma-2"&gt;
          &lt;div v-for="i in 4" class="xs6 pa2"&gt;
            &lt;div class="box"&gt;.xs6&lt;/div&gt;
          &lt;/div&gt;
        &lt;/w-flex&gt;
      &lt;/div&gt;
    template(#css).
      .box {
        background-color: #e2ecfc;
        border: 1px solid #b2c2f0;
        padding: 12px 0;
        text-align: center;
      }

  h4 2. Use the #[strong.code w-grid] component instead
  example.lighter
    .yellow-light5--bg.bd1
      w-grid(columns="2" gap="4")
        .box.code &lt;div&gt;
        .box.code &lt;div&gt;
        .box.code &lt;div&gt;
        .box.code &lt;div&gt;
    template(#pug).
      .yellow-light5--bg.bd1
        w-grid(columns="2" gap="4")
          .box &lt;div&gt;
          .box &lt;div&gt;
          .box &lt;div&gt;
          .box &lt;div&gt;
    template(#html).
      &lt;div class="yellow-light5--bg bd1"&gt;
        &lt;w-grid columns="2" gap="4"&gt;
          &lt;div v-for="i in 4" class="box"&gt;
            &amp;amp;lt;div&amp;amp;gt;
          &lt;/div&gt;
        &lt;/w-grid&gt;
      &lt;/div&gt;
    template(#css).
      .box {
        background-color: #e2ecfc;
        border: 1px solid #b2c2f0;
        padding: 12px 0;
        text-align: center;
      }
</template>

<style lang="scss">
.main--layout-flex {
  .box {
    background-color: #9bbff9;
    border: 1px solid #55f;
    padding: 12px;
  }

  .lighter .box {
    background-color: #e2ecfc;
    border: 1px solid #b2c2f0;
    padding: 12px 0;
    text-align: center;
  }

  .wrapper, .wrapper2 {
    background-color: #eef7ff;
    padding: 12px;
    height: 140px;
  }
  .wrapper2 {height: 100px;}
}
</style>
