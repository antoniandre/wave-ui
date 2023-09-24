import{r,o as m,g as p,a as t,w as a,b as e,t as s,d as i,c as S,f as j,h as y,_ as u,O as _}from"./index.bf2cfd71.js";const E=y(`<div class="title3">A simple &lt;img&gt;</div><p>will display when loaded, and will take the dimensions of the actual image.<br>
When the image has a large file size, it will be loaded in chunks, and the image will be displayed
truncated until completely loaded.<br><br>
If ever it fails to load a broken image icon will display instead (different on every browser).<br></p><div class="title3">The w-image</div><p>can show a spinner while the image is loading, and display the image all at once with a nice
animation (like fade-in) when the iamge is ready.<br>
It also allows you to set a fallback image in case the provided image might be unfound (convenient with
dynamic sources).<br>
If ever no image is found, <strong class="code">w-image</strong> will handle the error gracefully and will emit a
<code>@error</code> event containing the error. A blank transparent image will be displayed in place of the
image itself. So that, nothing looks broken.
</p>`,4),x=i("p",null,"With no given width, height or ratio, the image is loaded full-size.",-1),L=i("p",null,[e(`You may want to have a responsive image. By setting an image ratio (height / width) and a width
to 100% the image will always keep the ratio while resizing.`),i("br"),e(`
If no `),i("code",null,"width"),e(" or "),i("code",null,"height"),e(" is set but a "),i("code",null,"ratio"),e(" is given, the "),i("code",null,"width"),e(` will
be set to 100%.`)],-1),T=y(`<p>You can choose which tag the <strong class="code">w-image</strong> should use.<br>
If you use an <code>img</code> tag, the image will behave exactly like a standard image.
The biggest benefit of that, is that you can set a <code>width</code> or <code>height</code> only, keep a ratio,
and apply a <code>max-width</code> or <code>max-height</code> on top of that so if the image would be bigger
than the container it would still apply the ratio on the constrained image.
</p>`,1),B=i("p",null,`This image is very big, so that you have time to see the spinner while loading.
Refresh the page if you haven't seen it!`,-1),R=i("strong",null,"Dev notes:",-1),W=i("br",null,null,-1),A=i("strong",{class:"code"},"w-image",-1),I=i("p",null,`Once the image is fully loaded, it will display in one piece with a fade transition by default.
You can customize the transition.`,-1),V={class:"w-flex wrap justify-center align-center"},C={class:"mr4 my2"},z=i("div",{class:"title3 mb2"},"Transition names",-1),O=i("strong",null,"Dev notes:",-1),D=i("br",null,null,-1),N=i("strong",{class:"code"},"w-image",-1),P=i("p",null,[e(`The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent
background will be there instead preventing the browser's broken image logo.`),i("br"),e(`
You can also provide a custom fallback image to display if the image cannot load.`),i("br"),e(`
For instance, in a e-boutique you may try to load the image of an item without knowing if this item
has an available image or not.`),i("br"),i("br"),e(`
Thanks to the `),i("code",null,"error"),e(` emitted event, you can trigger a specific action, such as displaying an
error message like in this example. But this is optional, and without the custom alert nothing would
look broken when you provide a valid fallback image!`)],-1),Y=i("p",null,[e("By using the lazy attribute, it is possible to load the image only when it is in the viewport."),i("br"),e(`
Wave UI internally uses an `),i("span",{class:"code"},"IntersectionObserver"),e(` and will only start loading the image
when it is visible.`)],-1),F=i("p",null,[e("In some cases, it can be convenient to have some content on top of the image."),i("br"),e(`
By default the content will be horizontally and vertically centered, but you could easily align it
at the bottom left for instance, with the `),i("code",null,"content-class"),e(` prop:
`),i("code",null,'content-class="align-end justify-start pa2"'),e(".")],-1),M=i("span",{class:"title1 pink"},"Wave UI",-1);function q(n,c,w,b,f,h){const l=r("title-link"),o=r("w-image"),d=r("example"),v=r("alert"),k=r("w-radios"),U=r("w-button"),$=r("w-alert");return m(),p("div",null,[t(l,{h2:""},{default:a(()=>[e("Why using w-image and not a simple <img>")]),_:1}),E,t(l,{h2:""},{default:a(()=>[e("Default")]),_:1}),x,t(d,{"content-class":"text-center"},{pug:a(()=>[e('w-image(:src="`${baseUrl}images/favicon.png`")')]),html:a(()=>[e('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>')]),js:a(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:a(()=>[t(o,{src:`${n.baseUrl}images/favicon.png`},null,8,["src"])]),_:1}),t(l,{h2:""},{default:a(()=>[e("Given dimensions")]),_:1}),t(d,{"content-class":"text-center w-flex justify-space-around wrap"},{pug:a(()=>[e('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")')]),html:a(()=>[e(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="150"
  :height="150">
</w-image>
<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="500"
  :height="150">
</w-image>`)]),js:a(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:a(()=>[t(o,{class:"mr5",src:`${n.baseUrl}images/japanese-wave.png`,width:150,height:150},null,8,["src"]),t(o,{src:`${n.baseUrl}images/japanese-wave.png`,width:500,height:150},null,8,["src"])]),_:1}),t(l,{h2:""},{default:a(()=>[e("Image ratio")]),_:1}),L,t(d,{"content-class":"text-center"},{pug:a(()=>[e('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="233 / 1000")')]),html:a(()=>[e('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="233 / 1000">\n</w-image>')]),js:a(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:a(()=>[t(o,{src:`${n.baseUrl}images/japanese-wave.png`,ratio:233/1e3},null,8,["src"])]),_:1}),t(l,{h2:"",slug:"using-the-img-tag"},{default:a(()=>[e("Using the <img> tag")]),_:1}),T,t(d,{"content-class":"text-center"},{pug:a(()=>[e('w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%" tag="img" style="max-width: 700px")')]),html:a(()=>[e(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  width="100%"
  tag="img"
  style="max-width: 700px">
</w-image>`)]),js:a(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:a(()=>[t(o,{src:`${n.baseUrl}images/japanese-wave.png`,width:"100%",tag:"img",style:{"max-width":"700px"}},null,8,["src"])]),_:1}),t(l,{h2:""},{default:a(()=>[e("Loading spinner")]),_:1}),B,t(d,{"content-class":"text-center"},{pug:a(()=>[e('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" width="100%" :ratio="1 / 2")')]),html:a(()=>[e(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  width="100%"
  :ratio="1 / 2">
</w-image>`)]),js:a(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]),default:a(()=>[t(o,{src:`${n.baseUrl}images/spirit-island--alberta.png`,width:"100%",ratio:1/2},null,8,["src"])]),_:1}),t(v,{tip:""},{default:a(()=>[R,e(" disabling the browser cache will prevent you from seeing the transition."),W,e(`
The reason for it is that the image first loads in the `),A,e(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)]),_:1}),t(l,{h2:""},{default:a(()=>[e("Transitions")]),_:1}),I,t(d,null,{pug:a(()=>[e(`w-flex(wrap justify-center align-center)
  div.mr4.my2
    .title3.mb2 Transition names
    w-radios(
      v-model="img.transition"
      :items="transitions"
      item-value-key="label")
      template(#label="{ item }")
        code `+s("{{ item.label }}")+`
    w-button.mt2(@click="reload") Reload image

  w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")`,1)]),html:a(()=>[e(`<w-flex wrap justify-center align-center>
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
          `+s("{{ item.label }}")+`
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
</w-flex>`,1)]),js:a(()=>[e(`data: () => ({
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
}`)]),default:a(()=>[i("div",V,[i("div",C,[z,t(k,{modelValue:n.img.transition,"onUpdate:modelValue":c[0]||(c[0]=g=>n.img.transition=g),items:n.transitions,"item-value-key":"label"},{label:a(({item:g})=>[i("code",null,s(g.label),1)]),_:1},8,["modelValue","items"]),t(U,{class:"mt2",onClick:h.reload},{default:a(()=>[e("Reload image")]),_:1},8,["onClick"])]),t(o,{src:n.img.src,width:500,height:250,transition:n.img.transition},null,8,["src","transition"])])]),_:1}),t(v,{tip:""},{default:a(()=>[O,e(" disabling the browser cache will prevent you from seeing the transition."),D,e(`
The reason for it is that the image first loads in the `),N,e(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)]),_:1}),t(l,{h2:""},{default:a(()=>[e("Fallback")]),_:1}),P,t(d,{"content-class":"text-center"},{pug:a(()=>[e('w-image(\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true")\n\nw-alert(v-if="showError" error) Oops. The image could not load!')]),html:a(()=>[e(`<w-image
  :src="\`\${baseUrl}images/broken.png\`"
  :fallback="\`\${baseUrl}images/not-found.jpg\`"
  @error="showError = true">
</w-image>

<w-alert
  v-if="showError"
  error>
  Oops. The image could not load!
</w-alert>`)]),js:a(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/',
  showError: false
})
`)]),default:a(()=>[t(o,{src:`${n.baseUrl}images/broken.png`,fallback:`${n.baseUrl}images/not-found.jpg`,onError:c[1]||(c[1]=g=>n.showError=!0)},null,8,["src","fallback"]),n.showError?(m(),S($,{key:0,error:""},{default:a(()=>[e("Oops. The image could not load!")]),_:1})):j("",!0)]),_:1}),t(l,{h2:""},{default:a(()=>[e("Lazy")]),_:1}),Y,t(d,null,{pug:a(()=>[e('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="2550 / 5098")')]),html:a(()=>[e(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  lazy
  :ratio="2550 / 5098">
</w-image>`)]),js:a(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:a(()=>[t(o,{src:`${n.baseUrl}images/spirit-island--alberta.png?v1`,lazy:"",ratio:2550/5098},null,8,["src"])]),_:1}),t(l,{h2:"",slug:"content"},{default:a(()=>[e("Content - via default slot")]),_:1}),F,t(d,null,{pug:a(()=>[e('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="2550 / 5098")\n  span.title1.pink Wave UI')]),html:a(()=>[e(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="2550 / 5098">
  <span class="title1 pink">Wave UI</span>
</w-image>`)]),js:a(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]),default:a(()=>[t(o,{src:`${n.baseUrl}images/japanese-wave.png`,ratio:2550/5098},{default:a(()=>[M]),_:1},8,["src"])]),_:1})])}const G={data:()=>({baseUrl:"/wave-ui/",img:{initialSrc:"/wave-ui/images/spirit-island--alberta.png",src:"/wave-ui/images/spirit-island--alberta.png",transition:"fade"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],showError:!1}),methods:{reload(){this.img.src="",setTimeout(()=>this.img.src=this.img.initialSrc,500)}}},H=u(G,[["render",q]]),J=i("div",{class:"w-divider my12"},null,-1);function K(n,c,w,b,f,h){const l=r("title-link"),o=r("component-api");return m(),p("div",null,[J,t(l,{class:"title1",h2:""},{default:a(()=>[e("API")]),_:1}),t(o,{class:"mt0",items:h.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(o,{items:n.slots,title:"Slots"},null,8,["items"]),t(o,{items:h.events,title:"Events"},null,8,["items"])])}const Q={tag:`Tells which tag to use for the <strong class="code">w-image</strong>'s image. It can be any valid HTML tag, like &lt;span&gt; or &lt;div&gt;. The wrapper of the image will use a &lt;span&gt; tag unless you use set the <code>tag</code> to div.<br><br>If you use the <code>img</code> tag, the image itself will use the &lt;img&gt; tag and the wrapper will use a &lt;span&gt; tag. The image will have a particular behavior as explained in the <a href="#using-the-img-tag">Using the &lt;img&gt; tag</a> example.`,src:"The source of the image to display.",width:"Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",height:"Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",ratio:'Sets the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. Refer to the <a href="#ratio">Ratio</a> example.',lazy:'When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.',absolute:"Sets the CSS position of the image to <code>absolute</code>.",fixed:"Sets the CSS position of the image to <code>fixed</code>.",contain:'By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".',noSpinner:"Removes the default spinner while the image is loading.",spinnerColor:"Define a specific color for the spinner while the image is loading. By default the spinner color is the primary color.",fallback:'Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.',transition:'Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.',contentClass:"Applies the given classes to the content wrapper when using the <code>default</code> slot."},X={default:{description:"Provide a custom content, to display on top of the image."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},Z={error:{description:"Emitted on image load error.",params:{"[DOM event]":"The associated DOM event."}},loaded:{description:"Emitted on image successful load.",params:{String:"The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed)."}},loading:{description:"Emitted when the image starts loading.",params:{String:"The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed)."}}},ee={data:()=>({propsDescs:Q,slots:X}),computed:{props(){return _.props},events(){return _.emits.reduce((n,c)=>(n[c]=Z[c]||{})&&n,{})}}},ae=u(ee,[["render",K]]);function te(n,c,w,b,f,h){const l=r("ui-component-title"),o=r("examples"),d=r("api");return m(),p("main",null,[t(l,{slug:"w-image"},{default:a(()=>[e("w-image")]),_:1}),t(o),t(d)])}const ie={components:{Examples:H,Api:ae}},se=u(ie,[["render",te]]);export{se as default};
