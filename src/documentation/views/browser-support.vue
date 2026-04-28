<template lang="pug">
main
  title-link.mt4(h1) Browser support
  title-link(h2) Wave UI supports all major browsers 😎
  w-list.ml-1.title4(:items="listItems" icon="wi-check" item-class="my1")
    template(#item="{ item: { label } }")
      img(:src="getImageUrl(label)")
      span {{ label }}
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
  }),

  methods: {
    getImageUrl (label) {
      return new URL(`../../assets/${label.toLowerCase()}.svg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss">
.main--browser-support {
  p {margin-top: 1.5em;}

  .w-list__item-label {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .w-list img {width: 20px;}
}
</style>
