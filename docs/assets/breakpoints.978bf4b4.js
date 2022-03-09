import{r as l,o as m,f as p,a as n,w as s,b as t,e,h as c,M as d}from"./vendor.c30f2c6c.js";import{_ as f}from"./index.76d51146.js";const x=e("Breakpoints"),g=e("What is this for?"),b=t("p",null,[e("If you are not familiar with breakpoints, you should first read about it."),t("br"),e(`
The breakpoints are usaully useful when you want to change the layout for a particular viewport width.`),t("br"),e(`
In Wave UI, you can use them in different ways:`)],-1),y=t("li",null,"Access the current breakpoint in JavaScript",-1),w=e("Use responsive grids with breakpoint-specific classes. Read more in"),k=e("Layout > Grid system"),v=e("."),S=e("Use breakpoint-specific layout classes like "),j=t("code",null,"sm-hide",-1),C=e(" or "),I=t("code",null,"lgu-text-center",-1),$=e(" and many other."),z=t("br",null,null,-1),B=e(`
All the layout classes presented in: `),N=e("Layout > Flex"),U=e("Default breakpoints"),L=d('<p class="mt6">By default, 5 breakpoints are set:</p><ul><li class="mb1"><code class="mr2">xs</code><span>from 0 to 600px</span></li><li class="mb1"><code class="mr2">sm</code><span>from 601px to 900px</span></li><li class="mb1"><code class="mr2">md</code><span>from 901px to 1200px</span></li><li class="mb1"><code class="mr2">lg</code><span>from 1201px to 1700px</span></li><li class="mb1"><code class="mr2">xl</code><span>from 1701px and more</span></li></ul>',2),R=e("The "),T=t("code",null,"$waveui.breakpoint",-1),V=e(" object"),W=d(`<p class="mt4">You can access the current breakpoint from anywhere using
<code>this.$waveui.breakpoint.name</code>, or one of these quick booleans from
the same <code>this.$waveui.breakpoint</code> object:</p><ul><li class="mb1"><code>xs</code></li><li class="mb1"><code>sm</code></li><li class="mb1"><code>md</code></li><li class="mb1"><code>lg</code></li><li class="mb1"><code>xl</code></li></ul>`,2),A={class:"title2 mt0"},D=e("Current breakpoint: "),M=t("em",{class:"grey mt1"},"Resizing your browser will update the current breakpoint.",-1),Y=e("breakpoint-specific layout classes"),q=t("p",null,"All the following CSS classes can be used complementarily on the same DOM node for different breakpoints.",-1),E=e(`.show {display: block;}
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
`),F=d(`<p class="mt6">To use them on a particular breakpoint, the syntax is: <code>.[breakpoint][extend]-[class]</code>, with:</p><ul><li><strong class="code">[breakpoint]</strong> one of: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.</li><li><strong class="code">[extend]</strong> one of <code>u</code> (and up), <code>d</code> (and down) and
<strong>no character</strong> to target only this breakpoint.</li><li><strong class="code">[class]</strong> one of the above CSS class name.</li></ul>`,2),G=e("Note that "),J=t("code",null,".xsd-[class]",-1),O=e(" and "),X=t("code",null,".xlu-[class]",-1),H=e(" don't exist since they are the same as "),K=t("code",null,".xs-[class]",-1),P=e(" and "),Q=t("code",null,".xl-[class]",-1),Z=e("."),ee=t("p",{class:"mt6"},[e("In these two examples, resize your browser to less than 900px (default "),t("code",null,"md"),e(`) to see see the
layout changed.`)],-1),te=t("div",{class:"text-left smd-text-center"},"Some text on the left.",-1),se=t("div",{class:"text-center smd-hide"},"Some text in the center.",-1),ne=t("div",{class:"text-right smd-text-center"},"Some text on the right.",-1),oe=e(`.text-left.smd-text-center Some text on the left.
.text-center.smd-hide Some text in the center.
.text-right.smd-text-center Some text on the right.`),le=e(`<div class="text-left smd-text-center">Some text on the left.</div>
<div class="text-center smd-hide">Some text in the center.</div>
<div class="text-right smd-text-center">Some text on the right.</div>`),ie=t("div",{class:"w-flex justify-space-between smd-column"},[t("span",null,"Some text on the left."),t("span",null,"Some text in the center."),t("span",null,"Some text on the right.")],-1),ae=e(`.w-flex.justify-space-between.smd-column
  span Some text on the left.
  span Some text in the center.
  span Some text on the right.`),ce=e(`<div class="w-flex justify-space-between smd-column">
  <span>Some text on the left.</span>
  <span>Some text in the center.</span>
  <span>Some text on the right.</span>
</div>
`),de=e(`If you'd rather not have these CSS layout classes, you can disable them via the
`),re=t("code",null,"breakpointLayoutClasses",-1),he=e(" option in the global configuration."),ue=e(`const waveui = new WaveUI({
  css: {
    breakpointLayoutClasses: false
  }
})
`),_e=e("Setting custom breakpoints"),me=t("p",{class:"mt4"},"You can override the default breakpoints values with:",-1),pe=e(`const waveui = new WaveUI({
  breakpoints: {
    xs: 600,
    sm: 900,
    md: 1200,
    lg: 1700
    // Xl doesn't need to be overridden:
    // it always starts from lg & goes to infinity.
  }
})`);function fe(u,ge){const o=l("title-link"),r=l("router-link"),_=l("w-card"),i=l("example"),a=l("ssh-pre"),h=l("alert");return m(),p("main",null,[n(o,{class:"mt4",h1:""},{default:s(()=>[x]),_:1}),n(o,{h2:""},{default:s(()=>[g]),_:1}),b,t("ul",null,[y,t("li",null,[w,n(r,{class:"ml1",to:"/layout--grid-system"},{default:s(()=>[k]),_:1}),v]),t("li",null,[S,j,C,I,$,z,B,n(r,{class:"ml1",to:"/layout--flex"},{default:s(()=>[N]),_:1})])]),n(o,{h2:""},{default:s(()=>[U]),_:1}),L,n(o,{h2:"",slug:"the-wave-ui-breakpoint-object"},{default:s(()=>[R,T,V]),_:1}),W,n(i,null,{pug:s(()=>[e(`w-card.blue-light5--bg
  .title2
    | Current breakpoint:
    code `+c("{{ $waveui.breakpoint.name }}")+`
  em.grey.mt1 Resizing your browser will update the current breakpoint.`,1)]),html:s(()=>[e(`<w-card class="blue-light5--bg">
  <div class="title2 mt0">
    Current breakpoint:
    <code>`+c("{{ $waveui.breakpoint.name }}")+`</code>
  </div>
  <em class="grey mt1">
    Resizing your browser will update the current breakpoint.
  </em>
</w-card>
`,1)]),default:s(()=>[n(_,{class:"blue-light5--bg"},{default:s(()=>[t("div",A,[D,t("code",null,c(u.$waveui.breakpoint.name),1)]),M]),_:1})]),_:1}),n(o,{h2:""},{default:s(()=>[Y]),_:1}),q,n(a,{language:"css"},{default:s(()=>[E]),_:1}),F,n(h,{info:""},{default:s(()=>[G,J,O,X,H,K,P,Q,Z]),_:1}),ee,n(i,null,{pug:s(()=>[oe]),html:s(()=>[le]),default:s(()=>[te,se,ne]),_:1}),n(i,null,{pug:s(()=>[ae]),html:s(()=>[ce]),default:s(()=>[ie]),_:1}),n(h,{tip:""},{default:s(()=>[de,re,he,n(a,{class:"mb0",language:"js"},{default:s(()=>[ue]),_:1})]),_:1}),n(o,{h2:""},{default:s(()=>[_e]),_:1}),me,n(a,{language:"js"},{default:s(()=>[pe]),_:1})])}const xe={};var we=f(xe,[["render",fe]]);export{we as default};
