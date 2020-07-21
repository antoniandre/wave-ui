<template lang="pug">
div
  title-link.mt-4(h1) Grid system

  p.
    The grid system is 12-cell based. Its purpose is to divide the available width (in percentage)
    of a container in 12 cells to easily let you create the design that you want.#[br]
    You can then assign this created layout to a particular breakpoint.

  p.mt-6.
    Let's start with a basic example. The following splitting is applied on the #[span.code xs]
    breakpoint and will thus be applied on all the breakpoints.

  example
    w-flex.text-center(wrap)
      .xs12.pa-1
        .primary-dark-1--bg.py-3 xs12
      .xs6.pa-1
        .primary--bg.py-3 xs6
      .xs6.pa-1
        .primary--bg.py-3 xs6
      .xs4.pa-1(v-for="i in 3" :key="`a${i}`")
        .primary-light-1--bg.white.py-3 xs4
      .xs3.pa-1(v-for="i in 4" :key="`b${i}`")
        .primary-light-2--bg.white.py-3 xs3
      .xs2.pa-1(v-for="i in 6" :key="`c${i}`")
        .primary-light-3--bg.py-3 xs2
      .xs1.pa-1(v-for="i in 12" :key="`d${i}`")
        .blue-light-4--bg.pa-3 xs1

  example.mt-8
    w-flex.text-center(wrap)
      .xs1.pa-1
        .primary-dark-1--bg.py-3 xs1
      .xs11.pa-1
        .primary-dark-1--bg.py-3 xs11
      .xs2.pa-1
        .primary--bg.py-3 xs2
      .xs10.pa-1
        .primary--bg.py-3 xs10
      .xs3.pa-1
        .primary-light-1--bg.white.py-3 xs3
      .xs9.pa-1
        .primary-light-1--bg.white.py-3 xs9
      .xs4.pa-1
        .primary-light-2--bg.white.py-3 xs4
      .xs8.pa-1
        .primary-light-2--bg.white.py-3 xs8
      .xs5.pa-1
        .primary-light-3--bg.py-3 xs5
      .xs7.pa-1
        .primary-light-3--bg.py-3 xs7
</template>
