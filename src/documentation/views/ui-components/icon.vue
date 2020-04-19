<template lang="pug">
div
  h1 #[span.code w-icon]
  p.
    The Font Awesome 4 icons font is loaded on demand if you use the 'fa' icon font.#[br]
    The Ionicons 4 icons font is loaded on demand if you use the 'ion' icon font.#[br]
    You can also use your own font as long as you import it.#[br]
    You can use multiple icons sources at the same time but it is not recommended.
  h3 Ionicons 4
  w-icon.mr-1(x-small color="primary") ion-md-star
  w-icon.mr-1(small color="primary") ion-md-star
  w-icon.mr-1(medium color="primary") ion-md-star
  w-icon.mr-1(large color="primary") ion-md-star
  w-icon.mr-1(x-large color="primary") ion-md-star
  w-icon.mr-1(:size="50" color="primary") ion-md-star
  w-icon.mr-1(size="5em" color="primary") ion-md-star
  h3 Font Awesome 4
  w-icon.mr-1(x-small color="primary") fa fa-chrome
  w-icon.mr-1(small color="primary") fa fa-chrome
  w-icon.mr-1(medium color="primary") fa fa-chrome
  w-icon.mr-1(large color="primary") fa fa-chrome
  w-icon.mr-1(x-large color="primary") fa fa-chrome
  w-icon.mr-1(:size="50" color="primary") fa fa-chrome
  w-icon.mr-1(size="5em" color="primary") fa fa-chrome

</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>