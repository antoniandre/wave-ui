import{r as d,o as h,f as u,a as o,w as t,b as l,e,h as s,c as y,d as O,i as k,_ as p,b$ as b}from"./index.6ab5ca13.js";const x=e("Default tag & outline"),V=e("tag"),$=e("tag"),A=e(`w-tag.mr4 tag
w-tag(outline) tag`),S=e(`<w-tag class="mr4">tag</w-tag>
<w-tag outline>tag</w-tag>
`),C=e("Colors"),B=l("p",null,[e("Like in most components, you can set a "),l("code",null,"color"),e(" for the text and a "),l("code",null,"bg-color"),e(` for the
background.`)],-1),z=e("tag"),T=e("tag"),W=e("tag"),N=e(`w-tag.mr4(color="primary") tag
w-tag.mr4(bg-color="primary") tag
w-tag(bg-color="primary" color="yellow") tag`),U=e(`<w-tag class="mr4" color="primary">tag</w-tag>
<w-tag class="mr4" bg-color="primary">tag</w-tag>
<w-tag bg-color="primary" color="yellow">tag</w-tag>
`),D=e("Round, tile & shadow"),P=e("round"),E=e("tile"),I=e("shadow"),R=e(`w-tag.mr4(bg-color="primary" round) round
w-tag.mr4(bg-color="primary" tile) tile
w-tag(color="primary" shadow) shadow`),j=e(`<w-tag
  class="mr4"
  bg-color="primary"
  round>
  round
</w-tag>

<w-tag
  class="mr4"
  bg-color="primary"
  tile>
  tile
</w-tag>

<w-tag
  color="primary"
  shadow>
  shadow
</w-tag>
`),F=e("Sizes"),L=k(`<p>The tag size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code>, or via the <code>width</code> and <code>height</code> props.</p>`,1),Y={class:"w-flex wrap align-center"},q=e("extra small"),G=e("small"),H=e("medium"),J=e("large"),K=e("extra large"),M=l("div",{class:"title3 my4"},"Custom width and height",-1),Q=e("a bigger tag"),X=e(`.w-flex.wrap.align-center
  w-tag.ma1(color="primary" xs) extra small
  w-tag.ma1(color="primary" sm) small
  w-tag.ma1(color="primary" md) medium
  w-tag.ma1(color="primary" lg) large
  w-tag.ma1(color="primary" xl) extra large
.title3.my4 Custom width and height
w-tag(outline color="primary" xl width="10em" height="3em") a bigger tag`),Z=e(`<div class="w-flex wrap align-center">
  <w-tag
    class="ma1"
    color="primary"
    xs>
    extra
    small
  </w-tag>

  <w-tag
    class="ma1"
    color="primary"
    sm>
    small
  </w-tag>

  <w-tag
    class="ma1"
    color="primary"
    md>
    medium
  </w-tag>

  <w-tag
    class="ma1"
    color="primary"
    lg>
    large
  </w-tag>

  <w-tag
    class="ma1"
    color="primary"
    xl>
    extra
    large
  </w-tag>
</div>

<div class="title3 my4">
  Custom width and height
</div>

<w-tag
  outline
  color="primary"
  xl
  width="10em"
  height="3em">
  a bigger tag
</w-tag>
`),ee=e("Custom content"),te=e("mdi mdi-heart"),oe=e("like it"),ae=e(`w-tag(color="pink-light1" bg-color="pink-light5")
  w-icon.mr1(sm) mdi mdi-heart
  | like it`),ne=e(`<w-tag color="pink-light1" bg-color="pink-light5">
  <w-icon class="mr1" sm>
    mdi mdi-heart
  </w-icon>
  like it
</w-tag>
`),le=e("Toggleable state & closable"),se=l("p",null,[e("When a tag has a "),l("code",null,"v-model"),e(" or "),l("code",null,"model-value"),e(`, it becomes toggleable (two different
states) and clickable.
When the user clicks it, its `),l("code",null,"v-model"),e(" boolean value is updated.")],-1),re={class:"ml4"},ce=e("Value:"),ie={class:"ml1"},de=e(`w-tag(
  v-model="tagOn"
  :bg-color="tagOn ? 'primary' : 'primary-light2'"
  dark
  lg) `+s("{{ tagOn ? 'active' : 'inactive' }}")+`
span.ml4
  | Value:
  code.ml1 `+s("{{ tagOn }}")),ge=e(`<w-tag
  v-model="tagOn"
  :bg-color="tagOn ? 'primary' : 'primary-light2'"
  dark
  lg>
  `+s("{{ tagOn ? 'active' : 'inactive' }}")+`
</w-tag>

<span class="ml4">
  Value:
  <code class="ml1">`+s("{{ tagOn }}")+`</code>
</span>`),me=e(`data: () => ({
  tagOn: false
})
`),he=e("wi-check"),ue={class:"ml4"},pe=e("Value:"),_e={class:"ml1"},we=e(`w-tag(
  v-model="tagOn"
  :color="tagOn ? 'primary' : 'grey'"
  lg
  round
  outline
  width="5.5em")
  w-icon.ml-1.mr1(v-if="tagOn") wi-check
  | `+s("{{ tagOn ? 'active' : 'inactive' }}")+`
span.ml4
  | Value:
  code.ml1 `+s("{{ tagOn }}")),fe=e(`<w-tag
  v-model="tagOn"
  :color="tagOn ? 'primary' : 'grey'"
  lg
  round
  outline
  width="5.5em">
  <w-icon v-if="tagOn" class="ml-1 mr1">wi-check</w-icon>
  `+s("{{ tagOn ? 'active' : 'inactive' }}")+`
</w-tag>

<span class="ml4">
  Value:
  <code class="ml1">`+s("{{ tagOn }}")+`</code>
</span>`),ve=e(`data: () => ({
  tagOn: false
})
`),be=l("h3",null,"Closable tag",-1),ye=e("v-model & close"),Oe=e(`w-tag(
  v-model="tagOn"
  closable
  lg
  :outline="tagOn"
  color="primary"
  :width="145") v-model & close`),ke=e(`<w-tag
  v-model="tagOn"
  closable
  lg
  :outline="tagOn"
  color="primary"
  :width="145">
  v-model & close
</w-tag>`),xe=e(`data: () => ({
  tagOn: true
})`);function Ve(n,r,_,w,f,m){const c=d("title-link"),a=d("w-tag"),i=d("example"),v=d("w-icon");return h(),u("div",null,[o(c,{h2:""},{default:t(()=>[x]),_:1}),o(i,{"content-class":"w-flex align-center"},{pug:t(()=>[A]),html:t(()=>[S]),default:t(()=>[o(a,{class:"mr4"},{default:t(()=>[V]),_:1}),o(a,{outline:""},{default:t(()=>[$]),_:1})]),_:1}),o(c,{h2:""},{default:t(()=>[C]),_:1}),B,o(i,{"content-class":"w-flex align-center"},{pug:t(()=>[N]),html:t(()=>[U]),default:t(()=>[o(a,{class:"mr4",color:"primary"},{default:t(()=>[z]),_:1}),o(a,{class:"mr4","bg-color":"primary"},{default:t(()=>[T]),_:1}),o(a,{"bg-color":"primary",color:"yellow"},{default:t(()=>[W]),_:1})]),_:1}),o(c,{h2:""},{default:t(()=>[D]),_:1}),o(i,{"content-class":"w-flex align-center"},{pug:t(()=>[R]),html:t(()=>[j]),default:t(()=>[o(a,{class:"mr4","bg-color":"primary",round:""},{default:t(()=>[P]),_:1}),o(a,{class:"mr4","bg-color":"primary",tile:""},{default:t(()=>[E]),_:1}),o(a,{color:"primary",shadow:""},{default:t(()=>[I]),_:1})]),_:1}),o(c,{h2:""},{default:t(()=>[F]),_:1}),L,o(i,null,{pug:t(()=>[X]),html:t(()=>[Z]),default:t(()=>[l("div",Y,[o(a,{class:"ma1",color:"primary",xs:""},{default:t(()=>[q]),_:1}),o(a,{class:"ma1",color:"primary",sm:""},{default:t(()=>[G]),_:1}),o(a,{class:"ma1",color:"primary",md:""},{default:t(()=>[H]),_:1}),o(a,{class:"ma1",color:"primary",lg:""},{default:t(()=>[J]),_:1}),o(a,{class:"ma1",color:"primary",xl:""},{default:t(()=>[K]),_:1})]),M,o(a,{outline:"",color:"primary",xl:"",width:"10em",height:"3em"},{default:t(()=>[Q]),_:1})]),_:1}),o(c,{h2:""},{default:t(()=>[ee]),_:1}),o(i,{"content-class":"w-flex align-center"},{pug:t(()=>[ae]),html:t(()=>[ne]),default:t(()=>[o(a,{color:"pink-light1","bg-color":"pink-light5"},{default:t(()=>[o(v,{class:"mr1",sm:""},{default:t(()=>[te]),_:1}),oe]),_:1})]),_:1}),o(c,{h2:""},{default:t(()=>[le]),_:1}),se,o(i,{"content-class":"w-flex align-center"},{pug:t(()=>[de]),html:t(()=>[ge]),js:t(()=>[me]),default:t(()=>[o(a,{modelValue:n.tagOn1,"onUpdate:modelValue":r[0]||(r[0]=g=>n.tagOn1=g),"bg-color":n.tagOn1?"primary":"primary-light2",dark:"",lg:""},{default:t(()=>[e(s(n.tagOn1?"active":"inactive"),1)]),_:1},8,["modelValue","bg-color"]),l("span",re,[ce,l("code",ie,s(n.tagOn1),1)])]),_:1}),o(i,{"content-class":"w-flex align-center"},{pug:t(()=>[we]),html:t(()=>[fe]),js:t(()=>[ve]),default:t(()=>[o(a,{modelValue:n.tagOn1,"onUpdate:modelValue":r[1]||(r[1]=g=>n.tagOn1=g),color:n.tagOn1?"primary":"grey",lg:"",round:"",outline:"",width:"5.5em"},{default:t(()=>[n.tagOn1?(h(),y(v,{key:0,class:"ml-1 mr1"},{default:t(()=>[he]),_:1})):O("",!0),e(s(n.tagOn1?"active":"inactive"),1)]),_:1},8,["modelValue","color"]),l("span",ue,[pe,l("code",_e,s(n.tagOn1),1)])]),_:1}),be,o(i,{"content-class":"w-flex align-center"},{pug:t(()=>[Oe]),html:t(()=>[ke]),js:t(()=>[xe]),default:t(()=>[o(a,{modelValue:n.tagOn2,"onUpdate:modelValue":r[2]||(r[2]=g=>n.tagOn2=g),closable:"",lg:"",outline:n.tagOn2,color:"primary",width:145},{default:t(()=>[ye]),_:1},8,["modelValue","outline"])]),_:1})])}const $e={data:()=>({tagOn1:!1,tagOn2:!0})};var Ae=p($e,[["render",Ve]]);const Se=l("div",{class:"w-divider my12"},null,-1),Ce=e("API");function Be(n,r,_,w,f,m){const c=d("title-link"),a=d("component-api");return h(),u("div",null,[Se,o(c,{class:"title1",h2:""},{default:t(()=>[Ce]),_:1}),o(a,{class:"mt0",items:m.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(a,{items:n.slots,title:"Slots"},null,8,["items"]),o(a,{items:m.events,title:"Events"},null,8,["items"])])}const ze={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>When a tag has a <code>v-model</code> or <code>value</code>, it becomes toggleable (two different states) and clickable. When the user clicks it, its <code>v-model</code> boolean value is updated.',color:`Applies a color to the tag's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tag's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:"When set to true, the text color will be set to white.",shadow:"Applies a drop shadow to the tag and removes the default border.",tile:"Removes the default border-radius and sets sharp edges on the tag.",round:"Sets a maximum border-radius on the corners of the tag, giving it a round look.",closable:"Adds a close button in the tag. On click of that button, the <code>v-model</code> boolean value is updated. You can then decide to hide the tag with a v-if or v-show based on the <code>v-model</code> value.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",noBorder:"Removes the default border from the tag element.",xs:"Sets the size of the tag.",sm:"Sets the size of the tag.",md:"Sets the size of the tag.",lg:"Sets the size of the tag.",xl:"Sets the size of the tag.",width:"Sets a width on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value."},Te={default:{description:"The tag content."}},We={input:{description:"For vue 2 only.<br>If a <code>value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A Boolean representing the active state of the tag."}},"update:modelValue":{description:"For vue 3 only.<br>If a <code>model-value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A Boolean representing the active state of the tag."}}},Ne={data:()=>({propsDescs:ze,slots:Te}),computed:{props(){return b.props},events(){return b.emits.reduce((n,r)=>(n[r]=We[r]||{})&&n,{})}}};var Ue=p(Ne,[["render",Be]]);const De=e("w-tag");function Pe(n,r,_,w,f,m){const c=d("ui-component-title"),a=d("examples"),i=d("api");return h(),u("main",null,[o(c,null,{default:t(()=>[De]),_:1}),o(a),o(i)])}const Ee={components:{Examples:Ae,Api:Ue}};var Re=p(Ee,[["render",Pe]]);export{Re as default};
