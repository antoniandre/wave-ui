import{H as e,N as t,c as n,d as r,g as i,h as a,ht as o,k as s,m as c,vt as l}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as u}from"./_plugin-vue_export-helper-S3RvzygF.js";var d={class:`title2 mt0`};function f(u,f){let p=t(`title-link`),m=t(`router-link`),h=t(`w-card`),g=t(`example`),_=t(`ssh-pre`),v=t(`alert`);return s(),r(`main`,null,[i(p,{class:`mt4`,h1:``},{default:e(()=>[...f[0]||=[a(`Breakpoints`,-1)]]),_:1}),i(p,{h2:``},{default:e(()=>[...f[1]||=[a(`What is this for?`,-1)]]),_:1}),f[37]||=n(`p`,null,[a(`If you are not familiar with breakpoints, you should first read about it.`),n(`br`),a(`
The breakpoints are usually useful when you want to change the layout for a particular viewport width.`),n(`br`),a(`
In Wave UI, you can use them in different ways:`)],-1),n(`ul`,null,[f[13]||=n(`li`,null,`Access the current breakpoint in JavaScript`,-1),n(`li`,null,[f[3]||=a(`Use responsive grids with breakpoint-specific classes. Read more in`,-1),i(m,{class:`ml1`,to:`/layout--grid-system`},{default:e(()=>[...f[2]||=[a(`Layout > Grid system`,-1)]]),_:1}),f[4]||=a(`.`,-1)]),n(`li`,null,[f[6]||=a(`Use breakpoint-specific layout classes like `,-1),f[7]||=n(`code`,null,`sm-hide`,-1),f[8]||=a(` or `,-1),f[9]||=n(`code`,null,`lgu-text-center`,-1),f[10]||=a(` and many other.`,-1),f[11]||=n(`br`,null,null,-1),f[12]||=a(`
All the layout classes presented in: `,-1),i(m,{class:`ml1`,to:`/layout--flex`},{default:e(()=>[...f[5]||=[a(`Layout > Flex`,-1)]]),_:1})])]),i(p,{h2:``},{default:e(()=>[...f[14]||=[a(`Default breakpoints`,-1)]]),_:1}),f[38]||=c(`<p class="mt6">By default, 5 breakpoints are set:</p><ul><li class="mb1"><code class="mr2">xs</code><span>from 0 to 600px</span></li><li class="mb1"><code class="mr2">sm</code><span>from 601px to 900px</span></li><li class="mb1"><code class="mr2">md</code><span>from 901px to 1200px</span></li><li class="mb1"><code class="mr2">lg</code><span>from 1201px to 1700px</span></li><li class="mb1"><code class="mr2">xl</code><span>from 1701px and more</span></li></ul>`,2),i(p,{h2:``,slug:`the-wave-ui-breakpoint-object`},{default:e(()=>[...f[15]||=[a(`The `,-1),n(`code`,null,`$waveui.breakpoint`,-1),a(` object`,-1)]]),_:1}),f[39]||=c(`<p class="mt4">You can access the current breakpoint from anywhere using
<code>$waveui.breakpoint.name</code>, or one of these quick booleans from
the same <code>$waveui.breakpoint</code> object:</p><ul><li class="mb1"><code>xs</code></li><li class="mb1"><code>sm</code></li><li class="mb1"><code>md</code></li><li class="mb1"><code>lg</code></li><li class="mb1"><code>xl</code></li></ul>`,2),i(g,null,{pug:e(()=>[...f[18]||=[a(`w-card.blue-light5--bg
  div.title2
    code.a ccc
  em.grey.mt1 Resizing your browser will update the current breakpoint.`,-1)]]),html:e(()=>[...f[19]||=[a(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+l(`{{ $waveui.breakpoint.name }}`)+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`,-1)]]),default:e(()=>[i(h,{class:o({"blue-light5--bg":!u.$store.state.darkMode})},{default:e(()=>[n(`div`,d,[f[16]||=a(`Current breakpoint: `,-1),n(`code`,null,l(u.$waveui.breakpoint.name),1)]),f[17]||=n(`em`,{class:`grey mt1`},`Resizing your browser will update the current breakpoint.`,-1)]),_:1},8,[`class`])]),_:1}),i(p,{h2:``},{default:e(()=>[...f[20]||=[a(`breakpoint-specific layout classes`,-1)]]),_:1}),f[40]||=n(`p`,null,`All the following CSS classes can be used complementarily on the same DOM node for different breakpoints.`,-1),i(_,{language:`css`,dark:u.$store.state.darkMode},{default:e(()=>[...f[21]||=[a(`.show {display: block;}
.hide {display: none;}

.d-flex {display: flex;}
.d-iflex {display: inline-flex;}
.d-block {display: block;}
.d-iblock {display: inline-block;}

.ovh {overflow: hidden;}
.ovv {overflow: visible;}
.ova {overflow: auto;}

.relative {position: relative;}
.absolute {position: absolute;}
.fixed {position: fixed;}
.sticky {position: sticky;}

.text-left {text-align: left;}
.text-center {text-align: center;}
.text-right {text-align: right;}

.row {flex-direction: row;}
.column {flex-direction: column;}
.column-reverse {flex-direction: column-reverse;}
.grow {flex-grow: 1;flex-basis: auto;}
.no-grow {flex-grow: 0;}
.shrink {flex-shrink: 1;margin-left: auto;margin-right: auto;}
.no-shrink {flex-shrink: 0;}
.fill-width {width: 100%;}
.fill-height {height: 100%;}
.h-auto {height: auto;}
.h-screen {height: 100vh;}
.basis-zero {flex-basis: 0;}

.align-start {align-items: flex-start;}
.align-center {align-items: center;}
.align-end {align-items: flex-end;}
.align-self-start {align-self: flex-start;}
.align-self-center {align-self: center;}
.align-self-end {align-self: flex-end;}
.align-self-stretch {align-self: stretch;}
.justify-start {justify-content: flex-start;}
.justify-center {justify-content: center;}
.justify-end {justify-content: flex-end;}
.justify-space-between {justify-content: space-between;}
.justify-space-around {justify-content: space-around;}
.justify-space-evenly {justify-content: space-evenly;}
`,-1)]]),_:1},8,[`dark`]),f[41]||=c(`<p class="mt6">To use them on a particular breakpoint, the syntax is: <code>.[breakpoint][extend]-[class]</code>, with:</p><ul><li><strong class="code">[breakpoint]</strong> one of: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.</li><li><strong class="code">[extend]</strong> one of <code>u</code> (and up), <code>d</code> (and down) and
<strong>no character</strong> to target only this breakpoint.</li><li><strong class="code">[class]</strong> one of the above CSS class name.</li></ul>`,2),i(v,{info:``},{default:e(()=>[...f[22]||=[a(`Note that `,-1),n(`code`,null,`.xsd-[class]`,-1),a(` and `,-1),n(`code`,null,`.xlu-[class]`,-1),a(` don't exist since they are the same as `,-1),n(`code`,null,`.xs-[class]`,-1),a(` and `,-1),n(`code`,null,`.xl-[class]`,-1),a(`.`,-1)]]),_:1}),f[42]||=n(`p`,{class:`mt6`},[a(`In these two examples, resize your browser to less than 900px (default `),n(`code`,null,`md`),a(`) to see see the
layout changed.`)],-1),i(g,null,{pug:e(()=>[...f[23]||=[a(`div.text-left.smd-text-center Some text on the left.
div.text-center.smd-hide Some text in the center.
div.text-right.smd-text-center Some text on the right.`,-1)]]),html:e(()=>[...f[24]||=[a(`<div class="text-left smd-text-center">Some text on the left.</div>
<div class="text-center smd-hide">Some text in the center.</div>
<div class="text-right smd-text-center">Some text on the right.</div>`,-1)]]),default:e(()=>[f[25]||=n(`div`,{class:`text-left smd-text-center`},`Some text on the left.`,-1),f[26]||=n(`div`,{class:`text-center smd-hide`},`Some text in the center.`,-1),f[27]||=n(`div`,{class:`text-right smd-text-center`},`Some text on the right.`,-1)]),_:1}),i(g,null,{pug:e(()=>[...f[28]||=[a(`.w-flex.justify-space-between.smd-column
  span Some text on the left.
  span Some text in the center.
  span Some text on the right.`,-1)]]),html:e(()=>[...f[29]||=[a(`<div class="w-flex justify-space-between smd-column">
  <span>Some text on the left.</span>
  <span>Some text in the center.</span>
  <span>Some text on the right.</span>
</div>
`,-1)]]),default:e(()=>[f[30]||=n(`div`,{class:`w-flex justify-space-between smd-column`},[n(`span`,null,`Some text on the left.`),n(`span`,null,`Some text in the center.`),n(`span`,null,`Some text on the right.`)],-1)]),_:1}),i(v,{tip:``},{default:e(()=>[f[32]||=a(`If you'd rather not have these CSS layout classes, you can disable them via the
`,-1),f[33]||=n(`code`,null,`breakpointLayoutClasses`,-1),f[34]||=a(` option in the global configuration.`,-1),i(_,{class:`mb0`,language:`js`,dark:u.$store.state.darkMode},{default:e(()=>[...f[31]||=[a(`app.use(WaveUI, {
  css: {
    breakpointLayoutClasses: false
  }
})
`,-1)]]),_:1},8,[`dark`])]),_:1}),i(p,{h2:``},{default:e(()=>[...f[35]||=[a(`Setting custom breakpoints`,-1)]]),_:1}),f[43]||=n(`p`,{class:`mt4`},`You can override the default breakpoints values with:`,-1),i(_,{language:`js`,dark:u.$store.state.darkMode},{default:e(()=>[...f[36]||=[a(`app.use(WaveUI, {
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700
    // Xl doesn't need to be overridden:
    // it always starts from lg & goes to infinity.
  }
})`,-1)]]),_:1},8,[`dark`])])}var p=u({},[[`render`,f]]);export{p as default};