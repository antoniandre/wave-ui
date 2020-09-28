<template lang="pug">
router-view.grow(v-if="$route.name === 'home'")
documentation(v-else)
</template>

<script>
import Documentation from '@/documentation/index'

export default {
  components: { Documentation }
}
</script>
