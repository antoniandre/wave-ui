import{r,o as u,g as w,a as i,w as t,b as a,d as e,t as p,c as k,f as z,_ as b,P as y}from"./index-DdII2_7N.js";const T={class:"w-card w-flex mdu-row basis-zero pa4 gap4"},R=e("div",null,[e("div",{class:"title3"},"A simple <img>"),e("p",null,[a("will display when loaded, and will take the dimensions of the actual image."),e("br"),a(`
When the image has a large file size, it will be loaded in chunks, and the image will be displayed
truncated until completely loaded.`),e("br"),e("br"),a(`
If ever it fails to load, a broken image icon will display instead (different on every browser).`),e("br"),e("br"),a(`
Setting both a width and height could stretch the image and loose the aspect ratio.
Which is IMHO, in most cases crappy except for repeated patterns.`)])],-1),I=e("div",null,[e("div",{class:"title3"},"The w-image"),e("p",null,[a(`can show a spinner while the image is loading, and display the image all at once with a nice
animation (like fade-in) when the image is ready.`),e("br"),e("br"),a(`
If ever it fails to load, `),e("strong",{class:"code"},"w-image"),a(` will handle the error gracefully, will emit a
`),e("code",null,"@error"),a(` event containing the error, and a blank transparent image will be displayed in place of the
image itself, so nothing looks broken.`),e("br"),a(`
Or, you can also provide a fallback image for cases when the main image has a chance not to be found (like with
dynamic src).`),e("br"),e("br"),a(`
Setting both a width and height will never loose the aspect ratio: it will auto-crop if needed.
`)])],-1),G=e("div",{class:"title2 mt0 lh1"},[a("The "),e("strong",{class:"code"},"w-image"),a(" in a nutshell")],-1),S=e("ul",null,[e("li",null,"You can set a width or a height or both. That's all you need."),e("li",null,"The width and height may be fixed (e.g. in pixel) or adaptive (e.g. in percentage)."),e("li",null,"The ratio is not needed, but can be provided to override the intrinsic ratio and crop the image (keeping it responsive if it was)."),e("li",null,"You can choose a tag to use for the image, but don't need to. It can be a <span> (default) or <img>."),e("li",null,"Providing a caption, will use the native HTML <figure> and <figcaption> tags.")],-1),W=e("p",{class:"size--lg"},"Now here comes a ton of concrete examples.",-1),E=e("p",null,[a("With no given width, height or ratio, the image will be responsive, up to its full-size."),e("br"),a(`
This means a width of 100% is added, as well as the image computed ratio (to preserve it when
scaling down), and a max width equal to the real image width.`)],-1),O=e("div",{class:"caption text-center"},"Real size: 200x200.",-1),B=e("p",null,[a("In the "),e("code",null,"src"),a(" attribute, it's a good idea to use the "),e("code",null,"BASE_URL"),a(` environment variable to point to the
public root path of your app if your image is in the `),e("code",null,"public/"),a(" folder."),e("br"),a(`
For instance, this documentation public root path is `),e("code",null,"https://antoniandre.github.io/wave-ui/"),a(`, which is different
from just `),e("code",null,"/"),a(" which would point to "),e("code",null,"https://antoniandre.github.io/"),a("."),e("br")],-1),C=e("ul",null,[e("li",null,[a("With Vite, you can use "),e("code",null,p("import")+".meta.env.BASE_URL"),a(" to refer to your public app root URL.")]),e("li",null,[a("With Vue CLI or Webpack, you can also use "),e("code",null,p("process")+".env.BASE_URL"),a(".")])],-1),A=e("p",null,[e("strong",null,[a("You can set a width, a height, or both."),e("br")]),a("If the actual image is bigger than the given width or height, it will be cropped."),e("br"),a(`
But if you prefer it to be resized maintaining the ratio, then you can set a ratio.`)],-1),L=e("p",null,[a(`In both examples the image will always have the same fixed size regardless of the viewport or
constraints.`),e("br"),a(`
The first example forces the width and height to 150x150, which is smaller than the actual picture
size so it is cropping it (you can inspect with the dev tools).`),e("br"),a(`
The second example sets a width and height of 500x150, which is also cropping it.`)],-1),V={class:"mr5"},H=e("div",{class:"caption text-center"},"Real size: 1900x443. Given size: 150x150.",-1),D=e("div",{class:"caption text-center"},"Real size: 1900x443. Given size: 500x150.",-1),F=e("p",null,`If the width is all you provide, the real ratio of the image will be computed and used.
In result, the image will have the given fixed width and will display in full: it will not be cropped
and will not grow or shrink with constraints.`,-1),N=e("div",{class:"caption text-center"},"Real size: 1900x443. Given size: width=200.",-1),P=e("div",{class:"caption text-center"},"Real size: 1900x443. Given size: width=400.",-1),Y=e("p",null,`If the height is all you provide, the real ratio of the image will be computed and used.
In result, the image will have the given fixed height and will display in full: it will not be cropped
and will not grow or shrink with constraints.`,-1),K=e("div",{class:"caption text-center"},"Real size: 1900x443. Given size: height=70.",-1),M=e("div",{class:"caption text-center"},"Real size: 1900x443. Given size: height=120.",-1),q=e("p",{class:"grey mb0"},"When the width and/or height is adaptive to its container.",-1),J=e("div",null,[a("The only thing needed is width or a height, and "),e("strong",null,"Wave UI"),a(` will compute the ratio so it
can grow or shrink with the container.`),e("ul",null,[e("li",null,"The first case is setting a width of 100% of the example container, so it will adapt. Very classic."),e("li",null,[a("The second case is setting a height of 100% in a "),e("strong",{class:"code"},"w-card"),a(" that is fixed to 100px height.")]),e("li",null,`The third case is setting a width of 30vw and a height of 10vh which will constrain the image
in many possible ways which will likely crop horizontally or vertically when needed. Try
resizing your browser width and height to observe the rendering!`)])],-1),Q=e("div",{class:"caption text-center"},"Real size: 1900x443. Given size: width=100%.",-1),X=e("div",{class:"caption text-center"},"Real size: 1900x443. Given size: height=100%.",-1),Z=e("div",{class:"caption text-center"},"Real size: 1900x443. Given size: width=30vw, height=10vh.",-1),ee=e("p",{class:"grey"},"The ratio prop purpose is to maintain a specific image ratio while resizing with constraints.",-1),ae=e("p",null,[a(`Usually you don't need to set a ratio since Wave UI computes the original image ratio and already
applies it to the image.`),e("br"),a(`
But you may want to apply a different ratio than the image natural ratio, like in the second example.
`)],-1),te=e("p",{class:"grey"},"Image ratio equal to the exact width and height of the image (width / height).",-1),ie=e("p",null,[a(`This is the most common case: the image is visible in full, and scales with its container with
preserved ratio.`),e("br"),a(`
Note that Wave UI will add a width of 100% if neither of width and height are provided.`)],-1),ne=e("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1900 / 443.",-1),se=e("p",{class:"grey"},"Setting a different ratio than the actual image one.",-1),le=e("p",{class:"mb0"},`In this case, the image will be cropped on purpose, but still scaling with its container with
preserved ratio. 👍`,-1),oe=e("div",{class:"caption"},"A drop shadow is added around the images to help visualizing the edges of the image.",-1),re=e("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1000 / 443.",-1),he=e("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 3000 / 443.",-1),ce=e("p",null,[a(`If the ratio is the original, setting it is not necessary. But if you provide a different one
the image will be cropped.`),e("br"),a(`
Setting both a width and a height in addition to a ratio, would be pointless: it would be the same
outcome with just a width + height, or just a ratio + width, or ratio + height.`)],-1),de=e("p",null,"Ratio + width",-1),ge=e("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1, given width: 50%.",-1),pe=e("p",{class:"mt4"},"Ratio + height",-1),me=e("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1900 / 443, given height: 100.",-1),ue=e("p",{class:"mt4"},"Ratio + width + height (pointless)",-1),we=e("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1, given width: 400, given height: 100.",-1),be=e("p",null,[a("You can choose whether the "),e("strong",{class:"code"},"w-image"),a(` component should use the default <span>
tag or an <img>.`),e("br")],-1),fe=e("ul",null,[e("li",null,"The default <span> tag will allow cropping in particular which is very advantageous."),e("li",null,`The <img> tag will allow stretching the image, (not usually what we want, but you know, sometimes).
Or it could also be used for more semantics.`),e("li",null,`Also note that when sending to the printer, the <img> images will show up by default whereas
the background graphics will only show up if you choose this option. You can make the decision
according to the need.
`)],-1),ve=e("p",null,`Note that by design, setting both a width and height with the <img> tag, will still allow you
to achieve image stretching, loosing the aspect ratio. This may be a desired effect or not.`,-1),_e=e("div",{class:"caption text-center"},"Real size: 1900x443, given width: 100%, given height: 100px.",-1),ye=e("ul",null,[e("li",null,[a("You can tell the w-image component to use the native HTML "),e("span",{class:"code"},"<figure>"),a(` tag. In
that case, the image inside will use an `),e("span",{class:"code"},"<img>"),a(" tag.")]),e("li",null,[a(`If you provide a caption (with or without requesting a figure tag), the w-image tag will be
using the `),e("span",{class:"code"},"<figure>"),a(" tag along with "),e("span",{class:"code"},"<figcaption>"),a(".")])],-1),Ue=e("p",null,"Figure without caption.",-1),xe=e("p",{class:"mt8"},"Figure with caption.",-1),$e=e("p",{class:"mt8"},[a("With some quick styles adding these classes: "),e("code",null,".pa2.sh2.base-color--bg"),a(":")],-1),je=e("div",{class:"caption mt3"},"Real size: 1900x443. Given max-width: 700.",-1),ke=e("p",null,`This image is very big, so that you have time to see the spinner while loading.
Refresh the page if you haven't seen it (or enable dev tools throttling if your connection is too fast)!`,-1),ze=e("div",{class:"caption"},"Real size: 5098x2550. Given ratio: 5098 / 2550.",-1),Te=e("strong",null,"Dev notes:",-1),Re=e("br",null,null,-1),Ie=e("strong",{class:"code"},"w-image",-1),Ge=e("p",null,`Once the image is fully loaded, it will display in one piece with a fade transition by default.
You can customize the transition.`,-1),Se={class:"w-flex wrap justify-center align-center"},We={class:"mr4 my2"},Ee=e("div",{class:"title3 mb2"},"Transition names",-1),Oe=e("div",{class:"caption"},"Real size: 5098x2550. Given size: 500x250.",-1),Be=e("strong",null,"Dev notes:",-1),Ce=e("br",null,null,-1),Ae=e("strong",{class:"code"},"w-image",-1),Le={class:"w-flex gap6"},Ve=e("div",{class:"caption"},[a("Given size: 100x100."),e("br"),a("Border added for visualization.")],-1),He=e("p",null,[a(`If for some reason the image would not load, the default fallback is a blank 1x1 transparent gif
(invisible, ultra light), like so.`),e("br"),e("br"),a(`
So if the image can't load, a transparent background will be there instead preventing the
browser's broken image icon.`),e("br"),e("br"),a(`
But you can of course provide a custom fallback image to display if the image cannot load.
`)],-1),De=e("ul",null,[e("li",null,`For instance, in a e-boutique you may try to load the image of an item without knowing if this item
has an available image or not. In that case you can plan to have a fallback image, in case, like
following.`),e("li",null,[a("Thanks to the "),e("code",null,"error"),a(` emitted event, you can also trigger a specific action, such as displaying an
error message like in this example. But this is optional, and without the custom alert nothing would
look broken when you provide a valid fallback image!
`)])],-1),Fe=e("p",null,[a("By using the lazy attribute, it is possible to load the image only when it is in the viewport."),e("br"),a(`
Wave UI internally uses an `),e("span",{class:"code"},"IntersectionObserver"),a(` and will only start loading the image
when it is visible.`)],-1),Ne=e("div",{class:"caption"},"Real size: 5098x2550.",-1),Pe=e("p",null,[a("In some cases, it can be convenient to have some content on top of the image."),e("br"),a(`
By default the content will be horizontally and vertically centered, but you could easily align it
at the bottom left for instance, with the `),e("code",null,"content-class"),a(` prop:
`),e("code",null,'content-class="align-end justify-start pa2"'),a(".")],-1),Ye=e("span",{class:"title1 pink"},"Wave UI",-1);function Ke(n,h,f,v,_,g){const l=r("title-link"),c=r("w-divider"),d=r("alert"),s=r("w-image"),o=r("example"),U=r("w-card"),x=r("w-radios"),$=r("w-button"),j=r("w-alert");return u(),w("div",null,[i(l,{h2:""},{default:t(()=>[a("Why using w-image and not a simple <img>")]),_:1}),e("div",T,[R,i(c,{class:"no-grow primary",vertical:!n.$waveui.breakpoint.xs&&!n.$waveui.breakpoint.sm},{default:t(()=>[a("VS")]),_:1},8,["vertical"]),I]),i(d,{tip:""},{default:t(()=>[G,S]),_:1}),i(c,{class:"ma12"}),W,i(l,{h2:""},{default:t(()=>[a("Default")]),_:1}),E,i(o,{"content-class":"text-center"},{pug:t(()=>[a('w-image(:src="`${baseUrl}images/favicon.png`")')]),html:t(()=>[a('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>')]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]),default:t(()=>[i(s,{src:`${n.baseUrl}images/favicon.png`},null,8,["src"]),O]),_:1}),i(d,{info:""},{default:t(()=>[B,C]),_:1}),i(l,{h2:""},{default:t(()=>[a("Given dimensions")]),_:1}),A,i(l,{h3:""},{default:t(()=>[a("Given both fixed width and height")]),_:1}),L,i(o,{"content-class":"text-center w-flex justify-space-around wrap"},{pug:t(()=>[a('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")')]),html:t(()=>[a(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="150"
  :height="150">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="500"
  :height="150">
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[e("div",V,[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,width:150,height:150},null,8,["src"]),H]),e("div",null,[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,width:500,height:150},null,8,["src"]),D])]),_:1}),i(l,{h3:""},{default:t(()=>[a("Given fixed width only")]),_:1}),F,i(o,{"content-class":"text-center w-flex column"},{pug:t(()=>[a('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="200")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="400")')]),html:t(()=>[a(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="200">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="400">
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[e("div",null,[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,width:200},null,8,["src"]),N]),e("div",null,[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,width:400},null,8,["src"]),P])]),_:1}),i(l,{h3:""},{default:t(()=>[a("Given fixed height only")]),_:1}),Y,i(o,{"content-class":"text-center w-flex column"},{pug:t(()=>[a('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :height="70")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :height="120")')]),html:t(()=>[a(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :height="70">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :height="120">
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[e("div",null,[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,height:70},null,8,["src"]),K]),e("div",null,[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,height:120},null,8,["src"]),M])]),_:1}),i(l,{h3:""},{default:t(()=>[a("Relative width and/or height")]),_:1}),q,J,i(o,{"content-class":"text-center w-flex column gap5"},{pug:t(()=>[a('w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%")\n\nw-card(content-class="pa0" style="height: 100px")\n  w-image(:src="`${baseUrl}images/japanese-wave.png`" height="100%")')]),html:t(()=>[a(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  width="100%">
</w-image>

<w-card content-class="pa0" style="height: 100px">
  <w-image
    :src="\`\${baseUrl}images/japanese-wave.png\`"
    height="100%">
  </w-image>
</w-card>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  width="30vw"
  height="10vh">
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[e("div",null,[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,width:"100%"},null,8,["src"]),Q]),e("div",null,[i(U,{"content-class":"pa0",style:{height:"100px"}},{default:t(()=>[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,height:"100%"},null,8,["src"])]),_:1}),X]),e("div",null,[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,width:"30vw",height:"10vh"},null,8,["src"]),Z])]),_:1}),i(l,{h2:""},{default:t(()=>[a("Image ratio")]),_:1}),ee,ae,i(l,{h3:""},{default:t(()=>[a("Intrinsic image ratio")]),_:1}),te,ie,i(d,{class:"mt2",tip:""},{default:t(()=>[a("In this case, you can obtain the same result by just setting a width of 100%.")]),_:1}),i(o,{"content-class":"text-center"},{pug:t(()=>[a('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443")')]),html:t(()=>[a('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="1900 / 443">\n</w-image>')]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,ratio:1900/443},null,8,["src"]),ne]),_:1}),i(l,{h3:""},{default:t(()=>[a("Custom ratio")]),_:1}),se,le,oe,i(o,{"content-class":"text-center"},{pug:t(()=>[a('w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")\n\nw-image.sh1.mt6(:src="`${baseUrl}images/japanese-wave.png`" :ratio="3000 / 443")')]),html:t(()=>[a(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1000 / 443"
  class="sh1">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="3000 / 443"
  class="sh1 mt6">
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[e("div",null,[i(s,{class:"sh1",src:`${n.baseUrl}images/japanese-wave.png`,ratio:1e3/443},null,8,["src"]),re]),e("div",null,[i(s,{class:"sh1 mt6",src:`${n.baseUrl}images/japanese-wave.png`,ratio:3e3/443},null,8,["src"]),he])]),_:1}),i(l,{h3:""},{default:t(()=>[a("Ratio combined with a set width or height")]),_:1}),ce,i(o,{"content-class":"text-center"},{pug:t(()=>[a('p Ratio + width\nw-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="50%")\n\np.mt4 Ratio + height\nw-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443" height="100")\n\np.mt4 Ratio + width + height (pointless)\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="400" height="100")')]),html:t(()=>[a(`<p>Ratio + width</p>
<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1"
  width="50%">
</w-image>

<p class="mt4">Ratio + height</p>
<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1900 / 443"
  height="100">
</w-image>

<p class="mt4">Ratio + width + height (pointless)</p>
<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1"
  width="400"
  height="100">
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[de,i(s,{class:"sh1",src:`${n.baseUrl}images/japanese-wave.png`,ratio:1,width:"50%"},null,8,["src"]),ge,pe,i(s,{class:"sh1",src:`${n.baseUrl}images/japanese-wave.png`,ratio:1900/443,height:"100"},null,8,["src"]),me,ue,i(s,{src:`${n.baseUrl}images/japanese-wave.png`,ratio:1,width:"400",height:"100"},null,8,["src"]),we]),_:1}),i(l,{h2:"",slug:"using-the-img-tag"},{default:t(()=>[a("Using the <img> tag")]),_:1}),be,fe,i(d,{info:""},{default:t(()=>[ve,i(o,{"content-class":"text-center w-flex justify-space-around wrap"},{default:t(()=>[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,tag:"img",width:"100%",height:"100px"},null,8,["src"]),_e]),_:1})]),_:1}),i(o,{"content-class":"text-center"},{pug:t(()=>[a('w-image(:src="`${baseUrl}images/japanese-wave.png`" tag="img" width="100%" max-width="700px")')]),html:t(()=>[a(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  tag="img"
  width="100%"
  max-width="700px">
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,tag:"img",width:"100%","max-width":"700px"},null,8,["src"])]),_:1}),i(l,{h2:""},{default:t(()=>[a("Figure with or without caption")]),_:1}),ye,i(o,{"content-class":"text-center"},{pug:t(()=>[a(`w-image(
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  tag="figure"
  max-width="700")

w-image(
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  caption="The Great Wave Off Kanagawa - Hokusai"
  max-width="700")

w-image.pa2.sh2.base-color--bg(
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  caption="The Great Wave Off Kanagawa - Hokusai"
  max-width="700")`)]),html:t(()=>[a(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  tag="figure"
  max-width="700">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  caption="The Great Wave Off Kanagawa - Hokusai"
  max-width="700">
</w-image>

<w-image
  class="sh2 base-color--bg pa2"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  caption="The Great Wave Off Kanagawa - Hokusai"
  max-width="700">
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[Ue,i(s,{src:`${n.baseUrl}images/japanese-wave.png`,tag:"figure","max-width":"700"},null,8,["src"]),xe,i(s,{src:`${n.baseUrl}images/japanese-wave.png`,caption:"The Great Wave Off Kanagawa - Hokusai","max-width":"700"},null,8,["src"]),$e,i(s,{class:"pa2 sh2 base-color--bg",src:`${n.baseUrl}images/japanese-wave.png`,caption:"The Great Wave Off Kanagawa - Hokusai","max-width":"700"},null,8,["src"]),je]),_:1}),i(l,{h2:""},{default:t(()=>[a("Loading spinner")]),_:1}),ke,i(o,{"content-class":"text-center"},{pug:t(()=>[a('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :ratio="5098 / 2550")')]),html:t(()=>[a('<w-image\n  :src="`${baseUrl}images/spirit-island--alberta.png`"\n  :ratio="5098 / 2550">\n</w-image>')]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]),default:t(()=>[i(s,{src:`${n.baseUrl}images/spirit-island--alberta.png`,ratio:5098/2550},null,8,["src"]),ze]),_:1}),i(d,{tip:""},{default:t(()=>[Te,a(" disabling the browser cache will prevent you from seeing the transition."),Re,a(`
The reason for it is that the image first loads in the `),Ie,a(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)]),_:1}),i(l,{h2:""},{default:t(()=>[a("Transitions")]),_:1}),Ge,i(o,null,{pug:t(()=>[a(`w-flex(wrap justify-center align-center)
  div.mr4.my2
    .title3.mb2 Transition names
    w-radios(
      v-model="img.transition"
      :items="transitions"
      item-value-key="label")
      template(#label="{ item }")
        code `+p("{{ item.label }}")+`
    w-button.mt2(@click="reload") Reload image

  w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")`)]),html:t(()=>[a(`<w-flex wrap justify-center align-center>
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
          `+p("{{ item.label }}")+`
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
</w-flex>`)]),js:t(()=>[a(`data: () => ({
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
}`)]),default:t(()=>[e("div",Se,[e("div",We,[Ee,i(x,{modelValue:n.img.transition,"onUpdate:modelValue":h[0]||(h[0]=m=>n.img.transition=m),items:n.transitions,"item-value-key":"label"},{label:t(({item:m})=>[e("code",null,p(m.label),1)]),_:1},8,["modelValue","items"]),i($,{class:"mt2",onClick:g.reload},{default:t(()=>[a("Reload image")]),_:1},8,["onClick"])]),e("div",null,[i(s,{src:n.img.src,width:500,height:250,transition:n.img.transition},null,8,["src","transition"]),Oe])])]),_:1}),i(d,{tip:""},{default:t(()=>[Be,a(" disabling the browser cache will prevent you from seeing the transition."),Ce,a(`
The reason for it is that the image first loads in the `),Ae,a(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)]),_:1}),i(l,{h2:""},{default:t(()=>[a("Error handling & Fallback")]),_:1}),e("div",Le,[i(o,{class:"mt0 no-grow","content-class":"text-center px6"},{pug:t(()=>[a('w-image.bd1(src="/images/broken.png" width="100" height="100")')]),html:t(()=>[a(`<w-image
  class="bd1"
  src="/images/broken.png"
  width="100"
  height="100">
</w-image>`)]),default:t(()=>[i(s,{class:"bd1",src:"/images/broken.png",width:"100",height:"100"}),Ve]),_:1}),He]),i(l,{h3:""},{default:t(()=>[a("Fallback & Error handling")]),_:1}),De,i(o,{"content-class":"text-center"},{pug:t(()=>[a('w-image(\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true")\n\nw-alert(v-if="showError" error) Oops. The image could not load!')]),html:t(()=>[a(`<w-image
  :src="\`\${baseUrl}images/broken.png\`"
  :fallback="\`\${baseUrl}images/not-found.jpg\`"
  @error="showError = true">
</w-image>

<w-alert
  v-if="showError"
  error>
  Oops. The image could not load!
</w-alert>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/',
  showError: false
})
`)]),default:t(()=>[i(s,{src:`${n.baseUrl}images/broken.png`,fallback:`${n.baseUrl}images/not-found.jpg`,onError:h[1]||(h[1]=m=>n.showError=!0)},null,8,["src","fallback"]),n.showError?(u(),k(j,{key:0,error:""},{default:t(()=>[a("Oops. The image could not load!")]),_:1})):z("",!0)]),_:1}),i(l,{h2:""},{default:t(()=>[a("Lazy")]),_:1}),Fe,i(o,null,{pug:t(()=>[a('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="5098 / 2550")')]),html:t(()=>[a(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  lazy
  :ratio="5098 / 2550">
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:t(()=>[i(s,{src:`${n.baseUrl}images/spirit-island--alberta.png?v1`,lazy:"",ratio:5098/2550},null,8,["src"]),Ne]),_:1}),i(l,{h2:"",slug:"content"},{default:t(()=>[a("Content - via default slot")]),_:1}),Pe,i(o,null,{pug:t(()=>[a('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="5098 / 2550")\n  span.title1.pink Wave UI')]),html:t(()=>[a(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="5098 / 2550">
  <span class="title1 pink">Wave UI</span>
</w-image>`)]),js:t(()=>[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]),default:t(()=>[i(s,{src:`${n.baseUrl}images/japanese-wave.png`,ratio:5098/2550},{default:t(()=>[Ye]),_:1},8,["src"])]),_:1})])}const Me={data:()=>({baseUrl:"/wave-ui/",img:{initialSrc:"/wave-ui/images/spirit-island--alberta.png",src:"/wave-ui/images/spirit-island--alberta.png",transition:"fade"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],showError:!1}),methods:{reload(){this.img.src="",setTimeout(()=>this.img.src=this.img.initialSrc,500)}}},qe=b(Me,[["render",Ke]]),Je=e("div",{class:"w-divider my12"},null,-1);function Qe(n,h,f,v,_,g){const l=r("title-link"),c=r("component-api");return u(),w("div",null,[Je,i(l,{class:"title1",h2:""},{default:t(()=>[a("API")]),_:1}),i(c,{class:"mt0",items:g.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),i(c,{items:n.slots,title:"Slots"},null,8,["items"]),i(c,{items:g.events,title:"Events"},null,8,["items"])])}const Xe={tag:`Tells which tag to use for the <strong class="code">w-image</strong>'s image. It can be any valid HTML tag, like &lt;span&gt; or &lt;div&gt;. The wrapper of the image will use a &lt;span&gt; tag unless you use set the <code>tag</code> to div.<br><br>If you use the <code>img</code> tag, the image itself will use the &lt;img&gt; tag and the wrapper will use a &lt;span&gt; tag. The image will have a particular behavior as explained in the <a href="#using-the-img-tag">Using the &lt;img&gt; tag</a> example.`,src:"The source of the image to display.",width:"Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",height:"Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",ratio:'Sets the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. Refer to the <a href="#ratio">Ratio</a> example.',lazy:'When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.',absolute:"Sets the CSS position of the image to <code>absolute</code>.",fixed:"Sets the CSS position of the image to <code>fixed</code>.",contain:'By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".',noSpinner:"Removes the default spinner while the image is loading.",spinnerColor:"Define a specific color for the spinner while the image is loading. By default the spinner color is the primary color.",fallback:'Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.',transition:'Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.',contentClass:"Applies the given classes to the content wrapper when using the <code>default</code> slot."},Ze={default:{description:"Provide a custom content, to display on top of the image."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},ea={error:{description:"Emitted on image load error.",params:{"[DOM event]":"The associated DOM event."}},loaded:{description:"Emitted on image successful load.",params:{String:"The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed)."}},loading:{description:"Emitted when the image starts loading.",params:{String:"The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed)."}}},aa={data:()=>({propsDescs:Xe,slots:Ze}),computed:{props(){return y.props},events(){return y.emits.reduce((n,h)=>(n[h]=ea[h]||{})&&n,{})}}},ta=b(aa,[["render",Qe]]);function ia(n,h,f,v,_,g){const l=r("ui-component-title"),c=r("examples"),d=r("api");return u(),w("main",null,[i(l,{slug:"w-image"},{default:t(()=>[a("w-image")]),_:1}),i(c),i(d)])}const na={components:{Examples:qe,Api:ta}},la=b(na,[["render",ia]]);export{la as default};
