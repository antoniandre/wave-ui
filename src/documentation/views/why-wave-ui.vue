<template lang="pug">
main
  title-link.mt4(h1) Why Wave UI?
  alert.top-alert.pa5(info)
    .title3
      svg.wave(viewBox="0 0 725 477")
        path(d="M449 0c-78 5-152 39-217 82-19 13-37 26-54 40-39 1-77 15-110 34-34 21-53 60-61 99-11 52-8 108 6 159 7 23 16 46 33 63 4-4 13-4 13-11-1-5-7-8-9-14-27-48-32-108-11-159 13-32 36-63 68-77 19-9 42-7 58 6 6 7 18 4 24-2 6-4 11-10 19-10-24 25-39 60-38 95 1 15 3 31 8 45 16 36 41 69 76 89 5 2 10 6 16 7 5-2 14-5 14-12-4-9-14-12-21-18-27-23-56-48-67-82-9-29-1-60 8-88 7-15 21-32 39-29 15 1 28 13 43 8 11-5 13-17 16-27 5-17 3-38-10-51-16-18-40-23-62-25l-11-2c23-19 53-26 81-31 21-3 43-5 64-2 18 3 28 21 42 31-33 47-57 102-56 159a170 170 0 0086 149c6-1 13-7 10-14-5-11-17-16-25-25-33-30-52-75-50-121 1-29 11-58 24-84 12-25 25-52 47-71 9-8 22-13 33-7 20 8 42 14 63 13-35 27-55 70-64 113-9 44-7 91 12 133 15 37 45 68 81 85 32 16 67 24 101 27 18 1 36 2 53-4 4-1 6-7 2-9-13-6-28-4-42-6-45-5-92-16-127-45-34-28-54-71-60-114-5-47 7-97 34-137 11-15 26-31 45-34 14-1 25 12 31 23 6 12 16 24 29 28 20-10 40-26 43-50 2-17-6-34-14-49-15-25-40-43-69-48-20-5-41-2-61-6-22-21-54-24-83-24zm6 21c22 0 48 5 62 25 4 7 8 16 8 24-1 10-10 22-21 19-9-7-18-14-30-16-14-4-31-1-43 8-6 6-17 8-24 2-9-6-17-15-28-17-27-7-54 1-81 6a364 364 0 01157-51zm117 29c33 0 66 25 72 58 3 12 3 28-8 35-3 2-6 4-8 1-8-12-12-27-23-37-3-7-12-8-19-9-13-2-26 0-39-4 7-7 6-17 4-25l-3-16 24-3zm-372 92l46 2c18 2 33 16 34 34 1 7 1 17-6 21-6 0-12-4-18-6-21-8-46-14-67-3-6 2-11 9-17 5-10-4-18-14-30-12-30 1-56 21-77 42-16 17-30 37-43 56 0-39 17-80 49-104 26-22 61-30 94-34l35-1z")
      span A UI framework for Vue.js — designed to shine without the shadows.

      w-icon.ml1(size="1.2em" style="color: #ffc518") mdi mdi-white-balance-sunny

    .title4.mt6 Why, you ask?
    .w-flex.align-start
      w-icon.ml-1 wi-chevron-right
      | Because Wave UI gives you more flexibility, more control, and less friction—especially when
      | building complex UI designs. No more fighting the framework just to get what you want.

  title-link(h2) What is Wave UI?
  .title4.mt6 Like other UI frameworks, Wave UI is:
  w-list(:items="features1")

  .title4.mt8 But here’s where it stands apart:
  w-list(:items="features2")

  title-link(h2) CSS Philosophy
  .size--md
    | Wave UI is crafted with deliberate care for CSS — because we believe
    strong.ml1 your styles should work with your framework, not against it.
  p.size--md.
    It gives you more control, more flexibility, and none of the typical friction
    you get from bloated or opinionated styles.
  alert.my5(tip).
    Because inline styles and #[code !important] are a nightmare to override,
    Wave UI uses not-too-specific selectors and favors CSS styling
    over JavaScript-injected styles.

  .title4.mt6.
    Scoped, respectful, and side-effect free
  p.
    All Wave UI styles are strictly scoped to UI components or specific classes —
    #[strong never] to native DOM elements.#[br]
    That means your global styles remain untouched and entirely under your control.

  p.
    So if you want to restyle a button completely — from #[button default button]
    to #[w-button.mx1 great button] — Wave UI won’t stand in your way with layers of defaults.#[br]
    And if you choose not to use a Wave UI element at all? No problem. No side effects.

  .title4.mt6.
    We encourage your own style
  p.
    Use Wave UI’s CSS utility classes when helpful — but feel free to override styles with
    your own CSS rather than relying on dynamic JavaScript styles.

  p.
    And to keep your CSS clean and easy to override, always avoid the #[code !important] keyword.

  .w-divider.my12

  title-link(h2) What it doesn't do
  .title4.my4.
    Wave UI puts design freedom first — meaning fewer component options, but far greater styling flexibility.

  p.
    You won’t always find a component with every edge-case prop imaginable.
    Instead, you get a clean foundation that's easy to extend.#[br]#[br]

    That’s the trade-off: the more options a component has, the heavier and harder it is to override.#[br]#[br]

    #[strong Let’s be honest: the best UI — the one you’re building — is crafted with CSS! ;)]
</template>

<script>
export default {
  data: () => ({
    features1: [
      { label: '✅ &nbsp; Fully responsive' },
      { label: '✅ &nbsp; Accessibility compliant' },
      { label: '✅ &nbsp; Very flexible' },
      { label: '✅ &nbsp; Easy to use' }
    ],
    features2: [
      { label: '<span class="size--xl">🌊</span> &nbsp; <strong>Genuinely awesome!</strong>' },
      { label: '<span class="size--xl">🔧</span> &nbsp; Built for <strong>Vue 3</strong>, with <strong>Vue 2 compatibility</strong>' },
      { label: '<span class="size--xl">🪶</span> &nbsp; <strong>Zero dependencies</strong>' },
      { label: '<span class="size--xl">⚡</span> &nbsp; <strong>Lightweight and efficient</strong>' },
      { label: '<span class="size--xl">🧩</span> &nbsp; Offers <strong>powerful components</strong> — e.g. build a full navigation menu in one line' },
      { label: '<span class="size--xl">🧼</span> &nbsp; No unnecessary DOM wrappers cluttering your markup' },
      { label: '<span class="size--xl">🎨</span> &nbsp; <strong>Effortless to override</strong> with your own styles' },
      { label: '<span class="size--xl">🚫</span> &nbsp; Avoids the use of <code class="mx1">!important</code> for cleaner and more scalable CSS' },
      { label: '<span class="size--xl">📦</span> &nbsp; Smart <strong>CSS scoping</strong> — no side-effect' },
      { label: '<span class="size--xl">📐</span> &nbsp; Controls all the sizes and spacings from a single <code class="mx1">$base-font-size</code> Sass variable that you can override' },
      { label: '<span class="size--xl">🧠</span> &nbsp; Uses <strong>clear, consistent options</strong> and component naming' }
    ]
  })
}
</script>

<style lang="scss">
.top-alert {
  .title3 {position: relative;padding-left: 50px;}
  > .w-icon {display: none;}
  .i-chevron-right {margin-top: 2px;}

  .wave {
    position: absolute;
    left: 0;
    width: 1.8em;
    vertical-align: middle;
    fill: #497ca2;
    stroke: #497ca2;
    stroke-width: 6px;
  }
}

.main--why-wave-ui .w-list__item {
  align-items: center;
  display: flex;

  &-label {align-items: center;display: block;}
}
</style>
