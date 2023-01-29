import{r as c,o as w,f as g,a as e,w as o,b as t,d as a,i as b,_ as p,z as y}from"./index.59a44df4.js";const k=a("p",null,[t("By default (if no "),a("code",null,"color"),t(" or "),a("code",null,"bg-color"),t(" is applied) the primary color will be applied.")],-1),v=b(`<p>Setting colors on buttons is quite straightforward:
a text color is set via the attribute <code>color</code>, and a background color is set via the
attribute <code>bg-color</code>.<br>
This allows you to easily mix a background color with a different text color of your choice.<br>
If no <code>color</code> or <code>bg-color</code> is set, the <code>bg-color</code> will be set to primary by default.<br><br>

Here is an example of buttons using all types of colors as a background: status colors, primary color,
secondary color and a color palette color shade.</p><p><strong class="mr1">Note:</strong>The 4 status colors as well as the primary color have a white text by default.</p>`,2),S=a("h3",null,"Mix background and text colors",-1),$=a("p",null,[t("Like in most components, you can set a "),a("code",null,"color"),t(" for the text and a "),a("code",null,"bg-color"),t(` for the
background.`)],-1),C=b(`<h3>Dark</h3><p>By default the <code>primary</code> color is considered dark as well as the four status colors:
<code>success</code>, <code>error</code>, <code>warning</code> &amp; <code>info</code>.
They will therefore have a white text by default when used as a background color.<br>
For the rest you can use the <code>dark</code> prop or set the <code>color</code> prop to \`white\`.</p>`,2),L=b(`<p>The button size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>width</code> and <code>height</code> props.</p>`,1),T=a("br",null,null,-1),z=a("br",null,null,-1),D=a("h3",null,"Stretch to the available space",-1),A=a("h3",null,"Custom width and height",-1),I=a("p",null,[t("Even though you can easily override the dimensions via CSS, a "),a("code",null,"width"),t(" and "),a("code",null,"height"),t(` props
are available on the `),a("span",{class:"code"},"w-button"),t(" component.")],-1),P=a("p",null,"Icon buttons are rounded by default.",-1),W=a("code",null,"icon-props",-1),H=b(`<p>If you are using Vue Router, all the links will automatically be <strong class="code">router-link</strong>s
unless they start with <code>http</code> or <code>https</code>.<br>
In some cases, you may want to use a normal link instead of a <strong class="code">router-link</strong>, for
instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code>
prop to force a normal link.
</p>`,1),B=a("p",null,[t("We often need a tooltip on a button. Especially on the ones that only have an icons."),a("br"),t(`
That's why from version 2.45.0, the w-button component ships with an integrated w-tooltip,
if you need it.`)],-1);function E(s,i,h,f,_,d){const l=c("title-link"),n=c("w-button"),m=c("w-flex"),r=c("example"),u=c("w-icon");return w(),g("div",null,[e(l,{h2:""},{default:o(()=>[t("Default")]),_:1}),k,e(n,{class:"ma1"},{default:o(()=>[t("default")]),_:1}),e(l,{h2:""},{default:o(()=>[t("Colors")]),_:1}),v,e(r,null,{pug:o(()=>[t(`w-flex.wrap
  w-button.ma1(bg-color="success") success
  w-button.ma1(bg-color="error") error
  w-button.ma1(bg-color="warning") warning
  w-button.ma1(bg-color="info") info
  w-button.ma1 primary
  w-button.ma1(bg-color="secondary") secondary
  w-button.ma1(bg-color="purple-light4") purple-light4`)]),html:o(()=>[t(`<w-flex class="wrap">
  <w-button class="ma1" bg-color="success">success</w-button>
  <w-button class="ma1" bg-color="error">error</w-button>
  <w-button class="ma1" bg-color="warning">warning</w-button>
  <w-button class="ma1" bg-color="info">info</w-button>
  <w-button class="ma1">primary</w-button>
  <w-button class="ma1" bg-color="secondary">secondary</w-button>
  <w-button class="ma1" bg-color="purple-light4">purple-light4</w-button>
</w-flex>
`)]),default:o(()=>[e(m,{class:"wrap"},{default:o(()=>[e(n,{class:"ma1","bg-color":"success"},{default:o(()=>[t("success")]),_:1}),e(n,{class:"ma1","bg-color":"error"},{default:o(()=>[t("error")]),_:1}),e(n,{class:"ma1","bg-color":"warning"},{default:o(()=>[t("warning")]),_:1}),e(n,{class:"ma1","bg-color":"info"},{default:o(()=>[t("info")]),_:1}),e(n,{class:"ma1"},{default:o(()=>[t("primary")]),_:1}),e(n,{class:"ma1","bg-color":"secondary"},{default:o(()=>[t("secondary")]),_:1}),e(n,{class:"ma1","bg-color":"purple-light4"},{default:o(()=>[t("purple-light4")]),_:1})]),_:1})]),_:1}),S,$,e(r,null,{pug:o(()=>[t(`w-button.ma1(bg-color="success" color="yellow-light2") success
w-button.ma1(bg-color="error" color="amber-light2") error
w-button.ma1(bg-color="primary" color="success-light2") warning`)]),html:o(()=>[t(`<w-button
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
`)]),default:o(()=>[e(n,{class:"ma1","bg-color":"success",color:"yellow-light2"},{default:o(()=>[t("success")]),_:1}),e(n,{class:"ma1","bg-color":"error",color:"amber-light2"},{default:o(()=>[t("error")]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"success-light2"},{default:o(()=>[t("warning")]),_:1})]),_:1}),C,e(r,null,{pug:o(()=>[t(`w-button.ma1(bg-color="primary-light3") normal
w-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right
w-button.ma1(bg-color="primary-light3" dark) dark`)]),html:o(()=>[t(`<w-button class="ma1" bg-color="primary-light3">normal</w-button>

<w-icon class="mx6 grey-light3" size="2.5em">mdi mdi-arrow-right</w-icon>

<w-button class="ma1" bg-color="primary-light3" dark>dark</w-button>
`)]),default:o(()=>[e(n,{class:"ma1","bg-color":"primary-light3"},{default:o(()=>[t("normal")]),_:1}),e(u,{class:"mx6 grey-light3",size:"2.5em"},{default:o(()=>[t("mdi mdi-arrow-right")]),_:1}),e(n,{class:"ma1","bg-color":"primary-light3",dark:""},{default:o(()=>[t("dark")]),_:1})]),_:1}),e(l,{h2:""},{default:o(()=>[t("Sizes")]),_:1}),L,e(r,null,{pug:o(()=>[t(`w-button.ma1(bg-color="secondary" xs) extra small
w-button.ma1(bg-color="secondary" sm) small
w-button.ma1(bg-color="secondary" md) medium
w-button.ma1(bg-color="secondary" lg) large
w-button.ma1(bg-color="secondary" xl) extra large
w-button.ma1(bg-color="secondary" disabled) disabled
br
br
w-button.ma1(bg-color="primary" color="white" xs) extra small
w-button.ma1(bg-color="primary" color="white" sm) small
w-button.ma1(bg-color="primary" color="white" md) medium
w-button.ma1(bg-color="primary" color="white" lg) large
w-button.ma1(bg-color="primary" color="white" xl) extra large
w-button.ma1(bg-color="primary" color="white" disabled) disabled`)]),html:o(()=>[t(`<w-button class="ma1" bg-color="secondary" xs>extra small</w-button>
<w-button class="ma1" bg-color="secondary" sm>small</w-button>
<w-button class="ma1" bg-color="secondary" md>medium</w-button>
<w-button class="ma1" bg-color="secondary" lg>large</w-button>
<w-button class="ma1" bg-color="secondary" xl>extra large</w-button>
<w-button class="ma1" bg-color="secondary" disabled>disabled</w-button>
<br>
<br>
<w-button class="ma1" bg-color="primary" color="white" xs>extra small</w-button>
<w-button class="ma1" bg-color="primary" color="white" sm>small</w-button>
<w-button class="ma1" bg-color="primary" color="white" md>medium</w-button>
<w-button class="ma1" bg-color="primary" color="white" lg>large</w-button>
<w-button class="ma1" bg-color="primary" color="white" xl>extra large</w-button>
<w-button class="ma1" bg-color="primary" color="white" disabled>disabled</w-button>
`)]),default:o(()=>[e(n,{class:"ma1","bg-color":"secondary",xs:""},{default:o(()=>[t("extra small")]),_:1}),e(n,{class:"ma1","bg-color":"secondary",sm:""},{default:o(()=>[t("small")]),_:1}),e(n,{class:"ma1","bg-color":"secondary",md:""},{default:o(()=>[t("medium")]),_:1}),e(n,{class:"ma1","bg-color":"secondary",lg:""},{default:o(()=>[t("large")]),_:1}),e(n,{class:"ma1","bg-color":"secondary",xl:""},{default:o(()=>[t("extra large")]),_:1}),e(n,{class:"ma1","bg-color":"secondary",disabled:""},{default:o(()=>[t("disabled")]),_:1}),T,z,e(n,{class:"ma1","bg-color":"primary",color:"white",xs:""},{default:o(()=>[t("extra small")]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",sm:""},{default:o(()=>[t("small")]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",md:""},{default:o(()=>[t("medium")]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",lg:""},{default:o(()=>[t("large")]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",xl:""},{default:o(()=>[t("extra large")]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",disabled:""},{default:o(()=>[t("disabled")]),_:1})]),_:1}),D,e(r,null,{pug:o(()=>[t(`w-flex
  w-button.ma1.grow(bg-color="primary") primary`)]),html:o(()=>[t(`<w-flex>
  <w-button class="ma1 grow" bg-color="primary">primary</w-button>
</w-flex>
`)]),default:o(()=>[e(m,null,{default:o(()=>[e(n,{class:"ma1 grow","bg-color":"primary"},{default:o(()=>[t("primary")]),_:1})]),_:1})]),_:1}),A,I,e(r,{"content-class":"pt6"},{pug:o(()=>[t('w-button.ma1(bg-color="info" width="10em" :height="18") info')]),html:o(()=>[t(`<w-button
  class="ma1 grow"
  bg-color="info"
  width="10em"
  :height="18">
  info
</w-button>
`)]),default:o(()=>[e(n,{class:"ma1","bg-color":"info",width:"10em",height:18},{default:o(()=>[t("info")]),_:1})]),_:1}),e(l,{h2:""},{default:o(()=>[t("Outline")]),_:1}),e(r,null,{pug:o(()=>[t(`w-button.ma1(color="primary" outline xs) extra small
w-button.ma1(color="primary" outline sm) small
w-button.ma1(color="primary" outline md) medium
w-button.ma1(color="primary" outline lg) large
w-button.ma1(color="primary" outline xl) extra large
w-button.ma1(color="primary" outline disabled) disabled`)]),html:o(()=>[t(`<w-button class="ma1" color="primary" outline xs>extra small</w-button>
<w-button class="ma1" color="primary" outline sm>small</w-button>
<w-button class="ma1" color="primary" outline md>medium</w-button>
<w-button class="ma1" color="primary" outline lg>large</w-button>
<w-button class="ma1" color="primary" outline xl>extra large</w-button>
<w-button class="ma1" color="primary" outline disabled>disabled</w-button>
`)]),default:o(()=>[e(n,{class:"ma1",color:"primary",outline:"",xs:""},{default:o(()=>[t("extra small")]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",sm:""},{default:o(()=>[t("small")]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",md:""},{default:o(()=>[t("medium")]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",lg:""},{default:o(()=>[t("large")]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",xl:""},{default:o(()=>[t("extra large")]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",disabled:""},{default:o(()=>[t("disabled")]),_:1})]),_:1}),e(l,{h2:""},{default:o(()=>[t("Text")]),_:1}),e(r,null,{pug:o(()=>[t(`w-button.ma1(color="primary" text xs) extra small
w-button.ma1(color="primary" text sm) small
w-button.ma1(color="primary" text md) medium
w-button.ma1(color="primary" text lg) large
w-button.ma1(color="primary" text xl) extra large
w-button.ma1(color="primary" text disabled) disabled`)]),html:o(()=>[t(`<w-button class="ma1" color="primary" text xs>extra small</w-button>
<w-button class="ma1" color="primary" text sm>small</w-button>
<w-button class="ma1" color="primary" text md>medium</w-button>
<w-button class="ma1" color="primary" text lg>large</w-button>
<w-button class="ma1" color="primary" text xl>extra large</w-button>
<w-button class="ma1" color="primary" text disabled>disabled</w-button>
`)]),default:o(()=>[e(n,{class:"ma1",color:"primary",text:"",xs:""},{default:o(()=>[t("extra small")]),_:1}),e(n,{class:"ma1",color:"primary",text:"",sm:""},{default:o(()=>[t("small")]),_:1}),e(n,{class:"ma1",color:"primary",text:"",md:""},{default:o(()=>[t("medium")]),_:1}),e(n,{class:"ma1",color:"primary",text:"",lg:""},{default:o(()=>[t("large")]),_:1}),e(n,{class:"ma1",color:"primary",text:"",xl:""},{default:o(()=>[t("extra large")]),_:1}),e(n,{class:"ma1",color:"primary",text:"",disabled:""},{default:o(()=>[t("disabled")]),_:1})]),_:1}),e(l,{h2:""},{default:o(()=>[t("Round & tile")]),_:1}),e(r,{"content-class":"w-flex"},{pug:o(()=>[t(`w-button.ma1(round) round
w-button.ma1.mr6(bg-color="secondary" round) round
w-button.ma1(tile) tile
w-button.ma1(bg-color="secondary" tile) tile`)]),html:o(()=>[t(`<w-button class="ma1" round>round</w-button>
<w-button class="ma1 mr6" bg-color="secondary" round>round</w-button>
<w-button class="ma1" tile>tile</w-button>
<w-button class="ma1" bg-color="secondary" tile>tile</w-button>
`)]),default:o(()=>[e(n,{class:"ma1",round:""},{default:o(()=>[t("round")]),_:1}),e(n,{class:"ma1 mr6","bg-color":"secondary",round:""},{default:o(()=>[t("round")]),_:1}),e(n,{class:"ma1",tile:""},{default:o(()=>[t("tile")]),_:1}),e(n,{class:"ma1","bg-color":"secondary",tile:""},{default:o(()=>[t("tile")]),_:1})]),_:1}),e(l,{h2:""},{default:o(()=>[t("Shadow")]),_:1}),e(r,{"content-class":"w-flex"},{pug:o(()=>[t(`w-button.ma1(bg-color="success" shadow) success
w-button.ma1(bg-color="error" shadow) error
w-button.ma1(bg-color="warning" shadow) warning
w-button.ma1(bg-color="info" shadow) info`)]),html:o(()=>[t(`<w-button class="ma1" bg-color="success" shadow>success</w-button>
<w-button class="ma1" bg-color="error" shadow>error</w-button>
<w-button class="ma1" bg-color="warning" shadow>warning</w-button>
<w-button class="ma1" bg-color="info" shadow>info</w-button>
`)]),default:o(()=>[e(n,{class:"ma1","bg-color":"success",shadow:""},{default:o(()=>[t("success")]),_:1}),e(n,{class:"ma1","bg-color":"error",shadow:""},{default:o(()=>[t("error")]),_:1}),e(n,{class:"ma1","bg-color":"warning",shadow:""},{default:o(()=>[t("warning")]),_:1}),e(n,{class:"ma1","bg-color":"info",shadow:""},{default:o(()=>[t("info")]),_:1})]),_:1}),e(l,{h2:""},{default:o(()=>[t("Icons & mixed content")]),_:1}),P,e(r,null,{pug:o(()=>[t(`w-button.ma1(bg-color="error" icon="wi-cross")
w-button.ma1.mr6(bg-color="success" icon="wi-check")

w-button.ma1(bg-color="error")
  w-icon.mr1 wi-cross
  | Cancel
w-button.ma1(bg-color="success")
  w-icon.mr1 wi-check
  | Save`)]),html:o(()=>[t(`<w-button class="ma1" bg-color="error" icon="wi-cross"></w-button>
<w-button class="ma1 mr6" bg-color="success" icon="wi-check"></w-button>

<w-button class="ma1" bg-color="error">
  <w-icon class="mr1">wi-cross</w-icon>
  Cancel
</w-button>
<w-button class="ma1" bg-color="success">
  <w-icon class="mr1">wi-check</w-icon>
  Save
</w-button>
`)]),default:o(()=>[e(n,{class:"ma1","bg-color":"error",icon:"wi-cross"}),e(n,{class:"ma1 mr6","bg-color":"success",icon:"wi-check"}),e(n,{class:"ma1","bg-color":"error"},{default:o(()=>[e(u,{class:"mr1"},{default:o(()=>[t("wi-cross")]),_:1}),t("Cancel")]),_:1}),e(n,{class:"ma1","bg-color":"success"},{default:o(()=>[e(u,{class:"mr1"},{default:o(()=>[t("wi-check")]),_:1}),t("Save")]),_:1})]),_:1}),e(l,{h3:"",slug:"more-control-on-icons"},{default:o(()=>[t("More control on icons using the "),W]),_:1}),e(r,{"content-class":"w-flex"},{pug:o(()=>[t('w-button(icon="wi-star" :icon-props="{ spin: true }") default')]),html:o(()=>[t(`<w-button
  icon="wi-star"
  :icon-props="{ spin: true }">
</w-button>
`)]),default:o(()=>[e(n,{icon:"wi-star","icon-props":{spin:!0}},{default:o(()=>[t("default")]),_:1})]),_:1}),e(l,{h2:""},{default:o(()=>[t("Loading spinner & custom loader")]),_:1}),e(r,{"content-class":"w-flex"},{pug:o(()=>[t(`w-button.ma1(
  :loading="button1loading"
  @click="buttonDoLoading(1)")
  w-icon.mr1 wi-check
  | Save

w-button.ma1.px4(
  :loading="button2loading"
  @click="buttonDoLoading(2)")
  w-icon.mr1 wi-check
  | Save
  template(#loading) Loading...`)]),html:o(()=>[t(`<w-button
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
</w-button>`)]),js:o(()=>[t(`data: () => ({
  button1loading: false,
  button2loading: false
}),
methods: {
  buttonDoLoading (id) {
    this[\`button\${id}loading\`] = true
    setTimeout(() => (this[\`button\${id}loading\`] = false), 3000)
  }
}
`)]),default:o(()=>[e(n,{class:"ma1",loading:s.button1loading,onClick:i[0]||(i[0]=x=>d.buttonDoLoading(1))},{default:o(()=>[e(u,{class:"mr1"},{default:o(()=>[t("wi-check")]),_:1}),t("Save")]),_:1},8,["loading"]),e(n,{class:"ma1 px4",loading:s.button2loading,onClick:i[1]||(i[1]=x=>d.buttonDoLoading(2))},{loading:o(()=>[t("Loading...")]),default:o(()=>[e(u,{class:"mr1"},{default:o(()=>[t("wi-check")]),_:1}),t("Save")]),_:1},8,["loading"])]),_:1}),e(l,{h2:""},{default:o(()=>[t("Links")]),_:1}),H,e(r,{"content-class":"w-flex"},{pug:o(()=>[t(`w-button.ma1(route="/getting-started")
  | Getting started
  w-icon.ml1 wi-chevron-right

w-button.ma1(
  route="https://github.com/antoniandre/wave-ui"
  target="_blank")
  | Github
  w-icon.ml2(sm) mdi mdi-open-in-new`)]),html:o(()=>[t(`<w-button
  class="ma1"
  route="/getting-started"
  target="_blank">
  Getting started
  <w-icon class="ml1">wi-chevron-right</w-icon>
</w-button>

<w-button
  class="ma1"
  route="https://github.com/antoniandre/wave-ui">
  Github
  <w-icon class="ml2" sm>mdi mdi-open-in-new</w-icon>
</w-button>
`)]),default:o(()=>[e(n,{class:"ma1",route:"/getting-started"},{default:o(()=>[t("Getting started"),e(u,{class:"ml1"},{default:o(()=>[t("wi-chevron-right")]),_:1})]),_:1}),e(n,{class:"ma1",route:"https://github.com/antoniandre/wave-ui",target:"_blank"},{default:o(()=>[t("Github"),e(u,{class:"ml2",sm:""},{default:o(()=>[t("mdi mdi-open-in-new")]),_:1})]),_:1})]),_:1}),e(l,{h2:""},{default:o(()=>[t("Integrated tooltip")]),_:1}),B,e(r,{"content-class":"w-flex wrap"},{pug:o(()=>[t(`w-button.ma6(tooltip="Thank you!") Hover me please
w-button.ma6(
  tooltip="Woohoo!"
  :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }").
  Hover me too please`)]),html:o(()=>[t(`<w-button
  class="ma6"
  tooltip="Thank you!">
  Hover me please
</w-button>

<w-button
  class="ma6"
  tooltip="Woohoo!"
  :tooltip-props="{ top: true, transition: 'twist', bgColor: 'success' }">
  Hover me too please
</w-button>`)]),default:o(()=>[e(n,{class:"ma6",tooltip:"Thank you!"},{default:o(()=>[t("Hover me please")]),_:1}),e(n,{class:"ma6",tooltip:"Woohoo!","tooltip-props":{top:!0,transition:"twist",bgColor:"success"}},{default:o(()=>[t("Hover me too please")]),_:1})]),_:1})])}const G={data:()=>({button1loading:!1,button2loading:!1}),methods:{buttonDoLoading(s){this[`button${s}loading`]=!0,setTimeout(()=>this[`button${s}loading`]=!1,3e3)}}},V=p(G,[["render",E]]),N=a("div",{class:"w-divider my12"},null,-1);function R(s,i,h,f,_,d){const l=c("title-link"),n=c("component-api");return w(),g("div",null,[N,e(l,{class:"title1",h2:""},{default:o(()=>[t("API")]),_:1}),e(n,{class:"mt0",items:d.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(n,{items:s.slots,title:"Slots"},null,8,["items"]),e(n,{items:d.events,title:"Events"},null,8,["items"])])}const M={color:`Applies a color to the button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:"When set to true, the text color will be set to white.",outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",text:"Sets the background of the button to transparent. On mouse hover the button background is set to a very light opacity of the given <code>color</code> (primary by default).",round:"Sets a maximum border-radius on the corners of the button, giving it a round look.",shadow:"Applies a drop shadow to the button.",tile:"Removes the default border-radius and sets sharp edges on the button.",route:"When provided, the button becomes a link to this route. A <code>router-link</code> will be generated if you use Vue Router, or a normal link otherwise.",forceLink:"In some cases, you may want to use a normal link instead of a <code>router-link</code>, for instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code> prop to force a normal link.",type:"Applies a native HTML <code>type</code> attribute.",disabled:"Disables the button making it unreactive to user interactions.",loading:"Sets the loading state of the button. While loading, the button is unclickable and a spinner is displayed instead of the button label.",icon:"Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",iconProps:'When using <code>icon</code>, an object of props to pass down to the <strong class="code">w-icon</strong> component for more control.<br>Example of use: <code>&lt;w-button icon="mdi mdi-heart" :icon-props="{ flipY: true }"&gt;&lt;/w-button&gt;</code>',tooltip:"When a string is provided, a tooltip will be added to this button and the provided string will be the content of the tooltip. By default, the tooltip shows on hover, and at the bottom.",tooltipProps:'When using <code>tooltip</code>, an object of props to pass down to the <strong class="code">w-tooltip</strong> component for more control.<br>Example of use: <code>&lt;w-button tooltip="hello" :icon-props="{ top: true }"&gt;&lt;/w-button&gt;</code>',absolute:"Sets the CSS position of the button to <code>absolute</code>.",fixed:"Sets the CSS position of the button to <code>fixed</code>.",top:"Places the button at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the button at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",left:"Places the button at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the button at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the button.",width:"Sets a width on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",xs:"Sets the size of the button.",sm:"Sets the size of the button.",md:"Sets the size of the button.",lg:"Sets the size of the button.",xl:"Sets the size of the button."},j={default:{description:"The button content."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},O={},q={data:()=>({propsDescs:M,slots:j}),computed:{props(){return y.props},events(){return y.emits.reduce((s,i)=>(s[i]={description:O[i]||""})&&s,{})}}},F=p(q,[["render",R]]);function Y(s,i,h,f,_,d){const l=c("ui-component-title"),n=c("examples"),m=c("api");return w(),g("main",null,[e(l,null,{default:o(()=>[t("w-button")]),_:1}),e(n),e(m)])}const J={components:{Examples:V,Api:F}},Q=p(J,[["render",Y]]);export{Q as default};
