import{N as e,W as t,c as n,d as r,g as i,h as a,k as o}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as s}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{r as c}from"./index-D3Rumh9E.js";function l(s,c){let l=e(`title-link`),u=e(`w-toolbar`),d=e(`w-icon`),f=e(`w-button`),p=e(`example`),m=e(`w-card`),h=e(`w-flex`),g=e(`w-divider`);return o(),r(`div`,null,[i(l,{h2:``},{default:t(()=>[...c[0]||=[a(`Simple toolbar with shadow`,-1)]]),_:1}),i(p,{"content-class":`pa4`},{pug:t(()=>[...c[5]||=[a(`w-toolbar(shadow)
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
  w-button.ml3(icon="mdi mdi-email" text lg)`,-1)]]),html:t(()=>[...c[6]||=[a(`<w-toolbar shadow>
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
`,-1)]]),default:t(()=>[i(u,{shadow:``},{default:t(()=>[...c[1]||=[n(`div`,{class:`title2 my0`},`Title`,-1),n(`div`,{class:`spacer`},null,-1),n(`span`,{class:`ml2`},`Item 1`,-1),n(`span`,{class:`ml2`},`Item 2`,-1),n(`span`,{class:`ml2`},`Item 3`,-1)]]),_:1}),i(u,{class:`mt6 py1`,shadow:``},{default:t(()=>[i(d,{class:`mr3`,size:`2.5em`,style:{color:`#497ca2`}},{default:t(()=>[...c[2]||=[a(`wi-wave`,-1)]]),_:1}),c[3]||=n(`div`,{class:`title3 my0`},`Wave UI`,-1),c[4]||=n(`div`,{class:`spacer`},null,-1),i(f,{class:`ml3`,icon:`mdi mdi-home`,text:``,lg:``}),i(f,{class:`ml3`,icon:`mdi mdi-chat`,text:``,lg:``}),i(f,{class:`ml3`,icon:`mdi mdi-email`,text:``,lg:``})]),_:1})]),_:1}),i(l,{h2:``},{default:t(()=>[...c[7]||=[a(`Background color & text color`,-1)]]),_:1}),c[46]||=n(`p`,null,[a(`Like in most components, you can set a `),n(`code`,null,`color`),a(` for the text and a `),n(`code`,null,`bg-color`),a(` for the
background.`)],-1),i(p,{"content-class":`pa4`},{pug:t(()=>[...c[9]||=[a(`w-toolbar(bg-color="blue-light5" color="blue-dark3")
  .title2 Title
  .spacer
  span.ml2 Item 1
  span.ml2 Item 2
  span.ml2 Item 3`,-1)]]),html:t(()=>[...c[10]||=[a(`<w-toolbar bg-color="blue-light5" color="blue-dark3">
  <div class="title2">Title</div>
  <div class="spacer"></div>
  <span class="ml2">Item 1</span>
  <span class="ml2">Item 2</span>
  <span class="ml2">Item 3</span>
</w-toolbar>
`,-1)]]),default:t(()=>[i(u,{"bg-color":`blue-light5`,color:`blue-dark3`},{default:t(()=>[...c[8]||=[n(`div`,{class:`title2 my0`},`Title`,-1),n(`div`,{class:`spacer`},null,-1),n(`span`,{class:`ml2`},`Item 1`,-1),n(`span`,{class:`ml2`},`Item 2`,-1),n(`span`,{class:`ml2`},`Item 3`,-1)]]),_:1})]),_:1}),i(l,{h2:``},{default:t(()=>[...c[11]||=[a(`Toolbars inside w-card`,-1)]]),_:1}),c[47]||=n(`p`,null,`The w-card component will detect if there is a toolbar in the title slot or in the actions
slot and will remove the default padding and border on this slot if there is.
`,-1),i(p,null,{pug:t(()=>[...c[14]||=[a(`w-flex.mt4(wrap :gap="4")
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
        span.ml2 Item 3`,-1)]]),html:t(()=>[...c[15]||=[a(`<w-flex wrap :gap="4" class="mt4">
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
</w-flex>`,-1)]]),css:t(()=>[...c[16]||=[a(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`,-1)]]),default:t(()=>[i(h,{class:`mt4`,wrap:``,gap:4},{default:t(()=>[i(m,null,{title:t(()=>[i(u,null,{default:t(()=>[...c[12]||=[n(`div`,{class:`title2 my0`},`Top Bar`,-1),n(`div`,{class:`spacer`},null,-1),n(`span`,{class:`ml2`},`Item 1`,-1),n(`span`,{class:`ml2`},`Item 2`,-1),n(`span`,{class:`ml2`},`Item 3`,-1)]]),_:1})]),_:1}),i(m,null,{actions:t(()=>[i(u,{bottom:``},{default:t(()=>[...c[13]||=[n(`div`,{class:`title2 my0`},`Bottom Bar`,-1),n(`div`,{class:`spacer`},null,-1),n(`span`,{class:`ml2`},`Item 1`,-1),n(`span`,{class:`ml2`},`Item 2`,-1),n(`span`,{class:`ml2`},`Item 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(l,{h3:``},{default:t(()=>[...c[17]||=[a(`With shadow`,-1)]]),_:1}),i(p,null,{pug:t(()=>[...c[20]||=[a(`w-flex.mt4(wrap :gap="4")
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
        span.ml2 Item 3`,-1)]]),html:t(()=>[...c[21]||=[a(`<w-flex wrap :gap="4" class="mt4">
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
</w-flex>`,-1)]]),css:t(()=>[...c[22]||=[a(`.w-card {
  flex-grow: 1;
  max-width: 550px;
  height: 200px;
}
`,-1)]]),default:t(()=>[i(h,{class:`mt4`,wrap:``,gap:4},{default:t(()=>[i(m,null,{title:t(()=>[i(u,{shadow:``},{default:t(()=>[...c[18]||=[n(`div`,{class:`title2 my0`},`Top Bar`,-1),n(`div`,{class:`spacer`},null,-1),n(`span`,{class:`ml2`},`Item 1`,-1),n(`span`,{class:`ml2`},`Item 2`,-1),n(`span`,{class:`ml2`},`Item 3`,-1)]]),_:1})]),_:1}),i(m,null,{actions:t(()=>[i(u,{bottom:``,shadow:``},{default:t(()=>[...c[19]||=[n(`div`,{class:`title2 my0`},`Bottom Bar`,-1),n(`div`,{class:`spacer`},null,-1),n(`span`,{class:`ml2`},`Item 1`,-1),n(`span`,{class:`ml2`},`Item 2`,-1),n(`span`,{class:`ml2`},`Item 3`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(l,{h2:``},{default:t(()=>[...c[23]||=[a(`Custom toolbar height`,-1)]]),_:1}),c[48]||=n(`p`,null,[a(`The `),n(`code`,null,`w-toolbar`),a(` component also accepts a height. It can be set as a string with units
or a number of pixels (without unit).
`)],-1),i(p,{"content-class":`pa0`},{pug:t(()=>[...c[32]||=[a(`w-toolbar.py0(bg-color="blue-light5" color="blue-dark3" height="5em")
  .title2 Title
  .spacer
  span.mx1 Item 1
  span.mx1 Item 2
  w-divider.mx2(vertical)
  span.mx1 Item 3
  span.mx1 Item 4
  w-divider.mx2(vertical)
  span.mx1 Item 5
  span.mx1 Item 6`,-1)]]),html:t(()=>[...c[33]||=[a(`<w-toolbar
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
`,-1)]]),default:t(()=>[i(u,{class:`py0`,"bg-color":`blue-light5`,color:`blue-dark3`,height:`5em`},{default:t(()=>[c[24]||=n(`div`,{class:`title2 my0`},`Title`,-1),c[25]||=n(`div`,{class:`spacer`},null,-1),c[26]||=n(`span`,{class:`mx1`},`Item 1`,-1),c[27]||=n(`span`,{class:`mx1`},`Item 2`,-1),i(g,{class:`mx2`,vertical:``}),c[28]||=n(`span`,{class:`mx1`},`Item 3`,-1),c[29]||=n(`span`,{class:`mx1`},`Item 4`,-1),i(g,{class:`mx2`,vertical:``}),c[30]||=n(`span`,{class:`mx1`},`Item 5`,-1),c[31]||=n(`span`,{class:`mx1`},`Item 6`,-1)]),_:1})]),_:1}),i(l,{h2:``},{default:t(()=>[...c[34]||=[a(`Vertical toolbar with absolute position`,-1)]]),_:1}),c[49]||=n(`p`,null,[a(`You can use the absolute (or fixed) position to quickly place a toolbar to the left, top,
right or bottom of the container (or screen).`),n(`br`),a(`
In this case, you may want to add a padding on the content container to compensate the toolbar
if you don't want the toolbar to overlap the content (like in this example).`),n(`br`),a(`
Alternatively, you can place the toolbar and the content container in a w-flex container so
they will never overlap - like in the next example.`)],-1),i(p,{"content-class":`w-flex`},{pug:t(()=>[...c[37]||=[a(`w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute left)
    w-icon(size="2.2em" color="primary") wi-wave

.spacer.no-grow.mx3

w-card.grow(content-class="pa0")
  w-toolbar(vertical absolute right)
    w-icon(size="2.2em" color="primary") wi-wave`,-1)]]),html:t(()=>[...c[38]||=[a(`<w-card class="grow" content-class="pa0">
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
`,-1)]]),default:t(()=>[i(m,{class:`grow`,"content-class":`pa0`},{default:t(()=>[i(u,{vertical:``,absolute:``,left:``},{default:t(()=>[i(d,{size:`2.2em`,color:`primary`},{default:t(()=>[...c[35]||=[a(`wi-wave`,-1)]]),_:1})]),_:1})]),_:1}),c[39]||=n(`div`,{class:`spacer no-grow mx3`},null,-1),i(m,{class:`grow`,"content-class":`pa0`},{default:t(()=>[i(u,{vertical:``,absolute:``,right:``},{default:t(()=>[i(d,{size:`2.2em`,color:`primary`},{default:t(()=>[...c[36]||=[a(`wi-wave`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),i(l,{h2:``},{default:t(()=>[...c[40]||=[a(`Vertical toolbar`,-1)]]),_:1}),i(p,{"content-class":`justify-center`},{pug:t(()=>[...c[43]||=[a(`w-card(content-class="pa0 w-flex")
  w-toolbar(vertical)
    w-icon(size="2.2em" color="primary") wi-wave

    //- You could also add a .spacer before & after instead of the \`mya\` class.
    w-divider.mya

    w-button.pa4(icon="mdi mdi-cart" text lg)
    w-button.pa4(icon="mdi mdi-email" text lg)
    w-button.pa4(icon="mdi mdi-chat" text lg)

  w-flex(align-center justify-center) Some content.`,-1)]]),html:t(()=>[...c[44]||=[a(`<w-card content-class="pa0 w-flex">
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
</w-card>`,-1)]]),css:t(()=>[...c[45]||=[a(`.w-card {
  margin: auto;
  max-width: 550px;
  height: 200px;
}`,-1)]]),default:t(()=>[i(m,{class:`mxa`,"content-class":`pa0 w-flex`},{default:t(()=>[i(u,{vertical:``},{default:t(()=>[i(d,{size:`2.2em`,color:`primary`},{default:t(()=>[...c[41]||=[a(`wi-wave`,-1)]]),_:1}),i(g,{class:`mya`}),i(f,{class:`pa4`,icon:`mdi mdi-cart`,text:``,lg:``}),i(f,{class:`pa4`,icon:`mdi mdi-email`,text:``,lg:``}),i(f,{class:`pa4`,icon:`mdi mdi-chat`,text:``,lg:``})]),_:1}),i(h,{"align-center":``,"justify-center":``},{default:t(()=>[...c[42]||=[a(`Some content.`,-1)]]),_:1})]),_:1})]),_:1})])}var u=s({},[[`render`,l]]);function d(s,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var f={color:`Applies a color to the toolbar's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the toolbar's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,absolute:`Sets the CSS position of the toolbar to <code>absolute</code> and relative to the closest parent with a position (like normal CSS).`,fixed:`Sets the CSS position of the toolbar to <code>fixed</code>.`,bottom:`Only applies to horizontal toolbars and can't be combined with the <code>right</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the horizontal toolbar at the bottom. By default the toolbar will be at the top.<br>This option also applies a border at the top of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default bottom border.`,right:`Only applies to vertical toolbars and can't be combined with the <code>bottom</code> option.<br>If applied together with the <code>absolute</code> or <code>fixed</code> option, positions the vertical toolbar on the right side. By default the toolbar will be on the left.<br>This option also applies a border at the left of the toolbar (unless the <code>no-border</code> prop is set to true), and removes the default right border.`,height:`Only applies to horizontal toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.`,width:`Only applies to vertical toolbars.<br>Sets a height on the toolbar.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be considered a pixel value.`,noBorder:`Removes the default border (top or bottom) from the toolbar.`,shadow:`Applies a drop shadow to the toolbar.`},p={default:{description:`The toolbar content.`}},m={},h=s({data:()=>({propsDescs:f,slots:p}),computed:{props(){return c.props},events(){return c.emits.reduce((e,t)=>(e[t]={description:m[t]||``})&&e,{})}}},[[`render`,d]]);function g(n,s,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return o(),r(`main`,null,[i(f,null,{default:t(()=>[...s[0]||=[a(`w-toolbar`,-1)]]),_:1}),i(p),i(m)])}var _=s({components:{Examples:u,Api:h}},[[`render`,g]]);export{_ as default};