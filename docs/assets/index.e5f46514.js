import{o as u,g as b,a as n,w as a,b as e,e as l,n as g,d as i,F as _,p as S,c as T,l as $,f as A,h as q,r as h,_ as I,aa as V}from"./index.6a972bb8.js";const z=l("p",null,[e("When there is no data, a default text will be displayed. You can override it via the "),l("code",null,"no-data"),e(" slot.")],-1),H=l("br",null,null,-1),P=l("p",null,[e("You can align the columns contents separately by adding an "),l("code",null,"align"),e(` key in each header
definition (`),l("code",null,"left"),e(", "),l("code",null,"center"),e(" or "),l("code",null,"right"),e(")."),l("br"),e(`
If you don't define any, `),l("code",null,"left"),e(` will be implicit.
`)],-1),W=l("p",null,[e("Even with the "),l("code",null,"no-headers"),e(" option, the "),l("code",null,"headers"),e(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)],-1),J=l("p",null,[e("A table footer can be added via the "),l("code",null,"footer"),e(` slot. If present, the footer will span on
all the columns by default.
`)],-1),K={class:"w-flex justify-end"},U=l("strong",{class:"mr2"},"Total:",-1),O=l("p",null,[e("The "),l("code",null,"footer-row"),e(" slot will give you more flexibility as it lets you define the whole table row.")],-1),Y=l("p",null,"It can be useful if you want to keep the columns alignments in the footer.",-1),G=l("p",null,[e("You can resize the columns by dragging their edges left or right."),l("br"),e(`
If you want the whole cell content to be on a single line and truncated with the ellipsis
(`),l("code",null,"..."),e("), you can apply this CSS.")],-1),X=l("p",null,[e(`In some apps, it makes sense to save the prefered table layout of the user, and reapply it
every time this table is loaded. Here is a demo of how to do so.`),l("br"),e(`
To test it, first resize the columns, then refresh the page to see the same layout.`)],-1),Q=l("p",null,`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`,-1),Z=l("p",null,[e("To make a column sticky, you only need to add "),l("code",null,"sticky: true"),e(` to the header of that
column.`),l("br"),e(`
The sticky mechanism is done via CSS (position: sticky). So if you set multiple sticky
columns, one will overlap the previous one as you scroll.`)],-1),ee=l("p",{class:"grey"},"Scroll the table horizontally to observe the behavior.",-1),ae={class:"w-flex align-center mb2"},te=l("p",null,[e(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),l("strong",{class:"code"},"w-table"),e("'s sorting is defined with a header key string preceded by a "),l("code",null,"+"),e(` for ASC,
or a `),l("code",null,"-"),e(" for DESC. For instance, in this example: "),l("code",null,"'+firstName'"),e(`.
`)],-1),le=l("p",null,[e(`When dealing with a lot of table entries, you will most likely need the sorting to be done
in the backend.`),l("br"),e(`
For this you can use the asynchronous sorting and update the table rows from outside Wave UI.`)],-1),ne=l("p",null,[e(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),l("strong",{class:"code"},"w-table"),e(" component and it will be applied to the table."),l("br"),e(`
Setting the filter to `),l("code",null,"null"),e(" or "),l("code",null,"false"),e(" or "),l("code",null,"undefined"),e(" will remove any previous filter.")],-1),ie={class:"w-flex wrap mb3"},se=l("p",null,[e("You could also apply a filter globally, which looks into all the columns at once."),l("br"),e(`
Here is one cool way to do it.`)],-1),re=l("strong",null,[e(`If you don't need the RegExp power, you can simply return
`),l("code",null,"allTheColumns.toLowerCase().includes(keyword)"),e(` instead.
`)],-1),oe=l("br",null,null,-1),de=l("br",null,null,-1),me=l("code",null,"|",-1),he=l("br",null,null,-1),ce=l("code",null,"new RegExp(keyword, 'i')",-1),ue=l("code",null,"new RegExp(`\\\\b${keyword}\\\\b`, 'i')",-1),be=l("code",null,"floretta",-1),fe=l("code",null,"florett",-1),pe=l("p",null,[e("When the table content is not ready straight away, you can use the "),l("code",null,"loading"),e(` prop to display
a progress bar while loading.`)],-1),Ne=l("p",null,"Click a row to see it highlighted and get information about the selected item.",-1),ye=l("p",null,[e("By default, the selection will use the "),l("code",null,"primary"),e(" color and apply an opacity of "),l("code",null,"0.2"),e(`.
If this is not what you want, you can override it via CSS (`),l("code",null,".w-table__row--selected td:before"),e(`).
`)],-1),ge=l("span",{class:"code"},"selectable-rows",-1),we=l("p",null,[e("You can enable the rows selection by adding the "),l("code",null,"selectable-rows"),e(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),l("code",null,"1"),e(`
to allow a single selection only.
`)],-1),ke=l("span",{class:"code"},"force-selection",-1),ve=l("p",null,[e("Eventually, you can use the "),l("code",null,"force-selection"),e(` prop to prevent unselecting a row when only
one remain selected.
`)],-1),Fe=l("span",{class:"code"},"@row-select",-1),xe=q(`<p>This event is fired each time a row is selected <strong>or unselected</strong> (so you don&#39;t need to listen
to 2 different events). <br>
As shown in this example (under the table), the <span class="code">@row-select</span> event will give you access to useful
information such as:</p><ul><li><code>item</code>: the clicked row object</li><li><code>selected</code>: a boolean telling if the row is being selected or unselected</li><li><code>selectedRows</code>: an array of all the selected rows objects</li></ul>`,2),_e=l("div",{class:"mt4 title4"},"Selection info:",-1),Re=l("p",null,`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`,-1),Se=l("ul",null,[l("li",null,[l("strong",null,"In Vue 2"),e(", you can do 2-way binding on any variable other than the "),l("strong",{class:"code"},"v-model"),e(" using the "),l("code",null,".sync"),e(" modifier.")]),l("li",null,[l("strong",null,"In Vue 3"),e(", multiple "),l("strong",{class:"code"},"v-model"),e(" are supported in order to achieve 2-way binding. So you don't need "),l("code",null,".sync"),e(".")])],-1),Ce={class:"mt4"},Ie={class:"ml2"},De=l("br",null,null,-1),Le=l("code",null,"id",-1),Ee=l("code",null,"uid-key",-1),Me=l("p",null,"You can customize the headers labels and/or each row cells.",-1),Be=l("p",null,[e("In this example, only the headers are customized via the "),l("code",null,"header-label"),e(" slot.")],-1),Te=l("p",null,[e("In this example, only the items cells are customized via the "),l("code",null,"item"),e(` slot
(and the headers are hidden).`)],-1),Ve={key:0},qe={class:"grey mr2"},je=q(`<p>If you only need to override 1 particular column you can do it via the <code>item-cell.xxx</code> slot,
where <code>xxx</code> is a key defined in the headers.
In this example: <code>id</code>, <code>firstName</code>, <code>lastName</code>.<br><br>

If it&#39;s more convenient, you can also override a particular cell by its index like <code>item-cell.i</code>,
where <code>i</code> is a an integer starting at 1.</p>`,1),$e=l("p",null,[e(`In this example, the full <tr> DOM element is customized, so you can add your own classes
and full layout.`),l("br"),e(`
As you notice, the `),l("code",null,"item"),e(` slot gives you full flexibility, but the drawback is that's more
code to write.`)],-1),Ae=["onClick"],ze=l("span",{class:"code"},"colspan",-1),He=l("p",null,[e("This example is showcasing another useful case: handling a colspan attribute."),l("br"),e(`
All the cells of all the rows are `),l("code",null,"colspan"),e("'d to one, and a custom row layout is applied.")],-1),Pe=["onClick"],We=["colspan"],Je={class:"title3"},Ke={class:"mr2"},Ue=l("p",null,[e("In addition to the full responsiveness, the "),l("code",null,"w-table"),e(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),l("br"),e(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),l("code",null,"mobile-breakpoint"),e(`
parameter.`),l("br"),e(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),l("br"),l("br"),e(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)],-1),Oe=l("p",null,[e("To stay lean and efficient, the minimum JavaScript behavior is added to the "),l("code",null,"w-table"),e(`
component.`),l("br"),e(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),l("br"),e(`
You can override it to set the width you want via:
`)],-1);function Ye(t,r,f,R,D,p){const o=h("title-link"),d=h("w-table"),m=h("example"),N=h("w-button"),w=h("w-icon"),L=h("w-flex"),E=h("ssh-pre"),M=h("w-tag"),B=h("w-radios"),j=h("w-input"),F=h("alert");return u(),b("div",null,[n(o,{h2:""},{default:a(()=>[e("Basic")]),_:1}),n(m,null,{pug:a(()=>[e('w-table(:headers="table.headers" :items="table.items")')]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table1.items},null,8,["headers","items"])]),_:1}),n(o,{h2:""},{default:a(()=>[e("When there is no data")]),_:1}),z,n(m,null,{pug:a(()=>[e(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) \u{1F44C} There is no data! \u{1F44C}`)]),html:a(()=>[e(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    \u{1F44C} There is no data! \u{1F44C}
  </template>
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:[]},null,8,["headers"]),H,n(d,{headers:t.table1.headers,items:[]},{"no-data":a(()=>[e("\u{1F44C} There is no data! \u{1F44C}")]),_:1},8,["headers"])]),_:1}),n(o,{h2:""},{default:a(()=>[e("Alignments")]),_:1}),P,n(m,null,{pug:a(()=>[e('w-table(:headers="table.headers" :items="table.items")')]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName', align: 'center' },
      { label: 'Last name', key: 'lastName', align: 'right' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table2.headers,items:t.table2.items},null,8,["headers","items"])]),_:1}),n(o,{h2:"",slug:"example--no-headers"},{default:a(()=>[e("No headers")]),_:1}),W,n(m,null,{pug:a(()=>[e('w-table(:items="table.items" :headers="table.headers" no-headers)')]),html:a(()=>[e(`<w-table
  :items="table.items"
  :headers="table.headers"
  no-headers>
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table1.items,"no-headers":""},null,8,["headers","items"])]),_:1}),n(o,{h2:"",slug:"example--fixed-headers"},{default:a(()=>[e("Fixed headers")]),_:1}),n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px")`)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table3.headers,items:t.table3.items,"fixed-headers":"",style:{height:"250px"}},null,8,["headers","items"])]),_:1}),n(o,{h2:"",slug:"example--footer"},{default:a(()=>[e("Footer")]),_:1}),n(o,{h3:"",slug:"example--footer-slot"},{default:a(()=>[e("Footer slot")]),_:1}),J,l("div",K,[n(N,{onClick:r[0]||(r[0]=s=>t.table3.fixedFooter=!t.table3.fixedFooter),outline:!t.table3.fixedFooter,round:""},{default:a(()=>[l("span",{class:g(["code",t.table3.fixedFooter?"contrast-color":"primary"])},"fixed-footer",2)]),_:1},8,["outline"])]),n(m,null,{pug:a(()=>[e(`w-table(
  ref="table"
  :headers="table.headers"
  :items="table.items"
  :fixed-footer="table.fixedFooter"
  style="height: 250px")
  template(#footer)
    w-flex(justify-space-between)
      w-button(round sm @click="addRow")
        w-icon.mr1 wi-plus
        | add person
      div
        strong.mr2 Total:
        | `+i("{{ table.items.length }}")+" persons",1)]),html:a(()=>[e(`<w-table
  ref="table"
  :headers="table.headers"
  :items="table.items"
  :fixed-footer="table.fixedFooter"
  style="height: 250px">
  <template #footer>
    <w-flex justify-space-between>
      <w-button round sm @click="addRow">
        <w-icon class="mr1">wi-plus</w-icon>
        add person
      </w-button>

      <div>
        <strong class="mr2">Total:</strong>
        `+i("{{ table.items.length }}")+` persons
      </div>
    </w-flex>
  </template>
</w-table>`,1)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    fixedFooter: false
  },
}),

methods: {
  addRow () {
    this.table.items.push({
      id: this.table.items.length + 1,
      firstName: 'John',
      lastName: 'Doe'
    })
    this.$nextTick(() => {
      const table = this.$refs.table.$el
      table.scrollTo({ top: table.scrollHeight, behavior: 'smooth' })
    })
  }
}
`)]),default:a(()=>[n(d,{ref:"table",headers:t.table3.headers,items:t.table3.items,"fixed-footer":t.table3.fixedFooter,style:{height:"250px"}},{footer:a(()=>[n(L,{"justify-space-between":""},{default:a(()=>[n(N,{round:"",sm:"",onClick:p.addRow},{default:a(()=>[n(w,{class:"mr1"},{default:a(()=>[e("wi-plus")]),_:1}),e("add person")]),_:1},8,["onClick"]),l("div",null,[U,e(i(t.table3.items.length)+" persons",1)])]),_:1})]),_:1},8,["headers","items","fixed-footer"])]),_:1}),n(o,{h3:"",slug:"example--footer-slot"},{default:a(()=>[e("Footer-row slot")]),_:1}),O,Y,n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  no-headers
  :items="table.items"
  fixed-footer
  style="height: 250px")
  template(#footer-row)
    tr
      th.py1(
        v-for="&#40;header, i&#41; in table3.headers"
        :key="i"
        :class="\`\${i ? 'px1' : 'px2'} text-\${header.align || 'left'}\`")
        | `+i("{{ header.label }}"),1)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items"
  fixed-footer
  style="height: 250px">
  <template #footer-row>
    <tr>
      <th
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`py1 \${i ? 'px1' : 'px2'} text-\${header.align || 'left'}\`">
        `+i("{{ header.label }}")+`
      </th>
    </tr>
  </template>
</w-table>`,1)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  },
})
`)]),default:a(()=>[n(d,{headers:t.table3.headers,"no-headers":"",items:t.table3.items,"fixed-footer":t.table3.fixedFooter,style:{height:"250px"}},{"footer-row":a(()=>[l("tr",null,[(u(!0),b(_,null,S(t.table3.headers,(s,c)=>(u(),b("th",{class:g(["py1",`${c?"px1":"px2"} text-${s.align||"left"}`]),key:c},i(s.label),3))),128))])]),_:1},8,["headers","items","fixed-footer"])]),_:1}),n(o,{h2:""},{default:a(()=>[e("Built-in column resizing")]),_:1}),G,n(E,{language:"css",dark:t.$store.state.darkMode},{default:a(()=>[e(`.w-table__cell {
  white-space: nowrap;
}
`)]),_:1},8,["dark"]),n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', width: '50' },
      { label: 'Content', key: 'content', width: '70%' },
      { label: 'First name', key: 'firstName' }
    ],
    items: [
      { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
      { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
      { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' },
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table7.headers,items:t.table7.items,"resizable-columns":""},null,8,["headers","items"])]),_:1}),n(o,{h3:""},{default:a(()=>[e("Saving the table layout in localStorage")]),_:1}),X,n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', width: '50' },
      { label: 'Content', key: 'content', width: '70%' },
      { label: 'First name', key: 'firstName' }
    ],
    items: [
      { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
      { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
      { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' },
    ]
  }
}),

methods: {
  onColumnResize ({ index, widths }) {
    widths.forEach((width, i) => (this.table.headers[i].width = width))

    // Save the table layout in localStorage.
    localStorage.tableWidths = widths
  }
},

mounted () {
  // Reapply the saved table layout.
  localStorage.tableWidths?.split(',').forEach((width, i) => (this.table.headers[i].width = width))
}
`)]),default:a(()=>[n(d,{headers:t.table8.headers,items:t.table8.items,"resizable-columns":"",onColumnResize:p.onColumnResize},null,8,["headers","items","onColumnResize"])]),_:1}),n(o,{h2:""},{default:a(()=>[e("Toggling column visibility")]),_:1}),Q,n(m,null,{pug:a(()=>[e(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? `+i(t.$store.state.darkMode?"grey-dark4":"grey-light4")+` : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+i("{{ header.hidden ? '-off' : ''}}")+`
  | `+i("{{ header.label }}")+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`,1)]),html:a(()=>[e(`Toggle columns:
<w-tag
  v-for="(header, index) in table.headers"
  :key="index"
  class="ma1"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden">
  <w-icon class="mr2">mdi mdi-eye`+i("{{ header.hidden ? '-off' : ''}}")+`</w-icon>
  `+i("{{ header.label }}")+`
</w-tag>

<w-table
  :headers="table.headers.filter(header => !header.hidden)"
  :items="table.items"
  class="mt2">
</w-table>`,1)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', hidden: false },
      { label: 'First name', key: 'firstName', hidden: false },
      { label: 'Last name', key: 'lastName', hidden: false }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[e("Toggle columns:"),(u(!0),b(_,null,S(t.table6.headers,(s,c)=>(u(),T(M,{class:"ma1",key:c,"bg-color":s.hidden?t.$store.state.darkMode?"grey-dark4":"grey-light4":"primary",onClick:$(y=>s.hidden=!s.hidden,["stop"])},{default:a(()=>[n(w,{class:"mr2"},{default:a(()=>[e("mdi mdi-eye"+i(s.hidden?"-off":""),1)]),_:2},1024),e(i(s.label),1)]),_:2},1032,["bg-color","onClick"]))),128)),n(d,{class:"mt2",headers:t.table6.headers.filter(s=>!s.hidden),items:t.table6.items},null,8,["headers","items"])]),_:1}),n(o,{h2:""},{default:a(()=>[e("Sticky columns")]),_:1}),Z,ee,n(m,null,{pug:a(()=>[e(`w-table(
:headers="table.headers"
:items="table.items"
fixed-layout
:fixed-headers="table.fixedHeaders"
style="max-width: 500px;height: 200px")`)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-layout
  :fixed-headers="table.fixedHeaders"
  style="max-width: 500px;height: 200px">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    fixedHeaders: false,
    headers: [
      { label: 'ID', key: 'id', hidden: false, width: '60px', sticky: true },
      { label: 'First name', key: 'firstName', hidden: false, width: '120px' },
      { label: 'Last name', key: 'lastName', hidden: false, width: '120px' },
      { label: 'Birthday', key: 'birthday', email: false, width: '150px' },
      { label: 'Email', key: 'email', hidden: false, width: '200px' },
      { label: 'Phone', key: 'phone', hidden: false, width: '200px' },
      { label: 'Country', key: 'country', hidden: false, width: '200px' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson', birthday: 'Feb. 12, 1976', email: 'f.sampson@gmail.com', phone: '+21 234 567 8921', country: 'United Kingdom' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn', birthday: 'Dec. 15, 1995', email: 'n.lynn@gmail.com', phone: '+22 234 567 8922', country: 'Luxembourg' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol', birthday: 'Apr. 25, 1989', email: 'r.bristol@gmail.com', phone: '+23 234 567 8923', country: 'Montenegro' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott', birthday: 'Mar. 24, 2002', email: 'd.elliott@gmail.com', phone: '+24 234 567 8924', country: 'Germany' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman', birthday: 'Aug. 2, 1990', email: 'v.carman@gmail.com', phone: '+25 234 567 8925', country: 'Ukraine' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison', birthday: 'Feb. 12, 2008', email: 'b.morison@gmail.com', phone: '+26 234 567 8926', country: 'Lithuania' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann', birthday: 'Nov. 6, 1991', email: 'b.mann@gmail.com', phone: '+27 234 567 8927', country: 'Finland' },
      { id: 8, firstName: 'Davie', lastName: 'Forester', birthday: 'Dec. 6, 1982', email: 'd.forester@gmail.com', phone: '+28 234 567 8928', country: 'Portugal' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery', birthday: 'Jan. 20, 1987', email: 'a.montgomery@gmail.com', phone: '+29 234 567 8929', country: 'Czechia' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk', birthday: 'Dec. 31, 1992', email: 'm.kirk@gmail.com', phone: '+30 234 567 8930', country: 'Norway' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory', birthday: 'Dec. 7, 1979', email: 'h.mallory@gmail.com', phone: '+31 234 567 8931', country: 'Greece' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle', birthday: 'Feb. 16, 1980', email: 's.castle@gmail.com', phone: '+32 234 567 8932', country: 'France' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason', birthday: 'Jun. 29, 2000', email: 'r.eason@gmail.com', phone: '+33 234 567 8933', country: 'Poland' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley', birthday: 'Dec. 31, 2009', email: 'm.hayley@gmail.com', phone: '+34 234 567 8934', country: 'Hungary' },
      { id: 15, firstName: 'Josie', lastName: 'Richard', birthday: 'Aug. 16, 2004', email: 'j.richard@gmail.com', phone: '+35 234 567 8935', country: 'Italy' }
    ]
  }
})
`)]),default:a(()=>[l("div",ae,[e("Sticky columns:"),n(B,{class:"ml1 mr4",modelValue:t.table9.stickyColumn,"onUpdate:modelValue":r[1]||(r[1]=s=>t.table9.stickyColumn=s),items:t.table9.stickyColumnOptions,onChange:p.toggleStickyColumn,inline:""},null,8,["modelValue","items","onChange"]),n(N,{onClick:r[2]||(r[2]=s=>t.table9.fixedHeaders=!t.table9.fixedHeaders),outline:!t.table9.fixedHeaders,round:""},{default:a(()=>[l("span",{class:g(["code",t.table9.fixedHeaders?"contrast-color":"primary"])},"fixed-headers",2)]),_:1},8,["outline"])]),n(d,{class:"base-color--bg",headers:t.table9.headers,items:t.table9.items,"fixed-layout":"","fixed-headers":t.table9.fixedHeaders,style:{"max-width":"500px",height:"200px"}},null,8,["headers","items","fixed-headers"])]),_:1}),n(o,{h2:""},{default:a(()=>[e("Sorting")]),_:1}),te,n(o,{h3:""},{default:a(()=>[e("Initial Sorting")]),_:1}),n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort")`)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    sort: '+firstName'
  }
})
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table1.items,sort:t.table1.sort,"onUpdate:sort":r[3]||(r[3]=s=>t.table1.sort=s)},null,8,["headers","items","sort"])]),_:1}),n(o,{h3:""},{default:a(()=>[e("Asynchronous Sorting")]),_:1}),le,n(m,{"blank-codepen":["js"]},{html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :sort-function="sortFunction"
  :loading="table.loading"
  style="height: 140px">
</w-table>`)]),js:a(()=>[e(`// This object is simulating content coming from the server.
const tableItemsInAPI = {
  null: [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '+id': [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '-id': [
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' }
  ],
  '+firstName': [
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '-firstName': [
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' }
  ],
  '+lastName': [
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' }
  ],
  '-lastName': [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' }
  ]
}

const app = Vue.createApp({
  data: () => ({
    table: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' }
      ],
      items: [
        { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
        { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
        { id: 3, firstName: 'Rory', lastName: 'Bristol' },
        { id: 4, firstName: 'Daley', lastName: 'Elliott' },
        { id: 5, firstName: 'Virgil', lastName: 'Carman' }
      ],
      loading: false
    }
  }),

  methods: {
    // For consistency, the received sortKeys parameter is always an array
    // (for multi-column sorting), whether the sorting is done on one or more columns.
    // Notice the async & await keywords.
    async sortFunction (sortKeys) {
      // Before the fetch set the loading flag, and display the progress bar in
      // the header only, so the current rows stay visible while loading.
      this.table.loading = 'header'

      // Simulating an AJAX call with 1 second latency.
      // Replace this in your app with a \`fetch\` or Axios call.
      const apiResponse = new Promise(resolve => setTimeout(() => resolve(tableItemsInAPI[sortKeys[0] || null]), 1000))

      // Fill up the array with rows from the API.
      this.table.items = await apiResponse

      this.table.loading = false
    }
  }
})

app.use(WaveUI, {})

app.mount('#app')
`)]),default:a(()=>[n(d,{class:"my6",headers:t.table10.headers,items:t.table10.items,"sort-function":p.sortFunction,loading:t.table10.loading,style:{height:"140px"}},{pug:a(()=>[e(`w-table.my6(
:headers="table.headers"
:items="table.items"
:sort-function="sortFunction"
:loading="table.loading"
style="height: 140px")`)]),_:1},8,["headers","items","sort-function","loading"])]),_:1}),n(o,{h2:""},{default:a(()=>[e("Filtering")]),_:1}),ne,n(m,null,{pug:a(()=>[e(`.w-flex.wrap.mb3
  w-button.mr2.mb1(
    @click="table.activeFilter = 0"
    round
    :outline="table.activeFilter !== 0")
    | No filter
  w-button.mr2.mb1(
    @click="table.activeFilter = 1"
    round
    :outline="table.activeFilter !== 1")
    | Last name starting with 'M'
  w-button.mr2.mb1(
    @click="table.activeFilter = 2"
    round
    :outline="table.activeFilter !== 2")
    | ID >= 10
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.filters[table.activeFilter]")`)]),html:a(()=>[e(`<div class="w-flex wrap mb3">
  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 0"
    round
    :outline="table.activeFilter !== 0">
    No filter
  </w-button>

  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 1"
    round
    :outline="table.activeFilter !== 1">
    Last name starting with 'M'
  </w-button>

  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 2"
    round
    :outline="table.activeFilter !== 2">
    ID >= 10
  </w-button>
</div>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.filters[table.activeFilter]">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    filters: [
      null,
      item => item.lastName[0] === 'M',
      item => item.id >= 10
    ],
    activeFilter: 0
  }
})
`)]),default:a(()=>[l("div",ie,[n(N,{class:"mr2 mb1",onClick:r[4]||(r[4]=s=>t.table3.activeFilter=0),round:"",outline:t.table3.activeFilter!==0},{default:a(()=>[e("No filter")]),_:1},8,["outline"]),n(N,{class:"mr2 mb1",onClick:r[5]||(r[5]=s=>t.table3.activeFilter=1),round:"",outline:t.table3.activeFilter!==1},{default:a(()=>[e("Last name starting with 'M'")]),_:1},8,["outline"]),n(N,{class:"mr2 mb1",onClick:r[6]||(r[6]=s=>t.table3.activeFilter=2),round:"",outline:t.table3.activeFilter!==2},{default:a(()=>[e("ID >= 10")]),_:1},8,["outline"])]),n(d,{headers:t.table3.headers,items:t.table3.items,filter:t.table3.filters[t.table3.activeFilter]},null,8,["headers","items","filter"])]),_:1}),n(o,{h3:""},{default:a(()=>[e("Global filter")]),_:1}),se,n(m,null,{pug:a(()=>[e(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`)]),html:a(()=>[e(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    keyword: '',
    keywordFilter: keyword => item => {
      // Concatenate all the columns into a single string for a faster lookup.
      const allTheColumns = \`\${item.id} \${item.firstName} \${item.lastName}\`

      // Lookup the keyword variable in the string with case-insensitive flag.
      return new RegExp(keyword, 'i').test(allTheColumns)
    }
  }
})`)]),default:a(()=>[n(j,{class:"mb3",modelValue:t.table4.keyword,"onUpdate:modelValue":r[7]||(r[7]=s=>t.table4.keyword=s),placeholder:"Search anything...","inner-icon-left":"wi-search"},null,8,["modelValue"]),n(d,{headers:t.table4.headers,items:t.table4.items,filter:t.table4.keywordFilter(t.table4.keyword)},null,8,["headers","items","filter"])]),_:1}),n(F,{tip:""},{default:a(()=>[re,oe,de,e(`But the real power of using a regular expression
`),n(w,{class:"red mr1",size:"0.9em"},{default:a(()=>[e("mdi mdi-heart")]),_:1}),e(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `),me,e(" etc."),he,e(`
You could also match only the full words by replacing `),ce,e(` with
`),ue,e(" (it would return a result when typing "),be,e(`
but not `),fe,e(" for instance).")]),_:1}),n(o,{h2:""},{default:a(()=>[e("Loading state")]),_:1}),pe,n(N,{class:"mb2",disabled:!!t.table1.loading,onClick:p.reload},{default:a(()=>[n(w,{class:"mr1"},{default:a(()=>[e("mdi mdi-sync")]),_:1}),e("reload")]),_:1},8,["disabled","onClick"]),n(o,{h3:""},{default:a(()=>[e("Simple table - no set height")]),_:1}),n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  },
  loading: true // Set this to false when the data is loaded.
}),

mounted () {
  setTimeout(() => {this.loading = false}, 3000)
}
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table1.items,loading:t.table1.loading},null,8,["headers","items","loading"])]),_:1}),n(o,{h3:"",slug:"loading-with-fixed-header"},{default:a(()=>[e("Table with fixed header & set height of 200px")]),_:1}),n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  },
  loading: true // Set this to false when the data is loaded.
}),

mounted () {
  setTimeout(() => {this.loading = false}, 3000)
}
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table3.items,"fixed-headers":"",loading:t.table1.loading,style:{height:"200px"}},null,8,["headers","items","loading"])]),_:1}),n(o,{h2:"",slug:"pagination"},{default:a(()=>[e("Pagination"),n(M,{class:"ml2 text-bold",round:"",color:"warning",outline:"",sm:""},{default:a(()=>[e("COMING SOON")]),_:1})]),_:1}),n(m,null,{pug:a(()=>[]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[e("Coming soon.")]),_:1}),n(o,{h2:""},{default:a(()=>[e("Rows selection")]),_:1}),Ne,ye,n(o,{h3:"",slug:"example--selectable-rows"},{default:a(()=>[e("The "),ge,e(" prop")]),_:1}),we,n(o,{h3:"",slug:"example--force-selection"},{default:a(()=>[e("The "),ke,e(" prop")]),_:1}),ve,n(o,{h3:"",slug:"example--row-select"},{default:a(()=>[e("The "),Fe,e(" event")]),_:1}),xe,n(m,null,{pug:a(()=>[e(`w-flex.mb4(wrap)
  w-radios.mr6(v-model="table.selectableRows" :items="selectableRowsOptions")
  w-button.my3(
    @click="table.forceSelection = !table.forceSelection"
    round
    :outline="!table.forceSelection")
    w-icon.mr2(v-if="table.forceSelection") wi-check
    | Force selection

w-table(
  :headers="table.headers"
  :items="table.items"
  :selectable-rows="table.selectableRows"
  :force-selection="table.forceSelection"
  @row-select="selectionInfo = $event")

.mt4.title4 Selection info:
pre `+i("{{ selectionInfo }}"))]),html:a(()=>[e(`<w-flex wrap class="mb4">
  <w-radios
    v-model="table.selectableRows"
    :items="selectableRowsOptions"
    class="mr6">
  </w-radios>
  <w-button
    @click="table.forceSelection = !table.forceSelection"
    round
    :outline="!table.forceSelection"
    class="my3">
    <w-icon v-if="table.forceSelection" class="mr2">
      wi-check
    </w-icon>
    Force selection
  </w-button>
</w-flex>

<w-table
  :headers="table.headers"
  :items="table.items"
  :selectable-rows="table.selectableRows"
  :force-selection="table.forceSelection"
  @row-select="selectionInfo = $event">
</w-table>

<div class="title4 mt4">Selection info:</div>
<pre>`+i("{{ selectionInfo }}")+"</pre>")]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    selectableRows: true,
    forceSelection: false
  },
  selectableRowsOptions: [
    { label: '<code class="mr2">:selectable-row="false"</code> (default)', value: false },
    { label: '<code>selectable-row</code>', value: true },
    { label: '<code>:selectable-row="1"</code>', value: 1 }
  ],
  selectionInfo: {}
})
`)]),default:a(()=>[n(L,{class:"mb4",wrap:""},{default:a(()=>[n(B,{class:"mr6",modelValue:t.table1.selectableRows,"onUpdate:modelValue":r[8]||(r[8]=s=>t.table1.selectableRows=s),items:t.selectableRowsOptions},null,8,["modelValue","items"]),n(N,{class:"my3",onClick:r[9]||(r[9]=s=>t.table1.forceSelection=!t.table1.forceSelection),round:"",outline:!t.table1.forceSelection},{default:a(()=>[t.table1.forceSelection?(u(),T(w,{key:0,class:"mr2"},{default:a(()=>[e("wi-check")]),_:1})):A("",!0),e("Force selection")]),_:1},8,["outline"])]),_:1}),n(d,{headers:t.table1.headers,items:t.table1.items,"selectable-rows":t.table1.selectableRows,"force-selection":t.table1.forceSelection,onRowSelect:r[10]||(r[10]=s=>t.selectionInfo=s)},null,8,["headers","items","selectable-rows","force-selection"]),_e,l("pre",null,i(t.selectionInfo),1)]),_:1}),n(o,{h3:""},{default:a(()=>[e("Updating the selected rows programmatically")]),_:1}),Re,n(F,{tip:""},{default:a(()=>[Se]),_:1}),n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows")
.mt4
  | Selected rows:
  code.ml2 `+i("{{ table.selectedRows }}"),1)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows">
</w-table>

<div class="mt4">
  Selected rows:
  <code class="ml2">`+i("{{ table.selectedRows }}")+`</code>
</div>`,1)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    selectedRows: [2, 4]
  }
})`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table1.items,"selectable-rows":"","selected-rows":t.table1.selectedRows,"onUpdate:selected-rows":r[11]||(r[11]=s=>t.table1.selectedRows=s)},null,8,["headers","items","selected-rows"]),l("div",Ce,[e("Selected rows:"),l("code",Ie,i(t.table1.selectedRows),1)])]),_:1}),n(F,{info:""},{default:a(()=>[e("In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier."),De,e(`
By default the expanded rows array will use an `),Le,e(` key, if present in the item object,
or will assign an internal unique ID otherwise.
If you want, you can override the default unique ID key (when internally needed) with
the `),Ee,e(` prop, which is set to "id" by default.
`)]),_:1}),n(o,{h2:"",slug:"example--expandable-rows"},{default:a(()=>[e("Expandable rows")]),_:1}),n(F,{warning:""},{default:a(()=>[e("This feature is in progress.")]),_:1}),n(m,null,{pug:a(()=>[e(`w-table(:headers="table.headers" :items="table.items" expandable-rows)
  template(#row-expansion="{ item }")
    w-icon.mr2(:color="['blue', 'pink'][item.gender]")
      | mdi `+i("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    | `+i("{{ item.firstName }}")+" weighs ",1),l("strong",null,i("{{ item.weight }}")+"kg",1),e(" and is "),l("strong",null,i("{{ item.height }}")+"m",1),e(" tall.")]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  expandable-rows>
  <template #row-expansion="{ item }">
    <w-icon class="mr2" :color="['blue', 'pink'][item.gender]">
      mdi `+i("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    </w-icon>
    `+i("{{ item.firstName }}")+" weighs ",1),l("strong",null,i("{{ item.weight }}")+"kg",1),e(" and is "),l("strong",null,i("{{ item.height }}")+"m",1),e(` tall.
  </template>
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson', gender: 1, weight: 56, height: 1.69 },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn', gender: 1, weight: 62, height: 1.77 },
      { id: 3, firstName: 'Rory', lastName: 'Bristol', gender: 0, weight: 71, height: 1.75 },
      { id: 4, firstName: 'Daley', lastName: 'Elliott', gender: 0, weight: 84, height: 1.83 },
      { id: 5, firstName: 'Virgil', lastName: 'Carman', gender: 0, weight: 74, height: 1.72 }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table5.headers,items:t.table5.items,"expandable-rows":""},{"row-expansion":a(({item:s})=>[n(w,{class:"mr2",color:["blue","pink"][s.gender]},{default:a(()=>[e("mdi "+i(["mdi-gender-male","mdi-gender-female"][s.gender]),1)]),_:2},1032,["color"]),e(i(s.firstName)+" weighs ",1),l("strong",null,i(s.weight)+"kg",1),e(" and is "),l("strong",null,i(s.height)+"m",1),e(" tall.")]),_:1},8,["headers","items"])]),_:1}),n(o,{h2:"",slug:"slots"},{default:a(()=>[e("Headers & cells customization via slots")]),_:1}),Me,n(o,{h3:""},{default:a(()=>[e("Headers")]),_:1}),Be,n(m,null,{pug:a(()=>[e(`w-table(:headers="table.headers" :items="table.items")
  template(#header-label="{ label, index }") `+i("{{ index }}: {{ label }}")+" \u{1F44C}")]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items">
  <template #header-label="{ label, index }">
    `+i("{{ index }}: {{ label }}")+` \u{1F44C}
  </template>
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table1.items},{"header-label":a(({label:s,index:c})=>[e(i(c)+": "+i(s)+" \u{1F44C}",1)]),_:1},8,["headers","items"])]),_:1}),n(o,{h3:"",slug:"item-cells"},{default:a(()=>[e("Item cells (inside <td> element)")]),_:1}),Te,n(m,null,{pug:a(()=>[e(`w-table(:headers="table.headers" no-headers :items="table.items")
  template(#item-cell="{ item, label, header, index }")
    small.grey.mr2 `+i("{{ header.label }}")+`:
    span `+i("{{ label }}"),1)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items">
  <template #item-cell="{ item, label, header, index }">
    <small class="grey mr2">`+i("{{ header.label }}")+`:</small>
    <span>`+i("{{ label }}")+`</span>
  </template>
</w-table>`,1)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table1.headers,"no-headers":"",items:t.table1.items},{"item-cell":a(({item:s,label:c,header:y,index:k})=>[y.key==="id"?(u(),b("small",Ve,"#"+i(k),1)):(u(),b(_,{key:1},[l("small",qe,i(y.label)+":",1),l("span",null,i(c),1)],64))]),_:1},8,["headers","items"])]),_:1}),n(o,{h3:"",slug:"override-1-particular-item-cell"},{default:a(()=>[e("override 1 particular item cell or column cells (inside <td> element)")]),_:1}),je,n(m,null,{pug:a(()=>[e(`w-table(:headers="table.headers" :items="table.items" no-headers)
  template(#item-cell.id="{ item, label, header, index }")
    div.px2.text-center.`+i(t.$store.state.darkMode?"green-dark5--bg":"green-light5--bg")+".text-bold "+i("{{ label }}"),1)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers>
  <template #item-cell.id="{ item, label, header, index }">
    <div class="px2 text-center `+i(t.$store.state.darkMode?"green-dark5--bg":"green-light5--bg")+` text-bold">
      `+i("{{ label }}")+`
    </div>
  </template>
</w-table>`,1)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table1.items,"no-headers":""},{"item-cell.id":a(({item:s,label:c,header:y,index:k})=>[l("div",{class:g(["px2 text-center text-bold",t.$store.state.darkMode?"green-dark5--bg":"green-light5--bg"])},i(c),3)]),_:1},8,["headers","items"])]),_:1}),n(o,{h2:"",slug:"full-custom-rows"},{default:a(()=>[e("Full custom row (<tr> element itself)")]),_:1}),$e,n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(:class="classes" @click="select")
      td(
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`")
        | `+i("{{ item[header.key] || '' }}"),1)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr :class="classes" @click="select">
      <td
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`">
        `+i("{{ item[header.key] || '' }}")+`
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table1.items,"selectable-rows":""},{item:a(({item:s,index:c,select:y,classes:k})=>[l("tr",{class:g(k),onClick:y},[(u(!0),b(_,null,S(t.table1.headers,(x,C)=>(u(),b("td",{key:C,class:g(`pa4 text-${x.align||"left"}`)},i(s[x.key]||""),3))),128))],10,Ae)]),_:1},8,["headers","items"])]),_:1}),n(o,{h3:"",slug:"colspan-on-td"},{default:a(()=>[ze,e(" on <td>")]),_:1}),He,n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(
      :class="{ ...classes, 'indigo-`+i(t.$store.state.darkMode?"dark":"light")+"5--bg': index % 2, 'blue-"+i(t.$store.state.darkMode?"dark":"light")+`5--bg': !(index % 2) }"
      @click="select")
      td.pa2(:colspan="table.headers.length")
        .title3 Row #`+i("{{ index }}")+`
        ul
          li(v-for="(header, i) in table.headers" :key="i")
            strong.mr2 `+i("{{ header.label }}")+`:
            | `+i("{{ item[header.key] || '' }}"),1)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr
      :class="{
        ...classes,
        'indigo-`+i(t.$store.state.darkMode?"dark":"light")+`5--bg': index % 2,
        'blue-`+i(t.$store.state.darkMode?"dark":"light")+`5--bg': !(index % 2)
      }"
      @click="select">
      <td :class="pa2" :colspan="table.headers.length">
        <div class="title3">
          Row #`+i("{{ index }}")+`
        </div>
        <ul>
          <li v-for="(header, i) in table.headers" :key="i">
            <strong class="mr2">
              `+i("{{ header.label }}")+`:
            </strong>
            `+i("{{ item[header.key] || '' }}")+`
          </li>
        </ul>
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table1.headers,items:t.table1.items,"no-headers":"","selectable-rows":""},{item:a(({item:s,index:c,select:y,classes:k})=>[l("tr",{class:g({...k,[`indigo-${t.$store.state.darkMode?"dark":"light"}5--bg`]:c%2,[`blue-${t.$store.state.darkMode?"dark":"light"}5--bg`]:!(c%2)}),onClick:y},[l("td",{class:"pa2",colspan:t.table1.headers.length},[l("div",Je,"Row #"+i(c),1),l("ul",null,[(u(!0),b(_,null,S(t.table1.headers,(x,C)=>(u(),b("li",{key:C},[l("strong",Ke,i(x.label)+":",1),e(i(s[x.key]||""),1)]))),128))])],8,We)],10,Pe)]),_:1},8,["headers","items"])]),_:1}),n(o,{h2:""},{default:a(()=>[e("Responsiveness & mobile layout")]),_:1}),Ue,n(m,null,{pug:a(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700")`)]),html:a(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700">
</w-table>`)]),js:a(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName', align: 'center' },
      { label: 'Last name', key: 'lastName', align: 'right' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:a(()=>[n(d,{headers:t.table2.headers,items:t.table2.items,"mobile-breakpoint":700},null,8,["headers","items"])]),_:1}),n(F,{tip:""},{default:a(()=>[Oe,n(E,{class:"mt5 mb0",language:"css",label:"CSS",dark:t.$store.state.darkMode},{default:a(()=>[e(".w-table--mobile .w-table__cell:before {width: 8em;}")]),_:1},8,["dark"])]),_:1})])}const v=[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:6,firstName:"Baldwin",lastName:"Morison"},{id:7,firstName:"Beckah",lastName:"Mann"},{id:8,firstName:"Davie",lastName:"Forester"},{id:9,firstName:"Andi",lastName:"Montgomery"},{id:10,firstName:"Magnolia",lastName:"Kirk"},{id:11,firstName:"Hamilton",lastName:"Mallory"},{id:12,firstName:"Sheree",lastName:"Castle"},{id:13,firstName:"Rebekah",lastName:"Eason"},{id:14,firstName:"Maude",lastName:"Hayley"},{id:15,firstName:"Josie",lastName:"Richard"}],Ge={null:[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"}],"+id":[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"}],"-id":[{id:5,firstName:"Virgil",lastName:"Carman"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:1,firstName:"Floretta",lastName:"Sampson"}],"+firstName":[{id:4,firstName:"Daley",lastName:"Elliott"},{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:5,firstName:"Virgil",lastName:"Carman"}],"-firstName":[{id:5,firstName:"Virgil",lastName:"Carman"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:1,firstName:"Floretta",lastName:"Sampson"},{id:4,firstName:"Daley",lastName:"Elliott"}],"+lastName":[{id:3,firstName:"Rory",lastName:"Bristol"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:1,firstName:"Floretta",lastName:"Sampson"}],"-lastName":[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:3,firstName:"Rory",lastName:"Bristol"}]},Xe={data:()=>({table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:v.slice(0,5),sort:"+firstName",loading:!0,selectableRows:!0,selectedRows:[2,4],forceSelection:!1},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:v.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:v,filters:[null,t=>t.lastName[0]==="M",t=>t.id>=10],activeFilter:0,fixedFooter:!1},table4:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:v,keyword:"",keywordFilter:t=>r=>{const f=`${r.id} ${r.firstName} ${r.lastName}`;return new RegExp(t,"i").test(f)}},table5:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",gender:1,weight:56,height:1.69},{id:2,firstName:"Nellie",lastName:"Lynn",gender:1,weight:62,height:1.77},{id:3,firstName:"Rory",lastName:"Bristol",gender:0,weight:71,height:1.75},{id:4,firstName:"Daley",lastName:"Elliott",gender:0,weight:84,height:1.83},{id:5,firstName:"Virgil",lastName:"Carman",gender:0,weight:74,height:1.72}]},table6:{headers:[{label:"ID",key:"id",hidden:!1},{label:"First name",key:"firstName",hidden:!1},{label:"Last name",key:"lastName",hidden:!1}],items:v.slice(0,5)},table7:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table8:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table9:{stickyColumn:1,fixedHeaders:!1,stickyColumnOptions:[{value:1,label:"#1"},{value:2,label:"#2"},{value:24,label:"#2 & #4"},{value:0,label:"None"}],headers:[{label:"ID",key:"id",hidden:!1,width:"60px",sticky:!0},{label:"First name",key:"firstName",hidden:!1,width:"120px"},{label:"Last name",key:"lastName",hidden:!1,width:"120px"},{label:"Birthday",key:"birthday",email:!1,width:"150px"},{label:"Email",key:"email",hidden:!1,width:"200px"},{label:"Phone",key:"phone",hidden:!1,width:"200px"},{label:"Country",key:"country",hidden:!1,width:"200px"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",birthday:"Feb. 12, 1976",email:"f.sampson@gmail.com",phone:"+21 234 567 8921",country:"United Kingdom"},{id:2,firstName:"Nellie",lastName:"Lynn",birthday:"Dec. 15, 1995",email:"n.lynn@gmail.com",phone:"+22 234 567 8922",country:"Luxembourg"},{id:3,firstName:"Rory",lastName:"Bristol",birthday:"Apr. 25, 1989",email:"r.bristol@gmail.com",phone:"+23 234 567 8923",country:"Montenegro"},{id:4,firstName:"Daley",lastName:"Elliott",birthday:"Mar. 24, 2002",email:"d.elliott@gmail.com",phone:"+24 234 567 8924",country:"Germany"},{id:5,firstName:"Virgil",lastName:"Carman",birthday:"Aug. 2, 1990",email:"v.carman@gmail.com",phone:"+25 234 567 8925",country:"Ukraine"},{id:6,firstName:"Baldwin",lastName:"Morison",birthday:"Feb. 12, 2008",email:"b.morison@gmail.com",phone:"+26 234 567 8926",country:"Lithuania"},{id:7,firstName:"Beckah",lastName:"Mann",birthday:"Nov. 6, 1991",email:"b.mann@gmail.com",phone:"+27 234 567 8927",country:"Finland"},{id:8,firstName:"Davie",lastName:"Forester",birthday:"Dec. 6, 1982",email:"d.forester@gmail.com",phone:"+28 234 567 8928",country:"Portugal"},{id:9,firstName:"Andi",lastName:"Montgomery",birthday:"Jan. 20, 1987",email:"a.montgomery@gmail.com",phone:"+29 234 567 8929",country:"Czechia"},{id:10,firstName:"Magnolia",lastName:"Kirk",birthday:"Dec. 31, 1992",email:"m.kirk@gmail.com",phone:"+30 234 567 8930",country:"Norway"},{id:11,firstName:"Hamilton",lastName:"Mallory",birthday:"Dec. 7, 1979",email:"h.mallory@gmail.com",phone:"+31 234 567 8931",country:"Greece"},{id:12,firstName:"Sheree",lastName:"Castle",birthday:"Feb. 16, 1980",email:"s.castle@gmail.com",phone:"+32 234 567 8932",country:"France"},{id:13,firstName:"Rebekah",lastName:"Eason",birthday:"Jun. 29, 2000",email:"r.eason@gmail.com",phone:"+33 234 567 8933",country:"Poland"},{id:14,firstName:"Maude",lastName:"Hayley",birthday:"Dec. 31, 2009",email:"m.hayley@gmail.com",phone:"+34 234 567 8934",country:"Hungary"},{id:15,firstName:"Josie",lastName:"Richard",birthday:"Aug. 16, 2004",email:"j.richard@gmail.com",phone:"+35 234 567 8935",country:"Italy"}]},table10:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:v.slice(0,5),loading:!1},selectableRowsOptions:[{label:'<code class="mr2">:selectable-row="false"</code> (default)',value:!1},{label:"<code>selectable-row</code>",value:!0},{label:'<code>:selectable-row="1"</code>',value:1}],selectionInfo:{}}),methods:{reload(){this.table1.loading=!0,setTimeout(()=>this.table1.loading=!1,2e3)},hideColumn(t){this.table6.headers[t].hidden=!this.table6.headers[t].hidden},onColumnResize({index:t,widths:r}){r.forEach((f,R)=>this.table8.headers[R].width=f),localStorage.tableWidths=r},addRow(){this.table3.items.push({id:this.table3.items.length+1,firstName:"John",lastName:"Doe"}),this.$nextTick(()=>{const t=this.$refs.table.$el;t.scrollTo({top:t.scrollHeight,behavior:"smooth"})})},toggleStickyColumn(){switch(this.table9.headers.forEach(t=>t.sticky=!1),this.table9.stickyColumn){case 1:return this.table9.headers[0].sticky=!0;case 2:return this.table9.headers[1].sticky=!0;case 24:return this.table9.headers[1].sticky=!0,this.table9.headers[3].sticky=!0}},async sortFunction(t){this.table10.loading="header";const r=new Promise(f=>setTimeout(()=>f(Ge[t[0]||null]),1e3));this.table10.items=await r,this.table10.loading=!1}},mounted(){var t;this.reload(),(t=localStorage.tableWidths)==null||t.split(",").forEach((r,f)=>this.table8.headers[f].width=r)}},Qe=I(Xe,[["render",Ye]]),Ze=l("div",{class:"w-divider my12"},null,-1);function ea(t,r,f,R,D,p){const o=h("title-link"),d=h("component-api");return u(),b("div",null,[Ze,n(o,{class:"title1",h2:""},{default:a(()=>[e("API")]),_:1}),n(d,{class:"mt0",items:p.props,descriptions:t.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(d,{items:t.slots,title:"Slots"},null,8,["items"]),n(d,{items:p.events,title:"Events"},null,8,["items"])])}const aa={items:"An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>",headers:'An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li>If needed, you can also add any custom property.</li></ul>',noHeaders:"The table headings will be hidden. Only the table data will be visible.",fixedHeaders:"When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.",fixedFooter:"When set to <code>true</code>, the table footer will be sticky at the bottom of the table when scrolling up or when the content is taller than the table container.",fixedLayout:"When set to <code>true</code>, the table layout is set to fixed (<code>table-layout: fixed</code>), which means the table cells won't try to adapt their width to the available space and wrap the content when it does not fit.<br>This layout is used when there are sticky columns or column resizing enabled.",loading:"When set to <code>true</code>, a progress bar will be displayed and any currently visible rows will be hidden.<br>When set to <code>'header', the loading bar will be placed in the header leaving any current rows visible while loading.",sort:'Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.',sortFunction:"Optionally provide an asynchronous sorting function (usually for server-side sorting). This function receives an array of sorting keys as parameter. If the array is empty, the sorting is reset.",expandableRows:"Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.",expandedRows:"Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",selectableRows:"Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.",selectedRows:"Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",forceSelection:"Prevent unselecting a row when only one remains selected.",uidKey:"In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.",filter:"An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>",mobileBreakpoint:"When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.",resizableColumns:"When this option is on, the columns will be separated by borders that you can drag to resize.",pagination:!1},ta={"no-data":{description:"Provide a custom template when there is no data."},loading:{description:"Provide a custom loading template."},"header-label":{description:"Provide a custom header label template.",params:{label:"The label of the header being rendered.",header:"The full header object being rendered.",index:"The index of the header cell being rendered. Starts at 1."}},item:{description:"Provide a custom item template for each full &lt;tr&gt;.",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1.",select:"When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).",classes:"The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object."}},"item-cell":{description:"Provide a custom item cell template (each &lt;td&gt; of each item row).",params:{item:"The full item object of the row being rendered.",header:"The related header object of the current column of the cell being rendered.",label:"The content of the cell being rendered.",index:"The index of the cell in the row being rendered. Starts at 1."}},"row-expansion":{description:"Provide a custom template for the row expansions (to display in an expanded row).",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1."}},footer:{description:"Provide a custom template for the table footer if you want one.<br>All the cells are merged in one for convenience, but if you need all the cells, you can use the <code>footer-row</code> slot."},"footer-row":{description:"Provide a custom template for the table footer if you want one.<br>This slot lets you control the whole &lt;tr&gt;. It expects to receive a &lt;tr&gt; element containing &lt;td&gt;s or &lt;th&gt;s."}},la={"row-click":{description:"",params:{item:"The associated row item object.",index:"The index of the row being clicked (starts at 0) in the current filtering state."}},"row-select":{description:"<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.",params:{item:"The associated row item object.",index:"The index of the row being selected (starts at 0) in the current filtering state.",selected:"A boolean representing the selected state of the clicked row.",selectedRows:"An array containing all the expanded rows objects."}},"row-expand":{description:"<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.",params:{item:"The associated row item object.",index:"The index of the row being expanded (starts at 0) in the current filtering state.",expanded:"A boolean representing the expanded state of the clicked row.",expandedRows:"An array containing all the expanded rows objects."}},"update:sort":{description:"Emitted every time the sorting string is updated by a user interaction.",params:{"[String]":"The currently applied sorting on the table rows. E.g. <code>+firstName</code>"}},"update:selected-rows":{description:"Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.",params:{"[Array]":"The current array of selected rows."}},"update:expanded-rows":{description:"Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.",params:{"[Array]":"The current array of expanded rows."}},"column-resize":{description:"Emitted on mouseup after a column has been resized.",params:{index:"The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).",widths:"An array containing all the new widths of the columns after resizing."}}},na={data:()=>({propsDescs:aa,slots:ta}),computed:{props(){return V.props},events(){return V.emits.reduce((t,r)=>(t[r]=la[r]||{})&&t,{})}}},ia=I(na,[["render",ea]]);function sa(t,r,f,R,D,p){const o=h("ui-component-title"),d=h("examples"),m=h("api");return u(),b("main",null,[n(o,null,{default:a(()=>[e("w-table")]),_:1}),n(d),n(m)])}const ra={components:{Examples:Qe,Api:ia}},da=I(ra,[["render",sa]]);export{da as default};
