<template lang="pug">
div
  title-link.mt-4.code(h1) w-badge

  title-link(h2) Default
  example
    w-badge.mr-10
      template(#badge) 3
      div.grey-lighter-5--bg.pa-2.primary
        w-icon.mr-1 mdi mdi-email
        | Emails
    template(#html).
      &lt;w-badge class="mr-10"&gt;
        &lt;template #badge&gt;3&lt;/template&gt;
        &lt;div class="pa-2 grey-lighter-5--bg primary"&gt;
          &lt;w-icon class="mr-1"&gt;mdi mdi-email&lt;/w-icon&gt;
          Emails
        &lt;/div&gt;
      &lt;/w-badge&gt;

  title-link(h2) Overlap
  w-flex(wrap)
    w-badge.mr-10
      template(#badge) 3
      div.grey-lighter-5--bg.pa-2.primary
        w-icon.mr-1 mdi mdi-email
        | Emails

    w-badge.my-4.mr-10(overlap bottom dot bg-color="green")
      w-icon.blue--bg.pa-6(size="2.5em" color="white") mdi mdi-account

  w-flex(wrap)
    w-badge.my-4.mr-10(overlap bottom bg-color="orange" sm color="white")
      template(#badge) away
      w-icon.blue--bg.pa-6(size="2.5em" color="white") mdi mdi-account

  title-link(h2) Dot
  w-flex(wrap)
    w-badge.mr-10(dot)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Sizes
  h3 Dots
  w-flex(wrap)
    w-badge.mr-10(dot xs)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr-10(dot sm)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr-10(dot md)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr-10(dot lg)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr-10(dot xl)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
</template>
