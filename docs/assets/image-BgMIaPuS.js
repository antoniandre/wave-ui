import{N as e,W as t,bt as n,c as r,d as i,g as a,h as o,k as s,l as c,u as l}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as u}from"./_plugin-vue_export-helper-B80Cc4Ui.js";import{T as d}from"./index-BhRaCC4I.js";var f={class:`w-card w-flex mdu-row basis-zero pa4 gap4`},p={class:`mr5`},m={class:`w-flex wrap justify-center align-center`},h={class:`mr4 my2`},g={class:`w-flex gap6`};function _(u,d,_,v,y,b){let x=e(`title-link`),S=e(`w-divider`),C=e(`alert`),w=e(`w-image`),T=e(`example`),E=e(`w-card`),D=e(`w-radios`),O=e(`w-button`),k=e(`w-alert`);return s(),i(`div`,null,[a(x,{h2:``},{default:t(()=>[...d[2]||=[o(`Why using w-image and not a simple <img>`,-1)]]),_:1}),r(`div`,f,[d[4]||=r(`div`,null,[r(`div`,{class:`title3`},`A simple <img>`),r(`p`,null,[o(`will display when loaded, and will take the dimensions of the actual image.`),r(`br`),o(`
When the image has a large file size, it will be loaded in chunks, and the image will be displayed
truncated until completely loaded.`),r(`br`),r(`br`),o(`
If ever it fails to load, a broken image icon will display instead (different on every browser).`),r(`br`),r(`br`),o(`
Setting both a width and height could stretch the image and loose the aspect ratio.
Which is IMHO, in most cases crappy except for repeated patterns.`)])],-1),a(S,{class:`no-grow primary`,vertical:!u.$waveui.breakpoint.xs&&!u.$waveui.breakpoint.sm},{default:t(()=>[...d[3]||=[o(`VS`,-1)]]),_:1},8,[`vertical`]),d[5]||=r(`div`,null,[r(`div`,{class:`title3`},`The w-image`),r(`p`,null,[o(`can show a spinner while the image is loading, and display the image all at once with a nice
animation (like fade-in) when the image is ready.`),r(`br`),r(`br`),o(`
If ever it fails to load, `),r(`strong`,{class:`code`},`w-image`),o(` will handle the error gracefully, will emit a
`),r(`code`,null,`@error`),o(` event containing the error, and a blank transparent image will be displayed in place of the
image itself, so nothing looks broken.`),r(`br`),o(`
Or, you can also provide a fallback image for cases when the main image has a chance not to be found (like with
dynamic src).`),r(`br`),r(`br`),o(`
Setting both a width and height will never loose the aspect ratio: it will auto-crop if needed.
`)])],-1)]),a(C,{tip:``},{default:t(()=>[...d[6]||=[r(`div`,{class:`title2 mt0 lh1`},[o(`The `),r(`strong`,{class:`code`},`w-image`),o(` in a nutshell`)],-1),r(`ul`,null,[r(`li`,null,`You can set a width or a height or both. That's all you need.`),r(`li`,null,`The width and height may be fixed (e.g. in pixel) or adaptive (e.g. in percentage).`),r(`li`,null,`The ratio is not needed, but can be provided to override the intrinsic ratio and crop the image (keeping it responsive if it was).`),r(`li`,null,`You can choose a tag to use for the image, but don't need to. It can be a <span> (default) or <img>.`),r(`li`,null,`Providing a caption, will use the native HTML <figure> and <figcaption> tags.`)],-1)]]),_:1}),a(S,{class:`ma12`}),d[110]||=r(`p`,{class:`size--lg`},`Now here comes a ton of concrete examples.`,-1),a(x,{h2:``},{default:t(()=>[...d[7]||=[o(`Default`,-1)]]),_:1}),d[111]||=r(`p`,null,[o(`With no given width, height or ratio, the image will be responsive, up to its full-size.`),r(`br`),o(`
This means a width of 100% is added, as well as the image computed ratio (to preserve it when
scaling down), and a max width equal to the real image width.`)],-1),a(T,{"content-class":`text-center`},{pug:t(()=>[...d[8]||=[o('w-image(:src="`${baseUrl}images/favicon.png`")',-1)]]),html:t(()=>[...d[9]||=[o('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>',-1)]]),js:t(()=>[...d[10]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`,-1)]]),default:t(()=>[a(w,{src:`${u.baseUrl}images/favicon.png`},null,8,[`src`]),d[11]||=r(`div`,{class:`caption text-center`},`Real size: 200x200.`,-1)]),_:1}),a(C,{info:``},{default:t(()=>[...d[12]||=[r(`p`,null,[o(`In the `),r(`code`,null,`src`),o(` attribute, it's a good idea to use the `),r(`code`,null,`BASE_URL`),o(` environment variable to point to the
public root path of your app if your image is in the `),r(`code`,null,`public/`),o(` folder.`),r(`br`),o(`
For instance, this documentation public root path is `),r(`code`,null,`https://antoniandre.github.io/wave-ui/`),o(`, which is different
from just `),r(`code`,null,`/`),o(` which would point to `),r(`code`,null,`https://antoniandre.github.io/`),o(`.`),r(`br`)],-1),r(`ul`,null,[r(`li`,null,[o(`With Vite, you can use `),r(`code`,null,n(`import`)+`.meta.env.BASE_URL`),o(` to refer to your public app root URL.`)]),r(`li`,null,[o(`With Vue CLI or Webpack, you can also use `),r(`code`,null,n(`process`)+`.env.BASE_URL`),o(`.`)])],-1)]]),_:1}),a(x,{h2:``},{default:t(()=>[...d[13]||=[o(`Given dimensions`,-1)]]),_:1}),d[112]||=r(`p`,null,[r(`strong`,null,[o(`You can set a width, a height, or both.`),r(`br`)]),o(`If the actual image is bigger than the given width or height, it will be cropped.`),r(`br`),o(`
But if you prefer it to be resized maintaining the ratio, then you can set a ratio.`)],-1),a(x,{h3:``},{default:t(()=>[...d[14]||=[o(`Given both fixed width and height`,-1)]]),_:1}),d[113]||=r(`p`,null,[o(`In both examples the image will always have the same fixed size regardless of the viewport or
constraints.`),r(`br`),o(`
The first example forces the width and height to 150x150, which is smaller than the actual picture
size so it is cropping it (you can inspect with the dev tools).`),r(`br`),o(`
The second example sets a width and height of 500x150, which is also cropping it.`)],-1),a(T,{"content-class":`text-center w-flex justify-space-around wrap`},{pug:t(()=>[...d[17]||=[o('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="150" :height="150")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="500" :height="150")',-1)]]),html:t(()=>[...d[18]||=[o(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="150"
  :height="150">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="500"
  :height="150">
</w-image>`,-1)]]),js:t(()=>[...d[19]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[r(`div`,p,[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:150,height:150},null,8,[`src`]),d[15]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: 150x150.`,-1)]),r(`div`,null,[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:500,height:150},null,8,[`src`]),d[16]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: 500x150.`,-1)])]),_:1}),a(x,{h3:``},{default:t(()=>[...d[20]||=[o(`Given fixed width only`,-1)]]),_:1}),d[114]||=r(`p`,null,`If the width is all you provide, the real ratio of the image will be computed and used.
In result, the image will have the given fixed width and will display in full: it will not be cropped
and will not grow or shrink with constraints.`,-1),a(T,{"content-class":`text-center w-flex column`},{pug:t(()=>[...d[23]||=[o('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :width="200")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :width="400")',-1)]]),html:t(()=>[...d[24]||=[o(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="200">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :width="400">
</w-image>`,-1)]]),js:t(()=>[...d[25]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[r(`div`,null,[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:200},null,8,[`src`]),d[21]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: width=200.`,-1)]),r(`div`,null,[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:400},null,8,[`src`]),d[22]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: width=400.`,-1)])]),_:1}),a(x,{h3:``},{default:t(()=>[...d[26]||=[o(`Given fixed height only`,-1)]]),_:1}),d[115]||=r(`p`,null,`If the height is all you provide, the real ratio of the image will be computed and used.
In result, the image will have the given fixed height and will display in full: it will not be cropped
and will not grow or shrink with constraints.`,-1),a(T,{"content-class":`text-center w-flex column`},{pug:t(()=>[...d[29]||=[o('w-image.mr5(:src="`${baseUrl}images/japanese-wave.png`" :height="70")\n\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :height="120")',-1)]]),html:t(()=>[...d[30]||=[o(`<w-image
  class="mr5"
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :height="70">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :height="120">
</w-image>`,-1)]]),js:t(()=>[...d[31]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[r(`div`,null,[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,height:70},null,8,[`src`]),d[27]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: height=70.`,-1)]),r(`div`,null,[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,height:120},null,8,[`src`]),d[28]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: height=120.`,-1)])]),_:1}),a(x,{h3:``},{default:t(()=>[...d[32]||=[o(`Relative width and/or height`,-1)]]),_:1}),d[116]||=r(`p`,{class:`grey mb0`},`When the width and/or height is adaptive to its container.`,-1),d[117]||=r(`div`,null,[o(`The only thing needed is width or a height, and `),r(`strong`,null,`Wave UI`),o(` will compute the ratio so it
can grow or shrink with the container.`),r(`ul`,null,[r(`li`,null,`The first case is setting a width of 100% of the example container, so it will adapt. Very classic.`),r(`li`,null,[o(`The second case is setting a height of 100% in a `),r(`strong`,{class:`code`},`w-card`),o(` that is fixed to 100px height.`)]),r(`li`,null,`The third case is setting a width of 30vw and a height of 10vh which will constrain the image
in many possible ways which will likely crop horizontally or vertically when needed. Try
resizing your browser width and height to observe the rendering!`)])],-1),a(T,{"content-class":`text-center w-flex column gap5`},{pug:t(()=>[...d[36]||=[o('w-image(:src="`${baseUrl}images/japanese-wave.png`" width="100%")\n\nw-card(content-class="pa0" style="height: 100px")\n  w-image(:src="`${baseUrl}images/japanese-wave.png`" height="100%")',-1)]]),html:t(()=>[...d[37]||=[o(`<w-image
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
</w-image>`,-1)]]),js:t(()=>[...d[38]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[r(`div`,null,[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:`100%`},null,8,[`src`]),d[33]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: width=100%.`,-1)]),r(`div`,null,[a(E,{"content-class":`pa0`,style:{height:`100px`}},{default:t(()=>[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,height:`100%`},null,8,[`src`])]),_:1}),d[34]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: height=100%.`,-1)]),r(`div`,null,[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,width:`30vw`,height:`10vh`},null,8,[`src`]),d[35]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given size: width=30vw, height=10vh.`,-1)])]),_:1}),a(x,{h2:``},{default:t(()=>[...d[39]||=[o(`Image ratio`,-1)]]),_:1}),d[118]||=r(`p`,{class:`grey`},`The ratio prop purpose is to maintain a specific image ratio while resizing with constraints.`,-1),d[119]||=r(`p`,null,[o(`Usually you don't need to set a ratio since Wave UI computes the original image ratio and already
applies it to the image.`),r(`br`),o(`
But you may want to apply a different ratio than the image natural ratio, like in the second example.
`)],-1),a(x,{h3:``},{default:t(()=>[...d[40]||=[o(`Intrinsic image ratio`,-1)]]),_:1}),d[120]||=r(`p`,{class:`grey`},`Image ratio equal to the exact width and height of the image (width / height).`,-1),d[121]||=r(`p`,null,[o(`This is the most common case: the image is visible in full, and scales with its container with
preserved ratio.`),r(`br`),o(`
Note that Wave UI will add a width of 100% if neither of width and height are provided.`)],-1),a(C,{class:`mt2`,tip:``},{default:t(()=>[...d[41]||=[o(`In this case, you can obtain the same result by just setting a width of 100%.`,-1)]]),_:1}),a(T,{"content-class":`text-center`},{pug:t(()=>[...d[42]||=[o('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443")',-1)]]),html:t(()=>[...d[43]||=[o(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1900 / 443">
</w-image>`,-1)]]),js:t(()=>[...d[44]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,ratio:1900/443},null,8,[`src`]),d[45]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1900 / 443.`,-1)]),_:1}),a(x,{h3:``},{default:t(()=>[...d[46]||=[o(`Custom ratio`,-1)]]),_:1}),d[122]||=r(`p`,{class:`grey`},`Setting a different ratio than the actual image one.`,-1),d[123]||=r(`p`,{class:`mb0`},`In this case, the image will be cropped on purpose, but still scaling with its container with
preserved ratio. 👍`,-1),d[124]||=r(`div`,{class:`caption`},`A drop shadow is added around the images to help visualizing the edges of the image.`,-1),a(T,{"content-class":`text-center`},{pug:t(()=>[...d[49]||=[o('w-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1000 / 443")\n\nw-image.sh1.mt6(:src="`${baseUrl}images/japanese-wave.png`" :ratio="3000 / 443")',-1)]]),html:t(()=>[...d[50]||=[o(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="1000 / 443"
  class="sh1">
</w-image>

<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="3000 / 443"
  class="sh1 mt6">
</w-image>`,-1)]]),js:t(()=>[...d[51]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[r(`div`,null,[a(w,{class:`sh1`,src:`${u.baseUrl}images/japanese-wave.png`,ratio:1e3/443},null,8,[`src`]),d[47]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1000 / 443.`,-1)]),r(`div`,null,[a(w,{class:`sh1 mt6`,src:`${u.baseUrl}images/japanese-wave.png`,ratio:3e3/443},null,8,[`src`]),d[48]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 3000 / 443.`,-1)])]),_:1}),a(x,{h3:``},{default:t(()=>[...d[52]||=[o(`Ratio combined with a set width or height`,-1)]]),_:1}),d[125]||=r(`p`,null,[o(`If the ratio is the original, setting it is not necessary. But if you provide a different one
the image will be cropped.`),r(`br`),o(`
Setting both a width and a height in addition to a ratio, would be pointless: it would be the same
outcome with just a width + height, or just a ratio + width, or ratio + height.`)],-1),a(T,{"content-class":`text-center`},{pug:t(()=>[...d[53]||=[o('p Ratio + width\nw-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="50%")\n\np.mt4 Ratio + height\nw-image.sh1(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1900 / 443" height="100")\n\np.mt4 Ratio + width + height (pointless)\nw-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="1" width="400" height="100")',-1)]]),html:t(()=>[...d[54]||=[o(`<p>Ratio + width</p>
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
</w-image>`,-1)]]),js:t(()=>[...d[55]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[d[56]||=r(`p`,null,`Ratio + width`,-1),a(w,{class:`sh1`,src:`${u.baseUrl}images/japanese-wave.png`,ratio:1,width:`50%`},null,8,[`src`]),d[57]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1, given width: 50%.`,-1),d[58]||=r(`p`,{class:`mt4`},`Ratio + height`,-1),a(w,{class:`sh1`,src:`${u.baseUrl}images/japanese-wave.png`,ratio:1900/443,height:`100`},null,8,[`src`]),d[59]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1900 / 443, given height: 100.`,-1),d[60]||=r(`p`,{class:`mt4`},`Ratio + width + height (pointless)`,-1),a(w,{src:`${u.baseUrl}images/japanese-wave.png`,ratio:1,width:`400`,height:`100`},null,8,[`src`]),d[61]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443. Given ratio: 1, given width: 400, given height: 100.`,-1)]),_:1}),a(x,{h2:``,slug:`using-the-img-tag`},{default:t(()=>[...d[62]||=[o(`Using the <img> tag`,-1)]]),_:1}),d[126]||=r(`p`,null,[o(`You can choose whether the `),r(`strong`,{class:`code`},`w-image`),o(` component should use the default <span>
tag or an <img>.`),r(`br`)],-1),d[127]||=r(`ul`,null,[r(`li`,null,`The default <span> tag will allow cropping in particular which is very advantageous.`),r(`li`,null,`The <img> tag will allow stretching the image, (not usually what we want, but you know, sometimes).
Or it could also be used for more semantics.`),r(`li`,null,`Also note that when sending to the printer, the <img> images will show up by default whereas
the background graphics will only show up if you choose this option. You can make the decision
according to the need.
`)],-1),a(C,{info:``},{default:t(()=>[d[64]||=r(`p`,null,`Note that by design, setting both a width and height with the <img> tag, will still allow you
to achieve image stretching, loosing the aspect ratio. This may be a desired effect or not.`,-1),a(T,{"content-class":`text-center w-flex justify-space-around wrap`},{default:t(()=>[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,tag:`img`,width:`100%`,height:`100px`},null,8,[`src`]),d[63]||=r(`div`,{class:`caption text-center`},`Real size: 1900x443, given width: 100%, given height: 100px.`,-1)]),_:1})]),_:1}),a(T,{"content-class":`text-center`},{pug:t(()=>[...d[65]||=[o('w-image(:src="`${baseUrl}images/japanese-wave.png`" tag="img" width="100%" max-width="700px")',-1)]]),html:t(()=>[...d[66]||=[o(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  tag="img"
  width="100%"
  max-width="700px">
</w-image>`,-1)]]),js:t(()=>[...d[67]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,tag:`img`,width:`100%`,"max-width":`700px`},null,8,[`src`])]),_:1}),a(x,{h2:``},{default:t(()=>[...d[68]||=[o(`Figure with or without caption`,-1)]]),_:1}),d[128]||=r(`ul`,null,[r(`li`,null,[o(`You can tell the w-image component to use the native HTML `),r(`span`,{class:`code`},`<figure>`),o(` tag. In
that case, the image inside will use an `),r(`span`,{class:`code`},`<img>`),o(` tag.`)]),r(`li`,null,[o(`If you provide a caption (with or without requesting a figure tag), the w-image tag will be
using the `),r(`span`,{class:`code`},`<figure>`),o(` tag along with `),r(`span`,{class:`code`},`<figcaption>`),o(`.`)])],-1),a(T,{"content-class":`text-center`},{pug:t(()=>[...d[69]||=[o(`w-image(
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
  max-width="700")`,-1)]]),html:t(()=>[...d[70]||=[o(`<w-image
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
</w-image>`,-1)]]),js:t(()=>[...d[71]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[d[72]||=r(`p`,null,`Figure without caption.`,-1),a(w,{src:`${u.baseUrl}images/japanese-wave.png`,tag:`figure`,"max-width":`700`},null,8,[`src`]),d[73]||=r(`p`,{class:`mt8`},`Figure with caption.`,-1),a(w,{src:`${u.baseUrl}images/japanese-wave.png`,caption:`The Great Wave Off Kanagawa - Hokusai`,"max-width":`700`},null,8,[`src`]),d[74]||=r(`p`,{class:`mt8`},[o(`With some quick styles adding these classes: `),r(`code`,null,`.pa2.sh2.base-color--bg`),o(`:`)],-1),a(w,{class:`pa2 sh2 base-color--bg`,src:`${u.baseUrl}images/japanese-wave.png`,caption:`The Great Wave Off Kanagawa - Hokusai`,"max-width":`700`},null,8,[`src`]),d[75]||=r(`div`,{class:`caption mt3`},`Real size: 1900x443. Given max-width: 700.`,-1)]),_:1}),a(x,{h2:``},{default:t(()=>[...d[76]||=[o(`Loading spinner`,-1)]]),_:1}),d[129]||=r(`p`,null,`This image is very big, so that you have time to see the spinner while loading.
Refresh the page if you haven't seen it (or enable dev tools throttling if your connection is too fast)!`,-1),a(T,{"content-class":`text-center`},{pug:t(()=>[...d[77]||=[o('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" :ratio="5098 / 2550")',-1)]]),html:t(()=>[...d[78]||=[o(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  :ratio="5098 / 2550">
</w-image>`,-1)]]),js:t(()=>[...d[79]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`,-1)]]),default:t(()=>[a(w,{src:`${u.baseUrl}images/spirit-island--alberta.png`,ratio:5098/2550},null,8,[`src`]),d[80]||=r(`div`,{class:`caption`},`Real size: 5098x2550. Given ratio: 5098 / 2550.`,-1)]),_:1}),a(C,{tip:``},{default:t(()=>[...d[81]||=[r(`strong`,null,`Dev notes:`,-1),o(` disabling the browser cache will prevent you from seeing the transition.`,-1),r(`br`,null,null,-1),o(`
The reason for it is that the image first loads in the `,-1),r(`strong`,{class:`code`},`w-image`,-1),o(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`,-1)]]),_:1}),a(x,{h2:``},{default:t(()=>[...d[82]||=[o(`Transitions`,-1)]]),_:1}),d[130]||=r(`p`,null,`Once the image is fully loaded, it will display in one piece with a fade transition by default.
You can customize the transition.`,-1),a(T,null,{pug:t(()=>[...d[86]||=[o(`w-flex(wrap justify-center align-center)
  div.mr4.my2
    .title3.mb2 Transition names
    w-radios(
      v-model="img.transition"
      :items="transitions"
      item-value-key="label")
      template(#label="{ item }")
        code `+n(`{{ item.label }}`)+`
    w-button.mt2(@click="reload") Reload image

  w-image(:src="img.src" :width="500" :height="250" :transition="img.transition")`,-1)]]),html:t(()=>[...d[87]||=[o(`<w-flex wrap justify-center align-center>
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
          `+n(`{{ item.label }}`)+`
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
</w-flex>`,-1)]]),js:t(()=>[...d[88]||=[o(`data: () => ({
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
}`,-1)]]),default:t(()=>[r(`div`,m,[r(`div`,h,[d[84]||=r(`div`,{class:`title3 mb2`},`Transition names`,-1),a(D,{modelValue:u.img.transition,"onUpdate:modelValue":d[0]||=e=>u.img.transition=e,items:u.transitions,"item-value-key":`label`},{label:t(({item:e})=>[r(`code`,null,n(e.label),1)]),_:1},8,[`modelValue`,`items`]),a(O,{class:`mt2`,onClick:b.reload},{default:t(()=>[...d[83]||=[o(`Reload image`,-1)]]),_:1},8,[`onClick`])]),r(`div`,null,[a(w,{src:u.img.src,width:500,height:250,transition:u.img.transition},null,8,[`src`,`transition`]),d[85]||=r(`div`,{class:`caption`},`Real size: 5098x2550. Given size: 500x250.`,-1)])])]),_:1}),a(C,{tip:``},{default:t(()=>[...d[89]||=[r(`strong`,null,`Dev notes:`,-1),o(` disabling the browser cache will prevent you from seeing the transition.`,-1),r(`br`,null,null,-1),o(`
The reason for it is that the image first loads in the `,-1),r(`strong`,{class:`code`},`w-image`,-1),o(` component, then
once it's fully loaded, the image src is filled (or background url) and the image would load again
if you disable the cache. On big images, you would then see a truncated image until completely
loaded, just like a standard <img>.
`,-1)]]),_:1}),a(x,{h2:``},{default:t(()=>[...d[90]||=[o(`Error handling & Fallback`,-1)]]),_:1}),r(`div`,g,[a(T,{class:`mt0 no-grow`,"content-class":`text-center px6`},{pug:t(()=>[...d[91]||=[o(`w-image.bd1(src="/images/broken.png" width="100" height="100")`,-1)]]),html:t(()=>[...d[92]||=[o(`<w-image
  class="bd1"
  src="/images/broken.png"
  width="100"
  height="100">
</w-image>`,-1)]]),default:t(()=>[a(w,{class:`bd1`,src:`/images/broken.png`,width:`100`,height:`100`}),d[93]||=r(`div`,{class:`caption`},[o(`Given size: 100x100.`),r(`br`),o(`Border added for visualization.`)],-1)]),_:1}),d[94]||=r(`p`,null,[o(`If for some reason the image would not load, the default fallback is a blank 1x1 transparent gif
(invisible, ultra light), like so.`),r(`br`),r(`br`),o(`
So if the image can't load, a transparent background will be there instead preventing the
browser's broken image icon.`),r(`br`),r(`br`),o(`
But you can of course provide a custom fallback image to display if the image cannot load.
`)],-1)]),a(x,{h3:``},{default:t(()=>[...d[95]||=[o(`Fallback & Error handling`,-1)]]),_:1}),d[131]||=r(`ul`,null,[r(`li`,null,`For instance, in a e-boutique you may try to load the image of an item without knowing if this item
has an available image or not. In that case you can plan to have a fallback image, in case, like
following.`),r(`li`,null,[o(`Thanks to the `),r(`code`,null,`error`),o(` emitted event, you can also trigger a specific action, such as displaying an
error message like in this example. But this is optional, and without the custom alert nothing would
look broken when you provide a valid fallback image!
`)])],-1),a(T,{"content-class":`text-center`},{pug:t(()=>[...d[97]||=[o('w-image(\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true")\n\nw-alert(v-if="showError" error) Oops. The image could not load!',-1)]]),html:t(()=>[...d[98]||=[o(`<w-image
  :src="\`\${baseUrl}images/broken.png\`"
  :fallback="\`\${baseUrl}images/not-found.jpg\`"
  @error="showError = true">
</w-image>

<w-alert
  v-if="showError"
  error>
  Oops. The image could not load!
</w-alert>`,-1)]]),js:t(()=>[...d[99]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/',
  showError: false
})
`,-1)]]),default:t(()=>[a(w,{src:`${u.baseUrl}images/broken.png`,fallback:`${u.baseUrl}images/not-found.jpg`,onError:d[1]||=e=>u.showError=!0},null,8,[`src`,`fallback`]),u.showError?(s(),c(k,{key:0,error:``},{default:t(()=>[...d[96]||=[o(`Oops. The image could not load!`,-1)]]),_:1})):l(``,!0)]),_:1}),a(x,{h2:``},{default:t(()=>[...d[100]||=[o(`Lazy`,-1)]]),_:1}),d[132]||=r(`p`,null,[o(`By using the lazy attribute, it is possible to load the image only when it is in the viewport.`),r(`br`),o(`
Wave UI internally uses an `),r(`span`,{class:`code`},`IntersectionObserver`),o(` and will only start loading the image
when it is visible.`)],-1),a(T,null,{pug:t(()=>[...d[101]||=[o('w-image(:src="`${baseUrl}images/spirit-island--alberta.png`" lazy :ratio="5098 / 2550")',-1)]]),html:t(()=>[...d[102]||=[o(`<w-image
  :src="\`\${baseUrl}images/spirit-island--alberta.png\`"
  lazy
  :ratio="5098 / 2550">
</w-image>`,-1)]]),js:t(()=>[...d[103]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`,-1)]]),default:t(()=>[a(w,{src:`${u.baseUrl}images/spirit-island--alberta.png?v1`,lazy:``,ratio:5098/2550},null,8,[`src`]),d[104]||=r(`div`,{class:`caption`},`Real size: 5098x2550.`,-1)]),_:1}),a(x,{h2:``,slug:`content`},{default:t(()=>[...d[105]||=[o(`Content - via default slot`,-1)]]),_:1}),d[133]||=r(`p`,null,[o(`In some cases, it can be convenient to have some content on top of the image.`),r(`br`),o(`
By default the content will be horizontally and vertically centered, but you could easily align it
at the bottom left for instance, with the `),r(`code`,null,`content-class`),o(` prop:
`),r(`code`,null,`content-class="align-end justify-start pa2"`),o(`.`)],-1),a(T,null,{pug:t(()=>[...d[107]||=[o('w-image(:src="`${baseUrl}images/japanese-wave.png`" :ratio="5098 / 2550")\n  span.title1.pink Wave UI',-1)]]),html:t(()=>[...d[108]||=[o(`<w-image
  :src="\`\${baseUrl}images/japanese-wave.png\`"
  :ratio="5098 / 2550">
  <span class="title1 pink">Wave UI</span>
</w-image>`,-1)]]),js:t(()=>[...d[109]||=[o(`data: () => ({
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`,-1)]]),default:t(()=>[a(w,{src:`${u.baseUrl}images/japanese-wave.png`,ratio:5098/2550},{default:t(()=>[...d[106]||=[r(`span`,{class:`title1 pink`},`Wave UI`,-1)]]),_:1},8,[`src`])]),_:1})])}var v=u({data:()=>({baseUrl:`/wave-ui/`,img:{initialSrc:`/wave-ui/images/spirit-island--alberta.png`,src:`/wave-ui/images/spirit-island--alberta.png`,transition:`fade`},transitions:[{label:`fade`},{label:`slide-fade-up`},{label:`slide-fade-down`},{label:`slide-fade-left`},{label:`slide-fade-right`},{label:`scale`},{label:`scale-fade`},{label:`bounce`},{label:`twist`},{label:`none`,value:``}],showError:!1}),methods:{reload(){this.img.src=``,setTimeout(()=>this.img.src=this.img.initialSrc,500)}}},[[`render`,_]]);function y(n,c,l,u,d,f){let p=e(`title-link`),m=e(`component-api`);return s(),i(`div`,null,[c[1]||=r(`div`,{class:`w-divider my12`},null,-1),a(p,{class:`title1`,h2:``},{default:t(()=>[...c[0]||=[o(`API`,-1)]]),_:1}),a(m,{class:`mt0`,items:f.props,descriptions:n.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),a(m,{items:n.slots,title:`Slots`},null,8,[`items`]),a(m,{items:f.events,title:`Events`},null,8,[`items`])])}var b={tag:`Tells which tag to use for the <strong class="code">w-image</strong>'s image. It can be one of &lt;span&gt;, &lt;div&gt;, &lt;figure&gt; or &lt;img&gt;.`,src:`The source of the image to display.`,width:`Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.`,height:`Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.`,ratio:`Sets or overrides the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. By default the intrinsic image ratio is used.<br>Refer to the <a href="#ratio">Ratio</a> example.`,lazy:`When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.`,absolute:`Sets the CSS position of the image to <code>absolute</code>.`,fixed:`Sets the CSS position of the image to <code>fixed</code>.`,contain:`By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".`,noSpinner:`Removes the default spinner while the image is loading.`,spinnerColor:`Define a specific color for the spinner while the image is loading. By default the spinner color is the primary color.`,fallback:`Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.`,transition:`Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.`,contentClass:`Applies the given classes to the content wrapper when using the <code>default</code> slot.`,caption:`Adds a caption text to the bottom of the image. If used, the wrapper will be using the &lt;figure&gt; native HTML tag and the caption will use the &lt;figcaption&gt; tag.`,captionClass:`Applies the given classes to the caption element.`},x={default:{description:`Provide a custom content, to display on top of the image.`},loading:{description:`Provide a custom loading content, if the default spinner doesn't suit in your app.`}},S={error:{description:`Emitted on image load error.`,params:{"[DOM event]":`The associated DOM event.`}},loaded:{description:`Emitted on image successful load.`,params:{String:`The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed).`}},loading:{description:`Emitted when the image starts loading.`,params:{String:`The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed).`}}},C=u({data:()=>({propsDescs:b,slots:x}),computed:{props(){return d.props},events(){return d.emits.reduce((e,t)=>(e[t]=S[t]||{})&&e,{})}}},[[`render`,y]]);function w(n,r,c,l,u,d){let f=e(`ui-component-title`),p=e(`examples`),m=e(`api`);return s(),i(`main`,null,[a(f,{slug:`w-image`},{default:t(()=>[...r[0]||=[o(`w-image`,-1)]]),_:1}),a(p),a(m)])}var T=u({components:{Examples:v,Api:C}},[[`render`,w]]);export{T as default};