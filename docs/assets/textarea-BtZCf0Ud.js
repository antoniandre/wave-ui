import{H as e,N as t,c as n,d as r,g as i,h as a,k as o}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as s}from"./_plugin-vue_export-helper-S3RvzygF.js";import{t as c}from"./form-elements-Bk29BSHS.js";import{a as l}from"./index-CmUoOmTq.js";function u(s,c){let l=t(`w-alert`),u=t(`title-link`),d=t(`w-textarea`),f=t(`example`),p=t(`w-icon`);return o(),r(`div`,null,[i(l,{info:``},{default:e(()=>[...c[0]||=[n(`div`,{class:`title4`},`Good to know`,-1),n(`p`,{class:`body`},[a(`Any HTML attribute or JavaScript event listeners attached to the component will be applied to the
native textarea element inside the `),n(`strong`,{class:`code inherit`},`w-textarea`),a(` component, except the style
and class attributes which will stay on the wrapper (for convenience and to respect the internal
design of the component).`),n(`br`),a(`
This will allow you to add common HTML attributes (like `),n(`code`,null,`tabindex`),a(`, `),n(`code`,null,`name`),a(`, etc.) and
attach event listeners (like `),n(`code`,null,`@focus`),a(`, `),n(`code`,null,`@keypress`),a(`, etc.) directly to the form field
itself (textarea).
`)],-1)]]),_:1}),i(u,{h2:``},{default:e(()=>[...c[1]||=[a(`Default`,-1)]]),_:1}),c[62]||=n(`p`,null,[a(`By default the `),n(`span`,{class:`code`},`w-textarea`),a(` component has a label inside the textarea that moves up above
the textarea on focus or when the textarea is filled by some content or a placeholder.`),n(`br`),a(`
The default number of rows is 3, and when adding lines the textarea will adjust its size.
`)],-1),i(f,null,{pug:e(()=>[...c[3]||=[a(`w-textarea Label`,-1)]]),html:e(()=>[...c[4]||=[a(`<w-textarea>Label</w-textarea>
`,-1)]]),default:e(()=>[i(d,null,{default:e(()=>[...c[2]||=[a(`Label`,-1)]]),_:1})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[5]||=[a(`Label and / or placeholder`,-1)]]),_:1}),i(f,null,{pug:e(()=>[...c[7]||=[a(`w-textarea Label
w-textarea.mt4(placeholder="Placeholder")
w-textarea.mt4(label="Label" placeholder="Placeholder")`,-1)]]),html:e(()=>[...c[8]||=[a(`<w-textarea>Label</w-textarea>

<w-textarea
  class="mt4"
  placeholder="Placeholder">
</w-textarea>

<w-textarea
  class="mt4"
  label="Label"
  placeholder="Placeholder">
</w-textarea>
`,-1)]]),default:e(()=>[i(d,null,{default:e(()=>[...c[6]||=[a(`Label`,-1)]]),_:1}),i(d,{class:`mt4`,placeholder:`Placeholder`}),i(d,{class:`mt4`,label:`Label`,placeholder:`Placeholder`})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[9]||=[a(`v-model`,-1)]]),_:1}),c[63]||=n(`p`,null,[a(`The value of the textarea can be provided via the `),n(`code`,null,`model-value`),a(` attribute (or `),n(`code`,null,`value`),a(`
for Vue 2) or via `),n(`code`,null,`v-model`),a(` for two-way binding.`),n(`br`),a(`
By default the textarea's height adapts to the content like in this example.
`)],-1),i(f,null,{pug:e(()=>[...c[10]||=[a(`w-textarea(model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\\n\\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\\n\\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\\n\\n\\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\\nObcaecati ea id nobis, ab neque porro iure.\\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?")`,-1)]]),html:e(()=>[...c[11]||=[a(`<w-textarea model-value="Lorem, ipsum dolor sit amet consectetur adipisicing elit.\\n\\nDoloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.\\nSaepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.\\n\\nExpedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.\\nExercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.\\n\\n\\nDucimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?\\nObcaecati ea id nobis, ab neque porro iure.\\nVoluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?"></w-textarea>
`,-1)]]),default:e(()=>[i(d,{"model-value":`Lorem, ipsum dolor sit amet consectetur adipisicing elit.

Doloribus eligendi nobis quos sit, reiciendis molestias voluptates quas tenetur temporibus nihil eius ipsa.
Saepe dolor voluptatem, quam eaque sed maxime numquam? Veniam, quibusdam.

Expedita nostrum sapiente enim dolorem tempore, vero dicta odit nemo facere sed hic exercitationem impedit consequuntur tempora modi.
Exercitationem, ipsa autem deleniti consequatur doloribus dicta incidunt placeat laborum?Soluta similique exercitationem, officiis in dolorum aspernatur voluptatum laudantium neque officia maiores eum voluptate quasi nulla libero repellendus earum quis ullam ratione est at nisi modi maxime commodi.


Ducimus, quam? Dignissimos minima architecto doloremque voluptate maxime dicta laborum facere sapiente quas, tempore iste quos?
Obcaecati ea id nobis, ab neque porro iure.
Voluptates temporibus aliquid, neque id sit commodi consequatur.Totam assumenda, illo fugiat itaque enim dignissimos pariatur aut placeat neque accusantium nemo dicta incidunt unde at esse harum vitae eligendi in maiores dolorum delectus quis dolorem qui beatae! Tenetur?`})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[12]||=[a(`No autogrow & resizable`,-1)]]),_:1}),i(f,null,{pug:e(()=>[...c[15]||=[a(`w-textarea(no-autogrow rows="6") Textarea label
w-textarea.mt4(no-autogrow resizable rows="6") Textarea label`,-1)]]),html:e(()=>[...c[16]||=[a(`<w-textarea
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
`,-1)]]),default:e(()=>[i(d,{"no-autogrow":``,rows:`6`},{default:e(()=>[...c[13]||=[a(`Textarea label`,-1)]]),_:1}),i(d,{class:`mt4`,"no-autogrow":``,resizable:``,rows:`6`},{default:e(()=>[...c[14]||=[a(`Textarea label`,-1)]]),_:1})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[17]||=[a(`Outline`,-1)]]),_:1}),i(f,null,{pug:e(()=>[...c[19]||=[a(`w-textarea(outline) Textarea label`,-1)]]),html:e(()=>[...c[20]||=[a(`<w-textarea outline>Textarea label</w-textarea>
`,-1)]]),default:e(()=>[i(d,{outline:``},{default:e(()=>[...c[18]||=[a(`Textarea label`,-1)]]),_:1})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[21]||=[a(`Shadow`,-1)]]),_:1}),i(f,null,{pug:e(()=>[...c[24]||=[a(`w-textarea(shadow) Textarea label
w-textarea.mt4(outline shadow) Textarea label`,-1)]]),html:e(()=>[...c[25]||=[a(`<w-textarea shadow>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline shadow>
  Textarea label
</w-textarea>
`,-1)]]),default:e(()=>[i(d,{shadow:``},{default:e(()=>[...c[22]||=[a(`Textarea label`,-1)]]),_:1}),i(d,{class:`mt4`,outline:``,shadow:``},{default:e(()=>[...c[23]||=[a(`Textarea label`,-1)]]),_:1})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[26]||=[a(`Tile`,-1)]]),_:1}),i(f,null,{pug:e(()=>[...c[29]||=[a(`w-textarea(tile) Textarea label
w-textarea.mt4(outline tile) Textarea label`,-1)]]),html:e(()=>[...c[30]||=[a(`<w-textarea tile>
  Textarea label
</w-textarea>

<w-textarea class="mt4" outline tile>
  Textarea label
</w-textarea>
`,-1)]]),default:e(()=>[i(d,{tile:``},{default:e(()=>[...c[27]||=[a(`Textarea label`,-1)]]),_:1}),i(d,{class:`mt4`,outline:``,tile:``},{default:e(()=>[...c[28]||=[a(`Textarea label`,-1)]]),_:1})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[31]||=[a(`Colors`,-1)]]),_:1}),c[64]||=n(`p`,{class:`mb4`},[a(`Like in most components, you can set a `),n(`code`,null,`color`),a(` for the text and a `),n(`code`,null,`bg-color`),a(` for the
background.`),n(`br`),a(`
By default, the text has the "`),n(`span`,{class:`code`},`primary`),a(`" color.`)],-1),i(f,null,{pug:e(()=>[...c[36]||=[a(`w-textarea(color="blue") Textarea label
w-textarea.mt4(outline color="blue") Textarea label
w-textarea.mt4(bg-color="blue-light5" color="blue-dark3") Textarea label
w-textarea.mt4(outline bg-color="blue-light5" color="blue-dark3") Textarea label`,-1)]]),html:e(()=>[...c[37]||=[a(`<w-textarea color="blue">
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
`,-1)]]),default:e(()=>[i(d,{color:`blue`},{default:e(()=>[...c[32]||=[a(`Textarea label`,-1)]]),_:1}),i(d,{class:`mt4`,outline:``,color:`blue`},{default:e(()=>[...c[33]||=[a(`Textarea label`,-1)]]),_:1}),i(d,{class:`mt4`,"bg-color":`blue-light5`,color:`blue-dark3`},{default:e(()=>[...c[34]||=[a(`Textarea label`,-1)]]),_:1}),i(d,{class:`mt4`,outline:``,"bg-color":`blue-light5`,color:`blue-dark3`},{default:e(()=>[...c[35]||=[a(`Textarea label`,-1)]]),_:1})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[38]||=[a(`Label position`,-1)]]),_:1}),c[65]||=n(`p`,null,`By default the label is positioned inside, you can also place it on the left or right outside of
the textarea.`,-1),i(f,null,{pug:e(()=>[...c[42]||=[a(`w-textarea(outline) Label inside
w-textarea.mt4(outline label-position="left") Label left
w-textarea.mt4(outline label-position="right") Label right`,-1)]]),html:e(()=>[...c[43]||=[a(`<w-textarea outline>Label inside</w-textarea>

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
`,-1)]]),default:e(()=>[i(d,{outline:``},{default:e(()=>[...c[39]||=[a(`Label inside`,-1)]]),_:1}),i(d,{class:`mt4`,outline:``,"label-position":`left`},{default:e(()=>[...c[40]||=[a(`Label left`,-1)]]),_:1}),i(d,{class:`mt4`,outline:``,"label-position":`right`},{default:e(()=>[...c[41]||=[a(`Label right`,-1)]]),_:1})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[44]||=[a(`Custom label via default slot`,-1)]]),_:1}),c[66]||=n(`p`,null,[a(`It is convenient to have the label inside the `),n(`span`,{class:`code`},`w-textarea`),a(` component to let it handle
the field focus event on label click.`),n(`br`),a(`
The `),n(`span`,{class:`code`},`label`),a(` prop accepts any HTML, but because passing complex html via a prop is not fun,
there is also a prop for setting the label wish will grant more freedom.
`)],-1),i(f,null,{pug:e(()=>[...c[52]||=[a(`w-textarea(label-position="inside" outline)
  w-icon.orange mdi mdi-arrow-right
  span.purple.mx1 Inside
  w-icon.orange mdi mdi-arrow-left
w-textarea.mt4(label-position="left" outline)
  span.green.mr1 Left
  w-icon.orange mdi mdi-arrow-right
w-textarea.mt4(label-position="right" outline)
  w-icon.orange mdi mdi-arrow-left
  span.red.ml1 Right`,-1)]]),html:e(()=>[...c[53]||=[a(`<w-textarea label-position="inside" outline>
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
`,-1)]]),default:e(()=>[i(d,{"label-position":`inside`,outline:``},{default:e(()=>[i(p,{class:`orange`},{default:e(()=>[...c[45]||=[a(`mdi mdi-arrow-right`,-1)]]),_:1}),c[47]||=n(`span`,{class:`purple mx1`},`Inside`,-1),i(p,{class:`orange`},{default:e(()=>[...c[46]||=[a(`mdi mdi-arrow-left`,-1)]]),_:1})]),_:1}),i(d,{class:`mt4`,"label-position":`left`,outline:``},{default:e(()=>[c[49]||=n(`span`,{class:`green mr1`},`Left`,-1),i(p,{class:`orange`},{default:e(()=>[...c[48]||=[a(`mdi mdi-arrow-right`,-1)]]),_:1})]),_:1}),i(d,{class:`mt4`,"label-position":`right`,outline:``},{default:e(()=>[i(p,{class:`orange`},{default:e(()=>[...c[50]||=[a(`mdi mdi-arrow-left`,-1)]]),_:1}),c[51]||=n(`span`,{class:`red ml1`},`Right`,-1)]),_:1})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[54]||=[a(`Inner icons`,-1)]]),_:1}),i(f,null,{pug:e(()=>[...c[55]||=[a(`.title4.mb2 Label outside
w-textarea(label="Message" label-position="left" outline inner-icon-left="mdi mdi-email")
w-textarea.mt4(label="Message" label-position="right" outline inner-icon-right="mdi mdi-email")

.title4.mt6.mb2 Label inside
w-textarea(label="Message" label-position="inside" outline inner-icon-left="mdi mdi-email")
w-textarea.mt4(label="Message" label-position="inside" outline inner-icon-right="mdi mdi-email")`,-1)]]),html:e(()=>[...c[56]||=[a(`<div class="title4 mb2">Label outside</div>
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
`,-1)]]),default:e(()=>[c[57]||=n(`div`,{class:`title4 mb2`},`Label outside`,-1),i(d,{label:`Message`,"label-position":`left`,outline:``,"inner-icon-left":`mdi mdi-email`}),i(d,{class:`mt4`,label:`Message`,"label-position":`right`,outline:``,"inner-icon-right":`mdi mdi-email`}),c[58]||=n(`div`,{class:`title4 mt6 mb2`},`Label inside`,-1),i(d,{label:`Message`,"label-position":`inside`,outline:``,"inner-icon-left":`mdi mdi-email`}),i(d,{class:`mt4`,label:`Message`,"label-position":`inside`,outline:``,"inner-icon-right":`mdi mdi-email`})]),_:1}),i(u,{h2:``},{default:e(()=>[...c[59]||=[a(`Disabled & readonly`,-1)]]),_:1}),i(f,null,{pug:e(()=>[...c[60]||=[a(`w-textarea.mb4(
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
  readonly)`,-1)]]),html:e(()=>[...c[61]||=[a(`<w-textarea
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
</w-textarea>`,-1)]]),default:e(()=>[i(d,{class:`mb4`,label:`Disabled & empty`,outline:``,disabled:``}),i(d,{class:`mb4`,"model-value":`Some content`,label:`Disabled & filled`,outline:``,disabled:``}),i(d,{class:`mb4`,label:`Readonly & empty`,outline:``,readonly:``}),i(d,{"model-value":`Some content`,label:`Readonly & filled`,outline:``,readonly:``})]),_:1})])}var d=s({},[[`render`,u]]);function f(s,c,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:e(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var p={modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>The text content of the textarea.<br>Gets updated on textarea input.`,label:`Sets a visible label for the textarea.`,labelPosition:`Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.`,innerIconLeft:`Adds an icon on the left inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,innerIconRight:`Adds an icon on the right inside the textarea.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.`,staticLabel:`Prevents moving the label above the textarea when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.`,placeholder:`Provide a placeholder for the textarea. If a label is positioned inside, it will be moved above the textarea so it doesn't overlap.`,color:`Applies a color to the textarea's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,labelColor:`Applies a specific color to the textarea's label. Note that on validation failure, the validation-color takes precedence.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the textarea's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,dark:!1,outline:`The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.`,shadow:`Applies a drop shadow to the textarea.`,noAutogrow:`Disables the ability to fit the textarea height to the content.<br>The height will not be smaller than the number of rows set via the <code>rows</code> prop.`,resizable:`Allows native resizing of the textarea's height.`,tile:`Removes the default border-radius and sets sharp edges on the textarea.`,rows:`The default and minimum number of rows to display in the textarea (native HTML attribute).`,cols:`Applies the native HTML <code>cols</code> attribute to the textarea (native HTML attribute).`,name:`Provide a native HTML <code>name</code> attribute to the textarea. If not provided, a unique name will be computed.`,disabled:`Disables the textarea making it unreactive to user interactions.`,readonly:`The textarea will still look like an interactive textarea except that it is read-only: its current content cannot be changed by user interaction.`,required:`Applies the native HTML <code>required</code> attribute to the textarea.`,validators:`<span class="deep-orange">Only for validation, when the textarea is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the textarea. Each function will be executed on textarea   validation and should return <code>true</code> when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the textarea.`},m={default:{description:`The label content, if the <code>label</code> prop is not flexible enough.`},"icon-left":{description:`The left icon, if the <code>innerIconLeft</code> prop is not flexible enough.<br/>`,params:{inputId:`The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>`}},"icon-right":{description:`The right icon, if the <code>innerIconRight</code> prop is not flexible enough.`,params:{inputId:`The <code>id</code> of the associated input. If your slot uses a label you can have it activate the input like so: <code>&lt;label :for="inputId"&gt;</code>`}}},h={input:{description:`Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[String]":`The new textarea value.`}},"update:modelValue":{description:`Emitted each time the textarea text changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[String]":`The new textarea value.`}},focus:{description:`Emitted on textarea focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}},blur:{description:`Emitted on textarea blur.`,params:{"[DOM event object]":`The associated blur DOM event.`}},"click:inner-icon-left":{description:`Emitted on click of the left inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}},"click:inner-icon-right":{description:`Emitted on click of the right inner icon, if any.`,params:{"[DOM event object]":`The associated click DOM event.`}}},g=s({data:()=>({propsDescs:p,slots:m}),computed:{props(){return{...l.props,...c.props}},events(){return l.emits.reduce((e,t)=>(e[t]=h[t]||{})&&e,{})}}},[[`render`,f]]);function _(n,s,c,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return o(),r(`main`,null,[i(f,null,{default:e(()=>[...s[0]||=[a(`w-textarea`,-1)]]),_:1}),i(p),i(m)])}var v=s({components:{Examples:d,Api:g}},[[`render`,_]]);export{v as default};