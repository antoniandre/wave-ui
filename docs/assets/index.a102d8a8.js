import{r,o as p,g as m,a as e,w as s,b as n,d as l,h as v,_ as u,a5 as _}from"./index.bf2cfd71.js";const x=l("p",null,[n("If you want a different style than the "),l("span",{class:"code"},"w-progress"),n(` component, the spinner is a light
alternative that you can easily use anywhere.
`)],-1),b=l("p",null,[n("Both the "),l("code",null,"model-value"),n(" (or "),l("code",null,"value"),n(" for Vue 2) and "),l("code",null,"v-model"),n(` will control the spinner visibility, but there is not
much point in using a `),l("code",null,"v-model"),n(" here as the spinner will never emit a value update.")],-1),S=v(`<p>The spinner size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code>, or explicit <code>size</code> prop.</p>`,1),y=l("p",null,[n("Like in most components, you can set a "),l("code",null,"color"),n(" for the spinner.")],-1);function $(t,c,f,h,w,d){const a=r("title-link"),o=r("w-spinner"),i=r("example"),g=r("w-button");return p(),m("div",null,[x,e(a,{h2:""},{default:s(()=>[n("Three dots (default)")]),_:1}),e(i,{"content-class":"w-flex justify-center"},{pug:s(()=>[n("w-spinner")]),html:s(()=>[n(`<w-spinner />
`)]),default:s(()=>[e(o)]),_:1}),e(a,{h2:""},{default:s(()=>[n("Fade")]),_:1}),e(i,{"content-class":"w-flex justify-center"},{pug:s(()=>[n("w-spinner(fade)")]),html:s(()=>[n(`<w-spinner fade />
`)]),default:s(()=>[e(o,{fade:""})]),_:1}),e(a,{h2:""},{default:s(()=>[n("Bounce")]),_:1}),e(i,{"content-class":"w-flex justify-center"},{pug:s(()=>[n("w-spinner(bounce)")]),html:s(()=>[n(`<w-spinner bounce />
`)]),default:s(()=>[e(o,{bounce:""})]),_:1}),e(a,{h2:""},{default:s(()=>[n("Model-value or v-model")]),_:1}),b,e(i,{"content-class":"w-flex"},{pug:s(()=>[n(`w-button.mr4(@click="showSpinner = !showSpinner") Toggle spinner
w-spinner(:model-value="showSpinner")`)]),html:s(()=>[n(`<w-button @click="showSpinner = !showSpinner">Toggle spinner</w-button>
<w-spinner :model-value="showSpinner" />`)]),js:s(()=>[n(`data: () => ({
  showSpinner: false
})
`)]),default:s(()=>[e(g,{class:"mr4",onClick:c[0]||(c[0]=I=>t.showSpinner=!t.showSpinner)},{default:s(()=>[n("Toggle spinner")]),_:1}),e(o,{"model-value":t.showSpinner},null,8,["model-value"])]),_:1}),e(a,{h2:""},{default:s(()=>[n("Sizes")]),_:1}),S,e(i,{"content-class":"w-flex justify-center"},{pug:s(()=>[n(`w-flex(align-center justify-center)
  w-spinner.ma1(fade xs)
  w-spinner.ma1(fade sm)
  w-spinner.ma1(fade md)
  w-spinner.ma1(fade lg)
  w-spinner.ma1(fade xl)
  w-spinner.ma1(fade size="5em")`)]),html:s(()=>[n(`<w-flex align-center justify-center>
  <w-spinner fade xs class="ma1" />
  <w-spinner fade sm class="ma1" />
  <w-spinner fade md class="ma1" />
  <w-spinner fade lg class="ma1" />
  <w-spinner fade xl class="ma1" />
  <w-spinner fade size="5em" class="ma1" />
</w-flex>
`)]),default:s(()=>[e(o,{class:"ma1",fade:"",xs:""}),e(o,{class:"ma1",fade:"",sm:""}),e(o,{class:"ma1",fade:"",md:""}),e(o,{class:"ma1",fade:"",lg:""}),e(o,{class:"ma1",fade:"",xl:""}),e(o,{class:"ma1",fade:"",size:"5em"})]),_:1}),e(a,{h2:""},{default:s(()=>[n("Colors")]),_:1}),y,e(i,{"content-class":"w-flex justify-center"},{pug:s(()=>[n(`w-spinner.ma1(fade color="green")
w-spinner.ma1(fade color="amber")
w-spinner.ma1(fade color="orange")
w-spinner.ma1(fade color="error")
w-spinner.ma1(fade color="pink")`)]),html:s(()=>[n(`<w-spinner fade color="green" class="ma1" />
<w-spinner fade color="amber" class="ma1" />
<w-spinner fade color="orange" class="ma1" />
<w-spinner fade color="error" class="ma1" />
<w-spinner fade color="pink" class="ma1" />`)]),default:s(()=>[e(o,{class:"ma1",fade:"",color:"green"}),e(o,{class:"ma1",fade:"",color:"amber"}),e(o,{class:"ma1",fade:"",color:"orange"}),e(o,{class:"ma1",fade:"",color:"error"}),e(o,{class:"ma1",fade:"",color:"pink"})]),_:1})])}const k={data:()=>({showSpinner:!1})},z=u(k,[["render",$]]),j=l("div",{class:"w-divider my12"},null,-1);function T(t,c,f,h,w,d){const a=r("title-link"),o=r("component-api");return p(),m("div",null,[j,e(a,{class:"title1",h2:""},{default:s(()=>[n("API")]),_:1}),e(o,{class:"mt0",items:d.props,descriptions:t.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(o,{items:t.slots,title:"Slots"},null,8,["items"]),e(o,{items:d.events,title:"Events"},null,8,["items"])])}const V={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The <code>value</code> or <code>v-model</code> controls the visibility of the spinner. Any truthy value will show the spinner whereas any falsy value will hide it. If no value/v-model or <code>undefined</code> is provided, the spinner will be visible.',color:'Sets the color of the spinner.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the spinner to extra small.",sm:"Sets the size of the spinner to small.",md:"Sets the size of the spinner to medium.",lg:"Sets the size of the spinner to large.",xl:"Sets the size of the spinner to extra large.",size:"Sets the size of the spinner. Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",bounce:"Sets the style of the spinner.",fade:"Sets the style of the spinner."},A={},B={},C={data:()=>({propsDescs:V,slots:A}),computed:{props(){return _.props},events(){return _.emits.reduce((t,c)=>(t[c]={description:B[c]||""})&&t,{})}}},N=u(C,[["render",T]]);function D(t,c,f,h,w,d){const a=r("ui-component-title"),o=r("examples"),i=r("api");return p(),m("main",null,[e(a,null,{default:s(()=>[n("w-spinner")]),_:1}),e(o),e(i)])}const E={components:{Examples:z,Api:N}},F=u(E,[["render",D]]);export{F as default};
