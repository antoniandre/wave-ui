import{r,o as u,g as w,a as i,w as t,b as e,d as a,t as g,c as j,f as S,_ as b,Q as y}from"./index-DmbSWeYz.js";const z={class:"w-card w-flex mdu-row basis-zero pa4 gap4"},T=a("div",null,[a("div",{class:"title3"},"A simple <img>"),a("p",null,[e("will display when loaded, and will take the dimensions of the actual image."),a("br"),e(`
When the image has a large file size, it will be loaded in chunks, and the image will be displayed
truncated until completely loaded.`),a("br"),a("br"),e(`
If ever it fails to load, a broken image icon will display instead (different on every browser).`),a("br"),a("br"),e(`
Setting both a width and height could stretch the image and loose the aspect ratio.
Which is IMHO, in most cases crappy except for repeated patterns.`)])],-1),R=a("div",null,[a("div",{class:"title3"},"The w-image"),a("p",null,[e(`can show a spinner while the image is loading, and display the image all at once with a nice
animation (like fade-in) when the image is ready.`),a("br"),a("br"),e(`
If ever it fails to load, `),a("strong",{class:"code"},"w-image"),e(` will handle the error gracefully, will emit a
`),a("code",null,"@error"),e(` event containing the error, and a blank transparent image will be displayed in place of the
image itself, so nothing looks broken.`),a("br"),e(`
Or, you can also provide a fallback image for cases when the main image has a chance not to be found (like with
dynamic src).`),a("br"),a("br"),e(`
Setting both a width and height will never loose the aspect ratio: it will auto-crop if needed.
`)])],-1),I=a("p",null,[e("With no given width, height or ratio, the image will be responsive, up to its full-size."),a("br"),e(`
This means a width of 100% is added, as well as the image computed ratio (to preserve it when
scaling down), and a max width equal to the real image width.`)],-1),E=a("div",{class:"caption text-center"},"Real size: 200x200.",-1),W=a("p",null,[e("In the "),a("code",null,"src"),e(" attribute, it's a good idea to use the "),a("code",null,"BASE_URL"),e(` environment variable to point to the
public root path of your app if your image is in the `),a("code",null,"public/"),e(" folder."),a("br"),e(`
For instance, this documentation public root path is `),a("code",null,"https://antoniandre.github.io/wave-ui/"),e(`, which is different
from just `),a("code",null,"/"),e(" which would point to "),a("code",null,"https://antoniandre.github.io/"),e("."),a("br")],-1),B=a("ul",null,[a("li",null,[e("With Vite, you can use "),a("code",null,g("import")+".meta.env.BASE_URL"),e(" to refer to your public app root URL.")]),a("li",null,[e("With Vue CLI or Webpack, you can also use "),a("code",null,g("process")+".env.BASE_URL"),e(".")])],-1),C=a("p",null,[e("You can set a width, a height, or both."),a("br"),e(`
If the image is bigger than the given width or height, it will be cropped.`),a("br"),e(`
But if you prefer it to be resized maintaining the ratio, then you can set a ratio.`)],-1),G={class:"mr5"},O=a("div",{class:"caption text-center"},"Real size: 1900x443. Given size: 150x150.",-1),A=a("div",{class:"caption text-center"},"Real size: 1900x443. Given size: 500x150.",-1),L=a("p",{class:"grey"},"The ratio prop purpose is to maintain the image ratio while resizing.",-1),V=a("p",null,`Similar to the default behavior (when no width, no height and no ratio are given), the image
will be scaling with its container preserving its aspect ratio. The only difference is that
it will also scale up beyond its real size.`,-1),D=a("p",null,"Let's see a few cases:",-1),F=a("p",{class:"grey"},"Image ratio equal to the exact width and height of the image (width / height).",-1),N=a("p",null,"This is the most common case: the image is visible in full, and scales with its container with preserved ratio.",-1),M=a("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1900 / 443.",-1),P=a("p",{class:"grey"},"Setting a different ratio than the actual image one.",-1),q=a("p",{class:"mb0"},`In this case, the image will be cropped on purpose, but still scaling with its container with
preserved ratio. 👍`,-1),H=a("div",{class:"caption"},"A drop shadow is added around the images to help visualizing the edges of the image.",-1),Y=a("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1000 / 443.",-1),K=a("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 3000 / 443.",-1),Q=a("p",null,`For instance, it happens frequently that an image should fill up the container space
(width or height) while maintaining a ratio.
`,-1),J=a("p",null,`Setting a small width with a unit that is not scaling (no percentage, no viewport unit) will have no
specific benefit. It will be the same as setting both a width and height.`,-1),X={class:"grow"},Z=a("p",null,"Set width",-1),ee=a("div",{class:"caption text-center"},[e("Real size: 200x200."),a("br"),e("Given ratio: 200 / 200, given width: 100.")],-1),ae={class:"grow"},te=a("p",null,"Set width",-1),ie=a("p",null,`Note: if you set 100% that's the same as the default behavior, adding a 100% when no width
and no height are added.`,-1),ne=a("div",{class:"caption text-center"},[e("Real size: 200x200."),a("br"),e("Given ratio: 200 / 200, given width: 100%.")],-1),se=a("p",null,"In this case the image will be cropped",-1),oe=a("p",null,[e("You can choose which tag the "),a("strong",{class:"code"},"w-image"),e(" should use."),a("br"),e(`
If you use an `),a("code",null,"img"),e(` tag, the image will behave exactly like a standard <img> image.
The biggest benefit of that, is that you can set a single `),a("code",null,"width"),e(" or "),a("code",null,"height"),e(` by itself,
and it will keep the natural image ratio while scaling without the need to specify the aspect ratio.`)],-1),le=a("p",null,`Note that by design, setting both a width and height with the <img> tag, will still allow you
to achieve image stretching, loosing the aspect ratio. This may be a desired effect or not.`,-1),re=a("p",null,[e("If you provide a caption, the w-image tag will be using a native HTML "),a("span",{class:"code"},"<figure>"),e(`
tag along with `),a("span",{class:"code"},"<figcaption>"),e(".")],-1),de=a("div",{class:"caption"},"Real size: 1900x443. Given max-width: 700.",-1),ce=a("p",null,`This image is very big, so that you have time to see the spinner while loading.
Refresh the page if you haven't seen it!`,-1),he=a("div",{class:"caption"},"Real size: 5098x2550. Given ratio: 5098 / 2550.",-1),ge=a("strong",null,"Dev notes:",-1),pe=a("br",null,null,-1),me=a("strong",{class:"code"},"w-image",-1),ue=a("p",null,`Once the image is fully loaded, it will display in one piece with a fade transition by default.
You can customize the transition.`,-1),we={class:"w-flex wrap justify-center align-center"},be={class:"mr4 my2"},fe=a("div",{class:"title3 mb2"},"Transition names",-1),ve=a("div",{class:"caption"},"Real size: 5098x2550. Given size: 500x250.",-1),_e=a("strong",null,"Dev notes:",-1),ye=a("br",null,null,-1),Ue=a("strong",{class:"code"},"w-image",-1),$e=a("p",null,[e(`The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent
background will be there instead preventing the browser's broken image logo.`),a("br"),e(`
You can also provide a custom fallback image to display if the image cannot load.`),a("br"),e(`
For instance, in a e-boutique you may try to load the image of an item without knowing if this item
has an available image or not.`),a("br"),a("br"),e(`
Thanks to the `),a("code",null,"error"),e(` emitted event, you can trigger a specific action, such as displaying an
error message like in this example. But this is optional, and without the custom alert nothing would
look broken when you provide a valid fallback image!`)],-1),ke=a("p",null,[e("By using the lazy attribute, it is possible to load the image only when it is in the viewport."),a("br"),e(`
Wave UI internally uses an `),a("span",{class:"code"},"IntersectionObserver"),e(` and will only start loading the image
when it is visible.`)],-1),xe=a("div",{class:"caption"},"Real size: 5098x2550.",-1),je=a("p",null,[e("In some cases, it can be convenient to have some content on top of the image."),a("br"),e(`
By default the content will be horizontally and vertically centered, but you could easily align it
at the bottom left for instance, with the `),a("code",null,"content-class"),e(` prop:
`),a("code",null,'content-class="align-end justify-start pa2"'),e(".")],-1),Se=a("span",{class:"title1 pink"},"Wave UI",-1);function ze(n,d,f,v,_,h){const s=r("title-link"),c=r("w-divider"),o=r("w-image"),l=r("example"),p=r("alert"),U=r("w-flex"),$=r("w-radios"),k=r("w-button"),x=r("w-alert");return u(),w("div",null,[i(s,{h2:""},{default:t(()=>[e("Why using w-image and not a simple <img>")]),_:1}),a("div",z,[T,i(c,{class:"no-grow primary",vertical:!n.$waveui.breakpoint.xs&&!n.$waveui.breakpoint.sm},{default:t(()=>[e("VS")]),_:1},8,["vertical"]),R]),i(s,{h2:""},{default:t(()=>[e("Default")]),_:1}),I,i(l,{"content-class":"text-center"},{pug:t(()=>[e('w-image(:src="`${baseUrl}images/favicon.png`")')]),html:t(()=>[e('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>')]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]),default:t(()=>[i(o,{src:`${n.baseUrl}images/favicon.png`},null,8,["src"]),E]),_:1}),i(p,{info:""},{default:t(()=>[W,B]),_:1}),i(s,{h2:""},{default:t(()=>[e("Given dimensions")]),_:1}),C,i(l,{"content-class":"text-center w-flex justify-space-around wrap"},{pug:t(()=>[e('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")')]),html:t(()=>[e(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="150"
  :height="150">
</w-image>
<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="500"
  :height="150">
</w-image>`)]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[a("div",G,[i(o,{src:`${n.baseUrl}images/japanese-wave.png`,width:150,height:150},null,8,["src"]),O]),a("div",null,[i(o,{src:`${n.baseUrl}images/japanese-wave.png`,width:500,height:150},null,8,["src"]),A])]),_:1}),i(s,{h2:""},{default:t(()=>[e("Image ratio")]),_:1}),L,V,D,i(s,{h3:""},{default:t(()=>[e("Real image ratio")]),_:1}),F,N,i(l,{"content-class":"text-center"},{pug:t(()=>[e('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443")')]),html:t(()=>[e('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="1900 / 443">\n</w-image>')]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[i(o,{src:`${n.baseUrl}images/japanese-wave.png`,ratio:1900/443},null,8,["src"]),M]),_:1}),i(s,{h3:""},{default:t(()=>[e("Custom ratio")]),_:1}),P,q,H,i(l,{"content-class":"text-center"},{pug:t(()=>[e('w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")\nw-image.sh1.mt6(:src="`${baseUrl}images/japanese-wave.png`" :ratio="3000 / 443")')]),html:t(()=>[e(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1000 / 443"
  class="sh1">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="3000 / 443"
  class="sh1 mt6">
</w-image>`)]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[a("div",null,[i(o,{class:"sh1",src:`${n.baseUrl}images/japanese-wave.png`,ratio:1e3/443},null,8,["src"]),Y]),a("div",null,[i(o,{class:"sh1 mt6",src:`${n.baseUrl}images/japanese-wave.png`,ratio:3e3/443},null,8,["src"]),K])]),_:1}),i(s,{h3:""},{default:t(()=>[e("Ratio combined with a set width and/or height")]),_:1}),Q,i(s,{class:"mt4",h4:""},{default:t(()=>[e("Ratio combined with a set width")]),_:1}),J,i(l,{"content-class":"text-center"},{pug:t(()=>[e('p Set width\nw-image(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" width="100")\n\np Set height\nw-image(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" height="100")\n\np Set width and height (pointless)\nw-image(:src="`${baseUrl}images/favicon.png`" :ratio="200 / 200" width="100" height="100")')]),html:t(()=>[e(`<p>Set width</p>
<w-image
  :src="\`\${baseUrl}images/favicon.png\`"
  :ratio="200 / 200"
  width="100">
</w-image>

<p>Set height</p>
<w-image
  :src="\`\${baseUrl}images/favicon.png\`"
  :ratio="200 / 200"
  height="100">
</w-image>

<p>Set width and height (pointless)</p>
<w-image
  :src="\`\${baseUrl}images/favicon.png\`"
  :ratio="200 / 200"
  width="100"
  height="100">
</w-image>`)]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[i(U,{"align-center":"",wrap:"",gap:"4"},{default:t(()=>[a("div",X,[Z,i(o,{class:"sh1",src:`${n.baseUrl}images/favicon.png`,ratio:200/200,width:"100"},null,8,["src"]),ee]),a("div",ae,[te,ie,i(o,{class:"sh1",src:`${n.baseUrl}images/favicon.png`,ratio:200/200},null,8,["src"]),ne])]),_:1})]),_:1}),i(s,{h3:""},{default:t(()=>[e("Ratio with a set max width")]),_:1}),i(o,{src:`${n.baseUrl}images/favicon.png`,ratio:200/200,"max-width":"300"},null,8,["src"]),i(s,{h3:""},{default:t(()=>[e("Ratio with a set max height")]),_:1}),i(o,{src:`${n.baseUrl}images/favicon.png`,ratio:200/200,"max-height":"100"},null,8,["src"]),se,i(l,{"content-class":"text-center"},{pug:t(()=>[e('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")')]),html:t(()=>[e('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="1000 / 443">\n</w-image>')]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[i(o,{src:`${n.baseUrl}images/favicon.png`,ratio:200/200},null,8,["src"])]),_:1}),i(s,{h2:"",slug:"using-the-img-tag"},{default:t(()=>[e("Using the <img> tag")]),_:1}),oe,i(p,{info:""},{default:t(()=>[le,i(l,{"content-class":"text-center w-flex justify-space-around wrap"},{default:t(()=>[i(o,{src:`${n.baseUrl}images/japanese-wave.png`,width:"100%",height:"100px",tag:"img"},null,8,["src"])]),_:1})]),_:1}),i(l,{"content-class":"text-center"},{pug:t(()=>[e('w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%" tag="img" style="max-width: 700px")')]),html:t(()=>[e(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  width="100%"
  tag="img"
  style="max-width: 700px">
</w-image>`)]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[i(o,{src:`${n.baseUrl}images/japanese-wave.png`,width:"100%",tag:"img",style:{"max-width":"700px"}},null,8,["src"])]),_:1}),i(s,{h2:""},{default:t(()=>[e("Figure with or without caption")]),_:1}),re,i(l,{"content-class":"text-center"},{pug:t(()=>[e('w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%" tag="img" style="max-width: 700px")')]),html:t(()=>[e(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  width="100%"
  tag="img"
  style="max-width: 700px">
</w-image>`)]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[i(o,{src:`${n.baseUrl}images/japanese-wave.png`,"max-width":"700",caption:"The Great Wave Off Kanagawa - Hokusai"},null,8,["src"]),de]),_:1}),i(s,{h2:""},{default:t(()=>[e("Loading spinner")]),_:1}),ce,i(l,{"content-class":"text-center"},{pug:t(()=>[e('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :ratio="5098 / 2550")')]),html:t(()=>[e('<w-image\n  :src="`${baseUrl}images/spirit-island--alberta.png`"\n  :ratio="5098 / 2550">\n</w-image>')]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]),default:t(()=>[i(o,{src:`${n.baseUrl}images/spirit-island--alberta.png`,ratio:5098/2550},null,8,["src"]),he]),_:1}),i(p,{tip:""},{default:t(()=>[ge,e(" disabling the browser cache will prevent you from seeing the transition."),pe,e(`
The reason for it is that the image first loads in the `),me,e(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)]),_:1}),i(s,{h2:""},{default:t(()=>[e("Transitions")]),_:1}),ue,i(l,null,{pug:t(()=>[e(`w-flex(wrap justify-center align-center)
  div.mr4.my2
    .title3.mb2 Transition names
    w-radios(
      v-model="img.transition"
      :items="transitions"
      item-value-key="label")
      template(#label="{ item }")
        code `+g("{{ item.label }}")+`
    w-button.mt2(@click="reload") Reload image

  w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")`)]),html:t(()=>[e(`<w-flex wrap justify-center align-center>
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
          `+g("{{ item.label }}")+`
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
</w-flex>`)]),js:t(()=>[e(`data: () => ({
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
}`)]),default:t(()=>[a("div",we,[a("div",be,[fe,i($,{modelValue:n.img.transition,"onUpdate:modelValue":d[0]||(d[0]=m=>n.img.transition=m),items:n.transitions,"item-value-key":"label"},{label:t(({item:m})=>[a("code",null,g(m.label),1)]),_:1},8,["modelValue","items"]),i(k,{class:"mt2",onClick:h.reload},{default:t(()=>[e("Reload image")]),_:1},8,["onClick"])]),a("div",null,[i(o,{src:n.img.src,width:500,height:250,transition:n.img.transition},null,8,["src","transition"]),ve])])]),_:1}),i(p,{tip:""},{default:t(()=>[_e,e(" disabling the browser cache will prevent you from seeing the transition."),ye,e(`
The reason for it is that the image first loads in the `),Ue,e(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)]),_:1}),i(s,{h2:""},{default:t(()=>[e("Fallback")]),_:1}),$e,i(l,{"content-class":"text-center"},{pug:t(()=>[e('w-image(\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true")\n\nw-alert(v-if="showError" error) Oops. The image could not load!')]),html:t(()=>[e(`<w-image
  :src="\`\${baseUrl}images/broken.png\`"
  :fallback="\`\${baseUrl}images/not-found.jpg\`"
  @error="showError = true">
</w-image>

<w-alert
  v-if="showError"
  error>
  Oops. The image could not load!
</w-alert>`)]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/',
  showError: false
})
`)]),default:t(()=>[i(o,{src:`${n.baseUrl}images/broken.png`,fallback:`${n.baseUrl}images/not-found.jpg`,onError:d[1]||(d[1]=m=>n.showError=!0)},null,8,["src","fallback"]),n.showError?(u(),j(x,{key:0,error:""},{default:t(()=>[e("Oops. The image could not load!")]),_:1})):S("",!0)]),_:1}),i(s,{h2:""},{default:t(()=>[e("Lazy")]),_:1}),ke,i(l,null,{pug:t(()=>[e('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="2550 / 5098")')]),html:t(()=>[e(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  lazy
  :ratio="2550 / 5098">
</w-image>`)]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[i(o,{src:`${n.baseUrl}images/spirit-island--alberta.png?v1`,lazy:"",ratio:2550/5098},null,8,["src"]),xe]),_:1}),i(s,{h2:"",slug:"content"},{default:t(()=>[e("Content - via default slot")]),_:1}),je,i(l,null,{pug:t(()=>[e('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="2550 / 5098")\n  span.title1.pink Wave UI')]),html:t(()=>[e(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="2550 / 5098">
  <span class="title1 pink">Wave UI</span>
</w-image>`)]),js:t(()=>[e(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]),default:t(()=>[i(o,{src:`${n.baseUrl}images/japanese-wave.png`,ratio:2550/5098},{default:t(()=>[Se]),_:1},8,["src"])]),_:1})])}const Te={data:()=>({baseUrl:"/wave-ui/",img:{initialSrc:"/wave-ui/images/spirit-island--alberta.png",src:"/wave-ui/images/spirit-island--alberta.png",transition:"fade"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],showError:!1}),methods:{reload(){this.img.src="",setTimeout(()=>this.img.src=this.img.initialSrc,500)}}},Re=b(Te,[["render",ze]]),Ie=a("div",{class:"w-divider my12"},null,-1);function Ee(n,d,f,v,_,h){const s=r("title-link"),c=r("component-api");return u(),w("div",null,[Ie,i(s,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),i(c,{class:"mt0",items:h.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),i(c,{items:n.slots,title:"Slots"},null,8,["items"]),i(c,{items:h.events,title:"Events"},null,8,["items"])])}const We={tag:`Tells which tag to use for the <strong class="code">w-image</strong>'s image. It can be any valid HTML tag, like &lt;span&gt; or &lt;div&gt;. The wrapper of the image will use a &lt;span&gt; tag unless you use set the <code>tag</code> to div.<br><br>If you use the <code>img</code> tag, the image itself will use the &lt;img&gt; tag and the wrapper will use a &lt;span&gt; tag. The image will have a particular behavior as explained in the <a href="#using-the-img-tag">Using the &lt;img&gt; tag</a> example.`,src:"The source of the image to display.",width:"Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",height:"Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",ratio:'Sets the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. Refer to the <a href="#ratio">Ratio</a> example.',lazy:'When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.',absolute:"Sets the CSS position of the image to <code>absolute</code>.",fixed:"Sets the CSS position of the image to <code>fixed</code>.",contain:'By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".',noSpinner:"Removes the default spinner while the image is loading.",spinnerColor:"Define a specific color for the spinner while the image is loading. By default the spinner color is the primary color.",fallback:'Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.',transition:'Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.',contentClass:"Applies the given classes to the content wrapper when using the <code>default</code> slot."},Be={default:{description:"Provide a custom content, to display on top of the image."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},Ce={error:{description:"Emitted on image load error.",params:{"[DOM event]":"The associated DOM event."}},loaded:{description:"Emitted on image successful load.",params:{String:"The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed)."}},loading:{description:"Emitted when the image starts loading.",params:{String:"The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed)."}}},Ge={data:()=>({propsDescs:We,slots:Be}),computed:{props(){return y.props},events(){return y.emits.reduce((n,d)=>(n[d]=Ce[d]||{})&&n,{})}}},Oe=b(Ge,[["render",Ee]]);function Ae(n,d,f,v,_,h){const s=r("ui-component-title"),c=r("examples"),o=r("api");return u(),w("main",null,[i(s,{slug:"w-image"},{default:t(()=>[e("w-image")]),_:1}),i(c),i(o)])}const Le={components:{Examples:Re,Api:Oe}},De=b(Le,[["render",Ae]]);export{De as default};
