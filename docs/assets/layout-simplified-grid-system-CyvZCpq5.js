import{A as e,G as t,M as n,P as r,c as i,d as a,g as o,h as s,r as c}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as l}from"./_plugin-vue_export-helper-B80Cc4Ui.js";var u={class:`box`},d={class:`box`},f={class:`box`};function p(l,p){let m=r(`title-link`),h=r(`router-link`),g=r(`alert`),_=r(`w-grid`),v=r(`example`);return e(),a(`main`,null,[o(m,{class:`mt4`,h1:``},{default:t(()=>[...p[0]||=[s(`Simplified grid system (CSS grids)`,-1)]]),_:1}),o(g,{info:``},{default:t(()=>[p[2]||=s(`The 12-cell based flexbox grid system works well and for most cases, but it has
`,-1),o(h,{to:`/layout--flex#caveat`},{default:t(()=>[...p[1]||=[s(`a caveat`,-1)]]),_:1}),p[3]||=s(` when used with both `,-1),p[4]||=i(`code`,null,`gap`,-1),p[5]||=s(` and flex
`,-1),p[6]||=i(`code`,null,`wrap`,-1),p[7]||=s(`.
`,-1),p[8]||=i(`br`,null,null,-1),p[9]||=i(`br`,null,null,-1),p[10]||=s(`
The `,-1),p[11]||=i(`strong`,{class:`code`},`w-grid`,-1),p[12]||=s(` component offers a solution to this caveat, but has less built-in
features and options than the `,-1),p[13]||=i(`strong`,{class:`code`},`w-flex`,-1),p[14]||=s(` component (too much CSS would need to be
generated to cover all the possibilities that the CSS grid system offer).`,-1),p[15]||=i(`br`,null,null,-1),p[16]||=i(`br`,null,null,-1),p[17]||=s(`

However, if `,-1),p[18]||=i(`strong`,{class:`code`},`w-flex`,-1),p[19]||=s(` does not provide a solution for your case, or if you simply prefer
to work with CSS grids, you can and should add more CSS rules on top of Wave UI's basic grid setup
to obtain the perfect custom layout you need.
`,-1)]),_:1}),o(m,{h2:``},{default:t(()=>[...p[20]||=[s(`How to use`,-1)]]),_:1}),p[32]||=i(`p`,null,[s(`The `),i(`strong`,{class:`code`},`w-grid`),s(` component is very straightforward, you need to define a number of column
from 1 to 12.`)],-1),o(v,null,{pug:t(()=>[...p[21]||=[s(`w-grid.wrapper(columns="6")
  .box(v-for="i in 12")`,-1)]]),html:t(()=>[...p[22]||=[s(`<w-grid columns="6" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`,-1)]]),css:t(()=>[...p[23]||=[s(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`,-1)]]),default:t(()=>[o(_,{class:`wrapper`,columns:`6`},{default:t(()=>[(e(),a(c,null,n(12,e=>i(`div`,u)),64))]),_:1})]),_:1}),o(m,{h2:``},{default:t(()=>[...p[24]||=[s(`Gap`,-1)]]),_:1}),o(v,null,{pug:t(()=>[...p[25]||=[s(`w-grid.wrapper(columns="6" gap="3")
  .box(v-for="i in 12")`,-1)]]),html:t(()=>[...p[26]||=[s(`<w-grid columns="6" gap="3" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`,-1)]]),css:t(()=>[...p[27]||=[s(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`,-1)]]),default:t(()=>[o(_,{class:`wrapper`,columns:`6`,gap:`3`},{default:t(()=>[(e(),a(c,null,n(12,e=>i(`div`,d)),64))]),_:1})]),_:1}),o(m,{h2:``},{default:t(()=>[...p[28]||=[s(`Different columns number per breakpoint`,-1)]]),_:1}),p[33]||=i(`p`,null,[s(`The `),i(`code`,null,`columns`),s(` option also accepts an object in which you can define a number of columns
per breakpoint.`)],-1),o(v,null,{pug:t(()=>[...p[29]||=[s(`w-grid.wrapper(
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3")
  .box(v-for="i in 12")`,-1)]]),html:t(()=>[...p[30]||=[s(`<w-grid
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3"
  class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`,-1)]]),css:t(()=>[...p[31]||=[s(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}`,-1)]]),default:t(()=>[o(_,{class:`wrapper`,columns:{xs:1,sm:2,md:3,lg:4,xl:6},gap:`3`},{default:t(()=>[(e(),a(c,null,n(12,e=>i(`div`,f)),64))]),_:1})]),_:1})])}var m=l({},[[`render`,p]]);export{m as default};