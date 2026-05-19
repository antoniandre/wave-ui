<template lang="pug">
component(v-if="tooltip" is="w-tooltip" v-bind="tooltipProps")
  button-partial(ref="button" v-bind="buttonProps")
    slot
  template(#tooltip)
    div(v-html="tooltip")
button-partial(v-else ref="button" v-bind="buttonProps")
  slot
  template(#loading)
    slot(name="loading")
</template>

<script>
import ButtonPartial from './button.vue'
import { focusElement } from '../../utils/focus'

export default {
  name: 'w-button',
  focusable: true,
  expose: ['focus'],
  inheritAttrs: false, // The attrs are only bound to the button-partial, not the root.

  props: {
    color: { type: String },
    bgColor: { type: String },
    dark: { type: Boolean },
    outline: { type: Boolean },
    text: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    tooltip: { type: String },
    tooltipProps: { type: Object, default: () => ({}) },
    route: { type: [String, Object] }, // Creates a link.
    // Force use of `a` instead of router-link.
    // Router link does not go to a url starting with `#` with history mode.
    forceLink: { type: Boolean },
    type: { type: String, default: 'button' },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    // If an icon is passed, no text will display.
    icon: { type: String, default: null },
    iconProps: { type: Object, default: () => ({}) },
    // Positions.
    absolute: { type: Boolean },
    fixed: { type: Boolean },
    top: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    zIndex: { type: [Number, String] },
    // Sizes.
    width: { type: [Number, String] },
    height: { type: [Number, String] },
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    noRipple: { type: Boolean, default: undefined }
  },

  components: { ButtonPartial },

  emits: [],

  computed: {
    buttonProps () {
      const { tooltip, tooltipProps = {}, ...props } = this.$props
      return { ...props, ...this.$attrs }
    }
  },

  methods: {
    focus () {
      if (this.disabled) return
      focusElement(this.$refs.button?.$el)
    }
  }
}
</script>
