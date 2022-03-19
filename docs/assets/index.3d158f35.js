import{r as i,o as p,e as m,f as e,w as s,g as l,i as n,N as g}from"./vendor.e64646cc.js";import{_ as h,D as w}from"./index.90e40c3f.js";const x=l("p",null,[n("If you want a different style than the "),l("span",{class:"code"},"w-progress"),n(` component, the spinner is a light
alternative that you can easily use anywhere.
`)],-1),b=n("Three dots (default)"),S=n("w-spinner"),y=n(`<w-spinner />
`),$=n("Fade"),k=n("w-spinner(fade)"),z=n(`<w-spinner fade />
`),j=n("Bounce"),T=n("w-spinner(bounce)"),V=n(`<w-spinner bounce />
`),A=n("Model-value or v-model"),B=l("p",null,[n("Both the "),l("code",null,"model-value"),n(" (or "),l("code",null,"value"),n(" for Vue 2) and "),l("code",null,"v-model"),n(` will control the spinner visibility, but there is not
much point in using a `),l("code",null,"v-model"),n(" here as the spinner will never emit a value update.")],-1),N=n("Toggle spinner"),C=n(`w-button.mr4(@click="showSpinner = !showSpinner") Toggle spinner
w-spinner(:model-value="showSpinner")`),D=n(`<w-button @click="showSpinner = !showSpinner">Toggle spinner</w-button>
<w-spinner :model-value="showSpinner" />`),E=n(`data: () => ({
  showSpinner: false
})
`),I=n("Sizes"),P=g(`<p>The spinner size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code>, or explicit <code>size</code> prop.</p>`,1),F=n(`w-flex(align-center justify-center)
  w-spinner.ma1(fade xs)
  w-spinner.ma1(fade sm)
  w-spinner.ma1(fade md)
  w-spinner.ma1(fade lg)
  w-spinner.ma1(fade xl)
  w-spinner.ma1(fade size="5em")`),L=n(`<w-flex align-center justify-center>
  <w-spinner fade xs class="ma1" />
  <w-spinner fade sm class="ma1" />
  <w-spinner fade md class="ma1" />
  <w-spinner fade lg class="ma1" />
  <w-spinner fade xl class="ma1" />
  <w-spinner fade size="5em" class="ma1" />
</w-flex>
`),M=n("Colors"),W=l("p",null,[n("Like in most components, you can set a "),l("code",null,"color"),n(" for the spinner.")],-1),q=n(`w-spinner.ma1(fade color="green")
w-spinner.ma1(fade color="amber")
w-spinner.ma1(fade color="orange")
w-spinner.ma1(fade color="error")
w-spinner.ma1(fade color="pink")`),G=n(`<w-spinner fade color="green" class="ma1" />
<w-spinner fade color="amber" class="ma1" />
<w-spinner fade color="orange" class="ma1" />
<w-spinner fade color="error" class="ma1" />
<w-spinner fade color="pink" class="ma1" />`);function H(t,c,u,f,_,d){const a=i("title-link"),o=i("w-spinner"),r=i("example"),v=i("w-button");return p(),m("div",null,[x,e(a,{h2:""},{default:s(()=>[b]),_:1}),e(r,{"content-class":"w-flex justify-center"},{pug:s(()=>[S]),html:s(()=>[y]),default:s(()=>[e(o)]),_:1}),e(a,{h2:""},{default:s(()=>[$]),_:1}),e(r,{"content-class":"w-flex justify-center"},{pug:s(()=>[k]),html:s(()=>[z]),default:s(()=>[e(o,{fade:""})]),_:1}),e(a,{h2:""},{default:s(()=>[j]),_:1}),e(r,{"content-class":"w-flex justify-center"},{pug:s(()=>[T]),html:s(()=>[V]),default:s(()=>[e(o,{bounce:""})]),_:1}),e(a,{h2:""},{default:s(()=>[A]),_:1}),B,e(r,{"content-class":"w-flex"},{pug:s(()=>[C]),html:s(()=>[D]),js:s(()=>[E]),default:s(()=>[e(v,{class:"mr4",onClick:c[0]||(c[0]=te=>t.showSpinner=!t.showSpinner)},{default:s(()=>[N]),_:1}),e(o,{"model-value":t.showSpinner},null,8,["model-value"])]),_:1}),e(a,{h2:""},{default:s(()=>[I]),_:1}),P,e(r,{"content-class":"w-flex justify-center"},{pug:s(()=>[F]),html:s(()=>[L]),default:s(()=>[e(o,{class:"ma1",fade:"",xs:""}),e(o,{class:"ma1",fade:"",sm:""}),e(o,{class:"ma1",fade:"",md:""}),e(o,{class:"ma1",fade:"",lg:""}),e(o,{class:"ma1",fade:"",xl:""}),e(o,{class:"ma1",fade:"",size:"5em"})]),_:1}),e(a,{h2:""},{default:s(()=>[M]),_:1}),W,e(r,{"content-class":"w-flex justify-center"},{pug:s(()=>[q]),html:s(()=>[G]),default:s(()=>[e(o,{class:"ma1",fade:"",color:"green"}),e(o,{class:"ma1",fade:"",color:"amber"}),e(o,{class:"ma1",fade:"",color:"orange"}),e(o,{class:"ma1",fade:"",color:"error"}),e(o,{class:"ma1",fade:"",color:"pink"})]),_:1})])}const J={data:()=>({showSpinner:!1})};var K=h(J,[["render",H]]);const O=l("div",{class:"w-divider my12"},null,-1),Q=n("API");function R(t,c,u,f,_,d){const a=i("title-link"),o=i("component-api");return p(),m("div",null,[O,e(a,{class:"title1",h2:""},{default:s(()=>[Q]),_:1}),e(o,{class:"mt0",items:d.props,descriptions:t.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(o,{items:t.slots,title:"Slots"},null,8,["items"]),e(o,{items:d.events,title:"Events"},null,8,["items"])])}const U={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The <code>value</code> or <code>v-model</code> controls the visibility of the spinner. Any truthy value will show the spinner whereas any falsy value will hide it. If no value/v-model or <code>undefined</code> is provided, the spinner will be visible.',color:'Sets the color of the spinner.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the spinner.",sm:"Sets the size of the spinner.",md:"Sets the size of the spinner.",lg:"Sets the size of the spinner.",xl:"Sets the size of the spinner.",size:"Sets the size of the spinner. Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",bounce:"Sets the style of the spinner.",fade:"Sets the style of the spinner."},X={},Y={},Z={data:()=>({propsDescs:U,slots:X}),computed:{props(){return w.props},events(){return w.emits.reduce((t,c)=>(t[c]={description:Y[c]||""})&&t,{})}}};var ee=h(Z,[["render",R]]);const ne=n("w-spinner");function se(t,c,u,f,_,d){const a=i("ui-component-title"),o=i("examples"),r=i("api");return p(),m("main",null,[e(a,null,{default:s(()=>[ne]),_:1}),e(o),e(r)])}const oe={components:{Examples:K,Api:ee}};var ie=h(oe,[["render",se]]);export{ie as default};
