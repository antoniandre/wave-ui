<template lang="pug">
.w-app(:class="classes")
  slot
  notification-manager
</template>

<script>
import NotificationManager from './w-notification-manager.vue'

export default {
  name: 'w-app',
  props: {
    dark: { type: Boolean },
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
  },

  components: { NotificationManager },

  data: () => ({
    notifManager: null
  }),

  computed: {
    classes () {
      return {
        'd-block': this.block,
        row: this.row,
        'align-center': this.alignCenter,
        'align-end': this.alignEnd,
        'justify-center': this.justifyCenter,
        'justify-end': this.justifyEnd,
        'justify-space-between': this.justifySpaceBetween,
        'justify-space-around': this.justifySpaceAround,
        'justify-space-evenly': this.justifySpaceEvenly,
        'text-center': this.textCenter,
        'text-right': this.textRight,
        'theme--dark': this.dark
      }
    }
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
