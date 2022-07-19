import{r as c,o as g,f as h,a as n,w as o,b as t,h as d,e,_ as p,bT as w,bz as f}from"./index.6ba25376.js";const y=e("Default"),x=e("w-rating"),k=e(`<w-rating></w-rating>
`),$=e("V-model"),V={class:"mt2"},z=t("strong",{class:"mr2"},"v-model:",-1),T={class:"mt2"},S=t("strong",{class:"mr2"},"v-model:",-1),D=e(`w-rating(v-model="rating1")
div.mt2
  strong.mr2 v-model:
  code `+d("{{ rating1 }}")+`

w-rating.mt4(v-model="rating2")
div.mt2
  strong.mr2 v-model:
  code `+d("{{ rating2 }}")),E=e(`<w-rating v-model="rating1"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+d("{{ rating1 }}")+`</code>
</div>

<w-rating class="mt4" v-model="rating2"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+d("{{ rating2 }}")+`</code>
</div>`),A=e(`data: () => ({
  rating1: 3,
  rating2: 3.42
})
`),M=e("Color"),C=t("p",null,[e("Like in most components, you can set a "),t("code",null,"color"),e(" for the foreground icons (when on) and a "),t("code",null,"bg-color"),e(` for the
background icons when off.`),t("br"),e(`
The default background color is grey and the default active color is `),t("code",null,"primary"),e(".")],-1),P=t("br",null,null,-1),N=e(`w-rating.my2(color="green")
br
w-rating.my2(bg-color="light-green" color="yellow")`),O=e(`<w-rating
  class="my2"
  color="green">
</w-rating>

<br />

<w-rating
  class="my2"
  bg-color="light-green"
  color="yellow">
</w-rating>
`),U=e("Custom Icons"),W=t("br",null,null,-1),q=e(`w-rating.my2(icon="mdi mdi-heart" :model-value="3.4")
br
w-rating.my2(icon="mdi mdi-heart-outline" :model-value="3.4")`),B=e(`<w-rating
  class="my2"
  icon="mdi mdi-heart"
  :model-value="3.4">
</w-rating>

<br />

<w-rating
  class="my2"
  icon="mdi mdi-heart-outline"
  :model-value="3.4">
</w-rating>
`),I=e("Max (number of buttons)"),L=t("p",null,[e("The number of buttons is set via the "),t("code",null,"max"),e(" prop."),t("br"),e(`
As expected, the `),t("code",null,"max"),e(` prop also sets the maximum number you can set or display via the
`),t("span",{class:"code"},"w-rating"),e(" component."),t("br"),e(`
When setting a rating, the component will always return an integer between 1 and `),t("code",null,"max"),e(" included.")],-1),R=t("br",null,null,-1),j=e(`w-rating.my2(:model-value="2" :max="3")
br
w-rating.my2(:model-value="6" :max="10")`),H=e(`<w-rating
  :model-value="2"
  class="my2"
  :max="3">
</w-rating>
<br />
<w-rating
  :model-value="6"
  class="my2"
  :max="10">
</w-rating>
`),F=e("Sizes"),G=t("p",null,[e("The rating component's size can be controlled via the preset sizes "),t("code",null,"xs"),e(", "),t("code",null,"sm"),e(`,
`),t("code",null,"md"),e(", "),t("code",null,"lg"),e(", "),t("code",null,"xl"),e(` or via CSS override.
`)],-1),J=t("br",null,null,-1),K=t("br",null,null,-1),Q=t("br",null,null,-1),X=t("br",null,null,-1),Y=e(`w-rating.my2(xs)
br
w-rating.my2(sm)
br
w-rating.my2(md)
br
w-rating.my2(lg)
br
w-rating.my2(xl)`),Z=e(`<w-rating class="my2" xs></w-rating>
<br />
<w-rating class="my2" sm></w-rating>
<br />
<w-rating class="my2" md></w-rating>
<br />
<w-rating class="my2" lg></w-rating>
<br />
<w-rating class="my2" xl></w-rating>
`),ee=e("Disabled & readonly"),ne=t("p",null,"Use the disabled or readonly options to display a rating but prevent user votes.",-1),te=t("br",null,null,-1),oe=e(`w-rating.my2(:model-value="3" disabled)
br
w-rating.my2(:model-value="3" readonly)`),ae=e(`<w-rating class="my2" :model-value="3" disabled></w-rating>
<br />
<w-rating class="my2" :model-value="3" readonly></w-rating>`);function se(s,r,_,v,b,m){const l=c("title-link"),a=c("w-rating"),i=c("example");return g(),h("div",null,[n(l,{h2:""},{default:o(()=>[y]),_:1}),n(i,null,{pug:o(()=>[x]),html:o(()=>[k]),default:o(()=>[n(a)]),_:1}),n(l,{h2:""},{default:o(()=>[$]),_:1}),n(i,null,{pug:o(()=>[D]),html:o(()=>[E]),js:o(()=>[A]),default:o(()=>[n(a,{modelValue:s.rating1,"onUpdate:modelValue":r[0]||(r[0]=u=>s.rating1=u)},null,8,["modelValue"]),t("div",V,[z,t("code",null,d(s.rating1),1)]),n(a,{class:"mt4",modelValue:s.rating2,"onUpdate:modelValue":r[1]||(r[1]=u=>s.rating2=u)},null,8,["modelValue"]),t("div",T,[S,t("code",null,d(s.rating2),1)])]),_:1}),n(l,{h2:""},{default:o(()=>[M]),_:1}),C,n(i,null,{pug:o(()=>[N]),html:o(()=>[O]),default:o(()=>[n(a,{class:"my2",color:"green"}),P,n(a,{class:"my2","bg-color":"light-green",color:"yellow"})]),_:1}),n(l,{h2:""},{default:o(()=>[U]),_:1}),n(i,null,{pug:o(()=>[q]),html:o(()=>[B]),default:o(()=>[n(a,{class:"my2",icon:"mdi mdi-heart","model-value":3}),W,n(a,{class:"my2",icon:"mdi mdi-heart-outline","model-value":3.4},null,8,["model-value"])]),_:1}),n(l,{h2:"",slug:"max"},{default:o(()=>[I]),_:1}),L,n(i,null,{pug:o(()=>[j]),html:o(()=>[H]),default:o(()=>[n(a,{class:"my2","model-value":2,max:3}),R,n(a,{class:"my2","model-value":6,max:10})]),_:1}),n(l,{h2:""},{default:o(()=>[F]),_:1}),G,n(i,null,{pug:o(()=>[Y]),html:o(()=>[Z]),default:o(()=>[n(a,{class:"my2",xs:""}),J,n(a,{class:"my2",sm:""}),K,n(a,{class:"my2",md:""}),Q,n(a,{class:"my2",lg:""}),X,n(a,{class:"my2",xl:""})]),_:1}),n(l,{h2:""},{default:o(()=>[ee]),_:1}),ne,n(i,null,{pug:o(()=>[oe]),html:o(()=>[ae]),default:o(()=>[n(a,{class:"my2","model-value":3,disabled:""}),te,n(a,{class:"my2","model-value":3,readonly:""})]),_:1})])}const le={data:()=>({rating1:3,rating2:3.42})};var re=p(le,[["render",se]]);const ie=t("div",{class:"w-divider my12"},null,-1),ce=e("API");function de(s,r,_,v,b,m){const l=c("title-link"),a=c("component-api");return g(),h("div",null,[ie,n(l,{class:"title1",h2:""},{default:o(()=>[ce]),_:1}),n(a,{class:"mt0",items:m.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(a,{items:s.slots,title:"Slots"},null,8,["items"]),n(a,{items:m.events,title:"Events"},null,8,["items"])])}const me={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the current rating value. When the user rates, the <code>v-model</code> value will be updated.',max:"The total count of buttons (usually stars) to display in the rating component.",icon:"Sets the icon (star by default) of each button of the rating component.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",color:'Sets the color of the rating active icons (when hovering or when showing the current rating).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Sets color of the background icons (grey by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the rating component (font-size).",sm:"Sets the size of the rating component (font-size).",md:"Sets the size of the rating component (font-size).",lg:"Sets the size of the rating component (font-size).",xl:"Sets the size of the rating component (font-size).",noRipple:"Removes the ripple animation on click of one of the buttons.",name:"Provide a native HTML <code>name</code> attribute to the rating component. If not provided, a unique name will be computed.",disabled:"Disables the rating component making it unreactive to user interactions.",readonly:"The rating component will still look like an interactive rating component except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the rating component.",validators:'<span class="deep-orange">Only for validation, when the rating component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the rating component. Each function will be executed on rating component   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the rating component.'},ue={item:{description:"Provide a custom content for each item.",params:{index:"The item index, starting at 1."}}},ge={input:{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current rating."}},"update:modelValue":{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current rating."}},focus:{description:"Emitted when the rating component is focused (any button).",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted when the rating component is blurred (any button).",params:{"[DOM event object]":"The associated blur DOM event."}}},he={data:()=>({propsDescs:me,slots:ue}),computed:{props(){return{...w.props,...f.props}},events(){return w.emits.reduce((s,r)=>(s[r]=ge[r]||{})&&s,{})}}};var pe=p(he,[["render",de]]);const _e=e("w-rating");function ve(s,r,_,v,b,m){const l=c("ui-component-title"),a=c("examples"),i=c("api");return g(),h("main",null,[n(l,{slug:"w-rating"},{default:o(()=>[_e]),_:1}),n(a),n(i)])}const be={components:{Examples:re,Api:pe}};var fe=p(be,[["render",ve]]);export{fe as default};
