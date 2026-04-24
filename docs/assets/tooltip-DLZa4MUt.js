import{C as e,N as t,R as n,U as r,c as i,d as a,g as o,h as s,k as c,yt as l}from"./runtime-core.esm-bundler-BAjkj7eY.js";import{t as u}from"./_plugin-vue_export-helper-S3RvzygF.js";import{n as d}from"./index-DJwFRA2S.js";var f={class:`tooltips-demo`},p={class:`d-iblock my2 mx6`},m={class:`mt4`},h={class:`text-center py6`},g={class:`another-container text-center green-light5--bg pa6`},_={class:`w-flex wrap align-start gap6`};function v(u,d,v,y,b,x){let S=t(`alert`),C=t(`title-link`),w=t(`w-icon`),T=t(`w-tooltip`),E=t(`example`),D=t(`w-button`),O=t(`w-switch`),k=t(`w-flex`),A=t(`w-radios`),j=t(`w-tag`),M=t(`w-card`);return c(),a(`div`,f,[o(S,{tip:``},{default:r(()=>[...d[12]||=[i(`strong`,null,`Important notes`,-1),i(`br`,null,null,-1),s(`
By default the tooltip is moved into the w-app in the DOM, so it is not constrained by a hidden
overflow on a parent.`,-1),i(`br`,null,null,-1),s(`
When used inside a dialog, menu or drawer, it will be by default appended to that element.`,-1),i(`br`,null,null,-1),s(`
You can use the `,-1),i(`code`,null,`appendTo`,-1),s(` prop to place it elsewhere in the DOM, like in the
`,-1),i(`a`,{href:`#appending-to-a-dom-node`},`Appending to a particular DOM node`,-1),s(` example.
`,-1)]]),_:1}),o(C,{h2:``},{default:r(()=>[...d[13]||=[s(`Tooltip position`,-1)]]),_:1}),o(E,{"content-class":`text-center`},{pug:r(()=>[...d[22]||=[s(`.text-center
  w-tooltip(left)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
    | Home

  w-tooltip(top)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
    | Home

  w-tooltip
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
    | Home

  w-tooltip(right)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
    | Home`,-1)]]),html:r(()=>[...d[23]||=[s(`<div class="text-center">
  <w-tooltip left>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="primary-light2">
        mdi mdi-home
      </w-icon>
    </template>
    Home
  </w-tooltip>

  <w-tooltip top>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="primary-light2">
        mdi mdi-home
      </w-icon>
    </template>
    Home
  </w-tooltip>

  <w-tooltip>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="primary-light2">
        mdi mdi-home
      </w-icon>
    </template>
    Home
  </w-tooltip>

  <w-tooltip right>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="primary-light2">
        mdi mdi-home
      </w-icon>
    </template>
    Home
  </w-tooltip>
</div>
`,-1)]]),default:r(()=>[o(T,{left:``},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`primary-light2`}),{default:r(()=>[...d[14]||=[s(`mdi mdi-home`,-1)]]),_:1},16)]),default:r(()=>[d[15]||=s(`Home`,-1)]),_:1}),o(T,{top:``},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`primary-light2`}),{default:r(()=>[...d[16]||=[s(`mdi mdi-home`,-1)]]),_:1},16)]),default:r(()=>[d[17]||=s(`Home`,-1)]),_:1}),o(T,null,{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`primary-light2`}),{default:r(()=>[...d[18]||=[s(`mdi mdi-home`,-1)]]),_:1},16)]),default:r(()=>[d[19]||=s(`Home`,-1)]),_:1}),o(T,{right:``},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`primary-light2`}),{default:r(()=>[...d[20]||=[s(`mdi mdi-home`,-1)]]),_:1},16)]),default:r(()=>[d[21]||=s(`Home`,-1)]),_:1})]),_:1}),o(C,{h2:``},{default:r(()=>[...d[24]||=[s(`Alignments`,-1)]]),_:1}),d[191]||=i(`p`,null,`In addition to positions, you can align the tooltip with its activator.`,-1),o(E,{class:`example6`},{pug:r(()=>[...d[73]||=[s(`.title4.mb2 top position
w-tooltip(top align-left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align left
  | Tooltip content,#[br]on multiple lines.
w-tooltip(top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Tooltip content,#[br]on multiple lines.
w-tooltip(top align-right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align right
  | Tooltip content,#[br]on multiple lines.

.title4.mt6.mb2 Bottom position
w-tooltip(align-left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align left
  | Tooltip content,#[br]on multiple lines.
w-tooltip
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Tooltip content,#[br]on multiple lines.
w-tooltip(align-right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align right
  | Tooltip content,#[br]on multiple lines.

.title4.mt6.mb2 Right position
w-tooltip(right align-top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align top
  | Tooltip content,#[br]on multiple lines.
w-tooltip(right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Tooltip content,#[br]on multiple lines.
w-tooltip(right align-bottom)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align bottom
  | Tooltip content,#[br]on multiple lines.

.title4.mt6.mb2 Left position
w-tooltip(left align-top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align top
  | Tooltip content,#[br]on multiple lines.
w-tooltip(left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Tooltip content,#[br]on multiple lines.
w-tooltip(left align-bottom)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align bottom
  | Tooltip content,#[br]on multiple lines.`,-1)]]),html:r(()=>[...d[74]||=[s(`<div class="title4 mb2">Top position</div>
<w-tooltip top align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<w-tooltip top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<w-tooltip top align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Bottom position</div>
<w-tooltip align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<w-tooltip>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<w-tooltip align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Right position</div>
<w-tooltip right align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align top
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<w-tooltip right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<w-tooltip right align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">Alig
      n bottom
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Left position</div>
<w-tooltip left align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">A
      lign top
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<w-tooltip left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>

<w-tooltip left align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align bottom
    </w-button>
  </template>
  Tooltip content,`,-1),i(`br`,null,null,-1),s(`on multiple lines.
</w-tooltip>
`,-1)]]),default:r(()=>[d[75]||=i(`div`,{class:`title4 mb2`},`Top position`,-1),o(T,{"append-to":`.example6`,top:``,"align-left":``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[25]||=[s(`Align left`,-1)]]),_:1},16)]),default:r(()=>[d[26]||=s(`Tooltip content,`,-1),d[27]||=i(`br`,null,null,-1),d[28]||=s(`on multiple lines.`,-1)]),_:1}),o(T,{"append-to":`.example6`,top:``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[29]||=[s(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[30]||=s(`Tooltip content,`,-1),d[31]||=i(`br`,null,null,-1),d[32]||=s(`on multiple lines.`,-1)]),_:1}),o(T,{"append-to":`.example6`,top:``,"align-right":``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[33]||=[s(`Align right`,-1)]]),_:1},16)]),default:r(()=>[d[34]||=s(`Tooltip content,`,-1),d[35]||=i(`br`,null,null,-1),d[36]||=s(`on multiple lines.`,-1)]),_:1}),d[76]||=i(`div`,{class:`title4 mt6 mb2`},`Bottom position`,-1),o(T,{"append-to":`.example6`,"align-left":``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[37]||=[s(`Align left`,-1)]]),_:1},16)]),default:r(()=>[d[38]||=s(`Tooltip content,`,-1),d[39]||=i(`br`,null,null,-1),d[40]||=s(`on multiple lines.`,-1)]),_:1}),o(T,{"append-to":`.example6`},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[41]||=[s(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[42]||=s(`Tooltip content,`,-1),d[43]||=i(`br`,null,null,-1),d[44]||=s(`on multiple lines.`,-1)]),_:1}),o(T,{"append-to":`.example6`,"align-right":``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[45]||=[s(`Align right`,-1)]]),_:1},16)]),default:r(()=>[d[46]||=s(`Tooltip content,`,-1),d[47]||=i(`br`,null,null,-1),d[48]||=s(`on multiple lines.`,-1)]),_:1}),d[77]||=i(`div`,{class:`title4 mt6 mb2`},`Right position`,-1),o(T,{"append-to":`.example6`,right:``,"align-top":``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[49]||=[s(`Align top`,-1)]]),_:1},16)]),default:r(()=>[d[50]||=s(`Tooltip content,`,-1),d[51]||=i(`br`,null,null,-1),d[52]||=s(`on multiple lines.`,-1)]),_:1}),o(T,{"append-to":`.example6`,right:``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[53]||=[s(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[54]||=s(`Tooltip content,`,-1),d[55]||=i(`br`,null,null,-1),d[56]||=s(`on multiple lines.`,-1)]),_:1}),o(T,{"append-to":`.example6`,right:``,"align-bottom":``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[57]||=[s(`Align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[58]||=s(`Tooltip content,`,-1),d[59]||=i(`br`,null,null,-1),d[60]||=s(`on multiple lines.`,-1)]),_:1}),d[78]||=i(`div`,{class:`title4 mt6 mb2`},`Left position`,-1),o(T,{"append-to":`.example6`,left:``,"align-top":``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[61]||=[s(`Align top`,-1)]]),_:1},16)]),default:r(()=>[d[62]||=s(`Tooltip content,`,-1),d[63]||=i(`br`,null,null,-1),d[64]||=s(`on multiple lines.`,-1)]),_:1}),o(T,{"append-to":`.example6`,left:``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[65]||=[s(`Centered`,-1)]]),_:1},16)]),default:r(()=>[d[66]||=s(`Tooltip content,`,-1),d[67]||=i(`br`,null,null,-1),d[68]||=s(`on multiple lines.`,-1)]),_:1}),o(T,{"append-to":`.example6`,left:``,"align-bottom":``},{activator:r(({on:t})=>[o(D,e({class:`ma1`},n(t)),{default:r(()=>[...d[69]||=[s(`Align bottom`,-1)]]),_:1},16)]),default:r(()=>[d[70]||=s(`Tooltip content,`,-1),d[71]||=i(`br`,null,null,-1),d[72]||=s(`on multiple lines.`,-1)]),_:1})]),_:1}),o(C,{h2:``},{default:r(()=>[...d[79]||=[s(`Toggle on click`,-1)]]),_:1}),o(E,{"content-class":`text-center`},{pug:r(()=>[...d[86]||=[s(`.text-center
  w-tooltip(show-on-click left)
    template(#activator="{ on }")
      w-button.ma2(v-on="on" bg-color="info")
        w-icon.mr1 wi-star
        | Star
    | Star

  w-tooltip(show-on-click right)
    template(#activator="{ on }")
      w-button.ma2(v-on="on" bg-color="info-dark2" dark)
        w-icon.mr1 wi-star
        | Star
    | Star`,-1)]]),html:r(()=>[...d[87]||=[s(`<div class="text-center">
  <w-tooltip show-on-click left>
    <template #activator="{ on }">
      <w-button
        class="ma2"
        v-on="on"
        bg-color="info">
        <w-icon class="mr1">
          wi-star
        </w-icon>
        Star
      </w-button>
    </template>
    Star
  </w-tooltip>

  <w-tooltip show-on-click right>
    <template #activator="{ on }">
      <w-button
        class="ma2"
        v-on="on"
        bg-color="info-dark2"
        dark>
        <w-icon class="mr1">
          wi-star
        </w-icon>
        Star
      </w-button>
    </template>
    Star
  </w-tooltip>
</div>
`,-1)]]),default:r(()=>[o(T,{"show-on-click":``,left:``},{activator:r(({on:t})=>[o(D,e({class:`ma2`},n(t),{"bg-color":`info`}),{default:r(()=>[o(w,{class:`mr1`},{default:r(()=>[...d[80]||=[s(`wi-star`,-1)]]),_:1}),d[81]||=s(`Star`,-1)]),_:1},16)]),default:r(()=>[d[82]||=s(`Star`,-1)]),_:1}),o(T,{"show-on-click":``,right:``},{activator:r(({on:t})=>[o(D,e({class:`ma2`},n(t),{"bg-color":`info-dark2`,dark:``}),{default:r(()=>[o(w,{class:`mr1`},{default:r(()=>[...d[83]||=[s(`wi-star`,-1)]]),_:1}),d[84]||=s(`Star`,-1)]),_:1},16)]),default:r(()=>[d[85]||=s(`Star`,-1)]),_:1})]),_:1}),o(C,{h2:``},{default:r(()=>[...d[88]||=[s(`Disabled`,-1)]]),_:1}),d[192]||=i(`p`,null,[s(`Use the `),i(`code`,null,`disable`),s(` prop to keep the activator visible and interactive while preventing the
tooltip from opening (including when `),i(`code`,null,`v-model`),s(` is `),i(`code`,null,`true`),s(`).`)],-1),o(E,{"content-class":`text-center`},{pug:r(()=>[...d[91]||=[s(`w-flex(align-center justify-center wrap :gap="4")
  w-switch.mb2(v-model="tooltipDisabled" label="Disable tooltip")
  w-tooltip(:disable="tooltipDisabled" show-on-click left)
    template(#activator="{ on }")
      w-button.ma2(v-on="on" bg-color="primary" dark) Click to toggle
    | This tooltip is controlled by the switch.`,-1)]]),html:r(()=>[...d[92]||=[s(`<w-flex align-center justify-center wrap :gap="4">
  <w-switch
    class="mb2"
    v-model="tooltipDisabled"
    label="Disable tooltip">
  </w-switch>

  <w-tooltip
    :disable="tooltipDisabled"
    show-on-click
    left>
    <template #activator="{ on }">
      <w-button
        class="ma2"
        v-on="on"
        bg-color="primary"
        dark>
        Click to toggle
      </w-button>
    </template>
    This tooltip is controlled by the switch.
  </w-tooltip>
</w-flex>`,-1)]]),js:r(()=>[...d[93]||=[s(`data: () => ({
  tooltipDisabled: false
})
`,-1)]]),default:r(()=>[o(k,{"align-center":``,"justify-center":``,wrap:``,gap:4},{default:r(()=>[o(O,{class:`mb2`,modelValue:u.tooltipDisabled,"onUpdate:modelValue":d[0]||=e=>u.tooltipDisabled=e,label:`Disable tooltip`},null,8,[`modelValue`]),o(T,{disable:u.tooltipDisabled,"show-on-click":``,left:``},{activator:r(({on:t})=>[o(D,e({class:`ma2`},n(t),{"bg-color":`primary`,dark:``}),{default:r(()=>[...d[89]||=[s(`Click to toggle`,-1)]]),_:1},16)]),default:r(()=>[d[90]||=s(`This tooltip is controlled by the switch.`,-1)]),_:1},8,[`disable`])]),_:1})]),_:1}),o(C,{h2:``},{default:r(()=>[...d[94]||=[s(`Persistent`,-1)]]),_:1}),d[193]||=i(`p`,null,[s(`By default with the `),i(`code`,null,`show-on-click`),s(` option, the tooltip will hide when you click
anywhere once open.`),i(`br`),s(`
To make it persistent, use the `),i(`code`,null,`persistent`),s(` prop, so a click will not close the open
tooltip.`),i(`br`),s(`
Clicking on the activator can always toggle the tooltip regardless of the `),i(`code`,null,`persistent`),s(`
prop.`)],-1),o(E,{"content-class":`text-center my4 example-persistent`},{pug:r(()=>[...d[97]||=[s(`w-tooltip(show-on-click persistent)
  template(#activator="{ on }")
    w-icon(v-on="on" xl) wi-star
  | Star
`,-1)]]),html:r(()=>[...d[98]||=[s(`<w-tooltip
  show-on-click
  persistent>
  <template #activator="{ on }">
    <w-icon v-on="on" xl>wi-star</w-icon>
  </template>
  Star
</w-tooltip>
`,-1)]]),default:r(()=>[o(T,{"show-on-click":``,persistent:``,"append-to":`.example-persistent`},{activator:r(({on:t})=>[o(w,e(n(t),{xl:``}),{default:r(()=>[...d[95]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[96]||=s(`Star`,-1)]),_:1})]),_:1}),o(C,{h2:``},{default:r(()=>[...d[99]||=[s(`Using a v-model`,-1)]]),_:1}),o(C,{h3:``},{default:r(()=>[...d[100]||=[s(`Toggle with v-model`,-1)]]),_:1}),d[194]||=i(`p`,null,`Click the button to toggle the tooltips.`,-1),o(E,{"content-class":`text-center my4`},{pug:r(()=>[...d[109]||=[s(`.text-center
  w-button.my2.mx6(
    @click="showTooltip = !showTooltip"
    dark
    width="6em")
    | `+l(`{{ showTooltip ? 'Hide' : 'Show' }}`)+` tooltip

  div.d-iblock.my2.mx6
    w-tooltip(v-model="showTooltip" show-on-click persistent left)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click persistent top)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click persistent)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click persistent right)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star`,-1)]]),html:r(()=>[...d[110]||=[s(`<div class="text-center">
  <w-button
    @click="showTooltip = !showTooltip"
    class="my2 mx6"
    dark
    width="6em">
    `+l(`{{ showTooltip ? 'Hide' : 'Show' }}`)+` tooltip
  </w-button>

  <div class="d-iblock my2 mx6">
    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      left>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      top>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      right>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>
  </div>
</div>`,-1)]]),js:r(()=>[...d[111]||=[s(`data: () => ({
  showTooltip: false
})
`,-1)]]),default:r(()=>[o(D,{class:`my2 mx6`,onClick:d[1]||=e=>u.showTooltip=!u.showTooltip,width:`6em`},{default:r(()=>[s(l(u.showTooltip?`Hide`:`Show`)+` tooltip`,1)]),_:1}),i(`div`,p,[o(T,{"model-value":u.showTooltip,"show-on-click":``,persistent:``,left:``,onOpen:d[2]||=e=>u.tooltipVisible=!0,onClose:x.onTooltipClose},{activator:r(({on:t})=>[o(w,e(n(t),{lg:``}),{default:r(()=>[...d[101]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[102]||=s(`Star`,-1)]),_:1},8,[`model-value`,`onClose`]),o(T,{"model-value":u.showTooltip,"show-on-click":``,persistent:``,top:``,onOpen:d[3]||=e=>u.tooltipVisible=!0,onClose:x.onTooltipClose},{activator:r(({on:t})=>[o(w,e(n(t),{lg:``}),{default:r(()=>[...d[103]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[104]||=s(`Star`,-1)]),_:1},8,[`model-value`,`onClose`]),o(T,{"model-value":u.showTooltip,"show-on-click":``,persistent:``,onOpen:d[4]||=e=>u.tooltipVisible=!0,onClose:x.onTooltipClose},{activator:r(({on:t})=>[o(w,e(n(t),{lg:``}),{default:r(()=>[...d[105]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[106]||=s(`Star`,-1)]),_:1},8,[`model-value`,`onClose`]),o(T,{"model-value":u.showTooltip,"show-on-click":``,persistent:``,right:``,onOpen:d[5]||=e=>u.tooltipVisible=!0,onClose:x.onTooltipClose},{activator:r(({on:t})=>[o(w,e(n(t),{lg:``}),{default:r(()=>[...d[107]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[108]||=s(`Star`,-1)]),_:1},8,[`model-value`,`onClose`])])]),_:1}),o(C,{h3:``},{default:r(()=>[...d[112]||=[s(`Using v-model to update a variable`,-1)]]),_:1}),d[195]||=i(`p`,null,`Click the star to toggle the tooltip.`,-1),o(E,{"content-class":`text-center my4`},{pug:r(()=>[...d[115]||=[s(`w-tooltip(v-model="showTooltip" show-on-click right)
  template(#activator="{ on }")
    w-icon(v-on="on" lg) wi-star
  | Star
div.mt4 The tooltip is `+l(`{{ showTooltip ? 'visible' : 'hidden' }}`)+`.
`,-1)]]),html:r(()=>[...d[116]||=[s(`<w-tooltip
  v-model="showTooltip"
  show-on-click
  right>
  <template #activator="{ on }">
    <w-icon v-on="on" lg>wi-star</w-icon>
  </template>
  Star
</w-tooltip>

<div class="mt4">
  The tooltip is `+l(`{{ showTooltip ? 'visible' : 'hidden' }}`)+`.
</div>`,-1)]]),js:r(()=>[...d[117]||=[s(`data: () => ({
  showTooltip: false
})
`,-1)]]),default:r(()=>[o(T,{modelValue:u.showTooltip2,"onUpdate:modelValue":d[6]||=e=>u.showTooltip2=e,"show-on-click":``,right:``},{activator:r(({on:t})=>[o(w,e(n(t),{lg:``}),{default:r(()=>[...d[113]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[114]||=s(`Star`,-1)]),_:1},8,[`modelValue`]),i(`div`,m,`The tooltip is `+l(u.showTooltip2?`visible`:`hidden`)+`.`,1)]),_:1}),o(C,{h2:``},{default:r(()=>[...d[118]||=[s(`Background color & text color`,-1)]]),_:1}),d[196]||=i(`p`,null,[s(`Like in most components, you can set a `),i(`code`,null,`color`),s(` for the text and a `),i(`code`,null,`bg-color`),s(` for the
background.`)],-1),o(E,{"content-class":`text-center pb8`},{pug:r(()=>[...d[127]||=[s(`.text-center
  w-tooltip(color="white" bg-color="blue")
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="blue") wi-star
    | Star

  w-tooltip(color="white" bg-color="purple")
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="purple") wi-star
    | Star

  w-tooltip(color="orange-dark1" bg-color="yellow-light3")
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="amber") wi-star
    | Star

  w-tooltip(color="orange")
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl) wi-star
    | Star`,-1)]]),html:r(()=>[...d[128]||=[s(`<div class="text-center">
  <w-tooltip color="white" bg-color="blue">
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="blue">
        wi-star
      </w-icon>
    </template>
    Star
  </w-tooltip>

  <w-tooltip color="white" bg-color="purple">
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="purple">
        wi-star
      </w-icon>
    </template>
    Star
  </w-tooltip>

  <w-tooltip
    color="orange-dark1"
    bg-color="yellow-light3">
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="amber">
        wi-star
      </w-icon>
    </template>
    Star
  </w-tooltip>

  <w-tooltip color="orange">
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl>
        wi-star
      </w-icon>
    </template>
    Star
  </w-tooltip>
</div>
`,-1)]]),default:r(()=>[o(T,{color:`white`,"bg-color":`blue`},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`blue`}),{default:r(()=>[...d[119]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[120]||=s(`Star`,-1)]),_:1}),o(T,{color:`white`,"bg-color":`purple`},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`purple`}),{default:r(()=>[...d[121]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[122]||=s(`Star`,-1)]),_:1}),o(T,{color:`orange-dark1`,"bg-color":`yellow-light3`},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`amber`}),{default:r(()=>[...d[123]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[124]||=s(`Star`,-1)]),_:1}),o(T,{color:`orange`},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``}),{default:r(()=>[...d[125]||=[s(`wi-star`,-1)]]),_:1},16)]),default:r(()=>[d[126]||=s(`Star`,-1)]),_:1})]),_:1}),o(C,{h2:``},{default:r(()=>[...d[129]||=[s(`Tile, round and shadow`,-1)]]),_:1}),o(E,{"content-class":`text-center pb8`},{pug:r(()=>[...d[136]||=[s(`.text-center.pb8
  w-tooltip(color="red-light2" tile)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="red-light2") mdi mdi-square
    | Tile
  w-tooltip(color="amber-dark1" round)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="amber") mdi mdi-circle
    | Round
  w-tooltip(color="pink-light1" shadow)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="pink-light1") mdi mdi-heart
    | Shadow`,-1)]]),html:r(()=>[...d[137]||=[s(`<div class="text-center pb8">
  <w-tooltip color="red-light2" tile>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="red-light2">
        mdi mdi-square
      </w-icon>
    </template>
    Tile
  </w-tooltip>

  <w-tooltip color="amber-dark1" round>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="amber">
        mdi mdi-circle
      </w-icon>
    </template>
    Round
  </w-tooltip>

  <w-tooltip color="pink-light1" shadow>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="pink-light1">
        mdi mdi-heart
      </w-icon>
    </template>
    Shadow
  </w-tooltip>
</div>
`,-1)]]),default:r(()=>[o(T,{color:`red-light2`,tile:``},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`red-light2`}),{default:r(()=>[...d[130]||=[s(`mdi mdi-square`,-1)]]),_:1},16)]),default:r(()=>[d[131]||=s(`Tile`,-1)]),_:1}),o(T,{color:`amber-dark1`,round:``},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`amber`}),{default:r(()=>[...d[132]||=[s(`mdi mdi-circle`,-1)]]),_:1},16)]),default:r(()=>[d[133]||=s(`Round`,-1)]),_:1}),o(T,{color:`pink-light1`,shadow:``},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{xl:``,color:`pink-light1`}),{default:r(()=>[...d[134]||=[s(`mdi mdi-heart`,-1)]]),_:1},16)]),default:r(()=>[d[135]||=s(`Shadow`,-1)]),_:1})]),_:1}),o(C,{h2:``},{default:r(()=>[...d[138]||=[s(`Different contents`,-1)]]),_:1}),o(E,{"content-class":`text-center`},{pug:r(()=>[...d[147]||=[s(`.text-center
  w-tooltip(color="primary")
    template(#activator="{ on }")
      span.ma3(v-on="on") Content with icon
    w-icon.mr1 wi-star
    | Star

  w-tooltip(color="primary")
    template(#activator="{ on }")
      span.ma3(v-on="on") Very long content
    | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    br
    | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
    br
    br
    | Recusandae distinctio perferendis expedita pariatur fuga.`,-1)]]),html:r(()=>[...d[148]||=[s(`<div class="text-center">
  <w-tooltip color="primary">
    <template #activator="{ on }">
      <span v-on="on" class="ma3">
        Content with icon
      </span>
    </template>
    <w-icon class="mr1">wi-star</w-icon>
    Star
  </w-tooltip>

  <w-tooltip color="primary">
    <template #activator="{ on }">
      <span v-on="on" class="ma3">
        Very long content
      </span>
    </template>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    <br />
    Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
    <br />
    <br />
    Recusandae distinctio perferendis expedita pariatur fuga.
  </w-tooltip>
</div>
`,-1)]]),default:r(()=>[o(T,{color:`primary`},{activator:r(({on:t})=>[i(`span`,e({class:`ma3`},n(t,!0)),`Content with icon`,16)]),default:r(()=>[o(w,{class:`mr1`},{default:r(()=>[...d[139]||=[s(`wi-star`,-1)]]),_:1}),d[140]||=s(`Star`,-1)]),_:1}),o(T,{color:`primary`},{activator:r(({on:t})=>[i(`span`,e({class:`ma3`},n(t,!0)),`Very long content`,16)]),default:r(()=>[d[141]||=s(`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,-1),d[142]||=i(`br`,null,null,-1),d[143]||=s(`Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!`,-1),d[144]||=i(`br`,null,null,-1),d[145]||=i(`br`,null,null,-1),d[146]||=s(`Recusandae distinctio perferendis expedita pariatur fuga.`,-1)]),_:1})]),_:1}),o(C,{h2:``},{default:r(()=>[...d[149]||=[s(`Different sizes and caption style`,-1)]]),_:1}),o(E,{"content-class":`text-center example-sizes wrap w-flex align-center justify-center`},{pug:r(()=>[...d[156]||=[s(`w-tooltip(xs show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma6(v-on="on") xs
  | Extra small

w-tooltip(sm show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma6(v-on="on") sm
  | Small

w-tooltip(md show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma6(v-on="on") md
  | Medium

w-tooltip(lg show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma7(v-on="on") lg
  | Large

w-tooltip(xl show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma10(v-on="on") xl
  | Extra large

w-tooltip(caption show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma10(v-on="on") Caption
  | Caption style.`,-1)]]),html:r(()=>[...d[157]||=[s(`<w-tooltip xs show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">xs</span>
  </template>
  Extra small
</w-tooltip>

<w-tooltip sm show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">sm</span>
  </template>
  Small
</w-tooltip>

<w-tooltip md show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">md</span>
  </template>
  Medium
</w-tooltip>

<w-tooltip lg show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">lg</span>
  </template>
  Large
</w-tooltip>

<w-tooltip xl show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">xl</span>
  </template>
  Extra large
</w-tooltip>

<w-tooltip caption show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">Caption</span>
  </template>
  Caption style.
</w-tooltip>
`,-1)]]),default:r(()=>[o(T,{xs:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`},{activator:r(({on:t})=>[i(`span`,e({class:`ma6`},n(t,!0)),`xs`,16)]),default:r(()=>[d[150]||=s(`Extra small`,-1)]),_:1}),o(T,{sm:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`},{activator:r(({on:t})=>[i(`span`,e({class:`ma6`},n(t,!0)),`sm`,16)]),default:r(()=>[d[151]||=s(`Small`,-1)]),_:1}),o(T,{md:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`},{activator:r(({on:t})=>[i(`span`,e({class:`ma6`},n(t,!0)),`md`,16)]),default:r(()=>[d[152]||=s(`Medium`,-1)]),_:1}),o(T,{lg:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`},{activator:r(({on:t})=>[i(`span`,e({class:`ma7`},n(t,!0)),`lg`,16)]),default:r(()=>[d[153]||=s(`Large`,-1)]),_:1}),o(T,{xl:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`},{activator:r(({on:t})=>[i(`span`,e({class:`ma10`},n(t,!0)),`xl`,16)]),default:r(()=>[d[154]||=s(`Extra large`,-1)]),_:1}),o(T,{caption:``,"show-on-click":``,persistent:``,"model-value":!0,"append-to":`.example-sizes`},{activator:r(({on:t})=>[i(`span`,e({class:`ma10`},n(t,!0)),`Caption`,16)]),default:r(()=>[d[155]||=s(`Caption style.`,-1)]),_:1})]),_:1}),o(C,{h2:``},{default:r(()=>[...d[158]||=[s(`Transitions`,-1)]]),_:1}),o(E,{"content-class":`text-center`},{pug:r(()=>[...d[167]||=[s(`.text-center
  w-radios.my4(inline v-model="transition" :items="transitions")
  .text-center.py6
    w-tooltip(:transition="transition" left)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
    w-tooltip(:transition="transition")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
    w-tooltip(:transition="transition" top)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
    w-tooltip(:transition="transition" right)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
      | Home`,-1)]]),html:r(()=>[...d[168]||=[s(`<div class="text-center">
  <w-radios
    class="my4"
    inline
    v-model="transition"
    :items="transitions">
  </w-radios>

  <div class="text-center py6">
    <w-tooltip :transition="transition" left>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          color="primary"
          xl>
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </w-tooltip>

    <w-tooltip :transition="transition">
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          color="primary"
          xl>
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </w-tooltip>

    <w-tooltip :transition="transition" top>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          color="primary"
          xl>
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </w-tooltip>

    <w-tooltip :transition="transition" right>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          color="primary"
          xl>
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </w-tooltip>
  </div>
</div>
`,-1)]]),js:r(()=>[...d[169]||=[s(`data: () => ({
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
`,-1)]]),default:r(()=>[o(A,{class:`my4`,inline:``,modelValue:u.transition,"onUpdate:modelValue":d[7]||=e=>u.transition=e,items:u.transitions},null,8,[`modelValue`,`items`]),i(`div`,h,[o(T,{transition:u.transition,left:``},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{color:`primary`,xl:``}),{default:r(()=>[...d[159]||=[s(`mdi mdi-home`,-1)]]),_:1},16)]),default:r(()=>[d[160]||=s(`Home`,-1)]),_:1},8,[`transition`]),o(T,{transition:u.transition},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{color:`primary`,xl:``}),{default:r(()=>[...d[161]||=[s(`mdi mdi-home`,-1)]]),_:1},16)]),default:r(()=>[d[162]||=s(`Home`,-1)]),_:1},8,[`transition`]),o(T,{transition:u.transition,top:``},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{color:`primary`,xl:``}),{default:r(()=>[...d[163]||=[s(`mdi mdi-home`,-1)]]),_:1},16)]),default:r(()=>[d[164]||=s(`Home`,-1)]),_:1},8,[`transition`]),o(T,{transition:u.transition,right:``},{activator:r(({on:t})=>[o(w,e({class:`ma2`},n(t),{color:`primary`,xl:``}),{default:r(()=>[...d[165]||=[s(`mdi mdi-home`,-1)]]),_:1},16)]),default:r(()=>[d[166]||=s(`Home`,-1)]),_:1},8,[`transition`])])]),_:1}),o(C,{h2:``,slug:`appending-to-a-dom-node`},{default:r(()=>[...d[170]||=[s(`Appending to a particular DOM node`,-1)]]),_:1}),d[197]||=i(`p`,null,`In this example, the yellow container of the pink activator has an overflow hidden, but we want the
tooltip to be fully visible. So we detach it to the green container.`,-1),o(E,{class:`mb12`,"content-class":`pa0`},{pug:r(()=>[...d[174]||=[s(`.wrapper.text-center.green-light5--bg.pa6
  w-card(bg-color="yellow-light5")
    w-tooltip(append-to=".wrapper")
      template(#activator="{ on }")
        w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5")
          w-icon.mr1 mdi mdi-bomb
          | Hover me
      span This tooltip is appended to the green container!`,-1)]]),html:r(()=>[...d[175]||=[s(`<div class="wrapper text-center green-light5--bg pa6">
  <w-card bg-color="yellow-light5">
    <w-tooltip append-to=".wrapper">
      <template #activator="{ on }">
        <w-tag
          v-on="on"
          lg
          color="pink-light1"
          bg-color="pink-light5">
          <w-icon class="mr1">mdi mdi-bomb</w-icon>
          Hover me
      </template>

      <span>
        This tooltip is appended to the green container!
      </span>
    </w-tooltip>
  </w-card>
</div>`,-1)]]),css:r(()=>[...d[176]||=[s(`.wrapper {position: relative;}

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
`,-1)]]),default:r(()=>[i(`div`,g,[o(M,{"bg-color":`yellow-light5`},{default:r(()=>[o(T,{"append-to":`.another-container`},{activator:r(({on:t})=>[o(j,e(n(t),{lg:``,color:`pink-light1`,"bg-color":`pink-light5`}),{default:r(()=>[o(w,{class:`mr1`},{default:r(()=>[...d[171]||=[s(`mdi mdi-bomb`,-1)]]),_:1}),d[172]||=s(`Hover me`,-1)]),_:1},16)]),default:r(()=>[d[173]||=i(`span`,null,[s(`This tooltip is appended to the `),i(`span`,{class:`green`},`green`),s(` container!`)],-1)]),_:1})]),_:1})])]),_:1}),o(S,{warning:``},{default:r(()=>[...d[177]||=[s(`The DOM element that the tooltip is detached to must have a position (fixed, absolute or
relative).
`,-1)]]),_:1}),o(C,{h2:``},{default:r(()=>[...d[178]||=[s(`External activator`,-1)]]),_:1}),d[198]||=i(`p`,null,[s(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),i(`br`),s(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),o(C,{h3:``,slug:`external-activator--basic`},{default:r(()=>[...d[179]||=[s(`Trigger a menu on hover (left-side) or on click (right-side) of an external activator`,-1)]]),_:1}),i(`div`,_,[o(E,{class:`example14a grow`,"content-class":`text-center my4`,"app-classes-string":`text-center`},{pug:r(()=>[...d[181]||=[s(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button") Meow!`,-1)]]),html:r(()=>[...d[182]||=[s(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button">
  Meow!
</w-tooltip>
`,-1)]]),default:r(()=>[o(D,{class:`cat-button-1`,icon:`mdi mdi-cat`,xl:``}),o(T,{"append-to":`.example14a`,activator:`.cat-button-1`},{default:r(()=>[...d[180]||=[s(`Meow!`,-1)]]),_:1})]),_:1}),o(E,{class:`example14b grow`,"content-class":`text-center my4`,"app-classes-string":`text-center`},{pug:r(()=>[...d[184]||=[s(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button" show-on-click) Meow!`,-1)]]),html:r(()=>[...d[185]||=[s(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button" show-on-click>
  Meow!
</w-tooltip>
`,-1)]]),default:r(()=>[o(D,{class:`cat-button-2`,icon:`mdi mdi-cat`,xl:``}),o(T,{"append-to":`.example14b`,activator:`.cat-button-2`,"show-on-click":``},{default:r(()=>[...d[183]||=[s(`Meow!`,-1)]]),_:1})]),_:1})]),o(C,{h3:``,slug:`external-activator--2-activators`},{default:r(()=>[...d[186]||=[s(`Trigger the same menu on hover of 2 different external activators`,-1)]]),_:1}),d[199]||=i(`p`,{class:`text-italic`},`But do you really need that? ;)`,-1),o(S,{tip:``},{default:r(()=>[...d[187]||=[s(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`,-1)]]),_:1}),o(E,{class:`example16`,"content-class":`text-center my4`,"app-classes-string":`d-block text-center`},{pug:r(()=>[...d[188]||=[s(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @mouseenter="activator = '.cat-button';tooltipContent = 'Meow!'"
  @mouseleave="activator = '.pet-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @mouseenter="activator = '.dog-button';tooltipContent = 'Woof!'"
  @mouseleave="activator = '.pet-button'")

w-tooltip(:activator="activator" :delay="100")
  | `+l(`{{ tooltipContent }}`),-1)]]),html:r(()=>[...d[189]||=[s(`<w-button
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

<w-tooltip :activator="activator" :delay="100">
  `+l(`{{ tooltipContent }}`)+`
</w-tooltip>`,-1)]]),js:r(()=>[...d[190]||=[s(`data: () => ({
  activator: '.pet-button',
  tooltipContent: ''
})`,-1)]]),default:r(()=>[o(D,{class:`pet-button2 cat-button3 ma4`,icon:`mdi mdi-cat`,xl:``,onMouseenter:d[8]||=e=>{u.activator2=`.cat-button3`,u.tooltipContent=`Meow!`},onMouseleave:d[9]||=e=>u.activator2=`.pet-button2`}),o(D,{class:`pet-button2 dog-button3 ma4`,icon:`mdi mdi-dog`,xl:``,onMouseenter:d[10]||=e=>{u.activator2=`.dog-button3`,u.tooltipContent=`Woof!`},onMouseleave:d[11]||=e=>u.activator2=`.pet-button2`}),o(T,{"append-to":`.example16`,activator:u.activator2,delay:100},{default:r(()=>[s(l(u.tooltipContent),1)]),_:1},8,[`activator`])]),_:1})])}var y=u({data:()=>({tooltipDisabled:!1,showTooltip:!1,showTooltip2:!1,transition:`bounce`,transitions:[{label:`Default`,value:``},{label:`Bounce`,value:`bounce`},{label:`Scale`,value:`scale`},{label:`Twist`,value:`twist`},{label:`Fade`,value:`fade`},{label:`Scale-fade`,value:`scale-fade`}],activator1:`.pet-button`,activator2:`.pet-button2`,tooltipContent:``}),methods:{onTooltipClose(){setTimeout(()=>this.showTooltip=!1,100)}}},[[`render`,v]]);function b(e,n,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return c(),a(`div`,null,[n[1]||=i(`div`,{class:`w-divider my12`},null,-1),o(p,{class:`title1`,h2:``},{default:r(()=>[...n[0]||=[s(`API`,-1)]]),_:1}),o(m,{class:`mt0`,items:f.props,descriptions:e.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),o(m,{items:e.slots,title:`Slots`},null,8,[`items`]),o(m,{items:f.events,title:`Events`},null,8,[`items`])])}var x={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.`,showOnClick:`Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.`,enableTouch:`Enables the hover-activating tooltips on touch devices:<br>Since you can't hover on touch device (you can only tap which is counted as a click), the hover-activating tooltips are not behaving similar on mobile as they need a tap to be closed. That's why this option is disabled by default.`,color:`Applies a color to the tooltip's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tooltip's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:`Applies a drop shadow to the tooltip.`,noBorder:`Removes the default border from the tooltip element.`,transition:`Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.`,tile:`Removes the default border-radius and sets sharp edges on the tooltip.`,round:`Sets a maximum border-radius on the corners of the tooltip, giving it a round look.`,tooltipClass:`Provide custom CSS classes for the tooltip element.`,appendTo:'Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>The default root is <span class="code">.w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',fixed:`Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).`,top:`Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.`,bottom:`Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.`,left:`Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.`,right:`Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.`,zIndex:`Applies a z-index (positive or negative integer) to the tooltip.`,persistent:`When set to <code>true</code>, clicking outside of the tooltip will not close the tooltip.`,activator:`Allows you to define one or multiple external activators for the tooltip through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the tooltip from different activators.`,delay:`A delay - in milliseconds - before opening the tooltip.<br>A small delay may help the tooltip position computing if the tooltip content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same tooltip with different content.`,disable:`When set to <code>true</code>, the tooltip never opens on interaction or via <code>v-model</code>; the activator remains rendered.`,caption:`Apply the <code>.caption</code> style on the tooltip content (small, grey, italic).`,xs:`Sets the size of the tooltip to extra small.`,sm:`Sets the size of the tooltip to small.`,md:`Sets the size of the tooltip to medium.`,lg:`Sets the size of the tooltip to large.`,xl:`Sets the size of the tooltip to extra large.`},S={activator:{description:`<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.`},default:{description:`The tooltip content.`}},C={input:`Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 2.x only.`,"update:modelValue":`Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 3 only.`,close:`Emitted on tooltip close.`,open:`Emitted on tooltip open.`},w=u({data:()=>({propsDescs:x,slots:S}),computed:{props(){return d.props},events(){return d.emits.reduce((e,t)=>(e[t]={description:C[t]||``})&&e,{})}}},[[`render`,b]]);function T(e,n,i,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return c(),a(`main`,null,[o(f,null,{default:r(()=>[...n[0]||=[s(`w-tooltip`,-1)]]),_:1}),o(p),o(m)])}var E=u({components:{Examples:y,Api:w}},[[`render`,T]]);export{E as default};