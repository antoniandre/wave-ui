<template lang="pug">
.w-confirm
  w-menu(v-model="showPopup" v-bind="menuProps")
    template(#activator="{ on }")
      w-button.w-confirm__button(v-on="on" v-bind="buttonProps")
        slot
    w-flex.w-confirm__menu(:column="!inline" align-center)
      div
        slot(name="question") Are you sure?
      .w-flex.justify-end(:class="inline ? 'ml2' : 'mt2'")
        w-button.mr2(bg-color="error" @click="onCancel")
          slot(name="cancel") Cancel
        w-button(bg-color="success" @click="onAccept")
          slot(name="accept") Ok
</template>

<script>
export default {
  name: 'w-confirm',
  props: {
    bgColor: { type: String },
    color: { type: String },
    icon: { type: String },
    cancelButtonColor: { type: String },
    acceptButtonColor: { type: String },
    inline: { type: Boolean },

    // W-menu props.
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    alignTop: { type: Boolean },
    alignBottom: { type: Boolean },
    alignLeft: { type: Boolean },
    alignRight: { type: Boolean },
    persistent: { type: Boolean },
    transition: { type: String }
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
        persistent: this.persistent,
        transition: this.transition
      }
    },
    buttonProps () {
      return {
        bgColor: this.bgColor,
        color: this.color,
        icon: this.icon
      }
    }
  },

  methods: {
    onCancel () {
      this.$emit('cancel')
      this.showPopup = false
    },
    onAccept () {
      this.$emit('accept')
      this.showPopup = false
    }
  }
}
</script>

<style lang="scss">
.w-confirm {

}
</style>
