<template lang="pug">
div
  p.
    Setting colors on buttons is quite straightforward:
    a text color is set via the attribute #[code color], and a background color is set via the
    attribute #[code bg-color].#[br]
    This allows you to easily mix a background color with a different text color of your choice.

  title-link(h2) Default
  p By default (if no color or bg-color is applied) the primary color will be applied.
  w-button.ma1 default

  title-link(h2) Colors
  p.
    Here is an example of buttons using all types of colors as a background: status colors, primary color,
    secondary color and a color palette color shade.
  p
    strong.mr1 Note:
    | The 4 status colors as well as the primary color have a white text by default.
  example
    w-flex.wrap
      w-button.ma1(bg-color="success") success
      w-button.ma1(bg-color="error") error
      w-button.ma1(bg-color="warning") warning
      w-button.ma1(bg-color="info") info
      w-button.ma1(bg-color="primary") primary
      w-button.ma1(bg-color="secondary") secondary
      w-button.ma1(bg-color="purple-light4") purple-light4
    template(#pug).
      w-flex.wrap
        w-button.ma1(bg-color="success") success
        w-button.ma1(bg-color="error") error
        w-button.ma1(bg-color="warning") warning
        w-button.ma1(bg-color="info") info
        w-button.ma1(bg-color="primary") primary
        w-button.ma1(bg-color="secondary") secondary
        w-button.ma1(bg-color="purple-light4") purple-light4

  h3 Mix background and text colors
  p.
    Like in most components, you can set a #[code color] for the text and a #[code bg-color] for the
    background.
  example
    w-button.ma1(bg-color="success" color="yellow-light2") success
    w-button.ma1(bg-color="error" color="amber-light2") error
    w-button.ma1(bg-color="primary" color="success-light2") warning
    template(#pug).
      w-button.ma1(bg-color="success" color="yellow-light2") success
      w-button.ma1(bg-color="error" color="amber-light2") error
      w-button.ma1(bg-color="primary" color="success-light2") warning

  h3 Dark
  p.
    By default the #[code primary] color is considered dark as well as the four status colors:
    #[code success], #[code error], #[code warning] &amp; #[code info].
    They will therefore have a white text by default when used as a background color.#[br]
    For the rest you can use the #[code dark] prop.
  example
    w-button.ma1(bg-color="primary-light3") normal
    w-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right
    w-button.ma1(bg-color="primary-light3" dark) dark
    template(#pug).
      w-button.ma1(bg-color="primary-light3") normal
      w-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right
      w-button.ma1(bg-color="primary-light3" dark) dark

  title-link(h2) Sizes
  p.
    The button size can be controlled via the preset sizes #[code xs], #[code sm], #[code md],
    #[code lg], #[code xl] or via the #[code width] and #[code height] props.
  example
    w-button.ma1(bg-color="secondary" xs) extra small
    w-button.ma1(bg-color="secondary" sm) small
    w-button.ma1(bg-color="secondary" md) medium
    w-button.ma1(bg-color="secondary" lg) large
    w-button.ma1(bg-color="secondary" xl) extra large
    w-button.ma1(bg-color="secondary" disabled) disabled
    br
    br
    w-button.ma1(bg-color="primary" color="white" xs) extra small
    w-button.ma1(bg-color="primary" color="white" sm) small
    w-button.ma1(bg-color="primary" color="white" md) medium
    w-button.ma1(bg-color="primary" color="white" lg) large
    w-button.ma1(bg-color="primary" color="white" xl) extra large
    w-button.ma1(bg-color="primary" color="white" disabled) disabled
    template(#pug).
      w-button.ma1(bg-color="secondary" xs) extra small
      w-button.ma1(bg-color="secondary" sm) small
      w-button.ma1(bg-color="secondary" md) medium
      w-button.ma1(bg-color="secondary" lg) large
      w-button.ma1(bg-color="secondary" xl) extra large
      w-button.ma1(bg-color="secondary" disabled) disabled
      br
      br
      w-button.ma1(bg-color="primary" color="white" xs) extra small
      w-button.ma1(bg-color="primary" color="white" sm) small
      w-button.ma1(bg-color="primary" color="white" md) medium
      w-button.ma1(bg-color="primary" color="white" lg) large
      w-button.ma1(bg-color="primary" color="white" xl) extra large
      w-button.ma1(bg-color="primary" color="white" disabled) disabled

  h3 Stretch to the available space
  example
    w-flex
      w-button.ma1.grow(bg-color="primary") primary
    template(#pug).
      w-flex
        w-button.ma1.grow(bg-color="primary") primary

  h3 Custom width and height
  p.
    Even though you can easily override the dimensions via CSS, a #[code width] and #[code height] props
    are available on the #[span.code w-button] component.
  example(content-class="pt6")
    w-button.ma1(bg-color="info" width="10em" :height="18") info
    template(#pug).
      w-button.ma1.grow(bg-color="info" width="10em" :height="18") info

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

  title-link(h2) Shadow
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
  p.
    If you are using Vue Router, all the links will automatically be #[strong.code router-link]s
    unless they start with #[code http] or #[code https].#[br]
    In some cases, you may want to use a normal link instead of a #[strong.code router-link], for
    instance when using anchor links (starting with #[code #]), you can use the #[code force-link]
    prop to force a normal link.

  example(content-class="w-flex")
    w-button.ma1(bg-color="primary" route="/getting-started")
      | Getting started
      w-icon.ml1 wi-chevron-right
    w-button.ma1(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
      | Github
      w-icon.ml2(sm) mdi mdi-open-in-new
    template(#pug).
      w-button.ma1(bg-color="primary" route="/getting-started")
        | Getting started
        w-icon.ml1 wi-chevron-right
      w-button.ma1(bg-color="primary" route="https://github.com/antoniandre/wave-ui")
        | Github
        w-icon.ml2(sm) mdi mdi-open-in-new
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
