<template lang="pug">
div
  title-link.mt4(h1) Release notes

  ul
    li
      strong.version v1.0.0
      p First public release!
</template>

<script>
export default {
  data: () => ({
    listItems: [
      { label: 'Chrome' },
      { label: 'Safari' },
      { label: 'Firefox' },
      { label: 'Edge' },
      { label: 'Opera' }
    ]
  })
}
</script>

<style lang="scss">
.page--release-notes {
  .version {font: bold 1.2rem monospace;}
  p {margin-top: 0.2em;}
}
</style>
