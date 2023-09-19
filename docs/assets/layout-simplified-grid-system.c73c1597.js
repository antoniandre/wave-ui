import{r as t,o as r,g as a,a as s,w as o,b as n,F as i,k as u,d as e,_ as m}from"./index.bf2cfd71.js";const g=e("code",null,"gap",-1),b=e("code",null,"wrap",-1),h=e("br",null,null,-1),w=e("br",null,null,-1),x=e("strong",{class:"code"},"w-grid",-1),v=e("strong",{class:"code"},"w-flex",-1),y=e("br",null,null,-1),k=e("br",null,null,-1),S=e("strong",{class:"code"},"w-flex",-1),C=e("p",null,[n("The "),e("strong",{class:"code"},"w-grid"),n(` component is very straightforward, you need to define a number of column
from 1 to 12.`)],-1),T={class:"box"},B={class:"box"},G=e("p",null,[n("The "),e("code",null,"columns"),n(` option also accepts an object in which you can define a number of columns
per breakpoint.`)],-1),N={class:"box"};function V(H,j){const l=t("title-link"),_=t("router-link"),f=t("alert"),d=t("w-grid"),c=t("example");return r(),a("main",null,[s(l,{class:"mt4",h1:""},{default:o(()=>[n("Simplified grid system (CSS grids)")]),_:1}),s(f,{info:""},{default:o(()=>[n(`The 12-cell based flexbox grid system works well and for most cases, but it has
`),s(_,{to:"/layout--flex#caveat"},{default:o(()=>[n("a caveat")]),_:1}),n(" when used with both "),g,n(` and flex
`),b,n(`.
`),h,w,n(`
The `),x,n(` component offers a solution to this caveat, but has less built-in
features and options than the `),v,n(` component (too much CSS would need to be
generated to cover all the possibilities that the CSS grid system offer).`),y,k,n(`

However, if `),S,n(` does not provide a solution for your case, or if you simply prefer
to work with CSS grids, you can and should add more CSS rules on top of Wave UI's basic grid setup
to obtain the perfect custom layout you need.
`)]),_:1}),s(l,{h2:""},{default:o(()=>[n("How to use")]),_:1}),C,s(c,null,{pug:o(()=>[n(`w-grid.wrapper(columns="6")
  .box(v-for="i in 12")`)]),html:o(()=>[n(`<w-grid columns="6" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`)]),css:o(()=>[n(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`)]),default:o(()=>[s(d,{class:"wrapper",columns:"6"},{default:o(()=>[(r(),a(i,null,u(12,p=>e("div",T)),64))]),_:1})]),_:1}),s(l,{h2:""},{default:o(()=>[n("Gap")]),_:1}),s(c,null,{pug:o(()=>[n(`w-grid.wrapper(columns="6" gap="3")
  .box(v-for="i in 12")`)]),html:o(()=>[n(`<w-grid columns="6" gap="3" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`)]),css:o(()=>[n(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`)]),default:o(()=>[s(d,{class:"wrapper",columns:"6",gap:"3"},{default:o(()=>[(r(),a(i,null,u(12,p=>e("div",B)),64))]),_:1})]),_:1}),s(l,{h2:""},{default:o(()=>[n("Different columns number per breakpoint")]),_:1}),G,s(c,null,{pug:o(()=>[n(`w-grid.wrapper(
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3")
  .box(v-for="i in 12")`)]),html:o(()=>[n(`<w-grid
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3"
  class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`)]),css:o(()=>[n(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}`)]),default:o(()=>[s(d,{class:"wrapper",columns:{xs:1,sm:2,md:3,lg:4,xl:6},gap:"3"},{default:o(()=>[(r(),a(i,null,u(12,p=>e("div",N)),64))]),_:1})]),_:1})])}const F={},E=m(F,[["render",V]]);export{E as default};
