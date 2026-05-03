<template lang="pug">
main
  title-link.mt4(h1)
    w-icon.ml-1.mr4(size="1.2em") wi-wave
    | Why Wave UI?
  .title4.mt-2.size--lg.text-italic
    span.op4 UI framework for Vue.js designed to shine without the shadows.
    w-icon.ml1.op8(size="1.2em" style="color: #ffc518") mdi mdi-white-balance-sunny

  .top-card.ovh.mt8.size--lg
    .top-card__text.
      Because Wave UI gives you more flexibility, more control, and less friction—especially when
      building complex UI designs.<br>
      No more fighting the framework just to get what you want.

  section
    title-link(h2)
      span.primary What is Wave UI?

    .w-flex.gap3.mdd-wrap
      .w-card.px3.py4.no-grow.no-shrink
        w-icon wi-check
        h3.mt0.size--md.op7 Like other UI frameworks, Wave UI is
        ul.w-list.ml12.size--lg.lh0
          li.w-flex.gap2.align-center(v-for="(line, i) in features1" :key="i")
            w-icon.why-panel__check(color="success" size="1.4em") mdi mdi-check
            span {{ line }}

      .w-card.px4.py4
        w-icon.right mdi mdi-white-balance-sunny
        h3.mt0.size--md.op7 But here’s where it stands apart
        .why-list(role="list")
          article.mb2(v-for="(item, i) in features2" :key="i" role="listitem")
            w-icon.op2(aria-hidden="true" size="1.9em") {{ item.icon }}
            span(v-html="item.html")

  .w-card.pa6.bdrs4.mt12
    w-icon.right mdi mdi-heart-outline
    title-link.mt0(h2)
      span.primary CSS Philosophy
    .size--md
      | Wave UI is crafted with deliberate care for CSS — because we believe
      strong.mx1 your styles should work with your framework, not against it.
      | It gives you more control, more flexibility, and none of the typical friction
      | you get from bloated or opinionated styles.
    alert.my2(tip).
      Because inline styles and #[code !important] are a nightmare to override,
      Wave UI uses not-too-specific selectors and favors CSS styling
      over JavaScript-injected styles.

    .title4.mt4.
      Scoped, respectful, and side-effect free
    p.
      All Wave UI styles are strictly scoped to UI components or specific classes —
      #[strong never] to native DOM elements.#[br]
      That means your global styles remain untouched and entirely under your control.

    p.
      So if you want to restyle a button completely — from #[button default button]
      to #[w-button.mx1 great button] — Wave UI won’t stand in your way with layers of defaults.#[br]
      And if you choose not to use a Wave UI element at all? No problem. No side effects.

    .title4.mt4.
      We encourage your own style
    p.
      Use Wave UI’s CSS utility classes when helpful — but feel free to override styles with
      your own CSS rather than relying on dynamic JavaScript styles.

    p.
      And to keep your CSS clean and easy to override, always avoid the #[code !important] keyword.

  .w-card.pa6.bdrs4.mt12
    w-icon.right mdi mdi-close
    title-link.mt0(h2)
      span.primary What it doesn't do
    .title4.mb4.
      Wave UI puts design freedom first — meaning fewer component options, but far greater styling flexibility.

    p.
      You won’t always find a component with every edge-case prop imaginable.
      Instead, you get a clean foundation that's easy to extend.#[br]
      That’s the trade-off: the more options a component has, the heavier and harder it is to override.#[br]#[br]

      #[strong Let’s be honest: the best UI — the one you’re building — is crafted with CSS! ;)]
</template>

<script>
export default {
  data: () => ({
    features1: [
      'Fully responsive',
      'Accessibility compliant',
      'Very flexible',
      'Easy to use'
    ],
    features2: [
      { icon: 'wi-wave', html: '<strong>Genuinely awesome!</strong>' },
      {
        icon: 'mdi mdi-wrench',
        html: 'Built for <strong>Vue 3</strong>, (<strong>Vue 2 compatible</strong>) &bull; Nuxt 4, Nuxt 3, <strong>SSR</strong> compatible'
      },
      { icon: 'mdi mdi-feather', html: '<strong>Zero dependencies</strong>' },
      { icon: 'mdi mdi-lightning-bolt', html: '<strong>Lightweight and efficient</strong>' },
      {
        icon: 'mdi mdi-puzzle',
        html: 'Offers <strong>powerful components</strong> — e.g. build a full navigation menu in one line'
      },
      {
        icon: 'mdi mdi-broom',
        html: 'No unnecessary DOM wrappers cluttering your markup'
      },
      { icon: 'mdi mdi-palette', html: '<strong>Effortless to override</strong> with your own styles' },
      {
        icon: 'mdi mdi-close',
        html: 'Avoids the use of <code class="mx1 body">!important</code> at all costs for cleaner and more scalable CSS'
      },
      { icon: 'mdi mdi-package-variant-closed', html: 'Smart <strong>CSS scoping</strong> — no side-effect' },
      {
        icon: 'mdi mdi-ruler',
        html: 'Controls sizes and spacings from <code class="mx1 body">--w-base-font-size</code> / <code class="mx1 body">--w-base-increment</code> on <code class="mx1 body">:root</code>'
      },
      {
        icon: 'mdi mdi-brain',
        html: 'Uses <strong>clear, consistent options</strong> and component naming'
      }
    ]
  })
}
</script>

<style lang="scss">
// Smooth orbit for the title radial gradient (interpolates in supporting browsers).
@property --title-gx {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 82%;
}
@property --title-gy {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 36%;
}

.main--why-wave-ui {
  --box-color: #09c;
  --shimmer-color: var(--w-base-bg-color);
  --why-box-color: #afe0f825;

  :root[data-theme='dark'] & {
    --box-color: #fff;
    --shimmer-color: #000;
    --why-box-color: #ffffff06;
  }

  h1.title-link:first-child, h1.title-link i {
    --title-gx: 82%;
    --title-gy: 36%;
    display: inline-flex;
    padding: 0.3rem;
    margin-bottom: 0;
    letter-spacing: -0.08em;
    font: normal clamp(2.5rem, 5vw, 3.5rem) / 1.1 "title font", helvetica, arial;
    background: radial-gradient(circle at var(--title-gx) var(--title-gy), #497ca2, #88afb9, #19194b);
    background-clip: text;
    color: transparent;
    animation: title-gradient-orbit 5.5s ease-in-out infinite;
  }

  section {max-width: 1050px;}
  .top-card, .w-card {
    position: relative;
    z-index: 1;
    border-radius: 20px;
    background-color: color-mix(in srgb, var(--box-color) 8%, transparent);
    border: none;
    max-width: 1050px;
    overflow: hidden;
    align-self: flex-start;

    &:not([class^="px"]):not([class*=" px"]) {
      padding-left: 32px;
      padding-right: 32px;
    }
    &:not([class^="py"]):not([class*=" py"]) {
      padding-top: 32px;
      padding-bottom: 32px;
    }

    // &:nth-of-type(2) {--box-color: #fff957;}
    // &:nth-of-type(2) {--box-color: #00f49e;}
    &:nth-of-type(3) {--box-color: #ff97fcd1;}
    &:nth-of-type(4) {--box-color: #ff7640c7;}

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 70% 20%, rgba(#fff, 10%), color-mix(in srgb, var(--w-base-bg-color) 70%, transparent) 60%);
      border-radius: inherit;
      z-index: -1;
    }

    > .w-icon {
      position: absolute;
      top: 50%;
      left: 0;
      width: 0.9em;
      transform: translate(-20%, -50%) rotate(-12deg);
      font-size: 15rem;
      color: var(--box-color);
      opacity: 0.08;
      z-index: -1;
    }
    > .w-icon.right {
      left: auto;
      right: 0;
      top: 0;
      transform: translate(15%, -10%) rotate(12deg);
      font-size: 20rem;
    }

    h3.size--md {font-size: 1.15rem;letter-spacing: -0.02em;}
  }

  .top-card__text {
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
      100deg,
      var(--w-base-color) 25%,
      color-mix(in srgb, var(--shimmer-color) 60%, transparent) 50%,
      var(--w-base-color) 75%
    );
    background-size: 250% 100%;
    color: transparent;
    -webkit-text-fill-color: transparent;
    animation: top-card-text-shimmer 5s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .top-card__text {
      animation: none;
      background-image: none;
      color: inherit;
      -webkit-text-fill-color: inherit;
    }
  }

  .why-list {
    columns: 2;
    column-gap: 0.6rem;
  }

  article {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    margin: 0;
    padding: 0.6rem 0.7rem;
    border-radius: 8px;
    background-color: var(--why-box-color);
    backdrop-filter: blur(10px);

    .w-icon {
      flex-shrink: 0;
      font-size: 1.25rem;
      width: 1.75rem;
      text-align: center;

      &.wi-wave:before {font-weight: bold !important;}
    }

    span {
      font-size: clamp(1.1rem, 1.5vw, 1.2rem);
      line-height: 1.1;
    }
  }
}

// Wide horizontal ellipse: spotlight crosses most of the title width with a slight vertical arc (not a linear scrub).
@keyframes top-card-text-shimmer {
  0% {background-position: -30% 50%;}
  40%, 100% {background-position: -200% 50%;}
}

@keyframes title-gradient-orbit {
  0%, 100% {
    --title-gx: 82%;
    --title-gy: 36%;
  }
  12.5% {
    --title-gx: 73%;
    --title-gy: 40%;
  }
  25% {
    --title-gx: 50%;
    --title-gy: 42%;
  }
  37.5% {
    --title-gx: 27%;
    --title-gy: 40%;
  }
  50% {
    --title-gx: 18%;
    --title-gy: 36%;
  }
  62.5% {
    --title-gx: 27%;
    --title-gy: 32%;
  }
  75% {
    --title-gx: 50%;
    --title-gy: 30%;
  }
  87.5% {
    --title-gx: 73%;
    --title-gy: 32%;
  }
}
</style>
