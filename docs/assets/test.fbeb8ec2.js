import{r as a,o as m,g as p,d as n,t as b,a as o,w as s,b as v,_ as f}from"./index.8eccb3b8.js";const c={class:"test ma12 pa12 bd1 bdrs2"},_=n("h1",{class:"mt0 mb8"},"Testing playground",-1);function w(e,l,I,$,g,k){const d=a("w-select"),i=a("w-input"),u=a("w-button"),r=a("w-form");return m(),p("div",c,[_,n("p",null,b(e.file),1),o(r,{modelValue:e.valid,"onUpdate:modelValue":l[2]||(l[2]=t=>e.valid=t),"no-keyup-validation":!0},{default:s(()=>[o(d,{class:"mt3",label:"Last name",items:e.items,validators:[e.validators.required]},null,8,["items","validators"]),o(i,{modelValue:e.file,"onUpdate:modelValue":l[0]||(l[0]=t=>e.file=t),type:"file",multiple:""},null,8,["modelValue"]),o(u,{onClick:l[1]||(l[1]=t=>e.file=null)},{default:s(()=>[v("clear")]),_:1})]),_:1},8,["modelValue"])])}const V={data:()=>({file:null,valid:null,validators:{required:e=>!!e||"This field is required"},items:[{label:"Item 1",value:1,disabled:!0},{label:"Item 2",value:2},{label:"Item 3",value:3},{label:"Item 4",value:4,disabled:!0},{label:"Item 5",value:5,disabled:!0},{label:"Item 6",value:6,disabled:!0},{label:"Item 7",value:7},{label:"Item 8",value:8}]})},q=f(V,[["render",w]]);export{q as default};