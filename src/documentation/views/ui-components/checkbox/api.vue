<template lang="pug">
div
  .w-divider.my12
  //- w-checkboxes.
  title-link.title1(h2 slug="w-checkboxes-api") &lt;w-checkboxes&gt; API
  alert.mb6(info) This API will soon be more detailed.

  api.mt0(:items="checkboxesProps" :descriptions="checkboxes.propsDesc" title="Props")

  api(:items="checkboxes.slots" title="Slots")

  api(:items="checkboxes.events" title="Events")

  //- w-checkbox.
  title-link.title1(h2 slug="w-checkbox-api") &lt;w-checkbox&gt; API
  api.mt0(:items="checkboxProps" :descriptions="checkbox.propsDesc" title="Props")

  api(:items="checkbox.slots" title="Slots")

  api(:items="checkbox.events" title="Events")
</template>

<script>
import WCheckboxes from '@/wave-ui/components/w-checkboxes'
import WCheckbox from '@/wave-ui/components/w-checkbox'

const checkboxes = {
  propsDesc: {},
  slots: {},
  events: {}
}

const checkbox = {
  propsDesc: {},
  slots: {},
  events: {}
}

export default {
  data: () => ({
    checkboxes,
    checkbox
  }),

  computed: {
    checkboxesProps () {
      return WCheckboxes.props
    },
    checkboxProps () {
      return WCheckbox.props
    }
  }
}
</script>
