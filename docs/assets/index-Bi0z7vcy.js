import{f as w}from"./chunk-IHAWQA3S-C2e_0_q3.js";import{r as i,g as p,o as d,a as o,h as g,w as n,b as r,e as s,_ as u,y}from"./index-B6QByf_F.js";function k(t,e,h,f,v,m){const a=i("alert"),l=i("title-link"),c=i("w-autocomplete"),b=i("example");return d(),p("div",null,[o(a,{info:""},{default:n(()=>e[0]||(e[0]=[r("div",{class:"title3"},"Caveat:",-1),r("p",null,[s("The "),r("strong",{class:"code"},"w-autocomplete"),s(` component is mounted in place in the DOM. At the moment
there is no option to teleport it elsewhere, so if the parent has hidden overflow, the
autocomplete selection menu may be cut. If you need this feature, please open an issue.
`)],-1)])),_:1}),o(l,{h2:""},{default:n(()=>e[1]||(e[1]=[s("Default")])),_:1}),e[9]||(e[9]=g(`<p>In this example we can look for a chemical element in the list and select it.</p><p>One obvious advantage of the Wave UI autocomplete is the fact that you can provide a different
searchable string than the final label to display.</p><p>For instance, in this example you can look for elements by their name, like literally &quot;Sodium&quot;,
but you can also type the atomic number or symbol to find it.</p><p>you can try these interesting matches (for their symbol is not found in their name string):</p><div class="w-flex gap3"><div class="text-center"><div class="element"><div class="title1 mt7 symbol code">Na</div><div class="number code">11</div></div><div class="primary mt1">Sodium</div></div><div class="text-center"><div class="element"><div class="title1 mt7 symbol code">Mg</div><div class="number code">12</div></div><div class="primary mt1">Magnesium</div></div><div class="text-center"><div class="element"><div class="title1 mt7 symbol code">Cr</div><div class="number code">24</div></div><div class="primary mt1">Chromium</div></div></div>`,5)),o(b,{"content-class":"py12","blank-codepen":["js"]},{pug:n(()=>e[2]||(e[2]=[s('w-autocomplete.mb12(:items="chemicalElement")')])),html:n(()=>e[3]||(e[3]=[s(`<w-autocomplete :items="chemicalElement" class="mb12">
</w-autocomplete>`)])),js:n(()=>e[4]||(e[4]=[s(`import { faker } from '@faker-js/faker'

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
`)])),default:n(()=>[o(c,{class:"mb12",items:t.chemicalElement},null,8,["items"])]),_:1}),o(l,{h2:""},{default:n(()=>e[5]||(e[5]=[s("Placeholder")])),_:1}),o(b,{"content-class":"py12","blank-codepen":["js"]},{pug:n(()=>e[6]||(e[6]=[s('w-autocomplete.mb12(:items="chemicalElement" placeholder="select an element")')])),html:n(()=>e[7]||(e[7]=[s(`<w-autocomplete
  :items="chemicalElement"
  placeholder="select an element"
  class="mb12">
</w-autocomplete>`)])),js:n(()=>e[8]||(e[8]=[s(`import { faker } from '@faker-js/faker'

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
app.mount('#app')`)])),default:n(()=>[o(c,{class:"mb12",items:t.chemicalElement,placeholder:"select an element"},null,8,["items"])]),_:1})])}const $={data:()=>({chemicalElement:w.definitions.science.chemical_element.map(t=>({value:t.symbol,label:t.name,searchable:`${t.symbol}, ${t.name}, ${t.atomicNumber}`}))})},x=u($,[["render",k]]);function E(t,e,h,f,v,m){const a=i("title-link"),l=i("component-api");return d(),p("div",null,[e[1]||(e[1]=r("div",{class:"w-divider my12"},null,-1)),o(a,{class:"title1",h2:""},{default:n(()=>e[0]||(e[0]=[s("API")])),_:1}),o(l,{class:"mt0",items:m.props,descriptions:t.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(l,{items:t.slots,title:"Slots"},null,8,["items"]),o(l,{items:m.events,title:"Events"},null,8,["items"])])}const _={allowDuplicates:"Allow duplicates",itemLabelKey:"Specifies the name of the property in each item object where to find the item's label string to display.",itemSearchableKey:"Specifies the name of the property in each item object where to find the item's searchable string. This may be an aggregation of multiple item properties that may be invisible but still useful in the search.",itemValueKey:"Specifies the property name in each item object where to find the value of the item.",items:"Expecting an array of objects. Each object being a select list item, it should include at least a <code>label</code> attribute.",modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>The current selection of the autocomplete.<br>Gets updated on item selection/unselection.',multiple:"Allows multiple selections. When set to <code>true</code>, the list of choices will stay open after selecting an item.",noMatch:"A string to display as a menu message when there is no match for the current keyword in the list of options.",openOnKeydown:"Open the dropdown menu on keydown (when the autocomplete has the focus).",placeholder:"Provide a placeholder for the autocomplete, to display when no keyword is entered and there is no selection."},j={"no-match":{description:'Provide a custom "No match" HTML message to display in the selection menu when there is no match.<br>Default message is <code>No match.</code>.'},selection:{description:"Provide a custom selection content/layout to display in each selection pill when one or multiple items are selected."},item:{description:"Provide a custom content/layout for each item of the dropdown menu."},"extra-item":{description:"Provide a custom content to display as an extra item of the dropdown menu, after the other options."}},A={input:{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array, Mixed value]":"The new selected value(s). Array of values if <code>multiple</code> is set to <code>true</code>, or single value otherwise. The value refers to the value key of the selected item."}},"update:modelValue":{description:"Emitted each time the selected item(s) changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array, Mixed value]":"The new selected value(s). Array of values if <code>multiple</code> is set to <code>true</code>, or single value otherwise. The value refers to the value key of the selected item."}},focus:{description:"Emitted on autocomplete focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on autocomplete blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"item-click":{description:"Emitted on autocomplete list item click.",params:{"[Object]":"The clicked item object."}},"item-select":{description:"Emitted on list item select (click or <kbd>enter</kbd> keydown).",params:{"[Object]":"The selected item object."}}},T={data:()=>({propsDescs:_,slots:j}),computed:{props(){return y.props},events(){return y.emits.reduce((t,e)=>(t[e]=A[e]||{})&&t,{})}}},V=u(T,[["render",E]]);function M(t,e,h,f,v,m){const a=i("ui-component-title"),l=i("examples"),c=i("api");return d(),p("main",null,[o(a,{slug:"w-autocomplete","in-progress":""},{default:n(()=>e[0]||(e[0]=[s("w-autocomplete")])),_:1}),o(l),o(c)])}const D={components:{Examples:x,Api:V}},P=u(D,[["render",M]]);export{P as default};
