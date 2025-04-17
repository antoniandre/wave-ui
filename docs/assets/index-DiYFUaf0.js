import{r as u,g,o as p,a as l,b as r,h as w,w as t,e as n,m as h,n as S,t as $,_ as c,B as k}from"./index-B6QByf_F.js";function D(s,o,f,y,x,m){const a=u("title-link"),e=u("w-button"),b=u("w-flex"),i=u("example"),d=u("w-icon");return p(),g("div",null,[l(a,{h2:""},{default:t(()=>o[2]||(o[2]=[n("Default")])),_:1}),o[112]||(o[112]=r("p",null,[n("By default (if no "),r("code",null,"color"),n(" or "),r("code",null,"bg-color"),n(" is applied) the primary color will be applied.")],-1)),l(e,{class:"ma1"},{default:t(()=>o[3]||(o[3]=[n("default")])),_:1}),l(a,{h2:""},{default:t(()=>o[4]||(o[4]=[n("Colors")])),_:1}),o[113]||(o[113]=w(`<p>Setting colors on buttons is quite straightforward:
a text color is set via the attribute <code>color</code>, and a background color is set via the
attribute <code>bg-color</code>.<br>
This allows you to easily mix a background color with a different text color of your choice.<br>
If no <code>color</code> or <code>bg-color</code> is set, the <code>bg-color</code> will be set to primary by default.<br><br>

Here is an example of buttons using all types of colors as a background: status colors, primary color,
secondary color and a color palette color shade.</p><p><strong class="mr1">Note:</strong><ul><li>The 4 status colors have a white text by default on both light and dark themes.</li><li>The primary color is usually standing out from the background by a higher contrast difference.
So when used as a background in a light theme the primary color is considered dark and has a white
text by default, while in the dark theme, it will have a black text by default.
You can override this color with <code>.w-app .primary--bg {color: #000;}</code>.</li></ul></p>`,2)),l(i,null,{pug:t(()=>o[12]||(o[12]=[n(`w-flex.wrap
  w-button.ma1(bg-color="success") success
  w-button.ma1(bg-color="error") error
  w-button.ma1(bg-color="warning") warning
  w-button.ma1(bg-color="info") info
  w-button.ma1 primary
  w-button.ma1(bg-color="secondary") secondary
  w-button.ma1(bg-color="purple-light4") purple-light4`)])),html:t(()=>o[13]||(o[13]=[n(`<w-flex class="wrap">
  <w-button class="ma1" bg-color="success">success</w-button>
  <w-button class="ma1" bg-color="error">error</w-button>
  <w-button class="ma1" bg-color="warning">warning</w-button>
  <w-button class="ma1" bg-color="info">info</w-button>
  <w-button class="ma1">primary</w-button>
  <w-button class="ma1" bg-color="secondary">secondary</w-button>
  <w-button class="ma1" bg-color="purple-light4">purple-light4</w-button>
</w-flex>
`)])),default:t(()=>[l(b,{class:"wrap"},{default:t(()=>[l(e,{class:"ma1","bg-color":"success"},{default:t(()=>o[5]||(o[5]=[n("success")])),_:1}),l(e,{class:"ma1","bg-color":"error"},{default:t(()=>o[6]||(o[6]=[n("error")])),_:1}),l(e,{class:"ma1","bg-color":"warning"},{default:t(()=>o[7]||(o[7]=[n("warning")])),_:1}),l(e,{class:"ma1","bg-color":"info"},{default:t(()=>o[8]||(o[8]=[n("info")])),_:1}),l(e,{class:"ma1"},{default:t(()=>o[9]||(o[9]=[n("primary")])),_:1}),l(e,{class:"ma1","bg-color":"secondary"},{default:t(()=>o[10]||(o[10]=[n("secondary")])),_:1}),l(e,h({class:"ma1","bg-color":"purple-light4"},{[s.$store.state.darkMode?"light":"dark"]:!0}),{default:t(()=>o[11]||(o[11]=[n("purple-light4")])),_:1},16)]),_:1})]),_:1}),o[114]||(o[114]=r("h3",null,"Mix background and text colors",-1)),o[115]||(o[115]=r("p",null,[n("Like in most components, you can set a "),r("code",null,"color"),n(" for the text and a "),r("code",null,"bg-color"),n(` for the
background.`)],-1)),l(i,null,{pug:t(()=>o[17]||(o[17]=[n(`w-button.ma1(bg-color="success" color="yellow-light2") success
w-button.ma1(bg-color="error" color="amber-light2") error
w-button.ma1(bg-color="primary" color="success-light2") warning`)])),html:t(()=>o[18]||(o[18]=[n(`<w-button
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
`)])),default:t(()=>[l(e,{class:"ma1","bg-color":"success",color:"yellow-light2"},{default:t(()=>o[14]||(o[14]=[n("success")])),_:1}),l(e,{class:"ma1","bg-color":"error",color:"amber-light2"},{default:t(()=>o[15]||(o[15]=[n("error")])),_:1}),l(e,{class:"ma1","bg-color":"primary",color:"success-light2"},{default:t(()=>o[16]||(o[16]=[n("warning")])),_:1})]),_:1}),o[116]||(o[116]=w(`<h3>Dark / Light</h3><p>By default the <code>primary</code> color is considered dark as well as the four status colors:
<code>success</code>, <code>error</code>, <code>warning</code> &amp; <code>info</code>.
They will therefore have a white text by default when used as a background color.<br>
For the rest you can use the <code>dark</code> prop or set the <code>color</code> prop to \`white\`.</p>`,2)),l(i,null,{pug:t(()=>o[21]||(o[21]=[n(`w-button.ma1(bg-color="primary-light3") normal
w-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right
w-button.ma1(bg-color="primary-light3" dark) dark`)])),html:t(()=>o[22]||(o[22]=[n(`<w-button class="ma1" bg-color="primary-light3">normal</w-button>

<w-icon class="mx6" size="2.5em" class="grey-light3">mdi mdi-arrow-right</w-icon>

<w-button class="ma1" bg-color="primary-light3" dark>dark</w-button>
`)])),default:t(()=>[l(e,{class:"ma1","bg-color":s.$store.state.darkMode?"primary-dark3":"primary-light3"},{default:t(()=>o[19]||(o[19]=[n("normal")])),_:1},8,["bg-color"]),l(d,{class:S(["mx6",s.$store.state.darkMode?"grey-dark3":"grey-light3"]),size:"2.5em"},{default:t(()=>o[20]||(o[20]=[n("mdi mdi-arrow-right")])),_:1},8,["class"]),l(e,h({class:"ma1","bg-color":s.$store.state.darkMode?"primary-dark3":"primary-light3"},{[`${s.$store.state.darkMode?"light":"dark"}`]:!0}),{default:t(()=>[n($(s.$store.state.darkMode?"light":"dark"),1)]),_:1},16,["bg-color"])]),_:1}),l(a,{h2:""},{default:t(()=>o[23]||(o[23]=[n("Sizes")])),_:1}),o[117]||(o[117]=w(`<p>The button size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>width</code> and <code>height</code> props.</p>`,1)),l(i,null,{pug:t(()=>o[34]||(o[34]=[n(`w-button.ma1(bg-color="secondary" xs) extra small
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
w-button.ma1(bg-color="primary" xl) extra large`)])),html:t(()=>o[35]||(o[35]=[n(`<w-button class="ma1" bg-color="secondary" xs>extra small</w-button>
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
`)])),default:t(()=>[l(e,{class:"ma1","bg-color":"secondary",xs:""},{default:t(()=>o[24]||(o[24]=[n("extra small")])),_:1}),l(e,{class:"ma1","bg-color":"secondary",sm:""},{default:t(()=>o[25]||(o[25]=[n("small")])),_:1}),l(e,{class:"ma1","bg-color":"secondary",md:""},{default:t(()=>o[26]||(o[26]=[n("medium")])),_:1}),l(e,{class:"ma1","bg-color":"secondary",lg:""},{default:t(()=>o[27]||(o[27]=[n("large")])),_:1}),l(e,{class:"ma1","bg-color":"secondary",xl:""},{default:t(()=>o[28]||(o[28]=[n("extra large")])),_:1}),o[36]||(o[36]=r("br",null,null,-1)),o[37]||(o[37]=r("br",null,null,-1)),l(e,{class:"ma1","bg-color":"primary",xs:""},{default:t(()=>o[29]||(o[29]=[n("extra small")])),_:1}),l(e,{class:"ma1","bg-color":"primary",sm:""},{default:t(()=>o[30]||(o[30]=[n("small")])),_:1}),l(e,{class:"ma1","bg-color":"primary",md:""},{default:t(()=>o[31]||(o[31]=[n("medium")])),_:1}),l(e,{class:"ma1","bg-color":"primary",lg:""},{default:t(()=>o[32]||(o[32]=[n("large")])),_:1}),l(e,{class:"ma1","bg-color":"primary",xl:""},{default:t(()=>o[33]||(o[33]=[n("extra large")])),_:1})]),_:1}),o[118]||(o[118]=r("h3",null,"Stretch to the available space",-1)),o[119]||(o[119]=r("ul",null,[r("li",null,[n("In a flex content, you can add the "),r("code",null,"grow"),n(" class.")]),r("li",null,[n("In a block context, you can add the "),r("code",null,"fill-width"),n(" class.")])],-1)),l(i,null,{pug:t(()=>o[40]||(o[40]=[n(`w-flex
  w-button.grow Block Button
br
w-button.fill-width Block Button`)])),html:t(()=>o[41]||(o[41]=[n(`<w-flex>
  <w-button class="grow">primary</w-button>
</w-flex>
<br/>
<w-button class="fill-width">primary</w-button>
`)])),default:t(()=>[l(b,null,{default:t(()=>[l(e,{class:"grow"},{default:t(()=>o[38]||(o[38]=[n("Block Button")])),_:1})]),_:1}),o[42]||(o[42]=r("br",null,null,-1)),l(e,{class:"fill-width"},{default:t(()=>o[39]||(o[39]=[n("Block Button")])),_:1})]),_:1}),o[120]||(o[120]=r("h3",null,"Custom width and height",-1)),o[121]||(o[121]=r("p",null,[n("Even though you can easily override the dimensions via CSS, a "),r("code",null,"width"),n(" and "),r("code",null,"height"),n(` props
are available on the `),r("span",{class:"code"},"w-button"),n(" component.")],-1)),l(i,{"content-class":"pt6"},{pug:t(()=>o[44]||(o[44]=[n('w-button.ma1(bg-color="info" width="10em" :height="18") info')])),html:t(()=>o[45]||(o[45]=[n(`<w-button
  class="ma1 grow"
  bg-color="info"
  width="10em"
  :height="18">
  info
</w-button>
`)])),default:t(()=>[l(e,{class:"ma1","bg-color":"info",width:"10em",height:18},{default:t(()=>o[43]||(o[43]=[n("info")])),_:1})]),_:1}),l(a,{h2:""},{default:t(()=>o[46]||(o[46]=[n("Outline")])),_:1}),l(i,null,{pug:t(()=>o[53]||(o[53]=[n(`w-button.ma1(color="primary" outline xs) extra small
w-button.ma1(color="primary" outline sm) small
w-button.ma1(color="primary" outline md) medium
w-button.ma1(color="primary" outline lg) large
w-button.ma1(color="primary" outline xl) extra large
w-button.ma1(color="primary" outline disabled) disabled`)])),html:t(()=>o[54]||(o[54]=[n(`<w-button class="ma1" color="primary" outline xs>extra small</w-button>
<w-button class="ma1" color="primary" outline sm>small</w-button>
<w-button class="ma1" color="primary" outline md>medium</w-button>
<w-button class="ma1" color="primary" outline lg>large</w-button>
<w-button class="ma1" color="primary" outline xl>extra large</w-button>
<w-button class="ma1" color="primary" outline disabled>disabled</w-button>
`)])),default:t(()=>[l(e,{class:"ma1",color:"primary",outline:"",xs:""},{default:t(()=>o[47]||(o[47]=[n("extra small")])),_:1}),l(e,{class:"ma1",color:"primary",outline:"",sm:""},{default:t(()=>o[48]||(o[48]=[n("small")])),_:1}),l(e,{class:"ma1",color:"primary",outline:"",md:""},{default:t(()=>o[49]||(o[49]=[n("medium")])),_:1}),l(e,{class:"ma1",color:"primary",outline:"",lg:""},{default:t(()=>o[50]||(o[50]=[n("large")])),_:1}),l(e,{class:"ma1",color:"primary",outline:"",xl:""},{default:t(()=>o[51]||(o[51]=[n("extra large")])),_:1}),l(e,{class:"ma1",color:"primary",outline:"",disabled:""},{default:t(()=>o[52]||(o[52]=[n("disabled")])),_:1})]),_:1}),l(a,{h2:""},{default:t(()=>o[55]||(o[55]=[n("Text")])),_:1}),l(i,null,{pug:t(()=>o[62]||(o[62]=[n(`w-button.ma1(color="primary" text xs) extra small
w-button.ma1(color="primary" text sm) small
w-button.ma1(color="primary" text md) medium
w-button.ma1(color="primary" text lg) large
w-button.ma1(color="primary" text xl) extra large
w-button.ma1(color="primary" text disabled) disabled`)])),html:t(()=>o[63]||(o[63]=[n(`<w-button class="ma1" color="primary" text xs>extra small</w-button>
<w-button class="ma1" color="primary" text sm>small</w-button>
<w-button class="ma1" color="primary" text md>medium</w-button>
<w-button class="ma1" color="primary" text lg>large</w-button>
<w-button class="ma1" color="primary" text xl>extra large</w-button>
<w-button class="ma1" color="primary" text disabled>disabled</w-button>
`)])),default:t(()=>[l(e,{class:"ma1",color:"primary",text:"",xs:""},{default:t(()=>o[56]||(o[56]=[n("extra small")])),_:1}),l(e,{class:"ma1",color:"primary",text:"",sm:""},{default:t(()=>o[57]||(o[57]=[n("small")])),_:1}),l(e,{class:"ma1",color:"primary",text:"",md:""},{default:t(()=>o[58]||(o[58]=[n("medium")])),_:1}),l(e,{class:"ma1",color:"primary",text:"",lg:""},{default:t(()=>o[59]||(o[59]=[n("large")])),_:1}),l(e,{class:"ma1",color:"primary",text:"",xl:""},{default:t(()=>o[60]||(o[60]=[n("extra large")])),_:1}),l(e,{class:"ma1",color:"primary",text:"",disabled:""},{default:t(()=>o[61]||(o[61]=[n("disabled")])),_:1})]),_:1}),l(a,{h2:""},{default:t(()=>o[64]||(o[64]=[n("Round & tile")])),_:1}),l(i,{"content-class":"w-flex"},{pug:t(()=>o[69]||(o[69]=[n(`w-button.ma1(round) round
w-button.ma1.mr6(bg-color="secondary" round) round
w-button.ma1(tile) tile
w-button.ma1(bg-color="secondary" tile) tile`)])),html:t(()=>o[70]||(o[70]=[n(`<w-button class="ma1" round>round</w-button>
<w-button class="ma1 mr6" bg-color="secondary" round>round</w-button>
<w-button class="ma1" tile>tile</w-button>
<w-button class="ma1" bg-color="secondary" tile>tile</w-button>
`)])),default:t(()=>[l(e,{class:"ma1",round:""},{default:t(()=>o[65]||(o[65]=[n("round")])),_:1}),l(e,{class:"ma1 mr6","bg-color":"secondary",round:""},{default:t(()=>o[66]||(o[66]=[n("round")])),_:1}),l(e,{class:"ma1",tile:""},{default:t(()=>o[67]||(o[67]=[n("tile")])),_:1}),l(e,{class:"ma1","bg-color":"secondary",tile:""},{default:t(()=>o[68]||(o[68]=[n("tile")])),_:1})]),_:1}),l(a,{h2:""},{default:t(()=>o[71]||(o[71]=[n("Shadow")])),_:1}),l(i,{"content-class":"w-flex"},{pug:t(()=>o[76]||(o[76]=[n(`w-button.ma1(bg-color="success" shadow) success
w-button.ma1(bg-color="error" shadow) error
w-button.ma1(bg-color="warning" shadow) warning
w-button.ma1(bg-color="info" shadow) info`)])),html:t(()=>o[77]||(o[77]=[n(`<w-button class="ma1" bg-color="success" shadow>success</w-button>
<w-button class="ma1" bg-color="error" shadow>error</w-button>
<w-button class="ma1" bg-color="warning" shadow>warning</w-button>
<w-button class="ma1" bg-color="info" shadow>info</w-button>
`)])),default:t(()=>[l(e,{class:"ma1","bg-color":"success",shadow:""},{default:t(()=>o[72]||(o[72]=[n("success")])),_:1}),l(e,{class:"ma1","bg-color":"error",shadow:""},{default:t(()=>o[73]||(o[73]=[n("error")])),_:1}),l(e,{class:"ma1","bg-color":"warning",shadow:""},{default:t(()=>o[74]||(o[74]=[n("warning")])),_:1}),l(e,{class:"ma1","bg-color":"info",shadow:""},{default:t(()=>o[75]||(o[75]=[n("info")])),_:1})]),_:1}),l(a,{h2:""},{default:t(()=>o[78]||(o[78]=[n("Icons & mixed content")])),_:1}),o[122]||(o[122]=r("p",null,"Icon buttons are rounded by default.",-1)),l(i,null,{pug:t(()=>o[83]||(o[83]=[n(`w-button.ma1(bg-color="error" icon="wi-cross")
w-button.ma1.mr6(bg-color="success" icon="wi-check")

w-button.ma1(bg-color="error")
  w-icon.mr1 wi-cross
  | Cancel
w-button.ma1(bg-color="success")
  w-icon.mr1 wi-check
  | Save`)])),html:t(()=>o[84]||(o[84]=[n(`<w-button class="ma1" bg-color="error" icon="wi-cross"></w-button>
<w-button class="ma1 mr6" bg-color="success" icon="wi-check"></w-button>

<w-button class="ma1" bg-color="error">
  <w-icon class="mr1">wi-cross</w-icon>
  Cancel
</w-button>
<w-button class="ma1" bg-color="success">
  <w-icon class="mr1">wi-check</w-icon>
  Save
</w-button>
`)])),default:t(()=>[l(e,{class:"ma1","bg-color":"error",icon:"wi-cross"}),l(e,{class:"ma1 mr6","bg-color":"success",icon:"wi-check"}),l(e,{class:"ma1","bg-color":"error"},{default:t(()=>[l(d,{class:"mr1"},{default:t(()=>o[79]||(o[79]=[n("wi-cross")])),_:1}),o[80]||(o[80]=n("Cancel"))]),_:1}),l(e,{class:"ma1","bg-color":"success"},{default:t(()=>[l(d,{class:"mr1"},{default:t(()=>o[81]||(o[81]=[n("wi-check")])),_:1}),o[82]||(o[82]=n("Save"))]),_:1})]),_:1}),l(a,{h3:"",slug:"more-control-on-icons"},{default:t(()=>o[85]||(o[85]=[n("More control on icons using the "),r("code",null,"icon-props",-1)])),_:1}),l(i,{"content-class":"w-flex"},{pug:t(()=>o[87]||(o[87]=[n('w-button(icon="wi-spinner" :icon-props="{ spin: true }") default')])),html:t(()=>o[88]||(o[88]=[n(`<w-button
  icon="wi-spinner"
  :icon-props="{ spin: true }">
</w-button>
`)])),default:t(()=>[l(e,{icon:"wi-spinner","icon-props":{spin:!0}},{default:t(()=>o[86]||(o[86]=[n("default")])),_:1})]),_:1}),l(a,{h2:""},{default:t(()=>o[89]||(o[89]=[n("Loading spinner & custom loader")])),_:1}),l(i,{"content-class":"w-flex"},{pug:t(()=>o[95]||(o[95]=[n(`w-button.ma1(
  :loading="button1loading"
  @click="buttonDoLoading(1)")
  w-icon.mr1 wi-check
  | Save

w-button.ma1.px4(
  :loading="button2loading"
  @click="buttonDoLoading(2)")
  w-icon.mr1 wi-check
  | Save
  template(#loading) Loading...`)])),html:t(()=>o[96]||(o[96]=[n(`<w-button
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
</w-button>`)])),js:t(()=>o[97]||(o[97]=[n(`data: () => ({
  button1loading: false,
  button2loading: false
}),
methods: {
  buttonDoLoading (id) {
    this[\`button\${id}loading\`] = true
    setTimeout(() => (this[\`button\${id}loading\`] = false), 3000)
  }
}
`)])),default:t(()=>[l(e,{class:"ma1",loading:s.button1loading,onClick:o[0]||(o[0]=v=>m.buttonDoLoading(1))},{default:t(()=>[l(d,{class:"mr1"},{default:t(()=>o[90]||(o[90]=[n("wi-check")])),_:1}),o[91]||(o[91]=n("Save"))]),_:1},8,["loading"]),l(e,{class:"ma1 px4",loading:s.button2loading,onClick:o[1]||(o[1]=v=>m.buttonDoLoading(2))},{loading:t(()=>o[93]||(o[93]=[n("Loading...")])),default:t(()=>[l(d,{class:"mr1"},{default:t(()=>o[92]||(o[92]=[n("wi-check")])),_:1}),o[94]||(o[94]=n("Save"))]),_:1},8,["loading"])]),_:1}),l(a,{h2:""},{default:t(()=>o[98]||(o[98]=[n("Links")])),_:1}),o[123]||(o[123]=w(`<p>If you are using Vue Router, all the links will automatically be <strong class="code">router-link</strong>s
unless they start with <code>http</code> or <code>https</code>.<br>
In some cases, you may want to use a normal link instead of a <strong class="code">router-link</strong>, for
instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code>
prop to force a normal link.<br>
Note that you are also free to add a <code>target=&quot;_blank&quot;</code> attribute if you want to open the
link in a new tab.
</p>`,1)),l(i,{"content-class":"w-flex"},{pug:t(()=>o[105]||(o[105]=[n(`w-button.ma1(route="/getting-started")
  | Getting started
  w-icon.ml1 wi-chevron-right

w-button.ma1(
  route="https://github.com/antoniandre/wave-ui"
  target="_blank")
  | Github
  w-icon.ml2(sm) mdi mdi-open-in-new

w-button.ma1(route="https://github.com/antoniandre/wave-ui" target="_blank" disabled)
  | Disabled button with link
  w-icon.ml2(sm) mdi mdi-open-in-new`)])),html:t(()=>o[106]||(o[106]=[n(`<w-button
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
`)])),default:t(()=>[l(e,{class:"ma1",route:"/getting-started"},{default:t(()=>[o[100]||(o[100]=n("Getting started")),l(d,{class:"ml1"},{default:t(()=>o[99]||(o[99]=[n("wi-chevron-right")])),_:1})]),_:1}),l(e,{class:"ma1",route:"https://github.com/antoniandre/wave-ui",target:"_blank"},{default:t(()=>[o[102]||(o[102]=n("Github")),l(d,{class:"ml2",sm:""},{default:t(()=>o[101]||(o[101]=[n("mdi mdi-open-in-new")])),_:1})]),_:1}),l(e,{class:"ma1",route:"https://github.com/antoniandre/wave-ui",target:"_blank",disabled:""},{default:t(()=>[o[104]||(o[104]=n("Disabled button with link")),l(d,{class:"ml2",sm:""},{default:t(()=>o[103]||(o[103]=[n("mdi mdi-open-in-new")])),_:1})]),_:1})]),_:1}),l(a,{h2:""},{default:t(()=>o[107]||(o[107]=[n("Integrated tooltip")])),_:1}),o[124]||(o[124]=r("p",null,[n("We often need a tooltip on a button. Especially on the ones that only have an icons."),r("br"),n(`
That's why from version 2.45.0, the w-button component ships with an integrated w-tooltip,
if you need it.`)],-1)),l(i,{"content-class":"w-flex wrap"},{pug:t(()=>o[110]||(o[110]=[n(`w-button.ma6(tooltip="Thank you!") Hover me please
w-button.ma6(
  tooltip="Woohoo!"
  :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }").
  Hover me too please`)])),html:t(()=>o[111]||(o[111]=[n(`<w-button
  class="ma6"
  tooltip="Thank you!">
  Hover me please
</w-button>

<w-button
  class="ma6"
  tooltip="Woohoo!"
  :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }">
  Hover me too please
</w-button>`)])),default:t(()=>[l(e,{class:"ma6",tooltip:"Thank you!"},{default:t(()=>o[108]||(o[108]=[n("Hover me please")])),_:1}),l(e,{class:"ma6",tooltip:"Woohoo!","tooltip-props":{top:!0,transition:"twist",bgColor:"success"}},{default:t(()=>o[109]||(o[109]=[n("Hover me too please")])),_:1})]),_:1})])}const C={data:()=>({button1loading:!1,button2loading:!1}),methods:{buttonDoLoading(s){this[`button${s}loading`]=!0,setTimeout(()=>this[`button${s}loading`]=!1,3e3)}}},L=c(C,[["render",D]]);function B(s,o,f,y,x,m){const a=u("title-link"),e=u("component-api");return p(),g("div",null,[o[1]||(o[1]=r("div",{class:"w-divider my12"},null,-1)),l(a,{class:"title1",h2:""},{default:t(()=>o[0]||(o[0]=[n("API")])),_:1}),l(e,{class:"mt0",items:m.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(e,{items:s.slots,title:"Slots"},null,8,["items"]),l(e,{items:m.events,title:"Events"},null,8,["items"])])}const T={color:`Applies a color to the button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:"When set to true, the text color will be set to white.",outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",text:"Sets the background of the button to transparent. On mouse hover the button background is set to a very light opacity of the given <code>color</code> (primary by default).",round:"Sets a maximum border-radius on the corners of the button, giving it a round look.",shadow:"Applies a drop shadow to the button.",tile:"Removes the default border-radius and sets sharp edges on the button.",route:"When provided, the button becomes a link to this route. A <code>router-link</code> will be generated if you use Vue Router, or a normal link otherwise.",forceLink:"In some cases, you may want to use a normal link instead of a <code>router-link</code>, for instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code> prop to force a normal link.",type:"Applies a native HTML <code>type</code> attribute.",disabled:"Disables the button making it unreactive to user interactions.",loading:"Sets the loading state of the button. While loading, the button is unclickable and a spinner is displayed instead of the button label.",icon:"Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",iconProps:'When using <code>icon</code>, an object of props to pass down to the <strong class="code">w-icon</strong> component for more control.<br>Example of use: <code>&lt;w-button icon="mdi mdi-heart" :icon-props="{ flipY: true }"&gt;&lt;/w-button&gt;</code>',tooltip:"When a string is provided, a tooltip will be added to this button and the provided string will be the content of the tooltip. By default, the tooltip shows on hover, and at the bottom.",tooltipProps:'When using <code>tooltip</code>, an object of props to pass down to the <strong class="code">w-tooltip</strong> component for more control.<br>Example of use: <code>&lt;w-button tooltip="hello" :icon-props="{ top: true }"&gt;&lt;/w-button&gt;</code>',absolute:"Sets the CSS position of the button to <code>absolute</code>.",fixed:"Sets the CSS position of the button to <code>fixed</code>.",top:"Places the button at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the button at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",left:"Places the button at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the button at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the button.",width:"Sets a width on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",xs:"Sets the size of the button to extra small.",sm:"Sets the size of the button to small.",md:"Sets the size of the button to medium.",lg:"Sets the size of the button to large.",xl:"Sets the size of the button to extra large."},z={default:{description:"The button content."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},A={},I={data:()=>({propsDescs:T,slots:z}),computed:{props(){return k.props},events(){return k.emits.reduce((s,o)=>(s[o]={description:A[o]||""})&&s,{})}}},P=c(I,[["render",B]]);function W(s,o,f,y,x,m){const a=u("ui-component-title"),e=u("examples"),b=u("api");return p(),g("main",null,[l(a,null,{default:t(()=>o[0]||(o[0]=[n("w-button")])),_:1}),l(e),l(b)])}const M={components:{Examples:L,Api:P}},E=c(M,[["render",W]]);export{E as default};
