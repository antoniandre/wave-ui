import{r,o as p,f as q,a as s,w as t,e,b as i,h as m,_,bx as b}from"./index.98731952.js";const w=e("Basic"),x=e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),R=i("br",null,null,-1),L=i("br",null,null,-1),C=e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`),V=e(`w-card.
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.`),$=i("br",null,null,-1),y=i("br",null,null,-1),I=e(`
  Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
  dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
  aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`),k=e(`<w-card>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.<br><br>
  Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
  dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
  aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
</w-card>
`),U=e("Simple card with a title"),F=i("p",null,[e("When the title is simple you can pass it directly as a prop like in this example."),i("br"),e(`
You can also use the `),i("code",null,"title"),e(` slot to pass more complex data and benefit from the Vue template
compilation.`)],-1),S=i("p",null,[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),i("br"),i("br"),e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)],-1),A=e(`w-card(title="Card title" title-class="blue-light5--bg")
  p.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`),P=e(`<w-card title="Card title" title-class="blue-light5--bg">
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.<br><br>
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
  </p>
</w-card>
`),T=e("Colored card with no title and no border"),B=i("p",null,[e("Like in most components, you can set a "),i("code",null,"color"),e(" for the text and a "),i("code",null,"bg-color"),e(` for the
background.
`)],-1),W=i("p",null,[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),i("br"),i("br"),e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)],-1),j=e(`w-card(bg-color="secondary" no-border)
  p.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`),E=e(`<w-card bg-color="secondary" no-border>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.<br><br>
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
  </p>
</w-card>
`),D=e("Tiled card with a top toolbar"),H=i("p",null,[e("The "),i("span",{class:"code"},"w-card"),e(` component will detect if there is a toolbar in the title slot or in the
actions slot and will remove the default padding and border on this slot if there is.`)],-1),N=i("div",{class:"title3 my0"},"Card title",-1),M=i("div",{class:"spacer"},null,-1),Y=i("span",{class:"ml2"},"Item 1",-1),z=i("span",{class:"ml2"},"Item 2",-1),G=i("span",{class:"ml2"},"Item 3",-1),J=i("p",null,[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),i("br"),i("br"),e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)],-1),K=e(`w-card(tile)
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
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`),O=e(`<w-card tile>
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
`),Q=e("Card with shadow"),X=i("p",null,[e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),i("br"),i("br"),e(`
Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`)],-1),Z=e(`w-card(shadow)
  p.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.#[br]#[br]
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.`),ee=e(`<w-card shadow>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
    quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
    odit dolor labore eveniet at vel sequi nostrum.<br><br>
    Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi
    dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi
    aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.
  </p>
</w-card>
`),te=e("Card with actions"),ie=i("p",null,"The actions slot is optional but facilitates the addition of action buttons in a flex layout.",-1),se=e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),oe=i("div",{class:"spacer"},null,-1),ae=e("I disagree"),ne=e("I agree"),re=e(`w-card(title="Terms and conditions")
  | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  | odit dolor labore eveniet at vel sequi nostrum.
  template(#actions)
    .spacer
    w-button.mr2(bg-color="error") I disagree
    w-button(bg-color="success") I agree`),ue=e(`<w-card title="Terms and conditions">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.

  <template #actions>
    <div class="spacer"></div>
    <w-button bg-color="error" class="mr2">I disagree</w-button>
    <w-button bg-color="success">I agree</w-button>
  </template>
</w-card>
`),le=e("Card with image"),de=i("p",null,[e("Providing a card main image is as simple as "),i("code",null,'image="your-image-source"'),e(".")],-1),ce=e("Standard use"),me=e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),pe=i("div",{class:"spacer"},null,-1),qe=e("Read more"),_e=e(`w-card(:image="\`\${baseUrl}images/japanese-wave.png\`")
  | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  | odit dolor labore eveniet at vel sequi nostrum.
  template(#actions)
    .spacer
    w-button Read more`),ge=e(`<w-card :image="\`\${baseUrl}images/japanese-wave.png\`">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.

  <template #actions>
    <div class="spacer"></div>
    <w-button>Read more</w-button>
  </template>
</w-card>`),he=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+m("process")+".env.BASE_URL`,\n  // or with Vite, `"+m("import")+`.meta.env.BASE_URL\`,
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})
`),ve=e("Content on top of the image"),be=i("p",null,[e("It is possible to add some content on top of the image using the "),i("code",null,"image-content"),e(" slot."),i("br"),e(`
Using the `),i("code",null,"image-props"),e(" prop, you can tailor the "),i("strong",{class:"code"},"w-image"),e(` use to your needs,
like adding CSS classes to the content wrapper or change the default image ratio.`)],-1),fe=e(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
odit dolor labore eveniet at vel sequi nostrum.`),we=i("div",{class:"title1 pink"},"Wave UI",-1),xe=i("div",{class:"spacer"},null,-1),Re=e("Read more"),Le=e(`w-card(
  :image="\`\${baseUrl}images/japanese-wave.png\`"
  :image-props="{ contentClass: 'align-start pa1', ratio: 1 / 4 }")
  | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  | quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  | odit dolor labore eveniet at vel sequi nostrum.
  template(#image-content)
    .title1.pink Wave UI
  template(#actions)
    .spacer
    w-button Read more`),Ce=e(`<w-card :image="\`\${baseUrl}images/japanese-wave.png\`">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,
  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas
  odit dolor labore eveniet at vel sequi nostrum.

  <template #actions>
    <div class="spacer"></div>
    <w-button>Read more</w-button>
  </template>
</w-card>`),Ve=e("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+m("process")+".env.BASE_URL`,\n  // or with Vite, `"+m("import")+`.meta.env.BASE_URL\`
  // if the image is in the public/ folder.
  baseUrl: 'https://antoniandre.github.io/wave-ui/'
})`);function $e(u,l,g,h,v,d){const a=r("title-link"),o=r("w-card"),n=r("example"),f=r("w-toolbar"),c=r("w-button");return p(),q("div",null,[s(a,{h2:""},{default:t(()=>[w]),_:1}),s(n,null,{pug:t(()=>[V,$,y,I]),html:t(()=>[k]),default:t(()=>[s(o,null,{default:t(()=>[x,R,L,C]),_:1})]),_:1}),s(a,{h2:""},{default:t(()=>[U]),_:1}),F,s(n,null,{pug:t(()=>[A]),html:t(()=>[P]),default:t(()=>[s(o,{title:"Card title","title-class":"blue-light5--bg"},{default:t(()=>[S]),_:1})]),_:1}),s(a,{h2:""},{default:t(()=>[T]),_:1}),B,s(n,null,{pug:t(()=>[j]),html:t(()=>[E]),default:t(()=>[s(o,{"bg-color":"secondary","no-border":""},{default:t(()=>[W]),_:1})]),_:1}),s(a,{h2:""},{default:t(()=>[D]),_:1}),H,s(n,null,{pug:t(()=>[K]),html:t(()=>[O]),default:t(()=>[s(o,{tile:""},{title:t(()=>[s(f,null,{default:t(()=>[N,M,Y,z,G]),_:1})]),default:t(()=>[J]),_:1})]),_:1}),s(a,{h2:""},{default:t(()=>[Q]),_:1}),s(n,null,{pug:t(()=>[Z]),html:t(()=>[ee]),default:t(()=>[s(o,{shadow:""},{default:t(()=>[X]),_:1})]),_:1}),s(a,{h2:""},{default:t(()=>[te]),_:1}),ie,s(n,null,{pug:t(()=>[re]),html:t(()=>[ue]),default:t(()=>[s(o,{title:"Terms and conditions"},{actions:t(()=>[oe,s(c,{class:"mr2","bg-color":"error"},{default:t(()=>[ae]),_:1}),s(c,{"bg-color":"success"},{default:t(()=>[ne]),_:1})]),default:t(()=>[se]),_:1})]),_:1}),s(a,{h2:""},{default:t(()=>[le]),_:1}),de,s(a,{h3:""},{default:t(()=>[ce]),_:1}),s(n,null,{pug:t(()=>[_e]),html:t(()=>[ge]),js:t(()=>[he]),default:t(()=>[s(o,{image:`${u.baseUrl}images/japanese-wave.png`},{actions:t(()=>[pe,s(c,null,{default:t(()=>[qe]),_:1})]),default:t(()=>[me]),_:1},8,["image"])]),_:1}),s(a,{h3:""},{default:t(()=>[ve]),_:1}),be,s(n,null,{pug:t(()=>[Le]),html:t(()=>[Ce]),js:t(()=>[Ve]),default:t(()=>[s(o,{image:`${u.baseUrl}images/japanese-wave.png`,"image-props":{contentClass:"align-start pa1",ratio:1/4}},{"image-content":t(()=>[we]),actions:t(()=>[xe,s(c,null,{default:t(()=>[Re]),_:1})]),default:t(()=>[fe]),_:1},8,["image"])]),_:1})])}const ye={data:()=>({baseUrl:"/wave-ui/"})};var Ie=_(ye,[["render",$e]]);const ke=i("div",{class:"w-divider my12"},null,-1),Ue=e("API");function Fe(u,l,g,h,v,d){const a=r("title-link"),o=r("component-api");return p(),q("div",null,[ke,s(a,{class:"title1",h2:""},{default:t(()=>[Ue]),_:1}),s(o,{class:"mt0",items:d.props,descriptions:u.propsDescs,title:"Props"},null,8,["items","descriptions"]),s(o,{items:u.slots,title:"Slots"},null,8,["items"]),s(o,{items:d.events,title:"Events"},null,8,["items"])])}const Se={color:`Applies a color to the card's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the card's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the card container.",noBorder:"Removes the default border from the card container.",tile:"Removes the default border-radius and sets sharp edges on the card container.",title:"Provide a title for the card. Accepts HTML.",titleClass:"Provide custom CSS classes for the card's title.",contentClass:"Provide custom CSS classes for the card's content.",image:"Provide a main image for the card.",imageProps:'When using <code>image</code>, this attribute accepts an object of props to pass down to the <strong class="code">w-image</strong> component if you need to specify particular options.'},Ae={title:{description:"The card title, if the <code>title</code> prop isn't flexible enough."},default:{description:"The card content."},"image-content":{description:"Provide some custom HTML to display on top of the card main image, when using <code>image</code>."},actions:{description:"Some card actions that will be displayed at the bottom of the card.<br>Has a flex layout."}},Pe={},Te={data:()=>({propsDescs:Se,slots:Ae}),computed:{props(){return b.props},events(){return b.emits.reduce((u,l)=>(u[l]={description:Pe[l]||""})&&u,{})}}};var Be=_(Te,[["render",Fe]]);const We=e("w-card");function je(u,l,g,h,v,d){const a=r("ui-component-title"),o=r("examples"),n=r("api");return p(),q("main",null,[s(a,null,{default:t(()=>[We]),_:1}),s(o),s(n)])}const Ee={components:{Examples:Ie,Api:Be}};var He=_(Ee,[["render",je]]);export{He as default};
