<template lang="pug">
div
  h1.headline.mt-4 Wave UI
  .title
    | An emerging new UI framework for Vue.js with only the bright side.
    span.xl.ml-2 ☀️

  .subtitle.mt-6 Like other UI frameworks, Wave UI is:
  w-list(:items="features1" icon="wi-check")

  .subtitle.mt-6 But it is also:
  w-list(:items="features2" icon="wi-check")

  h2 Wave UI is developed with a particular care about CSS.
  p.subtitle.
    Practically Wave UI gives you more flexibility and more control over the CSS.
  blockquote.mt-2.
    Because inline styles and #[code !important] are a nightmare to override,
    Wave UI has chosen to use not-too-specific selectors and promote the CSS styling
    rather than Javascript dynamic styling.

  p.mt-3.
    In Wave UI framework, all the styles are scoped to the framework UI elements:
    you will not see any style applied to DOM elements.#[br]
    This way, you stay the master of your global styles.

  p.mt-3.
    We also encourage you to use Wave UI CSS classes when you can, and sometimes choose to
    override styles via CSS rather than appending dynamic styles via Javascript.

  p And to keep your CSS easy to override, always avoid the #[code !important] keyword.
</template>

<script>
export default {
  data: () => ({
    features1: [
      { label: 'fully responsive' },
      { label: 'accessibility compliant' },
      { label: 'very flexible' },
      { label: 'easy to use' }
    ],
    features2: [
      { label: 'Lightweight' },
      { label: 'Providing powerful elements, e.g. write a navigation menu in a single line' },
      { label: 'Free of useless DOM wrappers inside UI elements, really' },
      { label: 'Very easy to override via CSS' },
      { label: 'Avoiding the use of the <code>!important</code> keyword' },
      { label: 'CSS-scoping to UI elements &amp; helper classes - no side-effect' },
      { label: 'Handling all the sizes and spacings from a single <code>$base-font-size</code> variable that you can override' },
      { label: 'Providing straightforward attributes and component names' }
    ]
  })
}
</script>

<style lang="scss">
blockquote {
  background-color: #fffedc;
  border: 1px solid #eee;
  padding: 0.6em 1em;
  display: inline-block;
}

.w-list__item-bullet {color: green;}
</style>
