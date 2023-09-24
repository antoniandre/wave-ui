import{r as l,o as _,g as u,a as e,w as t,b as a,d as o,_ as b,ad as v}from"./index.bf2cfd71.js";const f=o("div",{class:"title2 my0"},"Title",-1),g=o("div",{class:"spacer"},null,-1),x=o("span",{class:"ml2"},"Item 1",-1),I=o("span",{class:"ml2"},"Item 2",-1),y=o("span",{class:"ml2"},"Item 3",-1),k=o("div",{class:"title3 my0"},"Wave UI",-1),B=o("div",{class:"spacer"},null,-1),T=o("p",null,[a("Like in most components, you can set a "),o("code",null,"color"),a(" for the text and a "),o("code",null,"bg-color"),a(` for the
background.`)],-1),z=o("div",{class:"title2 my0"},"Title",-1),S=o("div",{class:"spacer"},null,-1),$=o("span",{class:"ml2"},"Item 1",-1),A=o("span",{class:"ml2"},"Item 2",-1),C=o("span",{class:"ml2"},"Item 3",-1),V=o("p",null,`The w-card component will detect if there is a toolbar in the title slot or in the actions
slot and will remove the default padding and border on this slot if there is.
`,-1),W=o("div",{class:"title2 my0"},"Top Bar",-1),O=o("div",{class:"spacer"},null,-1),P=o("span",{class:"ml2"},"Item 1",-1),j=o("span",{class:"ml2"},"Item 2",-1),D=o("span",{class:"ml2"},"Item 3",-1),E=o("div",{class:"title2 my0"},"Bottom Bar",-1),N=o("div",{class:"spacer"},null,-1),U=o("span",{class:"ml2"},"Item 1",-1),Y=o("span",{class:"ml2"},"Item 2",-1),q=o("span",{class:"ml2"},"Item 3",-1),L=o("div",{class:"title2 my0"},"Top Bar",-1),R=o("div",{class:"spacer"},null,-1),F=o("span",{class:"ml2"},"Item 1",-1),G=o("span",{class:"ml2"},"Item 2",-1),H=o("span",{class:"ml2"},"Item 3",-1),J=o("div",{class:"title2 my0"},"Bottom Bar",-1),K=o("div",{class:"spacer"},null,-1),M=o("span",{class:"ml2"},"Item 1",-1),Q=o("span",{class:"ml2"},"Item 2",-1),X=o("span",{class:"ml2"},"Item 3",-1),Z=o("p",null,[a("The "),o("code",null,"w-toolbar"),a(` component also accepts a height. It can be set as a string with units
or a number of pixels (without unit).
`)],-1),tt=o("div",{class:"title2 my0"},"Title",-1),et=o("div",{class:"spacer"},null,-1),ot=o("span",{class:"mx1"},"Item 1",-1),at=o("span",{class:"mx1"},"Item 2",-1),st=o("span",{class:"mx1"},"Item 3",-1),nt=o("span",{class:"mx1"},"Item 4",-1),lt=o("span",{class:"mx1"},"Item 5",-1),ct=o("span",{class:"mx1"},"Item 6",-1),it=o("p",null,[a(`You can use the absolute (or fixed) position to quickly place a toolbar to the left, top,
right or bottom of the container (or screen).`),o("br"),a(`
In this case, you may want to add a padding on the content container to compensate the toolbar
if you don't want the toolbar to overlap the content (like in this example).`),o("br"),a(`
Alternatively, you can place the toolbar and the content container in a w-flex container so
they will never overlap - like in the next example.`)],-1),rt=o("div",{class:"spacer no-grow mx3"},null,-1);function mt(m,p){const r=l("title-link"),s=l("w-toolbar"),d=l("w-icon"),i=l("w-button"),c=l("example"),n=l("w-card"),h=l("w-flex"),w=l("w-divider");return _(),u("div",null,[e(r,{h2:""},{default:t(()=>[a("Simple toolbar with shadow")]),_:1}),e(c,{"content-class":"pa4"},{pug:t(()=>[a(`w-toolbar(shadow)
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
  w-button.ml3(icon="mdi mdi-email" text lg)`)]),html:t(()=>[a(`<w-toolbar shadow>
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
`)]),default:t(()=>[e(s,{shadow:""},{default:t(()=>[f,g,x,I,y]),_:1}),e(s,{class:"mt6 py1",shadow:""},{default:t(()=>[e(d,{class:"mr3",size:"2.5em",style:{color:"#497ca2"}},{default:t(()=>[a("wi-wave")]),_:1}),k,B,e(i,{class:"ml3",icon:"mdi mdi-home",text:"",lg:""}),e(i,{class:"ml3",icon:"mdi mdi-chat",text:"",lg:""}),e(i,{class:"ml3",icon:"mdi mdi-email",text:"",lg:""})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[a("Background color & text color")]),_:1}),T,e(c,{"content-class":"pa4"},{pug:t(()=>[a(`w-toolbar(bg-color="blue-light5" color="blue-dark3")
  .title2 Title
  .spacer
  span.ml2 Item 1
  span.ml2 Item 2
  span.ml2 Item 3`)]),html:t(()=>[a(`<w-toolbar bg-color="blue-light5" color="blue-dark3">
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>
`)]),default:t(()=>[e(s,{"bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[z,S,$,A,C]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[a("Toolbars inside w-card")]),_:1}),V,e(c,null,{pug:t(()=>[a(`w-flex.mt4(wrap :gap="4")
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
        span.ml2 Item 3`)]),html:t(()=>[a(`<w-flex wrap :gap="4" class="mt4">
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
</w-flex>`)]),css:t(()=>[a(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`)]),default:t(()=>[e(h,{class:"mt4",wrap:"",gap:4},{default:t(()=>[e(n,null,{title:t(()=>[e(s,null,{default:t(()=>[W,O,P,j,D]),_:1})]),_:1}),e(n,null,{actions:t(()=>[e(s,{bottom:""},{default:t(()=>[E,N,U,Y,q]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{h3:""},{default:t(()=>[a("With shadow")]),_:1}),e(c,null,{pug:t(()=>[a(`w-flex.mt4(wrap :gap="4")
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
        span.ml2 Item 3`)]),html:t(()=>[a(`<w-flex wrap :gap="4" class="mt4">
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
</w-flex>`)]),css:t(()=>[a(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`)]),default:t(()=>[e(h,{class:"mt4",wrap:"",gap:4},{default:t(()=>[e(n,null,{title:t(()=>[e(s,{shadow:""},{default:t(()=>[L,R,F,G,H]),_:1})]),_:1}),e(n,null,{actions:t(()=>[e(s,{bottom:"",shadow:""},{default:t(()=>[J,K,M,Q,X]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[a("Custom toolbar height")]),_:1}),Z,e(c,{"content-class":"pa0"},{pug:t(()=>[a(`w-toolbar.py0(bg-color="blue-light5" color="blue-dark3" height="5em")
  .title2 Title
  .spacer
  span.mx1 Item 1
  span.mx1 Item 2
  w-divider.mx2(vertical)
  span.mx1 Item 3
  span.mx1 Item 4
  w-divider.mx2(vertical)
  span.mx1 Item 5
  span.mx1 Item 6`)]),html:t(()=>[a(`<w-toolbar
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
`)]),default:t(()=>[e(s,{class:"py0","bg-color":"blue-light5",color:"blue-dark3",height:"5em"},{default:t(()=>[tt,et,ot,at,e(w,{class:"mx2",vertical:""}),st,nt,e(w,{class:"mx2",vertical:""}),lt,ct]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[a("Vertical toolbar with absolute position")]),_:1}),it,e(c,{"content-class":"w-flex"},{pug:t(()=>[a(`w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute left)
    w-icon(size="2.2em" color="primary") wi-wave

.spacer.no-grow.mx3

w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute right)
    w-icon(size="2.2em" color="primary") wi-wave`)]),html:t(()=>[a(`<w-card class="grow" content-class="pa0">
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
`)]),default:t(()=>[e(n,{class:"grow","content-class":"pa0"},{default:t(()=>[e(s,{vertical:"",absolute:"",left:""},{default:t(()=>[e(d,{size:"2.2em",color:"primary"},{default:t(()=>[a("wi-wave")]),_:1})]),_:1})]),_:1}),rt,e(n,{class:"grow","content-class":"pa0"},{default:t(()=>[e(s,{vertical:"",absolute:"",right:""},{default:t(()=>[e(d,{size:"2.2em",color:"primary"},{default:t(()=>[a("wi-wave")]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[a("Vertical toolbar")]),_:1}),e(c,{"content-class":"justify-center"},{pug:t(()=>[a(`w-card(content-class="pa0 w-flex")
  w-toolbar(vertical)
    w-icon(size="2.2em" color="primary") wi-wave

    //- You could also add a .spacer before & after instead of the \`mya\` class.
    w-divider.mya

    w-button.pa4(icon="mdi mdi-cart" text lg)
    w-button.pa4(icon="mdi mdi-email" text lg)
    w-button.pa4(icon="mdi mdi-chat" text lg)

  w-flex(align-center justify-center) Some content.`)]),html:t(()=>[a(`<w-card content-class="pa0 w-flex">
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
</w-card>`)]),css:t(()=>[a(`.w-card {
  margin: auto;
  max-width: 550px;
  height: 200px;
}`)]),default:t(()=>[e(n,{class:"mxa","content-class":"pa0 w-flex"},{default:t(()=>[e(s,{vertical:""},{default:t(()=>[e(d,{size:"2.2em",color:"primary"},{default:t(()=>[a("wi-wave")]),_:1}),e(w,{class:"mya"}),e(i,{class:"pa4",icon:"mdi mdi-cart",text:"",lg:""}),e(i,{class:"pa4",icon:"mdi mdi-email",text:"",lg:""}),e(i,{class:"pa4",icon:"mdi mdi-chat",text:"",lg:""})]),_:1}),e(h,{"align-center":"","justify-center":""},{default:t(()=>[a("Some content.")]),_:1})]),_:1})]),_:1})])}const dt={},pt=b(dt,[["render",mt]]),ht=o("div",{class:"w-divider my12"},null,-1);function wt(m,p,r,s,d,i){const c=l("title-link"),n=l("component-api");return _(),u("div",null,[ht,e(c,{class:"title1",h2:""},{default:t(()=>[a("API")]),_:1}),e(n,{class:"mt0",items:i.props,descriptions:m.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(n,{items:m.slots,title:"Slots"},null,8,["items"]),e(n,{items:i.events,title:"Events"},null,8,["items"])])}const _t={color:`Applies a color to the toolbar's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the toolbar's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,absolute:"Sets the CSS position of the toolbar to <code>absolute</code> and relative to the closest parent with a position (like normal CSS).",fixed:"Sets the CSS position of the toolbar to <code>fixed</code>.",bottom:"Only applies to horizontal toolbars and can't be combined with the <code>right</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the horizontal toolbar at the bottom. By default the toolbar will be at the top.<br>This option also applies a border at the top of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default bottom border.",right:"Only applies to vertical toolbars and can't be combined with the <code>bottom</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the vertical toolbar on the right side. By default the toolbar will be on the left.<br>This option also applies a border at the left of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default right border.",height:"Only applies to horizontal toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.",width:"Only applies to vertical toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.",noBorder:"Removes the default border (top or bottom) from the toolbar.",shadow:"Applies a drop shadow to the toolbar."},ut={default:{description:"The toolbar content."}},bt={},vt={data:()=>({propsDescs:_t,slots:ut}),computed:{props(){return v.props},events(){return v.emits.reduce((m,p)=>(m[p]={description:bt[p]||""})&&m,{})}}},ft=b(vt,[["render",wt]]);function gt(m,p,r,s,d,i){const c=l("ui-component-title"),n=l("examples"),h=l("api");return _(),u("main",null,[e(c,null,{default:t(()=>[a("w-toolbar")]),_:1}),e(n),e(h)])}const xt={components:{Examples:pt,Api:ft}},yt=b(xt,[["render",gt]]);export{yt as default};
