<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WButtons from '@/wave-ui/components/w-buttons.vue'

const propsDescs = {
  items: 'An array of button definition objects. Each object can include: <code>label</code>, <code>id</code>, <code>value</code>, <code>active</code>, <code>disabled</code>, <code>icon</code>, <code>iconProps</code>, <code>color</code>, <code>bgColor</code>, <code>class</code>.<br>When omitted, place <code>w-button</code> elements directly in the default slot.',
  modelValue: 'The active selection, controlled via <code>v-model</code>.<br>In single mode: a single value (index, or the item\'s <code>id</code>/<code>value</code> key).<br>In multiple mode: an array of values.',
  itemValueKey: 'The key in each item object used to build the <code>v-model</code> value.<br>Auto-detected when omitted: checks for <code>id</code> first, then <code>value</code>, then falls back to 0-based index.',
  multiple: 'Allows multiple buttons to be active simultaneously. The <code>v-model</code> becomes an array of values.',
  mandatory: 'Forces at least one button to remain active at all times. Clicking the only active button will not deactivate it.',
  disabled: 'Disables all buttons in the group. Individual buttons can also be disabled via the <code>disabled</code> key in the <code>items</code> array.',
  gap: 'Gap between buttons, in base-increment units (same scale as <code>w-flex</code>). Default <code>0</code> sticks the buttons together. Any non-zero value separates them and each button gets its own full styling (border-radius, shadow, etc.).',
  buttonClass: 'CSS class(es) applied to every button in the group.',
  color: 'Applies a text color to all buttons. Inactive buttons inherit this color for their text and border (outline mode).',
  bgColor: 'Applies a background color to all buttons.',
  activeColor: 'Text color of the active button. Falls back to <code>color</code> when not set.',
  activeBgColor: 'Background color of the active button. Defaults to the <code>primary</code> color when not set.',
  dark: 'Sets white text on all buttons.',
  light: 'Sets dark text on all buttons.',
  outline: 'Gives inactive buttons an outlined look (color as border and text, no background).',
  text: 'Sets inactive buttons to transparent background mode.',
  round: 'In stuck mode: rounds only the outer two corners, giving the group a pill shape.<br>In gap mode: each button is individually round.',
  shadow: 'In stuck mode: applies a drop shadow to the wrapper.<br>In gap mode: applies a drop shadow to each button.',
  tile: 'Removes border-radius from all buttons (and the wrapper in stuck mode).',
  type: 'Native HTML <code>type</code> attribute forwarded to all buttons.',
  noRipple: 'Disables the pointer ripple on all buttons.',
  xs: 'Sets all buttons to extra-small size.',
  sm: 'Sets all buttons to small size.',
  md: 'Sets all buttons to medium size (default).',
  lg: 'Sets all buttons to large size.',
  xl: 'Sets all buttons to extra-large size.',
  width: 'Sets a fixed width on all buttons. Accepts a string with unit (e.g. <code>2.5em</code>) or a number (pixels).',
  height: 'Sets a fixed height on all buttons. Accepts a string with unit (e.g. <code>2.5em</code>) or a number (pixels).'
}

const slots = {
  default: {
    description: 'In <strong>items mode</strong>: custom content for each button. Receives <code>{ item, index, active }</code> as slot props.<br>In <strong>slot mode</strong> (no <code>items</code> prop): place <code>w-button</code> elements directly — the group manages their active state via <code>v-model</code>.',
    params: {
      item: 'The current item object from the <code>items</code> array (items mode only).',
      index: 'The 0-based button index.',
      active: 'Boolean — whether this button is currently active.'
    }
  }
}

const eventsDescs = {
  'update:modelValue': 'Emitted when the active selection changes. The payload is the new active value (single mode) or array of values (multiple mode), or <code>null</code> when nothing is active.',
  click: 'Emitted when any button is clicked. Payload: <code>(item, index, event)</code> where <code>item</code> is the item object (or <code>null</code> in slot mode), <code>index</code> is the 0-based index, and <code>event</code> is the native MouseEvent.'
}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    props () {
      return WButtons.props
    },
    events () {
      return WButtons.emits.reduce((obj, label) => {
        obj[label] = { description: eventsDescs[label] || '' }
        return obj
      }, {})
    }
  }
}
</script>
