<template lang="pug">
.w-confirm
  w-menu(v-model="showPopup" v-bind="menuProps")
    template(#activator="{ on }")
      w-button.w-confirm__button(v-on="on" v-bind="buttonProps")
        slot
    .w-confirm__menu
      div
        slot(name="question") Are you sure?
      .w-flex.justify
        w-button(@click="showPopup = false") Cancel
        w-button(@click="showPopup = false") Ok
</template>

<script>
export default {
  name: 'w-confirm',
  props: {
    bgColor: { type: String },
    color: { type: String },
    icon: { type: String },

    // W-menu props.
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    alignTop: { type: Boolean },
    alignBottom: { type: Boolean },
    alignLeft: { type: Boolean },
    alignRight: { type: Boolean },
    persistent: { type: Boolean }
  },

  emits: [],

  data: () => ({
    showPopup: false,
    props: []
  }),

  computed: {
    menuProps () {
      return {
        top: this.top,
        bottom: this.bottom,
        left: this.left,
        right: this.right,
        alignTop: this.alignTop,
        alignBottom: this.alignBottom,
        alignLeft: this.alignLeft,
        alignRight: this.alignRight,
        persistent: this.persistent
      }
    },
    buttonProps () {
      return {
        bgColor: this.bgColor,
        color: this.color,
        icon: this.icon
      }
    }
  }
}
</script>

<style lang="scss">
.w-confirm {

}
</style>
