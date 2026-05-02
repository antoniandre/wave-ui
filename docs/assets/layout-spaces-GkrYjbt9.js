import{A as e,G as t,P as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BuLlhxCm.js";import{t as c}from"./_plugin-vue_export-helper-B80Cc4Ui.js";var l={class:`orange-light4--bg pa12 grey-dark5`},u={class:`yellow-light5--bg pa3`};function d(c,d){let f=n(`title-link`),p=n(`router-link`),m=n(`example`);return e(),i(`main`,null,[a(f,{class:`mt4`,h1:``},{default:t(()=>[...d[0]||=[o(`Spaces`,-1)]]),_:1}),a(f,{class:`mt0`,h2:``},{default:t(()=>[...d[1]||=[o(`Content spacing`,-1)]]),_:1}),d[36]||=s(`<p>Margins and paddings are incrementable from 0 to 12 using this syntax: <code>ma[number]</code>,
<code>pa[number]</code> where number is a number in this interval <span class="code">[0, 12]</span> for paddings
and <span class="code">[-12, 12]</span> for margins.<br>
You can also set a space on a single side with <code>l</code>, <code>r</code>, <code>t</code>,
<code>b</code> for left, right, top, bottom like so: <code>m[side][number]</code>,
<code>p[side][number]</code>.<br><br> <code>x</code> and <code>y</code> will set both left and right or top and bottom together:
<code>mx[number]</code>, <code>px[number]</code>. And <code>a</code> is for all the sides.
</p>`,1),a(m,null,{pug:t(()=>[...d[25]||=[o(".orange-light4--bg.pa12\n  .yellow-light5--bg.pa3.\n    The orange container has a `pa12` class which results in a padding of `calc(12 * var(--w-base-increment))` (48px with defaults).",-1),r(`br`,null,null,-1),o("\n    Override `--w-base-font-size` and `--w-base-increment` on `:root` if needed.\n\n  .green-light4--bg.mt8.pa3.\n    This green container has a `mt8` class which results in a top margin of `calc(8 * var(--w-base-increment))` (32px with defaults).",-1)]]),html:t(()=>[...d[26]||=[o('<div class="orange-light4--bg pa12">\n  <div class="yellow-light5--bg pa3">\n    The orange container has a `pa12` class which results in a padding of `calc(12 * var(--w-base-increment))` (48px with defaults).\n    Override `--w-base-font-size` and `--w-base-increment` on `:root` if needed.\n  </div>\n\n  <div class="green-light4--bg mt8 pa3">\n    This green container has an `mt8` class which results in a top margin of `calc(8 * var(--w-base-increment))` (32px with defaults).\n  </div>\n</div>\n',-1)]]),default:t(()=>[r(`div`,l,[r(`div`,u,[d[3]||=o(`The orange container has a `,-1),d[4]||=r(`span`,{class:`code inherit`},`pa12`,-1),d[5]||=o(` class which results in a padding of
`,-1),d[6]||=r(`code`,null,`calc(12 * var(--w-base-increment))`,-1),d[7]||=o(` (`,-1),d[8]||=r(`code`,null,`48px`,-1),d[9]||=o(` with defaults).`,-1),d[10]||=r(`br`,null,null,-1),d[11]||=o(`
The default `,-1),d[12]||=r(`code`,null,`--w-base-font-size`,-1),d[13]||=o(` is `,-1),d[14]||=r(`code`,null,`14px`,-1),d[15]||=o(`; override `,-1),d[16]||=r(`code`,null,`--w-base-font-size`,-1),d[17]||=o(` and
`,-1),d[18]||=r(`code`,null,`--w-base-increment`,-1),d[19]||=o(` on `,-1),d[20]||=r(`code`,null,`:root`,-1),d[21]||=o(` if needed. Read on in the
`,-1),a(p,{to:`customization`},{default:t(()=>[...d[2]||=[o(`customization`,-1)]]),_:1}),d[22]||=o(` page.`,-1),d[23]||=r(`br`,null,null,-1)]),d[24]||=r(`div`,{class:`green-light4--bg mt8 pa3`},[o(`This green container has a `),r(`span`,{class:`code inherit`},`mt8`),o(` class which results in a top margin of
`),r(`code`,null,`calc(8 * var(--w-base-increment))`),o(` (`),r(`code`,null,`32px`),o(` with defaults).`)],-1)])]),_:1}),a(f,{h3:``},{default:t(()=>[...d[27]||=[o(`Negative margin`,-1)]]),_:1}),d[37]||=r(`p`,null,[o(`Sometimes you may need negative margins, Wave UI also provides 12 negative increments for this
purpose.`),r(`br`),o(`
The syntax for it is `),r(`code`,null,`m[side]-[number]`),o(` with a minus for negative - more like the famous
Emmet plugin that came along with Sublime Text!`),r(`br`),o(`
In this example, the green container is moved up whereas its top should touch the bottom of the
orange container.`)],-1),a(m,null,{pug:t(()=>[...d[28]||=[o(".orange-light4--bg.pa8\n.green-light4--bg.mt-8.mx8.pa3.\n  This green container has a `mt-8` class which results in a negative top margin of `calc(-8 * var(--w-base-increment))` (-32px with defaults).",-1)]]),html:t(()=>[...d[29]||=[o(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mt-8 mx8 pa3">
    This green container has a \`mt-8\` class which results in a negative top margin of \`calc(-8 * var(--w-base-increment))\` (-32px with defaults).
  </div>
</div>
`,-1)]]),default:t(()=>[d[30]||=r(`div`,{class:`orange-light4--bg pa8`},null,-1),d[31]||=r(`div`,{class:`green-light4--bg mt-8 mx8 pa3 grey-dark5`},[o(`This green container has a `),r(`span`,{class:`code inherit`},`mt-8`),o(` class which results in a negative top margin of
`),r(`code`,null,`calc(-8 * var(--w-base-increment))`),o(` (`),r(`code`,null,`-32px`),o(` with defaults).`)],-1)]),_:1}),a(f,{h3:``},{default:t(()=>[...d[32]||=[o(`Margin auto`,-1)]]),_:1}),d[38]||=r(`p`,null,[o(`Last but not least, margin: auto is also possible with the `),r(`code`,null,`a`),o(` modifier.`),r(`br`),o(`
The syntax for it is `),r(`code`,null,`m[side]a`)],-1),a(m,null,{pug:t(()=>[...d[33]||=[o(`.orange-light4--bg.pa8
  .green-light4--bg.mxa.pa3(style="max-width: 240px").
    This green container has a \`mxa\` class which results in a margin auto on the left & right.`,-1)]]),html:t(()=>[...d[34]||=[o(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mxa pa3" style="max-width: 240px">
    This green container has a \`mxa\` class which results in a margin auto on the left & right.
  </div>
</div>`,-1)]]),default:t(()=>[d[35]||=r(`div`,{class:`orange-light4--bg pa8 grey-dark5`},[r(`div`,{class:`green-light4--bg mxa pa3`,style:{"max-width":`240px`}},[o(`This green container has a `),r(`span`,{class:`code inherit`},`mxa`),o(` class which results in a margin auto on the left & right.`)])],-1)]),_:1})])}var f=c({},[[`render`,d]]);export{f as default};