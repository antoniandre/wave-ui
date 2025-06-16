import{r as a,g as m,o as u,b as i,a as n,h as b,e as s,w as o,_ as f,a5 as v}from"./index-BkivclCA.js";function h(l,e,c,w,g,d){const r=a("title-link"),t=a("w-spinner"),p=a("example"),x=a("w-button");return u(),m("div",null,[e[21]||(e[21]=i("p",null,[s("If you want a different style than the "),i("span",{class:"code"},"w-progress"),s(` component, the spinner is a light
alternative that you can easily use anywhere.
`)],-1)),n(r,{h2:""},{default:o(()=>e[1]||(e[1]=[s("Three dots (default)")])),_:1,__:[1]}),n(p,{"content-class":"w-flex justify-center"},{pug:o(()=>e[2]||(e[2]=[s("w-spinner")])),html:o(()=>e[3]||(e[3]=[s(`<w-spinner />
`)])),default:o(()=>[n(t)]),_:1}),n(r,{h2:""},{default:o(()=>e[4]||(e[4]=[s("Fade")])),_:1,__:[4]}),n(p,{"content-class":"w-flex justify-center"},{pug:o(()=>e[5]||(e[5]=[s("w-spinner(fade)")])),html:o(()=>e[6]||(e[6]=[s(`<w-spinner fade />
`)])),default:o(()=>[n(t,{fade:""})]),_:1}),n(r,{h2:""},{default:o(()=>e[7]||(e[7]=[s("Bounce")])),_:1,__:[7]}),n(p,{"content-class":"w-flex justify-center"},{pug:o(()=>e[8]||(e[8]=[s("w-spinner(bounce)")])),html:o(()=>e[9]||(e[9]=[s(`<w-spinner bounce />
`)])),default:o(()=>[n(t,{bounce:""})]),_:1}),n(r,{h2:""},{default:o(()=>e[10]||(e[10]=[s("Model-value or v-model")])),_:1,__:[10]}),e[22]||(e[22]=i("p",null,[s("Both the "),i("code",null,"model-value"),s(" (or "),i("code",null,"value"),s(" for Vue 2) and "),i("code",null,"v-model"),s(` will control the spinner visibility, but there is not
much point in using a `),i("code",null,"v-model"),s(" here as the spinner will never emit a value update.")],-1)),n(p,{"content-class":"w-flex"},{pug:o(()=>e[12]||(e[12]=[s(`w-button.mr4(@click="showSpinner = !showSpinner") Toggle spinner
w-spinner(:model-value="showSpinner")`)])),html:o(()=>e[13]||(e[13]=[s(`<w-button @click="showSpinner = !showSpinner">Toggle spinner</w-button>
<w-spinner :model-value="showSpinner" />`)])),js:o(()=>e[14]||(e[14]=[s(`data: () => ({
  showSpinner: false
})
`)])),default:o(()=>[n(x,{class:"mr4",onClick:e[0]||(e[0]=B=>l.showSpinner=!l.showSpinner)},{default:o(()=>e[11]||(e[11]=[s("Toggle spinner")])),_:1,__:[11]}),n(t,{"model-value":l.showSpinner},null,8,["model-value"])]),_:1}),n(r,{h2:""},{default:o(()=>e[15]||(e[15]=[s("Sizes")])),_:1,__:[15]}),e[23]||(e[23]=b(`<p>The spinner size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code>, or explicit <code>size</code> prop.</p>`,1)),n(p,{"content-class":"w-flex justify-center"},{pug:o(()=>e[16]||(e[16]=[s(`w-flex(align-center justify-center)
  w-spinner.ma1(fade xs)
  w-spinner.ma1(fade sm)
  w-spinner.ma1(fade md)
  w-spinner.ma1(fade lg)
  w-spinner.ma1(fade xl)
  w-spinner.ma1(fade size="5em")`)])),html:o(()=>e[17]||(e[17]=[s(`<w-flex align-center justify-center>
  <w-spinner fade xs class="ma1" />
  <w-spinner fade sm class="ma1" />
  <w-spinner fade md class="ma1" />
  <w-spinner fade lg class="ma1" />
  <w-spinner fade xl class="ma1" />
  <w-spinner fade size="5em" class="ma1" />
</w-flex>
`)])),default:o(()=>[n(t,{class:"ma1",fade:"",xs:""}),n(t,{class:"ma1",fade:"",sm:""}),n(t,{class:"ma1",fade:"",md:""}),n(t,{class:"ma1",fade:"",lg:""}),n(t,{class:"ma1",fade:"",xl:""}),n(t,{class:"ma1",fade:"",size:"5em"})]),_:1}),n(r,{h2:""},{default:o(()=>e[18]||(e[18]=[s("Colors")])),_:1,__:[18]}),e[24]||(e[24]=i("p",null,[s("Like in most components, you can set a "),i("code",null,"color"),s(" for the spinner.")],-1)),n(p,{"content-class":"w-flex justify-center"},{pug:o(()=>e[19]||(e[19]=[s(`w-spinner.ma1(fade color="green")
w-spinner.ma1(fade color="amber")
w-spinner.ma1(fade color="orange")
w-spinner.ma1(fade color="error")
w-spinner.ma1(fade color="pink")`)])),html:o(()=>e[20]||(e[20]=[s(`<w-spinner fade color="green" class="ma1" />
<w-spinner fade color="amber" class="ma1" />
<w-spinner fade color="orange" class="ma1" />
<w-spinner fade color="error" class="ma1" />
<w-spinner fade color="pink" class="ma1" />`)])),default:o(()=>[n(t,{class:"ma1",fade:"",color:"green"}),n(t,{class:"ma1",fade:"",color:"amber"}),n(t,{class:"ma1",fade:"",color:"orange"}),n(t,{class:"ma1",fade:"",color:"error"}),n(t,{class:"ma1",fade:"",color:"pink"})]),_:1})])}const S={data:()=>({showSpinner:!1})},y=f(S,[["render",h]]);function k(l,e,c,w,g,d){const r=a("title-link"),t=a("component-api");return u(),m("div",null,[e[1]||(e[1]=i("div",{class:"w-divider my12"},null,-1)),n(r,{class:"title1",h2:""},{default:o(()=>e[0]||(e[0]=[s("API")])),_:1,__:[0]}),n(t,{class:"mt0",items:d.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(t,{items:l.slots,title:"Slots"},null,8,["items"]),n(t,{items:d.events,title:"Events"},null,8,["items"])])}const $={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The <code>value</code> or <code>v-model</code> controls the visibility of the spinner. Any truthy value will show the spinner whereas any falsy value will hide it. If no value/v-model or <code>undefined</code> is provided, the spinner will be visible.',color:'Sets the color of the spinner.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the spinner to extra small.",sm:"Sets the size of the spinner to small.",md:"Sets the size of the spinner to medium.",lg:"Sets the size of the spinner to large.",xl:"Sets the size of the spinner to extra large.",size:"Sets the size of the spinner. Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",bounce:"Sets the style of the spinner.",fade:"Sets the style of the spinner."},z={},_={},j={data:()=>({propsDescs:$,slots:z}),computed:{props(){return v.props},events(){return v.emits.reduce((l,e)=>(l[e]={description:_[e]||""})&&l,{})}}},T=f(j,[["render",k]]);function V(l,e,c,w,g,d){const r=a("ui-component-title"),t=a("examples"),p=a("api");return u(),m("main",null,[n(r,null,{default:o(()=>e[0]||(e[0]=[s("w-spinner")])),_:1,__:[0]}),n(t),n(p)])}const A={components:{Examples:y,Api:T}},N=f(A,[["render",V]]);export{N as default};
