<template lang="pug">
main
  title-link.mt4(h1) Migration strategy from version 3.x to version 4.x

  p.caption.size--lg Two steps to migrate from version 3.x to version 4.x
  w-accordion.mt6(title-class="py3" expand-icon-rotate90 expand-single)
    w-accordion-item
      template(#title)
        title-link.my0(h2 slug="css-variable-overrides") 1. Replaced SCSS Variables with CSS variables
      template(#content)
        alert.alert--info.px5
          .title4.text-bold.
            Wave UI 4 moves public style customization from SCSS variables to CSS custom
            properties for better runtime customization:
          p.
            Themes, component surfaces, spacing, borders, radii,
            shadows and transitions can now be changed with CSS variables without compiling Wave UI
            source SCSS in your app.
        p.
          If you were not overriding Wave UI SCSS variables, there's no migration needed.
          If you did, replace those overrides with #[code --w-*]
          CSS custom properties in a CSS file loaded after Wave UI.

        ol.mt6
          li.mt4
            .title3 Replace SCSS variable overrides with CSS custom properties.
            p.
              Most former SCSS variables now have a matching #[code --w-*] custom
              property. Move your overrides from a Sass variables file to regular CSS.
            .w-flex.align-center.wrap
              .ssh-pre(
                data-type="css"
                data-label="SCSS before"
                :class="$store.state.darkMode ? 'ssh-pre--dark' : 'ssh-pre--light'"
                style="min-width: 290px")
                pre.ssh-pre__content
                  span.keyword.mr1 @use
                  span.quote "wave-ui/src/wave-ui/scss/variables"
                  span.keyword.mx1 with
                  span.punctuation (<br>

                  span.variable.ml4 $base-increment
                  span.punctuation.mr1 :
                  span.number 5
                  span.unit px
                  span.punctuation ,<br>

                  span.variable.ml4 $border-radius
                  span.punctuation.mr1 :
                  span.number 6
                  span.unit px
                  span.punctuation ,<br>
                  span.variable.ml4 $transition-duration
                  span.punctuation.mr1 :
                  span.number 0.2
                  span.unit s
                  span.punctuation ,<br>
                  span.variable.ml4 $drawer-max-size
                  span.punctuation.mr1 :
                  span.number 420
                  span.unit px<br>
                  span.punctuation );
              w-icon.ma2.grey(xl) mdi mdi-arrow-right
              ssh-pre(
                language="css"
                label="CSS after"
                :dark="$store.state.darkMode"
                style="min-width: 290px").
                :root {
                  --w-base-increment: 5px;
                  --w-border-radius: 6px;
                  --w-transition-duration: 0.2s;
                  --w-drawer-max-size: 420px;
                }

          li.mt4
            .title3 Move theme color overrides to #[code=":root[data-theme]"].
            p.
              Theme colors are now normal CSS variables. Override them per theme, or
              continue defining dynamic app colors through the Wave UI #[code colors]
              config when you prefer JavaScript configuration.
            .w-flex.align-center.wrap
              .ssh-pre(
                data-type="css"
                data-label="SCSS before"
                :class="$store.state.darkMode ? 'ssh-pre--dark' : 'ssh-pre--light'"
                style="min-width: 290px")
                pre.ssh-pre__content
                  span.variable $theme-light:
                  span.punctuation.ml1 (<br>
                    span.keyword.ml4 base-bg-color:
                    span.color.color--light(style="background-color: #fff") #fff
                    span.punctuation.mr1 ,<br>
                    span.keyword.ml4 base-color
                    span.punctuation.mr1 :
                    span.color.color--dark(style="background-color: #111") #111
                    span.punctuation.mr1 ,<br>
                    span.keyword.ml4 primary:
                    span.color.color--dark(style="background-color: #234781") #234781<br>
                  span.punctuation.ml1 );
              w-icon.ma2.grey(xl) mdi mdi-arrow-right
              ssh-pre(
                language="css"
                label="CSS after"
                :dark="$store.state.darkMode"
                style="min-width: 290px").
                :root[data-theme="light"] {
                  --w-base-bg-color: #fff;
                  --w-base-color: #111;
                  --w-primary-color: #234781;
                }

          li.mt4
            .title3 Update spacing, padding and radius customizations.
            p.
              Utility classes and component default spacing now calculate from
              #[code --w-base-increment]. Border radii use #[code --w-border-radius].
              Override these base variables instead of overriding each generated class.
            ssh-pre(language="css" label="wave-ui-overrides.css" :dark="$store.state.darkMode").
              :root {
                --w-base-increment: 4px; /* ma3, px2, gap4 and component padding use this. */
                --w-border-radius: 4px;  /* Buttons, cards, form fields, tabs, etc. use this. */
              }

          li.mt4
            .title3 Keep two build-time SCSS options if you were using them.
            p.
              Two powerful options are still build-time only, same as in Wave UI 3:
              #[code $css-scope] and #[code $use-layout-classes]. They control generated
              selector specificity and whether layout utility classes exist at all, so
              CSS variables cannot replace them.
            .ssh-pre(
              data-type="scss"
              data-label="still build-time"
              :class="$store.state.darkMode ? 'ssh-pre--dark' : 'ssh-pre--light'"
              style="min-width: 290px")
              pre.ssh-pre__content
                span.keyword @use
                span.quote.mx1 "wave-ui/src/wave-ui/scss/variables"
                span.keyword with
                span.punctuation.mx1 (<br>
                span.variable.ml4 $css-scope
                span.punctuation.mr1 :
                span.quote ".my-app.w-app"
                span.punctuation.mr1 ,
                span.comment.ml1 // Only if you need.<br>
                span.variable.ml4 $use-layout-classes
                span.punctuation.mr1 :
                span.boolean.mr1 false
                span.comment.ml1 // Only if you need.<br>
                span.punctuation );

          li.mt4
            .title3 Remove unnecessary Sass plumbing.
            p.
              If you only used SCSS to override visual tokens, you can remove Wave UI
              Sass #[code additionalData], custom #[code _variables.scss] imports, and
              source-package imports that existed only for styling overrides.
            ssh-pre(language="js" label="main.js" :dark="$store.state.darkMode").
              import WaveUI from 'wave-ui'
              import 'wave-ui/dist/wave-ui.css'
              import '@/wave-ui-overrides.css'

        p.mt8.
          For the full list of public CSS variables, see the
          #[router-link(to="/customization") customization] and
          #[router-link(to="/colors") colors] pages.

    w-accordion-item
      template(#title)
        title-link.my0(h2 slug="simplified-w-tooltip-and-w-menu-usage") 2. Simplified w-tooltip and w-menu usage
      template(#content)
        alert.alert--info.px5
          .title4.text-bold Activator slot no longer needs #[code v-on="on"]
          p.
            In Wave UI 4, the #[code w-menu] and #[code w-tooltip] components auto-attach their event
            listeners to the first element placed in the #[code #activator] slot. You no longer need to
            destructure #[code { on }] from the slot or bind #[code v-on="on"] to your activator element.

        .title3 Remove #[code { on }] and #[code v-on="on"] from the activator slot on both #[code w-menu] and #[code w-tooltip].
        .w-flex.align-center.wrap
          ssh-pre(language="html" label="Before (v3)" :dark="$store.state.darkMode" style="min-width: 290px").
            &lt;w-menu&gt;
              &lt;template #activator="{ on }"&gt;
                &lt;w-button v-on="on"&gt;Open&lt;/w-button&gt;
              &lt;/template&gt;
              Menu content
            &lt;/w-menu&gt;
          w-icon.ma2.grey(xl) mdi mdi-arrow-right
          ssh-pre(language="html" label="After (v4)" :dark="$store.state.darkMode" style="min-width: 290px").
            &lt;w-menu&gt;
              &lt;template #activator&gt;
                &lt;w-button&gt;Open&lt;/w-button&gt;
              &lt;/template&gt;
              Menu content
            &lt;/w-menu&gt;
        .w-flex.align-center.wrap
          ssh-pre(language="html" label="Before (v3)" :dark="$store.state.darkMode").
            &lt;w-tooltip&gt;
              &lt;template #activator="{ on }"&gt;
                &lt;span v-on="on"&gt;Hover me&lt;/span&gt;
              &lt;/template&gt;
              Tooltip text
            &lt;/w-tooltip&gt;
          w-icon.ma2.grey(xl) mdi mdi-arrow-right
          ssh-pre(language="html" label="After (v4)" :dark="$store.state.darkMode").
            &lt;w-tooltip&gt;
              &lt;template #activator&gt;
                &lt;span&gt;Hover me&lt;/span&gt;
              &lt;/template&gt;
              Tooltip text
            &lt;/w-tooltip&gt;

        alert.alert--info.px5.mt8
          .title4.text-bold The activator is now the default slot; no #[code template(#activator)] needed
          p.
            In Wave UI 4, both #[code w-menu] and #[code w-tooltip] have been further simplified.
            The element you want to trigger the popup on is now placed directly as the #[strong default slot]
            — no #[code template(#activator)] wrapper required.
            Tooltip/menu content is provided via a dedicated named slot (#[code #tooltip] / #[code #content])
            or, for simple strings, via a new #[code tooltip] prop.

        p.mt2.
          The old #[code #activator] slot still works (backward compatible) — cleanup is encouraged but not required.

        ol.mt6
          li.mt4
            .title3 #[code w-tooltip] with a simple string tooltip: best benefit
            .w-flex.align-center.wrap
              ssh-pre(language="html" label="Before (v4 old)" :dark="$store.state.darkMode" style="min-width: 290px").
                &lt;w-tooltip top&gt;
                  &lt;template #activator="{ on }"&gt;
                    &lt;w-icon v-on="on"&gt;mdi mdi-heart&lt;/w-icon&gt;
                  &lt;/template&gt;
                  Hover text
                &lt;/w-tooltip&gt;
              w-icon.ma2.grey(xl) mdi mdi-arrow-right
              ssh-pre(language="html" label="After (v4 new)" :dark="$store.state.darkMode" style="min-width: 290px").
                &lt;w-tooltip top tooltip="Hover text"&gt;
                  &lt;w-icon&gt;mdi mdi-heart&lt;/w-icon&gt;
                &lt;/w-tooltip&gt;

          li.mt4
            .title3 #[code w-tooltip] with complex/rich tooltip content
            .w-flex.align-center.wrap
              ssh-pre(language="html" label="Before (v4 old)" :dark="$store.state.darkMode" style="min-width: 290px").
                &lt;w-tooltip top&gt;
                  &lt;template #activator="{ on }"&gt;
                    &lt;w-icon v-on="on"&gt;mdi mdi-heart&lt;/w-icon&gt;
                  &lt;/template&gt;
                  Line 1&lt;br&gt;Line 2
                &lt;/w-tooltip&gt;
              w-icon.ma2.grey(xl) mdi mdi-arrow-right
              ssh-pre(language="html" label="After (v4 new)" :dark="$store.state.darkMode" style="min-width: 290px").
                &lt;w-tooltip top&gt;
                  &lt;w-icon&gt;mdi mdi-heart&lt;/w-icon&gt;
                  &lt;template #tooltip&gt;
                    Line 1&lt;br&gt;Line 2
                  &lt;/template&gt;
                &lt;/w-tooltip&gt;

          li.mt4
            .title3 #[code w-menu] gets the same change for consistency
            .w-flex.align-center.wrap
              ssh-pre(language="html" label="Before (v4 old)" :dark="$store.state.darkMode" style="min-width: 290px").
                &lt;w-menu&gt;
                  &lt;template #activator="{ on }"&gt;
                    &lt;w-button v-on="on"&gt;Open&lt;/w-button&gt;
                  &lt;/template&gt;
                  Menu content
                &lt;/w-menu&gt;
              w-icon.ma2.grey(xl) mdi mdi-arrow-right
              ssh-pre(language="html" label="After (v4 new)" :dark="$store.state.darkMode" style="min-width: 290px").
                &lt;w-menu&gt;
                  &lt;w-button&gt;Open&lt;/w-button&gt;
                  &lt;template #content&gt;
                    Menu content
                  &lt;/template&gt;
                &lt;/w-menu&gt;
        alert(tip) The old code will still work, but it's recommended to clean it up to avoid confusion and be forward-compatible with future changes.
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
