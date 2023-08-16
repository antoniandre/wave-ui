import{n as a,Q as l}from"./index.e31dd236.js";var p=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"tooltips-demo"},[o("alert",{attrs:{tip:""}},[o("strong",[t._v("Important notes")]),o("br"),t._v(`
By default the tooltip is moved into the w-app in the DOM, so it is not constrained by a hidden
overflow on a parent.`),o("br"),t._v(`
When used inside a dialog, menu or drawer, it will be by default appended to that element.`),o("br"),t._v(`
You can use the `),o("code",[t._v("appendTo")]),t._v(` prop to place it elsewhere in the DOM, like in the
`),o("a",{attrs:{href:"#appending-to-a-dom-node"}},[t._v("Appending to a particular DOM node")]),t._v(` example.
`)]),o("title-link",{attrs:{h2:""}},[t._v("Tooltip position")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.text-center
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
    | Home`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="text-center">
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
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")])],1),o("title-link",{attrs:{h2:""}},[t._v("Alignments")]),o("p",[t._v("In addition to positions, you can align the tooltip with its activator.")]),o("example",{staticClass:"example6",scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.title4.mb2 top position
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
  | Tooltip content,#[br]on multiple lines.`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="title4 mb2">Top position</div>
<w-tooltip top align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<w-tooltip top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<w-tooltip top align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Bottom position</div>
<w-tooltip align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<w-tooltip>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<w-tooltip align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Right position</div>
<w-tooltip right align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align top
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<w-tooltip right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<w-tooltip right align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">Alig
      n bottom
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Left position</div>
<w-tooltip left align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">A
      lign top
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<w-tooltip left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>

<w-tooltip left align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align bottom
    </w-button>
  </template>
  Tooltip content,`),o("br"),t._v(`on multiple lines.
</w-tooltip>
`)]},proxy:!0}])},[o("div",{staticClass:"title4 mb2"},[t._v("Top position")]),o("w-tooltip",{attrs:{"append-to":".example6",top:"","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Align left")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("w-tooltip",{attrs:{"append-to":".example6",top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Centered")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("w-tooltip",{attrs:{"append-to":".example6",top:"","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Align right")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("div",{staticClass:"title4 mt6 mb2"},[t._v("Bottom position")]),o("w-tooltip",{attrs:{"append-to":".example6","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Align left")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("w-tooltip",{attrs:{"append-to":".example6"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Centered")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("w-tooltip",{attrs:{"append-to":".example6","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Align right")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("div",{staticClass:"title4 mt6 mb2"},[t._v("Right position")]),o("w-tooltip",{attrs:{"append-to":".example6",right:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Align top")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("w-tooltip",{attrs:{"append-to":".example6",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Centered")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("w-tooltip",{attrs:{"append-to":".example6",right:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Align bottom")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("div",{staticClass:"title4 mt6 mb2"},[t._v("Left position")]),o("w-tooltip",{attrs:{"append-to":".example6",left:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Align top")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("w-tooltip",{attrs:{"append-to":".example6",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Centered")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")]),o("w-tooltip",{attrs:{"append-to":".example6",left:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma1"},e),[t._v("Align bottom")])]}}])},[t._v("Tooltip content,"),o("br"),t._v("on multiple lines.")])],1),o("title-link",{attrs:{h2:""}},[t._v("Toggle on click")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.text-center
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
    | Star`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="text-center">
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
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{"show-on-click":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info"}},e),[o("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info-dark2",dark:""}},e),[o("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")])],1),o("title-link",{attrs:{h2:""}},[t._v("Persistent")]),t._m(0),o("example",{attrs:{"content-class":"text-center my4 example-persistent"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-tooltip(show-on-click persistent)
  template(#activator="{ on }")
    w-icon(v-on="on" xl) wi-star
  | Star
`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-tooltip
  show-on-click
  persistent>
  <template #activator="{ on }">
    <w-icon v-on="on" xl>wi-star</w-icon>
  </template>
  Star
</w-tooltip>
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{"show-on-click":"",persistent:"","append-to":".example-persistent"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({attrs:{xl:""}},e),[t._v("wi-star")])]}}])},[t._v("Star")])],1),o("title-link",{attrs:{h2:""}},[t._v("Using a v-model")]),o("title-link",{attrs:{h3:""}},[t._v("Toggle with v-model")]),o("p",[t._v("Click the button to toggle the tooltips.")]),o("example",{attrs:{"content-class":"text-center my4"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.text-center
  w-button.my2.mx6(
    @click="showTooltip = !showTooltip"
    bg-color="primary"
    dark
    width="6em")
    | `+t._s("{{ showTooltip ? 'Hide' : 'Show' }}")+` tooltip

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
      | Star`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="text-center">
  <w-button
    @click="showTooltip = !showTooltip"
    class="my2 mx6"
    bg-color="primary"
    dark
    width="6em">
    `+t._s("{{ showTooltip ? 'Hide' : 'Show' }}")+` tooltip
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
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showTooltip: false
})
`)]},proxy:!0}])},[o("w-button",{staticClass:"my2 mx6",attrs:{"bg-color":"primary",dark:"",width:"6em"},on:{click:function(n){t.showTooltip=!t.showTooltip}}},[t._v(t._s(t.showTooltip?"Hide":"Show")+" tooltip")]),o("div",{staticClass:"d-iblock my2 mx6"},[o("w-tooltip",{attrs:{value:t.showTooltip,"show-on-click":"",left:""},on:{open:function(n){t.tooltipVisible=!0},close:t.onTooltipClose},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({attrs:{lg:""}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{value:t.showTooltip,"show-on-click":"",top:""},on:{open:function(n){t.tooltipVisible=!0},close:t.onTooltipClose},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({attrs:{lg:""}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{value:t.showTooltip,"show-on-click":""},on:{open:function(n){t.tooltipVisible=!0},close:t.onTooltipClose},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({attrs:{lg:""}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{value:t.showTooltip,"show-on-click":"",right:""},on:{open:function(n){t.tooltipVisible=!0},close:t.onTooltipClose},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({attrs:{lg:""}},e),[t._v("wi-star")])]}}])},[t._v("Star")])],1)],1),o("title-link",{attrs:{h3:""}},[t._v("Using v-model to update a variable")]),o("p",[t._v("Click the star to toggle the tooltip.")]),o("example",{attrs:{"content-class":"text-center my4"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-tooltip(v-model="showTooltip" show-on-click right)
  template(#activator="{ on }")
    w-icon(v-on="on" lg) wi-star
  | Star
div.mt4 The tooltip is `+t._s("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-tooltip
  v-model="showTooltip"
  show-on-click
  right>
  <template #activator="{ on }">
    <w-icon v-on="on" lg>wi-star</w-icon>
  </template>
  Star
</w-tooltip>

<div class="mt4">
  The tooltip is `+t._s("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showTooltip: false
})
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({attrs:{lg:""}},e),[t._v("wi-star")])]}}]),model:{value:t.showTooltip2,callback:function(n){t.showTooltip2=n},expression:"showTooltip2"}},[t._v("Star")]),o("div",{staticClass:"mt4"},[t._v("The tooltip is "+t._s(t.showTooltip2?"visible":"hidden")+".")])],1),o("title-link",{attrs:{h2:""}},[t._v("Background color & text color")]),t._m(1),o("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.text-center
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
    | Star`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="text-center">
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
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{color:"white","bg-color":"blue"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"blue"}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{color:"white","bg-color":"purple"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"purple"}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{color:"orange-dark1","bg-color":"yellow-light3"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{color:"orange"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:""}},e),[t._v("wi-star")])]}}])},[t._v("Star")])],1),o("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),o("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.text-center.pb8
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
    | Shadow`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="text-center pb8">
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
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{color:"red-light2",tile:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"red-light2"}},e),[t._v("mdi mdi-square")])]}}])},[t._v("Tile")]),o("w-tooltip",{attrs:{color:"amber-dark1",round:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},e),[t._v("mdi mdi-circle")])]}}])},[t._v("Round")]),o("w-tooltip",{attrs:{color:"pink-light1",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"pink-light1"}},e),[t._v("mdi mdi-heart")])]}}])},[t._v("Shadow")])],1),o("title-link",{attrs:{h2:""}},[t._v("Different contents")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.text-center
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
    | Recusandae distinctio perferendis expedita pariatur fuga.`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="text-center">
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
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("span",t._g({staticClass:"ma3"},e),[t._v("Content with icon")])]}}])},[o("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1),o("w-tooltip",{attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("span",t._g({staticClass:"ma3"},e),[t._v("Very long content")])]}}])},[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit."),o("br"),t._v("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!"),o("br"),o("br"),t._v("Recusandae distinctio perferendis expedita pariatur fuga.")])],1),o("title-link",{attrs:{h2:""}},[t._v("Transitions")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.text-center
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
      | Home`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="text-center">
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
`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
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
`)]},proxy:!0}])},[o("w-radios",{staticClass:"my4",attrs:{inline:"",items:t.transitions},model:{value:t.transition,callback:function(n){t.transition=n},expression:"transition"}}),o("div",{staticClass:"text-center py6"},[o("w-tooltip",{attrs:{transition:t.transition,left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{transition:t.transition},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{transition:t.transition,top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{transition:t.transition,right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")])],1)],1),o("title-link",{attrs:{h2:"",slug:"appending-to-a-dom-node"}},[t._v("Appending to a particular DOM node")]),o("p",[t._v(`In this example, the yellow container of the pink activator has an overflow hidden, but we want the
tooltip to be fully visible. So we detach it to the green container.`)]),o("example",{staticClass:"mb12",attrs:{"content-class":"pa0"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`.wrapper.text-center.green-light5--bg.pa6
  w-card(bg-color="yellow-light5")
    w-tooltip(append-to=".wrapper")
      template(#activator="{ on }")
        w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5")
          w-icon.mr1 mdi mdi-bomb
          | Hover me
      span This tooltip is appended to the green container!`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<div class="wrapper text-center green-light5--bg pa6">
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
</div>`)]},proxy:!0},{key:"css",fn:function(){return[t._v(`.wrapper {position: relative;}

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
`)]},proxy:!0}])},[o("div",{staticClass:"another-container text-center green-light5--bg pa6"},[o("w-card",{attrs:{"bg-color":"yellow-light5"}},[o("w-tooltip",{attrs:{"append-to":".another-container"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-tag",t._g({attrs:{lg:"",color:"pink-light1","bg-color":"pink-light5"}},e),[o("w-icon",{staticClass:"mr1"},[t._v("mdi mdi-bomb")]),t._v("Hover me")],1)]}}])},[o("span",[t._v("This tooltip is appended to the "),o("span",{staticClass:"green"},[t._v("green")]),t._v(" container!")])])],1)],1)]),o("alert",{attrs:{warning:""}},[t._v(`The DOM element that the tooltip is detached to must have a position (fixed, absolute or
relative).
`)]),o("title-link",{attrs:{h2:""}},[t._v("External activator")]),t._m(2),o("title-link",{attrs:{h3:"",slug:"external-activator--basic"}},[t._v("Trigger a menu on click of an external activator")]),o("example",{staticClass:"example14",attrs:{"content-class":"text-center my4","app-props-string":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button") Meow!`)]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button">
  Meow!
</w-tooltip>
`)]},proxy:!0}])},[o("w-button",{staticClass:"cat-button",attrs:{icon:"mdi mdi-cat",xl:""}}),o("w-tooltip",{attrs:{"append-to":".example14",activator:".cat-button"}},[t._v("Meow!")])],1),o("title-link",{attrs:{h3:"",slug:"external-activator--2-activators"}},[t._v("Trigger the same menu on hover of 2 different external activators")]),o("p",{staticClass:"text-italic"},[t._v("But do you really need that? ;)")]),o("alert",{attrs:{tip:""}},[t._v(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`)]),o("example",{staticClass:"example16",attrs:{"content-class":"text-center my4","app-props-string":"block text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v(`w-button.pet-button.cat-button.ma4(
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
  | `+t._s("{{ tooltipContent }}"))]},proxy:!0},{key:"html",fn:function(){return[t._v(`<w-button
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
  `+t._s("{{ tooltipContent }}")+`
</w-tooltip>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  activator: '.pet-button',
  tooltipContent: ''
})`)]},proxy:!0}])},[o("w-button",{staticClass:"pet-button2 cat-button3 ma4",attrs:{icon:"mdi mdi-cat",xl:""},on:{mouseenter:function(n){t.activator2=".cat-button3",t.tooltipContent="Meow!"},mouseleave:function(n){t.activator2=".pet-button2"}}}),o("w-button",{staticClass:"pet-button2 dog-button3 ma4",attrs:{icon:"mdi mdi-dog",xl:""},on:{mouseenter:function(n){t.activator2=".dog-button3",t.tooltipContent="Woof!"},mouseleave:function(n){t.activator2=".pet-button2"}}}),o("w-tooltip",{attrs:{"append-to":".example16",activator:t.activator2,delay:100}},[t._v(t._s(t.tooltipContent))])],1)],1)},m=[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("p",[t._v("By default with the "),o("code",[t._v("show-on-click")]),t._v(` option, the tooltip will hide when you click
anywhere once open.`),o("br"),t._v(`
To make it persistent, use the `),o("code",[t._v("persistent")]),t._v(` prop, so a click will not close the open
tooltip.`),o("br"),t._v(`
Clicking on the activator can always toggle the tooltip regardless of the `),o("code",[t._v("persistent")]),t._v(`
prop.`)])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("p",[t._v("Like in most components, you can set a "),o("code",[t._v("color")]),t._v(" for the text and a "),o("code",[t._v("bg-color")]),t._v(` for the
background.`)])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("p",[t._v(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),o("br"),t._v(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)])}];const v={data:()=>({showTooltip:!1,showTooltip2:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}],activator1:".pet-button",activator2:".pet-button2",tooltipContent:""}),methods:{onTooltipClose(){setTimeout(()=>this.showTooltip=!1,100)}}},r={};var u=a(v,p,m,!1,d,null,null,null);function d(t){for(let i in r)this[i]=r[i]}var w=function(){return u.exports}(),h=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),o("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:t.slots,title:"Slots"}}),o("component-api",{attrs:{items:t.events,title:"Events"}})],1)},_=[];const g={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',showOnClick:"Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.",color:`Applies a color to the tooltip's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tooltip's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Provide custom CSS classes for the tooltip element.",appendTo:'Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>The default root is <span class="code">.w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',fixed:"Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).",top:"Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",zIndex:"Applies a z-index (positive or negative integer) to the tooltip.",persistent:"When set to <code>true</code>, clicking outside of the tooltip will not close the tooltip.",activator:"Allows you to define one or multiple external activators for the tooltip through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the tooltip from different activators.",delay:"A delay - in milliseconds - before opening the tooltip.<br>A small delay may help the tooltip position computing if the tooltip content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same tooltip with different content."},f={activator:{description:'<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},b={input:"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on tooltip close.",open:"Emitted on tooltip open."},y={data:()=>({propsDescs:g,slots:f}),computed:{props(){return l.props},events(){return l.emits.reduce((t,i)=>(t[i]={description:b[i]||""})&&t,{})}}},s={};var x=a(y,h,_,!1,k,null,null,null);function k(t){for(let i in s)this[i]=s[i]}var S=function(){return x.exports}(),T=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("main",[o("ui-component-title",[t._v("w-tooltip")]),o("examples"),o("api")],1)},C=[];const A={components:{Examples:w,Api:S}},c={};var H=a(A,T,C,!1,$,null,null,null);function $(t){for(let i in c)this[i]=c[i]}var E=function(){return H.exports}();export{E as default};
