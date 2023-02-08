<template lang="pug">
main
  title-link.mt4(h1) Options, presets &amp; #[code $waveui]

  w-accordion.mt6(:items="3" content-class="pl11 mb12" expand-icon-rotate90 :model-value="[true, true, true]")
    template(#item-title.1)
      title-link.ml2.my3(h2 @click.prevent) Wave UI global options
    template(#item-content.1)
      p Wave UI accepts these configuration options:
      ul.mt4
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

    template(#item-title.2)
      title-link.ml2.my3(h2 @click.prevent slug="presets")
        | Presets
        w-tag.ml3(bg-color="red-light1" lg color="white" round) From version 3.0
    template(#item-content.2)
      .title3 The purpose of the components presets is to spare you the repetitive markup.
      p.
        If you are always using the same props on the Wave UI components of your app, the presets will
        allow you to define the usual props of each of the components you need.#[br]
      p.text-bold The presets act like a default value, that can be overridden if the same prop is provided on the Wave UI component in template markup.
      p.mt6 Example of presets:
      ssh-pre.mt4(language="js" label="Javascript" :dark="$store.state.darkMode").
        // In the global Wave UI config object.
        presets: {
          'w-button': { color: 'light-blue-light4', bgColor: 'deep-purple-light2', tile: true, outline: true, lg: true },
          'w-accordion': { expandIconRotate90: true },
          'w-overlay': { bgColor: 'pink', opacity: 0.3 }
        }

      title-link(h3) Using #[strong.code w-button] presets
      p.
        Let's apply this preset to the #[strong.code w-button] component and see how this component
        would render.
      ssh-pre.mt4(language="js" label="Javascript" :dark="$store.state.darkMode").
        presets: {
          'w-button': {
            color: 'light-blue-light4',
            bgColor: 'deep-purple-light2',
            tile: true,
            outline: true,
            lg: true
          }
        }

      example
        w-button.ma2(v-for="i in 10" v-bind="{ color: 'light-blue-light4', bgColor: 'deep-purple-light2', tile: true, outline: true, lg: true }") button {{ i }}
        br
        w-button.ma2(bg-color="success" v-bind="{ tile: true, outline: true, lg: true }") green button
        w-button.ma2(bg-color="success" :tile="false" :outline="false" :lg="false") another green button
        template(#pug).
          w-button.ma2(v-for="i in 10") button {{ '\{\{ i \}\}' }}
          br
          w-button.ma2(bg-color="success") green button
          w-button.ma2(bg-color="success" :tile="false" :outline="false" :lg="false") another green button
        template(#html).
          &lt;w-button v-for="i in 10" class="ma2"&gt;button {{ '\{\{ i \}\}' }}&lt;/w-button&gt;
          &lt;br&gt;
          &lt;w-button bg-color="success" class="ma2"&gt;green button&lt;/w-button&gt;
          &lt;w-button
            bg-color="success"
            :tile="false"
            :outline="false"
            :lg="false" class="ma2"&gt;
            another green button
          &lt;/w-button&gt;

        template(#js).
          presets: {
            'w-button': {
              color: 'light-blue-light4',
              bgColor: 'deep-purple-light2',
              tile: true,
              outline: true
            }
          }

      p Note that:
      ul
        li The 10 first buttons have no prop and yet they don't render like the Wave UI defaults.
        li The two green buttons override the preset background color.
        li The first green button does not override the other presets except the background color, so they are applied.

    template(#item-title.3)
      title-link.ml2.my3(h2 @click.prevent) The #[code $waveui] helper
    template(#item-content.3)
      p The #[code $waveui] object is a Swiss Army Knife and is available to help you in many ways.
      pre {{ $waveui }}

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
      { label: 'presets', route: 'options-presets-and-waveui#presets' },
      { label: 'theme', definition: 'Choose which theme to use: `light` or `dark`. You can also set `auto` to let Wave UI read the preferred theme from the user OS.' }
    ]
  })
}
</script>

<style lang="scss">

</style>
