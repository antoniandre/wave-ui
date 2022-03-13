import{r as t,o as i,f as l,a as s,w as n,F as a,z as _,e as o,b as e}from"./vendor.c30f2c6c.js";import{_ as f}from"./index.67df9d80.js";const m=o("Simplified grid system (CSS grids)"),g=o(`The 12-cell based flexbox grid system works well and for most cases, but it has
`),b=o("a caveat"),x=o(" when used with both "),w=e("code",null,"gap",-1),v=o(` and flex
`),y=e("code",null,"wrap",-1),k=o(`.
`),S=e("br",null,null,-1),C=e("br",null,null,-1),T=o(`
The `),j=e("strong",{class:"code"},"w-grid",-1),B=o(` component offers a solution to this caveat, but has less built-in
features and options than the `),G=e("strong",{class:"code"},"w-flex",-1),N=o(` component (too much CSS would need to be
generated to cover all the possibilities that the CSS grid system offer).`),V=e("br",null,null,-1),F=e("br",null,null,-1),H=o(`

However, if `),z=e("strong",{class:"code"},"w-flex",-1),D=o(` does not provide a solution for your case, or if you simply prefer
to work with CSS grids, you can and should add more CSS rules on top of Wave UI's basic grid setup
to obtain the perfect custom layout you need.
`),E=o("How to use"),I=e("p",null,[o("The "),e("strong",{class:"code"},"w-grid"),o(` component is very straightforward, you need to define a number of column
from 1 to 12.`)],-1),L={class:"box"},U=o(`w-grid.wrapper(columns="6")
  .box(v-for="i in 12")`),W=o(`<w-grid columns="6" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`),q=o(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`),A=o("Gap"),J={class:"box"},K=o(`w-grid.wrapper(columns="6" gap="3")
  .box(v-for="i in 12")`),M=o(`<w-grid columns="6" gap="3" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`),O=o(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}
`),P=o("Different columns number per breakpoint"),Q=e("p",null,[o("The "),e("code",null,"columns"),o(` option also accepts an object in which you can define a number of columns
per breakpoint.`)],-1),R={class:"box"},X=o(`w-grid.wrapper(
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3")
  .box(v-for="i in 12")`),Y=o(`<w-grid
  :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }"
  gap="3"
  class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`),Z=o(`.wrapper {
  background-color: #faeed4;
  padding: 12px;
}

.box {
  background-color: #e2ecfc;
  border: 1px solid #b2c2f0;
  padding: 12px;
}`);function $(no,eo){const d=t("title-link"),p=t("router-link"),h=t("alert"),r=t("w-grid"),c=t("example");return i(),l("main",null,[s(d,{class:"mt4",h1:""},{default:n(()=>[m]),_:1}),s(h,{info:""},{default:n(()=>[g,s(p,{to:"/layout--flex#caveat"},{default:n(()=>[b]),_:1}),x,w,v,y,k,S,C,T,j,B,G,N,V,F,H,z,D]),_:1}),s(d,{h2:""},{default:n(()=>[E]),_:1}),I,s(c,null,{pug:n(()=>[U]),html:n(()=>[W]),css:n(()=>[q]),default:n(()=>[s(r,{class:"wrapper",columns:"6"},{default:n(()=>[(i(),l(a,null,_(12,u=>e("div",L)),64))]),_:1})]),_:1}),s(d,{h2:""},{default:n(()=>[A]),_:1}),s(c,null,{pug:n(()=>[K]),html:n(()=>[M]),css:n(()=>[O]),default:n(()=>[s(r,{class:"wrapper",columns:"6",gap:"3"},{default:n(()=>[(i(),l(a,null,_(12,u=>e("div",J)),64))]),_:1})]),_:1}),s(d,{h2:""},{default:n(()=>[P]),_:1}),Q,s(c,null,{pug:n(()=>[X]),html:n(()=>[Y]),css:n(()=>[Z]),default:n(()=>[s(r,{class:"wrapper",columns:{xs:1,sm:2,md:3,lg:4,xl:6},gap:"3"},{default:n(()=>[(i(),l(a,null,_(12,u=>e("div",R)),64))]),_:1})]),_:1})])}const oo={};var io=f(oo,[["render",$]]);export{io as default};
