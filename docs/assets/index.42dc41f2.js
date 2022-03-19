import{r as n,o as v,e as w,f as e,w as t,h as p,v as h,i as s,g as o}from"./vendor.e64646cc.js";import{_ as f,l as g}from"./index.90e40c3f.js";const b=s("Horizontal"),y=o("p",null,[s("This horizontal line bellow is a divider."),o("br"),s(`
You can set margins on a divider space out or reduce the width/height of the divider.`)],-1),q=o("h3",null,[s("Divider in a "),o("code",null,"w-card")],-1),I=o("p",null,`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae et eos
el neque quas consequuntur nisi soluta, voluptate cumque placeat rerum? Quisquam
emporibus mollitia quia soluta adipisci totam quibusdam? Perferendis officia quae
olestias assumenda est obcaecati quaerat ullam corporis voluptatibus ratione, eum
rovident iste possimus explicabo saepe laborum. Beatae perspiciatis at enim eaque?
`,-1),$=s("w-divider.my6.mx-3"),k=s('<w-divider class="my6 mx-3"></w-divider>'),L=o("p",null,`Et possimus corporis ducimus rem tenetur. Deleniti, culpa magni repellendus adipisci
impedit cum eum explicabo alias natus modi asperiores ratione dignissimos qui eligendi?
Quia rem ut ab nesciunt dignissimos natus. Eum corporis officiis natus velit illum.
`,-1),P=s('w-divider.ma6(color="amber")'),S=s('<w-divider color="amber" class="ma6"></w-divider>'),D=o("p",null,`Quisquam soluta distinctio qui vel alias molestiae, doloremque totam eius sequi delectus
optio quam magnam, eaque, voluptatum maxime excepturi perspiciatis saepe provident dicta
sapiente similique quibusdam. Mollitia, vel quam. Laudantium!
`,-1),O=s("Vertical"),R=o("h3",null,[s("Divider in a "),o("code",null,"w-toolbar")],-1),T=o("div",{class:"title2 my2"},"Toolbar",-1),A=o("div",{class:"spacer"},null,-1),E=o("span",{class:"mx1"},"Item 1",-1),j=o("span",{class:"mx1"},"Item 2",-1),B=o("span",{class:"mx1"},"Item 3",-1),C=o("span",{class:"mx1"},"Item 4",-1),V=o("span",{class:"mx1"},"Item 5",-1),N=o("span",{class:"mx1"},"Item 6",-1),Q=s(`w-toolbar.py0(bg-color="grey-light5")
  .title2.my2 Toolbar
  .spacer
  span.mx1 Item 1
  span.mx1 Item 2
  w-divider.mx1(vertical)
  span.mx1 Item 3
  span.mx1 Item 4
  w-divider.mx1(vertical)
  span.mx1 Item 5
  span.mx1 Item 6`),W=s(`<w-toolbar class="py0" bg-color="grey-light5">
  <div class="title2 my2">Toolbar</div>
  <div class="spacer"></div>
  <span class="mx1">Item 1</span>
  <span class="mx1">Item 2</span>
  <w-divider class="mx1" vertical></w-divider>
  <span class="mx1">Item 3</span>
  <span class="mx1">Item 4</span>
  <w-divider class="mx1" vertical></w-divider>
  <span class="mx1">Item 5</span>
  <span class="mx1">Item 6</span>
</w-toolbar>
`),z=s("Color"),H=s('w-divider.ma6(color="green")'),M=s(`<w-divider class="ma6" color="green" />
`),Y=s("With content"),F=o("p",null,`A default slot is available to provide some content to display in the middle of the divider.
This is often use with a OR keyword to offer an alternative.`,-1),G=s("Log in"),J=s("OR"),K=s("Sign in"),U=s(`w-flex(align-center justify-center)
  w-button.my6 Log in
  w-divider.mx6(vertical color="pink") OR
  w-button.my6 Sign in`),X=s(`<w-flex align-center justify-center>
  <w-button class="my6">Log in</w-button>
  <w-divider class="mx6" vertical color="pink">OR</w-divider>
  <w-button class="my6">Sign in</w-button>
</w-flex>`),Z=s("Log in"),ee=s("OR"),te=s("Sign in"),se=s(`w-card.md6.maa.text-center
  w-button.my12 Log in
  w-divider.mx6(color="pink") OR
  w-button.my12 Sign in`),oe=s(`<w-card class="md6 maa text-center">
  <w-button class="my12">Log in</w-button>
  <w-divider class="mx6" color="pink">OR</w-divider>
  <w-button class="my12">Sign in</w-button>
</w-card>`);function ne(i,u){const c=n("title-link"),a=n("w-divider"),r=n("ssh-pre"),d=n("w-card"),_=n("w-toolbar"),l=n("example"),m=n("w-button"),x=n("w-flex");return v(),w("div",null,[e(c,{h2:""},{default:t(()=>[b]),_:1}),y,e(a,{class:"ma10"}),q,e(d,null,{default:t(()=>[I,e(a,{class:"my6 mx-3"}),p(e(r,{class:"mb4",language:"pug"},{default:t(()=>[$]),_:1},512),[[h,i.$store.state.usePug]]),p(e(r,{class:"mb4",language:"html-vue"},{default:t(()=>[k]),_:1},512),[[h,!i.$store.state.usePug]]),L,e(a,{class:"ma6",color:"amber"}),p(e(r,{class:"mb4",language:"pug"},{default:t(()=>[P]),_:1},512),[[h,i.$store.state.usePug]]),p(e(r,{class:"mb4",language:"html-vue"},{default:t(()=>[S]),_:1},512),[[h,!i.$store.state.usePug]]),D]),_:1}),e(c,{h2:""},{default:t(()=>[O]),_:1}),R,e(l,null,{pug:t(()=>[Q]),html:t(()=>[W]),default:t(()=>[e(_,{class:"py0","bg-color":"grey-light5"},{default:t(()=>[T,A,E,j,e(a,{class:"mx1",vertical:""}),B,C,e(a,{class:"mx1",vertical:""}),V,N]),_:1})]),_:1}),e(c,{h2:""},{default:t(()=>[z]),_:1}),e(l,null,{pug:t(()=>[H]),html:t(()=>[M]),default:t(()=>[e(a,{class:"ma6",color:"green"})]),_:1}),e(c,{h2:""},{default:t(()=>[Y]),_:1}),F,e(l,null,{pug:t(()=>[U]),html:t(()=>[X]),default:t(()=>[e(x,{"align-center":"","justify-center":""},{default:t(()=>[e(m,{class:"my6"},{default:t(()=>[G]),_:1}),e(a,{class:"mx6",vertical:"",color:"pink"},{default:t(()=>[J]),_:1}),e(m,{class:"my6"},{default:t(()=>[K]),_:1})]),_:1})]),_:1}),e(l,null,{pug:t(()=>[se]),html:t(()=>[oe]),default:t(()=>[e(d,{class:"md6 maa text-center"},{default:t(()=>[e(m,{class:"my12"},{default:t(()=>[Z]),_:1}),e(a,{class:"mx6",color:"pink"},{default:t(()=>[ee]),_:1}),e(m,{class:"my12"},{default:t(()=>[te]),_:1})]),_:1})]),_:1})])}const ie={};var ae=f(ie,[["render",ne]]);const le=o("div",{class:"w-divider my12"},null,-1),ce=s("API");function re(i,u,c,a,r,d){const _=n("title-link"),l=n("component-api");return v(),w("div",null,[le,e(_,{class:"title1",h2:""},{default:t(()=>[ce]),_:1}),e(l,{class:"mt0",items:d.props,descriptions:i.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(l,{items:i.slots,title:"Slots"},null,8,["items"]),e(l,{items:d.events,title:"Events"},null,8,["items"])])}const de={color:'Provide a color for the divider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about all the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',vertical:"When set to true, the divider will display vertically."},me={default:{description:"An optional HTML content to display in the middle of the divider."}},ue={},_e={data:()=>({propsDescs:de,slots:me}),computed:{props(){return g.props},events(){return g.emits.reduce((i,u)=>(i[u]=ue[u]||{})&&i,{})}}};var pe=f(_e,[["render",re]]);const he=s("w-divider");function ve(i,u,c,a,r,d){const _=n("ui-component-title"),l=n("examples"),m=n("api");return v(),w("main",null,[e(_,null,{default:t(()=>[he]),_:1}),e(l),e(m)])}const we={components:{Examples:ae,Api:pe}};var xe=f(we,[["render",ve]]);export{xe as default};
