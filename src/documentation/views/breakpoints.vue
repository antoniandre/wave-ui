<template lang="pug">
main
  title-link.mt4(h1) Breakpoints

  w-card.blue-light5--bg
    .title2.mt0 Current breakpoint: #[code {{ $waveui.breakpoint.name }}]
    em.grey.mt1 Resizing your browser will update the current breakpoint.

  p.mt6 By default, 5 breakpoints are set:
  ul
    li.mb1
      code.mr2 xs
      span from 0 to 600px
    li.mb1
      code.mr2 sm
      span from 601px to 900px
    li.mb1
      code.mr2 md
      span from 901px to 1200px
    li.mb1
      code.mr2 lg
      span from 1201px to 1700px
    li.mb1
      code.mr2 xl
      span from 1701px and more
  p.mt4.
    You can access the current breakpoint from anywhere using
    #[code this.$waveui.breakpoint.name], or one of these quick booleans from
    the same #[code this.$waveui.breakpoint] object:
  ul
    li.mb1
      code xs
    li.mb1
      code sm
    li.mb1
      code md
    li.mb1
      code lg
    li.mb1
      code xl

  p.mt4 You can override the breakpoints with.
  ssh-pre(language="js").
    const waveui = new WaveUI({
      breakpoints: {
        xs: 600,
        sm: 900,
        md: 1200,
        lg: 1700
        // Xl doesn't need to be overridden:
        // it always starts from lg &amp; goes to infinity.
      }
    })
</template>
