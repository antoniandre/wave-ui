import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s,l as c,u as l}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as u}from"./plugin-vue_export-helper-B80Cc4Ui.js";import{V as d}from"./index-BhRaCC4I.js";var f={style:{"max-width":`1000px`}};function p(u,d,p,m,h,g){let _=e(`title-link`),v=e(`w-alert`),y=e(`example`),b=e(`w-button`),x=e(`w-transition-expand`);return s(),i(`div`,f,[a(_,{h2:``},{default:t(()=>[...d[5]||=[o(`Basic`,-1)]]),_:1}),d[95]||=r(`p`,null,[o(`The alert is commonly used to emphasize some content.`),r(`br`),o(`
A colorful box is usually enough, but in case of status message, it could need some bold text
as well.`),r(`br`),o(`
If no color is provided, it will use the primary color by default.`)],-1),a(y,null,{pug:t(()=>[...d[8]||=[o(`w-alert This is an emphasized content in a default primary color alert box.

w-alert(bold) This is an emphasized content in a default primary color alert box using the \`bold\` prop.`,-1)]]),html:t(()=>[...d[9]||=[o(`<w-alert>
  This is an emphasized content in a default primary color alert box.
</w-alert>

<w-alert bold>
This is an emphasized content in a default primary color alert box using the \`bold\` prop.
</w-alert>`,-1)]]),default:t(()=>[a(v,null,{default:t(()=>[...d[6]||=[o(`This is an emphasized content in a default primary color alert box.`,-1)]]),_:1}),a(v,{bold:``},{default:t(()=>[...d[7]||=[o(`This is an emphasized content in a default primary color alert box using the `,-1),r(`code`,null,`bold`,-1),o(` prop.`,-1)]]),_:1}),d[10]||=r(`p`,{class:`caption mt-2`},[o(`Note: you could also use the `),r(`code`,null,`.text-bold`),o(` class instead of the `),r(`code`,null,`bold`),o(` prop.`)],-1)]),_:1}),a(_,{h2:``,slug:`show-and-hide-with-v-model`},{default:t(()=>[...d[11]||=[o(`Show / hide with v-model`,-1)]]),_:1}),d[96]||=r(`p`,null,[o(`By default alerts are visible, but if a `),r(`code`,null,`model-value`),o(` or `),r(`code`,null,`v-model`),o(` is provided,
it will show or hide according to it.`),r(`br`),o(`
Like in this example you can add a transition to animate its apparition.`)],-1),a(y,{"content-class":`pt5`},{pug:t(()=>[o(`w-button(@click="showAlert = !showAlert" outline) `+n(u.showAlert?`Hide`:`Show`)+` alert

w-transition-expand(y)
  w-alert(v-if="showAlert" color="success") The alert is now visible.`,1)]),html:t(()=>[o(`<w-button
  @click="showAlert = !showAlert"
  outline>
  `+n(u.showAlert?`Hide`:`Show`)+` alert
</w-button>

<w-transition-expand y>
  <w-alert v-if="showAlert" color="success">
    The alert is now visible.
  </w-alert>
</w-transition-expand>`,1)]),js:t(()=>[...d[13]||=[o(`data: () => ({
  showAlert: false
})
`,-1)]]),default:t(()=>[a(b,{onClick:d[0]||=e=>u.showAlert=!u.showAlert,outline:``},{default:t(()=>[o(n(u.showAlert?`Hide`:`Show`)+` alert`,1)]),_:1}),a(x,{y:``},{default:t(()=>[u.showAlert?(s(),c(v,{key:0,color:`success`},{default:t(()=>[...d[12]||=[o(`The alert is now visible.`,-1)]]),_:1})):l(``,!0)]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...d[14]||=[o(`Colors`,-1)]]),_:1}),d[97]||=r(`p`,null,[o(`Like in most components, you can apply a color to the text with the `),r(`code`,null,`color`),o(` attribute,
and a color to the background with the `),r(`code`,null,`bg-color`),o(` attribute.`)],-1),a(y,{"content-class":`py0`},{pug:t(()=>[...d[20]||=[o(`w-alert(bg-color="primary") This is an alert with a primary background color.
w-alert(bg-color="secondary") This is an alert with a secondary background color.
w-alert(color="teal") This is an alert with a teal color.

p You can mix different colors and background colors.
w-alert(bg-color="teal" color="white") This is an alert with a teal background and white color.
w-alert(bg-color="yellow-light6" color="brown") This is an alert with a yellow background and brown color.`,-1)]]),html:t(()=>[...d[21]||=[o(`<w-alert bg-color="primary">
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
`,-1)]]),default:t(()=>[a(v,{"bg-color":`primary`},{default:t(()=>[...d[15]||=[o(`This is an alert with a primary background color.`,-1)]]),_:1}),a(v,{"bg-color":`secondary`},{default:t(()=>[...d[16]||=[o(`This is an alert with a secondary background color.`,-1)]]),_:1}),a(v,{color:`teal`},{default:t(()=>[...d[17]||=[o(`This is an alert with a teal color.`,-1)]]),_:1}),d[22]||=r(`p`,null,`You can mix different colors and background colors.`,-1),a(v,{"bg-color":`teal`,color:`white`},{default:t(()=>[...d[18]||=[o(`This is an alert with a teal background and white color.`,-1)]]),_:1}),a(v,{"bg-color":`yellow-light6`,color:`brown`},{default:t(()=>[...d[19]||=[o(`This is an alert with a yellow background and brown color.`,-1)]]),_:1})]),_:1}),a(_,{h2:``,slug:`types`},{default:t(()=>[...d[23]||=[o(`Types (adds an icon)`,-1)]]),_:1}),d[98]||=r(`h3`,null,`Normal`,-1),a(y,{"content-class":`py0`},{pug:t(()=>[...d[28]||=[o(`w-alert(success) This is a success alert.
w-alert(warning) This is a warning alert.
w-alert(error) This is an error alert.
w-alert(info) This is an info alert.`,-1)]]),html:t(()=>[...d[29]||=[o(`<w-alert success>This is a success alert.</w-alert>
<w-alert warning>This is a warning alert.</w-alert>
<w-alert error>This is an error alert.</w-alert>
<w-alert info>This is an info alert.</w-alert>
`,-1)]]),default:t(()=>[a(v,{success:``},{default:t(()=>[...d[24]||=[o(`This is a success alert.`,-1)]]),_:1}),a(v,{warning:``},{default:t(()=>[...d[25]||=[o(`This is a warning alert.`,-1)]]),_:1}),a(v,{error:``},{default:t(()=>[...d[26]||=[o(`This is an error alert.`,-1)]]),_:1}),a(v,{info:``},{default:t(()=>[...d[27]||=[o(`This is an info alert.`,-1)]]),_:1})]),_:1}),d[99]||=r(`h3`,null,`Plain`,-1),a(y,{"content-class":`py0`},{pug:t(()=>[...d[34]||=[o(`w-alert(success plain) This is a success alert.
w-alert(warning plain) This is a warning alert.
w-alert(error plain) This is an error alert.
w-alert(info plain) This is an info alert.`,-1)]]),html:t(()=>[...d[35]||=[o(`<w-alert success plain>This is a success alert.</w-alert>
<w-alert warning plain>This is a warning alert.</w-alert>
<w-alert error plain>This is an error alert.</w-alert>
<w-alert info plain>This is an info alert.</w-alert>
`,-1)]]),default:t(()=>[a(v,{success:``,plain:``},{default:t(()=>[...d[30]||=[o(`This is a success alert.`,-1)]]),_:1}),a(v,{warning:``,plain:``},{default:t(()=>[...d[31]||=[o(`This is a warning alert.`,-1)]]),_:1}),a(v,{error:``,plain:``},{default:t(()=>[...d[32]||=[o(`This is an error alert.`,-1)]]),_:1}),a(v,{info:``,plain:``},{default:t(()=>[...d[33]||=[o(`This is an info alert.`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...d[36]||=[o(`Custom icon`,-1)]]),_:1}),a(y,{"content-class":`py0`},{pug:t(()=>[...d[38]||=[o(`w-alert(bg-color="yellow-light6" color="amber" icon="wi-star") This is an alert with a custom icon.`,-1)]]),html:t(()=>[...d[39]||=[o(`<w-alert
  bg-color="yellow-light6"
  color="amber"
  icon="wi-star">
  This is an alert with a custom icon.
</w-alert>
`,-1)]]),default:t(()=>[a(v,{"bg-color":`yellow-light6`,color:`amber`,icon:`wi-star`},{default:t(()=>[...d[37]||=[o(`This is an alert with a custom icon.`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...d[40]||=[o(`Icon outside`,-1)]]),_:1}),a(y,{"content-class":`py0`},{pug:t(()=>[...d[46]||=[o(`w-alert(success icon-outside) This is a success alert.
w-alert(warning icon-outside) This is a warning alert.
w-alert(error icon-outside) This is an error alert.
w-alert(info icon-outside) This is an info alert.
w-alert(bg-color="yellow-light6" color="amber" icon="mdi mdi-star-circle" icon-outside)
  | This is an alert with a custom icon.`,-1)]]),html:t(()=>[...d[47]||=[o(`<w-alert success icon-outside>This is a success alert.</w-alert>
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
`,-1)]]),default:t(()=>[a(v,{success:``,"icon-outside":``},{default:t(()=>[...d[41]||=[o(`This is a success alert.`,-1)]]),_:1}),a(v,{warning:``,"icon-outside":``},{default:t(()=>[...d[42]||=[o(`This is a warning alert.`,-1)]]),_:1}),a(v,{error:``,"icon-outside":``},{default:t(()=>[...d[43]||=[o(`This is an error alert.`,-1)]]),_:1}),a(v,{info:``,"icon-outside":``},{default:t(()=>[...d[44]||=[o(`This is an info alert.`,-1)]]),_:1}),a(v,{"bg-color":`yellow-light6`,color:`amber`,icon:`mdi mdi-star-circle`,"icon-outside":``},{default:t(()=>[...d[45]||=[o(`This is an alert with a custom icon.`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...d[48]||=[o(`Outline`,-1)]]),_:1}),a(y,{"content-class":`py0`},{pug:t(()=>[...d[54]||=[o(`w-alert(outline) This is a normal alert with a primary color.
w-alert(success outline) This is a success alert.
w-alert(warning outline) This is a warning alert.
w-alert(error outline) This is an error alert.
w-alert(info outline) This is an info alert.`,-1)]]),html:t(()=>[...d[55]||=[o(`<w-alert outline>This is a normal alert with a primary color.</w-alert>
<w-alert success outline>This is a success alert.</w-alert>
<w-alert warning outline>This is a warning alert.</w-alert>
<w-alert error outline>This is an error alert.</w-alert>
<w-alert info outline>This is an info alert.</w-alert>
`,-1)]]),default:t(()=>[a(v,{outline:``},{default:t(()=>[...d[49]||=[o(`This is a normal alert with a primary color.`,-1)]]),_:1}),a(v,{success:``,outline:``},{default:t(()=>[...d[50]||=[o(`This is a success alert.`,-1)]]),_:1}),a(v,{warning:``,outline:``},{default:t(()=>[...d[51]||=[o(`This is a warning alert.`,-1)]]),_:1}),a(v,{error:``,outline:``},{default:t(()=>[...d[52]||=[o(`This is an error alert.`,-1)]]),_:1}),a(v,{info:``,outline:``},{default:t(()=>[...d[53]||=[o(`This is an info alert.`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...d[56]||=[o(`Borders`,-1)]]),_:1}),a(y,{"content-class":`py0`},{pug:t(()=>[...d[66]||=[o(`w-alert This is a normal alert with no border.
w-alert(border-left) This is a normal alert with a left border.
w-alert(border-right) This is a normal alert with a right border.
w-alert(border-top) This is a normal alert with a top border.
w-alert(border-bottom) This is a normal alert with a bottom border.
w-alert(border) This is a normal alert with borders all around.
w-alert.bd2 This is a normal alert with borders using the `,-1),r(`code`,null,`.bd2`,-1),o(` helper class.
w-alert(success) This is a success alert with no border.
w-alert(success border) This is a success alert with borders all around.`,-1)]]),html:t(()=>[...d[67]||=[o(`<w-alert>This is a normal alert with no border.</w-alert>
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
  This is a normal alert with borders using the `,-1),r(`code`,null,`.bd2`,-1),o(` helper class.
</w-alert>

<w-alert success>
  This is a success alert with no border.
</w-alert>
<w-alert success border>
  This is a success alert with borders all around.
</w-alert>
`,-1)]]),default:t(()=>[a(v,null,{default:t(()=>[...d[57]||=[o(`This is a normal alert with no border.`,-1)]]),_:1}),a(v,{"border-left":``},{default:t(()=>[...d[58]||=[o(`This is a normal alert with a left border.`,-1)]]),_:1}),a(v,{"border-right":``},{default:t(()=>[...d[59]||=[o(`This is a normal alert with a right border.`,-1)]]),_:1}),a(v,{"border-top":``},{default:t(()=>[...d[60]||=[o(`This is a normal alert with a top border.`,-1)]]),_:1}),a(v,{"border-bottom":``},{default:t(()=>[...d[61]||=[o(`This is a normal alert with a bottom border.`,-1)]]),_:1}),a(v,{border:``},{default:t(()=>[...d[62]||=[o(`This is a normal alert with borders all around.`,-1)]]),_:1}),a(v,{class:`bd2`},{default:t(()=>[...d[63]||=[o(`This is a normal alert with borders using the `,-1),r(`code`,null,`.bd2`,-1),o(` helper class.`,-1)]]),_:1}),a(v,{success:``},{default:t(()=>[...d[64]||=[o(`This is a success alert with no border.`,-1)]]),_:1}),a(v,{success:``,border:``},{default:t(()=>[...d[65]||=[o(`This is a success alert with borders all around.`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...d[68]||=[o(`Tile, round & shadow`,-1)]]),_:1}),a(y,{"content-class":`py0`},{pug:t(()=>[...d[72]||=[o(`w-alert(tile) This is a tile alert.
w-alert(round) This is a round alert.
w-alert(shadow) This is a normal alert with a shadow.`,-1)]]),html:t(()=>[...d[73]||=[o(`<w-alert tile>This is a tile alert.</w-alert>
<w-alert round>This is a round alert.</w-alert>
<w-alert shadow>This is a normal alert with a shadow.</w-alert>
`,-1)]]),default:t(()=>[a(v,{tile:``},{default:t(()=>[...d[69]||=[o(`This is a tile alert.`,-1)]]),_:1}),a(v,{round:``},{default:t(()=>[...d[70]||=[o(`This is a round alert.`,-1)]]),_:1}),a(v,{shadow:``},{default:t(()=>[...d[71]||=[o(`This is a normal alert with a shadow.`,-1)]]),_:1})]),_:1}),a(_,{h2:``},{default:t(()=>[...d[74]||=[o(`Dismiss`,-1)]]),_:1}),a(y,null,{pug:t(()=>[...d[79]||=[o(`w-alert.mt0.mb2(v-model="dismissible1" dismiss) This is a dismissible alert.
w-alert.my2(v-model="dismissible2" dismiss error) This is a dismissible error type alert.
w-alert.my2(v-model="dismissible3" color="amber" dismiss round) This is a dismissible round alert.
w-button.mt2(
  @click="dismissible1 = dismissible2 = dismissible3 = true"
  :disabled="dismissible1 && dismissible2 && dismissible3") Reset alerts`,-1)]]),html:t(()=>[...d[80]||=[o(`<w-alert
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
</button>`,-1)]]),js:t(()=>[...d[81]||=[o(`data: () => ({
  dismissible1: true,
  dismissible2: true,
  dismissible3: true
})
`,-1)]]),default:t(()=>[a(v,{class:`mt0 mb2`,modelValue:u.dismissible1,"onUpdate:modelValue":d[1]||=e=>u.dismissible1=e,dismiss:``},{default:t(()=>[...d[75]||=[o(`This is a dismissible alert.`,-1)]]),_:1},8,[`modelValue`]),a(v,{class:`my2`,modelValue:u.dismissible2,"onUpdate:modelValue":d[2]||=e=>u.dismissible2=e,dismiss:``,error:``},{default:t(()=>[...d[76]||=[o(`This is a dismissible error type alert.`,-1)]]),_:1},8,[`modelValue`]),a(v,{class:`my2`,modelValue:u.dismissible3,"onUpdate:modelValue":d[3]||=e=>u.dismissible3=e,color:`amber`,dismiss:``,round:``},{default:t(()=>[...d[77]||=[o(`This is a dismissible round alert.`,-1)]]),_:1},8,[`modelValue`]),a(b,{class:`mt2`,onClick:d[4]||=e=>u.dismissible1=u.dismissible2=u.dismissible3=!0,disabled:u.dismissible1&&u.dismissible2&&u.dismissible3},{default:t(()=>[...d[78]||=[o(`Reset alerts`,-1)]]),_:1},8,[`disabled`])]),_:1}),a(_,{h2:``},{default:t(()=>[...d[82]||=[o(`Sizes`,-1)]]),_:1}),a(y,{"content-class":`py0`},{pug:t(()=>[...d[88]||=[o(`w-alert(info xs) This is an extra small alert.
w-alert(info sm) This is a small alert.
w-alert(info md) This is a medium alert.
w-alert(info lg) This is a large alert.
w-alert(info xl) This is an extra large alert.`,-1)]]),html:t(()=>[...d[89]||=[o(`<w-alert info xs>This is an extra small alert.</w-alert>
<w-alert info sm>This is a small alert.</w-alert>
<w-alert info md>This is a medium alert.</w-alert>
<w-alert info lg>This is a large alert.</w-alert>
<w-alert info xl>This is an extra large alert.</w-alert>
`,-1)]]),default:t(()=>[a(v,{info:``,xs:``},{default:t(()=>[...d[83]||=[o(`This is an extra small alert.`,-1)]]),_:1}),a(v,{info:``,sm:``},{default:t(()=>[...d[84]||=[o(`This is a small alert.`,-1)]]),_:1}),a(v,{info:``,md:``},{default:t(()=>[...d[85]||=[o(`This is a medium alert.`,-1)]]),_:1}),a(v,{info:``,lg:``},{default:t(()=>[...d[86]||=[o(`This is a large alert.`,-1)]]),_:1}),a(v,{info:``,xl:``},{default:t(()=>[...d[87]||=[o(`This is an extra large alert.`,-1)]]),_:1})]),_:1}),d[100]||=r(`p`,null,`With some multiline content.`,-1),a(v,{info:``,xs:``},{default:t(()=>[...d[90]||=[o(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1}),a(v,{info:``,sm:``},{default:t(()=>[...d[91]||=[o(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1}),a(v,{info:``,md:``},{default:t(()=>[...d[92]||=[o(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1}),a(v,{info:``,lg:``},{default:t(()=>[...d[93]||=[o(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1}),a(v,{info:``,xl:``},{default:t(()=>[...d[94]||=[o(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit ipsam perferendis, alias, expedita ipsum delectus quae aliquam vel explicabo incidunt labore a cumque voluptates dicta aspernatur eum reiciendis nobis.`,-1)]]),_:1})])}var m=u({data:()=>({showAlert:!1,dismissible1:!0,dismissible2:!0,dismissible3:!0})},[[`render`,p]]);function h(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the alert. Any truthy value will show the alert whereas any falsy value will hide it.`,color:'Applies a color to the alert\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.<br>The default color is `primary`, if no <code>bg-color</code> and no type (<code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) is provided.',bgColor:`Applies a color to the alert's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the alert container.`,tile:`Removes the default border-radius and sets sharp edges on the alert container.`,round:`Sets a maximum border-radius on the corners of the alert container, giving it a round look.`,icon:`Provide a custom icon string (e.g. <code>mdi mdi-star</code>) to display on the left of the alert message.`,iconOutside:`If an icon is provided, this option changes the style and displays the icon on the left border.`,plain:`Emphasizes a "typed" alert (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.`,dismiss:`Adds a close button (cross icon) on the right in the alert. Clicking on this button hides the alert.`,success:`Sets the type of the alert, applying the <code>success</code> class (green color) and adding a success icon on the left in the alert.`,info:`Sets the type of the alert, applying the <code>info</code> class (blue color) and adding an info icon on the left in the alert.`,warning:`Sets the type of the alert, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the alert.`,error:`Sets the type of the alert, applying the <code>error</code> class (red color) and adding an error icon on the left in the alert.`,xs:`Sets the size of the alert to extra small.`,sm:`Sets the size of the alert to small.`,md:`Sets the size of the alert to medium.`,lg:`Sets the size of the alert to large.`,xl:`Sets the size of the alert to extra large.`,bold:`Sets the alert text to bold. Note that you could also use the <code>.text-bold</code> class.`,border:`Adds borders all around the alert container.`,borderLeft:`Adds a left border on the alert. Only one side-border can be applied at the same time.`,borderRight:`Adds a right border on the alert. Only one side-border can be applied at the same time.`,borderTop:`Adds a top border on the alert. Only one side-border can be applied at the same time.`,borderBottom:`Adds a bottom border on the alert. Only one side-border can be applied at the same time.`,outline:`The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.`},_={default:{description:`The alert content.`}},v={input:`Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on alert dismiss/hide.`},y=u({data:()=>({propsDescs:g,slots:_}),computed:{props(){return d.props},events(){return d.emits.reduce((e,t)=>(e[t]={description:v[t]||``})&&e,{})}}},[[`render`,h]]);function b(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-alert`,-1)]]),_:1}),a(p),a(m)])}var x=u({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};
