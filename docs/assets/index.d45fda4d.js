import{r as i,o as h,g as f,a as e,w as t,b as s,l as _,v,d as a,_ as g,J as x}from"./index.bf2cfd71.js";const y=a("p",null,"This horizontal line below is a divider.",-1),k=a("span",{class:"mx size--sm"},"no margin",-1),q=a("code",{class:"mx-2 size--sm"},".mx4",-1),$=a("code",{class:"mx-2 size--sm"},".mx8",-1),I=a("code",{class:"mx-2 size--sm"},".mx12",-1),L=a("h3",{class:"mt12"},[s("Divider in a "),a("code",null,"w-card")],-1),P=a("p",null,`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae et eos
el neque quas consequuntur nisi soluta, voluptate cumque placeat rerum? Quisquam
emporibus mollitia quia soluta adipisci totam quibusdam? Perferendis officia quae
olestias assumenda est obcaecati quaerat ullam corporis voluptatibus ratione, eum
rovident iste possimus explicabo saepe laborum. Beatae perspiciatis at enim eaque?
`,-1),S=a("p",null,`Et possimus corporis ducimus rem tenetur. Deleniti, culpa magni repellendus adipisci
impedit cum eum explicabo alias natus modi asperiores ratione dignissimos qui eligendi?
Quia rem ut ab nesciunt dignissimos natus. Eum corporis officiis natus velit illum.
`,-1),T=a("p",null,`Quisquam soluta distinctio qui vel alias molestiae, doloremque totam eius sequi delectus
optio quam magnam, eaque, voluptatum maxime excepturi perspiciatis saepe provident dicta
sapiente similique quibusdam. Mollitia, vel quam. Laudantium!
`,-1),D=a("h3",null,[s("Divider in a "),a("code",null,"w-toolbar")],-1),M=a("div",{class:"title2 my2"},"Toolbar",-1),O=a("div",{class:"spacer"},null,-1),R=a("span",{class:"mx1"},"Item 1",-1),z=a("span",{class:"mx1"},"Item 2",-1),A=a("span",{class:"mx1"},"Item 3",-1),E=a("span",{class:"mx1"},"Item 4",-1),B=a("span",{class:"mx1"},"Item 5",-1),C=a("span",{class:"mx1"},"Item 6",-1),V=a("p",null,`A default slot is available to provide some content to display in the middle of the divider.
This is often use with a OR keyword to offer an alternative.`,-1);function N(o,u){const r=i("title-link"),n=i("w-divider"),w=i("alert"),l=i("ssh-pre"),d=i("w-card"),c=i("w-toolbar"),m=i("example"),p=i("w-button"),b=i("w-flex");return h(),f("div",null,[e(r,{h2:""},{default:t(()=>[s("Horizontal")]),_:1}),y,e(n,{class:"mt3 mb8"}),e(w,{tip:""},{default:t(()=>[s("Tip: you can set margins on a divider to space out sections or to reduce its width/height."),e(n,{class:"my4"},{default:t(()=>[k]),_:1}),e(n,{class:"mx4 my4"},{default:t(()=>[q]),_:1}),e(n,{class:"mx8 my4"},{default:t(()=>[$]),_:1}),e(n,{class:"mx12 my4"},{default:t(()=>[I]),_:1})]),_:1}),L,e(d,null,{default:t(()=>[P,e(n,{class:"my6 mx-3"}),_(e(l,{class:"mb4",language:"pug",dark:o.$store.state.darkMode},{default:t(()=>[s("w-divider.my6.mx-3")]),_:1},8,["dark"]),[[v,o.$store.state.usePug]]),_(e(l,{class:"mb4",language:"html-vue",dark:o.$store.state.darkMode},{default:t(()=>[s('<w-divider class="my6 mx-3"></w-divider>')]),_:1},8,["dark"]),[[v,!o.$store.state.usePug]]),S,e(n,{class:"ma6",color:"amber"}),_(e(l,{class:"mb4",language:"pug",dark:o.$store.state.darkMode},{default:t(()=>[s('w-divider.ma6(color="amber")')]),_:1},8,["dark"]),[[v,o.$store.state.usePug]]),_(e(l,{class:"mb4",language:"html-vue",dark:o.$store.state.darkMode},{default:t(()=>[s('<w-divider color="amber" class="ma6"></w-divider>')]),_:1},8,["dark"]),[[v,!o.$store.state.usePug]]),T]),_:1}),e(r,{h2:""},{default:t(()=>[s("Vertical")]),_:1}),D,e(m,null,{pug:t(()=>[s(`w-toolbar.py0(bg-color="grey-light5")
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
`)]),default:t(()=>[e(c,{class:"py0","bg-color":o.$store.state.darkMode?"grey-dark5":"grey-light5"},{default:t(()=>[M,O,R,z,e(n,{class:"mx1",vertical:""}),A,E,e(n,{class:"mx1",vertical:""}),B,C]),_:1},8,["bg-color"])]),_:1}),e(r,{h2:""},{default:t(()=>[s("Color")]),_:1}),e(m,null,{pug:t(()=>[s('w-divider.ma6(color="green")')]),html:t(()=>[s(`<w-divider class="ma6" color="green" />
`)]),default:t(()=>[e(n,{class:"ma6",color:"green"})]),_:1}),e(r,{h2:""},{default:t(()=>[s("With content")]),_:1}),V,e(m,null,{pug:t(()=>[s(`w-flex(align-center justify-center)
  w-button.my6 Log in
  w-divider.mx6(vertical color="pink") OR
  w-button.my6 Sign in`)]),html:t(()=>[s(`<w-flex align-center justify-center>
  <w-button class="my6">Log in</w-button>
  <w-divider class="mx6" vertical color="pink">OR</w-divider>
  <w-button class="my6">Sign in</w-button>
</w-flex>`)]),default:t(()=>[e(b,{"align-center":"","justify-center":""},{default:t(()=>[e(p,{class:"my6"},{default:t(()=>[s("Log in")]),_:1}),e(n,{class:"mx6",vertical:"",color:"pink"},{default:t(()=>[s("OR")]),_:1}),e(p,{class:"my6"},{default:t(()=>[s("Sign in")]),_:1})]),_:1})]),_:1}),e(m,null,{pug:t(()=>[s(`w-card.md6.maa.text-center
  w-button.my12 Log in
  w-divider.mx6(color="pink") OR
  w-button.my12 Sign in`)]),html:t(()=>[s(`<w-card class="md6 maa text-center">
  <w-button class="my12">Log in</w-button>
  <w-divider class="mx6" color="pink">OR</w-divider>
  <w-button class="my12">Sign in</w-button>
</w-card>`)]),default:t(()=>[e(d,{class:"md6 maa text-center"},{default:t(()=>[e(p,{class:"my12"},{default:t(()=>[s("Log in")]),_:1}),e(n,{class:"mx6",color:"pink"},{default:t(()=>[s("OR")]),_:1}),e(p,{class:"my12"},{default:t(()=>[s("Sign in")]),_:1})]),_:1})]),_:1})])}const Q={},W=g(Q,[["render",N]]),j=a("div",{class:"w-divider my12"},null,-1);function H(o,u,r,n,w,l){const d=i("title-link"),c=i("component-api");return h(),f("div",null,[j,e(d,{class:"title1",h2:""},{default:t(()=>[s("API")]),_:1}),e(c,{class:"mt0",items:l.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(c,{items:o.slots,title:"Slots"},null,8,["items"]),e(c,{items:l.events,title:"Events"},null,8,["items"])])}const J={color:'Provide a color for the divider. Accepts all the color names of the color palette, status colors, or custom colors (learn more about all the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',vertical:"When set to true, the divider will display vertically."},F={default:{description:"An optional HTML content to display in the middle of the divider."}},G={},K={data:()=>({propsDescs:J,slots:F}),computed:{props(){return x.props},events(){return x.emits.reduce((o,u)=>(o[u]=G[u]||{})&&o,{})}}},U=g(K,[["render",H]]);function X(o,u,r,n,w,l){const d=i("ui-component-title"),c=i("examples"),m=i("api");return h(),f("main",null,[e(d,null,{default:t(()=>[s("w-divider")]),_:1}),e(c),e(m)])}const Y={components:{Examples:W,Api:U}},ee=g(Y,[["render",X]]);export{ee as default};
