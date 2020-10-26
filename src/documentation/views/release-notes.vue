<template lang="pug">
div
  title-link.mt4(h1) Release notes
  p.mt-6.mb10.grey-light2.text-italic
    | Follows the
    a.ml1(href="https://semver.org" target="_blank") Semantic versioning specs.

  ul.history
    //- li Added the #[code hide-error] option on all the form elements.
    li.minor
      strong.version v1.9.0
      ul
        li Added a new #[strong.code w-breadcrumbs] component.
        li Renamed #[strong.code w-button]'s #[code to] prop to #[code route].

    li.patch
      strong.version v1.8.1
      p.
        Added #[code .vue] extensions for Vite &amp; Rollup
        #[a(href="https://github.com/antoniandre/wave-ui/issues/2" target="_blank") #2].

    li.minor
      strong.version v1.8.0
      p Added a new #[strong.code w-rating] component.

    li.minor
      strong.version v1.7.0
      ul
        li Added a #[code push-content] prop to the #[strong.code w-drawer] component.
        li Added an #[code absolute] prop to the #[strong.code w-drawer] component.
        li.
          Renamed the #[code content-class] prop of the #[strong.code w-drawer] component
          to #[code drawer-class].
        li.
          Consistently renamed the wrapper elements of the #[strong.code w-badge],
          #[strong.code w-drawer], #[strong.code w-menu], #[strong.code w-slider] and
          #[strong.code w-tooltip] components to #[code="w-[component]-wrap"].

    li.minor
      strong.version v1.6.0
      ul
        li Added a #[code no-border] prop on the #[strong.code w-tag] component.
        li Improved the #[strong.code w-timeline] component.
        li.
          Renamed the #[strong.code w-icon]'s #[code rotate225], #[code rotate270], #[code rotate315]
          props to #[code rotate-45], #[code rotate-90], #[code rotate-135].
        li Added accessibility attributes to #[strong.code w-accordion] &amp; #[strong.code w-tabs].
        li.
          #[strong.code w-accordion], #[strong.code w-timeline] and #[strong.code w-list] scoped slots
          return the index of item starting from 1.
        li #[strong.code w-accordion]'s scoped slots return the expanded state of the item.
        li.
          Renamed all the #[code="item-[prop]"] props to #[code="item-[prop]-key"].
          E.g. #[code item-color] to #[code item-color-key].

    li.minor
      strong.version v1.5.0
      ul
        li Added a new #[strong.code w-timeline] component.
        li Fixed checkbox &amp; radio not emitting #[code input] event on Edge (known Edge bug).
        li.
          Fixed #[strong.code w-input], #[strong.code w-textarea] &amp; #[strong.code w-select]
          underline animations on Edge.

    li.patch
      strong.version v1.4.1
      p Fixed the dynamic breakpoints.

    li.minor
      strong.version v1.4.0
      p Added a new #[strong.code w-spinner] component.

    li.minor
      strong.version v1.3.0
      ul
        li Allow dynamic breakpoints customization.
        li Added the #[code no-unselect] option on #[strong.code w-select] &amp; #[strong.code w-list] components.
        li Added the #[code selection-color] option on #[strong.code w-select] &amp; #[strong.code w-list] components.
        li Layout improvement on #[strong.code w-select] component &amp; added the #[code menu-props] option.
        li Fixed unmounting #[strong.code w-menu] &amp; #[strong.code w-tabs].

    li.patch
      strong.version v1.2.2
      p Improve tabbing in a checklist with the #[strong.code w-list] component.

    li.patch
      strong.version v1.2.1
      ul
        li Emit a #[code close] event on #[strong.code w-alert] dismiss/hide.
        li Emit a #[code focus] event on #[strong.code w-accordion] item focus.
        li Added #[code item-title] &amp; #[code item-content] props on #[strong.code w-accordion].
        li Added #[code disabled] &amp; #[code readonly] props on #[strong.code w-checkboxes] &amp; #[strong.code w-radios].

    li.minor
      strong.version v1.2.0
      ul
        li.
          Removed all the #[code change] emitted events on all the UI components as redundant.
          You can use #[code input] instead.
        li Added an #[code inline] option on #[strong.code w-badge].

    li.major
      strong.version v1.0.0
      p First public release!
</template>

<style lang="scss">
.page--release-notes {
  .history {
    margin-left: 4px;

    > li {padding-left: 20px;}
    > li + li {margin-top: 20px;}
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
      bottom: -31px; // 11px top + 20px margin between each li.
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

    p {margin: 0.2em 0 0;line-height: 1.2;}
    code {padding: 0 4px;font-size: 1em;}
  }
}
</style>
