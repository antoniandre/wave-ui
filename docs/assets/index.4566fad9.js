import{r as m,o as g,g as h,a as e,w as o,b as l,t as p,d as r,X as y,Y as k,_ as w,Z as _}from"./index.bf2cfd71.js";const c=n=>(y("data-v-421017b5"),n=n(),k(),n),x=c(()=>r("p",{class:"my4"},"First choose your progress style:",-1)),S=c(()=>r("p",null,[l("Like in most components, you can set a "),r("code",null,"color"),l(" for the text and a "),r("code",null,"bg-color"),l(` for the
background.`),r("br"),l(`
By default, the progress foreground color is `),r("code",null,"primary"),l(".")],-1)),V=c(()=>r("h3",null,"Mixing colors",-1)),C=c(()=>r("p",null,"The value can be given as a number or a string.",-1)),$=c(()=>r("p",null,[l("When the value is "),r("code",null,"undefined"),l(", "),r("code",null,"-1"),l(` or not provided at all, it will be assumed
indeterminate.`)],-1)),A=c(()=>r("h3",null,"Updated value example",-1)),P=c(()=>r("p",null,[l("The default label displays the rounded value without the "),r("code",null,"%"),l(" sign, so it fits in smaller circles.")],-1)),I=c(()=>r("p",null,"You can customize the label to display the value as you wish.",-1)),D=c(()=>r("p",null,"Default label \xA0 - \xA0 Custom label",-1)),O=c(()=>r("h3",null,"Providing a color for the custom label",-1)),U=c(()=>r("p",null,[l("Like in most components, you can set a "),r("code",null,"color"),l(" for the text and a "),r("code",null,"bg-color"),l(` for the
background.`)],-1)),M=c(()=>r("h3",null,"Mixing colors",-1)),T=c(()=>r("h3",null,"Default label",-1)),B=c(()=>r("h3",null,"Custom label",-1)),E=c(()=>r("h3",null,"Providing a color for the custom label",-1)),L=c(()=>r("p",null,[l("The color of the label should be readable on both the progress and the background."),r("br"),l(`
So you are free to decide what is the best color.`)],-1));function j(n,i,v,b,f,d){const t=m("title-link"),s=m("w-progress"),a=m("example"),z=m("w-tabs");return g(),h("div",null,[e(t,{class:"title1",h2:""},{default:o(()=>[l("Circular progress & linear progress")]),_:1}),x,e(z,{items:[{title:"Circular"},{title:"Linear"}],card:"","content-class":"pl6"},{"item-content.1":o(()=>[e(t,{h2:""},{default:o(()=>[l("Default indeterminate progress & colors")]),_:1}),S,e(a,{reactive:""},{pug:o(()=>[l(`w-progress.ma1(circle)
w-progress.ma1(circle color="blue")
w-progress.ma1(circle color="green")

.title3.my6 Mixing colors
w-progress.ma1(circle color="yellow" bg-color="cyan")`)]),html:o(()=>[l(`<w-progress class="ma1" circle></w-progress>
<w-progress class="ma1" circle color="blue"></w-progress>
<w-progress class="ma1" circle color="green"></w-progress>

<div class="title3 my6">Mixing colors</div>
<w-progress
  class="ma1"
  circle
  color="yellow"
  bg-color="cyan">
</w-progress>
`)]),default:o(()=>[e(s,{class:"ma1",circle:""}),e(s,{class:"ma1",circle:"",color:"blue"}),e(s,{class:"ma1",circle:"",color:"green"}),V,e(s,{class:"ma1",circle:"",color:"yellow","bg-color":"cyan"})]),_:1}),e(t,{h2:""},{default:o(()=>[l("Progress value")]),_:1}),C,$,e(a,{reactive:""},{pug:o(()=>[l(`w-progress.ma1(circle :model-value="undefined")
w-progress.ma1.mr8(circle :model-value="-1")

w-progress.ma1(circle model-value="0")
w-progress.ma1(circle model-value="12.5")
w-progress.ma1(circle model-value="25")
w-progress.ma1(circle model-value="50")
w-progress.ma1(circle model-value="75")
w-progress.ma1(circle model-value="100")`)]),html:o(()=>[l(`<w-progress class="ma1" circle :model-value="undefined"></w-progress>
<w-progress class="ma1 mr8" circle :model-value="-1"></w-progress>

<w-progress class="ma1" circle model-value="0"></w-progress>
<w-progress class="ma1" circle model-value="12.5"></w-progress>
<w-progress class="ma1" circle model-value="25"></w-progress>
<w-progress class="ma1" circle model-value="50"></w-progress>
<w-progress class="ma1" circle model-value="75"></w-progress>
<w-progress class="ma1" circle model-value="100"></w-progress>
`)]),default:o(()=>[e(s,{class:"ma1",circle:"","model-value":void 0}),e(s,{class:"ma1 mr8",circle:"","model-value":-1}),e(s,{class:"ma1",circle:"","model-value":"0"}),e(s,{class:"ma1",circle:"","model-value":"12.5"}),e(s,{class:"ma1",circle:"","model-value":"25"}),e(s,{class:"ma1",circle:"","model-value":"50"}),e(s,{class:"ma1",circle:"","model-value":"75"}),e(s,{class:"ma1",circle:"","model-value":"100"})]),_:1}),A,e(a,{reactive:""},{pug:o(()=>[l('w-progress(circle :model-value="progress")')]),html:o(()=>[l('<w-progress circle :model-value="progress"></w-progress>')]),js:o(()=>[l(`data: () => ({
  progress: 0
}),

mounted () {
  // Emulating progress.
  setInterval(() => {
    this.progress += 10
    if (this.progress === 100) this.progress = 0
  }, 700)
}
`)]),default:o(()=>[e(s,{circle:"","model-value":n.progress},null,8,["model-value"])]),_:1}),e(t,{h2:""},{default:o(()=>[l("Size & stroke thickness")]),_:1}),e(a,{reactive:""},{pug:o(()=>[l(`w-progress.ma1(circle model-value="38" color="blue")
w-progress.ma1(circle model-value="38" size="4em" color="blue")
w-progress.ma1.mr8(circle model-value="38" size="5em" color="blue")

w-progress.ma1(circle model-value="38" size="6em" :stroke="2" color="blue")
w-progress.ma1(circle model-value="38" size="6em" :stroke="15" color="blue")
w-progress.ma1(circle model-value="38" size="6em" :stroke="40" color="blue")`)]),html:o(()=>[l(`<w-progress
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
`)]),default:o(()=>[e(s,{class:"ma1",circle:"","model-value":"38",color:"blue"}),e(s,{class:"ma1",circle:"","model-value":"38",size:"4em",color:"blue"}),e(s,{class:"ma1 mr8",circle:"","model-value":"38",size:"5em",color:"blue"}),e(s,{class:"ma1",circle:"","model-value":"38",size:"6em",stroke:2,color:"blue"}),e(s,{class:"ma1",circle:"","model-value":"38",size:"6em",stroke:15,color:"blue"}),e(s,{class:"ma1",circle:"","model-value":"38",size:"6em",stroke:40,color:"blue"})]),_:1}),e(t,{h2:""},{default:o(()=>[l("Progress value with label")]),_:1}),P,I,e(a,{reactive:""},{pug:o(()=>[l(`p Default label - Custom label

w-progress.ma1.mr8(circle v-model="progress" size="5em" label)

w-progress.ma1(circle v-model="progress" size="5em")
  strong `+p("{{ progress }}")+"%")]),html:o(()=>[l(`<p>Default label - Custom label</p>

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
</w-progress>`)]),js:o(()=>[l(`data: () => ({
  progress: 37.86
})
`)]),default:o(()=>[D,e(s,{class:"ma1 mr8",circle:"",modelValue:n.progress1,"onUpdate:modelValue":i[0]||(i[0]=u=>n.progress1=u),size:"5em",label:""},null,8,["modelValue"]),e(s,{class:"ma1",circle:"",modelValue:n.progress1,"onUpdate:modelValue":i[1]||(i[1]=u=>n.progress1=u),size:"5em"},{default:o(()=>[r("strong",null,p(n.progress1)+"%",1)]),_:1},8,["modelValue"])]),_:1}),O,e(a,{reactive:""},{pug:o(()=>[l(`w-progress.ma1(
  circle
  model-value="38"
  size="3em"
  label
  label-color="indigo-light4")`)]),html:o(()=>[l(`<w-progress
  class="ma1"
  circle
  model-value="38"
  size="3em"
  label
  label-color="indigo-light4">
</w-progress>
`)]),default:o(()=>[e(s,{class:"ma1",circle:"","model-value":"38",size:"3em",label:"","label-color":"indigo-light4"})]),_:1}),e(t,{h2:""},{default:o(()=>[l("Round linecap & default flat line cap")]),_:1}),e(a,{reactive:""},{pug:o(()=>[l(`w-progress.ma1(circle model-value="38" size="6em" round-cap)
w-progress.ma1(circle model-value="38" size="6em")`)]),html:o(()=>[l(`<w-progress
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
`)]),default:o(()=>[e(s,{class:"ma1",circle:"","model-value":"38",size:"6em","round-cap":""}),e(s,{class:"ma1",circle:"","model-value":"38",size:"6em"})]),_:1})]),"item-content.2":o(()=>[e(t,{h2:""},{default:o(()=>[l("Default indeterminate progress & colors")]),_:1}),U,e(a,{reactive:""},{pug:o(()=>[l(`w-progress
w-progress.mt4(color="blue")
w-progress.mt4(color="green")
.title3.my6 Mixing colors
w-progress.mt4(color="yellow" bg-color="cyan")`)]),html:o(()=>[l(`<w-progress></w-progress>
<w-progress class="mt4" color="blue"></w-progress>
<w-progress class="mt4" color="green"></w-progress>
<div class="title3 my6">Mixing colors</div>
<w-progress class="mt4" color="yellow" bg-color="cyan"></w-progress>
`)]),default:o(()=>[e(s),e(s,{class:"mt4",color:"blue"}),e(s,{class:"mt4",color:"green"}),M,e(s,{class:"mt4",color:"yellow","bg-color":"cyan"})]),_:1}),e(t,{h2:""},{default:o(()=>[l("Size")]),_:1}),e(a,{reactive:""},{pug:o(()=>[l(`w-progress(model-value="38" size="1em" color="blue")
w-progress.mt4(model-value="38" size="2.5em" color="blue")`)]),html:o(()=>[l(`<w-progress model-value="38" size="1em" color="blue"></w-progress>
<w-progress class="mt4" model-value="38" size="2.5em" color="blue"></w-progress>
`)]),default:o(()=>[e(s,{"model-value":"38",size:"1em",color:"blue"}),e(s,{class:"mt4","model-value":"38",size:"2.5em",color:"blue"})]),_:1}),e(t,{h2:""},{default:o(()=>[l("Tile & round")]),_:1}),e(a,{reactive:""},{pug:o(()=>[l(`w-progress(model-value="38" size="1.4em" tile color="light-blue")
w-progress.mt4(model-value="38" size="1.4em" round color="light-blue")`)]),html:o(()=>[l(`<w-progress
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
`)]),default:o(()=>[e(s,{"model-value":"38",size:"1.4em",tile:"",color:"light-blue"}),e(s,{class:"mt4","model-value":"38",size:"1.4em",round:"",color:"light-blue"})]),_:1}),e(t,{h2:""},{default:o(()=>[l("Outline & shadow")]),_:1}),e(a,{reactive:""},{pug:o(()=>[l(`w-progress(
  model-value="38"
  size="1em"
  outline
  round
  color="light-blue")

w-progress.mt4(
  model-value="38"
  size="1em"
  shadow
  color="light-blue")`)]),html:o(()=>[l(`<w-progress
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
`)]),default:o(()=>[e(s,{"model-value":"38",size:"1em",outline:"",round:"",color:"light-blue"}),e(s,{class:"mt4","model-value":"38",size:"1em",shadow:"",color:"light-blue"})]),_:1}),e(t,{h2:""},{default:o(()=>[l("Stripes (only if determinate)")]),_:1}),e(a,{reactive:""},{pug:o(()=>[l(`w-progress(
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
  stripes)`)]),html:o(()=>[l(`<w-progress
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
`)]),default:o(()=>[e(s,{"model-value":"38",size:"1em",outline:"",round:"",color:"light-blue",stripes:""}),e(s,{class:"mt4","model-value":"38",size:"1.4em",outline:"",round:"",color:"primary",stripes:""})]),_:1}),e(t,{h2:""},{default:o(()=>[l("Progress value with label")]),_:1}),T,e(a,{reactive:""},{pug:o(()=>[l(`w-progress(v-model="progress" size="1.3em" round color="primary" label)
w-progress.mt4(v-model="progress" size="1.3em" outline round label)`)]),html:o(()=>[l(`<w-progress
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
</w-progress>`)]),js:o(()=>[l(`data: () => ({
  progress: 37.86
})
`)]),default:o(()=>[e(s,{modelValue:n.progress1,"onUpdate:modelValue":i[2]||(i[2]=u=>n.progress1=u),size:"1.3em",round:"",color:"primary",label:""},null,8,["modelValue"]),e(s,{class:"mt4",modelValue:n.progress1,"onUpdate:modelValue":i[3]||(i[3]=u=>n.progress1=u),size:"1.3em",outline:"",round:"",label:""},null,8,["modelValue"])]),_:1}),B,e(a,{reactive:""},{pug:o(()=>[l(`w-progress(v-model="progress" size="1.5em" outline round)
  strong `+p("{{ progress }}")+"%")]),html:o(()=>[l(`<w-progress v-model="progress" size="1.5em" outline round>
  <strong>`+p("{{ progress }}")+`%</strong>
</w-progress>`)]),js:o(()=>[l(`data: () => ({
  progress: 37.86
})
`)]),default:o(()=>[e(s,{class:"mt3",modelValue:n.progress1,"onUpdate:modelValue":i[4]||(i[4]=u=>n.progress1=u),size:"1.5em",outline:"",round:""},{default:o(()=>[r("strong",null,p(n.progress1)+"%",1)]),_:1},8,["modelValue"])]),_:1}),E,L,e(a,{reactive:""},{pug:o(()=>[l(`w-progress(
  model-value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4")`)]),html:o(()=>[l(`<w-progress
  model-value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4">
</w-progress>
`)]),default:o(()=>[e(s,{class:"mt2","model-value":"50.3",size:"2em",outline:"",round:"",label:"","label-color":"indigo-light4"})]),_:1}),e(t,{h2:""},{default:o(()=>[l("Round linecap & default flat line cap")]),_:1}),e(a,{reactive:""},{pug:o(()=>[l(`w-progress(model-value="38" size="2em" round round-cap)
w-progress.mt4(model-value="38" size="2em" round)`)]),html:o(()=>[l(`<w-progress
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
</w-progress>`)]),default:o(()=>[e(s,{"model-value":"38",size:"2em",round:"","round-cap":""}),e(s,{class:"mt4","model-value":"38",size:"2em",round:""})]),_:1})]),_:1})])}const N={data:()=>({progress1:37.86,progress:0,linearOrCircular:[{label:"Linear",value:!1},{label:"Circular",value:!0}],circular:!0,intervalId:null}),mounted(){this.intervalId=setInterval(()=>{this.progress+=10,this.progress===100&&(this.progress=0)},700)},beforeUnmount(){clearInterval(this.intervalId)}},R=w(N,[["render",j],["__scopeId","data-v-421017b5"]]),W=r("div",{class:"w-divider my12"},null,-1);function Y(n,i,v,b,f,d){const t=m("title-link"),s=m("component-api");return g(),h("div",null,[W,e(t,{class:"title1",h2:""},{default:o(()=>[l("API")]),_:1}),e(s,{class:"mt0",items:d.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(s,{items:n.slots,title:"Slots"},null,8,["items"]),e(s,{items:d.events,title:"Events"},null,8,["items"])])}const F={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Accepts a percentage value (ranging from 0 to 100) as a number or a string.<br>If the value is <code>undefined</code>, <code>-1</code> or not provided at all, it will be assumed indeterminate.',label:"Shows or hides the label of the progress containing the current progress value.",roundCap:"Applies a round line-cap to the progress.",color:'Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:`Applies a color to the progress' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a color to the progress label's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:"Sets the size of the progress element: the width if circular, or the height if linear.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",circle:"Sets the progress style to circle.",stroke:"Only applies to a circular progress.<br>Sets the thickness of the circular progress.",shadow:"Only applies to a linear progress.<br>Applies a drop shadow to the progress bar.",tile:"Only applies to a linear progress.<br>Removes the default border-radius and sets sharp edges on the progress bar.",round:"Only applies to a linear progress.<br>Sets a maximum border-radius on the corners of the progress, giving it a round look.",outline:"Only applies to a linear progress.<br>When using the linear progress, the outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the progress, border and label and no background color is set.",stripes:"Only applies to a linear progress.<br>Applies an animated stripes background on the progress bar.",absolute:"Sets the CSS position of the progress element to <code>absolute</code>.",fixed:"Sets the CSS position of the progress element to <code>fixed</code>.",top:"Places the progress element at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the progress element at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the progress element."},X={default:{description:"Provide a custom progress label."}},Z={},q={data:()=>({propsDescs:F,slots:X}),computed:{props(){return _.props},events(){return _.emits.reduce((n,i)=>(n[i]={description:Z[i]||""})&&n,{})}}},G=w(q,[["render",Y]]);function H(n,i,v,b,f,d){const t=m("ui-component-title"),s=m("examples"),a=m("api");return g(),h("main",null,[e(t,null,{default:o(()=>[l("w-progress")]),_:1}),e(s),e(a)])}const J={components:{Examples:R,Api:G}},Q=w(J,[["render",H]]);export{Q as default};
