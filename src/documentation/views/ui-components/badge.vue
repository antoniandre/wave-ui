<template lang="pug">
div
  title-link.mt4.code(h1 slug="w-badge")
    | w-badge
    w-tag.ml3(bg-color="orange" color="white" lg) In progress

  title-link(h2) Default
  example
    w-badge.mr10
      template(#badge) 3
      div.grey-light5--bg.pa2.primary
        w-icon.mr1 mdi mdi-email
        | Emails
    template(#html).
      &lt;w-badge class="mr10"&gt;
        &lt;template #badge&gt;3&lt;/template&gt;
        &lt;div class="pa2 grey-light5--bg primary"&gt;
          &lt;w-icon class="mr1"&gt;mdi mdi-email&lt;/w-icon&gt;
          Emails
        &lt;/div&gt;
      &lt;/w-badge&gt;

  title-link(h2) Overlap
  w-flex(wrap)
    w-badge.mr10
      template(#badge) 3
      div.grey-light5--bg.pa2.primary
        w-icon.mr1 mdi mdi-email
        | Emails

    w-badge.my4.mr10(overlap bottom dot bg-color="green")
      w-icon.blue--bg.pa6(size="2.5em" color="white") mdi mdi-account

  w-flex(wrap)
    w-badge.my4.mr10(overlap bottom bg-color="orange" sm color="white")
      template(#badge) away
      w-icon.blue--bg.pa6(size="2.5em" color="white") mdi mdi-account

  title-link(h2) Dot
  w-flex(wrap)
    w-badge.mr10(dot)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account

  title-link(h2) Sizes
  h3 Dots
  w-flex(wrap)
    w-badge.mr10(dot xs)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr10(dot sm)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr10(dot md)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr10(dot lg)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
    w-badge.mr10(dot xl)
      template(#badge)
      w-icon(size="2.5em") mdi mdi-account
</template>
