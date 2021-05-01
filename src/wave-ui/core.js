import { reactive } from 'vue'
import config, { mergeConfig } from './utils/config'
import colors from './utils/colors'
// import * as directives from './directives'
import { consoleWarn } from './utils/console'

const shadeColor = (col, amt) => {
  return '#' + col.slice(1).match(/../g)
    .map(x => (x =+ `0x${x}` + amt, x < 0 ? 0 : ( x > 255 ? 255 : x)).toString(16).padStart(2, 0))
    .join('')
}

export default class WaveUI {
  static instance = null
  static vueInstance = null // Needed until constructor.

  // Public breakpoint object. Accessible from this.$waveui.breakpoint.
  breakpoint = {
    name: '',
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false
  }

  // A public object containing pairs of color-name => color hex.
  // Accessible from anywhere via `this.$waveui.colors`.
  // These colors generate the CSS in `w-app` on mounted.
  colors = colors.reduce((obj, color) => {
    obj[color.label] = color.color
    color.shades.forEach(shade => (obj[shade.label] = shade.color))
    return obj
  }, { ...config.colors, black: '#000', white: '#fff', transparent: 'transparent', inherit: 'inherit' })

  static install (app, options = {}) {
    // Register directives.
    // for (const id in directives) {
    //   if (directives[id]) app.directive(id, directives[id])
    // }
    app.directive('focus', {
      // When the bound element is inserted into the DOM...
      inserted: el => el.focus()
    })

    // Register a-la-carte components from the given list.
    const { components = {} } = options || {}
    for (let id in components) {
      const component = components[id]
      app.component(component.name, component)
    }

    // Register mixins.
    // app.mixin({
    //   mounted () {
    //   }
    // })

    WaveUI.registered = true
  }

  // Singleton.
  constructor (app, options = {}) {
    if (WaveUI.instance) return WaveUI.instance

    else {
      if (!WaveUI.registered) app.use(WaveUI)

      // Merge user options into the default config.
      mergeConfig(options)

      // @todo: remove this warning in version 1.40+.
      if (config.disableColorShades) {
        consoleWarn(
          'WARNING - Since version 1.30 (Vue 2) & 2.17 (Vue 3), the option `disableColorShades` is replaced with `css.colorShades`.\n' +
          'https://antoniandre.github.io/wave-ui/release-notes'
        )
      }

      // Add color shades for each custom color given in options.
      if (config.css.colorShades) {
        config.colorShades = {}

        for (let color in config.colors) {
          color = { label: color, color: config.colors[color].replace('#', '') }
          const col = color.color
          if (col.length === 3) color.color = col[0] + '' + col[0] + col[1] + col[1] + col[2] + col[2]

          this.colors[color.label] = `#${color.color}`

          for (let i = 1; i <= 3; i++) {
            const lighterColor = shadeColor(`#${color.color}`, i * 40)
            const darkerColor = shadeColor(`#${color.color}`, -i * 40)
            this.colors[`${color.label}-light${i}`] = lighterColor
            this.colors[`${color.label}-dark${i}`] = darkerColor

            // Adding the shades to the config object to generate the CSS from w-app.
            config.colorShades[`${color.label}-light${i}`] = lighterColor
            config.colorShades[`${color.label}-dark${i}`] = darkerColor
          }
        }
      }

      WaveUI.instance = this
      // Make waveui reactive and expose the single instance in Vue.
      app.config.globalProperties.$waveui = reactive(this)
    }
  }
}

WaveUI.version = '__VERSION__'
