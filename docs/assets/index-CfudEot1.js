import{r as m,o as g,g as c,a as l,w as o,b as r,d as n,t as p,_ as w,Y as z}from"./index-Bpc6IslX.js";function h(t,e,v,b,f,d){const i=m("title-link"),s=m("w-progress"),a=m("example"),y=m("w-tabs");return g(),c("div",null,[l(i,{class:"title1",h2:""},{default:o(()=>e[5]||(e[5]=[r("Circular progress & linear progress")])),_:1}),e[69]||(e[69]=n("p",{class:"my4"},"First choose your progress style:",-1)),l(y,{items:[{title:"Circular"},{title:"Linear"}],card:"","content-class":"pl6"},{"item-content.1":o(()=>[l(i,{h2:""},{default:o(()=>e[6]||(e[6]=[r("Default indeterminate progress & colors")])),_:1}),e[29]||(e[29]=n("p",null,[r("Like in most components, you can set a "),n("code",null,"color"),r(" for the text and a "),n("code",null,"bg-color"),r(` for the
background.`),n("br"),r(`
By default, the progress foreground color is `),n("code",null,"primary"),r(".")],-1)),l(a,{reactive:""},{pug:o(()=>e[7]||(e[7]=[r(`w-progress.ma1(circle)
w-progress.ma1(circle color="blue")
w-progress.ma1(circle color="green")

.title3.my6 Mixing colors
w-progress.ma1(circle color="yellow" bg-color="cyan")`)])),html:o(()=>e[8]||(e[8]=[r(`<w-progress class="ma1" circle></w-progress>
<w-progress class="ma1" circle color="blue"></w-progress>
<w-progress class="ma1" circle color="green"></w-progress>

<div class="title3 my6">Mixing colors</div>
<w-progress
  class="ma1"
  circle
  color="yellow"
  bg-color="cyan">
</w-progress>
`)])),default:o(()=>[l(s,{class:"ma1",circle:""}),l(s,{class:"ma1",circle:"",color:"blue"}),l(s,{class:"ma1",circle:"",color:"green"}),e[9]||(e[9]=n("h3",null,"Mixing colors",-1)),l(s,{class:"ma1",circle:"",color:"yellow","bg-color":"cyan"})]),_:1}),l(i,{h2:""},{default:o(()=>e[10]||(e[10]=[r("Progress value")])),_:1}),e[30]||(e[30]=n("p",null,"The value can be given as a number or a string.",-1)),e[31]||(e[31]=n("p",null,[r("When the value is "),n("code",null,"undefined"),r(", "),n("code",null,"-1"),r(` or not provided at all, it will be assumed
indeterminate.`)],-1)),l(a,{reactive:""},{pug:o(()=>e[11]||(e[11]=[r(`w-progress.ma1(circle :model-value="undefined")
w-progress.ma1.mr8(circle :model-value="-1")

w-progress.ma1(circle model-value="0")
w-progress.ma1(circle model-value="12.5")
w-progress.ma1(circle model-value="25")
w-progress.ma1(circle model-value="50")
w-progress.ma1(circle model-value="75")
w-progress.ma1(circle model-value="100")`)])),html:o(()=>e[12]||(e[12]=[r(`<w-progress class="ma1" circle :model-value="undefined"></w-progress>
<w-progress class="ma1 mr8" circle :model-value="-1"></w-progress>

<w-progress class="ma1" circle model-value="0"></w-progress>
<w-progress class="ma1" circle model-value="12.5"></w-progress>
<w-progress class="ma1" circle model-value="25"></w-progress>
<w-progress class="ma1" circle model-value="50"></w-progress>
<w-progress class="ma1" circle model-value="75"></w-progress>
<w-progress class="ma1" circle model-value="100"></w-progress>
`)])),default:o(()=>[l(s,{class:"ma1",circle:"","model-value":void 0}),l(s,{class:"ma1 mr8",circle:"","model-value":-1}),l(s,{class:"ma1",circle:"","model-value":"0"}),l(s,{class:"ma1",circle:"","model-value":"12.5"}),l(s,{class:"ma1",circle:"","model-value":"25"}),l(s,{class:"ma1",circle:"","model-value":"50"}),l(s,{class:"ma1",circle:"","model-value":"75"}),l(s,{class:"ma1",circle:"","model-value":"100"})]),_:1}),e[32]||(e[32]=n("h3",null,"Updated value example",-1)),l(a,{reactive:""},{pug:o(()=>e[13]||(e[13]=[r('w-progress(circle :model-value="progress")')])),html:o(()=>e[14]||(e[14]=[r('<w-progress circle :model-value="progress"></w-progress>')])),js:o(()=>e[15]||(e[15]=[r(`data: () => ({
  progress: 0
}),

mounted () {
  // Emulating progress.
  setInterval(() => {
    this.progress += 10
    if (this.progress === 100) this.progress = 0
  }, 700)
}
`)])),default:o(()=>[l(s,{circle:"","model-value":t.progress},null,8,["model-value"])]),_:1}),l(i,{h2:""},{default:o(()=>e[16]||(e[16]=[r("Size & stroke thickness")])),_:1}),l(a,{reactive:""},{pug:o(()=>e[17]||(e[17]=[r(`w-progress.ma1(circle model-value="38" color="blue")
w-progress.ma1(circle model-value="38" size="4em" color="blue")
w-progress.ma1.mr8(circle model-value="38" size="5em" color="blue")

w-progress.ma1(circle model-value="38" size="6em" :stroke="2" color="blue")
w-progress.ma1(circle model-value="38" size="6em" :stroke="15" color="blue")
w-progress.ma1(circle model-value="38" size="6em" :stroke="40" color="blue")`)])),html:o(()=>e[18]||(e[18]=[r(`<w-progress
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
`)])),default:o(()=>[l(s,{class:"ma1",circle:"","model-value":"38",color:"blue"}),l(s,{class:"ma1",circle:"","model-value":"38",size:"4em",color:"blue"}),l(s,{class:"ma1 mr8",circle:"","model-value":"38",size:"5em",color:"blue"}),l(s,{class:"ma1",circle:"","model-value":"38",size:"6em",stroke:2,color:"blue"}),l(s,{class:"ma1",circle:"","model-value":"38",size:"6em",stroke:15,color:"blue"}),l(s,{class:"ma1",circle:"","model-value":"38",size:"6em",stroke:40,color:"blue"})]),_:1}),l(i,{h2:""},{default:o(()=>e[19]||(e[19]=[r("Progress value with label")])),_:1}),e[33]||(e[33]=n("p",null,[r("The default label displays the rounded value without the "),n("code",null,"%"),r(" sign, so it fits in smaller circles.")],-1)),e[34]||(e[34]=n("p",null,"You can customize the label to display the value as you wish.",-1)),l(a,{reactive:""},{pug:o(()=>e[20]||(e[20]=[r(`p Default label - Custom label

w-progress.ma1.mr8(circle v-model="progress" size="5em" label)

w-progress.ma1(circle v-model="progress" size="5em")
  strong `+p("{{ progress }}")+"%")])),html:o(()=>e[21]||(e[21]=[r(`<p>Default label - Custom label</p>

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
  <strong>`+p("{{ progress }}")+`%</strong>
</w-progress>`)])),js:o(()=>e[22]||(e[22]=[r(`data: () => ({
  progress: 37.86
})
`)])),default:o(()=>[e[23]||(e[23]=n("p",null,"Default label   -   Custom label",-1)),l(s,{class:"ma1 mr8",circle:"",modelValue:t.progress1,"onUpdate:modelValue":e[0]||(e[0]=u=>t.progress1=u),size:"5em",label:""},null,8,["modelValue"]),l(s,{class:"ma1",circle:"",modelValue:t.progress1,"onUpdate:modelValue":e[1]||(e[1]=u=>t.progress1=u),size:"5em"},{default:o(()=>[n("strong",null,p(t.progress1)+"%",1)]),_:1},8,["modelValue"])]),_:1}),e[35]||(e[35]=n("h3",null,"Providing a color for the custom label",-1)),l(a,{reactive:""},{pug:o(()=>e[24]||(e[24]=[r(`w-progress.ma1(
  circle
  model-value="38"
  size="3em"
  label
  label-color="indigo-light4")`)])),html:o(()=>e[25]||(e[25]=[r(`<w-progress
  class="ma1"
  circle
  model-value="38"
  size="3em"
  label
  label-color="indigo-light4">
</w-progress>
`)])),default:o(()=>[l(s,{class:"ma1",circle:"","model-value":"38",size:"3em",label:"","label-color":"indigo-light4"})]),_:1}),l(i,{h2:""},{default:o(()=>e[26]||(e[26]=[r("Round linecap & default flat line cap")])),_:1}),l(a,{reactive:""},{pug:o(()=>e[27]||(e[27]=[r(`w-progress.ma1(circle model-value="38" size="6em" round-cap)
w-progress.ma1(circle model-value="38" size="6em")`)])),html:o(()=>e[28]||(e[28]=[r(`<w-progress
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
`)])),default:o(()=>[l(s,{class:"ma1",circle:"","model-value":"38",size:"6em","round-cap":""}),l(s,{class:"ma1",circle:"","model-value":"38",size:"6em"})]),_:1})]),"item-content.2":o(()=>[l(i,{h2:""},{default:o(()=>e[36]||(e[36]=[r("Default indeterminate progress & colors")])),_:1}),e[64]||(e[64]=n("p",null,[r("Like in most components, you can set a "),n("code",null,"color"),r(" for the text and a "),n("code",null,"bg-color"),r(` for the
background.`)],-1)),l(a,{reactive:""},{pug:o(()=>e[37]||(e[37]=[r(`w-progress
w-progress.mt4(color="blue")
w-progress.mt4(color="green")
.title3.my6 Mixing colors
w-progress.mt4(color="yellow" bg-color="cyan")`)])),html:o(()=>e[38]||(e[38]=[r(`<w-progress></w-progress>
<w-progress class="mt4" color="blue"></w-progress>
<w-progress class="mt4" color="green"></w-progress>
<div class="title3 my6">Mixing colors</div>
<w-progress class="mt4" color="yellow" bg-color="cyan"></w-progress>
`)])),default:o(()=>[l(s),l(s,{class:"mt4",color:"blue"}),l(s,{class:"mt4",color:"green"}),e[39]||(e[39]=n("h3",null,"Mixing colors",-1)),l(s,{class:"mt4",color:"yellow","bg-color":"cyan"})]),_:1}),l(i,{h2:""},{default:o(()=>e[40]||(e[40]=[r("Size")])),_:1}),l(a,{reactive:""},{pug:o(()=>e[41]||(e[41]=[r(`w-progress(model-value="38" size="1em" color="blue")
w-progress.mt4(model-value="38" size="2.5em" color="blue")`)])),html:o(()=>e[42]||(e[42]=[r(`<w-progress model-value="38" size="1em" color="blue"></w-progress>
<w-progress class="mt4" model-value="38" size="2.5em" color="blue"></w-progress>
`)])),default:o(()=>[l(s,{"model-value":"38",size:"1em",color:"blue"}),l(s,{class:"mt4","model-value":"38",size:"2.5em",color:"blue"})]),_:1}),l(i,{h2:""},{default:o(()=>e[43]||(e[43]=[r("Tile & round")])),_:1}),l(a,{reactive:""},{pug:o(()=>e[44]||(e[44]=[r(`w-progress(model-value="38" size="1.4em" tile color="light-blue")
w-progress.mt4(model-value="38" size="1.4em" round color="light-blue")`)])),html:o(()=>e[45]||(e[45]=[r(`<w-progress
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
`)])),default:o(()=>[l(s,{"model-value":"38",size:"1.4em",tile:"",color:"light-blue"}),l(s,{class:"mt4","model-value":"38",size:"1.4em",round:"",color:"light-blue"})]),_:1}),l(i,{h2:""},{default:o(()=>e[46]||(e[46]=[r("Outline & shadow")])),_:1}),l(a,{reactive:""},{pug:o(()=>e[47]||(e[47]=[r(`w-progress(
  model-value="38"
  size="1em"
  outline
  round
  color="light-blue")

w-progress.mt4(
  model-value="38"
  size="1em"
  shadow
  color="light-blue")`)])),html:o(()=>e[48]||(e[48]=[r(`<w-progress
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
`)])),default:o(()=>[l(s,{"model-value":"38",size:"1em",outline:"",round:"",color:"light-blue"}),l(s,{class:"mt4","model-value":"38",size:"1em",shadow:"",color:"light-blue"})]),_:1}),l(i,{h2:""},{default:o(()=>e[49]||(e[49]=[r("Stripes (only if determinate)")])),_:1}),l(a,{reactive:""},{pug:o(()=>e[50]||(e[50]=[r(`w-progress(
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
  stripes)`)])),html:o(()=>e[51]||(e[51]=[r(`<w-progress
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
`)])),default:o(()=>[l(s,{"model-value":"38",size:"1em",outline:"",round:"",color:"light-blue",stripes:""}),l(s,{class:"mt4","model-value":"38",size:"1.4em",outline:"",round:"",color:"primary",stripes:""})]),_:1}),l(i,{h2:""},{default:o(()=>e[52]||(e[52]=[r("Progress value with label")])),_:1}),e[65]||(e[65]=n("h3",null,"Default label",-1)),l(a,{reactive:""},{pug:o(()=>e[53]||(e[53]=[r(`w-progress(v-model="progress" size="1.3em" round color="primary" label)
w-progress.mt4(v-model="progress" size="1.3em" outline round label)`)])),html:o(()=>e[54]||(e[54]=[r(`<w-progress
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
</w-progress>`)])),js:o(()=>e[55]||(e[55]=[r(`data: () => ({
  progress: 37.86
})
`)])),default:o(()=>[l(s,{modelValue:t.progress1,"onUpdate:modelValue":e[2]||(e[2]=u=>t.progress1=u),size:"1.3em",round:"",color:"primary",label:""},null,8,["modelValue"]),l(s,{class:"mt4",modelValue:t.progress1,"onUpdate:modelValue":e[3]||(e[3]=u=>t.progress1=u),size:"1.3em",outline:"",round:"",label:""},null,8,["modelValue"])]),_:1}),e[66]||(e[66]=n("h3",null,"Custom label",-1)),l(a,{reactive:""},{pug:o(()=>e[56]||(e[56]=[r(`w-progress(v-model="progress" size="1.5em" outline round)
  strong `+p("{{ progress }}")+"%")])),html:o(()=>e[57]||(e[57]=[r(`<w-progress v-model="progress" size="1.5em" outline round>
  <strong>`+p("{{ progress }}")+`%</strong>
</w-progress>`)])),js:o(()=>e[58]||(e[58]=[r(`data: () => ({
  progress: 37.86
})
`)])),default:o(()=>[l(s,{class:"mt3",modelValue:t.progress1,"onUpdate:modelValue":e[4]||(e[4]=u=>t.progress1=u),size:"1.5em",outline:"",round:""},{default:o(()=>[n("strong",null,p(t.progress1)+"%",1)]),_:1},8,["modelValue"])]),_:1}),e[67]||(e[67]=n("h3",null,"Providing a color for the custom label",-1)),e[68]||(e[68]=n("p",null,[r("The color of the label should be readable on both the progress and the background."),n("br"),r(`
So you are free to decide what is the best color.`)],-1)),l(a,{reactive:""},{pug:o(()=>e[59]||(e[59]=[r(`w-progress(
  model-value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4")`)])),html:o(()=>e[60]||(e[60]=[r(`<w-progress
  model-value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4">
</w-progress>
`)])),default:o(()=>[l(s,{class:"mt2","model-value":"50.3",size:"2em",outline:"",round:"",label:"","label-color":"indigo-light4"})]),_:1}),l(i,{h2:""},{default:o(()=>e[61]||(e[61]=[r("Round linecap & default flat line cap")])),_:1}),l(a,{reactive:""},{pug:o(()=>e[62]||(e[62]=[r(`w-progress(model-value="38" size="2em" round round-cap)
w-progress.mt4(model-value="38" size="2em" round)`)])),html:o(()=>e[63]||(e[63]=[r(`<w-progress
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
</w-progress>`)])),default:o(()=>[l(s,{"model-value":"38",size:"2em",round:"","round-cap":""}),l(s,{class:"mt4","model-value":"38",size:"2em",round:""})]),_:1})]),_:1})])}const k={data:()=>({progress1:37.86,progress:0,linearOrCircular:[{label:"Linear",value:!1},{label:"Circular",value:!0}],circular:!0,intervalId:null}),mounted(){this.intervalId=setInterval(()=>{this.progress+=10,this.progress===100&&(this.progress=0)},700)},beforeUnmount(){clearInterval(this.intervalId)}},V=w(k,[["render",h],["__scopeId","data-v-421017b5"]]);function x(t,e,v,b,f,d){const i=m("title-link"),s=m("component-api");return g(),c("div",null,[e[1]||(e[1]=n("div",{class:"w-divider my12"},null,-1)),l(i,{class:"title1",h2:""},{default:o(()=>e[0]||(e[0]=[r("API")])),_:1}),l(s,{class:"mt0",items:d.props,descriptions:t.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(s,{items:t.slots,title:"Slots"},null,8,["items"]),l(s,{items:d.events,title:"Events"},null,8,["items"])])}const S={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Accepts a percentage value (ranging from 0 to 100) as a number or a string.<br>If the value is <code>undefined</code>, <code>-1</code> or not provided at all, it will be assumed indeterminate.',label:"Shows or hides the label of the progress containing the current progress value.",roundCap:"Applies a round line-cap to the progress.",color:'Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:`Applies a color to the progress' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a color to the progress label's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:"Sets the size of the progress element: the width if circular, or the height if linear.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",circle:"Sets the progress style to circle.",stroke:"Only applies to a circular progress.<br>Sets the thickness of the circular progress.",shadow:"Only applies to a linear progress.<br>Applies a drop shadow to the progress bar.",tile:"Only applies to a linear progress.<br>Removes the default border-radius and sets sharp edges on the progress bar.",round:"Only applies to a linear progress.<br>Sets a maximum border-radius on the corners of the progress, giving it a round look.",outline:"Only applies to a linear progress.<br>When using the linear progress, the outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the progress, border and label and no background color is set.",stripes:"Only applies to a linear progress.<br>Applies an animated stripes background on the progress bar.",absolute:"Sets the CSS position of the progress element to <code>absolute</code>.",fixed:"Sets the CSS position of the progress element to <code>fixed</code>.",top:"Places the progress element at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the progress element at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the progress element."},C={default:{description:"Provide a custom progress label."}},A={},P={data:()=>({propsDescs:S,slots:C}),computed:{props(){return z.props},events(){return z.emits.reduce((t,e)=>(t[e]={description:A[e]||""})&&t,{})}}},$=w(P,[["render",x]]);function D(t,e,v,b,f,d){const i=m("ui-component-title"),s=m("examples"),a=m("api");return g(),c("main",null,[l(i,null,{default:o(()=>e[0]||(e[0]=[r("w-progress")])),_:1}),l(s),l(a)])}const I={components:{Examples:V,Api:$}},U=w(I,[["render",D]]);export{U as default};
