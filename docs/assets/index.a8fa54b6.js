import{r as u,o as g,f as h,a as e,w as o,b as r,h as m,e as s,aH as y,aF as k,_,bQ as f}from"./index.6ba25376.js";const c=n=>(y("data-v-789526e1"),n=n(),k(),n),x=s("Circular progress & linear progress"),S=c(()=>r("p",{class:"my4"},"First choose your progress style:",-1)),V=s("Default indeterminate progress & colors"),$=c(()=>r("p",null,[s("Like in most components, you can set a "),r("code",null,"color"),s(" for the text and a "),r("code",null,"bg-color"),s(` for the
background.`),r("br"),s(`
By default, the progress foreground color is `),r("code",null,"primary"),s(".")],-1)),C=c(()=>r("h3",null,"Mixing colors",-1)),A=s(`w-progress.ma1(circle)
w-progress.ma1(circle color="blue")
w-progress.ma1(circle color="green")

.title3.my6 Mixing colors
w-progress.ma1(circle color="yellow" bg-color="cyan")`),P=s(`<w-progress class="ma1" circle></w-progress>
<w-progress class="ma1" circle color="blue"></w-progress>
<w-progress class="ma1" circle color="green"></w-progress>

<div class="title3 my6">Mixing colors</div>
<w-progress
  class="ma1"
  circle
  color="yellow"
  bg-color="cyan">
</w-progress>
`),I=s("Progress value"),D=c(()=>r("p",null,"The value can be given as a number or a string.",-1)),O=c(()=>r("p",null,[s("When the value is "),r("code",null,"undefined"),s(", "),r("code",null,"-1"),s(` or not provided at all, it will be assumed
indeterminate.`)],-1)),U=s(`w-progress.ma1(circle :model-value="undefined")
w-progress.ma1.mr8(circle :model-value="-1")

w-progress.ma1(circle model-value="0")
w-progress.ma1(circle model-value="12.5")
w-progress.ma1(circle model-value="25")
w-progress.ma1(circle model-value="50")
w-progress.ma1(circle model-value="75")
w-progress.ma1(circle model-value="100")`),M=s(`<w-progress class="ma1" circle :model-value="undefined"></w-progress>
<w-progress class="ma1 mr8" circle :model-value="-1"></w-progress>

<w-progress class="ma1" circle model-value="0"></w-progress>
<w-progress class="ma1" circle model-value="12.5"></w-progress>
<w-progress class="ma1" circle model-value="25"></w-progress>
<w-progress class="ma1" circle model-value="50"></w-progress>
<w-progress class="ma1" circle model-value="75"></w-progress>
<w-progress class="ma1" circle model-value="100"></w-progress>
`),T=c(()=>r("h3",null,"Updated value example",-1)),B=s('w-progress(circle :model-value="progress")'),E=s('<w-progress circle :model-value="progress"></w-progress>'),L=s(`data: () => ({
  progress: 0
}),

mounted () {
  // Emulating progress.
  setInterval(() => {
    this.progress += 10
    if (this.progress === 100) this.progress = 0
  }, 700)
}
`),j=s("Size & stroke thickness"),N=s(`w-progress.ma1(circle model-value="38" color="blue")
w-progress.ma1(circle model-value="38" size="4em" color="blue")
w-progress.ma1.mr8(circle model-value="38" size="5em" color="blue")

w-progress.ma1(circle model-value="38" size="6em" :stroke="2" color="blue")
w-progress.ma1(circle model-value="38" size="6em" :stroke="15" color="blue")
w-progress.ma1(circle model-value="38" size="6em" :stroke="40" color="blue")`),R=s(`<w-progress
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
`),W=s("Progress value with label"),F=c(()=>r("p",null,[s("The default label displays the rounded value without the "),r("code",null,"%"),s(" sign, so it fits in smaller circles.")],-1)),H=c(()=>r("p",null,"You can customize the label to display the value as you wish.",-1)),Q=c(()=>r("p",null,"Default label \xA0 - \xA0 Custom label",-1)),Y=s(`p Default label - Custom label

w-progress.ma1.mr8(circle v-model="progress" size="5em" label)

w-progress.ma1(circle v-model="progress" size="5em")
  strong `+m("{{ progress }}")+"%"),q=s(`<p>Default label - Custom label</p>

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
  <strong>`+m("{{ progress }}")+`%</strong>
</w-progress>`),G=s(`data: () => ({
  progress: 37.86
})
`),J=c(()=>r("h3",null,"Providing a color for the custom label",-1)),K=s(`w-progress.ma1(
  circle
  model-value="38"
  size="3em"
  label
  label-color="indigo-light4")`),X=s(`<w-progress
  class="ma1"
  circle
  model-value="38"
  size="3em"
  label
  label-color="indigo-light4">
</w-progress>
`),Z=s("Round linecap & default flat line cap"),ee=s(`w-progress.ma1(circle model-value="38" size="6em" round-cap)
w-progress.ma1(circle model-value="38" size="6em")`),oe=s(`<w-progress
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
`),se=s("Default indeterminate progress & colors"),le=c(()=>r("p",null,[s("Like in most components, you can set a "),r("code",null,"color"),s(" for the text and a "),r("code",null,"bg-color"),s(` for the
background.`)],-1)),re=c(()=>r("h3",null,"Mixing colors",-1)),ne=s(`w-progress
w-progress.mt4(color="blue")
w-progress.mt4(color="green")
.title3.my6 Mixing colors
w-progress.mt4(color="yellow" bg-color="cyan")`),te=s(`<w-progress></w-progress>
<w-progress class="mt4" color="blue"></w-progress>
<w-progress class="mt4" color="green"></w-progress>
<div class="title3 my6">Mixing colors</div>
<w-progress class="mt4" color="yellow" bg-color="cyan"></w-progress>
`),ae=s("Size"),ce=s(`w-progress(model-value="38" size="1em" color="blue")
w-progress.mt4(model-value="38" size="2.5em" color="blue")`),ie=s(`<w-progress model-value="38" size="1em" color="blue"></w-progress>
<w-progress class="mt4" model-value="38" size="2.5em" color="blue"></w-progress>
`),de=s("Tile & round"),ue=s(`w-progress(model-value="38" size="1.4em" tile color="light-blue")
w-progress.mt4(model-value="38" size="1.4em" round color="light-blue")`),me=s(`<w-progress
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
`),pe=s("Outline & shadow"),ge=s(`w-progress(
  model-value="38"
  size="1em"
  outline
  round
  color="light-blue")

w-progress.mt4(
  model-value="38"
  size="1em"
  shadow
  color="light-blue")`),he=s(`<w-progress
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
`),_e=s("Stripes (only if determinate)"),ve=s(`w-progress(
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
  stripes)`),we=s(`<w-progress
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
`),be=s("Progress value with label"),fe=c(()=>r("h3",null,"Default label",-1)),ze=s(`w-progress(v-model="progress" size="1.3em" round color="primary" label)
w-progress.mt4(v-model="progress" size="1.3em" outline round label)`),ye=s(`<w-progress
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
</w-progress>`),ke=s(`data: () => ({
  progress: 37.86
})
`),xe=c(()=>r("h3",null,"Custom label",-1)),Se=s(`w-progress(v-model="progress" size="1.5em" outline round)
  strong `+m("{{ progress }}")+"%"),Ve=s(`<w-progress v-model="progress" size="1.5em" outline round>
  <strong>`+m("{{ progress }}")+`%</strong>
</w-progress>`),$e=s(`data: () => ({
  progress: 37.86
})
`),Ce=c(()=>r("h3",null,"Providing a color for the custom label",-1)),Ae=c(()=>r("p",null,[s("The color of the label should be readable on both the progress and the background."),r("br"),s(`
So you are free to decide what is the best color.`)],-1)),Pe=s(`w-progress(
  model-value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4")`),Ie=s(`<w-progress
  model-value="50.3"
  size="2em"
  outline
  round
  label
  label-color="indigo-light4">
</w-progress>
`),De=s("Round linecap & default flat line cap"),Oe=s(`w-progress(model-value="38" size="2em" round round-cap)
w-progress.mt4(model-value="38" size="2em" round)`),Ue=s(`<w-progress
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
</w-progress>`);function Me(n,i,v,w,b,p){const a=u("title-link"),l=u("w-progress"),t=u("example"),z=u("w-tabs");return g(),h("div",null,[e(a,{class:"title1",h2:""},{default:o(()=>[x]),_:1}),S,e(z,{items:[{title:"Circular"},{title:"Linear"}],card:"","content-class":"pl6"},{"item-content.1":o(()=>[e(a,{h2:""},{default:o(()=>[V]),_:1}),$,e(t,{reactive:""},{pug:o(()=>[A]),html:o(()=>[P]),default:o(()=>[e(l,{class:"ma1",circle:""}),e(l,{class:"ma1",circle:"",color:"blue"}),e(l,{class:"ma1",circle:"",color:"green"}),C,e(l,{class:"ma1",circle:"",color:"yellow","bg-color":"cyan"})]),_:1}),e(a,{h2:""},{default:o(()=>[I]),_:1}),D,O,e(t,{reactive:""},{pug:o(()=>[U]),html:o(()=>[M]),default:o(()=>[e(l,{class:"ma1",circle:"","model-value":void 0}),e(l,{class:"ma1 mr8",circle:"","model-value":-1}),e(l,{class:"ma1",circle:"","model-value":"0"}),e(l,{class:"ma1",circle:"","model-value":"12.5"}),e(l,{class:"ma1",circle:"","model-value":"25"}),e(l,{class:"ma1",circle:"","model-value":"50"}),e(l,{class:"ma1",circle:"","model-value":"75"}),e(l,{class:"ma1",circle:"","model-value":"100"})]),_:1}),T,e(t,{reactive:""},{pug:o(()=>[B]),html:o(()=>[E]),js:o(()=>[L]),default:o(()=>[e(l,{circle:"","model-value":n.progress},null,8,["model-value"])]),_:1}),e(a,{h2:""},{default:o(()=>[j]),_:1}),e(t,{reactive:""},{pug:o(()=>[N]),html:o(()=>[R]),default:o(()=>[e(l,{class:"ma1",circle:"","model-value":"38",color:"blue"}),e(l,{class:"ma1",circle:"","model-value":"38",size:"4em",color:"blue"}),e(l,{class:"ma1 mr8",circle:"","model-value":"38",size:"5em",color:"blue"}),e(l,{class:"ma1",circle:"","model-value":"38",size:"6em",stroke:2,color:"blue"}),e(l,{class:"ma1",circle:"","model-value":"38",size:"6em",stroke:15,color:"blue"}),e(l,{class:"ma1",circle:"","model-value":"38",size:"6em",stroke:40,color:"blue"})]),_:1}),e(a,{h2:""},{default:o(()=>[W]),_:1}),F,H,e(t,{reactive:""},{pug:o(()=>[Y]),html:o(()=>[q]),js:o(()=>[G]),default:o(()=>[Q,e(l,{class:"ma1 mr8",circle:"",modelValue:n.progress1,"onUpdate:modelValue":i[0]||(i[0]=d=>n.progress1=d),size:"5em",label:""},null,8,["modelValue"]),e(l,{class:"ma1",circle:"",modelValue:n.progress1,"onUpdate:modelValue":i[1]||(i[1]=d=>n.progress1=d),size:"5em"},{default:o(()=>[r("strong",null,m(n.progress1)+"%",1)]),_:1},8,["modelValue"])]),_:1}),J,e(t,{reactive:""},{pug:o(()=>[K]),html:o(()=>[X]),default:o(()=>[e(l,{class:"ma1",circle:"","model-value":"38",size:"3em",label:"","label-color":"indigo-light4"})]),_:1}),e(a,{h2:""},{default:o(()=>[Z]),_:1}),e(t,{reactive:""},{pug:o(()=>[ee]),html:o(()=>[oe]),default:o(()=>[e(l,{class:"ma1",circle:"","model-value":"38",size:"6em","round-cap":""}),e(l,{class:"ma1",circle:"","model-value":"38",size:"6em"})]),_:1})]),"item-content.2":o(()=>[e(a,{h2:""},{default:o(()=>[se]),_:1}),le,e(t,{reactive:""},{pug:o(()=>[ne]),html:o(()=>[te]),default:o(()=>[e(l),e(l,{class:"mt4",color:"blue"}),e(l,{class:"mt4",color:"green"}),re,e(l,{class:"mt4",color:"yellow","bg-color":"cyan"})]),_:1}),e(a,{h2:""},{default:o(()=>[ae]),_:1}),e(t,{reactive:""},{pug:o(()=>[ce]),html:o(()=>[ie]),default:o(()=>[e(l,{"model-value":"38",size:"1em",color:"blue"}),e(l,{class:"mt4","model-value":"38",size:"2.5em",color:"blue"})]),_:1}),e(a,{h2:""},{default:o(()=>[de]),_:1}),e(t,{reactive:""},{pug:o(()=>[ue]),html:o(()=>[me]),default:o(()=>[e(l,{"model-value":"38",size:"1.4em",tile:"",color:"light-blue"}),e(l,{class:"mt4","model-value":"38",size:"1.4em",round:"",color:"light-blue"})]),_:1}),e(a,{h2:""},{default:o(()=>[pe]),_:1}),e(t,{reactive:""},{pug:o(()=>[ge]),html:o(()=>[he]),default:o(()=>[e(l,{"model-value":"38",size:"1em",outline:"",round:"",color:"light-blue"}),e(l,{class:"mt4","model-value":"38",size:"1em",shadow:"",color:"light-blue"})]),_:1}),e(a,{h2:""},{default:o(()=>[_e]),_:1}),e(t,{reactive:""},{pug:o(()=>[ve]),html:o(()=>[we]),default:o(()=>[e(l,{"model-value":"38",size:"1em",outline:"",round:"",color:"light-blue",stripes:""}),e(l,{class:"mt4","model-value":"38",size:"1.4em",outline:"",round:"",color:"primary",stripes:""})]),_:1}),e(a,{h2:""},{default:o(()=>[be]),_:1}),fe,e(t,{reactive:""},{pug:o(()=>[ze]),html:o(()=>[ye]),js:o(()=>[ke]),default:o(()=>[e(l,{modelValue:n.progress1,"onUpdate:modelValue":i[2]||(i[2]=d=>n.progress1=d),size:"1.3em",round:"",color:"primary",label:""},null,8,["modelValue"]),e(l,{class:"mt4",modelValue:n.progress1,"onUpdate:modelValue":i[3]||(i[3]=d=>n.progress1=d),size:"1.3em",outline:"",round:"",label:""},null,8,["modelValue"])]),_:1}),xe,e(t,{reactive:""},{pug:o(()=>[Se]),html:o(()=>[Ve]),js:o(()=>[$e]),default:o(()=>[e(l,{class:"mt3",modelValue:n.progress1,"onUpdate:modelValue":i[4]||(i[4]=d=>n.progress1=d),size:"1.5em",outline:"",round:""},{default:o(()=>[r("strong",null,m(n.progress1)+"%",1)]),_:1},8,["modelValue"])]),_:1}),Ce,Ae,e(t,{reactive:""},{pug:o(()=>[Pe]),html:o(()=>[Ie]),default:o(()=>[e(l,{class:"mt2","model-value":"50.3",size:"2em",outline:"",round:"",label:"","label-color":"indigo-light4"})]),_:1}),e(a,{h2:""},{default:o(()=>[De]),_:1}),e(t,{reactive:""},{pug:o(()=>[Oe]),html:o(()=>[Ue]),default:o(()=>[e(l,{"model-value":"38",size:"2em",round:"","round-cap":""}),e(l,{class:"mt4","model-value":"38",size:"2em",round:""})]),_:1})]),_:1})])}const Te={data:()=>({progress1:37.86,progress:0,linearOrCircular:[{label:"Linear",value:!1},{label:"Circular",value:!0}],circular:!0,intervalId:null}),mounted(){this.intervalId=setInterval(()=>{this.progress+=10,this.progress===100&&(this.progress=0)},700)},beforeUnmount(){clearInterval(this.intervalId)}};var Be=_(Te,[["render",Me],["__scopeId","data-v-789526e1"]]);const Ee=r("div",{class:"w-divider my12"},null,-1),Le=s("API");function je(n,i,v,w,b,p){const a=u("title-link"),l=u("component-api");return g(),h("div",null,[Ee,e(a,{class:"title1",h2:""},{default:o(()=>[Le]),_:1}),e(l,{class:"mt0",items:p.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(l,{items:n.slots,title:"Slots"},null,8,["items"]),e(l,{items:p.events,title:"Events"},null,8,["items"])])}const Ne={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Accepts a percentage value (ranging from 0 to 100) as a number or a string.<br>If the value is <code>undefined</code>, <code>-1</code> or not provided at all, it will be assumed indeterminate.',label:"Shows or hides the label of the progress containing the current progress value.",roundCap:"Applies a round line-cap to the progress.",color:'Applies a foreground color to the progress. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:`Applies a color to the progress' background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a color to the progress label's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,size:"Sets the size of the progress element: the width if circular, or the height if linear.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",circle:"Sets the progress style to circle.",stroke:"Only applies to a circular progress.<br>Sets the thickness of the circular progress.",shadow:"Only applies to a linear progress.<br>Applies a drop shadow to the progress bar.",tile:"Only applies to a linear progress.<br>Removes the default border-radius and sets sharp edges on the progress bar.",round:"Only applies to a linear progress.<br>Sets a maximum border-radius on the corners of the progress, giving it a round look.",outline:"Only applies to a linear progress.<br>When using the linear progress, the outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the progress, border and label and no background color is set.",stripes:"Only applies to a linear progress.<br>Applies an animated stripes background on the progress bar.",absolute:"Sets the CSS position of the progress element to <code>absolute</code>.",fixed:"Sets the CSS position of the progress element to <code>fixed</code>.",top:"Places the progress element at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the progress element at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container when the <code>absolute</code> prop is set to true.",zIndex:"Applies a z-index (positive or negative integer) to the progress element."},Re={default:{description:"Provide a custom progress label."}},We={},Fe={data:()=>({propsDescs:Ne,slots:Re}),computed:{props(){return f.props},events(){return f.emits.reduce((n,i)=>(n[i]={description:We[i]||""})&&n,{})}}};var He=_(Fe,[["render",je]]);const Qe=s("w-progress");function Ye(n,i,v,w,b,p){const a=u("ui-component-title"),l=u("examples"),t=u("api");return g(),h("main",null,[e(a,null,{default:o(()=>[Qe]),_:1}),e(l),e(t)])}const qe={components:{Examples:Be,Api:He}};var Je=_(qe,[["render",Ye]]);export{Je as default};
