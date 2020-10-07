<template lang="pug">
div
  title-link.mt4(h1) Release notes

  ul.history
    li.patch
      strong.version v1.2.1
      ul
        li Emit a #[code close] event on #[span.code w-alert] dismiss/hide.
        li Emit a #[code focus] event on #[span.code w-accordion] item focus.
        li Added #[code item-title] &amp; #[code item-content] props on #[span.code w-accordion].
        li Added #[code disabled] &amp; #[code readonly] props on #[span.code w-checkboxes] &amp; #[span.code w-radios].

    li.minor
      strong.version v1.2.0
      ul
        li.
          Removed all the #[code change] emitted events on all the UI components as redundant.
          You can use #[code input] instead.
        li Added an #[code inline] option on #[span.code w-badge].

    li.major
      strong.version v1.0.0
      p First public release!
</template>

<style lang="scss">
.page--release-notes {
  .history {
    margin-left: 4px;

    > li {padding-left: 20px;}
    > li + li {margin-top: 10px;}
    li {list-style-type: none;position: relative;}

    // Bullet.
    > li:before {
      content: '';
      position: absolute;
      top: 11px;
      left: 0;
      background-color: #fff;
      border-radius: 1em;
      border: 1px solid #ddd;
      width: 1em;
      height: 1em;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
    // Left border.
    > li:after {
      content: '';
      position: absolute;
      top: 11px;
      bottom: -21px; // 11px top + 10px margin between each li.
      left: -0.5px;
      border-left: 1px solid #ddd;
    }
    > li:last-child:after {display: none;}
    > li.patch:before {font-size: 7px;border-color: #ccc;}
    > li.minor:before {font-size: 11px;border-color: #999;}
    > li.major:before {font-size: 14px;border-color: #333;}

    .version {font: bold 1.2rem monospace;}
    > li.patch .version {color: #999;}
    > li.minor .version {color: #555;}
    > li.major .version {color: #000;}

    ul {margin-left: -2px;}
    li li {padding-left: 20px;}

    // Bullet.
    li li:before {
      content: '\e002';
      font-family: "wave-ui" !important;
      font-style: normal !important;
      font-weight: normal !important;
      font-variant: normal !important;
      text-transform: none !important;
      speak: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
        position: absolute;
      top: 3px;
      left: 0;
      width: 1em;
      height: 1em;
    }

    p {margin: 0.2em 0 1.5em;line-height: 1.2;}
    code {padding: 0 4px;font-size: 1em;}
  }
}
</style>
