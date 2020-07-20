<template lang="pug">
div
  title-link.mt-4(h1) Flex layout classes

  title-link(h2 slug="w-flex-component-and-helper-classes") #[span.code w-flex] component &amp; helper classes
  p.
    the #[code w-flex] component and the #[code .w-flex] class both allow a flex layout that you can
    easily control with the following classes or attributes on the component.
  ul.mt-4
    li
      code.mr-2 .column
      | Displays in column (#[span.code flex-direction: column]).
    li.mt-1
      code.mr-2 .wrap
      | Wraps the flex content when it does not fit (#[span.code flex-wrap: wrap]).
    li.mt-1
      code.mr-2 .grow
      | Tells the element to occupy the available space (#[span.code flex-grow: 1]).
    li.mt-1
      code.mr-2 .no-grow
      | Tells the element to #[strong not] occupy the available space (#[span.code flex-grow: 0]).
    li.mt-1
      code.mr-2 .shrink
      | Tells the element to shrink if there is not enough space (#[span.code flex-shrink: 1]).
    li.mt-1
      code.mr-2 .no-shrink
      | Tells the element to #[strong not] shrink if there is not enough space (#[span.code flex-shrink: 0]).
    li.mt-1
      code.mr-2 .basis-0
      | Distribute the children elements with equal space (#[span.code flex-basis: 0]).#[br]
      | By default, flex containers will distribute children elements according to their content width.
    li.mt-1
      code.mr-2 .fill-height
      | Sets a height of 100%.

  title-link(h2) Alignments
  p Align children with these classes on the parent container:
  ul
    li.mt-1
      code.mr-2 .align-start
      | Applies this CSS rule: #[span.code align: flex-start].
    li.mt-1
      code.mr-2 .align-center
      | Applies this CSS rule: #[span.code align: center].
    li.mt-1
      code.mr-2 .align-end
      | Applies this CSS rule: #[span.code align: flex-end].
    li.mt-1
      code.mr-2 .justify-start
      | Applies this CSS rule: #[span.code justify: flex-start].
    li.mt-1
      code.mr-2 .justify-center
      | Applies this CSS rule: #[span.code justify: center].
    li.mt-1
      code.mr-2 .justify-end
      | Applies this CSS rule: #[span.code justify: flex-end].
    li.mt-1
      code.mr-2 .justify-space-between
      | Applies this CSS rule: #[span.code justify: space-between].

  p.mt-4 Align a child with these classes directly on the child element:
  ul
    li.mt-1
      code.mr-2 .align-self-start
      | Applies this CSS rule: #[span.code align-self: flex-start].
    li.mt-1
      code.mr-2 .align-self-center
      | Applies this CSS rule: #[span.code align-self: center].
    li.mt-1
      code.mr-2 .align-self-end
      | Applies this CSS rule: #[span.code align-self: flex-end].
    li.mt-1
      code.mr-2 .justify-self-start
      | Applies this CSS rule: #[span.code justify-self: flex-start].
    li.mt-1
      code.mr-2 .justify-self-center
      | Applies this CSS rule: #[span.code justify-self: center].
    li.mt-1
      code.mr-2 .justify-self-end
      | Applies this CSS rule: #[span.code justify-self: flex-end].

  p.mt-6.
    The #[code.mx-1 .spacer] class is also very helpful to separate 2 elements as is will occupy the
    available space and push the elements on each side.

  .heading.mt-6 w-flex, row direction (default)
  example
    p.code.mb-1 .justify-start (default)
    .w-flex.pa-3.blue-light-5--bg.justify-start
      .box
      .box
      .box
    p.code.mt-2.mb-1 .justify-center
    .w-flex.pa-3.blue-light-5--bg.justify-center
      .box
      .box
      .box
    p.code.mt-2.mb-1 .justify-space-between
    .w-flex.pa-3.blue-light-5--bg.justify-space-between
      .box
      .box
      .box
    p.code.mt-2.mb-1 .justify-end
    .w-flex.pa-3.blue-light-5--bg.justify-end
      .box
      .box
      .box
    template(#html).
      &lt;p&gt;.justify-start (default)&lt;/p&gt;
      &lt;w-flex justify-start class="blue-light-5--bg pa-3"&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;p&gt;.justify-center&lt;/p&gt;
      &lt;w-flex justify-center class="blue-light-5--bg pa-3"&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;p&gt;.justify-space-between&lt;/p&gt;
      &lt;w-flex justify-space-between class="blue-light-5--bg pa-3"&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
      &lt;/w-flex&gt;

      &lt;p&gt;.justify-end&lt;/p&gt;
      &lt;w-flex justify-end class="blue-light-5--bg pa-3"&gt;
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

  .heading w-flex, column direction
  example
    w-flex
      .grow.mx-1
        p.code.mb-1 .justify-start (default)
        w-flex.wrapper(column align-center justify-start)
          .box
          .box
          .box
      .grow.mx-1
        p.code.mb-1 .justify-center
        w-flex.wrapper(column align-center justify-center)
          .box
          .box
          .box
      .grow.mx-1
        p.code.mb-1 .justify-space-between
        w-flex.wrapper(column align-center justify-space-between)
          .box
          .box
          .box
      .grow.mx-1
        p.code.mb-1 .justify-end
        w-flex.wrapper(column align-center justify-end)
          .box
          .box
          .box
    template(#html).
      &lt;w-flex&gt;
        &lt;div class="grow mx-1"&gt;
          &lt;p&gt;.justify-start (default)&lt;/p&gt;
          &lt;w-flex column align-center justify-start class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx-1"&gt;
          &lt;p&gt;.justify-center&lt;/p&gt;
          &lt;w-flex column align-center justify-center class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx-1"&gt;
          &lt;p&gt;.justify-space-between&lt;/p&gt;
          &lt;w-flex column align-center justify-space-between class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;

        &lt;div class="grow mx-1"&gt;
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

  title-link.mt-10(h3 slug="align-self") #[span.code align-self] and #[em not] #[span.code justify-self]
  p.
    By default if you don't set an alignment on the #[span.code w-flex] component, the content will
    be stretched vertically.#[br]
    If it is not what you want, you can either add an alignment on the #[span.code w-flex] component
    (case 2), or a self align on the children (case 3).
  example
    w-flex
      .grow.mx-1
        p 1. Default
        w-flex.wrapper2(justify-center)
          .box
          .box
          .box
      .grow.mx-1
        p 2. align-center
        w-flex.wrapper2(justify-center align-center)
          .box
          .box
          .box
      .grow.mx-1
        p 3. align self start, center, end
        w-flex.wrapper2(justify-center)
          .box.align-self-start
          .box.align-self-center
          .box.align-self-end
    template(#html).
      &lt;w-flex&gt;
        &lt;div class="grow mx-1"&gt;
          &lt;p&gt;Default&lt;/p&gt;
          &lt;w-flex justify-center class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;
        &lt;div class="grow mx-1"&gt;
          &lt;p&gt;2. align-center&lt;/p&gt;
          &lt;w-flex justify-center align-center class="wrapper"&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
            &lt;div class="box"&gt;&lt;/div&gt;
          &lt;/w-flex&gt;
        &lt;/div&gt;
        &lt;div class="grow mx-1"&gt;
          &lt;p&gt;3. align self start, center, end&lt;/p&gt;
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

  w-alert.text-light(type="warning")
    strong Note:
    a.black.ml-1(
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox"
      target="_blank"
      style="text-decoration: underline")
      | There is no justify-self in Flexbox.


  title-link(h2 slug="grid-system")
    | Grid system
    w-tag.ml-3(bg-color="red" color="white") Coming soon

  p 12-cell based.
</template>

<style lang="scss">
.box {
  background-color: #9bbff9;
  border: 1px solid #55f;
  padding: 12px;
}

.wrapper, .wrapper2 {
  background-color: #eef7ff;
  padding: 12px;
  height: 140px;
}
.wrapper2 {height: 100px;}
</style>
