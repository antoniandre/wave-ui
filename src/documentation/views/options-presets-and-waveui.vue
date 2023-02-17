<template lang="pug">
main
  title-link.mt4(h1 slug="options-presets-and-waveui") Options, presets &amp; #[code $waveui]

  w-accordion.mt6(
    v-model="openPanes"
    :items="3"
    content-class="pl11 pb6 mb12")
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
      p.
        The #[code $waveui] object is a Swiss Army Knife at your disposal. It can help you in many
        ways, it is completely reactive, and accessible from anywhere in your app via:#[br]
      w-list(:items="3" icon="wi-check")
        template(#item.1) #[code.py0.mr1 this.$waveui] in a Vue component
        template(#item.2) #[code.py0.mr1 $waveui] in any Vue template
        template(#item.3) #[code.py0.mr1 inject('$waveui')] when using the Vue composition API
      p.mt6 Here is the list of what you can find in this object, along with the current values in this app as an illustration:
      w-accordion(
        :items="waveuiObject"
        title-class="code"
        content-class="ml5"
        expand-single
        expand-icon-rotate90)
        template(#item-content="{ item }")
          p.text-bold(v-html="item.desc")
          template(v-if="!item.title.includes('()')")
            .title4.text-bold.mt6 Current value(s) in this app and context:
            pre.primary-light1 {{ $waveui[item.title] }}
</template>

<script>
export default {
  data: () => ({
    openPanes: [true, true, true],
    waveUiOptions: [
      { label: 'on', definition: 'From version 3.0. Sets the Wave UI root on a custom node (expects a valid CSS selector). Default: <code>#app</code>, if not found, <code>body</code>.' },
      { label: 'breakpoints', route: 'breakpoints' },
      { label: 'colors', route: 'colors' },
      { label: 'css', definition: 'A set of CSS-related options.' },
      { label: 'icons', route: 'w-icon' },
      { label: 'iconsLigature', route: 'w-icon' },
      { label: 'notificationManager', route: 'w-notification' },
      { label: 'presets', route: 'options-presets-and-waveui#presets' },
      { label: 'theme', definition: 'From version 3.0. Choose which theme to use: <code>light</code> or <code>dark</code>. You can also set <code>auto</code> to let Wave UI read the preferred theme from the user OS.' }
    ],
    waveuiObject: [
      { title: 'breakpoint', desc: 'Gives information about the current breakpoint and screen width.<br>Read more about it in the <a href="/breakpoints">breakpoints knowledge base</a> page.' },
      { title: 'colors', desc: 'Contains the full list of colors available in the app with their hex values. It includes the colors from the color palette, the four status colors (info, warning, error, success), the primary and secondary color, all your custom colors, and all the color shades (light1-6, dark 1-6).<br>Read more about colors in the <a href="/colors">colors knowledge base</a> page.' },
      { title: 'config', desc: 'Contains the computed list of configuration that Wave UI is using. This includes the global configuration you may have defined, as well as all the defaults.<br>Read more about it in the <a href="#wave-ui-global-options">Wave UI global options</a> above section.' },
      { title: 'preferredTheme', desc: 'From version 3.0. When the theme is set to <code>auto</code>, Wave UI will detect the user preferred theme and will store this value in this variable. If the user preferred theme changes, from the operating system, this value will be updated.<br>Read more about themes in the <a href="/themes">themes knowledge base</a> page.' },
      { title: 'theme', desc: 'From version 3.0. The current theme that Wave UI is using.<br>Read more about themes in the <a href="/themes">themes knowledge base</a> page.' },
      { title: 'notify()', desc: 'A function to notify.<br>Read more about the notification manager in the <a href="/w-notification">notification component</a>.' },
      { title: 'switchTheme()', desc: 'From version 3.0. A function to switch theme.<br>Read more about themes in the <a href="/themes">themes knowledge base</a> page.' }
    ]
  }),

  mounted () {
    const hash = document.location.hash || ''
    if (hash.includes('presets')) this.openPanes = [false, true, false]
    else if (hash.includes('the-waveui-helper')) this.openPanes = [false, false, true]
  }
}
</script>

<style lang="scss">

</style>
