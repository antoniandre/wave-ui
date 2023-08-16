import{n as s,v as i}from"./index.e31dd236.js";var c=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("title-link",{attrs:{h2:""}},[t._v("Basic")]),n("example",{staticClass:"example1",attrs:{"content-class":"text-center pt5","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-menu
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-menu>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show menu on click
    </w-button>
  </template>
  Menu content
</w-menu>
`)]},proxy:!0}])},[n("w-menu",{attrs:{"append-to":".example1"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({},o),[t._v("Show menu")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("Show on click or on hover")]),n("example",{staticClass:"example2",attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`| Show menu

w-menu
  template(#activator="{ on }")
    w-button.mx3(v-on="on") On click
  | Menu content

w-menu(show-on-hover)
  template(#activator="{ on }")
    w-button(v-on="on") On hover
  | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`Show menu:

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
`)]},proxy:!0}])},[t._v("Show menu:"),n("w-menu",{attrs:{"append-to":".example2"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mx3"},o),[t._v("On click")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example2","show-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({},o),[t._v("On hover")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("Persistent menu")]),t._m(0),n("example",{staticClass:"example3",attrs:{"content-class":"text-center pt5","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-menu(persistent)
  template(#activator="{ on }")
    w-button.mb2.mr3(v-on="on") Show persistent menu
  | Click on the button again to close`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-menu persistent>
  <template #activator="{ on }">
    <w-button v-on="on" class="mr3">
      Show persistent menu
    </w-button>
  </template>
  Click on the button again to close
</w-menu>
`)]},proxy:!0}])},[n("w-menu",{attrs:{"append-to":".example3",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2 mr3"},o),[t._v("Show persistent menu")])]}}])},[t._v("Click on the button again to close")])],1),n("title-link",{attrs:{h2:""}},[t._v("Hide menu on click inside")]),n("p",[t._v("A click inside the menu will close it.")]),n("example",{staticClass:"example4",attrs:{"content-class":"text-center pt5","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-menu(hide-on-menu-click)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | A click here will close the menu.`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-menu hide-on-menu-click>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  A click here will close the menu.
</w-menu>
`)]},proxy:!0}])},[n("w-menu",{attrs:{"append-to":".example4","hide-on-menu-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({},o),[t._v("Show menu")])]}}])},[t._v("A click here will close the menu.")])],1),n("title-link",{attrs:{h2:""}},[t._v("Position")]),n("example",{staticClass:"example5",scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex.my12(:gap="3" align-center wrap)
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
    | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex :gap="3" align-center wrap class="my12">
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
`)]},proxy:!0}])},[n("w-flex",{staticClass:"my6",attrs:{gap:3,"align-center":"",wrap:""}},[t._v("Show menu on:"),n("w-menu",{attrs:{"append-to":".example5",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mx2"},o),[t._v("Left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example5",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mx2"},o),[t._v("Top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example5"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mx2"},o),[t._v("Bottom")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example5",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({},o),[t._v("Right")])]}}])},[t._v("Menu content")])],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Alignments")]),n("p",[t._v("In addition to positions, you can align the menu with its activator.")]),n("example",{staticClass:"example6",scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.title4.mb2 top position
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
  | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="title4 mb2">Top position</div>
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
`)]},proxy:!0}])},[n("div",{staticClass:"title4 mb2"},[t._v("Top position")]),n("w-menu",{attrs:{"append-to":".example6",top:"","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example6",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example6",top:"","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),n("div",{staticClass:"title4 mt6 mb2"},[t._v("Bottom position")]),n("w-menu",{attrs:{"append-to":".example6","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example6"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example6","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),n("div",{staticClass:"title4 mt6 mb2"},[t._v("Right position")]),n("w-menu",{attrs:{"append-to":".example6",right:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example6",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example6",right:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")]),n("div",{staticClass:"title4 mt6 mb2"},[t._v("Left position")]),n("w-menu",{attrs:{"append-to":".example6",left:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example6",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example6",left:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("No position")]),t._m(1),n("example",{staticClass:"example7",attrs:{"content-class":"pb12"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-menu(no-position)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Show menu
  | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-menu no-position>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(".w-menu {top: 10px;right: 20px;}")]},proxy:!0}])},[n("w-menu",{attrs:{"append-to":".example7 .example__render","no-position":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Show menu")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("External activator")]),t._m(2),n("title-link",{attrs:{h3:"",slug:"external-activator--basic"}},[t._v("Trigger a menu on click of an external activator")]),n("example",{staticClass:"example14",attrs:{"content-class":"text-center my4","app-props-string":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-menu(activator=".cat-button" arrow) Meow!`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-menu activator=".cat-button" arrow>
  Meow!
</w-menu>
`)]},proxy:!0}])},[n("w-button",{staticClass:"cat-button",attrs:{icon:"mdi mdi-cat",xl:""}}),n("w-menu",{attrs:{"append-to":".example14",activator:".cat-button",arrow:""}},[t._v("Meow!")])],1),n("title-link",{attrs:{h3:"",slug:"external-activator--2-activators"}},[t._v("Trigger the same menu from 2 different external activators")]),n("p",{staticClass:"text-italic"},[t._v("But do you really need that? ;)")]),n("example",{staticClass:"example15",attrs:{"content-class":"text-center my4","app-props-string":"block text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @click="activator = '.cat-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @click="activator = '.dog-button'")

w-menu(:activator="activator" arrow)
  | `+t._s("{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button
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
  `+t._s("{{ activator.includes('dog') ? 'Woof!' : 'Meow!' }}")+`
</w-menu>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  activator: '.pet-button'
})
`)]},proxy:!0}])},[n("w-button",{staticClass:"pet-button cat-button2 ma4",attrs:{icon:"mdi mdi-cat",xl:""},on:{click:function(e){t.activator1=".cat-button2"}}}),n("w-button",{staticClass:"pet-button dog-button2 ma4",attrs:{icon:"mdi mdi-dog",xl:""},on:{click:function(e){t.activator1=".dog-button2"}}}),n("w-menu",{attrs:{"append-to":".example15",activator:t.activator1,arrow:""}},[t._v(t._s(t.activator1.includes("dog")?"Woof!":"Meow!"))])],1),n("title-link",{attrs:{h3:"",slug:"external-activator--2-activators-on-hover"}},[t._v("Trigger the same menu on hover of 2 different external activators")]),n("p",{staticClass:"text-italic"},[t._v("But do you really need that too? ;)")]),n("alert",{attrs:{tip:""}},[t._v(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`)]),n("example",{staticClass:"example16",attrs:{"content-class":"text-center my4","app-props-string":"block text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-button.pet-button.cat-button.ma4(
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
  | `+t._s("{{ menuContent }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button
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
  `+t._s("{{ menuContent }}")+`
</w-menu>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  activator: '.pet-button',
  menuContent: ''
})
`)]},proxy:!0}])},[n("w-button",{staticClass:"pet-button2 cat-button3 ma4",attrs:{icon:"mdi mdi-cat",xl:""},on:{mouseenter:function(e){t.activator2=".cat-button3",t.menuContent="Meow!"},mouseleave:function(e){t.activator2=".pet-button2"}}}),n("w-button",{staticClass:"pet-button2 dog-button3 ma4",attrs:{icon:"mdi mdi-dog",xl:""},on:{mouseenter:function(e){t.activator2=".dog-button3",t.menuContent="Woof!"},mouseleave:function(e){t.activator2=".pet-button2"}}}),n("w-menu",{attrs:{"append-to":".example16",activator:t.activator2,arrow:"","show-on-hover":"",delay:100}},[t._v(t._s(t.menuContent))])],1),n("title-link",{attrs:{h2:""}},[t._v("Arrow (Tooltip style)")]),t._m(3),n("example",{staticClass:"example13",attrs:{"content-class":"text-center my4","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-menu(arrow)
  template(#activator="{ on }")
    w-button(v-on="on") Show menu
  | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-menu arrow>
  <template #activator="{ on }">
    <w-button v-on="on">
      Show menu
    </w-button>
  </template>
  Menu content
</w-menu>
`)]},proxy:!0}])},[n("w-menu",{attrs:{"append-to":".example13",arrow:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Show menu")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h3:""}},[t._v("Automatic arrow position")]),t._m(4),n("title-link",{attrs:{h4:""}},[t._v("Horizontal")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex(justify-center)
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
    | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex justify-center>
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
`)]},proxy:!0}])},[n("w-flex",{attrs:{"justify-center":""}},[n("w-menu",{attrs:{arrow:"",top:"","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Top, align left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{arrow:"",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Top, align center")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{arrow:"",top:"","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Top, align right")])]}}])},[t._v("Menu content")])],1),n("w-flex",{attrs:{"justify-center":""}},[n("w-menu",{attrs:{arrow:"","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Bottom, align left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{arrow:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Bottom, align center")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{arrow:"","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Bottom, align right")])]}}])},[t._v("Menu content")])],1)],1),n("title-link",{attrs:{h4:""}},[t._v("Vertical")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex.text-center(justify-center)
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
      | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex text-center justify-center>
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
`)]},proxy:!0}])},[n("w-flex",{staticClass:"text-center",attrs:{"justify-center":""}},[n("w-flex",{attrs:{column:"","no-grow":""}},[n("w-menu",{attrs:{arrow:"",left:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Left, align top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{arrow:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Left, align center")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{arrow:"",left:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Left, align bottom")])]}}])},[t._v("Menu content")])],1),n("w-flex",{attrs:{column:"","no-grow":""}},[n("w-menu",{attrs:{arrow:"",right:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Right, align top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{arrow:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Right, align center")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{arrow:"",right:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma2"},o),[t._v("Right, align bottom")])]}}])},[t._v("Menu content")])],1)],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Color & background color")]),t._m(5),n("example",{staticClass:"example8",attrs:{"content-class":"text-center my4","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-menu(color="blue-dark2" bg-color="blue-light5")
  template(#activator="{ on }")
    w-button(v-on="on") Show a blue menu
  | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-menu color="blue-dark2" bg-color="blue-light5">
  <template #activator="{ on }">
    <w-button v-on="on">
      Show a blue menu
    </w-button>
  </template>
  Menu content
</w-menu>
`)]},proxy:!0}])},[n("w-menu",{attrs:{"append-to":".example8",color:"blue-dark2","bg-color":"blue-light5"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1"},o),[t._v("Show a blue menu")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),n("example",{staticClass:"example9",scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-flex.my6(wrap :gap="3" justify-center)
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
    | Menu content`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-flex wrap :gap="3"  justify-center class="my6">
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
`)]},proxy:!0}])},[n("w-flex",{staticClass:"my6",attrs:{wrap:"","justify-center":"",gap:3}},[n("w-menu",{attrs:{"append-to":".example9",tile:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mt1"},o),[t._v("Show a tile menu")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example9",round:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mt1"},o),[t._v("Show a round menu")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"append-to":".example9",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mt1"},o),[t._v("Show a shadow menu")])]}}])},[t._v("Menu content")])],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Menu content: w-card")]),n("p",[t._v("By default the menu is a w-card, so it accepts all the props of a w-card.")]),n("example",{staticClass:"example10",attrs:{"content-class":"text-center my4","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-menu(shadow v-model="showMenu")
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
    .pa3 This is some content in a w-card component.`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-menu shadow v-model="showMenu">
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
</w-menu>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showMenu: false
})
`)]},proxy:!0}])},[n("w-menu",{attrs:{"append-to":".example10",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("w-button",{staticClass:"mr3 mb2",on:{click:function(e){t.showMenu=!0}}},[t._v("Show a w-card menu")])]},proxy:!0}]),model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[n("div",{staticClass:"title4"},[t._v("How much do you like Wave UI?")]),n("p",[t._v("Pick a serious answer.")]),n("w-flex",{staticClass:"pl10 mt4",attrs:{wrap:"","justify-end":""}},[n("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(e){t.showMenu=!1}}},[t._v("Love it!")]),n("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(e){t.showMenu=!1}}},[t._v("Love it!")]),n("w-button",{attrs:{text:"",color:"green"},on:{click:function(e){t.showMenu=!1}}},[t._v("Love it!")])],1)],1),n("w-menu",{attrs:{"append-to":".example10",shadow:"",custom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2"},o),[t._v("Show a custom menu")])]}}])},[n("w-card",{staticClass:"white--bg",attrs:{"content-class":"pa0"}},[n("w-toolbar",[n("div",{staticClass:"title3 ma0"},[t._v("Menu Title")]),n("div",{staticClass:"spacer"}),n("span",{staticClass:"ml1"},[t._v("Item 1")]),n("span",{staticClass:"ml1"},[t._v("Item 2")])]),n("div",{staticClass:"pa3"},[t._v("This is some content in a w-card component.")])],1)],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Custom content: List menu")]),t._m(6),n("example",{staticClass:"example11",attrs:{"content-class":"text-center my4","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-menu(custom hide-on-menu-click persistent shadow)
  template(#activator="{ on }")
    w-button(v-on="on") Show a list menu
  w-list.white--bg(
    v-model="listSelection"
    :items="listItems"
    item-class="px8")
div.mt4
  strong Current selection:
  code.ml1 `+t._s("{{ listSelection || 'none' }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-menu
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
  <code class="ml1">`+t._s("{{ listSelection || 'none' }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showMenu: false,
  listSelection: null,
  listItems: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[n("w-menu",{attrs:{"append-to":".example11",custom:"","hide-on-menu-click":"",persistent:"",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({},o),[t._v("Show a list menu")])]}}])},[n("w-list",{staticClass:"white--bg",attrs:{items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],"item-class":"px8"},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})],1),n("div",{staticClass:"mt4"},[n("strong",[t._v("Current selection:")]),n("code",{staticClass:"ml1"},[t._v(t._s(t.list||"none"))])])],1),n("title-link",{attrs:{h2:""}},[t._v("Menu with overlay")]),n("example",{staticClass:"example12",attrs:{"content-class":"text-center my4","app-props-string":"align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-menu(v-model="showMenu" shadow custom overlay)
  template(#activator="{ on }")
    w-button(v-on="on") Show a menu & overlay
  w-list.white--bg(
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false")`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-menu v-model="showMenu" shadow custom overlay>
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
</w-menu>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showMenu: false,
  listItems: [
    { label: 'Item 1', route: '#item1' },
    { label: 'Item 2', route: '#item2' },
    { label: 'Item 3', route: '#item3' }
  ]
})`)]},proxy:!0}])},[n("w-menu",{attrs:{"append-to":".example12",shadow:"",custom:"",overlay:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({},o),[t._v("Show a menu & overlay")])]}}]),model:{value:t.showListMenu2,callback:function(e){t.showListMenu2=e},expression:"showListMenu2"}},[n("w-list",{staticClass:"white--bg",attrs:{nav:"",items:[{label:"Item 1",route:"#item1"},{label:"Item 2",route:"#item2"},{label:"Item 3",route:"#item3"}],"item-class":"px8"},on:{"item-select":function(e){t.showListMenu2=!1}}})],1)],1)],1)},m=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v("A persistent menu can only be closed by clicking on the activator again, or programmatically."),n("br"),t._v(`
Clicking outside the menu will not close it.`),n("br"),t._v(`
Of course you can also add a button inside the menu to close it.`)])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v(`By default, the menu is position at the bottom of the activator.
If you prefer to position the menu yourself via CSS, you can skip the position calculation via the
`),n("code",[t._v("no-position")]),t._v(" prop.")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),n("br"),t._v(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v("Applies a tooltip style with the "),n("code",[t._v("arrow")]),t._v(" option.")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v(`The following examples illustrate how the arrow is positioned on the different sides and
alignments that are applied.`),n("br"),t._v(`
The arrow position can also be overridden via CSS.
`)])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v("Like in most components, you can define a "),n("code",[t._v("color")]),t._v(" and a  "),n("code",[t._v("bg-color")]),t._v(".")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v("By default the menu is a "),n("strong",{staticClass:"code"},[t._v("w-card")]),t._v(`. But if you need more flexibility, you can set the
`),n("code",[t._v("custom")]),t._v(" prop and put whatever you want in the free-of-style menu."),n("br"),t._v(`
In this example, the menu is `),n("code",[t._v("persistent")]),t._v(` so the user is forced to select an option from
the menu when open. Then on click of an option, the menu will hide thanks to the option
`),n("code",[t._v("hide-on-menu-click")]),t._v(".")])}];const p={data:()=>({showMenu:!1,showListMenu1:!1,showListMenu2:!1,activator1:".pet-button",activator2:".pet-button2",menuContent:"",list:null})},r={};var v=s(p,c,m,!1,w,null,null,null);function w(t){for(let a in r)this[a]=r[a]}var d=function(){return v.exports}(),h=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),n("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),n("component-api",{attrs:{items:t.slots,title:"Slots"}}),n("component-api",{attrs:{items:t.events,title:"Events"}})],1)},f=[];const g={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.',showOnHover:"Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.",hideOnMenuClick:"Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.",color:`Applies a color to the menu's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the menu's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the menu element.",custom:'By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to <code>true</code>.',tile:"Removes the default border-radius and sets sharp edges on the menu.",round:"Sets a maximum border-radius on the corners of the menu, giving it a round look.",arrow:"Adds a small triangle on the edge of the menu, pointing toward the activator.",noBorder:"Removes the default border from the menu element.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',menuClass:"Provide custom CSS classes for the menu element.",titleClass:"Provide custom CSS classes for the menu's title when using the default card layout (when not using the <code>custom</code> prop).",contentClass:"Provide custom CSS classes for the menu's content when using the default card layout (when not using the <code>custom</code> prop).",appendTo:'Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, <span class="code">.w-app</span> will be the target.<br>The default root is the <span class="code">w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',noPosition:"Skip the menu positioning calculation, if you prefer to set it via CSS. Setting this prop to <code>true</code> will also disable the side positioning (top, left, right, bottom) and the alignments.",fixed:"Sets the CSS position of the menu to <code>fixed</code> (absolute by default).",top:"Places the menu at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the menu at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the menu at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",alignTop:"Aligns the top of the menu with the top of the activator.",alignBottom:"Aligns the bottom of the menu with the bottom of the activator.",alignLeft:"Aligns the left side of the menu with the left side of the activator.",alignRight:"Aligns the right side of the menu with the right side of the activator.",zIndex:"Applies a z-index (positive or negative integer) to the menu.",minWidth:"Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",overlay:'Displays a full screen overlay underneath the menu (uses the <span class="code">w-overlay</span> component).',overlayClass:'Provide custom CSS classes for the <span class="code">w-overlay</span> component.',overlayProps:'An object of props to pass down to the <span class="code">w-overlay</span> component for more control.',persistent:"When set to <code>true</code>, clicking outside of the menu will not close the menu.",activator:"Allows you to define one or multiple external activators for the menu through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the menu from different activators.",delay:"A delay - in milliseconds - before opening the menu.<br>A small delay may help the menu position computing if the menu content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same menu with different content."},_={activator:{description:'<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},title:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The menu content."},actions:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},b={input:"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on menu close.",open:"Emitted on menu open."},x={data:()=>({propsDescs:g,slots:_}),computed:{props(){return i.props},events(){return i.emits.reduce((t,a)=>(t[a]={description:b[a]||""})&&t,{})}}},l={};var y=s(x,h,f,!1,k,null,null,null);function k(t){for(let a in l)this[a]=l[a]}var M=function(){return y.exports}(),S=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("main",[n("ui-component-title",[t._v("w-menu")]),n("examples"),n("api")],1)},C=[];const A={components:{Examples:d,Api:M}},u={};var T=s(A,S,C,!1,I,null,null,null);function I(t){for(let a in u)this[a]=u[a]}var $=function(){return T.exports}();export{$ as default};
