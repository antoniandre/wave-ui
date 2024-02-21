<template lang="pug">
div
  title-link(h2) Default
  p By default (if no #[code color] or #[code bg-color] is applied) the primary color will be applied.
  w-button.ma1 default

  title-link(h2) Colors
  p.
    Setting colors on buttons is quite straightforward:
    a text color is set via the attribute #[code color], and a background color is set via the
    attribute #[code bg-color].#[br]
    This allows you to easily mix a background color with a different text color of your choice.#[br]
    If no #[code color] or #[code bg-color] is set, the #[code bg-color] will be set to primary by default.#[br]#[br]

    Here is an example of buttons using all types of colors as a background: status colors, primary color,
    secondary color and a color palette color shade.
  p
    strong.mr1 Note:
    ul
      li The 4 status colors have a white text by default on both light and dark themes.
      li.
        The primary color is usually standing out from the background by a higher contrast difference.
        So when used as a background in a light theme the primary color is considered dark and has a white
        text by default, while in the dark theme, it will have a black text by default.
        You can override this color with #[code .w-app .primary--bg {color: #000;}].
  example
    w-flex.wrap
      w-button.ma1(bg-color="success") success
      w-button.ma1(bg-color="error") error
      w-button.ma1(bg-color="warning") warning
      w-button.ma1(bg-color="info") info
      w-button.ma1 primary
      w-button.ma1(bg-color="secondary") secondary
      w-button.ma1(bg-color="purple-light4" v-bind="{ [$store.state.darkMode ? 'light' : 'dark']: true }") purple-light4
    template(#pug).
      w-flex.wrap
        w-button.ma1(bg-color="success") success
        w-button.ma1(bg-color="error") error
        w-button.ma1(bg-color="warning") warning
        w-button.ma1(bg-color="info") info
        w-button.ma1 primary
        w-button.ma1(bg-color="secondary") secondary
        w-button.ma1(bg-color="purple-light4") purple-light4
    template(#html).
      &lt;w-flex class="wrap"&gt;
        &lt;w-button class="ma1" bg-color="success"&gt;success&lt;/w-button&gt;
        &lt;w-button class="ma1" bg-color="error"&gt;error&lt;/w-button&gt;
        &lt;w-button class="ma1" bg-color="warning"&gt;warning&lt;/w-button&gt;
        &lt;w-button class="ma1" bg-color="info"&gt;info&lt;/w-button&gt;
        &lt;w-button class="ma1"&gt;primary&lt;/w-button&gt;
        &lt;w-button class="ma1" bg-color="secondary"&gt;secondary&lt;/w-button&gt;
        &lt;w-button class="ma1" bg-color="purple-light4"&gt;purple-light4&lt;/w-button&gt;
      &lt;/w-flex&gt;

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
    template(#html).
      &lt;w-button
        class="ma1"
        bg-color="success"
        color="yellow-light2"&gt;
        success
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        bg-color="error"
        color="amber-light2"&gt;
        error
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        bg-color="primary"
        color="success-light2"&gt;
        warning
      &lt;/w-button&gt;

  h3 Dark / Light
  p.
    By default the #[code primary] color is considered dark as well as the four status colors:
    #[code success], #[code error], #[code warning] &amp; #[code info].
    They will therefore have a white text by default when used as a background color.#[br]
    For the rest you can use the #[code dark] prop or set the #[code color] prop to `white`.
  example
    w-button.ma1(:bg-color="$store.state.darkMode ? 'primary-dark3' : 'primary-light3'") normal
    w-icon.mx6(size="2.5em" :class="$store.state.darkMode ? 'grey-dark3' : 'grey-light3'") mdi mdi-arrow-right
    w-button.ma1(
      :bg-color="$store.state.darkMode ? 'primary-dark3' : 'primary-light3'"
      v-bind="{ [`${$store.state.darkMode ? 'light' : 'dark'}`]: true }").
      {{ $store.state.darkMode ? 'light' : 'dark' }}
    template(#pug).
      w-button.ma1(bg-color="primary-light3") normal
      w-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right
      w-button.ma1(bg-color="primary-light3" dark) dark
    template(#html).
      &lt;w-button class="ma1" bg-color="primary-light3"&gt;normal&lt;/w-button&gt;

      &lt;w-icon class="mx6" size="2.5em" class="grey-light3"&gt;mdi mdi-arrow-right&lt;/w-icon&gt;

      &lt;w-button class="ma1" bg-color="primary-light3" dark&gt;dark&lt;/w-button&gt;

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
    w-button.ma1(bg-color="primary" xs) extra small
    w-button.ma1(bg-color="primary" sm) small
    w-button.ma1(bg-color="primary" md) medium
    w-button.ma1(bg-color="primary" lg) large
    w-button.ma1(bg-color="primary" xl) extra large
    w-button.ma1(bg-color="primary" disabled) disabled
    template(#pug).
      w-button.ma1(bg-color="secondary" xs) extra small
      w-button.ma1(bg-color="secondary" sm) small
      w-button.ma1(bg-color="secondary" md) medium
      w-button.ma1(bg-color="secondary" lg) large
      w-button.ma1(bg-color="secondary" xl) extra large
      w-button.ma1(bg-color="secondary" disabled) disabled
      br
      br
      w-button.ma1(bg-color="primary" xs) extra small
      w-button.ma1(bg-color="primary" sm) small
      w-button.ma1(bg-color="primary" md) medium
      w-button.ma1(bg-color="primary" lg) large
      w-button.ma1(bg-color="primary" xl) extra large
      w-button.ma1(bg-color="primary" disabled) disabled
    template(#html).
      &lt;w-button class="ma1" bg-color="secondary" xs&gt;extra small&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="secondary" sm&gt;small&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="secondary" md&gt;medium&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="secondary" lg&gt;large&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="secondary" xl&gt;extra large&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="secondary" disabled&gt;disabled&lt;/w-button&gt;
      &lt;br&gt;
      &lt;br&gt;
      &lt;w-button class="ma1" bg-color="primary" xs&gt;extra small&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="primary" sm&gt;small&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="primary" md&gt;medium&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="primary" lg&gt;large&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="primary" xl&gt;extra large&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="primary" disabled&gt;disabled&lt;/w-button&gt;

  h3 Stretch to the available space
  ul
    li In a flex content, you can add the #[code grow] class.
    li In a block context, you can add the #[code fill-width] class.
  example
    w-flex
      w-button.grow Block Button
    br
    w-button.fill-width Block Button
    template(#pug).
      w-flex
        w-button.grow Block Button
      br
      w-button.fill-width Block Button
    template(#html).
      &lt;w-flex&gt;
        &lt;w-button class="grow"&gt;primary&lt;/w-button&gt;
      &lt;/w-flex&gt;
      &lt;br/&gt;
      &lt;w-button class="fill-width"&gt;primary&lt;/w-button&gt;

  h3 Custom width and height
  p.
    Even though you can easily override the dimensions via CSS, a #[code width] and #[code height] props
    are available on the #[span.code w-button] component.
  example(content-class="pt6")
    w-button.ma1(bg-color="info" width="10em" :height="18") info
    template(#pug).
      w-button.ma1(bg-color="info" width="10em" :height="18") info
    template(#html).
      &lt;w-button
        class="ma1 grow"
        bg-color="info"
        width="10em"
        :height="18"&gt;
        info
      &lt;/w-button&gt;

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
    template(#html).
      &lt;w-button class="ma1" color="primary" outline xs&gt;extra small&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" outline sm&gt;small&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" outline md&gt;medium&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" outline lg&gt;large&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" outline xl&gt;extra large&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" outline disabled&gt;disabled&lt;/w-button&gt;

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
    template(#html).
      &lt;w-button class="ma1" color="primary" text xs&gt;extra small&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" text sm&gt;small&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" text md&gt;medium&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" text lg&gt;large&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" text xl&gt;extra large&lt;/w-button&gt;
      &lt;w-button class="ma1" color="primary" text disabled&gt;disabled&lt;/w-button&gt;

  title-link(h2) Round &amp; tile
  example(content-class="w-flex")
    w-button.ma1(round) round
    w-button.ma1.mr6(bg-color="secondary" round) round
    w-button.ma1(tile) tile
    w-button.ma1(bg-color="secondary" tile) tile
    template(#pug).
      w-button.ma1(round) round
      w-button.ma1.mr6(bg-color="secondary" round) round
      w-button.ma1(tile) tile
      w-button.ma1(bg-color="secondary" tile) tile
    template(#html).
      &lt;w-button class="ma1" round&gt;round&lt;/w-button&gt;
      &lt;w-button class="ma1 mr6" bg-color="secondary" round&gt;round&lt;/w-button&gt;
      &lt;w-button class="ma1" tile&gt;tile&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="secondary" tile&gt;tile&lt;/w-button&gt;

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
    template(#html).
      &lt;w-button class="ma1" bg-color="success" shadow&gt;success&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="error" shadow&gt;error&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="warning" shadow&gt;warning&lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="info" shadow&gt;info&lt;/w-button&gt;

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
    template(#html).
      &lt;w-button class="ma1" bg-color="error" icon="wi-cross"&gt;&lt;/w-button&gt;
      &lt;w-button class="ma1 mr6" bg-color="success" icon="wi-check"&gt;&lt;/w-button&gt;

      &lt;w-button class="ma1" bg-color="error"&gt;
        &lt;w-icon class="mr1"&gt;wi-cross&lt;/w-icon&gt;
        Cancel
      &lt;/w-button&gt;
      &lt;w-button class="ma1" bg-color="success"&gt;
        &lt;w-icon class="mr1"&gt;wi-check&lt;/w-icon&gt;
        Save
      &lt;/w-button&gt;

  title-link(h3 slug="more-control-on-icons") More control on icons using the #[code icon-props]
  example(content-class="w-flex")
    w-button(icon="wi-star" :icon-props="{ spin: true }") default
    template(#pug).
      w-button(icon="wi-star" :icon-props="{ spin: true }") default
    template(#html).
      &lt;w-button
        icon="wi-star"
        :icon-props="{ spin: true }"&gt;
      &lt;/w-button&gt;

  title-link(h2) Loading spinner &amp; custom loader
  example(content-class="w-flex")
    w-button.ma1(:loading="button1loading" @click="buttonDoLoading(1)")
      w-icon.mr1 wi-check
      | Save
    w-button.ma1.px4(:loading="button2loading" @click="buttonDoLoading(2)")
      w-icon.mr1 wi-check
      | Save
      template(#loading) Loading...
    template(#pug).
      w-button.ma1(
        :loading="button1loading"
        @click="buttonDoLoading(1)")
        w-icon.mr1 wi-check
        | Save

      w-button.ma1.px4(
        :loading="button2loading"
        @click="buttonDoLoading(2)")
        w-icon.mr1 wi-check
        | Save
        template(#loading) Loading...
    template(#html).
      &lt;w-button
        class="ma1"
        :loading="button1loading"
        @click="buttonDoLoading(1)"&gt;
        &lt;w-icon class="mr1" &gt;wi-check&lt;/w-icon&gt;
        Save
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1 px4"
        :loading="button2loading"
        @click="buttonDoLoading(2)"&gt;
        &lt;w-icon class="mr1" &gt;wi-check&lt;/w-icon&gt;
        Save
        &lt;template #loading&gt;Loading...&lt;/template&gt;
      &lt;/w-button&gt;
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
    prop to force a normal link.#[br]
    Note that you are also free to add a #[code target="_blank"] attribute if you want to open the
    link in a new tab.

  example(content-class="w-flex")
    w-button.ma1(route="/getting-started")
      | Getting started
      w-icon.ml1 wi-chevron-right
    w-button.ma1(route="https://github.com/antoniandre/wave-ui" target="_blank")
      | Github
      w-icon.ml2(sm) mdi mdi-open-in-new
    template(#pug).
      w-button.ma1(route="/getting-started")
        | Getting started
        w-icon.ml1 wi-chevron-right

      w-button.ma1(
        route="https://github.com/antoniandre/wave-ui"
        target="_blank")
        | Github
        w-icon.ml2(sm) mdi mdi-open-in-new
    template(#html).
      &lt;w-button
        class="ma1"
        route="/getting-started"
        target="_blank"&gt;
        Getting started
        &lt;w-icon class="ml1"&gt;wi-chevron-right&lt;/w-icon&gt;
      &lt;/w-button&gt;

      &lt;w-button
        class="ma1"
        route="https://github.com/antoniandre/wave-ui"&gt;
        Github
        &lt;w-icon class="ml2" sm&gt;mdi mdi-open-in-new&lt;/w-icon&gt;
      &lt;/w-button&gt;

  title-link(h2) Integrated tooltip
  p.
    We often need a tooltip on a button. Especially on the ones that only have an icons.#[br]
    That's why from version 2.45.0, the w-button component ships with an integrated w-tooltip,
    if you need it.
  example(content-class="w-flex wrap")
    w-button.ma6(tooltip="Thank you!") Hover me please

    w-button.ma6(
      tooltip="Woohoo!"
      :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }").
      Hover me too please
    template(#pug).
      w-button.ma6(tooltip="Thank you!") Hover me please
      w-button.ma6(
        tooltip="Woohoo!"
        :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }").
        Hover me too please
    template(#html).
      &lt;w-button
        class="ma6"
        tooltip="Thank you!"&gt;
        Hover me please
      &lt;/w-button&gt;

      &lt;w-button
        class="ma6"
        tooltip="Woohoo!"
        :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }"&gt;
        Hover me too please
      &lt;/w-button&gt;
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
