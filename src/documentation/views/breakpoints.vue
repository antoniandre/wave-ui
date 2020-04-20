<template lang="pug">
div
  h1.headline.mt-4 Breakpoints

  p
    | By default, 5 breakpoints are set:
  ul
    li
      code.mr-2 xs
      span from 0 to 550px
    li
      code.mr-2 sm
      span from 551px to 900px
    li
      code.mr-2 md
      span from 901px to 1200px
    li
      code.mr-2 lg
      span from 1201px to 1700px
    li
      code.mr-2 xl
      span from 1701px and more
  p You can access the current breakpoint from anywhere using #[code this.$waveUI.breakpoint].
  p You can override the breakpoints with.

  pre.
    const waveui = new WaveUI({
      breakpoints: {
        xs: 550,
        sm: 900,
        md: 1200,
        lg: 1700,
        xl: 4000
      }
    })

  p.mt-6 Resize your browser will update the current breakpoint:
  .title.mt-0 Current breakpoint = #[code {{ this.$waveUI.breakpoint }}]
</template>

<script>
export default {
}
</script>
