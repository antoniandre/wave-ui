<template lang="pug">
.w-confirm
  w-menu(v-model="showPopup" v-bind="wMenuProps" :menu-class="menuClasses")
    template(#activator="{ on }")
      w-button.w-confirm__button(v-on="on" v-bind="buttonProps")
        slot
    w-flex(:column="!inline" align-center)
      div
        slot(name="question") Are you sure?
      .w-flex.justify-end(:class="inline ? 'ml2' : 'mt2'")
        w-button.mr2(v-if="!noCancel" :bg-color="cancelButton.bgColor || 'error'" @click="onCancel")
          slot(name="cancel") Cancel
        w-button(:bg-color="confirmButton.bgColor || 'success'" @click="onConfirm")
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
    menuBorder: { type: Boolean }, // Applies a border with a directional triangle like a tooltip.
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
    },

    menuClasses () {
      return {
        'w-confirm__menu': true,
        'w-confirm__menu--border': this.menuBorder
      }
    },
  },

  methods: {
    onCancel () {
      this.$emit('cancel')
      this.showPopup = false
    },
    onConfirm () {
      this.$emit('confirm')
      this.showPopup = false
    },
    applyMenuBgColor (color) {
      document.documentElement.style.setProperty('--w-confirm-menu-bg-color', color)
    }
  },

  mounted () {
    console.log('hello')
    this.applyMenuBgColor(this.menuProps?.bgColor || 'white')
  },

  watch: {
    'menuProps.bgColor' (color) {
      this.applyMenuBgColor(color)
    }
  }
}
</script>

<style lang="scss">
.w-confirm {
  // Menu with border.
  // --------------------------------------------------------
  &__menu--border {
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 7px solid transparent;
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 6px solid transparent;
    }
    &.w-menu--top:after {
      top: 100%;
      left: 50%;
      border-top-color: var(--w-confirm-menu-bg-color);
      transform: translateX(-50%);
      margin-top: 1px;
    }
    &.w-menu--bottom:after {
      bottom: 100%;
      left: 50%;
      border-bottom-color: var(--w-confirm-menu-bg-color);
      transform: translateX(-50%);
      margin-bottom: -1px;
    }
    &.w-menu--left:after {
      left: 100%;
      top: 50%;
      border-left-color: var(--w-confirm-menu-bg-color);
      transform: translateY(-50%);
      margin-left: 1px;
    }
    &.w-menu--right:after {
      right: 100%;
      top: 50%;
      border-right-color: var(--w-confirm-menu-bg-color);
      transform: translateY(-50%);
      margin-right: 1px;
    }

    &.w-menu--top:before {
      top: 100%;
      left: 50%;
      border-top-color: inherit;
      transform: translateX(-50%);
      margin-top: 0;
    }
    &.w-menu--bottom:before {
      bottom: 100%;
      left: 50%;
      border-bottom-color: inherit;
      transform: translateX(-50%);
      margin-bottom: 0;
    }
    &.w-menu--left:before {
      left: 100%;
      top: 50%;
      border-left-color: inherit;
      transform: translateY(-50%);
      margin-left: 0;
    }
    &.w-menu--right:before {
      right: 100%;
      top: 50%;
      border-right-color: inherit;
      transform: translateY(-50%);
      margin-right: 0;
    }
  }
}
</style>
