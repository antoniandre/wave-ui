<template lang="pug">
main
  title-link.mt4(h1) Options &amp; presets

  title-link(h2) Wave UI global options
  p Wave UI accepts these configuration options:
  ul.ml3
    li.mb4(v-for="(item, i) in waveUiOptions" :key="i")
      code {{ item.label }}
      | :
      div(v-if="item.route")
        | Read on in the
        router-link.mx1(:to="item.route") {{ item.route.startsWith('w-') ?  item.route : item.label }}
        | {{ item.route.startsWith('w-') ?  'component' : 'knowledge base page' }}.
      div(v-else-if="item.definition") {{ item.definition }}

  .mt6
    w-icon.ml-1.mr1 wi-chevron-right
    | View the
    a.mx1(href="https://github.com/antoniandre/wave-ui/blob/main/src/wave-ui/utils/config.js" target="_blank")
      | full list of options directly in the codebase
      w-icon.ml2(md) mdi mdi-open-in-new
    | .

  w-divider.my12
  title-link(h2 slug="presets")
    | Presets
    w-tag.ml3(bg-color="red-light1" lg color="white" round) From version 3.0
  .title3 Components presets are here to make you go faster with repetitive markup.
  p.
    If you are always using the same props on the Wave UI components of your app, the presets will
    allow you to define the usual props of each of the components you need.#[br]
  p.text-bold The presets act like a default value, that can be overridden if the same prop is provided on the Wave UI component in template markup.
  p.mt6 Example of presets:
  ssh-pre.mt4(language="js" label="Javascript" :dark="$store.state.darkMode").
    // In the global Wave UI config object.
    presets: {
      'w-button': { color: 'light-blue-light4', bgColor: 'deep-purple-light2', tile: true, outline: true },
      'w-accordion': { expandIconRotate90: true },
      'w-overlay': { bgColor: 'pink', opacity: 0.3 }
    }

  title-link(h3) Using #[strong.code w-button] presets
  p This is an example of how the components will be rendered when presets are defined.
  example
    w-button button 1
    w-button.ma3(bg-color="success") button 2
    w-button button 3
    template(#pug).
    template(#html).
    template(#js).
      presets: {
        'w-button': { color: 'light-blue-light4', bgColor: 'deep-purple-light2', tile: true, outline: true },
      }


</template>

<script>
export default {
  data: () => ({
    waveUiOptions: [
      { label: 'on', definition: 'Sets the Wave UI root on a custom node (expects a valid CSS selector). Default: `#app`, if not found, `body`.' },
      { label: 'breakpoints', route: 'breakpoints' },
      { label: 'colors', route: 'colors' },
      { label: 'css', definition: 'A set of CSS-related options.' },
      { label: 'icons', route: 'w-icon' },
      { label: 'iconsLigature', route: 'w-icon' },
      { label: 'notificationManager', route: 'w-notification' },
      { label: 'presets', route: 'customization#presets' },
      { label: 'theme', definition: 'Choose which theme to use: `light` or `dark`. You can also set `auto` to let Wave UI read the preferred theme from the user OS.' }
    ]
  })
}
</script>

<style lang="scss">

</style>
