<template lang="pug">
div
  title-link.mt4(h1) Customization

  title-link(h2) Basic overrides
  //- p Wave UI components are pixel-based to avoid flickering on half-pixel value.
  p Wave UI components rely on SCSS variables that you can easily override from Your SCSS file:
  ssh-pre(language="scss" label="SCSS").
    // First import the Wave UI variables, then override what you want.
    @import '~wave-ui/src/scss/variables';

    $base-font-size: 14px;
    $base-increment: round($base-font-size / 4);
    $layout-padding: $base-increment * 4;
    $border-radius: 3px;
    $border: 1px solid rgba(0, 0, 0, 0.15);
    $drawer-max-size: 380px;
    $transition-duration: 0.25s;
    $box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                 0 2px 2px 0 rgba(0, 0, 0, 0.15),
                 0 1px 5px 0 rgba(0, 0, 0, 0.15);

  title-link(h2) Give Wave UI CSS more priority
  p It is also possible to control Wave UI CSS rules priorities by overriding the CSS base scope:
  ssh-pre(language="scss" label="SCSS") $css-scope: '.w-app';

  title-link(h2 slug="presets")
    | Presets
    w-tag.ml3(bg-color="red" color="white") Coming soon
  ssh-pre(language="js" label="Javascript").
    // Buttons example.
    {
      'w-button': { sm: true, outlined: true, round: true }
    }
</template>
