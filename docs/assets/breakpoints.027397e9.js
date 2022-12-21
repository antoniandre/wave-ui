import{r as l,o as p,f,a as s,w as n,b as e,d as t,h as c,i as r,_ as x}from"./index.837b2231.js";const g=t("p",null,[e("If you are not familiar with breakpoints, you should first read about it."),t("br"),e(`
The breakpoints are usaully useful when you want to change the layout for a particular viewport width.`),t("br"),e(`
In Wave UI, you can use them in different ways:`)],-1),_=t("li",null,"Access the current breakpoint in JavaScript",-1),b=t("code",null,"sm-hide",-1),y=t("code",null,"lgu-text-center",-1),w=t("br",null,null,-1),k=r('<p class="mt6">By default, 5 breakpoints are set:</p><ul><li class="mb1"><code class="mr2">xs</code><span>from 0 to 600px</span></li><li class="mb1"><code class="mr2">sm</code><span>from 601px to 900px</span></li><li class="mb1"><code class="mr2">md</code><span>from 901px to 1200px</span></li><li class="mb1"><code class="mr2">lg</code><span>from 1201px to 1700px</span></li><li class="mb1"><code class="mr2">xl</code><span>from 1701px and more</span></li></ul>',2),v=t("code",null,"$waveui.breakpoint",-1),S=r(`<p class="mt4">You can access the current breakpoint from anywhere using
<code>this.$waveui.breakpoint.name</code>, or one of these quick booleans from
the same <code>this.$waveui.breakpoint</code> object:</p><ul><li class="mb1"><code>xs</code></li><li class="mb1"><code>sm</code></li><li class="mb1"><code>md</code></li><li class="mb1"><code>lg</code></li><li class="mb1"><code>xl</code></li></ul>`,2),j={class:"title2 mt0"},C=t("em",{class:"grey mt1"},"Resizing your browser will update the current breakpoint.",-1),I=t("p",null,"All the following CSS classes can be used complementarily on the same DOM node for different breakpoints.",-1),$=r(`<p class="mt6">To use them on a particular breakpoint, the syntax is: <code>.[breakpoint][extend]-[class]</code>, with:</p><ul><li><strong class="code">[breakpoint]</strong> one of: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.</li><li><strong class="code">[extend]</strong> one of <code>u</code> (and up), <code>d</code> (and down) and
<strong>no character</strong> to target only this breakpoint.</li><li><strong class="code">[class]</strong> one of the above CSS class name.</li></ul>`,2),z=t("code",null,".xsd-[class]",-1),B=t("code",null,".xlu-[class]",-1),N=t("code",null,".xs-[class]",-1),U=t("code",null,".xl-[class]",-1),L=t("p",{class:"mt6"},[e("In these two examples, resize your browser to less than 900px (default "),t("code",null,"md"),e(`) to see see the
layout changed.`)],-1),R=t("div",{class:"text-left smd-text-center"},"Some text on the left.",-1),T=t("div",{class:"text-center smd-hide"},"Some text in the center.",-1),V=t("div",{class:"text-right smd-text-center"},"Some text on the right.",-1),W=t("div",{class:"w-flex justify-space-between smd-column"},[t("span",null,"Some text on the left."),t("span",null,"Some text in the center."),t("span",null,"Some text on the right.")],-1),A=t("code",null,"breakpointLayoutClasses",-1),D=t("p",{class:"mt4"},"You can override the default breakpoints values with:",-1);function Y(h,E){const o=l("title-link"),d=l("router-link"),m=l("w-card"),a=l("example"),i=l("ssh-pre"),u=l("alert");return p(),f("main",null,[s(o,{class:"mt4",h1:""},{default:n(()=>[e("Breakpoints")]),_:1}),s(o,{h2:""},{default:n(()=>[e("What is this for?")]),_:1}),g,t("ul",null,[_,t("li",null,[e("Use responsive grids with breakpoint-specific classes. Read more in"),s(d,{class:"ml1",to:"/layout--grid-system"},{default:n(()=>[e("Layout > Grid system")]),_:1}),e(".")]),t("li",null,[e("Use breakpoint-specific layout classes like "),b,e(" or "),y,e(" and many other."),w,e(`
All the layout classes presented in: `),s(d,{class:"ml1",to:"/layout--flex"},{default:n(()=>[e("Layout > Flex")]),_:1})])]),s(o,{h2:""},{default:n(()=>[e("Default breakpoints")]),_:1}),k,s(o,{h2:"",slug:"the-wave-ui-breakpoint-object"},{default:n(()=>[e("The "),v,e(" object")]),_:1}),S,s(a,null,{pug:n(()=>[e(`w-card.blue-light5--bg
  .title2
    | Current breakpoint:
    code `+c("{{ $waveui.breakpoint.name }}")+`
  em.grey.mt1 Resizing your browser will update the current breakpoint.`,1)]),html:n(()=>[e(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+c("{{ $waveui.breakpoint.name }}")+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`,1)]),default:n(()=>[s(m,{class:"blue-light5--bg"},{default:n(()=>[t("div",j,[e("Current breakpoint: "),t("code",null,c(h.$waveui.breakpoint.name),1)]),C]),_:1})]),_:1}),s(o,{h2:""},{default:n(()=>[e("breakpoint-specific layout classes")]),_:1}),I,s(i,{language:"css"},{default:n(()=>[e(`.show {display: block;}
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
`)]),_:1}),$,s(u,{info:""},{default:n(()=>[e("Note that "),z,e(" and "),B,e(" don't exist since they are the same as "),N,e(" and "),U,e(".")]),_:1}),L,s(a,null,{pug:n(()=>[e(`.text-left.smd-text-center Some text on the left.
.text-center.smd-hide Some text in the center.
.text-right.smd-text-center Some text on the right.`)]),html:n(()=>[e(`<div class="text-left smd-text-center">Some text on the left.</div>
<div class="text-center smd-hide">Some text in the center.</div>
<div class="text-right smd-text-center">Some text on the right.</div>`)]),default:n(()=>[R,T,V]),_:1}),s(a,null,{pug:n(()=>[e(`.w-flex.justify-space-between.smd-column
  span Some text on the left.
  span Some text in the center.
  span Some text on the right.`)]),html:n(()=>[e(`<div class="w-flex justify-space-between smd-column">
  <span>Some text on the left.</span>
  <span>Some text in the center.</span>
  <span>Some text on the right.</span>
</div>
`)]),default:n(()=>[W]),_:1}),s(u,{tip:""},{default:n(()=>[e(`If you'd rather not have these CSS layout classes, you can disable them via the
`),A,e(" option in the global configuration."),s(i,{class:"mb0",language:"js"},{default:n(()=>[e(`const waveui = new WaveUI({
  css: {
    breakpointLayoutClasses: false
  }
})
`)]),_:1})]),_:1}),s(o,{h2:""},{default:n(()=>[e("Setting custom breakpoints")]),_:1}),D,s(i,{language:"js"},{default:n(()=>[e(`const waveui = new WaveUI({
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700
    // Xl doesn't need to be overridden:
    // it always starts from lg & goes to infinity.
  }
})`)]),_:1})])}const q={},G=x(q,[["render",Y]]);export{G as default};
