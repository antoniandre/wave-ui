import{C as e,H as t,N as n,c as r,d as i,g as a,h as o,ht as s,k as c,m as l,vt as u}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as d}from"./_plugin-vue_export-helper-S3RvzygF.js";import{I as f}from"./index-CmUoOmTq.js";function p(d,f,p,m,h,g){let _=n(`title-link`),v=n(`w-button`),y=n(`w-flex`),b=n(`example`),x=n(`w-icon`);return c(),i(`div`,null,[a(_,{h2:``},{default:t(()=>[...f[2]||=[o(`Default`,-1)]]),_:1}),f[112]||=r(`p`,null,[o(`By default (if no `),r(`code`,null,`color`),o(` or `),r(`code`,null,`bg-color`),o(` is applied) the primary color will be applied.`)],-1),a(v,{class:`ma1`},{default:t(()=>[...f[3]||=[o(`default`,-1)]]),_:1}),a(_,{h2:``},{default:t(()=>[...f[4]||=[o(`Colors`,-1)]]),_:1}),f[113]||=l(`<p>Setting colors on buttons is quite straightforward:
a text color is set via the attribute <code>color</code>, and a background color is set via the
attribute <code>bg-color</code>.<br>
This allows you to easily mix a background color with a different text color of your choice.<br>
If no <code>color</code> or <code>bg-color</code> is set, the <code>bg-color</code> will be set to primary by default.<br><br>

Here is an example of buttons using all types of colors as a background: status colors, primary color,
secondary color and a color palette color shade.</p><p><strong class="mr1">Note:</strong><ul><li>The 4 status colors have a white text by default on both light and dark themes.</li><li>The primary color is usually standing out from the background by a higher contrast difference.
So when used as a background in a light theme the primary color is considered dark and has a white
text by default, while in the dark theme, it will have a black text by default.
You can override this color with <code>.w-app .primary--bg {color: #000;}</code>.</li></ul></p>`,2),a(b,null,{pug:t(()=>[...f[12]||=[o(`w-flex.wrap
  w-button.ma1(bg-color="success") success
  w-button.ma1(bg-color="error") error
  w-button.ma1(bg-color="warning") warning
  w-button.ma1(bg-color="info") info
  w-button.ma1 primary
  w-button.ma1(bg-color="secondary") secondary
  w-button.ma1(bg-color="purple-light4") purple-light4`,-1)]]),html:t(()=>[...f[13]||=[o(`<w-flex class="wrap">
  <w-button class="ma1" bg-color="success">success</w-button>
  <w-button class="ma1" bg-color="error">error</w-button>
  <w-button class="ma1" bg-color="warning">warning</w-button>
  <w-button class="ma1" bg-color="info">info</w-button>
  <w-button class="ma1">primary</w-button>
  <w-button class="ma1" bg-color="secondary">secondary</w-button>
  <w-button class="ma1" bg-color="purple-light4">purple-light4</w-button>
</w-flex>
`,-1)]]),default:t(()=>[a(y,{class:`wrap`},{default:t(()=>[a(v,{class:`ma1`,"bg-color":`success`},{default:t(()=>[...f[5]||=[o(`success`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`error`},{default:t(()=>[...f[6]||=[o(`error`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`warning`},{default:t(()=>[...f[7]||=[o(`warning`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`info`},{default:t(()=>[...f[8]||=[o(`info`,-1)]]),_:1}),a(v,{class:`ma1`},{default:t(()=>[...f[9]||=[o(`primary`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`secondary`},{default:t(()=>[...f[10]||=[o(`secondary`,-1)]]),_:1}),a(v,e({class:`ma1`,"bg-color":`purple-light4`},{[d.$store.state.darkMode?`light`:`dark`]:!0}),{default:t(()=>[...f[11]||=[o(`purple-light4`,-1)]]),_:1},16)]),_:1})]),_:1}),f[114]||=r(`h3`,null,`Mix background and text colors`,-1),f[115]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the text and a `),r(`code`,null,`bg-color`),o(` for the
background.`)],-1),a(b,null,{pug:t(()=>[...f[17]||=[o(`w-button.ma1(bg-color="success" color="yellow-light2") success
w-button.ma1(bg-color="error" color="amber-light2") error
w-button.ma1(bg-color="primary" color="success-light2") warning`,-1)]]),html:t(()=>[...f[18]||=[o(`<w-button
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
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,"bg-color":`success`,color:`yellow-light2`},{default:t(()=>[...f[14]||=[o(`success`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`error`,color:`amber-light2`},{default:t(()=>[...f[15]||=[o(`error`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`primary`,color:`success-light2`},{default:t(()=>[...f[16]||=[o(`warning`,-1)]]),_:1})]),_:1}),f[116]||=l(`<h3>Dark / Light</h3><p>By default the <code>primary</code> color is considered dark as well as the four status colors:
<code>success</code>, <code>error</code>, <code>warning</code> &amp; <code>info</code>.
They will therefore have a white text by default when used as a background color.<br>
For the rest you can use the <code>dark</code> prop or set the <code>color</code> prop to \`white\`.</p>`,2),a(b,null,{pug:t(()=>[...f[21]||=[o(`w-button.ma1(bg-color="primary-light3") normal
w-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right
w-button.ma1(bg-color="primary-light3" dark) dark`,-1)]]),html:t(()=>[...f[22]||=[o(`<w-button class="ma1" bg-color="primary-light3">normal</w-button>

<w-icon class="mx6" size="2.5em" class="grey-light3">mdi mdi-arrow-right</w-icon>

<w-button class="ma1" bg-color="primary-light3" dark>dark</w-button>
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,"bg-color":d.$store.state.darkMode?`primary-dark3`:`primary-light3`},{default:t(()=>[...f[19]||=[o(`normal`,-1)]]),_:1},8,[`bg-color`]),a(x,{class:s([`mx6`,d.$store.state.darkMode?`grey-dark3`:`grey-light3`]),size:`2.5em`},{default:t(()=>[...f[20]||=[o(`mdi mdi-arrow-right`,-1)]]),_:1},8,[`class`]),a(v,e({class:`ma1`,"bg-color":d.$store.state.darkMode?`primary-dark3`:`primary-light3`},{[`${d.$store.state.darkMode?`light`:`dark`}`]:!0}),{default:t(()=>[o(u(d.$store.state.darkMode?`light`:`dark`),1)]),_:1},16,[`bg-color`])]),_:1}),a(_,{h2:``},{default:t(()=>[...f[23]||=[o(`Sizes`,-1)]]),_:1}),f[117]||=l(`<p>The button size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>width</code> and <code>height</code> props.</p>`,1),a(b,null,{pug:t(()=>[...f[34]||=[o(`w-button.ma1(bg-color="secondary" xs) extra small
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
w-button.ma1(bg-color="primary" xl) extra large`,-1)]]),html:t(()=>[...f[35]||=[o(`<w-button class="ma1" bg-color="secondary" xs>extra small</w-button>
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
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,"bg-color":`secondary`,xs:``},{default:t(()=>[...f[24]||=[o(`extra small`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`secondary`,sm:``},{default:t(()=>[...f[25]||=[o(`small`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`secondary`,md:``},{default:t(()=>[...f[26]||=[o(`medium`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`secondary`,lg:``},{default:t(()=>[...f[27]||=[o(`large`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`secondary`,xl:``},{default:t(()=>[...f[28]||=[o(`extra large`,-1)]]),_:1}),f[36]||=r(`br`,null,null,-1),f[37]||=r(`br`,null,null,-1),a(v,{class:`ma1`,"bg-color":`primary`,xs:``},{default:t(()=>[...f[29]||=[o(`extra small`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`primary`,sm:``},{default:t(()=>[...f[30]||=[o(`small`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`primary`,md:``},{default:t(()=>[...f[31]||=[o(`medium`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`primary`,lg:``},{default:t(()=>[...f[32]||=[o(`large`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`primary`,xl:``},{default:t(()=>[...f[33]||=[o(`extra large`,-1)]]),_:1})]),_:1}),f[118]||=r(`h3`,null,`Stretch to the available space`,-1),f[119]||=r(`ul`,null,[r(`li`,null,[o(`In a flex content, you can add the `),r(`code`,null,`grow`),o(` class.`)]),r(`li`,null,[o(`In a block context, you can add the `),r(`code`,null,`fill-width`),o(` class.`)])],-1),a(b,null,{pug:t(()=>[...f[40]||=[o(`w-flex
  w-button.grow Block Button
br
w-button.fill-width Block Button`,-1)]]),html:t(()=>[...f[41]||=[o(`<w-flex>
  <w-button class="grow">primary</w-button>
</w-flex>
<br/>
<w-button class="fill-width">primary</w-button>
`,-1)]]),default:t(()=>[a(y,null,{default:t(()=>[a(v,{class:`grow`},{default:t(()=>[...f[38]||=[o(`Block Button`,-1)]]),_:1})]),_:1}),f[42]||=r(`br`,null,null,-1),a(v,{class:`fill-width`},{default:t(()=>[...f[39]||=[o(`Block Button`,-1)]]),_:1})]),_:1}),f[120]||=r(`h3`,null,`Custom width and height`,-1),f[121]||=r(`p`,null,[o(`Even though you can easily override the dimensions via CSS, a `),r(`code`,null,`width`),o(` and `),r(`code`,null,`height`),o(` props
are available on the `),r(`span`,{class:`code`},`w-button`),o(` component.`)],-1),a(b,{"content-class":`pt6`},{pug:t(()=>[...f[44]||=[o(`w-button.ma1(bg-color="info" width="10em" :height="18") info`,-1)]]),html:t(()=>[...f[45]||=[o(`<w-button
  class="ma1 grow"
  bg-color="info"
  width="10em"
  :height="18">
  info
</w-button>
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,"bg-color":`info`,width:`10em`,height:18},{default:t(()=>[...f[43]||=[o(`info`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...f[46]||=[o(`Outline`,-1)]]),_:1}),a(b,null,{pug:t(()=>[...f[53]||=[o(`w-button.ma1(color="primary" outline xs) extra small
w-button.ma1(color="primary" outline sm) small
w-button.ma1(color="primary" outline md) medium
w-button.ma1(color="primary" outline lg) large
w-button.ma1(color="primary" outline xl) extra large
w-button.ma1(color="primary" outline disabled) disabled`,-1)]]),html:t(()=>[...f[54]||=[o(`<w-button class="ma1" color="primary" outline xs>extra small</w-button>
<w-button class="ma1" color="primary" outline sm>small</w-button>
<w-button class="ma1" color="primary" outline md>medium</w-button>
<w-button class="ma1" color="primary" outline lg>large</w-button>
<w-button class="ma1" color="primary" outline xl>extra large</w-button>
<w-button class="ma1" color="primary" outline disabled>disabled</w-button>
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,color:`primary`,outline:``,xs:``},{default:t(()=>[...f[47]||=[o(`extra small`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,outline:``,sm:``},{default:t(()=>[...f[48]||=[o(`small`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,outline:``,md:``},{default:t(()=>[...f[49]||=[o(`medium`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,outline:``,lg:``},{default:t(()=>[...f[50]||=[o(`large`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,outline:``,xl:``},{default:t(()=>[...f[51]||=[o(`extra large`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,outline:``,disabled:``},{default:t(()=>[...f[52]||=[o(`disabled`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...f[55]||=[o(`Text`,-1)]]),_:1}),a(b,null,{pug:t(()=>[...f[62]||=[o(`w-button.ma1(color="primary" text xs) extra small
w-button.ma1(color="primary" text sm) small
w-button.ma1(color="primary" text md) medium
w-button.ma1(color="primary" text lg) large
w-button.ma1(color="primary" text xl) extra large
w-button.ma1(color="primary" text disabled) disabled`,-1)]]),html:t(()=>[...f[63]||=[o(`<w-button class="ma1" color="primary" text xs>extra small</w-button>
<w-button class="ma1" color="primary" text sm>small</w-button>
<w-button class="ma1" color="primary" text md>medium</w-button>
<w-button class="ma1" color="primary" text lg>large</w-button>
<w-button class="ma1" color="primary" text xl>extra large</w-button>
<w-button class="ma1" color="primary" text disabled>disabled</w-button>
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,color:`primary`,text:``,xs:``},{default:t(()=>[...f[56]||=[o(`extra small`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,text:``,sm:``},{default:t(()=>[...f[57]||=[o(`small`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,text:``,md:``},{default:t(()=>[...f[58]||=[o(`medium`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,text:``,lg:``},{default:t(()=>[...f[59]||=[o(`large`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,text:``,xl:``},{default:t(()=>[...f[60]||=[o(`extra large`,-1)]]),_:1}),a(v,{class:`ma1`,color:`primary`,text:``,disabled:``},{default:t(()=>[...f[61]||=[o(`disabled`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...f[64]||=[o(`Round & tile`,-1)]]),_:1}),a(b,{"content-class":`w-flex`},{pug:t(()=>[...f[69]||=[o(`w-button.ma1(round) round
w-button.ma1.mr6(bg-color="secondary" round) round
w-button.ma1(tile) tile
w-button.ma1(bg-color="secondary" tile) tile`,-1)]]),html:t(()=>[...f[70]||=[o(`<w-button class="ma1" round>round</w-button>
<w-button class="ma1 mr6" bg-color="secondary" round>round</w-button>
<w-button class="ma1" tile>tile</w-button>
<w-button class="ma1" bg-color="secondary" tile>tile</w-button>
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,round:``},{default:t(()=>[...f[65]||=[o(`round`,-1)]]),_:1}),a(v,{class:`ma1 mr6`,"bg-color":`secondary`,round:``},{default:t(()=>[...f[66]||=[o(`round`,-1)]]),_:1}),a(v,{class:`ma1`,tile:``},{default:t(()=>[...f[67]||=[o(`tile`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`secondary`,tile:``},{default:t(()=>[...f[68]||=[o(`tile`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...f[71]||=[o(`Shadow`,-1)]]),_:1}),a(b,{"content-class":`w-flex`},{pug:t(()=>[...f[76]||=[o(`w-button.ma1(bg-color="success" shadow) success
w-button.ma1(bg-color="error" shadow) error
w-button.ma1(bg-color="warning" shadow) warning
w-button.ma1(bg-color="info" shadow) info`,-1)]]),html:t(()=>[...f[77]||=[o(`<w-button class="ma1" bg-color="success" shadow>success</w-button>
<w-button class="ma1" bg-color="error" shadow>error</w-button>
<w-button class="ma1" bg-color="warning" shadow>warning</w-button>
<w-button class="ma1" bg-color="info" shadow>info</w-button>
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,"bg-color":`success`,shadow:``},{default:t(()=>[...f[72]||=[o(`success`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`error`,shadow:``},{default:t(()=>[...f[73]||=[o(`error`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`warning`,shadow:``},{default:t(()=>[...f[74]||=[o(`warning`,-1)]]),_:1}),a(v,{class:`ma1`,"bg-color":`info`,shadow:``},{default:t(()=>[...f[75]||=[o(`info`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...f[78]||=[o(`Icons & mixed content`,-1)]]),_:1}),f[122]||=r(`p`,null,`Icon buttons are rounded by default.`,-1),a(b,null,{pug:t(()=>[...f[83]||=[o(`w-button.ma1(bg-color="error" icon="wi-cross")
w-button.ma1.mr6(bg-color="success" icon="wi-check")

w-button.ma1(bg-color="error")
  w-icon.mr1 wi-cross
  | Cancel
w-button.ma1(bg-color="success")
  w-icon.mr1 wi-check
  | Save`,-1)]]),html:t(()=>[...f[84]||=[o(`<w-button class="ma1" bg-color="error" icon="wi-cross"></w-button>
<w-button class="ma1 mr6" bg-color="success" icon="wi-check"></w-button>

<w-button class="ma1" bg-color="error">
  <w-icon class="mr1">wi-cross</w-icon>
  Cancel
</w-button>
<w-button class="ma1" bg-color="success">
  <w-icon class="mr1">wi-check</w-icon>
  Save
</w-button>
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,"bg-color":`error`,icon:`wi-cross`}),a(v,{class:`ma1 mr6`,"bg-color":`success`,icon:`wi-check`}),a(v,{class:`ma1`,"bg-color":`error`},{default:t(()=>[a(x,{class:`mr1`},{default:t(()=>[...f[79]||=[o(`wi-cross`,-1)]]),_:1}),f[80]||=o(`Cancel`,-1)]),_:1}),a(v,{class:`ma1`,"bg-color":`success`},{default:t(()=>[a(x,{class:`mr1`},{default:t(()=>[...f[81]||=[o(`wi-check`,-1)]]),_:1}),f[82]||=o(`Save`,-1)]),_:1})]),_:1}),a(_,{h3:``,slug:`more-control-on-icons`},{default:t(()=>[...f[85]||=[o(`More control on icons using the `,-1),r(`code`,null,`icon-props`,-1)]]),_:1}),a(b,{"content-class":`w-flex`},{pug:t(()=>[...f[87]||=[o(`w-button(icon="wi-spinner" :icon-props="{ spin: true }") default`,-1)]]),html:t(()=>[...f[88]||=[o(`<w-button
  icon="wi-spinner"
  :icon-props="{ spin: true }">
</w-button>
`,-1)]]),default:t(()=>[a(v,{icon:`wi-spinner`,"icon-props":{spin:!0}},{default:t(()=>[...f[86]||=[o(`default`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...f[89]||=[o(`Loading spinner & custom loader`,-1)]]),_:1}),a(b,{"content-class":`w-flex`},{pug:t(()=>[...f[95]||=[o(`w-button.ma1(
  :loading="button1loading"
  @click="buttonDoLoading(1)")
  w-icon.mr1 wi-check
  | Save

w-button.ma1.px4(
  :loading="button2loading"
  @click="buttonDoLoading(2)")
  w-icon.mr1 wi-check
  | Save
  template(#loading) Loading...`,-1)]]),html:t(()=>[...f[96]||=[o(`<w-button
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
</w-button>`,-1)]]),js:t(()=>[...f[97]||=[o(`data: () => ({
  button1loading: false,
  button2loading: false
}),
methods: {
  buttonDoLoading (id) {
    this[\`button\${id}loading\`] = true
    setTimeout(() => (this[\`button\${id}loading\`] = false), 3000)
  }
}
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,loading:d.button1loading,onClick:f[0]||=e=>g.buttonDoLoading(1)},{default:t(()=>[a(x,{class:`mr1`},{default:t(()=>[...f[90]||=[o(`wi-check`,-1)]]),_:1}),f[91]||=o(`Save`,-1)]),_:1},8,[`loading`]),a(v,{class:`ma1 px4`,loading:d.button2loading,onClick:f[1]||=e=>g.buttonDoLoading(2)},{loading:t(()=>[...f[93]||=[o(`Loading...`,-1)]]),default:t(()=>[a(x,{class:`mr1`},{default:t(()=>[...f[92]||=[o(`wi-check`,-1)]]),_:1}),f[94]||=o(`Save`,-1)]),_:1},8,[`loading`])]),_:1}),a(_,{h2:``},{default:t(()=>[...f[98]||=[o(`Links`,-1)]]),_:1}),f[123]||=l(`<p>If you are using Vue Router, all the links will automatically be <strong class="code">router-link</strong>s
unless they start with <code>http</code> or <code>https</code>.<br>
In some cases, you may want to use a normal link instead of a <strong class="code">router-link</strong>, for
instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code>
prop to force a normal link.<br>
Note that you are also free to add a <code>target=&quot;_blank&quot;</code> attribute if you want to open the
link in a new tab.
</p>`,1),a(b,{"content-class":`w-flex`},{pug:t(()=>[...f[105]||=[o(`w-button.ma1(route="/getting-started")
  | Getting started
  w-icon.ml1 wi-chevron-right

w-button.ma1(
  route="https://github.com/antoniandre/wave-ui"
  target="_blank")
  | Github
  w-icon.ml2(sm) mdi mdi-open-in-new

w-button.ma1(route="https://github.com/antoniandre/wave-ui" target="_blank" disabled)
  | Disabled button with link
  w-icon.ml2(sm) mdi mdi-open-in-new`,-1)]]),html:t(()=>[...f[106]||=[o(`<w-button
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
`,-1)]]),default:t(()=>[a(v,{class:`ma1`,route:`/getting-started`},{default:t(()=>[f[100]||=o(`Getting started`,-1),a(x,{class:`ml1`},{default:t(()=>[...f[99]||=[o(`wi-chevron-right`,-1)]]),_:1})]),_:1}),a(v,{class:`ma1`,route:`https://github.com/antoniandre/wave-ui`,target:`_blank`},{default:t(()=>[f[102]||=o(`Github`,-1),a(x,{class:`ml2`,sm:``},{default:t(()=>[...f[101]||=[o(`mdi mdi-open-in-new`,-1)]]),_:1})]),_:1}),a(v,{class:`ma1`,route:`https://github.com/antoniandre/wave-ui`,target:`_blank`,disabled:``},{default:t(()=>[f[104]||=o(`Disabled button with link`,-1),a(x,{class:`ml2`,sm:``},{default:t(()=>[...f[103]||=[o(`mdi mdi-open-in-new`,-1)]]),_:1})]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...f[107]||=[o(`Integrated tooltip`,-1)]]),_:1}),f[124]||=r(`p`,null,[o(`We often need a tooltip on a button. Especially on the ones that only have an icons.`),r(`br`),o(`
That's why from version 2.45.0, the w-button component ships with an integrated w-tooltip,
if you need it.`)],-1),a(b,{"content-class":`w-flex wrap`},{pug:t(()=>[...f[110]||=[o(`w-button.ma6(tooltip="Thank you!") Hover me please
w-button.ma6(
  tooltip="Woohoo!"
  :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }").
  Hover me too please`,-1)]]),html:t(()=>[...f[111]||=[o(`<w-button
  class="ma6"
  tooltip="Thank you!">
  Hover me please
</w-button>

<w-button
  class="ma6"
  tooltip="Woohoo!"
  :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }">
  Hover me too please
</w-button>`,-1)]]),default:t(()=>[a(v,{class:`ma6`,tooltip:`Thank you!`},{default:t(()=>[...f[108]||=[o(`Hover me please`,-1)]]),_:1}),a(v,{class:`ma6`,tooltip:`Woohoo!`,"tooltip-props":{top:!0,transition:`twist`,bgColor:`success`}},{default:t(()=>[...f[109]||=[o(`Hover me too please`,-1)]]),_:1})]),_:1})])}var m=d({data:()=>({button1loading:!1,button2loading:!1}),methods:{buttonDoLoading(e){this[`button${e}loading`]=!0,setTimeout(()=>this[`button${e}loading`]=!1,3e3)}}},[[`render`,p]]);function h(e,s,l,u,d,f){let p=n(`title-link`),m=n(`component-api`);return c(),i(`div`,null,[s[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...s[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:e.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={color:`Applies a color to the button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:`When set to true, the text color will be set to white.`,outline:`The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.`,text:`Sets the background of the button to transparent. On mouse hover the button background is set to a very light opacity of the given <code>color</code> (primary by default).`,round:`Sets a maximum border-radius on the corners of the button, giving it a round look.`,shadow:`Applies a drop shadow to the button.`,tile:`Removes the default border-radius and sets sharp edges on the button.`,route:`When provided, the button becomes a link to this route. A <code>router-link</code> will be generated if you use Vue Router, or a normal link otherwise.`,forceLink:`In some cases, you may want to use a normal link instead of a <code>router-link</code>, for instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code> prop to force a normal link.`,type:`Applies a native HTML <code>type</code> attribute.`,disabled:`Disables the button making it unreactive to user interactions.`,loading:`Sets the loading state of the button. While loading, the button is unclickable and a spinner is displayed instead of the button label.`,icon:`Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.`,iconProps:`When using <code>icon</code>, an object of props to pass down to the <strong class="code">w-icon</strong> component for more control.<br>Example of use: <code>&lt;w-button icon="mdi mdi-heart" :icon-props="{ flipY: true }"&gt;&lt;/w-button&gt;</code>`,tooltip:`When a string is provided, a tooltip will be added to this button and the provided string will be the content of the tooltip. By default, the tooltip shows on hover, and at the bottom.`,tooltipProps:`When using <code>tooltip</code>, an object of props to pass down to the <strong class="code">w-tooltip</strong> component for more control.<br>Example of use: <code>&lt;w-button tooltip="hello" :icon-props="{ top: true }"&gt;&lt;/w-button&gt;</code>`,absolute:`Sets the CSS position of the button to <code>absolute</code>.`,fixed:`Sets the CSS position of the button to <code>fixed</code>.`,top:`Places the button at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.`,bottom:`Places the button at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.`,left:`Places the button at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container when the <code>absolute</code> prop is set to true.`,right:`Places the button at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container when the <code>absolute</code> prop is set to true.`,zIndex:`Applies a z-index (positive or negative integer) to the button.`,width:`Sets a width on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,height:`Sets a height on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,xs:`Sets the size of the button to extra small.`,sm:`Sets the size of the button to small.`,md:`Sets the size of the button to medium.`,lg:`Sets the size of the button to large.`,xl:`Sets the size of the button to extra large.`},_={default:{description:`The button content.`},loading:{description:`Provide a custom loading content, if the default spinner doesn't suit in your app.`}},v={},y=d({data:()=>({propsDescs:g,slots:_}),computed:{props(){return f.props},events(){return f.emits.reduce((e,t)=>(e[t]={description:v[t]||``})&&e,{})}}},[[`render`,h]]);function b(e,r,s,l,u,d){let f=n(`ui-component-title`),p=n(`examples`),m=n(`api`);return c(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-button`,-1)]]),_:1}),a(p),a(m)])}var x=d({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};