import{N as e,W as t,c as n,d as r,g as i,h as a,k as o,m as s}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";var l={class:`orange-light4--bg pa12 grey-dark5`},u={class:`yellow-light5--bg pa3`};function d(c,d){let f=e(`title-link`),p=e(`router-link`),m=e(`example`);return o(),r(`main`,null,[i(f,{class:`mt4`,h1:``},{default:t(()=>[...d[0]||=[a(`Spaces`,-1)]]),_:1}),i(f,{h2:``},{default:t(()=>[...d[1]||=[a(`Content spacing`,-1)]]),_:1}),d[26]||=s(`<p>Margins and paddings are incrementable from 0 to 12 using this syntax: <code>ma[number]</code>,
<code>pa[number]</code> where number is a number in this interval <span class="code">[0, 12]</span> for paddings
and <span class="code">[-12, 12]</span> for margins.<br>
You can also set a space on a single side with <code>l</code>, <code>r</code>, <code>t</code>,
<code>b</code> for left, right, top, bottom like so: <code>m[side][number]</code>,
<code>p[side][number]</code>.<br><br> <code>x</code> and <code>y</code> will set both left and right or top and bottom together:
<code>mx[number]</code>, <code>px[number]</code>. And <code>a</code> is for all the sides.
</p>`,1),i(m,null,{pug:t(()=>[...d[15]||=[a(`.orange-light4--bg.pa12
  .yellow-light5--bg.pa3.
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x
    base-font-size pixels.`,-1),n(`br`,null,null,-1),a(`
    The default base font size is 14px but it's easy to override it in your SCSS, as well as the
    increment for \`pax\` and \`max\` classes.

  .green-light4--bg.mt8.pa3.
    This green container has a \`mt8\` class which results in a top margin of: 8 x 4 x
    base-font-size pixels.`,-1)]]),html:t(()=>[...d[16]||=[a(`<div class="orange-light4--bg pa12">
  <div class="yellow-light5--bg pa3">
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x base-font-size pixels.
    The default base font size is 14px but it's easy to override it in your SCSS, as well as the
    increment for \`pax\` and \`max\` classes.
  </div>

  <div class="green-light4--bg mt8 pa3">
    This green container has an \`mt8\` class which results in a top margin of: 8 x 4 x base-font-size pixels.
  </div>
</div>
`,-1)]]),default:t(()=>[n(`div`,l,[n(`div`,u,[d[3]||=a(`The orange container has a `,-1),d[4]||=n(`span`,{class:`code inherit`},`pa12`,-1),d[5]||=a(` class which results in a padding of: 12 x 4 x
base-font-size pixels.`,-1),d[6]||=n(`br`,null,null,-1),d[7]||=a(`
The default base font size is 14px but it's easy to override it in your SCSS, as well as the
increment for `,-1),d[8]||=n(`span`,{class:`code inherit`},`pax`,-1),d[9]||=a(` and `,-1),d[10]||=n(`span`,{class:`code inherit`},`max`,-1),d[11]||=a(` classes. Read on in the
`,-1),i(p,{to:`customization`},{default:t(()=>[...d[2]||=[a(`customization`,-1)]]),_:1}),d[12]||=a(` page.`,-1),d[13]||=n(`br`,null,null,-1)]),d[14]||=n(`div`,{class:`green-light4--bg mt8 pa3`},[a(`This green container has a `),n(`span`,{class:`code inherit`},`mt8`),a(` class which results in a top margin of: 8 x 4 x
base-font-size pixels.`)],-1)])]),_:1}),i(f,{h3:``},{default:t(()=>[...d[17]||=[a(`Negative margin`,-1)]]),_:1}),d[27]||=n(`p`,null,[a(`Sometimes you may need negative margins, Wave UI also provides 12 negative increments for this
purpose.`),n(`br`),a(`
The syntax for it is `),n(`code`,null,`m[side]-[number]`),a(` with a minus for negative - more like the famous
Emmet plugin that came along with Sublime Text!`),n(`br`),a(`
In this example, the green container is moved up whereas its top should touch the bottom of the
orange container.`)],-1),i(m,null,{pug:t(()=>[...d[18]||=[a(`.orange-light4--bg.pa8
.green-light4--bg.mt-8.mx8.pa3.
  This green container has a \`mt-8\` class which results in a negative top margin of: -8 x 4 x
  base-font-size pixels.`,-1)]]),html:t(()=>[...d[19]||=[a(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mt-8 mx8 pa3">
    This green container has a \`mt-8\` class which results in a negative top margin of: 8 x 4 x
    base-font-size pixels.
  </div>
</div>
`,-1)]]),default:t(()=>[d[20]||=n(`div`,{class:`orange-light4--bg pa8`},null,-1),d[21]||=n(`div`,{class:`green-light4--bg mt-8 mx8 pa3 grey-dark5`},[a(`This green container has a `),n(`span`,{class:`code inherit`},`mt-8`),a(` class which results in a negative top margin of: -8 x 4 x
base-font-size pixels.`)],-1)]),_:1}),i(f,{h3:``},{default:t(()=>[...d[22]||=[a(`Margin auto`,-1)]]),_:1}),d[28]||=n(`p`,null,[a(`Last but not least, margin: auto is also possible with the `),n(`code`,null,`a`),a(` modifier.`),n(`br`),a(`
The syntax for it is `),n(`code`,null,`m[side]a`)],-1),i(m,null,{pug:t(()=>[...d[23]||=[a(`.orange-light4--bg.pa8
  .green-light4--bg.mxa.pa3(style="max-width: 240px").
    This green container has a \`mxa\` class which results in a margin auto on the left & right.`,-1)]]),html:t(()=>[...d[24]||=[a(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mxa pa3" style="max-width: 240px">
    This green container has a \`mxa\` class which results in a margin auto on the left & right.
  </div>
</div>`,-1)]]),default:t(()=>[d[25]||=n(`div`,{class:`orange-light4--bg pa8 grey-dark5`},[n(`div`,{class:`green-light4--bg mxa pa3`,style:{"max-width":`240px`}},[a(`This green container has a `),n(`span`,{class:`code inherit`},`mxa`),a(` class which results in a margin auto on the left & right.`)])],-1)]),_:1})])}var f=c({},[[`render`,d]]);export{f as default};