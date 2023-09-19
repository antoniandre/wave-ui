import{r as u,o as p,g as q,a as s,w as i,b as e,t as l,d as t,_ as g,A as _}from"./index.bf2cfd71.js";const w=t("br",null,null,-1),x=t("br",null,null,-1),R=t("br",null,null,-1),L=t("br",null,null,-1),k=t("p",null,[e("When the title is simple you can pass it directly as a prop like in this example."),t("br"),e(`
You can also use the `),t("code",null,"title"),e(` slot to pass more complex data and benefit from the Vue template
compilation.`)],-1),y=t("p",null,[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),t("br"),t("br"),e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)],-1),C=t("p",null,[e("Like in most components, you can set a "),t("code",null,"color"),e(" for the text and a "),t("code",null,"bg-color"),e(` for the
background.
`)],-1),$=t("p",null,[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),t("br"),t("br"),e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)],-1),V=t("p",null,[e("The "),t("span",{class:"code"},"w-card"),e(` component will detect if there is a toolbar in the title slot or in the
actions slot and will remove the default padding and border on this slot if there is.`)],-1),I=t("div",{class:"title3 my0"},"Card title",-1),U=t("div",{class:"spacer"},null,-1),F=t("span",{class:"ml2"},"Item 1",-1),S=t("span",{class:"ml2"},"Item 2",-1),A=t("span",{class:"ml2"},"Item 3",-1),P=t("p",null,[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),t("br"),t("br"),e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)],-1),T=t("p",null,[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),t("br"),t("br"),e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)],-1),B=t("p",null,"The actions slot is optional but facilitates the addition of action buttons in a flex layout.",-1),W=t("div",{class:"spacer"},null,-1),j=t("p",null,[e("Providing a card main image is as simple as "),t("code",null,'image="your-image-source"'),e(".")],-1),E=t("div",{class:"spacer"},null,-1),M=t("p",null,[e("It is possible to add some content on top of the image using the "),t("code",null,"image-content"),e(" slot."),t("br"),e(`
Using the `),t("code",null,"image-props"),e(" prop, you can tailor the "),t("strong",{class:"code"},"w-image"),e(` use to your needs,
like adding CSS classes to the content wrapper or change the default image ratio.`)],-1),D=t("div",{class:"title1 pink"},"Wave UI",-1),H=t("div",{class:"spacer"},null,-1);function N(n,d,b,v,h,m){const a=u("title-link"),o=u("w-card"),r=u("example"),f=u("w-toolbar"),c=u("w-button");return p(),q("div",null,[s(a,{h2:""},{default:i(()=>[e("Basic")]),_:1}),s(r,null,{pug:i(()=>[e(`w-card.
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.`),R,L,e(`
  Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
  dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
  aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)]),html:i(()=>[e(`<w-card>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.<br><br>
  Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
  dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
  aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
</w-card>
`)]),default:i(()=>[s(o,null,{default:i(()=>[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),w,x,e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)]),_:1})]),_:1}),s(a,{h2:""},{default:i(()=>[e("Simple card with a title")]),_:1}),k,s(r,null,{pug:i(()=>[e('w-card(title="Card title" title-class="'+l(n.$store.state.darkMode?"primary-dark3--bg":"blue-light5--bg")+`")
  p.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`,1)]),html:i(()=>[e('<w-card title="Card title" title-class="'+l(n.$store.state.darkMode?"primary-dark3--bg":"blue-light5--bg")+`">
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.<br><br>
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
  </p>
</w-card>
`,1)]),default:i(()=>[s(o,{title:"Card title","title-class":n.$store.state.darkMode?"primary-dark3--bg":"blue-light5--bg"},{default:i(()=>[y]),_:1},8,["title-class"])]),_:1}),s(a,{h2:""},{default:i(()=>[e("Colored card with no title and no border")]),_:1}),C,s(r,null,{pug:i(()=>[e(`w-card(bg-color="secondary" no-border)
  p.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)]),html:i(()=>[e(`<w-card bg-color="secondary" no-border>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.<br><br>
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
  </p>
</w-card>
`)]),default:i(()=>[s(o,{"bg-color":"secondary","no-border":""},{default:i(()=>[$]),_:1})]),_:1}),s(a,{h2:""},{default:i(()=>[e("Tiled card with a top toolbar")]),_:1}),V,s(r,null,{pug:i(()=>[e(`w-card(tile)
  template(#title)
    w-toolbar
      .title3.my0 Card title
      .spacer
      span.ml2 Item 1
      span.ml2 Item 2
      span.ml2 Item 3
  p.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)]),html:i(()=>[e(`<w-card tile>
  <template #title>
    <w-toolbar>
      <div class="title3">Card title</div>
      <div class="spacer"></div>
      <span class="ml2">Item 1</span>
      <span class="ml2">Item 2</span>
      <span class="ml2">Item 3</span>
    </w-toolbar>
  </template>

  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.<br><br>
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
  </p>
</w-card>
`)]),default:i(()=>[s(o,{tile:""},{title:i(()=>[s(f,null,{default:i(()=>[I,U,F,S,A]),_:1})]),default:i(()=>[P]),_:1})]),_:1}),s(a,{h2:""},{default:i(()=>[e("Card with shadow")]),_:1}),s(r,null,{pug:i(()=>[e(`w-card(shadow)
  p.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)]),html:i(()=>[e(`<w-card shadow>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.<br><br>
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
  </p>
</w-card>
`)]),default:i(()=>[s(o,{shadow:""},{default:i(()=>[T]),_:1})]),_:1}),s(a,{h2:""},{default:i(()=>[e("Card with actions")]),_:1}),B,s(r,null,{pug:i(()=>[e(`w-card(title="Terms and conditions")
  | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  | odit dolor labore eveniet at vel sequi nostrum.
  template(#actions)
    .spacer
    w-button.mr2(bg-color="error") I disagree
    w-button(bg-color="success") I agree`)]),html:i(()=>[e(`<w-card title="Terms and conditions">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.

  <template #actions>
    <div class="spacer"></div>
    <w-button bg-color="error" class="mr2">I disagree</w-button>
    <w-button bg-color="success">I agree</w-button>
  </template>
</w-card>
`)]),default:i(()=>[s(o,{title:"Terms and conditions"},{actions:i(()=>[W,s(c,{class:"mr2","bg-color":"error"},{default:i(()=>[e("I disagree")]),_:1}),s(c,{"bg-color":"success"},{default:i(()=>[e("I agree")]),_:1})]),default:i(()=>[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`)]),_:1})]),_:1}),s(a,{h2:""},{default:i(()=>[e("Card with image")]),_:1}),j,s(a,{h3:""},{default:i(()=>[e("Standard use")]),_:1}),s(r,null,{pug:i(()=>[e(`w-card(:image="\`\${baseUrl}images/japanese-wave.png\`")
  | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  | odit dolor labore eveniet at vel sequi nostrum.
  template(#actions)
    .spacer
    w-button Read more`)]),html:i(()=>[e(`<w-card :image="\`\${baseUrl}images/japanese-wave.png\`">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.

  <template #actions>
    <div class="spacer"></div>
    <w-button>Read more</w-button>
  </template>
</w-card>`)]),js:i(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+l("process")+".env.BASE_URL`,\n  // or with Vite, `"+l("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`)]),default:i(()=>[s(o,{image:`${n.baseUrl}images/japanese-wave.png`},{actions:i(()=>[E,s(c,null,{default:i(()=>[e("Read more")]),_:1})]),default:i(()=>[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`)]),_:1},8,["image"])]),_:1}),s(a,{h3:""},{default:i(()=>[e("Content on top of the image")]),_:1}),M,s(r,null,{pug:i(()=>[e(`w-card(
  :image="\`\${baseUrl}images/japanese-wave.png\`"
  :image-props="{ contentClass: 'align-start pa1', ratio: 1 / 4 }")
  | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  | odit dolor labore eveniet at vel sequi nostrum.
  template(#image-content)
    .title1.pink Wave UI
  template(#actions)
    .spacer
    w-button Read more`)]),html:i(()=>[e(`<w-card :image="\`\${baseUrl}images/japanese-wave.png\`">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.

  <template #actions>
    <div class="spacer"></div>
    <w-button>Read more</w-button>
  </template>
</w-card>`)]),js:i(()=>[e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+l("process")+".env.BASE_URL`,\n  // or with Vite, `"+l("import")+`.meta.env.BASE_URL\`
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`)]),default:i(()=>[s(o,{image:`${n.baseUrl}images/japanese-wave.png`,"image-props":{contentClass:"align-start pa1",ratio:1/4}},{"image-content":i(()=>[D]),actions:i(()=>[H,s(c,null,{default:i(()=>[e("Read more")]),_:1})]),default:i(()=>[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`)]),_:1},8,["image"])]),_:1})])}const Y={data:()=>({baseUrl:"/wave-ui/"})},z=g(Y,[["render",N]]),G=t("div",{class:"w-divider my12"},null,-1);function J(n,d,b,v,h,m){const a=u("title-link"),o=u("component-api");return p(),q("div",null,[G,s(a,{class:"title1",h2:""},{default:i(()=>[e("API")]),_:1}),s(o,{class:"mt0",items:m.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),s(o,{items:n.slots,title:"Slots"},null,8,["items"]),s(o,{items:m.events,title:"Events"},null,8,["items"])])}const K={color:`Applies a color to the card's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the card's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the card container.",noBorder:"Removes the default border from the card container.",tile:"Removes the default border-radius and sets sharp edges on the card container.",title:"Provide a title for the card. Accepts HTML.",titleClass:"Provide custom CSS classes for the card's title.",contentClass:"Provide custom CSS classes for the card's content.",image:"Provide a main image for the card.",imageProps:'When using <code>image</code>, this attribute accepts an object of props to pass down to the <strong class="code">w-image</strong> component if you need to specify particular options.'},O={title:{description:"The card title, if the <code>title</code> prop isn't flexible enough."},default:{description:"The card content."},"image-content":{description:"Provide some custom HTML to display on top of the card main image, when using <code>image</code>."},actions:{description:"Some card actions that will be displayed at the bottom of the card.<br>Has a flex layout."}},Q={},X={data:()=>({propsDescs:K,slots:O}),computed:{props(){return _.props},events(){return _.emits.reduce((n,d)=>(n[d]={description:Q[d]||""})&&n,{})}}},Z=g(X,[["render",J]]);function ee(n,d,b,v,h,m){const a=u("ui-component-title"),o=u("examples"),r=u("api");return p(),q("main",null,[s(a,null,{default:i(()=>[e("w-card")]),_:1}),s(o),s(r)])}const ie={components:{Examples:z,Api:Z}},se=g(ie,[["render",ee]]);export{se as default};
