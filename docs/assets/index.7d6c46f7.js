import{r as l,o as p,g as h,a as i,w as n,b as o,d as a,h as k,_ as u,M as x,N as g}from"./index.bf2cfd71.js";const z={class:"icons-demo"},$=a("p",null,[o("Wave UI works with your favorite icon font or even your own custom one."),a("br"),o(`
Below are some examples using a few popular and free icons fonts.
`)],-1),M=a("h3",{class:"title3"},"Material Design Icons - community full set",-1),S={href:"https://materialdesignicons.com",target:"_blank"},I=a("br",null,null,-1),A=a("h3",{class:"title3"},[o("Material Design Icons "),a("strong",null,"with ligatures")],-1),D=a("p",null,[o("This set of icons works differently as it uses ligatures."),a("br"),o(`
To use icons ligatures, you need to activate it in the Wave UI options:`),a("code",{class:"ml1"},"{ iconsLigature: 'material-icons' }")],-1),C={href:"https://material.io/resources/icons",target:"_blank"},j=a("br",null,null,-1),R=a("h3",{class:"title3"},"Ionicons 4: iOS & Material Design",-1),V={href:"https://ionicons.com/v4/cheat sheet.html",target:"_blank"},B={class:"w-flex"},F={class:"mr8"},E=a("div",{class:"text-bold mb2 grey"},"iOS",-1),L=a("br",null,null,-1),N=a("div",{class:"text-bold mb2 grey"},"Material Design",-1),O=a("br",null,null,-1),T=a("h3",{class:"title3"},"Font Awesome 4",-1),P={href:"https://fontawesome.com/v4.7.0/icons/",target:"_blank"},U=a("br",null,null,-1),W=a("li",null,[a("h3",{class:"title3"},"Use your own"),a("p",null,[o("Once you have your icon font ready, just use it in "),a("strong",{class:"code"},"w-icon"),o(` or other components
by providing the CSS class. E.g. `),a("code",null,"icon-heart"),o(`.
`)])],-1),Y=a("p",null,[o("Like in most components, you can set a "),a("code",null,"color"),o(" for the text and a "),a("code",null,"bg-color"),o(` for the
background.
`)],-1),H={class:"mb4"},X=a("code",null,"bg-color",-1),q=a("strong",{class:"d-block"},"Note on the above source code:",-1),G=a("code",null,"contrast-color",-1),J=k(`<p>By default the icons inherit their font-size from their parent DOM element.
But you can easily control their size via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code> or via the <code>size</code> prop (sets the font-size).
</p>`,1),K=a("p",null,"You can also spin the icons, rotate and flip them.",-1),Q=a("code",null,"a",-1),Z=a("code",null,"rotate90a",-1),oo=a("br",null,null,-1),no=a("small",{class:"grey"},[o("(the minus "),a("code",null,"-"),o(` notation is not possible in this case as it would mix up with
positive values due to the Vue internal CamelCasing).`)],-1),io=a("div",{class:"title4"},"Spin",-1),ro=a("div",{class:"title4 mt6"},"Rotate",-1),ao=a("div",null,[a("code",{class:"rotation"},"-135\xBA"),a("code",{class:"rotation"},"-90\xBA"),a("code",{class:"rotation"},"-45\xBA"),a("code",{class:"rotation"},"0\xBA"),a("code",{class:"rotation"},"45\xBA"),a("code",{class:"rotation"},"90\xBA"),a("code",{class:"rotation"},"135\xBA"),a("code",{class:"rotation"},"180\xBA")],-1),to=a("div",{class:"title4 mt6"},"Flip",-1),lo=a("div",null,[a("span",{class:"flip"},"default"),a("code",{class:"flip"},"flip-x"),a("code",{class:"flip"},"flip-y")],-1);function co(t,m,w,f,y,d){const e=l("title-link"),r=l("w-icon"),c=l("ssh-pre"),s=l("example"),b=l("w-divider"),v=l("router-link"),_=l("alert");return p(),h("div",z,[i(e,{h2:""},{default:n(()=>[o("Different icon fonts supported")]),_:1}),$,a("ul",null,[a("li",null,[M,a("p",null,[a("a",S,[o("Material Design Icons Cheat sheet"),i(r,{class:"ml1"},{default:n(()=>[o("mdi mdi-open-in-new")]),_:1})])]),i(c,{language:"shell",dark:t.$store.state.darkMode},{default:n(()=>[o("npm install @mdi/font")]),_:1},8,["dark"]),i(c,{language:"js",dark:t.$store.state.darkMode},{default:n(()=>[o("import '@mdi/font/css/materialdesignicons.min.css'")]),_:1},8,["dark"]),i(s,null,{pug:n(()=>[o(`w-icon.mr1(xs color="primary") mdi mdi-star
w-icon.mr1(md color="primary") mdi mdi-star
w-icon.mr1(xl color="primary") mdi mdi-star
br
w-icon.mr1(xs color="primary") mdi mdi-heart
w-icon.mr1(md color="primary") mdi mdi-heart
w-icon(xl color="primary") mdi mdi-heart`)]),html:n(()=>[o(`<w-icon
  class="mr1"
  xs
  color="primary">
  mdi mdi-star
</w-icon>

<w-icon
  class="mr1"
  md
  color="primary">
  mdi mdi-star
</w-icon>

<w-icon
  class="mr1"
  xl
  color="primary">
  mdi mdi-star
</w-icon>

<br />

<w-icon
  class="mr1"
  xs
  color="primary">
  mdi mdi-heart
</w-icon>

<w-icon
  class="mr1"
  md
  color="primary">
  mdi mdi-heart
</w-icon>

<w-icon
  xl
  color="primary">
  mdi mdi-heart
</w-icon>
`)]),default:n(()=>[i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("mdi mdi-star")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("mdi mdi-star")]),_:1}),i(r,{class:"mr1",xl:"",color:"primary"},{default:n(()=>[o("mdi mdi-star")]),_:1}),I,i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("mdi mdi-heart")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("mdi mdi-heart")]),_:1}),i(r,{xl:"",color:"primary"},{default:n(()=>[o("mdi mdi-heart")]),_:1})]),_:1})]),a("li",null,[A,D,a("p",null,[a("a",C,[o("Material Design Icons Cheat sheet"),i(r,{class:"ml1"},{default:n(()=>[o("mdi mdi-open-in-new")]),_:1})])]),i(c,{language:"bash",dark:t.$store.state.darkMode},{default:n(()=>[o("npm install material-design-icons")]),_:1},8,["dark"]),i(c,{language:"js",dark:t.$store.state.darkMode},{default:n(()=>[o("import 'material-design-icons/iconfont/material-icons.css'")]),_:1},8,["dark"]),i(s,{"external-css":"https://fonts.googleapis.com/icon?family=Material+Icons","blank-codepen":["js"]},{pug:n(()=>[o(`w-icon.mr1(xs color="primary") material-icons star
w-icon.mr1(md color="primary") material-icons star
w-icon.mr1(xl color="primary") material-icons star
br
w-icon.mr1(xs color="primary") material-icons favorite
w-icon.mr1(md color="primary") material-icons favorite
w-icon(xl color="primary") material-icons favorite`)]),html:n(()=>[o(`<w-icon
  class="mr1"
  xs
  color="primary">
  material-icons star
</w-icon>

<w-icon
  class="mr1"
  md
  color="primary">
  material-icons star
</w-icon>

<w-icon
  class="mr1"
  xl
  color="primary">
  material-icons star
</w-icon>

<br />

<w-icon
  class="mr1"
  xs
  color="primary">
  material-icons favorite
</w-icon>

<w-icon
  class="mr1"
  md
  color="primary">
  material-icons favorite
</w-icon>

<w-icon
  xl
  color="primary">
  material-icons favorite
</w-icon>
`)]),js:n(()=>[o(`const app = Vue.createApp()

app.use(WaveUI, { iconsLigature: 'material-icons' })

app.mount('#app')
`)]),default:n(()=>[i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("material-icons star")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("material-icons star")]),_:1}),i(r,{class:"mr1",xl:"",color:"primary"},{default:n(()=>[o("material-icons star")]),_:1}),j,i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("material-icons favorite")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("material-icons favorite")]),_:1}),i(r,{xl:"",color:"primary"},{default:n(()=>[o("material-icons favorite")]),_:1})]),_:1})]),a("li",null,[R,a("p",null,[a("a",V,[o("Ionicons V4 Cheat sheet"),i(r,{class:"ml1"},{default:n(()=>[o("mdi mdi-open-in-new")]),_:1})])]),i(c,{language:"bash",dark:t.$store.state.darkMode},{default:n(()=>[o("npm install ionicons")]),_:1},8,["dark"]),i(c,{language:"js",dark:t.$store.state.darkMode},{default:n(()=>[o("import 'ionicons/dist/css/ionicons.min.css'")]),_:1},8,["dark"]),i(s,{"external-css":"https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.6.3/css/ionicons.min.css"},{pug:n(()=>[o(`w-flex
  div.mr8
    .text-bold.mb2.grey iOS
    w-icon.mr1(xs color="primary") ion-ios-star
    w-icon.mr1(md color="primary") ion-ios-star
    w-icon(xl color="primary") ion-ios-star
    br
    w-icon.mr1(xs color="primary") ion-ios-heart
    w-icon.mr1(md color="primary") ion-ios-heart
    w-icon(xl color="primary") ion-ios-heart

  div
    .text-bold.mb2.grey Material Design
    w-icon.mr1(xs color="primary") ion-md-star
    w-icon.mr1(md color="primary") ion-md-star
    w-icon(xl color="primary") ion-md-star
    br
    w-icon.mr1(xs color="primary") ion-md-heart
    w-icon.mr1(md color="primary") ion-md-heart
    w-icon(xl color="primary") ion-md-heart`)]),html:n(()=>[o(`<div class="w-flex">
  <div class="mr8">
    <div class="text-bold mb2 grey">iOS</div>
    <w-icon
      class="mr1"
      xs
      color="primary">
      ion-ios-star
    </w-icon>

    <w-icon
      class="mr1"
      md
      color="primary">
      ion-ios-star
    </w-icon>

    <w-icon
      xl
      color="primary">
      ion-ios-star
    </w-icon>

    <br />

    <w-icon
      class="mr1"
      xs
      color="primary">
      ion-ios-heart
    </w-icon>

    <w-icon
      class="mr1"
      md
      color="primary">
      ion-ios-heart
    </w-icon>

    <w-icon
      xl
      color="primary">
      ion-ios-heart
    </w-icon>
  </div>

  <div>
    <div class="text-bold mb2 grey">Material Design</div>

    <w-icon
      class="mr1"
      xs
      color="primary">
      ion-md-star
    </w-icon>

    <w-icon
      class="mr1"
      md
      color="primary">
      ion-md-star
    </w-icon>

    <w-icon
      xl
      color="primary">
      ion-md-star
    </w-icon>

    <br />

    <w-icon
      class="mr1"
      xs
      color="primary">
      ion-md-heart
    </w-icon>

    <w-icon
      class="mr1"
      md
      color="primary">
      ion-md-heart
    </w-icon>

    <w-icon
      xl
      color="primary">
      ion-md-heart
    </w-icon>
  </div>
</div>
`)]),default:n(()=>[a("div",B,[a("div",F,[E,i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("ion-ios-star")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("ion-ios-star")]),_:1}),i(r,{xl:"",color:"primary"},{default:n(()=>[o("ion-ios-star")]),_:1}),L,i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("ion-ios-heart")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("ion-ios-heart")]),_:1}),i(r,{xl:"",color:"primary"},{default:n(()=>[o("ion-ios-heart")]),_:1})]),a("div",null,[N,i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("ion-md-star")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("ion-md-star")]),_:1}),i(r,{xl:"",color:"primary"},{default:n(()=>[o("ion-md-star")]),_:1}),O,i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("ion-md-heart")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("ion-md-heart")]),_:1}),i(r,{xl:"",color:"primary"},{default:n(()=>[o("ion-md-heart")]),_:1})])])]),_:1})]),a("li",null,[T,a("p",null,[a("a",P,[o("Font Awesome V4 Cheat sheet"),i(r,{class:"ml1"},{default:n(()=>[o("mdi mdi-open-in-new")]),_:1})])]),i(c,{language:"bash",dark:t.$store.state.darkMode},{default:n(()=>[o("npm install font-awesome")]),_:1},8,["dark"]),i(c,{language:"js",dark:t.$store.state.darkMode},{default:n(()=>[o("import 'font-awesome/css/font-awesome.min.css'")]),_:1},8,["dark"]),i(s,{"external-css":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},{pug:n(()=>[o(`w-icon.mr1(xs color="primary") fa fa-star
w-icon.mr1(md color="primary") fa fa-star
w-icon.mr1(xl color="primary") fa fa-star
br
w-icon.mr1(xs color="primary") fa fa-heart
w-icon.mr1(md color="primary") fa fa-heart
w-icon(xl color="primary") fa fa-heart`)]),html:n(()=>[o(`<w-icon
  class="mr1"
  xs
  color="primary">
  fa fa-star
</w-icon>

<w-icon
  class="mr1"
  md
  color="primary">
  fa fa-star
</w-icon>

<w-icon
  xl
  color="primary">
  fa fa-star
</w-icon>

<br />

<w-icon
  class="mr1"
  xs
  color="primary">
  fa fa-heart
</w-icon>

<w-icon
  class="mr1"
  md
  color="primary">
  fa fa-heart
</w-icon>

<w-icon
  xl
  color="primary">
  fa fa-heart
</w-icon>
`)]),default:n(()=>[i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("fa fa-star")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("fa fa-star")]),_:1}),i(r,{xl:"",color:"primary"},{default:n(()=>[o("fa fa-star")]),_:1}),U,i(r,{class:"mr1",xs:"",color:"primary"},{default:n(()=>[o("fa fa-heart")]),_:1}),i(r,{class:"mr1",md:"",color:"primary"},{default:n(()=>[o("fa fa-heart")]),_:1}),i(r,{xl:"",color:"primary"},{default:n(()=>[o("fa fa-heart")]),_:1})]),_:1})]),W]),i(b,{class:"my12"}),i(e,{h2:""},{default:n(()=>[o("Colors & Background colors")]),_:1}),Y,i(s,{"content-class":"w-flex align-center"},{pug:n(()=>[o(`w-icon.mr1(xl color="primary-dark1") mdi mdi-home
w-icon.mr1(xl color="primary") mdi mdi-home
w-icon.mr1(xl color="primary-light1") mdi mdi-home
w-icon.mr1(xl color="primary-light2") mdi mdi-home
w-icon(xl color="primary-light3") mdi mdi-home`)]),html:n(()=>[o(`<w-icon
  class="mr1"
  xl
  color="primary-dark1">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr1"
  xl
  color="primary">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr1"
  xl
  color="primary-light1">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr1"
  xl
  color="primary-light2">
  mdi mdi-home
</w-icon>

<w-icon
  xl
  color="primary-light3">
  mdi mdi-home
</w-icon>
`)]),default:n(()=>[i(r,{class:"mr1",xl:"",color:"primary-dark1"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr1",xl:"",color:"primary"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr1",xl:"",color:"primary-light1"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr1",xl:"",color:"primary-light2"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{xl:"",color:"primary-light3"},{default:n(()=>[o("mdi mdi-home")]),_:1})]),_:1}),a("p",H,[o("If you want to set a background on an icon, you may need an"),i(v,{class:"mx1",to:"/w-button"},{default:n(()=>[o("icon button")]),_:1}),o("instead. If not, just set a "),X,o(".")]),i(s,{"content-class":"w-flex align-center"},{pug:n(()=>[o(`w-icon.mr1.pa5(xl bg-color="primary-dark1" color="contrast-color") mdi mdi-home
w-icon.mr1.pa5(xl bg-color="primary" color="contrast-color") mdi mdi-home
w-icon.mr1.pa5(xl bg-color="primary-light1" color="contrast-color") mdi mdi-home
w-icon.mr1.pa5(xl bg-color="primary-light2" color="contrast-color") mdi mdi-home
w-icon.pa5(xl bg-color="primary-light3" color="contrast-color") mdi mdi-home`)]),html:n(()=>[o(`<w-icon
  class="mr1 pa5"
  xl
  bg-color="primary-dark1"
  color="contrast-color">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr1 pa5"
  xl
  bg-color="primary"
  color="contrast-color">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr1 pa5"
  xl
  bg-color="primary-light1"
  color="contrast-color">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr1 pa5"
  xl
  bg-color="primary-light2"
  color="contrast-color">
  mdi mdi-home
</w-icon>

<w-icon
  class="pa5"
  xl
  bg-color="primary-light3"
  color="contrast-color">
  mdi mdi-home
</w-icon>
`)]),default:n(()=>[i(r,{class:"mr1 pa5",xl:"","bg-color":"primary-dark1",color:"contrast-color"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr1 pa5",xl:"","bg-color":"primary",color:"contrast-color"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr1 pa5",xl:"","bg-color":"primary-light1",color:"contrast-color"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr1 pa5",xl:"","bg-color":"primary-light2",color:"contrast-color"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"pa5",xl:"","bg-color":"primary-light3",color:"contrast-color"},{default:n(()=>[o("mdi mdi-home")]),_:1})]),_:1}),i(_,{tip:""},{default:n(()=>[q,o("the use of the "),G,o(` is to have a contrasted color from the background
regardless of the active theme.`)]),_:1}),i(e,{h2:""},{default:n(()=>[o("Sizes")]),_:1}),J,i(s,null,{pug:n(()=>[o(`w-icon.mr2(xs color="primary-light2") mdi mdi-home
w-icon.mr2(sm color="primary-light2") mdi mdi-home
w-icon.mr2(md color="primary-light2") mdi mdi-home
w-icon.mr2(lg color="primary-light2") mdi mdi-home
w-icon.mr2(xl color="primary-light2") mdi mdi-home
w-icon.mr2(color="primary-light2" :size="40") mdi mdi-home
w-icon(color="primary-light2" size="4em") mdi mdi-home`)]),html:n(()=>[o(`<w-icon
  class="mr2"
  xs
  color="primary-light2">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr2"
  sm
  color="primary-light2">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr2"
  md
  color="primary-light2">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr2"
  lg
  color="primary-light2">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr2"
  xl
  color="primary-light2">
  mdi mdi-home
</w-icon>

<w-icon
  class="mr2"
  color="primary-light2"
  :size="40">
  mdi mdi-home
</w-icon>

<w-icon
  color="primary-light2"
  size="4em">
  mdi mdi-home
</w-icon>
`)]),default:n(()=>[i(r,{class:"mr2",xs:"",color:"primary-light2"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr2",sm:"",color:"primary-light2"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr2",md:"",color:"primary-light2"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr2",lg:"",color:"primary-light2"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr2",xl:"",color:"primary-light2"},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{class:"mr2",color:"primary-light2",size:40},{default:n(()=>[o("mdi mdi-home")]),_:1}),i(r,{color:"primary-light2",size:"4em"},{default:n(()=>[o("mdi mdi-home")]),_:1})]),_:1}),i(e,{h2:""},{default:n(()=>[o("Transformations")]),_:1}),K,i(_,{info:""},{default:n(()=>[o("When rotating anti-clockwise add an "),Q,o(" at the end. E.g. "),Z,o("."),oo,no]),_:1}),i(s,null,{pug:n(()=>[o(`.title4 Spin
w-icon.mr1(xl color="primary" spin) mdi mdi-star
w-icon.mr1(xl color="primary" spin-a) mdi mdi-star

.title4.mt6 Rotate
w-icon.rotated-icon.mr1(xl color="primary" rotate135a) mdi mdi-paw
w-icon.rotated-icon.mr1(xl color="primary" rotate90a) mdi mdi-paw
w-icon.rotated-icon.mr1(xl color="primary" rotate45a) mdi mdi-paw
w-icon.rotated-icon.mr1(xl color="primary") mdi mdi-paw
w-icon.rotated-icon.mr1(xl color="primary" rotate45) mdi mdi-paw
w-icon.rotated-icon.mr1(xl color="primary" rotate90) mdi mdi-paw
w-icon.rotated-icon.mr1(xl color="primary" rotate135) mdi mdi-paw
w-icon.rotated-icon.mr1(xl color="primary" rotate180) mdi mdi-paw
div
  code.rotation -135\xBA
  code.rotation -90\xBA
  code.rotation -45\xBA
  code.rotation 0\xBA
  code.rotation 45\xBA
  code.rotation 90\xBA
  code.rotation 135\xBA
  code.rotation 180\xBA

.title4.mt6 Flip
w-icon.flipped-icon.mr1(xl color="primary") mdi mdi-thumb-up
w-icon.flipped-icon.mr1(xl color="primary" flip-x) mdi mdi-thumb-up
w-icon.flipped-icon.mr1(xl color="primary" flip-y) mdi mdi-thumb-up
div
  span.flip default
  code.flip flip-x
  code.flip flip-y`)]),html:n(()=>[o(`<div class="title4">Spin</div>
<w-icon
  class="mr1"
  xl
  color="primary"
  spin>
  mdi mdi-star
</w-icon>
<w-icon
  class="mr1"
  xl
  color="primary"
  spin-a>
  mdi mdi-star
</w-icon>

<div class="title4 mt6">Rotate</div>
<w-icon
  class="rotated-icon mr1"
  xl
  color="primary" rotate135a>
  mdi mdi-paw
</w-icon>

<w-icon
  class="rotated-icon mr1"
  xl
  color="primary" rotate90a>
  mdi mdi-paw
</w-icon>

<w-icon
  class="rotated-icon mr1"
  xl
  color="primary" rotate45a>
  mdi mdi-paw
</w-icon>

<w-icon
  class="rotated-icon mr1"
  xl
  color="primary">
  mdi mdi-paw
</w-icon>

<w-icon
  class="rotated-icon mr1"
  xl
  color="primary" rotate45>
  mdi mdi-paw
</w-icon>

<w-icon
  class="rotated-icon mr1"
  xl
  color="primary" rotate90>
  mdi mdi-paw
</w-icon>

<w-icon
  class="rotated-icon mr1"
  xl
  color="primary" rotate135>
  mdi mdi-paw
</w-icon>

<w-icon
  class="rotated-icon mr1"
  xl
  color="primary" rotate180>
  mdi mdi-paw
</w-icon>

<div class="title4 mt6">Flip</div>
<w-icon
  class="mr1"
  xl
  color="primary">
  mdi mdi-thumb-up
</w-icon>

<w-icon
  class="mr1"
  xl
  color="primary"
  flip-x>
  mdi mdi-thumb-up
</w-icon>

<w-icon
  class="mr1"
  xl
  color="primary"
  flip-y>
  mdi mdi-thumb-up
</w-icon>`)]),default:n(()=>[io,i(r,{class:"mr1",xl:"",color:"primary",spin:""},{default:n(()=>[o("mdi mdi-star")]),_:1}),i(r,{class:"mr1",xl:"",color:"primary","spin-a":""},{default:n(()=>[o("mdi mdi-star")]),_:1}),ro,i(r,{class:"rotated-icon mr1",xl:"",color:"primary",rotate135a:""},{default:n(()=>[o("mdi mdi-paw")]),_:1}),i(r,{class:"rotated-icon mr1",xl:"",color:"primary",rotate90a:""},{default:n(()=>[o("mdi mdi-paw")]),_:1}),i(r,{class:"rotated-icon mr1",xl:"",color:"primary",rotate45a:""},{default:n(()=>[o("mdi mdi-paw")]),_:1}),i(r,{class:"rotated-icon mr1",xl:"",color:"primary"},{default:n(()=>[o("mdi mdi-paw")]),_:1}),i(r,{class:"rotated-icon mr1",xl:"",color:"primary",rotate45:""},{default:n(()=>[o("mdi mdi-paw")]),_:1}),i(r,{class:"rotated-icon mr1",xl:"",color:"primary",rotate90:""},{default:n(()=>[o("mdi mdi-paw")]),_:1}),i(r,{class:"rotated-icon mr1",xl:"",color:"primary",rotate135:""},{default:n(()=>[o("mdi mdi-paw")]),_:1}),i(r,{class:"rotated-icon mr1",xl:"",color:"primary",rotate180:""},{default:n(()=>[o("mdi mdi-paw")]),_:1}),ao,to,i(r,{class:"flipped-icon mr1",xl:"",color:"primary"},{default:n(()=>[o("mdi mdi-thumb-up")]),_:1}),i(r,{class:"flipped-icon mr1",xl:"",color:"primary","flip-x":""},{default:n(()=>[o("mdi mdi-thumb-up")]),_:1}),i(r,{class:"flipped-icon mr1",xl:"",color:"primary","flip-y":""},{default:n(()=>[o("mdi mdi-thumb-up")]),_:1}),lo]),_:1})])}const eo={beforeCreate(){x.iconsLigature="material-icons"},beforeUnmount(){x.iconsLigature=!1}},so=u(eo,[["render",co]]),mo=a("div",{class:"w-divider my12"},null,-1);function po(t,m,w,f,y,d){const e=l("title-link"),r=l("component-api");return p(),h("div",null,[mo,i(e,{class:"title1",h2:""},{default:n(()=>[o("API")]),_:1}),i(r,{class:"mt0",items:d.props,descriptions:t.propsDescs,title:"Props"},null,8,["items","descriptions"]),i(r,{items:t.slots,title:"Slots"},null,8,["items"]),i(r,{items:d.events,title:"Events"},null,8,["items"])])}const ho={tag:"The HTML tag to render the icon into. <code>&lt;i&gt;</code> by default.",color:`Applies a color to the icon's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the icon's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,xs:"Sets the size (font-size) of the icon to extra small.",sm:"Sets the size (font-size) of the icon to small.",md:"Sets the size (font-size) of the icon to medium.",lg:"Sets the size (font-size) of the icon to large.",xl:"Sets the size (font-size) of the icon to extra large.",spin:"Applies a continuous centered spin movement on the icon.",spinA:"Applies a continuous centered anticlockwise spin movement on the icon.",rotate45:"Rotates the icon of 45 degrees clockwise.",rotate90:"Rotates the icon of 90 degrees clockwise.",rotate135:"Rotates the icon of 135 degrees clockwise.",rotate180:"Rotates the icon of 180 degrees clockwise.",rotate45a:"Rotates the icon of 45 degrees anticlockwise.",rotate90a:"Rotates the icon of 90 degrees anticlockwise.",rotate135a:"Rotates the icon of 135 degrees anticlockwise.",flipX:"Flips the icon horizontally.",flipY:"Flips the icon vertically.",size:"Sets the font-size of the icon.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value."},uo={default:{description:"Provide the icon to use as a string. E.g. <code>mdi mdi-home</code>."}},wo={},fo={data:()=>({propsDescs:ho,slots:uo}),computed:{props(){return g.props},events(){return g.emits.reduce((t,m)=>(t[m]={description:wo[m]||""})&&t,{})}}},yo=u(fo,[["render",po]]);function _o(t,m,w,f,y,d){const e=l("ui-component-title"),r=l("examples"),c=l("api");return p(),h("main",null,[i(e,null,{default:n(()=>[o("w-icon")]),_:1}),i(r),i(c)])}const xo={components:{Examples:so,Api:yo}},bo=u(xo,[["render",_o]]);export{bo as default};
