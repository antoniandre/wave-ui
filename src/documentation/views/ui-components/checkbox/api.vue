<template lang="pug">
div
  .w-divider.my12
  //- w-checkboxes.
  title-link.title1(h2 slug="w-checkboxes-api") &lt;w-checkboxes&gt; API
  alert.mb6(info) This API will soon be more detailed.

  api.mt0(:items="checkboxesProps" :descriptions="checkboxes.propsDescs" title="Props")

  api(:items="checkboxes.slots" title="Slots")

  api(:items="checkboxesEvents" title="Events")

  //- w-checkbox.
  title-link.title1(h2 slug="w-checkbox-api") &lt;w-checkbox&gt; API
  api.mt0(:items="checkboxProps" :descriptions="checkbox.propsDescs" title="Props")

  api(:items="checkbox.slots" title="Slots")

  api(:items="checkboxEvents" title="Events")
</template>

<script>
import WCheckboxes from '@/wave-ui/components/w-checkboxes'
import WCheckbox from '@/wave-ui/components/w-checkbox'

const checkboxes = {
  propsDescs: {},
  slots: {},
  eventsDescs: {}
}

const checkbox = {
  propsDescs: {},
  slots: {},
  eventsDescs: {}
}

export default {
  data: () => ({
    checkboxes,
    checkbox
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    checkboxesProps () {
      return WCheckboxes.props
    },
    checkboxProps () {
      return WCheckbox.props
    },
    checkboxesEvents () {
      return WCheckboxes.emits.reduce((obj, label) => (obj[label] = { description: checkboxes.eventsDescs[label] || '' }) && obj, {})
    },
    checkboxEvents () {
      return WCheckbox.emits.reduce((obj, label) => (obj[label] = { description: checkbox.eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
