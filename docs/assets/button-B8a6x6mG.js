import{C as e,N as t,W as n,_t as r,bt as i,c as a,d as o,g as s,h as c,k as l,m as u}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as d}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{L as f}from"./index-BhRaCC4I.js";function p(d,f,p,m,h,g){let _=t(`title-link`),v=t(`w-button`),y=t(`w-flex`),b=t(`example`),x=t(`w-icon`);return l(),o(`div`,null,[s(_,{h2:``},{default:n(()=>[...f[2]||=[c(`Default`,-1)]]),_:1}),f[112]||=a(`p`,null,[c(`By default (if no `),a(`code`,null,`color`),c(` or `),a(`code`,null,`bg-color`),c(` is applied) the primary color will be applied.`)],-1),s(v,{class:`ma1`},{default:n(()=>[...f[3]||=[c(`default`,-1)]]),_:1}),s(_,{h2:``},{default:n(()=>[...f[4]||=[c(`Colors`,-1)]]),_:1}),f[113]||=u(`<p>Setting colors on buttons is quite straightforward:
a text color is set via the attribute <code>color</code>, and a background color is set via the
attribute <code>bg-color</code>.<br>
This allows you to easily mix a background color with a different text color of your choice.<br>
If no <code>color</code> or <code>bg-color</code> is set, the <code>bg-color</code> will be set to primary by default.<br><br>

Here is an example of buttons using all types of colors as a background: status colors, primary color,
secondary color and a color palette color shade.</p><p><strong class="mr1">Note:</strong><ul><li>The 4 status colors have a white text by default on both light and dark themes.</li><li>The primary color is usually standing out from the background by a higher contrast difference.
So when used as a background in a light theme the primary color is considered dark and has a white
text by default, while in the dark theme, it will have a black text by default.
You can override this color with <code>.w-app .primary--bg {color: #000;}</code>.</li></ul></p>`,2),s(b,null,{pug:n(()=>[...f[12]||=[c(`w-flex.wrap
  w-button.ma1(bg-color="success") success
  w-button.ma1(bg-color="error") error
  w-button.ma1(bg-color="warning") warning
  w-button.ma1(bg-color="info") info
  w-button.ma1 primary
  w-button.ma1(bg-color="secondary") secondary
  w-button.ma1(bg-color="purple-light4") purple-light4`,-1)]]),html:n(()=>[...f[13]||=[c(`<w-flex class="wrap">
  <w-button class="ma1" bg-color="success">success</w-button>
  <w-button class="ma1" bg-color="error">error</w-button>
  <w-button class="ma1" bg-color="warning">warning</w-button>
  <w-button class="ma1" bg-color="info">info</w-button>
  <w-button class="ma1">primary</w-button>
  <w-button class="ma1" bg-color="secondary">secondary</w-button>
  <w-button class="ma1" bg-color="purple-light4">purple-light4</w-button>
</w-flex>
`,-1)]]),default:n(()=>[s(y,{class:`wrap`},{default:n(()=>[s(v,{class:`ma1`,"bg-color":`success`},{default:n(()=>[...f[5]||=[c(`success`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`error`},{default:n(()=>[...f[6]||=[c(`error`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`warning`},{default:n(()=>[...f[7]||=[c(`warning`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`info`},{default:n(()=>[...f[8]||=[c(`info`,-1)]]),_:1}),s(v,{class:`ma1`},{default:n(()=>[...f[9]||=[c(`primary`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`secondary`},{default:n(()=>[...f[10]||=[c(`secondary`,-1)]]),_:1}),s(v,e({class:`ma1`,"bg-color":`purple-light4`},{[d.$store.state.darkMode?`light`:`dark`]:!0}),{default:n(()=>[...f[11]||=[c(`purple-light4`,-1)]]),_:1},16)]),_:1})]),_:1}),f[114]||=a(`h3`,null,`Mix background and text colors`,-1),f[115]||=a(`p`,null,[c(`Like in most components, you can set a `),a(`code`,null,`color`),c(` for the text and a `),a(`code`,null,`bg-color`),c(` for the
background.`)],-1),s(b,null,{pug:n(()=>[...f[17]||=[c(`w-button.ma1(bg-color="success" color="yellow-light2") success
w-button.ma1(bg-color="error" color="amber-light2") error
w-button.ma1(bg-color="primary" color="success-light2") warning`,-1)]]),html:n(()=>[...f[18]||=[c(`<w-button
  class="ma1"
  bg-color="success"
  color="yellow-light2">
  success
</w-button>

<w-button
  class="ma1"
  bg-color="error"
  color="amber-light2">
  error
</w-button>

<w-button
  class="ma1"
  bg-color="primary"
  color="success-light2">
  warning
</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,"bg-color":`success`,color:`yellow-light2`},{default:n(()=>[...f[14]||=[c(`success`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`error`,color:`amber-light2`},{default:n(()=>[...f[15]||=[c(`error`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`primary`,color:`success-light2`},{default:n(()=>[...f[16]||=[c(`warning`,-1)]]),_:1})]),_:1}),f[116]||=u(`<h3>Dark / Light</h3><p>By default the <code>primary</code> color is considered dark as well as the four status colors:
<code>success</code>, <code>error</code>, <code>warning</code> &amp; <code>info</code>.
They will therefore have a white text by default when used as a background color.<br>
For the rest you can use the <code>dark</code> prop or set the <code>color</code> prop to \`white\`.</p>`,2),s(b,null,{pug:n(()=>[...f[21]||=[c(`w-button.ma1(bg-color="primary-light3") normal
w-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right
w-button.ma1(bg-color="primary-light3" dark) dark`,-1)]]),html:n(()=>[...f[22]||=[c(`<w-button class="ma1" bg-color="primary-light3">normal</w-button>

<w-icon class="mx6" size="2.5em" class="grey-light3">mdi mdi-arrow-right</w-icon>

<w-button class="ma1" bg-color="primary-light3" dark>dark</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,"bg-color":d.$store.state.darkMode?`primary-dark3`:`primary-light3`},{default:n(()=>[...f[19]||=[c(`normal`,-1)]]),_:1},8,[`bg-color`]),s(x,{class:r([`mx6`,d.$store.state.darkMode?`grey-dark3`:`grey-light3`]),size:`2.5em`},{default:n(()=>[...f[20]||=[c(`mdi mdi-arrow-right`,-1)]]),_:1},8,[`class`]),s(v,e({class:`ma1`,"bg-color":d.$store.state.darkMode?`primary-dark3`:`primary-light3`},{[`${d.$store.state.darkMode?`light`:`dark`}`]:!0}),{default:n(()=>[c(i(d.$store.state.darkMode?`light`:`dark`),1)]),_:1},16,[`bg-color`])]),_:1}),s(_,{h2:``},{default:n(()=>[...f[23]||=[c(`Sizes`,-1)]]),_:1}),f[117]||=u(`<p>The button size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>width</code> and <code>height</code> props.</p>`,1),s(b,null,{pug:n(()=>[...f[34]||=[c(`w-button.ma1(bg-color="secondary" xs) extra small
w-button.ma1(bg-color="secondary" sm) small
w-button.ma1(bg-color="secondary" md) medium
w-button.ma1(bg-color="secondary" lg) large
w-button.ma1(bg-color="secondary" xl) extra large
br
br
w-button.ma1(bg-color="primary" xs) extra small
w-button.ma1(bg-color="primary" sm) small
w-button.ma1(bg-color="primary" md) medium
w-button.ma1(bg-color="primary" lg) large
w-button.ma1(bg-color="primary" xl) extra large`,-1)]]),html:n(()=>[...f[35]||=[c(`<w-button class="ma1" bg-color="secondary" xs>extra small</w-button>
<w-button class="ma1" bg-color="secondary" sm>small</w-button>
<w-button class="ma1" bg-color="secondary" md>medium</w-button>
<w-button class="ma1" bg-color="secondary" lg>large</w-button>
<w-button class="ma1" bg-color="secondary" xl>extra large</w-button>
<br>
<br>
<w-button class="ma1" bg-color="primary" xs>extra small</w-button>
<w-button class="ma1" bg-color="primary" sm>small</w-button>
<w-button class="ma1" bg-color="primary" md>medium</w-button>
<w-button class="ma1" bg-color="primary" lg>large</w-button>
<w-button class="ma1" bg-color="primary" xl>extra large</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,"bg-color":`secondary`,xs:``},{default:n(()=>[...f[24]||=[c(`extra small`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`secondary`,sm:``},{default:n(()=>[...f[25]||=[c(`small`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`secondary`,md:``},{default:n(()=>[...f[26]||=[c(`medium`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`secondary`,lg:``},{default:n(()=>[...f[27]||=[c(`large`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`secondary`,xl:``},{default:n(()=>[...f[28]||=[c(`extra large`,-1)]]),_:1}),f[36]||=a(`br`,null,null,-1),f[37]||=a(`br`,null,null,-1),s(v,{class:`ma1`,"bg-color":`primary`,xs:``},{default:n(()=>[...f[29]||=[c(`extra small`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`primary`,sm:``},{default:n(()=>[...f[30]||=[c(`small`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`primary`,md:``},{default:n(()=>[...f[31]||=[c(`medium`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`primary`,lg:``},{default:n(()=>[...f[32]||=[c(`large`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`primary`,xl:``},{default:n(()=>[...f[33]||=[c(`extra large`,-1)]]),_:1})]),_:1}),f[118]||=a(`h3`,null,`Stretch to the available space`,-1),f[119]||=a(`ul`,null,[a(`li`,null,[c(`In a flex content, you can add the `),a(`code`,null,`grow`),c(` class.`)]),a(`li`,null,[c(`In a block context, you can add the `),a(`code`,null,`fill-width`),c(` class.`)])],-1),s(b,null,{pug:n(()=>[...f[40]||=[c(`w-flex
  w-button.grow Block Button
br
w-button.fill-width Block Button`,-1)]]),html:n(()=>[...f[41]||=[c(`<w-flex>
  <w-button class="grow">primary</w-button>
</w-flex>
<br/>
<w-button class="fill-width">primary</w-button>
`,-1)]]),default:n(()=>[s(y,null,{default:n(()=>[s(v,{class:`grow`},{default:n(()=>[...f[38]||=[c(`Block Button`,-1)]]),_:1})]),_:1}),f[42]||=a(`br`,null,null,-1),s(v,{class:`fill-width`},{default:n(()=>[...f[39]||=[c(`Block Button`,-1)]]),_:1})]),_:1}),f[120]||=a(`h3`,null,`Custom width and height`,-1),f[121]||=a(`p`,null,[c(`Even though you can easily override the dimensions via CSS, a `),a(`code`,null,`width`),c(` and `),a(`code`,null,`height`),c(` props
are available on the `),a(`span`,{class:`code`},`w-button`),c(` component.`)],-1),s(b,{"content-class":`pt6`},{pug:n(()=>[...f[44]||=[c(`w-button.ma1(bg-color="info" width="10em" :height="18") info`,-1)]]),html:n(()=>[...f[45]||=[c(`<w-button
  class="ma1 grow"
  bg-color="info"
  width="10em"
  :height="18">
  info
</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,"bg-color":`info`,width:`10em`,height:18},{default:n(()=>[...f[43]||=[c(`info`,-1)]]),_:1})]),_:1}),s(_,{h2:``},{default:n(()=>[...f[46]||=[c(`Outline`,-1)]]),_:1}),s(b,null,{pug:n(()=>[...f[53]||=[c(`w-button.ma1(color="primary" outline xs) extra small
w-button.ma1(color="primary" outline sm) small
w-button.ma1(color="primary" outline md) medium
w-button.ma1(color="primary" outline lg) large
w-button.ma1(color="primary" outline xl) extra large
w-button.ma1(color="primary" outline disabled) disabled`,-1)]]),html:n(()=>[...f[54]||=[c(`<w-button class="ma1" color="primary" outline xs>extra small</w-button>
<w-button class="ma1" color="primary" outline sm>small</w-button>
<w-button class="ma1" color="primary" outline md>medium</w-button>
<w-button class="ma1" color="primary" outline lg>large</w-button>
<w-button class="ma1" color="primary" outline xl>extra large</w-button>
<w-button class="ma1" color="primary" outline disabled>disabled</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,color:`primary`,outline:``,xs:``},{default:n(()=>[...f[47]||=[c(`extra small`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,outline:``,sm:``},{default:n(()=>[...f[48]||=[c(`small`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,outline:``,md:``},{default:n(()=>[...f[49]||=[c(`medium`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,outline:``,lg:``},{default:n(()=>[...f[50]||=[c(`large`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,outline:``,xl:``},{default:n(()=>[...f[51]||=[c(`extra large`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,outline:``,disabled:``},{default:n(()=>[...f[52]||=[c(`disabled`,-1)]]),_:1})]),_:1}),s(_,{h2:``},{default:n(()=>[...f[55]||=[c(`Text`,-1)]]),_:1}),s(b,null,{pug:n(()=>[...f[62]||=[c(`w-button.ma1(color="primary" text xs) extra small
w-button.ma1(color="primary" text sm) small
w-button.ma1(color="primary" text md) medium
w-button.ma1(color="primary" text lg) large
w-button.ma1(color="primary" text xl) extra large
w-button.ma1(color="primary" text disabled) disabled`,-1)]]),html:n(()=>[...f[63]||=[c(`<w-button class="ma1" color="primary" text xs>extra small</w-button>
<w-button class="ma1" color="primary" text sm>small</w-button>
<w-button class="ma1" color="primary" text md>medium</w-button>
<w-button class="ma1" color="primary" text lg>large</w-button>
<w-button class="ma1" color="primary" text xl>extra large</w-button>
<w-button class="ma1" color="primary" text disabled>disabled</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,color:`primary`,text:``,xs:``},{default:n(()=>[...f[56]||=[c(`extra small`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,text:``,sm:``},{default:n(()=>[...f[57]||=[c(`small`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,text:``,md:``},{default:n(()=>[...f[58]||=[c(`medium`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,text:``,lg:``},{default:n(()=>[...f[59]||=[c(`large`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,text:``,xl:``},{default:n(()=>[...f[60]||=[c(`extra large`,-1)]]),_:1}),s(v,{class:`ma1`,color:`primary`,text:``,disabled:``},{default:n(()=>[...f[61]||=[c(`disabled`,-1)]]),_:1})]),_:1}),s(_,{h2:``},{default:n(()=>[...f[64]||=[c(`Round & tile`,-1)]]),_:1}),s(b,{"content-class":`w-flex`},{pug:n(()=>[...f[69]||=[c(`w-button.ma1(round) round
w-button.ma1.mr6(bg-color="secondary" round) round
w-button.ma1(tile) tile
w-button.ma1(bg-color="secondary" tile) tile`,-1)]]),html:n(()=>[...f[70]||=[c(`<w-button class="ma1" round>round</w-button>
<w-button class="ma1 mr6" bg-color="secondary" round>round</w-button>
<w-button class="ma1" tile>tile</w-button>
<w-button class="ma1" bg-color="secondary" tile>tile</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,round:``},{default:n(()=>[...f[65]||=[c(`round`,-1)]]),_:1}),s(v,{class:`ma1 mr6`,"bg-color":`secondary`,round:``},{default:n(()=>[...f[66]||=[c(`round`,-1)]]),_:1}),s(v,{class:`ma1`,tile:``},{default:n(()=>[...f[67]||=[c(`tile`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`secondary`,tile:``},{default:n(()=>[...f[68]||=[c(`tile`,-1)]]),_:1})]),_:1}),s(_,{h2:``},{default:n(()=>[...f[71]||=[c(`Shadow`,-1)]]),_:1}),s(b,{"content-class":`w-flex`},{pug:n(()=>[...f[76]||=[c(`w-button.ma1(bg-color="success" shadow) success
w-button.ma1(bg-color="error" shadow) error
w-button.ma1(bg-color="warning" shadow) warning
w-button.ma1(bg-color="info" shadow) info`,-1)]]),html:n(()=>[...f[77]||=[c(`<w-button class="ma1" bg-color="success" shadow>success</w-button>
<w-button class="ma1" bg-color="error" shadow>error</w-button>
<w-button class="ma1" bg-color="warning" shadow>warning</w-button>
<w-button class="ma1" bg-color="info" shadow>info</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,"bg-color":`success`,shadow:``},{default:n(()=>[...f[72]||=[c(`success`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`error`,shadow:``},{default:n(()=>[...f[73]||=[c(`error`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`warning`,shadow:``},{default:n(()=>[...f[74]||=[c(`warning`,-1)]]),_:1}),s(v,{class:`ma1`,"bg-color":`info`,shadow:``},{default:n(()=>[...f[75]||=[c(`info`,-1)]]),_:1})]),_:1}),s(_,{h2:``},{default:n(()=>[...f[78]||=[c(`Icons & mixed content`,-1)]]),_:1}),f[122]||=a(`p`,null,`Icon buttons are rounded by default.`,-1),s(b,null,{pug:n(()=>[...f[83]||=[c(`w-button.ma1(bg-color="error" icon="wi-cross")
w-button.ma1.mr6(bg-color="success" icon="wi-check")

w-button.ma1(bg-color="error")
  w-icon.mr1 wi-cross
  | Cancel
w-button.ma1(bg-color="success")
  w-icon.mr1 wi-check
  | Save`,-1)]]),html:n(()=>[...f[84]||=[c(`<w-button class="ma1" bg-color="error" icon="wi-cross"></w-button>
<w-button class="ma1 mr6" bg-color="success" icon="wi-check"></w-button>

<w-button class="ma1" bg-color="error">
  <w-icon class="mr1">wi-cross</w-icon>
  Cancel
</w-button>
<w-button class="ma1" bg-color="success">
  <w-icon class="mr1">wi-check</w-icon>
  Save
</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,"bg-color":`error`,icon:`wi-cross`}),s(v,{class:`ma1 mr6`,"bg-color":`success`,icon:`wi-check`}),s(v,{class:`ma1`,"bg-color":`error`},{default:n(()=>[s(x,{class:`mr1`},{default:n(()=>[...f[79]||=[c(`wi-cross`,-1)]]),_:1}),f[80]||=c(`Cancel`,-1)]),_:1}),s(v,{class:`ma1`,"bg-color":`success`},{default:n(()=>[s(x,{class:`mr1`},{default:n(()=>[...f[81]||=[c(`wi-check`,-1)]]),_:1}),f[82]||=c(`Save`,-1)]),_:1})]),_:1}),s(_,{h3:``,slug:`more-control-on-icons`},{default:n(()=>[...f[85]||=[c(`More control on icons using the `,-1),a(`code`,null,`icon-props`,-1)]]),_:1}),s(b,{"content-class":`w-flex`},{pug:n(()=>[...f[87]||=[c(`w-button(icon="wi-spinner" :icon-props="{ spin: true }") default`,-1)]]),html:n(()=>[...f[88]||=[c(`<w-button
  icon="wi-spinner"
  :icon-props="{ spin: true }">
</w-button>
`,-1)]]),default:n(()=>[s(v,{icon:`wi-spinner`,"icon-props":{spin:!0}},{default:n(()=>[...f[86]||=[c(`default`,-1)]]),_:1})]),_:1}),s(_,{h2:``},{default:n(()=>[...f[89]||=[c(`Loading spinner & custom loader`,-1)]]),_:1}),s(b,{"content-class":`w-flex`},{pug:n(()=>[...f[95]||=[c(`w-button.ma1(
  :loading="button1loading"
  @click="buttonDoLoading(1)")
  w-icon.mr1 wi-check
  | Save

w-button.ma1.px4(
  :loading="button2loading"
  @click="buttonDoLoading(2)")
  w-icon.mr1 wi-check
  | Save
  template(#loading) Loading...`,-1)]]),html:n(()=>[...f[96]||=[c(`<w-button
  class="ma1"
  :loading="button1loading"
  @click="buttonDoLoading(1)">
  <w-icon class="mr1" >wi-check</w-icon>
  Save
</w-button>

<w-button
  class="ma1 px4"
  :loading="button2loading"
  @click="buttonDoLoading(2)">
  <w-icon class="mr1" >wi-check</w-icon>
  Save
  <template #loading>Loading...</template>
</w-button>`,-1)]]),js:n(()=>[...f[97]||=[c(`data: () => ({
  button1loading: false,
  button2loading: false
}),
methods: {
  buttonDoLoading (id) {
    this[\`button\${id}loading\`] = true
    setTimeout(() => (this[\`button\${id}loading\`] = false), 3000)
  }
}
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,loading:d.button1loading,onClick:f[0]||=e=>g.buttonDoLoading(1)},{default:n(()=>[s(x,{class:`mr1`},{default:n(()=>[...f[90]||=[c(`wi-check`,-1)]]),_:1}),f[91]||=c(`Save`,-1)]),_:1},8,[`loading`]),s(v,{class:`ma1 px4`,loading:d.button2loading,onClick:f[1]||=e=>g.buttonDoLoading(2)},{loading:n(()=>[...f[93]||=[c(`Loading...`,-1)]]),default:n(()=>[s(x,{class:`mr1`},{default:n(()=>[...f[92]||=[c(`wi-check`,-1)]]),_:1}),f[94]||=c(`Save`,-1)]),_:1},8,[`loading`])]),_:1}),s(_,{h2:``},{default:n(()=>[...f[98]||=[c(`Links`,-1)]]),_:1}),f[123]||=u(`<p>If you are using Vue Router, all the links will automatically be <strong class="code">router-link</strong>s
unless they start with <code>http</code> or <code>https</code>.<br>
In some cases, you may want to use a normal link instead of a <strong class="code">router-link</strong>, for
instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code>
prop to force a normal link.<br>
Note that you are also free to add a <code>target=&quot;_blank&quot;</code> attribute if you want to open the
link in a new tab.
</p>`,1),s(b,{"content-class":`w-flex`},{pug:n(()=>[...f[105]||=[c(`w-button.ma1(route="/getting-started")
  | Getting started
  w-icon.ml1 wi-chevron-right

w-button.ma1(
  route="https://github.com/antoniandre/wave-ui"
  target="_blank")
  | Github
  w-icon.ml2(sm) mdi mdi-open-in-new

w-button.ma1(route="https://github.com/antoniandre/wave-ui" target="_blank" disabled)
  | Disabled button with link
  w-icon.ml2(sm) mdi mdi-open-in-new`,-1)]]),html:n(()=>[...f[106]||=[c(`<w-button
  class="ma1"
  route="/getting-started">
  Getting started
  <w-icon class="ml1">wi-chevron-right</w-icon>
</w-button>

<w-button
  class="ma1"
  route="https://github.com/antoniandre/wave-ui"
  target="_blank"
  disabled>
  Github
  <w-icon class="ml2" sm>mdi mdi-open-in-new</w-icon>
</w-button>

<w-button
  class="ma1"
  route="https://github.com/antoniandre/wave-ui"
  target="_blank"
  disabled>
  Disabled button with link
  <w-icon class="ml2" sm>mdi mdi-open-in-new</w-icon>
</w-button>
`,-1)]]),default:n(()=>[s(v,{class:`ma1`,route:`/getting-started`},{default:n(()=>[f[100]||=c(`Getting started`,-1),s(x,{class:`ml1`},{default:n(()=>[...f[99]||=[c(`wi-chevron-right`,-1)]]),_:1})]),_:1}),s(v,{class:`ma1`,route:`https://github.com/antoniandre/wave-ui`,target:`_blank`},{default:n(()=>[f[102]||=c(`Github`,-1),s(x,{class:`ml2`,sm:``},{default:n(()=>[...f[101]||=[c(`mdi mdi-open-in-new`,-1)]]),_:1})]),_:1}),s(v,{class:`ma1`,route:`https://github.com/antoniandre/wave-ui`,target:`_blank`,disabled:``},{default:n(()=>[f[104]||=c(`Disabled button with link`,-1),s(x,{class:`ml2`,sm:``},{default:n(()=>[...f[103]||=[c(`mdi mdi-open-in-new`,-1)]]),_:1})]),_:1})]),_:1}),s(_,{h2:``},{default:n(()=>[...f[107]||=[c(`Integrated tooltip`,-1)]]),_:1}),f[124]||=a(`p`,null,[c(`We often need a tooltip on a button. Especially on the ones that only have an icons.`),a(`br`),c(`
That's why from version 2.45.0, the w-button component ships with an integrated w-tooltip,
if you need it.`)],-1),s(b,{"content-class":`w-flex wrap`},{pug:n(()=>[...f[110]||=[c(`w-button.ma6(tooltip="Thank you!") Hover me please
w-button.ma6(
  tooltip="Woohoo!"
  :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }").
  Hover me too please`,-1)]]),html:n(()=>[...f[111]||=[c(`<w-button
  class="ma6"
  tooltip="Thank you!">
  Hover me please
</w-button>

<w-button
  class="ma6"
  tooltip="Woohoo!"
  :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }">
  Hover me too please
</w-button>`,-1)]]),default:n(()=>[s(v,{class:`ma6`,tooltip:`Thank you!`},{default:n(()=>[...f[108]||=[c(`Hover me please`,-1)]]),_:1}),s(v,{class:`ma6`,tooltip:`Woohoo!`,"tooltip-props":{top:!0,transition:`twist`,bgColor:`success`}},{default:n(()=>[...f[109]||=[c(`Hover me too please`,-1)]]),_:1})]),_:1})])}var m=d({data:()=>({button1loading:!1,button2loading:!1}),methods:{buttonDoLoading(e){this[`button${e}loading`]=!0,setTimeout(()=>this[`button${e}loading`]=!1,3e3)}}},[[`render`,p]]);function h(e,r,i,u,d,f){let p=t(`title-link`),m=t(`component-api`);return l(),o(`div`,null,[r[1]||=a(`div`,{class:`w-divider my12`},null,-1),s(p,{class:`title1`,h2:``},{default:n(()=>[...r[0]||=[c(`API`,-1)]]),_:1}),s(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),s(m,{items:e.slots,title:`Slots`},null,8,[`items`]),s(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={color:`Applies a color to the button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:`When set to true, the text color will be set to white.`,outline:`The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.`,text:`Sets the background of the button to transparent. On mouse hover the button background is set to a very light opacity of the given <code>color</code> (primary by default).`,round:`Sets a maximum border-radius on the corners of the button, giving it a round look.`,shadow:`Applies a drop shadow to the button.`,tile:`Removes the default border-radius and sets sharp edges on the button.`,route:`When provided, the button becomes a link to this route. A <code>router-link</code> will be generated if you use Vue Router, or a normal link otherwise.`,forceLink:`In some cases, you may want to use a normal link instead of a <code>router-link</code>, for instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code> prop to force a normal link.`,type:`Applies a native HTML <code>type</code> attribute.`,disabled:`Disables the button making it unreactive to user interactions.`,loading:`Sets the loading state of the button. While loading, the button is unclickable and a spinner is displayed instead of the button label.`,icon:`Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.`,iconProps:`When using <code>icon</code>, an object of props to pass down to the <strong class="code">w-icon</strong> component for more control.<br>Example of use: <code>&lt;w-button icon="mdi mdi-heart" :icon-props="{ flipY: true }"&gt;&lt;/w-button&gt;</code>`,tooltip:`When a string is provided, a tooltip will be added to this button and the provided string will be the content of the tooltip. By default, the tooltip shows on hover, and at the bottom.`,tooltipProps:`When using <code>tooltip</code>, an object of props to pass down to the <strong class="code">w-tooltip</strong> component for more control.<br>Example of use: <code>&lt;w-button tooltip="hello" :icon-props="{ top: true }"&gt;&lt;/w-button&gt;</code>`,absolute:`Sets the CSS position of the button to <code>absolute</code>.`,fixed:`Sets the CSS position of the button to <code>fixed</code>.`,top:`Places the button at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.`,bottom:`Places the button at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.`,left:`Places the button at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container when the <code>absolute</code> prop is set to true.`,right:`Places the button at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container when the <code>absolute</code> prop is set to true.`,zIndex:`Applies a z-index (positive or negative integer) to the button.`,width:`Sets a width on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,height:`Sets a height on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,xs:`Sets the size of the button to extra small.`,sm:`Sets the size of the button to small.`,md:`Sets the size of the button to medium.`,lg:`Sets the size of the button to large.`,xl:`Sets the size of the button to extra large.`,noRipple:`When <code>true</code>, disables the pointer ripple on this button only. By default, ripple follows <code>$waveui.config.ripple</code> (see <a href="options-presets-and-waveui">global options</a>).`},_={default:{description:`The button content.`},loading:{description:`Provide a custom loading content, if the default spinner doesn't suit in your app.`}},v={},y=d({data:()=>({propsDescs:g,slots:_}),computed:{props(){return f.props},events(){return f.emits.reduce((e,t)=>(e[t]={description:v[t]||``})&&e,{})}}},[[`render`,h]]);function b(e,r,i,a,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return l(),o(`main`,null,[s(f,null,{default:n(()=>[...r[0]||=[c(`w-button`,-1)]]),_:1}),s(p),s(m)])}var x=d({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};