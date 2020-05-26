<template lang="pug">
div
  h1.headline.mt-4 Customization

  //- p Wave UI components are pixel-based to avoid flickering on half-pixel value.
  p Wave UI components rely on SCSS variables that you can easily override from Your SCSS file:
  pre.
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
