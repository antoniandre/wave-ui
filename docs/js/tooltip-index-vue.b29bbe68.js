(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tooltip-index-vue","tooltip-api-vue","tooltip-examples-vue"],{2914:function(t,o,n){},"3f75":function(t,o,n){"use strict";var e=n("2914"),a=n.n(e);a.a},"6d27":function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),n("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The props will soon be more detailed.")]),n("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),n("api",{attrs:{items:t.slots,title:"Slots"}}),n("api",{attrs:{items:t.events,title:"Events"}})],1)},a=[],i=(n("13d5"),n("9d84")),r={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',showOnClick:"",color:'Applies a color to the tooltip\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the tooltip\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Applies a custom CSS class to the tooltip element.",detachTo:"",fixed:"Sets the CSS position of the element to <code>fixed</code>.",top:"",bottom:"",left:"",right:"",zIndex:"Applies a z-index (positive or negative integer) to the tooltip."},l={activator:{description:'<strong>This slot is required and must have the v-on="on" directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},s={},c={data:function(){return{propsDescs:r,slots:l}},computed:{props:function(){return i["a"].props},events:function(){return i["a"].emits.reduce((function(t,o){return(t[o]={description:s[o]||""})&&t}),{})}}},p=c,d=n("2877"),m=Object(d["a"])(p,e,a,!1,null,null,null);o["default"]=m.exports},e565:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"tooltips-demo"},[n("alert",{attrs:{tip:""}},[n("strong",[t._v("Important notes")]),n("br"),t._v("\nBy default when you use "),n("code",[t._v("<w-tooltip>")]),t._v(", it creates a wrapper around the activator\nelement and the tooltip is added inside this wrapper."),n("br"),t._v("\nIn this case you can add classes to the wrapper to style it as desired."),n("br"),n("br"),t._v("\nBut in some cases, for instance if the activator element is placed in a container that has a hidden\noverflow, the tooltip needs to be placed outside of this container to be fully visible."),n("br"),t._v("\nYou can use the "),n("code",[t._v("detachTo")]),t._v(" prop to place it elsewhere in the DOM, like in the\n"),n("a",{attrs:{href:"#appending-to-a-dom-node"}},[t._v("Appending to a particular DOM node")]),t._v(" example."),n("br"),t._v("\nIn this case, the wrapper will be hidden and unstylable whereas the tooltip itself will be appended to\nthe DOM node you provided.\n")]),n("title-link",{attrs:{h2:""}},[t._v("Tooltip position")]),n("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center\n  w-tooltip(left)\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home\n    | Home\n\n  w-tooltip(top)\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home\n    | Home\n\n  w-tooltip\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home\n    | Home\n\n  w-tooltip(right)\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home\n    | Home\n')]},proxy:!0}])},[n("w-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),n("w-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),n("w-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),n("w-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"primary-light2"}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")])],1),n("title-link",{attrs:{h2:""}},[t._v("Toggle on click")]),n("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center\n  w-tooltip(show-on-click left)\n    template(#activator="{ on }")\n      w-button.ma2(v-on="on" bg-color="info")\n        w-icon.mr1 wi-star\n        | Star\n    | Star\n\n  w-tooltip(show-on-click right)\n    template(#activator="{ on }")\n      w-button.ma2(v-on="on" bg-color="info-dark2" dark)\n        w-icon.mr1 wi-star\n        | Star\n    | Star\n')]},proxy:!0}])},[n("w-tooltip",{attrs:{"show-on-click":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info"}},e),[n("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")]),n("w-tooltip",{attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-button",t._g({staticClass:"ma2",attrs:{"bg-color":"info-dark2",dark:""}},e),[n("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1)]}}])},[t._v("Star")])],1),n("title-link",{attrs:{h2:""}},[t._v("Toggle with v-model")]),n("example",{attrs:{"content-class":"text-center my4"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center\n  w-button.my2.mx6(\n    @click="showTooltip = !showTooltip"\n    bg-color="primary"\n    dark\n    width="6em")\n    | '+t._s("{{ showTooltip ? 'Hide' : 'Show' }}")+' tooltip\n\n  div.d-iblock.my2.mx6\n    w-tooltip.ma2(v-model="showTooltip" show-on-click left)\n      template(#activator="{ on }")\n        span(v-on="on") Star\n      | Star\n\n    w-tooltip.ma2(v-model="showTooltip" show-on-click top)\n      template(#activator="{ on }")\n        span(v-on="on") Star\n      | Star\n\n    w-tooltip.ma2(v-model="showTooltip" show-on-click)\n      template(#activator="{ on }")\n        span(v-on="on") Star\n      | Star\n\n    w-tooltip.ma2(v-model="showTooltip" show-on-click right)\n      template(#activator="{ on }")\n        span(v-on="on") Star\n      | Star\n')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showTooltip: false\n})\n")]},proxy:!0}])},[n("w-button",{staticClass:"my2 mx6",attrs:{"bg-color":"primary",dark:"",width:"6em"},on:{click:function(o){t.showTooltip=!t.showTooltip}}},[t._v(t._s(t.showTooltip?"Hide":"Show")+" tooltip")]),n("div",{staticClass:"d-iblock my2 mx6"},[n("w-tooltip",{staticClass:"ma2",attrs:{"show-on-click":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("span",t._g({},e),[t._v("Star")])]}}]),model:{value:t.showTooltip,callback:function(o){t.showTooltip=o},expression:"showTooltip"}},[t._v("Star")]),n("w-tooltip",{staticClass:"ma2",attrs:{"show-on-click":"",top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("span",t._g({},e),[t._v("Star")])]}}]),model:{value:t.showTooltip,callback:function(o){t.showTooltip=o},expression:"showTooltip"}},[t._v("Star")]),n("w-tooltip",{staticClass:"ma2",attrs:{"show-on-click":""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("span",t._g({},e),[t._v("Star")])]}}]),model:{value:t.showTooltip,callback:function(o){t.showTooltip=o},expression:"showTooltip"}},[t._v("Star")]),n("w-tooltip",{staticClass:"ma2",attrs:{"show-on-click":"",right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("span",t._g({},e),[t._v("Star")])]}}]),model:{value:t.showTooltip,callback:function(o){t.showTooltip=o},expression:"showTooltip"}},[t._v("Star")])],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Background color & text color")]),t._m(0),n("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center.pb8\n  w-tooltip(color="white" bg-color="blue")\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="blue") wi-star\n    | Star\n\n  w-tooltip(color="white" bg-color="purple")\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="purple") wi-star\n    | Star\n\n  w-tooltip(color="orange-dark1" bg-color="yellow-light3")\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="amber") wi-star\n    | Star\n\n  w-tooltip(color="orange")\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl) wi-star\n    | Star\n')]},proxy:!0}])},[n("w-tooltip",{attrs:{color:"white","bg-color":"blue"},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"blue"}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),n("w-tooltip",{attrs:{color:"white","bg-color":"purple"},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"purple"}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),n("w-tooltip",{attrs:{color:"orange-dark1","bg-color":"yellow-light3"},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},e),[t._v("wi-star")])]}}])},[t._v("Star")]),n("w-tooltip",{attrs:{color:"orange"},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:""}},e),[t._v("wi-star")])]}}])},[t._v("Star")])],1),n("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),n("example",{attrs:{"content-class":"text-center pb8"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center.pb8\n  w-tooltip(color="red-light2" tile)\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="red-light2") mdi mdi-square\n    | Tile\n  w-tooltip(color="amber-dark1" round)\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="amber") mdi mdi-circle\n    | Round\n  w-tooltip(color="pink-light1" shadow)\n    template(#activator="{ on }")\n      w-icon.ma2(v-on="on" xl color="pink-light1") mdi mdi-heart\n    | Shadow\n')]},proxy:!0}])},[n("w-tooltip",{attrs:{color:"red-light2",tile:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"red-light2"}},e),[t._v("mdi mdi-square")])]}}])},[t._v("Tile")]),n("w-tooltip",{attrs:{color:"amber-dark1",round:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"amber"}},e),[t._v("mdi mdi-circle")])]}}])},[t._v("Round")]),n("w-tooltip",{attrs:{color:"pink-light1",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{xl:"",color:"pink-light1"}},e),[t._v("mdi mdi-heart")])]}}])},[t._v("Shadow")])],1),n("title-link",{attrs:{h2:""}},[t._v("Different contents")]),n("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center\n  w-tooltip.ma3(color="primary")\n    template(#activator="{ on }")\n      span(v-on="on") Content with icon\n    w-icon.mr1 wi-star\n    | Star\n\n  w-tooltip.ma3(color="primary")\n    template(#activator="{ on }")\n      span(v-on="on" ref="truc") Very long content\n    | Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n    br\n    | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!\n    br\n    br\n    | Recusandae distinctio perferendis expedita pariatur fuga.\n')]},proxy:!0}])},[n("w-tooltip",{staticClass:"ma3",attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("span",t._g({},e),[t._v("Content with icon")])]}}])},[n("w-icon",{staticClass:"mr1"},[t._v("wi-star")]),t._v("Star")],1),n("w-tooltip",{staticClass:"ma3",attrs:{color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("span",t._g({ref:"truc"},e),[t._v("Very long content")])]}}])},[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit."),n("br"),t._v("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!"),n("br"),n("br"),t._v("Recusandae distinctio perferendis expedita pariatur fuga.")])],1),n("title-link",{attrs:{h2:""}},[t._v("Transitions")]),n("example",{attrs:{"content-class":"text-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.text-center\n  w-radios.my4(inline v-model="transition" :items="transitions")\n  .text-center.py6\n    w-tooltip(:transition="transition" left)\n      template(#activator="{ on }")\n        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home\n      | Home\n    w-tooltip(:transition="transition")\n      template(#activator="{ on }")\n        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home\n      | Home\n    w-tooltip(:transition="transition" top)\n      template(#activator="{ on }")\n        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home\n      | Home\n    w-tooltip(:transition="transition" right)\n      template(#activator="{ on }")\n        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home\n      | Home\n')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  transition: 'bounce',\n  transitions: [\n    { label: 'Default', value: '' },\n    { label: 'Bounce', value: 'bounce' },\n    { label: 'Scale', value: 'scale' },\n    { label: 'Twist', value: 'twist' },\n    { label: 'Fade', value: 'fade' },\n    { label: 'Scale-fade', value: 'scale-fade' }\n  ]\n})\n")]},proxy:!0}])},[n("w-radios",{staticClass:"my4",attrs:{inline:"",items:t.transitions},model:{value:t.transition,callback:function(o){t.transition=o},expression:"transition"}}),n("div",{staticClass:"text-center py6"},[n("w-tooltip",{attrs:{transition:t.transition,left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),n("w-tooltip",{attrs:{transition:t.transition},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),n("w-tooltip",{attrs:{transition:t.transition,top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")]),n("w-tooltip",{attrs:{transition:t.transition,right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-icon",t._g({staticClass:"ma2",attrs:{color:"primary",xl:""}},e),[t._v("mdi mdi-home")])]}}])},[t._v("Home")])],1)],1),n("title-link",{attrs:{h2:"",slug:"appending-to-a-dom-node"}},[t._v("Appending to a particular DOM node")]),n("p",[t._v("In this example, the yellow container of the pink activator has an overflow hidden, but we want the\ntooltip to be fully visible. So we detach it to the green container.")]),n("example",{staticClass:"mb12",attrs:{"content-class":"pa0"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.another-container.text-center.green-light5--bg.pa6\n  w-card(bg-color="yellow-light5")\n    w-tooltip(detach-to=".another-container")\n      template(#activator="{ on }")\n        w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5")\n          w-icon.mr1 mdi mdi-bomb\n          | Hover me\n      span This tooltip is appended to the green container!')]},proxy:!0},{key:"css",fn:function(){return[t._v(".w-card {\n  overflow: hidden;\n  display: inline-block;\n  padding: 8px;\n}\n\n.w-card:before, .w-card:after {\n  content: '';\n  position: absolute;\n  background-color: #ffea62;\n  width: 6em;\n  height: 6em;\n  border-radius: 100%;\n}\n\n.w-card:before {top: 0;left: 0;}\n.w-card:after {bottom: 0;right: 0;}\n\n.w-tag {z-index: 1;}\n")]},proxy:!0}])},[n("div",{staticClass:"another-container text-center green-light5--bg pa6"},[n("w-card",{attrs:{"bg-color":"yellow-light5"}},[n("w-tooltip",{attrs:{"detach-to":".another-container"},scopedSlots:t._u([{key:"activator",fn:function(o){var e=o.on;return[n("w-tag",t._g({attrs:{lg:"",color:"pink-light1","bg-color":"pink-light5"}},e),[n("w-icon",{staticClass:"mr1"},[t._v("mdi mdi-bomb")]),t._v("Hover me")],1)]}}])},[n("span",[t._v("This tooltip is appended to the "),n("span",{staticClass:"green"},[t._v("green")]),t._v(" container!")])])],1)],1)]),n("alert",{attrs:{warning:""}},[t._v("The DOM element that the tooltip is detached to must have a position (fixed, absolute or\nrelative).")])],1)},a=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("Like in most components, you can set a "),n("code",[t._v("color")]),t._v(" for the text and a "),n("code",[t._v("bg-color")]),t._v(" for the\nbackground.")])}],i={data:function(){return{showTooltip:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}]}}},r=i,l=(n("3f75"),n("2877")),s=Object(l["a"])(r,e,a,!1,null,null,null);o["default"]=s.exports},ec09:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("ui-component-title",[t._v("w-tooltip")]),n("examples"),n("api")],1)},a=[],i=n("e565"),r=n("6d27"),l={components:{Examples:i["default"],Api:r["default"]}},s=l,c=n("2877"),p=Object(c["a"])(s,e,a,!1,null,null,null);o["default"]=p.exports}}]);
//# sourceMappingURL=tooltip-index-vue.b29bbe68.js.map