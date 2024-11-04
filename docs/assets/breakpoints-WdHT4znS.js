import{r as i,o as g,g as b,a as l,w as s,b as t,d as n,h as u,t as f,n as y,_ as c}from"./index-CyDhd-Z0.js";const k={class:"title2 mt0"};function w(a,e){const o=i("title-link"),m=i("router-link"),x=i("w-card"),r=i("example"),d=i("ssh-pre"),p=i("alert");return g(),b("main",null,[l(o,{class:"mt4",h1:""},{default:s(()=>e[0]||(e[0]=[t("Breakpoints")])),_:1}),l(o,{h2:""},{default:s(()=>e[1]||(e[1]=[t("What is this for?")])),_:1}),e[37]||(e[37]=n("p",null,[t("If you are not familiar with breakpoints, you should first read about it."),n("br"),t(`
The breakpoints are usually useful when you want to change the layout for a particular viewport width.`),n("br"),t(`
In Wave UI, you can use them in different ways:`)],-1)),n("ul",null,[e[13]||(e[13]=n("li",null,"Access the current breakpoint in JavaScript",-1)),n("li",null,[e[3]||(e[3]=t("Use responsive grids with breakpoint-specific classes. Read more in")),l(m,{class:"ml1",to:"/layout--grid-system"},{default:s(()=>e[2]||(e[2]=[t("Layout > Grid system")])),_:1}),e[4]||(e[4]=t("."))]),n("li",null,[e[6]||(e[6]=t("Use breakpoint-specific layout classes like ")),e[7]||(e[7]=n("code",null,"sm-hide",-1)),e[8]||(e[8]=t(" or ")),e[9]||(e[9]=n("code",null,"lgu-text-center",-1)),e[10]||(e[10]=t(" and many other.")),e[11]||(e[11]=n("br",null,null,-1)),e[12]||(e[12]=t(`
All the layout classes presented in: `)),l(m,{class:"ml1",to:"/layout--flex"},{default:s(()=>e[5]||(e[5]=[t("Layout > Flex")])),_:1})])]),l(o,{h2:""},{default:s(()=>e[14]||(e[14]=[t("Default breakpoints")])),_:1}),e[38]||(e[38]=u('<p class="mt6">By default, 5 breakpoints are set:</p><ul><li class="mb1"><code class="mr2">xs</code><span>from 0 to 600px</span></li><li class="mb1"><code class="mr2">sm</code><span>from 601px to 900px</span></li><li class="mb1"><code class="mr2">md</code><span>from 901px to 1200px</span></li><li class="mb1"><code class="mr2">lg</code><span>from 1201px to 1700px</span></li><li class="mb1"><code class="mr2">xl</code><span>from 1701px and more</span></li></ul>',2)),l(o,{h2:"",slug:"the-wave-ui-breakpoint-object"},{default:s(()=>e[15]||(e[15]=[t("The "),n("code",null,"$waveui.breakpoint",-1),t(" object")])),_:1}),e[39]||(e[39]=u(`<p class="mt4">You can access the current breakpoint from anywhere using
<code>$waveui.breakpoint.name</code>, or one of these quick booleans from
the same <code>$waveui.breakpoint</code> object:</p><ul><li class="mb1"><code>xs</code></li><li class="mb1"><code>sm</code></li><li class="mb1"><code>md</code></li><li class="mb1"><code>lg</code></li><li class="mb1"><code>xl</code></li></ul>`,2)),l(r,null,{pug:s(()=>e[18]||(e[18]=[t(`w-card.blue-light5--bg
  div.title2
    code.a ccc
  em.grey.mt1 Resizing your browser will update the current breakpoint.`)])),html:s(()=>e[19]||(e[19]=[t(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+f("{{ $waveui.breakpoint.name }}")+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`)])),default:s(()=>[l(x,{class:y({"blue-light5--bg":!a.$store.state.darkMode})},{default:s(()=>[n("div",k,[e[16]||(e[16]=t("Current breakpoint: ")),n("code",null,f(a.$waveui.breakpoint.name),1)]),e[17]||(e[17]=n("em",{class:"grey mt1"},"Resizing your browser will update the current breakpoint.",-1))]),_:1},8,["class"])]),_:1}),l(o,{h2:""},{default:s(()=>e[20]||(e[20]=[t("breakpoint-specific layout classes")])),_:1}),e[40]||(e[40]=n("p",null,"All the following CSS classes can be used complementarily on the same DOM node for different breakpoints.",-1)),l(d,{language:"css",dark:a.$store.state.darkMode},{default:s(()=>e[21]||(e[21]=[t(`.show {display: block;}
.hide {display: none;}

.d-flex {display: flex;}
.d-iflex {display: inline-flex;}
.d-block {display: block;}
.d-iblock {display: inline-block;}

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
`)])),_:1},8,["dark"]),e[41]||(e[41]=u(`<p class="mt6">To use them on a particular breakpoint, the syntax is: <code>.[breakpoint][extend]-[class]</code>, with:</p><ul><li><strong class="code">[breakpoint]</strong> one of: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.</li><li><strong class="code">[extend]</strong> one of <code>u</code> (and up), <code>d</code> (and down) and
<strong>no character</strong> to target only this breakpoint.</li><li><strong class="code">[class]</strong> one of the above CSS class name.</li></ul>`,2)),l(p,{info:""},{default:s(()=>e[22]||(e[22]=[t("Note that "),n("code",null,".xsd-[class]",-1),t(" and "),n("code",null,".xlu-[class]",-1),t(" don't exist since they are the same as "),n("code",null,".xs-[class]",-1),t(" and "),n("code",null,".xl-[class]",-1),t(".")])),_:1}),e[42]||(e[42]=n("p",{class:"mt6"},[t("In these two examples, resize your browser to less than 900px (default "),n("code",null,"md"),t(`) to see see the
layout changed.`)],-1)),l(r,null,{pug:s(()=>e[23]||(e[23]=[t(`div.text-left.smd-text-center Some text on the left.
div.text-center.smd-hide Some text in the center.
div.text-right.smd-text-center Some text on the right.`)])),html:s(()=>e[24]||(e[24]=[t(`<div class="text-left smd-text-center">Some text on the left.</div>
<div class="text-center smd-hide">Some text in the center.</div>
<div class="text-right smd-text-center">Some text on the right.</div>`)])),default:s(()=>[e[25]||(e[25]=n("div",{class:"text-left smd-text-center"},"Some text on the left.",-1)),e[26]||(e[26]=n("div",{class:"text-center smd-hide"},"Some text in the center.",-1)),e[27]||(e[27]=n("div",{class:"text-right smd-text-center"},"Some text on the right.",-1))]),_:1}),l(r,null,{pug:s(()=>e[28]||(e[28]=[t(`.w-flex.justify-space-between.smd-column
  span Some text on the left.
  span Some text in the center.
  span Some text on the right.`)])),html:s(()=>e[29]||(e[29]=[t(`<div class="w-flex justify-space-between smd-column">
  <span>Some text on the left.</span>
  <span>Some text in the center.</span>
  <span>Some text on the right.</span>
</div>
`)])),default:s(()=>[e[30]||(e[30]=n("div",{class:"w-flex justify-space-between smd-column"},[n("span",null,"Some text on the left."),n("span",null,"Some text in the center."),n("span",null,"Some text on the right.")],-1))]),_:1}),l(p,{tip:""},{default:s(()=>[e[32]||(e[32]=t(`If you'd rather not have these CSS layout classes, you can disable them via the
`)),e[33]||(e[33]=n("code",null,"breakpointLayoutClasses",-1)),e[34]||(e[34]=t(" option in the global configuration.")),l(d,{class:"mb0",language:"js",dark:a.$store.state.darkMode},{default:s(()=>e[31]||(e[31]=[t(`app.use(WaveUI, {
  css: {
    breakpointLayoutClasses: false
  }
})
`)])),_:1},8,["dark"])]),_:1}),l(o,{h2:""},{default:s(()=>e[35]||(e[35]=[t("Setting custom breakpoints")])),_:1}),e[43]||(e[43]=n("p",{class:"mt4"},"You can override the default breakpoints values with:",-1)),l(d,{language:"js",dark:a.$store.state.darkMode},{default:s(()=>e[36]||(e[36]=[t(`app.use(WaveUI, {
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700
    // Xl doesn't need to be overridden:
    // it always starts from lg & goes to infinity.
  }
})`)])),_:1},8,["dark"])])}const v={},h=c(v,[["render",w]]);export{h as default};
