import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{v as l}from"./index-DH7838aH.js";function u(c,l,u,d,f,p){let m=e(`title-link`),h=e(`w-progress`),g=e(`example`),_=e(`w-tabs`);return s(),i(`div`,null,[a(m,{class:`title1`,h2:``},{default:t(()=>[...l[5]||=[o(`Circular progress & linear progress`,-1)]]),_:1}),l[69]||=r(`p`,{class:`my4`},`First choose your progress style:`,-1),a(_,{items:[{title:`Circular`},{title:`Linear`}],card:``,"content-class":`pl6`},{"item-content.1":t(()=>[a(m,{h2:``},{default:t(()=>[...l[6]||=[o(`Default indeterminate progress & colors`,-1)]]),_:1}),l[29]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the text and a `),r(`code`,null,`bg-color`),o(` for the
background.`),r(`br`),o(`
By default, the progress foreground color is `),r(`code`,null,`primary`),o(`.`)],-1),a(g,{reactive:``},{pug:t(()=>[...l[7]||=[o(`w-progress.ma1(circle)
w-progress.ma1(circle color="blue")
w-progress.ma1(circle color="green")

.title3.my6 Mixing colors
w-progress.ma1(circle color="yellow" bg-color="cyan")`,-1)]]),html:t(()=>[...l[8]||=[o(`<w-progress class="ma1" circle></w-progress>
<w-progress class="ma1" circle color="blue"></w-progress>
<w-progress class="ma1" circle color="green"></w-progress>

<div class="title3 my6">Mixing colors</div>
<w-progress
  class="ma1"
  circle
  color="yellow"
  bg-color="cyan">
</w-progress>
`,-1)]]),default:t(()=>[a(h,{class:`ma1`,circle:``}),a(h,{class:`ma1`,circle:``,color:`blue`}),a(h,{class:`ma1`,circle:``,color:`green`}),l[9]||=r(`h3`,null,`Mixing colors`,-1),a(h,{class:`ma1`,circle:``,color:`yellow`,"bg-color":`cyan`})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[10]||=[o(`Progress value`,-1)]]),_:1}),l[30]||=r(`p`,null,`The value can be given as a number or a string.`,-1),l[31]||=r(`p`,null,[o(`When the value is `),r(`code`,null,`undefined`),o(`, `),r(`code`,null,`-1`),o(` or not provided at all, it will be assumed
indeterminate.`)],-1),a(g,{reactive:``},{pug:t(()=>[...l[11]||=[o(`w-progress.ma1(circle :model-value="undefined")
w-progress.ma1.mr8(circle :model-value="-1")

w-progress.ma1(circle model-value="0")
w-progress.ma1(circle model-value="12.5")
w-progress.ma1(circle model-value="25")
w-progress.ma1(circle model-value="50")
w-progress.ma1(circle model-value="75")
w-progress.ma1(circle model-value="100")`,-1)]]),html:t(()=>[...l[12]||=[o(`<w-progress class="ma1" circle :model-value="undefined"></w-progress>
<w-progress class="ma1 mr8" circle :model-value="-1"></w-progress>

<w-progress class="ma1" circle model-value="0"></w-progress>
<w-progress class="ma1" circle model-value="12.5"></w-progress>
<w-progress class="ma1" circle model-value="25"></w-progress>
<w-progress class="ma1" circle model-value="50"></w-progress>
<w-progress class="ma1" circle model-value="75"></w-progress>
<w-progress class="ma1" circle model-value="100"></w-progress>
`,-1)]]),default:t(()=>[a(h,{class:`ma1`,circle:``,"model-value":void 0}),a(h,{class:`ma1 mr8`,circle:``,"model-value":-1}),a(h,{class:`ma1`,circle:``,"model-value":`0`}),a(h,{class:`ma1`,circle:``,"model-value":`12.5`}),a(h,{class:`ma1`,circle:``,"model-value":`25`}),a(h,{class:`ma1`,circle:``,"model-value":`50`}),a(h,{class:`ma1`,circle:``,"model-value":`75`}),a(h,{class:`ma1`,circle:``,"model-value":`100`})]),_:1}),l[32]||=r(`h3`,null,`Updated value example`,-1),a(g,{reactive:``},{pug:t(()=>[...l[13]||=[o(`w-progress(circle :model-value="progress")`,-1)]]),html:t(()=>[...l[14]||=[o(`<w-progress circle :model-value="progress"></w-progress>`,-1)]]),js:t(()=>[...l[15]||=[o(`data: () => ({
  progress: 0
}),

mounted () {
  // Emulating progress.
  setInterval(() => {
    this.progress += 10
    if (this.progress === 100) this.progress = 0
  }, 700)
}
`,-1)]]),default:t(()=>[a(h,{circle:``,"model-value":c.progress},null,8,[`model-value`])]),_:1}),a(m,{h2:``},{default:t(()=>[...l[16]||=[o(`Size & stroke thickness`,-1)]]),_:1}),a(g,{reactive:``},{pug:t(()=>[...l[17]||=[o(`w-progress.ma1(circle model-value="38" color="blue")
w-progress.ma1(circle model-value="38" size="4em" color="blue")
w-progress.ma1.mr8(circle model-value="38" size="5em" color="blue")

w-progress.ma1(circle model-value="38" size="6em" :stroke="2" color="blue")
w-progress.ma1(circle model-value="38" size="6em" :stroke="15" color="blue")
w-progress.ma1(circle model-value="38" size="6em" :stroke="40" color="blue")`,-1)]]),html:t(()=>[...l[18]||=[o(`<w-progress
  class="ma1"
  circle
  model-value="38"
  color="blue">
</w-progress>

<w-progress
  class="ma1"
  circle
  model-value="38"
  size="4em"
  color="blue">
</w-progress>

<w-progress
  class="ma1 mr8"
  circle
  model-value="38"
  size="5em"
  color="blue">
</w-progress>

<w-progress
  class="ma1"
  circle
  model-value="38"
  size="6em"
  :stroke="2"
  color="blue">
</w-progress>

<w-progress
  class="ma1"
  circle
  model-value="38"
  size="6em"
  :stroke="15"
  color="blue">
</w-progress>

<w-progress
  class="ma1"
  circle
  model-value="38"
  size="6em"
  :stroke="40"
  color="blue">
</w-progress>
`,-1)]]),default:t(()=>[a(h,{class:`ma1`,circle:``,"model-value":`38`,color:`blue`}),a(h,{class:`ma1`,circle:``,"model-value":`38`,size:`4em`,color:`blue`}),a(h,{class:`ma1 mr8`,circle:``,"model-value":`38`,size:`5em`,color:`blue`}),a(h,{class:`ma1`,circle:``,"model-value":`38`,size:`6em`,stroke:2,color:`blue`}),a(h,{class:`ma1`,circle:``,"model-value":`38`,size:`6em`,stroke:15,color:`blue`}),a(h,{class:`ma1`,circle:``,"model-value":`38`,size:`6em`,stroke:40,color:`blue`})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[19]||=[o(`Progress value with label`,-1)]]),_:1}),l[33]||=r(`p`,null,[o(`The default label displays the rounded value without the `),r(`code`,null,`%`),o(` sign, so it fits in smaller circles.`)],-1),l[34]||=r(`p`,null,`You can customize the label to display the value as you wish.`,-1),a(g,{reactive:``},{pug:t(()=>[...l[20]||=[o(`p Default label - Custom label

w-progress.ma1.mr8(circle v-model="progress" size="5em" label)

w-progress.ma1(circle v-model="progress" size="5em")
  strong `+n(`{{ progress }}`)+`%`,-1)]]),html:t(()=>[...l[21]||=[o(`<p>Default label - Custom label</p>

<w-progress
  class="ma1 mr8"
  circle
  v-model="progress"
  size="5em"
  label>
</w-progress>

<w-progress
  class="ma1"
  circle
  v-model="progress"
  size="5em">
  <strong>`+n(`{{ progress }}`)+`%</strong>
</w-progress>`,-1)]]),js:t(()=>[...l[22]||=[o(`data: () => ({
  progress: 37.86
})
`,-1)]]),default:t(()=>[l[23]||=r(`p`,null,`Default label \xA0 - \xA0 Custom label`,-1),a(h,{class:`ma1 mr8`,circle:``,modelValue:c.progress1,"onUpdate:modelValue":l[0]||=e=>c.progress1=e,size:`5em`,label:``},null,8,[`modelValue`]),a(h,{class:`ma1`,circle:``,modelValue:c.progress1,"onUpdate:modelValue":l[1]||=e=>c.progress1=e,size:`5em`},{default:t(()=>[r(`strong`,null,n(c.progress1)+`%`,1)]),_:1},8,[`modelValue`])]),_:1}),l[35]||=r(`h3`,null,`Providing a color for the custom label`,-1),a(g,{reactive:``},{pug:t(()=>[...l[24]||=[o(`w-progress.ma1(
  circle
  model-value="38"
  size="3em"
  label
  label-color="indigo-light4")`,-1)]]),html:t(()=>[...l[25]||=[o(`<w-progress
  class="ma1"
  circle
  model-value="38"
  size="3em"
  label
  label-color="indigo-light4">
</w-progress>
`,-1)]]),default:t(()=>[a(h,{class:`ma1`,circle:``,"model-value":`38`,size:`3em`,label:``,"label-color":`indigo-light4`})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[26]||=[o(`Round linecap & default flat line cap`,-1)]]),_:1}),a(g,{reactive:``},{pug:t(()=>[...l[27]||=[o(`w-progress.ma1(circle model-value="38" size="6em" round-cap)
w-progress.ma1(circle model-value="38" size="6em")`,-1)]]),html:t(()=>[...l[28]||=[o(`<w-progress
  class="ma1"
  circle
  model-value="38"
  size="6em"
  round-cap>
</w-progress>

<w-progress
  class="ma1"
  circle
  model-value="38"
  size="6em">
</w-progress>
`,-1)]]),default:t(()=>[a(h,{class:`ma1`,circle:``,"model-value":`38`,size:`6em`,"round-cap":``}),a(h,{class:`ma1`,circle:``,"model-value":`38`,size:`6em`})]),_:1})]),"item-content.2":t(()=>[a(m,{h2:``},{default:t(()=>[...l[36]||=[o(`Default indeterminate progress & colors`,-1)]]),_:1}),l[64]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the text and a `),r(`code`,null,`bg-color`),o(` for the
background.`)],-1),a(g,{reactive:``},{pug:t(()=>[...l[37]||=[o(`w-progress
w-progress.mt4(color="blue")
w-progress.mt4(color="green")
.title3.my6 Mixing colors
w-progress.mt4(color="yellow" bg-color="cyan")`,-1)]]),html:t(()=>[...l[38]||=[o(`<w-progress></w-progress>
<w-progress class="mt4" color="blue"></w-progress>
<w-progress class="mt4" color="green"></w-progress>
<div class="title3 my6">Mixing colors</div>
<w-progress class="mt4" color="yellow" bg-color="cyan"></w-progress>
`,-1)]]),default:t(()=>[a(h),a(h,{class:`mt4`,color:`blue`}),a(h,{class:`mt4`,color:`green`}),l[39]||=r(`h3`,null,`Mixing colors`,-1),a(h,{class:`mt4`,color:`yellow`,"bg-color":`cyan`})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[40]||=[o(`Size`,-1)]]),_:1}),a(g,{reactive:``},{pug:t(()=>[...l[41]||=[o(`w-progress(model-value="38" size="1em" color="blue")
w-progress.mt4(model-value="38" size="2.5em" color="blue")`,-1)]]),html:t(()=>[...l[42]||=[o(`<w-progress model-value="38" size="1em" color="blue"></w-progress>
<w-progress class="mt4" model-value="38" size="2.5em" color="blue"></w-progress>
`,-1)]]),default:t(()=>[a(h,{"model-value":`38`,size:`1em`,color:`blue`}),a(h,{class:`mt4`,"model-value":`38`,size:`2.5em`,color:`blue`})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[43]||=[o(`Tile & round`,-1)]]),_:1}),a(g,{reactive:``},{pug:t(()=>[...l[44]||=[o(`w-progress(model-value="38" size="1.4em" tile color="light-blue")
w-progress.mt4(model-value="38" size="1.4em" round color="light-blue")`,-1)]]),html:t(()=>[...l[45]||=[o(`<w-progress
  model-value="38"
  size="1.4em"
  tile
  color="light-blue">
</w-progress>

<w-progress
  class="mt4"
  model-value="38"
  size="1.4em"
  round
  color="light-blue">
</w-progress>
`,-1)]]),default:t(()=>[a(h,{"model-value":`38`,size:`1.4em`,tile:``,color:`light-blue`}),a(h,{class:`mt4`,"model-value":`38`,size:`1.4em`,round:``,color:`light-blue`})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[46]||=[o(`Outline & shadow`,-1)]]),_:1}),a(g,{reactive:``},{pug:t(()=>[...l[47]||=[o(`w-progress(
  model-value="38"
  size="1em"
  outline
  round
  color="light-blue")

w-progress.mt4(
  model-value="38"
  size="1em"
  shadow
  color="light-blue")`,-1)]]),html:t(()=>[...l[48]||=[o(`<w-progress
  model-value="38"
  size="1em"
  outline
  round
  color="light-blue">
</w-progress>

<w-progress
  class="mt4"
  model-value="38"
  size="1em"
  shadow
  color="light-blue">
</w-progress>
`,-1)]]),default:t(()=>[a(h,{"model-value":`38`,size:`1em`,outline:``,round:``,color:`light-blue`}),a(h,{class:`mt4`,"model-value":`38`,size:`1em`,shadow:``,color:`light-blue`})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[49]||=[o(`Stripes (only if determinate)`,-1)]]),_:1}),a(g,{reactive:``},{pug:t(()=>[...l[50]||=[o(`w-progress(
  model-value="38"
  size="1em"
  outline
  round
  color="light-blue"
  stripes)

w-progress.mt4(
  model-value="38"
  size="1.4em"
  outline
  round
  color="primary"
  stripes)`,-1)]]),html:t(()=>[...l[51]||=[o(`<w-progress
  model-value="38"
  size="1em"
  outline
  round
  color="light-blue"
  stripes>
</w-progress>

<w-progress
  class="mt4"
  model-value="38"
  size="1.4em"
  outline
  round
  color="primary"
  stripes>
</w-progress>
`,-1)]]),default:t(()=>[a(h,{"model-value":`38`,size:`1em`,outline:``,round:``,color:`light-blue`,stripes:``}),a(h,{class:`mt4`,"model-value":`38`,size:`1.4em`,outline:``,round:``,color:`primary`,stripes:``})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[52]||=[o(`Progress value with label`,-1)]]),_:1}),l[65]||=r(`h3`,null,`Default label`,-1),a(g,{reactive:``},{pug:t(()=>[...l[53]||=[o(`w-progress(v-model="progress" size="1.3em" round color="primary" label)
w-progress.mt4(v-model="progress" size="1.3em" outline round label)`,-1)]]),html:t(()=>[...l[54]||=[o(`<w-progress
  v-model="progress"
  size="1.3em"
  round
  color="primary"
  label>
</w-progress>

<w-progress
  class="mt4"
  v-model="progress"
  size="1.3em"
  outline
  round
  label>
</w-progress>`,-1)]]),js:t(()=>[...l[55]||=[o(`data: () => ({
  progress: 37.86
})
`,-1)]]),default:t(()=>[a(h,{modelValue:c.progress1,"onUpdate:modelValue":l[2]||=e=>c.progress1=e,size:`1.3em`,round:``,color:`primary`,label:``},null,8,[`modelValue`]),a(h,{class:`mt4`,modelValue:c.progress1,"onUpdate:modelValue":l[3]||=e=>c.progress1=e,size:`1.3em`,outline:``,round:``,label:``},null,8,[`modelValue`])]),_:1}),l[66]||=r(`h3`,null,`Custom label`,-1),a(g,{reactive:``},{pug:t(()=>[...l[56]||=[o(`w-progress(v-model="progress" size="1.5em" outline round)
  strong `+n(`{{ progress }}`)+`%`,-1)]]),html:t(()=>[...l[57]||=[o(`<w-progress v-model="progress" size="1.5em" outline round>
  <strong>`+n(`{{ progress }}`)+`%</strong>
</w-progress>`,-1)]]),js:t(()=>[...l[58]||=[o(`data: () => ({
  progress: 37.86
})
`,-1)]]),default:t(()=>[a(h,{class:`mt3`,modelValue:c.progress1,"onUpdate:modelValue":l[4]||=e=>c.progress1=e,size:`1.5em`,outline:``,round:``},{default:t(()=>[r(`strong`,null,n(c.progress1)+`%`,1)]),_:1},8,[`modelValue`])]),_:1}),l[67]||=r(`h3`,null,`Providing a color for the custom label`,-1),l[68]||=r(`p`,null,[o(`The color of the label should be readable on both the progress and the background.`),r(`br`),o(`
So you are free to decide what is the best color.`)],-1),a(g,{reactive:``},{pug:t(()=>[...l[59]||=[o(`w-progress(
  model-value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4")`,-1)]]),html:t(()=>[...l[60]||=[o(`<w-progress
  model-value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4">
</w-progress>
`,-1)]]),default:t(()=>[a(h,{class:`mt2`,"model-value":`50.3`,size:`2em`,outline:``,round:``,label:``,"label-color":`indigo-light4`})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[61]||=[o(`Round linecap & default flat line cap`,-1)]]),_:1}),a(g,{reactive:``},{pug:t(()=>[...l[62]||=[o(`w-progress(model-value="38" size="2em" round round-cap)
w-progress.mt4(model-value="38" size="2em" round)`,-1)]]),html:t(()=>[...l[63]||=[o(`<w-progress
  model-value="38"
  size="2em"
  round
  round-cap>
</w-progress>

<w-progress
  model-value="38"
  size="2em"
  class="mt4"
  round>
</w-progress>`,-1)]]),default:t(()=>[a(h,{"model-value":`38`,size:`2em`,round:``,"round-cap":``}),a(h,{class:`mt4`,"model-value":`38`,size:`2em`,round:``})]),_:1})]),_:1})])}var d=c({data:()=>({progress1:37.86,progress:0,linearOrCircular:[{label:`Linear`,value:!1},{label:`Circular`,value:!0}],circular:!0,intervalId:null}),mounted(){this.intervalId=setInterval(()=>{this.progress+=10,this.progress===100&&(this.progress=0)},700)},beforeUnmount(){clearInterval(this.intervalId)}},[[`render`,u],[`__scopeId`,`data-v-421017b5`]]);function f(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var p={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Accepts a percentage value (ranging from 0 to 100) as a number or a string.<br>If the value is <code>undefined</code>, <code>-1</code> or not provided at all, it will be assumed indeterminate.`,label:`Shows or hides the label of the progress containing the current progress value.`,roundCap:`Applies a round line-cap to the progress.`,color:`Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the progress' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a color to the progress label's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:`Sets the size of the progress element: the width if circular, or the height if linear.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,circle:`Sets the progress style to circle.`,stroke:`Only applies to a circular progress.<br>Sets the thickness of the circular progress.`,shadow:`Only applies to a linear progress.<br>Applies a drop shadow to the progress bar.`,tile:`Only applies to a linear progress.<br>Removes the default border-radius and sets sharp edges on the progress bar.`,round:`Only applies to a linear progress.<br>Sets a maximum border-radius on the corners of the progress, giving it a round look.`,outline:`Only applies to a linear progress.<br>When using the linear progress, the outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the progress, border and label and no background color is set.`,stripes:`Only applies to a linear progress.<br>Applies an animated stripes background on the progress bar.`,absolute:`Sets the CSS position of the progress element to <code>absolute</code>.`,fixed:`Sets the CSS position of the progress element to <code>fixed</code>.`,top:`Places the progress element at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.`,bottom:`Places the progress element at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.`,zIndex:`Applies a z-index (positive or negative integer) to the progress element.`},m={default:{description:`Provide a custom progress label.`}},h={},g=c({data:()=>({propsDescs:p,slots:m}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:h[t]||``})&&e,{})}}},[[`render`,f]]);function _(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,null,{default:t(()=>[...r[0]||=[o(`w-progress`,-1)]]),_:1}),a(p),a(m)])}var v=c({components:{Examples:d,Api:g}},[[`render`,_]]);export{v as default};