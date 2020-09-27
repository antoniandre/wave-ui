<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  api.mt0(:items="props" :descriptions="propsDescriptions" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import WAccordion from '@/wave-ui/components/w-accordion'

const propsDescriptions = {
  value: '',
  color: '',
  bgColor: 'Provide a background color for the component. Accepts all the color names of the color palette, status colors, or custom colors <a href="/colors">colors</a>.<br>Providing a color hex will not work.',
  items: '',
  itemClass: '',
  itemColor: '',
  titleClass: '',
  contentClass: '',
  expandIcon: '',
  expandIconRight: '',
  expandSingle: '',
  collapseIcon: '',
  shadow: ''
}

const slots = {
  'item-title': { description: '' },
  'item-title.x': { description: '' },
  'item-content': { description: '' },
  'item-content.x': { description: '' }
}

const events = {}

export default {
  data: () => ({
    propsDescriptions,
    slots,
    events
  }),

  computed: {
    props () {
      return WAccordion.props
    }
  }
}
</script>
