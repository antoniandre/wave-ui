import{r as i,g as b,o as v,a as l,b as n,w as o,e,_ as f,ad as g}from"./index-BkivclCA.js";function x(d,t){const p=i("title-link"),a=i("w-toolbar"),c=i("w-icon"),m=i("w-button"),r=i("example"),s=i("w-card"),w=i("w-flex"),u=i("w-divider");return v(),b("div",null,[l(p,{h2:""},{default:o(()=>t[0]||(t[0]=[e("Simple toolbar with shadow")])),_:1,__:[0]}),l(r,{"content-class":"pa4"},{pug:o(()=>t[5]||(t[5]=[e(`w-toolbar(shadow)
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
  w-button.ml3(icon="mdi mdi-email" text lg)`)])),html:o(()=>t[6]||(t[6]=[e(`<w-toolbar shadow>
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
`)])),default:o(()=>[l(a,{shadow:""},{default:o(()=>t[1]||(t[1]=[n("div",{class:"title2 my0"},"Title",-1),n("div",{class:"spacer"},null,-1),n("span",{class:"ml2"},"Item 1",-1),n("span",{class:"ml2"},"Item 2",-1),n("span",{class:"ml2"},"Item 3",-1)])),_:1,__:[1]}),l(a,{class:"mt6 py1",shadow:""},{default:o(()=>[l(c,{class:"mr3",size:"2.5em",style:{color:"#497ca2"}},{default:o(()=>t[2]||(t[2]=[e("wi-wave")])),_:1,__:[2]}),t[3]||(t[3]=n("div",{class:"title3 my0"},"Wave UI",-1)),t[4]||(t[4]=n("div",{class:"spacer"},null,-1)),l(m,{class:"ml3",icon:"mdi mdi-home",text:"",lg:""}),l(m,{class:"ml3",icon:"mdi mdi-chat",text:"",lg:""}),l(m,{class:"ml3",icon:"mdi mdi-email",text:"",lg:""})]),_:1,__:[3,4]})]),_:1}),l(p,{h2:""},{default:o(()=>t[7]||(t[7]=[e("Background color & text color")])),_:1,__:[7]}),t[46]||(t[46]=n("p",null,[e("Like in most components, you can set a "),n("code",null,"color"),e(" for the text and a "),n("code",null,"bg-color"),e(` for the
background.`)],-1)),l(r,{"content-class":"pa4"},{pug:o(()=>t[9]||(t[9]=[e(`w-toolbar(bg-color="blue-light5" color="blue-dark3")
  .title2 Title
  .spacer
  span.ml2 Item 1
  span.ml2 Item 2
  span.ml2 Item 3`)])),html:o(()=>t[10]||(t[10]=[e(`<w-toolbar bg-color="blue-light5" color="blue-dark3">
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>
`)])),default:o(()=>[l(a,{"bg-color":"blue-light5",color:"blue-dark3"},{default:o(()=>t[8]||(t[8]=[n("div",{class:"title2 my0"},"Title",-1),n("div",{class:"spacer"},null,-1),n("span",{class:"ml2"},"Item 1",-1),n("span",{class:"ml2"},"Item 2",-1),n("span",{class:"ml2"},"Item 3",-1)])),_:1,__:[8]})]),_:1}),l(p,{h2:""},{default:o(()=>t[11]||(t[11]=[e("Toolbars inside w-card")])),_:1,__:[11]}),t[47]||(t[47]=n("p",null,`The w-card component will detect if there is a toolbar in the title slot or in the actions
slot and will remove the default padding and border on this slot if there is.
`,-1)),l(r,null,{pug:o(()=>t[14]||(t[14]=[e(`w-flex.mt4(wrap :gap="4")
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
        span.ml2 Item 3`)])),html:o(()=>t[15]||(t[15]=[e(`<w-flex wrap :gap="4" class="mt4">
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
</w-flex>`)])),css:o(()=>t[16]||(t[16]=[e(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`)])),default:o(()=>[l(w,{class:"mt4",wrap:"",gap:4},{default:o(()=>[l(s,null,{title:o(()=>[l(a,null,{default:o(()=>t[12]||(t[12]=[n("div",{class:"title2 my0"},"Top Bar",-1),n("div",{class:"spacer"},null,-1),n("span",{class:"ml2"},"Item 1",-1),n("span",{class:"ml2"},"Item 2",-1),n("span",{class:"ml2"},"Item 3",-1)])),_:1,__:[12]})]),_:1}),l(s,null,{actions:o(()=>[l(a,{bottom:""},{default:o(()=>t[13]||(t[13]=[n("div",{class:"title2 my0"},"Bottom Bar",-1),n("div",{class:"spacer"},null,-1),n("span",{class:"ml2"},"Item 1",-1),n("span",{class:"ml2"},"Item 2",-1),n("span",{class:"ml2"},"Item 3",-1)])),_:1,__:[13]})]),_:1})]),_:1})]),_:1}),l(p,{h3:""},{default:o(()=>t[17]||(t[17]=[e("With shadow")])),_:1,__:[17]}),l(r,null,{pug:o(()=>t[20]||(t[20]=[e(`w-flex.mt4(wrap :gap="4")
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
        span.ml2 Item 3`)])),html:o(()=>t[21]||(t[21]=[e(`<w-flex wrap :gap="4" class="mt4">
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
</w-flex>`)])),css:o(()=>t[22]||(t[22]=[e(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`)])),default:o(()=>[l(w,{class:"mt4",wrap:"",gap:4},{default:o(()=>[l(s,null,{title:o(()=>[l(a,{shadow:""},{default:o(()=>t[18]||(t[18]=[n("div",{class:"title2 my0"},"Top Bar",-1),n("div",{class:"spacer"},null,-1),n("span",{class:"ml2"},"Item 1",-1),n("span",{class:"ml2"},"Item 2",-1),n("span",{class:"ml2"},"Item 3",-1)])),_:1,__:[18]})]),_:1}),l(s,null,{actions:o(()=>[l(a,{bottom:"",shadow:""},{default:o(()=>t[19]||(t[19]=[n("div",{class:"title2 my0"},"Bottom Bar",-1),n("div",{class:"spacer"},null,-1),n("span",{class:"ml2"},"Item 1",-1),n("span",{class:"ml2"},"Item 2",-1),n("span",{class:"ml2"},"Item 3",-1)])),_:1,__:[19]})]),_:1})]),_:1})]),_:1}),l(p,{h2:""},{default:o(()=>t[23]||(t[23]=[e("Custom toolbar height")])),_:1,__:[23]}),t[48]||(t[48]=n("p",null,[e("The "),n("code",null,"w-toolbar"),e(` component also accepts a height. It can be set as a string with units
or a number of pixels (without unit).
`)],-1)),l(r,{"content-class":"pa0"},{pug:o(()=>t[32]||(t[32]=[e(`w-toolbar.py0(bg-color="blue-light5" color="blue-dark3" height="5em")
  .title2 Title
  .spacer
  span.mx1 Item 1
  span.mx1 Item 2
  w-divider.mx2(vertical)
  span.mx1 Item 3
  span.mx1 Item 4
  w-divider.mx2(vertical)
  span.mx1 Item 5
  span.mx1 Item 6`)])),html:o(()=>t[33]||(t[33]=[e(`<w-toolbar
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
`)])),default:o(()=>[l(a,{class:"py0","bg-color":"blue-light5",color:"blue-dark3",height:"5em"},{default:o(()=>[t[24]||(t[24]=n("div",{class:"title2 my0"},"Title",-1)),t[25]||(t[25]=n("div",{class:"spacer"},null,-1)),t[26]||(t[26]=n("span",{class:"mx1"},"Item 1",-1)),t[27]||(t[27]=n("span",{class:"mx1"},"Item 2",-1)),l(u,{class:"mx2",vertical:""}),t[28]||(t[28]=n("span",{class:"mx1"},"Item 3",-1)),t[29]||(t[29]=n("span",{class:"mx1"},"Item 4",-1)),l(u,{class:"mx2",vertical:""}),t[30]||(t[30]=n("span",{class:"mx1"},"Item 5",-1)),t[31]||(t[31]=n("span",{class:"mx1"},"Item 6",-1))]),_:1,__:[24,25,26,27,28,29,30,31]})]),_:1}),l(p,{h2:""},{default:o(()=>t[34]||(t[34]=[e("Vertical toolbar with absolute position")])),_:1,__:[34]}),t[49]||(t[49]=n("p",null,[e(`You can use the absolute (or fixed) position to quickly place a toolbar to the left, top,
right or bottom of the container (or screen).`),n("br"),e(`
In this case, you may want to add a padding on the content container to compensate the toolbar
if you don't want the toolbar to overlap the content (like in this example).`),n("br"),e(`
Alternatively, you can place the toolbar and the content container in a w-flex container so
they will never overlap - like in the next example.`)],-1)),l(r,{"content-class":"w-flex"},{pug:o(()=>t[37]||(t[37]=[e(`w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute left)
    w-icon(size="2.2em" color="primary") wi-wave

.spacer.no-grow.mx3

w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute right)
    w-icon(size="2.2em" color="primary") wi-wave`)])),html:o(()=>t[38]||(t[38]=[e(`<w-card class="grow" content-class="pa0">
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
`)])),default:o(()=>[l(s,{class:"grow","content-class":"pa0"},{default:o(()=>[l(a,{vertical:"",absolute:"",left:""},{default:o(()=>[l(c,{size:"2.2em",color:"primary"},{default:o(()=>t[35]||(t[35]=[e("wi-wave")])),_:1,__:[35]})]),_:1})]),_:1}),t[39]||(t[39]=n("div",{class:"spacer no-grow mx3"},null,-1)),l(s,{class:"grow","content-class":"pa0"},{default:o(()=>[l(a,{vertical:"",absolute:"",right:""},{default:o(()=>[l(c,{size:"2.2em",color:"primary"},{default:o(()=>t[36]||(t[36]=[e("wi-wave")])),_:1,__:[36]})]),_:1})]),_:1})]),_:1,__:[39]}),l(p,{h2:""},{default:o(()=>t[40]||(t[40]=[e("Vertical toolbar")])),_:1,__:[40]}),l(r,{"content-class":"justify-center"},{pug:o(()=>t[43]||(t[43]=[e(`w-card(content-class="pa0 w-flex")
  w-toolbar(vertical)
    w-icon(size="2.2em" color="primary") wi-wave

    //- You could also add a .spacer before & after instead of the \`mya\` class.
    w-divider.mya

    w-button.pa4(icon="mdi mdi-cart" text lg)
    w-button.pa4(icon="mdi mdi-email" text lg)
    w-button.pa4(icon="mdi mdi-chat" text lg)

  w-flex(align-center justify-center) Some content.`)])),html:o(()=>t[44]||(t[44]=[e(`<w-card content-class="pa0 w-flex">
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
</w-card>`)])),css:o(()=>t[45]||(t[45]=[e(`.w-card {
  margin: auto;
  max-width: 550px;
  height: 200px;
}`)])),default:o(()=>[l(s,{class:"mxa","content-class":"pa0 w-flex"},{default:o(()=>[l(a,{vertical:""},{default:o(()=>[l(c,{size:"2.2em",color:"primary"},{default:o(()=>t[41]||(t[41]=[e("wi-wave")])),_:1,__:[41]}),l(u,{class:"mya"}),l(m,{class:"pa4",icon:"mdi mdi-cart",text:"",lg:""}),l(m,{class:"pa4",icon:"mdi mdi-email",text:"",lg:""}),l(m,{class:"pa4",icon:"mdi mdi-chat",text:"",lg:""})]),_:1}),l(w,{"align-center":"","justify-center":""},{default:o(()=>t[42]||(t[42]=[e("Some content.")])),_:1,__:[42]})]),_:1})]),_:1})])}const I={},h=f(I,[["render",x]]);function y(d,t,p,a,c,m){const r=i("title-link"),s=i("component-api");return v(),b("div",null,[t[1]||(t[1]=n("div",{class:"w-divider my12"},null,-1)),l(r,{class:"title1",h2:""},{default:o(()=>t[0]||(t[0]=[e("API")])),_:1,__:[0]}),l(s,{class:"mt0",items:m.props,descriptions:d.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(s,{items:d.slots,title:"Slots"},null,8,["items"]),l(s,{items:m.events,title:"Events"},null,8,["items"])])}const _={color:`Applies a color to the toolbar's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the toolbar's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,absolute:"Sets the CSS position of the toolbar to <code>absolute</code> and relative to the closest parent with a position (like normal CSS).",fixed:"Sets the CSS position of the toolbar to <code>fixed</code>.",bottom:"Only applies to horizontal toolbars and can't be combined with the <code>right</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the horizontal toolbar at the bottom. By default the toolbar will be at the top.<br>This option also applies a border at the top of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default bottom border.",right:"Only applies to vertical toolbars and can't be combined with the <code>bottom</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the vertical toolbar on the right side. By default the toolbar will be on the left.<br>This option also applies a border at the left of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default right border.",height:"Only applies to horizontal toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.",width:"Only applies to vertical toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.",noBorder:"Removes the default border (top or bottom) from the toolbar.",shadow:"Applies a drop shadow to the toolbar."},k={default:{description:"The toolbar content."}},B={},T={data:()=>({propsDescs:_,slots:k}),computed:{props(){return g.props},events(){return g.emits.reduce((d,t)=>(d[t]={description:B[t]||""})&&d,{})}}},z=f(T,[["render",y]]);function S(d,t,p,a,c,m){const r=i("ui-component-title"),s=i("examples"),w=i("api");return v(),b("main",null,[l(r,null,{default:o(()=>t[0]||(t[0]=[e("w-toolbar")])),_:1,__:[0]}),l(s),l(w)])}const A={components:{Examples:h,Api:z}},C=f(A,[["render",S]]);export{C as default};
