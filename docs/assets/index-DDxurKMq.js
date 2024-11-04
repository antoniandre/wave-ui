import{r as g,o as h,g as b,a,w as n,b as t,d as i,t as u,c as z,f as T,_ as f,P as U}from"./index-CyDhd-Z0.js";const R={class:"w-card w-flex mdu-row basis-zero pa4 gap4"},I={class:"mr5"},G={class:"w-flex wrap justify-center align-center"},S={class:"mr4 my2"},W={class:"w-flex gap6"};function E(s,e,v,c,y,m){const o=g("title-link"),d=g("w-divider"),p=g("alert"),l=g("w-image"),r=g("example"),x=g("w-card"),$=g("w-radios"),j=g("w-button"),k=g("w-alert");return h(),b("div",null,[a(o,{h2:""},{default:n(()=>e[2]||(e[2]=[t("Why using w-image and not a simple <img>")])),_:1}),i("div",R,[e[4]||(e[4]=i("div",null,[i("div",{class:"title3"},"A simple <img>"),i("p",null,[t("will display when loaded, and will take the dimensions of the actual image."),i("br"),t(`
When the image has a large file size, it will be loaded in chunks, and the image will be displayed
truncated until completely loaded.`),i("br"),i("br"),t(`
If ever it fails to load, a broken image icon will display instead (different on every browser).`),i("br"),i("br"),t(`
Setting both a width and height could stretch the image and loose the aspect ratio.
Which is IMHO, in most cases crappy except for repeated patterns.`)])],-1)),a(d,{class:"no-grow primary",vertical:!s.$waveui.breakpoint.xs&&!s.$waveui.breakpoint.sm},{default:n(()=>e[3]||(e[3]=[t("VS")])),_:1},8,["vertical"]),e[5]||(e[5]=i("div",null,[i("div",{class:"title3"},"The w-image"),i("p",null,[t(`can show a spinner while the image is loading, and display the image all at once with a nice
animation (like fade-in) when the image is ready.`),i("br"),i("br"),t(`
If ever it fails to load, `),i("strong",{class:"code"},"w-image"),t(` will handle the error gracefully, will emit a
`),i("code",null,"@error"),t(` event containing the error, and a blank transparent image will be displayed in place of the
image itself, so nothing looks broken.`),i("br"),t(`
Or, you can also provide a fallback image for cases when the main image has a chance not to be found (like with
dynamic src).`),i("br"),i("br"),t(`
Setting both a width and height will never loose the aspect ratio: it will auto-crop if needed.
`)])],-1))]),a(p,{tip:""},{default:n(()=>e[6]||(e[6]=[i("div",{class:"title2 mt0 lh1"},[t("The "),i("strong",{class:"code"},"w-image"),t(" in a nutshell")],-1),i("ul",null,[i("li",null,"You can set a width or a height or both. That's all you need."),i("li",null,"The width and height may be fixed (e.g. in pixel) or adaptive (e.g. in percentage)."),i("li",null,"The ratio is not needed, but can be provided to override the intrinsic ratio and crop the image (keeping it responsive if it was)."),i("li",null,"You can choose a tag to use for the image, but don't need to. It can be a <span> (default) or <img>."),i("li",null,"Providing a caption, will use the native HTML <figure> and <figcaption> tags.")],-1)])),_:1}),a(d,{class:"ma12"}),e[110]||(e[110]=i("p",{class:"size--lg"},"Now here comes a ton of concrete examples.",-1)),a(o,{h2:""},{default:n(()=>e[7]||(e[7]=[t("Default")])),_:1}),e[111]||(e[111]=i("p",null,[t("With no given width, height or ratio, the image will be responsive, up to its full-size."),i("br"),t(`
This means a width of 100% is added, as well as the image computed ratio (to preserve it when
scaling down), and a max width equal to the real image width.`)],-1)),a(r,{"content-class":"text-center"},{pug:n(()=>e[8]||(e[8]=[t('w-image(:src="`${baseUrl}images/favicon.png`")')])),html:n(()=>e[9]||(e[9]=[t('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>')])),js:n(()=>e[10]||(e[10]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)])),default:n(()=>[a(l,{src:`${s.baseUrl}images/favicon.png`},null,8,["src"]),e[11]||(e[11]=i("div",{class:"caption text-center"},"Real size: 200x200.",-1))]),_:1}),a(p,{info:""},{default:n(()=>e[12]||(e[12]=[i("p",null,[t("In the "),i("code",null,"src"),t(" attribute, it's a good idea to use the "),i("code",null,"BASE_URL"),t(` environment variable to point to the
public root path of your app if your image is in the `),i("code",null,"public/"),t(" folder."),i("br"),t(`
For instance, this documentation public root path is `),i("code",null,"https://antoniandre.github.io/wave-ui/"),t(`, which is different
from just `),i("code",null,"/"),t(" which would point to "),i("code",null,"https://antoniandre.github.io/"),t("."),i("br")],-1),i("ul",null,[i("li",null,[t("With Vite, you can use "),i("code",null,u("import")+".meta.env.BASE_URL"),t(" to refer to your public app root URL.")]),i("li",null,[t("With Vue CLI or Webpack, you can also use "),i("code",null,u("process")+".env.BASE_URL"),t(".")])],-1)])),_:1}),a(o,{h2:""},{default:n(()=>e[13]||(e[13]=[t("Given dimensions")])),_:1}),e[112]||(e[112]=i("p",null,[i("strong",null,[t("You can set a width, a height, or both."),i("br")]),t("If the actual image is bigger than the given width or height, it will be cropped."),i("br"),t(`
But if you prefer it to be resized maintaining the ratio, then you can set a ratio.`)],-1)),a(o,{h3:""},{default:n(()=>e[14]||(e[14]=[t("Given both fixed width and height")])),_:1}),e[113]||(e[113]=i("p",null,[t(`In both examples the image will always have the same fixed size regardless of the viewport or
constraints.`),i("br"),t(`
The first example forces the width and height to 150x150, which is smaller than the actual picture
size so it is cropping it (you can inspect with the dev tools).`),i("br"),t(`
The second example sets a width and height of 500x150, which is also cropping it.`)],-1)),a(r,{"content-class":"text-center w-flex justify-space-around wrap"},{pug:n(()=>e[17]||(e[17]=[t('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")')])),html:n(()=>e[18]||(e[18]=[t(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="150"
  :height="150">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="500"
  :height="150">
</w-image>`)])),js:n(()=>e[19]||(e[19]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[i("div",I,[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,width:150,height:150},null,8,["src"]),e[15]||(e[15]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given size: 150x150.",-1))]),i("div",null,[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,width:500,height:150},null,8,["src"]),e[16]||(e[16]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given size: 500x150.",-1))])]),_:1}),a(o,{h3:""},{default:n(()=>e[20]||(e[20]=[t("Given fixed width only")])),_:1}),e[114]||(e[114]=i("p",null,`If the width is all you provide, the real ratio of the image will be computed and used.
In result, the image will have the given fixed width and will display in full: it will not be cropped
and will not grow or shrink with constraints.`,-1)),a(r,{"content-class":"text-center w-flex column"},{pug:n(()=>e[23]||(e[23]=[t('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="200")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="400")')])),html:n(()=>e[24]||(e[24]=[t(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="200">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="400">
</w-image>`)])),js:n(()=>e[25]||(e[25]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[i("div",null,[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,width:200},null,8,["src"]),e[21]||(e[21]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given size: width=200.",-1))]),i("div",null,[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,width:400},null,8,["src"]),e[22]||(e[22]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given size: width=400.",-1))])]),_:1}),a(o,{h3:""},{default:n(()=>e[26]||(e[26]=[t("Given fixed height only")])),_:1}),e[115]||(e[115]=i("p",null,`If the height is all you provide, the real ratio of the image will be computed and used.
In result, the image will have the given fixed height and will display in full: it will not be cropped
and will not grow or shrink with constraints.`,-1)),a(r,{"content-class":"text-center w-flex column"},{pug:n(()=>e[29]||(e[29]=[t('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :height="70")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :height="120")')])),html:n(()=>e[30]||(e[30]=[t(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :height="70">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :height="120">
</w-image>`)])),js:n(()=>e[31]||(e[31]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[i("div",null,[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,height:70},null,8,["src"]),e[27]||(e[27]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given size: height=70.",-1))]),i("div",null,[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,height:120},null,8,["src"]),e[28]||(e[28]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given size: height=120.",-1))])]),_:1}),a(o,{h3:""},{default:n(()=>e[32]||(e[32]=[t("Relative width and/or height")])),_:1}),e[116]||(e[116]=i("p",{class:"grey mb0"},"When the width and/or height is adaptive to its container.",-1)),e[117]||(e[117]=i("div",null,[t("The only thing needed is width or a height, and "),i("strong",null,"Wave UI"),t(` will compute the ratio so it
can grow or shrink with the container.`),i("ul",null,[i("li",null,"The first case is setting a width of 100% of the example container, so it will adapt. Very classic."),i("li",null,[t("The second case is setting a height of 100% in a "),i("strong",{class:"code"},"w-card"),t(" that is fixed to 100px height.")]),i("li",null,`The third case is setting a width of 30vw and a height of 10vh which will constrain the image
in many possible ways which will likely crop horizontally or vertically when needed. Try
resizing your browser width and height to observe the rendering!`)])],-1)),a(r,{"content-class":"text-center w-flex column gap5"},{pug:n(()=>e[36]||(e[36]=[t('w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%")\n\nw-card(content-class="pa0" style="height: 100px")\n  w-image(:src="`${baseUrl}images/japanese-wave.png`" height="100%")')])),html:n(()=>e[37]||(e[37]=[t(`<w-image
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
</w-image>`)])),js:n(()=>e[38]||(e[38]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[i("div",null,[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,width:"100%"},null,8,["src"]),e[33]||(e[33]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given size: width=100%.",-1))]),i("div",null,[a(x,{"content-class":"pa0",style:{height:"100px"}},{default:n(()=>[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,height:"100%"},null,8,["src"])]),_:1}),e[34]||(e[34]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given size: height=100%.",-1))]),i("div",null,[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,width:"30vw",height:"10vh"},null,8,["src"]),e[35]||(e[35]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given size: width=30vw, height=10vh.",-1))])]),_:1}),a(o,{h2:""},{default:n(()=>e[39]||(e[39]=[t("Image ratio")])),_:1}),e[118]||(e[118]=i("p",{class:"grey"},"The ratio prop purpose is to maintain a specific image ratio while resizing with constraints.",-1)),e[119]||(e[119]=i("p",null,[t(`Usually you don't need to set a ratio since Wave UI computes the original image ratio and already
applies it to the image.`),i("br"),t(`
But you may want to apply a different ratio than the image natural ratio, like in the second example.
`)],-1)),a(o,{h3:""},{default:n(()=>e[40]||(e[40]=[t("Intrinsic image ratio")])),_:1}),e[120]||(e[120]=i("p",{class:"grey"},"Image ratio equal to the exact width and height of the image (width / height).",-1)),e[121]||(e[121]=i("p",null,[t(`This is the most common case: the image is visible in full, and scales with its container with
preserved ratio.`),i("br"),t(`
Note that Wave UI will add a width of 100% if neither of width and height are provided.`)],-1)),a(p,{class:"mt2",tip:""},{default:n(()=>e[41]||(e[41]=[t("In this case, you can obtain the same result by just setting a width of 100%.")])),_:1}),a(r,{"content-class":"text-center"},{pug:n(()=>e[42]||(e[42]=[t('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443")')])),html:n(()=>e[43]||(e[43]=[t('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="1900 / 443">\n</w-image>')])),js:n(()=>e[44]||(e[44]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,ratio:1900/443},null,8,["src"]),e[45]||(e[45]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1900 / 443.",-1))]),_:1}),a(o,{h3:""},{default:n(()=>e[46]||(e[46]=[t("Custom ratio")])),_:1}),e[122]||(e[122]=i("p",{class:"grey"},"Setting a different ratio than the actual image one.",-1)),e[123]||(e[123]=i("p",{class:"mb0"},`In this case, the image will be cropped on purpose, but still scaling with its container with
preserved ratio. 👍`,-1)),e[124]||(e[124]=i("div",{class:"caption"},"A drop shadow is added around the images to help visualizing the edges of the image.",-1)),a(r,{"content-class":"text-center"},{pug:n(()=>e[49]||(e[49]=[t('w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")\n\nw-image.sh1.mt6(:src="`${baseUrl}images/japanese-wave.png`" :ratio="3000 / 443")')])),html:n(()=>e[50]||(e[50]=[t(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1000 / 443"
  class="sh1">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="3000 / 443"
  class="sh1 mt6">
</w-image>`)])),js:n(()=>e[51]||(e[51]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[i("div",null,[a(l,{class:"sh1",src:`${s.baseUrl}images/japanese-wave.png`,ratio:1e3/443},null,8,["src"]),e[47]||(e[47]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1000 / 443.",-1))]),i("div",null,[a(l,{class:"sh1 mt6",src:`${s.baseUrl}images/japanese-wave.png`,ratio:3e3/443},null,8,["src"]),e[48]||(e[48]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 3000 / 443.",-1))])]),_:1}),a(o,{h3:""},{default:n(()=>e[52]||(e[52]=[t("Ratio combined with a set width or height")])),_:1}),e[125]||(e[125]=i("p",null,[t(`If the ratio is the original, setting it is not necessary. But if you provide a different one
the image will be cropped.`),i("br"),t(`
Setting both a width and a height in addition to a ratio, would be pointless: it would be the same
outcome with just a width + height, or just a ratio + width, or ratio + height.`)],-1)),a(r,{"content-class":"text-center"},{pug:n(()=>e[53]||(e[53]=[t('p Ratio + width\nw-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="50%")\n\np.mt4 Ratio + height\nw-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443" height="100")\n\np.mt4 Ratio + width + height (pointless)\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="400" height="100")')])),html:n(()=>e[54]||(e[54]=[t(`<p>Ratio + width</p>
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
</w-image>`)])),js:n(()=>e[55]||(e[55]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[e[56]||(e[56]=i("p",null,"Ratio + width",-1)),a(l,{class:"sh1",src:`${s.baseUrl}images/japanese-wave.png`,ratio:1,width:"50%"},null,8,["src"]),e[57]||(e[57]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1, given width: 50%.",-1)),e[58]||(e[58]=i("p",{class:"mt4"},"Ratio + height",-1)),a(l,{class:"sh1",src:`${s.baseUrl}images/japanese-wave.png`,ratio:1900/443,height:"100"},null,8,["src"]),e[59]||(e[59]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1900 / 443, given height: 100.",-1)),e[60]||(e[60]=i("p",{class:"mt4"},"Ratio + width + height (pointless)",-1)),a(l,{src:`${s.baseUrl}images/japanese-wave.png`,ratio:1,width:"400",height:"100"},null,8,["src"]),e[61]||(e[61]=i("div",{class:"caption text-center"},"Real size: 1900x443. Given ratio: 1, given width: 400, given height: 100.",-1))]),_:1}),a(o,{h2:"",slug:"using-the-img-tag"},{default:n(()=>e[62]||(e[62]=[t("Using the <img> tag")])),_:1}),e[126]||(e[126]=i("p",null,[t("You can choose whether the "),i("strong",{class:"code"},"w-image"),t(` component should use the default <span>
tag or an <img>.`),i("br")],-1)),e[127]||(e[127]=i("ul",null,[i("li",null,"The default <span> tag will allow cropping in particular which is very advantageous."),i("li",null,`The <img> tag will allow stretching the image, (not usually what we want, but you know, sometimes).
Or it could also be used for more semantics.`),i("li",null,`Also note that when sending to the printer, the <img> images will show up by default whereas
the background graphics will only show up if you choose this option. You can make the decision
according to the need.
`)],-1)),a(p,{info:""},{default:n(()=>[e[64]||(e[64]=i("p",null,`Note that by design, setting both a width and height with the <img> tag, will still allow you
to achieve image stretching, loosing the aspect ratio. This may be a desired effect or not.`,-1)),a(r,{"content-class":"text-center w-flex justify-space-around wrap"},{default:n(()=>[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,tag:"img",width:"100%",height:"100px"},null,8,["src"]),e[63]||(e[63]=i("div",{class:"caption text-center"},"Real size: 1900x443, given width: 100%, given height: 100px.",-1))]),_:1})]),_:1}),a(r,{"content-class":"text-center"},{pug:n(()=>e[65]||(e[65]=[t('w-image(:src="`${baseUrl}images/japanese-wave.png`" tag="img" width="100%" max-width="700px")')])),html:n(()=>e[66]||(e[66]=[t(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  tag="img"
  width="100%"
  max-width="700px">
</w-image>`)])),js:n(()=>e[67]||(e[67]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,tag:"img",width:"100%","max-width":"700px"},null,8,["src"])]),_:1}),a(o,{h2:""},{default:n(()=>e[68]||(e[68]=[t("Figure with or without caption")])),_:1}),e[128]||(e[128]=i("ul",null,[i("li",null,[t("You can tell the w-image component to use the native HTML "),i("span",{class:"code"},"<figure>"),t(` tag. In
that case, the image inside will use an `),i("span",{class:"code"},"<img>"),t(" tag.")]),i("li",null,[t(`If you provide a caption (with or without requesting a figure tag), the w-image tag will be
using the `),i("span",{class:"code"},"<figure>"),t(" tag along with "),i("span",{class:"code"},"<figcaption>"),t(".")])],-1)),a(r,{"content-class":"text-center"},{pug:n(()=>e[69]||(e[69]=[t(`w-image(
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
  max-width="700")`)])),html:n(()=>e[70]||(e[70]=[t(`<w-image
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
</w-image>`)])),js:n(()=>e[71]||(e[71]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[e[72]||(e[72]=i("p",null,"Figure without caption.",-1)),a(l,{src:`${s.baseUrl}images/japanese-wave.png`,tag:"figure","max-width":"700"},null,8,["src"]),e[73]||(e[73]=i("p",{class:"mt8"},"Figure with caption.",-1)),a(l,{src:`${s.baseUrl}images/japanese-wave.png`,caption:"The Great Wave Off Kanagawa - Hokusai","max-width":"700"},null,8,["src"]),e[74]||(e[74]=i("p",{class:"mt8"},[t("With some quick styles adding these classes: "),i("code",null,".pa2.sh2.base-color--bg"),t(":")],-1)),a(l,{class:"pa2 sh2 base-color--bg",src:`${s.baseUrl}images/japanese-wave.png`,caption:"The Great Wave Off Kanagawa - Hokusai","max-width":"700"},null,8,["src"]),e[75]||(e[75]=i("div",{class:"caption mt3"},"Real size: 1900x443. Given max-width: 700.",-1))]),_:1}),a(o,{h2:""},{default:n(()=>e[76]||(e[76]=[t("Loading spinner")])),_:1}),e[129]||(e[129]=i("p",null,`This image is very big, so that you have time to see the spinner while loading.
Refresh the page if you haven't seen it (or enable dev tools throttling if your connection is too fast)!`,-1)),a(r,{"content-class":"text-center"},{pug:n(()=>e[77]||(e[77]=[t('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :ratio="5098 / 2550")')])),html:n(()=>e[78]||(e[78]=[t('<w-image\n  :src="`${baseUrl}images/spirit-island--alberta.png`"\n  :ratio="5098 / 2550">\n</w-image>')])),js:n(()=>e[79]||(e[79]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)])),default:n(()=>[a(l,{src:`${s.baseUrl}images/spirit-island--alberta.png`,ratio:5098/2550},null,8,["src"]),e[80]||(e[80]=i("div",{class:"caption"},"Real size: 5098x2550. Given ratio: 5098 / 2550.",-1))]),_:1}),a(p,{tip:""},{default:n(()=>e[81]||(e[81]=[i("strong",null,"Dev notes:",-1),t(" disabling the browser cache will prevent you from seeing the transition."),i("br",null,null,-1),t(`
The reason for it is that the image first loads in the `),i("strong",{class:"code"},"w-image",-1),t(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)])),_:1}),a(o,{h2:""},{default:n(()=>e[82]||(e[82]=[t("Transitions")])),_:1}),e[130]||(e[130]=i("p",null,`Once the image is fully loaded, it will display in one piece with a fade transition by default.
You can customize the transition.`,-1)),a(r,null,{pug:n(()=>e[86]||(e[86]=[t(`w-flex(wrap justify-center align-center)
  div.mr4.my2
    .title3.mb2 Transition names
    w-radios(
      v-model="img.transition"
      :items="transitions"
      item-value-key="label")
      template(#label="{ item }")
        code `+u("{{ item.label }}")+`
    w-button.mt2(@click="reload") Reload image

  w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")`)])),html:n(()=>e[87]||(e[87]=[t(`<w-flex wrap justify-center align-center>
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
          `+u("{{ item.label }}")+`
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
</w-flex>`)])),js:n(()=>e[88]||(e[88]=[t(`data: () => ({
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
}`)])),default:n(()=>[i("div",G,[i("div",S,[e[84]||(e[84]=i("div",{class:"title3 mb2"},"Transition names",-1)),a($,{modelValue:s.img.transition,"onUpdate:modelValue":e[0]||(e[0]=w=>s.img.transition=w),items:s.transitions,"item-value-key":"label"},{label:n(({item:w})=>[i("code",null,u(w.label),1)]),_:1},8,["modelValue","items"]),a(j,{class:"mt2",onClick:m.reload},{default:n(()=>e[83]||(e[83]=[t("Reload image")])),_:1},8,["onClick"])]),i("div",null,[a(l,{src:s.img.src,width:500,height:250,transition:s.img.transition},null,8,["src","transition"]),e[85]||(e[85]=i("div",{class:"caption"},"Real size: 5098x2550. Given size: 500x250.",-1))])])]),_:1}),a(p,{tip:""},{default:n(()=>e[89]||(e[89]=[i("strong",null,"Dev notes:",-1),t(" disabling the browser cache will prevent you from seeing the transition."),i("br",null,null,-1),t(`
The reason for it is that the image first loads in the `),i("strong",{class:"code"},"w-image",-1),t(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`)])),_:1}),a(o,{h2:""},{default:n(()=>e[90]||(e[90]=[t("Error handling & Fallback")])),_:1}),i("div",W,[a(r,{class:"mt0 no-grow","content-class":"text-center px6"},{pug:n(()=>e[91]||(e[91]=[t('w-image.bd1(src="/images/broken.png" width="100" height="100")')])),html:n(()=>e[92]||(e[92]=[t(`<w-image
  class="bd1"
  src="/images/broken.png"
  width="100"
  height="100">
</w-image>`)])),default:n(()=>[a(l,{class:"bd1",src:"/images/broken.png",width:"100",height:"100"}),e[93]||(e[93]=i("div",{class:"caption"},[t("Given size: 100x100."),i("br"),t("Border added for visualization.")],-1))]),_:1}),e[94]||(e[94]=i("p",null,[t(`If for some reason the image would not load, the default fallback is a blank 1x1 transparent gif
(invisible, ultra light), like so.`),i("br"),i("br"),t(`
So if the image can't load, a transparent background will be there instead preventing the
browser's broken image icon.`),i("br"),i("br"),t(`
But you can of course provide a custom fallback image to display if the image cannot load.
`)],-1))]),a(o,{h3:""},{default:n(()=>e[95]||(e[95]=[t("Fallback & Error handling")])),_:1}),e[131]||(e[131]=i("ul",null,[i("li",null,`For instance, in a e-boutique you may try to load the image of an item without knowing if this item
has an available image or not. In that case you can plan to have a fallback image, in case, like
following.`),i("li",null,[t("Thanks to the "),i("code",null,"error"),t(` emitted event, you can also trigger a specific action, such as displaying an
error message like in this example. But this is optional, and without the custom alert nothing would
look broken when you provide a valid fallback image!
`)])],-1)),a(r,{"content-class":"text-center"},{pug:n(()=>e[97]||(e[97]=[t('w-image(\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true")\n\nw-alert(v-if="showError" error) Oops. The image could not load!')])),html:n(()=>e[98]||(e[98]=[t(`<w-image
  :src="\`\${baseUrl}images/broken.png\`"
  :fallback="\`\${baseUrl}images/not-found.jpg\`"
  @error="showError = true">
</w-image>

<w-alert
  v-if="showError"
  error>
  Oops. The image could not load!
</w-alert>`)])),js:n(()=>e[99]||(e[99]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/',
  showError: false
})
`)])),default:n(()=>[a(l,{src:`${s.baseUrl}images/broken.png`,fallback:`${s.baseUrl}images/not-found.jpg`,onError:e[1]||(e[1]=w=>s.showError=!0)},null,8,["src","fallback"]),s.showError?(h(),z(k,{key:0,error:""},{default:n(()=>e[96]||(e[96]=[t("Oops. The image could not load!")])),_:1})):T("",!0)]),_:1}),a(o,{h2:""},{default:n(()=>e[100]||(e[100]=[t("Lazy")])),_:1}),e[132]||(e[132]=i("p",null,[t("By using the lazy attribute, it is possible to load the image only when it is in the viewport."),i("br"),t(`
Wave UI internally uses an `),i("span",{class:"code"},"IntersectionObserver"),t(` and will only start loading the image
when it is visible.`)],-1)),a(r,null,{pug:n(()=>e[101]||(e[101]=[t('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="5098 / 2550")')])),html:n(()=>e[102]||(e[102]=[t(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  lazy
  :ratio="5098 / 2550">
</w-image>`)])),js:n(()=>e[103]||(e[103]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)])),default:n(()=>[a(l,{src:`${s.baseUrl}images/spirit-island--alberta.png?v1`,lazy:"",ratio:5098/2550},null,8,["src"]),e[104]||(e[104]=i("div",{class:"caption"},"Real size: 5098x2550.",-1))]),_:1}),a(o,{h2:"",slug:"content"},{default:n(()=>e[105]||(e[105]=[t("Content - via default slot")])),_:1}),e[133]||(e[133]=i("p",null,[t("In some cases, it can be convenient to have some content on top of the image."),i("br"),t(`
By default the content will be horizontally and vertically centered, but you could easily align it
at the bottom left for instance, with the `),i("code",null,"content-class"),t(` prop:
`),i("code",null,'content-class="align-end justify-start pa2"'),t(".")],-1)),a(r,null,{pug:n(()=>e[107]||(e[107]=[t('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="5098 / 2550")\n  span.title1.pink Wave UI')])),html:n(()=>e[108]||(e[108]=[t(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="5098 / 2550">
  <span class="title1 pink">Wave UI</span>
</w-image>`)])),js:n(()=>e[109]||(e[109]=[t(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)])),default:n(()=>[a(l,{src:`${s.baseUrl}images/japanese-wave.png`,ratio:5098/2550},{default:n(()=>e[106]||(e[106]=[i("span",{class:"title1 pink"},"Wave UI",-1)])),_:1},8,["src"])]),_:1})])}const B={data:()=>({baseUrl:"/wave-ui/",img:{initialSrc:"/wave-ui/images/spirit-island--alberta.png",src:"/wave-ui/images/spirit-island--alberta.png",transition:"fade"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],showError:!1}),methods:{reload(){this.img.src="",setTimeout(()=>this.img.src=this.img.initialSrc,500)}}},O=f(B,[["render",E]]);function A(s,e,v,c,y,m){const o=g("title-link"),d=g("component-api");return h(),b("div",null,[e[1]||(e[1]=i("div",{class:"w-divider my12"},null,-1)),a(o,{class:"title1",h2:""},{default:n(()=>e[0]||(e[0]=[t("API")])),_:1}),a(d,{class:"mt0",items:m.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),a(d,{items:s.slots,title:"Slots"},null,8,["items"]),a(d,{items:m.events,title:"Events"},null,8,["items"])])}const C={tag:`Tells which tag to use for the <strong class="code">w-image</strong>'s image. It can be one of &lt;span&gt;, &lt;div&gt;, &lt;figure&gt; or &lt;img&gt;.`,src:"The source of the image to display.",width:"Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",height:"Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",ratio:'Sets or overrides the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. By default the intrinsic image ratio is used.<br>Refer to the <a href="#ratio">Ratio</a> example.',lazy:'When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.',absolute:"Sets the CSS position of the image to <code>absolute</code>.",fixed:"Sets the CSS position of the image to <code>fixed</code>.",contain:'By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".',noSpinner:"Removes the default spinner while the image is loading.",spinnerColor:"Define a specific color for the spinner while the image is loading. By default the spinner color is the primary color.",fallback:'Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.',transition:'Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.',contentClass:"Applies the given classes to the content wrapper when using the <code>default</code> slot.",caption:"Adds a caption text to the bottom of the image. If used, the wrapper will be using the &lt;figure&gt; native HTML tag and the caption will use the &lt;figcaption&gt; tag.",captionClass:"Applies the given classes to the caption element."},L={default:{description:"Provide a custom content, to display on top of the image."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},V={error:{description:"Emitted on image load error.",params:{"[DOM event]":"The associated DOM event."}},loaded:{description:"Emitted on image successful load.",params:{String:"The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed)."}},loading:{description:"Emitted when the image starts loading.",params:{String:"The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed)."}}},H={data:()=>({propsDescs:C,slots:L}),computed:{props(){return U.props},events(){return U.emits.reduce((s,e)=>(s[e]=V[e]||{})&&s,{})}}},D=f(H,[["render",A]]);function F(s,e,v,c,y,m){const o=g("ui-component-title"),d=g("examples"),p=g("api");return h(),b("main",null,[a(o,{slug:"w-image"},{default:n(()=>e[0]||(e[0]=[t("w-image")])),_:1}),a(d),a(p)])}const N={components:{Examples:O,Api:D}},Y=f(N,[["render",F]]);export{Y as default};
