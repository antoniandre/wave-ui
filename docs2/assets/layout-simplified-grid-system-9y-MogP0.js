import{N as e,W as t,c as n,d as r,g as i,h as a,j as o,k as s,r as c}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as l}from"./_plugin-vue_export-helper-B80Cc4Ui.js";var u={class:`box`},d={class:`box`},f={class:`box`};function p(l,p){let m=e(`title-link`),h=e(`router-link`),g=e(`alert`),_=e(`w-grid`),v=e(`example`);return s(),r(`main`,null,[i(m,{class:`mt4`,h1:``},{default:t(()=>[...p[0]||=[a(`Simplified grid system (CSS grids)`,-1)]]),_:1}),i(g,{info:``},{default:t(()=>[p[2]||=a(`The 12-cell based flexbox grid system works well and for most cases, but it has
`,-1),i(h,{to:`/layout--flex#caveat`},{default:t(()=>[...p[1]||=[a(`a caveat`,-1)]]),_:1}),p[3]||=a(` when used with both `,-1),p[4]||=n(`code`,null,`gap`,-1),p[5]||=a(` and flex
`,-1),p[6]||=n(`code`,null,`wrap`,-1),p[7]||=a(`.
`,-1),p[8]||=n(`br`,null,null,-1),p[9]||=n(`br`,null,null,-1),p[10]||=a(`
The `,-1),p[11]||=n(`strong`,{class:`code`},`w-grid`,-1),p[12]||=a(` component offers a solution to this caveat, but has less built-in
features and options than the `,-1),p[13]||=n(`strong`,{class:`code`},`w-flex`,-1),p[14]||=a(` component (too much CSS would need to be
generated to cover all the possibilities that the CSS grid system offer).`,-1),p[15]||=n(`br`,null,null,-1),p[16]||=n(`br`,null,null,-1),p[17]||=a(`

However, if `,-1),p[18]||=n(`strong`,{class:`code`},`w-flex`,-1),p[19]||=a(` does not provide a solution for your case, or if you simply prefer
to work with CSS grids, you can and should add more CSS rules on top of Wave UI's basic grid setup
to obtain the perfect custom layout you need.
`,-1)]),_:1}),i(m,{h2:``},{default:t(()=>[...p[20]||=[a(`How to use`,-1)]]),_:1}),p[32]||=n(`p`,null,[a(`The `),n(`strong`,{class:`code`},`w-grid`),a(` component is very straightforward, you need to define a number of column
from 1 to 12.`)],-1),i(v,null,{pug:t(()=>[...p[21]||=[a(`w-grid.wrapper(columns="6")
  .box(v-for="i in 12")`,-1)]]),html:t(()=>[...p[22]||=[a(`<w-grid columns="6" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`,-1)]]),css:t(()=>[...p[23]||=[a(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`,-1)]]),default:t(()=>[i(_,{class:`wrapper`,columns:`6`},{default:t(()=>[(s(),r(c,null,o(12,e=>n(`div`,u)),64))]),_:1})]),_:1}),i(m,{h2:``},{default:t(()=>[...p[24]||=[a(`Gap`,-1)]]),_:1}),i(v,null,{pug:t(()=>[...p[25]||=[a(`w-grid.wrapper(columns="6" gap="3")
  .box(v-for="i in 12")`,-1)]]),html:t(()=>[...p[26]||=[a(`<w-grid columns="6" gap="3" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`,-1)]]),css:t(()=>[...p[27]||=[a(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`,-1)]]),default:t(()=>[i(_,{class:`wrapper`,columns:`6`,gap:`3`},{default:t(()=>[(s(),r(c,null,o(12,e=>n(`div`,d)),64))]),_:1})]),_:1}),i(m,{h2:``},{default:t(()=>[...p[28]||=[a(`Different columns number per breakpoint`,-1)]]),_:1}),p[33]||=n(`p`,null,[a(`The `),n(`code`,null,`columns`),a(` option also accepts an object in which you can define a number of columns
per breakpoint.`)],-1),i(v,null,{pug:t(()=>[...p[29]||=[a(`w-grid.wrapper(
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3")
  .box(v-for="i in 12")`,-1)]]),html:t(()=>[...p[30]||=[a(`<w-grid
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3"
  class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`,-1)]]),css:t(()=>[...p[31]||=[a(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}`,-1)]]),default:t(()=>[i(_,{class:`wrapper`,columns:{xs:1,sm:2,md:3,lg:4,xl:6},gap:`3`},{default:t(()=>[(s(),r(c,null,o(12,e=>n(`div`,f)),64))]),_:1})]),_:1})])}var m=l({},[[`render`,p]]);export{m as default};