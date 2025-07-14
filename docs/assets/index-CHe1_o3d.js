import{r as v,g as c,o as x,a as l,b as i,w as o,e as n,m as s,f as r,t as g,_ as y,ae as S}from"./index-C780IYji.js";const M={class:"tooltips-demo"},V={class:"d-iblock my2 mx6"},E={class:"mt4"},$={class:"text-center py6"},D={class:"another-container text-center green-light5--bg pa6"},z={class:"w-flex wrap align-start gap6"};function q(p,t,h,k,T,b){const f=v("alert"),d=v("title-link"),m=v("w-icon"),a=v("w-tooltip"),w=v("example"),u=v("w-button"),C=v("w-radios"),A=v("w-tag"),H=v("w-card");return x(),c("div",M,[l(f,{tip:""},{default:o(()=>t[11]||(t[11]=[i("strong",null,"Important notes",-1),i("br",null,null,-1),n(`
By default the tooltip is moved into the w-app in the DOM, so it is not constrained by a hidden
overflow on a parent.`),i("br",null,null,-1),n(`
When used inside a dialog, menu or drawer, it will be by default appended to that element.`),i("br",null,null,-1),n(`
You can use the `),i("code",null,"appendTo",-1),n(` prop to place it elsewhere in the DOM, like in the
`),i("a",{href:"#appending-to-a-dom-node"},"Appending to a particular DOM node",-1),n(` example.
`)])),_:1,__:[11]}),l(d,{h2:""},{default:o(()=>t[12]||(t[12]=[n("Tooltip position")])),_:1,__:[12]}),l(w,{"content-class":"text-center"},{pug:o(()=>t[21]||(t[21]=[n(`.text-center
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
    | Home`)])),html:o(()=>t[22]||(t[22]=[n(`<div class="text-center">
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
`)])),default:o(()=>[l(a,{left:""},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"primary-light2"}),{default:o(()=>t[13]||(t[13]=[n("mdi mdi-home")])),_:2,__:[13]},1040)]),default:o(()=>[t[14]||(t[14]=n("Home"))]),_:1,__:[14]}),l(a,{top:""},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"primary-light2"}),{default:o(()=>t[15]||(t[15]=[n("mdi mdi-home")])),_:2,__:[15]},1040)]),default:o(()=>[t[16]||(t[16]=n("Home"))]),_:1,__:[16]}),l(a,null,{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"primary-light2"}),{default:o(()=>t[17]||(t[17]=[n("mdi mdi-home")])),_:2,__:[17]},1040)]),default:o(()=>[t[18]||(t[18]=n("Home"))]),_:1,__:[18]}),l(a,{right:""},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"primary-light2"}),{default:o(()=>t[19]||(t[19]=[n("mdi mdi-home")])),_:2,__:[19]},1040)]),default:o(()=>[t[20]||(t[20]=n("Home"))]),_:1,__:[20]})]),_:1}),l(d,{h2:""},{default:o(()=>t[23]||(t[23]=[n("Alignments")])),_:1,__:[23]}),t[184]||(t[184]=i("p",null,"In addition to positions, you can align the tooltip with its activator.",-1)),l(w,{class:"example6"},{pug:o(()=>t[72]||(t[72]=[n(`.title4.mb2 top position
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
  | Tooltip content,#[br]on multiple lines.`)])),html:o(()=>t[73]||(t[73]=[n(`<div class="title4 mb2">Top position</div>
<w-tooltip top align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<w-tooltip top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<w-tooltip top align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Bottom position</div>
<w-tooltip align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<w-tooltip>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<w-tooltip align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Right position</div>
<w-tooltip right align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align top
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<w-tooltip right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<w-tooltip right align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">Alig
      n bottom
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Left position</div>
<w-tooltip left align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">A
      lign top
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<w-tooltip left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>

<w-tooltip left align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align bottom
    </w-button>
  </template>
  Tooltip content,`),i("br",null,null,-1),n(`on multiple lines.
</w-tooltip>
`)])),default:o(()=>[t[74]||(t[74]=i("div",{class:"title4 mb2"},"Top position",-1)),l(a,{"append-to":".example6",top:"","align-left":""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[24]||(t[24]=[n("Align left")])),_:2,__:[24]},1040)]),default:o(()=>[t[25]||(t[25]=n("Tooltip content,")),t[26]||(t[26]=i("br",null,null,-1)),t[27]||(t[27]=n("on multiple lines."))]),_:1,__:[25,26,27]}),l(a,{"append-to":".example6",top:""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[28]||(t[28]=[n("Centered")])),_:2,__:[28]},1040)]),default:o(()=>[t[29]||(t[29]=n("Tooltip content,")),t[30]||(t[30]=i("br",null,null,-1)),t[31]||(t[31]=n("on multiple lines."))]),_:1,__:[29,30,31]}),l(a,{"append-to":".example6",top:"","align-right":""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[32]||(t[32]=[n("Align right")])),_:2,__:[32]},1040)]),default:o(()=>[t[33]||(t[33]=n("Tooltip content,")),t[34]||(t[34]=i("br",null,null,-1)),t[35]||(t[35]=n("on multiple lines."))]),_:1,__:[33,34,35]}),t[75]||(t[75]=i("div",{class:"title4 mt6 mb2"},"Bottom position",-1)),l(a,{"append-to":".example6","align-left":""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[36]||(t[36]=[n("Align left")])),_:2,__:[36]},1040)]),default:o(()=>[t[37]||(t[37]=n("Tooltip content,")),t[38]||(t[38]=i("br",null,null,-1)),t[39]||(t[39]=n("on multiple lines."))]),_:1,__:[37,38,39]}),l(a,{"append-to":".example6"},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[40]||(t[40]=[n("Centered")])),_:2,__:[40]},1040)]),default:o(()=>[t[41]||(t[41]=n("Tooltip content,")),t[42]||(t[42]=i("br",null,null,-1)),t[43]||(t[43]=n("on multiple lines."))]),_:1,__:[41,42,43]}),l(a,{"append-to":".example6","align-right":""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[44]||(t[44]=[n("Align right")])),_:2,__:[44]},1040)]),default:o(()=>[t[45]||(t[45]=n("Tooltip content,")),t[46]||(t[46]=i("br",null,null,-1)),t[47]||(t[47]=n("on multiple lines."))]),_:1,__:[45,46,47]}),t[76]||(t[76]=i("div",{class:"title4 mt6 mb2"},"Right position",-1)),l(a,{"append-to":".example6",right:"","align-top":""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[48]||(t[48]=[n("Align top")])),_:2,__:[48]},1040)]),default:o(()=>[t[49]||(t[49]=n("Tooltip content,")),t[50]||(t[50]=i("br",null,null,-1)),t[51]||(t[51]=n("on multiple lines."))]),_:1,__:[49,50,51]}),l(a,{"append-to":".example6",right:""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[52]||(t[52]=[n("Centered")])),_:2,__:[52]},1040)]),default:o(()=>[t[53]||(t[53]=n("Tooltip content,")),t[54]||(t[54]=i("br",null,null,-1)),t[55]||(t[55]=n("on multiple lines."))]),_:1,__:[53,54,55]}),l(a,{"append-to":".example6",right:"","align-bottom":""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[56]||(t[56]=[n("Align bottom")])),_:2,__:[56]},1040)]),default:o(()=>[t[57]||(t[57]=n("Tooltip content,")),t[58]||(t[58]=i("br",null,null,-1)),t[59]||(t[59]=n("on multiple lines."))]),_:1,__:[57,58,59]}),t[77]||(t[77]=i("div",{class:"title4 mt6 mb2"},"Left position",-1)),l(a,{"append-to":".example6",left:"","align-top":""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[60]||(t[60]=[n("Align top")])),_:2,__:[60]},1040)]),default:o(()=>[t[61]||(t[61]=n("Tooltip content,")),t[62]||(t[62]=i("br",null,null,-1)),t[63]||(t[63]=n("on multiple lines."))]),_:1,__:[61,62,63]}),l(a,{"append-to":".example6",left:""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[64]||(t[64]=[n("Centered")])),_:2,__:[64]},1040)]),default:o(()=>[t[65]||(t[65]=n("Tooltip content,")),t[66]||(t[66]=i("br",null,null,-1)),t[67]||(t[67]=n("on multiple lines."))]),_:1,__:[65,66,67]}),l(a,{"append-to":".example6",left:"","align-bottom":""},{activator:o(({on:e})=>[l(u,s({class:"ma1"},r(e)),{default:o(()=>t[68]||(t[68]=[n("Align bottom")])),_:2,__:[68]},1040)]),default:o(()=>[t[69]||(t[69]=n("Tooltip content,")),t[70]||(t[70]=i("br",null,null,-1)),t[71]||(t[71]=n("on multiple lines."))]),_:1,__:[69,70,71]})]),_:1,__:[74,75,76,77]}),l(d,{h2:""},{default:o(()=>t[78]||(t[78]=[n("Toggle on click")])),_:1,__:[78]}),l(w,{"content-class":"text-center"},{pug:o(()=>t[85]||(t[85]=[n(`.text-center
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
    | Star`)])),html:o(()=>t[86]||(t[86]=[n(`<div class="text-center">
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
`)])),default:o(()=>[l(a,{"show-on-click":"",left:""},{activator:o(({on:e})=>[l(u,s({class:"ma2"},r(e),{"bg-color":"info"}),{default:o(()=>[l(m,{class:"mr1"},{default:o(()=>t[79]||(t[79]=[n("wi-star")])),_:1,__:[79]}),t[80]||(t[80]=n("Star"))]),_:2,__:[80]},1040)]),default:o(()=>[t[81]||(t[81]=n("Star"))]),_:1,__:[81]}),l(a,{"show-on-click":"",right:""},{activator:o(({on:e})=>[l(u,s({class:"ma2"},r(e),{"bg-color":"info-dark2",dark:""}),{default:o(()=>[l(m,{class:"mr1"},{default:o(()=>t[82]||(t[82]=[n("wi-star")])),_:1,__:[82]}),t[83]||(t[83]=n("Star"))]),_:2,__:[83]},1040)]),default:o(()=>[t[84]||(t[84]=n("Star"))]),_:1,__:[84]})]),_:1}),l(d,{h2:""},{default:o(()=>t[87]||(t[87]=[n("Persistent")])),_:1,__:[87]}),t[185]||(t[185]=i("p",null,[n("By default with the "),i("code",null,"show-on-click"),n(` option, the tooltip will hide when you click
anywhere once open.`),i("br"),n(`
To make it persistent, use the `),i("code",null,"persistent"),n(` prop, so a click will not close the open
tooltip.`),i("br"),n(`
Clicking on the activator can always toggle the tooltip regardless of the `),i("code",null,"persistent"),n(`
prop.`)],-1)),l(w,{"content-class":"text-center my4 example-persistent"},{pug:o(()=>t[90]||(t[90]=[n(`w-tooltip(show-on-click persistent)
  template(#activator="{ on }")
    w-icon(v-on="on" xl) wi-star
  | Star
`)])),html:o(()=>t[91]||(t[91]=[n(`<w-tooltip
  show-on-click
  persistent>
  <template #activator="{ on }">
    <w-icon v-on="on" xl>wi-star</w-icon>
  </template>
  Star
</w-tooltip>
`)])),default:o(()=>[l(a,{"show-on-click":"",persistent:"","append-to":".example-persistent"},{activator:o(({on:e})=>[l(m,s(r(e),{xl:""}),{default:o(()=>t[88]||(t[88]=[n("wi-star")])),_:2,__:[88]},1040)]),default:o(()=>[t[89]||(t[89]=n("Star"))]),_:1,__:[89]})]),_:1}),l(d,{h2:""},{default:o(()=>t[92]||(t[92]=[n("Using a v-model")])),_:1,__:[92]}),l(d,{h3:""},{default:o(()=>t[93]||(t[93]=[n("Toggle with v-model")])),_:1,__:[93]}),t[186]||(t[186]=i("p",null,"Click the button to toggle the tooltips.",-1)),l(w,{"content-class":"text-center my4"},{pug:o(()=>t[102]||(t[102]=[n(`.text-center
  w-button.my2.mx6(
    @click="showTooltip = !showTooltip"
    dark
    width="6em")
    | `+g("{{ showTooltip ? 'Hide' : 'Show' }}")+` tooltip

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
      | Star`)])),html:o(()=>t[103]||(t[103]=[n(`<div class="text-center">
  <w-button
    @click="showTooltip = !showTooltip"
    class="my2 mx6"
    dark
    width="6em">
    `+g("{{ showTooltip ? 'Hide' : 'Show' }}")+` tooltip
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
</div>`)])),js:o(()=>t[104]||(t[104]=[n(`data: () => ({
  showTooltip: false
})
`)])),default:o(()=>[l(u,{class:"my2 mx6",onClick:t[0]||(t[0]=e=>p.showTooltip=!p.showTooltip),width:"6em"},{default:o(()=>[n(g(p.showTooltip?"Hide":"Show")+" tooltip",1)]),_:1}),i("div",V,[l(a,{"model-value":p.showTooltip,"show-on-click":"",persistent:"",left:"",onOpen:t[1]||(t[1]=e=>p.tooltipVisible=!0),onClose:b.onTooltipClose},{activator:o(({on:e})=>[l(m,s(r(e),{lg:""}),{default:o(()=>t[94]||(t[94]=[n("wi-star")])),_:2,__:[94]},1040)]),default:o(()=>[t[95]||(t[95]=n("Star"))]),_:1,__:[95]},8,["model-value","onClose"]),l(a,{"model-value":p.showTooltip,"show-on-click":"",persistent:"",top:"",onOpen:t[2]||(t[2]=e=>p.tooltipVisible=!0),onClose:b.onTooltipClose},{activator:o(({on:e})=>[l(m,s(r(e),{lg:""}),{default:o(()=>t[96]||(t[96]=[n("wi-star")])),_:2,__:[96]},1040)]),default:o(()=>[t[97]||(t[97]=n("Star"))]),_:1,__:[97]},8,["model-value","onClose"]),l(a,{"model-value":p.showTooltip,"show-on-click":"",persistent:"",onOpen:t[3]||(t[3]=e=>p.tooltipVisible=!0),onClose:b.onTooltipClose},{activator:o(({on:e})=>[l(m,s(r(e),{lg:""}),{default:o(()=>t[98]||(t[98]=[n("wi-star")])),_:2,__:[98]},1040)]),default:o(()=>[t[99]||(t[99]=n("Star"))]),_:1,__:[99]},8,["model-value","onClose"]),l(a,{"model-value":p.showTooltip,"show-on-click":"",persistent:"",right:"",onOpen:t[4]||(t[4]=e=>p.tooltipVisible=!0),onClose:b.onTooltipClose},{activator:o(({on:e})=>[l(m,s(r(e),{lg:""}),{default:o(()=>t[100]||(t[100]=[n("wi-star")])),_:2,__:[100]},1040)]),default:o(()=>[t[101]||(t[101]=n("Star"))]),_:1,__:[101]},8,["model-value","onClose"])])]),_:1}),l(d,{h3:""},{default:o(()=>t[105]||(t[105]=[n("Using v-model to update a variable")])),_:1,__:[105]}),t[187]||(t[187]=i("p",null,"Click the star to toggle the tooltip.",-1)),l(w,{"content-class":"text-center my4"},{pug:o(()=>t[108]||(t[108]=[n(`w-tooltip(v-model="showTooltip" show-on-click right)
  template(#activator="{ on }")
    w-icon(v-on="on" lg) wi-star
  | Star
div.mt4 The tooltip is `+g("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
`)])),html:o(()=>t[109]||(t[109]=[n(`<w-tooltip
  v-model="showTooltip"
  show-on-click
  right>
  <template #activator="{ on }">
    <w-icon v-on="on" lg>wi-star</w-icon>
  </template>
  Star
</w-tooltip>

<div class="mt4">
  The tooltip is `+g("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
</div>`)])),js:o(()=>t[110]||(t[110]=[n(`data: () => ({
  showTooltip: false
})
`)])),default:o(()=>[l(a,{modelValue:p.showTooltip2,"onUpdate:modelValue":t[5]||(t[5]=e=>p.showTooltip2=e),"show-on-click":"",right:""},{activator:o(({on:e})=>[l(m,s(r(e),{lg:""}),{default:o(()=>t[106]||(t[106]=[n("wi-star")])),_:2,__:[106]},1040)]),default:o(()=>[t[107]||(t[107]=n("Star"))]),_:1,__:[107]},8,["modelValue"]),i("div",E,"The tooltip is "+g(p.showTooltip2?"visible":"hidden")+".",1)]),_:1}),l(d,{h2:""},{default:o(()=>t[111]||(t[111]=[n("Background color & text color")])),_:1,__:[111]}),t[188]||(t[188]=i("p",null,[n("Like in most components, you can set a "),i("code",null,"color"),n(" for the text and a "),i("code",null,"bg-color"),n(` for the
background.`)],-1)),l(w,{"content-class":"text-center pb8"},{pug:o(()=>t[120]||(t[120]=[n(`.text-center
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
    | Star`)])),html:o(()=>t[121]||(t[121]=[n(`<div class="text-center">
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
`)])),default:o(()=>[l(a,{color:"white","bg-color":"blue"},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"blue"}),{default:o(()=>t[112]||(t[112]=[n("wi-star")])),_:2,__:[112]},1040)]),default:o(()=>[t[113]||(t[113]=n("Star"))]),_:1,__:[113]}),l(a,{color:"white","bg-color":"purple"},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"purple"}),{default:o(()=>t[114]||(t[114]=[n("wi-star")])),_:2,__:[114]},1040)]),default:o(()=>[t[115]||(t[115]=n("Star"))]),_:1,__:[115]}),l(a,{color:"orange-dark1","bg-color":"yellow-light3"},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"amber"}),{default:o(()=>t[116]||(t[116]=[n("wi-star")])),_:2,__:[116]},1040)]),default:o(()=>[t[117]||(t[117]=n("Star"))]),_:1,__:[117]}),l(a,{color:"orange"},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:""}),{default:o(()=>t[118]||(t[118]=[n("wi-star")])),_:2,__:[118]},1040)]),default:o(()=>[t[119]||(t[119]=n("Star"))]),_:1,__:[119]})]),_:1}),l(d,{h2:""},{default:o(()=>t[122]||(t[122]=[n("Tile, round and shadow")])),_:1,__:[122]}),l(w,{"content-class":"text-center pb8"},{pug:o(()=>t[129]||(t[129]=[n(`.text-center.pb8
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
    | Shadow`)])),html:o(()=>t[130]||(t[130]=[n(`<div class="text-center pb8">
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
`)])),default:o(()=>[l(a,{color:"red-light2",tile:""},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"red-light2"}),{default:o(()=>t[123]||(t[123]=[n("mdi mdi-square")])),_:2,__:[123]},1040)]),default:o(()=>[t[124]||(t[124]=n("Tile"))]),_:1,__:[124]}),l(a,{color:"amber-dark1",round:""},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"amber"}),{default:o(()=>t[125]||(t[125]=[n("mdi mdi-circle")])),_:2,__:[125]},1040)]),default:o(()=>[t[126]||(t[126]=n("Round"))]),_:1,__:[126]}),l(a,{color:"pink-light1",shadow:""},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{xl:"",color:"pink-light1"}),{default:o(()=>t[127]||(t[127]=[n("mdi mdi-heart")])),_:2,__:[127]},1040)]),default:o(()=>[t[128]||(t[128]=n("Shadow"))]),_:1,__:[128]})]),_:1}),l(d,{h2:""},{default:o(()=>t[131]||(t[131]=[n("Different contents")])),_:1,__:[131]}),l(w,{"content-class":"text-center"},{pug:o(()=>t[140]||(t[140]=[n(`.text-center
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
    | Recusandae distinctio perferendis expedita pariatur fuga.`)])),html:o(()=>t[141]||(t[141]=[n(`<div class="text-center">
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
`)])),default:o(()=>[l(a,{color:"primary"},{activator:o(({on:e})=>[i("span",s({class:"ma3"},r(e,!0)),"Content with icon",16)]),default:o(()=>[l(m,{class:"mr1"},{default:o(()=>t[132]||(t[132]=[n("wi-star")])),_:1,__:[132]}),t[133]||(t[133]=n("Star"))]),_:1,__:[133]}),l(a,{color:"primary"},{activator:o(({on:e})=>[i("span",s({class:"ma3"},r(e,!0)),"Very long content",16)]),default:o(()=>[t[134]||(t[134]=n("Lorem ipsum, dolor sit amet consectetur adipisicing elit.")),t[135]||(t[135]=i("br",null,null,-1)),t[136]||(t[136]=n("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!")),t[137]||(t[137]=i("br",null,null,-1)),t[138]||(t[138]=i("br",null,null,-1)),t[139]||(t[139]=n("Recusandae distinctio perferendis expedita pariatur fuga."))]),_:1,__:[134,135,136,137,138,139]})]),_:1}),l(d,{h2:""},{default:o(()=>t[142]||(t[142]=[n("Different sizes and caption style")])),_:1,__:[142]}),l(w,{"content-class":"text-center example-sizes wrap w-flex align-center justify-center"},{pug:o(()=>t[149]||(t[149]=[n(`w-tooltip(xs show-on-click persistent :model-value="true")
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
  | Caption style.`)])),html:o(()=>t[150]||(t[150]=[n(`<w-tooltip xs show-on-click persistent :model-value="true">
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
`)])),default:o(()=>[l(a,{xs:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:o(({on:e})=>[i("span",s({class:"ma6"},r(e,!0)),"xs",16)]),default:o(()=>[t[143]||(t[143]=n("Extra small"))]),_:1,__:[143]}),l(a,{sm:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:o(({on:e})=>[i("span",s({class:"ma6"},r(e,!0)),"sm",16)]),default:o(()=>[t[144]||(t[144]=n("Small"))]),_:1,__:[144]}),l(a,{md:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:o(({on:e})=>[i("span",s({class:"ma6"},r(e,!0)),"md",16)]),default:o(()=>[t[145]||(t[145]=n("Medium"))]),_:1,__:[145]}),l(a,{lg:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:o(({on:e})=>[i("span",s({class:"ma7"},r(e,!0)),"lg",16)]),default:o(()=>[t[146]||(t[146]=n("Large"))]),_:1,__:[146]}),l(a,{xl:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:o(({on:e})=>[i("span",s({class:"ma10"},r(e,!0)),"xl",16)]),default:o(()=>[t[147]||(t[147]=n("Extra large"))]),_:1,__:[147]}),l(a,{caption:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:o(({on:e})=>[i("span",s({class:"ma10"},r(e,!0)),"Caption",16)]),default:o(()=>[t[148]||(t[148]=n("Caption style."))]),_:1,__:[148]})]),_:1}),l(d,{h2:""},{default:o(()=>t[151]||(t[151]=[n("Transitions")])),_:1,__:[151]}),l(w,{"content-class":"text-center"},{pug:o(()=>t[160]||(t[160]=[n(`.text-center
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
      | Home`)])),html:o(()=>t[161]||(t[161]=[n(`<div class="text-center">
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
`)])),js:o(()=>t[162]||(t[162]=[n(`data: () => ({
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
`)])),default:o(()=>[l(C,{class:"my4",inline:"",modelValue:p.transition,"onUpdate:modelValue":t[6]||(t[6]=e=>p.transition=e),items:p.transitions},null,8,["modelValue","items"]),i("div",$,[l(a,{transition:p.transition,left:""},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{color:"primary",xl:""}),{default:o(()=>t[152]||(t[152]=[n("mdi mdi-home")])),_:2,__:[152]},1040)]),default:o(()=>[t[153]||(t[153]=n("Home"))]),_:1,__:[153]},8,["transition"]),l(a,{transition:p.transition},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{color:"primary",xl:""}),{default:o(()=>t[154]||(t[154]=[n("mdi mdi-home")])),_:2,__:[154]},1040)]),default:o(()=>[t[155]||(t[155]=n("Home"))]),_:1,__:[155]},8,["transition"]),l(a,{transition:p.transition,top:""},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{color:"primary",xl:""}),{default:o(()=>t[156]||(t[156]=[n("mdi mdi-home")])),_:2,__:[156]},1040)]),default:o(()=>[t[157]||(t[157]=n("Home"))]),_:1,__:[157]},8,["transition"]),l(a,{transition:p.transition,right:""},{activator:o(({on:e})=>[l(m,s({class:"ma2"},r(e),{color:"primary",xl:""}),{default:o(()=>t[158]||(t[158]=[n("mdi mdi-home")])),_:2,__:[158]},1040)]),default:o(()=>[t[159]||(t[159]=n("Home"))]),_:1,__:[159]},8,["transition"])])]),_:1}),l(d,{h2:"",slug:"appending-to-a-dom-node"},{default:o(()=>t[163]||(t[163]=[n("Appending to a particular DOM node")])),_:1,__:[163]}),t[189]||(t[189]=i("p",null,`In this example, the yellow container of the pink activator has an overflow hidden, but we want the
tooltip to be fully visible. So we detach it to the green container.`,-1)),l(w,{class:"mb12","content-class":"pa0"},{pug:o(()=>t[167]||(t[167]=[n(`.wrapper.text-center.green-light5--bg.pa6
  w-card(bg-color="yellow-light5")
    w-tooltip(append-to=".wrapper")
      template(#activator="{ on }")
        w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5")
          w-icon.mr1 mdi mdi-bomb
          | Hover me
      span This tooltip is appended to the green container!`)])),html:o(()=>t[168]||(t[168]=[n(`<div class="wrapper text-center green-light5--bg pa6">
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
</div>`)])),css:o(()=>t[169]||(t[169]=[n(`.wrapper {position: relative;}

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
`)])),default:o(()=>[i("div",D,[l(H,{"bg-color":"yellow-light5"},{default:o(()=>[l(a,{"append-to":".another-container"},{activator:o(({on:e})=>[l(A,s(r(e),{lg:"",color:"pink-light1","bg-color":"pink-light5"}),{default:o(()=>[l(m,{class:"mr1"},{default:o(()=>t[164]||(t[164]=[n("mdi mdi-bomb")])),_:1,__:[164]}),t[165]||(t[165]=n("Hover me"))]),_:2,__:[165]},1040)]),default:o(()=>[t[166]||(t[166]=i("span",null,[n("This tooltip is appended to the "),i("span",{class:"green"},"green"),n(" container!")],-1))]),_:1,__:[166]})]),_:1})])]),_:1}),l(f,{warning:""},{default:o(()=>t[170]||(t[170]=[n(`The DOM element that the tooltip is detached to must have a position (fixed, absolute or
relative).
`)])),_:1,__:[170]}),l(d,{h2:""},{default:o(()=>t[171]||(t[171]=[n("External activator")])),_:1,__:[171]}),t[190]||(t[190]=i("p",null,[n(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),i("br"),n(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1)),l(d,{h3:"",slug:"external-activator--basic"},{default:o(()=>t[172]||(t[172]=[n("Trigger a menu on hover (left-side) or on click (right-side) of an external activator")])),_:1,__:[172]}),i("div",z,[l(w,{class:"example14a grow","content-class":"text-center my4","app-classes-string":"text-center"},{pug:o(()=>t[174]||(t[174]=[n(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button") Meow!`)])),html:o(()=>t[175]||(t[175]=[n(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button">
  Meow!
</w-tooltip>
`)])),default:o(()=>[l(u,{class:"cat-button-1",icon:"mdi mdi-cat",xl:""}),l(a,{"append-to":".example14a",activator:".cat-button-1"},{default:o(()=>t[173]||(t[173]=[n("Meow!")])),_:1,__:[173]})]),_:1}),l(w,{class:"example14b grow","content-class":"text-center my4","app-classes-string":"text-center"},{pug:o(()=>t[177]||(t[177]=[n(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button" show-on-click) Meow!`)])),html:o(()=>t[178]||(t[178]=[n(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button" show-on-click>
  Meow!
</w-tooltip>
`)])),default:o(()=>[l(u,{class:"cat-button-2",icon:"mdi mdi-cat",xl:""}),l(a,{"append-to":".example14b",activator:".cat-button-2","show-on-click":""},{default:o(()=>t[176]||(t[176]=[n("Meow!")])),_:1,__:[176]})]),_:1})]),l(d,{h3:"",slug:"external-activator--2-activators"},{default:o(()=>t[179]||(t[179]=[n("Trigger the same menu on hover of 2 different external activators")])),_:1,__:[179]}),t[191]||(t[191]=i("p",{class:"text-italic"},"But do you really need that? ;)",-1)),l(f,{tip:""},{default:o(()=>t[180]||(t[180]=[n(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`)])),_:1,__:[180]}),l(w,{class:"example16","content-class":"text-center my4","app-classes-string":"d-block text-center"},{pug:o(()=>t[181]||(t[181]=[n(`w-button.pet-button.cat-button.ma4(
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
  | `+g("{{ tooltipContent }}"))])),html:o(()=>t[182]||(t[182]=[n(`<w-button
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
  `+g("{{ tooltipContent }}")+`
</w-tooltip>`)])),js:o(()=>t[183]||(t[183]=[n(`data: () => ({
  activator: '.pet-button',
  tooltipContent: ''
})`)])),default:o(()=>[l(u,{class:"pet-button2 cat-button3 ma4",icon:"mdi mdi-cat",xl:"",onMouseenter:t[7]||(t[7]=e=>{p.activator2=".cat-button3",p.tooltipContent="Meow!"}),onMouseleave:t[8]||(t[8]=e=>p.activator2=".pet-button2")}),l(u,{class:"pet-button2 dog-button3 ma4",icon:"mdi mdi-dog",xl:"",onMouseenter:t[9]||(t[9]=e=>{p.activator2=".dog-button3",p.tooltipContent="Woof!"}),onMouseleave:t[10]||(t[10]=e=>p.activator2=".pet-button2")}),l(a,{"append-to":".example16",activator:p.activator2,delay:100},{default:o(()=>[n(g(p.tooltipContent),1)]),_:1},8,["activator"])]),_:1})])}const O={data:()=>({showTooltip:!1,showTooltip2:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}],activator1:".pet-button",activator2:".pet-button2",tooltipContent:""}),methods:{onTooltipClose(){setTimeout(()=>this.showTooltip=!1,100)}}},B=y(O,[["render",q]]);function P(p,t,h,k,T,b){const f=v("title-link"),d=v("component-api");return x(),c("div",null,[t[1]||(t[1]=i("div",{class:"w-divider my12"},null,-1)),l(f,{class:"title1",h2:""},{default:o(()=>t[0]||(t[0]=[n("API")])),_:1,__:[0]}),l(d,{class:"mt0",items:b.props,descriptions:p.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(d,{items:p.slots,title:"Slots"},null,8,["items"]),l(d,{items:b.events,title:"Events"},null,8,["items"])])}const R={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',showOnClick:"Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.",enableTouch:"Enables the hover-activating tooltips on touch devices:<br>Since you can't hover on touch device (you can only tap which is counted as a click), the hover-activating tooltips are not behaving similar on mobile as they need a tap to be closed. That's why this option is disabled by default.",color:`Applies a color to the tooltip's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tooltip's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Provide custom CSS classes for the tooltip element.",appendTo:'Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>The default root is <span class="code">.w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',fixed:"Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).",top:"Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",zIndex:"Applies a z-index (positive or negative integer) to the tooltip.",persistent:"When set to <code>true</code>, clicking outside of the tooltip will not close the tooltip.",activator:"Allows you to define one or multiple external activators for the tooltip through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the tooltip from different activators.",delay:"A delay - in milliseconds - before opening the tooltip.<br>A small delay may help the tooltip position computing if the tooltip content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same tooltip with different content.",caption:"Apply the <code>.caption</code> style on the tooltip content (small, grey, italic).",xs:"Sets the size of the tooltip to extra small.",sm:"Sets the size of the tooltip to small.",md:"Sets the size of the tooltip to medium.",lg:"Sets the size of the tooltip to large.",xl:"Sets the size of the tooltip to extra large."},L={activator:{description:'<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},I={input:"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on tooltip close.",open:"Emitted on tooltip open."},U={data:()=>({propsDescs:R,slots:L}),computed:{props(){return S.props},events(){return S.emits.reduce((p,t)=>(p[t]={description:I[t]||""})&&p,{})}}},W=y(U,[["render",P]]);function j(p,t,h,k,T,b){const f=v("ui-component-title"),d=v("examples"),m=v("api");return x(),c("main",null,[l(f,null,{default:o(()=>t[0]||(t[0]=[n("w-tooltip")])),_:1,__:[0]}),l(d),l(m)])}const F={components:{Examples:B,Api:W}},Y=y(F,[["render",j]]);export{Y as default};
