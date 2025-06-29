import{r as l,g,o as d,a as i,h as p,b as s,w as t,e,_ as m}from"./index-TV7KznOy.js";const u={class:"orange-light4--bg pa12 grey-dark5"},h={class:"yellow-light5--bg pa3"};function x(f,n){const a=l("title-link"),r=l("router-link"),o=l("example");return d(),g("main",null,[i(a,{class:"mt4",h1:""},{default:t(()=>n[0]||(n[0]=[e("Spaces")])),_:1,__:[0]}),i(a,{h2:""},{default:t(()=>n[1]||(n[1]=[e("Content spacing")])),_:1,__:[1]}),n[26]||(n[26]=p(`<p>Margins and paddings are incrementable from 0 to 12 using this syntax: <code>ma[number]</code>,
<code>pa[number]</code> where number is a number in this interval <span class="code">[0, 12]</span> for paddings
and <span class="code">[-12, 12]</span> for margins.<br>
You can also set a space on a single side with <code>l</code>, <code>r</code>, <code>t</code>,
<code>b</code> for left, right, top, bottom like so: <code>m[side][number]</code>,
<code>p[side][number]</code>.<br><br> <code>x</code> and <code>y</code> will set both left and right or top and bottom together:
<code>mx[number]</code>, <code>px[number]</code>. And <code>a</code> is for all the sides.
</p>`,1)),i(o,null,{pug:t(()=>n[15]||(n[15]=[e(`.orange-light4--bg.pa12
  .yellow-light5--bg.pa3.
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x
    base-font-size pixels.`),s("br",null,null,-1),e("\n    The default base font size is 14px but it's easy to override it in your SCSS, as well as the\n    increment for `pax` and `max` classes.\n\n  .green-light4--bg.mt8.pa3.\n    This green container has a `mt8` class which results in a top margin of: 8 x 4 x\n    base-font-size pixels.")])),html:t(()=>n[16]||(n[16]=[e(`<div class="orange-light4--bg pa12">
  <div class="yellow-light5--bg pa3">
    The orange container has a \`pa12\` class which results in a padding of: 12 x 4 x base-font-size pixels.
    The default base font size is 14px but it's easy to override it in your SCSS, as well as the
    increment for \`pax\` and \`max\` classes.
  </div>

  <div class="green-light4--bg mt8 pa3">
    This green container has an \`mt8\` class which results in a top margin of: 8 x 4 x base-font-size pixels.
  </div>
</div>
`)])),default:t(()=>[s("div",u,[s("div",h,[n[3]||(n[3]=e("The orange container has a ")),n[4]||(n[4]=s("span",{class:"code inherit"},"pa12",-1)),n[5]||(n[5]=e(` class which results in a padding of: 12 x 4 x
base-font-size pixels.`)),n[6]||(n[6]=s("br",null,null,-1)),n[7]||(n[7]=e(`
The default base font size is 14px but it's easy to override it in your SCSS, as well as the
increment for `)),n[8]||(n[8]=s("span",{class:"code inherit"},"pax",-1)),n[9]||(n[9]=e(" and ")),n[10]||(n[10]=s("span",{class:"code inherit"},"max",-1)),n[11]||(n[11]=e(` classes. Read on in the
`)),i(r,{to:"customization"},{default:t(()=>n[2]||(n[2]=[e("customization")])),_:1,__:[2]}),n[12]||(n[12]=e(" page.")),n[13]||(n[13]=s("br",null,null,-1))]),n[14]||(n[14]=s("div",{class:"green-light4--bg mt8 pa3"},[e("This green container has a "),s("span",{class:"code inherit"},"mt8"),e(` class which results in a top margin of: 8 x 4 x
base-font-size pixels.`)],-1))])]),_:1}),i(a,{h3:""},{default:t(()=>n[17]||(n[17]=[e("Negative margin")])),_:1,__:[17]}),n[27]||(n[27]=s("p",null,[e(`Sometimes you may need negative margins, Wave UI also provides 12 negative increments for this
purpose.`),s("br"),e(`
The syntax for it is `),s("code",null,"m[side]-[number]"),e(` with a minus for negative - more like the famous
Emmet plugin that came along with Sublime Text!`),s("br"),e(`
In this example, the green container is moved up whereas its top should touch the bottom of the
orange container.`)],-1)),i(o,null,{pug:t(()=>n[18]||(n[18]=[e(`.orange-light4--bg.pa8
.green-light4--bg.mt-8.mx8.pa3.
  This green container has a \`mt-8\` class which results in a negative top margin of: -8 x 4 x
  base-font-size pixels.`)])),html:t(()=>n[19]||(n[19]=[e(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mt-8 mx8 pa3">
    This green container has a \`mt-8\` class which results in a negative top margin of: 8 x 4 x
    base-font-size pixels.
  </div>
</div>
`)])),default:t(()=>[n[20]||(n[20]=s("div",{class:"orange-light4--bg pa8"},null,-1)),n[21]||(n[21]=s("div",{class:"green-light4--bg mt-8 mx8 pa3 grey-dark5"},[e("This green container has a "),s("span",{class:"code inherit"},"mt-8"),e(` class which results in a negative top margin of: -8 x 4 x
base-font-size pixels.`)],-1))]),_:1,__:[20,21]}),i(a,{h3:""},{default:t(()=>n[22]||(n[22]=[e("Margin auto")])),_:1,__:[22]}),n[28]||(n[28]=s("p",null,[e("Last but not least, margin: auto is also possible with the "),s("code",null,"a"),e(" modifier."),s("br"),e(`
The syntax for it is `),s("code",null,"m[side]a")],-1)),i(o,null,{pug:t(()=>n[23]||(n[23]=[e('.orange-light4--bg.pa8\n  .green-light4--bg.mxa.pa3(style="max-width: 240px").\n    This green container has a `mxa` class which results in a margin auto on the left & right.')])),html:t(()=>n[24]||(n[24]=[e(`<div class="orange-light4--bg pa8">
  <div class="green-light4--bg mxa pa3" style="max-width: 240px">
    This green container has a \`mxa\` class which results in a margin auto on the left & right.
  </div>
</div>`)])),default:t(()=>[n[25]||(n[25]=s("div",{class:"orange-light4--bg pa8 grey-dark5"},[s("div",{class:"green-light4--bg mxa pa3",style:{"max-width":"240px"}},[e("This green container has a "),s("span",{class:"code inherit"},"mxa"),e(" class which results in a margin auto on the left & right.")])],-1))]),_:1,__:[25]})])}const b={},w=m(b,[["render",x]]);export{w as default};
