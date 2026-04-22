import{H as e,N as t,c as n,d as r,g as i,h as a,k as o,l as s,u as c,vt as l}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as u}from"./_plugin-vue_export-helper-S3RvzygF.js";import{T as d}from"./index-CmUoOmTq.js";var f={class:`w-card w-flex mdu-row basis-zero pa4 gap4`},p={class:`mr5`},m={class:`w-flex wrap justify-center align-center`},h={class:`mr4 my2`},g={class:`w-flex gap6`};function _(u,d,_,v,y,b){let x=t(`title-link`),S=t(`w-divider`),C=t(`alert`),w=t(`w-image`),T=t(`example`),E=t(`w-card`),D=t(`w-radios`),O=t(`w-button`),k=t(`w-alert`);return o(),r(`div`,null,[i(x,{h2:``},{default:e(()=>[...d[2]||=[a(`Why using w-image and not a simple <img>`,-1)]]),_:1}),n(`div`,f,[d[4]||=n(`div`,null,[n(`div`,{class:`title3`},`A simple <img>`),n(`p`,null,[a(`will display when loaded, and will take the dimensions of the actual image.`),n(`br`),a(`
When the image has a large file size, it will be loaded in chunks, and the image will be displayed
truncated until completely loaded.`),n(`br`),n(`br`),a(`
If ever it fails to load, a broken image icon will display instead (different on every browser).`),n(`br`),n(`br`),a(`
Setting both a width and height could stretch the image and loose the aspect ratio.
Which is IMHO, in most cases crappy except for repeated patterns.`)])],-1),i(S,{class:`no-grow primary`,vertical:!u.$waveui.breakpoint.xs&&!u.$waveui.breakpoint.sm},{default:e(()=>[...d[3]||=[a(`VS`,-1)]]),_:1},8,[`vertical`]),d[5]||=n(`div`,null,[n(`div`,{class:`title3`},`The w-image`),n(`p`,null,[a(`can show a spinner while the image is loading, and display the image all at once with a nice
animation (like fade-in) when the image is ready.`),n(`br`),n(`br`),a(`
If ever it fails to load, `),n(`strong`,{class:`code`},`w-image`),a(` will handle the error gracefully, will emit a
`),n(`code`,null,`@error`),a(` event containing the error, and a blank transparent image will be displayed in place of the
image itself, so nothing looks broken.`),n(`br`),a(`
Or, you can also provide a fallback image for cases when the main image has a chance not to be found (like with
dynamic src).`),n(`br`),n(`br`),a(`
Setting both a width and height will never loose the aspect ratio: it will auto-crop if needed.
`)])],-1)]),i(C,{tip:``},{default:e(()=>[...d[6]||=[n(`div`,{class:`title2 mt0 lh1`},[a(`The `),n(`strong`,{class:`code`},`w-image`),a(` in a nutshell`)],-1),n(`ul`,null,[n(`li`,null,`You can set a width or a height or both. That's all you need.`),n(`li`,null,`The width and height may be fixed (e.g. in pixel) or adaptive (e.g. in percentage).`),n(`li`,null,`The ratio is not needed, but can be provided to override the intrinsic ratio and crop the image (keeping it responsive if it was).`),n(`li`,null,`You can choose a tag to use for the image, but don't need to. It can be a <span> (default) or <img>.`),n(`li`,null,`Providing a caption, will use the native HTML <figure> and <figcaption> tags.`)],-1)]]),_:1}),i(S,{class:`ma12`}),d[110]||=n(`p`,{class:`size--lg`},`Now here comes a ton of concrete examples.`,-1),i(x,{h2:``},{default:e(()=>[...d[7]||=[a(`Default`,-1)]]),_:1}),d[111]||=n(`p`,null,[a(`With no given width, height or ratio, the image will be responsive, up to its full-size.`),n(`br`),a(`
This means a width of 100% is added, as well as the image computed ratio (to preserve it when
scaling down), and a max width equal to the real image width.`)],-1),i(T,{"content-class":`text-center`},{pug:e(()=>[...d[8]||=[a('w-image(:src="`${baseUrl}images/favicon.png`")',-1)]]),html:e(()=>[...d[9]||=[a('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>',-1)]]),js:e(()=>[...d[10]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`,-1)]]),default:e(()=>[i(w,{src:`${u.baseUrl}images/favicon.png`},null,8,[`src`]),d[11]||=n(`div`,{class:`caption text-center`},`Real size: 200x200.`,-1)]),_:1}),i(C,{info:``},{default:e(()=>[...d[12]||=[n(`p`,null,[a(`In the `),n(`code`,null,`src`),a(` attribute, it's a good idea to use the `),n(`code`,null,`BASE_URL`),a(` environment variable to point to the
public root path of your app if your image is in the `),n(`code`,null,`public/`),a(` folder.`),n(`br`),a(`
For instance, this documentation public root path is `),n(`code`,null,`https://antoniandre.github.io/wave-ui/`),a(`, which is different
from just `),n(`code`,null,`/`),a(` which would point to `),n(`code`,null,`https://antoniandre.github.io/`),a(`.`),n(`br`)],-1),n(`ul`,null,[n(`li`,null,[a(`With Vite, you can use `),n(`code`,null,l(`import`)+`.meta.env.BASE_URL`),a(` to refer to your public app root URL.`)]),n(`li`,null,[a(`With Vue CLI or Webpack, you can also use `),n(`code`,null,l(`process`)+`.env.BASE_URL`),a(`.`)])],-1)]]),_:1}),i(x,{h2:``},{default:e(()=>[...d[13]||=[a(`Given dimensions`,-1)]]),_:1}),d[112]||=n(`p`,null,[n(`strong`,null,[a(`You can set a width, a height, or both.`),n(`br`)]),a(`If the actual image is bigger than the given width or height, it will be cropped.`),n(`br`),a(`
But if you prefer it to be resized maintaining the ratio, then you can set a ratio.`)],-1),i(x,{h3:``},{default:e(()=>[...d[14]||=[a(`Given both fixed width and height`,-1)]]),_:1}),d[113]||=n(`p`,null,[a(`In both examples the image will always have the same fixed size regardless of the viewport or
constraints.`),n(`br`),a(`
The first example forces the width and height to 150x150, which is smaller than the actual picture
size so it is cropping it (you can inspect with the dev tools).`),n(`br`),a(`
The second example sets a width and height of 500x150, which is also cropping it.`)],-1),i(T,{"content-class":`text-center w-flex justify-space-around wrap`},{pug:e(()=>[...d[17]||=[a('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")',-1)]]),html:e(()=>[...d[18]||=[a(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="150"
  :height="150">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="500"
  :height="150">
</w-image>`,-1)]]),js:e(()=>[...d[19]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[n(`div`,p,[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:150,height:150},null,8,[`src`]),d[15]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: 150x150.`,-1)]),n(`div`,null,[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:500,height:150},null,8,[`src`]),d[16]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: 500x150.`,-1)])]),_:1}),i(x,{h3:``},{default:e(()=>[...d[20]||=[a(`Given fixed width only`,-1)]]),_:1}),d[114]||=n(`p`,null,`If the width is all you provide, the real ratio of the image will be computed and used.
In result, the image will have the given fixed width and will display in full: it will not be cropped
and will not grow or shrink with constraints.`,-1),i(T,{"content-class":`text-center w-flex column`},{pug:e(()=>[...d[23]||=[a('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="200")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="400")',-1)]]),html:e(()=>[...d[24]||=[a(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="200">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="400">
</w-image>`,-1)]]),js:e(()=>[...d[25]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[n(`div`,null,[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:200},null,8,[`src`]),d[21]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: width=200.`,-1)]),n(`div`,null,[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:400},null,8,[`src`]),d[22]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: width=400.`,-1)])]),_:1}),i(x,{h3:``},{default:e(()=>[...d[26]||=[a(`Given fixed height only`,-1)]]),_:1}),d[115]||=n(`p`,null,`If the height is all you provide, the real ratio of the image will be computed and used.
In result, the image will have the given fixed height and will display in full: it will not be cropped
and will not grow or shrink with constraints.`,-1),i(T,{"content-class":`text-center w-flex column`},{pug:e(()=>[...d[29]||=[a('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :height="70")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :height="120")',-1)]]),html:e(()=>[...d[30]||=[a(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :height="70">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :height="120">
</w-image>`,-1)]]),js:e(()=>[...d[31]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[n(`div`,null,[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,height:70},null,8,[`src`]),d[27]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: height=70.`,-1)]),n(`div`,null,[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,height:120},null,8,[`src`]),d[28]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: height=120.`,-1)])]),_:1}),i(x,{h3:``},{default:e(()=>[...d[32]||=[a(`Relative width and/or height`,-1)]]),_:1}),d[116]||=n(`p`,{class:`grey mb0`},`When the width and/or height is adaptive to its container.`,-1),d[117]||=n(`div`,null,[a(`The only thing needed is width or a height, and `),n(`strong`,null,`Wave UI`),a(` will compute the ratio so it
can grow or shrink with the container.`),n(`ul`,null,[n(`li`,null,`The first case is setting a width of 100% of the example container, so it will adapt. Very classic.`),n(`li`,null,[a(`The second case is setting a height of 100% in a `),n(`strong`,{class:`code`},`w-card`),a(` that is fixed to 100px height.`)]),n(`li`,null,`The third case is setting a width of 30vw and a height of 10vh which will constrain the image
in many possible ways which will likely crop horizontally or vertically when needed. Try
resizing your browser width and height to observe the rendering!`)])],-1),i(T,{"content-class":`text-center w-flex column gap5`},{pug:e(()=>[...d[36]||=[a('w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%")\n\nw-card(content-class="pa0" style="height: 100px")\n  w-image(:src="`${baseUrl}images/japanese-wave.png`" height="100%")',-1)]]),html:e(()=>[...d[37]||=[a(`<w-image
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
</w-image>`,-1)]]),js:e(()=>[...d[38]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[n(`div`,null,[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:`100%`},null,8,[`src`]),d[33]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: width=100%.`,-1)]),n(`div`,null,[i(E,{"content-class":`pa0`,style:{height:`100px`}},{default:e(()=>[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,height:`100%`},null,8,[`src`])]),_:1}),d[34]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: height=100%.`,-1)]),n(`div`,null,[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:`30vw`,height:`10vh`},null,8,[`src`]),d[35]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: width=30vw, height=10vh.`,-1)])]),_:1}),i(x,{h2:``},{default:e(()=>[...d[39]||=[a(`Image ratio`,-1)]]),_:1}),d[118]||=n(`p`,{class:`grey`},`The ratio prop purpose is to maintain a specific image ratio while resizing with constraints.`,-1),d[119]||=n(`p`,null,[a(`Usually you don't need to set a ratio since Wave UI computes the original image ratio and already
applies it to the image.`),n(`br`),a(`
But you may want to apply a different ratio than the image natural ratio, like in the second example.
`)],-1),i(x,{h3:``},{default:e(()=>[...d[40]||=[a(`Intrinsic image ratio`,-1)]]),_:1}),d[120]||=n(`p`,{class:`grey`},`Image ratio equal to the exact width and height of the image (width / height).`,-1),d[121]||=n(`p`,null,[a(`This is the most common case: the image is visible in full, and scales with its container with
preserved ratio.`),n(`br`),a(`
Note that Wave UI will add a width of 100% if neither of width and height are provided.`)],-1),i(C,{class:`mt2`,tip:``},{default:e(()=>[...d[41]||=[a(`In this case, you can obtain the same result by just setting a width of 100%.`,-1)]]),_:1}),i(T,{"content-class":`text-center`},{pug:e(()=>[...d[42]||=[a('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443")',-1)]]),html:e(()=>[...d[43]||=[a(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1900 / 443">
</w-image>`,-1)]]),js:e(()=>[...d[44]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,ratio:1900/443},null,8,[`src`]),d[45]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1900 / 443.`,-1)]),_:1}),i(x,{h3:``},{default:e(()=>[...d[46]||=[a(`Custom ratio`,-1)]]),_:1}),d[122]||=n(`p`,{class:`grey`},`Setting a different ratio than the actual image one.`,-1),d[123]||=n(`p`,{class:`mb0`},`In this case, the image will be cropped on purpose, but still scaling with its container with
preserved ratio. 👍`,-1),d[124]||=n(`div`,{class:`caption`},`A drop shadow is added around the images to help visualizing the edges of the image.`,-1),i(T,{"content-class":`text-center`},{pug:e(()=>[...d[49]||=[a('w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")\n\nw-image.sh1.mt6(:src="`${baseUrl}images/japanese-wave.png`" :ratio="3000 / 443")',-1)]]),html:e(()=>[...d[50]||=[a(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1000 / 443"
  class="sh1">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="3000 / 443"
  class="sh1 mt6">
</w-image>`,-1)]]),js:e(()=>[...d[51]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[n(`div`,null,[i(w,{class:`sh1`,src:`${u.baseUrl}images/japanese-wave.png`,ratio:1e3/443},null,8,[`src`]),d[47]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1000 / 443.`,-1)]),n(`div`,null,[i(w,{class:`sh1 mt6`,src:`${u.baseUrl}images/japanese-wave.png`,ratio:3e3/443},null,8,[`src`]),d[48]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 3000 / 443.`,-1)])]),_:1}),i(x,{h3:``},{default:e(()=>[...d[52]||=[a(`Ratio combined with a set width or height`,-1)]]),_:1}),d[125]||=n(`p`,null,[a(`If the ratio is the original, setting it is not necessary. But if you provide a different one
the image will be cropped.`),n(`br`),a(`
Setting both a width and a height in addition to a ratio, would be pointless: it would be the same
outcome with just a width + height, or just a ratio + width, or ratio + height.`)],-1),i(T,{"content-class":`text-center`},{pug:e(()=>[...d[53]||=[a('p Ratio + width\nw-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="50%")\n\np.mt4 Ratio + height\nw-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443" height="100")\n\np.mt4 Ratio + width + height (pointless)\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="400" height="100")',-1)]]),html:e(()=>[...d[54]||=[a(`<p>Ratio + width</p>
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
</w-image>`,-1)]]),js:e(()=>[...d[55]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[d[56]||=n(`p`,null,`Ratio + width`,-1),i(w,{class:`sh1`,src:`${u.baseUrl}images/japanese-wave.png`,ratio:1,width:`50%`},null,8,[`src`]),d[57]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1, given width: 50%.`,-1),d[58]||=n(`p`,{class:`mt4`},`Ratio + height`,-1),i(w,{class:`sh1`,src:`${u.baseUrl}images/japanese-wave.png`,ratio:1900/443,height:`100`},null,8,[`src`]),d[59]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1900 / 443, given height: 100.`,-1),d[60]||=n(`p`,{class:`mt4`},`Ratio + width + height (pointless)`,-1),i(w,{src:`${u.baseUrl}images/japanese-wave.png`,ratio:1,width:`400`,height:`100`},null,8,[`src`]),d[61]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1, given width: 400, given height: 100.`,-1)]),_:1}),i(x,{h2:``,slug:`using-the-img-tag`},{default:e(()=>[...d[62]||=[a(`Using the <img> tag`,-1)]]),_:1}),d[126]||=n(`p`,null,[a(`You can choose whether the `),n(`strong`,{class:`code`},`w-image`),a(` component should use the default <span>
tag or an <img>.`),n(`br`)],-1),d[127]||=n(`ul`,null,[n(`li`,null,`The default <span> tag will allow cropping in particular which is very advantageous.`),n(`li`,null,`The <img> tag will allow stretching the image, (not usually what we want, but you know, sometimes).
Or it could also be used for more semantics.`),n(`li`,null,`Also note that when sending to the printer, the <img> images will show up by default whereas
the background graphics will only show up if you choose this option. You can make the decision
according to the need.
`)],-1),i(C,{info:``},{default:e(()=>[d[64]||=n(`p`,null,`Note that by design, setting both a width and height with the <img> tag, will still allow you
to achieve image stretching, loosing the aspect ratio. This may be a desired effect or not.`,-1),i(T,{"content-class":`text-center w-flex justify-space-around wrap`},{default:e(()=>[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,tag:`img`,width:`100%`,height:`100px`},null,8,[`src`]),d[63]||=n(`div`,{class:`caption text-center`},`Real size: 1900x443, given width: 100%, given height: 100px.`,-1)]),_:1})]),_:1}),i(T,{"content-class":`text-center`},{pug:e(()=>[...d[65]||=[a('w-image(:src="`${baseUrl}images/japanese-wave.png`" tag="img" width="100%" max-width="700px")',-1)]]),html:e(()=>[...d[66]||=[a(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  tag="img"
  width="100%"
  max-width="700px">
</w-image>`,-1)]]),js:e(()=>[...d[67]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,tag:`img`,width:`100%`,"max-width":`700px`},null,8,[`src`])]),_:1}),i(x,{h2:``},{default:e(()=>[...d[68]||=[a(`Figure with or without caption`,-1)]]),_:1}),d[128]||=n(`ul`,null,[n(`li`,null,[a(`You can tell the w-image component to use the native HTML `),n(`span`,{class:`code`},`<figure>`),a(` tag. In
that case, the image inside will use an `),n(`span`,{class:`code`},`<img>`),a(` tag.`)]),n(`li`,null,[a(`If you provide a caption (with or without requesting a figure tag), the w-image tag will be
using the `),n(`span`,{class:`code`},`<figure>`),a(` tag along with `),n(`span`,{class:`code`},`<figcaption>`),a(`.`)])],-1),i(T,{"content-class":`text-center`},{pug:e(()=>[...d[69]||=[a(`w-image(
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
  max-width="700")`,-1)]]),html:e(()=>[...d[70]||=[a(`<w-image
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
</w-image>`,-1)]]),js:e(()=>[...d[71]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[d[72]||=n(`p`,null,`Figure without caption.`,-1),i(w,{src:`${u.baseUrl}images/japanese-wave.png`,tag:`figure`,"max-width":`700`},null,8,[`src`]),d[73]||=n(`p`,{class:`mt8`},`Figure with caption.`,-1),i(w,{src:`${u.baseUrl}images/japanese-wave.png`,caption:`The Great Wave Off Kanagawa - Hokusai`,"max-width":`700`},null,8,[`src`]),d[74]||=n(`p`,{class:`mt8`},[a(`With some quick styles adding these classes: `),n(`code`,null,`.pa2.sh2.base-color--bg`),a(`:`)],-1),i(w,{class:`pa2 sh2 base-color--bg`,src:`${u.baseUrl}images/japanese-wave.png`,caption:`The Great Wave Off Kanagawa - Hokusai`,"max-width":`700`},null,8,[`src`]),d[75]||=n(`div`,{class:`caption mt3`},`Real size: 1900x443. Given max-width: 700.`,-1)]),_:1}),i(x,{h2:``},{default:e(()=>[...d[76]||=[a(`Loading spinner`,-1)]]),_:1}),d[129]||=n(`p`,null,`This image is very big, so that you have time to see the spinner while loading.
Refresh the page if you haven't seen it (or enable dev tools throttling if your connection is too fast)!`,-1),i(T,{"content-class":`text-center`},{pug:e(()=>[...d[77]||=[a('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :ratio="5098 / 2550")',-1)]]),html:e(()=>[...d[78]||=[a(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  :ratio="5098 / 2550">
</w-image>`,-1)]]),js:e(()=>[...d[79]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`,-1)]]),default:e(()=>[i(w,{src:`${u.baseUrl}images/spirit-island--alberta.png`,ratio:5098/2550},null,8,[`src`]),d[80]||=n(`div`,{class:`caption`},`Real size: 5098x2550. Given ratio: 5098 / 2550.`,-1)]),_:1}),i(C,{tip:``},{default:e(()=>[...d[81]||=[n(`strong`,null,`Dev notes:`,-1),a(` disabling the browser cache will prevent you from seeing the transition.`,-1),n(`br`,null,null,-1),a(`
The reason for it is that the image first loads in the `,-1),n(`strong`,{class:`code`},`w-image`,-1),a(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`,-1)]]),_:1}),i(x,{h2:``},{default:e(()=>[...d[82]||=[a(`Transitions`,-1)]]),_:1}),d[130]||=n(`p`,null,`Once the image is fully loaded, it will display in one piece with a fade transition by default.
You can customize the transition.`,-1),i(T,null,{pug:e(()=>[...d[86]||=[a(`w-flex(wrap justify-center align-center)
  div.mr4.my2
    .title3.mb2 Transition names
    w-radios(
      v-model="img.transition"
      :items="transitions"
      item-value-key="label")
      template(#label="{ item }")
        code `+l(`{{ item.label }}`)+`
    w-button.mt2(@click="reload") Reload image

  w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")`,-1)]]),html:e(()=>[...d[87]||=[a(`<w-flex wrap justify-center align-center>
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
          `+l(`{{ item.label }}`)+`
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
</w-flex>`,-1)]]),js:e(()=>[...d[88]||=[a(`data: () => ({
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
}`,-1)]]),default:e(()=>[n(`div`,m,[n(`div`,h,[d[84]||=n(`div`,{class:`title3 mb2`},`Transition names`,-1),i(D,{modelValue:u.img.transition,"onUpdate:modelValue":d[0]||=e=>u.img.transition=e,items:u.transitions,"item-value-key":`label`},{label:e(({item:e})=>[n(`code`,null,l(e.label),1)]),_:1},8,[`modelValue`,`items`]),i(O,{class:`mt2`,onClick:b.reload},{default:e(()=>[...d[83]||=[a(`Reload image`,-1)]]),_:1},8,[`onClick`])]),n(`div`,null,[i(w,{src:u.img.src,width:500,height:250,transition:u.img.transition},null,8,[`src`,`transition`]),d[85]||=n(`div`,{class:`caption`},`Real size: 5098x2550. Given size: 500x250.`,-1)])])]),_:1}),i(C,{tip:``},{default:e(()=>[...d[89]||=[n(`strong`,null,`Dev notes:`,-1),a(` disabling the browser cache will prevent you from seeing the transition.`,-1),n(`br`,null,null,-1),a(`
The reason for it is that the image first loads in the `,-1),n(`strong`,{class:`code`},`w-image`,-1),a(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`,-1)]]),_:1}),i(x,{h2:``},{default:e(()=>[...d[90]||=[a(`Error handling & Fallback`,-1)]]),_:1}),n(`div`,g,[i(T,{class:`mt0 no-grow`,"content-class":`text-center px6`},{pug:e(()=>[...d[91]||=[a(`w-image.bd1(src="/images/broken.png" width="100" height="100")`,-1)]]),html:e(()=>[...d[92]||=[a(`<w-image
  class="bd1"
  src="/images/broken.png"
  width="100"
  height="100">
</w-image>`,-1)]]),default:e(()=>[i(w,{class:`bd1`,src:`/images/broken.png`,width:`100`,height:`100`}),d[93]||=n(`div`,{class:`caption`},[a(`Given size: 100x100.`),n(`br`),a(`Border added for visualization.`)],-1)]),_:1}),d[94]||=n(`p`,null,[a(`If for some reason the image would not load, the default fallback is a blank 1x1 transparent gif
(invisible, ultra light), like so.`),n(`br`),n(`br`),a(`
So if the image can't load, a transparent background will be there instead preventing the
browser's broken image icon.`),n(`br`),n(`br`),a(`
But you can of course provide a custom fallback image to display if the image cannot load.
`)],-1)]),i(x,{h3:``},{default:e(()=>[...d[95]||=[a(`Fallback & Error handling`,-1)]]),_:1}),d[131]||=n(`ul`,null,[n(`li`,null,`For instance, in a e-boutique you may try to load the image of an item without knowing if this item
has an available image or not. In that case you can plan to have a fallback image, in case, like
following.`),n(`li`,null,[a(`Thanks to the `),n(`code`,null,`error`),a(` emitted event, you can also trigger a specific action, such as displaying an
error message like in this example. But this is optional, and without the custom alert nothing would
look broken when you provide a valid fallback image!
`)])],-1),i(T,{"content-class":`text-center`},{pug:e(()=>[...d[97]||=[a('w-image(\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true")\n\nw-alert(v-if="showError" error) Oops. The image could not load!',-1)]]),html:e(()=>[...d[98]||=[a(`<w-image
  :src="\`\${baseUrl}images/broken.png\`"
  :fallback="\`\${baseUrl}images/not-found.jpg\`"
  @error="showError = true">
</w-image>

<w-alert
  v-if="showError"
  error>
  Oops. The image could not load!
</w-alert>`,-1)]]),js:e(()=>[...d[99]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/',
  showError: false
})
`,-1)]]),default:e(()=>[i(w,{src:`${u.baseUrl}images/broken.png`,fallback:`${u.baseUrl}images/not-found.jpg`,onError:d[1]||=e=>u.showError=!0},null,8,[`src`,`fallback`]),u.showError?(o(),s(k,{key:0,error:``},{default:e(()=>[...d[96]||=[a(`Oops. The image could not load!`,-1)]]),_:1})):c(``,!0)]),_:1}),i(x,{h2:``},{default:e(()=>[...d[100]||=[a(`Lazy`,-1)]]),_:1}),d[132]||=n(`p`,null,[a(`By using the lazy attribute, it is possible to load the image only when it is in the viewport.`),n(`br`),a(`
Wave UI internally uses an `),n(`span`,{class:`code`},`IntersectionObserver`),a(` and will only start loading the image
when it is visible.`)],-1),i(T,null,{pug:e(()=>[...d[101]||=[a('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="5098 / 2550")',-1)]]),html:e(()=>[...d[102]||=[a(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  lazy
  :ratio="5098 / 2550">
</w-image>`,-1)]]),js:e(()=>[...d[103]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:e(()=>[i(w,{src:`${u.baseUrl}images/spirit-island--alberta.png?v1`,lazy:``,ratio:5098/2550},null,8,[`src`]),d[104]||=n(`div`,{class:`caption`},`Real size: 5098x2550.`,-1)]),_:1}),i(x,{h2:``,slug:`content`},{default:e(()=>[...d[105]||=[a(`Content - via default slot`,-1)]]),_:1}),d[133]||=n(`p`,null,[a(`In some cases, it can be convenient to have some content on top of the image.`),n(`br`),a(`
By default the content will be horizontally and vertically centered, but you could easily align it
at the bottom left for instance, with the `),n(`code`,null,`content-class`),a(` prop:
`),n(`code`,null,`content-class="align-end justify-start pa2"`),a(`.`)],-1),i(T,null,{pug:e(()=>[...d[107]||=[a('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="5098 / 2550")\n  span.title1.pink Wave UI',-1)]]),html:e(()=>[...d[108]||=[a(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="5098 / 2550">
  <span class="title1 pink">Wave UI</span>
</w-image>`,-1)]]),js:e(()=>[...d[109]||=[a(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`,-1)]]),default:e(()=>[i(w,{src:`${u.baseUrl}images/japanese-wave.png`,ratio:5098/2550},{default:e(()=>[...d[106]||=[n(`span`,{class:`title1 pink`},`Wave UI`,-1)]]),_:1},8,[`src`])]),_:1})])}var v=u({data:()=>({baseUrl:`/wave-ui/`,img:{initialSrc:`/wave-ui/images/spirit-island--alberta.png`,src:`/wave-ui/images/spirit-island--alberta.png`,transition:`fade`},transitions:[{label:`fade`},{label:`slide-fade-up`},{label:`slide-fade-down`},{label:`slide-fade-left`},{label:`slide-fade-right`},{label:`scale`},{label:`scale-fade`},{label:`bounce`},{label:`twist`},{label:`none`,value:``}],showError:!1}),methods:{reload(){this.img.src=``,setTimeout(()=>this.img.src=this.img.initialSrc,500)}}},[[`render`,_]]);function y(s,c,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:e(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var b={tag:`Tells which tag to use for the <strong class="code">w-image</strong>'s image. It can be one of &lt;span&gt;, &lt;div&gt;, &lt;figure&gt; or &lt;img&gt;.`,src:`The source of the image to display.`,width:`Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.`,height:`Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.`,ratio:`Sets or overrides the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. By default the intrinsic image ratio is used.<br>Refer to the <a href="#ratio">Ratio</a> example.`,lazy:`When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.`,absolute:`Sets the CSS position of the image to <code>absolute</code>.`,fixed:`Sets the CSS position of the image to <code>fixed</code>.`,contain:`By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".`,noSpinner:`Removes the default spinner while the image is loading.`,spinnerColor:`Define a specific color for the spinner while the image is loading. By default the spinner color is the primary color.`,fallback:`Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.`,transition:`Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.`,contentClass:`Applies the given classes to the content wrapper when using the <code>default</code> slot.`,caption:`Adds a caption text to the bottom of the image. If used, the wrapper will be using the &lt;figure&gt; native HTML tag and the caption will use the &lt;figcaption&gt; tag.`,captionClass:`Applies the given classes to the caption element.`},x={default:{description:`Provide a custom content, to display on top of the image.`},loading:{description:`Provide a custom loading content, if the default spinner doesn't suit in your app.`}},S={error:{description:`Emitted on image load error.`,params:{"[DOM event]":`The associated DOM event.`}},loaded:{description:`Emitted on image successful load.`,params:{String:`The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed).`}},loading:{description:`Emitted when the image starts loading.`,params:{String:`The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed).`}}},C=u({data:()=>({propsDescs:b,slots:x}),computed:{props(){return d.props},events(){return d.emits.reduce((e,t)=>(e[t]=S[t]||{})&&e,{})}}},[[`render`,y]]);function w(n,s,c,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return o(),r(`main`,null,[i(f,{slug:`w-image`},{default:e(()=>[...s[0]||=[a(`w-image`,-1)]]),_:1}),i(p),i(m)])}var T=u({components:{Examples:v,Api:C}},[[`render`,w]]);export{T as default};