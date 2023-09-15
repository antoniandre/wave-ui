export type WaveStatusColors = 'primary' | 'success' | 'error' | 'warning' | 'info';

export type WaveColorShades =
  'black' |
  'white' |
  'transparent' |
  'inherit' |
  'primary-light3' |
  'primary-light2' |
  'primary-light1' |
  'primary-dark1' |
  'primary-dark2' |
  'primary-dark3' |
  'success-light3' |
  'success-light2' |
  'success-light1' |
  'success-dark1' |
  'success-dark2' |
  'success-dark3' |
  'error-light3' |
  'error-light2' |
  'error-light1' |
  'error-dark1' |
  'error-dark2' |
  'error-dark3' |
  'warning-light3' |
  'warning-light2' |
  'warning-light1' |
  'warning-dark1' |
  'warning-dark2' |
  'warning-dark3' |
  'info-light3' |
  'info-light2' |
  'info-light1' |
  'info-dark1' |
  'info-dark2' |
  'info-dark3' |
  /** #fdebf1 */
  'pink-light6' |
  /** #faccdc */
  'pink-light5' |
  /** #f7adc6 */
  'pink-light4' |
  /** #f48eb1 */
  'pink-light3' |
  /** #f16f9b */
  'pink-light2' |
  /** #ee5085 */
  'pink-light1' |
  /** #e91e63 */
  'pink' |
  /** #d31555 */
  'pink-dark1' |
  /** #b6124a */
  'pink-dark2' |
  /** #990f3e */
  'pink-dark3' |
  /** #7c0c32 */
  'pink-dark4' |
  /** #600927 */
  'pink-dark5' |
  /** #43071b */
  'pink-dark6' |
  /** #f9f2fa */
  'purple-light6' |
  /** #eed9f2 */
  'purple-light5' |
  /** #e3c1e9 */
  'purple-light4' |
  /** #d8a8e1 */
  'purple-light3' |
  /** #cd90d8 */
  'purple-light2' |
  /** #c277cf */
  'purple-light1' |
  /** #a741b9 */
  'purple' |
  /** #9239a2 */
  'purple-dark1' |
  /** #7d318a */
  'purple-dark2' |
  /** #682873 */
  'purple-dark3' |
  /** #53205b */
  'purple-dark4' |
  /** #3d1844 */
  'purple-dark5' |
  /** #28102d */
  'purple-dark6' |
  /** #f1edf9 */
  'deep-purple-light6' |
  /** #daceef */
  'deep-purple-light5' |
  /** #c2afe6 */
  'deep-purple-light4' |
  /** #ab90dc */
  'deep-purple-light3' |
  /** #9471d2 */
  'deep-purple-light2' |
  /** #7c52c8 */
  'deep-purple-light1' |
  /** #673ab7 */
  'deep-purple' |
  /** #5b33a1 */
  'deep-purple-dark1' |
  /** #4e2c8b */
  'deep-purple-dark2' |
  /** #422575 */
  'deep-purple-dark3' |
  /** #351e5f */
  'deep-purple-dark4' |
  /** #291749 */
  'deep-purple-dark5' |
  /** #1c1033 */
  'deep-purple-dark6' |
  /** #eff1fa */
  'indigo-light6' |
  /** #d1d6ef */
  'indigo-light5' |
  /** #b3bae4 */
  'indigo-light4' |
  /** #949fda */
  'indigo-light3' |
  /** #7684cf */
  'indigo-light2' |
  /** #5869c5 */
  'indigo-light1' |
  /** #3f51b5 */
  'indigo' |
  /** #37479f */
  'indigo-dark1' |
  /** #303e8a */
  'indigo-dark2' |
  /** #283474 */
  'indigo-dark3' |
  /** #212a5f */
  'indigo-dark4' |
  /** #192149 */
  'indigo-dark5' |
  /** #121734 */
  'indigo-dark6' |
  /** #e6f3fe */
  'blue-light6' |
  /** #c6e4fc */
  'blue-light5' |
  /** #a5d4fa */
  'blue-light4' |
  /** #84c5f8 */
  'blue-light3' |
  /** #63b5f7 */
  'blue-light2' |
  /** #42a6f5 */
  'blue-light1' |
  /** #2196f3 */
  'blue' |
  /** #0c85e5 */
  'blue-dark1' |
  /** #0b72c4 */
  'blue-dark2' |
  /** #095fa3 */
  'blue-dark3' |
  /** #074c82 */
  'blue-dark4' |
  /** #053961 */
  'blue-dark5' |
  /** #032540 */
  'blue-dark6' |
  /** #e7f7ff */
  'light-blue-light6' |
  /** #c0ebfe */
  'light-blue-light5' |
  /** #98defe */
  'light-blue-light4' |
  /** #71d2fd */
  'light-blue-light3' |
  /** #4ac5fd */
  'light-blue-light2' |
  /** #22b9fc */
  'light-blue-light1' |
  /** #03a9f4 */
  'light-blue' |
  /** #0393d5 */
  'light-blue-dark1' |
  /** #027eb6 */
  'light-blue-dark2' |
  /** #026896 */
  'light-blue-dark3' |
  /** #015277 */
  'light-blue-dark4' |
  /** #013d58 */
  'light-blue-dark5' |
  /** #012739 */
  'light-blue-dark6' |
  /** #e9fcff */
  'cyan-light6' |
  /** #baf6fe */
  'cyan-light5' |
  /** #8bf0fd */
  'cyan-light4' |
  /** #5ceafc */
  'cyan-light3' |
  /** #2ce3fb */
  'cyan-light2' |
  /** #04d8f4 */
  'cyan-light1' |
  /** #04cbe5 */
  'cyan' |
  /** #04b2c8 */
  'cyan-dark1' |
  /** #0398ac */
  'cyan-dark2' |
  /** #037f8f */
  'cyan-dark3' |
  /** #026673 */
  'cyan-dark4' |
  /** #024c56 */
  'cyan-dark5' |
  /** #01333a */
  'cyan-dark6' |
  /** #e2faf9 */
  'teal-light6' |
  /** #b8f3ef */
  'teal-light5' |
  /** #8eede6 */
  'teal-light4' |
  /** #64e6dc */
  'teal-light3' |
  /** #39dfd3 */
  'teal-light2' |
  /** #20c7bb */
  'teal-light1' |
  /** #1db3a8 */
  'teal' |
  /** #199b92 */
  'teal-dark1' |
  /** #15847c */
  'teal-dark2' |
  /** #116c65 */
  'teal-dark3' |
  /** #0e544f */
  'teal-dark4' |
  /** #0a3c39 */
  'teal-dark5' |
  /** #062523 */
  'teal-dark6' |
  /** #edf7ed */
  'green-light6' |
  /** #d2ebd3 */
  'green-light5' |
  /** #b7e0b8 */
  'green-light4' |
  /** #9bd49e */
  'green-light3' |
  /** #80c883 */
  'green-light2' |
  /** #65bc69 */
  'green-light1' |
  /** #4caf50 */
  'green' |
  /** #439b47 */
  'green-dark1' |
  /** #3a863d */
  'green-dark2' |
  /** #327234 */
  'green-dark3' |
  /** #295e2b */
  'green-dark4' |
  /** #204a22 */
  'green-dark5' |
  /** #173518 */
  'green-dark6' |
  /** #f4fbec */
  'light-green-light6' |
  /** #e5f6d3 */
  'light-green-light5' |
  /** #d7f1b9 */
  'light-green-light4' |
  /** #c8eba0 */
  'light-green-light3' |
  /** #b9e687 */
  'light-green-light2' |
  /** #abe16d */
  'light-green-light1' |
  /** #90d73f */
  'light-green' |
  /** #80cc2a */
  'light-green-dark1' |
  /** #70b225 */
  'light-green-dark2' |
  /** #609820 */
  'light-green-dark3' |
  /** #4f7d1a */
  'light-green-dark4' |
  /** #3f6315 */
  'light-green-dark5' |
  /** #2e490f */
  'light-green-dark6' |
  /** #fafce9 */
  'lime-light6' |
  /** #f4f8ce */
  'lime-light5' |
  /** #edf4b2 */
  'lime-light4' |
  /** #e7f097 */
  'lime-light3' |
  /** #e1ec7b */
  'lime-light2' |
  /** #dae85f */
  'lime-light1' |
  /** #cee029 */
  'lime' |
  /** #bbcc1e */
  'lime-dark1' |
  /** #a1b01a */
  'lime-dark2' |
  /** #889516 */
  'lime-dark3' |
  /** #6f7912 */
  'lime-dark4' |
  /** #565d0e */
  'lime-dark5' |
  /** #3c420a */
  'lime-dark6' |
  /** #fffce0 */
  'yellow-light6' |
  /** #fff9c4 */
  'yellow-light5' |
  /** #fff6a8 */
  'yellow-light4' |
  /** #fff38c */
  'yellow-light3' |
  /** #fff170 */
  'yellow-light2' |
  /** #ffee54 */
  'yellow-light1' |
  /** #ffe70f */
  'yellow' |
  /** #eed700 */
  'yellow-dark1' |
  /** #cfba00 */
  'yellow-dark2' |
  /** #af9e00 */
  'yellow-dark3' |
  /** #908100 */
  'yellow-dark4' |
  /** #706500 */
  'yellow-dark5' |
  /** #504800 */
  'yellow-dark6' |
  /** #fffaed */
  'amber-light6' |
  /** #fff1c6 */
  'amber-light5' |
  /** #ffe7a0 */
  'amber-light4' |
  /** #ffde7a */
  'amber-light3' |
  /** #ffd454 */
  'amber-light2' |
  /** #ffcb2d */
  'amber-light1' |
  /** #ffc107 */
  'amber' |
  /** #e6ad00 */
  'amber-dark1' |
  /** #c79500 */
  'amber-dark2' |
  /** #a77d00 */
  'amber-dark3' |
  /** #886600 */
  'amber-dark4' |
  /** #684e00 */
  'amber-dark5' |
  /** #483600 */
  'amber-dark6' |
  /** #fff5e6 */
  'orange-light6' |
  /** #ffe5bf */
  'orange-light5' |
  /** #ffd699 */
  'orange-light4' |
  /** #ffc673 */
  'orange-light3' |
  /** #ffb74d */
  'orange-light2' |
  /** #ffa726 */
  'orange-light1' |
  /** #ff9800 */
  'orange' |
  /** #df8500 */
  'orange-dark1' |
  /** #c07200 */
  'orange-dark2' |
  /** #a05f00 */
  'orange-dark3' |
  /** #814d00 */
  'orange-dark4' |
  /** #613a00 */
  'orange-dark5' |
  /** #412700 */
  'orange-dark6' |
  /** #fff0e9 */
  'deep-orange-light6' |
  /** #ffd9c8 */
  'deep-orange-light5' |
  /** #ffc2a8 */
  'deep-orange-light4' |
  /** #ffac87 */
  'deep-orange-light3' |
  /** #ff9566 */
  'deep-orange-light2' |
  /** #ff7f46 */
  'deep-orange-light1' |
  /** #ff6825 */
  'deep-orange' |
  /** #ff5205 */
  'deep-orange-dark1' |
  /** #e54600 */
  'deep-orange-dark2' |
  /** #c53d00 */
  'deep-orange-dark3' |
  /** #a63300 */
  'deep-orange-dark4' |
  /** #862900 */
  'deep-orange-dark5' |
  /** #661f00 */
  'deep-orange-dark6' |
  /** #fee3df */
  'red-light6' |
  /** #fec6be */
  'red-light5' |
  /** #fdaa9e */
  'red-light4' |
  /** #fc8d7d */
  'red-light3' |
  /** #fc705d */
  'red-light2' |
  /** #fb543c */
  'red-light1' |
  /** #fa3317 */
  'red' |
  /** #ec2205 */
  'red-dark1' |
  /** #cd1d04 */
  'red-dark2' |
  /** #ae1904 */
  'red-dark3' |
  /** #8f1403 */
  'red-dark4' |
  /** #701002 */
  'red-dark5' |
  /** #520c02 */
  'red-dark6' |
  /** #f2eae7 */
  'brown-light6' |
  /** #e2d1ca */
  'brown-light5' |
  /** #d2b7ad */
  'brown-light4' |
  /** #c39e90 */
  'brown-light3' |
  /** #b38473 */
  'brown-light2' |
  /** #a16b58 */
  'brown-light1' |
  /** #845848 */
  'brown' |
  /** #744d3f */
  'brown-dark1' |
  /** #634236 */
  'brown-dark2' |
  /** #53372d */
  'brown-dark3' |
  /** #422c24 */
  'brown-dark4' |
  /** #32211b */
  'brown-dark5' |
  /** #211612 */
  'brown-dark6' |
  /** #f0f3f4 */
  'blue-grey-light6' |
  /** #dae1e4 */
  'blue-grey-light5' |
  /** #c4cfd4 */
  'blue-grey-light4' |
  /** #aebcc4 */
  'blue-grey-light3' |
  /** #98aab3 */
  'blue-grey-light2' |
  /** #8298a3 */
  'blue-grey-light1' |
  /** #6c8693 */
  'blue-grey' |
  /** #5f7581 */
  'blue-grey-dark1' |
  /** #51656f */
  'blue-grey-dark2' |
  /** #44545c */
  'blue-grey-dark3' |
  /** #36444a */
  'blue-grey-dark4' |
  /** #293338 */
  'blue-grey-dark5' |
  /** #1c2226 */
  'blue-grey-dark6' |
  /** #f7f7f7 */
  'grey-light6' |
  /** #e4e4e4 */
  'grey-light5' |
  /** #d1d1d1 */
  'grey-light4' |
  /** #bdbdbd */
  'grey-light3' |
  /** #aaaaaa */
  'grey-light2' |
  /** #979797 */
  'grey-light1' |
  /** #848484 */
  'grey' |
  /** #747474 */
  'grey-dark1' |
  /** #646464 */
  'grey-dark2' |
  /** #555555 */
  'grey-dark3' |
  /** #454545 */
  'grey-dark4' |
  /** #353535 */
  'grey-dark5' |
  /** #252525 */
  'grey-dark6'

/**
 * Can be one of the preset colors or a custom one if you've got custom css colors set
 * Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the `colors` knowledge base page).
 * Providing a color hex, rgb(a) or hsl(a) will not work.
 * @see https://antoniandre.github.io/wave-ui/colors
 */
export type WaveColor = WaveStatusColors | WaveColorShades
