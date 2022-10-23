import{r as c,o as b,f as g,a as e,w as t,b as o,d as n,i as w,_ as h,z as _}from"./index.bf306805.js";const k=n("p",null,[o("By default (if no "),n("code",null,"color"),o(" or "),n("code",null,"bg-color"),o(" is applied) the primary color will be applied.")],-1),v=n("p",null,[o(`Setting colors on buttons is quite straightforward:
a text color is set via the attribute `),n("code",null,"color"),o(`, and a background color is set via the
attribute `),n("code",null,"bg-color"),o("."),n("br"),o(`
This allows you to easily mix a background color with a different text color of your choice.`),n("br"),n("br"),o(`

Here is an example of buttons using all types of colors as a background: status colors, primary color,
secondary color and a color palette color shade.`)],-1),S=n("p",null,[n("strong",{class:"mr1"},"Note:"),o("The 4 status colors as well as the primary color have a white text by default.")],-1),$=n("h3",null,"Mix background and text colors",-1),L=n("p",null,[o("Like in most components, you can set a "),n("code",null,"color"),o(" for the text and a "),n("code",null,"bg-color"),o(` for the
background.`)],-1),z=w(`<h3>Dark</h3><p>By default the <code>primary</code> color is considered dark as well as the four status colors:
<code>success</code>, <code>error</code>, <code>warning</code> &amp; <code>info</code>.
They will therefore have a white text by default when used as a background color.<br>
For the rest you can use the <code>dark</code> prop or set the <code>color</code> prop to \`white\`.</p>`,2),D=w(`<p>The button size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>width</code> and <code>height</code> props.</p>`,1),A=n("br",null,null,-1),C=n("br",null,null,-1),T=n("h3",null,"Stretch to the available space",-1),P=n("h3",null,"Custom width and height",-1),I=n("p",null,[o("Even though you can easily override the dimensions via CSS, a "),n("code",null,"width"),o(" and "),n("code",null,"height"),o(` props
are available on the `),n("span",{class:"code"},"w-button"),o(" component.")],-1),B=n("p",null,"Icon buttons are rounded by default.",-1),G=w(`<p>If you are using Vue Router, all the links will automatically be <strong class="code">router-link</strong>s
unless they start with <code>http</code> or <code>https</code>.<br>
In some cases, you may want to use a normal link instead of a <strong class="code">router-link</strong>, for
instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code>
prop to force a normal link.
</p>`,1);function V(s,i,p,f,y,d){const l=c("title-link"),a=c("w-button"),m=c("w-flex"),r=c("example"),u=c("w-icon");return b(),g("div",null,[e(l,{h2:""},{default:t(()=>[o("Default")]),_:1}),k,e(a,{class:"ma1"},{default:t(()=>[o("default")]),_:1}),e(l,{h2:""},{default:t(()=>[o("Colors")]),_:1}),v,S,e(r,null,{pug:t(()=>[o(`w-flex.wrap
  w-button.ma1(bg-color="success") success
  w-button.ma1(bg-color="error") error
  w-button.ma1(bg-color="warning") warning
  w-button.ma1(bg-color="info") info
  w-button.ma1(bg-color="primary") primary
  w-button.ma1(bg-color="secondary") secondary
  w-button.ma1(bg-color="purple-light4") purple-light4`)]),html:t(()=>[o(`<w-flex class="wrap">
  <w-button class="ma1" bg-color="success">success</w-button>
  <w-button class="ma1" bg-color="error">error</w-button>
  <w-button class="ma1" bg-color="warning">warning</w-button>
  <w-button class="ma1" bg-color="info">info</w-button>
  <w-button class="ma1" bg-color="primary">primary</w-button>
  <w-button class="ma1" bg-color="secondary">secondary</w-button>
  <w-button class="ma1" bg-color="purple-light4">purple-light4</w-button>
</w-flex>
`)]),default:t(()=>[e(m,{class:"wrap"},{default:t(()=>[e(a,{class:"ma1","bg-color":"success"},{default:t(()=>[o("success")]),_:1}),e(a,{class:"ma1","bg-color":"error"},{default:t(()=>[o("error")]),_:1}),e(a,{class:"ma1","bg-color":"warning"},{default:t(()=>[o("warning")]),_:1}),e(a,{class:"ma1","bg-color":"info"},{default:t(()=>[o("info")]),_:1}),e(a,{class:"ma1","bg-color":"primary"},{default:t(()=>[o("primary")]),_:1}),e(a,{class:"ma1","bg-color":"secondary"},{default:t(()=>[o("secondary")]),_:1}),e(a,{class:"ma1","bg-color":"purple-light4"},{default:t(()=>[o("purple-light4")]),_:1})]),_:1})]),_:1}),$,L,e(r,null,{pug:t(()=>[o(`w-button.ma1(bg-color="success" color="yellow-light2") success
w-button.ma1(bg-color="error" color="amber-light2") error
w-button.ma1(bg-color="primary" color="success-light2") warning`)]),html:t(()=>[o(`<w-button
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
`)]),default:t(()=>[e(a,{class:"ma1","bg-color":"success",color:"yellow-light2"},{default:t(()=>[o("success")]),_:1}),e(a,{class:"ma1","bg-color":"error",color:"amber-light2"},{default:t(()=>[o("error")]),_:1}),e(a,{class:"ma1","bg-color":"primary",color:"success-light2"},{default:t(()=>[o("warning")]),_:1})]),_:1}),z,e(r,null,{pug:t(()=>[o(`w-button.ma1(bg-color="primary-light3") normal
w-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right
w-button.ma1(bg-color="primary-light3" dark) dark`)]),html:t(()=>[o(`<w-button class="ma1" bg-color="primary-light3">normal</w-button>

<w-icon class="mx6 grey-light3" size="2.5em">mdi mdi-arrow-right</w-icon>

<w-button class="ma1" bg-color="primary-light3" dark>dark</w-button>
`)]),default:t(()=>[e(a,{class:"ma1","bg-color":"primary-light3"},{default:t(()=>[o("normal")]),_:1}),e(u,{class:"mx6 grey-light3",size:"2.5em"},{default:t(()=>[o("mdi mdi-arrow-right")]),_:1}),e(a,{class:"ma1","bg-color":"primary-light3",dark:""},{default:t(()=>[o("dark")]),_:1})]),_:1}),e(l,{h2:""},{default:t(()=>[o("Sizes")]),_:1}),D,e(r,null,{pug:t(()=>[o(`w-button.ma1(bg-color="secondary" xs) extra small
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
w-button.ma1(bg-color="primary" color="white" disabled) disabled`)]),html:t(()=>[o(`<w-button class="ma1" bg-color="secondary" xs>extra small</w-button>
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
`)]),default:t(()=>[e(a,{class:"ma1","bg-color":"secondary",xs:""},{default:t(()=>[o("extra small")]),_:1}),e(a,{class:"ma1","bg-color":"secondary",sm:""},{default:t(()=>[o("small")]),_:1}),e(a,{class:"ma1","bg-color":"secondary",md:""},{default:t(()=>[o("medium")]),_:1}),e(a,{class:"ma1","bg-color":"secondary",lg:""},{default:t(()=>[o("large")]),_:1}),e(a,{class:"ma1","bg-color":"secondary",xl:""},{default:t(()=>[o("extra large")]),_:1}),e(a,{class:"ma1","bg-color":"secondary",disabled:""},{default:t(()=>[o("disabled")]),_:1}),A,C,e(a,{class:"ma1","bg-color":"primary",color:"white",xs:""},{default:t(()=>[o("extra small")]),_:1}),e(a,{class:"ma1","bg-color":"primary",color:"white",sm:""},{default:t(()=>[o("small")]),_:1}),e(a,{class:"ma1","bg-color":"primary",color:"white",md:""},{default:t(()=>[o("medium")]),_:1}),e(a,{class:"ma1","bg-color":"primary",color:"white",lg:""},{default:t(()=>[o("large")]),_:1}),e(a,{class:"ma1","bg-color":"primary",color:"white",xl:""},{default:t(()=>[o("extra large")]),_:1}),e(a,{class:"ma1","bg-color":"primary",color:"white",disabled:""},{default:t(()=>[o("disabled")]),_:1})]),_:1}),T,e(r,null,{pug:t(()=>[o(`w-flex
  w-button.ma1.grow(bg-color="primary") primary`)]),html:t(()=>[o(`<w-flex>
  <w-button class="ma1 grow" bg-color="primary">primary</w-button>
</w-flex>
`)]),default:t(()=>[e(m,null,{default:t(()=>[e(a,{class:"ma1 grow","bg-color":"primary"},{default:t(()=>[o("primary")]),_:1})]),_:1})]),_:1}),P,I,e(r,{"content-class":"pt6"},{pug:t(()=>[o('w-button.ma1(bg-color="info" width="10em" :height="18") info')]),html:t(()=>[o(`<w-button
  class="ma1 grow"
  bg-color="info"
  width="10em"
  :height="18">
  info
</w-button>
`)]),default:t(()=>[e(a,{class:"ma1","bg-color":"info",width:"10em",height:18},{default:t(()=>[o("info")]),_:1})]),_:1}),e(l,{h2:""},{default:t(()=>[o("Outline")]),_:1}),e(r,null,{pug:t(()=>[o(`w-button.ma1(color="primary" outline xs) extra small
w-button.ma1(color="primary" outline sm) small
w-button.ma1(color="primary" outline md) medium
w-button.ma1(color="primary" outline lg) large
w-button.ma1(color="primary" outline xl) extra large
w-button.ma1(color="primary" outline disabled) disabled`)]),html:t(()=>[o(`<w-button class="ma1" color="primary" outline xs>extra small</w-button>
<w-button class="ma1" color="primary" outline sm>small</w-button>
<w-button class="ma1" color="primary" outline md>medium</w-button>
<w-button class="ma1" color="primary" outline lg>large</w-button>
<w-button class="ma1" color="primary" outline xl>extra large</w-button>
<w-button class="ma1" color="primary" outline disabled>disabled</w-button>
`)]),default:t(()=>[e(a,{class:"ma1",color:"primary",outline:"",xs:""},{default:t(()=>[o("extra small")]),_:1}),e(a,{class:"ma1",color:"primary",outline:"",sm:""},{default:t(()=>[o("small")]),_:1}),e(a,{class:"ma1",color:"primary",outline:"",md:""},{default:t(()=>[o("medium")]),_:1}),e(a,{class:"ma1",color:"primary",outline:"",lg:""},{default:t(()=>[o("large")]),_:1}),e(a,{class:"ma1",color:"primary",outline:"",xl:""},{default:t(()=>[o("extra large")]),_:1}),e(a,{class:"ma1",color:"primary",outline:"",disabled:""},{default:t(()=>[o("disabled")]),_:1})]),_:1}),e(l,{h2:""},{default:t(()=>[o("Text")]),_:1}),e(r,null,{pug:t(()=>[o(`w-button.ma1(color="primary" text xs) extra small
w-button.ma1(color="primary" text sm) small
w-button.ma1(color="primary" text md) medium
w-button.ma1(color="primary" text lg) large
w-button.ma1(color="primary" text xl) extra large
w-button.ma1(color="primary" text disabled) disabled`)]),html:t(()=>[o(`<w-button class="ma1" color="primary" text xs>extra small</w-button>
<w-button class="ma1" color="primary" text sm>small</w-button>
<w-button class="ma1" color="primary" text md>medium</w-button>
<w-button class="ma1" color="primary" text lg>large</w-button>
<w-button class="ma1" color="primary" text xl>extra large</w-button>
<w-button class="ma1" color="primary" text disabled>disabled</w-button>
`)]),default:t(()=>[e(a,{class:"ma1",color:"primary",text:"",xs:""},{default:t(()=>[o("extra small")]),_:1}),e(a,{class:"ma1",color:"primary",text:"",sm:""},{default:t(()=>[o("small")]),_:1}),e(a,{class:"ma1",color:"primary",text:"",md:""},{default:t(()=>[o("medium")]),_:1}),e(a,{class:"ma1",color:"primary",text:"",lg:""},{default:t(()=>[o("large")]),_:1}),e(a,{class:"ma1",color:"primary",text:"",xl:""},{default:t(()=>[o("extra large")]),_:1}),e(a,{class:"ma1",color:"primary",text:"",disabled:""},{default:t(()=>[o("disabled")]),_:1})]),_:1}),e(l,{h2:""},{default:t(()=>[o("Round & tile")]),_:1}),e(r,{"content-class":"w-flex"},{pug:t(()=>[o(`w-button.ma1(bg-color="primary" round) round
w-button.ma1.mr6(bg-color="secondary" round) round
w-button.ma1(bg-color="primary" tile) tile
w-button.ma1(bg-color="secondary" tile) tile`)]),html:t(()=>[o(`<w-button class="ma1" bg-color="primary" round>round</w-button>
<w-button class="ma1 mr6" bg-color="secondary" round>round</w-button>
<w-button class="ma1" bg-color="primary" tile>tile</w-button>
<w-button class="ma1" bg-color="secondary" tile>tile</w-button>
`)]),default:t(()=>[e(a,{class:"ma1","bg-color":"primary",round:""},{default:t(()=>[o("round")]),_:1}),e(a,{class:"ma1 mr6","bg-color":"secondary",round:""},{default:t(()=>[o("round")]),_:1}),e(a,{class:"ma1","bg-color":"primary",tile:""},{default:t(()=>[o("tile")]),_:1}),e(a,{class:"ma1","bg-color":"secondary",tile:""},{default:t(()=>[o("tile")]),_:1})]),_:1}),e(l,{h2:""},{default:t(()=>[o("Shadow")]),_:1}),e(r,{"content-class":"w-flex"},{pug:t(()=>[o(`w-button.ma1(bg-color="success" shadow) success
w-button.ma1(bg-color="error" shadow) error
w-button.ma1(bg-color="warning" shadow) warning
w-button.ma1(bg-color="info" shadow) info`)]),html:t(()=>[o(`<w-button class="ma1" bg-color="success" shadow>success</w-button>
<w-button class="ma1" bg-color="error" shadow>error</w-button>
<w-button class="ma1" bg-color="warning" shadow>warning</w-button>
<w-button class="ma1" bg-color="info" shadow>info</w-button>
`)]),default:t(()=>[e(a,{class:"ma1","bg-color":"success",shadow:""},{default:t(()=>[o("success")]),_:1}),e(a,{class:"ma1","bg-color":"error",shadow:""},{default:t(()=>[o("error")]),_:1}),e(a,{class:"ma1","bg-color":"warning",shadow:""},{default:t(()=>[o("warning")]),_:1}),e(a,{class:"ma1","bg-color":"info",shadow:""},{default:t(()=>[o("info")]),_:1})]),_:1}),e(l,{h2:""},{default:t(()=>[o("Icons & mixed content")]),_:1}),B,e(r,null,{pug:t(()=>[o(`w-button.ma1(bg-color="error" icon="wi-cross")
w-button.ma1.mr6(bg-color="success" icon="wi-check")

w-button.ma1(bg-color="error")
  w-icon.mr1 wi-cross
  | Cancel
w-button.ma1(bg-color="success")
  w-icon.mr1 wi-check
  | Save`)]),html:t(()=>[o(`<w-button class="ma1" bg-color="error" icon="wi-cross"></w-button>
<w-button class="ma1 mr6" bg-color="success" icon="wi-check"></w-button>

<w-button class="ma1" bg-color="error">
  <w-icon class="mr1">wi-cross</w-icon>
  Cancel
</w-button>
<w-button class="ma1" bg-color="success">
  <w-icon class="mr1">wi-check</w-icon>
  Save
</w-button>
`)]),default:t(()=>[e(a,{class:"ma1","bg-color":"error",icon:"wi-cross"}),e(a,{class:"ma1 mr6","bg-color":"success",icon:"wi-check"}),e(a,{class:"ma1","bg-color":"error"},{default:t(()=>[e(u,{class:"mr1"},{default:t(()=>[o("wi-cross")]),_:1}),o("Cancel")]),_:1}),e(a,{class:"ma1","bg-color":"success"},{default:t(()=>[e(u,{class:"mr1"},{default:t(()=>[o("wi-check")]),_:1}),o("Save")]),_:1})]),_:1}),e(l,{h2:""},{default:t(()=>[o("Loading spinner & custom loader")]),_:1}),e(r,{"content-class":"w-flex"},{pug:t(()=>[o(`w-button.ma1(
  bg-color="primary"
  :loading="button1loading"
  @click="buttonDoLoading(1)")
  w-icon.mr1 wi-check
  | Save

w-button.ma1.px4(
  bg-color="primary"
  :loading="button2loading"
  @click="buttonDoLoading(2)")
  w-icon.mr1 wi-check
  | Save
  template(#loading) Loading...`)]),html:t(()=>[o(`<w-button
  class="ma1"
  bg-color="primary"
  :loading="button1loading"
  @click="buttonDoLoading(1)">
  <w-icon class="mr1" >wi-check</w-icon>
  Save
</w-button>

<w-button
  class="ma1 px4"
  bg-color="primary"
  :loading="button2loading"
  @click="buttonDoLoading(2)">
  <w-icon class="mr1" >wi-check</w-icon>
  Save
  <template #loading>Loading...</template>
</w-button>`)]),js:t(()=>[o(`data: () => ({
  button1loading: false,
  button2loading: false
}),
methods: {
  buttonDoLoading (id) {
    this[\`button\${id}loading\`] = true
    setTimeout(() => (this[\`button\${id}loading\`] = false), 3000)
  }
}
`)]),default:t(()=>[e(a,{class:"ma1","bg-color":"primary",loading:s.button1loading,onClick:i[0]||(i[0]=x=>d.buttonDoLoading(1))},{default:t(()=>[e(u,{class:"mr1"},{default:t(()=>[o("wi-check")]),_:1}),o("Save")]),_:1},8,["loading"]),e(a,{class:"ma1 px4","bg-color":"primary",loading:s.button2loading,onClick:i[1]||(i[1]=x=>d.buttonDoLoading(2))},{loading:t(()=>[o("Loading...")]),default:t(()=>[e(u,{class:"mr1"},{default:t(()=>[o("wi-check")]),_:1}),o("Save")]),_:1},8,["loading"])]),_:1}),e(l,{h2:""},{default:t(()=>[o("Links")]),_:1}),G,e(r,{"content-class":"w-flex"},{pug:t(()=>[o(`w-button.ma1(bg-color="primary" route="/getting-started")
  | Getting started
  w-icon.ml1 wi-chevron-right

w-button.ma1(
  bg-color="primary"
  route="https://github.com/antoniandre/wave-ui"
  target="_blank")
  | Github
  w-icon.ml2(sm) mdi mdi-open-in-new`)]),html:t(()=>[o(`<w-button
  class="ma1"
  bg-color="primary"
  route="/getting-started"
  target="_blank">
  Getting started
  <w-icon class="ml1">wi-chevron-right</w-icon>
</w-button>

<w-button
  class="ma1"
  bg-color="primary"
  route="https://github.com/antoniandre/wave-ui">
  Github
  <w-icon class="ml2" sm>mdi mdi-open-in-new</w-icon>
</w-button>`)]),default:t(()=>[e(a,{class:"ma1","bg-color":"primary",route:"/getting-started"},{default:t(()=>[o("Getting started"),e(u,{class:"ml1"},{default:t(()=>[o("wi-chevron-right")]),_:1})]),_:1}),e(a,{class:"ma1","bg-color":"primary",route:"https://github.com/antoniandre/wave-ui",target:"_blank"},{default:t(()=>[o("Github"),e(u,{class:"ml2",sm:""},{default:t(()=>[o("mdi mdi-open-in-new")]),_:1})]),_:1})]),_:1})])}const E={data:()=>({button1loading:!1,button2loading:!1}),methods:{buttonDoLoading(s){this[`button${s}loading`]=!0,setTimeout(()=>this[`button${s}loading`]=!1,3e3)}}},N=h(E,[["render",V]]),W=n("div",{class:"w-divider my12"},null,-1);function R(s,i,p,f,y,d){const l=c("title-link"),a=c("component-api");return b(),g("div",null,[W,e(l,{class:"title1",h2:""},{default:t(()=>[o("API")]),_:1}),e(a,{class:"mt0",items:d.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(a,{items:s.slots,title:"Slots"},null,8,["items"]),e(a,{items:d.events,title:"Events"},null,8,["items"])])}const H={color:`Applies a color to the button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:"When set to true, the text color will be set to white.",outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",text:"Sets the background of the button to transparent. On mouse hover the button background is set to a very light opacity of the given <code>color</code> (primary by default).",round:"Sets a maximum border-radius on the corners of the button, giving it a round look.",shadow:"Applies a drop shadow to the button.",tile:"Removes the default border-radius and sets sharp edges on the button.",route:"When provided, the button becomes a link to this route. A <code>router-link</code> will be generated if you use Vue Router, or a normal link otherwise.",forceLink:"In some cases, you may want to use a normal link instead of a <code>router-link</code>, for instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code> prop to force a normal link.",type:"Applies a native HTML <code>type</code> attribute.",disabled:"Disables the button making it unreactive to user interactions.",loading:"Sets the loading state of the button. While loading, the button is unclickable and a spinner is displayed instead of the button label.",icon:"Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",iconProps:'When using <code>icon</code>, an object of props to pass down to the <strong class="code">w-icon</strong> component for more control.<br>Example of use: <code>&lt;w-button icon="mdi mdi-heart" :icon-props="{ flipY: true }"&gt;&lt;/w-button&gt;</code>',absolute:"Sets the CSS position of the button to <code>absolute</code>.",fixed:"Sets the CSS position of the button to <code>fixed</code>.",top:"Places the button at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the button at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",left:"Places the button at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the button at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the button.",width:"Sets a width on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",xs:"Sets the size of the button.",sm:"Sets the size of the button.",md:"Sets the size of the button.",lg:"Sets the size of the button.",xl:"Sets the size of the button."},M={default:{description:"The button content."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},O={},j={data:()=>({propsDescs:H,slots:M}),computed:{props(){return _.props},events(){return _.emits.reduce((s,i)=>(s[i]={description:O[i]||""})&&s,{})}}},q=h(j,[["render",R]]);function F(s,i,p,f,y,d){const l=c("ui-component-title"),a=c("examples"),m=c("api");return b(),g("main",null,[e(l,null,{default:t(()=>[o("w-button")]),_:1}),e(a),e(m)])}const Y={components:{Examples:N,Api:q}},K=h(Y,[["render",F]]);export{K as default};
