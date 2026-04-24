import{N as e,U as t,c as n,d as r,g as i,h as a,k as o,yt as s}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as c}from"./_plugin-vue_export-helper-S3RvzygF.js";import{t as l}from"./form-elements-dhQrrM2Q.js";import{h as u}from"./index-CKcZQ2YR.js";var d={class:`mt2`},f={class:`mt2`};function p(c,l,u,p,m,h){let g=e(`title-link`),_=e(`w-rating`),v=e(`example`);return o(),r(`div`,null,[i(g,{h2:``},{default:t(()=>[...l[2]||=[a(`Default`,-1)]]),_:1}),i(v,null,{pug:t(()=>[...l[3]||=[a(`w-rating`,-1)]]),html:t(()=>[...l[4]||=[a(`<w-rating></w-rating>
`,-1)]]),default:t(()=>[i(_)]),_:1}),i(g,{h2:``},{default:t(()=>[...l[5]||=[a(`V-model`,-1)]]),_:1}),i(v,null,{pug:t(()=>[...l[8]||=[a(`w-rating(v-model="rating1")
div.mt2
  strong.mr2 v-model:
  code `+s(`{{ rating1 }}`)+`

w-rating.mt4(v-model="rating2")
div.mt2
  strong.mr2 v-model:
  code `+s(`{{ rating2 }}`),-1)]]),html:t(()=>[...l[9]||=[a(`<w-rating v-model="rating1"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+s(`{{ rating1 }}`)+`</code>
</div>

<w-rating class="mt4" v-model="rating2"></w-rating>
<div class="mt2">
  <strong class="mr2">v-model:</strong>
  <code>`+s(`{{ rating2 }}`)+`</code>
</div>`,-1)]]),js:t(()=>[...l[10]||=[a(`data: () => ({
  rating1: 3,
  rating2: 3.42
})
`,-1)]]),default:t(()=>[i(_,{modelValue:c.rating1,"onUpdate:modelValue":l[0]||=e=>c.rating1=e},null,8,[`modelValue`]),n(`div`,d,[l[6]||=n(`strong`,{class:`mr2`},`v-model:`,-1),n(`code`,null,s(c.rating1),1)]),i(_,{class:`mt4`,modelValue:c.rating2,"onUpdate:modelValue":l[1]||=e=>c.rating2=e},null,8,[`modelValue`]),n(`div`,f,[l[7]||=n(`strong`,{class:`mr2`},`v-model:`,-1),n(`code`,null,s(c.rating2),1)])]),_:1}),i(g,{h2:``},{default:t(()=>[...l[11]||=[a(`Color`,-1)]]),_:1}),l[34]||=n(`p`,null,[a(`Like in most components, you can set a `),n(`code`,null,`color`),a(` for the foreground icons (when on) and a `),n(`code`,null,`bg-color`),a(` for the
background icons when off.`),n(`br`),a(`
The default background color is grey and the default active color is `),n(`code`,null,`primary`),a(`.`)],-1),i(v,null,{pug:t(()=>[...l[12]||=[a(`w-rating.my2(color="green")
br
w-rating.my2(bg-color="light-green" color="yellow")`,-1)]]),html:t(()=>[...l[13]||=[a(`<w-rating
  class="my2"
  color="green">
</w-rating>

<br />

<w-rating
  class="my2"
  bg-color="light-green"
  color="yellow">
</w-rating>
`,-1)]]),default:t(()=>[i(_,{class:`my2`,color:`green`}),l[14]||=n(`br`,null,null,-1),i(_,{class:`my2`,"bg-color":`light-green`,color:`yellow`})]),_:1}),i(g,{h2:``},{default:t(()=>[...l[15]||=[a(`Custom Icons`,-1)]]),_:1}),i(v,null,{pug:t(()=>[...l[16]||=[a(`w-rating.my2(icon="mdi mdi-heart" :model-value="3.4")
br
w-rating.my2(icon="mdi mdi-heart-outline" :model-value="3.4")`,-1)]]),html:t(()=>[...l[17]||=[a(`<w-rating
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
`,-1)]]),default:t(()=>[i(_,{class:`my2`,icon:`mdi mdi-heart`,"model-value":3}),l[18]||=n(`br`,null,null,-1),i(_,{class:`my2`,icon:`mdi mdi-heart-outline`,"model-value":3.4})]),_:1}),i(g,{h2:``,slug:`max`},{default:t(()=>[...l[19]||=[a(`Max (number of buttons)`,-1)]]),_:1}),l[35]||=n(`p`,null,[a(`The number of buttons is set via the `),n(`code`,null,`max`),a(` prop.`),n(`br`),a(`
As expected, the `),n(`code`,null,`max`),a(` prop also sets the maximum number you can set or display via the
`),n(`span`,{class:`code`},`w-rating`),a(` component.`),n(`br`),a(`
When setting a rating, the component will always return an integer between 1 and `),n(`code`,null,`max`),a(` included.`)],-1),i(v,null,{pug:t(()=>[...l[20]||=[a(`w-rating.my2(:model-value="2" :max="3")
br
w-rating.my2(:model-value="6" :max="10")`,-1)]]),html:t(()=>[...l[21]||=[a(`<w-rating
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
`,-1)]]),default:t(()=>[i(_,{class:`my2`,"model-value":2,max:3}),l[22]||=n(`br`,null,null,-1),i(_,{class:`my2`,"model-value":6,max:10})]),_:1}),i(g,{h2:``},{default:t(()=>[...l[23]||=[a(`Sizes`,-1)]]),_:1}),l[36]||=n(`p`,null,[a(`The rating component's size can be controlled via the preset sizes `),n(`code`,null,`xs`),a(`, `),n(`code`,null,`sm`),a(`,
`),n(`code`,null,`md`),a(`, `),n(`code`,null,`lg`),a(`, `),n(`code`,null,`xl`),a(` or via CSS override.
`)],-1),i(v,null,{pug:t(()=>[...l[24]||=[a(`w-rating.my2(xs)
br
w-rating.my2(sm)
br
w-rating.my2(md)
br
w-rating.my2(lg)
br
w-rating.my2(xl)`,-1)]]),html:t(()=>[...l[25]||=[a(`<w-rating class="my2" xs></w-rating>
<br />
<w-rating class="my2" sm></w-rating>
<br />
<w-rating class="my2" md></w-rating>
<br />
<w-rating class="my2" lg></w-rating>
<br />
<w-rating class="my2" xl></w-rating>
`,-1)]]),default:t(()=>[i(_,{class:`my2`,xs:``}),l[26]||=n(`br`,null,null,-1),i(_,{class:`my2`,sm:``}),l[27]||=n(`br`,null,null,-1),i(_,{class:`my2`,md:``}),l[28]||=n(`br`,null,null,-1),i(_,{class:`my2`,lg:``}),l[29]||=n(`br`,null,null,-1),i(_,{class:`my2`,xl:``})]),_:1}),i(g,{h2:``},{default:t(()=>[...l[30]||=[a(`Disabled & readonly`,-1)]]),_:1}),l[37]||=n(`p`,null,`Use the disabled or readonly options to display a rating but prevent user votes.`,-1),i(v,null,{pug:t(()=>[...l[31]||=[a(`w-rating.my2(:model-value="3" disabled)
br
w-rating.my2(:model-value="3" readonly)`,-1)]]),html:t(()=>[...l[32]||=[a(`<w-rating class="my2" :model-value="3" disabled></w-rating>
<br />
<w-rating class="my2" :model-value="3" readonly></w-rating>`,-1)]]),default:t(()=>[i(_,{class:`my2`,"model-value":3,disabled:``}),l[33]||=n(`br`,null,null,-1),i(_,{class:`my2`,"model-value":3,readonly:``})]),_:1})])}var m=c({data:()=>({rating1:3,rating2:3.42})},[[`render`,p]]);function h(s,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var g={id:`Sets the native HTML <code>id</code> on the hidden input that carries the rating value. If omitted, Wave UI generates a stable id.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>Dictates the current rating value. When the user rates, the <code>v-model</code> value will be updated.`,max:`The total count of buttons (usually stars) to display in the rating component.`,icon:`Sets the icon (star by default) of each button of the rating component.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.`,color:`Sets the color of the rating active icons (when hovering or when showing the current rating).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Sets color of the background icons (grey by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,xs:`Sets the size (font-size) of the rating component to extra small.`,sm:`Sets the size (font-size) of the rating component to small.`,md:`Sets the size (font-size) of the rating component to medium.`,lg:`Sets the size (font-size) of the rating component to large.`,xl:`Sets the size (font-size) of the rating component to extra large.`,noRipple:`Removes the ripple animation on click of one of the buttons.`,name:`Provide a native HTML <code>name</code> attribute to the rating component. If omitted, a unique value is generated with the same stable mechanism as the default id (SSR-safe).`,disabled:`Disables the rating component making it unreactive to user interactions.`,readonly:`The rating component will still look like an interactive rating component except that it is read-only: its current value cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the rating component.`,validators:`<span class="deep-orange">Only for validation, when the rating component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the rating component. Each function will be executed on rating component   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the rating component.`,noBlurValidation:`<span class="deep-orange">Only when the rating is in a <strong class="code">w-form</strong> with <code>validators</code>.</span><br>When <code>true</code>, blur does not validate this field. When <code>false</code>, blur always validates even if the form has <code>no-blur-validation</code>. When unset, inherit the form setting.`},_={item:{description:`Provide a custom content for each item.`,params:{index:`The item index, starting at 1.`}}},v={input:{description:`Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Number]":`The current rating.`}},"update:modelValue":{description:`Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Number]":`The current rating.`}},focus:{description:`Emitted when the rating component is focused (any button).`,params:{"[DOM event object]":`The associated focus DOM event.`}},blur:{description:`Emitted when the rating component is blurred (any button).`,params:{"[DOM event object]":`The associated blur DOM event.`}}},y=c({data:()=>({propsDescs:g,slots:_}),computed:{props(){return{...u.props,...l.props}},events(){return u.emits.reduce((e,t)=>(e[t]=v[t]||{})&&e,{})}}},[[`render`,h]]);function b(n,s,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return o(),r(`main`,null,[i(f,{slug:`w-rating`},{default:t(()=>[...s[0]||=[a(`w-rating`,-1)]]),_:1}),i(p),i(m)])}var x=c({components:{Examples:m,Api:y}},[[`render`,b]]);export{x as default};