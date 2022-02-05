<template lang="pug">
.w-confirm
  w-menu(v-model="showPopup" v-bind="wMenuProps")
    template(#activator="{ on }")
      w-button.w-confirm__button(v-bind="{ ...$attrs, ...buttonProps, ...on }")
        slot
    w-flex(:column="!inline" align-center)
      div
        slot(name="question") {{ question }}
      .w-flex.justify-end(:class="inline ? 'ml2' : 'mt2'")
        w-button.mr2(
          v-if="cancel !== false"
          v-bind="cancelButtonProps"
          :bg-color="(cancelButton || {}).bgColor || 'error'"
          @click="onCancel")
          slot(name="cancel") {{ cancelButton.label }}
        w-button(
          v-bind="confirmButtonProps"
          :bg-color="(confirmButton || {}).bgColor || 'success'"
          @click="onConfirm")
          slot(name="confirm") {{ confirmButton.label }}
</template>

<script>
export default {
  name: 'w-confirm',
  props: {
    // Main button props.
    bgColor: { type: String },
    color: { type: String },
    icon: { type: String },
    mainButton: { type: Object }, // Allow passing down an object of props to the w-button component.
    question: { type: String, default: 'Are you sure?' },

    // Cancel & confirm buttons props.
    // Allow passing down an object of props to the w-button component.
    // If a string is given, that will be the label of the button.
    // If false, no cancel button.
    cancel: { type: [Boolean, Object, String], default: undefined },
    // Allow passing down an object of props to the w-button component.
    // If a string is given, that will be the label of the button.
    confirm: { type: [Object, String] },

    // global menu props.
    inline: { type: Boolean }, // The layout inside the menu.

    // W-menu props.
    menu: { type: Object }, // Allow passing down an object of props to the w-menu component.
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
    cancelButton () {
      let button = { label: typeof this.cancel === 'string' ? this.cancel : 'Cancel' }
      if (typeof this.cancel === 'object') button = Object.assign({}, button, this.cancel)
      return button
    },
    // Props to pass down to the w-button component.
    cancelButtonProps () {
      const { label, ...props } = this.cancelButton // Everything except label.
      return props
    },
    confirmButton () {
      let button = { label: typeof this.confirm === 'string' ? this.confirm : 'Confirm' }
      if (typeof this.confirm === 'object') button = Object.assign({}, button, this.confirm)
      return button
    },
    // Props to pass down to the w-button component.
    confirmButtonProps () {
      const { label, ...props } = this.confirmButton // Everything except label.
      return props
    },
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
        ...this.menu
      }
    },
    buttonProps () {
      return {
        bgColor: this.bgColor,
        color: this.color,
        icon: this.icon,
        ...this.mainButton
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
