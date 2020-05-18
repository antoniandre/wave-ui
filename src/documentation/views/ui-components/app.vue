<template lang="pug">
div
  h1.headline.mt-4 #[span.code w-app]

  p.
    This tag is important for Wave UI proper functionning.#[br]
    When you place it #[strong at the root of your app], it will convert to
    #[code &lt;div id="app" class="w-app"&gt;]. It should stand where the Vue instance was mounted.
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
