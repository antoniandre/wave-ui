<template lang="pug">
w-app
  .test.ma12.pa12.bd1.bdrs2
    h1.mt0.mb8 Testing playground
    p tabs count: {{ tabs.length }}, currTab: {{ currTab }}
    w-button.ma2(@click="deleteTab") Delete tab
    w-button.ma2(@click="addTab(1)") inject tab #2
    w-button.ma2(@click="addTab()") Append tab
    w-button.ma2(@click="restoreTab()") Restore last deleted tab
    w-button.ma2(@click="replaceTab(1)") Replace tab #1
    w-tabs(v-model="currTab" :items="tabs" keep-in-dom)
      template(#item-content="{ item }")
        pre {{ item }}
        w-checkbox(v-if="item.id2 === 3")
        iframe(
          v-if="item.id2 === 2"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gzmA1kkk660"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen)
    //- w-tabs.mt12(v-model="currTab" :items="tabs" keep-in-dom)
      template(#item-content="{ item }")
        pre {{}}
        iframe(
          v-if="item.id === 2"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gzmA1kkk660"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen)
    w-divider.my6
    p Open tabs
    pre {{ tabs }}
    w-divider.my6
    p Deleted tabs
    pre {{ deletedTabs }}
</template>

<script>
export default {
  data: () => ({
    currTab: 2,
    tabs: [
      { id2: 1, title: 'Tab 1', content: 'Tab 1 content.' },
      { id2: 2, title: 'Tab 2', content: 'Tab 2 content.' },
      { id2: 3, title: 'Tab 3 has a long title', content: 'Tab 3 content.' }
    ],
    deletedTabs: []
  }),

  methods: {
    deleteTab () {
      this.deletedTabs.push(...this.tabs.splice(this.currTab, 1))
    },
    restoreTab () {
      this.tabs.push(this.deletedTabs[0])
    },
    addTab (index) {
      this.tabs.splice(index ?? this.tabs.length, 0, { title: `injected tab ${this.tabs.length}`, content: `injected Tab ${this.tabs.length} content.` })
    },
    replaceTab (index) {
      this.tabs.splice(index, 1, { title: `Replaced tab ${this.tabs.length}`, content: `Replaced Tab ${this.tabs.length} content.` })
    }
  }
}
</script>

<style lang="scss">

</style>
