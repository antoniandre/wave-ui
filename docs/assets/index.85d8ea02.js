import{r as h,o as g,f as b,a as n,w as t,m as a,t as s,e as o,h as _,b as i,_ as f,c3 as k}from"./index.9037a58f.js";const H={class:"tooltips-demo"},$=i("strong",null,"Important notes",-1),V=i("br",null,null,-1),M=o(`
By default the tooltip is moved into the w-app in the DOM, so it is not constrained by a hidden
overflow on a parent.`),D=i("br",null,null,-1),q=o(`
When used inside a dialog, menu or drawer, it will be by default appended to that element.`),O=i("br",null,null,-1),B=o(`
You can use the `),E=i("code",null,"appendTo",-1),P=o(` prop to place it elsewhere in the DOM, like in the
`),R=i("a",{href:"#appending-to-a-dom-node"},"Appending to a particular DOM node",-1),L=o(` example.
`),I=o("Tooltip position"),U=o("mdi mdi-home"),W=o("Home"),F=o("mdi mdi-home"),N=o("Home"),j=o("mdi mdi-home"),z=o("Home"),Y=o("mdi mdi-home"),G=o("Home"),J=o(`.text-center
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
    | Home`),K=o(`<div class="text-center">
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
`),Q=o("Alignments"),X=i("p",null,"In addition to positions, you can align the tooltip with its activator.",-1),Z=i("div",{class:"title4 mb2"},"Top position",-1),tt=o("Align left"),ot=o("Tooltip content,"),nt=i("br",null,null,-1),et=o("on multiple lines."),it=o("Centered"),lt=o("Tooltip content,"),at=i("br",null,null,-1),st=o("on multiple lines."),ct=o("Align right"),rt=o("Tooltip content,"),pt=i("br",null,null,-1),dt=o("on multiple lines."),mt=i("div",{class:"title4 mt6 mb2"},"Bottom position",-1),ht=o("Align left"),ut=o("Tooltip content,"),_t=i("br",null,null,-1),wt=o("on multiple lines."),vt=o("Centered"),gt=o("Tooltip content,"),bt=i("br",null,null,-1),ft=o("on multiple lines."),xt=o("Align right"),yt=o("Tooltip content,"),Tt=i("br",null,null,-1),kt=o("on multiple lines."),St=i("div",{class:"title4 mt6 mb2"},"Right position",-1),Ct=o("Align top"),At=o("Tooltip content,"),Ht=i("br",null,null,-1),$t=o("on multiple lines."),Vt=o("Centered"),Mt=o("Tooltip content,"),Dt=i("br",null,null,-1),qt=o("on multiple lines."),Ot=o("Align bottom"),Bt=o("Tooltip content,"),Et=i("br",null,null,-1),Pt=o("on multiple lines."),Rt=i("div",{class:"title4 mt6 mb2"},"Left position",-1),Lt=o("Align top"),It=o("Tooltip content,"),Ut=i("br",null,null,-1),Wt=o("on multiple lines."),Ft=o("Centered"),Nt=o("Tooltip content,"),jt=i("br",null,null,-1),zt=o("on multiple lines."),Yt=o("Align bottom"),Gt=o("Tooltip content,"),Jt=i("br",null,null,-1),Kt=o("on multiple lines."),Qt=o(`.title4.mb2 top position
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
  | Tooltip content,#[br]on multiple lines.`),Xt=o(`<div class="title4 mb2">Top position</div>
<w-tooltip top align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),Zt=i("br",null,null,-1),to=o(`on multiple lines.
</w-tooltip>

<w-tooltip top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),oo=i("br",null,null,-1),no=o(`on multiple lines.
</w-tooltip>

<w-tooltip top align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),eo=i("br",null,null,-1),io=o(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Bottom position</div>
<w-tooltip align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),lo=i("br",null,null,-1),ao=o(`on multiple lines.
</w-tooltip>

<w-tooltip>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),so=i("br",null,null,-1),co=o(`on multiple lines.
</w-tooltip>

<w-tooltip align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),ro=i("br",null,null,-1),po=o(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Right position</div>
<w-tooltip right align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align top
    </w-button>
  </template>
  Tooltip content,`),mo=i("br",null,null,-1),ho=o(`on multiple lines.
</w-tooltip>

<w-tooltip right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),uo=i("br",null,null,-1),_o=o(`on multiple lines.
</w-tooltip>

<w-tooltip right align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">Alig
      n bottom
    </w-button>
  </template>
  Tooltip content,`),wo=i("br",null,null,-1),vo=o(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Left position</div>
<w-tooltip left align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">A
      lign top
    </w-button>
  </template>
  Tooltip content,`),go=i("br",null,null,-1),bo=o(`on multiple lines.
</w-tooltip>

<w-tooltip left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),fo=i("br",null,null,-1),xo=o(`on multiple lines.
</w-tooltip>

<w-tooltip left align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align bottom
    </w-button>
  </template>
  Tooltip content,`),yo=i("br",null,null,-1),To=o(`on multiple lines.
</w-tooltip>
`),ko=o("Toggle on click"),So=o("wi-star"),Co=o("Star"),Ao=o("Star"),Ho=o("wi-star"),$o=o("Star"),Vo=o("Star"),Mo=o(`.text-center
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
    | Star`),Do=o(`<div class="text-center">
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
`),qo=o("Persistent"),Oo=i("p",null,[o("By default with the "),i("code",null,"show-on-click"),o(` option, the tooltip will hide when you click
anywhere once open.`),i("br"),o(`
To make it persistent, use the `),i("code",null,"persistent"),o(` prop, so a click will not close the open
tooltip.`),i("br"),o(`
Clicking on the activator can always toggle the tooltip regardless of the `),i("code",null,"persistent"),o(`
prop.`)],-1),Bo=o("wi-star"),Eo=o("Star"),Po=o(`w-tooltip(show-on-click persistent)
  template(#activator="{ on }")
    w-icon(v-on="on" xl) wi-star
  | Star
`),Ro=o(`<w-tooltip
  show-on-click
  persistent>
  <template #activator="{ on }">
    <w-icon v-on="on" xl>wi-star</w-icon>
  </template>
  Star
</w-tooltip>
`),Lo=o("Using a v-model"),Io=o("Toggle with v-model"),Uo=i("p",null,"Click the button to toggle the tooltips.",-1),Wo={class:"d-iblock my2 mx6"},Fo=o("wi-star"),No=o("Star"),jo=o("wi-star"),zo=o("Star"),Yo=o("wi-star"),Go=o("Star"),Jo=o("wi-star"),Ko=o("Star"),Qo=o(`.text-center
  w-button.my2.mx6(
    @click="showTooltip = !showTooltip"
    bg-color="primary"
    dark
    width="6em")
    | `+_("{{ showTooltip ? 'Hide' : 'Show' }}")+` tooltip

  div.d-iblock.my2.mx6
    w-tooltip(v-model="showTooltip" show-on-click left)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click top)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click right)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star`),Xo=o(`<div class="text-center">
  <w-button
    @click="showTooltip = !showTooltip"
    class="my2 mx6"
    bg-color="primary"
    dark
    width="6em">
    `+_("{{ showTooltip ? 'Hide' : 'Show' }}")+` tooltip
  </w-button>

  <div class="d-iblock my2 mx6">
    <w-tooltip
      v-model="showTooltip"
      show-on-click
      left>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      top>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      right>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>
  </div>
</div>`),Zo=o(`data: () => ({
  showTooltip: false
})
`),tn=o("Using v-model to update a variable"),on=i("p",null,"Click the star to toggle the tooltip.",-1),nn=o("wi-star"),en=o("Star"),ln={class:"mt4"},an=o(`w-tooltip(v-model="showTooltip" show-on-click right)
  template(#activator="{ on }")
    w-icon(v-on="on" lg) wi-star
  | Star
div.mt4 The tooltip is `+_("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
`),sn=o(`<w-tooltip
  v-model="showTooltip"
  show-on-click
  right>
  <template #activator="{ on }">
    <w-icon v-on="on" lg>wi-star</w-icon>
  </template>
  Star
</w-tooltip>

<div class="mt4">
  The tooltip is `+_("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
</div>`),cn=o(`data: () => ({
  showTooltip: false
})
`),rn=o("Background color & text color"),pn=i("p",null,[o("Like in most components, you can set a "),i("code",null,"color"),o(" for the text and a "),i("code",null,"bg-color"),o(` for the
background.`)],-1),dn=o("wi-star"),mn=o("Star"),hn=o("wi-star"),un=o("Star"),_n=o("wi-star"),wn=o("Star"),vn=o("wi-star"),gn=o("Star"),bn=o(`.text-center
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
    | Star`),fn=o(`<div class="text-center">
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
`),xn=o("Tile, round and shadow"),yn=o("mdi mdi-square"),Tn=o("Tile"),kn=o("mdi mdi-circle"),Sn=o("Round"),Cn=o("mdi mdi-heart"),An=o("Shadow"),Hn=o(`.text-center.pb8
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
    | Shadow`),$n=o(`<div class="text-center pb8">
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
`),Vn=o("Different contents"),Mn=o("wi-star"),Dn=o("Star"),qn=o("Lorem ipsum, dolor sit amet consectetur adipisicing elit."),On=i("br",null,null,-1),Bn=o("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!"),En=i("br",null,null,-1),Pn=i("br",null,null,-1),Rn=o("Recusandae distinctio perferendis expedita pariatur fuga."),Ln=o(`.text-center
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
    | Recusandae distinctio perferendis expedita pariatur fuga.`),In=o(`<div class="text-center">
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
`),Un=o("Transitions"),Wn={class:"text-center py6"},Fn=o("mdi mdi-home"),Nn=o("Home"),jn=o("mdi mdi-home"),zn=o("Home"),Yn=o("mdi mdi-home"),Gn=o("Home"),Jn=o("mdi mdi-home"),Kn=o("Home"),Qn=o(`.text-center
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
      | Home`),Xn=o(`<div class="text-center">
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
`),Zn=o(`data: () => ({
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
`),te=o("Appending to a particular DOM node"),oe=i("p",null,`In this example, the yellow container of the pink activator has an overflow hidden, but we want the
tooltip to be fully visible. So we detach it to the green container.`,-1),ne={class:"another-container text-center green-light5--bg pa6"},ee=o("mdi mdi-bomb"),ie=o("Hover me"),le=i("span",null,[o("This tooltip is appended to the "),i("span",{class:"green"},"green"),o(" container!")],-1),ae=o(`.wrapper.text-center.green-light5--bg.pa6
  w-card(bg-color="yellow-light5")
    w-tooltip(append-to=".wrapper")
      template(#activator="{ on }")
        w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5")
          w-icon.mr1 mdi mdi-bomb
          | Hover me
      span This tooltip is appended to the green container!`),se=o(`<div class="wrapper text-center green-light5--bg pa6">
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
</div>`),ce=o(`.wrapper {position: relative;}

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
`),re=o(`The DOM element that the tooltip is detached to must have a position (fixed, absolute or
relative).
`),pe=o("External activator"),de=i("p",null,[o(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),i("br"),o(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),me=o("Trigger a menu on click of an external activator"),he=o("Meow!"),ue=o(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button") Meow!`),_e=o(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button">
  Meow!
</w-tooltip>
`),we=o("Trigger the same menu on hover of 2 different external activators"),ve=i("p",{class:"text-italic"},"But do you really need that? ;)",-1),ge=o(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`),be=o(`w-button.pet-button.cat-button.ma4(
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
  | `+_("{{ tooltipContent }}")),fe=o(`<w-button
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
  `+_("{{ tooltipContent }}")+`
</w-tooltip>`),xe=o(`data: () => ({
  activator: '.pet-button',
  tooltipContent: ''
})`);function ye(c,r,x,y,T,w){const v=h("alert"),d=h("title-link"),p=h("w-icon"),l=h("w-tooltip"),u=h("example"),m=h("w-button"),S=h("w-radios"),C=h("w-tag"),A=h("w-card");return g(),b("div",H,[n(v,{tip:""},{default:t(()=>[$,V,M,D,q,O,B,E,P,R,L]),_:1}),n(d,{h2:""},{default:t(()=>[I]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[J]),html:t(()=>[K]),default:t(()=>[n(l,{left:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[U]),_:2},1040)]),default:t(()=>[W]),_:1}),n(l,{top:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[F]),_:2},1040)]),default:t(()=>[N]),_:1}),n(l,null,{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[j]),_:2},1040)]),default:t(()=>[z]),_:1}),n(l,{right:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[Y]),_:2},1040)]),default:t(()=>[G]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[Q]),_:1}),X,n(u,{class:"example6"},{pug:t(()=>[Qt]),html:t(()=>[Xt,Zt,to,oo,no,eo,io,lo,ao,so,co,ro,po,mo,ho,uo,_o,wo,vo,go,bo,fo,xo,yo,To]),default:t(()=>[Z,n(l,{"append-to":".example6",top:"","align-left":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[tt]),_:2},1040)]),default:t(()=>[ot,nt,et]),_:1}),n(l,{"append-to":".example6",top:""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[it]),_:2},1040)]),default:t(()=>[lt,at,st]),_:1}),n(l,{"append-to":".example6",top:"","align-right":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[ct]),_:2},1040)]),default:t(()=>[rt,pt,dt]),_:1}),mt,n(l,{"append-to":".example6","align-left":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[ht]),_:2},1040)]),default:t(()=>[ut,_t,wt]),_:1}),n(l,{"append-to":".example6"},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[vt]),_:2},1040)]),default:t(()=>[gt,bt,ft]),_:1}),n(l,{"append-to":".example6","align-right":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[xt]),_:2},1040)]),default:t(()=>[yt,Tt,kt]),_:1}),St,n(l,{"append-to":".example6",right:"","align-top":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Ct]),_:2},1040)]),default:t(()=>[At,Ht,$t]),_:1}),n(l,{"append-to":".example6",right:""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Vt]),_:2},1040)]),default:t(()=>[Mt,Dt,qt]),_:1}),n(l,{"append-to":".example6",right:"","align-bottom":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Ot]),_:2},1040)]),default:t(()=>[Bt,Et,Pt]),_:1}),Rt,n(l,{"append-to":".example6",left:"","align-top":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Lt]),_:2},1040)]),default:t(()=>[It,Ut,Wt]),_:1}),n(l,{"append-to":".example6",left:""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Ft]),_:2},1040)]),default:t(()=>[Nt,jt,zt]),_:1}),n(l,{"append-to":".example6",left:"","align-bottom":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Yt]),_:2},1040)]),default:t(()=>[Gt,Jt,Kt]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[ko]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[Mo]),html:t(()=>[Do]),default:t(()=>[n(l,{"show-on-click":"",left:""},{activator:t(({on:e})=>[n(m,a({class:"ma2"},s(e),{"bg-color":"info"}),{default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[So]),_:1}),Co]),_:2},1040)]),default:t(()=>[Ao]),_:1}),n(l,{"show-on-click":"",right:""},{activator:t(({on:e})=>[n(m,a({class:"ma2"},s(e),{"bg-color":"info-dark2",dark:""}),{default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[Ho]),_:1}),$o]),_:2},1040)]),default:t(()=>[Vo]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[qo]),_:1}),Oo,n(u,{"content-class":"text-center my4 example-persistent"},{pug:t(()=>[Po]),html:t(()=>[Ro]),default:t(()=>[n(l,{"show-on-click":"",persistent:"","append-to":".example-persistent"},{activator:t(({on:e})=>[n(p,a(s(e),{xl:""}),{default:t(()=>[Bo]),_:2},1040)]),default:t(()=>[Eo]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[Lo]),_:1}),n(d,{h3:""},{default:t(()=>[Io]),_:1}),Uo,n(u,{"content-class":"text-center my4"},{pug:t(()=>[Qo]),html:t(()=>[Xo]),js:t(()=>[Zo]),default:t(()=>[n(m,{class:"my2 mx6",onClick:r[0]||(r[0]=e=>c.showTooltip=!c.showTooltip),"bg-color":"primary",dark:"",width:"6em"},{default:t(()=>[o(_(c.showTooltip?"Hide":"Show")+" tooltip",1)]),_:1}),i("div",Wo,[n(l,{"model-value":c.showTooltip,"show-on-click":"",left:"",onOpen:r[1]||(r[1]=e=>c.tooltipVisible=!0),onClose:w.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[Fo]),_:2},1040)]),default:t(()=>[No]),_:1},8,["model-value","onClose"]),n(l,{"model-value":c.showTooltip,"show-on-click":"",top:"",onOpen:r[2]||(r[2]=e=>c.tooltipVisible=!0),onClose:w.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[jo]),_:2},1040)]),default:t(()=>[zo]),_:1},8,["model-value","onClose"]),n(l,{"model-value":c.showTooltip,"show-on-click":"",onOpen:r[3]||(r[3]=e=>c.tooltipVisible=!0),onClose:w.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[Yo]),_:2},1040)]),default:t(()=>[Go]),_:1},8,["model-value","onClose"]),n(l,{"model-value":c.showTooltip,"show-on-click":"",right:"",onOpen:r[4]||(r[4]=e=>c.tooltipVisible=!0),onClose:w.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[Jo]),_:2},1040)]),default:t(()=>[Ko]),_:1},8,["model-value","onClose"])])]),_:1}),n(d,{h3:""},{default:t(()=>[tn]),_:1}),on,n(u,{"content-class":"text-center my4"},{pug:t(()=>[an]),html:t(()=>[sn]),js:t(()=>[cn]),default:t(()=>[n(l,{modelValue:c.showTooltip2,"onUpdate:modelValue":r[5]||(r[5]=e=>c.showTooltip2=e),"show-on-click":"",right:""},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[nn]),_:2},1040)]),default:t(()=>[en]),_:1},8,["modelValue"]),i("div",ln,"The tooltip is "+_(c.showTooltip2?"visible":"hidden")+".",1)]),_:1}),n(d,{h2:""},{default:t(()=>[rn]),_:1}),pn,n(u,{"content-class":"text-center pb8"},{pug:t(()=>[bn]),html:t(()=>[fn]),default:t(()=>[n(l,{color:"white","bg-color":"blue"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"blue"}),{default:t(()=>[dn]),_:2},1040)]),default:t(()=>[mn]),_:1}),n(l,{color:"white","bg-color":"purple"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"purple"}),{default:t(()=>[hn]),_:2},1040)]),default:t(()=>[un]),_:1}),n(l,{color:"orange-dark1","bg-color":"yellow-light3"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"amber"}),{default:t(()=>[_n]),_:2},1040)]),default:t(()=>[wn]),_:1}),n(l,{color:"orange"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:""}),{default:t(()=>[vn]),_:2},1040)]),default:t(()=>[gn]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[xn]),_:1}),n(u,{"content-class":"text-center pb8"},{pug:t(()=>[Hn]),html:t(()=>[$n]),default:t(()=>[n(l,{color:"red-light2",tile:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"red-light2"}),{default:t(()=>[yn]),_:2},1040)]),default:t(()=>[Tn]),_:1}),n(l,{color:"amber-dark1",round:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"amber"}),{default:t(()=>[kn]),_:2},1040)]),default:t(()=>[Sn]),_:1}),n(l,{color:"pink-light1",shadow:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"pink-light1"}),{default:t(()=>[Cn]),_:2},1040)]),default:t(()=>[An]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[Vn]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[Ln]),html:t(()=>[In]),default:t(()=>[n(l,{color:"primary"},{activator:t(({on:e})=>[i("span",a({class:"ma3"},s(e)),"Content with icon",16)]),default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[Mn]),_:1}),Dn]),_:1}),n(l,{color:"primary"},{activator:t(({on:e})=>[i("span",a({class:"ma3"},s(e)),"Very long content",16)]),default:t(()=>[qn,On,Bn,En,Pn,Rn]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[Un]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[Qn]),html:t(()=>[Xn]),js:t(()=>[Zn]),default:t(()=>[n(S,{class:"my4",inline:"",modelValue:c.transition,"onUpdate:modelValue":r[6]||(r[6]=e=>c.transition=e),items:c.transitions},null,8,["modelValue","items"]),i("div",Wn,[n(l,{transition:c.transition,left:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[Fn]),_:2},1040)]),default:t(()=>[Nn]),_:1},8,["transition"]),n(l,{transition:c.transition},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[jn]),_:2},1040)]),default:t(()=>[zn]),_:1},8,["transition"]),n(l,{transition:c.transition,top:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[Yn]),_:2},1040)]),default:t(()=>[Gn]),_:1},8,["transition"]),n(l,{transition:c.transition,right:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[Jn]),_:2},1040)]),default:t(()=>[Kn]),_:1},8,["transition"])])]),_:1}),n(d,{h2:"",slug:"appending-to-a-dom-node"},{default:t(()=>[te]),_:1}),oe,n(u,{class:"mb12","content-class":"pa0"},{pug:t(()=>[ae]),html:t(()=>[se]),css:t(()=>[ce]),default:t(()=>[i("div",ne,[n(A,{"bg-color":"yellow-light5"},{default:t(()=>[n(l,{"append-to":".another-container"},{activator:t(({on:e})=>[n(C,a(s(e),{lg:"",color:"pink-light1","bg-color":"pink-light5"}),{default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[ee]),_:1}),ie]),_:2},1040)]),default:t(()=>[le]),_:1})]),_:1})])]),_:1}),n(v,{warning:""},{default:t(()=>[re]),_:1}),n(d,{h2:""},{default:t(()=>[pe]),_:1}),de,n(d,{h3:"",slug:"external-activator--basic"},{default:t(()=>[me]),_:1}),n(u,{class:"example14","content-class":"text-center my4","app-props-string":"text-center"},{pug:t(()=>[ue]),html:t(()=>[_e]),default:t(()=>[n(m,{class:"cat-button",icon:"mdi mdi-cat",xl:""}),n(l,{"append-to":".example14",activator:".cat-button"},{default:t(()=>[he]),_:1})]),_:1}),n(d,{h3:"",slug:"external-activator--2-activators"},{default:t(()=>[we]),_:1}),ve,n(v,{tip:""},{default:t(()=>[ge]),_:1}),n(u,{class:"example16","content-class":"text-center my4","app-props-string":"block text-center"},{pug:t(()=>[be]),html:t(()=>[fe]),js:t(()=>[xe]),default:t(()=>[n(m,{class:"pet-button2 cat-button3 ma4",icon:"mdi mdi-cat",xl:"",onMouseenter:r[7]||(r[7]=e=>{c.activator2=".cat-button3",c.tooltipContent="Meow!"}),onMouseleave:r[8]||(r[8]=e=>c.activator2=".pet-button2")}),n(m,{class:"pet-button2 dog-button3 ma4",icon:"mdi mdi-dog",xl:"",onMouseenter:r[9]||(r[9]=e=>{c.activator2=".dog-button3",c.tooltipContent="Woof!"}),onMouseleave:r[10]||(r[10]=e=>c.activator2=".pet-button2")}),n(l,{"append-to":".example16",activator:c.activator2,delay:100},{default:t(()=>[o(_(c.tooltipContent),1)]),_:1},8,["activator"])]),_:1})])}const Te={data:()=>({showTooltip:!1,showTooltip2:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}],activator1:".pet-button",activator2:".pet-button2",tooltipContent:""}),methods:{onTooltipClose(){setTimeout(()=>this.showTooltip=!1,100)}}};var ke=f(Te,[["render",ye]]);const Se=i("div",{class:"w-divider my12"},null,-1),Ce=o("API");function Ae(c,r,x,y,T,w){const v=h("title-link"),d=h("component-api");return g(),b("div",null,[Se,n(v,{class:"title1",h2:""},{default:t(()=>[Ce]),_:1}),n(d,{class:"mt0",items:w.props,descriptions:c.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(d,{items:c.slots,title:"Slots"},null,8,["items"]),n(d,{items:w.events,title:"Events"},null,8,["items"])])}const He={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',showOnClick:"Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.",color:`Applies a color to the tooltip's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tooltip's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Provide custom CSS classes for the tooltip element.",appendTo:'Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>The default root is <span class="code">.w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',fixed:"Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).",top:"Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",zIndex:"Applies a z-index (positive or negative integer) to the tooltip.",persistent:"When set to <code>true</code>, clicking outside of the tooltip will not close the tooltip.",activator:"Allows you to define one or multiple external activators for the tooltip through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the tooltip from different activators.",delay:"A delay - in milliseconds - before opening the tooltip.<br>A small delay may help the tooltip position computing if the tooltip content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same tooltip with different content."},$e={activator:{description:'<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},Ve={input:"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on tooltip close.",open:"Emitted on tooltip open."},Me={data:()=>({propsDescs:He,slots:$e}),computed:{props(){return k.props},events(){return k.emits.reduce((c,r)=>(c[r]={description:Ve[r]||""})&&c,{})}}};var De=f(Me,[["render",Ae]]);const qe=o("w-tooltip");function Oe(c,r,x,y,T,w){const v=h("ui-component-title"),d=h("examples"),p=h("api");return g(),b("main",null,[n(v,null,{default:t(()=>[qe]),_:1}),n(d),n(p)])}const Be={components:{Examples:ke,Api:De}};var Pe=f(Be,[["render",Oe]]);export{Pe as default};
