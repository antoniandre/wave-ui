<template lang="pug">
.w-flex
  w-tooltip(left append-to=".w-app")
    template(#activator="{ on }")
      w-button.mr1.pa0.text-center.justify-center.d-flex(
        v-on="on"
        @click="tabsView = !tabsView"
        round
        text
        :icon="`mdi ${tabsView ? 'mdi-view-carousel-outline size--lg' : 'mdi-view-sequential'}`"
        width="2.3rem"
        height="2.3rem"
        :color="tabsView ? 'grey-light2' : 'primary'")
    | {{ tabsView ? 'Showing the tabs view. Prefer the list view?' : 'Showing the list view. Prefer the tabs view?' }}
  w-tooltip(left append-to=".w-app")
    template(#activator="{ on }")
      w-button.mr1.pa0.text-center.justify-center.d-flex(
        v-on="on"
        @click="hasPug && (usePug = !usePug)"
        round
        text
        width="2.3rem"
        height="2.3rem"
        :color="hasPug ? (usePug ? 'brown-light1' : 'grey-light2') : 'grey-light5'")
        svg.pug-icon(
          width="1.9rem"
          height="1.9rem"
          viewBox="0 0 512 512")
          path(d="M426 123c27 13 88 79 86 84-2 4-31 29-40 38-19 44-36 75-43 41-7 42-22 38-27 58-9 43-34 44-45 52-10 10-25 4-36 10-29 11-97 13-125 1-14-7-21 3-63-25-22-22-15-32-23-47-12-21-17-7-27-55-2 39-23 18-43-35 0 0-38-34-40-38-2-5 59-71 86-84 76-35 256-34 340 0zM296 239c41 14 80 58 74 98 0 21-2 35-5 45 35-23 19-30 33-52 13-23 16-15 23-45-4-31-8-84-13-101-4-13-25-42-38-60-65-25-193-17-226-1-13 18-34 48-39 62-4 15-8 67-12 98 3 30 25 43 29 59 3 25 15 33 31 42-4-10-6-25-6-47-7-47 39-87 76-99 10-27 65-24 73 1zm7 113c0-29-23-53-41-54l1-42c34-3 30-27-4-29-26 0-45 24-4 29v42c-18 0-41 24-41 53 3-29 25-44 46-44 21 1 39 16 43 45zM166 210c0-7-7-11-14-8a9 9 0 1 0 14 8zm-36 46a35 35 0 1 1 35-60 35 35 0 0 1-35 60zm220 0a35 35 0 1 1 36-60 35 35 0 0 1-36 60zm18-46c0-7-8-11-14-8s-6 13 0 16 14-1 14-8z")
    template(v-if="hasPug").
      Do you prefer the examples source code in Pug?#[br]
      The examples will also open in Pug in Codepen.
    template(v-else) No Pug yet for this example. Coming soon.
</template>

<script>
export default {
  props: {
    hasPug: { type: Boolean, default: false }
  },

  computed: {
    usePug: {
      get () {
        return this.$store.state.usePug
      },
      set (value) {
        this.$store.commit('setUsePug', value)
      }
    },

    tabsView: {
      get () {
        return this.$store.state.tabsView
      },
      set (value) {
        this.$store.commit('setTabsView', value)
      }
    }
  }
}
</script>
