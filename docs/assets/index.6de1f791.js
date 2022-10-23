import{r as a,o as h,f as x,a as e,w as t,b as s,l as _,v,d as n,_ as f,J as g}from"./index.ffdea089.js";const y=n("p",null,"This horizontal line bellow is a divider.",-1),q=n("span",{class:"mx size--sm"},"no margin",-1),I=n("code",{class:"mx-2 size--sm"},".mx4",-1),k=n("code",{class:"mx-2 size--sm"},".mx8",-1),$=n("code",{class:"mx-2 size--sm"},".mx12",-1),L=n("h3",{class:"mt12"},[s("Divider in a "),n("code",null,"w-card")],-1),P=n("p",null,`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae et eos
el neque quas consequuntur nisi soluta, voluptate cumque placeat rerum? Quisquam
emporibus mollitia quia soluta adipisci totam quibusdam? Perferendis officia quae
olestias assumenda est obcaecati quaerat ullam corporis voluptatibus ratione, eum
rovident iste possimus explicabo saepe laborum. Beatae perspiciatis at enim eaque?
`,-1),S=n("p",null,`Et possimus corporis ducimus rem tenetur. Deleniti, culpa magni repellendus adipisci
impedit cum eum explicabo alias natus modi asperiores ratione dignissimos qui eligendi?
Quia rem ut ab nesciunt dignissimos natus. Eum corporis officiis natus velit illum.
`,-1),T=n("p",null,`Quisquam soluta distinctio qui vel alias molestiae, doloremque totam eius sequi delectus
optio quam magnam, eaque, voluptatum maxime excepturi perspiciatis saepe provident dicta
sapiente similique quibusdam. Mollitia, vel quam. Laudantium!
`,-1),D=n("h3",null,[s("Divider in a "),n("code",null,"w-toolbar")],-1),O=n("div",{class:"title2 my2"},"Toolbar",-1),R=n("div",{class:"spacer"},null,-1),z=n("span",{class:"mx1"},"Item 1",-1),A=n("span",{class:"mx1"},"Item 2",-1),E=n("span",{class:"mx1"},"Item 3",-1),B=n("span",{class:"mx1"},"Item 4",-1),C=n("span",{class:"mx1"},"Item 5",-1),V=n("span",{class:"mx1"},"Item 6",-1),N=n("p",null,`A default slot is available to provide some content to display in the middle of the divider.
This is often use with a OR keyword to offer an alternative.`,-1);function Q(o,u){const r=a("title-link"),i=a("w-divider"),w=a("alert"),l=a("ssh-pre"),m=a("w-card"),c=a("w-toolbar"),d=a("example"),p=a("w-button"),b=a("w-flex");return h(),x("div",null,[e(r,{h2:""},{default:t(()=>[s("Horizontal")]),_:1}),y,e(i,{class:"mt3 mb8"}),e(w,{tip:""},{default:t(()=>[s("Tip: you can set margins on a divider to space out sections or to reduce its width/height."),e(i,{class:"my4"},{default:t(()=>[q]),_:1}),e(i,{class:"mx4 my4"},{default:t(()=>[I]),_:1}),e(i,{class:"mx8 my4"},{default:t(()=>[k]),_:1}),e(i,{class:"mx12 my4"},{default:t(()=>[$]),_:1})]),_:1}),L,e(m,null,{default:t(()=>[P,e(i,{class:"my6 mx-3"}),_(e(l,{class:"mb4",language:"pug"},{default:t(()=>[s("w-divider.my6.mx-3")]),_:1},512),[[v,o.$store.state.usePug]]),_(e(l,{class:"mb4",language:"html-vue"},{default:t(()=>[s('<w-divider class="my6 mx-3"></w-divider>')]),_:1},512),[[v,!o.$store.state.usePug]]),S,e(i,{class:"ma6",color:"amber"}),_(e(l,{class:"mb4",language:"pug"},{default:t(()=>[s('w-divider.ma6(color="amber")')]),_:1},512),[[v,o.$store.state.usePug]]),_(e(l,{class:"mb4",language:"html-vue"},{default:t(()=>[s('<w-divider color="amber" class="ma6"></w-divider>')]),_:1},512),[[v,!o.$store.state.usePug]]),T]),_:1}),e(r,{h2:""},{default:t(()=>[s("Vertical")]),_:1}),D,e(d,null,{pug:t(()=>[s(`w-toolbar.py0(bg-color="grey-light5")
  .title2.my2 Toolbar
  .spacer
  span.mx1 Item 1
  span.mx1 Item 2
  w-divider.mx1(vertical)
  span.mx1 Item 3
  span.mx1 Item 4
  w-divider.mx1(vertical)
  span.mx1 Item 5
  span.mx1 Item 6`)]),html:t(()=>[s(`<w-toolbar class="py0" bg-color="grey-light5">
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
`)]),default:t(()=>[e(c,{class:"py0","bg-color":"grey-light5"},{default:t(()=>[O,R,z,A,e(i,{class:"mx1",vertical:""}),E,B,e(i,{class:"mx1",vertical:""}),C,V]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[s("Color")]),_:1}),e(d,null,{pug:t(()=>[s('w-divider.ma6(color="green")')]),html:t(()=>[s(`<w-divider class="ma6" color="green" />
`)]),default:t(()=>[e(i,{class:"ma6",color:"green"})]),_:1}),e(r,{h2:""},{default:t(()=>[s("With content")]),_:1}),N,e(d,null,{pug:t(()=>[s(`w-flex(align-center justify-center)
  w-button.my6 Log in
  w-divider.mx6(vertical color="pink") OR
  w-button.my6 Sign in`)]),html:t(()=>[s(`<w-flex align-center justify-center>
  <w-button class="my6">Log in</w-button>
  <w-divider class="mx6" vertical color="pink">OR</w-divider>
  <w-button class="my6">Sign in</w-button>
</w-flex>`)]),default:t(()=>[e(b,{"align-center":"","justify-center":""},{default:t(()=>[e(p,{class:"my6"},{default:t(()=>[s("Log in")]),_:1}),e(i,{class:"mx6",vertical:"",color:"pink"},{default:t(()=>[s("OR")]),_:1}),e(p,{class:"my6"},{default:t(()=>[s("Sign in")]),_:1})]),_:1})]),_:1}),e(d,null,{pug:t(()=>[s(`w-card.md6.maa.text-center
  w-button.my12 Log in
  w-divider.mx6(color="pink") OR
  w-button.my12 Sign in`)]),html:t(()=>[s(`<w-card class="md6 maa text-center">
  <w-button class="my12">Log in</w-button>
  <w-divider class="mx6" color="pink">OR</w-divider>
  <w-button class="my12">Sign in</w-button>
</w-card>`)]),default:t(()=>[e(m,{class:"md6 maa text-center"},{default:t(()=>[e(p,{class:"my12"},{default:t(()=>[s("Log in")]),_:1}),e(i,{class:"mx6",color:"pink"},{default:t(()=>[s("OR")]),_:1}),e(p,{class:"my12"},{default:t(()=>[s("Sign in")]),_:1})]),_:1})]),_:1})])}const W={},j=f(W,[["render",Q]]),H=n("div",{class:"w-divider my12"},null,-1);function M(o,u,r,i,w,l){const m=a("title-link"),c=a("component-api");return h(),x("div",null,[H,e(m,{class:"title1",h2:""},{default:t(()=>[s("API")]),_:1}),e(c,{class:"mt0",items:l.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(c,{items:o.slots,title:"Slots"},null,8,["items"]),e(c,{items:l.events,title:"Events"},null,8,["items"])])}const J={color:'Provide a color for the divider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about all the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',vertical:"When set to true, the divider will display vertically."},F={default:{description:"An optional HTML content to display in the middle of the divider."}},G={},K={data:()=>({propsDescs:J,slots:F}),computed:{props(){return g.props},events(){return g.emits.reduce((o,u)=>(o[u]=G[u]||{})&&o,{})}}},U=f(K,[["render",M]]);function X(o,u,r,i,w,l){const m=a("ui-component-title"),c=a("examples"),d=a("api");return h(),x("main",null,[e(m,null,{default:t(()=>[s("w-divider")]),_:1}),e(c),e(d)])}const Y={components:{Examples:j,Api:U}},ee=f(Y,[["render",X]]);export{ee as default};
