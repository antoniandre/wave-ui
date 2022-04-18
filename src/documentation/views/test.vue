<template lang="pug">
w-app
  .test.ma12.pa12.bd1.bdrs2.blue-light5--bg
    h1.mt0 Testing playground
    w-form(v-model="formValid" validation-color="pink")
      w-slider(label-color="grey-dark1" :validators="[v => !!v || 'required']" label-left="hey<br>yo" label-right="right")
      w-slider(label-color="grey-dark1" label-on-left :validators="[v => !!v || 'required']" label-left="hey<br>yo" label-right="right")
      w-slider(label-color="grey-dark1" label-on-right :validators="[v => !!v || 'required']" label-left="hey<br>yo" label-right="right")
      w-radio(label-color="grey-dark1" :validators="[v => !!v || 'required']") Label<br>yo
      w-radio(label-color="grey-dark1" label-on-left :validators="[v => !!v || 'required']") Label<br>yo
      w-radio(label-color="grey-dark1" label-on-right :validators="[v => !!v || 'required']") Label<br>yo
      w-checkbox(label-color="grey-dark1" :validators="[v => !!v || 'required']") Label
      w-checkbox(label-color="grey-dark1" label-on-left :validators="[v => !!v || 'required']") Label<br>yo
      w-checkbox(label-color="grey-dark1" label-on-right :validators="[v => !!v || 'required']") Label<br>yo
      w-switch(label-color="grey-dark1" :validators="[v => !!v || 'required']") Label<br>yo
      w-switch(label-color="grey-dark1" label-on-left :validators="[v => !!v || 'required']") Label<br>yo
      w-switch(label-color="grey-dark1" label-on-right :validators="[v => !!v || 'required']") Label<br>yo
      w-input(label-color="grey-dark1" :validators="[v => !!v || 'required']") Label<br>yo
      w-input(label-color="grey-dark1" label-position="left" :validators="[v => !!v || 'required']") Label<br>yo
      w-input(label-color="grey-dark1" label-position="right" :validators="[v => !!v || 'required']") Label<br>yo
      w-input(label-color="grey-dark1" outline label-position="left" :validators="[v => !!v || 'required']") Label<br>yo
      w-input(label-color="grey-dark1" outline :validators="[v => !!v || 'required']") Label<br>yo
      w-textarea(label-color="grey-dark1" :validators="[v => !!v || 'required']" label="Label<br>yo")
      w-textarea(label-color="grey-dark1" label-position="left" :validators="[v => !!v || 'required']" label="Label<br>yo")
      w-textarea(label-color="grey-dark1" label-position="right" :validators="[v => !!v || 'required']" label="Label<br>yo")
      w-textarea(label-color="grey-dark1" outline label-position="left" :validators="[v => !!v || 'required']" label="Label<br>yo")
      w-textarea(label-color="grey-dark1" outline :validators="[v => !!v || 'required']" label="Label<br>yo")
      w-select(:items="[{ label: 'item 1' }]" label-color="grey-dark1" :validators="[v => !!v || 'required']") Label<br>yo
      w-select(:items="[{ label: 'item 1' }]" label-color="grey-dark1" label-position="left" :validators="[v => !!v || 'required']") Label<br>yo
      w-select(:items="[{ label: 'item 1' }]" label-color="grey-dark1" label-position="right" :validators="[v => !!v || 'required']") Label<br>yo
      w-select(:items="[{ label: 'item 1' }]" label-color="grey-dark1" outline label-position="left" :validators="[v => !!v || 'required']") Label<br>yo
      w-select(:items="[{ label: 'item 1' }]" label-color="grey-dark1" outline :validators="[v => !!v || 'required']") Label<br>yo
      w-button(type="submit") ok

    w-menu(overlay arrow)
      template(#activator="{ on }")
        w-button(v-on="on") test tooltip in menu
      p content
      w-tooltip
        template(#activator="{ on }")
          span(v-on="on") I have a tooltip
        | I'm a tooltip.

    w-accordion.white--bg(:items="3" :duration="2000")
      template(#item-title) item title
      template(#item-content="{ item, index }")
        | The item {{ index }}
      template(#item-content.2="{ item }")
        .ma4
          w-tooltip
            template(#activator="{ on }")
              span(v-on="on") I have a tooltip
            | I'm a tooltip.

    w-drawer(
      push-content
      v-model="openDrawer"
      @before-close="log('before-close')"
      @close="log('close')")
      template(#pushable)
        p testing
        p testing
        p testing
        w-button(@click="openDrawer = !openDrawer") open
        p testing
        p testing
        p testing
      w-tooltip
        template(#activator="{ on }")
          w-button(v-on="on").
            Show tooltip
        | tooltip.

    w-drawer(
      :model-value="true"
      @before-close="log('before-close')"
      @close="log('close')")
      w-tooltip
        template(#activator="{ on }")
          w-button(v-on="on").
            Show tooltip
        | tooltip.

    w-overlay(v-model="showOverlay"
      @before-close="log('before-close')"
      @close="log('close')")
      w-tooltip
        template(#activator="{ on }")
          w-button(v-on="on").
            Show tooltip
        | tooltip.

    .select-in-dialog
      w-button(@click="showDialog = true") open
      w-dialog(v-model="showDialog"
        @before-close="log('before-close')"
        @close="log('close')")
        w-tooltip
          template(#activator="{ on }")
            w-button(v-on="on").
              Show tooltip
          | tooltip.
        w-select.mt6(:items="items" label="Select")

    w-select.mt6(:items="items" label="Select" multiple)
</template>

<script>
export default {
  data: () => ({
    formValid: null,
    showDialog: true,
    showOverlay: true,
    openDrawer: true,
    items: [{ value: 'value 1', label: 'Item 1' }, { value: 'value 2', label: 'Item 2' }]
  }),

  methods: {
    log (...params) {console.log(...params)}
  },
  mounted () {
  }
}
</script>

<style lang="scss">

</style>
