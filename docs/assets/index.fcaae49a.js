import{r as t,o as p,f as _,a as e,w as l,e as i,b as x}from"./vendor.c30f2c6c.js";import{_ as d,w as $}from"./index.31e8b2de.js";const h=i("Default");function v(s,n,m,u,f,r){const o=t("title-link"),a=t("example");return p(),_("div",null,[e(o,{h2:""},{default:l(()=>[h]),_:1}),e(a,null,{pug:l(()=>[]),_:1})])}const w={};var k=d(w,[["render",v]]);const g=x("div",{class:"w-divider my12"},null,-1),y=i("API"),B=i("The missing props descriptions will be added shortly (all the props are already listed).");function D(s,n,m,u,f,r){const o=t("title-link"),a=t("alert"),c=t("component-api");return p(),_("div",null,[g,e(o,{class:"title1",h2:""},{default:l(()=>[y]),_:1}),e(a,{class:"mb6",info:""},{default:l(()=>[B]),_:1}),e(c,{class:"mt0",items:r.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(c,{items:s.slots,title:"Slots"},null,8,["items"]),e(c,{items:r.events,title:"Events"},null,8,["items"])])}const E={},N={},P={},V={data:()=>({propsDescs:E,slots:N}),computed:{props(){return $.props},events(){return $.emits.reduce((s,n)=>(s[n]=P[n]||{})&&s,{})}}};var b=d(V,[["render",D]]);const A=i("w-parallax");function C(s,n,m,u,f,r){const o=t("ui-component-title"),a=t("examples"),c=t("api");return p(),_("main",null,[e(o,{slug:"w-parallax","in-progress":""},{default:l(()=>[A]),_:1}),e(a),e(c)])}const T={components:{Examples:k,Api:b}};var S=d(T,[["render",C]]);export{S as default};
