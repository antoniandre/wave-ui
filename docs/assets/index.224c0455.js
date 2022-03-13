import{r as n,o as h,f as w,a as s,w as e,e as o,b as t}from"./vendor.c30f2c6c.js";import{_ as u,M as v}from"./index.67df9d80.js";const I=o("Simple toolbar with shadow"),x=t("div",{class:"title2 my0"},"Title",-1),f=t("div",{class:"spacer"},null,-1),g=t("span",{class:"ml2"},"Item 1",-1),B=t("span",{class:"ml2"},"Item 2",-1),k=t("span",{class:"ml2"},"Item 3",-1),T=o("wi-wave"),y=t("div",{class:"title3 my0"},"Wave UI",-1),$=t("div",{class:"spacer"},null,-1),A=o(`w-toolbar(shadow)
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
  w-button.ml3(icon="mdi mdi-email" text lg)`),S=o(`<w-toolbar shadow>
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>

<w-toolbar shadow class="mt6 py1">
  <w-icon color="light-blue-dark3" size="2.5em">wi-wave</w-icon>
  <div class="title3">Wave UI</div>
  <div class="spacer"></div>
  <w-button icon="mdi mdi-home" text lg class="ml3"></w-button>
  <w-button icon="mdi mdi-chat" text lg class="ml3"></w-button>
  <w-button icon="mdi mdi-email" text lg class="ml3"></w-button>
</w-toolbar>
`),W=o("Background color & text color"),C=t("p",null,[o("Like in most components, you can set a "),t("code",null,"color"),o(" for the text and a "),t("code",null,"bg-color"),o(` for the
background.`)],-1),P=t("div",{class:"title2 my0"},"Title",-1),z=t("div",{class:"spacer"},null,-1),D=t("span",{class:"ml2"},"Item 1",-1),E=t("span",{class:"ml2"},"Item 2",-1),N=t("span",{class:"ml2"},"Item 3",-1),U=o(`w-toolbar(bg-color="blue-light5" color="blue-dark3")
  .title2 Title
  .spacer
  span.ml2 Item 1
  span.ml2 Item 2
  span.ml2 Item 3`),V=o(`<w-toolbar bg-color="blue-light5" color="blue-dark3">
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>
`),j=o("Toolbars inside w-card"),L=t("p",null,`The w-card component will detect if there is a toolbar in the title slot or in the actions
slot and will remove the default padding and border on this slot if there is.
`,-1),M=t("div",{class:"title2 my0"},"Top Bar",-1),R=t("div",{class:"spacer"},null,-1),q=t("span",{class:"ml2"},"Item 1",-1),F=t("span",{class:"ml2"},"Item 2",-1),G=t("span",{class:"ml2"},"Item 3",-1),H=t("div",{class:"title2 my0"},"Bottom Bar",-1),J=t("div",{class:"spacer"},null,-1),K=t("span",{class:"ml2"},"Item 1",-1),O=t("span",{class:"ml2"},"Item 2",-1),Q=t("span",{class:"ml2"},"Item 3",-1),X=t("h3",null,"With shadow",-1),Y=t("div",{class:"title2 my0"},"Top Bar",-1),Z=t("div",{class:"spacer"},null,-1),tt=t("span",{class:"ml2"},"Item 1",-1),st=t("span",{class:"ml2"},"Item 2",-1),et=t("span",{class:"ml2"},"Item 3",-1),ot=t("div",{class:"title2 my0"},"Bottom Bar",-1),nt=t("div",{class:"spacer"},null,-1),at=t("span",{class:"ml2"},"Item 1",-1),lt=t("span",{class:"ml2"},"Item 2",-1),ct=t("span",{class:"ml2"},"Item 3",-1),it=o(`w-flex.mt4(wrap :gap="4")
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
        span.ml2 Item 3

h3 With shadow
w-flex.mt4(wrap :gap="4")
  w-card
    template(#title)
      w-toolbar(shadow)
        .title2 Top Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3
  w-card
    template(#actions)
      w-toolbar(bottom shadow)
        .title2 Bottom Bar
        .spacer
        span.ml2 Item 1
        span.ml2 Item 2
        span.ml2 Item 3`),mt=o(`<w-flex wrap :gap="4" class="mt4">
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
</w-flex>

<h3>With shadow</h3>

<w-flex wrap :gap="4" class="mt4">
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
</w-flex>`),dt=o(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`),rt=o("Custom toolbar height"),pt=t("p",null,[o("The "),t("code",null,"w-toolbar"),o(` component also accepts a height. It can be set as a string with units
or a number of pixels (without unit).
`)],-1),_t=t("div",{class:"title2 my0"},"Title",-1),ht=t("div",{class:"spacer"},null,-1),wt=t("span",{class:"mx1"},"Item 1",-1),ut=t("span",{class:"mx1"},"Item 2",-1),bt=t("span",{class:"mx1"},"Item 3",-1),vt=t("span",{class:"mx1"},"Item 4",-1),It=t("span",{class:"mx1"},"Item 5",-1),xt=t("span",{class:"mx1"},"Item 6",-1),ft=o(`w-toolbar.py0(bg-color="blue-light5" color="blue-dark3" height="5em")
  .title2 Title
  .spacer
  span.mx1 Item 1
  span.mx1 Item 2
  w-divider.mx2(vertical)
  span.mx1 Item 3
  span.mx1 Item 4
  w-divider.mx2(vertical)
  span.mx1 Item 5
  span.mx1 Item 6`),gt=o(`<w-toolbar
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
</w-toolbar>`);function Bt(i,r){const d=n("title-link"),a=n("w-toolbar"),_=n("w-icon"),m=n("w-button"),c=n("example"),l=n("w-card"),p=n("w-flex"),b=n("w-divider");return h(),w("div",null,[s(d,{h2:""},{default:e(()=>[I]),_:1}),s(c,{"content-class":"pa4"},{pug:e(()=>[A]),html:e(()=>[S]),default:e(()=>[s(a,{shadow:""},{default:e(()=>[x,f,g,B,k]),_:1}),s(a,{class:"mt6 py1",shadow:""},{default:e(()=>[s(_,{class:"mr3",size:"2.5em",style:{color:"#497ca2"}},{default:e(()=>[T]),_:1}),y,$,s(m,{class:"ml3",icon:"mdi mdi-home",text:"",lg:""}),s(m,{class:"ml3",icon:"mdi mdi-chat",text:"",lg:""}),s(m,{class:"ml3",icon:"mdi mdi-email",text:"",lg:""})]),_:1})]),_:1}),s(d,{h2:""},{default:e(()=>[W]),_:1}),C,s(c,{"content-class":"pa4"},{pug:e(()=>[U]),html:e(()=>[V]),default:e(()=>[s(a,{"bg-color":"blue-light5",color:"blue-dark3"},{default:e(()=>[P,z,D,E,N]),_:1})]),_:1}),s(d,{h2:""},{default:e(()=>[j]),_:1}),L,s(c,null,{pug:e(()=>[it]),html:e(()=>[mt]),css:e(()=>[dt]),default:e(()=>[s(p,{class:"mt4",wrap:"",gap:4},{default:e(()=>[s(l,null,{title:e(()=>[s(a,null,{default:e(()=>[M,R,q,F,G]),_:1})]),_:1}),s(l,null,{actions:e(()=>[s(a,{bottom:""},{default:e(()=>[H,J,K,O,Q]),_:1})]),_:1})]),_:1}),X,s(p,{class:"mt4",wrap:"",gap:4},{default:e(()=>[s(l,null,{title:e(()=>[s(a,{shadow:""},{default:e(()=>[Y,Z,tt,st,et]),_:1})]),_:1}),s(l,null,{actions:e(()=>[s(a,{bottom:"",shadow:""},{default:e(()=>[ot,nt,at,lt,ct]),_:1})]),_:1})]),_:1})]),_:1}),s(d,{h2:""},{default:e(()=>[rt]),_:1}),pt,s(c,{"content-class":"pa0"},{pug:e(()=>[ft]),html:e(()=>[gt]),default:e(()=>[s(a,{class:"py0","bg-color":"blue-light5",color:"blue-dark3",height:"5.4em"},{default:e(()=>[_t,ht,wt,ut,s(b,{class:"mx2",vertical:""}),bt,vt,s(b,{class:"mx2",vertical:""}),It,xt]),_:1})]),_:1})])}const kt={};var Tt=u(kt,[["render",Bt]]);const yt=t("div",{class:"w-divider my12"},null,-1),$t=o("API");function At(i,r,d,a,_,m){const c=n("title-link"),l=n("component-api");return h(),w("div",null,[yt,s(c,{class:"title1",h2:""},{default:e(()=>[$t]),_:1}),s(l,{class:"mt0",items:m.props,descriptions:i.propsDescs,title:"Props"},null,8,["items","descriptions"]),s(l,{items:i.slots,title:"Slots"},null,8,["items"]),s(l,{items:m.events,title:"Events"},null,8,["items"])])}const St={color:`Applies a color to the toolbar's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the toolbar's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,absolute:"Sets the CSS position of the toolbar to <code>absolute</code>.",fixed:"Sets the CSS position of the toolbar to <code>fixed</code>.",bottom:"Applies a border at the top of the toolbar, unless the <code>no-border</code> prop is set to true. Also removes the default bottom border.",height:"Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",noBorder:"Removes the default border (top or bottom) from the toolbar.",shadow:"Applies a drop shadow to the toolbar."},Wt={default:{description:"The toolbar content."}},Ct={},Pt={data:()=>({propsDescs:St,slots:Wt}),computed:{props(){return v.props},events(){return v.emits.reduce((i,r)=>(i[r]={description:Ct[r]||""})&&i,{})}}};var zt=u(Pt,[["render",At]]);const Dt=o("w-toolbar");function Et(i,r,d,a,_,m){const c=n("ui-component-title"),l=n("examples"),p=n("api");return h(),w("main",null,[s(c,null,{default:e(()=>[Dt]),_:1}),s(l),s(p)])}const Nt={components:{Examples:Tt,Api:zt}};var jt=u(Nt,[["render",Et]]);export{jt as default};
