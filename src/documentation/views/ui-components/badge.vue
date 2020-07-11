<template lang="pug">
div
  title-link.mt-4.code(h1) w-badge

  title-link(h2) Default
  w-badge.mr-10
    template(v-slot:badge) 3
    div.grey-lighter-5--bg.pa-2.primary
      w-icon.mr-1 mdi mdi-email
      | Emails

  title-link(h2) Overlap
  w-flex(wrap)
    w-badge.mr-10
      template(v-slot:badge) 3
      div.grey-lighter-5--bg.pa-2.primary
        w-icon.mr-1 mdi mdi-email
        | Emails

    w-badge.my-4.mr-10(overlap bottom dot bg-color="green")
      w-icon.blue--bg.pa-6(size="2.5em" color="white") mdi mdi-account

  w-flex(wrap)
    w-badge.my-4.mr-10(overlap bottom bg-color="orange" sm color="white")
      template(v-slot:badge) away
      w-icon.blue--bg.pa-6(size="2.5em" color="white") mdi mdi-account

  title-link(h2) Dot
  w-flex(wrap)
    w-badge.mr-10(dot)
      template(v-slot:badge)
      w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Sizes
  h3 Dots
  w-flex(wrap)
    w-badge.mr-10(dot xs)
      template(v-slot:badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr-10(dot sm)
      template(v-slot:badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr-10(dot md)
      template(v-slot:badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr-10(dot lg)
      template(v-slot:badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr-10(dot xl)
      template(v-slot:badge)
      w-icon(size="2.5em") mdi mdi-account
</template>
