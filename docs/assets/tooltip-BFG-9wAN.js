import{A as e,G as t,P as n,c as r,d as i,g as a,h as o,xt as s}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{n as l}from"./index-DR7O6uV_.js";var u={class:`tooltips-demo`},d={class:`d-iblock my2 mx6`},f={class:`mt4`},p={class:`text-center py6`},m={class:`another-container text-center green-light5--bg pa6`},h={class:`w-flex wrap align-start gap6`};function g(c,l,g,_,v,y){let b=n(`alert`),x=n(`title-link`),S=n(`w-icon`),C=n(`w-tooltip`),w=n(`example`),T=n(`w-button`),E=n(`w-switch`),D=n(`w-flex`),O=n(`w-radios`),k=n(`w-tag`),A=n(`w-card`);return e(),i(`div`,u,[a(b,{tip:``},{default:t(()=>[...l[12]||=[r(`strong`,null,`Important notes`,-1),r(`br`,null,null,-1),o(`
By default the tooltip is moved into the `,-1),r(`code`,null,`.w-app`,-1),o(` in the DOM, so it is not constrained by a hidden
overflow on a parent.`,-1),r(`br`,null,null,-1),o(`
When used inside a dialog, menu or drawer, it will be by default appended to that element.`,-1),r(`br`,null,null,-1),o(`
You can use the `,-1),r(`code`,null,`appendTo`,-1),o(` prop to place it elsewhere in the DOM, like in the
`,-1),r(`a`,{href:`#appending-to-a-dom-node`},`Appending to a particular DOM node`,-1),o(` example.
`,-1)]]),_:1}),a(x,{h2:``},{default:t(()=>[...l[13]||=[o(`Tooltip position`,-1)]]),_:1}),a(w,{"content-class":`text-center`},{pug:t(()=>[...l[18]||=[o(`.text-center
  w-tooltip(left tooltip="Home")
    w-icon.ma2(xl color="primary-light2") mdi mdi-home

  w-tooltip(top tooltip="Home")
    w-icon.ma2(xl color="primary-light2") mdi mdi-home

  w-tooltip(tooltip="Home")
    w-icon.ma2(xl color="primary-light2") mdi mdi-home

  w-tooltip(right tooltip="Home")
    w-icon.ma2(xl color="primary-light2") mdi mdi-home`,-1)]]),html:t(()=>[...l[19]||=[o(`<div class="text-center">
  <w-tooltip left tooltip="Home">
    <w-icon
      class="ma2"
      xl
      color="primary-light2">
      mdi mdi-home
    </w-icon>
  </w-tooltip>

  <w-tooltip top tooltip="Home">
    <w-icon
      class="ma2"
      xl
      color="primary-light2">
      mdi mdi-home
    </w-icon>
  </w-tooltip>

  <w-tooltip tooltip="Home">
    <w-icon
      class="ma2"
      xl
      color="primary-light2">
      mdi mdi-home
    </w-icon>
  </w-tooltip>

  <w-tooltip right tooltip="Home">
    <w-icon
      class="ma2"
      xl
      color="primary-light2">
      mdi mdi-home
    </w-icon>
  </w-tooltip>
</div>
`,-1)]]),default:t(()=>[a(C,{left:``,tooltip:`Home`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`primary-light2`},{default:t(()=>[...l[14]||=[o(`mdi mdi-home`,-1)]]),_:1})]),_:1}),a(C,{top:``,tooltip:`Home`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`primary-light2`},{default:t(()=>[...l[15]||=[o(`mdi mdi-home`,-1)]]),_:1})]),_:1}),a(C,{tooltip:`Home`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`primary-light2`},{default:t(()=>[...l[16]||=[o(`mdi mdi-home`,-1)]]),_:1})]),_:1}),a(C,{right:``,tooltip:`Home`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`primary-light2`},{default:t(()=>[...l[17]||=[o(`mdi mdi-home`,-1)]]),_:1})]),_:1})]),_:1}),a(x,{h2:``},{default:t(()=>[...l[20]||=[o(`Alignments`,-1)]]),_:1}),l[138]||=r(`p`,null,`In addition to positions, you can align the tooltip with its activator.`,-1),a(w,{class:`example6`},{pug:t(()=>[...l[45]||=[o(`.title4.mb2 top position
w-tooltip(top align-left)
  w-button.ma1 Align left
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.
w-tooltip(top)
  w-button.ma1 Centered
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.
w-tooltip(top align-right)
  w-button.ma1 Align right
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.

.title4.mt6.mb2 Bottom position
w-tooltip(align-left)
  w-button.ma1 Align left
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.
w-tooltip
  w-button.ma1 Centered
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.
w-tooltip(align-right)
  w-button.ma1 Align right
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.

.title4.mt6.mb2 Right position
w-tooltip(right align-top)
  w-button.ma1 Align top
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.
w-tooltip(right)
  w-button.ma1 Centered
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.
w-tooltip(right align-bottom)
  w-button.ma1 Align bottom
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.

.title4.mt6.mb2 Left position
w-tooltip(left align-top)
  w-button.ma1 Align top
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.
w-tooltip(left)
  w-button.ma1 Centered
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.
w-tooltip(left align-bottom)
  w-button.ma1 Align bottom
  template(#tooltip)
    | Tooltip content,#[br]on multiple lines.`,-1)]]),html:t(()=>[...l[46]||=[o(`<div class="title4 mb2">Top position</div>
<w-tooltip top align-left>
  <w-button class="ma1">Align left</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<w-tooltip top>
  <w-button class="ma1">Centered</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<w-tooltip top align-right>
  <w-button class="ma1">Align right</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<div class="title4 mt6 mb2">Bottom position</div>
<w-tooltip align-left>
  <w-button class="ma1">Align left</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<w-tooltip>
  <w-button class="ma1">Centered</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<w-tooltip align-right>
  <w-button class="ma1">Align right</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<div class="title4 mt6 mb2">Right position</div>
<w-tooltip right align-top>
  <w-button class="ma1">Align top</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<w-tooltip right>
  <w-button class="ma1">Centered</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<w-tooltip right align-bottom>
  <w-button class="ma1">Align bottom</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<div class="title4 mt6 mb2">Left position</div>
<w-tooltip left align-top>
  <w-button class="ma1">Align top</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<w-tooltip left>
  <w-button class="ma1">Centered</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>

<w-tooltip left align-bottom>
  <w-button class="ma1">Align bottom</w-button>
  <template #tooltip>
    Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.
  </template>
</w-tooltip>
`,-1)]]),default:t(()=>[l[47]||=r(`div`,{class:`title4 mb2`},`Top position`,-1),a(C,{"append-to":`.example6`,top:``,"align-left":``},{tooltip:t(()=>[...l[22]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[21]||=[o(`Align left`,-1)]]),_:1})]),_:1}),a(C,{"append-to":`.example6`,top:``},{tooltip:t(()=>[...l[24]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[23]||=[o(`Centered`,-1)]]),_:1})]),_:1}),a(C,{"append-to":`.example6`,top:``,"align-right":``},{tooltip:t(()=>[...l[26]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[25]||=[o(`Align right`,-1)]]),_:1})]),_:1}),l[48]||=r(`div`,{class:`title4 mt6 mb2`},`Bottom position`,-1),a(C,{"append-to":`.example6`,"align-left":``},{tooltip:t(()=>[...l[28]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[27]||=[o(`Align left`,-1)]]),_:1})]),_:1}),a(C,{"append-to":`.example6`},{tooltip:t(()=>[...l[30]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[29]||=[o(`Centered`,-1)]]),_:1})]),_:1}),a(C,{"append-to":`.example6`,"align-right":``},{tooltip:t(()=>[...l[32]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[31]||=[o(`Align right`,-1)]]),_:1})]),_:1}),l[49]||=r(`div`,{class:`title4 mt6 mb2`},`Right position`,-1),a(C,{"append-to":`.example6`,right:``,"align-top":``},{tooltip:t(()=>[...l[34]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[33]||=[o(`Align top`,-1)]]),_:1})]),_:1}),a(C,{"append-to":`.example6`,right:``},{tooltip:t(()=>[...l[36]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[35]||=[o(`Centered`,-1)]]),_:1})]),_:1}),a(C,{"append-to":`.example6`,right:``,"align-bottom":``},{tooltip:t(()=>[...l[38]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[37]||=[o(`Align bottom`,-1)]]),_:1})]),_:1}),l[50]||=r(`div`,{class:`title4 mt6 mb2`},`Left position`,-1),a(C,{"append-to":`.example6`,left:``,"align-top":``},{tooltip:t(()=>[...l[40]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[39]||=[o(`Align top`,-1)]]),_:1})]),_:1}),a(C,{"append-to":`.example6`,left:``},{tooltip:t(()=>[...l[42]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[41]||=[o(`Centered`,-1)]]),_:1})]),_:1}),a(C,{"append-to":`.example6`,left:``,"align-bottom":``},{tooltip:t(()=>[...l[44]||=[o(`Tooltip content,`,-1),r(`br`,null,null,-1),o(`on multiple lines.`,-1)]]),default:t(()=>[a(T,{class:`ma1`},{default:t(()=>[...l[43]||=[o(`Align bottom`,-1)]]),_:1})]),_:1})]),_:1}),a(x,{h2:``},{default:t(()=>[...l[51]||=[o(`Toggle on click`,-1)]]),_:1}),a(w,{"content-class":`text-center`},{pug:t(()=>[...l[56]||=[o(`.text-center
  w-tooltip(show-on-click left tooltip="Star")
    w-button.ma2(bg-color="info")
      w-icon.mr1 wi-star
      | Star

  w-tooltip(show-on-click right tooltip="Star")
    w-button.ma2(bg-color="info-dark2" dark)
      w-icon.mr1 wi-star
      | Star`,-1)]]),html:t(()=>[...l[57]||=[o(`<div class="text-center">
  <w-tooltip show-on-click left tooltip="Star">
    <w-button
      class="ma2"

      bg-color="info">
      <w-icon class="mr1">
        wi-star
      </w-icon>
      Star
    </w-button>
  </w-tooltip>

  <w-tooltip show-on-click right tooltip="Star">
    <w-button
      class="ma2"
      bg-color="info-dark2"
      dark>
      <w-icon class="mr1">
        wi-star
      </w-icon>
      Star
    </w-button>
  </w-tooltip>
</div>
`,-1)]]),default:t(()=>[a(C,{"show-on-click":``,left:``,tooltip:`Star`},{default:t(()=>[a(T,{class:`ma2`,"bg-color":`info`},{default:t(()=>[a(S,{class:`mr1`},{default:t(()=>[...l[52]||=[o(`wi-star`,-1)]]),_:1}),l[53]||=o(`Star`,-1)]),_:1})]),_:1}),a(C,{"show-on-click":``,right:``,tooltip:`Star`},{default:t(()=>[a(T,{class:`ma2`,"bg-color":`info-dark2`,dark:``},{default:t(()=>[a(S,{class:`mr1`},{default:t(()=>[...l[54]||=[o(`wi-star`,-1)]]),_:1}),l[55]||=o(`Star`,-1)]),_:1})]),_:1})]),_:1}),a(x,{h2:``},{default:t(()=>[...l[58]||=[o(`Disabled`,-1)]]),_:1}),l[139]||=r(`p`,null,[o(`Use the `),r(`code`,null,`disable`),o(` prop to keep the activator visible and interactive while preventing the
tooltip from opening (including when `),r(`code`,null,`v-model`),o(` is `),r(`code`,null,`true`),o(`).`)],-1),a(w,{"content-class":`text-center`},{pug:t(()=>[...l[60]||=[o(`w-flex(align-center justify-center wrap :gap="4")
  w-switch.mb2(v-model="tooltipDisabled" label="Disable tooltip")
  w-tooltip(:disable="tooltipDisabled" show-on-click left tooltip="This tooltip is controlled by the switch.")
    w-button.ma2(bg-color="primary" dark) Click to toggle`,-1)]]),html:t(()=>[...l[61]||=[o(`<w-flex align-center justify-center wrap :gap="4">
  <w-switch
    class="mb2"
    v-model="tooltipDisabled"
    label="Disable tooltip">
  </w-switch>

  <w-tooltip
    :disable="tooltipDisabled"
    show-on-click
    left
    tooltip="This tooltip is controlled by the switch.">
    <w-button
      class="ma2"

      bg-color="primary"
      dark>
      Click to toggle
    </w-button>
  </w-tooltip>
</w-flex>`,-1)]]),js:t(()=>[...l[62]||=[o(`data: () => ({
  tooltipDisabled: false
})
`,-1)]]),default:t(()=>[a(D,{"align-center":``,"justify-center":``,wrap:``,gap:4},{default:t(()=>[a(E,{class:`mb2`,modelValue:c.tooltipDisabled,"onUpdate:modelValue":l[0]||=e=>c.tooltipDisabled=e,label:`Disable tooltip`},null,8,[`modelValue`]),a(C,{disable:c.tooltipDisabled,"show-on-click":``,left:``,tooltip:`This tooltip is controlled by the switch.`},{default:t(()=>[a(T,{class:`ma2`,"bg-color":`primary`,dark:``},{default:t(()=>[...l[59]||=[o(`Click to toggle`,-1)]]),_:1})]),_:1},8,[`disable`])]),_:1})]),_:1}),a(x,{h2:``},{default:t(()=>[...l[63]||=[o(`Persistent`,-1)]]),_:1}),l[140]||=r(`p`,null,[o(`By default with the `),r(`code`,null,`show-on-click`),o(` option, the tooltip will hide when you click
anywhere once open.`),r(`br`),o(`
To make it persistent, use the `),r(`code`,null,`persistent`),o(` prop, so a click will not close the open
tooltip.`),r(`br`),o(`
Clicking on the activator can always toggle the tooltip regardless of the `),r(`code`,null,`persistent`),o(`
prop.`)],-1),a(w,{"content-class":`text-center my4 example-persistent`},{pug:t(()=>[...l[65]||=[o(`w-tooltip(show-on-click persistent tooltip="Star")
  w-icon(xl) wi-star
`,-1)]]),html:t(()=>[...l[66]||=[o(`<w-tooltip
  show-on-click
  persistent
  tooltip="Star">
  <w-icon xl>wi-star</w-icon>
</w-tooltip>
`,-1)]]),default:t(()=>[a(C,{"show-on-click":``,persistent:``,"append-to":`.example-persistent`,tooltip:`Star`},{default:t(()=>[a(S,{xl:``},{default:t(()=>[...l[64]||=[o(`wi-star`,-1)]]),_:1})]),_:1})]),_:1}),a(x,{h2:``},{default:t(()=>[...l[67]||=[o(`Using a v-model`,-1)]]),_:1}),a(x,{h3:``},{default:t(()=>[...l[68]||=[o(`Toggle with v-model`,-1)]]),_:1}),l[141]||=r(`p`,null,`Click the button to toggle the tooltips.`,-1),a(w,{"content-class":`text-center my4`},{pug:t(()=>[...l[73]||=[o(`.text-center
  w-button.my2.mx6(
    @click="showTooltip = !showTooltip"
    dark
    width="6em")
    | `+s(`{{ showTooltip ? 'Hide' : 'Show' }}`)+` tooltip

  div.d-iblock.my2.mx6
    w-tooltip(v-model="showTooltip" show-on-click persistent left tooltip="Star")
      w-icon.ma2(lg) wi-star

    w-tooltip(v-model="showTooltip" show-on-click persistent top tooltip="Star")
      w-icon.ma2(lg) wi-star

    w-tooltip(v-model="showTooltip" show-on-click persistent tooltip="Star")
      w-icon.ma2(lg) wi-star

    w-tooltip(v-model="showTooltip" show-on-click persistent right tooltip="Star")
      w-icon.ma2(lg) wi-star`,-1)]]),html:t(()=>[...l[74]||=[o(`<div class="text-center">
  <w-button
    @click="showTooltip = !showTooltip"
    class="my2 mx6"
    dark
    width="6em">
    `+s(`{{ showTooltip ? 'Hide' : 'Show' }}`)+` tooltip
  </w-button>

  <div class="d-iblock my2 mx6">
    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      left
      tooltip="Star">
      <w-icon class="ma2" lg>wi-star</w-icon>
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      top
      tooltip="Star">
      <w-icon class="ma2" lg>wi-star</w-icon>
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      tooltip="Star">
      <w-icon class="ma2" lg>wi-star</w-icon>
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      right
      tooltip="Star">
      <w-icon class="ma2" lg>wi-star</w-icon>
    </w-tooltip>
  </div>
</div>`,-1)]]),js:t(()=>[...l[75]||=[o(`data: () => ({
  showTooltip: false
})
`,-1)]]),default:t(()=>[a(T,{class:`my2 mx6`,onClick:l[1]||=e=>c.showTooltip=!c.showTooltip,width:`6em`},{default:t(()=>[o(s(c.showTooltip?`Hide`:`Show`)+` tooltip`,1)]),_:1}),r(`div`,d,[a(C,{"model-value":c.showTooltip,"show-on-click":``,persistent:``,left:``,tooltip:`Star`,onOpen:l[2]||=e=>c.tooltipVisible=!0,onClose:y.onTooltipClose},{default:t(()=>[a(S,{lg:``},{default:t(()=>[...l[69]||=[o(`wi-star`,-1)]]),_:1})]),_:1},8,[`model-value`,`onClose`]),a(C,{"model-value":c.showTooltip,"show-on-click":``,persistent:``,top:``,tooltip:`Star`,onOpen:l[3]||=e=>c.tooltipVisible=!0,onClose:y.onTooltipClose},{default:t(()=>[a(S,{lg:``},{default:t(()=>[...l[70]||=[o(`wi-star`,-1)]]),_:1})]),_:1},8,[`model-value`,`onClose`]),a(C,{"model-value":c.showTooltip,"show-on-click":``,persistent:``,tooltip:`Star`,onOpen:l[4]||=e=>c.tooltipVisible=!0,onClose:y.onTooltipClose},{default:t(()=>[a(S,{lg:``},{default:t(()=>[...l[71]||=[o(`wi-star`,-1)]]),_:1})]),_:1},8,[`model-value`,`onClose`]),a(C,{"model-value":c.showTooltip,"show-on-click":``,persistent:``,right:``,tooltip:`Star`,onOpen:l[5]||=e=>c.tooltipVisible=!0,onClose:y.onTooltipClose},{default:t(()=>[a(S,{lg:``},{default:t(()=>[...l[72]||=[o(`wi-star`,-1)]]),_:1})]),_:1},8,[`model-value`,`onClose`])])]),_:1}),a(x,{h3:``},{default:t(()=>[...l[76]||=[o(`Using v-model to update a variable`,-1)]]),_:1}),l[142]||=r(`p`,null,`Click the star to toggle the tooltip.`,-1),a(w,{"content-class":`text-center my4`},{pug:t(()=>[...l[78]||=[o(`w-tooltip(v-model="showTooltip" show-on-click right tooltip="Star")
  w-icon(lg) wi-star
div.mt4 The tooltip is `+s(`{{ showTooltip ? 'visible' : 'hidden' }}`)+`.
`,-1)]]),html:t(()=>[...l[79]||=[o(`<w-tooltip
  v-model="showTooltip"
  show-on-click
  right
  tooltip="Star">
  <w-icon lg>wi-star</w-icon>
</w-tooltip>

<div class="mt4">
  The tooltip is `+s(`{{ showTooltip ? 'visible' : 'hidden' }}`)+`.
</div>`,-1)]]),js:t(()=>[...l[80]||=[o(`data: () => ({
  showTooltip: false
})
`,-1)]]),default:t(()=>[a(C,{modelValue:c.showTooltip2,"onUpdate:modelValue":l[6]||=e=>c.showTooltip2=e,"show-on-click":``,right:``,tooltip:`Star`},{default:t(()=>[a(S,{lg:``},{default:t(()=>[...l[77]||=[o(`wi-star`,-1)]]),_:1})]),_:1},8,[`modelValue`]),r(`div`,f,`The tooltip is `+s(c.showTooltip2?`visible`:`hidden`)+`.`,1)]),_:1}),a(x,{h2:``},{default:t(()=>[...l[81]||=[o(`Background color & text color`,-1)]]),_:1}),l[143]||=r(`p`,null,[o(`Like in most components, you can set a `),r(`code`,null,`color`),o(` for the text and a `),r(`code`,null,`bg-color`),o(` for the
background.`)],-1),a(w,{"content-class":`text-center pb8`},{pug:t(()=>[...l[86]||=[o(`.text-center
  w-tooltip(color="white" bg-color="blue" tooltip="Star")
    w-icon.ma2(xl color="blue") wi-star

  w-tooltip(color="white" bg-color="purple" tooltip="Star")
    w-icon.ma2(xl color="purple") wi-star

  w-tooltip(color="orange-dark1" bg-color="yellow-light3" tooltip="Star")
    w-icon.ma2(xl color="amber") wi-star

  w-tooltip(color="orange" tooltip="Star")
    w-icon.ma2(xl) wi-star`,-1)]]),html:t(()=>[...l[87]||=[o(`<div class="text-center">
  <w-tooltip color="white" bg-color="blue" tooltip="Star">
    <w-icon
      class="ma2"
      xl
      color="blue">
      wi-star
    </w-icon>
  </w-tooltip>

  <w-tooltip color="white" bg-color="purple" tooltip="Star">
    <w-icon
      class="ma2"
      xl
      color="purple">
      wi-star
    </w-icon>
  </w-tooltip>

  <w-tooltip
    color="orange-dark1"
    bg-color="yellow-light3"
    tooltip="Star">
    <w-icon
      class="ma2"
      xl
      color="amber">
      wi-star
    </w-icon>
  </w-tooltip>

  <w-tooltip color="orange" tooltip="Star">
    <w-icon
      class="ma2"
      xl>
      wi-star
    </w-icon>
  </w-tooltip>
</div>
`,-1)]]),default:t(()=>[a(C,{color:`white`,"bg-color":`blue`,tooltip:`Star`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`blue`},{default:t(()=>[...l[82]||=[o(`wi-star`,-1)]]),_:1})]),_:1}),a(C,{color:`white`,"bg-color":`purple`,tooltip:`Star`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`purple`},{default:t(()=>[...l[83]||=[o(`wi-star`,-1)]]),_:1})]),_:1}),a(C,{color:`orange-dark1`,"bg-color":`yellow-light3`,tooltip:`Star`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`amber`},{default:t(()=>[...l[84]||=[o(`wi-star`,-1)]]),_:1})]),_:1}),a(C,{color:`orange`,tooltip:`Star`},{default:t(()=>[a(S,{class:`ma2`,xl:``},{default:t(()=>[...l[85]||=[o(`wi-star`,-1)]]),_:1})]),_:1})]),_:1}),a(x,{h2:``},{default:t(()=>[...l[88]||=[o(`Tile, round and shadow`,-1)]]),_:1}),a(w,{"content-class":`text-center pb8`},{pug:t(()=>[...l[92]||=[o(`.text-center.pb8
  w-tooltip(color="red-light2" tile tooltip="Tile")
    w-icon.ma2(xl color="red-light2") mdi mdi-square
  w-tooltip(color="amber-dark1" round tooltip="Round")
    w-icon.ma2(xl color="amber") mdi mdi-circle
  w-tooltip(color="pink-light1" shadow tooltip="Shadow")
    w-icon.ma2(xl color="pink-light1") mdi mdi-heart`,-1)]]),html:t(()=>[...l[93]||=[o(`<div class="text-center pb8">
  <w-tooltip color="red-light2" tile tooltip="Tile">
    <w-icon
      class="ma2"
      xl
      color="red-light2">
      mdi mdi-square
    </w-icon>
  </w-tooltip>

  <w-tooltip color="amber-dark1" round tooltip="Round">
    <w-icon
      class="ma2"
      xl
      color="amber">
      mdi mdi-circle
    </w-icon>
  </w-tooltip>

  <w-tooltip color="pink-light1" shadow tooltip="Shadow">
    <w-icon
      class="ma2"
      xl
      color="pink-light1">
      mdi mdi-heart
    </w-icon>
  </w-tooltip>
</div>
`,-1)]]),default:t(()=>[a(C,{color:`red-light2`,tile:``,tooltip:`Tile`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`red-light2`},{default:t(()=>[...l[89]||=[o(`mdi mdi-square`,-1)]]),_:1})]),_:1}),a(C,{color:`amber-dark1`,round:``,tooltip:`Round`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`amber`},{default:t(()=>[...l[90]||=[o(`mdi mdi-circle`,-1)]]),_:1})]),_:1}),a(C,{color:`pink-light1`,shadow:``,tooltip:`Shadow`},{default:t(()=>[a(S,{class:`ma2`,xl:``,color:`pink-light1`},{default:t(()=>[...l[91]||=[o(`mdi mdi-heart`,-1)]]),_:1})]),_:1})]),_:1}),a(x,{h2:``},{default:t(()=>[...l[94]||=[o(`Different contents`,-1)]]),_:1}),a(w,{"content-class":`text-center`},{pug:t(()=>[...l[100]||=[o(`.text-center
  w-tooltip(color="primary")
    span.ma3 Content with icon
    template(#tooltip)
      w-icon.mr1 wi-star
      | Star

  w-tooltip(color="primary")
    span.ma3 Very long content
    template(#tooltip)
      | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      br
      | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
      br
      br
      | Recusandae distinctio perferendis expedita pariatur fuga.`,-1)]]),html:t(()=>[...l[101]||=[o(`<div class="text-center">
  <w-tooltip color="primary">
    <span class="ma3">Content with icon</span>
    <template #tooltip>
      <w-icon class="mr1">wi-star</w-icon>
      Star
    </template>
  </w-tooltip>

  <w-tooltip color="primary">
    <span class="ma3">Very long content</span>
    <template #tooltip>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      <br />
      Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
      <br />
      <br />
      Recusandae distinctio perferendis expedita pariatur fuga.
    </template>
  </w-tooltip>
</div>
`,-1)]]),default:t(()=>[a(C,{color:`primary`},{tooltip:t(()=>[a(S,{class:`mr1`},{default:t(()=>[...l[95]||=[o(`wi-star`,-1)]]),_:1}),l[96]||=o(`Star`,-1)]),default:t(()=>[l[97]||=r(`span`,{class:`ma3`},`Content with icon`,-1)]),_:1}),a(C,{color:`primary`},{tooltip:t(()=>[...l[98]||=[o(`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,-1),r(`br`,null,null,-1),o(`Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!`,-1),r(`br`,null,null,-1),r(`br`,null,null,-1),o(`Recusandae distinctio perferendis expedita pariatur fuga.`,-1)]]),default:t(()=>[l[99]||=r(`span`,{class:`ma3`},`Very long content`,-1)]),_:1})]),_:1}),a(x,{h2:``},{default:t(()=>[...l[102]||=[o(`Different sizes and caption style`,-1)]]),_:1}),a(w,{"content-class":`text-center example-sizes wrap w-flex align-center justify-center`},{pug:t(()=>[...l[109]||=[o(`w-tooltip(xs show-on-click persistent :model-value="true" tooltip="Extra small")
  span.ma6 xs

w-tooltip(sm show-on-click persistent :model-value="true" tooltip="Small")
  span.ma6 sm

w-tooltip(md show-on-click persistent :model-value="true" tooltip="Medium")
  span.ma6 md

w-tooltip(lg show-on-click persistent :model-value="true" tooltip="Large")
  span.ma7 lg

w-tooltip(xl show-on-click persistent :model-value="true" tooltip="Extra large")
  span.ma10 xl

w-tooltip(caption show-on-click persistent :model-value="true" tooltip="Caption style.")
  span.ma10 Caption`,-1)]]),html:t(()=>[...l[110]||=[o(`<w-tooltip xs show-on-click persistent :model-value="true" tooltip="Extra small">
  <span class="ma3">xs</span>
</w-tooltip>

<w-tooltip sm show-on-click persistent :model-value="true" tooltip="Small">
  <span class="ma3">sm</span>
</w-tooltip>

<w-tooltip md show-on-click persistent :model-value="true" tooltip="Medium">
  <span class="ma3">md</span>
</w-tooltip>

<w-tooltip lg show-on-click persistent :model-value="true" tooltip="Large">
  <span class="ma3">lg</span>
</w-tooltip>

<w-tooltip xl show-on-click persistent :model-value="true" tooltip="Extra large">
  <span class="ma3">xl</span>
</w-tooltip>

<w-tooltip caption show-on-click persistent :model-value="true" tooltip="Caption style.">
  <span class="ma3">Caption</span>
</w-tooltip>
`,-1)]]),default:t(()=>[a(C,{xs:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`,tooltip:`Extra small`},{default:t(()=>[...l[103]||=[r(`span`,{class:`ma6`},`xs`,-1)]]),_:1}),a(C,{sm:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`,tooltip:`Small`},{default:t(()=>[...l[104]||=[r(`span`,{class:`ma6`},`sm`,-1)]]),_:1}),a(C,{md:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`,tooltip:`Medium`},{default:t(()=>[...l[105]||=[r(`span`,{class:`ma6`},`md`,-1)]]),_:1}),a(C,{lg:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`,tooltip:`Large`},{default:t(()=>[...l[106]||=[r(`span`,{class:`ma7`},`lg`,-1)]]),_:1}),a(C,{xl:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`,tooltip:`Extra large`},{default:t(()=>[...l[107]||=[r(`span`,{class:`ma10`},`xl`,-1)]]),_:1}),a(C,{caption:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`,tooltip:`Caption style.`},{default:t(()=>[...l[108]||=[r(`span`,{class:`ma10`},`Caption`,-1)]]),_:1})]),_:1}),a(x,{h2:``},{default:t(()=>[...l[111]||=[o(`Transitions`,-1)]]),_:1}),a(w,{"content-class":`text-center`},{pug:t(()=>[...l[116]||=[o(`.text-center
  w-radios.my4(inline v-model="transition" :items="transitions")
  .text-center.py6
    w-tooltip(:transition="transition" left tooltip="Home")
      w-icon.ma2(color="primary" xl) mdi mdi-home
    w-tooltip(:transition="transition" tooltip="Home")
      w-icon.ma2(color="primary" xl) mdi mdi-home
    w-tooltip(:transition="transition" top tooltip="Home")
      w-icon.ma2(color="primary" xl) mdi mdi-home
    w-tooltip(:transition="transition" right tooltip="Home")
      w-icon.ma2(color="primary" xl) mdi mdi-home`,-1)]]),html:t(()=>[...l[117]||=[o(`<div class="text-center">
  <w-radios
    class="my4"
    inline
    v-model="transition"
    :items="transitions">
  </w-radios>

  <div class="text-center py6">
    <w-tooltip :transition="transition" left tooltip="Home">
      <w-icon
        class="ma2"
        color="primary"
        xl>
        mdi mdi-home
      </w-icon>
    </w-tooltip>

    <w-tooltip :transition="transition" tooltip="Home">
      <w-icon
        class="ma2"
        color="primary"
        xl>
        mdi mdi-home
      </w-icon>
    </w-tooltip>

    <w-tooltip :transition="transition" top tooltip="Home">
      <w-icon
        class="ma2"
        color="primary"
        xl>
        mdi mdi-home
      </w-icon>
    </w-tooltip>

    <w-tooltip :transition="transition" right tooltip="Home">
      <w-icon
        class="ma2"
        color="primary"
        xl>
        mdi mdi-home
      </w-icon>
    </w-tooltip>
  </div>
</div>
`,-1)]]),js:t(()=>[...l[118]||=[o(`data: () => ({
  transition: 'bounce',
  transitions: [
    { label: 'Default', value: '' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'Scale', value: 'scale' },
    { label: 'Twist', value: 'twist' },
    { label: 'Fade', value: 'fade' },
    { label: 'Scale-fade', value: 'scale-fade' }
  ]
})
`,-1)]]),default:t(()=>[a(O,{class:`my4`,inline:``,modelValue:c.transition,"onUpdate:modelValue":l[7]||=e=>c.transition=e,items:c.transitions},null,8,[`modelValue`,`items`]),r(`div`,p,[a(C,{transition:c.transition,left:``,tooltip:`Home`},{default:t(()=>[a(S,{class:`ma2`,color:`primary`,xl:``},{default:t(()=>[...l[112]||=[o(`mdi mdi-home`,-1)]]),_:1})]),_:1},8,[`transition`]),a(C,{transition:c.transition,tooltip:`Home`},{default:t(()=>[a(S,{class:`ma2`,color:`primary`,xl:``},{default:t(()=>[...l[113]||=[o(`mdi mdi-home`,-1)]]),_:1})]),_:1},8,[`transition`]),a(C,{transition:c.transition,top:``,tooltip:`Home`},{default:t(()=>[a(S,{class:`ma2`,color:`primary`,xl:``},{default:t(()=>[...l[114]||=[o(`mdi mdi-home`,-1)]]),_:1})]),_:1},8,[`transition`]),a(C,{transition:c.transition,right:``,tooltip:`Home`},{default:t(()=>[a(S,{class:`ma2`,color:`primary`,xl:``},{default:t(()=>[...l[115]||=[o(`mdi mdi-home`,-1)]]),_:1})]),_:1},8,[`transition`])])]),_:1}),a(x,{h2:``,slug:`appending-to-a-dom-node`},{default:t(()=>[...l[119]||=[o(`Appending to a particular DOM node`,-1)]]),_:1}),l[144]||=r(`p`,null,`In this example, the yellow container of the pink activator has an overflow hidden, but we want the
tooltip to be fully visible. So we detach it to the green container.`,-1),a(w,{class:`mb12`,"content-class":`pa0`},{pug:t(()=>[...l[123]||=[o(`.wrapper.text-center.green-light5--bg.pa6
  w-card(bg-color="yellow-light5")
    w-tooltip(append-to=".wrapper")
      w-tag(lg color="pink-light1" bg-color="pink-light5")
        w-icon.mr1 mdi mdi-bomb
        | Hover me
      template(#tooltip)
        span This tooltip is appended to the green container!`,-1)]]),html:t(()=>[...l[124]||=[o(`<div class="wrapper text-center green-light5--bg pa6">
  <w-card bg-color="yellow-light5">
    <w-tooltip append-to=".wrapper">
      <w-tag
        lg
        color="pink-light1"
        bg-color="pink-light5">
        <w-icon class="mr1">mdi mdi-bomb</w-icon>
        Hover me
      </w-tag>
      <template #tooltip>
        <span>This tooltip is appended to the green container!</span>
      </template>
    </w-tooltip>
  </w-card>
</div>`,-1)]]),css:t(()=>[...l[125]||=[o(`.wrapper {position: relative;}

.w-card {
  overflow: hidden;
  display: inline-block;
  padding: 8px;
}

.w-card:before, .w-card:after {
  content: '';
  position: absolute;
  background-color: #ffea62;
  width: 6em;
  height: 6em;
  border-radius: 100%;
}

.w-card:before {top: -3em;left: -3em;}
.w-card:after {bottom: -3em;right: -3em;}

.w-tag {z-index: 1;}
`,-1)]]),default:t(()=>[r(`div`,m,[a(A,{"bg-color":`yellow-light5`},{default:t(()=>[a(C,{"append-to":`.another-container`},{tooltip:t(()=>[...l[122]||=[r(`span`,null,[o(`This tooltip is appended to the `),r(`span`,{class:`green`},`green`),o(` container!`)],-1)]]),default:t(()=>[a(k,{lg:``,color:`pink-light1`,"bg-color":`pink-light5`},{default:t(()=>[a(S,{class:`mr1`},{default:t(()=>[...l[120]||=[o(`mdi mdi-bomb`,-1)]]),_:1}),l[121]||=o(`Hover me`,-1)]),_:1})]),_:1})]),_:1})])]),_:1}),a(b,{warning:``},{default:t(()=>[...l[126]||=[o(`The DOM element that the tooltip is detached to must have a position (fixed, absolute or
relative).
`,-1)]]),_:1}),a(x,{h2:``},{default:t(()=>[...l[127]||=[o(`External activator`,-1)]]),_:1}),l[145]||=r(`p`,null,[o(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),r(`br`),o(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),a(x,{h3:``,slug:`external-activator--basic`},{default:t(()=>[...l[128]||=[o(`Trigger a menu on hover (left-side) or on click (right-side) of an external activator`,-1)]]),_:1}),r(`div`,h,[a(w,{class:`example14a grow`,"content-class":`text-center my4`,"app-classes-string":`text-center`},{pug:t(()=>[...l[129]||=[o(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button" tooltip="Meow!")`,-1)]]),html:t(()=>[...l[130]||=[o(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button" tooltip="Meow!"></w-tooltip>
`,-1)]]),default:t(()=>[a(T,{class:`cat-button-1`,icon:`mdi mdi-cat`,xl:``}),a(C,{"append-to":`.example14a`,activator:`.cat-button-1`,tooltip:`Meow!`})]),_:1}),a(w,{class:`example14b grow`,"content-class":`text-center my4`,"app-classes-string":`text-center`},{pug:t(()=>[...l[131]||=[o(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button" show-on-click tooltip="Meow!")`,-1)]]),html:t(()=>[...l[132]||=[o(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button" show-on-click tooltip="Meow!"></w-tooltip>
`,-1)]]),default:t(()=>[a(T,{class:`cat-button-2`,icon:`mdi mdi-cat`,xl:``}),a(C,{"append-to":`.example14b`,activator:`.cat-button-2`,"show-on-click":``,tooltip:`Meow!`})]),_:1})]),a(x,{h3:``,slug:`external-activator--2-activators`},{default:t(()=>[...l[133]||=[o(`Trigger the same menu on hover of 2 different external activators`,-1)]]),_:1}),l[146]||=r(`p`,{class:`text-italic`},`But do you really need that? ;)`,-1),a(b,{tip:``},{default:t(()=>[...l[134]||=[o(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`,-1)]]),_:1}),a(w,{class:`example16`,"content-class":`text-center my4`,"app-classes-string":`d-block text-center`},{pug:t(()=>[...l[135]||=[o(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @mouseenter="activator = '.cat-button';tooltipContent = 'Meow!'"
  @mouseleave="activator = '.pet-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @mouseenter="activator = '.dog-button';tooltipContent = 'Woof!'"
  @mouseleave="activator = '.pet-button'")

w-tooltip(:activator="activator" :delay="100" :tooltip="tooltipContent")`,-1)]]),html:t(()=>[...l[136]||=[o(`<w-button
  icon="mdi mdi-cat"
  xl
  class="pet-button cat-button ma4"
  @mouseenter="activator = '.cat-button';tooltipContent = 'Meow!'"
  @mouseleave="activator = '.pet-button'">
</w-button>
<w-button
  icon="mdi mdi-dog"
  xl
  class="pet-button dog-button ma4"
  @mouseenter="activator = '.dog-button';tooltipContent = 'Woof!'"
  @mouseleave="activator = '.pet-button'">
</w-button>

<w-tooltip :activator="activator" :delay="100" :tooltip="tooltipContent"></w-tooltip>`,-1)]]),js:t(()=>[...l[137]||=[o(`data: () => ({
  activator: '.pet-button',
  tooltipContent: ''
})`,-1)]]),default:t(()=>[a(T,{class:`pet-button2 cat-button3 ma4`,icon:`mdi mdi-cat`,xl:``,onMouseenter:l[8]||=e=>{c.activator2=`.cat-button3`,c.tooltipContent=`Meow!`},onMouseleave:l[9]||=e=>c.activator2=`.pet-button2`}),a(T,{class:`pet-button2 dog-button3 ma4`,icon:`mdi mdi-dog`,xl:``,onMouseenter:l[10]||=e=>{c.activator2=`.dog-button3`,c.tooltipContent=`Woof!`},onMouseleave:l[11]||=e=>c.activator2=`.pet-button2`}),a(C,{"append-to":`.example16`,activator:c.activator2,delay:100,tooltip:c.tooltipContent},null,8,[`activator`,`tooltip`])]),_:1})])}var _=c({data:()=>({tooltipDisabled:!1,showTooltip:!1,showTooltip2:!1,transition:`bounce`,transitions:[{label:`Default`,value:``},{label:`Bounce`,value:`bounce`},{label:`Scale`,value:`scale`},{label:`Twist`,value:`twist`},{label:`Fade`,value:`fade`},{label:`Scale-fade`,value:`scale-fade`}],activator1:`.pet-button`,activator2:`.pet-button2`,tooltipContent:``}),methods:{onTooltipClose(){setTimeout(()=>this.showTooltip=!1,100)}}},[[`render`,g]]);function v(s,c,l,u,d,f){let p=n(`title-link`),m=n(`component-api`);return e(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:s.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var y={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.`,tooltip:`Simple string content for the tooltip. Use the <code>#tooltip</code> slot for rich content (HTML, multiple lines, components).`,showOnClick:`Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.`,enableTouch:`Enables the hover-activating tooltips on touch devices:<br>Since you can't hover on touch device (you can only tap which is counted as a click), the hover-activating tooltips are not behaving similar on mobile as they need a tap to be closed. That's why this option is disabled by default.`,color:`Applies a color to the tooltip's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tooltip's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the tooltip.`,noBorder:`Removes the default border from the tooltip element.`,transition:`Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.`,tile:`Removes the default border-radius and sets sharp edges on the tooltip.`,round:`Sets a maximum border-radius on the corners of the tooltip, giving it a round look.`,tooltipClass:`Provide custom CSS classes for the tooltip element.`,appendTo:'Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>The default root is <span class="code">.w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',fixed:`Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).`,top:`Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.`,bottom:`Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.`,left:`Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.`,right:`Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.`,zIndex:`Applies a z-index (positive or negative integer) to the tooltip.`,persistent:`When set to <code>true</code>, clicking outside of the tooltip will not close the tooltip.`,activator:`Allows you to define one or multiple external activators for the tooltip through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the tooltip from different activators.`,delay:`A delay - in milliseconds - before opening the tooltip.<br>A small delay may help the tooltip position computing if the tooltip content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same tooltip with different content.`,disable:`When set to <code>true</code>, the tooltip never opens on interaction or via <code>v-model</code>; the activator remains rendered.`,caption:`Apply the <code>.caption</code> style on the tooltip content (small, grey, italic).`,xs:`Sets the size of the tooltip to extra small.`,sm:`Sets the size of the tooltip to small.`,md:`Sets the size of the tooltip to medium.`,lg:`Sets the size of the tooltip to large.`,xl:`Sets the size of the tooltip to extra large.`},b={activator:{description:`Place the element that should trigger the tooltip inside this slot. Event listeners are attached automatically — no <code>v-on="on"</code> binding is required.<br>The activator can be any visible DOM element or mounted component.<br><strong>Legacy API:</strong> use this slot for the activator and the <code>default</code> slot for tooltip content.`},default:{description:`<strong>New API:</strong> when no <code>#activator</code> slot is used, the default slot is the activator element.<br><strong>Legacy API:</strong> when an <code>#activator</code> slot is provided, the default slot is the tooltip content.`},tooltip:{description:`Rich tooltip content for use with the new API (default slot = activator). Use instead of the <code>tooltip</code> prop when the content needs HTML, components, or multiple lines.`}},x={input:`Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on tooltip close.`,open:`Emitted on tooltip open.`},S=c({data:()=>({propsDescs:y,slots:b}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]={description:x[t]||``})&&e,{})}}},[[`render`,v]]);function C(r,s,c,l,u,d){let f=n(`ui-component-title`),p=n(`examples`),m=n(`api`);return e(),i(`main`,null,[a(f,null,{default:t(()=>[...s[0]||=[o(`w-tooltip`,-1)]]),_:1}),a(p),a(m)])}var w=c({components:{Examples:_,Api:S}},[[`render`,C]]);export{w as default};