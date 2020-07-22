<template lang="pug">
div
  title-link.mt4.code(h1) w-button

  p.
    Setting colors on buttons is quite straightforword:
    a text color is set via the attribute #[code color], and a background color is set via the
    attribute #[code bg-color].#[br]
    This allows you to easily mix a background color with a different text color of your choice.

  title-link(h2) Default
  w-button.ma1 normal

  title-link(h2) Secondary color
  example
    w-button.ma1(bg-color="secondary" xs) extra small
    w-button.ma1(bg-color="secondary" sm) small
    w-button.ma1(bg-color="secondary" md) medium
    w-button.ma1(bg-color="secondary" lg) large
    w-button.ma1(bg-color="secondary" xl) extra large
    w-button.ma1(bg-color="secondary" disabled) disabled
    template(#pug).
      w-button.ma1(bg-color="secondary" xs) extra small
      w-button.ma1(bg-color="secondary" sm) small
      w-button.ma1(bg-color="secondary" md) medium
      w-button.ma1(bg-color="secondary" lg) large
      w-button.ma1(bg-color="secondary" xl) extra large
      w-button.ma1(bg-color="secondary" disabled) disabled

  title-link(h2) Dark
  example
    w-button.ma1(bg-color="primary" color="white" xs) extra small
    w-button.ma1(bg-color="primary" color="white" sm) small
    w-button.ma1(bg-color="primary" color="white" md) medium
    w-button.ma1(bg-color="primary" color="white" lg) large
    w-button.ma1(bg-color="primary" color="white" xl) extra large
    w-button.ma1(bg-color="primary" color="white" disabled) disabled
    template(#pug).
      w-button.ma1(bg-color="primary" color="white" xs) extra small
      w-button.ma1(bg-color="primary" color="white" sm) small
      w-button.ma1(bg-color="primary" color="white" md) medium
      w-button.ma1(bg-color="primary" color="white" lg) large
      w-button.ma1(bg-color="primary" color="white" xl) extra large
      w-button.ma1(bg-color="primary" color="white" disabled) disabled

  h3 Mix background and text colors
  example
    w-button.ma1(bg-color="primary" color="yellow" xs) extra small
    w-button.ma1(bg-color="primary" color="yellow" sm) small
    w-button.ma1(bg-color="primary" color="yellow" md) medium
    w-button.ma1(bg-color="primary" color="yellow" lg) large
    w-button.ma1(bg-color="primary" color="yellow" xl) extra large
    w-button.ma1(bg-color="primary" color="yellow" disabled) disabled
    template(#pug).
      w-button.ma1(bg-color="primary" color="yellow" xs) extra small
      w-button.ma1(bg-color="primary" color="yellow" sm) small
      w-button.ma1(bg-color="primary" color="yellow" md) medium
      w-button.ma1(bg-color="primary" color="yellow" lg) large
      w-button.ma1(bg-color="primary" color="yellow" xl) extra large
      w-button.ma1(bg-color="primary" color="yellow" disabled) disabled

  title-link(h2) Outline
  example
    w-button.ma1(color="primary" outline xs) extra small
    w-button.ma1(color="primary" outline sm) small
    w-button.ma1(color="primary" outline md) medium
    w-button.ma1(color="primary" outline lg) large
    w-button.ma1(color="primary" outline xl) extra large
    w-button.ma1(color="primary" outline disabled) disabled
    template(#pug).
      w-button.ma1(color="primary" outline xs) extra small
      w-button.ma1(color="primary" outline sm) small
      w-button.ma1(color="primary" outline md) medium
      w-button.ma1(color="primary" outline lg) large
      w-button.ma1(color="primary" outline xl) extra large
      w-button.ma1(color="primary" outline disabled) disabled

  title-link(h2) Text
  example
    w-button.ma1(color="primary" text xs) extra small
    w-button.ma1(color="primary" text sm) small
    w-button.ma1(color="primary" text md) medium
    w-button.ma1(color="primary" text lg) large
    w-button.ma1(color="primary" text xl) extra large
    w-button.ma1(color="primary" text disabled) disabled
    template(#pug).
      w-button.ma1(color="primary" text xs) extra small
      w-button.ma1(color="primary" text sm) small
      w-button.ma1(color="primary" text md) medium
      w-button.ma1(color="primary" text lg) large
      w-button.ma1(color="primary" text xl) extra large
      w-button.ma1(color="primary" text disabled) disabled

  title-link(h2) Shadow &amp; colors
  example(content-class="w-flex")
    w-button.ma1(bg-color="success" shadow) success
    w-button.ma1(bg-color="error" shadow) error
    w-button.ma1(bg-color="warning" shadow) warning
    w-button.ma1(bg-color="info" shadow) info
    template(#pug).
      w-button.ma1(bg-color="success" shadow) success
      w-button.ma1(bg-color="error" shadow) error
      w-button.ma1(bg-color="warning" shadow) warning
      w-button.ma1(bg-color="info" shadow) info

  title-link(h2) Round &amp; tile
  example(content-class="w-flex")
    w-button.ma1(bg-color="primary" round) round
    w-button.ma1.mr6(bg-color="secondary" round) round
    w-button.ma1(bg-color="primary" tile) tile
    w-button.ma1.mr6(bg-color="secondary" tile) tile
    template(#pug).
      w-button.ma1(bg-color="primary" round) round
      w-button.ma1.mr6(bg-color="secondary" round) round
      w-button.ma1(bg-color="primary" tile) tile
      w-button.ma1.mr6(bg-color="secondary" tile) tile

  title-link(h2) Icons &amp; mixed content
  p Icon buttons are rounded by default.
  example
    w-button.ma1(bg-color="error" icon="wi-cross")
    w-button.ma1.mr6(bg-color="success" icon="wi-check")
    w-button.ma1(bg-color="error")
      w-icon.mr1 wi-cross
      | Cancel
    w-button.ma1(bg-color="success")
      w-icon.mr1 wi-check
      | Save
    template(#pug).
      w-button.ma1(bg-color="error" icon="wi-cross")
      w-button.ma1.mr6(bg-color="success" icon="wi-check")
      w-button.ma1(bg-color="error")
        w-icon.mr1 wi-cross
        | Cancel
      w-button.ma1(bg-color="success")
        w-icon.mr1 wi-check
        | Save

  title-link(h2) Loading spinner &amp; custom loader
  example(content-class="w-flex")
    w-button.ma1(bg-color="primary" :loading="button1loading" @click="buttonDoLoading(1)")
      w-icon.mr1 wi-check
      | Save
    w-button.ma1.px4(bg-color="primary" :loading="button2loading" @click="buttonDoLoading(2)")
      w-icon.mr1 wi-check
      | Save
      template(#loading) Loading...
    template(#pug).
      w-button.ma1(bg-color="primary" :loading="button1loading" @click="buttonDoLoading(1)")
        w-icon.mr1 wi-check
        | Save
      w-button.ma1.px4(bg-color="primary" :loading="button2loading" @click="buttonDoLoading(2)")
        w-icon.mr1 wi-check
        | Save
        template(#loading="") Loading...
    template(#js).
      data: () => ({
        button1loading: false,
        button2loading: false
      }),
      methods: {
        buttonDoLoading (id) {
          this[`button${id}loading`] = true
          setTimeout(() => (this[`button${id}loading`] = false), 3000)
        }
      }

  title-link(h2) Links
  example(content-class="w-flex")
    w-button.ma1(bg-color="primary" to="/")
      | Getting started
      w-icon.ml1 wi-chevron-right
    w-button.ma1(bg-color="primary" to="https://github.com/antoniandre/wave-ui")
      | Github
      w-icon.ml2(sm) mdi mdi-open-in-new
    template(#pug).
      w-button.ma1(bg-color="primary" to="/")
        | Getting started
        w-icon.ml1 wi-chevron-right
      w-button.ma1(bg-color="primary" to="https://github.com/antoniandre/wave-ui")
        | Github
        w-icon.ml2(sm) mdi mdi-open-in-new

  title-link(h2) Position absolute &amp; fixed
  w-alert.text-light(type="warning").
    The #[span.code w-button] component does not have an #[span.code absolute] or #[span.code fixed]
    prop.#[br]
    This is a trade off as adding those parameters needs more internal code and loss of performance
    than if you add a #[span.code position: absolute] css style!#[br]
    On the bright side, thanks to that Wave UI remains very flexible and CSS overridable! 😉
</template>

<script>
export default {
  data: () => ({
    button1loading: false,
    button2loading: false
  }),
  methods: {
    buttonDoLoading (id) {
      this[`button${id}loading`] = true
      setTimeout(() => (this[`button${id}loading`] = false), 3000)
    }
  }
}
</script>
