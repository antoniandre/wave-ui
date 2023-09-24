import{r as o,o as r,g as c,a as s,w as a,b as e,d as n,h,_ as d}from"./index.bf2cfd71.js";const g=h(`<p>Margins and paddings are incrementable from 0 to 12 using this syntax: <code>ma[number]</code>,
<code>pa[number]</code> where number is a number in this interval <span class="code">[0, 12]</span> for paddings
and <span class="code">[-12, 12]</span> for margins.<br>
You can also set a space on a single side with <code>l</code>, <code>r</code>, <code>t</code>,
<code>b</code> for left, right, top, bottom like so: <code>m[side][number]</code>,
<code>p[side][number]</code>.<br><br> <code>x</code> and <code>y</code> will set both left and right or top and bottom together:
<code>mx[number]</code>, <code>px[number]</code>. And <code>a</code> is for all the sides.
</p>`,1),p={class:"orange-light4--bg pa12 grey-dark5"},m={class:"yellow-light5--bg pa3"},u=n("span",{class:"code inherit"},"pa12",-1),x=n("br",null,null,-1),b=n("span",{class:"code inherit"},"pax",-1),_=n("span",{class:"code inherit"},"max",-1),f=n("br",null,null,-1),v=n("div",{class:"green-light4--bg mt8 pa3"},[e("This green container has a "),n("span",{class:"code inherit"},"mt8"),e(` class which results in a top margin of: 8 x 4 x
base-font-size pixels.`)],-1),w=n("br",null,null,-1),y=n("p",null,[e(`Sometimes you may need negative margins, Wave UI also provides 12 negative increments for this
purpose.`),n("br"),e(`
The syntax for it is `),n("code",null,"m[side]-[number]"),e(` with a minus for negative - more like the famous
Emmet plugin that came along with Sublime Text!`),n("br"),e(`
In this example, the green container is moved up whereas its top should touch the bottom of the
orange container.`)],-1),T=n("div",{class:"orange-light4--bg pa8"},null,-1),S=n("div",{class:"green-light4--bg mt-8 mx8 pa3 grey-dark5"},[e("This green container has a "),n("span",{class:"code inherit"},"mt-8"),e(` class which results in a negative top margin of: -8 x 4 x
base-font-size pixels.`)],-1),z=n("p",null,[e("Last but not least, margin: auto is also possible with the "),n("code",null,"a"),e(" modifier."),n("br"),e(`
The syntax for it is `),n("code",null,"m[side]a")],-1),k=n("div",{class:"orange-light4--bg pa8 grey-dark5"},[n("div",{class:"green-light4--bg mxa pa3",style:{"max-width":"240px"}},[e("This green container has a "),n("span",{class:"code inherit"},"mxa"),e(" class which results in a margin auto on the left & right.")])],-1);function C(V,B){const t=o("title-link"),l=o("router-link"),i=o("example");return r(),c("main",null,[s(t,{class:"mt4",h1:""},{default:a(()=>[e("Spaces")]),_:1}),s(t,{h2:""},{default:a(()=>[e("Content spacing")]),_:1}),g,s(i,null,{pug:a(()=>[e(`.orange-light4--bg.pa12
  .yellow-light5--bg.pa3.
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x
    base-font-size pixels.`),w,e("\n    The default base font size is 14px but it's easy to override it in your SCSS, as well as the\n    increment for `pax` and `max` classes.\n\n  .green-light4--bg.mt8.pa3.\n    This green container has a `mt8` class which results in a top margin of: 8 x 4 x\n    base-font-size pixels.")]),html:a(()=>[e(`<div class="orange-light4--bg pa12">
  <div class="yellow-light5--bg pa3">
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x base-font-size pixels.
    The default base font size is 14px but it's easy to override it in your SCSS, as well as the
    increment for \`pax\` and \`max\` classes.
  </div>

  <div class="green-light4--bg mt8 pa3">
    This green container has an \`mt8\` class which results in a top margin of: 8 x 4 x base-font-size pixels.
  </div>
</div>
`)]),default:a(()=>[n("div",p,[n("div",m,[e("The orange container has a "),u,e(` class which results in a padding of: 12 x 4 x
base-font-size pixels.`),x,e(`
The default base font size is 14px but it's easy to override it in your SCSS, as well as the
increment for `),b,e(" and "),_,e(` classes. Read on in the
`),s(l,{to:"customization"},{default:a(()=>[e("customization")]),_:1}),e(" page."),f]),v])]),_:1}),s(t,{h3:""},{default:a(()=>[e("Negative margin")]),_:1}),y,s(i,null,{pug:a(()=>[e(`.orange-light4--bg.pa8
.green-light4--bg.mt-8.mx8.pa3.
  This green container has a \`mt-8\` class which results in a negative top margin of: -8 x 4 x
  base-font-size pixels.`)]),html:a(()=>[e(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mt-8 mx8 pa3">
    This green container has a \`mt-8\` class which results in a negative top margin of: 8 x 4 x
    base-font-size pixels.
  </div>
</div>
`)]),default:a(()=>[T,S]),_:1}),s(t,{h3:""},{default:a(()=>[e("Margin auto")]),_:1}),z,s(i,null,{pug:a(()=>[e('.orange-light4--bg.pa8\n  .green-light4--bg.mxa.pa3(style="max-width: 240px").\n    This green container has a `mxa` class which results in a margin auto on the left & right.')]),html:a(()=>[e(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mxa pa3" style="max-width: 240px">
    This green container has a \`mxa\` class which results in a margin auto on the left & right.
  </div>
</div>`)]),default:a(()=>[k]),_:1})])}const N={},I=d(N,[["render",C]]);export{I as default};
