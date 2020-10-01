<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) This API will soon be more detailed.

  api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  api(:items="slots" title="Slots")

  api(:items="events" title="Events")
</template>

<script>
import WAccordion from '@/wave-ui/components/w-accordion'

const propsDescs = {
  value: '',
  color: '',
  bgColor: 'Provide a background color for the component. Accepts all the color names of the color palette, status colors, or custom colors (learn more about all the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex will not work.',
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
    propsDescs,
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
