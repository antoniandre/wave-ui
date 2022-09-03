import{r as i,o as c,f as r,a as t,w as n,b as s,e,i as h,_ as d}from"./index.7c0b9523.js";const g=e("Spaces"),p=e("Content spacing"),m=h(`<p>Margins and paddings are incrementable from 0 to 12 using this syntax: <code>ma[number]</code>,
<code>pa[number]</code> where number is a number in this interval <span class="code">[0, 12]</span> for paddings
and <span class="code">[-12, 12]</span> for margins.<br>
You can also set a space on a single side with <code>l</code>, <code>r</code>, <code>t</code>,
<code>b</code> for left, right, top, bottom like so: <code>m[side][number]</code>,
<code>p[side][number]</code>.<br><br> <code>x</code> and <code>y</code> will set both left and right or top and bottom together:
<code>mx[number]</code>, <code>px[number]</code>. And <code>a</code> is for all the sides.
</p>`,1),_={class:"orange-light4--bg pa12"},u={class:"yellow-light5--bg pa3"},x=e("The orange container has a "),b=s("span",{class:"code"},"pa12",-1),f=e(` class which results in a padding of: 12 x 4 x
base-font-size pixels.`),v=s("br",null,null,-1),w=e(`
The default base font size is 14px but it's easy to override it in your SCSS, as well as the
increment for `),y=s("span",{class:"code"},"pax",-1),T=e(" and "),z=s("span",{class:"code"},"max",-1),S=e(` classes. Read on in the
`),k=e("customization"),C=e(" page."),N=s("br",null,null,-1),V=s("div",{class:"green-light4--bg mt8 pa3"},[e("This green container has a "),s("span",{class:"code"},"mt8"),e(` class which results in a top margin of: 8 x 4 x
base-font-size pixels.`)],-1),B=e(`.orange-light4--bg.pa12
  .yellow-light5--bg.pa3.
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x
    base-font-size pixels.`),E=s("br",null,null,-1),I=e("\n    The default base font size is 14px but it's easy to override it in your SCSS, as well as the\n    increment for `pax` and `max` classes.\n\n  .green-light4--bg.mt8.pa3.\n    This green container has a `mt8` class which results in a top margin of: 8 x 4 x\n    base-font-size pixels."),M=e(`<div class="orange-light4--bg pa12">
  <div class="yellow-light5--bg pa3">
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x base-font-size pixels.
    The default base font size is 14px but it's easy to override it in your SCSS, as well as the
    increment for \`pax\` and \`max\` classes.
  </div>

  <div class="green-light4--bg mt8 pa3">
    This green container has an \`mt8\` class which results in a top margin of: 8 x 4 x base-font-size pixels.
  </div>
</div>
`),A=e("Negative margin"),L=s("p",null,[e(`Sometimes you may need negative margins, Wave UI also provides 12 negative increments for this
purpose.`),s("br"),e(`
The syntax for it is `),s("code",null,"m[side]-[number]"),e(` with a minus for negative - more like the famous
Emmet plugin that came along with Sublime Text!`),s("br"),e(`
In this example, the green container is moved up whereas its top should touch the bottom of the
orange container.`)],-1),R=s("div",{class:"orange-light4--bg pa8"},null,-1),U=s("div",{class:"green-light4--bg mt-8 mx8 pa3"},[e("This green container has a "),s("span",{class:"code"},"mt-8"),e(` class which results in a negative top margin of: -8 x 4 x
base-font-size pixels.`)],-1),W=e(`.orange-light4--bg.pa8
.green-light4--bg.mt-8.mx8.pa3.
  This green container has a \`mt-8\` class which results in a negative top margin of: -8 x 4 x
  base-font-size pixels.`),Y=e(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mt-8 mx8 pa3">
    This green container has a \`mt-8\` class which results in a negative top margin of: 8 x 4 x
    base-font-size pixels.
  </div>
</div>
`),j=e("Margin auto"),q=s("p",null,[e("Last but not least, margin: auto is also possible with the "),s("code",null,"a"),e(" modifier."),s("br"),e(`
The syntax for it is `),s("code",null,"m[side]a")],-1),D=s("div",{class:"orange-light4--bg pa8"},[s("div",{class:"green-light4--bg mxa pa3",style:{"max-width":"240px"}},[e("This green container has a "),s("span",{class:"code"},"mxa"),e(" class which results in a margin auto on the left & right.")])],-1),F=e('.orange-light4--bg.pa8\n  .green-light4--bg.mxa.pa3(style="max-width: 240px").\n    This green container has a `mxa` class which results in a margin auto on the left & right.'),G=e(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mxa pa3" style="max-width: 240px">
    This green container has a \`mxa\` class which results in a margin auto on the left & right.
  </div>
</div>`);function H(K,O){const a=i("title-link"),l=i("router-link"),o=i("example");return c(),r("main",null,[t(a,{class:"mt4",h1:""},{default:n(()=>[g]),_:1}),t(a,{h2:""},{default:n(()=>[p]),_:1}),m,t(o,null,{pug:n(()=>[B,E,I]),html:n(()=>[M]),default:n(()=>[s("div",_,[s("div",u,[x,b,f,v,w,y,T,z,S,t(l,{to:"customization"},{default:n(()=>[k]),_:1}),C,N]),V])]),_:1}),t(a,{h3:""},{default:n(()=>[A]),_:1}),L,t(o,null,{pug:n(()=>[W]),html:n(()=>[Y]),default:n(()=>[R,U]),_:1}),t(a,{h3:""},{default:n(()=>[j]),_:1}),q,t(o,null,{pug:n(()=>[F]),html:n(()=>[G]),default:n(()=>[D]),_:1})])}const J={};var Q=d(J,[["render",H]]);export{Q as default};
