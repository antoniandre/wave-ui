import{r as a,o as d,c as p,w as e,a as t,b as n,m as w,t as h,d as s,e as g,_ as O,f as $,U as x,T as M,n as U,g as R,h as A}from"./index.8b2cb3df.js";const N="/wave-ui/assets/wave-ui--dark-theme.564e8472.png",P=s("span",{class:"grey-dark1"},"Wave UI",-1),V=s("div",{class:"spacer"},null,-1),L=s("div",{class:"title2 px6 pb1"},"Wave UI Dark is around the corner!",-1),H=s("div",{class:"img-wrap"},[s("img",{src:N})],-1),D={class:"px6 py4"},G=s("span",{class:"amber-dark5--bg bdrs1 px1 mx1"},"release this month",-1),z=s("p",null,"In Wave UI 3.0, you can work with 2 themes. The UI components will adapt automatically.",-1),B=["innerHTML"],F=s("div",{class:"text-center"},[n("View the project"),s("br"),n("on Github")],-1);function W(o,r,v,T,I,i){const u=a("w-icon"),_=a("router-link"),b=a("w-button"),k=a("w-tag"),y=a("w-flex"),f=a("w-list"),E=a("w-menu"),m=a("w-tooltip"),S=a("w-toolbar");return d(),p(S,{class:"main-toolbar",fixed:""},{default:e(()=>[t(_,{class:"w-flex no-grow fill-height align-center home-link",to:"/",onClick:r[0]||(r[0]=c=>i.scrollTop(!1))},{default:e(()=>[t(u,{class:"wave-logo mr3",size:"3em"},{default:e(()=>[n("wi-wave")]),_:1}),P]),_:1}),V,t(E,{"align-right":"",arrow:"",shadow:"",transition:"slide-fade-down","menu-class":"dark-theme-preview bdrs2 ml1","content-class":"pa0","bg-color":"grey-dark6",color:"grey-light6","append-to":".main-toolbar"},{activator:e(({on:c})=>[t(b,w({class:"mr2"},h(c),{icon:"mdi mdi-weather-night",color:"white","bg-color":"blue-dark5",shadow:""}),null,16)]),default:e(()=>[L,H,s("div",D,[t(y,{class:"title3 align-center"},{default:e(()=>[n("Announcing Wave UI"),t(k,{class:"ml1 code text-bold",round:"","bg-color":"blue-dark4",color:"white"},{default:e(()=>[n("3.0")]),_:1}),n(", planed for "),G,n("!")]),_:1}),z,t(f,{items:3,icon:"wi-check"},{"item.1":e(()=>[n("Redefined components color defaults, now using CSS3 variables.")]),"item.2":e(()=>[n("More granular control on all the components default colors via SCSS variables.")]),"item.3":e(()=>[n("More great improvements shipping in, stay tuned.")]),_:1})])]),_:1}),s("strong",{class:"version size--xs",innerHTML:`Version <code>${i.version}</code>`},null,8,B),t(m,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:c})=>[s("div",w({class:"ml1"},h(c,!0)),[t(_,{to:"/release-notes",onClick:r[1]||(r[1]=C=>i.scrollTop(!0))},{default:e(()=>[t(u,{lg:""},{default:e(()=>[n("mdi mdi-update")]),_:1})]),_:1})],16)]),default:e(()=>[n("Release notes")]),_:1}),t(m,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:c})=>[s("a",w({class:"grey-dark3 ml2"},h(c,!0),{href:"https://github.com/antoniandre/wave-ui",target:"_blank"}),[t(u,{lg:""},{default:e(()=>[n("mdi mdi-github")]),_:1})],16)]),default:e(()=>[F]),_:1}),t(m,{"z-index":"20","align-right":"","append-to":".main-toolbar"},{activator:e(({on:c})=>[s("div",w({class:"ml2 mr1"},h(c,!0)),[t(_,{class:"pink-light1",to:"/backers",onClick:r[2]||(r[2]=C=>i.scrollTop(!0))},{default:e(()=>[t(u,{lg:""},{default:e(()=>[n("mdi mdi-heart-multiple-outline")]),_:1})]),_:1})],16)]),default:e(()=>[n("Backers")]),_:1}),o.$waveui.breakpoint.xs?(d(),p(b,{key:0,class:"mr-1 hamburger-menu",onClick:r[3]||(r[3]=c=>o.$emit("update:drawerOpen",!v.drawerOpen)),lg:"",text:"",round:"",icon:v.drawerOpen?"wi-cross":"mdi mdi-menu"},null,8,["icon"])):g("",!0)]),_:1})}const j={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],computed:{version(){return"2.48.0".replace(/-(\w)(\w+)\.(\d+)/,(o,r,v,T)=>` <strong>${r.toUpperCase()}${v} ${T}</strong>`)}},methods:{async scrollTop(o=!1){await this.$nextTick(),document.documentElement.scrollTop=o?document.querySelector(".content-wrap").offsetTop-42:0}}},K=O(j,[["render",W]]),X={class:"nav-menu-wrap"},q={class:"nav-menu"},Y=s("div",{class:"title2 mt0"},"Knowledge base",-1),Z=s("div",{class:"title2 mt4"},"UI components",-1),J=["innerHTML"],Q=s("div",{class:"title3 mt4"},"External UI components",-1),ee=s("p",null,"By the same author",-1);function oe(o,r,v,T,I,i){const u=a("w-button"),_=a("w-list"),b=a("w-tag"),k=a("w-icon"),y=a("router-link");return d(),$("div",X,[s("div",q,[o.$waveui.breakpoint.xs?(d(),p(u,{key:0,class:"close",onClick:r[0]||(r[0]=f=>o.$emit("update:drawerOpen",!1)),sm:"",outline:"",round:"",color:"primary",icon:"wi-cross"})):g("",!0),Y,t(_,{items:o.sections,nav:"",color:"primary",onItemSelect:i.onItemClick},null,8,["items","onItemSelect"]),Z,t(_,{items:o.components,nav:"",color:"primary",onItemSelect:i.onItemClick},{item:e(({item:f})=>[s("span",{innerHTML:f.label},null,8,J),f.disabled?(d(),p(b,{key:0,class:"ml2 text-upper",round:"",xs:"",color:"red",outline:""},{default:e(()=>[n("Coming soon")]),_:1})):g("",!0),f.inProgress?(d(),p(b,{key:1,class:"ml2 text-upper",round:"",xs:"",color:"orange",outline:""},{default:e(()=>[n("In progress")]),_:1})):g("",!0)]),_:1},8,["items","onItemSelect"]),Q,ee,t(_,{items:o.externalComponents,nav:"",color:"primary",onItemSelect:i.onItemClick},null,8,["items","onItemSelect"]),o.$waveui.breakpoint.xs?(d(),p(y,{key:1,class:"mt3 d-iblock",to:"/release-notes",onClick:i.onItemClick},{default:e(()=>[t(k,{class:"mr2"},{default:e(()=>[n("mdi mdi-update")]),_:1}),n("Release notes")]),_:1},8,["onClick"])):g("",!0)])])}const te={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],data:()=>({sections:[{label:"Why Wave UI?",route:"/why-wave-ui"},{label:"Getting started",route:"/getting-started"},{label:"Browser support",route:"/browser-support"},{label:"Customization",route:"/customization"},{label:"Breakpoints",route:"/breakpoints"},{label:"Layout",route:"/layout",children:[{label:"Spaces",route:"/layout--spaces"},{label:"Grid system (flexbox)",route:"/layout--grid-system"},{label:"Grid system (grid)",route:"/layout--simplified-grid-system"},{label:"Flex",route:"/layout--flex"},{label:"Other CSS classes",route:"layout--other-css-classes"}]},{label:"Typography",route:"/typography"},{label:"Colors",route:"/colors"},{label:"Shadows, borders &amp; radii",route:"/shadows-borders-radii"},{label:"Transitions",route:"/transitions"}],components:[...x.filter(o=>!o.formElement).map(o=>({...o,route:`/w-${o.id}`})),{label:"Form elements",route:"/form",children:[...x.filter(o=>o.formElement).map(o=>({...o,route:`/w-${o.id}`}))]}],externalComponents:[{label:"Calendar",route:"/calendar"},{label:"Slideshow",route:"/slideshow"},{label:"Splitter",route:"/splitter"}]}),methods:{onItemClick(){this.$emit("update:drawerOpen",!1),setTimeout(()=>{document.documentElement.scrollTop=document.querySelector(".content-wrap").offsetTop-42},200)}}},ne=O(te,[["render",oe]]),se={class:"no-shrink"},ae={class:"content-wrap w-flex no-shrink"},re={class:"w-flex justify-end align-center no-grow wrap"},le={class:"grey-light3 text-upper"},ie=s("div",{class:"spacer"},null,-1),ce={class:"caption"},de=s("span",{class:"text-nowrap"},"Html 5 & Pug",-1);function pe(o,r,v,T,I,i){const u=a("nav-menu"),_=a("w-drawer"),b=a("toolbar"),k=a("w-progress"),y=a("router-view"),f=a("w-button"),E=a("w-transition-bounce"),m=a("w-icon"),S=a("router-link"),c=a("w-tooltip"),C=a("w-app");return d(),p(C,null,{default:e(()=>[i.isMobile?(d(),p(_,{key:0,class:"nav-drawer",modelValue:o.drawerOpen,"onUpdate:modelValue":r[1]||(r[1]=l=>o.drawerOpen=l),right:"",width:330},{default:e(()=>[t(u,{"drawer-open":o.drawerOpen,"onUpdate:drawer-open":r[0]||(r[0]=l=>o.drawerOpen=l)},null,8,["drawer-open"])]),_:1},8,["modelValue"])):g("",!0),s("header",se,[t(b,{"drawer-open":o.drawerOpen,"onUpdate:drawer-open":r[2]||(r[2]=l=>o.drawerOpen=l)},null,8,["drawer-open"])]),s("div",ae,[t(M,{name:"fade"},{default:e(()=>[i.loading?(d(),p(k,{key:0,color:"primary",tile:"",absolute:""})):g("",!0)]),_:1}),i.isMobile?g("",!0):(d(),p(u,{key:0,class:"navigation no-shrink","drawer-open":o.drawerOpen,"onUpdate:drawer-open":r[3]||(r[3]=l=>o.drawerOpen=l)},null,8,["drawer-open"])),s("div",{class:U(["main-content w-flex column grow",`main-content--${o.$route.name}`])},[t(y,{class:U(["grow",`main--${o.$route.name}`])},{default:e(({Component:l})=>[t(M,{name:"fade-page",mode:"out-in"},{default:e(()=>[(d(),p(R(l)))]),_:2},1024)]),_:1},8,["class"]),o.goToTop?(d(),p(E,{key:0,appear:""},{default:e(()=>[t(f,{class:"go-top mb8 mr2",icon:"wi-chevron-up",fixed:"",bottom:"",right:"",xl:"","bg-color":"grey-light5",onClick:i.scrollTop},null,8,["onClick"])]),_:1})):g("",!0),s("footer",re,[s("small",le,"Copyright \xA9 "+A(new Date().getFullYear())+" Antoni Andre, all rights reserved.",1),ie,t(S,{class:"pink-light1 mr4",to:"/backers",onClick:i.scrollTop},{default:e(()=>[t(m,{class:"mr1"},{default:e(()=>[n("mdi mdi-heart-multiple-outline")]),_:1}),n("Backers")]),_:1},8,["onClick"]),s("div",ce,[n("Made with"),t(c,{top:""},{activator:e(({on:l})=>[t(m,w({class:"ml1"},h(l),{sm:""}),{default:e(()=>[n("mdi mdi-vuejs")]),_:2},1040)]),default:e(()=>[n("Vue.js")]),_:1}),t(c,{top:""},{activator:e(({on:l})=>[t(m,w({class:"ml1"},h(l),{sm:""}),{default:e(()=>[n("mdi mdi-language-css3")]),_:2},1040)]),default:e(()=>[n("CSS 3")]),_:1}),t(c,{top:""},{activator:e(({on:l})=>[t(m,w({class:"ml1"},h(l),{sm:""}),{default:e(()=>[n("mdi mdi-language-html5")]),_:2},1040)]),default:e(()=>[de]),_:1}),t(c,{top:""},{activator:e(({on:l})=>[t(m,w({class:"ml1"},h(l),{sm:""}),{default:e(()=>[n("mdi mdi-sass")]),_:2},1040)]),default:e(()=>[n("SASS")]),_:1}),t(c,{top:"","align-right":""},{activator:e(({on:l})=>[t(m,w({class:"ml1 heart"},h(l),{sm:""}),{default:e(()=>[n("mdi mdi-heart")]),_:2},1040)]),default:e(()=>[n("Love")]),_:1})])])],2)])]),_:1})}const me={components:{Toolbar:K,NavMenu:ne},data:()=>({drawerOpen:!1,fixNavMenu:!1,navMenuTop:0,scrollingEl:null,contentWrapEl:null,goToTop:!1}),computed:{loading(){return this.$router.status.loading},isMobile(){return this.$waveui.breakpoint.xs}},methods:{onScroll(){this.fixNavMenu=this.scrollingEl.scrollTop>=this.navMenuTop,this.goToTop=this.scrollingEl.scrollTop>=this.contentWrapEl.offsetTop},onResize(){this.navMenuTop=this.contentWrapEl.offsetTop-12},async scrollTop(){await this.$nextTick(),document.documentElement.scrollTo({top:0,behavior:"smooth"})}},mounted(){this.contentWrapEl=document.querySelector(".content-wrap"),this.navMenuTop=this.contentWrapEl.offsetTop-12,this.scrollingEl=document.documentElement;const o=window.location.hash.replace("#","");o&&setTimeout(()=>{document.getElementById(o).scrollIntoView({behavior:"smooth"})},200),window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onResize)},beforeUnmount(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize)}},_e=O(me,[["render",pe]]);export{_e as default};