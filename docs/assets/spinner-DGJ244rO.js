import{A as e,G as t,P as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{d as l}from"./index-DcVDxcA5.js";function u(c,l,u,d,f,p){let m=n(`title-link`),h=n(`w-spinner`),g=n(`example`),_=n(`w-button`);return e(),i(`div`,null,[l[21]||=r(`p`,null,[o(`If you want a different style than the `),r(`span`,{class:`code`},`w-progress`),o(` component, the spinner is a light
alternative that you can easily use anywhere.
`)],-1),a(m,{h2:``},{default:t(()=>[...l[1]||=[o(`Three dots (default)`,-1)]]),_:1}),a(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[2]||=[o(`w-spinner`,-1)]]),html:t(()=>[...l[3]||=[o(`<w-spinner />
`,-1)]]),default:t(()=>[a(h)]),_:1}),a(m,{h2:``},{default:t(()=>[...l[4]||=[o(`Fade`,-1)]]),_:1}),a(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[5]||=[o(`w-spinner(fade)`,-1)]]),html:t(()=>[...l[6]||=[o(`<w-spinner fade />
`,-1)]]),default:t(()=>[a(h,{fade:``})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[7]||=[o(`Bounce`,-1)]]),_:1}),a(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[8]||=[o(`w-spinner(bounce)`,-1)]]),html:t(()=>[...l[9]||=[o(`<w-spinner bounce />
`,-1)]]),default:t(()=>[a(h,{bounce:``})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[10]||=[o(`Model-value or v-model`,-1)]]),_:1}),l[22]||=r(`p`,null,[o(`Both the `),r(`code`,null,`model-value`),o(` (or `),r(`code`,null,`value`),o(` for Vue 2) and `),r(`code`,null,`v-model`),o(` will control the spinner visibility, but there is not
much point in using a `),r(`code`,null,`v-model`),o(` here as the spinner will never emit a value update.`)],-1),a(g,{"content-class":`w-flex`},{pug:t(()=>[...l[12]||=[o(`w-button.mr4(@click="showSpinner = !showSpinner") Toggle spinner
w-spinner(:model-value="showSpinner")`,-1)]]),html:t(()=>[...l[13]||=[o(`<w-button @click="showSpinner = !showSpinner">Toggle spinner</w-button>
<w-spinner :model-value="showSpinner" />`,-1)]]),js:t(()=>[...l[14]||=[o(`data: () => ({
  showSpinner: false
})
`,-1)]]),default:t(()=>[a(_,{class:`mr4`,onClick:l[0]||=e=>c.showSpinner=!c.showSpinner},{default:t(()=>[...l[11]||=[o(`Toggle spinner`,-1)]]),_:1}),a(h,{"model-value":c.showSpinner},null,8,[`model-value`])]),_:1}),a(m,{h2:``},{default:t(()=>[...l[15]||=[o(`Sizes`,-1)]]),_:1}),l[23]||=s(`<p>The spinner size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,
<code>lg</code>, <code>xl</code>, or explicit <code>size</code> prop.</p>`,1),a(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[16]||=[o(`w-flex(align-center justify-center)
  w-spinner.ma1(fade xs)
  w-spinner.ma1(fade sm)
  w-spinner.ma1(fade md)
  w-spinner.ma1(fade lg)
  w-spinner.ma1(fade xl)
  w-spinner.ma1(fade size="5em")`,-1)]]),html:t(()=>[...l[17]||=[o(`<w-flex align-center justify-center>
  <w-spinner fade xs class="ma1" />
  <w-spinner fade sm class="ma1" />
  <w-spinner fade md class="ma1" />
  <w-spinner fade lg class="ma1" />
  <w-spinner fade xl class="ma1" />
  <w-spinner fade size="5em" class="ma1" />
</w-flex>
`,-1)]]),default:t(()=>[a(h,{class:`ma1`,fade:``,xs:``}),a(h,{class:`ma1`,fade:``,sm:``}),a(h,{class:`ma1`,fade:``,md:``}),a(h,{class:`ma1`,fade:``,lg:``}),a(h,{class:`ma1`,fade:``,xl:``}),a(h,{class:`ma1`,fade:``,size:`5em`})]),_:1}),a(m,{h2:``},{default:t(()=>[...l[18]||=[o(`Colors`,-1)]]),_:1}),l[24]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the spinner.`)],-1),a(g,{"content-class":`w-flex justify-center`},{pug:t(()=>[...l[19]||=[o(`w-spinner.ma1(fade color="green")
w-spinner.ma1(fade color="amber")
w-spinner.ma1(fade color="orange")
w-spinner.ma1(fade color="error")
w-spinner.ma1(fade color="pink")`,-1)]]),html:t(()=>[...l[20]||=[o(`<w-spinner fade color="green" class="ma1" />
<w-spinner fade color="amber" class="ma1" />
<w-spinner fade color="orange" class="ma1" />
<w-spinner fade color="error" class="ma1" />
<w-spinner fade color="pink" class="ma1" />`,-1)]]),default:t(()=>[a(h,{class:`ma1`,fade:``,color:`green`}),a(h,{class:`ma1`,fade:``,color:`amber`}),a(h,{class:`ma1`,fade:``,color:`orange`}),a(h,{class:`ma1`,fade:``,color:`error`}),a(h,{class:`ma1`,fade:``,color:`pink`})]),_:1})])}var d=c({data:()=>({showSpinner:!1})},[[`render`,u]]);function f(s,c,l,u,d,f){let p=n(`title-link`),m=n(`component-api`);return e(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:s.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var p={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>The <code>value</code> or <code>v-model</code> controls the visibility of the spinner. Any truthy value will show the spinner whereas any falsy value will hide it. If no value/v-model or <code>undefined</code> is provided, the spinner will be visible.`,color:`Sets the color of the spinner.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,xs:`Sets the size of the spinner to extra small.`,sm:`Sets the size of the spinner to small.`,md:`Sets the size of the spinner to medium.`,lg:`Sets the size of the spinner to large.`,xl:`Sets the size of the spinner to extra large.`,size:`Sets the size of the spinner. Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.`,bounce:`Sets the style of the spinner.`,fade:`Sets the style of the spinner.`},m={},h={},g=c({data:()=>({propsDescs:p,slots:m}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:h[t]||``})&&e,{})}}},[[`render`,f]]);function _(r,s,c,l,u,d){let f=n(`ui-component-title`),p=n(`examples`),m=n(`api`);return e(),i(`main`,null,[a(f,null,{default:t(()=>[...s[0]||=[o(`w-spinner`,-1)]]),_:1}),a(p),a(m)])}var v=c({components:{Examples:d,Api:g}},[[`render`,_]]);export{v as default};