<template lang="pug">
div
  title-link(h2) Basic
  example
    w-confirm Delete

  title-link(h2) Custom question
  example
    w-confirm
      strong Ask for confirm
      template(#question) Are you sure you want to delete this?

  title-link(h2) Icon button
  example
    w-confirm(icon="mdi mdi-delete")

  title-link(h2) Transitions
  example
    w-flex(wrap)
      w-confirm.ma1 Default
      w-confirm.ma1(transition="fade") Fade
      w-confirm.ma1(transition="twist") Twist
      w-confirm.ma1(transition="bounce") Bounce
      w-confirm.ma1(transition="slide-up") Slide up
      w-confirm.ma1(transition="slide-right") Slide right
      w-confirm.ma1(transition="slide-down") Slide down
      w-confirm.ma1(transition="slide-left") Slide left
      w-confirm.ma1(transition="slide-fade-up") Slide fade up
      w-confirm.ma1(transition="slide-fade-right") Slide fade right
      w-confirm.ma1(transition="slide-fade-down") Slide fade down
      w-confirm.ma1(transition="slide-fade-left") Slide fade left
      w-confirm.ma1(transition="bounce") Bounce
      w-confirm.ma1(transition="bounce") Bounce

  title-link(h2) Colors
  example
    w-confirm.mb2(bg-color="success" color="white") Ask for confirm
    w-confirm(bg-color="indigo" color="yellow") Ask for confirm

  title-link(h2) Positions &amp; alignments
  title-link(h3) Positions
  example
    w-confirm.my5(top) Top
    w-confirm.my5(right) Right
    w-confirm.my5(bottom) Bottom
    w-confirm.my5(left) Left

  title-link(h3) Alignments
  example
    w-confirm.my5(top align-right) Top, align right
    w-confirm.my5(top align-left) Top, align left

    w-confirm.my5(right align-top) Right, align top
    w-confirm.my5(right) Right, align center
    w-confirm.my5(right align-bottom) Right, align bottom

  title-link(h2) Persistent
  example
    w-confirm(persistent) Ask for confirm

  title-link(h2) Cancel &amp; confirm buttons
  example
    w-confirm
      | Ask for confirm
      template(#cancel) Dismiss
      template(#confirm) Agree

  example
    w-confirm(no-cancel) Ask for confirm

  title-link(h2) Inline question
  example
    w-confirm(inline)
      | Ask for confirm
      template(#cancel) Dismiss
      template(#confirm) Confirm

  title-link(h2) Events
  example
    w-confirm(
      @cancel="$waveui.notify('Canceled.', 'error')"
      @confirm="$waveui.notify('Confirmed!', 'success')") Ask for confirm
</template>

<script>
export default {
}
</script>
