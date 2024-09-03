import { consoleError } from './console'

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

      // Account for string colors and the fine tuned shaded colors.
      const colorInfo = themeOfColors[label]
      const color = { label, color: (themeOfColors[label]?.color ?? themeOfColors[label])?.replace?.('#', '') }
      const col = color.color
      if (!col) continue // Don't break if a color is only set for one of the themes.
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
    consoleError(`expected value from 0~255, got: ${value}`) ||
    ''
  )
}

/**
 * Determines if a string is a valid hex color
 *
 * Valid long hex colors formats:
 *  - #ffffff,
 *  - #00000033
 *
 * @param {string} str - The string to test
 * @returns {boolean} - Whether the string is a valid hex color
 */
export function isValidHex (str) {
  return /^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(str)
}

/**
 * Determines if a string is a short hex color
 *
 * Valid short hex colors formats:
 *  - #fff,
 *  - #0003
 *
 * @param {string} str - The string to test
 * @returns {boolean} - Whether the string is a short hex color
 */
export function isShortHex (str) {
  return /^#[0-9a-f]{3}([0-9a-f])?$/i.test(str)
}

/**
 * Expands a short hex color to a full hex color
 *
 * @param {string} str - The short hex color to expand such as '#fff' or '#0003' with an alpha value
 * @returns {string} - The expanded hex color such as '#ffffff' or '#00000033' with an alpha value
 */
export function expandShortHex (str) {
  return `#${str.substring(1).split('').map(char => `${char}${char}`).join('')}`
}

/**
 * Parse a color string into a full length hex string
 *
 * @param {string} str - The color string to parse, either a full hex color or short hex color e.g. '#fff' or '#001122'.
 *                       This can also include an alpha value e.g. '#00112233' or '#0003'.
 * @throws {Error} - If the string is not a valid color
 * @returns {string} - The full parsed hex color for example, with alpha: '#00112233'
 */
function getColorFullHex (str) {
  return (isValidHex(str) && str) || (isShortHex(str) && expandShortHex(str)) || consoleError(`expected color hex string, got '${str}'`) || ''
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

  // Compare against length 9 because the full hex string will have the `#` at the beginning of it
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
 * @returns {string} - The hex color string for example: '#001122' or with alpha: '#00112233'
 */
export function hexFromRGB (r, g, b, a) {
  return `#${toHexString(r)}${toHexString(g)}${toHexString(b)}${a ? toHexString(Math.floor(a * 255)) : ''}`
}

/**
 * Mix two colors together. The same way that SCSS does it
 *
 * Valid hex colors formats:
 * - #fff
 * - #0003
 * - #ffffff
 * - #00000033
 *
 * @param {string} color1 - Color 1 as a hex
 * @param {string} color2 - Color 2 as a hex
 * @param {number} [weight] - The percentage to mix them at. Default: 50
 * @returns {string} - The new mixed color as a hex for example: '#001122' or with alpha: '#00112233'
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
 * Valid hex colors formats:
 * - #fff
 * - #0003
 * - #ffffff
 * - #00000033
 *
 * @param {string} color - The hex color to lighten
 * @param {number} [weight] - The amount to lighten by.
 *                            Default: `15` to match the SCSS `light-increment` value of `7.5`
 *                            the way the math is handled here we double the weight to match the SCSS result
 * @returns {string} - The new lightened color as a full hex string, potentially with alpha
 */
export function lighten (color, weight = 15) {
  return mixColors('#ffffff', color, weight)
}

/**
 * Darken a color by a percentage
 *
 * Valid hex colors formats:
 * - #fff
 * - #0003
 * - #ffffff
 * - #00000033
 *
 * @param {string} color - The hex color to darken
 * @param {number} [weight] - The amount to darken by.
 *                            Default: `12.4` to match the SCSS `dark-increment` value of `6.2`
 *                            the way the math is handled here we double the weight to match the SCSS result
 * @returns {string} - The new darkened color as a full hex string, potentially with alpha
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

export const colorPalette = [
  {
    label: 'pink',
    color: '#e91e63',
    shades: [
      { label: 'pink-light6', color: '#fdebf1' },
      { label: 'pink-light5', color: '#faccdc' },
      { label: 'pink-light4', color: '#f7adc6' },
      { label: 'pink-light3', color: '#f48eb1' },
      { label: 'pink-light2', color: '#f16f9b' },
      { label: 'pink-light1', color: '#ee5085' },
      { label: 'pink-dark1', color: '#d31555' },
      { label: 'pink-dark2', color: '#b6124a' },
      { label: 'pink-dark3', color: '#990f3e' },
      { label: 'pink-dark4', color: '#7c0c32' },
      { label: 'pink-dark5', color: '#600927' },
      { label: 'pink-dark6', color: '#43071b' }
    ]
  },
  {
    label: 'purple',
    color: '#a741b9',
    shades: [
      { label: 'purple-light6', color: '#f9f2fa' },
      { label: 'purple-light5', color: '#eed9f2' },
      { label: 'purple-light4', color: '#e3c1e9' },
      { label: 'purple-light3', color: '#d8a8e1' },
      { label: 'purple-light2', color: '#cd90d8' },
      { label: 'purple-light1', color: '#c277cf' },
      { label: 'purple-dark1', color: '#9239a2' },
      { label: 'purple-dark2', color: '#7d318a' },
      { label: 'purple-dark3', color: '#682873' },
      { label: 'purple-dark4', color: '#53205b' },
      { label: 'purple-dark5', color: '#3d1844' },
      { label: 'purple-dark6', color: '#28102d' }
    ]
  },
  {
    label: 'deep-purple',
    color: '#673ab7',
    shades: [
      { label: 'deep-purple-light6', color: '#f1edf9' },
      { label: 'deep-purple-light5', color: '#daceef' },
      { label: 'deep-purple-light4', color: '#c2afe6' },
      { label: 'deep-purple-light3', color: '#ab90dc' },
      { label: 'deep-purple-light2', color: '#9471d2' },
      { label: 'deep-purple-light1', color: '#7c52c8' },
      { label: 'deep-purple-dark1', color: '#5b33a1' },
      { label: 'deep-purple-dark2', color: '#4e2c8b' },
      { label: 'deep-purple-dark3', color: '#422575' },
      { label: 'deep-purple-dark4', color: '#351e5f' },
      { label: 'deep-purple-dark5', color: '#291749' },
      { label: 'deep-purple-dark6', color: '#1c1033' }
    ]
  },
  {
    label: 'indigo',
    color: '#3f51b5',
    shades: [
      { label: 'indigo-light6', color: '#eff1fa' },
      { label: 'indigo-light5', color: '#d1d6ef' },
      { label: 'indigo-light4', color: '#b3bae4' },
      { label: 'indigo-light3', color: '#949fda' },
      { label: 'indigo-light2', color: '#7684cf' },
      { label: 'indigo-light1', color: '#5869c5' },
      { label: 'indigo-dark1', color: '#37479f' },
      { label: 'indigo-dark2', color: '#303e8a' },
      { label: 'indigo-dark3', color: '#283474' },
      { label: 'indigo-dark4', color: '#212a5f' },
      { label: 'indigo-dark5', color: '#192149' },
      { label: 'indigo-dark6', color: '#121734' }
    ]
  },
  {
    label: 'blue',
    color: '#2196f3',
    shades: [
      { label: 'blue-light6', color: '#e6f3fe' },
      { label: 'blue-light5', color: '#c6e4fc' },
      { label: 'blue-light4', color: '#a5d4fa' },
      { label: 'blue-light3', color: '#84c5f8' },
      { label: 'blue-light2', color: '#63b5f7' },
      { label: 'blue-light1', color: '#42a6f5' },
      { label: 'blue-dark1', color: '#0c85e5' },
      { label: 'blue-dark2', color: '#0b72c4' },
      { label: 'blue-dark3', color: '#095fa3' },
      { label: 'blue-dark4', color: '#074c82' },
      { label: 'blue-dark5', color: '#053961' },
      { label: 'blue-dark6', color: '#032540' }
    ]
  },
  {
    label: 'light-blue',
    color: '#03a9f4',
    shades: [
      { label: 'light-blue-light6', color: '#e7f7ff' },
      { label: 'light-blue-light5', color: '#c0ebfe' },
      { label: 'light-blue-light4', color: '#98defe' },
      { label: 'light-blue-light3', color: '#71d2fd' },
      { label: 'light-blue-light2', color: '#4ac5fd' },
      { label: 'light-blue-light1', color: '#22b9fc' },
      { label: 'light-blue-dark1', color: '#0393d5' },
      { label: 'light-blue-dark2', color: '#027eb6' },
      { label: 'light-blue-dark3', color: '#026896' },
      { label: 'light-blue-dark4', color: '#015277' },
      { label: 'light-blue-dark5', color: '#013d58' },
      { label: 'light-blue-dark6', color: '#012739' }
    ]
  },
  {
    label: 'cyan',
    color: '#04cbe5',
    shades: [
      { label: 'cyan-light6', color: '#e9fcff' },
      { label: 'cyan-light5', color: '#baf6fe' },
      { label: 'cyan-light4', color: '#8bf0fd' },
      { label: 'cyan-light3', color: '#5ceafc' },
      { label: 'cyan-light2', color: '#2ce3fb' },
      { label: 'cyan-light1', color: '#04d8f4' },
      { label: 'cyan-dark1', color: '#04b2c8' },
      { label: 'cyan-dark2', color: '#0398ac' },
      { label: 'cyan-dark3', color: '#037f8f' },
      { label: 'cyan-dark4', color: '#026673' },
      { label: 'cyan-dark5', color: '#024c56' },
      { label: 'cyan-dark6', color: '#01333a' }
    ]
  },
  {
    label: 'teal',
    color: '#1db3a8',
    shades: [
      { label: 'teal-light6', color: '#e2faf9' },
      { label: 'teal-light5', color: '#b8f3ef' },
      { label: 'teal-light4', color: '#8eede6' },
      { label: 'teal-light3', color: '#64e6dc' },
      { label: 'teal-light2', color: '#39dfd3' },
      { label: 'teal-light1', color: '#20c7bb' },
      { label: 'teal-dark1', color: '#199b92' },
      { label: 'teal-dark2', color: '#15847c' },
      { label: 'teal-dark3', color: '#116c65' },
      { label: 'teal-dark4', color: '#0e544f' },
      { label: 'teal-dark5', color: '#0a3c39' },
      { label: 'teal-dark6', color: '#062523' }
    ]
  },
  {
    label: 'green',
    color: '#4caf50',
    shades: [
      { label: 'green-light6', color: '#edf7ed' },
      { label: 'green-light5', color: '#d2ebd3' },
      { label: 'green-light4', color: '#b7e0b8' },
      { label: 'green-light3', color: '#9bd49e' },
      { label: 'green-light2', color: '#80c883' },
      { label: 'green-light1', color: '#65bc69' },
      { label: 'green-dark1', color: '#439b47' },
      { label: 'green-dark2', color: '#3a863d' },
      { label: 'green-dark3', color: '#327234' },
      { label: 'green-dark4', color: '#295e2b' },
      { label: 'green-dark5', color: '#204a22' },
      { label: 'green-dark6', color: '#173518' }
    ]
  },
  {
    label: 'light-green',
    color: '#90d73f',
    shades: [
      { label: 'light-green-light6', color: '#f4fbec' },
      { label: 'light-green-light5', color: '#e5f6d3' },
      { label: 'light-green-light4', color: '#d7f1b9' },
      { label: 'light-green-light3', color: '#c8eba0' },
      { label: 'light-green-light2', color: '#b9e687' },
      { label: 'light-green-light1', color: '#abe16d' },
      { label: 'light-green-dark1', color: '#80cc2a' },
      { label: 'light-green-dark2', color: '#70b225' },
      { label: 'light-green-dark3', color: '#609820' },
      { label: 'light-green-dark4', color: '#4f7d1a' },
      { label: 'light-green-dark5', color: '#3f6315' },
      { label: 'light-green-dark6', color: '#2e490f' }
    ]
  },
  {
    label: 'lime',
    color: '#cee029',
    shades: [
      { label: 'lime-light6', color: '#fafce9' },
      { label: 'lime-light5', color: '#f4f8ce' },
      { label: 'lime-light4', color: '#edf4b2' },
      { label: 'lime-light3', color: '#e7f097' },
      { label: 'lime-light2', color: '#e1ec7b' },
      { label: 'lime-light1', color: '#dae85f' },
      { label: 'lime-dark1', color: '#bbcc1e' },
      { label: 'lime-dark2', color: '#a1b01a' },
      { label: 'lime-dark3', color: '#889516' },
      { label: 'lime-dark4', color: '#6f7912' },
      { label: 'lime-dark5', color: '#565d0e' },
      { label: 'lime-dark6', color: '#3c420a' }
    ]
  },
  {
    label: 'yellow',
    color: '#ffe70f',
    shades: [
      { label: 'yellow-light6', color: '#fffce0' },
      { label: 'yellow-light5', color: '#fff9c4' },
      { label: 'yellow-light4', color: '#fff6a8' },
      { label: 'yellow-light3', color: '#fff38c' },
      { label: 'yellow-light2', color: '#fff170' },
      { label: 'yellow-light1', color: '#ffee54' },
      { label: 'yellow-dark1', color: '#eed700' },
      { label: 'yellow-dark2', color: '#cfba00' },
      { label: 'yellow-dark3', color: '#af9e00' },
      { label: 'yellow-dark4', color: '#908100' },
      { label: 'yellow-dark5', color: '#706500' },
      { label: 'yellow-dark6', color: '#504800' }
    ]
  },
  {
    label: 'amber',
    color: '#ffc107',
    shades: [
      { label: 'amber-light6', color: '#fffaed' },
      { label: 'amber-light5', color: '#fff1c6' },
      { label: 'amber-light4', color: '#ffe7a0' },
      { label: 'amber-light3', color: '#ffde7a' },
      { label: 'amber-light2', color: '#ffd454' },
      { label: 'amber-light1', color: '#ffcb2d' },
      { label: 'amber-dark1', color: '#e6ad00' },
      { label: 'amber-dark2', color: '#c79500' },
      { label: 'amber-dark3', color: '#a77d00' },
      { label: 'amber-dark4', color: '#886600' },
      { label: 'amber-dark5', color: '#684e00' },
      { label: 'amber-dark6', color: '#483600' }
    ]
  },
  {
    label: 'orange',
    color: '#ff9800',
    shades: [
      { label: 'orange-light6', color: '#fff5e6' },
      { label: 'orange-light5', color: '#ffe5bf' },
      { label: 'orange-light4', color: '#ffd699' },
      { label: 'orange-light3', color: '#ffc673' },
      { label: 'orange-light2', color: '#ffb74d' },
      { label: 'orange-light1', color: '#ffa726' },
      { label: 'orange-dark1', color: '#df8500' },
      { label: 'orange-dark2', color: '#c07200' },
      { label: 'orange-dark3', color: '#a05f00' },
      { label: 'orange-dark4', color: '#814d00' },
      { label: 'orange-dark5', color: '#613a00' },
      { label: 'orange-dark6', color: '#412700' }
    ]
  },
  {
    label: 'deep-orange',
    color: '#ff6825',
    shades: [
      { label: 'deep-orange-light6', color: '#fff0e9' },
      { label: 'deep-orange-light5', color: '#ffd9c8' },
      { label: 'deep-orange-light4', color: '#ffc2a8' },
      { label: 'deep-orange-light3', color: '#ffac87' },
      { label: 'deep-orange-light2', color: '#ff9566' },
      { label: 'deep-orange-light1', color: '#ff7f46' },
      { label: 'deep-orange-dark1', color: '#ff5205' },
      { label: 'deep-orange-dark2', color: '#e54600' },
      { label: 'deep-orange-dark3', color: '#c53d00' },
      { label: 'deep-orange-dark4', color: '#a63300' },
      { label: 'deep-orange-dark5', color: '#862900' },
      { label: 'deep-orange-dark6', color: '#661f00' }
    ]
  },
  {
    label: 'red',
    color: '#fa3317',
    shades: [
      { label: 'red-light6', color: '#fee3df' },
      { label: 'red-light5', color: '#fec6be' },
      { label: 'red-light4', color: '#fdaa9e' },
      { label: 'red-light3', color: '#fc8d7d' },
      { label: 'red-light2', color: '#fc705d' },
      { label: 'red-light1', color: '#fb543c' },
      { label: 'red-dark1', color: '#ec2205' },
      { label: 'red-dark2', color: '#cd1d04' },
      { label: 'red-dark3', color: '#ae1904' },
      { label: 'red-dark4', color: '#8f1403' },
      { label: 'red-dark5', color: '#701002' },
      { label: 'red-dark6', color: '#520c02' }
    ]
  },
  {
    label: 'brown',
    color: '#845848',
    shades: [
      { label: 'brown-light6', color: '#f2eae7' },
      { label: 'brown-light5', color: '#e2d1ca' },
      { label: 'brown-light4', color: '#d2b7ad' },
      { label: 'brown-light3', color: '#c39e90' },
      { label: 'brown-light2', color: '#b38473' },
      { label: 'brown-light1', color: '#a16b58' },
      { label: 'brown-dark1', color: '#744d3f' },
      { label: 'brown-dark2', color: '#634236' },
      { label: 'brown-dark3', color: '#53372d' },
      { label: 'brown-dark4', color: '#422c24' },
      { label: 'brown-dark5', color: '#32211b' },
      { label: 'brown-dark6', color: '#211612' }
    ]
  },
  {
    label: 'blue-grey',
    color: '#6c8693',
    shades: [
      { label: 'blue-grey-light6', color: '#f0f3f4' },
      { label: 'blue-grey-light5', color: '#dae1e4' },
      { label: 'blue-grey-light4', color: '#c4cfd4' },
      { label: 'blue-grey-light3', color: '#aebcc4' },
      { label: 'blue-grey-light2', color: '#98aab3' },
      { label: 'blue-grey-light1', color: '#8298a3' },
      { label: 'blue-grey-dark1', color: '#5f7581' },
      { label: 'blue-grey-dark2', color: '#51656f' },
      { label: 'blue-grey-dark3', color: '#44545c' },
      { label: 'blue-grey-dark4', color: '#36444a' },
      { label: 'blue-grey-dark5', color: '#293338' },
      { label: 'blue-grey-dark6', color: '#1c2226' }
    ]
  },
  {
    label: 'grey',
    color: '#848484',
    shades: [
      { label: 'grey-light6', color: '#f7f7f7' },
      { label: 'grey-light5', color: '#e4e4e4' },
      { label: 'grey-light4', color: '#d1d1d1' },
      { label: 'grey-light3', color: '#bdbdbd' },
      { label: 'grey-light2', color: '#aaaaaa' },
      { label: 'grey-light1', color: '#979797' },
      { label: 'grey-dark1', color: '#747474' },
      { label: 'grey-dark2', color: '#646464' },
      { label: 'grey-dark3', color: '#555555' },
      { label: 'grey-dark4', color: '#454545' },
      { label: 'grey-dark5', color: '#353535' },
      { label: 'grey-dark6', color: '#252525' }
    ]
  },
  { label: 'black', color: '#000' },
  { label: 'white', color: '#fff' },
  { label: 'transparent', color: 'transparent' },
  { label: 'inherit', color: 'inherit' }
]
