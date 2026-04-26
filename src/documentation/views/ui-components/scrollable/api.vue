<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API
  alert.mb6(info) The missing props descriptions will be added shortly (all the props are already listed).

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WScrollable from '@/wave-ui/components/w-scrollable.vue'

const propsDescs = {
  disabled: 'Fully inert: no keyboard, wheel, or custom drag; root gets `aria-disabled` and `tabindex` -1.',
  tabindex: 'Sets the root focus order index for keyboard interactions.',
  wheelStep: 'Controls wheel and keyboard increment (in pixels).',
  horizontal: 'When true, scrolls horizontally (`scrollLeft`); default false is vertical (`scrollTop`).',
  scrollbar: 'Default `1`: show the custom track when there is overflow. `0`: hide the custom track (content still scrolls). `hover` / `interaction`: visibility modes. HTML may use the strings "0" or "1". Name the region with `aria-label` (or `aria-labelledby` / `aria-describedby`).',
  color: 'Thumb color (Wave UI color or CSS color).',
  bgColor: 'Track background (Wave UI color or CSS color).',
  width: 'Max width of the region.',
  height: 'Max height of the region.',
  contentClass: 'CSS classes on the inner scroll container (`.w-scrollable__content`): string, array, or object.',
  scrollPosition: 'Optional programmatic scroll: a number is the primary-axis offset (top when vertical, left when horizontal), or `{ top?, left? }` sets pixel offsets for whichever keys you pass. Applied after first layout and when the value changes (objects are deep-watched).'
}

const slots = {
  default: {
    description: 'Scrollable content.'
  }
}

const events = {
  scroll: {
    description: 'Emitted on every scroll update with current scroll metrics.'
  },
  'scroll-start': {
    description: 'Emitted once when a scrolling sequence starts.'
  },
  'scroll-end': {
    description: 'Emitted when scrolling has stopped.'
  }
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
      return WScrollable.props
    },
    events () {
      return WScrollable.emits.reduce((obj, label) => {
        obj[label] = events[label] || {}
        return obj
      }, {})
    }
  }
}
</script>
