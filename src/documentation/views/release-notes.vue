<template lang="pug">
main
  title-link.mt4(h1) Release notes
  p.mt-6.mb10.grey-light2.text-italic
    | Follows the
    a.ml1(href="https://semver.org" target="_blank") Semantic versioning specs.

  ul.history
    //- Vue 3.
    //-----------------------------------------------------
    li.major.dashed
      strong.version v2.x (Vue 3 only)
      p.
        #[code wave-ui@next] should always be including the last version changes listed bellow
        (maintaining 2 different versions of the documentation and release notes is a lot of extra
        work!).#[br]
        If you find anything missing or not working as expected please open an issue precising the Vue and Wave UI versions! :)
      br
      br

    //- Vue 2.
    //-----------------------------------------------------
    //- li Added the #[code hide-error] option on all the form elements.

    li.patch
      strong.version v1.15.0
      p #[strong.code w-table] component:
      ul
        li Add the filter feature
        li Handle mobile layout with customizable breakpoint per table
        li Removed the deprecated #[code align] attribute on #[span.code &lt;th&gt;] and #[span.code &lt;td&gt;]

    li.patch
      strong.version v1.14.7
      ul
        li Allow #[code bg-color] on #[strong.code w-notification]. #[issue-link 15]
        li Fix hiding the #[strong.code w-notification] on timeout when initially showing. #[issue-link 15]

    li.patch
      strong.version v1.14.4
      p Allow triggering a particular field validation programmatically via #[code $refs.myField.validate()].

    li.patch
      strong.version v1.14.3
      p #[strong.code w-table] component:
      ul
        li Refactored the sorting feature
        li Add Natural sorting on numbers
        li Add the fixed headers option

    li.minor
      strong.version v1.14.0
      p Created a new #[strong.code w-table] component with basic functionality.

    li.patch
      strong.version v1.13.4
      ul
        li Improved and completed the #[strong.code w-image] component.
        li Allow a click handler on a #[strong.code w-button] that has a route.

    li.patch
      strong.version v1.13.3
      p Added a scrollbar on #[strong.code w-tabs] tabs row when needed. #[issue-link 11]

    li.patch
      strong.version v1.13.2
      p Fix the #[strong.code w-button] external link detection. #[issue-link 9]

    li.minor
      strong.version v1.13.0
      p Added a new #[strong.code w-image] component.

    li.patch
      strong.version v1.12.1
      p.
        Prevent browser scroll while opening a #[strong.code w-accordion] item when #[code expand-single] is set to #[code true].
        #[issue-link 3]

    li.minor
      strong.version v1.12.0
      p Added an optional #[code default] slot to the #[strong.code w-divider] component to display content in the middle of the divider.

    li.minor
      strong.version v1.11.0
      ul
        li Improved and finished the #[strong.code w-rating] component. Now validatable in #[strong.code w-form].
        li Added a #[code tag] prop to the #[strong.code w-drawer] component and default to #[code &lt;aside&gt;].

    li.minor
      strong.version v1.10.0
      ul
        li Improved the #[strong.code w-rating] component: represent decimal values, add ripple effect and #[code disabled] &amp; #[code readonly] props.
        li Allow detaching a #[strong.code w-select]'s menu to a custom DOM node via #[code menuProps.detachTo].
        li Emit an #[code item-select] event on #[strong.code w-list] item select (via click or keyboard #[kbd enter] key press).
        li Emit both #[code item-select] and #[code item-click] events from #[strong.code w-select]'s menu on item select (via click or keyboard #[kbd enter] key press) or item click.
        li Keep a #[strong.code w-select]'s menu open when #[code menuProps.hideOnMenuClick] is explicitly set to false.
        li Added a #[code no-position] prop to skip computing a #[strong.code w-menu] position (top &amp; left).
        li Re-mount a #[strong.code w-menu] &amp; #[strong.code w-tooltip] in DOM when the #[code detach-to] prop changes.
        li Use vertical padding instead of line height in the #[strong.code w-tag] component.

    li.patch
      strong.version v1.9.4
      ul
        li Renamed the #[strong.code w-icon] rotation props #[code rotate45a], #[code rotate90a], #[code rotate135a].


    li.patch
      strong.version v1.9.3
      ul
        li Allow #[strong.code w-tooltip] on a #[strong.code router-link] #[strong.code w-button].

    li.patch
      strong.version v1.9.2
      ul
        li Improved the #[strong.code w-rating] component.
        li Improved the #[strong.code w-select] component.
        li #[strong.code w-list] emits event on #[kbd enter] keydown.

    li.patch
      strong.version v1.9.1
      p Return original DOM event when applicable in multiple UI components event emissions.

    li.minor
      strong.version v1.9.0
      ul
        li Added a new #[strong.code w-breadcrumbs] component.
        li Renamed the #[strong.code w-button]'s #[code to] prop to #[code route].

    li.patch
      strong.version v1.8.1
      p.
        Added #[code .vue] extensions for Vite &amp; Rollup
        #[issue-link 2].

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
.main--release-notes {
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
    > li.dashed:after {border-left-style: dashed;}
    > li.patch:before {font-size: 7px;border-color: #ccc;}
    > li.minor:before {font-size: 11px;border-color: #999;}
    > li.major:before {font-size: 14px;border-color: #09c;}

    .version {font: bold 1.2rem monospace;}
    > li.patch .version {color: #999;}
    > li.minor .version {color: #555;}
    > li.major .version {color: #09c;font-size: 1.4rem;}
    > li:nth-child(2) .version:after {content: ' (Vue 2.x)';font-size: 1.2em;}

    ul {margin-left: -2px;}
    li li {padding-left: 20px;margin-top: 2px;}

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
