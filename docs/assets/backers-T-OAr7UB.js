import{a as b}from"./axios-BimPEqV4.js";import{a as k,D as v}from"./divriots-fJu1QlFQ.js";import{r as l,o as i,g as c,a as r,w as s,b as o,d as t,F as y,l as w,m as p,e as h,t as B,_ as x}from"./index-DmbSWeYz.js";const D={class:"text-center"},G=t("div",{class:"mb12"},[t("h2",null,"A big THANK YOU to all the backers!"),t("p",null,"Thank you to all of you, you make this happen, you are part of this library!")],-1),$=["href"],L=["src"],R={class:"backer plus ma1"},E=t("p",{class:"mt10"},[o("If you would like to support Wave UI, you can"),t("a",{class:"mx1",href:"https://github.com/sponsors/antoniandre",target:"_blank"},"become a sponsor"),o("or"),t("a",{class:"ml1",href:"https://www.paypal.me/antoniandre1",target:"_blank"},"make a donation"),o(". Thank you! 🙏🙏")],-1),I=t("h2",{class:"gold"},"Gold Sponsors 🔥",-1),N={class:"gold-sponsors"},T={href:"https://divriots.com/",target:"_blank"},C=["src"];function H(a,n,d,j,F,K){const _=l("title-link"),u=l("w-icon"),m=l("w-tooltip"),A=l("w-flex");return i(),c("main",null,[r(_,{class:"mt4",h1:""},{default:s(()=>[o("Backers")]),_:1}),t("div",D,[G,r(A,{class:"align-center wrap justify-center backers"},{default:s(()=>[(i(!0),c(y,null,w(a.backers,e=>(i(),c("div",{class:"backer ma1",key:e.username},[r(m,null,{activator:s(({on:f})=>[t("a",p({href:e.url,target:"_blank"},h(f,!0)),[t("img",{class:"avatar",alt:"",src:e.avatar,onError:n[0]||(n[0]=g=>g.target.src=a.emptyGif)},null,40,L),r(u,{class:"octocat",xl:""},{default:s(()=>[o("mdi mdi-github")]),_:1})],16,$)]),default:s(()=>[o(B(e.username),1)]),_:2},1024)]))),128)),r(m,null,{activator:s(({on:e})=>[t("div",R,[t("a",p({class:"mx1",href:"https://github.com/sponsors/antoniandre",target:"_blank"},h(e,!0)),[r(u,{class:"white",xl:""},{default:s(()=>[o("wi-plus")]),_:1})],16)])]),default:s(()=>[o("Add yourself!")]),_:1})]),_:1}),E,I,t("div",N,[t("a",T,[t("img",{src:a.$store.state.darkMode?a.DivRiotsLogoGrey:a.DivRiotsLogo},null,8,C)])])])])}const S=["divriots","nmauersberg","KleinSamuel","chris-deep","crbast","CoolGoose","bohdaq","cordova-jauregui","consuman","bastien09","micksp","orefalo","helenetran","antoniandre"],V={data:()=>({emptyGif:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",backers:[],DivRiotsLogo:k,DivRiotsLogoGrey:v}),created(){S.forEach((a,n)=>{this.backers[n]={username:a,avatar:"",url:`https://github.com/${a}`},b.get(`https://api.github.com/users/${a}`).then(d=>{this.backers[n].avatar=d.data.avatar_url})})}},q=x(V,[["render",H]]);export{q as default};
