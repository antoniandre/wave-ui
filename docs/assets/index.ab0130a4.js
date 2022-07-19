import{r,o as m,f as p,a,w as t,e,h as s,b as i,c as S,d as j,i as y,_ as u,bJ as v}from"./index.6bc90973.js";const E=e("Why using w-image and not a simple <img>"),x=y(`<div class="title3">A simple &lt;img&gt;</div><p>will display when loaded, and will take the dimensions of the actual image.<br>
When the image has a large file size, it will be loaded in chunks, and the image will be displayed
truncated until completely loaded.<br><br>
If ever it fails to load a broken image icon will display instead (different on every browser).<br></p><div class="title3">The w-image</div><p>can show a spinner while the image is loading, and display the image all at once with a nice
animation (like fade-in) when the iamge is ready.<br>
It also allows you to set a fallback image in case the provided image might be unfound (convenient with
dynamic sources).<br>
If ever no image is found, <strong class="code">w-image</strong> will handle the error gracefully and will emit a
<code>@error</code> event containing the error. A blank transparent image will be displayed in place of the
image itself. So that, nothing looks broken.
</p>`,4),L=e("Default"),T=i("p",null,"With no given width, height or ratio, the image is loaded full-size.",-1),R=e('w-image(:src="`${baseUrl}images/favicon.png`")'),B=e('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>'),W=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`),A=e("Given dimensions"),I=e('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")'),V=e(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="150"
  :height="150">
</w-image>
<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="500"
  :height="150">
</w-image>`),C=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`),z=e("Image ratio"),O=i("p",null,[e(`You may want to have a responsive image. By setting an image ratio (height / width) and a width
to 100% the image will always keep the ratio while resizing.`),i("br"),e(`
If no `),i("code",null,"width"),e(" or "),i("code",null,"height"),e(" is set but a "),i("code",null,"ratio"),e(" is given, the "),i("code",null,"width"),e(` will
be set to 100%.`)],-1),D=e('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="233 / 1000")'),N=e('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="233 / 1000">\n</w-image>'),P=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`),Y=e("Using the <img> tag"),F=y(`<p>You can choose which tag the <strong class="code">w-image</strong> should use.<br>
If you use an <code>img</code> tag, the image will behave exactly like a standard image.
The biggest benefit of that, is that you can set a <code>width</code> or <code>height</code> only, keep a ratio,
and apply a <code>max-width</code> or <code>max-height</code> on top of that so if the image would be bigger
than the container it would still apply the ratio on the constrained image.
</p>`,1),M=e('w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%" tag="img" style="max-width: 700px")'),q=e(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  width="100%"
  tag="img"
  style="max-width: 700px">
</w-image>`),G=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`),H=e("Loading spinner"),J=i("p",null,`This image is very big, so that you have time to see the spinner while loading.
Refresh the page if you haven't seen it!`,-1),K=e('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" width="100%" :ratio="1 / 2")'),Q=e(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  width="100%"
  :ratio="1 / 2">
</w-image>`),X=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`),Z=i("strong",null,"Dev notes:",-1),ee=e(" disabling the browser cache will prevent you from seeing the transition."),te=i("br",null,null,-1),ae=e(`
The reason for it is that the image first loads in the `),ie=i("strong",{class:"code"},"w-image",-1),ne=e(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`),se=e("Transitions"),oe=i("p",null,`Once the image is fully loaded, it will display in one piece with a fade transition by default.
You can customize the transition.`,-1),le={class:"w-flex wrap justify-center align-center"},re={class:"mr4 my2"},de=i("div",{class:"title3 mb2"},"Transition names",-1),ce=e("Reload image"),he=e(`data: () => ({
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
}`),ge=i("strong",null,"Dev notes:",-1),me=e(" disabling the browser cache will prevent you from seeing the transition."),pe=i("br",null,null,-1),ue=e(`
The reason for it is that the image first loads in the `),we=i("strong",{class:"code"},"w-image",-1),be=e(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`),_e=e("Fallback"),fe=i("p",null,[e(`The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent
background will be there instead preventing the browser's broken image logo.`),i("br"),e(`
You can also provide a custom fallback image to display if the image cannot load.`),i("br"),e(`
For instance, in a e-boutique you may try to load the image of an item without knowing if this item
has an available image or not.`),i("br"),i("br"),e(`
Thanks to the `),i("code",null,"error"),e(` emitted event, you can trigger a specific action, such as displaying an
error message like in this example. But this is optional, and without the custom alert nothing would
look broken when you provide a valid fallback image!`)],-1),ve=e("Oops. The image could not load!"),ye=e('w-image(\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true")\n\nw-alert(v-if="showError" error) Oops. The image could not load!'),ke=e(`<w-image
  :src="\`\${baseUrl}images/broken.png\`"
  :fallback="\`\${baseUrl}images/not-found.jpg\`"
  @error="showError = true">
</w-image>

<w-alert
  v-if="showError"
  error>
  Oops. The image could not load!
</w-alert>`),Ue=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/',
  showError: false
})
`),$e=e("Lazy"),Se=i("p",null,[e("By using the lazy attribute, it is possible to load the image only when it is in the viewport."),i("br"),e(`
Wave UI internally uses an `),i("span",{class:"code"},"IntersectionObserver"),e(` and will only start loading the image
when it is visible.`)],-1),je=e('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="2550 / 5098")'),Ee=e(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  lazy
  :ratio="2550 / 5098">
</w-image>`),xe=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`),Le=e("Content - via default slot"),Te=i("p",null,[e("In some cases, it can be convenient to have some content on top of the image."),i("br"),e(`
By default the content will be horizontally and vertically centered, but you could easily align it
at the bottom left for instance, with the `),i("code",null,"content-class"),e(" prop: "),i("code",null,'content-class="align-end justify-start pa2"'),e(".")],-1),Re=i("span",{class:"title1 pink"},"Wave UI",-1),Be=e('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="2550 / 5098")\n  span.title1.pink Wave UI'),We=e(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="2550 / 5098">
  <span class="title1 pink">Wave UI</span>
</w-image>`),Ae=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, `"+s("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`);function Ie(n,c,w,b,_,h){const l=r("title-link"),o=r("w-image"),d=r("example"),f=r("alert"),k=r("w-radios"),U=r("w-button"),$=r("w-alert");return m(),p("div",null,[a(l,{h2:""},{default:t(()=>[E]),_:1}),x,a(l,{h2:""},{default:t(()=>[L]),_:1}),T,a(d,{"content-class":"text-center"},{pug:t(()=>[R]),html:t(()=>[B]),js:t(()=>[W]),default:t(()=>[a(o,{src:`${n.baseUrl}images/favicon.png`},null,8,["src"])]),_:1}),a(l,{h2:""},{default:t(()=>[A]),_:1}),a(d,{"content-class":"text-center w-flex justify-space-around wrap"},{pug:t(()=>[I]),html:t(()=>[V]),js:t(()=>[C]),default:t(()=>[a(o,{class:"mr5",src:`${n.baseUrl}images/japanese-wave.png`,width:150,height:150},null,8,["src"]),a(o,{src:`${n.baseUrl}images/japanese-wave.png`,width:500,height:150},null,8,["src"])]),_:1}),a(l,{h2:""},{default:t(()=>[z]),_:1}),O,a(d,{"content-class":"text-center"},{pug:t(()=>[D]),html:t(()=>[N]),js:t(()=>[P]),default:t(()=>[a(o,{src:`${n.baseUrl}images/japanese-wave.png`,ratio:233/1e3},null,8,["src"])]),_:1}),a(l,{h2:"",slug:"using-the-img-tag"},{default:t(()=>[Y]),_:1}),F,a(d,{"content-class":"text-center"},{pug:t(()=>[M]),html:t(()=>[q]),js:t(()=>[G]),default:t(()=>[a(o,{src:`${n.baseUrl}images/japanese-wave.png`,width:"100%",tag:"img",style:{"max-width":"700px"}},null,8,["src"])]),_:1}),a(l,{h2:""},{default:t(()=>[H]),_:1}),J,a(d,{"content-class":"text-center"},{pug:t(()=>[K]),html:t(()=>[Q]),js:t(()=>[X]),default:t(()=>[a(o,{src:`${n.baseUrl}images/spirit-island--alberta.png`,width:"100%",ratio:1/2},null,8,["src"])]),_:1}),a(f,{tip:""},{default:t(()=>[Z,ee,te,ae,ie,ne]),_:1}),a(l,{h2:""},{default:t(()=>[se]),_:1}),oe,a(d,null,{pug:t(()=>[e(`w-flex(wrap justify-center align-center)
  div.mr4.my2
    .title3.mb2 Transition names
    w-radios(
      v-model="img.transition"
      :items="transitions"
      item-value-key="label")
      template(#label="{ item }")
        code `+s("{{ item.label }}")+`
    w-button.mt2(@click="reload") Reload image

  w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")`,1)]),html:t(()=>[e(`<w-flex wrap justify-center align-center>
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
</w-flex>`,1)]),js:t(()=>[he]),default:t(()=>[i("div",le,[i("div",re,[de,a(k,{modelValue:n.img.transition,"onUpdate:modelValue":c[0]||(c[0]=g=>n.img.transition=g),items:n.transitions,"item-value-key":"label"},{label:t(({item:g})=>[i("code",null,s(g.label),1)]),_:1},8,["modelValue","items"]),a(U,{class:"mt2",onClick:h.reload},{default:t(()=>[ce]),_:1},8,["onClick"])]),a(o,{src:n.img.src,width:500,height:250,transition:n.img.transition},null,8,["src","transition"])])]),_:1}),a(f,{tip:""},{default:t(()=>[ge,me,pe,ue,we,be]),_:1}),a(l,{h2:""},{default:t(()=>[_e]),_:1}),fe,a(d,{"content-class":"text-center"},{pug:t(()=>[ye]),html:t(()=>[ke]),js:t(()=>[Ue]),default:t(()=>[a(o,{src:`${n.baseUrl}images/broken.png`,fallback:`${n.baseUrl}images/not-found.jpg`,onError:c[1]||(c[1]=g=>n.showError=!0)},null,8,["src","fallback"]),n.showError?(m(),S($,{key:0,error:""},{default:t(()=>[ve]),_:1})):j("",!0)]),_:1}),a(l,{h2:""},{default:t(()=>[$e]),_:1}),Se,a(d,null,{pug:t(()=>[je]),html:t(()=>[Ee]),js:t(()=>[xe]),default:t(()=>[a(o,{src:`${n.baseUrl}images/spirit-island--alberta.png?v1`,lazy:"",ratio:2550/5098},null,8,["src"])]),_:1}),a(l,{h2:"",slug:"content"},{default:t(()=>[Le]),_:1}),Te,a(d,null,{pug:t(()=>[Be]),html:t(()=>[We]),js:t(()=>[Ae]),default:t(()=>[a(o,{src:`${n.baseUrl}images/japanese-wave.png`,ratio:2550/5098},{default:t(()=>[Re]),_:1},8,["src"])]),_:1})])}const Ve={data:()=>({baseUrl:"/wave-ui/",img:{initialSrc:"/wave-ui/images/spirit-island--alberta.png",src:"/wave-ui/images/spirit-island--alberta.png",transition:"fade"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],showError:!1}),methods:{reload(){this.img.src="",setTimeout(()=>this.img.src=this.img.initialSrc,500)}}};var Ce=u(Ve,[["render",Ie]]);const ze=i("div",{class:"w-divider my12"},null,-1),Oe=e("API");function De(n,c,w,b,_,h){const l=r("title-link"),o=r("component-api");return m(),p("div",null,[ze,a(l,{class:"title1",h2:""},{default:t(()=>[Oe]),_:1}),a(o,{class:"mt0",items:h.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),a(o,{items:n.slots,title:"Slots"},null,8,["items"]),a(o,{items:h.events,title:"Events"},null,8,["items"])])}const Ne={tag:`Tells which tag to use for the <strong class="code">w-image</strong>'s image. It can be any valid HTML tag, like &lt;span&gt; or &lt;div&gt;. The wrapper of the image will use a &lt;span&gt; tag unless you use set the <code>tag</code> to div.<br><br>If you use the <code>img</code> tag, the image itself will use the &lt;img&gt; tag and the wrapper will use a &lt;span&gt; tag. The image will have a particular behavior as explained in the <a href="#using-the-img-tag">Using the &lt;img&gt; tag</a> example.`,src:"The source of the image to display.",width:"Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",height:"Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",ratio:'Sets the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. Refer to the <a href="#ratio">Ratio</a> example.',lazy:'When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.',absolute:"Sets the CSS position of the image to <code>absolute</code>.",fixed:"Sets the CSS position of the image to <code>fixed</code>.",contain:'By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".',noSpinner:"Removes the default spinner while the image is loading.",fallback:'Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.',transition:'Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.',contentClass:"Applies the given classes to the content wrapper when using the <code>default</code> slot."},Pe={default:{description:"Provide a custom content, to display on top of the image."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},Ye={error:{description:"Emitted on image load error.",params:{"[DOM event]":"The associated DOM event."}},loaded:{description:"Emitted on image successful load.",params:{String:"The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed)."}},loading:{description:"Emitted when the image starts loading.",params:{String:"The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed)."}}},Fe={data:()=>({propsDescs:Ne,slots:Pe}),computed:{props(){return v.props},events(){return v.emits.reduce((n,c)=>(n[c]=Ye[c]||{})&&n,{})}}};var Me=u(Fe,[["render",De]]);const qe=e("w-image");function Ge(n,c,w,b,_,h){const l=r("ui-component-title"),o=r("examples"),d=r("api");return m(),p("main",null,[a(l,{slug:"w-image"},{default:t(()=>[qe]),_:1}),a(o),a(d)])}const He={components:{Examples:Ce,Api:Me}};var Ke=u(He,[["render",Ge]]);export{Ke as default};
