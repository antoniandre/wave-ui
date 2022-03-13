import{r as h,o as g,f as b,a as n,w as t,m as a,t as s,e as o,h as _,b as i}from"./vendor.c30f2c6c.js";import{_ as f,N as k}from"./index.67df9d80.js";const H={class:"tooltips-demo"},$=i("strong",null,"Important notes",-1),V=i("br",null,null,-1),M=o(`
By default when you use `),D=i("code",null,"<w-tooltip>",-1),B=o(`, it creates a wrapper around the activator
element and the tooltip is added inside this wrapper.`),q=i("br",null,null,-1),O=o(`
In this case you can add classes to the wrapper to style it as desired.`),E=i("br",null,null,-1),P=i("br",null,null,-1),R=o(`
But in some cases, for instance if the activator element is placed in a container that has a hidden
overflow, the tooltip needs to be placed outside of this container to be fully visible.`),I=i("br",null,null,-1),L=o(`
You can use the `),U=i("code",null,"appendTo",-1),j=o(` prop to place it elsewhere in the DOM, like in the
`),N=i("a",{href:"#appending-to-a-dom-node"},"Appending to a particular DOM node",-1),W=o(" example."),F=i("br",null,null,-1),z=o(`
In this case, the wrapper will be hidden and unstylable whereas the tooltip itself will be appended to
the DOM node you provided.
`),Y=o("Tooltip position"),G=o("mdi mdi-home"),J=o("Home"),K=o("mdi mdi-home"),Q=o("Home"),X=o("mdi mdi-home"),Z=o("Home"),tt=o("mdi mdi-home"),ot=o("Home"),nt=o(`.text-center
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
    | Home`),et=o(`<div class="text-center">
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
`),it=o("Alignments"),lt=i("p",null,"In addition to positions, you can align the tooltip with its activator.",-1),at=i("div",{class:"title4 mb2"},"Top position",-1),st=o("Align left"),ct=o("Tooltip content,"),rt=i("br",null,null,-1),pt=o("on multiple lines."),dt=o("Centered"),mt=o("Tooltip content,"),ht=i("br",null,null,-1),ut=o("on multiple lines."),_t=o("Align right"),wt=o("Tooltip content,"),vt=i("br",null,null,-1),gt=o("on multiple lines."),bt=i("div",{class:"title4 mt6 mb2"},"Bottom position",-1),ft=o("Align left"),xt=o("Tooltip content,"),yt=i("br",null,null,-1),Tt=o("on multiple lines."),kt=o("Centered"),St=o("Tooltip content,"),Ct=i("br",null,null,-1),At=o("on multiple lines."),Ht=o("Align right"),$t=o("Tooltip content,"),Vt=i("br",null,null,-1),Mt=o("on multiple lines."),Dt=i("div",{class:"title4 mt6 mb2"},"Right position",-1),Bt=o("Align top"),qt=o("Tooltip content,"),Ot=i("br",null,null,-1),Et=o("on multiple lines."),Pt=o("Centered"),Rt=o("Tooltip content,"),It=i("br",null,null,-1),Lt=o("on multiple lines."),Ut=o("Align bottom"),jt=o("Tooltip content,"),Nt=i("br",null,null,-1),Wt=o("on multiple lines."),Ft=i("div",{class:"title4 mt6 mb2"},"Left position",-1),zt=o("Align top"),Yt=o("Tooltip content,"),Gt=i("br",null,null,-1),Jt=o("on multiple lines."),Kt=o("Centered"),Qt=o("Tooltip content,"),Xt=i("br",null,null,-1),Zt=o("on multiple lines."),to=o("Align bottom"),oo=o("Tooltip content,"),no=i("br",null,null,-1),eo=o("on multiple lines."),io=o(`.title4.mb2 top position
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
  | Tooltip content,#[br]on multiple lines.`),lo=o(`<div class="title4 mb2">Top position</div>
<w-tooltip top align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),ao=i("br",null,null,-1),so=o(`on multiple lines.
</w-tooltip>

<w-tooltip top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),co=i("br",null,null,-1),ro=o(`on multiple lines.
</w-tooltip>

<w-tooltip top align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),po=i("br",null,null,-1),mo=o(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Bottom position</div>
<w-tooltip align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),ho=i("br",null,null,-1),uo=o(`on multiple lines.
</w-tooltip>

<w-tooltip>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),_o=i("br",null,null,-1),wo=o(`on multiple lines.
</w-tooltip>

<w-tooltip align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),vo=i("br",null,null,-1),go=o(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Right position</div>
<w-tooltip right align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align top
    </w-button>
  </template>
  Tooltip content,`),bo=i("br",null,null,-1),fo=o(`on multiple lines.
</w-tooltip>

<w-tooltip right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),xo=i("br",null,null,-1),yo=o(`on multiple lines.
</w-tooltip>

<w-tooltip right align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">Alig
      n bottom
    </w-button>
  </template>
  Tooltip content,`),To=i("br",null,null,-1),ko=o(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Left position</div>
<w-tooltip left align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">A
      lign top
    </w-button>
  </template>
  Tooltip content,`),So=i("br",null,null,-1),Co=o(`on multiple lines.
</w-tooltip>

<w-tooltip left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),Ao=i("br",null,null,-1),Ho=o(`on multiple lines.
</w-tooltip>

<w-tooltip left align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align bottom
    </w-button>
  </template>
  Tooltip content,`),$o=i("br",null,null,-1),Vo=o(`on multiple lines.
</w-tooltip>
`),Mo=o("Toggle on click"),Do=o("wi-star"),Bo=o("Star"),qo=o("Star"),Oo=o("wi-star"),Eo=o("Star"),Po=o("Star"),Ro=o(`.text-center
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
    | Star`),Io=o(`<div class="text-center">
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
`),Lo=o("Persistent"),Uo=i("p",null,[o("By default with the "),i("code",null,"show-on-click"),o(` option, the tooltip will hide when you click
anywhere once open.`),i("br"),o(`
To make it persistent, use the `),i("code",null,"persistent"),o(` prop, so a click will not close the open
tooltip.`),i("br"),o(`
Clicking on the activator can always toggle the tooltip regardless of the `),i("code",null,"persistent"),o(`
prop.`)],-1),jo=o("wi-star"),No=o("Star"),Wo=o(`w-tooltip(show-on-click persistent)
  template(#activator="{ on }")
    w-icon(v-on="on" xl) wi-star
  | Star
`),Fo=o(`<w-tooltip
  show-on-click
  persistent>
  <template #activator="{ on }">
    <w-icon v-on="on" xl>wi-star</w-icon>
  </template>
  Star
</w-tooltip>
`),zo=o("Using a v-model"),Yo=o("Toggle with v-model"),Go=i("p",null,"Click the button to toggle the tooltips.",-1),Jo={class:"d-iblock my2 mx6"},Ko=o("wi-star"),Qo=o("Star"),Xo=o("wi-star"),Zo=o("Star"),tn=o("wi-star"),on=o("Star"),nn=o("wi-star"),en=o("Star"),ln=o(`.text-center
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
      | Star`),an=o(`<div class="text-center">
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
</div>`),sn=o(`data: () => ({
  showTooltip: false
})
`),cn=o("Using v-model to update a variable"),rn=i("p",null,"Click the star to toggle the tooltip.",-1),pn=o("wi-star"),dn=o("Star"),mn={class:"mt4"},hn=o(`w-tooltip(v-model="showTooltip" show-on-click right)
  template(#activator="{ on }")
    w-icon(v-on="on" lg) wi-star
  | Star
div.mt4 The tooltip is `+_("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
`),un=o(`<w-tooltip
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
</div>`),_n=o(`data: () => ({
  showTooltip: false
})
`),wn=o("Background color & text color"),vn=i("p",null,[o("Like in most components, you can set a "),i("code",null,"color"),o(" for the text and a "),i("code",null,"bg-color"),o(` for the
background.`)],-1),gn=o("wi-star"),bn=o("Star"),fn=o("wi-star"),xn=o("Star"),yn=o("wi-star"),Tn=o("Star"),kn=o("wi-star"),Sn=o("Star"),Cn=o(`.text-center
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
    | Star`),An=o(`<div class="text-center">
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
`),Hn=o("Tile, round and shadow"),$n=o("mdi mdi-square"),Vn=o("Tile"),Mn=o("mdi mdi-circle"),Dn=o("Round"),Bn=o("mdi mdi-heart"),qn=o("Shadow"),On=o(`.text-center.pb8
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
    | Shadow`),En=o(`<div class="text-center pb8">
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
`),Pn=o("Different contents"),Rn=o("wi-star"),In=o("Star"),Ln=o("Lorem ipsum, dolor sit amet consectetur adipisicing elit."),Un=i("br",null,null,-1),jn=o("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!"),Nn=i("br",null,null,-1),Wn=i("br",null,null,-1),Fn=o("Recusandae distinctio perferendis expedita pariatur fuga."),zn=o(`.text-center
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
    | Recusandae distinctio perferendis expedita pariatur fuga.`),Yn=o(`<div class="text-center">
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
`),Gn=o("Transitions"),Jn={class:"text-center py6"},Kn=o("mdi mdi-home"),Qn=o("Home"),Xn=o("mdi mdi-home"),Zn=o("Home"),te=o("mdi mdi-home"),oe=o("Home"),ne=o("mdi mdi-home"),ee=o("Home"),ie=o(`.text-center
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
      | Home`),le=o(`<div class="text-center">
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
`),ae=o(`data: () => ({
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
`),se=o("Appending to a particular DOM node"),ce=i("p",null,`In this example, the yellow container of the pink activator has an overflow hidden, but we want the
tooltip to be fully visible. So we detach it to the green container.`,-1),re={class:"another-container text-center green-light5--bg pa6"},pe=o("mdi mdi-bomb"),de=o("Hover me"),me=i("span",null,[o("This tooltip is appended to the "),i("span",{class:"green"},"green"),o(" container!")],-1),he=o(`.wrapper.text-center.green-light5--bg.pa6
  w-card(bg-color="yellow-light5")
    w-tooltip(append-to=".wrapper")
      template(#activator="{ on }")
        w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5")
          w-icon.mr1 mdi mdi-bomb
          | Hover me
      span This tooltip is appended to the green container!`),ue=o(`<div class="wrapper text-center green-light5--bg pa6">
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
</div>`),_e=o(`.wrapper {position: relative;}

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
`),we=o(`The DOM element that the tooltip is detached to must have a position (fixed, absolute or
relative).
`),ve=o("External activator"),ge=i("p",null,[o(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),i("br"),o(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),be=o("Trigger a menu on click of an external activator"),fe=o("Meow!"),xe=o(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button") Meow!`),ye=o(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button">
  Meow!
</w-tooltip>
`),Te=o("Trigger the same menu on hover of 2 different external activators"),ke=i("p",{class:"text-italic"},"But do you really need that? ;)",-1),Se=o(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`),Ce=o(`w-button.pet-button.cat-button.ma4(
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
  | `+_("{{ tooltipContent }}")),Ae=o(`<w-button
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
</w-tooltip>`),He=o(`data: () => ({
  activator: '.pet-button',
  tooltipContent: ''
})`);function $e(c,r,x,y,T,w){const v=h("alert"),d=h("title-link"),p=h("w-icon"),l=h("w-tooltip"),u=h("example"),m=h("w-button"),S=h("w-radios"),C=h("w-tag"),A=h("w-card");return g(),b("div",H,[n(v,{tip:""},{default:t(()=>[$,V,M,D,B,q,O,E,P,R,I,L,U,j,N,W,F,z]),_:1}),n(d,{h2:""},{default:t(()=>[Y]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[nt]),html:t(()=>[et]),default:t(()=>[n(l,{left:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[G]),_:2},1040)]),default:t(()=>[J]),_:1}),n(l,{top:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[K]),_:2},1040)]),default:t(()=>[Q]),_:1}),n(l,null,{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[X]),_:2},1040)]),default:t(()=>[Z]),_:1}),n(l,{right:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[tt]),_:2},1040)]),default:t(()=>[ot]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[it]),_:1}),lt,n(u,{class:"example6"},{pug:t(()=>[io]),html:t(()=>[lo,ao,so,co,ro,po,mo,ho,uo,_o,wo,vo,go,bo,fo,xo,yo,To,ko,So,Co,Ao,Ho,$o,Vo]),default:t(()=>[at,n(l,{"append-to":".example6",top:"","align-left":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[st]),_:2},1040)]),default:t(()=>[ct,rt,pt]),_:1}),n(l,{"append-to":".example6",top:""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[dt]),_:2},1040)]),default:t(()=>[mt,ht,ut]),_:1}),n(l,{"append-to":".example6",top:"","align-right":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[_t]),_:2},1040)]),default:t(()=>[wt,vt,gt]),_:1}),bt,n(l,{"append-to":".example6","align-left":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[ft]),_:2},1040)]),default:t(()=>[xt,yt,Tt]),_:1}),n(l,{"append-to":".example6"},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[kt]),_:2},1040)]),default:t(()=>[St,Ct,At]),_:1}),n(l,{"append-to":".example6","align-right":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Ht]),_:2},1040)]),default:t(()=>[$t,Vt,Mt]),_:1}),Dt,n(l,{"append-to":".example6",right:"","align-top":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Bt]),_:2},1040)]),default:t(()=>[qt,Ot,Et]),_:1}),n(l,{"append-to":".example6",right:""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Pt]),_:2},1040)]),default:t(()=>[Rt,It,Lt]),_:1}),n(l,{"append-to":".example6",right:"","align-bottom":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Ut]),_:2},1040)]),default:t(()=>[jt,Nt,Wt]),_:1}),Ft,n(l,{"append-to":".example6",left:"","align-top":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[zt]),_:2},1040)]),default:t(()=>[Yt,Gt,Jt]),_:1}),n(l,{"append-to":".example6",left:""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[Kt]),_:2},1040)]),default:t(()=>[Qt,Xt,Zt]),_:1}),n(l,{"append-to":".example6",left:"","align-bottom":""},{activator:t(({on:e})=>[n(m,a({class:"ma1"},s(e)),{default:t(()=>[to]),_:2},1040)]),default:t(()=>[oo,no,eo]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[Mo]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[Ro]),html:t(()=>[Io]),default:t(()=>[n(l,{"show-on-click":"",left:""},{activator:t(({on:e})=>[n(m,a({class:"ma2"},s(e),{"bg-color":"info"}),{default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[Do]),_:1}),Bo]),_:2},1040)]),default:t(()=>[qo]),_:1}),n(l,{"show-on-click":"",right:""},{activator:t(({on:e})=>[n(m,a({class:"ma2"},s(e),{"bg-color":"info-dark2",dark:""}),{default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[Oo]),_:1}),Eo]),_:2},1040)]),default:t(()=>[Po]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[Lo]),_:1}),Uo,n(u,{"content-class":"text-center my4 example-persistent"},{pug:t(()=>[Wo]),html:t(()=>[Fo]),default:t(()=>[n(l,{"show-on-click":"",persistent:"","append-to":".example-persistent"},{activator:t(({on:e})=>[n(p,a(s(e),{xl:""}),{default:t(()=>[jo]),_:2},1040)]),default:t(()=>[No]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[zo]),_:1}),n(d,{h3:""},{default:t(()=>[Yo]),_:1}),Go,n(u,{"content-class":"text-center my4"},{pug:t(()=>[ln]),html:t(()=>[an]),js:t(()=>[sn]),default:t(()=>[n(m,{class:"my2 mx6",onClick:r[0]||(r[0]=e=>c.showTooltip=!c.showTooltip),"bg-color":"primary",dark:"",width:"6em"},{default:t(()=>[o(_(c.showTooltip?"Hide":"Show")+" tooltip",1)]),_:1}),i("div",Jo,[n(l,{"model-value":c.showTooltip,"show-on-click":"",left:"",onOpen:r[1]||(r[1]=e=>c.tooltipVisible=!0),onClose:w.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[Ko]),_:2},1040)]),default:t(()=>[Qo]),_:1},8,["model-value","onClose"]),n(l,{"model-value":c.showTooltip,"show-on-click":"",top:"",onOpen:r[2]||(r[2]=e=>c.tooltipVisible=!0),onClose:w.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[Xo]),_:2},1040)]),default:t(()=>[Zo]),_:1},8,["model-value","onClose"]),n(l,{"model-value":c.showTooltip,"show-on-click":"",onOpen:r[3]||(r[3]=e=>c.tooltipVisible=!0),onClose:w.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[tn]),_:2},1040)]),default:t(()=>[on]),_:1},8,["model-value","onClose"]),n(l,{"model-value":c.showTooltip,"show-on-click":"",right:"",onOpen:r[4]||(r[4]=e=>c.tooltipVisible=!0),onClose:w.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[nn]),_:2},1040)]),default:t(()=>[en]),_:1},8,["model-value","onClose"])])]),_:1}),n(d,{h3:""},{default:t(()=>[cn]),_:1}),rn,n(u,{"content-class":"text-center my4"},{pug:t(()=>[hn]),html:t(()=>[un]),js:t(()=>[_n]),default:t(()=>[n(l,{modelValue:c.showTooltip2,"onUpdate:modelValue":r[5]||(r[5]=e=>c.showTooltip2=e),"show-on-click":"",right:""},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[pn]),_:2},1040)]),default:t(()=>[dn]),_:1},8,["modelValue"]),i("div",mn,"The tooltip is "+_(c.showTooltip2?"visible":"hidden")+".",1)]),_:1}),n(d,{h2:""},{default:t(()=>[wn]),_:1}),vn,n(u,{"content-class":"text-center pb8"},{pug:t(()=>[Cn]),html:t(()=>[An]),default:t(()=>[n(l,{color:"white","bg-color":"blue"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"blue"}),{default:t(()=>[gn]),_:2},1040)]),default:t(()=>[bn]),_:1}),n(l,{color:"white","bg-color":"purple"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"purple"}),{default:t(()=>[fn]),_:2},1040)]),default:t(()=>[xn]),_:1}),n(l,{color:"orange-dark1","bg-color":"yellow-light3"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"amber"}),{default:t(()=>[yn]),_:2},1040)]),default:t(()=>[Tn]),_:1}),n(l,{color:"orange"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:""}),{default:t(()=>[kn]),_:2},1040)]),default:t(()=>[Sn]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[Hn]),_:1}),n(u,{"content-class":"text-center pb8"},{pug:t(()=>[On]),html:t(()=>[En]),default:t(()=>[n(l,{color:"red-light2",tile:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"red-light2"}),{default:t(()=>[$n]),_:2},1040)]),default:t(()=>[Vn]),_:1}),n(l,{color:"amber-dark1",round:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"amber"}),{default:t(()=>[Mn]),_:2},1040)]),default:t(()=>[Dn]),_:1}),n(l,{color:"pink-light1",shadow:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"pink-light1"}),{default:t(()=>[Bn]),_:2},1040)]),default:t(()=>[qn]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[Pn]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[zn]),html:t(()=>[Yn]),default:t(()=>[n(l,{color:"primary"},{activator:t(({on:e})=>[i("span",a({class:"ma3"},s(e)),"Content with icon",16)]),default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[Rn]),_:1}),In]),_:1}),n(l,{color:"primary"},{activator:t(({on:e})=>[i("span",a({class:"ma3"},s(e)),"Very long content",16)]),default:t(()=>[Ln,Un,jn,Nn,Wn,Fn]),_:1})]),_:1}),n(d,{h2:""},{default:t(()=>[Gn]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[ie]),html:t(()=>[le]),js:t(()=>[ae]),default:t(()=>[n(S,{class:"my4",inline:"",modelValue:c.transition,"onUpdate:modelValue":r[6]||(r[6]=e=>c.transition=e),items:c.transitions},null,8,["modelValue","items"]),i("div",Jn,[n(l,{transition:c.transition,left:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[Kn]),_:2},1040)]),default:t(()=>[Qn]),_:1},8,["transition"]),n(l,{transition:c.transition},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[Xn]),_:2},1040)]),default:t(()=>[Zn]),_:1},8,["transition"]),n(l,{transition:c.transition,top:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[te]),_:2},1040)]),default:t(()=>[oe]),_:1},8,["transition"]),n(l,{transition:c.transition,right:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[ne]),_:2},1040)]),default:t(()=>[ee]),_:1},8,["transition"])])]),_:1}),n(d,{h2:"",slug:"appending-to-a-dom-node"},{default:t(()=>[se]),_:1}),ce,n(u,{class:"mb12","content-class":"pa0"},{pug:t(()=>[he]),html:t(()=>[ue]),css:t(()=>[_e]),default:t(()=>[i("div",re,[n(A,{"bg-color":"yellow-light5"},{default:t(()=>[n(l,{"append-to":".another-container"},{activator:t(({on:e})=>[n(C,a(s(e),{lg:"",color:"pink-light1","bg-color":"pink-light5"}),{default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[pe]),_:1}),de]),_:2},1040)]),default:t(()=>[me]),_:1})]),_:1})])]),_:1}),n(v,{warning:""},{default:t(()=>[we]),_:1}),n(d,{h2:""},{default:t(()=>[ve]),_:1}),ge,n(d,{h3:"",slug:"external-activator--basic"},{default:t(()=>[be]),_:1}),n(u,{class:"example14","content-class":"text-center my4","app-props-string":"text-center"},{pug:t(()=>[xe]),html:t(()=>[ye]),default:t(()=>[n(m,{class:"cat-button",icon:"mdi mdi-cat",xl:""}),n(l,{"append-to":".example14",activator:".cat-button"},{default:t(()=>[fe]),_:1})]),_:1}),n(d,{h3:"",slug:"external-activator--2-activators"},{default:t(()=>[Te]),_:1}),ke,n(v,{tip:""},{default:t(()=>[Se]),_:1}),n(u,{class:"example16","content-class":"text-center my4","app-props-string":"block text-center"},{pug:t(()=>[Ce]),html:t(()=>[Ae]),js:t(()=>[He]),default:t(()=>[n(m,{class:"pet-button2 cat-button3 ma4",icon:"mdi mdi-cat",xl:"",onMouseenter:r[7]||(r[7]=e=>{c.activator2=".cat-button3",c.tooltipContent="Meow!"}),onMouseleave:r[8]||(r[8]=e=>c.activator2=".pet-button2")}),n(m,{class:"pet-button2 dog-button3 ma4",icon:"mdi mdi-dog",xl:"",onMouseenter:r[9]||(r[9]=e=>{c.activator2=".dog-button3",c.tooltipContent="Woof!"}),onMouseleave:r[10]||(r[10]=e=>c.activator2=".pet-button2")}),n(l,{"append-to":".example16",activator:c.activator2,delay:100},{default:t(()=>[o(_(c.tooltipContent),1)]),_:1},8,["activator"])]),_:1})])}const Ve={data:()=>({showTooltip:!1,showTooltip2:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}],activator1:".pet-button",activator2:".pet-button2",tooltipContent:""}),methods:{onTooltipClose(){setTimeout(()=>this.showTooltip=!1,100)}}};var Me=f(Ve,[["render",$e]]);const De=i("div",{class:"w-divider my12"},null,-1),Be=o("API");function qe(c,r,x,y,T,w){const v=h("title-link"),d=h("component-api");return g(),b("div",null,[De,n(v,{class:"title1",h2:""},{default:t(()=>[Be]),_:1}),n(d,{class:"mt0",items:w.props,descriptions:c.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(d,{items:c.slots,title:"Slots"},null,8,["items"]),n(d,{items:w.events,title:"Events"},null,8,["items"])])}const Oe={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',showOnClick:"Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.",color:`Applies a color to the tooltip's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tooltip's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Provide custom CSS classes for the tooltip element.",appendTo:'Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>By default a wrapper is created around the activator element and the tooltip is appended inside it.',detachTo:"Deprecated. Use <code>append-to</code> instead.",fixed:"Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).",top:"Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",zIndex:"Applies a z-index (positive or negative integer) to the tooltip.",persistent:"When set to <code>true</code>, clicking outside of the tooltip will not close the tooltip.",activator:"Allows you to define one or multiple external activators for the tooltip through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the tooltip from different activators.",delay:"A delay - in milliseconds - before opening the tooltip.<br>A small delay may help the tooltip position computing if the tooltip content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same tooltip with different content."},Ee={activator:{description:'<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},Pe={input:"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on tooltip close.",open:"Emitted on tooltip open."},Re={data:()=>({propsDescs:Oe,slots:Ee}),computed:{props(){return k.props},events(){return k.emits.reduce((c,r)=>(c[r]={description:Pe[r]||""})&&c,{})}}};var Ie=f(Re,[["render",qe]]);const Le=o("w-tooltip");function Ue(c,r,x,y,T,w){const v=h("ui-component-title"),d=h("examples"),p=h("api");return g(),b("main",null,[n(v,null,{default:t(()=>[Le]),_:1}),n(d),n(p)])}const je={components:{Examples:Me,Api:Ie}};var Fe=f(je,[["render",Ue]]);export{Fe as default};
