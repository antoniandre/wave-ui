import{r as d,o as u,g as p,a,w as t,b as e,d as n,t as r,c as y,f as O,h as k,_ as h,aa as _}from"./index.bf2cfd71.js";const x=n("p",null,[e("Like in most components, you can set a "),n("code",null,"color"),e(" for the text and a "),n("code",null,"bg-color"),e(` for the
background.`)],-1),V=k(`<p>The tag size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code>, or via the <code>width</code> and <code>height</code> props.</p>`,1),$={class:"w-flex wrap align-center"},A=n("div",{class:"title3 my4"},"Custom width and height",-1),S=n("p",null,[e("When a tag has a "),n("code",null,"v-model"),e(" or "),n("code",null,"model-value"),e(`, it becomes toggleable (two different
states) and clickable.
When the user clicks it, its `),n("code",null,"v-model"),e(" boolean value is updated.")],-1),C={class:"ml4"},B={class:"ml1"},z={class:"ml4"},T={class:"ml1"},W=n("h3",null,"Closable tag",-1);function N(l,s,w,f,v,m){const c=d("title-link"),o=d("w-tag"),i=d("example"),b=d("w-icon");return u(),p("div",null,[a(c,{h2:""},{default:t(()=>[e("Default tag & outline")]),_:1}),a(i,{"content-class":"w-flex align-center"},{pug:t(()=>[e(`w-tag.mr4 tag
w-tag(outline) tag`)]),html:t(()=>[e(`<w-tag class="mr4">tag</w-tag>
<w-tag outline>tag</w-tag>
`)]),default:t(()=>[a(o,{class:"mr4"},{default:t(()=>[e("tag")]),_:1}),a(o,{outline:""},{default:t(()=>[e("tag")]),_:1})]),_:1}),a(c,{h2:""},{default:t(()=>[e("Colors")]),_:1}),x,a(i,{"content-class":"w-flex align-center"},{pug:t(()=>[e(`w-tag.mr4(color="primary") tag
w-tag.mr4(bg-color="primary") tag
w-tag(bg-color="primary" color="yellow") tag`)]),html:t(()=>[e(`<w-tag class="mr4" color="primary">tag</w-tag>
<w-tag class="mr4" bg-color="primary">tag</w-tag>
<w-tag bg-color="primary" color="yellow">tag</w-tag>
`)]),default:t(()=>[a(o,{class:"mr4",color:"primary"},{default:t(()=>[e("tag")]),_:1}),a(o,{class:"mr4","bg-color":"primary"},{default:t(()=>[e("tag")]),_:1}),a(o,{"bg-color":"primary",color:"yellow"},{default:t(()=>[e("tag")]),_:1})]),_:1}),a(c,{h2:""},{default:t(()=>[e("Round, tile & shadow")]),_:1}),a(i,{"content-class":"w-flex align-center"},{pug:t(()=>[e(`w-tag.mr4(bg-color="primary" round) round
w-tag.mr4(bg-color="primary" tile) tile
w-tag(color="primary" shadow) shadow`)]),html:t(()=>[e(`<w-tag
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
`)]),default:t(()=>[a(o,{class:"mr4","bg-color":"primary",round:""},{default:t(()=>[e("round")]),_:1}),a(o,{class:"mr4","bg-color":"primary",tile:""},{default:t(()=>[e("tile")]),_:1}),a(o,{color:"primary",shadow:""},{default:t(()=>[e("shadow")]),_:1})]),_:1}),a(c,{h2:""},{default:t(()=>[e("Sizes")]),_:1}),V,a(i,null,{pug:t(()=>[e(`.w-flex.wrap.align-center
  w-tag.ma1(color="primary" xs) extra small
  w-tag.ma1(color="primary" sm) small
  w-tag.ma1(color="primary" md) medium
  w-tag.ma1(color="primary" lg) large
  w-tag.ma1(color="primary" xl) extra large
.title3.my4 Custom width and height
w-tag(outline color="primary" xl width="10em" height="3em") a bigger tag`)]),html:t(()=>[e(`<div class="w-flex wrap align-center">
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
`)]),default:t(()=>[n("div",$,[a(o,{class:"ma1",color:"primary",xs:""},{default:t(()=>[e("extra small")]),_:1}),a(o,{class:"ma1",color:"primary",sm:""},{default:t(()=>[e("small")]),_:1}),a(o,{class:"ma1",color:"primary",md:""},{default:t(()=>[e("medium")]),_:1}),a(o,{class:"ma1",color:"primary",lg:""},{default:t(()=>[e("large")]),_:1}),a(o,{class:"ma1",color:"primary",xl:""},{default:t(()=>[e("extra large")]),_:1})]),A,a(o,{outline:"",color:"primary",xl:"",width:"10em",height:"3em"},{default:t(()=>[e("a bigger tag")]),_:1})]),_:1}),a(c,{h2:""},{default:t(()=>[e("Custom content")]),_:1}),a(i,{"content-class":"w-flex align-center"},{pug:t(()=>[e(`w-tag(color="pink-light1" bg-color="pink-light5")
  w-icon.mr1(sm) mdi mdi-heart
  | like it`)]),html:t(()=>[e(`<w-tag color="pink-light1" bg-color="pink-light5">
  <w-icon class="mr1" sm>
    mdi mdi-heart
  </w-icon>
  like it
</w-tag>
`)]),default:t(()=>[a(o,{color:"pink-light1","bg-color":"pink-light5"},{default:t(()=>[a(b,{class:"mr1",sm:""},{default:t(()=>[e("mdi mdi-heart")]),_:1}),e("like it")]),_:1})]),_:1}),a(c,{h2:""},{default:t(()=>[e("Toggleable state & closable")]),_:1}),S,a(i,{"content-class":"w-flex align-center"},{pug:t(()=>[e(`w-tag(
  v-model="tagOn"
  :bg-color="tagOn ? 'primary' : 'primary-light2'"
  dark
  lg) `+r("{{ tagOn ? 'active' : 'inactive' }}")+`
span.ml4
  | Value:
  code.ml1 `+r("{{ tagOn }}"))]),html:t(()=>[e(`<w-tag
  v-model="tagOn"
  :bg-color="tagOn ? 'primary' : 'primary-light2'"
  dark
  lg>
  `+r("{{ tagOn ? 'active' : 'inactive' }}")+`
</w-tag>

<span class="ml4">
  Value:
  <code class="ml1">`+r("{{ tagOn }}")+`</code>
</span>`)]),js:t(()=>[e(`data: () => ({
  tagOn: false
})
`)]),default:t(()=>[a(o,{modelValue:l.tagOn1,"onUpdate:modelValue":s[0]||(s[0]=g=>l.tagOn1=g),"bg-color":l.tagOn1?"primary":"primary-light2",dark:"",lg:""},{default:t(()=>[e(r(l.tagOn1?"active":"inactive"),1)]),_:1},8,["modelValue","bg-color"]),n("span",C,[e("Value:"),n("code",B,r(l.tagOn1),1)])]),_:1}),a(i,{"content-class":"w-flex align-center"},{pug:t(()=>[e(`w-tag(
  v-model="tagOn"
  :color="tagOn ? 'primary' : 'grey'"
  lg
  round
  outline
  width="5.5em")
  w-icon.ml-1.mr1(v-if="tagOn") wi-check
  | `+r("{{ tagOn ? 'active' : 'inactive' }}")+`
span.ml4
  | Value:
  code.ml1 `+r("{{ tagOn }}"))]),html:t(()=>[e(`<w-tag
  v-model="tagOn"
  :color="tagOn ? 'primary' : 'grey'"
  lg
  round
  outline
  width="5.5em">
  <w-icon v-if="tagOn" class="ml-1 mr1">wi-check</w-icon>
  `+r("{{ tagOn ? 'active' : 'inactive' }}")+`
</w-tag>

<span class="ml4">
  Value:
  <code class="ml1">`+r("{{ tagOn }}")+`</code>
</span>`)]),js:t(()=>[e(`data: () => ({
  tagOn: false
})
`)]),default:t(()=>[a(o,{modelValue:l.tagOn1,"onUpdate:modelValue":s[1]||(s[1]=g=>l.tagOn1=g),color:l.tagOn1?"primary":"grey",lg:"",round:"",outline:"",width:"5.5em"},{default:t(()=>[l.tagOn1?(u(),y(b,{key:0,class:"ml-1 mr1"},{default:t(()=>[e("wi-check")]),_:1})):O("",!0),e(r(l.tagOn1?"active":"inactive"),1)]),_:1},8,["modelValue","color"]),n("span",z,[e("Value:"),n("code",T,r(l.tagOn1),1)])]),_:1}),W,a(i,{"content-class":"w-flex align-center"},{pug:t(()=>[e(`w-tag(
  v-model="tagOn"
  closable
  lg
  :outline="tagOn"
  color="primary"
  :width="145") v-model & close`)]),html:t(()=>[e(`<w-tag
  v-model="tagOn"
  closable
  lg
  :outline="tagOn"
  color="primary"
  :width="145">
  v-model & close
</w-tag>`)]),js:t(()=>[e(`data: () => ({
  tagOn: true
})`)]),default:t(()=>[a(o,{modelValue:l.tagOn2,"onUpdate:modelValue":s[2]||(s[2]=g=>l.tagOn2=g),closable:"",lg:"",outline:l.tagOn2,color:"primary",width:145},{default:t(()=>[e("v-model & close")]),_:1},8,["modelValue","outline"])]),_:1})])}const U={data:()=>({tagOn1:!1,tagOn2:!0})},D=h(U,[["render",N]]),P=n("div",{class:"w-divider my12"},null,-1);function E(l,s,w,f,v,m){const c=d("title-link"),o=d("component-api");return u(),p("div",null,[P,a(c,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),a(o,{class:"mt0",items:m.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),a(o,{items:l.slots,title:"Slots"},null,8,["items"]),a(o,{items:m.events,title:"Events"},null,8,["items"])])}const I={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>When a tag has a <code>v-model</code> or <code>value</code>, it becomes toggleable (two different states) and clickable. When the user clicks it, its <code>v-model</code> boolean value is updated.',color:`Applies a color to the tag's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tag's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:"When set to true, the text color will be set to white.",shadow:"Applies a drop shadow to the tag and removes the default border.",tile:"Removes the default border-radius and sets sharp edges on the tag.",round:"Sets a maximum border-radius on the corners of the tag, giving it a round look.",closable:"Adds a close button in the tag. On click of that button, the <code>v-model</code> boolean value is updated. You can then decide to hide the tag with a v-if or v-show based on the <code>v-model</code> value.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",noBorder:"Removes the default border from the tag element.",xs:"Sets the size of the tag to extra small.",sm:"Sets the size of the tag to small.",md:"Sets the size of the tag to medium.",lg:"Sets the size of the tag to large.",xl:"Sets the size of the tag to extra large.",width:"Sets a width on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value."},R={default:{description:"The tag content."}},j={input:{description:"For vue 2 only.<br>If a <code>value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A Boolean representing the active state of the tag."}},"update:modelValue":{description:"For vue 3 only.<br>If a <code>model-value</code> or <code>v-model</code> is provided, the tag becomes toggleable on click (two states).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A Boolean representing the active state of the tag."}}},F={data:()=>({propsDescs:I,slots:R}),computed:{props(){return _.props},events(){return _.emits.reduce((l,s)=>(l[s]=j[s]||{})&&l,{})}}},L=h(F,[["render",E]]);function Y(l,s,w,f,v,m){const c=d("ui-component-title"),o=d("examples"),i=d("api");return u(),p("main",null,[a(c,null,{default:t(()=>[e("w-tag")]),_:1}),a(o),a(i)])}const q={components:{Examples:D,Api:L}},H=h(q,[["render",Y]]);export{H as default};
