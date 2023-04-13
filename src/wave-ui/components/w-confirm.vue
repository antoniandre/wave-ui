<template lang="pug">
w-menu(v-model="showPopup" v-bind="wMenuProps")
  template(#activator="{ on }")
    w-button.w-confirm(v-bind="{ ...$attrs, ...buttonProps, ...(disablePrompt ? {} : on) }")
      slot
  w-flex(:column="!inline" align-center)
    div
      slot(name="question") {{ question }}
    .w-flex.justify-end(:class="inline ? 'ml2' : 'mt2'")
      w-button.mr2(
        v-if="cancel !== false"
        v-bind="cancelButtonProps"
        :bg-color="(cancelButton || {}).bgColor || 'error'"
        @keyup.escape="!persistent && onCancel()"
        @click="onCancel")
        slot(name="cancel") {{ cancelButton.label }}
      w-button(
        v-bind="confirmButtonProps"
        :bg-color="(confirmButton || {}).bgColor || 'success'"
        v-focus
        @keyup.escape="!persistent && onCancel()"
        @click="onConfirm")
        slot(name="confirm") {{ confirmButton.label }}
</template>

<script>
export default {
  name: 'w-confirm',
  inheritAttrs: false, // The attrs are only bound to the button, not the w-menu.
  props: {
    // Main button props.
    bgColor: { type: String },
    color: { type: String },
    icon: { type: String },
    disablePrompt: { type: Boolean }, // If true, the confirm button acts like a simple w-button.
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
    // Allow passing down an object of props to the w-menu component.
    menu: { type: Object, default: () => ({}) },
    // Allow passing down an object of props to the w-tooltip component.
    // If a string is given, that will be the label of the tooltip.
    tooltip: { type: [Boolean, Object, String] },
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
    transition: { type: String },
    dark: { type: Boolean },
    light: { type: Boolean }
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
    tooltipObject () {
      let tooltip = { label: typeof this.tooltip === 'string' ? this.tooltip : '' }
      if (typeof this.tooltip === 'object') tooltip = Object.assign({}, tooltip, this.tooltip)
      return tooltip
    },
    buttonProps () {
      const { label, ...tooltipProps } = this.tooltipObject

      return {
        bgColor: this.bgColor,
        color: this.color,
        icon: this.icon,
        dark: this.dark,
        light: this.light,
        tooltip: label,
        tooltipProps,
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
