<template lang="pug">
div
  title-link(h2) Basic
  example
    w-confirm Delete

  title-link(h2) Custom question
  example
    w-confirm
      strong something bold
      template(#question) Are you sure you want to delete this?

  title-link(h2) Icon button
  example
    w-confirm(icon="wi-cross")

  title-link(h2) Colors
  example
    w-confirm(bg-color="success" color="white") Test
    w-confirm(bg-color="indigo" color="yellow") Test

  title-link(h2) Alignments
  example
    w-confirm.my5(bg-color="red" align-right) Test
    w-confirm.my5(bg-color="red" align-left) Test
    w-confirm.my5(bg-color="red" top) Test
    w-confirm.my5(bg-color="red" top align-left) Test
    w-confirm.my5(bg-color="red" left align-bottom) Test

  title-link(h2) Persistent
  example
    w-confirm(persistent) Test

</template>

<script>
export default {

}
</script>
