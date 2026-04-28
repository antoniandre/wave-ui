import{N as e,W as t,c as n,d as r,g as i,h as a,k as o,m as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{d as l}from"./index-BhRaCC4I.js";function u(c,l,u,d,f,p){let m=e(`title-link`),h=e(`w-spinner`),g=e(`example`),_=e(`w-button`);return o(),r(`div`,null,[l[21]||=n(`p`,null,[a(`If you want a different style than the `),n(`span`,{class:`code`},`w-progress`),a(` component, the spinner is a light
alternative that you can easily use anywhere.
`)],-1),i(m,{h2:``},{default:t(()=>[...l[1]||=[a(`Three dots (default)`,-1)]]),_:1}),i(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[2]||=[a(`w-spinner`,-1)]]),html:t(()=>[...l[3]||=[a(`<w-spinner />
`,-1)]]),default:t(()=>[i(h)]),_:1}),i(m,{h2:``},{default:t(()=>[...l[4]||=[a(`Fade`,-1)]]),_:1}),i(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[5]||=[a(`w-spinner(fade)`,-1)]]),html:t(()=>[...l[6]||=[a(`<w-spinner fade />
`,-1)]]),default:t(()=>[i(h,{fade:``})]),_:1}),i(m,{h2:``},{default:t(()=>[...l[7]||=[a(`Bounce`,-1)]]),_:1}),i(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[8]||=[a(`w-spinner(bounce)`,-1)]]),html:t(()=>[...l[9]||=[a(`<w-spinner bounce />
`,-1)]]),default:t(()=>[i(h,{bounce:``})]),_:1}),i(m,{h2:``},{default:t(()=>[...l[10]||=[a(`Model-value or v-model`,-1)]]),_:1}),l[22]||=n(`p`,null,[a(`Both the `),n(`code`,null,`model-value`),a(` (or `),n(`code`,null,`value`),a(` for Vue 2) and `),n(`code`,null,`v-model`),a(` will control the spinner visibility, but there is not
much point in using a `),n(`code`,null,`v-model`),a(` here as the spinner will never emit a value update.`)],-1),i(g,{"content-class":`w-flex`},{pug:t(()=>[...l[12]||=[a(`w-button.mr4(@click="showSpinner = !showSpinner") Toggle spinner
w-spinner(:model-value="showSpinner")`,-1)]]),html:t(()=>[...l[13]||=[a(`<w-button @click="showSpinner = !showSpinner">Toggle spinner</w-button>
<w-spinner :model-value="showSpinner" />`,-1)]]),js:t(()=>[...l[14]||=[a(`data: () => ({
  showSpinner: false
})
`,-1)]]),default:t(()=>[i(_,{class:`mr4`,onClick:l[0]||=e=>c.showSpinner=!c.showSpinner},{default:t(()=>[...l[11]||=[a(`Toggle spinner`,-1)]]),_:1}),i(h,{"model-value":c.showSpinner},null,8,[`model-value`])]),_:1}),i(m,{h2:``},{default:t(()=>[...l[15]||=[a(`Sizes`,-1)]]),_:1}),l[23]||=s(`<p>The spinner size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code>, or explicit <code>size</code> prop.</p>`,1),i(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[16]||=[a(`w-flex(align-center justify-center)
  w-spinner.ma1(fade xs)
  w-spinner.ma1(fade sm)
  w-spinner.ma1(fade md)
  w-spinner.ma1(fade lg)
  w-spinner.ma1(fade xl)
  w-spinner.ma1(fade size="5em")`,-1)]]),html:t(()=>[...l[17]||=[a(`<w-flex align-center justify-center>
  <w-spinner fade xs class="ma1" />
  <w-spinner fade sm class="ma1" />
  <w-spinner fade md class="ma1" />
  <w-spinner fade lg class="ma1" />
  <w-spinner fade xl class="ma1" />
  <w-spinner fade size="5em" class="ma1" />
</w-flex>
`,-1)]]),default:t(()=>[i(h,{class:`ma1`,fade:``,xs:``}),i(h,{class:`ma1`,fade:``,sm:``}),i(h,{class:`ma1`,fade:``,md:``}),i(h,{class:`ma1`,fade:``,lg:``}),i(h,{class:`ma1`,fade:``,xl:``}),i(h,{class:`ma1`,fade:``,size:`5em`})]),_:1}),i(m,{h2:``},{default:t(()=>[...l[18]||=[a(`Colors`,-1)]]),_:1}),l[24]||=n(`p`,null,[a(`Like in most components, you can set a `),n(`code`,null,`color`),a(` for the spinner.`)],-1),i(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[19]||=[a(`w-spinner.ma1(fade color="green")
w-spinner.ma1(fade color="amber")
w-spinner.ma1(fade color="orange")
w-spinner.ma1(fade color="error")
w-spinner.ma1(fade color="pink")`,-1)]]),html:t(()=>[...l[20]||=[a(`<w-spinner fade color="green" class="ma1" />
<w-spinner fade color="amber" class="ma1" />
<w-spinner fade color="orange" class="ma1" />
<w-spinner fade color="error" class="ma1" />
<w-spinner fade color="pink" class="ma1" />`,-1)]]),default:t(()=>[i(h,{class:`ma1`,fade:``,color:`green`}),i(h,{class:`ma1`,fade:``,color:`amber`}),i(h,{class:`ma1`,fade:``,color:`orange`}),i(h,{class:`ma1`,fade:``,color:`error`}),i(h,{class:`ma1`,fade:``,color:`pink`})]),_:1})])}var d=c({data:()=>({showSpinner:!1})},[[`render`,u]]);function f(s,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var p={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>The <code>value</code> or <code>v-model</code> controls the visibility of the spinner. Any truthy value will show the spinner whereas any falsy value will hide it. If no value/v-model or <code>undefined</code> is provided, the spinner will be visible.`,color:`Sets the color of the spinner.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,xs:`Sets the size of the spinner to extra small.`,sm:`Sets the size of the spinner to small.`,md:`Sets the size of the spinner to medium.`,lg:`Sets the size of the spinner to large.`,xl:`Sets the size of the spinner to extra large.`,size:`Sets the size of the spinner. Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,bounce:`Sets the style of the spinner.`,fade:`Sets the style of the spinner.`},m={},h={},g=c({data:()=>({propsDescs:p,slots:m}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:h[t]||``})&&e,{})}}},[[`render`,f]]);function _(n,s,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return o(),r(`main`,null,[i(f,null,{default:t(()=>[...s[0]||=[a(`w-spinner`,-1)]]),_:1}),i(p),i(m)])}var v=c({components:{Examples:d,Api:g}},[[`render`,_]]);export{v as default};