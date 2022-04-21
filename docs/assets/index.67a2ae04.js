import{r as d,o as w,f as p,a as o,w as e,e as t,h as m,c as k,d as v,b as l,_,bs as T}from"./index.98731952.js";const x={style:{"max-width":"1000px"}},A=t("Show / hide with v-model"),$=l("p",null,[t("By default alerts are visible, but if a "),l("code",null,"model-value"),t(" or "),l("code",null,"v-model"),t(` is provided,
it will show or hide according to it.`),l("br"),t(`
Like in this example you can add a transition to animate its apparition.`)],-1),V=t("The alert is now visible."),S=t(`data: () => ({
  showAlert: false
})
`),C=t("Colors"),B=l("p",null,[t("Like in most components, you can apply a color to the text with the "),l("code",null,"color"),t(` attribute,
and a color to the background with the `),l("code",null,"bg-color"),t(" attribute.")],-1),z=t("This is an alert with a primary color."),E=t("This is an alert with a primary background color."),O=t("This is an alert with a pink color."),P=t("This is an alert with a pink background color."),R=l("p",null,"You can even mix different colors and background colors.",-1),D=t("This is an alert with a purple background and cyan color."),N=t("This is an alert with a cyan background and purple color."),U=t(`w-alert(color="primary") This is an alert with a primary color.
w-alert(bg-color="primary" color="white") This is an alert with a primary background color.
w-alert(color="pink") This is an alert with a pink color.
w-alert(bg-color="pink" color="white") This is an alert with a pink background color.

p You can even mix different colors and background colors.
w-alert(bg-color="purple" color="cyan-light4") This is an alert with a purple background and cyan color.
w-alert(bg-color="cyan-light4" color="purple") This is an alert with a cyan background and purple color.`),H=t(`<w-alert color="primary">
  This is an alert with a primary color.
</w-alert>

<w-alert bg-color="primary" color="white">
  This is an alert with a primary background color.
</w-alert>

<w-alert color="pink">
  This is an alert with a pink color.
</w-alert>

<w-alert bg-color="pink" color="white">
  This is an alert with a pink background color.
</w-alert>

<p>
  You can even mix different colors and background colors.
</p>

<w-alert bg-color="purple" color="cyan-light4">
  This is an alert with a purple background and cyan color.
</w-alert>

<w-alert bg-color="cyan-light4" color="purple">
  This is an alert with a cyan background and purple color.
</w-alert>
`),I=t("Types (adds an icon)"),L=l("h3",null,"Normal",-1),Y=t("This is a success alert."),j=t("This is a warning alert."),W=t("This is an error alert."),q=t("This is an info alert."),F=t(`w-alert(success) This is a success alert.
w-alert(warning) This is a warning alert.
w-alert(error) This is an error alert.
w-alert(info) This is an info alert.`),G=t(`<w-alert success>This is a success alert.</w-alert>
<w-alert warning>This is a warning alert.</w-alert>
<w-alert error>This is an error alert.</w-alert>
<w-alert info>This is an info alert.</w-alert>
`),J=l("h3",null,"Plain",-1),K=t("This is a success alert."),M=t("This is a warning alert."),Q=t("This is an error alert."),X=t("This is an info alert."),Z=t(`w-alert(success plain) This is a success alert.
w-alert(warning plain) This is a warning alert.
w-alert(error plain) This is an error alert.
w-alert(info plain) This is an info alert.`),ee=t(`<w-alert success plain>This is a success alert.</w-alert>
<w-alert warning plain>This is a warning alert.</w-alert>
<w-alert error plain>This is an error alert.</w-alert>
<w-alert info plain>This is an info alert.</w-alert>
`),te=t("Custom icon"),oe=t("This is an alert with a custom icon."),se=t('w-alert(bg-color="yellow-light5" color="amber" icon="wi-star") This is an alert with a custom icon.'),re=t(`<w-alert
  bg-color="yellow-light5"
  color="amber"
  icon="wi-star">
  This is an alert with a custom icon.
</w-alert>
`),ie=t("Icon outside"),ae=t("This is a success alert."),le=t("This is a warning alert."),ne=t("This is an error alert."),de=t("This is an info alert."),ce=t("This is an alert with a custom icon."),he=t(`w-alert(success icon-outside) This is a success alert.
w-alert(warning icon-outside) This is a warning alert.
w-alert(error icon-outside) This is an error alert.
w-alert(info icon-outside) This is an info alert.
w-alert(bg-color="yellow-light5" color="amber" icon="mdi mdi-star-circle" icon-outside)
  | This is an alert with a custom icon.`),ue=t(`<w-alert success icon-outside>This is a success alert.</w-alert>
<w-alert warning icon-outside>This is a warning alert.</w-alert>
<w-alert error icon-outside>This is an error alert.</w-alert>
<w-alert info icon-outside>This is an info alert.</w-alert>
<w-alert
  bg-color="yellow-light5"
  color="amber"
  icon="mdi mdi-star-circle"
  icon-outside>
  This is an alert with a custom icon.
</w-alert>
`),we=t("Outline"),me=t("This is a normal alert with a primary color."),pe=t("This is a success alert."),_e=t("This is a warning alert."),be=t("This is an error alert."),fe=t("This is an info alert."),ge=t(`w-alert(color="primary" outline) This is a normal alert with a primary color.
w-alert(success outline) This is a success alert.
w-alert(warning outline) This is a warning alert.
w-alert(error outline) This is an error alert.
w-alert(info outline) This is an info alert.`),Te=t(`<w-alert color="primary" outline>This is a normal alert with a primary color.</w-alert>
<w-alert success outline>This is a success alert.</w-alert>
<w-alert warning outline>This is a warning alert.</w-alert>
<w-alert error outline>This is an error alert.</w-alert>
<w-alert info outline>This is an info alert.</w-alert>
`),ye=t("Borders"),ke=t("This is a success alert with no border."),ve=t("This is a normal alert with no border."),xe=t("This is an alert with a cyan background, purple color and no border."),Ae={class:"w-flex wrap ma-2"},$e=t("This is a normal alert with a left border."),Ve=t("This is a normal alert with a right border."),Se={class:"w-flex wrap mx-2 mt2"},Ce=t("This is a normal alert with a top border."),Be=t("This is a normal alert with a left border."),ze=t(`w-alert(success light no-border) This is a success alert with no border.
w-alert(color="primary" no-border) This is a normal alert with no border.
w-alert(bg-color="cyan-light4" color="purple" no-border) This is an alert with a cyan background, purple color and no border.
.w-flex.wrap.ma-2
  w-alert.grow.ma2(color="primary" border-left) This is a normal alert with a left border.
  w-alert.grow.ma2(color="primary" border-right) This is a normal alert with a right border.
.w-flex.wrap.mx-2.mt2
  w-alert.grow.ma2(color="primary" border-top) This is a normal alert with a top border.
  w-alert.grow.ma2(color="primary" border-bottom) This is a normal alert with a left border.`),Ee=t(`<w-alert success light no-border>This is a success alert with no border.</w-alert>
<w-alert color="primary" no-border>This is a normal alert with no border.</w-alert>
<w-alert
  bg-color="cyan-light4"
  color="purple"
  no-border>
  This is an alert with a cyan background, purple color and no border.
</w-alert>
<div class="w-flex wrap ma-2">
  <w-alert
    class="grow ma2"
    color="primary"
    border-left>
    This is a normal alert with a left border.
  </w-alert>
  <w-alert
    class="grow ma2"
    color="primary"
    border-right>
    This is a normal alert with a right border.
  </w-alert>
</div>
<div class="w-flex wrap mx-2 mt2">
  <w-alert
    class="grow ma2"
    color="primary"
    border-top>
    This is a normal alert with a top border.
  </w-alert>
  <w-alert
    class="grow ma2"
    color="primary"
    border-bottom>
    This is a normal alert with a left border.
  </w-alert>
</div>
`),Oe=t("Tile, round & shadow"),Pe=t("This is a tile alert."),Re=t("This is a round alert."),De=t("This is a normal alert with a shadow."),Ne=t(`w-alert(color="primary" tile) This is a tile alert.
w-alert(color="primary" round) This is a round alert.
w-alert(color="primary" shadow) This is a normal alert with a shadow.`),Ue=t(`<w-alert color="primary" tile>This is a tile alert.</w-alert>
<w-alert color="primary" round>This is a round alert.</w-alert>
<w-alert color="primary" shadow>This is a normal alert with a shadow.</w-alert>
`),He=t("Dismiss"),Ie=t("This is a dismissible alert."),Le=t("This is a dismissible error type alert."),Ye=t("This is a dismissible round alert."),je=t("Reset alerts"),We=t(`w-alert.mt0.mb2(v-model="dismissible1" color="primary" dismiss) This is a dismissible alert.
w-alert.my2(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
w-alert.my2(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
w-button.mt2(
  @click="dismissible1 = dismissible2 = dismissible3 = true"
  :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts`),qe=t(`<w-alert
  v-model="dismissible1"
  color="primary"
  dismiss>
  This is a dismissible alert.
</w-alert>
<w-alert
  v-model="dismissible2"
  dismiss
  error>
  This is a dismissible error type alert.
</w-alert>
<w-alert
  v-model="dismissible3"
  color="amber"
  dismiss
  round>
  This is a dismissible round alert.
</w-alert>
<w-button
  @click="dismissible1 = dismissible2 = dismissible3 = true"
  :disabled="dismissible1 && dismissible2 && dismissible3">
  Reset alerts
</button>`),Fe=t(`data: () => ({
  dismissible1: true,
  dismissible2: true,
  dismissible3: true
})
`),Ge=t("Sizes"),Je=t("This is an extra small alert."),Ke=t("This is a small alert."),Me=t("This is a medium alert."),Qe=t("This is a large alert."),Xe=t("This is an extra large alert."),Ze=t(`w-alert(info xs) This is an extra small alert.
w-alert(info sm) This is a small alert.
w-alert(info md) This is a medium alert.
w-alert(info lg) This is a large alert.
w-alert(info xl) This is an extra large alert.`),et=t(`<w-alert info xs>This is an extra small alert.</w-alert>
<w-alert info sm>This is a small alert.</w-alert>
<w-alert info md>This is a medium alert.</w-alert>
<w-alert info lg>This is a large alert.</w-alert>
<w-alert info xl>This is an extra large alert.</w-alert>`);function tt(r,i,b,f,g,u){const a=d("title-link"),c=d("w-button"),s=d("w-alert"),y=d("w-transition-expand"),n=d("example");return w(),p("div",x,[o(a,{h2:"",slug:"show-and-hide-with-v-model"},{default:e(()=>[A]),_:1}),$,o(n,{"content-class":"pt5"},{pug:e(()=>[t('w-button(@click="showAlert = !showAlert" outline) '+m(r.showAlert?"Hide":"Show")+` alert

w-transition-expand(y)
  w-alert(v-if="showAlert" color="success") The alert is now visible.`,1)]),html:e(()=>[t(`<w-button
  @click="showAlert = !showAlert"
  outline>
  `+m(r.showAlert?"Hide":"Show")+` alert
</w-button>

<w-transition-expand y>
  <w-alert v-if="showAlert" color="success">
    The alert is now visible.
  </w-alert>
</w-transition-expand>`,1)]),js:e(()=>[S]),default:e(()=>[o(c,{onClick:i[0]||(i[0]=h=>r.showAlert=!r.showAlert),outline:""},{default:e(()=>[t(m(r.showAlert?"Hide":"Show")+" alert",1)]),_:1}),o(y,{y:""},{default:e(()=>[r.showAlert?(w(),k(s,{key:0,color:"success"},{default:e(()=>[V]),_:1})):v("",!0)]),_:1})]),_:1}),o(a,{h2:""},{default:e(()=>[C]),_:1}),B,o(n,{"content-class":"py0"},{pug:e(()=>[U]),html:e(()=>[H]),default:e(()=>[o(s,{color:"primary"},{default:e(()=>[z]),_:1}),o(s,{"bg-color":"primary",color:"white"},{default:e(()=>[E]),_:1}),o(s,{color:"pink"},{default:e(()=>[O]),_:1}),o(s,{"bg-color":"pink",color:"white"},{default:e(()=>[P]),_:1}),R,o(s,{"bg-color":"purple",color:"cyan-light4"},{default:e(()=>[D]),_:1}),o(s,{"bg-color":"cyan-light4",color:"purple"},{default:e(()=>[N]),_:1})]),_:1}),o(a,{h2:"",slug:"types"},{default:e(()=>[I]),_:1}),L,o(n,{"content-class":"py0"},{pug:e(()=>[F]),html:e(()=>[G]),default:e(()=>[o(s,{success:""},{default:e(()=>[Y]),_:1}),o(s,{warning:""},{default:e(()=>[j]),_:1}),o(s,{error:""},{default:e(()=>[W]),_:1}),o(s,{info:""},{default:e(()=>[q]),_:1})]),_:1}),J,o(n,{"content-class":"py0"},{pug:e(()=>[Z]),html:e(()=>[ee]),default:e(()=>[o(s,{success:"",plain:""},{default:e(()=>[K]),_:1}),o(s,{warning:"",plain:""},{default:e(()=>[M]),_:1}),o(s,{error:"",plain:""},{default:e(()=>[Q]),_:1}),o(s,{info:"",plain:""},{default:e(()=>[X]),_:1})]),_:1}),o(a,{h2:""},{default:e(()=>[te]),_:1}),o(n,{"content-class":"py0"},{pug:e(()=>[se]),html:e(()=>[re]),default:e(()=>[o(s,{"bg-color":"yellow-light5",color:"amber",icon:"wi-star"},{default:e(()=>[oe]),_:1})]),_:1}),o(a,{h2:""},{default:e(()=>[ie]),_:1}),o(n,{"content-class":"py0"},{pug:e(()=>[he]),html:e(()=>[ue]),default:e(()=>[o(s,{success:"","icon-outside":""},{default:e(()=>[ae]),_:1}),o(s,{warning:"","icon-outside":""},{default:e(()=>[le]),_:1}),o(s,{error:"","icon-outside":""},{default:e(()=>[ne]),_:1}),o(s,{info:"","icon-outside":""},{default:e(()=>[de]),_:1}),o(s,{"bg-color":"yellow-light5",color:"amber",icon:"mdi mdi-star-circle","icon-outside":""},{default:e(()=>[ce]),_:1})]),_:1}),o(a,{h2:""},{default:e(()=>[we]),_:1}),o(n,{"content-class":"py0"},{pug:e(()=>[ge]),html:e(()=>[Te]),default:e(()=>[o(s,{color:"primary",outline:""},{default:e(()=>[me]),_:1}),o(s,{success:"",outline:""},{default:e(()=>[pe]),_:1}),o(s,{warning:"",outline:""},{default:e(()=>[_e]),_:1}),o(s,{error:"",outline:""},{default:e(()=>[be]),_:1}),o(s,{info:"",outline:""},{default:e(()=>[fe]),_:1})]),_:1}),o(a,{h2:""},{default:e(()=>[ye]),_:1}),o(n,{"content-class":"py0"},{pug:e(()=>[ze]),html:e(()=>[Ee]),default:e(()=>[o(s,{success:"",light:"","no-border":""},{default:e(()=>[ke]),_:1}),o(s,{color:"primary","no-border":""},{default:e(()=>[ve]),_:1}),o(s,{"bg-color":"cyan-light4",color:"purple","no-border":""},{default:e(()=>[xe]),_:1}),l("div",Ae,[o(s,{class:"grow ma2",color:"primary","border-left":""},{default:e(()=>[$e]),_:1}),o(s,{class:"grow ma2",color:"primary","border-right":""},{default:e(()=>[Ve]),_:1})]),l("div",Se,[o(s,{class:"grow ma2",color:"primary","border-top":""},{default:e(()=>[Ce]),_:1}),o(s,{class:"grow ma2",color:"primary","border-bottom":""},{default:e(()=>[Be]),_:1})])]),_:1}),o(a,{h2:""},{default:e(()=>[Oe]),_:1}),o(n,{"content-class":"py0"},{pug:e(()=>[Ne]),html:e(()=>[Ue]),default:e(()=>[o(s,{color:"primary",tile:""},{default:e(()=>[Pe]),_:1}),o(s,{color:"primary",round:""},{default:e(()=>[Re]),_:1}),o(s,{color:"primary",shadow:""},{default:e(()=>[De]),_:1})]),_:1}),o(a,{h2:""},{default:e(()=>[He]),_:1}),o(n,null,{pug:e(()=>[We]),html:e(()=>[qe]),js:e(()=>[Fe]),default:e(()=>[o(s,{class:"mt0 mb2",modelValue:r.dismissible1,"onUpdate:modelValue":i[1]||(i[1]=h=>r.dismissible1=h),color:"primary",dismiss:""},{default:e(()=>[Ie]),_:1},8,["modelValue"]),o(s,{class:"my2",modelValue:r.dismissible2,"onUpdate:modelValue":i[2]||(i[2]=h=>r.dismissible2=h),dismiss:"",error:""},{default:e(()=>[Le]),_:1},8,["modelValue"]),o(s,{class:"my2",modelValue:r.dismissible3,"onUpdate:modelValue":i[3]||(i[3]=h=>r.dismissible3=h),color:"amber",dismiss:"",round:""},{default:e(()=>[Ye]),_:1},8,["modelValue"]),o(c,{class:"mt2",onClick:i[4]||(i[4]=h=>r.dismissible1=r.dismissible2=r.dismissible3=!0),disabled:r.dismissible1&&r.dismissible2&&r.dismissible3},{default:e(()=>[je]),_:1},8,["disabled"])]),_:1}),o(a,{h2:""},{default:e(()=>[Ge]),_:1}),o(n,{"content-class":"py0"},{pug:e(()=>[Ze]),html:e(()=>[et]),default:e(()=>[o(s,{info:"",xs:""},{default:e(()=>[Je]),_:1}),o(s,{info:"",sm:""},{default:e(()=>[Ke]),_:1}),o(s,{info:"",md:""},{default:e(()=>[Me]),_:1}),o(s,{info:"",lg:""},{default:e(()=>[Qe]),_:1}),o(s,{info:"",xl:""},{default:e(()=>[Xe]),_:1})]),_:1})])}const ot={data:()=>({showAlert:!1,dismissible1:!0,dismissible2:!0,dismissible3:!0})};var st=_(ot,[["render",tt]]);const rt=l("div",{class:"w-divider my12"},null,-1),it=t("API");function at(r,i,b,f,g,u){const a=d("title-link"),c=d("component-api");return w(),p("div",null,[rt,o(a,{class:"title1",h2:""},{default:e(()=>[it]),_:1}),o(c,{class:"mt0",items:u.props,descriptions:r.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(c,{items:r.slots,title:"Slots"},null,8,["items"]),o(c,{items:u.events,title:"Events"},null,8,["items"])])}const lt={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the alert. Any truthy value will show the alert whereas any falsy value will hide it.',color:`Applies a color to the alert's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the alert's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the alert container.",tile:"Removes the default border-radius and sets sharp edges on the alert container.",round:"Sets a maximum border-radius on the corners of the alert container, giving it a round look.",icon:"Provide a custom icon string (e.g. <code>mdi mdi-star</code>) to display on the left of the alert message.",iconOutside:"If an icon is provided, this option changes the style and displays the icon on the left border.",plain:'Emphasizes a "typed" alert (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',dismiss:"Adds a close button (cross icon) on the right in the alert. Clicking on this button hides the alert.",success:"Sets the type of the alert, applying the <code>success</code> class (green color) and adding a success icon on the left in the alert.",info:"Sets the type of the alert, applying the <code>info</code> class (blue color) and adding an info icon on the left in the alert.",warning:"Sets the type of the alert, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the alert.",error:"Sets the type of the alert, applying the <code>error</code> class (red color) and adding an error icon on the left in the alert.",xs:"Sets the size of the alert.",sm:"Sets the size of the alert.",md:"Sets the size of the alert.",lg:"Sets the size of the alert.",xl:"Sets the size of the alert.",noBorder:"Removes the default border from the alert container.",borderLeft:"Adds a left border on the alert. Only one side-border can be applied at the same time.",borderRight:"Adds a right border on the alert. Only one side-border can be applied at the same time.",borderTop:"Adds a top border on the alert. Only one side-border can be applied at the same time.",borderBottom:"Adds a bottom border on the alert. Only one side-border can be applied at the same time.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set."},nt={content:{description:"The alert content."}},dt={input:"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on alert dismiss/hide."},ct={data:()=>({propsDescs:lt,slots:nt}),computed:{props(){return T.props},events(){return T.emits.reduce((r,i)=>(r[i]={description:dt[i]||""})&&r,{})}}};var ht=_(ct,[["render",at]]);const ut=t("w-alert");function wt(r,i,b,f,g,u){const a=d("ui-component-title"),c=d("examples"),s=d("api");return w(),p("main",null,[o(a,null,{default:e(()=>[ut]),_:1}),o(c),o(s)])}const mt={components:{Examples:st,Api:ht}};var _t=_(mt,[["render",wt]]);export{_t as default};
