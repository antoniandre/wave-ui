/**
 * Generates the color shades for each custom color and status colors for the current theme (only),
 * and save it in the config object.
 *
 * @param {Object} config
 */
export const generateColorShades = config => {
  // Add color shades for each custom color and status color of each theme.
  ['light', 'dark'].forEach(theme => {
    const themeOfColors = config.colors[theme]
    themeOfColors.shades = {}

    for (const label in themeOfColors) {
      if (label === 'shades') continue // Skip if item is the `shades` container.

      // Account for string colors and the fine tuned shaded colors
      const colorInfo = themeOfColors[label]
      const color = { label, color: (themeOfColors[label]?.color ?? themeOfColors[label]).replace('#', '') }
      const col = color.color
      if (col.length === 3) color.color = col[0] + '' + col[0] + col[1] + col[1] + col[2] + col[2]

      for (let i = 1; i <= 6; i++) {
        const lighterColor = lighten(`#${color.color}`, i * (colorInfo?.lightIncrement ?? 16) + (colorInfo?.lightOffset ?? 0))
        const darkerColor = darken(`#${color.color}`, i * (colorInfo?.darkIncrement ?? 12.4) + (colorInfo?.darkOffset ?? 0))
        // Adding the shades to the config object to generate the CSS from w-app.
        themeOfColors.shades[`${color.label}-light${i}`] = lighterColor
        themeOfColors.shades[`${color.label}-dark${i}`] = darkerColor
      }
    }
  })
}

export const flattenColors = (themeColors, colorPalette) => {
  const colors = {
    ...colorPalette.reduce((obj, color) => {
      obj[color.label] = color.color
      const shades = (color.shades || []).reduce((obj, color) => {
        obj[color.label] = color.color
        return obj
      }, {})
      return { ...obj, ...shades }
    }, { ...themeColors, ...themeColors.shades })
  }
  delete colors.shades

  return colors
}

/**
 * Clamp a value between a minimum and maximum value.
 *
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum possible value
 * @param {number} max - Maximum possible value
 * @returns {number} The clamped value
 */
export function clamp (value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Convert a number to a hexadecimal string.
 *
 * @param {number} value - The number to convert
 * @throws {Error} - If the value is not in the range 0~255
 * @returns {string} The hexadecimal string
 */
export function toHexString (value) {
  const trimmedValue = value.toString(16)

  return (
    (trimmedValue.length === 1 && `0${trimmedValue}`) ||
    (trimmedValue.length === 2 && trimmedValue) ||
    console.error(`expected value from 0~255, got: ${value}`) ||
    ''
  )
}

/**
 * Determines if a string is a valid hex color
 *
 * @param {string} str - The string to test
 * @returns {boolean} - Whether the string is a valid hex color
 */
export function isValidHex (str) {
  return /^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(str)
}

/**
 * Determines if a string is a short hex color
 *
 * @param {string} str - The string to test
 * @returns {boolean} - Whether the string is a short hex color
 */
export function isShortHex (str) {
  return /^#[0-9A-Fa-f]{3}([0-9A-Fa-f])?$/.test(str)
}

/**
 * Expands a short hex color to a full hex color
 *
 * @param {string} str - The short hex color to expand
 * @returns {string} - The expanded hex color
 */
export function expandShortHex (str) {
  return `#${str.substring(1).split('').map(char => `${char}${char}`).join('')}`
}

/**
 * Parse a color string into a full length hex string
 *
 * @param {string} str - The color string to parse
 * @throws {Error} - If the string is not a valid color
 * @returns {string} - The parsed hex color
 */
function getColorFullHex (str) {
  return (isValidHex(str) && str) || (isShortHex(str) && expandShortHex(str)) || console.error(`expected color hex string, got '${str}'`) || ''
}

/**
 * Break a hex color string into it's components
 *
 * @param {string} color - The color string to parse
 * @returns {{ red, green, blue, alpha, hasAlpha: boolean }} - The color components
 */
function getColorComponents (color) {
  const hex = getColorFullHex(color)

  const red = parseInt(hex.substring(1, 3), 16)
  const green = parseInt(hex.substring(3, 5), 16)
  const blue = parseInt(hex.substring(5, 7), 16)

  const alpha = hex.length === 9
    ? parseInt(hex.substring(7, 9), 16) / 255
    : 1.0

  return {
    red,
    green,
    blue,
    alpha,
    hasAlpha: hex.length === 9
  }
}

/**
 * Convert RGB components to a hex color string
 *
 * @param {number} r - red
 * @param {number} g - green
 * @param {number} b - blue
 * @param {number} [a] - alpha
 * @returns {string} - The hex color string
 */
export function hexFromRGB (r, g, b, a) {
  return `#${toHexString(r)}${toHexString(g)}${toHexString(b)}${a ? toHexString(Math.floor(a * 255)) : ''}`
}

/**
 * Mix two colors together. The same way that SCSS does it
 *
 * @param {string} color1 - Color 1 as a hex
 * @param {string} color2 - Color 2 as a hex
 * @param {number} [weight] - The percentage to mix them at. Default: 50
 * @returns {string} - The new mixed color as a hex
 *
 * @see https://gist.github.com/ktnyt/2573047b5b4c7c775f2be22326ebf6a8 for the original Typescript implementation
 */
export function mixColors (color1, color2, weight = 50) {
  const c1 = getColorComponents(color1)
  const c2 = getColorComponents(color2)

  const percentage = clamp(weight, 0, 100) / 100
  const alphaWeight = 2 * percentage - 1

  const alphaDiff = c1.alpha - c2.alpha
  const c1Weight = (
    (
      alphaWeight * alphaDiff === -1
        ? alphaWeight
        : (alphaWeight + alphaDiff) / (1 + alphaWeight * alphaDiff)
    ) + 1
  ) / 2
  const c2Weight = 1 - c1Weight

  const red = clamp(Math.round(c1.red * c1Weight + c2.red * c2Weight), 0, 255)
  const green = clamp(Math.round(c1.green * c1Weight + c2.green * c2Weight), 0, 255)
  const blue = clamp(Math.round(c1.blue * c1Weight + c2.blue * c2Weight), 0, 255)

  const alpha = c1.alpha * percentage + c2.alpha * (1 - percentage)

  return c1.hasAlpha || c2.hasAlpha || alpha !== 1
    ? hexFromRGB(red, green, blue, alpha)
    : hexFromRGB(red, green, blue)
}

/**
 * Lighten a color by a percentage
 *
 * @param {string} color - The hex color to lighten
 * @param {number} [weight] - The amount to lighten by
 * @returns {string} - The new lightened color
 */
export function lighten (color, weight = 15) {
  return mixColors('#ffffff', color, weight)
}

/**
 * Darken a color by a percentage
 *
 * @param {string} color - The hex color to darken
 * @param {number} [weight] - The amount to darken by
 * @returns {string} - The new darkened color
 */
export function darken (color, weight = 12.4) {
  return mixColors('#000000', color, weight)
}

/**
 * Generate a color palette from a color info object
 *
 * @param {Record<string,{color: string, lightOffset: number, lightIncrement: number, darkOffset: number, darkIncrement: number}>} colorInfo - Colors to generate the palette from
 * @returns {Array<{label: string, color: string, shades: Array<{label: string, color: string}>}>} - The color palette
 */
export function generateColorPalette (colorInfo) {
  return Object.keys(colorInfo).map(label => {
    const color = colorInfo[label]?.color ?? colorInfo[label]
    return {
      label,
      color,
      shades: [6, 5, 4, 3, 2, 1, -1, -2, -3, -4, -5, -6].map(i => ({
        label: `${label}-${i > 0 ? 'light' : 'dark'}${Math.abs(i)}`,
        color: i > 0
          ? lighten(color, (i * (colorInfo[label]?.lightIncrement ?? 15)) - (colorInfo[label]?.lightOffset ?? 0))
          : darken(color, (-i * (colorInfo[label]?.darkIncrement ?? 12.4)) - (colorInfo[label]?.darkOffset ?? 0))
      }))
    }
  })
}

export const specialPaletteColors = [
  { label: 'black', color: '#000' },
  { label: 'white', color: '#fff' },
  { label: 'transparent', color: 'transparent' },
  { label: 'inherit', color: 'inherit' }
]
