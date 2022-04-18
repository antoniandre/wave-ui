var v=Object.defineProperty;var x=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var f=(s,i,n)=>i in s?v(s,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[i]=n,h=(s,i)=>{for(var n in i||(i={}))q.call(i,n)&&f(s,n,i[n]);if(x)for(var n of x(i))T.call(i,n)&&f(s,n,i[n]);return s};import{r as d,o as p,f as b,a as e,w as a,e as t,b as l,_,c0 as w,bz as y}from"./index.d441c375.js";const k=t("Default"),L=l("p",null,[t("By default the "),l("span",{class:"code"},"w-textarea"),t(` component has a label inside the textarea that moves up above
the textarea on focus or when the textarea is filled by some content or a placeholder.`),l("br"),t(`
The default number of rows is 3, and when adding lines the textarea will adjust its size.`)],-1),D=t("Label"),M=t(`<w-textarea>Label</w-textarea>
`),A=t("Label and / or placeholder"),E=t("Label"),P=t(`<w-textarea>Label</w-textarea>

<w-textarea
  class="mt4"
  placeholder="Placeholder">
</w-textarea>

<w-textarea
  class="mt4"
  label="Label"
  placeholder="Placeholder">
</w-textarea>
`),S=t("v-model"),V=l("p",null,[t("The value of the textarea can be provided via the "),l("code",null,"model-value"),t(" attribute (or "),l("code",null,"value"),t(`
for Vue 2) or via `),l("code",null,"v-model"),t(" for two-way binding."),l("br"),t(`
By default the textarea's height adapts to the content like in this example.
`)],-1),$=t(`<w-textarea model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\\n\\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\\n\\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\\n\\n\\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\\nObcaecati ea id nobis, ab neque porro iure.\\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?"></w-textarea>
`),O=t("No autogrow & resizable"),I=t("Textarea label"),R=t("Textarea label"),z=t(`<w-textarea
  no-autogrow
  rows="6">
  Textarea label
</w-textarea>

<w-textarea
  class="mt4"
  no-autogrow
  resizable
  rows="6">
  Textarea label
</w-textarea>
`),B=t("Outline"),C=t("Textarea label"),H=t(`<w-textarea outline>Textarea label</w-textarea>
`),N=t("Shadow"),j=t("Textarea label"),W=t("Textarea label"),U=t(`<w-textarea shadow>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline shadow>
  Textarea label
</w-textarea>
`),F=t("Tile"),G=t("Textarea label"),J=t("Textarea label"),K=t(`<w-textarea tile>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline tile>
  Textarea label
</w-textarea>
`),Q=t("Colors"),X=l("p",{class:"mb4"},[t("Like in most components, you can set a "),l("code",null,"color"),t(" for the text and a "),l("code",null,"bg-color"),t(` for the
background.`),l("br"),t(`
By default, the text has the "`),l("span",{class:"code"},"primary"),t('" color.')],-1),Y=t("Textarea label"),Z=t("Textarea label"),ee=t("Textarea label"),te=t("Textarea label"),ae=t(`<w-textarea color="blue">
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline color="blue">
  Textarea label
</w-textarea>

<w-textarea
  class="mt4"
  bg-color="blue-light5"
  color="blue-dark3">
  Textarea label
</w-textarea>

<w-textarea
  class="mt4"
  outline
  bg-color="blue-light5"
  color="blue-dark3">
  Textarea label
</w-textarea>
`),oe=t("Label position"),ne=l("p",null,`By default the label is positioned inside, you can also place it on the left or right outside of
the textarea.`,-1),le=t("Label inside"),ie=t("Label left"),se=t("Label right"),re=t(`<w-textarea outline>Label inside</w-textarea>

<w-textarea
  class="mt4"
  outline
  label-position="left">
  Label left
</w-textarea>

<w-textarea
  class="mt4"
  outline
  label-position="right">
  Label right
</w-textarea>
`),de=t("Custom label via default slot"),ce=l("p",null,[t("It is convenient to have the label inside the "),l("span",{class:"code"},"w-textarea"),t(` component to let it handle
the field focus event on label click.`),l("br"),t(`
The `),l("span",{class:"code"},"label"),t(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),ue=t("mdi mdi-arrow-right"),me=l("span",{class:"purple mx1"},"Inside",-1),he=t("mdi mdi-arrow-left"),pe=l("span",{class:"green mr1"},"Left",-1),be=t("mdi mdi-arrow-right"),_e=t("mdi mdi-arrow-left"),xe=l("span",{class:"red ml1"},"Right",-1),fe=t(`<w-textarea label-position="inside" outline>
  <w-icon class="orange">mdi mdi-arrow-right</w-icon>
  <span class="purple mx1">Inside</span>
  <w-icon class="orange">mdi mdi-arrow-left</w-icon>
</w-textarea>

<w-textarea class="mt4" label-position="left" outline>
  <span class="green mr1">Left</span>
  <w-icon class="orange">mdi mdi-arrow-right</w-icon>
</w-textarea>

<w-textarea class="mt4" label-position="right" outline>
  <w-icon class="orange">mdi mdi-arrow-left</w-icon>
  <span class="red ml1">Right</span>
</w-textarea>
`),we=t("Inner icons"),ge=l("div",{class:"title4 mb2"},"Label outside",-1),ve=l("div",{class:"title4 mt6 mb2"},"Label inside",-1),qe=t(`<div class="title4 mb2">Label outside</div>
<w-textarea
  label="Left"
  label-position="left"
  outline
  inner-icon-left="mdi mdi-email">
</w-textarea>
<w-textarea
  class="mt4"
  label="Right"
  label-position="right"
  outline
  inner-icon-right="mdi mdi-email">
</w-textarea>

<div class="title4 mt6 mb2">Label inside</div>
<w-textarea
  label="Message"
  label-position="inside"
  outline
  inner-icon-left="mdi mdi-email">
</w-textarea>
<w-textarea
  class="mt4"
  label="Message"
  label-position="inside"
  outline
  inner-icon-right="mdi mdi-email">
</w-textarea>
`),Te=t("Disabled & readonly"),ye=t(`<w-textarea
  class="mb4"
  label="Disabled & empty"
  outline
  disabled>
</w-textarea>

<w-textarea
  class="mb4"
  model-value="Some content"
  label="Disabled & filled"
  outline
  disabled>
</w-textarea>

<w-textarea
  class="mb4"
  label="Readonly & empty"
  outline
  readonly>
</w-textarea>

<w-textarea
  model-value="Some content"
  label="Readonly & filled"
  outline
  readonly>
</w-textarea>`);function ke(s,i){const n=d("title-link"),o=d("w-textarea"),r=d("example"),c=d("w-icon");return p(),b("div",null,[e(n,{h2:""},{default:a(()=>[k]),_:1}),L,e(r,null,{html:a(()=>[M]),default:a(()=>[e(o,null,{default:a(()=>[D]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[A]),_:1}),e(r,null,{html:a(()=>[P]),default:a(()=>[e(o,null,{default:a(()=>[E]),_:1}),e(o,{class:"mt4",placeholder:"Placeholder"}),e(o,{class:"mt4",label:"Label",placeholder:"Placeholder"})]),_:1}),e(n,{h2:""},{default:a(()=>[S]),_:1}),V,e(r,null,{html:a(()=>[$]),default:a(()=>[e(o,{"model-value":`Lorem, ipsum dolor sit amet consectetur adipisicing elit.

Doloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.
Saepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.

Expedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.
Exercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.


Ducimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?
Obcaecati ea id nobis, ab neque porro iure.
Voluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?`})]),_:1}),e(n,{h2:""},{default:a(()=>[O]),_:1}),e(r,null,{html:a(()=>[z]),default:a(()=>[e(o,{"no-autogrow":"",rows:"6"},{default:a(()=>[I]),_:1}),e(o,{class:"mt4","no-autogrow":"",resizable:"",rows:"6"},{default:a(()=>[R]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[B]),_:1}),e(r,null,{html:a(()=>[H]),default:a(()=>[e(o,{outline:""},{default:a(()=>[C]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[N]),_:1}),e(r,null,{html:a(()=>[U]),default:a(()=>[e(o,{shadow:""},{default:a(()=>[j]),_:1}),e(o,{class:"mt4",outline:"",shadow:""},{default:a(()=>[W]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[F]),_:1}),e(r,null,{html:a(()=>[K]),default:a(()=>[e(o,{tile:""},{default:a(()=>[G]),_:1}),e(o,{class:"mt4",outline:"",tile:""},{default:a(()=>[J]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[Q]),_:1}),X,e(r,null,{html:a(()=>[ae]),default:a(()=>[e(o,{color:"blue"},{default:a(()=>[Y]),_:1}),e(o,{class:"mt4",outline:"",color:"blue"},{default:a(()=>[Z]),_:1}),e(o,{class:"mt4","bg-color":"blue-light5",color:"blue-dark3"},{default:a(()=>[ee]),_:1}),e(o,{class:"mt4",outline:"","bg-color":"blue-light5",color:"blue-dark3"},{default:a(()=>[te]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[oe]),_:1}),ne,e(r,null,{html:a(()=>[re]),default:a(()=>[e(o,{outline:""},{default:a(()=>[le]),_:1}),e(o,{class:"mt4",outline:"","label-position":"left"},{default:a(()=>[ie]),_:1}),e(o,{class:"mt4",outline:"","label-position":"right"},{default:a(()=>[se]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[de]),_:1}),ce,e(r,null,{html:a(()=>[fe]),default:a(()=>[e(o,{"label-position":"inside",outline:""},{default:a(()=>[e(c,{class:"orange"},{default:a(()=>[ue]),_:1}),me,e(c,{class:"orange"},{default:a(()=>[he]),_:1})]),_:1}),e(o,{class:"mt4","label-position":"left",outline:""},{default:a(()=>[pe,e(c,{class:"orange"},{default:a(()=>[be]),_:1})]),_:1}),e(o,{class:"mt4","label-position":"right",outline:""},{default:a(()=>[e(c,{class:"orange"},{default:a(()=>[_e]),_:1}),xe]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[we]),_:1}),e(r,null,{html:a(()=>[qe]),default:a(()=>[ge,e(o,{label:"Message","label-position":"left",outline:"","inner-icon-left":"mdi mdi-email"}),e(o,{class:"mt4",label:"Message","label-position":"right",outline:"","inner-icon-right":"mdi mdi-email"}),ve,e(o,{label:"Message","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-email"}),e(o,{class:"mt4",label:"Message","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-email"})]),_:1}),e(n,{h2:""},{default:a(()=>[Te]),_:1}),e(r,null,{html:a(()=>[ye]),default:a(()=>[e(o,{class:"mb4",label:"Disabled & empty",outline:"",disabled:""}),e(o,{class:"mb4","model-value":"Some content",label:"Disabled & filled",outline:"",disabled:""}),e(o,{class:"mb4",label:"Readonly & empty",outline:"",readonly:""}),e(o,{"model-value":"Some content",label:"Readonly & filled",outline:"",readonly:""})]),_:1})])}const Le={};var De=_(Le,[["render",ke]]);const Me=l("div",{class:"w-divider my12"},null,-1),Ae=t("API");function Ee(s,i,n,o,r,c){const m=d("title-link"),u=d("component-api");return p(),b("div",null,[Me,e(m,{class:"title1",h2:""},{default:a(()=>[Ae]),_:1}),e(u,{class:"mt0",items:c.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(u,{items:s.slots,title:"Slots"},null,8,["items"]),e(u,{items:c.events,title:"Events"},null,8,["items"])])}const Pe={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the textarea.<br>Gets updated on textarea input.',label:"Sets a visible label for the textarea.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the textarea when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn't overlap.",color:`Applies a color to the textarea's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the textarea's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the textarea's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the textarea.",noAutogrow:"Disables the ability to fit the textarea height to the content.<br>The height will not be smaller than the number of rows set via the <code>rows</code> prop.",resizable:"Allows native resizing of the textarea's height.",tile:"Removes the default border-radius and sets sharp edges on the textarea.",rows:"The default and minimum number of rows to display in the textarea (native HTML attribute).",cols:"Applies the native HTML <code>cols</code> attribute to the textarea (native HTML attribute).",name:"Provide a native HTML <code>name</code> attribute to the textarea. If not provided, a unique name will be computed.",disabled:"Disables the textarea making it unreactive to user interactions.",readonly:"The textarea will still look like an interactive textarea except that it is read-only: its current content cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the textarea.",validators:'<span class="deep-orange">Only for validation, when the textarea is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the textarea. Each function will be executed on textarea   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the textarea.'},Se={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},Ve={input:{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textarea value."}},"update:modelValue":{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textarea value."}},focus:{description:"Emitted on textarea focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on textarea blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},$e={data:()=>({propsDescs:Pe,slots:Se}),computed:{props(){return h(h({},w.props),y.props)},events(){return w.emits.reduce((s,i)=>(s[i]=Ve[i]||{})&&s,{})}}};var Oe=_($e,[["render",Ee]]);const Ie=t("w-textarea");function Re(s,i,n,o,r,c){const m=d("ui-component-title"),u=d("examples"),g=d("api");return p(),b("main",null,[e(m,null,{default:a(()=>[Ie]),_:1}),e(u),e(g)])}const ze={components:{Examples:De,Api:Oe}};var He=_(ze,[["render",Re]]);export{He as default};
