import{r as i,o as w,f as x,a as e,w as t,b5 as p,bo as h,e as s,b as o,_ as f,bE as g}from"./index.d8ad3dc7.js";const y=s("Horizontal"),q=o("p",null,"This horizontal line bellow is a divider.",-1),I=s("Tip: you can set margins on a divider to space out sections or to reduce its width/height."),$=o("span",{class:"mx size--sm"},"no margin",-1),k=o("code",{class:"mx-2 size--sm"},".mx4",-1),L=o("code",{class:"mx-2 size--sm"},".mx8",-1),P=o("code",{class:"mx-2 size--sm"},".mx12",-1),S=o("h3",{class:"mt12"},[s("Divider in a "),o("code",null,"w-card")],-1),T=o("p",null,`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae et eos
el neque quas consequuntur nisi soluta, voluptate cumque placeat rerum? Quisquam
emporibus mollitia quia soluta adipisci totam quibusdam? Perferendis officia quae
olestias assumenda est obcaecati quaerat ullam corporis voluptatibus ratione, eum
rovident iste possimus explicabo saepe laborum. Beatae perspiciatis at enim eaque?
`,-1),D=s("w-divider.my6.mx-3"),O=s('<w-divider class="my6 mx-3"></w-divider>'),R=o("p",null,`Et possimus corporis ducimus rem tenetur. Deleniti, culpa magni repellendus adipisci
impedit cum eum explicabo alias natus modi asperiores ratione dignissimos qui eligendi?
Quia rem ut ab nesciunt dignissimos natus. Eum corporis officiis natus velit illum.
`,-1),z=s('w-divider.ma6(color="amber")'),E=s('<w-divider color="amber" class="ma6"></w-divider>'),A=o("p",null,`Quisquam soluta distinctio qui vel alias molestiae, doloremque totam eius sequi delectus
optio quam magnam, eaque, voluptatum maxime excepturi perspiciatis saepe provident dicta
sapiente similique quibusdam. Mollitia, vel quam. Laudantium!
`,-1),B=s("Vertical"),C=o("h3",null,[s("Divider in a "),o("code",null,"w-toolbar")],-1),V=o("div",{class:"title2 my2"},"Toolbar",-1),N=o("div",{class:"spacer"},null,-1),Q=o("span",{class:"mx1"},"Item 1",-1),W=o("span",{class:"mx1"},"Item 2",-1),j=o("span",{class:"mx1"},"Item 3",-1),H=o("span",{class:"mx1"},"Item 4",-1),M=o("span",{class:"mx1"},"Item 5",-1),F=o("span",{class:"mx1"},"Item 6",-1),G=s(`w-toolbar.py0(bg-color="grey-light5")
  .title2.my2 Toolbar
  .spacer
  span.mx1 Item 1
  span.mx1 Item 2
  w-divider.mx1(vertical)
  span.mx1 Item 3
  span.mx1 Item 4
  w-divider.mx1(vertical)
  span.mx1 Item 5
  span.mx1 Item 6`),J=s(`<w-toolbar class="py0" bg-color="grey-light5">
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
`),K=s("Color"),U=s('w-divider.ma6(color="green")'),X=s(`<w-divider class="ma6" color="green" />
`),Y=s("With content"),Z=o("p",null,`A default slot is available to provide some content to display in the middle of the divider.
This is often use with a OR keyword to offer an alternative.`,-1),ee=s("Log in"),te=s("OR"),se=s("Sign in"),oe=s(`w-flex(align-center justify-center)
  w-button.my6 Log in
  w-divider.mx6(vertical color="pink") OR
  w-button.my6 Sign in`),ne=s(`<w-flex align-center justify-center>
  <w-button class="my6">Log in</w-button>
  <w-divider class="mx6" vertical color="pink">OR</w-divider>
  <w-button class="my6">Sign in</w-button>
</w-flex>`),ie=s("Log in"),ae=s("OR"),le=s("Sign in"),ce=s(`w-card.md6.maa.text-center
  w-button.my12 Log in
  w-divider.mx6(color="pink") OR
  w-button.my12 Sign in`),de=s(`<w-card class="md6 maa text-center">
  <w-button class="my12">Log in</w-button>
  <w-divider class="mx6" color="pink">OR</w-divider>
  <w-button class="my12">Sign in</w-button>
</w-card>`);function re(a,u){const d=i("title-link"),n=i("w-divider"),v=i("alert"),l=i("ssh-pre"),r=i("w-card"),c=i("w-toolbar"),m=i("example"),_=i("w-button"),b=i("w-flex");return w(),x("div",null,[e(d,{h2:""},{default:t(()=>[y]),_:1}),q,e(n,{class:"mt3 mb8"}),e(v,{tip:""},{default:t(()=>[I,e(n,{class:"my4"},{default:t(()=>[$]),_:1}),e(n,{class:"mx4 my4"},{default:t(()=>[k]),_:1}),e(n,{class:"mx8 my4"},{default:t(()=>[L]),_:1}),e(n,{class:"mx12 my4"},{default:t(()=>[P]),_:1})]),_:1}),S,e(r,null,{default:t(()=>[T,e(n,{class:"my6 mx-3"}),p(e(l,{class:"mb4",language:"pug"},{default:t(()=>[D]),_:1},512),[[h,a.$store.state.usePug]]),p(e(l,{class:"mb4",language:"html-vue"},{default:t(()=>[O]),_:1},512),[[h,!a.$store.state.usePug]]),R,e(n,{class:"ma6",color:"amber"}),p(e(l,{class:"mb4",language:"pug"},{default:t(()=>[z]),_:1},512),[[h,a.$store.state.usePug]]),p(e(l,{class:"mb4",language:"html-vue"},{default:t(()=>[E]),_:1},512),[[h,!a.$store.state.usePug]]),A]),_:1}),e(d,{h2:""},{default:t(()=>[B]),_:1}),C,e(m,null,{pug:t(()=>[G]),html:t(()=>[J]),default:t(()=>[e(c,{class:"py0","bg-color":"grey-light5"},{default:t(()=>[V,N,Q,W,e(n,{class:"mx1",vertical:""}),j,H,e(n,{class:"mx1",vertical:""}),M,F]),_:1})]),_:1}),e(d,{h2:""},{default:t(()=>[K]),_:1}),e(m,null,{pug:t(()=>[U]),html:t(()=>[X]),default:t(()=>[e(n,{class:"ma6",color:"green"})]),_:1}),e(d,{h2:""},{default:t(()=>[Y]),_:1}),Z,e(m,null,{pug:t(()=>[oe]),html:t(()=>[ne]),default:t(()=>[e(b,{"align-center":"","justify-center":""},{default:t(()=>[e(_,{class:"my6"},{default:t(()=>[ee]),_:1}),e(n,{class:"mx6",vertical:"",color:"pink"},{default:t(()=>[te]),_:1}),e(_,{class:"my6"},{default:t(()=>[se]),_:1})]),_:1})]),_:1}),e(m,null,{pug:t(()=>[ce]),html:t(()=>[de]),default:t(()=>[e(r,{class:"md6 maa text-center"},{default:t(()=>[e(_,{class:"my12"},{default:t(()=>[ie]),_:1}),e(n,{class:"mx6",color:"pink"},{default:t(()=>[ae]),_:1}),e(_,{class:"my12"},{default:t(()=>[le]),_:1})]),_:1})]),_:1})])}const me={};var ue=f(me,[["render",re]]);const _e=o("div",{class:"w-divider my12"},null,-1),pe=s("API");function he(a,u,d,n,v,l){const r=i("title-link"),c=i("component-api");return w(),x("div",null,[_e,e(r,{class:"title1",h2:""},{default:t(()=>[pe]),_:1}),e(c,{class:"mt0",items:l.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(c,{items:a.slots,title:"Slots"},null,8,["items"]),e(c,{items:l.events,title:"Events"},null,8,["items"])])}const ve={color:'Provide a color for the divider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about all the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',vertical:"When set to true, the divider will display vertically."},we={default:{description:"An optional HTML content to display in the middle of the divider."}},xe={},fe={data:()=>({propsDescs:ve,slots:we}),computed:{props(){return g.props},events(){return g.emits.reduce((a,u)=>(a[u]=xe[u]||{})&&a,{})}}};var ge=f(fe,[["render",he]]);const be=s("w-divider");function ye(a,u,d,n,v,l){const r=i("ui-component-title"),c=i("examples"),m=i("api");return w(),x("main",null,[e(r,null,{default:t(()=>[be]),_:1}),e(c),e(m)])}const qe={components:{Examples:ue,Api:ge}};var $e=f(qe,[["render",ye]]);export{$e as default};
