import{N as e,W as t,_t as n,bt as r,c as i,d as a,g as o,h as s,k as c,m as l}from"./runtime-core.esm-bundler-inBY9EW4.js";import{t as u}from"./_plugin-vue_export-helper-B80Cc4Ui.js";var d={class:`title2 mt0`};function f(u,f){let p=e(`title-link`),m=e(`router-link`),h=e(`w-card`),g=e(`example`),_=e(`ssh-pre`),v=e(`alert`);return c(),a(`main`,null,[o(p,{class:`mt4`,h1:``},{default:t(()=>[...f[0]||=[s(`Breakpoints`,-1)]]),_:1}),o(p,{h2:``},{default:t(()=>[...f[1]||=[s(`What is this for?`,-1)]]),_:1}),f[37]||=i(`p`,null,[s(`If you are not familiar with breakpoints, you should first read about it.`),i(`br`),s(`
The breakpoints are usually useful when you want to change the layout for a particular viewport width.`),i(`br`),s(`
In Wave UI, you can use them in different ways:`)],-1),i(`ul`,null,[f[13]||=i(`li`,null,`Access the current breakpoint in JavaScript`,-1),i(`li`,null,[f[3]||=s(`Use responsive grids with breakpoint-specific classes. Read more in`,-1),o(m,{class:`ml1`,to:`/layout--grid-system`},{default:t(()=>[...f[2]||=[s(`Layout > Grid system`,-1)]]),_:1}),f[4]||=s(`.`,-1)]),i(`li`,null,[f[6]||=s(`Use breakpoint-specific layout classes like `,-1),f[7]||=i(`code`,null,`sm-hide`,-1),f[8]||=s(` or `,-1),f[9]||=i(`code`,null,`lgu-text-center`,-1),f[10]||=s(` and many other.`,-1),f[11]||=i(`br`,null,null,-1),f[12]||=s(`
All the layout classes presented in: `,-1),o(m,{class:`ml1`,to:`/layout--flex`},{default:t(()=>[...f[5]||=[s(`Layout > Flex`,-1)]]),_:1})])]),o(p,{h2:``},{default:t(()=>[...f[14]||=[s(`Default breakpoints`,-1)]]),_:1}),f[38]||=l(`<p class="mt6">By default, 5 breakpoints are set:</p><ul><li class="mb1"><code class="mr2">xs</code><span>from 0 to 600px</span></li><li class="mb1"><code class="mr2">sm</code><span>from 601px to 900px</span></li><li class="mb1"><code class="mr2">md</code><span>from 901px to 1200px</span></li><li class="mb1"><code class="mr2">lg</code><span>from 1201px to 1700px</span></li><li class="mb1"><code class="mr2">xl</code><span>from 1701px and more</span></li></ul>`,2),o(p,{h2:``,slug:`the-wave-ui-breakpoint-object`},{default:t(()=>[...f[15]||=[s(`The `,-1),i(`code`,null,`$waveui.breakpoint`,-1),s(` object`,-1)]]),_:1}),f[39]||=l(`<p class="mt4">You can access the current breakpoint from anywhere using
<code>$waveui.breakpoint.name</code>, or one of these quick booleans from
the same <code>$waveui.breakpoint</code> object:</p><ul><li class="mb1"><code>xs</code></li><li class="mb1"><code>sm</code></li><li class="mb1"><code>md</code></li><li class="mb1"><code>lg</code></li><li class="mb1"><code>xl</code></li></ul>`,2),o(g,null,{pug:t(()=>[...f[18]||=[s(`w-card.blue-light5--bg
  div.title2
    code.a ccc
  em.grey.mt1 Resizing your browser will update the current breakpoint.`,-1)]]),html:t(()=>[...f[19]||=[s(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+r(`{{ $waveui.breakpoint.name }}`)+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`,-1)]]),default:t(()=>[o(h,{class:n({"blue-light5--bg":!u.$store.state.darkMode})},{default:t(()=>[i(`div`,d,[f[16]||=s(`Current breakpoint: `,-1),i(`code`,null,r(u.$waveui.breakpoint.name),1)]),f[17]||=i(`em`,{class:`grey mt1`},`Resizing your browser will update the current breakpoint.`,-1)]),_:1},8,[`class`])]),_:1}),o(p,{h2:``},{default:t(()=>[...f[20]||=[s(`breakpoint-specific layout classes`,-1)]]),_:1}),f[40]||=i(`p`,null,`All the following CSS classes can be used complementarily on the same DOM node for different breakpoints.`,-1),o(_,{language:`css`,dark:u.$store.state.darkMode},{default:t(()=>[...f[21]||=[s(`.show {display: block;}
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
`,-1)]]),_:1},8,[`dark`]),f[41]||=l(`<p class="mt6">To use them on a particular breakpoint, the syntax is: <code>.[breakpoint][extend]-[class]</code>, with:</p><ul><li><strong class="code">[breakpoint]</strong> one of: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.</li><li><strong class="code">[extend]</strong> one of <code>u</code> (and up), <code>d</code> (and down) and
<strong>no character</strong> to target only this breakpoint.</li><li><strong class="code">[class]</strong> one of the above CSS class name.</li></ul>`,2),o(v,{info:``},{default:t(()=>[...f[22]||=[s(`Note that `,-1),i(`code`,null,`.xsd-[class]`,-1),s(` and `,-1),i(`code`,null,`.xlu-[class]`,-1),s(` don't exist since they are the same as `,-1),i(`code`,null,`.xs-[class]`,-1),s(` and `,-1),i(`code`,null,`.xl-[class]`,-1),s(`.`,-1)]]),_:1}),f[42]||=i(`p`,{class:`mt6`},[s(`In these two examples, resize your browser to less than 900px (default `),i(`code`,null,`md`),s(`) to see see the
layout changed.`)],-1),o(g,null,{pug:t(()=>[...f[23]||=[s(`div.text-left.smd-text-center Some text on the left.
div.text-center.smd-hide Some text in the center.
div.text-right.smd-text-center Some text on the right.`,-1)]]),html:t(()=>[...f[24]||=[s(`<div class="text-left smd-text-center">Some text on the left.</div>
<div class="text-center smd-hide">Some text in the center.</div>
<div class="text-right smd-text-center">Some text on the right.</div>`,-1)]]),default:t(()=>[f[25]||=i(`div`,{class:`text-left smd-text-center`},`Some text on the left.`,-1),f[26]||=i(`div`,{class:`text-center smd-hide`},`Some text in the center.`,-1),f[27]||=i(`div`,{class:`text-right smd-text-center`},`Some text on the right.`,-1)]),_:1}),o(g,null,{pug:t(()=>[...f[28]||=[s(`.w-flex.justify-space-between.smd-column
  span Some text on the left.
  span Some text in the center.
  span Some text on the right.`,-1)]]),html:t(()=>[...f[29]||=[s(`<div class="w-flex justify-space-between smd-column">
  <span>Some text on the left.</span>
  <span>Some text in the center.</span>
  <span>Some text on the right.</span>
</div>
`,-1)]]),default:t(()=>[f[30]||=i(`div`,{class:`w-flex justify-space-between smd-column`},[i(`span`,null,`Some text on the left.`),i(`span`,null,`Some text in the center.`),i(`span`,null,`Some text on the right.`)],-1)]),_:1}),o(v,{tip:``},{default:t(()=>[f[32]||=s(`If you'd rather not have these CSS layout classes, you can disable them via the
`,-1),f[33]||=i(`code`,null,`breakpointLayoutClasses`,-1),f[34]||=s(` option in the global configuration.`,-1),o(_,{class:`mb0`,language:`js`,dark:u.$store.state.darkMode},{default:t(()=>[...f[31]||=[s(`app.use(WaveUI, {
  css: {
    breakpointLayoutClasses: false
  }
})
`,-1)]]),_:1},8,[`dark`])]),_:1}),o(p,{h2:``},{default:t(()=>[...f[35]||=[s(`Setting custom breakpoints`,-1)]]),_:1}),f[43]||=i(`p`,{class:`mt4`},`You can override the default breakpoints values with:`,-1),o(_,{language:`js`,dark:u.$store.state.darkMode},{default:t(()=>[...f[36]||=[s(`app.use(WaveUI, {
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700
    // Xl doesn't need to be overridden:
    // it always starts from lg & goes to infinity.
  }
})`,-1)]]),_:1},8,[`dark`])])}var p=u({},[[`render`,f]]);export{p as default};