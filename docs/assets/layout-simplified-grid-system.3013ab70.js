import{r as t,o as l,f as i,a as s,w as n,F as a,s as _,e as o,b as e,_ as f}from"./index.6a386ae5.js";const m=o("Simplified grid system (CSS grids)"),g=o(`The 12-cell based flexbox grid system works well and for most cases, but it has
`),b=o("a caveat"),w=o(" when used with both "),x=e("code",null,"gap",-1),v=o(` and flex
`),y=e("code",null,"wrap",-1),k=o(`.
`),S=e("br",null,null,-1),C=e("br",null,null,-1),T=o(`
The `),B=e("strong",{class:"code"},"w-grid",-1),G=o(` component offers a solution to this caveat, but has less built-in
features and options than the `),N=e("strong",{class:"code"},"w-flex",-1),V=o(` component (too much CSS would need to be
generated to cover all the possibilities that the CSS grid system offer).`),F=e("br",null,null,-1),H=e("br",null,null,-1),j=o(`

However, if `),D=e("strong",{class:"code"},"w-flex",-1),E=o(` does not provide a solution for your case, or if you simply prefer
to work with CSS grids, you can and should add more CSS rules on top of Wave UI's basic grid setup
to obtain the perfect custom layout you need.
`),I=o("How to use"),L=e("p",null,[o("The "),e("strong",{class:"code"},"w-grid"),o(` component is very straightforward, you need to define a number of column
from 1 to 12.`)],-1),U={class:"box"},W=o(`w-grid.wrapper(columns="6")
  .box(v-for="i in 12")`),q=o(`<w-grid columns="6" class="wrapper">
  <div v-for="i in 12" class="box"></div>
</w-grid>`),z=o(`.wrapper {
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
}`);function $(no,eo){const d=t("title-link"),p=t("router-link"),h=t("alert"),r=t("w-grid"),c=t("example");return l(),i("main",null,[s(d,{class:"mt4",h1:""},{default:n(()=>[m]),_:1}),s(h,{info:""},{default:n(()=>[g,s(p,{to:"/layout--flex#caveat"},{default:n(()=>[b]),_:1}),w,x,v,y,k,S,C,T,B,G,N,V,F,H,j,D,E]),_:1}),s(d,{h2:""},{default:n(()=>[I]),_:1}),L,s(c,null,{pug:n(()=>[W]),html:n(()=>[q]),css:n(()=>[z]),default:n(()=>[s(r,{class:"wrapper",columns:"6"},{default:n(()=>[(l(),i(a,null,_(12,u=>e("div",U)),64))]),_:1})]),_:1}),s(d,{h2:""},{default:n(()=>[A]),_:1}),s(c,null,{pug:n(()=>[K]),html:n(()=>[M]),css:n(()=>[O]),default:n(()=>[s(r,{class:"wrapper",columns:"6",gap:"3"},{default:n(()=>[(l(),i(a,null,_(12,u=>e("div",J)),64))]),_:1})]),_:1}),s(d,{h2:""},{default:n(()=>[P]),_:1}),Q,s(c,null,{pug:n(()=>[X]),html:n(()=>[Y]),css:n(()=>[Z]),default:n(()=>[s(r,{class:"wrapper",columns:{xs:1,sm:2,md:3,lg:4,xl:6},gap:"3"},{default:n(()=>[(l(),i(a,null,_(12,u=>e("div",R)),64))]),_:1})]),_:1})])}const oo={};var to=f(oo,[["render",$]]);export{to as default};
