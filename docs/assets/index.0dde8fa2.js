import{r as s,o as h,f as p,a as e,w as a,e as t,b as n,_ as b,ad as _,E as f}from"./index.372af10f.js";const w=t("Default"),g=n("p",null,[t("By default the "),n("span",{class:"code"},"w-textarea"),t(` component has a label inside the textarea that moves up above
the textarea on focus or when the textarea is filled by some content or a placeholder.`),n("br"),t(`
The default number of rows is 3, and when adding lines the textarea will adjust its size.`)],-1),v=t("Label"),q=t(`<w-textarea>Label</w-textarea>
`),T=t("Label and / or placeholder"),y=t("Label"),k=t(`<w-textarea>Label</w-textarea>

<w-textarea
  class="mt4"
  placeholder="Placeholder">
</w-textarea>

<w-textarea
  class="mt4"
  label="Label"
  placeholder="Placeholder">
</w-textarea>
`),L=t("v-model"),D=n("p",null,[t("The value of the textarea can be provided via the "),n("code",null,"model-value"),t(" attribute (or "),n("code",null,"value"),t(`
for Vue 2) or via `),n("code",null,"v-model"),t(" for two-way binding."),n("br"),t(`
By default the textarea's height adapts to the content like in this example.
`)],-1),M=t(`<w-textarea model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\\n\\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\\n\\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\\n\\n\\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\\nObcaecati ea id nobis, ab neque porro iure.\\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?"></w-textarea>
`),A=t("No autogrow & resizable"),E=t("Textarea label"),P=t("Textarea label"),S=t(`<w-textarea
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
`),V=t("Outline"),$=t("Textarea label"),O=t(`<w-textarea outline>Textarea label</w-textarea>
`),I=t("Shadow"),R=t("Textarea label"),B=t("Textarea label"),z=t(`<w-textarea shadow>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline shadow>
  Textarea label
</w-textarea>
`),C=t("Tile"),H=t("Textarea label"),N=t("Textarea label"),j=t(`<w-textarea tile>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline tile>
  Textarea label
</w-textarea>
`),W=t("Colors"),U=n("p",{class:"mb4"},[t("Like in most components, you can set a "),n("code",null,"color"),t(" for the text and a "),n("code",null,"bg-color"),t(` for the
background.`),n("br"),t(`
By default, the text has the "`),n("span",{class:"code"},"primary"),t('" color.')],-1),F=t("Textarea label"),G=t("Textarea label"),J=t("Textarea label"),K=t("Textarea label"),Q=t(`<w-textarea color="blue">
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
`),X=t("Label position"),Y=n("p",null,`By default the label is positioned inside, you can also place it on the left or right outside of
the textarea.`,-1),Z=t("Label inside"),ee=t("Label left"),te=t("Label right"),ae=t(`<w-textarea outline>Label inside</w-textarea>

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
`),oe=t("Custom label via default slot"),ne=n("p",null,[t("It is convenient to have the label inside the "),n("span",{class:"code"},"w-textarea"),t(` component to let it handle
the field focus event on label click.`),n("br"),t(`
The `),n("span",{class:"code"},"label"),t(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),le=t("mdi mdi-arrow-right"),ie=n("span",{class:"purple mx1"},"Inside",-1),se=t("mdi mdi-arrow-left"),re=n("span",{class:"green mr1"},"Left",-1),de=t("mdi mdi-arrow-right"),ce=t("mdi mdi-arrow-left"),ue=n("span",{class:"red ml1"},"Right",-1),me=t(`<w-textarea label-position="inside" outline>
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
`),he=t("Inner icons"),pe=n("div",{class:"title4 mb2"},"Label outside",-1),be=n("div",{class:"title4 mt6 mb2"},"Label inside",-1),_e=t(`<div class="title4 mb2">Label outside</div>
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
`),xe=t("Disabled & readonly"),fe=t(`<w-textarea
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
</w-textarea>`);function we(d,c){const l=s("title-link"),o=s("w-textarea"),i=s("example"),r=s("w-icon");return h(),p("div",null,[e(l,{h2:""},{default:a(()=>[w]),_:1}),g,e(i,null,{html:a(()=>[q]),default:a(()=>[e(o,null,{default:a(()=>[v]),_:1})]),_:1}),e(l,{h2:""},{default:a(()=>[T]),_:1}),e(i,null,{html:a(()=>[k]),default:a(()=>[e(o,null,{default:a(()=>[y]),_:1}),e(o,{class:"mt4",placeholder:"Placeholder"}),e(o,{class:"mt4",label:"Label",placeholder:"Placeholder"})]),_:1}),e(l,{h2:""},{default:a(()=>[L]),_:1}),D,e(i,null,{html:a(()=>[M]),default:a(()=>[e(o,{"model-value":`Lorem, ipsum dolor sit amet consectetur adipisicing elit.

Doloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.
Saepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.

Expedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.
Exercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.


Ducimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?
Obcaecati ea id nobis, ab neque porro iure.
Voluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?`})]),_:1}),e(l,{h2:""},{default:a(()=>[A]),_:1}),e(i,null,{html:a(()=>[S]),default:a(()=>[e(o,{"no-autogrow":"",rows:"6"},{default:a(()=>[E]),_:1}),e(o,{class:"mt4","no-autogrow":"",resizable:"",rows:"6"},{default:a(()=>[P]),_:1})]),_:1}),e(l,{h2:""},{default:a(()=>[V]),_:1}),e(i,null,{html:a(()=>[O]),default:a(()=>[e(o,{outline:""},{default:a(()=>[$]),_:1})]),_:1}),e(l,{h2:""},{default:a(()=>[I]),_:1}),e(i,null,{html:a(()=>[z]),default:a(()=>[e(o,{shadow:""},{default:a(()=>[R]),_:1}),e(o,{class:"mt4",outline:"",shadow:""},{default:a(()=>[B]),_:1})]),_:1}),e(l,{h2:""},{default:a(()=>[C]),_:1}),e(i,null,{html:a(()=>[j]),default:a(()=>[e(o,{tile:""},{default:a(()=>[H]),_:1}),e(o,{class:"mt4",outline:"",tile:""},{default:a(()=>[N]),_:1})]),_:1}),e(l,{h2:""},{default:a(()=>[W]),_:1}),U,e(i,null,{html:a(()=>[Q]),default:a(()=>[e(o,{color:"blue"},{default:a(()=>[F]),_:1}),e(o,{class:"mt4",outline:"",color:"blue"},{default:a(()=>[G]),_:1}),e(o,{class:"mt4","bg-color":"blue-light5",color:"blue-dark3"},{default:a(()=>[J]),_:1}),e(o,{class:"mt4",outline:"","bg-color":"blue-light5",color:"blue-dark3"},{default:a(()=>[K]),_:1})]),_:1}),e(l,{h2:""},{default:a(()=>[X]),_:1}),Y,e(i,null,{html:a(()=>[ae]),default:a(()=>[e(o,{outline:""},{default:a(()=>[Z]),_:1}),e(o,{class:"mt4",outline:"","label-position":"left"},{default:a(()=>[ee]),_:1}),e(o,{class:"mt4",outline:"","label-position":"right"},{default:a(()=>[te]),_:1})]),_:1}),e(l,{h2:""},{default:a(()=>[oe]),_:1}),ne,e(i,null,{html:a(()=>[me]),default:a(()=>[e(o,{"label-position":"inside",outline:""},{default:a(()=>[e(r,{class:"orange"},{default:a(()=>[le]),_:1}),ie,e(r,{class:"orange"},{default:a(()=>[se]),_:1})]),_:1}),e(o,{class:"mt4","label-position":"left",outline:""},{default:a(()=>[re,e(r,{class:"orange"},{default:a(()=>[de]),_:1})]),_:1}),e(o,{class:"mt4","label-position":"right",outline:""},{default:a(()=>[e(r,{class:"orange"},{default:a(()=>[ce]),_:1}),ue]),_:1})]),_:1}),e(l,{h2:""},{default:a(()=>[he]),_:1}),e(i,null,{html:a(()=>[_e]),default:a(()=>[pe,e(o,{label:"Message","label-position":"left",outline:"","inner-icon-left":"mdi mdi-email"}),e(o,{class:"mt4",label:"Message","label-position":"right",outline:"","inner-icon-right":"mdi mdi-email"}),be,e(o,{label:"Message","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-email"}),e(o,{class:"mt4",label:"Message","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-email"})]),_:1}),e(l,{h2:""},{default:a(()=>[xe]),_:1}),e(i,null,{html:a(()=>[fe]),default:a(()=>[e(o,{class:"mb4",label:"Disabled & empty",outline:"",disabled:""}),e(o,{class:"mb4","model-value":"Some content",label:"Disabled & filled",outline:"",disabled:""}),e(o,{class:"mb4",label:"Readonly & empty",outline:"",readonly:""}),e(o,{"model-value":"Some content",label:"Readonly & filled",outline:"",readonly:""})]),_:1})])}const ge={};var ve=b(ge,[["render",we]]);const qe=n("div",{class:"w-divider my12"},null,-1),Te=t("API");function ye(d,c,l,o,i,r){const m=s("title-link"),u=s("component-api");return h(),p("div",null,[qe,e(m,{class:"title1",h2:""},{default:a(()=>[Te]),_:1}),e(u,{class:"mt0",items:r.props,descriptions:d.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(u,{items:d.slots,title:"Slots"},null,8,["items"]),e(u,{items:r.events,title:"Events"},null,8,["items"])])}const ke={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the textarea.<br>Gets updated on textarea input.',label:"Sets a visible label for the textarea.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the textarea when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn't overlap.",color:`Applies a color to the textarea's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the textarea's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the textarea's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the textarea.",noAutogrow:"Disables the ability to fit the textarea height to the content.<br>The height will not be smaller than the number of rows set via the <code>rows</code> prop.",resizable:"Allows native resizing of the textarea's height.",tile:"Removes the default border-radius and sets sharp edges on the textarea.",rows:"The default and minimum number of rows to display in the textarea (native HTML attribute).",cols:"Applies the native HTML <code>cols</code> attribute to the textarea (native HTML attribute).",name:"Provide a native HTML <code>name</code> attribute to the textarea. If not provided, a unique name will be computed.",disabled:"Disables the textarea making it unreactive to user interactions.",readonly:"The textarea will still look like an interactive textarea except that it is read-only: its current content cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the textarea.",validators:'<span class="deep-orange">Only for validation, when the textarea is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the textarea. Each function will be executed on textarea   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the textarea.'},Le={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},De={input:{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textarea value."}},"update:modelValue":{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textarea value."}},focus:{description:"Emitted on textarea focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on textarea blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},Me={data:()=>({propsDescs:ke,slots:Le}),computed:{props(){return{..._.props,...f.props}},events(){return _.emits.reduce((d,c)=>(d[c]=De[c]||{})&&d,{})}}};var Ae=b(Me,[["render",ye]]);const Ee=t("w-textarea");function Pe(d,c,l,o,i,r){const m=s("ui-component-title"),u=s("examples"),x=s("api");return h(),p("main",null,[e(m,null,{default:a(()=>[Ee]),_:1}),e(u),e(x)])}const Se={components:{Examples:ve,Api:Ae}};var $e=b(Se,[["render",Pe]]);export{$e as default};
