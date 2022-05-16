import{r as l,o as w,f as u,a as e,w as t,e as s,b as o,_ as b,c2 as v}from"./index.fecc98fd.js";const f=s("Simple toolbar with shadow"),g=o("div",{class:"title2 my0"},"Title",-1),x=o("div",{class:"spacer"},null,-1),I=o("span",{class:"ml2"},"Item 1",-1),y=o("span",{class:"ml2"},"Item 2",-1),k=o("span",{class:"ml2"},"Item 3",-1),B=s("wi-wave"),T=o("div",{class:"title3 my0"},"Wave UI",-1),z=o("div",{class:"spacer"},null,-1),S=s(`w-toolbar(shadow)
  .title2 Title
  .spacer
  span.ml2 Item 1
  span.ml2 Item 2
  span.ml2 Item 3

w-toolbar.mt6.py1(shadow)
  w-icon.mr3(size="2.5em" color="light-blue-dark3") wi-wave
  .title3.my0 Wave UI
  .spacer
  w-button.ml3(icon="mdi mdi-home" text lg)
  w-button.ml3(icon="mdi mdi-chat" text lg)
  w-button.ml3(icon="mdi mdi-email" text lg)`),$=s(`<w-toolbar shadow>
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>

<w-toolbar shadow class="mt6 py1">
  <w-icon color="light-blue-dark3" size="2.5em">wi-wave</w-icon>
  <div class="title3 mr3">Wave UI</div>
  <div class="spacer"></div>
  <w-button icon="mdi mdi-home" text lg class="ml3"></w-button>
  <w-button icon="mdi mdi-chat" text lg class="ml3"></w-button>
  <w-button icon="mdi mdi-email" text lg class="ml3"></w-button>
</w-toolbar>
`),A=s("Background color & text color"),C=o("p",null,[s("Like in most components, you can set a "),o("code",null,"color"),s(" for the text and a "),o("code",null,"bg-color"),s(` for the
background.`)],-1),V=o("div",{class:"title2 my0"},"Title",-1),W=o("div",{class:"spacer"},null,-1),O=o("span",{class:"ml2"},"Item 1",-1),P=o("span",{class:"ml2"},"Item 2",-1),j=o("span",{class:"ml2"},"Item 3",-1),D=s(`w-toolbar(bg-color="blue-light5" color="blue-dark3")
  .title2 Title
  .spacer
  span.ml2 Item 1
  span.ml2 Item 2
  span.ml2 Item 3`),E=s(`<w-toolbar bg-color="blue-light5" color="blue-dark3">
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>
`),N=s("Toolbars inside w-card"),U=o("p",null,`The w-card component will detect if there is a toolbar in the title slot or in the actions
slot and will remove the default padding and border on this slot if there is.
`,-1),Y=o("div",{class:"title2 my0"},"Top Bar",-1),q=o("div",{class:"spacer"},null,-1),L=o("span",{class:"ml2"},"Item 1",-1),R=o("span",{class:"ml2"},"Item 2",-1),F=o("span",{class:"ml2"},"Item 3",-1),G=o("div",{class:"title2 my0"},"Bottom Bar",-1),H=o("div",{class:"spacer"},null,-1),J=o("span",{class:"ml2"},"Item 1",-1),K=o("span",{class:"ml2"},"Item 2",-1),M=o("span",{class:"ml2"},"Item 3",-1),Q=s(`w-flex.mt4(wrap :gap="4")
  w-card
    template(#title)
      w-toolbar
        .title2 Top Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3

  w-card
    template(#actions)
      w-toolbar(bottom)
        .title2 Bottom Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3`),X=s(`<w-flex wrap :gap="4" class="mt4">
  <w-card>
    <template #title>
      <w-toolbar>
        <div class="title2">Top Bar</div>
        <div class="spacer"></div>
        <span class="ml2">Item 1</span>
        <span class="ml2">Item 2</span>
        <span class="ml2">Item 3</span>
      </w-toolbar>
    </template>
  </w-card>

  <w-card>
    <template #actions>
      <w-toolbar bottom>
        <div class="title2">Bottom Bar</div>
        <div class="spacer"></div>
        <span class="ml2">Item 1</span>
        <span class="ml2">Item 2</span>
        <span class="ml2">Item 3</span>
      </w-toolbar>
    </template>
  </w-card>
</w-flex>`),Z=s(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`),tt=s("With shadow"),et=o("div",{class:"title2 my0"},"Top Bar",-1),ot=o("div",{class:"spacer"},null,-1),st=o("span",{class:"ml2"},"Item 1",-1),at=o("span",{class:"ml2"},"Item 2",-1),nt=o("span",{class:"ml2"},"Item 3",-1),lt=o("div",{class:"title2 my0"},"Bottom Bar",-1),ct=o("div",{class:"spacer"},null,-1),it=o("span",{class:"ml2"},"Item 1",-1),rt=o("span",{class:"ml2"},"Item 2",-1),dt=o("span",{class:"ml2"},"Item 3",-1),mt=s(`w-flex.mt4(wrap :gap="4")
  w-card
    template(#title)
      w-toolbar(shadow)
        .title2.my0 Top Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3
  w-card
    template(#actions)
      w-toolbar(bottom shadow)
        .title2.my0 Bottom Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3`),pt=s(`<w-flex wrap :gap="4" class="mt4">
  <w-card>
    <template #title>
      <w-toolbar shadow>
        <div class="title2">Top Bar</div>
        <div class="spacer"></div>
        <span class="ml2">Item 1</span>
        <span class="ml2">Item 2</span>
        <span class="ml2">Item 3</span>
      </w-toolbar>
    </template>
  </w-card>

  <w-card>
    <template #actions>
      <w-toolbar bottom shadow>
        <div class="title2">Bottom Bar</div>
        <div class="spacer"></div>
        <span class="ml2">Item 1</span>
        <span class="ml2">Item 2</span>
        <span class="ml2">Item 3</span>
      </w-toolbar>
    </template>
  </w-card>
</w-flex>`),ht=s(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`),_t=s("Custom toolbar height"),wt=o("p",null,[s("The "),o("code",null,"w-toolbar"),s(` component also accepts a height. It can be set as a string with units
or a number of pixels (without unit).
`)],-1),ut=o("div",{class:"title2 my0"},"Title",-1),bt=o("div",{class:"spacer"},null,-1),vt=o("span",{class:"mx1"},"Item 1",-1),ft=o("span",{class:"mx1"},"Item 2",-1),gt=o("span",{class:"mx1"},"Item 3",-1),xt=o("span",{class:"mx1"},"Item 4",-1),It=o("span",{class:"mx1"},"Item 5",-1),yt=o("span",{class:"mx1"},"Item 6",-1),kt=s(`w-toolbar.py0(bg-color="blue-light5" color="blue-dark3" height="5em")
  .title2 Title
  .spacer
  span.mx1 Item 1
  span.mx1 Item 2
  w-divider.mx2(vertical)
  span.mx1 Item 3
  span.mx1 Item 4
  w-divider.mx2(vertical)
  span.mx1 Item 5
  span.mx1 Item 6`),Bt=s(`<w-toolbar
  bg-color="blue-light5"
  color="blue-dark3"
  height="5em"
  class="py0">
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="mx1">Item 1</span>
  <span class="mx1">Item 2</span>
  <w-divider vertical class="mx2"></w-divider>
  <span class="mx1">Item 3</span>
  <span class="mx1">Item 4</span>
  <w-divider vertical class="mx2"></w-divider>
  <span class="mx1">Item 5</span>
  <span class="mx1">Item 6</span>
</w-toolbar>
`),Tt=s("Vertical toolbar with absolute position"),zt=o("p",null,[s(`You can use the absolute (or fixed) position to quickly place a toolbar to the left, top,
right or bottom of the container (or screen).`),o("br"),s(`
In this case, you may want to add a padding on the content container to compensate the toolbar
if you don't want the toolbar to overlap the content (like in this example).`),o("br"),s(`
Alternatively, you can place the toolbar and the content container in a w-flex container so
they will never overlap - like in the next example.`)],-1),St=s("wi-wave"),$t=o("div",{class:"spacer no-grow mx3"},null,-1),At=s("wi-wave"),Ct=s(`w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute left)
    w-icon(size="2.2em" color="primary") wi-wave

.spacer.no-grow.mx3

w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute right)
    w-icon(size="2.2em" color="primary") wi-wave`),Vt=s(`<w-card class="grow" content-class="pa0">
  <w-toolbar vertical absolute left>
    <w-icon size="2.2em" color="primary">wi-wave</w-icon>
  </w-toolbar>
</w-card>

<div class="spacer no-grow mx3"></div>

<w-card class="grow" content-class="pa0">
  <w-toolbar vertical absolute right>
    <w-icon size="2.2em" color="primary">wi-wave</w-icon>
  </w-toolbar>
</w-card>
`),Wt=s("Vertical toolbar"),Ot=s("wi-wave"),Pt=s("Some content."),jt=s(`w-card(content-class="pa0 w-flex")
  w-toolbar(vertical)
    w-icon(size="2.2em" color="primary") wi-wave

    //- You could also add a .spacer before & after instead of the \`mya\` class.
    w-divider.mya

    w-button.pa4(icon="mdi mdi-cart" text lg)
    w-button.pa4(icon="mdi mdi-email" text lg)
    w-button.pa4(icon="mdi mdi-chat" text lg)

  w-flex(align-center justify-center) Some content.`),Dt=s(`<w-card content-class="pa0 w-flex">
  <w-toolbar vertical>
    <w-icon color="primary" size="2.2em">wi-wave</w-icon>

    <!-- You could also add a .spacer before & after instead of the \`mya\` class. -->
    <w-divider class="mya"></w-divider>

    <w-button icon="mdi mdi-cart" text lg class="pa4"></w-button>
    <w-button icon="mdi mdi-email" text lg class="pa4"></w-button>
    <w-button icon="mdi mdi-chat" text lg class="pa4"></w-button>
  </w-toolbar>

  <w-flex align-center justify-center>
    Some content.
  </w-flex>
</w-card>`),Et=s(`.w-card {
  margin: auto;
  max-width: 550px;
  height: 200px;
}`);function Nt(d,p){const r=l("title-link"),a=l("w-toolbar"),m=l("w-icon"),i=l("w-button"),c=l("example"),n=l("w-card"),h=l("w-flex"),_=l("w-divider");return w(),u("div",null,[e(r,{h2:""},{default:t(()=>[f]),_:1}),e(c,{"content-class":"pa4"},{pug:t(()=>[S]),html:t(()=>[$]),default:t(()=>[e(a,{shadow:""},{default:t(()=>[g,x,I,y,k]),_:1}),e(a,{class:"mt6 py1",shadow:""},{default:t(()=>[e(m,{class:"mr3",size:"2.5em",style:{color:"#497ca2"}},{default:t(()=>[B]),_:1}),T,z,e(i,{class:"ml3",icon:"mdi mdi-home",text:"",lg:""}),e(i,{class:"ml3",icon:"mdi mdi-chat",text:"",lg:""}),e(i,{class:"ml3",icon:"mdi mdi-email",text:"",lg:""})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[A]),_:1}),C,e(c,{"content-class":"pa4"},{pug:t(()=>[D]),html:t(()=>[E]),default:t(()=>[e(a,{"bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[V,W,O,P,j]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[N]),_:1}),U,e(c,null,{pug:t(()=>[Q]),html:t(()=>[X]),css:t(()=>[Z]),default:t(()=>[e(h,{class:"mt4",wrap:"",gap:4},{default:t(()=>[e(n,null,{title:t(()=>[e(a,null,{default:t(()=>[Y,q,L,R,F]),_:1})]),_:1}),e(n,null,{actions:t(()=>[e(a,{bottom:""},{default:t(()=>[G,H,J,K,M]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{h3:""},{default:t(()=>[tt]),_:1}),e(c,null,{pug:t(()=>[mt]),html:t(()=>[pt]),css:t(()=>[ht]),default:t(()=>[e(h,{class:"mt4",wrap:"",gap:4},{default:t(()=>[e(n,null,{title:t(()=>[e(a,{shadow:""},{default:t(()=>[et,ot,st,at,nt]),_:1})]),_:1}),e(n,null,{actions:t(()=>[e(a,{bottom:"",shadow:""},{default:t(()=>[lt,ct,it,rt,dt]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[_t]),_:1}),wt,e(c,{"content-class":"pa0"},{pug:t(()=>[kt]),html:t(()=>[Bt]),default:t(()=>[e(a,{class:"py0","bg-color":"blue-light5",color:"blue-dark3",height:"5em"},{default:t(()=>[ut,bt,vt,ft,e(_,{class:"mx2",vertical:""}),gt,xt,e(_,{class:"mx2",vertical:""}),It,yt]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[Tt]),_:1}),zt,e(c,{"content-class":"w-flex"},{pug:t(()=>[Ct]),html:t(()=>[Vt]),default:t(()=>[e(n,{class:"grow","content-class":"pa0"},{default:t(()=>[e(a,{vertical:"",absolute:"",left:""},{default:t(()=>[e(m,{size:"2.2em",color:"primary"},{default:t(()=>[St]),_:1})]),_:1})]),_:1}),$t,e(n,{class:"grow","content-class":"pa0"},{default:t(()=>[e(a,{vertical:"",absolute:"",right:""},{default:t(()=>[e(m,{size:"2.2em",color:"primary"},{default:t(()=>[At]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[Wt]),_:1}),e(c,{"content-class":"justify-center"},{pug:t(()=>[jt]),html:t(()=>[Dt]),css:t(()=>[Et]),default:t(()=>[e(n,{class:"mxa","content-class":"pa0 w-flex"},{default:t(()=>[e(a,{vertical:""},{default:t(()=>[e(m,{size:"2.2em",color:"primary"},{default:t(()=>[Ot]),_:1}),e(_,{class:"mya"}),e(i,{class:"pa4",icon:"mdi mdi-cart",text:"",lg:""}),e(i,{class:"pa4",icon:"mdi mdi-email",text:"",lg:""}),e(i,{class:"pa4",icon:"mdi mdi-chat",text:"",lg:""})]),_:1}),e(h,{"align-center":"","justify-center":""},{default:t(()=>[Pt]),_:1})]),_:1})]),_:1})])}const Ut={};var Yt=b(Ut,[["render",Nt]]);const qt=o("div",{class:"w-divider my12"},null,-1),Lt=s("API");function Rt(d,p,r,a,m,i){const c=l("title-link"),n=l("component-api");return w(),u("div",null,[qt,e(c,{class:"title1",h2:""},{default:t(()=>[Lt]),_:1}),e(n,{class:"mt0",items:i.props,descriptions:d.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(n,{items:d.slots,title:"Slots"},null,8,["items"]),e(n,{items:i.events,title:"Events"},null,8,["items"])])}const Ft={color:`Applies a color to the toolbar's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the toolbar's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,absolute:"Sets the CSS position of the toolbar to <code>absolute</code> and relative to the closest parent with a position (like normal CSS).",fixed:"Sets the CSS position of the toolbar to <code>fixed</code>.",bottom:"Only applies to horizontal toolbars and can't be combined with the <code>right</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the horizontal toolbar at the bottom. By default the toolbar will be at the top.<br>This option also applies a border at the top of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default bottom border.",right:"Only applies to vertical toolbars and can't be combined with the <code>bottom</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the vertical toolbar on the right side. By default the toolbar will be on the left.<br>This option also applies a border at the left of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default right border.",height:"Only applies to horizontal toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.",width:"Only applies to vertical toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.",noBorder:"Removes the default border (top or bottom) from the toolbar.",shadow:"Applies a drop shadow to the toolbar."},Gt={default:{description:"The toolbar content."}},Ht={},Jt={data:()=>({propsDescs:Ft,slots:Gt}),computed:{props(){return v.props},events(){return v.emits.reduce((d,p)=>(d[p]={description:Ht[p]||""})&&d,{})}}};var Kt=b(Jt,[["render",Rt]]);const Mt=s("w-toolbar");function Qt(d,p,r,a,m,i){const c=l("ui-component-title"),n=l("examples"),h=l("api");return w(),u("main",null,[e(c,null,{default:t(()=>[Mt]),_:1}),e(n),e(h)])}const Xt={components:{Examples:Yt,Api:Kt}};var te=b(Xt,[["render",Qt]]);export{te as default};
