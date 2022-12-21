<template lang="pug">
main
  title-link.mt4(h1) Simplified grid system (CSS grids)

  alert(info).
    The 12-cell based flexbox grid system works well and for most cases, but it has
    #[router-link(to="/layout--flex#caveat") a caveat] when used with both #[code gap] and flex
    #[code wrap].
    #[br]#[br]
    The #[strong.code w-grid] component offers a solution to this caveat, but has less built-in
    features and options than the #[strong.code w-flex] component (too much CSS would need to be
    generated to cover all the possibilities that the CSS grid system offer).#[br]#[br]

    However, if #[strong.code w-flex] does not provide a solution for your case, or if you simply prefer
    to work with CSS grids, you can and should add more CSS rules on top of Wave UI's basic grid setup
    to obtain the perfect custom layout you need.

  title-link(h2) How to use
  p.
    The #[strong.code w-grid] component is very straightforward, you need to define a number of column
    from 1 to 12.
  example
    w-grid.wrapper(columns="6")
      .box(v-for="i in 12")
    template(#pug).
      w-grid.wrapper(columns="6")
        .box(v-for="i in 12")
    template(#html).
      &lt;w-grid columns="6" class="wrapper"&gt;
        &lt;div v-for="i in 12" class="box"&gt;&lt;/div&gt;
      &lt;/w-grid&gt;
    template(#css).
      .wrapper {
        background-color: #faeed4;
        padding: 12px;
      }

      .box {
        background-color: #e2ecfc;
        border: 1px solid #b2c2f0;
        padding: 12px;
      }

  title-link(h2) Gap
  example
    w-grid.wrapper(columns="6" gap="3")
      .box(v-for="i in 12")
    template(#pug).
      w-grid.wrapper(columns="6" gap="3")
        .box(v-for="i in 12")
    template(#html).
      &lt;w-grid columns="6" gap="3" class="wrapper"&gt;
        &lt;div v-for="i in 12" class="box"&gt;&lt;/div&gt;
      &lt;/w-grid&gt;
    template(#css).
      .wrapper {
        background-color: #faeed4;
        padding: 12px;
      }

      .box {
        background-color: #e2ecfc;
        border: 1px solid #b2c2f0;
        padding: 12px;
      }

  title-link(h2) Different columns number per breakpoint
  p.
    The #[code columns] option also accepts an object in which you can define a number of columns
    per breakpoint.
  example
    w-grid.wrapper(:columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }" gap="3")
      .box(v-for="i in 12")
    template(#pug).
      w-grid.wrapper(
        :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
        gap="3")
        .box(v-for="i in 12")
    template(#html).
      &lt;w-grid
        :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
        gap="3"
        class="wrapper"&gt;
        &lt;div v-for="i in 12" class="box"&gt;&lt;/div&gt;
      &lt;/w-grid&gt;
    template(#css).
      .wrapper {
        background-color: #faeed4;
        padding: 12px;
      }

      .box {
        background-color: #e2ecfc;
        border: 1px solid #b2c2f0;
        padding: 12px;
      }
</template>

<style lang="scss">
.main--layout-simplified-grid-system {
  .wrapper {
    background-color: #faeed4;
    padding: 12px;
  }

  .box {
    background-color: #e2ecfc;
    border: 1px solid #b2c2f0;
    padding: 12px;
  }
}
</style>
