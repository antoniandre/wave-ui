import{n,y as r}from"./index.e31dd236.js";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-link",{attrs:{h2:""}},[t._v("Default")]),s("example",{scopedSlots:t._u([{key:"pug",fn:function(){},proxy:!0}])})],1)},c=[];const _={},a={};var p=n(_,i,c,!1,u,null,null,null);function u(t){for(let e in a)this[e]=a[e]}var v=function(){return p.exports}(),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),s("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The missing props descriptions will be added shortly (all the props are already listed).")]),s("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),s("component-api",{attrs:{items:t.slots,title:"Slots"}}),s("component-api",{attrs:{items:t.events,title:"Events"}})],1)},d=[];const f={},x={},$={},h={data:()=>({propsDescs:f,slots:x}),computed:{props(){return r.props},events(){return r.emits.reduce((t,e)=>(t[e]=$[e]||{})&&t,{})}}},o={};var y=n(h,m,d,!1,C,null,null,null);function C(t){for(let e in o)this[e]=o[e]}var E=function(){return y.exports}(),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("ui-component-title",{attrs:{slug:"w-parallax","in-progress":""}},[t._v("w-parallax")]),s("examples"),s("api")],1)},g=[];const w={components:{Examples:v,Api:E}},l={};var k=n(w,S,g,!1,D,null,null,null);function D(t){for(let e in l)this[e]=l[e]}var M=function(){return k.exports}();export{M as default};