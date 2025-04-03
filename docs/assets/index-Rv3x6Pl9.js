import{r as s,g as b,o as c,a as l,b as i,w as a,e as t,_ as x,ab as f,G as g}from"./index-CAQLAca3.js";function h(u,e){const p=s("w-alert"),r=s("title-link"),n=s("w-textarea"),o=s("example"),d=s("w-icon");return c(),b("div",null,[l(p,{info:""},{default:a(()=>e[0]||(e[0]=[i("div",{class:"title4"},"Good to know",-1),i("p",{class:"body"},[t(`Any HTML attribute or JavaScript event listeners attached to the component will be applied to the
native textarea element inside the `),i("strong",{class:"code inherit"},"w-textarea"),t(` component, except the style
and class attributes which will stay on the wrapper (for convenience and to respect the internal
design of the component).`),i("br"),t(`
This will allow you to add common HTML attributes (like `),i("code",null,"tabindex"),t(", "),i("code",null,"name"),t(`, etc.) and
attach event listeners (like `),i("code",null,"@focus"),t(", "),i("code",null,"@keypress"),t(`, etc.) directly to the form field
itself (textarea).
`)],-1)])),_:1}),l(r,{h2:""},{default:a(()=>e[1]||(e[1]=[t("Default")])),_:1}),e[62]||(e[62]=i("p",null,[t("By default the "),i("span",{class:"code"},"w-textarea"),t(` component has a label inside the textarea that moves up above
the textarea on focus or when the textarea is filled by some content or a placeholder.`),i("br"),t(`
The default number of rows is 3, and when adding lines the textarea will adjust its size.
`)],-1)),l(o,null,{pug:a(()=>e[3]||(e[3]=[t("w-textarea Label")])),html:a(()=>e[4]||(e[4]=[t(`<w-textarea>Label</w-textarea>
`)])),default:a(()=>[l(n,null,{default:a(()=>e[2]||(e[2]=[t("Label")])),_:1})]),_:1}),l(r,{h2:""},{default:a(()=>e[5]||(e[5]=[t("Label and / or placeholder")])),_:1}),l(o,null,{pug:a(()=>e[7]||(e[7]=[t(`w-textarea Label
w-textarea.mt4(placeholder="Placeholder")
w-textarea.mt4(label="Label" placeholder="Placeholder")`)])),html:a(()=>e[8]||(e[8]=[t(`<w-textarea>Label</w-textarea>

<w-textarea
  class="mt4"
  placeholder="Placeholder">
</w-textarea>

<w-textarea
  class="mt4"
  label="Label"
  placeholder="Placeholder">
</w-textarea>
`)])),default:a(()=>[l(n,null,{default:a(()=>e[6]||(e[6]=[t("Label")])),_:1}),l(n,{class:"mt4",placeholder:"Placeholder"}),l(n,{class:"mt4",label:"Label",placeholder:"Placeholder"})]),_:1}),l(r,{h2:""},{default:a(()=>e[9]||(e[9]=[t("v-model")])),_:1}),e[63]||(e[63]=i("p",null,[t("The value of the textarea can be provided via the "),i("code",null,"model-value"),t(" attribute (or "),i("code",null,"value"),t(`
for Vue 2) or via `),i("code",null,"v-model"),t(" for two-way binding."),i("br"),t(`
By default the textarea's height adapts to the content like in this example.
`)],-1)),l(o,null,{pug:a(()=>e[10]||(e[10]=[t('w-textarea(model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\\n\\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\\n\\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\\n\\n\\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\\nObcaecati ea id nobis, ab neque porro iure.\\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?")')])),html:a(()=>e[11]||(e[11]=[t(`<w-textarea model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\\n\\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\\n\\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\\n\\n\\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\\nObcaecati ea id nobis, ab neque porro iure.\\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?"></w-textarea>
`)])),default:a(()=>[l(n,{"model-value":`Lorem, ipsum dolor sit amet consectetur adipisicing elit.

Doloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.
Saepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.

Expedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.
Exercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.


Ducimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?
Obcaecati ea id nobis, ab neque porro iure.
Voluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?`})]),_:1}),l(r,{h2:""},{default:a(()=>e[12]||(e[12]=[t("No autogrow & resizable")])),_:1}),l(o,null,{pug:a(()=>e[15]||(e[15]=[t(`w-textarea(no-autogrow rows="6") Textarea label
w-textarea.mt4(no-autogrow resizable rows="6") Textarea label`)])),html:a(()=>e[16]||(e[16]=[t(`<w-textarea
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
`)])),default:a(()=>[l(n,{"no-autogrow":"",rows:"6"},{default:a(()=>e[13]||(e[13]=[t("Textarea label")])),_:1}),l(n,{class:"mt4","no-autogrow":"",resizable:"",rows:"6"},{default:a(()=>e[14]||(e[14]=[t("Textarea label")])),_:1})]),_:1}),l(r,{h2:""},{default:a(()=>e[17]||(e[17]=[t("Outline")])),_:1}),l(o,null,{pug:a(()=>e[19]||(e[19]=[t("w-textarea(outline) Textarea label")])),html:a(()=>e[20]||(e[20]=[t(`<w-textarea outline>Textarea label</w-textarea>
`)])),default:a(()=>[l(n,{outline:""},{default:a(()=>e[18]||(e[18]=[t("Textarea label")])),_:1})]),_:1}),l(r,{h2:""},{default:a(()=>e[21]||(e[21]=[t("Shadow")])),_:1}),l(o,null,{pug:a(()=>e[24]||(e[24]=[t(`w-textarea(shadow) Textarea label
w-textarea.mt4(outline shadow) Textarea label`)])),html:a(()=>e[25]||(e[25]=[t(`<w-textarea shadow>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline shadow>
  Textarea label
</w-textarea>
`)])),default:a(()=>[l(n,{shadow:""},{default:a(()=>e[22]||(e[22]=[t("Textarea label")])),_:1}),l(n,{class:"mt4",outline:"",shadow:""},{default:a(()=>e[23]||(e[23]=[t("Textarea label")])),_:1})]),_:1}),l(r,{h2:""},{default:a(()=>e[26]||(e[26]=[t("Tile")])),_:1}),l(o,null,{pug:a(()=>e[29]||(e[29]=[t(`w-textarea(tile) Textarea label
w-textarea.mt4(outline tile) Textarea label`)])),html:a(()=>e[30]||(e[30]=[t(`<w-textarea tile>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline tile>
  Textarea label
</w-textarea>
`)])),default:a(()=>[l(n,{tile:""},{default:a(()=>e[27]||(e[27]=[t("Textarea label")])),_:1}),l(n,{class:"mt4",outline:"",tile:""},{default:a(()=>e[28]||(e[28]=[t("Textarea label")])),_:1})]),_:1}),l(r,{h2:""},{default:a(()=>e[31]||(e[31]=[t("Colors")])),_:1}),e[64]||(e[64]=i("p",{class:"mb4"},[t("Like in most components, you can set a "),i("code",null,"color"),t(" for the text and a "),i("code",null,"bg-color"),t(` for the
background.`),i("br"),t(`
By default, the text has the "`),i("span",{class:"code"},"primary"),t('" color.')],-1)),l(o,null,{pug:a(()=>e[36]||(e[36]=[t(`w-textarea(color="blue") Textarea label
w-textarea.mt4(outline color="blue") Textarea label
w-textarea.mt4(bg-color="blue-light5" color="blue-dark3") Textarea label
w-textarea.mt4(outline bg-color="blue-light5" color="blue-dark3") Textarea label`)])),html:a(()=>e[37]||(e[37]=[t(`<w-textarea color="blue">
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
`)])),default:a(()=>[l(n,{color:"blue"},{default:a(()=>e[32]||(e[32]=[t("Textarea label")])),_:1}),l(n,{class:"mt4",outline:"",color:"blue"},{default:a(()=>e[33]||(e[33]=[t("Textarea label")])),_:1}),l(n,{class:"mt4","bg-color":"blue-light5",color:"blue-dark3"},{default:a(()=>e[34]||(e[34]=[t("Textarea label")])),_:1}),l(n,{class:"mt4",outline:"","bg-color":"blue-light5",color:"blue-dark3"},{default:a(()=>e[35]||(e[35]=[t("Textarea label")])),_:1})]),_:1}),l(r,{h2:""},{default:a(()=>e[38]||(e[38]=[t("Label position")])),_:1}),e[65]||(e[65]=i("p",null,`By default the label is positioned inside, you can also place it on the left or right outside of
the textarea.`,-1)),l(o,null,{pug:a(()=>e[42]||(e[42]=[t(`w-textarea(outline) Label inside
w-textarea.mt4(outline label-position="left") Label left
w-textarea.mt4(outline label-position="right") Label right`)])),html:a(()=>e[43]||(e[43]=[t(`<w-textarea outline>Label inside</w-textarea>

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
`)])),default:a(()=>[l(n,{outline:""},{default:a(()=>e[39]||(e[39]=[t("Label inside")])),_:1}),l(n,{class:"mt4",outline:"","label-position":"left"},{default:a(()=>e[40]||(e[40]=[t("Label left")])),_:1}),l(n,{class:"mt4",outline:"","label-position":"right"},{default:a(()=>e[41]||(e[41]=[t("Label right")])),_:1})]),_:1}),l(r,{h2:""},{default:a(()=>e[44]||(e[44]=[t("Custom label via default slot")])),_:1}),e[66]||(e[66]=i("p",null,[t("It is convenient to have the label inside the "),i("span",{class:"code"},"w-textarea"),t(` component to let it handle
the field focus event on label click.`),i("br"),t(`
The `),i("span",{class:"code"},"label"),t(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1)),l(o,null,{pug:a(()=>e[52]||(e[52]=[t(`w-textarea(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-textarea.mt4(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-textarea.mt4(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`)])),html:a(()=>e[53]||(e[53]=[t(`<w-textarea label-position="inside" outline>
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
`)])),default:a(()=>[l(n,{"label-position":"inside",outline:""},{default:a(()=>[l(d,{class:"orange"},{default:a(()=>e[45]||(e[45]=[t("mdi mdi-arrow-right")])),_:1}),e[47]||(e[47]=i("span",{class:"purple mx1"},"Inside",-1)),l(d,{class:"orange"},{default:a(()=>e[46]||(e[46]=[t("mdi mdi-arrow-left")])),_:1})]),_:1}),l(n,{class:"mt4","label-position":"left",outline:""},{default:a(()=>[e[49]||(e[49]=i("span",{class:"green mr1"},"Left",-1)),l(d,{class:"orange"},{default:a(()=>e[48]||(e[48]=[t("mdi mdi-arrow-right")])),_:1})]),_:1}),l(n,{class:"mt4","label-position":"right",outline:""},{default:a(()=>[l(d,{class:"orange"},{default:a(()=>e[50]||(e[50]=[t("mdi mdi-arrow-left")])),_:1}),e[51]||(e[51]=i("span",{class:"red ml1"},"Right",-1))]),_:1})]),_:1}),l(r,{h2:""},{default:a(()=>e[54]||(e[54]=[t("Inner icons")])),_:1}),l(o,null,{pug:a(()=>e[55]||(e[55]=[t(`.title4.mb2 Label outside
w-textarea(label="Message" label-position="left" outline inner-icon-left="mdi mdi-email")
w-textarea.mt4(label="Message" label-position="right" outline inner-icon-right="mdi mdi-email")

.title4.mt6.mb2 Label inside
w-textarea(label="Message" label-position="inside" outline inner-icon-left="mdi mdi-email")
w-textarea.mt4(label="Message" label-position="inside" outline inner-icon-right="mdi mdi-email")`)])),html:a(()=>e[56]||(e[56]=[t(`<div class="title4 mb2">Label outside</div>
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
`)])),default:a(()=>[e[57]||(e[57]=i("div",{class:"title4 mb2"},"Label outside",-1)),l(n,{label:"Message","label-position":"left",outline:"","inner-icon-left":"mdi mdi-email"}),l(n,{class:"mt4",label:"Message","label-position":"right",outline:"","inner-icon-right":"mdi mdi-email"}),e[58]||(e[58]=i("div",{class:"title4 mt6 mb2"},"Label inside",-1)),l(n,{label:"Message","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-email"}),l(n,{class:"mt4",label:"Message","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-email"})]),_:1}),l(r,{h2:""},{default:a(()=>e[59]||(e[59]=[t("Disabled & readonly")])),_:1}),l(o,null,{pug:a(()=>e[60]||(e[60]=[t(`w-textarea.mb4(
  label="Disabled & empty"
  outline
  disabled)
w-textarea.mb4(
  value="Some content"
  label="Disabled & filled"
  outline
  disabled)
w-textarea.mb4(
  label="Readonly & empty"
  outline
  readonly)
w-textarea(
  value="Some content"
  label="Readonly & filled"
  outline
  readonly)`)])),html:a(()=>e[61]||(e[61]=[t(`<w-textarea
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
</w-textarea>`)])),default:a(()=>[l(n,{class:"mb4",label:"Disabled & empty",outline:"",disabled:""}),l(n,{class:"mb4","model-value":"Some content",label:"Disabled & filled",outline:"",disabled:""}),l(n,{class:"mb4",label:"Readonly & empty",outline:"",readonly:""}),l(n,{"model-value":"Some content",label:"Readonly & filled",outline:"",readonly:""})]),_:1})])}const v={},q=x(v,[["render",h]]);function T(u,e,p,r,n,o){const d=s("title-link"),m=s("component-api");return c(),b("div",null,[e[1]||(e[1]=i("div",{class:"w-divider my12"},null,-1)),l(d,{class:"title1",h2:""},{default:a(()=>e[0]||(e[0]=[t("API")])),_:1}),l(m,{class:"mt0",items:o.props,descriptions:u.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(m,{items:u.slots,title:"Slots"},null,8,["items"]),l(m,{items:o.events,title:"Events"},null,8,["items"])])}const y={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the textarea.<br>Gets updated on textarea input.',label:"Sets a visible label for the textarea.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the textarea when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn't overlap.",color:`Applies a color to the textarea's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the textarea's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the textarea's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the textarea.",noAutogrow:"Disables the ability to fit the textarea height to the content.<br>The height will not be smaller than the number of rows set via the <code>rows</code> prop.",resizable:"Allows native resizing of the textarea's height.",tile:"Removes the default border-radius and sets sharp edges on the textarea.",rows:"The default and minimum number of rows to display in the textarea (native HTML attribute).",cols:"Applies the native HTML <code>cols</code> attribute to the textarea (native HTML attribute).",name:"Provide a native HTML <code>name</code> attribute to the textarea. If not provided, a unique name will be computed.",disabled:"Disables the textarea making it unreactive to user interactions.",readonly:"The textarea will still look like an interactive textarea except that it is read-only: its current content cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the textarea.",validators:'<span class="deep-orange">Only for validation, when the textarea is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the textarea. Each function will be executed on textarea   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the textarea.'},L={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},"icon-left":{description:"The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>",params:{inputId:'The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>'}},"icon-right":{description:"The right icon, if the <code>innerIconRight</code> prop is not flexible enough.",params:{inputId:'The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>'}}},k={input:{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textarea value."}},"update:modelValue":{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textarea value."}},focus:{description:"Emitted on textarea focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on textarea blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},D={data:()=>({propsDescs:y,slots:L}),computed:{props(){return{...f.props,...g.props}},events(){return f.emits.reduce((u,e)=>(u[e]=k[e]||{})&&u,{})}}},M=x(D,[["render",T]]);function A(u,e,p,r,n,o){const d=s("ui-component-title"),m=s("examples"),w=s("api");return c(),b("main",null,[l(d,null,{default:a(()=>e[0]||(e[0]=[t("w-textarea")])),_:1}),l(m),l(w)])}const I={components:{Examples:q,Api:M}},E=x(I,[["render",A]]);export{E as default};
