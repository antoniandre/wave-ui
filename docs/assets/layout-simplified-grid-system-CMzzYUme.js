import{r as t,o as e,g as i,a as s,w as l,b as o,d as r,F as a,k as f,_ as w}from"./index-M5C_kbMe.js";const x={class:"box"},v={class:"box"},k={class:"box"};function y(C,n){const d=t("title-link"),g=t("router-link"),b=t("alert"),u=t("w-grid"),p=t("example");return e(),i("main",null,[s(d,{class:"mt4",h1:""},{default:l(()=>n[0]||(n[0]=[o("Simplified grid system (CSS grids)")])),_:1}),s(b,{info:""},{default:l(()=>[n[2]||(n[2]=o(`The 12-cell based flexbox grid system works well and for most cases, but it has
`)),s(g,{to:"/layout--flex#caveat"},{default:l(()=>n[1]||(n[1]=[o("a caveat")])),_:1}),n[3]||(n[3]=o(" when used with both ")),n[4]||(n[4]=r("code",null,"gap",-1)),n[5]||(n[5]=o(` and flex
`)),n[6]||(n[6]=r("code",null,"wrap",-1)),n[7]||(n[7]=o(`.
`)),n[8]||(n[8]=r("br",null,null,-1)),n[9]||(n[9]=r("br",null,null,-1)),n[10]||(n[10]=o(`
The `)),n[11]||(n[11]=r("strong",{class:"code"},"w-grid",-1)),n[12]||(n[12]=o(` component offers a solution to this caveat, but has less built-in
features and options than the `)),n[13]||(n[13]=r("strong",{class:"code"},"w-flex",-1)),n[14]||(n[14]=o(` component (too much CSS would need to be
generated to cover all the possibilities that the CSS grid system offer).`)),n[15]||(n[15]=r("br",null,null,-1)),n[16]||(n[16]=r("br",null,null,-1)),n[17]||(n[17]=o(`

However, if `)),n[18]||(n[18]=r("strong",{class:"code"},"w-flex",-1)),n[19]||(n[19]=o(` does not provide a solution for your case, or if you simply prefer
to work with CSS grids, you can and should add more CSS rules on top of Wave UI's basic grid setup
to obtain the perfect custom layout you need.
`))]),_:1}),s(d,{h2:""},{default:l(()=>n[20]||(n[20]=[o("How to use")])),_:1}),n[32]||(n[32]=r("p",null,[o("The "),r("strong",{class:"code"},"w-grid"),o(` component is very straightforward, you need to define a number of column
from 1 to 12.`)],-1)),s(p,null,{pug:l(()=>n[21]||(n[21]=[o(`w-grid.wrapper(columns="6")
  .box(v-for="i in 12")`)])),html:l(()=>n[22]||(n[22]=[o(`<w-grid columns="6" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`)])),css:l(()=>n[23]||(n[23]=[o(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`)])),default:l(()=>[s(u,{class:"wrapper",columns:"6"},{default:l(()=>[(e(),i(a,null,f(12,m=>r("div",x)),64))]),_:1})]),_:1}),s(d,{h2:""},{default:l(()=>n[24]||(n[24]=[o("Gap")])),_:1}),s(p,null,{pug:l(()=>n[25]||(n[25]=[o(`w-grid.wrapper(columns="6" gap="3")
  .box(v-for="i in 12")`)])),html:l(()=>n[26]||(n[26]=[o(`<w-grid columns="6" gap="3" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`)])),css:l(()=>n[27]||(n[27]=[o(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`)])),default:l(()=>[s(u,{class:"wrapper",columns:"6",gap:"3"},{default:l(()=>[(e(),i(a,null,f(12,m=>r("div",v)),64))]),_:1})]),_:1}),s(d,{h2:""},{default:l(()=>n[28]||(n[28]=[o("Different columns number per breakpoint")])),_:1}),n[33]||(n[33]=r("p",null,[o("The "),r("code",null,"columns"),o(` option also accepts an object in which you can define a number of columns
per breakpoint.`)],-1)),s(p,null,{pug:l(()=>n[29]||(n[29]=[o(`w-grid.wrapper(
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3")
  .box(v-for="i in 12")`)])),html:l(()=>n[30]||(n[30]=[o(`<w-grid
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3"
  class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`)])),css:l(()=>n[31]||(n[31]=[o(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}`)])),default:l(()=>[s(u,{class:"wrapper",columns:{xs:1,sm:2,md:3,lg:4,xl:6},gap:"3"},{default:l(()=>[(e(),i(a,null,f(12,m=>r("div",k)),64))]),_:1})]),_:1})])}const S={},B=w(S,[["render",y]]);export{B as default};
