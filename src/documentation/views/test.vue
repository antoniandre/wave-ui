<template lang="pug">
w-app
  .test.ma12.pa12.bd1.bdrs2.blue-light5--bg
    h1.mt0 Testing playground
    .tabs-multi-mount
      w-tabs(:items="tabs")
        //- template(#item-content.1="{ item }")
          component(:is="item.component")
        //- template(#item-content.2="{ item }")
          component(:is="item.component")
        //- template(#item-content.3="{ item }")
          component(:is="item.component")
        template(#item-content="{ item, index }")
          component(:is="item.component" :key="index")
</template>

<script>
const Component1 = {
  template: '<div>Component 1</div>',
  created () {
    console.log('Component 1 created.')
  }
}

const Component2 = {
  template: '<div>Component 2</div>',
  created () {
    console.log('Component 2 created.')
  }
}

const Component3 = {
  template: '<div>Component 3</div>',
  created () {
    console.log('Component 3 created.')
  }
}

export default {
  components: { Component1, Component2, Component3 },
  data: () => ({
    tabs: [
      { title: 'Tab 1', component: 'component1', content: 'test content 1' },
      { title: 'Tab 2', component: 'component2', content: 'test content 2' },
      { title: 'Tab 3', component: 'component3', content: 'test content 3' }
    ]
  })
}
</script>

<style lang="scss">

</style>
