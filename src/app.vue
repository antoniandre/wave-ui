<template lang="pug">
router-view.grow(v-if="['home', 'test'].includes($route.name)")
component(v-else is="documentation")
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: { Documentation: defineAsyncComponent(() => import('@/documentation/index.vue')) },

  created () {
    this.$store.commit('initUsePug')
    this.$store.commit('initTabsView')
  }
}
</script>
