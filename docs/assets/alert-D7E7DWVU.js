import{N as e,U as t,c as n,d as r,g as i,h as a,k as o,l as s,u as c,yt as l}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as u}from"./_plugin-vue_export-helper-S3RvzygF.js";import{V as d}from"./index-BJr8b_n6.js";var f={style:{"max-width":`1000px`}};function p(u,d,p,m,h,g){let _=e(`title-link`),v=e(`w-alert`),y=e(`example`),b=e(`w-button`),x=e(`w-transition-expand`);return o(),r(`div`,f,[i(_,{h2:``},{default:t(()=>[...d[5]||=[a(`Basic`,-1)]]),_:1}),d[95]||=n(`p`,null,[a(`The alert is commonly used to emphasize some content.`),n(`br`),a(`
A colorful box is usually enough, but in case of status message, it could need some bold text
as well.`),n(`br`),a(`
If no color is provided, it will use the primary color by default.`)],-1),i(y,null,{pug:t(()=>[...d[8]||=[a(`w-alert This is an emphasized content in a default primary color alert box.

w-alert(bold) This is an emphasized content in a default primary color alert box using the \`bold\` prop.`,-1)]]),html:t(()=>[...d[9]||=[a(`<w-alert>
  This is an emphasized content in a default primary color alert box.
</w-alert>

<w-alert bold>
This is an emphasized content in a default primary color alert box using the \`bold\` prop.
</w-alert>`,-1)]]),default:t(()=>[i(v,null,{default:t(()=>[...d[6]||=[a(`This is an emphasized content in a default primary color alert box.`,-1)]]),_:1}),i(v,{bold:``},{default:t(()=>[...d[7]||=[a(`This is an emphasized content in a default primary color alert box using the `,-1),n(`code`,null,`bold`,-1),a(` prop.`,-1)]]),_:1}),d[10]||=n(`p`,{class:`caption mt-2`},[a(`Note: you could also use the `),n(`code`,null,`.text-bold`),a(` class instead of the `),n(`code`,null,`bold`),a(` prop.`)],-1)]),_:1}),i(_,{h2:``,slug:`show-and-hide-with-v-model`},{default:t(()=>[...d[11]||=[a(`Show / hide with v-model`,-1)]]),_:1}),d[96]||=n(`p`,null,[a(`By default alerts are visible, but if a `),n(`code`,null,`model-value`),a(` or `),n(`code`,null,`v-model`),a(` is provided,
it will show or hide according to it.`),n(`br`),a(`
Like in this example you can add a transition to animate its apparition.`)],-1),i(y,{"content-class":`pt5`},{pug:t(()=>[a(`w-button(@click="showAlert = !showAlert" outline) `+l(u.showAlert?`Hide`:`Show`)+` alert

w-transition-expand(y)
  w-alert(v-if="showAlert" color="success") The alert is now visible.`,1)]),html:t(()=>[a(`<w-button
  @click="showAlert = !showAlert"
  outline>
  `+l(u.showAlert?`Hide`:`Show`)+` alert
</w-button>

<w-transition-expand y>
  <w-alert v-if="showAlert" color="success">
    The alert is now visible.
  </w-alert>
</w-transition-expand>`,1)]),js:t(()=>[...d[13]||=[a(`data: () => ({
  showAlert: false
})
`,-1)]]),default:t(()=>[i(b,{onClick:d[0]||=e=>u.showAlert=!u.showAlert,outline:``},{default:t(()=>[a(l(u.showAlert?`Hide`:`Show`)+` alert`,1)]),_:1}),i(x,{y:``},{default:t(()=>[u.showAlert?(o(),s(v,{key:0,color:`success`},{default:t(()=>[...d[12]||=[a(`The alert is now visible.`,-1)]]),_:1})):c(``,!0)]),_:1})]),_:1}),i(_,{h2:``},{default:t(()=>[...d[14]||=[a(`Colors`,-1)]]),_:1}),d[97]||=n(`p`,null,[a(`Like in most components, you can apply a color to the text with the `),n(`code`,null,`color`),a(` attribute,
and a color to the background with the `),n(`code`,null,`bg-color`),a(` attribute.`)],-1),i(y,{"content-class":`py0`},{pug:t(()=>[...d[20]||=[a(`w-alert(bg-color="primary") This is an alert with a primary background color.
w-alert(bg-color="secondary") This is an alert with a secondary background color.
w-alert(color="teal") This is an alert with a teal color.

p You can mix different colors and background colors.
w-alert(bg-color="teal" color="white") This is an alert with a teal background and white color.
w-alert(bg-color="yellow-light6" color="brown") This is an alert with a yellow background and brown color.`,-1)]]),html:t(()=>[...d[21]||=[a(`<w-alert bg-color="primary">
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
`,-1)]]),default:t(()=>[i(v,{"bg-color":`primary`},{default:t(()=>[...d[15]||=[a(`This is an alert with a primary background color.`,-1)]]),_:1}),i(v,{"bg-color":`secondary`},{default:t(()=>[...d[16]||=[a(`This is an alert with a secondary background color.`,-1)]]),_:1}),i(v,{color:`teal`},{default:t(()=>[...d[17]||=[a(`This is an alert with a teal color.`,-1)]]),_:1}),d[22]||=n(`p`,null,`You can mix different colors and background colors.`,-1),i(v,{"bg-color":`teal`,color:`white`},{default:t(()=>[...d[18]||=[a(`This is an alert with a teal background and white color.`,-1)]]),_:1}),i(v,{"bg-color":`yellow-light6`,color:`brown`},{default:t(()=>[...d[19]||=[a(`This is an alert with a yellow background and brown color.`,-1)]]),_:1})]),_:1}),i(_,{h2:``,slug:`types`},{default:t(()=>[...d[23]||=[a(`Types (adds an icon)`,-1)]]),_:1}),d[98]||=n(`h3`,null,`Normal`,-1),i(y,{"content-class":`py0`},{pug:t(()=>[...d[28]||=[a(`w-alert(success) This is a success alert.
w-alert(warning) This is a warning alert.
w-alert(error) This is an error alert.
w-alert(info) This is an info alert.`,-1)]]),html:t(()=>[...d[29]||=[a(`<w-alert success>This is a success alert.</w-alert>
<w-alert warning>This is a warning alert.</w-alert>
<w-alert error>This is an error alert.</w-alert>
<w-alert info>This is an info alert.</w-alert>
`,-1)]]),default:t(()=>[i(v,{success:``},{default:t(()=>[...d[24]||=[a(`This is a success alert.`,-1)]]),_:1}),i(v,{warning:``},{default:t(()=>[...d[25]||=[a(`This is a warning alert.`,-1)]]),_:1}),i(v,{error:``},{default:t(()=>[...d[26]||=[a(`This is an error alert.`,-1)]]),_:1}),i(v,{info:``},{default:t(()=>[...d[27]||=[a(`This is an info alert.`,-1)]]),_:1})]),_:1}),d[99]||=n(`h3`,null,`Plain`,-1),i(y,{"content-class":`py0`},{pug:t(()=>[...d[34]||=[a(`w-alert(success plain) This is a success alert.
w-alert(warning plain) This is a warning alert.
w-alert(error plain) This is an error alert.
w-alert(info plain) This is an info alert.`,-1)]]),html:t(()=>[...d[35]||=[a(`<w-alert success plain>This is a success alert.</w-alert>
<w-alert warning plain>This is a warning alert.</w-alert>
<w-alert error plain>This is an error alert.</w-alert>
<w-alert info plain>This is an info alert.</w-alert>
`,-1)]]),default:t(()=>[i(v,{success:``,plain:``},{default:t(()=>[...d[30]||=[a(`This is a success alert.`,-1)]]),_:1}),i(v,{warning:``,plain:``},{default:t(()=>[...d[31]||=[a(`This is a warning alert.`,-1)]]),_:1}),i(v,{error:``,plain:``},{default:t(()=>[...d[32]||=[a(`This is an error alert.`,-1)]]),_:1}),i(v,{info:``,plain:``},{default:t(()=>[...d[33]||=[a(`This is an info alert.`,-1)]]),_:1})]),_:1}),i(_,{h2:``},{default:t(()=>[...d[36]||=[a(`Custom icon`,-1)]]),_:1}),i(y,{"content-class":`py0`},{pug:t(()=>[...d[38]||=[a(`w-alert(bg-color="yellow-light6" color="amber" icon="wi-star") This is an alert with a custom icon.`,-1)]]),html:t(()=>[...d[39]||=[a(`<w-alert
  bg-color="yellow-light6"
  color="amber"
  icon="wi-star">
  This is an alert with a custom icon.
</w-alert>
`,-1)]]),default:t(()=>[i(v,{"bg-color":`yellow-light6`,color:`amber`,icon:`wi-star`},{default:t(()=>[...d[37]||=[a(`This is an alert with a custom icon.`,-1)]]),_:1})]),_:1}),i(_,{h2:``},{default:t(()=>[...d[40]||=[a(`Icon outside`,-1)]]),_:1}),i(y,{"content-class":`py0`},{pug:t(()=>[...d[46]||=[a(`w-alert(success icon-outside) This is a success alert.
w-alert(warning icon-outside) This is a warning alert.
w-alert(error icon-outside) This is an error alert.
w-alert(info icon-outside) This is an info alert.
w-alert(bg-color="yellow-light6" color="amber" icon="mdi mdi-star-circle" icon-outside)
  | This is an alert with a custom icon.`,-1)]]),html:t(()=>[...d[47]||=[a(`<w-alert success icon-outside>This is a success alert.</w-alert>
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
`,-1)]]),default:t(()=>[i(v,{success:``,"icon-outside":``},{default:t(()=>[...d[41]||=[a(`This is a success alert.`,-1)]]),_:1}),i(v,{warning:``,"icon-outside":``},{default:t(()=>[...d[42]||=[a(`This is a warning alert.`,-1)]]),_:1}),i(v,{error:``,"icon-outside":``},{default:t(()=>[...d[43]||=[a(`This is an error alert.`,-1)]]),_:1}),i(v,{info:``,"icon-outside":``},{default:t(()=>[...d[44]||=[a(`This is an info alert.`,-1)]]),_:1}),i(v,{"bg-color":`yellow-light6`,color:`amber`,icon:`mdi mdi-star-circle`,"icon-outside":``},{default:t(()=>[...d[45]||=[a(`This is an alert with a custom icon.`,-1)]]),_:1})]),_:1}),i(_,{h2:``},{default:t(()=>[...d[48]||=[a(`Outline`,-1)]]),_:1}),i(y,{"content-class":`py0`},{pug:t(()=>[...d[54]||=[a(`w-alert(outline) This is a normal alert with a primary color.
w-alert(success outline) This is a success alert.
w-alert(warning outline) This is a warning alert.
w-alert(error outline) This is an error alert.
w-alert(info outline) This is an info alert.`,-1)]]),html:t(()=>[...d[55]||=[a(`<w-alert outline>This is a normal alert with a primary color.</w-alert>
<w-alert success outline>This is a success alert.</w-alert>
<w-alert warning outline>This is a warning alert.</w-alert>
<w-alert error outline>This is an error alert.</w-alert>
<w-alert info outline>This is an info alert.</w-alert>
`,-1)]]),default:t(()=>[i(v,{outline:``},{default:t(()=>[...d[49]||=[a(`This is a normal alert with a primary color.`,-1)]]),_:1}),i(v,{success:``,outline:``},{default:t(()=>[...d[50]||=[a(`This is a success alert.`,-1)]]),_:1}),i(v,{warning:``,outline:``},{default:t(()=>[...d[51]||=[a(`This is a warning alert.`,-1)]]),_:1}),i(v,{error:``,outline:``},{default:t(()=>[...d[52]||=[a(`This is an error alert.`,-1)]]),_:1}),i(v,{info:``,outline:``},{default:t(()=>[...d[53]||=[a(`This is an info alert.`,-1)]]),_:1})]),_:1}),i(_,{h2:``},{default:t(()=>[...d[56]||=[a(`Borders`,-1)]]),_:1}),i(y,{"content-class":`py0`},{pug:t(()=>[...d[66]||=[a(`w-alert This is a normal alert with no border.
w-alert(border-left) This is a normal alert with a left border.
w-alert(border-right) This is a normal alert with a right border.
w-alert(border-top) This is a normal alert with a top border.
w-alert(border-bottom) This is a normal alert with a bottom border.
w-alert(border) This is a normal alert with borders all around.
w-alert.bd2 This is a normal alert with borders using the `,-1),n(`code`,null,`.bd2`,-1),a(` helper class.
w-alert(success) This is a success alert with no border.
w-alert(success border) This is a success alert with borders all around.`,-1)]]),html:t(()=>[...d[67]||=[a(`<w-alert>This is a normal alert with no border.</w-alert>
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
  This is a normal alert with borders using the `,-1),n(`code`,null,`.bd2`,-1),a(` helper class.
</w-alert>

<w-alert success>
  This is a success alert with no border.
</w-alert>
<w-alert success border>
  This is a success alert with borders all around.
</w-alert>
`,-1)]]),default:t(()=>[i(v,null,{default:t(()=>[...d[57]||=[a(`This is a normal alert with no border.`,-1)]]),_:1}),i(v,{"border-left":``},{default:t(()=>[...d[58]||=[a(`This is a normal alert with a left border.`,-1)]]),_:1}),i(v,{"border-right":``},{default:t(()=>[...d[59]||=[a(`This is a normal alert with a right border.`,-1)]]),_:1}),i(v,{"border-top":``},{default:t(()=>[...d[60]||=[a(`This is a normal alert with a top border.`,-1)]]),_:1}),i(v,{"border-bottom":``},{default:t(()=>[...d[61]||=[a(`This is a normal alert with a bottom border.`,-1)]]),_:1}),i(v,{border:``},{default:t(()=>[...d[62]||=[a(`This is a normal alert with borders all around.`,-1)]]),_:1}),i(v,{class:`bd2`},{default:t(()=>[...d[63]||=[a(`This is a normal alert with borders using the `,-1),n(`code`,null,`.bd2`,-1),a(` helper class.`,-1)]]),_:1}),i(v,{success:``},{default:t(()=>[...d[64]||=[a(`This is a success alert with no border.`,-1)]]),_:1}),i(v,{success:``,border:``},{default:t(()=>[...d[65]||=[a(`This is a success alert with borders all around.`,-1)]]),_:1})]),_:1}),i(_,{h2:``},{default:t(()=>[...d[68]||=[a(`Tile, round & shadow`,-1)]]),_:1}),i(y,{"content-class":`py0`},{pug:t(()=>[...d[72]||=[a(`w-alert(tile) This is a tile alert.
w-alert(round) This is a round alert.
w-alert(shadow) This is a normal alert with a shadow.`,-1)]]),html:t(()=>[...d[73]||=[a(`<w-alert tile>This is a tile alert.</w-alert>
<w-alert round>This is a round alert.</w-alert>
<w-alert shadow>This is a normal alert with a shadow.</w-alert>
`,-1)]]),default:t(()=>[i(v,{tile:``},{default:t(()=>[...d[69]||=[a(`This is a tile alert.`,-1)]]),_:1}),i(v,{round:``},{default:t(()=>[...d[70]||=[a(`This is a round alert.`,-1)]]),_:1}),i(v,{shadow:``},{default:t(()=>[...d[71]||=[a(`This is a normal alert with a shadow.`,-1)]]),_:1})]),_:1}),i(_,{h2:``},{default:t(()=>[...d[74]||=[a(`Dismiss`,-1)]]),_:1}),i(y,null,{pug:t(()=>[...d[79]||=[a(`w-alert.mt0.mb2(v-model="dismissible1" dismiss) This is a dismissible alert.
w-alert.my2(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
w-alert.my2(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
w-button.mt2(
  @click="dismissible1 = dismissible2 = dismissible3 = true"
  :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts`,-1)]]),html:t(()=>[...d[80]||=[a(`<w-alert
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
</button>`,-1)]]),js:t(()=>[...d[81]||=[a(`data: () => ({
  dismissible1: true,
  dismissible2: true,
  dismissible3: true
})
`,-1)]]),default:t(()=>[i(v,{class:`mt0 mb2`,modelValue:u.dismissible1,"onUpdate:modelValue":d[1]||=e=>u.dismissible1=e,dismiss:``},{default:t(()=>[...d[75]||=[a(`This is a dismissible alert.`,-1)]]),_:1},8,[`modelValue`]),i(v,{class:`my2`,modelValue:u.dismissible2,"onUpdate:modelValue":d[2]||=e=>u.dismissible2=e,dismiss:``,error:``},{default:t(()=>[...d[76]||=[a(`This is a dismissible error type alert.`,-1)]]),_:1},8,[`modelValue`]),i(v,{class:`my2`,modelValue:u.dismissible3,"onUpdate:modelValue":d[3]||=e=>u.dismissible3=e,color:`amber`,dismiss:``,round:``},{default:t(()=>[...d[77]||=[a(`This is a dismissible round alert.`,-1)]]),_:1},8,[`modelValue`]),i(b,{class:`mt2`,onClick:d[4]||=e=>u.dismissible1=u.dismissible2=u.dismissible3=!0,disabled:u.dismissible1&&u.dismissible2&&u.dismissible3},{default:t(()=>[...d[78]||=[a(`Reset alerts`,-1)]]),_:1},8,[`disabled`])]),_:1}),i(_,{h2:``},{default:t(()=>[...d[82]||=[a(`Sizes`,-1)]]),_:1}),i(y,{"content-class":`py0`},{pug:t(()=>[...d[88]||=[a(`w-alert(info xs) This is an extra small alert.
w-alert(info sm) This is a small alert.
w-alert(info md) This is a medium alert.
w-alert(info lg) This is a large alert.
w-alert(info xl) This is an extra large alert.`,-1)]]),html:t(()=>[...d[89]||=[a(`<w-alert info xs>This is an extra small alert.</w-alert>
<w-alert info sm>This is a small alert.</w-alert>
<w-alert info md>This is a medium alert.</w-alert>
<w-alert info lg>This is a large alert.</w-alert>
<w-alert info xl>This is an extra large alert.</w-alert>
`,-1)]]),default:t(()=>[i(v,{info:``,xs:``},{default:t(()=>[...d[83]||=[a(`This is an extra small alert.`,-1)]]),_:1}),i(v,{info:``,sm:``},{default:t(()=>[...d[84]||=[a(`This is a small alert.`,-1)]]),_:1}),i(v,{info:``,md:``},{default:t(()=>[...d[85]||=[a(`This is a medium alert.`,-1)]]),_:1}),i(v,{info:``,lg:``},{default:t(()=>[...d[86]||=[a(`This is a large alert.`,-1)]]),_:1}),i(v,{info:``,xl:``},{default:t(()=>[...d[87]||=[a(`This is an extra large alert.`,-1)]]),_:1})]),_:1}),d[100]||=n(`p`,null,`With some multiline content.`,-1),i(v,{info:``,xs:``},{default:t(()=>[...d[90]||=[a(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1}),i(v,{info:``,sm:``},{default:t(()=>[...d[91]||=[a(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1}),i(v,{info:``,md:``},{default:t(()=>[...d[92]||=[a(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1}),i(v,{info:``,lg:``},{default:t(()=>[...d[93]||=[a(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1}),i(v,{info:``,xl:``},{default:t(()=>[...d[94]||=[a(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1})])}var m=u({data:()=>({showAlert:!1,dismissible1:!0,dismissible2:!0,dismissible3:!0})},[[`render`,p]]);function h(s,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the alert. Any truthy value will show the alert whereas any falsy value will hide it.`,color:'Applies a color to the alert\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.<br>The default color is `primary`, if no <code>bg-color</code> and no type (<code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) is provided.',bgColor:`Applies a color to the alert's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the alert container.`,tile:`Removes the default border-radius and sets sharp edges on the alert container.`,round:`Sets a maximum border-radius on the corners of the alert container, giving it a round look.`,icon:`Provide a custom icon string (e.g. <code>mdi mdi-star</code>) to display on the left of the alert message.`,iconOutside:`If an icon is provided, this option changes the style and displays the icon on the left border.`,plain:`Emphasizes a "typed" alert (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.`,dismiss:`Adds a close button (cross icon) on the right in the alert. Clicking on this button hides the alert.`,success:`Sets the type of the alert, applying the <code>success</code> class (green color) and adding a success icon on the left in the alert.`,info:`Sets the type of the alert, applying the <code>info</code> class (blue color) and adding an info icon on the left in the alert.`,warning:`Sets the type of the alert, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the alert.`,error:`Sets the type of the alert, applying the <code>error</code> class (red color) and adding an error icon on the left in the alert.`,xs:`Sets the size of the alert to extra small.`,sm:`Sets the size of the alert to small.`,md:`Sets the size of the alert to medium.`,lg:`Sets the size of the alert to large.`,xl:`Sets the size of the alert to extra large.`,bold:`Sets the alert text to bold. Note that you could also use the <code>.text-bold</code> class.`,border:`Adds borders all around the alert container.`,borderLeft:`Adds a left border on the alert. Only one side-border can be applied at the same time.`,borderRight:`Adds a right border on the alert. Only one side-border can be applied at the same time.`,borderTop:`Adds a top border on the alert. Only one side-border can be applied at the same time.`,borderBottom:`Adds a bottom border on the alert. Only one side-border can be applied at the same time.`,outline:`The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.`},_={default:{description:`The alert content.`}},v={input:`Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on alert dismiss/hide.`},y=u({data:()=>({propsDescs:g,slots:_}),computed:{props(){return d.props},events(){return d.emits.reduce((e,t)=>(e[t]={description:v[t]||``})&&e,{})}}},[[`render`,h]]);function b(n,s,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return o(),r(`main`,null,[i(f,null,{default:t(()=>[...s[0]||=[a(`w-alert`,-1)]]),_:1}),i(p),i(m)])}var x=u({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};