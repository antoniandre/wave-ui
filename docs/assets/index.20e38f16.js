import{r as c,o as b,e as h,f as e,w as t,i as o,g as s,N as g}from"./vendor.e64646cc.js";import{_,e as y}from"./index.f3654a4f.js";const k=o("Default"),v=s("p",null,[o("By default (if no "),s("code",null,"color"),o(" or "),s("code",null,"bg-color"),o(" is applied) the primary color will be applied.")],-1),S=o("default"),$=o("Colors"),L=s("p",null,[o(`Setting colors on buttons is quite straightforward:
a text color is set via the attribute `),s("code",null,"color"),o(`, and a background color is set via the
attribute `),s("code",null,"bg-color"),o("."),s("br"),o(`
This allows you to easily mix a background color with a different text color of your choice.`),s("br"),s("br"),o(`

Here is an example of buttons using all types of colors as a background: status colors, primary color,
secondary color and a color palette color shade.`)],-1),D=s("p",null,[s("strong",{class:"mr1"},"Note:"),o("The 4 status colors as well as the primary color have a white text by default.")],-1),z=o("success"),A=o("error"),C=o("warning"),T=o("info"),I=o("primary"),P=o("secondary"),B=o("purple-light4"),G=o(`w-flex.wrap
  w-button.ma1(bg-color="success") success
  w-button.ma1(bg-color="error") error
  w-button.ma1(bg-color="warning") warning
  w-button.ma1(bg-color="info") info
  w-button.ma1(bg-color="primary") primary
  w-button.ma1(bg-color="secondary") secondary
  w-button.ma1(bg-color="purple-light4") purple-light4`),N=o(`<w-flex class="wrap">
  <w-button class="ma1" bg-color="success">success</w-button>
  <w-button class="ma1" bg-color="error">error</w-button>
  <w-button class="ma1" bg-color="warning">warning</w-button>
  <w-button class="ma1" bg-color="info">info</w-button>
  <w-button class="ma1" bg-color="primary">primary</w-button>
  <w-button class="ma1" bg-color="secondary">secondary</w-button>
  <w-button class="ma1" bg-color="purple-light4">purple-light4</w-button>
</w-flex>
`),V=s("h3",null,"Mix background and text colors",-1),E=s("p",null,[o("Like in most components, you can set a "),s("code",null,"color"),o(" for the text and a "),s("code",null,"bg-color"),o(` for the
background.`)],-1),R=o("success"),W=o("error"),j=o("warning"),H=o(`w-button.ma1(bg-color="success" color="yellow-light2") success
w-button.ma1(bg-color="error" color="amber-light2") error
w-button.ma1(bg-color="primary" color="success-light2") warning`),M=o(`<w-button
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
`),O=g(`<h3>Dark</h3><p>By default the <code>primary</code> color is considered dark as well as the four status colors:
<code>success</code>, <code>error</code>, <code>warning</code> &amp; <code>info</code>.
They will therefore have a white text by default when used as a background color.<br>
For the rest you can use the <code>dark</code> prop or set the <code>color</code> prop to \`white\`.</p>`,2),q=o("normal"),F=o("mdi mdi-arrow-right"),J=o("dark"),K=o(`w-button.ma1(bg-color="primary-light3") normal
w-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right
w-button.ma1(bg-color="primary-light3" dark) dark`),Q=o(`<w-button class="ma1" bg-color="primary-light3">normal</w-button>

<w-icon class="mx6 grey-light3" size="2.5em">mdi mdi-arrow-right</w-icon>

<w-button class="ma1" bg-color="primary-light3" dark>dark</w-button>
`),U=o("Sizes"),X=g(`<p>The button size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>width</code> and <code>height</code> props.</p>`,1),Y=o("extra small"),Z=o("small"),oo=o("medium"),to=o("large"),eo=o("extra large"),no=o("disabled"),so=s("br",null,null,-1),ao=s("br",null,null,-1),lo=o("extra small"),ro=o("small"),co=o("medium"),io=o("large"),uo=o("extra large"),mo=o("disabled"),bo=o(`w-button.ma1(bg-color="secondary" xs) extra small
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
w-button.ma1(bg-color="primary" color="white" disabled) disabled`),ho=o(`<w-button class="ma1" bg-color="secondary" xs>extra small</w-button>
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
`),go=s("h3",null,"Stretch to the available space",-1),_o=o("primary"),wo=o(`w-flex
  w-button.ma1.grow(bg-color="primary") primary`),po=o(`<w-flex>
  <w-button class="ma1 grow" bg-color="primary">primary</w-button>
</w-flex>
`),fo=s("h3",null,"Custom width and height",-1),yo=s("p",null,[o("Even though you can easily override the dimensions via CSS, a "),s("code",null,"width"),o(" and "),s("code",null,"height"),o(` props
are available on the `),s("span",{class:"code"},"w-button"),o(" component.")],-1),xo=o("info"),ko=o('w-button.ma1(bg-color="info" width="10em" :height="18") info'),vo=o(`<w-button
  class="ma1 grow"
  bg-color="info"
  width="10em"
  :height="18">
  info
</w-button>
`),So=o("Outline"),$o=o("extra small"),Lo=o("small"),Do=o("medium"),zo=o("large"),Ao=o("extra large"),Co=o("disabled"),To=o(`w-button.ma1(color="primary" outline xs) extra small
w-button.ma1(color="primary" outline sm) small
w-button.ma1(color="primary" outline md) medium
w-button.ma1(color="primary" outline lg) large
w-button.ma1(color="primary" outline xl) extra large
w-button.ma1(color="primary" outline disabled) disabled`),Io=o(`<w-button class="ma1" color="primary" outline xs>extra small</w-button>
<w-button class="ma1" color="primary" outline sm>small</w-button>
<w-button class="ma1" color="primary" outline md>medium</w-button>
<w-button class="ma1" color="primary" outline lg>large</w-button>
<w-button class="ma1" color="primary" outline xl>extra large</w-button>
<w-button class="ma1" color="primary" outline disabled>disabled</w-button>
`),Po=o("Text"),Bo=o("extra small"),Go=o("small"),No=o("medium"),Vo=o("large"),Eo=o("extra large"),Ro=o("disabled"),Wo=o(`w-button.ma1(color="primary" text xs) extra small
w-button.ma1(color="primary" text sm) small
w-button.ma1(color="primary" text md) medium
w-button.ma1(color="primary" text lg) large
w-button.ma1(color="primary" text xl) extra large
w-button.ma1(color="primary" text disabled) disabled`),jo=o(`<w-button class="ma1" color="primary" text xs>extra small</w-button>
<w-button class="ma1" color="primary" text sm>small</w-button>
<w-button class="ma1" color="primary" text md>medium</w-button>
<w-button class="ma1" color="primary" text lg>large</w-button>
<w-button class="ma1" color="primary" text xl>extra large</w-button>
<w-button class="ma1" color="primary" text disabled>disabled</w-button>
`),Ho=o("Round & tile"),Mo=o("round"),Oo=o("round"),qo=o("tile"),Fo=o("tile"),Jo=o(`w-button.ma1(bg-color="primary" round) round
w-button.ma1.mr6(bg-color="secondary" round) round
w-button.ma1(bg-color="primary" tile) tile
w-button.ma1(bg-color="secondary" tile) tile`),Ko=o(`<w-button class="ma1" bg-color="primary" round>round</w-button>
<w-button class="ma1 mr6" bg-color="secondary" round>round</w-button>
<w-button class="ma1" bg-color="primary" tile>tile</w-button>
<w-button class="ma1" bg-color="secondary" tile>tile</w-button>
`),Qo=o("Shadow"),Uo=o("success"),Xo=o("error"),Yo=o("warning"),Zo=o("info"),ot=o(`w-button.ma1(bg-color="success" shadow) success
w-button.ma1(bg-color="error" shadow) error
w-button.ma1(bg-color="warning" shadow) warning
w-button.ma1(bg-color="info" shadow) info`),tt=o(`<w-button class="ma1" bg-color="success" shadow>success</w-button>
<w-button class="ma1" bg-color="error" shadow>error</w-button>
<w-button class="ma1" bg-color="warning" shadow>warning</w-button>
<w-button class="ma1" bg-color="info" shadow>info</w-button>
`),et=o("Icons & mixed content"),nt=s("p",null,"Icon buttons are rounded by default.",-1),st=o("wi-cross"),at=o("Cancel"),lt=o("wi-check"),rt=o("Save"),ct=o(`w-button.ma1(bg-color="error" icon="wi-cross")
w-button.ma1.mr6(bg-color="success" icon="wi-check")

w-button.ma1(bg-color="error")
  w-icon.mr1 wi-cross
  | Cancel
w-button.ma1(bg-color="success")
  w-icon.mr1 wi-check
  | Save`),it=o(`<w-button class="ma1" bg-color="error" icon="wi-cross"></w-button>
<w-button class="ma1 mr6" bg-color="success" icon="wi-check"></w-button>

<w-button class="ma1" bg-color="error">
  <w-icon class="mr1">wi-cross</w-icon>
  Cancel
</w-button>
<w-button class="ma1" bg-color="success">
  <w-icon class="mr1">wi-check</w-icon>
  Save
</w-button>
`),dt=o("Loading spinner & custom loader"),ut=o("wi-check"),mt=o("Save"),bt=o("wi-check"),ht=o("Save"),gt=o("Loading..."),_t=o(`w-button.ma1(
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
  template(#loading) Loading...`),wt=o(`<w-button
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
</w-button>`),pt=o(`data: () => ({
  button1loading: false,
  button2loading: false
}),
methods: {
  buttonDoLoading (id) {
    this[\`button\${id}loading\`] = true
    setTimeout(() => (this[\`button\${id}loading\`] = false), 3000)
  }
}
`),ft=o("Links"),yt=g(`<p>If you are using Vue Router, all the links will automatically be <strong class="code">router-link</strong>s
unless they start with <code>http</code> or <code>https</code>.<br>
In some cases, you may want to use a normal link instead of a <strong class="code">router-link</strong>, for
instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code>
prop to force a normal link.
</p>`,1),xt=o("Getting started"),kt=o("wi-chevron-right"),vt=o("Github"),St=o("mdi mdi-open-in-new"),$t=o(`w-button.ma1(bg-color="primary" route="/getting-started")
  | Getting started
  w-icon.ml1 wi-chevron-right

w-button.ma1(
  bg-color="primary"
  route="https://github.com/antoniandre/wave-ui"
  target="_blank")
  | Github
  w-icon.ml2(sm) mdi mdi-open-in-new`),Lt=o(`<w-button
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
</w-button>`);function Dt(r,i,w,p,f,u){const a=c("title-link"),n=c("w-button"),m=c("w-flex"),l=c("example"),d=c("w-icon");return b(),h("div",null,[e(a,{h2:""},{default:t(()=>[k]),_:1}),v,e(n,{class:"ma1"},{default:t(()=>[S]),_:1}),e(a,{h2:""},{default:t(()=>[$]),_:1}),L,D,e(l,null,{pug:t(()=>[G]),html:t(()=>[N]),default:t(()=>[e(m,{class:"wrap"},{default:t(()=>[e(n,{class:"ma1","bg-color":"success"},{default:t(()=>[z]),_:1}),e(n,{class:"ma1","bg-color":"error"},{default:t(()=>[A]),_:1}),e(n,{class:"ma1","bg-color":"warning"},{default:t(()=>[C]),_:1}),e(n,{class:"ma1","bg-color":"info"},{default:t(()=>[T]),_:1}),e(n,{class:"ma1","bg-color":"primary"},{default:t(()=>[I]),_:1}),e(n,{class:"ma1","bg-color":"secondary"},{default:t(()=>[P]),_:1}),e(n,{class:"ma1","bg-color":"purple-light4"},{default:t(()=>[B]),_:1})]),_:1})]),_:1}),V,E,e(l,null,{pug:t(()=>[H]),html:t(()=>[M]),default:t(()=>[e(n,{class:"ma1","bg-color":"success",color:"yellow-light2"},{default:t(()=>[R]),_:1}),e(n,{class:"ma1","bg-color":"error",color:"amber-light2"},{default:t(()=>[W]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"success-light2"},{default:t(()=>[j]),_:1})]),_:1}),O,e(l,null,{pug:t(()=>[K]),html:t(()=>[Q]),default:t(()=>[e(n,{class:"ma1","bg-color":"primary-light3"},{default:t(()=>[q]),_:1}),e(d,{class:"mx6 grey-light3",size:"2.5em"},{default:t(()=>[F]),_:1}),e(n,{class:"ma1","bg-color":"primary-light3",dark:""},{default:t(()=>[J]),_:1})]),_:1}),e(a,{h2:""},{default:t(()=>[U]),_:1}),X,e(l,null,{pug:t(()=>[bo]),html:t(()=>[ho]),default:t(()=>[e(n,{class:"ma1","bg-color":"secondary",xs:""},{default:t(()=>[Y]),_:1}),e(n,{class:"ma1","bg-color":"secondary",sm:""},{default:t(()=>[Z]),_:1}),e(n,{class:"ma1","bg-color":"secondary",md:""},{default:t(()=>[oo]),_:1}),e(n,{class:"ma1","bg-color":"secondary",lg:""},{default:t(()=>[to]),_:1}),e(n,{class:"ma1","bg-color":"secondary",xl:""},{default:t(()=>[eo]),_:1}),e(n,{class:"ma1","bg-color":"secondary",disabled:""},{default:t(()=>[no]),_:1}),so,ao,e(n,{class:"ma1","bg-color":"primary",color:"white",xs:""},{default:t(()=>[lo]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",sm:""},{default:t(()=>[ro]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",md:""},{default:t(()=>[co]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",lg:""},{default:t(()=>[io]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",xl:""},{default:t(()=>[uo]),_:1}),e(n,{class:"ma1","bg-color":"primary",color:"white",disabled:""},{default:t(()=>[mo]),_:1})]),_:1}),go,e(l,null,{pug:t(()=>[wo]),html:t(()=>[po]),default:t(()=>[e(m,null,{default:t(()=>[e(n,{class:"ma1 grow","bg-color":"primary"},{default:t(()=>[_o]),_:1})]),_:1})]),_:1}),fo,yo,e(l,{"content-class":"pt6"},{pug:t(()=>[ko]),html:t(()=>[vo]),default:t(()=>[e(n,{class:"ma1","bg-color":"info",width:"10em",height:18},{default:t(()=>[xo]),_:1})]),_:1}),e(a,{h2:""},{default:t(()=>[So]),_:1}),e(l,null,{pug:t(()=>[To]),html:t(()=>[Io]),default:t(()=>[e(n,{class:"ma1",color:"primary",outline:"",xs:""},{default:t(()=>[$o]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",sm:""},{default:t(()=>[Lo]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",md:""},{default:t(()=>[Do]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",lg:""},{default:t(()=>[zo]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",xl:""},{default:t(()=>[Ao]),_:1}),e(n,{class:"ma1",color:"primary",outline:"",disabled:""},{default:t(()=>[Co]),_:1})]),_:1}),e(a,{h2:""},{default:t(()=>[Po]),_:1}),e(l,null,{pug:t(()=>[Wo]),html:t(()=>[jo]),default:t(()=>[e(n,{class:"ma1",color:"primary",text:"",xs:""},{default:t(()=>[Bo]),_:1}),e(n,{class:"ma1",color:"primary",text:"",sm:""},{default:t(()=>[Go]),_:1}),e(n,{class:"ma1",color:"primary",text:"",md:""},{default:t(()=>[No]),_:1}),e(n,{class:"ma1",color:"primary",text:"",lg:""},{default:t(()=>[Vo]),_:1}),e(n,{class:"ma1",color:"primary",text:"",xl:""},{default:t(()=>[Eo]),_:1}),e(n,{class:"ma1",color:"primary",text:"",disabled:""},{default:t(()=>[Ro]),_:1})]),_:1}),e(a,{h2:""},{default:t(()=>[Ho]),_:1}),e(l,{"content-class":"w-flex"},{pug:t(()=>[Jo]),html:t(()=>[Ko]),default:t(()=>[e(n,{class:"ma1","bg-color":"primary",round:""},{default:t(()=>[Mo]),_:1}),e(n,{class:"ma1 mr6","bg-color":"secondary",round:""},{default:t(()=>[Oo]),_:1}),e(n,{class:"ma1","bg-color":"primary",tile:""},{default:t(()=>[qo]),_:1}),e(n,{class:"ma1","bg-color":"secondary",tile:""},{default:t(()=>[Fo]),_:1})]),_:1}),e(a,{h2:""},{default:t(()=>[Qo]),_:1}),e(l,{"content-class":"w-flex"},{pug:t(()=>[ot]),html:t(()=>[tt]),default:t(()=>[e(n,{class:"ma1","bg-color":"success",shadow:""},{default:t(()=>[Uo]),_:1}),e(n,{class:"ma1","bg-color":"error",shadow:""},{default:t(()=>[Xo]),_:1}),e(n,{class:"ma1","bg-color":"warning",shadow:""},{default:t(()=>[Yo]),_:1}),e(n,{class:"ma1","bg-color":"info",shadow:""},{default:t(()=>[Zo]),_:1})]),_:1}),e(a,{h2:""},{default:t(()=>[et]),_:1}),nt,e(l,null,{pug:t(()=>[ct]),html:t(()=>[it]),default:t(()=>[e(n,{class:"ma1","bg-color":"error",icon:"wi-cross"}),e(n,{class:"ma1 mr6","bg-color":"success",icon:"wi-check"}),e(n,{class:"ma1","bg-color":"error"},{default:t(()=>[e(d,{class:"mr1"},{default:t(()=>[st]),_:1}),at]),_:1}),e(n,{class:"ma1","bg-color":"success"},{default:t(()=>[e(d,{class:"mr1"},{default:t(()=>[lt]),_:1}),rt]),_:1})]),_:1}),e(a,{h2:""},{default:t(()=>[dt]),_:1}),e(l,{"content-class":"w-flex"},{pug:t(()=>[_t]),html:t(()=>[wt]),js:t(()=>[pt]),default:t(()=>[e(n,{class:"ma1","bg-color":"primary",loading:r.button1loading,onClick:i[0]||(i[0]=x=>u.buttonDoLoading(1))},{default:t(()=>[e(d,{class:"mr1"},{default:t(()=>[ut]),_:1}),mt]),_:1},8,["loading"]),e(n,{class:"ma1 px4","bg-color":"primary",loading:r.button2loading,onClick:i[1]||(i[1]=x=>u.buttonDoLoading(2))},{loading:t(()=>[gt]),default:t(()=>[e(d,{class:"mr1"},{default:t(()=>[bt]),_:1}),ht]),_:1},8,["loading"])]),_:1}),e(a,{h2:""},{default:t(()=>[ft]),_:1}),yt,e(l,{"content-class":"w-flex"},{pug:t(()=>[$t]),html:t(()=>[Lt]),default:t(()=>[e(n,{class:"ma1","bg-color":"primary",route:"/getting-started"},{default:t(()=>[xt,e(d,{class:"ml1"},{default:t(()=>[kt]),_:1})]),_:1}),e(n,{class:"ma1","bg-color":"primary",route:"https://github.com/antoniandre/wave-ui",target:"_blank"},{default:t(()=>[vt,e(d,{class:"ml2",sm:""},{default:t(()=>[St]),_:1})]),_:1})]),_:1})])}const zt={data:()=>({button1loading:!1,button2loading:!1}),methods:{buttonDoLoading(r){this[`button${r}loading`]=!0,setTimeout(()=>this[`button${r}loading`]=!1,3e3)}}};var At=_(zt,[["render",Dt]]);const Ct=s("div",{class:"w-divider my12"},null,-1),Tt=o("API");function It(r,i,w,p,f,u){const a=c("title-link"),n=c("component-api");return b(),h("div",null,[Ct,e(a,{class:"title1",h2:""},{default:t(()=>[Tt]),_:1}),e(n,{class:"mt0",items:u.props,descriptions:r.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(n,{items:r.slots,title:"Slots"},null,8,["items"]),e(n,{items:u.events,title:"Events"},null,8,["items"])])}const Pt={color:`Applies a color to the button's text.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if either <code>outline</code> or <code>text</code> is set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the button's background.<br>If no <code>color</code> and no <code>bg-color</code> are set, and if neither <code>outline</code> nor <code>text</code> are set to true, the <code>primary</code> color will be applied.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:"When set to true, the text color will be set to white.",outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",text:"Sets the background of the button to transparent. On mouse hover the button background is set to a very light opacity of the given <code>color</code> (primary by default).",round:"Sets a maximum border-radius on the corners of the button, giving it a round look.",shadow:"Applies a drop shadow to the button.",tile:"Removes the default border-radius and sets sharp edges on the button.",route:"When provided, the button becomes a link to this route. A <code>router-link</code> will be generated if you use Vue Router, or a normal link otherwise.",forceLink:"In some cases, you may want to use a normal link instead of a <code>router-link</code>, for instance when using anchor links (starting with <code>#</code>), you can use the <code>force-link</code> prop to force a normal link.",type:"Applies a native HTML <code>type</code> attribute.",disabled:"Disables the button making it unreactive to user interactions.",loading:"Sets the loading state of the button. While loading, the button is unclickable and a spinner is displayed instead of the button label.",icon:"Sets the button to a round icon style, containing only an icon.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",absolute:"Sets the CSS position of the button to <code>absolute</code>.",fixed:"Sets the CSS position of the button to <code>fixed</code>.",top:"Places the button at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the button at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",left:"Places the button at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the button at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the button.",width:"Sets a width on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the button.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",xs:"Sets the size of the button.",sm:"Sets the size of the button.",md:"Sets the size of the button.",lg:"Sets the size of the button.",xl:"Sets the size of the button."},Bt={default:{description:"The button content."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},Gt={},Nt={data:()=>({propsDescs:Pt,slots:Bt}),computed:{props(){return y.props},events(){return y.emits.reduce((r,i)=>(r[i]={description:Gt[i]||""})&&r,{})}}};var Vt=_(Nt,[["render",It]]);const Et=o("w-button");function Rt(r,i,w,p,f,u){const a=c("ui-component-title"),n=c("examples"),m=c("api");return b(),h("main",null,[e(a,null,{default:t(()=>[Et]),_:1}),e(n),e(m)])}const Wt={components:{Examples:At,Api:Vt}};var Mt=_(Wt,[["render",Rt]]);export{Mt as default};
