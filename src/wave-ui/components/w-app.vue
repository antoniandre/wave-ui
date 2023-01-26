<template lang="pug">
.w-app
  slot
</template>

<script>
export default {
  name: 'w-app',
  props: {
    block: { type: Boolean },
    row: { type: Boolean },
    alignCenter: { type: Boolean },
    alignEnd: { type: Boolean },
    justifyCenter: { type: Boolean },
    justifyEnd: { type: Boolean },
    justifySpaceBetween: { type: Boolean },
    justifySpaceAround: { type: Boolean },
    justifySpaceEvenly: { type: Boolean },
    textCenter: { type: Boolean },
    textRight: { type: Boolean }
  }
}
</script>

<style lang="scss">
@import '../scss/index';

.w-app {
  position: relative; // Make the .w-app a referential for tooltips / menus.
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &.row {flex-direction: row;}
  &.d-block {display: block;}
  &.align-center {align-items: center;}
  &.align-end {align-items: flex-end;}
  &.justify-center {justify-content: center;}
  &.justify-end {justify-content: flex-end;}
  &.justify-space-between {justify-content: space-between;}
  &.justify-space-around {justify-content: space-around;}
  &.justify-space-evenly {justify-content: space-evenly;}
  &.text-center {text-align: center;}
  &.text-right {text-align: right;}
}
</style>
