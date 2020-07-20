<template lang="pug">
div
  title-link.mt-4(h1) Breakpoints

  w-card.blue-light-5--bg
    .title.mt-0 Current breakpoint: #[code {{ this.$waveui.breakpoint.name }}]
    em.grey.mt-1 Resizing your browser will update the current breakpoint.

  p.mt-6 By default, 5 breakpoints are set:
  ul
    li.mb-1
      code.mr-2 xs
      span from 0 to 600px
    li.mb-1
      code.mr-2 sm
      span from 601px to 900px
    li.mb-1
      code.mr-2 md
      span from 901px to 1200px
    li.mb-1
      code.mr-2 lg
      span from 1201px to 1700px
    li.mb-1
      code.mr-2 xl
      span from 1701px and more
  p.mt-4.
    You can access the current breakpoint from anywhere using
    #[code this.$waveui.breakpoint.name], or one of these quick booleans from
    the same #[code this.$waveui.breakpoint] object:
  ul
    li.mb-1
      code xs
    li.mb-1
      code sm
    li.mb-1
      code md
    li.mb-1
      code lg
    li.mb-1
      code xl

  p.mt-4 You can override the breakpoints with.
  ssh-pre(language="js").
    const waveui = new WaveUI({
      breakpoints: {
        xs: 550,
        sm: 900,
        md: 1200,
        lg: 1700,
        xl: 4000 // Xl only needs to be greater than lg but starts from lg &amp; goes to infinity.
      }
    })
</template>

<script>
export default {
}
</script>
