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

  title-link(h2) Transitions
  example
    w-confirm(transition="fade") Confirm button

  title-link(h2) Colors
  example
    w-confirm(bg-color="success" color="white") Confirm button
    w-confirm(bg-color="indigo" color="yellow") Confirm button

  title-link(h2) Alignments
  example
    w-confirm.my5(bg-color="red" align-right) Confirm button
    w-confirm.my5(bg-color="red" align-left) Confirm button
    w-confirm.my5(bg-color="red" top) Confirm button
    w-confirm.my5(bg-color="red" top align-left) Confirm button
    w-confirm.my5(bg-color="red" left align-bottom) Confirm button

  title-link(h2) Persistent
  example
    w-confirm(persistent) Confirm button

  title-link(h2) Cancel &amp; accept buttons
  example
    w-confirm
      | Confirm button
      template(#cancel) Dismiss
      template(#accept) Accept

  title-link(h2) Inline question
  example
    w-confirm(inline)
      | Confirm button
      template(#cancel) Dismiss
      template(#accept) Accept

  title-link(h2) Events
  example
    w-confirm(
      @cancel="$waveui.notify('Canceled.', 'error')"
      @accept="$waveui.notify('Accepted!', 'success')") Confirm button
</template>

<script>
export default {
}
</script>
