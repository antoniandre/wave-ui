import{r as p,o as v,f,a as e,w as t,t as l,m as c,e as n,h,b as i,_ as g,U as k}from"./index.7c0b9523.js";const T=n("Basic"),I=n("Show menu"),B=n("Menu content"),L=n(`w-menu
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`),$=n(`<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show menu on click
    </w-button>
  </template>
  Menu content
</w-menu>
`),j=n("Show on click or on hover"),P=n("Show menu:"),R=n("On click"),V=n("Menu content"),O=n("On hover"),W=n("Menu content"),D=n(`| Show menu

w-menu
  template(#activator="{ on }")
    w-button.mx3(v-on="on") On click
  | Menu content

w-menu(show-on-hover)
  template(#activator="{ on }")
    w-button(v-on="on") On hover
  | Menu content`),E=n(`Show menu:

<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on" class="mx3">
      On click
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu show-on-hover>
  <template #activator="{ on }">
    <w-button v-on="on">
      On hover
    </w-button>
  </template>
  Menu content
</w-menu>
`),U=n("Persistent menu"),H=i("p",null,[n("A persistent menu can only be closed by clicking on the activator again, or programmatically."),i("br"),n(`
Clicking outside the menu will not close it.`),i("br"),n(`
Of course you can also add a button inside the menu to close it.`)],-1),N=n("Show persistent menu"),z=n("Click on the button again to close"),F=n(`w-menu(persistent)
  template(#activator="{ on }")
    w-button.mb2.mr3(v-on="on") Show persistent menu
  | Click on the button again to close`),q=n(`<w-menu persistent>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show persistent menu
    </w-button>
  </template>
  Click on the button again to close
</w-menu>
`),Y=n("Hide menu on click inside"),G=i("p",null,"A click inside the menu will close it.",-1),J=n("Show menu"),K=n("A click here will close the menu."),Q=n(`w-menu(hide-on-menu-click)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | A click here will close the menu.`),X=n(`<w-menu hide-on-menu-click>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  A click here will close the menu.
</w-menu>
`),Z=n("Position"),tt=n("Show menu on:"),nt=n("Left"),et=n("Menu content"),ot=n("Top"),at=n("Menu content"),st=n("Bottom"),lt=n("Menu content"),it=n("Right"),ct=n("Menu content"),ut=n(`w-flex.my12(:gap="3" align-center wrap)
  | Show menu on:

  w-menu(left)
    template(#activator="{ on }")
      w-button.mx2(v-on="on") Left
    | Menu content
  w-menu(top)
    template(#activator="{ on }")
      w-button.mx2(v-on="on") Top
    | Menu content
  w-menu
    template(#activator="{ on }")
      w-button.mx2(v-on="on") Bottom
    | Menu content
  w-menu(right)
    template(#activator="{ on }")
      w-button(v-on="on") Right
    | Menu content`),mt=n(`<w-flex :gap="3" align-center wrap class="my12">
  Show menu on:

  <w-menu left>
    <template #activator="{ on }">
      <w-button v-on="on" class="mx2">
        Left
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu top>
    <template #activator="{ on }">
      <w-button v-on="on" class="mx2">
        Top
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu>
    <template #activator="{ on }">
      <w-button v-on="on" class="mx2">
        Bottom
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu right>
    <template #activator="{ on }">
      <w-button v-on="on">
        Right
      </w-button>
    </template>
    Menu content
  </w-menu>
</w-flex>
`),rt=n("Alignments"),dt=i("p",null,"In addition to positions, you can align the menu with its activator.",-1),pt=i("div",{class:"title4 mb2"},"Top position",-1),ht=n("Align left"),wt=n("Menu content"),_t=n("Centered"),vt=n("Menu content"),ft=n("Align right"),gt=n("Menu content"),bt=i("div",{class:"title4 mt6 mb2"},"Bottom position",-1),Mt=n("Align left"),xt=n("Menu content"),yt=n("Centered"),kt=n("Menu content"),St=n("Align right"),At=n("Menu content"),Ct=i("div",{class:"title4 mt6 mb2"},"Right position",-1),Tt=n("Align top"),It=n("Menu content"),Bt=n("Centered"),Lt=n("Menu content"),$t=n("Align bottom"),jt=n("Menu content"),Pt=i("div",{class:"title4 mt6 mb2"},"Left position",-1),Rt=n("Align top"),Vt=n("Menu content"),Ot=n("Centered"),Wt=n("Menu content"),Dt=n("Align bottom"),Et=n("Menu content"),Ut=n(`.title4.mb2 top position
w-menu(top align-left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align left
  | Menu content
w-menu(top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Menu content
w-menu(top align-right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align right
  | Menu content

.title4.mt6.mb2 Bottom position
w-menu(align-left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align left
  | Menu content
w-menu
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Menu content
w-menu(align-right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align right
  | Menu content

.title4.mt6.mb2 Right position
w-menu(right align-top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align top
  | Menu content
w-menu(right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Menu content
w-menu(right align-bottom)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align bottom
  | Menu content

.title4.mt6.mb2 Left position
w-menu(left align-top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align top
  | Menu content
w-menu(left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Menu content
w-menu(left align-bottom)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align bottom
  | Menu content`),Ht=n(`<div class="title4 mb2">Top position</div>
<w-menu top align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu top align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Menu content
</w-menu>

<div class="title4 mt6 mb2">Bottom position</div>
<w-menu align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Menu content
</w-menu>

<div class="title4 mt6 mb2">Right position</div>
<w-menu right align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align top
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu right align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">Alig
      n bottom
    </w-button>
  </template>
  Menu content
</w-menu>

<div class="title4 mt6 mb2">Left position</div>
<w-menu left align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">A
      lign top
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu left align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align bottom
    </w-button>
  </template>
  Menu content
</w-menu>
`),Nt=n("No position"),zt=i("p",null,[n(`By default, the menu is position at the bottom of the activator.
If you prefer to position the menu yourself via CSS, you can skip the position calculation via the
`),i("code",null,"no-position"),n(" prop.")],-1),Ft=n("Show menu"),qt=n("Menu content"),Yt=n(`w-menu(no-position)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Show menu
  | Menu content`),Gt=n(`<w-menu no-position>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>`),Jt=n(".w-menu {top: 10px;right: 20px;}"),Kt=n("External activator"),Qt=i("p",null,[n(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),i("br"),n(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),Xt=n("Trigger a menu on click of an external activator"),Zt=n("Meow!"),tn=n(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-menu(activator=".cat-button" arrow) Meow!`),nn=n(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-menu activator=".cat-button" arrow>
  Meow!
</w-menu>
`),en=n("Trigger the same menu from 2 different external activators"),on=i("p",{class:"text-italic"},"But do you really need that? ;)",-1),an=n(`data: () => ({
  activator: '.pet-button'
})
`),sn=n("Trigger the same menu on hover of 2 different external activators"),ln=i("p",{class:"text-italic"},"But do you really need that too? ;)",-1),cn=n(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`),un=n(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @mouseenter="activator = '.cat-button';menuContent = 'Meow!'"
  @mouseleave="activator = '.pet-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @mouseenter="activator = '.dog-button';menuContent = 'Woof!'"
  @mouseleave="activator = '.pet-button'")

w-menu(:activator="activator" arrow show-on-hover :delay="100")
  | `+h("{{ menuContent }}")),mn=n(`<w-button
  icon="mdi mdi-cat"
  xl
  class="pet-button cat-button ma4"
  @mouseenter="activator = '.cat-button';menuContent = 'Meow!'"
  @mouseleave="activator = '.pet-button'">
</w-button>
<w-button
  icon="mdi mdi-dog"
  xl
  class="pet-button dog-button ma4"
  @mouseenter="activator = '.dog-button';menuContent = 'Woof!'"
  @mouseleave="activator = '.pet-button'">
</w-button>

<w-menu
  :activator="activator"
  arrow
  show-on-hover
  :delay="100">
  `+h("{{ menuContent }}")+`
</w-menu>`),rn=n(`data: () => ({
  activator: '.pet-button',
  menuContent: ''
})
`),dn=n("Arrow (Tooltip style)"),pn=i("p",null,[n("Applies a tooltip style with the "),i("code",null,"arrow"),n(" option.")],-1),hn=n("Show menu"),wn=n("Menu content"),_n=n(`w-menu(arrow)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`),vn=n(`<w-menu arrow>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>
`),fn=n("Automatic arrow position"),gn=i("p",null,[n(`The following examples illustrate how the arrow is positioned on the different sides and
alignments that are applied.`),i("br"),n(`
The arrow position can also be overridden via CSS.
`)],-1),bn=n("Horizontal"),Mn=n("Top, align left"),xn=n("Menu content"),yn=n("Top, align center"),kn=n("Menu content"),Sn=n("Top, align right"),An=n("Menu content"),Cn=n("Bottom, align left"),Tn=n("Menu content"),In=n("Bottom, align center"),Bn=n("Menu content"),Ln=n("Bottom, align right"),$n=n("Menu content"),jn=n(`w-flex(justify-center)
  w-menu(arrow top align-left)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Top, align left
    | Menu content
  w-menu(arrow top)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Top, align center
    | Menu content
  w-menu(arrow top align-right)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Top, align right
    | Menu content
w-flex(justify-center)
  w-menu(arrow align-left)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Bottom, align left
    | Menu content
  w-menu(arrow)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Bottom, align center
    | Menu content
  w-menu(arrow align-right)
    template(#activator="{ on }")
      w-button.ma2(v-on="on") Bottom, align right
    | Menu content`),Pn=n(`<w-flex justify-center>
  <div class="title4 mb2">Top position</div>
  <w-menu arrow top align-left>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Top, align left
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu arrow top>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Top, align center
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu arrow top align-right>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Top, align right
      </w-button>
    </template>
    Menu content
  </w-menu>
</w-flex>

<w-flex justify-center>
  <div class="title4 mt6 mb2">Bottom position</div>
  <w-menu arrow align-left>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Bottom, align left
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu arrow>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Bottom, align center
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu arrow align-right>
    <template #activator="{ on }">
      <w-button class="ma1" v-on="on">
        Bottom, align right
      </w-button>
    </template>
    Menu content
  </w-menu>
</w-flex>
`),Rn=n("Vertical"),Vn=n("Left, align top"),On=n("Menu content"),Wn=n("Left, align center"),Dn=n("Menu content"),En=n("Left, align bottom"),Un=n("Menu content"),Hn=n("Right, align top"),Nn=n("Menu content"),zn=n("Right, align center"),Fn=n("Menu content"),qn=n("Right, align bottom"),Yn=n("Menu content"),Gn=n(`w-flex.text-center(justify-center)
  w-flex(column no-grow)
    w-menu(arrow left align-top)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Left, align top
      | Menu content
    w-menu(arrow left)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Left, align center
      | Menu content
    w-menu(arrow left align-bottom)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Left, align bottom
      | Menu content
  w-flex(column no-grow)
    w-menu(arrow right align-top)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Right, align top
      | Menu content
    w-menu(arrow right)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Right, align center
      | Menu content
    w-menu(arrow right align-bottom)
      template(#activator="{ on }")
        w-button.ma2(v-on="on") Right, align bottom
      | Menu content`),Jn=n(`<w-flex text-center justify-center>
  <w-flex column no-grow>
    <div class="title4 mb2">Top position</div>
    <w-menu arrow left align-top>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Left, align top
        </w-button>
      </template>
      Menu content
    </w-menu>

    <w-menu arrow left>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Left, align center
        </w-button>
      </template>
      Menu content
    </w-menu>

    <w-menu arrow left align-bottom>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Left, align bottom
        </w-button>
      </template>
      Menu content
    </w-menu>
  </w-flex>

  <w-flex column no-grow>
    <div class="title4 mt6 mb2">Bottom position</div>
    <w-menu arrow right align-top>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Right, align top
        </w-button>
      </template>
      Menu content
    </w-menu>

    <w-menu arrow right>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Right, align center
        </w-button>
      </template>
      Menu content
    </w-menu>

    <w-menu arrow right align-bottom>
      <template #activator="{ on }">
        <w-button class="ma1" v-on="on">
          Right, align bottom
        </w-button>
      </template>
      Menu content
    </w-menu>
  </w-flex>
</w-flex>
`),Kn=n("Color & background color"),Qn=i("p",null,[n("Like in most components, you can define a "),i("code",null,"color"),n(" and a  "),i("code",null,"bg-color"),n(".")],-1),Xn=n("Show a blue menu"),Zn=n("Menu content"),te=n(`w-menu(color="blue-dark2" bg-color="blue-light5")
  template(#activator="{ on }")
    w-button(v-on="on") Show a blue menu
  | Menu content`),ne=n(`<w-menu color="blue-dark2" bg-color="blue-light5">
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a blue menu
    </w-button>
  </template>
  Menu content
</w-menu>
`),ee=n("Tile, round and shadow"),oe=n("Show a tile menu"),ae=n("Menu content"),se=n("Show a round menu"),le=n("Menu content"),ie=n("Show a shadow menu"),ce=n("Menu content"),ue=n(`w-flex.my6(wrap :gap="3" justify-center)
  w-menu(tile)
    template(#activator="{ on }")
      w-button(v-on="on") Show a tile menu
    | Menu content
  w-menu(round)
    template(#activator="{ on }")
      w-button(v-on="on") Show a round menu
    | Menu content
  w-menu(shadow)
    template(#activator="{ on }")
      w-button(v-on="on") Show a shadow menu
    | Menu content`),me=n(`<w-flex wrap :gap="3"  justify-center class="my6">
  <w-menu tile>
    <template #activator="{ on }">
      <w-button v-on="on">
        Show a tile menu
      </w-button>
    </template>
    Menu content
    </template>
  </w-menu>

  <w-menu round>
    <template #activator="{ on }">
      <w-button v-on="on">
        Show a round menu
      </w-button>
    </template>
    Menu content
    </template>
  </w-menu>

  <w-menu shadow>
    <template #activator="{ on }">
      <w-button v-on="on">
        Show a shadow menu
      </w-button>
    </template>
    Menu content
    </template>
  </w-menu>
</w-flex>
`),re=n("Menu content: w-card"),de=i("p",null,"By default the menu is a w-card, so it accepts all the props of a w-card.",-1),pe=n("Show a w-card menu"),he=i("div",{class:"title4"},"How much do you like Wave UI?",-1),we=i("p",null,"Pick a serious answer.",-1),_e=n("Love it!"),ve=n("Love it!"),fe=n("Love it!"),ge=n("Show a custom menu"),be=i("div",{class:"title3 ma0"},"Menu Title",-1),Me=i("div",{class:"spacer"},null,-1),xe=i("span",{class:"ml1"},"Item 1",-1),ye=i("span",{class:"ml1"},"Item 2",-1),ke=i("div",{class:"pa3"},"This is some content in a w-card component.",-1),Se=n(`w-menu(shadow v-model="showMenu")
  template(#activator)
    w-button.mr3(@click="showMenu = true") Show a w-card menu
  .title4 How much do you like Wave UI?
  p Pick a serious answer.
  w-flex.pl10.mt4(wrap justify-end)
    w-button.mr1(text color="green" @click="showMenu = false") Love it!
    w-button.mr1(text color="green" @click="showMenu = false") Love it!
    w-button(text color="green" @click="showMenu = false") Love it!
w-menu(shadow custom)
  template(#activator="{ on }")
    w-button(v-on="on") Show a custom menu
  w-card(content-class="pa0")
    w-toolbar
      .title3.ma0 Menu Title
      .spacer
      span.ml1 Item 1
      span.ml1 Item 2
    .pa3 This is some content in a w-card component.`),Ae=n(`<w-menu shadow v-model="showMenu">
  <template #activator>
    <w-button
      class="mr3"
      @click="showMenu = true">
      Show a w-card menu
    </w-button>
  </template>

  <div class="title4">
    How much do you like Wave UI?
  </div>

  <p>Pick a serious answer.</p>

  <w-flex class="pl10 mt4" wrap justify-end>
    <w-button
      class="mr1"
      text
      color="green"
      @click="showMenu = false">
      Love it!
    </w-button>

    <w-button
      class="mr1"
      text
      color="green"
      @click="showMenu = false">
      Love it!
    </w-button>

    <w-button
      text
      color="green"
      @click="showMenu = false">
      Love it!
    </w-button>
  </w-flex>
</w-menu>

<w-menu shadow custom>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a custom menu
    </w-button>
  </template>

  <w-card content-class="pa0">
    <w-toolbar>
      <div class="title3 ma0">Menu Title</div>
      <div class="spacer"></div>
      <span class="ml1">Item 1</span>
      <span class="ml1">Item 2</span>
    </w-toolbar>

    <div class="pa3">
      This is some content in a w-card component.
    </div>
  </w-card>
</w-menu>`),Ce=n(`data: () => ({
  showMenu: false
})
`),Te=n("Custom content: List menu"),Ie=i("p",null,[n("By default the menu is a "),i("strong",{class:"code"},"w-card"),n(`. But if you need more flexibility, you can set the
`),i("code",null,"custom"),n(" prop and put whatever you want in the free-of-style menu."),i("br"),n(`
In this example, the menu is `),i("code",null,"persistent"),n(` so the user is forced to select an option from
the menu when open. Then on click of an option, the menu will hide thanks to the option
`),i("code",null,"hide-on-menu-click"),n(".")],-1),Be=n("Show a list menu"),Le={class:"mt4"},$e=i("strong",null,"Current selection:",-1),je={class:"ml1"},Pe=n(`w-menu(custom hide-on-menu-click persistent shadow)
  template(#activator="{ on }")
    w-button(v-on="on") Show a list menu
  w-list.white--bg(
    v-model="listSelection"
    :items="listItems"
    item-class="px8")
div.mt4
  strong Current selection:
  code.ml1 `+h("{{ listSelection || 'none' }}")),Re=n(`<w-menu
  custom
  hide-on-menu-click
  persistent
  shadow>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a list menu
    </w-button>
  </template>

  <w-list
    class="white--bg"
    v-model="listSelection"
    :items="listItems"
    item-class="px8">
  </w-list>
</w-menu>

<div class="mt4">
  <strong>Current selection:</strong>
  <code class="ml1">`+h("{{ listSelection || 'none' }}")+`</code>
</div>`),Ve=n(`data: () => ({
  showMenu: false,
  listSelection: null,
  listItems: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`),Oe=n("Menu with overlay"),We=n("Show a menu & overlay"),De=n(`w-menu(v-model="showMenu" shadow custom overlay)
  template(#activator="{ on }")
    w-button(v-on="on") Show a menu & overlay
  w-list.white--bg(
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false")`),Ee=n(`<w-menu v-model="showMenu" shadow custom overlay>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a menu & overlay
    </w-button>
  </template>

  <w-list
    class="white--bg"
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false">
  </w-list>
</w-menu>`),Ue=n(`data: () => ({
  showMenu: false,
  listItems: [
    { label: 'Item 1', route: '#item1' },
    { label: 'Item 2', route: '#item2' },
    { label: 'Item 3', route: '#item3' }
  ]
})`);function He(m,u,b,M,x,_){const r=p("title-link"),a=p("w-button"),s=p("w-menu"),d=p("example"),w=p("w-flex"),S=p("alert"),A=p("w-toolbar"),C=p("w-card"),y=p("w-list");return v(),f("div",null,[e(r,{h2:""},{default:t(()=>[T]),_:1}),e(d,{class:"example1","content-class":"text-center pt5","app-props-string":"align-center"},{pug:t(()=>[L]),html:t(()=>[$]),default:t(()=>[e(s,{"append-to":".example1"},{activator:t(({on:o})=>[e(a,l(o),{default:t(()=>[I]),_:2},1040)]),default:t(()=>[B]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[j]),_:1}),e(d,{class:"example2","content-class":"pt5"},{pug:t(()=>[D]),html:t(()=>[E]),default:t(()=>[P,e(s,{"append-to":".example2"},{activator:t(({on:o})=>[e(a,c({class:"mx3"},l(o)),{default:t(()=>[R]),_:2},1040)]),default:t(()=>[V]),_:1}),e(s,{"append-to":".example2","show-on-hover":""},{activator:t(({on:o})=>[e(a,l(o),{default:t(()=>[O]),_:2},1040)]),default:t(()=>[W]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[U]),_:1}),H,e(d,{class:"example3","content-class":"text-center pt5","app-props-string":"align-center"},{pug:t(()=>[F]),html:t(()=>[q]),default:t(()=>[e(s,{"append-to":".example3",persistent:""},{activator:t(({on:o})=>[e(a,c({class:"mb2 mr3"},l(o)),{default:t(()=>[N]),_:2},1040)]),default:t(()=>[z]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[Y]),_:1}),G,e(d,{class:"example4","content-class":"text-center pt5","app-props-string":"align-center"},{pug:t(()=>[Q]),html:t(()=>[X]),default:t(()=>[e(s,{"append-to":".example4","hide-on-menu-click":""},{activator:t(({on:o})=>[e(a,l(o),{default:t(()=>[J]),_:2},1040)]),default:t(()=>[K]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[Z]),_:1}),e(d,{class:"example5"},{pug:t(()=>[ut]),html:t(()=>[mt]),default:t(()=>[e(w,{class:"my6",gap:3,"align-center":"",wrap:""},{default:t(()=>[tt,e(s,{"append-to":".example5",left:""},{activator:t(({on:o})=>[e(a,c({class:"mx2"},l(o)),{default:t(()=>[nt]),_:2},1040)]),default:t(()=>[et]),_:1}),e(s,{"append-to":".example5",top:""},{activator:t(({on:o})=>[e(a,c({class:"mx2"},l(o)),{default:t(()=>[ot]),_:2},1040)]),default:t(()=>[at]),_:1}),e(s,{"append-to":".example5"},{activator:t(({on:o})=>[e(a,c({class:"mx2"},l(o)),{default:t(()=>[st]),_:2},1040)]),default:t(()=>[lt]),_:1}),e(s,{"append-to":".example5",right:""},{activator:t(({on:o})=>[e(a,l(o),{default:t(()=>[it]),_:2},1040)]),default:t(()=>[ct]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[rt]),_:1}),dt,e(d,{class:"example6"},{pug:t(()=>[Ut]),html:t(()=>[Ht]),default:t(()=>[pt,e(s,{"append-to":".example6",top:"","align-left":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[ht]),_:2},1040)]),default:t(()=>[wt]),_:1}),e(s,{"append-to":".example6",top:""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[_t]),_:2},1040)]),default:t(()=>[vt]),_:1}),e(s,{"append-to":".example6",top:"","align-right":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[ft]),_:2},1040)]),default:t(()=>[gt]),_:1}),bt,e(s,{"append-to":".example6","align-left":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[Mt]),_:2},1040)]),default:t(()=>[xt]),_:1}),e(s,{"append-to":".example6"},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[yt]),_:2},1040)]),default:t(()=>[kt]),_:1}),e(s,{"append-to":".example6","align-right":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[St]),_:2},1040)]),default:t(()=>[At]),_:1}),Ct,e(s,{"append-to":".example6",right:"","align-top":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[Tt]),_:2},1040)]),default:t(()=>[It]),_:1}),e(s,{"append-to":".example6",right:""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[Bt]),_:2},1040)]),default:t(()=>[Lt]),_:1}),e(s,{"append-to":".example6",right:"","align-bottom":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[$t]),_:2},1040)]),default:t(()=>[jt]),_:1}),Pt,e(s,{"append-to":".example6",left:"","align-top":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[Rt]),_:2},1040)]),default:t(()=>[Vt]),_:1}),e(s,{"append-to":".example6",left:""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[Ot]),_:2},1040)]),default:t(()=>[Wt]),_:1}),e(s,{"append-to":".example6",left:"","align-bottom":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[Dt]),_:2},1040)]),default:t(()=>[Et]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[Nt]),_:1}),zt,e(d,{class:"example7","content-class":"pb12"},{pug:t(()=>[Yt]),html:t(()=>[Gt]),css:t(()=>[Jt]),default:t(()=>[e(s,{"append-to":".example7 .example__render","no-position":""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[Ft]),_:2},1040)]),default:t(()=>[qt]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[Kt]),_:1}),Qt,e(r,{h3:"",slug:"external-activator--basic"},{default:t(()=>[Xt]),_:1}),e(d,{class:"example14","content-class":"text-center my4","app-props-string":"text-center"},{pug:t(()=>[tn]),html:t(()=>[nn]),default:t(()=>[e(a,{class:"cat-button",icon:"mdi mdi-cat",xl:""}),e(s,{"append-to":".example14",activator:".cat-button",arrow:""},{default:t(()=>[Zt]),_:1})]),_:1}),e(r,{h3:"",slug:"external-activator--2-activators"},{default:t(()=>[en]),_:1}),on,e(d,{class:"example15","content-class":"text-center my4","app-props-string":"block text-center"},{pug:t(()=>[n(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @click="activator = '.cat-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @click="activator = '.dog-button'")

w-menu(:activator="activator" arrow)
  | `+h("{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}"),1)]),html:t(()=>[n(`<w-button
  icon="mdi mdi-cat"
  xl
  class="pet-button cat-button ma4"
  @click="activator = '.cat-button'">
</w-button>
<w-button
  icon="mdi mdi-dog"
  xl
  class="pet-button dog-button ma4"
  @click="activator = '.dog-button'">
</w-button>

<w-menu :activator="activator" arrow>
  `+h("{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}")+`
</w-menu>`,1)]),js:t(()=>[an]),default:t(()=>[e(a,{class:"pet-button cat-button2 ma4",icon:"mdi mdi-cat",xl:"",onClick:u[0]||(u[0]=o=>m.activator1=".cat-button2")}),e(a,{class:"pet-button dog-button2 ma4",icon:"mdi mdi-dog",xl:"",onClick:u[1]||(u[1]=o=>m.activator1=".dog-button2")}),e(s,{"append-to":".example15",activator:m.activator1,arrow:""},{default:t(()=>[n(h(m.activator1.includes("dog")?"Woof!":"Meow!"),1)]),_:1},8,["activator"])]),_:1}),e(r,{h3:"",slug:"external-activator--2-activators-on-hover"},{default:t(()=>[sn]),_:1}),ln,e(S,{tip:""},{default:t(()=>[cn]),_:1}),e(d,{class:"example16","content-class":"text-center my4","app-props-string":"block text-center"},{pug:t(()=>[un]),html:t(()=>[mn]),js:t(()=>[rn]),default:t(()=>[e(a,{class:"pet-button2 cat-button3 ma4",icon:"mdi mdi-cat",xl:"",onMouseenter:u[2]||(u[2]=o=>{m.activator2=".cat-button3",m.menuContent="Meow!"}),onMouseleave:u[3]||(u[3]=o=>m.activator2=".pet-button2")}),e(a,{class:"pet-button2 dog-button3 ma4",icon:"mdi mdi-dog",xl:"",onMouseenter:u[4]||(u[4]=o=>{m.activator2=".dog-button3",m.menuContent="Woof!"}),onMouseleave:u[5]||(u[5]=o=>m.activator2=".pet-button2")}),e(s,{"append-to":".example16",activator:m.activator2,arrow:"","show-on-hover":"",delay:100},{default:t(()=>[n(h(m.menuContent),1)]),_:1},8,["activator"])]),_:1}),e(r,{h2:""},{default:t(()=>[dn]),_:1}),pn,e(d,{class:"example13","content-class":"text-center my4","app-props-string":"align-center"},{pug:t(()=>[_n]),html:t(()=>[vn]),default:t(()=>[e(s,{"append-to":".example13",arrow:""},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[hn]),_:2},1040)]),default:t(()=>[wn]),_:1})]),_:1}),e(r,{h3:""},{default:t(()=>[fn]),_:1}),gn,e(r,{h4:""},{default:t(()=>[bn]),_:1}),e(d,null,{pug:t(()=>[jn]),html:t(()=>[Pn]),default:t(()=>[e(w,{"justify-center":""},{default:t(()=>[e(s,{arrow:"",top:"","align-left":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[Mn]),_:2},1040)]),default:t(()=>[xn]),_:1}),e(s,{arrow:"",top:""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[yn]),_:2},1040)]),default:t(()=>[kn]),_:1}),e(s,{arrow:"",top:"","align-right":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[Sn]),_:2},1040)]),default:t(()=>[An]),_:1})]),_:1}),e(w,{"justify-center":""},{default:t(()=>[e(s,{arrow:"","align-left":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[Cn]),_:2},1040)]),default:t(()=>[Tn]),_:1}),e(s,{arrow:""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[In]),_:2},1040)]),default:t(()=>[Bn]),_:1}),e(s,{arrow:"","align-right":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[Ln]),_:2},1040)]),default:t(()=>[$n]),_:1})]),_:1})]),_:1}),e(r,{h4:""},{default:t(()=>[Rn]),_:1}),e(d,null,{pug:t(()=>[Gn]),html:t(()=>[Jn]),default:t(()=>[e(w,{class:"text-center","justify-center":""},{default:t(()=>[e(w,{column:"","no-grow":""},{default:t(()=>[e(s,{arrow:"",left:"","align-top":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[Vn]),_:2},1040)]),default:t(()=>[On]),_:1}),e(s,{arrow:"",left:""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[Wn]),_:2},1040)]),default:t(()=>[Dn]),_:1}),e(s,{arrow:"",left:"","align-bottom":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[En]),_:2},1040)]),default:t(()=>[Un]),_:1})]),_:1}),e(w,{column:"","no-grow":""},{default:t(()=>[e(s,{arrow:"",right:"","align-top":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[Hn]),_:2},1040)]),default:t(()=>[Nn]),_:1}),e(s,{arrow:"",right:""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[zn]),_:2},1040)]),default:t(()=>[Fn]),_:1}),e(s,{arrow:"",right:"","align-bottom":""},{activator:t(({on:o})=>[e(a,c({class:"ma2"},l(o)),{default:t(()=>[qn]),_:2},1040)]),default:t(()=>[Yn]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[Kn]),_:1}),Qn,e(d,{class:"example8","content-class":"text-center my4","app-props-string":"align-center"},{pug:t(()=>[te]),html:t(()=>[ne]),default:t(()=>[e(s,{"append-to":".example8",color:"blue-dark2","bg-color":"blue-light5"},{activator:t(({on:o})=>[e(a,c({class:"ma1"},l(o)),{default:t(()=>[Xn]),_:2},1040)]),default:t(()=>[Zn]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[ee]),_:1}),e(d,{class:"example9"},{pug:t(()=>[ue]),html:t(()=>[me]),default:t(()=>[e(w,{class:"my6",wrap:"","justify-center":"",gap:3},{default:t(()=>[e(s,{"append-to":".example9",tile:""},{activator:t(({on:o})=>[e(a,c({class:"mt1"},l(o)),{default:t(()=>[oe]),_:2},1040)]),default:t(()=>[ae]),_:1}),e(s,{"append-to":".example9",round:""},{activator:t(({on:o})=>[e(a,c({class:"mt1"},l(o)),{default:t(()=>[se]),_:2},1040)]),default:t(()=>[le]),_:1}),e(s,{"append-to":".example9",shadow:""},{activator:t(({on:o})=>[e(a,c({class:"mt1"},l(o)),{default:t(()=>[ie]),_:2},1040)]),default:t(()=>[ce]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[re]),_:1}),de,e(d,{class:"example10","content-class":"text-center my4","app-props-string":"align-center"},{pug:t(()=>[Se]),html:t(()=>[Ae]),js:t(()=>[Ce]),default:t(()=>[e(s,{"append-to":".example10",shadow:"",modelValue:m.showMenu,"onUpdate:modelValue":u[10]||(u[10]=o=>m.showMenu=o)},{activator:t(()=>[e(a,{class:"mr3 mb2",onClick:u[6]||(u[6]=o=>m.showMenu=!0)},{default:t(()=>[pe]),_:1})]),default:t(()=>[he,we,e(w,{class:"pl10 mt4",wrap:"","justify-end":""},{default:t(()=>[e(a,{class:"mr1",text:"",color:"green",onClick:u[7]||(u[7]=o=>m.showMenu=!1)},{default:t(()=>[_e]),_:1}),e(a,{class:"mr1",text:"",color:"green",onClick:u[8]||(u[8]=o=>m.showMenu=!1)},{default:t(()=>[ve]),_:1}),e(a,{text:"",color:"green",onClick:u[9]||(u[9]=o=>m.showMenu=!1)},{default:t(()=>[fe]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(s,{"append-to":".example10",shadow:"",custom:""},{activator:t(({on:o})=>[e(a,c({class:"mb2"},l(o)),{default:t(()=>[ge]),_:2},1040)]),default:t(()=>[e(C,{class:"white--bg","content-class":"pa0"},{default:t(()=>[e(A,null,{default:t(()=>[be,Me,xe,ye]),_:1}),ke]),_:1})]),_:1})]),_:1}),e(r,{h2:""},{default:t(()=>[Te]),_:1}),Ie,e(d,{class:"example11","content-class":"text-center my4","app-props-string":"align-center"},{pug:t(()=>[Pe]),html:t(()=>[Re]),js:t(()=>[Ve]),default:t(()=>[e(s,{"append-to":".example11",custom:"","hide-on-menu-click":"",persistent:"",shadow:""},{activator:t(({on:o})=>[e(a,l(o),{default:t(()=>[Be]),_:2},1040)]),default:t(()=>[e(y,{class:"white--bg",modelValue:m.list,"onUpdate:modelValue":u[11]||(u[11]=o=>m.list=o),items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],"item-class":"px8"},null,8,["modelValue"])]),_:1}),i("div",Le,[$e,i("code",je,h(m.list||"none"),1)])]),_:1}),e(r,{h2:""},{default:t(()=>[Oe]),_:1}),e(d,{class:"example12","content-class":"text-center my4","app-props-string":"align-center"},{pug:t(()=>[De]),html:t(()=>[Ee]),js:t(()=>[Ue]),default:t(()=>[e(s,{"append-to":".example12",modelValue:m.showListMenu2,"onUpdate:modelValue":u[13]||(u[13]=o=>m.showListMenu2=o),shadow:"",custom:"",overlay:""},{activator:t(({on:o})=>[e(a,l(o),{default:t(()=>[We]),_:2},1040)]),default:t(()=>[e(y,{class:"white--bg",nav:"",items:[{label:"Item 1",route:"#item1"},{label:"Item 2",route:"#item2"},{label:"Item 3",route:"#item3"}],"item-class":"px8",onItemSelect:u[12]||(u[12]=o=>m.showListMenu2=!1)})]),_:1},8,["modelValue"])]),_:1})])}const Ne={data:()=>({showMenu:!1,showListMenu1:!1,showListMenu2:!1,activator1:".pet-button",activator2:".pet-button2",menuContent:"",list:null})};var ze=g(Ne,[["render",He]]);const Fe=i("div",{class:"w-divider my12"},null,-1),qe=n("API");function Ye(m,u,b,M,x,_){const r=p("title-link"),a=p("component-api");return v(),f("div",null,[Fe,e(r,{class:"title1",h2:""},{default:t(()=>[qe]),_:1}),e(a,{class:"mt0",items:_.props,descriptions:m.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(a,{items:m.slots,title:"Slots"},null,8,["items"]),e(a,{items:_.events,title:"Events"},null,8,["items"])])}const Ge={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.',showOnHover:"Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.",hideOnMenuClick:"Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.",color:`Applies a color to the menu's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the menu's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the menu element.",custom:'By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to <code>true</code>.',tile:"Removes the default border-radius and sets sharp edges on the menu.",round:"Sets a maximum border-radius on the corners of the menu, giving it a round look.",arrow:"Adds a small triangle on the edge of the menu, pointing toward the activator.",noBorder:"Removes the default border from the menu element.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',menuClass:"Provide custom CSS classes for the menu element.",titleClass:"Provide custom CSS classes for the menu's title when using the default card layout (when not using the <code>custom</code> prop).",contentClass:"Provide custom CSS classes for the menu's content when using the default card layout (when not using the <code>custom</code> prop).",appendTo:'Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, <span class="code">.w-app</span> will be the target.<br>The default root is the <span class="code">w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',noPosition:"Skip the menu positioning calculation, if you prefer to set it via CSS. Setting this prop to <code>true</code> will also disable the side positioning (top, left, right, bottom) and the alignments.",fixed:"Sets the CSS position of the menu to <code>fixed</code> (absolute by default).",top:"Places the menu at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the menu at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the menu at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",alignTop:"Aligns the top of the menu with the top of the activator.",alignBottom:"Aligns the bottom of the menu with the bottom of the activator.",alignLeft:"Aligns the left side of the menu with the left side of the activator.",alignRight:"Aligns the right side of the menu with the right side of the activator.",zIndex:"Applies a z-index (positive or negative integer) to the menu.",minWidth:"Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",overlay:'Displays a full screen overlay underneath the menu (uses the <span class="code">w-overlay</span> component).',overlayClass:'Provide custom CSS classes for the <span class="code">w-overlay</span> component.',overlayProps:'An object of props to pass down to the <span class="code">w-overlay</span> component for more control.',persistent:"When set to <code>true</code>, clicking outside of the menu will not close the menu.",activator:"Allows you to define one or multiple external activators for the menu through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the menu from different activators.",delay:"A delay - in milliseconds - before opening the menu.<br>A small delay may help the menu position computing if the menu content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same menu with different content."},Je={activator:{description:'<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},title:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The menu content."},actions:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},Ke={input:"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on menu close.",open:"Emitted on menu open."},Qe={data:()=>({propsDescs:Ge,slots:Je}),computed:{props(){return k.props},events(){return k.emits.reduce((m,u)=>(m[u]={description:Ke[u]||""})&&m,{})}}};var Xe=g(Qe,[["render",Ye]]);const Ze=n("w-menu");function to(m,u,b,M,x,_){const r=p("ui-component-title"),a=p("examples"),s=p("api");return v(),f("main",null,[e(r,null,{default:t(()=>[Ze]),_:1}),e(a),e(s)])}const no={components:{Examples:ze,Api:Xe}};var oo=g(no,[["render",to]]);export{oo as default};
