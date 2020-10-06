<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) The props will soon be more detailed.

  api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import WMenu from '@/wave-ui/components/w-menu'

const propsDescs = {
  value: '',
  showOnHover: '',
  hideOnMenuClick: '',
  color: '',
  bgColor: '',
  shadow: '',
  custom: '',
  tile: '',
  round: '',
  noBorder: '',
  transition: '',
  menuClass: '',
  titleClass: '',
  contentClass: '',
  detachTo: '',
  fixed: '',
  top: '',
  bottom: '',
  left: '',
  right: '',
  alignTop: '',
  alignBottom: '',
  alignLeft: '',
  alignRight: '',
  zIndex: '',
  minWidth: '',
  overlay: '',
  persistent: ''
}

const slots = {
  activator: { description: '<strong>This slot is required and must have the v-on="on" directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.' },
  title: { description: 'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.' },
  default: { description: 'The menu content.' },
  actions: { description: 'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.' }
}

const eventsDescs = {
  input: 'Emitted each time the state of the component changes. It updates the v-model value in Vue 2.x only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).',
  'update:modelValue': 'Emitted each time the state of the component changes (when an item is expanded or collapsed). It updates the v-model value in Vue 3 only.<br>An array of booleans is passed as a parameter (representing the expanded state of every accordion item).',
  close: 'Emitted on menu close.',
  open: 'Emitted on menu open.'
}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WMenu.props
    },
    events () {
      return WMenu.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
