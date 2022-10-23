import{r as h,o as u,f as b,a as n,w as t,b as e,d as a,n as k,h as i,F as _,j as R,c as q,e as $,i as j,k as z,_ as I,a6 as B}from"./index.ffdea089.js";const A=a("p",null,[e("When there is no data, a default text will be displayed. You can override it via the "),a("code",null,"no-data"),e(" slot.")],-1),H=a("br",null,null,-1),P=a("p",null,[e("You can align the columns contents separately by adding an "),a("code",null,"align"),e(` key in each header
definition (`),a("code",null,"left"),e(", "),a("code",null,"center"),e(" or "),a("code",null,"right"),e(")."),a("br"),e(`
If you don't define any, `),a("code",null,"left"),e(` will be implicit.
`)],-1),W=a("p",null,[e("Even with the "),a("code",null,"no-headers"),e(" option, the "),a("code",null,"headers"),e(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)],-1),J=a("p",null,[e("A table footer can be added via the "),a("code",null,"footer"),e(` slot. If present, the footer will span on
all the columns by default.
`)],-1),Y={class:"w-flex justify-end"},O=a("strong",{class:"mr2"},"Total:",-1),U=a("p",null,[e("The "),a("code",null,"footer-row"),e(" slot will give you more flexibility as it lets you define the whole table row.")],-1),K=a("p",null,"It can be useful if you want to keep the columns alignments in the footer.",-1),G=a("p",null,[e("You can resize the columns by dragging their edges left or right."),a("br"),e(`
If you want the whole cell content to be on a single line and truncated with the ellipsis
(`),a("code",null,"..."),e("), you can apply this CSS.")],-1),Q=a("p",null,[e(`In some apps, it makes sense to save the prefered table layout of the user, and reapply it
every time this table is loaded. Here is a demo of how to do so.`),a("br"),e(`
To test it, first resize the columns, then refresh the page to see the same layout.`)],-1),X=a("p",null,`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`,-1),Z=a("p",null,[e("To make a column sticky, you only need to add "),a("code",null,"sticky: true"),e(` to the header of that
column.`),a("br"),e(`
The sticky mechanism is done via CSS (position: sticky). So if you set multiple sticky
columns, one will overlap the previous one as you scroll.`)],-1),ee=a("p",{class:"grey"},"Scroll the table horizontally to observe the behavior.",-1),te={class:"w-flex align-center mb2"},ae=a("p",null,[e(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),a("strong",{class:"code"},"w-table"),e("'s sorting is defined with a header key string preceded by a "),a("code",null,"+"),e(` for ASC,
or a `),a("code",null,"-"),e(" for DESC. For instance, in this example: "),a("code",null,"'+firstName'"),e(".")],-1),le=a("p",null,[e(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),a("strong",{class:"code"},"w-table"),e(" component and it will be applied to the table."),a("br"),e(`
Setting the filter to `),a("code",null,"null"),e(" or "),a("code",null,"false"),e(" or "),a("code",null,"undefined"),e(" will remove any previous filter.")],-1),ne={class:"w-flex wrap mb3"},ie=a("p",null,[e("You could also apply a filter globally, which looks into all the columns at once."),a("br"),e(`
Here is one cool way to do it.`)],-1),se=a("strong",null,[e(`If you don't need the RegExp power, you can simply return
`),a("code",null,"allTheColumns.toLowerCase().includes(keyword)"),e(` instead.
`)],-1),oe=a("br",null,null,-1),re=a("br",null,null,-1),de=a("code",null,"|",-1),me=a("br",null,null,-1),he=a("code",null,"new RegExp(keyword, 'i')",-1),ce=a("code",null,"new RegExp(`\\\\b${keyword}\\\\b`, 'i')",-1),ue=a("code",null,"floretta",-1),be=a("code",null,"florett",-1),fe=a("p",null,[e("When the table content is not ready straight away, you can use the "),a("code",null,"loading"),e(` prop to display
a progress bar while loading.`)],-1),pe=a("p",null,"Click a row to see it highlighted and get information about the selected item.",-1),ye=a("p",null,[e("By default, the selection will use the "),a("code",null,"primary"),e(" color and apply an opacity of "),a("code",null,"0.2"),e(`.
If this is not what you want, you can override it via CSS (`),a("code",null,".w-table__row--selected td:before"),e(`).
`)],-1),Ne=a("span",{class:"code"},"selectable-rows",-1),ge=a("p",null,[e("You can enable the rows selection by adding the "),a("code",null,"selectable-rows"),e(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),a("code",null,"1"),e(`
to allow a single selection only.
`)],-1),we=a("span",{class:"code"},"force-selection",-1),ke=a("p",null,[e("Eventually, you can use the "),a("code",null,"force-selection"),e(` prop to prevent unselecting a row when only
one remain selected.
`)],-1),ve=a("span",{class:"code"},"@row-select",-1),xe=j(`<p>This event is fired each time a row is selected <strong>or unselected</strong> (so you don&#39;t need to listen
to 2 different events). <br>
As shown in this example (under the table), the <span class="code">@row-select</span> event will give you access to useful
information such as:</p><ul><li><code>item</code>: the clicked row object</li><li><code>selected</code>: a boolean telling if the row is being selected or unselected</li><li><code>selectedRows</code>: an array of all the selected rows objects</li></ul>`,2),_e=a("div",{class:"mt4 title4"},"Selection info:",-1),Fe=a("p",null,`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`,-1),Se=a("ul",null,[a("li",null,[a("strong",null,"In Vue 2"),e(", you can do 2-way binding on any variable other than the "),a("strong",{class:"code"},"v-model"),e(" using the "),a("code",null,".sync"),e(" modifier.")]),a("li",null,[a("strong",null,"In Vue 3"),e(", multiple "),a("strong",{class:"code"},"v-model"),e(" are supported in order to achieve 2-way binding. So you don't need "),a("code",null,".sync"),e(".")])],-1),Re={class:"mt4"},Ce={class:"ml2"},Ie=a("br",null,null,-1),De=a("code",null,"id",-1),Le=a("code",null,"uid-key",-1),Me=a("p",null,"You can customize the headers labels and/or each row cells.",-1),Te=a("p",null,[e("In this example, only the headers are customized via the "),a("code",null,"header-label"),e(" slot.")],-1),Ee=a("p",null,[e("In this example, only the items cells are customized via the "),a("code",null,"item"),e(` slot
(and the headers are hidden).`)],-1),qe={key:0},Be={class:"grey mr2"},je=j(`<p>If you only need to override 1 particular column you can do it via the <code>item-cell.xxx</code> slot,
where <code>xxx</code> is a key defined in the headers.
In this example: <code>id</code>, <code>firstName</code>, <code>lastName</code>.<br><br>

If it&#39;s more convenient, you can also override a particular cell by its index like <code>item-cell.i</code>,
where <code>i</code> is a an integer starting at 1.</p>`,1),Ve={class:"px2 text-center green-light5--bg text-bold"},$e=a("p",null,[e(`In this example, the full <tr> DOM element is customized, so you can add your own classes
and full layout.`),a("br"),e(`
As you notice, the `),a("code",null,"item"),e(` slot gives you full flexibility, but the drawback is that's more
code to write.`)],-1),ze=["onClick"],Ae=a("span",{class:"code"},"colspan",-1),He=a("p",null,[e("This example is showcasing another useful case: handling a colspan attribute."),a("br"),e(`
All the cells of all the rows are `),a("code",null,"colspan"),e("'d to one, and a custom row layout is applied.")],-1),Pe=["onClick"],We=["colspan"],Je={class:"title3"},Ye={class:"mr2"},Oe=a("p",null,[e("In addition to the full responsiveness, the "),a("code",null,"w-table"),e(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),a("br"),e(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),a("code",null,"mobile-breakpoint"),e(`
parameter.`),a("br"),e(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),a("br"),a("br"),e(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)],-1),Ue=a("p",null,[e("To stay lean and efficient, the minimum JavaScript behavior is added to the "),a("code",null,"w-table"),e(`
component.`),a("br"),e(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),a("br"),e(`
You can override it to set the width you want via:
`)],-1);function Ke(l,o,f,S,D,p){const r=h("title-link"),d=h("w-table"),m=h("example"),y=h("w-button"),g=h("w-icon"),L=h("w-flex"),M=h("ssh-pre"),T=h("w-tag"),E=h("w-radios"),V=h("w-input"),v=h("alert");return u(),b("div",null,[n(r,{h2:""},{default:t(()=>[e("Basic")]),_:1}),n(m,null,{pug:t(()=>[e('w-table(:headers="table.headers" :items="table.items")')]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items},null,8,["headers","items"])]),_:1}),n(r,{h2:""},{default:t(()=>[e("When there is no data")]),_:1}),A,n(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) \u{1F44C} There is no data! \u{1F44C}`)]),html:t(()=>[e(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    \u{1F44C} There is no data! \u{1F44C}
  </template>
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:[]},null,8,["headers"]),H,n(d,{headers:l.table1.headers,items:[]},{"no-data":t(()=>[e("\u{1F44C} There is no data! \u{1F44C}")]),_:1},8,["headers"])]),_:1}),n(r,{h2:""},{default:t(()=>[e("Alignments")]),_:1}),P,n(m,null,{pug:t(()=>[e('w-table(:headers="table.headers" :items="table.items")')]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table2.headers,items:l.table2.items},null,8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"example--no-headers"},{default:t(()=>[e("No headers")]),_:1}),W,n(m,null,{pug:t(()=>[e('w-table(:items="table.items" :headers="table.headers" no-headers)')]),html:t(()=>[e(`<w-table
  :items="table.items"
  :headers="table.headers"
  no-headers>
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"no-headers":""},null,8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"example--fixed-headers"},{default:t(()=>[e("Fixed headers")]),_:1}),n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table3.headers,items:l.table3.items,"fixed-headers":"",style:{height:"250px"}},null,8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"example--footer"},{default:t(()=>[e("Footer")]),_:1}),n(r,{h3:"",slug:"example--footer-slot"},{default:t(()=>[e("Footer slot")]),_:1}),J,a("div",Y,[n(y,{onClick:o[0]||(o[0]=s=>l.table3.fixedFooter=!l.table3.fixedFooter),outline:!l.table3.fixedFooter,round:""},{default:t(()=>[a("span",{class:k(["code",l.table3.fixedFooter?"white":"primary"])},"fixed-footer",2)]),_:1},8,["outline"])]),n(m,null,{pug:t(()=>[e(`w-table(
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
        | `+i("{{ table.items.length }}")+" persons",1)]),html:t(()=>[e(`<w-table
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
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
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
      this.$refs.table.$el
        .querySelector('tbody tr:last-child')
        .scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  }
}
`)]),default:t(()=>[n(d,{ref:"table",headers:l.table3.headers,items:l.table3.items,"fixed-footer":l.table3.fixedFooter,style:{height:"250px"}},{footer:t(()=>[n(L,{"justify-space-between":""},{default:t(()=>[n(y,{round:"",sm:"",onClick:p.addRow},{default:t(()=>[n(g,{class:"mr1"},{default:t(()=>[e("wi-plus")]),_:1}),e("add person")]),_:1},8,["onClick"]),a("div",null,[O,e(i(l.table3.items.length)+" persons",1)])]),_:1})]),_:1},8,["headers","items","fixed-footer"])]),_:1}),n(r,{h3:"",slug:"example--footer-slot"},{default:t(()=>[e("Footer-row slot")]),_:1}),U,K,n(m,null,{pug:t(()=>[e(`w-table(
  ref="table"
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
        | `+i("{{ header.label }}"),1)]),html:t(()=>[e(`<w-table
  ref="table"
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
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{ref:"table",headers:l.table3.headers,"no-headers":"",items:l.table3.items,"fixed-footer":l.table3.fixedFooter,style:{height:"250px"}},{"footer-row":t(()=>[a("tr",null,[(u(!0),b(_,null,R(l.table3.headers,(s,c)=>(u(),b("th",{class:k(["py1",`${c?"px1":"px2"} text-${s.align||"left"}`]),key:c},i(s.label),3))),128))])]),_:1},8,["headers","items","fixed-footer"])]),_:1}),n(r,{h2:""},{default:t(()=>[e("Built-in column resizing")]),_:1}),G,n(M,{language:"css"},{default:t(()=>[e(`.w-table__cell {
  white-space: nowrap;
}
`)]),_:1}),n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table7.headers,items:l.table7.items,"resizable-columns":""},null,8,["headers","items"])]),_:1}),n(r,{h3:""},{default:t(()=>[e("Saving the table layout in localStorage")]),_:1}),Q,n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table8.headers,items:l.table8.items,"resizable-columns":"",onColumnResize:p.onColumnResize},null,8,["headers","items","onColumnResize"])]),_:1}),n(r,{h2:""},{default:t(()=>[e("Toggling column visibility")]),_:1}),X,n(m,null,{pug:t(()=>[e(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+i("{{ header.hidden ? '-off' : ''}}")+`
  | `+i("{{ header.label }}")+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`,1)]),html:t(()=>[e(`Toggle columns:
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
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[e("Toggle columns:"),(u(!0),b(_,null,R(l.table6.headers,(s,c)=>(u(),q(T,{class:"ma1",key:c,"bg-color":s.hidden?"grey-light4":"primary",onClick:z(N=>s.hidden=!s.hidden,["stop"])},{default:t(()=>[n(g,{class:"mr2"},{default:t(()=>[e("mdi mdi-eye"+i(s.hidden?"-off":""),1)]),_:2},1024),e(i(s.label),1)]),_:2},1032,["bg-color","onClick"]))),128)),n(d,{class:"mt2",headers:l.table6.headers.filter(s=>!s.hidden),items:l.table6.items},null,8,["headers","items"])]),_:1}),n(r,{h2:""},{default:t(()=>[e("Sticky columns")]),_:1}),Z,ee,n(m,null,{pug:t(()=>[e(`w-table(
:headers="table.headers"
:items="table.items"
fixed-layout
:fixed-headers="table.fixedHeaders"
style="max-width: 500px;height: 200px")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-layout
  :fixed-headers="table.fixedHeaders"
  style="max-width: 500px;height: 200px">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[a("div",te,[e("Sticky columns:"),n(E,{class:"ml1 mr4",modelValue:l.table9.stickyColumn,"onUpdate:modelValue":o[1]||(o[1]=s=>l.table9.stickyColumn=s),items:l.table9.stickyColumnOptions,onChange:p.toggleStickyColumn,inline:""},null,8,["modelValue","items","onChange"]),n(y,{onClick:o[2]||(o[2]=s=>l.table9.fixedHeaders=!l.table9.fixedHeaders),outline:!l.table9.fixedHeaders,round:""},{default:t(()=>[a("span",{class:k(["code",l.table9.fixedHeaders?"white":"primary"])},"fixed-headers",2)]),_:1},8,["outline"])]),n(d,{class:"white--bg",headers:l.table9.headers,items:l.table9.items,"fixed-layout":"","fixed-headers":l.table9.fixedHeaders,style:{"max-width":"500px",height:"200px"}},null,8,["headers","items","fixed-headers"])]),_:1}),n(r,{h2:""},{default:t(()=>[e("Initial Sorting")]),_:1}),ae,n(m,null,{pug:t(()=>[e('w-table(:headers="table.headers" :items="table.items" v-model:sort="table.sort")')]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,sort:l.table1.sort,"onUpdate:sort":o[3]||(o[3]=s=>l.table1.sort=s)},null,8,["headers","items","sort"])]),_:1}),n(r,{h2:""},{default:t(()=>[e("Filtering")]),_:1}),le,n(m,null,{pug:t(()=>[e(`.w-flex.wrap.mb3
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
  :filter="table.filters[table.activeFilter]")`)]),html:t(()=>[e(`<div class="w-flex wrap mb3">
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
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[a("div",ne,[n(y,{class:"mr2 mb1",onClick:o[4]||(o[4]=s=>l.table3.activeFilter=0),round:"",outline:l.table3.activeFilter!==0},{default:t(()=>[e("No filter")]),_:1},8,["outline"]),n(y,{class:"mr2 mb1",onClick:o[5]||(o[5]=s=>l.table3.activeFilter=1),round:"",outline:l.table3.activeFilter!==1},{default:t(()=>[e("Last name starting with 'M'")]),_:1},8,["outline"]),n(y,{class:"mr2 mb1",onClick:o[6]||(o[6]=s=>l.table3.activeFilter=2),round:"",outline:l.table3.activeFilter!==2},{default:t(()=>[e("ID >= 10")]),_:1},8,["outline"])]),n(d,{headers:l.table3.headers,items:l.table3.items,filter:l.table3.filters[l.table3.activeFilter]},null,8,["headers","items","filter"])]),_:1}),n(r,{h3:""},{default:t(()=>[e("Global filter")]),_:1}),ie,n(m,null,{pug:t(()=>[e(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`)]),html:t(()=>[e(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
})`)]),default:t(()=>[n(V,{class:"mb3",modelValue:l.table4.keyword,"onUpdate:modelValue":o[7]||(o[7]=s=>l.table4.keyword=s),placeholder:"Search anything...","inner-icon-left":"wi-search"},null,8,["modelValue"]),n(d,{headers:l.table4.headers,items:l.table4.items,filter:l.table4.keywordFilter(l.table4.keyword)},null,8,["headers","items","filter"])]),_:1}),n(v,{tip:""},{default:t(()=>[se,oe,re,e(`But the real power of using a regular expression
`),n(g,{class:"red mr1",size:"0.9em"},{default:t(()=>[e("mdi mdi-heart")]),_:1}),e(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `),de,e(" etc."),me,e(`
You could also match only the full words by replacing `),he,e(` with
`),ce,e(" (it would return a result when typing "),ue,e(`
but not `),be,e(" for instance).")]),_:1}),n(r,{h2:""},{default:t(()=>[e("Loading state")]),_:1}),fe,n(y,{class:"mb2",disabled:l.table1.loading,onClick:p.reload},{default:t(()=>[n(g,{class:"mr1"},{default:t(()=>[e("mdi mdi-sync")]),_:1}),e("reload")]),_:1},8,["disabled","onClick"]),n(r,{h3:""},{default:t(()=>[e("Simple table - no set height")]),_:1}),n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,loading:l.table1.loading},null,8,["headers","items","loading"])]),_:1}),n(r,{h3:"",slug:"loading-with-fixed-header"},{default:t(()=>[e("Table with fixed header & set height of 200px")]),_:1}),n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table3.items,"fixed-headers":"",loading:l.table1.loading,style:{height:"200px"}},null,8,["headers","items","loading"])]),_:1}),n(r,{h2:"",slug:"pagination"},{default:t(()=>[e("Pagination"),n(T,{class:"ml2 text-bold",round:"",color:"warning",outline:"",sm:""},{default:t(()=>[e("COMING SOON")]),_:1})]),_:1}),n(m,null,{pug:t(()=>[]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[e("Coming soon.")]),_:1}),n(r,{h2:""},{default:t(()=>[e("Rows selection")]),_:1}),pe,ye,n(r,{h3:"",slug:"example--selectable-rows"},{default:t(()=>[e("The "),Ne,e(" prop")]),_:1}),ge,n(r,{h3:"",slug:"example--force-selection"},{default:t(()=>[e("The "),we,e(" prop")]),_:1}),ke,n(r,{h3:"",slug:"example--row-select"},{default:t(()=>[e("The "),ve,e(" event")]),_:1}),xe,n(m,null,{pug:t(()=>[e(`w-flex.mb4(wrap)
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
pre `+i("{{ selectionInfo }}"))]),html:t(()=>[e(`<w-flex wrap class="mb4">
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
<pre>`+i("{{ selectionInfo }}")+"</pre>")]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(L,{class:"mb4",wrap:""},{default:t(()=>[n(E,{class:"mr6",modelValue:l.table1.selectableRows,"onUpdate:modelValue":o[8]||(o[8]=s=>l.table1.selectableRows=s),items:l.selectableRowsOptions},null,8,["modelValue","items"]),n(y,{class:"my3",onClick:o[9]||(o[9]=s=>l.table1.forceSelection=!l.table1.forceSelection),round:"",outline:!l.table1.forceSelection},{default:t(()=>[l.table1.forceSelection?(u(),q(g,{key:0,class:"mr2"},{default:t(()=>[e("wi-check")]),_:1})):$("",!0),e("Force selection")]),_:1},8,["outline"])]),_:1}),n(d,{headers:l.table1.headers,items:l.table1.items,"selectable-rows":l.table1.selectableRows,"force-selection":l.table1.forceSelection,onRowSelect:o[10]||(o[10]=s=>l.selectionInfo=s)},null,8,["headers","items","selectable-rows","force-selection"]),_e,a("pre",null,i(l.selectionInfo),1)]),_:1}),n(r,{h3:""},{default:t(()=>[e("Updating the selected rows programmatically")]),_:1}),Fe,n(v,{tip:""},{default:t(()=>[Se]),_:1}),n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows")
.mt4
  | Selected rows:
  code.ml2 `+i("{{ table.selectedRows }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows">
</w-table>

<div class="mt4">
  Selected rows:
  <code class="ml2">`+i("{{ table.selectedRows }}")+`</code>
</div>`,1)]),js:t(()=>[e(`data: () => ({
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
})`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"selectable-rows":"","selected-rows":l.table1.selectedRows,"onUpdate:selected-rows":o[11]||(o[11]=s=>l.table1.selectedRows=s)},null,8,["headers","items","selected-rows"]),a("div",Re,[e("Selected rows:"),a("code",Ce,i(l.table1.selectedRows),1)])]),_:1}),n(v,{info:""},{default:t(()=>[e("In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier."),Ie,e(`
By default the expanded rows array will use an `),De,e(` key, if present in the item object,
or will assign an internal unique ID otherwise.
If you want, you can override the default unique ID key (when internally needed) with
the `),Le,e(` prop, which is set to "id" by default.
`)]),_:1}),n(r,{h2:"",slug:"example--expandable-rows"},{default:t(()=>[e("Expandable rows")]),_:1}),n(v,{warning:""},{default:t(()=>[e("This feature is in progress.")]),_:1}),n(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="table.items" expandable-rows)
  template(#row-expansion="{ item }")
    w-icon.mr2(:color="['blue', 'pink'][item.gender]")
      | mdi `+i("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    | `+i("{{ item.firstName }}")+" weighs ",1),a("strong",null,i("{{ item.weight }}")+"kg",1),e(" and is "),a("strong",null,i("{{ item.height }}")+"m",1),e(" tall.")]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  expandable-rows>
  <template #row-expansion="{ item }">
    <w-icon class="mr2" :color="['blue', 'pink'][item.gender]">
      mdi `+i("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    </w-icon>
    `+i("{{ item.firstName }}")+" weighs ",1),a("strong",null,i("{{ item.weight }}")+"kg",1),e(" and is "),a("strong",null,i("{{ item.height }}")+"m",1),e(` tall.
  </template>
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table5.headers,items:l.table5.items,"expandable-rows":""},{"row-expansion":t(({item:s})=>[n(g,{class:"mr2",color:["blue","pink"][s.gender]},{default:t(()=>[e("mdi "+i(["mdi-gender-male","mdi-gender-female"][s.gender]),1)]),_:2},1032,["color"]),e(i(s.firstName)+" weighs ",1),a("strong",null,i(s.weight)+"kg",1),e(" and is "),a("strong",null,i(s.height)+"m",1),e(" tall.")]),_:1},8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"slots"},{default:t(()=>[e("Headers & cells customization via slots")]),_:1}),Me,n(r,{h3:""},{default:t(()=>[e("Headers")]),_:1}),Te,n(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="table.items")
  template(#header-label="{ label, index }") `+i("{{ index }}: {{ label }}")+" \u{1F44C}")]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items">
  <template #header-label="{ label, index }">
    `+i("{{ index }}: {{ label }}")+` \u{1F44C}
  </template>
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items},{"header-label":t(({label:s,index:c})=>[e(i(c)+": "+i(s)+" \u{1F44C}",1)]),_:1},8,["headers","items"])]),_:1}),n(r,{h3:"",slug:"item-cells"},{default:t(()=>[e("Item cells (inside <td> element)")]),_:1}),Ee,n(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" no-headers :items="table.items")
  template(#item-cell="{ item, label, header, index }")
    small.grey.mr2 `+i("{{ header.label }}")+`:
    span `+i("{{ label }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items">
  <template #item-cell="{ item, label, header, index }">
    <small class="grey mr2">`+i("{{ header.label }}")+`:</small>
    <span>`+i("{{ label }}")+`</span>
  </template>
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,"no-headers":"",items:l.table1.items},{"item-cell":t(({item:s,label:c,header:N,index:w})=>[N.key==="id"?(u(),b("small",qe,"#"+i(w),1)):(u(),b(_,{key:1},[a("small",Be,i(N.label)+":",1),a("span",null,i(c),1)],64))]),_:1},8,["headers","items"])]),_:1}),n(r,{h3:"",slug:"override-1-particular-item-cell"},{default:t(()=>[e("override 1 particular item cell or column cells (inside <td> element)")]),_:1}),je,n(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="table.items" no-headers)
  template(#item-cell.id="{ item, label, header, index }")
    div.px2.text-center.green-light5--bg.text-bold `+i("{{ label }}"))]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers>
  <template #item-cell.id="{ item, label, header, index }">
    <div class="px2 text-center green-light5--bg text-bold">
      `+i("{{ label }}")+`
    </div>
  </template>
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"no-headers":""},{"item-cell.id":t(({item:s,label:c,header:N,index:w})=>[a("div",Ve,i(c),1)]),_:1},8,["headers","items"])]),_:1}),n(r,{h2:"",slug:"full-custom-rows"},{default:t(()=>[e("Full custom row (<tr> element itself)")]),_:1}),$e,n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(:class="classes" @click="select")
      td(
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`")
        | `+i("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
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
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"selectable-rows":""},{item:t(({item:s,index:c,select:N,classes:w})=>[a("tr",{class:k(w),onClick:N},[(u(!0),b(_,null,R(l.table1.headers,(x,C)=>(u(),b("td",{key:C,class:k(`pa4 text-${x.align||"left"}`)},i(s[x.key]||""),3))),128))],10,ze)]),_:1},8,["headers","items"])]),_:1}),n(r,{h3:"",slug:"colspan-on-td"},{default:t(()=>[Ae,e(" on <td>")]),_:1}),He,n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(
      :class="{ ...classes, 'indigo-light5--bg': index % 2, 'blue-light5--bg': !(index % 2) }"
      @click="select")
      td.pa2(:colspan="table.headers.length")
        .title3 Row #`+i("{{ index }}")+`
        ul
          li(v-for="(header, i) in table.headers" :key="i")
            strong.mr2 `+i("{{ header.label }}")+`:
            | `+i("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr
      :class="{
        ...classes,
        'indigo-light5--bg': index % 2,
        'blue-light5--bg': !(index % 2)
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
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table1.headers,items:l.table1.items,"no-headers":"","selectable-rows":""},{item:t(({item:s,index:c,select:N,classes:w})=>[a("tr",{class:k({...w,"indigo-light5--bg":c%2,"blue-light5--bg":!(c%2)}),onClick:N},[a("td",{class:"pa2",colspan:l.table1.headers.length},[a("div",Je,"Row #"+i(c),1),a("ul",null,[(u(!0),b(_,null,R(l.table1.headers,(x,C)=>(u(),b("li",{key:C},[a("strong",Ye,i(x.label)+":",1),e(i(s[x.key]||""),1)]))),128))])],8,We)],10,Pe)]),_:1},8,["headers","items"])]),_:1}),n(r,{h2:""},{default:t(()=>[e("Responsiveness & mobile layout")]),_:1}),Oe,n(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700">
</w-table>`)]),js:t(()=>[e(`data: () => ({
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
`)]),default:t(()=>[n(d,{headers:l.table2.headers,items:l.table2.items,"mobile-breakpoint":700},null,8,["headers","items"])]),_:1}),n(v,{tip:""},{default:t(()=>[Ue,n(M,{class:"mt5 mb0",language:"css",label:"CSS"},{default:t(()=>[e(".w-table--mobile .w-table__cell:before {width: 8em;}")]),_:1})]),_:1})])}const F=[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:6,firstName:"Baldwin",lastName:"Morison"},{id:7,firstName:"Beckah",lastName:"Mann"},{id:8,firstName:"Davie",lastName:"Forester"},{id:9,firstName:"Andi",lastName:"Montgomery"},{id:10,firstName:"Magnolia",lastName:"Kirk"},{id:11,firstName:"Hamilton",lastName:"Mallory"},{id:12,firstName:"Sheree",lastName:"Castle"},{id:13,firstName:"Rebekah",lastName:"Eason"},{id:14,firstName:"Maude",lastName:"Hayley"},{id:15,firstName:"Josie",lastName:"Richard"}],Ge={data:()=>({table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:F.slice(0,5),sort:"+firstName",loading:!0,selectableRows:!0,selectedRows:[2,4],forceSelection:!1},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:F.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:F,filters:[null,l=>l.lastName[0]==="M",l=>l.id>=10],activeFilter:0,fixedFooter:!1},table4:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:F,keyword:"",keywordFilter:l=>o=>{const f=`${o.id} ${o.firstName} ${o.lastName}`;return new RegExp(l,"i").test(f)}},table5:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",gender:1,weight:56,height:1.69},{id:2,firstName:"Nellie",lastName:"Lynn",gender:1,weight:62,height:1.77},{id:3,firstName:"Rory",lastName:"Bristol",gender:0,weight:71,height:1.75},{id:4,firstName:"Daley",lastName:"Elliott",gender:0,weight:84,height:1.83},{id:5,firstName:"Virgil",lastName:"Carman",gender:0,weight:74,height:1.72}]},table6:{headers:[{label:"ID",key:"id",hidden:!1},{label:"First name",key:"firstName",hidden:!1},{label:"Last name",key:"lastName",hidden:!1}],items:F.slice(0,5)},table7:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table8:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table9:{stickyColumn:1,fixedHeaders:!1,stickyColumnOptions:[{value:1,label:"#1"},{value:2,label:"#2"},{value:24,label:"#2 & #4"},{value:0,label:"None"}],headers:[{label:"ID",key:"id",hidden:!1,width:"60px",sticky:!0},{label:"First name",key:"firstName",hidden:!1,width:"120px"},{label:"Last name",key:"lastName",hidden:!1,width:"120px"},{label:"Birthday",key:"birthday",email:!1,width:"150px"},{label:"Email",key:"email",hidden:!1,width:"200px"},{label:"Phone",key:"phone",hidden:!1,width:"200px"},{label:"Country",key:"country",hidden:!1,width:"200px"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",birthday:"Feb. 12, 1976",email:"f.sampson@gmail.com",phone:"+21 234 567 8921",country:"United Kingdom"},{id:2,firstName:"Nellie",lastName:"Lynn",birthday:"Dec. 15, 1995",email:"n.lynn@gmail.com",phone:"+22 234 567 8922",country:"Luxembourg"},{id:3,firstName:"Rory",lastName:"Bristol",birthday:"Apr. 25, 1989",email:"r.bristol@gmail.com",phone:"+23 234 567 8923",country:"Montenegro"},{id:4,firstName:"Daley",lastName:"Elliott",birthday:"Mar. 24, 2002",email:"d.elliott@gmail.com",phone:"+24 234 567 8924",country:"Germany"},{id:5,firstName:"Virgil",lastName:"Carman",birthday:"Aug. 2, 1990",email:"v.carman@gmail.com",phone:"+25 234 567 8925",country:"Ukraine"},{id:6,firstName:"Baldwin",lastName:"Morison",birthday:"Feb. 12, 2008",email:"b.morison@gmail.com",phone:"+26 234 567 8926",country:"Lithuania"},{id:7,firstName:"Beckah",lastName:"Mann",birthday:"Nov. 6, 1991",email:"b.mann@gmail.com",phone:"+27 234 567 8927",country:"Finland"},{id:8,firstName:"Davie",lastName:"Forester",birthday:"Dec. 6, 1982",email:"d.forester@gmail.com",phone:"+28 234 567 8928",country:"Portugal"},{id:9,firstName:"Andi",lastName:"Montgomery",birthday:"Jan. 20, 1987",email:"a.montgomery@gmail.com",phone:"+29 234 567 8929",country:"Czechia"},{id:10,firstName:"Magnolia",lastName:"Kirk",birthday:"Dec. 31, 1992",email:"m.kirk@gmail.com",phone:"+30 234 567 8930",country:"Norway"},{id:11,firstName:"Hamilton",lastName:"Mallory",birthday:"Dec. 7, 1979",email:"h.mallory@gmail.com",phone:"+31 234 567 8931",country:"Greece"},{id:12,firstName:"Sheree",lastName:"Castle",birthday:"Feb. 16, 1980",email:"s.castle@gmail.com",phone:"+32 234 567 8932",country:"France"},{id:13,firstName:"Rebekah",lastName:"Eason",birthday:"Jun. 29, 2000",email:"r.eason@gmail.com",phone:"+33 234 567 8933",country:"Poland"},{id:14,firstName:"Maude",lastName:"Hayley",birthday:"Dec. 31, 2009",email:"m.hayley@gmail.com",phone:"+34 234 567 8934",country:"Hungary"},{id:15,firstName:"Josie",lastName:"Richard",birthday:"Aug. 16, 2004",email:"j.richard@gmail.com",phone:"+35 234 567 8935",country:"Italy"}]},selectableRowsOptions:[{label:'<code class="mr2">:selectable-row="false"</code> (default)',value:!1},{label:"<code>selectable-row</code>",value:!0},{label:'<code>:selectable-row="1"</code>',value:1}],selectionInfo:{}}),methods:{reload(){this.table1.loading=!0,setTimeout(()=>this.table1.loading=!1,2e3)},hideColumn(l){this.table6.headers[l].hidden=!this.table6.headers[l].hidden},onColumnResize({index:l,widths:o}){o.forEach((f,S)=>this.table8.headers[S].width=f),localStorage.tableWidths=o},addRow(){this.table3.items.push({id:this.table3.items.length+1,firstName:"John",lastName:"Doe"}),this.$nextTick(()=>{this.$refs.table.$el.querySelector("tbody tr:last-child").scrollIntoView({behavior:"smooth",block:"nearest"})})},toggleStickyColumn(){switch(this.table9.headers.forEach(l=>l.sticky=!1),this.table9.stickyColumn){case 1:return this.table9.headers[0].sticky=!0;case 2:return this.table9.headers[1].sticky=!0;case 24:return this.table9.headers[1].sticky=!0,this.table9.headers[3].sticky=!0}}},mounted(){var l;this.reload(),(l=localStorage.tableWidths)==null||l.split(",").forEach((o,f)=>this.table8.headers[f].width=o)}},Qe=I(Ge,[["render",Ke]]),Xe=a("div",{class:"w-divider my12"},null,-1);function Ze(l,o,f,S,D,p){const r=h("title-link"),d=h("component-api");return u(),b("div",null,[Xe,n(r,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),n(d,{class:"mt0",items:p.props,descriptions:l.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(d,{items:l.slots,title:"Slots"},null,8,["items"]),n(d,{items:p.events,title:"Events"},null,8,["items"])])}const et={items:"An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>",headers:'An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li>If needed, you can also add any custom property.</li></ul>',noHeaders:"The table headings will be hidden. Only the table data will be visible.",fixedHeaders:"When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.",fixedFooter:"When set to <code>true</code>, the table footer will be sticky at the bottom of the table when scrolling up or when the content is taller than the table container.",fixedLayout:"When set to <code>true</code>, the table layout is set to fixed (<code>table-layout: fixed</code>), which means the table cells won't try to adapt their width to the available space and wrap the content when it does not fit.<br>This layout is used when there are sticky columns or column resizing enabled.",loading:"When set to <code>true</code>, a progress bar will be displayed. Convenient when the table data is not ready.",sort:'Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.',expandableRows:"Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.",expandedRows:"Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",selectableRows:"Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.",selectedRows:"Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",forceSelection:"Prevent unselecting a row when only one remains selected.",uidKey:"In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.",filter:"An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>",mobileBreakpoint:"When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.",resizableColumns:"When this option is on, the columns will be separated by borders that you can drag to resize."},tt={"no-data":{description:"Provide a custom template when there is no data."},loading:{description:"Provide a custom loading template."},"header-label":{description:"Provide a custom header label template.",params:{label:"The label of the header being rendered.",header:"The full header object being rendered.",index:"The index of the header cell being rendered. Starts at 1."}},item:{description:"Provide a custom item template for each full &lt;tr&gt;.",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1.",select:"When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).",classes:"The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object."}},"item-cell":{description:"Provide a custom item cell template (each &lt;td&gt; of each item row).",params:{item:"The full item object of the row being rendered.",header:"The related header object of the current column of the cell being rendered.",label:"The content of the cell being rendered.",index:"The index of the cell in the row being rendered. Starts at 1."}},"row-expansion":{description:"Provide a custom template for the row expansions (to display in an expanded row).",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1."}},footer:{description:"Provide a custom template for the table footer if you want one.<br>All the cells are merged in one for convenience, but if you need all the cells, you can use the <code>footer-row</code> slot."},"footer-row":{description:"Provide a custom template for the table footer if you want one.<br>This slot lets you control the whole &lt;tr&gt;. It expects to receive a &lt;tr&gt; element containing &lt;td&gt;s or &lt;th&gt;s."}},at={"row-click":{description:"",params:{item:"The associated row item object.",index:"The index of the row being clicked (starts at 0) in the current filtering state."}},"row-select":{description:"<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.",params:{item:"The associated row item object.",index:"The index of the row being selected (starts at 0) in the current filtering state.",selected:"A boolean representing the selected state of the clicked row.",selectedRows:"An array containing all the expanded rows objects."}},"row-expand":{description:"<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.",params:{item:"The associated row item object.",index:"The index of the row being expanded (starts at 0) in the current filtering state.",expanded:"A boolean representing the expanded state of the clicked row.",expandedRows:"An array containing all the expanded rows objects."}},"update:sort":{description:"Emitted every time the sorting string is updated by a user interaction.",params:{"[String]":"The currently applied sorting on the table rows. E.g. <code>+firstName</code>"}},"update:selected-rows":{description:"Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.",params:{"[Array]":"The current array of selected rows."}},"update:expanded-rows":{description:"Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.",params:{"[Array]":"The current array of expanded rows."}},"column-resize":{description:"Emitted on mouseup after a column has been resized.",params:{index:"The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).",widths:"An array containing all the new widths of the columns after resizing."}}},lt={data:()=>({propsDescs:et,slots:tt}),computed:{props(){return B.props},events(){return B.emits.reduce((l,o)=>(l[o]=at[o]||{})&&l,{})}}},nt=I(lt,[["render",Ze]]);function it(l,o,f,S,D,p){const r=h("ui-component-title"),d=h("examples"),m=h("api");return u(),b("main",null,[n(r,{slug:"w-table"},{default:t(()=>[e("w-table")]),_:1}),n(d),n(m)])}const st={components:{Examples:Qe,Api:nt}},rt=I(st,[["render",it]]);export{rt as default};
