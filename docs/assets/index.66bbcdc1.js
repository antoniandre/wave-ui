import{n as i,r as s}from"./index.e31dd236.js";var d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Why using w-image and not a simple <img>")]),t("div",{staticClass:"title3"},[e._v("A simple <img>")]),e._m(0),t("div",{staticClass:"title3"},[e._v("The w-image")]),e._m(1),t("title-link",{attrs:{h2:""}},[e._v("Default")]),t("p",[e._v("With no given width, height or ratio, the image is loaded full-size.")]),t("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/favicon.png`")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]},proxy:!0}])},[t("w-image",{attrs:{src:e.baseUrl+"images/favicon.png"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Given dimensions")]),t("example",{attrs:{"content-class":"text-center w-flex justify-space-around wrap"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="150"
  :height="150">
</w-image>
<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="500"
  :height="150">
</w-image>`)]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]},proxy:!0}])},[t("w-image",{staticClass:"mr5",attrs:{src:e.baseUrl+"images/japanese-wave.png",width:150,height:150}}),t("w-image",{attrs:{src:e.baseUrl+"images/japanese-wave.png",width:500,height:150}})],1),t("title-link",{attrs:{h2:""}},[e._v("Image ratio")]),e._m(2),t("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="233 / 1000")')]},proxy:!0},{key:"html",fn:function(){return[e._v('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="233 / 1000">\n</w-image>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]},proxy:!0}])},[t("w-image",{attrs:{src:e.baseUrl+"images/japanese-wave.png",ratio:233/1e3}})],1),t("title-link",{attrs:{h2:"",slug:"using-the-img-tag"}},[e._v("Using the <img> tag")]),e._m(3),t("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%" tag="img" style="max-width: 700px")')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  width="100%"
  tag="img"
  style="max-width: 700px">
</w-image>`)]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]},proxy:!0}])},[t("w-image",{staticStyle:{"max-width":"700px"},attrs:{src:e.baseUrl+"images/japanese-wave.png",width:"100%",tag:"img"}})],1),t("title-link",{attrs:{h2:""}},[e._v("Loading spinner")]),t("p",[e._v(`This image is very big, so that you have time to see the spinner while loading.
Refresh the page if you haven't seen it!`)]),t("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" width="100%" :ratio="1 / 2")')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  width="100%"
  :ratio="1 / 2">
</w-image>`)]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]},proxy:!0}])},[t("w-image",{attrs:{src:e.baseUrl+"images/spirit-island--alberta.png",width:"100%",ratio:1/2}})],1),t("alert",{attrs:{tip:""}},[t("strong",[e._v("Dev notes:")]),e._v(" disabling the browser cache will prevent you from seeing the transition."),t("br"),e._v(`
The reason for it is that the image first loads in the `),t("strong",{staticClass:"code"},[e._v("w-image")]),e._v(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)]),t("title-link",{attrs:{h2:""}},[e._v("Transitions")]),t("p",[e._v(`Once the image is fully loaded, it will display in one piece with a fade transition by default.
You can customize the transition.`)]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v(`w-flex(wrap justify-center align-center)
  div.mr4.my2
    .title3.mb2 Transition names
    w-radios(
      v-model="img.transition"
      :items="transitions"
      item-value-key="label")
      template(#label="{ item }")
        code `+e._s("{{ item.label }}")+`
    w-button.mt2(@click="reload") Reload image

  w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")`)]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-flex wrap justify-center align-center>
  <div class="mr4 my2">
    <div class="title3 mb2">
      Transition names
    </div>
    <w-radios
      v-model="img.transition"
      :items="transitions"
      item-value-key="label">
      <template #label="{ item }">
        <code>
          `+e._s("{{ item.label }}")+`
        </code>
      </template>
    </w-radios>
    <w-button
      class="mt2"
      @click="reload">
      Reload image
    </w-button>
  </div>

  <w-image
    :src="img.src"
    :width="500"
    :height="250"
    :transition="img.transition">
  </w-image>
</w-flex>`)]},proxy:!0},{key:"js",fn:function(){return[e._v(`data: () => ({
  img: {
    initialSrc: 'https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png',
    src: 'https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png',
    transition: 'fade'
  },
  transitions: [
    { label: 'fade' },
    { label: 'slide-fade-up' },
    { label: 'slide-fade-down' },
    { label: 'slide-fade-left' },
    { label: 'slide-fade-right' },
    { label: 'scale' },
    { label: 'scale-fade' },
    { label: 'bounce' },
    { label: 'twist' },
    { label: 'none', value: '' }
  ]
}),
methods: {
  reload () {
    this.img.src = ''
    setTimeout(() => this.img.src = this.img.initialSrc, 500)
  }
}`)]},proxy:!0}])},[t("div",{staticClass:"w-flex wrap justify-center align-center"},[t("div",{staticClass:"mr4 my2"},[t("div",{staticClass:"title3 mb2"},[e._v("Transition names")]),t("w-radios",{attrs:{items:e.transitions,"item-value-key":"label"},scopedSlots:e._u([{key:"label",fn:function(n){var c=n.item;return[t("code",[e._v(e._s(c.label))])]}}]),model:{value:e.img.transition,callback:function(n){e.$set(e.img,"transition",n)},expression:"img.transition"}}),t("w-button",{staticClass:"mt2",on:{click:e.reload}},[e._v("Reload image")])],1),t("w-image",{attrs:{src:e.img.src,width:500,height:250,transition:e.img.transition}})],1)]),t("alert",{attrs:{tip:""}},[t("strong",[e._v("Dev notes:")]),e._v(" disabling the browser cache will prevent you from seeing the transition."),t("br"),e._v(`
The reason for it is that the image first loads in the `),t("strong",{staticClass:"code"},[e._v("w-image")]),e._v(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)]),t("title-link",{attrs:{h2:""}},[e._v("Fallback")]),e._m(4),t("example",{attrs:{"content-class":"text-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true")\n\nw-alert(v-if="showError" error) Oops. The image could not load!')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-image
  :src="\`\${baseUrl}images/broken.png\`"
  :fallback="\`\${baseUrl}images/not-found.jpg\`"
  @error="showError = true">
</w-image>

<w-alert
  v-if="showError"
  error>
  Oops. The image could not load!
</w-alert>`)]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/',
  showError: false
})
`)]},proxy:!0}])},[t("w-image",{attrs:{src:e.baseUrl+"images/broken.png",fallback:e.baseUrl+"images/not-found.jpg"},on:{error:function(n){e.showError=!0}}}),e.showError?t("w-alert",{attrs:{error:""}},[e._v("Oops. The image could not load!")]):e._e()],1),t("title-link",{attrs:{h2:""}},[e._v("Lazy")]),e._m(5),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="2550 / 5098")')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  lazy
  :ratio="2550 / 5098">
</w-image>`)]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]},proxy:!0}])},[t("w-image",{attrs:{src:e.baseUrl+"images/spirit-island--alberta.png?v1",lazy:"",ratio:2550/5098}})],1),t("title-link",{attrs:{h2:"",slug:"content"}},[e._v("Content - via default slot")]),e._m(6),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="2550 / 5098")\n  span.title1.pink Wave UI')]},proxy:!0},{key:"html",fn:function(){return[e._v(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="2550 / 5098">
  <span class="title1 pink">Wave UI</span>
</w-image>`)]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+e._s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+e._s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]},proxy:!0}])},[t("w-image",{attrs:{src:e.baseUrl+"images/japanese-wave.png",ratio:2550/5098}},[t("span",{staticClass:"title1 pink"},[e._v("Wave UI")])])],1)],1)},u=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("will display when loaded, and will take the dimensions of the actual image."),t("br"),e._v(`
When the image has a large file size, it will be loaded in chunks, and the image will be displayed
truncated until completely loaded.`),t("br"),t("br"),e._v(`
If ever it fails to load a broken image icon will display instead (different on every browser).`),t("br")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`can show a spinner while the image is loading, and display the image all at once with a nice
animation (like fade-in) when the iamge is ready.`),t("br"),e._v(`
It also allows you to set a fallback image in case the provided image might be unfound (convenient with
dynamic sources).`),t("br"),e._v(`
If ever no image is found, `),t("strong",{staticClass:"code"},[e._v("w-image")]),e._v(` will handle the error gracefully and will emit a
`),t("code",[e._v("@error")]),e._v(` event containing the error. A blank transparent image will be displayed in place of the
image itself. So that, nothing looks broken.
`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`You may want to have a responsive image. By setting an image ratio (height / width) and a width
to 100% the image will always keep the ratio while resizing.`),t("br"),e._v(`
If no `),t("code",[e._v("width")]),e._v(" or "),t("code",[e._v("height")]),e._v(" is set but a "),t("code",[e._v("ratio")]),e._v(" is given, the "),t("code",[e._v("width")]),e._v(` will
be set to 100%.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("You can choose which tag the "),t("strong",{staticClass:"code"},[e._v("w-image")]),e._v(" should use."),t("br"),e._v(`
If you use an `),t("code",[e._v("img")]),e._v(` tag, the image will behave exactly like a standard image.
The biggest benefit of that, is that you can set a `),t("code",[e._v("width")]),e._v(" or "),t("code",[e._v("height")]),e._v(` only, keep a ratio,
and apply a `),t("code",[e._v("max-width")]),e._v(" or "),t("code",[e._v("max-height")]),e._v(` on top of that so if the image would be bigger
than the container it would still apply the ratio on the constrained image.
`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(`The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent
background will be there instead preventing the browser's broken image logo.`),t("br"),e._v(`
You can also provide a custom fallback image to display if the image cannot load.`),t("br"),e._v(`
For instance, in a e-boutique you may try to load the image of an item without knowing if this item
has an available image or not.`),t("br"),t("br"),e._v(`
Thanks to the `),t("code",[e._v("error")]),e._v(` emitted event, you can trigger a specific action, such as displaying an
error message like in this example. But this is optional, and without the custom alert nothing would
look broken when you provide a valid fallback image!`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("By using the lazy attribute, it is possible to load the image only when it is in the viewport."),t("br"),e._v(`
Wave UI internally uses an `),t("span",{staticClass:"code"},[e._v("IntersectionObserver")]),e._v(` and will only start loading the image
when it is visible.`)])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("In some cases, it can be convenient to have some content on top of the image."),t("br"),e._v(`
By default the content will be horizontally and vertically centered, but you could easily align it
at the bottom left for instance, with the `),t("code",[e._v("content-class")]),e._v(` prop:
`),t("code",[e._v('content-class="align-end justify-start pa2"')]),e._v(".")])}];const g={data:()=>({baseUrl:"/wave-ui/",img:{initialSrc:"/wave-ui/images/spirit-island--alberta.png",src:"/wave-ui/images/spirit-island--alberta.png",transition:"fade"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],showError:!1}),methods:{reload(){this.img.src="",setTimeout(()=>this.img.src=this.img.initialSrc,500)}}},r={};var h=i(g,d,u,!1,m,null,null,null);function m(e){for(let a in r)this[a]=r[a]}var p=function(){return h.exports}(),v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"w-divider my12"}),t("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),t("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),t("component-api",{attrs:{items:e.slots,title:"Slots"}}),t("component-api",{attrs:{items:e.events,title:"Events"}})],1)},_=[];const f={tag:`Tells which tag to use for the <strong class="code">w-image</strong>'s image. It can be any valid HTML tag, like &lt;span&gt; or &lt;div&gt;. The wrapper of the image will use a &lt;span&gt; tag unless you use set the <code>tag</code> to div.<br><br>If you use the <code>img</code> tag, the image itself will use the &lt;img&gt; tag and the wrapper will use a &lt;span&gt; tag. The image will have a particular behavior as explained in the <a href="#using-the-img-tag">Using the &lt;img&gt; tag</a> example.`,src:"The source of the image to display.",width:"Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",height:"Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",ratio:'Sets the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. Refer to the <a href="#ratio">Ratio</a> example.',lazy:'When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.',absolute:"Sets the CSS position of the image to <code>absolute</code>.",fixed:"Sets the CSS position of the image to <code>fixed</code>.",contain:'By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".',noSpinner:"Removes the default spinner while the image is loading.",spinnerColor:"Define a specific color for the spinner while the image is loading. By default the spinner color is the primary color.",fallback:'Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.',transition:'Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.',contentClass:"Applies the given classes to the content wrapper when using the <code>default</code> slot."},w={default:{description:"Provide a custom content, to display on top of the image."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},b={error:{description:"Emitted on image load error.",params:{"[DOM event]":"The associated DOM event."}},loaded:{description:"Emitted on image successful load.",params:{String:"The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed)."}},loading:{description:"Emitted when the image starts loading.",params:{String:"The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed)."}}},y={data:()=>({propsDescs:f,slots:w}),computed:{props(){return s.props},events(){return s.emits.reduce((e,a)=>(e[a]=b[a]||{})&&e,{})}}},o={};var k=i(y,v,_,!1,x,null,null,null);function x(e){for(let a in o)this[a]=o[a]}var U=function(){return k.exports}(),S=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",[t("ui-component-title",{attrs:{slug:"w-image"}},[e._v("w-image")]),t("examples"),t("api")],1)},$=[];const E={components:{Examples:p,Api:U}},l={};var j=i(E,S,$,!1,C,null,null,null);function C(e){for(let a in l)this[a]=l[a]}var L=function(){return j.exports}();export{L as default};
