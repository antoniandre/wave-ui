import{r as m,o as p,g as c,a as e,w as l,b as t,t as d,d as o,_ as b,a0 as y,D as h}from"./index-DM46aIYM.js";const x={class:"mt2"},k={class:"mt2"};function V(a,n,v,w,f,u){const s=m("title-link"),r=m("w-rating"),i=m("example");return p(),c("div",null,[e(s,{h2:""},{default:l(()=>n[2]||(n[2]=[t("Default")])),_:1}),e(i,null,{pug:l(()=>n[3]||(n[3]=[t("w-rating")])),html:l(()=>n[4]||(n[4]=[t(`<w-rating></w-rating>
`)])),default:l(()=>[e(r)]),_:1}),e(s,{h2:""},{default:l(()=>n[5]||(n[5]=[t("V-model")])),_:1}),e(i,null,{pug:l(()=>n[8]||(n[8]=[t(`w-rating(v-model="rating1")
div.mt2
  strong.mr2 v-model:
  code `+d("{{ rating1 }}")+`

w-rating.mt4(v-model="rating2")
div.mt2
  strong.mr2 v-model:
  code `+d("{{ rating2 }}"))])),html:l(()=>n[9]||(n[9]=[t(`<w-rating v-model="rating1"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+d("{{ rating1 }}")+`</code>
</div>

<w-rating class="mt4" v-model="rating2"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+d("{{ rating2 }}")+`</code>
</div>`)])),js:l(()=>n[10]||(n[10]=[t(`data: () => ({
  rating1: 3,
  rating2: 3.42
})
`)])),default:l(()=>[e(r,{modelValue:a.rating1,"onUpdate:modelValue":n[0]||(n[0]=g=>a.rating1=g)},null,8,["modelValue"]),o("div",x,[n[6]||(n[6]=o("strong",{class:"mr2"},"v-model:",-1)),o("code",null,d(a.rating1),1)]),e(r,{class:"mt4",modelValue:a.rating2,"onUpdate:modelValue":n[1]||(n[1]=g=>a.rating2=g)},null,8,["modelValue"]),o("div",k,[n[7]||(n[7]=o("strong",{class:"mr2"},"v-model:",-1)),o("code",null,d(a.rating2),1)])]),_:1}),e(s,{h2:""},{default:l(()=>n[11]||(n[11]=[t("Color")])),_:1}),n[34]||(n[34]=o("p",null,[t("Like in most components, you can set a "),o("code",null,"color"),t(" for the foreground icons (when on) and a "),o("code",null,"bg-color"),t(` for the
background icons when off.`),o("br"),t(`
The default background color is grey and the default active color is `),o("code",null,"primary"),t(".")],-1)),e(i,null,{pug:l(()=>n[12]||(n[12]=[t(`w-rating.my2(color="green")
br
w-rating.my2(bg-color="light-green" color="yellow")`)])),html:l(()=>n[13]||(n[13]=[t(`<w-rating
  class="my2"
  color="green">
</w-rating>

<br />

<w-rating
  class="my2"
  bg-color="light-green"
  color="yellow">
</w-rating>
`)])),default:l(()=>[e(r,{class:"my2",color:"green"}),n[14]||(n[14]=o("br",null,null,-1)),e(r,{class:"my2","bg-color":"light-green",color:"yellow"})]),_:1}),e(s,{h2:""},{default:l(()=>n[15]||(n[15]=[t("Custom Icons")])),_:1}),e(i,null,{pug:l(()=>n[16]||(n[16]=[t(`w-rating.my2(icon="mdi mdi-heart" :model-value="3.4")
br
w-rating.my2(icon="mdi mdi-heart-outline" :model-value="3.4")`)])),html:l(()=>n[17]||(n[17]=[t(`<w-rating
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
`)])),default:l(()=>[e(r,{class:"my2",icon:"mdi mdi-heart","model-value":3}),n[18]||(n[18]=o("br",null,null,-1)),e(r,{class:"my2",icon:"mdi mdi-heart-outline","model-value":3.4})]),_:1}),e(s,{h2:"",slug:"max"},{default:l(()=>n[19]||(n[19]=[t("Max (number of buttons)")])),_:1}),n[35]||(n[35]=o("p",null,[t("The number of buttons is set via the "),o("code",null,"max"),t(" prop."),o("br"),t(`
As expected, the `),o("code",null,"max"),t(` prop also sets the maximum number you can set or display via the
`),o("span",{class:"code"},"w-rating"),t(" component."),o("br"),t(`
When setting a rating, the component will always return an integer between 1 and `),o("code",null,"max"),t(" included.")],-1)),e(i,null,{pug:l(()=>n[20]||(n[20]=[t(`w-rating.my2(:model-value="2" :max="3")
br
w-rating.my2(:model-value="6" :max="10")`)])),html:l(()=>n[21]||(n[21]=[t(`<w-rating
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
`)])),default:l(()=>[e(r,{class:"my2","model-value":2,max:3}),n[22]||(n[22]=o("br",null,null,-1)),e(r,{class:"my2","model-value":6,max:10})]),_:1}),e(s,{h2:""},{default:l(()=>n[23]||(n[23]=[t("Sizes")])),_:1}),n[36]||(n[36]=o("p",null,[t("The rating component's size can be controlled via the preset sizes "),o("code",null,"xs"),t(", "),o("code",null,"sm"),t(`,
`),o("code",null,"md"),t(", "),o("code",null,"lg"),t(", "),o("code",null,"xl"),t(` or via CSS override.
`)],-1)),e(i,null,{pug:l(()=>n[24]||(n[24]=[t(`w-rating.my2(xs)
br
w-rating.my2(sm)
br
w-rating.my2(md)
br
w-rating.my2(lg)
br
w-rating.my2(xl)`)])),html:l(()=>n[25]||(n[25]=[t(`<w-rating class="my2" xs></w-rating>
<br />
<w-rating class="my2" sm></w-rating>
<br />
<w-rating class="my2" md></w-rating>
<br />
<w-rating class="my2" lg></w-rating>
<br />
<w-rating class="my2" xl></w-rating>
`)])),default:l(()=>[e(r,{class:"my2",xs:""}),n[26]||(n[26]=o("br",null,null,-1)),e(r,{class:"my2",sm:""}),n[27]||(n[27]=o("br",null,null,-1)),e(r,{class:"my2",md:""}),n[28]||(n[28]=o("br",null,null,-1)),e(r,{class:"my2",lg:""}),n[29]||(n[29]=o("br",null,null,-1)),e(r,{class:"my2",xl:""})]),_:1}),e(s,{h2:""},{default:l(()=>n[30]||(n[30]=[t("Disabled & readonly")])),_:1}),n[37]||(n[37]=o("p",null,"Use the disabled or readonly options to display a rating but prevent user votes.",-1)),e(i,null,{pug:l(()=>n[31]||(n[31]=[t(`w-rating.my2(:model-value="3" disabled)
br
w-rating.my2(:model-value="3" readonly)`)])),html:l(()=>n[32]||(n[32]=[t(`<w-rating class="my2" :model-value="3" disabled></w-rating>
<br />
<w-rating class="my2" :model-value="3" readonly></w-rating>`)])),default:l(()=>[e(r,{class:"my2","model-value":3,disabled:""}),n[33]||(n[33]=o("br",null,null,-1)),e(r,{class:"my2","model-value":3,readonly:""})]),_:1})])}const $={data:()=>({rating1:3,rating2:3.42})},z=b($,[["render",V]]);function S(a,n,v,w,f,u){const s=m("title-link"),r=m("component-api");return p(),c("div",null,[n[1]||(n[1]=o("div",{class:"w-divider my12"},null,-1)),e(s,{class:"title1",h2:""},{default:l(()=>n[0]||(n[0]=[t("API")])),_:1}),e(r,{class:"mt0",items:u.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(r,{items:a.slots,title:"Slots"},null,8,["items"]),e(r,{items:u.events,title:"Events"},null,8,["items"])])}const T={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the current rating value. When the user rates, the <code>v-model</code> value will be updated.',max:"The total count of buttons (usually stars) to display in the rating component.",icon:"Sets the icon (star by default) of each button of the rating component.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",color:'Sets the color of the rating active icons (when hovering or when showing the current rating).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Sets color of the background icons (grey by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size (font-size) of the rating component to extra small.",sm:"Sets the size (font-size) of the rating component to small.",md:"Sets the size (font-size) of the rating component to medium.",lg:"Sets the size (font-size) of the rating component to large.",xl:"Sets the size (font-size) of the rating component to extra large.",noRipple:"Removes the ripple animation on click of one of the buttons.",name:"Provide a native HTML <code>name</code> attribute to the rating component. If not provided, a unique name will be computed.",disabled:"Disables the rating component making it unreactive to user interactions.",readonly:"The rating component will still look like an interactive rating component except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the rating component.",validators:'<span class="deep-orange">Only for validation, when the rating component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the rating component. Each function will be executed on rating component   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the rating component.'},D={item:{description:"Provide a custom content for each item.",params:{index:"The item index, starting at 1."}}},E={input:{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current rating."}},"update:modelValue":{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current rating."}},focus:{description:"Emitted when the rating component is focused (any button).",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted when the rating component is blurred (any button).",params:{"[DOM event object]":"The associated blur DOM event."}}},A={data:()=>({propsDescs:T,slots:D}),computed:{props(){return{...y.props,...h.props}},events(){return y.emits.reduce((a,n)=>(a[n]=E[n]||{})&&a,{})}}},M=b(A,[["render",S]]);function C(a,n,v,w,f,u){const s=m("ui-component-title"),r=m("examples"),i=m("api");return p(),c("main",null,[e(s,{slug:"w-rating"},{default:l(()=>n[0]||(n[0]=[t("w-rating")])),_:1}),e(r),e(i)])}const P={components:{Examples:z,Api:M}},O=b(P,[["render",C]]);export{O as default};
