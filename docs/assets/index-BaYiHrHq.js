import{r as s,o as p,g as h,a as e,w as a,b as t,d as o,_ as b,ac as f,D as w}from"./index-7J9sCsPC.js";const g=o("p",null,[t("By default the "),o("span",{class:"code"},"w-textarea"),t(` component has a label inside the textarea that moves up above
the textarea on focus or when the textarea is filled by some content or a placeholder.`),o("br"),t(`
The default number of rows is 3, and when adding lines the textarea will adjust its size.`)],-1),_=o("p",null,[t("The value of the textarea can be provided via the "),o("code",null,"model-value"),t(" attribute (or "),o("code",null,"value"),t(`
for Vue 2) or via `),o("code",null,"v-model"),t(" for two-way binding."),o("br"),t(`
By default the textarea's height adapts to the content like in this example.
`)],-1),v=o("p",{class:"mb4"},[t("Like in most components, you can set a "),o("code",null,"color"),t(" for the text and a "),o("code",null,"bg-color"),t(` for the
background.`),o("br"),t(`
By default, the text has the "`),o("span",{class:"code"},"primary"),t('" color.')],-1),T=o("p",null,`By default the label is positioned inside, you can also place it on the left or right outside of
the textarea.`,-1),q=o("p",null,[t("It is convenient to have the label inside the "),o("span",{class:"code"},"w-textarea"),t(` component to let it handle
the field focus event on label click.`),o("br"),t(`
The `),o("span",{class:"code"},"label"),t(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),y=o("span",{class:"purple mx1"},"Inside",-1),k=o("span",{class:"green mr1"},"Left",-1),L=o("span",{class:"red ml1"},"Right",-1),D=o("div",{class:"title4 mb2"},"Label outside",-1),M=o("div",{class:"title4 mt6 mb2"},"Label inside",-1);function A(d,c){const n=s("title-link"),l=s("w-textarea"),i=s("example"),r=s("w-icon");return p(),h("div",null,[e(n,{h2:""},{default:a(()=>[t("Default")]),_:1}),g,e(i,null,{html:a(()=>[t(`<w-textarea>Label</w-textarea>
`)]),default:a(()=>[e(l,null,{default:a(()=>[t("Label")]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[t("Label and / or placeholder")]),_:1}),e(i,null,{html:a(()=>[t(`<w-textarea>Label</w-textarea>

<w-textarea
  class="mt4"
  placeholder="Placeholder">
</w-textarea>

<w-textarea
  class="mt4"
  label="Label"
  placeholder="Placeholder">
</w-textarea>
`)]),default:a(()=>[e(l,null,{default:a(()=>[t("Label")]),_:1}),e(l,{class:"mt4",placeholder:"Placeholder"}),e(l,{class:"mt4",label:"Label",placeholder:"Placeholder"})]),_:1}),e(n,{h2:""},{default:a(()=>[t("v-model")]),_:1}),_,e(i,null,{html:a(()=>[t(`<w-textarea model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\\n\\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\\n\\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\\n\\n\\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\\nObcaecati ea id nobis, ab neque porro iure.\\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?"></w-textarea>
`)]),default:a(()=>[e(l,{"model-value":`Lorem, ipsum dolor sit amet consectetur adipisicing elit.

Doloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.
Saepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.

Expedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.
Exercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.


Ducimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?
Obcaecati ea id nobis, ab neque porro iure.
Voluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?`})]),_:1}),e(n,{h2:""},{default:a(()=>[t("No autogrow & resizable")]),_:1}),e(i,null,{html:a(()=>[t(`<w-textarea
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
`)]),default:a(()=>[e(l,{"no-autogrow":"",rows:"6"},{default:a(()=>[t("Textarea label")]),_:1}),e(l,{class:"mt4","no-autogrow":"",resizable:"",rows:"6"},{default:a(()=>[t("Textarea label")]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[t("Outline")]),_:1}),e(i,null,{html:a(()=>[t(`<w-textarea outline>Textarea label</w-textarea>
`)]),default:a(()=>[e(l,{outline:""},{default:a(()=>[t("Textarea label")]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[t("Shadow")]),_:1}),e(i,null,{html:a(()=>[t(`<w-textarea shadow>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline shadow>
  Textarea label
</w-textarea>
`)]),default:a(()=>[e(l,{shadow:""},{default:a(()=>[t("Textarea label")]),_:1}),e(l,{class:"mt4",outline:"",shadow:""},{default:a(()=>[t("Textarea label")]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[t("Tile")]),_:1}),e(i,null,{html:a(()=>[t(`<w-textarea tile>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline tile>
  Textarea label
</w-textarea>
`)]),default:a(()=>[e(l,{tile:""},{default:a(()=>[t("Textarea label")]),_:1}),e(l,{class:"mt4",outline:"",tile:""},{default:a(()=>[t("Textarea label")]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[t("Colors")]),_:1}),v,e(i,null,{html:a(()=>[t(`<w-textarea color="blue">
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
`)]),default:a(()=>[e(l,{color:"blue"},{default:a(()=>[t("Textarea label")]),_:1}),e(l,{class:"mt4",outline:"",color:"blue"},{default:a(()=>[t("Textarea label")]),_:1}),e(l,{class:"mt4","bg-color":"blue-light5",color:"blue-dark3"},{default:a(()=>[t("Textarea label")]),_:1}),e(l,{class:"mt4",outline:"","bg-color":"blue-light5",color:"blue-dark3"},{default:a(()=>[t("Textarea label")]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[t("Label position")]),_:1}),T,e(i,null,{html:a(()=>[t(`<w-textarea outline>Label inside</w-textarea>

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
`)]),default:a(()=>[e(l,{outline:""},{default:a(()=>[t("Label inside")]),_:1}),e(l,{class:"mt4",outline:"","label-position":"left"},{default:a(()=>[t("Label left")]),_:1}),e(l,{class:"mt4",outline:"","label-position":"right"},{default:a(()=>[t("Label right")]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[t("Custom label via default slot")]),_:1}),q,e(i,null,{html:a(()=>[t(`<w-textarea label-position="inside" outline>
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
`)]),default:a(()=>[e(l,{"label-position":"inside",outline:""},{default:a(()=>[e(r,{class:"orange"},{default:a(()=>[t("mdi mdi-arrow-right")]),_:1}),y,e(r,{class:"orange"},{default:a(()=>[t("mdi mdi-arrow-left")]),_:1})]),_:1}),e(l,{class:"mt4","label-position":"left",outline:""},{default:a(()=>[k,e(r,{class:"orange"},{default:a(()=>[t("mdi mdi-arrow-right")]),_:1})]),_:1}),e(l,{class:"mt4","label-position":"right",outline:""},{default:a(()=>[e(r,{class:"orange"},{default:a(()=>[t("mdi mdi-arrow-left")]),_:1}),L]),_:1})]),_:1}),e(n,{h2:""},{default:a(()=>[t("Inner icons")]),_:1}),e(i,null,{html:a(()=>[t(`<div class="title4 mb2">Label outside</div>
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
`)]),default:a(()=>[D,e(l,{label:"Message","label-position":"left",outline:"","inner-icon-left":"mdi mdi-email"}),e(l,{class:"mt4",label:"Message","label-position":"right",outline:"","inner-icon-right":"mdi mdi-email"}),M,e(l,{label:"Message","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-email"}),e(l,{class:"mt4",label:"Message","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-email"})]),_:1}),e(n,{h2:""},{default:a(()=>[t("Disabled & readonly")]),_:1}),e(i,null,{html:a(()=>[t(`<w-textarea
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
</w-textarea>`)]),default:a(()=>[e(l,{class:"mb4",label:"Disabled & empty",outline:"",disabled:""}),e(l,{class:"mb4","model-value":"Some content",label:"Disabled & filled",outline:"",disabled:""}),e(l,{class:"mb4",label:"Readonly & empty",outline:"",readonly:""}),e(l,{"model-value":"Some content",label:"Readonly & filled",outline:"",readonly:""})]),_:1})])}const I={},E=b(I,[["render",A]]),P=o("div",{class:"w-divider my12"},null,-1);function S(d,c,n,l,i,r){const m=s("title-link"),u=s("component-api");return p(),h("div",null,[P,e(m,{class:"title1",h2:""},{default:a(()=>[t("API")]),_:1}),e(u,{class:"mt0",items:r.props,descriptions:d.propsDescs,title:"Props"},null,8,["items","descriptions"]),e(u,{items:d.slots,title:"Slots"},null,8,["items"]),e(u,{items:r.events,title:"Events"},null,8,["items"])])}const V={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the textarea.<br>Gets updated on textarea input.',label:"Sets a visible label for the textarea.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the textarea when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn't overlap.",color:`Applies a color to the textarea's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the textarea's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the textarea's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the textarea.",noAutogrow:"Disables the ability to fit the textarea height to the content.<br>The height will not be smaller than the number of rows set via the <code>rows</code> prop.",resizable:"Allows native resizing of the textarea's height.",tile:"Removes the default border-radius and sets sharp edges on the textarea.",rows:"The default and minimum number of rows to display in the textarea (native HTML attribute).",cols:"Applies the native HTML <code>cols</code> attribute to the textarea (native HTML attribute).",name:"Provide a native HTML <code>name</code> attribute to the textarea. If not provided, a unique name will be computed.",disabled:"Disables the textarea making it unreactive to user interactions.",readonly:"The textarea will still look like an interactive textarea except that it is read-only: its current content cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the textarea.",validators:'<span class="deep-orange">Only for validation, when the textarea is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the textarea. Each function will be executed on textarea   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the textarea.'},O={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},"icon-left":{description:"The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>",params:{inputId:'The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>'}},"icon-right":{description:"The right icon, if the <code>innerIconRight</code> prop is not flexible enough.",params:{inputId:'The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>'}}},$={input:{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textarea value."}},"update:modelValue":{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textarea value."}},focus:{description:"Emitted on textarea focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on textarea blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},R={data:()=>({propsDescs:V,slots:O}),computed:{props(){return{...f.props,...w.props}},events(){return f.emits.reduce((d,c)=>(d[c]=$[c]||{})&&d,{})}}},B=b(R,[["render",S]]);function z(d,c,n,l,i,r){const m=s("ui-component-title"),u=s("examples"),x=s("api");return p(),h("main",null,[e(m,null,{default:a(()=>[t("w-textarea")]),_:1}),e(u),e(x)])}const C={components:{Examples:E,Api:B}},N=b(C,[["render",z]]);export{N as default};
