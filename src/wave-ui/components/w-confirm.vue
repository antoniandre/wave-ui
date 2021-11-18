<template lang="pug">
.w-confirm
  w-menu(v-model="showPopup" v-bind="wMenuProps")
    template(#activator="{ on }")
      w-button.w-confirm__button(v-on="on" v-bind="buttonProps")
        slot
    w-flex(:column="!inline" align-center)
      div
        slot(name="question") Are you sure?
      .w-flex.justify-end(:class="inline ? 'ml2' : 'mt2'")
        w-button.mr2(v-if="!noCancel" :bg-color="cancelButton.bgColor || 'error'" v-bind="cancelButton" @click="onCancel")
          slot(name="cancel") Cancel
        w-button(:bg-color="confirmButton.bgColor || 'success'" v-bind="confirmButton" @click="onConfirm")
          slot(name="confirm") Confirm
</template>

<script>
export default {
  name: 'w-confirm',
  props: {
    // Main button props.
    bgColor: { type: String },
    color: { type: String },
    icon: { type: String },
    menu: { type: Boolean },

    // Cancel & confirm buttons props.
    cancelButtonColor: { type: String },
    confirmButtonColor: { type: String },
    noCancel: { type: Boolean }, // Removes the cancel button.
    cancelButton: { type: [Boolean, Object] }, // Allow passing down an object of props to the w-button component.
    confirmButton: { type: [Boolean, Object] }, // Allow passing down an object of props to the w-button component.

    // global menu props.
    inline: { type: Boolean }, // The layout inside the menu.

    // W-menu props.
    menuProps: { type: Object }, // Allow passing down an object of props to the w-menu component.
    // All the menu props shorthands, as long as they don't conflict with the button props.
    noArrow: { type: Boolean }, // Adds a directional triangle to the edge of the menu, like a tooltip.
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

  emits: ['cancel', 'confirm'],

  data: () => ({
    showPopup: false,
    props: []
  }),

  computed: {
    wMenuProps () {
      return {
        top: this.top,
        bottom: this.bottom,
        left: this.left,
        right: this.right,
        arrow: !this.noArrow,
        alignTop: this.alignTop,
        alignBottom: this.alignBottom,
        alignLeft: this.alignLeft,
        alignRight: this.alignRight,
        persistent: this.persistent,
        transition: this.transition,
        ...this.menuProps
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
    onConfirm () {
      this.$emit('confirm')
      this.showPopup = false
    }
  }
}
</script>
