<template lang="pug">
router-view.grow(v-if="['home', 'test'].includes($route.name)")
component(v-else is="documentation")
</template>

<script>
export default {
  components: { Documentation: () => import('@/documentation/index.vue') },

  created () {
    this.$store.commit('initUsePug')
    this.$store.commit('initTabsView')
  }
}
</script>
