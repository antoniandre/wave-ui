import{r as d,o as m,g as p,a,w as e,b as r,t as w,c as k,f as v,d as s,_ as b,s as y}from"./index.bf2cfd71.js";const x={style:{"max-width":"1000px"}},A=s("p",null,[r("By default alerts are visible, but if a "),s("code",null,"model-value"),r(" or "),s("code",null,"v-model"),r(` is provided,
it will show or hide according to it.`),s("br"),r(`
Like in this example you can add a transition to animate its apparition.`)],-1),V=s("p",null,[r("Like in most components, you can apply a color to the text with the "),s("code",null,"color"),r(` attribute,
and a color to the background with the `),s("code",null,"bg-color"),r(" attribute.")],-1),S=s("p",null,"You can even mix different colors and background colors.",-1),$=s("h3",null,"Normal",-1),C=s("h3",null,"Plain",-1),B={class:"w-flex wrap ma-2"},z={class:"w-flex wrap mx-2 mt2"};function E(i,l,f,g,T,u){const o=d("title-link"),c=d("w-button"),t=d("w-alert"),_=d("w-transition-expand"),n=d("example");return m(),p("div",x,[a(o,{h2:"",slug:"show-and-hide-with-v-model"},{default:e(()=>[r("Show / hide with v-model")]),_:1}),A,a(n,{"content-class":"pt5"},{pug:e(()=>[r('w-button(@click="showAlert = !showAlert" outline) '+w(i.showAlert?"Hide":"Show")+` alert

w-transition-expand(y)
  w-alert(v-if="showAlert" color="success") The alert is now visible.`,1)]),html:e(()=>[r(`<w-button
  @click="showAlert = !showAlert"
  outline>
  `+w(i.showAlert?"Hide":"Show")+` alert
</w-button>

<w-transition-expand y>
  <w-alert v-if="showAlert" color="success">
    The alert is now visible.
  </w-alert>
</w-transition-expand>`,1)]),js:e(()=>[r(`data: () => ({
  showAlert: false
})
`)]),default:e(()=>[a(c,{onClick:l[0]||(l[0]=h=>i.showAlert=!i.showAlert),outline:""},{default:e(()=>[r(w(i.showAlert?"Hide":"Show")+" alert",1)]),_:1}),a(_,{y:""},{default:e(()=>[i.showAlert?(m(),k(t,{key:0,color:"success"},{default:e(()=>[r("The alert is now visible.")]),_:1})):v("",!0)]),_:1})]),_:1}),a(o,{h2:""},{default:e(()=>[r("Colors")]),_:1}),V,a(n,{"content-class":"py0"},{pug:e(()=>[r(`w-alert(color="primary") This is an alert with a primary color.
w-alert(bg-color="primary" color="white") This is an alert with a primary background color.
w-alert(color="pink") This is an alert with a pink color.
w-alert(bg-color="pink" color="white") This is an alert with a pink background color.

p You can even mix different colors and background colors.
w-alert(bg-color="purple" color="cyan-light4") This is an alert with a purple background and cyan color.
w-alert(bg-color="cyan-light4" color="purple") This is an alert with a cyan background and purple color.`)]),html:e(()=>[r(`<w-alert color="primary">
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
`)]),default:e(()=>[a(t,{color:"primary"},{default:e(()=>[r("This is an alert with a primary color.")]),_:1}),a(t,{"bg-color":"primary",color:"white"},{default:e(()=>[r("This is an alert with a primary background color.")]),_:1}),a(t,{color:"pink"},{default:e(()=>[r("This is an alert with a pink color.")]),_:1}),a(t,{"bg-color":"pink",color:"white"},{default:e(()=>[r("This is an alert with a pink background color.")]),_:1}),S,a(t,{"bg-color":"purple",color:"cyan-light4"},{default:e(()=>[r("This is an alert with a purple background and cyan color.")]),_:1}),a(t,{"bg-color":"cyan-light4",color:"purple"},{default:e(()=>[r("This is an alert with a cyan background and purple color.")]),_:1})]),_:1}),a(o,{h2:"",slug:"types"},{default:e(()=>[r("Types (adds an icon)")]),_:1}),$,a(n,{"content-class":"py0"},{pug:e(()=>[r(`w-alert(success) This is a success alert.
w-alert(warning) This is a warning alert.
w-alert(error) This is an error alert.
w-alert(info) This is an info alert.`)]),html:e(()=>[r(`<w-alert success>This is a success alert.</w-alert>
<w-alert warning>This is a warning alert.</w-alert>
<w-alert error>This is an error alert.</w-alert>
<w-alert info>This is an info alert.</w-alert>
`)]),default:e(()=>[a(t,{success:""},{default:e(()=>[r("This is a success alert.")]),_:1}),a(t,{warning:""},{default:e(()=>[r("This is a warning alert.")]),_:1}),a(t,{error:""},{default:e(()=>[r("This is an error alert.")]),_:1}),a(t,{info:""},{default:e(()=>[r("This is an info alert.")]),_:1})]),_:1}),C,a(n,{"content-class":"py0"},{pug:e(()=>[r(`w-alert(success plain) This is a success alert.
w-alert(warning plain) This is a warning alert.
w-alert(error plain) This is an error alert.
w-alert(info plain) This is an info alert.`)]),html:e(()=>[r(`<w-alert success plain>This is a success alert.</w-alert>
<w-alert warning plain>This is a warning alert.</w-alert>
<w-alert error plain>This is an error alert.</w-alert>
<w-alert info plain>This is an info alert.</w-alert>
`)]),default:e(()=>[a(t,{success:"",plain:""},{default:e(()=>[r("This is a success alert.")]),_:1}),a(t,{warning:"",plain:""},{default:e(()=>[r("This is a warning alert.")]),_:1}),a(t,{error:"",plain:""},{default:e(()=>[r("This is an error alert.")]),_:1}),a(t,{info:"",plain:""},{default:e(()=>[r("This is an info alert.")]),_:1})]),_:1}),a(o,{h2:""},{default:e(()=>[r("Custom icon")]),_:1}),a(n,{"content-class":"py0"},{pug:e(()=>[r('w-alert(bg-color="yellow-light5" color="amber" icon="wi-star") This is an alert with a custom icon.')]),html:e(()=>[r(`<w-alert
  bg-color="yellow-light5"
  color="amber"
  icon="wi-star">
  This is an alert with a custom icon.
</w-alert>
`)]),default:e(()=>[a(t,{"bg-color":"yellow-light5",color:"amber",icon:"wi-star"},{default:e(()=>[r("This is an alert with a custom icon.")]),_:1})]),_:1}),a(o,{h2:""},{default:e(()=>[r("Icon outside")]),_:1}),a(n,{"content-class":"py0"},{pug:e(()=>[r(`w-alert(success icon-outside) This is a success alert.
w-alert(warning icon-outside) This is a warning alert.
w-alert(error icon-outside) This is an error alert.
w-alert(info icon-outside) This is an info alert.
w-alert(bg-color="yellow-light5" color="amber" icon="mdi mdi-star-circle" icon-outside)
  | This is an alert with a custom icon.`)]),html:e(()=>[r(`<w-alert success icon-outside>This is a success alert.</w-alert>
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
`)]),default:e(()=>[a(t,{success:"","icon-outside":""},{default:e(()=>[r("This is a success alert.")]),_:1}),a(t,{warning:"","icon-outside":""},{default:e(()=>[r("This is a warning alert.")]),_:1}),a(t,{error:"","icon-outside":""},{default:e(()=>[r("This is an error alert.")]),_:1}),a(t,{info:"","icon-outside":""},{default:e(()=>[r("This is an info alert.")]),_:1}),a(t,{"bg-color":"yellow-light5",color:"amber",icon:"mdi mdi-star-circle","icon-outside":""},{default:e(()=>[r("This is an alert with a custom icon.")]),_:1})]),_:1}),a(o,{h2:""},{default:e(()=>[r("Outline")]),_:1}),a(n,{"content-class":"py0"},{pug:e(()=>[r(`w-alert(color="primary" outline) This is a normal alert with a primary color.
w-alert(success outline) This is a success alert.
w-alert(warning outline) This is a warning alert.
w-alert(error outline) This is an error alert.
w-alert(info outline) This is an info alert.`)]),html:e(()=>[r(`<w-alert color="primary" outline>This is a normal alert with a primary color.</w-alert>
<w-alert success outline>This is a success alert.</w-alert>
<w-alert warning outline>This is a warning alert.</w-alert>
<w-alert error outline>This is an error alert.</w-alert>
<w-alert info outline>This is an info alert.</w-alert>
`)]),default:e(()=>[a(t,{color:"primary",outline:""},{default:e(()=>[r("This is a normal alert with a primary color.")]),_:1}),a(t,{success:"",outline:""},{default:e(()=>[r("This is a success alert.")]),_:1}),a(t,{warning:"",outline:""},{default:e(()=>[r("This is a warning alert.")]),_:1}),a(t,{error:"",outline:""},{default:e(()=>[r("This is an error alert.")]),_:1}),a(t,{info:"",outline:""},{default:e(()=>[r("This is an info alert.")]),_:1})]),_:1}),a(o,{h2:""},{default:e(()=>[r("Borders")]),_:1}),a(n,{"content-class":"py0"},{pug:e(()=>[r(`w-alert(success light no-border) This is a success alert with no border.
w-alert(color="primary" no-border) This is a normal alert with no border.
w-alert(bg-color="cyan-light4" color="purple" no-border) This is an alert with a cyan background, purple color and no border.
.w-flex.wrap.ma-2
  w-alert.grow.ma2(color="primary" border-left) This is a normal alert with a left border.
  w-alert.grow.ma2(color="primary" border-right) This is a normal alert with a right border.
.w-flex.wrap.mx-2.mt2
  w-alert.grow.ma2(color="primary" border-top) This is a normal alert with a top border.
  w-alert.grow.ma2(color="primary" border-bottom) This is a normal alert with a left border.`)]),html:e(()=>[r(`<w-alert success light no-border>This is a success alert with no border.</w-alert>
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
`)]),default:e(()=>[a(t,{success:"",light:"","no-border":""},{default:e(()=>[r("This is a success alert with no border.")]),_:1}),a(t,{color:"primary","no-border":""},{default:e(()=>[r("This is a normal alert with no border.")]),_:1}),a(t,{"bg-color":"cyan-light4",color:"purple","no-border":""},{default:e(()=>[r("This is an alert with a cyan background, purple color and no border.")]),_:1}),s("div",B,[a(t,{class:"grow ma2",color:"primary","border-left":""},{default:e(()=>[r("This is a normal alert with a left border.")]),_:1}),a(t,{class:"grow ma2",color:"primary","border-right":""},{default:e(()=>[r("This is a normal alert with a right border.")]),_:1})]),s("div",z,[a(t,{class:"grow ma2",color:"primary","border-top":""},{default:e(()=>[r("This is a normal alert with a top border.")]),_:1}),a(t,{class:"grow ma2",color:"primary","border-bottom":""},{default:e(()=>[r("This is a normal alert with a left border.")]),_:1})])]),_:1}),a(o,{h2:""},{default:e(()=>[r("Tile, round & shadow")]),_:1}),a(n,{"content-class":"py0"},{pug:e(()=>[r(`w-alert(color="primary" tile) This is a tile alert.
w-alert(color="primary" round) This is a round alert.
w-alert(color="primary" shadow) This is a normal alert with a shadow.`)]),html:e(()=>[r(`<w-alert color="primary" tile>This is a tile alert.</w-alert>
<w-alert color="primary" round>This is a round alert.</w-alert>
<w-alert color="primary" shadow>This is a normal alert with a shadow.</w-alert>
`)]),default:e(()=>[a(t,{color:"primary",tile:""},{default:e(()=>[r("This is a tile alert.")]),_:1}),a(t,{color:"primary",round:""},{default:e(()=>[r("This is a round alert.")]),_:1}),a(t,{color:"primary",shadow:""},{default:e(()=>[r("This is a normal alert with a shadow.")]),_:1})]),_:1}),a(o,{h2:""},{default:e(()=>[r("Dismiss")]),_:1}),a(n,null,{pug:e(()=>[r(`w-alert.mt0.mb2(v-model="dismissible1" color="primary" dismiss) This is a dismissible alert.
w-alert.my2(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
w-alert.my2(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
w-button.mt2(
  @click="dismissible1 = dismissible2 = dismissible3 = true"
  :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts`)]),html:e(()=>[r(`<w-alert
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
</button>`)]),js:e(()=>[r(`data: () => ({
  dismissible1: true,
  dismissible2: true,
  dismissible3: true
})
`)]),default:e(()=>[a(t,{class:"mt0 mb2",modelValue:i.dismissible1,"onUpdate:modelValue":l[1]||(l[1]=h=>i.dismissible1=h),color:"primary",dismiss:""},{default:e(()=>[r("This is a dismissible alert.")]),_:1},8,["modelValue"]),a(t,{class:"my2",modelValue:i.dismissible2,"onUpdate:modelValue":l[2]||(l[2]=h=>i.dismissible2=h),dismiss:"",error:""},{default:e(()=>[r("This is a dismissible error type alert.")]),_:1},8,["modelValue"]),a(t,{class:"my2",modelValue:i.dismissible3,"onUpdate:modelValue":l[3]||(l[3]=h=>i.dismissible3=h),color:"amber",dismiss:"",round:""},{default:e(()=>[r("This is a dismissible round alert.")]),_:1},8,["modelValue"]),a(c,{class:"mt2",onClick:l[4]||(l[4]=h=>i.dismissible1=i.dismissible2=i.dismissible3=!0),disabled:i.dismissible1&&i.dismissible2&&i.dismissible3},{default:e(()=>[r("Reset alerts")]),_:1},8,["disabled"])]),_:1}),a(o,{h2:""},{default:e(()=>[r("Sizes")]),_:1}),a(n,{"content-class":"py0"},{pug:e(()=>[r(`w-alert(info xs) This is an extra small alert.
w-alert(info sm) This is a small alert.
w-alert(info md) This is a medium alert.
w-alert(info lg) This is a large alert.
w-alert(info xl) This is an extra large alert.`)]),html:e(()=>[r(`<w-alert info xs>This is an extra small alert.</w-alert>
<w-alert info sm>This is a small alert.</w-alert>
<w-alert info md>This is a medium alert.</w-alert>
<w-alert info lg>This is a large alert.</w-alert>
<w-alert info xl>This is an extra large alert.</w-alert>`)]),default:e(()=>[a(t,{info:"",xs:""},{default:e(()=>[r("This is an extra small alert.")]),_:1}),a(t,{info:"",sm:""},{default:e(()=>[r("This is a small alert.")]),_:1}),a(t,{info:"",md:""},{default:e(()=>[r("This is a medium alert.")]),_:1}),a(t,{info:"",lg:""},{default:e(()=>[r("This is a large alert.")]),_:1}),a(t,{info:"",xl:""},{default:e(()=>[r("This is an extra large alert.")]),_:1})]),_:1})])}const O={data:()=>({showAlert:!1,dismissible1:!0,dismissible2:!0,dismissible3:!0})},P=b(O,[["render",E]]),R=s("div",{class:"w-divider my12"},null,-1);function D(i,l,f,g,T,u){const o=d("title-link"),c=d("component-api");return m(),p("div",null,[R,a(o,{class:"title1",h2:""},{default:e(()=>[r("API")]),_:1}),a(c,{class:"mt0",items:u.props,descriptions:i.propsDescs,title:"Props"},null,8,["items","descriptions"]),a(c,{items:i.slots,title:"Slots"},null,8,["items"]),a(c,{items:u.events,title:"Events"},null,8,["items"])])}const N={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the alert. Any truthy value will show the alert whereas any falsy value will hide it.',color:`Applies a color to the alert's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the alert's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the alert container.",tile:"Removes the default border-radius and sets sharp edges on the alert container.",round:"Sets a maximum border-radius on the corners of the alert container, giving it a round look.",icon:"Provide a custom icon string (e.g. <code>mdi mdi-star</code>) to display on the left of the alert message.",iconOutside:"If an icon is provided, this option changes the style and displays the icon on the left border.",plain:'Emphasizes a "typed" alert (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',dismiss:"Adds a close button (cross icon) on the right in the alert. Clicking on this button hides the alert.",success:"Sets the type of the alert, applying the <code>success</code> class (green color) and adding a success icon on the left in the alert.",info:"Sets the type of the alert, applying the <code>info</code> class (blue color) and adding an info icon on the left in the alert.",warning:"Sets the type of the alert, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the alert.",error:"Sets the type of the alert, applying the <code>error</code> class (red color) and adding an error icon on the left in the alert.",xs:"Sets the size of the alert to extra small.",sm:"Sets the size of the alert to small.",md:"Sets the size of the alert to medium.",lg:"Sets the size of the alert to large.",xl:"Sets the size of the alert to extra large.",noBorder:"Removes the default border from the alert container.",borderLeft:"Adds a left border on the alert. Only one side-border can be applied at the same time.",borderRight:"Adds a right border on the alert. Only one side-border can be applied at the same time.",borderTop:"Adds a top border on the alert. Only one side-border can be applied at the same time.",borderBottom:"Adds a bottom border on the alert. Only one side-border can be applied at the same time.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set."},U={content:{description:"The alert content."}},H={input:"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on alert dismiss/hide."},I={data:()=>({propsDescs:N,slots:U}),computed:{props(){return y.props},events(){return y.emits.reduce((i,l)=>(i[l]={description:H[l]||""})&&i,{})}}},L=b(I,[["render",D]]);function Y(i,l,f,g,T,u){const o=d("ui-component-title"),c=d("examples"),t=d("api");return m(),p("main",null,[a(o,null,{default:e(()=>[r("w-alert")]),_:1}),a(c),a(t)])}const j={components:{Examples:P,Api:L}},q=b(j,[["render",Y]]);export{q as default};
