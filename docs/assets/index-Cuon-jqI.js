import{r as s,o as p,g as b,a,w as t,b as e,d as n,_ as h,ad as x,E as w}from"./index-DmbSWeYz.js";const g=n("div",{class:"title4"},"Good to know",-1),v=n("p",{class:"body"},[e(`Any HTML attribute or JavaScript event listeners attached to the component will be applied to the
native textarea element inside the `),n("strong",{class:"code inherit"},"w-textarea"),e(` component, except the style
and class attributes which will stay on the wrapper (for convenience and to respect the internal
design of the component).`),n("br"),e(`
This will allow you to add common HTML attributes (like `),n("code",null,"tabindex"),e(", "),n("code",null,"name"),e(`, etc.) and
attach event listeners (like `),n("code",null,"@focus"),e(", "),n("code",null,"@keypress"),e(`, etc.) directly to the form field
itself (textarea).
`)],-1),_=n("p",null,[e("By default the "),n("span",{class:"code"},"w-textarea"),e(` component has a label inside the textarea that moves up above
the textarea on focus or when the textarea is filled by some content or a placeholder.`),n("br"),e(`
The default number of rows is 3, and when adding lines the textarea will adjust its size.
`)],-1),q=n("p",null,[e("The value of the textarea can be provided via the "),n("code",null,"model-value"),e(" attribute (or "),n("code",null,"value"),e(`
for Vue 2) or via `),n("code",null,"v-model"),e(" for two-way binding."),n("br"),e(`
By default the textarea's height adapts to the content like in this example.
`)],-1),T=n("p",{class:"mb4"},[e("Like in most components, you can set a "),n("code",null,"color"),e(" for the text and a "),n("code",null,"bg-color"),e(` for the
background.`),n("br"),e(`
By default, the text has the "`),n("span",{class:"code"},"primary"),e('" color.')],-1),y=n("p",null,`By default the label is positioned inside, you can also place it on the left or right outside of
the textarea.`,-1),L=n("p",null,[e("It is convenient to have the label inside the "),n("span",{class:"code"},"w-textarea"),e(` component to let it handle
the field focus event on label click.`),n("br"),e(`
The `),n("span",{class:"code"},"label"),e(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),k=n("span",{class:"purple mx1"},"Inside",-1),D=n("span",{class:"green mr1"},"Left",-1),M=n("span",{class:"red ml1"},"Right",-1),A=n("div",{class:"title4 mb2"},"Label outside",-1),I=n("div",{class:"title4 mt6 mb2"},"Label inside",-1);function S(d,u){const m=s("w-alert"),o=s("title-link"),l=s("w-textarea"),i=s("example"),r=s("w-icon");return p(),b("div",null,[a(m,{info:""},{default:t(()=>[g,v]),_:1}),a(o,{h2:""},{default:t(()=>[e("Default")]),_:1}),_,a(i,null,{pug:t(()=>[e("w-textarea Label")]),html:t(()=>[e(`<w-textarea>Label</w-textarea>
`)]),default:t(()=>[a(l,null,{default:t(()=>[e("Label")]),_:1})]),_:1}),a(o,{h2:""},{default:t(()=>[e("Label and / or placeholder")]),_:1}),a(i,null,{pug:t(()=>[e(`w-textarea Label
w-textarea.mt4(placeholder="Placeholder")
w-textarea.mt4(label="Label" placeholder="Placeholder")`)]),html:t(()=>[e(`<w-textarea>Label</w-textarea>

<w-textarea
  class="mt4"
  placeholder="Placeholder">
</w-textarea>

<w-textarea
  class="mt4"
  label="Label"
  placeholder="Placeholder">
</w-textarea>
`)]),default:t(()=>[a(l,null,{default:t(()=>[e("Label")]),_:1}),a(l,{class:"mt4",placeholder:"Placeholder"}),a(l,{class:"mt4",label:"Label",placeholder:"Placeholder"})]),_:1}),a(o,{h2:""},{default:t(()=>[e("v-model")]),_:1}),q,a(i,null,{pug:t(()=>[e('w-textarea(model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\\n\\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\\n\\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\\n\\n\\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\\nObcaecati ea id nobis, ab neque porro iure.\\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?")')]),html:t(()=>[e(`<w-textarea model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\\n\\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\\n\\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\\n\\n\\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\\nObcaecati ea id nobis, ab neque porro iure.\\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?"></w-textarea>
`)]),default:t(()=>[a(l,{"model-value":`Lorem, ipsum dolor sit amet consectetur adipisicing elit.

Doloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.
Saepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.

Expedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.
Exercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.


Ducimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?
Obcaecati ea id nobis, ab neque porro iure.
Voluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?`})]),_:1}),a(o,{h2:""},{default:t(()=>[e("No autogrow & resizable")]),_:1}),a(i,null,{pug:t(()=>[e(`w-textarea(no-autogrow rows="6") Textarea label
w-textarea.mt4(no-autogrow resizable rows="6") Textarea label`)]),html:t(()=>[e(`<w-textarea
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
`)]),default:t(()=>[a(l,{"no-autogrow":"",rows:"6"},{default:t(()=>[e("Textarea label")]),_:1}),a(l,{class:"mt4","no-autogrow":"",resizable:"",rows:"6"},{default:t(()=>[e("Textarea label")]),_:1})]),_:1}),a(o,{h2:""},{default:t(()=>[e("Outline")]),_:1}),a(i,null,{pug:t(()=>[e("w-textarea(outline) Textarea label")]),html:t(()=>[e(`<w-textarea outline>Textarea label</w-textarea>
`)]),default:t(()=>[a(l,{outline:""},{default:t(()=>[e("Textarea label")]),_:1})]),_:1}),a(o,{h2:""},{default:t(()=>[e("Shadow")]),_:1}),a(i,null,{pug:t(()=>[e(`w-textarea(shadow) Textarea label
w-textarea.mt4(outline shadow) Textarea label`)]),html:t(()=>[e(`<w-textarea shadow>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline shadow>
  Textarea label
</w-textarea>
`)]),default:t(()=>[a(l,{shadow:""},{default:t(()=>[e("Textarea label")]),_:1}),a(l,{class:"mt4",outline:"",shadow:""},{default:t(()=>[e("Textarea label")]),_:1})]),_:1}),a(o,{h2:""},{default:t(()=>[e("Tile")]),_:1}),a(i,null,{pug:t(()=>[e(`w-textarea(tile) Textarea label
w-textarea.mt4(outline tile) Textarea label`)]),html:t(()=>[e(`<w-textarea tile>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline tile>
  Textarea label
</w-textarea>
`)]),default:t(()=>[a(l,{tile:""},{default:t(()=>[e("Textarea label")]),_:1}),a(l,{class:"mt4",outline:"",tile:""},{default:t(()=>[e("Textarea label")]),_:1})]),_:1}),a(o,{h2:""},{default:t(()=>[e("Colors")]),_:1}),T,a(i,null,{pug:t(()=>[e(`w-textarea(color="blue") Textarea label
w-textarea.mt4(outline color="blue") Textarea label
w-textarea.mt4(bg-color="blue-light5" color="blue-dark3") Textarea label
w-textarea.mt4(outline bg-color="blue-light5" color="blue-dark3") Textarea label`)]),html:t(()=>[e(`<w-textarea color="blue">
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
`)]),default:t(()=>[a(l,{color:"blue"},{default:t(()=>[e("Textarea label")]),_:1}),a(l,{class:"mt4",outline:"",color:"blue"},{default:t(()=>[e("Textarea label")]),_:1}),a(l,{class:"mt4","bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[e("Textarea label")]),_:1}),a(l,{class:"mt4",outline:"","bg-color":"blue-light5",color:"blue-dark3"},{default:t(()=>[e("Textarea label")]),_:1})]),_:1}),a(o,{h2:""},{default:t(()=>[e("Label position")]),_:1}),y,a(i,null,{pug:t(()=>[e(`w-textarea(outline) Label inside
w-textarea.mt4(outline label-position="left") Label left
w-textarea.mt4(outline label-position="right") Label right`)]),html:t(()=>[e(`<w-textarea outline>Label inside</w-textarea>

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
`)]),default:t(()=>[a(l,{outline:""},{default:t(()=>[e("Label inside")]),_:1}),a(l,{class:"mt4",outline:"","label-position":"left"},{default:t(()=>[e("Label left")]),_:1}),a(l,{class:"mt4",outline:"","label-position":"right"},{default:t(()=>[e("Label right")]),_:1})]),_:1}),a(o,{h2:""},{default:t(()=>[e("Custom label via default slot")]),_:1}),L,a(i,null,{pug:t(()=>[e(`w-textarea(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-textarea.mt4(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-textarea.mt4(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`)]),html:t(()=>[e(`<w-textarea label-position="inside" outline>
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
`)]),default:t(()=>[a(l,{"label-position":"inside",outline:""},{default:t(()=>[a(r,{class:"orange"},{default:t(()=>[e("mdi mdi-arrow-right")]),_:1}),k,a(r,{class:"orange"},{default:t(()=>[e("mdi mdi-arrow-left")]),_:1})]),_:1}),a(l,{class:"mt4","label-position":"left",outline:""},{default:t(()=>[D,a(r,{class:"orange"},{default:t(()=>[e("mdi mdi-arrow-right")]),_:1})]),_:1}),a(l,{class:"mt4","label-position":"right",outline:""},{default:t(()=>[a(r,{class:"orange"},{default:t(()=>[e("mdi mdi-arrow-left")]),_:1}),M]),_:1})]),_:1}),a(o,{h2:""},{default:t(()=>[e("Inner icons")]),_:1}),a(i,null,{pug:t(()=>[e(`.title4.mb2 Label outside
w-textarea(label="Message" label-position="left" outline inner-icon-left="mdi mdi-email")
w-textarea.mt4(label="Message" label-position="right" outline inner-icon-right="mdi mdi-email")

.title4.mt6.mb2 Label inside
w-textarea(label="Message" label-position="inside" outline inner-icon-left="mdi mdi-email")
w-textarea.mt4(label="Message" label-position="inside" outline inner-icon-right="mdi mdi-email")`)]),html:t(()=>[e(`<div class="title4 mb2">Label outside</div>
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
`)]),default:t(()=>[A,a(l,{label:"Message","label-position":"left",outline:"","inner-icon-left":"mdi mdi-email"}),a(l,{class:"mt4",label:"Message","label-position":"right",outline:"","inner-icon-right":"mdi mdi-email"}),I,a(l,{label:"Message","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-email"}),a(l,{class:"mt4",label:"Message","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-email"})]),_:1}),a(o,{h2:""},{default:t(()=>[e("Disabled & readonly")]),_:1}),a(i,null,{pug:t(()=>[e(`w-textarea.mb4(
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
  readonly)`)]),html:t(()=>[e(`<w-textarea
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
</w-textarea>`)]),default:t(()=>[a(l,{class:"mb4",label:"Disabled & empty",outline:"",disabled:""}),a(l,{class:"mb4","model-value":"Some content",label:"Disabled & filled",outline:"",disabled:""}),a(l,{class:"mb4",label:"Readonly & empty",outline:"",readonly:""}),a(l,{"model-value":"Some content",label:"Readonly & filled",outline:"",readonly:""})]),_:1})])}const E={},P=h(E,[["render",S]]),V=n("div",{class:"w-divider my12"},null,-1);function O(d,u,m,o,l,i){const r=s("title-link"),c=s("component-api");return p(),b("div",null,[V,a(r,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),a(c,{class:"mt0",items:i.props,descriptions:d.propsDescs,title:"Props"},null,8,["items","descriptions"]),a(c,{items:d.slots,title:"Slots"},null,8,["items"]),a(c,{items:i.events,title:"Events"},null,8,["items"])])}const R={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the textarea.<br>Gets updated on textarea input.',label:"Sets a visible label for the textarea.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the textarea when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn't overlap.",color:`Applies a color to the textarea's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the textarea's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the textarea's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",shadow:"Applies a drop shadow to the textarea.",noAutogrow:"Disables the ability to fit the textarea height to the content.<br>The height will not be smaller than the number of rows set via the <code>rows</code> prop.",resizable:"Allows native resizing of the textarea's height.",tile:"Removes the default border-radius and sets sharp edges on the textarea.",rows:"The default and minimum number of rows to display in the textarea (native HTML attribute).",cols:"Applies the native HTML <code>cols</code> attribute to the textarea (native HTML attribute).",name:"Provide a native HTML <code>name</code> attribute to the textarea. If not provided, a unique name will be computed.",disabled:"Disables the textarea making it unreactive to user interactions.",readonly:"The textarea will still look like an interactive textarea except that it is read-only: its current content cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the textarea.",validators:'<span class="deep-orange">Only for validation, when the textarea is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the textarea. Each function will be executed on textarea   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the textarea.'},$={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."},"icon-left":{description:"The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>",params:{inputId:'The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>'}},"icon-right":{description:"The right icon, if the <code>innerIconRight</code> prop is not flexible enough.",params:{inputId:'The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>'}}},H={input:{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textarea value."}},"update:modelValue":{description:"Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textarea value."}},focus:{description:"Emitted on textarea focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on textarea blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},z={data:()=>({propsDescs:R,slots:$}),computed:{props(){return{...x.props,...w.props}},events(){return x.emits.reduce((d,u)=>(d[u]=H[u]||{})&&d,{})}}},B=h(z,[["render",O]]);function C(d,u,m,o,l,i){const r=s("ui-component-title"),c=s("examples"),f=s("api");return p(),b("main",null,[a(r,null,{default:t(()=>[e("w-textarea")]),_:1}),a(c),a(f)])}const N={components:{Examples:P,Api:B}},W=h(N,[["render",C]]);export{W as default};
