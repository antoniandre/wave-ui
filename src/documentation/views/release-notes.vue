<template lang="pug">
main
  title-link.mt4(h1) Release notes
  p.mt-6.mb10.grey-light2.text-italic
    | Follows the
    a.ml1(href="https://semver.org" target="_blank") Semantic versioning specs.

  ul.history
    li.dashed
      w-flex.mt8(align-center)
        w-tag.pl3.pr2.text-bold(round bg-color="vue-green" color="white")
          | VUE 3
          w-icon.ml1(md) wi-chevron-down
        .w-divider.grow.mr8.vue-green--bg

      small.grey.mt1
        w-icon.ml-1.mr1.grey wi-chevron-right
        | #[span.code.inherit npm i wave-ui]

    //- Vue 3.
    //-----------------------------------------------------

    //- #[strong Form elements]: li Added the #[code hide-error] option on all the form elements.
    li.minor
      strong.version v1.39.0
      ul
        li #[strong global CSS]: Append the Wave UI styles #[strong before] all the other styles, so your styles can override Wave UI's even more easily.

    li.minor
      strong.version v1.38.0
      ul
        li
          strong.code w-table:
          ul
            li added a #[code footer] slot &amp; #[code fixed-footer] option. #[span.new]
        li
          strong.code w-accordion, w-button, w-list, w-rating, w-tabs, w-tag:
          ul
            li remove the tap highlight color on IOS.
        li
          strong.code w-tabs:
          ul
            li automatically scroll active tab into view.

    li.minor
      strong.version v1.37.0
      ul
        li #[strong.code w-list]: Added a new #[code item-class-key] option. #[span.new]

    li.patch
      strong.version v1.36.4
      ul
        li #[strong layout classes]: remove the default centering on the #[code shrink] class.

    li.patch
      strong.version v1.36.3
      ul
        li #[strong.code w-textarea]: fix an issue with the auto-resize after value update. #[issue-link 88]

    li.minor
      strong.version v2.36.0
      ul
        li
          strong.code w-accordion
          ul
            li Added a new #[code duration] option. #[span.new]
            li Fire #[code item-collapsed] when done collapsing. #[span.new]
        li
          strong.code w-form
          ul
            li Added a new #[code validation-color] option. #[span.new]
        li
          strong.primary All the form elements
          ul
            li Added a new #[code label-color] option. #[span.new]
        li
          strong.code w-input
          ul
            li Added a new #[code label-color] option. #[span.new]
        li
          strong.code w-transition-expand
          ul
            li Remove useless props binding.
        li
          strong.code w-slider
          ul
            li Outline the thumb on :focus, :active and while dragging.
            li Prevent focus when disabled or readonly.
        li
          strong.code w-dialog &amp; w-overlay
          ul
            li Emit a #[code @before-close] event before closing (and keep #[code @before-close] when done closing). #[span.new]
        li
          strong.code w-drawer
          ul
            li Emit a #[code @before-close] event before closing (and keep #[code @before-close] when done closing). #[span.new]
            li When using #[code push-content], default to a transparent overlay that you can override.
            li When using #[code push-content], default to a width of 200px that you can override.

        li
          strong.code w-menu &amp; w-tooltip
          ul
            li
              | Refactored components to prevent the activator from disappearing before the end of a
              | transitioning container like #[strong.code.black w-accordion], #[strong.code w-tabs],
              | #[strong.code w-drawer] and #[strong.code w-dialog], due to the fact that Vue fires
              | the unmounted hook on transition before-leave.#[br]
              a.ml1(href="https://github.com/vuejs/core/issues/994")
                | Unmounted hooks should run with afterLeave (#994)
                w-icon.ml1 mdi mdi-open-in-new
            li.
              Default the #[code appendTo] to the open #[strong.code.black w-dialog],
              #[strong.code w-drawer] or #[strong.code w-menu].

            li Removed the deprecated #[code detachTo] prop (use #[code appendTo] instead).
        li
          strong.code w-select
          ul
            li.
              Default the #[code appendTo] to the open #[strong.code.black w-dialog],
              #[strong.code w-drawer] or #[strong.code w-menu].

    li.minor
      strong.version v2.35.0
      ul
        li #[strong.code w-switch]: added new #[code track] and #[code thumb] slots. #[span.new]

    li.minor
      strong.version v2.34.0
      ul
        li #[strong.code w-tabs]: added a new #[code pill-slider] option. #[span.new]

    li.minor
      strong.version v2.33.0
      ul
        li
          strong.code w-menu &amp; w-tooltip
          ul
            li Always compute coordinates of the activator element and not from #[code e.target] which may be a child of the activator.
        li
          strong.code w-menu
          ul
            li Accept external activators as DOM node selector string, or Vue ref, or DOM node.
            li Allow simultaneous use of the #[code overlay] and #[code show-on-hover] options.
            li Forward any event listener to the menu element (so user can listen to #[code mousedown] for instance).
        li
          strong.code w-toolbar
          ul
            li New #[code vertical] option. #[span.new]
        li
          strong.code w-divider
          ul
            li Always stretch the divider, regardless of orientation (also when horizontal).
        li
          strong.code w-dialog &amp; w-overlay
          ul
            li Emit a #[code closed] event after the component is fully closed (after animation end).
        li
          strong.code w-dialog
          ul
            li Fix an issue where a w-select would disappear on dialog close. #[issue-link 82]
        li
          strong.code w-select
          ul
            li Fix a floating label jump on item unselect.

    li.patch
      strong.version v2.32.3
      ul
        li #[strong.code w-tabs]: Fix keeping tab contents alive in Vue 3. #[issue-link 83]

    li.patch
      strong.version v2.32.1
      ul
        li #[strong.code w-icon]: Fix a reactivity issue in Vue 3. #[issue-link 81]

    li.minor
      strong.version v2.32.0
      ul
        li #[strong.code w-grid]: Added a new CSS-grid-based layout component. #[span.new]
        li #[strong.code w-flex]: Refactored the gap option, now using the CSS #[code gap] property.

    li.patch
      strong.version v2.31.2
      ul
        li #[strong.code w-icon]: Fix ligature icon fonts in Vue 3.

    li.patch
      strong.version v2.31.1
      ul
        li #[strong.code w-spinner]: Fix the toggling using v-model or modelValue on Vue 3.

    li.major.dashed
      strong.version v2.0
      alert(warning)
        | From this version onwards, Vue 3 must be installed:
        br
        a.ml1(href="https://blog.vuejs.org/posts/vue-3-as-the-new-default.html" target="_blank")
          | Vue 3 is the new default
          w-icon.ml1 mdi mdi-open-in-new
        | ,
        span.ml1.text-bold and so is Wave UI 2.0.

      br
      br
      br
      w-flex.mt8(align-center)
        w-tag.pl3.pr2.text-bold(round bg-color="vue-green" color="white")
          | VUE 2
          w-icon.ml1(md) wi-chevron-down
        .w-divider.grow.mr8.vue-green--bg

      small.grey.mt1
        w-icon.ml-1.mr1.grey wi-chevron-right
        | #[span.code.inherit npm i wave-ui@legacy]

    //- Vue 2.
    //-----------------------------------------------------
    li.patch
      strong.version v1.56.1
      ul
        li #[strong w-notification]: only add a white background color when none is set, or for the different types when not #[code plain].

    li.minor
      strong.version v1.56.0
      ul
        li #[strong global CSS]: Append the Wave UI styles #[strong before] all the other styles, so your styles can override Wave UI's even more easily.

    li.minor
      strong.version v1.55.0
      ul
        li
          strong.code w-table:
          ul
            li added a #[code footer] slot &amp; #[code fixed-footer] option. #[span.new]
        li
          strong.code w-accordion, w-button, w-list, w-rating, w-tabs, w-tag:
          ul
            li remove the tap highlight color on IOS.
        li
          strong.code w-tabs:
          ul
            li automatically scroll active tab into view.

    li.minor
      strong.version v1.54.0
      ul
        li #[strong.code w-list]: Added a new #[code item-class-key] option. #[span.new]

    li.patch
      strong.version v1.53.1
      ul
        li #[strong.code w-textarea]: fix an issue with the auto-resize after value update. #[issue-link 88]

    li.minor
      strong.version v1.53.0
      ul
        li
          strong.code w-accordion
          ul
            li Added a new #[code duration] option. #[span.new]
            li Fire #[code item-collapsed] when done collapsing. #[span.new]
        li
          strong.code w-form
          ul
            li Added a new #[code validation-color] option. #[span.new]
        li
          strong.primary All the form elements
          ul
            li Added a new #[code label-color] option. #[span.new]
        li
          strong.code w-input
          ul
            li Added a new #[code label-color] option. #[span.new]
        li
          strong.code w-transition-expand
          ul
            li Remove useless props binding.
        li
          strong.code w-slider
          ul
            li Outline the thumb on :focus, :active and while dragging.
            li Prevent focus when disabled or readonly.
        li
          strong.code w-dialog &amp; w-overlay
          ul
            li Emit a #[code @before-close] event before closing (and keep #[code @before-close] when done closing). #[span.new]
        li
          strong.code w-drawer
          ul
            li Emit a #[code @before-close] event before closing (and keep #[code @before-close] when done closing). #[span.new]
            li When using #[code push-content], default to a transparent overlay that you can override.
            li When using #[code push-content], default to a width of 200px that you can override.
        li
          strong.code w-menu &amp; w-tooltip
          ul
            li.
              Default the #[code appendTo] to the open #[strong.code.black w-dialog],
              #[strong.code w-drawer] or #[strong.code w-menu].

            li Removed the deprecated #[code detachTo] prop (use #[code appendTo] instead).
        li
          strong.code w-select
          ul
            li.
              Default the #[code appendTo] to the open #[strong.code.black w-dialog],
              #[strong.code w-drawer] or #[strong.code w-menu].

    li.minor
      strong.version v1.52.0
      ul
        li #[strong.code w-toolbar]: new #[code vertical] option.
        li #[strong.code w-divider]: always stretch the divider, regardless of orientation (also when horizontal).

    li.minor
      strong.version v1.51.0
      ul
        li
          | #[strong.code w-menu &amp; w-tooltip]
          ul
            li Always compute coordinates of the activator element and not from #[code e.target] which may be a child of the activator.

        li
          strong.code w-menu
          ul
            li Accept external activators as DOM node selector string, or Vue ref, or DOM node.
            li Allow simultaneous use of the #[code overlay] and #[code show-on-hover] options.
            li Forward any event listener to the menu element (so user can listen to #[code mousedown] for instance).

        li
          | #[strong.code w-dialog &amp; w-overlay]
          ul
            li Emit a #[code closed] event after the component is fully closed (after animation end).

        li
          | #[strong.code w-select]
          ul
            li Fix a floating label jump on item unselect.
            li Fix the select list disappearing too soon on dialog close when placed in a #[strong.code.black w-dialog]. #[issue-link 82]

    li.minor
      strong.version v1.50.0
      ul
        li #[strong.code w-grid]: Added a new CSS-grid-based layout component. #[span.new]
        li #[strong.code w-flex]: Refactored the gap option, now using the CSS #[code gap] property.

    li.patch
      strong.version v1.49.2
      ul
        li #[strong.code w-input]: Fix a regression related to #[issue-link 77].

    li.patch
      strong.version v1.49.1
      ul
        li #[strong.code w-select]: Prevent a console warning before hydration. #[issue-link 79]

    li.minor
      strong.version v1.49.0
      ul
        li
          strong.code w-notification-manager
          ul
            li Allow HTML tags in the notification message.
        li
          strong.code w-menu &amp; w-tooltip
          ul
            li Added a #[code activator] option to define a separate activator. #[span.new]
            li Added a #[code delay] option to open the menu/tooltip with a delay. #[span.new]

    li.minor
      strong.version v1.48.0
      ul
        li
          strong.code w-input type="file"
          ul
            li Support files without extensions.
            li Add options to disable the preview, or customize the icon. #[span.new]
            li Expose the overall progress for multiple files.
            li Add option to display a progress bar indicating the actual upload progress. #[span.new]

    li.minor
      strong.version v1.47.0
      ul
        li
          strong.code w-confirm
          ul
            li.red.text-bold.
              The #[code cancel-button] &amp; #[code confirm-button] props are renamed
              to #[code cancel] &amp; #[code confirm] and can also accept a string as a button label.
            li.red.text-bold.
              The #[code no-cancel] prop is removed and can be replaced with #[code :cancel="false"].
            li New #[code question] prop in addition to the slot. #[span.new]

    li.minor
      strong.version v1.46.0
      ul
        li
          strong.code w-menu
          ul
            li.red.text-bold Deprecated the #[code detach-to] prop and replaced with #[code append-to].
            li.
              Fix the #[code align-left] &amp; #[code align-right] alignments when using the #[code arrow]
              prop and the default bottom position (without the prop).
        li
          strong.code w-tooltip
          ul
            li.red.text-bold Deprecated the #[code detach-to] prop and replaced with #[code append-to].
            li
              strong.
                Now appended to the #[span.code.text-bold w-app] by default - this may impact the
                z-index in your app.
                Use #[code append-to] to move it to another DOM element.
            li
              strong The tooltip is now completely removed from the DOM when hidden.
            li.
              Added more options: #[code persistent], #[code no-position], #[code align-top],
              #[code align-bottom], #[code align-left], #[code align-right]. #[span.new]
        li
          strong.code w-tag
          ul
            li Added a line-height for better vertical centering.

    li.patch
      strong.version v1.45.15
      ul
        li #[strong.code w-input]: Emit #[code input] &amp; #[code change] events on file input.

    li.patch
      strong.version v1.45.14
      ul
        li #[strong.code w-tooltip]: Fix DOM related rendering issues on SSR. #[issue-link 78]

    li.patch
      strong.version v1.45.13
      ul
        li.
          #[strong.code w-input]: Also detect browser autofill on page load to raise the label up
          if any (fixes the overlapping issue previously happening on Chrome). #[issue-link 77]

    li.patch
      strong.version v1.45.7
      ul
        li #[strong.code w-accordion]: Fix the expand arrow rotation state in nested accordion. #[issue-link 76]

    li.patch
      strong.version v1.45.6
      ul
        li #[strong.code w-flex]: Added the #[code justify-space-evenly] prop. #[span.new]

    li.patch
      strong.version v1.45.5
      ul
        li #[strong.code w-input]: Fix floating label when value is #[code 0]. #[issue-link 77]

    li.patch
      strong.version v1.45.3
      ul
        li.
          #[strong.code w-tooltip]: Fix the tooltip #[code color] when used with a #[code bg-color]
          &amp; minor improvements.

    li.patch
      strong.version v1.45.2
      ul
        li #[strong.code CSS]: Removed the useless styles previously applied on the &lt;footer&gt; tag.
        li.
          #[strong.code SCSS]: Fix error related to the new SCSS mixins file.#[br]The mixins are now
          imported from the variables files. #[issue-link 60]

    li.patch
      strong.version v1.45.1
      ul
        li #[strong.code w-table]: Fix &amp; improve the expandable-rows feature.

    li.minor
      strong.version v1.45.0
      ul
        li
          strong.code w-table
          ul
            li Emit a #[code column-resize] Event on column resize.
            li Fix: don't display the table rows or the no-data message while loading.

    li.patch
      strong.version v1.44.1
      ul
        li.
          #[strong.code Notification manager]: Remove the horizontal scrollbar while the
          notifications appear or disappear.

    li.minor
      strong.version v1.44.0
      ul
        li #[strong.code w-app]: Added a bunch of options for CSS classes. #[span.new]

    li.minor
      strong.version v1.43.0
      ul
        li #[strong.code w-confirm]: New component. #[span.new]
        li #[strong.code w-card]: Allow defining title &amp; content classes as a string, array or object.
        li #[strong.code w-tooltip]: Allow defining a tooltip class as a string, array or object via #[code tooltip-class].
      ul
        li
          strong.code w-menu
          ul
            li Allow defining a menu class as a string, array or object via #[code menu-class].
            li Allow defining the #[strong.code w-card] title &amp; content classes as a string, array or object.
            li Allow defining an overlay classes as a string, array or object via #[code overlay-class].
            li Added an #[code arrow] option to display a small triangle on the edge of the menu. #[span.new]

    li.patch
      strong.version v1.42.2
      ul
        li
          strong.code w-menu:
          strong Completely unmount the menu from the DOM when it is not open.

    li.patch
      strong.version v1.42.1
      ul
        li #[strong.code w-table]: Allow column resizing to a lower width than the cell text content.

    li.minor
      strong.version v1.42.0
      ul
        li.
          #[strong.code CSS]: Added individual border CSS classes:
          #[code .bdl1], #[code .bdr1], #[code .bdt1], #[code .bdb1], #[code .bdx1], #[code .bdy1]. #[span.new]

    li.patch
      strong.version v1.41.1
      ul
        li.
          #[strong.code w-badge]: Allow external event listeners binding.
          #[strong.code w-badge]: Set a line height for better text alignment while transitioning.
          #[strong.code CSS]: Slightly slow down the default transitions speed (from 0.2s to 0.25s) and slightly increase the twist transition angle.

    li.minor
      strong.version v1.41.0
      ul
        li.
          #[strong.code w-menu]: Allow passing down #[strong.code w-overlay] props &amp; added option for overlay class. #[span.new]
          #[strong.code w-switch]: Allow external event listeners binding.

    li.minor
      strong.version v1.40.0
      ul
        li.
          #[strong.code w-tabs]: Now maintain the state of tabs contents when switching
          (keep-alive). #[issue-link 65]

    li.minor
      strong.version v1.39.0
      ul
        li #[strong.code w-input]: Support input type file &amp; display images preview. #[span.new]
        li.
          #[strong CSS]: Allow disabling the CSS layout classes via the #[code $use-layout-classes]
          SCSS variable. #[issue-link 61] #[span.new]

    li.minor
      strong.version v1.38.0
      ul
        li #[strong.code w-table]: Added a column resizing option. #[span.new]

    li.minor
      strong.version v1.37.0
      strong.mt2.d-block UI components
      ul
        li #[strong.code w-menu]: When using #[code show-on-hover], keep menu open when hovering the menu from activator and vice-versa.
        li #[strong.code w-menu]: Support #[code hide-on-menu-click] when using #[code show-on-hover].
        li #[strong.code w-list]: Added a new #[code item-route-key] option. #[span.new]
        li.
          #[strong Form elements:]
          Support #[code tabindex] on form elements (#[strong.code w-input],
          #[strong.code w-textarea], #[strong.code w-select], #[strong.code w-checkbox],
          #[strong.code w-radio]#[strong.code w-switch]).

      strong.mt2.d-block Global
      ul
        li Added a new #[code v-scroll] directive. #[span.new]
        li Added new #[code .text-nowrap] CSS helper class. #[span.new]
        li Added new #[code .text-capitalize] CSS helper class. #[span.new]

    li.patch
      strong.version v1.36.1
      ul
        li Fix the notification manager on Nuxt. #[issue-link 60]

    li.minor
      strong.version v1.36.0
      ul
        li #[strong.code Notification manager]: Add new #[code align] (left or right) &amp; #[code transition] options. #[span.new]
        li Made the global config reactive.

    li.minor
      strong.version v1.35.0
      ul
        li #[strong.code Notification manager]: New #[strong.code $waveui.notify()] method to trigger a notification. #[span.new]
        li.
          #[strong.code w-select]: Fix a selection bug when clicking the select to open and navigating with keyboard arrows.
        li.
          #[strong.code w-textarea]: Improve the auto height computation (also count natural line wraps), and also apply on mounted.

    li.patch
      strong.version v1.34.2
      ul
        li.
          #[strong.code w-select]: Re-apply the selection from v-model when the items array changes.
          (Useful for asynchronous items)
        li.
          #[strong.code w-switch]: Fix the switch style when the label is on the left. #[issue-link 59]

    li.minor
      strong.version v1.34.0
      ul
        li #[strong.code w-select]: Add a new #[code="item.[x]"] slot to allow specific item override. #[span.new]

    li.minor
      strong.version v1.33.0
      ul
        li
          p #[strong.code w-select]: Added the #[code item-color-key] option. #[span.new]
        li
          p #[strong.code w-menu]: Fixed the #[code hide-on-menu-click] option.
        li
          p #[strong.code w-radios &amp; w-checkboxes]
          ul
            li.
              Improve the #[code item] scoped slots: now returns the #[strong original] #[code item],
              the #[code index], and a #[code checked] boolean.
            li Add a new #[code="item.[x]"] scoped slot to override 1 particular item only. #[span.new]

    li.patch
      strong.version v1.32.7
      ul
        li #[strong.code w-select]: Close an open select list on click of the main input or side icon.
        li #[strong.code w-form]: Allow resetting a disabled or readonly form.
        li #[strong.code w-form]: Disable field validation on a readonly field.
        li #[strong.code w-form]: Remove readonly fields interaction: no label moving or underline, no validation on blur.

    li.patch
      strong.version v1.32.5
      ul
        li #[strong.code w-tag]: Fix border radius on focused clickable round tag.

    li.patch
      strong.version v1.32.4
      ul
        li #[strong.code w-menu]: Allow closing menu on activator click.

    li.patch
      strong.version v1.32.3
      ul
        li #[strong.code w-input]: add a #[code loading] option to display while performing an async validation. #[issue-link 55] #[span.new]
        li #[strong.code w-rating]: also accepts a string as the current value.

    li.minor
      strong.version v1.32.0
      ul
        li #[strong.code w-form]: Support async form element validators. #[issue-link 55] #[span.new]
        li #[strong.code w-icon]: Added option to spin icons anticlockwise. #[span.new]

    li.minor
      strong.version v1.31.0
      ul
        li #[strong.code w-table]: Added support for programmatic row selection. #[issue-link 50] #[span.new]

    li.minor
      strong.version v1.30.0
      ul
        li
          | Added a new #[code css] object in the Wave UI configuration: #[span.new]
          ul
            li
              | Control the generated CSS to add/remove breakpoint-specific css layout classes.
              | Read more in
              router-link.ml1(to="/layout--flex") Layout &gt; flex
              | .
            li
              | Allow 12-column or any custom grid (like 24-column).
              | Read more in
              router-link.ml1(to="/layout--grid") Layout &gt; grid
              | .
            li.red
              strong Custom color shades: disableColorShades is now replaced with css.colorShades
        li Added the #[code show] &amp; #[code hide] CSS layout classes #[span.new]
        li
          | Added #[code="lh[x]"] classes to control the text line-height
          | Read more in
          router-link.ml1(to="/typography") Typography
          | . #[span.new]

    li.minor
      strong.version v1.29.0
      p #[strong.code w-table]
      ul
        li.red
          strong The #[code item] slot now designates the &lt;tr&gt; and #[code item-cell] each table cell.
        li Allow full customization of the &lt;tr&gt; using the #[code item] slot.
        li Allow &lt;tr&gt; bg-color overrides.
        li Emit a #[code row-click] event on &lt;tr&gt; click.

    li.patch
      strong.version v1.28.1
      ul
        li.
          #[strong.code w-tabs]: Fix the tabs bar center and right alignment after adding the
          #[code tabs-bar-extra] slot.

    li.minor
      strong.version v1.28.0
      ul
        li Emit #[code item-expand] on #[strong.code w-accordion] item expand/collapse.

    li.patch
      strong.version v1.27.3
      ul
        li Improve the #[strong.code w-tooltip] component and emit events on tooltip open and close.

    li.minor
      strong.version v1.27.0
      p #[strong.code w-table]
      ul
        li Allow multiple rows selection &amp; add the #[code force-selection] option. #[issue-link 45]
        li The rows selection now allows multiple rows by default (previously only one).

    li.minor
      strong.version v1.26.0
      ul
        li Add the #[code disabled] &amp; #[code readonly] options on #[strong.code w-form]. #[issue-link 38] #[span.new]
        li Improve the #[strong.code w-form] component (props reactivity, UI consistency in form elements).

    li.patch
      strong.version v1.25.2
      ul
        li #[strong.code w-form]: Keep the form valid after validation if the validators is an empty array. #[issue-link 46]

    li.patch
      strong.version v1.25.1
      ul
        li #[strong.code w-form]: Validate the form before emitting the #[code @submit] event. #[issue-link 40]

    li.minor
      strong.version v1.25.0
      ul
        li.
          Added a #[code tabs-bar-extra] slot to allow adding an extra element on the
          #[strong.code w-tabs] bar. #[span.new]

    li.minor
      strong.version v1.24.0
      ul
        li.
          Added #[router-link(to="/shadows-borders-radii") shadows, borders &amp; border radii] CSS classes. #[span.new]

    li.patch
      strong.version v1.23.1
      ul
        li Fix the #[strong.code w-tabs] initial state via #[code v-model].

    li.minor
      strong.version v1.23.0
      ul
        li Complete the #[em à la carte] feature, allowing tree-shaking. #[span.new]

    li.patch
      strong.version v1.22.1
      ul
        li #[strong.code w-dialog]: Added a #[code dialog-class] option on the component. #[span.new]

    li.minor
      strong.version v1.22.0
      ul
        li Removed the useless full height on html &amp; body.
        li Added an #[code .align-self-stretch] helper class. #[span.new]
        li Added the #[code color] &amp; #[code bg-color] options on the #[strong.code w-dialog] component. #[span.new]
        li Trim the #[strong.code w-icon] icon name to work with ligatures.

    li.minor
      strong.version v1.21.0
      ul
        li Added the #[code item-title-key] &amp; #[code item-content-key] options on #[strong.code w-tabs] component and remove internal #[code _active] prop. #[span.new]
        li #[strong.code w-select]: Allow selecting items using the keyboard arrows when the select list is closed. #[issue-link 25]
        li #[strong.code w-accordion]: Return original accordion item in scoped slots.
        li #[strong.code w-tabs]: Return original tab item in scoped slots.
        li #[strong.code w-tabs]: When deleting a tab, activate the previous one.
        li.text-bold.red #[strong.code w-tabs]: Now only accepts a numeric #[code model-value]/#[code v-model] instead of an array of boolean.

    li.patch
      strong.version v1.20.6
      p Fix #[strong.code w-button] external links.

    li.patch
      strong.version v1.20.5
      ul
        li Added a #[code row] class on #[strong.code w-flex] to reset the flex direction to row. #[span.new]
        li Improve pushable-content #[strong.code w-drawer] default styles.
        li Fix: #[strong.code w-dialog] accepts a width as a string. #[issue-link 22]

    li.minor
      strong.version v1.20.0
      ul
        li
          strong WIP: started the #[em à la carte] feature.
        li #[strong.code w-tabs]: Move the custom #[code content-class] CSS class to the tab item content element.

    li.minor
      strong.version v1.19.0
      p Added the row selection feature to the #[strong.code w-table]. #[span.new]

    li.minor
      strong.version v1.18.0
      p Added an image option to the #[strong.code w-card] component. #[span.new]

    li.minor
      strong.version v1.17.0
      ul
        li Allow adding content on top of #[strong.code w-image]. #[span.new]
        li Fix #[strong.code w-image] #[code tag] option not accepting a #[code div] tag.

    li.minor
      strong.version v1.16.0
      ul
        li Support Nuxt. #[span.new]
        li Added more slots in #[strong.code w-table] component. #[span.new]

    li.patch
      strong.version v1.15.0
      p #[strong.code w-table]
      ul
        li Added the filter feature #[span.new]
        li Handle mobile layout with customizable breakpoint per table #[span.new]
        li Removed the deprecated #[code align] attribute on #[span.code &lt;th&gt;] and #[span.code &lt;td&gt;]

    li.patch
      strong.version v1.14.7
      ul
        li Allow #[code bg-color] on #[strong.code w-notification]. #[issue-link 15] #[span.new]
        li Fix hiding the #[strong.code w-notification] on timeout when initially showing. #[issue-link 15]

    li.patch
      strong.version v1.14.4
      p Allow triggering a particular field validation programmatically via #[code $refs.myField.validate()].

    li.patch
      strong.version v1.14.3
      p #[strong.code w-table] component:
      ul
        li Refactored the sorting feature
        li Added Natural sorting on numbers
        li Added the #[code fixed-headers] option #[span.new]

    li.minor
      strong.version v1.14.0
      p Created a new #[strong.code w-table] component with basic functionalities. #[span.new]

    li.patch
      strong.version v1.13.4
      ul
        li Improved and completed the #[strong.code w-image] component. #[span.new]
        li Allow a click handler on a #[strong.code w-button] that has a route.

    li.patch
      strong.version v1.13.3
      p Added a scrollbar on #[strong.code w-tabs] tabs row when needed. #[issue-link 11]

    li.patch
      strong.version v1.13.2
      p Fix the #[strong.code w-button] external link detection. #[issue-link 9]

    li.minor
      strong.version v1.13.0
      p Added a new #[strong.code w-image] component. #[span.new]

    li.patch
      strong.version v1.12.1
      p.
        Prevent browser scroll while opening a #[strong.code w-accordion] item when #[code expand-single] is set to #[code true].
        #[issue-link 3]

    li.minor
      strong.version v1.12.0
      p Added an optional #[code default] slot to the #[strong.code w-divider] component to display content in the middle of the divider. #[span.new]

    li.minor
      strong.version v1.11.0
      ul
        li Improved and finished the #[strong.code w-rating] component. Now validatable in #[strong.code w-form]. #[span.new]
        li Added a #[code tag] prop to the #[strong.code w-drawer] component and default to #[code &lt;aside&gt;]. #[span.new]

    li.minor
      strong.version v1.10.0
      ul
        li Improved the #[strong.code w-rating] component: represent decimal values, add ripple effect and #[code disabled] &amp; #[code readonly] props.
        li Allow detaching a #[strong.code w-select]'s menu to a custom DOM node via #[code menuProps.detachTo].
        li Emit an #[code item-select] event on #[strong.code w-list] item select (via click or keyboard #[kbd enter] key press).
        li Emit both #[code item-select] and #[code item-click] events from #[strong.code w-select]'s menu on item select (via click or keyboard #[kbd enter] key press) or item click.
        li Keep a #[strong.code w-select]'s menu open when #[code menuProps.hideOnMenuClick] is explicitly set to false.
        li Added a #[code no-position] prop to skip computing a #[strong.code w-menu] position (top &amp; left). #[span.new]
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
        li Added a new #[strong.code w-breadcrumbs] component. #[span.new]
        li Renamed the #[strong.code w-button]'s #[code to] prop to #[code route].

    li.patch
      strong.version v1.8.1
      p.
        Added #[code .vue] extensions for Vite &amp; Rollup
        #[issue-link 2].

    li.minor
      strong.version v1.8.0
      p Added a new #[strong.code w-rating] component. #[span.new]

    li.minor
      strong.version v1.7.0
      ul
        li Added a #[code push-content] prop to the #[strong.code w-drawer] component. #[span.new]
        li Added an #[code absolute] prop to the #[strong.code w-drawer] component. #[span.new]
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
        li Added a #[code no-border] prop on the #[strong.code w-tag] component. #[span.new]
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
        li Added a new #[strong.code w-timeline] component. #[span.new]
        li Fixed checkbox &amp; radio not emitting #[code input] event on Edge (known Edge bug).
        li.
          Fixed #[strong.code w-input], #[strong.code w-textarea] &amp; #[strong.code w-select]
          underline animations on Edge.

    li.patch
      strong.version v1.4.1
      p Fixed the dynamic breakpoints.

    li.minor
      strong.version v1.4.0
      p Added a new #[strong.code w-spinner] component. #[span.new]

    li.minor
      strong.version v1.3.0
      ul
        li Allow dynamic breakpoints customization.
        li Added the #[code no-unselect] option on #[strong.code w-select] &amp; #[strong.code w-list] components. #[span.new]
        li Added the #[code selection-color] option on #[strong.code w-select] &amp; #[strong.code w-list] components. #[span.new]
        li Layout improvement on #[strong.code w-select] component &amp; added the #[code menu-props] option. #[span.new]
        li Fixed unmounting #[strong.code w-menu] &amp; #[strong.code w-tabs].

    li.patch
      strong.version v1.2.2
      p Improve tabbing in a checklist with the #[strong.code w-list] component.

    li.patch
      strong.version v1.2.1
      ul
        li Emit a #[code close] event on #[strong.code w-alert] dismiss/hide.
        li Emit a #[code focus] event on #[strong.code w-accordion] item focus.
        li Added #[code item-title] &amp; #[code item-content] props on #[strong.code w-accordion]. #[span.new]
        li Added #[code disabled] &amp; #[code readonly] props on #[strong.code w-checkboxes] &amp; #[strong.code w-radios]. #[span.new]

    li.minor
      strong.version v1.2.0
      ul
        li.
          Removed all the #[code change] emitted events on all the UI components as redundant.
          You can use #[code input] instead.
        li Added an #[code inline] option on #[strong.code w-badge]. #[span.new]

    li.major
      strong.version v1.0.0
      p First public release!
</template>

<style lang="scss">
.main--release-notes {
  .history {
    margin-left: 4px;

    > li {padding-left: 20px;}
    > li + li {margin-top: 28px;}
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
    > li:first-child:before {display: none;}

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

    li li li:before {content: '\e007';}

    p {margin: 0.2em 0 0;line-height: 1.2;}
    code {padding: 0 4px;font-size: 1em;}
    strong.code:first-child:not(.black) {
      color: $primary;
      font-size: 1.1em;
    }
  }

  .vue-green {color: #42b883;}
  .vue-green--bg {background-color: #42b883;}

  span.new {
    border-radius: 99em;
    padding: 2px 5px;
    background-color: #3698e5;
    color: #fff;
    font-weight: bold;
    font-size: 9px;
    position: relative;
    top: -1px;

    &:before {content: 'NEW';}
  }
}
</style>
