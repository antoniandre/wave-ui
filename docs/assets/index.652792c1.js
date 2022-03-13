var H=Object.defineProperty,Y=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var E=(s,i,c)=>i in s?H(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c,j=(s,i)=>{for(var c in i||(i={}))O.call(i,c)&&E(s,c,i[c]);if(T)for(var c of T(i))U.call(i,c)&&E(s,c,i[c]);return s},B=(s,i)=>Y(s,P(i));import{r as h,o as b,f,a as l,w as t,e,h as n,F,z as R,c as V,A as J,b as a,d as K,n as I,M}from"./vendor.c30f2c6c.js";import{_ as C,H as z}from"./index.67df9d80.js";const G=e("Basic"),Q=e('w-table(:headers="table.headers" :items="table.items")'),X=e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`),Z=e(`data: () => ({
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
`),ee=e("When there is no data"),te=a("p",null,[e("When there is no data, a default text will be displayed. You can override it via the "),a("code",null,"no-data"),e(" slot.")],-1),ae=a("br",null,null,-1),se=e("\u{1F44C} There is no data! \u{1F44C}"),le=e(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) \u{1F44C} There is no data! \u{1F44C}`),ne=e(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    \u{1F44C} There is no data! \u{1F44C}
  </template>
</w-table>`),ie=e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`),oe=e("Alignments"),re=a("p",null,[e("You can align the columns contents separately by adding an "),a("code",null,"align"),e(` key in each header
definition (`),a("code",null,"left"),e(", "),a("code",null,"center"),e(" or "),a("code",null,"right"),e(")."),a("br"),e(`
If you don't define any, `),a("code",null,"left"),e(` will be implicit.
`)],-1),de=e('w-table(:headers="table.headers" :items="table.items")'),me=e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`),ce=e(`data: () => ({
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
`),he=e("No headers"),ue=a("p",null,[e("Even with the "),a("code",null,"no-headers"),e(" option, the "),a("code",null,"headers"),e(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)],-1),be=e('w-table(:items="table.items" :headers="table.headers" no-headers)'),fe=e(`<w-table
  :items="table.items"
  :headers="table.headers"
  no-headers>
</w-table>`),pe=e(`data: () => ({
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
`),we=e("Fixed headers"),ge=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px")`),ye=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px">
</w-table>`),Ne=e(`data: () => ({
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
`),_e=e("Built-in column resizing"),ke=a("p",null,[e("You can resize the columns by dragging their edges left or right."),a("br"),e(`
If you want the whole cell content to be on a single line and truncated with the ellipsis
(`),a("code",null,"..."),e("), you can apply this CSS.")],-1),ve=e(`.w-table__cell {
  white-space: nowrap;
}
`),xe=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`),Fe=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`),Se=e(`data: () => ({
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
`),Re=e("Saving the table layout in localStorage"),Ie=a("p",null,[e(`In some apps, it makes sense to save the prefered table layout of the user, and reapply it
every time this table is loaded. Here is a demo of how to do so.`),a("br"),e(`
To test it, first resize the columns, then refresh the page to see the same layout.`)],-1),Ce=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`),De=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize">
</w-table>`),Le=e(`data: () => ({
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
`),qe=e("Toggling column visibility"),Te=a("p",null,`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`,-1),Ee=e("Toggle columns:"),je=e(`data: () => ({
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
`),Be=e("Initial Sorting"),Ve=a("p",null,[e(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),a("strong",{class:"code"},"w-table"),e("'s sorting is defined with a header key string preceded by a "),a("code",null,"+"),e(` for ASC,
or a `),a("code",null,"-"),e(" for DESC. For instance, in this example: "),a("code",null,"'+firstName'"),e(".")],-1),Me=e('w-table(:headers="table.headers" :items="table.items" v-model:sort="table.sort")'),ze=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort">
</w-table>`),$e=e(`data: () => ({
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
`),Ae=e("Filtering"),We=a("p",null,[e(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),a("strong",{class:"code"},"w-table"),e(" component and it will be applied to the table."),a("br"),e(`
Setting the filter to `),a("code",null,"null"),e(" or "),a("code",null,"false"),e(" or "),a("code",null,"undefined"),e(" will remove any previous filter.")],-1),He={class:"w-flex wrap mb3"},Ye=e("No filter"),Pe=e("Last name starting with 'M'"),Oe=e("ID >= 10"),Ue=e(`.w-flex.wrap.mb3
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
  :filter="table.filters[table.activeFilter]")`),Je=e(`<div class="w-flex wrap mb3">
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
</w-table>`),Ke=e(`data: () => ({
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
`),Ge=e("Global filter"),Qe=a("p",null,[e("You could also apply a filter globally, which looks into all the columns at once."),a("br"),e(`
Here is one cool way to do it.`)],-1),Xe=e(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`),Ze=e(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`),et=e(`data: () => ({
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
})`),tt=a("strong",null,[e(`If you don't need the RegExp power, you can simply return
`),a("code",null,"allTheColumns.toLowerCase().includes(keyword)"),e(` instead.
`)],-1),at=a("br",null,null,-1),st=a("br",null,null,-1),lt=e(`But the real power of using a regular expression
`),nt=e("mdi mdi-heart"),it=e(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `),ot=a("code",null,"|",-1),rt=e(" etc."),dt=a("br",null,null,-1),mt=e(`
You could also match only the full words by replacing `),ct=a("code",null,"new RegExp(keyword, 'i')",-1),ht=e(` with
`),ut=a("code",null,"new RegExp(`\\\\b${keyword}\\\\b`, 'i')",-1),bt=e(" (it would return a result when typing "),ft=a("code",null,"floretta",-1),pt=e(`
but not `),wt=a("code",null,"florett",-1),gt=e(" for instance)."),yt=e("Loading state"),Nt=a("p",null,[e("When the table content is not ready straight away, you can use the "),a("code",null,"loading"),e(` prop to display
a progress bar while loading.`)],-1),_t=e("mdi mdi-sync"),kt=e("reload"),vt=e("Simple table - no set height"),xt=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`),Ft=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`),St=e(`data: () => ({
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
`),Rt=e("Table with fixed header & set height of 200px"),It=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`),Ct=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`),Dt=e(`data: () => ({
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
`),Lt=e("Pagination"),qt=e("COMING SOON"),Tt=e("Coming soon."),Et=e(`data: () => ({
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
`),jt=e("Rows selection"),Bt=a("p",null,"Click a row to see it highlighted and get information about the selected item.",-1),Vt=a("p",null,[e("By default, the selection will use the "),a("code",null,"primary"),e(" color and apply an opacity of "),a("code",null,"0.2"),e(`.
If this is not what you want, you can override it via CSS (`),a("code",null,".w-table__row--selected td:before"),e(`).
`)],-1),Mt=e("The "),zt=a("span",{class:"code"},"selectable-rows",-1),$t=e(" prop"),At=a("p",null,[e("You can enable the rows selection by adding the "),a("code",null,"selectable-rows"),e(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),a("code",null,"1"),e(`
to allow a single selection only.
`)],-1),Wt=e("The "),Ht=a("span",{class:"code"},"force-selection",-1),Yt=e(" prop"),Pt=a("p",null,[e("Eventually, you can use the "),a("code",null,"force-selection"),e(` prop to prevent unselecting a row when only
one remain selected.
`)],-1),Ot=e("The "),Ut=a("span",{class:"code"},"@row-select",-1),Jt=e(" event"),Kt=M(`<p>This event is fired each time a row is selected <strong>or unselected</strong> (so you don&#39;t need to listen
to 2 different events). <br>
As shown in this example (under the table), the <span class="code">@row-select</span> event will give you access to useful
information such as:</p><ul><li><code>item</code>: the clicked row object</li><li><code>selected</code>: a boolean telling if the row is being selected or unselected</li><li><code>selectedRows</code>: an array of all the selected rows objects</li></ul>`,2),Gt=e("wi-check"),Qt=e("Force selection"),Xt=a("div",{class:"mt4 title4"},"Selection info:",-1),Zt=e(`w-flex.mb4(wrap)
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
pre `+n("{{ selectionInfo }}")),ea=e(`<w-flex wrap class="mb4">
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
<pre>`+n("{{ selectionInfo }}")+"</pre>"),ta=e(`data: () => ({
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
`),aa=e("Updating the selected rows programmatically"),sa=a("p",null,`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`,-1),la=a("ul",null,[a("li",null,[a("strong",null,"In Vue 2"),e(", you can do 2-way binding on any variable other than the "),a("strong",{class:"code"},"v-model"),e(" using the "),a("code",null,".sync"),e(" modifier.")]),a("li",null,[a("strong",null,"In Vue 3"),e(", multiple "),a("strong",{class:"code"},"v-model"),e(" are supported in order to achieve 2-way binding. So you don't need "),a("code",null,".sync"),e(".")])],-1),na={class:"mt4"},ia=e("Selected rows:"),oa={class:"ml2"},ra=e(`data: () => ({
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
})`),da=e("In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier."),ma=a("br",null,null,-1),ca=e(`
By default the expanded rows array will use an `),ha=a("code",null,"id",-1),ua=e(` key, if present in the item object,
or will assign an internal unique ID otherwise.
If you want, you can override the default unique ID key (when internally needed) with
the `),ba=a("code",null,"uid-key",-1),fa=e(` prop, which is set to "id" by default.
`),pa=e("Expandable rows"),wa=e("This feature is in progress."),ga=e(" and is "),ya=e(" tall."),Na=e(" and is "),_a=e(" tall."),ka=e(" and is "),va=e(` tall.
  </template>
</w-table>`),xa=e(`data: () => ({
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
`),Fa=e("Headers & cells customization via slots"),Sa=a("p",null,"You can customize the headers labels and/or each row cells.",-1),Ra=e("Headers"),Ia=a("p",null,[e("In this example, only the headers are customized via the "),a("code",null,"header-label"),e(" slot.")],-1),Ca=e(`w-table(:headers="table.headers" :items="table.items")
  template(#header-label="{ label, index }") `+n("{{ index }}: {{ label }}")+" \u{1F44C}"),Da=e(`<w-table
  :headers="table.headers"
  :items="table.items">
  <template #header-label="{ label, index }">
    `+n("{{ index }}: {{ label }}")+` \u{1F44C}
  </template>
</w-table>`),La=e(`data: () => ({
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
`),qa=e("Item cells (inside <td> element)"),Ta=a("p",null,[e("In this example, only the items cells are customized via the "),a("code",null,"item"),e(` slot
(and the headers are hidden).`)],-1),Ea={key:0},ja={class:"grey mr2"},Ba=e(`data: () => ({
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
`),Va=e("override 1 particular item cell or column cells (inside <td> element)"),Ma=M(`<p>If you only need to override 1 particular column you can do it via the <code>item-cell.xxx</code> slot,
where <code>xxx</code> is a key defined in the headers.
In this example: <code>id</code>, <code>firstName</code>, <code>lastName</code>.<br><br>

If it&#39;s more convenient, you can also override a particular cell by its index like <code>item-cell.i</code>,
where <code>i</code> is a an integer starting at 1.</p>`,1),za={class:"px2 text-center green-light5--bg text-bold"},$a=e(`w-table(:headers="table.headers" :items="table.items" no-headers)
  template(#item-cell.id="{ item, label, header, index }")
    div.px2.text-center.green-light5--bg.text-bold `+n("{{ label }}")),Aa=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers>
  <template #item-cell.id="{ item, label, header, index }">
    <div class="px2 text-center green-light5--bg text-bold">
      `+n("{{ label }}")+`
    </div>
  </template>
</w-table>`),Wa=e(`data: () => ({
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
`),Ha=e("Full custom row (<tr> element itself)"),Ya=a("p",null,[e(`In this example, the full <tr> DOM element is customized, so you can add your own classes and
full layout.`),a("br"),e(`
As you notice, the `),a("code",null,"item"),e(` slot gives you full flexibility, but the drawback is that's also
harder to write (more verbose).`)],-1),Pa=["onClick"],Oa=e(`data: () => ({
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
`),Ua=a("span",{class:"code"},"colspan",-1),Ja=e(" on <td>"),Ka=a("p",null,[e("This example is showcasing another useful case: handling a colspan attribute."),a("br"),e(`
All the cells of all the rows are `),a("code",null,"colspan"),e("'d to one, and a custom row layout is applied.")],-1),Ga=["onClick"],Qa=["colspan"],Xa={class:"title3"},Za={class:"mr2"},es=e(`data: () => ({
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
`),ts=e("Responsiveness & mobile layout"),as=a("p",null,[e("In addition to the full responsiveness, the "),a("code",null,"w-table"),e(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),a("br"),e(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),a("code",null,"mobile-breakpoint"),e(`
parameter.`),a("br"),e(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),a("br"),a("br"),e(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)],-1),ss=e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700")`),ls=e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700">
</w-table>`),ns=e(`data: () => ({
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
`),is=a("p",null,[e("To stay lean and efficient, the minimum JavaScript behavior is added to the "),a("code",null,"w-table"),e(`
component.`),a("br"),e(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),a("br"),e(`
You can override it to set the width you want via:
`)],-1),os=e(".w-table--mobile .w-table__cell:before {width: 8em;}");function rs(s,i,c,x,D,w){const r=h("title-link"),d=h("w-table"),m=h("example"),L=h("ssh-pre"),y=h("w-icon"),q=h("w-tag"),N=h("w-button"),$=h("w-input"),_=h("alert"),A=h("w-radios"),W=h("w-flex");return b(),f("div",null,[l(r,{h2:""},{default:t(()=>[G]),_:1}),l(m,null,{pug:t(()=>[Q]),html:t(()=>[X]),js:t(()=>[Z]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table1.items},null,8,["headers","items"])]),_:1}),l(r,{h2:""},{default:t(()=>[ee]),_:1}),te,l(m,null,{pug:t(()=>[le]),html:t(()=>[ne]),js:t(()=>[ie]),default:t(()=>[l(d,{headers:s.table1.headers,items:[]},null,8,["headers"]),ae,l(d,{headers:s.table1.headers,items:[]},{"no-data":t(()=>[se]),_:1},8,["headers"])]),_:1}),l(r,{h2:""},{default:t(()=>[oe]),_:1}),re,l(m,null,{pug:t(()=>[de]),html:t(()=>[me]),js:t(()=>[ce]),default:t(()=>[l(d,{headers:s.table2.headers,items:s.table2.items},null,8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"example--no-headers"},{default:t(()=>[he]),_:1}),ue,l(m,null,{pug:t(()=>[be]),html:t(()=>[fe]),js:t(()=>[pe]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table1.items,"no-headers":""},null,8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"example--fixed-headers"},{default:t(()=>[we]),_:1}),l(m,null,{pug:t(()=>[ge]),html:t(()=>[ye]),js:t(()=>[Ne]),default:t(()=>[l(d,{headers:s.table3.headers,items:s.table3.items,"fixed-headers":"",style:{height:"250px"}},null,8,["headers","items"])]),_:1}),l(r,{h2:""},{default:t(()=>[_e]),_:1}),ke,l(L,{language:"css"},{default:t(()=>[ve]),_:1}),l(m,null,{pug:t(()=>[xe]),html:t(()=>[Fe]),js:t(()=>[Se]),default:t(()=>[l(d,{headers:s.table7.headers,items:s.table7.items,"resizable-columns":""},null,8,["headers","items"])]),_:1}),l(r,{h3:""},{default:t(()=>[Re]),_:1}),Ie,l(m,null,{pug:t(()=>[Ce]),html:t(()=>[De]),js:t(()=>[Le]),default:t(()=>[l(d,{headers:s.table8.headers,items:s.table8.items,"resizable-columns":"",onColumnResize:w.onColumnResize},null,8,["headers","items","onColumnResize"])]),_:1}),l(r,{h2:""},{default:t(()=>[qe]),_:1}),Te,l(m,null,{pug:t(()=>[e(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+n("{{ header.hidden ? '-off' : ''}}")+`
  | `+n("{{ header.label }}")+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`,1)]),html:t(()=>[e(`Toggle columns:
<w-tag
  v-for="(header, index) in table.headers"
  :key="index"
  class="ma1"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden">
  <w-icon class="mr2">mdi mdi-eye`+n("{{ header.hidden ? '-off' : ''}}")+`</w-icon>
  `+n("{{ header.label }}")+`
</w-tag>

<w-table
  :headers="table.headers.filter(header => !header.hidden)"
  :items="table.items"
  class="mt2">
</w-table>`,1)]),js:t(()=>[je]),default:t(()=>[Ee,(b(!0),f(F,null,R(s.table6.headers,(o,u)=>(b(),V(q,{class:"ma1",key:u,"bg-color":o.hidden?"grey-light4":"primary",onClick:J(p=>o.hidden=!o.hidden,["stop"])},{default:t(()=>[l(y,{class:"mr2"},{default:t(()=>[e("mdi mdi-eye"+n(o.hidden?"-off":""),1)]),_:2},1024),e(n(o.label),1)]),_:2},1032,["bg-color","onClick"]))),128)),l(d,{class:"mt2",headers:s.table6.headers.filter(o=>!o.hidden),items:s.table6.items},null,8,["headers","items"])]),_:1}),l(r,{h2:""},{default:t(()=>[Be]),_:1}),Ve,l(m,null,{pug:t(()=>[Me]),html:t(()=>[ze]),js:t(()=>[$e]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table1.items,sort:s.table1.sort,"onUpdate:sort":i[0]||(i[0]=o=>s.table1.sort=o)},null,8,["headers","items","sort"])]),_:1}),l(r,{h2:""},{default:t(()=>[Ae]),_:1}),We,l(m,null,{pug:t(()=>[Ue]),html:t(()=>[Je]),js:t(()=>[Ke]),default:t(()=>[a("div",He,[l(N,{class:"mr2 mb1",onClick:i[1]||(i[1]=o=>s.table3.activeFilter=0),round:"",outline:s.table3.activeFilter!==0},{default:t(()=>[Ye]),_:1},8,["outline"]),l(N,{class:"mr2 mb1",onClick:i[2]||(i[2]=o=>s.table3.activeFilter=1),round:"",outline:s.table3.activeFilter!==1},{default:t(()=>[Pe]),_:1},8,["outline"]),l(N,{class:"mr2 mb1",onClick:i[3]||(i[3]=o=>s.table3.activeFilter=2),round:"",outline:s.table3.activeFilter!==2},{default:t(()=>[Oe]),_:1},8,["outline"])]),l(d,{headers:s.table3.headers,items:s.table3.items,filter:s.table3.filters[s.table3.activeFilter]},null,8,["headers","items","filter"])]),_:1}),l(r,{h3:""},{default:t(()=>[Ge]),_:1}),Qe,l(m,null,{pug:t(()=>[Xe]),html:t(()=>[Ze]),js:t(()=>[et]),default:t(()=>[l($,{class:"mb3",modelValue:s.table4.keyword,"onUpdate:modelValue":i[4]||(i[4]=o=>s.table4.keyword=o),placeholder:"Search anything...","inner-icon-left":"wi-search"},null,8,["modelValue"]),l(d,{headers:s.table4.headers,items:s.table4.items,filter:s.table4.keywordFilter(s.table4.keyword)},null,8,["headers","items","filter"])]),_:1}),l(_,{tip:""},{default:t(()=>[tt,at,st,lt,l(y,{class:"red mr1",size:"0.9em"},{default:t(()=>[nt]),_:1}),it,ot,rt,dt,mt,ct,ht,ut,bt,ft,pt,wt,gt]),_:1}),l(r,{h2:""},{default:t(()=>[yt]),_:1}),Nt,l(N,{class:"mb2",disabled:s.table1.loading,onClick:w.reload},{default:t(()=>[l(y,{class:"mr1"},{default:t(()=>[_t]),_:1}),kt]),_:1},8,["disabled","onClick"]),l(r,{h3:""},{default:t(()=>[vt]),_:1}),l(m,null,{pug:t(()=>[xt]),html:t(()=>[Ft]),js:t(()=>[St]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table1.items,loading:s.table1.loading},null,8,["headers","items","loading"])]),_:1}),l(r,{h3:"",slug:"loading-with-fixed-header"},{default:t(()=>[Rt]),_:1}),l(m,null,{pug:t(()=>[It]),html:t(()=>[Ct]),js:t(()=>[Dt]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table3.items,"fixed-headers":"",loading:s.table1.loading,style:{height:"200px"}},null,8,["headers","items","loading"])]),_:1}),l(r,{h2:"",slug:"pagination"},{default:t(()=>[Lt,l(q,{class:"ml2 text-bold",round:"",color:"warning",outline:"",sm:""},{default:t(()=>[qt]),_:1})]),_:1}),l(m,null,{pug:t(()=>[]),js:t(()=>[Et]),default:t(()=>[Tt]),_:1}),l(r,{h2:""},{default:t(()=>[jt]),_:1}),Bt,Vt,l(r,{h3:"",slug:"example--selectable-rows"},{default:t(()=>[Mt,zt,$t]),_:1}),At,l(r,{h3:"",slug:"example--force-selection"},{default:t(()=>[Wt,Ht,Yt]),_:1}),Pt,l(r,{h3:"",slug:"example--row-select"},{default:t(()=>[Ot,Ut,Jt]),_:1}),Kt,l(m,null,{pug:t(()=>[Zt]),html:t(()=>[ea]),js:t(()=>[ta]),default:t(()=>[l(W,{class:"mb4",wrap:""},{default:t(()=>[l(A,{class:"mr6",modelValue:s.table1.selectableRows,"onUpdate:modelValue":i[5]||(i[5]=o=>s.table1.selectableRows=o),items:s.selectableRowsOptions},null,8,["modelValue","items"]),l(N,{class:"my3",onClick:i[6]||(i[6]=o=>s.table1.forceSelection=!s.table1.forceSelection),round:"",outline:!s.table1.forceSelection},{default:t(()=>[s.table1.forceSelection?(b(),V(y,{key:0,class:"mr2"},{default:t(()=>[Gt]),_:1})):K("",!0),Qt]),_:1},8,["outline"])]),_:1}),l(d,{headers:s.table1.headers,items:s.table1.items,"selectable-rows":s.table1.selectableRows,"force-selection":s.table1.forceSelection,onRowSelect:i[7]||(i[7]=o=>s.selectionInfo=o)},null,8,["headers","items","selectable-rows","force-selection"]),Xt,a("pre",null,n(s.selectionInfo),1)]),_:1}),l(r,{h3:""},{default:t(()=>[aa]),_:1}),sa,l(_,{tip:""},{default:t(()=>[la]),_:1}),l(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows")
.mt4
  | Selected rows:
  code.ml2 `+n("{{ table.selectedRows }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows">
</w-table>

<div class="mt4">
  Selected rows:
  <code class="ml2">`+n("{{ table.selectedRows }}")+`</code>
</div>`,1)]),js:t(()=>[ra]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table1.items,"selectable-rows":"","selected-rows":s.table1.selectedRows,"onUpdate:selected-rows":i[8]||(i[8]=o=>s.table1.selectedRows=o)},null,8,["headers","items","selected-rows"]),a("div",na,[ia,a("code",oa,n(s.table1.selectedRows),1)])]),_:1}),l(_,{info:""},{default:t(()=>[da,ma,ca,ha,ua,ba,fa]),_:1}),l(r,{h2:"",slug:"example--expandable-rows"},{default:t(()=>[pa]),_:1}),l(_,{warning:""},{default:t(()=>[wa]),_:1}),l(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="table.items" expandable-rows)
  template(#row-expansion="{ item }")
    w-icon.mr2(:color="['blue', 'pink'][item.gender]")
      | mdi `+n("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    | `+n("{{ item.firstName }}")+" weighs ",1),a("strong",null,n("{{ item.weight }}")+"kg",1),Na,a("strong",null,n("{{ item.height }}")+"m",1),_a]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  expandable-rows>
  <template #row-expansion="{ item }">
    <w-icon class="mr2" :color="['blue', 'pink'][item.gender]">
      mdi `+n("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    </w-icon>
    `+n("{{ item.firstName }}")+" weighs ",1),a("strong",null,n("{{ item.weight }}")+"kg",1),ka,a("strong",null,n("{{ item.height }}")+"m",1),va]),js:t(()=>[xa]),default:t(()=>[l(d,{headers:s.table5.headers,items:s.table5.items,"expandable-rows":""},{"row-expansion":t(({item:o})=>[l(y,{class:"mr2",color:["blue","pink"][o.gender]},{default:t(()=>[e("mdi "+n(["mdi-gender-male","mdi-gender-female"][o.gender]),1)]),_:2},1032,["color"]),e(n(o.firstName)+" weighs ",1),a("strong",null,n(o.weight)+"kg",1),ga,a("strong",null,n(o.height)+"m",1),ya]),_:1},8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"slots"},{default:t(()=>[Fa]),_:1}),Sa,l(r,{h3:""},{default:t(()=>[Ra]),_:1}),Ia,l(m,null,{pug:t(()=>[Ca]),html:t(()=>[Da]),js:t(()=>[La]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table1.items},{"header-label":t(({label:o,index:u})=>[e(n(u)+": "+n(o)+" \u{1F44C}",1)]),_:1},8,["headers","items"])]),_:1}),l(r,{h3:"",slug:"item-cells"},{default:t(()=>[qa]),_:1}),Ta,l(m,null,{pug:t(()=>[e(`w-table(:headers="table.headers" no-headers :items="table.items")
  template(#item-cell="{ item, label, header, index }")
    small.grey.mr2 `+n("{{ header.label }}")+`:
    span `+n("{{ label }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items">
  <template #item-cell="{ item, label, header, index }">
    <small class="grey mr2">`+n("{{ header.label }}")+`:</small>
    <span>`+n("{{ label }}")+`</span>
  </template>
</w-table>`,1)]),js:t(()=>[Ba]),default:t(()=>[l(d,{headers:s.table1.headers,"no-headers":"",items:s.table1.items},{"item-cell":t(({item:o,label:u,header:p,index:g})=>[p.key==="id"?(b(),f("small",Ea,"#"+n(g),1)):(b(),f(F,{key:1},[a("small",ja,n(p.label)+":",1),a("span",null,n(u),1)],64))]),_:1},8,["headers","items"])]),_:1}),l(r,{h3:"",slug:"override-1-particular-item-cell"},{default:t(()=>[Va]),_:1}),Ma,l(m,null,{pug:t(()=>[$a]),html:t(()=>[Aa]),js:t(()=>[Wa]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table1.items,"no-headers":""},{"item-cell.id":t(({item:o,label:u,header:p,index:g})=>[a("div",za,n(u),1)]),_:1},8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"full-custom-rows"},{default:t(()=>[Ha]),_:1}),Ya,l(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(:class="classes" @click="select")
      td(
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`")
        | `+n("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr :class="classes" @click="select">
      <td
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`">
        `+n("{{ item[header.key] || '' }}")+`
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[Oa]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table1.items,"selectable-rows":""},{item:t(({item:o,index:u,select:p,classes:g})=>[a("tr",{class:I(g),onClick:p},[(b(!0),f(F,null,R(s.table1.headers,(k,S)=>(b(),f("td",{key:S,class:I(`pa4 text-${k.align||"left"}`)},n(o[k.key]||""),3))),128))],10,Pa)]),_:1},8,["headers","items"])]),_:1}),l(r,{h3:"",slug:"colspan-on-td"},{default:t(()=>[Ua,Ja]),_:1}),Ka,l(m,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(
      :class="{ ...classes, 'indigo-light5--bg': index % 2, 'blue-light5--bg': !(index % 2) }"
      @click="select")
      td.pa2(:colspan="table.headers.length")
        .title3 Row #`+n("{{ index }}")+`
        ul
          li(v-for="(header, i) in table.headers" :key="i")
            strong.mr2 `+n("{{ header.label }}")+`:
            | `+n("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
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
          Row #`+n("{{ index }}")+`
        </div>
        <ul>
          <li v-for="(header, i) in table.headers" :key="i">
            <strong class="mr2">
              `+n("{{ header.label }}")+`:
            </strong>
            `+n("{{ item[header.key] || '' }}")+`
          </li>
        </ul>
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[es]),default:t(()=>[l(d,{headers:s.table1.headers,items:s.table1.items,"no-headers":"","selectable-rows":""},{item:t(({item:o,index:u,select:p,classes:g})=>[a("tr",{class:I(B(j({},g),{"indigo-light5--bg":u%2,"blue-light5--bg":!(u%2)})),onClick:p},[a("td",{class:"pa2",colspan:s.table1.headers.length},[a("div",Xa,"Row #"+n(u),1),a("ul",null,[(b(!0),f(F,null,R(s.table1.headers,(k,S)=>(b(),f("li",{key:S},[a("strong",Za,n(k.label)+":",1),e(n(o[k.key]||""),1)]))),128))])],8,Qa)],10,Ga)]),_:1},8,["headers","items"])]),_:1}),l(r,{h2:""},{default:t(()=>[ts]),_:1}),as,l(m,null,{pug:t(()=>[ss]),html:t(()=>[ls]),js:t(()=>[ns]),default:t(()=>[l(d,{headers:s.table2.headers,items:s.table2.items,"mobile-breakpoint":700},null,8,["headers","items"])]),_:1}),l(_,{tip:""},{default:t(()=>[is,l(L,{class:"mt5 mb0",language:"css",label:"CSS"},{default:t(()=>[os]),_:1})]),_:1})])}const v=[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:6,firstName:"Baldwin",lastName:"Morison"},{id:7,firstName:"Beckah",lastName:"Mann"},{id:8,firstName:"Davie",lastName:"Forester"},{id:9,firstName:"Andi",lastName:"Montgomery"},{id:10,firstName:"Magnolia",lastName:"Kirk"},{id:11,firstName:"Hamilton",lastName:"Mallory"},{id:12,firstName:"Sheree",lastName:"Castle"},{id:13,firstName:"Rebekah",lastName:"Eason"},{id:14,firstName:"Maude",lastName:"Hayley"},{id:15,firstName:"Josie",lastName:"Richard"}],ds={data:()=>({table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:v.slice(0,5),sort:"+firstName",loading:!0,selectableRows:!0,selectedRows:[2,4],forceSelection:!1},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:v.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:v,filters:[null,s=>s.lastName[0]==="M",s=>s.id>=10],activeFilter:0},table4:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:v,keyword:"",keywordFilter:s=>i=>{const c=`${i.id} ${i.firstName} ${i.lastName}`;return new RegExp(s,"i").test(c)}},table5:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",gender:1,weight:56,height:1.69},{id:2,firstName:"Nellie",lastName:"Lynn",gender:1,weight:62,height:1.77},{id:3,firstName:"Rory",lastName:"Bristol",gender:0,weight:71,height:1.75},{id:4,firstName:"Daley",lastName:"Elliott",gender:0,weight:84,height:1.83},{id:5,firstName:"Virgil",lastName:"Carman",gender:0,weight:74,height:1.72}]},table6:{headers:[{label:"ID",key:"id",hidden:!1},{label:"First name",key:"firstName",hidden:!1},{label:"Last name",key:"lastName",hidden:!1}],items:v.slice(0,5)},table7:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table8:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},selectableRowsOptions:[{label:'<code class="mr2">:selectable-row="false"</code> (default)',value:!1},{label:"<code>selectable-row</code>",value:!0},{label:'<code>:selectable-row="1"</code>',value:1}],selectionInfo:{}}),methods:{reload(){this.table1.loading=!0,setTimeout(()=>this.table1.loading=!1,2e3)},hideColumn(s){this.table6.headers[s].hidden=!this.table6.headers[s].hidden},onColumnResize({index:s,widths:i}){i.forEach((c,x)=>this.table8.headers[x].width=c),localStorage.tableWidths=i}},mounted(){var s;this.reload(),(s=localStorage.tableWidths)==null||s.split(",").forEach((i,c)=>this.table8.headers[c].width=i)}};var ms=C(ds,[["render",rs]]);const cs=a("div",{class:"w-divider my12"},null,-1),hs=e("API");function us(s,i,c,x,D,w){const r=h("title-link"),d=h("component-api");return b(),f("div",null,[cs,l(r,{class:"title1",h2:""},{default:t(()=>[hs]),_:1}),l(d,{class:"mt0",items:w.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(d,{items:s.slots,title:"Slots"},null,8,["items"]),l(d,{items:w.events,title:"Events"},null,8,["items"])])}const bs={items:"An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>",headers:'An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li>If needed, you can also add any custom property.</li></ul>',noHeaders:"The table headings will be hidden. Only the table data will be visible.",fixedHeaders:"When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.",loading:"When set to <code>true</code>, a progress bar will be displayed. Convenient when the table data is not ready.",sort:'Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.',expandableRows:"Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.",expandedRows:"Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",selectableRows:"Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.",selectedRows:"Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",forceSelection:"Prevent unselecting a row when only one remains selected.",uidKey:"In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.",filter:"An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>",mobileBreakpoint:"When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.",resizableColumns:"When this option is on, the columns will be separated by borders that you can drag to resize."},fs={"no-data":{description:"Provide a custom template when there is no data."},loading:{description:"Provide a custom loading template."},"header-label":{description:"Provide a custom header label template.",params:{label:"The label of the header being rendered.",header:"The full header object being rendered.",index:"The index of the header cell being rendered. Starts at 1."}},item:{description:"Provide a custom item template for each full &lt;tr&gt;.",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1.",select:"When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).",classes:"The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object."}},"item-cell":{description:"Provide a custom item cell template (each &lt;td&gt; of each item row).",params:{item:"The full item object of the row being rendered.",header:"The related header object of the current column of the cell being rendered.",label:"The content of the cell being rendered.",index:"The index of the cell in the row being rendered. Starts at 1."}},"row-expansion":{description:"Provide a custom template for the row expansions (to display in an expanded row).",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1."}}},ps={"row-click":{description:"",params:{item:"The associated row item object.",index:"The index of the row being clicked (starts at 0) in the current filtering state."}},"row-select":{description:"<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.",params:{item:"The associated row item object.",index:"The index of the row being selected (starts at 0) in the current filtering state.",selected:"A boolean representing the selected state of the clicked row.",selectedRows:"An array containing all the expanded rows objects."}},"row-expand":{description:"<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.",params:{item:"The associated row item object.",index:"The index of the row being expanded (starts at 0) in the current filtering state.",expanded:"A boolean representing the expanded state of the clicked row.",expandedRows:"An array containing all the expanded rows objects."}},"update:sort":{description:"Emitted every time the sorting string is updated by a user interaction.",params:{"[String]":"The currently applied sorting on the table rows. E.g. <code>+firstName</code>"}},"update:selected-rows":{description:"Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.",params:{"[Array]":"The current array of selected rows."}},"update:expanded-rows":{description:"Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.",params:{"[Array]":"The current array of expanded rows."}},"column-resize":{description:"Emitted on mouseup after a column has been resized.",params:{index:"The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).",widths:"An array containing all the new widths of the columns after resizing."}}},ws={data:()=>({propsDescs:bs,slots:fs}),computed:{props(){return z.props},events(){return z.emits.reduce((s,i)=>(s[i]=ps[i]||{})&&s,{})}}};var gs=C(ws,[["render",us]]);const ys=e("w-table");function Ns(s,i,c,x,D,w){const r=h("ui-component-title"),d=h("examples"),m=h("api");return b(),f("main",null,[l(r,{slug:"w-table"},{default:t(()=>[ys]),_:1}),l(d),l(m)])}const _s={components:{Examples:ms,Api:gs}};var Fs=C(_s,[["render",Ns]]);export{Fs as default};
