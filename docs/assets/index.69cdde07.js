import{n as a,O as r}from"./index.601dd7c5.js";import"./vendor.4f8da9ec.js";var p=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"tooltips-demo"},[o("alert",{attrs:{tip:""}},[o("strong",[t._v("Important notes")]),o("br"),t._v(`
By default when you use `),o("code",[t._v("<w-tooltip>")]),t._v(`, it creates a wrapper around the activator
element and the tooltip is added inside this wrapper.`),o("br"),t._v(`
In this case you can add classes to the wrapper to style it as desired.`),o("br"),o("br"),t._v(`
But in some cases, for instance if the activator element is placed in a container that has a hidden
overflow, the tooltip needs to be placed outside of this container to be fully visible.`),o("br"),t._v(`
You can use the `),o("code",[t._v("detachTo")]),t._v(` prop to place it elsewhere in the DOM, like in the
`),o("a",{attrs:{href:"#appending-to-a-dom-node"}},[t._v("Appending to a particular DOM node")]),t._v(" example."),o("br"),t._v(`
In this case, the wrapper will be hidden and unstylable whereas the tooltip itself will be appended to
the DOM node you provided.
`)]),o("title-link",{attrs:{h2:""}},[t._v("Tooltip position")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="text-center">
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
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),o("w-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")])],1),o("title-link",{attrs:{h2:""}},[t._v("Toggle on click")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="text-center">
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
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{"show-on-click":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info"}},e),[o("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info-dark2",dark:""}},e),[o("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")])],1),o("title-link",{attrs:{h2:""}},[t._v("Using v-model")]),o("title-link",{attrs:{h3:""}},[t._v("Toggle with v-model")]),o("p",[t._v("Click the button to toggle the tooltips.")]),o("example",{attrs:{"content-class":"text-center my4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="text-center">
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
      class="ma2"
      v-model="showTooltip"
      show-on-click
      left>
      <template #activator="{ on }">
        <w-icon v-on="on">wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      class="ma2"
      v-model="showTooltip"
      show-on-click
      top>
      <template #activator="{ on }">
        <w-icon v-on="on">wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      class="ma2"
      v-model="showTooltip"
      show-on-click>
      <template #activator="{ on }">
        <w-icon v-on="on">wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      class="ma2"
      v-model="showTooltip"
      show-on-click
      right>
      <template #activator="{ on }">
        <w-icon v-on="on">wi-star</w-icon>
      </template>
      Star
    </w-tooltip>
  </div>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showTooltip: false
})
`)]},proxy:!0}])},[o("w-button",{staticClass:"my2 mx6",attrs:{"bg-color":"primary",dark:"",width:"6em"},on:{click:function(n){t.showTooltip=!t.showTooltip}}},[t._v(t._s(t.showTooltip?"Hide":"Show")+" tooltip")]),o("div",{staticClass:"d-iblock my2 mx6"},[o("w-tooltip",{staticClass:"ma2",attrs:{value:t.showTooltip,"show-on-click":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{staticClass:"ma2",attrs:{value:t.showTooltip,"show-on-click":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{staticClass:"ma2",attrs:{value:t.showTooltip,"show-on-click":""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{staticClass:"ma2",attrs:{value:t.showTooltip,"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({},e),[t._v("wi-star")])]}}])},[t._v("Star")])],1)],1),o("title-link",{attrs:{h3:""}},[t._v("Using v-model to update a variable")]),o("p",[t._v("Click the star to toggle the tooltip.")]),o("example",{attrs:{"content-class":"text-center my4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-tooltip
  v-model="showTooltip"
  show-on-click
  right>
  <template #activator="{ on }">
    <w-icon v-on="on">wi-star</w-icon>
  </template>
  Star
</w-tooltip>

<div class="mt4">
  The tooltip is `+t._s("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showTooltip: false
})
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({},e),[t._v("wi-star")])]}}]),model:{value:t.showTooltip2,callback:function(n){t.showTooltip2=n},expression:"showTooltip2"}},[t._v("Star")]),o("div",{staticClass:"mt4"},[t._v("The tooltip is "+t._s(t.showTooltip2?"visible":"hidden")+".")])],1),o("title-link",{attrs:{h2:""}},[t._v("Background color & text color")]),t._m(0),o("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="text-center pb8">
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
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{color:"white","bg-color":"blue"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"blue"}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{color:"white","bg-color":"purple"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"purple"}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{color:"orange-dark1","bg-color":"yellow-light3"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),o("w-tooltip",{attrs:{color:"orange"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:""}},e),[t._v("wi-star")])]}}])},[t._v("Star")])],1),o("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),o("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="text-center pb8">
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
`)]},proxy:!0}])},[o("w-tooltip",{attrs:{color:"red-light2",tile:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"red-light2"}},e),[t._v("mdi mdi-square")])]}}])},[t._v("Tile")]),o("w-tooltip",{attrs:{color:"amber-dark1",round:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},e),[t._v("mdi mdi-circle")])]}}])},[t._v("Round")]),o("w-tooltip",{attrs:{color:"pink-light1",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"pink-light1"}},e),[t._v("mdi mdi-heart")])]}}])},[t._v("Shadow")])],1),o("title-link",{attrs:{h2:""}},[t._v("Different contents")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="text-center">
  <w-tooltip class="ma3" color="primary">
    <template #activator="{ on }">
      <span v-on="on">
        Content with icon
      </span>
    </template>
    <w-icon class="mr1">wi-star</w-icon>
    Star
  </w-tooltip>

  <w-tooltip class="ma3" color="primary">
    <template #activator="{ on }">
      <span v-on="on" ref="truc">
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
`)]},proxy:!0}])},[o("w-tooltip",{staticClass:"ma3",attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("span",t._g({},e),[t._v("Content with icon")])]}}])},[o("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1),o("w-tooltip",{staticClass:"ma3",attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("span",t._g({ref:"truc"},e),[t._v("Very long content")])]}}])},[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit."),o("br"),t._v("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!"),o("br"),o("br"),t._v("Recusandae distinctio perferendis expedita pariatur fuga.")])],1),o("title-link",{attrs:{h2:""}},[t._v("Transitions")]),o("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="text-center">
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
tooltip to be fully visible. So we detach it to the green container.`)]),o("example",{staticClass:"mb12",attrs:{"content-class":"pa0"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="wrapper text-center green-light5--bg pa6">
  <w-card bg-color="yellow-light5">
    <w-tooltip detach-to=".wrapper">
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

.w-card:before {top: 0;left: 0;}
.w-card:after {bottom: 0;right: 0;}

.w-tag {z-index: 1;}
`)]},proxy:!0}])},[o("div",{staticClass:"another-container text-center green-light5--bg pa6"},[o("w-card",{attrs:{"bg-color":"yellow-light5"}},[o("w-tooltip",{attrs:{"detach-to":".another-container"},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on;return[o("w-tag",t._g({attrs:{lg:"",color:"pink-light1","bg-color":"pink-light5"}},e),[o("w-icon",{staticClass:"mr1"},[t._v("mdi mdi-bomb")]),t._v("Hover me")],1)]}}])},[o("span",[t._v("This tooltip is appended to the "),o("span",{staticClass:"green"},[t._v("green")]),t._v(" container!")])])],1)],1)]),o("alert",{attrs:{warning:""}},[t._v(`The DOM element that the tooltip is detached to must have a position (fixed, absolute or
relative).`)])],1)},d=[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("p",[t._v("Like in most components, you can set a "),o("code",[t._v("color")]),t._v(" for the text and a "),o("code",[t._v("bg-color")]),t._v(` for the
background.`)])}];const m={data:()=>({showTooltip:!1,showTooltip2:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}]})},l={};var v=a(m,p,d,!1,w,null,null,null);function w(t){for(let i in l)this[i]=l[i]}var u=function(){return v.exports}(),h=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),o("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),o("component-api",{attrs:{items:t.slots,title:"Slots"}}),o("component-api",{attrs:{items:t.events,title:"Events"}})],1)},_=[];const f={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',showOnClick:"Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.",color:`Applies a color to the tooltip's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tooltip's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Provide custom CSS classes for the tooltip element.",detachTo:'Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>By default a wrapper is created around the activator element and the tooltip is appended inside it.',fixed:"Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).",top:"Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",zIndex:"Applies a z-index (positive or negative integer) to the tooltip."},g={activator:{description:'<strong>This slot is required and must have the v-on="on" directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},b={},y={data:()=>({propsDescs:f,slots:g}),computed:{props(){return r.props},events(){return r.emits.reduce((t,i)=>(t[i]={description:b[i]||""})&&t,{})}}},s={};var x=a(y,h,_,!1,k,null,null,null);function k(t){for(let i in s)this[i]=s[i]}var S=function(){return x.exports}(),C=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("main",[o("ui-component-title",[t._v("w-tooltip")]),o("examples"),o("api")],1)},T=[];const H={components:{Examples:u,Api:S}},c={};var $=a(H,C,T,!1,A,null,null,null);function A(t){for(let i in c)this[i]=c[i]}var q=function(){return $.exports}();export{q as default};
