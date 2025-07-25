// Defaults CSS variables. Will be overridden in the doDynamicCSS() function
// which fetches the CSS :root variables generated by _base.scss.
const cssVars = {
  cssScope: '.w-app',
  baseIncrement: 4
}

// Global var for faster results in the resize event handler.
let breakpointsDef = { keys: [], values: [] }
let currentBreakpoint = null

// Generates the CSS for all the dynamic colors and shades. E.g.
// :root {[color1-variable], [color2-variable]}
// .color1--bg {background-color: [color1-variable]}
// .color1 {color: [color1-variable]}
const generateColors = (themeColors, generateShadeCssVariables) => {
  let styles = ''
  const cssVariables = {}

  // Extract status colors and place them after the other colors.
  const { info, warning, success, error, shades, ...colors } = themeColors
  const { cssScope } = cssVars

  // User custom colors.
  // ------------------------------------------------------
  for (const colorName in colors) {
    styles +=
      `${cssScope} .${colorName}--bg{background-color:var(--w-${colorName}-color)}` +
      `${cssScope} .${colorName}{color:var(--w-${colorName}-color)}`
  }
  // The shades don't need css vars.
  for (const colorName in shades) {
    styles +=
      `${cssScope} .${colorName}--bg{background-color:${shades[colorName]}}` +
      `${cssScope} .${colorName}{color:${shades[colorName]}}`
  }

  // Creating CSS3 variables.
  // ------------------------------------------------------
  // Create a CSS variable for each color for theming and reuse in components.
  // Status colors must remain after the other colors so they have priority in form validations.
  // That only makes sense when there are 2 colors on the same element: e.g. `span.primary.error`.
  const allColors = { ...colors, info, warning, success, error }
  for (const colorName in allColors) cssVariables[colorName] = allColors[colorName]?.color ?? allColors[colorName]
  if (generateShadeCssVariables) {
    for (const colorName in shades) cssVariables[colorName] = shades[colorName]
  }
  let cssVariablesString = ''
  Object.entries(cssVariables).forEach(([colorName, colorHex]) => {
    cssVariablesString += `--w-${colorName}-color: ${colorHex};`
  })

  return `:root{${cssVariablesString}}${styles}`
}

// Generate the layout grid. E.g. xs1, xs2, ..., xl12.
const generateBreakpoints = (breakpoints, grid) => {
  let styles = ''
  const { cssScope } = cssVars

  // Can't add dynamic breakpoints as CSS variables:
  // CSS variables are not supported in media queries yet.
  // https://www.w3.org/TR/css-variables-1/#using-variables
  // const cssVariables = []
  // Object.entries(config.breakpoints).forEach(([label, value]) => {
  //   cssVariables.push(`--breakpoint-${label}: ${value}px`)
  // })
  // styles += `:root {${cssVariables.join(';')}}`

  // Define media queries for each breakpoint: xs, sm, md, lg, xl.
  breakpoints.forEach(({ min, label }) => {
    // Discard `xs` since the min is 0 (`media query (min-width: 0)`), and leave in _layout.scss.
    if (label === 'xs') {
      // For each breakpoint, loop from 1 to 12. E.g. xs1, xs2, ..., xl12.
      for (let i = 0; i < grid; i++) {
        styles +=
          `${cssScope} .${label}${grid - i}{` +
          `width:${parseFloat(((grid - i) * 100 / grid).toFixed(4))}%;}`
      }
    }
    else {
      styles += `@media(min-width:${min}px){`

      // For each breakpoint, loop from 1 to 12. E.g. xs1, xs2, ..., xl12.
      for (let i = 0; i < grid; i++) {
        styles +=
          `${cssScope} .${label}${grid - i}{` +
          `width:${parseFloat(((grid - i) * 100 / grid).toFixed(4))}%;}`
      }

      styles += '}'
    }
  })

  return styles
}

/*
  THIS WILL NOT BE AN OPTION (UNLESS I CHANGE MY MIND):
  Having spaces classes per breakpoint is really an interesting feature, so that we can use something
  like: `smd-ma2 mdu-ma12`.
  The drawback is that it generates so much CSS that I don't think it is worth it.
  In this test, for only 2 margin rules, it already generates 35kb of CSS...

const generateBreakpointSpaces = breakpoints => {
  let styles = ''
  const { cssScope, baseIncrement } = cssVars

  breakpoints.forEach(({ label, min }) => {
    // Discard `xs` since the min is 0 (`media query (min-width: 0)`), and leave in _layout.scss.
    // Discard `xl`: xlu is just like xl.
    if (!['xs', 'xl'].includes(label)) {
      styles += `@media(min-width:${min}px){`
      for (let i = -12; i < 25; i++) {
        styles += `${cssScope} .${label}u-ma${i}{margin:${i * baseIncrement}px}`
        styles += `${cssScope} .${label}u-mx${i}{margin-right:${i * baseIncrement}px;margin-left:${i * baseIncrement}px}`
      }
      styles +=  '}'
    }
  })

  breakpoints.forEach(({ label, min, max }) => {
    styles += `@media (min-width:${min}px) and (max-width:${max}px){`
    for (let i = -12; i < 25; i++) {
      styles += `${cssScope} .${label}-ma${i}{margin:${i * baseIncrement}px}`
      styles += `${cssScope} .${label}-mx${i}{margin-right:${i * baseIncrement}px;margin-left:${i * baseIncrement}px}`
    }
    styles +=  '}'
  })

  breakpoints.forEach(({ label, max }) => {
    // Discard `xs`: xsd is just like xs.
    // Discard `xl`: xld is just like the basic rules already in CSS.
    if (!['xs', 'xl'].includes(label)) {
      styles += `@media (max-width:${max}px){`
      for (let i = -12; i < 25; i++) {
        styles += `${cssScope} .${label}d-ma${i}{margin:${i * baseIncrement}px}`
        styles += `${cssScope} .${label}d-mx${i}{margin-right:${i * baseIncrement}px;margin-left:${i * baseIncrement}px}`
      }
      styles +=  '}'
    }
  })

  // console.log(styles)
  // debugger
  return styles
} */

const genBreakpointLayoutClasses = breakpoints => {
  let styles = ''
  const { cssScope, baseIncrement } = cssVars
  const layoutClasses = [
    'show{display:block}',
    'hide{display:none}',
    'd-flex{display:flex}',
    'd-iflex{display:inline-flex}',
    'd-block{display:block}',
    'd-iblock{display:inline-block}',
    'relative{position:relative}',
    'absolute{position:absolute}',
    'fixed{position:fixed}',
    'sticky{position:sticky}',
    'text-left{text-align:left}',
    'text-center{text-align:center}',
    'text-right{text-align:right}',
    'text-nowrap{white-space:nowrap}',
    'row{flex-direction:row}',
    'column{flex-direction:column}',
    'column-reverse{flex-direction:column-reverse}',
    'grow{flex-grow:1;flex-basis:auto}',
    'no-grow{flex-grow:0}',
    'shrink{flex-shrink:1;margin-left:auto;margin-right:auto}',
    'no-shrink{flex-shrink:0}',
    'wrap{flex-wrap: wrap}',
    'no-wrap{flex-wrap: nowrap}',
    'fill-width{width:100%}',
    'fill-height{height:100%}',
    'h-auto{height:auto}',
    'h-screen{height:100vh}',
    'basis-zero{flex-basis:0}',
    'align-start{align-items:flex-start}',
    'align-center{align-items:center}',
    'align-end{align-items:flex-end}',
    'align-self-start{align-self:flex-start}',
    'align-self-center{align-self:center}',
    'align-self-end{align-self:flex-end}',
    'align-self-stretch{align-self:stretch}',
    'justify-start{justify-content:flex-start}',
    'justify-center{justify-content:center}',
    'justify-end{justify-content:flex-end}',
    'justify-space-between{justify-content:space-between}',
    'justify-space-around{justify-content:space-around}',
    'justify-space-evenly{justify-content:space-evenly}'
  ]
  const array12 = Array(12).fill()

  // Define media queries for each breakpoint: xs, sm, md, lg, xl.
  breakpoints.forEach(({ label, min }) => {
    // Discard `xs` since the min is 0 (`media query (min-width: 0)`), and leave in _layout.scss.
    if (label !== 'xs') {
      styles +=
        `@media(min-width:${min}px){` +
        layoutClasses.map(rule => `${cssScope} .${label}u-${rule}`).join('') +
        // w-grid columns and gap.
        array12.map((item, i) => `.w-grid.${label}u-columns${i + 1}{grid-template-columns:repeat(${i + 1},1fr);}`).join('') +
        array12.map((item, i) => `.w-flex.${label}u-gap${i + 1},.w-grid.${label}u-gap${i + 1}{gap:${(i + 1) * baseIncrement}px;}`).join('') +
        `.w-flex.${label}u-gap0,.w-flex.${label}u-gap0{gap:0}` +
        '}'
    }
  })

  breakpoints.forEach(({ label, min, max }) => {
    styles +=
      `@media (min-width:${min}px) and (max-width:${max}px){` +
      layoutClasses.map(rule => `${cssScope} .${label}-${rule}`).join('') +
      // w-grid columns and gap.
      array12.map((item, i) => `.w-grid.${label}-columns${i + 1}{grid-template-columns:repeat(${i + 1},1fr);}`).join('') +
      array12.map((item, i) => `.w-flex.${label}-gap${i + 1},.w-grid.${label}-gap${i + 1}{gap:${(i + 1) * baseIncrement}px;}`).join('') +
      `.w-flex.${label}-gap0,.w-flex.${label}-gap0{gap:0}` +
      '}'
  })

  breakpoints.forEach(({ label, max }) => {
    if (label !== 'xl') {
      styles +=
        `@media (max-width:${max}px){` +
        layoutClasses.map(rule => `${cssScope} .${label}d-${rule}`).join('') +
        // w-grid columns and gap.
        array12.map((item, i) => `.w-grid.${label}d-columns${i + 1}{grid-template-columns:repeat(${i + 1},1fr);}`).join('') +
        array12.map((item, i) => `.w-flex.${label}d-gap${i + 1},.w-grid.${label}d-gap${i + 1}{gap:${(i + 1) * baseIncrement}px;}`).join('') +
        `.w-flex.${label}d-gap0,.w-flex.${label}d-gap0{gap:0}` +
        '}'
    }
  })

  return styles
}

const getBreakpoint = $waveui => {
  const width = window.innerWidth
  const breakpoints = breakpointsDef.values.slice(0)
  // Most performant lookup.
  breakpoints.push(width)
  breakpoints.sort((a, b) => a - b)
  const breakpoint = breakpointsDef.keys[breakpoints.indexOf(width)] || 'xl'

  if (breakpoint !== currentBreakpoint) {
    currentBreakpoint = breakpoint
    $waveui.breakpoint = {
      name: breakpoint,
      xs: breakpoint === 'xs',
      sm: breakpoint === 'sm',
      md: breakpoint === 'md',
      lg: breakpoint === 'lg',
      xl: breakpoint === 'xl',
      width
    }
  }

  $waveui.breakpoint.width = window.innerWidth
}

// Should run on first mounted hook.
export const injectCSSInDOM = $waveui => {
  const { config } = $waveui
  breakpointsDef = { keys: Object.keys(config.breakpoints), values: Object.values(config.breakpoints) }

  // Inject global dynamic CSS classes in document head.
  if (!document.getElementById('wave-ui-styles')) {
    const css = document.createElement('style')
    css.id = 'wave-ui-styles'
    css.innerHTML = doDynamicCSS(config)

    // Prepend or append the CSS to the head based on the config.css.prependCss option.
    const stylesheets = document.head.querySelectorAll('style,link[rel="stylesheet"]')
    if (config.css.prependCss) {
      const firstStyle = stylesheets[0]
      if (firstStyle) firstStyle.before(css)
      else document.head.prepend(css)
    }
    else {
      const lastStyle = stylesheets[stylesheets.length - 1]
      if (lastStyle) lastStyle.after(css)
      else document.head.appendChild(css)
    }
  }

  getBreakpoint($waveui)
  window.addEventListener('resize', () => getBreakpoint($waveui))
}

export const injectColorsCSSInDOM = (themeColors, colorPalette, generateShadeCssVariables) => {
  // Inject global dynamic CSS classes in document head.
  if (!document.getElementById('wave-ui-colors')) {
    const css = document.createElement('style')
    css.id = 'wave-ui-colors'
    css.innerHTML = generateColors(themeColors, colorPalette, generateShadeCssVariables)

    const firstStyle = document.head.querySelectorAll('style,link[rel="stylesheet"]')[0]
    if (firstStyle) firstStyle.before(css)
    else document.head.appendChild(css)
  }
}

const doDynamicCSS = config => {
  const entries = Object.entries(config.breakpoints)
  const breakpointsDef = entries.map(([label, max], i) => {
    // Construct the breakpoint objects.
    const [, value = 0] = entries[i - 1] || []
    return { label, min: value ? value + 1 : 0, max }
  })

  const computedStyles = getComputedStyle(document.documentElement)
  cssVars.cssScope = computedStyles.getPropertyValue('--w-css-scope')
  cssVars.baseIncrement = parseInt(computedStyles.getPropertyValue('--w-base-increment'))

  let styles = ''
  styles += generateBreakpoints(breakpointsDef, config.css.grid)
  if (config.css.breakpointLayoutClasses) styles += genBreakpointLayoutClasses(breakpointsDef)
  // if (config.css.breakpointSpaces) styles += generateBreakpointSpaces(breakpointsDef)

  return styles
}
