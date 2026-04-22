import{H as e,N as t,c as n,d as r,g as i,h as a,k as o,m as s}from"./runtime-core.esm-bundler-DPe36P4s.js";import{t as c}from"./_plugin-vue_export-helper-S3RvzygF.js";import{B as l}from"./index-D1jKshrg.js";import{t as u}from"./chunk-NAVWDHVN-DSO01vmb.js";function d(c,l,u,d,f,p){let m=t(`alert`),h=t(`title-link`),g=t(`w-autocomplete`),_=t(`example`);return o(),r(`div`,null,[i(m,{info:``},{default:e(()=>[...l[0]||=[n(`div`,{class:`title3`},`Caveat:`,-1),n(`p`,null,[a(`The `),n(`strong`,{class:`code`},`w-autocomplete`),a(` component is mounted in place in the DOM. At the moment
there is no option to teleport it elsewhere, so if the parent has hidden overflow, the
autocomplete selection menu may be cut. If you need this feature, please open an issue.
`)],-1)]]),_:1}),i(h,{h2:``},{default:e(()=>[...l[1]||=[a(`Default`,-1)]]),_:1}),l[9]||=s(`<p>In this example we can look for a chemical element in the list and select it.</p><p>One obvious advantage of the Wave UI autocomplete is the fact that you can provide a different
searchable string than the final label to display.</p><p>For instance, in this example you can look for elements by their name, like literally &quot;Sodium&quot;,
but you can also type the atomic number or symbol to find it.</p><p>you can try these interesting matches (for their symbol is not found in their name string):</p><div class="w-flex gap3"><div class="text-center"><div class="element"><div class="title1 mt7 symbol code">Na</div><div class="number code">11</div></div><div class="primary mt1">Sodium</div></div><div class="text-center"><div class="element"><div class="title1 mt7 symbol code">Mg</div><div class="number code">12</div></div><div class="primary mt1">Magnesium</div></div><div class="text-center"><div class="element"><div class="title1 mt7 symbol code">Cr</div><div class="number code">24</div></div><div class="primary mt1">Chromium</div></div></div>`,5),i(_,{"content-class":`py12`,"blank-codepen":[`js`]},{pug:e(()=>[...l[2]||=[a(`w-autocomplete.mb12(:items="chemicalElement")`,-1)]]),html:e(()=>[...l[3]||=[a(`<w-autocomplete :items="chemicalElement" class="mb12">
</w-autocomplete>`,-1)]]),js:e(()=>[...l[4]||=[a(`import { faker } from '@faker-js/faker'

const app = Vue.createApp({
  data: () => ({
    chemicalElement: faker.definitions.science.chemical_element.map(element => {
      return {
        value: element.symbol,
        label: element.name,
        searchable: \`\${element.symbol}, \${element.name}, \${element.atomicNumber}\`
      }
    })
  })
})

app.use(WaveUI)
app.mount('#app')
`,-1)]]),default:e(()=>[i(g,{class:`mb12`,items:c.chemicalElement},null,8,[`items`])]),_:1}),i(h,{h2:``},{default:e(()=>[...l[5]||=[a(`Placeholder`,-1)]]),_:1}),i(_,{"content-class":`py12`,"blank-codepen":[`js`]},{pug:e(()=>[...l[6]||=[a(`w-autocomplete.mb12(:items="chemicalElement" placeholder="select an element")`,-1)]]),html:e(()=>[...l[7]||=[a(`<w-autocomplete
  :items="chemicalElement"
  placeholder="select an element"
  class="mb12">
</w-autocomplete>`,-1)]]),js:e(()=>[...l[8]||=[a(`import { faker } from '@faker-js/faker'

const app = Vue.createApp({
  data: () => ({
    chemicalElement: faker.definitions.science.chemical_element.map(element => {
      return {
        value: element.symbol,
        label: element.name,
        searchable: \`\${element.symbol}, \${element.name}, \${element.atomicNumber}\`
      }
    })
  })
})

app.use(WaveUI)
app.mount('#app')`,-1)]]),default:e(()=>[i(g,{class:`mb12`,items:c.chemicalElement,placeholder:`select an element`},null,8,[`items`])]),_:1})])}var f=c({data:()=>({chemicalElement:u.definitions.science.chemical_element.map(e=>({value:e.symbol,label:e.name,searchable:`${e.symbol}, ${e.name}, ${e.atomicNumber}`}))})},[[`render`,d]]);function p(s,c,l,u,d,f){let p=t(`title-link`),m=t(`component-api`);return o(),r(`div`,null,[c[1]||=n(`div`,{class:`w-divider my12`},null,-1),i(p,{class:`title1`,h2:``},{default:e(()=>[...c[0]||=[a(`API`,-1)]]),_:1}),i(m,{class:`mt0`,items:f.props,descriptions:s.propsDescs,title:`Props`},null,8,[`items`,`descriptions`]),i(m,{items:s.slots,title:`Slots`},null,8,[`items`]),i(m,{items:f.events,title:`Events`},null,8,[`items`])])}var m={allowDuplicates:`Allow duplicates`,itemLabelKey:`Specifies the name of the property in each item object where to find the item's label string to display.`,itemSearchableKey:`Specifies the name of the property in each item object where to find the item's searchable string. This may be an aggregation of multiple item properties that may be invisible but still useful in the search.`,itemValueKey:`Specifies the property name in each item object where to find the value of the item.`,items:`Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.`,modelValue:`<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the autocomplete.<br>Gets updated on item selection/unselection.`,multiple:`Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.`,noMatch:`A string to display as a menu message when there is no match for the current keyword in the list of options.`,openOnKeydown:`Open the dropdown menu on keydown (when the autocomplete has the focus).`,placeholder:`Provide a placeholder for the autocomplete, to display when no keyword is entered and there is no selection.`},h={"no-match":{description:`Provide a custom "No match" HTML message to display in the selection menu when there is no match.<br>Default message is <code>No match.</code>.`},selection:{description:`Provide a custom selection content/layout to display in each selection pill when one or multiple items are selected.`},item:{description:`Provide a custom content/layout for each item of the dropdown menu.`},"extra-item":{description:`Provide a custom content to display as an extra item of the dropdown menu, after the other options.`}},g={input:{description:`Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.`,params:{"[Array, Mixed value]":`The new selected value(s). Array of values if <code>multiple</code> is set to <code>true</code>, or single value otherwise. The value refers to the value key of the selected item.`}},"update:modelValue":{description:`Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.`,params:{"[Array, Mixed value]":`The new selected value(s). Array of values if <code>multiple</code> is set to <code>true</code>, or single value otherwise. The value refers to the value key of the selected item.`}},focus:{description:`Emitted on autocomplete focus.`,params:{"[DOM event object]":`The associated focus DOM event.`}},blur:{description:`Emitted on autocomplete blur.`,params:{"[DOM event object]":`The associated blur DOM event.`}},"item-click":{description:`Emitted on autocomplete list item click.`,params:{"[Object]":`The clicked item object.`}},"item-select":{description:`Emitted on list item select (click or <kbd>enter</kbd> keydown).`,params:{"[Object]":`The selected item object.`}}},_=c({data:()=>({propsDescs:m,slots:h}),computed:{props(){return l.props},events(){return l.emits.reduce((e,t)=>(e[t]=g[t]||{})&&e,{})}}},[[`render`,p]]);function v(n,s,c,l,u,d){let f=t(`ui-component-title`),p=t(`examples`),m=t(`api`);return o(),r(`main`,null,[i(f,{slug:`w-autocomplete`,"in-progress":``},{default:e(()=>[...s[0]||=[a(`w-autocomplete`,-1)]]),_:1}),i(p),i(m)])}var y=c({components:{Examples:f,Api:_}},[[`render`,v]]);export{y as default};