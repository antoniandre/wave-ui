import{r as c,o as g,g as p,a as n,w as o,b as e,t as d,d as t,_ as h,a1 as _,C as f}from"./index.bf2cfd71.js";const y={class:"mt2"},x=t("strong",{class:"mr2"},"v-model:",-1),k={class:"mt2"},V=t("strong",{class:"mr2"},"v-model:",-1),$=t("p",null,[e("Like in most components, you can set a "),t("code",null,"color"),e(" for the foreground icons (when on) and a "),t("code",null,"bg-color"),e(` for the
background icons when off.`),t("br"),e(`
The default background color is grey and the default active color is `),t("code",null,"primary"),e(".")],-1),z=t("br",null,null,-1),S=t("br",null,null,-1),T=t("p",null,[e("The number of buttons is set via the "),t("code",null,"max"),e(" prop."),t("br"),e(`
As expected, the `),t("code",null,"max"),e(` prop also sets the maximum number you can set or display via the
`),t("span",{class:"code"},"w-rating"),e(" component."),t("br"),e(`
When setting a rating, the component will always return an integer between 1 and `),t("code",null,"max"),e(" included.")],-1),D=t("br",null,null,-1),E=t("p",null,[e("The rating component's size can be controlled via the preset sizes "),t("code",null,"xs"),e(", "),t("code",null,"sm"),e(`,
`),t("code",null,"md"),e(", "),t("code",null,"lg"),e(", "),t("code",null,"xl"),e(` or via CSS override.
`)],-1),A=t("br",null,null,-1),M=t("br",null,null,-1),C=t("br",null,null,-1),P=t("br",null,null,-1),N=t("p",null,"Use the disabled or readonly options to display a rating but prevent user votes.",-1),O=t("br",null,null,-1);function U(l,s,b,v,w,m){const r=c("title-link"),a=c("w-rating"),i=c("example");return g(),p("div",null,[n(r,{h2:""},{default:o(()=>[e("Default")]),_:1}),n(i,null,{pug:o(()=>[e("w-rating")]),html:o(()=>[e(`<w-rating></w-rating>
`)]),default:o(()=>[n(a)]),_:1}),n(r,{h2:""},{default:o(()=>[e("V-model")]),_:1}),n(i,null,{pug:o(()=>[e(`w-rating(v-model="rating1")
div.mt2
  strong.mr2 v-model:
  code `+d("{{ rating1 }}")+`

w-rating.mt4(v-model="rating2")
div.mt2
  strong.mr2 v-model:
  code `+d("{{ rating2 }}"))]),html:o(()=>[e(`<w-rating v-model="rating1"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+d("{{ rating1 }}")+`</code>
</div>

<w-rating class="mt4" v-model="rating2"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+d("{{ rating2 }}")+`</code>
</div>`)]),js:o(()=>[e(`data: () => ({
  rating1: 3,
  rating2: 3.42
})
`)]),default:o(()=>[n(a,{modelValue:l.rating1,"onUpdate:modelValue":s[0]||(s[0]=u=>l.rating1=u)},null,8,["modelValue"]),t("div",y,[x,t("code",null,d(l.rating1),1)]),n(a,{class:"mt4",modelValue:l.rating2,"onUpdate:modelValue":s[1]||(s[1]=u=>l.rating2=u)},null,8,["modelValue"]),t("div",k,[V,t("code",null,d(l.rating2),1)])]),_:1}),n(r,{h2:""},{default:o(()=>[e("Color")]),_:1}),$,n(i,null,{pug:o(()=>[e(`w-rating.my2(color="green")
br
w-rating.my2(bg-color="light-green" color="yellow")`)]),html:o(()=>[e(`<w-rating
  class="my2"
  color="green">
</w-rating>

<br />

<w-rating
  class="my2"
  bg-color="light-green"
  color="yellow">
</w-rating>
`)]),default:o(()=>[n(a,{class:"my2",color:"green"}),z,n(a,{class:"my2","bg-color":"light-green",color:"yellow"})]),_:1}),n(r,{h2:""},{default:o(()=>[e("Custom Icons")]),_:1}),n(i,null,{pug:o(()=>[e(`w-rating.my2(icon="mdi mdi-heart" :model-value="3.4")
br
w-rating.my2(icon="mdi mdi-heart-outline" :model-value="3.4")`)]),html:o(()=>[e(`<w-rating
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
`)]),default:o(()=>[n(a,{class:"my2",icon:"mdi mdi-heart","model-value":3}),S,n(a,{class:"my2",icon:"mdi mdi-heart-outline","model-value":3.4})]),_:1}),n(r,{h2:"",slug:"max"},{default:o(()=>[e("Max (number of buttons)")]),_:1}),T,n(i,null,{pug:o(()=>[e(`w-rating.my2(:model-value="2" :max="3")
br
w-rating.my2(:model-value="6" :max="10")`)]),html:o(()=>[e(`<w-rating
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
`)]),default:o(()=>[n(a,{class:"my2","model-value":2,max:3}),D,n(a,{class:"my2","model-value":6,max:10})]),_:1}),n(r,{h2:""},{default:o(()=>[e("Sizes")]),_:1}),E,n(i,null,{pug:o(()=>[e(`w-rating.my2(xs)
br
w-rating.my2(sm)
br
w-rating.my2(md)
br
w-rating.my2(lg)
br
w-rating.my2(xl)`)]),html:o(()=>[e(`<w-rating class="my2" xs></w-rating>
<br />
<w-rating class="my2" sm></w-rating>
<br />
<w-rating class="my2" md></w-rating>
<br />
<w-rating class="my2" lg></w-rating>
<br />
<w-rating class="my2" xl></w-rating>
`)]),default:o(()=>[n(a,{class:"my2",xs:""}),A,n(a,{class:"my2",sm:""}),M,n(a,{class:"my2",md:""}),C,n(a,{class:"my2",lg:""}),P,n(a,{class:"my2",xl:""})]),_:1}),n(r,{h2:""},{default:o(()=>[e("Disabled & readonly")]),_:1}),N,n(i,null,{pug:o(()=>[e(`w-rating.my2(:model-value="3" disabled)
br
w-rating.my2(:model-value="3" readonly)`)]),html:o(()=>[e(`<w-rating class="my2" :model-value="3" disabled></w-rating>
<br />
<w-rating class="my2" :model-value="3" readonly></w-rating>`)]),default:o(()=>[n(a,{class:"my2","model-value":3,disabled:""}),O,n(a,{class:"my2","model-value":3,readonly:""})]),_:1})])}const W={data:()=>({rating1:3,rating2:3.42})},q=h(W,[["render",U]]),B=t("div",{class:"w-divider my12"},null,-1);function I(l,s,b,v,w,m){const r=c("title-link"),a=c("component-api");return g(),p("div",null,[B,n(r,{class:"title1",h2:""},{default:o(()=>[e("API")]),_:1}),n(a,{class:"mt0",items:m.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(a,{items:l.slots,title:"Slots"},null,8,["items"]),n(a,{items:m.events,title:"Events"},null,8,["items"])])}const L={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the current rating value. When the user rates, the <code>v-model</code> value will be updated.',max:"The total count of buttons (usually stars) to display in the rating component.",icon:"Sets the icon (star by default) of each button of the rating component.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",color:'Sets the color of the rating active icons (when hovering or when showing the current rating).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Sets color of the background icons (grey by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size (font-size) of the rating component to extra small.",sm:"Sets the size (font-size) of the rating component to small.",md:"Sets the size (font-size) of the rating component to medium.",lg:"Sets the size (font-size) of the rating component to large.",xl:"Sets the size (font-size) of the rating component to extra large.",noRipple:"Removes the ripple animation on click of one of the buttons.",name:"Provide a native HTML <code>name</code> attribute to the rating component. If not provided, a unique name will be computed.",disabled:"Disables the rating component making it unreactive to user interactions.",readonly:"The rating component will still look like an interactive rating component except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the rating component.",validators:'<span class="deep-orange">Only for validation, when the rating component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the rating component. Each function will be executed on rating component   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the rating component.'},R={item:{description:"Provide a custom content for each item.",params:{index:"The item index, starting at 1."}}},j={input:{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current rating."}},"update:modelValue":{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current rating."}},focus:{description:"Emitted when the rating component is focused (any button).",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted when the rating component is blurred (any button).",params:{"[DOM event object]":"The associated blur DOM event."}}},H={data:()=>({propsDescs:L,slots:R}),computed:{props(){return{..._.props,...f.props}},events(){return _.emits.reduce((l,s)=>(l[s]=j[s]||{})&&l,{})}}},F=h(H,[["render",I]]);function G(l,s,b,v,w,m){const r=c("ui-component-title"),a=c("examples"),i=c("api");return g(),p("main",null,[n(r,{slug:"w-rating"},{default:o(()=>[e("w-rating")]),_:1}),n(a),n(i)])}const J={components:{Examples:q,Api:F}},Q=h(J,[["render",G]]);export{Q as default};
