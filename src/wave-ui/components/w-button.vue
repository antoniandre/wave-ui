<template lang="pug">
  .w-button(
    :is="to ? ($router && !externalLink ? 'router-link' : 'a') : 'button'"
    :type="!to && type"
    :to="$router && to"
    :href="to"
    :class="classes"
    :disabled="!!disabled"
    @click="$emit('click', $event)"
    :style="styles")
    w-icon(v-if="icon") {{ icon }}
    span(v-else)
      slot
    .w-button__loader(v-if="loading")
      slot(name="loading")
        svg(viewBox="0 0 40 40")
          circle(
            cx="20" cy="20" r="18"
            fill="transparent"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round")
</template>

<script>
export default {
  name: 'w-button',
  props: {
    xs: { type: Boolean },
    sm: { type: Boolean },
    md: { type: Boolean },
    lg: { type: Boolean },
    xl: { type: Boolean },
    to: { type: [String, Boolean, Object] }, // Creates a link.
    color: { type: String },
    bgColor: { type: String },
    dark: { type: Boolean },
    outline: { type: Boolean },
    text: { type: Boolean },
    round: { type: Boolean },
    shadow: { type: Boolean },
    tile: { type: Boolean },
    type: { type: String, default: 'button' },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    // If an icon is passed, no text will display.
    icon: { type: String, default: null },
    width: { type: [String, Number] },
    height: { type: [String, Number] }
  },

  computed: {
    size () {
      return (
        (this.xs && 'xs') ||
        (this.sm && 'sm') ||
        (this.lg && 'lg') ||
        (this.xl && 'xl') ||
        'md'
      )
    },
    externalLink () {
      return /^(http|\/\/)/.test(this.to)
    },
    classes () {
      return {
        [this.color]: this.color,
        [`${this.bgColor}--bg`]: this.bgColor,
        'w-button--dark': this.dark && !this.outline,
        'w-button--outline': this.outline,
        'w-button--text': this.text,
        'w-button--round': this.round,
        'w-button--tile': this.tile,
        'w-button--shadow': this.shadow,
        'w-button--loading': this.loading,
        'w-button--icon': this.icon,
        [`size--${this.size}`]: true
      }
    },
    styles () {
      return {
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>

<style lang="scss">
$spinner-size: 40;

.w-button {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  outline: none;
  border-radius: $border-radius;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding-left: 2 * $base-increment;
  padding-right: 2 * $base-increment;
  box-shadow: 0 0 0 transparent;
  vertical-align: middle;
  align-self: center;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  cursor: pointer;
  // Background-color must not transition to not affect the hover & focus states
  // in :before & :after.
  transition: $transition-duration, background-color 0s, padding 0s;

  &--dark {
    color: rgba(255, 255, 255, 0.95);
    background-color: rgba(255, 255, 255, 0.15);
  }
  &--outline {
    background-color: transparent;
    border-color: currentColor;
  }
  &--text {
    background-color: transparent;
    border-color: transparent;
  }
  &--round {
    border-radius: 5em;
    padding-left: 3 * $base-increment;
    padding-right: 3 * $base-increment;
  }
  &--icon {
    border-radius: 5em;
    padding: round(0.4 * $base-increment);
  }
  &--tile {border-radius: initial;}
  &--shadow {box-shadow: $box-shadow;}
  &--loading {cursor: wait;opacity: 0.8;}
  &[disabled] {
    cursor: auto;
    box-shadow: none;
    opacity: 0.4;
  }
  &--dark[disabled] {
    background-color: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.3);
  }

  // Sizes adjustments (always an even number for easier vertical alignments).
  &.size--xs {line-height: round(1.25 * $base-font-size / 2) * 2;}
  &.size--sm {line-height: round(1.6 * $base-font-size / 2) * 2;}
  &.size--md {line-height: round(1.9 * $base-font-size / 2) * 2;}
  &.size--lg {line-height: round(2.35 * $base-font-size / 2) * 2;}
  &.size--xl {line-height: round(2.75 * $base-font-size / 2) * 2;}

  &.size--xs {padding-left: $base-increment;padding-right: $base-increment;}
  &.size--xl {padding-left: 3 * $base-increment;padding-right: 3 * $base-increment;}
  &--round.size--xs {padding-left: round(1.5 * $base-increment);padding-right: round(1.5 * $base-increment);}
  &--round.size--xl {padding-left: round(4.5 * $base-increment);padding-right: round(4.5 * $base-increment);}
  &--icon.size--xs, &--icon.size--sm, &--icon.size--md {padding: round(0.4 * $base-increment);}
  &--icon.size--md {padding: $base-increment;}
  &--icon.size--lg {padding: round(1.5 * $base-increment);}
  &--icon.size--xl {padding: 2 * $base-increment;}

  // Overlay to mark the focus, hover and active state.
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: currentColor;
    border-radius: inherit;
    transition: opacity 0.3s ease-out, background-color 0s 0.3s ease-out;
  }

  &--dark:before {background-color: #fff;}

  // Button states.
  // ------------------------------------------------------
  // Hover & focus states - inside button.
  &:hover:before, &:focus:before {opacity: 0.08;}
  &--dark:hover:before, &--dark:focus:before,
  &--outline:hover:before, &--outline:focus:before,
  &--text:hover:before, &--text:focus:before {opacity: 0.12;}

  // Focus state - outside button.
  &:after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background-color: inherit;
    opacity: 0;
    border-radius: inherit;
    z-index: -1;
    transition: opacity .2s cubic-bezier(0.45, 0.05, 0.55, 0.95), transform 0.25s ease-in;
    transform: scale(0.85, 0.7);
  }
  &:focus:after {
    opacity: 0.4;
    transform: scale(1);
    transition: opacity .2s cubic-bezier(0.45, 0.05, 0.55, 0.95), transform 0.25s ease-out;
  }
  &--dark:focus:after {opacity: 0.2;}

  // Active state.
  &:active:before {opacity: 0.2;}
  &--dark:active:before {opacity: 0.3;}

  // Disable visual feedback on loading and disabled buttons.
  &--loading:hover:before,
  &--loading:focus:before,
  &--loading:active:before,
  &[disabled]:before {opacity: 0;}
  // ------------------------------------------------------

  // Disable events binding on nested content.
  & * {pointer-events: none;}
  // Button content must stay on top of the overlay.
  & > span {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  &--loading > span {opacity: 0;}

  &__loader {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {height: 75%;}
    circle {
      stroke-dasharray: (3.14 * $spinner-size);
      transform-origin: 50%;
      animation: spinner 2s linear infinite;
    }
  }
}

@keyframes spinner {
  0% {transform: rotate(0deg);stroke-dashoffset: (0.66 * $spinner-size);}
  50% {transform: rotate(720deg);stroke-dashoffset: (3.14 * $spinner-size);}
  100% {transform: rotate(1080deg);stroke-dashoffset: (0.66 * $spinner-size);}
}
</style>
