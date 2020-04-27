<template lang="pug">
div
  h1.headline Wave UI
  P An emerging new UI framework for Vue.js with only the bright side. #[code :bulb:]
  p.
    Like other UI frameworks, Wave UI is fully responsive, very flexible and easy to use.
    But it is also:
  ul
    li Lightweight
    li Very easy to override via CSS
    li No #[span.code !important] everywhere
    li No useless DOM wrappers inside UI elements, really.
    li A single #[span.code $base-font-size] variable rules all the sizes and spacings
    li Powerful elements, e.g. write a navigation menu in a single line
    li Providing straightforward attributes

  h2 Wave UI is developed with a particular care about CSS.
  blockquote.mt-2.
    We should all know it by now, there is a price to appending styles via Javascript:
    it becomes very hard to override.#[br]
    Same happens when the CSS selectors are too specific or when you start using the
    #[code !important] keyword.#[br]#[br]

    That's why Wave UI has chosen to use not-too-specific selectors to allow easy overriding.

  p.mt-3.
    We also encourage you to use Wave UI CSS classes when you can, and sometimes choose to
    override styles via CSS rather than appending dynamic styles via Javascript.

  p And to keep your CSS easy to override, always avoid the #[code !important] keyword.

  h2 Installation
  code npm i --D wave-ui

  h2 Presets
  h3 Buttons
  span.code w-button { small: true, outlined: true, round: true }
</template>

<script>
export default {
}
</script>

<style lang="scss">
blockquote {
  background-color: #fffedc;
  border: 1px solid #eee;
  padding: 0.6em 1em;
  display: inline-block;
}
</style>