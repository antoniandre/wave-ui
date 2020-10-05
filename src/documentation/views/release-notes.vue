<template lang="pug">
div
  title-link.mt4(h1) Release notes

  ul
    li
      strong.version v1.2.0
      ul
        li.
          Removed all the #[code change] emitted events on all the UI components as redundant.
          You can use #[code input] instead.
        li Added an #[code inline] option on #[span.code w-badge].
  ul
    li
      strong.version v1.0.0
      p First public release!
</template>

<style lang="scss">
.page--release-notes {
  .version {font: bold 1.2rem monospace;}
  p {margin: 0.2em 0 1.5em;line-height: 1.2;}
  code {padding: 0 6px;}
}
</style>
