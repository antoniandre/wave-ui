import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{F as l,h as u}from"./index-BhRaCC4I.js";var d={class:`mt2`},f={class:`mt2`};function p(c,l,u,p,m,h){let g=e(`title-link`),_=e(`w-rating`),v=e(`example`);return s(),i(`div`,null,[a(g,{h2:``},{default:t(()=>[...l[2]||=[o(`Default`,-1)]]),_:1}),a(v,null,{pug:t(()=>[...l[3]||=[o(`w-rating`,-1)]]),html:t(()=>[...l[4]||=[o(`<w-rating></w-rating>
`,-1)]]),default:t(()=>[a(_)]),_:1}),a(g,{h2:``},{default:t(()=>[...l[5]||=[o(`V-model`,-1)]]),_:1}),a(v,null,{pug:t(()=>[...l[8]||=[o(`w-rating(v-model="rating1")
div.mt2
  strong.mr2 v-model:
  code `+n(`{{ rating1 }}`)+`

w-rating.mt4(v-model="rating2")
div.mt2
  strong.mr2 v-model:
  code `+n(`{{ rating2 }}`),-1)]]),html:t(()=>[...l[9]||=[o(`<w-rating v-model="rating1"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+n(`{{ rating1 }}`)+`</code>
</div>

<w-rating class="mt4" v-model="rating2"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+n(`{{ rating2 }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...l[10]||=[o(`data: () => ({
  rating1: 3,
  rating2: 3.42
})
`,-1)]]),default:t(()=>[a(_,{modelValue:c.rating1,"onUpdate:modelValue":l[0]||=e=>c.rating1=e},null,8,[`modelValue`]),r(`div`,d,[l[6]||=r(`strong`,{class:`mr2`},`v-model:`,-1),r(`code`,null,n(c.rating1),1)]),a(_,{class:`mt4`,modelValue:c.rating2,"onUpdate:modelValue":l[1]||=e=>c.rating2=e},null,8,[`modelValue`]),r(`div`,f,[l[7]||=r(`strong`,{class:`mr2`},`v-model:`,-1),r(`code`,null,n(c.rating2),1)])]),_:1}),a(g,{h2:``},{default:t(()=>[...l[11]||=[o(`Color`,-1)]]),_:1}),l[34]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the foreground icons (when on) and a `),r(`code`,null,`bg-color`),o(` for the
background icons when off.`),r(`br`),o(`
The default background color is grey and the default active color is `),r(`code`,null,`primary`),o(`.`)],-1),a(v,null,{pug:t(()=>[...l[12]||=[o(`w-rating.my2(color="green")
br
w-rating.my2(bg-color="light-green" color="yellow")`,-1)]]),html:t(()=>[...l[13]||=[o(`<w-rating
  class="my2"
  color="green">
</w-rating>

<br />

<w-rating
  class="my2"
  bg-color="light-green"
  color="yellow">
</w-rating>
`,-1)]]),default:t(()=>[a(_,{class:`my2`,color:`green`}),l[14]||=r(`br`,null,null,-1),a(_,{class:`my2`,"bg-color":`light-green`,color:`yellow`})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[15]||=[o(`Custom Icons`,-1)]]),_:1}),a(v,null,{pug:t(()=>[...l[16]||=[o(`w-rating.my2(icon="mdi mdi-heart" :model-value="3.4")
br
w-rating.my2(icon="mdi mdi-heart-outline" :model-value="3.4")`,-1)]]),html:t(()=>[...l[17]||=[o(`<w-rating
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
`,-1)]]),default:t(()=>[a(_,{class:`my2`,icon:`mdi mdi-heart`,"model-value":3}),l[18]||=r(`br`,null,null,-1),a(_,{class:`my2`,icon:`mdi mdi-heart-outline`,"model-value":3.4})]),_:1}),a(g,{h2:``,slug:`max`},{default:t(()=>[...l[19]||=[o(`Max (number of buttons)`,-1)]]),_:1}),l[35]||=r(`p`,null,[o(`The number of buttons is set via the `),r(`code`,null,`max`),o(` prop.`),r(`br`),o(`
As expected, the `),r(`code`,null,`max`),o(` prop also sets the maximum number you can set or display via the
`),r(`span`,{class:`code`},`w-rating`),o(` component.`),r(`br`),o(`
When setting a rating, the component will always return an integer between 1 and `),r(`code`,null,`max`),o(` included.`)],-1),a(v,null,{pug:t(()=>[...l[20]||=[o(`w-rating.my2(:model-value="2" :max="3")
br
w-rating.my2(:model-value="6" :max="10")`,-1)]]),html:t(()=>[...l[21]||=[o(`<w-rating
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
`,-1)]]),default:t(()=>[a(_,{class:`my2`,"model-value":2,max:3}),l[22]||=r(`br`,null,null,-1),a(_,{class:`my2`,"model-value":6,max:10})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[23]||=[o(`Sizes`,-1)]]),_:1}),l[36]||=r(`p`,null,[o(`The rating component's size can be controlled via the preset sizes `),r(`code`,null,`xs`),o(`, `),r(`code`,null,`sm`),o(`,
`),r(`code`,null,`md`),o(`, `),r(`code`,null,`lg`),o(`, `),r(`code`,null,`xl`),o(` or via CSS override.
`)],-1),a(v,null,{pug:t(()=>[...l[24]||=[o(`w-rating.my2(xs)
br
w-rating.my2(sm)
br
w-rating.my2(md)
br
w-rating.my2(lg)
br
w-rating.my2(xl)`,-1)]]),html:t(()=>[...l[25]||=[o(`<w-rating class="my2" xs></w-rating>
<br />
<w-rating class="my2" sm></w-rating>
<br />
<w-rating class="my2" md></w-rating>
<br />
<w-rating class="my2" lg></w-rating>
<br />
<w-rating class="my2" xl></w-rating>
`,-1)]]),default:t(()=>[a(_,{class:`my2`,xs:``}),l[26]||=r(`br`,null,null,-1),a(_,{class:`my2`,sm:``}),l[27]||=r(`br`,null,null,-1),a(_,{class:`my2`,md:``}),l[28]||=r(`br`,null,null,-1),a(_,{class:`my2`,lg:``}),l[29]||=r(`br`,null,null,-1),a(_,{class:`my2`,xl:``})]),_:1}),a(g,{h2:``},{default:t(()=>[...l[30]||=[o(`Disabled & readonly`,-1)]]),_:1}),l[37]||=r(`p`,null,`Use the disabled or readonly options to display a rating but prevent user votes.`,-1),a(v,null,{pug:t(()=>[...l[31]||=[o(`w-rating.my2(:model-value="3" disabled)
br
w-rating.my2(:model-value="3" readonly)`,-1)]]),html:t(()=>[...l[32]||=[o(`<w-rating class="my2" :model-value="3" disabled></w-rating>
<br />
<w-rating class="my2" :model-value="3" readonly></w-rating>`,-1)]]),default:t(()=>[a(_,{class:`my2`,"model-value":3,disabled:``}),l[33]||=r(`br`,null,null,-1),a(_,{class:`my2`,"model-value":3,readonly:``})]),_:1})])}var m=c({data:()=>({rating1:3,rating2:3.42})},[[`render`,p]]);function h(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={id:`Sets the native HTML <code>id</code> on the hidden input that carries the rating value. If omitted, Wave UI generates a stable id.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the current rating value. When the user rates, the <code>v-model</code> value will be updated.`,max:`The total count of buttons (usually stars) to display in the rating component.`,icon:`Sets the icon (star by default) of each button of the rating component.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.`,color:`Sets the color of the rating active icons (when hovering or when showing the current rating).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Sets color of the background icons (grey by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,xs:`Sets the size (font-size) of the rating component to extra small.`,sm:`Sets the size (font-size) of the rating component to small.`,md:`Sets the size (font-size) of the rating component to medium.`,lg:`Sets the size (font-size) of the rating component to large.`,xl:`Sets the size (font-size) of the rating component to extra large.`,noRipple:`Removes the ripple animation on click of one of the buttons.`,name:`Provide a native HTML <code>name</code> attribute to the rating component. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the rating component making it unreactive to user interactions.`,readonly:`The rating component will still look like an interactive rating component except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the rating component.`,validators:`<span class="deep-orange">Only for validation, when the rating component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the rating component. Each function will be executed on rating component   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the rating component.`,noBlurValidation:`<span class="deep-orange">Only when the rating is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`},_={item:{description:`Provide a custom content for each item.`,params:{index:`The item index, starting at 1.`}}},v={input:{description:`Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Number]":`The current rating.`}},"update:modelValue":{description:`Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Number]":`The current rating.`}},focus:{description:`Emitted when the rating component is focused (any button).`,params:{"[DOM event object]":`The associated focus DOM event.`}},blur:{description:`Emitted when the rating component is blurred (any button).`,params:{"[DOM event object]":`The associated blur DOM event.`}}},y=c({data:()=>({propsDescs:g,slots:_}),computed:{props(){return{...u.props,...l.props}},events(){return u.emits.reduce((e,t)=>(e[t]=v[t]||{})&&e,{})}}},[[`render`,h]]);function b(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,{slug:`w-rating`},{default:t(()=>[...r[0]||=[o(`w-rating`,-1)]]),_:1}),a(p),a(m)])}var x=c({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};