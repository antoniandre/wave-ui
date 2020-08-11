<template lang="pug">
div
  title-link.mt4(h1) Calendar

  p
    | The work is already done in this library! Check out
    a.mx1(href="https://github.com/antoniandre/vue-cal" target="_blank") Vue Cal
    | by the same awesome author! ;)

  .w-flex.align-center.mt8
    w-icon.grey-light4.ml-2.mr2(xl) mdi mdi-chevron-right
    a.title2.my0(href="https://antoniandre.github.io/vue-cal" target="_blank") Vue Cal
    a.ml2(href="https://www.npmjs.com/package/vue-cal" target="_blank")
      img(src="https://img.shields.io/npm/dt/vue-cal.svg")
    a.ml1(href="https://www.npmjs.com/package/vue-cal" target="_blank")
      img(src="https://img.shields.io/npm/dw/vue-cal.svg")

  ssh-pre.mt6(language="shell") npm i vue-cal

  img.mt6(src="@/assets/vue-cal.jpg" alt="Vue Cal")
</template>

<style lang="scss">
.page--calendar img {max-width: 100%;}
</style>
