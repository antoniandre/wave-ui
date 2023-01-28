const shadeColor = (color, amount) => {
  return '#' + color.slice(1).match(/../g)
    .map(x => {
      x = +`0x${x}` + amount
      return (x < 0 ? 0 : (x > 255 ? 255 : x)).toString(16).padStart(2, 0)
    })
    .join('')
}

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

    for (let color in themeOfColors) {
      if (color === 'shades') continue // Skip if item is the `shades` container.
      color = { label: color, color: themeOfColors[color].replace('#', '') }
      const col = color.color
      if (col.length === 3) color.color = col[0] + '' + col[0] + col[1] + col[1] + col[2] + col[2]

      for (let i = 1; i <= 3; i++) {
        const lighterColor = shadeColor(`#${color.color}`, i * 40)
        const darkerColor = shadeColor(`#${color.color}`, -i * 40)
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
