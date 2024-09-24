import{r as d,o as w,g as b,a as l,w as i,b as t,d as o,t as p,c as x,f as k,_ as h,s as c}from"./index-BhQVIzBi.js";const A={style:{"max-width":"1000px"}};function S(r,e,f,g,T,m){const a=d("title-link"),s=d("w-alert"),n=d("example"),y=d("w-button"),v=d("w-transition-expand");return w(),b("div",A,[l(a,{h2:""},{default:i(()=>e[5]||(e[5]=[t("Basic")])),_:1}),e[95]||(e[95]=o("p",null,[t("The alert is commonly used to emphasize some content."),o("br"),t(`
A colorful box is usually enough, but in case of status message, it could need some bold text
as well.`),o("br"),t(`
If no color is provided, it will use the primary color by default.`)],-1)),l(n,null,{pug:i(()=>e[8]||(e[8]=[t("w-alert This is an emphasized content in a default primary color alert box.\n\nw-alert(bold) This is an emphasized content in a default primary color alert box using the `bold` prop.")])),html:i(()=>e[9]||(e[9]=[t(`<w-alert>
  This is an emphasized content in a default primary color alert box.
</w-alert>

<w-alert bold>
This is an emphasized content in a default primary color alert box using the \`bold\` prop.
</w-alert>`)])),default:i(()=>[l(s,null,{default:i(()=>e[6]||(e[6]=[t("This is an emphasized content in a default primary color alert box.")])),_:1}),l(s,{bold:""},{default:i(()=>e[7]||(e[7]=[t("This is an emphasized content in a default primary color alert box using the "),o("code",null,"bold",-1),t(" prop.")])),_:1}),e[10]||(e[10]=o("p",{class:"caption mt-2"},[t("Note: you could also use the "),o("code",null,".text-bold"),t(" class instead of the "),o("code",null,"bold"),t(" prop.")],-1))]),_:1}),l(a,{h2:"",slug:"show-and-hide-with-v-model"},{default:i(()=>e[11]||(e[11]=[t("Show / hide with v-model")])),_:1}),e[96]||(e[96]=o("p",null,[t("By default alerts are visible, but if a "),o("code",null,"model-value"),t(" or "),o("code",null,"v-model"),t(` is provided,
it will show or hide according to it.`),o("br"),t(`
Like in this example you can add a transition to animate its apparition.`)],-1)),l(n,{"content-class":"pt5"},{pug:i(()=>[t('w-button(@click="showAlert = !showAlert" outline) '+p(r.showAlert?"Hide":"Show")+` alert

w-transition-expand(y)
  w-alert(v-if="showAlert" color="success") The alert is now visible.`,1)]),html:i(()=>[t(`<w-button
  @click="showAlert = !showAlert"
  outline>
  `+p(r.showAlert?"Hide":"Show")+` alert
</w-button>

<w-transition-expand y>
  <w-alert v-if="showAlert" color="success">
    The alert is now visible.
  </w-alert>
</w-transition-expand>`,1)]),js:i(()=>e[13]||(e[13]=[t(`data: () => ({
  showAlert: false
})
`)])),default:i(()=>[l(y,{onClick:e[0]||(e[0]=u=>r.showAlert=!r.showAlert),outline:""},{default:i(()=>[t(p(r.showAlert?"Hide":"Show")+" alert",1)]),_:1}),l(v,{y:""},{default:i(()=>[r.showAlert?(w(),x(s,{key:0,color:"success"},{default:i(()=>e[12]||(e[12]=[t("The alert is now visible.")])),_:1})):k("",!0)]),_:1})]),_:1}),l(a,{h2:""},{default:i(()=>e[14]||(e[14]=[t("Colors")])),_:1}),e[97]||(e[97]=o("p",null,[t("Like in most components, you can apply a color to the text with the "),o("code",null,"color"),t(` attribute,
and a color to the background with the `),o("code",null,"bg-color"),t(" attribute.")],-1)),l(n,{"content-class":"py0"},{pug:i(()=>e[20]||(e[20]=[t(`w-alert(bg-color="primary") This is an alert with a primary background color.
w-alert(bg-color="secondary") This is an alert with a secondary background color.
w-alert(color="teal") This is an alert with a teal color.

p You can mix different colors and background colors.
w-alert(bg-color="teal" color="white") This is an alert with a teal background and white color.
w-alert(bg-color="yellow-light6" color="brown") This is an alert with a yellow background and brown color.`)])),html:i(()=>e[21]||(e[21]=[t(`<w-alert bg-color="primary">
  This is an alert with a primary background color.
</w-alert>

<w-alert bg-color="secondary" color="white">
  This is an alert with a secondary background color.
</w-alert>

<w-alert color="teal">
  This is an alert with a teal color.
</w-alert>

<p>
  You can mix different colors and background colors.
</p>

<w-alert bg-color="teal" color="white">
  This is an alert with a teal background and white color.
</w-alert>

<w-alert bg-color="yellow-light6" color="brown">
  This is an alert with a yellow background and brown color.
</w-alert>
`)])),default:i(()=>[l(s,{"bg-color":"primary"},{default:i(()=>e[15]||(e[15]=[t("This is an alert with a primary background color.")])),_:1}),l(s,{"bg-color":"secondary"},{default:i(()=>e[16]||(e[16]=[t("This is an alert with a secondary background color.")])),_:1}),l(s,{color:"teal"},{default:i(()=>e[17]||(e[17]=[t("This is an alert with a teal color.")])),_:1}),e[22]||(e[22]=o("p",null,"You can mix different colors and background colors.",-1)),l(s,{"bg-color":"teal",color:"white"},{default:i(()=>e[18]||(e[18]=[t("This is an alert with a teal background and white color.")])),_:1}),l(s,{"bg-color":"yellow-light6",color:"brown"},{default:i(()=>e[19]||(e[19]=[t("This is an alert with a yellow background and brown color.")])),_:1})]),_:1}),l(a,{h2:"",slug:"types"},{default:i(()=>e[23]||(e[23]=[t("Types (adds an icon)")])),_:1}),e[98]||(e[98]=o("h3",null,"Normal",-1)),l(n,{"content-class":"py0"},{pug:i(()=>e[28]||(e[28]=[t(`w-alert(success) This is a success alert.
w-alert(warning) This is a warning alert.
w-alert(error) This is an error alert.
w-alert(info) This is an info alert.`)])),html:i(()=>e[29]||(e[29]=[t(`<w-alert success>This is a success alert.</w-alert>
<w-alert warning>This is a warning alert.</w-alert>
<w-alert error>This is an error alert.</w-alert>
<w-alert info>This is an info alert.</w-alert>
`)])),default:i(()=>[l(s,{success:""},{default:i(()=>e[24]||(e[24]=[t("This is a success alert.")])),_:1}),l(s,{warning:""},{default:i(()=>e[25]||(e[25]=[t("This is a warning alert.")])),_:1}),l(s,{error:""},{default:i(()=>e[26]||(e[26]=[t("This is an error alert.")])),_:1}),l(s,{info:""},{default:i(()=>e[27]||(e[27]=[t("This is an info alert.")])),_:1})]),_:1}),e[99]||(e[99]=o("h3",null,"Plain",-1)),l(n,{"content-class":"py0"},{pug:i(()=>e[34]||(e[34]=[t(`w-alert(success plain) This is a success alert.
w-alert(warning plain) This is a warning alert.
w-alert(error plain) This is an error alert.
w-alert(info plain) This is an info alert.`)])),html:i(()=>e[35]||(e[35]=[t(`<w-alert success plain>This is a success alert.</w-alert>
<w-alert warning plain>This is a warning alert.</w-alert>
<w-alert error plain>This is an error alert.</w-alert>
<w-alert info plain>This is an info alert.</w-alert>
`)])),default:i(()=>[l(s,{success:"",plain:""},{default:i(()=>e[30]||(e[30]=[t("This is a success alert.")])),_:1}),l(s,{warning:"",plain:""},{default:i(()=>e[31]||(e[31]=[t("This is a warning alert.")])),_:1}),l(s,{error:"",plain:""},{default:i(()=>e[32]||(e[32]=[t("This is an error alert.")])),_:1}),l(s,{info:"",plain:""},{default:i(()=>e[33]||(e[33]=[t("This is an info alert.")])),_:1})]),_:1}),l(a,{h2:""},{default:i(()=>e[36]||(e[36]=[t("Custom icon")])),_:1}),l(n,{"content-class":"py0"},{pug:i(()=>e[38]||(e[38]=[t('w-alert(bg-color="yellow-light6" color="amber" icon="wi-star") This is an alert with a custom icon.')])),html:i(()=>e[39]||(e[39]=[t(`<w-alert
  bg-color="yellow-light6"
  color="amber"
  icon="wi-star">
  This is an alert with a custom icon.
</w-alert>
`)])),default:i(()=>[l(s,{"bg-color":"yellow-light6",color:"amber",icon:"wi-star"},{default:i(()=>e[37]||(e[37]=[t("This is an alert with a custom icon.")])),_:1})]),_:1}),l(a,{h2:""},{default:i(()=>e[40]||(e[40]=[t("Icon outside")])),_:1}),l(n,{"content-class":"py0"},{pug:i(()=>e[46]||(e[46]=[t(`w-alert(success icon-outside) This is a success alert.
w-alert(warning icon-outside) This is a warning alert.
w-alert(error icon-outside) This is an error alert.
w-alert(info icon-outside) This is an info alert.
w-alert(bg-color="yellow-light6" color="amber" icon="mdi mdi-star-circle" icon-outside)
  | This is an alert with a custom icon.`)])),html:i(()=>e[47]||(e[47]=[t(`<w-alert success icon-outside>This is a success alert.</w-alert>
<w-alert warning icon-outside>This is a warning alert.</w-alert>
<w-alert error icon-outside>This is an error alert.</w-alert>
<w-alert info icon-outside>This is an info alert.</w-alert>
<w-alert
  bg-color="yellow-light6"
  color="amber"
  icon="mdi mdi-star-circle"
  icon-outside>
  This is an alert with a custom icon.
</w-alert>
`)])),default:i(()=>[l(s,{success:"","icon-outside":""},{default:i(()=>e[41]||(e[41]=[t("This is a success alert.")])),_:1}),l(s,{warning:"","icon-outside":""},{default:i(()=>e[42]||(e[42]=[t("This is a warning alert.")])),_:1}),l(s,{error:"","icon-outside":""},{default:i(()=>e[43]||(e[43]=[t("This is an error alert.")])),_:1}),l(s,{info:"","icon-outside":""},{default:i(()=>e[44]||(e[44]=[t("This is an info alert.")])),_:1}),l(s,{"bg-color":"yellow-light6",color:"amber",icon:"mdi mdi-star-circle","icon-outside":""},{default:i(()=>e[45]||(e[45]=[t("This is an alert with a custom icon.")])),_:1})]),_:1}),l(a,{h2:""},{default:i(()=>e[48]||(e[48]=[t("Outline")])),_:1}),l(n,{"content-class":"py0"},{pug:i(()=>e[54]||(e[54]=[t(`w-alert(outline) This is a normal alert with a primary color.
w-alert(success outline) This is a success alert.
w-alert(warning outline) This is a warning alert.
w-alert(error outline) This is an error alert.
w-alert(info outline) This is an info alert.`)])),html:i(()=>e[55]||(e[55]=[t(`<w-alert outline>This is a normal alert with a primary color.</w-alert>
<w-alert success outline>This is a success alert.</w-alert>
<w-alert warning outline>This is a warning alert.</w-alert>
<w-alert error outline>This is an error alert.</w-alert>
<w-alert info outline>This is an info alert.</w-alert>
`)])),default:i(()=>[l(s,{outline:""},{default:i(()=>e[49]||(e[49]=[t("This is a normal alert with a primary color.")])),_:1}),l(s,{success:"",outline:""},{default:i(()=>e[50]||(e[50]=[t("This is a success alert.")])),_:1}),l(s,{warning:"",outline:""},{default:i(()=>e[51]||(e[51]=[t("This is a warning alert.")])),_:1}),l(s,{error:"",outline:""},{default:i(()=>e[52]||(e[52]=[t("This is an error alert.")])),_:1}),l(s,{info:"",outline:""},{default:i(()=>e[53]||(e[53]=[t("This is an info alert.")])),_:1})]),_:1}),l(a,{h2:""},{default:i(()=>e[56]||(e[56]=[t("Borders")])),_:1}),l(n,{"content-class":"py0"},{pug:i(()=>e[66]||(e[66]=[t(`w-alert This is a normal alert with no border.
w-alert(border-left) This is a normal alert with a left border.
w-alert(border-right) This is a normal alert with a right border.
w-alert(border-top) This is a normal alert with a top border.
w-alert(border-bottom) This is a normal alert with a bottom border.
w-alert(border) This is a normal alert with borders all around.
w-alert.bd2 This is a normal alert with borders using the `),o("code",null,".bd2",-1),t(` helper class.
w-alert(success) This is a success alert with no border.
w-alert(success border) This is a success alert with borders all around.`)])),html:i(()=>e[67]||(e[67]=[t(`<w-alert>This is a normal alert with no border.</w-alert>
<w-alert border-left>
  This is a normal alert with a left border.
</w-alert>
<w-alert border-right>
  This is a normal alert with a right border.
</w-alert>
<w-alert border-top>
  This is a normal alert with a top border.
</w-alert>
<w-alert border-bottom>
  This is a normal alert with a bottom border.
</w-alert>
<w-alert border>
  This is a normal alert with borders all around.
</w-alert>
<w-alert class="bd2">
  This is a normal alert with borders using the `),o("code",null,".bd2",-1),t(` helper class.
</w-alert>

<w-alert success>
  This is a success alert with no border.
</w-alert>
<w-alert success border>
  This is a success alert with borders all around.
</w-alert>
`)])),default:i(()=>[l(s,null,{default:i(()=>e[57]||(e[57]=[t("This is a normal alert with no border.")])),_:1}),l(s,{"border-left":""},{default:i(()=>e[58]||(e[58]=[t("This is a normal alert with a left border.")])),_:1}),l(s,{"border-right":""},{default:i(()=>e[59]||(e[59]=[t("This is a normal alert with a right border.")])),_:1}),l(s,{"border-top":""},{default:i(()=>e[60]||(e[60]=[t("This is a normal alert with a top border.")])),_:1}),l(s,{"border-bottom":""},{default:i(()=>e[61]||(e[61]=[t("This is a normal alert with a bottom border.")])),_:1}),l(s,{border:""},{default:i(()=>e[62]||(e[62]=[t("This is a normal alert with borders all around.")])),_:1}),l(s,{class:"bd2"},{default:i(()=>e[63]||(e[63]=[t("This is a normal alert with borders using the "),o("code",null,".bd2",-1),t(" helper class.")])),_:1}),l(s,{success:""},{default:i(()=>e[64]||(e[64]=[t("This is a success alert with no border.")])),_:1}),l(s,{success:"",border:""},{default:i(()=>e[65]||(e[65]=[t("This is a success alert with borders all around.")])),_:1})]),_:1}),l(a,{h2:""},{default:i(()=>e[68]||(e[68]=[t("Tile, round & shadow")])),_:1}),l(n,{"content-class":"py0"},{pug:i(()=>e[72]||(e[72]=[t(`w-alert(tile) This is a tile alert.
w-alert(round) This is a round alert.
w-alert(shadow) This is a normal alert with a shadow.`)])),html:i(()=>e[73]||(e[73]=[t(`<w-alert tile>This is a tile alert.</w-alert>
<w-alert round>This is a round alert.</w-alert>
<w-alert shadow>This is a normal alert with a shadow.</w-alert>
`)])),default:i(()=>[l(s,{tile:""},{default:i(()=>e[69]||(e[69]=[t("This is a tile alert.")])),_:1}),l(s,{round:""},{default:i(()=>e[70]||(e[70]=[t("This is a round alert.")])),_:1}),l(s,{shadow:""},{default:i(()=>e[71]||(e[71]=[t("This is a normal alert with a shadow.")])),_:1})]),_:1}),l(a,{h2:""},{default:i(()=>e[74]||(e[74]=[t("Dismiss")])),_:1}),l(n,null,{pug:i(()=>e[79]||(e[79]=[t(`w-alert.mt0.mb2(v-model="dismissible1" dismiss) This is a dismissible alert.
w-alert.my2(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
w-alert.my2(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
w-button.mt2(
  @click="dismissible1 = dismissible2 = dismissible3 = true"
  :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts`)])),html:i(()=>e[80]||(e[80]=[t(`<w-alert
  v-model="dismissible1"
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
</button>`)])),js:i(()=>e[81]||(e[81]=[t(`data: () => ({
  dismissible1: true,
  dismissible2: true,
  dismissible3: true
})
`)])),default:i(()=>[l(s,{class:"mt0 mb2",modelValue:r.dismissible1,"onUpdate:modelValue":e[1]||(e[1]=u=>r.dismissible1=u),dismiss:""},{default:i(()=>e[75]||(e[75]=[t("This is a dismissible alert.")])),_:1},8,["modelValue"]),l(s,{class:"my2",modelValue:r.dismissible2,"onUpdate:modelValue":e[2]||(e[2]=u=>r.dismissible2=u),dismiss:"",error:""},{default:i(()=>e[76]||(e[76]=[t("This is a dismissible error type alert.")])),_:1},8,["modelValue"]),l(s,{class:"my2",modelValue:r.dismissible3,"onUpdate:modelValue":e[3]||(e[3]=u=>r.dismissible3=u),color:"amber",dismiss:"",round:""},{default:i(()=>e[77]||(e[77]=[t("This is a dismissible round alert.")])),_:1},8,["modelValue"]),l(y,{class:"mt2",onClick:e[4]||(e[4]=u=>r.dismissible1=r.dismissible2=r.dismissible3=!0),disabled:r.dismissible1&&r.dismissible2&&r.dismissible3},{default:i(()=>e[78]||(e[78]=[t("Reset alerts")])),_:1},8,["disabled"])]),_:1}),l(a,{h2:""},{default:i(()=>e[82]||(e[82]=[t("Sizes")])),_:1}),l(n,{"content-class":"py0"},{pug:i(()=>e[88]||(e[88]=[t(`w-alert(info xs) This is an extra small alert.
w-alert(info sm) This is a small alert.
w-alert(info md) This is a medium alert.
w-alert(info lg) This is a large alert.
w-alert(info xl) This is an extra large alert.`)])),html:i(()=>e[89]||(e[89]=[t(`<w-alert info xs>This is an extra small alert.</w-alert>
<w-alert info sm>This is a small alert.</w-alert>
<w-alert info md>This is a medium alert.</w-alert>
<w-alert info lg>This is a large alert.</w-alert>
<w-alert info xl>This is an extra large alert.</w-alert>
`)])),default:i(()=>[l(s,{info:"",xs:""},{default:i(()=>e[83]||(e[83]=[t("This is an extra small alert.")])),_:1}),l(s,{info:"",sm:""},{default:i(()=>e[84]||(e[84]=[t("This is a small alert.")])),_:1}),l(s,{info:"",md:""},{default:i(()=>e[85]||(e[85]=[t("This is a medium alert.")])),_:1}),l(s,{info:"",lg:""},{default:i(()=>e[86]||(e[86]=[t("This is a large alert.")])),_:1}),l(s,{info:"",xl:""},{default:i(()=>e[87]||(e[87]=[t("This is an extra large alert.")])),_:1})]),_:1}),e[100]||(e[100]=o("p",null,"With some multiline content.",-1)),l(s,{info:"",xs:""},{default:i(()=>e[90]||(e[90]=[t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.")])),_:1}),l(s,{info:"",sm:""},{default:i(()=>e[91]||(e[91]=[t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.")])),_:1}),l(s,{info:"",md:""},{default:i(()=>e[92]||(e[92]=[t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.")])),_:1}),l(s,{info:"",lg:""},{default:i(()=>e[93]||(e[93]=[t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.")])),_:1}),l(s,{info:"",xl:""},{default:i(()=>e[94]||(e[94]=[t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.")])),_:1})])}const V={data:()=>({showAlert:!1,dismissible1:!0,dismissible2:!0,dismissible3:!0})},$=h(V,[["render",S]]);function q(r,e,f,g,T,m){const a=d("title-link"),s=d("component-api");return w(),b("div",null,[e[1]||(e[1]=o("div",{class:"w-divider my12"},null,-1)),l(a,{class:"title1",h2:""},{default:i(()=>e[0]||(e[0]=[t("API")])),_:1}),l(s,{class:"mt0",items:m.props,descriptions:r.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(s,{items:r.slots,title:"Slots"},null,8,["items"]),l(s,{items:m.events,title:"Events"},null,8,["items"])])}const z={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the alert. Any truthy value will show the alert whereas any falsy value will hide it.',color:'Applies a color to the alert\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.<br>The default color is `primary`, if no <code>bg-color</code> and no type (<code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) is provided.',bgColor:`Applies a color to the alert's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the alert container.",tile:"Removes the default border-radius and sets sharp edges on the alert container.",round:"Sets a maximum border-radius on the corners of the alert container, giving it a round look.",icon:"Provide a custom icon string (e.g. <code>mdi mdi-star</code>) to display on the left of the alert message.",iconOutside:"If an icon is provided, this option changes the style and displays the icon on the left border.",plain:'Emphasizes a "typed" alert (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',dismiss:"Adds a close button (cross icon) on the right in the alert. Clicking on this button hides the alert.",success:"Sets the type of the alert, applying the <code>success</code> class (green color) and adding a success icon on the left in the alert.",info:"Sets the type of the alert, applying the <code>info</code> class (blue color) and adding an info icon on the left in the alert.",warning:"Sets the type of the alert, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the alert.",error:"Sets the type of the alert, applying the <code>error</code> class (red color) and adding an error icon on the left in the alert.",xs:"Sets the size of the alert to extra small.",sm:"Sets the size of the alert to small.",md:"Sets the size of the alert to medium.",lg:"Sets the size of the alert to large.",xl:"Sets the size of the alert to extra large.",bold:"Sets the alert text to bold. Note that you could also use the <code>.text-bold</code> class.",border:"Adds borders all around the alert container.",borderLeft:"Adds a left border on the alert. Only one side-border can be applied at the same time.",borderRight:"Adds a right border on the alert. Only one side-border can be applied at the same time.",borderTop:"Adds a top border on the alert. Only one side-border can be applied at the same time.",borderBottom:"Adds a bottom border on the alert. Only one side-border can be applied at the same time.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set."},C={default:{description:"The alert content."}},B={input:"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on alert dismiss/hide."},L={data:()=>({propsDescs:z,slots:C}),computed:{props(){return c.props},events(){return c.emits.reduce((r,e)=>(r[e]={description:B[e]||""})&&r,{})}}},E=h(L,[["render",q]]);function N(r,e,f,g,T,m){const a=d("ui-component-title"),s=d("examples"),n=d("api");return w(),b("main",null,[l(a,null,{default:i(()=>e[0]||(e[0]=[t("w-alert")])),_:1}),l(s),l(n)])}const O={components:{Examples:$,Api:E}},D=h(O,[["render",N]]);export{D as default};
